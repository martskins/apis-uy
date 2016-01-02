import React, { Component } from 'react'
import Markdown from 'react-remarkable'
import { TextField, Styles } from 'material-ui'
const { Colors } = Styles

export default class Information extends Component {

  render() {
    const { title, description, url } = this.props
    return (
      <div>
        <h2 className="title">{title}</h2>

        <Markdown options={{breaks: true, typographer:  true, html: true}}>
          {description.replace('\n', '').trim()}
        </Markdown>

        <TextField
          floatingLabelText="URL del Servicio"
          value={url}
          underlineFocusStyle={{borderColor: Colors.grey300}}
          style={{width: "100%"}}/>
      </div>
    )
  }
}
