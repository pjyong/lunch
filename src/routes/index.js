import NotFound from '../pages/NotFound'

const mergeArray = (...args) => {
    var result = []
    args.map(function(innerArgs){
        innerArgs.map(function(route){
            result.push(route)
        })
    })

    return result
}

export default mergeArray(
    require('./ask').default,
    [
        // 无路由匹配
        {
            path: '*',
            component: NotFound
        }
    ]
)
