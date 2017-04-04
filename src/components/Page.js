import React from 'react';

export default class Page extends React.Component {
    render() {
        const {spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className={`page__bd ${spacing ? 'page__bd_spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};
