webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FancyBarChart.tsx":
/*!******************************************!*\
  !*** ./src/components/FancyBarChart.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-vis */ \"./node_modules/react-vis/es/index.js\");\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/FancyBarChart.tsx\";\n\n\n\nfunction yDomain(data) {\n  return data.reduce(function (res, row) {\n    return {\n      max: Math.max(res.max, row.y),\n      min: Math.min(res.min, row.y)\n    };\n  }, {\n    max: -Infinity,\n    min: Infinity\n  });\n}\n\nfunction FancyBarChart(_ref) {\n  var data = _ref.data;\n  var useCanvas = false;\n  var BarSeries = useCanvas ? react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeriesCanvas\"] : react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeries\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XYPlot\"], {\n      margin: {\n        left: 110\n      },\n      xType: \"ordinal\",\n      width: 1000,\n      height: 500,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BarSeries, {\n        className: \"vertical-bar-series-example\",\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"YAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"DiscreteColorLegend\"], {\n      orientation: \"horizontal\",\n      width: 300,\n      items: [{\n        title: 'Wide stripes',\n        color: 'url(steelblue)',\n        strokeWidth: 13\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 4\n  }, this);\n}\n\n_c = FancyBarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FancyBarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"FancyBarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmFuY3lCYXJDaGFydC50c3g/MWUyYiJdLCJuYW1lcyI6WyJ5RG9tYWluIiwiZGF0YSIsInJlZHVjZSIsInJlcyIsInJvdyIsIm1heCIsIk1hdGgiLCJ5IiwibWluIiwiSW5maW5pdHkiLCJGYW5jeUJhckNoYXJ0IiwidXNlQ2FudmFzIiwiQmFyU2VyaWVzIiwiVmVydGljYWxCYXJTZXJpZXNDYW52YXMiLCJWZXJ0aWNhbEJhclNlcmllcyIsImxlZnQiLCJ0aXRsZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUV0QixTQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FDTixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNaLFdBQU87QUFDTEMsU0FBRyxFQUFFQyxJQUFJLENBQUNELEdBQUwsQ0FBU0YsR0FBRyxDQUFDRSxHQUFiLEVBQWtCRCxHQUFHLENBQUNHLENBQXRCLENBREE7QUFFTEMsU0FBRyxFQUFFRixJQUFJLENBQUNFLEdBQUwsQ0FBU0wsR0FBRyxDQUFDSyxHQUFiLEVBQWtCSixHQUFHLENBQUNHLENBQXRCO0FBRkEsS0FBUDtBQUlELEdBTkssRUFPTjtBQUFDRixPQUFHLEVBQUUsQ0FBQ0ksUUFBUDtBQUFpQkQsT0FBRyxFQUFFQztBQUF0QixHQVBNLENBQVA7QUFTQTs7QUFDRCxTQUFTQyxhQUFULE9BQStCO0FBQUEsTUFBTlQsSUFBTSxRQUFOQSxJQUFNO0FBRTNCLE1BQU9VLFNBQVMsR0FBSSxLQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0QsU0FBUyxHQUFHRSxpRUFBSCxHQUE2QkMsMkRBQXhEO0FBRUEsc0JBQ0Q7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUNDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQURUO0FBRUMsV0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFLLEVBQUUsSUFIUjtBQUlDLFlBQU0sRUFBRSxHQUpUO0FBQUEsOEJBTUMscUVBQUMsU0FBRDtBQUFXLGlCQUFTLEVBQUMsNkJBQXJCO0FBQW1ELFlBQUksRUFBRWQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5ELGVBT0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBUUMscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBV0MscUVBQUMsNkRBQUQ7QUFDQyxpQkFBVyxFQUFDLFlBRGI7QUFFQyxXQUFLLEVBQUUsR0FGUjtBQUdDLFdBQUssRUFBRSxDQUFDO0FBQUNlLGFBQUssRUFBRSxjQUFSO0FBQXdCQyxhQUFLLEVBQUUsZ0JBQS9CO0FBQWlEQyxtQkFBVyxFQUFFO0FBQTlELE9BQUQ7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREM7QUFvQkg7O0tBekJRUixhO0FBMEJNQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0ZhbmN5QmFyQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdFhZUGxvdCxcblx0WEF4aXMsXG5cdFlBeGlzLFxuXHRWZXJ0aWNhbEJhclNlcmllcyxcbiAgICBWZXJ0aWNhbEJhclNlcmllc0NhbnZhcyxcbiAgICBEaXNjcmV0ZUNvbG9yTGVnZW5kXG59IGZyb20gJ3JlYWN0LXZpcyc7XG5cbmZ1bmN0aW9uIHlEb21haW4oZGF0YSkge1xuICAgIFxuIHJldHVybiBkYXRhLnJlZHVjZShcbiAgKHJlcywgcm93KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1heDogTWF0aC5tYXgocmVzLm1heCwgcm93LnkpLFxuICAgICAgbWluOiBNYXRoLm1pbihyZXMubWluLCByb3cueSlcbiAgICB9O1xuICB9LFxuICB7bWF4OiAtSW5maW5pdHksIG1pbjogSW5maW5pdHl9XG4gICAgKTtcbn1cbmZ1bmN0aW9uIEZhbmN5QmFyQ2hhcnQoeyBkYXRhfSl7XG5cdFxuICAgIGNvbnN0ICB1c2VDYW52YXMgID0gZmFsc2VcbiAgICBjb25zdCBCYXJTZXJpZXMgPSB1c2VDYW52YXMgPyBWZXJ0aWNhbEJhclNlcmllc0NhbnZhcyA6IFZlcnRpY2FsQmFyU2VyaWVzO1xuICAgIFxuICAgIHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8WFlQbG90XG5cdFx0XHRcdFx0bWFyZ2luPXt7IGxlZnQ6IDExMCB9fVxuXHRcdFx0XHRcdHhUeXBlPVwib3JkaW5hbFwiXG5cdFx0XHRcdFx0d2lkdGg9ezEwMDB9XG5cdFx0XHRcdFx0aGVpZ2h0PXs1MDB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8QmFyU2VyaWVzIGNsYXNzTmFtZT1cInZlcnRpY2FsLWJhci1zZXJpZXMtZXhhbXBsZVwiIGRhdGE9e2RhdGF9IC8+XG5cdFx0XHRcdFx0PFhBeGlzIC8+XG5cdFx0XHRcdFx0PFlBeGlzIC8+XG5cdFx0XHRcdDwvWFlQbG90PlxuXHRcdFx0XHQ8RGlzY3JldGVDb2xvckxlZ2VuZFxuXHRcdFx0XHRcdG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdFx0d2lkdGg9ezMwMH1cblx0XHRcdFx0XHRpdGVtcz17W3t0aXRsZTogJ1dpZGUgc3RyaXBlcycsIGNvbG9yOiAndXJsKHN0ZWVsYmx1ZSknLCBzdHJva2VXaWR0aDogMTN9XX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFxufVxuZXhwb3J0IGRlZmF1bHQgRmFuY3lCYXJDaGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FancyBarChart.tsx\n");

/***/ })

})