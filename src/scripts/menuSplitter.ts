import * as fs from 'fs'

export default function menuSplitter() {
  const menu = {}

  fs.readdir('./src/menu-data/', async (err, files) => {
    if (err) console.log(err)
    else {
      files.forEach((file) => {
        try {
          const data = JSON.parse(
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

          fs.writeFileSync('./src/repos/menu.json', JSON.stringify(menu))
        } catch (err) {
          console.error(err)
        }
      })
    }
  })
}

menuSplitter()
