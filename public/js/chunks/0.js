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



//import scrollPage from '../scrollPage';
//import store from '../vuex/store';

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            lastProject: null
        };
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
            console.log('- watch event called');
            this.init();
            //console.log('Active project changed to index:' + this.$store.getters.activeProjectIndex)
        }
    },

    created: function created() {
        //console.log('- created')
    },
    mounted: function mounted() {
        console.log('- mounted');
    },


    /*beforeRouteUpdate(to, from, next){
        console.log('going from ' + from.params.slug + ' to ' + to.params.slug);
        next()
    },*/

    beforeUpdate: function beforeUpdate() {
        if (this.lastProject && this.project != this.lastProject) {
            console.log('- - - beforeUpdate: changing from ' + this.lastProject.title);
        }
    },
    updated: function updated() {
        //console.log('updated called');
        this.setLastProject();
    },
    destroyed: function destroyed() {
        console.log('Destroying');
    },


    methods: {
        init: function init() {
            var index = this.$store.getters.projects.indexOf(this.project);
            this.$store.dispatch('setActiveProject', { index: index });
            //this.lastProject = this.project
        },
        setLastProject: function setLastProject() {
            if (!this.project) {
                console.log('- - - - No project, returning');
                return;
            }

            // have existing project and updating to a new one
            if (this.lastProject && this.project != this.lastProject) {
                console.log('- - - - updating to new project: ' + this.project.title);
                this.lastProject = this.project;

                // No previous project but got a new one so this is a first time project view 
            } else if (!this.lastProject && this.project) {
                console.log('- - - No last project, setting lastProject to ' + this.project.title);
                this.lastProject = this.project;

                // have a previous project but no new one so moving away from project page
            } else if (this.project === this.lastProject) {
                console.log('- - - - updated, same project');
                __WEBPACK_IMPORTED_MODULE_0__app_js__["eventHub"].$emit('headerReady');
            } else {
                console.log('- - - - updated, have project: ' + this.project.title);
            }
        }
    }

});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n@font-face {\n  font-family: 'DoubleQuick';\n  src: url("+__webpack_require__(1)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(1)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(8)+") format(\"woff\"), url("+__webpack_require__(7)+") format(\"truetype\"), url("+__webpack_require__(6)+"#28784e4ce7f780cd5be3825eef7d824b) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Gilroy ExtraBold';\n  src: url("+__webpack_require__(0)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(0)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(5)+") format(\"woff\"), url("+__webpack_require__(4)+") format(\"truetype\"), url("+__webpack_require__(3)+"#d06325052c5113784af338ada63fb512) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 700;\n}\n[data-scroll] {\n  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);\n  opacity: 0;\n  -webkit-transform: translateY(20%);\n          transform: translateY(20%);\n}\n[data-scroll][data-scroll-delayed] {\n    transition-delay: 0.2s;\n}\n[data-scroll].visible {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n.project-page {\n  margin-bottom: 300px;\n}\n.project-page .bg-alt {\n    background: transparent;\n    transition: background 0.8s cubic-bezier(0.19, 1, 0.22, 1);\n}\n.project-content {\n  position: relative;\n  z-index: 1;\n}\n.project-content > div {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    transition: all 0.4s cubic-bezier(1, 0, 0, 1);\n}\n.next-project {\n  display: none;\n  height: 300px;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  z-index: 0;\n}\n.next-project .next-project-body {\n    position: relative;\n    z-index: 1;\n}\n.isReady .bg-alt {\n  background: #353535;\n}\n.isReady .project-content {\n  background: #222;\n}\n.isReady .next-project {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.switch-project {\n  overflow: hidden;\n}\n.switch-project .next-project {\n    bottom: calc(100% - 300px);\n    z-index: 1;\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlIiwid2VicGFjazovLy9Qcm9qZWN0Qm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RCb2R5LnZ1ZT9iNGFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0Qm9keS52dWU/YzY4NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlP2U0MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQSxzQkFBMEs7O0FBRTFLO0FBQ0E7QUFDQSx3QkFBcUo7QUFDcko7QUFDQSx3QkFBeUc7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhQTtBQUNBO0FBQ0E7O0FBRUE7MEJBR0E7O3lCQUdBO0FBRkE7QUFJQTs7OztvQ0FFQTtvRkFDQTtBQUNBOzRDQUNBO29FQUNBO0FBR0E7QUFSQTs7O0FBWUE7QUFIQTs7OzRDQUtBO3dCQUNBO2lCQUNBO0FBQ0E7QUFHQTtBQVBBOztnQ0FRQTtBQUNBO0FBRUE7Z0NBQ0E7b0JBQ0E7QUFFQTs7O0FBS0E7Ozs7OzBDQUNBO2tFQUNBO2dGQUNBO0FBQ0E7QUFFQTtnQ0FDQTtBQUNBO2FBQ0E7QUFFQTtvQ0FDQTtvQkFDQTtBQUVBOzs7OzhCQUVBO2tFQUNBOzhEQUNBO0FBQ0E7QUFDQTtrREFDQTsrQkFDQTs0QkFDQTtBQUNBO0FBRUE7O0FBQ0E7c0VBQ0E7K0VBQ0E7d0NBRUE7O0FBQ0E7MERBQ0E7NEZBQ0E7d0NBRUE7O0FBQ0E7MERBQ0E7NEJBQ0E7d0VBQ0E7bUJBQ0E7NkVBQ0E7QUFDQTtBQUdBO0FBL0JBOztBQXhEQSxHOzs7Ozs7O0FDbERBO0FBQ0EsdUNBQXdDLCtCQUErQix5Q0FBMEQsa1NBQXVXLDJDQUEyQyxxQkFBcUIsR0FBRyxjQUFjLG9DQUFvQyx5Q0FBOEQsa1NBQXVYLDJDQUEyQyxxQkFBcUIsR0FBRyxpQkFBaUIsd0RBQXdELGVBQWUsdUNBQXVDLHVDQUF1QyxHQUFHLHNDQUFzQyw2QkFBNkIsR0FBRyx5QkFBeUIsaUJBQWlCLHdDQUF3Qyx3Q0FBd0MsR0FBRyxpQkFBaUIseUJBQXlCLEdBQUcseUJBQXlCLDhCQUE4QixpRUFBaUUsR0FBRyxvQkFBb0IsdUJBQXVCLGVBQWUsR0FBRywwQkFBMEIsd0NBQXdDLHdDQUF3QyxvREFBb0QsR0FBRyxpQkFBaUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsZ0JBQWdCLGNBQWMsZUFBZSxHQUFHLG9DQUFvQyx5QkFBeUIsaUJBQWlCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRywwQkFBMEIseUJBQXlCLHlCQUF5QixrQkFBa0IsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsaUNBQWlDLGlDQUFpQyxpQkFBaUIsR0FBRyxVOzs7Ozs7O0FDRHYxRSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzRUE7O0FBRUE7QUFDQSxvQ0FBNE07QUFDNU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNJQUFzSSxxRUFBcUU7QUFDM00sK0lBQStJLHFFQUFxRTtBQUNwTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvY2h1bmtzLzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU4ZjcwYjg2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2plY3RCb2R5LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Qcm9qZWN0Qm9keS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU4ZjcwYjg2XFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Byb2plY3RCb2R5LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2phbWVzL3Byb2plY3RzL2JlYW50b3dlcnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RCb2R5LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFByb2plY3RCb2R5LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OGY3MGI4NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU4ZjcwYjg2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Qcm9qZWN0Qm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBcbiAgICAgICAgdi1pZj1cInByb2plY3RcIiBcbiAgICAgICAgaWQ9XCJjb250ZW50XCIgXG4gICAgICAgIGNsYXNzPVwicHJvamVjdC1wYWdlIGdyb3VwXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jb250ZW50IGdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbnRybyBjb2w2IHBhZGRlZFwiIGRhdGEtc2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLXRpdGxlXCI+e3sgcHJvamVjdC50aXRsZSB9fTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyBwcm9qZWN0LnN1YnRpdGxlIH19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvamVjdC5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbDYgZmxleC1jZW50ZXIgcGFkIGJnLWFsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJgL2ltYWdlcy9tZWRpdW0vJHtwcm9qZWN0LmltYWdlc1swXS51cmx9YFwiIGRhdGEtc2Nyb2xsIGRhdGEtc2Nyb2xsLWRlbGF5ZWQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicHJvamVjdC5pbWFnZXNbMV1cIiBjbGFzcz1cImNvbDEyIHBhZCBiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYC9pbWFnZXMvJHskc3RvcmUuZ2V0dGVycy5kaW1lbnNpb25zLmltYWdlU2l6ZX0vJHtwcm9qZWN0LmltYWdlc1sxXS51cmx9YFwiIGRhdGEtc2Nyb2xsIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicHJvamVjdC5pbWFnZXNbMl1cIiBjbGFzcz1cImNvbDEyIHBhZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgdi1pZj1cInByb2plY3QuaW1hZ2VzWzJdXCIgOnNyYz1cImAvaW1hZ2VzLyR7JHN0b3JlLmdldHRlcnMuZGltZW5zaW9ucy5pbWFnZVNpemV9LyR7cHJvamVjdC5pbWFnZXNbMl0udXJsfWBcIiBkYXRhLXNjcm9sbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuZXh0LXByb2plY3QgZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltYWdlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIDpzdHlsZT1cInsgJ2JhY2tncm91bmQtaW1hZ2UnOiBgdXJsKC9pbWFnZXMvaGVhZGVyLSR7JHN0b3JlLmdldHRlcnMuZGltZW5zaW9ucy5pbWFnZVNpemV9LyR7bmV4dFByb2plY3QuaGVhZGVyX2ltYWdlWzBdLnVybH0pYH1cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5leHQtcHJvamVjdC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGgyPk5leHQgcHJvamVjdDwvaDI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXIgaHVnZVwiPnt7IG5leHRQcm9qZWN0LnRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgXG4gICAgICAgICAgICAgICAgICAgIDp0bz1cInsgbmFtZTogJ3Byb2plY3QnLCBwYXJhbXM6IHsgc2x1ZzogbmV4dFByb2plY3Quc2x1ZyB9fVwiIFxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuLWNsZWFyIHByb2plY3QtbGlua1wiPjxzcGFuIGNsYXNzPVwibWFza1wiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRleHRcIj5WaWV3IHByb2plY3Q8L3NwYW4+PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIFxuICAgIGltcG9ydCB7IGV2ZW50SHViIH0gZnJvbSAnLi4vYXBwLmpzJ1xuICAgIC8vaW1wb3J0IHNjcm9sbFBhZ2UgZnJvbSAnLi4vc2Nyb2xsUGFnZSc7XG4gICAgLy9pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdnVleC9zdG9yZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYXN0UHJvamVjdDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwcm9qZWN0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucHJvamVjdEJ5U2x1Zyh0aGlzLiRzdG9yZS5zdGF0ZS5yb3V0ZS5wYXJhbXMuc2x1ZykgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5leHRQcm9qZWN0KCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMucHJvamVjdHNbdGhpcy4kc3RvcmUuZ2V0dGVycy5uZXh0UHJvamVjdEluZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHByb2plY3QodG8sIGZyb20pe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctIHdhdGNoIGV2ZW50IGNhbGxlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQWN0aXZlIHByb2plY3QgY2hhbmdlZCB0byBpbmRleDonICsgdGhpcy4kc3RvcmUuZ2V0dGVycy5hY3RpdmVQcm9qZWN0SW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLSBjcmVhdGVkJylcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLSBtb3VudGVkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypiZWZvcmVSb3V0ZVVwZGF0ZSh0bywgZnJvbSwgbmV4dCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ29pbmcgZnJvbSAnICsgZnJvbS5wYXJhbXMuc2x1ZyArICcgdG8gJyArIHRvLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LCovXG5cbiAgICAgICAgYmVmb3JlVXBkYXRlKCl7XG4gICAgICAgICAgICBpZih0aGlzLmxhc3RQcm9qZWN0ICYmIHRoaXMucHJvamVjdCAhPSB0aGlzLmxhc3RQcm9qZWN0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLSAtIC0gYmVmb3JlVXBkYXRlOiBjaGFuZ2luZyBmcm9tICcgKyB0aGlzLmxhc3RQcm9qZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVkKCl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVkIGNhbGxlZCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRMYXN0UHJvamVjdCgpXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rlc3Ryb3lpbmcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBpbml0KCl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5wcm9qZWN0cy5pbmRleE9mKHRoaXMucHJvamVjdClcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnc2V0QWN0aXZlUHJvamVjdCcsIHsgaW5kZXg6IGluZGV4IH0pXG4gICAgICAgICAgICAgICAgLy90aGlzLmxhc3RQcm9qZWN0ID0gdGhpcy5wcm9qZWN0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0TGFzdFByb2plY3QoKXtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5wcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0gLSAtIC0gTm8gcHJvamVjdCwgcmV0dXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBoYXZlIGV4aXN0aW5nIHByb2plY3QgYW5kIHVwZGF0aW5nIHRvIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIGlmKHRoaXMubGFzdFByb2plY3QgJiYgdGhpcy5wcm9qZWN0ICE9IHRoaXMubGFzdFByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLSAtIC0gLSB1cGRhdGluZyB0byBuZXcgcHJvamVjdDogJyArICB0aGlzLnByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQcm9qZWN0ID0gdGhpcy5wcm9qZWN0XG5cbiAgICAgICAgICAgICAgICAvLyBObyBwcmV2aW91cyBwcm9qZWN0IGJ1dCBnb3QgYSBuZXcgb25lIHNvIHRoaXMgaXMgYSBmaXJzdCB0aW1lIHByb2plY3QgdmlldyBcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZighdGhpcy5sYXN0UHJvamVjdCAmJiB0aGlzLnByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLSAtIC0gTm8gbGFzdCBwcm9qZWN0LCBzZXR0aW5nIGxhc3RQcm9qZWN0IHRvICcgKyB0aGlzLnByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RQcm9qZWN0ID0gdGhpcy5wcm9qZWN0O1xuXG4gICAgICAgICAgICAgICAgLy8gaGF2ZSBhIHByZXZpb3VzIHByb2plY3QgYnV0IG5vIG5ldyBvbmUgc28gbW92aW5nIGF3YXkgZnJvbSBwcm9qZWN0IHBhZ2VcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnByb2plY3QgPT09IHRoaXMubGFzdFByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLSAtIC0gLSB1cGRhdGVkLCBzYW1lIHByb2plY3QnKVxuICAgICAgICAgICAgICAgICAgICBldmVudEh1Yi4kZW1pdCgnaGVhZGVyUmVhZHknKVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLSAtIC0gLSB1cGRhdGVkLCBoYXZlIHByb2plY3Q6ICcgKyB0aGlzLnByb2plY3QudGl0bGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICBcbiAgICBAaW1wb3J0IFwiLi4vLi4vc2Fzcy9fdmFyaWFibGVzLnNjc3NcIjtcbiAgICBcbiAgICBbZGF0YS1zY3JvbGxde1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyAkZWFzZS1vdXQtZXhwbztcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgICAgICAgJltkYXRhLXNjcm9sbC1kZWxheWVkXXtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgIH1cbiAgICAgICAgJi52aXNpYmxle1xuICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvamVjdC1wYWdle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMDBweDtcbiAgICAgICAgLmJnLWFsdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzICRlYXNlLW91dC1leHBvO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9qZWN0LWNvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgJiA+IGRpdntcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyAkZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtaW50cm97XG5cbiAgICB9XG4gICAgXG4gICAgLm5leHQtcHJvamVjdHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGJvdHRvbTowO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAubmV4dC1wcm9qZWN0LWJvZHl7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pc1JlYWR5IHtcbiAgICAgICAgLmJnLWFsdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmV5MztcbiAgICAgICAgfVxuICAgICAgICAucHJvamVjdC1jb250ZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZXkyO1xuICAgICAgICB9XG4gICAgICAgIC5uZXh0LXByb2plY3R7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zd2l0Y2gtcHJvamVjdHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLm5leHQtcHJvamVjdHtcbiAgICAgICAgICAgIGJvdHRvbTogY2FsYygxMDAlIC0gMzAwcHgpO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFByb2plY3RCb2R5LnZ1ZT9iZGQyZWE3MiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdEb3VibGVRdWljayc7XFxuICBzcmM6IHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvZG91YmxlLXF1aWNrLmVvdFwiKStcIik7XFxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvZG91YmxlLXF1aWNrLmVvdFwiKStcIj8jaWVmaXgpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9kb3VibGUtcXVpY2sud29mZlwiKStcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvZG91YmxlLXF1aWNrLnR0ZlwiKStcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL2RvdWJsZS1xdWljay5zdmdcIikrXCIjMjg3ODRlNGNlN2Y3ODBjZDViZTM4MjVlZWY3ZDgyNGIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICAvKiBMZWdhY3kgaU9TICovXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95IEV4dHJhQm9sZCc7XFxuICBzcmM6IHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvR2lscm95LUV4dHJhQm9sZC5lb3RcIikrXCIpO1xcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xcbiAgc3JjOiB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQuZW90XCIpK1wiPyNpZWZpeCkgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQud29mZlwiKStcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvR2lscm95LUV4dHJhQm9sZC50dGZcIikrXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLnN2Z1wiKStcIiNkMDYzMjUwNTJjNTExMzc4NGFmMzM4YWRhNjNmYjUxMikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIC8qIExlZ2FjeSBpT1MgKi9cXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbltkYXRhLXNjcm9sbF0ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xcbn1cXG5bZGF0YS1zY3JvbGxdW2RhdGEtc2Nyb2xsLWRlbGF5ZWRdIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuW2RhdGEtc2Nyb2xsXS52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcbi5wcm9qZWN0LXBhZ2Uge1xcbiAgbWFyZ2luLWJvdHRvbTogMzAwcHg7XFxufVxcbi5wcm9qZWN0LXBhZ2UgLmJnLWFsdCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xcbn1cXG4ucHJvamVjdC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5wcm9qZWN0LWNvbnRlbnQgPiBkaXYge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpO1xcbn1cXG4ubmV4dC1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAwO1xcbn1cXG4ubmV4dC1wcm9qZWN0IC5uZXh0LXByb2plY3QtYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuLmlzUmVhZHkgLmJnLWFsdCB7XFxuICBiYWNrZ3JvdW5kOiAjMzUzNTM1O1xcbn1cXG4uaXNSZWFkeSAucHJvamVjdC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxufVxcbi5pc1JlYWR5IC5uZXh0LXByb2plY3Qge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zd2l0Y2gtcHJvamVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc3dpdGNoLXByb2plY3QgLm5leHQtcHJvamVjdCB7XFxuICAgIGJvdHRvbTogY2FsYygxMDAlIC0gMzAwcHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU4ZjcwYjg2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIChfdm0ucHJvamVjdCkgPyBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9qZWN0LXBhZ2UgZ3JvdXBcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1jb250ZW50IGdyb3VwXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93IGZsZXhcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9qZWN0LWludHJvIGNvbDYgcGFkZGVkXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YS1zY3JvbGxcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYWdlLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnByb2plY3QudGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJvamVjdC5zdWJ0aXRsZSkpXSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhfdm0ucHJvamVjdC5kZXNjcmlwdGlvbikgKyBcIlxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbDYgZmxleC1jZW50ZXIgcGFkIGJnLWFsdFwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiAoXCIvaW1hZ2VzL21lZGl1bS9cIiArIChfdm0ucHJvamVjdC5pbWFnZXNbMF0udXJsKSksXG4gICAgICBcImRhdGEtc2Nyb2xsXCI6IFwiXCIsXG4gICAgICBcImRhdGEtc2Nyb2xsLWRlbGF5ZWRcIjogXCJcIlxuICAgIH1cbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnByb2plY3QuaW1hZ2VzWzFdKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sMTIgcGFkIGJnLWRhcmtcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogKFwiL2ltYWdlcy9cIiArIChfdm0uJHN0b3JlLmdldHRlcnMuZGltZW5zaW9ucy5pbWFnZVNpemUpICsgXCIvXCIgKyAoX3ZtLnByb2plY3QuaW1hZ2VzWzFdLnVybCkpLFxuICAgICAgXCJkYXRhLXNjcm9sbFwiOiBcIlwiXG4gICAgfVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucHJvamVjdC5pbWFnZXNbMl0pID8gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2wxMiBwYWRcIlxuICB9LCBbKF92bS5wcm9qZWN0LmltYWdlc1syXSkgPyBfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiAoXCIvaW1hZ2VzL1wiICsgKF92bS4kc3RvcmUuZ2V0dGVycy5kaW1lbnNpb25zLmltYWdlU2l6ZSkgKyBcIi9cIiArIChfdm0ucHJvamVjdC5pbWFnZXNbMl0udXJsKSksXG4gICAgICBcImRhdGEtc2Nyb2xsXCI6IFwiXCJcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmV4dC1wcm9qZWN0IGZsZXgtY2VudGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1pbWFnZS1jb250XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJvamVjdC1pbWFnZVwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAoXCJ1cmwoL2ltYWdlcy9oZWFkZXItXCIgKyAoX3ZtLiRzdG9yZS5nZXR0ZXJzLmRpbWVuc2lvbnMuaW1hZ2VTaXplKSArIFwiL1wiICsgKF92bS5uZXh0UHJvamVjdC5oZWFkZXJfaW1hZ2VbMF0udXJsKSArIFwiKVwiKVxuICAgIH0pXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmV4dC1wcm9qZWN0LWJvZHlcIlxuICB9LCBbX2MoJ2gyJywgW192bS5fdihcIk5leHQgcHJvamVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgaHVnZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5uZXh0UHJvamVjdC50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4tY2xlYXIgcHJvamVjdC1saW5rXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjoge1xuICAgICAgICBuYW1lOiAncHJvamVjdCcsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IF92bS5uZXh0UHJvamVjdC5zbHVnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJvbGVcIjogXCJidXR0b25cIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1hc2tcIlxuICB9KSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJWaWV3IHByb2plY3RcIildKV0pXSwgMSldKV0pIDogX3ZtLl9lKClcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNThmNzBiODZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01OGY3MGI4NlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Byb2plY3RCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU4ZjcwYjg2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2plY3RCb2R5LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNWM5NDM3NjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNThmNzBiODZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvamVjdEJvZHkudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU4ZjcwYjg2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Byb2plY3RCb2R5LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNThmNzBiODZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUHJvamVjdEJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9