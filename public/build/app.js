(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_autocomplete_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-autocomplete/dist/controller.js */ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js");
/* harmony import */ var tom_select_dist_css_tom_select_default_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tom-select/dist/css/tom-select.default.css */ "./node_modules/tom-select/dist/css/tom-select.default.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': _symfony_ux_autocomplete_dist_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_33__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



































/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var _default_1_instances, _default_1_getCommonConfig, _default_1_createAutocomplete, _default_1_createAutocompleteWithHtmlContents, _default_1_createAutocompleteWithRemoteData, _default_1_stripTags, _default_1_mergeObjects, _default_1_createTomSelect;
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _default_1_instances.add(_assertThisInitialized(_this));
    _this.isObserving = false;
    _this.hasLoadedChoicesPreviously = false;
    return _this;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      if (this.requiresLiveIgnore()) {
        this.element.setAttribute('data-live-ignore', '');
        if (this.element.id) {
          var label = document.querySelector("label[for=\"".concat(this.element.id, "\"]"));
          if (label) {
            label.setAttribute('data-live-ignore', '');
          }
        }
      } else {
        if (!this.mutationObserver) {
          this.mutationObserver = new MutationObserver(function (mutations) {
            _this2.onMutations(mutations);
          });
        }
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithRemoteData).call(this, this.urlValue, this.hasMinCharactersValue ? this.minCharactersValue : null);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocomplete).call(this);
      this.startMutationObserver();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.stopMutationObserver();
      this.tomSelect.destroy();
    }
  }, {
    key: "getMaxOptions",
    value: function getMaxOptions() {
      return this.selectElement ? this.selectElement.options.length : 50;
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used on an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'autocomplete'
      });
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue == 'false') {
        return false;
      }
      if (this.preloadValue == 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }, {
    key: "resetTomSelect",
    value: function resetTomSelect() {
      if (this.tomSelect) {
        this.stopMutationObserver();
        this.tomSelect.clearOptions();
        this.tomSelect.settings.maxOptions = this.getMaxOptions();
        this.tomSelect.sync();
        this.startMutationObserver();
      }
    }
  }, {
    key: "changeTomSelectDisabledState",
    value: function changeTomSelectDisabledState(isDisabled) {
      this.stopMutationObserver();
      if (isDisabled) {
        this.tomSelect.disable();
      } else {
        this.tomSelect.enable();
      }
      this.startMutationObserver();
    }
  }, {
    key: "updateTomSelectPlaceholder",
    value: function updateTomSelectPlaceholder() {
      var input = this.element;
      var placeholder = input.getAttribute('placeholder') || input.getAttribute('data-placeholder');
      if (!placeholder && !this.tomSelect.allowEmptyOption) {
        var option = input.querySelector('option[value=""]');
        if (option) {
          placeholder = option.textContent;
        }
      }
      if (placeholder) {
        this.stopMutationObserver();
        this.tomSelect.settings.placeholder = placeholder;
        this.tomSelect.control_input.setAttribute('placeholder', placeholder);
        this.startMutationObserver();
      }
    }
  }, {
    key: "startMutationObserver",
    value: function startMutationObserver() {
      if (!this.isObserving && this.mutationObserver) {
        this.mutationObserver.observe(this.element, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true
        });
        this.isObserving = true;
      }
    }
  }, {
    key: "stopMutationObserver",
    value: function stopMutationObserver() {
      if (this.isObserving && this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.isObserving = false;
      }
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this3 = this;
      var addedOptionElements = [];
      var removedOptionElements = [];
      var hasAnOptionChanged = false;
      var changeDisabledState = false;
      var changePlaceholder = false;
      mutations.forEach(function (mutation) {
        switch (mutation.type) {
          case 'childList':
            if (mutation.target instanceof HTMLOptionElement) {
              if (mutation.target.value === '') {
                changePlaceholder = true;
                break;
              }
              hasAnOptionChanged = true;
              break;
            }
            mutation.addedNodes.forEach(function (node) {
              if (node instanceof HTMLOptionElement) {
                if (removedOptionElements.includes(node)) {
                  removedOptionElements.splice(removedOptionElements.indexOf(node), 1);
                  return;
                }
                addedOptionElements.push(node);
              }
            });
            mutation.removedNodes.forEach(function (node) {
              if (node instanceof HTMLOptionElement) {
                if (addedOptionElements.includes(node)) {
                  addedOptionElements.splice(addedOptionElements.indexOf(node), 1);
                  return;
                }
                removedOptionElements.push(node);
              }
            });
            break;
          case 'attributes':
            if (mutation.target instanceof HTMLOptionElement) {
              hasAnOptionChanged = true;
              break;
            }
            if (mutation.target === _this3.element && mutation.attributeName === 'disabled') {
              changeDisabledState = true;
              break;
            }
            break;
          case 'characterData':
            if (mutation.target instanceof Text && mutation.target.parentElement instanceof HTMLOptionElement) {
              if (mutation.target.parentElement.value === '') {
                changePlaceholder = true;
                break;
              }
              hasAnOptionChanged = true;
            }
        }
      });
      if (hasAnOptionChanged || addedOptionElements.length > 0 || removedOptionElements.length > 0) {
        this.resetTomSelect();
      }
      if (changeDisabledState) {
        this.changeTomSelectDisabledState(this.formElement.disabled);
      }
      if (changePlaceholder) {
        this.updateTomSelectPlaceholder();
      }
    }
  }, {
    key: "requiresLiveIgnore",
    value: function requiresLiveIgnore() {
      return this.element instanceof HTMLSelectElement && this.element.multiple;
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_32__.Controller);
_default_1_instances = new WeakSet(), _default_1_getCommonConfig = function _default_1_getCommonConfig() {
  var _this4 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this4.noResultsFoundTextValue, "</div>");
    }
  };
  var requiresLiveIgnore = this.requiresLiveIgnore();
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this4.tomSelect.setTextboxValue('');
    },
    onInitialize: function onInitialize() {
      if (requiresLiveIgnore) {
        var tomSelect = this;
        tomSelect.wrapper.setAttribute('data-live-ignore', '');
      }
    },
    closeAfterSelect: true
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _default_1_createAutocomplete = function _default_1_createAutocomplete() {
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions()
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithHtmlContents = function _default_1_createAutocompleteWithHtmlContents() {
  var _this5 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions(),
    score: function score(search) {
      var scoringFunction = _this5.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(Object.assign(Object.assign({}, item), {
          text: __classPrivateFieldGet(_this5, _default_1_instances, "m", _default_1_stripTags).call(_this5, item.text)
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item.text, "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithRemoteData = function _default_1_createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _this7 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this6 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this6.setNextUrl(query, json.next_page);
        callback(json.results.options || json.results, json.results.optgroups || []);
      })["catch"](function () {
        return callback([], []);
      });
    },
    shouldLoad: function shouldLoad(query) {
      if (null !== minCharacterLength) {
        return query.length >= minCharacterLength;
      }
      if (_this7.hasLoadedChoicesPreviously) {
        return true;
      }
      if (query.length > 0) {
        _this7.hasLoadedChoicesPreviously = true;
      }
      return query.length >= 3;
    },
    optgroupField: 'group_by',
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2.text, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this7.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this7.noResultsFoundTextValue, "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_stripTags = function _default_1_stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _default_1_mergeObjects = function _default_1_mergeObjects(object1, object2) {
  return Object.assign(Object.assign({}, object1), object2);
}, _default_1_createTomSelect = function _default_1_createTomSelect(options) {
  var preConnectPayload = {
    options: options
  };
  this.dispatchEvent('pre-connect', preConnectPayload);
  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_33___default())(this.formElement, options);
  var connectPayload = {
    tomSelect: tomSelect,
    options: options
  };
  this.dispatchEvent('connect', connectPayload);
  return tomSelect;
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  noResultsFoundText: String,
  noMoreResultsText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-a37be0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87RUFDdEJDLGtCQUFrQixFQUFFSCxNQUFNO0VBQzFCSSxpQkFBaUIsRUFBRUosTUFBTTtFQUN6QkssYUFBYSxFQUFFQyxNQUFNO0VBQ3JCQyxnQkFBZ0IsRUFBRXpDLE1BQU07RUFDeEIwQixPQUFPLEVBQUVRO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdWRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1hdXRvY29tcGxldGUvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LWF1dG9jb21wbGV0ZS9kaXN0L2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICd0b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuZGVmYXVsdC5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtYXV0b2NvbXBsZXRlLS1hdXRvY29tcGxldGUnOiBjb250cm9sbGVyXzAsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxuXG52YXIgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhLCBfZGVmYXVsdF8xX3N0cmlwVGFncywgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0O1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9kZWZhdWx0XzFfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09ic2VydmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5ID0gZmFsc2U7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVzTGl2ZUlnbm9yZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJywgJycpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHt0aGlzLmVsZW1lbnQuaWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScsICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk11dGF0aW9ucyhtdXRhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKS5jYWxsKHRoaXMsIHRoaXMudXJsVmFsdWUsIHRoaXMuaGFzTWluQ2hhcmFjdGVyc1ZhbHVlID8gdGhpcy5taW5DaGFyYWN0ZXJzVmFsdWUgOiBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zQXNIdG1sVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICB0aGlzLnRvbVNlbGVjdC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGdldE1heE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGggOiA1MDtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGZvcm1FbGVtZW50KCkge1xuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXRvY29tcGxldGUgU3RpbXVsdXMgY29udHJvbGxlciBjYW4gb25seSBiZSB1c2VkIG9uIGFuIDxpbnB1dD4gb3IgPHNlbGVjdD4uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ2F1dG9jb21wbGV0ZScgfSk7XG4gICAgfVxuICAgIGdldCBwcmVsb2FkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzUHJlbG9hZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ZvY3VzJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVsb2FkVmFsdWUgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZWxvYWRWYWx1ZTtcbiAgICB9XG4gICAgcmVzZXRUb21TZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvbVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuY2xlYXJPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy5tYXhPcHRpb25zID0gdGhpcy5nZXRNYXhPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zeW5jKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0TXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH1cbiAgICB1cGRhdGVUb21TZWxlY3RQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSB8fCBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgaWYgKCFwbGFjZWhvbGRlciAmJiAhdGhpcy50b21TZWxlY3QuYWxsb3dFbXB0eU9wdGlvbikge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gaW5wdXQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJyk7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuY29udHJvbF9pbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydE11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09ic2VydmluZyAmJiB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc09ic2VydmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcE11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT2JzZXJ2aW5nICYmIHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPYnNlcnZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYWRkZWRPcHRpb25FbGVtZW50cyA9IFtdO1xuICAgICAgICBjb25zdCByZW1vdmVkT3B0aW9uRWxlbWVudHMgPSBbXTtcbiAgICAgICAgbGV0IGhhc0FuT3B0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgY2hhbmdlRGlzYWJsZWRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgY2hhbmdlUGxhY2Vob2xkZXIgPSBmYWxzZTtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0IGluc3RhbmNlb2YgSFRNTE9wdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW5PcHRpb25DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uLmFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkT3B0aW9uRWxlbWVudHMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZE9wdGlvbkVsZW1lbnRzLnNwbGljZShyZW1vdmVkT3B0aW9uRWxlbWVudHMuaW5kZXhPZihub2RlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkZWRPcHRpb25FbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTE9wdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkZWRPcHRpb25FbGVtZW50cy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZE9wdGlvbkVsZW1lbnRzLnNwbGljZShhZGRlZE9wdGlvbkVsZW1lbnRzLmluZGV4T2Yobm9kZSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRPcHRpb25FbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQgaW5zdGFuY2VvZiBIVE1MT3B0aW9uRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW5PcHRpb25DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50YXJnZXQgPT09IHRoaXMuZWxlbWVudCAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VEaXNhYmxlZFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYXJhY3RlckRhdGEnOlxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0IGluc3RhbmNlb2YgVGV4dCAmJiBtdXRhdGlvbi50YXJnZXQucGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxPcHRpb25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0LnBhcmVudEVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQW5PcHRpb25DaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc0FuT3B0aW9uQ2hhbmdlZCB8fCBhZGRlZE9wdGlvbkVsZW1lbnRzLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZE9wdGlvbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUb21TZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlRGlzYWJsZWRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb21TZWxlY3REaXNhYmxlZFN0YXRlKHRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb21TZWxlY3RQbGFjZWhvbGRlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlcXVpcmVzTGl2ZUlnbm9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5tdWx0aXBsZTtcbiAgICB9XG59XG5fZGVmYXVsdF8xX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcoKSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHt9O1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAhdGhpcy5zZWxlY3RFbGVtZW50IHx8IHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcbiAgICBpZiAoIXRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgJiYgIWlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5jbGVhcl9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICBwbHVnaW5zLnJlbW92ZV9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAodGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBwbHVnaW5zLnZpcnR1YWxfc2Nyb2xsID0ge307XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IHtcbiAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVxdWlyZXNMaXZlSWdub3JlID0gdGhpcy5yZXF1aXJlc0xpdmVJZ25vcmUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHJlbmRlcixcbiAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgb25JdGVtQWRkOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRUZXh0Ym94VmFsdWUoJycpO1xuICAgICAgICB9LFxuICAgICAgICBvbkluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlc0xpdmVJZ25vcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b21TZWxlY3QgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRvbVNlbGVjdC53cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VBZnRlclNlbGVjdDogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy5zZWxlY3RFbGVtZW50ICYmICF0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgIGNvbmZpZy5zaG91bGRMb2FkID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29uZmlnLCB0aGlzLnRvbVNlbGVjdE9wdGlvbnNWYWx1ZSk7XG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5nZXRNYXhPcHRpb25zKCksXG4gICAgICAgIHNjb3JlOiAoc2VhcmNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY29yaW5nRnVuY3Rpb24gPSB0aGlzLnRvbVNlbGVjdC5nZXRTY29yZUZ1bmN0aW9uKHNlYXJjaCk7XG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcmluZ0Z1bmN0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSksIHsgdGV4dDogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfc3RyaXBUYWdzKS5jYWxsKHRoaXMsIGl0ZW0udGV4dCkgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEoYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwsIG1pbkNoYXJhY3Rlckxlbmd0aCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcbiAgICAgICAgZmlyc3RVcmw6IChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgICAgICAgIHJldHVybiBgJHthdXRvY29tcGxldGVFbmRwb2ludFVybH0ke3NlcGFyYXRvcn1xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDogZnVuY3Rpb24gKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0VXJsKHF1ZXJ5LCBqc29uLm5leHRfcGFnZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5yZXN1bHRzLm9wdGlvbnMgfHwganNvbi5yZXN1bHRzLCBqc29uLnJlc3VsdHMub3B0Z3JvdXBzIHx8IFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKFtdLCBbXSkpO1xuICAgICAgICB9LFxuICAgICAgICBzaG91bGRMb2FkOiAocXVlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkubGVuZ3RoID49IG1pbkNoYXJhY3Rlckxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSAzO1xuICAgICAgICB9LFxuICAgICAgICBvcHRncm91cEZpZWxkOiAnZ3JvdXBfYnknLFxuICAgICAgICBzY29yZTogZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vX21vcmVfcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLW1vcmUtcmVzdWx0c1wiPiR7dGhpcy5ub01vcmVSZXN1bHRzVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHNcIj4ke3RoaXMubm9SZXN1bHRzRm91bmRUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByZWxvYWQ6IHRoaXMucHJlbG9hZCxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfZGVmYXVsdF8xX3N0cmlwVGFncyA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfc3RyaXBUYWdzKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbn0sIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9iamVjdDEpLCBvYmplY3QyKTtcbn0sIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0ID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3Qob3B0aW9ucykge1xuICAgIGNvbnN0IHByZUNvbm5lY3RQYXlsb2FkID0geyBvcHRpb25zIH07XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHByZUNvbm5lY3RQYXlsb2FkKTtcbiAgICBjb25zdCB0b21TZWxlY3QgPSBuZXcgVG9tU2VsZWN0KHRoaXMuZm9ybUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGNvbm5lY3RQYXlsb2FkID0geyB0b21TZWxlY3QsIG9wdGlvbnMgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCBjb25uZWN0UGF5bG9hZCk7XG4gICAgcmV0dXJuIHRvbVNlbGVjdDtcbn07XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIG9wdGlvbnNBc0h0bWw6IEJvb2xlYW4sXG4gICAgbm9SZXN1bHRzRm91bmRUZXh0OiBTdHJpbmcsXG4gICAgbm9Nb3JlUmVzdWx0c1RleHQ6IFN0cmluZyxcbiAgICBtaW5DaGFyYWN0ZXJzOiBOdW1iZXIsXG4gICAgdG9tU2VsZWN0T3B0aW9uczogT2JqZWN0LFxuICAgIHByZWxvYWQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiLCJUb21TZWxlY3QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsImdldCIsIl9kZWZhdWx0XzFfaW5zdGFuY2VzIiwiX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWciLCJfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cyIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEiLCJfZGVmYXVsdF8xX3N0cmlwVGFncyIsIl9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzIiwiX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QiLCJkZWZhdWx0XzEiLCJfdGhpcyIsImFkZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJpc09ic2VydmluZyIsImhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5IiwiaW5pdGlhbGl6ZSIsIl90aGlzMiIsInJlcXVpcmVzTGl2ZUlnbm9yZSIsInNldEF0dHJpYnV0ZSIsImlkIiwibGFiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm9uTXV0YXRpb25zIiwidXJsVmFsdWUiLCJ0b21TZWxlY3QiLCJoYXNNaW5DaGFyYWN0ZXJzVmFsdWUiLCJtaW5DaGFyYWN0ZXJzVmFsdWUiLCJvcHRpb25zQXNIdG1sVmFsdWUiLCJzdGFydE11dGF0aW9uT2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwic3RvcE11dGF0aW9uT2JzZXJ2ZXIiLCJkZXN0cm95IiwiZ2V0TWF4T3B0aW9ucyIsInNlbGVjdEVsZW1lbnQiLCJvcHRpb25zIiwibGVuZ3RoIiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiRXJyb3IiLCJkaXNwYXRjaEV2ZW50IiwibmFtZSIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsImhhc1ByZWxvYWRWYWx1ZSIsInByZWxvYWRWYWx1ZSIsInJlc2V0VG9tU2VsZWN0IiwiY2xlYXJPcHRpb25zIiwic2V0dGluZ3MiLCJtYXhPcHRpb25zIiwic3luYyIsImNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsInVwZGF0ZVRvbVNlbGVjdFBsYWNlaG9sZGVyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImdldEF0dHJpYnV0ZSIsImFsbG93RW1wdHlPcHRpb24iLCJvcHRpb24iLCJjb250cm9sX2lucHV0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhdHRyaWJ1dGVzIiwiY2hhcmFjdGVyRGF0YSIsIl90aGlzMyIsImFkZGVkT3B0aW9uRWxlbWVudHMiLCJyZW1vdmVkT3B0aW9uRWxlbWVudHMiLCJoYXNBbk9wdGlvbkNoYW5nZWQiLCJjaGFuZ2VEaXNhYmxlZFN0YXRlIiwiY2hhbmdlUGxhY2Vob2xkZXIiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJ0eXBlIiwidGFyZ2V0IiwiSFRNTE9wdGlvbkVsZW1lbnQiLCJhZGRlZE5vZGVzIiwibm9kZSIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwiVGV4dCIsInBhcmVudEVsZW1lbnQiLCJmb3JtRWxlbWVudCIsImRpc2FibGVkIiwibXVsdGlwbGUiLCJXZWFrU2V0IiwiX3RoaXM0IiwicGx1Z2lucyIsImlzTXVsdGlwbGUiLCJjbGVhcl9idXR0b24iLCJ0aXRsZSIsInJlbW92ZV9idXR0b24iLCJ2aXJ0dWFsX3Njcm9sbCIsInJlbmRlciIsIm5vX3Jlc3VsdHMiLCJub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZSIsImNvbmZpZyIsIm9uSXRlbUFkZCIsInNldFRleHRib3hWYWx1ZSIsIm9uSW5pdGlhbGl6ZSIsIndyYXBwZXIiLCJjbG9zZUFmdGVyU2VsZWN0Iiwic2hvdWxkTG9hZCIsInRvbVNlbGVjdE9wdGlvbnNWYWx1ZSIsIl90aGlzNSIsInNjb3JlIiwic2VhcmNoIiwic2NvcmluZ0Z1bmN0aW9uIiwiZ2V0U2NvcmVGdW5jdGlvbiIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwiYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwiLCJtaW5DaGFyYWN0ZXJMZW5ndGgiLCJfdGhpczciLCJmaXJzdFVybCIsInF1ZXJ5Iiwic2VwYXJhdG9yIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZCIsImNhbGxiYWNrIiwiX3RoaXM2IiwidXJsIiwiZ2V0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0TmV4dFVybCIsIm5leHRfcGFnZSIsInJlc3VsdHMiLCJvcHRncm91cHMiLCJvcHRncm91cEZpZWxkIiwibm9fbW9yZV9yZXN1bHRzIiwibm9Nb3JlUmVzdWx0c1RleHRWYWx1ZSIsInByZWxvYWQiLCJzdHJpbmciLCJyZXBsYWNlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJwcmVDb25uZWN0UGF5bG9hZCIsImNvbm5lY3RQYXlsb2FkIiwidmFsdWVzIiwiU3RyaW5nIiwib3B0aW9uc0FzSHRtbCIsIkJvb2xlYW4iLCJub1Jlc3VsdHNGb3VuZFRleHQiLCJub01vcmVSZXN1bHRzVGV4dCIsIm1pbkNoYXJhY3RlcnMiLCJOdW1iZXIiLCJ0b21TZWxlY3RPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==