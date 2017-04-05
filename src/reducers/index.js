import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'

const isPageFetching = (state = false, action) => {
    switch(action.type){
        case 'FINISH_PAGE_FETCH':
            return false
        case 'START_AJAX':
            return true
        default:
            return state
    }
}

const isPageLoading = (state = false, action) => {
    switch(action.type){
        case 'START_AJAX_LOADING':
            return true
        case 'END_AJAX_LOADING':
            return false
        default:
            return state
    }
}

const lunchApp = combineReducers({
    peopleList,
    departmentList,
    isPageFetching,
    isPageLoading,
    uid: (state = {}) => state,
})

export default lunchApp
