webpackJsonp([11],{242:function(t,n,e){"use strict";function a(t){d||e(326)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(269),s=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);var r=e(328),d=!1,p=e(5),c=a,f=p(s.a,r.a,!1,c,"data-v-7afb550d",null);f.options.__file="src/components/funny/funny_random.vue",n.default=f.exports},269:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(13),i=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{randomList:[],page:1}},methods:{getrandom:function(t){var n=this;this.$axios.get("https://www.apiopen.top/satinGodApi?type=1&page="+t).then(function(t){n.randomList=t.data.data}).catch(function(t){console.log(t)})}},created:function(){this.getrandom(this.page)},mounted:function(){var t=this;i.default.$on("changepage",function(n){t.page=n})},watch:{page:function(){this.getrandom(this.page)}}}},326:function(t,n,e){var a=e(327);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(4)("c7113a7a",a,!1,{})},327:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\n.header[data-v-7afb550d] {\n    height: 70px;\n    position: relative;\n}\n.img[data-v-7afb550d] {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.uname[data-v-7afb550d] {\n    position: absolute;\n    top: 14px;\n    left: 70px;\n    font-size: 16px;\n    color: #0094ff;\n}\n.ctime[data-v-7afb550d] {\n    position: absolute;\n    top: 36px;\n    left: 70px;\n    font-size: 12px;\n}\np[data-v-7afb550d] {\n    width: 96%;\n    margin: 0 auto;\n    font-size: 18px;\n    color: black;\n}\n.pic[data-v-7afb550d] {\n    width: 100%;\n}\nh4[data-v-7afb550d] {\n    margin-left: 10px;\n    width: 96%;\n}\nvideo[data-v-7afb550d] {\n    width: 100%;\n    height: 240px;\n}\n",""])},328:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("ul",t._l(t.randomList,function(n,a){return e("li",{key:a},[e("div",{staticClass:"header"},[e("img",{staticClass:"img",attrs:{src:n.header,alt:"toux"}}),t._v(" "),e("span",{staticClass:"uname",domProps:{textContent:t._s(n.username)}}),t._v(" "),e("span",{staticClass:"ctime",domProps:{textContent:t._s(n.passtime)}})]),t._v(" "),"text"!=n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"image"===n.type?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"item.image"}],staticClass:"pic",attrs:{alt:"image"}}):t._e(),t._v(" "),"video"===n.type?e("video",{attrs:{src:n.video,controls:"controls"}}):t._e(),t._v(" "),"gif"===n.type?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.gif,expression:"item.gif"}],staticClass:"gif",attrs:{alt:"gif"}}):t._e(),t._v(" "),"text"===n.type?e("p",[t._v(t._s(n.text))]):t._e(),t._v(" "),e("hr")])})),t._v(" "),e("page-vue")],1)},i=[];a._withStripped=!0;var s={render:a,staticRenderFns:i};n.a=s}});