import React from 'react'
import { Helmet } from "react-helmet"
import Link from 'gatsby-link'
import 'array.prototype.move'

import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../../utils/colors"


class Portfolio extends React.Component {
  componentWillMount() {
    this.projects = this.props.data.projects.edges
    // reference to Feed by Design project
    this.feedProject = this.props.data.feedProject
    // delete from array unwanted projects
    for (let i = this.projects.length-1; i >= 0 ; i--) {
      if (this.projects[i].node.frontmatter.hide) this.projects.splice(i, 1)
    }
    // move not featured projects after the 4th position
    let numberOfUnwanted = 0
    for (let i = 0; i < 4; i++) {
      if (this.projects[i].node.frontmatter.notOnTop) numberOfUnwanted++
    }
    for (let i = 0; i < 4; i++) {
      if (this.projects[i].node.frontmatter.notOnTop) {
        this.projects.move(i, 3+numberOfUnwanted)
        i=0
      }
    }

    // this.goldenList = this.props.data.allMarkdownRemark.edges.map(({ node }, tabId)=>{
    //   switch (tabId) {
    //     case 0:
    //       return (
    //         <li key={node.id}>
    //           <Link to={`/portfolio/${node.frontmatter.slug}/`}>
    //             <img
    //               src={node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
    //               srcSet={node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
    //               sizes={`500px`}
    //               // sizes={`${presets.tablet} 50vw, 300px`}
    //             />
    //           </Link>
    //         </li>
    //       )
    //       break;
    //     case 1:
    //       return (
    //         <li key={node.id}>
    //           <Link to={`/portfolio/${node.frontmatter.slug}/`}>
    //             <img
    //               src={node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
    //               srcSet={node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
    //               sizes={`calc(500px * 0.618)`}
    //             />
    //           </Link>
    //         </li>
    //       )
    //     case 2:
    //       return (
    //         <li key={node.id}>
    //           <Link to={`/portfolio/${node.frontmatter.slug}/`}>
    //             <img
    //               src={node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
    //               srcSet={node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
    //               sizes={`100px`}
    //             />
    //           </Link>
    //         </li>
    //       )
    //     default:
    //       return (
    //         <li key={node.id}>
    //           <Link to={`/portfolio/${node.frontmatter.slug}/`}>
    //             <img
    //               src={node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
    //               srcSet={node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
    //               sizes={`50px`}
    //             />
    //           </Link>
    //         </li>
    //       )
    //   }
    //
    // })
  }

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

        <ul
          css={{
            listStyle: `none`,
            margin: `auto`,
            maxWidth: 900,
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `center`,
            ' li': {
              margin: 0,
              position: `relative`,
              ':hover': {
                ':after': {
                  content: '""',
                  position: `absolute`,
                    top: 0,
                  width: `100%`,
                  height: `100%`,
                  background: `rgba(255, 255, 255, 0.5)`,
                  pointerEvents: `none`,
                },
              }
            },
            [presets.Tablet]: {
              // flexFlow: `row wrap`,
            },

          }}
        >
          <li
            key={this.projects[0].node.id}
            css={{ //Big image left
              width: `61.8%`,

            }}
          >
            <Link to={`/portfolio/${this.projects[0].node.frontmatter.slug}/`}>
              <img
                src={this.projects[0].node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                srcSet={this.projects[0].node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
              />

            </Link>
          </li>
          <div
            css={{ //column right
              width: `38.2%`,
            }}
          >
            <li key={this.projects[1].node.id}>
              <Link to={`/portfolio/${this.projects[1].node.frontmatter.slug}/`}>
                <img
                  src={this.projects[1].node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                  srcSet={this.projects[1].node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
                />
              </Link>
            </li>
            <div
              css={{ // bottom third has to be reversed to have big image on right
                display: `flex`,
                flexFlow: `row-reverse`,
              }}
            >
              <li
                key={this.projects[2].node.id}
                css={{ // big image on the right
                  width: `61.8%`
                }}
              >
                <Link to={`/portfolio/${this.projects[2].node.frontmatter.slug}/`}>
                  <img
                    src={this.projects[2].node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                    srcSet={this.projects[2].node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
                  />
                </Link>
              </li>
              <div
                css={{
                  display: `flex`,
                  flexFlow: `column-reverse`,
                  width: `38.2%`
                }}
              >
                <li key={this.projects[3].node.id}>
                  <Link to={`/portfolio/${this.projects[3].node.frontmatter.slug}/`}>
                    <img
                      src={this.projects[3].node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                      srcSet={this.projects[3].node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
                    />
                  </Link>
                </li>
                <li key={this.feedProject.id}>
                  <Link to={`/portfolio/${this.feedProject.frontmatter.slug}/`}>
                    <img
                      src={this.feedProject.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                      srcSet={this.feedProject.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
                    />
                  </Link>
                </li>

              </div>
            </div>
          </div>
          <div
            css={{
              display: `flex`,
              flexFlow: `row wrap`,
              marginTop: rhythm(1/2),
              ' > li': {
                width: `20%`
              }
            }}
          >
            {
              this.projects.slice(4).map(({ node }) => {
                return (
                  <li key={node.id}>
                    <Link to={`/portfolio/${node.frontmatter.slug}/`}>
                      <img
                        src={node.frontmatter.imgCover.childImageSharp.responsiveSizes.src}
                        srcSet={node.frontmatter.imgCover.childImageSharp.responsiveSizes.srcSet}
                      />
                    </Link>
                  </li>
                )
              })
            }
          </div>
        </ul>
      </div>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
query Portfolio {
  projects: allMarkdownRemark (
    id: {regex: "/portfolio/i"},
    sortBy: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        id
        frontmatter {
          name
          slug
          notOnTop
          hide
          date
          imgCover {
            childImageSharp {
              responsiveSizes (maxWidth: 600) {
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
  feedProject: markdownRemark (
    id: {regex: "/portfolio.feed-by-design/i"}
  ) {
    id
    frontmatter {
      name
      slug
      notOnTop
      hide
      imgCover {
        childImageSharp {
          responsiveSizes (maxWidth: 600) {
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
