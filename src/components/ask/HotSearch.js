import React from 'react'
import { connect } from 'react-redux'

import WeUI from 'react-weui'
const {
    //main component
   //for display data
   Panel,
   PanelHeader,
   PanelBody,
   PanelFooter,
   Button,
   Link,
   FooterText,
   Flex,
   FlexItem
} = WeUI
import {changeSearch} from '../../actions/ask'


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
    changeSearch
}


class HotSearch extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showChildCategory: false,
        }
    }

    handleClickCategory(){
        this.setState({showChildCategory: true})
    }

    handleClickChooseCar(){
        this.props.changeSearch('', 'choosecarclass')
    }

    render(){

        if(this.state.showChildCategory){
            return <Panel>
            <PanelBody className="hotSearchDivBody">
            <div className="hotSearchDivBodyInner">
            <Button type="default" plain size="small">使用</Button>
            <Button type="default" plain size="small">维修</Button>
            <Button type="default" plain size="small">保养</Button>
            <Button type="default" plain size="small">美容</Button>
            <Button type="default" plain size="small">装饰</Button>
            </div>
            </PanelBody></Panel>
        }
        return <Panel>
                <PanelHeader>
                    搜索指定内容
                </PanelHeader>

                <PanelBody className="hotSearchDivBody"><Flex>
                <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">选车购车</div>
                </FlexItem>
                <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">二手车</div>
                </FlexItem>
                <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">用车养车</div>
                </FlexItem>
            </Flex>
            <Flex>
            <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">费用</div>
                </FlexItem>
                <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">知识技巧</div>
                </FlexItem>
                <FlexItem onClick={this.handleClickCategory.bind(this)}>
                    <div className="placeholder">其他</div>
                </FlexItem>
            </Flex></PanelBody>

                <PanelFooter className="tcenter tb_padding">
                <FooterText>与您一样的车主问些什么?</FooterText>
                <div className="button-sp-area">
                <Button type="primary" plain size="small" onClick={this.handleClickChooseCar.bind(this)}>按车型查看</Button>
                </div>
                </PanelFooter>
      </Panel>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotSearch)
