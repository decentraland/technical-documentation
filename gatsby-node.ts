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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
        slug: String
        title: String
        redirect_from: [String]
      }
  `
  createTypes(typeDefs)
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
  const posts = await graphql(`
    {
      allMdx(filter: { frontmatter: { slug: { ne: null } } }) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              slug
              title
              redirect_from
            }
          }
        }
      }
    }
  `)

  posts.data.allMdx.edges.forEach(({ node }: any) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/docs-post.tsx`),
      context: {
        slug: node.fields.slug.toLowerCase()
      }
    })

    if (node.frontmatter.redirect_from) {
      node.frontmatter.redirect_from.map((item) => {
        actions.createRedirect({
          fromPath: item,
          toPath: node.frontmatter.slug.toLowerCase(),
          isPermanent: true
        })
      })
    }
  })
}
