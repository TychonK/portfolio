// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l4AUa":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _throttleJs = require("./throttle.js");
var _throttleJsDefault = parcelHelpers.interopDefault(_throttleJs);
var _openCloseMenuJs = require("./openCloseMenu.js");
var _readMoreJs = require("./readMore.js");
var _readMoreJsDefault = parcelHelpers.interopDefault(_readMoreJs);
var _simpleParallaxJs = require("simple-parallax-js");
var _simpleParallaxJsDefault = parcelHelpers.interopDefault(_simpleParallaxJs);
const images = document.querySelectorAll('img');
new _simpleParallaxJsDefault.default(images, {
    orientation: "down"
});
// Open and close mobile navigation menu button listeners
const menuBtnRef = document.querySelector("[data-menu-button]");
menuBtnRef.addEventListener("click", _openCloseMenuJs.openclose);
// Mobile navigation menu listeners   
const menuItems = document.querySelectorAll(".anchor-link");
Array.from(menuItems).map((item)=>item.addEventListener("click", _openCloseMenuJs.openclose)
);
// Read more buttons listeners
const readMoreButtons = document.querySelectorAll("#readMoreBtn");
Array.from(readMoreButtons).map((item)=>item.addEventListener("click", _readMoreJsDefault.default)
);
// When the user scrolls down 50px from the top of the document, show the menu
const nav = document.querySelector(".navigation-fixed");
const mobileNavBtn = document.querySelector(".mobile-menu");
window.onscroll = _throttleJsDefault.default(scrollFunction, 100);
function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        if (nav.classList.value.includes("show")) return;
        console.log("scroll");
        nav.classList.add("show");
        mobileNavBtn.classList.add("mobile-menu-fixed");
    } else {
        nav.classList.remove("show");
        mobileNavBtn.classList.remove("mobile-menu-fixed");
    }
}

},{"./throttle.js":"5gCIa","./openCloseMenu.js":"4Z3gB","./readMore.js":"3FVrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","simple-parallax-js":"cONq8"}],"5gCIa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function throttle(fn, wait) {
    let time = Date.now();
    return function() {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}
exports.default = throttle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4Z3gB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openclose", ()=>openclose
);
const openclose = ()=>{
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    document.body.classList.toggle('modal-open');
    mobileMenuRef.classList.toggle("is-open");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FVrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function readMore(e) {
    const dots = document.querySelectorAll("#dots");
    const moreText = document.querySelectorAll("#more");
    const readMoreBtn = document.querySelectorAll("#readMoreBtn");
    const num = e.target.dataset.indexNumber;
    if (dots[num].style.display === "none") {
        dots[num].style.display = "inline";
        readMoreBtn[num].innerHTML === "Read less" ? readMoreBtn[num].innerHTML = "Read more" : readMoreBtn[num].innerHTML = "Читать больше";
        moreText[num].classList.remove("expanded");
    } else {
        dots[num].style.display = "none";
        readMoreBtn[num].innerHTML === "Read more" ? readMoreBtn[num].innerHTML = "Read less" : readMoreBtn[num].innerHTML = "Читать меньше";
        moreText[num].classList.add("expanded");
    }
}
exports.default = readMore;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cONq8":[function(require,module,exports) {
/*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 20-08-2020 14:0:14, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */ !function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == typeof exports ? exports.simpleParallax = e() : t.simpleParallax = e();
}(window, function() {
    return (function(t1) {
        var e1 = {
        };
        function n(i) {
            if (e1[i]) return e1[i].exports;
            var r = e1[i] = {
                i: i,
                l: !1,
                exports: {
                }
            };
            return t1[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = t1, n.c = e1, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var r in t)n.d(i, r, (function(e) {
                return t[e];
            }).bind(null, r));
            return i;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
    })([
        function(t2, e2, n1) {
            "use strict";
            n1.r(e2), n1.d(e2, "default", function() {
                return x;
            });
            var i1 = function() {
                return Element.prototype.closest && "IntersectionObserver" in window;
            };
            function r1(t, e) {
                for(var n = 0; n < e.length; n++){
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            var s1 = new (function() {
                function t3() {
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t3), this.positions = {
                        top: 0,
                        bottom: 0,
                        height: 0
                    };
                }
                var e3, n, i;
                return e3 = t3, n = [
                    {
                        key: "setViewportTop",
                        value: function(t) {
                            return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions;
                        }
                    },
                    {
                        key: "setViewportBottom",
                        value: function() {
                            return this.positions.bottom = this.positions.top + this.positions.height, this.positions;
                        }
                    },
                    {
                        key: "setViewportAll",
                        value: function(t) {
                            return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions;
                        }
                    }
                ], r1(e3.prototype, n), i && r1(e3, i), t3;
            }()), o1 = function(t) {
                return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [
                    t
                ];
            }, a1 = function() {
                for(var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t;)t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, n += 1;
                return t;
            }(), l = function(t) {
                return "img" !== t.tagName.toLowerCase() && "picture" !== t.tagName.toLowerCase() || !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth);
            };
            function u(t4) {
                return (function(t) {
                    if (Array.isArray(t)) return c(t);
                })(t4) || (function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                })(t4) || (function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
                })(t4) || (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, i = new Array(e); n < e; n++)i[n] = t[n];
                return i;
            }
            function h(t, e) {
                for(var n = 0; n < e.length; n++){
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            var f = function() {
                function t5(e5, n) {
                    var i = this;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t5), this.element = e5, this.elementContainer = e5, this.settings = n, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, l(e5) ? this.init() : this.element.addEventListener("load", function() {
                        setTimeout(function() {
                            i.init(!0);
                        }, 50);
                    });
                }
                var e4, n2, i2;
                return e4 = t5, n2 = [
                    {
                        key: "init",
                        value: function(t) {
                            var e = this;
                            this.isInit || (t && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout(function() {
                                e.setTransitionCSS(), e.elementContainer.classList.add("simple-parallax-initialized");
                            }, 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0));
                        }
                    },
                    {
                        key: "wrapElement",
                        value: function() {
                            var t = this.element.closest("picture") || this.element, e = this.customWrapper || document.createElement("div");
                            e.classList.add("simpleParallax"), e.style.overflow = "hidden", this.customWrapper || (t.parentNode.insertBefore(e, t), e.appendChild(t)), this.elementContainer = e;
                        }
                    },
                    {
                        key: "unWrapElement",
                        value: function() {
                            var t = this.elementContainer;
                            this.customWrapper ? (t.classList.remove("simpleParallax"), t.style.overflow = "") : t.replaceWith.apply(t, u(t.childNodes));
                        }
                    },
                    {
                        key: "setTransformCSS",
                        value: function() {
                            !1 === this.settings.overflow && (this.element.style[a1] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform";
                        }
                    },
                    {
                        key: "setTransitionCSS",
                        value: function() {
                            this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                        }
                    },
                    {
                        key: "unSetStyle",
                        value: function() {
                            this.element.style.willChange = "", this.element.style[a1] = "", this.element.style.transition = "";
                        }
                    },
                    {
                        key: "getElementOffset",
                        value: function() {
                            var t = this.elementContainer.getBoundingClientRect();
                            if (this.elementHeight = t.height, this.elementTop = t.top + s1.positions.top, this.settings.customContainer) {
                                var e = this.settings.customContainer.getBoundingClientRect();
                                this.elementTop = t.top - e.top + s1.positions.top;
                            }
                            this.elementBottom = this.elementHeight + this.elementTop;
                        }
                    },
                    {
                        key: "buildThresholdList",
                        value: function() {
                            for(var t = [], e = 1; e <= this.elementHeight; e++){
                                var n = e / this.elementHeight;
                                t.push(n);
                            }
                            return t;
                        }
                    },
                    {
                        key: "intersectionObserver",
                        value: function() {
                            var t = {
                                root: null,
                                threshold: this.buildThresholdList()
                            };
                            this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element);
                        }
                    },
                    {
                        key: "intersectionObserverCallback",
                        value: function(t6) {
                            var e = this;
                            t6.forEach(function(t) {
                                t.isIntersecting ? e.isVisible = !0 : e.isVisible = !1;
                            });
                        }
                    },
                    {
                        key: "checkIfVisible",
                        value: function() {
                            return this.elementBottom > s1.positions.top && this.elementTop < s1.positions.bottom;
                        }
                    },
                    {
                        key: "getRangeMax",
                        value: function() {
                            var t = this.element.clientHeight;
                            this.rangeMax = t * this.settings.scale - t;
                        }
                    },
                    {
                        key: "getTranslateValue",
                        value: function() {
                            var t = ((s1.positions.bottom - this.elementTop) / ((s1.positions.height + this.elementHeight) / 100)).toFixed(1);
                            return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0));
                        }
                    },
                    {
                        key: "animate",
                        value: function() {
                            var t, e = 0, n = 0;
                            (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), this.element.style[a1] = t;
                        }
                    }
                ], h(e4.prototype, n2), i2 && h(e4, i2), t5;
            }();
            function m(t7) {
                return (function(t) {
                    if (Array.isArray(t)) return y(t);
                })(t7) || (function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                })(t7) || d(t7) || (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
            }
            function p(t8, e6) {
                return (function(t) {
                    if (Array.isArray(t)) return t;
                })(t8) || (function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [], i = !0, r = !1, s = void 0;
                    try {
                        for(var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
                    } catch (t9) {
                        r = !0, s = t9;
                    } finally{
                        try {
                            i || null == a.return || a.return();
                        } finally{
                            if (r) throw s;
                        }
                    }
                    return n;
                })(t8, e6) || d(t8, e6) || (function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
            }
            function d(t, e) {
                if (t) {
                    if ("string" == typeof t) return y(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
                }
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, i = new Array(e); n < e; n++)i[n] = t[n];
                return i;
            }
            function v(t, e) {
                for(var n = 0; n < e.length; n++){
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
                }
            }
            var g, b, w = !1, T = [], x = function() {
                function t10(e8, n) {
                    if ((function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t10), e8 && i1()) {
                        if (this.elements = o1(e8), this.defaults = {
                            delay: 0,
                            orientation: "up",
                            scale: 1.3,
                            overflow: !1,
                            transition: "cubic-bezier(0,0,0,1)",
                            customContainer: "",
                            customWrapper: "",
                            maxTransition: 0
                        }, this.settings = Object.assign(this.defaults, n), this.settings.customContainer) {
                            var r = p(o1(this.settings.customContainer), 1);
                            this.customContainer = r[0];
                        }
                        this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init();
                    }
                }
                var e7, n3, r2;
                return e7 = t10, n3 = [
                    {
                        key: "init",
                        value: function() {
                            var t = this;
                            s1.setViewportAll(this.customContainer), T = [].concat(m(this.elements.map(function(e) {
                                return new f(e, t.settings);
                            })), m(T)), w || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), w = !0);
                        }
                    },
                    {
                        key: "resizeIsDone",
                        value: function() {
                            clearTimeout(b), b = setTimeout(this.refresh, 200);
                        }
                    },
                    {
                        key: "proceedRequestAnimationFrame",
                        value: function() {
                            var t = this;
                            s1.setViewportTop(this.customContainer), this.lastPosition !== s1.positions.top ? (s1.setViewportBottom(), T.forEach(function(e) {
                                t.proceedElement(e);
                            }), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s1.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                        }
                    },
                    {
                        key: "proceedElement",
                        value: function(t) {
                            (this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate();
                        }
                    },
                    {
                        key: "refresh",
                        value: function() {
                            s1.setViewportAll(this.customContainer), T.forEach(function(t) {
                                t.getElementOffset(), t.getRangeMax();
                            }), this.lastPosition = -1;
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            var t = this, e9 = [];
                            T = T.filter(function(n) {
                                return t.elements.includes(n.element) ? (e9.push(n), !1) : n;
                            }), e9.forEach(function(e) {
                                e.unSetStyle(), !1 === t.settings.overflow && e.unWrapElement();
                            }), T.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), w = !1);
                        }
                    }
                ], v(e7.prototype, n3), r2 && v(e7, r2), t10;
            }();
        }
    ]).default;
});

},{}]},["l4AUa","ebWYT"], "ebWYT", "parcelRequire2041")

//# sourceMappingURL=russian.739bf03c.js.map
