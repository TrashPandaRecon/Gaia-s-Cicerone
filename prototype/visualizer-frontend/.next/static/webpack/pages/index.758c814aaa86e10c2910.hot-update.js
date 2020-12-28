webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FancyBarChart.tsx":
/*!******************************************!*\
  !*** ./src/components/FancyBarChart.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-vis */ \"./node_modules/react-vis/es/index.js\");\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/FancyBarChart.tsx\";\n\n\n\nfunction yDomain(data) {\n  return data.reduce(function (res, row) {\n    return {\n      max: Math.max(res.max, row.y),\n      min: Math.min(res.min, row.y)\n    };\n  }, {\n    max: -Infinity,\n    min: Infinity\n  });\n}\n\nfunction FancyBarChart(_ref) {\n  var data = _ref.data;\n  var useCanvas = false;\n  var BarSeries = useCanvas ? react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeriesCanvas\"] : react_vis__WEBPACK_IMPORTED_MODULE_2__[\"VerticalBarSeries\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XYPlot\"], {\n      margin: {\n        left: 110\n      },\n      xType: \"ordinal\",\n      width: 1000,\n      height: 500,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BarSeries, {\n        className: \"vertical-bar-series-example\",\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"XAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"YAxis\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_2__[\"DiscreteColorLegend\"], {\n      orientation: \"horizontal\",\n      width: 300,\n      items: [{\n        title: 'Wide stripes',\n        color: 'url(steelblue',\n        strokeWidth: 13\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 4\n  }, this);\n}\n\n_c = FancyBarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FancyBarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"FancyBarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmFuY3lCYXJDaGFydC50c3g/MWUyYiJdLCJuYW1lcyI6WyJ5RG9tYWluIiwiZGF0YSIsInJlZHVjZSIsInJlcyIsInJvdyIsIm1heCIsIk1hdGgiLCJ5IiwibWluIiwiSW5maW5pdHkiLCJGYW5jeUJhckNoYXJ0IiwidXNlQ2FudmFzIiwiQmFyU2VyaWVzIiwiVmVydGljYWxCYXJTZXJpZXNDYW52YXMiLCJWZXJ0aWNhbEJhclNlcmllcyIsImxlZnQiLCJ0aXRsZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUV0QixTQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FDTixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNaLFdBQU87QUFDTEMsU0FBRyxFQUFFQyxJQUFJLENBQUNELEdBQUwsQ0FBU0YsR0FBRyxDQUFDRSxHQUFiLEVBQWtCRCxHQUFHLENBQUNHLENBQXRCLENBREE7QUFFTEMsU0FBRyxFQUFFRixJQUFJLENBQUNFLEdBQUwsQ0FBU0wsR0FBRyxDQUFDSyxHQUFiLEVBQWtCSixHQUFHLENBQUNHLENBQXRCO0FBRkEsS0FBUDtBQUlELEdBTkssRUFPTjtBQUFDRixPQUFHLEVBQUUsQ0FBQ0ksUUFBUDtBQUFpQkQsT0FBRyxFQUFFQztBQUF0QixHQVBNLENBQVA7QUFTQTs7QUFDRCxTQUFTQyxhQUFULE9BQStCO0FBQUEsTUFBTlQsSUFBTSxRQUFOQSxJQUFNO0FBRTNCLE1BQU9VLFNBQVMsR0FBSSxLQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0QsU0FBUyxHQUFHRSxpRUFBSCxHQUE2QkMsMkRBQXhEO0FBRUEsc0JBQ0Q7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUNDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQURUO0FBRUMsV0FBSyxFQUFDLFNBRlA7QUFHQyxXQUFLLEVBQUUsSUFIUjtBQUlDLFlBQU0sRUFBRSxHQUpUO0FBQUEsOEJBTUMscUVBQUMsU0FBRDtBQUFXLGlCQUFTLEVBQUMsNkJBQXJCO0FBQW1ELFlBQUksRUFBRWQ7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5ELGVBT0MscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBELGVBUUMscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBV0MscUVBQUMsNkRBQUQ7QUFDQyxpQkFBVyxFQUFDLFlBRGI7QUFFQyxXQUFLLEVBQUUsR0FGUjtBQUdDLFdBQUssRUFBRSxDQUFDO0FBQUNlLGFBQUssRUFBRSxjQUFSO0FBQXdCQyxhQUFLLEVBQUUsZUFBL0I7QUFBZ0RDLG1CQUFXLEVBQUU7QUFBN0QsT0FBRDtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQztBQW9CSDs7S0F6QlFSLGE7QUEwQk1BLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRmFuY3lCYXJDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0WFlQbG90LFxuXHRYQXhpcyxcblx0WUF4aXMsXG5cdFZlcnRpY2FsQmFyU2VyaWVzLFxuICAgIFZlcnRpY2FsQmFyU2VyaWVzQ2FudmFzLFxuICAgIERpc2NyZXRlQ29sb3JMZWdlbmRcbn0gZnJvbSAncmVhY3QtdmlzJztcblxuZnVuY3Rpb24geURvbWFpbihkYXRhKSB7XG4gICAgXG4gcmV0dXJuIGRhdGEucmVkdWNlKFxuICAocmVzLCByb3cpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF4OiBNYXRoLm1heChyZXMubWF4LCByb3cueSksXG4gICAgICBtaW46IE1hdGgubWluKHJlcy5taW4sIHJvdy55KVxuICAgIH07XG4gIH0sXG4gIHttYXg6IC1JbmZpbml0eSwgbWluOiBJbmZpbml0eX1cbiAgICApO1xufVxuZnVuY3Rpb24gRmFuY3lCYXJDaGFydCh7IGRhdGF9KXtcblx0XG4gICAgY29uc3QgIHVzZUNhbnZhcyAgPSBmYWxzZVxuICAgIGNvbnN0IEJhclNlcmllcyA9IHVzZUNhbnZhcyA/IFZlcnRpY2FsQmFyU2VyaWVzQ2FudmFzIDogVmVydGljYWxCYXJTZXJpZXM7XG4gICAgXG4gICAgcmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxYWVBsb3Rcblx0XHRcdFx0XHRtYXJnaW49e3sgbGVmdDogMTEwIH19XG5cdFx0XHRcdFx0eFR5cGU9XCJvcmRpbmFsXCJcblx0XHRcdFx0XHR3aWR0aD17MTAwMH1cblx0XHRcdFx0XHRoZWlnaHQ9ezUwMH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxCYXJTZXJpZXMgY2xhc3NOYW1lPVwidmVydGljYWwtYmFyLXNlcmllcy1leGFtcGxlXCIgZGF0YT17ZGF0YX0gLz5cblx0XHRcdFx0XHQ8WEF4aXMgLz5cblx0XHRcdFx0XHQ8WUF4aXMgLz5cblx0XHRcdFx0PC9YWVBsb3Q+XG5cdFx0XHRcdDxEaXNjcmV0ZUNvbG9yTGVnZW5kXG5cdFx0XHRcdFx0b3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHR3aWR0aD17MzAwfVxuXHRcdFx0XHRcdGl0ZW1zPXtbe3RpdGxlOiAnV2lkZSBzdHJpcGVzJywgY29sb3I6ICd1cmwoc3RlZWxibHVlJywgc3Ryb2tlV2lkdGg6IDEzfV19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHRcbn1cbmV4cG9ydCBkZWZhdWx0IEZhbmN5QmFyQ2hhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FancyBarChart.tsx\n");

/***/ })

})