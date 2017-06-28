import { connect } from 'react-redux'
import SearchResult from '../../components/ask/SearchResult'
import {changeSearch,searchAllQuestions} from '../../actions/ask'
import {getDataListFromIDs} from 'common/utils'


const mapStateToProps = (state, ownProps) => {
    return {
        questionList: getDataListFromIDs(state.questionList, state.searchQuestionList),
        searchQuestionList: state.searchQuestionList,
        text: state.searchUI.key
    }
}

const mapDispatchToProps = {
    changeSearch,
    searchAllQuestions
}

const CSearchResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult)

export default CSearchResult
