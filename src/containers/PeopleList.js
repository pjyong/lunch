import { connect } from 'react-redux'
import { toggleEat } from '../actions'
import PeopleList from '../components/PeopleList'

const getPeopleList = (peopleList, id) => {
    return peopleList.filter(people => people.department === id)
}

const mapStateToProps = (state, ownProps) => ({
    peopleList: getPeopleList(state.peopleList,ownProps.department)
})

const mapDispatchToProps = {
  onEatClick: toggleEat
}

const CPeopleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList)

export default CPeopleList
