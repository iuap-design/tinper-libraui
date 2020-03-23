import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Slider',
  label: '滑动输入条',
  description: '滑动输入条',
  type: 'basicControls',
  uiTable: UITable.BillItemBase,
  icon: 'data-s',
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
      type: EditTypes.Number,
      label: '值',
      isRequired: false,
      props: {}
    }
  },
  {
    name: 'defaultValue',
    type: FieldTypes.array,
    defaultValue: 10,
    designConfig: {
      type: EditTypes.Number,
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
      label: '禁用'
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
      label: 'onChange'
    }
  }]
}
export default manifest
