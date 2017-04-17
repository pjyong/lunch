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

const brandList = (state = {}, action) => {
    switch(action.type){
        case 'FETCH_BRANDS':
            var newState = Object.assign({}, state)
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

const carClassList = (state = {}, action) => {
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

export {questionList,categoryList,answerList,latestSolvedList,brandList,carClassList}
