import { Cascader } from 'antd';

import layout from './fieldLayout';

const options = [
  {
    value: 0,
    label: 'Zhejiang',
    children: [
      {
        value: 1,
        label: 'Hangzhou',
        children: [
          {
            value: 2,
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 3,
    label: 'Jiangsu',
    children: [
      {
        value: 4,
        label: 'Nanjing',
        children: [
          {
            value: 5,
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default function getCascader(params = {}) {
  const { uuid } = params;
  return {
    Component: Cascader,
    label: 'Cascader',
    import: 'Cascader',
    stateCode: `options${uuid}:`,
    renderCode: `options${uuid}`,
    // 表单用字段
    isField: true,
    fieldProps: {
      title: '城市选择',
      label: 'city',
      rules: [],
      ...layout,
    },
    options,
    props: {
      options: `options${uuid}`,
      placeholder: '请选择城市',
    },
  };
}
