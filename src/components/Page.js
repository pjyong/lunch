import React from 'react';
import WeUI from 'react-weui'
const {Toast} = WeUI

export default class Page extends React.Component {
    componentWillUnmount(){
        const{toast} = this.props
        toast.timer && clearTimeout(toast.timer)
    }

    render() {
        const {spacing, className, children, toast} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                    {children}
                </div>
                <Toast icon={toast.icon} show={toast.show}>{toast.text}</Toast>
            </section>
        );
    }
};
