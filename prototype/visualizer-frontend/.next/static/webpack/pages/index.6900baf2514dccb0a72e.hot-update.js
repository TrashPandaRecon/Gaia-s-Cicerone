webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n // import {Hint} from 'react-vis'\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_forgetValue\", function () {\n      _this.setState({\n        value: null\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rememberValue\", function (value) {\n      _this.setState({\n        value: value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n        animation: \"wobbly\",\n        simulationOptions: {\n          height: 500,\n          width: 1000,\n          alpha: 1,\n          animate: true\n        },\n        labelAttr: \"label\",\n        highlightDependencies: true,\n        onSelectNode: function onSelectNode(node) {\n          _this3.setState({\n            value: \"HI\"\n          });\n\n          _this3.forceUpdate();\n        },\n        onDeselectNode: this._forgetValue,\n        children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 6\n        }, this) : socialdataresponse.nodes.map(function (node) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n            node: {\n              id: node.id,\n              label: node.id,\n              income: node.income,\n              radius: Math.ceil(node.income / 1000 % 10)\n            },\n            fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n          }, node.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 7\n          }, _this3);\n        }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n            link: {\n              source: link.source,\n              target: link.target\n            },\n            fill: \"blue\"\n          }, link.source + link.target, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 7\n          }, _this3);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(Hint, {\n          value: \"YONIC\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInNjYWxlQ2F0ZWdvcnkyMCIsInN0YXRlIiwic29jaWFsZGF0YXJlc3BvbnNlIiwibm9kZXMiLCJsaW5rcyIsImVuZHBvaW50IiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsIm5vZGUiLCJmb3JjZVVwZGF0ZSIsIl9mb3JnZXRWYWx1ZSIsImxlbmd0aCIsIm1hcCIsImlkIiwibGFiZWwiLCJpbmNvbWUiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsInNjYWxlIiwibGluayIsInNvdXJjZSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FPQTs7QUFDQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBOUIsQyxDQUNBOzs7SUFvQk1DLGU7Ozs7O0FBQ0YsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSx1TkFRUCxZQUFNO0FBQ3BCLFlBQUtDLFFBQUwsQ0FBYztBQUNiQyxhQUFLLEVBQUU7QUFETSxPQUFkO0FBR0EsS0FacUI7O0FBQUEseU5BY0wsVUFBQ0EsS0FBRCxFQUFXO0FBQzNCLFlBQUtELFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUxBO0FBQUYsT0FBZDtBQUNBLEtBaEJxQjs7QUFBQSxnTkFrQmRDLGlFQUFlLEVBbEJEOztBQUVyQixVQUFLQyxLQUFMLEdBQWE7QUFDWkYsV0FBSyxFQUFFLElBREs7QUFFWkcsd0JBQWtCLEVBQUU7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Ozs7RUEvRTRCQyw0Q0FBSyxDQUFDQyxTOztBQWlGckJsQyw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NvY2lhbE5vZGVHcmFwaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNjYWxlQ2F0ZWdvcnkyMCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7XG4gICAgSW50ZXJhY3RpdmVGb3JjZUdyYXBoLFxuXHRGb3JjZUdyYXBoTm9kZSxcbiAgICBGb3JjZUdyYXBoTGluayxcbiAgICBIaW50IGFzIGZvcmNlSGludCxcbn0gZnJvbSAncmVhY3QtdmlzLWZvcmNlJztcbi8vIGltcG9ydCB7SGludH0gZnJvbSAncmVhY3QtdmlzJ1xuaW1wb3J0IHtFTkRQT0lOVH0gZnJvbSAnLi4vY29uZmlnJ1xuY29uc3Qgc29ja2V0SU9DbGllbnQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG4vLyBkYXRhIHN0cnVjdHVyZSBkZWZpbml0aW9ucyBmb3IgTm9kZUdyYXBoIGNvbXBvbmVudFxuaW50ZXJmYWNlIGxpbmtzIHtcblx0c291cmNlOiBzdHJpbmc7XG5cdHRhcmdldDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIG5vZGVzIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGluY29tZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBub2RlR3JhcGhEYXRhU3RydWN0IHtcblx0bm9kZXM6IG5vZGVzW107XG4gICAgbGlua3M6IGxpbmtzW107XG4gICAgXG59XG5pbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVByb3BzIHtcbiAgICB2YWx1ZT86IGFueVxuICAgIHNvY2lhbGRhdGFyZXNwb25zZTogbm9kZUdyYXBoRGF0YVN0cnVjdFxuICAgIGVuZHBvaW50OiBzdHJpbmdcbn1cblxuY2xhc3MgU29jaWFsTm9kZUdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBub2RlR3JhcGhEYXRhUHJvcHM+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlOiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH0sXG5cdFx0XHRlbmRwb2ludDogRU5EUE9JTlQsXG5cdFx0fTtcblx0fVxuXHRfZm9yZ2V0VmFsdWUgPSAoKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZTogbnVsbCxcblx0XHR9KTtcblx0fTtcblxuXHRfcmVtZW1iZXJWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcblx0fTtcblxuXHRzY2FsZSA9IHNjYWxlQ2F0ZWdvcnkyMCgpO1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGVuZHBvaW50IH0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vVmVyeSBzaW1wbHkgY29ubmVjdCB0byB0aGUgc29ja2V0XG5cdFx0Y29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuXHRcdC8vTGlzdGVuIGZvciBkYXRhIG9uIHRoZSBcIm91dGdvaW5nIGRhdGFcIiBuYW1lc3BhY2UgYW5kIHN1cHBseSBhIGNhbGxiYWNrIGZvciB3aGF0IHRvIGRvIHdoZW4gd2UgZ2V0IG9uZS4gSW4gdGhpcyBjYXNlLCB3ZSBzZXQgYSBzdGF0ZSB2YXJpYWJsZVxuXHRcdHNvY2tldC5vbignRnJvbVNvY2lhbE5vZGVEYXRhJywgKGRhdGEpID0+XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc29jaWFsZGF0YXJlc3BvbnNlOiBkYXRhIH0pXG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzb2NpYWxkYXRhcmVzcG9uc2UsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8SW50ZXJhY3RpdmVGb3JjZUdyYXBoXG5cdFx0XHRcdGFuaW1hdGlvbj1cIndvYmJseVwiXG5cdFx0XHRcdHNpbXVsYXRpb25PcHRpb25zPXt7XG5cdFx0XHRcdFx0aGVpZ2h0OiA1MDAsXG5cdFx0XHRcdFx0d2lkdGg6IDEwMDAsXG5cdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRcdFx0fX1cblx0XHRcdFx0bGFiZWxBdHRyPVwibGFiZWxcIlxuXHRcdFx0XHRoaWdobGlnaHREZXBlbmRlbmNpZXNcbiAgICAgICAgICAgICAgICBvblNlbGVjdE5vZGU9eyhub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOlwiSElcIn0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9fVxuXHRcdFx0XHRvbkRlc2VsZWN0Tm9kZT17dGhpcy5fZm9yZ2V0VmFsdWV9XG5cdFx0XHQ+XG5cdFx0XHRcdHtzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubGVuZ3RoID09IDAgPyAoXG5cdFx0XHRcdFx0PFNwaW5uZXIgLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubWFwKChub2RlKSA9PiAoXG5cdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaE5vZGVcblx0XHRcdFx0XHRcdFx0a2V5PXtub2RlLmlkfVxuXHRcdFx0XHRcdFx0XHRub2RlPXt7XG5cdFx0XHRcdFx0XHRcdFx0aWQ6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0aW5jb21lOiBub2RlLmluY29tZSxcblx0XHRcdFx0XHRcdFx0XHRyYWRpdXM6IE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0ZmlsbD17dGhpcy5zY2FsZShNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCkpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKVxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdDw+PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLmxpbmtzLm1hcCgobGluaykgPT4gKFxuXHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhMaW5rXG5cdFx0XHRcdFx0XHRcdGtleT17bGluay5zb3VyY2UgKyBsaW5rLnRhcmdldH1cblx0XHRcdFx0XHRcdFx0bGluaz17eyBzb3VyY2U6IGxpbmsuc291cmNlLCB0YXJnZXQ6IGxpbmsudGFyZ2V0IH19XG5cdFx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0KX1cblx0XHRcdFx0PEhpbnQgdmFsdWU9XCJZT05JQ1wiLz5cblx0XHRcdDwvSW50ZXJhY3RpdmVGb3JjZUdyYXBoPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE5vZGVHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})