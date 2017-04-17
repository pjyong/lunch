import React from 'react'

import WeUI from 'react-weui'
const {
   PanelFooter,
    Button,
    FooterText,
    Link
} = WeUI
import QuestionList from '../../containers/ask/LatestQuestionList'

class HotSearch extends React.Component {

    componentWillMount(){
        this.props.changeSearch(this.props.match.params.key)
    }

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
        return <QuestionList title="搜索结果" pidArr={[]}><PanelFooter className="tcenter tb_padding">
            <FooterText>没有解决问题?</FooterText>
            <div className="button-sp-area">
            <Button type="primary" plain size="small" component={Link} to={"/ask/add"}>联系我的车管家</Button>
            </div>
            <FooterText>车管家8:00-20:00&nbsp;12小时在线哟</FooterText>
        </PanelFooter></QuestionList>
    }
}

export default HotSearch
