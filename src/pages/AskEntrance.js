import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import WeUI from 'react-weui'
import {
  Link
} from 'react-router-dom'
const {
    //main component
   SearchBar,
   //for display data
   Panel,
   PanelHeader,
   PanelBody,
   PanelFooter,
   MediaBox,
   MediaBoxHeader,
   MediaBoxBody,
   MediaBoxTitle,
   MediaBoxDescription,
   Cell,
    CellBody,
    CellFooter,
    FooterLinks,
    FooterLink,
    FooterText,
    Button
} = WeUI

class AskEntrance extends React.Component {
    state={
        searchText: '',
        results: []
    };

    handleChange(text, e){
        let keywords = [text]
        let results = 'fdsafas'
        this.setState({
            results,
            searchText:text,
        });
    }

    render(){
        return <Page spacing={true} className={'ask_page'}>
            <SearchBar
                    onChange={this.handleChange.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />

            <Panel style={{display: this.state.searchText ? null: 'none', marginTop: 0}}>
                <PanelHeader>搜索结果</PanelHeader>
                <PanelBody>
                    <MediaBox key={2} type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader><img src="fdafafasdfafasfas"/></MediaBoxHeader>
                        <MediaBoxBody>
                            <MediaBoxTitle>问题答案</MediaBoxTitle>
                            <MediaBoxDescription>
                                这个问题好好啊
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                </PanelBody>
                <PanelFooter className="tcenter tb_padding">
                    <FooterText>没有解决问题?</FooterText>
                    <div className="button-sp-area">
                    <Button type="primary" plain size="small" component={Link} to={"/ask/add"}>联系我的车管家</Button>
                    </div>
                    <FooterText>车管家8:00-20:00&nbsp;12小时在线哟</FooterText>
                </PanelFooter>
            </Panel>

            <Panel>
                    <PanelHeader>
                        最新提问
                    </PanelHeader>
                    <PanelBody>
                        <MediaBox type="appmsg" href="javascript:void(0);">
                            <MediaBoxBody>
                                <MediaBoxTitle>我的车子怎么不动了</MediaBoxTitle>
                                <MediaBoxDescription>
                                    我的车子怎么不动了我的车子怎么不动了我的车子怎么不动了我的车子怎么不动了我的车子怎么不动了
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                        </PanelBody>
                </Panel>

        </Page>
    }
}

export default connect()(AskEntrance)
