import React from 'react'
import WeUI from 'react-weui'
const {Cell, CellBody, CellFooter, Icon} = WeUI


const People = ({ eat, name }) => {
    var checked = ''
    if(eat){
        checked = <Icon value="success-no-circle" />
    }
    return (
  <Cell>
    <CellBody>{name}</CellBody>
    <CellFooter>
        {checked}
    </CellFooter>
  </Cell>
    )
}

export default People
