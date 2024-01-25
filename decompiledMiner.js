//Entrypoint: 846
var val = {
    12: function (module, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)
            "this" //essentially just n=empty function's this
        } catch (t) {
            "object" == typeof window && (n = window) //checking if this is a browser and if so setting n to the global window object
        }
        module.exports = n
    },
    //20: Node.js process polyfill
    //31: Corejs
    32: function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: true,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: true,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, //some webpack polyfill thing
    //42:Bluebird:https://github.com/petkaantonov/bluebird
    8: function (t, e, require) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var r, i = require(42),
            o = (r = i) && r.__esModule ? r : {
                default: r
            };
        function u(t) {
            return function (...e) {
                return new o.default((n, r) => {
                    e.push(t => {
                        window.chrome.runtime.lastError ? r(window.chrome.runtime.lastError.message) : require(t)
                    }), t.apply(this, e)
                })
            }
        }
        !function t(e) {
            Object.values(e).filter(t => "object" == typeof t && null !== t && !Object.keys(t).some(t => /Async$/.test(t))).forEach(e => {
                o.default.promisifyAll(e, {
                    promisifier: u
                }), t(e)
            })
        }(window.chrome);
        const s = window.chrome;
        e.default = s, t.exports = e.default
    }, //weird chrome polyfill thing??
    844: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        }), e.convertTextToWords = function (t) {
            return t.replace(o, "").replace(u, " ").toLowerCase().split(r).filter(t => !!t && !i.test(t))
        };
        const r = /\t|\s|\n|\r/,
            i = /^\d+$/,
            o = /[^\w\s]|_/g,
            u = /\s+/g
    }, //turns text passed to .convertTextToWords into a list of words
    845: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        const r = ["a", "article", "audio", "button", "canvas", "caption", "dialog", "div", "embed", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "img", "input", "label", "li", "main", "meta", "nav", "object", "option", "p", "script", "section", "select", "span", "table", "td", "textarea", "th", "title", "track", "video"];
        function i(t, e, n) {
            const r = [];
            for (let i = 0; i < t.length; i++) {
                const c = t[i];
                if (!e || a(c)) switch (n) {
                case "innerText":
                    o(c, r);
                    break;
                case "src":
                    u(c, r);
                    break;
                default:
                    s(c, r, n)
                }
            }
            return r
        }
        function o(t, e) {
            const n = void 0 !== t.innerText ? t.innerText : t.textContent;
            if (!n) return;
            const r = f(n);
            r && function (t) {
                for (const e of t.childNodes)
                    if (e.nodeType === Node.TEXT_NODE && e.nodeValue && !c.test(e.nodeValue)) return true;
                return false
            }(t) && e.push(r)
        }
        function u(t, e) {
            const n = t.src;
            n && 0 === n.lastIndexOf("http", 0) && e.push(n)
        }
        function s(t, e, n) {
            const r = f(t[n]);
            r && e.push(r)
        }
        function a(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        e.default = class {
            constructor() {
                const t = {};
                r.forEach(e => {
                    t[e] = document.getElementsByTagName(e)
                }), this.a = i(t.a, true, "innerText"), this.aCount = t.a.length, this.article = i(t.article, true, "innerText"), this.articleCount = t.article.length, this.audioCount = t.audio.length, this.button = i(t.button, true, "innerText"), this.buttonCount = t.button.length, this.canvas = i(t.canvas, true, "innerText"), this.canvasCount = t.canvas.length, this.caption = i(t.caption, true, "innerText"), this.captionCount = t.caption.length, this.dialog = i(t.dialog, true, "innerText"), this.dialogCount = t.dialog.length, this.div = i(t.div, true, "innerText"), this.divCount = t.div.length, this.embedCount = t.embed.length, this.footer = i(t.footer, true, "innerText"), this.footerCount = t.footer.length, this.formCount = t.form.length, this.fullText = function () {
                    if (window.location.href && window.location.href.startsWith("https://docs.google.com/document")) {
                        const t = Array.from(document.querySelectorAll("svg g rect[aria-label]")),
                            e = t.map(t => {
                                const e = t.getAttribute("aria-label");
                                return e && 0 !== e.length ? e : ""
                            }).join("\n");
                        if (0 !== e.length) return e
                    }
                    const t = document.documentElement;
                    return t && a(t) ? f(t.innerText) : ""
                }(), this.h1 = i(t.h1, true, "innerText"), this.h1Count = t.h1.length, this.h2 = i(t.h2, true, "innerText"), this.h2Count = t.h2.length, this.h3 = i(t.h3, true, "innerText"), this.h3Count = t.h3.length, this.h4 = i(t.h4, true, "innerText"), this.h4Count = t.h4.length, this.h5 = i(t.h5, true, "innerText"), this.h5Count = t.h5.length, this.h6 = i(t.h6, true, "innerText"), this.h6Count = t.h6.length, this.header = i(t.header, true, "innerText"), this.headerCount = t.header.length, this.iframeCount = t.iframe.length, this.imgAlt = i(t.img, true, "alt"), this.imgCount = t.img.length, this.imgSrc = i(t.img, true, "src"), this.inputCount = t.input.length, this.inputValue = i(t.input, true, "value"), this.label = i(t.label, true, "innerText"), this.labelCount = t.label.length, this.li = i(t.li, true, "innerText"), this.liCount = t.li.length, this.main = i(t.main, true, "innerText"), this.mainCount = t.main.length, this.metaContent = i(t.meta, false, "content"), this.metaCount = t.meta.length, this.nav = i(t.nav, true, "innerText"), this.navCount = t.nav.length, this.objectCount = t.object.length, this.option = i(t.option, false, "innerText"), this.optionCount = t.option.length, this.p = i(t.p, true, "innerText"), this.pCount = t.p.length, this.scriptCount = t.script.length, this.section = i(t.section, true, "innerText"), this.sectionCount = t.section.length, this.selectCount = t.select.length, this.span = i(t.span, true, "innerText"), this.spanCount = t.span.length, this.tableCount = t.table.length, this.td = i(t.td, true, "innerText"), this.tdCount = t.td.length, this.textareaCount = t.textarea.length, this.textareaValue = i(t.textarea, true, "value"), this.th = i(t.th, true, "innerText"), this.thCount = t.th.length, this.title = i(t.title, false, "innerText"), this.titleCount = t.title.length, this.trackCount = t.track.length, this.trackSrc = i(t.track, true, "src"), this.videoCount = t.video.length
            }
        };
        const c = /^[\s\xa0]*$/,
            l = /[^-9]/;
        function f(t) {
            return c.test(t) || !l.test(t) ? "" : function (t) {
                return t.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
            }(t).toLowerCase()
        }
    }, //some kind of weird html parsing library?
    846: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        var r = require(31), //corejs
            i = s(require(8)), //gets some kind of port 
            o = s(require(845)), //html parsing library
            u = require(844); //word converter
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        class a {
            constructor() { // I can't find any info about corejs.throttle, not even on the offical github page?
                this.healthCheck(), this.listener = this.listener.bind(this), this.onDisconnect = this.onDisconnect.bind(this), this.submitContent = this.submitContent.bind(this), this.throttledSubmitContent = (0, r.throttle)(this.submitContent, 1e4, {
                    trailing: true,
                    leading: false
                }), this.port = i.default.runtime.connect({
                    name: "mineshaft"
                }), this.port.onMessage.addListener(this.listener), this.port.onDisconnect.addListener(this.onDisconnect)
            }
            healthCheck() {
                window.self === window.top && i.default.runtime.onMessage.addListener((t, e, n) => {
                    "miner-content-script-status" === t.type && n("ok")
                })
            }
            listener(t) {
                if (t.enabled) {
                    this.mutationObserver = new MutationObserver(this.throttledSubmitContent);
                    const t = document.documentElement;
                    t && this.mutationObserver.observe(t, {
                        childList: true,
                        attributes: false,
                        characterData: true,
                        subtree: true,
                        attributeOldValue: false,
                        characterDataOldValue: false
                    }), this.submitContent()
                }
            }
            submitContent() {
                const t = new o.default,
                    e = (0, u.convertTextToWords)(t.fullText);
                this.port && this.port.postMessage({
                    payload: {
                        content: t,
                        x3Content: e
                    },
                    url: window.location.href
                })
            }
            onDisconnect() {
                this.mutationObserver && this.mutationObserver.disconnect(), this.port.onMessage.removeListener(this.listener), this.port.onDisconnect.removeListener(this.onDisconnect), delete this.port
            }
        }
        e.default = a, new a, t.exports = e.default
    }
}