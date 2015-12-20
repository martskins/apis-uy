import React, { Component } from 'react'
import AppBarAndMenu from '../components/AppBarAndMenu'
import styles from './style.styl'

export default class Root extends Component {
  render() {
    const { history, children } = this.props
    return(
      <div>
        <AppBarAndMenu hideBreakPoint={1050} history={history}/>

        <section className="main">
          {children}
        </section>
      </div>
    )
  }
}
