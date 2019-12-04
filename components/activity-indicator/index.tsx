import React from 'react'
import { ActivityIndicator } from 'antd-mobile'
import { ActivityIndicatorProps } from 'antd-mobile/lib/activity-indicator'
import { Component, EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from '@libraui/extension'
const manifest: ComponentManifest = {
  name: 'ActivityIndicator',
  label: '活动指示器',
  type: 'Feedback',
  props: [
    {
      name: 'animating',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        label: '显隐状态',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'toast',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: 'loading样式类型',
        type: EditTypes.Bool,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'text',
      type: FieldTypes.string,
      defaultValue: false,
      showDesign: true,
      designConfig: {
        label: 'loading文本',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'small',
      showDesign: true,
      designConfig: {
        label: 'spinner大小',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'small', text: '小' },
            { value: 'large', text: '大' }
          ]
        }
      }
    }
  ]
}
export default class ActivityIndicatorComponent implements Component<ActivityIndicatorProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<ActivityIndicator {...props}/>))
}
