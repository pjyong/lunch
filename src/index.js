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
// <Route exact path="/lunch/index" component={Home}/>

const AppRouter = withRouter(App)

render(
    <Provider store={store}>
    <Router>
        <AppRouter>
            <div>
            <Route exact path="/" component={Home}/>
            <Route path="/history" component={History}/>
            <Route path="/manage" component={Manage}/>
            <Route component={Home}/>
            </div>
        </AppRouter>
    </Router>
    </Provider>,
    document.getElementById('root')
)
