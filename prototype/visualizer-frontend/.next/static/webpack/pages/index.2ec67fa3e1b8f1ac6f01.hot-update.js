webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n          p: \"4\",\n          bg: \"steelblue\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n            animation: \"wobbly\",\n            simulationOptions: {\n              height: 500,\n              width: 500,\n              alpha: 1,\n              animate: true\n            },\n            labelAttr: \"label\",\n            highlightDependencies: true,\n            children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 10\n            }, this) : socialdataresponse.nodes.map(function (node) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n                node: {\n                  id: node.id,\n                  label: JSON.stringify(node),\n                  radius: Math.ceil(node.income / 1000 % 10)\n                },\n                fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n              }, node.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 11\n              }, _this3);\n            }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n                link: {\n                  source: link.source,\n                  target: link.target,\n                  value: 5\n                },\n                fill: \"blue\"\n              }, link.source + link.target, false, {\n                fileName: _jsxFileName,\n                lineNumber: 87,\n                columnNumber: 11\n              }, _this3);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 7\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2NhbGVDYXRlZ29yeTIwIiwic3RhdGUiLCJ2YWx1ZSIsInNvY2lhbGRhdGFyZXNwb25zZSIsIm5vZGVzIiwibGlua3MiLCJlbmRwb2ludCIsIkVORFBPSU5UIiwic29ja2V0Iiwib24iLCJkYXRhIiwic2V0U3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsImxlbmd0aCIsIm1hcCIsIm5vZGUiLCJpZCIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwiaW5jb21lIiwic2NhbGUiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQTlCLEMsQ0FDQTs7O0lBbUJNQyxlOzs7OztBQUNMLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixnTkFTWEMsaUVBQWUsRUFUSjs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQUssRUFBRSxJQURLO0FBRVpDLHdCQUFrQixFQUFFO0FBQUVDLGFBQUssRUFBRSxFQUFUO0FBQWFDLGFBQUssRUFBRTtBQUFwQixPQUZSO0FBR1pDLGNBQVEsRUFBRUMsaURBQVFBO0FBSE4sS0FBYjtBQUZrQjtBQU9sQjs7Ozt3Q0FHbUI7QUFBQTs7QUFBQSxVQUNYRCxRQURXLEdBQ0UsS0FBS0wsS0FEUCxDQUNYSyxRQURXLEVBRW5COztBQUNBLFVBQU1FLE1BQU0sR0FBR1osY0FBYyxDQUFDVSxRQUFELENBQTdCLENBSG1CLENBSW5COztBQUNBRSxZQUFNLENBQUNDLEVBQVAsQ0FBVSxvQkFBVixFQUFnQyxVQUFDQyxJQUFEO0FBQUEsZUFDL0IsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRVIsNEJBQWtCLEVBQUVPO0FBQXRCLFNBQWQsQ0FEK0I7QUFBQSxPQUFoQztBQUdBOzs7NkJBQ1E7QUFBQTs7QUFBQSx3QkFDOEIsS0FBS1QsS0FEbkM7QUFBQSxVQUNBRSxrQkFEQSxlQUNBQSxrQkFEQTtBQUFBLFVBQ29CRCxLQURwQixlQUNvQkEsS0FEcEI7QUFFUiwwQkFDQztBQUFBLCtCQUNHLHFFQUFDLHFEQUFEO0FBQU0sV0FBQyxFQUFDLEdBQVI7QUFBWSxZQUFFLEVBQUMsV0FBZjtBQUFBLGlDQUNDLHFFQUFDLHNFQUFEO0FBQ0MscUJBQVMsRUFBQyxRQURYO0FBRUMsNkJBQWlCLEVBQUU7QUFDbEJVLG9CQUFNLEVBQUUsR0FEVTtBQUVsQkMsbUJBQUssRUFBRSxHQUZXO0FBR2xCQyxtQkFBSyxFQUFFLENBSFc7QUFJbEJDLHFCQUFPLEVBQUU7QUFKUyxhQUZwQjtBQVFDLHFCQUFTLEVBQUMsT0FSWDtBQVNDLGlDQUFxQixNQVR0QjtBQUFBLHVCQVdFWixrQkFBa0IsQ0FBQ0MsS0FBbkIsQ0FBeUJZLE1BQXpCLElBQW1DLENBQW5DLGdCQUNBLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsR0FHQWIsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCYSxHQUF6QixDQUE2QixVQUFDQyxJQUFEO0FBQUEsa0NBQzVCLHFFQUFDLCtEQUFEO0FBRUMsb0JBQUksRUFBRTtBQUNMQyxvQkFBRSxFQUFFRCxJQUFJLENBQUNDLEVBREo7QUFFTEMsdUJBQUssRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FGRjtBQUdMSyx3QkFBTSxFQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBV1AsSUFBSSxDQUFDUSxNQUFMLEdBQWMsSUFBZixHQUF1QixFQUFqQztBQUhILGlCQUZQO0FBT0Msb0JBQUksRUFBRSxNQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBSSxDQUFDQyxJQUFMLENBQVdQLElBQUksQ0FBQ1EsTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakMsQ0FBWDtBQVBQLGlCQUNNUixJQUFJLENBQUNDLEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFENEI7QUFBQSxhQUE3QixDQWRGLEVBMEJFaEIsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCWSxNQUF6QixJQUFtQyxDQUFuQyxnQkFDQSx1SkFEQSxHQUdBYixrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUJZLEdBQXpCLENBQTZCLFVBQUNXLElBQUQ7QUFBQSxrQ0FDNUIscUVBQUMsK0RBQUQ7QUFFQyxvQkFBSSxFQUFFO0FBQ0xDLHdCQUFNLEVBQUVELElBQUksQ0FBQ0MsTUFEUjtBQUVMQyx3QkFBTSxFQUFFRixJQUFJLENBQUNFLE1BRlI7QUFHTDVCLHVCQUFLLEVBQUU7QUFIRixpQkFGUDtBQU9DLG9CQUFJLEVBQUM7QUFQTixpQkFDTTBCLElBQUksQ0FBQ0MsTUFBTCxHQUFjRCxJQUFJLENBQUNFLE1BRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRDRCO0FBQUEsYUFBN0IsQ0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURILHVCQUREO0FBaURBOzs7O0VBdkU0QkMsNENBQUssQ0FBQ0MsUzs7QUF5RXJCbEMsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxOb2RlR3JhcGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnQsIEJveCwgRmxleCwgR3JpZCwgR3JpZEl0ZW0sIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZUNhdGVnb3J5MjAgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge1xuXHRJbnRlcmFjdGl2ZUZvcmNlR3JhcGgsXG5cdEZvcmNlR3JhcGhOb2RlLFxuXHRGb3JjZUdyYXBoTGluayxcblx0Ly8gSGludCBhcyBmb3JjZUhpbnQsXG59IGZyb20gJ3JlYWN0LXZpcy1mb3JjZSc7XG5pbXBvcnQgeyBIaW4gYXMgdmlzSGludCB9IGZyb20gJ3JlYWN0LXZpcyc7XG5pbXBvcnQgeyBFTkRQT0lOVCB9IGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBzb2NrZXRJT0NsaWVudCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcbi8vIGRhdGEgc3RydWN0dXJlIGRlZmluaXRpb25zIGZvciBOb2RlR3JhcGggY29tcG9uZW50XG5pbnRlcmZhY2UgbGlua3Mge1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFyZ2V0OiBzdHJpbmc7XG59XG5pbnRlcmZhY2Ugbm9kZXMge1xuXHRpZDogc3RyaW5nO1xuXHRpbmNvbWU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVN0cnVjdCB7XG5cdG5vZGVzOiBub2Rlc1tdO1xuXHRsaW5rczogbGlua3NbXTtcbn1cbmludGVyZmFjZSBub2RlR3JhcGhEYXRhUHJvcHMge1xuXHR2YWx1ZT86IGFueTtcblx0c29jaWFsZGF0YXJlc3BvbnNlOiBub2RlR3JhcGhEYXRhU3RydWN0O1xuXHRlbmRwb2ludDogc3RyaW5nO1xufVxuXG5jbGFzcyBTb2NpYWxOb2RlR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIG5vZGVHcmFwaERhdGFQcm9wcz4ge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2U6IHsgbm9kZXM6IFtdLCBsaW5rczogW10gfSxcblx0XHRcdGVuZHBvaW50OiBFTkRQT0lOVCxcblx0XHR9O1xuXHR9XG5cdFxuXHRzY2FsZSA9IHNjYWxlQ2F0ZWdvcnkyMCgpO1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGVuZHBvaW50IH0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vVmVyeSBzaW1wbHkgY29ubmVjdCB0byB0aGUgc29ja2V0XG5cdFx0Y29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuXHRcdC8vTGlzdGVuIGZvciBkYXRhIG9uIHRoZSBcIm91dGdvaW5nIGRhdGFcIiBuYW1lc3BhY2UgYW5kIHN1cHBseSBhIGNhbGxiYWNrIGZvciB3aGF0IHRvIGRvIHdoZW4gd2UgZ2V0IG9uZS4gSW4gdGhpcyBjYXNlLCB3ZSBzZXQgYSBzdGF0ZSB2YXJpYWJsZVxuXHRcdHNvY2tldC5vbignRnJvbVNvY2lhbE5vZGVEYXRhJywgKGRhdGEpID0+XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgc29jaWFsZGF0YXJlc3BvbnNlOiBkYXRhIH0pXG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzb2NpYWxkYXRhcmVzcG9uc2UsIHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PEZsZXggcD1cIjRcIiBiZz1cInN0ZWVsYmx1ZVwiPlxuXHRcdFx0XHRcdFx0XHQ8SW50ZXJhY3RpdmVGb3JjZUdyYXBoXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uPVwid29iYmx5XCJcblx0XHRcdFx0XHRcdFx0XHRzaW11bGF0aW9uT3B0aW9ucz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWxwaGE6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWxBdHRyPVwibGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdGhpZ2hsaWdodERlcGVuZGVuY2llc1xuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5tYXAoKG5vZGUpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhOb2RlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtub2RlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiBub2RlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IEpTT04uc3RyaW5naWZ5KG5vZGUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmFkaXVzOiBNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPXt0aGlzLnNjYWxlKE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDw+PC8+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5saW5rcy5tYXAoKGxpbmspID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtsaW5rLnNvdXJjZSArIGxpbmsudGFyZ2V0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxpbms9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNvdXJjZTogbGluay5zb3VyY2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IGxpbmsudGFyZ2V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiYmx1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvSW50ZXJhY3RpdmVGb3JjZUdyYXBoPlxuXHRcdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHRcdFx0XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTb2NpYWxOb2RlR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})