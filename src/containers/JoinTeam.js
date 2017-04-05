import { connect } from 'react-redux'
import JoinTeam from '../components/JoinTeam'
import {getPeopleByPid} from './PeopleList'
import {addPeople,changeToast} from '../actions/index'


const mapStateToProps = (state) => {
    return {
        ...getPeopleByPid(state.peopleList, state.uid),
        departmentList: state.departmentList,
        showInfoModal: state.showInfoModal
    }
}

const mapDispatchToProps = {
    onConfirm: addPeople,
    changeToast
}

const CJoinTeam = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinTeam)

export default CJoinTeam
