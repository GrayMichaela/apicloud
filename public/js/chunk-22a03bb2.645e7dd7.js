(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22a03bb2"],{"0ffb":function(e,t,a){var n=a("c079");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("b3ff955a",n,!0,{})},c079:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"",""])},c3b7:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.footer[data-v-9633c4ee] {\n  display: none;\n  position: absolute;\n  top: 1.33333rem;\n  left: 0;\n  height: 4rem;\n  width: 100vh;\n  z-index: 99999999;\n  margin: 0.26667rem;\n}\n.footer .item[data-v-9633c4ee] {\n  margin-left: 0;\n}\n",""])},e444:function(e,t,a){"use strict";a.r(t);var n={name:"SAgorartc",props:{appId:{type:String,default:"",required:!0},channelName:{type:String,default:"channel0001"},frameName:{type:String,default:"",required:!0},rectFrame:{type:Object,default:function(){return{x:0,y:60,w:"auto",h:300}}}},data:function(){return{}},mounted:function(){this.$acApi&&(this.openAgorartcFrame(),this.setFooter())},beforeDestroy:function(){this.$acApi&&(this.$acApi.execScript({frameName:this.frameName,script:"destroy();"}),this.$acApi.closeFrame({name:this.frameName}))},methods:{openAgorartcFrame:function(){this.$acApi.closeFrame({name:this.frameName}),this.$acApi.openFrame({name:this.frameName,url:"./html/frm_AgoraRPC.html",pageParam:{data:{appId:this.appId,channelName:this.channelName,frameName:this.frameName,rectFrame:this.rectFrame}},rect:this.rectFrame})},setupLocalVideo:function(){this.$acApi.execScript({frameName:this.frameName,script:"setupLocalVideo();"})},switchCamera:function(){this.$acApi.execScript({frameName:this.frameName,script:"switchCamera();"})},joinChannel:function(){this.$acApi.execScript({frameName:this.frameName,script:"joinChannel();"})},leaveChannel:function(){this.$acApi.execScript({frameName:this.frameName,script:"leaveChannel();"})},setFooter:function(){var e=document.querySelector(".footer");e.style.top=this.rectFrame.y+this.rectFrame.h+"px",e.style.display="block"}}},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("van-button",{staticClass:"item",on:{click:e.setupLocalVideo}},[e._v("本地设置")]),e._v(" "),a("van-button",{staticClass:"item",on:{click:e.switchCamera}},[e._v("切换镜头")]),e._v(" "),a("van-button",{staticClass:"item",on:{click:e.joinChannel}},[e._v("加入频道")]),e._v(" "),a("van-button",{staticClass:"item",on:{click:e.leaveChannel}},[e._v("离开频道")])],1)},i=[],c=a("2455");function o(e){a("ff75")}var s=!1,m=o,f="data-v-9633c4ee",p=null,l=Object(c["a"])(n,r,i,s,m,f,p),h=l.exports,u={name:"AgorartcDemo",components:{SAgorartc:h},data:function(){return{appId:"832df3980d10426badc7c58680531f7f"}},methods:{}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("s-agorartc",{attrs:{appId:e.appId,frameName:"frm_Agorartc"}})],1)},v=[];function b(e){a("0ffb")}var N=!1,g=b,A="data-v-43f6caf1",y=null,C=Object(c["a"])(u,d,v,N,g,A,y);t["default"]=C.exports},ff75:function(e,t,a){var n=a("c3b7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("499e").default;r("fa8f3c78",n,!0,{})}}]);