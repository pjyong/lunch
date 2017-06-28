import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import HotSearch from 'containers/ask/HotSearch'
import SearchResult from 'containers/ask/SearchResult'
import ChooseCar from 'containers/ask/ChooseCar'
import ChooseCarClass from 'containers/ask/ChooseCarClass'
import { Route } from 'react-router-dom'
import SearchBar from 'components/common/SearchBar'
import {fetchLatestSolvedQuestions,fetchAllCategories} from 'actions/ask'
import {startPageFetching,finishPageFetching} from 'actions/index'
import {injectReducer} from 'reducers/index'
import AskReducers  from 'reducers/ask/index'
import pathToRegexp from 'path-to-regexp'

import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    const re = pathToRegexp('/ask/entrance/search/:key')
    const result = re.exec(ownProps.location.pathname)
    return {
        key: result ? result[1] : ''
    }
}

const mapDispatchToProps = {
    fetchLatestSolvedQuestions,
    fetchAllCategories,
    startPageFetching,
    finishPageFetching,
}

class AskEntrance extends React.Component {

    constructor(props) {
        super(props)
        props.startPageFetching()
        // 开始抓取数据
        $.when(
            props.fetchLatestSolvedQuestions(),
            props.fetchAllCategories()
        ).then(props.finishPageFetching)
    }

    componentWillMount(){
        // 注入reducers
        injectReducer(null, AskReducers)
    }

    handleSubmit(text, e){
        if(text === ''){
            alert('不能为空')
            return
        }
        if(text !== this.props.searchUI.key){
            this.props.history.push('/ask/entrance/search/'+text)
        }
    }

    handleChange(text, e){
    }

    handleFocus(text, e){
        this.props.history.push('/ask/entrance/search/'+text)
    }

    handleCancel(){
        this.props.history.push('/ask/entrance')
    }

    render(){
        return <Page spacing={true} className={'ask_page'}>
            <SearchBar
                    text={this.props.key}
                    onSubmit={this.handleSubmit.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />
            <SearchResult />
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
