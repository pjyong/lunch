import { connect } from 'react-redux'
import SearchResult from '../../components/ask/SearchResult'
import {changeSearch} from '../../actions/ask'


const mapStateToProps = (state) => {

    return {

    }
}

const mapDispatchToProps = {
    changeSearch
}

const CSearchResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult)

export default CSearchResult
