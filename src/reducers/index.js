import { combineReducers } from 'redux'
import services from './services'

const rootReducer = combineReducers({
  router: routerStateReducer,
  services: services
})

export default rootReducer
