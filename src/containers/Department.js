import { connect } from 'react-redux'
import Department from '../components/Department'

const calculateEatNum = (peopleList, id) => {
    let eatPeopleList = peopleList.filter(people => ( people.department === id && people.eat ))
    if(typeof eatPeopleList === 'undefined'){
        return 0
    }
    return eatPeopleList.length
}

const calculateAllNum = (peopleList, id) => {
    let allPeopleList = peopleList.filter(people => ( people.department === id ))
    if(typeof allPeopleList === 'undefined'){
        return 0
    }
    return allPeopleList.length
}

const mapStateToProps = (state, ownProps) => ({
    num: calculateEatNum(state.peopleList, ownProps.id),
    allNum: calculateAllNum(state.peopleList, ownProps.id),
})

const CDepartment = connect(
  mapStateToProps
)(Department)

export default CDepartment
