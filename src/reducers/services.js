import initialState from '../config/services'

export default function services (state = initialState, action) {
  switch(action.type) {
    case '@@reduxReactRouter/routerDidChange':
      return {...state, current: current(state.current, action, state.list.map((s) => s.id))}  
    case 'UPDATE_PARAM_VALUE':
    case 'UPDATE_PARAM_VISIBILITY':
    case 'UPDATE_HEADER_VALUE':
    case 'UPDATE_HEADER_VISIBILITY':
    case 'QUERYING_SERVICE':
    case 'SHOW_RESULT':
      return {...state, list: list(state.list, action)}
    default:
      return state
  }
}

function list (state, action) {
  switch (action.type) {
    case 'UPDATE_PARAM_VALUE':
    case 'UPDATE_PARAM_VISIBILITY':
      return state.map((service) => {
        if(service.id === action.serviceId) {
          return {...service, params: params(service.params, action)}
        }
        return service
      })
    case 'UPDATE_HEADER_VALUE':
    case 'UPDATE_HEADER_VISIBILITY':
      return state.map((service) => {
        if(service.id === action.serviceId) {
          return {...service, headers: headers(service.headers, action)}
        }
        return service
      })
    case 'SHOW_RESULT':
      return state.map((service) => {
        if(service.id === action.serviceId) {
          return {...service, result: action.jsonResponse}
        }
        return service
      })
    case 'QUERYING_SERVICE':
      return state.map((service) => {
        if(service.id === action.serviceId) {
          return {...service, result: 'loading'}
        }
        return service
      })
    default:
      return state
  }
}

function params (state, action) {
  switch (action.type) {
    case 'UPDATE_PARAM_VALUE':
      return state.map((param) => {
        if(param.name === action.name) {
          return {...param, value: action.value}
        }
        return param
      })
    case 'UPDATE_PARAM_VISIBILITY':
      return state.map((param) => {
        if(param.name === action.name) {
          return {...param, disabled: !param.disabled}
        }
        return param
      })
    default:
      return state
  }
}

function headers (state, action) {
  switch (action.type) {
    case 'UPDATE_HEADER_VALUE':
      return state.map((header) => {
        if(header.name === action.name) {
          return {...header, value: action.value}
        }
        return header
      })
    case 'UPDATE_HEADER_VISIBILITY':
      return state.map((header) => {
        if(header.name === action.name) {
          return {...header, disabled: !header.disabled}
        }
        return header
      })
    default:
      return state
  }
}

function current(state, action, availableServices) {
  switch(action.type) {
    case '@@reduxReactRouter/routerDidChange':      
      const serviceId = getServiceId(action)
      return availableServices.includes(serviceId) ? serviceId : null
    default:
      return state
  }
}

function getServiceId(action) {
  const id = action.payload &&
    action.payload.params &&
    action.payload.params.serviceId &&
    Number(action.payload.params.serviceId)

  return id ? id : null
}
