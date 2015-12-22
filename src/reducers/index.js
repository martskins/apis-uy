import { combineReducers } from 'redux'
import services from './services'
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  router: routerStateReducer,
  services: services
})

export default rootReducer
