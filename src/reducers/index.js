import { combineReducers } from 'redux'
import services from './services'

const rootReducer = combineReducers({
  services: services
})

export default rootReducer
