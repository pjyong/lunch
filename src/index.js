import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Manage from './pages/Manage'
import Ask from './pages/Ask'
import Test from './pages/Test'

import AskEntrance from './pages/AskEntrance'
import AskAdd from './pages/AskAdd'
// import Nav from './components/Nav'
import History from './pages/History'
import FastClick from 'fastclick';
import reducer from './reducers'
import './index.css';
// 这里因为我只是基于某些页面才加的React,所以最好还是
import {
  HashRouter as Router,
  Route,
  // withRouter,
  Switch,
  hashHistory
} from 'react-router-dom'


// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import HotSearch from './containers/ask/HotSearch'
import SearchResult from './containers/ask/SearchResult'
import ChooseCar from './containers/ask/ChooseCar'


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

const store = createStore(reducer, window.initSate || {},
    applyMiddleware(...middleware)
)
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

render(
    <Provider store={store}>
    <Router history={hashHistory}>
            <Switch>
            <Route path="/lunch/index" component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/manage" component={Manage}/>
            <Route path="/ask/index" component={Ask}/>
            <Route path="/ask/entrance">
                <AskEntrance>
                    <Route exact path="/ask/entrance/search" component={HotSearch}/>
                    <Route path="/ask/entrance/search/:key" component={SearchResult}/>
                    <Route path="/ask/entrance/choosecar" component={ChooseCar}/>
                    <Route path="/ask/entrance/hello" component={Test}/>
                </AskEntrance>
            </Route>
            <Route path="/ask/add" component={AskAdd}/>
            <Route component={NotFound}/>
            </Switch>
    </Router>
    </Provider>,
    document.getElementById('root')
)
