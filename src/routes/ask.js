import Ask from '../pages/Ask'
import AskEntrance from '../pages/AskEntrance'
import AskAdd from '../pages/AskAdd'
import History from '../pages/History'
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
        component: QuestionDetail
    },
    {
        path: '/ask/entrance',
        component: AskEntrance,
        render: () => {
            // 将需要的reducer注入进来
            injectReducer(null, require('../reducers/ask/').default)
            return <AskEntrance routes={} />
        },
        routes: [
            {
                path: '/ask/entrance',
                component: LatestQuestionList
            },
            {
                path: '/ask/entrance/search',
                component: HotSearch
            },
        ]
    }
]
