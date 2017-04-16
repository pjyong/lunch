const questionList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_QUESTIONS':
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

const categoryList = (state = {}, action) => {
    switch(action.type){
        default:
            return state
    }
}

const answerList = (state = {}, action) => {
    switch(action.type){
        default:
            return state
    }
}

const latestSolvedList = (state = [], action) => {
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

export {questionList,categoryList,answerList,latestSolvedList}
