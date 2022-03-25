import { spawn } from 'child_process'

const FileDescriptorStandardOption = {
  SILENT: 1,
  PIPE: 2,
  ONLY_IF_THROW: 3
}

export function runCommand({ workingDir, command, args, fdStandards }: any) {
  const standarOption = fdStandards || FileDescriptorStandardOption.SILENT
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      shell: true,
      cwd: workingDir,
      env: { ...process.env, NODE_ENV: '' }
    })

    let stdOut = ''
    let stdErr = ''

    if (standarOption === FileDescriptorStandardOption.PIPE) {
      child.stdout.pipe(process.stdout)
      child.stderr.pipe(process.stderr)

    } else if (standarOption === FileDescriptorStandardOption.ONLY_IF_THROW) {
      child.stdout.on('data', (data) => {
        stdOut += data.toString()
      })

      child.stderr.on('data', (data) => {
        stdErr += data.toString()
      })
    }

    child.on('close', (code) => {
      const errorMessage = `Command '${command}' with args '${args.join(
        ' '
      )}' exited with code ${code}. \n
          > Working directory: ${workingDir} `

      if (code !== 0) {
        if (standarOption === FileDescriptorStandardOption.ONLY_IF_THROW) {
          reject(
            new Error(`${errorMessage} \n
            > Standard output: \n ${stdOut} \n
            > Error output: \n ${stdErr} \n`)
          )
        } else {
          reject(new Error(errorMessage))
        }
      }
      resolve(true)
    })
  })
}

export function downloadRepo(
  workingDir: string,
  url: string,
  destinationPath: string
) {
  return runCommand({
    workingDir,
    command: 'git',
    args: ['clone', '--depth', '1', url, destinationPath],
    fdStandards: FileDescriptorStandardOption.PIPE
  })
}

export function cleanUpDependencies(workingDir: string, targetDir: string) {
  return runCommand({
    workingDir,
    command: 'find',
    args: [
      targetDir,
      '-mindepth 3',
      '-maxdepth 3',
      '-not',
      '-name',
      'docs',
      '-exec',
      'rm',
      '-rf',
      '{}',
      '+'
    ],
    fdStandards: FileDescriptorStandardOption.PIPE
  })
}

// export function moveToParentDir(workingDir: string, targetDir: string) {
//   return runCommand({
//     workingDir,
//     command: 'find',
//     args: [
//       targetDir,
//       "-name '*.md'",
//       '-execdir',
//       'mv',
//       '{}',
//       '".."',
//       '\;'
//     ],
//     fdStandards: FileDescriptorStandardOption.PIPE
//   })
// }

export function removeFolder(workingDir: string, targetDir: string, folder: string) {
  return runCommand({
    workingDir,
    command: 'find',
    args: [
      targetDir,
      '-name',
      folder,
      '-exec',
      'rm',
      '-rf',
      '{}',
      '+'
    ],
    fdStandards: FileDescriptorStandardOption.PIPE
  })
}

//find ./src/repos -name '*.md' -execdir mv {} '../' \;