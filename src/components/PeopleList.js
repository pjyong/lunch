import React from 'react'
import People from './People'

const PrePeopleList = ({ peopleList, department, onEatClick }) => (
  <ul>
    {peopleList.map(people =>
      <People
        key={people.id}
        {...people}
        onClick={() => onEatClick(people.id)}
      />
    )}
  </ul>
)


export default PrePeopleList
