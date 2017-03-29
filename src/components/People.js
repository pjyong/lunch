import React from 'react'

const People = ({ eat, name }) => {
    var checked = ''
    if(eat){
        checked = <i className="weui_icon_success_no_circle"></i>
    }
    return (
  <label className="weui_cell c_weui_cell_no_b weui_check_label">
    <div className="weui_cell_bd weui_cell_primary">{name}</div>
    <div className="weui_cell_ft">
        {checked}
    </div>
  </label>
    )
}

export default People
