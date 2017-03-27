const people = (state, action) => {
    switch (action.type) {
        case 'ADD_PEOPLE':
            return {
                id: action.id,
                name: action.name,
                eat: false,
                department: action.department,
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
            return [
                ...state,
                people(undefined, action)
            ]
        default:
            return state
    }
}

export default peopleList
