webpackJsonp([1],{249:function(t,n,e){"use strict";function a(t){d||e(338)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(276),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var r=e(340),d=!1,c=e(5),u=a,p=c(s.a,r.a,!1,u,"data-v-7902280c",null);p.options.__file="src/components/music/musicDetail.vue",n.default=p.exports},253:function(t,n,e){t.exports={default:e(256),__esModule:!0}},254:function(t,n,e){var a=e(156);t.exports=function(t){return Object(a(t))}},256:function(t,n,e){e(257),t.exports=e(6).Object.keys},257:function(t,n,e){var a=e(254),i=e(155);e(258)("keys",function(){return function(t){return i(a(t))}})},258:function(t,n,e){var a=e(153),i=e(6),s=e(14);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],o={};o[t]=n(e),a(a.S+a.F*s(function(){e(1)}),"Object",o)}},260:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(261),s=a(i),o=e(253),r=a(o),d={};d.save=function(t,n){var e=window.localStorage,a=JSON.parse(e.getItem("pords")||"{}");a&&(0,r.default)(a).indexOf(String(t.type))>=0?(0,r.default)(a[t.type]).indexOf(String(t.song_id))>=0?a[t.type][t.song_id]+=n:a[t.type][t.song_id]=n:(a[t.type]={},a[t.type][t.song_id]=n),e.setItem("pords",(0,s.default)(a))},d.del=function(t){var n=window.localStorage,e=JSON.parse(n.getItem("pords")||"{}");delete e[t.type][t.song_id],0===(0,r.default)(e[t.type]).length&&delete e[t.type],n.setItem("pords",(0,s.default)(e))},n.default=d},261:function(t,n,e){t.exports={default:e(262),__esModule:!0}},262:function(t,n,e){var a=e(6),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},276:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(13),s=a(i),o=e(260),r=a(o);n.default={data:function(){return{title:"歌曲详情",type:"",song_id:"",songDetail:{},num:1,isShow:!1}},methods:{reducegGoods:function(){this.num>1&&this.num--},addGoods:function(){this.num++},buynow:function(){this.$toast("暂不支持此功能")},addShopcart:function(){s.default.$emit("changenum",this.num),r.default.save(this.songDetail,this.num),this.isShow=!0},afterEnter:function(){this.isShow=!1}},created:function(){var t=this;this.type=this.$route.query.type,this.song_id=this.$route.query.song_id,this.$axios.get("http://api.apiopen.top/musicRankingsDetails?type="+this.type).then(function(n){n.data.result.forEach(function(n){if(t.song_id===n.song_id)return t.songDetail=n,void t.$set(t.songDetail,"type",t.type)})}).catch(function(t){console.log(t)})}}},338:function(t,n,e){var a=e(339);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("26859c9f",a,!1,{})},339:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\n.pic[data-v-7902280c], .audition[data-v-7902280c], .price[data-v-7902280c], .info[data-v-7902280c] {\n    width: 96%;\n    margin: 2px auto;\n    border: 1px solid gainsboro;\n    border-radius: 8px;\n    background: white;\n    padding: 10px;\n    font-size: 14px;\n    color: gray;\n}\n.wrap[data-v-7902280c] {\n    border: 1px solid gainsboro;\n    border-radius: 16px;\n    text-align: center;\n}\nh3[data-v-7902280c] {\n    width: 98%;\n    border-bottom: 1px solid black;\n    color: blue;\n    padding-bottom: 4px;\n}\n.buyNum[data-v-7902280c] {\n    display: inline-block;\n    margin-top: 10px;\n}\n.buyNum input[data-v-7902280c]{\n    width: 30px;\n    height: 24px;\n    font-size: 20px;\n    padding-top: 0px;\n    padding-left: 8px;\n}\n.btn[data-v-7902280c] {\n    margin-top: 10px;\n    margin-right: 6px;\n}\n.price span[data-v-7902280c] {\n    margin: 0 50px 40px 0;\n}\n.danger[data-v-7902280c] {\n    position: relative;\n    overflow: visible;\n}\n.ball[data-v-7902280c] {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    background: red;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n}\n.ball-enter-active[data-v-7902280c]{\nanimation: bounce-in-data-v-7902280c .5s;\n}\n@keyframes bounce-in-data-v-7902280c {\n0% {\n        /*x,y,z轴的位置*/\n        transform: translate3d(0, 0, 0);\n}\n10% {\n        transform: translate3d(25px, -10px, 0);\n}\n20% {\n        transform: translate3d(50px, -30px, 0);\n}\n30% {\n        transform: translate3d(75px, -45px, 0);\n}\n40% {\n        transform: translate3d(100px, -50px, 0);\n}\n50% {\n        transform: translate3d(120px, -30px, 0);\n}\n60% {\n        transform: translate3d(135px, -15px, 0);\n}\n70% {\n        transform: translate3d(150px, 5px, 0);\n}\n80% {\n        transform: translate3d(160px, 10px, 0);\n}\n100% {\n        transform: translate3d(20px, 280px, 0);\n}\n}\n",""])},340:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("nav-bar",{attrs:{title:t.title}}),t._v(" "),e("div",[e("div",{staticClass:"pic"},[e("div",{staticClass:"wrap"},[e("img",{attrs:{src:t.songDetail.pic_radio,alt:"封面",width:"200",height:"200"}}),t._v(" "),e("audio",{attrs:{src:"",controls:"controls"}})])]),t._v(" "),e("div",{staticClass:"price"},[e("h3",[t._v("曲名："+t._s(t.songDetail.title))]),t._v(" "),e("div",{staticClass:"markprice"},[t._m(0),t._m(1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"buyNum"},[t._v("\n                    购买数量： \n                    "),e("input",{attrs:{type:"button",value:"-"},on:{click:t.reducegGoods}}),t._v(" "),e("input",{attrs:{type:"button",disabled:"disabled",value:t.num}}),t._v(" "),e("input",{attrs:{type:"button",value:"+"},on:{click:t.addGoods}})]),e("br"),t._v(" "),e("mt-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.buynow}},[t._v("立即购买")]),t._v(" "),e("mt-button",{staticClass:"btn danger",attrs:{type:"danger"},on:{click:t.addShopcart}},[t._v("\n                    加入购物车\n                    "),e("transition",{attrs:{name:"ball"},on:{"after-enter":t.afterEnter}},[t.isShow?e("div",{staticClass:"ball"}):t._e()])],1)],1)]),t._v(" "),e("div",{staticClass:"info"},[e("p",[t._v("歌手："+t._s(t.songDetail.author))]),t._v(" "),e("p",[t._v("专辑："+t._s(t.songDetail.album_title))]),t._v(" "),e("p",[t._v("地区："+t._s(t.songDetail.country))]),t._v(" "),e("p",[t._v("语言："+t._s(t.songDetail.language))]),t._v(" "),e("p",[t._v("出品方："+t._s(t.songDetail.si_proxycompany))])])])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v("市场价："),e("s",[t._v("￥4")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v("销售价："),e("strong",{staticStyle:{color:"red","font-size":"24px"}},[t._v("￥2")])])}];a._withStripped=!0;var s={render:a,staticRenderFns:i};n.a=s}});