import React from 'react'
import WeUI from 'react-weui'
const {
    Cells,
    Cell,
    CellBody,
    CellsTitle,
    LoadMore
} = WeUI
import $ from 'jquery'

class ChooseCar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSectionFetching: true,
        }
        if(props.brandList.allIds.length === 0){
            $.when(props.fetchAllBrands()).then(function(){
                this.setState({isSectionFetching: false})
            }.bind(this))
        }
    }

    componentWillMount(){
        this.props.changeSearch('', 'choosecarclass')
    }

    handleClickBrand(id){
        this.props.history.push('/ask/entrance/choosecar/'+id)
        /*
        this.setState({isSectionFetching: true,currentBrandID: id})
        $.when(this.props.fetchAllCarClasses(id)).then(this.endSectionFetching.bind(this))
        */
    }

    showBrandDetail(id, name){
        if(this.props.brandList.byId[id].Alpha === name){
            return <Cell key={id} onClick={this.handleClickBrand.bind(this, id)}><CellBody>{this.props.brandList.byId[id].Title}</CellBody></Cell>
        }
    }


    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
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
        /*
        var carList = getAllCarClassesByBrandID(this.state.currentBrandID, this.props.carClassList.byId)
        return (<div><CellsTitle>{this.props.brandList.byId[this.state.currentBrandID].Title}</CellsTitle><Cells>{carList.map(car=>
            <Cell key={car.ID}>{car.Title}</Cell>
        )}</Cells></div>)
        */
    }
}

export default ChooseCar
