import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Loading from '@/components/loading'

import routes from './route'
import store from './store'
import { themesDefault } from './style/theme'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={themesDefault}>
            {renderRoutes(routes)}
          </ThemeProvider>
        </Router>
      </Provider>
    </Suspense>
  )
}

export default App
