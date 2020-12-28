webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_forgetValue\", function () {\n      _this.setState({\n        value: null\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rememberValue\", function (value) {\n      _this.setState({\n        value: value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n        animation: \"wobbly\",\n        simulationOptions: {\n          height: 500,\n          width: 1000,\n          alpha: 1,\n          animate: true\n        },\n        labelAttr: \"label\",\n        highlightDependencies: true,\n        onSelectNode: function onSelectNode(node) {\n          _this3.setState({\n            value: \"HI\"\n          });\n\n          _this3.forceUpdate();\n        },\n        onDeselectNode: this._forgetValue,\n        children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 6\n        }, this) : socialdataresponse.nodes.map(function (node) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n            node: {\n              id: node.id,\n              label: node.id,\n              income: node.income,\n              radius: Math.ceil(node.income / 1000 % 10)\n            },\n            fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n          }, node.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, _this3);\n        }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n            link: {\n              source: link.source,\n              target: link.target\n            },\n            fill: \"blue\"\n          }, link.source + link.target, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 7\n          }, _this3);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n          children: \"Hi\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInNjYWxlQ2F0ZWdvcnkyMCIsInN0YXRlIiwic29jaWFsZGF0YXJlc3BvbnNlIiwibm9kZXMiLCJsaW5rcyIsImVuZHBvaW50IiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsIm5vZGUiLCJmb3JjZVVwZGF0ZSIsIl9mb3JnZXRWYWx1ZSIsImxlbmd0aCIsIm1hcCIsImlkIiwibGFiZWwiLCJpbmNvbWUiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsInNjYWxlIiwibGluayIsInNvdXJjZSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQUNBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5QixDLENBQ0E7OztJQW9CTUMsZTs7Ozs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVOQVFQLFlBQU07QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQ2JDLGFBQUssRUFBRTtBQURNLE9BQWQ7QUFHQSxLQVpxQjs7QUFBQSx5TkFjTCxVQUFDQSxLQUFELEVBQVc7QUFDM0IsWUFBS0QsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBTEE7QUFBRixPQUFkO0FBQ0EsS0FoQnFCOztBQUFBLGdOQWtCZEMsaUVBQWUsRUFsQkQ7O0FBRXJCLFVBQUtDLEtBQUwsR0FBYTtBQUNaRixXQUFLLEVBQUUsSUFESztBQUVaRyx3QkFBa0IsRUFBRTtB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LDRDQUFLLENBQUNDLFM7O0FBaUZyQmxDLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsZXJ0LCBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZUNhdGVnb3J5MjAgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge1xuICAgIEludGVyYWN0aXZlRm9yY2VHcmFwaCxcblx0Rm9yY2VHcmFwaE5vZGUsXG4gICAgRm9yY2VHcmFwaExpbmssXG4gICAgLy8gSGludCBhcyBmb3JjZUhpbnQsXG59IGZyb20gJ3JlYWN0LXZpcy1mb3JjZSc7XG5pbXBvcnQge0hpbiBhcyB2aXNIaW50fSBmcm9tICdyZWFjdC12aXMnXG5pbXBvcnQge0VORFBPSU5UfSBmcm9tICcuLi9jb25maWcnXG5jb25zdCBzb2NrZXRJT0NsaWVudCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcbi8vIGRhdGEgc3RydWN0dXJlIGRlZmluaXRpb25zIGZvciBOb2RlR3JhcGggY29tcG9uZW50XG5pbnRlcmZhY2UgbGlua3Mge1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFyZ2V0OiBzdHJpbmc7XG59XG5pbnRlcmZhY2Ugbm9kZXMge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5jb21lOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFTdHJ1Y3Qge1xuXHRub2Rlczogbm9kZXNbXTtcbiAgICBsaW5rczogbGlua3NbXTtcbiAgICBcbn1cbmludGVyZmFjZSBub2RlR3JhcGhEYXRhUHJvcHMge1xuICAgIHZhbHVlPzogYW55XG4gICAgc29jaWFsZGF0YXJlc3BvbnNlOiBub2RlR3JhcGhEYXRhU3RydWN0XG4gICAgZW5kcG9pbnQ6IHN0cmluZ1xufVxuXG5jbGFzcyBTb2NpYWxOb2RlR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIG5vZGVHcmFwaERhdGFQcm9wcz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2U6IHsgbm9kZXM6IFtdLCBsaW5rczogW10gfSxcblx0XHRcdGVuZHBvaW50OiBFTkRQT0lOVCxcblx0XHR9O1xuXHR9XG5cdF9mb3JnZXRWYWx1ZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdH0pO1xuXHR9O1xuXG5cdF9yZW1lbWJlclZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuXHR9O1xuXG5cdHNjYWxlID0gc2NhbGVDYXRlZ29yeTIwKCk7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZW5kcG9pbnQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly9WZXJ5IHNpbXBseSBjb25uZWN0IHRvIHRoZSBzb2NrZXRcblx0XHRjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG5cdFx0Ly9MaXN0ZW4gZm9yIGRhdGEgb24gdGhlIFwib3V0Z29pbmcgZGF0YVwiIG5hbWVzcGFjZSBhbmQgc3VwcGx5IGEgY2FsbGJhY2sgZm9yIHdoYXQgdG8gZG8gd2hlbiB3ZSBnZXQgb25lLiBJbiB0aGlzIGNhc2UsIHdlIHNldCBhIHN0YXRlIHZhcmlhYmxlXG5cdFx0c29ja2V0Lm9uKCdGcm9tU29jaWFsTm9kZURhdGEnLCAoZGF0YSkgPT5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzb2NpYWxkYXRhcmVzcG9uc2U6IGRhdGEgfSlcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNvY2lhbGRhdGFyZXNwb25zZSwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxJbnRlcmFjdGl2ZUZvcmNlR3JhcGhcblx0XHRcdFx0YW5pbWF0aW9uPVwid29iYmx5XCJcblx0XHRcdFx0c2ltdWxhdGlvbk9wdGlvbnM9e3tcblx0XHRcdFx0XHRoZWlnaHQ6IDUwMCxcblx0XHRcdFx0XHR3aWR0aDogMTAwMCxcblx0XHRcdFx0XHRhbHBoYTogMSxcblx0XHRcdFx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRsYWJlbEF0dHI9XCJsYWJlbFwiXG5cdFx0XHRcdGhpZ2hsaWdodERlcGVuZGVuY2llc1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0Tm9kZT17KG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6XCJISVwifSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH19XG5cdFx0XHRcdG9uRGVzZWxlY3ROb2RlPXt0aGlzLl9mb3JnZXRWYWx1ZX1cblx0XHRcdD5cblx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5tYXAoKG5vZGUpID0+IChcblx0XHRcdFx0XHRcdDxGb3JjZUdyYXBoTm9kZVxuXHRcdFx0XHRcdFx0XHRrZXk9e25vZGUuaWR9XG5cdFx0XHRcdFx0XHRcdG5vZGU9e3tcblx0XHRcdFx0XHRcdFx0XHRpZDogbm9kZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogbm9kZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRpbmNvbWU6IG5vZGUuaW5jb21lLFxuXHRcdFx0XHRcdFx0XHRcdHJhZGl1czogTWF0aC5jZWlsKChub2RlLmluY29tZSAvIDEwMDApICUgMTApLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRmaWxsPXt0aGlzLnNjYWxlKE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubGVuZ3RoID09IDAgPyAoXG5cdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2UubGlua3MubWFwKChsaW5rKSA9PiAoXG5cdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaExpbmtcblx0XHRcdFx0XHRcdFx0a2V5PXtsaW5rLnNvdXJjZSArIGxpbmsudGFyZ2V0fVxuXHRcdFx0XHRcdFx0XHRsaW5rPXt7IHNvdXJjZTogbGluay5zb3VyY2UsIHRhcmdldDogbGluay50YXJnZXQgfX1cblx0XHRcdFx0XHRcdFx0ZmlsbD1cImJsdWVcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHQpfVxuICAgICAgICAgICAgICAgIDxCb3g+SGk8L0JveD5cblx0XHRcdDwvSW50ZXJhY3RpdmVGb3JjZUdyYXBoPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE5vZGVHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})