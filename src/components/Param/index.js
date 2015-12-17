import React, { Component } from 'react'
import { TextField, FontIcon, IconButton } from 'material-ui'
import style from './style.styl'

export default class Param extends Component {

  render() {
    return (
      <div className="param">
        <div className="name-container">
          <TextField
            hintText="Name"
            className="name"
            value={this.props.name}
            disabled={this.props.disabled} />
        </div>

        <div className="value-container">
          <TextField
            hintText="Value"
            className="value"
            value={this.props.value}
            disabled={this.props.disabled}
            onChange={(event) => this.props.changeValue(this.props.name, event.target.value)}/>
        </div>
        <div className="visibility-container">
          <IconButton tooltip={this.props.disabled ? "Enable" : "Disable"}
            onTouchTap={() => this.props.toggleVisibililty(this.props.name)}>
            <FontIcon className="material-icons">
              {this.props.disabled ? "visibility" : "visibility_off"}
            </FontIcon>
          </IconButton>
        </div>
      </div>
    )
  }
}
