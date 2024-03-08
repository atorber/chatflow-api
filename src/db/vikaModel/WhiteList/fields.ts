export const vikaFields = {
  code: 200,
  success: true,
  data: {
    fields: [
      {
        id: 'fldcsbKTfZhqh',
        name: '编号|serialNumber',
        type: 'AutoNumber',
        editable: false,
        isPrimary: true,
      },
      {
        id: 'fldUWBUG0jtxW',
        name: '所属应用|app',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'optcUHnoLIZgh',
              name: '智能问答|qa',
              color: { name: 'deepPurple_0', value: '#E5E1FC' },
            },
            {
              id: 'optARq3pMmw2i',
              name: '活动管理|act',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
            {
              id: 'opts3hdWGDZyN',
              name: '消息存储|msg',
              color: { name: 'blue_0', value: '#DDF5FF' },
            },
            {
              id: 'optEGmWTUW9IZ',
              name: 'ChatGPT|gpt',
              color: { name: 'teal_0', value: '#D6F3E8' },
            },
          ],
        },
        editable: true,
      },
      {
        id: 'fldxFNHqTxc5h',
        name: '类型|type',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'optqTEbP3IKGO',
              name: '好友',
              color: { name: 'deepPurple_0', value: '#E5E1FC' },
            },
            {
              id: 'opt5IiZCFPldl',
              name: '群',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
          ],
        },
        editable: true,
      },
      {
        id: 'fldzD9S6sq9QR',
        name: '昵称/群名称|name',
        type: 'SingleText',
        property: {},
        editable: true,
      },
      {
        id: 'fldkTrMcb63oY',
        name: '好友ID/群ID(选填)|id',
        type: 'SingleText',
        property: {},
        editable: true,
      },
      {
        id: 'fldWelcS8ISNn',
        name: '好友备注(选填)|alias',
        type: 'SingleText',
        property: {},
        editable: true,
      },
      {
        id: 'fldAj0kCgDIDT',
        name: '备注说明(选填)|info',
        type: 'Text',
        editable: true,
      },
      {
        id: 'fldXrv3ioaJgK',
        name: '启用状态|state',
        type: 'SingleSelect',
        property: {
          options: [
            {
              id: 'optzOM0Xof9Ln',
              name: '开启',
              color: { name: 'deepPurple_0', value: '#E5E1FC' },
            },
            {
              id: 'opt8qyV17YhtJ',
              name: '关闭',
              color: { name: 'indigo_0', value: '#DDE7FF' },
            },
          ],
        },
        editable: true,
      },
      {
        id: 'fldjMUlBxFjDK',
        name: '配额(选填)|quota',
        type: 'Number',
        property: { defaultValue: '20', precision: 0 },
        editable: true,
      },
      {
        id: 'fldTg4jPISBHT',
        name: '管理员昵称|adminName',
        type: 'Text',
        editable: true,
      },
      {
        id: 'fldVXbsL4Qrqp',
        name: '管理员好友备注(选填)|adminAlias',
        type: 'Text',
        editable: true,
      },
      {
        id: 'fldY7IfHw3QxC',
        name: '管理员ID(选填)|adminId',
        type: 'Text',
        editable: true,
      },
    ],
  },
  message: 'SUCCESS',
};
