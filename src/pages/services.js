import React from 'react'
import { Helmet } from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

import illuFoxAndDragonfly from '../../data/img/dragonfly-110.png'

class Services extends React.Component {
  render() {

    return (
      <div
        css={{
          flexGrow: 1,
          display: `flex`,
          flexFlow: `column`,
          alignItems: `center`,
          justifyContent: `center`,

        }}
      >
        <Helmet>
          <html lang="en" />
          <title>Services</title>
          <meta property="og:title" content="Services | Feed by Design" />
          <meta name="description" content="Marketing Strategy gives the vision. Graphic Design trigers emotions. Web Presence so that people hear you load and clear." />
          <meta property="og:description" content="Marketing Strategy gives the vision. Graphic Design trigers emotions. Web Presence so that people hear you load and clear." />
          <link rel="canonical" href="https://www.feedbydesign.com/services/" />
          <meta property="og:url" content="https://www.feedbydesign.com/services/" />
        </Helmet>

        <ul>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.strategyMd.html,
              }}
            />
          </li>
          <li>Graphic Design</li>
          <li>Website</li>
        </ul>

      </div>
    )
  }
}

export default Services

export const pageQuery = graphql`
query Services {
  allMarkdownRemark (id: {regex: "/data.services/i"}) {
    edges {
      node {
        id
        html
        children {
          id
        }
        parent {
          id
        }
        content
        frontmatter {
          title
          image {
            childImageSharp {
              responsiveSizes(maxWidth: 100) {
                base64
                aspectRatio
                src
                srcSet
              }
            }
          }
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
