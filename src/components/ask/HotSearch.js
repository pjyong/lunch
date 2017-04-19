import React from 'react'

import WeUI from 'react-weui'
const {
    //main component
   //for display data
   Panel,
   PanelHeader,
   PanelBody,
   PanelFooter,
   Button,
   FooterText,
   Flex,
   FlexItem
} = WeUI
import {
  Link
} from 'react-router-dom'


const getCates = (pid, categoryList) => {
    return categoryList.allIds.filter((value, index, arr)=>{
        return categoryList.byId[value].ParentID===pid
    })
}

class HotSearch extends React.Component {



    componentDidMount(){
        this.props.changeSearch('')
    }


    constructor(props){
        super(props)
        this.state = {
            parentCategory: 0,
        }
    }

    handleClickCategory(id){
        this.setState({parentCategory: id})
    }

    handleClickChooseCar(){
        this.props.history.push('/ask/entrance/choosecar')
    }

    loadSeperator(index){
        if((index+1)%3 === 0){
            return true
        }
        return false
    }

    // 将一个数组划成三个三个的二维数组
    chunk (arr, len) {

          var chunks = [],
              i = 0,
              n = arr.length;

          while (i < n) {
            chunks.push(arr.slice(i, i += len));
          }

          return chunks;
        }



    render(){
        if(this.state.parentCategory > 0){
            var childCates = getCates(this.state.parentCategory, this.props.categoryList)
            console.log(this.state.parentCategory)
            return <Panel>

            <PanelBody className="hotSearchDivBody">
            <div className="hotSearchDivBodyInner">
            {childCates.map(id=>
                <Button key={id} component={Link} to={"/ask/entrance/search/"+this.props.categoryList.byId[id].Title+' '} type="default" plain size="small">{this.props.categoryList.byId[id].Title}</Button>
            )}


            </div>
            </PanelBody></Panel>
        }
        var topListArr = this.chunk(this.props.topList,3)
        return <Panel>
                <PanelHeader>
                    搜索指定内容
                </PanelHeader>
                <PanelBody className="hotSearchDivBody">
                {topListArr.map((tmpArr,index)=>
                    <Flex key={index}>
                    {tmpArr.map(id=>
                        <FlexItem key={id} onClick={this.handleClickCategory.bind(this,id)}>
                                <div className="placeholder">{this.props.categoryList.byId[id].Title}</div>
                            </FlexItem>
                    )}

                    </Flex>

                )}
                </PanelBody>

                <PanelFooter className="tcenter tb_padding">
                <FooterText>与您一样的车主问些什么?</FooterText>
                <div className="button-sp-area">
                <Button type="primary" plain size="small" onClick={this.handleClickChooseCar.bind(this)}>按车型查看</Button>
                </div>
                </PanelFooter>
      </Panel>
    }
}

export default HotSearch
