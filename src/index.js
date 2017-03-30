import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Manage from './pages/Manage'
import Nav from './components/Nav'
import History from './pages/History'
import reducer from './reducers'
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const initSate = {
    peopleList:[
        {
            id: 1,
            name: 'junepeng1',
            eat: true,
            department: 1,
        },
        {
            id: 2,
            name: 'junepeng222222222222',
            eat: false,
            department: 2,
        }
    ],
    departmentList:[
        {
            id: 1,
            name: '技术'
        },
        {
            id: 2,
            name: '旅游'
        },
        {
            id: 3,
            name: '高管'
        },
        {
            id: 4,
            name: '财务'
        },
        {
            id: 5,
            name: '人事'
        },
        {
            id: 6,
            name: '客服'
        },
        {
            id: 7,
            name: '产品'
        },
        {
            id: 8,
            name: '保养'
        },
        {
            id: 9,
            name: '市场'
        },
    ]
}
// <Route exact path="/"  component={Home}/>
// <Route path="/history" component={History}/>
// <Route path="/manage" component={Manage}/>
const store = createStore(reducer, initSate)



const HSL = ({ match: { params } }) => {
    if(params.h === 'home'){
        return <Home/>
    }else if(params.h === 'manage'){
        return <Manage/>

    }else if(params.h === 'history'){
        return <History/>
    }
    return <Home/>
}


render(
    <Provider store={store}>
    <Router>
    <Route render={({ location }) => (
      <div>
        <Route exact path="/" render={() => (
          <Redirect to="/home"/>
        )}/>


        <div>
        <ReactCSSTransitionGroup
                      component="div"
                      transitionName="page"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={500}
                      style={{height: '100%'}}
                  >
            <Route
              location={location}
              key={location.key}
              path="/:h"
              component={HSL}
            />
          </ReactCSSTransitionGroup>
        </div>
        <Nav/>
      </div>
    )}/>
  </Router>
    </Provider>,
    document.getElementById('root')
)

// 定义整个应用的state
/*
{
    peopleList:[
        {
            id: 1,
            name: 'junepeng1',
            eat: true,
            department: 1,
        },
        {
            id: 2,
            name: 'junepeng2',
            eat: false,
            department: 2,
        },
    ],
    department:[
        {
            id: 1,
            name: '技术部'
        },
        {
            id: 2,
            name: '财务部'
        },
    ],
}
*/
