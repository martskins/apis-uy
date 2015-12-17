import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router';
import Root from './containers/Root'
import Currency from './containers/Currency'

import injectTapEventPlugin from 'react-tap-event-plugin'
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  <Router>
    <Route path="/" component={Root}>
      <Route path="currency" component={Currency} />
    </Route>
  </Router>,
  document.getElementById('root')
)
