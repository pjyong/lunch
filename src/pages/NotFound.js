import React from 'react'
import { connect } from 'react-redux'
import Page from '../containers/common/Page'

class NotFound extends React.Component {

    render(){
        return <Page spacing={true} className={'not_found_page'}>
            404
        </Page>
    }
}

export default connect()(NotFound)
