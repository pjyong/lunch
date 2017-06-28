import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import HotSearch from 'containers/ask/HotSearch'
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
import SearchResult from 'components/ask/SearchResult'
import {changeSearch,searchAllQuestions} from 'actions/ask'
import {getDataListFromIDs} from 'common/utils'

const mapStateToProps = (state, ownProps) => {
    return {
      questionList: getDataListFromIDs(state.questionList, state.searchQuestionList),
      searchQuestionList: state.searchQuestionList,
      text: ownProps.location.match.key
    }
}

const mapDispatchToProps = {
    startPageFetching,
    finishPageFetching,
    changeSearch,
    searchAllQuestions
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

    render(){
        return <Page spacing={true} className={''}>
            <SearchBar text={this.props.key} />
            <SearchResult />
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
