import { connect } from 'react-redux'
import HotSearch from '../../components/ask/HotSearch'
import {changeSearch} from '../../actions/ask'

const getCates = (pid, categoryList) => {
    return categoryList.allIds.filter((value, index, arr)=>{
        return categoryList.byId[value].ParentID===pid
    })
}



const mapStateToProps = (state) => {
    // console.error()
    return {
        categoryList: state.categoryList,
        topList: getCates(0,state.categoryList)
    }
}

const mapDispatchToProps = {
    changeSearch
}

const CHotSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(HotSearch)

export default CHotSearch
