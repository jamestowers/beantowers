webpackJsonp([1],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(69)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(62),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/james/projects/beantowers/resources/assets/js/components/Contact.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Contact.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd5d36fc", Component.options)
  } else {
    hotAPI.reload("data-v-bd5d36fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loading: false,
            success: false,
            errors: [],
            formData: {
                'name': null,
                'email': null,
                'company': null,
                'message': null
            }
        };
    },
    created: function created() {
        //console.log('');
    },


    computed: {
        btnText: function btnText() {
            return this.loading ? 'Sending...' : 'Send';
        }
    },

    methods: {
        beforeSubmit: function beforeSubmit() {
            this.validate();
        },
        onSubmit: function onSubmit() {
            this.beforeSubmit();
            if (this.errors.length < 1) {
                this.loading = true;
                var vm = this;
                this.$http.post('contact', this.formData).then(this.onSuccess, this.onError);
            }
        },
        onSuccess: function onSuccess(response) {
            this.loading = false;
            this.success = true;
        },
        onError: function onError(errors) {
            console.error(errors);
            this.loading = false;
        },
        validate: function validate() {
            return this.formData.name !== null && this.formData.email !== null && this.formData.message !== null;
        }
    }

});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
exports.push([module.i, "\n@font-face {\n  font-family: 'DoubleQuick';\n  src: url("+__webpack_require__(1)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(1)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(8)+") format(\"woff\"), url("+__webpack_require__(7)+") format(\"truetype\"), url("+__webpack_require__(6)+"#28784e4ce7f780cd5be3825eef7d824b) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 400;\n}\n@font-face {\n  font-family: 'Gilroy ExtraBold';\n  src: url("+__webpack_require__(0)+");\n  /* IE9 Compat Modes */\n  src: url("+__webpack_require__(0)+"?#iefix) format(\"embedded-opentype\"), url("+__webpack_require__(5)+") format(\"woff\"), url("+__webpack_require__(4)+") format(\"truetype\"), url("+__webpack_require__(3)+"#d06325052c5113784af338ada63fb512) format(\"svg\");\n  /* Legacy iOS */\n  font-style: normal;\n  font-weight: 700;\n}\n@-webkit-keyframes slide-from-top {\n0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n}\n@keyframes slide-from-top {\n0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n}\n@-webkit-keyframes slide-to-top {\n0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n}\n}\n@keyframes slide-to-top {\n0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    opacity: 0;\n}\n}\n@-webkit-keyframes slide-from-bottom {\n0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n}\n@keyframes slide-from-bottom {\n0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n}\n@-webkit-keyframes slide-to-bottom {\n0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n}\n@keyframes slide-to-bottom {\n0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n}\n@-webkit-keyframes slide-from-right {\n0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n}\n}\n@keyframes slide-from-right {\n0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n}\n}\n@-webkit-keyframes slide-to-right {\n0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateX(-100%) rotate(-30deg) scale(0.8);\n            transform: translateX(-100%) rotate(-30deg) scale(0.8);\n    opacity: 0;\n}\n}\n@keyframes slide-to-right {\n0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateX(-100%) rotate(-30deg) scale(0.8);\n            transform: translateX(-100%) rotate(-30deg) scale(0.8);\n    opacity: 0;\n}\n}\n@-webkit-keyframes slide-from-left {\n0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n}\n}\n@keyframes slide-from-left {\n0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n}\n}\n@-webkit-keyframes slide-to-left {\n0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateX(100%) rotate(30deg) scale(0.8);\n            transform: translateX(100%) rotate(30deg) scale(0.8);\n    opacity: 0;\n}\n}\n@keyframes slide-to-left {\n0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateX(100%) rotate(30deg) scale(0.8);\n            transform: translateX(100%) rotate(30deg) scale(0.8);\n    opacity: 0;\n}\n}\n@-webkit-keyframes rotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes spin-in {\n0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n}\n}\n@keyframes spin-in {\n0% {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n}\n}\n@-webkit-keyframes rotateRightSideFirst {\n50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px);\n}\n}\n@keyframes rotateRightSideFirst {\n50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px);\n}\n}\n@-webkit-keyframes shake {\n0% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n}\n10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n}\n20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n}\n30% {\n    -webkit-transform: translate(0px, 2px) rotate(0deg);\n            transform: translate(0px, 2px) rotate(0deg);\n}\n40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n}\n50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n}\n60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n}\n70% {\n    -webkit-transform: translate(2px, 1px) rotate(-1deg);\n            transform: translate(2px, 1px) rotate(-1deg);\n}\n80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n}\n90% {\n    -webkit-transform: translate(2px, 2px) rotate(0deg);\n            transform: translate(2px, 2px) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n}\n}\n@keyframes shake {\n0% {\n    -webkit-transform: translate(2px, 1px) rotate(0deg);\n            transform: translate(2px, 1px) rotate(0deg);\n}\n10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n}\n20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n}\n30% {\n    -webkit-transform: translate(0px, 2px) rotate(0deg);\n            transform: translate(0px, 2px) rotate(0deg);\n}\n40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n}\n50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n}\n60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n}\n70% {\n    -webkit-transform: translate(2px, 1px) rotate(-1deg);\n            transform: translate(2px, 1px) rotate(-1deg);\n}\n80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n}\n90% {\n    -webkit-transform: translate(2px, 2px) rotate(0deg);\n            transform: translate(2px, 2px) rotate(0deg);\n}\n100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n}\n}\n@-webkit-keyframes swing {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@keyframes swing {\n20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n            transform: rotate3d(0, 0, 1, 15deg);\n}\n40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n            transform: rotate3d(0, 0, 1, -10deg);\n}\n60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n            transform: rotate3d(0, 0, 1, 5deg);\n}\n80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n            transform: rotate3d(0, 0, 1, -5deg);\n}\nto {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n            transform: rotate3d(0, 0, 1, 0deg);\n}\n}\n@-webkit-keyframes fadeToTop {\nfrom {\n    -webkit-transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n            transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n    opacity: 1;\n}\nto {\n    -webkit-transform: translateY(-100%) rotate3d(1, 0, 0, 90deg);\n            transform: translateY(-100%) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n}\n}\n@keyframes fadeToTop {\nfrom {\n    -webkit-transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n            transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n    opacity: 1;\n}\nto {\n    -webkit-transform: translateY(-100%) rotate3d(1, 0, 0, 90deg);\n            transform: translateY(-100%) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n}\n}\n@-webkit-keyframes fadeFromBottom {\nfrom {\n    -webkit-transform: translateY(100%) rotate3d(1, 0, 0, -90deg);\n            transform: translateY(100%) rotate3d(1, 0, 0, -90deg);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n            transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n    opacity: 1;\n}\n}\n@keyframes fadeFromBottom {\nfrom {\n    -webkit-transform: translateY(100%) rotate3d(1, 0, 0, -90deg);\n            transform: translateY(100%) rotate3d(1, 0, 0, -90deg);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n            transform: translateY(0) rotate3d(1, 0, 0, 0deg);\n    opacity: 1;\n}\n}\n@-webkit-keyframes flipInX {\nfrom {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n}\n40% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 20deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, 20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n}\n60% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -10deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, -10deg);\n    opacity: 1;\n}\n80% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 5deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, 5deg);\n}\nto {\n    -webkit-transform: perspective(1000px);\n            transform: perspective(1000px);\n}\n}\n@keyframes flipInX {\nfrom {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, -90deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n}\n40% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 20deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, 20deg);\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n}\n60% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, -10deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, -10deg);\n    opacity: 1;\n}\n80% {\n    -webkit-transform: perspective(1000px) rotate3d(1, 0, 0, 5deg);\n            transform: perspective(1000px) rotate3d(1, 0, 0, 5deg);\n}\nto {\n    -webkit-transform: perspective(1000px);\n            transform: perspective(1000px);\n}\n}\n.form-row {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  opacity: 0;\n  transition: all 0.8s cubic-bezier(0.64, -0.14, 0, 2);\n}\n.form-row:nth-child(1) {\n    transition-delay: 0.1s;\n}\n.form-row:nth-child(2) {\n    transition-delay: 0.2s;\n}\n.form-row:nth-child(3) {\n    transition-delay: 0.3s;\n}\n.form-row:nth-child(4) {\n    transition-delay: 0.4s;\n}\n.form-row:nth-child(5) {\n    transition-delay: 0.5s;\n}\n.form-row:nth-child(6) {\n    transition-delay: 0.6s;\n}\n.isReady .form-row {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\n", ""]);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page pad inner",
    attrs: {
      "id": "contact-form"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(!_vm.success) ? _c('div', [_c('h2', {
    staticClass: "huge"
  }, [_vm._v("Hello.")]), _vm._v(" "), _c('p', [_vm._v("Want to use us for your next project? Tell us about it here and we'll get back to you ASAP.")]), _vm._v(" "), _c('form', {
    ref: "form",
    attrs: {
      "action": "/contact",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "form-row"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.name),
      expression: "formData.name"
    }],
    attrs: {
      "type": "text",
      "name": "name",
      "placeholder": "Your name",
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('label', {
    attrs: {
      "for": "company"
    }
  }, [_vm._v("Company")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.company),
      expression: "formData.company"
    }],
    attrs: {
      "type": "text",
      "name": "company",
      "placeholder": "Company"
    },
    domProps: {
      "value": (_vm.formData.company)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.company = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Email address")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.email),
      expression: "formData.email"
    }],
    attrs: {
      "type": "text",
      "name": "email",
      "placeholder": "Email address",
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('label', {
    attrs: {
      "for": "message"
    }
  }, [_vm._v("About your project")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.message),
      expression: "formData.message"
    }],
    attrs: {
      "name": "message",
      "placeholder": "Enter message",
      "required": ""
    },
    domProps: {
      "value": (_vm.formData.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.message = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-row"
  }, [_c('input', {
    attrs: {
      "type": "submit"
    },
    domProps: {
      "value": _vm.btnText
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.onSubmit($event)
      }
    }
  })])])]) : _c('div', {
    staticClass: "flex-center flex-column"
  }, [_c('h2', {
    staticClass: "huge"
  }, [_vm._v("Thanks.")]), _vm._v(" "), _c('p', [_vm._v("We'll get back to you in a bit.")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd5d36fc", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("cd342360", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bd5d36fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bd5d36fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29udGFjdC52dWUiLCJ3ZWJwYWNrOi8vL0NvbnRhY3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db250YWN0LnZ1ZT82YzY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db250YWN0LnZ1ZT81NGFjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db250YWN0LnZ1ZT80NzRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0Esc0JBQTBLOztBQUUxSztBQUNBO0FBQ0Esd0JBQXFKO0FBQ3JKO0FBQ0Esd0JBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5QkE7MEJBSUE7O3FCQUVBO3FCQUNBO29CQUNBOzt3QkFFQTt5QkFDQTsyQkFDQTsyQkFHQTtBQU5BO0FBSkE7QUFZQTtnQ0FDQTtBQUNBO0FBRUE7Ozs7b0NBRUE7aURBQ0E7QUFHQTtBQUxBOzs7OENBT0E7aUJBQ0E7QUFDQTtzQ0FDQTtpQkFDQTt3Q0FDQTsrQkFDQTt5QkFDQTtnREFDQSxvQ0FDQTtBQUNBO0FBQ0E7Z0RBQ0E7MkJBQ0E7MkJBQ0E7QUFDQTswQ0FDQTswQkFDQTsyQkFDQTtBQUNBO3NDQUNBOzBDQUNBLGdDQUNBLGtDQUNBO0FBR0E7QUEzQkE7O0FBekJBLEc7Ozs7Ozs7QUMzREE7QUFDQSx1Q0FBd0Ms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IiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWJkNWQzNmZjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbnRhY3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbnRhY3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iZDVkMzZmY1xcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db250YWN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2phbWVzL3Byb2plY3RzL2JlYW50b3dlcnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbnRhY3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ29udGFjdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmQ1ZDM2ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iZDVkMzZmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29udGFjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiY29udGFjdC1mb3JtXCIgY2xhc3M9XCJwYWdlIHBhZCBpbm5lclwiPlxuICAgICAgICBcbiAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaHVnZVwiPkhlbGxvLjwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5XYW50IHRvIHVzZSB1cyBmb3IgeW91ciBuZXh0IHByb2plY3Q/IFRlbGwgdXMgYWJvdXQgaXQgaGVyZSBhbmQgd2UnbGwgZ2V0IGJhY2sgdG8geW91IEFTQVAuPC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImZvcm1cIiBcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1EYXRhLm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21wYW55XCI+Q29tcGFueTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1EYXRhLmNvbXBhbnlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21wYW55XCIgcGxhY2Vob2xkZXI9XCJDb21wYW55XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImZvcm1EYXRhLmVtYWlsXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlXCI+QWJvdXQgeW91ciBwcm9qZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9ybURhdGEubWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBtZXNzYWdlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBAY2xpY2sucHJldmVudD1cIm9uU3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIDp2YWx1ZT1cImJ0blRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiZmxleC1jZW50ZXIgZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJodWdlXCI+VGhhbmtzLjwvaDI+XG5cbiAgICAgICAgICAgICAgICA8cD5XZSdsbCBnZXQgYmFjayB0byB5b3UgaW4gYSBiaXQuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC90cmFuc2l0aW9uPlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG5cbiAgICAgICAgZGF0YSgpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICduYW1lJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbXBhbnknOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIGJ0blRleHQoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nID8gJ1NlbmRpbmcuLi4nIDogJ1NlbmQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYmVmb3JlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVmb3JlU3VibWl0KClcbiAgICAgICAgICAgICAgICBpZih0aGlzLmVycm9ycy5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGh0dHAucG9zdCgnY29udGFjdCcsIHRoaXMuZm9ybURhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih0aGlzLm9uU3VjY2VzcywgdGhpcy5vbkVycm9yKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVycm9yKGVycm9ycykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JzKVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsaWRhdGUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtRGF0YS5uYW1lICE9PSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmZvcm1EYXRhLmVtYWlsICE9PSBudWxsIFxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmZvcm1EYXRhLm1lc3NhZ2UgIT09IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgXG4gICAgQGltcG9ydCBcIi4uLy4uL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzXCI7XG4gICAgQGltcG9ydCBcIi4uLy4uL3Nhc3MvX21peGlucy5zY3NzXCI7XG5cbiAgICAuZm9ybS1yb3d7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC44cyAkZWFzZS1vdXQtYmFjaztcbiAgICAgICAgQGluY2x1ZGUgZGVsYXkoMCwgMC4xLCA3KTtcbiAgICB9XG5cbiAgICAuaXNSZWFkeXtcbiAgICAgICAgLmZvcm0tcm93e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENvbnRhY3QudnVlPzBkZWI5MWJlIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0RvdWJsZVF1aWNrJztcXG4gIHNyYzogdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9kb3VibGUtcXVpY2suZW90XCIpK1wiKTtcXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cXG4gIHNyYzogdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9kb3VibGUtcXVpY2suZW90XCIpK1wiPyNpZWZpeCkgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL2RvdWJsZS1xdWljay53b2ZmXCIpK1wiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9kb3VibGUtcXVpY2sudHRmXCIpK1wiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvZG91YmxlLXF1aWNrLnN2Z1wiKStcIiMyODc4NGU0Y2U3Zjc4MGNkNWJlMzgyNWVlZjdkODI0YikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIC8qIExlZ2FjeSBpT1MgKi9cXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdHaWxyb3kgRXh0cmFCb2xkJztcXG4gIHNyYzogdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLmVvdFwiKStcIik7XFxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXFxuICBzcmM6IHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvR2lscm95LUV4dHJhQm9sZC5lb3RcIikrXCI/I2llZml4KSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIityZXF1aXJlKFwiLi4vLi4vZm9udHMvR2lscm95LUV4dHJhQm9sZC53b2ZmXCIpK1wiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiK3JlcXVpcmUoXCIuLi8uLi9mb250cy9HaWxyb3ktRXh0cmFCb2xkLnR0ZlwiKStcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXCIrcmVxdWlyZShcIi4uLy4uL2ZvbnRzL0dpbHJveS1FeHRyYUJvbGQuc3ZnXCIpK1wiI2QwNjMyNTA1MmM1MTEzNzg0YWYzMzhhZGE2M2ZiNTEyKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgLyogTGVnYWN5IGlPUyAqL1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWZyb20tdG9wIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWZyb20tdG9wIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtdG8tdG9wIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvLXRvcCB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWZyb20tYm90dG9tIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLWJvdHRvbSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS10by1ib3R0b20ge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvLWJvdHRvbSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS1mcm9tLXJpZ2h0IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLXRvLXJpZ2h0IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMzBkZWcpIHNjYWxlKDAuOCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoLTMwZGVnKSBzY2FsZSgwLjgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS10by1yaWdodCB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoLTMwZGVnKSBzY2FsZSgwLjgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKC0zMGRlZykgc2NhbGUoMC44KTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1mcm9tLWxlZnQge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtZnJvbS1sZWZ0IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtdG8tbGVmdCB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgzMGRlZykgc2NhbGUoMC44KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDMwZGVnKSBzY2FsZSgwLjgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS10by1sZWZ0IHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDMwZGVnKSBzY2FsZSgwLjgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMzBkZWcpIHNjYWxlKDAuOCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluLWluIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4taW4ge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XFxuNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xcbjUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KSByb3RhdGVZKDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSg1ZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXG59XFxuMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2hha2Uge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMXB4KSByb3RhdGUoMGRlZyk7XFxufVxcbjEwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xcbn1cXG4yMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xcbn1cXG4zMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAycHgpIHJvdGF0ZSgwZGVnKTtcXG59XFxuNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG59XFxuNTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xcbn1cXG42MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xcbn1cXG43MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xcbn1cXG44MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XFxufVxcbjkwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMXB4KSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcXG59XFxuMTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxufVxcbjIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7XFxufVxcbjMwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAycHgpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbn1cXG40MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xcbn1cXG41MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7XFxufVxcbjYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XFxufVxcbjcwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XFxufVxcbjgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcXG59XFxuOTAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KSByb3RhdGUoMGRlZyk7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmcge1xcbjIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XFxufVxcbjQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMTBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcXG59XFxuNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XFxufVxcbjgwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHN3aW5nIHtcXG4yMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMTVkZWcpO1xcbn1cXG40MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XFxufVxcbjYwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xcbn1cXG44MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVUb1RvcCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZTNkKDEsIDAsIDAsIDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUzZCgxLCAwLCAwLCAwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmYWRlVG9Ub3Age1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUzZCgxLCAwLCAwLCAwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlM2QoMSwgMCwgMCwgMGRlZyk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlRnJvbUJvdHRvbSB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIC05MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIC05MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlM2QoMSwgMCwgMCwgMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZTNkKDEsIDAsIDAsIDBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmYWRlRnJvbUJvdHRvbSB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIC05MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZTNkKDEsIDAsIDAsIC05MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlM2QoMSwgMCwgMCwgMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZTNkKDEsIDAsIDAsIDBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZsaXBJblgge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtOTBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtOTBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMjBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAyMGRlZyk7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG42MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMTBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAtMTBkZWcpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG44MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA1ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgNWRlZyk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmbGlwSW5YIHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTkwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTkwZGVnKTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDIwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgMjBkZWcpO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcXG59XFxuNjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTEwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTEwZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuODAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlM2QoMSwgMCwgMCwgNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDVkZWcpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcXG59XFxufVxcbi5mb3JtLXJvdyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGN1YmljLWJlemllcigwLjY0LCAtMC4xNCwgMCwgMik7XFxufVxcbi5mb3JtLXJvdzpudGgtY2hpbGQoMSkge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcbn1cXG4uZm9ybS1yb3c6bnRoLWNoaWxkKDIpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmZvcm0tcm93Om50aC1jaGlsZCgzKSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxufVxcbi5mb3JtLXJvdzpudGgtY2hpbGQoNCkge1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xcbn1cXG4uZm9ybS1yb3c6bnRoLWNoaWxkKDUpIHtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLmZvcm0tcm93Om50aC1jaGlsZCg2KSB7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XFxufVxcbi5pc1JlYWR5IC5mb3JtLXJvdyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCJdKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iZDVkMzZmY1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Db250YWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFnZSBwYWQgaW5uZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNvbnRhY3QtZm9ybVwiXG4gICAgfVxuICB9LCBbX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcImZhZGVcIlxuICAgIH1cbiAgfSwgWyghX3ZtLnN1Y2Nlc3MpID8gX2MoJ2RpdicsIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHVnZVwiXG4gIH0sIFtfdm0uX3YoXCJIZWxsby5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiV2FudCB0byB1c2UgdXMgZm9yIHlvdXIgbmV4dCBwcm9qZWN0PyBUZWxsIHVzIGFib3V0IGl0IGhlcmUgYW5kIHdlJ2xsIGdldCBiYWNrIHRvIHlvdSBBU0FQLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIHtcbiAgICByZWY6IFwiZm9ybVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImFjdGlvblwiOiBcIi9jb250YWN0XCIsXG4gICAgICBcIm1ldGhvZFwiOiBcInBvc3RcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm5hbWVcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5uYW1lXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIllvdXIgbmFtZVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLm5hbWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcImNvbXBhbnlcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNvbXBhbnlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLmNvbXBhbnkpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmb3JtRGF0YS5jb21wYW55XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJuYW1lXCI6IFwiY29tcGFueVwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNvbXBhbnlcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5jb21wYW55KVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmZvcm1EYXRhLmNvbXBhbnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJmb3JcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkVtYWlsIGFkZHJlc3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmZvcm1EYXRhLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZm9ybURhdGEuZW1haWxcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcIm5hbWVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVtYWlsIGFkZHJlc3NcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5mb3JtRGF0YS5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5mb3JtRGF0YS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZvclwiOiBcIm1lc3NhZ2VcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkFib3V0IHlvdXIgcHJvamVjdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dGFyZWEnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZm9ybURhdGEubWVzc2FnZSksXG4gICAgICBleHByZXNzaW9uOiBcImZvcm1EYXRhLm1lc3NhZ2VcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogXCJtZXNzYWdlXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW50ZXIgbWVzc2FnZVwiLFxuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmZvcm1EYXRhLm1lc3NhZ2UpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uZm9ybURhdGEubWVzc2FnZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWJtaXRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLmJ0blRleHRcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3ZtLm9uU3VibWl0KCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXSldKV0pIDogX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4LWNlbnRlciBmbGV4LWNvbHVtblwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaHVnZVwiXG4gIH0sIFtfdm0uX3YoXCJUaGFua3MuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIldlJ2xsIGdldCBiYWNrIHRvIHlvdSBpbiBhIGJpdC5cIildKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1iZDVkMzZmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJkNWQzNmZjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29udGFjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iZDVkMzZmY1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db250YWN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiY2QzNDIzNjBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmQ1ZDM2ZmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29udGFjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmQ1ZDM2ZmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29udGFjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJkNWQzNmZjXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbnRhY3QudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9