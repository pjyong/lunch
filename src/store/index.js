import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import initSate from './initState'
import reducer from '../reducers/index'

const history = createHistory()
const middleware = [ thunk,routerMiddleware(history) ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const store = createStore(
    reducer
    , initSate || {},
    applyMiddleware(...middleware)
)

export {history,store}
