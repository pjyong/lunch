import React from 'react'
import Department from './Department'

const DepartmentList = ({ departmentList }) => (
  <div>
    {departmentList.map(department =>
      <Department
        key={department.id}
        {...department}
      />
    )}
  </div>
)

export default DepartmentList
