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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: HTMLRendererElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_HTMLRendererElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/HTMLRendererElement */ "./src/HTMLRendererElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLRendererElement", function() { return _src_HTMLRendererElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProperty; });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \****************************************************************************/
/*! exports provided: append, isPojo, merge, filter, defValue, defGet, defGetSet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPojo", function() { return isPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defValue", function() { return defValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defGet", function() { return defGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defGetSet", function() { return defGetSet; });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 *
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *
 *  @return returns the changed object
 */
const append = function (aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true);
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 *
 * @param aObject:object the object to be testing
 *
 * @return boolean
 */
const isPojo = function (aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object";
};

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other
 * value would be replaced by value from the source object.
 *
 * sample: merge(target, source-1, source-2, ...source-n)
 *
 * @param aTarget:object the target object to merging into
 * @param aSources:object
 *
 * @return object returns the target object
 */
const merge = function (aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach((aKey) => {
			if (isPojo(aTarget[aKey])) merge(aTarget[aKey], source[aKey]);
			else aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
};

const buildPropertyFilter = function ({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	};
};

const filter = function () {
	const [data, propFilter, { deep = false, recursive = true, parents = [] } = {}] = arguments;
	const result = {};

	for (let name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined)) result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object" || value instanceof Array || value instanceof Map || value instanceof Set || value instanceof RegExp || parents.includes[value] || value == data) result[name] = value;
			else result[name] = filter(value, propFilter, { deep, recursive, parents: parents.concat(data) });
		}
	}

	return result;
};

const defValue = (o, name, value) => {
	Object.defineProperty(o, name, {
		value,
		writable: false,
		configurable: false,
		enumerable: false
	});
};
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false
	});
};

const defGetSet = (o, name, get, set) => {
	Object.defineProperty(o, name, {
		get,
		set,
		configurable: false,
		enumerable: false
	});
};

/* harmony default export */ __webpack_exports__["default"] = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter,
	defValue,
	defGet,
	defGetSet
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js ***!
  \********************************************************************************/
/*! exports provided: privateProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateProperty", function() { return privateProperty; });
const PRIVATE_PROPERTIES = new WeakMap();
const privateStore = (obj) => {
	if(PRIVATE_PROPERTIES.has(obj))
		return PRIVATE_PROPERTIES.get(obj);
	
	const data = {};
	PRIVATE_PROPERTIES.set(obj, data);
	return data;
};

const privateProperty = function(obj, name, value) {
	const data = privateStore(obj);
	if(arguments.length === 1)
		return data;
	else if(arguments.length === 2)
		return data[name];
	else if(arguments.length === 3)
		data[name] = value;
	else
		throw new Error("Not allowed size of arguments!");
};

/* harmony default export */ __webpack_exports__["default"] = ({privateProperty});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \*****************************************************************************/
/*! exports provided: timeoutPromise, lazyPromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutPromise", function() { return timeoutPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyPromise", function() { return lazyPromise; });
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");


const timeoutPromise = (fn, ms) =>{
	let canceled = false;
	let timeout = null;
	const promise = new Promise((r, e) => {
		timeout = setTimeout(()=> {
			timeout = null;
			fn(r,e);
		}, ms)
	});

	const then = promise.then;
	promise.then = (fn) => {
		then.call(promise, (result) => {
			if(!undefined.canceled)
				return fn(result);
		});
	}

	Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defValue"])(promise, "cancel", () => {
		if(timeout){
			clearTimeout(timeout);
			canceled = true;
		}
	});
	Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, canceld, () => canceled);

	return promise;
}


const lazyPromise = () => {
		let promiseResolve = null;
		let promiseError = null;

		const promise = new Promise((r, e) => {
			promiseResolve = r;
			promiseError = e;
		});

		let resolved = false;
		let error = false;
		let value = undefined;

		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defValue"])(promise, "resolve", (result) => {
			value = result;
			resolved = true;
			if (value instanceof Error) {
				error = true;
				promiseError(value);
			} else promiseResolve(value);
		});

		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "value", () => value);
		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "error", () => error);
		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "resolved", () => resolved);

		return promise;
};
/* harmony default export */ __webpack_exports__["default"] = ({
	lazyPromise,
	timeoutPromise
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-common-utils/src/UUID.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-common-utils/src/UUID.js ***!
  \*********************************************************************/
/*! exports provided: UUID_SCHEMA, uuid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UUID_SCHEMA", function() { return UUID_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
//the solution is found here: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
const UUID_SCHEMA = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

const uuid = () => {
	const buf = new Uint32Array(4);
	window.crypto.getRandomValues(buf);
	let idx = -1;
	return UUID_SCHEMA.replace(/[xy]/g, (c) => {
		idx++;
		const r = (buf[idx >> 3] >> ((idx % 8) * 4)) & 15;
		const v = c == "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

/* harmony default export */ __webpack_exports__["default"] = ({ uuid });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const GLOBAL = (() => {
	if(typeof global !== "undefined") return global;
	if(typeof window !== "undefined") return window;	
	if(typeof self !== "undefined") return self;
	return {};
})();

/* harmony default export */ __webpack_exports__["default"] = (GLOBAL);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProperty; });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: append, isPojo, merge, filter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPojo", function() { return isPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 * 
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *  
 *  @return returns the changed object
 */
const append = function(aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true)
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 * 
 * @param aObject:object the object to be testing
 * 
 * @return boolean
 */
const isPojo = function(aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object"
}

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other 
 * value would be replaced by value from the source object.
 * 
 * sample: merge(target, source-1, source-2, ...source-n)
 * 
 * @param aTarget:object the target object to merging into
 * @param aSources:object
 * 
 * @return object returns the target object
 */
const merge = function(aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach(aKey => {
			if (isPojo(aTarget[aKey]))
				merge(aTarget[aKey], source[aKey]);
			else
				aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
}



const buildPropertyFilter = function({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	}
};


const filter = function() {
	const [data, propFilter, {deep = false, recursive = true, parents = []} = {}] = arguments;
	const result = {};

	for (name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined))
			result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object"
				|| value instanceof Array
				|| value instanceof Map
				|| value instanceof Set
				|| value instanceof RegExp
				|| parents.includes[value]
				|| value == data)
				result[name] = value;
			else
				result[name] = filter(value, propFilter, {deep, recursive, parents:  parents.concat(data)});
		}

	}

	return result;
};



/* harmony default export */ __webpack_exports__["default"] = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter
});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/Context.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
const seekAtChain = (resolver, property) => {
	while(resolver){
		const def = resolver.proxy.handle.getPropertyDef(property, false);
		if(def)
			return def;
		
		resolver = resolver.parent;
	}	
	return { data: null, resolver: null, defined: false };
}

class Handle {
	constructor(data, resolver) {
		this.data = data;
		this.resolver = resolver;
		this.cache = new Map();
	}
	
	updateData(data){
		this.data = data;
		this.cache = new Map();
	}
	
	resetCache(){
		this.cache = new Map();
	}

	getPropertyDef(property, seek = true) {
		if (this.cache.has(property))
			return this.cache.get(property);
		
		let def = null
		if (this.data && property in this.data)
			def = { data: this.data, resolver: this.resolver, defined: true };
		else if(seek)
			def = seekAtChain(this.resolver.parent, property);
		else
			return null;
		if(def.defined)
			this.cache.set(property, def);
		return def;
	}

	hasProperty(property) {
		//@TODO write tests!!!
		const { defined } = this.getPropertyDef(property);
		return defined;
	}
	getProperty(property) {
		//@TODO write tests!!!	
		const { data } = this.getPropertyDef(property);
		return data ? data[property] : undefined;
	}
	setProperty(property, value) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!
		const { data, defined } = this.getPropertyDef(property);
		if (defined)
			data[property] = value;
		else {
			if (this.data)
				this.data[property] = value;
			else {
				this.data = {}
				this.data[property] = value;
			}
			this.cache.set(property, { data: this.data, resolver: this.resolver, defined: true });
		}
	}
	deleteProperty(property) {
		//@TODO would support this action on an proxied resolver context??? write tests!!!		
		throw new Error("unsupported function!")
	}
}

class Context {
	constructor(context, resolver) {
		this.handle = new Handle(context, resolver);		
		this.data = new Proxy(this.handle, {
			has: function(data, property) {
				return data.hasProperty(property);
			},
			get: function(data, property) {
				return data.getProperty(property);
			},
			set: function(data, property, value) {
				return data.setProperty(property, value);
			},
			deleteProperty: function(data, property) {
				return data.deleteProperty(property);
			}
			//@TODO need to support the other proxy actions		
		});;
	}
	
	updateData(data){
		this.handle.updateData(data)		
	}
	
	resetCache(){
		this.handle.resetCache();
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultValue; });
class DefaultValue {
	constructor(value){
		this.hasValue = arguments.length == 1;
		this.value = value;
	}	
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpressionResolver; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/Global.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/Global.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectProperty.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils.js */ "./node_modules/@default-js/defaultjs-expression-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultValue.js */ "./node_modules/@default-js/defaultjs-expression-language/src/DefaultValue.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-expression-language/src/Context.js");







const EXECUTION_WARN_TIMEOUT = 1000;
const EXPRESSION = /(\\?)(\$\{(([a-zA-Z0-9\-_\s]+)::)?([^\{\}]+)\})/;
const MATCH_ESCAPED = 1;
const MATCH_FULL_EXPRESSION = 2;
const MATCH_EXPRESSION_SCOPE = 4;
const MATCH_EXPRESSION_STATEMENT = 5;

const DEFAULT_NOT_DEFINED = new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const toDefaultValue = value => {
	if (value instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"])
		return value;

	return new _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"](value);
};

const execute = async function(aStatement, aContext) {
	if (typeof aStatement !== "string")
		return aStatement;
		
	const expression = new Function("context", 
`
return (async (context) => {
	try{ 
		with(context){
			 return ${aStatement}
		}
	}catch(e){
		throw e;
	}
})(context)`
	);
	
	let timeout = setTimeout(() => {
		timeout = null;
		console.warn("long running statement:", aStatement, new Error());
	}, EXECUTION_WARN_TIMEOUT)
	let result = undefined;
	try{
		result = await expression(aContext);
	}catch(e){}
	
	if(timeout)
		clearTimeout(timeout)
	return result;
};

const resolve = async function(aResolver, aExpression, aFilter, aDefault) {
	if (aFilter && aResolver.name != aFilter)
		return aResolver.parent ? resolve(aResolver.parent, aExpression, aFilter, aDefault) : null;
	
	const result = await execute(aExpression, aResolver.proxy.data);
	if (result !== null && typeof result !== "undefined")
		return result;

	else if (aDefault instanceof _DefaultValue_js__WEBPACK_IMPORTED_MODULE_3__["default"] && aDefault.hasValue)
		return aDefault.value;
};

const resolveMatch = async (resolver, match, defaultValue) => {
	if(match[MATCH_ESCAPED])
		return match[MATCH_FULL_EXPRESSION]; 
		
	return resolve(resolver, match[MATCH_EXPRESSION_STATEMENT], normalize(match[MATCH_EXPRESSION_SCOPE]), defaultValue);
}

const normalize = value => {
	if (value) {
		value = value.trim();
		return value.length == 0 ? null : value;
	}
	return null;
};

class ExpressionResolver {
	constructor({ context = _default_js_defaultjs_common_utils_src_Global_js__WEBPACK_IMPORTED_MODULE_0__["default"], parent = null, name = null }) {
		this.parent = (parent instanceof ExpressionResolver) ? parent : null;
		this.name = name;
		this.context = context;
		this.proxy = new _Context_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context, this);
	}

	get chain() {
		return this.parent ? this.parent.chain + "/" + this.name : "/" + this.name;
	}

	get effectiveChain() {
		if (!this.context)
			return this.parent ? this.parent.effectiveChain : "";
		return this.parent ? this.parent.effectiveChain + "/" + this.name : "/" + this.name;
	}

	get contextChain() {
		const result = [];
		let resolver = this;
		while (resolver) {
			if (resolver.context)
				result.push(resolver.context);

			resolver = resolver.parent;
		}

		return result;
	}

	getData(key, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.getData(key, filter);
		} else {
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key, false);
			return property ? property.value : null;
		}
	}

	updateData(key, value, filter) {
		if (!key)
			return;
		else if (filter && filter != this.name) {
			if (this.parent)
				this.parent.updateData(key, value, filter);
		} else {
			if(this.context == null || typeof this.context === "undefined"){
				this.context = {};				
				this.proxy.updateData(this.context);
			}
			const property = _default_js_defaultjs_common_utils_src_ObjectProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.context, key);
			property.value = value;
			this.proxy.resetCache();
		}
	}

	mergeContext(context, filter) {
		if (filter && filter != this.name) {
			if (this.parent)
				this.parent.mergeContext(context, filter);
		} else {
			this.context = this.context ? _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].merge(this.context, context) : context;
		}
	}

	async resolve(aExpression, aDefault) {
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		try {
			const match = EXPRESSION.exec(aExpression);
			if (match)
				return await resolveMatch(this, match, defaultValue);
			else
				return await resolve(this, normalize(aExpression), null, defaultValue);
		} catch (e) {
			console.error("error at executing statment\"", aExpression, "\":", e);
			return defaultValue.hasValue ? defaultValue.value : aExpression;
		}
	}

	async resolveText(aText, aDefault) {
		let text = aText;
		let temp = aText; // required to prevent infinity loop
		let match = EXPRESSION.exec(text);
		const defaultValue = arguments.length == 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED
		while (match != null) {
			const result = await resolveMatch(this, match, defaultValue);
			temp = temp.split(match[0]).join(); // remove current match for next loop
			text = text.split(match[0]).join(typeof result === "undefined" ? "undefined" : (result == null ? "null" : result));
			match = EXPRESSION.exec(temp);
		}
		return text;
	}

	static async resolve(aExpression, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolve(aExpression, defaultValue));
				}, aTimeout);
			});

		return resolver.resolve(aExpression, defaultValue)
	}

	static async resolveText(aText, aContext, aDefault, aTimeout) {
		const resolver = new ExpressionResolver({ context: aContext });
		const defaultValue = arguments.length > 2 ? toDefaultValue(aDefault) : DEFAULT_NOT_DEFINED;
		if (typeof aTimeout === "number" && aTimeout > 0)
			return new Promise(resolve => {
				setTimeout(() => {
					resolve(resolver.resolveText(aText, defaultValue));
				}, aTimeout);
			});

		return resolver.resolveText(aText, defaultValue);
	}
	
	static buildSecure({context, propFilter, option={deep:true}, name, parent}){
		context = _default_js_defaultjs_common_utils_src_ObjectUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].filter({data: context, propFilter, option});
		return new ExpressionResolver({context, name, parent});
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./node_modules/@default-js/defaultjs-extdom/src/index.js");


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/Global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/Global.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs || {};
_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom = _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.defaultjs.extdom || {
	VERSION : "1.2.0",
	utils : {
		Utils: _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"]
	}
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.find = function() {
	return document.find.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.ready = function() {
	return document.ready.apply(document, arguments);
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.create = function(aContent, asTemplate) {
	if (typeof arguments[0] !== "string")
		throw new Error("The first argument must be a string!");
	
	const template = document.createElement("template");
	template.innerHTML = aContent;
	if(asTemplate)
		return template;
	
	return document.importNode(template.content, true).childNodes;
};

_utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script = function(aFile, aTarget) {
	if(aFile instanceof Array)
		return Promise.all(aFile.map(file => _utils_Utils__WEBPACK_IMPORTED_MODULE_0__["default"].global.script(file, aTarget)));
	
	if(typeof aFile === "string")	
		return new Promise((r,e) => {
			const script = document.createElement("script");
			script.async = true;
			script.onload = function(){r()};
			script.onerror = function(){throw new Error("load error!")};
			!aTarget ? document.body.append(script) : aTarget.append(script);
			script.src = aFile;
		});
	else
		return Promise.reject("First parameter must be an array of strings or a string!");
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ReadyEventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Document, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ReadyEventSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

document.addEventListener("DOMContentLoaded", () => document.trigger("ready"));





/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(DocumentFragment, _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);






/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/QuerySupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js");
/* harmony import */ var _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/AttributeSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Element,_extentions_QuerySupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_AttributeSupport__WEBPACK_IMPORTED_MODULE_2__["default"], _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/EventSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js");



Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(EventTarget, _extentions_EventSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/HtmlClassSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js");
/* harmony import */ var _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ShowHideSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js");





Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLElement, _extentions_HtmlClassSupport__WEBPACK_IMPORTED_MODULE_1__["default"], _extentions_ShowHideSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLInputElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/ValueSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLSelectElement,_extentions_ValueSupport__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLTextAreaElement,Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_1__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		if(arguments.length == 0)
			return this.value;
		else
			this.value = arguments[0]
			
		return this;
	};	
}));

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(HTMLCollection, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

HTMLCollection.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

HTMLCollection.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		HTMLCollection.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

HTMLCollection.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof HTMLElement)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof HTMLCollection || arg instanceof NodeList || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof HTMLElement){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(HTMLCollection.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			let result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof HTMLCollection)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof HTMLElement || results[0] instanceof HTMLCollection)
		return HTMLCollection.from.apply(null, results);
	else
		return results;
},HTMLCollection.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extentions/DataSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js");
/* harmony import */ var _extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ManipulationSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(Node,_extentions_DataSupport__WEBPACK_IMPORTED_MODULE_1__["default"],_extentions_ManipulationSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ExtendPrototype */ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js");
/* harmony import */ var _utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/DelegaterBuilder */ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js");
/* harmony import */ var _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extentions/ListSupport */ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js");




Object(_utils_ExtendPrototype__WEBPACK_IMPORTED_MODULE_0__["default"])(NodeList, _extentions_ListSupport__WEBPACK_IMPORTED_MODULE_2__["default"]);

NodeList.prototype.applyTo = function(){
	const args = Array.from(arguments);
	const calling = args.shift();
	const isFunction = typeof calling === "function";
	const results = [];
	for(let i = 0; i < this.length; i++){
		const node = this[i];
		let	result;
		if(isFunction)
			result = calling.apply([node].concat(args));
		else if(typeof node[calling] === "function")
			result = node[calling].apply(node, args);
		
		if(result)
			results.push(result);
	}
	
	return results;
};

NodeList.prototype.val = function() {
	if(arguments.length == 0){
		if(this.length > 0){
			const result = new Map();
			this.forEach(node => {
				if(typeof node.val === "function"){
					const value = node.val();
					if(value)
						result.set((node.name || node.id || node.selector()), node.val());
				}
			});	
			return result;
		}
	}
	else
		NodeList.prototype.applyTo.apply(this, ["val"].concat(Array.from(arguments)));
};

NodeList.from = function(){
	const args = Array.from(arguments);
	const data = {};
	let counter = 0;
	
	while(args.length > 0){
		const arg = args.shift();
		if(typeof arg !== "undefined" && arg != null){
			if(arg instanceof Node)
				data[counter++] = {value: arg, enumerable: true};
			else if(arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array){
				for(let i = 0; i < arg.length; i++){
					if(arg[i] && arg[i] instanceof Node){
						data[counter++] = {value: arg[i], enumerable: true};
					}
				}
			}
		}
	}
	
	data.length = {value: counter};
	return  Object.create(NodeList.prototype, data);
};


Object(_utils_DelegaterBuilder__WEBPACK_IMPORTED_MODULE_1__["default"])(function(aFunctionName, theArguments) {
	let results = [];	
	this.forEach(node => {
		if(node && typeof node[aFunctionName] === "function"){
			const result = node[aFunctionName].apply(node, theArguments);
			if(result){ 
				if(result instanceof NodeList)
					results = results.concat(Array.from(result));
				else
					results.push(result);
			}		
		}
	});
	
	if(results.length === 0)
		return undefined;
	else if(results[0] instanceof Node || results[0] instanceof NodeList)
		return NodeList.from(results);
	else
		return results;
},NodeList.prototype, Node.prototype, HTMLElement.prototype, HTMLInputElement.prototype, Element.prototype, EventTarget.prototype);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/AttributeSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("AttributeSupport", Prototype => {
	Prototype.attr = function() {
		if (arguments.length == 0)
			return this.hasAttributes() ? (() => {
				const result = {};
				this.getAttributeNames().forEach(name => {
					result[name] = this.getAttribute(name);
				});
				return result;
			})() : undefined;
		else if (arguments.length == 1)
			return this.getAttribute(arguments[0]);
		else if (typeof arguments[1] === "undefined" || arguments[1] == null)
			this.removeAttribute(arguments[0]);
		else
			this.setAttribute(arguments[0], arguments[1]);
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/DataSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("DataSupport", Prototype => {
	Prototype.data = function() {
		const data = {};
		if (typeof this.dataset !== "undefined")
			for (name in this.dataset)
				data[name] = this.dataset[name];

		this.data = (function() {
			if (arguments.length == 0)
				return data;
			else if (arguments.length == 1)
				return data[arguments[0]];
			else if (typeof arguments[1] === "undefined" || arguments[1] == null)
				delete data[arguments[0]];
			else
				data[arguments[0]] = arguments[1];

			return this;
		}).bind(this);

		return this.data.apply(null, arguments);
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/EventSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const DEFAULT_TIMEOUT = 100;
const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("EventSupport", (Prototype) => {
	const EVENTSPLITER = /(\s+)|(\s*,\s*)/;
	const getWrapperHandleMap = (element) => {
		if (!element.__wrapperhandlemap__) element.__wrapperhandlemap__ = new Map();

		return element.__wrapperhandlemap__;
	};

	const getTriggerTimeouts = (element) => {
		if (!element.___EVENTTRIGGERTIMEOUTS___) element.___EVENTTRIGGERTIMEOUTS___ = {};

		return element.___EVENTTRIGGERTIMEOUTS___;
	};

	const removeWrapper = (element, data, eventTypes) => {
		const { wrapper, option, events, handle } = data;
		const capture = option.capture;
		if (eventTypes) {
			eventTypes = typeof eventTypes === "string" ? eventTypes.split(EVENTSPLITER) : eventTypes;
			for (let event of eventTypes) {
				const index = events.indexOf(event);
				if (index >= 0) {
					element.removeEventListener(event, wrapper, capture);
					events.splice(index, 1);
				}
				if (events.length == 0) getWrapperHandleMap(element).delete(handle);
			}
		} else {
			for (let event of events) {
				element.removeEventListener(event, wrapper, capture);
			}
			getWrapperHandleMap(element).delete(handle);
		}
	};

	Prototype.on = function () {
		if (arguments.length < 2) throw new Error("Too less arguments!");

		const args = Array.from(arguments);
		let events = typeof args[0] === "string" ? args.shift().split(EVENTSPLITER) : args.shift();
		const filter = typeof args[0] === "string" ? args.shift() : null;
		const handle = args.shift();
		const option = typeof args[0] === "undefined" ? { capture: false, once: false, passive: false } : typeof args[0] === "boolean" ? { capture: args.shift(), once: false, passive: false } : args.shift();
		const wrapper = function (event) {
			if (filter) {
				const target = event.target;
				if (typeof target.is === "function" && !target.is(filter)) return;
			}
			const result = handle.apply(null, arguments);
			if (option.once) removeWrapper(this, wrapper);
			return result;
		};

		getWrapperHandleMap(this).set(handle, { handle, wrapper: wrapper, events, option });

		for (let event of events) {
			this.addEventListener(event, wrapper, option);
		}

		return this;
	};

	Prototype.removeOn = function (handle, event, capture) {
		const data = getWrapperHandleMap(this).get(handle);
		if (data) removeWrapper(this, data, event);
		else this.removeEventListener(handle, event, capture);

		return this;
	};

	Prototype.trigger = function () {
		const args = Array.from(arguments);
		const timeout = typeof args[0] === "number" ? args.shift() : -1;
		if (timeout >= 0) {
			const type = args[0];
			const timeouts = getTriggerTimeouts(this);
			const timeoutid = timeouts[type];
			if (timeoutid) clearTimeout(timeoutid);

			timeouts[type] = setTimeout(() => {
				delete timeouts[type];
				this.trigger.apply(this, args);
			}, timeout);
		} else {
			const type = args.shift();
			const delegate = args[0] instanceof Event ? args.shift() : null;
			const data = args.length >= 1 ? (args.length == 1 ? args.shift() : args) : delegate;
			const event = data ? new CustomEvent(type, { bubbles: true, cancelable: true, composed: true, detail: data }) : new Event(type, { bubbles: true, cancelable: true, composed: true });

			if (delegate) event.delegatedEvent = delegate;
			this.dispatchEvent(event);
		}
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/HtmlClassSupport.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("HtmlClassSupport", Prototype => {	
	Prototype.addClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.add(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments,clazz => this.classList.add(clazz));
		
		return this;
	};
	
	Prototype.removeClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.remove(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.remove(clazz));
		
		return this;		
	};
	
	Prototype.toggleClass = function() {
		if(arguments.length == 1)
			arguments[0].split(/\s+/).forEach(clazz => this.classList.toggle(clazz));
		else if(arguments.length > 1)
			Array.prototype.forEach.call(arguments, clazz => this.classList.toggle(clazz));
		
		return this;
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ListSupport.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ListSupport", Prototype => {		
	Prototype.indexOf = function() {
		for(let i = 0; i < this.length; i++)
			if(this[i] == arguments[0])
				return i;
		
		return -1;
	};

	Prototype.forEach = function(){
		return Array.prototype.forEach.apply(Array.from(this), arguments);
	};
	
	Prototype.map = function(){
		return Array.prototype.map.apply(Array.from(this), arguments);
	};
	
	Prototype.filter = function(){
		return Array.prototype.filter.apply(Array.from(this), arguments);
	};

	Prototype.first = function(){
		if(this.length > 0)
			return this[0];
	};	
	
	Prototype.last = function(){
		if(this.length > 0)
			return this[this.length - 1];
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ManipulationSupport.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");



const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ManipulationSupport", Prototype => {	
	Prototype.empty = function(){
		let nodes = this.childNodes
		while(nodes.length != 0)			
			nodes[0].remove(true);
		
		return this;
	};
	
	Prototype.content = function(){
		return this.childNodes;
	};	
	
	Prototype.html = function(){
		if(arguments.length == 0)			
			return this.innerHTML;
		else if(arguments.length == 1 && typeof arguments[0] === "boolean")
			if(arguments[0])
				return this.outerHTML;
			else
				return this.innerHTML;
		else 
			Array.from(arguments).forEach(content => {
				this.empty();
				if(typeof content === "string")
					this.append(content);
				else if(content instanceof Node || content instanceof NodeList || content instanceof HTMLCollection){
					this.append(content);
				}
			});		
			
		return this;
	};
	
	const append = function(){
		const append = Prototype.appendChild.bind(this);
		for(let i = 0; i < arguments.length; i++){
			let arg = arguments[i];
			if(arg instanceof Node)
				this.appendChild(arg);
			else if(typeof arg === "string")
				create(arg).forEach(append);
			else if(typeof arg.forEach === "function")
				arg.forEach(append);
		}
	};	
	Prototype.append = append;
	
	const prepend = function(aFirstElement, aElement){
		this.insertBefore(aElement, aFirstElement);
	};
	Prototype.prepend = function(){
		if(this.childNodes.length == 0)
			append.apply(this, arguments);
		else {
			const first = this.childNodes.first();
			const insert = prepend.bind(this, first);
			for(let i = 0; i < arguments.length; i++){
				const arg = arguments[i];
				if(arg instanceof Node)
					insert(arg);
				else if(typeof arg === "string")
					arg.forEach(insert);
				else if(typeof arg.forEach === "function")
					arg.forEach(insert);
			}
		}
	};
	
	Prototype.replace = function(){
		if(arguments.length < 1)
			throw new Error("Insufficient arguments! One or two nodes required!");
		
		const parent = arguments.length == 1 ? this.parentNode : this;
		const oldNode = arguments.length == 1 ? this : arguments[0];
		const newNode = arguments.length == 1 ? arguments[0] : arguments[1];
		
		if(newNode instanceof Array || newNode instanceof NodeList || newNode instanceof HTMLCollection){
			newNode.forEach(aItem => parent.insertBefore(aItem, oldNode));
			oldNode.remove();
		}
		else
			parent.replaceChild(newNode,oldNode);
	};
	
	Prototype.after = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const next = this.nextSibling;
		if(next)
			Prototype.before.apply(next, arguments);
		else
			Prototype.append.apply(parent, arguments);
	};	
	
	Prototype.before = function(){
		if(this.parentNode == null)
			throw new Error("Can't insert nodes after this node! Parent node not available!");
		
		const parent = this.parentNode;
		const inserter = (node) => {parent.insertBefore(node, this);}
		for(let i = 0; i < arguments.length; i++){
			const arg = arguments[i];
			if(arg instanceof Node)
				inserter(arg);
			else if(typeof arg === "string")
				arg.forEach(inserter);
			else if(typeof arg.forEach === "function")
				arg.forEach(inserter);
		}
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/QuerySupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const parentSelector = /:parent(\(\"([^\)]*)\"\))?/i;
const queryExecuter = function (aElement, aSelector) {
	let match = parentSelector.exec(aSelector);
	if (match) {
		let result = aElement;
		if (match.index > 0) {
			result = aElement.querySelectorAll(aSelector.substr(0, match.index));
			if (result.length == 0) return;
		}
		result = result.parent(match[2]);
		if (result) {
			let nextSelector = aSelector.substr(match.index + match[0].length).trim();
			if (nextSelector.length > 0) result = result.find(nextSelector);

			return result;
		}
	} else return aElement.querySelectorAll(aSelector);
};

const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("QuerySupport", (Prototype) => {
	Prototype.find = function () {
		let nodes = [];
		let args = Array.from(arguments);
		let arg = args.shift();
		while (arg) {
			if (typeof arg === "string") {
				let result = queryExecuter(this, arg);
				if (result) nodes.push(result);
			}

			arg = args.shift();
		}

		let result = NodeList.from.apply(null, nodes);
		return result;
	};

	Prototype.is = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return false;
		else if (arguments.length == 1) {
			if (typeof arguments[0] === "string") return this.matches(arguments[0]);
			else if (typeof arguments[0].length === "number") {
				let filter = arguments[0];
				for (let i = 0; i < filter.length; i++) if (this.matches(filter[i])) return true;
			}
		} else if (arguments.length > 1) return this.is(Array.from(arguments));

		return false;
	};

	Prototype.parent = function (selector, ignoreShadowRoot) {
		if (!this.parentNode) return null;
		ignoreShadowRoot = typeof selector === "boolean" ? selector : ignoreShadowRoot;
		selector = typeof selector === "string" ? selector : null;

		let parent = this.parentNode;
		if (parent instanceof ShadowRoot && ignoreShadowRoot) parent = parent.host;

		if (selector) {
			try {
				while (parent && !parent.is(selector)) parent = parent.parent(selector, ignoreShadowRoot);
			} catch (e) {
				console.error("this:", this, "parent:", parent, "error:", e);
			}
			return parent;
		}
		return parent;
	};

	Prototype.parents = function () {
		let result = new Array();
		let parent = Prototype.parent.apply(this, arguments);
		while (parent) {
			result.push(parent);
			parent = Prototype.parent.apply(parent, arguments);
		}

		return NodeList.from(result);
	};

	Prototype.selector = function () {
		if (this instanceof Document || this instanceof DocumentFragment) return undefined;
		else if (this.id) return "#" + this.id;
		else {
			let selector = this.tagName.toLowerCase();
			let parent = this.parent();
			if (parent) {
				let sameTagSiblings = parent.find(":scope>" + selector);
				if (sameTagSiblings instanceof NodeList) {
					let index = sameTagSiblings.indexOf(this);
					if (index > 0) selector += ":nth-child(" + (index + 1) + ")";
				}
				let parentSelector = parent.selector();
				return parentSelector ? parentSelector + ">" + selector : selector;
			}
			return selector;
		}
	};

	Prototype.closest = function (aQuery) {
		return this.closests(aQuery).first();
	};

	Prototype.closests = function (aQuery) {
		const result = this.find(aQuery);
		if (result.length != 0) return result;
		
		const parent = this.parentElement;
		if (parent) return parent.closests(aQuery);

		return NodeList.from([]);
	};

	Prototype.nested = function (aQuery) {
		if (this.is(aQuery)) return NodeList.from(this);

		let nested = this.find(aQuery);
		if (nested && nested.length > 0) return nested;
		else return NodeList.from(this.parent(aQuery));
	};
});
/* harmony default export */ __webpack_exports__["default"] = (support);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ReadyEventSupport.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ReadyEventSupport", Prototype => {
	Prototype.ready = function(aFunction, once){	
		this.on("ready", aFunction, once);
		if(document.readyState == "complete")			
			this.trigger("ready");
		
		return this;
	};
	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ShowHideSupport.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const HIDEVALUE = "none";

const isHidden = (element) => {
	return element.style.display === HIDEVALUE
};

const init = (element) => {	
	let display = !isHidden(element) ? element.style.display : "";
	
	element.show = (function(){
		this.style.display = display;
		return this;		
	}).bind(element);
	
	element.hide = (function(){
		this.style.display = HIDEVALUE;
		return this;		
	}).bind(element);
	
	return element;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ShowHideSupport", Prototype => {
	Prototype.show = function() {
		return init(this).show.apply(null, arguments)
	};

	Prototype.hide = function() {
		return init(this).hide.apply(null, arguments)
	};

	Prototype.toggleShow = function() {
		return isHidden(this) ? this.show() : this.hide();
	};

});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/dom/extentions/ValueSupport.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Extender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Extender */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js");


const InputTypes = [
	{
		selector : "select",
		get : function(){
			const result = [];
			this.find("option").forEach(option => {
				if(option.selected)
					result.push(option.value);
			});			
			return result;
		},
		set : function(){				
			let values = [];
			const args = Array.from(arguments);
			let arg = args.shift();
			while(arg){
				if(Array.isArray(arg))
					values = values.concat(arg);
				else
					values.push(arg);
				
				arg = args.shift();
			}
			this.value = values;
			this.find("option").forEach(option => option.selected = values.indexOf(option.value) >= 0);			
			this.trigger("changed");
		}			
	},
	{
		selector : "input[type=\"checkbox\"], input[type=\"radio\"]",
		get : function(){
			if(this.value == "on" || this.value == "off")
				return this.checked;
			else if(this.checked)
				return this.value;				
		},
		set : function(aValue){
			if(typeof aValue === "boolean")
				this.checked = aValue;
			else if(typeof aValue === "string")
				this.checked = this.value == aValue;
			else if(Array.isArray(aValue))
				this.checked = aValue.indexOf(this.value) >= 0;
			
			this.trigger("changed");
		}
	}
];

const DefaultInputType = {
		get : function(){
			return this.value;
		},
		set : function(aValue){
			this.value = aValue;
			this.trigger("input");
		}	
};

const getInputType = function(aElement){
	for(let i = 0; i < InputTypes.length; i++)
		if(aElement.is(InputTypes[i].selector))
			return InputTypes[i];		
	return DefaultInputType;
};


const support = Object(_utils_Extender__WEBPACK_IMPORTED_MODULE_0__["default"])("ValueSupport", Prototype => {	
	Prototype.val = function() {
		let type = getInputType(this);
		if(arguments.length == 0)
			return type.get.apply(this, arguments);
		else
			type.set.apply(this, arguments);
			
		return this;
	};	
});
/* harmony default export */ __webpack_exports__["default"] = (support);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_EventTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/EventTarget */ "./node_modules/@default-js/defaultjs-extdom/src/dom/EventTarget.js");
/* harmony import */ var _dom_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Node */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Node.js");
/* harmony import */ var _dom_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/Element */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Element.js");
/* harmony import */ var _dom_Document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/Document */ "./node_modules/@default-js/defaultjs-extdom/src/dom/Document.js");
/* harmony import */ var _dom_DocumentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/DocumentFragment */ "./node_modules/@default-js/defaultjs-extdom/src/dom/DocumentFragment.js");
/* harmony import */ var _dom_HTMLElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom/HTMLElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLElement.js");
/* harmony import */ var _dom_HTMLInputElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom/HTMLInputElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLInputElement.js");
/* harmony import */ var _dom_HTMLTextAreaElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom/HTMLTextAreaElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLTextAreaElement.js");
/* harmony import */ var _dom_HTMLSelectElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom/HTMLSelectElement */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HTMLSelectElement.js");
/* harmony import */ var _dom_NodeList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom/NodeList */ "./node_modules/@default-js/defaultjs-extdom/src/dom/NodeList.js");
/* harmony import */ var _dom_HtmlCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom/HtmlCollection */ "./node_modules/@default-js/defaultjs-extdom/src/dom/HtmlCollection.js");
/* harmony import */ var _Global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Global */ "./node_modules/@default-js/defaultjs-extdom/src/Global.js");














/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/DelegaterBuilder.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DelegaterBuilder = function() {
	const args = Array.from(arguments);
	const callback = args.shift();
	const source = args.shift();
	args.forEach( target =>{
		Object.getOwnPropertyNames(target)
		.forEach(name => {
			const prop = Object.getOwnPropertyDescriptor(target, name);
			if (typeof source[name] === "undefined" && typeof prop.value === "function")
				source[name] = function(){
					return callback.call(this, name, arguments);
				};										
		});
	});
	
};
/* harmony default export */ __webpack_exports__["default"] = (DelegaterBuilder);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/ExtendPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const extendPrototype = function(){
	const args = Array.from(arguments);
	const type = args.shift();	
	while(args.length > 0){
		const extender = args.shift();
		extender(type);
	}
};

/* harmony default export */ __webpack_exports__["default"] = (extendPrototype);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Extender.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js");


const EXTENSIONS_MAP = _Utils__WEBPACK_IMPORTED_MODULE_0__["default"].globalVar("___DOM_API_EXTENSION_MAP___", {});
const Extender = function(aName, aExtention){
	return function(aType){	
		let extensions = EXTENSIONS_MAP[aType.name];
		if(!extensions)
			extensions = EXTENSIONS_MAP[aType.name] = {};		
		
		if(!extensions[aName]){
			extensions[aName] = true;
			aExtention(aType.prototype);
		}
		else
			console.warn("duplicated load of extension \"" + aName + "\"!");
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Extender);

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-extdom/src/utils/Utils.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {const Utils = {
	global : (() => {
		if(typeof window !== "undefined") return window;
		if(typeof global !== "undefined") return global;
		if(typeof self !== "undefined") return self;
		return {};		
	})(),
	globalVar : function(aName, aInitValue){
		if(arguments.length === 2 && typeof Utils.global[aName] === "undefined")
			Utils.global[aName] = aInitValue;
		
		return Utils.global[aName];		
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Component.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Component.js ***!
  \*****************************************************************************/
/*! exports provided: createUID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUID", function() { return createUID; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_UUID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/UUID */ "./node_modules/@default-js/defaultjs-common-utils/src/UUID.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");
/* harmony import */ var _utils_EventHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");
/* harmony import */ var _utils_WeakData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/WeakData */ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js");







const PRIVATE_READY = "ready";

const TIMEOUTS = new _utils_WeakData__WEBPACK_IMPORTED_MODULE_5__["default"]();
const init = (component) => {
	const data = TIMEOUTS.data(component);
	if (data.initialize) clearTimeout(data.initialize);

	data.initialize = setTimeout(async () => {
		delete data.initialize;

		await component.init();
		component.ready.resolve();
		component.trigger(Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_4__["componentEventname"])("initialzed", component));
	}, _Constants__WEBPACK_IMPORTED_MODULE_3__["initTimeout"]);
};

const createUID = (prefix, suffix) => {
	let count = 0;
	let id = null;
    while(count < 100){
		id = `${prefix}${Object(_default_js_defaultjs_common_utils_src_UUID__WEBPACK_IMPORTED_MODULE_2__["uuid"])()}${suffix}`;
		if(!document.getElementById(id))
			return id;

		count++;
	}
	console.error(new Error("To many retries to create an unique id - created id is not unique!"));
	return id;
};


class Component extends HTMLElement {
	constructor({shadowRoot = false, content = null, createUID = false, uidPrefix = "id-", uidSuffix = ""} = {}) {
		super();
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_0__["privateProperty"])(this, PRIVATE_READY, Object(_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_1__["lazyPromise"])());

		if(createUID)
			this.attr("id", createUID(uidPrefix, uidSuffix));

		if(shadowRoot)
			this.attachShadow({mode:open});
		
		if(content)
			this.root.append(typeof content === "function" ? content(this) : content);
	}

	get root(){
		return this.shadowRoot || this;
	}

	get ready(){
		return Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_0__["privateProperty"])(this, PRIVATE_READY);
	}

	async init() {}

	async destroy() {
		if(this.ready.resolved)
			Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_0__["privateProperty"])(this, PRIVATE_READY, Object(_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_1__["lazyPromise"])());
	}

	connectedCallback() {
		if (this.ownerDocument == document) init(this);
	}

	adoptedCallback() {
		this.connectedCallback();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue != newValue && this.isConnected) {
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_3__["triggerTimeout"], Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_4__["attributeChangeEventname"])(name, this));
			this.trigger(_Constants__WEBPACK_IMPORTED_MODULE_3__["triggerTimeout"], Object(_utils_EventHelper__WEBPACK_IMPORTED_MODULE_4__["componentEventname"])("change", this));
		}
	}

	disconnectedCallback(){
		this.destroy();
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Component);


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/Constants.js ***!
  \*****************************************************************************/
/*! exports provided: componentPrefix, attributeChangeEventPrefix, initTimeout, triggerTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentPrefix", function() { return componentPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeChangeEventPrefix", function() { return attributeChangeEventPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTimeout", function() { return initTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerTimeout", function() { return triggerTimeout; });
const componentPrefix = "d-";
const attributeChangeEventPrefix = "attribute-";
const initTimeout = 100;
const triggerTimeout = 100;


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js ***!
  \***********************************************************************************************/
/*! exports provided: toNodeName, define, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodeName", function() { return toNodeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "define", function() { return define; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const toNodeName = (name, prefix) => {
	if(typeof prefix === "string")
		return prefix + name;
		
	return _Constants__WEBPACK_IMPORTED_MODULE_0__["componentPrefix"] + name;
};

const define = function(clazz, options) {
	const nodename = clazz.NODENAME;
	if (!customElements.get(nodename)) {
		customElements.define(nodename, clazz, options);
	}
};


/* harmony default export */ __webpack_exports__["default"] = (define); 


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js ***!
  \*************************************************************************************/
/*! exports provided: componentEventname, attributeChangeEventname, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentEventname", function() { return componentEventname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeChangeEventname", function() { return attributeChangeEventname; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./node_modules/@default-js/defaultjs-html-components/src/Constants.js");


const componentEventname = (eventType, node ) => {	
	let nodename = "unsupported";
	if(typeof node === "string")
		nodename = node;
	else if(node instanceof HTMLElement)
		nodename = node.nodeName;
	else if(typeof node.NODENAME === "string")
		nodename = node.NODENAME;
	else throw new Error(typeof node + " is not supported as pram node!");
	
   return `${nodename.toLowerCase()}:${eventType}`;
};


const attributeChangeEventname = (attribute, node ) => {
    return componentEventname(_Constants__WEBPACK_IMPORTED_MODULE_0__["attributeChangeEventPrefix"] + "-" + attribute, node);
};

/* harmony default export */ __webpack_exports__["default"] = ({componentEventname, attributeChangeEventname});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-html-components/src/utils/WeakData.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeakData; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");

class WeakData {
	constructor() {
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defValue"])(this, "weakmap", new WeakMap());
	}

	data(reference) {
		let data = this.weakmap.get(reference);
		if (!data) {
			data = {};
			this.weakmap.set(reference, data);
		}
		return data;
	}

	value(reference, key, value) {
		if (arguments.length == 2) return this.data(reference)[key];
		else this.data(reference)[key] = value;
	}
};



/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectProperty; });
class ObjectProperty {
	constructor(key, context){
		this.key = key;
		this.context = context;
	}
	
	get keyDefined(){
		return this.key in this.context; 
	}
	
	get hasValue(){
		return !!this.context[this.key];
	}
	
	get value(){
		return this.context[this.key];
	}
	
	set value(data){
		this.context[this.key] = data;
	}
	
	set append(data) {
		if(!this.hasValue)
			this.value = data;
		else {
			const value = this.value;
			if(value instanceof Array)
				value.push(data);
			else
				this.value = [this.value, data];
		}
	}
	
	remove(){
		delete this.context[this.key];
	}
	
	static load(data, key, create=true) {
		let context = data;
		const keys = key.split("\.");
		let name = keys.shift().trim();
		while(keys.length > 0){
			if(!context[name]){
				if(!create)
					return null;
				
				context[name] = {}
			}
			
			context = context[name];
			name = keys.shift().trim();
		}
		
		return new ObjectProperty(name, context);
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: append, isPojo, merge, filter, defValue, defGet, defGetSet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPojo", function() { return isPojo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defValue", function() { return defValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defGet", function() { return defGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defGetSet", function() { return defGetSet; });
/* harmony import */ var _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectProperty.js */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectProperty.js");

/**
 * append a propery value to an object. If propery exists its would be converted to an array
 *
 *  @param aKey:string name of property
 *  @param aData:any property value
 *  @param aObject:object the object to append the property
 *
 *  @return returns the changed object
 */
const append = function (aKey, aData, aObject) {
	if (typeof aData !== "undefined") {
		const property = _ObjectProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(aObject, aKey, true);
		property.append = aData;
	}
	return aObject;
};

/**
 * checked if an object a simple object. No Array, Map or something else.
 *
 * @param aObject:object the object to be testing
 *
 * @return boolean
 */
const isPojo = function (aObject) {
	return typeof aObject !== "undefined" && aObject != null && aObject.constructor.name === "Object";
};

/**
 * merging object into a target object. Its only merge simple object and sub objects. Every other
 * value would be replaced by value from the source object.
 *
 * sample: merge(target, source-1, source-2, ...source-n)
 *
 * @param aTarget:object the target object to merging into
 * @param aSources:object
 *
 * @return object returns the target object
 */
const merge = function (aTarget) {
	for (let i = 1; i < arguments.length; i++) {
		const source = arguments[i];
		Object.getOwnPropertyNames(source).forEach((aKey) => {
			if (isPojo(aTarget[aKey])) merge(aTarget[aKey], source[aKey]);
			else aTarget[aKey] = source[aKey];
		});
	}

	return aTarget;
};

const buildPropertyFilter = function ({ names, allowed }) {
	return (name, value, context) => {
		return names.includes(name) === allowed;
	};
};

const filter = function () {
	const [data, propFilter, { deep = false, recursive = true, parents = [] } = {}] = arguments;
	const result = {};

	for (let name in data) {
		const value = data[name];
		const accept = propFilter(name, value, data);
		if (accept && (!deep || value === null || value === undefined)) result[name] = value;
		else if (accept && deep) {
			const type = typeof value;
			if (type !== "object" || value instanceof Array || value instanceof Map || value instanceof Set || value instanceof RegExp || parents.includes[value] || value == data) result[name] = value;
			else result[name] = filter(value, propFilter, { deep, recursive, parents: parents.concat(data) });
		}
	}

	return result;
};

const defValue = (o, name, value) => {
	Object.defineProperty(o, name, {
		value,
		writable: false,
		configurable: false,
		enumerable: false
	});
};
const defGet = (o, name, get) => {
	Object.defineProperty(o, name, {
		get,
		configurable: false,
		enumerable: false
	});
};

const defGetSet = (o, name, get, set) => {
	Object.defineProperty(o, name, {
		get,
		set,
		configurable: false,
		enumerable: false
	});
};

/* harmony default export */ __webpack_exports__["default"] = ({
	isPojo,
	append,
	merge,
	filter,
	buildPropertyFilter,
	defValue,
	defGet,
	defGetSet
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: privateProperty, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "privateProperty", function() { return privateProperty; });
const PRIVATE_PROPERTIES = new WeakMap();
const privateStore = (obj) => {
	if(PRIVATE_PROPERTIES.has(obj))
		return PRIVATE_PROPERTIES.get(obj);
	
	const data = {};
	PRIVATE_PROPERTIES.set(obj, data);
	return data;
};

const privateProperty = function(obj, name, value) {
	const data = privateStore(obj);
	if(arguments.length === 1)
		return data;
	else if(arguments.length === 2)
		return data[name];
	else if(arguments.length === 3)
		data[name] = value;
	else
		throw new Error("Not allowed size of arguments!");
};

/* harmony default export */ __webpack_exports__["default"] = ({privateProperty});

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: timeoutPromise, lazyPromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutPromise", function() { return timeoutPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyPromise", function() { return lazyPromise; });
/* harmony import */ var _ObjectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectUtils */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");


const timeoutPromise = (fn, ms) =>{
	let canceled = false;
	let timeout = null;
	const promise = new Promise((r, e) => {
		timeout = setTimeout(()=> {
			timeout = null;
			fn(r,e);
		}, ms)
	});

	const then = promise.then;
	promise.then = (fn) => {
		then.call(promise, (result) => {
			if(!undefined.canceled)
				return fn(result);
		});
	}

	Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defValue"])(promise, "cancel", () => {
		if(timeout){
			clearTimeout(timeout);
			canceled = true;
		}
	});
	Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, canceld, () => canceled);

	return promise;
}


const lazyPromise = () => {
		let promiseResolve = null;
		let promiseError = null;

		const promise = new Promise((r, e) => {
			promiseResolve = r;
			promiseError = e;
		});

		let resolved = false;
		let error = false;
		let value = undefined;

		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defValue"])(promise, "resolve", (result) => {
			value = result;
			resolved = true;
			if (value instanceof Error) {
				error = true;
				promiseError(value);
			} else promiseResolve(value);
		});

		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "value", () => value);
		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "error", () => error);
		Object(_ObjectUtils__WEBPACK_IMPORTED_MODULE_0__["defGet"])(promise, "resolved", () => resolved);

		return promise;
};
/* harmony default export */ __webpack_exports__["default"] = ({
	lazyPromise,
	timeoutPromise
});


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.hashcode)
	String.prototype.hashcode = function() {
		if (this.length === 0)
			return 0;
		
		let hash = 0;
		const length = this.length;
		for (let i = 0; i < length; i++) {
			const c = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + c;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Context.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Context.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Context; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PromiseUtils */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PromiseUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _Directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Directive */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Template */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");






const PRIVATE_WAIT = "wait";
const PRIVATE_CALLBACKS = "callbacks";
const PRIVATE_IGNOREDIRECTIVES = "ignoreDirectives";

const CONTEXTCLONE = new Set();
const CONTEXTS = new Map();
const WARNTIME = 1000;
const CRITICALTIME = 10000;

let observerTimeout = null;
const observe = (context) => {
	CONTEXTS.set(context, Date.now());
	runObserver();
};
const runObserver = () => {
	if (observerTimeout == null) {
		observerTimeout = setTimeout(() => {
			observerTimeout = null;
			const time = Date.now();
			CONTEXTS.forEach((createTime, context) => {
				const delta = time - createTime;
				if (context.closed) CONTEXTS.delete(context);
				else {
					if (delta > CRITICALTIME) {
						console.error("context lives longer then 10s", delta / 1000, context);
					} else if (delta > WARNTIME) {
						console.warn("context lives longer then 1s", delta / 1000, context);
					}
				}
			});
			console.log("open context:", CONTEXTS.size);
			if (CONTEXTS.size > 0) runObserver();
		}, 1000);
	}
};

const toTemplate = (template) => {
	if (template instanceof _Template__WEBPACK_IMPORTED_MODULE_4__["default"]) return template.importContent();
	else if (typeof template === String) return create(template);
	return template;
};

let id = 0;
class Context {
	constructor({ resolver, renderer, template, container, root, mode = "replace", target = null, parent = null, ignoreDirective }) {
		if (!resolver) throw new Error('Parameter "resolver" is required!');
		if (!renderer) throw new Error('Parameter "renderer" is required!');
		if (!template) throw new Error('Parameter "template" is required!');
		if (!container) throw new Error('Parameter "container" is required!');
		if (!root) throw new Error('Parameter "root" is required!');

		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "id", parent ? `${parent.id}->${id++}` : `root::${id++}`);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "depth", parent ? parent.depth + 1 : 0);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "parent", parent);
		//defValue(this, "resolver", resolver);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "renderer", renderer);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "root", root);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "template", toTemplate(template));
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "mode", mode);
		Object(_default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_1__["defValue"])(this, "subcontexts", new Set());
		const wait = Object(_default_js_defaultjs_common_utils_src_PromiseUtils__WEBPACK_IMPORTED_MODULE_0__["lazyPromise"])();
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_IGNOREDIRECTIVES, ignoreDirective instanceof Set ? ignoreDirective : new Set());
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_WAIT, wait);
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_CALLBACKS, []);

		this.content = null;
		this.container = container;
		this.target = target;
		this.resolver = resolver;

		/* execution flags */
		this.stop = false;
		this.ignore = false;
		//console.log(`context={"depth":${this.depth} }, "id": ${this.id}`);
		//this.createtAt = new Error();

		if (parent) {
			parent.subcontexts.add(this);
		}
	}

	get closed() {
		return Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_WAIT).resolved;
	}

	ignoreDirective(directive) {
		const ignoreDirectives = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_IGNOREDIRECTIVES);
		directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__["default"] ? ignoreDirectives.add(directive.name) : ignoreDirectives.add(directive);
	}

	acceptDirective(directive) {
		const ignoreDirectives = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_IGNOREDIRECTIVES);
		if (directive instanceof _Directive__WEBPACK_IMPORTED_MODULE_3__["default"]) return !(ignoreDirectives.has(directive.name) || ignoreDirectives.has(directive));

		return !ignoreDirectives.has(directive);
	}

	finished(callback) {
		if (this.parent) this.parent.finished(callback);
		else this.ready(callback);
	}

	async ready(callback) {
		const callbacks = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_CALLBACKS);
		if (callback) {
			if (callback instanceof Array) callback.forEach((callback) => this.wait.then(callback));
			else if (callback instanceof Promise) callbacks.push(async () => await callback);
			else if (typeof callback === "function") callbacks.push(callback);
		} else {
			const wait = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_2__["privateProperty"])(this, PRIVATE_WAIT);
			if (!wait.resolved) {
				if (!this.ignore) for (let callback of callbacks) await callback(this);

				for (let child of this.subcontexts) await child.ready();

				if (this.parent) this.parent.subcontexts.delete(this);

				wait.resolve(this);
			}

			return wait;
		}
	}

	subContext({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: this, ignoreDirective });
	}

	clone({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return new Context({ resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective });
	}

	toRenderOption({ resolver = this.resolver, renderer = this.renderer, template = this.template, container = this.container, root = this.root, mode = this.mode, target = this.target, ignoreDirective = null } = {}) {
		return { resolver, renderer, template, container, mode, root, target, parent: null, ignoreDirective };
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Directive.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Directive; });
const DEFINED_DIRECTIVES = [];

const defineDirective = ({ directive }) => {
	if (!(directive instanceof Directive))
		throw new Error("Implementation dosn't extend Directive class!");

	if (directive.rank < Directive.MIN_RANK)
		throw new Error("The rank of a directive can't be lower as " + Directive.MIN_RANK + "!");

	if (directive.rank > Directive.MAX_RANK)
		throw new Error("The rank of a directive can't be grater as " + Directive.MAX_RANK + "!");

	DEFINED_DIRECTIVES.push(directive);
	DEFINED_DIRECTIVES.sort((a, b) => {
		const phase = a.phase - b.phase;
		if(phase == 0)
			return a.rank - b.rank;
			
		return phase;
	});
};

const PHASE = {
	init: 0,
	data: 1,
	template: 2,
	content: 3,
	finish: 4
};

class Directive {

	static get PHASE() { return PHASE };
	static get MIN_RANK() { return 0 };
	static get MAX_RANK() { return 100000 };

	constructor() { };

	get name() { }
	get rank() { }
	get phase() {return PHASE.finish}

	/**
	 * need to be implemented
	 * 
	 * return DirectiveResult
	 */
	async execute(context) {
		return context;
	}


	static define(option) {
		defineDirective(option);
	}

	static get directives() {
		return DEFINED_DIRECTIVES;
	}
};

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Element.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Element.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DirectiveElement; });
class DirectiveElement extends HTMLElement{
	constructor(){
		super();
		this.hidden = true;
	}
	
	/**
	 * need to be implemented
	 * 
	 */
	async execute({template, context}){
		context.content = template.cloneNode(true);
		return context;
	};	
}

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Renderer.js ***!
  \******************************************************************************/
/*! exports provided: SCOPES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCOPES", function() { return SCOPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _default_js_defaultjs_extdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-extdom */ "./node_modules/@default-js/defaultjs-extdom/index.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _Context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context.js */ "./node_modules/@default-js/defaultjs-template-language/src/Context.js");
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements */ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js");









const SCOPES = {
	application: "application",
	data: "data",
	render: "render",
	container: "container",
	node: "node",
	directive: "directive",
};

const APPLICATION_SCOPE_RESOLVER = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.application });

const MODEWORKER = {
	replace: async ({ container, target = null, content }) => {
		if (target) {
			target.replace(content);
		} else {
			container.empty();
			container.append(content);
		}
	},
	append: async ({ container, target = null, content }) => {
		if (target) target.after(content);
		else container.append(content);
	},
	prepend: async ({ container, target = null, content }) => {
		if (target) target.before(content);
		else container.prepend(content);
	},
};

const loadTemplateContent = async (template, renderer) => {
	if (template) {
		template = await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template);
		return template.importContent();
	} else if (renderer.template) {
		return await renderer.template.importContent();
	}

	throw new Error("No content template specified!");
};

const addContent = async (context) => {
	if (context.content) {
		const modeworker = MODEWORKER[context.mode];
		if (!modeworker) throw new Error('The "' + context.mode + '" is not supported!');
		await modeworker(context);
	}
};

const renderContainer = async (context) => {
	let { template, resolver } = context;
	if (!template || template.length == 0) return context;

	let content = [];
	for (let nodeTemplate of template) {
		nodeTemplate.normalize();
		const nodeResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.node, context: null, parent: resolver });
		const nodeContext = await renderNode(context.subContext({ template: nodeTemplate, resolver: nodeResolver }));
		await nodeContext.ready();
		const node = nodeContext.content;
		if (node) {
			if (node instanceof Array) content = content.concat(node);
			if (node instanceof NodeList || node instanceof HTMLCollection) content = content.concat(Array.from(node));
			else if (node instanceof Node) content.push(node);
		}
	}

	context.content = content.length != 0 ? content : null;
	return context;
};

const renderNode = async (context) => {
	try {
		let { template, renderer } = context;
		if (template instanceof _Element_js__WEBPACK_IMPORTED_MODULE_5__["default"]) await template.execute(context);
		else await executeDirectives(context);

		const { ignore, content } = context;

		if (!ignore && content) {
			let { resolver } = context;
			const subTemplate = context.template.childNodes;
			if (subTemplate && subTemplate.length > 0) {
				const containerResolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.container, context: null, parent: resolver });
				const subContext = await renderer.render(context.subContext({ container: content, template: subTemplate, resolver: containerResolver }));
				await subContext.ready();
			}
		}

		if (context.content && context.content.tagName && context.content.tagName == "JSTL") context.content = context.content.childNodes; //special case to support the old "<jstl>" tag.
	} catch (e) {
		console.error("error at render node:", e, context);
	}
	return context;
};

const executeDirectives = async (context) => {
	const directives = _Directive_js__WEBPACK_IMPORTED_MODULE_4__["default"].directives;
	const length = directives.length;
	for (let i = 0; i < length && !context.stop; i++) {
		const directive = directives[i];
		try {
			if (context.acceptDirective(directive)) await directive.execute(context);
		} catch (e) {
			console.error("error at directive:", e, directive, context);
		}
	}
	return context;
};

class Renderer {
	constructor({ template, data } = {}) {
		if (template && !(template instanceof _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"])) throw new Error("template must be an instance of Template!");

		this.template = template;
		this.resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.data, context: data ? data : {}, parent: APPLICATION_SCOPE_RESOLVER });
	}

	/**
	 * @param
	 * 		container HTMLElement -> target to render in
	 * @param
	 * 		data Object|... -> data to used at rendering
	 * @param
	 * 		template Template|Node|NodeList|HTMLCollection|String -> template to render
	 * @param
	 * 		mode "append"|"insert"|"replace"
	 * @param
	 * 		target
	 */
	async render(context) {
		const calledWithContext = context instanceof _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"];
		if (!calledWithContext) {
			let { template = null, data = null, container, root, mode, target } = context;
			template = await loadTemplateContent(template, this);
			const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ name: SCOPES.render, context: data, parent: this.resolver });
			context = new _Context_js__WEBPACK_IMPORTED_MODULE_3__["default"]({ resolver, renderer: this, template: template, container, root: root ? root : container, mode: mode ? mode : "replace", target });
		} else if (context.closed) throw new Error("calling with closed context", context);

		const template = context.template;
		if (template instanceof Node) await renderNode(context);
		else await renderContainer(context);
		
		await addContent(context);

		if (!calledWithContext)
			await context.ready();

		return context;
	}

	static async build({ template, data } = {}) {
		if (template && template instanceof Promise) template = await template;

		template = template ? await _Template_js__WEBPACK_IMPORTED_MODULE_2__["default"].load(template) : null;
		return new Renderer({ template, data });
	}

	static async render({ container, data, template, mode, target }) {
		const renderer = new Renderer({ template, data });
		return renderer.render({ container, mode, target });
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/Template.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/Template.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/javascript/String.js */ "./node_modules/@default-js/defaultjs-template-language/node_modules/@default-js/defaultjs-common-utils/src/javascript/String.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_default_js_defaultjs_common_utils_src_javascript_String_js__WEBPACK_IMPORTED_MODULE_0__);


const CACHE = {};
const getKey = (template, cache, alias) => {
	if (!cache) return null;

	let key = null;
	if (alias) key = alias;
	else if (typeof template === "string") key = template;
	else if (template instanceof URL) key = template.toString();
	else if (template instanceof HTMLElement) key = template.selector();

	if (key) return key.hashcode();

	return null;
};

const fromURL = async (url, cache, key) => {
	const response = await fetch(url.toString());
	const source = await response.text();
	return fromSource(source, cache, key);
};

const fromSource = async (source, cache, key) => {
	return fromElement(create(source, true), cache, key);
};

const fromElement = async (element, cache, key) => {
	let template = null;
	if (element instanceof HTMLTemplateElement) template = new Template(element, key);
	else {
		template = document.createElement("template");
		if (element instanceof Node || element instanceof NodeList || element instanceof HTMLCollection || element instanceof Array) template.content.append(element.cloneNode(true));
		else throw new Error("Template type is not supported!");

		template = new Template(template, key);
	}

	if (!template) throw new Error("Template can't loaded!");

	if (cache && key) CACHE[key] = template;

	return template;
};

class Template {
	constructor(template, key) {
		this.template = template;
		this.key = key;
	}

	importContent(doc = document) {
		let imported = doc.importNode(this.template, true);
		return imported.content.childNodes;
	}

	remove() {
		if (this.key && CACHE[this.key]) delete CACHE[this.key];
	}

	static async fetch(url, cache = true, alias = null) {
		if (typeof url === "string") {
			return Template.load(new URL(url, loaction), cache, alias);
		} else if (url instanceof URL) return Template.load(url, cache, alias);

		new Error("The url isn't a allowed type! -> [String|URL] required!");
	}

	static async load(template, cache = true, alias = null) {
		if (template instanceof Template) return template;

		const key = getKey(template, cache, alias);
		if (key && CACHE[key]) return CACHE[key];
		else if (typeof template === "string") {
			return fromSource(template, cache, key);
		} else if (template instanceof URL) return await fromURL(template, cache, key);
		else if (template instanceof Node || template instanceof NodeList || template instanceof HTMLCollection || template instanceof HTMLTemplateElement) return fromElement(template, cache, key);

		new Error("The template isn't a allowed type! -> [String|URL|Node|NodeList|HTMLCollection|Template] required!");
	}
}


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const ATTRIBUTE_NAME = /(jstl)?(\?)?(@)?([^\?@]+)/i;

const DEFAULT_EVENT_FUNCTION = "default";
const EVENTFUNCTIONS = {
	delegate: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = await resolver.resolveText(handle, handle);
		content.on(event, delegater(eventhandle, setting));
	},
	toggleclass: async (event, handle, setting, type, resolver, content, options, context) => {
		const clazz = options.shift();
		const selector = await resolver.resolveText(handle, handle);		
		content.on(event, (event) => {
			event.preventDefault();
			content.closests(selector).toggleClass(clazz);
		});
	},
	toggleattribute: async (event, handle, setting, type, resolver, content, options, context) => {
		const attribute = options.shift();
		const selector = await resolver.resolveText(handle, handle);		
		content.on(event, (event) => {
			event.preventDefault();
			content.closests(selector).forEach(element => {
				element.toggleAttribute(attribute)				
			});
		});
	},
	[DEFAULT_EVENT_FUNCTION]: async (event, handle, setting, type, resolver, content, options, context) => {
		const eventhandle = await resolver.resolve(handle, handle);

		if (!eventhandle) console.error(new Error("Can't resolve \"" + handle + '" to event handle!'));
		else if (typeof eventhandle === "function") content.on(event, eventhandle);
		else if (typeof eventhandle === "string") content.on(event, delegater(eventhandle, setting));
		else if (typeof eventhandle === "object") {
			const { capture = false, passive = false, once = false } = eventhandle;
			content.on(event, eventhandle.eventHandle, { capture, passive, once });
		}
	},
};

const bindAttribute = async ({ condition, name, value, context }) => {
	const { resolver, content, template } = context;

	let attribute = !condition ? value : template.attr(name);
	condition = condition ? value : template.attr("?" + name);
	const hasValue = isValue(attribute);

	if (condition && hasValue) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, await resolver.resolveText(attribute, attribute));
	} else if (condition) {
		condition = await resolver.resolve(condition, false);
		if (condition === true) content.attr(name, true);
	} else if (hasValue) {
		content.attr(name, await resolver.resolveText(attribute, attribute));
	}
};

const isValue = (value) => {
	return value != null && typeof value !== "undefined";
};

const bindEvent = async ({ condition, name, value, context }) => {
	const { resolver, template, content } = context;

	condition = condition ? value : template.attr("?@" + name);
	let handle = !condition ? value : template.attr("@" + name);
	let split = name.split(":");
	const event = split.shift();
	const type = (split.shift() || DEFAULT_EVENT_FUNCTION).toLowerCase();

	const setting = {
		bubble: false,
	};

	if (condition && handle) {
		if ((await resolver.resolve(condition, false)) == true) await binding(event, handle, setting, type, resolver, content, split, context);
	} else if (handle) await binding(event, handle, setting, type, resolver, content, split, context);
};

const binding = async (event, handle, setting, type, resolver, content, options, context) => {
	const binder = EVENTFUNCTIONS[type];
	if (binder) return binder(event, handle, setting, type, resolver, content, options, context);
};

const delegater = function (delegate, setting) {
	return function (event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.currentTarget) event.currentTarget.trigger(delegate, event);
		else event.target.trigger(delegate, event);
	};
};

class Attribute extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "attribute";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content;
	}

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement)) return context;

		const processed = new Set();
		for (const attribute of template.attributes) {
			const [, jstl, condition, event, name] = ATTRIBUTE_NAME.exec(attribute.name);
			if (!jstl && !processed.has(name)) {
				const value = attribute.value;

				if (event) await bindEvent({ condition, event, name, value, context });
				else await bindAttribute({ condition, name, value, context });
			}
			processed.add(name);
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Attribute() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class Choose extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "choose" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.hasAttribute("jstl-choose") || context.template.children.length == 0)
			return context;

		const { template, resolver } = context;
		let resolved = false;
		const whens = template.find(":scope > [jstl-when]");
		const length = whens.length;
		for (let i = 0; i < length; i++) {
			const node = whens[i];
			if (!resolved && (await resolver.resolve(node.attr("jstl-when"), false)))
				resolved = true;
			else
				node.remove();
		}

		if (resolved)
			template.find(":scope > [jstl-otherwise]").remove();

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Choose() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const MODES = {
	"remote": async ({ data, context }) => {		
		const {resolver, template} = context;
		data = await resolver.resolveText(data);
		data = new URL(data, location.origin);
		let option = await resolver.resolveText(template.attr("jstl-data-option") || "{}");
		option = JSON.parse(option);

		data = await fetch(data.toString(), option);
		return data.json();
	},	
	"set": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolve(data);
		return data;
	},
	"direct": async ({ data, context }) => {
		const {resolver} = context;
		
		data = await resolver.resolveText(data);
		return data;
	}
};

const updateContext = ({ varname, data, scope, context }) => {
	if (varname)
		context.resolver.updateData(varname, data, scope);
	else if (scope)
		context.resolver.mergeContext(data, scope);
	else{
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });
		//context = context.subContext({resolver});
		context.resolver = resolver;
	}
	
		
	return context;
};



class Data extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "data" }
	get rank() { return 1000 }
	get phase(){return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.data}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-data"))
			return context;
			
		try {
			const { template } = context;			
			const mode = MODES[(template.attr("jstl-data-mode") || "remote")];
			if (!mode)
				throw new Error("The jstl-data-mode is unsupported!");

			let data = template.attr("jstl-data");
			data = await mode({ data, context });

			const varname = template.attr("jstl-data-var");
			const scope = template.attr("jstl-data-scope");
			context = updateContext({ varname, data, scope, context });
		} catch (e) {
			console.error(e, context.template);
		}

		return context;

	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Data() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const ATTRIBUTE = {
	DATA: "jstl-foreach",
	VAR: "jstl-foreach-var",
	STATUS: "jstl-foreach-status",
	COUNT: "jstl-foreach-count",
	START: "jstl-foreach-start",
	STEP: "jstl-foreach-step",
	CONDITION: "jstl-foreach-condition"
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;

	count = await resolver.resolve(count);
	const length = start + (count * step);
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count
		};
		stop = !(await iterate(iteration, option));
	}
};

const doForeach = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array))
		array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {}
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, container, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-foreach", parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition)
		return false;
	const itemContext = context.subContext({ resolver, container, template, mode: "append" });
	await renderer.render(itemContext);
	await itemContext.ready();
	return true;
};

class Foreach extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "foreach" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 2 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template }

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT)))
			return context;

		context.ignore = true;
		try {
			const { template, resolver, renderer, content } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template.childNodes,
				resolver,
				renderer,
				container: content,
				context
			};
			if ((!option.data || option.data == "") && option.count)
				await doCount(option);
			else
				await doForeach(option);

		} catch (error) {
			console.error("error at jstl-foreach:", error);
		}
		return context;

	}
};

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Foreach() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/If.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


class If extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "if" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1000 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init }

	async execute(context) {
		const { template } = context;
		if (!(template instanceof HTMLElement) || !template.attr("jstl-if"))
			return context;

		const expression = template.attr("jstl-if");
		const resolver = context.resolver;
		const result = await resolver.resolve(expression, false);
		if (!result) {
			context.content = null;
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new If() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _Template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Template.js */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");



class Include extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "include";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || !context.template.attr("jstl-include")) return context;
		try {
			const { template, resolver, renderer } = context;
			let include = template.attr("jstl-include");
			include = await resolver.resolveText(include);
			include = new URL(include, location);
			include = await _Template_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(include);

			const mode = template.attr("jstl-include-mode") || "replace";

			const subContext = context.subContext({ template: include, container: context.content, mode});
			await renderer.render(subContext);
			await subContext.ready();
			context.ignore;

			return context;
		} catch (e) {
			console.error(e, context.template);
			return context;
		}
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Include() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");



class Initial extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return "initial";
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.init;
	}

	async execute(context) {
		const { template, renderer, resolver } = context;
		if (!(template instanceof Element)) {
			context.content = document.importNode(template, true);
		} else if (template.attr("jstl-async")) {
			context.content = new _elements_Replace_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
			template.attr("jstl-async", null);
			const renderOption = context.toRenderOption({ mode: "replace", target: context.content });
			setTimeout(() => {
				renderer.render(renderOption);
			}, parseInt(template.attr("jstl-async") || "250") || 250);
			context.stop = true;
			context.ignore = true;
		} else if (template.attr("jstl-ignore")) {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		} else if (template instanceof HTMLTemplateElement) {
			context.content = document.createElement(template.tagName);
			const subContext = context.subContext({ template: template.content.childNodes, container: context.content.content });
			await renderer.render(subContext);			
			context.stop = true;
			context.ignore = true;
		} else if (template.hasAttribute("jstl-tagname")) {
			let tagname = template.attr("jstl-tagname").trim();
			if (tagname.length > 0) context.content = document.createElement(await resolver.resolveText(template.attr("jstl-tagname")));
			else {
				context.content = document.importNode(template, true);
				context.stop = true;
				context.ignore = true;
			}
		} else if (template.tagName) {
			context.content = document.createElement(template.tagName);
		} else {
			context.content = document.importNode(template, true);
			context.stop = true;
			context.ignore = true;
		}

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Initial() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const NAME = "on-finished";
const ATTRIBUTE_ON_FINISHED = `jstl-${NAME}`;
const ATTRIBUTE_ON_FINISHED_ASYNC = `${ATTRIBUTE_ON_FINISHED}-async`;

class OnFinished extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return NAME }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_RANK }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.finish }



	async execute(context) {
		const { template, content, root } = context;
		if (!(template instanceof HTMLElement) || !template.hasAttribute(ATTRIBUTE_ON_FINISHED))
			return context;

		const expression = template.attr(ATTRIBUTE_ON_FINISHED);
		const asyncCall = template.hasAttribute(ATTRIBUTE_ON_FINISHED_ASYNC);

		const data = {
			$element: content,
			$root: root,
			$template: template
		};
		const resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: "jstl-data", parent: context.resolver });


		context.finished(async () => {
			try {
				if(!asyncCall)
					return resolver.resolve(expression, null);
					
				resolver.resolve(expression, null);
			} catch (e) {
				console.error(e);
			}
		});

		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new OnFinished() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver.js */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");



const DIRECTIVENAME = "jstl-repeat";
const IGNOREDIRECTIVE = new Set([DIRECTIVENAME]);

const ATTRIBUTE = {
	DATA: `${DIRECTIVENAME}`,
	VAR: `${DIRECTIVENAME}-var`,
	STATUS: `${DIRECTIVENAME}-status`,
	COUNT: `${DIRECTIVENAME}-count`,
	START: `${DIRECTIVENAME}-start`,
	STEP: `${DIRECTIVENAME}-step`,
	CONDITION: `${DIRECTIVENAME}-condition`,
};

const doCount = async (option) => {
	let { start, step, count, varname, status, resolver } = option;
	count = await resolver.resolve(count);
	const length = start + count * step;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = i;
		iteration[status] = {
			index: i,
			number: i + 1,
			step,
			count,
		};
		stop = !(await iterate(iteration, option));
	}
};

const doRepeat = async (option) => {
	let { data, start, step, count, varname, status, resolver } = option;

	data = await resolver.resolve(data);
	let array = data;
	if (!(data instanceof Array)) array = Object.getOwnPropertyNames(data);

	count = count != "" ? await resolver.resolve(count, 0) : null;
	const length = count ? Math.min(start + count, array.length) : array.length;
	let stop = false;
	for (let i = start; i < length && !stop; i = i + step) {
		const iteration = {};
		iteration[varname] = data[i];
		iteration[status] = {
			index: i,
			number: i + 1,
			count: length,
			data,
		};
		stop = !(await iterate(iteration, option));
	}
};

const iterate = async (data, option) => {
	let { template, resolver, renderer, condition, context } = option;
	resolver = new _default_js_defaultjs_expression_language_src_ExpressionResolver_js__WEBPACK_IMPORTED_MODULE_1__["default"]({ context: data, name: DIRECTIVENAME, parent: resolver });

	condition = condition ? await resolver.resolve(condition, false) : false;
	if (condition) return false;

	const itemContext =  context.subContext({ resolver, template, mode: "append", ignoreDirective: IGNOREDIRECTIVE })
	await renderer.render(itemContext);
	await itemContext.ready();

	return true;
};

class Repeat extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() {
		return DIRECTIVENAME;
	}
	get rank() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 3;
	}
	get phase() {
		return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.template;
	}

	async execute(context) {
		if (!(context.template instanceof HTMLElement) || (!context.template.attr(ATTRIBUTE.DATA) && !context.template.attr(ATTRIBUTE.COUNT))) return context;

		try {
			const { template, resolver, renderer, content, container } = context;
			const option = {
				data: (template.attr(ATTRIBUTE.DATA) || "").trim(),
				count: (template.attr(ATTRIBUTE.COUNT) || "").trim(),
				start: await resolver.resolve(template.attr(ATTRIBUTE.START) || "0"),
				step: await resolver.resolve(template.attr(ATTRIBUTE.STEP) || "1"),
				varname: (template.attr(ATTRIBUTE.VAR) || "item").trim(),
				status: (template.attr(ATTRIBUTE.STATUS) || "status").trim(),
				condition: template.attr(ATTRIBUTE.CONDITION),
				template: template,
				tagname: content.tagName,
				resolver,
				renderer,
				container,
				context,
			};
			if ((!option.data || option.data == "") && option.count) await doCount(option);
			else await doRepeat(option);
		} catch (error) {
			console.error("error at jstl-repeat:", error);
		}

		context.content = null;
		context.stop = true;
		context.ignore = true;
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new Repeat() });


/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Directive.js */ "./node_modules/@default-js/defaultjs-template-language/src/Directive.js");


const DEFAULT_OPTION = {
	mode: "text",
	unsecure: false,
	preventFormat : false,
	maxLength: 0	
};

const SECURE_HTML_FILTER = "script, style, body, html, head, object, link";

const readOption = async (parent, context) => {
	const resolver = context.resolver;
	return {
		mode: await resolver.resolveText((parent.attr("jstl-text-content-type") || "text").trim().toLowerCase()),
		unsecure: parent.hasAttribute("jstl-text-unsecure"),
		preventFormat: !!parent.attr("jstl-text-prevent-format") || false,
		maxLength: parseInt(await resolver.resolveText(parent.attr("jstl-text-trim-length") || "0"))
	};
};

const trimTextLength = (text, length) => {
	return text.length > length ? text.substring(0, length - 3).trim() + "..." : text;
};

const MODES = {
	"text" : async (option, context) => {
		const {content, resolver, template} = context;
		
		let text = await resolver.resolveText(template.textContent);		
		text = create(text,true).content.textContent;
		if(option.maxLength > 0)
			text = trimTextLength(text, option.maxLength);		
		
		content.textContent = text;		
	},
	"html": async (option, context) => {
		const {resolver, template} = context;
		
		let content = await resolver.resolveText(template.textContent);		
		content = create(content,true);		
		content = document.importNode(content.content, true);
		
		if(option.unsecure)
			context.content = content;			
		else{
			content.find(SECURE_HTML_FILTER).remove();			
			context.content = content;
		}
	}
};


class TextContent extends _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor() {
		super();
	}

	get name() { return "text" }
	get rank() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_RANK + 1 }
	get phase() { return _Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].PHASE.content }



	async execute(context) {
		const { template } = context;
		if (!(template instanceof Text) || template.textContent.trim().length == 0 || (template.parentElement && template.parentElement.hasAttribute("jstl-text-ignore")))
			return context;

		const parent = template.parentElement;
		const option = parent ? await readOption(parent, context) : DEFAULT_OPTION;
		
		const  mode = MODES[option.mode];
		if(!mode)
			throw new Error("Text mode \""+ option.mode + "\" is unsupported!");
		
		await mode(option, context);
		
		return context;
	}
}

_Directive_js__WEBPACK_IMPORTED_MODULE_0__["default"].define({ directive: new TextContent() });

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/directives/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/directives/index.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initial.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Initial.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Data.js");
/* harmony import */ var _If_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./If.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/If.js");
/* harmony import */ var _Choose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Choose.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Choose.js");
/* harmony import */ var _Include_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Include.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Include.js");
/* harmony import */ var _Foreach_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Foreach.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Foreach.js");
/* harmony import */ var _Repeat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Repeat.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Repeat.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Text.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Text.js");
/* harmony import */ var _Attributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Attributes.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/Attributes.js");
/* harmony import */ var _OnFinished_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OnFinished.js */ "./node_modules/@default-js/defaultjs-template-language/src/directives/OnFinished.js");











/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReplaceElement; });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./node_modules/@default-js/defaultjs-template-language/src/Element.js");


class ReplaceElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
	constructor(){
		super();
		
		this.attachShadow({mode: 'open'});
	}
	async execute({template, context}){
		return context;
	};		
}
try{customElements.define("jstl-replace", ReplaceElement);}catch(e){}//ignore

/***/ }),

/***/ "./node_modules/@default-js/defaultjs-template-language/src/elements/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@default-js/defaultjs-template-language/src/elements/index.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.js */ "./node_modules/@default-js/defaultjs-template-language/src/elements/Replace.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/HTMLRendererElement.js":
/*!************************************!*\
  !*** ./src/HTMLRendererElement.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/Component */ "./node_modules/@default-js/defaultjs-html-components/src/Component.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/DefineComponentHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/DefineComponentHelper.js");
/* harmony import */ var _default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @default-js/defaultjs-html-components/src/utils/EventHelper */ "./node_modules/@default-js/defaultjs-html-components/src/utils/EventHelper.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_ObjectUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/ObjectUtils */ "./node_modules/@default-js/defaultjs-common-utils/src/ObjectUtils.js");
/* harmony import */ var _default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @default-js/defaultjs-common-utils/src/PrivateProperty */ "./node_modules/@default-js/defaultjs-common-utils/src/PrivateProperty.js");
/* harmony import */ var _default_js_defaultjs_template_language_src_Renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @default-js/defaultjs-template-language/src/Renderer */ "./node_modules/@default-js/defaultjs-template-language/src/Renderer.js");
/* harmony import */ var _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @default-js/defaultjs-template-language/src/Template */ "./node_modules/@default-js/defaultjs-template-language/src/Template.js");
/* harmony import */ var _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @default-js/defaultjs-expression-language/src/ExpressionResolver */ "./node_modules/@default-js/defaultjs-expression-language/src/ExpressionResolver.js");









const NODENAME = Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["toNodeName"])("renderer");
const NODENAME_JSONDATA = Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["toNodeName"])("json-data").toUpperCase();
const NODENAME_REQUEST = Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["toNodeName"])("request").toUpperCase();

const EVENT_RENDERED = Object(_default_js_defaultjs_html_components_src_utils_EventHelper__WEBPACK_IMPORTED_MODULE_2__["componentEventname"])("rendered", NODENAME);

const ATTRIBUTE_TEMPLATE = "template";
const ATTRIBUTE_DATA = "data";
const ATTRIBUTE_RENDER_MODE = "render-mode"; //append, prepend, replace, self-replace
const ATTRIBUTE_SHADOWMODE = "shadowmode"; //

const ATTRIBUTE_CONDITION = "condition"; // if condtion true, than render (context???)
const ATTRIBUTE_INITRUN = "initial-run"; // default: true
const ATTRIBUTE_LISTEN_EVENT = "listen-event";
const ATTRIBUTE_LISTEN_ELEMENT = "listen-element"; //default body
const ATTRIBUTE_TRIGGER_EVENT = "trigger-event"; // trigger event on render finished
const ATTRIBUTE_INCLUDE_ONLY = "include-only";

const ATTRIBUTES = [ATTRIBUTE_TEMPLATE, ATTRIBUTE_DATA, ATTRIBUTE_RENDER_MODE, ATTRIBUTE_INCLUDE_ONLY];

const PRIVATE_TEMPLATE = "template";
const PRIVATE_LISTENER = "listener";
const PRIVATE_DATA = "data";
const PRIVATE_RENDER_TIMEOUT = "renderTimeout";

const findElement = (element, selector) => {
	try {
		return find(selector).first();
	} catch (e) {}
};

const loadTemplate = async (element) => {
	const value = element.attr(ATTRIBUTE_TEMPLATE);
	let template = null;
	if (value) {
		template = findElement(element, value);
		if (template instanceof HTMLTemplateElement) return await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__["default"].load(template, false);
		else template = await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__["default"].load(new URL(value, location));
	} else if (element.childNodes && element.childNodes.length > 0) template = await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__["default"].load(element.childNodes, false);

	return template;
};

const callRender = (element) => {
	const timeout = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(element, PRIVATE_RENDER_TIMEOUT);
	if (timeout) clearTimeout(timeout);

	Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(
		element,
		PRIVATE_RENDER_TIMEOUT,
		setTimeout(() => {
			Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(element, PRIVATE_RENDER_TIMEOUT, null);
			element.render();
		}, 100),
	);
};

const getListenElements = (renderer) => {
	const selector = renderer.attr(ATTRIBUTE_LISTEN_ELEMENT);
	if (selector) {
		const results = find(selector);
		if (results && results.length > 0) return results;
	}

	return document.body;
};

const addEventObserving = (renderer) => {
	const events = renderer.attr(ATTRIBUTE_LISTEN_EVENT);
	const element = getListenElements(renderer);

	const listener = (event) => {
		renderer.render({ event });
	};

	Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(renderer, PRIVATE_LISTENER, listener);

	element.on(events, listener);
};

const removeEventObserving = (renderer) => {
	const listender = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(renderer, PRIVATE_LISTENER);
	if (listender) {
		const element = getListenElements(renderer);
		element.removeEventListener(listener);
	}
};

const triggerEvent = (renderer, content) => {
	const events = renderer.attr(ATTRIBUTE_TRIGGER_EVENT);
	if (events) content.trigger(events);
	content.trigger(EVENT_RENDERED);
};

const mergeData = (data1, data2) => {
	return Object.assign({}, data1 ? data1 : null, data2 ? data2 : null);
};

class JSTLRendererElement extends _default_js_defaultjs_html_components_src_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();
		if (this.hasAttribute(ATTRIBUTE_SHADOWMODE)) this.attachShadow({ mode: open });
	}

	get root() {
		return this.shadowRoot || this;
	}

	async init() {
		await super.init();

		if (!this.ready.resolved) {
			Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(this, PRIVATE_TEMPLATE, await loadTemplate(this));

			if (this.hasAttribute(ATTRIBUTE_LISTEN_EVENT)) addEventObserving(this);
			if (this.attr(ATTRIBUTE_INITRUN) != "false") await this.render();
		}
	}

	async getTemplate() {
		return Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(this, PRIVATE_TEMPLATE);
	}

	async setTemplate(template) {
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(this, PRIVATE_TEMPLATE, await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__["default"].load(template));
	}

	async getData() {
		const privateData = Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(this, PRIVATE_DATA);
		if (privateData) return privateData;

		const value = this.attr(ATTRIBUTE_DATA);
		let data = null;
		if (value) {
			data = findElement(this, value);
			if (data) {
				if (data.nodeName == NODENAME_JSONDATA) data = data.json;
				else if (data.nodeName == NODENAME_REQUEST) {
					data = await data.execute({});
					data = data.json();
				} else if (data instanceof HTMLElement) {
					data = data.textContent;
					if (data && data.trim().length > 0) data = JSON.parse(data);
				}
			} else {
				data = await fetch(new URL(value, location).toString());
				data = await data.json();
			}
		}

		return data;
	}

	async setData(data) {
		await this.ready;
		Object(_default_js_defaultjs_common_utils_src_PrivateProperty__WEBPACK_IMPORTED_MODULE_4__["privateProperty"])(this, PRIVATE_DATA, data);
	}

	async render({ template, data, event } = {}) {
		const container = this.root;

		let context = mergeData(data, event);

		const includeOnly = this.hasAttribute(ATTRIBUTE_INCLUDE_ONLY);
		const condition = await _default_js_defaultjs_expression_language_src_ExpressionResolver__WEBPACK_IMPORTED_MODULE_7__["default"].resolve(this.attr(ATTRIBUTE_CONDITION) || "true", context, false);
		if (!condition) return;

		if (template) template = await _default_js_defaultjs_template_language_src_Template__WEBPACK_IMPORTED_MODULE_6__["default"].load(template);
		else template = await this.getTemplate(this);
		if (!template) return;

		if (!data) data = await this.getData(this);
		if (!data) data = {};

		context = mergeData(context, data);

		let replace = false;
		let mode = this.attr(ATTRIBUTE_RENDER_MODE);
		if (mode == "self-replace") {
			replace = true;
			mode = "replace";
		}

		if (includeOnly) {
			const content = template.importContent();
			if (mode == "prepend") container.prepend(content);
			else if (mode == "append") container.append(content);
			else {
				container.empty();
				container.append(content);
			}
		} else await _default_js_defaultjs_template_language_src_Renderer__WEBPACK_IMPORTED_MODULE_5__["default"].render({ template, data: context, container, mode });

		if (replace) {
			removeEventObserving(this);

			const content = container.content();
			if (content) {
				this.replace(content);
				triggerEvent(this, content);
			} else {
				triggerEvent(this, this.parent());
				this.remove();
			}
		} else triggerEvent(this, this);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue != newValue && this.isConnected) {
			if (name == ATTRIBUTE_TEMPLATE) loadTemplate(this);
			callRender(this);
		}
	}
}

Object(_default_js_defaultjs_html_components_src_utils_DefineComponentHelper__WEBPACK_IMPORTED_MODULE_1__["define"])(JSTLRendererElement);
/* harmony default export */ __webpack_exports__["default"] = (JSTLRendererElement);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJpdmF0ZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1VVSUQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Eb2N1bWVudEZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvZG9tL0V2ZW50VGFyZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MSW5wdXRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSFRNTFNlbGVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9IVE1MVGV4dEFyZWFFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vSHRtbENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9Ob2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vTm9kZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0F0dHJpYnV0ZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0RhdGFTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9FdmVudFN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0h0bWxDbGFzc1N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL0xpc3RTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tL3NyYy9kb20vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL2RvbS9leHRlbnRpb25zL1ZhbHVlU3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0RlbGVnYXRlckJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL0V4dGVuZFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4dGRvbS9zcmMvdXRpbHMvRXh0ZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHRkb20vc3JjL3V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1odG1sLWNvbXBvbmVudHMvc3JjL0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvRGVmaW5lQ29tcG9uZW50SGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWh0bWwtY29tcG9uZW50cy9zcmMvdXRpbHMvV2Vha0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvUHJpdmF0ZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1Byb21pc2VVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9qYXZhc2NyaXB0L1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL0RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9FbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL1RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0Nob29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9Gb3JlYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9JbmNsdWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvSW5pdGlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9kaXJlY3RpdmVzL09uRmluaXNoZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9SZXBlYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZGlyZWN0aXZlcy9UZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkZWZhdWx0LWpzL2RlZmF1bHRqcy10ZW1wbGF0ZS1sYW5ndWFnZS9zcmMvZWxlbWVudHMvUmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9lbGVtZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9IVE1MUmVuZGVyZXJFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBNEQ7O0FBRS9COzs7Ozs7Ozs7Ozs7O0FDRjdCO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxF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LHdHQUFrQjtBQUM1Qzs7QUFFQSxpQ0FBaUMsNEZBQVE7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZLDRGQUFRLFNBQVMsMkNBQTJDOztBQUUzRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvSEFBTTtBQUNTLGtGQUFtQixFQUFDIiwiZmlsZSI6Im1vZHVsZS1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhUTUxSZW5kZXJlckVsZW1lbnQgZnJvbSBcIi4vc3JjL0hUTUxSZW5kZXJlckVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCB7SFRNTFJlbmRlcmVyRWxlbWVudH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcclxuXHRjb25zdHJ1Y3RvcihrZXksIGNvbnRleHQpe1xyXG5cdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG5cdH1cclxuXHRcclxuXHRnZXQga2V5RGVmaW5lZCgpe1xyXG5cdFx0cmV0dXJuIHRoaXMua2V5IGluIHRoaXMuY29udGV4dDsgXHJcblx0fVxyXG5cdFxyXG5cdGdldCBoYXNWYWx1ZSgpe1xyXG5cdFx0cmV0dXJuICEhdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0Z2V0IHZhbHVlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c2V0IHZhbHVlKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZXh0W3RoaXMua2V5XSA9IGRhdGE7XHJcblx0fVxyXG5cdFxyXG5cdHNldCBhcHBlbmQoZGF0YSkge1xyXG5cdFx0aWYoIXRoaXMuaGFzVmFsdWUpXHJcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcclxuXHRcdFx0XHR2YWx1ZS5wdXNoKGRhdGEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cmVtb3ZlKCl7XHJcblx0XHRkZWxldGUgdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGxvYWQoZGF0YSwga2V5LCBjcmVhdGU9dHJ1ZSkge1xyXG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xyXG5cdFx0Y29uc3Qga2V5cyA9IGtleS5zcGxpdChcIlxcLlwiKTtcclxuXHRcdGxldCBuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGlmKCFjb250ZXh0W25hbWVdKXtcclxuXHRcdFx0XHRpZighY3JlYXRlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29udGV4dFtuYW1lXSA9IHt9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNvbnRleHQgPSBjb250ZXh0W25hbWVdO1xyXG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcclxuXHR9XHJcbn07IiwiaW1wb3J0IE9iamVjdFByb3BlcnR5IGZyb20gXCIuL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbi8qKlxyXG4gKiBhcHBlbmQgYSBwcm9wZXJ5IHZhbHVlIHRvIGFuIG9iamVjdC4gSWYgcHJvcGVyeSBleGlzdHMgaXRzIHdvdWxkIGJlIGNvbnZlcnRlZCB0byBhbiBhcnJheVxyXG4gKlxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICpcclxuICogIEByZXR1cm4gcmV0dXJucyB0aGUgY2hhbmdlZCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBhcHBlbmQgPSBmdW5jdGlvbiAoYUtleSwgYURhdGEsIGFPYmplY3QpIHtcclxuXHRpZiAodHlwZW9mIGFEYXRhICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0eSA9IE9iamVjdFByb3BlcnR5LmxvYWQoYU9iamVjdCwgYUtleSwgdHJ1ZSk7XHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2tlZCBpZiBhbiBvYmplY3QgYSBzaW1wbGUgb2JqZWN0LiBObyBBcnJheSwgTWFwIG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBiZSB0ZXN0aW5nXHJcbiAqXHJcbiAqIEByZXR1cm4gYm9vbGVhblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzUG9qbyA9IGZ1bmN0aW9uIChhT2JqZWN0KSB7XHJcblx0cmV0dXJuIHR5cGVvZiBhT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIGFPYmplY3QgIT0gbnVsbCAmJiBhT2JqZWN0LmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiT2JqZWN0XCI7XHJcbn07XHJcblxyXG4vKipcclxuICogbWVyZ2luZyBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3QuIEl0cyBvbmx5IG1lcmdlIHNpbXBsZSBvYmplY3QgYW5kIHN1YiBvYmplY3RzLiBFdmVyeSBvdGhlclxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBzYW1wbGU6IG1lcmdlKHRhcmdldCwgc291cmNlLTEsIHNvdXJjZS0yLCAuLi5zb3VyY2UtbilcclxuICpcclxuICogQHBhcmFtIGFUYXJnZXQ6b2JqZWN0IHRoZSB0YXJnZXQgb2JqZWN0IHRvIG1lcmdpbmcgaW50b1xyXG4gKiBAcGFyYW0gYVNvdXJjZXM6b2JqZWN0XHJcbiAqXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9IGZ1bmN0aW9uIChhVGFyZ2V0KSB7XHJcblx0Zm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSkuZm9yRWFjaCgoYUtleSkgPT4ge1xyXG5cdFx0XHRpZiAoaXNQb2pvKGFUYXJnZXRbYUtleV0pKSBtZXJnZShhVGFyZ2V0W2FLZXldLCBzb3VyY2VbYUtleV0pO1xyXG5cdFx0XHRlbHNlIGFUYXJnZXRbYUtleV0gPSBzb3VyY2VbYUtleV07XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhVGFyZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRQcm9wZXJ0eUZpbHRlciA9IGZ1bmN0aW9uICh7IG5hbWVzLCBhbGxvd2VkIH0pIHtcclxuXHRyZXR1cm4gKG5hbWUsIHZhbHVlLCBjb250ZXh0KSA9PiB7XHJcblx0XHRyZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSkgPT09IGFsbG93ZWQ7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgW2RhdGEsIHByb3BGaWx0ZXIsIHsgZGVlcCA9IGZhbHNlLCByZWN1cnNpdmUgPSB0cnVlLCBwYXJlbnRzID0gW10gfSA9IHt9XSA9IGFyZ3VtZW50cztcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcblx0Zm9yIChsZXQgbmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRjb25zdCBhY2NlcHQgPSBwcm9wRmlsdGVyKG5hbWUsIHZhbHVlLCBkYXRhKTtcclxuXHRcdGlmIChhY2NlcHQgJiYgKCFkZWVwIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpKSByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKGFjY2VwdCAmJiBkZWVwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcblx0XHRcdGlmICh0eXBlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgfHwgdmFsdWUgaW5zdGFuY2VvZiBNYXAgfHwgdmFsdWUgaW5zdGFuY2VvZiBTZXQgfHwgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgcGFyZW50cy5pbmNsdWRlc1t2YWx1ZV0gfHwgdmFsdWUgPT0gZGF0YSkgcmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRcdGVsc2UgcmVzdWx0W25hbWVdID0gZmlsdGVyKHZhbHVlLCBwcm9wRmlsdGVyLCB7IGRlZXAsIHJlY3Vyc2l2ZSwgcGFyZW50czogcGFyZW50cy5jb25jYXQoZGF0YSkgfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZlZhbHVlID0gKG8sIG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdHZhbHVlLFxyXG5cdFx0d3JpdGFibGU6IGZhbHNlLFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlXHJcblx0fSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBkZWZHZXQgPSAobywgbmFtZSwgZ2V0KSA9PiB7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIG5hbWUsIHtcclxuXHRcdGdldCxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZVxyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZkdldFNldCA9IChvLCBuYW1lLCBnZXQsIHNldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRzZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2VcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc1Bvam8sXHJcblx0YXBwZW5kLFxyXG5cdG1lcmdlLFxyXG5cdGZpbHRlcixcclxuXHRidWlsZFByb3BlcnR5RmlsdGVyLFxyXG5cdGRlZlZhbHVlLFxyXG5cdGRlZkdldCxcclxuXHRkZWZHZXRTZXRcclxufTtcclxuIiwiY29uc3QgUFJJVkFURV9QUk9QRVJUSUVTID0gbmV3IFdlYWtNYXAoKTtcclxuY29uc3QgcHJpdmF0ZVN0b3JlID0gKG9iaikgPT4ge1xyXG5cdGlmKFBSSVZBVEVfUFJPUEVSVElFUy5oYXMob2JqKSlcclxuXHRcdHJldHVybiBQUklWQVRFX1BST1BFUlRJRVMuZ2V0KG9iaik7XHJcblx0XHJcblx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFBSSVZBVEVfUFJPUEVSVElFUy5zZXQob2JqLCBkYXRhKTtcclxuXHRyZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcml2YXRlUHJvcGVydHkgPSBmdW5jdGlvbihvYmosIG5hbWUsIHZhbHVlKSB7XHJcblx0Y29uc3QgZGF0YSA9IHByaXZhdGVTdG9yZShvYmopO1xyXG5cdGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpXHJcblx0XHRyZXR1cm4gZGF0YVtuYW1lXTtcclxuXHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpXHJcblx0XHRkYXRhW25hbWVdID0gdmFsdWU7XHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGFsbG93ZWQgc2l6ZSBvZiBhcmd1bWVudHMhXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge3ByaXZhdGVQcm9wZXJ0eX0iLCJpbXBvcnQge2RlZlZhbHVlLCBkZWZHZXR9IGZyb20gXCIuL09iamVjdFV0aWxzXCJcclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IChmbiwgbXMpID0+e1xyXG5cdGxldCBjYW5jZWxlZCA9IGZhbHNlO1xyXG5cdGxldCB0aW1lb3V0ID0gbnVsbDtcclxuXHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcclxuXHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT4ge1xyXG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0Zm4ocixlKTtcclxuXHRcdH0sIG1zKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB0aGVuID0gcHJvbWlzZS50aGVuO1xyXG5cdHByb21pc2UudGhlbiA9IChmbikgPT4ge1xyXG5cdFx0dGhlbi5jYWxsKHByb21pc2UsIChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYoIXRoaXMuY2FuY2VsZWQpXHJcblx0XHRcdFx0cmV0dXJuIGZuKHJlc3VsdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZlZhbHVlKHByb21pc2UsIFwiY2FuY2VsXCIsICgpID0+IHtcclxuXHRcdGlmKHRpbWVvdXQpe1xyXG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHRcdGNhbmNlbGVkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRkZWZHZXQocHJvbWlzZSwgY2FuY2VsZCwgKCkgPT4gY2FuY2VsZWQpO1xyXG5cclxuXHRyZXR1cm4gcHJvbWlzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYXp5UHJvbWlzZSA9ICgpID0+IHtcclxuXHRcdGxldCBwcm9taXNlUmVzb2x2ZSA9IG51bGw7XHJcblx0XHRsZXQgcHJvbWlzZUVycm9yID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHIsIGUpID0+IHtcclxuXHRcdFx0cHJvbWlzZVJlc29sdmUgPSByO1xyXG5cdFx0XHRwcm9taXNlRXJyb3IgPSBlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHJlc29sdmVkID0gZmFsc2U7XHJcblx0XHRsZXQgZXJyb3IgPSBmYWxzZTtcclxuXHRcdGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRkZWZWYWx1ZShwcm9taXNlLCBcInJlc29sdmVcIiwgKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHR2YWx1ZSA9IHJlc3VsdDtcclxuXHRcdFx0cmVzb2x2ZWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG5cdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRwcm9taXNlRXJyb3IodmFsdWUpO1xyXG5cdFx0XHR9IGVsc2UgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwidmFsdWVcIiwgKCkgPT4gdmFsdWUpO1xyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwiZXJyb3JcIiwgKCkgPT4gZXJyb3IpO1xyXG5cdFx0ZGVmR2V0KHByb21pc2UsIFwicmVzb2x2ZWRcIiwgKCkgPT4gcmVzb2x2ZWQpO1xyXG5cclxuXHRcdHJldHVybiBwcm9taXNlO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bGF6eVByb21pc2UsXHJcblx0dGltZW91dFByb21pc2VcclxufVxyXG4iLCIvL3RoZSBzb2x1dGlvbiBpcyBmb3VuZCBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvaG93LXRvLWNyZWF0ZS1hLWd1aWQtdXVpZFxyXG5leHBvcnQgY29uc3QgVVVJRF9TQ0hFTUEgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHV1aWQgPSAoKSA9PiB7XHJcblx0Y29uc3QgYnVmID0gbmV3IFVpbnQzMkFycmF5KDQpO1xyXG5cdHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1Zik7XHJcblx0bGV0IGlkeCA9IC0xO1xyXG5cdHJldHVybiBVVUlEX1NDSEVNQS5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcblx0XHRpZHgrKztcclxuXHRcdGNvbnN0IHIgPSAoYnVmW2lkeCA+PiAzXSA+PiAoKGlkeCAlIDgpICogNCkpICYgMTU7XHJcblx0XHRjb25zdCB2ID0gYyA9PSBcInhcIiA/IHIgOiAociAmIDB4MykgfCAweDg7XHJcblx0XHRyZXR1cm4gdi50b1N0cmluZygxNik7XHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHV1aWQgfTtcclxuIiwiY29uc3QgR0xPQkFMID0gKCgpID0+IHtcclxuXHRpZih0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZ2xvYmFsO1xyXG5cdGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB3aW5kb3c7XHRcclxuXHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0cmV0dXJuIHt9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0xPQkFMOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdFByb3BlcnR5IHtcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcblx0XHR0aGlzLmtleSA9IGtleTtcblx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR9XG5cdFxuXHRnZXQga2V5RGVmaW5lZCgpe1xuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7IFxuXHR9XG5cdFxuXHRnZXQgaGFzVmFsdWUoKXtcblx0XHRyZXR1cm4gISF0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRnZXQgdmFsdWUoKXtcblx0XHRyZXR1cm4gdGhpcy5jb250ZXh0W3RoaXMua2V5XTtcblx0fVxuXHRcblx0c2V0IHZhbHVlKGRhdGEpe1xuXHRcdHRoaXMuY29udGV4dFt0aGlzLmtleV0gPSBkYXRhO1xuXHR9XG5cdFxuXHRzZXQgYXBwZW5kKGRhdGEpIHtcblx0XHRpZighdGhpcy5oYXNWYWx1ZSlcblx0XHRcdHRoaXMudmFsdWUgPSBkYXRhO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuXHRcdFx0aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0dmFsdWUucHVzaChkYXRhKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy52YWx1ZSA9IFt0aGlzLnZhbHVlLCBkYXRhXTtcblx0XHR9XG5cdH1cblx0XG5cdHJlbW92ZSgpe1xuXHRcdGRlbGV0ZSB0aGlzLmNvbnRleHRbdGhpcy5rZXldO1xuXHR9XG5cdFxuXHRzdGF0aWMgbG9hZChkYXRhLCBrZXksIGNyZWF0ZT10cnVlKSB7XG5cdFx0bGV0IGNvbnRleHQgPSBkYXRhO1xuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCJcXC5cIik7XG5cdFx0bGV0IG5hbWUgPSBrZXlzLnNoaWZ0KCkudHJpbSgpO1xuXHRcdHdoaWxlKGtleXMubGVuZ3RoID4gMCl7XG5cdFx0XHRpZighY29udGV4dFtuYW1lXSl7XG5cdFx0XHRcdGlmKCFjcmVhdGUpXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdFxuXHRcdFx0XHRjb250ZXh0W25hbWVdID0ge31cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29udGV4dCA9IGNvbnRleHRbbmFtZV07XG5cdFx0XHRuYW1lID0ga2V5cy5zaGlmdCgpLnRyaW0oKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG5ldyBPYmplY3RQcm9wZXJ0eShuYW1lLCBjb250ZXh0KTtcblx0fVxufTsiLCJpbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIi4vT2JqZWN0UHJvcGVydHkuanNcIjtcclxuLyoqXHJcbiAqIGFwcGVuZCBhIHByb3BlcnkgdmFsdWUgdG8gYW4gb2JqZWN0LiBJZiBwcm9wZXJ5IGV4aXN0cyBpdHMgd291bGQgYmUgY29udmVydGVkIHRvIGFuIGFycmF5XHJcbiAqIFxyXG4gKiAgQHBhcmFtIGFLZXk6c3RyaW5nIG5hbWUgb2YgcHJvcGVydHlcclxuICogIEBwYXJhbSBhRGF0YTphbnkgcHJvcGVydHkgdmFsdWVcclxuICogIEBwYXJhbSBhT2JqZWN0Om9iamVjdCB0aGUgb2JqZWN0IHRvIGFwcGVuZCB0aGUgcHJvcGVydHlcclxuICogIFxyXG4gKiAgQHJldHVybiByZXR1cm5zIHRoZSBjaGFuZ2VkIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpXHJcblx0XHRwcm9wZXJ0eS5hcHBlbmQgPSBhRGF0YTtcclxuXHR9XHJcblx0cmV0dXJuIGFPYmplY3Q7XHJcbn07XHJcblxyXG4vKipcclxuICogY2hlY2tlZCBpZiBhbiBvYmplY3QgYSBzaW1wbGUgb2JqZWN0LiBObyBBcnJheSwgTWFwIG9yIHNvbWV0aGluZyBlbHNlLlxyXG4gKiBcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKiBcclxuICogQHJldHVybiBib29sZWFuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNQb2pvID0gZnVuY3Rpb24oYU9iamVjdCkge1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBtZXJnaW5nIG9iamVjdCBpbnRvIGEgdGFyZ2V0IG9iamVjdC4gSXRzIG9ubHkgbWVyZ2Ugc2ltcGxlIG9iamVjdCBhbmQgc3ViIG9iamVjdHMuIEV2ZXJ5IG90aGVyIFxyXG4gKiB2YWx1ZSB3b3VsZCBiZSByZXBsYWNlZCBieSB2YWx1ZSBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0LlxyXG4gKiBcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqIFxyXG4gKiBAcGFyYW0gYVRhcmdldDpvYmplY3QgdGhlIHRhcmdldCBvYmplY3QgdG8gbWVyZ2luZyBpbnRvXHJcbiAqIEBwYXJhbSBhU291cmNlczpvYmplY3RcclxuICogXHJcbiAqIEByZXR1cm4gb2JqZWN0IHJldHVybnMgdGhlIHRhcmdldCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBtZXJnZSA9IGZ1bmN0aW9uKGFUYXJnZXQpIHtcclxuXHRmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3Qgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKS5mb3JFYWNoKGFLZXkgPT4ge1xyXG5cdFx0XHRpZiAoaXNQb2pvKGFUYXJnZXRbYUtleV0pKVxyXG5cdFx0XHRcdG1lcmdlKGFUYXJnZXRbYUtleV0sIHNvdXJjZVthS2V5XSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYVRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBidWlsZFByb3BlcnR5RmlsdGVyID0gZnVuY3Rpb24oeyBuYW1lcywgYWxsb3dlZCB9KSB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgW2RhdGEsIHByb3BGaWx0ZXIsIHtkZWVwID0gZmFsc2UsIHJlY3Vyc2l2ZSA9IHRydWUsIHBhcmVudHMgPSBbXX0gPSB7fV0gPSBhcmd1bWVudHM7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblxyXG5cdGZvciAobmFtZSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFbbmFtZV07XHJcblx0XHRjb25zdCBhY2NlcHQgPSBwcm9wRmlsdGVyKG5hbWUsIHZhbHVlLCBkYXRhKTtcclxuXHRcdGlmIChhY2NlcHQgJiYgKCFkZWVwIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpKVxyXG5cdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdGVsc2UgaWYgKGFjY2VwdCAmJiBkZWVwKSB7XHJcblx0XHRcdGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcblx0XHRcdGlmICh0eXBlICE9PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxyXG5cdFx0XHRcdHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwXHJcblx0XHRcdFx0fHwgdmFsdWUgaW5zdGFuY2VvZiBTZXRcclxuXHRcdFx0XHR8fCB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cFxyXG5cdFx0XHRcdHx8IHBhcmVudHMuaW5jbHVkZXNbdmFsdWVdXHJcblx0XHRcdFx0fHwgdmFsdWUgPT0gZGF0YSlcclxuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGZpbHRlcih2YWx1ZSwgcHJvcEZpbHRlciwge2RlZXAsIHJlY3Vyc2l2ZSwgcGFyZW50czogIHBhcmVudHMuY29uY2F0KGRhdGEpfSk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzUG9qbyxcclxuXHRhcHBlbmQsXHJcblx0bWVyZ2UsXHJcblx0ZmlsdGVyLFxyXG5cdGJ1aWxkUHJvcGVydHlGaWx0ZXJcclxufTsiLCJjb25zdCBzZWVrQXRDaGFpbiA9IChyZXNvbHZlciwgcHJvcGVydHkpID0+IHtcblx0d2hpbGUocmVzb2x2ZXIpe1xuXHRcdGNvbnN0IGRlZiA9IHJlc29sdmVyLnByb3h5LmhhbmRsZS5nZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgZmFsc2UpO1xuXHRcdGlmKGRlZilcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0XG5cdFx0cmVzb2x2ZXIgPSByZXNvbHZlci5wYXJlbnQ7XG5cdH1cdFxuXHRyZXR1cm4geyBkYXRhOiBudWxsLCByZXNvbHZlcjogbnVsbCwgZGVmaW5lZDogZmFsc2UgfTtcbn1cblxuY2xhc3MgSGFuZGxlIHtcblx0Y29uc3RydWN0b3IoZGF0YSwgcmVzb2x2ZXIpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcblx0XHR0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuXHR9XG5cdFxuXHR1cGRhdGVEYXRhKGRhdGEpe1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdH1cblxuXHRnZXRQcm9wZXJ0eURlZihwcm9wZXJ0eSwgc2VlayA9IHRydWUpIHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXMocHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIHRoaXMuY2FjaGUuZ2V0KHByb3BlcnR5KTtcblx0XHRcblx0XHRsZXQgZGVmID0gbnVsbFxuXHRcdGlmICh0aGlzLmRhdGEgJiYgcHJvcGVydHkgaW4gdGhpcy5kYXRhKVxuXHRcdFx0ZGVmID0geyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH07XG5cdFx0ZWxzZSBpZihzZWVrKVxuXHRcdFx0ZGVmID0gc2Vla0F0Q2hhaW4odGhpcy5yZXNvbHZlci5wYXJlbnQsIHByb3BlcnR5KTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZihkZWYuZGVmaW5lZClcblx0XHRcdHRoaXMuY2FjaGUuc2V0KHByb3BlcnR5LCBkZWYpO1xuXHRcdHJldHVybiBkZWY7XG5cdH1cblxuXHRoYXNQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdHJldHVybiBkZWZpbmVkO1xuXHR9XG5cdGdldFByb3BlcnR5KHByb3BlcnR5KSB7XG5cdFx0Ly9AVE9ETyB3cml0ZSB0ZXN0cyEhIVx0XG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLmdldFByb3BlcnR5RGVmKHByb3BlcnR5KTtcblx0XHRyZXR1cm4gZGF0YSA/IGRhdGFbcHJvcGVydHldIDogdW5kZWZpbmVkO1xuXHR9XG5cdHNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcblx0XHRjb25zdCB7IGRhdGEsIGRlZmluZWQgfSA9IHRoaXMuZ2V0UHJvcGVydHlEZWYocHJvcGVydHkpO1xuXHRcdGlmIChkZWZpbmVkKVxuXHRcdFx0ZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRlbHNlIHtcblx0XHRcdGlmICh0aGlzLmRhdGEpXG5cdFx0XHRcdHRoaXMuZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB7fVxuXHRcdFx0XHR0aGlzLmRhdGFbcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhY2hlLnNldChwcm9wZXJ0eSwgeyBkYXRhOiB0aGlzLmRhdGEsIHJlc29sdmVyOiB0aGlzLnJlc29sdmVyLCBkZWZpbmVkOiB0cnVlIH0pO1xuXHRcdH1cblx0fVxuXHRkZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSkge1xuXHRcdC8vQFRPRE8gd291bGQgc3VwcG9ydCB0aGlzIGFjdGlvbiBvbiBhbiBwcm94aWVkIHJlc29sdmVyIGNvbnRleHQ/Pz8gd3JpdGUgdGVzdHMhISFcdFx0XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwidW5zdXBwb3J0ZWQgZnVuY3Rpb24hXCIpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdGNvbnN0cnVjdG9yKGNvbnRleHQsIHJlc29sdmVyKSB7XG5cdFx0dGhpcy5oYW5kbGUgPSBuZXcgSGFuZGxlKGNvbnRleHQsIHJlc29sdmVyKTtcdFx0XG5cdFx0dGhpcy5kYXRhID0gbmV3IFByb3h5KHRoaXMuaGFuZGxlLCB7XG5cdFx0XHRoYXM6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmhhc1Byb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5KSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLmdldFByb3BlcnR5KHByb3BlcnR5KTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKGRhdGEsIHByb3BlcnR5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpO1xuXHRcdFx0fSxcblx0XHRcdGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbihkYXRhLCBwcm9wZXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS5kZWxldGVQcm9wZXJ0eShwcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHQvL0BUT0RPIG5lZWQgdG8gc3VwcG9ydCB0aGUgb3RoZXIgcHJveHkgYWN0aW9uc1x0XHRcblx0XHR9KTs7XG5cdH1cblx0XG5cdHVwZGF0ZURhdGEoZGF0YSl7XG5cdFx0dGhpcy5oYW5kbGUudXBkYXRlRGF0YShkYXRhKVx0XHRcblx0fVxuXHRcblx0cmVzZXRDYWNoZSgpe1xuXHRcdHRoaXMuaGFuZGxlLnJlc2V0Q2FjaGUoKTtcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0VmFsdWUge1xuXHRjb25zdHJ1Y3Rvcih2YWx1ZSl7XG5cdFx0dGhpcy5oYXNWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdH1cdFxufTsiLCJpbXBvcnQgR0xPQkFMIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9HbG9iYWwuanNcIlxyXG5pbXBvcnQgT2JqZWN0UHJvcGVydHkgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL09iamVjdFByb3BlcnR5LmpzXCI7XHJcbmltcG9ydCBPYmplY3RVdGlscyBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHMuanNcIlxyXG5pbXBvcnQgRGVmYXVsdFZhbHVlIGZyb20gXCIuL0RlZmF1bHRWYWx1ZS5qc1wiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9Db250ZXh0LmpzXCI7XHJcblxyXG5cclxuY29uc3QgRVhFQ1VUSU9OX1dBUk5fVElNRU9VVCA9IDEwMDA7XHJcbmNvbnN0IEVYUFJFU1NJT04gPSAvKFxcXFw/KShcXCRcXHsoKFthLXpBLVowLTlcXC1fXFxzXSspOjopPyhbXlxce1xcfV0rKVxcfSkvO1xyXG5jb25zdCBNQVRDSF9FU0NBUEVEID0gMTtcclxuY29uc3QgTUFUQ0hfRlVMTF9FWFBSRVNTSU9OID0gMjtcclxuY29uc3QgTUFUQ0hfRVhQUkVTU0lPTl9TQ09QRSA9IDQ7XHJcbmNvbnN0IE1BVENIX0VYUFJFU1NJT05fU1RBVEVNRU5UID0gNTtcclxuXHJcbmNvbnN0IERFRkFVTFRfTk9UX0RFRklORUQgPSBuZXcgRGVmYXVsdFZhbHVlKCk7XHJcbmNvbnN0IHRvRGVmYXVsdFZhbHVlID0gdmFsdWUgPT4ge1xyXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSlcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHJcblx0cmV0dXJuIG5ldyBEZWZhdWx0VmFsdWUodmFsdWUpO1xyXG59O1xyXG5cclxuY29uc3QgZXhlY3V0ZSA9IGFzeW5jIGZ1bmN0aW9uKGFTdGF0ZW1lbnQsIGFDb250ZXh0KSB7XHJcblx0aWYgKHR5cGVvZiBhU3RhdGVtZW50ICE9PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIGFTdGF0ZW1lbnQ7XHJcblx0XHRcclxuXHRjb25zdCBleHByZXNzaW9uID0gbmV3IEZ1bmN0aW9uKFwiY29udGV4dFwiLCBcclxuYFxyXG5yZXR1cm4gKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblx0dHJ5eyBcclxuXHRcdHdpdGgoY29udGV4dCl7XHJcblx0XHRcdCByZXR1cm4gJHthU3RhdGVtZW50fVxyXG5cdFx0fVxyXG5cdH1jYXRjaChlKXtcclxuXHRcdHRocm93IGU7XHJcblx0fVxyXG59KShjb250ZXh0KWBcclxuXHQpO1xyXG5cdFxyXG5cdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHR0aW1lb3V0ID0gbnVsbDtcclxuXHRcdGNvbnNvbGUud2FybihcImxvbmcgcnVubmluZyBzdGF0ZW1lbnQ6XCIsIGFTdGF0ZW1lbnQsIG5ldyBFcnJvcigpKTtcclxuXHR9LCBFWEVDVVRJT05fV0FSTl9USU1FT1VUKVxyXG5cdGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XHJcblx0dHJ5e1xyXG5cdFx0cmVzdWx0ID0gYXdhaXQgZXhwcmVzc2lvbihhQ29udGV4dCk7XHJcblx0fWNhdGNoKGUpe31cclxuXHRcclxuXHRpZih0aW1lb3V0KVxyXG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHJlc29sdmUgPSBhc3luYyBmdW5jdGlvbihhUmVzb2x2ZXIsIGFFeHByZXNzaW9uLCBhRmlsdGVyLCBhRGVmYXVsdCkge1xyXG5cdGlmIChhRmlsdGVyICYmIGFSZXNvbHZlci5uYW1lICE9IGFGaWx0ZXIpXHJcblx0XHRyZXR1cm4gYVJlc29sdmVyLnBhcmVudCA/IHJlc29sdmUoYVJlc29sdmVyLnBhcmVudCwgYUV4cHJlc3Npb24sIGFGaWx0ZXIsIGFEZWZhdWx0KSA6IG51bGw7XHJcblx0XHJcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZShhRXhwcmVzc2lvbiwgYVJlc29sdmVyLnByb3h5LmRhdGEpO1xyXG5cdGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblxyXG5cdGVsc2UgaWYgKGFEZWZhdWx0IGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlICYmIGFEZWZhdWx0Lmhhc1ZhbHVlKVxyXG5cdFx0cmV0dXJuIGFEZWZhdWx0LnZhbHVlO1xyXG59O1xyXG5cclxuY29uc3QgcmVzb2x2ZU1hdGNoID0gYXN5bmMgKHJlc29sdmVyLCBtYXRjaCwgZGVmYXVsdFZhbHVlKSA9PiB7XHJcblx0aWYobWF0Y2hbTUFUQ0hfRVNDQVBFRF0pXHJcblx0XHRyZXR1cm4gbWF0Y2hbTUFUQ0hfRlVMTF9FWFBSRVNTSU9OXTsgXHJcblx0XHRcclxuXHRyZXR1cm4gcmVzb2x2ZShyZXNvbHZlciwgbWF0Y2hbTUFUQ0hfRVhQUkVTU0lPTl9TVEFURU1FTlRdLCBub3JtYWxpemUobWF0Y2hbTUFUQ0hfRVhQUkVTU0lPTl9TQ09QRV0pLCBkZWZhdWx0VmFsdWUpO1xyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHR2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuXHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPT0gMCA/IG51bGwgOiB2YWx1ZTtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uUmVzb2x2ZXIge1xyXG5cdGNvbnN0cnVjdG9yKHsgY29udGV4dCA9IEdMT0JBTCwgcGFyZW50ID0gbnVsbCwgbmFtZSA9IG51bGwgfSkge1xyXG5cdFx0dGhpcy5wYXJlbnQgPSAocGFyZW50IGluc3RhbmNlb2YgRXhwcmVzc2lvblJlc29sdmVyKSA/IHBhcmVudCA6IG51bGw7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHRcdHRoaXMucHJveHkgPSBuZXcgQ29udGV4dCh0aGlzLmNvbnRleHQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNoYWluKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuY2hhaW4gKyBcIi9cIiArIHRoaXMubmFtZSA6IFwiL1wiICsgdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0IGVmZmVjdGl2ZUNoYWluKCkge1xyXG5cdFx0aWYgKCF0aGlzLmNvbnRleHQpXHJcblx0XHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmVmZmVjdGl2ZUNoYWluIDogXCJcIjtcclxuXHRcdHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LmVmZmVjdGl2ZUNoYWluICsgXCIvXCIgKyB0aGlzLm5hbWUgOiBcIi9cIiArIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBjb250ZXh0Q2hhaW4oKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdGxldCByZXNvbHZlciA9IHRoaXM7XHJcblx0XHR3aGlsZSAocmVzb2x2ZXIpIHtcclxuXHRcdFx0aWYgKHJlc29sdmVyLmNvbnRleHQpXHJcblx0XHRcdFx0cmVzdWx0LnB1c2gocmVzb2x2ZXIuY29udGV4dCk7XHJcblxyXG5cdFx0XHRyZXNvbHZlciA9IHJlc29sdmVyLnBhcmVudDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShrZXksIGZpbHRlcikge1xyXG5cdFx0aWYgKCFrZXkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5nZXREYXRhKGtleSwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZCh0aGlzLmNvbnRleHQsIGtleSwgZmFsc2UpO1xyXG5cdFx0XHRyZXR1cm4gcHJvcGVydHkgPyBwcm9wZXJ0eS52YWx1ZSA6IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcikge1xyXG5cdFx0aWYgKCFrZXkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC51cGRhdGVEYXRhKGtleSwgdmFsdWUsIGZpbHRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZih0aGlzLmNvbnRleHQgPT0gbnVsbCB8fCB0eXBlb2YgdGhpcy5jb250ZXh0ID09PSBcInVuZGVmaW5lZFwiKXtcclxuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB7fTtcdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMucHJveHkudXBkYXRlRGF0YSh0aGlzLmNvbnRleHQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0UHJvcGVydHkubG9hZCh0aGlzLmNvbnRleHQsIGtleSk7XHJcblx0XHRcdHByb3BlcnR5LnZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMucHJveHkucmVzZXRDYWNoZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bWVyZ2VDb250ZXh0KGNvbnRleHQsIGZpbHRlcikge1xyXG5cdFx0aWYgKGZpbHRlciAmJiBmaWx0ZXIgIT0gdGhpcy5uYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmVudClcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5tZXJnZUNvbnRleHQoY29udGV4dCwgZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY29udGV4dCA/IE9iamVjdFV0aWxzLm1lcmdlKHRoaXMuY29udGV4dCwgY29udGV4dCkgOiBjb250ZXh0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVzb2x2ZShhRXhwcmVzc2lvbiwgYURlZmF1bHQpIHtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IEVYUFJFU1NJT04uZXhlYyhhRXhwcmVzc2lvbik7XHJcblx0XHRcdGlmIChtYXRjaClcclxuXHRcdFx0XHRyZXR1cm4gYXdhaXQgcmVzb2x2ZU1hdGNoKHRoaXMsIG1hdGNoLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIGF3YWl0IHJlc29sdmUodGhpcywgbm9ybWFsaXplKGFFeHByZXNzaW9uKSwgbnVsbCwgZGVmYXVsdFZhbHVlKTtcclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGV4ZWN1dGluZyBzdGF0bWVudFxcXCJcIiwgYUV4cHJlc3Npb24sIFwiXFxcIjpcIiwgZSk7XHJcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUuaGFzVmFsdWUgPyBkZWZhdWx0VmFsdWUudmFsdWUgOiBhRXhwcmVzc2lvbjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIHJlc29sdmVUZXh0KGFUZXh0LCBhRGVmYXVsdCkge1xyXG5cdFx0bGV0IHRleHQgPSBhVGV4dDtcclxuXHRcdGxldCB0ZW1wID0gYVRleHQ7IC8vIHJlcXVpcmVkIHRvIHByZXZlbnQgaW5maW5pdHkgbG9vcFxyXG5cdFx0bGV0IG1hdGNoID0gRVhQUkVTU0lPTi5leGVjKHRleHQpO1xyXG5cdFx0Y29uc3QgZGVmYXVsdFZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRFxyXG5cdFx0d2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzb2x2ZU1hdGNoKHRoaXMsIG1hdGNoLCBkZWZhdWx0VmFsdWUpO1xyXG5cdFx0XHR0ZW1wID0gdGVtcC5zcGxpdChtYXRjaFswXSkuam9pbigpOyAvLyByZW1vdmUgY3VycmVudCBtYXRjaCBmb3IgbmV4dCBsb29wXHJcblx0XHRcdHRleHQgPSB0ZXh0LnNwbGl0KG1hdGNoWzBdKS5qb2luKHR5cGVvZiByZXN1bHQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKHJlc3VsdCA9PSBudWxsID8gXCJudWxsXCIgOiByZXN1bHQpKTtcclxuXHRcdFx0bWF0Y2ggPSBFWFBSRVNTSU9OLmV4ZWModGVtcCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlKGFFeHByZXNzaW9uLCBhQ29udGV4dCwgYURlZmF1bHQsIGFUaW1lb3V0KSB7XHJcblx0XHRjb25zdCByZXNvbHZlciA9IG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoeyBjb250ZXh0OiBhQ29udGV4dCB9KTtcclxuXHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gdG9EZWZhdWx0VmFsdWUoYURlZmF1bHQpIDogREVGQVVMVF9OT1RfREVGSU5FRDtcclxuXHRcdGlmICh0eXBlb2YgYVRpbWVvdXQgPT09IFwibnVtYmVyXCIgJiYgYVRpbWVvdXQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSkpO1xyXG5cdFx0XHRcdH0sIGFUaW1lb3V0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc29sdmVyLnJlc29sdmUoYUV4cHJlc3Npb24sIGRlZmF1bHRWYWx1ZSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhc3luYyByZXNvbHZlVGV4dChhVGV4dCwgYUNvbnRleHQsIGFEZWZhdWx0LCBhVGltZW91dCkge1xyXG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogYUNvbnRleHQgfSk7XHJcblx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IHRvRGVmYXVsdFZhbHVlKGFEZWZhdWx0KSA6IERFRkFVTFRfTk9UX0RFRklORUQ7XHJcblx0XHRpZiAodHlwZW9mIGFUaW1lb3V0ID09PSBcIm51bWJlclwiICYmIGFUaW1lb3V0ID4gMClcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNvbHZlci5yZXNvbHZlVGV4dChhVGV4dCwgZGVmYXVsdFZhbHVlKSk7XHJcblx0XHRcdFx0fSwgYVRpbWVvdXQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcmVzb2x2ZXIucmVzb2x2ZVRleHQoYVRleHQsIGRlZmF1bHRWYWx1ZSk7XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBidWlsZFNlY3VyZSh7Y29udGV4dCwgcHJvcEZpbHRlciwgb3B0aW9uPXtkZWVwOnRydWV9LCBuYW1lLCBwYXJlbnR9KXtcclxuXHRcdGNvbnRleHQgPSBPYmplY3RVdGlscy5maWx0ZXIoe2RhdGE6IGNvbnRleHQsIHByb3BGaWx0ZXIsIG9wdGlvbn0pO1xyXG5cdFx0cmV0dXJuIG5ldyBFeHByZXNzaW9uUmVzb2x2ZXIoe2NvbnRleHQsIG5hbWUsIHBhcmVudH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsImltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5cclxuVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcyA9IFV0aWxzLmdsb2JhbC5kZWZhdWx0anMgfHwge307XHJcblV0aWxzLmdsb2JhbC5kZWZhdWx0anMuZXh0ZG9tID0gVXRpbHMuZ2xvYmFsLmRlZmF1bHRqcy5leHRkb20gfHwge1xyXG5cdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHR1dGlscyA6IHtcclxuXHRcdFV0aWxzOiBVdGlsc1xyXG5cdH1cclxufTtcclxuXHJcblV0aWxzLmdsb2JhbC5maW5kID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmZpbmQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwucmVhZHkgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQucmVhZHkuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuY3JlYXRlID0gZnVuY3Rpb24oYUNvbnRlbnQsIGFzVGVtcGxhdGUpIHtcclxuXHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gXCJzdHJpbmdcIilcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nIVwiKTtcclxuXHRcclxuXHRjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBhQ29udGVudDtcclxuXHRpZihhc1RlbXBsYXRlKVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFxyXG5cdHJldHVybiBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpLmNoaWxkTm9kZXM7XHJcbn07XHJcblxyXG5VdGlscy5nbG9iYWwuc2NyaXB0ID0gZnVuY3Rpb24oYUZpbGUsIGFUYXJnZXQpIHtcclxuXHRpZihhRmlsZSBpbnN0YW5jZW9mIEFycmF5KVxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFGaWxlLm1hcChmaWxlID0+IFV0aWxzLmdsb2JhbC5zY3JpcHQoZmlsZSwgYVRhcmdldCkpKTtcclxuXHRcclxuXHRpZih0eXBlb2YgYUZpbGUgPT09IFwic3RyaW5nXCIpXHRcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocixlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcblx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbigpe3IoKX07XHJcblx0XHRcdHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJsb2FkIGVycm9yIVwiKX07XHJcblx0XHRcdCFhVGFyZ2V0ID8gZG9jdW1lbnQuYm9keS5hcHBlbmQoc2NyaXB0KSA6IGFUYXJnZXQuYXBwZW5kKHNjcmlwdCk7XHJcblx0XHRcdHNjcmlwdC5zcmMgPSBhRmlsZTtcclxuXHRcdH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIkZpcnN0IHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgYSBzdHJpbmchXCIpO1xyXG59OyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBSZWFkeUV2ZW50U3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL1JlYWR5RXZlbnRTdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnQsIFF1ZXJ5U3VwcG9ydCwgUmVhZHlFdmVudFN1cHBvcnQpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZG9jdW1lbnQudHJpZ2dlcihcInJlYWR5XCIpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBRdWVyeVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9RdWVyeVN1cHBvcnRcIjtcclxuaW1wb3J0IE1hbmlwdWxhdGlvblN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9NYW5pcHVsYXRpb25TdXBwb3J0XCI7XHJcblxyXG5leHRlbmRQcm90b3R5cGUoRG9jdW1lbnRGcmFnbWVudCwgUXVlcnlTdXBwb3J0LCBNYW5pcHVsYXRpb25TdXBwb3J0KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgUXVlcnlTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvUXVlcnlTdXBwb3J0XCI7XHJcbmltcG9ydCBBdHRyaWJ1dGVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvQXR0cmlidXRlU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShFbGVtZW50LFF1ZXJ5U3VwcG9ydCwgQXR0cmlidXRlU3VwcG9ydCwgTWFuaXB1bGF0aW9uU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XG5pbXBvcnQgRXZlbnRTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvRXZlbnRTdXBwb3J0XCI7XG5cbmV4dGVuZFByb3RvdHlwZShFdmVudFRhcmdldCwgRXZlbnRTdXBwb3J0KTsiLCJpbXBvcnQgZXh0ZW5kUHJvdG90eXBlIGZyb20gXCIuLi91dGlscy9FeHRlbmRQcm90b3R5cGVcIjtcclxuaW1wb3J0IEh0bWxDbGFzc1N1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9IdG1sQ2xhc3NTdXBwb3J0XCI7XHJcbmltcG9ydCBTaG93SGlkZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9TaG93SGlkZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTEVsZW1lbnQsIEh0bWxDbGFzc1N1cHBvcnQsIFNob3dIaWRlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBWYWx1ZVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9WYWx1ZVN1cHBvcnRcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTElucHV0RWxlbWVudCxWYWx1ZVN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgVmFsdWVTdXBwb3J0IGZyb20gXCIuL2V4dGVudGlvbnMvVmFsdWVTdXBwb3J0XCI7XHJcblxyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxTZWxlY3RFbGVtZW50LFZhbHVlU3VwcG9ydCk7IiwiaW1wb3J0IGV4dGVuZFByb3RvdHlwZSBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kUHJvdG90eXBlXCI7XHJcbmltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcblxyXG5leHRlbmRQcm90b3R5cGUoSFRNTFRleHRBcmVhRWxlbWVudCxFeHRlbmRlcihcIlZhbHVlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHJcblx0UHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy52YWx1ZSA9IGFyZ3VtZW50c1swXVxyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHRcclxufSkpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKEhUTUxDb2xsZWN0aW9uLCBMaXN0U3VwcG9ydCk7XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5IVE1MQ29sbGVjdGlvbi5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcclxuXHRcdFx0XHRkYXRhW2NvdW50ZXIrK10gPSB7dmFsdWU6IGFyZywgZW51bWVyYWJsZTogdHJ1ZX07XHJcblx0XHRcdGVsc2UgaWYoYXJnIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYXJnIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmcubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYoYXJnW2ldICYmIGFyZ1tpXSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcclxuXHRcdFx0XHRcdFx0ZGF0YVtjb3VudGVyKytdID0ge3ZhbHVlOiBhcmdbaV0sIGVudW1lcmFibGU6IHRydWV9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRkYXRhLmxlbmd0aCA9IHt2YWx1ZTogY291bnRlcn07XHJcblx0cmV0dXJuICBPYmplY3QuY3JlYXRlKEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZSwgZGF0YSk7XHJcbn07XHJcblxyXG5cclxuRGVsZWdhdGVyQnVpbGRlcihmdW5jdGlvbihhRnVuY3Rpb25OYW1lLCB0aGVBcmd1bWVudHMpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFtdO1x0XHJcblx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0aWYobm9kZSAmJiB0eXBlb2Ygbm9kZVthRnVuY3Rpb25OYW1lXSA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmVzdWx0c1swXSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKVxyXG5cdFx0cmV0dXJuIEhUTUxDb2xsZWN0aW9uLmZyb20uYXBwbHkobnVsbCwgcmVzdWx0cyk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHJlc3VsdHM7XHJcbn0sSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLCBOb2RlLnByb3RvdHlwZSwgSFRNTEVsZW1lbnQucHJvdG90eXBlLCBIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGF0YVN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9EYXRhU3VwcG9ydFwiO1xyXG5pbXBvcnQgTWFuaXB1bGF0aW9uU3VwcG9ydCBmcm9tIFwiLi9leHRlbnRpb25zL01hbmlwdWxhdGlvblN1cHBvcnRcIjtcclxuXHJcbmV4dGVuZFByb3RvdHlwZShOb2RlLERhdGFTdXBwb3J0LE1hbmlwdWxhdGlvblN1cHBvcnQpOyIsImltcG9ydCBleHRlbmRQcm90b3R5cGUgZnJvbSBcIi4uL3V0aWxzL0V4dGVuZFByb3RvdHlwZVwiO1xyXG5pbXBvcnQgRGVsZWdhdGVyQnVpbGRlciBmcm9tIFwiLi4vdXRpbHMvRGVsZWdhdGVyQnVpbGRlclwiO1xyXG5pbXBvcnQgTGlzdFN1cHBvcnQgZnJvbSBcIi4vZXh0ZW50aW9ucy9MaXN0U3VwcG9ydFwiO1xyXG5cclxuZXh0ZW5kUHJvdG90eXBlKE5vZGVMaXN0LCBMaXN0U3VwcG9ydCk7XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUuYXBwbHlUbyA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsaW5nID0gYXJncy5zaGlmdCgpO1xyXG5cdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgY2FsbGluZyA9PT0gXCJmdW5jdGlvblwiO1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRjb25zdCBub2RlID0gdGhpc1tpXTtcclxuXHRcdGxldFx0cmVzdWx0O1xyXG5cdFx0aWYoaXNGdW5jdGlvbilcclxuXHRcdFx0cmVzdWx0ID0gY2FsbGluZy5hcHBseShbbm9kZV0uY29uY2F0KGFyZ3MpKTtcclxuXHRcdGVsc2UgaWYodHlwZW9mIG5vZGVbY2FsbGluZ10gPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0cmVzdWx0ID0gbm9kZVtjYWxsaW5nXS5hcHBseShub2RlLCBhcmdzKTtcclxuXHRcdFxyXG5cdFx0aWYocmVzdWx0KVxyXG5cdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24oKSB7XHJcblx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMCl7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBNYXAoKTtcclxuXHRcdFx0dGhpcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlLnZhbCA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gbm9kZS52YWwoKTtcclxuXHRcdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2V0KChub2RlLm5hbWUgfHwgbm9kZS5pZCB8fCBub2RlLnNlbGVjdG9yKCkpLCBub2RlLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdE5vZGVMaXN0LnByb3RvdHlwZS5hcHBseVRvLmFwcGx5KHRoaXMsIFtcInZhbFwiXS5jb25jYXQoQXJyYXkuZnJvbShhcmd1bWVudHMpKSk7XHJcbn07XHJcblxyXG5Ob2RlTGlzdC5mcm9tID0gZnVuY3Rpb24oKXtcclxuXHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRsZXQgY291bnRlciA9IDA7XHJcblx0XHJcblx0d2hpbGUoYXJncy5sZW5ndGggPiAwKXtcclxuXHRcdGNvbnN0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGlmKHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJnICE9IG51bGwpe1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0ZWxzZSBpZihhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhcmcgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCBhcmcgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGFyZy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRpZihhcmdbaV0gJiYgYXJnW2ldIGluc3RhbmNlb2YgTm9kZSl7XHJcblx0XHRcdFx0XHRcdGRhdGFbY291bnRlcisrXSA9IHt2YWx1ZTogYXJnW2ldLCBlbnVtZXJhYmxlOiB0cnVlfTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZGF0YS5sZW5ndGggPSB7dmFsdWU6IGNvdW50ZXJ9O1xyXG5cdHJldHVybiAgT2JqZWN0LmNyZWF0ZShOb2RlTGlzdC5wcm90b3R5cGUsIGRhdGEpO1xyXG59O1xyXG5cclxuXHJcbkRlbGVnYXRlckJ1aWxkZXIoZnVuY3Rpb24oYUZ1bmN0aW9uTmFtZSwgdGhlQXJndW1lbnRzKSB7XHJcblx0bGV0IHJlc3VsdHMgPSBbXTtcdFxyXG5cdHRoaXMuZm9yRWFjaChub2RlID0+IHtcclxuXHRcdGlmKG5vZGUgJiYgdHlwZW9mIG5vZGVbYUZ1bmN0aW9uTmFtZV0gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IG5vZGVbYUZ1bmN0aW9uTmFtZV0uYXBwbHkobm9kZSwgdGhlQXJndW1lbnRzKTtcclxuXHRcdFx0aWYocmVzdWx0KXsgXHJcblx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRcdFx0XHRyZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoQXJyYXkuZnJvbShyZXN1bHQpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuXHRcdFx0fVx0XHRcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihyZXN1bHRzLmxlbmd0aCA9PT0gMClcclxuXHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0ZWxzZSBpZihyZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZSB8fCByZXN1bHRzWzBdIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShyZXN1bHRzKTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcmVzdWx0cztcclxufSxOb2RlTGlzdC5wcm90b3R5cGUsIE5vZGUucHJvdG90eXBlLCBIVE1MRWxlbWVudC5wcm90b3R5cGUsIEhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZSwgRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcclxuIiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiQXR0cmlidXRlU3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGVzKCkgPyAoKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdFx0XHRcdHRoaXMuZ2V0QXR0cmlidXRlTmFtZXMoKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG5cdFx0XHRcdFx0cmVzdWx0W25hbWVdID0gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSkoKSA6IHVuZGVmaW5lZDtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGFyZ3VtZW50c1swXSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLnJlbW92ZUF0dHJpYnV0ZShhcmd1bWVudHNbMF0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRGF0YVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcclxuXHRQcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IHt9O1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRhdGFzZXQgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdGZvciAobmFtZSBpbiB0aGlzLmRhdGFzZXQpXHJcblx0XHRcdFx0ZGF0YVtuYW1lXSA9IHRoaXMuZGF0YXNldFtuYW1lXTtcclxuXHJcblx0XHR0aGlzLmRhdGEgPSAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVthcmd1bWVudHNbMF1dO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInVuZGVmaW5lZFwiIHx8IGFyZ3VtZW50c1sxXSA9PSBudWxsKVxyXG5cdFx0XHRcdGRlbGV0ZSBkYXRhW2FyZ3VtZW50c1swXV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkYXRhW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0pLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDtcclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiRXZlbnRTdXBwb3J0XCIsIChQcm90b3R5cGUpID0+IHtcclxuXHRjb25zdCBFVkVOVFNQTElURVIgPSAvKFxccyspfChcXHMqLFxccyopLztcclxuXHRjb25zdCBnZXRXcmFwcGVySGFuZGxlTWFwID0gKGVsZW1lbnQpID0+IHtcclxuXHRcdGlmICghZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXykgZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXyA9IG5ldyBNYXAoKTtcclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudC5fX3dyYXBwZXJoYW5kbGVtYXBfXztcclxuXHR9O1xyXG5cclxuXHRjb25zdCBnZXRUcmlnZ2VyVGltZW91dHMgPSAoZWxlbWVudCkgPT4ge1xyXG5cdFx0aWYgKCFlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fKSBlbGVtZW50Ll9fX0VWRU5UVFJJR0dFUlRJTUVPVVRTX19fID0ge307XHJcblxyXG5cdFx0cmV0dXJuIGVsZW1lbnQuX19fRVZFTlRUUklHR0VSVElNRU9VVFNfX187XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlV3JhcHBlciA9IChlbGVtZW50LCBkYXRhLCBldmVudFR5cGVzKSA9PiB7XHJcblx0XHRjb25zdCB7IHdyYXBwZXIsIG9wdGlvbiwgZXZlbnRzLCBoYW5kbGUgfSA9IGRhdGE7XHJcblx0XHRjb25zdCBjYXB0dXJlID0gb3B0aW9uLmNhcHR1cmU7XHJcblx0XHRpZiAoZXZlbnRUeXBlcykge1xyXG5cdFx0XHRldmVudFR5cGVzID0gdHlwZW9mIGV2ZW50VHlwZXMgPT09IFwic3RyaW5nXCIgPyBldmVudFR5cGVzLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBldmVudFR5cGVzO1xyXG5cdFx0XHRmb3IgKGxldCBldmVudCBvZiBldmVudFR5cGVzKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBldmVudHMuaW5kZXhPZihldmVudCk7XHJcblx0XHRcdFx0aWYgKGluZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgY2FwdHVyZSk7XHJcblx0XHRcdFx0XHRldmVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGV2ZW50cy5sZW5ndGggPT0gMCkgZ2V0V3JhcHBlckhhbmRsZU1hcChlbGVtZW50KS5kZWxldGUoaGFuZGxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB3cmFwcGVyLCBjYXB0dXJlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRnZXRXcmFwcGVySGFuZGxlTWFwKGVsZW1lbnQpLmRlbGV0ZShoYW5kbGUpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKFwiVG9vIGxlc3MgYXJndW1lbnRzIVwiKTtcclxuXHJcblx0XHRjb25zdCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGV2ZW50cyA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJncy5zaGlmdCgpLnNwbGl0KEVWRU5UU1BMSVRFUikgOiBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBmaWx0ZXIgPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIiA/IGFyZ3Muc2hpZnQoKSA6IG51bGw7XHJcblx0XHRjb25zdCBoYW5kbGUgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRjb25zdCBvcHRpb24gPSB0eXBlb2YgYXJnc1swXSA9PT0gXCJ1bmRlZmluZWRcIiA/IHsgY2FwdHVyZTogZmFsc2UsIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogdHlwZW9mIGFyZ3NbMF0gPT09IFwiYm9vbGVhblwiID8geyBjYXB0dXJlOiBhcmdzLnNoaWZ0KCksIG9uY2U6IGZhbHNlLCBwYXNzaXZlOiBmYWxzZSB9IDogYXJncy5zaGlmdCgpO1xyXG5cdFx0Y29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRpZiAoZmlsdGVyKSB7XHJcblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGFyZ2V0LmlzID09PSBcImZ1bmN0aW9uXCIgJiYgIXRhcmdldC5pcyhmaWx0ZXIpKSByZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gaGFuZGxlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGlmIChvcHRpb24ub25jZSkgcmVtb3ZlV3JhcHBlcih0aGlzLCB3cmFwcGVyKTtcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2V0V3JhcHBlckhhbmRsZU1hcCh0aGlzKS5zZXQoaGFuZGxlLCB7IGhhbmRsZSwgd3JhcHBlcjogd3JhcHBlciwgZXZlbnRzLCBvcHRpb24gfSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgZXZlbnQgb2YgZXZlbnRzKSB7XHJcblx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgd3JhcHBlciwgb3B0aW9uKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUucmVtb3ZlT24gPSBmdW5jdGlvbiAoaGFuZGxlLCBldmVudCwgY2FwdHVyZSkge1xyXG5cdFx0Y29uc3QgZGF0YSA9IGdldFdyYXBwZXJIYW5kbGVNYXAodGhpcykuZ2V0KGhhbmRsZSk7XHJcblx0XHRpZiAoZGF0YSkgcmVtb3ZlV3JhcHBlcih0aGlzLCBkYXRhLCBldmVudCk7XHJcblx0XHRlbHNlIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGUsIGV2ZW50LCBjYXB0dXJlKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwibnVtYmVyXCIgPyBhcmdzLnNoaWZ0KCkgOiAtMTtcclxuXHRcdGlmICh0aW1lb3V0ID49IDApIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3NbMF07XHJcblx0XHRcdGNvbnN0IHRpbWVvdXRzID0gZ2V0VHJpZ2dlclRpbWVvdXRzKHRoaXMpO1xyXG5cdFx0XHRjb25zdCB0aW1lb3V0aWQgPSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0aWYgKHRpbWVvdXRpZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRpZCk7XHJcblxyXG5cdFx0XHR0aW1lb3V0c1t0eXBlXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aW1lb3V0c1t0eXBlXTtcclxuXHRcdFx0XHR0aGlzLnRyaWdnZXIuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0sIHRpbWVvdXQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0Y29uc3QgZGVsZWdhdGUgPSBhcmdzWzBdIGluc3RhbmNlb2YgRXZlbnQgPyBhcmdzLnNoaWZ0KCkgOiBudWxsO1xyXG5cdFx0XHRjb25zdCBkYXRhID0gYXJncy5sZW5ndGggPj0gMSA/IChhcmdzLmxlbmd0aCA9PSAxID8gYXJncy5zaGlmdCgpIDogYXJncykgOiBkZWxlZ2F0ZTtcclxuXHRcdFx0Y29uc3QgZXZlbnQgPSBkYXRhID8gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgY29tcG9zZWQ6IHRydWUsIGRldGFpbDogZGF0YSB9KSA6IG5ldyBFdmVudCh0eXBlLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pO1xyXG5cclxuXHRcdFx0aWYgKGRlbGVnYXRlKSBldmVudC5kZWxlZ2F0ZWRFdmVudCA9IGRlbGVnYXRlO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7XHJcbiIsImltcG9ydCBFeHRlbmRlciBmcm9tIFwiLi4vLi4vdXRpbHMvRXh0ZW5kZXJcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIkh0bWxDbGFzc1N1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5hZGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LmFkZChjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsY2xhenogPT4gdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID09IDEpXHJcblx0XHRcdGFyZ3VtZW50c1swXS5zcGxpdCgvXFxzKy8pLmZvckVhY2goY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG5cdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgY2xhenogPT4gdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXp6KSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS50b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAxKVxyXG5cdFx0XHRhcmd1bWVudHNbMF0uc3BsaXQoL1xccysvKS5mb3JFYWNoKGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuXHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGNsYXp6ID0+IHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShjbGF6eikpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJMaXN0U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1x0XHRcclxuXHRQcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdGlmKHRoaXNbaV0gPT0gYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUubWFwID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHRcclxuXHRQcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmFwcGx5KEFycmF5LmZyb20odGhpcyksIGFyZ3VtZW50cyk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbMF07XHJcblx0fTtcdFxyXG5cdFxyXG5cdFByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMubGVuZ3RoID4gMClcclxuXHRcdFx0cmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuXHR9O1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHN1cHBvcnQgPSBFeHRlbmRlcihcIk1hbmlwdWxhdGlvblN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm9kZXMgPSB0aGlzLmNoaWxkTm9kZXNcclxuXHRcdHdoaWxlKG5vZGVzLmxlbmd0aCAhPSAwKVx0XHRcdFxyXG5cdFx0XHRub2Rlc1swXS5yZW1vdmUodHJ1ZSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGROb2RlcztcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbm5lckhUTUw7XHJcblx0XHRlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0aWYoYXJndW1lbnRzWzBdKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm91dGVySFRNTDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmlubmVySFRNTDtcclxuXHRcdGVsc2UgXHJcblx0XHRcdEFycmF5LmZyb20oYXJndW1lbnRzKS5mb3JFYWNoKGNvbnRlbnQgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZW1wdHkoKTtcclxuXHRcdFx0XHRpZih0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGNvbnRlbnQpO1xyXG5cdFx0XHRcdGVsc2UgaWYoY29udGVudCBpbnN0YW5jZW9mIE5vZGUgfHwgY29udGVudCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChjb250ZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zdCBhcHBlbmQgPSBQcm90b3R5cGUuYXBwZW5kQ2hpbGQuYmluZCh0aGlzKTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRsZXQgYXJnID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGNyZWF0ZShhcmcpLmZvckVhY2goYXBwZW5kKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChhcHBlbmQpO1xyXG5cdFx0fVxyXG5cdH07XHRcclxuXHRQcm90b3R5cGUuYXBwZW5kID0gYXBwZW5kO1xyXG5cdFxyXG5cdGNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihhRmlyc3RFbGVtZW50LCBhRWxlbWVudCl7XHJcblx0XHR0aGlzLmluc2VydEJlZm9yZShhRWxlbWVudCwgYUZpcnN0RWxlbWVudCk7XHJcblx0fTtcclxuXHRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09IDApXHJcblx0XHRcdGFwcGVuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5jaGlsZE5vZGVzLmZpcnN0KCk7XHJcblx0XHRcdGNvbnN0IGluc2VydCA9IHByZXBlbmQuYmluZCh0aGlzLCBmaXJzdCk7XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGNvbnN0IGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdFx0XHRpZihhcmcgaW5zdGFuY2VvZiBOb2RlKVxyXG5cdFx0XHRcdFx0aW5zZXJ0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBhcmcuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdFx0YXJnLmZvckVhY2goaW5zZXJ0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0UHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDEpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkluc3VmZmljaWVudCBhcmd1bWVudHMhIE9uZSBvciB0d28gbm9kZXMgcmVxdWlyZWQhXCIpO1xyXG5cdFx0XHJcblx0XHRjb25zdCBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID09IDEgPyB0aGlzLnBhcmVudE5vZGUgOiB0aGlzO1xyXG5cdFx0Y29uc3Qgb2xkTm9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IHRoaXMgOiBhcmd1bWVudHNbMF07XHJcblx0XHRjb25zdCBuZXdOb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PSAxID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cdFx0XHJcblx0XHRpZihuZXdOb2RlIGluc3RhbmNlb2YgQXJyYXkgfHwgbmV3Tm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5ld05vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbil7XHJcblx0XHRcdG5ld05vZGUuZm9yRWFjaChhSXRlbSA9PiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGFJdGVtLCBvbGROb2RlKSk7XHJcblx0XHRcdG9sZE5vZGUucmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3Tm9kZSxvbGROb2RlKTtcclxuXHR9O1xyXG5cdFxyXG5cdFByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IG5leHQgPSB0aGlzLm5leHRTaWJsaW5nO1xyXG5cdFx0aWYobmV4dClcclxuXHRcdFx0UHJvdG90eXBlLmJlZm9yZS5hcHBseShuZXh0LCBhcmd1bWVudHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRQcm90b3R5cGUuYXBwZW5kLmFwcGx5KHBhcmVudCwgYXJndW1lbnRzKTtcclxuXHR9O1x0XHJcblx0XHJcblx0UHJvdG90eXBlLmJlZm9yZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLnBhcmVudE5vZGUgPT0gbnVsbClcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW5zZXJ0IG5vZGVzIGFmdGVyIHRoaXMgbm9kZSEgUGFyZW50IG5vZGUgbm90IGF2YWlsYWJsZSFcIik7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGNvbnN0IGluc2VydGVyID0gKG5vZGUpID0+IHtwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMpO31cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRjb25zdCBhcmcgPSBhcmd1bWVudHNbaV07XHJcblx0XHRcdGlmKGFyZyBpbnN0YW5jZW9mIE5vZGUpXHJcblx0XHRcdFx0aW5zZXJ0ZXIoYXJnKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdGFyZy5mb3JFYWNoKGluc2VydGVyKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlb2YgYXJnLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRhcmcuZm9yRWFjaChpbnNlcnRlcik7XHJcblx0XHR9XHJcblx0fTtcdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IC86cGFyZW50KFxcKFxcXCIoW15cXCldKilcXFwiXFwpKT8vaTtcclxuY29uc3QgcXVlcnlFeGVjdXRlciA9IGZ1bmN0aW9uIChhRWxlbWVudCwgYVNlbGVjdG9yKSB7XHJcblx0bGV0IG1hdGNoID0gcGFyZW50U2VsZWN0b3IuZXhlYyhhU2VsZWN0b3IpO1xyXG5cdGlmIChtYXRjaCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IGFFbGVtZW50O1xyXG5cdFx0aWYgKG1hdGNoLmluZGV4ID4gMCkge1xyXG5cdFx0XHRyZXN1bHQgPSBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvci5zdWJzdHIoMCwgbWF0Y2guaW5kZXgpKTtcclxuXHRcdFx0aWYgKHJlc3VsdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0ID0gcmVzdWx0LnBhcmVudChtYXRjaFsyXSk7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGxldCBuZXh0U2VsZWN0b3IgPSBhU2VsZWN0b3Iuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XHJcblx0XHRcdGlmIChuZXh0U2VsZWN0b3IubGVuZ3RoID4gMCkgcmVzdWx0ID0gcmVzdWx0LmZpbmQobmV4dFNlbGVjdG9yKTtcclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fSBlbHNlIHJldHVybiBhRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFTZWxlY3Rvcik7XHJcbn07XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJRdWVyeVN1cHBvcnRcIiwgKFByb3RvdHlwZSkgPT4ge1xyXG5cdFByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IG5vZGVzID0gW107XHJcblx0XHRsZXQgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdGxldCBhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHR3aGlsZSAoYXJnKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IHF1ZXJ5RXhlY3V0ZXIodGhpcywgYXJnKTtcclxuXHRcdFx0XHRpZiAocmVzdWx0KSBub2Rlcy5wdXNoKHJlc3VsdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmVzdWx0ID0gTm9kZUxpc3QuZnJvbS5hcHBseShudWxsLCBub2Rlcyk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh0aGlzIGluc3RhbmNlb2YgRG9jdW1lbnQgfHwgdGhpcyBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHJldHVybiBmYWxzZTtcclxuXHRcdGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHRoaXMubWF0Y2hlcyhhcmd1bWVudHNbMF0pO1xyXG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdLmxlbmd0aCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdGxldCBmaWx0ZXIgPSBhcmd1bWVudHNbMF07XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIubGVuZ3RoOyBpKyspIGlmICh0aGlzLm1hdGNoZXMoZmlsdGVyW2ldKSkgcmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHJldHVybiB0aGlzLmlzKEFycmF5LmZyb20oYXJndW1lbnRzKSk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpIHtcclxuXHRcdGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcclxuXHRcdGlnbm9yZVNoYWRvd1Jvb3QgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiYm9vbGVhblwiID8gc2VsZWN0b3IgOiBpZ25vcmVTaGFkb3dSb290O1xyXG5cdFx0c2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBzZWxlY3RvciA6IG51bGw7XHJcblxyXG5cdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290ICYmIGlnbm9yZVNoYWRvd1Jvb3QpIHBhcmVudCA9IHBhcmVudC5ob3N0O1xyXG5cclxuXHRcdGlmIChzZWxlY3Rvcikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHdoaWxlIChwYXJlbnQgJiYgIXBhcmVudC5pcyhzZWxlY3RvcikpIHBhcmVudCA9IHBhcmVudC5wYXJlbnQoc2VsZWN0b3IsIGlnbm9yZVNoYWRvd1Jvb3QpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcInRoaXM6XCIsIHRoaXMsIFwicGFyZW50OlwiLCBwYXJlbnQsIFwiZXJyb3I6XCIsIGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcGFyZW50O1xyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5wYXJlbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xyXG5cdFx0bGV0IHBhcmVudCA9IFByb3RvdHlwZS5wYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdHdoaWxlIChwYXJlbnQpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2gocGFyZW50KTtcclxuXHRcdFx0cGFyZW50ID0gUHJvdG90eXBlLnBhcmVudC5hcHBseShwYXJlbnQsIGFyZ3VtZW50cyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIE5vZGVMaXN0LmZyb20ocmVzdWx0KTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuc2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhpcyBpbnN0YW5jZW9mIERvY3VtZW50IHx8IHRoaXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy5pZCkgcmV0dXJuIFwiI1wiICsgdGhpcy5pZDtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0bGV0IHBhcmVudCA9IHRoaXMucGFyZW50KCk7XHJcblx0XHRcdGlmIChwYXJlbnQpIHtcclxuXHRcdFx0XHRsZXQgc2FtZVRhZ1NpYmxpbmdzID0gcGFyZW50LmZpbmQoXCI6c2NvcGU+XCIgKyBzZWxlY3Rvcik7XHJcblx0XHRcdFx0aWYgKHNhbWVUYWdTaWJsaW5ncyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBzYW1lVGFnU2libGluZ3MuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHNlbGVjdG9yICs9IFwiOm50aC1jaGlsZChcIiArIChpbmRleCArIDEpICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHBhcmVudC5zZWxlY3RvcigpO1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRTZWxlY3RvciA/IHBhcmVudFNlbGVjdG9yICsgXCI+XCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzZWxlY3RvcjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb3Nlc3RzKGFRdWVyeSkuZmlyc3QoKTtcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUuY2xvc2VzdHMgPSBmdW5jdGlvbiAoYVF1ZXJ5KSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChyZXN1bHQubGVuZ3RoICE9IDApIHJldHVybiByZXN1bHQ7XHJcblx0XHRcclxuXHRcdGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudDtcclxuXHRcdGlmIChwYXJlbnQpIHJldHVybiBwYXJlbnQuY2xvc2VzdHMoYVF1ZXJ5KTtcclxuXHJcblx0XHRyZXR1cm4gTm9kZUxpc3QuZnJvbShbXSk7XHJcblx0fTtcclxuXHJcblx0UHJvdG90eXBlLm5lc3RlZCA9IGZ1bmN0aW9uIChhUXVlcnkpIHtcclxuXHRcdGlmICh0aGlzLmlzKGFRdWVyeSkpIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMpO1xyXG5cclxuXHRcdGxldCBuZXN0ZWQgPSB0aGlzLmZpbmQoYVF1ZXJ5KTtcclxuXHRcdGlmIChuZXN0ZWQgJiYgbmVzdGVkLmxlbmd0aCA+IDApIHJldHVybiBuZXN0ZWQ7XHJcblx0XHRlbHNlIHJldHVybiBOb2RlTGlzdC5mcm9tKHRoaXMucGFyZW50KGFRdWVyeSkpO1xyXG5cdH07XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0O1xyXG4iLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJSZWFkeUV2ZW50U3VwcG9ydFwiLCBQcm90b3R5cGUgPT4ge1xyXG5cdFByb3RvdHlwZS5yZWFkeSA9IGZ1bmN0aW9uKGFGdW5jdGlvbiwgb25jZSl7XHRcclxuXHRcdHRoaXMub24oXCJyZWFkeVwiLCBhRnVuY3Rpb24sIG9uY2UpO1xyXG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpXHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgc3VwcG9ydDsiLCJpbXBvcnQgRXh0ZW5kZXIgZnJvbSBcIi4uLy4uL3V0aWxzL0V4dGVuZGVyXCI7XHJcblxyXG5jb25zdCBISURFVkFMVUUgPSBcIm5vbmVcIjtcclxuXHJcbmNvbnN0IGlzSGlkZGVuID0gKGVsZW1lbnQpID0+IHtcclxuXHRyZXR1cm4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSBISURFVkFMVUVcclxufTtcclxuXHJcbmNvbnN0IGluaXQgPSAoZWxlbWVudCkgPT4ge1x0XHJcblx0bGV0IGRpc3BsYXkgPSAhaXNIaWRkZW4oZWxlbWVudCkgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgOiBcIlwiO1xyXG5cdFxyXG5cdGVsZW1lbnQuc2hvdyA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHRcdHJldHVybiB0aGlzO1x0XHRcclxuXHR9KS5iaW5kKGVsZW1lbnQpO1xyXG5cdFxyXG5cdGVsZW1lbnQuaGlkZSA9IChmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zdHlsZS5kaXNwbGF5ID0gSElERVZBTFVFO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHRcdFxyXG5cdH0pLmJpbmQoZWxlbWVudCk7XHJcblx0XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgc3VwcG9ydCA9IEV4dGVuZGVyKFwiU2hvd0hpZGVTdXBwb3J0XCIsIFByb3RvdHlwZSA9PiB7XHJcblx0UHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBpbml0KHRoaXMpLnNob3cuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxyXG5cdH07XHJcblxyXG5cdFByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gaW5pdCh0aGlzKS5oaWRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcclxuXHR9O1xyXG5cclxuXHRQcm90b3R5cGUudG9nZ2xlU2hvdyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIGlzSGlkZGVuKHRoaXMpID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuXHR9O1xyXG5cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHN1cHBvcnQ7IiwiaW1wb3J0IEV4dGVuZGVyIGZyb20gXCIuLi8uLi91dGlscy9FeHRlbmRlclwiO1xyXG5cclxuY29uc3QgSW5wdXRUeXBlcyA9IFtcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwic2VsZWN0XCIsXHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IHtcclxuXHRcdFx0XHRpZihvcHRpb24uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRyZXN1bHQucHVzaChvcHRpb24udmFsdWUpO1xyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbigpe1x0XHRcdFx0XHJcblx0XHRcdGxldCB2YWx1ZXMgPSBbXTtcclxuXHRcdFx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRcdFx0bGV0IGFyZyA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0d2hpbGUoYXJnKXtcclxuXHRcdFx0XHRpZihBcnJheS5pc0FycmF5KGFyZykpXHJcblx0XHRcdFx0XHR2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGFyZyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dmFsdWVzLnB1c2goYXJnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhcmcgPSBhcmdzLnNoaWZ0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlcztcclxuXHRcdFx0dGhpcy5maW5kKFwib3B0aW9uXCIpLmZvckVhY2gob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPj0gMCk7XHRcdFx0XHJcblx0XHRcdHRoaXMudHJpZ2dlcihcImNoYW5nZWRcIik7XHJcblx0XHR9XHRcdFx0XHJcblx0fSxcclxuXHR7XHJcblx0XHRzZWxlY3RvciA6IFwiaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSwgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXVwiLFxyXG5cdFx0Z2V0IDogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYodGhpcy52YWx1ZSA9PSBcIm9uXCIgfHwgdGhpcy52YWx1ZSA9PSBcIm9mZlwiKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcblx0XHRcdGVsc2UgaWYodGhpcy5jaGVja2VkKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24oYVZhbHVlKXtcclxuXHRcdFx0aWYodHlwZW9mIGFWYWx1ZSA9PT0gXCJib29sZWFuXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gYVZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmKHR5cGVvZiBhVmFsdWUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0dGhpcy5jaGVja2VkID0gdGhpcy52YWx1ZSA9PSBhVmFsdWU7XHJcblx0XHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShhVmFsdWUpKVxyXG5cdFx0XHRcdHRoaXMuY2hlY2tlZCA9IGFWYWx1ZS5pbmRleE9mKHRoaXMudmFsdWUpID49IDA7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJjaGFuZ2VkXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXTtcclxuXHJcbmNvbnN0IERlZmF1bHRJbnB1dFR5cGUgPSB7XHJcblx0XHRnZXQgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcclxuXHRcdH0sXHJcblx0XHRzZXQgOiBmdW5jdGlvbihhVmFsdWUpe1xyXG5cdFx0XHR0aGlzLnZhbHVlID0gYVZhbHVlO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXIoXCJpbnB1dFwiKTtcclxuXHRcdH1cdFxyXG59O1xyXG5cclxuY29uc3QgZ2V0SW5wdXRUeXBlID0gZnVuY3Rpb24oYUVsZW1lbnQpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBJbnB1dFR5cGVzLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoYUVsZW1lbnQuaXMoSW5wdXRUeXBlc1tpXS5zZWxlY3RvcikpXHJcblx0XHRcdHJldHVybiBJbnB1dFR5cGVzW2ldO1x0XHRcclxuXHRyZXR1cm4gRGVmYXVsdElucHV0VHlwZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBzdXBwb3J0ID0gRXh0ZW5kZXIoXCJWYWx1ZVN1cHBvcnRcIiwgUHJvdG90eXBlID0+IHtcdFxyXG5cdFByb3RvdHlwZS52YWwgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0eXBlID0gZ2V0SW5wdXRUeXBlKHRoaXMpO1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRyZXR1cm4gdHlwZS5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dHlwZS5zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1x0XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBzdXBwb3J0OyIsImltcG9ydCBcIi4vZG9tL0V2ZW50VGFyZ2V0XCI7XHJcbmltcG9ydCBcIi4vZG9tL05vZGVcIjtcclxuaW1wb3J0IFwiLi9kb20vRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Eb2N1bWVudEZyYWdtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxFbGVtZW50XCI7XHJcbmltcG9ydCBcIi4vZG9tL0hUTUxJbnB1dEVsZW1lbnRcIjtcclxuaW1wb3J0IFwiLi9kb20vSFRNTFRleHRBcmVhRWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IVE1MU2VsZWN0RWxlbWVudFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9Ob2RlTGlzdFwiO1xyXG5pbXBvcnQgXCIuL2RvbS9IdG1sQ29sbGVjdGlvblwiO1xyXG5pbXBvcnQgXCIuL0dsb2JhbFwiO1xyXG4iLCJjb25zdCBEZWxlZ2F0ZXJCdWlsZGVyID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgYXJncyA9IEFycmF5LmZyb20oYXJndW1lbnRzKTtcclxuXHRjb25zdCBjYWxsYmFjayA9IGFyZ3Muc2hpZnQoKTtcclxuXHRjb25zdCBzb3VyY2UgPSBhcmdzLnNoaWZ0KCk7XHJcblx0YXJncy5mb3JFYWNoKCB0YXJnZXQgPT57XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXHJcblx0XHQuZm9yRWFjaChuYW1lID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcclxuXHRcdFx0aWYgKHR5cGVvZiBzb3VyY2VbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHByb3AudmFsdWUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgbmFtZSwgYXJndW1lbnRzKTtcclxuXHRcdFx0XHR9O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGVsZWdhdGVyQnVpbGRlcjsiLCJjb25zdCBleHRlbmRQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XHJcblx0Y29uc3QgdHlwZSA9IGFyZ3Muc2hpZnQoKTtcdFxyXG5cdHdoaWxlKGFyZ3MubGVuZ3RoID4gMCl7XHJcblx0XHRjb25zdCBleHRlbmRlciA9IGFyZ3Muc2hpZnQoKTtcclxuXHRcdGV4dGVuZGVyKHR5cGUpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGV4dGVuZFByb3RvdHlwZTsiLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcclxuXHJcbmNvbnN0IEVYVEVOU0lPTlNfTUFQID0gVXRpbHMuZ2xvYmFsVmFyKFwiX19fRE9NX0FQSV9FWFRFTlNJT05fTUFQX19fXCIsIHt9KTtcclxuY29uc3QgRXh0ZW5kZXIgPSBmdW5jdGlvbihhTmFtZSwgYUV4dGVudGlvbil7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGFUeXBlKXtcdFxyXG5cdFx0bGV0IGV4dGVuc2lvbnMgPSBFWFRFTlNJT05TX01BUFthVHlwZS5uYW1lXTtcclxuXHRcdGlmKCFleHRlbnNpb25zKVxyXG5cdFx0XHRleHRlbnNpb25zID0gRVhURU5TSU9OU19NQVBbYVR5cGUubmFtZV0gPSB7fTtcdFx0XHJcblx0XHRcclxuXHRcdGlmKCFleHRlbnNpb25zW2FOYW1lXSl7XHJcblx0XHRcdGV4dGVuc2lvbnNbYU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0YUV4dGVudGlvbihhVHlwZS5wcm90b3R5cGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJkdXBsaWNhdGVkIGxvYWQgb2YgZXh0ZW5zaW9uIFxcXCJcIiArIGFOYW1lICsgXCJcXFwiIVwiKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlcjsiLCJjb25zdCBVdGlscyA9IHtcclxuXHRnbG9iYWwgOiAoKCkgPT4ge1xyXG5cdFx0aWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHdpbmRvdztcclxuXHRcdGlmKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBnbG9iYWw7XHJcblx0XHRpZih0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNlbGY7XHJcblx0XHRyZXR1cm4ge307XHRcdFxyXG5cdH0pKCksXHJcblx0Z2xvYmFsVmFyIDogZnVuY3Rpb24oYU5hbWUsIGFJbml0VmFsdWUpe1xyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgVXRpbHMuZ2xvYmFsW2FOYW1lXSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0VXRpbHMuZ2xvYmFsW2FOYW1lXSA9IGFJbml0VmFsdWU7XHJcblx0XHRcclxuXHRcdHJldHVybiBVdGlscy5nbG9iYWxbYU5hbWVdO1x0XHRcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJpbXBvcnQge3ByaXZhdGVQcm9wZXJ0eSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCB7IGxhenlQcm9taXNlIH0gZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL1Byb21pc2VVdGlsc1wiO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9VVUlEXCI7XG5pbXBvcnQgeyBpbml0VGltZW91dCwgdHJpZ2dlclRpbWVvdXQgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZSwgY29tcG9uZW50RXZlbnRuYW1lIH0gZnJvbSBcIi4vdXRpbHMvRXZlbnRIZWxwZXJcIjtcbmltcG9ydCBXZWFrRGF0YSBmcm9tIFwiLi91dGlscy9XZWFrRGF0YVwiO1xuXG5jb25zdCBQUklWQVRFX1JFQURZID0gXCJyZWFkeVwiO1xuXG5jb25zdCBUSU1FT1VUUyA9IG5ldyBXZWFrRGF0YSgpO1xuY29uc3QgaW5pdCA9IChjb21wb25lbnQpID0+IHtcblx0Y29uc3QgZGF0YSA9IFRJTUVPVVRTLmRhdGEoY29tcG9uZW50KTtcblx0aWYgKGRhdGEuaW5pdGlhbGl6ZSkgY2xlYXJUaW1lb3V0KGRhdGEuaW5pdGlhbGl6ZSk7XG5cblx0ZGF0YS5pbml0aWFsaXplID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG5cdFx0ZGVsZXRlIGRhdGEuaW5pdGlhbGl6ZTtcblxuXHRcdGF3YWl0IGNvbXBvbmVudC5pbml0KCk7XG5cdFx0Y29tcG9uZW50LnJlYWR5LnJlc29sdmUoKTtcblx0XHRjb21wb25lbnQudHJpZ2dlcihjb21wb25lbnRFdmVudG5hbWUoXCJpbml0aWFsemVkXCIsIGNvbXBvbmVudCkpO1xuXHR9LCBpbml0VGltZW91dCk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVUlEID0gKHByZWZpeCwgc3VmZml4KSA9PiB7XG5cdGxldCBjb3VudCA9IDA7XG5cdGxldCBpZCA9IG51bGw7XG4gICAgd2hpbGUoY291bnQgPCAxMDApe1xuXHRcdGlkID0gYCR7cHJlZml4fSR7dXVpZCgpfSR7c3VmZml4fWA7XG5cdFx0aWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSlcblx0XHRcdHJldHVybiBpZDtcblxuXHRcdGNvdW50Kys7XG5cdH1cblx0Y29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJUbyBtYW55IHJldHJpZXMgdG8gY3JlYXRlIGFuIHVuaXF1ZSBpZCAtIGNyZWF0ZWQgaWQgaXMgbm90IHVuaXF1ZSFcIikpO1xuXHRyZXR1cm4gaWQ7XG59O1xuXG5cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcblx0Y29uc3RydWN0b3Ioe3NoYWRvd1Jvb3QgPSBmYWxzZSwgY29udGVudCA9IG51bGwsIGNyZWF0ZVVJRCA9IGZhbHNlLCB1aWRQcmVmaXggPSBcImlkLVwiLCB1aWRTdWZmaXggPSBcIlwifSA9IHt9KSB7XG5cdFx0c3VwZXIoKTtcblx0XHRwcml2YXRlUHJvcGVydHkodGhpcywgUFJJVkFURV9SRUFEWSwgbGF6eVByb21pc2UoKSk7XG5cblx0XHRpZihjcmVhdGVVSUQpXG5cdFx0XHR0aGlzLmF0dHIoXCJpZFwiLCBjcmVhdGVVSUQodWlkUHJlZml4LCB1aWRTdWZmaXgpKTtcblxuXHRcdGlmKHNoYWRvd1Jvb3QpXG5cdFx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTpvcGVufSk7XG5cdFx0XG5cdFx0aWYoY29udGVudClcblx0XHRcdHRoaXMucm9vdC5hcHBlbmQodHlwZW9mIGNvbnRlbnQgPT09IFwiZnVuY3Rpb25cIiA/IGNvbnRlbnQodGhpcykgOiBjb250ZW50KTtcblx0fVxuXG5cdGdldCByb290KCl7XG5cdFx0cmV0dXJuIHRoaXMuc2hhZG93Um9vdCB8fCB0aGlzO1xuXHR9XG5cblx0Z2V0IHJlYWR5KCl7XG5cdFx0cmV0dXJuIHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1JFQURZKTtcblx0fVxuXG5cdGFzeW5jIGluaXQoKSB7fVxuXG5cdGFzeW5jIGRlc3Ryb3koKSB7XG5cdFx0aWYodGhpcy5yZWFkeS5yZXNvbHZlZClcblx0XHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1JFQURZLCBsYXp5UHJvbWlzZSgpKTtcblx0fVxuXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xuXHRcdGlmICh0aGlzLm93bmVyRG9jdW1lbnQgPT0gZG9jdW1lbnQpIGluaXQodGhpcyk7XG5cdH1cblxuXHRhZG9wdGVkQ2FsbGJhY2soKSB7XG5cdFx0dGhpcy5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXHR9XG5cblx0YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXHRcdGlmIChvbGRWYWx1ZSAhPSBuZXdWYWx1ZSAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG5cdFx0XHR0aGlzLnRyaWdnZXIodHJpZ2dlclRpbWVvdXQsIGF0dHJpYnV0ZUNoYW5nZUV2ZW50bmFtZShuYW1lLCB0aGlzKSk7XG5cdFx0XHR0aGlzLnRyaWdnZXIodHJpZ2dlclRpbWVvdXQsIGNvbXBvbmVudEV2ZW50bmFtZShcImNoYW5nZVwiLCB0aGlzKSk7XG5cdFx0fVxuXHR9XG5cblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcblx0XHR0aGlzLmRlc3Ryb3koKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJleHBvcnQgY29uc3QgY29tcG9uZW50UHJlZml4ID0gXCJkLVwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZUNoYW5nZUV2ZW50UHJlZml4ID0gXCJhdHRyaWJ1dGUtXCI7XG5leHBvcnQgY29uc3QgaW5pdFRpbWVvdXQgPSAxMDA7XG5leHBvcnQgY29uc3QgdHJpZ2dlclRpbWVvdXQgPSAxMDA7XG4iLCJpbXBvcnQgeyBjb21wb25lbnRQcmVmaXggfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0b05vZGVOYW1lID0gKG5hbWUsIHByZWZpeCkgPT4ge1xuXHRpZih0eXBlb2YgcHJlZml4ID09PSBcInN0cmluZ1wiKVxuXHRcdHJldHVybiBwcmVmaXggKyBuYW1lO1xuXHRcdFxuXHRyZXR1cm4gY29tcG9uZW50UHJlZml4ICsgbmFtZTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZpbmUgPSBmdW5jdGlvbihjbGF6eiwgb3B0aW9ucykge1xuXHRjb25zdCBub2RlbmFtZSA9IGNsYXp6Lk5PREVOQU1FO1xuXHRpZiAoIWN1c3RvbUVsZW1lbnRzLmdldChub2RlbmFtZSkpIHtcblx0XHRjdXN0b21FbGVtZW50cy5kZWZpbmUobm9kZW5hbWUsIGNsYXp6LCBvcHRpb25zKTtcblx0fVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmU7IFxuIiwiaW1wb3J0IHthdHRyaWJ1dGVDaGFuZ2VFdmVudFByZWZpeH0gZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50RXZlbnRuYW1lID0gKGV2ZW50VHlwZSwgbm9kZSApID0+IHtcdFxuXHRsZXQgbm9kZW5hbWUgPSBcInVuc3VwcG9ydGVkXCI7XG5cdGlmKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKVxuXHRcdG5vZGVuYW1lID0gbm9kZTtcblx0ZWxzZSBpZihub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG5cdFx0bm9kZW5hbWUgPSBub2RlLm5vZGVOYW1lO1xuXHRlbHNlIGlmKHR5cGVvZiBub2RlLk5PREVOQU1FID09PSBcInN0cmluZ1wiKVxuXHRcdG5vZGVuYW1lID0gbm9kZS5OT0RFTkFNRTtcblx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IodHlwZW9mIG5vZGUgKyBcIiBpcyBub3Qgc3VwcG9ydGVkIGFzIHByYW0gbm9kZSFcIik7XG5cdFxuICAgcmV0dXJuIGAke25vZGVuYW1lLnRvTG93ZXJDYXNlKCl9OiR7ZXZlbnRUeXBlfWA7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWUgPSAoYXR0cmlidXRlLCBub2RlICkgPT4ge1xuICAgIHJldHVybiBjb21wb25lbnRFdmVudG5hbWUoYXR0cmlidXRlQ2hhbmdlRXZlbnRQcmVmaXggKyBcIi1cIiArIGF0dHJpYnV0ZSwgbm9kZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7Y29tcG9uZW50RXZlbnRuYW1lLCBhdHRyaWJ1dGVDaGFuZ2VFdmVudG5hbWV9IiwiaW1wb3J0IHsgZGVmVmFsdWUgfSBmcm9tXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9PYmplY3RVdGlsc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2Vha0RhdGEge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRkZWZWYWx1ZSh0aGlzLCBcIndlYWttYXBcIiwgbmV3IFdlYWtNYXAoKSk7XG5cdH1cblxuXHRkYXRhKHJlZmVyZW5jZSkge1xuXHRcdGxldCBkYXRhID0gdGhpcy53ZWFrbWFwLmdldChyZWZlcmVuY2UpO1xuXHRcdGlmICghZGF0YSkge1xuXHRcdFx0ZGF0YSA9IHt9O1xuXHRcdFx0dGhpcy53ZWFrbWFwLnNldChyZWZlcmVuY2UsIGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdHZhbHVlKHJlZmVyZW5jZSwga2V5LCB2YWx1ZSkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHJldHVybiB0aGlzLmRhdGEocmVmZXJlbmNlKVtrZXldO1xuXHRcdGVsc2UgdGhpcy5kYXRhKHJlZmVyZW5jZSlba2V5XSA9IHZhbHVlO1xuXHR9XG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RQcm9wZXJ0eSB7XHJcblx0Y29uc3RydWN0b3Ioa2V5LCBjb250ZXh0KXtcclxuXHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuXHR9XHJcblx0XHJcblx0Z2V0IGtleURlZmluZWQoKXtcclxuXHRcdHJldHVybiB0aGlzLmtleSBpbiB0aGlzLmNvbnRleHQ7IFxyXG5cdH1cclxuXHRcclxuXHRnZXQgaGFzVmFsdWUoKXtcclxuXHRcdHJldHVybiAhIXRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdGdldCB2YWx1ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdHNldCB2YWx1ZShkYXRhKXtcclxuXHRcdHRoaXMuY29udGV4dFt0aGlzLmtleV0gPSBkYXRhO1xyXG5cdH1cclxuXHRcclxuXHRzZXQgYXBwZW5kKGRhdGEpIHtcclxuXHRcdGlmKCF0aGlzLmhhc1ZhbHVlKVxyXG5cdFx0XHR0aGlzLnZhbHVlID0gZGF0YTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcblx0XHRcdGlmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpXHJcblx0XHRcdFx0dmFsdWUucHVzaChkYXRhKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMudmFsdWUgPSBbdGhpcy52YWx1ZSwgZGF0YV07XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJlbW92ZSgpe1xyXG5cdFx0ZGVsZXRlIHRoaXMuY29udGV4dFt0aGlzLmtleV07XHJcblx0fVxyXG5cdFxyXG5cdHN0YXRpYyBsb2FkKGRhdGEsIGtleSwgY3JlYXRlPXRydWUpIHtcclxuXHRcdGxldCBjb250ZXh0ID0gZGF0YTtcclxuXHRcdGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoXCJcXC5cIik7XHJcblx0XHRsZXQgbmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR3aGlsZShrZXlzLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRpZighY29udGV4dFtuYW1lXSl7XHJcblx0XHRcdFx0aWYoIWNyZWF0ZSlcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnRleHRbbmFtZV0gPSB7fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRjb250ZXh0ID0gY29udGV4dFtuYW1lXTtcclxuXHRcdFx0bmFtZSA9IGtleXMuc2hpZnQoKS50cmltKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBuZXcgT2JqZWN0UHJvcGVydHkobmFtZSwgY29udGV4dCk7XHJcblx0fVxyXG59OyIsImltcG9ydCBPYmplY3RQcm9wZXJ0eSBmcm9tIFwiLi9PYmplY3RQcm9wZXJ0eS5qc1wiO1xyXG4vKipcclxuICogYXBwZW5kIGEgcHJvcGVyeSB2YWx1ZSB0byBhbiBvYmplY3QuIElmIHByb3BlcnkgZXhpc3RzIGl0cyB3b3VsZCBiZSBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcclxuICpcclxuICogIEBwYXJhbSBhS2V5OnN0cmluZyBuYW1lIG9mIHByb3BlcnR5XHJcbiAqICBAcGFyYW0gYURhdGE6YW55IHByb3BlcnR5IHZhbHVlXHJcbiAqICBAcGFyYW0gYU9iamVjdDpvYmplY3QgdGhlIG9iamVjdCB0byBhcHBlbmQgdGhlIHByb3BlcnR5XHJcbiAqXHJcbiAqICBAcmV0dXJuIHJldHVybnMgdGhlIGNoYW5nZWQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXBwZW5kID0gZnVuY3Rpb24gKGFLZXksIGFEYXRhLCBhT2JqZWN0KSB7XHJcblx0aWYgKHR5cGVvZiBhRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0Y29uc3QgcHJvcGVydHkgPSBPYmplY3RQcm9wZXJ0eS5sb2FkKGFPYmplY3QsIGFLZXksIHRydWUpO1xyXG5cdFx0cHJvcGVydHkuYXBwZW5kID0gYURhdGE7XHJcblx0fVxyXG5cdHJldHVybiBhT2JqZWN0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGNoZWNrZWQgaWYgYW4gb2JqZWN0IGEgc2ltcGxlIG9iamVjdC4gTm8gQXJyYXksIE1hcCBvciBzb21ldGhpbmcgZWxzZS5cclxuICpcclxuICogQHBhcmFtIGFPYmplY3Q6b2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgdGVzdGluZ1xyXG4gKlxyXG4gKiBAcmV0dXJuIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc1Bvam8gPSBmdW5jdGlvbiAoYU9iamVjdCkge1xyXG5cdHJldHVybiB0eXBlb2YgYU9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhT2JqZWN0ICE9IG51bGwgJiYgYU9iamVjdC5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIG1lcmdpbmcgb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0LiBJdHMgb25seSBtZXJnZSBzaW1wbGUgb2JqZWN0IGFuZCBzdWIgb2JqZWN0cy4gRXZlcnkgb3RoZXJcclxuICogdmFsdWUgd291bGQgYmUgcmVwbGFjZWQgYnkgdmFsdWUgZnJvbSB0aGUgc291cmNlIG9iamVjdC5cclxuICpcclxuICogc2FtcGxlOiBtZXJnZSh0YXJnZXQsIHNvdXJjZS0xLCBzb3VyY2UtMiwgLi4uc291cmNlLW4pXHJcbiAqXHJcbiAqIEBwYXJhbSBhVGFyZ2V0Om9iamVjdCB0aGUgdGFyZ2V0IG9iamVjdCB0byBtZXJnaW5nIGludG9cclxuICogQHBhcmFtIGFTb3VyY2VzOm9iamVjdFxyXG4gKlxyXG4gKiBAcmV0dXJuIG9iamVjdCByZXR1cm5zIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSBmdW5jdGlvbiAoYVRhcmdldCkge1xyXG5cdGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBzb3VyY2UgPSBhcmd1bWVudHNbaV07XHJcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goKGFLZXkpID0+IHtcclxuXHRcdFx0aWYgKGlzUG9qbyhhVGFyZ2V0W2FLZXldKSkgbWVyZ2UoYVRhcmdldFthS2V5XSwgc291cmNlW2FLZXldKTtcclxuXHRcdFx0ZWxzZSBhVGFyZ2V0W2FLZXldID0gc291cmNlW2FLZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYVRhcmdldDtcclxufTtcclxuXHJcbmNvbnN0IGJ1aWxkUHJvcGVydHlGaWx0ZXIgPSBmdW5jdGlvbiAoeyBuYW1lcywgYWxsb3dlZCB9KSB7XHJcblx0cmV0dXJuIChuYW1lLCB2YWx1ZSwgY29udGV4dCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUpID09PSBhbGxvd2VkO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmlsdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFtkYXRhLCBwcm9wRmlsdGVyLCB7IGRlZXAgPSBmYWxzZSwgcmVjdXJzaXZlID0gdHJ1ZSwgcGFyZW50cyA9IFtdIH0gPSB7fV0gPSBhcmd1bWVudHM7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblxyXG5cdGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBkYXRhW25hbWVdO1xyXG5cdFx0Y29uc3QgYWNjZXB0ID0gcHJvcEZpbHRlcihuYW1lLCB2YWx1ZSwgZGF0YSk7XHJcblx0XHRpZiAoYWNjZXB0ICYmICghZGVlcCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSkgcmVzdWx0W25hbWVdID0gdmFsdWU7XHJcblx0XHRlbHNlIGlmIChhY2NlcHQgJiYgZGVlcCkge1xyXG5cdFx0XHRjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG5cdFx0XHRpZiAodHlwZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHZhbHVlIGluc3RhbmNlb2YgTWFwIHx8IHZhbHVlIGluc3RhbmNlb2YgU2V0IHx8IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwIHx8IHBhcmVudHMuaW5jbHVkZXNbdmFsdWVdIHx8IHZhbHVlID09IGRhdGEpIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRlbHNlIHJlc3VsdFtuYW1lXSA9IGZpbHRlcih2YWx1ZSwgcHJvcEZpbHRlciwgeyBkZWVwLCByZWN1cnNpdmUsIHBhcmVudHM6IHBhcmVudHMuY29uY2F0KGRhdGEpIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZWYWx1ZSA9IChvLCBuYW1lLCB2YWx1ZSkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHR2YWx1ZSxcclxuXHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcblx0XHRlbnVtZXJhYmxlOiBmYWxzZVxyXG5cdH0pO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZGVmR2V0ID0gKG8sIG5hbWUsIGdldCkgPT4ge1xyXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBuYW1lLCB7XHJcblx0XHRnZXQsXHJcblx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxyXG5cdFx0ZW51bWVyYWJsZTogZmFsc2VcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZHZXRTZXQgPSAobywgbmFtZSwgZ2V0LCBzZXQpID0+IHtcclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobywgbmFtZSwge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2V0LFxyXG5cdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcclxuXHRcdGVudW1lcmFibGU6IGZhbHNlXHJcblx0fSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNQb2pvLFxyXG5cdGFwcGVuZCxcclxuXHRtZXJnZSxcclxuXHRmaWx0ZXIsXHJcblx0YnVpbGRQcm9wZXJ0eUZpbHRlcixcclxuXHRkZWZWYWx1ZSxcclxuXHRkZWZHZXQsXHJcblx0ZGVmR2V0U2V0XHJcbn07XHJcbiIsImNvbnN0IFBSSVZBVEVfUFJPUEVSVElFUyA9IG5ldyBXZWFrTWFwKCk7XHJcbmNvbnN0IHByaXZhdGVTdG9yZSA9IChvYmopID0+IHtcclxuXHRpZihQUklWQVRFX1BST1BFUlRJRVMuaGFzKG9iaikpXHJcblx0XHRyZXR1cm4gUFJJVkFURV9QUk9QRVJUSUVTLmdldChvYmopO1xyXG5cdFxyXG5cdGNvbnN0IGRhdGEgPSB7fTtcclxuXHRQUklWQVRFX1BST1BFUlRJRVMuc2V0KG9iaiwgZGF0YSk7XHJcblx0cmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpdmF0ZVByb3BlcnR5ID0gZnVuY3Rpb24ob2JqLCBuYW1lLCB2YWx1ZSkge1xyXG5cdGNvbnN0IGRhdGEgPSBwcml2YXRlU3RvcmUob2JqKTtcclxuXHRpZihhcmd1bWVudHMubGVuZ3RoID09PSAxKVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAyKVxyXG5cdFx0cmV0dXJuIGRhdGFbbmFtZV07XHJcblx0ZWxzZSBpZihhcmd1bWVudHMubGVuZ3RoID09PSAzKVxyXG5cdFx0ZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG5cdGVsc2VcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBhbGxvd2VkIHNpemUgb2YgYXJndW1lbnRzIVwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtwcml2YXRlUHJvcGVydHl9IiwiaW1wb3J0IHtkZWZWYWx1ZSwgZGVmR2V0fSBmcm9tIFwiLi9PYmplY3RVdGlsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgdGltZW91dFByb21pc2UgPSAoZm4sIG1zKSA9PntcclxuXHRsZXQgY2FuY2VsZWQgPSBmYWxzZTtcclxuXHRsZXQgdGltZW91dCA9IG51bGw7XHJcblx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+IHtcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdGZuKHIsZSk7XHJcblx0XHR9LCBtcylcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgdGhlbiA9IHByb21pc2UudGhlbjtcclxuXHRwcm9taXNlLnRoZW4gPSAoZm4pID0+IHtcclxuXHRcdHRoZW4uY2FsbChwcm9taXNlLCAocmVzdWx0KSA9PiB7XHJcblx0XHRcdGlmKCF0aGlzLmNhbmNlbGVkKVxyXG5cdFx0XHRcdHJldHVybiBmbihyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZWYWx1ZShwcm9taXNlLCBcImNhbmNlbFwiLCAoKSA9PiB7XHJcblx0XHRpZih0aW1lb3V0KXtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRjYW5jZWxlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0ZGVmR2V0KHByb21pc2UsIGNhbmNlbGQsICgpID0+IGNhbmNlbGVkKTtcclxuXHJcblx0cmV0dXJuIHByb21pc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGF6eVByb21pc2UgPSAoKSA9PiB7XHJcblx0XHRsZXQgcHJvbWlzZVJlc29sdmUgPSBudWxsO1xyXG5cdFx0bGV0IHByb21pc2VFcnJvciA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyLCBlKSA9PiB7XHJcblx0XHRcdHByb21pc2VSZXNvbHZlID0gcjtcclxuXHRcdFx0cHJvbWlzZUVycm9yID0gZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCByZXNvbHZlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IGVycm9yID0gZmFsc2U7XHJcblx0XHRsZXQgdmFsdWUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0ZGVmVmFsdWUocHJvbWlzZSwgXCJyZXNvbHZlXCIsIChyZXN1bHQpID0+IHtcclxuXHRcdFx0dmFsdWUgPSByZXN1bHQ7XHJcblx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuXHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0cHJvbWlzZUVycm9yKHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHByb21pc2VSZXNvbHZlKHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGRlZkdldChwcm9taXNlLCBcInZhbHVlXCIsICgpID0+IHZhbHVlKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcImVycm9yXCIsICgpID0+IGVycm9yKTtcclxuXHRcdGRlZkdldChwcm9taXNlLCBcInJlc29sdmVkXCIsICgpID0+IHJlc29sdmVkKTtcclxuXHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGxhenlQcm9taXNlLFxyXG5cdHRpbWVvdXRQcm9taXNlXHJcbn1cclxuIiwiaWYgKCFTdHJpbmcucHJvdG90eXBlLmhhc2hjb2RlKVxyXG5cdFN0cmluZy5wcm90b3R5cGUuaGFzaGNvZGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcclxuXHRcdGxldCBoYXNoID0gMDtcclxuXHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjO1xyXG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc2g7XHJcblx0fTsiLCJpbXBvcnQgeyBsYXp5UHJvbWlzZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcm9taXNlVXRpbHNcIjtcbmltcG9ydCB7IGRlZkdldCwgZGVmVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHNcIjtcbmltcG9ydCB7IHByaXZhdGVQcm9wZXJ0eSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGVcIjtcblxuY29uc3QgUFJJVkFURV9XQUlUID0gXCJ3YWl0XCI7XG5jb25zdCBQUklWQVRFX0NBTExCQUNLUyA9IFwiY2FsbGJhY2tzXCI7XG5jb25zdCBQUklWQVRFX0lHTk9SRURJUkVDVElWRVMgPSBcImlnbm9yZURpcmVjdGl2ZXNcIjtcblxuY29uc3QgQ09OVEVYVENMT05FID0gbmV3IFNldCgpO1xuY29uc3QgQ09OVEVYVFMgPSBuZXcgTWFwKCk7XG5jb25zdCBXQVJOVElNRSA9IDEwMDA7XG5jb25zdCBDUklUSUNBTFRJTUUgPSAxMDAwMDtcblxubGV0IG9ic2VydmVyVGltZW91dCA9IG51bGw7XG5jb25zdCBvYnNlcnZlID0gKGNvbnRleHQpID0+IHtcblx0Q09OVEVYVFMuc2V0KGNvbnRleHQsIERhdGUubm93KCkpO1xuXHRydW5PYnNlcnZlcigpO1xufTtcbmNvbnN0IHJ1bk9ic2VydmVyID0gKCkgPT4ge1xuXHRpZiAob2JzZXJ2ZXJUaW1lb3V0ID09IG51bGwpIHtcblx0XHRvYnNlcnZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG9ic2VydmVyVGltZW91dCA9IG51bGw7XG5cdFx0XHRjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdENPTlRFWFRTLmZvckVhY2goKGNyZWF0ZVRpbWUsIGNvbnRleHQpID0+IHtcblx0XHRcdFx0Y29uc3QgZGVsdGEgPSB0aW1lIC0gY3JlYXRlVGltZTtcblx0XHRcdFx0aWYgKGNvbnRleHQuY2xvc2VkKSBDT05URVhUUy5kZWxldGUoY29udGV4dCk7XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmIChkZWx0YSA+IENSSVRJQ0FMVElNRSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcImNvbnRleHQgbGl2ZXMgbG9uZ2VyIHRoZW4gMTBzXCIsIGRlbHRhIC8gMTAwMCwgY29udGV4dCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkZWx0YSA+IFdBUk5USU1FKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJjb250ZXh0IGxpdmVzIGxvbmdlciB0aGVuIDFzXCIsIGRlbHRhIC8gMTAwMCwgY29udGV4dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwib3BlbiBjb250ZXh0OlwiLCBDT05URVhUUy5zaXplKTtcblx0XHRcdGlmIChDT05URVhUUy5zaXplID4gMCkgcnVuT2JzZXJ2ZXIoKTtcblx0XHR9LCAxMDAwKTtcblx0fVxufTtcblxuY29uc3QgdG9UZW1wbGF0ZSA9ICh0ZW1wbGF0ZSkgPT4ge1xuXHRpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBUZW1wbGF0ZSkgcmV0dXJuIHRlbXBsYXRlLmltcG9ydENvbnRlbnQoKTtcblx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBTdHJpbmcpIHJldHVybiBjcmVhdGUodGVtcGxhdGUpO1xuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5sZXQgaWQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dCB7XG5cdGNvbnN0cnVjdG9yKHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCByb290LCBtb2RlID0gXCJyZXBsYWNlXCIsIHRhcmdldCA9IG51bGwsIHBhcmVudCA9IG51bGwsIGlnbm9yZURpcmVjdGl2ZSB9KSB7XG5cdFx0aWYgKCFyZXNvbHZlcikgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgXCJyZXNvbHZlclwiIGlzIHJlcXVpcmVkIScpO1xuXHRcdGlmICghcmVuZGVyZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwicmVuZGVyZXJcIiBpcyByZXF1aXJlZCEnKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInRlbXBsYXRlXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFjb250YWluZXIpIHRocm93IG5ldyBFcnJvcignUGFyYW1ldGVyIFwiY29udGFpbmVyXCIgaXMgcmVxdWlyZWQhJyk7XG5cdFx0aWYgKCFyb290KSB0aHJvdyBuZXcgRXJyb3IoJ1BhcmFtZXRlciBcInJvb3RcIiBpcyByZXF1aXJlZCEnKTtcblxuXHRcdGRlZlZhbHVlKHRoaXMsIFwiaWRcIiwgcGFyZW50ID8gYCR7cGFyZW50LmlkfS0+JHtpZCsrfWAgOiBgcm9vdDo6JHtpZCsrfWApO1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwiZGVwdGhcIiwgcGFyZW50ID8gcGFyZW50LmRlcHRoICsgMSA6IDApO1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwicGFyZW50XCIsIHBhcmVudCk7XG5cdFx0Ly9kZWZWYWx1ZSh0aGlzLCBcInJlc29sdmVyXCIsIHJlc29sdmVyKTtcblx0XHRkZWZWYWx1ZSh0aGlzLCBcInJlbmRlcmVyXCIsIHJlbmRlcmVyKTtcblx0XHRkZWZWYWx1ZSh0aGlzLCBcInJvb3RcIiwgcm9vdCk7XG5cdFx0ZGVmVmFsdWUodGhpcywgXCJ0ZW1wbGF0ZVwiLCB0b1RlbXBsYXRlKHRlbXBsYXRlKSk7XG5cdFx0ZGVmVmFsdWUodGhpcywgXCJtb2RlXCIsIG1vZGUpO1xuXHRcdGRlZlZhbHVlKHRoaXMsIFwic3ViY29udGV4dHNcIiwgbmV3IFNldCgpKTtcblx0XHRjb25zdCB3YWl0ID0gbGF6eVByb21pc2UoKTtcblx0XHRwcml2YXRlUHJvcGVydHkodGhpcywgUFJJVkFURV9JR05PUkVESVJFQ1RJVkVTLCBpZ25vcmVEaXJlY3RpdmUgaW5zdGFuY2VvZiBTZXQgPyBpZ25vcmVEaXJlY3RpdmUgOiBuZXcgU2V0KCkpO1xuXHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1dBSVQsIHdhaXQpO1xuXHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX0NBTExCQUNLUywgW10pO1xuXG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLnRhcmdldCA9IHRhcmdldDtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cblx0XHQvKiBleGVjdXRpb24gZmxhZ3MgKi9cblx0XHR0aGlzLnN0b3AgPSBmYWxzZTtcblx0XHR0aGlzLmlnbm9yZSA9IGZhbHNlO1xuXHRcdC8vY29uc29sZS5sb2coYGNvbnRleHQ9e1wiZGVwdGhcIjoke3RoaXMuZGVwdGh9IH0sIFwiaWRcIjogJHt0aGlzLmlkfWApO1xuXHRcdC8vdGhpcy5jcmVhdGV0QXQgPSBuZXcgRXJyb3IoKTtcblxuXHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5zdWJjb250ZXh0cy5hZGQodGhpcyk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNsb3NlZCgpIHtcblx0XHRyZXR1cm4gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfV0FJVCkucmVzb2x2ZWQ7XG5cdH1cblxuXHRpZ25vcmVEaXJlY3RpdmUoZGlyZWN0aXZlKSB7XG5cdFx0Y29uc3QgaWdub3JlRGlyZWN0aXZlcyA9IHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX0lHTk9SRURJUkVDVElWRVMpO1xuXHRcdGRpcmVjdGl2ZSBpbnN0YW5jZW9mIERpcmVjdGl2ZSA/IGlnbm9yZURpcmVjdGl2ZXMuYWRkKGRpcmVjdGl2ZS5uYW1lKSA6IGlnbm9yZURpcmVjdGl2ZXMuYWRkKGRpcmVjdGl2ZSk7XG5cdH1cblxuXHRhY2NlcHREaXJlY3RpdmUoZGlyZWN0aXZlKSB7XG5cdFx0Y29uc3QgaWdub3JlRGlyZWN0aXZlcyA9IHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX0lHTk9SRURJUkVDVElWRVMpO1xuXHRcdGlmIChkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpIHJldHVybiAhKGlnbm9yZURpcmVjdGl2ZXMuaGFzKGRpcmVjdGl2ZS5uYW1lKSB8fCBpZ25vcmVEaXJlY3RpdmVzLmhhcyhkaXJlY3RpdmUpKTtcblxuXHRcdHJldHVybiAhaWdub3JlRGlyZWN0aXZlcy5oYXMoZGlyZWN0aXZlKTtcblx0fVxuXG5cdGZpbmlzaGVkKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMucGFyZW50KSB0aGlzLnBhcmVudC5maW5pc2hlZChjYWxsYmFjayk7XG5cdFx0ZWxzZSB0aGlzLnJlYWR5KGNhbGxiYWNrKTtcblx0fVxuXG5cdGFzeW5jIHJlYWR5KGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2tzID0gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfQ0FMTEJBQ0tTKTtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEFycmF5KSBjYWxsYmFjay5mb3JFYWNoKChjYWxsYmFjaykgPT4gdGhpcy53YWl0LnRoZW4oY2FsbGJhY2spKTtcblx0XHRcdGVsc2UgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgUHJvbWlzZSkgY2FsbGJhY2tzLnB1c2goYXN5bmMgKCkgPT4gYXdhaXQgY2FsbGJhY2spO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3Qgd2FpdCA9IHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1dBSVQpO1xuXHRcdFx0aWYgKCF3YWl0LnJlc29sdmVkKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pZ25vcmUpIGZvciAobGV0IGNhbGxiYWNrIG9mIGNhbGxiYWNrcykgYXdhaXQgY2FsbGJhY2sodGhpcyk7XG5cblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgdGhpcy5zdWJjb250ZXh0cykgYXdhaXQgY2hpbGQucmVhZHkoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnN1YmNvbnRleHRzLmRlbGV0ZSh0aGlzKTtcblxuXHRcdFx0XHR3YWl0LnJlc29sdmUodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB3YWl0O1xuXHRcdH1cblx0fVxuXG5cdHN1YkNvbnRleHQoeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IG51bGwgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogdGhpcywgaWdub3JlRGlyZWN0aXZlIH0pO1xuXHR9XG5cblx0Y2xvbmUoeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IG51bGwgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogbnVsbCwgaWdub3JlRGlyZWN0aXZlIH0pO1xuXHR9XG5cblx0dG9SZW5kZXJPcHRpb24oeyByZXNvbHZlciA9IHRoaXMucmVzb2x2ZXIsIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlciwgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlLCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lciwgcm9vdCA9IHRoaXMucm9vdCwgbW9kZSA9IHRoaXMubW9kZSwgdGFyZ2V0ID0gdGhpcy50YXJnZXQsIGlnbm9yZURpcmVjdGl2ZSA9IG51bGwgfSA9IHt9KSB7XG5cdFx0cmV0dXJuIHsgcmVzb2x2ZXIsIHJlbmRlcmVyLCB0ZW1wbGF0ZSwgY29udGFpbmVyLCBtb2RlLCByb290LCB0YXJnZXQsIHBhcmVudDogbnVsbCwgaWdub3JlRGlyZWN0aXZlIH07XG5cdH1cbn1cbiIsImNvbnN0IERFRklORURfRElSRUNUSVZFUyA9IFtdO1xuXG5jb25zdCBkZWZpbmVEaXJlY3RpdmUgPSAoeyBkaXJlY3RpdmUgfSkgPT4ge1xuXHRpZiAoIShkaXJlY3RpdmUgaW5zdGFuY2VvZiBEaXJlY3RpdmUpKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIkltcGxlbWVudGF0aW9uIGRvc24ndCBleHRlbmQgRGlyZWN0aXZlIGNsYXNzIVwiKTtcblxuXHRpZiAoZGlyZWN0aXZlLnJhbmsgPCBEaXJlY3RpdmUuTUlOX1JBTkspXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIHJhbmsgb2YgYSBkaXJlY3RpdmUgY2FuJ3QgYmUgbG93ZXIgYXMgXCIgKyBEaXJlY3RpdmUuTUlOX1JBTksgKyBcIiFcIik7XG5cblx0aWYgKGRpcmVjdGl2ZS5yYW5rID4gRGlyZWN0aXZlLk1BWF9SQU5LKVxuXHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSByYW5rIG9mIGEgZGlyZWN0aXZlIGNhbid0IGJlIGdyYXRlciBhcyBcIiArIERpcmVjdGl2ZS5NQVhfUkFOSyArIFwiIVwiKTtcblxuXHRERUZJTkVEX0RJUkVDVElWRVMucHVzaChkaXJlY3RpdmUpO1xuXHRERUZJTkVEX0RJUkVDVElWRVMuc29ydCgoYSwgYikgPT4ge1xuXHRcdGNvbnN0IHBoYXNlID0gYS5waGFzZSAtIGIucGhhc2U7XG5cdFx0aWYocGhhc2UgPT0gMClcblx0XHRcdHJldHVybiBhLnJhbmsgLSBiLnJhbms7XG5cdFx0XHRcblx0XHRyZXR1cm4gcGhhc2U7XG5cdH0pO1xufTtcblxuY29uc3QgUEhBU0UgPSB7XG5cdGluaXQ6IDAsXG5cdGRhdGE6IDEsXG5cdHRlbXBsYXRlOiAyLFxuXHRjb250ZW50OiAzLFxuXHRmaW5pc2g6IDRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGl2ZSB7XG5cblx0c3RhdGljIGdldCBQSEFTRSgpIHsgcmV0dXJuIFBIQVNFIH07XG5cdHN0YXRpYyBnZXQgTUlOX1JBTksoKSB7IHJldHVybiAwIH07XG5cdHN0YXRpYyBnZXQgTUFYX1JBTksoKSB7IHJldHVybiAxMDAwMDAgfTtcblxuXHRjb25zdHJ1Y3RvcigpIHsgfTtcblxuXHRnZXQgbmFtZSgpIHsgfVxuXHRnZXQgcmFuaygpIHsgfVxuXHRnZXQgcGhhc2UoKSB7cmV0dXJuIFBIQVNFLmZpbmlzaH1cblxuXHQvKipcblx0ICogbmVlZCB0byBiZSBpbXBsZW1lbnRlZFxuXHQgKiBcblx0ICogcmV0dXJuIERpcmVjdGl2ZVJlc3VsdFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH1cblxuXG5cdHN0YXRpYyBkZWZpbmUob3B0aW9uKSB7XG5cdFx0ZGVmaW5lRGlyZWN0aXZlKG9wdGlvbik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IGRpcmVjdGl2ZXMoKSB7XG5cdFx0cmV0dXJuIERFRklORURfRElSRUNUSVZFUztcblx0fVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RpdmVFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmhpZGRlbiA9IHRydWU7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG5cdCAqIFxuXHQgKi9cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRjb250ZXh0LmNvbnRlbnQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cdH07XHRcbn0iLCJpbXBvcnQgXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXh0ZG9tXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyLmpzXCI7XG5pbXBvcnQgVGVtcGxhdGUgZnJvbSBcIi4vVGVtcGxhdGUuanNcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHQuanNcIjtcbmltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50LmpzXCI7XG5pbXBvcnQgXCIuL2RpcmVjdGl2ZXNcIjtcbmltcG9ydCBcIi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNDT1BFUyA9IHtcblx0YXBwbGljYXRpb246IFwiYXBwbGljYXRpb25cIixcblx0ZGF0YTogXCJkYXRhXCIsXG5cdHJlbmRlcjogXCJyZW5kZXJcIixcblx0Y29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuXHRub2RlOiBcIm5vZGVcIixcblx0ZGlyZWN0aXZlOiBcImRpcmVjdGl2ZVwiLFxufTtcblxuY29uc3QgQVBQTElDQVRJT05fU0NPUEVfUkVTT0xWRVIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLmFwcGxpY2F0aW9uIH0pO1xuXG5jb25zdCBNT0RFV09SS0VSID0ge1xuXHRyZXBsYWNlOiBhc3luYyAoeyBjb250YWluZXIsIHRhcmdldCA9IG51bGwsIGNvbnRlbnQgfSkgPT4ge1xuXHRcdGlmICh0YXJnZXQpIHtcblx0XHRcdHRhcmdldC5yZXBsYWNlKGNvbnRlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250YWluZXIuZW1wdHkoKTtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY29udGVudCk7XG5cdFx0fVxuXHR9LFxuXHRhcHBlbmQ6IGFzeW5jICh7IGNvbnRhaW5lciwgdGFyZ2V0ID0gbnVsbCwgY29udGVudCB9KSA9PiB7XG5cdFx0aWYgKHRhcmdldCkgdGFyZ2V0LmFmdGVyKGNvbnRlbnQpO1xuXHRcdGVsc2UgY29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcblx0fSxcblx0cHJlcGVuZDogYXN5bmMgKHsgY29udGFpbmVyLCB0YXJnZXQgPSBudWxsLCBjb250ZW50IH0pID0+IHtcblx0XHRpZiAodGFyZ2V0KSB0YXJnZXQuYmVmb3JlKGNvbnRlbnQpO1xuXHRcdGVsc2UgY29udGFpbmVyLnByZXBlbmQoY29udGVudCk7XG5cdH0sXG59O1xuXG5jb25zdCBsb2FkVGVtcGxhdGVDb250ZW50ID0gYXN5bmMgKHRlbXBsYXRlLCByZW5kZXJlcikgPT4ge1xuXHRpZiAodGVtcGxhdGUpIHtcblx0XHR0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5pbXBvcnRDb250ZW50KCk7XG5cdH0gZWxzZSBpZiAocmVuZGVyZXIudGVtcGxhdGUpIHtcblx0XHRyZXR1cm4gYXdhaXQgcmVuZGVyZXIudGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKFwiTm8gY29udGVudCB0ZW1wbGF0ZSBzcGVjaWZpZWQhXCIpO1xufTtcblxuY29uc3QgYWRkQ29udGVudCA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdGlmIChjb250ZXh0LmNvbnRlbnQpIHtcblx0XHRjb25zdCBtb2Rld29ya2VyID0gTU9ERVdPUktFUltjb250ZXh0Lm1vZGVdO1xuXHRcdGlmICghbW9kZXdvcmtlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCInICsgY29udGV4dC5tb2RlICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQhJyk7XG5cdFx0YXdhaXQgbW9kZXdvcmtlcihjb250ZXh0KTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyQ29udGFpbmVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0bGV0IHsgdGVtcGxhdGUsIHJlc29sdmVyIH0gPSBjb250ZXh0O1xuXHRpZiAoIXRlbXBsYXRlIHx8IHRlbXBsYXRlLmxlbmd0aCA9PSAwKSByZXR1cm4gY29udGV4dDtcblxuXHRsZXQgY29udGVudCA9IFtdO1xuXHRmb3IgKGxldCBub2RlVGVtcGxhdGUgb2YgdGVtcGxhdGUpIHtcblx0XHRub2RlVGVtcGxhdGUubm9ybWFsaXplKCk7XG5cdFx0Y29uc3Qgbm9kZVJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5ub2RlLCBjb250ZXh0OiBudWxsLCBwYXJlbnQ6IHJlc29sdmVyIH0pO1xuXHRcdGNvbnN0IG5vZGVDb250ZXh0ID0gYXdhaXQgcmVuZGVyTm9kZShjb250ZXh0LnN1YkNvbnRleHQoeyB0ZW1wbGF0ZTogbm9kZVRlbXBsYXRlLCByZXNvbHZlcjogbm9kZVJlc29sdmVyIH0pKTtcblx0XHRhd2FpdCBub2RlQ29udGV4dC5yZWFkeSgpO1xuXHRcdGNvbnN0IG5vZGUgPSBub2RlQ29udGV4dC5jb250ZW50O1xuXHRcdGlmIChub2RlKSB7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIEFycmF5KSBjb250ZW50ID0gY29udGVudC5jb25jYXQobm9kZSk7XG5cdFx0XHRpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgY29udGVudCA9IGNvbnRlbnQuY29uY2F0KEFycmF5LmZyb20obm9kZSkpO1xuXHRcdFx0ZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIE5vZGUpIGNvbnRlbnQucHVzaChub2RlKTtcblx0XHR9XG5cdH1cblxuXHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50Lmxlbmd0aCAhPSAwID8gY29udGVudCA6IG51bGw7XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuY29uc3QgcmVuZGVyTm9kZSA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cdHRyeSB7XG5cdFx0bGV0IHsgdGVtcGxhdGUsIHJlbmRlcmVyIH0gPSBjb250ZXh0O1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEVsZW1lbnQpIGF3YWl0IHRlbXBsYXRlLmV4ZWN1dGUoY29udGV4dCk7XG5cdFx0ZWxzZSBhd2FpdCBleGVjdXRlRGlyZWN0aXZlcyhjb250ZXh0KTtcblxuXHRcdGNvbnN0IHsgaWdub3JlLCBjb250ZW50IH0gPSBjb250ZXh0O1xuXG5cdFx0aWYgKCFpZ25vcmUgJiYgY29udGVudCkge1xuXHRcdFx0bGV0IHsgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0XHRjb25zdCBzdWJUZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGUuY2hpbGROb2Rlcztcblx0XHRcdGlmIChzdWJUZW1wbGF0ZSAmJiBzdWJUZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRhaW5lclJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5jb250YWluZXIsIGNvbnRleHQ6IG51bGwsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cdFx0XHRcdGNvbnN0IHN1YkNvbnRleHQgPSBhd2FpdCByZW5kZXJlci5yZW5kZXIoY29udGV4dC5zdWJDb250ZXh0KHsgY29udGFpbmVyOiBjb250ZW50LCB0ZW1wbGF0ZTogc3ViVGVtcGxhdGUsIHJlc29sdmVyOiBjb250YWluZXJSZXNvbHZlciB9KSk7XG5cdFx0XHRcdGF3YWl0IHN1YkNvbnRleHQucmVhZHkoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY29udGV4dC5jb250ZW50ICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lICYmIGNvbnRleHQuY29udGVudC50YWdOYW1lID09IFwiSlNUTFwiKSBjb250ZXh0LmNvbnRlbnQgPSBjb250ZXh0LmNvbnRlbnQuY2hpbGROb2RlczsgLy9zcGVjaWFsIGNhc2UgdG8gc3VwcG9ydCB0aGUgb2xkIFwiPGpzdGw+XCIgdGFnLlxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IHJlbmRlciBub2RlOlwiLCBlLCBjb250ZXh0KTtcblx0fVxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cbmNvbnN0IGV4ZWN1dGVEaXJlY3RpdmVzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcblx0Y29uc3QgZGlyZWN0aXZlcyA9IERpcmVjdGl2ZS5kaXJlY3RpdmVzO1xuXHRjb25zdCBsZW5ndGggPSBkaXJlY3RpdmVzLmxlbmd0aDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggJiYgIWNvbnRleHQuc3RvcDsgaSsrKSB7XG5cdFx0Y29uc3QgZGlyZWN0aXZlID0gZGlyZWN0aXZlc1tpXTtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGNvbnRleHQuYWNjZXB0RGlyZWN0aXZlKGRpcmVjdGl2ZSkpIGF3YWl0IGRpcmVjdGl2ZS5leGVjdXRlKGNvbnRleHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnJvciBhdCBkaXJlY3RpdmU6XCIsIGUsIGRpcmVjdGl2ZSwgY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlLCBkYXRhIH0gPSB7fSkge1xuXHRcdGlmICh0ZW1wbGF0ZSAmJiAhKHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ0ZW1wbGF0ZSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFRlbXBsYXRlIVwiKTtcblxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHR0aGlzLnJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IG5hbWU6IFNDT1BFUy5kYXRhLCBjb250ZXh0OiBkYXRhID8gZGF0YSA6IHt9LCBwYXJlbnQ6IEFQUExJQ0FUSU9OX1NDT1BFX1JFU09MVkVSIH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0Y29udGFpbmVyIEhUTUxFbGVtZW50IC0+IHRhcmdldCB0byByZW5kZXIgaW5cblx0ICogQHBhcmFtXG5cdCAqIFx0XHRkYXRhIE9iamVjdHwuLi4gLT4gZGF0YSB0byB1c2VkIGF0IHJlbmRlcmluZ1xuXHQgKiBAcGFyYW1cblx0ICogXHRcdHRlbXBsYXRlIFRlbXBsYXRlfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258U3RyaW5nIC0+IHRlbXBsYXRlIHRvIHJlbmRlclxuXHQgKiBAcGFyYW1cblx0ICogXHRcdG1vZGUgXCJhcHBlbmRcInxcImluc2VydFwifFwicmVwbGFjZVwiXG5cdCAqIEBwYXJhbVxuXHQgKiBcdFx0dGFyZ2V0XG5cdCAqL1xuXHRhc3luYyByZW5kZXIoY29udGV4dCkge1xuXHRcdGNvbnN0IGNhbGxlZFdpdGhDb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQ7XG5cdFx0aWYgKCFjYWxsZWRXaXRoQ29udGV4dCkge1xuXHRcdFx0bGV0IHsgdGVtcGxhdGUgPSBudWxsLCBkYXRhID0gbnVsbCwgY29udGFpbmVyLCByb290LCBtb2RlLCB0YXJnZXQgfSA9IGNvbnRleHQ7XG5cdFx0XHR0ZW1wbGF0ZSA9IGF3YWl0IGxvYWRUZW1wbGF0ZUNvbnRlbnQodGVtcGxhdGUsIHRoaXMpO1xuXHRcdFx0Y29uc3QgcmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgbmFtZTogU0NPUEVTLnJlbmRlciwgY29udGV4dDogZGF0YSwgcGFyZW50OiB0aGlzLnJlc29sdmVyIH0pO1xuXHRcdFx0Y29udGV4dCA9IG5ldyBDb250ZXh0KHsgcmVzb2x2ZXIsIHJlbmRlcmVyOiB0aGlzLCB0ZW1wbGF0ZTogdGVtcGxhdGUsIGNvbnRhaW5lciwgcm9vdDogcm9vdCA/IHJvb3QgOiBjb250YWluZXIsIG1vZGU6IG1vZGUgPyBtb2RlIDogXCJyZXBsYWNlXCIsIHRhcmdldCB9KTtcblx0XHR9IGVsc2UgaWYgKGNvbnRleHQuY2xvc2VkKSB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsaW5nIHdpdGggY2xvc2VkIGNvbnRleHRcIiwgY29udGV4dCk7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IGNvbnRleHQudGVtcGxhdGU7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZSkgYXdhaXQgcmVuZGVyTm9kZShjb250ZXh0KTtcblx0XHRlbHNlIGF3YWl0IHJlbmRlckNvbnRhaW5lcihjb250ZXh0KTtcblx0XHRcblx0XHRhd2FpdCBhZGRDb250ZW50KGNvbnRleHQpO1xuXG5cdFx0aWYgKCFjYWxsZWRXaXRoQ29udGV4dClcblx0XHRcdGF3YWl0IGNvbnRleHQucmVhZHkoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGJ1aWxkKHsgdGVtcGxhdGUsIGRhdGEgfSA9IHt9KSB7XG5cdFx0aWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlIGluc3RhbmNlb2YgUHJvbWlzZSkgdGVtcGxhdGUgPSBhd2FpdCB0ZW1wbGF0ZTtcblxuXHRcdHRlbXBsYXRlID0gdGVtcGxhdGUgPyBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKSA6IG51bGw7XG5cdFx0cmV0dXJuIG5ldyBSZW5kZXJlcih7IHRlbXBsYXRlLCBkYXRhIH0pO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIHJlbmRlcih7IGNvbnRhaW5lciwgZGF0YSwgdGVtcGxhdGUsIG1vZGUsIHRhcmdldCB9KSB7XG5cdFx0Y29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoeyB0ZW1wbGF0ZSwgZGF0YSB9KTtcblx0XHRyZXR1cm4gcmVuZGVyZXIucmVuZGVyKHsgY29udGFpbmVyLCBtb2RlLCB0YXJnZXQgfSk7XG5cdH1cbn1cbiIsImltcG9ydCBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1jb21tb24tdXRpbHMvc3JjL2phdmFzY3JpcHQvU3RyaW5nLmpzXCI7XG5cbmNvbnN0IENBQ0hFID0ge307XG5jb25zdCBnZXRLZXkgPSAodGVtcGxhdGUsIGNhY2hlLCBhbGlhcykgPT4ge1xuXHRpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuXHRsZXQga2V5ID0gbnVsbDtcblx0aWYgKGFsaWFzKSBrZXkgPSBhbGlhcztcblx0ZWxzZSBpZiAodHlwZW9mIHRlbXBsYXRlID09PSBcInN0cmluZ1wiKSBrZXkgPSB0ZW1wbGF0ZTtcblx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBVUkwpIGtleSA9IHRlbXBsYXRlLnRvU3RyaW5nKCk7XG5cdGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIGtleSA9IHRlbXBsYXRlLnNlbGVjdG9yKCk7XG5cblx0aWYgKGtleSkgcmV0dXJuIGtleS5oYXNoY29kZSgpO1xuXG5cdHJldHVybiBudWxsO1xufTtcblxuY29uc3QgZnJvbVVSTCA9IGFzeW5jICh1cmwsIGNhY2hlLCBrZXkpID0+IHtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwudG9TdHJpbmcoKSk7XG5cdGNvbnN0IHNvdXJjZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblx0cmV0dXJuIGZyb21Tb3VyY2Uoc291cmNlLCBjYWNoZSwga2V5KTtcbn07XG5cbmNvbnN0IGZyb21Tb3VyY2UgPSBhc3luYyAoc291cmNlLCBjYWNoZSwga2V5KSA9PiB7XG5cdHJldHVybiBmcm9tRWxlbWVudChjcmVhdGUoc291cmNlLCB0cnVlKSwgY2FjaGUsIGtleSk7XG59O1xuXG5jb25zdCBmcm9tRWxlbWVudCA9IGFzeW5jIChlbGVtZW50LCBjYWNoZSwga2V5KSA9PiB7XG5cdGxldCB0ZW1wbGF0ZSA9IG51bGw7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoZWxlbWVudCwga2V5KTtcblx0ZWxzZSB7XG5cdFx0dGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gfHwgZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wbGF0ZSB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQhXCIpO1xuXG5cdFx0dGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUodGVtcGxhdGUsIGtleSk7XG5cdH1cblxuXHRpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJUZW1wbGF0ZSBjYW4ndCBsb2FkZWQhXCIpO1xuXG5cdGlmIChjYWNoZSAmJiBrZXkpIENBQ0hFW2tleV0gPSB0ZW1wbGF0ZTtcblxuXHRyZXR1cm4gdGVtcGxhdGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZSB7XG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBrZXkpIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0dGhpcy5rZXkgPSBrZXk7XG5cdH1cblxuXHRpbXBvcnRDb250ZW50KGRvYyA9IGRvY3VtZW50KSB7XG5cdFx0bGV0IGltcG9ydGVkID0gZG9jLmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIGltcG9ydGVkLmNvbnRlbnQuY2hpbGROb2Rlcztcblx0fVxuXG5cdHJlbW92ZSgpIHtcblx0XHRpZiAodGhpcy5rZXkgJiYgQ0FDSEVbdGhpcy5rZXldKSBkZWxldGUgQ0FDSEVbdGhpcy5rZXldO1xuXHR9XG5cblx0c3RhdGljIGFzeW5jIGZldGNoKHVybCwgY2FjaGUgPSB0cnVlLCBhbGlhcyA9IG51bGwpIHtcblx0XHRpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0cmV0dXJuIFRlbXBsYXRlLmxvYWQobmV3IFVSTCh1cmwsIGxvYWN0aW9uKSwgY2FjaGUsIGFsaWFzKTtcblx0XHR9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkgcmV0dXJuIFRlbXBsYXRlLmxvYWQodXJsLCBjYWNoZSwgYWxpYXMpO1xuXG5cdFx0bmV3IEVycm9yKFwiVGhlIHVybCBpc24ndCBhIGFsbG93ZWQgdHlwZSEgLT4gW1N0cmluZ3xVUkxdIHJlcXVpcmVkIVwiKTtcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBsb2FkKHRlbXBsYXRlLCBjYWNoZSA9IHRydWUsIGFsaWFzID0gbnVsbCkge1xuXHRcdGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlKSByZXR1cm4gdGVtcGxhdGU7XG5cblx0XHRjb25zdCBrZXkgPSBnZXRLZXkodGVtcGxhdGUsIGNhY2hlLCBhbGlhcyk7XG5cdFx0aWYgKGtleSAmJiBDQUNIRVtrZXldKSByZXR1cm4gQ0FDSEVba2V5XTtcblx0XHRlbHNlIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHJldHVybiBmcm9tU291cmNlKHRlbXBsYXRlLCBjYWNoZSwga2V5KTtcblx0XHR9IGVsc2UgaWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgVVJMKSByZXR1cm4gYXdhaXQgZnJvbVVSTCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cdFx0ZWxzZSBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBOb2RlIHx8IHRlbXBsYXRlIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgdGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiB8fCB0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHJldHVybiBmcm9tRWxlbWVudCh0ZW1wbGF0ZSwgY2FjaGUsIGtleSk7XG5cblx0XHRuZXcgRXJyb3IoXCJUaGUgdGVtcGxhdGUgaXNuJ3QgYSBhbGxvd2VkIHR5cGUhIC0+IFtTdHJpbmd8VVJMfE5vZGV8Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb258VGVtcGxhdGVdIHJlcXVpcmVkIVwiKTtcblx0fVxufVxuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gLyhqc3RsKT8oXFw/KT8oQCk/KFteXFw/QF0rKS9pO1xuXG5jb25zdCBERUZBVUxUX0VWRU5UX0ZVTkNUSU9OID0gXCJkZWZhdWx0XCI7XG5jb25zdCBFVkVOVEZVTkNUSU9OUyA9IHtcblx0ZGVsZWdhdGU6IGFzeW5jIChldmVudCwgaGFuZGxlLCBzZXR0aW5nLCB0eXBlLCByZXNvbHZlciwgY29udGVudCwgb3B0aW9ucywgY29udGV4dCkgPT4ge1xuXHRcdGNvbnN0IGV2ZW50aGFuZGxlID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoaGFuZGxlLCBoYW5kbGUpO1xuXHRcdGNvbnRlbnQub24oZXZlbnQsIGRlbGVnYXRlcihldmVudGhhbmRsZSwgc2V0dGluZykpO1xuXHR9LFxuXHR0b2dnbGVjbGFzczogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgY2xhenogPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSk7XHRcdFxuXHRcdGNvbnRlbnQub24oZXZlbnQsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLnRvZ2dsZUNsYXNzKGNsYXp6KTtcblx0XHR9KTtcblx0fSxcblx0dG9nZ2xlYXR0cmlidXRlOiBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLnNoaWZ0KCk7XG5cdFx0Y29uc3Qgc2VsZWN0b3IgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChoYW5kbGUsIGhhbmRsZSk7XHRcdFxuXHRcdGNvbnRlbnQub24oZXZlbnQsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnRlbnQuY2xvc2VzdHMoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdGVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSlcdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cdFtERUZBVUxUX0VWRU5UX0ZVTkNUSU9OXTogYXN5bmMgKGV2ZW50LCBoYW5kbGUsIHNldHRpbmcsIHR5cGUsIHJlc29sdmVyLCBjb250ZW50LCBvcHRpb25zLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3QgZXZlbnRoYW5kbGUgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGhhbmRsZSwgaGFuZGxlKTtcblxuXHRcdGlmICghZXZlbnRoYW5kbGUpIGNvbnNvbGUuZXJyb3IobmV3IEVycm9yKFwiQ2FuJ3QgcmVzb2x2ZSBcXFwiXCIgKyBoYW5kbGUgKyAnXCIgdG8gZXZlbnQgaGFuZGxlIScpKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgZXZlbnRoYW5kbGUgPT09IFwiZnVuY3Rpb25cIikgY29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBldmVudGhhbmRsZSA9PT0gXCJzdHJpbmdcIikgY29udGVudC5vbihldmVudCwgZGVsZWdhdGVyKGV2ZW50aGFuZGxlLCBzZXR0aW5nKSk7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGV2ZW50aGFuZGxlID09PSBcIm9iamVjdFwiKSB7XG5cdFx0XHRjb25zdCB7IGNhcHR1cmUgPSBmYWxzZSwgcGFzc2l2ZSA9IGZhbHNlLCBvbmNlID0gZmFsc2UgfSA9IGV2ZW50aGFuZGxlO1xuXHRcdFx0Y29udGVudC5vbihldmVudCwgZXZlbnRoYW5kbGUuZXZlbnRIYW5kbGUsIHsgY2FwdHVyZSwgcGFzc2l2ZSwgb25jZSB9KTtcblx0XHR9XG5cdH0sXG59O1xuXG5jb25zdCBiaW5kQXR0cmlidXRlID0gYXN5bmMgKHsgY29uZGl0aW9uLCBuYW1lLCB2YWx1ZSwgY29udGV4dCB9KSA9PiB7XG5cdGNvbnN0IHsgcmVzb2x2ZXIsIGNvbnRlbnQsIHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXG5cdGxldCBhdHRyaWJ1dGUgPSAhY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKG5hbWUpO1xuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyB2YWx1ZSA6IHRlbXBsYXRlLmF0dHIoXCI/XCIgKyBuYW1lKTtcblx0Y29uc3QgaGFzVmFsdWUgPSBpc1ZhbHVlKGF0dHJpYnV0ZSk7XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYXNWYWx1ZSkge1xuXHRcdGNvbmRpdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSk7XG5cdFx0aWYgKGNvbmRpdGlvbiA9PT0gdHJ1ZSkgY29udGVudC5hdHRyKG5hbWUsIGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGF0dHJpYnV0ZSwgYXR0cmlidXRlKSk7XG5cdH0gZWxzZSBpZiAoY29uZGl0aW9uKSB7XG5cdFx0Y29uZGl0aW9uID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKTtcblx0XHRpZiAoY29uZGl0aW9uID09PSB0cnVlKSBjb250ZW50LmF0dHIobmFtZSwgdHJ1ZSk7XG5cdH0gZWxzZSBpZiAoaGFzVmFsdWUpIHtcblx0XHRjb250ZW50LmF0dHIobmFtZSwgYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQoYXR0cmlidXRlLCBhdHRyaWJ1dGUpKTtcblx0fVxufTtcblxuY29uc3QgaXNWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XG59O1xuXG5jb25zdCBiaW5kRXZlbnQgPSBhc3luYyAoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pID0+IHtcblx0Y29uc3QgeyByZXNvbHZlciwgdGVtcGxhdGUsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gdmFsdWUgOiB0ZW1wbGF0ZS5hdHRyKFwiP0BcIiArIG5hbWUpO1xuXHRsZXQgaGFuZGxlID0gIWNvbmRpdGlvbiA/IHZhbHVlIDogdGVtcGxhdGUuYXR0cihcIkBcIiArIG5hbWUpO1xuXHRsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcblx0Y29uc3QgZXZlbnQgPSBzcGxpdC5zaGlmdCgpO1xuXHRjb25zdCB0eXBlID0gKHNwbGl0LnNoaWZ0KCkgfHwgREVGQVVMVF9FVkVOVF9GVU5DVElPTikudG9Mb3dlckNhc2UoKTtcblxuXHRjb25zdCBzZXR0aW5nID0ge1xuXHRcdGJ1YmJsZTogZmFsc2UsXG5cdH07XG5cblx0aWYgKGNvbmRpdGlvbiAmJiBoYW5kbGUpIHtcblx0XHRpZiAoKGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY29uZGl0aW9uLCBmYWxzZSkpID09IHRydWUpIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcblx0fSBlbHNlIGlmIChoYW5kbGUpIGF3YWl0IGJpbmRpbmcoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIHNwbGl0LCBjb250ZXh0KTtcbn07XG5cbmNvbnN0IGJpbmRpbmcgPSBhc3luYyAoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpID0+IHtcblx0Y29uc3QgYmluZGVyID0gRVZFTlRGVU5DVElPTlNbdHlwZV07XG5cdGlmIChiaW5kZXIpIHJldHVybiBiaW5kZXIoZXZlbnQsIGhhbmRsZSwgc2V0dGluZywgdHlwZSwgcmVzb2x2ZXIsIGNvbnRlbnQsIG9wdGlvbnMsIGNvbnRleHQpO1xufTtcblxuY29uc3QgZGVsZWdhdGVyID0gZnVuY3Rpb24gKGRlbGVnYXRlLCBzZXR0aW5nKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmIChldmVudC5jdXJyZW50VGFyZ2V0KSBldmVudC5jdXJyZW50VGFyZ2V0LnRyaWdnZXIoZGVsZWdhdGUsIGV2ZW50KTtcblx0XHRlbHNlIGV2ZW50LnRhcmdldC50cmlnZ2VyKGRlbGVnYXRlLCBldmVudCk7XG5cdH07XG59O1xuXG5jbGFzcyBBdHRyaWJ1dGUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7XG5cdFx0cmV0dXJuIFwiYXR0cmlidXRlXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS5jb250ZW50O1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkgcmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBwcm9jZXNzZWQgPSBuZXcgU2V0KCk7XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgdGVtcGxhdGUuYXR0cmlidXRlcykge1xuXHRcdFx0Y29uc3QgWywganN0bCwgY29uZGl0aW9uLCBldmVudCwgbmFtZV0gPSBBVFRSSUJVVEVfTkFNRS5leGVjKGF0dHJpYnV0ZS5uYW1lKTtcblx0XHRcdGlmICghanN0bCAmJiAhcHJvY2Vzc2VkLmhhcyhuYW1lKSkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblxuXHRcdFx0XHRpZiAoZXZlbnQpIGF3YWl0IGJpbmRFdmVudCh7IGNvbmRpdGlvbiwgZXZlbnQsIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0XHRlbHNlIGF3YWl0IGJpbmRBdHRyaWJ1dGUoeyBjb25kaXRpb24sIG5hbWUsIHZhbHVlLCBjb250ZXh0IH0pO1xuXHRcdFx0fVxuXHRcdFx0cHJvY2Vzc2VkLmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgQXR0cmlidXRlKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY2xhc3MgQ2hvb3NlIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJjaG9vc2VcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMSB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLWNob29zZVwiKSB8fCBjb250ZXh0LnRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAwKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciB9ID0gY29udGV4dDtcblx0XHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0XHRjb25zdCB3aGVucyA9IHRlbXBsYXRlLmZpbmQoXCI6c2NvcGUgPiBbanN0bC13aGVuXVwiKTtcblx0XHRjb25zdCBsZW5ndGggPSB3aGVucy5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgbm9kZSA9IHdoZW5zW2ldO1xuXHRcdFx0aWYgKCFyZXNvbHZlZCAmJiAoYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShub2RlLmF0dHIoXCJqc3RsLXdoZW5cIiksIGZhbHNlKSkpXG5cdFx0XHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0bm9kZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHRpZiAocmVzb2x2ZWQpXG5cdFx0XHR0ZW1wbGF0ZS5maW5kKFwiOnNjb3BlID4gW2pzdGwtb3RoZXJ3aXNlXVwiKS5yZW1vdmUoKTtcblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBDaG9vc2UoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcblxuY29uc3QgTU9ERVMgPSB7XG5cdFwicmVtb3RlXCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1x0XHRcblx0XHRjb25zdCB7cmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KGRhdGEpO1xuXHRcdGRhdGEgPSBuZXcgVVJMKGRhdGEsIGxvY2F0aW9uLm9yaWdpbik7XG5cdFx0bGV0IG9wdGlvbiA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtb3B0aW9uXCIpIHx8IFwie31cIik7XG5cdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXG5cdFx0ZGF0YSA9IGF3YWl0IGZldGNoKGRhdGEudG9TdHJpbmcoKSwgb3B0aW9uKTtcblx0XHRyZXR1cm4gZGF0YS5qc29uKCk7XG5cdH0sXHRcblx0XCJzZXRcIjogYXN5bmMgKHsgZGF0YSwgY29udGV4dCB9KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0ZGF0YSA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZGF0YSk7XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH0sXG5cdFwiZGlyZWN0XCI6IGFzeW5jICh7IGRhdGEsIGNvbnRleHQgfSkgPT4ge1xuXHRcdGNvbnN0IHtyZXNvbHZlcn0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChkYXRhKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxufTtcblxuY29uc3QgdXBkYXRlQ29udGV4dCA9ICh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pID0+IHtcblx0aWYgKHZhcm5hbWUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci51cGRhdGVEYXRhKHZhcm5hbWUsIGRhdGEsIHNjb3BlKTtcblx0ZWxzZSBpZiAoc2NvcGUpXG5cdFx0Y29udGV4dC5yZXNvbHZlci5tZXJnZUNvbnRleHQoZGF0YSwgc2NvcGUpO1xuXHRlbHNle1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblx0XHQvL2NvbnRleHQgPSBjb250ZXh0LnN1YkNvbnRleHQoe3Jlc29sdmVyfSk7XG5cdFx0Y29udGV4dC5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHR9XG5cdFxuXHRcdFxuXHRyZXR1cm4gY29udGV4dDtcbn07XG5cblxuXG5jbGFzcyBEYXRhIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJkYXRhXCIgfVxuXHRnZXQgcmFuaygpIHsgcmV0dXJuIDEwMDAgfVxuXHRnZXQgcGhhc2UoKXtyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmRhdGF9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhY29udGV4dC50ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0XHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSB9ID0gY29udGV4dDtcdFx0XHRcblx0XHRcdGNvbnN0IG1vZGUgPSBNT0RFU1sodGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS1tb2RlXCIpIHx8IFwicmVtb3RlXCIpXTtcblx0XHRcdGlmICghbW9kZSlcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGpzdGwtZGF0YS1tb2RlIGlzIHVuc3VwcG9ydGVkIVwiKTtcblxuXHRcdFx0bGV0IGRhdGEgPSB0ZW1wbGF0ZS5hdHRyKFwianN0bC1kYXRhXCIpO1xuXHRcdFx0ZGF0YSA9IGF3YWl0IG1vZGUoeyBkYXRhLCBjb250ZXh0IH0pO1xuXG5cdFx0XHRjb25zdCB2YXJuYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtZGF0YS12YXJcIik7XG5cdFx0XHRjb25zdCBzY29wZSA9IHRlbXBsYXRlLmF0dHIoXCJqc3RsLWRhdGEtc2NvcGVcIik7XG5cdFx0XHRjb250ZXh0ID0gdXBkYXRlQ29udGV4dCh7IHZhcm5hbWUsIGRhdGEsIHNjb3BlLCBjb250ZXh0IH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSwgY29udGV4dC50ZW1wbGF0ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgRGF0YSgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuXG5jb25zdCBBVFRSSUJVVEUgPSB7XG5cdERBVEE6IFwianN0bC1mb3JlYWNoXCIsXG5cdFZBUjogXCJqc3RsLWZvcmVhY2gtdmFyXCIsXG5cdFNUQVRVUzogXCJqc3RsLWZvcmVhY2gtc3RhdHVzXCIsXG5cdENPVU5UOiBcImpzdGwtZm9yZWFjaC1jb3VudFwiLFxuXHRTVEFSVDogXCJqc3RsLWZvcmVhY2gtc3RhcnRcIixcblx0U1RFUDogXCJqc3RsLWZvcmVhY2gtc3RlcFwiLFxuXHRDT05ESVRJT046IFwianN0bC1mb3JlYWNoLWNvbmRpdGlvblwiXG59O1xuXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblxuXHRjb3VudCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQpO1xuXHRjb25zdCBsZW5ndGggPSBzdGFydCArIChjb3VudCAqIHN0ZXApO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudFxuXHRcdH07XG5cdFx0c3RvcCA9ICEoYXdhaXQgaXRlcmF0ZShpdGVyYXRpb24sIG9wdGlvbikpO1xuXHR9XG59O1xuXG5jb25zdCBkb0ZvcmVhY2ggPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRsZXQgYXJyYXkgPSBkYXRhO1xuXHRpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKVxuXHRcdGFycmF5ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGF0YSk7XG5cblx0Y291bnQgPSBjb3VudCAhPSBcIlwiID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb3VudCwgMCkgOiBudWxsO1xuXHRjb25zdCBsZW5ndGggPSBjb3VudCA/IE1hdGgubWluKHN0YXJ0ICsgY291bnQsIGFycmF5Lmxlbmd0aCkgOiBhcnJheS5sZW5ndGg7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge31cblx0XHRpdGVyYXRpb25bdmFybmFtZV0gPSBkYXRhW2ldO1xuXHRcdGl0ZXJhdGlvbltzdGF0dXNdID0ge1xuXHRcdFx0aW5kZXg6IGksXG5cdFx0XHRudW1iZXI6IGkgKyAxLFxuXHRcdFx0Y291bnQ6IGxlbmd0aCxcblx0XHRcdGRhdGFcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgaXRlcmF0ZSA9IGFzeW5jIChkYXRhLCBvcHRpb24pID0+IHtcblx0bGV0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29udGFpbmVyLCBjb25kaXRpb24sIGNvbnRleHQgfSA9IG9wdGlvbjtcblx0cmVzb2x2ZXIgPSBuZXcgRXhwcmVzc2lvblJlc29sdmVyKHsgY29udGV4dDogZGF0YSwgbmFtZTogXCJqc3RsLWZvcmVhY2hcIiwgcGFyZW50OiByZXNvbHZlciB9KTtcblxuXHRjb25kaXRpb24gPSBjb25kaXRpb24gPyBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvbmRpdGlvbiwgZmFsc2UpIDogZmFsc2U7XG5cdGlmIChjb25kaXRpb24pXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHRjb25zdCBpdGVtQ29udGV4dCA9IGNvbnRleHQuc3ViQ29udGV4dCh7IHJlc29sdmVyLCBjb250YWluZXIsIHRlbXBsYXRlLCBtb2RlOiBcImFwcGVuZFwiIH0pO1xuXHRhd2FpdCByZW5kZXJlci5yZW5kZXIoaXRlbUNvbnRleHQpO1xuXHRhd2FpdCBpdGVtQ29udGV4dC5yZWFkeSgpO1xuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNsYXNzIEZvcmVhY2ggZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBcImZvcmVhY2hcIiB9XG5cdGdldCByYW5rKCkgeyByZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LICsgMiB9XG5cdGdldCBwaGFzZSgpIHsgcmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZSB9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAoIWNvbnRleHQudGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgJiYgIWNvbnRleHQudGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpKSlcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXG5cdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7IHRlbXBsYXRlLCByZXNvbHZlciwgcmVuZGVyZXIsIGNvbnRlbnQgfSA9IGNvbnRleHQ7XG5cdFx0XHRjb25zdCBvcHRpb24gPSB7XG5cdFx0XHRcdGRhdGE6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdGNvdW50OiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IFwiXCIpLnRyaW0oKSxcblx0XHRcdFx0c3RhcnQ6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBUlQpIHx8IFwiMFwiKSxcblx0XHRcdFx0c3RlcDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEVQKSB8fCBcIjFcIiksXG5cdFx0XHRcdHZhcm5hbWU6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5WQVIpIHx8IFwiaXRlbVwiKS50cmltKCksXG5cdFx0XHRcdHN0YXR1czogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVRVUykgfHwgXCJzdGF0dXNcIikudHJpbSgpLFxuXHRcdFx0XHRjb25kaXRpb246IHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPTkRJVElPTiksXG5cdFx0XHRcdHRlbXBsYXRlOiB0ZW1wbGF0ZS5jaGlsZE5vZGVzLFxuXHRcdFx0XHRyZXNvbHZlcixcblx0XHRcdFx0cmVuZGVyZXIsXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGVudCxcblx0XHRcdFx0Y29udGV4dFxuXHRcdFx0fTtcblx0XHRcdGlmICgoIW9wdGlvbi5kYXRhIHx8IG9wdGlvbi5kYXRhID09IFwiXCIpICYmIG9wdGlvbi5jb3VudClcblx0XHRcdFx0YXdhaXQgZG9Db3VudChvcHRpb24pO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRhd2FpdCBkb0ZvcmVhY2gob3B0aW9uKTtcblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiZXJyb3IgYXQganN0bC1mb3JlYWNoOlwiLCBlcnJvcik7XG5cdFx0fVxuXHRcdHJldHVybiBjb250ZXh0O1xuXG5cdH1cbn07XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBGb3JlYWNoKCkgfSk7IiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5cbmNsYXNzIElmIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkgeyByZXR1cm4gXCJpZlwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxMDAwIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQgfVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRlbXBsYXRlLmF0dHIoXCJqc3RsLWlmXCIpKVxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cblx0XHRjb25zdCBleHByZXNzaW9uID0gdGVtcGxhdGUuYXR0cihcImpzdGwtaWZcIik7XG5cdFx0Y29uc3QgcmVzb2x2ZXIgPSBjb250ZXh0LnJlc29sdmVyO1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoZXhwcmVzc2lvbiwgZmFsc2UpO1xuXHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBudWxsO1xuXHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSWYoKSB9KTsiLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBUZW1wbGF0ZSBmcm9tIFwiLi4vVGVtcGxhdGUuanNcIjtcblxuY2xhc3MgSW5jbHVkZSBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHtcblx0XHRyZXR1cm4gXCJpbmNsdWRlXCI7XG5cdH1cblx0Z2V0IHJhbmsoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5NSU5fUkFOSztcblx0fVxuXHRnZXQgcGhhc2UoKSB7XG5cdFx0cmV0dXJuIERpcmVjdGl2ZS5QSEFTRS50ZW1wbGF0ZTtcblx0fVxuXG5cdGFzeW5jIGV4ZWN1dGUoY29udGV4dCkge1xuXHRcdGlmICghKGNvbnRleHQudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIWNvbnRleHQudGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZVwiKSkgcmV0dXJuIGNvbnRleHQ7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciB9ID0gY29udGV4dDtcblx0XHRcdGxldCBpbmNsdWRlID0gdGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZVwiKTtcblx0XHRcdGluY2x1ZGUgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dChpbmNsdWRlKTtcblx0XHRcdGluY2x1ZGUgPSBuZXcgVVJMKGluY2x1ZGUsIGxvY2F0aW9uKTtcblx0XHRcdGluY2x1ZGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKGluY2x1ZGUpO1xuXG5cdFx0XHRjb25zdCBtb2RlID0gdGVtcGxhdGUuYXR0cihcImpzdGwtaW5jbHVkZS1tb2RlXCIpIHx8IFwicmVwbGFjZVwiO1xuXG5cdFx0XHRjb25zdCBzdWJDb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IGluY2x1ZGUsIGNvbnRhaW5lcjogY29udGV4dC5jb250ZW50LCBtb2RlfSk7XG5cdFx0XHRhd2FpdCByZW5kZXJlci5yZW5kZXIoc3ViQ29udGV4dCk7XG5cdFx0XHRhd2FpdCBzdWJDb250ZXh0LnJlYWR5KCk7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZTtcblxuXHRcdFx0cmV0dXJuIGNvbnRleHQ7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlLCBjb250ZXh0LnRlbXBsYXRlKTtcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH1cblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgSW5jbHVkZSgpIH0pO1xuIiwiaW1wb3J0IERpcmVjdGl2ZSBmcm9tIFwiLi4vRGlyZWN0aXZlLmpzXCI7XG5pbXBvcnQgUmVwbGFjZSBmcm9tIFwiLi4vZWxlbWVudHMvUmVwbGFjZS5qc1wiO1xuXG5jbGFzcyBJbml0aWFsIGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBcImluaXRpYWxcIjtcblx0fVxuXHRnZXQgcmFuaygpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLk1JTl9SQU5LO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmluaXQ7XG5cdH1cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlLCByZW5kZXJlciwgcmVzb2x2ZXIgfSA9IGNvbnRleHQ7XG5cdFx0aWYgKCEodGVtcGxhdGUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5hdHRyKFwianN0bC1hc3luY1wiKSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gbmV3IFJlcGxhY2UoKTtcblx0XHRcdHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIsIG51bGwpO1xuXHRcdFx0Y29uc3QgcmVuZGVyT3B0aW9uID0gY29udGV4dC50b1JlbmRlck9wdGlvbih7IG1vZGU6IFwicmVwbGFjZVwiLCB0YXJnZXQ6IGNvbnRleHQuY29udGVudCB9KTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRyZW5kZXJlci5yZW5kZXIocmVuZGVyT3B0aW9uKTtcblx0XHRcdH0sIHBhcnNlSW50KHRlbXBsYXRlLmF0dHIoXCJqc3RsLWFzeW5jXCIpIHx8IFwiMjUwXCIpIHx8IDI1MCk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUuYXR0cihcImpzdGwtaWdub3JlXCIpKSB7XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcblx0XHRcdGNvbnRleHQuY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGVtcGxhdGUudGFnTmFtZSk7XG5cdFx0XHRjb25zdCBzdWJDb250ZXh0ID0gY29udGV4dC5zdWJDb250ZXh0KHsgdGVtcGxhdGU6IHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcywgY29udGFpbmVyOiBjb250ZXh0LmNvbnRlbnQuY29udGVudCB9KTtcblx0XHRcdGF3YWl0IHJlbmRlcmVyLnJlbmRlcihzdWJDb250ZXh0KTtcdFx0XHRcblx0XHRcdGNvbnRleHQuc3RvcCA9IHRydWU7XG5cdFx0XHRjb250ZXh0Lmlnbm9yZSA9IHRydWU7XG5cdFx0fSBlbHNlIGlmICh0ZW1wbGF0ZS5oYXNBdHRyaWJ1dGUoXCJqc3RsLXRhZ25hbWVcIikpIHtcblx0XHRcdGxldCB0YWduYW1lID0gdGVtcGxhdGUuYXR0cihcImpzdGwtdGFnbmFtZVwiKS50cmltKCk7XG5cdFx0XHRpZiAodGFnbmFtZS5sZW5ndGggPiAwKSBjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHRlbXBsYXRlLmF0dHIoXCJqc3RsLXRhZ25hbWVcIikpKTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblx0XHRcdFx0Y29udGV4dC5zdG9wID0gdHJ1ZTtcblx0XHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGVtcGxhdGUudGFnTmFtZSkge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0ZW1wbGF0ZS50YWdOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZSwgdHJ1ZSk7XG5cdFx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdFx0Y29udGV4dC5pZ25vcmUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBJbml0aWFsKCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcbmltcG9ydCBFeHByZXNzaW9uUmVzb2x2ZXIgZnJvbSBcIkBkZWZhdWx0LWpzL2RlZmF1bHRqcy1leHByZXNzaW9uLWxhbmd1YWdlL3NyYy9FeHByZXNzaW9uUmVzb2x2ZXJcIjtcblxuY29uc3QgTkFNRSA9IFwib24tZmluaXNoZWRcIjtcbmNvbnN0IEFUVFJJQlVURV9PTl9GSU5JU0hFRCA9IGBqc3RsLSR7TkFNRX1gO1xuY29uc3QgQVRUUklCVVRFX09OX0ZJTklTSEVEX0FTWU5DID0gYCR7QVRUUklCVVRFX09OX0ZJTklTSEVEfS1hc3luY2A7XG5cbmNsYXNzIE9uRmluaXNoZWQgZXh0ZW5kcyBEaXJlY3RpdmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IG5hbWUoKSB7IHJldHVybiBOQU1FIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUFYX1JBTksgfVxuXHRnZXQgcGhhc2UoKSB7IHJldHVybiBEaXJlY3RpdmUuUEhBU0UuZmluaXNoIH1cblxuXG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgY29udGVudCwgcm9vdCB9ID0gY29udGV4dDtcblx0XHRpZiAoISh0ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAhdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRCkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IGV4cHJlc3Npb24gPSB0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURV9PTl9GSU5JU0hFRCk7XG5cdFx0Y29uc3QgYXN5bmNDYWxsID0gdGVtcGxhdGUuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9PTl9GSU5JU0hFRF9BU1lOQyk7XG5cblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0JGVsZW1lbnQ6IGNvbnRlbnQsXG5cdFx0XHQkcm9vdDogcm9vdCxcblx0XHRcdCR0ZW1wbGF0ZTogdGVtcGxhdGVcblx0XHR9O1xuXHRcdGNvbnN0IHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IFwianN0bC1kYXRhXCIsIHBhcmVudDogY29udGV4dC5yZXNvbHZlciB9KTtcblxuXG5cdFx0Y29udGV4dC5maW5pc2hlZChhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZighYXN5bmNDYWxsKVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRyZXNvbHZlci5yZXNvbHZlKGV4cHJlc3Npb24sIG51bGwpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgT25GaW5pc2hlZCgpIH0pOyIsImltcG9ydCBEaXJlY3RpdmUgZnJvbSBcIi4uL0RpcmVjdGl2ZS5qc1wiO1xuaW1wb3J0IEV4cHJlc3Npb25SZXNvbHZlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWV4cHJlc3Npb24tbGFuZ3VhZ2Uvc3JjL0V4cHJlc3Npb25SZXNvbHZlci5qc1wiO1xuXG5jb25zdCBESVJFQ1RJVkVOQU1FID0gXCJqc3RsLXJlcGVhdFwiO1xuY29uc3QgSUdOT1JFRElSRUNUSVZFID0gbmV3IFNldChbRElSRUNUSVZFTkFNRV0pO1xuXG5jb25zdCBBVFRSSUJVVEUgPSB7XG5cdERBVEE6IGAke0RJUkVDVElWRU5BTUV9YCxcblx0VkFSOiBgJHtESVJFQ1RJVkVOQU1FfS12YXJgLFxuXHRTVEFUVVM6IGAke0RJUkVDVElWRU5BTUV9LXN0YXR1c2AsXG5cdENPVU5UOiBgJHtESVJFQ1RJVkVOQU1FfS1jb3VudGAsXG5cdFNUQVJUOiBgJHtESVJFQ1RJVkVOQU1FfS1zdGFydGAsXG5cdFNURVA6IGAke0RJUkVDVElWRU5BTUV9LXN0ZXBgLFxuXHRDT05ESVRJT046IGAke0RJUkVDVElWRU5BTUV9LWNvbmRpdGlvbmAsXG59O1xuXG5jb25zdCBkb0NvdW50ID0gYXN5bmMgKG9wdGlvbikgPT4ge1xuXHRsZXQgeyBzdGFydCwgc3RlcCwgY291bnQsIHZhcm5hbWUsIHN0YXR1cywgcmVzb2x2ZXIgfSA9IG9wdGlvbjtcblx0Y291bnQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGNvdW50KTtcblx0Y29uc3QgbGVuZ3RoID0gc3RhcnQgKyBjb3VudCAqIHN0ZXA7XG5cdGxldCBzdG9wID0gZmFsc2U7XG5cdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxlbmd0aCAmJiAhc3RvcDsgaSA9IGkgKyBzdGVwKSB7XG5cdFx0Y29uc3QgaXRlcmF0aW9uID0ge307XG5cdFx0aXRlcmF0aW9uW3Zhcm5hbWVdID0gaTtcblx0XHRpdGVyYXRpb25bc3RhdHVzXSA9IHtcblx0XHRcdGluZGV4OiBpLFxuXHRcdFx0bnVtYmVyOiBpICsgMSxcblx0XHRcdHN0ZXAsXG5cdFx0XHRjb3VudCxcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgZG9SZXBlYXQgPSBhc3luYyAob3B0aW9uKSA9PiB7XG5cdGxldCB7IGRhdGEsIHN0YXJ0LCBzdGVwLCBjb3VudCwgdmFybmFtZSwgc3RhdHVzLCByZXNvbHZlciB9ID0gb3B0aW9uO1xuXG5cdGRhdGEgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlKGRhdGEpO1xuXHRsZXQgYXJyYXkgPSBkYXRhO1xuXHRpZiAoIShkYXRhIGluc3RhbmNlb2YgQXJyYXkpKSBhcnJheSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRhdGEpO1xuXG5cdGNvdW50ID0gY291bnQgIT0gXCJcIiA/IGF3YWl0IHJlc29sdmVyLnJlc29sdmUoY291bnQsIDApIDogbnVsbDtcblx0Y29uc3QgbGVuZ3RoID0gY291bnQgPyBNYXRoLm1pbihzdGFydCArIGNvdW50LCBhcnJheS5sZW5ndGgpIDogYXJyYXkubGVuZ3RoO1xuXHRsZXQgc3RvcCA9IGZhbHNlO1xuXHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsZW5ndGggJiYgIXN0b3A7IGkgPSBpICsgc3RlcCkge1xuXHRcdGNvbnN0IGl0ZXJhdGlvbiA9IHt9O1xuXHRcdGl0ZXJhdGlvblt2YXJuYW1lXSA9IGRhdGFbaV07XG5cdFx0aXRlcmF0aW9uW3N0YXR1c10gPSB7XG5cdFx0XHRpbmRleDogaSxcblx0XHRcdG51bWJlcjogaSArIDEsXG5cdFx0XHRjb3VudDogbGVuZ3RoLFxuXHRcdFx0ZGF0YSxcblx0XHR9O1xuXHRcdHN0b3AgPSAhKGF3YWl0IGl0ZXJhdGUoaXRlcmF0aW9uLCBvcHRpb24pKTtcblx0fVxufTtcblxuY29uc3QgaXRlcmF0ZSA9IGFzeW5jIChkYXRhLCBvcHRpb24pID0+IHtcblx0bGV0IHsgdGVtcGxhdGUsIHJlc29sdmVyLCByZW5kZXJlciwgY29uZGl0aW9uLCBjb250ZXh0IH0gPSBvcHRpb247XG5cdHJlc29sdmVyID0gbmV3IEV4cHJlc3Npb25SZXNvbHZlcih7IGNvbnRleHQ6IGRhdGEsIG5hbWU6IERJUkVDVElWRU5BTUUsIHBhcmVudDogcmVzb2x2ZXIgfSk7XG5cblx0Y29uZGl0aW9uID0gY29uZGl0aW9uID8gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZShjb25kaXRpb24sIGZhbHNlKSA6IGZhbHNlO1xuXHRpZiAoY29uZGl0aW9uKSByZXR1cm4gZmFsc2U7XG5cblx0Y29uc3QgaXRlbUNvbnRleHQgPSAgY29udGV4dC5zdWJDb250ZXh0KHsgcmVzb2x2ZXIsIHRlbXBsYXRlLCBtb2RlOiBcImFwcGVuZFwiLCBpZ25vcmVEaXJlY3RpdmU6IElHTk9SRURJUkVDVElWRSB9KVxuXHRhd2FpdCByZW5kZXJlci5yZW5kZXIoaXRlbUNvbnRleHQpO1xuXHRhd2FpdCBpdGVtQ29udGV4dC5yZWFkeSgpO1xuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY2xhc3MgUmVwZWF0IGV4dGVuZHMgRGlyZWN0aXZlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBuYW1lKCkge1xuXHRcdHJldHVybiBESVJFQ1RJVkVOQU1FO1xuXHR9XG5cdGdldCByYW5rKCkge1xuXHRcdHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAzO1xuXHR9XG5cdGdldCBwaGFzZSgpIHtcblx0XHRyZXR1cm4gRGlyZWN0aXZlLlBIQVNFLnRlbXBsYXRlO1xuXHR9XG5cblx0YXN5bmMgZXhlY3V0ZShjb250ZXh0KSB7XG5cdFx0aWYgKCEoY29udGV4dC50ZW1wbGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fCAoIWNvbnRleHQudGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuREFUQSkgJiYgIWNvbnRleHQudGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpKSkgcmV0dXJuIGNvbnRleHQ7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyB0ZW1wbGF0ZSwgcmVzb2x2ZXIsIHJlbmRlcmVyLCBjb250ZW50LCBjb250YWluZXIgfSA9IGNvbnRleHQ7XG5cdFx0XHRjb25zdCBvcHRpb24gPSB7XG5cdFx0XHRcdGRhdGE6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5EQVRBKSB8fCBcIlwiKS50cmltKCksXG5cdFx0XHRcdGNvdW50OiAodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuQ09VTlQpIHx8IFwiXCIpLnRyaW0oKSxcblx0XHRcdFx0c3RhcnQ6IGF3YWl0IHJlc29sdmVyLnJlc29sdmUodGVtcGxhdGUuYXR0cihBVFRSSUJVVEUuU1RBUlQpIHx8IFwiMFwiKSxcblx0XHRcdFx0c3RlcDogYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZSh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5TVEVQKSB8fCBcIjFcIiksXG5cdFx0XHRcdHZhcm5hbWU6ICh0ZW1wbGF0ZS5hdHRyKEFUVFJJQlVURS5WQVIpIHx8IFwiaXRlbVwiKS50cmltKCksXG5cdFx0XHRcdHN0YXR1czogKHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLlNUQVRVUykgfHwgXCJzdGF0dXNcIikudHJpbSgpLFxuXHRcdFx0XHRjb25kaXRpb246IHRlbXBsYXRlLmF0dHIoQVRUUklCVVRFLkNPTkRJVElPTiksXG5cdFx0XHRcdHRlbXBsYXRlOiB0ZW1wbGF0ZSxcblx0XHRcdFx0dGFnbmFtZTogY29udGVudC50YWdOYW1lLFxuXHRcdFx0XHRyZXNvbHZlcixcblx0XHRcdFx0cmVuZGVyZXIsXG5cdFx0XHRcdGNvbnRhaW5lcixcblx0XHRcdFx0Y29udGV4dCxcblx0XHRcdH07XG5cdFx0XHRpZiAoKCFvcHRpb24uZGF0YSB8fCBvcHRpb24uZGF0YSA9PSBcIlwiKSAmJiBvcHRpb24uY291bnQpIGF3YWl0IGRvQ291bnQob3B0aW9uKTtcblx0XHRcdGVsc2UgYXdhaXQgZG9SZXBlYXQob3B0aW9uKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcImVycm9yIGF0IGpzdGwtcmVwZWF0OlwiLCBlcnJvcik7XG5cdFx0fVxuXG5cdFx0Y29udGV4dC5jb250ZW50ID0gbnVsbDtcblx0XHRjb250ZXh0LnN0b3AgPSB0cnVlO1xuXHRcdGNvbnRleHQuaWdub3JlID0gdHJ1ZTtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fVxufVxuXG5EaXJlY3RpdmUuZGVmaW5lKHsgZGlyZWN0aXZlOiBuZXcgUmVwZWF0KCkgfSk7XG4iLCJpbXBvcnQgRGlyZWN0aXZlIGZyb20gXCIuLi9EaXJlY3RpdmUuanNcIjtcblxuY29uc3QgREVGQVVMVF9PUFRJT04gPSB7XG5cdG1vZGU6IFwidGV4dFwiLFxuXHR1bnNlY3VyZTogZmFsc2UsXG5cdHByZXZlbnRGb3JtYXQgOiBmYWxzZSxcblx0bWF4TGVuZ3RoOiAwXHRcbn07XG5cbmNvbnN0IFNFQ1VSRV9IVE1MX0ZJTFRFUiA9IFwic2NyaXB0LCBzdHlsZSwgYm9keSwgaHRtbCwgaGVhZCwgb2JqZWN0LCBsaW5rXCI7XG5cbmNvbnN0IHJlYWRPcHRpb24gPSBhc3luYyAocGFyZW50LCBjb250ZXh0KSA9PiB7XG5cdGNvbnN0IHJlc29sdmVyID0gY29udGV4dC5yZXNvbHZlcjtcblx0cmV0dXJuIHtcblx0XHRtb2RlOiBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCgocGFyZW50LmF0dHIoXCJqc3RsLXRleHQtY29udGVudC10eXBlXCIpIHx8IFwidGV4dFwiKS50cmltKCkudG9Mb3dlckNhc2UoKSksXG5cdFx0dW5zZWN1cmU6IHBhcmVudC5oYXNBdHRyaWJ1dGUoXCJqc3RsLXRleHQtdW5zZWN1cmVcIiksXG5cdFx0cHJldmVudEZvcm1hdDogISFwYXJlbnQuYXR0cihcImpzdGwtdGV4dC1wcmV2ZW50LWZvcm1hdFwiKSB8fCBmYWxzZSxcblx0XHRtYXhMZW5ndGg6IHBhcnNlSW50KGF3YWl0IHJlc29sdmVyLnJlc29sdmVUZXh0KHBhcmVudC5hdHRyKFwianN0bC10ZXh0LXRyaW0tbGVuZ3RoXCIpIHx8IFwiMFwiKSlcblx0fTtcbn07XG5cbmNvbnN0IHRyaW1UZXh0TGVuZ3RoID0gKHRleHQsIGxlbmd0aCkgPT4ge1xuXHRyZXR1cm4gdGV4dC5sZW5ndGggPiBsZW5ndGggPyB0ZXh0LnN1YnN0cmluZygwLCBsZW5ndGggLSAzKS50cmltKCkgKyBcIi4uLlwiIDogdGV4dDtcbn07XG5cbmNvbnN0IE1PREVTID0ge1xuXHRcInRleHRcIiA6IGFzeW5jIChvcHRpb24sIGNvbnRleHQpID0+IHtcblx0XHRjb25zdCB7Y29udGVudCwgcmVzb2x2ZXIsIHRlbXBsYXRlfSA9IGNvbnRleHQ7XG5cdFx0XG5cdFx0bGV0IHRleHQgPSBhd2FpdCByZXNvbHZlci5yZXNvbHZlVGV4dCh0ZW1wbGF0ZS50ZXh0Q29udGVudCk7XHRcdFxuXHRcdHRleHQgPSBjcmVhdGUodGV4dCx0cnVlKS5jb250ZW50LnRleHRDb250ZW50O1xuXHRcdGlmKG9wdGlvbi5tYXhMZW5ndGggPiAwKVxuXHRcdFx0dGV4dCA9IHRyaW1UZXh0TGVuZ3RoKHRleHQsIG9wdGlvbi5tYXhMZW5ndGgpO1x0XHRcblx0XHRcblx0XHRjb250ZW50LnRleHRDb250ZW50ID0gdGV4dDtcdFx0XG5cdH0sXG5cdFwiaHRtbFwiOiBhc3luYyAob3B0aW9uLCBjb250ZXh0KSA9PiB7XG5cdFx0Y29uc3Qge3Jlc29sdmVyLCB0ZW1wbGF0ZX0gPSBjb250ZXh0O1xuXHRcdFxuXHRcdGxldCBjb250ZW50ID0gYXdhaXQgcmVzb2x2ZXIucmVzb2x2ZVRleHQodGVtcGxhdGUudGV4dENvbnRlbnQpO1x0XHRcblx0XHRjb250ZW50ID0gY3JlYXRlKGNvbnRlbnQsdHJ1ZSk7XHRcdFxuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKGNvbnRlbnQuY29udGVudCwgdHJ1ZSk7XG5cdFx0XG5cdFx0aWYob3B0aW9uLnVuc2VjdXJlKVxuXHRcdFx0Y29udGV4dC5jb250ZW50ID0gY29udGVudDtcdFx0XHRcblx0XHRlbHNle1xuXHRcdFx0Y29udGVudC5maW5kKFNFQ1VSRV9IVE1MX0ZJTFRFUikucmVtb3ZlKCk7XHRcdFx0XG5cdFx0XHRjb250ZXh0LmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdH1cblx0fVxufTtcblxuXG5jbGFzcyBUZXh0Q29udGVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgbmFtZSgpIHsgcmV0dXJuIFwidGV4dFwiIH1cblx0Z2V0IHJhbmsoKSB7IHJldHVybiBEaXJlY3RpdmUuTUlOX1JBTksgKyAxIH1cblx0Z2V0IHBoYXNlKCkgeyByZXR1cm4gRGlyZWN0aXZlLlBIQVNFLmNvbnRlbnQgfVxuXG5cblxuXHRhc3luYyBleGVjdXRlKGNvbnRleHQpIHtcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSBjb250ZXh0O1xuXHRcdGlmICghKHRlbXBsYXRlIGluc3RhbmNlb2YgVGV4dCkgfHwgdGVtcGxhdGUudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aCA9PSAwIHx8ICh0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50ICYmIHRlbXBsYXRlLnBhcmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFwianN0bC10ZXh0LWlnbm9yZVwiKSkpXG5cdFx0XHRyZXR1cm4gY29udGV4dDtcblxuXHRcdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQ7XG5cdFx0Y29uc3Qgb3B0aW9uID0gcGFyZW50ID8gYXdhaXQgcmVhZE9wdGlvbihwYXJlbnQsIGNvbnRleHQpIDogREVGQVVMVF9PUFRJT047XG5cdFx0XG5cdFx0Y29uc3QgIG1vZGUgPSBNT0RFU1tvcHRpb24ubW9kZV07XG5cdFx0aWYoIW1vZGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUZXh0IG1vZGUgXFxcIlwiKyBvcHRpb24ubW9kZSArIFwiXFxcIiBpcyB1bnN1cHBvcnRlZCFcIik7XG5cdFx0XG5cdFx0YXdhaXQgbW9kZShvcHRpb24sIGNvbnRleHQpO1xuXHRcdFxuXHRcdHJldHVybiBjb250ZXh0O1xuXHR9XG59XG5cbkRpcmVjdGl2ZS5kZWZpbmUoeyBkaXJlY3RpdmU6IG5ldyBUZXh0Q29udGVudCgpIH0pOyIsImltcG9ydCBcIi4vSW5pdGlhbC5qc1wiO1xuaW1wb3J0IFwiLi9EYXRhLmpzXCI7XG5pbXBvcnQgXCIuL0lmLmpzXCI7XG5pbXBvcnQgXCIuL0Nob29zZS5qc1wiO1xuaW1wb3J0IFwiLi9JbmNsdWRlLmpzXCI7XG5pbXBvcnQgXCIuL0ZvcmVhY2guanNcIjtcbmltcG9ydCBcIi4vUmVwZWF0LmpzXCI7XG5pbXBvcnQgXCIuL1RleHQuanNcIjtcbmltcG9ydCBcIi4vQXR0cmlidXRlcy5qc1wiO1xuaW1wb3J0IFwiLi9PbkZpbmlzaGVkLmpzXCI7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL0VsZW1lbnQuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYWNlRWxlbWVudCBleHRlbmRzIEVsZW1lbnR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0XHRcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG5cdH1cblx0YXN5bmMgZXhlY3V0ZSh7dGVtcGxhdGUsIGNvbnRleHR9KXtcblx0XHRyZXR1cm4gY29udGV4dDtcblx0fTtcdFx0XG59XG50cnl7Y3VzdG9tRWxlbWVudHMuZGVmaW5lKFwianN0bC1yZXBsYWNlXCIsIFJlcGxhY2VFbGVtZW50KTt9Y2F0Y2goZSl7fS8vaWdub3JlIiwiaW1wb3J0IFwiLi9SZXBsYWNlLmpzXCIiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy9Db21wb25lbnRcIjtcbmltcG9ydCB7IHRvTm9kZU5hbWUsIGRlZmluZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9EZWZpbmVDb21wb25lbnRIZWxwZXJcIjtcbmltcG9ydCB7IGNvbXBvbmVudEV2ZW50bmFtZSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtaHRtbC1jb21wb25lbnRzL3NyYy91dGlscy9FdmVudEhlbHBlclwiO1xuaW1wb3J0IHsgZGVmVmFsdWUgfSBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLWNvbW1vbi11dGlscy9zcmMvT2JqZWN0VXRpbHNcIjtcbmltcG9ydCB7IHByaXZhdGVQcm9wZXJ0eSB9IGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtY29tbW9uLXV0aWxzL3NyYy9Qcml2YXRlUHJvcGVydHlcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiQGRlZmF1bHQtanMvZGVmYXVsdGpzLXRlbXBsYXRlLWxhbmd1YWdlL3NyYy9SZW5kZXJlclwiO1xuaW1wb3J0IFRlbXBsYXRlIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtdGVtcGxhdGUtbGFuZ3VhZ2Uvc3JjL1RlbXBsYXRlXCI7XG5pbXBvcnQgRXhwcmVzc2lvblJlc29sdmVyIGZyb20gXCJAZGVmYXVsdC1qcy9kZWZhdWx0anMtZXhwcmVzc2lvbi1sYW5ndWFnZS9zcmMvRXhwcmVzc2lvblJlc29sdmVyXCI7XG5cbmNvbnN0IE5PREVOQU1FID0gdG9Ob2RlTmFtZShcInJlbmRlcmVyXCIpO1xuY29uc3QgTk9ERU5BTUVfSlNPTkRBVEEgPSB0b05vZGVOYW1lKFwianNvbi1kYXRhXCIpLnRvVXBwZXJDYXNlKCk7XG5jb25zdCBOT0RFTkFNRV9SRVFVRVNUID0gdG9Ob2RlTmFtZShcInJlcXVlc3RcIikudG9VcHBlckNhc2UoKTtcblxuY29uc3QgRVZFTlRfUkVOREVSRUQgPSBjb21wb25lbnRFdmVudG5hbWUoXCJyZW5kZXJlZFwiLCBOT0RFTkFNRSk7XG5cbmNvbnN0IEFUVFJJQlVURV9URU1QTEFURSA9IFwidGVtcGxhdGVcIjtcbmNvbnN0IEFUVFJJQlVURV9EQVRBID0gXCJkYXRhXCI7XG5jb25zdCBBVFRSSUJVVEVfUkVOREVSX01PREUgPSBcInJlbmRlci1tb2RlXCI7IC8vYXBwZW5kLCBwcmVwZW5kLCByZXBsYWNlLCBzZWxmLXJlcGxhY2VcbmNvbnN0IEFUVFJJQlVURV9TSEFET1dNT0RFID0gXCJzaGFkb3dtb2RlXCI7IC8vXG5cbmNvbnN0IEFUVFJJQlVURV9DT05ESVRJT04gPSBcImNvbmRpdGlvblwiOyAvLyBpZiBjb25kdGlvbiB0cnVlLCB0aGFuIHJlbmRlciAoY29udGV4dD8/PylcbmNvbnN0IEFUVFJJQlVURV9JTklUUlVOID0gXCJpbml0aWFsLXJ1blwiOyAvLyBkZWZhdWx0OiB0cnVlXG5jb25zdCBBVFRSSUJVVEVfTElTVEVOX0VWRU5UID0gXCJsaXN0ZW4tZXZlbnRcIjtcbmNvbnN0IEFUVFJJQlVURV9MSVNURU5fRUxFTUVOVCA9IFwibGlzdGVuLWVsZW1lbnRcIjsgLy9kZWZhdWx0IGJvZHlcbmNvbnN0IEFUVFJJQlVURV9UUklHR0VSX0VWRU5UID0gXCJ0cmlnZ2VyLWV2ZW50XCI7IC8vIHRyaWdnZXIgZXZlbnQgb24gcmVuZGVyIGZpbmlzaGVkXG5jb25zdCBBVFRSSUJVVEVfSU5DTFVERV9PTkxZID0gXCJpbmNsdWRlLW9ubHlcIjtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtBVFRSSUJVVEVfVEVNUExBVEUsIEFUVFJJQlVURV9EQVRBLCBBVFRSSUJVVEVfUkVOREVSX01PREUsIEFUVFJJQlVURV9JTkNMVURFX09OTFldO1xuXG5jb25zdCBQUklWQVRFX1RFTVBMQVRFID0gXCJ0ZW1wbGF0ZVwiO1xuY29uc3QgUFJJVkFURV9MSVNURU5FUiA9IFwibGlzdGVuZXJcIjtcbmNvbnN0IFBSSVZBVEVfREFUQSA9IFwiZGF0YVwiO1xuY29uc3QgUFJJVkFURV9SRU5ERVJfVElNRU9VVCA9IFwicmVuZGVyVGltZW91dFwiO1xuXG5jb25zdCBmaW5kRWxlbWVudCA9IChlbGVtZW50LCBzZWxlY3RvcikgPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBmaW5kKHNlbGVjdG9yKS5maXJzdCgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxuY29uc3QgbG9hZFRlbXBsYXRlID0gYXN5bmMgKGVsZW1lbnQpID0+IHtcblx0Y29uc3QgdmFsdWUgPSBlbGVtZW50LmF0dHIoQVRUUklCVVRFX1RFTVBMQVRFKTtcblx0bGV0IHRlbXBsYXRlID0gbnVsbDtcblx0aWYgKHZhbHVlKSB7XG5cdFx0dGVtcGxhdGUgPSBmaW5kRWxlbWVudChlbGVtZW50LCB2YWx1ZSk7XG5cdFx0aWYgKHRlbXBsYXRlIGluc3RhbmNlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCkgcmV0dXJuIGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUsIGZhbHNlKTtcblx0XHRlbHNlIHRlbXBsYXRlID0gYXdhaXQgVGVtcGxhdGUubG9hZChuZXcgVVJMKHZhbHVlLCBsb2NhdGlvbikpO1xuXHR9IGVsc2UgaWYgKGVsZW1lbnQuY2hpbGROb2RlcyAmJiBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkgdGVtcGxhdGUgPSBhd2FpdCBUZW1wbGF0ZS5sb2FkKGVsZW1lbnQuY2hpbGROb2RlcywgZmFsc2UpO1xuXG5cdHJldHVybiB0ZW1wbGF0ZTtcbn07XG5cbmNvbnN0IGNhbGxSZW5kZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRjb25zdCB0aW1lb3V0ID0gcHJpdmF0ZVByb3BlcnR5KGVsZW1lbnQsIFBSSVZBVEVfUkVOREVSX1RJTUVPVVQpO1xuXHRpZiAodGltZW91dCkgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG5cdHByaXZhdGVQcm9wZXJ0eShcblx0XHRlbGVtZW50LFxuXHRcdFBSSVZBVEVfUkVOREVSX1RJTUVPVVQsXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRwcml2YXRlUHJvcGVydHkoZWxlbWVudCwgUFJJVkFURV9SRU5ERVJfVElNRU9VVCwgbnVsbCk7XG5cdFx0XHRlbGVtZW50LnJlbmRlcigpO1xuXHRcdH0sIDEwMCksXG5cdCk7XG59O1xuXG5jb25zdCBnZXRMaXN0ZW5FbGVtZW50cyA9IChyZW5kZXJlcikgPT4ge1xuXHRjb25zdCBzZWxlY3RvciA9IHJlbmRlcmVyLmF0dHIoQVRUUklCVVRFX0xJU1RFTl9FTEVNRU5UKTtcblx0aWYgKHNlbGVjdG9yKSB7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IGZpbmQoc2VsZWN0b3IpO1xuXHRcdGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMCkgcmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHRyZXR1cm4gZG9jdW1lbnQuYm9keTtcbn07XG5cbmNvbnN0IGFkZEV2ZW50T2JzZXJ2aW5nID0gKHJlbmRlcmVyKSA9PiB7XG5cdGNvbnN0IGV2ZW50cyA9IHJlbmRlcmVyLmF0dHIoQVRUUklCVVRFX0xJU1RFTl9FVkVOVCk7XG5cdGNvbnN0IGVsZW1lbnQgPSBnZXRMaXN0ZW5FbGVtZW50cyhyZW5kZXJlcik7XG5cblx0Y29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcblx0XHRyZW5kZXJlci5yZW5kZXIoeyBldmVudCB9KTtcblx0fTtcblxuXHRwcml2YXRlUHJvcGVydHkocmVuZGVyZXIsIFBSSVZBVEVfTElTVEVORVIsIGxpc3RlbmVyKTtcblxuXHRlbGVtZW50Lm9uKGV2ZW50cywgbGlzdGVuZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlRXZlbnRPYnNlcnZpbmcgPSAocmVuZGVyZXIpID0+IHtcblx0Y29uc3QgbGlzdGVuZGVyID0gcHJpdmF0ZVByb3BlcnR5KHJlbmRlcmVyLCBQUklWQVRFX0xJU1RFTkVSKTtcblx0aWYgKGxpc3RlbmRlcikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSBnZXRMaXN0ZW5FbGVtZW50cyhyZW5kZXJlcik7XG5cdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyKTtcblx0fVxufTtcblxuY29uc3QgdHJpZ2dlckV2ZW50ID0gKHJlbmRlcmVyLCBjb250ZW50KSA9PiB7XG5cdGNvbnN0IGV2ZW50cyA9IHJlbmRlcmVyLmF0dHIoQVRUUklCVVRFX1RSSUdHRVJfRVZFTlQpO1xuXHRpZiAoZXZlbnRzKSBjb250ZW50LnRyaWdnZXIoZXZlbnRzKTtcblx0Y29udGVudC50cmlnZ2VyKEVWRU5UX1JFTkRFUkVEKTtcbn07XG5cbmNvbnN0IG1lcmdlRGF0YSA9IChkYXRhMSwgZGF0YTIpID0+IHtcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGExID8gZGF0YTEgOiBudWxsLCBkYXRhMiA/IGRhdGEyIDogbnVsbCk7XG59O1xuXG5jbGFzcyBKU1RMUmVuZGVyZXJFbGVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG5cdFx0cmV0dXJuIEFUVFJJQlVURVM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IE5PREVOQU1FKCkge1xuXHRcdHJldHVybiBOT0RFTkFNRTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYgKHRoaXMuaGFzQXR0cmlidXRlKEFUVFJJQlVURV9TSEFET1dNT0RFKSkgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBvcGVuIH0pO1xuXHR9XG5cblx0Z2V0IHJvb3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hhZG93Um9vdCB8fCB0aGlzO1xuXHR9XG5cblx0YXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBzdXBlci5pbml0KCk7XG5cblx0XHRpZiAoIXRoaXMucmVhZHkucmVzb2x2ZWQpIHtcblx0XHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1RFTVBMQVRFLCBhd2FpdCBsb2FkVGVtcGxhdGUodGhpcykpO1xuXG5cdFx0XHRpZiAodGhpcy5oYXNBdHRyaWJ1dGUoQVRUUklCVVRFX0xJU1RFTl9FVkVOVCkpIGFkZEV2ZW50T2JzZXJ2aW5nKHRoaXMpO1xuXHRcdFx0aWYgKHRoaXMuYXR0cihBVFRSSUJVVEVfSU5JVFJVTikgIT0gXCJmYWxzZVwiKSBhd2FpdCB0aGlzLnJlbmRlcigpO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGdldFRlbXBsYXRlKCkge1xuXHRcdHJldHVybiBwcml2YXRlUHJvcGVydHkodGhpcywgUFJJVkFURV9URU1QTEFURSk7XG5cdH1cblxuXHRhc3luYyBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdHByaXZhdGVQcm9wZXJ0eSh0aGlzLCBQUklWQVRFX1RFTVBMQVRFLCBhd2FpdCBUZW1wbGF0ZS5sb2FkKHRlbXBsYXRlKSk7XG5cdH1cblxuXHRhc3luYyBnZXREYXRhKCkge1xuXHRcdGNvbnN0IHByaXZhdGVEYXRhID0gcHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfREFUQSk7XG5cdFx0aWYgKHByaXZhdGVEYXRhKSByZXR1cm4gcHJpdmF0ZURhdGE7XG5cblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuYXR0cihBVFRSSUJVVEVfREFUQSk7XG5cdFx0bGV0IGRhdGEgPSBudWxsO1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0ZGF0YSA9IGZpbmRFbGVtZW50KHRoaXMsIHZhbHVlKTtcblx0XHRcdGlmIChkYXRhKSB7XG5cdFx0XHRcdGlmIChkYXRhLm5vZGVOYW1lID09IE5PREVOQU1FX0pTT05EQVRBKSBkYXRhID0gZGF0YS5qc29uO1xuXHRcdFx0XHRlbHNlIGlmIChkYXRhLm5vZGVOYW1lID09IE5PREVOQU1FX1JFUVVFU1QpIHtcblx0XHRcdFx0XHRkYXRhID0gYXdhaXQgZGF0YS5leGVjdXRlKHt9KTtcblx0XHRcdFx0XHRkYXRhID0gZGF0YS5qc29uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cdFx0XHRcdFx0ZGF0YSA9IGRhdGEudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0aWYgKGRhdGEgJiYgZGF0YS50cmltKCkubGVuZ3RoID4gMCkgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGEgPSBhd2FpdCBmZXRjaChuZXcgVVJMKHZhbHVlLCBsb2NhdGlvbikudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGFzeW5jIHNldERhdGEoZGF0YSkge1xuXHRcdGF3YWl0IHRoaXMucmVhZHk7XG5cdFx0cHJpdmF0ZVByb3BlcnR5KHRoaXMsIFBSSVZBVEVfREFUQSwgZGF0YSk7XG5cdH1cblxuXHRhc3luYyByZW5kZXIoeyB0ZW1wbGF0ZSwgZGF0YSwgZXZlbnQgfSA9IHt9KSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gdGhpcy5yb290O1xuXG5cdFx0bGV0IGNvbnRleHQgPSBtZXJnZURhdGEoZGF0YSwgZXZlbnQpO1xuXG5cdFx0Y29uc3QgaW5jbHVkZU9ubHkgPSB0aGlzLmhhc0F0dHJpYnV0ZShBVFRSSUJVVEVfSU5DTFVERV9PTkxZKTtcblx0XHRjb25zdCBjb25kaXRpb24gPSBhd2FpdCBFeHByZXNzaW9uUmVzb2x2ZXIucmVzb2x2ZSh0aGlzLmF0dHIoQVRUUklCVVRFX0NPTkRJVElPTikgfHwgXCJ0cnVlXCIsIGNvbnRleHQsIGZhbHNlKTtcblx0XHRpZiAoIWNvbmRpdGlvbikgcmV0dXJuO1xuXG5cdFx0aWYgKHRlbXBsYXRlKSB0ZW1wbGF0ZSA9IGF3YWl0IFRlbXBsYXRlLmxvYWQodGVtcGxhdGUpO1xuXHRcdGVsc2UgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmdldFRlbXBsYXRlKHRoaXMpO1xuXHRcdGlmICghdGVtcGxhdGUpIHJldHVybjtcblxuXHRcdGlmICghZGF0YSkgZGF0YSA9IGF3YWl0IHRoaXMuZ2V0RGF0YSh0aGlzKTtcblx0XHRpZiAoIWRhdGEpIGRhdGEgPSB7fTtcblxuXHRcdGNvbnRleHQgPSBtZXJnZURhdGEoY29udGV4dCwgZGF0YSk7XG5cblx0XHRsZXQgcmVwbGFjZSA9IGZhbHNlO1xuXHRcdGxldCBtb2RlID0gdGhpcy5hdHRyKEFUVFJJQlVURV9SRU5ERVJfTU9ERSk7XG5cdFx0aWYgKG1vZGUgPT0gXCJzZWxmLXJlcGxhY2VcIikge1xuXHRcdFx0cmVwbGFjZSA9IHRydWU7XG5cdFx0XHRtb2RlID0gXCJyZXBsYWNlXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGluY2x1ZGVPbmx5KSB7XG5cdFx0XHRjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuaW1wb3J0Q29udGVudCgpO1xuXHRcdFx0aWYgKG1vZGUgPT0gXCJwcmVwZW5kXCIpIGNvbnRhaW5lci5wcmVwZW5kKGNvbnRlbnQpO1xuXHRcdFx0ZWxzZSBpZiAobW9kZSA9PSBcImFwcGVuZFwiKSBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5lbXB0eSgpO1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBhd2FpdCBSZW5kZXJlci5yZW5kZXIoeyB0ZW1wbGF0ZSwgZGF0YTogY29udGV4dCwgY29udGFpbmVyLCBtb2RlIH0pO1xuXG5cdFx0aWYgKHJlcGxhY2UpIHtcblx0XHRcdHJlbW92ZUV2ZW50T2JzZXJ2aW5nKHRoaXMpO1xuXG5cdFx0XHRjb25zdCBjb250ZW50ID0gY29udGFpbmVyLmNvbnRlbnQoKTtcblx0XHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRcdHRoaXMucmVwbGFjZShjb250ZW50KTtcblx0XHRcdFx0dHJpZ2dlckV2ZW50KHRoaXMsIGNvbnRlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJpZ2dlckV2ZW50KHRoaXMsIHRoaXMucGFyZW50KCkpO1xuXHRcdFx0XHR0aGlzLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB0cmlnZ2VyRXZlbnQodGhpcywgdGhpcyk7XG5cdH1cblxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cdFx0aWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcblx0XHRcdGlmIChuYW1lID09IEFUVFJJQlVURV9URU1QTEFURSkgbG9hZFRlbXBsYXRlKHRoaXMpO1xuXHRcdFx0Y2FsbFJlbmRlcih0aGlzKTtcblx0XHR9XG5cdH1cbn1cblxuZGVmaW5lKEpTVExSZW5kZXJlckVsZW1lbnQpO1xuZXhwb3J0IGRlZmF1bHQgSlNUTFJlbmRlcmVyRWxlbWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=