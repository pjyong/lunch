import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// 解决IOS web点击延迟
import FastClick from 'fastclick';
import {
    Route,
    // withRouter,
    Switch,
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {store, history} from './store/index'
/*加载页面和子页面*/
import Home from './pages/Home'
import Manage from './pages/Manage'
import Ask from './pages/Ask'
import AskEntrance from './pages/AskEntrance'
import AskAdd from './pages/AskAdd'
import History from './pages/History'
import LatestQuestionList from './containers/ask/LatestQuestionList'
import HotSearch from './containers/ask/HotSearch'
import SearchResult from './containers/ask/SearchResult'
import ChooseCar from './containers/ask/ChooseCar'
import ChooseCarClass from './containers/ask/ChooseCarClass'
import QuestionDetail from './pages/QuestionDetail'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
// 使用页面动画组件
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.css';

window.addEventListener('load', () => {
    FastClick.attach(document.body)
})
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
        <Switch>


        </Switch>
    </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

const RouteWithRoutes = (route) => (
    <Route path={route.path} render={props => {
        if(typeof route.routes !== 'undefined' && route.routes.length !== 0){

        }else{
            return route.component
        }
        <route.component {...props} routes={route.routes}/>
    }}/>
)

// 遍历路由配置
const renderRouter = (routes) => {
    return {routes.map((route)=>(
        <Route path={route.path} component={route.component}/>
    ))}
}
