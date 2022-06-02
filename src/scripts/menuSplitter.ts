import * as fs from 'fs'

export default function menuSplitter() {
  const menu = {}

  fs.readdir('./src/menu-data/', async (err, files) => {
    if (err) console.log(err)
    else {
      files.forEach((file) => {
        try {
          const data = file != 'legacy.json' && JSON.parse(
            fs.readFileSync('./src/menu-data/' + file, 'utf8')
          )

          Object.keys(data).map((key) => {         
            data[key].map((item) => {
              if (menu[key]) {
                const categoryIndex = menu[key].findIndex((element) => {
                  if (element.name === item.name) {
                    return true
                  }
                })

                if (menu[key][categoryIndex]) {
                  menu[key][categoryIndex].children = [
                    ...menu[key][categoryIndex].children,
                    ...item.children
                  ]
                } else {
                  menu[key] = [...menu[key], item]
                }
              } else {
                menu[key] = [item]
              }
            })
          })

          menu['legacy'] = mapLegacyMenu()

          fs.writeFileSync('./src/repos/menu.json', JSON.stringify(menu))
        } catch (err) {
          console.error(err)
        }
      })
    }
  })
}

// TODO - copy file to folder
function mapLegacyMenu() {
  try {
    const data = JSON.parse(
      fs.readFileSync('./src/menu-data/legacy.json', 'utf8')
    )

    return data.map(item => {
      return generateMappedObject(item)
    })

  } catch(e) {
    console.log(e)
  }
}

function formatName(slug) {
  const splitSlug = slug.split('/')
  const name = splitSlug[splitSlug.length -1].replace(/([0-9]+(-[0-9]+)+)-/, '').replaceAll('-', ' ').replace('.md', '')
  return name
}

function generateMappedObject(item) {
  let mappedItem = {}
    if (item.title) {
      mappedItem = {...mappedItem, name: item.title}
    } else {
      mappedItem = {...mappedItem, name: formatName(item.post)}
    }

    if (item.post) {
      mappedItem = {...mappedItem, slug: '/' + item.post.replace('.md', '')}
    }
    if (item.children) {
      const children = item.children.map(child => {
        return generateMappedObject(child)
      })

      mappedItem = {...mappedItem, children }
    }
  return mappedItem
}

mapLegacyMenu()

menuSplitter()
