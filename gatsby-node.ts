import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@utils': path.resolve('./src/utils')
      }
    }
  })
}

exports.onCreateNode = async ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug.toLowerCase()
    })
  }
}

exports.createPages = ({ graphql, actions }: any) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `).then((result: any) => {
      result.data.allMdx.edges.forEach(({ node }: any) => {
        createPage({
          path: node.frontmatter.slug,
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
