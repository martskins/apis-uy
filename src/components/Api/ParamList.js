import React, { Component } from 'react'
import { TextField } from 'material-ui'
import Param from '../Param'

export default class ParamList extends Component {

  render() {
    const { title, params, onValueChange, onVisibilityChange } = this.props
    return (
      <div>
        {params.length > 0 ? <h3 className="sub-title">{title}</h3> : null}

        {params.map((param, idx) => {
          return (<Param key={idx}
            name={param.name}
            value={param.value}
            disabled={param.disabled}
            changeValue={onValueChange}
            toggleVisibililty={onVisibilityChange}/>)
        })}
      </div>
    )
  }
}
