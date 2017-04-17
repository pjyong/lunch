import { connect } from 'react-redux'
import HotSearch from '../../components/ask/HotSearch'
import {changeSearch} from '../../actions/ask'


const mapStateToProps = (state) => {

    return {

    }
}

const mapDispatchToProps = {
    changeSearch
}

const CHotSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotSearch)

export default CHotSearch
