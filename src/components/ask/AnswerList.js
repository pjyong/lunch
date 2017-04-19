import React from 'react'
import WeUI from 'react-weui'
const {Panel,PanelHeader,PanelBody,MediaBox,
MediaBoxDescription,MediaBoxInfo,MediaBoxInfoMeta,LoadMore} = WeUI

const AnswerList = ({ fetching, dataList }) => {
    if(fetching){
        return (<LoadMore loading>正在加载...</LoadMore>)
    }
    return <Panel>
          <PanelHeader>
              所有回答
          </PanelHeader>
          <PanelBody>
          {dataList.map(answer =>
              <MediaBox key={answer.ID} type="text">
                  <MediaBoxDescription>
                      {answer.Content}
                  </MediaBoxDescription>
                  <MediaBoxInfo>
                          <MediaBoxInfoMeta>车友网</MediaBoxInfoMeta>
                          <MediaBoxInfoMeta>{answer.CreateTime}</MediaBoxInfoMeta>
                  </MediaBoxInfo>
              </MediaBox>
          )}
          </PanelBody>
      </Panel>
}

export default AnswerList
