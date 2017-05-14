import React from 'react'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link'

import { rhythm, scale } from "../../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../utils/colors"


class Portfolio extends React.Component {
  render() {

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Portfolio</title>
          <meta property="og:title" content="Portfolio | Feed by Design" />
          <meta name="description" content="Come check our work! Logos, websites, business cards, flyers, ..." />
          <meta property="og:description" content="Come check our work! Logos, websites, business cards, flyers, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/portfolio/" />
          <meta property="og:url" content="https://www.feedbydesign.com/portfolio/" />
        </Helmet>

        <h2>Portfolio</h2>
        <ul>
          {
            this.props.data.allMarkdownRemark.edges.map(({ node })=>{
              return (
                <li key={node.id}><Link to={`/portfolio/${node.frontmatter.slug}/`}>{node.frontmatter.name}</Link></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
query Portfolio {
  allMarkdownRemark (id: {regex: "/portfolio/i"}) {
    edges {
      node {
        id
        frontmatter {
          name
          slug
        }
      }
    }
  }
}
`

// sortBy: { order: DESC, fields: [frontmatter___date] },
//     frontmatter: { draft: { ne: true } },
//     fileAbsolutePath: { regex: "/blog/" },

// query Image($name: fileNameQueryString!){
//   file (name: $name) {
//     id
//     ext
//     name
// 		 base
//     relativePath
//     type
//     mediaType
//
//   }
// }
