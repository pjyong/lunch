import React from 'react'
import { connect } from 'react-redux'
import DepartmentList from '../containers/DepartmentList'
import JoinLunch from '../containers/JoinLunch'
import Statistic from '../containers/Statistic'
import JoinTeam from '../containers/JoinTeam'
import Page from '../containers/Page'
import {fetchDepartments,finishPageFetching,fetchPeople} from '../actions/index'
import $ from 'jquery'

const mapStateToProps = (state) => {
    return {
        isPageFetching: state.isPageFetching
    }
}

const mapDispatchToProps = {
    fetchDepartments,
    finishPageFetching,
    fetchPeople
}


class Home extends React.Component {
    constructor(props) {
        super(props)
        $.when(props.fetchDepartments(), props.fetchPeople()).then(props.finishPageFetching)
    }

    render(){
        if(this.props.isPageFetching){
            return <div></div>
        }
        return <Page spacing={true} className={'home_page'}>
            <JoinLunch />
            <Statistic />
            <DepartmentList />
            <JoinTeam />
        </Page>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
