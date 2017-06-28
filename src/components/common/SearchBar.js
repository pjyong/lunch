import React from 'react'
import BaseSearchBar from 'components/common/BaseSearchBar'


class SearchBar extends React.Component {
    handleSubmit(text, e){
        if(text === ''){
            alert('不能为空')
            return
        }
        if(text !== this.props.key){
            this.props.history.push('/ask/entrance/search/'+text)
        }
    }

    handleChange(text, e){
    }

    handleFocus(text, e){
        this.props.history.push('/ask/entrance/search/'+text)
    }

    handleCancel(){
        this.props.history.push('/ask/entrance')
    }

    render(){
        return <BaseSearchBar
                    text={this.props.key}
                    onSubmit={this.handleSubmit.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onFocus={this.handleFocus.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    placeholder="请搜索您的问题"
                    lang={{
                        cancel: '取消'
                    }}
                />
    }
}

export default SearchBar
