webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n          p: \"4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n            animation: \"wobbly\",\n            simulationOptions: {\n              height: 500,\n              width: 1000,\n              alpha: 1,\n              animate: true\n            },\n            labelAttr: \"label\",\n            highlightDependencies: true,\n            children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.nodes.map(function (node) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n                node: {\n                  id: node.id,\n                  label: JSON.stringify(node),\n                  radius: Math.ceil(node.income / 1000 % 10)\n                },\n                fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n              }, node.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 9\n              }, _this3);\n            }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n                link: {\n                  source: link.source,\n                  target: link.target,\n                  value: 5\n                },\n                fill: \"blue\"\n              }, link.source + link.target, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 9\n              }, _this3);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 5\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2NhbGVDYXRlZ29yeTIwIiwic3RhdGUiLCJ2YWx1ZSIsInNvY2lhbGRhdGFyZXNwb25zZSIsIm5vZGVzIiwibGlua3MiLCJlbmRwb2ludCIsIkVORFBPSU5UIiwic29ja2V0Iiwib24iLCJkYXRhIiwic2V0U3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsImxlbmd0aCIsIm1hcCIsIm5vZGUiLCJpZCIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwiaW5jb21lIiwic2NhbGUiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQTlCLEMsQ0FDQTs7O0lBbUJNQyxlOzs7OztBQUNMLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixnTkFTWEMsaUVBQWUsRUFUSjs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQUssRUFBRSxJQURLO0FBRVpDLHdCQUFrQixFQUFFO0FBQUVDLGFBQUssRUFBRSxFQUFUO0FBQWFDLGFBQUssRUFBRTtBQUFwQixPQUZSO0FBR1pDLGNBQVEsRUFBRUMsaURBQVFBO0FBSE4sS0FBYjtBQUZrQjtBQU9sQjs7Ozt3Q0FHbUI7QUFBQTs7QUFBQSxVQUNYRCxRQURXLEdBQ0UsS0FBS0wsS0FEUCxDQUNYSyxRQURXLEVBRW5COztBQUNBLFVBQU1FLE1BQU0sR0FBR1osY0FBYyxDQUFDVSxRQUFELENBQTdCLENBSG1CLENBSW5COztBQUNBRSxZQUFNLENBQUNDLEVBQVAsQ0FBVSxvQkFBVixFQUFnQyxVQUFDQyxJQUFEO0FBQUEsZUFDL0IsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRVIsNEJBQWtCLEVBQUVPO0FBQXRCLFNBQWQsQ0FEK0I7QUFBQSxPQUFoQztBQUdBOzs7NkJBQ1E7QUFBQTs7QUFBQSx3QkFDOEIsS0FBS1QsS0FEbkM7QUFBQSxVQUNBRSxrQkFEQSxlQUNBQSxrQkFEQTtBQUFBLFVBQ29CRCxLQURwQixlQUNvQkEsS0FEcEI7QUFFUiwwQkFDQztBQUFBLCtCQUNDLHFFQUFDLHFEQUFEO0FBQU0sV0FBQyxFQUFDLEdBQVI7QUFBQSxpQ0FDQyxxRUFBQyxzRUFBRDtBQUNDLHFCQUFTLEVBQUMsUUFEWDtBQUVDLDZCQUFpQixFQUFFO0FBQ2xCVSxvQkFBTSxFQUFFLEdBRFU7QUFFbEJDLG1CQUFLLEVBQUUsSUFGVztBQUdsQkMsbUJBQUssRUFBRSxDQUhXO0FBSWxCQyxxQkFBTyxFQUFFO0FBSlMsYUFGcEI7QUFRQyxxQkFBUyxFQUFDLE9BUlg7QUFTQyxpQ0FBcUIsTUFUdEI7QUFBQSx1QkFXRVosa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCWSxNQUF6QixJQUFtQyxDQUFuQyxnQkFDQSx1SkFEQSxHQUdBYixrQkFBa0IsQ0FBQ0MsS0FBbkIsQ0FBeUJhLEdBQXpCLENBQTZCLFVBQUNDLElBQUQ7QUFBQSxrQ0FDNUIscUVBQUMsK0RBQUQ7QUFFQyxvQkFBSSxFQUFFO0FBQ0xDLG9CQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFESjtBQUVMQyx1QkFBSyxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZixDQUZGO0FBR0xLLHdCQUFNLEVBQUVDLElBQUksQ0FBQ0MsSUFBTCxDQUFXUCxJQUFJLENBQUNRLE1BQUwsR0FBYyxJQUFmLEdBQXVCLEVBQWpDO0FBSEgsaUJBRlA7QUFPQyxvQkFBSSxFQUFFLE1BQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLENBQUNDLElBQUwsQ0FBV1AsSUFBSSxDQUFDUSxNQUFMLEdBQWMsSUFBZixHQUF1QixFQUFqQyxDQUFYO0FBUFAsaUJBQ01SLElBQUksQ0FBQ0MsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUQ0QjtBQUFBLGFBQTdCLENBZEYsRUEwQkVoQixrQkFBa0IsQ0FBQ0MsS0FBbkIsQ0FBeUJZLE1BQXpCLElBQW1DLENBQW5DLGdCQUNBLHVKQURBLEdBR0FiLGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QlksR0FBekIsQ0FBNkIsVUFBQ1csSUFBRDtBQUFBLGtDQUM1QixxRUFBQywrREFBRDtBQUVDLG9CQUFJLEVBQUU7QUFDTEMsd0JBQU0sRUFBRUQsSUFBSSxDQUFDQyxNQURSO0FBRUxDLHdCQUFNLEVBQUVGLElBQUksQ0FBQ0UsTUFGUjtBQUdMNUIsdUJBQUssRUFBRTtBQUhGLGlCQUZQO0FBT0Msb0JBQUksRUFBQztBQVBOLGlCQUNNMEIsSUFBSSxDQUFDQyxNQUFMLEdBQWNELElBQUksQ0FBQ0UsTUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFENEI7QUFBQSxhQUE3QixDQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsdUJBREQ7QUFnREE7Ozs7RUF0RTRCQyw0Q0FBSyxDQUFDQyxTOztBQXdFckJsQyw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NvY2lhbE5vZGVHcmFwaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGVydCwgQm94LCBGbGV4LCBHcmlkLCBHcmlkSXRlbSwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNjYWxlQ2F0ZWdvcnkyMCB9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7XG5cdEludGVyYWN0aXZlRm9yY2VHcmFwaCxcblx0Rm9yY2VHcmFwaE5vZGUsXG5cdEZvcmNlR3JhcGhMaW5rLFxuXHQvLyBIaW50IGFzIGZvcmNlSGludCxcbn0gZnJvbSAncmVhY3QtdmlzLWZvcmNlJztcbmltcG9ydCB7IEhpbiBhcyB2aXNIaW50IH0gZnJvbSAncmVhY3QtdmlzJztcbmltcG9ydCB7IEVORFBPSU5UIH0gZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IHNvY2tldElPQ2xpZW50ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuLy8gZGF0YSBzdHJ1Y3R1cmUgZGVmaW5pdGlvbnMgZm9yIE5vZGVHcmFwaCBjb21wb25lbnRcbmludGVyZmFjZSBsaW5rcyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YXJnZXQ6IHN0cmluZztcbn1cbmludGVyZmFjZSBub2RlcyB7XG5cdGlkOiBzdHJpbmc7XG5cdGluY29tZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBub2RlR3JhcGhEYXRhU3RydWN0IHtcblx0bm9kZXM6IG5vZGVzW107XG5cdGxpbmtzOiBsaW5rc1tdO1xufVxuaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFQcm9wcyB7XG5cdHZhbHVlPzogYW55O1xuXHRzb2NpYWxkYXRhcmVzcG9uc2U6IG5vZGVHcmFwaERhdGFTdHJ1Y3Q7XG5cdGVuZHBvaW50OiBzdHJpbmc7XG59XG5cbmNsYXNzIFNvY2lhbE5vZGVHcmFwaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgbm9kZUdyYXBoRGF0YVByb3BzPiB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogbnVsbCxcblx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZTogeyBub2RlczogW10sIGxpbmtzOiBbXSB9LFxuXHRcdFx0ZW5kcG9pbnQ6IEVORFBPSU5ULFxuXHRcdH07XG5cdH1cblx0XG5cdHNjYWxlID0gc2NhbGVDYXRlZ29yeTIwKCk7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZW5kcG9pbnQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly9WZXJ5IHNpbXBseSBjb25uZWN0IHRvIHRoZSBzb2NrZXRcblx0XHRjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG5cdFx0Ly9MaXN0ZW4gZm9yIGRhdGEgb24gdGhlIFwib3V0Z29pbmcgZGF0YVwiIG5hbWVzcGFjZSBhbmQgc3VwcGx5IGEgY2FsbGJhY2sgZm9yIHdoYXQgdG8gZG8gd2hlbiB3ZSBnZXQgb25lLiBJbiB0aGlzIGNhc2UsIHdlIHNldCBhIHN0YXRlIHZhcmlhYmxlXG5cdFx0c29ja2V0Lm9uKCdGcm9tU29jaWFsTm9kZURhdGEnLCAoZGF0YSkgPT5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzb2NpYWxkYXRhcmVzcG9uc2U6IGRhdGEgfSlcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNvY2lhbGRhdGFyZXNwb25zZSwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxGbGV4IHA9XCI0XCI+XG5cdFx0XHRcdFx0PEludGVyYWN0aXZlRm9yY2VHcmFwaFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uPVwid29iYmx5XCJcblx0XHRcdFx0XHRcdHNpbXVsYXRpb25PcHRpb25zPXt7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwMCxcblx0XHRcdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0bGFiZWxBdHRyPVwibGFiZWxcIlxuXHRcdFx0XHRcdFx0aGlnaGxpZ2h0RGVwZW5kZW5jaWVzXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5tYXAoKG5vZGUpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaE5vZGVcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17bm9kZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdG5vZGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBKU09OLnN0cmluZ2lmeShub2RlKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmFkaXVzOiBNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD17dGhpcy5zY2FsZShNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCkpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHRcdFx0PD48Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5saW5rcy5tYXAoKGxpbmspID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17bGluay5zb3VyY2UgKyBsaW5rLnRhcmdldH1cblx0XHRcdFx0XHRcdFx0XHRcdGxpbms9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0c291cmNlOiBsaW5rLnNvdXJjZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0OiBsaW5rLnRhcmdldCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDUsXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cImJsdWVcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvSW50ZXJhY3RpdmVGb3JjZUdyYXBoPlxuXHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTb2NpYWxOb2RlR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})