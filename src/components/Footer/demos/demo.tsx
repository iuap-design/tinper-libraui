/**
 * @name: Demo Name
 * @description: Demo Description
 */
import React, { Component } from 'react'
import MyComponent from '../index'
import { Icon } from 'antd-mobile'
import Button from '../../Button'
import Flex from '../../Flex'
import '../style'
import './demo.less'
export default class Demo1 extends Component {
  render () {
    return (
      <MyComponent>
        <Flex>
          <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>测试</Button>
          <Button type="primary" inline size="small">测试</Button>
          <Icon type='check' size='sm'/>
          <span>footer</span>
        </Flex>
      </MyComponent>
    )
  }
}
