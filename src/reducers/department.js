const departmentList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DEPARTMENTS':
            return action.data
        default:
            return state
    }
}

export default departmentList
