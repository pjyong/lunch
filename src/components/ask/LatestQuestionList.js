import React from 'react'
import QuestionList from './QuestionList'

class LatestQuestionList extends React.Component {
    render(){
        return <QuestionList title="最近解决" questionList={this.props.questionList}/>
    }
}
export default LatestQuestionList
