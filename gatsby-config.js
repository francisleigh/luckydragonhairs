module.exports = {
  siteMetadata: {
    title: `Lucky Dragon Hairs`,
    description: `Lucky Dragon Hairs`,
    author: `Francis Leigh`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luckydragonhairs`,
        short_name: `LDH`,
        start_url: `/`,
        background_color: `#F4511E`,
        theme_color: `#F4511E`,
        display: `minimal-ui`,
        icon: `src/images/dragon-face-tribal-art-256x256.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
