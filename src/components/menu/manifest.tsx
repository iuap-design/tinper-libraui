import { FieldTypes, EditTypes, ComponentManifest, UIObject } from 'yonui-extension'
// todo 未配置 onClick onChange
export const menuData = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false
      },
      {
        label: 'Chinese Food',
        value: '2'
      }]
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1'
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true
      }]
  },
  {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1'
      }
    ]
  }
]
const manifest: ComponentManifest = {
  name: 'Menu',
  label: '菜单',
  description: '在一个临时的面板上显示一组操作', // 描述
  type: 'basicControls',
  uiObject: UIObject.Containers,
  icon: 'row',
  props: [// adapter适配层数据
    {
      name: 'level',
      type: FieldTypes.number,
      defaultValue: 1,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 1, text: 1 },
              { value: 2, text: 2 }
            ]
        },
        label: '菜单级数',
        help: '菜单级数'
      }
    },
    {
      name: 'data',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: JSON.stringify(menuData),
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        props: {},
        label: '数据',
        help: '根据data生成menu内容。(isleaf设置后children无效,不展示,参考已给默认data值)'
      }
    },
    {
      name: 'value',
      type: FieldTypes.array, // 备注：这里应该是数组
      defaultValue: JSON.stringify(['1', '3']),
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        props: {},
        label: '初始值',
        help: '初始值，一级和二级筛选数据的value组成的数组。在多选状态下，如果为二级菜单，则数组的第一个元素为一级菜单的选项，数组的第二个元素是一个数组，里面包含了二级菜单的多选项；如果为一级菜单，则数组所有元素都是多选项'
      }
    },
    {
      name: 'height',
      type: FieldTypes.number,
      defaultValue: 200,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        props: {},
        label: '高度',
        help: '筛选组件的高度'
      }
    }, {
      name: 'multiSelect',
      type: FieldTypes.boolean,
      defaultValue: false,
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        props: {},
        label: '多选',
        help: '是否支持菜单多选'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'onChange',
        help: '选择后的回调函数'
      }
    },
    {
      name: 'onOk',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'onOk',
        help: '多选状态下确认按钮回调'
      }
    },
    {
      name: 'onCancel',
      type: FieldTypes.action,
      defaultValue: '',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        props: {},
        label: 'onCancel',
        help: '多选状态下取消按钮回调'
      }
    }
  ],
  children: []
}
export default manifest
