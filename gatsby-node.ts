import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { cloneRepos } from './src/utils/cloneRepos'
import {
  cleanUpDependencies
  // moveToParentDir,
} from './src/utils/shellCommands'

exports.onCreateNode = async ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

// exports.onPreInit = async () => {
//   console.log('running pre build scripts')
//   async function main() {
//     await cloneRepos()
//     await cleanUpDependencies(process.cwd(), './src/repos')
//     // await moveToParentDir(process.cwd(), "./src/repos");
//   }

//   await main()
// }

exports.createPages = ({ graphql, actions }: any) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result: any) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }: any) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/docs-post.tsx`),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve(true)
    })
  })
}