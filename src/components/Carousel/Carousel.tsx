import React from 'react'
import { Carousel } from 'antd-mobile'
import classnames from 'classnames'
export interface CarouselProps {
  prefixCls?: string
  selectedIndex?: number
  dots?: boolean
  vertical?: boolean
  autoplay?: boolean
  autoplayInterval?: number
  infinite?: boolean
  dotStyle?: object
  dotActiveStyle?: object
  frameOverflow?: 'visible' | 'hidden'
  cellSpacing?: number
  slideWidth?: string
  easing?: () => void
  swipeSpeed?: number
  ratio?: string
  style?: React.CSSProperties
  children?: any[]
}
export default class MDFCarousel extends React.Component<CarouselProps, any> {
  static defaultProps = {
    prefixCls: 'am-carousel',
    selectedIndex: 0,
    dots: true,
    vertical: false,
    autoplay: false,
    autoplayInterval: 3000,
    infinite: false,
    dotStyle: {},
    dotActiveStyle: {},
    frameOverflow: 'hidden',
    cellSpacing: 0,
    slideWidth: 1,
    swipeSpeed: 12,
    ratio: '4:2'
  }

  getPaddingBottom () {
    const { ratio = '4:2' } = this.props
    const reg = /[0-9]:[0-9]/
    if (reg.test(ratio)) {
      const result: any = ratio.split(':')
      return `${result[1] / result[0] * 100}%`
    }
    return '50%'
  }

  render () {
    const { prefixCls, children, style, ratio, ...otherProps } = this.props
    const wrapCls = classnames({
      [`${prefixCls}-ratio`]: !!ratio
    })
    return (
      <div className={wrapCls} style={{
        ...style,
        paddingBottom: ratio ? this.getPaddingBottom() : undefined
      }}>
        <Carousel {...otherProps}>{children}</Carousel>
      </div>
    )
  }
}