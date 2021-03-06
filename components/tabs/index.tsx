/**
 * rc-from是否需要增加,如果增加rc-from,需要写一个from组件
 */
import { Tabs } from 'antd-mobile'
import { FieldTypes, EditTypes, ReactWrapper, ComponentManifest } from 'libraui-extension'
import DefaultTabBar from './DefaultTabBar'
// const getChildrenDom = function (tabs: any) {
//   if (!Array.isArray(tabs)) return null
//   return tabs.map((item, index) => {
//     return <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>Content of {index + 1} tab</div>
//   })
// }
// todo 未配置 onChange
const manifest: ComponentManifest = {
  name: 'Tabs',
  label: '标签页',
  description: '用于让用户在不同的视图中进行切换。',
  type: 'Navigation',
  props: [
    {
      name: 'prefixCls',
      type: FieldTypes.string,
      defaultValue: 'am-tabs',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式前缀'
      }
    },
    {
      name: 'className',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '样式类'
      }
    },
    {
      name: 'tabs',
      type: FieldTypes.array,
      defaultValue: JSON.stringify([{ title: 'First Tab' }, { title: 'Second Tab' }]),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: true,
        props: {},
        label: 'tab数据',
        help: 'tab数据'
      }
    },
    {
      name: 'tabBarPosition',
      type: FieldTypes.string,
      defaultValue: 'top',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'top', text: 'top' },
              { value: 'bottom', text: 'bottom' },
              { value: 'left', text: 'left' },
              { value: 'right', text: 'right' }
            ]
        },
        label: 'TabBar位置',
        help: 'TabBar位置'
      }
    },
    // {
    //   name: 'renderTabBar',
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   showDesign: false,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'renderTabBar',
    //     help: '替换TabBar'
    //   }
    // },
    {
      name: 'initialPage',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '初始tab',
        help: '初始化Tab, index or key'
      }
    },
    {
      name: 'page',
      type: FieldTypes.number,
      defaultValue: 0,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '当前tab',
        help: '当前Tab, index or key'
      }
    },
    {
      name: 'swipeable',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '是否滑动',
        help: '是否可以滑动内容切换'
      }
    },
    {
      name: 'useOnPan',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '跟手滚动',
        help: '使用跟手滚动'
      }
    },
    {
      name: 'animated',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '开启动画',
        help: '是否开启切换动画'
      }
    },
    {
      name: 'onChange',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onChange',
        help: 'tab变化时触发'
      }
    },
    {
      name: 'onTabClick',
      type: FieldTypes.action,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: 'onTabClick',
        help: 'tab 被点击的回调'
      }
    },
    {
      name: 'distanceToChangeTab',
      type: FieldTypes.number,
      defaultValue: 0.3,
      showDesign: true,
      designConfig: {
        type: EditTypes.Number,
        isRequired: false,
        props: {},
        label: '切换的阈值',
        help: '滑动切换阈值(宽度比例)'
      }
    },
    {
      name: 'usePaged',
      type: FieldTypes.boolean,
      defaultValue: true,
      showDesign: true,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '分页模式',
        help: '是否开启分页模式'
      }
    },
    {
      name: 'tabDirection',
      type: FieldTypes.string,
      defaultValue: 'horizontal',
      value: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Select,
        props: {
          options:
            [
              { value: 'horizontal', text: 'horizontal' },
              { value: 'vertical', text: 'vertical' }
            ]
        },
        label: 'TabBar位置',
        help: 'TabBar位置'
      }
    },
    {
      name: 'tabBarUnderlineStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '下划线样式',
        help: 'tabBar下划线样式'
      }
    },
    {
      name: 'tabBarBackgroundColor',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '背景色',
        help: 'tabBar背景色'
      }
    },
    {
      name: 'tabBarActiveTextColor',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '激活文字颜色',
        help: 'tabBar激活Tab文字颜色'
      }
    },
    {
      name: 'tabBarInactiveTextColor',
      type: FieldTypes.string,
      defaultValue: '',
      showDesign: true,
      designConfig: {
        type: EditTypes.Color,
        isRequired: false,
        props: {},
        label: '非激活文字颜色',
        help: 'tabBar非激活Tab文字颜色'
      }
    },
    {
      name: 'tabBarUnderlineStyle',
      type: FieldTypes.object,
      defaultValue: JSON.stringify({}),
      showDesign: true,
      designConfig: {
        type: EditTypes.Json,
        isRequired: false,
        props: {},
        label: '文字样式',
        help: 'tabBar文字样式'
      }
    },
    // {
    //   name: 'renderTab', // 备注：导致tab头部不展示
    //   type: FieldTypes.action,
    //   defaultValue: '',
    //   showDesign: true,
    //   designConfig: {
    //     type: EditTypes.Text,
    //     isRequired: false,
    //     props: {},
    //     label: 'renderTab',
    //     help: '替换TabBar的Tab'
    //   }
    // },
    {
      name: 'destroyInactiveTab',
      type: FieldTypes.boolean,
      defaultValue: false,
      showDesign: false,
      designConfig: {
        type: EditTypes.Bool,
        isRequired: false,
        props: {},
        label: '销毁',
        help: '销毁超出范围Tab'
      }
    },
    {
      name: 'prerenderingSiblingsNumber',
      type: FieldTypes.number,
      defaultValue: 1,
      showDesign: false,
      designConfig: {
        type: EditTypes.Text,
        isRequired: false,
        props: {},
        label: '预加载数量',
        help: '预加载两侧Tab数量'
      }
    }
  ],
  children: []
}
const WrapperTabs = ReactWrapper(Tabs, manifest)
WrapperTabs.DefaultTabBar = DefaultTabBar
export default WrapperTabs
