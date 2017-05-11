import { connect } from 'react-redux'
import Page from '../components/Page'

const mapStateToProps = (state) => ({
    toast: state.toast,
})

const CPage = connect(
  mapStateToProps
)(Page)

export default CPage
