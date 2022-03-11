import fs from 'fs-extra'
import path from 'path'
import PQueue from 'p-queue'

import repositoryListJson from './../repositories.json'
const DOCS_FOLDER = 'repos'
import { downloadRepo } from './shellCommands.js'

export async function cloneRepos() {
  const queue = new PQueue({ concurrency: 10 })
  const currentWorkingDir = path.resolve(process.cwd(), DOCS_FOLDER)
  const promises = repositoryListJson.repositories.map((repo) =>
    queue.add(async () => {
      if (!repo.url.startsWith('https://')) {
        throw new Error(`Repo ${repo.url} is not safe.`)
      }

      const dir = `${process.cwd()}/src/${DOCS_FOLDER}/${repo.category}/${
        repo.name
      }`

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        await downloadRepo(currentWorkingDir, repo.url, dir)
      }
    })
  )
  await Promise.all(promises)
}
