/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(htmlElements) {\n        this.htmlElements = htmlElements;\n    }\n \n    html(string) {\n       if (!string) {\n            return this.htmlElements[0].innerHTML;\n        } else {\n            this.htmlElements.forEach( el => el.innerHTML = string);\n        }\n    }\n\n    empty() {\n        debugger;\n        // this.htmlElements.forEach((el) => (el.innerHTML = \"\"));\n        let str = \" \";\n        this.html(str)\n    }\n\n    append(ele) {\n        const dnc = this.htmlElements; // adding args to each element's innerHTML\n        if (ele instanceof DOMNodeCollection) {\n            let newEles = ele.htmlElements\n\n            dnc.forEach( el => {\n                for (let i = 0; i < newEles.length; i++) {\n                    el.innerHTML += newEles[i].outerHTML;\n                }\n            })\n        }\n\n        if (ele instanceof HTMLElement){\n            dnc.forEach( el => {\n                el.innerHTML += ele.outerHTML;\n            });\n        }\n\n        if (ele instanceof String){\n            dnc.forEach( el => {\n                el.innerHTML += ele;\n            });\n        }\n\n        // string passed in = string shown in inner HTML\n        // HTML elements ==> OK if passed in as a string\n        // jQuery lite ==> ???????\n    }\n\n    attr() {\n        return this.htmlElements.map ( el => {\n            return el.attributes;\n        })\n    }\n\n    addClass(className) {\n        return this.htmlElements.forEach ( el => {\n            const currentAttribute = el.getAttribute(\"class\");\n            if (!currentAttribute) {\n                el.setAttribute(\"class\", className);\n            } else {\n                el.setAttribute(\"class\", currentAttribute.concat(` ${className}`));\n            }\n        })\n    }\n\n    removeClass(className) {\n        return this.htmlElements.forEach ( el => {\n            el.removeAttribute(\"class\");\n        })\n    }\n\n    children() {\n        ///add every elements' child to array,\n        let queue = this.htmlElements.slice(); // array of initial parent elements\n        let kids = [];\n        debugger\n        while (queue.length > 0) {\n            debugger\n            let ele = queue.shift();\n            if (ele.children) {\n                let children = Array.from(ele.children)\n                queue = queue.concat(children);\n                kids = kids.concat(children)\n            }\n        }\n        debugger\n        return new DOMNodeCollection(kids);\n    }\n\n\n    parent() {\n        ///add every elements' child to array,\n        let queue = this.htmlElements.slice(); // array of initial parent elements\n        let parents = [];\n        debugger\n        while (queue.length > 0) {\n            debugger\n            let ele = queue.shift();\n            if (ele.parentElement) {\n                let parent = ele.parentElement;\n                queue = queue.concat(parent);\n                parents = parents.concat(parent)\n            }\n        }\n        debugger\n        return new DOMNodeCollection(parents);\n    }\n\n    \n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.DOMNodeCollection = DOMNodeCollection;\n\nfunction $l(selector){ \n    \n    if (selector instanceof HTMLElement) {\n        // passsingle element into DNC\n        return new DOMNodeCollection([selector]);\n    } else {\n        //pass list of elements into DNC\n        const nodes = document.querySelectorAll(selector);\n        return new DOMNodeCollection(Array.from(nodes));\n    }\n};\n\nwindow.$l = $l;\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;