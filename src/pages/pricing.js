import React from 'react'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class Pricing extends React.Component {
  render() {

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>Pricing</title>
          <meta property="og:title" content="Pricing | Feed by Design" />
          <meta name="description" content="Affordable solutions for freelances, entrepreneurs, artists, ..." />
          <meta property="og:description" content="Affordable solutions for freelances, entrepreneurs, artists, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/pricing/" />
          <meta property="og:url" content="https://www.feedbydesign.com/pricing/" />
        </Helmet>

        <ul>
          {
            this.props.data.pricingDesign.edges.map(({ node })=>{
              return (
                <li>{node.price}</li>
              )
            })
          }
        </ul>

        <ul>
          {
            this.props.data.pricingWebsites.edges.map(({ node })=>{
              return (
                <li>{node.price}</li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

export default Pricing

export const pageQuery = graphql`
query Pricing {
  pricingDesign: allPricingDesignJson (
    sortBy: {order: ASC, fields: [price]}
  ){
    edges {
      node {
        id
        price
        logo
        businessCard
        files
        charter
      }
    }
  },
  pricingWebsites: allPricingWebsitesJson (
    sortBy: {order: ASC, fields: [price]}
  ){
    edges {
      node {
        id
        price
        name
        description
        webFunc
        otherFunc
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
