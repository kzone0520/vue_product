webpackJsonp([12],{243:function(t,n,e){"use strict";function a(t){c||e(329)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(270),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var r=e(331),c=!1,p=e(5),u=a,d=p(s.a,r.a,!1,u,"data-v-115d55a0",null);d.options.__file="src/components/funny/funny_pic.vue",n.default=d.exports},270:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(13),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{picList:[],page:1}},methods:{getPic:function(t){var n=this;this.$axios.get("https://www.apiopen.top/satinGodApi?type=3&page="+t).then(function(t){n.picList=t.data.data}).catch(function(t){console.log(t)})}},created:function(){this.getPic(this.page)},mounted:function(){var t=this;i.default.$on("changepage",function(n){t.page=n})},watch:{page:function(){this.getPic(this.page)}}}},329:function(t,n,e){var a=e(330);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("42736fa3",a,!1,{})},330:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\n.header[data-v-115d55a0] {\n    height: 70px;\n    position: relative;\n}\n.img[data-v-115d55a0] {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.uname[data-v-115d55a0] {\n    position: absolute;\n    top: 14px;\n    left: 70px;\n    font-size: 16px;\n    color: #0094ff;\n}\n.ctime[data-v-115d55a0] {\n    position: absolute;\n    top: 36px;\n    left: 70px;\n    font-size: 12px;\n}\n.pic[data-v-115d55a0] {\n    width: 100%;\n}\nh4[data-v-115d55a0] {\n    margin-left: 10px;\n    width: 96%;\n}\n\n",""])},331:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("ul",t._l(t.picList,function(n,a){return e("li",{key:a},[e("div",{staticClass:"header"},[e("img",{staticClass:"img",attrs:{src:n.header,alt:"toux"}}),t._v(" "),e("span",{staticClass:"uname",domProps:{textContent:t._s(n.username)}}),t._v(" "),e("span",{staticClass:"ctime",domProps:{textContent:t._s(n.passtime)}})]),t._v(" "),e("h4",[t._v(t._s(n.text))]),t._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"item.image"}],staticClass:"pic"}),t._v(" "),e("hr")])})),t._v(" "),e("page-vue")],1)},i=[];a._withStripped=!0;var s={render:a,staticRenderFns:i};n.a=s}});