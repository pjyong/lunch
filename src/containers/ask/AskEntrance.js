import React from 'react'
import { connect } from 'react-redux'
import Page from '../Page'
import SearchBar from '../../components/common/SearchBar'
import {fetchLatestSolvedQuestions,fetchAllCategories} from '../../actions/ask'
import {startPageFetching,finishPageFetching} from '../../actions/index'
import {RenderRouters} from '../../common/utils'

import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        searchUI: state.searchUI,
        latestSolvedList: state.latestSolvedList
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
        // 如果已经在搜索页面,do nothing
        if( this.props.history.location.pathname.indexOf('/ask/entrance/search', 0) !== -1 ){
            return false;
        }
        // 去搜索页面
        if(text === ''){
            this.props.history.push('/ask/entrance/search')
        }else{
            this.props.history.push('/ask/entrance/search/'+text)
        }
    }

    handleCancel(){
        this.props.history.push('/ask/entrance')
    }

    render(){
        return <Page spacing={true} className={'ask_page'}>
            <SearchBar
                    text={this.props.searchUI.key}
                    onSubmit={this.handleSubmit.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />
            <RenderRouters routes={this.props.routes} parent="div"/>
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
