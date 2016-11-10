import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
    
  return store
}

export default configureStore;