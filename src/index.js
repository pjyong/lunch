import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
    // withRouter,
    Switch,
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {store, history} from './store/index'
/*加载页面和子页面*/
import 'weui'
import 'react-weui/lib/react-weui.min.css'
// 加载所有路由配置
import Routes from './routes/index'
// 使用页面动画组件
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// 解决IOS web点击延迟
import FastClick from 'fastclick';
window.addEventListener('load', () => {
    FastClick.attach(document.body)
})
// 加载自己的工具包
import {RenderRouters} from './common/utils'
// 加载自定义CSS
import './index.css';

/*
const App = React.createClass({

    render() {
        const { location } = this.props
        // 先将container里面的元素去除
        // if($('.container').children().length > 0){
        //     $('.container').html('')
        // }
        return (
            <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={20000}
                        transitionLeaveTimeout={50000}
                        style={{height: '100%'}}
                    >
            {React.cloneElement(this.props.children, {
                            key: location.pathname
            })}
            </ReactCSSTransitionGroup>
        );
    }
});
//         <AppRouter>

const AppRouter = withRouter(App)
*/


/*
<Route path="/lunch/index" component={Home}/>
<Route path="/history" component={History}/>
<Route path="/manage" component={Manage}/>
<Route path="/ask/index" component={Ask}/>
<Route path="/ask/question/:id" component={QuestionDetail}/>
<Route path="/ask/entrance">
    <AskEntrance>
        <Route exact path="/ask/entrance" component={LatestQuestionList}/>
        <Route exact path="/ask/entrance/search" component={HotSearch}/>
        <Route path="/ask/entrance/search/:key" component={SearchResult}/>
        <Route exact path="/ask/entrance/choosecar" component={ChooseCar}/>
        <Route path="/ask/entrance/choosecar/:brandid" component={ChooseCarClass}/>
        <Route path="/ask/entrance/hello" component={Test}/>
    </AskEntrance>
</Route>
<Route path="/ask/add" component={AskAdd}/>
<Route component={NotFound}/>
*/
render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <RenderRouters routes={Routes} parent={Switch}/>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
