import * as PropTypes from "prop-types"
import React from "react"
import { Helmet } from 'react-helmet'

class ProjectTemplate extends React.Component {
  // static propTypes = {
  //   data: PropTypes.shape({
  //     markdownRemark: PropTypes.object.isRequired,
  //   }),
  // }
  render() {
    const projectDetails = this.props.data.markdownRemark.frontmatter
    const logoColor = projectDetails.logoColor.childImageSharp.responsiveSizes
    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{`${projectDetails.name}`}</title>
          <meta property="og:title" content={`${projectDetails.name} | Feed by Design`} />
          <meta name="description" content={`${projectDetails.metaDescription}`} />
          <meta property="og:description" content={`${projectDetails.metaDescription}`} />
          <link rel="canonical" href={`https://www.feedbydesign.com/portfolio/${projectDetails.slug}/`} />
          <meta property="og:url" content={`https://www.feedbydesign.com/portfolio/${projectDetails.slug}/`} />
        </Helmet>

        <h2>{projectDetails.name}</h2>
        <ul>
          {
            projectDetails.colors.map((color)=>{
              return (
                <li key={color} css={{color: `${color}`}}>{color}</li>
              )
            })
          }
        </ul>
        <img
          src={logoColor.src}
          srcSet={logoColor.srcSet}
          sizes={`200px`}
        />
      </div>
    )
  }
}

export default ProjectTemplate

// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        slug
        metaDescription
        url
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
      }
    }
  }
`
