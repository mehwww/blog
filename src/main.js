import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App'
import Home from './containers/Home'
import Blog from './containers/Blog'
import store from './redux/store'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='blog' component={Blog}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
