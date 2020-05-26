import React from 'react'
import classnames from 'classnames'
import { Icon } from 'antd-mobile'

// function onNextFrame(cb) {
//     if (window.requestAnimationFrame) {
//         return window.requestAnimationFrame(cb);
//     }
//     return window.setTimeout(cb, 1);
// }
// function clearNextFrameAction(nextFrameId) {
//     if (window.cancelAnimationFrame) {
//         window.cancelAnimationFrame(nextFrameId);
//     } else {
//         window.clearTimeout(nextFrameId);
//     }
// }
export interface SearchProps {
  prefixCls?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  maxLength?: number
  autoFocus?: boolean
  disabled?: boolean
  color?: string
  backgroundColor?: string
  searchIconColor?: string
  clearIconColor?: string
  voiceIconColor?: string
  onSubmit?: (value: string) => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onClear?: (value: string) => void
  focus?: Function
  clear?: Function
}

export default class Search extends React.Component<SearchProps, any> {
  static defaultProps = {
    prefixCls: 'mdf-search',
    value: '',
    defaultValue: '',
    placeholder: '输入进行搜索',
    maxLength: '',
    autoFocus: false,
    disabled: false,
    color: '',
    backgroundColor: '',
    searchIconColor: '',
    clearIconColor: '',
    voiceIconColor: ''
  }

  inputRef: HTMLInputElement | null

  constructor (props: any) {
    super(props)
    this.inputRef = null
    this.state = {
      value: props.value || props.defaultValue,
      focus: false
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps: SearchProps) {
    if ('value' in nextProps || 'defaultVlaue' in nextProps) {
      this.setState({
        value: nextProps.value || nextProps.defaultValue
      })
    }
  }

  // props
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.focus) {
      this.setState({
        focus: true
      })
    }
    const value = e.target.value || ''
    this.setState({ value: value })
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  onClear = () => {
    this.setState({ value: '' })
    if (this.props.onClear) {
      this.props.onClear('')
    }
    if (this.props.onChange) {
      this.props.onChange('')
    }
    this.focus()
  }

  onBlur = () => {
    this.setState({
      focus: false
    })
    if (this.props.onBlur) {
      // fix autoFocus item blur with flash
      setTimeout(() => {
        // fix ios12 wechat browser click failure after input
        if (document.body) {
          // what???
          // eslint-disable-next-line no-self-assign
          document.body.scrollTop = document.body.scrollTop
        }
      }, 100)
      this.props.onBlur()
    }
  }

  onFocus = () => {
    this.setState({
      focus: true
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  // method
  focus = () => {
    if (this.inputRef) {
      this.inputRef.focus()
    }
  }

  clear = () => {
    this.onClear()
  }

  render () {
    const {
      prefixCls,
      maxLength,
      disabled,
      color,
      placeholder,
      searchIconColor,
      backgroundColor,
      clearIconColor,
      voiceIconColor
    } = this.props
    const {
      value,
      focus
    } = this.state
    const clearCls = classnames(`${prefixCls}-clear`, {
      [`${prefixCls}-clear-show`]: !!(focus && value && value.length > 0)
    })
    return (
      <div
        className={prefixCls}
        style={{
          backgroundColor,
          color
        }}>
        <span
          className={`${prefixCls}-icon`}
          style={{
            color: searchIconColor
          }}>
          <Icon type='search' size='xs' />
        </span>
        <input
          type='text'
          ref={el => (this.inputRef = el)}
          className={`${prefixCls}-input`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur} />
        <a
          className={clearCls}
          style={{
            color: clearIconColor
          }}>
          <Icon type='cross-circle' size='xxs' onClick={this.onClear} />
        </a>
        <a
          className={`${prefixCls}-voice`}
          style={{
            color: voiceIconColor
          }}>
          <Icon type='voice' size='xxs' />
        </a>
      </div>
    )
  }

  componentDidMount () {
    if (this.state.autoFocus) {
      this.focus()
    }
    if (this.props.focus) {
      this.props.focus(this)
    }
    if (this.props.clear) {
      this.props.clear(this)
    }
  }
}
