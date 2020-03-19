
import { FieldTypes, EditTypes, UITable, ComponentManifest } from 'libraui-extension'
// todo 未配置 onClick onChange
const manifest: ComponentManifest = {
  name: 'Popover',
  label: '气泡',
  description: '在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。',
  type: 'basicControls',
  uiTable: UITable.BillTplGroupBase,
  props: [
    {
      name: 'placement',
      type: FieldTypes.string,
      defaultValue: 'bottomLeft',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              // { value: 'left', text: 'left' },
              // { value: 'right', text: 'right' },
              // { value: 'top', text: 'top' },
              // { value: 'bottom', text: 'bottom' },
              // { value: 'topLeft', text: 'topLeft' },
              // { value: 'topRight', text: 'topRight' },
              { value: 'bottomLeft', text: 'bottomLeft' },
              { value: 'bottomRight', text: 'bottomRight' }
            ]
        },
        label: '位置'
      }
    },
    {
      name: 'size',
      type: FieldTypes.string,
      defaultValue: 'sm',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              // { value: 'left', text: 'left' },
              // { value: 'right', text: 'right' },
              // { value: 'top', text: 'top' },
              // { value: 'bottom', text: 'bottom' },
              // { value: 'topLeft', text: 'topLeft' },
              { value: 'md', text: 'md' },
              { value: 'sm', text: 'sm' }
              // { value: 'bottomRight', text: 'bottomRight' }
            ]
        },
        label: '大小'
      }
    },
    {
      name: 'overlayData',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', label: '选项' }]),
      showDesign: true,
      designConfig: {
        label: 'pop内容',
        isRequired: false,
        type: EditTypes.Json,
        props: {

        }
      }
    },
    {
      name: 'dark',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '深色模式'
      }
    },
    {
      name: 'visible',
      type: FieldTypes.boolean,
      defaultValue: true, // 备注：与antd相反，为了展示
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '显示'
      }
    },
    {
      name: 'onVisibleChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onVisibleChange',
        help: '当显隐状态变化时回调函数'
      }
    },

    {
      name: 'onSelect',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onSelect',
        help: '选中回调函数'
      }
    }
  ],
  children: () => true
}

export default manifest