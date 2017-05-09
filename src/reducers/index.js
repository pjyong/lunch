import { combineReducers } from 'redux'
import peopleList from './people'
import departmentList from './department'
import { routerReducer } from 'react-router-redux'
import {store} from '../store/index'


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

/*
const lunchApp = combineReducers({
    peopleList,
    departmentList,
    isPageFetching,
    toast,
    showInfoModal,
    uid: (state = {}) => state,
    searchUI,
    router:routerReducer,
})

export default lunchApp
*/

// 同步加载的reducers
const syncReducers = {
    peopleList,
    departmentList,
    isPageFetching,
    toast,
    showInfoModal,
    uid: (state = {}) => state,
    searchUI,
    router: routerReducer,
}

// 异步加载的reducers
const asyncReducers = {}

export function createRootReducer() {
    return combineReducers({
        ...syncReducers,
        ...asyncReducers
    })
}

// 按需加载，注入相应的reducer
export function injectReducer(key, reducer) {
    if(key === null){
        asyncReducers = {...asyncReducers, ...reducer}
    }else{
        asyncReducers[key] = reducer
    }
    store.replaceReducer(createRootReducer()) // 替换当前的 rootReducer
}
