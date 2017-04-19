import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'
import {questionList, categoryList, answerList, latestSolvedList,brandList, carClassList,searchQuestionList} from './question'

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

const searchUI = (state = {}, action) => {
    switch(action.type){
        case 'RESET_SEARCH':
            return {
                key: action.text,
            }
        default:
            return state
    }
}

const submitActionID = (state=0, action) => {
    switch(action.type){
        case 'ADD_QUESTION':
            return action.id
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
    questionList,
    categoryList,
    answerList,
    latestSolvedList,
    searchUI,
    brandList,
    carClassList,
    searchQuestionList,
    submitActionID
})

export default lunchApp
