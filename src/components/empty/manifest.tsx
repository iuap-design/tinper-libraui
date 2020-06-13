import { EditTypes, FieldTypes, ComponentManifest, UIObject } from 'yonui-extension'

import { getCssSelectParams } from '../_utils'
const manifest: ComponentManifest = {
  name: 'Empty',
  label: '空数据',
  uiObject: UIObject.Controls,
  icon: 'yincang',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      showDesign: true,
      defaultValue: 'noData',
      designConfig: {
        label: '模式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'noData', text: '无数据' },
            { value: 'client', text: '404' },
            { value: 'blankPage', text: '空白页' },
            { value: 'error', text: '错误' },
            { value: 'review', text: '审批中' },
            { value: 'server', text: '服务器' },
            { value: 'noNetwork', text: '无网络' }
          ]
        }
      }
    },
    {
      name: 'message',
      type: FieldTypes.string,
      defaultValue: '无数据',
      showDesign: true,
      designConfig: {
        label: '文字信息',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    },
    {
      name: 'style',
      type: FieldTypes.action,
      showDesign: true,
      designConfig: getCssSelectParams({ name: 'style' })
    }
  ]
}

export default manifest
