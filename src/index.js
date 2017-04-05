import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Home from './pages/Home'
import Manage from './pages/Manage'
// import Nav from './components/Nav'
import History from './pages/History'
import reducer from './reducers'
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducer, window.initSate || {},
    applyMiddleware(...middleware)
)

const App = React.createClass({
    render() {
        const { location } = this.props
        return (
            <div className="container">
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >
            {React.cloneElement(this.props.children, {
                            key: location.pathname
            })}
            </ReactCSSTransitionGroup>
            </div>
        );
    }
});

const AppRouter = withRouter(App)

render(
    <Provider store={store}>
    <Router>
        <AppRouter>
            <div>
            <Route exact path="/" component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/manage" component={Manage}/>
            </div>
        </AppRouter>
    </Router>
    </Provider>,
    document.getElementById('root')
)

// 定义整个应用的state
// const initSate = {
//     uid: 1,
//     peopleList:[
//         {
//             id: 1,
//             name: 'junepeng1',
//             eat: true,
//             department: 0,
//         },
//         {
//             id: 2,
//             name: 'junepeng222222222222',
//             eat: false,
//             department: 2,
//         }
//     ],
//     departmentList:[
//         {
//             id: 1,
//             name: '技术'
//         },
//         {
//             id: 2,
//             name: '旅游'
//         },
//         {
//             id: 3,
//             name: '高管'
//         },
//         {
//             id: 4,
//             name: '财务'
//         },
//         {
//             id: 5,
//             name: '人事'
//         },
//         {
//             id: 6,
//             name: '客服'
//         },
//         {
//             id: 7,
//             name: '产品'
//         },
//         {
//             id: 8,
//             name: '保养'
//         },
//         {
//             id: 9,
//             name: '市场'
//         },
//     ],
//     isPageFetching: false
// }
