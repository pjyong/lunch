import {renderDataList, renderSingleData, renderDataListOnlyIds, baseListStruct} from '../../common/utils'

// 问题列表
export const questionList = (state = baseListStruct, action) => {
    switch(action.type){
        case 'FETCH_SEARCH_QUESTIONS':
        case 'FETCH_QUESTIONS':
            // 和抓取的数据做比对
            return renderDataList(action.data)
        case 'FETCH_QUESTION_DETAIL':
            return renderSingleData(action.data)
        default:
            return state
    }
}

// 品牌列表
export const brandList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_BRANDS':
            var newState = {
                byId: {},
                allIds: [],
                allNames:[]
            }
            for(var i in action.data){
                newState.allNames.push(i)
                action.data[i].map((brand)=>{
                    newState.byId[brand.ID] = brand
                    newState.allIds.push(brand.ID)
                    return brand
                })
            }
            return newState
        default:
            return state
    }
}

// 车系列表
export const carClassList = (state = baseListStruct, action) => {
    switch(action.type){
        case 'FETCH_CAR_CLASSES':
            return renderDataList(action.data)
        default:
            return state
    }
}

// 分类列表
export const categoryList = (state = baseListStruct, action) => {
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return renderDataList(action.data)
        default:
            return state
    }
}

// 问题列表
export const answerList = (state = baseListStruct, action) => {
    switch(action.type){
        case 'FETCH_ANSWER_LIST':
            // 和抓取的数据做比对
            return renderDataList(action.data)
        default:
            return state
    }
}

// 最近解决的问题列表
export const latestSolvedList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTIONS':
            return renderDataListOnlyIds(action.data)
        default:
            return state
    }
}

// 搜索问题结果列表
export const searchQuestionList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SEARCH_QUESTIONS':
            return renderDataListOnlyIds(action.data)
        // 如果搜索关键词变更就清空
        case 'RESET_SEARCH':
            return []
        default:
            return state
    }
}
