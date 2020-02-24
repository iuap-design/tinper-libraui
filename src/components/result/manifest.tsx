import { EditTypes, FieldTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'

const manifest: ComponentManifest = {
  name: 'FeedBackPage',
  label: '反馈页',
  type: 'business',
  props: [
    {
      name: 'mode',
      type: FieldTypes.string,
      showDesign: true,
      defaultValue: 'success',
      designConfig: {
        label: '模式',
        type: EditTypes.Select,
        isRequired: false,
        props: {
          options: [
            { value: 'success', text: '成功' },
            { value: 'wait', text: '等待' },
            { value: 'reject', text: '驳回' }
          ]
        }
      }
    },
    {
      name: 'message',
      type: FieldTypes.string,
      defaultValue: '申请成功',
      showDesign: true,
      designConfig: {
        label: '文字信息',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }]
}


export {
  manifest,
  ReactWrapper
}
