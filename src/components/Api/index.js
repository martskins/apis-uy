import React, { Component } from 'react'
import { Paper, TextField, RaisedButton, Styles, SelectField, CircularProgress } from 'material-ui'
import reqwest from 'reqwest'
import style from './style.styl'
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

  callService() {

    const data = this
      .state
      .params
      .filter((param) => !param.disabled)
      .map((param) => `${param.name}=${param.value}` )
      .join('&')

    let headers = []
    this
      .state
      .headers
      .filter((header) => !header.disabled)
      .forEach((header) => headers[header.name] = header.value)

    this.setState({...this.state, loading: true})

    reqwest({
      url: this.props.url + '?jsoncallback=reqwest&' + data,
      method: this.state.method,
      type: 'jsonp',
      jsonpCallbackName: 'reqwest',
      headers: headers
    }).always((response) => {
      let state = this.state
      state.result = JSON.stringify(response, null, 2)
      state.loading = false
      this.setState(state)
    })
  }

  render() {
    const { params, headers } = this.state
    return (
      <div className="api">
        <div className="configuration">
          <h2 className="title">{this.props.title}</h2>

          <p>{this.props.description}</p>

          <TextField
            floatingLabelText="URL del Servicio"
            value={this.props.url}
            disabled={true}
            style={{width: "100%"}}/>

          <h3 className="sub-title">Método</h3>

          <SelectField
            value={this.state.method}
            onChange={(event) => {
              let state = this.state
              state.method = event.target.value
              this.setState(state)
            }}
            hintText="Method"
            menuItems={[
              {payload: 'GET', text: 'GET'},
              {payload: 'POST', text: 'POST'}
            ]} />

          {params.length > 0 ? <h3 className="sub-title">Parámetros</h3> : null}

          {params.map((param, idx) => {
            return (<Param key={idx}
              name={param.name}
              value={param.value}
              disabled={param.disabled}
              changeValue={(paramName, value) => {
                let state = this.state
                this.state.params.forEach((param) => {
                  if(param.name === paramName) {
                    param.value = value
                  }
                })
                this.setState(state)
              }}
              toggleVisibililty={(paramName) => {
                let state = this.state
                this.state.params.forEach((param) => {
                  if(param.name === paramName) {
                    param.disabled = !param.disabled
                  }
                })
                this.setState(state)
              }}/>)
          })}

          {headers.length > 0 ? <h3 className="sub-title">Encabezados</h3> : null}

          {headers.map((header, idx) => {
            return (<Param key={idx}
              name={header.name}
              value={header.value}
              disabled={header.disabled}
              changeValue={(headerName, value) => {
                let state = this.state
                this.state.headers.forEach((header) => {
                  if(header.name === headerName) {
                    header.value = value
                  }
                })
                this.setState(state)
              }}
              toggleVisibililty={(headerName) => {
                let state = this.state
                this.state.headers.forEach((header) => {
                  if(header.name === headerName) {
                    header.disabled = !header.disabled
                  }
                })
                this.setState(state)
              }}/>)
          })}


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
