parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CrKI":[function(require,module,exports) {
module.exports="/image.61dd97e5.png";
},{}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=t(require("./assets/image.png"));function t(e){return e&&e.__esModule?e:{default:e}}var l=[{type:"title",value:"Hello World from JS!!!!"},{type:"text",value:"Here we go with some text"},{type:"columns",value:["111111","222222","333333"]},{type:"image",value:e.default}];exports.model=l;
},{"./assets/image.png":"CrKI"}],"FOZT":[function(require,module,exports) {
"use strict";function e(e){return'<div class="row">'.concat(e,"</div>")}function o(e){return'<div class="col-sm">'.concat(e,"</div>")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.col=o,exports.row=e;
},{}],"ZLZB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.templates=void 0;var e=require("./utils");function t(t){return(0,e.row)((0,e.col)("<h1>".concat(t.value,"</h1>")))}function r(t){return(0,e.row)((0,e.col)("<p>".concat(t.value,"</p>")))}function o(t){var r=t.value.map(function(t){return(0,e.col)(t)});return(0,e.row)(r.join(""))}function n(t){return(0,e.row)((0,e.col)('<img src="'.concat(t.value,'" />')))}var u={title:t,text:r,columns:o,image:n};exports.templates=u;
},{"./utils":"FOZT"}],"PhqT":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),r=require("./templates");require("./styles/style.css");var t=document.querySelector("#site");e.model.forEach(function(e){var s=r.templates[e.type];s&&t.insertAdjacentHTML("beforeend",s(e))});
},{"./model":"JDu1","./templates":"ZLZB","./styles/style.css":"PhqT"}]},{},["Focm"], null)