(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0423429a"],{"559e":function(e,n,t){e.exports=t.p+"public/img/t.a4e3c9c1.png"},"6e65":function(e,n,t){"use strict";var i=t("c080"),a=t("6736");n["a"]={GetUnHandedEventList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pageIndex,t=e.pageSize;return Object(i["d"])({url:a["a"].EventTransfer.GetUnHandedEventList,data:{pageIndex:n,pageSize:t}})},GetHandedEventList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pageIndex,t=e.pageSize;return Object(i["d"])({url:a["a"].EventTransfer.GetHandedEventList,data:{pageIndex:n,pageSize:t}})},GetHandingEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pageIndex,t=e.pageSize;return Object(i["d"])({url:a["a"].EventTransfer.GetHandingEvents,data:{pageIndex:n,pageSize:t}})}}},"7a0c":function(e,n,t){var i=t("e061");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("499e").default;a("6e61e2f2",i,!0,{})},a638:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n.myInformation[data-v-4749dbd6] {\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n.myInformation[data-v-4749dbd6] .van-tabs__wrap {\n  border-bottom: 0.02667rem solid #EBEBEB;\n}\n.myInformation[data-v-4749dbd6] .van-tabs__line {\n  background-color: #26B28F;\n}\n.myInformation[data-v-4749dbd6] .van-tab--active {\n  color: #26B28F;\n}\n",""])},a8fb:function(e,n,t){"use strict";t.r(n);t("c5f6");var i=t("6e65"),a=function(){return{list:[],pageIndex:0,pageSize:10,finished:!1,loading:!1,total:0}},s={props:{currentTabIndex:{type:Number}},data:function(){return{datas:{daichuli:a(),chulizhong:a(),yijiejue:a()}}},computed:{list:function(){return[this.datas.daichuli,this.datas.chulizhong,this.datas.yijiejue][this.currentTabIndex-1]}},methods:{refresh:function(){this.list.list=[],this.list.total=0,this.list.pageIndex=0,this.list.finished=!1},toDetail:function(e){this.$router.push({name:"questionDetail",query:{id:e.Id}})},goToEventGrade:function(e,n,t,i,a){this.$router.push("RiverEventGradePage",{Id:n,ToPeopleId:t,IsEvaluationState:e,EfficiencyScore:i,QualityScore:a})},onLoad:function(){var e=this,n=this.currentTabIndex-1;this.list.loading=!0;var t=this.list.pageIndex,a=this.list.pageSize;t+=1;var s=function(n){e.list.total=n.TotalCount,e.list.list=e.list.list.concat(n.PageData),e.list.pageIndex=t,e.list.list=n.PageData,e.list.list.length===n.TotalCount&&(e.list.finished=!0)};return[function(){i["a"].GetUnHandedEventList({pageIndex:t,pageSize:a}).then((function(e){s(e)})).finally((function(){e.list.loading=!1}))},function(){i["a"].GetHandingEvents({pageIndex:t,pageSize:a}).then((function(e){s(e)})).finally((function(){e.list.loading=!1}))},function(){i["a"].GetHandedEventList({pageIndex:t,pageSize:a}).then((function(e){s(e)})).finally((function(){e.list.loading=!1}))}][n]()}}},o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("van-list",{attrs:{finished:e.list.finished},on:{load:e.onLoad},model:{value:e.list.loading,callback:function(n){e.$set(e.list,"loading",n)},expression:"list.loading"}},[i("div",{staticClass:"hz-events"},[e._l(e.list.list,(function(n,a){return i("div",{key:a,staticClass:"hz-event-div",on:{click:function(t){return e.toDetail(n)}}},[i("div",{staticClass:"hz-event-title"},[i("span",[e._v(e._s(n.ObjectName))])]),e._v(" "),i("div",{staticClass:"hz-event-item"},[i("div",{staticClass:"hz-event-img"},[0==n.FileType?i("img",{attrs:{src:n.MiniFileUrl?n.MiniFileUrl:"",alt:""}}):e._e(),e._v(" "),1==n.FileType?i("img",{attrs:{src:t("559e"),alt:""}}):e._e(),e._v(" "),i("div",{staticClass:"hz-event-time"},[e._v(e._s(n.CreateTime))])]),e._v(" "),i("div",{staticClass:"hz-event-info"},[1===e.currentTabIndex?i("div",{staticClass:"hz-event-reach"},[i("span",{staticClass:"hz-event-description-label"},[e._v(e._s(n.MainInspectionItemName))]),e._v(" "),i("span",{staticClass:"hz-question-seal-item"},[e._v(e._s(n.StateDec))])]):2===e.currentTabIndex?i("div",{staticClass:"hz-event-reach-item"},[2==n.IsEvaluationState?i("div",{staticClass:"alread-score"},[e._v("已评分")]):e._e(),e._v(" "),1==n.IsEvaluationState?i("div",{staticClass:"hz-question-seal-item"},[i("span",[e._v("未评分")])]):e._e()]):e._e(),e._v(" "),i("div",{staticClass:"hz-event-patrol-item"},[i("span",{staticClass:"hz-event-patrol-item-des"},[e._v(e._s(n.Description))])]),e._v(" "),i("div",{staticClass:"hz-event-patrol-item"},[i("span",{staticClass:"hz-event-patrol-item-span"},[e._v("上报人:"+e._s(n.PeopleName)+"("+e._s(n.Position)+")")])]),e._v(" "),i("div",{staticClass:"hz-event-patrol-item"},[i("span",{staticClass:"hz-event-patrol-item-span"},[e._v("所属区划:"+e._s(n.PeopleAreaName))])])])]),e._v(" "),i("div",{staticClass:"hz-event-location"},[i("div",{staticClass:"address-icon"},[i("van-icon",{staticClass:"label-md-gray",attrs:{name:"location-o"}})],1),e._v(" "),i("div",{staticClass:"hz-event-detail-address"},[e._v("\n          "+e._s(n.Address.length>15?n.Address:n.FullAddress)+"\n        ")])])])})),e._v(" "),e.list.loading||0!==e.list.list.length?e._e():i("van-empty",{attrs:{description:"暂无数据!"}})],2)])},l=[],r=t("2455");function d(e){t("7a0c")}var c=!1,f=d,v="data-v-03fb7838",p=null,b=Object(r["a"])(s,o,l,c,f,v,p),h=b.exports,m=t("aae1"),u={components:{list:h,SRefresh:m["a"]},data:function(){return{refreshLoading:!1,active:~~this.$route.query.type,tabs:[{id:1,name:"待处理"},{id:2,name:"流转处理中"},{id:3,name:"已解决"}]}},methods:{onRefresh:function(){this.$refs.list.refresh(),this.refreshLoading=!1}}},g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("s-refresh",{staticClass:"myInformation",attrs:{loading:e.refreshLoading},on:{"update:loading":function(n){e.refreshLoading=n},refresh:e.onRefresh}},[t("van-tabs",{model:{value:e.active,callback:function(n){e.active=n},expression:"active"}},e._l(e.tabs,(function(e){return t("van-tab",{key:e.id,attrs:{title:e.name,name:e.id}})})),1),e._v(" "),t("list",{ref:"list",attrs:{currentTabIndex:e.active}})],1)},x=[];function w(e){t("fb01")}var z=!1,y=w,k="data-v-4749dbd6",_=null,I=Object(r["a"])(u,g,x,z,y,k,_);n["default"]=I.exports},aae1:function(e,n,t){"use strict";var i={name:"SRefresh",props:{loading:{require:!0,type:Boolean,default:!1}},computed:{refreshLoading:{get:function(){return this.loading},set:function(e){this.$emit("update:loading",e)}}},methods:{onRefresh:function(){this.$emit("refresh")}}},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("van-pull-refresh",{attrs:{"loading-text":"加载中~","success-text":"你真棒~","pulling-text":"继续拉~","loosing-text":"请放手~"},on:{refresh:e.onRefresh},model:{value:e.refreshLoading,callback:function(n){e.refreshLoading=n},expression:"refreshLoading"}},[e._t("default")],2)},s=[],o=t("2455"),l=!1,r=null,d=null,c=null,f=Object(o["a"])(i,a,s,l,r,d,c);n["a"]=f.exports},e061:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"/*\n * @Author: lixiaojun\n * @Date: 2020-10-29 15:52:30\n * @LastEditors: lixiaojun\n * @LastEditTime: 2020-10-30 14:03:31\n * @Description:  \n */\n.hz-events[data-v-03fb7838] {\n  width: 100%;\n  background-color: #fff;\n}\n.hz-event-div[data-v-03fb7838] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0.26667rem;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n  -webkit-align-items: start;\n      -ms-flex-align: start;\n          align-items: start;\n  border-bottom: 0.02667rem solid #e4e4e4;\n  background-color: #fff;\n  border-radius: 0.05333rem;\n}\n.hz-event-title[data-v-03fb7838] {\n  font-size: 0.4rem;\n  color: #454F74;\n  font-weight: 700;\n  padding-bottom: 0.13333rem;\n}\n.hz-event-location[data-v-03fb7838] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #A1A6BB;\n  font-size: 0.26667rem;\n}\n.hz-event-location .label-md-gray[data-v-03fb7838] {\n  font-size: 0.26667rem;\n  margin-right: 0.13333rem;\n  font-weight: 400;\n}\n.hz-event-location .hz-event-detail-address[data-v-03fb7838] {\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  color: #A1A6BB;\n  font-size: 0.26667rem;\n  font-weight: 400;\n}\n.hz-event-location .address-icon[data-v-03fb7838] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.hz-event-item[data-v-03fb7838] {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n}\n.hz-event-item .hz-event-img[data-v-03fb7838] {\n  position: relative;\n  width: 32%;\n  height: 2.4rem;\n}\n.hz-event-item .hz-event-img img[data-v-03fb7838] {\n  width: 100%;\n  min-height: 90%;\n  max-height: 100%;\n}\n.hz-event-item .hz-event-time[data-v-03fb7838] {\n  position: absolute;\n  width: 100%;\n  padding: 0.13333rem 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-align: center;\n  font-size: 0.26667rem;\n  color: #fff;\n}\n.hz-event-item .hz-event-info[data-v-03fb7838] {\n  width: 67%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.13333rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.hz-event-item .hz-event-reach-item[data-v-03fb7838] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.hz-event-item .hz-event-reach[data-v-03fb7838] {\n  width: 100%;\n  color: #17233d;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.hz-event-item .alread-score[data-v-03fb7838] {\n  padding: 0 0.08rem;\n  border: 0.02667rem solid #2b85e4;\n  border-radius: 0.08rem;\n  font-size: 0.32rem;\n  color: #2b85e4;\n  margin-left: 0.13333rem;\n  white-space: nowrap;\n}\n.hz-event-item .hz-event-patrol-item[data-v-03fb7838] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.hz-event-item .hz-event-patrol-item .hz-event-patrol-item-des[data-v-03fb7838] {\n  color: #0C1648;\n  font-weight: 500;\n  font-size: 0.37333rem;\n  white-space: nowrap;\n  letter-spacing: 0;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  padding: 0.16rem 0;\n}\n.hz-event-item .hz-event-patrol-item .hz-event-patrol-item-span[data-v-03fb7838] {\n  color: #0C1648;\n  font-weight: 400;\n  font-size: 0.26667rem;\n  padding-top: 0.05333rem;\n  letter-spacing: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n.hz-event-item .hz-event-description-label[data-v-03fb7838] {\n  display: inline-block;\n  padding: 0 0.13333rem;\n  margin-right: 0.13333rem;\n  border-radius: 0.10667rem;\n  background-color: rgba(38, 178, 143, 0.2);\n  color: #26B28F;\n  line-height: 0.53333rem;\n  white-space: nowrap;\n  border-radius: 0.08rem;\n}\n.hz-event-item .hz-event-son-item[data-v-03fb7838] {\n  font-size: 0.37333rem;\n  color: #515a6e;\n  white-space: nowrap;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n}\n.hz-event-item .hz-question-seal-item[data-v-03fb7838] {\n  width: 1.06667rem;\n  height: 0.45333rem;\n  border: 0.02667rem solid #ff4949;\n  border-radius: 0.08rem;\n  font-size: 0.26667rem;\n  color: #ff4949;\n  text-align: center;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.hz-event-item .endcolor[data-v-03fb7838] {\n  color: #26B28F;\n  border: 0.02667rem solid #26B28F;\n}\n",""])},fb01:function(e,n,t){var i=t("a638");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("499e").default;a("257b87c6",i,!0,{})}}]);