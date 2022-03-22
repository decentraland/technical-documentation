import fs from 'fs-extra'
import PQueue from 'p-queue'
import repositoryListJson from './../repositories.json'
const DOCS_FOLDER = 'repos'
import { downloadRepo } from './shellCommands.js'

export async function cloneRepos() {
  const queue = new PQueue({ concurrency: 10 })
  const currentWorkingDir = process.cwd()
  const promises = repositoryListJson.repositories.map((repo) =>
    queue.add(async () => {
      if (!repo.url.startsWith('https://')) {
        throw new Error(`Repo ${repo.url} is not safe.`)
      }

      const dir = `${currentWorkingDir}/src/${DOCS_FOLDER}/${repo.category.toLowerCase()}/${repo.name}`

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        try {
          await downloadRepo(currentWorkingDir, repo.url, dir)
        } catch (e) {
          console.log(e)
        }
      }
    })
  )
  await Promise.all(promises)
}
