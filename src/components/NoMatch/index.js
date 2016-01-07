import React, { Component } from 'react'
import style from './style.styl'

export default class NoMatch extends Component {

  render() {
    return (
      <div>
        <h1 className='sub-title'>{"Ooops the page you are looking for doesn\'t exists"}</h1>
      </div>
    )
  }
}
