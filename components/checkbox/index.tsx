/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import { Checkbox } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
import CheckboxItem from './CheckboxItem'
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'Checkbox',
  label: '复选框',
  description: '',
  type: 'DataEntry',
  props: [
    {
      name: 'defaultChecked',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '初始是否选中'
      }
    },
    {
      name: 'checked',
      type: FieldTypes.boolean,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: true,
        props: {},
        label: '指定当前是否选中'
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
    }
  ],
  children: []
}
const WrappedCheckbox = ReactWrapper(Checkbox, manifest)
WrappedCheckbox.CheckboxItem = CheckboxItem
export default WrappedCheckbox
