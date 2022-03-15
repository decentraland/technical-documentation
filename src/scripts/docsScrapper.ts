import { cloneRepos } from './../utils/cloneRepos.js'
import { cleanUpDependencies } from './../utils/shellCommands.js'

async function main() {
  await cloneRepos()
  await cleanUpDependencies(process.cwd(), './src/repos')
  // await moveToParentDir(process.cwd(), './src/repos')
}

main()
  .then(() => true)
  .catch((e: any) => console.log(e))