import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import WeUI from 'react-weui'
const {CellsTitle,Form,FormCell,CellBody,TextArea,Input,ButtonArea,Button,Footer,FooterLinks,FooterLink,Msg} = WeUI
import {changeToast} from '../actions/index'
import {submitQuestion} from '../actions/ask'

import $ from 'jquery'


const mapStateToProps = (state) => {
    return {
        text: state.searchUI.key,
        submitActionID: state.submitActionID
    }
}

const mapDispatchToProps = {
    changeToast,
    submitQuestion
}

class AskAdd extends React.Component {
    handleSubmit(){
        var title = $.trim($('.titleInput').val())
        var description = $.trim($('.descriptionInput').val())
        if( title === '' ){
            this.props.changeToast(true, '', '请填写标题')
            return false
        }
        this.props.submitQuestion(title, description)
    }

    render(){
        if(this.props.submitActionID > 0){
            return <Msg
            type="success"
            title="操作成功"
            description="我们会尽快回复您"
            buttons={[{
                type: 'primary',
                label: '查看我的提问',
                onClick: this.props.history.push('/ask/index')
            }, {
                type: 'default',
                label: '再试试搜索',
                onClick: this.props.history.push('/ask/entrance/search')
            }]}
        />
        }

        return <Page spacing={true} className={'ask_add_page'}>
        <CellsTitle>标题</CellsTitle>
        <Form>
            <FormCell>
                <CellBody>
                    <Input type="text" className="titleInput" placeholder="输入标题" defaultValue={this.props.text}/>
                </CellBody>
            </FormCell>
        </Form>
        <CellsTitle>问题描述(选填)</CellsTitle>
        <Form>
            <FormCell>
               <CellBody>
                   <TextArea className="descriptionInput" placeholder="更多补充" rows="3" maxlength="400"></TextArea>
               </CellBody>
            </FormCell>
        </Form>
       <ButtonArea>
            <Button onClick={this.handleSubmit.bind(this)}>提交</Button>
        </ButtonArea>
        <Footer>
            <FooterLinks>
                <FooterLink href="#">电话询问</FooterLink>
            </FooterLinks>
        </Footer>
        </Page>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AskAdd)
