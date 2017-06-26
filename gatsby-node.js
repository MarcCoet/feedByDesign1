const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against this Gatsbygram's graphql schema. Think of
    // it like Gatsbygram has a built-in database constructed
    // from static data that you can run queries against.
    //
    // Post is a data node type derived from data/posts.json
    // which is created when scrapping Instagram. “allPostsJson”
    // is a "connection" (a GraphQL convention for accessing
    // a list of nodes) gives us an easy way to query all
    // Post nodes.
    graphql(
      `
      {
        allMarkdownRemark (
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {
            frontmatter: {
              hide: { ne: true }
            },
            fileAbsolutePath: { regex: "/portfolio/i" }
          }
        ) {
      		edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
    ).then(result => {

      if (result.errors) {
        reject(new Error(result.errors))
      }

      // Create image post pages.
      const projectTemplate = path.resolve(`./src/templates/project-page.js`)
      // We want to create a detailed page for each
      // Instagram post. Since the scrapped Instagram data
      // already includes an ID field, we just use that for
      // each page's path.
      _.each(result.data.allMarkdownRemark.edges, (edge, id, portfolioArray) => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        const next = id !== portfolioArray.length-1 ?
          `/portfolio/${portfolioArray[id+1].node.frontmatter.slug}/` :
          `/portfolio/${portfolioArray[0].node.frontmatter.slug}/`
        const previous = id !== 0 ?
          `/portfolio/${portfolioArray[id-1].node.frontmatter.slug}/` :
          `/portfolio/${portfolioArray[portfolioArray.length-1].node.frontmatter.slug}/`
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/portfolio/${edge.node.frontmatter.slug}/`,
          component: slash(projectTemplate),
          context: {
            id: edge.node.id,
            galleryPathRegex: `/portfolio.${edge.node.frontmatter.slug}.gallery/i`,
            next,
            previous
          },
        })
      })

      resolve()
    })
  })
}
