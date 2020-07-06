'use strict'

const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter
      const { relativePath } = getNode(node.parent)

      let slug = permalink
      let customLayout = layout;
      if (!slug) {
        slug = `/${relativePath.replace('.md', '').replace(/ /g, '-')}/`
      }


      let isBlogPost = false;
      if (relativePath.includes('blog')) {
        isBlogPost = true;
        customLayout = 'blogpost'
      }

      createNodeField({
        node,
        name: 'isBlogPost',
        value: isBlogPost
      })

      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: customLayout || ''
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
              isBlogPost
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw new Error(allMarkdown.errors)
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout, isBlogPost } = node.fields

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        slug,
        isBlogPost
      }
    })
  })

  const allTags = await graphql(`
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
  `)

  if (allTags.errors) {
    console.error(allTags.errors)
    throw new Error(allTags.errors)
  }


  allTags.data.allMarkdownRemark.edges.map(x => x.node.frontmatter.tags).reduce(function (x, y) { return x.concat(y); }, []).filter(x => x !== null).forEach((tag) => {
    createPage({
      path: `blog/tags/${tag}`,
      component: path.resolve(`./src/templates/filteredbytag.tsx`),
      context: {
        tag
      }
    })
  })
}
