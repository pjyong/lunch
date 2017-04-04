import React from 'react'
import WeUI from 'react-weui'
import PeopleList from '../containers/PeopleList'
import Accordion from './Accordion'
const {Flex,FlexItem} = WeUI

const Department = ({ id,name,num }) => {
    return (
        <Accordion header={
            <Flex className="lunch_flex">
                <FlexItem component='p'>
                    {name}
                </FlexItem>
                <span className="departmentNum">{num}</span>
            </Flex>
        }>
          <PeopleList department={id}>
          </PeopleList>
        </Accordion>
    )
}

export default Department
