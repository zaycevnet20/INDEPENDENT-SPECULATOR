"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faq",{

/***/ "./components/faq/faq-questions/faq-questions.tsx":
/*!********************************************************!*\
  !*** ./components/faq/faq-questions/faq-questions.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FaqQuestions\": function() { return /* binding */ FaqQuestions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faq_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq.module.css */ \"./components/faq/faq-questions/faq.module.css\");\n/* harmony import */ var _faq_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_faq_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/plus.svg */ \"./public/plus.svg\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"./components/faq/faq-questions/types.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FaqQuestions = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_types__WEBPACK_IMPORTED_MODULE_3__.data), item1 = ref[0], setItem = ref[1];\n    var toggleDesc = function(item, id) {\n        if (item.id === id) {\n            setItem(function(prev) {\n                return _toConsumableArray(prev).concat([\n                    {\n                        isActive: !prev[id].isActive\n                    }\n                ]);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: \"Got Questions?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default()[\"wrap-desc\"]),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().desc),\n                        children: \"We\\u2019re here to help. If you don\\u2019t see your question addressed below, please use the form at the bottom of the page to contact us.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                item1 === null || item1 === void 0 ? void 0 : item1.map(function(el, id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return toggleDesc(el, id);\n                        },\n                        className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().info),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                                        children: el.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        src: _public_plus_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                        alt: \"Select\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, _this1),\n                            item1[item1.length - 1].id !== id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_faq_module_css__WEBPACK_IMPORTED_MODULE_5___default().line)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 49\n                            }, _this1)\n                        ]\n                    }, el.id, true, {\n                        fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Evgeniy\\\\Downloads\\\\f_159635ad1fd257be\\\\anim\\\\fix-animation\\\\components\\\\faq\\\\faq-questions\\\\faq-questions.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(FaqQuestions, \"wuvWnGDG1cZpF3THbsQMJHztE6w=\");\n_c = FaqQuestions;\nvar _c;\n$RefreshReg$(_c, \"FaqQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZhcS9mYXEtcXVlc3Rpb25zL2ZhcS1xdWVzdGlvbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNOO0FBQ1k7QUFDSztBQUNwQjs7QUFFdkIsSUFBTU0sWUFBWSxHQUFHLFdBQU07OztJQUNoQyxJQUF3QkwsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDRyx3Q0FBSSxDQUFDLEVBUHhDLEtBT2EsR0FBYUgsR0FBYyxHQUEzQixFQVBiLE9BT3NCLEdBQUlBLEdBQWMsR0FBbEI7SUFDcEIsSUFBTVEsVUFBVSxHQUFHLFNBQUNGLElBQXdCLEVBQUVHLEVBQVUsRUFBSztRQUMzRCxJQUFJSCxJQUFJLENBQUNHLEVBQUUsS0FBS0EsRUFBRSxFQUFFO1lBQ2xCRixPQUFPLENBQUNHLFNBQUFBLElBQUk7dUJBQUksbUJBQUlBLElBQUksQ0FBSkEsUUFBSjtvQkFBVTt3QkFBRUMsUUFBUSxFQUFFLENBQUNELElBQUksQ0FBQ0QsRUFBRSxDQUFDLENBQUNFLFFBQVE7cUJBQUU7aUJBQUM7YUFBQSxDQUFDO1NBQzdEO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztrQkFDeEIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFFWixnRUFBVTs7OEJBQ3hCLDhEQUFDYyxJQUFFO29CQUFDRixTQUFTLEVBQUVaLDhEQUFROzhCQUFFLGdCQUFjOzs7Ozt5QkFBSzs4QkFDNUMsOERBQUNXLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVoscUVBQWU7OEJBQzdCLDRFQUFDZ0IsR0FBQzt3QkFBQ0osU0FBUyxFQUFFWiw2REFBTztrQ0FBRSw0SUFDdUM7Ozs7OzZCQUFJOzs7Ozt5QkFDOUQ7Z0JBRUxLLEtBQUksYUFBSkEsS0FBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsS0FBSSxDQUFFYSxHQUFHLENBQUMsU0FBQ0MsRUFBRSxFQUFFWCxFQUFFO3lDQUNoQiw4REFBQ0csS0FBRzt3QkFBYVMsT0FBTyxFQUFFO21DQUFNYixVQUFVLENBQUNZLEVBQUUsRUFBRVgsRUFBRSxDQUFDO3lCQUFBO3dCQUFFSSxTQUFTLEVBQUVaLDhEQUFROzswQ0FDckUsOERBQUNXLEtBQUc7Z0NBQUNDLFNBQVMsRUFBRVosNkRBQU87O2tEQUNyQiw4REFBQ2dCLEdBQUM7d0NBQUNKLFNBQVMsRUFBRVosNkRBQU87a0RBQUdtQixFQUFFLENBQUNKLEtBQUs7Ozs7OzhDQUFLO2tEQUNyQyw4REFBQ1osbURBQUs7d0NBQUNxQixHQUFHLEVBQUV2Qix3REFBTTt3Q0FBRXdCLEdBQUcsRUFBQyxRQUFROzs7Ozs4Q0FBRzs7Ozs7O3NDQUMvQjs0QkFDTHBCLEtBQUksQ0FBQ0EsS0FBSSxDQUFDcUIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDbEIsRUFBRSxLQUFLQSxFQUFFLGtCQUFJLDhEQUFDRyxLQUFHO2dDQUFDQyxTQUFTLEVBQUVaLDZEQUFPOzs7OztzQ0FBUTs7dUJBTDNEbUIsRUFBRSxDQUFDWCxFQUFFOzs7OzhCQU1UO2lCQUNQLENBQUM7Ozs7OztpQkFDRTs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0E3QllKLFlBQVk7QUFBWkEsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ZhcS9mYXEtcXVlc3Rpb25zL2ZhcS1xdWVzdGlvbnMudHN4PzUzNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjbCBmcm9tICcuL2ZhcS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgc2VsZWN0IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9wbHVzLnN2ZydcclxuaW1wb3J0IHsgZGF0YSwgVHlwZXNTZWxlY3RlZEl0ZW1zIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5leHBvcnQgY29uc3QgRmFxUXVlc3Rpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKGRhdGEpXHJcbiAgY29uc3QgdG9nZ2xlRGVzYyA9IChpdGVtOiBUeXBlc1NlbGVjdGVkSXRlbXMsIGlkOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICBzZXRJdGVtKHByZXYgPT4gWy4uLnByZXYsIHsgaXNBY3RpdmU6ICFwcmV2W2lkXS5pc0FjdGl2ZSB9XSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsLndyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2NsLnRpdGxlfT5Hb3QgUXVlc3Rpb25zPzwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsWyd3cmFwLWRlc2MnXX0+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsLmRlc2N9Pldl4oCZcmUgaGVyZSB0byBoZWxwLiBJZiB5b3UgZG9u4oCZdCBzZWUgeW91ciBxdWVzdGlvbiBhZGRyZXNzZWQgYmVsb3csXHJcbiAgICAgICAgICAgIHBsZWFzZSB1c2UgdGhlIGZvcm0gYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSB0byBjb250YWN0IHVzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2l0ZW0/Lm1hcCgoZWwsIGlkKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17ZWwuaWR9IG9uQ2xpY2s9eygpID0+IHRvZ2dsZURlc2MoZWwsIGlkKX0gY2xhc3NOYW1lPXtjbC5ibG9ja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbC5pbmZvfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsLnRleHR9PntlbC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VsZWN0fSBhbHQ9XCJTZWxlY3RcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2l0ZW1baXRlbS5sZW5ndGggLSAxXS5pZCAhPT0gaWQgJiYgPGRpdiBjbGFzc05hbWU9e2NsLmxpbmV9PjwvZGl2Pn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNsIiwic2VsZWN0IiwiZGF0YSIsIkltYWdlIiwiRmFxUXVlc3Rpb25zIiwiaXRlbSIsInNldEl0ZW0iLCJ0b2dnbGVEZXNjIiwiaWQiLCJwcmV2IiwiaXNBY3RpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaDIiLCJ0aXRsZSIsInAiLCJkZXNjIiwibWFwIiwiZWwiLCJvbkNsaWNrIiwiYmxvY2siLCJpbmZvIiwidGV4dCIsInNyYyIsImFsdCIsImxlbmd0aCIsImxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/faq/faq-questions/faq-questions.tsx\n");

/***/ })

});