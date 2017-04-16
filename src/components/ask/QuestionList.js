import React from 'react'
import Question from './Question'

import WeUI from 'react-weui'
const {
    //main component
   //for display data
   Panel,
   PanelHeader,
   PanelBody,
} = WeUI

class QuestionList extends React.Component {
    render(){
        return <Panel>
                <PanelHeader>
                    {this.props.title}
                </PanelHeader>
                <PanelBody>
              {this.props.questionList.map(question =>
                  <Question key={question.ID}
                    {...question}
                  />
                )}
                </PanelBody>
                {this.props.children}
      </Panel>
    }
}
export default QuestionList
