import React, { Component } from 'react'
require('es6-promise').polyfill();
require('isomorphic-fetch');

// TODO: Remove dependance and modify style in parent component config
import { rhythm, scale } from "../utils/typography"
import presets from '../utils/presets'
import {
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4
} from "../utils/colors"


class ContactForm extends Component {
  constructor(props) {
    // TODO: auto generate states with fields passed in props
    super(props);
    this.state = {
      success: false,
      error: false,
      botField: '',
      name: '',
      phone: '',
      email: '',
      message: '',
      subject: '',
      workLink: '',
      replyto: ''
    }

    // TODO: delete and transform the others in array functions
    this.botFieldChange = this.botFieldChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.subjectChange = this.subjectChange.bind(this);
    this.workLinkChange = this.workLinkChange.bind(this);
    this.replytoChange = this.replytoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO: auto generate these functions with fields passed in props
  botFieldChange(e) {this.setState({botField: e.target.value})}
  nameChange(e) {this.setState({name: e.target.value})}
  phoneChange(e) {this.setState({phone: e.target.value})}
  emailChange(e) {this.setState({email: e.target.value})}
  messageChange(e) {this.setState({message: e.target.value})}
  subjectChange(e) {this.setState({subject: e.target.value})}
  workLinkChange(e) {this.setState({workLink: e.target.value})}
  replytoChange(e) {this.setState({replyto: e.target.value})}

  handleSubmit(e) {
    e.preventDefault();

    let fieldsQueryString = ''
    for(let stateKey in this.state) {
      if (typeof this.state[stateKey] !== "boolean" && this.state[stateKey] !== '') {
        if (this.state[stateKey] === 'subject' || this.state[stateKey] === 'replyto') {
          fieldsQueryString += `&_${stateKey}=${this.state[stateKey]}`
        } else {
          fieldsQueryString += `&${stateKey}=${this.state[stateKey]}`
        }
      }
    }

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch(this.props.location.pathname, {
      method: "POST",
      headers: myHeaders,
      // TODO: auto-generate the query string with states that are !== false || ''
      // TODO: if state name is === 'subject' || 'replyto' transform in '_subject' and '_replyto'
      body: "form-name=" + this.props.formSettings.form.name + fieldsQueryString
    })
    .then((res) => {
      if (res.status >= 400) {
        // this.props.openDialog('Ooops :(', "Un problème est survenu lors de l'envoi du formulaire. Pouvez-vous me contactez directement par téléphone au 0496.11.59.44.\nMerci.\n\nFlorence")
        this.setState({success: false, error: true})
        throw new Error("Bad response from server")
      } else if (res.status === 200) {
        console.log('request successful')
        // this.props.openDialog('Bien reçu !', 'Merci pour votre message. Je vous recontacte au plus vite.\n\nFlorence')
        this.setState({
          success: true,
          error: false,
          name: '',
          phone: '',
          email: '',
          message: ''
        })
      }
    })

  }

  render() {
    let fields = this.props.formSettings.form.fields.map(({ type, name, value=null, ...attributes }) => {
      if (type === "textarea" ) {
        return <textarea name={name} key={name} {...attributes} value={this.state[`${name}`]} onChange={this[`${name}Change`]} />
      } else if (type === "text" || type === "tel" || type === "email" || type === "submit") {
        return (
          <input
            type={type} name={name} key={name+value} {...attributes}
            value={value ? value : this.state[`${name}`]}
            onChange={this[`${name}Change`]}
          />
        )
      }
    })

    const form = (
      <div>
        {this.props.formSettings.form.before}
        <form className='form' onSubmit={this.handleSubmit} name={this.props.formSettings.form.name} data-netlify="true" data-netlify-honeypot="botField"
          css={{
            display: `flex`,
            flexFlow: `column`,
            alignItems: `center`,
            marginBottom: 0,
            '> *': {
              width: `100%`,
              marginBottom: 10,
              color: COLOR1,
            },
            '> input[type="submit"]' : {
              width: `80%`,
              height: rhythm(3),
              background: COLOR4,
              borderRadius: `50`,
              border: `solid 3px ${COLOR2}`,
              margin: `20px 0`,
              cursor: `pointer`,
              ':hover': {
                color: COLOR4,
                background: COLOR2,
              }
            }
          }}
        >
          <input css={{visibility:`hidden`, position:`fixed`, width:1, height:1}} name="botField" placeholder='Bot Trap. Leave this field empty!' />
          {fields}
        </form>
        {this.props.formSettings.form.after}
      </div>
    )
    const success = (
      <div css={{
        position: `absolute`,
          top: 0,
          left: 0,
        height: `100%`,
        width: `100%`,
        background: `inherit`,
        borderRadius: `inherit`,
        display: `flex`,
        flexFlow: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        textAlign: `center`,
        padding: 30,
        '> p:first-child' : {
          textAlign: `center`,
          lineHeight: rhythm(2.8),
          width: `80%`,
          height: rhythm(3),
          color: COLOR1,
          background: COLOR2,
          borderRadius: `50`,
          border: `solid 3px ${COLOR2}`,
          margin: `20px 0`
        },
      }}>
        {this.props.formSettings.success.before}
        {this.props.formSettings.success.after}
      </div>
    )

    const error = (
      <div css={{
        position: `absolute`,
          top: 0,
          left: 0,
        height: `100%`,
        width: `100%`,
        background: COLOR3,
        borderRadius: `inherit`,
        display: `flex`,
        flexFlow: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: 30,
        '> p:first-child': {
          ...scale(1.5),
          fontWeight: `bold`,
        },
        '> p': {
          textAlign: `center`,
          margin: `0 20px`
        }
      }}>
        {this.props.formSettings.error.before}
        {this.props.formSettings.error.after}
      </div>
    )

    return this.state.error ? error : (this.state.success ? success : form)
    // return error
  }
}

export default ContactForm
