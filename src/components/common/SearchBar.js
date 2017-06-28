import React from 'react'
import BaseSearchBar from 'components/common/BaseSearchBar'
import {history} from 'store/index'


class SearchBar extends React.Component {
  constructor(props) {
      super(props)
  }
    static defaultProps = {
        text: null
    }
    handleSubmit(text, e){
        if(text === ''){
            alert('不能为空')
            return
        }
        if(text !== this.props.text){
            history.push('/ask/entrance/search/'+text)
        }
    }

    handleChange(text, e){
    }

    handleFocus(text, e){

      if(text !== this.props.text){
        history.push('/ask/entrance/search/'+text)
      }
    }

    handleCancel(){
        history.push('/ask/entrance')
    }

    render(){
        return <BaseSearchBar
                    text={this.props.text}
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
