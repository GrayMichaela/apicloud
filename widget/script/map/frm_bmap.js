/* eslint-disable no-undef */
var map, pageParam
apiready = function () {
  map = api.require('bMap')
  pageParam = getPageParamData()
  getCoordsFromName()
}

/** 打开地图 */
function openMap (lon, lat) {
  map.open({
    rect: {
      x: 0,
      y: 0
    },
    center: {
      lon: lon,
      lat: lat
    },
    zoomLevel: 14,
    showUserLocation: false,
    fixedOn: pageParam.frameName,
    fixed: true
  }, function (ret) {
    if (ret.status) {
    }
  })
}

/**
 * 获取请求参数
 */
function getPageParamData () {
  var pageParam = {}
  var data = api.pageParam.data
  pageParam.frameName = data.frameName // frame名称
  return pageParam
}

/**
 * 根据地址获取经纬度
 */
function getCoordsFromName () {
  map.getCoordsFromName({
    city: '成都市',
    address: '锦江区'
  }, function (ret, err) {
    if (ret.status) {
      openMap(ret.lon, ret.lat)
    }
  })
}

/** 在地图上显示用户位置 */
function showUserLocation () {
  map.showUserLocation({
    isShow: true,
    trackingMode: 'none'
  })
}

/** 设置地图中心点 */
function setCenter (lon, lat) {
  map.setCenter({
    coords: {
      lon: lon,
      lat: lat
    },
    animation: false
  })
}
