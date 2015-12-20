import React, { Component } from 'react'
import Api from '../components/Api'

export default class Currency extends Component {
  render() {
    const params = [
      { name: 'backdoor', value: 'letmein' }
    ]
    return (
      <Api title="Tipo de Cambio"
        url="http://webservice.solcre.com/cotizacion"
        description="Lorem Ipsum"
        params={params}
        jsonp={true} />
    )
  }
}
