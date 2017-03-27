import { connect } from 'react-redux'
import { toggleEat } from '../actions'
import PrePeopleList from '../components/PeopleList'

const mapStateToProps = (state) => ({
    peopleList: state.peopleList,
    department: state.department,
})

const mapDispatchToProps = {
  onEatClick: toggleEat
}

const PeopleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrePeopleList)

export default PeopleList
