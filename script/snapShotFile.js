// 截屏文件操作
// eslint-disable-next-line no-unused-vars
var alivcLivePlayer, fsOp, snapShotDir, filePath, timer

// eslint-disable-next-line no-unused-vars
// 初始化
function initSnapShotDir (deviceNum) {
  snapShotDir = 'fs://myvideo/' + deviceNum
  filePath = snapShotDir + '/snapShot.jpg'
  createSnapShotDir()
}

// 创建截屏目录
function createSnapShotDir () {
  fsOp = window.api.require('fs')
  fsOp.createDirSync({
    path: snapShotDir
  })
}

// 删除截屏文件
function deleteSnapShotFile () {
  fsOp = window.api.require('fs')
  fsOp.removeSync({
    path: filePath
  })
}

// 截屏 创建截屏文件并返回文件内容
function createSnapShotFile (snapShotFunc) {
  return new Promise(function (resolve, reject) {
    deleteSnapShotFile()
    snapShotFunc()
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      if (!exist()) {
        var msg = '截屏失败,请视频加载后再试'
        window.api.toast({
          msg: msg
        })
        reject(new Error('截屏失败'))
        return
      }
      var trans = window.api.require('trans')
      trans.decodeImgToBase64({
        imgPath: filePath
      }, function (ret, err) {
        if (ret.status) {
          deleteSnapShotFile()
          var base64Img = 'data:image/jpg;base64,' + ret.base64Str
          clearTimeout(timer)
          timer = null
          resolve(base64Img)
        } else {
          reject(new Error('截屏失败'))
        }
      })
    }, 500)
  })
}

// 判断截屏是否存储
function exist () {
  fsOp = window.api.require('fs')
  var ret = fsOp.existSync({ path: filePath })
  return ret.exist
}

// 读取截屏文件
function readSnapShotFile () {
  fsOp = window.api.require('fs')
  try {
    var fileContent = ''
    var ret = fsOp.openSync({ path: filePath })
    var errorMsg = ''
    if (ret.status) {
      ret = fsOp.readSync({ fd: ret.fd })
      if (ret.status) {
        fileContent = ret.data
      } else {
        errorMsg = ret.msg
      }
      fsOp.closeSync({ fd: ret.fd })
    } else {
      errorMsg = ret.msg
    }
    if (errorMsg !== '') {
      var msg = '读取文件失败,原因：' + errorMsg
      window.api.toast({
        msg: msg
      })
    }
  } catch (ex) {

  }
  return fileContent
}
