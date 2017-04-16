import { connect } from 'react-redux'
import QuestionList from '../../components/ask/QuestionList'

const getQuestionList = (questionList, pidArr, solvedList) => {
    if(typeof pidArr === 'undefined'){
        pidArr = solvedList
    }
    var newList = []
    pidArr.map(pid => {
        newList.push(questionList.byId[pid])
        return pid
    })
    return newList
}

const mapStateToProps = (state, ownProps) => ({
    questionList: getQuestionList(state.questionList, ownProps.pidArr, state.latestSolvedList),
})

const CQuestionList = connect(
  mapStateToProps
)(QuestionList)

export default CQuestionList
