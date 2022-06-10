import extract from 'extract-zip'
import { rmdirSync } from 'fs'
import { move, readdir, remove, writeFile } from 'fs-extra'
import path from 'path'
import fetch from 'node-fetch'
import PQueue from 'p-queue'
import repositoryListJson from './../repositories.json'

export const downloadFile = async function (url: string, dest: string) {
  const data = await (await fetch(url)).arrayBuffer()
  await writeFile(dest, Buffer.from(data))
}

export const downloadRepoZip = async function (url: string, dest: string, index: number) {
  const zipFilePath = path.resolve(dest, `temp-zip-project${index}.zip`)
  await downloadFile(url, zipFilePath)

  const oldFiles = await readdir(dest)

  try {
    await extract(zipFilePath, { dir: dest })
  } catch (err) {
    console.log(`Couldn't extract the zip of the repository.`, err)
    throw err
  }

  const newFiles = await readdir(dest)

  const directoryCreated = newFiles.filter((value) => !oldFiles.includes(value))

  if (directoryCreated.length !== 1) {
    throw new Error(
      'Please, make sure not to modify the directory while the example repository is downloading.'
    )
  }

  const extractedPath = path.resolve(dest, directoryCreated[0])
  const filesToMove = await readdir(extractedPath)

  for (const filePath of filesToMove) {
    await move(
      path.resolve(extractedPath, filePath),
      path.resolve(dest, filePath)
    )
  }

  rmdirSync(extractedPath)
  await remove(zipFilePath)
}

export async function downloadRepos() {
    const queue = new PQueue({ concurrency: 10 })
    const currentWorkingDir = process.cwd()
    const promises = repositoryListJson.repositories.map((repo, i) =>
      queue.add(async () => {
        downloadRepoZip(repo.zipUrl, currentWorkingDir + '/src/repos/', i) 
      })
    )
    await Promise.all(promises)
  }