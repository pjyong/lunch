import React from 'react';
import { Route,Link } from 'react-router-dom'

// 实现路由的渲染
export const RenderRouters = (props) => {
    if(typeof props.routes === 'undefined'){
        return null
    }
    var Parent = "div"
    if(typeof props.parent !== 'undefined'){
        Parent = props.parent
    }
    return (<Parent>{props.routes.map((route, index)=>{
        if( typeof route.exact !== 'undefined' && route.exact ){
            return <Route path={route.path} exact component={route.component} render={route.render} key={index} />
        }
        return <Route path={route.path} component={route.component} render={route.render} key={index} />
    })}</Parent>)
}

// 列表基本数据结构
export const baseListStruct = {
    byId: {},
    allIds: [],
}

// 常用的数据列表渲染allIds和byId
export const renderDataList = (dataList = [], state = baseListStruct) => {
    var newState = Object.assign({}, state)
    dataList.map(row => {
        if(typeof newState.byId[row.ID] === 'undefined'){
            newState.byId[row.ID] = row
            newState.allIds.push(row.ID)
        }
        return row
    })
    return newState
}

// 常用的数据列表项ID列表
export const renderDataListOnlyIds = (dataList = [], state = []) => {
    var newState = []
    dataList.map(row => {
        newState.push(row.ID)
        return row
    })
    return newState
}

// 常用的单个数据项渲染
export const renderSingleData = (data = {}, state = {
    byId: {},
    allIds: [],
}) => {
    var newState = Object.assign({}, state)
    if(typeof newState.byId[data.ID] === 'undefined'){
        newState.byId[data.ID] = data
        newState.allIds.push(data.ID)
    }
    return newState
}

// allIds, byId树形结构,取某一级的所有记录
export const getCates = (pid, categoryList, key = 'ParentID') => {
    let finalArr  = []
    categoryList.allIds.map((id)=>{
        if(categoryList.byId[id][key] === pid){
            finalArr.push(categoryList.byId[id])
        }
        return false
    })
    return finalArr
}

// 将一个数组划成三个三个的二维数组
export const chunk = (arr, len) => {
    let chunks = [], i = 0, n = arr.length
    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    return chunks;
}
