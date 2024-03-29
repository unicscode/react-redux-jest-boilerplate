import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const middlewares = [thunk]

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
