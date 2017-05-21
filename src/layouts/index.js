import React from 'react'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
// Load font CSS
import 'typeface-roboto'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class DefaultLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    // Create references to html/body elements
    this.htmlElement = document.querySelector(`html`)
    this.bodyElement = document.querySelector(`body`)

  }


// TITLE TAG - Optimal format
// Primary Keyword - Secondary Keyword | Brand Name
// 8-foot Green Widgets - Widgets & Tools | Widget World

  render() {

    return (
      <div
        css={{
          position: `relative`,
          display: `flex`,
          flexFlow: `column`,
          height: `100vh`
        }}
      >
        <Helmet
          defaultTitle="Graphic Design & websites - Exciting professional branding | Feed by Design"
          titleTemplate="%s | Feed by Design"
        >
          {/* html attributes: <html lang="en" amp /> */}
          {/* body attributes: <body className="root" /> */}
          {/* title attributes and value: <title itemProp="name" lang="en">My Title</title> */}
          {/* base element: <base target="_blank" href="http://mysite.com/" /> */}
          {/* multiple meta elements */}
          <meta property="og:type" content="website" />
          <meta property="og:image" content="http://feedbydesign.netlify.com/static/feed-500.e761b52a.png" />
          <meta property="og:site_name" content="Feed by Design" />
          {/* multiple link elements */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require(`!file-loader!../../static/images/favicons/favicon-32x32.png`)}
            />
        </Helmet>

        <Menu />
        <div
          css={{
            flexGrow: 1,
            display: `flex`,
            flexFlow: `column`,
          }}
        >
          {this.props.children()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
