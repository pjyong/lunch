import React from 'react'
import WeUI from 'react-weui'
const {CellsTitle,Icon,Dialog} = WeUI



export default class Statistic extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showTip: false,
            modal: {
                title: '点餐须知',
                buttons: [
                    {
                        type: 'primary',
                        label: '确认',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            }
        }
    }

    hideDialog() {

        this.setState({
            showTip: false,
        });
    }

    showTip(e) {
       this.setState({showTip: true})
    }

    render() {
        const {totalNum, eatNum} = this.props;

        return (
            <div>
            <CellsTitle onClick={this.showTip.bind(this)}>今日点餐人数：<span className="f24">{eatNum}</span>&nbsp;&nbsp;所有人数：<span className="f24">{totalNum}</span><Icon className="iconFloat" value="info" />
            </CellsTitle>
            <Dialog title={this.state.modal.title} buttons={this.state.modal.buttons} show={this.state.showTip} className="lunch_dia ">
                <div className="txtLeft">
                1.点餐时间:9:00-11:00(工作日)<br/>
                2.每天9:30和10:30会从保养公众号收到消息提醒,点击消息即可点餐<br/>
                3.没点餐没饭吃(财务说的)
                </div>
            </Dialog>
            </div>
        )
    }
};
