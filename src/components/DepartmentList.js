import React from 'react'
import Department from '../containers/Department'

const DepartmentList = ({ departmentList }) => (
  <ul>
  {departmentList.map(department =>
      <li key={department.id}>
      <Department

        {...department}
      />
      </li>
    )}
  </ul>
)

export default DepartmentList
