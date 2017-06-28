import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import initSate from './initState'
import {createRootReducer} from '../reducers/index'
// 使用hash history
const history = createHistory()
const middleware = [ thunk,routerMiddleware(history) ]
// 如果是开发环境就生成日志
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const store = createStore(
    createRootReducer()
    , initSate || {},
    applyMiddleware(...middleware)
)

export {history,store}
