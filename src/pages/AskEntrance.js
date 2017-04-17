import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'

import SearchBar from '../components/common/SearchBar'
import QuestionList from '../containers/ask/QuestionList'
import {fetchLatestSolvedQuestions,changeSearch} from '../actions/ask'
import {finishPageFetching} from '../actions/index'

import $ from 'jquery'
import {

  withRouter,

} from 'react-router-dom'



const mapStateToProps = (state) => {
    return {
        isPageFetching: state.isPageFetching,
        searchUI: state.searchUI,
        latestSolvedList: state.latestSolvedList
    }
}

const mapDispatchToProps = {
    fetchLatestSolvedQuestions,
    finishPageFetching,
    changeSearch
}

class AskEntrance extends React.Component {

    constructor(props) {
        super(props)
        // 如果本地最近解决问题是空的就抓取线上的
        if(props.latestSolvedList.length === 0){
            $.when(props.fetchLatestSolvedQuestions()).then(props.finishPageFetching)
        }
    }

    handleChange(text, e){

        // this.props.changeSearch(text)
        if(text === ''){
            // do nothing
            return
        }
        this.props.changeSearch(text)
    }

    handleFocus(text, e){
        this.props.changeSearch(text)
        if(text === ''){
            this.props.history.replace('/ask/entrance/search')
        }else{
            this.props.history.replace('/ask/entrance/search/'+text)
        }
    }

    handleCancel(){
        // console.log('testforthat')
        this.props.changeSearch('', 'clearsearch')

        this.props.history.replace('/ask/entrance')
    }

    render(){
        if(this.props.isPageFetching){
            return <div></div>
        }
        var latestQuestionWidget
        if(this.props.searchUI.showLatestQuestion){
            latestQuestionWidget = <QuestionList title="最近解决"/>
        }

        return <Page spacing={true} className={'ask_page'}>
            <SearchBar
                    text={this.props.searchUI.key}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />



            {latestQuestionWidget}


            {this.props.children}
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
