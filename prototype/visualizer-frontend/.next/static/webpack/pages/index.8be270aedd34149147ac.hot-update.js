webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_forgetValue\", function () {\n      _this.setState({\n        value: null\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rememberValue\", function (value) {\n      _this.setState({\n        value: value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n              p: \"4\",\n              bg: \"steelblue\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n                animation: \"wobbly\",\n                simulationOptions: {\n                  height: 500,\n                  width: 500,\n                  alpha: 1,\n                  animate: true\n                },\n                labelAttr: \"label\",\n                highlightDependencies: true,\n                onSelectNode: function onSelectNode(node) {\n                  _this3.setState({\n                    value: node.id\n                  });\n\n                  _this3.forceUpdate();\n                },\n                onDeselectNode: this._forgetValue,\n                children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 10\n                }, this) : socialdataresponse.nodes.map(function (node) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n                    node: {\n                      id: node.id,\n                      label: node.id,\n                      income: node.income,\n                      radius: Math.ceil(node.income / 1000 % 10)\n                    },\n                    fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n                  }, node.id, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 11\n                  }, _this3);\n                }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n                    link: {\n                      source: link.source,\n                      target: link.target,\n                      value: 5\n                    },\n                    fill: \"blue\"\n                  }, link.source + link.target, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 104,\n                    columnNumber: 11\n                  }, _this3);\n                })]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 8\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n              p: \"4\",\n              children: value ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n                value: value,\n                children: value\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 28\n              }, this) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 5\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInNjYWxlQ2F0ZWdvcnkyMCIsInN0YXRlIiwic29jaWFsZGF0YXJlc3BvbnNlIiwibm9kZXMiLCJsaW5rcyIsImVuZHBvaW50IiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsIm5vZGUiLCJpZCIsImZvcmNlVXBkYXRlIiwiX2ZvcmdldFZhbHVlIiwibGVuZ3RoIiwibWFwIiwibGFiZWwiLCJpbmNvbWUiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsInNjYWxlIiwibGluayIsInNvdXJjZSIsInRhcmdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BOztBQUNBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5QixDLENBQ0E7OztJQW1CTUMsZTs7Ozs7QUFDTCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjs7QUFEa0IsdU5BUUosWUFBTTtBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFDYkMsYUFBSyxFQUFFO0FBRE0sT0FBZDtBQUdBLEtBWmtCOztBQUFBLHlOQWNGLFVBQUNBLEtBQUQsRUFBVztBQUMzQixZQUFLRCxRQUFMLENBQWM7QUFBRUMsYUFBSyxFQUFMQTtBQUFGLE9BQWQ7QUFDQSxLQWhCa0I7O0FBQUEsZ05Ba0JYQyxpRUFBZSxFQWxCSjs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pGLFdBQUssRUFBRSxJQURLO0FBRVpHLHdCQUFrQixFQUFF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R0FBY0QsSUFBSSxDQUFDRSxNQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUQ0QjtBQUFBLGlCQUE3QixDQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBbURDLHFFQUFDLHFEQUFEO0FBQU0sZUFBQyxFQUFDLEdBQVI7QUFBQSx3QkFBYTdCLEtBQUssZ0JBQUcscUVBQUMsb0RBQUQ7QUFBSyxxQkFBSyxFQUFFQSxLQUFaO0FBQUEsMEJBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFILEdBQXNDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCx1QkFERDtBQTJEQTs7OztFQTFGNEI4Qiw0Q0FBSyxDQUFDQyxTOztBQTRGckJsQyw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NvY2lhbE5vZGVHcmFwaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGVydCwgQm94LCBGbGV4LCBHcmlkLCBHcmlkSXRlbSwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNjYWxlQ2F0ZWdvcnkyMCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7XG5cdEludGVyYWN0aXZlRm9yY2VHcmFwaCxcblx0Rm9yY2VHcmFwaE5vZGUsXG5cdEZvcmNlR3JhcGhMaW5rLFxuXHQvLyBIaW50IGFzIGZvcmNlSGludCxcbn0gZnJvbSAncmVhY3QtdmlzLWZvcmNlJztcbmltcG9ydCB7IEhpbiBhcyB2aXNIaW50IH0gZnJvbSAncmVhY3QtdmlzJztcbmltcG9ydCB7IEVORFBPSU5UIH0gZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IHNvY2tldElPQ2xpZW50ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuLy8gZGF0YSBzdHJ1Y3R1cmUgZGVmaW5pdGlvbnMgZm9yIE5vZGVHcmFwaCBjb21wb25lbnRcbmludGVyZmFjZSBsaW5rcyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YXJnZXQ6IHN0cmluZztcbn1cbmludGVyZmFjZSBub2RlcyB7XG5cdGlkOiBzdHJpbmc7XG5cdGluY29tZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBub2RlR3JhcGhEYXRhU3RydWN0IHtcblx0bm9kZXM6IG5vZGVzW107XG5cdGxpbmtzOiBsaW5rc1tdO1xufVxuaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFQcm9wcyB7XG5cdHZhbHVlPzogYW55O1xuXHRzb2NpYWxkYXRhcmVzcG9uc2U6IG5vZGVHcmFwaERhdGFTdHJ1Y3Q7XG5cdGVuZHBvaW50OiBzdHJpbmc7XG59XG5cbmNsYXNzIFNvY2lhbE5vZGVHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgbm9kZUdyYXBoRGF0YVByb3BzPiB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogbnVsbCxcblx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZTogeyBub2RlczogW10sIGxpbmtzOiBbXSB9LFxuXHRcdFx0ZW5kcG9pbnQ6IEVORFBPSU5ULFxuXHRcdH07XG5cdH1cblx0X2ZvcmdldFZhbHVlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0fSk7XG5cdH07XG5cblx0X3JlbWVtYmVyVmFsdWUgPSAodmFsdWUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG5cdH07XG5cblx0c2NhbGUgPSBzY2FsZUNhdGVnb3J5MjAoKTtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBlbmRwb2ludCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvL1Zlcnkgc2ltcGx5IGNvbm5lY3QgdG8gdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcblx0XHQvL0xpc3RlbiBmb3IgZGF0YSBvbiB0aGUgXCJvdXRnb2luZyBkYXRhXCIgbmFtZXNwYWNlIGFuZCBzdXBwbHkgYSBjYWxsYmFjayBmb3Igd2hhdCB0byBkbyB3aGVuIHdlIGdldCBvbmUuIEluIHRoaXMgY2FzZSwgd2Ugc2V0IGEgc3RhdGUgdmFyaWFibGVcblx0XHRzb2NrZXQub24oJ0Zyb21Tb2NpYWxOb2RlRGF0YScsIChkYXRhKSA9PlxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNvY2lhbGRhdGFyZXNwb25zZTogZGF0YSB9KVxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc29jaWFsZGF0YXJlc3BvbnNlLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHQ8RmxleD5cblx0XHRcdFx0XHRcdDxGbGV4IHA9XCI0XCIgYmc9XCJzdGVlbGJsdWVcIj5cblx0XHRcdFx0XHRcdFx0PEludGVyYWN0aXZlRm9yY2VHcmFwaFxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvbj1cIndvYmJseVwiXG5cdFx0XHRcdFx0XHRcdFx0c2ltdWxhdGlvbk9wdGlvbnM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsQXR0cj1cImxhYmVsXCJcblx0XHRcdFx0XHRcdFx0XHRoaWdobGlnaHREZXBlbmRlbmNpZXNcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdE5vZGU9eyhub2RlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5vZGUuaWQgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRvbkRlc2VsZWN0Tm9kZT17dGhpcy5fZm9yZ2V0VmFsdWV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFNwaW5uZXIgLz5cblx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLm1hcCgobm9kZSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaE5vZGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e25vZGUuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogbm9kZS5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluY29tZTogbm9kZS5pbmNvbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyYWRpdXM6IE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9e3RoaXMuc2NhbGUoTWF0aC5jZWlsKChub2RlLmluY29tZSAvIDEwMDApICUgMTApKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHR7c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLmxpbmtzLm1hcCgobGluaykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2xpbmsuc291cmNlICsgbGluay50YXJnZXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGluaz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c291cmNlOiBsaW5rLnNvdXJjZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldDogbGluay50YXJnZXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9JbnRlcmFjdGl2ZUZvcmNlR3JhcGg+XG5cdFx0XHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdFx0XHQ8RmxleCBwPVwiNFwiPnt2YWx1ZSA/IDxCb3ggdmFsdWU9e3ZhbHVlfT57dmFsdWV9PC9Cb3g+IDogbnVsbH08L0ZsZXg+XG5cdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE5vZGVHcmFwaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})