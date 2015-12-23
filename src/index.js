import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router';
import Root from './containers/Root'
import Page from './containers/Page'
import configureStore from './store/configureStore'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore()

render(

  <div>
    <Provider store={store}>
      <Root>
        <Page/>
      </Root>
    </Provider>
    {process.env.NODE_ENV === 'development'
      ? <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      : null}
  </div>,
  document.getElementById('root')
)
