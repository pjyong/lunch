import askService from '../services/AskService'
import {startPageFetching} from './index'


// 抓取最近解决的
export const fetchLatestSolvedQuestions = () => {
    return dispatch => {
        dispatch(startPageFetching())
        return askService.fetchLatestSolvedQuestions().then(
            json => {
                // console.info(json)
                return dispatch({
                    type: 'FETCH_QUESTIONS',
                    data: json
                })
            }
        )
    }
}

// 抓取所有品牌
export const fetchAllBrands = () => {
    return dispatch => {
        return askService.fetchAllBrands().then(
            json => {
                return dispatch({
                    type: 'FETCH_BRANDS',
                    data: json
                })
            }
        )
    }
}

// 抓取所有车型由品牌ID
export const fetchAllCarClasses = (brandid) => {
    return dispatch => {
        return askService.fetchAllCarClasses({brandid: brandid}).then(
            json => {
                return dispatch({
                    type: 'FETCH_CAR_CLASSES',
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
    }else if(t === 'choosecarclass'){
        return {
            type: 'SHOW_CHOOSE_CAR_CLASS'
        }
    }
    return {
    type: 'FOCUS_SEARCH',
    text: text,
}}
