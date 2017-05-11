import React from 'react';
import WeUI from 'react-weui'
const {Toast} = WeUI
import {Helmet} from "react-helmet";



export default class Page extends React.Component {
    
    // 卸载
    componentWillUnmount(){
        const{toast} = this.props
        toast.timer && clearTimeout(toast.timer)
    }

    render() {
        const {spacing, className, children, toast, pageTitle, isPageFetching} = this.props;
        if(isPageFetching){
            return <div></div>
        }

        return (
            <section className={`page ${className} react_page`}>
                <Helmet>
                <title>{pageTitle}</title>
                </Helmet>
                <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                    {children}
                </div>
                <Toast icon={toast.icon} show={toast.show}>{toast.text}</Toast>
            </section>
        );
    }
};
