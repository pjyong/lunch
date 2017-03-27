import React from 'react'

const People = ({ onClick, name }) => (
  <li
    onClick={onClick}
  >
    {name}
  </li>
)



export default People
