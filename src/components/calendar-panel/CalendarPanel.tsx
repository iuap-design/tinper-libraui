import React, { Component } from 'react'
import { Calendar } from 'antd-mobile'
import { CalendarProps } from 'antd-mobile/lib/calendar/PropsType'
interface YonuiCalenderProps extends CalendarProps {
  dateExtra: any
  onClickDay: any
  hintDays: string[]
  onPull: any
}
export default class MyComponent extends Component<YonuiCalenderProps> {
  constructor (props) {
    super(props)
    this.adaptExtra(props.dateExtra)
    const now = new Date()
    this.state = {
      visible: false,
      extra: props.dateExtra,
      now: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      startY: 0,
      touchDistance: 0,
      monthNow: now.getMonth()
    }
  }

  componentDidMount () {
    this.setState({
      visible: true
    })
  }

  shouldComponentUpdate (nextProps) {
    // Object.keys(nextProps.dateExtra).length !== Object.keys(this.props.dateExtra).length
    if (JSON.stringify(nextProps.dateExtra) !== JSON.stringify(this.props.dateExtra)) {
      this.adaptExtra(nextProps.dateExtra)
      this.setState({
        visible: !this.state.visible
      }, () => {
        this.setState({
          visible: !this.state.visible
        })
      })
    }
    return true
  }

  extra = []

  adaptExtra = (extra = {}) => {
    Object.keys(extra).forEach((key) => {
      const info = extra[key];
      const date = new Date(key);
      if (!Number.isNaN(+date) && extra[+date] !== info) {
        this.extra[+date] = info;
      }
    })
  }

  onSelect = (value, state) => {
    let isRange = false
    if (state[0] && state[1] === undefined) {
      isRange = true
    }
    const range1 = value
    const range2 = state[0]
    const range = range1 < range2 ? [range1, range2] : [range2, range1]
    const res = {
      isRange: isRange,
      range: range,
      now: value
    }
    if (+value === +this.state.now) {
      const info = this.extra[+value].info
      this.extra[+value].cellRender = date => {
        return (
          <>
            <div className='date-wrapper'>
              <span className='left' />
              <div className='date date-selected selected-single'>今</div>
              <span className='right' />
            </div>
            <div className='info'>{info}</div>
          </>
        )
      }
    }
    this.props.onClickDay?.(res)
  }

  getDateExtra = date => {
    const now = this.state.now
    const hintDays = this.props.hintDays || []
    hintDays.forEach(hintDay => {
      if (+new Date(hintDay) === +date) {
        if (!this.extra[+date]) {
          this.extra[+date] = {}
        }
        this.extra[+date].cellCls = 'lightred'
      }
    })
    if (+now === +date) {
      if (!this.extra[+date]) {
        this.extra[+date] = {}
        const info = this.extra[+date].info
        this.extra[+date].cellRender = date => {
          return (
            <>
              <div className='date-wrapper'>
                <span className='left' />
                <div className='date'>今</div>
                <span className='right' />
              </div>
              <div className='info'>{info}</div>
            </>
          )
        }
      }
    }
    return this.extra[+date]
  }

  // onTouchStart = (e) => {
  //   e.preventDefault();
  //   const touch = e.touches[0]
  //   const startY = touch.pageY
  //   this.setState({
  //     startY: startY
  //   })
  // }

  // onTouchMove = (e) => {
  //   e.preventDefault();
  //   const touch = e.touches[0]
  //   const moveY = touch.pageY
  //   console.log('move', moveY)
  // }

  // onTouchEnd = (e) => {
  //   e.preventDefault()
  //   const singleMonth = document.querySelector('.single-month')
  //   const touch = e.changedTouches[0]
  //   const startY = this.state.startY
  //   const endY = touch.pageY
  //   let touchDistance = this.state.touchDistance
  //   console.log('一个月距离', singleMonth.clientHeight)
  //   if (startY - endY > singleMonth.clientHeight) {
  //     console.log('滑动距离超过一个月', startY - endY)
  //   }
  //   console.log('滑动距离小于一个月', startY - endY)
  //   touchDistance = Math.floor(touchDistance + startY - endY)
  //   this.setState({
  //     touchDistance: touchDistance
  //   })
  //   console.log('相对初始位置距离', touchDistance)
  //   // const wrapper = document.querySelector('.wrapper')
  //   // console.log('moveEnd', wrapper.scrollTop)
  //   const monthStart = this.props.defaultDate.getMonth() + 1
  //   const monthNow = monthStart + touchDistance / singleMonth.clientHeight + 1
  //   this.props.onPull?.(monthStart, Math.floor(monthNow))
  // }

  render () {
    const { maxDate, minDate, defaultDate, defaultTimeValue, type, defaultValue } = this.props
    const { visible } = this.state
    const minDateTrs = (minDate && typeof minDate === 'string') ? new Date(minDate) : minDate
    const maxDateTrs = (maxDate && typeof maxDate === 'string') ? new Date(maxDate) : maxDate
    const defaultDateTrs = (defaultDate && typeof defaultDate === 'string') ? new Date(defaultDate) : defaultDate
    const defaultTimeValueTrs = (defaultTimeValue && typeof defaultTimeValue === 'string') ? new Date(defaultTimeValue) : defaultTimeValue
    if (defaultValue && defaultValue.length) {
      defaultValue[0] = (typeof defaultValue[0] === 'string') ? new Date(defaultValue[0]) : defaultValue[0]
      if (defaultValue[1]) {
        if (type === 'one') {
          delete defaultValue[1]
          defaultValue.length = 1
        } else {
          defaultValue[1] = (typeof defaultValue[1] === 'string') ? new Date(defaultValue[1]) : defaultValue[1]
        }
      }
    }
    if (!visible) return null
    return (
      <div
        className='am-calendar-panel'
        // onTouchStart={this.onTouchStart}
        // onTouchEnd={this.onTouchEnd}
      >
        <Calendar
          {...this.props}
          visible={visible}
          onSelect={this.onSelect}
          prefixCls='am-calendar'
          defaultDate={defaultDateTrs}
          defaultValue={defaultValue}
          defaultTimeValue={defaultTimeValueTrs}
          minDate={minDateTrs}
          maxDate={maxDateTrs}
          getDateExtra={this.getDateExtra}
        />
      </div>
    )
  }
}
