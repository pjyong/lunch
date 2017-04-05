import React from 'react'
import WeUI from 'react-weui'
const {Dialog,Form,FormCell,CellBody,Input,Select,CellHeader,Label} = WeUI

class JoinTeam extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showModal: props.department === 0,
            name:'',
            department: 0,
            modal: {
                title: '选择部门',
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
            return false
        }
        this.props.onConfirm(this.state.name, this.state.department, this.props.id)
        this.setState({
            showModal: false,
        });
    }

    render() {
        return <Dialog title={this.state.modal.title} buttons={this.state.modal.buttons} show={this.state.showModal}>
            第一次要饭，在所难免的
            <Form>
            <FormCell>
                <CellHeader>
                    <Label>真实姓名</Label>
                </CellHeader>
                <CellBody>
                    <Input type="text" onChange={this.handleNameChange.bind(this)}/>
                </CellBody>
            </FormCell>
            <FormCell>
                <CellHeader>
                    <Label>部门</Label>
                </CellHeader>
                <CellBody>
                    <Select defaultValue="0" onChange={this.handleDepartmentChange.bind(this)}>
                        <option key={0} value="0"></option>

                        {this.props.departmentList.map(department =>
                          <option key={department.id} value={department.id}>{department.name}</option>
                        )}
                    </Select>
                </CellBody>
            </FormCell>
            </Form>
        </Dialog>
    }
}
export default JoinTeam
