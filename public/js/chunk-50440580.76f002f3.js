(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50440580"],{"1d3d":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n.account-operate[data-v-123e466c] {\n  margin-top: 0.26667rem;\n}\n.account-operate .van-cell[data-v-123e466c] {\n  color: #696969;\n  font-size: 0.45333rem;\n}\n.van-cell__left-icon[data-v-123e466c],\n.van-cell__right-ico[data-v-123e466c] {\n  font-size: 0.45333rem !important;\n}\n",""])},"48ac":function(e,n,t){"use strict";t.r(n);var a=t("8b1e"),c=t("603b"),o=t("cae7"),r=t("ca00"),s=t("1704"),u={name:"AccountCenter",components:{PageHeader:c["a"],AccountHeader:o["a"]},data:function(){return{menusForAccountPage:[],defaultMenusForAccountPage:[{menuName:"个人资料",menuIcon:"contact",menuUrl:"/accountInfo"},{menuName:"修改密码",menuIcon:"bag-o",menuUrl:"/updatePassword"},{menuName:"意见反馈",menuIcon:"records",menuUrl:"/adviceFeedback"},{menuName:"关于",menuIcon:"upgrade",menuUrl:"/appVersionCheck"}]}},computed:{childMenusForAccountPage:function(){return Object(a["a"])()}},created:function(){this.menusForAccountPage=this.childMenusForAccountPage.concat(this.defaultMenusForAccountPage)},methods:{handleScannerLogin:function(){if(r["b"]){var e=this,n=this.$acApi.require("FNScanner");n&&n.open({autorotation:!1},(function(t,a){if(t)if(console.log("ret",t),"success"===t.eventType){console.log("code",t.content);var c=t.content;s["a"].qrCodeLogin(c).then((function(n){if(console.log("resdddd:",n),n)e.$toast.success("登录成功");else{var t="登录失败，原因:".concat(n.Message);e.$toast.fail(t)}})).catch((function(e){console.log("res",e)})).finally((function(){n.closeView()}))}else n.closeView();else n.closeView()}))}}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"page-content"},[t("account-header"),e._v(" "),t("div",{staticClass:"account-operate"},[t("van-cell",{attrs:{title:"扫码登录",icon:"award-o","is-link":"",size:"large"},on:{click:e.handleScannerLogin}}),e._v(" "),e._l(e.menusForAccountPage,(function(e,n){return t("van-cell",{key:n,attrs:{title:e.menuName,icon:e.menuIcon,to:e.menuUrl,"is-link":"",size:"large"}})}))],2)],1)])},l=[],d=t("2455");function m(e){t("5215")}var f=!1,v=m,h="data-v-123e466c",g=null,p=Object(d["a"])(u,i,l,f,v,h,g);n["default"]=p.exports},5215:function(e,n,t){var a=t("1d3d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=t("499e").default;c("68f37dd4",a,!0,{})},5378:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n.account-header[data-v-04e869ea] {\n  width: 100%;\n  height: 5.86667rem;\n  text-align: center;\n}\n.account-header .account-header-avatar[data-v-04e869ea] {\n  display: inline-block;\n  width: 3.73333rem;\n  height: 3.73333rem;\n  margin-top: 0.35556rem;\n  border-radius: 50%;\n}\n.account-header .account-header-name[data-v-04e869ea] {\n  display: block;\n  color: #131313;\n  font-size: 0.69333rem;\n}\n.account-logout[data-v-04e869ea] {\n  text-align: center;\n  margin-bottom: 0.4rem;\n}\n.account-logout .van-button[data-v-04e869ea] {\n  width: 5.33333rem;\n}\n.account-logout .van-button--normal[data-v-04e869ea] {\n  font-size: 0.45333rem;\n  font-weight: 600;\n}\n",""])},beac:function(e,n,t){var a=t("5378");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=t("499e").default;c("5f7600ee",a,!0,{})},cae7:function(e,n,t){"use strict";var a=t("47df"),c=t("ca00"),o={name:"AccountHeader",props:{},data:function(){return{userAvatar:"",userName:""}},computed:{userInfo:function(){return Object(a["a"])()}},created:function(){Object(c["d"])(this.userInfo)&&Object(c["d"])(this.userInfo.Avatar)?this.userAvatar=this.userInfo.Avatar:this.userAvatar="./img/temp/2.png",Object(c["d"])(this.userInfo)&&Object(c["d"])(this.userInfo.UserName)?this.userName=this.userInfo.UserName:this.userName="测试账户"},methods:{Logout:function(){}}},r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"account-header"},[t("img",{staticClass:"account-header-avatar",attrs:{src:e.userAvatar}}),e._v(" "),t("span",{staticClass:"account-header-name"},[e._v(e._s(e.userInfo.UserName))])]),e._v(" "),t("div",{staticClass:"account-logout"},[t("van-button",{attrs:{type:"info",plain:""},on:{click:e.Logout}},[e._v("退出登录")])],1)])},s=[],u=t("2455");function i(e){t("beac")}var l=!1,d=i,m="data-v-04e869ea",f=null,v=Object(u["a"])(o,r,s,l,d,m,f);n["a"]=v.exports}}]);