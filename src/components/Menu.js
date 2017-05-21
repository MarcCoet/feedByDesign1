import React from 'react'
import Link from 'gatsby-link'

export default () => {
  return (
    <div css={{
        margin: `10px 0`,
      }}
    >
      <nav css= {{
          display: `flex`,
          flexFlow: `row`,
          justifyContent: `space-around`,
        }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/portfolio/'}>Portfolio</Link>
        <Link to={'/services/'}>Services</Link>
        <Link to={'/pricing/'}>Price</Link>
        <Link to={'/about/'}>Feed by Design</Link>
        <Link to={'/contact/'}>Contact</Link>
      </nav>
    </div>
  )
}
