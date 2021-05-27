(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/crypto_util.js":
/*!****************************!*\
  !*** ./src/crypto_util.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Encrypter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Encrypter = /*#__PURE__*/function () {
  function Encrypter() {
    _classCallCheck(this, Encrypter);
  }

  _createClass(Encrypter, [{
    key: "encrypt",
    value: function encrypt(salt, text) {
      var textToChars = function textToChars(text) {
        return text.split("").map(function (c) {
          return c.charCodeAt(0);
        });
      };

      var byteHex = function byteHex(n) {
        return ("0" + Number(n).toString(16)).substr(-2);
      };

      var applySaltToChar = function applySaltToChar(code) {
        return textToChars(salt).reduce(function (a, b) {
          return a ^ b;
        }, code);
      };

      return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
    }
  }, {
    key: "decrypt",
    value: function decrypt(salt, encoded) {
      var textToChars = function textToChars(text) {
        return text.split("").map(function (c) {
          return c.charCodeAt(0);
        });
      };

      var applySaltToChar = function applySaltToChar(code) {
        return textToChars(salt).reduce(function (a, b) {
          return a ^ b;
        }, code);
      };

      return encoded.match(/.{1,2}/g).map(function (hex) {
        return parseInt(hex, 16);
      }).map(applySaltToChar).map(function (charCode) {
        return String.fromCharCode(charCode);
      }).join("");
    }
  }]);

  return Encrypter;
}();



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/crypto_util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/crypto_util.js */"./src/crypto_util.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvX3V0aWwuanMiXSwibmFtZXMiOlsiRW5jcnlwdGVyIiwic2FsdCIsInRleHQiLCJ0ZXh0VG9DaGFycyIsInNwbGl0IiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJieXRlSGV4IiwibiIsIk51bWJlciIsInRvU3RyaW5nIiwic3Vic3RyIiwiYXBwbHlTYWx0VG9DaGFyIiwiY29kZSIsInJlZHVjZSIsImEiLCJiIiwiam9pbiIsImVuY29kZWQiLCJtYXRjaCIsImhleCIsInBhcnNlSW50IiwiY2hhckNvZGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqRnFCQSxTO0FBQ25CLHVCQUFjO0FBQUE7QUFDYjs7OztXQUVELGlCQUFRQyxJQUFSLEVBQWNDLElBQWQsRUFBb0I7QUFDbEIsVUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0UsS0FBTCxDQUFXLEVBQVgsRUFBZUMsR0FBZixDQUFtQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ0MsVUFBRixDQUFhLENBQWIsQ0FBUDtBQUFBLFNBQW5CLENBQVY7QUFBQSxPQUFwQjs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFEO0FBQUEsZUFBTyxDQUFDLE1BQU1DLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFOLENBQVVFLFFBQVYsQ0FBbUIsRUFBbkIsQ0FBUCxFQUErQkMsTUFBL0IsQ0FBc0MsQ0FBQyxDQUF2QyxDQUFQO0FBQUEsT0FBaEI7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFEO0FBQUEsZUFBVVgsV0FBVyxDQUFDRixJQUFELENBQVgsQ0FBa0JjLE1BQWxCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxTQUF6QixFQUEwQ0gsSUFBMUMsQ0FBVjtBQUFBLE9BQXhCOztBQUVBLGFBQU9aLElBQUksQ0FDUkUsS0FESSxDQUNFLEVBREYsRUFFSkMsR0FGSSxDQUVBRixXQUZBLEVBR0pFLEdBSEksQ0FHQVEsZUFIQSxFQUlKUixHQUpJLENBSUFHLE9BSkEsRUFLSlUsSUFMSSxDQUtDLEVBTEQsQ0FBUDtBQU1EOzs7V0FFRCxpQkFBUWpCLElBQVIsRUFBY2tCLE9BQWQsRUFBdUI7QUFDckIsVUFBTWhCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNELElBQUQ7QUFBQSxlQUFVQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxFQUFYLEVBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNDLFVBQUYsQ0FBYSxDQUFiLENBQVA7QUFBQSxTQUFuQixDQUFWO0FBQUEsT0FBcEI7O0FBQ0EsVUFBTU0sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFEO0FBQUEsZUFBVVgsV0FBVyxDQUFDRixJQUFELENBQVgsQ0FBa0JjLE1BQWxCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxTQUF6QixFQUEwQ0gsSUFBMUMsQ0FBVjtBQUFBLE9BQXhCOztBQUNBLGFBQU9LLE9BQU8sQ0FDWEMsS0FESSxDQUNFLFNBREYsRUFFSmYsR0FGSSxDQUVBLFVBQUNnQixHQUFEO0FBQUEsZUFBU0MsUUFBUSxDQUFDRCxHQUFELEVBQU0sRUFBTixDQUFqQjtBQUFBLE9BRkEsRUFHSmhCLEdBSEksQ0FHQVEsZUFIQSxFQUlKUixHQUpJLENBSUEsVUFBQ2tCLFFBQUQ7QUFBQSxlQUFjQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLFFBQXBCLENBQWQ7QUFBQSxPQUpBLEVBS0pMLElBTEksQ0FLQyxFQUxELENBQVA7QUFNRCIsImZpbGUiOiJteWxpYi5kZXZlbG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5jcnlwdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBlbmNyeXB0KHNhbHQsIHRleHQpIHtcbiAgICBjb25zdCB0ZXh0VG9DaGFycyA9ICh0ZXh0KSA9PiB0ZXh0LnNwbGl0KFwiXCIpLm1hcCgoYykgPT4gYy5jaGFyQ29kZUF0KDApKTtcbiAgICBjb25zdCBieXRlSGV4ID0gKG4pID0+IChcIjBcIiArIE51bWJlcihuKS50b1N0cmluZygxNikpLnN1YnN0cigtMik7XG4gICAgY29uc3QgYXBwbHlTYWx0VG9DaGFyID0gKGNvZGUpID0+IHRleHRUb0NoYXJzKHNhbHQpLnJlZHVjZSgoYSwgYikgPT4gYSBeIGIsIGNvZGUpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0XG4gICAgICAuc3BsaXQoXCJcIilcbiAgICAgIC5tYXAodGV4dFRvQ2hhcnMpXG4gICAgICAubWFwKGFwcGx5U2FsdFRvQ2hhcilcbiAgICAgIC5tYXAoYnl0ZUhleClcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgZGVjcnlwdChzYWx0LCBlbmNvZGVkKSB7XG4gICAgY29uc3QgdGV4dFRvQ2hhcnMgPSAodGV4dCkgPT4gdGV4dC5zcGxpdChcIlwiKS5tYXAoKGMpID0+IGMuY2hhckNvZGVBdCgwKSk7XG4gICAgY29uc3QgYXBwbHlTYWx0VG9DaGFyID0gKGNvZGUpID0+IHRleHRUb0NoYXJzKHNhbHQpLnJlZHVjZSgoYSwgYikgPT4gYSBeIGIsIGNvZGUpO1xuICAgIHJldHVybiBlbmNvZGVkXG4gICAgICAubWF0Y2goLy57MSwyfS9nKVxuICAgICAgLm1hcCgoaGV4KSA9PiBwYXJzZUludChoZXgsIDE2KSlcbiAgICAgIC5tYXAoYXBwbHlTYWx0VG9DaGFyKVxuICAgICAgLm1hcCgoY2hhckNvZGUpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9