import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools'
import rootReducer from '../reducers'
import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'


export default function configureStore(initialState) {

  let finalCreateStore = null

  if(process.env.NODE_ENV === 'development') {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      reduxReactRouter({createHistory}),
      devTools(),
      // Lets you write ?debug_session=<name> in address bar to persist debug sessions
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(thunk),
      reduxReactRouter({createHistory}),
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer.default)
    })
  }

  return store
}
