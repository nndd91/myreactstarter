import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxPromise from 'redux-promise'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(ReduxPromise, logger, thunk)
))

export default store
