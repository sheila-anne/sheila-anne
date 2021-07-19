require("dotenv").config();
var { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Sheila Anne`,
    author: `Sheila Anne Murray`,
    description: `Transformational life coaching with Sheila Anne Murray`,
    siteUrl: `https://www.sheilaanne.com`,
    social: {
      facebook: "https://facebook.com/sheilaannecoaching",
      instagram: `https://instagram.com/sheflowsandgrows`,
    },
    faqs: [
      {
        question: "How do I know if coaching is right for me?",
        answer:
          "Life coaching is an effective way to progress your life into one that feels aligned, empowered, and fulfilling.  Coaching is designed to continually give power back to the client (you!), to cultivate more growth and self-understanding. If you find yourself feeling like you might not be doing what you really want to do, in your career, physical space, relationships, activities, etc., life coaching can help you gain clarity in your future and take actions toward transformation. Different coaches will have different approaches and niches, so clients have options of the type of coach they want to work with. I specifically focus on helping driven, free-spirited women to deepen awareness around their life purpose, change their coaching, manage grief & change, and improve their wellbeing. I incorporate mindfulness, visualizations, somatics, and action planning to help clients achieve their change. To learn more about if we are a good fit, sign up for a complimentary 30 minute call.",
      },
      {
        question: "How is coaching different from therapy?",
        answer:
          "Therapy can be an amazing tool for working through past experiences, and with the right therapist you can create a beautiful space for healing and personal growth. On the other hand, life coaching is future-focused and progress oriented. Sessions will focus on where you are and where you want to go. Though we may touch on the past to gain more perspective and context, we will always be bringing it back to the present and the future. I will also support you with accountability tools and homework, because I know that many of the successes and the “a-ha”s actually occur outside of our time together.",
      },
      {
        question: "Where are the coaching sessions held?",
        answer:
          "Most clients and I meet via video conferencing.  I use a platform that allows us to meet in a private room and communicate in real time with clear video and sound. I send a meeting link prior to our scheduled appointment. Alternatively, we can meet via phone calls.",
      },
      {
        question: "What can I expect to get out of coaching with Sheila Anne?",
        answer:
          "Depending on which program you are in (the one time Ground to Grow Accelerator or my signature Root to Rise program) the session will flow differently.  As my Accelerator is a one time power session, you can expect more guidence from me to help you dig deep and achieve quick results. On the other hand, the Root to Rise program is a beautiful opportunity to organically explore, take action, transform, and sustain your results.  Either way, since coaching is a client-driven experience, you are in the driver's seat. Put lots of effort into our session(s), and you will be rewarded exponentially! It’s my job (and passion) to support you with a safe space, coaching tools, and additional perspectives.",
      },
    ],
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID, process.env.GOOGLE_ADWORDS_TRACKING_ID],
        pluginConfig: {
          exclude: ["localhost:**", "/admin/**"],
          head: true,
          respectDNT: true,
        },
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
              maxWidth: 1260,
              linkImagesToOriginal: false,
              quality: 100,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }`,
      },
      resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages,
      serialize: ({ path }) => {
        return {
          url: path,
        };
      },
    },
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
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:34567",
      })
    );
  },
};
