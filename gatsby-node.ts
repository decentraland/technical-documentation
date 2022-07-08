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
  console.log('corro')
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
            }
          }
        }
      }
    }
  `)

  const legacyData = await graphql(`
    {
      allMdx(filter: { frontmatter: { date: { ne: null } } }) {
        edges {
          node {
            fileAbsolutePath
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

  posts.data.allMdx.edges.forEach(({ node }: any) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/docs-post.tsx`),
      context: {
        slug: node.fields.slug.toLowerCase()
      }
    })
  })

  legacyData.data.allMdx.edges.forEach(({ node }: any) => {
    const filePath = 'repos/player/player-documentation-main/_posts/'
    const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i

    actions.createPage({
      path: node.fields.slug.replace(filePath, '').replace(match, ''),
      component: path.resolve(`./src/templates/docs-post.tsx`),
      context: {
        slug: node.fields.slug.toLowerCase()
      }
    })

    if (node.frontmatter.redirect_from) {
      node.frontmatter.redirect_from.map((item) => {
        actions.createRedirect({
          fromPath: item + '/',
          toPath: node.fields.slug.replace(filePath, '').replace(match, ''),
          isPermanent: true
        })
      })
    }
  })
}
