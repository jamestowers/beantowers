webpackJsonp([0],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/james/projects/beantowers/resources/assets/js/components/ProjectBody.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProjectBody.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58f70b86", Component.options)
  } else {
    hotAPI.reload("data-v-58f70b86", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(13);
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
//
//



//import store from '../vuex/store';

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },


    computed: {
        project: function project() {
            return this.$store.getters.projectBySlug(this.$store.state.route.params.slug);
        },
        nextProject: function nextProject() {
            return this.$store.getters.projects[this.$store.getters.nextProjectIndex];
        }
    },

    components: {
        //
    },

    watch: {
        project: function project(to, from) {
            //this.init()
        }
    },

    mounted: function mounted() {
        //console.log('mounted');
        this.init();
    },
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {
        //console.log('updated');
        if (this.project) this.init();
    },
    destroyed: function destroyed() {
        //trigger.destroyAll()
    },


    methods: {
        init: function init() {
            var index = this.$store.getters.projects.indexOf(this.project);
            this.$store.dispatch('setActiveProject', { index: index });
            //this.$root.pageInit(this.$el)
        }
    }

});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n@font-face {\n  font-family: 'DoubleQuick';\n  src: url("+__webpack_require__(1)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(1)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(8)+") format(\"woff\"), url("+__webpack_require__(7)+") format(\"truetype\"), url("+__webpack_require__(6)+"#28784e4ce7f780cd5be3825eef7d824b) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Gilroy ExtraBold';\n  src: url("+__webpack_require__(0)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(0)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(5)+") format(\"woff\"), url("+__webpack_require__(4)+") format(\"truetype\"), url("+__webpack_require__(3)+"#d06325052c5113784af338ada63fb512) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 700;\n}\n[data-scroll] {\n  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);\n  opacity: 0;\n  -webkit-transform: translateY(20%);\n          transform: translateY(20%);\n}\n[data-scroll][data-scroll-delayed] {\n    transition-delay: 0.2s;\n}\n[data-scroll].visible {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n.project-page {\n  margin-bottom: 300px;\n}\n.project-page .bg-alt {\n    background: transparent;\n    transition: background 0.8s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.project-content {\n  position: relative;\n  z-index: 1;\n}\n.next-project {\n  display: none;\n  height: 300px;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 0;\n}\n.next-project .next-project-body {\n    position: relative;\n    z-index: 1;\n}\n.isReady .bg-alt {\n  background: #353535;\n}\n.isReady .project-content {\n  background: #222;\n}\n.isReady .next-project {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.project) ? _c('section', {
    staticClass: "project-page group",
    attrs: {
      "id": "content"
    }
  }, [_c('div', {
    staticClass: "project-content group"
  }, [_c('div', {
    staticClass: "row flex"
  }, [_c('div', {
    staticClass: "project-intro col6 padded",
    attrs: {
      "data-scroll": ""
    }
  }, [_c('h1', {
    staticClass: "page-title"
  }, [_vm._v(_vm._s(_vm.project.title))]), _vm._v(" "), _c('h2', [_vm._v(_vm._s(_vm.project.subtitle))]), _vm._v("\n                " + _vm._s(_vm.project.description) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "col6 flex-center pad bg-alt"
  }, [_c('img', {
    attrs: {
      "src": ("/images/medium/" + (_vm.project.images[0].url)),
      "data-scroll": "",
      "data-scroll-delayed": ""
    }
  })])]), _vm._v(" "), (_vm.project.images[1]) ? _c('div', {
    staticClass: "col12 pad bg-dark"
  }, [_c('img', {
    attrs: {
      "src": ("/images/" + (_vm.$store.getters.dimensions.imageSize) + "/" + (_vm.project.images[1].url)),
      "data-scroll": ""
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.project.images[2]) ? _c('div', {
    staticClass: "col12 pad"
  }, [(_vm.project.images[2]) ? _c('img', {
    attrs: {
      "src": ("/images/" + (_vm.$store.getters.dimensions.imageSize) + "/" + (_vm.project.images[2].url)),
      "data-scroll": ""
    }
  }) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "next-project flex-center"
  }, [_c('div', {
    staticClass: "project-image-cont"
  }, [_c('div', {
    staticClass: "project-image",
    style: ({
      'background-image': ("url(/images/header-" + (_vm.$store.getters.dimensions.imageSize) + "/" + (_vm.nextProject.header_image[0].url) + ")")
    })
  })]), _vm._v(" "), _c('div', {
    staticClass: "next-project-body"
  }, [_c('h2', [_vm._v("Next project")]), _vm._v(" "), _c('h1', {
    staticClass: "text-center huge"
  }, [_vm._v(_vm._s(_vm.nextProject.title))]), _vm._v(" "), _c('router-link', {
    staticClass: "btn-clear project-link",
    attrs: {
      "to": {
        name: 'project',
        params: {
          slug: _vm.nextProject.slug
        }
      },
      "role": "button"
    }
  }, [_c('span', {
    staticClass: "mask"
  }), _c('span', {
    staticClass: "text"
  }, [_vm._v("View project")])])], 1)])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-58f70b86", module.exports)
  }
}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("5c943762", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-58f70b86\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectBody.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-58f70b86\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectBody.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlIiwid2VicGFjazovLy9Qcm9qZWN0Qm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RCb2R5LnZ1ZT9iNGFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0Qm9keS52dWU/YzY4NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlP2U0MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQSxzQkFBMEs7O0FBRTFLO0FBQ0E7QUFDQSx3QkFBcUo7QUFDcko7QUFDQSx3QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhQTtBQUNBOztBQUVBOzBCQUdBO2VBRUE7QUFFQTs7OztvQ0FFQTtvRkFDQTtBQUNBOzRDQUNBO29FQUNBO0FBR0E7QUFSQTs7O0FBWUE7QUFIQTs7OzRDQUtBO0FBQ0E7QUFHQTtBQUxBOztnQ0FNQTtBQUNBO2FBQ0E7QUFFQTswQ0FFQSxDQUVBO2dDQUNBO0FBQ0E7aUJBQ0EsY0FDQTtBQUVBO29DQUNBO0FBQ0E7QUFFQTs7Ozs4QkFFQTtrRUFDQTs4REFDQTtBQUNBO0FBR0E7QUFQQTs7QUE1Q0EsRzs7Ozs7OztBQ2pEQTtBQUNBLHVDQUF3QywrQkFBK0IseUNBQTBELGtTQUF1VywyQ0FBMkMscUJBQXFCLEdBQUcsY0FBYyxvQ0FBb0MseUNBQThELGtTQUF1WCwyQ0FBMkMscUJBQXFCLEdBQUcsaUJBQWlCLHdEQUF3RCxlQUFlLHVDQUF1Qyx1Q0FBdUMsR0FBRyxzQ0FBc0MsNkJBQTZCLEdBQUcseUJBQXlCLGlCQUFpQix3Q0FBd0Msd0NBQXdDLEdBQUcsaUJBQWlCLHlCQUF5QixHQUFHLHlCQUF5Qiw4QkFBOEIsaUVBQWlFLEdBQUcsb0JBQW9CLHVCQUF1QixlQUFlLEdBQUcsaUJBQWlCLGtCQUFrQixrQkFBa0Isb0JBQW9CLGdCQUFnQixjQUFjLGVBQWUsR0FBRyxvQ0FBb0MseUJBQXlCLGlCQUFpQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsMEJBQTBCLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEdBQUcsVTs7Ozs7OztBQ0RyakUsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDM0VBOztBQUVBO0FBQ0Esb0NBQTRNO0FBQzVNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0kscUVBQXFFO0FBQzNNLCtJQUErSSxxRUFBcUU7QUFDcE47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzL2NodW5rcy8wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OGY3MGI4NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9qZWN0Qm9keS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUHJvamVjdEJvZHkudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OGY3MGI4NlxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Qcm9qZWN0Qm9keS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9Vc2Vycy9qYW1lcy9wcm9qZWN0cy9iZWFudG93ZXJzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0Qm9keS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQcm9qZWN0Qm9keS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNThmNzBiODZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OGY3MGI4NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gXG4gICAgICAgIHYtaWY9XCJwcm9qZWN0XCIgXG4gICAgICAgIGlkPVwiY29udGVudFwiIFxuICAgICAgICBjbGFzcz1cInByb2plY3QtcGFnZSBncm91cFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtY29udGVudCBncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW50cm8gY29sNiBwYWRkZWRcIiBkYXRhLXNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwicGFnZS10aXRsZVwiPnt7IHByb2plY3QudGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3sgcHJvamVjdC5zdWJ0aXRsZSB9fTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb2plY3QuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2w2IGZsZXgtY2VudGVyIHBhZCBiZy1hbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYC9pbWFnZXMvbWVkaXVtLyR7cHJvamVjdC5pbWFnZXNbMF0udXJsfWBcIiBkYXRhLXNjcm9sbCBkYXRhLXNjcm9sbC1kZWxheWVkIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInByb2plY3QuaW1hZ2VzWzFdXCIgY2xhc3M9XCJjb2wxMiBwYWQgYmctZGFya1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImAvaW1hZ2VzLyR7JHN0b3JlLmdldHRlcnMuZGltZW5zaW9ucy5pbWFnZVNpemV9LyR7cHJvamVjdC5pbWFnZXNbMV0udXJsfWBcIiBkYXRhLXNjcm9sbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInByb2plY3QuaW1hZ2VzWzJdXCIgY2xhc3M9XCJjb2wxMiBwYWRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJwcm9qZWN0LmltYWdlc1syXVwiIDpzcmM9XCJgL2ltYWdlcy8keyRzdG9yZS5nZXR0ZXJzLmRpbWVuc2lvbnMuaW1hZ2VTaXplfS8ke3Byb2plY3QuaW1hZ2VzWzJdLnVybH1gXCIgZGF0YS1zY3JvbGwgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV4dC1wcm9qZWN0IGZsZXgtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWFnZS1jb250XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgvaW1hZ2VzL2hlYWRlci0keyRzdG9yZS5nZXR0ZXJzLmRpbWVuc2lvbnMuaW1hZ2VTaXplfS8ke25leHRQcm9qZWN0LmhlYWRlcl9pbWFnZVswXS51cmx9KWB9XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXh0LXByb2plY3QtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoMj5OZXh0IHByb2plY3Q8L2gyPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyIGh1Z2VcIj57eyBuZXh0UHJvamVjdC50aXRsZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIFxuICAgICAgICAgICAgICAgICAgICA6dG89XCJ7IG5hbWU6ICdwcm9qZWN0JywgcGFyYW1zOiB7IHNsdWc6IG5leHRQcm9qZWN0LnNsdWcgfX1cIiBcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jbGVhciBwcm9qZWN0LWxpbmtcIj48c3BhbiBjbGFzcz1cIm1hc2tcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VmlldyBwcm9qZWN0PC9zcGFuPjwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBcbiAgICBpbXBvcnQgeyBldmVudEh1YiB9IGZyb20gJy4uL2FwcC5qcydcbiAgICAvL2ltcG9ydCBzdG9yZSBmcm9tICcuLi92dWV4L3N0b3JlJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcblxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwcm9qZWN0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucHJvamVjdEJ5U2x1Zyh0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZS5wYXJhbXMuc2x1ZykgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRQcm9qZWN0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucHJvamVjdHNbdGhpcy4kc3RvcmUuZ2V0dGVycy5uZXh0UHJvamVjdEluZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHByb2plY3QodG8sIGZyb20pe1xuICAgICAgICAgICAgICAgIC8vdGhpcy5pbml0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdtb3VudGVkJyk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVVwZGF0ZSgpe1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlZCgpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlZCcpO1xuICAgICAgICAgICAgaWYodGhpcy5wcm9qZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgLy90cmlnZ2VyLmRlc3Ryb3lBbGwoKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLnByb2plY3RzLmluZGV4T2YodGhpcy5wcm9qZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzZXRBY3RpdmVQcm9qZWN0JywgeyBpbmRleDogaW5kZXggfSlcbiAgICAgICAgICAgICAgICAvL3RoaXMuJHJvb3QucGFnZUluaXQodGhpcy4kZWwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIFxuICAgIEBpbXBvcnQgXCIuLi8uLi9zYXNzL192YXJpYWJsZXMuc2Nzc1wiO1xuICAgIFxuICAgIFtkYXRhLXNjcm9sbF17XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjhzICRlYXNlLW91dC1leHBvO1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICAgICAgICAmW2RhdGEtc2Nyb2xsLWRlbGF5ZWRde1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgfVxuICAgICAgICAmLnZpc2libGV7XG4gICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9qZWN0LXBhZ2V7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwMHB4O1xuICAgICAgICAuYmctYWx0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHMgJGVhc2Utb3V0LWV4cG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtY29udGVudHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAucHJvamVjdC1pbnRyb3tcblxuICAgIH1cbiAgICBcbiAgICAubmV4dC1wcm9qZWN0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIC5uZXh0LXByb2plY3QtYm9keXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmlzUmVhZHkge1xuICAgICAgICAuYmctYWx0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXkzO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWNvbnRlbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JleTI7XG4gICAgICAgIH1cbiAgICAgICAgLm5leHQtcHJvamVjdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQcm9qZWN0Qm9keS52dWU/MmM2NzkyMmQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRG91YmxlUXVpY2snO1xcbiAgc3JjOiB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL2RvdWJsZS1xdWljay5lb3RcIikrXCIpO1xcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL2RvdWJsZS1xdWljay5lb3RcIikrXCI/I2llZml4KSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvZG91YmxlLXF1aWNrLndvZmZcIikrXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL2RvdWJsZS1xdWljay50dGZcIikrXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9kb3VibGUtcXVpY2suc3ZnXCIpK1wiIzI4Nzg0ZTRjZTdmNzgwY2Q1YmUzODI1ZWVmN2Q4MjRiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgLyogTGVnYWN5IGlPUyAqL1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0dpbHJveSBFeHRyYUJvbGQnO1xcbiAgc3JjOiB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQuZW90XCIpK1wiKTtcXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLmVvdFwiKStcIj8jaWVmaXgpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLndvZmZcIikrXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQudHRmXCIpK1wiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvR2lscm95LUV4dHJhQm9sZC5zdmdcIikrXCIjZDA2MzI1MDUyYzUxMTM3ODRhZjMzOGFkYTYzZmI1MTIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICAvKiBMZWdhY3kgaU9TICovXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5bZGF0YS1zY3JvbGxdIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcXG59XFxuW2RhdGEtc2Nyb2xsXVtkYXRhLXNjcm9sbC1kZWxheWVkXSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbltkYXRhLXNjcm9sbF0udmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbn1cXG4ucHJvamVjdC1wYWdlIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwMHB4O1xcbn1cXG4ucHJvamVjdC1wYWdlIC5iZy1hbHQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcXG59XFxuLnByb2plY3QtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubmV4dC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubmV4dC1wcm9qZWN0IC5uZXh0LXByb2plY3QtYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLmlzUmVhZHkgLmJnLWFsdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xcbn1cXG4uaXNSZWFkeSAucHJvamVjdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcbi5pc1JlYWR5IC5uZXh0LXByb2plY3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNThmNzBiODZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gKF92bS5wcm9qZWN0KSA/IF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2plY3QtcGFnZSBncm91cFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiY29udGVudFwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWNvbnRlbnQgZ3JvdXBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3cgZmxleFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2plY3QtaW50cm8gY29sNiBwYWRkZWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLXNjcm9sbFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhZ2UtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucHJvamVjdC50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9qZWN0LnN1YnRpdGxlKSldKSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5wcm9qZWN0LmRlc2NyaXB0aW9uKSArIFwiXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sNiBmbGV4LWNlbnRlciBwYWQgYmctYWx0XCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IChcIi9pbWFnZXMvbWVkaXVtL1wiICsgKF92bS5wcm9qZWN0LmltYWdlc1swXS51cmwpKSxcbiAgICAgIFwiZGF0YS1zY3JvbGxcIjogXCJcIixcbiAgICAgIFwiZGF0YS1zY3JvbGwtZGVsYXllZFwiOiBcIlwiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIChfdm0ucHJvamVjdC5pbWFnZXNbMV0pID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wxMiBwYWQgYmctZGFya1wiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiAoXCIvaW1hZ2VzL1wiICsgKF92bS4kc3RvcmUuZ2V0dGVycy5kaW1lbnNpb25zLmltYWdlU2l6ZSkgKyBcIi9cIiArIChfdm0ucHJvamVjdC5pbWFnZXNbMV0udXJsKSksXG4gICAgICBcImRhdGEtc2Nyb2xsXCI6IFwiXCJcbiAgICB9XG4gIH0pXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5wcm9qZWN0LmltYWdlc1syXSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbDEyIHBhZFwiXG4gIH0sIFsoX3ZtLnByb2plY3QuaW1hZ2VzWzJdKSA/IF9jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IChcIi9pbWFnZXMvXCIgKyAoX3ZtLiRzdG9yZS5nZXR0ZXJzLmRpbWVuc2lvbnMuaW1hZ2VTaXplKSArIFwiL1wiICsgKF92bS5wcm9qZWN0LmltYWdlc1syXS51cmwpKSxcbiAgICAgIFwiZGF0YS1zY3JvbGxcIjogXCJcIlxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuZXh0LXByb2plY3QgZmxleC1jZW50ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWltYWdlLWNvbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWltYWdlXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IChcInVybCgvaW1hZ2VzL2hlYWRlci1cIiArIChfdm0uJHN0b3JlLmdldHRlcnMuZGltZW5zaW9ucy5pbWFnZVNpemUpICsgXCIvXCIgKyAoX3ZtLm5leHRQcm9qZWN0LmhlYWRlcl9pbWFnZVswXS51cmwpICsgXCIpXCIpXG4gICAgfSlcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuZXh0LXByb2plY3QtYm9keVwiXG4gIH0sIFtfYygnaDInLCBbX3ZtLl92KFwiTmV4dCBwcm9qZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBodWdlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLm5leHRQcm9qZWN0LnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci1saW5rJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jbGVhciBwcm9qZWN0LWxpbmtcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiB7XG4gICAgICAgIG5hbWU6ICdwcm9qZWN0JyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogX3ZtLm5leHRQcm9qZWN0LnNsdWdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicm9sZVwiOiBcImJ1dHRvblwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWFza1wiXG4gIH0pLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCJcbiAgfSwgW192bS5fdihcIlZpZXcgcHJvamVjdFwiKV0pXSldLCAxKV0pXSkgOiBfdm0uX2UoKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01OGY3MGI4NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU4ZjcwYjg2XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNThmNzBiODZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvamVjdEJvZHkudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1Yzk0Mzc2MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OGY3MGI4NlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9qZWN0Qm9keS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNThmNzBiODZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvamVjdEJvZHkudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01OGY3MGI4NlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0Qm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=