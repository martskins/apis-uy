import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './containers/Root'
import Page from './containers/Page'
import NoMatch from './components/NoMatch'
import configureStore from './store/configureStore'
import { Router, Route } from 'react-router'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import { ReduxRouter } from 'redux-router'

import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const store = configureStore()

render(
  <div>
    <Provider store={store}>
      <ReduxRouter history={history}>
        <Route path='/' component={Root}>
          <Route path='api/:serviceId' component={Page} />
          <Route path="*" component={NoMatch} />
        </Route>
      </ReduxRouter>
    </Provider>
    {process.env.NODE_ENV === 'development'
      ? <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      : null}
  </div>,
  document.getElementById('root')
)
