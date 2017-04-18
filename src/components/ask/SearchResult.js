import React from 'react'

import WeUI from 'react-weui'
const {
   PanelFooter,
    Button,
    FooterText,
    Link,
    LoadMore
} = WeUI
import QuestionList from './QuestionList'
import $ from 'jquery'


class HotSearch extends React.Component {

    componentDidMount(){
        this.triggerSearchKeyChanged()
    }

    componentDidUpdate(prevProps) {
        this.triggerSearchKeyChanged()
        // 默认这个是null
        if (this.props.text !== prevProps.text) {
            this.getData()
        }
    }

    // 如果url和state里面的不一样就改变state
    triggerSearchKeyChanged(){
        if(this.props.text !== this.props.match.params.key){
            this.props.changeSearch(this.props.match.params.key)
        }
    }

    constructor(props){
        super(props)
        this.state = {
            showChildCategory: false,
            isSectionFetching: false,
        }
    }

    getData(){
        if(this.props.searchQuestionList.length === 0 ){
            this.setState({isSectionFetching: true})
            $.when(this.props.searchAllQuestions(this.props.text)).then(function(){
                this.setState({isSectionFetching: false})
            }.bind(this))
        }
    }


    /*
    componentDidMount(){
        console.info('didmount')

    }
    componentWillReceiveProps(){
        console.info('receiveprops')
    }
    shouldComponentUpdate(){
        console.info('shouldupdate')
        return true
    }
    componentWillUpdate(){
        console.info('willupdate')
    }
    */



    handleClickChooseCar(){
        this.props.changeSearch('', 'choosecarclass')
    }

    render(){
        if(this.state.isSectionFetching){
            return (<LoadMore loading>正在加载...</LoadMore>)
        }
        return <QuestionList title="搜索结果" questionList={this.props.questionList}><PanelFooter className="tcenter tb_padding">
            <FooterText>没有解决问题?</FooterText>
            <div className="button-sp-area">
            <Button type="primary" plain size="small" component={Link} to={"/ask/add"}>联系我的车管家</Button>
            </div>
            <FooterText>车管家8:00-20:00&nbsp;12小时在线哟</FooterText>
        </PanelFooter></QuestionList>
    }
}

export default HotSearch
