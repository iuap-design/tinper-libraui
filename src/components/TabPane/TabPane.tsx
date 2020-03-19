import React, { Component } from 'react'
import classnames from 'classnames'
interface TabPaneProps {
  children: any
  key: string
  className?: string
  style?: object
  height?: string
  width?: string
  bgColor?: string
}

export default class MyComponent extends Component<TabPaneProps> {
  static defaultProps = {
    key: '',
    height: '100px'
  }

  render () {
    const { children, key, className, style, height, width, bgColor, ...other } = this.props
    const cls = classnames(className, 'yonui-tabpane')
    const sty = { width, height, 'background-color': bgColor, ...style }
    return (
      <div key={key} className={cls} style={sty} {...other}>
        {children}
      </div>
    )
  }
}