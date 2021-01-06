webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/BarChart.tsx":
/*!*************************************!*\
  !*** ./src/components/BarChart.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _hooks_useD3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useD3 */ \"./src/components/hooks/useD3.tsx\");\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/BarChart.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction BarChart(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var ref = Object(_hooks_useD3__WEBPACK_IMPORTED_MODULE_4__[\"useD3\"])(function (svg) {\n    var height = 500;\n    var width = 1000;\n    var margin = {\n      top: 20,\n      right: 30,\n      bottom: 30,\n      left: 40\n    };\n    var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleBand\"]().domain(data.map(function (d) {\n      return d.x;\n    })).rangeRound([margin.left, width - margin.right]).padding(0.1);\n    var y1 = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](data, function (d) {\n      return d.y;\n    })]).rangeRound([height - margin.bottom, margin.top]);\n\n    var xAxis = function xAxis(g) {\n      return g.attr('transform', \"translate(0,\".concat(height - margin.bottom, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](x).tickValues(d3__WEBPACK_IMPORTED_MODULE_3__[\"ticks\"].apply(d3__WEBPACK_IMPORTED_MODULE_3__, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](x.domain())).concat([width / 40])).filter(function (v) {\n        return x(v) !== undefined;\n      })).tickSizeOuter(0));\n    };\n\n    var y1Axis = function y1Axis(g) {\n      return g.attr('transform', \"translate(\".concat(margin.left, \",0)\")).style('color', 'steelblue').call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"](y1).ticks(null, 's')).call(function (g) {\n        return g.select('.domain').remove();\n      }).call(function (g) {\n        return g.append('text').attr('x', -margin.left).attr('y', 10).attr('fill', 'currentColor').attr('text-anchor', 'start').text(data.y1);\n      });\n    };\n\n    svg.select('.x-axis').call(xAxis);\n    svg.select('.y-axis').call(y1Axis);\n    svg.select('.plot-area').attr('fill', 'steelblue').selectAll('.bar').data(data).join('rect').attr('class', 'bar').attr('x', function (d) {\n      return x(d.x);\n    }).attr('width', x.bandwidth()).attr('y', function (d) {\n      return y1(d.y);\n    }).attr('height', function (d) {\n      return y1(0) - y1(d.y);\n    });\n  }, [data.length]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n      ref: ref,\n      style: {\n        height: 500,\n        width: '100%',\n        marginRight: '0px',\n        marginLeft: '0px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"plot-area\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"x-axis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"y-axis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n      height: 0,\n      width: 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GradientDefs, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pattern\", {\n          id: \"stripes\",\n          width: \"4\",\n          height: \"4\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n            d: \"M 0, 0 l 5, 5\",\n            stroke: \"#45aeb1\",\n            strokeLinecap: \"square\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pattern\", {\n          id: \"circles\",\n          width: \"3\",\n          height: \"3\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"circle\", {\n            cx: \"1.5\",\n            cy: \"1.5\",\n            r: \"0.8\",\n            fill: \"magenta\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(DiscreteColorLegend, {\n      orientation: \"horizontal\",\n      width: 300,\n      items: [{\n        title: 'Sales',\n        color: 'url(#stripes)',\n        strokeWidth: 10000\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\n_s(BarChart, \"r127xTdrGuIqcYXTmMbvPxoKAyo=\", false, function () {\n  return [_hooks_useD3__WEBPACK_IMPORTED_MODULE_4__[\"useD3\"]];\n});\n\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"BarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyQ2hhcnQudHN4P2QxZTMiXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJkYXRhIiwicmVmIiwidXNlRDMiLCJzdmciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIngiLCJkMyIsImRvbWFpbiIsIm1hcCIsImQiLCJyYW5nZVJvdW5kIiwicGFkZGluZyIsInkxIiwieSIsInhBeGlzIiwiZyIsImF0dHIiLCJjYWxsIiwidGlja1ZhbHVlcyIsImZpbHRlciIsInYiLCJ1bmRlZmluZWQiLCJ0aWNrU2l6ZU91dGVyIiwieTFBeGlzIiwic3R5bGUiLCJ0aWNrcyIsInNlbGVjdCIsInJlbW92ZSIsImFwcGVuZCIsInRleHQiLCJzZWxlY3RBbGwiLCJqb2luIiwiYmFuZHdpZHRoIiwibGVuZ3RoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGl0bGUiLCJjb2xvciIsInN0cm9rZVdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQixNQUFNQyxHQUFHLEdBQUdDLDBEQUFLLENBQ2hCLFVBQUNDLEdBQUQsRUFBUztBQUNSLFFBQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUc7QUFBRUMsU0FBRyxFQUFFLEVBQVA7QUFBV0MsV0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxZQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFVBQUksRUFBRTtBQUF4QyxLQUFmO0FBRUEsUUFBTUMsQ0FBQyxHQUFHQyw0Q0FBQSxHQUVSQyxNQUZRLENBRURiLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNKLENBQVQ7QUFB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R0FIUjtBQUlDLHNCQUFZLEVBQUMsZ0JBSmQ7QUFBQSxpQ0FNQztBQUFRLGNBQUUsRUFBQyxLQUFYO0FBQWlCLGNBQUUsRUFBQyxLQUFwQjtBQUEwQixhQUFDLEVBQUMsS0FBNUI7QUFBa0MsZ0JBQUksRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEEsZUFrQ0oscUVBQUMsbUJBQUQ7QUFDQyxpQkFBVyxFQUFDLFlBRGI7QUFFQyxXQUFLLEVBQUUsR0FGUjtBQUdDLFdBQUssRUFBRSxDQUFDO0FBQUVDLGFBQUssRUFBRSxPQUFUO0FBQWtCQyxhQUFLLEVBQUUsZUFBekI7QUFBMENDLG1CQUFXLEVBQUU7QUFBdkQsT0FBRDtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0k7QUFBQSxrQkFESjtBQTBDSDs7R0EzR1E3QyxRO1VBQ0lHLGtEOzs7S0FESkgsUTtBQTZHTUEsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYXJDaGFydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQge3VzZUQzfSBmcm9tICcuL2hvb2tzL3VzZUQzJztcblxuZnVuY3Rpb24gQmFyQ2hhcnQoeyBkYXRhIH0pIHtcblx0Y29uc3QgcmVmID0gdXNlRDMoXG5cdFx0KHN2ZykgPT4ge1xuXHRcdFx0Y29uc3QgaGVpZ2h0ID0gNTAwO1xuXHRcdFx0Y29uc3Qgd2lkdGggPSAxMDAwO1xuXHRcdFx0Y29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMzAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwIH07XG5cblx0XHRcdGNvbnN0IHggPSBkM1xuXHRcdFx0XHQuc2NhbGVCYW5kKClcblx0XHRcdFx0LmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC54KSlcblx0XHRcdFx0LnJhbmdlUm91bmQoW21hcmdpbi5sZWZ0LCB3aWR0aCAtIG1hcmdpbi5yaWdodF0pXG5cdFx0XHRcdC5wYWRkaW5nKDAuMSk7XG5cblx0XHRcdGNvbnN0IHkxID0gZDNcblx0XHRcdFx0LnNjYWxlTGluZWFyKClcblx0XHRcdFx0LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIChkKSA9PiBkLnkpXSlcblx0XHRcdFx0LnJhbmdlUm91bmQoW2hlaWdodCAtIG1hcmdpbi5ib3R0b20sIG1hcmdpbi50b3BdKTtcblxuXHRcdFx0Y29uc3QgeEF4aXMgPSAoZykgPT5cblx0XHRcdFx0Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSBtYXJnaW4uYm90dG9tfSlgKS5jYWxsKFxuXHRcdFx0XHRcdGQzXG5cdFx0XHRcdFx0XHQuYXhpc0JvdHRvbSh4KVxuXHRcdFx0XHRcdFx0LnRpY2tWYWx1ZXMoXG5cdFx0XHRcdFx0XHRcdGQzXG5cdFx0XHRcdFx0XHRcdFx0LnRpY2tzKC4uLmQzLmV4dGVudCh4LmRvbWFpbigpKSwgd2lkdGggLyA0MClcblx0XHRcdFx0XHRcdFx0XHQuZmlsdGVyKCh2KSA9PiB4KHYpICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQudGlja1NpemVPdXRlcigwKVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRjb25zdCB5MUF4aXMgPSAoZykgPT5cblx0XHRcdFx0Z1xuXHRcdFx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LDApYClcblx0XHRcdFx0XHQuc3R5bGUoJ2NvbG9yJywgJ3N0ZWVsYmx1ZScpXG5cdFx0XHRcdFx0LmNhbGwoZDMuYXhpc0xlZnQoeTEpLnRpY2tzKG51bGwsICdzJykpXG5cdFx0XHRcdFx0LmNhbGwoKGcpID0+IGcuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCkpXG5cdFx0XHRcdFx0LmNhbGwoKGcpID0+XG5cdFx0XHRcdFx0XHRnXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigneCcsIC1tYXJnaW4ubGVmdClcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3knLCAxMClcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZpbGwnLCAnY3VycmVudENvbG9yJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jylcblx0XHRcdFx0XHRcdFx0LnRleHQoZGF0YS55MSlcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRzdmcuc2VsZWN0KCcueC1heGlzJykuY2FsbCh4QXhpcyk7XG5cdFx0XHRzdmcuc2VsZWN0KCcueS1heGlzJykuY2FsbCh5MUF4aXMpO1xuXG5cdFx0XHRzdmdcblx0XHRcdFx0LnNlbGVjdCgnLnBsb3QtYXJlYScpXG5cdFx0XHRcdC5hdHRyKCdmaWxsJywgJ3N0ZWVsYmx1ZScpXG5cdFx0XHRcdC5zZWxlY3RBbGwoJy5iYXInKVxuXHRcdFx0XHQuZGF0YShkYXRhKVxuXHRcdFx0XHQuam9pbigncmVjdCcpXG5cdFx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXInKVxuXHRcdFx0XHQuYXR0cigneCcsIChkKSA9PiB4KGQueCkpXG5cdFx0XHRcdC5hdHRyKCd3aWR0aCcsIHguYmFuZHdpZHRoKCkpXG5cdFx0XHRcdC5hdHRyKCd5JywgKGQpID0+IHkxKGQueSkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIChkKSA9PiB5MSgwKSAtIHkxKGQueSkpO1xuICAgICAgICAgICAgICAgIFxuXHRcdH0sXG5cdFx0W2RhdGEubGVuZ3RoXVxuXHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblx0XHQ8c3ZnXG5cdFx0XHRyZWY9e3JlZn1cblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGhlaWdodDogNTAwLFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRtYXJnaW5SaWdodDogJzBweCcsXG5cdFx0XHRcdG1hcmdpbkxlZnQ6ICcwcHgnLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8ZyBjbGFzc05hbWU9XCJwbG90LWFyZWFcIi8+XG5cdFx0XHQ8ZyBjbGFzc05hbWU9XCJ4LWF4aXNcIiAvPlxuXHRcdFx0PGcgY2xhc3NOYW1lPVwieS1heGlzXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxzdmcgaGVpZ2h0PXswfSB3aWR0aD17MH0+XG5cdFx0XHRcdFx0PEdyYWRpZW50RGVmcz5cblx0XHRcdFx0XHRcdDxwYXR0ZXJuXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RyaXBlc1wiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiNFwiXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjRcIlxuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNIDAsIDAgbCA1LCA1XCIgc3Ryb2tlPVwiIzQ1YWViMVwiIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIiAvPlxuXHRcdFx0XHRcdFx0PC9wYXR0ZXJuPlxuXHRcdFx0XHRcdFx0PHBhdHRlcm5cblx0XHRcdFx0XHRcdFx0aWQ9XCJjaXJjbGVzXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIzXCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiM1wiXG5cdFx0XHRcdFx0XHRcdHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjAuOFwiIGZpbGw9XCJtYWdlbnRhXCIgLz5cblx0XHRcdFx0XHRcdDwvcGF0dGVybj5cblx0XHRcdFx0XHQ8L0dyYWRpZW50RGVmcz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdDxEaXNjcmV0ZUNvbG9yTGVnZW5kXG5cdFx0XHRcdFx0b3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcblx0XHRcdFx0XHR3aWR0aD17MzAwfVxuXHRcdFx0XHRcdGl0ZW1zPXtbeyB0aXRsZTogJ1NhbGVzJywgY29sb3I6ICd1cmwoI3N0cmlwZXMpJywgc3Ryb2tlV2lkdGg6IDEwMDAwIH1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BarChart.tsx\n");

/***/ })

})