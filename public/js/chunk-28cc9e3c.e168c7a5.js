(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28cc9e3c"],{"0c3a":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"",""])},"4fa0":function(t,e,a){var n=a("0c3a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("2be1580c",n,!0,{})},5378:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.account-header[data-v-04e869ea] {\n  width: 100%;\n  height: 5.86667rem;\n  text-align: center;\n}\n.account-header .account-header-avatar[data-v-04e869ea] {\n  display: inline-block;\n  width: 3.73333rem;\n  height: 3.73333rem;\n  margin-top: 0.35556rem;\n  border-radius: 50%;\n}\n.account-header .account-header-name[data-v-04e869ea] {\n  display: block;\n  color: #131313;\n  font-size: 0.69333rem;\n}\n.account-logout[data-v-04e869ea] {\n  text-align: center;\n  margin-bottom: 0.4rem;\n}\n.account-logout .van-button[data-v-04e869ea] {\n  width: 5.33333rem;\n}\n.account-logout .van-button--normal[data-v-04e869ea] {\n  font-size: 0.45333rem;\n  font-weight: 600;\n}\n",""])},afff:function(t,e,a){"use strict";a.r(e);var n=a("1704"),o=a("cae7"),c={name:"AccountInfo",components:{AccountHeader:o["a"]},data:function(){return{userInfo:null}},created:function(){this.init()},methods:{init:function(){var t=this;this.$toast.loading({mask:!0,message:"加载中..."}),n["a"].getUserInfo().then((function(e){t.$toast.clear(),t.userInfo=e})).catch((function(){})).finally((function(){}))}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content"},[a("account-header"),t._v(" "),a("van-cell-group",{attrs:{title:"基本信息"}},[a("van-cell",{attrs:{title:"用户名称",value:t.userInfo&&t.userInfo.Name}}),t._v(" "),a("van-cell",{attrs:{title:"联系电话",value:t.userInfo&&t.userInfo.Mobile}}),t._v(" "),a("van-cell",{attrs:{title:"邮箱",value:t.userInfo&&t.userInfo.Email}})],1)],1)},s=[],u=a("2455");function i(t){a("4fa0")}var l=!1,f=i,d="data-v-06ce3553",v=null,h=Object(u["a"])(c,r,s,l,f,d,v);e["default"]=h.exports},beac:function(t,e,a){var n=a("5378");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("5f7600ee",n,!0,{})},cae7:function(t,e,a){"use strict";var n=a("47df"),o=a("ca00"),c={name:"AccountHeader",props:{},data:function(){return{userAvatar:"",userName:""}},computed:{userInfo:function(){return Object(n["a"])()}},created:function(){Object(o["d"])(this.userInfo)&&Object(o["d"])(this.userInfo.Avatar)?this.userAvatar=this.userInfo.Avatar:this.userAvatar="./img/temp/2.png",Object(o["d"])(this.userInfo)&&Object(o["d"])(this.userInfo.UserName)?this.userName=this.userInfo.UserName:this.userName="测试账户"},methods:{Logout:function(){}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"account-header"},[a("img",{staticClass:"account-header-avatar",attrs:{src:t.userAvatar}}),t._v(" "),a("span",{staticClass:"account-header-name"},[t._v(t._s(t.userInfo.UserName))])]),t._v(" "),a("div",{staticClass:"account-logout"},[a("van-button",{attrs:{type:"info",plain:""},on:{click:t.Logout}},[t._v("退出登录")])],1)])},s=[],u=a("2455");function i(t){a("beac")}var l=!1,f=i,d="data-v-04e869ea",v=null,h=Object(u["a"])(c,r,s,l,f,d,v);e["a"]=h.exports}}]);