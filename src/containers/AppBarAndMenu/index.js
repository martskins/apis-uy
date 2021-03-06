import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ServiceActions from '../../actions/services'
import { AppBar, List, ListItem, IconButton, FontIcon, LeftNav } from 'material-ui'
import { pushState } from 'redux-router'
import style from './style.styl'

class AppBarAndMenu extends Component {
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

  render() {
    const { showMenu } = this.state
    const { services, actions, pushState } = this.props
    const list = (
      <List className="menu">
        {services.map((service) => {
          return(
            <ListItem key={service.id}
              onTouchTap={()=> pushState(null, `/api/${service.id}`)}
              primaryText={service.name}
              leftIcon={<FontIcon className="material-icons">{service.icon}</FontIcon>}/>
          )
        })}

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
          ? <IconButton iconClassName="material-icons" onTouchTap={() => pushState('/')}>home</IconButton>
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

function mapStateToProps(state) {
  return {
    services: state.services.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ServiceActions, dispatch),
    pushState: bindActionCreators(pushState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBarAndMenu)
