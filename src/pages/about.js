import React from 'react'
import { Helmet } from "react-helmet"


import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

import photoFox from '../../data/img/photo-fox.jpg'
import photoDragonfly from '../../data/img/photo-dragonfly.jpg'
import pictoFox from '../../data/img/fox-110.png'
import pictoDragonfly from '../../data/img/dragonfly-110.png'

const foxProfile = {
  name: 'Fox',
  photo: photoFox,
  picto: pictoFox,
  quote: 'Marc is curious, smart and ressourceful. He is passionate about learning and aware of the world around. He can always find the right word with a personal touch of creativity.',
  sign: 'Tess',
  skills: [
    'Positioning Strategy',
    'Information Architecture',
    'Technology'
  ]
}
const dragonflyProfile = {
  name: 'Dragonfly',
  photo: photoDragonfly,
  picto: pictoDragonfly,
  quote: 'Tess is more than a graphic designer. She is a complete artist from photography to painting and illustration. She knows everything about graphics and how emotions get carried out by shapes and colors.',
  sign: 'Marc',
  skills: [
    'Visual Identity',
    'Custom Art Work',
    'Layout Design'
  ],
  link: {
    url: 'http://tess-h.be',
    name: 'tess-h.be'
  }
}

// TODO: meta description
class About extends React.Component {
  render() {

    const Profile = ({ profile }) => (
      <div class="uk-width-small-6-10 uk-width-8-10 uk-container-center">
        <img src={profile.photo} alt={profile.name} />
        <img src={profile.picto} alt={profile.name} class="picto__presentation" />
        <h3>{profile.name}</h3>
        <blockquote>
          <p>
            {profile.quote}
          </p>
          <small>{profile.sign}</small>
        </blockquote>
        <div class="uk-grid-margin">
          {
            profile.skills.map((skill)=>{
              return <h3 id={skill} class="subtitle__presentation">{skill}</h3>
            })
          }

        </div>
        {profile.link ? <a class="site-link" href={profile.link.url} target="_blank">{profile.link.name}</a> : null}
      </div>
    )

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>About</title>
          <meta property="og:title" content="About | Feed by Design" />
          <meta name="description" content="We are under the protection of the Fox and the Dragonfly." />
          <meta property="og:description" content="We are under the protection of the Fox and the Dragonfly." />
          <link rel="canonical" href="https://www.feedbydesign.com/about/" />
          <meta property="og:url" content="https://www.feedbydesign.com/about/" />
        </Helmet>

        <Profile id='fox' profile={foxProfile} />
        <Profile id='dragonfly' profile={dragonflyProfile} />





      </div>
    )
  }
}

export default About

// <div class="background">
//   <div class="uk-grid uk-grid-width-medium-1-2 uk-container uk-container-center" data-uk-grid-margin data-uk-scrollspy="{cls:'uk-animation-fade'}">
//     <div class="">
//
//     </div>
//     <div class="">
//       <div class="uk-width-small-6-10 uk-width-8-10 uk-container-center">
//         <img src="img/photo-dragonfly.jpg" alt="" />
//         <img src={photoDragonfly} alt="Dragonfly" class="picto__presentation" />
//         <h3>Dragonfly</h3>
//         <blockquote>
//           <p>
//
//           </p>
//           <small>Marc</small>
//         </blockquote>
//         <div class="uk-grid-margin">
//           <h3 class="subtitle__presentation"></h3>
//           <h3 class="subtitle__presentation">Custom Art Work</h3>
//           <h3 class="subtitle__presentation">Layout Design</h3>
//         </div>
//         <a class="site-link" href="http://tess-h.be" target="_blank">tess-h.be</a>
//       </div>
//     </div>
//   </div>
// </div>


// export const pageQuery = `
// query {
//
// }
// `

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
