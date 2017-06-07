import * as PropTypes from "prop-types"
import React from "react"
import { Helmet } from 'react-helmet'

import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"

class ProjectTemplate extends React.Component {
  // static propTypes = {
  //   data: PropTypes.shape({
  //     markdownRemark: PropTypes.object.isRequired,
  //   }),
  // }

  render() {
    const projectDetails = this.props.data.md.frontmatter
    const logoColor = projectDetails.logoColor ? projectDetails.logoColor.childImageSharp.responsiveSizes: null
    const logoNB = projectDetails.logoNB ? projectDetails.logoNB.childImageSharp.responsiveSizes : null
    const screenImage = projectDetails.screenImage ? projectDetails.screenImage.childImageSharp.responsiveSizes : null
    // const imgScreenLarge = projectDetails.imgScreenLarge.childImageSharp.responsiveSizes
    // const imgScreenMedium = projectDetails.imgScreenMedium.childImageSharp.responsiveSizes
    // const imgScreenSmall = projectDetails.imgScreenSmall.childImageSharp.responsiveSizes
    // const screenLarge = { ...this.props.data.screenLarge.responsiveSizes }
    // const screenMedium = { ...this.props.data.screenMedium.responsiveSizes }
    // const screenSmall = { ...this.props.data.screenSmall.responsiveSizes }
    const gallery = this.props.data.gallery ?
      this.props.data.gallery.edges.map(({ node })=>{
      const id = node.id
      return {id, ...node.responsiveSizes}
    }) : null
    const borderColor = projectDetails.colors[0]
    const textColor = projectDetails.colors[1] || projectDetails.colors[0]

    return (
      <div
        css={{
          border: `5px solid ${borderColor}`,
          margin: 30
        }}
      >

        <Helmet>
          <html lang="en" />
          <title>{`${projectDetails.name}`}</title>
          <meta property="og:title" content={`${projectDetails.name} | Feed by Design`} />
          <meta name="description" content={`${projectDetails.metaDescription}`} />
          <meta property="og:description" content={`${projectDetails.metaDescription}`} />
          <link rel="canonical" href={`https://www.feedbydesign.com/portfolio/${projectDetails.slug}/`} />
          <meta property="og:url" content={`https://www.feedbydesign.com/portfolio/${projectDetails.slug}/`} />
        </Helmet>

        <div css={{
            display: `flex`,
            flexFlow: `row wrap`,
            justifyContent: `space-around`,
            alignItems: `center`,
            ' *': {
              color: `${textColor}`
            }
          }}
        >

          <div css={{ // LEFT COLUMN
              display: `flex`,
              flexFlow:`column`,
              alignItems: `center`,
              maxWidth: `80vw`,
              margin: rhythm(1),
              [presets.Desktop]: {
                alignItems: `flex-start`,
                maxWidth: `30vw`,
              },
            }}
          >
            {logoColor &&
              <div css={{ // LOGOS
                display: `flex`,
                alignItems: `flex-end`,

              }}>
              <img
                src={logoColor.src}
                srcSet={logoColor.srcSet}
                sizes={`(min-width: 500px) 300px, 150px`}
              />
              <img
                src={logoNB.src}
                srcSet={logoNB.srcSet}
                sizes={`(min-width: 500px) 50px, 25px`}
              />
              </div>
            }

            <div css={{
                display: `flex`,
                flexFlow: `row wrap`,
              }}
            >
              { // COLOR BALLS
                projectDetails.colors.map((color)=>{
                  return (
                    <div key={color} css={{
                        background: `${color}`,
                        height: 30,
                        width: 30,
                        borderRadius: `50%`,
                        margin: `20px 10px 20px 0`,
                      }}
                    ></div>
                  )
                })
              }
            </div>

            <h3 css={{
                marginBottom: rhythm(1/2),
              }}
            >
              {projectDetails.name}
            </h3>
            {projectDetails.url && <p>{projectDetails.url}</p>}
            {projectDetails.facebook && <p>{projectDetails.facebook}</p>}
            {projectDetails.linkedIn && <p>{projectDetails.linkedIn}</p>}
            <p css={{

              }}
            >
              Lien site web
              lien page Facebook
              explication projet...
              Bea poruptis eos eum vit late eles consed
              qui que ium haruptatio. Del mint assedis
              susamendam eum et dipientibus, velest.
              nimoloreicit apelici llendam asped mi,
              sum re et facea volo totas excerum nate
              inim volo endelis
            </p>
          </div>

          {screenImage &&
            <img
            src={screenImage.src}
            srcSet={screenImage.srcSet}
            sizes={`${presets.desktop} 40vw, 80vw`}
            />
          }

        </div>


        <div css={{
            display: `flex`,
            flexFlow: `row wrap`,
            alignItems: `baseline`,
            justifyContent: `center`,
            marginBottom: 20,
          }}
        >
          {gallery &&
            gallery.map((image)=>{
              return (
                <img
                  key={image.id}
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={`200px`}
                  css={{
                    width: 200,
                    height: 200,
                    objectFit: `cover`,
                  }}
                />
              )
            })
          }
        </div>



      </div>
    )
  }
}

export default ProjectTemplate

// <div
//   css={{ // WEB SCREENS
//     width: `80vw`,
//     height: `60vw`,
//     position: `relative`,
//     margin: rhythm(1),
//     [presets.Desktop]: {
//       width: `40vw`,
//       height: `30vw`,
//     },
//   }}
//   >
//   <img
//     src={screenLarge.src}
//     srcSet={screenLarge.srcSet}
//     css={{
//       position: `absolute`,
//       width: `100%`,
//       zIndex: 2,
//     }}
//     />
//   <div
//     css={{
//       position: `relative`,
//       width: `100%`,
//       height: `70%`,
//       overflow: `hidden`,
//     }}
//     >
//     {imgScreenLarge &&
//       <img
//       src={imgScreenLarge.src}
//       srcSet={imgScreenLarge.srcSet}
//       css={{
//         position: `absolute`,
//         top: 0,
//         left: 0,
//       }}
//       />
//     }
//   </div>
// </div>
//
// imgScreenLarge {
//   childImageSharp {
//     responsiveSizes (maxWidth: 1000) {
//       base64
//       aspectRatio
//       src
//       srcSet
//     }
//   }
// }
// imgScreenMedium {
//   childImageSharp {
//     responsiveSizes (maxWidth: 450) {
//       base64
//       aspectRatio
//       src
//       srcSet
//     }
//   }
// }
// imgScreenSmall {
//   childImageSharp {
//     responsiveSizes (maxWidth: 170) {
//       base64
//       aspectRatio
//       src
//       srcSet
//     }
//   }
// }


// <img
//   src={screenMedium.src}
//   srcSet={screenMedium.srcSet}
//   sizes={`200px`}
// />


// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query ProjectPage($id: String!, $galleryPathRegex: String!) {
    md: markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        slug
        metaDescription
        url
        facebook
        linkedIn
        packName
        colors
        logoColor {
          childImageSharp {
            responsiveSizes (maxWidth: 300) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
        logoNB {
          childImageSharp {
            responsiveSizes (maxWidth: 50) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
        screenImage {
          childImageSharp {
            responsiveSizes (maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
            }
          }
        }
      }
    }
    gallery: allImageSharp (id: {regex: $galleryPathRegex}) {
      edges {
        node {
          id
          responsiveSizes (maxWidth: 300) {
            base64
            aspectRatio
            src
            srcSet
          }
        }
      }
    }
    screenLarge: imageSharp (id: {regex: "/img.screens.imac/i"}) {
      responsiveSizes (maxWidth: 1000) {
        base64
        aspectRatio
        src
        srcSet
      }
    }
    screenMedium: imageSharp (id: {regex: "/img.screens.ipad/i"}) {
      responsiveSizes (maxWidth: 450) {
        base64
        aspectRatio
        src
        srcSet
      }
    }
    screenSmall: imageSharp (id: {regex: "/img.screens.iphone/i"}) {
      responsiveSizes (maxWidth: 170) {
        base64
        aspectRatio
        src
        srcSet
      }
    }
  }
`
