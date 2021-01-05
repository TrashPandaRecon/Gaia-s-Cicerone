webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ \"./src/config.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_forgetValue\", function () {\n      _this.setState({\n        value: null\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_rememberValue\", function (value) {\n      _this.setState({\n        value: value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      value: null,\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      endpoint: _config__WEBPACK_IMPORTED_MODULE_12__[\"ENDPOINT\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromSocialNodeData', function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$state = this.state,\n          socialdataresponse = _this$state.socialdataresponse,\n          value = _this$state.value;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n              p: \"4\",\n              bg: \"steelblue\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n                animation: \"wobbly\",\n                simulationOptions: {\n                  height: 500,\n                  width: 500,\n                  alpha: 1,\n                  animate: true\n                },\n                labelAttr: \"label\",\n                highlightDependencies: true,\n                onSelectNode: function onSelectNode(node) {\n                  _this3.setState({\n                    value: JSON.stringify(node)\n                  });\n\n                  _this3.forceUpdate();\n                },\n                onDeselectNode: this._forgetValue,\n                children: [socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 9\n                }, this) : socialdataresponse.nodes.map(function (node) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n                    node: {\n                      id: node.id,\n                      label: node.id,\n                      income: node.income,\n                      radius: Math.ceil(node.income / 1000 % 10)\n                    },\n                    fill: _this3.scale(Math.ceil(node.income / 1000 % 10))\n                  }, node.id, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 10\n                  }, _this3);\n                }), socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {}, void 0, false) : socialdataresponse.links.map(function (link) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n                    link: {\n                      source: link.source,\n                      target: link.target\n                    },\n                    fill: \"blue\"\n                  }, link.source + link.target, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 104,\n                    columnNumber: 10\n                  }, _this3);\n                })]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 7\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 6\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n              p: \"4\",\n              children: value ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n                value: value,\n                children: value\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 16\n              }, this) : null\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 6\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 6\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2V0U3RhdGUiLCJ2YWx1ZSIsInNjYWxlQ2F0ZWdvcnkyMCIsInN0YXRlIiwic29jaWFsZGF0YXJlc3BvbnNlIiwibm9kZXMiLCJsaW5rcyIsImVuZHBvaW50IiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImFscGhhIiwiYW5pbWF0ZSIsIm5vZGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yY2VVcGRhdGUiLCJfZm9yZ2V0VmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImxhYmVsIiwiaW5jb21lIiwicmFkaXVzIiwiTWF0aCIsImNlaWwiLCJzY2FsZSIsImxpbmsiLCJzb3VyY2UiLCJ0YXJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUdDLG1CQUFPLENBQUMsd0VBQUQsQ0FBOUIsQyxDQUNBOzs7SUFtQk1DLGU7Ozs7O0FBQ0wsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47O0FBRGtCLHVOQVFKLFlBQU07QUFDcEIsWUFBS0MsUUFBTCxDQUFjO0FBQ2JDLGFBQUssRUFBRTtBQURNLE9BQWQ7QUFHQSxLQVprQjs7QUFBQSx5TkFjRixVQUFDQSxLQUFELEVBQVc7QUFDM0IsWUFBS0QsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBTEE7QUFBRixPQUFkO0FBQ0EsS0FoQmtCOztBQUFBLGdOQWtCWEMsaUVBQWUsRUFsQko7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNaRixXQUFLLEVBQUUsSUFESztBQUVaRyx3QkFBa0IsRUFBRTtBQUFFQyxhQUFLLEVBQUUsRUFBVDtBQUFhQyxhQUFLLEVBQUU7QUFBcEIsT0FGUjtBQUdaQyxjQUFRLEVBQUVDLGlEQUFRQTtBQUhOLEtBQWI7QUFGa0I7QUFPbEI7Ozs7d0NBWW1CO0FBQUE7O0FBQUEsVUFDWEQsUUFEVyxHQUNFLEtBQUtKLEtBRFAsQ0FDWEksUUFEVyxFQUVuQjs7QUFDQSxVQUFNRSxNQUFNLEdBQUdiLGNBQWMsQ0FBQ1csUUFBRCxDQUE3QixDQUhtQixDQUluQjs7QUFDQUUsWUFBTSxDQUFDQyxFQUFQLENBQVUsb0JBQVYsRUFBZ0MsVUFBQ0MsSUFBRDtBQUFBLGVBQy9CLE1BQUksQ0FBQ1gsUUFBTCxDQUFjO0FBQUVJLDRCQUFrQixFQUFFTztBQUF0QixTQUFkLENBRCtCO0FBQUEsT0FBaEM7QUFHQTs7OzZCQUNRO0FBQUE7O0FBQUEsd0JBQzhCLEtBQUtSLEtBRG5DO0FBQUEsVUFDQUMsa0JBREEsZUFDQUEsa0JBREE7QUFBQSxVQUNvQkgsS0FEcEIsZUFDb0JBLEtBRHBCO0FBRVIsMEJBQ0M7QUFBQSwrQkFBRSxxRUFBQyxvREFBRDtBQUFBLGlDQUNELHFFQUFDLHFEQUFEO0FBQUEsb0NBRUMscUVBQUMscURBQUQ7QUFBTSxlQUFDLEVBQUMsR0FBUjtBQUFZLGdCQUFFLEVBQUMsV0FBZjtBQUFBLHFDQUNDLHFFQUFDLHNFQUFEO0FBQ0MseUJBQVMsRUFBQyxRQURYO0FBRUMsaUNBQWlCLEVBQUU7QUFDbEJXLHdCQUFNLEVBQUUsR0FEVTtBQUVsQkMsdUJBQUssRUFBRSxHQUZXO0FBR2xCQyx1QkFBSyxFQUFFLENBSFc7QUFJbEJDLHlCQUFPLEVBQUU7QUFKUyxpQkFGcEI7QUFRQyx5QkFBUyxFQUFDLE9BUlg7QUFTQyxxQ0FBcUIsTUFUdEI7QUFVQyw0QkFBWSxFQUFFLHNCQUFDQyxJQUFELEVBQVU7QUFDdkIsd0JBQUksQ0FBQ2hCLFFBQUwsQ0FBYztBQUFFQyx5QkFBSyxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWY7QUFBVCxtQkFBZDs7QUFDQSx3QkFBSSxDQUFDRyxXQUFMO0FBQ0EsaUJBYkY7QUFjQyw4QkFBYyxFQUFFLEtBQUtDLFlBZHRCO0FBQUEsMkJBZ0JFaEIsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCZ0IsTUFBekIsSUFBbUMsQ0FBbkMsZ0JBQ0EscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEQSxHQUdBakIsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCaUIsR0FBekIsQ0FBNkIsVUFBQ04sSUFBRDtBQUFBLHNDQUM1QixxRUFBQywrREFBRDtBQUVDLHdCQUFJLEVBQUU7QUFDTE8sd0JBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQURKO0FBRUxDLDJCQUFLLEVBQUVSLElBQUksQ0FBQ08sRUFGUDtBQUdMRSw0QkFBTSxFQUFFVCxJQUFJLENBQUNTLE1BSFI7QUFJTEMsNEJBQU0sRUFBRUMsSUFBSSxDQUFDQyxJQUFMLENBQVdaLElBQUksQ0FBQ1MsTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakM7QUFKSCxxQkFGUDtBQVFDLHdCQUFJLEVBQUUsTUFBSSxDQUFDSSxLQUFMLENBQVdGLElBQUksQ0FBQ0MsSUFBTCxDQUFXWixJQUFJLENBQUNTLE1BQUwsR0FBYyxJQUFmLEdBQXVCLEVBQWpDLENBQVg7QUFSUCxxQkFDTVQsSUFBSSxDQUFDTyxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRDRCO0FBQUEsaUJBQTdCLENBbkJGLEVBZ0NFbkIsa0JBQWtCLENBQUNDLEtBQW5CLENBQXlCZ0IsTUFBekIsSUFBbUMsQ0FBbkMsZ0JBQ0EsdUpBREEsR0FHQWpCLGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QmdCLEdBQXpCLENBQTZCLFVBQUNRLElBQUQ7QUFBQSxzQ0FDNUIscUVBQUMsK0RBQUQ7QUFFQyx3QkFBSSxFQUFFO0FBQUVDLDRCQUFNLEVBQUVELElBQUksQ0FBQ0MsTUFBZjtBQUF1QkMsNEJBQU0sRUFBRUYsSUFBSSxDQUFDRTtBQUFwQyxxQkFGUDtBQUdDLHdCQUFJLEVBQUM7QUFITixxQkFDTUYsSUFBSSxDQUFDQyxNQUFMLEdBQWNELElBQUksQ0FBQ0UsTUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFENEI7QUFBQSxpQkFBN0IsQ0FuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRCxlQWdEQyxxRUFBQyxxREFBRDtBQUFNLGVBQUMsRUFBQyxHQUFSO0FBQUEsd0JBQ0UvQixLQUFLLGdCQUFHLHFFQUFDLG9EQUFEO0FBQUsscUJBQUssRUFBRUEsS0FBWjtBQUFBLDBCQUFvQkE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxHQUFzQztBQUQ3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUYsdUJBREQ7QUF5REE7Ozs7RUF4RjRCZ0MsNENBQUssQ0FBQ0MsUzs7QUEwRnJCcEMsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxOb2RlR3JhcGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnQsIEJveCwgRmxleCwgR3JpZCwgR3JpZEl0ZW0sIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZUNhdGVnb3J5MjAgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge1xuXHRJbnRlcmFjdGl2ZUZvcmNlR3JhcGgsXG5cdEZvcmNlR3JhcGhOb2RlLFxuXHRGb3JjZUdyYXBoTGluayxcblx0Ly8gSGludCBhcyBmb3JjZUhpbnQsXG59IGZyb20gJ3JlYWN0LXZpcy1mb3JjZSc7XG5pbXBvcnQgeyBIaW4gYXMgdmlzSGludCB9IGZyb20gJ3JlYWN0LXZpcyc7XG5pbXBvcnQgeyBFTkRQT0lOVCB9IGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCBzb2NrZXRJT0NsaWVudCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcbi8vIGRhdGEgc3RydWN0dXJlIGRlZmluaXRpb25zIGZvciBOb2RlR3JhcGggY29tcG9uZW50XG5pbnRlcmZhY2UgbGlua3Mge1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFyZ2V0OiBzdHJpbmc7XG59XG5pbnRlcmZhY2Ugbm9kZXMge1xuXHRpZDogc3RyaW5nO1xuXHRpbmNvbWU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVN0cnVjdCB7XG5cdG5vZGVzOiBub2Rlc1tdO1xuXHRsaW5rczogbGlua3NbXTtcbn1cbmludGVyZmFjZSBub2RlR3JhcGhEYXRhUHJvcHMge1xuXHR2YWx1ZT86IGFueTtcblx0c29jaWFsZGF0YXJlc3BvbnNlOiBub2RlR3JhcGhEYXRhU3RydWN0O1xuXHRlbmRwb2ludDogc3RyaW5nO1xufVxuXG5jbGFzcyBTb2NpYWxOb2RlR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIG5vZGVHcmFwaERhdGFQcm9wcz4ge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6IG51bGwsXG5cdFx0XHRzb2NpYWxkYXRhcmVzcG9uc2U6IHsgbm9kZXM6IFtdLCBsaW5rczogW10gfSxcblx0XHRcdGVuZHBvaW50OiBFTkRQT0lOVCxcblx0XHR9O1xuXHR9XG5cdF9mb3JnZXRWYWx1ZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdHZhbHVlOiBudWxsLFxuXHRcdH0pO1xuXHR9O1xuXG5cdF9yZW1lbWJlclZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHZhbHVlIH0pO1xuXHR9O1xuXG5cdHNjYWxlID0gc2NhbGVDYXRlZ29yeTIwKCk7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZW5kcG9pbnQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly9WZXJ5IHNpbXBseSBjb25uZWN0IHRvIHRoZSBzb2NrZXRcblx0XHRjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG5cdFx0Ly9MaXN0ZW4gZm9yIGRhdGEgb24gdGhlIFwib3V0Z29pbmcgZGF0YVwiIG5hbWVzcGFjZSBhbmQgc3VwcGx5IGEgY2FsbGJhY2sgZm9yIHdoYXQgdG8gZG8gd2hlbiB3ZSBnZXQgb25lLiBJbiB0aGlzIGNhc2UsIHdlIHNldCBhIHN0YXRlIHZhcmlhYmxlXG5cdFx0c29ja2V0Lm9uKCdGcm9tU29jaWFsTm9kZURhdGEnLCAoZGF0YSkgPT5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzb2NpYWxkYXRhcmVzcG9uc2U6IGRhdGEgfSlcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNvY2lhbGRhdGFyZXNwb25zZSwgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDw+PEJveD5cblx0XHRcdFx0PEZsZXhcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGbGV4IHA9XCI0XCIgYmc9XCJzdGVlbGJsdWVcIj5cblx0XHRcdFx0XHRcdDxJbnRlcmFjdGl2ZUZvcmNlR3JhcGhcblx0XHRcdFx0XHRcdFx0YW5pbWF0aW9uPVwid29iYmx5XCJcblx0XHRcdFx0XHRcdFx0c2ltdWxhdGlvbk9wdGlvbnM9e3tcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwMCxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdGFscGhhOiAxLFxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGxhYmVsQXR0cj1cImxhYmVsXCJcblx0XHRcdFx0XHRcdFx0aGlnaGxpZ2h0RGVwZW5kZW5jaWVzXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0Tm9kZT17KG5vZGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IEpTT04uc3RyaW5naWZ5KG5vZGUpIH0pO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0b25EZXNlbGVjdE5vZGU9e3RoaXMuX2ZvcmdldFZhbHVlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLm1hcCgobm9kZSkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcmNlR3JhcGhOb2RlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17bm9kZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkOiBub2RlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBub2RlLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluY29tZTogbm9kZS5pbmNvbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmFkaXVzOiBNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9e3RoaXMuc2NhbGUoTWF0aC5jZWlsKChub2RlLmluY29tZSAvIDEwMDApICUgMTApKX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e3NvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0XHRcdFx0XHQ8PjwvPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5saW5rcy5tYXAoKGxpbmspID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxGb3JjZUdyYXBoTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2xpbmsuc291cmNlICsgbGluay50YXJnZXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpbms9e3sgc291cmNlOiBsaW5rLnNvdXJjZSwgdGFyZ2V0OiBsaW5rLnRhcmdldCB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwiYmx1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L0ludGVyYWN0aXZlRm9yY2VHcmFwaD5cblx0XHRcdFx0XHQ8L0ZsZXg+XG5cdFx0XHRcdFx0PEZsZXggcD1cIjRcIj5cblx0XHRcdFx0XHRcdHt2YWx1ZSA/IDxCb3ggdmFsdWU9e3ZhbHVlfT57dmFsdWV9PC9Cb3g+IDogbnVsbH1cblx0XHRcdFx0XHQ8L0ZsZXg+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9Cb3g+XG5cdFx0XHQ8Lz5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTb2NpYWxOb2RlR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})