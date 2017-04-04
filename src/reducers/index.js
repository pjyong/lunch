import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'

const lunchApp = combineReducers({
    peopleList,
    departmentList,
    uid: (state = {}) => state,
})

export default lunchApp
