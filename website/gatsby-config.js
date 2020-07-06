'use strict'

module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: 'Marcin Janiak',
    description: 'Some coding blog.',
    keywords: 'C#, csharp, dotnet, graphql, hotchocolate, aspnetcore',
    siteUrl: 'http://marcin-janiak.github.io/',
    author: {
      name: 'Marcin Janiak',
      url: '',
      email: ''
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: "language-",
              showLineNumbers: true
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
  ]
}
