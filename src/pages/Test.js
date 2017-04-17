import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {

    render(){
        return <div>
            this is test section
        </div>
    }
}

export default connect()(Test)
