import React from 'react'
import WeUI from 'react-weui'
import { Link } from 'react-router-dom'
import {chunk} from '../../common/utils'

const {
   Panel,
   PanelHeader,
   PanelBody,
   PanelFooter,
   Button,
   FooterText,
   Flex,
   FlexItem
} = WeUI

class HotSearch extends React.Component {

    render(){
        // 子分类
        if(this.props.parentCategory > 0){
            return <Panel>
            <PanelBody className="hotSearchDivBody">
                <div className="hotSearchDivBodyInner">
                {this.props.categoryList.map((ele,id)=>
                    <Button key={id} component={Link} to={"/ask/entrance/search/"+ele.Title+' '} type="default" plain size="small">{ele.Title}</Button>
                )}
                </div>
            </PanelBody></Panel>
        }
        // 顶级分类
        var topListArr = chunk(this.props.categoryList,3)
        return <Panel>
                <PanelHeader>
                    搜索指定内容
                </PanelHeader>
                <PanelBody className="hotSearchDivBody">
                {topListArr.map((tmpArr,index)=>
                    <Flex key={index}>
                    {tmpArr.map((ele,id)=>
                        <FlexItem key={id} onClick={this.props.handleClickCategory.bind(this,ele['ID'])}>
                            <div className="placeholder">{ele.Title}</div>
                        </FlexItem>
                    )}
                    </Flex>
                )}
                </PanelBody>

                <PanelFooter className="tcenter tb_padding">
                    <FooterText>与您一样的车主问些什么?</FooterText>
                    <div className="button-sp-area">
                    <Button type="primary" plain size="small" onClick={this.props.handleClickChooseCar}>按车型查看</Button>
                    </div>
                </PanelFooter>
        </Panel>
    }
}

export default HotSearch
