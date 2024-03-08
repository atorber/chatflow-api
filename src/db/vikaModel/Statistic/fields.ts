export const vikaFields = {
  code: 200,
  success: true,
  data: {
    fields: [
      {
        id: 'fldzaCDUdzfSw',
        name: '编号|_id',
        type: 'AutoNumber',
        editable: false,
        isPrimary: true,
      },
      {
        id: 'fldHAgSIWGEqP',
        name: '类型|type',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'opt8vYwvszKDA',
              name: '活动报名',
              color: { name: 'deepPurple_0', value: '#E5E1FC' },
            },
            {
              id: 'opt5VAOclX6Yd',
              name: '签到打卡',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
            {
              id: 'optKc9lTIPpyI',
              name: '统计表',
              color: { name: 'blue_0', value: '#DDF5FF' },
            },
            {
              id: 'opttKWGWfACmx',
              name: '顺风车',
              color: { name: 'teal_0', value: '#D6F3E8' },
            },
          ],
        },
        editable: true,
      },
      { id: 'fldRgG5jj56Uz', name: '描述|desc', type: 'Text', editable: true },
      {
        id: 'fldSu4NtI5t8c',
        name: '开始时间(选填)|startTime',
        type: 'DateTime',
        property: {
          format: 'YYYY-MM-DD HH:mm',
          includeTime: true,
          autoFill: true,
        },
        editable: true,
      },
      {
        id: 'fldxTc4beXTQx',
        name: '时长(小时，选填)|duration',
        type: 'Number',
        property: { defaultValue: '1', precision: 0 },
        editable: true,
      },
      {
        id: 'fldLCm4vUyz9O',
        name: '限制人数(选填)|maximum',
        type: 'Number',
        property: { defaultValue: '99', precision: 0 },
        editable: true,
      },
      {
        id: 'fldOsSVT93lew',
        name: '地点(选填)|location',
        type: 'SingleText',
        property: {},
        editable: true,
      },
      {
        id: 'fld8SHnSaxQpR',
        name: '周期(选填)|cycle',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'optcwN4g6hwTw',
              name: '周一',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
            {
              id: 'opt17c3bkZNvw',
              name: '周二',
              color: { name: 'blue_0', value: '#DDF5FF' },
            },
            {
              id: 'optvSkXRMHNgm',
              name: '周三',
              color: { name: 'teal_0', value: '#D6F3E8' },
            },
            {
              id: 'optDmsWsd5hbE',
              name: '周四',
              color: { name: 'green_0', value: '#DCF3D1' },
            },
            {
              id: 'optyDU1FLaD3g',
              name: '周五',
              color: { name: 'yellow_0', value: '#FFF6D8' },
            },
            {
              id: 'optLngvF0pWHI',
              name: '周六',
              color: { name: 'orange_0', value: '#FFEECC' },
            },
            {
              id: 'optX0oZacy1bZ',
              name: '周日',
              color: { name: 'tangerine_0', value: '#FFE4CC' },
            },
          ],
        },
        editable: true,
      },
      {
        id: 'fldisKeTYFcD4',
        name: '关联群名称|topic',
        type: 'Text',
        editable: true,
      },
      {
        id: 'fld1wXgwMRSv5',
        name: '关联群ID(选填)|roomid',
        type: 'Text',
        editable: true,
      },
      {
        id: 'fldoGYget4MVU',
        name: '启用状态|active',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'optxGEeDUMNGG',
              name: '开启',
              color: { name: 'deepPurple_0', value: '#E5E1FC' },
            },
            {
              id: 'optGBJixy6pTx',
              name: '关闭',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
          ],
        },
        editable: true,
      },
    ],
  },
  message: 'SUCCESS',
};
