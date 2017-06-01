import React from 'react'
import WeUI from 'react-weui'
import {
  withRouter
} from 'react-router-dom'
const {MediaBox,MediaBoxBody,MediaBoxTitle,MediaBoxDescription,MediaBoxInfoMeta,MediaBoxInfo} = WeUI

class Question extends React.Component {
    handleClick(){
        this.props.history.push('/ask/question/'+this.props.ID)
    }

    render(){
        return (
            <MediaBox type="text" className="questionDiv" onClick={this.handleClick.bind(this)}>
                <MediaBoxBody>
                    <MediaBoxTitle>{this.props.Title}</MediaBoxTitle>
                    <MediaBoxDescription>
                        {this.props.AnswerContent}
                    </MediaBoxDescription>
                    <MediaBoxInfo>
                        <MediaBoxInfoMeta>车友保养</MediaBoxInfoMeta>
                        <MediaBoxInfoMeta>{this.props.CreateTime}</MediaBoxInfoMeta>
                    </MediaBoxInfo>
                </MediaBoxBody>
            </MediaBox>
        )
    }
}

export default withRouter(Question)
