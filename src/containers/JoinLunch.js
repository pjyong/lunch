import { connect } from 'react-redux'
import JoinLunch from '../components/JoinLunch'
import {getPeopleByPid} from './PeopleList'
import {toggleEat} from '../actions/index'

const mapStateToProps = (state) => {
    let currentUser = getPeopleByPid(state.peopleList, state.uid)
    let eat = false
    if( typeof currentUser !== 'undefined' ){
        eat = currentUser.eat
    }
    return {
        eat: eat,
        uid: state.uid
    }
}

const mapDispatchToProps = {
    onEatClick: toggleEat
}

const CJoinLunch = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinLunch)

export default CJoinLunch
