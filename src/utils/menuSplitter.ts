import * as fs from 'fs';

export default function menuSplitter() {

  const menu = {
    contributor: [],
    user: [],
    creator: []
  }

  fs.readdir("./src/menu-data/", (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        try {
          const data = fs.readFileSync("./src/menu-data/" + file, 'utf8')
          console.log(data)
        } catch (err) {
          console.error(err)
        }
      })
    }
  })
}

menuSplitter()