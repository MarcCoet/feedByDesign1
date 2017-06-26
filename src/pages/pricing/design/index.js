import React from 'react'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link'

import PriceParents from '../../../components/PriceParents'

import { rhythm, scale } from "../../../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../../utils/colors"


class DesignPricing extends React.Component {
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
          <title>Design Pricing</title>
          <meta property="og:title" content="Design Pricing | Feed by Design" />
          <meta name="description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <meta property="og:description" content="Affordable solutions for freelancers, entrepreneurs, artists, ..." />
          <link rel="canonical" href="https://www.feedbydesign.com/pricing/design/" />
          <meta property="og:url" content="https://www.feedbydesign.com/pricing/design/" />
        </Helmet>

        <PriceParents diameter="100" />

        <div
          css={{
            // flexGrow: 1,
            display: `flex`,
            flexFlow: `row wrap`,
            alignItems: `center`,
            justifyContent: `center`,
            '> div': {
              position: `relative`,
            },
            ' > div a:first-child': {
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: 120,
              height: 120,
              borderRadius: `50%`,
              background: COLOR2,
              color: COLOR4,
              border: `solid thick ${COLOR2}`,
              margin: 10,
              zIndex: 1,
              ':hover': {
                zIndex: 0,
              }
            },
            ' > div a:last-child': {
              position: `absolute`,
                top: 10,
                left: 10,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: 120,
              height: 120,
              borderRadius: `50%`,
              background: COLOR4,
              color: COLOR2,
              border: `solid thick ${COLOR2}`,
              margin: 10,
              zIndex: 0,
              ':hover': {
                zIndex: 2,
              }
            }
          }}
        >
          {
            this.props.data.allMarkdownRemark.edges.map(({ node })=>{
              return (
                <div key={node.id}>
                  <Link to={`/pricing/design/${node.frontmatter.pack.toLowerCase()}/`}>
                    <div>
                        {node.frontmatter.pack}
                    </div>
                  </Link>
                  <Link to={`/pricing/design/${node.frontmatter.pack.toLowerCase()}/`}>
                    <div>
                        €{node.frontmatter.price}
                    </div>
                  </Link>
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
    sort: {order: ASC, fields: [frontmatter___price]},
    filter: {
      frontmatter: { hide: { ne: true } },
      fileAbsolutePath: {regex: "/pricing.design/i"}
    }
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
