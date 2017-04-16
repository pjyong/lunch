import React from 'react'
import ReactDOM from 'react-dom'
import WeUI from 'react-weui'
import classNames from 'classnames'
const {
   SearchBar,
   Icon
} = WeUI

class CustomSearchBar extends SearchBar{
    focusHandle(e){
        this.setState({focus:true})
        let text = e.target.value
        if(this.props.onFocus) this.props.onFocus(text, e)
    }



    render() {
        const {autocomplete, placeholder, className, searchName} = this.props
        const clz = classNames({
            'weui-search-bar': true,
            'weui-search-bar_focusing': this.state.focus
        }, className)

        return (
            <div className={clz}>
                <form className='weui-search-bar__form' onSubmit={this.submitHandle.bind(this)}>
                    <div className='weui-search-bar__box'>
                        <Icon value='search'/>
                        <input
                            ref='searchInput'
                            type='search'
                            name={searchName}
                            className='weui-search-bar__input'
                            placeholder={placeholder}
                            onFocus={this.focusHandle.bind(this)}
                            onBlur={this.blurHandle.bind(this)}
                            onChange={this.changeHandle.bind(this)}
                            value={this.state.text}
                            autoComplete={autocomplete}
                        />
                        {/*React will not trigger onMouseDown when not onClick presented*/}
                        <a
                            className='weui-icon-clear'
                            onClick={this.clearHandle.bind(this)}
                        />
                    </div>
                    <label
                        className='weui-search-bar__label'
                        onClick={e=>ReactDOM.findDOMNode(this.refs.searchInput).focus()}
                        style={{display: this.state.text ? 'none': null}}
                    >
                        <Icon value='search'/>
                        <span>{placeholder}</span>
                    </label>
                </form>
                <a className='weui-search-bar__cancel-btn' onClick={this.cancelHandle.bind(this)}>{this.props.lang.cancel}</a>
            </div>
        )
    }
}

export default CustomSearchBar
