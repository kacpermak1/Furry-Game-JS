!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){r(1),t.exports=r(2)},function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return h})),r.d(e,"Request",(function(){return b})),r.d(e,"Response",(function(){return w})),r.d(e,"DOMException",(function(){return g})),r.d(e,"fetch",(function(){return x}));var o={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(o.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function c(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function d(t){var e=new FileReader,r=c(e);return e.readAsArrayBuffer(t),r}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:o.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o.arrayBuffer&&o.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,r,o=f(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=c(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=s(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype.delete=function(t){delete this.map[s(t)]},h.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},h.prototype.set=function(t,e){this.map[s(t)]=a(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),u(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),u(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),u(t)},o.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r,o,n=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),p.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function m(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},l.call(b.prototype),l.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];w.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var g=self.DOMException;try{new g}catch(t){(g=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),g.prototype.constructor=g}function x(t,e){return new Promise((function(r,n){var i=new b(t,e);if(i.signal&&i.signal.aborted)return n(new g("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,o={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new h,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};o.url="responseURL"in s?s.responseURL:o.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;r(new w(n,o))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.onabort=function(){n(new g("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&o.blob&&(s.responseType="blob"),i.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)}))}x.polyfill=!0,self.fetch||(self.fetch=x,self.Headers=h,self.Request=b,self.Response=w)},function(t,e){function r(){this.x=0,this.y=0,this.direction="right"}function o(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}const n=new function(){this.board=document.querySelectorAll("#board div"),this.furry=new r,this.coin=new o,this.score=0,this.index=function(t,e){return t+10*e},this.showFurry=function(){this.hideVisibleFurry(),this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")};const t=this;this.moveFurry=function(){"right"===t.furry.direction?t.furry.x=t.furry.x+1:"left"===t.furry.direction?t.furry.x=t.furry.x-1:"up"===t.furry.direction?t.furry.y=t.furry.y+1:"down"===t.furry.direction&&(t.furry.y=t.furry.y+-1),!1===this.gameOver()&&(this.showFurry(),this.checkCoinCollision())},this.hideVisibleFurry=function(){const t=document.querySelector(".furry");null!==t&&t.classList.remove("furry")},this.turnFurry=t=>{switch(t){case 37:this.furry.direction="left";break;case 38:this.furry.direction="down";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="up"}},this.checkCoinCollision=()=>{if(this.furry.x===this.coin.x&&this.furry.y===this.coin.y){document.querySelector(".coin").classList.remove("coin"),this.score=this.score+1,document.querySelector("#score strong").innerText=this.score;const t=new o;this.coin=t,this.showCoin()}},this.gameOver=()=>(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9)&&(clearInterval(this.idSetInterval),this.hideVisibleFurry(),document.getElementById("over").style.display="flex",document.getElementById("final_score").innerText=this.score,document.querySelector("#score").style.display="none",document.querySelector("#board").style.display="none",!0),this.startGame=function(){this.idSetInterval=setInterval(()=>{this.moveFurry()},250),document.addEventListener("keydown",t=>{this.turnFurry(t.which)})}};n.showFurry(),n.showCoin(),n.startGame();document.getElementById("over");document.getElementById("again").addEventListener("click",(function(){window.location.reload()}))}]);