import React from 'react';
import WeUI from 'react-weui'
const {Toast} = WeUI

export default class Page extends React.Component {
    render() {
        const {spacing, className, children, isPageLoading} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                    {children}
                </div>
                <Toast icon="loading" show={isPageLoading}>加载中...</Toast>
            </section>
        );
    }
};
