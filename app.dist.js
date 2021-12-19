/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {

class Scroller{constructor(t){function e(t,e){return void 0===t?e:t}this.btnSelector=e(t.btnSelector,".scroll-to"),this.btnAttr=e(t.btnAttr,"data-scroll"),this.btnPreventDefault=e(t.btnPreventDefault,!0),this.offsetTop=e(t.offsetTop,0),this.navAutoOffset=e(t.navAutoOffset,!1),this.navSelector=e(t.navSelector,"nav")}returnNavHeight(t){let e=document.querySelector(t);if(e){return e.offsetHeight}return console.log(`Элемента с селектором "${t}" нет на этой странице. Отступ для навигации установлен по-умолчанию: 0px.`),0}init(){const t=document.querySelectorAll(this.btnSelector);if(t.length>0){let e=parseInt(this.offsetTop);Number.isNaN(e)&&(e=0),!0!==this.navAutoOffset&&"true"!==this.navAutoOffset||(e+=this.returnNavHeight(this.navSelector));const o=this.btnAttr,n=this.btnPreventDefault;for(let r of t)r.addEventListener("click",(function(t){!0!==n&&"true"!==n||t.preventDefault();let l=r.getAttribute(o),s=document.getElementById(l);if(s){let t=s.getBoundingClientRect().top-e;window.scrollBy({top:t,behavior:"smooth"})}else console.log(`Элемента с id="${l}" нет на этой странице.`)}))}}}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_scroller_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dist_scroller_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_scroller_min_js__WEBPACK_IMPORTED_MODULE_0__);


new (_dist_scroller_min_js__WEBPACK_IMPORTED_MODULE_0___default())({
  // Селектор для ссылок / кнопок - при клике на эти элементы будем выполнять скролл
  btnSelector: ".scroll-to",
  // Атрибут для ссылок кнопок, сюда записываем точку назначения
  btnAttr: "data-scroll",
  // Предотвращать поведение по-умолчанию для ссылок и кнопок
  btnPreventDefault: true,
  // Отступ в пикселях
  offsetTop: false,
  // Отступ для навигации
  navAutoOffset: true,
  // Селектор для навигации
  navSelector: ".nav",
}).init();

}();
/******/ })()
;