import askService from '../services/AskService'
import {startPageFetching} from './index'


// 抓取最近解决的
export const fetchLatestSolvedQuestions = () => {
    return dispatch => {
        dispatch(startPageFetching())
        return askService.fetchLatestSolvedQuestions().then(
            json => {
                return dispatch({
                    type: 'FETCH_QUESTIONS',
                    data: json
                })
            }
        )
    }
}

// 抓取所有分类
export const fetchAllCategories = () => {
    return dispatch => {
        dispatch(startPageFetching())
        return askService.fetchAllCategories().then(
            json => {
                return dispatch({
                    type: 'FETCH_CATEGORIES',
                    data: json
                })
            }
        )
    }
}


//
export const changeSearch = (text = '', t) => {
    if(t === 'clearsearch'){
        return {
            type: 'CLEAR_SEARCH'
        }
    }else if(t == 'choosecarclass'){
        return {
            type: 'SHOW_CHOOSE_CAR_CLASS'
        }
    }
    return {
    type: 'FOCUS_SEARCH',
    text: text,
}}
