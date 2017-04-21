import { combineReducers } from 'redux'
import * as questionReducer from './question'

export default combineReducers({
    ...questionReducer
})
