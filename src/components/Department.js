import React from 'react'
import PeopleList from '../containers/PeopleList'

const Department = ({ id,name }) => {
    return (
        <div>
          <div className="weui_cells_title">
            {name}
          </div>
          <PeopleList department={id}>
          </PeopleList>
        </div>
    )
}

export default Department
