import React from 'react'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../utils/colors"


class DesignPricing extends React.Component {
  render() {

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Design Pricing</title>
          <meta property="og:title" content="Design Pricing | Feed by Design" />
          <meta name="description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <meta property="og:description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/pricing/design/" />
          <meta property="og:url" content="https://www.feedbydesign.com/pricing/design/" />
        </Helmet>

        <div>
          {
            this.props.data.allMarkdownRemark.edges.map(({ node })=>{
              return (
                <div>
                  {node.frontmatter.pack}
                </div>
              )
            })
          }
        </div>


      </div>
    )
  }
}

export default DesignPricing

export const pageQuery = graphql`
query DesignPricing {
  allMarkdownRemark (
    id: {regex: "/pricing.design/i"},
    sortBy: {order: ASC, fields: [frontmatter___price]}
  ) {
    edges {
      node {
        id
        html

        frontmatter {
          pack
          price
        }
      }
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
