import { Input } from 'antd';

import layout from './fieldLayout';

export default {
  Component: Input,
  label: 'Input',
  import: 'Input',
  // 表单用字段
  isField: true,
  fieldProps: {
    title: '活动名称',
    label: 'name',
    rules: [
      {
        required: true,
        message: '请输入活动名称',
      },
    ],
    ...layout,
  },
  props: {
    placeholder: '请输入活动名称',
  },
}
