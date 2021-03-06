import React from 'react'
import { Helmet } from "react-helmet"

import ContactForm from '../components/ContactForm'

import { rhythm, scale } from "../utils/typography"
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"

// TODO: success and error messages
const formSettings = {
  form: {
    name:"contactform",
    fields: [
      {type:"text", name:"name", placeholder:"Who are you?", required:"required"},
      {type:"text", name:"_subject", placeholder:"10 words to describe your wish", required:"required"},
      {type:"textarea", name:"message", placeholder:"What do you want us to know about you?", rows:"8", required:"required"},
      {type:"text", name:"workLink", placeholder:"Any link to see your work?"},
      {type:"email", name:"_replyto", placeholder:"your@email.here", required:"required"},
      {type:"submit", value:"send"}
    ],
    before: [
      <p css={{marginBottom: 30}}>
        ...par <a href={`mailto:${typeof window !== 'undefined'?'info@wanna-play.be':''}`} target="_top">email
        </a>, <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook
        </a> ou en remplissant ce formulaire:
      </p>
    ]
  },
  success: {
    before: [
      <p>bien joué !</p>,
      <p>Viens nous suivre sur <a href='https://www.facebook.com/WannaPlayBE/' target='_blank'>Facebook</a></p>
    ]
  },
  error: {
    before: [
      <p>!</p>,
      <p>
        Quelque chose ne va pas...
      </p>,
      <p>
        Contacte-nous par <a href={`mailto:${typeof window !== 'undefined'?'info@wanna-play.be':''}`} target="_top">e-mail
        </a> ou par <a href='https://www.facebook.com/messages/t/user:1309060675843842#_=_' target='_blank'>Facebook
        </a> stp.
      </p>
    ]
  }
}


// TODO: meta description
class About extends React.Component {
  render() {
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

        <ContactForm formSettings={formSettings} location={this.props.location} />

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
