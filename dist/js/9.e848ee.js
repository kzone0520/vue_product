webpackJsonp([9],{244:function(t,n,e){"use strict";function a(t){p||e(332)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(271),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);var r=e(334),p=!1,u=e(5),d=a,c=u(o.a,r.a,!1,d,"data-v-23d7e054",null);c.options.__file="src/components/funny/funny_word.vue",n.default=c.exports},271:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(13),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{wordList:[],page:1}},methods:{getWord:function(t){var n=this;this.$axios.get("https://www.apiopen.top/satinGodApi?type=2&page="+t).then(function(t){n.wordList=t.data.data}).catch(function(t){console.log(t)})}},created:function(){this.getWord(this.page)},mounted:function(){var t=this;i.default.$on("changepage",function(n){t.page=n})},watch:{page:function(){this.getWord(this.page)}}}},332:function(t,n,e){var a=e(333);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("c35aede6",a,!1,{})},333:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\n.header[data-v-23d7e054] {\n    height: 70px;\n    position: relative;\n}\n.img[data-v-23d7e054] {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.uname[data-v-23d7e054] {\n    position: absolute;\n    top: 14px;\n    left: 70px;\n    font-size: 16px;\n    color: #0094ff;\n}\n.ctime[data-v-23d7e054] {\n    position: absolute;\n    top: 36px;\n    left: 70px;\n    font-size: 12px;\n}\np[data-v-23d7e054] {\n    width: 96%;\n    margin: 0 auto;\n    font-size: 18px;\n    color: black;\n}\n",""])},334:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("ul",t._l(t.wordList,function(n,a){return e("li",{key:a},[e("div",{staticClass:"header"},[e("img",{staticClass:"img",attrs:{src:n.header,alt:"toux"}}),t._v(" "),e("span",{staticClass:"uname",domProps:{textContent:t._s(n.username)}}),t._v(" "),e("span",{staticClass:"ctime",domProps:{textContent:t._s(n.passtime)}})]),t._v(" "),e("p",[t._v(t._s(n.text))]),t._v(" "),e("hr")])})),t._v(" "),e("page-vue")],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};n.a=o}});