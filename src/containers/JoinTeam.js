import { connect } from 'react-redux'
import JoinTeam from '../components/JoinTeam'
import {getPeopleByPid} from './PeopleList'
import {addPeople} from '../actions/index'


const mapStateToProps = (state) => {
    return {
        ...getPeopleByPid(state.peopleList, state.uid),
        departmentList: state.departmentList
    }
}

const mapDispatchToProps = {
    onConfirm: addPeople
}

const CJoinTeam = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinTeam)

export default CJoinTeam
