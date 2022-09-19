import dotenv from "dotenv";
import { convert } from 'html-to-text'

dotenv.config({
  path: ".env",
});

const typeDefs = `
    type Site implements Site {
        assetPrefix: String
    }
`;

/* -> Algolia integration queries */

const myQuery = `{
  allMdx(filter: {frontmatter: {title: {ne: null}, slug: {ne: null}, skip: {ne: true}}}){
    edges {
      node {
        id
        html
        slug
        frontmatter {
          slug
          title
        }
      }
    }
  }
}
`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) => data.allMdx.edges.map(edge => {
      const sanitizedText = convert(edge.node.html)
      return {...edge.node, html: sanitizedText}
    }),
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    // matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

/* -> end algolia integratiion queries */

const opts = {
  assetPrefix: process.env.GATSBY_ASSET_PREFIX,
  pathPrefix: process.env.GATSBY_PUBLIC_PATH,
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: "docs-beta",
    description: "Decentraland technical documentation",
    author: "@decentraland",
    siteUrl: "https://beta-docs.decentraland.zone",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: "./src/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "./src/configurable-content",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/repos/player/player-documentation-main`,
      },
    },
    {
      resolve: `gatsby-remark-relative-images`,
      options: {
        // [Optional] The root of "media_folder" in your config.yml
        // Defaults to "static"
        staticFolderName: './src/repos/player/player-documentation-main/',
        // [Optional] Include the following fields, use dot notation for nested fields
        // All fields are included by default
        include: ['featured'],
        // [Optional] Exclude the following fields, use dot notation for nested fields
        // No fields are excluded by default
        exclude: ['featured.skip'],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-sequence`,
            options: {
              // see more details on https://github.com/bramp/js-sequence-diagrams
              'theme': 'hand',
            }
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-liquid-tags`,
          `gatsby-remark-mermaid`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_self",
              rel: "nofollow"
            }
          }
        ],
        extensions: [`.md`, `.mdx`],
      }
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: [
          `./src/scripts/docsScrapper.js`,
          `./src/utils/cloneRepos.ts`,
          `./src/utils/shellCommands.js`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            name: 'en',
            // A function for filtering nodes. () => true by default
            filterNodes: node => !!node?.frontmatter?.slug,
            // Add to index custom entries, that are not actually extracted from gatsby nodes
            // customEntries: [{ title: 'Pictures', content: 'awesome pictures', url: '/pictures' }],
            plugins: [() => (builder) => {
              builder.metadataWhitelist = ['position']
            }]
          }
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'content', store: true },
            { name: 'slug', store: true },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
            // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.rawMarkdownBody,
            // url: node => node.fields.url,
            slug: node => node.frontmatter.slug
          },
        },
        //custom index file name, default is search_index.json
        filename: 'search_index.json',
        //custom options on fetch api call for search_ındex.json
        fetchOptions: {
            credentials: 'same-origin'
        },
      },
    },
    'gatsby-plugin-meta-redirect' // make sure this is always the last one
  ],
};

const algoliaOpts = {
  // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
  resolve: `gatsby-plugin-algolia`,
  options: {
    appId: process.env.ALGOLIA_APP_ID,
    // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
    // Tip: use Search API key with GATSBY_ prefix to access the service from within components
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
    queries,
    chunkSize: 10000, // default: 1000
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    enablePartialUpdates: true, // default: false
    matchFields: ['slug', 'modified'], // Array<String> default: ['modified']
    concurrentQueries: false, // default: true
    // skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
    continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
    modules: []
  }
}

if (!process.env.GATSBY_ASSET_PREFIX) {
  delete opts['assetPrefix']
}

if (!process.env.GATSBY_PUBLIC_PATH) {
  delete opts['pathPrefix']
  
  if (process.env.GITHUB_ACTIONS) {
    opts.plugins.push(algoliaOpts)
  }
  
}

module.exports = opts
