import { connect } from 'react-redux'
import DepartmentList from '../components/DepartmentList'

const mapStateToProps = (state) => ({
    departmentList: state.departmentList,
})

const CDepartmentList = connect(
  mapStateToProps
)(DepartmentList)

export default CDepartmentList
