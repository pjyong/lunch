import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/Page'
import WeUI from 'react-weui'
import {
  Link
} from 'react-router-dom'
const {Cell,Cells,CellBody,CellFooter,CellHeader} = WeUI

class Ask extends React.Component {

    render(){
        return <Page spacing={true} className={'ask_page'}>
            <Cells>
                <Cell key={1} component={Link} to={"/ask/entrance"} access>
                <CellHeader>
                    <img src="fdasfafafd.jpg" alt="" style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                    </CellHeader>
                    <CellBody>车咨询</CellBody>
                    <CellFooter>有什么问题找我</CellFooter>
                </Cell>
            </Cells>
        </Page>
    }
}

export default connect()(Ask)
