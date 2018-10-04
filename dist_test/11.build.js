webpackJsonp([11],{

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7afb550d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_funny_random_vue__ = __webpack_require__(338);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
}
var normalizeComponent = __webpack_require__(7)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7afb550d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_funny_random_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7afb550d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_funny_random_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/funny/funny_random.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7afb550d", Component.options)
  } else {
    hotAPI.reload("data-v-7afb550d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueBus = __webpack_require__(15);

var _vueBus2 = _interopRequireDefault(_vueBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            randomList: [],
            page: 1
        };
    },

    methods: {
        getrandom: function getrandom(page) {
            var _this = this;

            this.$axios.get("https://www.apiopen.top/satinGodApi?type=1&page=" + page).then(function (res) {
                _this.randomList = res.data.data;
            }).catch(function (err) {
                console.log(err);
            });
        }
    },
    created: function created() {
        this.getrandom(this.page);
    },
    mounted: function mounted() {
        var that = this;
        _vueBus2.default.$on('changepage', function (pagenum) {
            that.page = pagenum;
        });
    },

    watch: {
        page: function page() {
            this.getrandom(this.page);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("c7113a7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7afb550d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./funny_random.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7afb550d\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./funny_random.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-7afb550d] {\n    height: 70px;\n    position: relative;\n}\n.img[data-v-7afb550d] {\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    margin-left: 10px;\n    margin-top: 10px;\n}\n.uname[data-v-7afb550d] {\n    position: absolute;\n    top: 14px;\n    left: 70px;\n    font-size: 16px;\n    color: #0094ff;\n}\n.ctime[data-v-7afb550d] {\n    position: absolute;\n    top: 36px;\n    left: 70px;\n    font-size: 12px;\n}\np[data-v-7afb550d] {\n    width: 96%;\n    margin: 0 auto;\n    font-size: 18px;\n    color: black;\n}\n.pic[data-v-7afb550d] {\n    width: 100%;\n}\nh4[data-v-7afb550d] {\n    margin-left: 10px;\n    width: 96%;\n}\nvideo[data-v-7afb550d] {\n    width: 100%;\n    height: 240px;\n}\n", ""]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tmpl" },
    [
      _c(
        "ul",
        _vm._l(_vm.randomList, function(item, index) {
          return _c("li", { key: index }, [
            _c("div", { staticClass: "header" }, [
              _c("img", {
                staticClass: "img",
                attrs: { src: item.header, alt: "toux" }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "uname",
                domProps: { textContent: _vm._s(item.username) }
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "ctime",
                domProps: { textContent: _vm._s(item.passtime) }
              })
            ]),
            _vm._v(" "),
            (item.type != "text"
            ? true
            : false)
              ? _c("h4", [_vm._v(_vm._s(item.text))])
              : _vm._e(),
            _vm._v(" "),
            (item.type === "image"
            ? true
            : false)
              ? _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: item.image,
                      expression: "item.image"
                    }
                  ],
                  staticClass: "pic",
                  attrs: { alt: "image" }
                })
              : _vm._e(),
            _vm._v(" "),
            (item.type === "video"
            ? true
            : false)
              ? _c("video", {
                  attrs: { src: item.video, controls: "controls" }
                })
              : _vm._e(),
            _vm._v(" "),
            (item.type === "gif"
            ? true
            : false)
              ? _c("img", {
                  directives: [
                    {
                      name: "lazy",
                      rawName: "v-lazy",
                      value: item.gif,
                      expression: "item.gif"
                    }
                  ],
                  staticClass: "gif",
                  attrs: { alt: "gif" }
                })
              : _vm._e(),
            _vm._v(" "),
            (item.type === "text"
            ? true
            : false)
              ? _c("p", [_vm._v(_vm._s(item.text))])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ])
        })
      ),
      _vm._v(" "),
      _c("page-vue")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7afb550d", esExports)
  }
}

/***/ })

});