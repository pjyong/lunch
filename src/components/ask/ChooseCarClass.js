import React from 'react'
import WeUI from 'react-weui'
const {
    Cells,
    Cell,
    CellsTitle,
    LoadMore
} = WeUI
import $ from 'jquery'
import {
  Link
} from 'react-router-dom'

const getAllCarClassesByBrandID = (brandID, dataList) => {
    var newList = []
    for(var i in dataList){
        if(dataList[i].BrandID === brandID){
            newList.push(dataList[i])
        }
    }
    return newList
}

class ChooseCarClass extends React.Component {
    constructor(props){
        super(props)
        var currentBrandID = parseInt(props.match.params.brandid, 10)
        this.state = {
            isSectionFetching: true,
            currentBrandID
        }
    }

    componentDidMount(){
        this.getData()
        this.props.changeSearch(null)
    }

    getData(){
        var currentBrandID = this.state.currentBrandID
        var carClassList = getAllCarClassesByBrandID(currentBrandID, this.props.carClassList.byId)
        if(carClassList.length === 0){
            this.setState({isSectionFetching: true})
            $.when(this.props.fetchAllCarClasses(currentBrandID),this.props.fetchAllBrands()).then(function(){
                this.setState({isSectionFetching: false})
            }.bind(this))
        }else{
            this.setState({isSectionFetching: false})
        }
    }

    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
        var carList = getAllCarClassesByBrandID(this.state.currentBrandID, this.props.carClassList.byId)
        return (<div><CellsTitle>{this.props.brandList.byId[this.state.currentBrandID].Title}</CellsTitle><Cells>{carList.map(car=>
            <Cell key={car.ID} component={Link} to={"/ask/entrance/search/"+car.Title+' '} access>{car.Title}</Cell>
        )}</Cells></div>)
    }
}

export default ChooseCarClass
