import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'
import {questionList, categoryList, answerList, latestSolvedList,brandList, carClassList} from './question'

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
        case 'FOCUS_SEARCH':
            if(action.text === ''){
                return {
                    showSearchInput: true,
                    showSearchResult: false,
                    showHotSearchOption: true,
                    showLatestQuestion: false,
                    showChooseCarClass: false,
                    key: action.text,
                }
            }
            return {
                showSearchInput: true,
                showSearchResult: true,
                showHotSearchOption: false,
                showLatestQuestion: false,
                showChooseCarClass: false,
                key: action.text,
            }
        case 'CLEAR_SEARCH':
            return {
                showSearchInput: true,
                showSearchResult: false,
                showHotSearchOption: false,
                showLatestQuestion: true,
                showChooseCarClass: false,
                key: null,
            }
        case 'SHOW_CHOOSE_CAR_CLASS':
            return {
                showSearchInput: true,
                showSearchResult: false,
                showHotSearchOption: false,
                showLatestQuestion: false,
                showChooseCarClass: true,
                key: null,
            }
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
    searchQuestionList: (state = {}) => state,
})

export default lunchApp
