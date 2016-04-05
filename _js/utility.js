var Utility = (function() {
  "use strict";

  /**
   * Tests whether a supplied variable is an Array.
   * http://stackoverflow.com/a/4775737/879081
   *
   * @public
   * @param {Array} array
   * @returns {boolean}
   */
  var isArray = function(array){
    return Object.prototype.toString.call(array) === "[object Array]"
  };



  /**
   * Tests if variable is a boolean.
   *
   * @public
   * @param {boolean} bool
   * @returns {boolean}
   */
  var isBoolean = function(bool){
    return (typeof bool === "boolean");
  };



  /**
   * Tests whether a supplied argument is a DOM Element
   * http://stackoverflow.com/a/384380/879081
   *
   * @public
   * @param {object} el
   * @returns {boolean}
   */
  var isDomElement = function(el){
    return typeof HTMLElement === "object" ? el instanceof HTMLElement : // DOM2
      el && typeof el === "object" && el !== null && el.nodeType === 1 && typeof el.nodeName==="string";
  };



  /**
   * Tests if variable is a number.
   * http://stackoverflow.com/a/3885844/879081
   *
   * @public
   * @param {number} float
   * @returns {boolean}
   */
  var isFloat = function(float){
    return float === +float && float !== (float|0);
  };



  /**
   * Tests if value is an integer
   * http://stackoverflow.com/a/14794066/879081
   *
   * @public
   * @param {number} value
   * @returns {boolean}
   */
  var isInt = function(value){
    var x;

    if (isNaN(value)) {
      return false;
    }

    x = parseFloat(value);
    return (x | 0) === x;
  };



  /**
   * Performs no operation
   *
   * @public
   * @returns {void}
   */
  var noop = function(){};



  /**
   * Left pad a number with 0s or a custom string
   * http://stackoverflow.com/a/5366862/879081
   *
   * @public
   * @number {number}
   * @n {number}
   * @str {string}
   * @returns {string}
   */
  var padLeft = function(num, pad, str) {
    return Array(pad - String(num).length + 1).join(str || "0") + num;
  };



  /**
   * Trims whitespace from the head and tail of a string.
   * (For IE>=9 str.trim())
   *
   * @public
   * @param {string} str The input string
   * @returns {string} The trimmed string
   */
  var trim = function(str){
    return str.replace(/^\s+|\s+$/g,"");
  };



  /**
   * Gets browser prefixed event string for when a CSS animation ends
   *
   * @public
   * returns {string}
   */
  var whichAnimationEnd = function() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    };

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  };



  /**
   * Gets browser prefixed event string for when a CSS transition ends
   * @public
   *
   * returns {string}
   */
  var whichTransitionEnd =function() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    };

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  };



  /**
   * Opens popup window
   *
   * @public
   * @param {string} url
   * @param {number} width
   * @param {number} height
   */
  var windowOpen = function(url, width, height) {
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);

    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );
  };



  return {
    isArray: isArray,
    isBoolean: isBoolean,
    isDomElement: isDomElement,
    isFloat: isFloat,
    isInt: isInt,
    noop: noop,
    padLeft: padLeft,
    trim: trim,
    windowOpen: windowOpen,
    whichAnimationEnd: whichAnimationEnd,
    whichTransitionEnd: whichTransitionEnd
  };

})();
