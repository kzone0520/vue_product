webpackJsonp([14],{251:function(t,n,e){"use strict";function i(t){c||e(348)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(278),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);var r=e(350),c=!1,l=e(5),u=i,d=l(s.a,r.a,!1,u,"data-v-3396e6d1",null);d.options.__file="src/components/contact/contact.vue",n.default=d.exports},278:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{title:"WeChat",msg:"",code:"let arr = [8, 2, 1, 0, 5, 6],\n    index = [2, 0, 5, 2, 3, 2, 1, 3, 4, 1, 3],\n    tel = '';\nindex.forEach(element => {\n    tel += arr[element]\n})\nconsole.log('WeChat：' + tel);",n:0}},methods:{loop:function(){var t=this;this.n<=this.code.length-1&&(this.msg+=this.code.slice(this.n,this.n+1),setTimeout(function(){t.n++,t.loop()},80))}},created:function(){this.loop()}}},348:function(t,n,e){var i=e(349);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(4)("564b2708",i,!1,{})},349:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\nh4[data-v-3396e6d1] {\n    margin: 30px 0 0 6px;\n}\n.msg[data-v-3396e6d1] {\n    width: 98%;\n    margin: 16px auto;\n    font-size: 16px;\n}\n",""])},350:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav-bar",{attrs:{title:t.title}}),t._v(" "),e("h4",[t._v("联系方式：")]),t._v(" "),e("pre",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}})],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};n.a=s}});