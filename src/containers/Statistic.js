import { connect } from 'react-redux'
import Statistic from '../components/Statistic'

const calculateEatNum = (peopleList) => {
    let eatPeopleList = peopleList.filter(people => ( people.eat && people.department !== 0) )
    if(typeof eatPeopleList === 'undefined'){
        return 0
    }
    return eatPeopleList.length
}

const calculateTotalNum = (peopleList) => {
    let okPeopleList = peopleList.filter(people => people.department !== 0 )
    if(typeof okPeopleList === 'undefined'){
        return 0
    }
    return okPeopleList.length
}

const mapStateToProps = (state) => ({
    eatNum: calculateEatNum(state.peopleList),
    totalNum: calculateTotalNum(state.peopleList)
})

const CStatistic = connect(
  mapStateToProps
)(Statistic)

export default CStatistic
