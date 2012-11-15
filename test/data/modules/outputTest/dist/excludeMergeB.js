define("outputTest/0.0.1/a",[],function(e,t){t.getA=function(e){}}),define("outputTest/0.0.1/b",[],function(e,t){t.getB=function(e){}}),define("outputTest/0.0.1/c",[],function(e,t){t.getC=function(e){}}),define("arale/base/1.0.1/aspect",[],function(e,t){function n(e,t,n,o){var u=t.split(s),a,f;while(a=u.shift())f=r(this,a),f.__isAspected||i.call(this,a),this.on(e+":"+a,n,o);return this}function r(e,t){var n=e[t];if(!n)throw new Error("Invalid method name: "+t);return n}function i(e){var t=this[e];this[e]=function(){var n=Array.prototype.slice.call(arguments),r=["before:"+e].concat(n);this.trigger.apply(this,r);var i=t.apply(this,arguments);return this.trigger("after:"+e,i),i},this[e].__isAspected=!0}t.before=function(e,t,r){return n.call(this,"before",e,t,r)},t.after=function(e,t,r){return n.call(this,"after",e,t,r)};var s=/\s+/}),define("arale/base/1.0.1/attribute",[],function(e,t){function n(e){return b.call(e)==="[object String]"}function r(e){return b.call(e)==="[object Function]"}function i(e){return e!=null&&e==e.window}function s(e){if(!e||b.call(e)!=="[object Object]"||e.nodeType||i(e))return!1;try{if(e.constructor&&!w.call(e,"constructor")&&!w.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(var n in e);return n===undefined||w.call(e,n)}function o(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function u(e,t){var n,r;for(n in t)if(t.hasOwnProperty(n)){r=t[n];if(E(r))r=r.slice();else if(s(r)){var i=e[n];s(i)||(i={}),r=u(i,r)}e[n]=r}return e}function a(e){return e.charAt(0).toUpperCase()+e.substring(1)}function f(e,t){var n=[],r=e.constructor.prototype;while(r)r.hasOwnProperty("attrs")||(r.attrs={}),l(t,r.attrs,r),o(r.attrs)||n.unshift(r.attrs),r=r.constructor.superclass;var i={};for(var s=0,a=n.length;s<a;s++)i=u(i,v(n[s]));return i}function l(e,t,n,r){for(var i=0,s=e.length;i<s;i++){var o=e[i];n.hasOwnProperty(o)&&(t[o]=r?t.get(o):n[o])}}function c(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r="_onChange"+a(n);e[r]&&e.on("change:"+n,e[r])}}function h(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n].value,s;r(i)&&(s=n.match(x))&&(e[s[1]](p(s[2]),i),delete t[n])}}function p(e){var t=e.match(T),n=t[1]?"change:":"";return n+=t[2].toLowerCase()+t[3],n}function d(e,t,n){var r={silent:!0};e.__initializingAttrs=!0;for(var i in n)n.hasOwnProperty(i)&&t[i].setter&&e.set(i,n[i].value,r);delete e.__initializingAttrs}function v(e,t){e=u({},e);for(var n in e){var r=e[n];if(s(r)&&!t&&m(r,N))continue;e[n]={value:r}}return e}function m(e,t){for(var n=0,r=t.length;n<r;n++)if(e.hasOwnProperty(t[n]))return!0;return!1}function g(e){return e==null||(n(e)||E(e))&&e.length===0||s(e)&&o(e)}function y(e,t){if(e===t)return!0;if(g(e)&&g(t))return!0;var n=b.call(e);if(n!=b.call(t))return!1;switch(n){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase;case"[object Array]":var r=e.toString(),i=t.toString();return r.indexOf("[object")===-1&&i.indexOf("[object")===-1&&r===i}if(typeof e!="object"||typeof t!="object")return!1;if(s(e)&&s(t)){if(!y(S(e),S(t)))return!1;for(var o in e)if(e[o]!==t[o])return!1;return!0}return!1}t.initAttrs=function(e,t){t&&(e=e?u(t,e):t);var n=this.propsInAttrs||[],r=f(this,n),i=u({},r),s;e&&(s=v(e,!0),u(i,s)),c(this,i),this.attrs=i,d(this,i,s),h(this,i),l(n,this,this.attrs,!0)},t.get=function(e){var t=this.attrs[e]||{},n=t.value;return t.getter?t.getter.call(this,n,e):n},t.set=function(e,t,r){var i={};n(e)?i[e]=t:(i=e,r=t),r||(r={});var o=r.silent,a=this.attrs,f=this.__changedAttrs||(this.__changedAttrs={});for(e in i){if(!i.hasOwnProperty(e))continue;var l=a[e]||(a[e]={});t=i[e];if(l.readOnly)throw new Error("This attribute is readOnly: "+e);l.setter&&(t=l.setter.call(this,t,e));var c=this.get(e);s(c)&&s(t)&&(t=u(u({},c),t)),a[e].value=t,!this.__initializingAttrs&&!y(c,t)&&(o?f[e]=[t,c]:this.trigger("change:"+e,t,c,e))}return this},t.change=function(){var e=this.__changedAttrs;if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];this.trigger("change:"+t,n[0],n[1],t)}delete this.__changedAttrs}return this};var b=Object.prototype.toString,w=Object.prototype.hasOwnProperty,E=Array.isArray||function(e){return b.call(e)==="[object Array]"},S=Object.keys;S||(S=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});var x=/^(on|before|after)([A-Z].*)$/,T=/^(Change)?([A-Z])(.*)/,N=["value","getter","setter","readOnly"]}),define("arale/base/1.0.1/base",["./aspect","./attribute","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(e,t,n){var r=e("arale/class/1.0.0/class"),i=e("arale/events/1.0.0/events"),s=e("./aspect"),o=e("./attribute");n.exports=r.create({Implements:[i,s,o],initialize:function(e){this.initAttrs(e)},destroy:function(){this.off();for(var e in this)this.hasOwnProperty(e)&&delete this[e]}})}),define("arale/class/1.0.0/class",[],function(e,t,n){function r(e){if(!(this instanceof r)&&h(e))return s(e)}function i(e){var t,n;for(t in e)n=e[t],r.Mutators.hasOwnProperty(t)?r.Mutators[t].call(this,n):this.prototype[t]=n}function s(e){return e.extend=r.extend,e.implement=i,e}function o(){}function u(e,t,n){for(var r in t)if(t.hasOwnProperty(r)){if(n&&p(n,r)===-1)continue;r!=="prototype"&&(e[r]=t[r])}}function a(e){if(!d)return;var t=d();if(!t)return;var n=t.uri.split(/[\/\\]/).pop();Object.defineProperties?Object.defineProperties(e,{__module:{value:t},__filename:{value:n}}):(e.__module=t,e.__filename=n)}n.exports=r,r.create=function(e,t){function n(){e.apply(this,arguments),this.constructor===n&&this.initialize&&this.initialize.apply(this,arguments)}return h(e)||(t=e,e=null),t||(t={}),e||(e=t.Extends||r),t.Extends=e,e!==r&&u(n,e,e.StaticsWhiteList),i.call(n,t),s(n)},r.extend=function(e){return e||(e={}),e.Extends=this,r.create(e)},r.Mutators={Extends:function(e){var t=this.prototype,n=f(e.prototype);u(n,t),n.constructor=this,this.prototype=n,this.superclass=e.prototype,a(n)},Implements:function(e){c(e)||(e=[e]);var t=this.prototype,n;while(n=e.shift())u(t,n.prototype||n)},Statics:function(e){u(this,e)}};var f=Object.__proto__?function(e){return{__proto__:e}}:function(e){return o.prototype=e,new o},l=Object.prototype.toString,c=Array.isArray;c||(c=function(e){return l.call(e)==="[object Array]"});var h=function(e){return l.call(e)==="[object Function]"},p=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},d=n.constructor._getCompilingModule}),define("arale/events/1.0.0/events",[],function(){function e(){}var t=/\s+/;e.prototype.on=function(e,n,r){var i,s,o;if(!n)return this;i=this.__events||(this.__events={}),e=e.split(t);while(s=e.shift())o=i[s]||(i[s]=[]),o.push(n,r);return this},e.prototype.off=function(e,r,i){var s,o,u,a;if(!(s=this.__events))return this;if(!(e||r||i))return delete this.__events,this;e=e?e.split(t):n(s);while(o=e.shift()){u=s[o];if(!u)continue;if(!r&&!i){delete s[o];continue}for(a=u.length-2;a>=0;a-=2)r&&u[a]!==r||i&&u[a+1]!==i||u.splice(a,2)}return this},e.prototype.trigger=function(e){var n,r,i,s,o,u,a=[],f;if(!(n=this.__events))return this;e=e.split(t);for(o=1,u=arguments.length;o<u;o++)a[o-1]=arguments[o];while(r=e.shift()){if(i=n.all)i=i.slice();if(s=n[r])s=s.slice();if(s)for(o=0,u=s.length;o<u;o+=2)s[o].apply(s[o+1]||this,a);if(i){f=[r].concat(a);for(o=0,u=i.length;o<u;o+=2)i[o].apply(i[o+1]||this,f)}}return this},e.mixTo=function(t){t=t.prototype||t;var n=e.prototype;for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])};var n=Object.keys;return n||(n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),e}),define("outputTest/0.0.1/excludeMergeB",["./a","./b","./c","gallery/jquery/1.7.2/jquery","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(e,t){var n=e("gallery/jquery/1.7.2/jquery"),r=e("arale/widget/1.0.2/widget"),i=e("./a"),s=e("./b"),o=e("./c");t.get=function(e){var t=n(e);r.render(t,module)}});