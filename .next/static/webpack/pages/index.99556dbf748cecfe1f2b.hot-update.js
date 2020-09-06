webpackHotUpdate_N_E("pages/index",{

/***/ "./Framework/components/Sidebar.tsx":
/*!******************************************!*\
  !*** ./Framework/components/Sidebar.tsx ***!
  \******************************************/
/*! exports provided: Sidebar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sidebar\", function() { return Sidebar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/BEM */ \"./Framework/libs/BEM.ts\");\n/* harmony import */ var _codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codeunic/library-ui/build */ \"./node_modules/@codeunic/library-ui/build/index.js\");\n/* harmony import */ var _codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @routes */ \"./routes.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @settings */ \"./settings.tsx\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // @ts-ignore\n\n\n\n\nvar Sidebar = function Sidebar(props) {\n  var _props$projects = props.projects,\n      projects = _props$projects === void 0 ? [] : _props$projects;\n  var bm = new _libs_BEM__WEBPACK_IMPORTED_MODULE_1__[\"BEM\"](\"Sidebar\", {\n    \"open\": props.open\n  });\n  bm.Append(props.className);\n  return __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"SidebarComponent\"], {\n    style: props.style,\n    className: bm.toString()\n  }, __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"ScrollbarComponent\"], null, __jsx(\"section\", null, __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"TypographyComponent\"], {\n    component: \"h1\",\n    variant: \"body2\"\n  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n    route: \"/\"\n  }, __jsx(\"a\", null, __jsx(\"img\", {\n    src: \"https://i.pinimg.com/originals/b6/a8/aa/b6a8aa222d1c7867a60e2808d684b3fd.png\",\n    alt: \"AdminBro demo page\",\n    height: \"35px\"\n  }), __jsx(\"span\", null, _settings__WEBPACK_IMPORTED_MODULE_5__[\"setting\"].appName))))), __jsx(\"section\", null, __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"ListComponent\"], null, __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"SidebarMenuItemComponent\"], {\n    style: {\n      color: \"black\"\n    },\n    name: \"Navegación proyectos\"\n  }), projects.map(function (item) {\n    return __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"CollapseItemComponent\"], {\n      title: item.name,\n      icon: \"user\",\n      key: item.id\n    }, __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"ListComponent\"], {\n      component: \"ul\",\n      style: {\n        paddingLeft: 37\n      }\n    }, item.tables.map(function (item) {\n      return __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"ListItemComponent\"], {\n        key: item.id,\n        component: \"li\"\n      }, item.name);\n    })));\n  }), __jsx(_codeunic_library_ui_build__WEBPACK_IMPORTED_MODULE_2__[\"SidebarMenuItemComponent\"], {\n    style: {\n      color: \"black\"\n    },\n    name: \"Paginas\"\n  })))));\n};\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(function (_ref) {\n  var global = _ref.global,\n      project = _ref.project;\n  return {\n    open: global.sidebar,\n    projects: project.projects\n  };\n})(Sidebar));\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRnJhbWV3b3JrL2NvbXBvbmVudHMvU2lkZWJhci50c3g/OGNlMiJdLCJuYW1lcyI6WyJTaWRlYmFyIiwicHJvcHMiLCJwcm9qZWN0cyIsImJtIiwiQkVNIiwib3BlbiIsIkFwcGVuZCIsImNsYXNzTmFtZSIsInN0eWxlIiwidG9TdHJpbmciLCJzZXR0aW5nIiwiYXBwTmFtZSIsImNvbG9yIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJpZCIsInBhZGRpbmdMZWZ0IiwidGFibGVzIiwiY29ubmVjdCIsImdsb2JhbCIsInByb2plY3QiLCJzaWRlYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0NBVUE7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQjtBQUFBLHdCQUNyQkEsS0FEcUIsQ0FDdENDLFFBRHNDO0FBQUEsTUFDdENBLFFBRHNDLGdDQUMzQixFQUQyQjtBQUU3QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsNkNBQUosQ0FBUSxTQUFSLEVBQW1CO0FBQzFCLFlBQVFILEtBQUssQ0FBQ0k7QUFEWSxHQUFuQixDQUFYO0FBR0FGLElBQUUsQ0FBQ0csTUFBSCxDQUFVTCxLQUFLLENBQUNNLFNBQWhCO0FBRUEsU0FDSSxNQUFDLDJFQUFEO0FBQWtCLFNBQUssRUFBRU4sS0FBSyxDQUFDTyxLQUEvQjtBQUFzQyxhQUFTLEVBQUVMLEVBQUUsQ0FBQ00sUUFBSDtBQUFqRCxLQUNJLE1BQUMsNkVBQUQsUUFDSSx1QkFDSSxNQUFDLDhFQUFEO0FBQXFCLGFBQVMsRUFBRSxJQUFoQztBQUFzQyxXQUFPLEVBQUU7QUFBL0MsS0FDSSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQWIsS0FDSSxpQkFDSTtBQUFLLE9BQUcsRUFBQyw4RUFBVDtBQUNLLE9BQUcsRUFBQyxvQkFEVDtBQUM4QixVQUFNLEVBQUM7QUFEckMsSUFESixFQUlJLG9CQUFPQyxpREFBTyxDQUFDQyxPQUFmLENBSkosQ0FESixDQURKLENBREosQ0FESixFQWFJLHVCQUNJLE1BQUMsd0VBQUQsUUFDSSxNQUFDLG1GQUFEO0FBQTBCLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUFqQztBQUFtRCxRQUFJLEVBQUU7QUFBekQsSUFESixFQUVLVixRQUFRLENBQUNXLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsV0FDVixNQUFDLGdGQUFEO0FBQ0ksV0FBSyxFQUFFQSxJQUFJLENBQUNDLElBRGhCO0FBRUksVUFBSSxFQUFFLE1BRlY7QUFHSSxTQUFHLEVBQUVELElBQUksQ0FBQ0U7QUFIZCxPQUtJLE1BQUMsd0VBQUQ7QUFBZSxlQUFTLEVBQUUsSUFBMUI7QUFBZ0MsV0FBSyxFQUFFO0FBQUNDLG1CQUFXLEVBQUU7QUFBZDtBQUF2QyxPQUNLSCxJQUFJLENBQUNJLE1BQUwsQ0FBWUwsR0FBWixDQUFnQixVQUFBQyxJQUFJO0FBQUEsYUFDakIsTUFBQyw0RUFBRDtBQUFtQixXQUFHLEVBQUVBLElBQUksQ0FBQ0UsRUFBN0I7QUFBaUMsaUJBQVMsRUFBRTtBQUE1QyxTQUNLRixJQUFJLENBQUNDLElBRFYsQ0FEaUI7QUFBQSxLQUFwQixDQURMLENBTEosQ0FEVTtBQUFBLEdBQWIsQ0FGTCxFQWlCSSxNQUFDLG1GQUFEO0FBQTBCLFNBQUssRUFBRTtBQUFDSCxXQUFLLEVBQUU7QUFBUixLQUFqQztBQUFtRCxRQUFJLEVBQUU7QUFBekQsSUFqQkosQ0FESixDQWJKLENBREosQ0FESjtBQXVDSCxDQTlDTTtLQUFNWixPO0FBZ0RFbUIsMEhBQU8sQ0FBQztBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLE1BQVVDLE9BQVYsUUFBVUEsT0FBVjtBQUFBLFNBQTZCO0FBQ2hEaEIsUUFBSSxFQUFFZSxNQUFNLENBQUNFLE9BRG1DO0FBRWhEcEIsWUFBUSxFQUFFbUIsT0FBTyxDQUFDbkI7QUFGOEIsR0FBN0I7QUFBQSxDQUFELENBQVAsQ0FHWEYsT0FIVyxDQUFmIiwiZmlsZSI6Ii4vRnJhbWV3b3JrL2NvbXBvbmVudHMvU2lkZWJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUU2lkZWJhclByb3BzIH0gZnJvbSBcIkBwcm9wcy9UU2lkZWJhclByb3BzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCRU0gfSBmcm9tIFwiLi4vbGlicy9CRU1cIjtcbmltcG9ydCB7XG4gICAgU2Nyb2xsYmFyQ29tcG9uZW50LFxuICAgIFNpZGViYXJDb21wb25lbnQsXG4gICAgVHlwb2dyYXBoeUNvbXBvbmVudCxcbiAgICBMaXN0Q29tcG9uZW50LFxuICAgIExpc3RJdGVtQ29tcG9uZW50LFxuICAgIENvbGxhcHNlSXRlbUNvbXBvbmVudCxcbiAgICBTaWRlYmFyTWVudUl0ZW1Db21wb25lbnQsXG59IGZyb20gXCJAY29kZXVuaWMvbGlicmFyeS11aS9idWlsZFwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAcm91dGVzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXR0aW5nIH0gZnJvbSBcIkBzZXR0aW5nc1wiO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhciA9IChwcm9wczogVFNpZGViYXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwcm9qZWN0cyA9IFtdfSA9IHByb3BzO1xuICAgIGNvbnN0IGJtID0gbmV3IEJFTShcIlNpZGViYXJcIiwge1xuICAgICAgICBcIm9wZW5cIjogcHJvcHMub3BlbixcbiAgICB9KTtcbiAgICBibS5BcHBlbmQocHJvcHMuY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTaWRlYmFyQ29tcG9uZW50IHN0eWxlPXtwcm9wcy5zdHlsZX0gY2xhc3NOYW1lPXtibS50b1N0cmluZygpfT5cbiAgICAgICAgICAgIDxTY3JvbGxiYXJDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Q29tcG9uZW50IGNvbXBvbmVudD17XCJoMVwifSB2YXJpYW50PXtcImJvZHkyXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e1wiL1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYjYvYTgvYWEvYjZhOGFhMjIyZDFjNzg2N2E2MGUyODA4ZDY4NGIzZmQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBZG1pbkJybyBkZW1vIHBhZ2VcIiBoZWlnaHQ9XCIzNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NldHRpbmcuYXBwTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdENvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTWVudUl0ZW1Db21wb25lbnQgc3R5bGU9e3tjb2xvcjogXCJibGFja1wifX0gbmFtZT17XCJOYXZlZ2FjacOzbiBwcm95ZWN0b3NcIn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZUl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17XCJ1c2VyXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Q29tcG9uZW50IGNvbXBvbmVudD17XCJ1bFwifSBzdHlsZT17e3BhZGRpbmdMZWZ0OiAzN319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGFibGVzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQga2V5PXtpdGVtLmlkfSBjb21wb25lbnQ9e1wibGlcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZUl0ZW1Db21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyTWVudUl0ZW1Db21wb25lbnQgc3R5bGU9e3tjb2xvcjogXCJibGFja1wifX0gbmFtZT17XCJQYWdpbmFzXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Q29tcG9uZW50PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvU2Nyb2xsYmFyQ29tcG9uZW50PlxuICAgICAgICA8L1NpZGViYXJDb21wb25lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCh7Z2xvYmFsLCBwcm9qZWN0fTogYW55KSA9PiAoe1xuICAgIG9wZW46IGdsb2JhbC5zaWRlYmFyLFxuICAgIHByb2plY3RzOiBwcm9qZWN0LnByb2plY3RzLFxufSkpKFNpZGViYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Framework/components/Sidebar.tsx\n");

/***/ })

})