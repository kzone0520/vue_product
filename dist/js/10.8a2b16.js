webpackJsonp([10],{245:function(t,n,e){"use strict";function a(t){c||e(332)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(272),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var r=e(334),c=!1,d=e(5),p=a,u=d(s.a,r.a,!1,p,"data-v-74298c21",null);u.options.__file="src/components/funny/funny_video.vue",n.default=u.exports},272:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(13),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{dataList:[],page:1}},methods:{getVideo:function(t){var n=this;this.$axios.get("https://www.apiopen.top/satinGodApi?type=5&page="+t).then(function(t){n.dataList=t.data.data,n.dataList.forEach(function(t,e){null===t.video&&n.dataList.splice(e,1)})}).catch(function(t){console.log(t)})}},created:function(){this.getVideo(this.page)},mounted:function(){var t=this;i.default.$on("changepage",function(n){t.page=n})},watch:{page:function(){this.getVideo(this.page)}}}},332:function(t,n,e){var a=e(333);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("411a5e9a",a,!1,{})},333:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\nvideo[data-v-74298c21] {\n    width: 100%;\n    height: 240px;\n}\n.header[data-v-74298c21] {\n    height: 70px;\n    position: relative;\n}\n.img[data-v-74298c21] {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.uname[data-v-74298c21] {\n    position: absolute;\n    top: 14px;\n    left: 70px;\n    font-size: 16px;\n    color: #0094ff;\n}\n.ctime[data-v-74298c21] {\n    position: absolute;\n    top: 36px;\n    left: 70px;\n    font-size: 12px;\n}\n.vdo h4[data-v-74298c21] {\n    margin-left: 10px;\n    width: 96%;\n}\n\n\n",""])},334:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("ul",t._l(t.dataList,function(n,a){return e("li",{key:a,staticClass:"vdo"},[e("div",{staticClass:"header"},[e("img",{staticClass:"img",attrs:{src:n.header,alt:"toux"}}),t._v(" "),e("span",{staticClass:"uname",domProps:{textContent:t._s(n.username)}}),t._v(" "),e("span",{staticClass:"ctime",domProps:{textContent:t._s(n.passtime)}})]),t._v(" "),e("h4",{staticClass:"title",domProps:{textContent:t._s(n.text)}}),t._v(" "),"video"===n.type?e("video",{attrs:{src:n.video,controls:"controls"}}):t._e(),t._v(" "),"gif"===n.type?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.gif,expression:"item.gif"}],attrs:{alt:"gif"}}):t._e(),t._v(" "),e("hr")])})),t._v(" "),e("page-vue")],1)},i=[];a._withStripped=!0;var s={render:a,staticRenderFns:i};n.a=s}});