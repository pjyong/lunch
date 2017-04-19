import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import AnswerList from '../containers/ask/AnswerList'
import WeUI from 'react-weui'
const {Panel,PanelBody,MediaBox,MediaBoxTitle,
MediaBoxDescription,MediaBoxInfo,MediaBoxInfoMeta} = WeUI
import {finishPageFetching} from '../actions/index'
import {fetchQuestion} from '../actions/ask'
import $ from 'jquery'

const mapStateToProps = (state, ownProps) => {
    var pid = parseInt(ownProps.match.params.id,10);
    return {
        isPageFetching: state.isPageFetching,
        questionID: pid,
        questionDetail: state.questionList.byId[pid]
    }
}

const mapDispatchToProps = {
    finishPageFetching,
    fetchQuestion
}

class QuestionDetail extends React.Component {

    componentDidMount(){
        if( typeof this.props.questionDetail !== 'undefined'){ return }
        $.when(this.props.fetchQuestion(this.props.questionID)).then(this.props.finishPageFetching)
    }

    render(){
        console.log(this.props)
        if(this.props.isPageFetching){
            return <div></div>
        }
        return <Page className={'question_page'}>
            <Panel>

                <PanelBody>
                    <MediaBox type="text">
                        <MediaBoxTitle>{this.props.questionDetail.Title}<div>问题补充：</div></MediaBoxTitle>
                        <MediaBoxDescription>
                            {this.props.questionDetail.Content}
                        </MediaBoxDescription>
                        <MediaBoxInfo>
                                <MediaBoxInfoMeta>车友网</MediaBoxInfoMeta>
                                <MediaBoxInfoMeta>{this.props.questionDetail.CreateTime}</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </MediaBox>
                </PanelBody>
            </Panel>

            <AnswerList qid={this.props.questionID} />
        </Page>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail)
