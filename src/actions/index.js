import departmentService from '../services/DepartmentService'
import peopleService from '../services/PeopleService'

export const addPeople = (name,department,id) => ({
    type: 'ADD_PEOPLE',
    id,
    name,
    department
})

// export const toggleEat = (id) => ({
//     type: 'TOGGLE_EAT',
//     id
// })
export const toggleEat = (id, eat) => {
    return dispatch => {
        dispatch(startAjaxLoading())
        return peopleService.toggleEat({
            uid: id,
            eat: eat,
        }).then(
            json => {
                console.log(json)
                dispatch(endAjaxLoading())
                if(json.status){
                    return dispatch({
                        type: 'TOGGLE_EAT',
                        data: id
                    })
                }else{
                    console.log('error')
                }
            }
        )
    }
}

export const startAjaxLoading = () => ({
    type: 'START_AJAX_LOADING'
})

export const endAjaxLoading = () => ({
    type: 'END_AJAX_LOADING'
})

export const updateGlobalMsg = () => ({
    type: 'UPDATE_GLOBAL_MSG'
})

export const startAjax = () => ({
    type: 'START_AJAX'
})

export const finishPageFetching = () => ({
    type: 'FINISH_PAGE_FETCH'
})

export const fetchDepartments = () => {
    return dispatch => {
        dispatch(startAjax())
        return departmentService.fetch().then(
            json => {
                return dispatch({
                    type: 'FETCH_DEPARTMENTS',
                    data: json
                })
            }
        )
    }
}

export const fetchPeople = () => {
    return dispatch => {
        dispatch(startAjax())
        return peopleService.fetch().then(
            json => {
                return dispatch({
                    type: 'FETCH_PEOPLE',
                    data: json
                })
            }
        )
    }
}
