webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _SingletonSocket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../SingletonSocket */ \"./src/SingletonSocket.ts\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\"); // data structure definitions for NodeGraph component\n\n\nvar SocialNodeGraph = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(SocialNodeGraph, _React$Component);\n\n  var _super = _createSuper(SocialNodeGraph);\n\n  function SocialNodeGraph(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SocialNodeGraph);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"scale\", Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__[\"scaleCategory20\"])());\n\n    _this.state = {\n      socialdataresponse: {\n        nodes: [],\n        links: []\n      },\n      dataPipe: _this.props.dataPipe,\n      socketConnection: _SingletonSocket__WEBPACK_IMPORTED_MODULE_12__[\"SingletonSocket\"].getInstance().getSocket()\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SocialNodeGraph, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          socketConnection = _this$state.socketConnection,\n          dataPipe = _this$state.dataPipe;\n      socketConnection.on(dataPipe, function (data) {\n        return _this2.setState({\n          socialdataresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var socialdataresponse = this.state.socialdataresponse;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        children: socialdataresponse.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Skeleton\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 8\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Flex\"], {\n          p: \"4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"InteractiveForceGraph\"], {\n            animation: \"wobbly\",\n            simulationOptions: {\n              height: 500,\n              width: 1000,\n              alpha: 1,\n              animate: true\n            },\n            labelAttr: \"label\",\n            highlightDependencies: true,\n            children: [\"socialdataresponse.nodes.map((node) => (\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphNode\"], {\n              node: {\n                id: node.id,\n                label: JSON.stringify(node),\n                radius: Math.ceil(node.income / 1000 % 10)\n              },\n              fill: this.scale(Math.ceil(node.income / 1000 % 10))\n            }, node.id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 9\n            }, this), \")) socialdataresponse.links.map((link) => (\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_11__[\"ForceGraphLink\"], {\n              link: {\n                source: link.source,\n                target: link.target,\n                value: 5 // this value is just to fix a bug in the library that prevents the node graph from being centered in the frame.\n\n              },\n              fill: \"blue\"\n            }, link.source + link.target, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 9\n            }, this), \"))\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 5\n        }, this)\n      }, void 0, false);\n    }\n  }]);\n\n  return SocialNodeGraph;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIlNvY2lhbE5vZGVHcmFwaCIsInByb3BzIiwic2NhbGVDYXRlZ29yeTIwIiwic3RhdGUiLCJzb2NpYWxkYXRhcmVzcG9uc2UiLCJub2RlcyIsImxpbmtzIiwiZGF0YVBpcGUiLCJzb2NrZXRDb25uZWN0aW9uIiwiU2luZ2xldG9uU29ja2V0IiwiZ2V0SW5zdGFuY2UiLCJnZXRTb2NrZXQiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsImxlbmd0aCIsImhlaWdodCIsIndpZHRoIiwiYWxwaGEiLCJhbmltYXRlIiwiaWQiLCJub2RlIiwibGFiZWwiLCJKU09OIiwic3RyaW5naWZ5IiwicmFkaXVzIiwiTWF0aCIsImNlaWwiLCJpbmNvbWUiLCJzY2FsZSIsInNvdXJjZSIsImxpbmsiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUNBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5QixDLENBQ0E7OztJQW1CTUMsZTs7Ozs7QUFDTCwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjs7QUFEa0IsZ05BU1hDLGlFQUFlLEVBVEo7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyx3QkFBa0IsRUFBRTtBQUFFQyxhQUFLLEVBQUUsRUFBVDtBQUFhQyxhQUFLLEVBQUU7QUFBcEIsT0FEUjtBQUVIQyxjQUFRLEVBQUUsTUFBS04sS0FBTCxDQUFXTSxRQUZsQjtBQUdIQyxzQkFBZ0IsRUFBRUMsaUVBQWUsQ0FBQ0MsV0FBaEIsR0FBOEJDLFNBQTlCO0FBSGYsS0FBYjtBQUZrQjtBQU9sQjs7Ozt3Q0FHbUI7QUFBQTs7QUFBQSx3QkFDbUIsS0FBS1IsS0FEeEI7QUFBQSxVQUNYSyxnQkFEVyxlQUNYQSxnQkFEVztBQUFBLFVBQ01ELFFBRE4sZUFDTUEsUUFETjtBQUVuQkMsc0JBQWdCLENBQUNJLEVBQWpCLENBQW9CTCxRQUFwQixFQUE4QixVQUFDTSxJQUFEO0FBQUEsZUFDN0IsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRVYsNEJBQWtCLEVBQUVTO0FBQXRCLFNBQWQsQ0FENkI7QUFBQSxPQUE5QjtBQUdBOzs7NkJBQ1E7QUFBQSxVQUNBVCxrQkFEQSxHQUN1QixLQUFLRCxLQUQ1QixDQUNBQyxrQkFEQTtBQUVSLDBCQUNDO0FBQUEsa0JBQUdBLGtCQUFrQixDQUFDQyxLQUFuQixDQUF5QlUsTUFBekIsSUFBbUMsQ0FBbkMsZ0JBQ0MscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHRixxRUFBQyxxREFBRDtBQUFNLFdBQUMsRUFBQyxHQUFSO0FBQUEsaUNBQ0MscUVBQUMsc0VBQUQ7QUFDQyxxQkFBUyxFQUFDLFFBRFg7QUFFQyw2QkFBaUIsRUFBRTtBQUNsQkMsb0JBQU0sRUFBRSxHQURVO0FBRWxCQyxtQkFBSyxFQUFFLElBRlc7QUFHbEJDLG1CQUFLLEVBQUUsQ0FIVztBQUlHQyxxQkFBTyxFQUFFO0FBSlosYUFGcEI7QUFRQyxxQkFBUyxFQUFDLE9BUlg7QUFTQyxpQ0FBcUIsTUFUdEI7QUFBQSxnRkFZRyxxRUFBQywrREFBRDtBQUVDLGtCQUFJLEVBQUU7QUFDTEMsa0JBQUUsRUFBRUMsSUFBSSxDQUFDRCxFQURKO0FBRUxFLHFCQUFLLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxJQUFmLENBRkY7QUFHTEksc0JBQU0sRUFBRUMsSUFBSSxDQUFDQyxJQUFMLENBQVdOLElBQUksQ0FBQ08sTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakM7QUFISCxlQUZQO0FBT0Msa0JBQUksRUFBRSxLQUFLQyxLQUFMLENBQVdILElBQUksQ0FBQ0MsSUFBTCxDQUFXTixJQUFJLENBQUNPLE1BQUwsR0FBYyxJQUFmLEdBQXVCLEVBQWpDLENBQVg7QUFQUCxlQUNNUCxJQUFJLENBQUNELEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaSCw4REF3QkcscUVBQUMsK0RBQUQ7QUFFQyxrQkFBSSxFQUFFO0FBQ0xVLHNCQUFNLEVBQUVDLElBQUksQ0FBQ0QsTUFEUjtBQUVMRSxzQkFBTSxFQUFFRCxJQUFJLENBQUNDLE1BRlI7QUFHTEMscUJBQUssRUFBRSxDQUhGLENBR0s7O0FBSEwsZUFGUDtBQU9DLGtCQUFJLEVBQUM7QUFQTixlQUNNRixJQUFJLENBQUNELE1BQUwsR0FBY0MsSUFBSSxDQUFDQyxNQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQsdUJBREQ7QUE0Q0E7Ozs7RUEvRDRCRSw0Q0FBSyxDQUFDQyxTOztBQWlFckJuQyw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NvY2lhbE5vZGVHcmFwaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGV4LCBTa2VsZXRvbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2NhbGVDYXRlZ29yeTIwIH0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtcblx0SW50ZXJhY3RpdmVGb3JjZUdyYXBoLFxuXHRGb3JjZUdyYXBoTm9kZSxcblx0Rm9yY2VHcmFwaExpbmssXG59IGZyb20gJ3JlYWN0LXZpcy1mb3JjZSc7XG5pbXBvcnQge1NpbmdsZXRvblNvY2tldH0gZnJvbSAnLi4vU2luZ2xldG9uU29ja2V0JztcbmNvbnN0IHNvY2tldElPQ2xpZW50ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuLy8gZGF0YSBzdHJ1Y3R1cmUgZGVmaW5pdGlvbnMgZm9yIE5vZGVHcmFwaCBjb21wb25lbnRcbmludGVyZmFjZSBsaW5rcyB7XG5cdHNvdXJjZTogc3RyaW5nO1xuXHR0YXJnZXQ6IHN0cmluZztcbn1cbmludGVyZmFjZSBub2RlcyB7XG5cdGlkOiBzdHJpbmc7XG5cdGluY29tZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBub2RlR3JhcGhEYXRhU3RydWN0IHtcblx0bm9kZXM6IG5vZGVzW107XG5cdGxpbmtzOiBsaW5rc1tdO1xufVxuaW50ZXJmYWNlIG5vZGVHcmFwaERhdGFQcm9wcyB7XG5cdHNvY2lhbGRhdGFyZXNwb25zZTogbm9kZUdyYXBoRGF0YVN0cnVjdDtcbiAgICBzb2NrZXRDb25uZWN0aW9uOiBhbnk7XG4gICAgZGF0YVBpcGU6IHN0cmluZztcbn1cblxuY2xhc3MgU29jaWFsTm9kZUdyYXBoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtkYXRhUGlwZTpzdHJpbmd9LCBub2RlR3JhcGhEYXRhUHJvcHM+IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZTogeyBub2RlczogW10sIGxpbmtzOiBbXSB9LFxuICAgICAgICAgICAgZGF0YVBpcGU6IHRoaXMucHJvcHMuZGF0YVBpcGUsXG4gICAgICAgICAgICBzb2NrZXRDb25uZWN0aW9uOiBTaW5nbGV0b25Tb2NrZXQuZ2V0SW5zdGFuY2UoKS5nZXRTb2NrZXQoKVxuXHRcdH07XG5cdH1cblx0XG5cdHNjYWxlID0gc2NhbGVDYXRlZ29yeTIwKCk7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgc29ja2V0Q29ubmVjdGlvbixkYXRhUGlwZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRzb2NrZXRDb25uZWN0aW9uLm9uKGRhdGFQaXBlLCAoZGF0YSkgPT5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBzb2NpYWxkYXRhcmVzcG9uc2U6IGRhdGEgfSlcblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHNvY2lhbGRhdGFyZXNwb25zZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PD57c29jaWFsZGF0YXJlc3BvbnNlLm5vZGVzLmxlbmd0aCA9PSAwID8gKFxuXHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24+PC9Ta2VsZXRvbj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdDxGbGV4IHA9XCI0XCI+XG5cdFx0XHRcdFx0PEludGVyYWN0aXZlRm9yY2VHcmFwaFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uPVwid29iYmx5XCJcblx0XHRcdFx0XHRcdHNpbXVsYXRpb25PcHRpb25zPXt7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwMCxcblx0XHRcdFx0XHRcdFx0YWxwaGE6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRsYWJlbEF0dHI9XCJsYWJlbFwiXG5cdFx0XHRcdFx0XHRoaWdobGlnaHREZXBlbmRlbmNpZXNcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHNvY2lhbGRhdGFyZXNwb25zZS5ub2Rlcy5tYXAoKG5vZGUpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8Rm9yY2VHcmFwaE5vZGVcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17bm9kZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdG5vZGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ6IG5vZGUuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBKU09OLnN0cmluZ2lmeShub2RlKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmFkaXVzOiBNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCksXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD17dGhpcy5zY2FsZShNYXRoLmNlaWwoKG5vZGUuaW5jb21lIC8gMTAwMCkgJSAxMCkpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCkpXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0c29jaWFsZGF0YXJlc3BvbnNlLmxpbmtzLm1hcCgobGluaykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxGb3JjZUdyYXBoTGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtsaW5rLnNvdXJjZSArIGxpbmsudGFyZ2V0fVxuXHRcdFx0XHRcdFx0XHRcdFx0bGluaz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzb3VyY2U6IGxpbmsuc291cmNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ6IGxpbmsudGFyZ2V0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNSwgLy8gdGhpcyB2YWx1ZSBpcyBqdXN0IHRvIGZpeCBhIGJ1ZyBpbiB0aGUgbGlicmFyeSB0aGF0IHByZXZlbnRzIHRoZSBub2RlIGdyYXBoIGZyb20gYmVpbmcgY2VudGVyZWQgaW4gdGhlIGZyYW1lLlxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpKVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PC9JbnRlcmFjdGl2ZUZvcmNlR3JhcGg+XG5cdFx0XHRcdDwvRmxleD4pfVxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTm9kZUdyYXBoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})