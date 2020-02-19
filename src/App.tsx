import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'

import routes from './router'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  )
}

export default App
