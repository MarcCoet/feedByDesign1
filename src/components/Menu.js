import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

const links = [
  {to: '/', text: 'home'},
  {to: '/portfolio/', text: 'portfolio'},
  {to: '/services/', text: 'services'},
  {to: '/pricing/', text: 'price'},
  {to: '/about/', text: 'feed by design'},
  {to: '/contact/', text: 'contact'},
]

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    // this.updateSelected = this.updateSelected.bind(this)
  }
  // componentDidMount() {
  //   this.updateSelected()
  // }
  // componentWillReceiveProps() {
  //   this.updateSelected()
  // }
  // updateSelected() {
  //   for (let i = 0; i < links.length; i++) {
  //     if (links[i].to === this.props.path) {
  //       this.setState({selected: i+1})
  //     }
  //   }
  // }
  render() {
    return (
      <div
        css={{
          position: `relative`,
          height: 50,
        }}
      >
      <div
        onClick={()=>{this.setState({open: !this.state.open})}}
        css={{
          position: this.state.open ? `fixed` : `absolute`,
            top: 0,
            left: 0,
          width: `100%`,
          height: `100%`,
          background: `rgba(255, 255, 255, 0.5)`,
          zIndex: this.state.open ? 1 : 3,
          [presets.Tablet]: {
            display: `none`
          }
        }}
      />
        <nav
          onClick={()=>{this.setState({open: false})}}
          css= {{
            position: `fixed`,
              top: 0,
              left: 0,
            // position: `relative`,
            display: `flex`,
            flexFlow: `column`,
            background: `rgba(255, 255, 255, 0.3)`,
            width: `100%`,
            margin: `10px 0`,
            textAlign: `center`,
            // height: 90,
            // top: -60,
            // overflow: `hidden`,
            zIndex: 2,
            [presets.Tablet]: {
              position: `relative`,
              flexFlow: `row`,
              height: `auto`,
              // top: 0,
              ' > a': {
                width: `16.666%`,
              },
            }
          }}
        >

          {
            links.map((link, pos) => {
              if (link.to.substring(2) === this.props.path.substring(2, link.to.length)) {
                link.highlighted = true
              } else link.highlighted = false

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  css={{
                    display: link.highlighted || this.state.open ? `block` : 'none',
                    height: link.highlighted || this.state.open ? 30 : 0,
                    textDecoration: `none`,
                    [presets.Tablet]: {
                      display: `block`,
                      height: 30,
                    }
                  }}
                >
                  <h4
                    css={{
                      lineHeight: `30px`,
                      color: link.highlighted ? COLOR2 : `normal`,
                      textTransform: link.highlighted ? `uppercase` : `none`,
                    }}
                  >
                    {link.text}
                  </h4>
                </Link>
              )
            })
          }
        </nav>
      </div>
    )
  }
}

export default Menu
