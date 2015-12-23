import React, { Component } from 'react'
import { SelectField, TextField, Styles } from 'material-ui'
const { Colors } = Styles

export default class Method extends Component {

  render() {
    const { method, menuItems } = this.props
    return (
      <div>
        <h3 className="sub-title">Método</h3>

        <TextField
          hintText="Method"
          value={method}
          underlineFocusStyle={{borderColor: Colors.grey300}} />
      </div>
    )
  }
}
