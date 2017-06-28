import React from 'react';
import Ask from '../pages/Ask'
import AskEntrance from '../containers/ask/AskEntrance'
import AskAdd from '../pages/AskAdd'
import LatestQuestionList from '../containers/ask/LatestQuestionList'
import HotSearch from '../containers/ask/HotSearch'
import SearchResult from '../containers/ask/SearchResult'
import ChooseCar from '../containers/ask/ChooseCar'
import ChooseCarClass from '../containers/ask/ChooseCarClass'
import QuestionDetail from '../pages/QuestionDetail'

import {injectReducer} from '../reducers/index'

export default [
    {
        path: '/ask/index',
        component: Ask
    },
    {
        path: '/ask/question/:id',
        render: (props) => {
            injectReducer(null, require('../reducers/ask/').default)
            // 当使用render时,有点不一样,需要手动将属性传过来
            return <QuestionDetail {...props}/>
        },
    },
    {
        path: '/ask/entrance',
        render: () => {
            const routes = [
                {
                    path: '/ask/entrance',
                    component: LatestQuestionList,
                    exact: true
                },
                {
                    path: '/ask/entrance/search',
                    component: HotSearch,
                    exact: true
                },
                {
                    path: '/ask/entrance/search/:key',
                    component: SearchResult
                },
                {
                    path: '/ask/entrance/choosecar',
                    component: ChooseCar,
                    exact: true
                },
                {
                    path: '/ask/entrance/choosecar/:brandid',
                    component: ChooseCarClass
                },
            ]
            // 将需要的reducer注入进来
            // alert(123)
            injectReducer(null, require('../reducers/ask/').default)
            return <AskEntrance routes={routes}/>
        },
    },
    {
        path: '/ask/add',
        component: AskAdd
    },
]
