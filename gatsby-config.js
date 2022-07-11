module.exports = {
  siteMetadata: {
    title: `Daniel Wu`,
    description: `5th year software engineering student studying at the University of Ottawa.`,
    author: `@wuon`,
    siteUrl: `https://github.com/Wuon/links`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `socials`,
        path: `${__dirname}/src/data/socials`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/links_logo.png",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
};
