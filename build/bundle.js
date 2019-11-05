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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  /** Mobile menu toggle **/

  $('.mobile-menu-toggle').on('click', function () {
    if ($(this).hasClass('return')) {
      $(this).removeClass('return');
      $('.mainmenu .submenu').removeClass('show');
    } else {
      $(this).toggleClass('active');
      $('.navbar .mainmenu').toggleClass('show');
    }
  });

  $('.mainmenu .has-submenu').on('click', function (e) {
    if ($(window).width() < 768) {
      e.preventDefault();
      $('.mobile-menu-toggle').addClass('return');
      $(this).next('.submenu').addClass('show');
    }
  });

  /** Mobile menu toggle end **/
})(jQuery);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  /** Custom slider **/

  $('.custom-slider').each(function () {

    var slider = $(this);
    var ticker = slider.find('.ticker');
    var item = slider.find('.item');
    var itemWidth = item.outerWidth();
    var itemLength = item.length;

    var step = 0;

    slider.find('.nav').on('click', function () {
      var width = $(window).width();

      /** Display blocks count **/
      var display = 3;
      if (width < 769) {
        display = 1;
      } else if (width > 769 && width < 1151) {
        display = 2;
      } else {
        display = 3;
      }

      /** Calculate left displacement **/
      var left = void 0;
      if ($(this).hasClass('left')) {
        if (step === 0) {
          left = '-' + itemWidth * (itemLength - display);
          step = itemLength - display;
        } else {
          left = '+=' + itemWidth;
          step--;
        }
      } else {
        step++;
        if (step === itemLength - (display - 1)) {
          left = 0;
          step = 0;
        } else {
          left = '-=' + itemWidth;
        }
      }

      ticker.animate({ left: left });
    });
  });

  /** Custom slider end **/
})(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  /** Custom tabs **/
  $('.custom-tabs .nav-item').on('click', function (_ref) {
    var currentTarget = _ref.currentTarget;

    var item = $(currentTarget);
    if (!item.hasClass('active')) {
      var tabs = item.closest('.custom-tabs');
      tabs.find('.nav-item').removeClass('active');
      item.addClass('active');
      tabs.find('.tabs-content-item').hide();
      tabs.find('.tabs-content-item:eq(' + item.index() + ')').fadeIn('slow');
    }
  });

  /** Custom tabs end **/
})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  /** Custom parallax **/

  $('.parallax-bg').length && $('.parallax-bg').each(function () {

    var section = $(this);
    var parallax = $(this).find('.parallax');
    var translateY = 0;

    $(window).on("load resize scroll", function (e) {

      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = parallax.offset().top;
      var elemBottom = elemTop + parallax.outerHeight();

      var isOnScreen = elemTop <= docViewBottom && docViewTop <= elemBottom;

      var clearance = parallax.outerHeight() - section.outerHeight();
      var coefficient = (elemBottom - elemTop + $(window).height()) / clearance;

      isOnScreen ? translateY = Math.round((docViewBottom - elemTop) / coefficient) : translateY;

      parallax.css({
        'transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + translateY + ',0,1)',
        '-webkit-transform': 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + translateY + ',0,1)'
      });
    });
  });

  /** Custom parallax end **/
})(jQuery);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map