import React from 'react'
import ReactDOM from 'react-dom'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/style/css/bundle.css'

import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store'

import App from './components/App'

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()
