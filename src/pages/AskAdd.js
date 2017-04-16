import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import WeUI from 'react-weui'
const {CellsTitle,Form,FormCell,CellBody,TextArea,Input,ButtonArea,Button,Footer,FooterLinks,FooterLink} = WeUI

class AskAdd extends React.Component {

    render(){
        return <Page spacing={true} className={'ask_add_page'}>
        <CellsTitle>标题</CellsTitle>
        <Form>
            <FormCell>
                <CellBody>
                    <Input type="text" placeholder="输入标题"/>
                </CellBody>
            </FormCell>
        </Form>
        <CellsTitle>问题描述(选填)</CellsTitle>
        <Form>
            <FormCell>
               <CellBody>
                   <TextArea placeholder="更多内容" rows="3" maxlength="400"></TextArea>
               </CellBody>
            </FormCell>
        </Form>
       <ButtonArea>
            <Button>提交</Button>
        </ButtonArea>
        <Footer>
            <FooterLinks>
                <FooterLink href="#">电话询问</FooterLink>
            </FooterLinks>
        </Footer>
        </Page>
    }
}

export default connect()(AskAdd)
