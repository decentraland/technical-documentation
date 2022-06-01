import { cloneRepos } from './../utils/cloneRepos.js'
import { cleanUpDependencies } from './../utils/shellCommands.js'
import { yamlToJson } from './../utils/yamlToJson.js'

async function main() {
  await cloneRepos()
  await cleanUpDependencies(process.cwd(), './src/repos')
  await yamlToJson("./src/repos/legacy/_data/menu.yml", "./src/repos/legacy/_data/menu.json")
}

main()
  .then(() => true)
  .catch((e: any) => console.log(e))