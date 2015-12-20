import React, { Component } from 'react'
import { AppBar, List, ListItem, IconButton, FontIcon, LeftNav } from 'material-ui'
import style from './style.styl'

export default class AppBarAndMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: window.innerWidth > props.hideBreakPoint
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize () {
    this.setState({ showMenu: window.innerWidth > this.props.hideBreakPoint })
  }

  navigate(path){
    this.props.history.pushState(null, path)
  }

  render() {
    const { showMenu } = this.state
    const list = (
      <List className="menu">
        <ListItem onTouchTap={()=> this.navigate('/currency')}
          primaryText="Tipo de Cambio"
          leftIcon={<FontIcon className="material-icons">attach_money</FontIcon>}/>
      </List>
    )
    const leftNav = (
      <LeftNav ref="leftNav" docked={false}>
        {list}
      </LeftNav>
    )
    const appBar = (
      <AppBar
        title="API'S.uy"
        className="app-bar"
        onLeftIconButtonTouchTap={() => {
          this.refs.leftNav.toggle()
        }}
        iconElementLeft={showMenu
          ? <IconButton iconClassName="material-icons">home</IconButton>
          : null}/>
    )
    return(
      <div className="top-bar">
        {appBar}
        {showMenu ? list : leftNav}
      </div>
    )
  }
}
