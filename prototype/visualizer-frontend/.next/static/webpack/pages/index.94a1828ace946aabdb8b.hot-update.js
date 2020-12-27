webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SocialNodeGraph.tsx":
/*!********************************************!*\
  !*** ./src/components/SocialNodeGraph.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/build/d3-scale.js\");\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis-force */ \"./node_modules/react-vis-force/dist/react-vis-force.js\");\n/* harmony import */ var react_vis_force__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_vis_force__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/will/Desktop/dev/SDE/prototype/visualizer-frontend/src/components/SocialNodeGraph.tsx\";\n\n\n\n // data structure definitions for NodeGraph component\n\nfunction SocialNodeGraph(_ref) {\n  var _this = this;\n\n  var nodeGraphData = _ref.nodeGraphData;\n  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__[\"scaleCategory20\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_4__[\"InteractiveForceGraph\"], {\n    animation: \"wobbly\",\n    simulationOptions: {\n      height: 500,\n      width: 1000,\n      alpha: 1,\n      animate: true\n    },\n    labelAttr: \"income\",\n    onSelectNode: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 18\n    }, this),\n    highlightDependencies: true,\n    children: [nodeGraphData.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }, this) : nodeGraphData.nodes.map(function (node) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_4__[\"ForceGraphNode\"], {\n        node: {\n          id: node.id,\n          label: node.id,\n          income: node.income,\n          radius: Math.ceil(node.income / 1000 % 10)\n        },\n        fill: scale(Math.ceil(node.income / 1000 % 10))\n      }, node.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 25\n      }, _this);\n    }), nodeGraphData.nodes.length == 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : nodeGraphData.links.map(function (link) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_vis_force__WEBPACK_IMPORTED_MODULE_4__[\"ForceGraphLink\"], {\n        link: {\n          source: link.source,\n          target: link.target\n        },\n        fill: \"blue\"\n      }, link.source + link.target, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 6\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_c = SocialNodeGraph;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialNodeGraph);\n\nvar _c;\n\n$RefreshReg$(_c, \"SocialNodeGraph\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFsTm9kZUdyYXBoLnRzeD83YmNhIl0sIm5hbWVzIjpbIlNvY2lhbE5vZGVHcmFwaCIsIm5vZGVHcmFwaERhdGEiLCJzY2FsZSIsInNjYWxlQ2F0ZWdvcnkyMCIsImhlaWdodCIsIndpZHRoIiwiYWxwaGEiLCJhbmltYXRlIiwibm9kZXMiLCJsZW5ndGgiLCJtYXAiLCJub2RlIiwiaWQiLCJsYWJlbCIsImluY29tZSIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibGlua3MiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBTUE7O0FBY0EsU0FBU0EsZUFBVCxPQUlPO0FBQUE7O0FBQUEsTUFITkMsYUFHTSxRQUhOQSxhQUdNO0FBQ0gsTUFBTUMsS0FBSyxHQUFHQyxnRUFBZSxFQUE3QjtBQUNBLHNCQUVJLHFFQUFDLHFFQUFEO0FBQ0ksYUFBUyxFQUFDLFFBRGQ7QUFFTCxxQkFBaUIsRUFBRTtBQUFFQyxZQUFNLEVBQUUsR0FBVjtBQUFlQyxXQUFLLEVBQUUsSUFBdEI7QUFBNEJDLFdBQUssRUFBRSxDQUFuQztBQUFzQ0MsYUFBTyxFQUFFO0FBQS9DLEtBRmQ7QUFHTCxhQUFTLEVBQUMsUUFITDtBQUlMLGdCQUFZLGVBQUUscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpUO0FBS0wseUJBQXFCLE1BTGhCO0FBQUEsZUFPS04sYUFBYSxDQUFDTyxLQUFkLENBQW9CQyxNQUFwQixJQUE4QixDQUE5QixnQkFDRyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsR0FHT1IsYUFBYSxDQUFDTyxLQUFkLENBQW9CRSxHQUFwQixDQUF3QixVQUFDQyxJQUFEO0FBQUEsMEJBQ3BCLHFFQUFDLDhEQUFEO0FBRUksWUFBSSxFQUFFO0FBQUNDLFlBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFWO0FBQWNDLGVBQUssRUFBRUYsSUFBSSxDQUFDQyxFQUExQjtBQUE4QkUsZ0JBQU0sRUFBRUgsSUFBSSxDQUFDRyxNQUEzQztBQUFtREMsZ0JBQU0sRUFBRUMsSUFBSSxDQUFDQyxJQUFMLENBQVdOLElBQUksQ0FBQ0csTUFBTCxHQUFjLElBQWYsR0FBdUIsRUFBakM7QUFBM0QsU0FGVjtBQUdJLFlBQUksRUFBRVosS0FBSyxDQUFDYyxJQUFJLENBQUNDLElBQUwsQ0FBV04sSUFBSSxDQUFDRyxNQUFMLEdBQVksSUFBYixHQUFxQixFQUEvQixDQUFEO0FBSGYsU0FDU0gsSUFBSSxDQUFDQyxFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0I7QUFBQSxLQUF4QixDQVZaLEVBbUJKWCxhQUFhLENBQUNPLEtBQWQsQ0FBb0JDLE1BQXBCLElBQThCLENBQTlCLGdCQUNBLHVKQURBLEdBR0FSLGFBQWEsQ0FBQ2lCLEtBQWQsQ0FBb0JSLEdBQXBCLENBQXdCLFVBQUNTLElBQUQ7QUFBQSwwQkFDdkIscUVBQUMsOERBQUQ7QUFFQyxZQUFJLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUQsSUFBSSxDQUFDQyxNQUFmO0FBQXVCQyxnQkFBTSxFQUFFRixJQUFJLENBQUNFO0FBQXBDLFNBRlA7QUFHQyxZQUFJLEVBQUM7QUFITixTQUNNRixJQUFJLENBQUNDLE1BQUwsR0FBY0QsSUFBSSxDQUFDRSxNQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHVCO0FBQUEsS0FBeEIsQ0F0Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFrQ0g7O0tBeENRckIsZTtBQXlDTUEsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxOb2RlR3JhcGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzY2FsZUNhdGVnb3J5MjAgfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge1xuXHRJbnRlcmFjdGl2ZUZvcmNlR3JhcGgsXG5cdEZvcmNlR3JhcGhOb2RlLFxuXHRGb3JjZUdyYXBoTGluayxcbn0gZnJvbSAncmVhY3QtdmlzLWZvcmNlJztcbi8vIGRhdGEgc3RydWN0dXJlIGRlZmluaXRpb25zIGZvciBOb2RlR3JhcGggY29tcG9uZW50XG5pbnRlcmZhY2UgbGlua3Mge1xuXHRzb3VyY2U6IHN0cmluZztcblx0dGFyZ2V0OiBzdHJpbmc7XG59XG5pbnRlcmZhY2Ugbm9kZXMge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgaW5jb21lOiBudW1iZXI7XG59XG5pbnRlcmZhY2Ugbm9kZUdyYXBoRGF0YVN0cnVjdCB7XG5cdG5vZGVzOiBub2Rlc1tdO1xuXHRsaW5rczogbGlua3NbXTtcbn1cblxuZnVuY3Rpb24gU29jaWFsTm9kZUdyYXBoKHtcblx0bm9kZUdyYXBoRGF0YSxcbn06IHtcblx0bm9kZUdyYXBoRGF0YTogbm9kZUdyYXBoRGF0YVN0cnVjdDtcbiAgICB9KSB7XG4gICAgY29uc3Qgc2NhbGUgPSBzY2FsZUNhdGVnb3J5MjAoKTtcbiAgICByZXR1cm4gKFxuICAgICAgIFxuICAgICAgICA8SW50ZXJhY3RpdmVGb3JjZUdyYXBoXG4gICAgICAgICAgICBhbmltYXRpb249XCJ3b2JibHlcIlxuXHRcdFx0c2ltdWxhdGlvbk9wdGlvbnM9e3sgaGVpZ2h0OiA1MDAsIHdpZHRoOiAxMDAwLCBhbHBoYTogMSwgYW5pbWF0ZTogdHJ1ZX19XG5cdFx0XHRsYWJlbEF0dHI9XCJpbmNvbWVcIlxuXHRcdFx0b25TZWxlY3ROb2RlPXs8QWxlcnQ+PC9BbGVydD59XG5cdFx0XHRoaWdobGlnaHREZXBlbmRlbmNpZXNcblx0XHQ+XG4gICAgICAgICAgICB7bm9kZUdyYXBoRGF0YS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgbm9kZUdyYXBoRGF0YS5ub2Rlcy5tYXAoKG5vZGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JjZUdyYXBoTm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm9kZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlPXt7aWQ6IG5vZGUuaWQsIGxhYmVsOiBub2RlLmlkLCBpbmNvbWU6IG5vZGUuaW5jb21lLCByYWRpdXM6IE1hdGguY2VpbCgobm9kZS5pbmNvbWUgLyAxMDAwKSAlIDEwKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17c2NhbGUoTWF0aC5jZWlsKChub2RlLmluY29tZS8xMDAwKSAlIDEwKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSlcblx0XHRcdCl9XG5cdFx0XHR7bm9kZUdyYXBoRGF0YS5ub2Rlcy5sZW5ndGggPT0gMCA/IChcblx0XHRcdFx0PD48Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdG5vZGVHcmFwaERhdGEubGlua3MubWFwKChsaW5rKSA9PiAoXG5cdFx0XHRcdFx0PEZvcmNlR3JhcGhMaW5rXG5cdFx0XHRcdFx0XHRrZXk9e2xpbmsuc291cmNlICsgbGluay50YXJnZXR9XG5cdFx0XHRcdFx0XHRsaW5rPXt7IHNvdXJjZTogbGluay5zb3VyY2UsIHRhcmdldDogbGluay50YXJnZXQgfX1cblx0XHRcdFx0XHRcdGZpbGw9XCJibHVlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpKVxuXHRcdFx0KX0gXG5cdFx0PC9JbnRlcmFjdGl2ZUZvcmNlR3JhcGg+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBTb2NpYWxOb2RlR3JhcGg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SocialNodeGraph.tsx\n");

/***/ })

})