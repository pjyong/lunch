import React from 'react'
import WeUI from 'react-weui'
const {
    Cells,
    Cell,
    CellsTitle,
    LoadMore
} = WeUI
import $ from 'jquery'

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
        var currentBrandID = props.match.params.brandid
        super(props)
        this.state = {
            isSectionFetching: true,
            currentBrandID
        }
        var carClassList = getAllCarClassesByBrandID(currentBrandID, props.carClassList.byId)
        if(carClassList.length === 0){
            $.when(props.fetchAllCarClasses(currentBrandID),props.fetchAllBrands()).then(function(){
                this.setState({isSectionFetching: false})
            }.bind(this))
        }
    }

    componentWillMount(){
        this.props.changeSearch('', 'choosecarclass')
    }

    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
        var carList = getAllCarClassesByBrandID(this.state.currentBrandID, this.props.carClassList.byId)
        return (<div><CellsTitle>{this.props.brandList.byId[this.state.currentBrandID].Title}</CellsTitle><Cells>{carList.map(car=>
            <Cell key={car.ID}>{car.Title}</Cell>
        )}</Cells></div>)
    }
}

export default ChooseCarClass
