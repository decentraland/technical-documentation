import { cleanUpDependencies } from './../utils/shellCommands.js'
import { yamlToJson } from './../utils/yamlToJson.js'
import { downloadRepos } from './../utils/downloadRepos.js'

async function main() {
  await downloadRepos()
  await cleanUpDependencies(process.cwd(), './src/repos')
  await yamlToJson(
    './src/repos/player/documentation-master/_data/menu.yml',
    './src/repos/player/documentation-master/_data/menu.json'
  )
}

main()
  .then(() => true)
  .catch((e: any) => console.log(e))
