import React from 'react'
import WeUI from 'react-weui'
const {
    Cells,
    Cell,
    CellBody,
    CellsTitle,
    LoadMore,CellFooter,CellHeader
} = WeUI
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'

class ChooseCar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSectionFetching: true,
        }
    }

    componentDidMount(){
        this.props.changeSearch(null)
        this.getData()
    }

    getData(){
        if(this.props.brandList.allIds.length === 0){
            this.setState({isSectionFetching:true})
            $.when(this.props.fetchAllBrands()).then(function(){
                this.setState({isSectionFetching: false})
            }.bind(this))
        }else{
            this.setState({isSectionFetching:false})

        }
    }

    showBrandDetail(id, name){
        if(this.props.brandList.byId[id].Alpha === name){
            return <Cell key={id} component={Link} to={"/ask/entrance/choosecar/"+id} access>
            <CellHeader>
                    <img src={this.props.brandList.byId[id].Logo} alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
            </CellHeader>
            <CellBody>{this.props.brandList.byId[id].Title}</CellBody>
            <CellFooter></CellFooter>
            </Cell>
        }
    }


    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
        return (
            <div>
            {this.props.brandList.allNames.map((name,index)=>
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
