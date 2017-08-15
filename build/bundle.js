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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Module to convert Number into word format.
 *  @module
 */
var NumberToWord = exports.NumberToWord = function () {
    /**Constructor of NumberToWord class
     * @constructor
     */
    function NumberToWord() {
        _classCallCheck(this, NumberToWord);

        this.one = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        this.digit = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        this.tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"];
        this.beyond = [" ", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion"];
    }
    /**Thid is convert function 
     * @function
     * @param {number} [times=3]  
     */


    _createClass(NumberToWord, [{
        key: "convert",
        value: function convert(hplace, tplace, oplace) {
            var string = "";
            if (hplace > 0) {
                string += this.one[hplace] + " hundred ";
            }
            if (tplace === 1) {
                string += this.digit[oplace] + " ";
            } else if (tplace > 1) {
                string += this.tens[tplace] + " ";
                string += this.one[oplace] + " ";
            } else {
                string += this.one[oplace] + " ";
            }
            string.trim();
            return string;
        }
        /**Thid is convert function 
         * @function
         * @param {number}  input provided by different modules.
         * @return {string} -converted number in string.  
         */

    }, {
        key: "number_to_word",
        value: function number_to_word(number) {
            if (isNaN(number)) {
                return undefined;
            }
            if (number === "0") {
                return "zero" + " ";
            }
            var temp = number,
                digit_array = [];
            while (temp > 0) {
                digit_array.push(temp % 10);
                temp = temp / 10;
                temp = Math.floor(temp);
            }
            if (digit_array.length % 3 !== 0) digit_array.push(0);
            if (digit_array.length % 3 !== 0) digit_array.push(0);
            var text = [],
                position = 0;
            for (var i = 2; i < digit_array.length; i += 3, position++) {
                var unit = this.convert(digit_array[i], digit_array[i - 1], digit_array[i - 2]);
                if (unit.trim() !== "") {
                    text.push(unit + this.beyond[position]);
                }
            }
            var output = "";
            for (var k = text.length - 1; k >= 0; k--) {
                output += text[k] + " ";
            }
            output.trim();
            return output;
        }
    }]);

    return NumberToWord;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Replace Module
 * @module
 */
/**Replace class
 * @class
 */
var Replace = exports.Replace = function () {
  /**constructor of replace class
   * @constructor
   * @param {object} -reference of identifier class
  */
  function Replace(array) {
    _classCallCheck(this, Replace);

    this.ref = array;
  }
  /**this is replacer function
   * @function
   * @param {string|string} - original value and changed value to replace.
   */


  _createClass(Replace, [{
    key: "replacer",
    value: function replacer(token, word) {
      this.ref.text = this.ref.text.replace(token, word);
      this.ref.text = this.ref.text.replace(/  +/g, " ");

      this.ref.count++;
      if (this.ref.a.length === this.ref.count) {
        document.getElementById("result").innerHTML = this.ref.text;
      }
    }
  }]);

  return Replace;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _identifier = __webpack_require__(3);

/**arrow function
 * @function - to call identify function of identifier class with input value.
 */
var convert = function convert() {
    var input = document.getElementById("text-1").value;
    var obj = new _identifier.Identifier(input);
    obj.identify();
};
/**EventListner for Html button */
/** This is entry module
 * @module
 * @author -Ashish Mishra
 */
var e = document.getElementById("button-1");
if (e) {
    addEventListener("click", convert);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Identifier = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Identifier module 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _decider = __webpack_require__(4);

var imp = _interopRequireWildcard(_decider);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Identifier class
 * @class Identifier class.
 */
var Identifier = exports.Identifier = function () {
    /**This is constructor 
     * @constructor
     * @param {string} input-input by user.  
    */
    function Identifier(input) {
        _classCallCheck(this, Identifier);

        this.text = input;
        this.a = [];
        this.count = 0;
    }
    /**This id identify function 
     * @function
     * used to identify tokens which contain numbers in it.
    */


    _createClass(Identifier, [{
        key: "identify",
        value: function identify() {
            var _this = this;

            var string = this.text.split(" ");
            for (var i = 0; i < string.length; i++) {
                var reg = /\d+/g;
                if (reg.exec(string[i]) !== null) {
                    this.a.push(string[i]);
                }
            }
            if (this.a.length !== 0) {
                var _loop = function _loop(j) {
                    var that = _this;
                    setTimeout(function () {
                        var obj = new imp.Decider();
                        obj.decide(that, that.a[j]);
                    }, 0);
                };

                for (var j = 0; j < this.a.length; j++) {
                    _loop(j);
                }
            } else {
                document.getElementById("result").innerHTML = this.text;
            }
        }
    }]);

    return Identifier;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** Decider Module */


var _cardinal = __webpack_require__(5);

var car = _interopRequireWildcard(_cardinal);

var _specialmiddle = __webpack_require__(6);

var _suffixprefix = __webpack_require__(12);

var suf = _interopRequireWildcard(_suffixprefix);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** This is decider class 
 * @class
 */
var Decider = exports.Decider = function () {
    function Decider() {
        _classCallCheck(this, Decider);
    }

    _createClass(Decider, [{
        key: "decide",

        /**decider function to decide the type of input
         * @function
         * @param {object|string} - reference of identifier class and input by identifier class.
         */
        value: function decide(ref, input) {
            if (input.match(/\d+[.]\d+$|\d+[/]\d+$|[+]\d{12}$|[0]\d{10}$|\d{1,2}[:][0-5][0-9]$|\d{1,4}[-]\d{1,2}[-]\d{1,4}$|\d{1,4}[/]\d{1,2}[/]\d{1,4}$|^\$?\d+(,\d{1,})*(\.\d*)?$/)) {
                var obj2 = new _specialmiddle.SpecialMiddle(ref, input);
                obj2.transfer();
            } else if (input.match(/^\d+$/)) {
                var obj = new car.Cardinal(ref, input);
                obj.convert();
            } else {
                var obj3 = new suf.SuffixPrefix(ref, input);
                obj3.check();
            }
        }
    }]);

    return Decider;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cardinal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Cardinal Module */


var _numberword = __webpack_require__(0);

var num = _interopRequireWildcard(_numberword);

var _replace = __webpack_require__(1);

var rep = _interopRequireWildcard(_replace);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Cardinal class
 * @class
 * Used to convert simple cardinal numbers into words.
 */
var Cardinal = exports.Cardinal = function () {
    /**constructor of cardinal
     * @constructor
     * @param {object|string} reference and input.
     */
    function Cardinal(array, input) {
        _classCallCheck(this, Cardinal);

        this.number = input;
        this.ref = array;
    }
    /**function to convert cardinal number to word 
     * @function 
    */


    _createClass(Cardinal, [{
        key: "convert",
        value: function convert() {
            var obj = new num.NumberToWord();
            var r = obj.number_to_word(this.number);
            var ob = new rep.Replace(this.ref);
            ob = ob.replace(/\s+/g, "");
            ob.replacer(this.number, r);
        }
        /**function output 
         * @function
         * @return string converted string.
         */

    }, {
        key: "output",
        value: function output() {
            var obj = new num.NumberToWord();
            var r = obj.number_to_word(this.number);
            return r.trim();
        }
    }]);

    return Cardinal;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpecialMiddle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** special middle module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _time = __webpack_require__(7);

var time = _interopRequireWildcard(_time);

var _decimalFraction = __webpack_require__(8);

var dec = _interopRequireWildcard(_decimalFraction);

var _phoneno = __webpack_require__(9);

var phone = _interopRequireWildcard(_phoneno);

var _date = __webpack_require__(10);

var date = _interopRequireWildcard(_date);

var _money = __webpack_require__(11);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Special Middle class
 * @class
 */
var SpecialMiddle = exports.SpecialMiddle = function () {
    /**constructor of Special middle class
     * @constructor
     * @param {object|string} 
     */
    function SpecialMiddle(array, input) {
        _classCallCheck(this, SpecialMiddle);

        this.middle = input;
        this.ref = array;
    }
    /**transfer function
     * @function
     */


    _createClass(SpecialMiddle, [{
        key: "transfer",
        value: function transfer() {
            if (this.middle.match(/\d{1,2}[:][0-5][0-9]/g)) {
                var obj = new time.Time(this.ref, this.middle);
                obj.convert();
            } else if (this.middle.match(/\d+[.]\d+|\d+[/]\d+/g)) {
                var obj2 = new dec.DecimalFraction(this.ref, this.middle);
                obj2.convert();
            } else if (this.middle.match(/[+]\d{12}|[0]\d{10}/g)) {
                var obj3 = new phone.Phoneno(this.ref, this.middle);
                obj3.convert();
            } else if (this.middle.match(/\d{1,4}[-]\d{1,2}[-]\d{1,4}|\d{1,4}[/]\d{1,2}[/]\d{1,4}/g)) {
                var obj4 = new date.Date(this.ref, this.middle);
                obj4.convert();
            } else if (this.middle.match(/^\$?\d+(,\d{1,})*(\.\d*)?$/)) {
                var obj5 = new _money.Money(this.ref, this.middle);
                obj5.convert();
            }
        }
    }]);

    return SpecialMiddle;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Time = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** Time Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

var num = _interopRequireWildcard(_numberword);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**This is Time class
 * @class
 */
var Time = exports.Time = function () {
    /**constructor of Time class
     * @constructor
     * @param {object|string} 
     */
    function Time(array, input) {
        _classCallCheck(this, Time);

        this.time = input;
        this.ref = array;
        this.change = "false";
    }
    /** convert function
     * @function
     */


    _createClass(Time, [{
        key: "convert",
        value: function convert() {
            var a = [];
            a = this.time.split(":");
            var obj = new num.NumberToWord();
            var h1 = obj.number_to_word(a[0]);
            var h2 = obj.number_to_word(a[1]);
            var word = h1 + " " + h2;
            this.change = true;
            var obj2 = new _replace.Replace(this.ref);
            obj2.replacer(this.time, word);
        }
        /** output function
         * @function
         * @return {string} -converted value of time in string format.
         */

    }, {
        key: "output",
        value: function output() {
            var a = [];
            a = this.time.split(":");
            var obj = new num.NumberToWord();
            var h1 = obj.number_to_word(a[0]);
            h1 = h1.trim();
            var h2 = obj.number_to_word(a[1]);
            h2 = h2.trim();
            var word = h1 + " " + h2;
            return word;
        }
    }]);

    return Time;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DecimalFraction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Decimal-Fraction module */


var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** This is Decimal fraction class 
 * @class
*/
var DecimalFraction = exports.DecimalFraction = function () {
    /**constructor of DecimalFraction  
     * @constructor
     * @param {object|string}
    */
    function DecimalFraction(array, input) {
        _classCallCheck(this, DecimalFraction);

        this.ref = array;
        this.df = input;
    }
    /**convert function
     * @function -to convert decimal and fraction respectively.
     */


    _createClass(DecimalFraction, [{
        key: "convert",
        value: function convert() {
            var obj = new _numberword.NumberToWord(this.ref);
            var text = this.df;
            var b = [];
            if (text.match(/\d+[.]\d+/g)) {
                var arr = text.split(".");
                b.push(obj.number_to_word(arr[0]));
                b.push(".");
                b.push(obj.number_to_word(arr[1]));
                b = b.join(" ");
                b = b.replace(/\s+/g, "");
                var obj2 = new _replace.Replace(this.ref);
                obj2.replacer(this.df, b);
            } else if (text.match(/\d+[/]\d+/g)) {
                var _arr = text.split("/");
                b.push(obj.number_to_word(_arr[0]));
                b.push("/");
                b.push(obj.number_to_word(_arr[1]));
                b = b.join(" ");
                b = b.replace(/\s+/g, "");
                var _obj = new _replace.Replace(this.ref);
                _obj.replacer(this.df, b);
            }
        }
        /** function to return output
         * @function
         * @return {string} -decimal/fraction in word format.
         */

    }, {
        key: "output",
        value: function output() {
            var obj = new _numberword.NumberToWord(this.ref);
            var text = this.df;
            var b = [];
            if (text.match(/\d+[.]\d+/g)) {
                var arr = text.split(".");
                b.push(obj.number_to_word(arr[0]));
                b.push(".");
                b.push(obj.number_to_word(arr[1]));
                b = b.join(" ");
                b = b.replace(/\s+/g, "");
                return b;
            } else if (text.match(/\d+[/]\d+/g)) {
                var _arr2 = text.split("/");
                b.push(obj.number_to_word(_arr2[0]));
                b.push("/");
                b.push(obj.number_to_word(_arr2[1]));
                b = b.join(" ");
                b = b.replace(/\s+/g, "");
                return b;
            }
        }
    }]);

    return DecimalFraction;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Phoneno = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** This is Phoneno Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _numberword = __webpack_require__(0);

var _replace = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Phoneno class
 * @class
 */
var Phoneno = exports.Phoneno = function () {
    /**constructor of Phone class
     * @constructor
     * @param {object|string}
     */
    function Phoneno(array, input) {
        _classCallCheck(this, Phoneno);

        this.no = input;
        this.ref = array;
    }
    /**convert function
     * @function
     */


    _createClass(Phoneno, [{
        key: "convert",
        value: function convert() {
            var obj = new _numberword.NumberToWord();
            var out = "";
            if (this.no.charAt(0) === "0") {
                out = "zero ";
            } else {
                out = this.no.charAt(0);
            }
            for (var i = 1; i < this.no.length; i++) {
                var lett = this.no.charAt(i);
                out += obj.number_to_word(lett);
            }
            out = out.trim();
            var obj2 = new _replace.Replace(this.ref);
            obj2.replacer(this.no, out);
        }
        /**output function to return value
         * @function
         * @return {string}
         */

    }, {
        key: "output",
        value: function output() {
            var obj = new _numberword.NumberToWord();
            var out = "";
            out = this.no.charAt(0);
            for (var i = 1; i < this.no.length; i++) {
                var lett = this.no.charAt(i);
                out += obj.number_to_word(lett);
            }
            out = out.trim();
            out = out.replace(/\s+/g, " ");
            return out;
        }
    }]);

    return Phoneno;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Date = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** This is Date module */


var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** This is Date class 
 * @class 
*/
var Date = exports.Date = function () {
    /**constructor of Date class 
     * @constructor
     * @param {object|string}
    */
    function Date(array, input) {
        _classCallCheck(this, Date);

        this.date = input;
        this.ref = array;
    }
    /**convert function to convert the date in word format
     * @function 
    */


    _createClass(Date, [{
        key: "convert",
        value: function convert() {
            var a = this.date.split(/[-]|[/]/);
            var b = [];
            var obj = new _numberword.NumberToWord();
            for (var i = 0; i < a.length; i++) {
                b.push(obj.number_to_word(a[i]).trim());
            }
            b = b.join("-");
            b = b.replace(/\s+/g, "");
            var obj2 = new _replace.Replace(this.ref);
            obj2.replacer(this.date, b);
        }
        /**output function to return the converted value
         * @function
         * @return {string} - converted value in string format. 
        */

    }, {
        key: "output",
        value: function output() {
            var a = this.date.split(/[-]|[/]/);
            var b = [];
            var obj = new _numberword.NumberToWord();
            for (var i = 0; i < a.length; i++) {
                b.push(obj.number_to_word(a[i]).trim());
            }
            b = b.join("-");
            return b;
        }
    }]);

    return Date;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Money = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Money module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**This is Money class 
 * @class
*/
var Money = exports.Money = function () {
    /**constructor of Money class 
     * @constructor 
     * @param {object|string}
    */
    function Money(array, input) {
        _classCallCheck(this, Money);

        this.ref = array;
        this.money = input;
    }
    /**convert function 
     * @function 
    */


    _createClass(Money, [{
        key: "convert",
        value: function convert() {
            var money = this.money;
            var arr = money.split(",");
            var curr = arr.join(" ");
            curr = curr.replace(/\s+/g, "");
            var obj = new _numberword.NumberToWord();
            var change = obj.number_to_word(curr);
            var obj2 = new _replace.Replace(this.ref);
            obj2.replacer(this.money, change);
        }
        /**output function to return value
         * @function
         * @return {string} -converted value of money value. 
        */

    }, {
        key: "output",
        value: function output() {
            var money = this.money;
            var arr = money.split(",");
            var curr = arr.join(" ");
            curr = curr.replace(/\s+/g, "");
            var obj = new _numberword.NumberToWord();
            var change = obj.number_to_word(curr);
            return change;
        }
    }]);

    return Money;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SuffixPrefix = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Suffox Prefix module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ordinal = __webpack_require__(13);

var ordinal = _interopRequireWildcard(_ordinal);

var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**SuffixPrefix class
 * @class
 */
var SuffixPrefix = exports.SuffixPrefix = function () {
    /**constructor of Suffix Prefix class
     * @constructor
     * @param {object|string}
     */
    function SuffixPrefix(array, input) {
        _classCallCheck(this, SuffixPrefix);

        this.ref = array;
        this.mix = input;
    }
    /**function check 
     * @function
    */


    _createClass(SuffixPrefix, [{
        key: "check",
        value: function check() {
            if (this.mix.match(/\d+st|\d+nd|\d+rd|\d+th/g)) {
                var obj = new ordinal.Ordinal(this.ref, this.mix);
                obj.convert();
            } else {
                var s = this.mix;
                var r = /\d+/g;
                var m = void 0;
                var a = [];
                while ((m = r.exec(s)) != null) {
                    a.push(m[0]);
                }
                var _obj = new _numberword.NumberToWord();
                for (var k = 0; k < a.length; k++) {
                    var str = _obj.number_to_word(a[k]);
                    s = s.replace(a[k], str);
                }
                s = s.replace("onest", "first");
                s = s.replace("twond", "second");
                s = s.replace("threerd", "third");
                s = s.replace("fiveth", "fifth");
                s = s.replace("nineth", "ninth");
                s = s.trim();
                s = s.replace(/  +/g, " ");
                var obj2 = new _replace.Replace(this.ref);
                obj2.replacer(this.mix, s);
            }
        }
        /** output function
         * @function
         * @return {string}  -converted value.
         */

    }, {
        key: "output",
        value: function output() {
            var s = this.mix;
            var r = /\d+/g;
            var m = void 0;
            var a = [];
            while ((m = r.exec(s)) != null) {
                a.push(m[0]);
            }
            var obj = new _numberword.NumberToWord();
            for (var k = 0; k < a.length; k++) {
                var str = obj.number_to_word(a[k]);
                s = s.replace(a[k], str) + " ";
            }
            s = s.replace("onest", "first");
            s = s.replace("twond", "second");
            s = s.replace("threerd", "third");
            s = s.replace("fiveth", "fifth");
            s = s.replace("nineth", "ninth");
            s = s.trim();
            return s;
        }
    }]);

    return SuffixPrefix;
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ordinal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**This is Ordinal Module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _replace = __webpack_require__(1);

var _numberword = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**Ordinal class
 * @class 
 */
var Ordinal = exports.Ordinal = function () {
    /** constructor of Ordinal class
     * @constructor 
     * @param {object|string}
     */
    function Ordinal(array, input) {
        _classCallCheck(this, Ordinal);

        this.number = input;
        this.ref = array;
    }
    /**convert function 
     * @function 
    */


    _createClass(Ordinal, [{
        key: "convert",
        value: function convert() {
            var s = this.number;
            var r = /\d+/g;
            var m = void 0;
            var a = [];
            while ((m = r.exec(s)) != null) {
                a.push(m[0]);
            }
            var obj = new _numberword.NumberToWord();
            for (var k = 0; k < a.length; k++) {
                var str = obj.number_to_word(a[k]);
                s = s.replace(a[k], str);
            }
            s = s.replace(/\s+/g, "");
            s = s.replace("one st", "first");
            s = s.replace("two nd", "second");
            s = s.replace("three rd", "third");
            s = s.replace("five th", "fifth");
            s = s.replace("nine th", "ninth");
            s = s.trim();
            var obj2 = new _replace.Replace(this.ref);
            obj2.replacer(this.number, s);
        }
        /**output function 
         * @function
         * @return {string} -converted value of ordinal number in word form.
        */

    }, {
        key: "output",
        value: function output() {
            var s = this.number;
            var r = /\d+/g;
            var m = void 0;
            var a = [];
            while ((m = r.exec(s)) != null) {
                a.push(m[0]);
            }
            var obj = new _numberword.NumberToWord();
            for (var k = 0; k < a.length; k++) {
                var str = obj.number_to_word(a[k]);
                s = s.replace(a[k], str);
            }
            s = s.replace(/\s+/g, "");
            s = s.replace("one st", "first");
            s = s.replace("two nd", "second");
            s = s.replace("three rd", "third");
            s = s.replace("five th", "fifth");
            s = s.replace("nine th", "ninth");
            s = s.trim();
            return s;
        }
    }]);

    return Ordinal;
}();

/***/ })
/******/ ]);