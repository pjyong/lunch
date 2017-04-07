import departmentService from '../services/DepartmentService'
import peopleService from '../services/PeopleService'

// 设置toast,两秒之后自动消失
export const changeToast = (show=false, icon='', text='', timer=null) => {
    return dispatch => {
        if(show){
            // 并且不是loading
            if(icon !== 'loading'){
                timer = setTimeout(()=> {
                    dispatch(changeToast(false))
                }, 2000)
            }
        }else{
            //hide
            dispatch({
                type: 'CLEAR_TOAST_TIMER'
            })
        }
        return dispatch({
            type: 'CHANGE_TOAST',
            show,
            icon,
            text,
            timer
        })
    }
}
// 加载的toast
export const setLoadingToast = () => {
    return changeToast(true, 'loading', '加载中...')
}
// 成功的toast
export const setSuccessToast = () => {
    return changeToast(true, 'success-no-circle', '操作成功')
}
// 隐藏toast
export const hideToast = () => {
    return changeToast(false)
}
// 开始整个页面的抓取
export const startPageFetching = () => ({
    type: 'START_PAGE_FETCH'
})
export const finishPageFetching = () => ({
    type: 'FINISH_PAGE_FETCH'
})

// 抓取部门列表
export const fetchDepartments = () => {
    return dispatch => {
        dispatch(startPageFetching())
        return departmentService.fetch().then(
            json => {
                console.log(json)
                return dispatch({
                    type: 'FETCH_DEPARTMENTS',
                    data: json
                })
            }
        )
    }
}

// 给部门添加人员
export const addPeople = (name,department,id) => {
    return dispatch => {
        dispatch(setLoadingToast())
        return peopleService.addPeople({
            name: name,
            department: department,
            id: id
        }).then(
            json => {
                dispatch(hideToast())
                if(json.status){
                    dispatch({
                        type: 'HIDE_INFO_MODAL'
                    })
                    return dispatch({
                        type: 'ADD_PEOPLE',
                        id,
                        name,
                        department
                    })
                }else{

                    dispatch(changeToast(true, '', json.msg))
                }
            }
        )
    }
}

// 抓取人员列表
export const fetchPeople = () => {
    return dispatch => {
        dispatch(startPageFetching())
        return peopleService.fetch().then(
            json => {
                console.log(json)
                return dispatch({
                    type: 'FETCH_PEOPLE',
                    data: json
                })
            }
        )
    }
}

// 点餐或取消点餐
export const toggleEat = (id, eat) => {
    return dispatch => {
        dispatch(setLoadingToast())
        return peopleService.toggleEat({
            uid: id,
            eat: eat,
        }).then(
            json => {
                dispatch(hideToast())
                if(json.status){
                    return dispatch({
                        type: 'TOGGLE_EAT',
                        id: id
                    })
                }else{
                    dispatch(changeToast(true, '', json.msg))
                }
            }
        )
    }
}
