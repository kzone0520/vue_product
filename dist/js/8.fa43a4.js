webpackJsonp([8],{238:function(t,n,e){"use strict";function i(t){r||e(311)}Object.defineProperty(n,"__esModule",{value:!0});var s=e(265),a=e.n(s);for(var c in s)"default"!==c&&function(t){e.d(n,t,function(){return s[t]})}(c);var o=e(313),r=!1,u=e(5),l=i,f=u(a.a,o.a,!1,l,"data-v-7c5ce25b",null);f.options.__file="src/components/music/music.vue",n.default=f.exports},265:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{title:"音乐商城",musicList:[]}},methods:{changeSort:function(t){}},created:function(){var t=this;this.$axios.get("http://api.apiopen.top/musicRankings").then(function(n){t.musicList=n.data.result}).catch(function(t){console.log(t)})}}},311:function(t,n,e){var i=e(312);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(4)("27ba2730",i,!1,{})},312:function(t,n,e){n=t.exports=e(3)(!1),n.push([t.i,"\n.fenlei[data-v-7c5ce25b]{\n    width: 100%;\n    display: flex;\n    margin-top: 10px;\n    border-bottom: 1px solid gray;\n}\n.song[data-v-7c5ce25b] {\n    width: 350px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n.song li[data-v-7c5ce25b] {\n    height: 20px;\n    overflow: hidden;\n    margin-left: 6px;\n}\n",""])},313:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tmpl"},[e("nav-bar",{attrs:{title:t.title}}),t._v(" "),e("ul",t._l(t.musicList,function(n){return e("li",{key:n.type,staticClass:"fenlei",on:{click:function(n){t.changeSort(n)}}},[e("img",{attrs:{src:n.pic_s210,alt:n.name,height:"150",width:"150"}}),t._v(" "),e("ul",{staticClass:"song"},t._l(n.content,function(i,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"musicDetail",query:{type:n.type,song_id:i.song_id}}}},[t._v("\n                        "+t._s(s+1)+". "+t._s(i.title)+" - "+t._s(i.author)+"\n                    ")])],1)})),t._v(" "),e("hr")])}))],1)},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};n.a=a}});