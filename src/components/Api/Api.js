import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, Styles, SelectField, CircularProgress } from 'material-ui'
import reqwest from 'reqwest'
import Information from './Information'
import Method from './Method'
import ParamList from './ParamList'
import Param from '../Param'

export default class Api extends Component {

  constructor(props) {
    super(props)
    this.state = {
      result: null,
      params: props.params || [],
      method: 'GET',
      headers: props.headers || [],
      loading: false
    }
  }

  /*
  * Returns the parameter data to request the service, id the requests
  * is a jsonp request it returns a qs `key=value&anotherKey=anotherValue`
  * otherwise it returns an object with all the enabled params
  */
  getData () {
    const enabled = this.state.params.filter((param) => !param.disabled)
    if(this.props.jsonp) {
      return enabled
        .map((param) => `${param.name}=${param.value}` )
        .join('&')
    } else {
      let params = []
      enabled.forEach((param) => param[param.name] = param.value)
      return params
    }
  }

  /*
  * Returns an object with all the enabled headers
  */
  getHeaders () {
    let headers = []
    this
      .state
      .headers
      .filter((header) => !header.disabled)
      .forEach((header) => headers[header.name] = header.value)
    return headers
  }

  /*
  * Baed on props and state properties calls reqwest and returns a promise
  */
  request () {
    let config = {}

    config['url'] = this.props.jsonp
      ? this.props.url + '?jsoncallback=reqwest&' + this.getData()
      : this.props.url

    config['method'] = this.state.method

    if(this.props.jsonp) {
      config['type'] = 'jsonp'
      config['jsonpCallbackName'] = 'reqwest'
    }

    config['headers'] = this.getHeaders()

    return reqwest(config)
  }

  callService() {
    if(this.state.loading) return //Don't want to handle a new call if already calling

    this.setState({...this.state, loading: true})

    this
      .request()
      .always((response) => {
        const result = JSON.stringify(response, null, 2)
        this.setState({...this.state, result: result, loading: false})
      })
  }

  handleValueChange (paramName, value, collectionName) {
    let state = {...this.state}
    state[collectionName].forEach((param) => {
      if(param.name === paramName) {
        param.value = value
      }
    })
    this.setState(state)
  }

  handleVisibilityChange (paramName, collectionName) {
    let state = this.state
    state[collectionName].params.forEach((param) => {
      if(param.name === paramName) {
        param.disabled = !param.disabled
      }
    })
    this.setState(state)
  }

  render() {
    const { params, headers, method } = this.state
    const { title, description, url } = this.props
    return (
      <div className="api">
        <div className="configuration">

          <Information title={title} description={description} url={url} />

          <Method onChange={event => this.setState({...this.state, method: event.target.value})}
            method={method}
            menuItems={[
              {payload: 'GET', text: 'GET'},
              {payload: 'POST', text: 'POST'}
            ]}/>

          <ParamList params={params}
            title="Parámetros"
            onValueChange={(param, value) => this.handleValueChange(param, value, 'params')}
            onVisibilityChange={(paramName) => this.handleVisibilityChange(paramName, 'params')}/>

          <ParamList params={headers}
            title="Encabezados"
            onValueChange={(param, value) => this.handleValueChange(param, value, 'headers')}
            onVisibilityChange={(paramName) => this.handleVisibilityChange(paramName, 'headers')}/>

          <RaisedButton label="Probar"
            onTouchTap={() => this.callService()}
            primary={true}/>

        </div>
        <div className="result">
          <h2 className="title">Resultado</h2>
          {this.state.loading
            ? <div className="loading-container">
                <CircularProgress mode="indeterminate" />
              </div>
            : <pre>{this.state.result}</pre>}
        </div>
      </div>
    )
  }
}
