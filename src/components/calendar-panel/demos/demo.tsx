/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { List } from 'antd-mobile'
import '../style'
import './demo.less'
import { dateFormat } from '../../_utils'
const dateInfo = {
   '2021-5-1': {info: '劳动节'},
   '2021-5-26': {info: 'zyh'},
   '2021-5-27': {info: 'test'},
   '2021-5-28': {info: '下标1'},
  }
export default class Demo1 extends Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      date: new Date(),
      one: new Date(),
      range: [new Date(2021, 4, 20), new Date(2021, 4, 25)]
    }
  }

  onSelect = value => {
    console.log('onSelect', value)
  }

  onClickDay = value => {
    console.log('onClickDay', value)
  }

  onConfirm = value => {
    console.log('confirm', value)
  }

  onCancel = () => {
    console.log('cancel')
  }

  render () {
    const { date, one, range } = this.state
    return (
      <React.Fragment>
        {/* <MyComponent
          selectRange={false}
          onSelect={this.onSelect}
          showHeader={true}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          dateInfo={{}}
          value={date}/> */}
        <MyComponent
          selectRange={true}
          showHeader={true}
          dateInfo={dateInfo}
          value={range}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onClickDay={this.onClickDay}
        />
      </React.Fragment>
    )
  }
}
