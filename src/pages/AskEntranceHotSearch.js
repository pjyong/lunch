import React from 'react'
import { connect } from 'react-redux'
import Page from 'containers/common/Page'
import HotSearch from 'containers/ask/HotSearch'
import SearchResult from 'containers/ask/SearchResult'
import ChooseCar from 'containers/ask/ChooseCar'
import ChooseCarClass from 'containers/ask/ChooseCarClass'
import { Route } from 'react-router-dom'
import SearchBar from 'components/common/SearchBar'
import {fetchAllCategories} from 'actions/ask'
import {startPageFetching,finishPageFetching} from 'actions/index'

import $ from 'jquery'
import {
  withRouter
} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = {
    fetchAllCategories,
    startPageFetching,
    finishPageFetching,
}

class AskEntranceHotSearch extends React.Component {

    constructor(props) {
        super(props)
        props.startPageFetching()
        $.when(
            props.fetchAllCategories()
        ).then(props.finishPageFetching)
    }

    render(){
        return <Page spacing={true} className={''}>
            <SearchBar text={''} />
            <HotSearch />
        </Page>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AskEntranceHotSearch))
