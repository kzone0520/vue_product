webpackJsonp([4],{253:function(A,t,a){"use strict";function n(A){o||a(356)}Object.defineProperty(t,"__esModule",{value:!0});var e=a(281),s=a.n(e);for(var i in e)"default"!==i&&function(A){a.d(t,A,function(){return e[A]})}(i);var r=a(360),o=!1,c=a(5),f=n,l=c(s.a,r.a,!1,f,"data-v-a8c1ff62",null);l.options.__file="src/components/chat/chat.vue",t.default=l.exports},260:function(A,t,a){A.exports={default:a(261),__esModule:!0}},261:function(A,t,a){var n=a(6),e=n.JSON||(n.JSON={stringify:JSON.stringify});A.exports=function(A){return e.stringify.apply(e,arguments)}},281:function(A,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(260),e=function(A){return A&&A.__esModule?A:{default:A}}(n);t.default={data:function(){return{question:"",answer:"",talkArr:"",wait:!1}},created:function(){var A=this,t=localStorage;this.talkArr=JSON.parse(t.getItem("talk"))?JSON.parse(t.getItem("talk")):[],setTimeout(function(){A.$refs.abc.scrollTop=A.$refs.abc.scrollHeight,console.log("我",A.$refs.abc.scrollTop,A.$refs.abc.scrollHeight)},0)},methods:{send:function(A){if(""!=this.question){switch(window.e?A.keyCode:A.which){case 13:this.getAns();break;case 27:this.question=""}}},getAns:function(){var A=this;this.talkArr.push({type:"Q",msg:this.question,time:new Date,identity:"human"}),this.wait=!0,setTimeout(function(){A.$refs.abc.scrollTop=A.$refs.abc.scrollHeight,console.log("我",A.$refs.abc.scrollTop,A.$refs.abc.scrollHeight)},0),console.log("正在获取回答..."),this.$http.jsonp("https://query.yahooapis.com/v1/public/yql",{params:{q:'select * from json where url="http://api.qingyunke.com/api.php?key=free&appid=0&msg='+this.question+'"',format:"json"}}).then(function(t){t.body.query.results||A.$toast({message:"api不稳定，请您重新输入",position:"middle",duration:2e3}),A.answer=t.body.query.results.json.content,A.talkArr.push({type:"A",msg:A.answer,time:new Date,identity:"AI"}),A.wait=!1,setTimeout(function(){A.$refs.abc.scrollTop=A.$refs.abc.scrollHeight},0),localStorage.setItem("talk",(0,e.default)(A.talkArr))},function(A){console.log("发送失败"+A.status)}),this.question=""}}}},356:function(A,t,a){var n=a(357);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);a(4)("325e40da",n,!1,{})},357:function(A,t,a){var n=a(237);t=A.exports=a(3)(!1),t.push([A.i,"\np[data-v-a8c1ff62] {\n    font-size: 16px;\n    line-height: 30px;\n    color: black;\n}\n.Q[data-v-a8c1ff62] {\n    text-align: right;\n    padding-right: 50px;\n}\n.Q p[data-v-a8c1ff62] {\n    float: right;\n    background: rgb(146, 228, 146);\n    padding: 0 20px;\n    border-radius: 16px;\n}\n.A[data-v-a8c1ff62] {\n    text-align: left;\n    padding-left: 50px;\n}\n.A p[data-v-a8c1ff62] {\n    float: left;\n    background: rgb(248, 248, 17);\n    padding: 0 20px;\n    border-radius: 16px;\n}\nul>li span[data-v-a8c1ff62] {\n    font-size: 10px;\n    color: gray;\n}\n.inp[data-v-a8c1ff62] {\n    box-sizing: border-box;\n    position: fixed;\n    bottom: 50px;\n    left: 0;\n    display: flex;\n    width: 100%;\n}\ninput[data-v-a8c1ff62]{\n    margin: 0;\n}\n.wrap[data-v-a8c1ff62] {\n    height: 537px;\n    overflow-y: scroll;\n    background: white;\n}\n.clear[data-v-a8c1ff62]::after {\n    content: '';\n    display: block;\n    clear: both;\n}\n.wait[data-v-a8c1ff62] {\n    height: 50px;\n    border: none;\n}\nli[data-v-a8c1ff62] {\n    position: relative;\n}\n.human[data-v-a8c1ff62], .AI[data-v-a8c1ff62] {\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n}\n.human[data-v-a8c1ff62] {\n    background: url("+n(a(358))+") no-repeat;\n    position: absolute;\n    right: 6px;\n    top: 8px;\n}\n.AI[data-v-a8c1ff62] {\n    background: url("+n(a(359))+") no-repeat;\n    position: absolute;\n    left: 6px;\n    top: 8px;\n}\n",""])},358:function(A,t){A.exports="data:image/jpeg;base64,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"},359:function(A,t){A.exports="data:image/jpeg;base64,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"},360:function(A,t,a){"use strict";var n=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{ref:"abc",staticClass:"wrap"},[n("ul",[A._l(A.talkArr,function(t,a){return n("li",{key:a,staticClass:"clear"},[n("div",{class:t.identity}),A._v(" "),n("div",{class:t.type},[n("span",[A._v(A._s(A._f("convertData")(t.time,"YYYY-MM-DD HH:mm:ss")))]),n("br"),A._v(" "),n("p",[A._v(A._s(t.msg))])])])}),A._v(" "),A.wait?n("img",{staticClass:"wait",attrs:{src:a(361),height:"30"}}):A._e()],2),A._v(" "),n("div",{staticClass:"inp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:A.question,expression:"question"}],attrs:{type:"text"},domProps:{value:A.question},on:{keydown:function(t){A.send(t)},input:function(t){t.target.composing||(A.question=t.target.value)}}}),A._v(" "),n("mt-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:A.getAns}},[A._v("发送")])],1)])},e=[];n._withStripped=!0;var s={render:n,staticRenderFns:e};t.a=s},361:function(A,t,a){A.exports=a.p+"assets/loadding1.gif"}});