import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = (state) => ({
    isPageLoading: state.isPageLoading
})

const CPage = connect(
  mapStateToProps
)(Page)

export default CPage
