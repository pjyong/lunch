import { combineReducers } from 'redux'
import peopleList from './people'

const lunchApp = combineReducers({
    peopleList
})

export default lunchApp
