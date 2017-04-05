const departmentList = (state = [], action) => {
    switch(action.type){
        case 'FETCH_DEPARTMENTS':
            console.log(action)
            return action.data
        default:
            return state
    }
}

export default departmentList
