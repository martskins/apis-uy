import reqwest from 'reqwest'

export function showDefinition(serviceId) {
  return { type: 'SHOW_DEFINITION', serviceId: serviceId }
}

export function updateParamValue(serviceId, name, value) {
  return { type: 'UPDATE_PARAM_VALUE', serviceId: serviceId, name: name, value: value }
}

export function updateParamVisibility(serviceId, name) {
  return { type: 'UPDATE_PARAM_VISIBILITY', serviceId: serviceId, name: name }
}

export function updateHeaderValue(serviceId, name, value) {
  return { type: 'UPDATE_HEADER_VALUE', serviceId: serviceId, name: name, value: value }
}

export function updateHeaderVisibility(serviceId, name) {
  return { type: 'UPDATE_HEADER_VISIBILITY', serviceId: serviceId, name: name }
}

export function queryService(serviceId) {
  return (dispatch, getState) => {
    dispatch({ type: 'QUERYING_SERVICE', serviceId: serviceId })
    const service = getState().services.list.filter((service) => service.id === serviceId)[0]
    request(service).always((data) => {
      dispatch({ type: 'SHOW_RESULT', serviceId: serviceId, jsonResponse: data })
    })
  }
}

function request (service) {
  let config = {}

  config['url'] = service.type === 'jsonp'
    ? service.url + '?jsoncallback=reqwest&' + params(service)
    : service.url

  config['method'] = service.method

  if(service.type === 'jsonp') {
    config['type'] = 'jsonp'
    config['jsonpCallbackName'] = 'reqwest'
  }

  config['headers'] = headers(service)

  return reqwest(config)
}

function params(service) {
  const enabled = service.params.filter((param) => !param.disabled)
  if(service.type === 'jsonp') {
    return enabled
      .map((param) => `${param.name}=${param.value}` )
      .join('&')
  } else {
    let params = []
    enabled.forEach((param) => param[param.name] = param.value)
    return params
  }
}

function headers(service) {
  let headers = []
  service
    .headers
    .filter((header) => !header.disabled)
    .forEach((header) => headers[header.name] = header.value)
  return headers
}
