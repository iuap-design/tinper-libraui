import React, { Component } from 'react'
import { Grid, Badge, Icon } from 'antd-mobile'
import { GridProps } from 'antd-mobile/lib/grid'
import Popover from '../popover'
import classnames from 'classnames'
export interface GridComponentProps extends GridProps {
  mode?: string
  style?: any
  itemSize?: string
  itemDir?: 'row' | 'column'
  showHeader?: boolean
  gridTitle?: string
  onSelect?: (value: object) => void
  onShowMore?: () => void
}
export default class GridComponent extends Component<GridComponentProps> {
  getGridProps = () => {
    const { isCarousel, carouselMaxRow, hasLine = false, columnNum } = this.props
    const res = {
      hasLine: hasLine,
      columnNum: columnNum,
      isCarousel: isCarousel,
      carouselMaxRow: carouselMaxRow,
      square: false
    }
    return res
  }

  getLabelStyle = () => {
    const { style = {} } = this.props
    return {
      color: style.color,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      fontStyle: style.fontStyle,
      textDecoration: style.textDecoration
    }
  }

  getGridStyle = () => {
    const { style = {} } = this.props
    return {
      ...style,
      color: 'umset',
      fontSize: 'unset',
      fontWeight: 'unset',
      fontStyle: 'unset',
      textDecoration: 'unset'
    }
  }

  _onClick = (item) => {
    const { onSelect } = this.props
    if (item.pop) return
    if (item.url) {
      window.location.href = item.url
    } else {
      onSelect?.(item)
    }
  }

  onShowMore = () => {
    this.props.onShowMore?.()
  }

  adaptItemNumber = (number) => {
    let res = null
    if (isNaN(Number(number))) {
      res = number && number.length > 2 ? `${number.substr(0, 2)}...` : number
    } else {
      res = Math.max(0, Math.floor(number))
    }
    return res
  }

  renderItem = (item) => {
    const { mode = 'image', itemSize = 'lg', itemDir = 'column' } = this.props
    const gridIconCls = classnames('yonui-grid-icon', `yonui-grid-icon-${itemSize}`)
    const textStyle = this.getLabelStyle()
    item.number = this.adaptItemNumber(item.number)
    let gridItem = null
    switch (mode) {
      case 'image':
        gridItem = (
          <>
            <img className={gridIconCls} src={item.icon} />
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      case 'number':
        gridItem = (
          <>
            <div className={gridIconCls}>{item.number}</div>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      case 'badge':
        gridItem = (
          <>
            <Badge text={item.number} overflowCount={99}>
              <img className={gridIconCls} src={item.icon} />
            </Badge>
            <div className='yonui-grid-text' style={textStyle}>{item.text}</div>
          </>
        )
        break
      default:
        break
    }
    return (
      item.pop
        ? <Popover data={item.pop}>
          <div className='yonui-grid-item-wrapper' style={{ flexDirection: itemDir }}>
            {gridItem}
          </div>
        </Popover>
        : <div className='yonui-grid-item-wrapper' style={{ flexDirection: itemDir }}>
          {gridItem}
        </div>
    )
  }

  renderShowMoreIcon = () => {
    const { data = [], isCarousel = false, columnNum = 4, carouselMaxRow = 2 } = this.props
    const pageSize = columnNum * carouselMaxRow
    if (isCarousel && pageSize < data.length) {
      return <Icon type='right' size='sm' onClick={this.onShowMore} />
    }
    return null
  }

  render () {
    const { data, gridTitle, showHeader = false } = this.props
    return (
      <div className='yonui-grid-wrapper' style={this.getGridStyle()}>
        {showHeader && <div className='yonui-grid-title'>
          <span>
            {gridTitle}
          </span>
          {this.renderShowMoreIcon()}
        </div>}
        <Grid
          className='yonui-grid'
          data={data}
          {...this.getGridProps()}
          renderItem={(item) => this.renderItem(item)}
          onClick={(item) => this._onClick(item)}
        />
      </div>
    )
  }
}
