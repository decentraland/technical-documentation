import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

exports.onCreateNode = async ({ node, getNode, actions }: any) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
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
        allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then((result: any) => {
      console.log(result)
      result.data.allMarkdownRemark.edges.forEach(({ node }: any) => {
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
