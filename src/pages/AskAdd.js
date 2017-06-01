import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import WeUI from 'react-weui'
import {changeToast} from '../actions/index'
import {submitQuestion} from '../actions/ask'
import $ from 'jquery'

const {CellsTitle,Form,FormCell,CellBody,TextArea,Input,ButtonArea,Button,Footer,FooterLinks,FooterLink,Msg} = WeUI

const mapStateToProps = (state) => {
    return {
        text: state.searchUI.key,
    }
}

const mapDispatchToProps = {
    changeToast,
    submitQuestion
}

class AskAdd extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            newID: 0,
        }
    }

    handleSubmit(){
        var title = $.trim($('.titleInput').val())
        var description = $.trim($('.descriptionInput').val())
        if( title === '' ){
            this.props.changeToast(true, '', '请填写标题')
            return false
        }
        this.props.submitQuestion(title, description).then(
            json => {
                this.setState({newID: json.id})
            }
        )
        /*

        */
    }

    goSearch(){
        this.props.history.push('/ask/entrance/search')
    }

    goQuestion(){
        this.props.history.push('/ask/question/'+this.state.newID)
    }

    render(){
        if(this.state.newID > 0){
            return <Msg
            type="success"
            title="操作成功"
            description="我们会尽快回复您"
            buttons={[{
                type: 'primary',
                label: '查看我的提问',
                onClick: this.goQuestion.bind(this)
            }, {
                type: 'default',
                label: '再试试搜索',
                onClick: this.goSearch.bind(this)
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
