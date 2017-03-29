import React from 'react'
import People from './People'

const PeopleList = ({ peopleList, department, onEatClick }) => (
  <div className="weui_cells weui_cells_checkbox c_m_all_0">
    {peopleList.map(people =>
      <People
        key={people.id}
        {...people}
        onClick={() => onEatClick(people.id)}
      />
    )}
  </div>
)


export default PeopleList
