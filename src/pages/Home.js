import React from 'react'
import DepartmentList from '../containers/DepartmentList'
import JoinLunch from '../containers/JoinLunch'
import Statistic from '../containers/Statistic'
import JoinTeam from '../containers/JoinTeam'
import Page from '../components/Page'


const Home = () => (
    <Page spacing={true} className={'home_page'}>
        <JoinLunch />
        <Statistic />
        <DepartmentList />
        <JoinTeam />
    </Page>
)

export default Home
