module.exports = {
  siteMetadata: {
    title: `Sheila Anne`,
    author: `Sheila Anne Murray`,
    description: `Life coaching you through life's greatest challenges with Sheila Anne Murray`,
    siteUrl: `https://www.sheilaanne.com`,
    social: {
      instagram: `shetravls`
    }
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          },
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-relative-links",
            options: {
              domainRegex: /http[s]*:\/\/[www.]*sheilaanne\.com[/]?/
            }
          },
          `gatsby-remark-external-links`
        ]
      }
    },
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
        icon: `static/img/mountain.jpg`
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.woff2": ["Cache-Control:  max-age=31536000"],
          "/*.png": ["Cache-Control:  max-age=31536000"],
          "/*.svg": ["Cache-Control:  max-age=31536000"]
        },
        mergeCachingHeaders: true
      }
    }
  ]
};
