import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'

const lunchApp = combineReducers({
    peopleList,
    departmentList
})

export default lunchApp
