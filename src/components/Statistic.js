import React from 'react'
import WeUI from 'react-weui'
const {CellsTitle} = WeUI

const Statistic = ({ totalNum, eatNum }) => {
    return (
        <CellsTitle>今日点餐人数：{eatNum}&nbsp;&nbsp;所有人数：{totalNum}</CellsTitle>
    )
}

export default Statistic
