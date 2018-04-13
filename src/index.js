import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-96662251-1')
ReactGA.pageview(window.location.pathname + window.location.search)

render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ),
document.getElementById('root'))
