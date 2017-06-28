import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import SearchBar from 'components/common/SearchBar'
import {fetchLatestSolvedQuestions} from 'actions/ask'
import {startPageFetching,finishPageFetching} from 'actions/index'
import BaseAsk from 'pages/common/BaseAsk'
import QuestionList from 'components/ask/QuestionList'
import $ from 'jquery'

const mapStateToProps = (state, ownProps) => {
    return {
        questionList: getQuestionList(state.questionList, ownProps.pidArr, state.latestSolvedList),
    }
}

const mapDispatchToProps = {
    fetchLatestSolvedQuestions,
    fetchAllCategories,
    startPageFetching,
    finishPageFetching,
}

class AskEntranceChooseCar extends BaseAsk {

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
        return <Page spacing={true} className={'ask_page'}>
            <SearchBar />
            <QuestionList title="最新提问" questionList={this.props.questionList}/>
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntranceChooseCar))
