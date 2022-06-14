import extract from 'extract-zip'
import { readdir, remove, writeFile, existsSync, mkdirSync, writeFileSync } from 'fs-extra'
import path from 'path'
import fetch from 'node-fetch'
import PQueue from 'p-queue'
import repositoryListJson from './../repositories.json'

export const downloadFile = async function (url: string, dest: string) {
  const data = await (await fetch(url)).arrayBuffer()

  console.log(data, 123)
  await writeFile(dest, Buffer.from(data))
}

export const downloadRepoZip = async function (url: string, dest: string, name: string) {
  const zipFilePath = path.resolve(dest, `${name}.zip`)
  
    await downloadFile(url, zipFilePath)

    try {
      await extract(zipFilePath, { dir: dest + '/' + name })
    } catch (err) {
      console.log(`Couldn't extract the zip of the repository.`, err)
      throw err
    }

  await remove(zipFilePath)
}

export async function downloadRepos() {
    const queue = new PQueue({ concurrency: 10 })
    const destinationDir = process.cwd() + '/src/repos/'

    if (!existsSync(destinationDir)) {
        mkdirSync(destinationDir, { recursive: true })
    }
    
    const promises = repositoryListJson.repositories.map((repo) =>
      queue.add(async () => {
        await downloadRepoZip(repo.zipUrl, destinationDir, repo.name) 
      })
    )
    await Promise.all(promises)
  }