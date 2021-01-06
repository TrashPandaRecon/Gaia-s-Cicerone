webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FancyBarChart.tsx":
/*!******************************************!*\
  !*** ./src/components/FancyBarChart.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-vis */ \"./node_modules/react-vis/es/index.js\");\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/FancyBarChart.tsx\";\n\n\n\nfunction yDomain(data) {\n  return data.reduce(function (res, row) {\n    return {\n      max: Math.max(res.max, row.y),\n      min: Math.min(res.min, row.y)\n    };\n  }, {\n    max: -Infinity,\n    min: Infinity\n  });\n}\n\nfunction FancyBarChart(_ref) {\n  var data = _ref.data;\n  var useCanvas = false;\n  var BarSeries = useCanvas ? react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeriesCanvas\"] : react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeries\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XYPlot\"], {\n      margin: {\n        left: 110\n      },\n      xType: \"ordinal\",\n      width: 1000,\n      height: 500,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BarSeries, {\n        className: \"vertical-bar-series-example\",\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"YAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      height: 0,\n      width: 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"GradientDefs\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pattern\", {\n          id: \"stripes\",\n          width: \"4\",\n          height: \"20\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M 0, 0 l 5, 5\",\n            stroke: \"#45aeb1\",\n            strokeLinecap: \"square\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pattern\", {\n          id: \"circles\",\n          width: \"3\",\n          height: \"3\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n            cx: \"1.5\",\n            cy: \"1.5\",\n            r: \"0.8\",\n            fill: \"magenta\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"DiscreteColorLegend\"], {\n      orientation: \"horizontal\",\n      width: 300,\n      items: [{\n        title: 'Sales',\n        color: 'url(#stripes)',\n        strokeWidth: 13\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 4\n  }, this);\n}\n\n_c = FancyBarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FancyBarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"FancyBarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmFuY3lCYXJDaGFydC50c3g/MWUyYiJdLCJuYW1lcyI6WyJ5RG9tYWluIiwiZGF0YSIsInJlZHVjZSIsInJlcyIsInJvdyIsIm1heCIsIk1hdGgiLCJ5IiwibWluIiwiSW5maW5pdHkiLCJGYW5jeUJhckNoYXJ0IiwidXNlQ2FudmFzIiwiQmFyU2VyaWVzIiwiVmVydGljYWxCYXJTZXJpZXNDYW52YXMiLCJWZXJ0aWNhbEJhclNlcmllcyIsImxlZnQiLCJ0aXRsZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUV0QixTQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FDTixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNaLFdBQU87QUFDTEMsU0FBRyxFQUFFQyxJQUFJLENBQUNELEdBQUwsQ0FBU0YsR0FBRyxDQUFDRSxHQUFiLEVBQWtCRCxHQUFHLENBQUNHLENBQXRCLENBREE7QUFFTEMsU0FBRyxFQUFFRixJQUFJLENBQUNFLEdBQUwsQ0FBU0wsR0FBRyxDQUFDSyxHQUFiLEVBQWtCSixHQUFHLENBQUNHLENBQXRCO0FBRkEsS0FBUDtBQUlELEdBTkssRUFPTjtBQUFDRixPQUFHLEVBQUUsQ0FBQ0ksUUFBUDtBQUFpQkQsT0FBRyxFQUFFQztBQUF0QixHQVBNLENBQVA7QUFTQTs7QUFDRCxTQUFTQyxhQUFULE9BQStCO0FBQUEsTUFBTlQsSUFBTSxRQUFOQSxJQUFNO0FBRTNCLE1BQU9VLFNBQVMsR0FBSSxLQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0QsU0FBUyxHQUFHRSxpRUFBSCxHQUE2QkMsMkRBQXhEO0FBRUEsc0JBQ0Q7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUNDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQURUO0FBRUMsV0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFLLEVBQUUsSUFIUjtBQUlDLFlBQU0sRUFBRSxHQUpUO0FBQUEsOEJBTUMscUVBQUMsU0FBRDtBQUFXLGlCQUFTLEVBQUMsNkJBQXJCO0FBQW1ELFlBQUksRUFBRWQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5ELGVBT0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBUUMscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBV0M7QUFBSyxZQUFNLEVBQUUsQ0FBYjtBQUFnQixXQUFLLEVBQUUsQ0FBdkI7QUFBQSw2QkFDQyxxRUFBQyxzREFBRDtBQUFBLGdDQUNDO0FBQ0MsWUFBRSxFQUFDLFNBREo7QUFFQyxlQUFLLEVBQUMsR0FGUDtBQUdDLGdCQUFNLEVBQUMsSUFIUjtBQUlDLHNCQUFZLEVBQUMsZ0JBSmQ7QUFBQSxpQ0FNQztBQUFNLGFBQUMsRUFBQyxlQUFSO0FBQXdCLGtCQUFNLEVBQUMsU0FBL0I7QUFBeUMseUJBQWEsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQVNDO0FBQ0MsWUFBRSxFQUFDLFNBREo7QUFFQyxlQUFLLEVBQUMsR0FGUDtBQUdDLGdCQUFNLEVBQUMsR0FIUjtBQUlDLHNCQUFZLEVBQUMsZ0JBSmQ7QUFBQSxpQ0FNQztBQUFRLGNBQUUsRUFBQyxLQUFYO0FBQWlCLGNBQUUsRUFBQyxLQUFwQjtBQUEwQixhQUFDLEVBQUMsS0FBNUI7QUFBa0MsZ0JBQUksRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQsZUErQkMscUVBQUMsNkRBQUQ7QUFDQyxpQkFBVyxFQUFDLFlBRGI7QUFFQyxXQUFLLEVBQUUsR0FGUjtBQUdDLFdBQUssRUFBRSxDQUFDO0FBQUVlLGFBQUssRUFBRSxPQUFUO0FBQWtCQyxhQUFLLEVBQUUsZUFBekI7QUFBMENDLG1CQUFXLEVBQUU7QUFBdkQsT0FBRDtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREM7QUF3Q0g7O0tBN0NRUixhO0FBOENNQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0ZhbmN5QmFyQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdFhZUGxvdCxcblx0WEF4aXMsXG5cdFlBeGlzLFxuXHRWZXJ0aWNhbEJhclNlcmllcyxcbiAgICBWZXJ0aWNhbEJhclNlcmllc0NhbnZhcyxcbiAgICBEaXNjcmV0ZUNvbG9yTGVnZW5kLFxuICAgIEdyYWRpZW50RGVmc1xufSBmcm9tICdyZWFjdC12aXMnO1xuXG5mdW5jdGlvbiB5RG9tYWluKGRhdGEpIHtcbiAgICBcbiByZXR1cm4gZGF0YS5yZWR1Y2UoXG4gIChyZXMsIHJvdykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtYXg6IE1hdGgubWF4KHJlcy5tYXgsIHJvdy55KSxcbiAgICAgIG1pbjogTWF0aC5taW4ocmVzLm1pbiwgcm93LnkpXG4gICAgfTtcbiAgfSxcbiAge21heDogLUluZmluaXR5LCBtaW46IEluZmluaXR5fVxuICAgICk7XG59XG5mdW5jdGlvbiBGYW5jeUJhckNoYXJ0KHsgZGF0YX0pe1xuXHRcbiAgICBjb25zdCAgdXNlQ2FudmFzICA9IGZhbHNlXG4gICAgY29uc3QgQmFyU2VyaWVzID0gdXNlQ2FudmFzID8gVmVydGljYWxCYXJTZXJpZXNDYW52YXMgOiBWZXJ0aWNhbEJhclNlcmllcztcbiAgICBcbiAgICByZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFhZUGxvdFxuXHRcdFx0XHRcdG1hcmdpbj17eyBsZWZ0OiAxMTAgfX1cblx0XHRcdFx0XHR4VHlwZT1cIm9yZGluYWxcIlxuXHRcdFx0XHRcdHdpZHRoPXsxMDAwfVxuXHRcdFx0XHRcdGhlaWdodD17NTAwfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEJhclNlcmllcyBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1iYXItc2VyaWVzLWV4YW1wbGVcIiBkYXRhPXtkYXRhfSAvPlxuXHRcdFx0XHRcdDxYQXhpcyAvPlxuXHRcdFx0XHRcdDxZQXhpcyAvPlxuXHRcdFx0XHQ8L1hZUGxvdD5cblx0XHRcdFx0PHN2ZyBoZWlnaHQ9ezB9IHdpZHRoPXswfT5cblx0XHRcdFx0XHQ8R3JhZGllbnREZWZzPlxuXHRcdFx0XHRcdFx0PHBhdHRlcm5cblx0XHRcdFx0XHRcdFx0aWQ9XCJzdHJpcGVzXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI0XCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNIDAsIDAgbCA1LCA1XCIgc3Ryb2tlPVwiIzQ1YWViMVwiIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIiAvPlxuXHRcdFx0XHRcdFx0PC9wYXR0ZXJuPlxuXHRcdFx0XHRcdFx0PHBhdHRlcm5cblx0XHRcdFx0XHRcdFx0aWQ9XCJjaXJjbGVzXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzXCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiM1wiXG5cdFx0XHRcdFx0XHRcdHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjAuOFwiIGZpbGw9XCJtYWdlbnRhXCIgLz5cblx0XHRcdFx0XHRcdDwvcGF0dGVybj5cblx0XHRcdFx0XHQ8L0dyYWRpZW50RGVmcz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDxEaXNjcmV0ZUNvbG9yTGVnZW5kXG5cdFx0XHRcdFx0b3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHR3aWR0aD17MzAwfVxuXHRcdFx0XHRcdGl0ZW1zPXtbeyB0aXRsZTogJ1NhbGVzJywgY29sb3I6ICd1cmwoI3N0cmlwZXMpJywgc3Ryb2tlV2lkdGg6IDEzIH1dfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0XG59XG5leHBvcnQgZGVmYXVsdCBGYW5jeUJhckNoYXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FancyBarChart.tsx\n");

/***/ })

})