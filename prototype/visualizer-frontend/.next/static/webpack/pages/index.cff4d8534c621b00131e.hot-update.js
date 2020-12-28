webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n          p: \"4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n            animation: \"wobbly\",\n            simulationOptions: {\n              height: 500,\n              width: 500,\n              alpha: 1,\n              animate: true\n            },\n            labelAttr: \"label\",\n            highlightDependencies: true,\n            children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n              node: {\n                id: \"loading\",\n                label: \"loading...\",\n                radius: Math.ceil(node.income / 1000 % 10)\n              },\n              fill: this.scale(Math.ceil(node.income / 1000 % 10))\n            }, \"loading\", false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 8\n            }, this) : socialdataresponse.nodes.map(function (node) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n                node: {\n                  id: node.id,\n                  label: JSON.stringify(node),\n                  radius: Math.ceil(node.income / 1000 % 10)\n                },\n                fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n              }, node.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 9\n              }, _this3);\n            }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n                link: {\n                  source: link.source,\n                  target: link.target,\n                  value: 5\n                },\n                fill: \"blue\"\n              }, link.source + link.target, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 9\n              }, _this3);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 5\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2NhbGVDYXRlZ29yeTIwIiwic3RhdGUiLCJ2YWx1ZSIsInNvY2lhbGRhdGFyZXNwb25zZSIsIm5vZGVzIiwibGlua3MiLCJlbmRwb2ludCIsIkVORFBPSU5UIiwic29ja2V0Iiwib24iLCJkYXRhIiwic2V0U3RhdGUiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsImxlbmd0aCIsImlkIiwibGFiZWwiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsIm5vZGUiLCJpbmNvbWUiLCJzY2FsZSIsIm1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQTlCLEMsQ0FDQTs7O0lBbUJNQyxlOzs7OztBQUNMLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOOztBQURrQixnTkFTWEMsaUVBQWUsRUFUSjs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQUssRUFBRSxJQURLO0FBRVpDLHdCQUFrQixFQUFFO0FBQUVDLGFBQUssRUFBRSxFQUFUO0FBQWFDLGFBQUssRUFBRTtBQUFwQixPQUZSO0FBR1pDLGNBQVEsRUFBRUMsaURBQVFBO0FBSE4sS0FBYjtBQUZrQjtBQU9sQjs7Ozt3Q0FHbUI7QUFBQTs7QUFBQSxVQUNYRCxRQURXLEdBQ0UsS0FBS0wsS0FEUCxDQUNYSyxRQURXLEVBRW5COztBQUNBLFVBQU1FLE1BQU0sR0FBR1osY0FBYyxDQUFDVSxRQUFELENBQTdCLENBSG1CLENBSW5COztBQUNBRSxZQUFNLENBQUNDLEVBQVAsQ0FBVSxvQkFBVixFQUFnQyxVQUFDQyxJQUFEO0FBQUEsZUFDL0IsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRVIsNEJBQWtCLEVBQUVPO0FBQXRCLFNBQWQsQ0FEK0I7QUFBQSxPQUFoQztBQUdBOzs7NkJBQ1E7QUFBQTs7QUFBQSx3QkFDOEIsS0FBS1QsS0FEbkM7QUFBQSxVQUNBRSxrQkFEQSxlQUNBQSxrQkFEQTtBQUFBLFVBQ29CRCxLQURwQixlQUNvQkEsS0FEcEI7QUFFUiwwQkFDQztBQUFBLCtCQUNDLHFFQUFDLHFEQUFEO0FBQU0sV0FBQyxFQUFDLEdBQVI7QUFBQSxpQ0FDQyxxRUFBQyxzRUFBRDtBQUNDLHFCQUFTLEVBQUMsUUFEWDtBQUVDLDZCQUFpQixFQUFFO0FBQ2xCVSxvQkFBTSxFQUFFLEdBRFU7QUFFbEJDLG1CQUFLLEVBQUUsR0FGVztBQUdsQkMsbUJBQUssRUFBRSxDQUhXO0FBSWxCQyxxQkFBTyxFQUFFO0FBSlMsYUFGcEI7QUFRQyxxQkFBUyxFQUFDLE9BUlg7QUFTQyxpQ0FBcUIsTUFUdEI7QUFBQSx1QkFXRVosa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCWSxNQUF6QixJQUFtQyxDQUFuQyxnQkFDQSxxRUFBQywrREFBRDtBQUVDLGtCQUFJLEVBQUU7QUFDTEMsa0JBQUUsRUFBRSxTQURDO0FBRUxDLHFCQUFLLEVBQUUsWUFGRjtBQUdMQyxzQkFBTSxFQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBV0MsSUFBSSxDQUFDQyxNQUFMLEdBQWMsSUFBZixHQUF1QixFQUFqQztBQUhILGVBRlA7QUFPQyxrQkFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0osSUFBSSxDQUFDQyxJQUFMLENBQVdDLElBQUksQ0FBQ0MsTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakMsQ0FBWDtBQVBQLGVBQ00sU0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLEdBV0FwQixrQkFBa0IsQ0FBQ0MsS0FBbkIsQ0FBeUJxQixHQUF6QixDQUE2QixVQUFDSCxJQUFEO0FBQUEsa0NBQzVCLHFFQUFDLCtEQUFEO0FBRUMsb0JBQUksRUFBRTtBQUNMTCxvQkFBRSxFQUFFSyxJQUFJLENBQUNMLEVBREo7QUFFTEMsdUJBQUssRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FGRjtBQUdMSCx3QkFBTSxFQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBV0MsSUFBSSxDQUFDQyxNQUFMLEdBQWMsSUFBZixHQUF1QixFQUFqQztBQUhILGlCQUZQO0FBT0Msb0JBQUksRUFBRSxNQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBSSxDQUFDQyxJQUFMLENBQVdDLElBQUksQ0FBQ0MsTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakMsQ0FBWDtBQVBQLGlCQUNNRCxJQUFJLENBQUNMLEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFENEI7QUFBQSxhQUE3QixDQXRCRixFQWtDRWQsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCWSxNQUF6QixJQUFtQyxDQUFuQyxnQkFDQSx1SkFEQSxHQUdBYixrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUJvQixHQUF6QixDQUE2QixVQUFDRyxJQUFEO0FBQUEsa0NBQzVCLHFFQUFDLCtEQUFEO0FBRUMsb0JBQUksRUFBRTtBQUNMQyx3QkFBTSxFQUFFRCxJQUFJLENBQUNDLE1BRFI7QUFFTEMsd0JBQU0sRUFBRUYsSUFBSSxDQUFDRSxNQUZSO0FBR0w1Qix1QkFBSyxFQUFFO0FBSEYsaUJBRlA7QUFPQyxvQkFBSSxFQUFDO0FBUE4saUJBQ00wQixJQUFJLENBQUNDLE1BQUwsR0FBY0QsSUFBSSxDQUFDRSxNQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUQ0QjtBQUFBLGFBQTdCLENBckNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCx1QkFERDtBQXdEQTs7OztFQTlFNEJDLDRDQUFLLENBQUNDLFM7O0FBZ0ZyQmxDLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsZXJ0LCBCb3gsIEZsZXgsIEdyaWQsIEdyaWRJdGVtLCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2NhbGVDYXRlZ29yeTIwIH0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtcblx0SW50ZXJhY3RpdmVGb3JjZUdyYXBoLFxuXHRGb3JjZUdyYXBoTm9kZSxcblx0Rm9yY2VHcmFwaExpbmssXG5cdC8vIEhpbnQgYXMgZm9yY2VIaW50LFxufSBmcm9tICdyZWFjdC12aXMtZm9yY2UnO1xuaW1wb3J0IHsgSGluIGFzIHZpc0hpbnQgfSBmcm9tICdyZWFjdC12aXMnO1xuaW1wb3J0IHsgRU5EUE9JTlQgfSBmcm9tICcuLi9jb25maWcnO1xuY29uc3Qgc29ja2V0SU9DbGllbnQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG4vLyBkYXRhIHN0cnVjdHVyZSBkZWZpbml0aW9ucyBmb3IgTm9kZUdyYXBoIGNvbXBvbmVudFxuaW50ZXJmYWNlIGxpbmtzIHtcblx0c291cmNlOiBzdHJpbmc7XG5cdHRhcmdldDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIG5vZGVzIHtcblx0aWQ6IHN0cmluZztcblx0aW5jb21lOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFTdHJ1Y3Qge1xuXHRub2Rlczogbm9kZXNbXTtcblx0bGlua3M6IGxpbmtzW107XG59XG5pbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVByb3BzIHtcblx0dmFsdWU/OiBhbnk7XG5cdHNvY2lhbGRhdGFyZXNwb25zZTogbm9kZUdyYXBoRGF0YVN0cnVjdDtcblx0ZW5kcG9pbnQ6IHN0cmluZztcbn1cblxuY2xhc3MgU29jaWFsTm9kZUdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBub2RlR3JhcGhEYXRhUHJvcHM+IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlOiB7IG5vZGVzOiBbXSwgbGlua3M6IFtdIH0sXG5cdFx0XHRlbmRwb2ludDogRU5EUE9JTlQsXG5cdFx0fTtcblx0fVxuXHRcblx0c2NhbGUgPSBzY2FsZUNhdGVnb3J5MjAoKTtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBlbmRwb2ludCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvL1Zlcnkgc2ltcGx5IGNvbm5lY3QgdG8gdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcblx0XHQvL0xpc3RlbiBmb3IgZGF0YSBvbiB0aGUgXCJvdXRnb2luZyBkYXRhXCIgbmFtZXNwYWNlIGFuZCBzdXBwbHkgYSBjYWxsYmFjayBmb3Igd2hhdCB0byBkbyB3aGVuIHdlIGdldCBvbmUuIEluIHRoaXMgY2FzZSwgd2Ugc2V0IGEgc3RhdGUgdmFyaWFibGVcblx0XHRzb2NrZXQub24oJ0Zyb21Tb2NpYWxOb2RlRGF0YScsIChkYXRhKSA9PlxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHNvY2lhbGRhdGFyZXNwb25zZTogZGF0YSB9KVxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgc29jaWFsZGF0YXJlc3BvbnNlLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PEZsZXggcD1cIjRcIj5cblx0XHRcdFx0XHQ8SW50ZXJhY3RpdmVGb3JjZUdyYXBoXG5cdFx0XHRcdFx0XHRhbmltYXRpb249XCJ3b2JibHlcIlxuXHRcdFx0XHRcdFx0c2ltdWxhdGlvbk9wdGlvbnM9e3tcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1MDAsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA1MDAsXG5cdFx0XHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdFx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdGxhYmVsQXR0cj1cImxhYmVsXCJcblx0XHRcdFx0XHRcdGhpZ2hsaWdodERlcGVuZGVuY2llc1xuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHtzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubGVuZ3RoID09IDAgPyAoXG5cdFx0XHRcdFx0XHRcdDxGb3JjZUdyYXBoTm9kZVxuXHRcdFx0XHRcdFx0XHRcdGtleT17XCJsb2FkaW5nXCJ9XG5cdFx0XHRcdFx0XHRcdFx0bm9kZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6IFwibG9hZGluZ1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IFwibG9hZGluZy4uLlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0cmFkaXVzOiBNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCksXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRmaWxsPXt0aGlzLnNjYWxlKE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubWFwKChub2RlKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhOb2RlXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e25vZGUuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRub2RlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiBub2RlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogSlNPTi5zdHJpbmdpZnkobm9kZSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJhZGl1czogTWF0aC5jZWlsKChub2RlLmluY29tZSAvIDEwMDApICUgMTApLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9e3RoaXMuc2NhbGUoTWF0aC5jZWlsKChub2RlLmluY29tZSAvIDEwMDApICUgMTApKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdHtzb2NpYWxkYXRhcmVzcG9uc2Uubm9kZXMubGVuZ3RoID09IDAgPyAoXG5cdFx0XHRcdFx0XHRcdDw+PC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2UubGlua3MubWFwKChsaW5rKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2xpbmsuc291cmNlICsgbGluay50YXJnZXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNvdXJjZTogbGluay5zb3VyY2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldDogbGluay50YXJnZXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA1LFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0ludGVyYWN0aXZlRm9yY2VHcmFwaD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTm9kZUdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})