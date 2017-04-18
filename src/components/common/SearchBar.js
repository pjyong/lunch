import React from 'react'
import ReactDOM from 'react-dom'
import WeUI from 'react-weui'
import classNames from 'classnames'

const {
   Icon
} = WeUI



class CustomSearchBar extends React.Component{

    focusHandle(e){
        this.setState({focus:true})
        // alert(e.target.value)
        let text = e.target.value
        if(this.props.onFocus) this.props.onFocus(text, e)
    }

    static propTypes = {
        /**
         * default place holder text
         *
         */
        placeholder: React.PropTypes.string,
        /**
         * name of the input component
         *
         */
        searchName: React.PropTypes.string,
        /**
         * trigger when text change on input pass `text` property
         *
         */
        onChange: React.PropTypes.func,
        /**
         * trigger when user click clear icon
         *
         */
        onClear: React.PropTypes.func,
        /**
         * trigger when user click cancel button
         *
         */
        onCancel: React.PropTypes.func,
        /**
         * trigger when user submit (enter action)
         *
         */
        onSubmit: React.PropTypes.func,
        /**
         * language object consists of `cancel` property
         *
         */
        lang: React.PropTypes.object
    };

    static defaultProps = {
        placeholder: '搜索',
        searchName: 'q',
        onChange: undefined,
        onClear: undefined,
        onCancel: undefined,
        onSubmit: undefined,
        lang: { cancel: '取消' },
        autocomplete: 'off'
    };



    constructor(props){
        super(props)
        this.state={
            focus: false,
            clearing: false,
            text: ''
        }

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.text !== null){
            this.setState({focus: true, text: nextProps.text})
        }else{
            this.setState({focus: false, text: ''})
        }
    }



    changeHandle(e) {
        let text = e.target.value;
        if(this.props.onChange) this.props.onChange(text,e);
        this.setState({text});
    }

    cancelHandle(e) {
        this.setState({
            focus: false,
            text: ''
        });
        if(this.props.onCancel) this.props.onCancel(e);
        if(this.props.onChange) this.props.onChange('',e);
    }

    clearHandle(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({text: '', clearing: true});
        if(this.props.onClear) this.props.onClear(e);
        ReactDOM.findDOMNode(this.refs.searchInput).focus()
        if(this.props.onChange) this.props.onChange('',e);
    }

    blurHandle(e) {
        if(this.state.text === ''){
            this.setState({ focus: false})
        }
    }

    submitHandle(e) {
        if (this.props.onSubmit) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onSubmit(this.state.text, e);
        }
    }

    render() {

        const {autocomplete, placeholder, className, searchName} = this.props;
        const clz = classNames({
            'weui-search-bar': true,
            'weui-search-bar_focusing': this.state.focus
        }, className);
        var inputValue
        if(this.state.text === null){
            inputValue = ''
        }else{
            inputValue = this.state.text
        }

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
                            onChange={this.changeHandle.bind(this)}
                            value={inputValue}
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
        );
    }
}

export default CustomSearchBar
