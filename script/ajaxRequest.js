/**
 * 针对apiCloud的模块页面，封装ajax请求
 */

/**
 * get请求
 * @param {*} url 请求地址
 * @param {*} callback  回调函数
 */
// eslint-disable-next-line no-unused-vars
function getHttp (url, callback) {
  httpRequest(url, null, 'get', callback)
}

/**
 * post请求
 * @param {*} url 请求地址
 * @param {*} data 请求body参数
 * @param {*} callback 回调函数
 */
// eslint-disable-next-line no-unused-vars
function postHttp (url, data, callback) {
  httpRequest(url, data, 'post', callback)
}

/**
 * put请求
 * @param {*} url 请求地址
 * @param {*} data 请求body参数
 * @param {*} callback 回调函数
 */
// eslint-disable-next-line no-unused-vars
function putHttp (url, data, callback) {
  httpRequest(url, data, 'put', callback)
}

/**
 * delete请求
 * @param {*} url 请求地址
 * @param {*} callback 回调函数
 */
// eslint-disable-next-line no-unused-vars
function delHttp (url, callback) {
  httpRequest(url, null, 'delete', callback)
}

/**
 * 通用ajax请求函数
 * @param {*} url
 * @param {*} data
 * @param {*} method
 * @param {*} callback
 */
function httpRequest (url, data, method, callback) {
  var token = window.$api.getStorage('CurrentUser_Token')
  var header = {}
  header['Content-Type'] = 'application/json;charset=utf-8'
  if (token && header !== '') {
    header['Authorization'] = 'Bearer ' + token
  }

  window.api.ajax({
    url,
    method: method,
    headers: header,
    data: {
      body: data
    },
    timeout: getAppGlobalConfig().httpClientTimeout
  }, function (ret, err) {
    if (callback) {
      callback(ret, err)
    }
  })
}

/**
 * 获取通用配置
 */
function getAppGlobalConfig () {
  var publicAppConfig = {}
  var publicAppConfigStr = localStorage.getItem('publicAppConfig')
  if (publicAppConfigStr) {
    publicAppConfig = JSON.parse(publicAppConfigStr)
  }
  return publicAppConfig
}
