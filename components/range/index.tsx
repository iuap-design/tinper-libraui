import * as React from 'react'
import { Component, FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from '@metaui/extension'
import { Range } from 'antd-mobile'
import { RangeProps } from 'antd-mobile/lib/range'
// todo onAfterChange marks dots included count allowCross pushable handleStyle trackStyle railStyle
const manifest: ComponentManifest = {
  name: 'Range',
  label: '区域选择',
  description: '区域选择',
  props: [{
    name: 'min',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 0,
    designConfig: {
      type: EditTypes.Number,
      isRequired: false,
      label: '最小值',
      props: {}
    }
  },
  {
    name: 'max',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 100,
    designConfig: {
      type: EditTypes.Number,
      isRequired: false,
      label: '最大值',
      props: {}
    }
  },
  {
    name: 'step',
    type: FieldTypes.number,
    showDesign: true,
    defaultValue: 1,
    designConfig: {
      type: EditTypes.Number,
      isRequired: false,
      label: '步长',
      props: {}
    }
  },
  {
    name: 'value',
    type: FieldTypes.array,
    showDesign: true,
    designConfig: {
      type: EditTypes.Json,
      label: '值',
      isRequired: false,
      props: {}
    }
  },
  {
    name: 'defaultValue',
    type: FieldTypes.array,
    showDesign: true,
    defaultValue: [0, 0],
    designConfig: {
      type: EditTypes.Json,
      label: '默认值',
      isRequired: false,
      props: {}
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
      label: '是否禁用'
    }
  },
  {
    name: 'onChange',
    type: FieldTypes.action,
    showDesign: true,
    designConfig: {
      type: EditTypes.Text,
      isRequired: true,
      props: {},
      label: '改变回调'
    }
  }]
}

export default class RangeComponent implements Component<RangeProps> {
  manifest = manifest
  render = ReactWrapper((props: any) => (<Range {...props} />))
}