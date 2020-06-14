require("dotenv").config();
var { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Sheila Anne`,
    author: `Sheila Anne Murray`,
    description: `Life coaching you through life's greatest challenges with Sheila Anne Murray`,
    siteUrl: `https://www.sheilaanne.com`,
    social: {
      facebook: "https://facebook.com/sheilaannecoaching",
      instagram: `https://instagram.com/sheflowsandgrows`,
    },
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `4451596119`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        exclude: ["localhost:**", "/admin/**"],
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 90,
              showCaption: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: `${__dirname}/static`,
            },
          },
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-relative-links",
            options: {
              domainRegex: /http[s]*:\/\/[www.]*sheilaanne\.com[/]?/,
            },
          },
          {
            resolve: `gatsby-remark-google-analytics-track-links`,
            options: {
              localLinkMatch: "sheilaanne.com",
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet-async",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sheila Anne`,
        short_name: `SheilaAnne`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/sheila-anne-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.woff2": ["Cache-Control:  max-age=31536000"],
          "/*.png": ["Cache-Control:  max-age=31536000"],
          "/*.svg": ["Cache-Control:  max-age=31536000"],
          "/*.jpg": ["Cache-Control:  max-age=31536000"],
          "/*.webp": ["Cache-Control:  max-age=31536000"],
        },
        mergeCachingHeaders: true,
      },
    },
  ],
  developMiddleware: (app) => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:34567",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    );
  },
};
