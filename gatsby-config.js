module.exports = {
  siteMetadata: {
    title: `Feed by Design`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    // This plugin sets up the popular css-in-js library
    // Glamor. It handles adding a Babel plugin and webpack
    // configuration as well as setting up optimized server
    // rendering and client re-hydration.
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.05rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,

    // // This plugin takes your configuration and generates a
    // // web manifest file so Gatsbygram can be added to your
    // // homescreen on Android.
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Wanna Play`,
    //     short_name: `Wanna Play`,
    //     start_url: `/`,
    //     background_color: `#DB4D69`,
    //     theme_color: `#0F4DBC`,
    //     display: `minimal-ui`,
    //   },
    // },
    // // This plugin generates a service worker and AppShell
    // // html file so the site works offline and is otherwise
    // // resistant to bad networks. Works with almost any
    // // site!
    // `gatsby-plugin-offline`,

    // This plugin sets up Google Analytics for you.
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA--2`,
    //   },
    // },
  ]
}
