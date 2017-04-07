import React from 'react'
import WeUI from 'react-weui'
const {Dialog,FormCell,CellBody,Input,Select,CellHeader} = WeUI

class JoinTeam extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            department: 0,
            modal: {
                title: '填写信息',
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

    handleNameChange(e) {
       this.setState({name: e.target.value})
    }

    handleDepartmentChange(e) {
       this.setState({department: parseInt(e.target.value,10)})
    }

    hideDialog() {
        if( this.state.department === 0 || this.state.name === '' ){
            this.props.changeToast(true, '', '请完成信息')
            return false
        }
        this.props.onConfirm(this.state.name, this.state.department, this.props.id)
    }

    render() {
        const {showInfoModal} = this.props
        console.log(showInfoModal)
        return <Dialog title={this.state.modal.title} buttons={this.state.modal.buttons} show={this.props.showInfoModal} className="lunch_dia">
            第一次要饭，在所难免的
            <FormCell  select selectPos="before">
                <CellHeader>
                    <Select defaultValue="0" onChange={this.handleDepartmentChange.bind(this)}>
                        <option key={0} value="0">选择</option>

                        {this.props.departmentList.map(department =>
                          <option key={department.id} value={department.id}>{department.name}</option>
                        )}
                    </Select>
                </CellHeader>
                <CellBody>
                    <Input type="text" placeholder="请填写真实姓名"  onChange={this.handleNameChange.bind(this)}/>
                </CellBody>
            </FormCell>
        </Dialog>
    }
}
export default JoinTeam
