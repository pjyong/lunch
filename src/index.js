import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const initSate = {
    peopleList:[
        {
            id: 1,
            name: 'junepeng1',
            eat: true,
            department: 1,
        }
    ],
    department:[
        {
            id: 1,
            name: '技术'
        },
        {
            id: 2,
            name: '旅游'
        },
        {
            id: 3,
            name: '高管'
        },
        {
            id: 4,
            name: '财务'
        },
        {
            id: 5,
            name: '人事'
        },
        {
            id: 6,
            name: '客服'
        },
        {
            id: 7,
            name: '产品'
        },
        {
            id: 8,
            name: '保养'
        },
        {
            id: 9,
            name: '市场'
        },
    ]
}

const store = createStore(reducer, initSate)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// 定义整个应用的state
/*
{
    peopleList:[
        {
            id: 1,
            name: 'junepeng1',
            eat: true,
            department: 1,
        },
        {
            id: 2,
            name: 'junepeng2',
            eat: false,
            department: 2,
        },
    ],
    department:[
        {
            id: 1,
            name: '技术部'
        },
        {
            id: 2,
            name: '财务部'
        },
    ],
}
*/
