import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        utils: path.resolve('./src/utils')
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

exports.createPages = async ({ graphql, actions }: any) => {

  const posts  = await graphql(`
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
    `)

  const legacyData  = await graphql(`
  {
    allMdx(filter: { frontmatter: { redirect_from: { ne: null } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            redirect_from
            title
          }
        }
      }
    }
  }
`)

  const pages = Promise.all([posts, legacyData]).then(values => {
    
    values[0].data.allMdx.edges.forEach(({ node }: any) => {
      actions.createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/docs-post.tsx`),
        context: {
          slug: node.fields.slug
        }
      })
    })
    
    values[1].data.allMdx.edges.forEach(({ node }: any) => {
        actions.createPage({
          path: node.fields.slug.replace('_posts/', ''),
          component: path.resolve(`./src/templates/docs-post.tsx`),
          context: {
            slug: node.fields.slug
          }
        })
      })
  })
}
