import React from 'react'
import {
  Link
} from 'react-router-dom';

const Nav = () => (
    <div className="weui_tabbar " id="p_home_nav">
                <Link to="/" className="weui_tabbar_item weui_bar_item_on">我要点餐</Link>
                <Link to="/history" className="weui_tabbar_item">记录查询</Link>
                <Link to="/manage" className="weui_tabbar_item">管理人员</Link>
            </div>
)

export default Nav
