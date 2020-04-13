/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { Calendar } from 'antd-mobile'
import '../style';
import './demo.less';
export default class Demo extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
       value: ''
    }
  }

    render() {
        return (
            <MyComponent label='time' dateMode='picker-year' onChangeDate={(val)=>{ this.setState({value: val})}}  />
            // < Calendar title='xxx' visible={true}/>
        )
    }
}
