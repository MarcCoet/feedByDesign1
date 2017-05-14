import React from 'react'
import _ from 'lodash'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// Import for Open Graph image
import '../../static/images/feed-500.png'

const contact = {
  phone: typeof window !== 'undefined' ? "+2304004040": "Phone Number",
  email: typeof window !== 'undefined' ? "my@email.com": "Email"
}

class Index extends React.Component {
  render() {

    // // Outputs array of images with 'sizes' key {big: ..., tiny: ...}
    // const images = {}
    // const queryImages = this.props.data.allFile.edges
    // _.forEach(queryImages, function({ node }) {
    //   images[node.base] = node
    //   images[node.base].sizes = node.children[0]
    // })

// TODO: description
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Graphic Design & websites - Exciting professional branding</title>
          <meta property="og:title" content="Graphic Design & websites - Exciting professional branding | Feed by Design" />
          <meta name="description" content="Strategy, Graphic Design and Websites for Entrepreneurs. We have a passion for creating exciting and coherent professionnal identities." />
          <meta property="og:description" content="Strategy, Graphic Design and Websites for Entrepreneurs. We have a passion for creating exciting and coherent professionnal identities." />
          <link rel="canonical" href="https://www.feedbydesign.com" />
          <meta property="og:url" content="https://www.feedbydesign.com" />
        </Helmet>


      </div>
    )
  }
}

export default Index

export const pageQuery = `
query {
  allFile (
    mediaType: {regex: "/image/i"}
  ) {
    edges {
      node {
        id
        ext
        name
        base
        relativePath
        type
        mediaType
        children {
          ... on ImageSharp {
            micro: responsiveSizes(maxWidth: 20) {
              src
              base64
              aspectRatio
            },
            w410: responsiveSizes(maxWidth: 410) {
              src
              srcSet
              aspectRatio
            },
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
