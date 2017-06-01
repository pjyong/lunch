import { connect } from 'react-redux'
import React from 'react'
import HotSearch from '../../components/ask/HotSearch'
import {changeSearch} from '../../actions/ask'
import {getCates} from '../../common/utils'

const mapStateToProps = (state) => {
    return {
        categoryList: state.categoryList,
    }
}

const mapDispatchToProps = {
    changeSearch
}

class CHotSearch extends React.Component {
    constructor(props){
        super(props)
        // 初始化
        return
        this.state = {
            parentCategory: 0,
            partialCategoryList: getCates(0, props.categoryList)
        }
    }

    // 跳转到选择汽车
    handleClickChooseCar(){
        this.props.history.push('/ask/entrance/choosecar')
    }

    // 加载其下子分类
    handleClickCategory(id){
        this.setState({
            parentCategory: id,
            partialCategoryList: getCates(id, this.props.categoryList),
        })
    }

    //
    componentDidMount(){
        this.props.changeSearch('')
    }

    render(){

        return <HotSearch
            parentCategory={this.state.parentCategory}
            categoryList={this.state.partialCategoryList}
            handleClickChooseCar={this.handleClickChooseCar.bind(this)}
            handleClickCategory={this.handleClickCategory.bind(this)} />
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CHotSearch)
