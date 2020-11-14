var publicAppConfig = {
  /**
     * 是否使用环境变量来区分Api的host地址
     */
  isUseENVWay: false,
  /**
     * 是否使用网关
     */
  isUseGateWare: false,
  /**
    * 网关地址
    */
  gatewayAddress: '',

  // 移动模式下是否需要登录
  isNeedLogin: true,

  // 移动模式下配置的登录地址
  loginUrl: 'https://lincao.dev.xdhzz.com:20007/framework/account/AppOIDCClient?clientId=7da6c633e951b359',

  // 是否使用本地菜单（config/menu.config, 一般是使用框架配置菜单，开发时为了方便可以使用本地菜单,不需要登录时也使用本地菜单）
  isUseLocalMenus: true,

  // oidc配置(只有在Web开发模式下才有效)
  oidcSettings: {
    // 是否启动oidc认证,如果启动认证，那么除了路由的meta设置了isPublic: true的所有路由都必须要登录才能访问，
    isActivate: true,
    // isActivate: false,
    // 认证服务
    authority: 'https://lincao.dev.xdhzz.com:20007/framework',
    // 客户端ID
    clientId: '7da6c633e951b359',
    // 回调地址
    redirectUri: 'http://localhost:8080/oidc-callback',
    // 认证方式
    responseType: 'code',
    // 授权范围
    scope: 'app openid profile Wit3LakeApi offline_access',
    // 是否自动静默刷新，如果true,则在access_token过期前会自动静默刷新
    automaticSilentRenew: true,
    // 静默刷新地址
    silentRedirectUri: 'http://localhost:8080/silent-renew-oidc.html',
    // 表示APP登录
    extraQueryParams: {
      vwnm: 'app'
    }
  },

  /** 不启用网关时配置模块host地址,其中webHost是用于web端配置接口代理，appHost是用于手机端配置真实接口 */
  hostConfig: {
    // 框架地址
    framework: 'https://lincao.dev.xdhzz.com:20007/framework',
    lincao: 'https://lincao.dev.xdhzz.com:20007/lincao',
    lzz: 'https://lincao.dev.xdhzz.com:20007/lzz', // 林长制
    //  文件服务
    file: 'http://14.205.92.204:8000/filesystem' // 文件接口
  },
  /**
    * 请求超时的毫秒数
    */
  httpClientTimeout: 10000,
  /**
   * signalr服务端地址
   */
  // signalrServerUrl: 'https://lincao.dev.xdhzz.com:20007/signalRHub',
  signalrServerUrl: 'https://apiserver.cdhzz.net/signalRHub',
  /**
   * 巡林地图的相关配置
   */
  xlMap: {
    // 天地图token
    tdtToken: '50f6104f974b8d23a6359ebc93984dac',
    // 地图默认视图位置
    default: {
      center: [102.6874723418048, 25.05227872409171],
      zoom: 17
    },
    /**
     * 地图配置
     */
    config: {
      // 轨迹的buffer半径，单位 千米
      guiJiBufferRadius: 0.05,
      // 上报问题图标大小
      shangBaoWenTiIconSize: 40,
      // 定位参数
      locationParams: {
        zoom: 16
      }
    },
    // 地图中使用的各类api接口地址
    api: {
      // 责任区
      zeRenQu: 'http://minio.zhlc.yunnanforestry.cn:20006/tmp/zerenqu.json',
      // 轨迹
      guiJi: 'http://minio.zhlc.yunnanforestry.cn:20006/tmp/guiji.json',
      // 上报问题列表
      shangBaoWenTi: 'https://lincao.dev.xdhzz.com:20007/lzz/api/Inspection/GetMobileProblemPagerList',
      // 林地小班点击查询
      linDiXiaoBanClick: 'http://220.163.43.214/geodbService3.65/geodata/queryByPoint.do?param={"type":1,"xy":"{x},{y}","tableName":"TERHWDJfUA=="}'
    }
  },
  signalr: {
    url: 'https://apiserver.cdhzz.net/signalRHub',
    appid: '832df3980d10426badc7c58680531f7f'
  }
}

localStorage.setItem('publicAppConfig', JSON.stringify(publicAppConfig))
