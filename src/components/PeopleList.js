import React from 'react'
import WeUI from 'react-weui'
import People from './People'
const {Cells} = WeUI


const PeopleList = ({ peopleList, department, onEatClick }) => (
  <Cells>
    {peopleList.map(people =>
      <People
        key={people.id}
        {...people}
        onClick={() => onEatClick(people.id)}
      />
    )}
  </Cells>
)


export default PeopleList
