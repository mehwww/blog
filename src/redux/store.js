import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rage from './modules/rage'

const logger = createLogger()
const reducers = combineReducers({
  routing: routerReducer,
  rage
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
