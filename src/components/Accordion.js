import React from 'react';
class Accordion extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showContent: false,
        }
    }

    handleClick(e){
        this.setState({
            showContent: !this.state.showContent,
        })
    }

    render() {
        const { children, header } = this.props
        let content = this.state.showContent ? children : false
        return (
            <div className="accordionContent">
                <div onClick={this.handleClick.bind(this)}>
                    <div>{ header }</div>
                </div>
                {content}
            </div>
        )
    }
}

export default Accordion;
