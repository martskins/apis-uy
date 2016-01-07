import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router';
import services from './services'

const rootReducer = combineReducers({
  services: services,
  router: routerStateReducer
})

export default rootReducer
