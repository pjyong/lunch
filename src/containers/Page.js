import { connect } from 'react-redux'
import React from 'react';
import WeUI from 'react-weui'
import {Helmet} from "react-helmet";
import {startPageFetching,finishPageFetching} from '../actions/index'
const {Toast} = WeUI

// 全局的toast窗口,和正在抓取的状态
const mapStateToProps = (state) => ({
    toast: state.toast,
    isPageFetching: state.isPageFetching,
})

const mapDispatchToProps = {
    finishPageFetching,
}

class Page extends React.Component {
    componentWillUnmount(){
        // 清除弹出窗口
        const{toast,finishPageFetching} = this.props
        toast.timer && clearTimeout(toast.timer)
        // 完成页面加载
        finishPageFetching()
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
