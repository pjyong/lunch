const people = (state, action) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            if(state.id !== action.id){
                return state
            }
            return {
                ...state,
                name: action.name,
                department: action.department
            }
        case 'TOGGLE_EAT':
            if(state.id !== action.id){
                return state
            }
            return {
                ...state,
                eat: !state.eat
            }
        default:
            return state
    }
}

const peopleList = (state = [], action) => {
    switch(action.type){
        case 'ADD_PEOPLE':
            var ttt = state.map(
                t => people(t, action)
            )
            console.log(ttt)
            return ttt
        case 'TOGGLE_EAT':
            return state.map(
                t => people(t, action)
            )
        default:
            return state
    }
}

export default peopleList
