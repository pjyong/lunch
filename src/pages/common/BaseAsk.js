import React from 'react'
import {injectReducer} from 'reducers/index'
import AskReducers  from 'reducers/ask/index'

class BaseAsk extends React.Component {
    componentWillMount(){
        // 注入跟ask相关的reducers
        injectReducer(null, AskReducers)
    }

    render(){
        return <div>{this.props.children}</div>
    }
}

export default BaseAsk
