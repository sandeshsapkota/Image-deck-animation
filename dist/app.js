/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//========================================================================
//========================== VARIABLES ===================================
//========================================================================

var banner = document.querySelector('.banner');
var bannerImages = _toConsumableArray(document.querySelectorAll('.banner__img'));
var bannerImageText = _toConsumableArray(document.querySelectorAll('.banner__img-name p'));
var magnetCursor = document.querySelector('.scroll');
var currentImageIndex = bannerImages.length - 1;
var wheelIndex = 0;
var reverse = false;

//========================================================================
//========================== MAIN CONTENT ================================
//========================================================================

var throwImage = function throwImage() {
  var animationDuration = 600;
  if (reverse) {
    currentImageIndex = 0;
  } else {
    if (currentImageIndex < 0) currentImageIndex = bannerImages.length - 1;
  }

  // at initialization - this is the last img in the array
  var firedImage = bannerImages.splice(reverse ? 0 : bannerImages.length - 1, 1)[0]; // poping out last img
  bannerImages.length ? bannerImages.unshift(firedImage) : bannerImages.push(firedImage); // adding that image at the front

  handleTranslation(firedImage);
  console.log(firedImage);

  // changing the z-index of all images right after throwing
  setTimeout(function () {
    return handleZindex(bannerImages);
  }, animationDuration / 3);
  // removing the animate class
  // setTimeout(() => firedImage.classList.remove("animate"), (animationDuration * 84) / 100)
  // rotating the image at the time it stacks at the back
  setTimeout(function () {
    return handleTranslationBack(firedImage);
  }, 400);

  // preparing for the next throwing image - un rotating
  var lastImage = bannerImages[bannerImages.length - 1];
  lastImage.style.transform = reverse ? handleTranslationBack(lastImage) : "rotate(0) scale(1.01)";
  currentImageIndex = reverse ? currentImageIndex + 1 : currentImageIndex - 1;
};
var handleMagnetCursor = function handleMagnetCursor(e) {
  var x = e.x,
    y = e.y;
  magnetCursor.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
  var ifMagnetIsToHide = e.target.classList.contains('hide-magnet') ? 'add' : 'remove';
  handleClass(magnetCursor, 'fade-out', ifMagnetIsToHide);
  handleClass(magnetCursor, 'hide', 'remove');
};
banner.addEventListener('mousewheel', function (e) {
  var deltaY = e.deltaY;
  wheelIndex++;
  deltaY < 0 ? reverse = true : reverse = false;
  wheelIndex % 10 === 0 ? throwImage() : 0;
});
window.addEventListener('mousemove', handleMagnetCursor);

//========================================================================
//========================== UTILITIES ===================================
//========================================================================

var handleZindex = function handleZindex(arr) {
  reverse ? arr.reverse().forEach(function (item, i) {
    return item.style.zIndex = i;
  }) : arr.forEach(function (item, i) {
    return item.style.zIndex = i;
  });
};
var handleTranslationBack = function handleTranslationBack(img) {
  var randomDeg = Math.floor(Math.random() * 12) + -18;
  img.style.transition = '.2s linear';
  img.style.transform = reverse ? "translateX(0) rotate(0deg)" : "rotate(".concat(randomDeg, "deg)");
  img.classList.remove('img-size');
};
var handleTranslation = function handleTranslation(img) {
  img.style.transform = 'translateX(-500px) rotate(-16deg)';
  img.classList.add('img-size');
  img.style.transition = '.3s ease';
};
function handleClass(node, className) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'add';
  node.classList[type](className);
}

//========================================================================
//========================== INIT ========================================
//========================================================================

handleZindex(bannerImages);

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sandeshmac/projects/Image-deck-animation/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/sandeshmac/projects/Image-deck-animation/src/sass/app.scss */"./src/sass/app.scss");


/***/ })

/******/ });