webpackJsonp([13],{241:function(n,t,e){"use strict";function a(n){c||e(323)}Object.defineProperty(t,"__esModule",{value:!0});var i=e(268),o=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,function(){return i[n]})}(r);var u=e(325),c=!1,s=e(5),l=a,f=s(o.a,u.a,!1,l,"data-v-444d8065",null);f.options.__file="src/components/funny/funny.vue",t.default=f.exports},268:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{goBack:function(){this.$router.go(-1)}}}},323:function(n,t,e){var a=e(324);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(4)("2d090a8c",a,!1,{})},324:function(n,t,e){t=n.exports=e(3)(!1),t.push([n.i,"\n.fun-head[data-v-444d8065] {\n    width: 100%;\n    height: 60px;\n    background: hotpink;\n    font-size: 20px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.router-link-exact-active.mui-active[data-v-444d8065] {\n    color: #0094ff;\n}\na[data-v-444d8065] {\n    color: black;\n}\n",""])},325:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tmpl"},[e("div",{staticClass:"fun-head"},[e("a",{staticClass:"mui-action-back mui-icon mui-icon-left-nav mui-pull-left",on:{click:n.goBack}}),n._v(" "),e("router-link",{attrs:{to:{name:"funny_random"}}},[n._v("推荐")]),n._v(" "),e("router-link",{attrs:{to:{name:"funny_word"}}},[n._v("段子")]),n._v(" "),e("router-link",{attrs:{to:{name:"funny_pic"}}},[n._v("图片")]),n._v(" "),e("router-link",{attrs:{to:{name:"funny_video"}}},[n._v("视频")])],1),n._v(" "),e("router-view")],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};t.a=o}});