import React from 'react'
import WeUI from 'react-weui'
const {

    Cells,
    Cell,
    CellBody,
    CellFooter,
    CellsTitle,
    LoadMore
} = WeUI
import $ from 'jquery'

// 寻找指定品牌的车系
const getAllCarClassesByBrandID = (brandID, dataList) => {
    var newList = []
    for(var i in dataList){
        if(dataList[i].BrandID == brandID){
            newList.push(dataList[i])
        }
    }
    return newList
}

class ChooseCar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isSectionFetching: true,
            currentBrandID: 0
        }
        if(props.brandList.allIds.length === 0){
            $.when(props.fetchAllBrands()).then(this.endSectionFetching.bind(this))
        }
    }

    startSectionFetching(){
        this.setState({isSectionFetching: true})
    }

    endSectionFetching(){
        this.setState({isSectionFetching: false})
    }

    componentWillMount(){
        this.props.changeSearch('', 'choosecarclass')
    }

    fetchCarClassesByBrandID(id){
        this.startSectionFetching()
        this.setState({currentBrandID: id})
        $.when(this.props.fetchAllCarClasses(id)).then(this.endSectionFetching.bind(this))
    }

    showBrandDetail(id, name){
        if(this.props.brandList.byId[id].Alpha === name){
            return <Cell key={id} onClick={this.fetchCarClassesByBrandID.bind(this, id)}><CellBody>{this.props.brandList.byId[id].Title}</CellBody></Cell>
        }
    }


    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
        if(this.state.currentBrandID === 0){
            return (
                <div>
                {this.props.brandList.allNames.map(name=>
                    <div key={name}>
                    <CellsTitle>{name}</CellsTitle>
                    <Cells>
                    {this.props.brandList.allIds.map(id=>
                        this.showBrandDetail(id,name)
                    )}
                    </Cells>
                    </div>
                )}
                </div>
            )
        }
        var carList = getAllCarClassesByBrandID(this.state.currentBrandID, this.props.carClassList.byId)
        return (<div><CellsTitle>{this.props.brandList.byId[this.state.currentBrandID].Title}</CellsTitle><Cells>{carList.map(car=>
            <Cell key={car.ID}>{car.Title}</Cell>
        )}</Cells></div>)
    }
}

export default ChooseCar
