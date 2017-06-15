import React from 'react'
import _ from 'lodash'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
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
    const indexImage = this.props.data.imageSharp.responsiveSizes

    // // Outputs array of images with 'sizes' key {big: ..., tiny: ...}
    // const images = {}
    // const queryImages = this.props.data.allFile.edges
    // _.forEach(queryImages, function({ node }) {
    //   images[node.base] = node
    //   images[node.base].sizes = node.children[0]
    // })

// TODO: description
    return (
      <div
        css={{
          flexGrow: 1,
          display: `flex`,
          flexFlow: `column`,
          ' > div': {
            flexGrow: 1,
            display: `flex`,
            flexFlow: `column`,
          }
        }}
      >
        <Helmet>
          <html lang="en" />
          <title>Graphic Design & websites - Exciting professional branding</title>
          <meta property="og:title" content="Graphic Design & websites - Exciting professional branding | Feed by Design" />
          <meta name="description" content="Strategy, Graphic Design and Websites for Entrepreneurs. We have a passion for creating exciting and coherent professionnal identities." />
          <meta property="og:description" content="Strategy, Graphic Design and Websites for Entrepreneurs. We have a passion for creating exciting and coherent professionnal identities." />
          <link rel="canonical" href="https://www.feedbydesign.com" />
          <meta property="og:url" content="https://www.feedbydesign.com" />
        </Helmet>

        <img
          src={indexImage.src}
          srcSet={indexImage.srcSet}
          sizes={`${presets.phablet} 500px, 100vw`}
          css={{
            margin: `auto`,
          }}
        />

      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
query Index {
  imageSharp (id: {regex: "/img.feed-500/"}) {
    id
    responsiveSizes (maxWidth: 500) {
      base64
      aspectRatio
      src
      srcSet
      sizes
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
