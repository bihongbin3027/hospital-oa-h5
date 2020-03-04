import React from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import routes from './route'
import store from './store'
import { themesDefault } from './style/theme'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={themesDefault}>{renderRoutes(routes)}</ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
