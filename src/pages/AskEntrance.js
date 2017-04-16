import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'

import {
  Link,
  Route
} from 'react-router-dom'
import Ask from './Test'
import SearchBar from '../components/common/SearchBar'
import QuestionList from '../containers/ask/QuestionList'
import HotSearch from '../containers/ask/HotSearch'
import ChooseCar from '../components/ask/ChooseCar'
import {fetchLatestSolvedQuestions,changeSearch} from '../actions/ask'
import {finishPageFetching} from '../actions/index'

import $ from 'jquery'

import WeUI from 'react-weui'
const {
    //main component
   //for display data
   PanelFooter,
    Button,
    FooterText
} = WeUI

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
    }

    handleCancel(){
        // console.log('testforthat')
        this.props.changeSearch('', 'clearsearch')
    }

    render(){
        var latestQuestionWidget
        if(this.props.searchUI.showLatestQuestion){
            latestQuestionWidget = <QuestionList title="最近解决"/>
        }

        var searchResult
        if(this.props.searchUI.showSearchResult){
            searchResult = <QuestionList title="搜索结果" pidArr={[]}><PanelFooter className="tcenter tb_padding">
                <FooterText>没有解决问题?</FooterText>
                <div className="button-sp-area">
                <Button type="primary" plain size="small" component={Link} to={"/ask/add"}>联系我的车管家</Button>
                </div>
                <FooterText>车管家8:00-20:00&nbsp;12小时在线哟</FooterText>
            </PanelFooter></QuestionList>
        }

        var hotSearchWidget
        if(this.props.searchUI.showHotSearchOption){
            hotSearchWidget = <HotSearch/>
        }

        var chooseCarClassUI
        if(this.props.searchUI.showChooseCarClass){
            chooseCarClassUI = <ChooseCar/>
        }

        return <Page spacing={true} className={'ask_page'}>
            <SearchBar
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />

            {hotSearchWidget}

            {searchResult}

            {latestQuestionWidget}

            {chooseCarClassUI}
        </Page>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskEntrance)
