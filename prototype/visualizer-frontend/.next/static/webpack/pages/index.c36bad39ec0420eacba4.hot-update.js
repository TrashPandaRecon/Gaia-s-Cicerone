webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_forgetValue\", function () {\n      _this.setState({\n        value: null\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rememberValue\", function (value) {\n      _this.setState({\n        value: value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n          animation: \"wobbly\",\n          simulationOptions: {\n            height: 500,\n            width: 1000,\n            alpha: 1,\n            animate: true\n          },\n          labelAttr: \"label\",\n          highlightDependencies: true,\n          onSelectNode: function onSelectNode(node) {\n            _this3.setState({\n              value: 'HI'\n            });\n\n            _this3.forceUpdate();\n          },\n          onDeselectNode: this._forgetValue,\n          children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 9\n          }, this) : socialdataresponse.nodes.map(function (node) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n              node: {\n                id: node.id,\n                label: node.id,\n                income: node.income,\n                radius: Math.ceil(node.income / 1000 % 10)\n              },\n              fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n            }, node.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 10\n            }, _this3);\n          }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n              link: {\n                source: link.source,\n                target: link.target\n              },\n              fill: \"blue\"\n            }, link.source + link.target, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 10\n            }, _this3);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 7\n        }, this), value ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n          value: value\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 16\n        }, this) : null]\n      }, void 0, true);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInNjYWxlQ2F0ZWdvcnkyMCIsInN0YXRlIiwic29jaWFsZGF0YXJlc3BvbnNlIiwibm9kZXMiLCJsaW5rcyIsImVuZHBvaW50IiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsIm5vZGUiLCJmb3JjZVVwZGF0ZSIsIl9mb3JnZXRWYWx1ZSIsImxlbmd0aCIsIm1hcCIsImlkIiwibGFiZWwiLCJpbmNvbWUiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsInNjYWxlIiwibGluayIsInNvdXJjZSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQUNBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5QixDLENBQ0E7OztJQW9CTUMsZTs7Ozs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLHVOQVFQLFlBQU07QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQ2JDLGFBQUssRUFBRTtBQURNLE9BQWQ7QUFHQSxLQVpxQjs7QUFBQSx5TkFjTCxVQUFDQSxLQUFELEVBQVc7QUFDM0IsWUFBS0QsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBTEE7QUFBRixPQUFkO0FBQ0EsS0FoQnFCOztBQUFBLGdOQWtCZEMsaUVBQWUsRUFsQkQ7O0FBRXJCLFVBQUtDLEtBQUwsR0FBYTtBQUNaRixXQUFLLEVBQUUsSUFESztBQUVaRyx3QkFBa0IsRUFBRTtB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QUFBQTtBQUFBO0FBQUEsZ0JBQUgsR0FBMkIsSUE3Q2xDO0FBQUEsc0JBREc7QUFpRE47Ozs7RUFoRjRCOEIsNENBQUssQ0FBQ0MsUzs7QUFrRnJCbEMsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxOb2RlR3JhcGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnQsIEJveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNjYWxlQ2F0ZWdvcnkyMCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7XG4gICAgSW50ZXJhY3RpdmVGb3JjZUdyYXBoLFxuXHRGb3JjZUdyYXBoTm9kZSxcbiAgICBGb3JjZUdyYXBoTGluayxcbiAgICAvLyBIaW50IGFzIGZvcmNlSGludCxcbn0gZnJvbSAncmVhY3QtdmlzLWZvcmNlJztcbmltcG9ydCB7SGluIGFzIHZpc0hpbnR9IGZyb20gJ3JlYWN0LXZpcydcbmltcG9ydCB7RU5EUE9JTlR9IGZyb20gJy4uL2NvbmZpZydcbmNvbnN0IHNvY2tldElPQ2xpZW50ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuLy8gZGF0YSBzdHJ1Y3R1cmUgZGVmaW5pdGlvbnMgZm9yIE5vZGVHcmFwaCBjb21wb25lbnRcbmludGVyZmFjZSBsaW5rcyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YXJnZXQ6IHN0cmluZztcbn1cbmludGVyZmFjZSBub2RlcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBpbmNvbWU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVN0cnVjdCB7XG5cdG5vZGVzOiBub2Rlc1tdO1xuICAgIGxpbmtzOiBsaW5rc1tdO1xuICAgIFxufVxuaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFQcm9wcyB7XG4gICAgdmFsdWU/OiBhbnlcbiAgICBzb2NpYWxkYXRhcmVzcG9uc2U6IG5vZGVHcmFwaERhdGFTdHJ1Y3RcbiAgICBlbmRwb2ludDogc3RyaW5nXG59XG5cbmNsYXNzIFNvY2lhbE5vZGVHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgbm9kZUdyYXBoRGF0YVByb3BzPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogbnVsbCxcblx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZTogeyBub2RlczogW10sIGxpbmtzOiBbXSB9LFxuXHRcdFx0ZW5kcG9pbnQ6IEVORFBPSU5ULFxuXHRcdH07XG5cdH1cblx0X2ZvcmdldFZhbHVlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0fSk7XG5cdH07XG5cblx0X3JlbWVtYmVyVmFsdWUgPSAodmFsdWUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG5cdH07XG5cblx0c2NhbGUgPSBzY2FsZUNhdGVnb3J5MjAoKTtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBlbmRwb2ludCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvL1Zlcnkgc2ltcGx5IGNvbm5lY3QgdG8gdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcblx0XHQvL0xpc3RlbiBmb3IgZGF0YSBvbiB0aGUgXCJvdXRnb2luZyBkYXRhXCIgbmFtZXNwYWNlIGFuZCBzdXBwbHkgYSBjYWxsYmFjayBmb3Igd2hhdCB0byBkbyB3aGVuIHdlIGdldCBvbmUuIEluIHRoaXMgY2FzZSwgd2Ugc2V0IGEgc3RhdGUgdmFyaWFibGVcblx0XHRzb2NrZXQub24oJ0Zyb21Tb2NpYWxOb2RlRGF0YScsIChkYXRhKSA9PlxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNvY2lhbGRhdGFyZXNwb25zZTogZGF0YSB9KVxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc29jaWFsZGF0YXJlc3BvbnNlLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PEludGVyYWN0aXZlRm9yY2VHcmFwaFxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb249XCJ3b2JibHlcIlxuXHRcdFx0XHRcdFx0XHRzaW11bGF0aW9uT3B0aW9ucz17e1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAwLFxuXHRcdFx0XHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsQXR0cj1cImxhYmVsXCJcblx0XHRcdFx0XHRcdFx0aGlnaGxpZ2h0RGVwZW5kZW5jaWVzXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0Tm9kZT17KG5vZGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICdISScgfSk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0Tm9kZT17dGhpcy5fZm9yZ2V0VmFsdWV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHtzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubGVuZ3RoID09IDAgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubWFwKChub2RlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaE5vZGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtub2RlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5jb21lOiBub2RlLmluY29tZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyYWRpdXM6IE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD17dGhpcy5zY2FsZShNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHR7c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdFx0XHRcdDw+PC8+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLmxpbmtzLm1hcCgobGluaykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17bGluay5zb3VyY2UgKyBsaW5rLnRhcmdldH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGluaz17eyBzb3VyY2U6IGxpbmsuc291cmNlLCB0YXJnZXQ6IGxpbmsudGFyZ2V0IH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvSW50ZXJhY3RpdmVGb3JjZUdyYXBoPlxuXHRcdFx0XHRcdFx0e3ZhbHVlID8gPEJveCB2YWx1ZT17dmFsdWV9IC8+IDogbnVsbH1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTm9kZUdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})