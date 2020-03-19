import React, { Component } from 'react'
import { ActivityIndicator, Progress } from 'antd-mobile'
import classnames from 'classnames'
interface LoadingProps {
  content?: string
  inline?: boolean
  size?: 'small' | 'large'
  show?: boolean
  type?: 'toast' | 'jump' | 'top' | 'local'
  percent?: number
  theme?: 'dark' | 'primary' | 'light' | ''
  className?: string
  style?: object
}
export default class Loading extends Component<LoadingProps> {
  static defaultProps = {
    inline: false,
    show: true,
    type: 'toast',
    percent: 50
  }

  render () {
    const { content, inline, size, show, type, percent, theme, className, style, ...other } = this.props
    const wrapperCls = classnames('yonui-loading', `yonui-loading-${type}`)
    let loading = null
    switch (type) {
      case 'jump': {
        const cls = classnames(`yonui-loading-${theme || 'primary'}`, className)
        const position = inline ? 'normal' : 'fixed'
        loading = show && <Progress className={cls} unfilled={false} percent={percent} position={position} {...other} />
        break
      }
      case 'local': {
        const cls = classnames(`yonui-loading-${theme || 'dark'}`, className)
        loading = <ActivityIndicator className={cls} animating={show} size={size} text={content} {...other} />
        break
      }
      case 'toast':
      default: {
        const cls = classnames(`yonui-loading-${theme || 'light'}`, className)
        loading = <ActivityIndicator className={cls} animating={show} size={size} toast text={content} {...other} />
        break
      }
    }
    return (
      <div className={wrapperCls} style={style}>
        {loading}
      </div>
    )
  }
}