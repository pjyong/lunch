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
