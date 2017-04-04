import { connect } from 'react-redux'
import Department from '../components/Department'

const calculateEatNum = (peopleList, id) => {
    let eatPeopleList = peopleList.filter(people => ( people.department === id && people.eat ))
    if(typeof eatPeopleList === 'undefined'){
        return 0
    }
    return eatPeopleList.length
}

const mapStateToProps = (state, ownProps) => ({
    num: calculateEatNum(state.peopleList, ownProps.id)
})

const CDepartment = connect(
  mapStateToProps
)(Department)

export default CDepartment
