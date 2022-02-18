module.exports = {
  assetPrefix: process.env.ASSETPATH,
  pathPrefix: process.env.ASSETPATH,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/docs/",
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
  ],
};
