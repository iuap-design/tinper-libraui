/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import React from 'react'
import { Switch } from 'antd-mobile'
import { SwitchProps } from 'antd-mobile/lib/switch'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Switch',
  label: '滑动开关',
  description: '',
  props: [
    {
      name: 'checked',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '是否默认选中'
      }
    },
    {
      name: 'disabled',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '设置禁用'
      }
    },
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: true,
        props: {},
        label: '开关打开后的颜色'
      }
    },
    {
      name: 'label',
      type: FieldTypes.string,
      defaultValue: '开关',
      showDesign: true,
      designConfig: {
        type: EditTypes.Icon,
        isRequired: true,
        props: {},
        label: '标题文本'
      }
    },
    {
      name: 'platform',
      type: FieldTypes.string,
      defaultValue: 'ios',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [
            { value: 'ios', text: '苹果' },
            { value: 'android', text: '安卓' }
          ]
        },
        label: '手机平台'
      }
    }
  ],
  children: []
}
export default class SwitchComponent implements Component<SwitchProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => <Switch {...props}/>)
}