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

  // oidc配置(必须先在框架中进行OIDC配置才能使用)
  oidcSettings: {
    // 是否启动oidc认证,如果启动认证，那么除了路由的meta设置了isPublic: true的所有路由都必须要登录才能访问，
    isActivate: false,
    // isActivate: false,
    // 认证服务
    authority: 'https://lincao.dev.xdhzz.com:20007/framework',
    // 客户端ID
    clientId: 'f20d24881006bb2a',
    // 回调地址
    redirectUri: 'http://localhost:8080/forestry/oidc-callback',
    // 认证方式
    responseType: 'code',
    // 授权范围
    scope: 'app openid profile Wit3LakeApi offline_access',
    // 是否自动静默刷新，如果true,则在access_token过期前会自动静默刷新
    automaticSilentRenew: true,
    // 静默刷新地址
    silentRedirectUri: 'http://localhost:8080/forestry/silent-renew-oidc.html'
  },

  /** 不启用网关时配置模块host地址,其中webHost是用于web端配置接口代理，appHost是用于手机端配置真实接口 */
  hostConfig: {
     // 框架地址
     framework: 'https://lincao.dev.xdhzz.com:20007/framework',
     lincao: 'https://lincao.dev.xdhzz.com:20007/lincao',
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
  signalrServerUrl: 'http://192.168.0.200:63192/IMHub'
}

localStorage.setItem('publicAppConfig', JSON.stringify(publicAppConfig))
