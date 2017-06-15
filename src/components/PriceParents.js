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

export default (props) => {
  return (
    <div
      css={{
        // flexGrow: 1,
        display: `flex`,
        // alignItems: `center`,
        // justifyContent: `center`,
        marginBottom: rhythm(2),
      }}
    >
      <Link to={'/pricing/design/'}
        css={{
          display: `flex`,
          flexFlow: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          width: `${props.diameter}`,
          height: `${props.diameter}`,
          borderRadius: `50%`,
          background: COLOR2,
          color: COLOR4,
          margin: 10,
        }}
      >
        <span>Design</span>
        <span>Pricing</span>
      </Link>
      <Link to={'/pricing/design/'}
        css={{
          display: `flex`,
          flexFlow: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          width: `${props.diameter}`,
          height: `${props.diameter}`,
          borderRadius: `50%`,
          background: COLOR3,
          color: COLOR4,
          margin: 10,
        }}
      >
      <span>Design</span>
      <span>Pricing</span>
      </Link>
    </div>
  )
}
