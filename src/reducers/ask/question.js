// 问题列表
export const questionList = (state = {}, action) => {
    var newState
    switch(action.type){
        case 'FETCH_SEARCH_QUESTIONS':
        case 'FETCH_QUESTIONS':
            // 和抓取的数据做比对
            newState = Object.assign({}, state)
            action.data.map(question => {
                if(typeof newState.byId[question.ID] === 'undefined'){
                    newState.byId[question.ID] = question
                    newState.allIds.push(question.ID)
                }
                return question

            })
            return newState
        case 'FETCH_QUESTION_DETAIL':
            newState = Object.assign({}, state)
            if(typeof newState.byId[action.data.ID] === 'undefined'){
                newState.byId[action.data.ID] = action.data
                newState.allIds.push(action.data.ID)
            }
            return newState
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
export const carClassList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_CAR_CLASSES':
            var newState = Object.assign({}, state)
            action.data.map(question => {
                if(typeof newState.byId[question.ID] === 'undefined'){
                    newState.byId[question.ID] = question
                    newState.allIds.push(question.ID)
                }
                return question

            })
            return newState
        default:
            return state
    }
}

// 分类列表
export const categoryList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_CATEGORIES':
            var newState = Object.assign({}, state)
            action.data.map(question => {
                if(typeof newState.byId[question.ID] === 'undefined'){
                    newState.byId[question.ID] = question
                    newState.allIds.push(question.ID)
                }
                return question
            })
            return newState
        default:
            return state
    }
}

// 问题列表
export const answerList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_ANSWER_LIST':
            // 和抓取的数据做比对
            var newState = Object.assign({}, state)
            action.data.map(question => {
                if(typeof newState.byId[question.ID] === 'undefined'){
                    newState.byId[question.ID] = question
                    newState.allIds.push(question.ID)
                }
                return question

            })
            return newState
        default:
            return state
    }
}

// 最近解决的问题列表
export const latestSolvedList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_QUESTIONS':
            var ids = []
            action.data.map(question => {
                ids.push(question.ID)
                return question
            })
            return ids
        default:
            return state
    }
}

// 搜索问题结果列表
export const searchQuestionList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SEARCH_QUESTIONS':
            var ids = []
            action.data.map(question => {
                ids.push(question.ID)
                return question
            })
            return ids
        // 如果搜索关键词变更就清空
        case 'RESET_SEARCH':
            return []
        default:
            return state
    }
}
