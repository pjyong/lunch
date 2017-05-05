export default [
    require('.ask').default,
    // 无路由匹配
    {
        path: '*',
        component: NotFound
    }
]
