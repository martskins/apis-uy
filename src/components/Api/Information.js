import React, { Component } from 'react'
import { TextField } from 'material-ui'

export default class Information extends Component {

  render() {
    const { title, description, url } = this.props
    return (
      <div>
        <h2 className="title">{title}</h2>

        <p>{description}</p>

        <TextField
          floatingLabelText="URL del Servicio"
          value={url}
          disabled={true}
          style={{width: "100%"}}/>
      </div>
    )
  }
}
