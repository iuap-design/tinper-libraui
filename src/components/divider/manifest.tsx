import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
const manifest: ComponentManifest = {
  name: 'Divider',
  label: '分割线',
  type: 'type',
  uiObject: UIObject.Controls,
  props: [
    {
      name: 'type',
      type: FieldTypes.string,
      defaultValue: 'default',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        isRequired: true,
        props: {
          options: [{
            value: 'solid',
            text: '实线'
          },
          {
            value: 'dashed',
            text: '虚线'
          },
          {
            value: 'dotted',
            text: '点线'
          },
          {
            value: 'double',
            text: '双实线'
          }]
        },
        label: '线形'
      }
    },
    {
      name: 'color',
      type: FieldTypes.string,
      defaultValue: '#d0d0d0',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        props: {},
        label: '颜色'
      }
    },
    {
      name: 'width',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '线宽'
      }
    }
  ],
  children: []
}

export default manifest