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


class Pricing extends React.Component {
  render() {

    return (
      <div
        css={{
          flexGrow: 1,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          '> div': {
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            width: 120,
            height: 120,
            borderRadius: `50%`,
            background: COLOR2,
            color: COLOR4,
            margin: 10,
          }
        }}
      >
        <Helmet>
          <html lang="en" />
          <title>Pricing</title>
          <meta property="og:title" content="Pricing | Feed by Design" />
          <meta name="description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <meta property="og:description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/pricing/" />
          <meta property="og:url" content="https://www.feedbydesign.com/pricing/" />
        </Helmet>

        <div>
          <Link to={'/pricing/design/'}>
            Design Pricing
          </Link>
        </div>
        <div>
          <Link to={'/pricing/design/'}>
            ! Web Pricing !
          </Link>
        </div>

      </div>
    )
  }
}

export default Pricing

// export const pageQuery = graphql`
// query Pricing {
//   pricingDesign: allPricingDesignJson (
//     sortBy: {order: ASC, fields: [price]}
//   ){
//     edges {
//       node {
//         id
//         price
//         logo
//         businessCard
//         files
//         charter
//       }
//     }
//   },
//   pricingWebsites: allPricingWebsitesJson (
//     sortBy: {order: ASC, fields: [price]}
//   ){
//     edges {
//       node {
//         id
//         price
//         name
//         description
//         webFunc
//         otherFunc
//       }
//     }
//   }
// }
// `

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
