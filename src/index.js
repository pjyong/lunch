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
  withRouter,
  Switch
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $ from 'jquery'

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

const AppRouter = withRouter(App)

render(
    <Provider store={store}>
    <Router>
        <AppRouter>
            <Switch>
            <Route path="/lunch/index" component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/manage" component={Manage}/>
            <Route path="/ask/index" component={Ask}/>
            <Route path="/ask/entrance" component={AskEntrance}/>
            <Route path="/ask/add" component={AskAdd}/>
            <Route component={NotFound}/>
            </Switch>
        </AppRouter>
    </Router>
    </Provider>,
    document.getElementById('root')
)
