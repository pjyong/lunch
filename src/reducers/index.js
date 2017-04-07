import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'

const isPageFetching = (state = false, action) => {
    switch(action.type){
        case 'FINISH_PAGE_FETCH':
            return false
        case 'START_PAGE_FETCH':
            return true
        default:
            return state
    }
}

const toast = (state = {}, action) => {
    switch(action.type){
        case 'CHANGE_TOAST':
            return {
                icon: action.icon,
                show: action.show,
                text: action.text,
                timer: action.timer
            }
        case 'CLEAR_TOAST_TIMER':
            state.timer && clearTimeout(state.timer)
            return Object.assign({}, state, {
                timer: null
            })
        default:
            return state
    }
}

const showInfoModal = (state = true, action) => {
    switch(action.type){
        case 'HIDE_INFO_MODAL':
            return false
        default:
            return state
    }
}

const lunchApp = combineReducers({
    peopleList,
    departmentList,
    isPageFetching,
    toast,
    showInfoModal,
    uid: (state = {}) => state,
})

export default lunchApp
