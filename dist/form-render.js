/*
formBuilder - https://formbuilder.online/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":12}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":13}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":14}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":15}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":16}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":17}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":18}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":2,"../core-js/is-iterable":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _from = require("../core-js/array/from");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
},{"../core-js/array/from":1}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],12:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;
},{"../../modules/_core":33,"../../modules/es6.array.from":95,"../../modules/es6.string.iterator":100}],13:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":93,"../modules/es6.string.iterator":100,"../modules/web.dom.iterable":105}],14:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":94,"../modules/es6.string.iterator":100,"../modules/web.dom.iterable":105}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/_core').Map;
},{"../modules/_core":33,"../modules/es6.map":97,"../modules/es6.object.to-string":99,"../modules/es6.string.iterator":100,"../modules/es7.map.to-json":102,"../modules/web.dom.iterable":105}],16:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":33,"../../modules/es6.object.assign":98}],17:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":33,"../../modules/es6.object.to-string":99,"../../modules/es6.symbol":101,"../../modules/es7.symbol.async-iterator":103,"../../modules/es7.symbol.observable":104}],18:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":90,"../../modules/es6.string.iterator":100,"../../modules/web.dom.iterable":105}],19:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],20:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],21:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],22:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":52}],23:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":43}],24:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":82,"./_to-iobject":84,"./_to-length":85}],25:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx      = require('./_ctx')
  , IObject  = require('./_iobject')
  , toObject = require('./_to-object')
  , toLength = require('./_to-length')
  , asc      = require('./_array-species-create');
module.exports = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./_array-species-create":27,"./_ctx":35,"./_iobject":49,"./_to-length":85,"./_to-object":86}],26:[function(require,module,exports){
var isObject = require('./_is-object')
  , isArray  = require('./_is-array')
  , SPECIES  = require('./_wks')('species');

module.exports = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};
},{"./_is-array":51,"./_is-object":52,"./_wks":91}],27:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function(original, length){
  return new (speciesConstructor(original))(length);
};
},{"./_array-species-constructor":26}],28:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":29,"./_wks":91}],29:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],30:[function(require,module,exports){
'use strict';
var dP          = require('./_object-dp').f
  , create      = require('./_object-create')
  , redefineAll = require('./_redefine-all')
  , ctx         = require('./_ctx')
  , anInstance  = require('./_an-instance')
  , defined     = require('./_defined')
  , forOf       = require('./_for-of')
  , $iterDefine = require('./_iter-define')
  , step        = require('./_iter-step')
  , setSpecies  = require('./_set-species')
  , DESCRIPTORS = require('./_descriptors')
  , fastKey     = require('./_meta').fastKey
  , SIZE        = DESCRIPTORS ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)dP(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./_an-instance":21,"./_ctx":35,"./_defined":36,"./_descriptors":37,"./_for-of":43,"./_iter-define":55,"./_iter-step":57,"./_meta":61,"./_object-create":63,"./_object-dp":64,"./_redefine-all":75,"./_set-species":77}],31:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof')
  , from    = require('./_array-from-iterable');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};
},{"./_array-from-iterable":23,"./_classof":28}],32:[function(require,module,exports){
'use strict';
var global         = require('./_global')
  , $export        = require('./_export')
  , meta           = require('./_meta')
  , fails          = require('./_fails')
  , hide           = require('./_hide')
  , redefineAll    = require('./_redefine-all')
  , forOf          = require('./_for-of')
  , anInstance     = require('./_an-instance')
  , isObject       = require('./_is-object')
  , setToStringTag = require('./_set-to-string-tag')
  , dP             = require('./_object-dp').f
  , each           = require('./_array-methods')(0)
  , DESCRIPTORS    = require('./_descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function(target, iterable){
      anInstance(target, C, NAME, '_c');
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        anInstance(this, C, KEY);
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)dP(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./_an-instance":21,"./_array-methods":25,"./_descriptors":37,"./_export":41,"./_fails":42,"./_for-of":43,"./_global":44,"./_hide":46,"./_is-object":52,"./_meta":61,"./_object-dp":64,"./_redefine-all":75,"./_set-to-string-tag":78}],33:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],34:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp')
  , createDesc      = require('./_property-desc');

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};
},{"./_object-dp":64,"./_property-desc":74}],35:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":19}],36:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],37:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":42}],38:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":44,"./_is-object":52}],39:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],40:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":69,"./_object-keys":72,"./_object-pie":73}],41:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":33,"./_ctx":35,"./_global":44,"./_hide":46}],42:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],43:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":22,"./_ctx":35,"./_is-array-iter":50,"./_iter-call":53,"./_to-length":85,"./core.get-iterator-method":92}],44:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],45:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],46:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":37,"./_object-dp":64,"./_property-desc":74}],47:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":44}],48:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":37,"./_dom-create":38,"./_fails":42}],49:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":29}],50:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":58,"./_wks":91}],51:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":29}],52:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],53:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":22}],54:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":46,"./_object-create":63,"./_property-desc":74,"./_set-to-string-tag":78,"./_wks":91}],55:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":41,"./_has":45,"./_hide":46,"./_iter-create":54,"./_iterators":58,"./_library":60,"./_object-gpo":70,"./_redefine":76,"./_set-to-string-tag":78,"./_wks":91}],56:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":91}],57:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],58:[function(require,module,exports){
module.exports = {};
},{}],59:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":72,"./_to-iobject":84}],60:[function(require,module,exports){
module.exports = true;
},{}],61:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":42,"./_has":45,"./_is-object":52,"./_object-dp":64,"./_uid":88}],62:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":42,"./_iobject":49,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_to-object":86}],63:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":22,"./_dom-create":38,"./_enum-bug-keys":39,"./_html":47,"./_object-dps":65,"./_shared-key":79}],64:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":22,"./_descriptors":37,"./_ie8-dom-define":48,"./_to-primitive":87}],65:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":22,"./_descriptors":37,"./_object-dp":64,"./_object-keys":72}],66:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":37,"./_has":45,"./_ie8-dom-define":48,"./_object-pie":73,"./_property-desc":74,"./_to-iobject":84,"./_to-primitive":87}],67:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":68,"./_to-iobject":84}],68:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":71}],69:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],70:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":45,"./_shared-key":79,"./_to-object":86}],71:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":24,"./_has":45,"./_shared-key":79,"./_to-iobject":84}],72:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":39,"./_object-keys-internal":71}],73:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],74:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],75:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":46}],76:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":46}],77:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":33,"./_descriptors":37,"./_global":44,"./_object-dp":64,"./_wks":91}],78:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":45,"./_object-dp":64,"./_wks":91}],79:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":80,"./_uid":88}],80:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":44}],81:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":36,"./_to-integer":83}],82:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":83}],83:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],84:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":36,"./_iobject":49}],85:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":83}],86:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":36}],87:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":52}],88:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],89:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":33,"./_global":44,"./_library":60,"./_object-dp":64,"./_wks-ext":90}],90:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":91}],91:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":44,"./_shared":80,"./_uid":88}],92:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":28,"./_core":33,"./_iterators":58,"./_wks":91}],93:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":22,"./_core":33,"./core.get-iterator-method":92}],94:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":28,"./_core":33,"./_iterators":58,"./_wks":91}],95:[function(require,module,exports){
'use strict';
var ctx            = require('./_ctx')
  , $export        = require('./_export')
  , toObject       = require('./_to-object')
  , call           = require('./_iter-call')
  , isArrayIter    = require('./_is-array-iter')
  , toLength       = require('./_to-length')
  , createProperty = require('./_create-property')
  , getIterFn      = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":34,"./_ctx":35,"./_export":41,"./_is-array-iter":50,"./_iter-call":53,"./_iter-detect":56,"./_to-length":85,"./_to-object":86,"./core.get-iterator-method":92}],96:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":20,"./_iter-define":55,"./_iter-step":57,"./_iterators":58,"./_to-iobject":84}],97:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');

// 23.1 Map Objects
module.exports = require('./_collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./_collection":32,"./_collection-strong":30}],98:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":41,"./_object-assign":62}],99:[function(require,module,exports){

},{}],100:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":55,"./_string-at":81}],101:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":22,"./_descriptors":37,"./_enum-keys":40,"./_export":41,"./_fails":42,"./_global":44,"./_has":45,"./_hide":46,"./_is-array":51,"./_keyof":59,"./_library":60,"./_meta":61,"./_object-create":63,"./_object-dp":64,"./_object-gopd":66,"./_object-gopn":68,"./_object-gopn-ext":67,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_property-desc":74,"./_redefine":76,"./_set-to-string-tag":78,"./_shared":80,"./_to-iobject":84,"./_to-primitive":87,"./_uid":88,"./_wks":91,"./_wks-define":89,"./_wks-ext":90}],102:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./_export');

$export($export.P + $export.R, 'Map', {toJSON: require('./_collection-to-json')('Map')});
},{"./_collection-to-json":31,"./_export":41}],103:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":89}],104:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":89}],105:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":44,"./_hide":46,"./_iterators":58,"./_wks":91,"./es6.array.iterator":96}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {};

dom.optionFields = ['select', 'checkbox-group', 'radio-group', 'autocomplete'];
dom.optionFieldsRegEx = new RegExp('(' + dom.optionFields.join('|') + ')');

dom.defaultSubtypes = {
  text: ['text', 'password', 'email', 'color', 'tel'],
  header: ['h1', 'h2', 'h3'],
  button: ['button', 'submit', 'reset'],
  paragraph: ['p', 'address', 'blockquote', 'canvas', 'output'],
  textarea: ['textarea', 'quill']
};

dom.subtypes = dom.defaultSubtypes;

/**
   * Util to remove contents of DOM Object
   * @param  {Object} element
   * @return {Object}         element with its children removed
   */
dom.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

/**
 * Hide or show an Array or HTMLCollection of elements
 * @param  {Array}   elems
 * @param  {String}  term  match textContent to this term
 * @param  {Boolean} show  or hide elements
 * @return {Array}         filtered elements
 */
dom.filter = function (elems, term) {
  var show = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var filteredElems = [];
  var toggle = ['none', 'block'];

  if (show) {
    toggle = toggle.reverse();
  }

  for (var i = elems.length - 1; i >= 0; i--) {
    var txt = elems[i].textContent.toLowerCase();
    if (txt.indexOf(term.toLowerCase()) !== -1) {
      elems[i].style.display = toggle[0];
      filteredElems.push(elems[i]);
    } else {
      elems[i].style.display = toggle[1];
    }
  }

  return filteredElems;
};

exports.default = dom;

},{}],107:[function(require,module,exports){
'use strict';

/**
 * Form Builder events
 * @return {Object} various events to be trigger
 */
// function fbEvents(){
var events = {};

events.loaded = new Event('loaded');
events.viewData = new Event('viewData');
events.userDeclined = new Event('userDeclined');
events.modalClosed = new Event('modalClosed');
events.modalOpened = new Event('modalOpened');
events.formSaved = new Event('formSaved');
events.fieldAdded = new Event('fieldAdded');
events.fieldRemoved = new Event('fieldRemoved');
events.fieldRendered = new Event('fieldRendered');

//   return events;
// }

module.exports = events;

},{}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render the formBuilder XML into html
 * @param  {Object} options
 * @param  {Object} element html element where form will be rendered (optional)
 * @return {Object} formRender instance
 */
function FormRender(options, element) {
  var utils = require('./utils.js');
  var events = require('./events.js');

  var formRender = this;
  var defaults = {
    destroyTemplate: true, // @todo
    container: false,
    dataType: 'json',
    formData: false,
    messages: {
      formRendered: 'Form Rendered',
      noFormData: 'No form data.',
      other: 'Other',
      selectColor: 'Select Color'
    },
    onRender: function onRender() {},
    render: true,
    notify: {
      error: function error(message) {
        return console.error(message);
      },
      success: function success(message) {
        return console.log(message);
      },
      warning: function warning(message) {
        return console.warn(message);
      }
    }
  };

  var opts = $.extend(true, defaults, options);

  (function () {
    if (!opts.formData) {
      return false;
    }

    var setData = {
      xml: function xml(formData) {
        return utils.parseXML(formData);
      },
      json: function json(formData) {
        return window.JSON.parse(formData);
      }
    };

    opts.formData = setData[opts.dataType](opts.formData) || false;
  })();

  /**
   * Extend Element prototype to allow us to append fields
   *
   * @param  {Object} fields Node elements
   */
  Element.prototype.appendFormFields = function (fields) {
    var element = this;
    fields.forEach(function (field) {
      element.appendChild(field);
      field.dispatchEvent(events.fieldRendered);
    });
  };

  /**
   * Extend Element prototype to remove content
   */
  Element.prototype.emptyContainer = function () {
    var element = this;
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  };

  var runCallbacks = function runCallbacks() {
    if (opts.onRender) {
      opts.onRender();
    }
  };

  var santizeField = function santizeField(field) {
    var sanitizedField = (0, _assign2.default)({}, field);
    sanitizedField.className = field.className || field.class || null;
    delete sanitizedField.class;

    if (field.values) {
      field.values = field.values.map(function (option) {
        return utils.trimObj(option);
      });
    }

    return utils.trimObj(sanitizedField);
  };

  var exportMarkup = function exportMarkup(fields) {
    return fields.map(function (elem) {
      return elem.innerHTML;
    }).join('');
  };

  // Begin the core plugin
  var rendered = [];

  // generate field markup if we have fields
  if (opts.formData) {
    for (var i = 0; i < opts.formData.length; i++) {
      var sanitizedField = santizeField(opts.formData[i]);
      rendered.push(utils.getTemplate(sanitizedField));
    }

    if (opts.render) {
      if (opts.container) {
        var renderedFormWrap = utils.markup('div', rendered, {
          className: 'rendered-form'
        });
        if (opts.container instanceof jQuery) {
          opts.container = opts.container[0];
        }
        opts.container.emptyContainer();
        opts.container.appendChild(renderedFormWrap);
      } else if (element) {
        element.emptyContainer();
        element.appendFormFields(rendered);
      }

      runCallbacks();
      opts.notify.success(opts.messages.formRendered);
    } else {
      formRender.markup = exportMarkup(rendered);
    }
  } else {
    var noData = utils.markup('div', opts.messages.noFormData, {
      className: 'no-form-data'
    });
    rendered.push(noData);
    opts.notify.error(opts.messages.noFormData);
  }

  return formRender;
}

(function ($) {
  $.fn.formRender = function (options) {
    var elems = this;
    elems.each(function (i) {
      var formRender = new FormRender(options, elems[i]);
      elems[i].dataset.formRender = formRender;
      return formRender;
    });
  };
})(jQuery);

window.FormRender = FormRender;

exports.default = FormRender;

},{"./events.js":107,"./utils.js":109,"babel-runtime/core-js/object/assign":5}],109:[function(require,module,exports){
'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cross file utilities for working with arrays,
 * sorting and other fun stuff
 * @return {Object} fbUtils
 */
// function utils() {
var fbUtils = {};
window.fbLoaded = {
  js: [],
  css: []
};
window.fbEditors = {
  quill: {},
  tinymce: {}
};

// cleaner syntax for testing indexOf element
fbUtils.inArray = function (needle, haystack) {
  return haystack.indexOf(needle) !== -1;
};

/**
 * Remove null or undefined values
 * @param  {Object} attrs {attrName: attrValue}
 * @return {Object}       Object trimmed of null or undefined values
 */
fbUtils.trimObj = function (attrs) {
  var xmlRemove = [null, undefined, '', false, 'false'];
  for (var attr in attrs) {
    if (fbUtils.inArray(attrs[attr], xmlRemove)) {
      delete attrs[attr];
    } else if (Array.isArray(attrs[attr])) {
      if (!attrs[attr].length) {
        delete attrs[attr];
      }
    }
  }

  return attrs;
};

/**
 * Test if attribute is a valid HTML attribute
 * @param  {String} attr
 * @return {Boolean}
 */
fbUtils.validAttr = function (attr) {
  var invalid = ['values', 'enableOther', 'other', 'label',
  // 'style',
  'subtype'];
  return !fbUtils.inArray(attr, invalid);
};

/**
 * Convert an attrs object into a string
 *
 * @param  {Object} attrs object of attributes for markup
 * @return {string}
 */
fbUtils.attrString = function (attrs) {
  var attributes = [];

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr) && fbUtils.validAttr(attr)) {
      attr = fbUtils.safeAttr(attr, attrs[attr]);
      attributes.push(attr.name + attr.value);
    }
  }
  return attributes.join(' ');
};

/**
 * Convert attributes to markup safe strings
 * @param  {String} name  attribute name
 * @param  {String} value attribute value
 * @return {Object}       {attrName: attrValue}
 */
fbUtils.safeAttr = function (name, value) {
  name = fbUtils.safeAttrName(name);
  var valString = void 0;

  if (value) {
    if (Array.isArray(value)) {
      valString = fbUtils.escapeAttr(value.join(' '));
    } else {
      if (typeof value === 'boolean') {
        value = value.toString();
      }
      valString = fbUtils.escapeAttr(value.replace(',', ' ').trim());
    }
  }

  value = value ? '="' + valString + '"' : '';
  return {
    name: name,
    value: value
  };
};

fbUtils.safeAttrName = function (name) {
  var safeAttr = {
    className: 'class'
  };

  return safeAttr[name] || fbUtils.hyphenCase(name);
};

/**
 * Convert strings into lowercase-hyphen
 *
 * @param  {String} str
 * @return {String}
 */
fbUtils.hyphenCase = function (str) {
  str = str.replace(/[^\w\s\-]/gi, '');
  str = str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });

  return str.replace(/\s/g, '-').replace(/^-+/g, '');
};

/**
 * convert a hyphenated string to camelCase
 * @param  {String} str
 * @return {String}
 */
fbUtils.camelCase = function (str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
};

/**
 * Determine content type
 * @param  {Node | String | Array | Object} content
 * @return {String}                         contentType for mapping
 */
fbUtils.contentType = function (content) {
  var type = typeof content === 'undefined' ? 'undefined' : (0, _typeof3.default)(content);
  if (content instanceof Node || content instanceof HTMLElement) {
    type = 'node';
  } else if (Array.isArray(content)) {
    type = 'array';
  }

  return type;
};

/**
 * Bind events to an element
 * @param  {Object} element DOM element
 * @param  {Object} events  object full of events eg. {click: evt => callback}
 * @return {void}
 */
fbUtils.bindEvents = function (element, events) {
  if (events) {
    var _loop = function _loop(event) {
      if (events.hasOwnProperty(event)) {
        element.addEventListener(event, function (evt) {
          return events[event](evt);
        });
      }
    };

    for (var event in events) {
      _loop(event);
    }
  }
};

/**
 * Generate a unique name attribute
 * @param  {Object} field
 * @return {String}       name
 */
fbUtils.nameAttr = function (field) {
  var epoch = new Date().getTime();
  var prefix = field.attrs.type || fbUtils.hyphenCase(field.label);
  return prefix + '-' + epoch;
};

/**
 * Generate markup wrapper where needed
 *
 * @param  {string}              tag
 * @param  {String|Array|Object} content we wrap this
 * @param  {Object}              attrs
 * @return {Object} DOM Element
 */
fbUtils.markup = function (tag) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var contentType = fbUtils.contentType(content);
  var events = attributes.events,
      attrs = (0, _objectWithoutProperties3.default)(attributes, ['events']);

  var field = document.createElement(tag);

  var appendContent = {
    string: function string(content) {
      field.innerHTML += content;
    },
    object: function object(config) {
      var tag = config.tag,
          content = config.content,
          data = (0, _objectWithoutProperties3.default)(config, ['tag', 'content']);

      return field.appendChild(fbUtils.markup(tag, content, data));
    },
    node: function node(content) {
      return field.appendChild(content);
    },
    array: function array(content) {
      for (var i = 0; i < content.length; i++) {
        contentType = fbUtils.contentType(content[i]);
        appendContent[contentType](content[i]);
      }
    },
    function: function _function(content) {
      content = content();
      contentType = fbUtils.contentType(content);
      appendContent[contentType](content);
    },
    undefined: function undefined() {
      // console.error(tag, content, attributes);
    }
  };

  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      var name = fbUtils.safeAttrName(attr);
      field.setAttribute(name, attrs[attr]);
    }
  }

  if (content) {
    appendContent[contentType].call(this, content);
  }

  fbUtils.bindEvents(field, events);

  return field;
};
var m = fbUtils.markup;

/**
 * Convert html element attributes to key/value object
 * @param  {Object} elem DOM element
 * @return {Object} ex: {attrName: attrValue}
 */
fbUtils.parseAttrs = function (elem) {
  var attrs = elem.attributes;
  var data = {};
  fbUtils.forEach(attrs, function (attr) {
    var attrVal = attrs[attr].value;
    if (attrVal.match(/false|true/g)) {
      attrVal = attrVal === 'true';
    } else if (attrVal.match(/undefined/g)) {
      attrVal = undefined;
    }

    if (attrVal) {
      data[attrs[attr].name] = attrVal;
    }
  });

  return data;
};

/**
 * Convert field options to optionData
 * @param  {Object} field  DOM element
 * @return {Array}         optionData array
 */
fbUtils.parseOptions = function (field) {
  var options = field.getElementsByTagName('option');
  var optionData = {};
  var data = [];

  if (options.length) {
    for (var i = 0; i < options.length; i++) {
      optionData = fbUtils.parseAttrs(options[i]);
      optionData.label = options[i].textContent;
      data.push(optionData);
    }
  }

  return data;
};

/**
 * Parse XML formData
 * @param  {String} xmlString
 * @return {Array}            formData array
 */
fbUtils.parseXML = function (xmlString) {
  var parser = new window.DOMParser();
  var xml = parser.parseFromString(xmlString, 'text/xml');
  var formData = [];

  if (xml) {
    var fields = xml.getElementsByTagName('field');
    for (var i = 0; i < fields.length; i++) {
      var fieldData = fbUtils.parseAttrs(fields[i]);

      if (fields[i].children && fields[i].children.length) {
        fieldData.values = fbUtils.parseOptions(fields[i]);
      }

      formData.push(fieldData);
    }
  }

  return formData;
};

/**
 * Converts escaped HTML into usable HTML
 * @param  {String} html escaped HTML
 * @return {String}      parsed HTML
 */
fbUtils.parsedHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.innerHTML = html;
  return escapeElement.textContent;
};

/**
 * Escape markup so it can be displayed rather than rendered
 * @param  {String} html markup
 * @return {String}      escaped html
 */
fbUtils.escapeHtml = function (html) {
  var escapeElement = document.createElement('textarea');
  escapeElement.textContent = html;
  return escapeElement.innerHTML;
};

// Escape an attribute
fbUtils.escapeAttr = function (str) {
  var match = {
    '"': '&quot;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  var replaceTag = function replaceTag(tag) {
    return match[tag] || tag;
  };

  return typeof str === 'string' ? str.replace(/["&<>]/g, replaceTag) : str;
};

// Escape attributes
fbUtils.escapeAttrs = function (attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) {
      attrs[attr] = fbUtils.escapeAttr(attrs[attr]);
    }
  }

  return attrs;
};

// forEach that can be used on nodeList
fbUtils.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * Remove duplicates from an array of elements
 * @param  {Array} array  array with possible duplicates
 * @return {Array}        array with only unique values
 */
fbUtils.unique = function (array) {
  return array.filter(function (elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
};

fbUtils.makeLabel = function (data) {
  var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var labelText = fbUtils.parsedHtml(label);
  var labelContents = [labelText];

  if (data.hasOwnProperty('required')) {
    labelContents.push(m('span', '*', { className: 'required' }));
  }

  if (data.type !== 'hidden') {
    if (description) {
      labelContents.push(m('span', '?', {
        className: 'tooltip-element',
        tooltip: description
      }));
    }
  }

  return m('label', labelContents, {
    for: data.id,
    className: 'fb-' + data.type + '-label'
  });
};

fbUtils.templateMap = function (templates, type, fallback) {
  var template = void 0;
  var templateMap = new _map2.default(templates);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(templateMap), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref3 = _step.value;

      var _ref2 = (0, _slicedToArray3.default)(_ref3, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      if (Array.isArray(key)) {
        if (fbUtils.inArray(type, key)) {
          template = value;
          break;
        }
      } else if (type === key) {
        template = value;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!template) {
    template = fallback;
  }

  return template();
};

fbUtils.autocompleteTemplate = function (fieldData) {
  var values = fieldData.values,
      type = fieldData.type,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'type']);

  var keyboardNav = function keyboardNav(e) {
    var list = e.target.nextSibling.nextSibling;
    var activeOption = list.getElementsByClassName('active-option')[0];
    var keyCodeMapVals = [
    // up
    [38, function () {
      if (activeOption) {
        if (activeOption.previousSibling) {
          activeOption.classList.remove('active-option');
          activeOption = activeOption.previousSibling;
          activeOption.classList.add('active-option');
        }
      }
    }],
    // down
    [40, function () {
      if (activeOption) {
        if (activeOption.nextSibling) {
          activeOption.classList.remove('active-option');
          activeOption = activeOption.nextSibling;
          activeOption.classList.add('active-option');
        }
      } else {
        activeOption = list.firstChild;
        activeOption.classList.add('active-option');
      }
    }], [13, function () {
      if (activeOption) {
        e.target.value = activeOption.innerHTML;
        if (list.style.display === 'none') {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      }
    }]];
    var keyCodeMap = new _map2.default(keyCodeMapVals);

    var direction = keyCodeMap.get(e.keyCode);
    if (!direction) {
      direction = function direction() {
        return false;
      };
    }

    return direction();
  };
  var fauxEvents = {
    focus: function focus(evt) {
      evt.target.addEventListener('keydown', keyboardNav);
      evt.target.nextSibling.nextSibling.style.display = 'block';
    },
    blur: function blur(evt) {
      evt.target.removeEventListener('keydown', keyboardNav);
      setTimeout(function () {
        evt.target.nextSibling.nextSibling.style.display = 'none';
      }, 200);
    },
    input: function input(evt) {
      var list = evt.target.nextSibling.nextSibling;
      _dom2.default.filter(list.querySelectorAll('li'), evt.target.value);
      if (!evt.target.value) {
        list.style.display = 'none';
      } else {
        list.style.display = 'block';
      }
    }
  };
  var fauxAttrs = (0, _assign2.default)({}, data, {
    id: data.id + '-input',
    events: fauxEvents
  });
  var hiddenAttrs = (0, _assign2.default)({}, data, { type: 'hidden' });
  delete fauxAttrs.name;
  var field = [m('input', null, fauxAttrs), m('input', null, hiddenAttrs)];

  var options = values.map(function (optionData) {
    var label = optionData.label;
    var config = {
      events: {
        click: function click(evt) {
          var list = evt.target.parentElement;
          var field = list.previousSibling.previousSibling;
          console.log(list, field);
          field.value = optionData.label;
          field.previousSibling.value = optionData.value;
          list.style.display = 'none';
        }
      },
      value: optionData.value
    };
    return m('li', label, config);
  });

  field.push(m('ul', options, { id: data.id + '-list', className: 'fb-' + type + '-list' }));

  var onRender = function onRender(evt) {};

  return { field: field, onRender: onRender };
};

/**
 * Generate DOM elements for select, checkbox-group and radio-group.
 * @param  {Object} fieldData
 * @return {Object}           DOM elements
 */
fbUtils.selectTemplate = function (fieldData) {
  var options = [];
  var values = fieldData.values,
      placeholder = fieldData.placeholder,
      type = fieldData.type,
      inline = fieldData.inline,
      other = fieldData.other,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['values', 'placeholder', 'type', 'inline', 'other']);

  var optionType = type.replace('-group', '');
  var isSelect = type === 'select';

  if (values) {
    if (placeholder && isSelect) {
      options.push(m('option', placeholder, {
        disabled: null,
        selected: null
      }));
    }

    for (var i = 0; i < values.length; i++) {
      var _values$i = values[i],
          _values$i$label = _values$i.label,
          label = _values$i$label === undefined ? '' : _values$i$label,
          optionAttrs = (0, _objectWithoutProperties3.default)(_values$i, ['label']);


      optionAttrs.id = data.id + '-' + i;
      if (!optionAttrs.selected || placeholder) {
        delete optionAttrs.selected;
      }

      if (isSelect) {
        var o = m('option', document.createTextNode(label), optionAttrs);
        options.push(o);
      } else {
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }
        optionAttrs.type = optionType;
        if (optionAttrs.selected) {
          optionAttrs.checked = null;
          delete optionAttrs.selected;
        }
        var input = m('input', null, (0, _assign2.default)({}, data, optionAttrs));
        var inputLabel = m('label', [input, label], { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      }
    }

    if (!isSelect && other) {
      (function () {
        var otherOptionAttrs = {
          id: data.id + '-other',
          className: data.className + ' other-option',
          events: {
            click: function click() {
              return fbUtils.otherOptionCB(otherOptionAttrs.id);
            }
          }
        };
        // let label = mi18n.current.other;
        var wrapperClass = optionType;
        if (inline) {
          wrapperClass += '-inline';
        }

        var optionAttrs = (0, _assign2.default)({}, data, otherOptionAttrs);
        optionAttrs.type = optionType;

        var otherValAttrs = {
          type: 'text',
          name: data.name,
          id: otherOptionAttrs.id + '-value',
          className: 'other-val'
        };
        var otherInputs = [m('input', null, optionAttrs), document.createTextNode('Other'), m('input', null, otherValAttrs)];
        var inputLabel = m('label', otherInputs, { for: optionAttrs.id });
        var wrapper = m('div', inputLabel, { className: wrapperClass });
        options.push(wrapper);
      })();
    }
  }

  var templates = [['select', function () {
    return m(optionType, options, data);
  }], [['checkbox-group', 'radio-group'], function () {
    return m('div', options, { className: type });
  }]];

  return fbUtils.templateMap(templates, type);
};

fbUtils.defaultField = function (fieldData) {
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      type = fieldData.type,
      id = fieldData.id,
      isPreview = fieldData.isPreview,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'type', 'id', 'isPreview']);

  if (id) {
    if (isPreview) {
      data.name = data.name + '-preview';
    }
    data.id = data.name;
  }
  if (description) {
    data.title = description;
  }
  if (subtype) {
    type = subtype;
  }

  var field = {
    field: m(type, fbUtils.parsedHtml(label), data),
    onRender: fbUtils.noop
  };

  return function () {
    return field;
  };
};

/**
 * Loads an array of scripts using jQuery's `getScript`
 * @param  {Array|String}  scriptScr    scripts
 * @param  {String} path   optional to load form
 * @return {Promise}       a promise
 */
fbUtils.getScripts = function (scriptScr, path) {
  var $ = jQuery;
  var _arr = [];

  if (!Array.isArray(scriptScr)) {
    scriptScr = [scriptScr];
  }

  if (!fbUtils.isCached(scriptScr)) {
    _arr = $.map(scriptScr, function (src) {
      var options = {
        dataType: 'script',
        cache: true,
        url: (path || '') + src
      };
      return $.ajax(options).done(function () {
        return window.fbLoaded.js.push(src);
      });
    });
  }

  _arr.push($.Deferred(function (deferred) {
    return $(deferred.resolve);
  }));

  return $.when.apply($, (0, _toConsumableArray3.default)(_arr));
};

/**
 * Checks if remote resource is already loaded
 * @param  {String|Array} src  url of remote script or css
 * @param  {String}       type       'js' or 'css'
 * @return {Boolean}      isCached
 */
fbUtils.isCached = function (src) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'js';

  var isCached = false;
  var cache = window.fbLoaded[type];
  if (Array.isArray(src)) {
    isCached = src.every(function (s) {
      return fbUtils.inArray(s, cache);
    });
  } else {
    isCached = fbUtils.inArray(src, cache);
  }
  return isCached;
};

/**
 * Appends stylesheets to the head
 * @param  {Array} scriptScr
 * @param  {String} path
 * @return {void}
 */
fbUtils.getStyles = function (scriptScr, path) {
  if (fbUtils.isCached(scriptScr, 'css')) {
    return;
  }
  var appendStyle = function appendStyle(href) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    window.fbLoaded.css.push(href);
  };
  scriptScr.forEach(function (src) {
    return appendStyle((path || '') + src);
  });
};

fbUtils.longTextTemplate = function (data) {
  var _data$value = data.value,
      value = _data$value === undefined ? '' : _data$value,
      attrs = (0, _objectWithoutProperties3.default)(data, ['value']);

  var template = {
    field: m('textarea', fbUtils.parsedHtml(value), attrs)
  };
  var editors = {
    tinymce: {
      js: ['//cdn.tinymce.com/4/tinymce.min.js'],
      onRender: function onRender(evt) {
        if (window.tinymce.editors[data.id]) {
          window.tinymce.editors[data.id].remove();
        }
        window.tinymce.init({
          target: template.field,
          height: 250,
          plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table contextmenu paste code'],
          toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
        });
      }
    },
    quill: {
      js: ['//cdn.quilljs.com/1.1.3/quill.js'],
      css: ['//cdn.quilljs.com/1.1.3/quill.snow.css'],
      onRender: function onRender(evt) {
        var Delta = window.Quill.import('delta');
        window.fbEditors.quill[data.id] = {};
        var editor = window.fbEditors.quill[data.id];
        editor.instance = new window.Quill(template.field, {
          modules: {
            toolbar: [[{ 'header': [1, 2, false] }], ['bold', 'italic', 'underline'], ['code-block']]
          },
          placeholder: attrs.placeholder || '',
          theme: 'snow'
        });
        editor.data = new Delta();
        if (value) {
          editor.instance.setContents(window.JSON.parse(fbUtils.parsedHtml(value)));
        }
        editor.instance.on('text-change', function (delta) {
          editor.data = editor.data.compose(delta);
        });
      }
    }
  };

  if (data.type !== 'textarea') {
    template.onRender = editors[data.type].onRender;
  }
  if (data.type === 'quill') {
    template.field = m('div', null, attrs);
  }

  var onRender = function onRender() {
    if (editors[data.type]) {
      document.removeEventListener('fieldRendered', onRender);

      if (editors[data.type].css) {
        fbUtils.getStyles(editors[data.type].css);
      }
      if (editors[data.type].js && !fbUtils.isCached(editors[data.type].js)) {
        fbUtils.getScripts(editors[data.type].js).done(template.onRender);
      } else {
        template.onRender();
      }
    }
  };

  return { field: template.field, onRender: onRender };
};

fbUtils.getTemplate = function (fieldData) {
  var isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var label = fieldData.label,
      description = fieldData.description,
      subtype = fieldData.subtype,
      labelPosition = fieldData.labelPosition,
      data = (0, _objectWithoutProperties3.default)(fieldData, ['label', 'description', 'subtype', 'labelPosition']);

  var template = void 0;
  var field = void 0;

  if (isPreview) {
    data.name = data.name + '-preview';
  }
  data.id = data.name;

  if (subtype) {
    data.type = subtype;
  }

  if (data.multiple || data.type === 'checkbox-group') {
    data.name = data.name + '[]';
  }

  if (data.required) {
    data.required = null;
    data['aria-required'] = 'true';
  }

  var fieldLabel = fbUtils.makeLabel(data, label, description);

  var templates = [[['autocomplete'], function () {
    var autocomplete = fbUtils.autocompleteTemplate(data);
    var template = {
      field: [fieldLabel, autocomplete.field],
      onRender: autocomplete.onRender
    };
    return template;
  }], [_dom2.default.subtypes.text.concat(['number', 'file']), function () {
    var template = {
      field: [fieldLabel, m('input', null, data)],
      onRender: fbUtils.noop
    };
    return template;
  }], [_dom2.default.subtypes.button, function () {
    var template = {
      field: m('button', label, data),
      onRender: fbUtils.noop
    };
    return template;
  }], [['select', 'checkbox-group', 'radio-group'], function () {
    var field = fbUtils.selectTemplate(data);
    var template = {
      field: [fieldLabel, field],
      onRender: fbUtils.noop
    };
    return template;
  }], ['checkbox', function () {
    var field = [m('input', null, data)];
    if (labelPosition === 'beforeInput') {
      field.unshift(fieldLabel, ' ');
    } else {
      field.push(' ', fieldLabel);
    }
    var template = {
      field: field,
      onRender: function onRender() {
        if (data.toggle) {
          $(document.getElementById(data.id)).kcToggle();
        }
      }
    };
    return template;
  }], [['textarea', 'tinymce', 'quill'], function () {
    var field = fbUtils.longTextTemplate(data);
    var template = {
      field: [fieldLabel, field.field],
      onRender: field.onRender
    };
    return template;
  }]];

  template = fbUtils.templateMap(templates, data.type, fbUtils.defaultField(fieldData) // fallback
  );

  if (data.type !== 'hidden') {
    var wrapperAttrs = {};
    if (data.id) {
      wrapperAttrs.className = 'fb-' + data.type + ' form-group field-' + data.id;
    }
    field = fbUtils.markup('div', template.field, wrapperAttrs);
  } else {
    field = fbUtils.markup('input', null, data);
  }

  field.addEventListener('fieldRendered', template.onRender);

  return field;
};

/**
 * Callback for other option.
 * Toggles the hidden text area for "other" option.
 * @param  {String} otherId id of the "other" option input
 */
fbUtils.otherOptionCB = function (otherId) {
  var otherInput = document.getElementById(otherId);
  var otherInputValue = document.getElementById(otherId + '-value');

  if (otherInput.checked) {
    otherInputValue.style.display = 'inline-block';
  } else {
    otherInputValue.style.display = 'none';
  }
};

/**
 * Capitalizes a string
 * @param  {String} str uncapitalized string
 * @return {String} str capitalized string
 */
fbUtils.capitalize = function (str) {
  return str.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
};

fbUtils.merge = function (obj1, obj2) {
  var mergedObj = (0, _assign2.default)({}, obj1, obj2);
  for (var prop in obj2) {
    if (mergedObj.hasOwnProperty(prop)) {
      if (Array.isArray(obj2[prop])) {
        mergedObj[prop] = Array.isArray(obj1[prop]) ? fbUtils.unique(obj1[prop].concat(obj2[prop])) : obj2[prop];
      } else if ((0, _typeof3.default)(obj2[prop]) === 'object') {
        mergedObj[prop] = fbUtils.merge(obj1[prop], obj2[prop]);
      } else {
        mergedObj[prop] = obj2[prop];
      }
    }
  }
  return mergedObj;
};

/**
 * Util to remove contents of DOM Object
 * @param  {Object} element
 * @return {Object}         element with its children removed
 */
fbUtils.empty = function (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element;
};

fbUtils.noop = function () {
  return null;
};

module.exports = fbUtils;

},{"./dom":106,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/core-js/object/assign":5,"babel-runtime/helpers/objectWithoutProperties":8,"babel-runtime/helpers/slicedToArray":9,"babel-runtime/helpers/toConsumableArray":10,"babel-runtime/helpers/typeof":11}]},{},[108])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwic3JjL2pzL2RvbS5qcyIsInNyYy9qcy9ldmVudHMuanMiLCJzcmMvanMvZm9ybS1yZW5kZXIuanMiLCJzcmMvanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QU0sT0FBTixDQUFjLEtBQUssSUFBTCxDQUFkLElBQTRCLFFBQVEsTUFBUixDQUFlLEtBQUssSUFBTCxFQUFXLE1BQVgsQ0FBa0IsS0FBSyxJQUFMLENBQWxCLENBQWYsQ0FBNUIsR0FBNEUsS0FBSyxJQUFMLENBQTlGO0FBQ0QsT0FGRCxNQUVPLElBQUksc0JBQU8sS0FBSyxJQUFMLENBQVAsTUFBc0IsUUFBMUIsRUFBb0M7QUFDekMsa0JBQVUsSUFBVixJQUFrQixRQUFRLEtBQVIsQ0FBYyxLQUFLLElBQUwsQ0FBZCxFQUEwQixLQUFLLElBQUwsQ0FBMUIsQ0FBbEI7QUFDRCxPQUZNLE1BRUE7QUFDTCxrQkFBVSxJQUFWLElBQWtCLEtBQUssSUFBTCxDQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU8sU0FBUDtBQUNELENBZEQ7O0FBZ0JBOzs7OztBQUtBLFFBQVEsS0FBUixHQUFnQixtQkFBVztBQUN6QixTQUFPLFFBQVEsVUFBZixFQUEyQjtBQUN6QixZQUFRLFdBQVIsQ0FBb0IsUUFBUSxVQUE1QjtBQUNEO0FBQ0QsU0FBTyxPQUFQO0FBQ0QsQ0FMRDs7QUFPQSxRQUFRLElBQVIsR0FBZTtBQUFBLFNBQU0sSUFBTjtBQUFBLENBQWY7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyAgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgaW5kZXgsIHZhbHVlKXtcbiAgaWYoaW5kZXggaW4gb2JqZWN0KSRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59OyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCJjb25zdCBkb20gPSB7fTtcblxuZG9tLm9wdGlvbkZpZWxkcyA9IFtcbidzZWxlY3QnLFxuJ2NoZWNrYm94LWdyb3VwJyxcbidyYWRpby1ncm91cCcsXG4nYXV0b2NvbXBsZXRlJ1xuXTtcbmRvbS5vcHRpb25GaWVsZHNSZWdFeCA9IG5ldyBSZWdFeHAoYCgke2RvbS5vcHRpb25GaWVsZHMuam9pbignfCcpfSlgKTtcblxuZG9tLmRlZmF1bHRTdWJ0eXBlcyA9IHtcbiAgdGV4dDogWyd0ZXh0JywgJ3Bhc3N3b3JkJywgJ2VtYWlsJywgJ2NvbG9yJywgJ3RlbCddLFxuICBoZWFkZXI6IFsnaDEnLCAnaDInLCAnaDMnXSxcbiAgYnV0dG9uOiBbJ2J1dHRvbicsICdzdWJtaXQnLCAncmVzZXQnXSxcbiAgcGFyYWdyYXBoOiBbJ3AnLCAnYWRkcmVzcycsICdibG9ja3F1b3RlJywgJ2NhbnZhcycsICdvdXRwdXQnXSxcbiAgdGV4dGFyZWE6IFsndGV4dGFyZWEnLCAncXVpbGwnXVxufTtcblxuZG9tLnN1YnR5cGVzID0gZG9tLmRlZmF1bHRTdWJ0eXBlcztcblxuLyoqXG4gICAqIFV0aWwgdG8gcmVtb3ZlIGNvbnRlbnRzIG9mIERPTSBPYmplY3RcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBlbGVtZW50IHdpdGggaXRzIGNoaWxkcmVuIHJlbW92ZWRcbiAgICovXG5kb20uZW1wdHkgPSAoZWxlbWVudCkgPT4ge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBIaWRlIG9yIHNob3cgYW4gQXJyYXkgb3IgSFRNTENvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAqIEBwYXJhbSAge0FycmF5fSAgIGVsZW1zXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICB0ZXJtICBtYXRjaCB0ZXh0Q29udGVudCB0byB0aGlzIHRlcm1cbiAqIEBwYXJhbSAge0Jvb2xlYW59IHNob3cgIG9yIGhpZGUgZWxlbWVudHNcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIGZpbHRlcmVkIGVsZW1lbnRzXG4gKi9cbmRvbS5maWx0ZXIgPSAoZWxlbXMsIHRlcm0sIHNob3cgPSB0cnVlKSA9PiB7XG4gIGxldCBmaWx0ZXJlZEVsZW1zID0gW107XG4gIGxldCB0b2dnbGUgPSBbJ25vbmUnLCAnYmxvY2snXTtcblxuICBpZiAoc2hvdykge1xuICAgIHRvZ2dsZSA9IHRvZ2dsZS5yZXZlcnNlKCk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gZWxlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgdHh0ID0gZWxlbXNbaV0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHh0LmluZGV4T2YodGVybS50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSB0b2dnbGVbMF07XG4gICAgICBmaWx0ZXJlZEVsZW1zLnB1c2goZWxlbXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gdG9nZ2xlWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEVsZW1zO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiLyoqXG4gKiBGb3JtIEJ1aWxkZXIgZXZlbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHZhcmlvdXMgZXZlbnRzIHRvIGJlIHRyaWdnZXJcbiAqL1xuLy8gZnVuY3Rpb24gZmJFdmVudHMoKXtcbiAgY29uc3QgZXZlbnRzID0ge307XG5cbiAgZXZlbnRzLmxvYWRlZCA9IG5ldyBFdmVudCgnbG9hZGVkJyk7XG4gIGV2ZW50cy52aWV3RGF0YSA9IG5ldyBFdmVudCgndmlld0RhdGEnKTtcbiAgZXZlbnRzLnVzZXJEZWNsaW5lZCA9IG5ldyBFdmVudCgndXNlckRlY2xpbmVkJyk7XG4gIGV2ZW50cy5tb2RhbENsb3NlZCA9IG5ldyBFdmVudCgnbW9kYWxDbG9zZWQnKTtcbiAgZXZlbnRzLm1vZGFsT3BlbmVkID0gbmV3IEV2ZW50KCdtb2RhbE9wZW5lZCcpO1xuICBldmVudHMuZm9ybVNhdmVkID0gbmV3IEV2ZW50KCdmb3JtU2F2ZWQnKTtcbiAgZXZlbnRzLmZpZWxkQWRkZWQgPSBuZXcgRXZlbnQoJ2ZpZWxkQWRkZWQnKTtcbiAgZXZlbnRzLmZpZWxkUmVtb3ZlZCA9IG5ldyBFdmVudCgnZmllbGRSZW1vdmVkJyk7XG4gIGV2ZW50cy5maWVsZFJlbmRlcmVkID0gbmV3IEV2ZW50KCdmaWVsZFJlbmRlcmVkJyk7XG5cbi8vICAgcmV0dXJuIGV2ZW50cztcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudHM7XG4iLCIvKipcbiAqIHJlbmRlciB0aGUgZm9ybUJ1aWxkZXIgWE1MIGludG8gaHRtbFxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnQgaHRtbCBlbGVtZW50IHdoZXJlIGZvcm0gd2lsbCBiZSByZW5kZXJlZCAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZvcm1SZW5kZXIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gRm9ybVJlbmRlcihvcHRpb25zLCBlbGVtZW50KSB7XG4gIGNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuICBjb25zdCBldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cy5qcycpO1xuXG4gIGNvbnN0IGZvcm1SZW5kZXIgPSB0aGlzO1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgIGRlc3Ryb3lUZW1wbGF0ZTogdHJ1ZSwgLy8gQHRvZG9cbiAgICAgIGNvbnRhaW5lcjogZmFsc2UsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZm9ybURhdGE6IGZhbHNlLFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgZm9ybVJlbmRlcmVkOiAnRm9ybSBSZW5kZXJlZCcsXG4gICAgICAgIG5vRm9ybURhdGE6ICdObyBmb3JtIGRhdGEuJyxcbiAgICAgICAgb3RoZXI6ICdPdGhlcicsXG4gICAgICAgIHNlbGVjdENvbG9yOiAnU2VsZWN0IENvbG9yJ1xuICAgICAgfSxcbiAgICAgIG9uUmVuZGVyOiAoKSA9PiB7fSxcbiAgICAgIHJlbmRlcjogdHJ1ZSxcbiAgICAgIG5vdGlmeToge1xuICAgICAgICBlcnJvcjogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgbGV0IG9wdHMgPSAkLmV4dGVuZCh0cnVlLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICghb3B0cy5mb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzZXREYXRhID0ge1xuICAgICAgeG1sOiBmb3JtRGF0YSA9PiB1dGlscy5wYXJzZVhNTChmb3JtRGF0YSksXG4gICAgICBqc29uOiBmb3JtRGF0YSA9PiB3aW5kb3cuSlNPTi5wYXJzZShmb3JtRGF0YSlcbiAgICB9O1xuXG4gICAgb3B0cy5mb3JtRGF0YSA9IHNldERhdGFbb3B0cy5kYXRhVHlwZV0ob3B0cy5mb3JtRGF0YSkgfHwgZmFsc2U7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIEV4dGVuZCBFbGVtZW50IHByb3RvdHlwZSB0byBhbGxvdyB1cyB0byBhcHBlbmQgZmllbGRzXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGRzIE5vZGUgZWxlbWVudHNcbiAgICovXG4gIEVsZW1lbnQucHJvdG90eXBlLmFwcGVuZEZvcm1GaWVsZHMgPSBmdW5jdGlvbihmaWVsZHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXM7XG4gICAgZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KGV2ZW50cy5maWVsZFJlbmRlcmVkKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogRXh0ZW5kIEVsZW1lbnQgcHJvdG90eXBlIHRvIHJlbW92ZSBjb250ZW50XG4gICAqL1xuICBFbGVtZW50LnByb3RvdHlwZS5lbXB0eUNvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcztcbiAgICB3aGlsZSAoZWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBsZXQgcnVuQ2FsbGJhY2tzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG9wdHMub25SZW5kZXIpIHtcbiAgICAgIG9wdHMub25SZW5kZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHNhbnRpemVGaWVsZCA9IChmaWVsZCkgPT4ge1xuICAgIGxldCBzYW5pdGl6ZWRGaWVsZCA9IE9iamVjdC5hc3NpZ24oe30sIGZpZWxkKTtcbiAgICBzYW5pdGl6ZWRGaWVsZC5jbGFzc05hbWUgPSBmaWVsZC5jbGFzc05hbWUgfHwgZmllbGQuY2xhc3MgfHwgbnVsbDtcbiAgICBkZWxldGUgc2FuaXRpemVkRmllbGQuY2xhc3M7XG5cbiAgICBpZiAoZmllbGQudmFsdWVzKSB7XG4gICAgICBmaWVsZC52YWx1ZXMgPSBmaWVsZC52YWx1ZXMubWFwKG9wdGlvbiA9PiB1dGlscy50cmltT2JqKG9wdGlvbikpO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy50cmltT2JqKHNhbml0aXplZEZpZWxkKTtcbiAgfTtcblxuICBsZXQgZXhwb3J0TWFya3VwID0gZmllbGRzID0+IGZpZWxkcy5tYXAoZWxlbSA9PiBlbGVtLmlubmVySFRNTCkuam9pbignJyk7XG5cbiAgLy8gQmVnaW4gdGhlIGNvcmUgcGx1Z2luXG4gIGxldCByZW5kZXJlZCA9IFtdO1xuXG4gIC8vIGdlbmVyYXRlIGZpZWxkIG1hcmt1cCBpZiB3ZSBoYXZlIGZpZWxkc1xuICBpZiAob3B0cy5mb3JtRGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5mb3JtRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNhbml0aXplZEZpZWxkID0gc2FudGl6ZUZpZWxkKG9wdHMuZm9ybURhdGFbaV0pO1xuICAgICAgcmVuZGVyZWQucHVzaCh1dGlscy5nZXRUZW1wbGF0ZShzYW5pdGl6ZWRGaWVsZCkpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnJlbmRlcikge1xuICAgICAgaWYgKG9wdHMuY29udGFpbmVyKSB7XG4gICAgICAgIGxldCByZW5kZXJlZEZvcm1XcmFwID0gdXRpbHMubWFya3VwKCdkaXYnLCByZW5kZXJlZCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlbmRlcmVkLWZvcm0nXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3B0cy5jb250YWluZXIgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgICBvcHRzLmNvbnRhaW5lciA9IG9wdHMuY29udGFpbmVyWzBdO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuY29udGFpbmVyLmVtcHR5Q29udGFpbmVyKCk7XG4gICAgICAgIG9wdHMuY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVkRm9ybVdyYXApO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuZW1wdHlDb250YWluZXIoKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRGb3JtRmllbGRzKHJlbmRlcmVkKTtcbiAgICAgIH1cblxuICAgICAgcnVuQ2FsbGJhY2tzKCk7XG4gICAgICBvcHRzLm5vdGlmeS5zdWNjZXNzKG9wdHMubWVzc2FnZXMuZm9ybVJlbmRlcmVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVJlbmRlci5tYXJrdXAgPSBleHBvcnRNYXJrdXAocmVuZGVyZWQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgbm9EYXRhID0gdXRpbHMubWFya3VwKCdkaXYnLCBvcHRzLm1lc3NhZ2VzLm5vRm9ybURhdGEsIHtcbiAgICAgIGNsYXNzTmFtZTogJ25vLWZvcm0tZGF0YSdcbiAgICB9KTtcbiAgICByZW5kZXJlZC5wdXNoKG5vRGF0YSk7XG4gICAgb3B0cy5ub3RpZnkuZXJyb3Iob3B0cy5tZXNzYWdlcy5ub0Zvcm1EYXRhKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtUmVuZGVyO1xufVxuXG4oZnVuY3Rpb24oJCkge1xuICAkLmZuLmZvcm1SZW5kZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgbGV0IGVsZW1zID0gdGhpcztcbiAgICBlbGVtcy5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCBmb3JtUmVuZGVyID0gbmV3IEZvcm1SZW5kZXIob3B0aW9ucywgZWxlbXNbaV0pO1xuICAgICAgZWxlbXNbaV0uZGF0YXNldC5mb3JtUmVuZGVyID0gZm9ybVJlbmRlcjtcbiAgICAgIHJldHVybiBmb3JtUmVuZGVyO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTtcblxud2luZG93LkZvcm1SZW5kZXIgPSBGb3JtUmVuZGVyO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtUmVuZGVyO1xuIiwiaW1wb3J0IGQgZnJvbSAnLi9kb20nO1xuXG4vKipcbiAqIENyb3NzIGZpbGUgdXRpbGl0aWVzIGZvciB3b3JraW5nIHdpdGggYXJyYXlzLFxuICogc29ydGluZyBhbmQgb3RoZXIgZnVuIHN0dWZmXG4gKiBAcmV0dXJuIHtPYmplY3R9IGZiVXRpbHNcbiAqL1xuLy8gZnVuY3Rpb24gdXRpbHMoKSB7XG4gIGNvbnN0IGZiVXRpbHMgPSB7fTtcbiAgd2luZG93LmZiTG9hZGVkID0ge1xuICAgIGpzOiBbXSxcbiAgICBjc3M6IFtdXG4gIH07XG4gIHdpbmRvdy5mYkVkaXRvcnMgPSB7XG4gICAgcXVpbGw6IHt9LFxuICAgIHRpbnltY2U6IHt9XG4gIH07XG5cbiAgLy8gY2xlYW5lciBzeW50YXggZm9yIHRlc3RpbmcgaW5kZXhPZiBlbGVtZW50XG4gIGZiVXRpbHMuaW5BcnJheSA9IGZ1bmN0aW9uKG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihuZWVkbGUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIHthdHRyTmFtZTogYXR0clZhbHVlfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgIE9iamVjdCB0cmltbWVkIG9mIG51bGwgb3IgdW5kZWZpbmVkIHZhbHVlc1xuICAgKi9cbiAgZmJVdGlscy50cmltT2JqID0gZnVuY3Rpb24oYXR0cnMpIHtcbiAgICBsZXQgeG1sUmVtb3ZlID0gW1xuICAgICAgbnVsbCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgICcnLFxuICAgICAgZmFsc2UsXG4gICAgICAnZmFsc2UnXG4gICAgXTtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoZmJVdGlscy5pbkFycmF5KGF0dHJzW2F0dHJdLCB4bWxSZW1vdmUpKSB7XG4gICAgICAgIGRlbGV0ZSBhdHRyc1thdHRyXTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhdHRyc1thdHRyXSkpIHtcbiAgICAgICAgaWYgKCFhdHRyc1thdHRyXS5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgYXR0cmlidXRlIGlzIGEgdmFsaWQgSFRNTCBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBhdHRyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmYlV0aWxzLnZhbGlkQXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgICBsZXQgaW52YWxpZCA9IFtcbiAgICAgICd2YWx1ZXMnLFxuICAgICAgJ2VuYWJsZU90aGVyJyxcbiAgICAgICdvdGhlcicsXG4gICAgICAnbGFiZWwnLFxuICAgICAgLy8gJ3N0eWxlJyxcbiAgICAgICdzdWJ0eXBlJ1xuICAgIF07XG4gICAgcmV0dXJuICFmYlV0aWxzLmluQXJyYXkoYXR0ciwgaW52YWxpZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gYXR0cnMgb2JqZWN0IGludG8gYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBhdHRycyBvYmplY3Qgb2YgYXR0cmlidXRlcyBmb3IgbWFya3VwXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuYXR0clN0cmluZyA9IGZ1bmN0aW9uKGF0dHJzKSB7XG4gICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSAmJiBmYlV0aWxzLnZhbGlkQXR0cihhdHRyKSkge1xuICAgICAgICBhdHRyID0gZmJVdGlscy5zYWZlQXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyLm5hbWUgKyBhdHRyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGF0dHJpYnV0ZXMgdG8gbWFya3VwIHNhZmUgc3RyaW5nc1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdmFsdWUgYXR0cmlidXRlIHZhbHVlXG4gICAqIEByZXR1cm4ge09iamVjdH0gICAgICAge2F0dHJOYW1lOiBhdHRyVmFsdWV9XG4gICAqL1xuICBmYlV0aWxzLnNhZmVBdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gZmJVdGlscy5zYWZlQXR0ck5hbWUobmFtZSk7XG4gICAgbGV0IHZhbFN0cmluZztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbFN0cmluZyA9IGZiVXRpbHMuZXNjYXBlQXR0cih2YWx1ZS5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB2YWxTdHJpbmcgPSBmYlV0aWxzLmVzY2FwZUF0dHIodmFsdWUucmVwbGFjZSgnLCcsICcgJykudHJpbSgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlID8gYD1cIiR7dmFsU3RyaW5nfVwiYCA6ICcnO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lLFxuICAgICAgdmFsdWVcbiAgICB9O1xuICB9O1xuXG4gIGZiVXRpbHMuc2FmZUF0dHJOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGxldCBzYWZlQXR0ciA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJ1xuICAgIH07XG5cbiAgICByZXR1cm4gc2FmZUF0dHJbbmFtZV0gfHwgZmJVdGlscy5oeXBoZW5DYXNlKG5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHN0cmluZ3MgaW50byBsb3dlcmNhc2UtaHlwaGVuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuaHlwaGVuQ2FzZSA9IChzdHIpID0+IHtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvW15cXHdcXHNcXC1dL2dpLCAnJyk7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oJDEpIHtcbiAgICAgIHJldHVybiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC9eLSsvZywgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjb252ZXJ0IGEgaHlwaGVuYXRlZCBzdHJpbmcgdG8gY2FtZWxDYXNlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZiVXRpbHMuY2FtZWxDYXNlID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCAobSwgdykgPT5cbiAgICB3LnRvVXBwZXJDYXNlKCkpO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgY29udGVudCB0eXBlXG4gICAqIEBwYXJhbSAge05vZGUgfCBTdHJpbmcgfCBBcnJheSB8IE9iamVjdH0gY29udGVudFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlIGZvciBtYXBwaW5nXG4gICAqL1xuICBmYlV0aWxzLmNvbnRlbnRUeXBlID0gY29udGVudCA9PiB7XG4gICAgbGV0IHR5cGUgPSB0eXBlb2YgY29udGVudDtcbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0eXBlID0gJ25vZGUnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50KSkge1xuICAgICAgdHlwZSA9ICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAgICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50IERPTSBlbGVtZW50XG4gICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRzICBvYmplY3QgZnVsbCBvZiBldmVudHMgZWcuIHtjbGljazogZXZ0ID0+IGNhbGxiYWNrfVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5iaW5kRXZlbnRzID0gKGVsZW1lbnQsIGV2ZW50cykgPT4ge1xuICAgIGlmIChldmVudHMpIHtcbiAgICAgIGZvciAobGV0IGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZ0ID0+IGV2ZW50c1tldmVudF0oZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogR2VuZXJhdGUgYSB1bmlxdWUgbmFtZSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSAge09iamVjdH0gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgbmFtZVxuICovXG4gIGZiVXRpbHMubmFtZUF0dHIgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgbGV0IGVwb2NoID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgcHJlZml4ID0gZmllbGQuYXR0cnMudHlwZSB8fCBmYlV0aWxzLmh5cGhlbkNhc2UoZmllbGQubGFiZWwpO1xuICAgICAgcmV0dXJuIHByZWZpeCArICctJyArIGVwb2NoO1xuICAgIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIG1hcmt1cCB3cmFwcGVyIHdoZXJlIG5lZWRlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICB0YWdcbiAgICogQHBhcmFtICB7U3RyaW5nfEFycmF5fE9iamVjdH0gY29udGVudCB3ZSB3cmFwIHRoaXNcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgYXR0cnNcbiAgICogQHJldHVybiB7T2JqZWN0fSBET00gRWxlbWVudFxuICAgKi9cbiAgZmJVdGlscy5tYXJrdXAgPSBmdW5jdGlvbih0YWcsIGNvbnRlbnQgPSAnJywgYXR0cmlidXRlcyA9IHt9KSB7XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50KTtcbiAgICBsZXQge2V2ZW50cywgLi4uYXR0cnN9ID0gYXR0cmlidXRlcztcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB7XG4gICAgICBzdHJpbmc6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZpZWxkLmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgfSxcbiAgICAgIG9iamVjdDogKGNvbmZpZykgPT4ge1xuICAgICAgICBsZXQge3RhZywgY29udGVudCwgLi4uZGF0YX0gPSBjb25maWc7XG4gICAgICAgIHJldHVybiBmaWVsZC5hcHBlbmRDaGlsZChmYlV0aWxzLm1hcmt1cCh0YWcsIGNvbnRlbnQsIGRhdGEpKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiAoY29udGVudCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICB9LFxuICAgICAgYXJyYXk6IChjb250ZW50KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gZmJVdGlscy5jb250ZW50VHlwZShjb250ZW50W2ldKTtcbiAgICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50W2ldKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uOiBjb250ZW50ID0+IHtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudFR5cGUgPSBmYlV0aWxzLmNvbnRlbnRUeXBlKGNvbnRlbnQpO1xuICAgICAgICBhcHBlbmRDb250ZW50W2NvbnRlbnRUeXBlXShjb250ZW50KTtcbiAgICAgIH0sXG4gICAgICB1bmRlZmluZWQ6ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcih0YWcsIGNvbnRlbnQsIGF0dHJpYnV0ZXMpO1xuICAgICAgfSxcbiAgICB9O1xuXG5cbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJzKSB7XG4gICAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBmYlV0aWxzLnNhZmVBdHRyTmFtZShhdHRyKTtcbiAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW2F0dHJdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgYXBwZW5kQ29udGVudFtjb250ZW50VHlwZV0uY2FsbCh0aGlzLCBjb250ZW50KTtcbiAgICB9XG5cbiAgICBmYlV0aWxzLmJpbmRFdmVudHMoZmllbGQsIGV2ZW50cyk7XG5cbiAgICByZXR1cm4gZmllbGQ7XG4gIH07XG4gIGNvbnN0IG0gPSBmYlV0aWxzLm1hcmt1cDtcblxuICAvKipcbiAgICogQ29udmVydCBodG1sIGVsZW1lbnQgYXR0cmlidXRlcyB0byBrZXkvdmFsdWUgb2JqZWN0XG4gICAqIEBwYXJhbSAge09iamVjdH0gZWxlbSBET00gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IGV4OiB7YXR0ck5hbWU6IGF0dHJWYWx1ZX1cbiAgICovXG4gIGZiVXRpbHMucGFyc2VBdHRycyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICBsZXQgYXR0cnMgPSBlbGVtLmF0dHJpYnV0ZXM7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBmYlV0aWxzLmZvckVhY2goYXR0cnMsIGF0dHIgPT4ge1xuICAgICAgbGV0IGF0dHJWYWwgPSBhdHRyc1thdHRyXS52YWx1ZTtcbiAgICAgIGlmIChhdHRyVmFsLm1hdGNoKC9mYWxzZXx0cnVlL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSAoYXR0clZhbCA9PT0gJ3RydWUnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0clZhbC5tYXRjaCgvdW5kZWZpbmVkL2cpKSB7XG4gICAgICAgIGF0dHJWYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRyVmFsKSB7XG4gICAgICAgIGRhdGFbYXR0cnNbYXR0cl0ubmFtZV0gPSBhdHRyVmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgZmllbGQgb3B0aW9ucyB0byBvcHRpb25EYXRhXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmllbGQgIERPTSBlbGVtZW50XG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgIG9wdGlvbkRhdGEgYXJyYXlcbiAgICovXG4gIGZiVXRpbHMucGFyc2VPcHRpb25zID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZmllbGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ29wdGlvbicpO1xuICAgIGxldCBvcHRpb25EYXRhID0ge307XG4gICAgbGV0IGRhdGEgPSBbXTtcblxuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG9wdGlvbkRhdGEgPSBmYlV0aWxzLnBhcnNlQXR0cnMob3B0aW9uc1tpXSk7XG4gICAgICAgIG9wdGlvbkRhdGEubGFiZWwgPSBvcHRpb25zW2ldLnRleHRDb250ZW50O1xuICAgICAgICBkYXRhLnB1c2gob3B0aW9uRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlIFhNTCBmb3JtRGF0YVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHhtbFN0cmluZ1xuICAgKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICBmb3JtRGF0YSBhcnJheVxuICAgKi9cbiAgZmJVdGlscy5wYXJzZVhNTCA9IGZ1bmN0aW9uKHhtbFN0cmluZykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCk7XG4gICAgbGV0IHhtbCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sU3RyaW5nLCAndGV4dC94bWwnKTtcbiAgICBsZXQgZm9ybURhdGEgPSBbXTtcblxuICAgIGlmICh4bWwpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZWxkJyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmllbGREYXRhID0gZmJVdGlscy5wYXJzZUF0dHJzKGZpZWxkc1tpXSk7XG5cbiAgICAgICAgaWYgKGZpZWxkc1tpXS5jaGlsZHJlbiAmJiBmaWVsZHNbaV0uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgZmllbGREYXRhLnZhbHVlcyA9IGZiVXRpbHMucGFyc2VPcHRpb25zKGZpZWxkc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5wdXNoKGZpZWxkRGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBlc2NhcGVkIEhUTUwgaW50byB1c2FibGUgSFRNTFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgZXNjYXBlZCBIVE1MXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBwYXJzZWQgSFRNTFxuICAgKi9cbiAgZmJVdGlscy5wYXJzZWRIdG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICAgIGxldCBlc2NhcGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlc2NhcGVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBtYXJrdXAgc28gaXQgY2FuIGJlIGRpc3BsYXllZCByYXRoZXIgdGhhbiByZW5kZXJlZFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGh0bWwgbWFya3VwXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICBlc2NhcGVkIGh0bWxcbiAgICovXG4gIGZiVXRpbHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICBsZXQgZXNjYXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZXNjYXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGh0bWw7XG4gICAgcmV0dXJuIGVzY2FwZUVsZW1lbnQuaW5uZXJIVE1MO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhbiBhdHRyaWJ1dGVcbiAgZmJVdGlscy5lc2NhcGVBdHRyID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgbGV0IG1hdGNoID0ge1xuICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAnJic6ICcmYW1wOycsXG4gICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICc+JzogJyZndDsnXG4gICAgfTtcblxuICAgIGNvbnN0IHJlcGxhY2VUYWcgPSB0YWcgPT4gbWF0Y2hbdGFnXSB8fCB0YWc7XG5cbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKSA/IHN0ci5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2VUYWcpIDogc3RyO1xuICB9O1xuXG4gIC8vIEVzY2FwZSBhdHRyaWJ1dGVzXG4gIGZiVXRpbHMuZXNjYXBlQXR0cnMgPSBmdW5jdGlvbihhdHRycykge1xuICAgIGZvciAobGV0IGF0dHIgaW4gYXR0cnMpIHtcbiAgICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICBhdHRyc1thdHRyXSA9IGZiVXRpbHMuZXNjYXBlQXR0cihhdHRyc1thdHRyXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJzO1xuICB9O1xuXG4gIC8vIGZvckVhY2ggdGhhdCBjYW4gYmUgdXNlZCBvbiBub2RlTGlzdFxuICBmYlV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbChzY29wZSwgaSwgYXJyYXlbaV0pOyAvLyBwYXNzZXMgYmFjayBzdHVmZiB3ZSBuZWVkXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgYXJyYXkgd2l0aCBwb3NzaWJsZSBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgYXJyYXkgd2l0aCBvbmx5IHVuaXF1ZSB2YWx1ZXNcbiAgICovXG4gIGZiVXRpbHMudW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtLCBwb3MsIGFycikgPT4ge1xuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKGVsZW0pID09PSBwb3M7XG4gICAgfSk7XG4gIH07XG5cbiAgZmJVdGlscy5tYWtlTGFiZWwgPSAoZGF0YSwgbGFiZWwgPSAnJywgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICAgIGxldCBsYWJlbFRleHQgPSBmYlV0aWxzLnBhcnNlZEh0bWwobGFiZWwpO1xuICAgIGxldCBsYWJlbENvbnRlbnRzID0gW2xhYmVsVGV4dF07XG5cbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSkge1xuICAgICAgbGFiZWxDb250ZW50cy5wdXNoKG0oJ3NwYW4nLCAnKicsIHtjbGFzc05hbWU6ICdyZXF1aXJlZCd9KSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICBsYWJlbENvbnRlbnRzLnB1c2gobSgnc3BhbicsICc/Jywge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2x0aXAtZWxlbWVudCcsXG4gICAgICAgICAgdG9vbHRpcDogZGVzY3JpcHRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtKCdsYWJlbCcsIGxhYmVsQ29udGVudHMsIHtcbiAgICAgIGZvcjogZGF0YS5pZCxcbiAgICAgIGNsYXNzTmFtZTogYGZiLSR7ZGF0YS50eXBlfS1sYWJlbGBcbiAgICB9KTtcbiAgfTtcblxuICBmYlV0aWxzLnRlbXBsYXRlTWFwID0gKHRlbXBsYXRlcywgdHlwZSwgZmFsbGJhY2spID0+IHtcbiAgICBsZXQgdGVtcGxhdGU7XG4gICAgbGV0IHRlbXBsYXRlTWFwID0gbmV3IE1hcCh0ZW1wbGF0ZXMpO1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiB0ZW1wbGF0ZU1hcCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBpZihmYlV0aWxzLmluQXJyYXkodHlwZSwga2V5KSkge1xuICAgICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0ga2V5KSB7XG4gICAgICAgIHRlbXBsYXRlID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHRlbXBsYXRlID0gZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlKCk7XG4gIH07XG5cbiAgZmJVdGlscy5hdXRvY29tcGxldGVUZW1wbGF0ZSA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHt2YWx1ZXMsIHR5cGUsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGNvbnN0IGtleWJvYXJkTmF2ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGxpc3QgPSBlLnRhcmdldC5uZXh0U2libGluZy5uZXh0U2libGluZztcbiAgICAgIGxldCBhY3RpdmVPcHRpb24gPSBsaXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGl2ZS1vcHRpb24nKVswXTtcbiAgICAgIGNvbnN0IGtleUNvZGVNYXBWYWxzID0gW1xuICAgICAgICAvLyB1cFxuICAgICAgICBbMzgsICgpID0+IHtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBhY3RpdmVPcHRpb24ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8vIGRvd25cbiAgICAgICAgWzQwLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbi5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW9wdGlvbicpO1xuICAgICAgICAgICAgICBhY3RpdmVPcHRpb24gPSBhY3RpdmVPcHRpb24ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbiA9IGxpc3QuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGFjdGl2ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtb3B0aW9uJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgWzEzLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKGFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBhY3RpdmVPcHRpb24uaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYgKGxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgXTtcbiAgICAgIGxldCBrZXlDb2RlTWFwID0gbmV3IE1hcChrZXlDb2RlTWFwVmFscyk7XG5cbiAgICAgIGxldCBkaXJlY3Rpb24gPSBrZXlDb2RlTWFwLmdldChlLmtleUNvZGUpO1xuICAgICAgaWYoIWRpcmVjdGlvbikge1xuICAgICAgICBkaXJlY3Rpb24gPSAoKSA9PiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGlvbigpO1xuICAgIH07XG4gICAgY29uc3QgZmF1eEV2ZW50cyA9IHtcbiAgICAgIGZvY3VzOiBldnQgPT4ge1xuICAgICAgICBldnQudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlib2FyZE5hdik7XG4gICAgICAgIGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9LFxuICAgICAgYmx1cjogZXZ0ID0+IHtcbiAgICAgICAgZXZ0LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5Ym9hcmROYXYpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBldnQudGFyZ2V0Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9LFxuICAgICAgaW5wdXQ6IChldnQpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGV2dC50YXJnZXQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgIGQuZmlsdGVyKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKSwgZXZ0LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmICghZXZ0LnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgZmF1eEF0dHJzID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IGAke2RhdGEuaWR9LWlucHV0YCxcbiAgICAgICAgZXZlbnRzOiBmYXV4RXZlbnRzXG4gICAgICB9KTtcbiAgICBsZXQgaGlkZGVuQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7dHlwZTogJ2hpZGRlbid9KTtcbiAgICBkZWxldGUgZmF1eEF0dHJzLm5hbWU7XG4gICAgY29uc3QgZmllbGQgPSBbXG4gICAgICBtKCdpbnB1dCcsIG51bGwsIGZhdXhBdHRycyksXG4gICAgICBtKCdpbnB1dCcsIG51bGwsIGhpZGRlbkF0dHJzKVxuICAgIF07XG5cbiAgICBjb25zdCBvcHRpb25zID0gdmFsdWVzLm1hcChvcHRpb25EYXRhID0+IHtcbiAgICAgIGxldCBsYWJlbCA9IG9wdGlvbkRhdGEubGFiZWw7XG4gICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogZXZ0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGxpc3QucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3QsIGZpZWxkKTtcbiAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gb3B0aW9uRGF0YS5sYWJlbDtcbiAgICAgICAgICAgIGZpZWxkLnByZXZpb3VzU2libGluZy52YWx1ZSA9IG9wdGlvbkRhdGEudmFsdWU7XG4gICAgICAgICAgICBsaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogb3B0aW9uRGF0YS52YWx1ZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBtKCdsaScsIGxhYmVsLCBjb25maWcpO1xuICAgIH0pO1xuXG4gICAgZmllbGQucHVzaChtKCd1bCcsIG9wdGlvbnMsXG4gICAgICB7aWQ6IGAke2RhdGEuaWR9LWxpc3RgLCBjbGFzc05hbWU6IGBmYi0ke3R5cGV9LWxpc3RgfSkpO1xuXG4gICAgY29uc3Qgb25SZW5kZXIgPSAoZXZ0KSA9PiB7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZCwgb25SZW5kZXJ9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBET00gZWxlbWVudHMgZm9yIHNlbGVjdCwgY2hlY2tib3gtZ3JvdXAgYW5kIHJhZGlvLWdyb3VwLlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGZpZWxkRGF0YVxuICAgKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICBET00gZWxlbWVudHNcbiAgICovXG4gIGZiVXRpbHMuc2VsZWN0VGVtcGxhdGUgPSBmaWVsZERhdGEgPT4ge1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHt2YWx1ZXMsIHBsYWNlaG9sZGVyLCB0eXBlLCBpbmxpbmUsIG90aGVyLCAuLi5kYXRhfSA9IGZpZWxkRGF0YTtcbiAgICBsZXQgb3B0aW9uVHlwZSA9IHR5cGUucmVwbGFjZSgnLWdyb3VwJywgJycpO1xuICAgIGxldCBpc1NlbGVjdCA9IHR5cGUgPT09ICdzZWxlY3QnO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgaWYgKHBsYWNlaG9sZGVyICYmIGlzU2VsZWN0KSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChtKCdvcHRpb24nLCBwbGFjZWhvbGRlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkOiBudWxsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHtsYWJlbCA9ICcnLCAuLi5vcHRpb25BdHRyc30gPSB2YWx1ZXNbaV07XG5cbiAgICAgICAgb3B0aW9uQXR0cnMuaWQgPSBgJHtkYXRhLmlkfS0ke2l9YDtcbiAgICAgICAgaWYgKCFvcHRpb25BdHRycy5zZWxlY3RlZCB8fCBwbGFjZWhvbGRlcikge1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25BdHRycy5zZWxlY3RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgICAgIGxldCBvID0gbSgnb3B0aW9uJywgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWwpLCBvcHRpb25BdHRycyk7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB3cmFwcGVyQ2xhc3MgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChpbmxpbmUpIHtcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbkF0dHJzLnR5cGUgPSBvcHRpb25UeXBlO1xuICAgICAgICAgIGlmIChvcHRpb25BdHRycy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgb3B0aW9uQXR0cnMuY2hlY2tlZCA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uQXR0cnMuc2VsZWN0ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBpbnB1dCA9IG0oJ2lucHV0JywgbnVsbCwgT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwgb3B0aW9uQXR0cnMpKTtcbiAgICAgICAgICBsZXQgaW5wdXRMYWJlbCA9IG0oJ2xhYmVsJywgW2lucHV0LCBsYWJlbF0sIHtmb3I6IG9wdGlvbkF0dHJzLmlkfSk7XG4gICAgICAgICAgbGV0IHdyYXBwZXIgPSBtKCdkaXYnLCBpbnB1dExhYmVsLCB7Y2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3N9KTtcbiAgICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1NlbGVjdCAmJiBvdGhlcikge1xuICAgICAgICBsZXQgb3RoZXJPcHRpb25BdHRycyA9IHtcbiAgICAgICAgICBpZDogYCR7ZGF0YS5pZH0tb3RoZXJgLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7ZGF0YS5jbGFzc05hbWV9IG90aGVyLW9wdGlvbmAsXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogKCkgPT4gZmJVdGlscy5vdGhlck9wdGlvbkNCKG90aGVyT3B0aW9uQXR0cnMuaWQpXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBsZXQgbGFiZWwgPSBtaTE4bi5jdXJyZW50Lm90aGVyO1xuICAgICAgICBsZXQgd3JhcHBlckNsYXNzID0gb3B0aW9uVHlwZTtcbiAgICAgICAgaWYgKGlubGluZSkge1xuICAgICAgICAgIHdyYXBwZXJDbGFzcyArPSAnLWlubGluZSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uQXR0cnMgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCBvdGhlck9wdGlvbkF0dHJzKTtcbiAgICAgICAgb3B0aW9uQXR0cnMudHlwZSA9IG9wdGlvblR5cGU7XG5cbiAgICAgICAgbGV0IG90aGVyVmFsQXR0cnMgPSB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICBpZDogYCR7b3RoZXJPcHRpb25BdHRycy5pZH0tdmFsdWVgLFxuICAgICAgICAgIGNsYXNzTmFtZTogJ290aGVyLXZhbCdcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG90aGVySW5wdXRzID0gW1xuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3B0aW9uQXR0cnMpLFxuICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPdGhlcicpLFxuICAgICAgICAgIG0oJ2lucHV0JywgbnVsbCwgb3RoZXJWYWxBdHRycylcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IGlucHV0TGFiZWwgPSBtKCdsYWJlbCcsIG90aGVySW5wdXRzLCB7Zm9yOiBvcHRpb25BdHRycy5pZH0pO1xuICAgICAgICBsZXQgd3JhcHBlciA9IG0oJ2RpdicsIGlucHV0TGFiZWwsIHtjbGFzc05hbWU6IHdyYXBwZXJDbGFzc30pO1xuICAgICAgICBvcHRpb25zLnB1c2god3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGVzID0gW1xuICAgICAgWydzZWxlY3QnLFxuICAgICAgICAoKSA9PiBtKG9wdGlvblR5cGUsIG9wdGlvbnMsIGRhdGEpXSxcbiAgICAgIFtbJ2NoZWNrYm94LWdyb3VwJywgJ3JhZGlvLWdyb3VwJ10sXG4gICAgICAgICgpID0+IG0oJ2RpdicsIG9wdGlvbnMsIHtjbGFzc05hbWU6IHR5cGV9KV1cbiAgICBdO1xuXG4gICAgcmV0dXJuIGZiVXRpbHMudGVtcGxhdGVNYXAodGVtcGxhdGVzLCB0eXBlKTtcbiAgfTtcblxuICBmYlV0aWxzLmRlZmF1bHRGaWVsZCA9IGZpZWxkRGF0YSA9PiB7XG4gICAgbGV0IHtsYWJlbCwgZGVzY3JpcHRpb24sIHN1YnR5cGUsIHR5cGUsIGlkLCBpc1ByZXZpZXcsIC4uLmRhdGF9ID0gZmllbGREYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgaWYgKGlzUHJldmlldykge1xuICAgICAgICBkYXRhLm5hbWUgPSBkYXRhLm5hbWUgKyAnLXByZXZpZXcnO1xuICAgICAgfVxuICAgICAgZGF0YS5pZCA9IGRhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICBkYXRhLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChzdWJ0eXBlKSB7XG4gICAgICB0eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBsZXQgZmllbGQgPSB7XG4gICAgICBmaWVsZDogbSh0eXBlLCBmYlV0aWxzLnBhcnNlZEh0bWwobGFiZWwpLCBkYXRhKSxcbiAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IGZpZWxkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMb2FkcyBhbiBhcnJheSBvZiBzY3JpcHRzIHVzaW5nIGpRdWVyeSdzIGBnZXRTY3JpcHRgXG4gICAqIEBwYXJhbSAge0FycmF5fFN0cmluZ30gIHNjcmlwdFNjciAgICBzY3JpcHRzXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCAgIG9wdGlvbmFsIHRvIGxvYWQgZm9ybVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICBhIHByb21pc2VcbiAgICovXG4gIGZiVXRpbHMuZ2V0U2NyaXB0cyA9IChzY3JpcHRTY3IsIHBhdGgpID0+IHtcbiAgICBjb25zdCAkID0galF1ZXJ5O1xuICAgIGxldCBfYXJyID0gW107XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NyaXB0U2NyKSkge1xuICAgICAgc2NyaXB0U2NyID0gW3NjcmlwdFNjcl07XG4gICAgfVxuXG4gICAgaWYgKCFmYlV0aWxzLmlzQ2FjaGVkKHNjcmlwdFNjcikpIHtcbiAgICAgIF9hcnIgPSAkLm1hcChzY3JpcHRTY3IsIHNyYyA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcbiAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICB1cmw6IChwYXRoIHx8ICcnKSArIHNyY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpLmRvbmUoKCkgPT4gd2luZG93LmZiTG9hZGVkLmpzLnB1c2goc3JjKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfYXJyLnB1c2goJC5EZWZlcnJlZCggZGVmZXJyZWQgPT4gJCggZGVmZXJyZWQucmVzb2x2ZSApKSk7XG5cbiAgICByZXR1cm4gJC53aGVuKC4uLl9hcnIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgcmVtb3RlIHJlc291cmNlIGlzIGFscmVhZHkgbG9hZGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gc3JjICB1cmwgb2YgcmVtb3RlIHNjcmlwdCBvciBjc3NcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgICAgICB0eXBlICAgICAgICdqcycgb3IgJ2NzcydcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBpc0NhY2hlZFxuICAgKi9cbiAgZmJVdGlscy5pc0NhY2hlZCA9IChzcmMsIHR5cGUgPSAnanMnKSA9PiB7XG4gICAgbGV0IGlzQ2FjaGVkID0gZmFsc2U7XG4gICAgY29uc3QgY2FjaGUgPSB3aW5kb3cuZmJMb2FkZWRbdHlwZV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSkge1xuICAgICAgaXNDYWNoZWQgPSBzcmMuZXZlcnkocyA9PiBmYlV0aWxzLmluQXJyYXkocywgY2FjaGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNDYWNoZWQgPSBmYlV0aWxzLmluQXJyYXkoc3JjLCBjYWNoZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NhY2hlZDtcbiAgfTtcblxuICAvKipcbiAgICogQXBwZW5kcyBzdHlsZXNoZWV0cyB0byB0aGUgaGVhZFxuICAgKiBAcGFyYW0gIHtBcnJheX0gc2NyaXB0U2NyXG4gICAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmJVdGlscy5nZXRTdHlsZXMgPSAoc2NyaXB0U2NyLCBwYXRoKSA9PiB7XG4gICAgaWYgKGZiVXRpbHMuaXNDYWNoZWQoc2NyaXB0U2NyLCAnY3NzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXBwZW5kU3R5bGUgPSAoaHJlZikgPT4ge1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgd2luZG93LmZiTG9hZGVkLmNzcy5wdXNoKGhyZWYpO1xuICAgIH07XG4gICAgc2NyaXB0U2NyLmZvckVhY2goc3JjID0+IGFwcGVuZFN0eWxlKChwYXRoIHx8ICcnKSArIHNyYykpO1xuICB9O1xuXG4gIGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZSA9IGRhdGEgPT4ge1xuICAgIGxldCB7dmFsdWUgPSAnJywgLi4uYXR0cnN9ID0gZGF0YTtcbiAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICBmaWVsZDogbSgndGV4dGFyZWEnLCBmYlV0aWxzLnBhcnNlZEh0bWwodmFsdWUpLCBhdHRycylcbiAgICB9O1xuICAgIGxldCBlZGl0b3JzID0ge1xuICAgICAgdGlueW1jZToge1xuICAgICAgICBqczogWycvL2Nkbi50aW55bWNlLmNvbS80L3RpbnltY2UubWluLmpzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdKSB7XG4gICAgICAgICAgICB3aW5kb3cudGlueW1jZS5lZGl0b3JzW2RhdGEuaWRdLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cudGlueW1jZS5pbml0KHtcbiAgICAgICAgICAgIHRhcmdldDogdGVtcGxhdGUuZmllbGQsXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgJ2Fkdmxpc3QgYXV0b2xpbmsgbGlzdHMgbGluayBpbWFnZSBjaGFybWFwIHByaW50IHByZXZpZXcgYW5jaG9yJyxcbiAgICAgICAgICAgICAgJ3NlYXJjaHJlcGxhY2UgdmlzdWFsYmxvY2tzIGNvZGUgZnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICdpbnNlcnRkYXRldGltZSBtZWRpYSB0YWJsZSBjb250ZXh0bWVudSBwYXN0ZSBjb2RlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRvb2xiYXI6ICdpbnNlcnRmaWxlIHVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcXVpbGw6IHtcbiAgICAgICAganM6IFsnLy9jZG4ucXVpbGxqcy5jb20vMS4xLjMvcXVpbGwuanMnXSxcbiAgICAgICAgY3NzOiBbJy8vY2RuLnF1aWxsanMuY29tLzEuMS4zL3F1aWxsLnNub3cuY3NzJ10sXG4gICAgICAgIG9uUmVuZGVyOiBldnQgPT4ge1xuICAgICAgICAgIGNvbnN0IERlbHRhID0gd2luZG93LlF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgICB3aW5kb3cuZmJFZGl0b3JzLnF1aWxsW2RhdGEuaWRdID0ge307XG4gICAgICAgICAgbGV0IGVkaXRvciA9IHdpbmRvdy5mYkVkaXRvcnMucXVpbGxbZGF0YS5pZF07XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlID0gbmV3IHdpbmRvdy5RdWlsbCh0ZW1wbGF0ZS5maWVsZCwge1xuICAgICAgICAgICAgbW9kdWxlczoge1xuICAgICAgICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgICAgICAgW3snaGVhZGVyJzogWzEsIDIsIGZhbHNlXX1dLFxuICAgICAgICAgICAgICAgIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10sXG4gICAgICAgICAgICAgICAgWydjb2RlLWJsb2NrJ11cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhdHRycy5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlZGl0b3IuZGF0YSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZWRpdG9yLmluc3RhbmNlLnNldENvbnRlbnRzKHdpbmRvdy5KU09OLnBhcnNlKGZiVXRpbHMucGFyc2VkSHRtbCh2YWx1ZSkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWRpdG9yLmluc3RhbmNlLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICBlZGl0b3IuZGF0YSA9IGVkaXRvci5kYXRhLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChkYXRhLnR5cGUgIT09ICd0ZXh0YXJlYScpIHtcbiAgICAgIHRlbXBsYXRlLm9uUmVuZGVyID0gZWRpdG9yc1tkYXRhLnR5cGVdLm9uUmVuZGVyO1xuICAgIH1cbiAgICBpZiAoZGF0YS50eXBlID09PSAncXVpbGwnKSB7XG4gICAgICB0ZW1wbGF0ZS5maWVsZCA9IG0oJ2RpdicsIG51bGwsIGF0dHJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBvblJlbmRlciA9ICgpID0+IHtcbiAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0pIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZmllbGRSZW5kZXJlZCcsIG9uUmVuZGVyKTtcblxuICAgICAgICBpZiAoZWRpdG9yc1tkYXRhLnR5cGVdLmNzcykge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U3R5bGVzKGVkaXRvcnNbZGF0YS50eXBlXS5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlZGl0b3JzW2RhdGEudHlwZV0uanMgJiYgIWZiVXRpbHMuaXNDYWNoZWQoZWRpdG9yc1tkYXRhLnR5cGVdLmpzKSkge1xuICAgICAgICAgIGZiVXRpbHMuZ2V0U2NyaXB0cyhlZGl0b3JzW2RhdGEudHlwZV0uanMpLmRvbmUodGVtcGxhdGUub25SZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBsYXRlLm9uUmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtmaWVsZDogdGVtcGxhdGUuZmllbGQsIG9uUmVuZGVyfTtcbiAgfTtcblxuICBmYlV0aWxzLmdldFRlbXBsYXRlID0gKGZpZWxkRGF0YSwgaXNQcmV2aWV3ID0gZmFsc2UpID0+IHtcbiAgICBsZXQge1xuICAgICAgbGFiZWwsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICBsYWJlbFBvc2l0aW9uLFxuICAgICAgLi4uZGF0YX0gPSBmaWVsZERhdGE7XG4gICAgbGV0IHRlbXBsYXRlO1xuICAgIGxldCBmaWVsZDtcblxuICAgIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICctcHJldmlldyc7XG4gICAgfVxuICAgIGRhdGEuaWQgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAoc3VidHlwZSkge1xuICAgICAgZGF0YS50eXBlID0gc3VidHlwZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5tdWx0aXBsZSB8fCBkYXRhLnR5cGUgPT09ICdjaGVja2JveC1ncm91cCcpIHtcbiAgICAgIGRhdGEubmFtZSA9IGRhdGEubmFtZSArICdbXSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucmVxdWlyZWQpIHtcbiAgICAgIGRhdGEucmVxdWlyZWQgPSBudWxsO1xuICAgICAgZGF0YVsnYXJpYS1yZXF1aXJlZCddID0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxldCBmaWVsZExhYmVsID0gZmJVdGlscy5tYWtlTGFiZWwoZGF0YSwgbGFiZWwsIGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0ZW1wbGF0ZXMgPSBbXG4gICAgICBbWydhdXRvY29tcGxldGUnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSBmYlV0aWxzLmF1dG9jb21wbGV0ZVRlbXBsYXRlKGRhdGEpO1xuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBbZmllbGRMYWJlbCwgYXV0b2NvbXBsZXRlLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBhdXRvY29tcGxldGUub25SZW5kZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbZC5zdWJ0eXBlcy50ZXh0LmNvbmNhdChbJ251bWJlcicsICdmaWxlJ10pLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xuICAgICAgICAgICAgZmllbGQ6IFtmaWVsZExhYmVsLCBtKCdpbnB1dCcsIG51bGwsIGRhdGEpXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbZC5zdWJ0eXBlcy5idXR0b24sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogbSgnYnV0dG9uJywgbGFiZWwsIGRhdGEpLFxuICAgICAgICAgICAgb25SZW5kZXI6IGZiVXRpbHMubm9vcFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3NlbGVjdCcsICdjaGVja2JveC1ncm91cCcsICdyYWRpby1ncm91cCddLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGV0IGZpZWxkID0gZmJVdGlscy5zZWxlY3RUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmYlV0aWxzLm5vb3BcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICAgICAgfV0sXG4gICAgICBbJ2NoZWNrYm94JyxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IFttKCdpbnB1dCcsIG51bGwsIGRhdGEpXTtcbiAgICAgICAgICBpZiAobGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZUlucHV0Jykge1xuICAgICAgICAgICAgZmllbGQudW5zaGlmdChmaWVsZExhYmVsLCAnICcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5wdXNoKCcgJywgZmllbGRMYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgb25SZW5kZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGEudG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLmlkKSkua2NUb2dnbGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XSxcbiAgICAgIFtbJ3RleHRhcmVhJywgJ3RpbnltY2UnLCAncXVpbGwnXSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGxldCBmaWVsZCA9IGZiVXRpbHMubG9uZ1RleHRUZW1wbGF0ZShkYXRhKTtcbiAgICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XG4gICAgICAgICAgICBmaWVsZDogW2ZpZWxkTGFiZWwsIGZpZWxkLmZpZWxkXSxcbiAgICAgICAgICAgIG9uUmVuZGVyOiBmaWVsZC5vblJlbmRlclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9XVxuICAgICAgXTtcblxuICAgICAgdGVtcGxhdGUgPSBmYlV0aWxzLnRlbXBsYXRlTWFwKFxuICAgICAgICB0ZW1wbGF0ZXMsXG4gICAgICAgIGRhdGEudHlwZSxcbiAgICAgICAgZmJVdGlscy5kZWZhdWx0RmllbGQoZmllbGREYXRhKSAvLyBmYWxsYmFja1xuICAgICAgKTtcblxuICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgbGV0IHdyYXBwZXJBdHRycyA9IHt9O1xuICAgICAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgICAgIHdyYXBwZXJBdHRycy5jbGFzc05hbWUgPVxuICAgICAgICAgIGBmYi0ke2RhdGEudHlwZX0gZm9ybS1ncm91cCBmaWVsZC0ke2RhdGEuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZCA9IGZiVXRpbHMubWFya3VwKCdkaXYnLCB0ZW1wbGF0ZS5maWVsZCwgd3JhcHBlckF0dHJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpZWxkID0gZmJVdGlscy5tYXJrdXAoJ2lucHV0JywgbnVsbCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2ZpZWxkUmVuZGVyZWQnLCB0ZW1wbGF0ZS5vblJlbmRlcik7XG5cbiAgICAgIHJldHVybiBmaWVsZDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZm9yIG90aGVyIG9wdGlvbi5cbiAgICogVG9nZ2xlcyB0aGUgaGlkZGVuIHRleHQgYXJlYSBmb3IgXCJvdGhlclwiIG9wdGlvbi5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBvdGhlcklkIGlkIG9mIHRoZSBcIm90aGVyXCIgb3B0aW9uIGlucHV0XG4gICAqL1xuICBmYlV0aWxzLm90aGVyT3B0aW9uQ0IgPSAob3RoZXJJZCkgPT4ge1xuICAgIGNvbnN0IG90aGVySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvdGhlcklkKTtcbiAgICBjb25zdCBvdGhlcklucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtvdGhlcklkfS12YWx1ZWApO1xuXG4gICAgaWYgKG90aGVySW5wdXQuY2hlY2tlZCkge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgb3RoZXJJbnB1dFZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciB1bmNhcGl0YWxpemVkIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9IHN0ciBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICovXG4gIGZiVXRpbHMuY2FwaXRhbGl6ZSA9IHN0ciA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGJcXHcvZywgZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSk7XG4gIH07XG5cblxuZmJVdGlscy5tZXJnZSA9IChvYmoxLCBvYmoyKSA9PiB7XG4gIGxldCBtZXJnZWRPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmoxLCBvYmoyKTtcbiAgZm9yIChsZXQgcHJvcCBpbiBvYmoyKSB7XG4gICAgaWYgKG1lcmdlZE9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqMltwcm9wXSkpIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gQXJyYXkuaXNBcnJheShvYmoxW3Byb3BdKSA/IGZiVXRpbHMudW5pcXVlKG9iajFbcHJvcF0uY29uY2F0KG9iajJbcHJvcF0pKSA6IG9iajJbcHJvcF07XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoyW3Byb3BdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBtZXJnZWRPYmpbcHJvcF0gPSBmYlV0aWxzLm1lcmdlKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkT2JqW3Byb3BdID0gb2JqMltwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1lcmdlZE9iajtcbn07XG5cbi8qKlxuICogVXRpbCB0byByZW1vdmUgY29udGVudHMgb2YgRE9NIE9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgZWxlbWVudCB3aXRoIGl0cyBjaGlsZHJlbiByZW1vdmVkXG4gKi9cbmZiVXRpbHMuZW1wdHkgPSBlbGVtZW50ID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmZiVXRpbHMubm9vcCA9ICgpID0+IG51bGw7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmYlV0aWxzO1xuIl19
