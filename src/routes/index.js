import NotFound from '../pages/NotFound'

// merge many parts of routes
const mergeArray = (...args) => {
    var result = []
    args.map(function(innerArgs){
        innerArgs.map(function(route){
            result.push(route)
            return route
        })
        return innerArgs
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
