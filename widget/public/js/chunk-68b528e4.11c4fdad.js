(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68b528e4"],{"59b7":function(t,o,a){var n=a("f082");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("499e").default;i("589de99d",n,!0,{})},ed37:function(t,o,a){"use strict";a.r(o);a("d25f");var n=a("ca00"),i=function(t){var o=t.accuracy,a=void 0===o?100:o,i=t.filter,c=void 0===i?1:i,r=t.autoStop,s=void 0===r||r;return new Promise((function(t,o){var i=e();if(console.log("amapLocationObj",i),Object(n["k"])(i.msg))o(new Error(i.msg));else{var r=i.amapLocation;if(r){var l={accuracy:a,filter:c,autoStop:s};r.startLocation(l,(function(a,i){console.log("startLocation",a),console.log("startLocationError",i),Object(n["k"])(i)?(console.log("err.msg",i.msg),o(new Error("获取定位失败，原因:"+i.msg))):a.status?t({longitude:a.longitude,latitude:a.latitude,timestamp:a.timestamp}):o(new Error("获取定位失败"))}))}}}))},c=function(){return new Promise((function(t,o){var a=e();if(Object(n["k"])(a.msg))o(new Error(a.msg));else{var i=a.amapLocation;i.stopLocation(),t()}}))},e=function(){var t=null,o="";if(Object(n["i"])())try{if(t=window.api.require("aMapLocation"),Object(n["j"])(t))throw new Error("请首先加载aMapLocation模块")}catch(a){o="请首先加载aMapLocation模块"}else o="请在App环境下使用该功能";return{amapLocation:t,msg:o}},r={name:"AmapLocationDemo",data:function(){return{loading:!1,location:null}},methods:{startLocationOp:function(){var t=this;this.$toast.loading({mask:!0,message:"加载中..."}),i({autoStop:!1}).then((function(o){t.$toast.success("获取定位成功"),t.location=o})).catch((function(o){console.log("geterror",o),t.$toast.fail(o.message)}))},stopLocationOp:function(){var t=this;c().then((function(){t.$toast.success("停止成功")})).catch((function(o){t.$toast.fail(o)}))}}},s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("van-button",{on:{click:t.startLocationOp}},[t._v("开始定位")]),t._v(" "),a("van-button",{on:{click:t.stopLocationOp}},[t._v("停止定位")]),t._v(" "),a("van-cell-group",{attrs:{title:"定位信息"}},[a("van-cell",{attrs:{title:"经度",value:t.location&&t.location.longitude}}),t._v(" "),a("van-cell",{attrs:{title:"纬度",value:t.location&&t.location.latitude}}),t._v(" "),a("van-cell",{attrs:{title:"时间戳",value:t.location&&t.location.timestamp}})],1)],1)},l=[],u=a("2455");function p(t){a("59b7")}var f=!1,v=p,m="data-v-1097cd26",d=null,g=Object(u["a"])(r,s,l,f,v,m,d);o["default"]=g.exports},f082:function(t,o,a){o=t.exports=a("2350")(!1),o.push([t.i,"",""])}}]);