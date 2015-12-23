import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ServiceActions from '../../actions/services'
import { RaisedButton, CircularProgress } from 'material-ui'
import reqwest from 'reqwest'
import Information from './Information'
import Method from './Method'
import ParamList from './ParamList'
import Param from '../Param'

export default class Api extends Component {

  render() {
    const { title, description, url, method, params, headers, result,
      onParamChange, onHeaderChange, onParamToggleVisibility,
      onHeaderToggleVisibility, onApiRequest } = this.props
    return (
      <div className="api">
        <div className="configuration">

          <Information title={title} description={description} url={url} />

          <Method method={method} />

          <ParamList params={params}
            title="Parámetros"
            onValueChange={(param, value) => onParamChange(param, value)}
            onVisibilityChange={(paramName) => onParamToggleVisibility(paramName)}/>

          <ParamList params={headers}
            title="Encabezados"
            onValueChange={(param, value) => onHeaderChange(param, value)}
            onVisibilityChange={(paramName) => onHeaderToggleVisibility(paramName)}/>

          <RaisedButton label="Probar"
            onTouchTap={() => onApiRequest()}
            primary={true}/>

        </div>
        <div className="result">
          <h2 className="title">Resultado</h2>
          {result === 'loading'
              ? <div className="loading-container">
                  <CircularProgress mode="indeterminate" />
                </div>
              : <pre>{result === null ? null : JSON.stringify(result, null, 2)}</pre>}
        </div>
      </div>
    )
  }
}
