import { createStore } from 'redux'
import { applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import DevTools from './components/DevTools'
import reducers from './reducers'

export default createStore(
  reducers,
  {},
  compose(applyMiddleware(thunkMiddleware), DevTools.instrument())
)
