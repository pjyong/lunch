import React from 'react'
import QuestionList from './QuestionList'

class LatestQuestionList extends React.Component {

    componentWillMount(){
        this.props.changeSearch(null)
    }

    render(){
        return <QuestionList title="最新提问" questionList={this.props.questionList}/>
    }
}
export default LatestQuestionList
