import React from 'react'
import { connect } from 'react-redux'
import AnswerList from '../../components/ask/AnswerList'
import {fetchAnswerList} from '../../actions/ask'
import $ from 'jquery'

// 通过问题ID获取答案ID
const getAnswerListByQID = (qid, answerList) => {
    var idArr = answerList.allIds.filter((value)=>answerList.byId[value].QID === qid)
    var newArr = []
    idArr.map(value=>newArr.push(answerList.byId[value]))
    return newArr
}

const mapStateToProps = (state, ownProps) => {
    return {
        answerList: getAnswerListByQID(ownProps.qid, state.answerList),
    }
}

const mapDispatchToProps = {
    fetchAnswerList
}

class CAnswerList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSectionFetching: true,
        }
    }

    componentDidMount(){
        $.when(this.props.fetchAnswerList(this.props.qid)).then(function(){
            this.setState({isSectionFetching: false})
        }.bind(this))
    }

    render(){
        return <AnswerList fetching={this.state.isSectionFetching} dataList={this.props.answerList} />
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CAnswerList)
