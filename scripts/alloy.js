"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepAssign = exports.createInstance = exports.createEventMergeId = void 0;
var _reactorObjectAssign = _interopRequireDefault(require("@adobe/reactor-object-assign"));
var _reactorQueryString = _interopRequireDefault(require("@adobe/reactor-query-string"));
var _reactorLoadScript = _interopRequireDefault(require("@adobe/reactor-load-script"));
var _eventTypeToPropositi, _MATCHERS, _adapters;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var CHROME = "Chrome";
var EDGE = "Edge";
var EDGE_CHROMIUM = "EdgeChromium";
var FIREFOX = "Firefox";
var IE = "IE";
var SAFARI = "Safari";
var UNKNOWN = "Unknown";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether an array includes a certain value.
 * @param {Array} arr Array to search.
 * @param {*} item The item for which to search.
 * @returns {boolean}
 */
var includes = function includes(arr, item) {
  return arr.indexOf(item) !== -1;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Users could have also disabled third-party cookies within these browsers, but
// we don't know. We also assume "unknown" browsers support third-party cookies,
// though we don't really know that either. We're making best guesses.
var browsersSupportingThirdPartyCookie = [CHROME, EDGE, EDGE_CHROMIUM, IE, UNKNOWN];
var areThirdPartyCookiesSupportedByDefault = function areThirdPartyCookiesSupportedByDefault(browser) {
  return includes(browsersSupportingThirdPartyCookie, browser);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true when the value is null.
 * @param {*} value
 * @returns {boolean}
 */
var isNil = function isNil(value) {
  return value == null;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an object.
 * @param {*} value
 * @returns {boolean}
 */
var isObject = function isObject(value) {
  return !isNil(value) && !Array.isArray(value) && _typeof(value) === "object";
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var assignConcatArrayValues = function assignConcatArrayValues() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  if (values.length < 2) {
    // if the number of args is 0 or 1, just use the default behavior from Object.assign
    return _reactorObjectAssign["default"].apply(void 0, values);
  }
  return values.reduce(function (accumulator, currentValue) {
    if (isObject(currentValue)) {
      Object.keys(currentValue).forEach(function (key) {
        if (Array.isArray(currentValue[key])) {
          if (Array.isArray(accumulator[key])) {
            var _accumulator$key;
            (_accumulator$key = accumulator[key]).push.apply(_accumulator$key, _toConsumableArray(currentValue[key]));
          } else {
            // clone the array so the original isn't modified.
            accumulator[key] = _toConsumableArray(currentValue[key]);
          }
        } else {
          accumulator[key] = currentValue[key];
        }
      });
    }
    return accumulator;
  }); // no default value to pass into reduce because we want to skip the first value
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
var js_cookie = createCommonjsModule(function (module, exports) {
  (function (factory) {
    var registeredInModuleLoader;
    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();
      api.noConflict = function () {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function () {
    function extend() {
      var i = 0;
      var result = {};
      for (; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }
      return result;
    }
    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function init(converter) {
      function api() {}
      function set(key, value, attributes) {
        if (typeof document === 'undefined') {
          return;
        }
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);
        if (typeof attributes.expires === 'number') {
          attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
        }

        // We're using "expires" because "max-age" is not supported by IE
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';
        try {
          var result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}
        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = '';
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += '; ' + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }

          // Considers RFC 6265 section 5.2:
          // ...
          // 3.  If the remaining unparsed-attributes contains a %x3B (";")
          //     character:
          // Consume the characters of the unparsed-attributes up to,
          // not including, the first %x3B (";") character.
          // ...
          stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }
        return document.cookie = key + '=' + value + stringifiedAttributes;
      }
      function get(key, json) {
        if (typeof document === 'undefined') {
          return;
        }
        var jar = {};
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;
        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');
          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }
          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);
            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {}
            }
            jar[name] = cookie;
            if (key === name) {
              break;
            }
          } catch (e) {}
        }
        return key ? jar[key] : jar;
      }
      api.set = set;
      api.get = function (key) {
        return get(key, false /* read as raw */);
      };

      api.getJSON = function (key) {
        return get(key, true /* read as json */);
      };

      api.remove = function (key, attributes) {
        set(key, '', extend(attributes, {
          expires: -1
        }));
      };
      api.defaults = {};
      api.withConverter = init;
      return api;
    }
    return init(function () {});
  });
});

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var cookieJar = {
  get: js_cookie.get,
  set: js_cookie.set,
  remove: js_cookie.remove,
  withConverter: js_cookie.withConverter
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var deepAssignObject = function deepAssignObject(target, source) {
  Object.keys(source).forEach(function (key) {
    if (isObject(target[key]) && isObject(source[key])) {
      deepAssignObject(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
};

/**
 * Recursively copy the values of all enumerable own properties from a source item to a target item if the both items are objects
 * @param {Object} target - a target object
 * @param {...Object} source - an array of source objects
 * @example
 * deepAssign({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
 * // { a: 'a', b: 'B', c: 'c' }
 */
var deepAssign = function deepAssign(target) {
  if (isNil(target)) {
    throw new TypeError('deepAssign "target" cannot be null or undefined');
  }
  var result = Object(target);
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }
  sources.forEach(function (source) {
    return deepAssignObject(result, Object(source));
  });
  return result;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that, when passed an object of updates, will merge
 * the updates onto the current value of a payload property.
 * @param {Object} content The base object to modify
 * @param {String } key The property to merge updates into. This
 * can be a dot-notation property path.
 * @returns {Function}
 */
exports.deepAssign = deepAssign;
var createMerger = function createMerger(content, key) {
  return function (updates) {
    var propertyPath = key.split(".");
    var hostObjectForUpdates = propertyPath.reduce(function (obj, propertyName) {
      obj[propertyName] = obj[propertyName] || {};
      return obj[propertyName];
    }, content);
    deepAssign(hostObjectForUpdates, updates);
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Allows callbacks to be registered and then later called. When the
 * callbacks are called, their responses are combined into a single promise.
 */
var createCallbackAggregator = function createCallbackAggregator() {
  var callbacks = [];
  return {
    add: function add(callback) {
      callbacks.push(callback);
    },
    call: function call() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      // While this utility doesn't necessarily need to be doing the
      // Promise.all, it's currently useful everywhere this is used and
      // reduces repetitive code. We can factor it out later if we want
      // to make this utility more "pure".
      return Promise.all(callbacks.map(function (callback) {
        return callback.apply(void 0, args);
      }));
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createLoggingCookieJar = function createLoggingCookieJar(_ref) {
  var logger = _ref.logger,
    cookieJar = _ref.cookieJar;
  return _objectSpread(_objectSpread({}, cookieJar), {}, {
    set: function set(key, value, options) {
      logger.info("Setting cookie", _objectSpread({
        name: key,
        value: value
      }, options));
      cookieJar.set(key, value, options);
    }
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Sequences tasks.
 */
var createTaskQueue = function createTaskQueue() {
  var queueLength = 0;
  var lastPromiseInQueue = Promise.resolve();
  return {
    /**
     * Add a task to the queue. If no task is currenty running,
     * the task will begin immediately.
     * @param {Function} task A function that will be called when
     * the task should be run. If the task it asynchronous, it should
     * return a promise.
     * @returns {Promise} A promise that will be resolved or rejected
     * with whatever value the task resolved or rejects its promise.
     */
    addTask: function addTask(task) {
      queueLength += 1;
      var lastPromiseFulfilledHandler = function lastPromiseFulfilledHandler() {
        return task()["finally"](function () {
          queueLength -= 1;
        });
      };
      lastPromiseInQueue = lastPromiseInQueue.then(lastPromiseFulfilledHandler, lastPromiseFulfilledHandler);
      return lastPromiseInQueue;
    },
    /**
     * How many tasks are in the queue. This includes the task
     * that's currently running.
     * @returns {number}
     */
    get length() {
      return queueLength;
    }
  };
};

/* eslint-disable */

/*
crc32 · JavaScript Function to Calculate CRC32 of a String
Description
  Below is a JavaScript function to calculate CRC32 of a string. 
  The string can be either ASCII or Unicode. 
  Unicode strings will be encoded in UTF-8. 
  The polynomial used in calculation is 0xedb88320. 
  This polynomial is used in Ethernet, Gzip, PNG, SATA and many other technologies.
*/
var crc32 = function () {
  var table = [];
  for (var _i = 0; _i < 256; _i++) {
    var c = _i;
    for (var j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
    }
    table.push(c);
  }
  return function (str, crc) {
    str = unescape(encodeURIComponent(str));
    if (!crc) crc = 0;
    crc = crc ^ -1;
    for (var _i2 = 0; _i2 < str.length; _i2++) {
      var y = (crc ^ str.charCodeAt(_i2)) & 0xff;
      crc = crc >>> 8 ^ table[y];
    }
    crc = crc ^ -1;
    return crc >>> 0;
  };
}();

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A simple utility for managing a promise's state outside of
 * the promise's "executor" (the function passed into the constructor).
 */
var defer = function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var REFERENCE_EQUALITY = function REFERENCE_EQUALITY(a, b) {
  return a === b;
};
var findIndex = function findIndex(array, item, isEqual) {
  for (var _i3 = 0; _i3 < array.length; _i3 += 1) {
    if (isEqual(array[_i3], item)) {
      return _i3;
    }
  }
  return -1;
};
var deduplicateArray = function deduplicateArray(array) {
  var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : REFERENCE_EQUALITY;
  return array.filter(function (item, index) {
    return findIndex(array, item, isEqual) === index;
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string ends with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} suffix The string to search for.
 * @returns {boolean}
 */
var endsWith = function endsWith(str, suffix) {
  return str.substr(-suffix.length) === suffix;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the first item in the array that satisfies the provided testing function.
 * @param {Array} arr The array to search.
 * @param {Function} predicate Function that will be called for each item. Arguments
 * will be the item, the item index, then the array itself.
 * @returns {*}
 */
var find = function find(arr, predicate) {
  for (var _i4 = 0; _i4 < arr.length; _i4 += 1) {
    var item = arr[_i4];
    if (predicate(item, _i4, arr)) {
      return item;
    }
  }
  return undefined;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var appendNode = function appendNode(parent, node) {
  return parent.appendChild(node);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var populateElementProperties = function populateElementProperties(element, props) {
  Object.keys(props).forEach(function (key) {
    // The following is to support setting style properties to avoid CSP errors.
    if (key === "style" && isObject(props[key])) {
      var styleProps = props[key];
      Object.keys(styleProps).forEach(function (styleKey) {
        element.style[styleKey] = styleProps[styleKey];
      });
    } else {
      element[key] = props[key];
    }
  });
};
var createNode = function createNode(tag) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var result = doc.createElement(tag);
  Object.keys(attrs).forEach(function (key) {
    // TODO: To highlight CSP problems consider throwing a descriptive error
    //       if nonce is available and key is style.
    result.setAttribute(key, attrs[key]);
  });
  populateElementProperties(result, props);
  children.forEach(function (child) {
    return appendNode(result, child);
  });
  return result;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var BODY = "BODY";
var IFRAME = "IFRAME";
var IMG = "IMG";
var DIV = "DIV";
var STYLE = "STYLE";
var SCRIPT = "SCRIPT";
var HEAD = "HEAD";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Fires an image pixel from the current document's window.
 * @param {object} currentDocument
 * @param {string} src
 * @returns {Promise}
 */
var fireImageInDocument = function fireImageInDocument(_ref2) {
  var src = _ref2.src,
    _ref2$currentDocument = _ref2.currentDocument,
    currentDocument = _ref2$currentDocument === void 0 ? document : _ref2$currentDocument;
  return new Promise(function (resolve, reject) {
    var attrs = {
      src: src
    };
    var props = {
      onload: resolve,
      onerror: reject,
      onabort: reject
    };
    createNode(IMG, attrs, props, [], currentDocument);
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a function.
 * @param {*} value
 * @returns {boolean}
 */
var isFunction = function isFunction(value) {
  return typeof value === "function";
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a non-empty array.
 * @param {*} value
 * @returns {boolean}
 */
var isNonEmptyArray = function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var toArray = function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (value == null) {
    return [];
  }
  return [].slice.call(value);
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var SIBLING_PATTERN = /^\s*>/;
var querySelectorAll = function querySelectorAll(context, selector) {
  if (!SIBLING_PATTERN.test(selector)) {
    return toArray(context.querySelectorAll(selector));
  }
  var tag = "alloy-".concat(Date.now());

  // We could use a :scope selector here, but we want to be IE compliant
  // so we add a dummy css class to be able to select the children
  try {
    context.classList.add(tag);
    return toArray(context.querySelectorAll(".".concat(tag, " ").concat(selector)));
  } finally {
    context.classList.remove(tag);
  }
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string starts with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} prefix The string to search for.
 * @returns {boolean}
 */
var startsWith = function startsWith(str, prefix) {
  return str.substr(0, prefix.length) === prefix;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var SHADOW_SEPARATOR = ":shadow";

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var splitWithShadow = function splitWithShadow(selector) {
  return selector.split(SHADOW_SEPARATOR);
};
var transformPrefix = function transformPrefix(parent, selector) {
  var result = selector;
  var hasChildCombinatorPrefix = startsWith(result, ">");
  if (!hasChildCombinatorPrefix) {
    return result;
  }

  // IE doesn't support :scope
  if (window.document.documentMode) {
    return result.substring(1).trim();
  }
  var prefix = parent instanceof Element || parent instanceof HTMLDocument ? ":scope" : ":host"; // see https://bugs.webkit.org/show_bug.cgi?id=233380

  return "".concat(prefix, " ").concat(result);
};
var selectNodesWithShadow = function selectNodesWithShadow(context, selector) {
  // Shadow DOM should be supported
  if (!window.document.documentElement.attachShadow) {
    return querySelectorAll(context, selector.replace(SHADOW_SEPARATOR, ""));
  }
  var parts = splitWithShadow(selector);
  if (parts.length < 2) {
    return querySelectorAll(context, selector);
  }

  // split the selector into parts separated by :shadow pseudo-selectors
  // find each subselector element based on the previously selected node's shadowRoot
  var parent = context;
  for (var _i5 = 0; _i5 < parts.length; _i5 += 1) {
    var part = parts[_i5].trim();
    // if part is empty, it means there's a chained :eq:shadow selector
    if (part === "" && parent.shadowRoot) {
      parent = parent.shadowRoot;
      // eslint-disable-next-line no-continue
      continue;
    }
    var _prefixed = transformPrefix(parent, part);
    var partNode = querySelectorAll(parent, _prefixed);
    if (partNode.length === 0 || !partNode[0] || !partNode[0].shadowRoot) {
      return partNode;
    }
    parent = partNode[0].shadowRoot;
  }
  return undefined;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var isShadowSelector = function isShadowSelector(str) {
  return str.indexOf(SHADOW_SEPARATOR) !== -1;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector
 * @param {Node} [context=document] defaults to document
 * @returns {Array} an array of DOM nodes
 */
var selectNodes = function selectNodes(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  if (!isShadowSelector(selector)) {
    return querySelectorAll(context, selector);
  }
  return selectNodesWithShadow(context, selector);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var MUTATION_OBSERVER = "MutationObserver";
var RAF = "requestAnimationFrame";
var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true
};
var VISIBILITY_STATE = "visibilityState";
var VISIBLE = "visible";
var DELAY = 100;
var MAX_POLLING_TIMEOUT = 5000;
var createError = function createError(selector) {
  return new Error("Could not find: ".concat(selector));
};
var createPromise = function createPromise(executor) {
  return new Promise(executor);
};
var canUseMutationObserver = function canUseMutationObserver(win) {
  return isFunction(win[MUTATION_OBSERVER]);
};
var awaitUsingMutationObserver = function awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var mutationObserver = new win[MUTATION_OBSERVER](function () {
      var nodes = selectFunc(selector);
      if (isNonEmptyArray(nodes)) {
        mutationObserver.disconnect();
        resolve(nodes);
      }
    });
    setTimeout(function () {
      mutationObserver.disconnect();
      reject(createError(selector));
    }, timeout);
    mutationObserver.observe(doc, MUTATION_OBSERVER_CONFIG);
  });
};
var canUseRequestAnimationFrame = function canUseRequestAnimationFrame(doc) {
  return doc[VISIBILITY_STATE] === VISIBLE;
};
var awaitUsingRequestAnimation = function awaitUsingRequestAnimation(win, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);
      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }
      win[RAF](execute);
    };
    execute();
    setTimeout(function () {
      reject(createError(selector));
    }, timeout);
  });
};
var awaitUsingTimer = function awaitUsingTimer(selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);
      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }
      setTimeout(execute, DELAY);
    };
    execute();
    setTimeout(function () {
      reject(createError(selector));
    }, timeout);
  });
};
var awaitSelector = function awaitSelector(selector) {
  var selectFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectNodes;
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_POLLING_TIMEOUT;
  var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var nodes = selectFunc(selector);
  if (isNonEmptyArray(nodes)) {
    return Promise.resolve(nodes);
  }
  if (canUseMutationObserver(win)) {
    return awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc);
  }
  if (canUseRequestAnimationFrame(doc)) {
    return awaitUsingRequestAnimation(win, selector, timeout, selectFunc);
  }
  return awaitUsingTimer(selector, timeout, selectFunc);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true if element matches the selector.
 * @param {String} selector
 * @param {Node} [element]
 * @returns {Boolean}
 */
var matchesSelector = function matchesSelector(selector, element) {
  if (element.matches) {
    return element.matches(selector);
  }

  // Making IE 11 happy
  return element.msMatchesSelector(selector);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var removeNode = function removeNode(node) {
  var parent = node.parentNode;
  if (parent) {
    return parent.removeChild(node);
  }
  return null;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var IFRAME_ATTRS = {
  name: "Adobe Alloy"
};
var IFRAME_PROPS = {
  style: {
    display: "none",
    width: 0,
    height: 0
  }
};
var injectFireReferrerHideableImage = function injectFireReferrerHideableImage() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$appendNode = _ref3.appendNode,
    appendNode$1 = _ref3$appendNode === void 0 ? appendNode : _ref3$appendNode,
    _ref3$awaitSelector = _ref3.awaitSelector,
    awaitSelector$1 = _ref3$awaitSelector === void 0 ? awaitSelector : _ref3$awaitSelector,
    _ref3$createNode = _ref3.createNode,
    createNode$1 = _ref3$createNode === void 0 ? createNode : _ref3$createNode,
    _ref3$fireImage = _ref3.fireImage,
    fireImage = _ref3$fireImage === void 0 ? fireImageInDocument : _ref3$fireImage;
  var fireOnPage = fireImage;
  var hiddenIframe;
  var createIframe = function createIframe() {
    return awaitSelector$1(BODY).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
        body = _ref5[0];
      if (hiddenIframe) {
        return hiddenIframe;
      }
      hiddenIframe = createNode$1(IFRAME, IFRAME_ATTRS, IFRAME_PROPS);
      return appendNode$1(body, hiddenIframe);
    });
  };
  var fireInIframe = function fireInIframe(_ref6) {
    var src = _ref6.src;
    return createIframe().then(function (iframe) {
      var currentDocument = iframe.contentWindow.document;
      return fireImage({
        src: src,
        currentDocument: currentDocument
      });
    });
  };
  return function (request) {
    var hideReferrer = request.hideReferrer,
      url = request.url;
    return hideReferrer ? fireInIframe({
      src: url
    }) : fireOnPage({
      src: url
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an empty object.
 * @param {*} value
 * @returns {boolean}
 */
var isEmptyObject = function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Given an object and a function that takes a value and returns a predicate, filter out
 * all non-object deeply nested values that do not pass the predicate.
 *
 * Example: filterObject({ a: 2, b: { c: 6 } }, (val) => val > 5) returns { b { c: 6 } }
 *
 * @param {*} obj
 * @param {* => boolean} predicate a function that takes a value and return a boolean,
 * representing if it should be included in the result object or not.
 * @returns A copy of the original object with the values that fail the predicate, filtered out.
 */
var filterObject = function filterObject(obj, predicate) {
  if (isNil(obj) || !isObject(obj)) {
    return obj;
  }
  return Object.keys(obj).reduce(function (result, key) {
    var value = obj[key];
    if (isObject(value)) {
      // value is object, go deeper
      var filteredValue = filterObject(value, predicate);
      if (isEmptyObject(filteredValue)) {
        return result;
      }
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, filteredValue));
    }
    // value is not an object, test predicate
    if (predicate(value)) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value));
    }
    return result;
  }, {});
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var flatMap = function flatMap(array, mapFunction) {
  return Array.prototype.concat.apply([], array.map(mapFunction));
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var baseNamespace = "com.adobe.alloy.";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the last N number of items from an array.
 * @param {Array} arr
 * @param {number} itemCount
 * @returns {Array}
 */
var getLastArrayItems = function getLastArrayItems(arr, itemCount) {
  return arr.slice(-itemCount);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var cookieName = "".concat(baseNamespace, "getTld");

/**
 * Of the current web page's hostname, this is the top-most domain that is
 * not a "public suffix" as outlined in https://publicsuffix.org/. In other
 * words, this is top-most domain that is able to accept cookies.
 * @param {Object} window
 * @param {Object} cookieJar
 * @returns {string}
 */
var getApexDomain = function getApexDomain(window, cookieJar) {
  var topLevelCookieDomain = "";

  // If hostParts.length === 1, we may be on localhost.
  var hostParts = window.location.hostname.toLowerCase().split(".");
  var i = 1;
  while (i < hostParts.length && !cookieJar.get(cookieName)) {
    i += 1;
    topLevelCookieDomain = getLastArrayItems(hostParts, i).join(".");
    cookieJar.set(cookieName, cookieName, {
      domain: topLevelCookieDomain
    });
  }
  cookieJar.remove(cookieName, {
    domain: topLevelCookieDomain
  });
  return topLevelCookieDomain;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Remember to also incorporate the org ID wherever cookies are read or written.
var COOKIE_NAME_PREFIX = "kndctr";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var sanitizeOrgIdForCookieName = function sanitizeOrgIdForCookieName(orgId) {
  return orgId.replace("@", "_");
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getNamespacedCookieName = function getNamespacedCookieName(orgId, key) {
  return "".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_").concat(key);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Group an array by a key getter provided
 * @param {Array} arr Array to iterate over.
 * @param {Function} keyGetter The key getter by which to group.
 * @returns {Object}
 */
var groupBy = function groupBy(arr, keyGetter) {
  var result = {};
  arr.forEach(function (item) {
    var key = keyGetter(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  return result;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var IDENTITY = "identity";
var CONSENT = "consent";
var CLUSTER = "cluster";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectDoesIdentityCookieExist = function injectDoesIdentityCookieExist(_ref7) {
  var orgId = _ref7.orgId;
  var identityCookieName = getNamespacedCookieName(orgId, IDENTITY);
  /**
   * Returns whether the identity cookie exists.
   */
  return function () {
    return Boolean(cookieJar.get(identityCookieName));
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getStorageByType = function getStorageByType(context, storageType, namespace) {
  // When storage is disabled on Safari, the mere act of referencing
  // window.localStorage or window.sessionStorage throws an error.
  // For this reason, we wrap in a try-catch.
  return {
    /**
     * Reads a value from storage.
     * @param {string} name The name of the item to be read.
     * @returns {string}
     */
    getItem: function getItem(name) {
      try {
        return context[storageType].getItem(namespace + name);
      } catch (e) {
        return null;
      }
    },
    /**
     * Saves a value to storage.
     * @param {string} name The name of the item to be saved.
     * @param {string} value The value of the item to be saved.
     * @returns {boolean} Whether the item was successfully saved to storage.
     */
    setItem: function setItem(name, value) {
      try {
        context[storageType].setItem(namespace + name, value);
        return true;
      } catch (e) {
        return false;
      }
    },
    /**
     * Clear all values in storage that match the namespace.
     */
    clear: function clear() {
      try {
        Object.keys(context[storageType]).forEach(function (key) {
          if (startsWith(key, namespace)) {
            context[storageType].removeItem(key);
          }
        });
        return true;
      } catch (e) {
        return false;
      }
    }
  };
};
var injectStorage = function injectStorage(context) {
  return function (additionalNamespace) {
    var finalNamespace = baseNamespace + additionalNamespace;
    return {
      session: getStorageByType(context, "sessionStorage", finalNamespace),
      persistent: getStorageByType(context, "localStorage", finalNamespace)
    };
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns items that are found within both arrays.
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
var intersection = function intersection(a, b) {
  return a.filter(function (x) {
    return includes(b, x);
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a boolean.
 * @param {*} value
 * @returns {boolean}
 */
var isBoolean = function isBoolean(value) {
  return typeof value === "boolean";
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a number.
 * @param {*} value
 * @returns {boolean}
 */
// eslint-disable-next-line no-restricted-globals
var isNumber = function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an integer.
 * @param {*} value
 * @returns {boolean}
 */
var isInteger = function isInteger(value) {
  var parsed = parseInt(value, 10);
  return isNumber(parsed) && value === parsed;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether a cookie name is namespaced according to the contract
 * defined by the server.
 * @param {String} orgId The org ID configured for the Alloy instance.
 * @param {String} name The cookie name.
 * @returns {boolean}
 */
var isNamespacedCookieName = function isNamespacedCookieName(orgId, name) {
  return name.indexOf("".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_")) === 0;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a string.
 * @param {*} value
 * @returns {boolean}
 */
var isString = function isString(value) {
  return typeof value === "string";
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a populated string.
 * @param {*} value
 * @returns {boolean}
 */
var isNonEmptyString = function isNonEmptyString(value) {
  return isString(value) && value.length > 0;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that memoizes the result of `fn`. If `keyResolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key.
 *
 * @param {Function} fn The function to have its output memoized.
 * @param {Function} [keyResolver] The function to resolve the cache key.
 * @returns {Function} The new memoized function.
 */
var memoize = function memoize(fn, keyResolver) {
  var map = new Map();
  return function () {
    var key = keyResolver ? keyResolver.apply(void 0, arguments) : arguments.length <= 0 ? undefined : arguments[0];
    if (map.has(key)) {
      return map.get(key);
    }
    var result = fn.apply(void 0, arguments);
    map.set(key, result);
    return result;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A function that performs no operations.
 */
var noop = function noop() {};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
var padStart = function padStart(string, targetLength, padString) {
  var originalString = String(string);
  var repeatedPadString = String(padString);
  if (originalString.length >= targetLength || repeatedPadString.length === 0) {
    return originalString;
  }
  var lengthToAdd = targetLength - originalString.length;
  while (lengthToAdd > repeatedPadString.length) {
    repeatedPadString += repeatedPadString;
  }
  return repeatedPadString.slice(0, lengthToAdd) + originalString;
};
var src = function src(str) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!str) return undefined;
  var o = {
    key: ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'],
    q: {
      name: 'queryKey',
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?))?((((?:[^?#/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  };
  var m = o.parser[opts.strictMode ? 'strict' : 'loose'].exec(str);
  var uri = {};
  var i = 14;
  while (i--) {
    uri[o.key[i]] = m[i] || '';
  }
  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });
  return uri;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var parseDomainBasic = function parseDomainBasic(host) {
  var result = {};
  var domainParts = host.split(".");
  switch (domainParts.length) {
    case 1:
      result.subdomain = "";
      result.domain = host;
      result.topLevelDomain = "";
      break;
    case 2:
      result.subdomain = "";
      result.domain = host;
      result.topLevelDomain = domainParts[1];
      break;
    case 3:
      result.subdomain = domainParts[0] === "www" ? "" : domainParts[0];
      result.domain = host;
      result.topLevelDomain = domainParts[2];
      break;
    case 4:
      result.subdomain = domainParts[0] === "www" ? "" : domainParts[0];
      result.domain = host;
      result.topLevelDomain = "".concat(domainParts[2], ".").concat(domainParts[3]);
      break;
  }
  return result;
};
var parseUrl = function parseUrl(url) {
  var parseDomain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseDomainBasic;
  if (!isString(url)) {
    // eslint-disable-next-line no-param-reassign
    url = "";
  }
  var parsed = src(url) || {};
  var _parsed$host = parsed.host,
    host = _parsed$host === void 0 ? "" : _parsed$host,
    _parsed$path = parsed.path,
    path = _parsed$path === void 0 ? "" : _parsed$path,
    _parsed$query = parsed.query,
    query = _parsed$query === void 0 ? "" : _parsed$query,
    _parsed$anchor = parsed.anchor,
    anchor = _parsed$anchor === void 0 ? "" : _parsed$anchor;
  return _objectSpread({
    path: path,
    query: query,
    fragment: anchor
  }, parseDomain(host));
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// We want to avoid mapping between specific keys because we want Konductor
// to be able to add overrides in the future without us needing to make
// any changes to the Web SDK
var prepareConfigOverridesForEdge = function prepareConfigOverridesForEdge(configuration) {
  if (isNil(configuration) || _typeof(configuration) !== "object") {
    return null;
  }
  // remove entries that are empty strings or arrays
  var configOverrides = filterObject(configuration, function (value) {
    if (isNil(value)) {
      return false;
    }
    if (isBoolean(value)) {
      return true;
    }
    if (isNumber(value)) {
      return true;
    }
    if (isNonEmptyString(value)) {
      return true;
    }
    if (isNonEmptyArray(value)) {
      return true;
    }
    return false;
  });
  if (isEmptyObject(configOverrides)) {
    return null;
  }
  return configOverrides;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates and returns a new error using the provided value as a message.
 * If the provided value is already an Error, it will be returned unmodified.
 * @param {*} value
 * @returns {Error}
 */
var toError = function toError(value) {
  return value instanceof Error ? value : new Error(value);
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var updateErrorMessage = function updateErrorMessage(_ref8) {
  var error = _ref8.error,
    message = _ref8.message;
  try {
    error.message = message;
  } catch (e) {
    // We'll set a new message when we can, but some errors, like DOMException,
    // have a read-only message property, which limits our options.
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Augments an error's message with additional context as it bubbles up the call stack.
 * @param {String} message The message to be added to the error.
 * @param {*} error Optimally, this is an instance of Error. If it is not,
 * this is used as the basis for the message of a newly created Error instance.
 * @returns {*}
 */
var stackError = function stackError(_ref9) {
  var error = _ref9.error,
    message = _ref9.message;
  var errorToStack = toError(error);
  var newMessage = "".concat(message, "\nCaused by: ").concat(errorToStack.message);
  updateErrorMessage({
    error: errorToStack,
    message: newMessage
  });
  return errorToStack;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var stringToBoolean = function stringToBoolean(str) {
  return isString(str) && str.toLowerCase() === "true";
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/*
 * coerce `value` to a number or return `defaultValue` if it cannot be.
 *
 * The coersion is attempted if value is a number or string.
 */
var toInteger = function toInteger(value, defaultValue) {
  if (isNumber(value) || isString(value)) {
    var n = Math.round(Number(value));
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(n)) {
      return n;
    }
  }
  return defaultValue;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Formats the date into an ISO date-time string in the local timezone
 * @param {Date} date
 * @returns {string}
 */
var toISOStringLocal = function toISOStringLocal(date) {
  var YYYY = date.getFullYear();
  var MM = padStart(date.getMonth() + 1, 2, "0");
  var DD = padStart(date.getDate(), 2, "0");
  var hh = padStart(date.getHours(), 2, "0");
  var mm = padStart(date.getMinutes(), 2, "0");
  var ss = padStart(date.getSeconds(), 2, "0");
  var mmm = padStart(date.getMilliseconds(), 3, "0");

  // The time-zone offset is the difference, in minutes, from local time to UTC. Note that this
  // means that the offset is positive if the local timezone is behind UTC and negative if it is
  // ahead. For example, for time zone UTC+10:00, -600 will be returned.
  var timezoneOffset = toInteger(date.getTimezoneOffset(), 0);
  var ts = timezoneOffset > 0 ? "-" : "+";
  var th = padStart(Math.floor(Math.abs(timezoneOffset) / 60), 2, "0");
  var tm = padStart(Math.abs(timezoneOffset) % 60, 2, "0");
  return "".concat(YYYY, "-").concat(MM, "-").concat(DD, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(mmm).concat(ts).concat(th, ":").concat(tm);
};
var rngBrowser = createCommonjsModule(function (module) {
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection

  // getRandomValues needs to be invoked in a context where "this" is a Crypto
  // implementation. Also, find the complete implementation of crypto on IE11.
  var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports = function whatwgRNG() {
      getRandomValues(rnds8);
      return rnds8;
    };
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }
      return rnds;
    };
  }
});

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}
function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}
var bytesToUuid_1 = bytesToUuid;
function v4(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rngBrowser)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }
  return buf || bytesToUuid_1(rnds);
}
var v4_1 = v4;

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Wraps a validator returning the value if it is null or undefined, otherwise
 * it will call the original validator and return the result.
 *
 * @param {function} validator - the validator to call if the value is not null
 */
var skipIfNull = function skipIfNull(validator) {
  return function skipIfNullValidator(value, path) {
    return value == null ? value : validator.call(this, value, path);
  };
};

/**
 * Returns a new validator that calls the first validator and then calls the second
 * validator with the result of the first validator. The result of the second validator
 * is returned.
 *
 * @param {function} firstValidator - validator to call first
 * @param {function} secondValidator - validator to call second
 * @returns {function} - a new validator that calls the first and second validators
 */
var callSequentially = function callSequentially(firstValidator, secondValidator) {
  return function callSequentiallyValidator(value, path) {
    return secondValidator.call(this, firstValidator.call(this, value, path), path);
  };
};

/**
 * Just like callSequentially, but if either validator throws an error, the errors
 * are collected and thrown at the end.
 *
 * @param {function} firstValidator
 * @param {function} secondValidator
 * @returns {function}
 */
var callSequentiallyJoinErrors = function callSequentiallyJoinErrors(firstValidator, secondValidator) {
  return function callSequentiallyJoinErrorsValidator(value, path) {
    var _this = this;
    var errors = [];
    var newValue = [firstValidator, secondValidator].reduce(function (memo, validator) {
      try {
        return validator.call(_this, memo, path);
      } catch (e) {
        errors.push(e);
        return memo;
      }
    }, value);
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
    return newValue;
  };
};

/**
 * Chains two validators together. In addition to calling the validators in
 * sequence, this will also copy over methods from the base validator to the
 * resulting validator and include any additional methods.
 *
 * @param {function} baseValidator - This validator will be called first, and its
 * methods will be copied over to the returned validator.
 * @param {function} newValidator - This validator will be called second.
 * @param {object} additionalMethods - Additional methods to include on the returned
 * validator.
 * @returns {function}
 */
var chain = function chain(baseValidator, newValidator, additionalMethods) {
  return (0, _reactorObjectAssign["default"])(callSequentially(baseValidator, newValidator), baseValidator, additionalMethods);
};

/**
 * Chains two validators together, but skips the second validator if the value
 * is null. In addition to calling the validators in sequence, this will also
 * copy over methods from the base validator to the resulting validator and
 * include any additional methods.
 *
 * @param {function} baseValidator - This validator will be called first, and its
 * methods will be copied over to the returned validator.
 * @param {function} newValidator - This validator will be called second. If the value
 * is null after the first validator is called, this validator will not be
 * called.
 * @param {object} additionalMethods - Additional methods to include on the returned
 * validator.
 * @returns {function}
 */
var nullSafeChain = function nullSafeChain(baseValidator, newValidator, additionalMethods) {
  return (0, _reactorObjectAssign["default"])(callSequentially(baseValidator, skipIfNull(newValidator)), baseValidator, additionalMethods);
};

/**
 * Same as nullSafeChain, but calls the new validator first.
 *
 * @param {function} baseValidator - This validator will be called second, and its
 * methods will be copied over to the returned validator.
 * @param {function} newValidator - This validator will be called first. If the value
 * is null, this validator will not be called.
 * @param {function} additionalMethods - Additional methods to include on the returned
 * validator.
 * @returns {function}
 */
var reverseNullSafeChainJoinErrors = function reverseNullSafeChainJoinErrors(baseValidator, newValidator, additionalMethods) {
  return (0, _reactorObjectAssign["default"])(callSequentiallyJoinErrors(skipIfNull(newValidator), baseValidator), baseValidator, additionalMethods);
};

/**
 * Throws an error if the value is not valid.
 *
 * @param {boolean} isValid - Whether or not the value is valid.
 * @param {*} value - The value to validate.
 * @param {string} path - The path to the value.
 * @param {string} message - The expected part of the error message.
 * @throws {Error} - Throws an error if the value is not valid.
 * @returns {void}
 */
var assertValid = function assertValid(isValid, value, path, message) {
  if (!isValid) {
    throw new Error("'".concat(path, "': Expected ").concat(message, ", but got ").concat(JSON.stringify(value), "."));
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var booleanValidator = function booleanValidator(value, path) {
  assertValid(isBoolean(value), value, path, "true or false");
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var callbackValidator = function callbackValidator(value, path) {
  assertValid(isFunction(value), value, path, "a function");
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createArrayOfValidator = function createArrayOfValidator(elementValidator) {
  return function arrayOf(value, path) {
    var _this2 = this;
    assertValid(Array.isArray(value), value, path, "an array");
    var errors = [];
    var validatedArray = value.map(function (subValue, i) {
      try {
        return elementValidator.call(_this2, subValue, "".concat(path, "[").concat(i, "]"), value);
      } catch (e) {
        errors.push(e.message);
        return undefined;
      }
    });
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
    return validatedArray;
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createDefaultValidator = function createDefaultValidator(defaultValue) {
  return function (value) {
    if (value == null) {
      return defaultValue;
    }
    return value;
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDeprecatedValidator = function createDeprecatedValidator(oldField, oldSchema, newField) {
  return function deprecated(value, path) {
    assertValid(isObject(value), value, path, "an object");
    var oldValue = value[oldField],
      newValue = value[newField],
      otherValues = _objectWithoutProperties(value, [oldField, newField].map(_toPropertyKey));
    var validatedOldValue = oldSchema(oldValue, path);
    if (validatedOldValue !== undefined) {
      var message = "The field '".concat(oldField, "' is deprecated. Use '").concat(newField, "' instead.");
      if (path) {
        message = "'".concat(path, "': ").concat(message);
      }
      if (newValue !== undefined && newValue !== validatedOldValue) {
        throw new Error(message);
      } else if (this && this.logger) {
        this.logger.warn(message);
      }
    }
    return _objectSpread(_defineProperty({}, newField, newValue || validatedOldValue), otherValues);
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createLiteralValidator = function createLiteralValidator(literalValue) {
  return function (value, path) {
    assertValid(value === literalValue, value, path, "".concat(literalValue));
    return value;
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createMapOfValuesValidator = function createMapOfValuesValidator(valueValidator) {
  return function mapOfValues(value, path) {
    var _this3 = this;
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(value).forEach(function (subKey) {
      var subValue = value[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;
      try {
        var validatedValue = valueValidator.call(_this3, subValue, subPath);
        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    });
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
    return validatedObject;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createMinimumValidator = function createMinimumValidator(typeName, minimum) {
  return function (value, path) {
    assertValid(value >= minimum, value, path, "".concat(typeName, " greater than or equal to ").concat(minimum));
    return value;
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createNoUnknownFieldsValidator = function createNoUnknownFieldsValidator(schema) {
  return function (value, path) {
    var errors = [];
    Object.keys(value).forEach(function (subKey) {
      if (!schema[subKey]) {
        var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;
        errors.push("'".concat(subPath, "': Unknown field."));
      }
    });
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
    return value;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createNonEmptyValidator = function createNonEmptyValidator(message) {
  return function (value, path) {
    if (isObject(value)) {
      assertValid(!isEmptyObject(value), value, path, message);
    } else {
      assertValid(value.length > 0, value, path, message);
    }
    return value;
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createObjectOfValidator = function createObjectOfValidator(schema) {
  return function objectOf(value, path) {
    var _this4 = this;
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(schema).forEach(function (subKey) {
      var subValue = value[subKey];
      var subSchema = schema[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;
      try {
        var validatedValue = subSchema.call(_this4, subValue, subPath);
        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    });

    // copy over unknown properties
    Object.keys(value).forEach(function (subKey) {
      if (!Object.prototype.hasOwnProperty.call(validatedObject, subKey)) {
        validatedObject[subKey] = value[subKey];
      }
    });
    if (errors.length) {
      throw new Error(errors.join("\n"));
    }
    return validatedObject;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createAnyOfValidator = function createAnyOfValidator(validators, message) {
  return function anyOf(value, path) {
    var _this5 = this;
    var newValue;
    var valid = find(validators, function (validator) {
      try {
        newValue = validator.call(_this5, value, path);
        return true;
      } catch (e) {
        return false;
      }
    });
    assertValid(valid, value, path, message);
    return newValue;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createUniqueValidator = function createUniqueValidator() {
  var values = [];
  return function (value, path) {
    assertValid(values.indexOf(value) === -1, value, path, "a unique value across instances");
    values.push(value);
    return value;
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Returns whether an array contains unique values.
 * @param {*} value
 * @returns {boolean}
 */
var isUnique = function isUnique(values) {
  var storedVals = Object.create(null);
  for (var _i6 = 0; _i6 < values.length; _i6 += 1) {
    var item = values[_i6];
    if (item in storedVals) {
      return false;
    }
    storedVals[item] = true;
  }
  return true;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createUniqueItemsValidator = function createUniqueItemsValidator() {
  return function (value, path) {
    assertValid(isUnique(value), value, path, "array values to be unique");
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var DOMAIN_REGEX = /^[a-z0-9.-]{1,}$/i;
var domainValidator = function domainValidator(value, path) {
  assertValid(DOMAIN_REGEX.test(value), value, path, "a valid domain");
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var integerValidator = function integerValidator(value, path) {
  assertValid(isInteger(value), value, path, "an integer");
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var numberValidator = function numberValidator(value, path) {
  assertValid(isNumber(value), value, path, "a number");
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether the value is a valid regular expression.
 * @param {*} value
 * @returns {boolean}
 */
var isValidRegExp = function isValidRegExp(value) {
  try {
    return new RegExp(value) !== null;
  } catch (e) {
    return false;
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var regexpValidator = function regexpValidator(value, path) {
  assertValid(isValidRegExp(value), value, path, "a regular expression");
  return value;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var requiredValidator = function requiredValidator(value, path) {
  if (value == null) {
    throw new Error("'".concat(path, "' is a required option"));
  }
  return value;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var stringValidator = function stringValidator(value, path) {
  assertValid(isString(value), value, path, "a string");
  return value;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// The base validator does no validation and just returns the value unchanged
var base = function base(value) {
  return value;
};

// The 'default', 'required', and 'deprecated' methods are available after any
// data-type method. Don't use the nullSafeChain on 'default' or 'required'
// because they need to handle the null or undefined case
base["default"] = function _default(defaultValue) {
  return chain(this, createDefaultValidator(defaultValue));
};
base.required = function required() {
  return chain(this, requiredValidator);
};

// helper validators
var domain = function domain() {
  return nullSafeChain(this, domainValidator);
};
var minimumInteger = function minimumInteger(minValue) {
  return nullSafeChain(this, createMinimumValidator("an integer", minValue));
};
var minimumNumber = function minimumNumber(minValue) {
  return nullSafeChain(this, createMinimumValidator("a number", minValue));
};
var integer = function integer() {
  return nullSafeChain(this, integerValidator, {
    minimum: minimumInteger
  });
};
var nonEmptyString = function nonEmptyString() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty string"));
};
var nonEmptyArray = function nonEmptyArray() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty array"));
};
var nonEmptyObject = function nonEmptyObject() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty object"));
};
var regexp = function regexp() {
  return nullSafeChain(this, regexpValidator);
};
var unique = function createUnique() {
  return nullSafeChain(this, createUniqueValidator());
};
var uniqueItems = function createUniqueItems() {
  return nullSafeChain(this, createUniqueItemsValidator());
};

// top-level validators.  These are the first functions that are called to create a validator.
var anyOf = function anyOf(validators, message) {
  // use chain here because we don't want to accept null or undefined unless at least
  // one of the validators accept null or undefined.
  return chain(this, createAnyOfValidator(validators, message));
};
var anything = function anything() {
  return this;
};
var arrayOf = function arrayOf(elementValidator) {
  return nullSafeChain(this, createArrayOfValidator(elementValidator), {
    nonEmpty: nonEmptyArray,
    uniqueItems: uniqueItems
  });
};
var _boolean = function _boolean2() {
  return nullSafeChain(this, booleanValidator);
};
var callback = function callback() {
  return nullSafeChain(this, callbackValidator);
};
var literal = function literal(literalValue) {
  return nullSafeChain(this, createLiteralValidator(literalValue));
};
var number = function number() {
  return nullSafeChain(this, numberValidator, {
    minimum: minimumNumber,
    integer: integer,
    unique: unique
  });
};
var mapOfValues = function mapOfValues(valuesValidator) {
  return nullSafeChain(this, createMapOfValuesValidator(valuesValidator), {
    nonEmpty: nonEmptyObject
  });
};
var createObjectOfAdditionalProperties = function createObjectOfAdditionalProperties(schema) {
  return {
    noUnknownFields: function noUnknownFields() {
      return nullSafeChain(this, createNoUnknownFieldsValidator(schema));
    },
    nonEmpty: nonEmptyObject,
    concat: function concat(otherObjectOfValidator) {
      // combine the schema so that noUnknownFields, and concat have the combined schema
      var newSchema = _objectSpread(_objectSpread({}, schema), otherObjectOfValidator.schema);
      return nullSafeChain(this, otherObjectOfValidator, createObjectOfAdditionalProperties(newSchema));
    },
    deprecated: function deprecated(oldField, oldSchema, newField) {
      // Run the deprecated validator first so that the deprecated field is removed
      // before the objectOf validator runs.
      return reverseNullSafeChainJoinErrors(this, createDeprecatedValidator(oldField, oldSchema, newField));
    },
    schema: schema
  };
};
var objectOf = function objectOf(schema) {
  return nullSafeChain(this, createObjectOfValidator(schema), createObjectOfAdditionalProperties(schema));
};
var string = function string() {
  return nullSafeChain(this, stringValidator, {
    regexp: regexp,
    domain: domain,
    nonEmpty: nonEmptyString,
    unique: unique
  });
};
var boundAnyOf = anyOf.bind(base);
var boundAnything = anything.bind(base);
var boundArrayOf = arrayOf.bind(base);
var boundBoolean = _boolean.bind(base);
var boundCallback = callback.bind(base);
var boundLiteral = literal.bind(base);
number.bind(base);
var boundMapOfValues = mapOfValues.bind(base);
var boundObjectOf = objectOf.bind(base);
var boundString = string.bind(base);

// compound validators
var boundEnumOf = function boundEnumOf() {
  for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    values[_key4] = arguments[_key4];
  }
  return boundAnyOf(values.map(boundLiteral), "one of these values: [".concat(JSON.stringify(values), "]"));
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var AMBIGUOUS = "ambiguous";
var AUTHENTICATED = "authenticated";
var LOGGED_OUT = "loggedOut";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateIdentityMap = boundMapOfValues(boundArrayOf(boundObjectOf({
  authenticatedState: boundEnumOf(AMBIGUOUS, AUTHENTICATED, LOGGED_OUT),
  id: boundString(),
  namespace: boundObjectOf({
    code: boundString()
  }).noUnknownFields(),
  primary: boundBoolean(),
  xid: boundString()
}).noUnknownFields()).required());

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateConfigOverride = boundObjectOf({});

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array whose items are the provided object's own enumerable
 * property values.
 * @param {Object} obj
 * @returns {Array}
 */
var values = function values(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var debugQueryParam = "alloy_debug";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createLogController = function createLogController(_ref10) {
  var console = _ref10.console,
    locationSearch = _ref10.locationSearch,
    createLogger = _ref10.createLogger,
    instanceName = _ref10.instanceName,
    createNamespacedStorage = _ref10.createNamespacedStorage,
    getMonitors = _ref10.getMonitors;
  var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);
  var storage = createNamespacedStorage("instance.".concat(instanceName, "."));
  var debugSessionValue = storage.session.getItem("debug");
  var debugEnabled = debugSessionValue === "true";
  var debugEnabledWritableFromConfig = debugSessionValue === null;
  var getDebugEnabled = function getDebugEnabled() {
    return debugEnabled;
  };
  var setDebugEnabled = function setDebugEnabled(value, _ref11) {
    var fromConfig = _ref11.fromConfig;
    if (!fromConfig || debugEnabledWritableFromConfig) {
      debugEnabled = value;
    }
    if (!fromConfig) {
      // Web storage only allows strings, so we explicitly convert to string.
      storage.session.setItem("debug", value.toString());
      debugEnabledWritableFromConfig = false;
    }
  };
  if (parsedQueryString[debugQueryParam] !== undefined) {
    setDebugEnabled(stringToBoolean(parsedQueryString[debugQueryParam]), {
      fromConfig: false
    });
  }
  return {
    setDebugEnabled: setDebugEnabled,
    logger: createLogger({
      getDebugEnabled: getDebugEnabled,
      context: {
        instanceName: instanceName
      },
      getMonitors: getMonitors,
      console: console
    }),
    createComponentLogger: function createComponentLogger(componentName) {
      return createLogger({
        getDebugEnabled: getDebugEnabled,
        context: {
          instanceName: instanceName,
          componentName: componentName
        },
        getMonitors: getMonitors,
        console: console
      });
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// TO-DOCUMENT: Lifecycle hooks and their params.
var hookNames = [
// Called after all components have been registered.
"onComponentsRegistered",
// Called before an event is sent on a data collection request
"onBeforeEvent",
// Called before each request is made to the edge.
"onBeforeRequest",
// Called after each response is returned from the edge with a successful
// status code
"onResponse",
// Called after a network request to the edge fails. Either the request
// didn't make it to the edge, didn't make it to Konductor, or Konductor
// failed to return a regularly-structured response. (In this case { error }
// is passed as the parameter)
// Also called when the respone returns a 400 or 500 error. (In this case
// { response } is passed as the parameter)
"onRequestFailure",
// A user clicked on an element.
"onClick",
// Called by DecisioningEngine when a ruleset is satisfied with a list of
// propositions
"onDecision"];
var createHook = function createHook(componentRegistry, hookName) {
  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return Promise.all(componentRegistry.getLifecycleCallbacks(hookName).map(function (callback) {
      return new Promise(function (resolve) {
        resolve(callback.apply(void 0, args));
      });
    }));
  };
};

/**
 * This ensures that if a component's lifecycle method X
 * attempts to execute lifecycle method Y, that all X methods on all components
 * will have been called before any of their Y methods are called. It does
 * this by kicking the call to the Y method to the next JavaScript tick.
 * @returns {function}
 */
var guardHook = function guardHook(fn) {
  return function () {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    return Promise.resolve().then(function () {
      return fn.apply(void 0, args);
    });
  };
};
var createLifecycle = function createLifecycle(componentRegistry) {
  return hookNames.reduce(function (memo, hookName) {
    memo[hookName] = guardHook(createHook(componentRegistry, hookName));
    return memo;
  }, {});
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var wrapForErrorHandling = function wrapForErrorHandling(fn, stackMessage) {
  return function () {
    var result;
    try {
      result = fn.apply(void 0, arguments);
    } catch (error) {
      throw stackError({
        error: error,
        message: stackMessage
      });
    }
    if (result instanceof Promise) {
      result = result["catch"](function (error) {
        throw stackError({
          error: error,
          message: stackMessage
        });
      });
    }
    return result;
  };
};

// TO-DOCUMENT: All public commands and their signatures.
var createComponentRegistry = function createComponentRegistry() {
  var commandsByName = {};
  var lifecycleCallbacksByName = {};
  var registerComponentCommands = function registerComponentCommands(namespace) {
    var componentCommandsByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conflictingCommandNames = intersection(Object.keys(commandsByName), Object.keys(componentCommandsByName));
    if (conflictingCommandNames.length) {
      throw new Error("[ComponentRegistry] Could not register ".concat(namespace, " ") + "because it has existing command(s): ".concat(conflictingCommandNames.join(",")));
    }
    Object.keys(componentCommandsByName).forEach(function (commandName) {
      var command = componentCommandsByName[commandName];
      command.commandName = commandName;
      command.run = wrapForErrorHandling(command.run, "[".concat(namespace, "] An error occurred while executing the ").concat(commandName, " command."));
      commandsByName[commandName] = command;
    });
  };
  var registerLifecycleCallbacks = function registerLifecycleCallbacks(namespace) {
    var componentLifecycleCallbacksByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(componentLifecycleCallbacksByName).forEach(function (hookName) {
      lifecycleCallbacksByName[hookName] = lifecycleCallbacksByName[hookName] || [];
      lifecycleCallbacksByName[hookName].push(wrapForErrorHandling(componentLifecycleCallbacksByName[hookName], "[".concat(namespace, "] An error occurred while executing the ").concat(hookName, " lifecycle hook.")));
    });
  };
  return {
    register: function register(namespace, component) {
      var commands = component.commands,
        lifecycle = component.lifecycle;
      registerComponentCommands(namespace, commands);
      registerLifecycleCallbacks(namespace, lifecycle);
    },
    getCommand: function getCommand(commandName) {
      return commandsByName[commandName];
    },
    getCommandNames: function getCommandNames() {
      return Object.keys(commandsByName);
    },
    getLifecycleCallbacks: function getLifecycleCallbacks(hookName) {
      return lifecycleCallbacksByName[hookName] || [];
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectSendNetworkRequest = function injectSendNetworkRequest(_ref12) {
  var logger = _ref12.logger,
    sendFetchRequest = _ref12.sendFetchRequest,
    sendBeaconRequest = _ref12.sendBeaconRequest,
    isRequestRetryable = _ref12.isRequestRetryable,
    getRequestRetryDelay = _ref12.getRequestRetryDelay;
  /**
   * Send a network request and returns details about the response.
   */
  return function (_ref13) {
    var requestId = _ref13.requestId,
      url = _ref13.url,
      payload = _ref13.payload,
      useSendBeacon = _ref13.useSendBeacon;
    // We want to log raw payload and event data rather than
    // our fancy wrapper objects. Calling payload.toJSON() is
    // insufficient to get all the nested raw data, because it's
    // not recursive (it doesn't call toJSON() on the event objects).
    // Parsing the result of JSON.stringify(), however, gives the
    // fully recursive raw data.
    var stringifiedPayload = JSON.stringify(payload);
    var parsedPayload = JSON.parse(stringifiedPayload);
    logger.logOnBeforeNetworkRequest({
      url: url,
      requestId: requestId,
      payload: parsedPayload
    });
    var executeRequest = function executeRequest() {
      var retriesAttempted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var requestMethod = useSendBeacon ? sendBeaconRequest : sendFetchRequest;
      return requestMethod(url, stringifiedPayload).then(function (response) {
        var requestIsRetryable = isRequestRetryable({
          response: response,
          retriesAttempted: retriesAttempted
        });
        if (requestIsRetryable) {
          var requestRetryDelay = getRequestRetryDelay({
            response: response,
            retriesAttempted: retriesAttempted
          });
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(executeRequest(retriesAttempted + 1));
            }, requestRetryDelay);
          });
        }
        var parsedBody;
        try {
          parsedBody = JSON.parse(response.body);
        } catch (e) {
          // Non-JSON. Something went wrong.
        }
        logger.logOnNetworkResponse(_objectSpread(_objectSpread({
          requestId: requestId,
          url: url,
          payload: parsedPayload
        }, response), {}, {
          parsedBody: parsedBody,
          retriesAttempted: retriesAttempted
        }));
        return {
          statusCode: response.statusCode,
          body: response.body,
          parsedBody: parsedBody,
          getHeader: response.getHeader
        };
      });
    };
    return executeRequest()["catch"](function (error) {
      logger.logOnNetworkError({
        requestId: requestId,
        url: url,
        payload: parsedPayload,
        error: error
      });
      throw stackError({
        error: error,
        message: "Network request failed."
      });
    });
  };
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectExtractEdgeInfo = function injectExtractEdgeInfo(_ref14) {
  var logger = _ref14.logger;
  return function (adobeEdgeHeader) {
    if (adobeEdgeHeader) {
      var headerParts = adobeEdgeHeader.split(";");
      if (headerParts.length >= 2 && headerParts[1].length > 0) {
        try {
          var regionId = parseInt(headerParts[1], 10);
          // eslint recommends using Number.isNaN instead, but this function is
          // not available in Internet Explorer. Number.isNaN is more robust to
          // non-numeric parameters. Since we already know regionId will be an
          // integer, using isNaN is okay.
          // https://github.com/airbnb/javascript#standard-library--isnan
          // eslint-disable-next-line no-restricted-globals
          if (!isNaN(regionId)) {
            return {
              regionId: regionId
            };
          }
        } catch (e) {
          // No need to do anything. The log statement below will log an error
        }
      }
      logger.warn("Invalid adobe edge: \"".concat(adobeEdgeHeader, "\""));
    }
    return {};
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var IN = "in";
var OUT = "out";
var PENDING = "pending";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var GENERAL = "general";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var DECLINED_CONSENT_ERROR_CODE = "declinedConsent";
var CONSENT_SOURCE_DEFAULT = "default";
var CONSENT_SOURCE_INITIAL = "initial";
var CONSENT_SOURCE_NEW = "new";
var createDeclinedConsentError = function createDeclinedConsentError(errorMessage) {
  var error = new Error(errorMessage);
  error.code = DECLINED_CONSENT_ERROR_CODE;
  error.message = errorMessage;
  return error;
};
var createConsentStateMachine = function createConsentStateMachine(_ref15) {
  var logger = _ref15.logger;
  var deferreds = [];
  var runAll = function runAll() {
    while (deferreds.length) {
      deferreds.shift().resolve();
    }
  };
  var discardAll = function discardAll() {
    while (deferreds.length) {
      deferreds.shift().reject(createDeclinedConsentError("The user declined consent."));
    }
  };
  var awaitInitial = function awaitInitial() {
    return Promise.reject(new Error("Consent has not been initialized."));
  };
  var awaitInDefault = function awaitInDefault() {
    return Promise.resolve();
  };
  var awaitIn = function awaitIn() {
    return Promise.resolve();
  };
  var awaitOutDefault = function awaitOutDefault() {
    return Promise.reject(createDeclinedConsentError("No consent preferences have been set."));
  };
  var awaitOut = function awaitOut() {
    return Promise.reject(createDeclinedConsentError("The user declined consent."));
  };
  var awaitPending = function awaitPending(returnImmediately) {
    if (returnImmediately) {
      return Promise.reject(new Error("Consent is pending."));
    }
    var deferred = defer();
    deferreds.push(deferred);
    return deferred.promise;
  };
  return {
    "in": function _in(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        this.awaitConsent = awaitInDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.info("Loaded user consent preferences. The user previously consented.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitIn) {
          logger.info("User consented.");
        }
        runAll();
        this.awaitConsent = awaitIn;
      }
    },
    out: function out(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.warn("User consent preferences not found. Default consent of out will be used.");
        this.awaitConsent = awaitOutDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.warn("Loaded user consent preferences. The user previously declined consent.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitOut) {
          logger.warn("User declined consent.");
        }
        discardAll();
        this.awaitConsent = awaitOut;
      }
    },
    pending: function pending(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.info("User consent preferences not found. Default consent of pending will be used. Some commands may be delayed.");
      }
      this.awaitConsent = awaitPending;
    },
    awaitConsent: awaitInitial,
    withConsent: function withConsent() {
      return this.awaitConsent(true);
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createConsent = function createConsent(_ref16) {
  var generalConsentState = _ref16.generalConsentState,
    logger = _ref16.logger;
  var _setConsent = function setConsent(consentByPurpose, source) {
    switch (consentByPurpose[GENERAL]) {
      case IN:
        generalConsentState["in"](source);
        break;
      case OUT:
        generalConsentState.out(source);
        break;
      case PENDING:
        generalConsentState.pending(source);
        break;
      default:
        logger.warn("Unknown consent value: ".concat(consentByPurpose[GENERAL]));
        break;
    }
  };
  return {
    initializeConsent: function initializeConsent(defaultConsentByPurpose, storedConsentByPurpose) {
      if (storedConsentByPurpose[GENERAL]) {
        _setConsent(storedConsentByPurpose, CONSENT_SOURCE_INITIAL);
      } else {
        _setConsent(defaultConsentByPurpose, CONSENT_SOURCE_DEFAULT);
      }
    },
    setConsent: function setConsent(consentByPurpose) {
      _setConsent(consentByPurpose, CONSENT_SOURCE_NEW);
    },
    suspend: function suspend() {
      generalConsentState.pending();
    },
    awaitConsent: function awaitConsent() {
      return generalConsentState.awaitConsent();
    },
    withConsent: function withConsent() {
      return generalConsentState.withConsent();
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getXdmPropositions = function getXdmPropositions(xdm) {
  return xdm &&
  // eslint-disable-next-line no-underscore-dangle
  xdm._experience &&
  // eslint-disable-next-line no-underscore-dangle
  xdm._experience.decisioning &&
  // eslint-disable-next-line no-underscore-dangle
  isNonEmptyArray(xdm._experience.decisioning.propositions) ?
  // eslint-disable-next-line no-underscore-dangle
  xdm._experience.decisioning.propositions : [];
};
var createEvent = function createEvent() {
  var content = {};
  var userXdm;
  var userData;
  var _documentMayUnload = false;
  var isFinalized = false;
  var shouldSendEvent = true;
  var throwIfEventFinalized = function throwIfEventFinalized(methodName) {
    if (isFinalized) {
      throw new Error("".concat(methodName, " cannot be called after event is finalized."));
    }
  };
  var event = {
    hasQuery: function hasQuery() {
      return Object.prototype.hasOwnProperty.call(this.getContent(), "query");
    },
    getContent: function getContent() {
      var currentContent = JSON.parse(JSON.stringify(content));
      if (userXdm) {
        deepAssign(currentContent, {
          xdm: userXdm
        });
      }
      if (userData) {
        deepAssign(currentContent, {
          data: userData
        });
      }
      return currentContent;
    },
    setUserXdm: function setUserXdm(value) {
      throwIfEventFinalized("setUserXdm");
      userXdm = value;
    },
    setUserData: function setUserData(value) {
      throwIfEventFinalized("setUserData");
      userData = value;
    },
    mergeXdm: function mergeXdm(xdm) {
      throwIfEventFinalized("mergeXdm");
      if (xdm) {
        deepAssign(content, {
          xdm: xdm
        });
      }
    },
    mergeData: function mergeData(data) {
      throwIfEventFinalized("mergeData");
      if (data) {
        deepAssign(content, {
          data: data
        });
      }
    },
    mergeMeta: function mergeMeta(meta) {
      throwIfEventFinalized("mergeMeta");
      if (meta) {
        deepAssign(content, {
          meta: meta
        });
      }
    },
    mergeQuery: function mergeQuery(query) {
      throwIfEventFinalized("mergeQuery");
      if (query) {
        deepAssign(content, {
          query: query
        });
      }
    },
    documentMayUnload: function documentMayUnload() {
      _documentMayUnload = true;
    },
    finalize: function finalize(onBeforeEventSend) {
      if (isFinalized) {
        return;
      }
      var newPropositions = deduplicateArray([].concat(_toConsumableArray(getXdmPropositions(userXdm)), _toConsumableArray(getXdmPropositions(content.xdm))), function (a, b) {
        return a === b || a.id && b.id && a.id === b.id && a.scope && b.scope && a.scope === b.scope;
      });
      if (userXdm) {
        this.mergeXdm(userXdm);
      }
      if (newPropositions.length > 0) {
        // eslint-disable-next-line no-underscore-dangle
        content.xdm._experience.decisioning.propositions = newPropositions;
      }
      if (userData) {
        event.mergeData(userData);
      }

      // the event should already be considered finalized in case onBeforeEventSend throws an error
      isFinalized = true;
      if (onBeforeEventSend) {
        // assume that the onBeforeEventSend callback will fail (in-case of an error)
        shouldSendEvent = false;

        // this allows the user to replace the xdm and data properties
        // on the object passed to the callback
        var tempContent = {
          xdm: content.xdm || {},
          data: content.data || {}
        };
        var result = onBeforeEventSend(tempContent);
        shouldSendEvent = result !== false;
        content.xdm = tempContent.xdm || {};
        content.data = tempContent.data || {};
        if (isEmptyObject(content.xdm)) {
          delete content.xdm;
        }
        if (isEmptyObject(content.data)) {
          delete content.data;
        }
      }
    },
    getDocumentMayUnload: function getDocumentMayUnload() {
      return _documentMayUnload;
    },
    isEmpty: function isEmpty() {
      return isEmptyObject(content) && (!userXdm || isEmptyObject(userXdm)) && (!userData || isEmptyObject(userData));
    },
    shouldSend: function shouldSend() {
      return shouldSendEvent;
    },
    getViewName: function getViewName() {
      if (!userXdm || !userXdm.web || !userXdm.web.webPageDetails) {
        return undefined;
      }
      return userXdm.web.webPageDetails.viewName;
    },
    toJSON: function toJSON() {
      if (!isFinalized) {
        throw new Error("toJSON called before finalize");
      }
      return content;
    }
  };
  return event;
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var RETRY_AFTER = "Retry-After";
var ADOBE_EDGE = "x-adobe-edge";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a representation of a gateway response with the addition of
 * helper methods.
 * @returns Response
 */
var injectCreateResponse = function injectCreateResponse(_ref17) {
  var extractEdgeInfo = _ref17.extractEdgeInfo;
  return function (_ref18) {
    var _ref18$content = _ref18.content,
      content = _ref18$content === void 0 ? {} : _ref18$content,
      getHeader = _ref18.getHeader;
    var _content$handle = content.handle,
      handle = _content$handle === void 0 ? [] : _content$handle,
      _content$errors = content.errors,
      errors = _content$errors === void 0 ? [] : _content$errors,
      _content$warnings = content.warnings,
      warnings = _content$warnings === void 0 ? [] : _content$warnings;
    /**
     * Response object.
     * @typedef {Object} Response
     */
    return {
      /**
       * Returns matching fragments of the response by type.
       * @param {String} type A string with the current format: <namespace:action>
       *
       * @example
       * getPayloadsByType("identity:persist")
       */
      getPayloadsByType: function getPayloadsByType(type) {
        return flatMap(handle.filter(function (fragment) {
          return fragment.type === type;
        }), function (fragment) {
          return fragment.payload;
        });
      },
      /**
       * Returns all errors.
       */
      getErrors: function getErrors() {
        return errors;
      },
      /**
       * Returns all warnings.
       */
      getWarnings: function getWarnings() {
        return warnings;
      },
      /**
       * Returns an object containing the regionId from the x-adobe-edge header
       */
      getEdge: function getEdge() {
        return extractEdgeInfo(getHeader(ADOBE_EDGE));
      },
      toJSON: function toJSON() {
        return content;
      }
    };
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var CONFIGURE = "configure";
var SET_DEBUG = "setDebug";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectExecuteCommand = function injectExecuteCommand(_ref19) {
  var logger = _ref19.logger,
    configureCommand = _ref19.configureCommand,
    setDebugCommand = _ref19.setDebugCommand,
    handleError = _ref19.handleError,
    validateCommandOptions = _ref19.validateCommandOptions;
  var configurePromise;
  var getExecutor = function getExecutor(commandName, options) {
    var executor;
    if (commandName === CONFIGURE) {
      if (configurePromise) {
        throw new Error("The library has already been configured and may only be configured once.");
      }
      executor = function executor() {
        configurePromise = configureCommand(options);
        return configurePromise.then(function () {
          // Don't expose internals to the user.
        });
      };
    } else {
      if (!configurePromise) {
        throw new Error("The library must be configured first. Please do so by executing the configure command.");
      }
      if (commandName === SET_DEBUG) {
        executor = function executor() {
          return setDebugCommand(options);
        };
      } else {
        executor = function executor() {
          return configurePromise.then(function (componentRegistry) {
            var command = componentRegistry.getCommand(commandName);
            if (!command || !isFunction(command.run)) {
              var commandNames = [CONFIGURE, SET_DEBUG].concat(componentRegistry.getCommandNames()).join(", ");
              throw new Error("The ".concat(commandName, " command does not exist. List of available commands: ").concat(commandNames, "."));
            }
            var validatedOptions = validateCommandOptions({
              command: command,
              options: options
            });
            return command.run(validatedOptions);
          }, function () {
            logger.warn("An error during configuration is preventing the ".concat(commandName, " command from executing."));
            // If configuration failed, we prevent the configuration
            // error from bubbling here because we don't want the
            // configuration error to be reported in the console every
            // time any command is executed. Only having it bubble
            // once when the configure command runs is sufficient.
            // Instead, for this command, we'll just return a promise
            // that never gets resolved.
            return new Promise(function () {});
          });
        };
      }
    }
    return executor;
  };
  return function (commandName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      // We have to wrap the getExecutor() call in the promise so the promise
      // will be rejected if getExecutor() throws errors.
      var executor = getExecutor(commandName, options);
      logger.logOnBeforeCommand({
        commandName: commandName,
        options: options
      });
      resolve(executor());
    })["catch"](function (error) {
      return handleError(error, "".concat(commandName, " command"));
    })["catch"](function (error) {
      logger.logOnCommandRejected({
        commandName: commandName,
        options: options,
        error: error
      });
      throw error;
    }).then(function (rawResult) {
      // We should always be returning an object from every command.
      var result = isObject(rawResult) ? rawResult : {};
      logger.logOnCommandResolved({
        commandName: commandName,
        options: options,
        result: result
      });
      return result;
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var COMMAND_DOC_URI = "https://adobe.ly/3sHgQHb";
var validateCommandOptions = function validateCommandOptions(_ref20) {
  var command = _ref20.command,
    options = _ref20.options;
  var commandName = command.commandName,
    _command$documentatio = command.documentationUri,
    documentationUri = _command$documentatio === void 0 ? COMMAND_DOC_URI : _command$documentatio,
    optionsValidator = command.optionsValidator;
  var validatedOptions = options;
  if (optionsValidator) {
    try {
      validatedOptions = optionsValidator(options);
    } catch (validationError) {
      var invalidOptionsMessage = "Invalid ".concat(commandName, " command options:\n\t - ").concat(validationError, " For command documentation see: ").concat(documentationUri);
      throw new Error(invalidOptionsMessage);
    }
  }
  return validatedOptions;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */
var validateUserEventOptions = function validateUserEventOptions(_ref21) {
  var options = _ref21.options;
  var eventOptionsValidator = boundObjectOf({
    type: boundString(),
    xdm: boundObjectOf({
      eventType: boundString(),
      identityMap: validateIdentityMap
    }),
    data: boundObjectOf({}),
    documentUnloading: boundBoolean(),
    renderDecisions: boundBoolean(),
    decisionScopes: boundArrayOf(boundString()).uniqueItems(),
    personalization: boundObjectOf({
      decisionScopes: boundArrayOf(boundString()).uniqueItems(),
      surfaces: boundArrayOf(boundString()).uniqueItems(),
      sendDisplayEvent: boundBoolean()["default"](true),
      includeRenderedPropositions: boundBoolean()["default"](false),
      defaultPersonalizationEnabled: boundBoolean(),
      decisionContext: boundObjectOf({})
    })["default"]({
      sendDisplayEvent: true
    }),
    datasetId: boundString(),
    mergeId: boundString(),
    edgeConfigOverrides: validateConfigOverride,
    initializePersonalization: boundBoolean()
  }).required().noUnknownFields();
  return eventOptionsValidator(options);
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateApplyResponse = function validateApplyResponse(_ref22) {
  var options = _ref22.options;
  var validator = boundObjectOf({
    renderDecisions: boundBoolean(),
    responseHeaders: boundMapOfValues(boundString().required()),
    responseBody: boundObjectOf({
      handle: boundArrayOf(boundObjectOf({
        type: boundString().required(),
        payload: boundAnything().required()
      })).required()
    }).required(),
    personalization: boundObjectOf({
      sendDisplayEvent: boundBoolean()["default"](true),
      decisionContext: boundObjectOf({})
    })["default"]({
      sendDisplayEvent: true
    })
  }).noUnknownFields();
  return validator(options);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDataCollector = function createDataCollector(_ref23) {
  var eventManager = _ref23.eventManager,
    logger = _ref23.logger;
  return {
    commands: {
      sendEvent: {
        documentationUri: "https://adobe.ly/3GQ3Q7t",
        optionsValidator: function optionsValidator(options) {
          return validateUserEventOptions({
            options: options
          });
        },
        run: function run(options) {
          var xdm = options.xdm,
            data = options.data,
            documentUnloading = options.documentUnloading,
            type = options.type,
            mergeId = options.mergeId,
            datasetId = options.datasetId,
            edgeConfigOverrides = options.edgeConfigOverrides,
            eventManagerOptions = _objectWithoutProperties(options, ["xdm", "data", "documentUnloading", "type", "mergeId", "datasetId", "edgeConfigOverrides"]);
          var event = eventManager.createEvent();
          if (documentUnloading) {
            event.documentMayUnload();
          }
          event.setUserXdm(xdm);
          event.setUserData(data);
          if (type) {
            event.mergeXdm({
              eventType: type
            });
          }
          if (mergeId) {
            event.mergeXdm({
              eventMergeId: mergeId
            });
          }
          if (edgeConfigOverrides) {
            eventManagerOptions.edgeConfigOverrides = edgeConfigOverrides;
          }
          if (datasetId) {
            logger.warn("The 'datasetId' option has been deprecated. Please use 'edgeConfigOverrides.com_adobe_experience_platform.datasets.event.datasetId' instead.");
            eventManagerOptions.edgeConfigOverrides = edgeConfigOverrides || {};
            deepAssign(eventManagerOptions.edgeConfigOverrides, {
              com_adobe_experience_platform: {
                datasets: {
                  event: {
                    datasetId: datasetId
                  }
                }
              }
            });
          }
          return eventManager.sendEvent(event, eventManagerOptions);
        }
      },
      applyResponse: {
        documentationUri: "",
        optionsValidator: function optionsValidator(options) {
          return validateApplyResponse({
            options: options
          });
        },
        run: function run(options) {
          var _options$renderDecisi = options.renderDecisions,
            renderDecisions = _options$renderDecisi === void 0 ? false : _options$renderDecisi,
            _options$decisionCont = options.decisionContext,
            decisionContext = _options$decisionCont === void 0 ? {} : _options$decisionCont,
            _options$responseHead = options.responseHeaders,
            responseHeaders = _options$responseHead === void 0 ? {} : _options$responseHead,
            _options$responseBody = options.responseBody,
            responseBody = _options$responseBody === void 0 ? {
              handle: []
            } : _options$responseBody,
            personalization = options.personalization;
          var event = eventManager.createEvent();
          return eventManager.applyResponse(event, {
            renderDecisions: renderDecisions,
            decisionContext: decisionContext,
            responseHeaders: responseHeaders,
            responseBody: responseBody,
            personalization: personalization
          });
        }
      }
    }
  };
};
createDataCollector.namespace = "DataCollector";

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createClickHandler = function createClickHandler(_ref24) {
  var eventManager = _ref24.eventManager,
    lifecycle = _ref24.lifecycle,
    handleError = _ref24.handleError;
  return function (clickEvent) {
    // TODO: Consider safeguarding from the same object being clicked multiple times in rapid succession?
    var clickedElement = clickEvent.target;
    var event = eventManager.createEvent();
    // this is to make sure a exit link personalization metric use send beacon
    event.documentMayUnload();
    return lifecycle.onClick({
      event: event,
      clickedElement: clickedElement
    }).then(function () {
      if (event.isEmpty()) {
        return Promise.resolve();
      }
      return eventManager.sendEvent(event);
    })
    // eventManager.sendEvent() will return a promise resolved to an
    // object and we want to avoid returning any value to the customer
    .then(noop)["catch"](function (error) {
      handleError(error, "click collection");
    });
  };
};
var attachClickActivityCollector = function attachClickActivityCollector(_ref25) {
  var eventManager = _ref25.eventManager,
    lifecycle = _ref25.lifecycle,
    handleError = _ref25.handleError;
  var clickHandler = createClickHandler({
    eventManager: eventManager,
    lifecycle: lifecycle,
    handleError: handleError
  });
  document.addEventListener("click", clickHandler, true);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var downloadLinkQualifier = boundString().regexp()["default"]("\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$");
var configValidators = boundObjectOf({
  clickCollectionEnabled: boundBoolean()["default"](true),
  onBeforeLinkClickSend: boundCallback(),
  downloadLinkQualifier: downloadLinkQualifier
});

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createLinkClick = function createLinkClick(_ref26) {
  var getLinkDetails = _ref26.getLinkDetails,
    config = _ref26.config,
    logger = _ref26.logger;
  var clickCollectionEnabled = config.clickCollectionEnabled;
  if (!clickCollectionEnabled) {
    return function () {
      return undefined;
    };
  }
  return function (_ref27) {
    var targetElement = _ref27.targetElement,
      event = _ref27.event;
    var linkDetails = getLinkDetails({
      targetElement: targetElement,
      config: config,
      logger: logger
    });
    if (linkDetails) {
      event.mergeXdm(linkDetails.xdm);
      event.setUserData(linkDetails.data);
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createGetLinkDetails = function createGetLinkDetails(_ref28) {
  var window = _ref28.window,
    getLinkName = _ref28.getLinkName,
    getLinkRegion = _ref28.getLinkRegion,
    getAbsoluteUrlFromAnchorElement = _ref28.getAbsoluteUrlFromAnchorElement,
    findSupportedAnchorElement = _ref28.findSupportedAnchorElement,
    determineLinkType = _ref28.determineLinkType;
  return function (_ref29) {
    var targetElement = _ref29.targetElement,
      config = _ref29.config,
      logger = _ref29.logger;
    var anchorElement = findSupportedAnchorElement(targetElement);
    if (!anchorElement) {
      logger.info("This link click event is not triggered because the HTML element is not an anchor.");
      return undefined;
    }
    var linkUrl = getAbsoluteUrlFromAnchorElement(window, anchorElement);
    if (!linkUrl) {
      logger.info("This link click event is not triggered because the HTML element doesn't have an URL.");
      return undefined;
    }
    var linkType = determineLinkType(window, config, linkUrl, anchorElement);
    var linkRegion = getLinkRegion(anchorElement);
    var linkName = getLinkName(anchorElement);
    var onBeforeLinkClickSend = config.onBeforeLinkClickSend;
    var options = {
      xdm: {
        eventType: "web.webinteraction.linkClicks",
        web: {
          webInteraction: {
            name: linkName,
            region: linkRegion,
            type: linkType,
            URL: linkUrl,
            linkClicks: {
              value: 1
            }
          }
        }
      },
      data: {},
      clickedElement: targetElement
    };
    if (!onBeforeLinkClickSend) {
      return options;
    }
    var shouldEventBeTracked = onBeforeLinkClickSend(options);
    if (shouldEventBeTracked !== false) {
      return options;
    }
    logger.info("This link click event is not triggered because it was canceled in onBeforeLinkClickSend.");
    return undefined;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var urlStartsWithScheme = function urlStartsWithScheme(url) {
  return url && /^[a-z0-9]+:\/\//i.test(url);
};
var getAbsoluteUrlFromAnchorElement = function getAbsoluteUrlFromAnchorElement(window, element) {
  var loc = window.location;
  var url = element.href ? element.href : "";
  var protocol = element.protocol,
    host = element.host;
  if (!urlStartsWithScheme(url)) {
    if (!protocol) {
      protocol = loc.protocol ? loc.protocol : "";
    }
    protocol = protocol ? "".concat(protocol, "//") : "";
    if (!host) {
      host = loc.host ? loc.host : "";
    }
    var path = "";
    if (url.substring(0, 1) !== "/") {
      var indx = loc.pathname.lastIndexOf("/");
      indx = indx < 0 ? 0 : indx;
      path = loc.pathname.substring(0, indx);
    }
    url = "".concat(protocol).concat(host).concat(path, "/").concat(url);
  }
  return url;
};
var isSupportedAnchorElement = function isSupportedAnchorElement(element) {
  if (element.href && (element.tagName === "A" || element.tagName === "AREA") && (!element.onclick || !element.protocol || element.protocol.toLowerCase().indexOf("javascript") < 0)) {
    return true;
  }
  return false;
};
var trimQueryFromUrl = function trimQueryFromUrl(url) {
  var questionMarkIndex = url.indexOf("?");
  var hashIndex = url.indexOf("#");
  if (questionMarkIndex >= 0 && (questionMarkIndex < hashIndex || hashIndex < 0)) {
    return url.substring(0, questionMarkIndex);
  }
  if (hashIndex >= 0) {
    return url.substring(0, hashIndex);
  }
  return url;
};
var isDownloadLink = function isDownloadLink(downloadLinkQualifier, linkUrl, clickedObj) {
  var re = new RegExp(downloadLinkQualifier);
  var trimmedLinkUrl = trimQueryFromUrl(linkUrl).toLowerCase();
  return clickedObj.download ? true : re.test(trimmedLinkUrl);
};
var isExitLink = function isExitLink(window, linkUrl) {
  var currentHostname = window.location.hostname.toLowerCase();
  var trimmedLinkUrl = trimQueryFromUrl(linkUrl).toLowerCase();
  if (trimmedLinkUrl.indexOf(currentHostname) >= 0) {
    return false;
  }
  return true;
};

/**
 * Reduces repeated whitespace within a string. Whitespace surrounding the string
 * is trimmed and any occurrence of whitespace within the string is replaced with
 * a single space.
 * @param {string} str String to be formatted.
 * @returns {string} Formatted string.
 */
var truncateWhiteSpace = function truncateWhiteSpace(str) {
  return str && str.replace(/\s+/g, " ").trim();
};
var determineLinkType = function determineLinkType(window, config, linkUrl, clickedObj) {
  var linkType = "other";
  if (isDownloadLink(config.downloadLinkQualifier, linkUrl, clickedObj)) {
    linkType = "download";
  } else if (isExitLink(window, linkUrl)) {
    linkType = "exit";
  }
  return linkType;
};
var findSupportedAnchorElement = function findSupportedAnchorElement(targetElement) {
  var node = targetElement;
  while (node) {
    if (isSupportedAnchorElement(node)) {
      return node;
    }
    node = node.parentNode;
  }
  return null;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var unsupportedNodeNames = /^(SCRIPT|STYLE|LINK|CANVAS|NOSCRIPT|#COMMENT)$/i;

/**
 * Determines if a node qualifies as a supported link text node.
 * @param {*} node Node to determine support for.
 * @returns {boolean}
 */
var isSupportedTextNode = function isSupportedTextNode(node) {
  if (node && node.nodeName) {
    if (node.nodeName.match(unsupportedNodeNames)) {
      return false;
    }
  }
  return true;
};

/**
 * Orders and returns specified node and its child nodes in arrays of supported
 * and unsupported nodes.
 * @param {*} node The node to extract supported and unsupported nodes from.
 * @returns {{supportedNodes: Array, includesUnsupportedNodes: boolean}} Node support object.
 */
var extractSupportedNodes = function extractSupportedNodes(node) {
  var supportedNodes = [];
  var includesUnsupportedNodes = false;
  if (isSupportedTextNode(node)) {
    supportedNodes.push(node);
    if (node.childNodes) {
      var childNodes = Array.prototype.slice.call(node.childNodes);
      childNodes.forEach(function (childNode) {
        var nodes = extractSupportedNodes(childNode);
        supportedNodes = supportedNodes.concat(nodes.supportedNodes);
        includesUnsupportedNodes = includesUnsupportedNodes || nodes.includesUnsupportedNodes;
      });
    }
  } else {
    includesUnsupportedNodes = true;
  }
  return {
    supportedNodes: supportedNodes,
    includesUnsupportedNodes: includesUnsupportedNodes
  };
};

/**
 * Returns the value of a node attribute.
 * @param {*} node The node holding the attribute.
 * @param {string} attributeName The name of the attribute.
 * @param {string} nodeName Optional node name constraint.
 * @returns {string} Attribute value or undefined.
 */
var getNodeAttributeValue = function getNodeAttributeValue(node, attributeName, nodeName) {
  var attributeValue;
  if (!nodeName || nodeName === node.nodeName.toUpperCase()) {
    attributeValue = node.getAttribute(attributeName);
  }
  return attributeValue;
};

/**
 * Extracts the children supported nodes attributes map
 * @param {*} nodes The nodes array holding the children nodes.
 * The returned map contains the supported not empty children attributes values.
 * */
var getChildrenAttributes = function getChildrenAttributes(nodes) {
  var attributes = {
    texts: []
  };
  nodes.supportedNodes.forEach(function (supportedNode) {
    if (supportedNode.getAttribute) {
      if (!attributes.alt) {
        attributes.alt = truncateWhiteSpace(supportedNode.getAttribute("alt"));
      }
      if (!attributes.title) {
        attributes.title = truncateWhiteSpace(supportedNode.getAttribute("title"));
      }
      if (!attributes.inputValue) {
        attributes.inputValue = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "value", "INPUT"));
      }
      if (!attributes.imgSrc) {
        attributes.imgSrc = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "src", "IMG"));
      }
    }
    if (supportedNode.nodeValue) {
      attributes.texts.push(supportedNode.nodeValue);
    }
  });
  return attributes;
};

/**
 * Extracts a link-name from a given node.
 *
 * The returned link-name is set to one of the following (in order of priority):
 *
 * 1. Clicked node innerText
 * 2. Clicked node textContent
 * 3. Clicked node and its child nodes nodeValue appended together.
 * 4. Clicked node alt attribute or node descendant alt attribute.
 *    Whichever is found first.
 * 5. Clicked node text attribute or node descendant text attribute.
 *    Whichever is found first.
 * 6. Clicked node INPUT descendant value attribute.
 *    Whichever is found first.
 * 7. Clicked node IMG descendant src attribute.
 *    Whichever is found first.
 *
 * @param {*} node The node to find link text for.
 * @returns {string} link-name or an empty string if not link-name is found.
 */
var getLinkName = function getLinkName(node) {
  var nodeText = truncateWhiteSpace(node.innerText || node.textContent);
  var nodes = extractSupportedNodes(node);
  // if contains unsupported nodes we want children node attributes
  if (!nodeText || nodes.includesUnsupportedNodes) {
    var attributesMap = getChildrenAttributes(nodes);
    nodeText = truncateWhiteSpace(attributesMap.texts.join(""));
    if (!nodeText) {
      nodeText = attributesMap.alt || attributesMap.title || attributesMap.inputValue || attributesMap.imgSrc;
    }
  }
  return nodeText || "";
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var semanticElements = /^(HEADER|MAIN|FOOTER|NAV)$/i;
var getAriaRegionLabel = function getAriaRegionLabel(node) {
  var regionLabel;
  if (node.role === "region" && isNonEmptyString(node["aria-label"])) {
    regionLabel = node["aria-label"];
  }
  return regionLabel;
};
var getSectionNodeName = function getSectionNodeName(node) {
  var nodeName;
  if (node && node.nodeName) {
    if (node.nodeName.match(semanticElements)) {
      nodeName = node.nodeName;
    }
  }
  return nodeName;
};

/**
 * Extracts a node link-region.
 *
 * The link-region is determined by traversing up the DOM
 * looking for a region that is determined in order of priority:
 *
 * 1. element.id
 * 2. Aria region label
 * 3. Semantic element name
 * 4. BODY (if no other link-region is found).
 *
 * @param {*} node The node to find link region for.
 * @returns {string} link-region.
 */
var getLinkRegion = function getLinkRegion(node) {
  var linkParentNode = node.parentNode;
  var regionName;
  while (linkParentNode) {
    regionName = truncateWhiteSpace(linkParentNode.id || getAriaRegionLabel(linkParentNode) || getSectionNodeName(linkParentNode));
    if (regionName) {
      return regionName;
    }
    linkParentNode = linkParentNode.parentNode;
  }
  return "BODY";
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var _getLinkDetails = createGetLinkDetails({
  window: window,
  getLinkName: getLinkName,
  getLinkRegion: getLinkRegion,
  getAbsoluteUrlFromAnchorElement: getAbsoluteUrlFromAnchorElement,
  findSupportedAnchorElement: findSupportedAnchorElement,
  determineLinkType: determineLinkType
});
var createActivityCollector = function createActivityCollector(_ref30) {
  var config = _ref30.config,
    eventManager = _ref30.eventManager,
    handleError = _ref30.handleError,
    logger = _ref30.logger;
  var linkClick = createLinkClick({
    getLinkDetails: _getLinkDetails,
    config: config,
    logger: logger
  });
  return {
    lifecycle: {
      onComponentsRegistered: function onComponentsRegistered(tools) {
        var lifecycle = tools.lifecycle;
        attachClickActivityCollector({
          eventManager: eventManager,
          lifecycle: lifecycle,
          handleError: handleError
        });
        // TODO: createScrollActivityCollector ...
      },
      onClick: function onClick(_ref31) {
        var event = _ref31.event,
          clickedElement = _ref31.clickedElement;
        linkClick({
          targetElement: clickedElement,
          event: event
        });
      }
    }
  };
};
createActivityCollector.namespace = "ActivityCollector";
createActivityCollector.configValidators = configValidators;
createActivityCollector.buildOnInstanceConfiguredExtraParams = function (_ref32) {
  var config = _ref32.config,
    logger = _ref32.logger;
  return {
    getLinkDetails: function getLinkDetails(targetElement) {
      return _getLinkDetails({
        targetElement: targetElement,
        config: config,
        logger: logger
      });
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createResultLogMessage = function createResultLogMessage(idSync, success) {
  return "ID sync ".concat(success ? "succeeded" : "failed", ": ").concat(idSync.spec.url);
};
var injectProcessIdSyncs = function injectProcessIdSyncs(_ref33) {
  var fireReferrerHideableImage = _ref33.fireReferrerHideableImage,
    logger = _ref33.logger;
  return function (idSyncs) {
    var urlIdSyncs = idSyncs.filter(function (idSync) {
      return idSync.type === "url";
    });
    if (!urlIdSyncs.length) {
      return Promise.resolve();
    }
    return Promise.all(urlIdSyncs.map(function (idSync) {
      return fireReferrerHideableImage(idSync.spec).then(function () {
        logger.info(createResultLogMessage(idSync, true));
      })["catch"](function () {
        // We intentionally do not throw an error if id syncs fail. We
        // consider it a non-critical failure and therefore do not want it to
        // reject the promise handed back to the customer.
        logger.error(createResultLogMessage(idSync, false));
      });
    })).then(noop);
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var configValidators$1 = boundObjectOf({
  thirdPartyCookiesEnabled: boundBoolean()["default"](true),
  idMigrationEnabled: boundBoolean()["default"](true)
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */
var getIdentityOptionsValidator = boundObjectOf({
  namespaces: boundArrayOf(boundLiteral("ECID")).nonEmpty().uniqueItems()["default"](["ECID"]),
  edgeConfigOverrides: validateConfigOverride
}).noUnknownFields()["default"]({
  namespaces: ["ECID"]
});

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */
var appendIdentityToUrlOptionsValidator = boundObjectOf({
  url: boundString().required().nonEmpty(),
  edgeConfigOverrides: validateConfigOverride
}).required().noUnknownFields();

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createComponent = function createComponent(_ref34) {
  var addEcidQueryToPayload = _ref34.addEcidQueryToPayload,
    addQueryStringIdentityToPayload = _ref34.addQueryStringIdentityToPayload,
    ensureSingleIdentity = _ref34.ensureSingleIdentity,
    setLegacyEcid = _ref34.setLegacyEcid,
    handleResponseForIdSyncs = _ref34.handleResponseForIdSyncs,
    getEcidFromResponse = _ref34.getEcidFromResponse,
    getIdentity = _ref34.getIdentity,
    consent = _ref34.consent,
    appendIdentityToUrl = _ref34.appendIdentityToUrl,
    logger = _ref34.logger;
  var ecid;
  var edge = {};
  return {
    lifecycle: {
      onBeforeRequest: function onBeforeRequest(_ref35) {
        var request = _ref35.request,
          onResponse = _ref35.onResponse,
          onRequestFailure = _ref35.onRequestFailure;
        // Querying the ECID on every request to be able to set the legacy cookie, and make it
        // available for the `getIdentity` command.
        addEcidQueryToPayload(request.getPayload());
        addQueryStringIdentityToPayload(request.getPayload());
        return ensureSingleIdentity({
          request: request,
          onResponse: onResponse,
          onRequestFailure: onRequestFailure
        });
      },
      onResponse: function onResponse(_ref36) {
        var response = _ref36.response;
        if (!ecid) {
          ecid = getEcidFromResponse(response);

          // Only data collection calls will have an ECID in the response.
          // https://jira.corp.adobe.com/browse/EXEG-1234
          if (ecid) {
            setLegacyEcid(ecid);
          }
        }
        // For sendBeacon requests, getEdge() will return {}, so we are using assign here
        // so that sendBeacon requests don't override the edge info from before.
        edge = (0, _reactorObjectAssign["default"])(edge, response.getEdge());
        return handleResponseForIdSyncs(response);
      }
    },
    commands: {
      getIdentity: {
        optionsValidator: getIdentityOptionsValidator,
        run: function run(options) {
          return consent.awaitConsent().then(function () {
            return ecid ? undefined : getIdentity(options);
          }).then(function () {
            return {
              identity: {
                ECID: ecid
              },
              edge: edge
            };
          });
        }
      },
      appendIdentityToUrl: {
        optionsValidator: appendIdentityToUrlOptionsValidator,
        run: function run(options) {
          return consent.withConsent().then(function () {
            return ecid ? undefined : getIdentity(options);
          }).then(function () {
            return {
              url: appendIdentityToUrl(ecid, options.url)
            };
          })["catch"](function (error) {
            logger.warn("Unable to append identity to url. ".concat(error.message));
            return options;
          });
        }
      }
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Handles migration of ECID to and from Visitor.js.
 */
var createLegacyIdentity = function createLegacyIdentity(_ref37) {
  var config = _ref37.config,
    getEcidFromVisitor = _ref37.getEcidFromVisitor,
    apexDomain = _ref37.apexDomain,
    isPageSsl = _ref37.isPageSsl,
    cookieJar = _ref37.cookieJar;
  var idMigrationEnabled = config.idMigrationEnabled,
    orgId = config.orgId;
  var amcvCookieName = "AMCV_".concat(orgId);
  var getEcidFromLegacyCookies = function getEcidFromLegacyCookies() {
    var ecid = null;
    var secidCookieName = "s_ecid";
    var legacyEcidCookieValue = cookieJar.get(secidCookieName) || cookieJar.get(amcvCookieName);
    if (legacyEcidCookieValue) {
      var reg = /(^|\|)MCMID\|(\d+)($|\|)/;
      var matches = legacyEcidCookieValue.match(reg);
      if (matches) {
        // Destructuring arrays breaks in IE
        ecid = matches[2];
      }
    }
    return ecid;
  };
  return {
    getEcid: function getEcid() {
      if (idMigrationEnabled) {
        var ecid = getEcidFromLegacyCookies();
        if (ecid) {
          return Promise.resolve(ecid);
        }
        return getEcidFromVisitor();
      }
      return Promise.resolve();
    },
    setEcid: function setEcid(ecid) {
      if (idMigrationEnabled && getEcidFromLegacyCookies() !== ecid) {
        var extraOptions = isPageSsl ? {
          sameSite: "none",
          secure: true
        } : {};
        cookieJar.set(amcvCookieName, "MCMID|".concat(ecid), _objectSpread({
          domain: apexDomain,
          // Without `expires` this will be a session cookie.
          expires: 390
        }, extraOptions));
      }
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var awaitVisitorOptIn = function awaitVisitorOptIn(_ref38) {
  var logger = _ref38.logger;
  return new Promise(function (resolve, reject) {
    if (isObject(window.adobe) && isObject(window.adobe.optIn)) {
      var optInOld = window.adobe.optIn;
      logger.info("Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server.");
      optInOld.fetchPermissions(function () {
        if (optInOld.isApproved([optInOld.Categories.ECID])) {
          logger.info("Received legacy opt-in approval to let Visitor retrieve ECID from server.");
          resolve();
        } else {
          reject(new Error("Legacy opt-in was declined."));
        }
      }, true);
    } else {
      resolve();
    }
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getVisitor = function getVisitor(window) {
  var Visitor = window.Visitor;
  return isFunction(Visitor) && isFunction(Visitor.getInstance) && Visitor;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectGetEcidFromVisitor = function injectGetEcidFromVisitor(_ref39) {
  var logger = _ref39.logger,
    orgId = _ref39.orgId,
    awaitVisitorOptIn = _ref39.awaitVisitorOptIn;
  return function () {
    var Visitor = getVisitor(window);
    if (Visitor) {
      // Need to explicitly wait for optIn because visitor will call callback
      // with invalid values prior to optIn being approved
      return awaitVisitorOptIn({
        logger: logger
      }).then(function () {
        logger.info("Delaying request while using Visitor to retrieve ECID from server.");
        return new Promise(function (resolve) {
          var visitor = Visitor.getInstance(orgId, {});
          visitor.getMarketingCloudVisitorID(function (ecid) {
            logger.info("Resuming previously delayed request that was waiting for ECID from Visitor.");
            resolve(ecid);
          }, true);
        });
      })["catch"](function (error) {
        // If consent was denied, get the ECID from experience edge. OptIn and AEP Web SDK
        // consent should operate independently, but during id migration AEP Web SDK needs
        // to wait for optIn object consent resolution so that only one ECID is generated.
        if (error) {
          logger.info("".concat(error.message, ", retrieving ECID from experience edge"));
        } else {
          logger.info("An error occurred while obtaining the ECID from Visitor.");
        }
      });
    }
    return Promise.resolve();
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectHandleResponseForIdSyncs = function injectHandleResponseForIdSyncs(_ref40) {
  var processIdSyncs = _ref40.processIdSyncs;
  return function (response) {
    return processIdSyncs(response.getPayloadsByType("identity:exchange"));
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// TO-DOCUMENT: We queue subsequent requests until we have an identity cookie.
var injectEnsureSingleIdentity = function injectEnsureSingleIdentity(_ref41) {
  var doesIdentityCookieExist = _ref41.doesIdentityCookieExist,
    setDomainForInitialIdentityPayload = _ref41.setDomainForInitialIdentityPayload,
    addLegacyEcidToPayload = _ref41.addLegacyEcidToPayload,
    awaitIdentityCookie = _ref41.awaitIdentityCookie,
    logger = _ref41.logger;
  var obtainedIdentityPromise;
  var allowRequestToGoWithoutIdentity = function allowRequestToGoWithoutIdentity(request) {
    setDomainForInitialIdentityPayload(request);
    return addLegacyEcidToPayload(request.getPayload());
  };

  /**
   * Ensures that if no identity cookie exists, we only let one request at a
   * time without an identity until its response returns. In the meantime,
   * we queue all other requests, otherwise the requests could result in
   * multiple ECIDs being minted for the user. Once we get an identity
   * cookie, we can let the queued requests be sent all at once, since they
   * will have the newly minted ECID.
   *
   * Konductor should make every effort to return an identity, but in
   * certain scenarios it may not. For example, in cases where the
   * request does not match what Konductor is expecting (ie 400s).
   * In cases where Konductor does not set an identity, there should be
   * no events recorded so we don't need to worry about multiple ECIDs
   * being minted for each user.
   *
   * The reason we allow for multiple sequential requests to be sent without
   * an identity is to prevent a single malformed request causing all other
   * requests to never send.
   */
  return function (_ref42) {
    var request = _ref42.request,
      onResponse = _ref42.onResponse,
      onRequestFailure = _ref42.onRequestFailure;
    if (doesIdentityCookieExist()) {
      request.setIsIdentityEstablished();
      return Promise.resolve();
    }
    if (obtainedIdentityPromise) {
      // We don't have an identity cookie, but at least one request has
      // been sent to get it. Konductor may set the identity cookie in the
      // response. We will hold up this request until the last request
      // requiring identity returns and awaitIdentityCookie confirms the
      // identity was set.
      logger.info("Delaying request while retrieving ECID from server.");
      var previousObtainedIdentityPromise = obtainedIdentityPromise;

      // This promise resolves when we have an identity cookie. Additional
      // requests are chained together so that only one is sent at a time
      // until we have the identity cookie.
      obtainedIdentityPromise = previousObtainedIdentityPromise["catch"](function () {
        return awaitIdentityCookie({
          onResponse: onResponse,
          onRequestFailure: onRequestFailure
        });
      });

      // When this returned promise resolves, the request will go out.
      return previousObtainedIdentityPromise.then(function () {
        logger.info("Resuming previously delayed request.");
        request.setIsIdentityEstablished();
      })
      // If Konductor did not set the identity cookie on the previous
      // request, then awaitIdentityCookie will reject its promise.
      // Catch the rejection here and allow this request to go out.
      ["catch"](function () {
        return allowRequestToGoWithoutIdentity(request);
      });
    }

    // For Alloy+Konductor communication to be as robust as possible and
    // to ensure we don't mint new ECIDs for requests that would otherwise
    // be sent in parallel, we'll let this request go out to fetch the
    // cookie
    obtainedIdentityPromise = awaitIdentityCookie({
      onResponse: onResponse,
      onRequestFailure: onRequestFailure
    });
    return allowRequestToGoWithoutIdentity(request);
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var ecidNamespace = "ECID";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var addEcidQueryToPayload = function addEcidQueryToPayload(payload) {
  payload.mergeQuery({
    identity: {
      fetch: [ecidNamespace]
    }
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var matchUserAgent = function matchUserAgent(regexs) {
  return function (userAgent) {
    var keys = Object.keys(regexs);
    for (var _i7 = 0; _i7 < keys.length; _i7 += 1) {
      var key = keys[_i7];
      var regex = regexs[key];
      if (regex.test(userAgent)) {
        return key;
      }
    }
    return UNKNOWN;
  };
};
var getBrowser = memoize(function (window) {
  var _matchUserAgent;
  return matchUserAgent((_matchUserAgent = {}, _defineProperty(_matchUserAgent, EDGE, /Edge\/([0-9\._]+)/), _defineProperty(_matchUserAgent, EDGE_CHROMIUM, /Edg\/([0-9\.]+)/), _defineProperty(_matchUserAgent, CHROME, /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/), _defineProperty(_matchUserAgent, FIREFOX, /Firefox\/([0-9\.]+)(?:\s|$)/), _defineProperty(_matchUserAgent, IE, /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/), _defineProperty(_matchUserAgent, SAFARI, /Version\/([0-9\._]+).*Safari/), _matchUserAgent))(window.navigator.userAgent);
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectSetDomainForInitialIdentityPayload = function injectSetDomainForInitialIdentityPayload(_ref43) {
  var thirdPartyCookiesEnabled = _ref43.thirdPartyCookiesEnabled,
    areThirdPartyCookiesSupportedByDefault = _ref43.areThirdPartyCookiesSupportedByDefault;
  return function (request) {
    if (thirdPartyCookiesEnabled && areThirdPartyCookiesSupportedByDefault(getBrowser(window))) {
      // If third-party cookies are enabled by the customer and
      // supported by the browser, we will send the request to a
      // a third-party identification domain that allows for more accurate
      // identification of the user through use of a third-party cookie.
      // If we have an identity to migrate, we still want to hit the
      // third-party identification domain because the third-party identification
      // domain will use our ECID to set the third-party cookie if the third-party
      // cookie isn't already set, which provides for better cross-domain
      // identification for future requests.
      request.setUseIdThirdPartyDomain();
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectAddLegacyEcidToPayload = function injectAddLegacyEcidToPayload(_ref44) {
  var getLegacyEcid = _ref44.getLegacyEcid,
    addEcidToPayload = _ref44.addEcidToPayload;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't get the legacy identity if we already have the query string identity or if
      // the user specified it in the identity map
      return Promise.resolve();
    }
    return getLegacyEcid().then(function (ecidToMigrate) {
      if (ecidToMigrate) {
        addEcidToPayload(payload, ecidToMigrate);
      }
    });
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var queryStringIdentityParam = "adobe_mc";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var LINK_TTL_SECONDS = 300; // 5 minute link time to live

var injectAddQueryStringIdentityToPayload = function injectAddQueryStringIdentityToPayload(_ref45) {
  var locationSearch = _ref45.locationSearch,
    dateProvider = _ref45.dateProvider,
    orgId = _ref45.orgId,
    logger = _ref45.logger;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't overwrite a user provided ecid identity
      return;
    }
    var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);
    var queryStringValue = parsedQueryString[queryStringIdentityParam];
    if (queryStringValue === undefined) {
      return;
    }
    var properties = queryStringValue.split("|").reduce(function (memo, keyValue) {
      var _keyValue$split = keyValue.split("="),
        _keyValue$split2 = _slicedToArray(_keyValue$split, 2),
        key = _keyValue$split2[0],
        value = _keyValue$split2[1];
      memo[key] = value;
      return memo;
    }, {});
    // We are using MCMID and MCORGID to be compatible with Visitor.
    var ts = parseInt(properties.TS, 10);
    var mcmid = properties.MCMID;
    var mcorgid = decodeURIComponent(properties.MCORGID);
    if (
    // When TS is not specified or not a number, the following inequality returns false.
    // All inequalities with NaN variables are false.
    dateProvider().getTime() / 1000 <= ts + LINK_TTL_SECONDS && mcorgid === orgId && mcmid) {
      logger.info("Found valid ECID identity ".concat(mcmid, " from the adobe_mc query string parameter."));
      payload.addIdentity(ecidNamespace, {
        id: mcmid
      });
    } else {
      logger.info("Detected invalid or expired adobe_mc query string parameter.");
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var addEcidToPayload = function addEcidToPayload(payload, ecid) {
  payload.addIdentity(ecidNamespace, {
    id: ecid
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectAwaitIdentityCookie = function injectAwaitIdentityCookie(_ref46) {
  var doesIdentityCookieExist = _ref46.doesIdentityCookieExist,
    orgId = _ref46.orgId;
  /**
   * Returns a promise that will be resolved once an identity cookie exists.
   * If an identity cookie doesn't already exist, it should always exist after
   * the first response.
   */
  return function (_ref47) {
    var onResponse = _ref47.onResponse,
      onRequestFailure = _ref47.onRequestFailure;
    return new Promise(function (resolve, reject) {
      onResponse(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // This logic assumes that the code setting the cookie is working as expected and that
          // the cookie was missing from the response.
          var noIdentityCookieError = new Error("An identity was not set properly. Please verify that the org ID ".concat(orgId, " configured in Alloy matches the org ID specified in the edge configuration."));

          // Rejecting the promise will reject commands that were queued
          // by the Identity component while waiting on the response to
          // the initial request.
          reject(noIdentityCookieError);

          // Throwing an error will reject the event command that initiated
          // the request.
          throw noIdentityCookieError;
        }
      });
      onRequestFailure(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // The error from the request failure will be logged separately. Rejecting this here
          // will tell ensureSingleIdentity to send the next request without identity
          reject(new Error("No identity was set on response."));
        }
      });
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getEcidFromResponse = function getEcidFromResponse(response) {
  var identityResultPayloads = response.getPayloadsByType("identity:result");
  var ecidPayload = find(identityResultPayloads, function (payload) {
    return payload.namespace && payload.namespace.code === ecidNamespace;
  });
  return ecidPayload ? ecidPayload.id : undefined;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createAddIdentity = function createAddIdentity(content) {
  return function (namespaceCode, identity) {
    content.xdm = content.xdm || {};
    content.xdm.identityMap = content.xdm.identityMap || {};
    content.xdm.identityMap[namespaceCode] = content.xdm.identityMap[namespaceCode] || [];
    content.xdm.identityMap[namespaceCode].push(identity);
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// This provides the base functionality that all types of requests share.
var createRequest = function createRequest(options) {
  var payload = options.payload,
    _getAction = options.getAction,
    _getUseSendBeacon = options.getUseSendBeacon,
    datastreamIdOverride = options.datastreamIdOverride;
  var id = v4_1();
  var shouldUseThirdPartyDomain = false;
  var isIdentityEstablished = false;
  return {
    getId: function getId() {
      return id;
    },
    getPayload: function getPayload() {
      return payload;
    },
    getAction: function getAction() {
      return _getAction({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getDatastreamIdOverride: function getDatastreamIdOverride() {
      return datastreamIdOverride;
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return _getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getUseIdThirdPartyDomain: function getUseIdThirdPartyDomain() {
      return shouldUseThirdPartyDomain;
    },
    setUseIdThirdPartyDomain: function setUseIdThirdPartyDomain() {
      shouldUseThirdPartyDomain = true;
    },
    setIsIdentityEstablished: function setIsIdentityEstablished() {
      isIdentityEstablished = true;
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDataCollectionRequest = function createDataCollectionRequest(_ref48) {
  var dataCollectionRequestPayload = _ref48.payload,
    datastreamIdOverride = _ref48.datastreamIdOverride;
  var getUseSendBeacon = function getUseSendBeacon(_ref49) {
    var isIdentityEstablished = _ref49.isIdentityEstablished;
    // When the document may be unloading, we still hit the interact endpoint
    // using fetch if an identity has not been established. If we were instead
    // to hit the collect endpoint using sendBeacon in this case, one of three
    // things would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives an empty
    // response back from the collect endpoint, resulting in an error being
    // thrown by Alloy because we weren't able to establish an identity.
    // This is bad.
    // 2. The document is unloaded, but Alloy receives the empty
    // response back from the collect endpoint before navigation is completed,
    // resulting in an error being thrown by Alloy because we weren't able to
    // establish an identity. This is bad.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. No error
    // will be thrown, but no identity was established either. This is okay,
    // though no identity was established.
    //
    // By hitting the interact endpoint using fetch, one of the three things
    // would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives a
    // response with an identity back from the interact endpoint. No
    // error will be thrown and an identity is established. This is good.
    // 2. The document is unloaded and Alloy receives a response with an
    // identity back from the interact endpoint before navigation is completed.
    // No error will be thrown and an identity is established. This is good.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. In this
    // case, no error is thrown, but no identity was established and it's
    // more likely that the request never makes it to the server because we're
    // using fetch instead of sendBeacon.
    //
    // The second approach seemed preferable.
    return dataCollectionRequestPayload.getDocumentMayUnload() && isIdentityEstablished;
  };
  return createRequest({
    payload: dataCollectionRequestPayload,
    getAction: function getAction(_ref50) {
      var isIdentityEstablished = _ref50.isIdentityEstablished;
      return getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      }) ? "collect" : "interact";
    },
    getUseSendBeacon: getUseSendBeacon,
    datastreamIdOverride: datastreamIdOverride
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// This provides the base functionality that all types of
// request payloads share.
var createRequestPayload = function createRequestPayload(options) {
  var content = options.content,
    addIdentity = options.addIdentity,
    hasIdentity = options.hasIdentity;
  var _mergeConfigOverride = createMerger(content, "meta.configOverrides");
  return {
    mergeMeta: createMerger(content, "meta"),
    mergeState: createMerger(content, "meta.state"),
    mergeQuery: createMerger(content, "query"),
    mergeConfigOverride: function mergeConfigOverride(updates) {
      return _mergeConfigOverride(prepareConfigOverridesForEdge(updates));
    },
    addIdentity: addIdentity,
    hasIdentity: hasIdentity,
    toJSON: function toJSON() {
      return content;
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createHasIdentity = function createHasIdentity(content) {
  return function (namespaceCode) {
    return (content.xdm && content.xdm.identityMap && content.xdm.identityMap[namespaceCode]) !== undefined;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDataCollectionRequestPayload = function createDataCollectionRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });
  payload.addEvent = function (event) {
    content.events = content.events || [];
    content.events.push(event);
  };
  payload.getDocumentMayUnload = function () {
    return (content.events || []).some(function (event) {
      return event.getDocumentMayUnload();
    });
  };
  return payload;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/**
 * @typedef {{ datastreamId: string, [k: string]: Object }} Override
 * @typedef {Object} RequestPayload
 * @property {function(Override): void} mergeConfigOverride
 * @param {Object} params
 * @param {Override} params.localConfigOverrides
 * @param {Override} params.globalConfigOverrides
 * @param {RequestPayload} params.payload
 * @returns {{ payload: RequestPayload, datastreamIdOverride: string }}
 */
var createRequestParams = function createRequestParams(_ref51) {
  var localConfigOverrides = _ref51.localConfigOverrides,
    globalConfigOverrides = _ref51.globalConfigOverrides,
    payload = _ref51.payload;
  var requestParams = {
    payload: payload
  };
  var _ref52 = localConfigOverrides || {},
    datastreamId = _ref52.datastreamId,
    localConfigOverridesWithoutDatastreamId = _objectWithoutProperties(_ref52, ["datastreamId"]);
  if (datastreamId) {
    requestParams.datastreamIdOverride = datastreamId;
  }
  payload.mergeConfigOverride(globalConfigOverrides);
  payload.mergeConfigOverride(localConfigOverridesWithoutDatastreamId);
  return requestParams;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var ASSURANCE_VALIDATION_SESSION_URL_PARAM = "adb_validation_sessionid";
var ASSURANCE_VALIDATION_NAMESPACE = "validation.";
var CLIENT_ID = "clientId";
var getOrCreateAssuranceClientId = function getOrCreateAssuranceClientId(storage) {
  var clientId = storage.persistent.getItem(CLIENT_ID);
  if (!clientId) {
    clientId = v4_1();
    storage.persistent.setItem(CLIENT_ID, clientId);
  }
  return clientId;
};
var createGetAssuranceValidationTokenParams = function createGetAssuranceValidationTokenParams(_ref53) {
  var window = _ref53.window,
    createNamespacedStorage = _ref53.createNamespacedStorage;
  var storage = createNamespacedStorage(ASSURANCE_VALIDATION_NAMESPACE);
  return function () {
    var parsedQuery = _reactorQueryString["default"].parse(window.location.search);
    var validationSessionId = parsedQuery[ASSURANCE_VALIDATION_SESSION_URL_PARAM];
    if (!validationSessionId) {
      return "";
    }
    var clientId = getOrCreateAssuranceClientId(storage);
    var validationToken = "".concat(validationSessionId, "|").concat(clientId);
    return "&".concat(_reactorQueryString["default"].stringify({
      adobeAepValidationToken: validationToken
    }));
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createGetIdentity = function createGetIdentity(_ref54) {
  var sendEdgeNetworkRequest = _ref54.sendEdgeNetworkRequest,
    createIdentityRequestPayload = _ref54.createIdentityRequestPayload,
    createIdentityRequest = _ref54.createIdentityRequest,
    globalConfigOverrides = _ref54.globalConfigOverrides;
  return function () {
    var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      namespaces = _ref55.namespaces,
      localConfigOverrides = _ref55.edgeConfigOverrides;
    var requestParams = createRequestParams({
      payload: createIdentityRequestPayload(namespaces),
      globalConfigOverrides: globalConfigOverrides,
      localConfigOverrides: localConfigOverrides
    });
    var request = createIdentityRequest(requestParams);
    return sendEdgeNetworkRequest({
      request: request
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createIdentityRequest = function createIdentityRequest(_ref56) {
  var payload = _ref56.payload,
    datastreamIdOverride = _ref56.datastreamIdOverride;
  return createRequest({
    payload: payload,
    datastreamIdOverride: datastreamIdOverride,
    getAction: function getAction() {
      return "identity/acquire";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createIdentityRequestPayload = function createIdentityRequestPayload(namespaces) {
  var content = {
    query: {
      identity: {
        fetch: namespaces
      }
    }
  };
  return createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var URL_REGEX = /^([^?#]*)(\??[^#]*)(#?.*)$/;
var getSeparator = function getSeparator(queryString) {
  if (queryString === "") {
    return "?";
  }
  if (queryString === "?") {
    return "";
  }
  return "&";
};
var injectAppendIdentityToUrl = function injectAppendIdentityToUrl(_ref57) {
  var dateProvider = _ref57.dateProvider,
    orgId = _ref57.orgId;
  return function (ecid, url) {
    var ts = Math.round(dateProvider().getTime() / 1000);
    var adobemc = encodeURIComponent("TS=".concat(ts, "|MCMID=").concat(ecid, "|MCORGID=").concat(encodeURIComponent(orgId)));
    var _url$match = url.match(URL_REGEX),
      _url$match2 = _slicedToArray(_url$match, 4),
      location = _url$match2[1],
      queryString = _url$match2[2],
      fragment = _url$match2[3];
    var separator = getSeparator(queryString);
    return "".concat(location).concat(queryString).concat(separator, "adobe_mc=").concat(adobemc).concat(fragment);
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createIdentity = function createIdentity(_ref58) {
  var config = _ref58.config,
    logger = _ref58.logger,
    consent = _ref58.consent,
    fireReferrerHideableImage = _ref58.fireReferrerHideableImage,
    sendEdgeNetworkRequest = _ref58.sendEdgeNetworkRequest,
    apexDomain = _ref58.apexDomain;
  var orgId = config.orgId,
    thirdPartyCookiesEnabled = config.thirdPartyCookiesEnabled,
    globalConfigOverrides = config.edgeConfigOverrides;
  var getEcidFromVisitor = injectGetEcidFromVisitor({
    logger: logger,
    orgId: orgId,
    awaitVisitorOptIn: awaitVisitorOptIn
  });
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJar
  });
  var legacyIdentity = createLegacyIdentity({
    config: config,
    getEcidFromVisitor: getEcidFromVisitor,
    apexDomain: apexDomain,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  var getIdentity = createGetIdentity({
    sendEdgeNetworkRequest: sendEdgeNetworkRequest,
    createIdentityRequestPayload: createIdentityRequestPayload,
    createIdentityRequest: createIdentityRequest,
    globalConfigOverrides: globalConfigOverrides
  });
  var setDomainForInitialIdentityPayload = injectSetDomainForInitialIdentityPayload({
    thirdPartyCookiesEnabled: thirdPartyCookiesEnabled,
    areThirdPartyCookiesSupportedByDefault: areThirdPartyCookiesSupportedByDefault
  });
  var addLegacyEcidToPayload = injectAddLegacyEcidToPayload({
    getLegacyEcid: legacyIdentity.getEcid,
    addEcidToPayload: addEcidToPayload
  });
  var addQueryStringIdentityToPayload = injectAddQueryStringIdentityToPayload({
    locationSearch: window.document.location.search,
    dateProvider: function dateProvider() {
      return new Date();
    },
    orgId: orgId,
    logger: logger
  });
  var awaitIdentityCookie = injectAwaitIdentityCookie({
    doesIdentityCookieExist: doesIdentityCookieExist,
    orgId: orgId
  });
  var ensureSingleIdentity = injectEnsureSingleIdentity({
    doesIdentityCookieExist: doesIdentityCookieExist,
    setDomainForInitialIdentityPayload: setDomainForInitialIdentityPayload,
    addLegacyEcidToPayload: addLegacyEcidToPayload,
    awaitIdentityCookie: awaitIdentityCookie,
    logger: logger
  });
  var processIdSyncs = injectProcessIdSyncs({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger
  });
  var handleResponseForIdSyncs = injectHandleResponseForIdSyncs({
    processIdSyncs: processIdSyncs
  });
  var appendIdentityToUrl = injectAppendIdentityToUrl({
    dateProvider: function dateProvider() {
      return new Date();
    },
    orgId: orgId,
    globalConfigOverrides: globalConfigOverrides
  });
  return createComponent({
    addEcidQueryToPayload: addEcidQueryToPayload,
    addQueryStringIdentityToPayload: addQueryStringIdentityToPayload,
    ensureSingleIdentity: ensureSingleIdentity,
    setLegacyEcid: legacyIdentity.setEcid,
    handleResponseForIdSyncs: handleResponseForIdSyncs,
    getEcidFromResponse: getEcidFromResponse,
    getIdentity: getIdentity,
    consent: consent,
    appendIdentityToUrl: appendIdentityToUrl,
    logger: logger,
    config: config
  });
};
createIdentity.namespace = "Identity";
createIdentity.configValidators = configValidators$1;

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createResultLogMessage$1 = function createResultLogMessage$1(urlDestination, success) {
  return "URL destination ".concat(success ? "succeeded" : "failed", ": ").concat(urlDestination.spec.url);
};
var injectProcessDestinations = function injectProcessDestinations(_ref59) {
  var fireReferrerHideableImage = _ref59.fireReferrerHideableImage,
    logger = _ref59.logger,
    cookieJar = _ref59.cookieJar,
    isPageSsl = _ref59.isPageSsl;
  var extraCookieOptions = isPageSsl ? {
    sameSite: "none",
    secure: true
  } : {};
  var processCookies = function processCookies(destinations) {
    var cookieDestinations = destinations.filter(function (dest) {
      return dest.type === "cookie";
    });
    cookieDestinations.forEach(function (dest) {
      var _dest$spec = dest.spec,
        name = _dest$spec.name,
        value = _dest$spec.value,
        domain = _dest$spec.domain,
        ttlDays = _dest$spec.ttlDays;
      cookieJar.set(name, value || "", _objectSpread({
        domain: domain || "",
        expires: ttlDays || 10
      }, extraCookieOptions));
    });
  };
  var processUrls = function processUrls(destinations) {
    var urlDestinations = destinations.filter(function (dest) {
      return dest.type === "url";
    });
    return Promise.all(urlDestinations.map(function (urlDestination) {
      return fireReferrerHideableImage(urlDestination.spec).then(function () {
        logger.info(createResultLogMessage$1(urlDestination, true));
      })["catch"](function () {
        // We intentionally do not throw an error if destinations fail. We
        // consider it a non-critical failure and therefore do not want it to
        // reject the promise handed back to the customer.
      });
    })).then(noop);
  };
  return function (destinations) {
    processCookies(destinations);
    return processUrls(destinations);
  };
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectProcessResponse = function injectProcessResponse(_ref60) {
  var processDestinations = _ref60.processDestinations;
  var processPushDestinations = function processPushDestinations(_ref61) {
    var response = _ref61.response;
    var destinations = response.getPayloadsByType("activation:push");
    return processDestinations(destinations);
  };
  var retrievePullDestinations = function retrievePullDestinations(_ref62) {
    var response = _ref62.response;
    return {
      destinations: response.getPayloadsByType("activation:pull")
    };
  };
  return function (_ref63) {
    var response = _ref63.response;
    return processPushDestinations({
      response: response
    }).then(function () {
      return retrievePullDestinations({
        response: response
      });
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createAudiences = function createAudiences(_ref64) {
  var logger = _ref64.logger,
    fireReferrerHideableImage = _ref64.fireReferrerHideableImage;
  // we override the js-cookie converter to encode the cookie value similar on how it is in DIL (PDCL-10238)
  var cookieJarWithEncoding = cookieJar.withConverter({
    write: function write(value) {
      return encodeURIComponent(value);
    }
  });
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJarWithEncoding
  });
  var processDestinations = injectProcessDestinations({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var processResponse = injectProcessResponse({
    processDestinations: processDestinations
  });
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};
createAudiences.namespace = "Audiences";

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var WEB = "web";
var WEBAPP = "webapp";
var SURFACE_TYPE_DELIMITER = "://";
var FRAGMENT_DELIMITER = "#";

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var SURFACE_REGEX = /^(\w+):\/\/([^/#]+)(\/[^#]*)?(#.*)?$/;
var AUTHORITY_REGEX = /^(?:.*@)?(?:[a-z\d\u00a1-\uffff.-]+|\[[a-f\d:]+])(?::\d+)?$/;
var PATH_REGEX = /^\/(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})*$/;
var FRAGMENT_REGEX = /^#(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})+$/;
var normalizePath = function normalizePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var end = path.length;
  while (end > 0 && "/".indexOf(path.charAt(end - 1)) !== -1) {
    end -= 1;
  }
  return path.substring(0, end) || "/";
};
var getSurfaceType = function getSurfaceType(surfaceTypeMatch) {
  return isNonEmptyString(surfaceTypeMatch) ? surfaceTypeMatch.toLowerCase() : "";
};
var getAuthority = function getAuthority(authorityMatch) {
  return isNonEmptyString(authorityMatch) ? authorityMatch.toLowerCase() : "";
};
var getPath = function getPath(pathMatch) {
  return isNonEmptyString(pathMatch) ? normalizePath(pathMatch) : "/";
};
var parseSurface = function parseSurface(surfaceString) {
  var matched = surfaceString.match(SURFACE_REGEX);
  return matched ? {
    surfaceType: getSurfaceType(matched[1]),
    authority: getAuthority(matched[2]),
    path: getPath(matched[3]),
    fragment: matched[4]
  } : null;
};
var stringifySurface = function stringifySurface(surface) {
  return "".concat(surface.surfaceType).concat(SURFACE_TYPE_DELIMITER).concat(surface.authority).concat(surface.path || "").concat(surface.fragment || "");
};
var buildPageSurface = function buildPageSurface(getPageLocation) {
  var location = getPageLocation();
  var host = location.host.toLowerCase();
  var path = location.pathname;
  return WEB + SURFACE_TYPE_DELIMITER + host + normalizePath(path);
};
var expandFragmentSurface = function expandFragmentSurface(surface, getPageLocation) {
  return startsWith(surface, FRAGMENT_DELIMITER) ? buildPageSurface(getPageLocation) + surface : surface;
};
var validateSurface = function validateSurface(surface, getPageLocation, logger) {
  var invalidateSurface = function invalidateSurface(validationError) {
    logger.warn(validationError);
    return null;
  };
  if (!isNonEmptyString(surface)) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }
  var expanded = expandFragmentSurface(surface, getPageLocation);
  var parsed = parseSurface(expanded);
  if (parsed === null) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }
  if (!includes([WEB, WEBAPP], parsed.surfaceType)) {
    return invalidateSurface("Unsupported surface type ".concat(parsed.surfaceType, " in surface: ").concat(surface));
  }
  if (!parsed.authority || !AUTHORITY_REGEX.test(parsed.authority)) {
    return invalidateSurface("Invalid authority ".concat(parsed.authority, " in surface: ").concat(surface));
  }
  if (parsed.path && !PATH_REGEX.test(parsed.path)) {
    return invalidateSurface("Invalid path ".concat(parsed.path, " in surface: ").concat(surface));
  }
  if (parsed.fragment && !FRAGMENT_REGEX.test(parsed.fragment)) {
    return invalidateSurface("Invalid fragment ".concat(parsed.fragment, " in surface: ").concat(surface));
  }
  return parsed;
};
var isPageWideSurface = function isPageWideSurface(scope) {
  return !!scope && scope.indexOf(WEB + SURFACE_TYPE_DELIMITER) === 0 && scope.indexOf(FRAGMENT_DELIMITER) === -1;
};
var normalizeSurfaces = function normalizeSurfaces() {
  var surfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getPageLocation = arguments.length > 1 ? arguments[1] : undefined;
  var logger = arguments.length > 2 ? arguments[2] : undefined;
  return surfaces.map(function (surface) {
    return validateSurface(surface, getPageLocation, logger);
  }).filter(function (surface) {
    return !isNil(surface);
  }).map(stringifySurface);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var PAGE_WIDE_SCOPE = "__view__";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DEFAULT_CONTENT_ITEM = "https://ns.adobe.com/personalization/default-content-item";
var DOM_ACTION = "https://ns.adobe.com/personalization/dom-action";
var HTML_CONTENT_ITEM = "https://ns.adobe.com/personalization/html-content-item";
var JSON_CONTENT_ITEM = "https://ns.adobe.com/personalization/json-content-item";
var RULESET_ITEM = "https://ns.adobe.com/personalization/ruleset-item";
var REDIRECT_ITEM = "https://ns.adobe.com/personalization/redirect-item";
var MESSAGE_IN_APP = "https://ns.adobe.com/personalization/message/in-app";
var MESSAGE_FEED_ITEM = "https://ns.adobe.com/personalization/message/feed-item";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var addPageWideScope = function addPageWideScope(scopes) {
  if (!includes(scopes, PAGE_WIDE_SCOPE)) {
    scopes.push(PAGE_WIDE_SCOPE);
  }
};
var addPageSurface = function addPageSurface(surfaces, getPageLocation) {
  var pageSurface = buildPageSurface(getPageLocation);
  if (!includes(surfaces, pageSurface)) {
    surfaces.push(pageSurface);
  }
};
var dedupe = function dedupe(array) {
  return array.filter(function (item, pos) {
    return array.indexOf(item) === pos;
  });
};
var createPersonalizationDetails = function createPersonalizationDetails(_ref65) {
  var getPageLocation = _ref65.getPageLocation,
    renderDecisions = _ref65.renderDecisions,
    decisionScopes = _ref65.decisionScopes,
    personalization = _ref65.personalization,
    event = _ref65.event,
    _isCacheInitialized = _ref65.isCacheInitialized,
    logger = _ref65.logger;
  var viewName = event.getViewName();
  return {
    isRenderDecisions: function isRenderDecisions() {
      return renderDecisions;
    },
    isSendDisplayEvent: function isSendDisplayEvent() {
      return !!personalization.sendDisplayEvent;
    },
    shouldIncludeRenderedPropositions: function shouldIncludeRenderedPropositions() {
      return !!personalization.includeRenderedPropositions;
    },
    getViewName: function getViewName() {
      return viewName;
    },
    hasScopes: function hasScopes() {
      return decisionScopes.length > 0 || isNonEmptyArray(personalization.decisionScopes);
    },
    hasSurfaces: function hasSurfaces() {
      return isNonEmptyArray(personalization.surfaces);
    },
    hasViewName: function hasViewName() {
      return isNonEmptyString(viewName);
    },
    createQueryDetails: function createQueryDetails() {
      var scopes = _toConsumableArray(decisionScopes);
      if (isNonEmptyArray(personalization.decisionScopes)) {
        scopes.push.apply(scopes, _toConsumableArray(personalization.decisionScopes));
      }
      var eventSurfaces = normalizeSurfaces(personalization.surfaces, getPageLocation, logger);
      if (this.shouldRequestDefaultPersonalization()) {
        addPageWideScope(scopes);
        addPageSurface(eventSurfaces, getPageLocation);
      }
      var schemas = [DEFAULT_CONTENT_ITEM, HTML_CONTENT_ITEM, JSON_CONTENT_ITEM, REDIRECT_ITEM, RULESET_ITEM, MESSAGE_IN_APP, MESSAGE_FEED_ITEM];
      if (includes(scopes, PAGE_WIDE_SCOPE)) {
        schemas.push(DOM_ACTION);
      }
      return {
        schemas: schemas,
        decisionScopes: dedupe(scopes),
        surfaces: dedupe(eventSurfaces)
      };
    },
    isCacheInitialized: function isCacheInitialized() {
      return _isCacheInitialized;
    },
    shouldFetchData: function shouldFetchData() {
      return this.hasScopes() || this.hasSurfaces() || this.shouldRequestDefaultPersonalization();
    },
    shouldUseCachedData: function shouldUseCachedData() {
      return this.hasViewName() && !this.shouldFetchData();
    },
    shouldRequestDefaultPersonalization: function shouldRequestDefaultPersonalization() {
      return personalization.defaultPersonalizationEnabled || !this.isCacheInitialized() && personalization.defaultPersonalizationEnabled !== false;
    }
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var AUTHORING_ENABLED = "Rendering is disabled for authoring mode.";

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DISPLAY = "decisioning.propositionDisplay";
var INTERACT = "decisioning.propositionInteract";
var TRIGGER = "decisioning.propositionTrigger";
var DISMISS = "decisioning.propositionDismiss";
var EVENT_TYPE_TRUE = 1;

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var PropositionEventType = {
  DISPLAY: "display",
  INTERACT: "interact",
  TRIGGER: "trigger",
  DISMISS: "dismiss"
};
var eventTypeToPropositionEventTypeMapping = (_eventTypeToPropositi = {}, _defineProperty(_eventTypeToPropositi, DISPLAY, PropositionEventType.DISPLAY), _defineProperty(_eventTypeToPropositi, INTERACT, PropositionEventType.INTERACT), _defineProperty(_eventTypeToPropositi, TRIGGER, PropositionEventType.TRIGGER), _defineProperty(_eventTypeToPropositi, DISMISS, PropositionEventType.DISMISS), _eventTypeToPropositi);
var getPropositionEventType = function getPropositionEventType(eventType) {
  return eventTypeToPropositionEventTypeMapping[eventType];
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var EMPTY_PROPOSITIONS = {
  propositions: []
};
var validateApplyPropositionsOptions = function validateApplyPropositionsOptions(_ref66) {
  var logger = _ref66.logger,
    options = _ref66.options;
  var applyPropositionsOptionsValidator = boundObjectOf({
    propositions: boundArrayOf(boundObjectOf(boundAnything())),
    metadata: boundObjectOf(boundAnything()),
    viewName: boundString()
  }).required();
  try {
    return applyPropositionsOptionsValidator(options);
  } catch (e) {
    logger.warn("Invalid options for applyPropositions. No propositions will be applied.", e);
    return EMPTY_PROPOSITIONS;
  }
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createComponent$1 = function createComponent$1(_ref67) {
  var getPageLocation = _ref67.getPageLocation,
    logger = _ref67.logger,
    fetchDataHandler = _ref67.fetchDataHandler,
    viewChangeHandler = _ref67.viewChangeHandler,
    onClickHandler = _ref67.onClickHandler,
    isAuthoringModeEnabled = _ref67.isAuthoringModeEnabled,
    mergeQuery = _ref67.mergeQuery,
    viewCache = _ref67.viewCache,
    showContainers = _ref67.showContainers,
    applyPropositions = _ref67.applyPropositions,
    setTargetMigration = _ref67.setTargetMigration,
    mergeDecisionsMeta = _ref67.mergeDecisionsMeta,
    renderedPropositions = _ref67.renderedPropositions,
    onDecisionHandler = _ref67.onDecisionHandler;
  return {
    lifecycle: {
      onDecision: onDecisionHandler,
      onBeforeRequest: function onBeforeRequest(_ref68) {
        var request = _ref68.request;
        setTargetMigration(request);
        return Promise.resolve();
      },
      onBeforeEvent: function onBeforeEvent(_ref69) {
        var event = _ref69.event,
          renderDecisions = _ref69.renderDecisions,
          _ref69$decisionScopes = _ref69.decisionScopes,
          decisionScopes = _ref69$decisionScopes === void 0 ? [] : _ref69$decisionScopes,
          _ref69$personalizatio = _ref69.personalization,
          personalization = _ref69$personalizatio === void 0 ? {} : _ref69$personalizatio,
          _ref69$onResponse = _ref69.onResponse,
          onResponse = _ref69$onResponse === void 0 ? noop : _ref69$onResponse,
          _ref69$onRequestFailu = _ref69.onRequestFailure,
          onRequestFailure = _ref69$onRequestFailu === void 0 ? noop : _ref69$onRequestFailu;
        // Include propositions on all responses, overridden with data as needed
        onResponse(function () {
          return {
            propositions: []
          };
        });
        onRequestFailure(function () {
          return showContainers();
        });
        if (isAuthoringModeEnabled()) {
          logger.warn(AUTHORING_ENABLED);

          // If we are in authoring mode we disable personalization
          mergeQuery(event, {
            enabled: false
          });
          return Promise.resolve();
        }
        var personalizationDetails = createPersonalizationDetails({
          getPageLocation: getPageLocation,
          renderDecisions: renderDecisions,
          decisionScopes: decisionScopes,
          personalization: personalization,
          event: event,
          isCacheInitialized: viewCache.isInitialized(),
          logger: logger
        });
        var decisionsMetaPromises = [];
        if (personalizationDetails.shouldIncludeRenderedPropositions()) {
          decisionsMetaPromises.push(renderedPropositions.clear());
        }
        if (personalizationDetails.shouldFetchData()) {
          var cacheUpdate = viewCache.createCacheUpdate(personalizationDetails.getViewName());
          onRequestFailure(function () {
            return cacheUpdate.cancel();
          });
          fetchDataHandler({
            cacheUpdate: cacheUpdate,
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse
          });
        } else if (personalizationDetails.shouldUseCachedData()) {
          // eslint-disable-next-line consistent-return
          decisionsMetaPromises.push(viewChangeHandler({
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse,
            onRequestFailure: onRequestFailure
          }));
        }

        // This promise.all waits for both the pending display notifications to be resolved
        // (i.e. the top of page call to finish rendering) and the view change handler to
        // finish rendering anything for this view.
        return Promise.all(decisionsMetaPromises).then(function (decisionsMetas) {
          // We only want to call mergeDecisionsMeta once, but we can get the propositions
          // from two places: the pending display notifications and the view change handler.
          var decisionsMeta = flatMap(decisionsMetas, function (dms) {
            return dms;
          });
          if (isNonEmptyArray(decisionsMeta)) {
            mergeDecisionsMeta(event, decisionsMeta, [PropositionEventType.DISPLAY]);
          }
        });
      },
      onClick: function onClick(_ref70) {
        var event = _ref70.event,
          clickedElement = _ref70.clickedElement;
        onClickHandler({
          event: event,
          clickedElement: clickedElement
        });
      }
    },
    commands: {
      applyPropositions: {
        optionsValidator: function optionsValidator(options) {
          return validateApplyPropositionsOptions({
            logger: logger,
            options: options
          });
        },
        run: applyPropositions
      }
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createFragment = function createFragment(content) {
  return createNode(DIV, {}, {
    innerHTML: content
  });
};
var css_escape = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    {
      // For Node.js.
      module.exports = factory(root);
    }
  })(typeof commonjsGlobal != 'undefined' ? commonjsGlobal : commonjsGlobal, function (root) {
    if (root.CSS && root.CSS.escape) {
      return root.CSS.escape;
    }

    // https://drafts.csswg.org/cssom/#serialize-an-identifier
    var cssEscape = function cssEscape(value) {
      if (arguments.length == 0) {
        throw new TypeError('`CSS.escape` requires an argument.');
      }
      var string = String(value);
      var length = string.length;
      var index = -1;
      var codeUnit;
      var result = '';
      var firstCodeUnit = string.charCodeAt(0);
      while (++index < length) {
        codeUnit = string.charCodeAt(index);
        // Note: there’s no need to special-case astral symbols, surrogate
        // pairs, or lone surrogates.

        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
        // (U+FFFD).
        if (codeUnit == 0x0000) {
          result += "\uFFFD";
          continue;
        }
        if (
        // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
        // U+007F, […]
        codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F ||
        // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
        // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]

        index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
          // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
          result += '\\' + codeUnit.toString(16) + ' ';
          continue;
        }
        if (
        // If the character is the first character and is a `-` (U+002D), and
        // there is no second character, […]
        index == 0 && length == 1 && codeUnit == 0x002D) {
          result += '\\' + string.charAt(index);
          continue;
        }

        // If the character is not handled by one of the above rules and is
        // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
        // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
        // U+005A), or [a-z] (U+0061 to U+007A), […]
        if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
          // the character itself
          result += string.charAt(index);
          continue;
        }

        // Otherwise, the escaped character.
        // https://drafts.csswg.org/cssom/#escape-a-character
        result += '\\' + string.charAt(index);
      }
      return result;
    };
    if (!root.CSS) {
      root.CSS = {};
    }
    root.CSS.escape = cssEscape;
    return cssEscape;
  });
});

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var EQ_START = ":eq(";
var EQ_PATTERN = /:eq\((\d+)\)/g;
var isNotEqSelector = function isNotEqSelector(str) {
  return str.indexOf(EQ_START) === -1;
};
var splitWithEq = function splitWithEq(selector) {
  return selector.split(EQ_PATTERN).filter(isNonEmptyString);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Trying to match ID or CSS class
var CSS_IDENTIFIER_PATTERN = /(#|\.)(-?\w+)/g;
// Here we use CSS.escape() to make sure we get
// correct values for ID and CSS class
// Please check:  https://www.w3.org/TR/css-syntax-3/#escaping
// CSS.escape() polyfill can be found here: https://github.com/mathiasbynens/CSS.escape
var replaceIdentifier = function replaceIdentifier(_, $1, $2) {
  return "".concat($1).concat(css_escape($2));
};
var escapeIdentifiersInSelector = function escapeIdentifiersInSelector(selector) {
  return selector.replace(CSS_IDENTIFIER_PATTERN, replaceIdentifier);
};
var parseSelector = function parseSelector(rawSelector) {
  var result = [];
  var selector = escapeIdentifiersInSelector(rawSelector.trim());
  var parts = splitWithEq(selector);
  var length = parts.length;
  var i = 0;
  while (i < length) {
    var sel = parts[i];
    var eq = parts[i + 1];
    if (eq) {
      result.push({
        sel: sel,
        eq: Number(eq)
      });
    } else {
      result.push({
        sel: sel
      });
    }
    i += 2;
  }
  return result;
};

/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector that contains Sizzle "eq(...)" pseudo selector
 * @returns {Array} an array of DOM nodes
 */
var selectNodesWithEq = function selectNodesWithEq(selector) {
  var doc = document;
  if (isNotEqSelector(selector)) {
    return selectNodes(selector, doc);
  }
  var parts = parseSelector(selector);
  var length = parts.length;
  var result = [];
  var context = doc;
  var i = 0;
  while (i < length) {
    var _parts$i = parts[i],
      sel = _parts$i.sel,
      eq = _parts$i.eq;
    var nodes = selectNodes(sel, context);
    var nodesCount = nodes.length;
    if (nodesCount === 0) {
      break;
    }
    if (eq != null && eq > nodesCount - 1) {
      break;
    }
    if (i < length - 1) {
      if (eq == null) {
        var _nodes = _slicedToArray(nodes, 1);
        context = _nodes[0];
      } else {
        context = nodes[eq];
      }
    }
    if (i === length - 1) {
      if (eq == null) {
        result = nodes;
      } else {
        result = [nodes[eq]];
      }
    }
    i += 1;
  }
  return result;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} id
 * @param {Node} [context=document] defaults to document
 * @returns {HTMLElement} an element of null
 */
var getElementById = function getElementById(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.getElementById(id);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var setAttribute = function setAttribute(element, name, value) {
  element.setAttribute(name, value);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var getAttribute = function getAttribute(element, name) {
  return element.getAttribute(name);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var removeAttribute = function removeAttribute(element, name) {
  element.removeAttribute(name);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var setStyle = function setStyle(element, name, value, priority) {
  var css;
  if (priority) {
    css = "".concat(name, ":").concat(value, " !").concat(priority, ";");
  } else {
    css = "".concat(name, ":").concat(value, ";");
  }
  element.style.cssText += ";".concat(css);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var getParent = function getParent(element) {
  return element.parentNode;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var getNextSibling = function getNextSibling(element) {
  return element.nextElementSibling;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var insertAfter = function insertAfter(container, element) {
  if (!container) {
    return;
  }
  var parent = getParent(container);
  if (parent) {
    parent.insertBefore(element, getNextSibling(container));
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var insertBefore = function insertBefore(container, element) {
  if (!container) {
    return;
  }
  var parent = getParent(container);
  if (parent) {
    parent.insertBefore(element, container);
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getChildren = function getChildren(element) {
  var children = element.children;
  if (children) {
    return toArray(children);
  }
  return [];
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getChildNodes = function getChildNodes(element) {
  var childNodes = element.childNodes;
  if (childNodes) {
    return toArray(childNodes);
  }
  return [];
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var getFirstChild = function getFirstChild(element) {
  return element.firstElementChild;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var nonce;

/**
 * Returns the nonce if available.
 * @param {Node} [context=document] defaults to document
 * @returns {(String|undefined)} the nonce or undefined if not available
 */
var getNonce = function getNonce() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  if (nonce === undefined) {
    var n = context.querySelector("[nonce]");
    // NOTE: We're keeping n.getAttribute("nonce") until it is safe to remove:
    //   ref: https://github.com/whatwg/html/issues/2369#issuecomment-280853946
    nonce = n && (n.nonce || n.getAttribute("nonce"));
  }
  return nonce;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var PREHIDING_ID = "alloy-prehiding";
var HIDING_STYLE_DEFINITION = "{ visibility: hidden }";

// Using global is OK since we have a single DOM
// so storing nodes even for multiple Alloy instances is fine
var styleNodes = {};
var hideElements = function hideElements(prehidingSelector) {
  // if we have different events with the same
  // prehiding selector we don't want to recreate
  // the style tag
  if (styleNodes[prehidingSelector]) {
    return;
  }
  var nonce = getNonce();
  var attrs = _objectSpread({}, nonce && {
    nonce: nonce
  });
  var props = {
    textContent: "".concat(prehidingSelector, " ").concat(HIDING_STYLE_DEFINITION)
  };
  var node = createNode(STYLE, attrs, props);
  appendNode(document.head, node);
  styleNodes[prehidingSelector] = node;
};
var showElements = function showElements(prehidingSelector) {
  var node = styleNodes[prehidingSelector];
  if (node) {
    removeNode(node);
    delete styleNodes[prehidingSelector];
  }
};
var hideContainers = function hideContainers(prehidingStyle) {
  if (!prehidingStyle) {
    return;
  }

  // If containers prehiding style has been added
  // by customer's prehiding snippet we don't
  // want to add the same node
  var node = getElementById(PREHIDING_ID);
  if (node) {
    return;
  }
  var nonce = getNonce();
  var attrs = _objectSpread({
    id: PREHIDING_ID
  }, nonce && {
    nonce: nonce
  });
  var props = {
    textContent: prehidingStyle
  };
  var styleNode = createNode(STYLE, attrs, props);
  appendNode(document.head, styleNode);
};
var showContainers = function showContainers() {
  // If containers prehiding style exists
  // we will remove it
  var node = getElementById(PREHIDING_ID);
  if (!node) {
    return;
  }
  removeNode(node);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var setText = function setText(container, text) {
  container.textContent = text;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var SRC = "src";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var isImage = function isImage(element) {
  return element.tagName === IMG;
};
var loadImage = function loadImage(url) {
  return createNode(IMG, {
    src: url
  });
};
var loadImages = function loadImages(fragment) {
  var images = selectNodes(IMG, fragment);
  images.forEach(function (image) {
    var url = getAttribute(image, SRC);
    if (url) {
      loadImage(url);
    }
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var is = function is(element, tagName) {
  return element.tagName === tagName;
};
var isInlineStyleElement = function isInlineStyleElement(element) {
  return is(element, STYLE) && !getAttribute(element, SRC);
};
var addNonceToInlineStyleElements = function addNonceToInlineStyleElements(fragment) {
  var styleNodes = selectNodes(STYLE, fragment);
  var length = styleNodes.length;
  var nonce = getNonce();
  if (!nonce) {
    return;
  }
  /* eslint-disable no-continue */
  for (var _i8 = 0; _i8 < length; _i8 += 1) {
    var element = styleNodes[_i8];
    if (!isInlineStyleElement(element)) {
      continue;
    }
    element.nonce = nonce;
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var is$1 = function is$1(element, tagName) {
  return !!element && element.tagName === tagName;
};
var isInlineScript = function isInlineScript(element) {
  return is$1(element, SCRIPT) && !getAttribute(element, SRC);
};
var isRemoteScript = function isRemoteScript(element) {
  return is$1(element, SCRIPT) && getAttribute(element, SRC);
};
var getInlineScripts = function getInlineScripts(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  var nonce = getNonce();
  var attributes = _objectSpread({}, nonce && {
    nonce: nonce
  });

  /* eslint-disable no-continue */
  for (var _i9 = 0; _i9 < length; _i9 += 1) {
    var element = scripts[_i9];
    if (!isInlineScript(element)) {
      continue;
    }
    var textContent = element.textContent;
    if (!textContent) {
      continue;
    }
    result.push(createNode(SCRIPT, attributes, {
      textContent: textContent
    }));
  }
  /* eslint-enable no-continue */

  return result;
};
var getRemoteScriptsUrls = function getRemoteScriptsUrls(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  /* eslint-disable no-continue */
  for (var _i10 = 0; _i10 < length; _i10 += 1) {
    var element = scripts[_i10];
    if (!isRemoteScript(element)) {
      continue;
    }
    var url = getAttribute(element, SRC);
    if (!url) {
      continue;
    }
    result.push(url);
  }
  /* eslint-enable no-continue */

  return result;
};
var executeInlineScripts = function executeInlineScripts(parent, scripts) {
  scripts.forEach(function (script) {
    parent.appendChild(script);
    parent.removeChild(script);
  });
};
var executeRemoteScripts = function executeRemoteScripts(urls) {
  return Promise.all(urls.map(_reactorLoadScript["default"]));
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var appendHtml = function appendHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    appendNode(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var clear = function clear(container) {
  // We want to remove ALL nodes, text, comments etc
  var childNodes = getChildNodes(container);
  childNodes.forEach(removeNode);
};
var setHtml = function setHtml(container, html) {
  clear(container);
  appendHtml(container, html);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var prependHtml = function prependHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  var length = elements.length;
  var i = length - 1;

  // We have to proactively load images to avoid flicker
  loadImages(fragment);

  // We are inserting elements in reverse order
  while (i >= 0) {
    var element = elements[i];
    var firstChild = getFirstChild(container);
    if (firstChild) {
      insertBefore(firstChild, element);
    } else {
      appendNode(container, element);
    }
    i -= 1;
  }
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var insertHtmlBefore = function insertHtmlBefore(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertBefore(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var replaceHtml = function replaceHtml(container, html) {
  insertHtmlBefore(container, html);
  removeNode(container);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var insertHtmlAfter = function insertHtmlAfter(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertAfter(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var setStyles = function setStyles(container, styles) {
  var priority = styles.priority,
    style = _objectWithoutProperties(styles, ["priority"]);
  Object.keys(style).forEach(function (key) {
    setStyle(container, key, style[key], priority);
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var setAttributes = function setAttributes(container, attributes) {
  Object.keys(attributes).forEach(function (key) {
    setAttribute(container, key, attributes[key]);
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var swapImage = function swapImage(container, url) {
  if (!isImage(container)) {
    return;
  }

  // Start downloading the image
  loadImage(url);

  // Remove "src" so there is no flicker
  removeAttribute(container, SRC);

  // Replace the image "src"
  setAttribute(container, SRC, url);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var rearrangeChildren = function rearrangeChildren(container, _ref71) {
  var from = _ref71.from,
    to = _ref71.to;
  var children = getChildren(container);
  var elementFrom = children[from];
  var elementTo = children[to];
  if (!elementFrom || !elementTo) {
    // TODO: We will need to add logging
    // to ease troubleshooting
    return;
  }
  if (from < to) {
    insertAfter(elementTo, elementFrom);
  } else {
    insertBefore(elementTo, elementFrom);
  }
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var renderContent = function renderContent(elements, content, renderFunc) {
  var executions = elements.map(function (element) {
    return renderFunc(element, content);
  });
  return Promise.all(executions);
};
var createAction = function createAction(renderFunc) {
  return function (itemData) {
    var selector = itemData.selector,
      prehidingSelector = itemData.prehidingSelector,
      content = itemData.content;
    hideElements(prehidingSelector);
    return awaitSelector(selector, selectNodesWithEq).then(function (elements) {
      return renderContent(elements, content, renderFunc);
    }).then(function () {
      // if everything is OK, show elements
      showElements(prehidingSelector);
    }, function (error) {
      // in case of awaiting timing or error, we need to remove the style tag
      // hence showing the pre-hidden elements
      showElements(prehidingSelector);
      throw error;
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var initDomActionsModules = function initDomActionsModules() {
  return {
    setHtml: createAction(setHtml),
    customCode: createAction(prependHtml),
    setText: createAction(setText),
    setAttribute: createAction(setAttributes),
    setImageSource: createAction(swapImage),
    setStyle: createAction(setStyles),
    move: createAction(setStyles),
    resize: createAction(setStyles),
    rearrange: createAction(rearrangeChildren),
    remove: createAction(removeNode),
    insertAfter: createAction(insertHtmlAfter),
    insertBefore: createAction(insertHtmlBefore),
    replaceHtml: createAction(replaceHtml),
    prependHtml: createAction(prependHtml),
    appendHtml: createAction(appendHtml)
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createCollect = function createCollect(_ref72) {
  var eventManager = _ref72.eventManager,
    mergeDecisionsMeta = _ref72.mergeDecisionsMeta;
  // Called when a decision is auto-rendered for the __view__ scope or a SPA view(display and empty display notification)
  return function (_ref73) {
    var _ref73$decisionsMeta = _ref73.decisionsMeta,
      decisionsMeta = _ref73$decisionsMeta === void 0 ? [] : _ref73$decisionsMeta,
      propositionAction = _ref73.propositionAction,
      _ref73$documentMayUnl = _ref73.documentMayUnload,
      documentMayUnload = _ref73$documentMayUnl === void 0 ? false : _ref73$documentMayUnl,
      _ref73$eventType = _ref73.eventType,
      eventType = _ref73$eventType === void 0 ? DISPLAY : _ref73$eventType,
      _ref73$propositionEve = _ref73.propositionEventTypes,
      propositionEventTypes = _ref73$propositionEve === void 0 ? [getPropositionEventType(eventType)] : _ref73$propositionEve,
      viewName = _ref73.viewName;
    var event = eventManager.createEvent();
    var data = {
      eventType: eventType
    };
    if (viewName) {
      data.web = {
        webPageDetails: {
          viewName: viewName
        }
      };
    }
    if (isNonEmptyArray(decisionsMeta)) {
      mergeDecisionsMeta(event, decisionsMeta, propositionEventTypes, propositionAction);
    }
    event.mergeXdm(data);
    if (documentMayUnload) {
      event.documentMayUnload();
    }
    return eventManager.sendEvent(event);
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var DECISIONS_HANDLE = "personalization:decisions";
var createFetchDataHandler = function createFetchDataHandler(_ref74) {
  var prehidingStyle = _ref74.prehidingStyle,
    showContainers = _ref74.showContainers,
    hideContainers = _ref74.hideContainers,
    mergeQuery = _ref74.mergeQuery,
    processPropositions = _ref74.processPropositions,
    createProposition = _ref74.createProposition,
    notificationHandler = _ref74.notificationHandler;
  return function (_ref75) {
    var cacheUpdate = _ref75.cacheUpdate,
      personalizationDetails = _ref75.personalizationDetails,
      event = _ref75.event,
      onResponse = _ref75.onResponse;
    if (personalizationDetails.isRenderDecisions()) {
      hideContainers(prehidingStyle);
    } else {
      showContainers();
    }
    mergeQuery(event, personalizationDetails.createQueryDetails());
    var handleNotifications = notificationHandler(personalizationDetails.isSendDisplayEvent(), personalizationDetails.getViewName());
    onResponse(function (_ref76) {
      var response = _ref76.response;
      var handles = response.getPayloadsByType(DECISIONS_HANDLE);
      var propositions = handles.map(function (handle) {
        return createProposition(handle);
      });
      var _groupBy = groupBy(propositions, function (p) {
          return p.getScopeType();
        }),
        _groupBy$page = _groupBy.page,
        pagePropositions = _groupBy$page === void 0 ? [] : _groupBy$page,
        _groupBy$view = _groupBy.view,
        viewPropositions = _groupBy$view === void 0 ? [] : _groupBy$view,
        _groupBy$proposition = _groupBy.proposition,
        nonRenderedPropositions = _groupBy$proposition === void 0 ? [] : _groupBy$proposition;
      var currentViewPropositions = cacheUpdate.update(viewPropositions);
      var render;
      var returnedPropositions;
      var returnedDecisions;
      if (personalizationDetails.isRenderDecisions()) {
        var _processPropositions = processPropositions([].concat(_toConsumableArray(pagePropositions), _toConsumableArray(currentViewPropositions)), nonRenderedPropositions);
        render = _processPropositions.render;
        returnedPropositions = _processPropositions.returnedPropositions;
        returnedDecisions = _processPropositions.returnedDecisions;
        render().then(handleNotifications);

        // Render could take a long time especially if one of the renders
        // is waiting for html to appear on the page. We show the containers
        // immediately, and whatever renders quickly will not have flicker.
        showContainers();
      } else {
        var _processPropositions2 = processPropositions([], [].concat(_toConsumableArray(pagePropositions), _toConsumableArray(currentViewPropositions), _toConsumableArray(nonRenderedPropositions)));
        returnedPropositions = _processPropositions2.returnedPropositions;
        returnedDecisions = _processPropositions2.returnedDecisions;
      }
      return {
        propositions: returnedPropositions,
        decisions: returnedDecisions
      };
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var matchesSelectorWithEq = function matchesSelectorWithEq(selector, element) {
  if (isNotEqSelector(selector)) {
    return matchesSelector(selector, element);
  }

  // Using node selection vs matches selector, because of :eq()
  // Find all nodes using document as context
  var nodes = selectNodesWithEq(selector);
  var result = false;

  // Iterate through all the identified elements
  // and reference compare with element
  for (var _i11 = 0; _i11 < nodes.length; _i11 += 1) {
    if (nodes[_i11] === element) {
      result = true;
      break;
    }
  }
  return result;
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var VIEW_SCOPE_TYPE = "view";
var PAGE_SCOPE_TYPE = "page";
var PROPOSITION_SCOPE_TYPE = "proposition";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getMetasIfMatches = function getMetasIfMatches(clickedElement, selector, getClickMetasBySelector) {
  var _document = document,
    documentElement = _document.documentElement;
  var element = clickedElement;
  var i = 0;
  while (element && element !== documentElement) {
    if (matchesSelectorWithEq(selector, element)) {
      var matchedMetas = getClickMetasBySelector(selector);
      var returnValue = {
        metas: matchedMetas
      };
      var foundMetaWithLabel = matchedMetas.find(function (meta) {
        return meta.trackingLabel;
      });
      if (foundMetaWithLabel) {
        returnValue.label = foundMetaWithLabel.trackingLabel;
        returnValue.weight = i;
      }
      var foundMetaWithScopeTypeView = matchedMetas.find(function (meta) {
        return meta.scopeType === VIEW_SCOPE_TYPE;
      });
      if (foundMetaWithScopeTypeView) {
        returnValue.viewName = foundMetaWithScopeTypeView.scope;
        returnValue.weight = i;
      }
      return returnValue;
    }
    element = element.parentNode;
    i += 1;
  }
  return {
    metas: null
  };
};
var cleanMetas = function cleanMetas(metas) {
  return metas.map(function (meta) {
    var trackingLabel = meta.trackingLabel,
      scopeType = meta.scopeType,
      rest = _objectWithoutProperties(meta, ["trackingLabel", "scopeType"]);
    return rest;
  });
};
var dedupMetas = function dedupMetas(metas) {
  return metas.filter(function (meta, index) {
    var stringifiedMeta = JSON.stringify(meta);
    return index === metas.findIndex(function (innerMeta) {
      return JSON.stringify(innerMeta) === stringifiedMeta;
    });
  });
};
var collectClicks = function collectClicks(clickedElement, selectors, getClickMetasBySelector) {
  var result = [];
  var resultLabel = "";
  var resultLabelWeight = Number.MAX_SAFE_INTEGER;
  var resultViewName;
  var resultViewNameWeight = Number.MAX_SAFE_INTEGER;

  /* eslint-disable no-continue */
  for (var _i12 = 0; _i12 < selectors.length; _i12 += 1) {
    var _getMetasIfMatches = getMetasIfMatches(clickedElement, selectors[_i12], getClickMetasBySelector),
      metas = _getMetasIfMatches.metas,
      label = _getMetasIfMatches.label,
      weight = _getMetasIfMatches.weight,
      viewName = _getMetasIfMatches.viewName;
    if (!metas) {
      continue;
    }
    if (label && weight <= resultLabelWeight) {
      resultLabel = label;
      resultLabelWeight = weight;
    }
    if (viewName && weight <= resultViewNameWeight) {
      resultViewName = viewName;
      resultViewNameWeight = weight;
    }
    result.push.apply(result, _toConsumableArray(cleanMetas(metas)));
  }
  return {
    decisionsMeta: dedupMetas(result),
    eventLabel: resultLabel,
    viewName: resultViewName
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var isAuthoringModeEnabled = function isAuthoringModeEnabled() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return doc.location.href.indexOf("adobe_authoring_enabled") !== -1;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* eslint-disable no-underscore-dangle */
var mergeDecisionsMeta = function mergeDecisionsMeta(event, decisionsMeta, propositionEventTypes, propositionAction) {
  // Do not send a display notification with no decisions. Even empty view changes
  // should include a proposition.
  if (decisionsMeta.length === 0) {
    return;
  }
  var propositionEventType = {};
  propositionEventTypes.forEach(function (type) {
    propositionEventType[type] = EVENT_TYPE_TRUE;
  });
  var xdm = {
    _experience: {
      decisioning: {
        propositions: decisionsMeta,
        propositionEventType: propositionEventType
      }
    }
  };
  if (propositionAction) {
    xdm._experience.decisioning.propositionAction = propositionAction;
  }
  event.mergeXdm(xdm);
};
var mergeQuery = function mergeQuery(event, details) {
  event.mergeQuery({
    personalization: _objectSpread({}, details)
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createOnClickHandler = function createOnClickHandler(_ref77) {
  var mergeDecisionsMeta = _ref77.mergeDecisionsMeta,
    collectClicks = _ref77.collectClicks,
    getClickSelectors = _ref77.getClickSelectors,
    getClickMetasBySelector = _ref77.getClickMetasBySelector;
  // Called when an element qualifying for conversion within an offer is clicked.
  return function (_ref78) {
    var event = _ref78.event,
      clickedElement = _ref78.clickedElement;
    var selectors = getClickSelectors();
    if (isNonEmptyArray(selectors)) {
      var _collectClicks = collectClicks(clickedElement, selectors, getClickMetasBySelector),
        decisionsMeta = _collectClicks.decisionsMeta,
        eventLabel = _collectClicks.eventLabel,
        viewName = _collectClicks.viewName;
      if (isNonEmptyArray(decisionsMeta)) {
        var xdm = {
          eventType: INTERACT
        };
        if (viewName) {
          xdm.web = {
            webPageDetails: {
              viewName: viewName
            }
          };
        }
        event.mergeXdm(xdm);
        mergeDecisionsMeta(event, decisionsMeta, [PropositionEventType.INTERACT], eventLabel ? {
          label: eventLabel
        } : undefined);
      }
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createViewCacheManager = function createViewCacheManager(_ref79) {
  var createProposition = _ref79.createProposition;
  var cacheUpdateCreatedAtLeastOnce = false;
  var viewStoragePromise = Promise.resolve({});
  var getViewPropositions = function getViewPropositions(viewStorage, viewName) {
    var viewPropositions = viewStorage[viewName.toLowerCase()];
    if (viewPropositions && viewPropositions.length > 0) {
      return viewPropositions;
    }
    var emptyViewProposition = createProposition({
      scope: viewName,
      scopeDetails: {
        characteristics: {
          scopeType: VIEW_SCOPE_TYPE
        }
      },
      items: [{
        schema: DEFAULT_CONTENT_ITEM
      }]
    }, false);
    return [emptyViewProposition];
  };

  // This should be called before making the request to experience edge.
  var createCacheUpdate = function createCacheUpdate(viewName) {
    var updateCacheDeferred = defer();
    cacheUpdateCreatedAtLeastOnce = true;

    // Additional updates will merge the new view propositions with the old.
    // i.e. if there are new "cart" view propositions they will overwrite the
    // old "cart" view propositions, but if there are no new "cart" view
    // propositions the old "cart" view propositions will remain.
    viewStoragePromise = viewStoragePromise.then(function (oldViewStorage) {
      return updateCacheDeferred.promise.then(function (newViewStorage) {
        return (0, _reactorObjectAssign["default"])({}, oldViewStorage, newViewStorage);
      })["catch"](function () {
        return oldViewStorage;
      });
    });
    return {
      update: function update(viewPropositions) {
        var viewPropositionsWithScope = viewPropositions.filter(function (proposition) {
          return proposition.getScope();
        });
        var newViewStorage = groupBy(viewPropositionsWithScope, function (proposition) {
          return proposition.getScope().toLowerCase();
        });
        updateCacheDeferred.resolve(newViewStorage);
        if (viewName) {
          return getViewPropositions(newViewStorage, viewName);
        }
        return [];
      },
      cancel: function cancel() {
        updateCacheDeferred.reject();
      }
    };
  };
  var getView = function getView(viewName) {
    return viewStoragePromise.then(function (viewStorage) {
      return getViewPropositions(viewStorage, viewName);
    });
  };
  var isInitialized = function isInitialized() {
    return cacheUpdateCreatedAtLeastOnce;
  };
  return {
    createCacheUpdate: createCacheUpdate,
    getView: getView,
    isInitialized: isInitialized
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createViewChangeHandler = function createViewChangeHandler(_ref80) {
  var processPropositions = _ref80.processPropositions,
    viewCache = _ref80.viewCache;
  return function (_ref81) {
    var personalizationDetails = _ref81.personalizationDetails,
      onResponse = _ref81.onResponse;
    var returnedPropositions;
    var returnedDecisions;
    var viewName = personalizationDetails.getViewName();
    onResponse(function () {
      return {
        propositions: returnedPropositions,
        decisions: returnedDecisions
      };
    });
    return viewCache.getView(viewName).then(function (propositions) {
      var render;
      if (personalizationDetails.isRenderDecisions()) {
        var _processPropositions3 = processPropositions(propositions);
        render = _processPropositions3.render;
        returnedPropositions = _processPropositions3.returnedPropositions;
        returnedDecisions = _processPropositions3.returnedDecisions;
        return render();
      }
      var _processPropositions4 = processPropositions([], propositions);
      returnedPropositions = _processPropositions4.returnedPropositions;
      returnedDecisions = _processPropositions4.returnedDecisions;
      return [];
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var metasToArray = function metasToArray(metas) {
  return Object.keys(metas).map(function (key) {
    return _objectSpread({
      id: key
    }, metas[key]);
  });
};
var createClickStorage = function createClickStorage() {
  var clickStorage = {};
  var storeClickMetrics = function storeClickMetrics(_ref82) {
    var selector = _ref82.selector,
      _ref82$meta = _ref82.meta,
      id = _ref82$meta.id,
      scope = _ref82$meta.scope,
      scopeDetails = _ref82$meta.scopeDetails,
      trackingLabel = _ref82$meta.trackingLabel,
      scopeType = _ref82$meta.scopeType;
    if (!clickStorage[selector]) {
      clickStorage[selector] = {};
    }
    clickStorage[selector][id] = {
      scope: scope,
      scopeDetails: scopeDetails,
      trackingLabel: trackingLabel,
      scopeType: scopeType
    };
  };
  var getClickSelectors = function getClickSelectors() {
    return Object.keys(clickStorage);
  };
  var getClickMetasBySelector = function getClickMetasBySelector(selector) {
    var metas = clickStorage[selector];
    if (!metas) {
      return {};
    }
    return metasToArray(clickStorage[selector]);
  };
  return {
    storeClickMetrics: storeClickMetrics,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var SUPPORTED_SCHEMAS = [DOM_ACTION, HTML_CONTENT_ITEM, MESSAGE_IN_APP];
var createApplyPropositions = function createApplyPropositions(_ref83) {
  var processPropositions = _ref83.processPropositions,
    createProposition = _ref83.createProposition,
    renderedPropositions = _ref83.renderedPropositions,
    viewCache = _ref83.viewCache;
  var filterItemsPredicate = function filterItemsPredicate(item) {
    return SUPPORTED_SCHEMAS.indexOf(item.schema) > -1;
  };
  var updatePropositionItems = function updatePropositionItems(_ref84) {
    var items = _ref84.items,
      metadataForScope = _ref84.metadataForScope;
    return items.filter(filterItemsPredicate).map(function (item) {
      if (item.schema !== HTML_CONTENT_ITEM) {
        return _objectSpread({}, item);
      }
      if (isObject(metadataForScope)) {
        return _objectSpread(_objectSpread({}, item), {}, {
          data: _objectSpread(_objectSpread({}, item.data), {}, {
            selector: metadataForScope.selector,
            type: metadataForScope.actionType
          })
        });
      }
      return undefined;
    }).filter(function (item) {
      return item;
    });
  };
  var filterPropositionsPredicate = function filterPropositionsPredicate(proposition) {
    return !(proposition.scope === PAGE_WIDE_SCOPE && proposition.renderAttempted);
  };
  var preparePropositions = function preparePropositions(_ref85) {
    var propositions = _ref85.propositions,
      metadata = _ref85.metadata;
    return propositions.filter(filterPropositionsPredicate).map(function (proposition) {
      if (isNonEmptyArray(proposition.items)) {
        var id = proposition.id,
          scope = proposition.scope,
          scopeDetails = proposition.scopeDetails;
        return {
          id: id,
          scope: scope,
          scopeDetails: scopeDetails,
          items: updatePropositionItems({
            items: proposition.items,
            metadataForScope: metadata[proposition.scope]
          })
        };
      }
      return proposition;
    }).filter(function (proposition) {
      return isNonEmptyArray(proposition.items);
    });
  };
  return function (_ref86) {
    var _ref86$propositions = _ref86.propositions,
      propositions = _ref86$propositions === void 0 ? [] : _ref86$propositions,
      _ref86$metadata = _ref86.metadata,
      metadata = _ref86$metadata === void 0 ? {} : _ref86$metadata,
      viewName = _ref86.viewName;
    // We need to immediately call concat so that subsequent sendEvent
    // calls will wait for applyPropositions to complete before executing.
    var renderedPropositionsDeferred = defer();
    renderedPropositions.concat(renderedPropositionsDeferred.promise);
    var propositionsToExecute = preparePropositions({
      propositions: propositions,
      metadata: metadata
    }).map(function (proposition) {
      return createProposition(proposition);
    });
    return Promise.resolve().then(function () {
      if (viewName) {
        return viewCache.getView(viewName);
      }
      return [];
    }).then(function (additionalPropositions) {
      var _processPropositions5 = processPropositions([].concat(_toConsumableArray(propositionsToExecute), _toConsumableArray(additionalPropositions))),
        render = _processPropositions5.render,
        returnedPropositions = _processPropositions5.returnedPropositions;
      render().then(renderedPropositionsDeferred.resolve);
      return {
        propositions: returnedPropositions
      };
    });
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createGetPageLocation = function createGetPageLocation(_ref87) {
  var window = _ref87.window;
  return function () {
    return window.location;
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createSetTargetMigration = function createSetTargetMigration(_ref88) {
  var targetMigrationEnabled = _ref88.targetMigrationEnabled;
  if (targetMigrationEnabled) {
    return function (request) {
      request.getPayload().mergeMeta({
        target: {
          migration: true
        }
      });
    };
  }
  return noop;
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var ACTION_CUSTOM_CODE = "customCode";
var TARGET_BODY_SELECTOR = "BODY > *:eq(0)";
var remapCustomCodeOffers = function remapCustomCodeOffers(action) {
  var selector = action.selector,
    type = action.type;
  if (type !== ACTION_CUSTOM_CODE) {
    return action;
  }
  if (selector !== TARGET_BODY_SELECTOR) {
    return action;
  }
  return (0, _reactorObjectAssign["default"])({}, action, {
    selector: "BODY"
  });
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether a string value is blank. Also returns true if the value is not a string.
 * @param {*} value
 * @returns {boolean}
 */
var isBlankString = function isBlankString(value) {
  return isString(value) ? !value.trim() : true;
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var APPEND_HTML = "appendHtml";
var HEAD_TAGS_SELECTOR = "SCRIPT,LINK,STYLE";
var filterHeadContent = function filterHeadContent(content) {
  var container = createFragment(content);
  var headNodes = selectNodes(HEAD_TAGS_SELECTOR, container);
  return headNodes.map(function (node) {
    return node.outerHTML;
  }).join("");
};
var remapHeadOffers = function remapHeadOffers(action) {
  var result = (0, _reactorObjectAssign["default"])({}, action);
  var content = result.content,
    selector = result.selector;
  if (isBlankString(content)) {
    return result;
  }
  if (selector == null) {
    return result;
  }
  var container = selectNodesWithEq(selector);
  if (!is$1(container[0], HEAD)) {
    return result;
  }
  result.type = APPEND_HTML;
  result.content = filterHeadContent(content);
  return result;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createPreprocess = function createPreprocess(preprocessors) {
  return function (action) {
    if (!action) {
      return action;
    }
    return preprocessors.reduce(function (processed, fn) {
      return (0, _reactorObjectAssign["default"])(processed, fn(processed));
    }, action);
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectCreateProposition = function injectCreateProposition(_ref89) {
  var preprocess = _ref89.preprocess,
    isPageWideSurface = _ref89.isPageWideSurface;
  var createItem = function createItem(item, proposition) {
    var schema = item.schema,
      data = item.data,
      _item$characteristics = item.characteristics;
    _item$characteristics = _item$characteristics === void 0 ? {} : _item$characteristics;
    var trackingLabel = _item$characteristics.trackingLabel;
    var processedData = preprocess(data);
    return {
      getSchema: function getSchema() {
        return schema;
      },
      getData: function getData() {
        return processedData;
      },
      getProposition: function getProposition() {
        return proposition;
      },
      getTrackingLabel: function getTrackingLabel() {
        return trackingLabel;
      },
      getOriginalItem: function getOriginalItem() {
        return item;
      },
      toString: function toString() {
        return JSON.stringify(item);
      },
      toJSON: function toJSON() {
        return item;
      }
    };
  };
  return function (payload) {
    var visibleInReturnedItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var id = payload.id,
      scope = payload.scope,
      scopeDetails = payload.scopeDetails,
      _payload$items = payload.items,
      items = _payload$items === void 0 ? [] : _payload$items;
    var _ref90 = scopeDetails || {},
      _ref90$characteristic = _ref90.characteristics;
    _ref90$characteristic = _ref90$characteristic === void 0 ? {} : _ref90$characteristic;
    var scopeType = _ref90$characteristic.scopeType;
    return {
      getScope: function getScope() {
        if (!scope) {
          return scope;
        }
        return scope;
      },
      getScopeType: function getScopeType() {
        if (scope === PAGE_WIDE_SCOPE || isPageWideSurface(scope)) {
          return PAGE_SCOPE_TYPE;
        }
        if (scopeType === VIEW_SCOPE_TYPE) {
          return VIEW_SCOPE_TYPE;
        }
        return PROPOSITION_SCOPE_TYPE;
      },
      getItems: function getItems() {
        var _this6 = this;
        return items.map(function (item) {
          return createItem(item, _this6);
        });
      },
      getNotification: function getNotification() {
        return {
          id: id,
          scope: scope,
          scopeDetails: scopeDetails
        };
      },
      toJSON: function toJSON() {
        return payload;
      },
      addToReturnValues: function addToReturnValues(propositions, decisions, includedItems, renderAttempted) {
        if (visibleInReturnedItems) {
          propositions.push(_objectSpread(_objectSpread({}, payload), {}, {
            items: includedItems.map(function (i) {
              return i.getOriginalItem();
            }),
            renderAttempted: renderAttempted
          }));
          if (!renderAttempted) {
            decisions.push(_objectSpread(_objectSpread({}, payload), {}, {
              items: includedItems.map(function (i) {
                return i.getOriginalItem();
              })
            }));
          }
        }
      }
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createAsyncArray = function createAsyncArray() {
  var latest = Promise.resolve([]);
  return {
    concat: function concat(promise) {
      latest = latest.then(function (existingPropositions) {
        return promise.then(function (newPropositions) {
          return existingPropositions.concat(newPropositions);
        })["catch"](function () {
          return existingPropositions;
        });
      });
    },
    /**
     * Clears the saved propositions, waiting until the next propositions are resolved and available.
     *
     * @returns {Promise<Array>} A promise that resolves to the latest propositions.
     */
    clear: function clear() {
      var oldLatest = latest;
      latest = Promise.resolve([]);
      return oldLatest;
    }
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var processDefaultContent = function processDefaultContent() {
  return {
    setRenderAttempted: true,
    includeInNotification: true
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createProcessDomAction = function createProcessDomAction(_ref91) {
  var modules = _ref91.modules,
    logger = _ref91.logger,
    storeClickMetrics = _ref91.storeClickMetrics;
  return function (item) {
    var _ref92 = item.getData() || {},
      type = _ref92.type,
      selector = _ref92.selector;
    if (!type) {
      logger.warn("Invalid DOM action data: missing type.", item.getData());
      return {
        setRenderAttempted: false,
        includeInNotification: false
      };
    }
    if (type === "click") {
      if (!selector) {
        logger.warn("Invalid DOM action data: missing selector.", item.getData());
        return {
          setRenderAttempted: false,
          includeInNotification: false
        };
      }
      storeClickMetrics({
        selector: selector,
        meta: _objectSpread(_objectSpread({}, item.getProposition().getNotification()), {}, {
          trackingLabel: item.getTrackingLabel(),
          scopeType: item.getProposition().getScopeType()
        })
      });
      return {
        setRenderAttempted: true,
        includeInNotification: false
      };
    }
    if (!modules[type]) {
      logger.warn("Invalid DOM action data: unknown type.", item.getData());
      return {
        setRenderAttempted: false,
        includeInNotification: false
      };
    }
    return {
      render: function render() {
        return modules[type](item.getData());
      },
      setRenderAttempted: true,
      includeInNotification: true
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createProcessHtmlContent = function createProcessHtmlContent(_ref93) {
  var modules = _ref93.modules,
    logger = _ref93.logger;
  return function (item) {
    var _ref94 = item.getData() || {},
      type = _ref94.type,
      selector = _ref94.selector;
    if (!selector || !type) {
      return {
        setRenderAttempted: false,
        includeInNotification: false
      };
    }
    if (!modules[type]) {
      logger.warn("Invalid HTML content data", item.getData());
      return {
        setRenderAttempted: false,
        includeInNotification: false
      };
    }
    return {
      render: function render() {
        modules[type](item.getData());
      },
      setRenderAttempted: true,
      includeInNotification: true
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createProcessRedirect = function createProcessRedirect(_ref95) {
  var logger = _ref95.logger,
    executeRedirect = _ref95.executeRedirect,
    collect = _ref95.collect;
  return function (item) {
    var _ref96 = item.getData() || {},
      content = _ref96.content;
    if (!content) {
      logger.warn("Invalid Redirect data", item.getData());
      return {};
    }
    var render = function render() {
      return collect({
        decisionsMeta: [item.getProposition().getNotification()],
        documentMayUnload: true
      }).then(function () {
        return executeRedirect(content);
        // Execute redirect will never resolve. If there are bottom of page events that are waiting
        // for display notifications from this request, they will never run because this promise will
        // not resolve. This is intentional because we don't want to run bottom of page events if
        // there is a redirect.
      });
    };

    return {
      render: render,
      setRenderAttempted: true,
      onlyRenderThis: true
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createProcessPropositions = function createProcessPropositions(_ref97) {
  var schemaProcessors = _ref97.schemaProcessors,
    logger = _ref97.logger;
  var wrapRenderWithLogging = function wrapRenderWithLogging(render, item) {
    return function () {
      return Promise.resolve().then(render).then(function () {
        if (logger.enabled) {
          logger.info("Action ".concat(item.toString(), " executed."));
        }
        return true;
      })["catch"](function (error) {
        if (logger.enabled) {
          var message = error.message,
            stack = error.stack;
          var warning = "Failed to execute action ".concat(item.toString(), ". ").concat(message, " ").concat(stack);
          logger.warn(warning);
        }
        return false;
      });
    };
  };
  var renderItems = function renderItems(renderers, meta) {
    return Promise.all(renderers.map(function (renderer) {
      return renderer();
    })).then(function (successes) {
      // as long as at least one renderer succeeds, we want to add the notification
      // to the display notifications
      if (!successes.includes(true)) {
        return undefined;
      }
      return meta;
    });
  };
  var processItem = function processItem(item) {
    var processor = schemaProcessors[item.getSchema()];
    if (!processor) {
      return {};
    }
    return processor(item);
  };
  var processItems = function processItems(_ref98) {
    var existingRenderers = _ref98.renderers,
      existingReturnedPropositions = _ref98.returnedPropositions,
      existingReturnedDecisions = _ref98.returnedDecisions,
      items = _ref98.items,
      proposition = _ref98.proposition;
    var renderers = _toConsumableArray(existingRenderers);
    var returnedPropositions = _toConsumableArray(existingReturnedPropositions);
    var returnedDecisions = _toConsumableArray(existingReturnedDecisions);
    var renderedItems = [];
    var nonRenderedItems = [];
    var itemRenderers = [];
    var atLeastOneWithNotification = false;
    var render;
    var setRenderAttempted;
    var includeInNotification;
    var onlyRenderThis = false;
    var i = 0;
    var item;
    while (items.length > i) {
      item = items[i];
      var _processItem = processItem(item);
      render = _processItem.render;
      setRenderAttempted = _processItem.setRenderAttempted;
      includeInNotification = _processItem.includeInNotification;
      onlyRenderThis = _processItem.onlyRenderThis;
      if (onlyRenderThis) {
        returnedPropositions = [];
        returnedDecisions = [];
        if (setRenderAttempted) {
          renderedItems = [item];
          nonRenderedItems = [];
        } else {
          renderedItems = [];
          nonRenderedItems = [item];
        }
        renderers = [];
        itemRenderers = [render];
        atLeastOneWithNotification = includeInNotification;
        break;
      }
      if (render) {
        itemRenderers.push(wrapRenderWithLogging(render, item));
      }
      if (includeInNotification) {
        atLeastOneWithNotification = true;
      }
      if (setRenderAttempted) {
        renderedItems.push(item);
      } else {
        nonRenderedItems.push(item);
      }
      i += 1;
    }
    if (itemRenderers.length > 0) {
      var meta = atLeastOneWithNotification ? proposition.getNotification() : undefined;
      renderers.push(function () {
        return renderItems(itemRenderers, meta);
      });
    } else if (atLeastOneWithNotification) {
      renderers.push(function () {
        return proposition.getNotification();
      });
    }
    if (renderedItems.length > 0) {
      proposition.addToReturnValues(returnedPropositions, returnedDecisions, renderedItems, true);
    }
    if (nonRenderedItems.length > 0) {
      proposition.addToReturnValues(returnedPropositions, returnedDecisions, nonRenderedItems, false);
    }
    return {
      renderers: renderers,
      returnedPropositions: returnedPropositions,
      returnedDecisions: returnedDecisions,
      onlyRenderThis: onlyRenderThis
    };
  };
  return function (renderPropositions) {
    var nonRenderPropositions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var renderers = [];
    var returnedPropositions = [];
    var returnedDecisions = [];
    var onlyRenderThis;
    var i = 0;
    var proposition;
    var items;
    while (renderPropositions.length > i) {
      proposition = renderPropositions[i];
      items = proposition.getItems();
      var _processItems = processItems({
        renderers: renderers,
        returnedPropositions: returnedPropositions,
        returnedDecisions: returnedDecisions,
        items: items,
        proposition: proposition
      });
      renderers = _processItems.renderers;
      returnedPropositions = _processItems.returnedPropositions;
      returnedDecisions = _processItems.returnedDecisions;
      onlyRenderThis = _processItems.onlyRenderThis;
      if (onlyRenderThis) {
        break;
      }
      i += 1;
    }
    if (onlyRenderThis) {
      // if onlyRenderThis is true, that means returnedPropositions and returnedDecisions
      // only contains the proposition that triggered only rendering this. We need to
      // add the other propositions to the returnedPropositions and returnedDecisions.
      renderPropositions.forEach(function (p, index) {
        if (index !== i) {
          p.addToReturnValues(returnedPropositions, returnedDecisions, p.getItems(), false);
        }
      });
    }
    nonRenderPropositions.forEach(function (p) {
      p.addToReturnValues(returnedPropositions, returnedDecisions, p.getItems(), false);
    });
    var render = function render() {
      return Promise.all(renderers.map(function (renderer) {
        return renderer();
      })).then(function (metas) {
        return metas.filter(function (meta) {
          return meta;
        });
      });
    };
    return {
      returnedPropositions: returnedPropositions,
      returnedDecisions: returnedDecisions,
      render: render
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createOnDecisionHandler = function createOnDecisionHandler(_ref99) {
  var processPropositions = _ref99.processPropositions,
    createProposition = _ref99.createProposition,
    notificationHandler = _ref99.notificationHandler;
  return function (_ref100) {
    var renderDecisions = _ref100.renderDecisions,
      propositions = _ref100.propositions,
      event = _ref100.event,
      _ref100$personalizati = _ref100.personalization,
      personalization = _ref100$personalizati === void 0 ? {} : _ref100$personalizati;
    if (!renderDecisions) {
      return Promise.resolve();
    }
    var _personalization$send = personalization.sendDisplayEvent,
      sendDisplayEvent = _personalization$send === void 0 ? true : _personalization$send;
    var viewName = event ? event.getViewName() : undefined;
    var propositionsToExecute = propositions.map(function (proposition) {
      return createProposition(proposition, true);
    });
    var _processPropositions6 = processPropositions(propositionsToExecute),
      render = _processPropositions6.render,
      returnedPropositions = _processPropositions6.returnedPropositions;
    var handleNotifications = notificationHandler(sendDisplayEvent, viewName);
    render().then(handleNotifications);
    return Promise.resolve({
      propositions: returnedPropositions
    });
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var TEXT_HTML = "text/html";
var APPLICATION_JSON = "application/json";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var DEFAULT_CONTENT = "defaultContent";
var expectedProps = ["content", "contentType"];
var expectedContentProps = ["mobileParameters", "webParameters", "html"];
var isValidInAppMessage = function isValidInAppMessage(data, logger) {
  for (var _i13 = 0; _i13 < expectedProps.length; _i13 += 1) {
    var prop = expectedProps[_i13];
    if (!Object.prototype.hasOwnProperty.call(data, prop)) {
      logger.warn("Invalid in-app message data: missing property '".concat(prop, "'."), data);
      return false;
    }
  }
  var content = data.content,
    contentType = data.contentType;
  if (contentType === APPLICATION_JSON) {
    for (var _i14 = 0; _i14 < expectedContentProps.length; _i14 += 1) {
      var _prop = expectedContentProps[_i14];
      if (!Object.prototype.hasOwnProperty.call(content, _prop)) {
        logger.warn("Invalid in-app message data.content: missing property '".concat(_prop, "'."), data);
        return false;
      }
    }
  }
  return true;
};
var createProcessInAppMessage = function createProcessInAppMessage(_ref101) {
  var modules = _ref101.modules,
    logger = _ref101.logger;
  return function (item) {
    var data = item.getData();
    var meta = _objectSpread({}, item.getProposition().getNotification());
    if (!data) {
      logger.warn("Invalid in-app message data: undefined.", data);
      return {};
    }
    var _data$type = data.type,
      type = _data$type === void 0 ? DEFAULT_CONTENT : _data$type;
    if (!modules[type]) {
      logger.warn("Invalid in-app message data: unknown type.", data);
      return {};
    }
    if (!isValidInAppMessage(data, logger)) {
      return {};
    }
    if (!meta) {
      logger.warn("Invalid in-app message meta: undefined.", meta);
      return {};
    }
    return {
      render: function render() {
        return modules[type](_objectSpread(_objectSpread({}, data), {}, {
          meta: meta
        }));
      },
      setRenderAttempted: true,
      includeInNotification: true
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var removeElementById = function removeElementById(id) {
  var element = selectNodes("#".concat(id), document);
  if (element && element.length > 0) {
    removeNode(element[0]);
  }
};
var parseAnchor = function parseAnchor(anchor) {
  var nothing = {};
  if (!anchor || anchor.tagName.toLowerCase() !== "a") {
    return nothing;
  }
  var href = anchor.href;
  if (!href || !startsWith(href, "adbinapp://")) {
    return nothing;
  }
  var hrefParts = href.split("?");
  var action = hrefParts[0].split("://")[1];
  var label = anchor.innerText;
  var uuid = anchor.getAttribute("data-uuid") || "";
  var interaction;
  var link;
  if (isNonEmptyArray(hrefParts)) {
    var queryParams = _reactorQueryString["default"].parse(hrefParts[1]);
    interaction = queryParams.interaction || "";
    link = decodeURIComponent(queryParams.link || "");
  }
  return {
    action: action,
    interaction: interaction,
    link: link,
    label: label,
    uuid: uuid
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createRedirect = function createRedirect(window) {
  return function (url) {
    var preserveHistory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (preserveHistory) {
      window.location.href = url;
    } else {
      window.location.replace(url);
    }
    // Return a promise that never resolves because redirects never complete
    // within the current page.
    return new Promise(function () {
      return undefined;
    });
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var MESSAGING_CONTAINER_ID = "alloy-messaging-container";
var OVERLAY_CONTAINER_ID = "alloy-overlay-container";
var IFRAME_ID = "alloy-content-iframe";
var dismissMessage = function dismissMessage() {
  return [MESSAGING_CONTAINER_ID, OVERLAY_CONTAINER_ID].forEach(removeElementById);
};
var createIframeClickHandler = function createIframeClickHandler(interact) {
  var navigateToUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createRedirect(window);
  return function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var target = event.target;
    var anchor = target.tagName.toLowerCase() === "a" ? target : target.closest("a");
    if (!anchor) {
      return;
    }
    var _parseAnchor = parseAnchor(anchor),
      action = _parseAnchor.action,
      interaction = _parseAnchor.interaction,
      link = _parseAnchor.link,
      label = _parseAnchor.label,
      uuid = _parseAnchor.uuid;
    interact(action, {
      label: label,
      id: interaction,
      uuid: uuid,
      link: link
    });
    if (action === "dismiss") {
      dismissMessage();
    }
    if (isNonEmptyString(link) && link.length > 0) {
      navigateToUrl(link, true);
    }
  };
};
var createIframe = function createIframe(htmlContent, clickHandler) {
  var parser = new DOMParser();
  var htmlDocument = parser.parseFromString(htmlContent, TEXT_HTML);
  var scriptTag = htmlDocument.querySelector("script");
  if (scriptTag) {
    scriptTag.setAttribute("nonce", getNonce());
  }
  var element = createNode("iframe", {
    src: URL.createObjectURL(new Blob([htmlDocument.documentElement.outerHTML], {
      type: "text/html"
    })),
    id: IFRAME_ID
  });
  element.addEventListener("load", function () {
    var _ref102 = element.contentDocument || element.contentWindow.document,
      addEventListener = _ref102.addEventListener;
    addEventListener("click", clickHandler);
  });
  return element;
};
var renderMessage = function renderMessage(iframe, webParameters, container, overlay) {
  [{
    id: OVERLAY_CONTAINER_ID,
    element: overlay
  }, {
    id: MESSAGING_CONTAINER_ID,
    element: container
  }, {
    id: IFRAME_ID,
    element: iframe
  }].forEach(function (_ref103) {
    var id = _ref103.id,
      element = _ref103.element;
    var _webParameters$id = webParameters[id],
      _webParameters$id$sty = _webParameters$id.style,
      style = _webParameters$id$sty === void 0 ? {} : _webParameters$id$sty,
      _webParameters$id$par = _webParameters$id.params,
      params = _webParameters$id$par === void 0 ? {} : _webParameters$id$par;
    (0, _reactorObjectAssign["default"])(element.style, style);
    var _params$parentElement = params.parentElement,
      parentElement = _params$parentElement === void 0 ? "body" : _params$parentElement,
      _params$insertionMeth = params.insertionMethod,
      insertionMethod = _params$insertionMeth === void 0 ? "appendChild" : _params$insertionMeth,
      _params$enabled = params.enabled,
      enabled = _params$enabled === void 0 ? true : _params$enabled;
    var parent = document.querySelector(parentElement);
    if (enabled && parent && typeof parent[insertionMethod] === "function") {
      parent[insertionMethod](element);
    }
  });
};
var buildStyleFromMobileParameters = function buildStyleFromMobileParameters(mobileParameters) {
  var verticalAlign = mobileParameters.verticalAlign,
    width = mobileParameters.width,
    horizontalAlign = mobileParameters.horizontalAlign,
    backdropColor = mobileParameters.backdropColor,
    height = mobileParameters.height,
    cornerRadius = mobileParameters.cornerRadius,
    horizontalInset = mobileParameters.horizontalInset,
    verticalInset = mobileParameters.verticalInset,
    _mobileParameters$uiT = mobileParameters.uiTakeover,
    uiTakeover = _mobileParameters$uiT === void 0 ? false : _mobileParameters$uiT;
  var style = {
    width: width ? "".concat(width, "%") : "100%",
    backgroundColor: backdropColor || "rgba(0, 0, 0, 0.5)",
    borderRadius: cornerRadius ? "".concat(cornerRadius, "px") : "0px",
    border: "none",
    position: uiTakeover ? "fixed" : "relative",
    overflow: "hidden"
  };
  if (horizontalAlign === "left") {
    style.left = horizontalInset ? "".concat(horizontalInset, "%") : "0";
  } else if (horizontalAlign === "right") {
    style.right = horizontalInset ? "".concat(horizontalInset, "%") : "0";
  } else if (horizontalAlign === "center") {
    style.left = "50%";
    style.transform = "translateX(-50%)";
  }
  if (verticalAlign === "top") {
    style.top = verticalInset ? "".concat(verticalInset, "%") : "0";
  } else if (verticalAlign === "bottom") {
    style.position = "fixed";
    style.bottom = verticalInset ? "".concat(verticalInset, "%") : "0";
  } else if (verticalAlign === "center") {
    style.top = "50%";
    style.transform = "".concat(horizontalAlign === "center" ? "".concat(style.transform, " ") : "", "translateY(-50%)");
    style.display = "flex";
    style.alignItems = "center";
    style.justifyContent = "center";
  }
  if (height) {
    style.height = "".concat(height, "vh");
  } else {
    style.height = "100%";
  }
  return style;
};
var mobileOverlay = function mobileOverlay(mobileParameters) {
  var backdropOpacity = mobileParameters.backdropOpacity,
    backdropColor = mobileParameters.backdropColor;
  var opacity = backdropOpacity || 0.5;
  var color = backdropColor || "#FFFFFF";
  var style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "transparent",
    opacity: opacity,
    backgroundColor: color
  };
  return style;
};
var REQUIRED_PARAMS = ["enabled", "parentElement", "insertionMethod"];
var isValidWebParameters = function isValidWebParameters(webParameters) {
  if (!webParameters) {
    return false;
  }
  var ids = Object.keys(webParameters);
  if (!includes(ids, MESSAGING_CONTAINER_ID)) {
    return false;
  }
  if (!includes(ids, OVERLAY_CONTAINER_ID)) {
    return false;
  }
  var valuesArray = values(webParameters);
  for (var _i15 = 0; _i15 < valuesArray.length; _i15 += 1) {
    if (!boundObjectOf(valuesArray[_i15], "style")) {
      return false;
    }
    if (!boundObjectOf(valuesArray[_i15], "params")) {
      return false;
    }
    for (var j = 0; j < REQUIRED_PARAMS.length; j += 1) {
      if (!boundObjectOf(valuesArray[_i15].params, REQUIRED_PARAMS[j])) {
        return false;
      }
    }
  }
  return true;
};
var generateWebParameters = function generateWebParameters(mobileParameters) {
  var _ref104;
  if (!mobileParameters) {
    return undefined;
  }
  var _mobileParameters$uiT2 = mobileParameters.uiTakeover,
    uiTakeover = _mobileParameters$uiT2 === void 0 ? false : _mobileParameters$uiT2;
  return _ref104 = {}, _defineProperty(_ref104, IFRAME_ID, {
    style: {
      border: "none",
      width: "100%",
      height: "100%"
    },
    params: {
      enabled: true,
      parentElement: "#alloy-messaging-container",
      insertionMethod: "appendChild"
    }
  }), _defineProperty(_ref104, MESSAGING_CONTAINER_ID, {
    style: buildStyleFromMobileParameters(mobileParameters),
    params: {
      enabled: true,
      parentElement: "body",
      insertionMethod: "appendChild"
    }
  }), _defineProperty(_ref104, OVERLAY_CONTAINER_ID, {
    style: mobileOverlay(mobileParameters),
    params: {
      enabled: uiTakeover === true,
      parentElement: "body",
      insertionMethod: "appendChild"
    }
  }), _ref104;
};
var displayHTMLContentInIframe = function displayHTMLContentInIframe() {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var interact = arguments.length > 1 ? arguments[1] : undefined;
  dismissMessage();
  var content = settings.content,
    contentType = settings.contentType,
    mobileParameters = settings.mobileParameters;
  var webParameters = settings.webParameters;
  if (contentType !== TEXT_HTML) {
    return;
  }
  var container = createNode("div", {
    id: MESSAGING_CONTAINER_ID
  });
  var iframe = createIframe(content, createIframeClickHandler(interact));
  var overlay = createNode("div", {
    id: OVERLAY_CONTAINER_ID
  });
  if (!isValidWebParameters(webParameters)) {
    webParameters = generateWebParameters(mobileParameters);
  }
  if (!webParameters) {
    return;
  }
  renderMessage(iframe, webParameters, container, overlay);
};
var displayIframeContent = function displayIframeContent(settings, collect) {
  return new Promise(function (resolve) {
    var meta = settings.meta;
    displayHTMLContentInIframe(settings, function (action, propositionAction) {
      var propositionEventTypes = {};
      propositionEventTypes[PropositionEventType.INTERACT] = EVENT_TYPE_TRUE;
      if (Object.values(PropositionEventType).indexOf(action) !== -1) {
        propositionEventTypes[action] = EVENT_TYPE_TRUE;
      }
      collect({
        decisionsMeta: [meta],
        propositionAction: propositionAction,
        eventType: INTERACT,
        propositionEventTypes: Object.keys(propositionEventTypes)
      });
    });
    resolve({
      meta: meta
    });
  });
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var initInAppMessageActionsModules = function initInAppMessageActionsModules(collect) {
  return {
    defaultContent: function defaultContent(settings) {
      return displayIframeContent(settings, collect);
    }
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createNotificationHandler = function createNotificationHandler(collect, renderedPropositions) {
  return function (sendDisplayEvent, viewName) {
    if (!sendDisplayEvent) {
      var renderedPropositionsDeferred = defer();
      renderedPropositions.concat(renderedPropositionsDeferred.promise);
      return renderedPropositionsDeferred.resolve;
    }
    return function (decisionsMeta) {
      if (decisionsMeta.length > 0) {
        collect({
          decisionsMeta: decisionsMeta,
          viewName: viewName
        });
      }
    };
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createPersonalization = function createPersonalization(_ref105) {
  var _schemaProcessors;
  var config = _ref105.config,
    logger = _ref105.logger,
    eventManager = _ref105.eventManager;
  var targetMigrationEnabled = config.targetMigrationEnabled,
    prehidingStyle = config.prehidingStyle;
  var collect = createCollect({
    eventManager: eventManager,
    mergeDecisionsMeta: mergeDecisionsMeta
  });
  var _createClickStorage = createClickStorage(),
    getClickMetasBySelector = _createClickStorage.getClickMetasBySelector,
    getClickSelectors = _createClickStorage.getClickSelectors,
    storeClickMetrics = _createClickStorage.storeClickMetrics;
  var getPageLocation = createGetPageLocation({
    window: window
  });
  var domActionsModules = initDomActionsModules();
  var preprocess = createPreprocess([remapHeadOffers, remapCustomCodeOffers]);
  var createProposition = injectCreateProposition({
    preprocess: preprocess,
    isPageWideSurface: isPageWideSurface
  });
  var viewCache = createViewCacheManager({
    createProposition: createProposition
  });
  var executeRedirect = createRedirect(window);
  var schemaProcessors = (_schemaProcessors = {}, _defineProperty(_schemaProcessors, DEFAULT_CONTENT_ITEM, processDefaultContent), _defineProperty(_schemaProcessors, DOM_ACTION, createProcessDomAction({
    modules: domActionsModules,
    logger: logger,
    storeClickMetrics: storeClickMetrics
  })), _defineProperty(_schemaProcessors, HTML_CONTENT_ITEM, createProcessHtmlContent({
    modules: domActionsModules,
    logger: logger
  })), _defineProperty(_schemaProcessors, REDIRECT_ITEM, createProcessRedirect({
    logger: logger,
    executeRedirect: executeRedirect,
    collect: collect
  })), _defineProperty(_schemaProcessors, MESSAGE_IN_APP, createProcessInAppMessage({
    modules: initInAppMessageActionsModules(collect),
    logger: logger
  })), _schemaProcessors);
  var processPropositions = createProcessPropositions({
    schemaProcessors: schemaProcessors,
    logger: logger
  });
  var renderedPropositions = createAsyncArray();
  var notificationHandler = createNotificationHandler(collect, renderedPropositions);
  var fetchDataHandler = createFetchDataHandler({
    prehidingStyle: prehidingStyle,
    showContainers: showContainers,
    hideContainers: hideContainers,
    mergeQuery: mergeQuery,
    processPropositions: processPropositions,
    createProposition: createProposition,
    notificationHandler: notificationHandler
  });
  var onClickHandler = createOnClickHandler({
    mergeDecisionsMeta: mergeDecisionsMeta,
    collectClicks: collectClicks,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  });
  var viewChangeHandler = createViewChangeHandler({
    processPropositions: processPropositions,
    viewCache: viewCache
  });
  var applyPropositions = createApplyPropositions({
    processPropositions: processPropositions,
    createProposition: createProposition,
    renderedPropositions: renderedPropositions,
    viewCache: viewCache
  });
  var setTargetMigration = createSetTargetMigration({
    targetMigrationEnabled: targetMigrationEnabled
  });
  var onDecisionHandler = createOnDecisionHandler({
    processPropositions: processPropositions,
    createProposition: createProposition,
    notificationHandler: notificationHandler
  });
  return createComponent$1({
    getPageLocation: getPageLocation,
    logger: logger,
    fetchDataHandler: fetchDataHandler,
    viewChangeHandler: viewChangeHandler,
    onClickHandler: onClickHandler,
    isAuthoringModeEnabled: isAuthoringModeEnabled,
    mergeQuery: mergeQuery,
    viewCache: viewCache,
    showContainers: showContainers,
    applyPropositions: applyPropositions,
    setTargetMigration: setTargetMigration,
    mergeDecisionsMeta: mergeDecisionsMeta,
    renderedPropositions: renderedPropositions,
    onDecisionHandler: onDecisionHandler
  });
};
createPersonalization.namespace = "Personalization";
createPersonalization.configValidators = boundObjectOf({
  prehidingStyle: boundString().nonEmpty(),
  targetMigrationEnabled: boundBoolean()["default"](false)
});

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectWeb = function injectWeb(window) {
  return function (xdm) {
    var web = {
      webPageDetails: {
        URL: window.location.href || window.location
      },
      webReferrer: {
        URL: window.document.referrer
      }
    };
    deepAssign(xdm, {
      web: web
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getScreenOrientationViaProperty = function getScreenOrientationViaProperty(window) {
  var orientation = window.screen.orientation;
  if (orientation == null || orientation.type == null) {
    return null;
  }
  var parts = orientation.type.split("-");
  if (parts.length === 0) {
    return null;
  }
  if (parts[0] !== "portrait" && parts[0] !== "landscape") {
    return null;
  }
  return parts[0];
};
var getScreenOrientationViaMediaQuery = function getScreenOrientationViaMediaQuery(window) {
  if (isFunction(window.matchMedia)) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait";
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape";
    }
  }
  return null;
};
var injectDevice = function injectDevice(window) {
  return function (xdm) {
    var _window$screen = window.screen,
      width = _window$screen.width,
      height = _window$screen.height;
    var device = {};
    var screenHeight = toInteger(height);
    if (screenHeight >= 0) {
      device.screenHeight = screenHeight;
    }
    var screenWidth = toInteger(width);
    if (screenWidth >= 0) {
      device.screenWidth = screenWidth;
    }
    var orientation = getScreenOrientationViaProperty(window) || getScreenOrientationViaMediaQuery(window);
    if (orientation) {
      device.screenOrientation = orientation;
    }
    if (Object.keys(device).length > 0) {
      deepAssign(xdm, {
        device: device
      });
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectEnvironment = function injectEnvironment(window) {
  return function (xdm) {
    var _window$document$docu = window.document.documentElement;
    _window$document$docu = _window$document$docu === void 0 ? {} : _window$document$docu;
    var clientWidth = _window$document$docu.clientWidth,
      clientHeight = _window$document$docu.clientHeight;
    var environment = {
      type: "browser"
    };
    var viewportWidth = toInteger(clientWidth);
    if (viewportWidth >= 0) {
      environment.browserDetails = {
        viewportWidth: viewportWidth
      };
    }
    var viewportHeight = toInteger(clientHeight);
    if (viewportHeight >= 0) {
      environment.browserDetails = environment.browserDetails || {};
      environment.browserDetails.viewportHeight = viewportHeight;
    }
    deepAssign(xdm, {
      environment: environment
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectPlaceContext = function injectPlaceContext(dateProvider) {
  return function (xdm) {
    var date = dateProvider();
    var placeContext = {};
    var localTimezoneOffset = toInteger(date.getTimezoneOffset());
    if (localTimezoneOffset !== undefined) {
      placeContext.localTimezoneOffset = localTimezoneOffset;
    }
    // make sure the timezone offset only uses two digits
    if (localTimezoneOffset === undefined || Math.abs(localTimezoneOffset) < 6000) {
      placeContext.localTime = toISOStringLocal(date);
    }
    deepAssign(xdm, {
      placeContext: placeContext
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectTimestamp = function injectTimestamp(dateProvider) {
  return function (xdm) {
    var timestamp = dateProvider().toISOString();
    deepAssign(xdm, {
      timestamp: timestamp
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var libraryName = "https://ns.adobe.com/experience/alloy";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// The __VERSION__ keyword will be replace at alloy build time with the package.json version.
// see babel-plugin-version

var libraryVersion = "2.19.1";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var implementationDetails = function implementationDetails(xdm) {
  var implementationDetails = {
    name: libraryName,
    version: libraryVersion,
    environment: "browser"
  };
  deepAssign(xdm, {
    implementationDetails: implementationDetails
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createComponent$2 = function createComponent$2(config, logger, optionalContexts, requiredContexts) {
  var configuredContexts = config.context;
  var contexts = flatMap(configuredContexts, function (context, i) {
    if (optionalContexts[context]) {
      return [optionalContexts[context]];
    }
    logger.warn("Invalid context[".concat(i, "]: '").concat(context, "' is not available."));
    return [];
  }).concat(requiredContexts);
  return {
    namespace: "Context",
    lifecycle: {
      onBeforeEvent: function onBeforeEvent(_ref106) {
        var event = _ref106.event;
        var xdm = {};
        return Promise.all(contexts.map(function (context) {
          return Promise.resolve(context(xdm, logger));
        })).then(function () {
          return event.mergeXdm(xdm);
        });
      }
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var highEntropyUserAgentHints = [["architecture", "string"], ["bitness", "string"], ["model", "string"], ["platformVersion", "string"], ["wow64", "boolean"]];

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var browserSupportsUserAgentClientHints = function browserSupportsUserAgentClientHints(navigator) {
  return typeof navigator.userAgentData !== "undefined";
};
var injectHighEntropyUserAgentHints = function injectHighEntropyUserAgentHints(navigator) {
  if (!browserSupportsUserAgentClientHints(navigator)) {
    return noop;
  }
  return function (xdm, logger) {
    try {
      return navigator.userAgentData.getHighEntropyValues(highEntropyUserAgentHints.map(function (hint) {
        return hint[0];
      })).then(function (hints) {
        var userAgentClientHints = {};
        highEntropyUserAgentHints.forEach(function (_ref107) {
          var _ref108 = _slicedToArray(_ref107, 2),
            hintName = _ref108[0],
            hintType = _ref108[1];
          if (Object.prototype.hasOwnProperty.call(hints, hintName) && /* eslint-disable-next-line valid-typeof */
          _typeof(hints[hintName]) === hintType) {
            userAgentClientHints[hintName] = hints[hintName];
          }
        });
        deepAssign(xdm, {
          environment: {
            browserDetails: {
              userAgentClientHints: userAgentClientHints
            }
          }
        });
      });
    } catch (error) {
      logger.warn("Unable to collect user-agent client hints. ".concat(error.message));
      return noop;
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var web = injectWeb(window);
var device = injectDevice(window);
var environment = injectEnvironment(window);
var placeContext = injectPlaceContext(function () {
  return new Date();
});
var timestamp = injectTimestamp(function () {
  return new Date();
});
var highEntropyUserAgentHints$1 = injectHighEntropyUserAgentHints(navigator);
var defaultEnabledContexts = {
  web: web,
  device: device,
  environment: environment,
  placeContext: placeContext
};
var defaultDisabledContexts = {
  highEntropyUserAgentHints: highEntropyUserAgentHints$1
};
var optionalContexts = _objectSpread(_objectSpread({}, defaultEnabledContexts), defaultDisabledContexts);
var requiredContexts = [timestamp, implementationDetails];
var createContext = function createContext(_ref109) {
  var config = _ref109.config,
    logger = _ref109.logger;
  return createComponent$2(config, logger, optionalContexts, requiredContexts);
};
createContext.namespace = "Context";
createContext.configValidators = boundObjectOf({
  context: boundArrayOf(boundString())["default"](Object.keys(defaultEnabledContexts))
});

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createComponent$3 = function createComponent$3(_ref110) {
  var storedConsent = _ref110.storedConsent,
    taskQueue = _ref110.taskQueue,
    defaultConsent = _ref110.defaultConsent,
    consent = _ref110.consent,
    sendSetConsentRequest = _ref110.sendSetConsentRequest,
    validateSetConsentOptions = _ref110.validateSetConsentOptions,
    consentHashStore = _ref110.consentHashStore,
    doesIdentityCookieExist = _ref110.doesIdentityCookieExist;
  var defaultConsentByPurpose = _defineProperty({}, GENERAL, defaultConsent);
  var storedConsentByPurpose = storedConsent.read();
  var identityCookieExists = doesIdentityCookieExist();
  var consentCookieExists = storedConsentByPurpose[GENERAL] !== undefined;
  if (!identityCookieExists || !consentCookieExists) {
    consentHashStore.clear();
  }
  // If the identity cookie is gone, remove the consent cookie because the
  // consent info is tied to the identity.
  if (!identityCookieExists) {
    storedConsent.clear();
    storedConsentByPurpose = {};
  }
  consent.initializeConsent(defaultConsentByPurpose, storedConsentByPurpose);
  var readCookieIfQueueEmpty = function readCookieIfQueueEmpty() {
    if (taskQueue.length === 0) {
      var storedConsentObject = storedConsent.read();
      // Only read cookies when there are no outstanding setConsent
      // requests. This helps with race conditions.
      if (storedConsentObject[GENERAL] !== undefined) {
        consent.setConsent(storedConsentObject);
      }
    }
  };
  return {
    commands: {
      setConsent: {
        optionsValidator: validateSetConsentOptions,
        run: function run(_ref111) {
          var consentOptions = _ref111.consent,
            identityMap = _ref111.identityMap,
            edgeConfigOverrides = _ref111.edgeConfigOverrides;
          consent.suspend();
          var consentHashes = consentHashStore.lookup(consentOptions);
          return taskQueue.addTask(function () {
            if (consentHashes.isNew()) {
              return sendSetConsentRequest({
                consentOptions: consentOptions,
                identityMap: identityMap,
                edgeConfigOverrides: edgeConfigOverrides
              });
            }
            return Promise.resolve();
          }).then(function () {
            return consentHashes.save();
          })["finally"](readCookieIfQueueEmpty);
        }
      }
    },
    lifecycle: {
      // Read the cookie here too because the consent cookie may change on any request
      onResponse: readCookieIfQueueEmpty,
      // Even when we get a failure HTTP status code, the consent cookie can
      // still get updated. This could happen, for example, if the user is
      // opted out in AudienceManager, but no consent cookie exists on the
      // client. The request will be sent and the server will respond with a
      // 403 Forbidden and a consent cookie.
      onRequestFailure: readCookieIfQueueEmpty
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// serialize an object with a consistent ordering
var serialize = function serialize(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (i) {
      return serialize(i);
    });
  }
  if (_typeof(obj) === "object" && obj !== null) {
    return Object.keys(obj).sort().reduce(function (memo, key) {
      memo[key] = serialize(obj[key]);
      return memo;
    }, {});
  }
  return obj;
};
var computeConsentHash = function computeConsentHash(obj) {
  return crc32(JSON.stringify(serialize(obj)));
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var getKey = function getKey(_ref112) {
  var standard = _ref112.standard,
    version = _ref112.version;
  return "".concat(standard, ".").concat(version);
};
var createConsentHashStore = function createConsentHashStore(_ref113) {
  var storage = _ref113.storage;
  return {
    clear: function clear() {
      storage.clear();
    },
    lookup: function lookup(consentObjects) {
      var currentHashes = {};
      var getCurrentHash = function getCurrentHash(consentObject) {
        var key = getKey(consentObject);
        var standard = consentObject.standard,
          version = consentObject.version,
          rest = _objectWithoutProperties(consentObject, ["standard", "version"]);
        if (!currentHashes[key]) {
          currentHashes[key] = computeConsentHash(rest).toString();
        }
        return currentHashes[key];
      };
      return {
        isNew: function isNew() {
          return consentObjects.some(function (consentObject) {
            var key = getKey(consentObject);
            var previousHash = storage.getItem(key);
            return previousHash === null || previousHash !== getCurrentHash(consentObject);
          });
        },
        save: function save() {
          consentObjects.forEach(function (consentObject) {
            var key = getKey(consentObject);
            storage.setItem(key, getCurrentHash(consentObject));
          });
        }
      };
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createConsentRequestPayload = function createConsentRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: function addIdentity(namespaceCode, identity) {
      content.identityMap = content.identityMap || {};
      content.identityMap[namespaceCode] = content.identityMap[namespaceCode] || [];
      content.identityMap[namespaceCode].push(identity);
    },
    hasIdentity: function hasIdentity(namespaceCode) {
      return (content.identityMap && content.identityMap[namespaceCode]) !== undefined;
    }
  });
  payload.setConsent = function (consent) {
    content.consent = consent;
  };
  return payload;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createConsentRequest = function createConsentRequest(_ref114) {
  var payload = _ref114.payload,
    datastreamIdOverride = _ref114.datastreamIdOverride;
  return createRequest({
    payload: payload,
    datastreamIdOverride: datastreamIdOverride,
    getAction: function getAction() {
      return "privacy/set-consent";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createStoredConsent = function createStoredConsent(_ref115) {
  var parseConsentCookie = _ref115.parseConsentCookie,
    orgId = _ref115.orgId,
    cookieJar = _ref115.cookieJar;
  var consentCookieName = getNamespacedCookieName(orgId, CONSENT);
  return {
    read: function read() {
      var cookieValue = cookieJar.get(consentCookieName);
      return cookieValue ? parseConsentCookie(cookieValue) : {};
    },
    clear: function clear() {
      cookieJar.remove(consentCookieName);
    }
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectSendSetConsentRequest = function injectSendSetConsentRequest(_ref116) {
  var createConsentRequestPayload = _ref116.createConsentRequestPayload,
    createConsentRequest = _ref116.createConsentRequest,
    sendEdgeNetworkRequest = _ref116.sendEdgeNetworkRequest,
    globalConfigOverrides = _ref116.edgeConfigOverrides;
  return function (_ref117) {
    var consentOptions = _ref117.consentOptions,
      identityMap = _ref117.identityMap,
      localConfigOverrides = _ref117.edgeConfigOverrides;
    var requestParams = createRequestParams({
      payload: createConsentRequestPayload(),
      globalConfigOverrides: globalConfigOverrides,
      localConfigOverrides: localConfigOverrides
    });
    requestParams.payload.setConsent(consentOptions);
    if (isObject(identityMap)) {
      Object.keys(identityMap).forEach(function (key) {
        identityMap[key].forEach(function (identity) {
          requestParams.payload.addIdentity(key, identity);
        });
      });
    }
    var request = createConsentRequest(requestParams);
    return sendEdgeNetworkRequest({
      request: request
    }).then(function () {
      // Don't let response data disseminate beyond this
      // point unless necessary.
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Parses a consent cookie.
 * @param {string} cookieValue Must be in the format a=b;c=d
 * @returns {Object} An object where the keys are purpose names and the values
 * are the consent status for the purpose.
 */
var parseConsentCookie = function parseConsentCookie(cookieValue) {
  var categoryPairs = cookieValue.split(";");
  return categoryPairs.reduce(function (consentByPurpose, categoryPair) {
    var _categoryPair$split = categoryPair.split("="),
      _categoryPair$split2 = _slicedToArray(_categoryPair$split, 2),
      name = _categoryPair$split2[0],
      value = _categoryPair$split2[1];
    consentByPurpose[name] = value;
    return consentByPurpose;
  }, {});
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateSetConsentOptions = boundObjectOf({
  consent: boundArrayOf(boundAnything()).required().nonEmpty(),
  identityMap: validateIdentityMap,
  edgeConfigOverrides: validateConfigOverride
}).noUnknownFields().required();

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createPrivacy = function createPrivacy(_ref118) {
  var config = _ref118.config,
    consent = _ref118.consent,
    sendEdgeNetworkRequest = _ref118.sendEdgeNetworkRequest,
    createNamespacedStorage = _ref118.createNamespacedStorage;
  var orgId = config.orgId,
    defaultConsent = config.defaultConsent;
  var storedConsent = createStoredConsent({
    parseConsentCookie: parseConsentCookie,
    orgId: orgId,
    cookieJar: cookieJar
  });
  var taskQueue = createTaskQueue();
  var sendSetConsentRequest = injectSendSetConsentRequest({
    createConsentRequestPayload: createConsentRequestPayload,
    createConsentRequest: createConsentRequest,
    sendEdgeNetworkRequest: sendEdgeNetworkRequest,
    edgeConfigOverrides: config.edgeConfigOverrides
  });
  var storage = createNamespacedStorage("".concat(sanitizeOrgIdForCookieName(orgId), ".consentHashes."));
  var consentHashStore = createConsentHashStore({
    storage: storage.persistent
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  return createComponent$3({
    storedConsent: storedConsent,
    taskQueue: taskQueue,
    defaultConsent: defaultConsent,
    consent: consent,
    sendSetConsentRequest: sendSetConsentRequest,
    validateSetConsentOptions: validateSetConsentOptions,
    consentHashStore: consentHashStore,
    doesIdentityCookieExist: doesIdentityCookieExist
  });
};
createPrivacy.namespace = "Privacy";

/*
Copyright 20219 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createEventMergeId = function createEventMergeId() {
  return {
    eventMergeId: v4_1()
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
exports.createEventMergeId = createEventMergeId;
var createComponent$4 = function createComponent$4(_ref119) {
  var createEventMergeId = _ref119.createEventMergeId;
  return {
    commands: {
      createEventMergeId: {
        run: createEventMergeId
      }
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createEventMerge = function createEventMerge() {
  return createComponent$4({
    createEventMergeId: createEventMergeId
  });
};
createEventMerge.namespace = "EventMerge";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var prepareLibraryInfo = function prepareLibraryInfo(_ref120) {
  var config = _ref120.config,
    componentRegistry = _ref120.componentRegistry;
  var allCommands = [].concat(_toConsumableArray(componentRegistry.getCommandNames()), [CONFIGURE, SET_DEBUG]).sort();
  var resultConfig = _objectSpread({}, config);
  Object.keys(config).forEach(function (key) {
    var value = config[key];
    if (typeof value !== "function") {
      return;
    }
    resultConfig[key] = value.toString();
  });
  return {
    version: libraryVersion,
    configs: resultConfig,
    commands: allCommands
  };
};
var createLibraryInfo = function createLibraryInfo(_ref121) {
  var config = _ref121.config,
    componentRegistry = _ref121.componentRegistry;
  var libraryInfo = prepareLibraryInfo({
    config: config,
    componentRegistry: componentRegistry
  });
  return {
    commands: {
      getLibraryInfo: {
        run: function run() {
          return {
            libraryInfo: libraryInfo
          };
        }
      }
    }
  };
};
createLibraryInfo.namespace = "LibraryInfo";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var PERSONALIZATION_DECISIONS_HANDLE = "personalization:decisions";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var isPlainObject = function isPlainObject(obj) {
  return obj !== null && _typeof(obj) === "object" && Object.getPrototypeOf(obj) === Object.prototype;
};
var flattenObject = function flattenObject(obj) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  Object.keys(obj).forEach(function (key) {
    if (isPlainObject(obj[key]) || Array.isArray(obj[key])) {
      flattenObject(obj[key], result, [].concat(_toConsumableArray(keys), [key]));
    } else {
      result[[].concat(_toConsumableArray(keys), [key]).join(".")] = obj[key];
    }
  });
  return result;
};
var flattenObject$1 = function flattenObject$1(obj) {
  if (!isPlainObject(obj)) {
    return obj;
  }
  return flattenObject(obj);
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createOnResponseHandler = function createOnResponseHandler(_ref122) {
  var renderDecisions = _ref122.renderDecisions,
    decisionProvider = _ref122.decisionProvider,
    applyResponse = _ref122.applyResponse,
    event = _ref122.event,
    personalization = _ref122.personalization,
    decisionContext = _ref122.decisionContext;
  var context = _objectSpread(_objectSpread({}, flattenObject$1(event.getContent())), decisionContext);
  return function (_ref123) {
    var response = _ref123.response;
    decisionProvider.addPayloads(response.getPayloadsByType(PERSONALIZATION_DECISIONS_HANDLE));

    // only evaluate events that include a personalization query
    if (!event.hasQuery()) {
      return {
        propositions: []
      };
    }
    var propositions = decisionProvider.evaluate(context);
    return applyResponse({
      renderDecisions: renderDecisions,
      propositions: propositions,
      event: event,
      personalization: personalization
    });
  };
};
var ConditionType = {
  MATCHER: "matcher",
  GROUP: "group",
  HISTORICAL: "historical"
};
var MatcherType = {
  EQUALS: "eq",
  NOT_EQUALS: "ne",
  EXISTS: "ex",
  NOT_EXISTS: "nx",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "ge",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "le",
  CONTAINS: "co",
  NOT_CONTAINS: "nc",
  STARTS_WITH: "sw",
  ENDS_WITH: "ew"
};
var LogicType = {
  AND: "and",
  OR: "or"
};
var SearchType = {
  ANY: "any",
  ORDERED: "ordered"
};
function isObjectOrUndefined(value) {
  return _typeof(value) === "object" || typeof value === "undefined";
}
function createEquals() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i16 = 0; _i16 < values.length; _i16 += 1) {
        if (!isObjectOrUndefined(values[_i16]) && contextValue === String(values[_i16]).toLowerCase()) {
          return true;
        }
      }
      return false;
    }
  };
}
function createNotEquals() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i17 = 0; _i17 < values.length; _i17 += 1) {
        if (!isObjectOrUndefined(values[_i17]) && contextValue === String(values[_i17]).toLowerCase()) {
          return false;
        }
      }
      return true;
    }
  };
}
function createExists() {
  return {
    matches: function matches(context, key) {
      return typeof context[key] !== "undefined" && context[key] !== null;
    }
  };
}
function createNotExists() {
  return {
    matches: function matches(context, key) {
      return typeof context[key] === "undefined" || context[key] === null;
    }
  };
}
function isNumber$1(value) {
  return typeof value === "number";
}
function createGreaterThan() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var needle = context[key];
      if (!isNumber$1(needle)) {
        return false;
      }
      for (var _i18 = 0; _i18 < values.length; _i18 += 1) {
        if (isNumber$1(values[_i18]) && needle > values[_i18]) {
          return true;
        }
      }
      return false;
    }
  };
}
function createGreaterThanEquals() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var needle = context[key];
      if (!isNumber$1(needle)) {
        return false;
      }
      for (var _i19 = 0; _i19 < values.length; _i19 += 1) {
        if (isNumber$1(values[_i19]) && needle >= values[_i19]) {
          return true;
        }
      }
      return false;
    }
  };
}
function createLessThan() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var needle = context[key];
      if (!isNumber$1(needle)) {
        return false;
      }
      for (var _i20 = 0; _i20 < values.length; _i20 += 1) {
        if (isNumber$1(values[_i20]) && needle < values[_i20]) {
          return true;
        }
      }
      return false;
    }
  };
}
function createLessThanEquals() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var needle = context[key];
      if (!isNumber$1(needle)) {
        return false;
      }
      for (var _i21 = 0; _i21 < values.length; _i21 += 1) {
        if (isNumber$1(values[_i21]) && needle <= values[_i21]) {
          return true;
        }
      }
      return false;
    }
  };
}
function createContains() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i22 = 0; _i22 < values.length; _i22 += 1) {
        if (!isObjectOrUndefined(values[_i22]) && contextValue.indexOf(String(values[_i22]).toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    }
  };
}
function createNotContains() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i23 = 0; _i23 < values.length; _i23 += 1) {
        if (!isObjectOrUndefined(values[_i23]) && contextValue.indexOf(String(values[_i23]).toLowerCase()) !== -1) {
          return false;
        }
      }
      return true;
    }
  };
}
function createStartsWith() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i24 = 0; _i24 < values.length; _i24 += 1) {
        if (!isObjectOrUndefined(values[_i24]) && contextValue.startsWith(String(values[_i24]).toLowerCase())) {
          return true;
        }
      }
      return false;
    }
  };
}
function createEndsWith() {
  return {
    matches: function matches(context, key) {
      var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (isObjectOrUndefined(context[key])) {
        return false;
      }
      var contextValue = String(context[key]).toLowerCase();
      for (var _i25 = 0; _i25 < values.length; _i25 += 1) {
        if (!isObjectOrUndefined(values[_i25]) && contextValue.endsWith(values[_i25].toLowerCase())) {
          return true;
        }
      }
      return false;
    }
  };
}
var MATCHERS = (_MATCHERS = {}, _defineProperty(_MATCHERS, MatcherType.EQUALS, createEquals()), _defineProperty(_MATCHERS, MatcherType.NOT_EQUALS, createNotEquals()), _defineProperty(_MATCHERS, MatcherType.EXISTS, createExists()), _defineProperty(_MATCHERS, MatcherType.NOT_EXISTS, createNotExists()), _defineProperty(_MATCHERS, MatcherType.GREATER_THAN, createGreaterThan()), _defineProperty(_MATCHERS, MatcherType.GREATER_THAN_OR_EQUAL_TO, createGreaterThanEquals()), _defineProperty(_MATCHERS, MatcherType.LESS_THAN, createLessThan()), _defineProperty(_MATCHERS, MatcherType.LESS_THAN_OR_EQUAL_TO, createLessThanEquals()), _defineProperty(_MATCHERS, MatcherType.CONTAINS, createContains()), _defineProperty(_MATCHERS, MatcherType.NOT_CONTAINS, createNotContains()), _defineProperty(_MATCHERS, MatcherType.STARTS_WITH, createStartsWith()), _defineProperty(_MATCHERS, MatcherType.ENDS_WITH, createEndsWith()), _MATCHERS);
function getMatcher(key) {
  return MATCHERS[key];
}
function isUndefined(value) {
  return typeof value === "undefined";
}
var IAM_ID = "iam.id";
var ID = "id";
var IAM_EVENT_TYPE = "iam.eventType";
var EVENT_TYPE = "eventType";
var TYPE = "type";
var VALID_EVENT_TYPES = [IAM_EVENT_TYPE, EVENT_TYPE, TYPE];
var VALID_EVENT_IDS = [IAM_ID, ID];
function checkForHistoricalMatcher(eventCount, matcherKey, value) {
  switch (matcherKey) {
    case MatcherType.GREATER_THAN:
      return eventCount > value;
    case MatcherType.GREATER_THAN_OR_EQUAL_TO:
      return eventCount >= value;
    case MatcherType.LESS_THAN:
      return eventCount < value;
    case MatcherType.LESS_THAN_OR_EQUAL_TO:
      return eventCount <= value;
    case MatcherType.EQUALS:
      return eventCount === value;
    case MatcherType.NOT_EQUALS:
      return eventCount !== value;
    default:
      return false;
  }
}
function oneOf(context, properties) {
  for (var _i26 = 0; _i26 < properties.length; _i26 += 1) {
    if (!isUndefined(context[properties[_i26]])) {
      return context[properties[_i26]];
    }
  }
  return undefined;
}
function eventSatisfiesCondition(historicalEventCondition, eventContext) {
  var eventKeys = Object.keys(historicalEventCondition);
  for (var _i27 = 0; _i27 < eventKeys.length; _i27 += 1) {
    var key = eventKeys[_i27];
    var _eventContext$event = eventContext.event,
      event = _eventContext$event === void 0 ? {} : _eventContext$event;
    if (event[eventKeys[_i27]] !== historicalEventCondition[key]) {
      return false;
    }
  }
  return true;
}
function queryAndCountAnyEvent(events, context, from, to) {
  return events.reduce(function (countTotal, event) {
    var eventType = oneOf(event, VALID_EVENT_TYPES);
    if (!eventType) {
      return countTotal;
    }
    var eventsOfType = context.events[eventType];
    if (!eventsOfType) {
      return countTotal;
    }
    var eventId = oneOf(event, VALID_EVENT_IDS);
    if (!eventId) {
      return countTotal;
    }
    var contextEvent = eventsOfType[eventId];
    if (!contextEvent) {
      return countTotal;
    }
    if (!eventSatisfiesCondition(event, contextEvent)) {
      return countTotal;
    }
    var _contextEvent$count = contextEvent.count,
      eventCount = _contextEvent$count === void 0 ? 1 : _contextEvent$count;
    if (isUndefined(from) || isUndefined(to) || contextEvent.timestamp >= from && contextEvent.timestamp <= to) {
      return countTotal + eventCount;
    }
    return countTotal;
  }, 0);
}
function queryAndCountOrderedEvent(events, context, from, to) {
  var previousEventTimestamp = from;
  var sameSequence = events.every(function (event) {
    var eventType = oneOf(event, VALID_EVENT_TYPES);
    if (!eventType) {
      return false;
    }
    var eventsOfType = context.events[eventType];
    if (!eventsOfType) {
      return false;
    }
    var eventId = oneOf(event, VALID_EVENT_IDS);
    if (!eventId) {
      return false;
    }
    var contextEvent = eventsOfType[eventId];
    if (!eventSatisfiesCondition(event, contextEvent)) {
      return false;
    }
    if (contextEvent === null || isUndefined(contextEvent) || contextEvent.count === 0) {
      return false;
    }
    var ordered = (isUndefined(previousEventTimestamp) || contextEvent.timestamp >= previousEventTimestamp) && (isUndefined(to) || contextEvent.timestamp <= to);
    previousEventTimestamp = contextEvent.timestamp;
    return ordered;
  });
  return sameSequence ? 1 : 0;
}
function evaluateAnd(context, conditions) {
  var result = true;
  for (var _i28 = 0; _i28 < conditions.length; _i28 += 1) {
    result = result && conditions[_i28].evaluate(context);
  }
  return result;
}
function evaluateOr(context, conditions) {
  var result = false;
  for (var _i29 = 0; _i29 < conditions.length; _i29 += 1) {
    result = result || conditions[_i29].evaluate(context);
    if (result) {
      return true;
    }
  }
  return false;
}
function createRules(version, rules) {
  return {
    version: version,
    rules: rules
  };
}
function createRule(condition, consequences) {
  return {
    execute: function execute(context) {
      if (condition.evaluate(context)) {
        return consequences;
      }
      return [];
    },
    toString: function toString() {
      return "Rule{condition=".concat(condition, ", consequences=").concat(consequences, "}");
    }
  };
}
function createCondition(type, definition) {
  return {
    evaluate: function evaluate(context) {
      return definition.evaluate(context);
    },
    toString: function toString() {
      return "Condition{type=".concat(type, ", definition=").concat(definition, "}");
    }
  };
}
function createConsequence(id, type, detail) {
  return {
    id: id,
    type: type,
    detail: detail
  };
}
function createGroupDefinition(logic, conditions) {
  return {
    evaluate: function evaluate(context) {
      if (LogicType.AND === logic) {
        return evaluateAnd(context, conditions);
      }
      if (LogicType.OR === logic) {
        return evaluateOr(context, conditions);
      }
      return false;
    }
  };
}
function createMatcherDefinition(key, matcherKey, values) {
  return {
    evaluate: function evaluate(context) {
      var matcher = getMatcher(matcherKey);
      if (!matcher) {
        return false;
      }
      return matcher.matches(context, key, values);
    }
  };
}
function createHistoricalDefinition(events, matcherKey, value, from, to, searchType) {
  return {
    evaluate: function evaluate(context) {
      var eventCount;
      if (SearchType.ORDERED === searchType) {
        eventCount = queryAndCountOrderedEvent(events, context, from, to);
      } else {
        eventCount = queryAndCountAnyEvent(events, context, from, to);
      }
      return checkForHistoricalMatcher(eventCount, matcherKey, value);
    }
  };
}
function parseMatcherDefinition(definition) {
  var key = definition.key,
    matcher = definition.matcher,
    values = definition.values;
  return createMatcherDefinition(key, matcher, values);
}
function parseGroupDefinition(definition) {
  var logic = definition.logic,
    conditions = definition.conditions;
  return createGroupDefinition(logic, conditions.map(parseCondition));
}
function parseHistoricalDefinition(definition) {
  var events = definition.events,
    from = definition.from,
    to = definition.to,
    matcher = definition.matcher,
    value = definition.value,
    searchType = definition.searchType;
  return createHistoricalDefinition(events, matcher, value, from, to, searchType);
}
function parseCondition(condition) {
  var type = condition.type,
    definition = condition.definition;
  if (ConditionType.MATCHER === type) {
    return createCondition(type, parseMatcherDefinition(definition));
  }
  if (ConditionType.GROUP === type) {
    return createCondition(type, parseGroupDefinition(definition));
  }
  if (ConditionType.HISTORICAL === type) {
    return createCondition(type, parseHistoricalDefinition(definition));
  }
  throw new Error("Can not parse condition");
}
function parseConsequence(consequence) {
  var id = consequence.id,
    type = consequence.type,
    detail = consequence.detail;
  return createConsequence(id, type, detail);
}
function parseRule(rule) {
  var condition = rule.condition,
    consequences = rule.consequences;
  return createRule(parseCondition(condition), consequences.map(parseConsequence));
}
function parseRules(ruleset) {
  var version = ruleset.version,
    rules = ruleset.rules;
  return createRules(version, rules.map(parseRule));
}
function RulesEngine(ruleset) {
  var _parseRules = parseRules(ruleset),
    version = _parseRules.version,
    rules = _parseRules.rules;
  return {
    execute: function execute(context) {
      return rules.map(function (rule) {
        return rule.execute(context);
      }).filter(function (arr) {
        return arr.length > 0;
      });
    },
    getVersion: function getVersion() {
      return version;
    },
    numRules: function numRules() {
      return rules.length;
    }
  };
}

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createRestoreStorage = function createRestoreStorage(storage, storageKey) {
  return function (defaultValue) {
    var stored = storage.getItem(storageKey);
    if (!stored) {
      return defaultValue;
    }
    try {
      return JSON.parse(stored);
    } catch (e) {
      return defaultValue;
    }
  };
};
var createSaveStorage = function createSaveStorage(storage, storageKey) {
  var prepareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
    return value;
  };
  return function (value) {
    storage.setItem(storageKey, JSON.stringify(prepareFn(value)));
  };
};
var getExpirationDate = function getExpirationDate(retentionPeriod) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() - retentionPeriod);
  return expirationDate;
};
var getActivityId = function getActivityId(proposition) {
  var _proposition$scopeDet = proposition.scopeDetails,
    scopeDetails = _proposition$scopeDet === void 0 ? {} : _proposition$scopeDet;
  var _scopeDetails$activit = scopeDetails.activity,
    activity = _scopeDetails$activit === void 0 ? {} : _scopeDetails$activit;
  var id = activity.id;
  return id;
};
var createInMemoryStorage = function createInMemoryStorage() {
  var inMemoryStorage = {};
  return {
    getItem: function getItem(key) {
      return key in inMemoryStorage ? inMemoryStorage[key] : null;
    },
    setItem: function setItem(key, value) {
      inMemoryStorage[key] = value;
    }
  };
};
var clearLocalStorage = function clearLocalStorage(storage) {
  storage.clear();
};
var hasExperienceData = function hasExperienceData(xdm) {
  var _xdm$eventType = xdm.eventType,
    eventType = _xdm$eventType === void 0 ? "" : _xdm$eventType,
    _experience = xdm._experience;
  if (!eventType || eventType === "") {
    return false;
  }
  if (!_experience || _typeof(_experience) !== "object") {
    return false;
  }
  return true;
};
var getDecisionProvider = function getDecisionProvider(proposition) {
  var _proposition$scopeDet2 = proposition.scopeDetails,
    scopeDetails = _proposition$scopeDet2 === void 0 ? {} : _proposition$scopeDet2;
  var decisionProvider = scopeDetails.decisionProvider;
  return decisionProvider;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var flattenArray = function flattenArray() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var flat = [];
  if (!Array.isArray(items)) {
    return items;
  }
  items.forEach(function (item) {
    if (Array.isArray(item)) {
      flat.push.apply(flat, _toConsumableArray(flattenArray(item)));
    } else {
      flat.push(item);
    }
  });
  return flat;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var inAppMessageConsequenceAdapter = function inAppMessageConsequenceAdapter(id, type, detail) {
  var html = detail.html,
    mobileParameters = detail.mobileParameters;
  var webParameters = {};
  return {
    schema: MESSAGE_IN_APP,
    data: {
      mobileParameters: mobileParameters,
      webParameters: webParameters,
      content: html,
      contentType: TEXT_HTML
    },
    id: id
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var schemaTypeConsequenceAdapter = function schemaTypeConsequenceAdapter(id, type, detail) {
  var schema = detail.schema,
    data = detail.data,
    detailId = detail.id;
  return {
    schema: schema,
    data: data,
    id: detailId || id
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var CJM_IN_APP_MESSAGE_TYPE = "cjmiam";
var SCHEMA = "schema";
var adapters = (_adapters = {}, _defineProperty(_adapters, CJM_IN_APP_MESSAGE_TYPE, inAppMessageConsequenceAdapter), _defineProperty(_adapters, SCHEMA, schemaTypeConsequenceAdapter), _adapters);
var createConsequenceAdapter = function createConsequenceAdapter() {
  return function (consequence) {
    var id = consequence.id,
      type = consequence.type,
      detail = consequence.detail;
    return typeof adapters[type] === "function" ? adapters[type](id, type, detail) : detail;
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var isRulesetItem = function isRulesetItem(item) {
  var schema = item.schema,
    data = item.data;
  if (schema === RULESET_ITEM) {
    return true;
  }
  if (schema !== JSON_CONTENT_ITEM) {
    return false;
  }
  try {
    var content = typeof data.content === "string" ? JSON.parse(data.content) : data.content;
    return content && Object.prototype.hasOwnProperty.call(content, "version") && Object.prototype.hasOwnProperty.call(content, "rules");
  } catch (error) {
    return false;
  }
};
var createEvaluableRulesetPayload = function createEvaluableRulesetPayload(payload, eventRegistry, decisionHistory) {
  var consequenceAdapter = createConsequenceAdapter();
  var activityId = getActivityId(payload);
  var items = [];
  var addItem = function addItem(item) {
    var _item$data = item.data,
      data = _item$data === void 0 ? {} : _item$data,
      schema = item.schema;
    var content = schema === RULESET_ITEM ? data : data.content;
    if (!content) {
      return;
    }
    items.push(RulesEngine(typeof content === "string" ? JSON.parse(content) : content));
  };
  var evaluate = function evaluate(context) {
    var displayEvent = eventRegistry.getEvent(DISPLAY, activityId);
    var displayedDate = displayEvent ? displayEvent.firstTimestamp : undefined;
    var qualifyingItems = flattenArray(items.map(function (item) {
      return item.execute(context);
    })).map(consequenceAdapter).map(function (item) {
      var _ref124 = decisionHistory.recordQualified(activityId) || {},
        qualifiedDate = _ref124.firstTimestamp;
      return _objectSpread(_objectSpread({}, item), {}, {
        data: _objectSpread(_objectSpread({}, item.data), {}, {
          qualifiedDate: qualifiedDate,
          displayedDate: displayedDate
        })
      });
    });
    return _objectSpread(_objectSpread({}, payload), {}, {
      items: qualifyingItems
    });
  };
  if (Array.isArray(payload.items)) {
    payload.items.filter(isRulesetItem).forEach(addItem);
  }
  return {
    evaluate: evaluate,
    isEvaluable: items.length > 0
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDecisionHistory = function createDecisionHistory(_ref125) {
  var eventRegistry = _ref125.eventRegistry;
  var recordQualified = function recordQualified(id) {
    if (!id) {
      return undefined;
    }
    return eventRegistry.addEvent({}, PropositionEventType.TRIGGER, id);
  };
  return {
    recordQualified: recordQualified
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDecisionProvider = function createDecisionProvider(_ref126) {
  var eventRegistry = _ref126.eventRegistry;
  var payloadsBasedOnActivityId = {};
  var decisionHistory = createDecisionHistory({
    eventRegistry: eventRegistry
  });
  var addPayload = function addPayload(payload) {
    var activityId = getActivityId(payload);
    if (!activityId) {
      return;
    }
    var evaluableRulesetPayload = createEvaluableRulesetPayload(payload, eventRegistry, decisionHistory);
    if (evaluableRulesetPayload.isEvaluable) {
      payloadsBasedOnActivityId[activityId] = evaluableRulesetPayload;
    }
  };
  var evaluate = function evaluate() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.values(payloadsBasedOnActivityId).map(function (payload) {
      return payload.evaluate(context);
    }).filter(function (payload) {
      return payload.items.length > 0;
    });
  };
  var addPayloads = function addPayloads(personalizationPayloads) {
    personalizationPayloads.forEach(addPayload);
  };
  return {
    addPayload: addPayload,
    addPayloads: addPayloads,
    evaluate: evaluate
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createApplyResponse = function createApplyResponse(lifecycle) {
  return function (_ref127) {
    var _ref127$renderDecisio = _ref127.renderDecisions,
      renderDecisions = _ref127$renderDecisio === void 0 ? false : _ref127$renderDecisio,
      _ref127$propositions = _ref127.propositions,
      propositions = _ref127$propositions === void 0 ? [] : _ref127$propositions,
      event = _ref127.event,
      personalization = _ref127.personalization;
    if (propositions.length > 0 && lifecycle) {
      lifecycle.onDecision({
        renderDecisions: renderDecisions,
        propositions: propositions,
        event: event,
        personalization: personalization
      });
    }
    return {
      propositions: propositions
    };
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var ADOBE_JOURNEY_OPTIMIZER = "AJO";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var STORAGE_KEY = "events";
var MAX_EVENT_RECORDS = 1000;
var RETENTION_PERIOD = 30;
var prefixed = function prefixed(key) {
  return "iam.".concat(key);
};
var createEventPruner = function createEventPruner() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAX_EVENT_RECORDS;
  var retentionPeriod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RETENTION_PERIOD;
  return function (events) {
    var pruned = {};
    Object.keys(events).forEach(function (eventType) {
      pruned[eventType] = {};
      Object.values(events[eventType]).filter(function (entry) {
        return new Date(entry.firstTimestamp) >= getExpirationDate(retentionPeriod);
      }).sort(function (a, b) {
        return a.firstTimestamp - b.firstTimestamp;
      }).slice(-1 * limit).forEach(function (entry) {
        pruned[eventType][entry.event[prefixed("id")]] = entry;
      });
    });
    return pruned;
  };
};
var createEventRegistry = function createEventRegistry(_ref128) {
  var storage = _ref128.storage;
  var currentStorage = storage;
  var restore;
  var save;
  var events;
  var setStorage = function setStorage(newStorage) {
    currentStorage = newStorage;
    restore = createRestoreStorage(currentStorage, STORAGE_KEY);
    save = createSaveStorage(currentStorage, STORAGE_KEY, createEventPruner(MAX_EVENT_RECORDS, RETENTION_PERIOD));
    events = restore({});
  };
  setStorage(storage);
  var addEvent = function addEvent(event, eventType, eventId, action) {
    var _objectSpread5;
    if (!eventType || !eventId) {
      return undefined;
    }
    if (!events[eventType]) {
      events[eventType] = {};
    }
    var existingEvent = events[eventType][eventId];
    var count = existingEvent ? existingEvent.count : 0;
    var timestamp = new Date().getTime();
    var firstTimestamp = existingEvent ? existingEvent.firstTimestamp || existingEvent.timestamp : timestamp;
    events[eventType][eventId] = {
      event: _objectSpread(_objectSpread({}, event), {}, (_objectSpread5 = {}, _defineProperty(_objectSpread5, prefixed("id"), eventId), _defineProperty(_objectSpread5, prefixed("eventType"), eventType), _defineProperty(_objectSpread5, prefixed("action"), action), _objectSpread5)),
      firstTimestamp: firstTimestamp,
      timestamp: timestamp,
      count: count + 1
    };
    save(events);
    return events[eventType][eventId];
  };
  var addExperienceEdgeEvent = function addExperienceEdgeEvent(event) {
    var _event$getContent = event.getContent(),
      _event$getContent$xdm = _event$getContent.xdm,
      xdm = _event$getContent$xdm === void 0 ? {} : _event$getContent$xdm;
    var _experience = xdm._experience;
    if (!hasExperienceData(xdm)) {
      return;
    }
    var _experience$decisioni = _experience.decisioning,
      decisioning = _experience$decisioni === void 0 ? {} : _experience$decisioni;
    var _decisioning$proposit = decisioning.propositionEventType,
      propositionEventTypeObj = _decisioning$proposit === void 0 ? {} : _decisioning$proposit,
      _decisioning$proposit2 = decisioning.propositionAction,
      propositionAction = _decisioning$proposit2 === void 0 ? {} : _decisioning$proposit2,
      _decisioning$proposit3 = decisioning.propositions,
      propositions = _decisioning$proposit3 === void 0 ? [] : _decisioning$proposit3;
    var propositionEventTypesList = Object.keys(propositionEventTypeObj);

    // https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=CJM&title=Proposition+Event+Types
    if (propositionEventTypesList.length === 0) {
      return;
    }
    var validPropositionEventType = function validPropositionEventType(propositionEventType) {
      return propositionEventTypeObj[propositionEventType] === EVENT_TYPE_TRUE;
    };
    var action = propositionAction.id;
    propositionEventTypesList.filter(validPropositionEventType).forEach(function (propositionEventType) {
      propositions.forEach(function (proposition) {
        if (getDecisionProvider(proposition) !== ADOBE_JOURNEY_OPTIMIZER) {
          return;
        }
        addEvent({}, propositionEventType, getActivityId(proposition), action);
      });
    });
  };
  var getEvent = function getEvent(eventType, eventId) {
    if (!events[eventType]) {
      return undefined;
    }
    return events[eventType][eventId];
  };
  return {
    addExperienceEdgeEvent: addExperienceEdgeEvent,
    addEvent: addEvent,
    getEvent: getEvent,
    toJSON: function toJSON() {
      return events;
    },
    setStorage: setStorage
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createContextProvider = function createContextProvider(_ref129) {
  var eventRegistry = _ref129.eventRegistry,
    window = _ref129.window;
  var pageLoadTimestamp = new Date().getTime();
  var getBrowserContext = function getBrowserContext() {
    return {
      name: getBrowser(window)
    };
  };
  var getPageContext = function getPageContext() {
    return _objectSpread({
      title: window.title,
      url: window.url
    }, parseUrl(window.url));
  };
  var getReferrerContext = function getReferrerContext() {
    return _objectSpread({
      url: window.referrer
    }, parseUrl(window.referrer));
  };
  var getTimeContext = function getTimeContext() {
    var now = new Date();
    var currentTimestamp = now.getTime();
    return {
      pageLoadTimestamp: pageLoadTimestamp,
      currentTimestamp: currentTimestamp,
      currentDate: now.getDate(),
      // Day of the week starts on Monday as is practiced in ISO 8601, but we want it to start on Sunday to match the authoring UI rule
      "~state.com.adobe.module.lifecycle/lifecyclecontextdata.dayofweek": now.getDay() + 1,
      "~state.com.adobe.module.lifecycle/lifecyclecontextdata.hourofday": now.getHours(),
      currentMinute: now.getMinutes(),
      currentMonth: now.getMonth(),
      currentYear: now.getFullYear(),
      pageVisitDuration: currentTimestamp - pageLoadTimestamp,
      "~timestampu": currentTimestamp / 1000,
      "~timestampz": now.toISOString()
    };
  };
  var getWindowContext = function getWindowContext() {
    var height = window.height;
    var width = window.width;
    var scrollY = window.scrollY;
    var scrollX = window.scrollX;
    return {
      height: height,
      width: width,
      scrollY: scrollY,
      scrollX: scrollX
    };
  };
  var coreGlobalContext = {
    browser: getBrowserContext(),
    page: getPageContext(),
    referringPage: getReferrerContext()
  };
  var getGlobalContext = function getGlobalContext() {
    return _objectSpread(_objectSpread(_objectSpread({}, coreGlobalContext), getTimeContext()), {}, {
      window: getWindowContext(),
      "~sdkver": libraryVersion
    });
  };
  var getContext = function getContext() {
    var addedContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var context = _objectSpread(_objectSpread({}, getGlobalContext()), addedContext);
    return _objectSpread(_objectSpread({}, flattenObject$1(context)), {}, {
      events: eventRegistry.toJSON()
    });
  };
  return {
    getContext: getContext
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var defaultPreprocessor = function defaultPreprocessor(params) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }
  return args;
};

// eslint-disable-next-line no-unused-vars
var defaultEmissionCondition = function defaultEmissionCondition(params) {
  return true;
};
var createSubscription = function createSubscription() {
  var preprocessor = defaultPreprocessor;
  var emissionCondition = defaultEmissionCondition;
  var counter = 0;
  var subscriptions = {};
  var createUnsubscribe = function createUnsubscribe(id) {
    return function () {
      delete subscriptions[id];
    };
  };
  var add = function add(callback) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    if (typeof callback !== "function") {
      return function () {
        return undefined;
      };
    }
    counter += 1;
    subscriptions[counter] = {
      callback: callback,
      params: params
    };
    return createUnsubscribe(counter);
  };
  var setEmissionPreprocessor = function setEmissionPreprocessor(value) {
    if (typeof value === "function") {
      preprocessor = value;
    }
  };
  var setEmissionCondition = function setEmissionCondition(value) {
    if (typeof value === "function") {
      emissionCondition = value;
    }
  };
  var emit = function emit() {
    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }
    values(subscriptions).forEach(function (_ref130) {
      var callback = _ref130.callback,
        params = _ref130.params;
      var result = preprocessor.apply(void 0, [params].concat(args));
      if (emissionCondition.apply(void 0, [params].concat(_toConsumableArray(result)))) {
        callback.apply(void 0, _toConsumableArray(result));
      }
    });
  };
  var hasSubscriptions = function hasSubscriptions() {
    return Object.keys(subscriptions).length > 0;
  };
  return {
    add: add,
    emit: emit,
    hasSubscriptions: hasSubscriptions,
    setEmissionPreprocessor: setEmissionPreprocessor,
    setEmissionCondition: setEmissionCondition
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateOptions = function validateOptions(_ref131) {
  var options = _ref131.options;
  var validator = boundObjectOf({
    surfaces: boundArrayOf(boundString()).uniqueItems(),
    schemas: boundArrayOf(boundString()).uniqueItems(),
    callback: boundCallback().required()
  }).noUnknownFields();
  return validator(options);
};
var emissionPreprocessor = function emissionPreprocessor(params, propositions) {
  var surfacesFilter = params.surfacesFilter,
    schemasFilter = params.schemasFilter;
  var result = {
    propositions: propositions.filter(function (payload) {
      return surfacesFilter ? includes(surfacesFilter, payload.scope) : true;
    }).map(function (payload) {
      var _payload$items2 = payload.items,
        items = _payload$items2 === void 0 ? [] : _payload$items2;
      return _objectSpread(_objectSpread({}, payload), {}, {
        items: items.filter(function (item) {
          return schemasFilter ? includes(schemasFilter, item.schema) : true;
        })
      });
    }).filter(function (payload) {
      return payload.items.length > 0;
    })
  };
  return [result];
};
var emissionCondition = function emissionCondition(params, result) {
  return result.propositions.length > 0;
};
var createSubscribeRulesetItems = function createSubscribeRulesetItems() {
  var subscription = createSubscription();
  subscription.setEmissionPreprocessor(emissionPreprocessor);
  subscription.setEmissionCondition(emissionCondition);
  var run = function run(_ref132) {
    var surfaces = _ref132.surfaces,
      schemas = _ref132.schemas,
      callback = _ref132.callback;
    var unsubscribe = subscription.add(callback, {
      surfacesFilter: surfaces instanceof Array ? surfaces : undefined,
      schemasFilter: schemas instanceof Array ? schemas : undefined
    });
    return Promise.resolve({
      unsubscribe: unsubscribe
    });
  };
  var optionsValidator = function optionsValidator(options) {
    return validateOptions({
      options: options
    });
  };
  var refresh = function refresh(propositions) {
    if (!subscription.hasSubscriptions()) {
      return;
    }
    subscription.emit(propositions);
  };
  return {
    refresh: refresh,
    command: {
      optionsValidator: optionsValidator,
      run: run
    }
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var CONTEXT_KEY = {
  TYPE: "~type",
  SOURCE: "~source"
};
var CONTEXT_EVENT_TYPE = {
  LIFECYCLE: "com.adobe.eventType.lifecycle",
  TRACK: "com.adobe.eventType.generic.track",
  EDGE: "com.adobe.eventType.edge",
  RULES_ENGINE: "com.adobe.eventType.rulesEngine"
};
var CONTEXT_EVENT_SOURCE = {
  LAUNCH: "com.adobe.eventSource.applicationLaunch",
  REQUEST: "com.adobe.eventSource.requestContent"
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var validateOptions$1 = function validateOptions$1(_ref133) {
  var options = _ref133.options;
  var validator = boundObjectOf({
    renderDecisions: boundBoolean(),
    personalization: boundObjectOf({
      decisionContext: boundObjectOf({})
    })
  }).noUnknownFields();
  return validator(options);
};
var createEvaluateRulesetsCommand = function createEvaluateRulesetsCommand(_ref134) {
  var contextProvider = _ref134.contextProvider,
    decisionProvider = _ref134.decisionProvider;
  var run = function run(_ref135) {
    var renderDecisions = _ref135.renderDecisions,
      decisionContext = _ref135.decisionContext,
      applyResponse = _ref135.applyResponse;
    return applyResponse({
      renderDecisions: renderDecisions,
      propositions: decisionProvider.evaluate(contextProvider.getContext(decisionContext))
    });
  };
  var optionsValidator = function optionsValidator(options) {
    return validateOptions$1({
      options: options
    });
  };
  return {
    optionsValidator: optionsValidator,
    run: run
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createDecisioningEngine = function createDecisioningEngine(_ref136) {
  var config = _ref136.config,
    createNamespacedStorage = _ref136.createNamespacedStorage,
    consent = _ref136.consent;
  var orgId = config.orgId,
    personalizationStorageEnabled = config.personalizationStorageEnabled;
  var storage = createNamespacedStorage("".concat(sanitizeOrgIdForCookieName(orgId), ".decisioning."));
  if (!personalizationStorageEnabled) {
    clearLocalStorage(storage.persistent);
  }
  var eventRegistry = createEventRegistry({
    storage: createInMemoryStorage()
  });
  var decisionProvider = createDecisionProvider({
    eventRegistry: eventRegistry
  });
  var contextProvider = createContextProvider({
    eventRegistry: eventRegistry,
    window: window
  });
  var evaluateRulesetsCommand = createEvaluateRulesetsCommand({
    contextProvider: contextProvider,
    decisionProvider: decisionProvider
  });
  var subscribeRulesetItems = createSubscribeRulesetItems();
  var applyResponse;
  return {
    lifecycle: {
      onDecision: function onDecision(_ref137) {
        var propositions = _ref137.propositions;
        subscribeRulesetItems.refresh(propositions);
      },
      onComponentsRegistered: function onComponentsRegistered(tools) {
        applyResponse = createApplyResponse(tools.lifecycle);
        if (personalizationStorageEnabled) {
          consent.awaitConsent().then(function () {
            eventRegistry.setStorage(storage.persistent);
          })["catch"](function () {
            if (storage) {
              clearLocalStorage(storage.persistent);
            }
          });
        }
      },
      onBeforeEvent: function onBeforeEvent(_ref138) {
        var _objectSpread6;
        var event = _ref138.event,
          renderDecisions = _ref138.renderDecisions,
          _ref138$personalizati = _ref138.personalization,
          personalization = _ref138$personalizati === void 0 ? {} : _ref138$personalizati,
          _ref138$onResponse = _ref138.onResponse,
          onResponse = _ref138$onResponse === void 0 ? noop : _ref138$onResponse;
        var _personalization$deci = personalization.decisionContext,
          decisionContext = _personalization$deci === void 0 ? {} : _personalization$deci;
        onResponse(createOnResponseHandler({
          renderDecisions: renderDecisions,
          decisionProvider: decisionProvider,
          applyResponse: applyResponse,
          event: event,
          personalization: personalization,
          decisionContext: contextProvider.getContext(_objectSpread((_objectSpread6 = {}, _defineProperty(_objectSpread6, CONTEXT_KEY.TYPE, CONTEXT_EVENT_TYPE.EDGE), _defineProperty(_objectSpread6, CONTEXT_KEY.SOURCE, CONTEXT_EVENT_SOURCE.REQUEST), _objectSpread6), decisionContext))
        }));
        eventRegistry.addExperienceEdgeEvent(event);
      }
    },
    commands: {
      evaluateRulesets: {
        run: function run(_ref139) {
          var _objectSpread7;
          var renderDecisions = _ref139.renderDecisions,
            _ref139$personalizati = _ref139.personalization,
            personalization = _ref139$personalizati === void 0 ? {} : _ref139$personalizati;
          var _personalization$deci2 = personalization.decisionContext,
            decisionContext = _personalization$deci2 === void 0 ? {} : _personalization$deci2;
          return evaluateRulesetsCommand.run({
            renderDecisions: renderDecisions,
            decisionContext: _objectSpread((_objectSpread7 = {}, _defineProperty(_objectSpread7, CONTEXT_KEY.TYPE, CONTEXT_EVENT_TYPE.RULES_ENGINE), _defineProperty(_objectSpread7, CONTEXT_KEY.SOURCE, CONTEXT_EVENT_SOURCE.REQUEST), _objectSpread7), decisionContext),
            applyResponse: applyResponse
          });
        },
        optionsValidator: evaluateRulesetsCommand.optionsValidator
      },
      subscribeRulesetItems: subscribeRulesetItems.command
    }
  };
};
createDecisioningEngine.namespace = "DecisioningEngine";
createDecisioningEngine.configValidators = boundObjectOf({
  personalizationStorageEnabled: boundBoolean()["default"](false)
});

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var processResponse = function processResponse(_ref140) {
  var response = _ref140.response;
  return {
    inferences: response.getPayloadsByType("rtml:inferences")
  };
};

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createMachineLearning = function createMachineLearning() {
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};
createMachineLearning.namespace = "MachineLearning";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// TODO: Register the Components here statically for now. They might be registered differently.
// TODO: Figure out how sub-components will be made available/registered
var componentCreators = [createDataCollector, createActivityCollector, createIdentity, createAudiences, createPersonalization, createContext, createPrivacy, createEventMerge, createLibraryInfo, createMachineLearning, createDecisioningEngine];

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var CONFIG_DOC_URI = "https://adobe.ly/3sHh553";
var transformOptions = function transformOptions(_ref141) {
  var combinedConfigValidator = _ref141.combinedConfigValidator,
    options = _ref141.options,
    logger = _ref141.logger;
  try {
    var validator = combinedConfigValidator.noUnknownFields().required();
    return validator.call({
      logger: logger
    }, options);
  } catch (e) {
    throw new Error("Resolve these configuration problems:\n\t - ".concat(e.message.split("\n").join("\n\t - "), "\nFor configuration documentation see: ").concat(CONFIG_DOC_URI));
  }
};
var buildAllOnInstanceConfiguredExtraParams = function buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators) {
  return componentCreators.reduce(function (memo, _ref142) {
    var buildOnInstanceConfiguredExtraParams = _ref142.buildOnInstanceConfiguredExtraParams;
    if (buildOnInstanceConfiguredExtraParams) {
      (0, _reactorObjectAssign["default"])(memo, buildOnInstanceConfiguredExtraParams({
        config: config,
        logger: logger
      }));
    }
    return memo;
  }, {});
};
var wrapLoggerInQueue = function wrapLoggerInQueue(logger) {
  var queue = [];
  var queuedLogger = {
    get enabled() {
      return logger.enabled;
    },
    flush: function flush() {
      queue.forEach(function (_ref143) {
        var method = _ref143.method,
          args = _ref143.args;
        return logger[method].apply(logger, _toConsumableArray(args));
      });
    }
  };
  Object.keys(logger).filter(function (key) {
    return typeof logger[key] === "function";
  }).forEach(function (method) {
    queuedLogger[method] = function () {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      queue.push({
        method: method,
        args: args
      });
    };
  });
  return queuedLogger;
};
var buildAndValidateConfig = function buildAndValidateConfig(_ref144) {
  var options = _ref144.options,
    componentCreators = _ref144.componentCreators,
    coreConfigValidators = _ref144.coreConfigValidators,
    createConfig = _ref144.createConfig,
    logger = _ref144.logger,
    setDebugEnabled = _ref144.setDebugEnabled;
  // We wrap the logger in a queue in case debugEnabled is set in the config
  // but we need to log something before the config is created.
  var queuedLogger = wrapLoggerInQueue(logger);
  var combinedConfigValidator = componentCreators.map(function (_ref145) {
    var configValidators = _ref145.configValidators;
    return configValidators;
  }).filter(function (configValidators) {
    return configValidators;
  }).reduce(function (validator, configValidators) {
    return validator.concat(configValidators);
  }, coreConfigValidators);
  var config = createConfig(transformOptions({
    combinedConfigValidator: combinedConfigValidator,
    options: options,
    logger: queuedLogger
  }));
  setDebugEnabled(config.debugEnabled, {
    fromConfig: true
  });
  queuedLogger.flush();
  // eslint-disable-next-line no-underscore-dangle
  var extraParams = buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators);
  logger.logOnInstanceConfigured(_objectSpread(_objectSpread({}, extraParams), {}, {
    config: config
  }));
  return config;
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var initializeComponents = function initializeComponents(_ref146) {
  var componentCreators = _ref146.componentCreators,
    lifecycle = _ref146.lifecycle,
    componentRegistry = _ref146.componentRegistry,
    getImmediatelyAvailableTools = _ref146.getImmediatelyAvailableTools;
  componentCreators.forEach(function (createComponent) {
    var namespace = createComponent.namespace; // TO-DOCUMENT: Helpers that we inject into factories.
    var tools = getImmediatelyAvailableTools(namespace);
    var component;
    try {
      component = createComponent(tools);
    } catch (error) {
      throw stackError({
        error: error,
        message: "[".concat(namespace, "] An error occurred during component creation.")
      });
    }
    componentRegistry.register(namespace, component);
  });
  return lifecycle.onComponentsRegistered({
    lifecycle: lifecycle
  }).then(function () {
    return componentRegistry;
  });
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createConfig = function createConfig(options) {
  return (0, _reactorObjectAssign["default"])({}, options);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var EDGE$1 = "edge.adobedc.net";
var ID_THIRD_PARTY = "adobedc.demdex.net";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var EDGE_BASE_PATH = "ee";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createCoreConfigs = function createCoreConfigs() {
  return boundObjectOf({
    debugEnabled: boundBoolean()["default"](false),
    defaultConsent: boundEnumOf(IN, OUT, PENDING)["default"](IN),
    datastreamId: boundString().unique().required(),
    edgeDomain: boundString().domain()["default"](EDGE$1),
    edgeBasePath: boundString().nonEmpty()["default"](EDGE_BASE_PATH),
    orgId: boundString().unique().required(),
    onBeforeEventSend: boundCallback()["default"](noop),
    edgeConfigOverrides: validateConfigOverride
  }).deprecated("edgeConfigId", boundString().unique(), "datastreamId");
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectHandleError = function injectHandleError(_ref147) {
  var errorPrefix = _ref147.errorPrefix,
    logger = _ref147.logger;
  return function (error, operation) {
    var err = toError(error);

    // In the case of declined consent, we've opted to not reject the promise
    // returned to the customer, but instead resolve the promise with an
    // empty result object.
    if (err.code === DECLINED_CONSENT_ERROR_CODE) {
      logger.warn("The ".concat(operation, " could not fully complete. ").concat(err.message));
      return {};
    }
    updateErrorMessage({
      error: err,
      message: "".concat(errorPrefix, " ").concat(err.message)
    });
    throw err;
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectSendFetchRequest = function injectSendFetchRequest(_ref148) {
  var fetch = _ref148.fetch;
  return function (url, body) {
    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      // To set the cookie header in the request.
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: body
    }).then(function (response) {
      return response.text().then(function (responseBody) {
        return {
          statusCode: response.status,
          // We expose headers through a function instead of creating an object
          // with all the headers up front largely because the native
          // request.getResponseHeader method is case-insensitive but also because it prevents
          // us from having to add header parsing logic when using XHR to make requests.
          getHeader: function getHeader(name) {
            return response.headers.get(name);
          },
          body: responseBody
        };
      });
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectSendXhrRequest = function injectSendXhrRequest(_ref149) {
  var XMLHttpRequest = _ref149.XMLHttpRequest;
  return function (url, body) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 0) {
            reject(new Error("Request aborted."));
          } else {
            resolve({
              statusCode: request.status,
              // We expose headers through a function instead of creating an object
              // with all the headers up front because:
              // 1. It avoids having to add header parsing code to get all headers.
              // 2. The native request.getResponseHeader method is case-insensitive.
              getHeader: function getHeader(name) {
                return request.getResponseHeader(name);
              },
              body: request.responseText
            });
          }
        }
      };
      request.onloadstart = function () {
        request.responseType = "text";
      };
      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
      request.withCredentials = true;
      request.onerror = reject;
      request.onabort = reject;
      request.send(body);
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectSendBeaconRequest = function injectSendBeaconRequest(_ref150) {
  var sendBeacon = _ref150.sendBeacon,
    sendFetchRequest = _ref150.sendFetchRequest,
    logger = _ref150.logger;
  return function (url, body) {
    var blob = new Blob([body], {
      type: "text/plain; charset=UTF-8"
    });
    if (!sendBeacon(url, blob)) {
      logger.info("Unable to use `sendBeacon`; falling back to `fetch`.");
      return sendFetchRequest(url, body);
    }

    // Using sendBeacon, we technically don't get a response back from
    // the server, but we'll resolve the promise with an object to maintain
    // consistency with other network strategies.
    return Promise.resolve({
      statusCode: 204,
      getHeader: function getHeader() {
        return null;
      },
      body: ""
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createLogger = function createLogger(_ref151) {
  var getDebugEnabled = _ref151.getDebugEnabled,
    console = _ref151.console,
    getMonitors = _ref151.getMonitors,
    context = _ref151.context;
  var prefix = "[".concat(context.instanceName, "]");
  if (context.componentName) {
    prefix += " [".concat(context.componentName, "]");
  }
  var notifyMonitors = function notifyMonitors(method, data) {
    var monitors = getMonitors();
    if (monitors.length > 0) {
      var dataWithContext = (0, _reactorObjectAssign["default"])({}, context, data);
      monitors.forEach(function (monitor) {
        if (monitor[method]) {
          monitor[method](dataWithContext);
        }
      });
    }
  };
  var log = function log(level) {
    for (var _len10 = arguments.length, rest = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
      rest[_key10 - 1] = arguments[_key10];
    }
    notifyMonitors("onBeforeLog", {
      level: level,
      arguments: rest
    });
    if (getDebugEnabled()) {
      console[level].apply(console, [prefix].concat(rest));
    }
  };
  return {
    get enabled() {
      return getMonitors().length > 0 || getDebugEnabled();
    },
    logOnInstanceCreated: function logOnInstanceCreated(data) {
      notifyMonitors("onInstanceCreated", data);
      log("info", "Instance initialized.");
    },
    logOnInstanceConfigured: function logOnInstanceConfigured(data) {
      notifyMonitors("onInstanceConfigured", data);
      log("info", "Instance configured. Computed configuration:", data.config);
    },
    logOnBeforeCommand: function logOnBeforeCommand(data) {
      notifyMonitors("onBeforeCommand", data);
      log("info", "Executing ".concat(data.commandName, " command. Options:"), data.options);
    },
    logOnCommandResolved: function logOnCommandResolved(data) {
      notifyMonitors("onCommandResolved", data);
      log("info", "".concat(data.commandName, " command resolved. Result:"), data.result);
    },
    logOnCommandRejected: function logOnCommandRejected(data) {
      notifyMonitors("onCommandRejected", data);
      log("error", "".concat(data.commandName, " command was rejected. Error:"), data.error);
    },
    logOnBeforeNetworkRequest: function logOnBeforeNetworkRequest(data) {
      notifyMonitors("onBeforeNetworkRequest", data);
      log("info", "Request ".concat(data.requestId, ": Sending request."), data.payload);
    },
    logOnNetworkResponse: function logOnNetworkResponse(data) {
      notifyMonitors("onNetworkResponse", data);
      var messagesSuffix = data.parsedBody || data.body ? "response body:" : "no response body.";
      log("info", "Request ".concat(data.requestId, ": Received response with status code ").concat(data.statusCode, " and ").concat(messagesSuffix), data.parsedBody || data.body);
    },
    logOnNetworkError: function logOnNetworkError(data) {
      notifyMonitors("onNetworkError", data);
      log("error", "Request ".concat(data.requestId, ": Network request failed."), data.error);
    },
    /**
     * Outputs informational message to the web console. In some
     * browsers a small "i" icon is displayed next to these items
     * in the web console's log.
     * @param {...*} arg Any argument to be logged.
     */
    info: log.bind(null, "info"),
    /**
     * Outputs a warning message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    warn: log.bind(null, "warn"),
    /**
     * Outputs an error message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    error: log.bind(null, "error")
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var EVENT_CANCELLATION_MESSAGE = "Event was canceled because the onBeforeEventSend callback returned false.";
var createEventManager = function createEventManager(_ref152) {
  var config = _ref152.config,
    logger = _ref152.logger,
    lifecycle = _ref152.lifecycle,
    consent = _ref152.consent,
    createEvent = _ref152.createEvent,
    createDataCollectionRequestPayload = _ref152.createDataCollectionRequestPayload,
    createDataCollectionRequest = _ref152.createDataCollectionRequest,
    sendEdgeNetworkRequest = _ref152.sendEdgeNetworkRequest,
    _applyResponse = _ref152.applyResponse;
  var onBeforeEventSend = config.onBeforeEventSend,
    globalConfigOverrides = config.edgeConfigOverrides;
  return {
    createEvent: createEvent,
    /**
     * Sends an event. This includes running the event and payload through the
     * appropriate lifecycle hooks, sending the request to the server, and
     * handling the response.
     * @param {Object} event This will be JSON stringified and used inside the
     * request payload.
     * @param {Object} [options] Options to pass on to the onBeforeEvent
     * lifecycle method
     * @param {Object} [options.edgeConfigOverrides] Settings that take
     * precedence over the global datastream configuration, including which
     * datastream to use.
     * @returns {*}
     */
    sendEvent: function sendEvent(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localConfigOverrides = options.edgeConfigOverrides,
        otherOptions = _objectWithoutProperties(options, ["edgeConfigOverrides"]);
      var requestParams = createRequestParams({
        payload: createDataCollectionRequestPayload(),
        localConfigOverrides: localConfigOverrides,
        globalConfigOverrides: globalConfigOverrides
      });
      var request = createDataCollectionRequest(requestParams);
      var onResponseCallbackAggregator = createCallbackAggregator();
      var onRequestFailureCallbackAggregator = createCallbackAggregator();
      return lifecycle.onBeforeEvent(_objectSpread(_objectSpread({}, otherOptions), {}, {
        event: event,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: onRequestFailureCallbackAggregator.add
      })).then(function () {
        requestParams.payload.addEvent(event);
        return consent.awaitConsent();
      }).then(function () {
        try {
          // NOTE: this calls onBeforeEventSend callback (if configured)
          event.finalize(onBeforeEventSend);
        } catch (error) {
          var throwError = function throwError() {
            throw error;
          };
          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          return onRequestFailureCallbackAggregator.call({
            error: error
          }).then(throwError, throwError);
        }

        // if the callback returns false, the event should not be sent
        if (!event.shouldSend()) {
          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          logger.info(EVENT_CANCELLATION_MESSAGE);
          var error = new Error(EVENT_CANCELLATION_MESSAGE);
          return onRequestFailureCallbackAggregator.call({
            error: error
          }).then(function () {
            // Ensure the promise gets resolved with undefined instead
            // of an array of return values from the callbacks.
          });
        }
        return sendEdgeNetworkRequest({
          request: request,
          runOnResponseCallbacks: onResponseCallbackAggregator.call,
          runOnRequestFailureCallbacks: onRequestFailureCallbackAggregator.call
        });
      });
    },
    applyResponse: function applyResponse(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$renderDecisi2 = options.renderDecisions,
        renderDecisions = _options$renderDecisi2 === void 0 ? false : _options$renderDecisi2,
        _options$decisionCont2 = options.decisionContext,
        decisionContext = _options$decisionCont2 === void 0 ? {} : _options$decisionCont2,
        _options$responseHead2 = options.responseHeaders,
        responseHeaders = _options$responseHead2 === void 0 ? {} : _options$responseHead2,
        _options$responseBody2 = options.responseBody,
        responseBody = _options$responseBody2 === void 0 ? {
          handle: []
        } : _options$responseBody2,
        personalization = options.personalization;
      var payload = createDataCollectionRequestPayload();
      var request = createDataCollectionRequest({
        payload: payload
      });
      var onResponseCallbackAggregator = createCallbackAggregator();
      return lifecycle.onBeforeEvent({
        event: event,
        renderDecisions: renderDecisions,
        decisionContext: decisionContext,
        decisionScopes: [PAGE_WIDE_SCOPE],
        personalization: personalization,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: noop
      }).then(function () {
        payload.addEvent(event);
        return _applyResponse({
          request: request,
          responseHeaders: responseHeaders,
          responseBody: responseBody,
          runOnResponseCallbacks: onResponseCallbackAggregator.call
        });
      });
    }
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var STATE_STORE_HANDLE_TYPE = "state:store";
var createCookieTransfer = function createCookieTransfer(_ref153) {
  var cookieJar = _ref153.cookieJar,
    shouldTransferCookie = _ref153.shouldTransferCookie,
    apexDomain = _ref153.apexDomain,
    dateProvider = _ref153.dateProvider;
  return {
    /**
     * When sending to a third-party endpoint, the endpoint won't be able to
     * access first-party cookies, therefore we transfer cookies into
     * the request body so they can be read by the server.
     */
    cookiesToPayload: function cookiesToPayload(payload, endpointDomain) {
      var isEndpointFirstParty = endsWith(endpointDomain, apexDomain);
      var state = {
        domain: apexDomain,
        cookiesEnabled: true
      };

      // If the endpoint is first-party, there's no need to transfer cookies
      // to the payload since they'll be automatically passed through cookie
      // headers.
      if (!isEndpointFirstParty) {
        var cookies = cookieJar.get();
        var entries = Object.keys(cookies).filter(shouldTransferCookie).map(function (qualifyingCookieName) {
          return {
            key: qualifyingCookieName,
            value: cookies[qualifyingCookieName]
          };
        });
        if (entries.length) {
          state.entries = entries;
        }
      }
      payload.mergeState(state);
    },
    /**
     * When receiving from a third-party endpoint, the endpoint won't be able to
     * write first-party cookies, therefore we write first-party cookies
     * as directed in the response body.
     */
    responseToCookies: function responseToCookies(response) {
      response.getPayloadsByType(STATE_STORE_HANDLE_TYPE).forEach(function (stateItem) {
        var options = {
          domain: apexDomain
        };
        var sameSite = stateItem.attrs && stateItem.attrs.SameSite && stateItem.attrs.SameSite.toLowerCase();
        if (stateItem.maxAge !== undefined) {
          // cookieJar expects "expires" as a date object
          options.expires = new Date(dateProvider().getTime() + stateItem.maxAge * 1000);
        }
        if (sameSite !== undefined) {
          options.sameSite = sameSite;
        }
        // When sameSite is set to none, the secure flag must be set.
        // Experience edge will not set the secure flag in these cases.
        if (sameSite === "none") {
          options.secure = true;
        }
        cookieJar.set(stateItem.key, stateItem.value, options);
      });
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var MBOX_EDGE_CLUSTER = "mboxEdgeCluster";
var AT_QA_MODE = "at_qa_mode";
var MBOX = "mbox";

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectShouldTransferCookie = function injectShouldTransferCookie(_ref154) {
  var orgId = _ref154.orgId,
    targetMigrationEnabled = _ref154.targetMigrationEnabled;
  return function (name) {
    // We have a contract with the server that we will pass
    // all cookies whose names are namespaced according to the
    // logic in isNamespacedCookieName as well as any legacy
    // cookie names (so that the server can handle migrating
    // identities on websites previously using Visitor.js)
    return isNamespacedCookieName(orgId, name) || name === AT_QA_MODE || targetMigrationEnabled && name === MBOX;
  };
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var apiVersion = "v1";

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var mergeLifecycleResponses = function mergeLifecycleResponses(returnValues) {
  // Merges all returned objects from all `onResponse` callbacks into
  // a single object that can later be returned to the customer.
  var lifecycleOnResponseReturnValues = returnValues.shift() || [];
  var consumerOnResponseReturnValues = returnValues.shift() || [];
  var lifecycleOnBeforeRequestReturnValues = returnValues;
  return assignConcatArrayValues.apply(void 0, [{}].concat(_toConsumableArray(lifecycleOnResponseReturnValues), _toConsumableArray(consumerOnResponseReturnValues), _toConsumableArray(lifecycleOnBeforeRequestReturnValues)));
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var handleRequestFailure = function handleRequestFailure(onRequestFailureCallbackAggregator) {
  return function (error) {
    // Regardless of whether the network call failed, an unexpected status
    // code was returned, or the response body was malformed, we want to call
    // the onRequestFailure callbacks, but still throw the exception.
    var throwError = function throwError() {
      throw error;
    };
    return onRequestFailureCallbackAggregator.call({
      error: error
    }).then(throwError, throwError);
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectSendEdgeNetworkRequest = function injectSendEdgeNetworkRequest(_ref155) {
  var config = _ref155.config,
    lifecycle = _ref155.lifecycle,
    cookieTransfer = _ref155.cookieTransfer,
    sendNetworkRequest = _ref155.sendNetworkRequest,
    createResponse = _ref155.createResponse,
    processWarningsAndErrors = _ref155.processWarningsAndErrors,
    getLocationHint = _ref155.getLocationHint,
    getAssuranceValidationTokenParams = _ref155.getAssuranceValidationTokenParams;
  var edgeDomain = config.edgeDomain,
    edgeBasePath = config.edgeBasePath,
    datastreamId = config.datastreamId;
  /**
   * Sends a network request that is aware of payload interfaces,
   * lifecycle methods, configured edge domains, response structures, etc.
   */
  return function (_ref156) {
    var request = _ref156.request,
      _ref156$runOnResponse = _ref156.runOnResponseCallbacks,
      runOnResponseCallbacks = _ref156$runOnResponse === void 0 ? noop : _ref156$runOnResponse,
      _ref156$runOnRequestF = _ref156.runOnRequestFailureCallbacks,
      runOnRequestFailureCallbacks = _ref156$runOnRequestF === void 0 ? noop : _ref156$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add
    }).then(function () {
      var endpointDomain = request.getUseIdThirdPartyDomain() ? ID_THIRD_PARTY : edgeDomain;
      var locationHint = getLocationHint();
      var edgeBasePathWithLocationHint = locationHint ? "".concat(edgeBasePath, "/").concat(locationHint) : edgeBasePath;
      var configId = request.getDatastreamIdOverride() || datastreamId;
      var payload = request.getPayload();
      if (configId !== datastreamId) {
        payload.mergeMeta({
          sdkConfig: {
            datastream: {
              original: datastreamId
            }
          }
        });
      }
      var url = "https://".concat(endpointDomain, "/").concat(edgeBasePathWithLocationHint, "/").concat(apiVersion, "/").concat(request.getAction(), "?configId=").concat(configId, "&requestId=").concat(request.getId()).concat(getAssuranceValidationTokenParams());
      cookieTransfer.cookiesToPayload(payload, endpointDomain);
      return sendNetworkRequest({
        requestId: request.getId(),
        url: url,
        payload: payload,
        useSendBeacon: request.getUseSendBeacon()
      });
    }).then(function (networkResponse) {
      processWarningsAndErrors(networkResponse);
      return networkResponse;
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function (_ref157) {
      var parsedBody = _ref157.parsedBody,
        getHeader = _ref157.getHeader;
      // Note that networkResponse.parsedBody may be undefined if it was a
      // 204 No Content response. That's fine.
      var response = createResponse({
        content: parsedBody,
        getHeader: getHeader
      });
      cookieTransfer.responseToCookies(response);

      // Notice we're calling the onResponse lifecycle method even if there are errors
      // inside the response body. This is because the full request didn't actually fail--
      // only portions of it that are considered non-fatal (a specific, non-critical
      // Konductor plugin, for example).
      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var NO_CONTENT = 204;
var TOO_MANY_REQUESTS = 429;
var BAD_GATEWAY = 502;
var SERVICE_UNAVAILABLE = 503;
var GATEWAY_TIMEOUT = 504;

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var MESSAGE_PREFIX = "The server responded with a";
var injectProcessWarningsAndErrors = function injectProcessWarningsAndErrors(_ref158) {
  var logger = _ref158.logger;
  return function (networkResponse) {
    var statusCode = networkResponse.statusCode,
      body = networkResponse.body,
      parsedBody = networkResponse.parsedBody;
    if (statusCode < 200 || statusCode >= 300 || !parsedBody && statusCode !== NO_CONTENT || parsedBody && !Array.isArray(parsedBody.handle)) {
      var bodyToLog = parsedBody ? JSON.stringify(parsedBody, null, 2) : body;
      var messageSuffix = bodyToLog ? "response body:\n".concat(bodyToLog) : "no response body.";
      throw new Error("".concat(MESSAGE_PREFIX, " status code ").concat(statusCode, " and ").concat(messageSuffix));
    }
    if (parsedBody) {
      var _parsedBody$warnings = parsedBody.warnings,
        warnings = _parsedBody$warnings === void 0 ? [] : _parsedBody$warnings,
        _parsedBody$errors = parsedBody.errors,
        errors = _parsedBody$errors === void 0 ? [] : _parsedBody$errors;
      warnings.forEach(function (warning) {
        logger.warn("".concat(MESSAGE_PREFIX, " warning:"), warning);
      });
      errors.forEach(function (error) {
        logger.error("".concat(MESSAGE_PREFIX, " non-fatal error:"), error);
      });
    }
  };
};

/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var injectGetLocationHint = function injectGetLocationHint(_ref159) {
  var orgId = _ref159.orgId,
    cookieJar = _ref159.cookieJar;
  var clusterCookieName = getNamespacedCookieName(orgId, CLUSTER);
  var fromClusterCookie = function fromClusterCookie() {
    return cookieJar.get(clusterCookieName);
  };
  var fromTarget = function fromTarget() {
    var mboxEdgeCluster = cookieJar.get(MBOX_EDGE_CLUSTER);
    if (mboxEdgeCluster) {
      return "t".concat(mboxEdgeCluster);
    }
    return undefined;
  };
  return function () {
    return fromClusterCookie() || fromTarget();
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var MAX_RETRIES = 3;
var RETRYABLE_STATUS_CODES = [TOO_MANY_REQUESTS, SERVICE_UNAVAILABLE, BAD_GATEWAY, GATEWAY_TIMEOUT];

// These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
var isRequestRetryable = function isRequestRetryable(_ref160) {
  var response = _ref160.response,
    retriesAttempted = _ref160.retriesAttempted;
  return retriesAttempted < MAX_RETRIES && includes(RETRYABLE_STATUS_CODES, response.statusCode);
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// The retry gets incrementally (but not exponentially) longer for each retry.
var FIRST_DELAY_MILLIS = 1000;
var INCREMENTAL_DELAY_MILLIS = 1000;

// When the target delay is randomized, make it within the range of this percentage above or below the target delay.
var MAX_RANDOM_VARIANCE_PERCENTAGE = 0.3;
var calculateRetryDelay = function calculateRetryDelay(retriesAttempted) {
  var targetDelay = FIRST_DELAY_MILLIS + retriesAttempted * INCREMENTAL_DELAY_MILLIS;
  var maxVariance = targetDelay * MAX_RANDOM_VARIANCE_PERCENTAGE;
  var minDelay = targetDelay - maxVariance;
  var maxDelay = targetDelay + maxVariance;
  var randomizedDelayWithinRange = Math.round(minDelay + Math.random() * (maxDelay - minDelay));
  return randomizedDelayWithinRange;
};
var getDelayFromHeader = function getDelayFromHeader(response) {
  // According to the HTTP spec, if the header is defined, its value will be a string that
  // represents either:
  //  * An integer indicating the number of seconds to delay.
  //  * A date after which a retry may occur. The date would be in HTTP-date
  //    format (https://tools.ietf.org/html/rfc7231#section-7.1.1.1). When debugging, it can
  //    be helpful to know that this is the same format that a JavaScript date's
  //    toGMTString() returns.
  var headerValue = response.getHeader(RETRY_AFTER);
  var delayInMillis;
  if (headerValue) {
    var headerValueInt = parseInt(headerValue, 10);
    if (isInteger(headerValueInt)) {
      delayInMillis = headerValueInt * 1000;
    } else {
      delayInMillis = Math.max(0, new Date(headerValue).getTime() - new Date().getTime());
    }
  }
  return delayInMillis;
};

// These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
// For retry delays that don't come from a Retry-After response header, we try to stick with the following best
// practices outlined in https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults:
//  * Incremental retry
//  * Random interval
var getRequestRetryDelay = function getRequestRetryDelay(_ref161) {
  var response = _ref161.response,
    retriesAttempted = _ref161.retriesAttempted;
  // Technically, only 429 or 503 responses should have a Retry-After header, but we'll respect the
  // header if we find it on any response.
  var delayInMillis = getDelayFromHeader(response);

  // Note that the value of delay may be 0 at this point, which would be a valid delay we want to use
  // and not override, which is why we don't do:
  // if (!delay) { ... }
  if (delayInMillis === undefined) {
    delayInMillis = calculateRetryDelay(retriesAttempted);
  }
  return delayInMillis;
};

/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var HTTP_STATUS_OK = 200;
var injectApplyResponse = function injectApplyResponse(_ref162) {
  var cookieTransfer = _ref162.cookieTransfer,
    lifecycle = _ref162.lifecycle,
    createResponse = _ref162.createResponse,
    processWarningsAndErrors = _ref162.processWarningsAndErrors;
  return function (_ref163) {
    var request = _ref163.request,
      responseHeaders = _ref163.responseHeaders,
      responseBody = _ref163.responseBody,
      _ref163$runOnResponse = _ref163.runOnResponseCallbacks,
      runOnResponseCallbacks = _ref163$runOnResponse === void 0 ? noop : _ref163$runOnResponse,
      _ref163$runOnRequestF = _ref163.runOnRequestFailureCallbacks,
      runOnRequestFailureCallbacks = _ref163$runOnRequestF === void 0 ? noop : _ref163$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
    var getHeader = function getHeader(key) {
      return responseHeaders[key];
    };
    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add
    }).then(function () {
      return processWarningsAndErrors({
        statusCode: HTTP_STATUS_OK,
        getHeader: getHeader,
        body: JSON.stringify(responseBody),
        parsedBody: responseBody
      });
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function () {
      var response = createResponse({
        content: responseBody,
        getHeader: getHeader
      });

      // This will clobber any cookies set via HTTP from the server.  So care should be given to remove any state:store handles if that is not desirable
      cookieTransfer.responseToCookies(response);
      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createNamespacedStorage = injectStorage(window);
var _window = window,
  console = _window.console,
  fetch = _window.fetch,
  navigator$1 = _window.navigator,
  XMLHttpRequest = _window.XMLHttpRequest;
var coreConfigValidators = createCoreConfigs();
var apexDomain = getApexDomain(window, cookieJar);
var sendFetchRequest = isFunction(fetch) ? injectSendFetchRequest({
  fetch: fetch
}) : injectSendXhrRequest({
  XMLHttpRequest: XMLHttpRequest
});
var fireReferrerHideableImage = injectFireReferrerHideableImage();
var getAssuranceValidationTokenParams = createGetAssuranceValidationTokenParams({
  window: window,
  createNamespacedStorage: createNamespacedStorage
});
var createExecuteCommand = function createExecuteCommand(_ref164) {
  var instanceName = _ref164.instanceName,
    _ref164$logController = _ref164.logController,
    setDebugEnabled = _ref164$logController.setDebugEnabled,
    logger = _ref164$logController.logger,
    createComponentLogger = _ref164$logController.createComponentLogger;
  var componentRegistry = createComponentRegistry();
  var lifecycle = createLifecycle(componentRegistry);
  var setDebugCommand = function setDebugCommand(options) {
    setDebugEnabled(options.enabled, {
      fromConfig: false
    });
  };
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJar
  });
  var configureCommand = function configureCommand(options) {
    var config = buildAndValidateConfig({
      options: options,
      componentCreators: componentCreators,
      coreConfigValidators: coreConfigValidators,
      createConfig: createConfig,
      logger: logger,
      setDebugEnabled: setDebugEnabled
    });
    var orgId = config.orgId,
      targetMigrationEnabled = config.targetMigrationEnabled;
    var shouldTransferCookie = injectShouldTransferCookie({
      orgId: orgId,
      targetMigrationEnabled: targetMigrationEnabled
    });
    var cookieTransfer = createCookieTransfer({
      cookieJar: loggingCookieJar,
      shouldTransferCookie: shouldTransferCookie,
      apexDomain: apexDomain,
      dateProvider: function dateProvider() {
        return new Date();
      }
    });
    var sendBeaconRequest = isFunction(navigator$1.sendBeacon) ? injectSendBeaconRequest({
      // Without the bind(), the browser will complain about an
      // illegal invocation.
      sendBeacon: navigator$1.sendBeacon.bind(navigator$1),
      sendFetchRequest: sendFetchRequest,
      logger: logger
    }) : sendFetchRequest;
    var sendNetworkRequest = injectSendNetworkRequest({
      logger: logger,
      sendFetchRequest: sendFetchRequest,
      sendBeaconRequest: sendBeaconRequest,
      isRequestRetryable: isRequestRetryable,
      getRequestRetryDelay: getRequestRetryDelay
    });
    var processWarningsAndErrors = injectProcessWarningsAndErrors({
      logger: logger
    });
    var extractEdgeInfo = injectExtractEdgeInfo({
      logger: logger
    });
    var createResponse = injectCreateResponse({
      extractEdgeInfo: extractEdgeInfo
    });
    var getLocationHint = injectGetLocationHint({
      orgId: orgId,
      cookieJar: cookieJar
    });
    var sendEdgeNetworkRequest = injectSendEdgeNetworkRequest({
      config: config,
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      sendNetworkRequest: sendNetworkRequest,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors,
      getLocationHint: getLocationHint,
      getAssuranceValidationTokenParams: getAssuranceValidationTokenParams
    });
    var applyResponse = injectApplyResponse({
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors
    });
    var generalConsentState = createConsentStateMachine({
      logger: logger
    });
    var consent = createConsent({
      generalConsentState: generalConsentState,
      logger: logger
    });
    var eventManager = createEventManager({
      config: config,
      logger: logger,
      lifecycle: lifecycle,
      consent: consent,
      createEvent: createEvent,
      createDataCollectionRequestPayload: createDataCollectionRequestPayload,
      createDataCollectionRequest: createDataCollectionRequest,
      sendEdgeNetworkRequest: sendEdgeNetworkRequest,
      applyResponse: applyResponse
    });
    return initializeComponents({
      componentCreators: componentCreators,
      lifecycle: lifecycle,
      componentRegistry: componentRegistry,
      getImmediatelyAvailableTools: function getImmediatelyAvailableTools(componentName) {
        var componentLogger = createComponentLogger(componentName);
        return {
          config: config,
          componentRegistry: componentRegistry,
          consent: consent,
          eventManager: eventManager,
          fireReferrerHideableImage: fireReferrerHideableImage,
          logger: componentLogger,
          lifecycle: lifecycle,
          sendEdgeNetworkRequest: sendEdgeNetworkRequest,
          handleError: injectHandleError({
            errorPrefix: "[".concat(instanceName, "] [").concat(componentName, "]"),
            logger: componentLogger
          }),
          createNamespacedStorage: createNamespacedStorage,
          apexDomain: apexDomain
        };
      }
    });
  };
  var handleError = injectHandleError({
    errorPrefix: "[".concat(instanceName, "]"),
    logger: logger
  });
  var executeCommand = injectExecuteCommand({
    logger: logger,
    configureCommand: configureCommand,
    setDebugCommand: setDebugCommand,
    handleError: handleError,
    validateCommandOptions: validateCommandOptions
  });
  return executeCommand;
};

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var _window2 = window,
  console$1 = _window2.console;
var createNamespacedStorage$1 = injectStorage(window);
var createInstance = function createInstance() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var eventOptionsValidator = boundObjectOf({
    name: boundString()["default"]("alloy"),
    monitors: boundArrayOf(boundObjectOf({}))["default"]([])
  }).noUnknownFields();
  var _eventOptionsValidato = eventOptionsValidator(options),
    name = _eventOptionsValidato.name,
    monitors = _eventOptionsValidato.monitors; // this is a function so that window.__alloyMonitors can be set or added to at any time
  // eslint-disable-next-line no-underscore-dangle
  var getMonitors = function getMonitors() {
    return (window.__alloyMonitors || []).concat(monitors);
  };
  var logController = createLogController({
    console: console$1,
    locationSearch: window.location.search,
    createLogger: createLogger,
    instanceName: name,
    createNamespacedStorage: createNamespacedStorage$1,
    getMonitors: getMonitors
  });
  var instance = createExecuteCommand({
    instanceName: name,
    logController: logController
  });
  logController.logger.logOnInstanceCreated({
    instance: instance
  });
  return instance;
};
exports.createInstance = createInstance;