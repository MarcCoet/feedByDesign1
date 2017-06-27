import React from 'react'
import { Helmet } from "react-helmet"
import { Collapse } from 'react-collapse'

import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

import illuFoxAndDragonfly from '../../data/img/dragonflyWithFox.png'

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: null
    }
  }


  handleClickSection(sectionId) {
    this.setState((prevState, props) => {
      return {openSection: sectionId === prevState.openSection ? null : sectionId}
    })
  }

  render() {
    const strategyData = this.props.data.strategyData
    const designData = this.props.data.designData
    const webData = this.props.data.webData

    return (
      <div
        css={{
          flexGrow: 1,
          display: `flex`,
          alignItems: `center`,
          color: COLOR4,
          background: COLOR2,
        }}
      >
        <Helmet>
          <html lang="en" />
          <title>Services</title>
          <meta property="og:title" content="Services | Feed by Design" />
          <meta name="description" content="Marketing Strategy gives the vision. Graphic Design trigers emotions. Web Presence so that people hear you load and clear." />
          <meta property="og:description" content="Marketing Strategy gives the vision. Graphic Design trigers emotions. Web Presence so that people hear you load and clear." />
          <link rel="canonical" href="https://www.feedbydesign.com/services/" />
          <meta property="og:url" content="https://www.feedbydesign.com/services/" />
        </Helmet>

        <ul
          css={{
            listStyleType: `none`,
            width: 300,
            margin: `auto`,
          }}
        >
          <img
            src={illuFoxAndDragonfly}
            css={{
              width: 158,
              objectFit: `cover`,
              height: `${this.state.openSection === null ? 100 : 0}`,
              opacity: `${this.state.openSection === null ? 1 : 0}`,
              // transition: `${this.state.openSection === null ? 'height .5s, opacity .2s ease 0s' : 'height .5s, opacity 0s ease .5s'}`,
              transition: 'height .5s, opacity .2s',
            }}
          />

          {
            [strategyData, designData, webData].map((data) => {
              return (
                <li
                  key={data.id}
                  css={{
                    position: `relative`,
                  }}
                >

                  <h2
                    onClick={()=>{this.handleClickSection(data.id)}}
                    css={{
                      color: `inherit`,
                      cursor: `pointer`,
                    }}
                  >
                    {data.frontmatter.title}
                  </h2>
                  <Collapse isOpened={this.state.openSection === data.id} springConfig={{stiffness: 300, damping: 40}}>
                    <div
                      css={{


                        // display: `${this.state.openSection === data.id ? 'block' : 'none'}`,
                        // position: `relative`,

                        // height: `${this.state.openSection === data.id ? '452px' : '0px'}`,
                        // transition: `height .5s, opacity .5s`,
                        // overflowY: `${this.state.openSection === data.id ? 'hidden' : 'hidden'}`,

                        // overflowX: `visible`,

                        // overflow: `hidden`,
                        // marginTop: `${this.state.openSection === data.id ? -100 : 0}`,
                        // maxHeight: `${this.state.openSection === data.id ? 100 : 0}`,
                        // transition: `${this.state.openSection === data.id ? 'max-height .5s ease' : 'margin-top .5s ease, max-height 0s ease .5s'}`,

                      }}
                    >

                      <img
                        src={data.frontmatter.image.childImageSharp.responsiveSizes.src}
                        srcSet={data.frontmatter.image.childImageSharp.responsiveSizes.srcSet}
                        css={{
                          height: `${this.state.openSection === data.id ? 50 : 0}`,
                          opacity: `${this.state.openSection === data.id ? 1 : 0}`,
                          transition: `${this.state.openSection === data.id ? 'height .5s, opacity 0s ease 0s' : 'height .5s, opacity 0s ease .5s'}`,

                          // display: `${this.state.openSection === data.id ? 'block' : 'none'}`,
                          // height: 50,
                          [presets.Phablet]: {
                            height: `${this.state.openSection === data.id ? 100 : 0}`,
                            // height: 100,
                            position: `absolute`,
                              // top: `${-100}`,
                              // left: `${-120 * data.frontmatter.image.childImageSharp.responsiveSizes.aspectRatio}`,
                              top: `${-50}`,
                              // left: `${-120 * data.frontmatter.image.childImageSharp.responsiveSizes.aspectRatio}`,
                              right: `${320}`,
                          },
                        }}
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.html,
                        }}
                      />

                    </div>
                  </Collapse>
                </li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

export default Services

export const pageQuery = graphql`
query Services {
  strategyData: markdownRemark (fileAbsolutePath: {regex: "/data.services.strategy/i"}) {
    ...serviceData
  }
  designData: markdownRemark (fileAbsolutePath: {regex: "/data.services.design/i"}) {
    ...serviceData
  }
  webData: markdownRemark (fileAbsolutePath: {regex: "/data.services.websites/i"}) {
    ...serviceData
  }
}
fragment serviceData on MarkdownRemark {
  id
  html
  frontmatter {
    title
    image {
      childImageSharp {
        responsiveSizes(maxWidth: 100) {
          base64
          aspectRatio
          src
          srcSet
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
