import React from 'react'
import WeUI from 'react-weui'
import 'weui'
import 'react-weui/lib/react-weui.min.css'
const {Button} = WeUI

export default class JoinLunch extends React.Component {
    render(){
        const {uid, eat, onEatClick} = this.props
        var eatText = ''
        if(eat){
            eatText = '取消点餐'
        }else {
            eatText = '我要点餐'
        }
        return (<Button onClick={() => onEatClick(uid)} className="weui_btn weui_btn_primary">{eatText}</Button>)
    }
}
