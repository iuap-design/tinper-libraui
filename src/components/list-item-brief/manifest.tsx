import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'

const manifest: ComponentManifest = {
  name: 'ListItemBrief',
  label: '列表ItemBrief',
  type: 'basicControls',
  uiObject: UIObject.Containers,
  hidden: true,
  parent: () => false,
  icon: 'list',
  props: [
    {
      name: 'content',
      type: FieldTypes.string,
      defaultValue: '辅助信息',
      showDesign: true,
      designConfig: {
        label: '内容',
        type: EditTypes.Text,
        isRequired: false,
        props: {}
      }
    }
  ],
  children: () => true
}

export default manifest
