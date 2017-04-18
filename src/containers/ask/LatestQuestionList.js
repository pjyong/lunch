import { connect } from 'react-redux'
import QuestionList from '../../components/ask/LatestQuestionList'
import {changeSearch} from '../../actions/ask'


export const getQuestionList = (questionList, pidArr, solvedList) => {
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

const mapDispatchToProps = {
    changeSearch
}

const CLatestQuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList)

export default CLatestQuestionList
