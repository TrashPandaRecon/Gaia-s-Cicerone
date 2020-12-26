webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero.tsx\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Main */ \"./src/components/Main.tsx\");\n/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DarkModeSwitch */ \"./src/components/DarkModeSwitch.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/code/src/pages/index.tsx\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar socketIOClient = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n\nvar ENDPOINT = 'http://localhost:30002';\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, App);\n\n    _this = _super.call(this, {});\n    _this.state = {\n      response: 0,\n      endpoint: ENDPOINT\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var endpoint = this.state.endpoint; //Very simply connect to the socket\n\n      var socket = socketIOClient(endpoint); //Listen for data on the \"outgoing data\" namespace and supply a callback for what to do when we get one. In this case, we set a state variable\n\n      socket.on('FromAPI', function (data) {\n        return _this2.setState({\n          response: data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var response = this.state.response;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Container__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_8__[\"Hero\"], {\n          title: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Main__WEBPACK_IMPORTED_MODULE_10__[\"Main\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Box\"], {\n            children: [\"This is \", response]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_11__[\"DarkModeSwitch\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_12__[\"Footer\"], {\n          children: \"Fancy\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbInNvY2tldElPQ2xpZW50IiwicmVxdWlyZSIsIkVORFBPSU5UIiwiQXBwIiwic3RhdGUiLCJyZXNwb25zZSIsImVuZHBvaW50Iiwic29ja2V0Iiwib24iLCJkYXRhIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyx3RUFBRCxDQUE5Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsd0JBQWpCOztJQU9NQyxHOzs7OztBQUNMLGlCQUFjO0FBQUE7O0FBQUE7O0FBQ1AsOEJBQU0sRUFBTjtBQUNOLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxjQUFRLEVBQUUsQ0FERTtBQUVaQyxjQUFRLEVBQUVKO0FBRkUsS0FBYjtBQUZhO0FBTWI7Ozs7d0NBRW1CO0FBQUE7O0FBQUEsVUFDWEksUUFEVyxHQUNFLEtBQUtGLEtBRFAsQ0FDWEUsUUFEVyxFQUVuQjs7QUFDQSxVQUFNQyxNQUFNLEdBQUdQLGNBQWMsQ0FBQ00sUUFBRCxDQUE3QixDQUhtQixDQUluQjs7QUFDQUMsWUFBTSxDQUFDQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFDQyxJQUFEO0FBQUEsZUFBVSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFTCxrQkFBUSxFQUFFSTtBQUFaLFNBQWQsQ0FBVjtBQUFBLE9BQXJCO0FBQ0E7Ozs2QkFFUTtBQUFBLFVBQ0FKLFFBREEsR0FDYSxLQUFLRCxLQURsQixDQUNBQyxRQURBO0FBRVIsMEJBQ1UscUVBQUMsK0RBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxxREFBRDtBQUFNLGVBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxzREFBRDtBQUFBLGlDQUNJLHFFQUFDLG9EQUFEO0FBQUEsbUNBQWNBLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQU1JLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVjtBQVdBOzs7O0VBOUJnQk0sNENBQUssQ0FBQ0MsUzs7QUFnQ1RULGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvZGUsXG5cdExpc3QsXG5cdExpc3RJdGVtLFxuXHRMaXN0SWNvbixcblx0TGluayBhcyBDaGFrcmFMaW5rLFxuXHRUZXh0LFxuICAgIEJveCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrQ2lyY2xlSWNvbiwgTGlua0ljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQmFyQ2hhcnQnO1xuY29uc3Qgc29ja2V0SU9DbGllbnQgPSByZXF1aXJlKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG5jb25zdCBFTkRQT0lOVCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAyJztcblxuaW50ZXJmYWNlIGluZGV4UHJvcHMge1xuICAgIGVuZHBvaW50OiBzdHJpbmdcbiAgICByZXNwb25zZTogbnVtYmVyXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSxpbmRleFByb3BzPiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7fSk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlc3BvbnNlOiAwLFxuXHRcdFx0ZW5kcG9pbnQ6IEVORFBPSU5ULFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGVuZHBvaW50IH0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vVmVyeSBzaW1wbHkgY29ubmVjdCB0byB0aGUgc29ja2V0XG5cdFx0Y29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuXHRcdC8vTGlzdGVuIGZvciBkYXRhIG9uIHRoZSBcIm91dGdvaW5nIGRhdGFcIiBuYW1lc3BhY2UgYW5kIHN1cHBseSBhIGNhbGxiYWNrIGZvciB3aGF0IHRvIGRvIHdoZW4gd2UgZ2V0IG9uZS4gSW4gdGhpcyBjYXNlLCB3ZSBzZXQgYSBzdGF0ZSB2YXJpYWJsZVxuXHRcdHNvY2tldC5vbignRnJvbUFQSScsIChkYXRhKSA9PiB0aGlzLnNldFN0YXRlKHsgcmVzcG9uc2U6IGRhdGEgfSkpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgcmVzcG9uc2UgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEhlcm8gdGl0bGU9XCJcIi8+XG4gICAgICAgICAgICAgICAgPE1haW4+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+VGhpcyBpcyB7cmVzcG9uc2V9PC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvTWFpbj5cbiAgICAgICAgICAgICAgICA8RGFya01vZGVTd2l0Y2g+PC9EYXJrTW9kZVN3aXRjaD5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyPkZhbmN5PC9Gb290ZXI+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})