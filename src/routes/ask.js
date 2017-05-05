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
