import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import WeUI from 'react-weui'
import {
  Link
} from 'react-router-dom'
const {Cell,Cells,CellBody,CellFooter} = WeUI

class Ask extends React.Component {

    render(){
        return <Page spacing={true} className={'ask_page'}>
            <Cells>
                <Cell component={Link} to={"/ask/entrance"} access>
                    <CellBody>车咨询</CellBody>
                    <CellFooter>有什么问题找我</CellFooter>
                </Cell>
            </Cells>
        </Page>
    }
}

export default connect()(Ask)
