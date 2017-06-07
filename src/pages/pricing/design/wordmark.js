import React from 'react'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../../../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../../utils/colors"


class Wordmark extends React.Component {
  render() {

    return (
      <div
        css={{
          flexGrow: 1,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,

        }}
      >
        <Helmet>
          <html lang="en" />
          <title>{this.props.data.markdownRemark.frontmatter.metaTitle}</title>
          <meta property="og:title" content={`${this.props.data.markdownRemark.frontmatter.metaTitle} | Feed by Design`} />
          <meta name="description" content={this.props.data.markdownRemark.frontmatter.metaDescription} />
          <meta property="og:description" content={this.props.data.markdownRemark.frontmatter.metaDescription} />
          <link rel="canonical" href={`https://www.feedbydesign.com/pricing/design/${this.props.data.markdownRemark.frontmatter.pack.toLowerCase()}/`} />
          <meta property="og:url" content={`https://www.feedbydesign.com/pricing/design/${this.props.data.markdownRemark.frontmatter.pack.toLowerCase()}/`} />
        </Helmet>

        <div
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
          css={{
            border: `solid thick ${COLOR2}`,
            padding: rhythm(1),
          }}
        />

      </div>
    )
  }
}

export default Wordmark

export const pageQuery = graphql`
query Wordmark {
  markdownRemark (
    id: {regex: "/data.pricing.design.pack300/i"}
  ) {
    id
    html
    frontmatter {
      pack
      price
      metaTitle
      metaDescription
    }
  }
}
`


// query IndexRouteQuery {
//   allMarkdownRemark(
//     sortBy: { order: DESC, fields: [frontmatter___date] },
//     frontmatter: { draft: { ne: true } },
//     fileAbsolutePath: { regex: "/blog/" },
//   ) {
//     edges {
//       node {
//         excerpt
//         slug
//         frontmatter {
//           title
//           date(formatString: "DD MMMM, YYYY")
//           author {
//             id
//             avatar {
//               childImageSharp {
//                 responsiveResolution(width: 35, height: 35) {
//                   width
//                   height
//                   src
//                   srcSet
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
