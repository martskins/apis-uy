import React, { Component } from 'react'
import { SelectField } from 'material-ui'

export default class Method extends Component {

  render() {
    const { method, menuItems, onChange } = this.props
    return (
      <div>
        <h3 className="sub-title">Método</h3>

        <SelectField
          value={method}
          onChange={onChange}
          hintText="Method"
          menuItems={menuItems} />
      </div>
    )
  }
}
