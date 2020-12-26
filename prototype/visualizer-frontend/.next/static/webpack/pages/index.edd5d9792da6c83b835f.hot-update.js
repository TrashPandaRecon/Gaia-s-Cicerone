webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero.tsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DarkModeSwitch */ \"./src/components/DarkModeSwitch.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/code/src/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n\nvar ENDPOINT = 'http://localhost:30002';\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, App);\n\n    _this = _super.call(this, {});\n    _this.state = {\n      salesresponse: [],\n      timeresponse: 0,\n      endpoint: ENDPOINT\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromAPI', function (data) {\n        return _this2.setState({\n          timeresponse: data\n        });\n      });\n      socket.on('FromSalesData', function (data) {\n        return _this2.setState({\n          salesresponse: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          timeresponse = _this$state.timeresponse,\n          salesresponse = _this$state.salesresponse;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_8__[\"Hero\"], {\n          title: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Main__WEBPACK_IMPORTED_MODULE_10__[\"Main\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: [\"This is \", timeresponse]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__[\"DarkModeSwitch\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_12__[\"Footer\"], {\n          children: \"Fancy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIkVORFBPSU5UIiwiQXBwIiwic3RhdGUiLCJzYWxlc3Jlc3BvbnNlIiwidGltZXJlc3BvbnNlIiwiZW5kcG9pbnQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHQyxtQkFBTyxDQUFDLHdFQUFELENBQTlCOztBQUNBLElBQU1DLFFBQVEsR0FBRyx3QkFBakI7O0lBT01DLEc7Ozs7O0FBQ0wsaUJBQWM7QUFBQTs7QUFBQTs7QUFDUCw4QkFBTSxFQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFhLEVBQUUsRUFETjtBQUVsQkMsa0JBQVksRUFBRSxDQUZJO0FBR2xCQyxjQUFRLEVBQUVMO0FBSFEsS0FBYjtBQUZPO0FBT2I7Ozs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDWEssUUFEVyxHQUNFLEtBQUtILEtBRFAsQ0FDWEcsUUFEVyxFQUVuQjs7QUFDQSxVQUFNQyxNQUFNLEdBQUdSLGNBQWMsQ0FBQ08sUUFBRCxDQUE3QixDQUhtQixDQUluQjs7QUFDTUMsWUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFDQyxJQUFEO0FBQUEsZUFBVSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDTCxzQkFBWSxFQUFFSTtBQUFmLFNBQWQsQ0FBVjtBQUFBLE9BQXJCO0FBQ0FGLFlBQU0sQ0FBQ0MsRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBQ0MsSUFBRDtBQUFBLGVBQVUsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ04sdUJBQWEsRUFBRUs7QUFBaEIsU0FBZCxDQUFWO0FBQUEsT0FBM0I7QUFFTjs7OzZCQUVRO0FBQUEsd0JBQ29DLEtBQUtOLEtBRHpDO0FBQUEsVUFDS0UsWUFETCxlQUNLQSxZQURMO0FBQUEsVUFDbUJELGFBRG5CLGVBQ21CQSxhQURuQjtBQUVSLDBCQUNVLHFFQUFDLCtEQUFEO0FBQUEsZ0NBQ0kscUVBQUMscURBQUQ7QUFBTSxlQUFLLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsc0RBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxvREFBRDtBQUFBLG1DQUFjQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBUUkscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQVNJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURWO0FBYUE7Ozs7RUFuQ2dCTSw0Q0FBSyxDQUFDQyxTOztBQXFDVFYsa0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29kZSxcblx0TGlzdCxcblx0TGlzdEl0ZW0sXG5cdExpc3RJY29uLFxuXHRMaW5rIGFzIENoYWtyYUxpbmssXG5cdFRleHQsXG4gICAgQm94LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGVJY29uLCBMaW5rSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVybyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluJztcbmltcG9ydCB7IERhcmtNb2RlU3dpdGNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaCc7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9CYXJDaGFydCc7XG5pbXBvcnQge1NBTEVTREFUQX0gZnJvbSAnLi4vZGF0YSc7XG5jb25zdCBzb2NrZXRJT0NsaWVudCA9IHJlcXVpcmUoJ3NvY2tldC5pby1jbGllbnQnKTtcbmNvbnN0IEVORFBPSU5UID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMDInO1xuaW50ZXJmYWNlIGluZGV4UHJvcHMge1xuICAgIGVuZHBvaW50OiBzdHJpbmdcbiAgICBzYWxlc3Jlc3BvbnNlOiBhbnlcbiAgICB0aW1lcmVzcG9uc2U6IG51bWJlclxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30saW5kZXhQcm9wcz4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe30pO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2FsZXNyZXNwb25zZTogW10sXG5cdFx0XHR0aW1lcmVzcG9uc2U6IDAsXG5cdFx0XHRlbmRwb2ludDogRU5EUE9JTlQsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZW5kcG9pbnQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly9WZXJ5IHNpbXBseSBjb25uZWN0IHRvIHRoZSBzb2NrZXRcblx0XHRjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG5cdFx0Ly9MaXN0ZW4gZm9yIGRhdGEgb24gdGhlIFwib3V0Z29pbmcgZGF0YVwiIG5hbWVzcGFjZSBhbmQgc3VwcGx5IGEgY2FsbGJhY2sgZm9yIHdoYXQgdG8gZG8gd2hlbiB3ZSBnZXQgb25lLiBJbiB0aGlzIGNhc2UsIHdlIHNldCBhIHN0YXRlIHZhcmlhYmxlXG4gICAgICAgIHNvY2tldC5vbignRnJvbUFQSScsIChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHt0aW1lcmVzcG9uc2U6IGRhdGF9KSk7XG4gICAgICAgIHNvY2tldC5vbignRnJvbVNhbGVzRGF0YScsIChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHtzYWxlc3Jlc3BvbnNlOiBkYXRhfSkpXG4gICAgICAgIFxuXHR9XG5cblx0cmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dGltZXJlc3BvbnNlLCBzYWxlc3Jlc3BvbnNlfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEhlcm8gdGl0bGU9XCJcIi8+XG4gICAgICAgICAgICAgICAgPE1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+VGhpcyBpcyB7dGltZXJlc3BvbnNlfTwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9NYWluPlxuICAgICAgICAgICAgICAgIDxEYXJrTW9kZVN3aXRjaD48L0RhcmtNb2RlU3dpdGNoPlxuICAgICAgICAgICAgICAgIDxGb290ZXI+RmFuY3k8L0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})