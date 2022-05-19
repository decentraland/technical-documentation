import dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

/* -> Algolia integration queries */

const myQuery = `{
  allMdx(filter: {frontmatter: {slug: {ne: null}, title: {}}}) {
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
    transformer: ({ data }) => data.allMdx.edges.map(edge => edge.node),
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    // matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
];

/* -> end algolia integratiion queries */

module.exports = {
  assetPrefix: process.env.GATSBY_PUBLIC_PATH,
  // assetPrefix: process.env.GATSBY_URL,
  // pathPrefix: process.env.GATSBY_PUBLIC_PATH,
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
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/repos/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`]
      },
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
      },
    },
  ],
};