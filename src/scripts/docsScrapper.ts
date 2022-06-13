import { cleanUpDependencies } from './../utils/shellCommands.js'
import { yamlToJson } from './../utils/yamlToJson.js'
import { downloadRepos } from './../utils/downloadRepos.js'

async function main() {
//  await cloneRepos()
  await downloadRepos()
  await cleanUpDependencies(process.cwd(), './src/repos')
  await yamlToJson("./src/repos/legacy/documentation-master/_data/menu.yml", "./src/repos/legacy/documentation-master/_data/menu.json")
}

main()
  .then(() => true)
  .catch((e: any) => console.log(e))