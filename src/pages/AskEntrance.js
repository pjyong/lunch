import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'

import SearchBar from '../components/common/SearchBar'
import {fetchLatestSolvedQuestions,changeSearch} from '../actions/ask'
import {finishPageFetching} from '../actions/index'

import $ from 'jquery'
import {
  withRouter
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
        if(props.latestSolvedList.length === 0){
            $.when(props.fetchLatestSolvedQuestions()).then(props.finishPageFetching)
        }
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
        // if(text === ''){
        //     return
        // }
        // this.props.changeSearch(text)
    }

    handleFocus(text, e){
        if( this.props.history.location.pathname.indexOf('/ask/entrance/search', 0) !== -1 ){
            return false;
        }
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
        if(this.props.isPageFetching){
            return <div></div>
        }

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
            {this.props.children}
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
