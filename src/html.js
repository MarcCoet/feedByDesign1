import React, { Component } from "react"
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { TypographyStyle } from "react-typography"

import typography from "./utils/typography"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require("!raw-loader!../public/styles.css")
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
  render() {
    const helmet = Helmet.renderStatic()
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()

    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html {...htmlAttrs}>
        <head>
          <link
            rel="preload"
            href={`/static/roboto-latin-400.7e367be0.woff2`}
            as="font"
            crossOrigin
          />
          <link
            rel="preload"
            href={`/static/roboto-latin-500.bb474f16.woff2`}
            as="font"
            crossOrigin
          />
          <link
            rel="preload"
            href={`/static/roboto-latin-700.0d7e71f2.woff2`}
            as="font"
            crossOrigin
          />

          {this.props.headComponents}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          <TypographyStyle typography={typography} />
          {css}
        </head>
        <body {...bodyAttrs}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

module.exports = Html
