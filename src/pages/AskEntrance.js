import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import SearchBar from 'components/common/SearchBar'
import {fetchLatestSolvedQuestions} from 'actions/ask'
import {startPageFetching,finishPageFetching} from 'actions/index'
import BaseAsk from 'pages/common/BaseAsk'
import QuestionList from 'components/ask/QuestionList'
import $ from 'jquery'
import {getDataListFromIDs} from 'common/utils'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        questionList: getDataListFromIDs(state.latestSolvedList, state.questionList.byId),
    }
}

const mapDispatchToProps = {
    fetchLatestSolvedQuestions,
    startPageFetching,
    finishPageFetching,
}

class AskEntrance extends React.Component {

    constructor(props) {
      console.error('fuck')
        super(props)
        props.startPageFetching()
        $.when(
            props.fetchLatestSolvedQuestions(),
        ).then(props.finishPageFetching)
    }

    render(){
        return <Page spacing={true} className={''}>
            <SearchBar text={null}/>
            <QuestionList title="最新提问" questionList={this.props.questionList}/>
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntrance))
