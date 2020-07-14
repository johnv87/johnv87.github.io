import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from 'redux-logger'

import { ScrollToTop } from './components/ScrollToTop'
import { Navbar } from './components/Navbar'
import Content from './components/Content'
import rootReducer from './redux/reducers/rootReducer'

function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
  )
  return (
    <Provider store={store}>
      <div className='App container-fluid px-0 px-md-3'>
        <Router>
          <Navbar />
          <ScrollToTop>
            <Content />
          </ScrollToTop>
        </Router>
      </div>
    </Provider>
  )
}

export default App
