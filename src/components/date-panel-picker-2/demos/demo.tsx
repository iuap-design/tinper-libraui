/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import '../style'
import './demo.less'
// const nowTimeStamp = Date.now()
// const now = new Date(nowTimeStamp)

const hoursData = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
const minutesData =  [0, 30, 40, 50]
const onConfirm = value => console.log(value)
const onCancel = () => console.log('cancel')
export default class Demo1 extends Component<any, any> {
  render () {
    return (
      <div>
        <MyComponent
          hoursData={hoursData}
          minutesData={minutesData}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </div>
    )
  }
}
