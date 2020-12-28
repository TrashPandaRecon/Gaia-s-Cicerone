webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/BarChart.tsx":
/*!*************************************!*\
  !*** ./src/components/BarChart.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _hooks_useD3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useD3 */ \"./src/components/hooks/useD3.tsx\");\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-vis */ \"./node_modules/react-vis/es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/BarChart.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction BarChart(_ref) {\n  _s();\n\n  var data = _ref.data;\n  var ref = Object(_hooks_useD3__WEBPACK_IMPORTED_MODULE_4__[\"useD3\"])(function (svg) {\n    var height = 500;\n    var width = 1000;\n    var margin = {\n      top: 20,\n      right: 30,\n      bottom: 30,\n      left: 40\n    };\n    var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleBand\"]().domain(data.map(function (d) {\n      return d.x;\n    })).rangeRound([margin.left, width - margin.right]).padding(0.1);\n    var y1 = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](data, function (d) {\n      return d.y;\n    })]).rangeRound([height - margin.bottom, margin.top]);\n\n    var xAxis = function xAxis(g) {\n      return g.attr('transform', \"translate(0,\".concat(height - margin.bottom, \")\")).call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](x).tickValues(d3__WEBPACK_IMPORTED_MODULE_3__[\"ticks\"].apply(d3__WEBPACK_IMPORTED_MODULE_3__, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](x.domain())).concat([width / 40])).filter(function (v) {\n        return x(v) !== undefined;\n      })).tickSizeOuter(0));\n    };\n\n    var y1Axis = function y1Axis(g) {\n      return g.attr('transform', \"translate(\".concat(margin.left, \",0)\")).style('color', 'steelblue').call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"](y1).ticks(null, 's')).call(function (g) {\n        return g.select('.domain').remove();\n      }).call(function (g) {\n        return g.append('text').attr('x', -margin.left).attr('y', 10).attr('fill', 'currentColor').attr('text-anchor', 'start').text(data.y1);\n      });\n    };\n\n    svg.select('.x-axis').call(xAxis);\n    svg.select('.y-axis').call(y1Axis);\n    svg.select('.plot-area').attr('fill', 'steelblue').selectAll('.bar').data(data).join('rect').attr('class', 'bar').attr('x', function (d) {\n      return x(d.x);\n    }).attr('width', x.bandwidth()).attr('y', function (d) {\n      return y1(d.y);\n    }).attr('height', function (d) {\n      return y1(0) - y1(d.y);\n    });\n  }, [data.length]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n      ref: ref,\n      style: {\n        height: 500,\n        width: '100%',\n        marginRight: '0px',\n        marginLeft: '0px'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"plot-area\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"x-axis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"g\", {\n        className: \"y-axis\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 3\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n      height: 0,\n      width: 0,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_5__[\"GradientDefs\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pattern\", {\n          id: \"stripes\",\n          width: \"4\",\n          height: \"4\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n            d: \"M 0, 0 l 5, 5\",\n            stroke: \"#45aeb1\",\n            strokeLinecap: \"square\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"pattern\", {\n          id: \"circles\",\n          width: \"3\",\n          height: \"3\",\n          patternUnits: \"userSpaceOnUse\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"circle\", {\n            cx: \"1.5\",\n            cy: \"1.5\",\n            r: \"0.8\",\n            fill: \"magenta\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_vis__WEBPACK_IMPORTED_MODULE_5__[\"DiscreteColorLegend\"], {\n      orientation: \"horizontal\",\n      width: 300,\n      items: [{\n        title: 'Sales',\n        color: 'url(#stripes)',\n        strokeWidth: 10000\n      }]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n\n_s(BarChart, \"r127xTdrGuIqcYXTmMbvPxoKAyo=\", false, function () {\n  return [_hooks_useD3__WEBPACK_IMPORTED_MODULE_4__[\"useD3\"]];\n});\n\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"BarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyQ2hhcnQudHN4P2QxZTMiXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJkYXRhIiwicmVmIiwidXNlRDMiLCJzdmciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIngiLCJkMyIsImRvbWFpbiIsIm1hcCIsImQiLCJyYW5nZVJvdW5kIiwicGFkZGluZyIsInkxIiwieSIsInhBeGlzIiwiZyIsImF0dHIiLCJjYWxsIiwidGlja1ZhbHVlcyIsImZpbHRlciIsInYiLCJ1bmRlZmluZWQiLCJ0aWNrU2l6ZU91dGVyIiwieTFBeGlzIiwic3R5bGUiLCJ0aWNrcyIsInNlbGVjdCIsInJlbW92ZSIsImFwcGVuZCIsInRleHQiLCJzZWxlY3RBbGwiLCJqb2luIiwiYmFuZHdpZHRoIiwibGVuZ3RoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidGl0bGUiLCJjb2xvciIsInN0cm9rZVdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMzQixNQUFNQyxHQUFHLEdBQUdDLDBEQUFLLENBQ2hCLFVBQUNDLEdBQUQsRUFBUztBQUNSLFFBQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxRQUFNQyxNQUFNLEdBQUc7QUFBRUMsU0FBRyxFQUFFLEVBQVA7QUFBV0MsV0FBSyxFQUFFLEVBQWxCO0FBQXNCQyxZQUFNLEVBQUUsRUFBOUI7QUFBa0NDLFVBQUksRUFBRTtBQUF4QyxLQUFmO0FBRUEsUUFBTUMsQ0FBQyxHQUFHQyw0Q0FBQSxHQUVSQyxNQUZRLENBRURiLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNKLENB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TSxFQUFDLEdBSFI7QUFJQyxzQkFBWSxFQUFDLGdCQUpkO0FBQUEsaUNBTUM7QUFBUSxjQUFFLEVBQUMsS0FBWDtBQUFpQixjQUFFLEVBQUMsS0FBcEI7QUFBMEIsYUFBQyxFQUFDLEtBQTVCO0FBQWtDLGdCQUFJLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRBLGVBa0NKLHFFQUFDLDZEQUFEO0FBQ0MsaUJBQVcsRUFBQyxZQURiO0FBRUMsV0FBSyxFQUFFLEdBRlI7QUFHQyxXQUFLLEVBQUUsQ0FBQztBQUFFQyxhQUFLLEVBQUUsT0FBVDtBQUFrQkMsYUFBSyxFQUFFLGVBQXpCO0FBQTBDQyxtQkFBVyxFQUFFO0FBQXZELE9BQUQ7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENJO0FBQUEsa0JBREo7QUEwQ0g7O0dBM0dRN0MsUTtVQUNJRyxrRDs7O0tBREpILFE7QUE2R01BLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQmFyQ2hhcnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHt1c2VEM30gZnJvbSAnLi9ob29rcy91c2VEMyc7XG5pbXBvcnQge0dyYWRpZW50RGVmcyxEaXNjcmV0ZUNvbG9yTGVnZW5kfSBmcm9tICdyZWFjdC12aXMnO1xuXG5mdW5jdGlvbiBCYXJDaGFydCh7IGRhdGEgfSkge1xuXHRjb25zdCByZWYgPSB1c2VEMyhcblx0XHQoc3ZnKSA9PiB7XG5cdFx0XHRjb25zdCBoZWlnaHQgPSA1MDA7XG5cdFx0XHRjb25zdCB3aWR0aCA9IDEwMDA7XG5cdFx0XHRjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAzMCwgYm90dG9tOiAzMCwgbGVmdDogNDAgfTtcblxuXHRcdFx0Y29uc3QgeCA9IGQzXG5cdFx0XHRcdC5zY2FsZUJhbmQoKVxuXHRcdFx0XHQuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLngpKVxuXHRcdFx0XHQucmFuZ2VSb3VuZChbbWFyZ2luLmxlZnQsIHdpZHRoIC0gbWFyZ2luLnJpZ2h0XSlcblx0XHRcdFx0LnBhZGRpbmcoMC4xKTtcblxuXHRcdFx0Y29uc3QgeTEgPSBkM1xuXHRcdFx0XHQuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHQuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQueSldKVxuXHRcdFx0XHQucmFuZ2VSb3VuZChbaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pO1xuXG5cdFx0XHRjb25zdCB4QXhpcyA9IChnKSA9PlxuXHRcdFx0XHRnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodCAtIG1hcmdpbi5ib3R0b219KWApLmNhbGwoXG5cdFx0XHRcdFx0ZDNcblx0XHRcdFx0XHRcdC5heGlzQm90dG9tKHgpXG5cdFx0XHRcdFx0XHQudGlja1ZhbHVlcyhcblx0XHRcdFx0XHRcdFx0ZDNcblx0XHRcdFx0XHRcdFx0XHQudGlja3MoLi4uZDMuZXh0ZW50KHguZG9tYWluKCkpLCB3aWR0aCAvIDQwKVxuXHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKHYpID0+IHgodikgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdC50aWNrU2l6ZU91dGVyKDApXG5cdFx0XHRcdCk7XG5cblx0XHRcdGNvbnN0IHkxQXhpcyA9IChnKSA9PlxuXHRcdFx0XHRnXG5cdFx0XHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sMClgKVxuXHRcdFx0XHRcdC5zdHlsZSgnY29sb3InLCAnc3RlZWxibHVlJylcblx0XHRcdFx0XHQuY2FsbChkMy5heGlzTGVmdCh5MSkudGlja3MobnVsbCwgJ3MnKSlcblx0XHRcdFx0XHQuY2FsbCgoZykgPT4gZy5zZWxlY3QoJy5kb21haW4nKS5yZW1vdmUoKSlcblx0XHRcdFx0XHQuY2FsbCgoZykgPT5cblx0XHRcdFx0XHRcdGdcblx0XHRcdFx0XHRcdFx0LmFwcGVuZCgndGV4dCcpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd4JywgLW1hcmdpbi5sZWZ0KVxuXHRcdFx0XHRcdFx0XHQuYXR0cigneScsIDEwKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignZmlsbCcsICdjdXJyZW50Q29sb3InKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuXHRcdFx0XHRcdFx0XHQudGV4dChkYXRhLnkxKVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdHN2Zy5zZWxlY3QoJy54LWF4aXMnKS5jYWxsKHhBeGlzKTtcblx0XHRcdHN2Zy5zZWxlY3QoJy55LWF4aXMnKS5jYWxsKHkxQXhpcyk7XG5cblx0XHRcdHN2Z1xuXHRcdFx0XHQuc2VsZWN0KCcucGxvdC1hcmVhJylcblx0XHRcdFx0LmF0dHIoJ2ZpbGwnLCAnc3RlZWxibHVlJylcblx0XHRcdFx0LnNlbGVjdEFsbCgnLmJhcicpXG5cdFx0XHRcdC5kYXRhKGRhdGEpXG5cdFx0XHRcdC5qb2luKCdyZWN0Jylcblx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2JhcicpXG5cdFx0XHRcdC5hdHRyKCd4JywgKGQpID0+IHgoZC54KSlcblx0XHRcdFx0LmF0dHIoJ3dpZHRoJywgeC5iYW5kd2lkdGgoKSlcblx0XHRcdFx0LmF0dHIoJ3knLCAoZCkgPT4geTEoZC55KSlcbiAgICAgICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgKGQpID0+IHkxKDApIC0geTEoZC55KSk7XG4gICAgICAgICAgICAgICAgXG5cdFx0fSxcblx0XHRbZGF0YS5sZW5ndGhdXG5cdCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXHRcdDxzdmdcblx0XHRcdHJlZj17cmVmfVxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0aGVpZ2h0OiA1MDAsXG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdG1hcmdpblJpZ2h0OiAnMHB4Jyxcblx0XHRcdFx0bWFyZ2luTGVmdDogJzBweCcsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxnIGNsYXNzTmFtZT1cInBsb3QtYXJlYVwiLz5cblx0XHRcdDxnIGNsYXNzTmFtZT1cIngtYXhpc1wiIC8+XG5cdFx0XHQ8ZyBjbGFzc05hbWU9XCJ5LWF4aXNcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHN2ZyBoZWlnaHQ9ezB9IHdpZHRoPXswfT5cblx0XHRcdFx0XHQ8R3JhZGllbnREZWZzPlxuXHRcdFx0XHRcdFx0PHBhdHRlcm5cblx0XHRcdFx0XHRcdFx0aWQ9XCJzdHJpcGVzXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCI0XCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiNFwiXG5cdFx0XHRcdFx0XHRcdHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHBhdGggZD1cIk0gMCwgMCBsIDUsIDVcIiBzdHJva2U9XCIjNDVhZWIxXCIgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiIC8+XG5cdFx0XHRcdFx0XHQ8L3BhdHRlcm4+XG5cdFx0XHRcdFx0XHQ8cGF0dGVyblxuXHRcdFx0XHRcdFx0XHRpZD1cImNpcmNsZXNcIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjNcIlxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIzXCJcblx0XHRcdFx0XHRcdFx0cGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMC44XCIgZmlsbD1cIm1hZ2VudGFcIiAvPlxuXHRcdFx0XHRcdFx0PC9wYXR0ZXJuPlxuXHRcdFx0XHRcdDwvR3JhZGllbnREZWZzPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0PERpc2NyZXRlQ29sb3JMZWdlbmRcblx0XHRcdFx0XHRvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuXHRcdFx0XHRcdHdpZHRoPXszMDB9XG5cdFx0XHRcdFx0aXRlbXM9e1t7IHRpdGxlOiAnU2FsZXMnLCBjb2xvcjogJ3VybCgjc3RyaXBlcyknLCBzdHJva2VXaWR0aDogMTAwMDAgfV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BarChart.tsx\n");

/***/ })

})