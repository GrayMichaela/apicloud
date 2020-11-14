/*
 * @Author: lilu
 * @Date: 2020-11-04 11:41:10
 * @LastEditors: lilu
 * @LastEditTime: 2020-11-10 10:27:31
 * @Description:
 */
/**
 * 巡林模式
 */
function getInspectionModes () {
  const data = [
    {
      id: 'XUN_LIN_MO_SHI',
      name: '巡林模式',
      type: 'inspection',
      iconName: '',
      eventName: ''
    },
    {
      id: 'XUN_LIN_JIAN_GUAN',
      name: '巡林监管',
      type: 'supervision',
      iconName: '',
      eventName: ''
    },
    {
      id: 'ZI_YUAN_JIAN_GUAN',
      name: '资源监管',
      type: 'resource',
      iconName: '',
      eventName: ''
    }
  ]
  return data
}

function getDataByMode () {
  return {
    inspection: [
      {
        title: '我的数据',
        data: [
          {
            id: '',
            name: '轨迹',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '收藏点位',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '任务地点',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      }, {
        title: '上报问题',
        data: [
          {
            id: '',
            name: '正常',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '未解决',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '已解决',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      }, {
        title: '巡林区域',
        data: [
          {
            id: '',
            name: '本期已巡',
            iconName: '',
            eventName: '',
            selected: false
          }, {
            id: '',
            name: '本月已巡',
            iconName: '',
            eventName: '',
            selected: false
          }
        ]
      }
    ],
    supervision: [
      {
        title: '底图类型',
        data: [
          {
            id: 'TDT_VEC',
            name: '划线底图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }, {
            id: 'TDT_IMG',
            name: '卫星影像图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }, {
            id: 'TDT_TER',
            name: '地形底图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }
        ]
      }, {
        title: '显示要素',
        data: [
          {
            id: '',
            name: '正在巡',
            iconName: '',
            eventName: ''
          }, {
            id: '',
            name: '巡护轨迹',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '覆盖范围',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '收藏点位',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '视频监控',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '责任区',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      }, {
        title: '问题类型',
        data: [
          {
            id: '',
            name: '病虫害',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '自然灾害',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '火灾',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '偷伐',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '野生动物',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '野生植物',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '毁林开垦',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '动物毁林',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '其他情况',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '正常情况',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      }
    ],
    resource: [
      {
        title: '底图类型',
        data: [
          {
            id: 'TDT_VEC',
            name: '划线底图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }, {
            id: 'TDT_IMG',
            name: '卫星影像图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }, {
            id: 'TDT_TER',
            name: '地形底图',
            iconName: '',
            eventName: 'changeBaseLayer',
            selected: false
          }
        ]
      },
      {
        title: '林地资源数据',
        data: [
          {
            id: '',
            name: '林地小班',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '林地分布',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '人工林与天然林',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '公益林与商品林',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '林地保护等级',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      },
      {
        title: '湿地资源数据',
        data: [
          {
            id: '',
            name: '湿地小班',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '湿地专题',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      },
      {
        title: '业务数据',
        data: [
          {
            id: '',
            name: '公示牌',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '变化图斑',
            iconName: '',
            eventName: '',
            checkable: false
          },
          {
            id: '',
            name: '护林员责任区',
            iconName: '',
            eventName: '',
            checkable: false
          }, {
            id: '',
            name: '视频监控',
            iconName: '',
            eventName: '',
            checkable: false
          }
        ]
      }
    ]
  }
}
