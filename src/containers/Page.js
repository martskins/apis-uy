import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ServiceActions from '../actions/services'
import Api from '../components/Api'
import NoMatch from '../components/NoMatch'

class Page extends Component {
  render() {
    const { service, actions } = this.props
    const api = service
      ? <Api title={service.name}
          url={service.url}
          description={service.description}
          params={service.params}
          headers={service.headers}
          method={service.method}
          jsonp={service.type === 'jsonp'}
          result={service.result}
          onParamChange={(k, v) => actions.updateParamValue(service.id, k, v)}
          onParamToggleVisibility={k => actions.updateParamVisibility(service.id, k)}
          onHeaderChange={(k, v) => actions.updateHeaderValue(service.id, k, v)}
          onHeaderToggleVisibility={k => actions.updateHeaderVisibility(service.id, k)}
          onApiRequest={() => actions.queryService(service.id)} />
      : <NoMatch />
    return (api)
  }
}

function mapStateToProps(state) {
  return {
    service: state.services.list.filter((service) => service.id === state.services.current)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ServiceActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
