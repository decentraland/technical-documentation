const fs = require('fs-extra')
const dotenv = require('dotenv')

let ENV_CONTENT = {}

if (fs.existsSync('.env')) {
  Object.assign(ENV_CONTENT, dotenv.parse(fs.readFileSync('.env')))
}

const packageJson = JSON.parse(fs.readFileSync('./package.json').toString())

Object.assign(ENV_CONTENT, getPublicUrls())

packageJson.homepage = ENV_CONTENT['GATSBY_PUBLIC_URL']

if (packageJson.homepage) {
  const url = new URL(packageJson.homepage)

  if (process.env.GITHUB_BASE_REF) {
    ENV_CONTENT['GATSBY_PUBLIC_PATH'] = url.pathname
  } else {
    ENV_CONTENT['ASSET_PREFIX'] = ENV_CONTENT['GATSBY_PUBLIC_URL']
  }

  ENV_CONTENT['GATSBY_URL'] = url.origin
  // github action outputs. Do not touch.
  console.log('::set-output name=public_url::' + packageJson.homepage)
  console.log('::set-output name=public_path::' + url.pathname)
}

fs.writeFileSync(
  `.env.${process.env.NODE_ENV}`,
  Object.entries(ENV_CONTENT)
    .map((e) => e[0] + '=' + JSON.stringify(e[1]))
    .join('\n') + '\n'
)

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))

function getPublicUrls() {
  if (!process.env.GEN_STATIC_LOCAL) {
    if (process.env.GITHUB_BASE_REF) {
      // Pull request
      return {
        GATSBY_PUBLIC_URL: `https://sdk-team-cdn.decentraland.org/${packageJson.name}/branch/${process.env.GITHUB_HEAD_REF}`
      }
    } else if (process.env.CI) {
      // master/main branch, also releases
      return {
        GATSBY_PUBLIC_URL: `https://cdn.decentraland.org/${packageJson.name}/${packageJson.version}`
      }
    }
  }
  // localhost
  return {
    GATSBY_PUBLIC_URL: ``
  }
}
