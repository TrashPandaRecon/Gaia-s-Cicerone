webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero.tsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DarkModeSwitch */ \"./src/components/DarkModeSwitch.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_BarChart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/BarChart */ \"./src/components/BarChart.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/code/src/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n\nvar ENDPOINT = 'http://localhost:30002';\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, App);\n\n    _this = _super.call(this, {});\n    _this.state = {\n      salesresponse: [],\n      timeresponse: 0,\n      endpoint: ENDPOINT\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromAPI', function (data) {\n        return _this2.setState({\n          timeresponse: data\n        });\n      });\n      socket.on('FromSalesData', function (data) {\n        return _this2.setState({\n          salesresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          timeresponse = _this$state.timeresponse,\n          salesresponse = _this$state.salesresponse;\n      console.log(salesresponse);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_8__[\"Hero\"], {\n          title: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Main__WEBPACK_IMPORTED_MODULE_10__[\"Main\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: [\"This is \", timeresponse]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: !salesresponse ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_BarChart__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 43\n            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_BarChart__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n              data: salesresponse\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 67\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__[\"DarkModeSwitch\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_12__[\"Footer\"], {\n          children: \"Fancy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIkVORFBPSU5UIiwiQXBwIiwic3RhdGUiLCJzYWxlc3Jlc3BvbnNlIiwidGltZXJlc3BvbnNlIiwiZW5kcG9pbnQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsd0JBQWpCOztJQU9NQyxHOzs7OztBQUNMLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1AsOEJBQU0sRUFBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBYSxFQUFFLEVBRE47QUFFbEJDLGtCQUFZLEVBQUUsQ0FGSTtBQUdsQkMsY0FBUSxFQUFFTDtBQUhRLEtBQWI7QUFGTztBQU9iOzs7O3dDQUVtQjtBQUFBOztBQUFBLFVBQ1hLLFFBRFcsR0FDRSxLQUFLSCxLQURQLENBQ1hHLFFBRFcsRUFFbkI7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHUixjQUFjLENBQUNPLFFBQUQsQ0FBN0IsQ0FIbUIsQ0FJbkI7O0FBQ01DLFlBQU0sQ0FBQ0MsRUFBUCxDQUFVLFNBQVYsRUFBcUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVUsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ0wsc0JBQVksRUFBRUk7QUFBZixTQUFkLENBQVY7QUFBQSxPQUFyQjtBQUNBRixZQUFNLENBQUNDLEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFVBQUNDLElBQUQ7QUFBQSxlQUFVLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNOLHVCQUFhLEVBQUVLO0FBQWhCLFNBQWQsQ0FBVjtBQUFBLE9BQTNCO0FBRU47Ozs2QkFFUTtBQUFBLHdCQUNvQyxLQUFLTixLQUR6QztBQUFBLFVBQ0tFLFlBREwsZUFDS0EsWUFETDtBQUFBLFVBQ21CRCxhQURuQixlQUNtQkEsYUFEbkI7QUFFRk8sYUFBTyxDQUFDQyxHQUFSLENBQVlSLGFBQVo7QUFDTiwwQkFDVSxxRUFBQywrREFBRDtBQUFBLGdDQUNJLHFFQUFDLHFEQUFEO0FBQU0sZUFBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLHNEQUFEO0FBQUEsa0NBQ0kscUVBQUMsb0RBQUQ7QUFBQSxtQ0FBY0MsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSSxxRUFBQyxvREFBRDtBQUFBLHNCQUNJLENBQUNELGFBQUQsZ0JBQWtCLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWxCLGdCQUEwQyxxRUFBQyw2REFBRDtBQUFVLGtCQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFRSSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKLGVBU0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFY7QUFhQTs7OztFQXBDZ0JTLDRDQUFLLENBQUNDLFM7O0FBc0NUWixrRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb2RlLFxuXHRMaXN0LFxuXHRMaXN0SXRlbSxcblx0TGlzdEljb24sXG5cdExpbmsgYXMgQ2hha3JhTGluayxcblx0VGV4dCxcbiAgICBCb3gsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDaGVja0NpcmNsZUljb24sIExpbmtJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJztcbmltcG9ydCB7IE1haW4gfSBmcm9tICcuLi9jb21wb25lbnRzL01haW4nO1xuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0JhckNoYXJ0JztcbmltcG9ydCB7U0FMRVNEQVRBfSBmcm9tICcuLi9kYXRhJztcbmNvbnN0IHNvY2tldElPQ2xpZW50ID0gcmVxdWlyZSgnc29ja2V0LmlvLWNsaWVudCcpO1xuY29uc3QgRU5EUE9JTlQgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwMic7XG5pbnRlcmZhY2UgaW5kZXhQcm9wcyB7XG4gICAgZW5kcG9pbnQ6IHN0cmluZ1xuICAgIHNhbGVzcmVzcG9uc2U6IGFueVxuICAgIHRpbWVyZXNwb25zZTogbnVtYmVyXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSxpbmRleFByb3BzPiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7fSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzYWxlc3Jlc3BvbnNlOiBbXSxcblx0XHRcdHRpbWVyZXNwb25zZTogMCxcblx0XHRcdGVuZHBvaW50OiBFTkRQT0lOVCxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBlbmRwb2ludCB9ID0gdGhpcy5zdGF0ZTtcblx0XHQvL1Zlcnkgc2ltcGx5IGNvbm5lY3QgdG8gdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcblx0XHQvL0xpc3RlbiBmb3IgZGF0YSBvbiB0aGUgXCJvdXRnb2luZyBkYXRhXCIgbmFtZXNwYWNlIGFuZCBzdXBwbHkgYSBjYWxsYmFjayBmb3Igd2hhdCB0byBkbyB3aGVuIHdlIGdldCBvbmUuIEluIHRoaXMgY2FzZSwgd2Ugc2V0IGEgc3RhdGUgdmFyaWFibGVcbiAgICAgICAgc29ja2V0Lm9uKCdGcm9tQVBJJywgKGRhdGEpID0+IHRoaXMuc2V0U3RhdGUoe3RpbWVyZXNwb25zZTogZGF0YX0pKTtcbiAgICAgICAgc29ja2V0Lm9uKCdGcm9tU2FsZXNEYXRhJywgKGRhdGEpID0+IHRoaXMuc2V0U3RhdGUoe3NhbGVzcmVzcG9uc2U6IGRhdGF9KSlcbiAgICAgICAgXG5cdH1cblxuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHt0aW1lcmVzcG9uc2UsIHNhbGVzcmVzcG9uc2V9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coc2FsZXNyZXNwb25zZSlcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SGVybyB0aXRsZT1cIlwiLz5cbiAgICAgICAgICAgICAgICA8TWFpbj5cbiAgICAgICAgICAgICAgICAgICAgPEJveD5UaGlzIGlzIHt0aW1lcmVzcG9uc2V9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgIHshc2FsZXNyZXNwb25zZSA/ICg8QmFyQ2hhcnQ+PC9CYXJDaGFydD4pOig8QmFyQ2hhcnQgZGF0YT17c2FsZXNyZXNwb25zZX0+PC9CYXJDaGFydD4gKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9NYWluPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZVN3aXRjaD48L0RhcmtNb2RlU3dpdGNoPlxuICAgICAgICAgICAgICAgIDxGb290ZXI+RmFuY3k8L0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})