require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  assetPrefix: process.env.ASSETPATH,
  pathPrefix: process.env.PATHPREFIX,
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
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/docs/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
    },
    __key: "images",
  },
    "gatsby-transformer-remark",
  ],
};
