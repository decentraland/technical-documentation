import fs, { linkSync } from 'fs-extra'

export async function generateMenuMap() {
    // get categories
    const menuData = []
    fs.readdir('./src/repos', function(err, list) {
        console.log(list)
        list.forEach(category => {
            menuData.push({category})

            fs.readdir(`./src/repos/${category}`, (err, file) => {
                console.log(file)
            })
        })
    })    
}
