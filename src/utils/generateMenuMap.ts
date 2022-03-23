import fs from 'fs'

const basePath = './src/repos'

function getDirectories(path) {
    return fs.readdirSync(path)
}

export async function generateMenuMap() {
    const categories = getDirectories(basePath)
    const menu = []
    categories.map(((item) => {
        menu.push({
            name: item.toLowerCase(),
            type: 'dir',
            children: buildLeafs([], `${basePath}/${item}`)
        })
    }))

    console.log(menu)

    fs.writeFile('./src/mocks/generated-menu.json', JSON.stringify(menu), err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
        console.log('Menu file generated succesfully')
      })
      
}

function buildLeafs(currentScope, path) {
    const nextLayer = getDirectories(path)    

    console.log(currentScope)

    nextLayer.forEach((nextItem, i) => {
        if (fs.statSync(`${path}/${nextItem}`).isDirectory()) {
            if (nextItem.toLowerCase() === "docs") {
            } else {
                currentScope.push({
                    name: nextItem.toLowerCase(),
                    type: 'dir',
                    children: buildLeafs([], `${path}/${nextItem}`)
                })
            }
        } else {
            currentScope.push({
                name: nextItem.toLowerCase(),
                type: 'file'
            })
        }
    })

    return currentScope
}