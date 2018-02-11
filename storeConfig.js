// core vendor
import { createStore, applyMiddleware, compose } from 'redux'

// middleware
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__
});

// App
import reducers from './reducers'

export default createStore(
  reducers,
  compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
  )
)
