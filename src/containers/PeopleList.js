import { connect } from 'react-redux'
import { toggleEat } from '../actions'
import PeopleList from '../components/PeopleList'

export const getPeopleByPid = (peopleList, id) => {
    return peopleList.find((value, index, arr)=>{return value.id===id})
}

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
