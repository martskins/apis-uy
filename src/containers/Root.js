import React, { Component } from 'react'
import { AppBar, LeftNav, MenuItem, List, ListItem, IconButton, FontIcon } from 'material-ui'
import styles from './style.styl'

export default class Root extends Component {
  navigate(path){
    this.props.history.pushState(null, path)
  }

  render() {
    return(
      <div>
        <AppBar
          title="API'S.uy"
          iconElementLeft={<IconButton iconClassName="material-icons">home</IconButton>}/>

        <List className="menu">
          <ListItem onTouchTap={()=> this.navigate('/currency')} primaryText="Tipo de Cambio" leftIcon={<FontIcon className="material-icons">attach_money</FontIcon>}/>
        </List>

        <section className="main">
          {this.props.children}
        </section>
      </div>
    )
  }
}
