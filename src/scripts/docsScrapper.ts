import { cloneRepos } from './../utils/cloneRepos.js'
import { cleanUpDependencies, moveToParentDir, removeFolder } from './../utils/shellCommands.js'
import { generateMenuMap } from "./../utils/generateMenuMap.js"

async function main() {
  await cloneRepos()
  await cleanUpDependencies(process.cwd(), './src/repos')
  await moveToParentDir(process.cwd(), './src/repos')
  await removeFolder(process.cwd(), './src/repos', 'docs')
  await generateMenuMap()
}

main()
  .then(() => true)
  .catch((e: any) => console.log(e))