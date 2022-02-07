module.exports = {
  siteMetadata: {
    title: `docs-beta`,
    siteUrl: `https://www.yourdomain.tld`,
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