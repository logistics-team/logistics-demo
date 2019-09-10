/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        }); else if (!c && f.type(b) === "object") for (var e in b) b_(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4;
        if (d > 0) {
            if (c !== "border") for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c) for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {}, c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function J() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(J, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, j = /\S/, k = /^\s+/, l = /\s+$/,
            m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g,
            r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/,
            u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) {
                return (b + "").toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty,
            E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf,
            I = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), A.add(a);
                return this
            }, eq: function (a) {
                a = +a;
                return a === -1 ? this.slice(a) : this.slice(a, a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: E, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c], f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!A) {
                    A = e.Callbacks("once memory");
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && J()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a != null && a == a.window
            }, isNumeric: function (a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }, type: function (a) {
                return a == null ? String(a) : I[C.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) ;
                return d === b || D.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }, error: function (a) {
                throw new Error(a)
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                if (typeof c != "string" || !c) return null;
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(w, "ms-").replace(v, x)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            }, trim: G ? function (a) {
                return a == null ? "" : G.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (H) return H.call(b, a, c);
                    d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                    for (; c < d; c++) if (c in b && b[c] === a) return c
                }
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e]; else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length,
                    k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) return b;
                var f = F.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(F.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h, i) {
                var j, k = d == null, l = 0, m = a.length;
                if (d && typeof d == "object") {
                    for (l in d) e.access(a, c, l, d[l], 1, h, f);
                    g = 1
                } else if (f !== b) {
                    j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                        return j.call(e(a), c)
                    }) : (c.call(a, f), c = null));
                    if (c) for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                    g = 1
                }
                return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase()
        }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
            c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
        } : c.attachEvent && (B = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
        });
        return e
    }(), g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [], d = [], e, i, j, k, l, m, n = function (b) {
            var d, e, g, h, i;
            for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
        }, o = function (b, f) {
            f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
            for (; c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                e = !0;
                break
            }
            j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
        }, p = {
            add: function () {
                if (c) {
                    var a = c.length;
                    n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                }
                return this
            }, remove: function () {
                if (c) {
                    var b = arguments, d = 0, e = b.length;
                    for (; d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) {
                        j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                        if (a.unique) break
                    }
                }
                return this
            }, has: function (a) {
                if (c) {
                    var b = 0, d = c.length;
                    for (; b < d; b++) if (a === c[b]) return !0
                }
                return !1
            }, empty: function () {
                c = [];
                return this
            }, disable: function () {
                c = d = e = b;
                return this
            }, disabled: function () {
                return !c
            }, lock: function () {
                d = b, (!e || e === !0) && p.disable();
                return this
            }, locked: function () {
                return !d
            }, fireWith: function (b, c) {
                d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                return this
            }, fire: function () {
                p.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!i
            }
        };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"),
                e = "pending", g = {resolve: b, reject: c, notify: d}, h = {
                    done: b.add, fail: c.add, progress: d.add, state: function () {
                        return e
                    }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    }, always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    }, pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0], e = b[1], g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    }, promise: function (a) {
                        if (a == null) a = h; else for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({}), j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        }, when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }

            var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) for (n in{
            submit: 1,
            change: 1,
            focusin: 1
        }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j, o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0], k = 0, m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        }, _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        }, queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute, w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(o, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e, g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this), h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get, set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/,
        D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (
        a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        }, H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        }, I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                }, i.elem = a), c = f.trim(I(c)).split(" ");
                for (k = 0; k < c.length; k++) {
                    l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                        type: m,
                        origType: l[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: g,
                        quick: g && G(g),
                        namespace: n.join(".")
                    }, p), r = j[m];
                    if (!r) {
                        r = j[m] = [], r.delegateCount = 0;
                        if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                    s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue
                    }
                    p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                    r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                }
                f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                if (!e) {
                    j = f.cache;
                    for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                    return
                }
                c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                    for (; m; m = m.parentNode) r.push([m, s]), n = m;
                    n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                return c.result
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s,
                t, u;
            g[0] = c, c.delegateTarget = this;
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    n = f(this), n.context = this.ownerDocument || this;
                    for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) {
                        p = {}, r = [], n[0] = m;
                        for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                        r.length && j.push({elem: m, matches: r})
                    }
                }
                d.length > e && j.push({elem: this, matches: d.slice(e)});
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    q = j[k], c.currentTarget = q.elem;
                    for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                        s = q.matches[l];
                        if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, d) {
                var e, f, g, h = d.button, i = d.fromElement;
                a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a
            }
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d;) e = i[--d], a[e] = g[e];
            a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a
        },
        special: {
            ready: {setup: f.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = K;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = K;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = K, this.stopPropagation()
        }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J
    }, f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h;
                if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                return h
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function (a) {
                var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    }), f.support.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
                    a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                    this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            f.event.remove(this, "._change");
            return z.test(this.nodeName)
        }
    }), f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = 0, e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0)
        };
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.fn.extend({
        on: function (a, c, d, e, g) {
            var h, i;
            if (typeof a == "object") {
                typeof c != "string" && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], g);
                return this
            }
            d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
            if (e === !1) e = J; else if (!e) return this;
            g === 1 && (h = e, e = function (a) {
                f().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = f.guid++));
            return this.each(function () {
                f.event.add(this, a, e, d, c)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (var g in a) this.off(g, c, a[g]);
                return this
            }
            if (c === !1 || typeof c == "function") d = c, c = b;
            d === !1 && (d = J);
            return this.each(function () {
                f.event.remove(this, a, d, c)
            })
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, live: function (a, b, c) {
            f(this.context).on(a, this.selector, b, c);
            return this
        }, die: function (a, b) {
            f(this.context).off(a, this.selector || "**", b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
    }), function () {
        function x(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j[d] = c, j.sizset = h);
                            if (typeof b != "string") {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        function w(a, b, c, e, f, g) {
            for (var h = 0, i = e.length; h < i; h++) {
                var j = e[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j[d] === c) {
                            k = e[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    e[h] = k
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1,
            i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;
        [0, 0].sort(function () {
            i = !1;
            return 0
        });
        var m = function (b, d, e, f) {
            e = e || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return e;
            var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b;
            do {
                a.exec(""), i = a.exec(x);
                if (i) {
                    x = i[3], w.push(i[1]);
                    if (i[2]) {
                        l = i[3];
                        break
                    }
                }
            } while (i);
            if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f); else {
                j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
            } else {
                !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                if (d) {
                    n = f ? {
                        expr: w.pop(),
                        set: s(f)
                    } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                    while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                } else k = w = []
            }
            k || (k = j), k || m.error(q || b);
            if (g.call(k) === "[object Array]") if (!u) e.push.apply(e, k); else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e);
            l && (m(l, h, e, f), m.uniqueSort(e));
            return e
        };
        m.uniqueSort = function (a) {
            if (u) {
                h = i, a.sort(u);
                if (h) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, m.matches = function (a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function (a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; e < f; e++) {
                h = o.order[e];
                if (g = o.leftMatch[h].exec(a)) {
                    i = g[1], g.splice(1, 1);
                    if (i.substr(i.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, m.filter = function (a, c, d, e) {
            var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]);
            while (a && c.length) {
                for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                    k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                    if (l.substr(l.length - 1) === "\\") continue;
                    s === r && (r = []);
                    if (o.preFilter[h]) {
                        f = o.preFilter[h](f, s, d, r, e, t);
                        if (!f) g = i = !0; else if (f === !0) continue
                    }
                    if (f) for (n = 0; (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        d || (s = r), a = a.replace(o.match[h], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === q) if (g == null) m.error(a); else break;
                q = a
            }
            return s
        }, m.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function (a) {
            var b, c, d = a.nodeType, e = "";
            if (d) {
                if (d === 1 || d === 9 || d === 11) {
                    if (typeof a.textContent == "string") return a.textContent;
                    if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (d === 3 || d === 4) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
            return e
        }, o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !l.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) ;
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && m.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !l.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                }, "~": function (a, b, c) {
                    var d, f = e++, g = x;
                    typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(j, "") + " ";
                    if (f) return a;
                    for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(j, "")
                }, TAG: function (a, b) {
                    return a[1].replace(j, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    a[0] = e++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c); else {
                        var g = m.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!m(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    m.error(e)
                }, CHILD: function (a, b) {
                    var c, e, f, g, h, i, j, k = b[1], l = a;
                    switch (k) {
                        case"only":
                        case"first":
                            while (l = l.previousSibling) if (l.nodeType === 1) return !1;
                            if (k === "first") return !0;
                            l = a;
                        case"last":
                            while (l = l.nextSibling) if (l.nodeType === 1) return !1;
                            return !0;
                        case"nth":
                            c = b[2], e = b[3];
                            if (c === 1 && e === 0) return !0;
                            f = b[0], g = a.parentNode;
                            if (g && (g[d] !== f || !a.nodeIndex)) {
                                i = 0;
                                for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                g[d] = f
                            }
                            j = a.nodeIndex - e;
                            return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1],
                        d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = o.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, p = o.match.POS, q = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function (a, b) {
                var c = 0, d = b || [];
                if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length == "number") for (var e = a.length; c < e; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        c.documentElement.compareDocumentPosition ? u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (u = function (a, b) {
            if (a === b) {
                h = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = m, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                m = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !m.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return s(e.getElementsByTagName(b), f);
                            if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return s([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return s([], f);
                                if (i.id === h[3]) return s([i], f)
                            }
                            try {
                                return s(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b);
                            l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                            try {
                                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                            } catch (r) {
                            } finally {
                                l || k.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) m[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                m.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!m.isXML(a)) try {
                        if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {
                    }
                    return m(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? m.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : m.contains = function () {
            return !1
        }, m.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var y = function (a, b, c) {
            var d, e = [], f = "", g = b.nodeType ? [b] : b;
            while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
    }();
    var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice,
        Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h});
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i,
        _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f
                    .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g,
                h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        }, clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l; (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l); else {
                    l = l.replace(Y, "<$1></$2>");
                    var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0],
                        p = b.createElement("div"), q = bh.childNodes, r;
                    b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                    while (o--) p = p.lastChild;
                    if (!f.support.tbody) {
                        var s = $.test(l),
                            t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                        for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                    }
                    !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                }
                var u;
                if (!f.support.appendChecked) if (l[0] && typeof (u = l.length) == "number") for (i = 0; i < u; i++) bn(l[i]); else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando;
            for (var h = 0, i; (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/,
        bw = {position: "absolute", visibility: "hidden", display: "block"}, bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function (a, b, c) {
            var d = {}, e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                    return bB(a, b, d)
                })
            }, set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {display: "inline-block"}, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c], f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//,
        bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/,
        bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bE, "\r\n")}
                }) : {name: b.name, value: c.replace(bE, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0; else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(),
                i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u,
                v = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    }, abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in{success: 1, error: 1, complete: 1}) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z); else throw z
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h],
                j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, d.onerror = function (a, c) {
                        g(d.readyState)
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
        for (var a in cg) cg[a](0, 1)
    } : !1, cf = 0, cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ch() || ci()
    } : ch, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                if (e) h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                    try {
                                        m.text = h.responseText
                                    } catch (a) {
                                    }
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co,
        cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0, h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m,
                    n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }

            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        }, stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }

                var b, c = !1, e = f.timers, g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b); else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }

            var e = this, g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        }, show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers, c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(co), co = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {
        }
        if (!d || !f.contains(c, a)) return d ? {top: d.top, left: d.left} : {top: 0, left: 0};
        var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i,
            n = d.left + l - j;
        return {top: m, left: n}
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {top: k, left: l}
    }, f.fn.offset = function (a) {
        if (arguments.length) return a === b ? this : this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0], d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({Height: "height", Width: "width"}, function (a, c) {
        var d = "client" + a, e = "scroll" + a, g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
(function (b) {
    b.fn.Jlazyload = function (n, e) {
        if (!this.length) {
            return
        }
        var a = ("https:" == document.location.protocol) ? "https://res.suning.cn/public/v3/images/blank.gif" : "http://res.suning.cn/public/v3/images/blank.gif";
        var k = b.extend({
            type: null,
            offsetParent: null,
            source: "src2",
            placeholderImage: a,
            placeholderClass: "loading",
            threshold: 200
        }, n || {}), B = this, l, A, o = function (r) {
            var c = r.scrollLeft, p = r.scrollTop, i = r.offsetWidth, q = r.offsetHeight;
            while (r.offsetParent) {
                c += r.offsetLeft;
                p += r.offsetTop;
                r = r.offsetParent
            }
            return {left: c, top: p, width: i, height: q}
        }, h = function () {
            var c = document.documentElement, s = document.body,
                q = window.pageXOffset ? window.pageXOffset : (c.scrollLeft || s.scrollLeft),
                p = window.pageYOffset ? window.pageYOffset : (c.scrollTop || s.scrollTop), i = c.clientWidth,
                r = c.clientHeight;
            return {left: q, top: p, width: i, height: r}
        }, j = function (p, i) {
            var r, q, v, u, t, c, s = k.threshold ? parseInt(k.threshold) : 0;
            r = p.left + p.width / 2;
            q = i.left + i.width / 2;
            v = p.top + p.height / 2;
            u = i.top + i.height / 2;
            t = (p.width + i.width) / 2;
            c = (p.height + i.height) / 2;
            return Math.abs(r - q) < (t + s) && Math.abs(v - u) < (c + s)
        }, f = function (c) {
            if (k.placeholderImage && k.placeholderClass) {
                c.attr("src", k.placeholderImage).addClass(k.placeholderClass)
            }
        }, d = function (i, c, p) {
            if (i) {
                p.attr("src", c).removeAttr(k.source);
                if (e) {
                    e(c, p)
                }
            }
        }, g = function () {
            A = h(), B = B.filter(function () {
                return b(this).attr(k.source)
            });
            b.each(B, function () {
                var c = b(this).attr(k.source);
                if (!c) {
                    return
                }
                switch (k.type) {
                    case"image":
                        f(b(this));
                        break;
                    default:
                        break
                }
            });
            b.each(B, function () {
                var c = b(this).attr(k.source);
                if (!c) {
                    return
                }
                var i = (!k.offsetParent) ? A : o(b(k.offsetParent).get(0)), q = o(this), p = j(i, q);
                switch (k.type) {
                    case"image":
                        d(p, c, b(this));
                        break;
                    default:
                        break
                }
            })
        }, m = function () {
            if (B.length > 0) {
                clearTimeout(l);
                l = setTimeout(function () {
                    g()
                }, 10)
            }
        };
        g();
        if (!k.offsetParent) {
            b(window).bind("scroll", function () {
                m()
            }).bind("reset", function () {
                m()
            }).bind("resize", function () {
                m()
            })
        } else {
            b(k.offsetParent).bind("scroll", function () {
                m()
            })
        }
    }
})(jQuery);
(function (b) {
    b.fn.datalazyload = function (a, g) {
        if (!this.length) {
            return
        }
        var m = b.extend({type: null, offsetParent: null, source: "datalazyload", threshold: 200}, a || {}), d = this,
            n, f, e = function (q) {
                var p = q.scrollLeft, i = q.scrollTop, r = q.offsetWidth, c = q.offsetHeight;
                while (q.offsetParent) {
                    p += q.offsetLeft;
                    i += q.offsetTop;
                    q = q.offsetParent
                }
                return {left: p, top: i, width: r, height: c}
            }, l = function () {
                var q = document.documentElement, r = document.body,
                    p = window.pageXOffset ? window.pageXOffset : (q.scrollLeft || r.scrollLeft),
                    i = window.pageYOffset ? window.pageYOffset : (q.scrollTop || r.scrollTop), s = q.clientWidth,
                    c = q.clientHeight;
                return {left: p, top: i, width: s, height: c}
            }, k = function (p, i) {
                var r, q, v, u, t, c, s = m.threshold ? parseInt(m.threshold) : 0;
                r = p.left + p.width / 2;
                q = i.left + i.width / 2;
                v = p.top + p.height / 2;
                u = i.top + i.height / 2;
                t = (p.width + i.width) / 2;
                c = (p.height + i.height) / 2;
                return Math.abs(r - q) < (t + s) && Math.abs(v - u) < (c + s)
            }, j = function (c, i) {
                if (c) {
                    b(i).css("display", "none");
                    b(i).removeClass(m.source);
                    var p = document.createElement("div");
                    i.parentNode.insertBefore(p, i);
                    b(p).html(i.value)
                }
            }, h = function () {
                f = l(), b("." + m.source).each(function () {
                    var p = (!m.offsetParent) ? f : e(b(m.offsetParent).get(0)), i = e(this), c = k(p, i);
                    switch (m.type) {
                        case"textarea":
                            j(c, this);
                            break;
                        default:
                            break
                    }
                })
            }, o = function () {
                if (d.length > 0) {
                    clearTimeout(n);
                    n = setTimeout(function () {
                        h()
                    }, 10)
                }
            };
        h();
        if (!m.offsetParent) {
            b(window).bind("scroll", function () {
                o()
            }).bind("reset", function () {
                o()
            }).bind("resize", function () {
                o()
            })
        } else {
            b(m.offsetParent).bind("scroll", function () {
                o()
            })
        }
    }
})(jQuery);
!function (a, b) {
    "use strict";
    var c, d, e = b(a), f = !1, g = [], h = {}, i = [],
        j = {timeout: 10, buffer: 100, loadingClass: "lazy-loading", srcValue: "lazy-src", bgValue: "lazy-bg"}, k = {
            _init: function () {
                c = this
            }, listen: function (a, d, e) {
                var k, l = a, m = (d || "img").toLowerCase();
                "object" != (typeof a).toLowerCase() && (l = b(a || "img[" + j.srcValue + "]")), e && (k = i.push(e) - 1), "bat" === m && (h[k] = {
                    objs: [],
                    cbIndex: k
                }), l.each(function () {
                    var a = b(this);
                    g.push({type: m, obj: a, cbIndex: k}), "img" == m && a.addClass(j.loadingClass)
                }), f || c._startListen(), c.detect()
            }, _startListen: function () {
                e.bind("scroll.lazyelem resize.lazyelem", function () {
                    g.length && (clearTimeout(d), d = setTimeout(function () {
                        c.detect()
                    }, j.timeout))
                }), f = !0
            }, detect: function () {
                for (var a = 0; a < g.length; a++) {
                    var b = g[a], d = b.obj, k = b.cbIndex;
                    if (!c._isHidden(d) && c._isTrigger(d)) {
                        switch (b.type) {
                            case"fn":
                                break;
                            case"img":
                                var l = d.attr(j.srcValue);
                                l && d.attr("src", l).removeAttr(j.srcValue);
                                break;
                            case"bg":
                                var m = d.attr(j.bgValue);
                                m && d.css("background-image", "url(" + m + ")").removeAttr(j.bgValue);
                                break;
                            case"dom":
                                var n = d.children("script");
                                n.length && n.replaceWith(c._minHtml(n.html()));
                                break;
                            case"bat":
                                h[k].objs.push(d)
                        }
                        g.splice(a--, 1), "bat" !== b.type && k >= 0 && i[k](d)
                    }
                }
                c._bat(), 0 === g.length && (e.unbind("scroll.lazyelem resize.lazyelem"), f = !1)
            }, _bat: function () {
                for (var a in h) {
                    var b, c;
                    h.hasOwnProperty(a) && (b = h[a].objs, c = i[h[a].cbIndex], b.length && (c(b), h[a].objs = []))
                }
            }, _isTrigger: function (a) {
                var b = e.height(), c = e.scrollTop(), d = a.height(), f = a.offset().top;
                return f + d > c - j.buffer && f < c + b + j.buffer
            }, _isHidden: function (a) {
                var c = a[0];
                return "none" !== a.css("display") && b.contains(c.ownerDocument, c) ? c.offsetWidth <= 0 && c.offsetHeight <= 0 ? !0 : !1 : !0
            }, _minHtml: function (a) {
                var b = /\n+/g, c = /<!--.*?-->/gi, d = /\/\*.*?\*\//gi, e = /[ ]+</gi;
                return a = a.replace(b, ""), a = a.replace(c, ""), a = a.replace(d, ""), a = a.replace(e, "<")
            }, config: function (a) {
                b.extend(j, a)
            }, clear: function (a) {
                if (a) for (var b = 0; b < g.length; b++) a === g[b].obj[0] && g.splice(b, 1); else g = [], h = {}, i = []
            }
        };
    k._init(), a.lazyelem = k
}(window, window.jQuery || window.Zepto);

function hrefLink(a) {
    if (navigator.userAgent.indexOf("Firefox") > 0) window.location = a; else {
        var b = document.createElement("a");
        if (b.href = a, document.body.appendChild(b), /msie/i.test(navigator.userAgent.toLowerCase())) b.click(); else {
            var c = document.createEvent("MouseEvent");
            c.initEvent("click", !1, !1), b.dispatchEvent(c)
        }
    }
}

var SFE = SFE || {};
SFE.URL_CONST = {
    IMG_HOST: {
        PRD: "//image" + parseInt(Math.floor(10 * Math.random()) % 3 + 1) + ".suning.cn",
        SIT: "//sit1image" + parseInt(Math.floor(10 * Math.random()) % 3 + 1) + ".suning.cn",
        PRE: "//uimgpre.cnsuning.com",
        PREXG: "//uimgxgpre.cnsuning.com",
        DEV: "//image.suning.cn"
    },
    RES_HOST: {
        PRD: "//res.suning.cn",
        SIT: "//sitres.suning.cn",
        PRE: "//preres.suning.cn",
        PREXG: "//resprexg.suning.cn",
        DEV: "//res.suning.cn"
    },
    ICPS_HOST: {
        PRD: "//icps.suning.com",
        SIT: "//icpssit.cnsuning.com",
        PRE: "//icpspre.cnsuning.com",
        PREXG: "//icpsxgpre.cnsuning.com",
        DEV: "//icps.suning.com"
    },
    FM_HOST: {
        PRD: "//f.m.suning.com",
        SIT: "//fsit.m.cnsuning.com",
        PRE: "//fpre.m.cnsuning.com",
        PREXG: "//fprexg.m.cnsuning.com",
        DEV: "//f.m.suning.com"
    },
    OSS_HOST: {
        PRD: "//oss.suning.com",
        SIT: "//oss.suning.com",
        PRE: "//oss.suning.com",
        PREXG: "//oss.suning.com",
        DEV: "//oss.suning.com"
    },
    PASSPORT_HOST: {
        PRD: "https://passport.suning.com",
        SIT: "https://passportsit.cnsuning.com",
        PRE: "https://passportpre.cnsuning.com",
        PREXG: "https://passportprexg.cnsuning.com",
        DEV: "https://passport.suning.com"
    },
    IP_HSOT: {
        PRD: "//ipservice.suning.com",
        SIT: "//ipservicesit.cnsuning.com",
        PRE: "//ipservicepre.cnsuning.com",
        PREXG: "//ipservicexgpre.cnsuning.com",
        DEV: "//ipservice.suning.com"
    },
    SSL_HSOT: {
        PRD: "https://ssl.suning.com",
        SIT: "https://sslsit.cnsuning.com",
        PRE: "https://sslpre.cnsuning.com",
        PREXG: "https://sslprexg.cnsuning.com",
        DEV: "https://ssl.suning.com"
    },
    LIB_HOST: {
        DEV: "//lib.suning.com",
        PRD: "//lib.suning.com",
        PRE: "//libpre.cnsuning.com",
        PREXG: "//libprexg.cnsuning.com",
        SIT: "//libsit.cnsuning.com"
    },
    SHOP_HOST: {
        PRD: "//shopping.suning.com/",
        SIT: "//shoppingsit.cnsuning.com/",
        PRE: "//shoppingpre.cnsuning.com/",
        PREXG: "//shoppingprexg.cnsuning.com/",
        DEV: "//shopping.suning.com/"
    },
    NP_HOST: {
        PRD: "https://loginst.suning.com/",
        SIT: "https://mysit.cnsuning.com/",
        PRE: "https://mypre.cnsuning.com/",
        PREXG: "https://myprexg.cnsuning.com/",
        DEV: "https://loginst.suning.com/"
    },
    DOMAIN: {PRD: ".", SIT: "sit.cn", PRE: "pre.cn", PREXG: "prexg.cn", DEV: "."},
    MSI_HOST: {
        PRD: "//my.suning.com/",
        SIT: "//mysit.cnsuning.com/msi-web/",
        PRE: "//mypre.cnsuning.com/",
        PREXG: "//myprexg.cnsuning.com/",
        DEV: "//my.suning.com/"
    },
    SIGN_HOST: {
        PRD: "https://sign.suning.com/sign-web/",
        SIT: "//signsit.cnsuning.com/sign-web/",
        PRE: "//signpre.cnsuning.com/sign-web/",
        PREXG: "//signprexg.cnsuning.com/sign-web/",
        DEV: "https://sign.suning.com/sign-web/"
    },
    ORDER_HOST: {
        DEV: "//order.suning.com",
        PRD: "//order.suning.com",
        PRE: "//orderbpre.cnsuning.com",
        PREXG: "//orderprexg.cnsuning.com",
        SIT: "//ordersit.cnsuning.com"
    },
    REVIEW_HOST: {
        DEV: "//review.suning.com",
        PRD: "//review.suning.com",
        PRE: "//reviewpre.cnsuning.com",
        PREXG: "//reviewprexg.cnsuning.com",
        SIT: "//reviewbsit.cnsuning.com"
    },
    MSG_HOST: {
        DEV: "//msg.suning.com",
        PRD: "//msg.suning.com",
        PRE: "//msgpre.cnsuning.com",
        PREXG: "//msgprexg.cnsuning.com",
        SIT: "//msgsit.cnsuning.com"
    }
};
var stripscript = function (a) {
    for (var b = new RegExp("[<>]"), c = "", d = 0; d < a.length; d++) c += a.substr(d, 1).replace(b, "");
    return c
}, d = function (a) {
    var b;
    return (b = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? stripscript(decodeURIComponent(b[2].replace(/\+/g, "%20"))) : null
}, SetCookie = function (a, b) {
    var c = new Date;
    c.setTime(c.getTime() + 31536e6), document.cookie = a + "=" + escape(b) + ";path=/;domain=" + sn.cookieDomain + ";expires=" + c.toGMTString()
};
SFE.base = function (a) {
    var b = !!window.ActiveXObject, c = b && !window.XMLHttpRequest, d = {
        getEnv: function () {
            var a = window.location.hostname;
            if (window.nowEnv && void 0 != window.nowEnv && "" != window.nowEnv) return window.nowEnv;
            var b = /^(\w*)(pre)(.*)(\.cnsuning\.com)$/, c = /^(\w*)(prexg)(.*)(\.cnsuning\.com)$/,
                d = /^(\w*)(xgpre)(.*)(\.cnsuning\.com)$/, e = /^(\w*)(sit)(.*)(\.cnsuning\.com)$/;
            return b.test(a) ? c.test(a) || d.test(a) ? "PREXG" : "PRE" : e.test(a) ? "SIT" : "PRD"
        }, getQueryString: function (a, b) {
            var c = window.location.search, d = "", e = {};
            if (b) d = b.split("?")[1].split("&"); else {
                if (!window.location.search) return;
                d = c.substr(1).split("&")
            }
            for (var f = 0; f < d.length; f++) {
                var g = d[f].split("=");
                e[g[0]] = g[1]
            }
            return a ? e[a] : b ? e[a] : e
        }, loadScript: function (a, b) {
            var c = document.createElement("script");
            c.type = "text/javascript", void 0 !== b && (c.readyState ? c.onreadystatechange = function () {
                "loaded" != c.readyState && "complete" != c.readyState || (c.onreadystatechange = null, b())
            } : c.onload = function () {
                b()
            }), c.src = a, document.body.appendChild(c)
        }, isWebp: function () {
            return isSupportWebp = !![].map && 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
        }, isLocalStorageSupported: function () {
            var b = "test", c = window.localStorage, d = !!a.browser.msie && parseInt(a.browser.version);
            if (d && d <= 7 || "undefined" == typeof JSON) return !1;
            try {
                return c.setItem(b, "testValue"), c.removeItem(b), !0
            } catch (e) {
                return !1
            }
        }, serialize: function (a) {
            var b = "", c = !1;
            for (key in a) c && (b += "&"), b += key + "=" + a[key], c = !0;
            return b
        }
    }, e = d.getEnv(), f = function (a) {
        var b;
        return (b = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? stripscript(decodeURIComponent(b[2].replace(/\+/g, "%20"))) : null
    }, g = function (a) {
        var b;
        return (b = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? stripscript(decodeURIComponent(b[2].replace(/\+/g, "%20"))) : null
    }, h = function (a, b, c) {
        var d = c || 365, e = new Date;
        e.setTime(e.getTime() + 24 * d * 60 * 60 * 1e3), document.cookie = a + "=" + escape(b) + ";path=/;domain=" + sn.cookieDomain + ";expires=" + e.toGMTString()
    }, i = function () {
        var a = new Date;
        a.setTime(a.getTime() - 1e4), document.cookie = "logonStatus=a; expires=" + a.toGMTString();
        var b = SFE.URL_CONST.PASSPORT_HOST[e] + "/ids/login", c = SFE.URL_CONST.PASSPORT_HOST[e] + "/ids/logout",
            d = c + "?service=" + encodeURIComponent(b + "?method=GET&loginTheme=b2c");
        window.location = d, SFE.base.miniCartNum()
    }, j = function () {
        if (!s()) {
            var a = "", b = "", c = SFE.URL_CONST.PASSPORT_HOST[e] + "/ids/login", d = SFE.URL_CONST.NP_HOST[e];
            if (-1 != window.location.href.indexOf("&MyURL")) {
                var f = window.location.href.substring(window.location.href.indexOf("&MyURL") + 7, window.location.href.length);
                -1 != f.indexOf("LogonForm") || -1 != f.indexOf("SNUserRegister") || -1 != f.indexOf("SNUserRegisterView") || -1 != f.indexOf("ForgotPasswordView") || -1 != f.indexOf("ForgotCardPswView") || -1 != f.indexOf("MobileActCode") || -1 != f.indexOf("ResetPassword") || -1 != f.indexOf("ForgotPasswordCheckMail") || -1 != f.indexOf("ForgotPasswordSendMailView") || -1 != f.indexOf("ChangeCardPwdWithIdCard") || -1 != f.indexOf("SNUserRegisterNormalMobileCmd") || -1 != f.indexOf("SNCampusMobileRegisterCmd") || -1 != f.indexOf("SNCampusEmailRegisterCmd") || -1 != f.indexOf("MbrCardInputView") || -1 != f.indexOf("SNMbrCardMergeOptionView") || -1 != f.indexOf("SNMbrCardMergeNewAccountView") || -1 != f.indexOf("SNMbrCardMergeOtherAccountView") || -1 != f.indexOf("SNMbrCardCheckCmd") || -1 != f.indexOf("SNMbrCardVerifyMyInfoCmd") || -1 != f.indexOf("SNMbrCardMergeNewAccountCmd") || -1 != f.indexOf("SNMbrCardMergeOtherAccountCmd") || -1 != f.indexOf("SNMbrCardMergeOtherVerifyMobileCmd") || -1 != f.indexOf("SNMbrCardMergeOtherVerifyEmailCmd") || -1 != f.indexOf("SNMbrCardMergeOtherVerifyNewMobileCmd") || -1 != f.indexOf("SNMbrCardMergeCmd") || -1 != f.indexOf("SNInterconnectInputView") || -1 != f.indexOf("SNInterconnectMergeCheckCmd") || -1 != f.indexOf("SNInterconnectMergeNewAccountCmd") || -1 != f.indexOf("SNInterconnectMergeOtherAccountCmd") ? (b = encodeURIComponent("http://" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html"), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c") : (f = decodeURIComponent(f), b = encodeURIComponent(f), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c")
            } else if (-1 != window.location.href.indexOf("&URL")) {
                var g = window.location.href.substring(window.location.href.indexOf("&URL") + 5, window.location.href.length);
                -1 != g.indexOf("LogonForm") || -1 != g.indexOf("SNUserRegister") || -1 != g.indexOf("SNUserRegisterView") || -1 != g.indexOf("ForgotPasswordView") || -1 != g.indexOf("ForgotCardPswView") || -1 != g.indexOf("MobileActCode") || -1 != g.indexOf("ResetPassword") || -1 != g.indexOf("ForgotPasswordCheckMail") || -1 != g.indexOf("ForgotPasswordSendMailView") || -1 != g.indexOf("ChangeCardPwdWithIdCard") || -1 != g.indexOf("SNUserRegisterNormalMobileCmd") || -1 != g.indexOf("SNCampusMobileRegisterCmd") || -1 != g.indexOf("SNCampusEmailRegisterCmd") || -1 != g.indexOf("MbrCardInputView") || -1 != g.indexOf("SNMbrCardMergeOptionView") || -1 != g.indexOf("SNMbrCardMergeNewAccountView") || -1 != g.indexOf("SNMbrCardMergeOtherAccountView") || -1 != g.indexOf("SNMbrCardCheckCmd") || -1 != g.indexOf("SNMbrCardVerifyMyInfoCmd") || -1 != g.indexOf("SNMbrCardMergeNewAccountCmd") || -1 != g.indexOf("SNMbrCardMergeOtherAccountCmd") || -1 != g.indexOf("SNMbrCardMergeOtherVerifyMobileCmd") || -1 != g.indexOf("SNMbrCardMergeOtherVerifyEmailCmd") || -1 != g.indexOf("SNMbrCardMergeOtherVerifyNewMobileCmd") || -1 != g.indexOf("SNMbrCardMergeCmd") || -1 != g.indexOf("SNInterconnectInputView") || -1 != g.indexOf("SNInterconnectMergeCheckCmd") || -1 != g.indexOf("SNInterconnectMergeNewAccountCmd") || -1 != g.indexOf("SNInterconnectMergeOtherAccountCmd") ? (b = encodeURIComponent("http://" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html"), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c") : (g = decodeURIComponent(g), b = encodeURIComponent(g), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c")
            } else {
                var h = window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
                -1 != h.indexOf("LogonForm") || -1 != h.indexOf("SNUserRegister") || -1 != h.indexOf("SNUserRegisterView") || -1 != h.indexOf("ForgotPasswordView") || -1 != h.indexOf("ForgotCardPswView") || -1 != h.indexOf("MobileActCode") || -1 != h.indexOf("ResetPassword") || -1 != h.indexOf("ForgotPasswordCheckMail") || -1 != h.indexOf("ForgotPasswordSendMailView") || -1 != h.indexOf("ChangeCardPwdWithIdCard") || -1 != h.indexOf("SNUserRegisterNormalMobileCmd") || -1 != h.indexOf("SNCampusMobileRegisterCmd") || -1 != h.indexOf("SNCampusEmailRegisterCmd") || -1 != h.indexOf("MbrCardInputView") || -1 != h.indexOf("SNMbrCardMergeOptionView") || -1 != h.indexOf("SNMbrCardMergeNewAccountView") || -1 != h.indexOf("SNMbrCardMergeOtherAccountView") || -1 != h.indexOf("SNMbrCardCheckCmd") || -1 != h.indexOf("SNMbrCardVerifyMyInfoCmd") || -1 != h.indexOf("SNMbrCardMergeNewAccountCmd") || -1 != h.indexOf("SNMbrCardMergeOtherAccountCmd") || -1 != h.indexOf("SNMbrCardMergeOtherVerifyMobileCmd") || -1 != h.indexOf("SNMbrCardMergeOtherVerifyEmailCmd") || -1 != h.indexOf("SNMbrCardMergeOtherVerifyNewMobileCmd") || -1 != h.indexOf("SNMbrCardMergeCmd") || -1 != h.indexOf("SNInterconnectInputView") || -1 != h.indexOf("SNInterconnectMergeCheckCmd") || -1 != h.indexOf("SNInterconnectMergeNewAccountCmd") || -1 != h.indexOf("SNInterconnectMergeOtherAccountCmd") ? (b = encodeURIComponent("http://" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html"), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c") : -1 != window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length).indexOf("CxnyProductSearch") ? (b = encodeURIComponent(window.location.href), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c") : "" == window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length) && null == window.location.href.match("(.*?suning.com.*?)") ? (b = encodeURIComponent("http://" + sn.domain), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c") : (b = encodeURIComponent(window.location.href), a = c + "?service=" + encodeURIComponent(d + "/auth?targetUrl=" + b) + "&method=GET&loginTheme=b2c")
            }
            hrefLink(a)
        }
    }, k = function () {
        var a = "", b = SFE.URL_CONST.NP_HOST[e];
        if (-1 != window.location.href.indexOf("&URL")) a = window.location.href.substring(window.location.href.indexOf("&URL") + 5, window.location.href.length), a = -1 != a.indexOf("LogonForm") || -1 != a.indexOf("SNUserRegisterView") || -1 != a.indexOf("ForgotPasswordView") || -1 != a.indexOf("SNUserRegisterView") || -1 != a.indexOf("ForgotPasswordCheckMail") || -1 != a.indexOf("ForgotPasswordSendMailView") || -1 != a.indexOf("ChangeCardPwdWithIdCard") ? b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent("//" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html") : b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + a; else if (-1 != window.location.href.indexOf("&MyURL")) {
            var c = window.location.href.substring(window.location.href.indexOf("&MyURL") + 7, window.location.href.length);
            a = -1 != c.indexOf("LogonForm") || -1 != c.indexOf("SNUserRegisterView") || -1 != c.indexOf("ForgotPasswordView") || -1 != c.indexOf("SNUserRegisterView") || -1 != c.indexOf("ForgotPasswordCheckMail") || -1 != c.indexOf("ForgotPasswordSendMailView") || -1 != c.indexOf("ChangeCardPwdWithIdCard") ? b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent("//" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html") : b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + c
        } else if (-1 != window.location.href.indexOf("&krypto")) {
            var c = window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.indexOf("&krypto"));
            a = -1 != c.indexOf("LogonForm") || -1 != c.indexOf("SNUserRegisterView") || -1 != c.indexOf("ForgotPasswordView") || -1 != c.indexOf("SNUserRegisterView") || -1 != c.indexOf("ForgotPasswordCheckMail") || -1 != c.indexOf("ForgotPasswordSendMailView") || -1 != c.indexOf("ChangeCardPwdWithIdCard") ? b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent("//" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html") : b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent(window.location.href.substring(0, window.location.href.indexOf("&krypto")))
        } else {
            var d = window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
            a = -1 != d.indexOf("LogonForm") || -1 != d.indexOf("SNUserRegisterView") || -1 != d.indexOf("ForgotPasswordView") || -1 != d.indexOf("SNUserRegisterView") || -1 != d.indexOf("ForgotPasswordCheckMail") || -1 != d.indexOf("ForgotPasswordSendMailView") || -1 != d.indexOf("ChangeCardPwdWithIdCard") ? b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent("//" + sn.domain + sn.context + "/tcd_" + sn.storeId + "_" + sn.catalogId + "_.html") : b + sn.context + "/SNUserRegisterView?storeId=" + sn.storeId + "&catalogId=" + sn.catalogId + "&MyURL=" + encodeURIComponent(window.location.href)
        }
        hrefLink(a)
    }, l = {
        getSku: function (a) {
            var b = a.partNumber + "|1|", c = "", d = a.linkType, e = a.vendorCode;
            return d && "1" != d ? "2" == d ? c = "4|" : "3" == d ? c = "5|" : "4" == d ? c = "6|" : "5" == d ? c = "7|" : "6" == d ? c = "8|" : "7" == d && (c = "9|") : c = e && "" != e ? "0000000000" == e || "0" == e ? "3|" : "2|" + a.vendorCode : "|", 'data-sku="' + b + c + '"'
        }, getRealPartNumber: function (a) {
            return a.replace(/\b(0+)/gi, "")
        }, getProPic: function (a) {
            var b, c = 3 == a.productType || 5 == a.productType ? a.supplierCode : a.shopCode,
                f = a.picVersion ? "&ver=" + a.picVersion : "";
            return b = f.length > 0 ? d.isWebp ? "&from=mobile" : "" : d.isWebp ? "?from=mobile" : "", SFE.URL_CONST.IMG_HOST[e] + "/uimg/b2c/newcatentries/" + c + "-" + a.sugGoodsCode + "_2_" + a.picSize + ".jpg" + f + b
        }, getWhitePic: function (a) {
            var b, c = 3 == a.productType || 5 == a.productType ? a.supplierCode : a.shopCode,
                f = a.picVersion ? "&ver=" + a.picVersion : "";
            return b = f.length > 0 ? d.isWebp ? "&from=mobile" : "" : d.isWebp ? "?from=mobile" : "", SFE.URL_CONST.IMG_HOST[e] + "/uimg/b2c/qrqm/" + c + a.sugGoodsCode + "_" + a.picSize + ".jpg" + f + b
        }, getUrl: function (a, b) {
            var c = "";
            if (a.trickPoint && a.trickPoint.length > 0 && (c = "?srcPoint=" + a.trickPoint), a.linkUrl && "" != a.linkUrl) return 0 == a.linkUrl.indexOf("http://") || 0 == a.linkUrl.indexOf("https://") ? a.linkUrl + c : "//" + a.linkUrl + c;
            var d = 3 == a.productType || 5 == a.productType ? a.supplierCode : a.shopCode, e = a.sugGoodsCode,
                f = sn.productDomain;
            return "/" != f.substring(f.length - 1) && (f += "/"), b && null != b ? d && d.length > 0 ? f + d + "/" + e + ".html?srcPoint=" + b + "&src=" + b : f + e + ".html?srcPoint=" + b + "&src=" + b : d && d.length > 0 ? f + d + "/" + e + ".html" + c : f + e + ".html" + c
        }
    }, m = {
        getCity: function (b) {
            var c = f("cityId"), d = f("SN_CITY");
            if (c) "function" == typeof b && b(c); else if (d) {
                var g = m.analyzeCookie(d);
                "function" == typeof b && b(g.cityCommerceId)
            } else {
                var h = SFE.URL_CONST.IP_HSOT[e] + "/ipQuery.do";
                a.ajax({
                    type: "GET",
                    url: h,
                    cache: !0,
                    async: !1,
                    dataType: "jsonp",
                    jsonpCallback: "cookieCallback",
                    success: function (a) {
                        c = a.cityCommerceId, a.flag = "2", a.count = 0;
                        var d = m.cityInfoToString(a);
                        SFE.base.setCookie("SN_CITY", d), SFE.base.setCookie("cityId", a.cityCommerceId), SFE.base.setCookie("districtId", a.districtCommerceId), "function" == typeof b && b(c)
                    },
                    error: function () {
                        c = "9173", "function" == typeof b && b(c)
                    }
                })
            }
        }, getCityCode: function (b) {
            var c = f("cityCode"), d = f("SN_CITY");
            if (c) "function" == typeof b && b(c); else if (d) {
                var g = m.analyzeCookie(d);
                "function" == typeof b && b(g.provinceCommerceId)
            } else {
                var h = SFE.URL_CONST.IP_HSOT[e] + "/ipQuery.do";
                a.ajax({
                    type: "GET",
                    url: h,
                    cache: !0,
                    async: !1,
                    dataType: "jsonp",
                    jsonpCallback: "cookieCallback",
                    success: function (a) {
                        c = a.cityLESId, a.flag = "2", a.count = 0;
                        var d = m.cityInfoToString(a);
                        SFE.base.setCookie("SN_CITY", d), SFE.base.setCookie("cityCode", a.cityLESId), SFE.base.setCookie("districtId", a.districtCommerceId), "function" == typeof b && b(c)
                    },
                    error: function () {
                        c = "025", "function" == typeof b && b(c)
                    }
                })
            }
        }, analyzeCookie: function (a) {
            var b = a.split("|"), c = null;
            if (b.length > 0) {
                var d = b[0].split("_");
                c = {}, c.provinceMDMId = d[0], c.provinceCommerceId = d[1], c.cityMDMId = d[2], c.cityCommerceId = d[3], c.districtMDMId = d[4], c.districtCommerceId = d[5], c.flag = d[6], c.count = d[7]
            }
            return c
        }, cityInfoToString: function (a) {
            var b = "";
            return b += a.provinceMDMId, b += "_", b += a.cityLESId, b += "_", b += a.cityMDMId, b += "_", b += a.cityCommerceId, b += "_", b += a.districtLESId, b += "_", b += a.districtCommerceId, b += "_", b += a.flag, b += "_", b += a.count
        }
    }, n = function () {
        var b = {contents: null, align: "right", vertical: "middle", zIndex: 7500, css: {}, id: null};
        if (arguments.length < 1 || !(arguments[0] instanceof Object)) return a.error("ECode.floatBar: 参数必须为JSON对象");
        a.extend(b, arguments[0]);
        var c = {position: "fixed", top: "-9999em", left: "-9999em"};
        a('<div class="ECode-floatBar"></div>').css(c).appendTo("body");
        var d = a("body").find(".ECode-floatBar:last");
        d.append(b.contents);
        var e = d.width(), f = d.height(), g = {zIndex: b.zIndex};
        switch (null != b.id && d.attr("id", b.id), b.align) {
            case"right":
                g.left = "auto", g.right = 0;
                break;
            case"left":
                g.right = "auto", g.left = 0;
                break;
            case"center":
                g.right = "auto", g.left = "50%", g.marginLeft = -e / 2
        }
        switch (b.vertical) {
            case"top":
                g.top = 0;
                break;
            case"bottom":
                g.top = "auto", g.bottom = 0;
                break;
            case"middle":
                g.top = "50%", g.marginTop = -f / 2, _ie && _ie <= 6 && (g.marginTop = 0)
        }
        d.css(a.extend(g, b.css))
    }, o = {
        setSearchCity: function (b) {
            var c = a(b), d = this;
            null != c && c.length > 0 && (c.live("mouseover", function () {
                d.replaceCityParam(this)
            }), c.click(function () {
                d.replaceCityPlaceHolder(this)
            }))
        }, replaceCityParam: function (b) {
            var c = f("cityId") || "9173", d = a(b).attr("href"), e = null == d.match(/cityId=.*&/gi) ? "" : "&";
            a(b).attr("href", d.replace(/cityId=.*?&|cityId=.*$/gi, "cityId=" + c + e))
        }, replaceCityPlaceHolder: function (b) {
            var c = f("cityId") || "9173";
            url = a(b).attr("href").replace(/{cityId}/gi, c).replace(/%7bcityId%7d/gi, c), a(b).attr("href", url)
        }
    }, p = {
        miniCartLoadingDom: '<div class="g-cart-tipbox"></div>',
        loadingFailDom: '<div class="g-cart-tipbox" ><h5>好像没加载成功</h5><div class="desc"><a name="public0_none_cblgwc_shuaxin" href="javascript:void(0);" class="btn refresh-btn">刷新</a></div></div>',
        noDataDom: '<div class="ng-min-cart" id="myCart"><div class="g-cart-no-data" id="snCartList"></div></div>',
        noDataHasLogon: '<div class="g-cart-tipbox" style="display: block;"><i class="icon"></i><h5>不要让您的购物车空着哦，快去逛逛吧</h5></div>',
        noDataHasNoLogon: '<div class="g-cart-tipbox" style="display: block;"><i class="icon"></i><h5 class="">不要让您的购物车空着哦，快去逛逛吧</h5><div class="desc">如果您已添加过宝贝，那就赶紧登录查看吧<a name="public0_none_cblgwc_denglu" href="javascript:void(0);" class="btn">登录</a></div></div>',
        cloudimagesDomain: {
            elecProductDomain: "//product.suning.com",
            imageDomianDir: "//image3.suning.cn",
            snShopMainPh: ".suning.com",
            shopPath: "//shop"
        },
        cartChild: "",
        cartWrapper: "",
        hasPassport: !1,
        scrollTopValue: 0,
        init: function () {
            var b = this;
            b.cartChild = a(".cart-handle .cart-child"), b.cartWrapper = b.cartChild.find(".cart-box");
            var c = SFE.URL_CONST.NP_HOST[e];
            window.passport_config = window.passport_config || {}, window.passport_config.base = c, window.passport_config.loginTheme = "b2c_pop", window.passport_config.successCallbackUrl = c + "popupLoginSuccess?", b._checkPassport(), b.promoDetials(), b.changeNum(), b.checkItem(), b.deleteItem(), b.cartWrapper.delegate("a[name^=public0_none_cblgwc_], input[name^=public0_none_cblgwc_]", "click", function () {
                sa.click.sendDatasIndex(this)
            }), b.bindEvent()
        },
        bindEvent: function () {
            var b, c = this, d = a(".cart-handle"), e = d.find(".ng-d-box"), f = function () {
                d.find(".ng-bar-node").addClass("ng-bar-node-hover");
                var b = a(".sn-sidebar"), f = b.find(".sn-sidebar-tab-cart"), g = b.find(".sn-sidebar-contents");
                b && f.hasClass("sn-sidebar-tab-click") && g.find("#myCart").length > 0 && g.animate({right: "-400px"}, 300, function () {
                    g.find("#myCart").remove(), a(".sn-sidebar-tab-cart").trigger("click")
                }), e.slideDown(100), a(".cart-handle .ng-min-cart").length > 0 || c.miniCartData()
            }, g = function () {
                d.find(".#myCart").remove(), d.find(".ng-bar-node").removeClass("ng-bar-node-hover"), e.slideUp(100)
            };
            d.hover(function () {
                clearTimeout(b), b = setTimeout(function () {
                    f()
                }, 150)
            }, function () {
                clearTimeout(b), b = setTimeout(function () {
                    g()
                }, 200)
            })
        },
        tip: function (a, b, c, d) {
            var c = c || "bottom", e = b.find(".g-cart-ui-tooltip"),
                f = '<div class="g-cart-ui-tooltip g-cart-ui-tooltip-' + c + '" role="tooltip"><div class="g-cart-ui-tooltip-arrow"><i class="g-cart-ui-tooltip-arrow-front">◆</i><i class="g-cart-ui-tooltip-arrow-back">◆</i></div><div class="g-cart-ui-tooltip-inner">' + a + "</div></div>";
            if (e.length) e.show(); else {
                b.append(f), e = b.find(".g-cart-ui-tooltip");
                var g = "-" + (e.height() + 7) + "px", h = d + "px";
                "top" == c && e.css({left: h, top: g}), "bottom" == c && e.css({left: h})
            }
        },
        promoDetials: function () {
            var b, c = this;
            c.cartWrapper.delegate(".promotion-info", "mouseenter", function () {
                var d = a(this).find(".desc").data("msg"), e = a(this).parent();
                b = setTimeout(function () {
                    clearTimeout(b), c.tip(d, e, "bottom")
                }, 200)
            }), c.cartWrapper.delegate(".promotion-info", "mouseleave", function () {
                var c = a(this).parent();
                clearTimeout(b), b = setTimeout(function () {
                    c.find(".g-cart-ui-tooltip").hide()
                }, 200)
            }), c.cartWrapper.delegate(".g-cart-ui-tooltip", "mouseenter", function () {
                clearTimeout(b)
            }), c.cartWrapper.delegate(".g-cart-ui-tooltip", "mouseleave", function () {
                var c = a(this);
                b = setTimeout(function () {
                    c.remove()
                }, 200)
            })
        },
        addStoreFirstClass: function () {
            this.cartWrapper.find("dd").removeClass("first"), this.cartWrapper.find(".g-cart-store dd:first").addClass("fisrt")
        },
        quantity: function () {
            this.cartWrapper.find(".g-cart-cout-input").each(function () {
                parseInt(this.value, 10) > 1 && parseInt(this.value, 10) < 99 && (a(this).prev("a").removeClass("g-cart-cout-btnl-disabled"), a(this).next("a").removeClass("g-cart-cout-btnr-disabled")), parseInt(this.value, 10) >= 99 && (a(this).next("a").addClass("g-cart-cout-btnr-disabled"), a(this).prev("a").removeClass("g-cart-cout-btnl-disabled"))
            })
        },
        changeNum: function () {
            function b(b) {
                var d = a(b).val().replace(/\D/g, "");
                d < e.start ? d = e.start : d > e.end && (d = e.end);
                var f = a(b).siblings(".g-cart-cout-btnr"), g = a(b).siblings(".g-cart-cout-btnl"),
                    h = a(b).parent().siblings(".g-cart-cout-text");
                a(b).val(d), h.text(d), c(g, f, d)
            }

            function c(a, b, c) {
                c < e.end ? b.removeClass("g-cart-cout-btnr-disabled") : b.addClass("g-cart-cout-btnr-disabled"), c <= e.start ? a.addClass("g-cart-cout-btnl-disabled") : a.removeClass("g-cart-cout-btnl-disabled")
            }

            var d = this, e = {start: 1, end: 99};
            this.cartWrapper.delegate(".g-cart-cout-btnl", "click", function () {
                d.scrollTopValue = a("#snCartList").scrollTop();
                var b = a(this).siblings(".g-cart-cout-input"), f = a(this).parent().siblings(".g-cart-cout-text"),
                    g = a(this), h = a(this).siblings(".g-cart-cout-btnr"), i = parseInt(b.val()) - 1,
                    j = +a(this).siblings(".g-cart-cout-input").attr("startCount");
                i < j && (i = j), i >= e.start && (b.val(i), f.text(i), d.updateQuantity(a(this))), c(g, h, i)
            }).delegate(".g-cart-cout-btnr", "click", function () {
                d.scrollTopValue = a("#snCartList").scrollTop();
                var b = a(this).siblings(".g-cart-cout-input"), f = a(this).parent().siblings(".g-cart-cout-text"),
                    g = a(this), h = a(this).siblings(".g-cart-cout-btnl"), i = parseInt(b.val()) + 1,
                    j = +a(this).siblings(".g-cart-cout-input").attr("startCount");
                i < j && (i = j), i <= e.end && (b.val(i), f.text(i), d.updateQuantity(a(this))), c(h, g, i)
            }).delegate(".g-cart-cout-input", "keyup", function (c) {
                d.scrollTopValue = a("#snCartList").scrollTop();
                var e = a(this).val();
                return (8 != c.which || "" != e) && (13 != c.which && 38 != c.which && 37 != c.which && 39 != c.which && 40 != c.which && void b(a(this)))
            }).delegate(".g-cart-cout-input", "mouseup", function () {
                b(a(this))
            }).delegate(".g-cart-cout-input", "blur", function () {
                var b = this, f = a(b).val().replace(/\D/g, ""), g = +a(b).attr("startCount");
                f < g && (f = g), f < e.start ? f = e.start : f > e.end && (f = e.end);
                var h = a(b).siblings(".g-cart-cout-btnr"), i = a(b).siblings(".g-cart-cout-btnl"),
                    j = a(b).parent().siblings(".g-cart-cout-text");
                a(b).val(f), j.text(f), c(i, h, f), d.updateQuantity(a(b))
            })
        },
        allCheckStatus: function () {
            for (var b = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable)").find(":checkbox").not(":disabled"), c = a(".g-cart-store"), d = a("#J_cart_checked_all"), e = !1, f = b.length, g = 0; g < f; g++) {
                {
                    if (!b.eq(g).prop("checked")) {
                        e = !1;
                        break
                    }
                    e = !0
                }
            }
            e && d.prop("checked", e), c.each(function (b) {
                var c = !1,
                    d = a(this).find(".g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable)").find(":checkbox").not(":disabled"),
                    e = d.length;
                if (0 != e) {
                    for (var b = 0; b < e; b++) {
                        {
                            if (!d.eq(b).prop("checked")) {
                                c = !1;
                                break
                            }
                            c = !0
                        }
                    }
                    c && a(this).find(".g-cart-store-title :checkbox").prop("checked", c)
                }
            })
        },
        checkItem: function () {
            var b = this;
            this.cartWrapper.delegate("#J_cart_checked_all", "click", function () {
                var c = a(this).is(":checked"),
                    d = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(":checkbox").not(":disabled");
                1 == c ? d.attr("checked", !0) : d.attr("checked", !1);
                var e = "",
                    f = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                a.each(f, function (b, d) {
                    var f = a(d).parents(".g-cart-item"), g = f.find(".g-cart-del-handle").attr("exdata");
                    if (void 0 !== g) {
                        var h = g.split(",");
                        h.length > 1 && (g = h[0]), e += g + "-", e += c ? "1," : "0,"
                    }
                }), "" != e && b.doSelectItem(e)
            }), this.cartWrapper.delegate(".sn-sidebar-minicart-sn-store", "click", function () {
                var c = a(this).is(":checked"),
                    d = a(this).closest(".g-cart-store").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                1 == c ? d.attr("checked", !0) : d.attr("checked", !1);
                var e = "",
                    f = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(":checkbox").not(":disabled"),
                    g = !0;
                f.each(function () {
                    a(this).is(":checked") || (g = !1)
                }), 1 == g ? a("#J_cart_checked_all").attr("checked", !0) : a("#J_cart_checked_all").attr("checked", !1);
                var h = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                a.each(h, function (b, c) {
                    var d = a(c).parents(".g-cart-item"), f = d.find(".g-cart-del-handle").attr("exdata");
                    if (void 0 !== f) {
                        var g = f.split(",");
                        g.length > 1 && (f = g[0]), e += f + "-", e += (a(c).attr("checked") ? "1" : "0") + ","
                    }
                }), b.doSelectItem(e)
            }), this.cartWrapper.delegate(".sn-sidebar-minicart-c-store", "click", function () {
                var c = a(this).is(":checked"),
                    d = a(this).closest(".g-cart-store").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                1 == c ? d.attr("checked", !0) : d.attr("checked", !1);
                var e = "",
                    f = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(":checkbox").not(":disabled"),
                    g = !0;
                f.each(function () {
                    a(this).is(":checked") || (g = !1)
                }), 1 == g ? a("#J_cart_checked_all").attr("checked", !0) : a("#J_cart_checked_all").attr("checked", !1);
                var h = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                a.each(h, function (b, c) {
                    var d = a(c).parents(".g-cart-item"), f = d.find(".g-cart-del-handle").attr("exdata");
                    if (void 0 !== f) {
                        var g = f.split(",");
                        g.length > 1 && (f = g[0]), e += f + "-", e += (a(c).attr("checked") ? "1" : "0") + ","
                    }
                }), b.doSelectItem(e)
            }), this.cartWrapper.delegate(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable) .sn-sidebar-minicart-one-goods:checkbox", "click", function () {
                a(this).not(":checked") && a("#J_cart_checked_all").attr("checked", !1);
                var c, d = !0;
                a(this).parents("dl").attr("id");
                c = a(this).parents("dl").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled"), c.each(function () {
                    a(this).is(":checked") || (d = !1)
                });
                var e = a(this).closest(".g-cart-store-title").find(".store-info:checkbox");
                1 == d ? e.attr("checked", !0) : e.attr("checked", !1);
                var f = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(":checkbox").not(":disabled"),
                    g = !0;
                f.each(function () {
                    a(this).is(":checked") || (g = !1)
                }), 1 == g ? a("#J_cart_checked_all").attr("checked", !0) : a("#J_cart_checked_all").attr("checked", !1);
                var h = "",
                    i = a(".g-cart-list-box .g-cart-item:not(.g-cart-item-disable,.g-cart-suit-disable), .g-cart-store-title").find(".sn-sidebar-minicart-one-goods:checkbox").not(":disabled");
                a.each(i, function (b, c) {
                    var d = a(c).parents(".g-cart-item"), e = d.find(".g-cart-del-handle").attr("exdata");
                    if (void 0 !== e) {
                        var f = e.split(",");
                        f.length > 1 && (e = f[0]), h += e + "-", h += (a(c).attr("checked") ? "1" : "0") + ","
                    }
                }), b.doSelectItem(h)
            })
        },
        deleteItem: function () {
            var b = this;
            this.cartWrapper.delegate(".g-cart-del-handle", "click", function () {
                b.scrollTopValue = a("#snCartList").scrollTop();
                var c = a(this).parent(), d = a(c).parents(".g-cart-td"),
                    f = d.find(".g-cart-del-handle").attr("exdata"), g = f.split(",");
                g.length > 1 && (f = g[0]), a.ajax({
                    type: "get",
                    dataType: "jsonp",
                    data: {deleteInfo: f},
                    url: SFE.URL_CONST.SHOP_HOST[e] + "deleteMiniCart.do",
                    success: function (a) {
                        d.animate({opacity: 0}, function () {
                            d.remove(), void 0 != typeof a && a && "undefined" != a ? void 0 !== a.html && a.html && "undefined" != a.html ? b._successDoSomethings(a) : void 0 !== a.isEmpty && a.isEmpty && "empty" == a.isEmpty ? b._checkLogin(!0) : b._showError() : b._showError()
                        }), c = null
                    },
                    error: function () {
                        b._showError()
                    }
                })
            })
        },
        updateQuantity: function (b) {
            var c = this, d = a(b).parents(".g-cart-item"), f = d.find(".g-cart-del-handle").attr("exdata"),
                g = d.find(".g-cart-cout-input").val();
            clearTimeout(c.postTimeout);
            for (var h = f + "-" + g, i = c.productArr.length, j = 0, k = 0; k < i; k++) if (c.productArr[k].split("-")[0] == f) {
                j = 1, c.productArr[k] = h;
                break
            }
            0 == j && c.productArr.push(h), c.postTimeout = setTimeout(function () {
                var b = c.productArr.join(",");
                c.productArr = [], a.ajax({
                    url: SFE.URL_CONST.SHOP_HOST[e] + "updateMiniCartProNum.do",
                    type: "GET",
                    data: {updateNumCmmdty: b},
                    dataType: "jsonp",
                    crossDomain: !0,
                    success: function (a) {
                        void 0 != typeof a && a && "undefined" != a ? void 0 != typeof a.html && a.html && "undefined" != a.html ? c._successDoSomethings(a) : void 0 != typeof a.isEmpty && a.isEmpty && "empty" == a.isEmpty ? c._checkLogin() : c._showError() : c._showError()
                    },
                    error: function () {
                        c._showError()
                    }
                })
            }, 1e3)
        },
        productArr: [],
        postTimeout: "",
        doSelectItem: function (b) {
            var c = this;
            c.scrollTopValue = a("#snCartList").scrollTop(), a.ajax({
                url: SFE.URL_CONST.SHOP_HOST[e] + "operateMiniCartCheck.do",
                type: "GET",
                data: {checkInfo: b},
                dataType: "jsonp",
                crossDomain: !0,
                success: function (a) {
                    void 0 !== a && a && "undefined" != a ? void 0 !== a.html && a.html && "undefined" != a.html ? c._successDoSomethings(a) : void 0 !== a.isEmpty && a.isEmpty && "empty" == a.isEmpty ? c._checkLogin() : c._showError() : c._showError()
                },
                error: function () {
                    c._showError()
                }
            })
        },
        miniCartData: function (b) {
            var c = this, b = b || 0;
            0 == b && this.cartWrapper.html(this.noDataDom), c.cartChild.find(".cart-loading").show(), a.ajax({
                type: "get",
                dataType: "jsonp",
                url: SFE.URL_CONST.SHOP_HOST[e] + "showMiniCart.do",
                success: function (a) {
                    1 == b && p.init(), void 0 !== a && a && "undefined" != a ? void 0 !== a.html && a.html && "undefined" != a.html ? c._successDoSomethings(a) : void 0 !== a.isEmpty && a.isEmpty && "empty" == a.isEmpty ? c._checkLogin() : c._showError() : c._showError()
                },
                error: function () {
                    c._showError()
                }
            })
        },
        _checkLogin: function (a) {
            var b = this;
            b.cartWrapper.html(this.noDataDom);
            try {
                probeAuthStatus(function () {
                    b.cartWrapper.find(".g-cart-no-data").html(b.noDataHasLogon), a && (b.setCookie("totalProdQty", "0"), SFE.base.miniCartNum(), window.SnSidebar && SnSidebar._getCartNum())
                }, function () {
                    b.cartWrapper.find(".g-cart-no-data").html(b.noDataHasNoLogon), b.cartWrapper.find(".g-cart-no-data .desc .btn").click(function () {
                        ensureLogin(function () {
                            SFE.base.isLogin(), b.miniCartData()
                        })
                    })
                })
            } catch (c) {
                b.cartWrapper.find(".g-cart-no-data").html(b.noDataHasNoLogon), b.cartWrapper.find(".g-cart-no-data .desc .btn").click(function () {
                    ensureLogin(function () {
                        SFE.base.isLogin(), b.miniCartData()
                    })
                })
            }
            b.cartChild.find(".cart-loading").hide()
        },
        _checkPassport: function () {
            var b = this, c = a("script");
            if (1 != b.hasPassport) {
                for (var d = 0; d < c.size(); d++) if (/passport/.test(c.eq(d).attr("src"))) {
                    b.hasPassport = !0;
                    break
                }
                if (!b.hasPassport) {
                    var f = document.getElementsByTagName("head")[0], g = document.createElement("script");
                    g.type = "text/javascript", g.onload = g.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (g.onload = g.onreadystatechange = null)
                    }, g.src = SFE.URL_CONST.RES_HOST[e] + "/project/passport/js/passport.min.js", f.appendChild(g)
                }
            }
        },
        _showError: function () {
            var a = this;
            a.cartWrapper.html(this.noDataDom), a.cartWrapper.find(".g-cart-no-data").html(a.loadingFailDom), a.cartWrapper.find(".g-cart-no-data .refresh-btn").click(function () {
                a.miniCartData()
            }), a.setCookie("totalProdQty", "0"), SFE.base.miniCartNum(), window.SnSidebar && SnSidebar._getCartNum(), a.cartChild.find(".cart-loading").hide()
        },
        _successDoSomethings: function (b) {
            var c = this;
            c.cartChild.find(".cart-loading").hide(), c.cartWrapper.html(b.html), a("#snCartList").scrollTop(c.scrollTopValue), c.quantity(), c.addStoreFirstClass(), c.setCookie("totalProdQty", b.totalNumber), SFE.base.miniCartNum(), window.SnSidebar && SnSidebar._getCartNum(), c.allCheckStatus()
        },
        setCookie: function (a, b) {
            if (a.indexOf("quantity") >= 0 || "totalProdQty" == a) {
                var c = window.location.href;
                c = c.substring(c.indexOf("//") + 2), c = c.substring(0, c.indexOf("/")), c.indexOf(".") > 0 && (c = c.substring(c.indexOf(".")));
                var d = c, e = "/", f = a + "=" + escape(b) + ";domain=" + d + ";path=" + e;
                document.cookie = f
            } else document.cookie = a + "=" + escape(b)
        }
    }, q = function () {
        this.miniCartNum(), window.SnSidebar && SnSidebar._getCartNum()
    }, r = function () {
        var b = f("totalProdQty");
        b = 0 == b || null == b ? 0 : b, b = parseInt(b), b = b > 99 ? "99+" : b, a("#showTotalQty").html(b);
        var c = a(".ng-bar-node-mini-cart").find("em.cart");
        0 == b || null == b ? c.html("&#xe623;") : c.html("&#xe624;")
    }, s = function () {
        var b = f("logonStatus");
        if (null != b && "" != b) {
            var c = f("nick");
            return null == c && (c = ""), 0 == c.length && (c = f("nick2")), null == c && (c = ""), c.length > 12 && (c = c.substr(0, 12)), a("#username-node-slide").show().find("a.username-bar-node-noside").show().find("span").html(c), a(".reg-bar-node").hide(), SFE.base.miniCartNum(), !0
        }
        return a(".username-bar-node").hide().find("span").html(""), a(".reg-bar-node").show(), SFE.base.miniCartNum(), !1
    }, t = function () {
        function b() {
            var a, b, c, d, e = 0;
            l.find("li").live({
                mouseenter: function (c) {
                    a = c.pageX, b = c.pageY, j = 1 == e ? 0 : 300
                }, mouseleave: function (f) {
                    c = f.pageX, d = f.pageY, e = c <= a + 5 ? Math.abs(d - b) <= 28 ? 0 : 1 : 0
                }
            }), l.live("mouseleave", function () {
                e = 0
            })
        }

        function c() {
            m.stop(!0, !0).animate({width: "0px"}, 100, function () {
                l.find("li").removeClass("current"), a(this).removeClass("ng-sort-detail-border")
            }), o.mouseleave()
        }

        function g() {
            function b() {
                a.ajax({
                    url: SFE.URL_CONST.LIB_HOST[e] + "/api/jsonp/cb/sortList_v6-threeSortLoad.jsonp",
                    type: "get",
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "threeSortLoad",
                    cache: !0,
                    success: function (a) {
                        if (a && a.allsort && a.allsort.nodes && (q = a.allsort.nodes, r = !0, g)) {
                            var b = a.allsort.nodes;
                            localStorage.setItem(h, JSON.stringify({time: (new Date).getTime(), navContent: b}))
                        }
                    }
                })
            }

            if (!r) {
                var c, f, g = d.isLocalStorageSupported(), h = "indexnav";
                if (g && localStorage.getItem(h)) {
                    c = JSON.parse(localStorage.getItem(h)), f = parseInt(c.time) + 18e5;
                    (new Date).getTime() > f ? b() : (q = c.navContent, r = !0)
                } else b()
            }
        }

        function h(b) {
            var c = a(this).scrollTop(), d = l.offset().top;
            sn.isHome && (c > d ? m.animate({top: c - d}, 100) : m.animate({top: 0}, 100));
            var e = "", g = "", i = "";
            if (s.html(" "), r && void 0 !== q) {
                if (!q[b] || !q[b].nodes) return;
                var j, k, n = (f("cityId"), q[b], q[b]), o = n.nodes.length;
                if (q[b], n.nodes[1]) {
                    if (g += '<div class="sort-btn">', n.nodes[1].tag) for (var p = 0; p < n.nodes[1].tag.length; p++) j = n.nodes[1].tag[p], g += '<a href="' + j.linkUrl + '" target="_blank" name="' + j.trickPoint + '" title="' + j.elementName + '">' + j.elementName + "</a>";
                    g += "</div>"
                }
                i += '<div class="cate-list">';
                for (var p = 4; p < o; p++) if (n.nodes[p] && n.nodes[p].tag && n.nodes[p].nodes) {
                    if (i += "<dl>", k = n.nodes[p].nodes, i += '<dt><a href="' + n.nodes[p].tag[0].linkUrl + '" target="_blank" title="' + n.nodes[p].tag[0].elementName + '" name="' + n.nodes[p].tag[0].trickPoint + '">' + n.nodes[p].tag[0].elementName + "</a></dt>", k[0].tag) {
                        i += 2 == p ? '<dd class="first">' : "<dd>";
                        for (var t = 0; t < k[0].tag.length; t++) "orange" == k[0].tag[t].elementDesc ? i += '<a href="' + k[0].tag[t].linkUrl + '" target="_blank" name="' + k[0].tag[t].trickPoint + '" title="' + k[0].tag[t].elementName + '" class="orange">' + k[0].tag[t].elementName + "</a>" : i += '<a href="' + k[0].tag[t].linkUrl + '" target="_blank" name="' + k[0].tag[t].trickPoint + '" title="' + k[0].tag[t].elementName + '">' + k[0].tag[t].elementName + "</a>"
                    }
                    i += "</dd>", i += "</dl>"
                }
                i += "</div>", e = g + i + "", s.html(e)
            } else setTimeout(function () {
                h(b)
            }, 300)
        }

        var i, j, k, l = a(".ng-sort-list-box"), m = a(".ng-sort-detail"), n = a("a.ng-all-hook"), o = a(".ng-sort");
        a(".ng-nav-index");
        b(), l.find("li").live({
            mouseenter: function () {
                var b = a(this);
                clearTimeout(i), i = setTimeout(function () {
                    b.addClass("current").siblings("li").removeClass("current");
                    var c = b.index(), d = b.attr("maxCol");
                    d = d > 7 || 0 == d || null == d ? 7 : d, k = 100 * d + 20 + "px", h(c);
                    var e = !(!a("body").hasClass("root1200") && !a("html").hasClass("root1200"));
                    !m.find("a.threeListAct").eq(c).hasClass("threeListAct-nopic") && sn.isNewHome ? e ? m.css("width", 998).addClass("ng-sort-detail-border") : m.css("width", 798).addClass("ng-sort-detail-border") : e ? m.css("width", 798).addClass("ng-sort-detail-border") : m.css("width", 598).addClass("ng-sort-detail-border")
                }, j)
            }, mouseleave: function () {
                clearTimeout(i)
            }
        });
        var p;
        l.hover(function () {
            clearTimeout(p), p = setTimeout(function () {
                SFE.search.clearBox(), SFE.search.searchIptBlur()
            }, 200)
        }, function () {
            clearTimeout(p), p = setTimeout(function () {
                c()
            }, 200)
        }), m.find("a.ng-close-sort").click(function () {
            c()
        });
        var q, j, r = !1, s = a(".ng-sort-detail");
        n.mouseover(function () {
            SFE.search && SFE.search.clearBox && SFE.search.clearBox(), clearTimeout(j), j = setTimeout(function () {
                g()
            }, 200)
        })
    }, u = function () {
        function b() {
            j = a(window).scrollTop(), q = a(window).height();
            var b = sn.isHome ? 600 : 0;
            0 == k && (l = n.offset().top + p + b), c || !sn.isHome && !sn.hasTopFixed || (j > l ? d() : f(), k = j > l), j <= l && (f(), k = !1), 0 == k || SFE.search.clearBox()
        }

        function d() {
            o.fadeIn(0), sn.isHome || n.addClass("ng-sort-fixed"), sn.isHome && n.removeClass("ng-sort-index"), n.find(".ng-sort-list-box").hide(), a(".ng-bar-node-mini-cart").addClass("ng-bar-node-mini-cart-fixed"), a(".cart-child").addClass("ng-bar-node-mini-cart-child-fixed"), a(".reg-bar-node , #username-node-slide ,#username-node").addClass("reg-bar-node-fixed"), a(".ng-search").find(".g-search").addClass("g-search-fixed"), a(".ng-nav-bar").addClass("ng-nav-bar-fixed"), a(".ng-nav-index").hide()
        }

        function f() {
            n.removeClass("ng-sort-fixed"), sn.isHome && n.addClass("ng-sort-index"), sn.isHome && n.find(".ng-sort-list-box").show(), a(".ng-bar-node-mini-cart").removeClass("ng-bar-node-mini-cart-fixed"), a(".cart-child").removeClass("ng-bar-node-mini-cart-child-fixed"), a(".reg-bar-node , #username-node-slide ,#username-node").removeClass("reg-bar-node-fixed"), a(".ng-search").find(".g-search").removeClass("g-search-fixed"), a(".ng-nav-bar").removeClass("ng-nav-bar-fixed"), a(".ng-nav-index").show(), o.fadeOut(100)
        }

        function g() {
            0 == r.find("ul.sort-list").length && a.ajax({
                url: SFE.URL_CONST.LIB_HOST[e] + "/header/newCateV6-allSort.jsonp",
                method: "get",
                dataType: "jsonp",
                jsonpCallback: "allSort",
                cache: !0,
                success: function (a) {
                    r.prepend(a)
                }
            })
        }

        function h() {
            q > 500 && (t.stop(!1, !0).slideDown(), t.find("img[src3]").each(function () {
                a(this).attr("src", a(this).attr("src3")).removeAttr("src3")
            }), u.addClass("ng-btn-hover"))
        }

        function i() {
            t.stop(!1, !0).slideUp(), u.removeClass("ng-btn-hover")
        }

        var j, k, l, m, n = a(".ng-sort"), o = a(".ng-fix-bar"), p = n.height(), q = a(window).height(),
            r = (a(".ng-bottom-fixed-pub"), a(".ng-bottom-fixed-sidebar"), a(".ng-sort-list-box"));
        a(window).scroll(function () {
            sn.isNewHome || b()
        }), n.hover(function () {
            if (k || !sn.isHome) {
                clearTimeout(m);
                a(this);
                g(), m = setTimeout(function () {
                    r.slideDown()
                }, 200)
            }
        }, function () {
            if (k || !sn.isHome) {
                clearTimeout(m);
                var b = a(this);
                m = setTimeout(function () {
                    b.find(".ng-sort-detail").animate({width: "0px"}, 100, function () {
                        r.slideUp(200)
                    })
                }, 200)
            }
        });
        var s = a(".ng-bottom-fixed"), t = s.find(".ng-slide-box-code"), u = s.find("a.code-btn"),
            v = s.find("a.ng-btn"), w = a(".ng-slide-box-life"), x = s.find("a.ng-close");
        v.click(function () {
            s.find(".ng-slide-box").slideUp().siblings("a.ng-btn").removeClass("ng-btn-hover")
        });
        var y = u.attr("link");
        q < 500 && u.attr({
            href: y,
            target: "_blank"
        }), sn.isHome || a("#ng-mob-link").attr("href", y), u.click(function () {
            t.is(":visible") ? i() : h()
        }), s.find(".life-help-btn").click(function () {
            a(this).toggleClass("ng-btn-hover"), w.is(":visible") ? w.slideUp() : w.slideDown()
        }), a(".ng-backtotop").click(function () {
            a("html, body").animate({scrollTop: 0}, 200)
        }), a(document).on("keyup", function (b) {
            var c = b.target.nodeName.toUpperCase();
            "INPUT" != c && "TEXTAREA" != c && 84 == b.which && a(".ng-backtotop").click()
        }), x.click(function () {
            a(this).parent(".ng-slide-box").slideUp(), s.find("a.ng-btn").removeClass("ng-btn-hover")
        }), a(document).click(function () {
            s.find(".ng-slide-box").slideUp(), v.removeClass("ng-btn-hover")
        }), s.click(function (a) {
            a.stopPropagation()
        })
    }, v = function () {
        function b(b) {
            var c = a(b);
            if (c.length > 0) return a(window).scrollTop() + a(window).height() > c.offset().top && c.offset().top + c.height() > a(window).scrollTop()
        }

        function c() {
            function c() {
                a.ajax({
                    type: "get",
                    cache: !0,
                    dataType: "jsonp",
                    url: "//lib.suning.com/api/jsonp/cb/gFooter-getFootercb.jsonp",
                    jsonpCallback: "getFootercb",
                    success: function (a) {
                        if (g = a, f(g), i) {
                            var b = a;
                            localStorage.setItem(key, JSON.stringify({time: (new Date).getTime(), footerContent: b}))
                        }
                    }
                })
            }

            function f(b) {
                var c, d, e, f, g, h = "";
                if (b) {
                    if (b.five_logo) {
                        var i = b.five_logo.tag;
                        i && (c = i.length);
                        for (var j = 0; j < c; j++) e = b.five_logo.tag[j], h += '<dl><dt><a href="' + e.linkUrl + '" target="_blank" rel="nofollow" name="' + e.productSpecialFlag + '"><img src="//image.suning.cn' + e.picUrl + '" alt="' + e.elementDesc + '" /></a></dt><dd><p><strong><a href="' + e.linkUrl + '" target="_blank" rel="nofollow" name="' + e.productSpecialFlag + '">' + e.elementName + "</a></strong></p><p>" + e.elementDesc + "</p></dd></dl>";
                        a(".ng-promise").prepend(h), h = ""
                    }
                    if (b.footLink_list) {
                        var k = b.footLink_list.nodes;
                        if (k) {
                            c = k.length;
                            for (var j = 0; j < c; j++) {
                                if (h += "<dl>", e = k[j], h += "<dt>" + k[j].tag[0].elementName + "</dt>", g = e.nodes) {
                                    d = g[0].tag.length;
                                    for (var l = 0; l < d; l++) f = g[0].tag[l], h += '<dd><a href="' + f.linkUrl + '" target="_blank" rel="nofollow" name="' + f.elementDesc + '">' + f.elementName + "</a></dd>"
                                }
                                h += "</dl>"
                            }
                            a(".ng-help-box").html(h), h = ""
                        }
                    }
                    if (b.footer_one) {
                        var i = b.footer_one.tag;
                        if (i) {
                            c = i.length;
                            for (var j = 0; j < c; j++) e = i[j], h += '<a href="' + e.linkUrl + '" target="_blank" name="' + e.elementDesc + '">' + e.elementName + "</a>", j != c - 1 && (h += "<span>|</span>");
                            a(".ng-url-list").eq(0).html(h), h = ""
                        }
                    }
                    if (b.footer_two) {
                        var i = b.footer_two.tag;
                        if (i) {
                            c = i.length;
                            for (var j = 0; j < c; j++) e = i[j], h += '<a href="' + e.linkUrl + '" target="_blank" name="' + e.elementDesc + '">' + e.elementName + "</a>", j != c - 1 && (h += "<span>|</span>");
                            a(".ng-url-list").eq(1).html(h), h = ""
                        }
                    }
                    a(".ng-app-down").show(), a(".ng-copyright").show(), a(".ng-authentication").show(), lazyelem.detect()
                }
            }

            var g;
            if ((b(".ng-footer") || b(".ng-s-footer")) && !e) {
                e = !0;
                var h, i = d.isLocalStorageSupported();
                if (key = "lazyFooter", i && localStorage.getItem(key)) {
                    h = JSON.parse(localStorage.getItem(key)), storeTime = parseInt(h.time) + 18e5;
                    (new Date).getTime() > storeTime ? c() : (g = h.footerContent, f(g))
                } else c()
            }
        }

        var e = !1;
        c(), a(window).resize(function () {
            c()
        }).scroll(function () {
            c()
        })
    };
    screen.width, smallScreen = !1;
    var w = {
        toolbarDataFlag: !1, appDownBoxHover: function () {
            var b, c = a(".app-down-box"), d = c.find(".ng-d-box"), e = c.find("img[src3]"), f = function () {
                c.find(".ng-bar-node").addClass("ng-bar-node-hover"), e.each(function () {
                    a(this).attr("src", a(this).attr("src3")).removeAttr("src3")
                }), d.slideDown(100)
            }, g = function () {
                c.find(".ng-bar-node").removeClass("ng-bar-node-hover"), d.slideUp(100)
            };
            c.hover(function () {
                clearTimeout(b), b = setTimeout(function () {
                    f()
                }, 150)
            }, function () {
                clearTimeout(b), b = setTimeout(function () {
                    g()
                }, 200)
            }), c.find("a.ng-bar-node").click(function () {
                a(this).toggleClass("ng-bar-node-hover").siblings(".ng-d-box").slideToggle(100)
            }), a(".ng-site-nav-box").hover(function () {
                SFE.search.clearBox(), SFE.search.searchIptBlur()
            }), a(".ng-sn-site-nav").find("i.new").length >= 1 && a(".ng-site-nav-box").find("a.ng-bar-node").find("i.new").css("display", "inline-block")
        }, mySuningDown: function () {
            var b, c, d, f = a(".mysuning-handle"), g = f.find(".ng-d-box"), h = f.find("img[src3]"), i = !1;
            d = SFE.URL_CONST.IMG_HOST[e] + "/uimg/cmf/cust_headpic/", c = SFE.URL_CONST.MSI_HOST[e], SFE.URL_CONST.SIGN_HOST[e];
            var j = function () {
                f.find(".ng-bar-node").addClass("ng-bar-node-hover"), h.each(function () {
                    a(this).attr("src", a(this).attr("src3")).removeAttr("src3")
                }), g.slideDown(100), s() && (i || (i = !0, a.ajax({
                    type: "post",
                    url: c + "b2cBroadside/memberInfoPageHeadB2c.do",
                    async: !0,
                    dataType: "jsonp",
                    jsonpCallback: "getMyMemberInfoCallback",
                    timeout: 15e3,
                    success: function (b) {
                        "1" == b.custType && a("#userNickname").attr("href", c + "getEnterpriseMemberInfo.do"), null != b.nickName && "error" != b.nickName && a("#userNickname").html(b.nickName), "0" == b.custType ? a("#userHead").attr("src", d + b.sysHeadPicNum) : null != b.sysHeadPicNum ? a("#userHead").attr("src", d + b.sysHeadPicNum) : a("#userHead").attr("src", "//res.suning.cn/project/msIndex/index2.0/image/sysheadpic_120x120.jpg"), a("#userNickname").css("display", "block"), a(".mysuning-infor .login").hide()
                    },
                    error: function (a) {
                    }
                })))
            }, k = function () {
                f.find(".ng-bar-node").removeClass("ng-bar-node-hover"), g.slideUp(100)
            };
            f.hover(function () {
                clearTimeout(b), b = setTimeout(function () {
                    j()
                }, 150)
            }, function () {
                clearTimeout(b), b = setTimeout(function () {
                    k()
                }, 200)
            })
        }, toolbarOpen: function (b) {
            var c, b = a(b), d = this;
            b.hover(function () {
                var e = a(this);
                clearTimeout(c), c = setTimeout(function () {
                    b.hasClass("lazy-bar-box") && !d.toolbarDataFlag && (d.toolbarDataFlag = !0, d.getToolbarData()), e.find("a.ng-bar-node").addClass("ng-bar-node-hover").siblings(".ng-d-box").slideDown(100)
                }, 150)
            }, function () {
                var b = a(this);
                clearTimeout(c), c = setTimeout(function () {
                    b.find("a.ng-bar-node").removeClass("ng-bar-node-hover").siblings(".ng-d-box").slideUp(100)
                }, 150)
            }), b.find("a.ng-bar-node").click(function () {
                a(this).toggleClass("ng-bar-node-hover").siblings(".ng-d-box").slideToggle(100), b.hasClass("lazy-bar-box") && !d.toolbarDataFlag && (d.toolbarDataFlag = !0, d.getToolbarData())
            })
        }, getToolbarData: function () {
            function b() {
                var b = SFE.URL_CONST.LIB_HOST[e] + "/api/jsonp/cb/headToolbar-getTBcb.jsonp";
                a.ajax({
                    type: "get",
                    cache: !0,
                    dataType: "jsonp",
                    url: b,
                    jsonpCallback: "getTBcb",
                    success: function (a) {
                        if (g = a, c(g), h) {
                            var b = a;
                            localStorage.setItem(i, JSON.stringify({time: (new Date).getTime(), topContent: b}))
                        }
                    }
                })
            }

            function c(b) {
                var c = "";
                if (b) {
                    if (b.toolbra_daogou) {
                        var d = b.toolbra_daogou.nodes, e = d.length;
                        c = "";
                        for (var f = 0; f < e; f++) {
                            c += f == e - 1 ? '<dl class="sn-site-list rnb">' : '<dl class="sn-site-list">', c += "<dt>" + b.toolbra_daogou.tag[f].elementName + "</dt>", c += "<dd>";
                            for (var g = 0; g < d[f].tag.length; g++) c += '<p><a name="' + d[f].tag[g].elementDesc + '" href="' + d[f].tag[g].linkUrl + '" target="_blank">' + d[f].tag[g].elementName, d[f].tag[g].color && (c += '<i class="hot"></i>'), c += "</a></p>";
                            c += "</dd>", c += "</dl>"
                        }
                        a(".ng-sn-site-nav").prepend(c), a(".ng-sn-site-nav .head-loading").remove()
                    }
                    if (b.toolbar_shangjia) {
                        var h = b.toolbar_shangjia.tag, e = h.length;
                        c = "";
                        for (var f = 0; f < e; f++) c += '<a href="' + h[f].linkUrl + '" rel="nofollow" target="_blank" name="' + h[f].elementDesc + '">' + h[f].elementName + "</a>";
                        a(".shop-center-child").html(c)
                    }
                    if (b.toolbar_fuwu) {
                        var h = b.toolbar_fuwu.tag, e = h.length;
                        c = "";
                        for (var f = 0; f < e; f++) c += '<a href="' + h[f].linkUrl + '" rel="nofollow" target="_blank" name="' + h[f].elementDesc + '">' + h[f].elementName + "</a>";
                        a(".service-center-child").prepend(c), a(".service-center-child .head-loading").remove(), a(".service-center-child a").show()
                    }
                }
            }

            var f, g, h = d.isLocalStorageSupported(), i = "lazyTop";
            if (h && localStorage.getItem(i)) {
                f = JSON.parse(localStorage.getItem(i)), storeTime = parseInt(f.time) + 18e5;
                (new Date).getTime() > storeTime ? b() : (g = f.topContent, c(g))
            } else b()
        }, closeDownBox: function () {
            a(".ng-toolbar").find("a.ng-close").click(function () {
                var b = a(this).parents(".ng-bar-node-box");
                b.find(".ng-d-box").slideUp(100, function () {
                    b.find(".ng-bar-node").removeClass("ng-bar-node-hover")
                })
            })
        }, touchScreen: function () {
            if (!b) {
                var c;
                c = !!(new RegExp(/Pad/) || new RegExp(/pad/)).exec(navigator.userAgent)
            }
            c && (a("a.touch-href").attr("href", "javascript:void(0);"), a(".ng-sort").find("ul.sort-list").find("a").attr("href", "javascript:void(0);"), a(".ng-sort").find("a.ng-all-hook").attr("href", "javascript:void(0);"), a(".ng-bar-node-mini-cart").attr("href", "javascript:void(0);"))
        }, getOrderNum: function () {
            function b(a) {
                var b;
                if (isNaN(a) || void 0 == a || null == a) b = ""; else {
                    var c = parseInt(a);
                    c = c > 99 ? "99+" : c, b = "(" + c + ")"
                }
                return b
            }

            if (s()) {
                var c = a("#waitEvaluation"), d = a("#waitDeliveryCounts"), g = a("#waitPayCounts"), h = !1, i = !1;
                a(".myorder-handle").mouseenter(function () {
                    if (!h) {
                        f("custno");
                        a.ajax({
                            url: SFE.URL_CONST.REVIEW_HOST[e] + "/ajax/getpendingCount/waitEvaluation_callback.do",
                            method: "get",
                            dataType: "jsonp",
                            cache: !0,
                            jsonpCallback: "waitEvaluation_callback",
                            success: function (a) {
                                var d = parseInt(a.pendingOrderCount);
                                c.html(b(d)), h = !0
                            }
                        })
                    }
                    i || a.ajax({
                        url: SFE.URL_CONST.ORDER_HOST[e] + "/publicService/orderCount.do",
                        method: "get",
                        dataType: "jsonp",
                        success: function (a) {
                            d.html(b(a.waitDeliveryCounts)), g.html(b(a.waitPayCounts)), i = !0
                        }
                    })
                })
            }
        }, showGifLogo: function () {
            var b = a(".ng-gif-logo img , img.slogn"), c = b.attr("src3");
            b.attr("src", c)
        }, init: function () {
            w.appDownBoxHover(), w.mySuningDown(), p.init(), w.toolbarOpen(".ng-site-nav-box"), w.toolbarOpen(".shop-handle"), w.toolbarOpen(".myorder-handle"), w.toolbarOpen(".service-handle"), w.toolbarOpen(".username-handle"), w.closeDownBox(), w.touchScreen(), w.getOrderNum(), w.showGifLogo()
        }
    }, x = function () {
        s(), y(), w.getOrderNum()
    }, y = function () {
        var b = "", c = {};
        s() && (b = SFE.URL_CONST.MSG_HOST[e] + "/mms-web/", a.ajax({
            url: b + "service/getlastunreadmsg.do",
            method: "get",
            dataType: "jsonp",
            cache: !1,
            jsonpCallback: "getUnreadMsg",
            success: function (b) {
                b && b.status && b.status > 0 && (a(".ng-bar-node-msg .dot").show(), a(".ng-msg-child .ng-msg-list").html('<a class="ng-msg-item" name="public0_none_dbgjt_wdxx02" href="' + (b.msgUrl || "//msg.suning.com/") + '" target="_blank" unread="true"><i></i><span>' + b.msgInfo + "</span></a>"), c = b)
            }
        }), a(".ng-msg-child").on("click", ".ng-msg-item[unread]", function () {
            a(this).data();
            a.ajax({
                url: b + "service/updateMsgToreaded.do",
                method: "get",
                dataType: "jsonp",
                cache: !1,
                jsonpCallback: "updateUnreadMsg",
                data: {msgId: c.msgId, terminalCode: c.terminalCode, typeCode: c.msgTypeCode},
                success: function (b) {
                    var c = "";
                    b && 0 == b.returnCode && (a(".ng-bar-node-msg .dot").hide(), c = '<div class="ng-msg-item ng-msg-item-no"><i></i><span>嗷~ 没有新消息...</span></div>', a(".ng-msg-child .ng-msg-list").html(c))
                }
            })
        }))
    }, z = function () {
        function b(a) {
            return a = a.replace(/\-/g, "%2d"), a = a.replace(/\&/g, "%26"), a = a.replace(/\./g, "%2E"), a = a.replace(/\+/g, "%2B")
        }

        var c = a("#searchKeywords"), d = a.trim(c.val());
        if ("" == d) c.focus(); else {
            if ("snbook" == a("#g_static_channel_name").val()) {
                var e = sn.searchDomain.replace("emall/", "") + "web/search.do?keywords=" + encodeURIComponent(b(d));
                return window.location.href = e, !1
            }
            var e = sn.searchDomain.replace("emall/", "") + encodeURIComponent(b(d)), g = f("cityId") || "9173";
            e += "/cityId=" + g, "22001" == sn.searchCatalogId && (e = sn.searchDomain + "bookSearch.do?keyword=" + encodeURIComponent(d), e += "&cityId=" + g, a("#bookSearchChannel").length > 0 && (e += a("#bookSearchChannel").attr("value"))), "14655" == sn.searchCatalogId && (e += "&ch=1"), "14656" == sn.searchCatalogId && (e += "&ch=2"), "undefined" != typeof searchCatalogId && "" != searchCatalogId && 0 != searchCatalogId && (e += "&ci=" + searchCatalogId), "undefined" != typeof param && ("10" == param.searchType ? e += "&ch=1" : "12" == param.searchType && (e += "&ch=2"));
            try {
                var h = a(".g-ac-store").find("em").eq(0).text(), i = d,
                    j = "YT_" + i + "_" + h + "_" + search_da_djc_index,
                    k = a('<a href="###" name="' + j + '"></a>')[0];
                "undefined" != typeof sa && void 0 !== sa.click && sa.click.sendDatasIndex(k)
            } catch (l) {
            }
            window.location.href = e
        }
        return !1
    }, A = function () {
        var b = a.Deferred();
        if (0 == a(".g-search").length || c || sn.noShowTopCms) return !1;
        var d = SFE.URL_CONST.LIB_HOST[e] + "/activityNav-activityNavHtml.jsonp", f = SFE.URL_CONST.IMG_HOST[e];
        return a.ajax({
            type: "get", cache: !0, dataType: "jsonp", url: d, jsonpCallback: "activityNavHtml", success: function (c) {
                if (void 0 !== c && c && "undefined" != c) {
                    var d, e, g = c.activityNavImg.tag, h = c.activityNavBtn.tag, i = c.navLiftList.tag,
                        j = c.navRightList.tag, k = c.actNavCode.tag, l = c.activityNavBg.tag, m = c.actFooterTitle.tag,
                        n = "", o = "", p = "";
                    if (g && h && l && g.length && h.length && l.length) {
                        d = g[0].linkUrl ? '<a href="' + g[0].linkUrl + '" target="_blank" ' : '<a href="javascript:;"', n = '<div class="activity-nav-wrapper" style=" background:' + l[0].color + ';"><div class="activity-nav">' + d + '" title="' + g[0].elementName + '"><img src="' + f + g[0].picUrl + '" alt="" width="140" height="55" /></a><ul>';
                        for (var q = 0; q < h.length; q++) p = h[q].elementName.length > 3 ? "fouthword" : "", d = h[q].linkUrl ? '<a href="' + h[q].linkUrl + '" target="_blank" name="' + h[q].trickPoint + '"' : '<a href="javascript:;"', n += "<li>" + d + ' class="' + p + '">' + h[q].elementName + '</a><i class="angle"></i></li>';
                        n += "</ul></div></div>", a(".ng-toolbar").before(n)
                    }
                    if ((a(".ng-footer").find(".ng-ser-box").length > 0 || a(".ng-footer").find(".footer-dom").length > 1) && i && j && k && m && i.length && j.length && k.length && m.length) {
                        var r = m[0].elementDesc.split(";"), s = r[0] ? r[0] : "", t = r[1] ? r[1] : "";
                        d = m[0].linkUrl ? '<a href="' + m[0].linkUrl + '" target="_blank" name="' + m[0].trickPoint + '"' : '<a href="javascript:;"', e = m[1].linkUrl ? '<a href="' + m[1].linkUrl + '" target="_blank" name="' + m[1].trickPoint + '"' : '<a href="javascript:;"', o = '<div class="activity-list-wrapper" style="background:' + s + '"><div class="activity-title"><h3 class="main-enter">' + d + ' style="color:' + m[0].color + ';">' + m[0].elementName + '</a><span></span></h3><h3 class="activity-enter">' + e + ' style="color:' + m[0].color + ';">' + m[1].elementName + '</a><span></span></h3></div><div class="activity-list"><div class="mobiledown"><div class="code-wrapper" style="background:' + t + '"><div class="code"><img src="' + f + k[0].picUrl + '" alt="" width="75" height="75" /></div><p>' + k[0].elementName + '</p></div><p class="title" style="color:' + k[0].color + '">' + k[0].elementDesc + '</p></div><ul class="activity-list-left">';
                        for (var u = 0; u < i.length; u++) d = i[u].linkUrl ? '<a href="' + i[u].linkUrl + '" target="_blank" name="' + i[u].trickPoint + '"' : '<a href="javascript:;"', o += '<li style="background:' + t + ';">' + d + ">" + i[u].elementName + "</a><i>></i></li>";
                        o += '</ul><ul class="activity-list-right">';
                        for (var v = 0; v < j.length; v++) d = j[v].linkUrl ? '<a href="' + j[v].linkUrl + '" target="_blank" name="' + j[v].trickPoint + '"' : '<a href="javascript:;"', o += '<li style="background:' + t + ';">' + d + ">" + j[v].elementName + "</a><i>></i></li>";
                        o += "</ul></div></div>", a(".ng-footer").before(o)
                    }
                }
                b.resolve()
            }, error: function () {
                b.resolve()
            }
        }), b.promise()
    };
    return {
        d: f,
        getCookie: g,
        setCookie: h,
        toolBarEvent: w.init,
        toolbarFunc: w,
        setSearchCity: o.setSearchCity,
        replaceCityParam: o.replaceCityParam,
        replaceCityPlaceHolder: o.replaceCityPlaceHolder,
        registerurl: k,
        logonurl: j,
        allSort: t,
        fixEvent: u,
        miniCartReload: q,
        miniCartNum: r,
        isLogin: s,
        getCity: m.getCity,
        getCityCode: m.getCityCode,
        logoff: i,
        floatBar: n,
        onSubmitSearch: z,
        getActivityNav: A,
        isLocalStorageSupported: d.isLocalStorageSupported,
        loginMsg: x,
        footerLazyLoad: v,
        getEnv: d.getEnv,
        serialize: d.serialize,
        getQueryString: d.getQueryString,
        loadScript: d.loadScript,
        isWebp: d.isWebp,
        productFomate: l
    }
}(jQuery), $(function () {
    SFE.base.toolBarEvent(), SFE.base.navPromise = SFE.base.getActivityNav(), SFE.search.searchEvent(), SFE.base.allSort(), SFE.base.fixEvent(), SFE.base.footerLazyLoad(), $("a[name^=public0_],input[name^=public0_]").live("click", function () {
        "undefined" != typeof sa && sa.click.sendDatasIndex(this)
    })
});/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) {
                return
            }
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type) {
            if (void 0 !== t.offsetX) {
                i.clk_x = t.offsetX, i.clk_y = t.offsetY
            } else {
                if ("function" == typeof e.fn.offset) {
                    var o = a.offset();
                    i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
                } else {
                    i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop
                }
            }
        }
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) {
            return this.attr.apply(this, arguments)
        }
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++) {
                i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])])
            }
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) {
                n.append(a[i].name, a[i].value)
            }
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) {
                    o[i] && n.append(o[i][0], o[i][1])
                }
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) {
                    return t
                }
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData) {
                        for (var d in m.extraData) {
                            m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0])
                        }
                    }
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) {
                        return x.abort("timeout"), void S.reject(x, "timeout")
                    }
                    if (t == k && x) {
                        return x.abort("server abort"), void S.reject(x, "error", "server abort")
                    }
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) {
                                throw"timeout"
                            }
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) {
                                return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250)
                            }
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) {
                                    x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText
                                } else {
                                    if (l) {
                                        var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                        p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                    }
                                }
                            } else {
                                "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText))
                            }
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                x.abort(e)
            }, r) {
                for (l = 0; l < h.length; l++) {
                    c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled")
                }
            }
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), g = v[0], x = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                },
                abort: function (t) {
                    var r = "timeout" === t ? "timeout" : "aborted";
                    a("aborting upload... " + r), this.aborted = 1;
                    try {
                        g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                    } catch (n) {
                    }
                    v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                }
            }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) {
                return m.global && e.active--, S.reject(), S
            }
            if (x.aborted) {
                return S.reject(), S
            }
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, C = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0,
                    o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length) {
            return a("ajaxSubmit: skipping submit process - no element selected"), this
        }
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) {
            return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        }
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) {
            return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        }
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) {
            return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this
        }
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) {
            return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        }
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
            f.resetForm()
        }), t.clearForm && x.push(function () {
            f.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var y = t.success || function () {
            };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else {
            t.success && x.push(t.success)
        }
        if (t.success = function (e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++) {
                x[i].apply(n, [e, r, a || f, f])
            }
        }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) {
            h[E] = null
        }
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) {
            return a
        }
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) {
            return a
        }
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++) {
            if (d = u[c], f = d.name, f && !d.disabled) {
                if (t && o.clk && "image" == d.type) {
                    o.clk == d && (a.push({name: f, value: e(d).val(), type: d.type}), a.push({
                        name: f + ".x",
                        value: o.clk_x
                    }, {name: f + ".y", value: o.clk_y}))
                } else {
                    if (m = e.fieldValue(d, !0), m && m.constructor == Array) {
                        for (r && r.push(d), l = 0, h = m.length; h > l; l++) {
                            a.push({name: f, value: m[l]})
                        }
                    } else {
                        if (n.fileapi && "file" == d.type) {
                            r && r.push(d);
                            var v = d.files;
                            if (v.length) {
                                for (l = 0; l < v.length; l++) {
                                    a.push({name: f, value: v[l], type: d.type})
                                }
                            } else {
                                a.push({name: f, value: "", type: d.type})
                            }
                        } else {
                            null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
                                name: f,
                                value: m,
                                type: d.type,
                                required: d.required
                            }))
                        }
                    }
                }
            }
        }
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array) {
                    for (var i = 0, o = n.length; o > i; i++) {
                        r.push({name: a, value: n[i]})
                    }
                } else {
                    null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
                }
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) {
            return null
        }
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) {
                return null
            }
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) {
                        return d
                    }
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) {
                this.checked = t
            } else {
                if ("option" == this.tagName.toLowerCase()) {
                    var a = e(this).parent("select");
                    t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
                }
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
var SFE = SFE || {};
SFE.search = {};
SFE.search = (function ($) {
    var searchFlag = true;
    var tempkeyArray = new Array();
    var d = function (b) {
        var a;
        return (a = document.cookie.match(RegExp("(^| )" + b + "=([^;]*)(;|$)"))) ? decodeURIComponent(a[2].replace(/\+/g, "%20")) : null
    };
    var snBusError = function (opt) {
        var sa = sa || {};
        sa.openAPI = sa.openAPI || {};
        if (sa.initTrackerConfig) {
            sa.initTrackerConfig();
            var userId = d("custno") || "";
            var cityCode = d("cityCode") || "025";
            var opt = $.extend(true, {
                bid: "",
                error_code: "",
                error_type: 1,
                error_detail: "",
                member_id: userId,
                region: cityCode,
                type_name: ""
            }, opt);
            sa.openAPI.sendMsgV2(param)
        }
    };
    var defaultSearchTitle = "输入关键字搜索商品/品牌/店铺";
    var searchChannelId = "";
    var snbookHotWord = function () {
        $.ajax({
            url: sn.searchDomain + "web/allHotWord.jsonp",
            cache: false,
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "AllHWord",
            success: function (data) {
                var _str = "";
                var hotWords = data.hotWords;
                for (var i = 0; i < 6 && i < hotWords.length; i++) {
                    var _value = hotWords[i];
                    var _href = sn.searchDomain + "web/search.do?keywords=" + encodeURIComponent(resolveStr(_value));
                    _str += '<a href="' + _href + '" target="_blank" name="public0_RSC_' + _value + "_" + i + '">';
                    if (i < 3) {
                        _str += '<font style="color:#FF6600">' + _value + "</font>"
                    } else {
                        _str += _value
                    }
                    _str += "</a>"
                }
                var _html = $("#snKeywordNew").html() + _str;
                $("#snKeywordNew").html(_html)
            }
        })
    };
    var dsservice = function () {
        var ego_pre = /^(\w*)(pre)(\w*)(.cnsuning.com)$/;
        var ego_sit = /^(\w*)(sit)(\w*)(.cnsuning.com)$/;
        var ego_dev = /^(\w*)(dev)(\w*)(.cnsuning.com)$/;
        var ego_poc = /^(\w*)(poc)(\w*)(.cnsuning.com)$/;
        var ego_xgpre = /^(\w*)(xgpre|prexg)(\w*)(.cnsuning.com)$/;
        var _hostName = document.location.hostname;
        var proto = document.location.protocol;
        httpHead = "http";
        if (proto && proto.indexOf("https") != -1) {
            httpHead = "https"
        }
        var dsservice = httpHead + "://ds.suning.com/ds/";
        if (ego_xgpre.test(_hostName)) {
            dsservice = httpHead + "://dsxg.cnsuning.com/ds/"
        } else {
            if (ego_pre.test(_hostName)) {
                dsservice = httpHead + "://dspre.cnsuning.com/ds/"
            } else {
                if (ego_sit.test(_hostName)) {
                    dsservice = httpHead + "://dssit.cnsuning.com/ds/"
                } else {
                    if (ego_dev.test(_hostName)) {
                        dsservice = httpHead + "://dspre.cnsuning.com/ds/"
                    } else {
                        if (ego_poc.test(_hostName)) {
                            dsservice = httpHead + "://dspoc.cnsuning.com/ds/"
                        }
                    }
                }
            }
        }
        return dsservice
    };
    var getSearchKeyword = function () {
        if ($("#searchKeywords").size() == 0) {
            return false
        }
        var channelName = $("#g_static_channel_name").val();
        if (channelName == "snbook") {
            var searchKeywordsHidden = $("#searchKeywordsHidden").val();
            if (typeof searchKeywordsHidden != "undefined" && searchKeywordsHidden != "") {
                $("#searchKeywords").val(searchKeywordsHidden);
                $("#snKeywordNew").html('<input type="hidden" id="searchDefaultKeyword" value="' + searchKeywordsHidden + '">')
            } else {
                $.ajax({
                    url: sn.searchDomain + "web/hotkeywords.jsonp",
                    cache: false,
                    dataType: "jsonp",
                    jsonp: "callback",
                    jsonpCallback: "HWord",
                    success: function (data) {
                        $("#searchKeywords").val(data.hotWords);
                        var _html = $("#snKeywordNew").html() + '<input type="hidden" id="searchDefaultKeyword" value="' + data.hotWords + '">';
                        $("#snKeywordNew").html(_html)
                    }
                })
            }
            snbookHotWord();
            return false
        }
        var daMain = dsservice() + "hotkeywords/";
        if (typeof (sn.relatedWord) != "undefined") {
            var relatedType = "0";
            if (typeof (sn.relatedType) != "undefined") {
                relatedType = sn.relatedType
            }
            var wt = "RSC";
            if (relatedType != "0") {
                wt = "XGSS"
            }
            var curl = dsservice() + "correlativeNew/" + encodeURIComponent($("#searchKeywordsHidden").val()) + "-20-" + relatedType + "-showHotkeywordsSearch.jsonp";
            $.ajax({
                url: curl,
                type: "get",
                dataType: "jsonp",
                jsonpCallback: "showHotkeywordsSearch",
                success: function (data) {
                    try {
                        if (data.status == "200") {
                            var html = "";
                            if (data.rs && data.rs.length > 0) {
                                var index = 0;
                                $(data.rs).each(function () {
                                    var forwardUrl = "/" + encodeURIComponent(this.keyword.replace(/\-/g, "%2d")) + "/";
                                    var wordNumber = this.wordNumber;
                                    if (typeof wordNumber != "undefined" && wordNumber) {
                                        forwardUrl = "/" + wordNumber + ".html"
                                    }
                                    html += "<a sa-data=\"{'eletp':'xgsskeyword'}\" name=\"public0_" + wt + "_" + this.keyword + "_" + index + '-0" target="_blank" href="' + forwardUrl + '">' + this.keyword + "</a>";
                                    index++
                                })
                            }
                            $("#snKeywordNew").html(html);
                            if ($("#snKeywordNew").find("a:first").length) {
                                var _top = $("#snKeywordNew").find("a:first").offset().top;
                                $("#snKeywordNew").find("a").each(function (index, el) {
                                    if ($(el).offset().top != _top) {
                                        $(el).addClass("toRemove")
                                    }
                                });
                                $("#snKeywordNew").find("a.toRemove").remove()
                            }
                        } else {
                            snBusError({
                                bid: "ss-ggyt_xgssc",
                                error_code: "ss-ggyt_xgssc-10003",
                                error_type: 1,
                                error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                                type_name: "Ds相关搜索词接口异常"
                            })
                        }
                        searchFlag = true;
                        var searchKeywordsHidden = $("#searchKeywordsHidden").val();
                        if (searchKeywordsHidden) {
                            $("#searchKeywords").val(searchKeywordsHidden)
                        } else {
                            if ($("#searchKeywords").val() == "" && document.activeElement.id != "searchKeywords") {
                                var searchDefaultKeyword = $("#searchDefaultKeyword").val();
                                if (searchDefaultKeyword != "") {
                                    $("#searchKeywords").val(searchDefaultKeyword)
                                } else {
                                    $("#searchKeywords").val(defaultSearchTitle)
                                }
                                searchFlag = false
                            }
                        }
                    } catch (e) {
                        snBusError({
                            bid: "ss-ggyt_xgssc",
                            error_code: "ss-ggyt_xgssc-10003",
                            error_type: 2,
                            error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                            type_name: "无相关搜索词、热门搜索、无默认词"
                        })
                    }
                },
                error: function () {
                    snBusError({
                        bid: "ss-ggyt_xgssc",
                        error_code: "ss-ggyt_xgssc-10003",
                        error_type: 1,
                        error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                        type_name: "Ds相关搜索词接口异常"
                    })
                }
            })
        } else {
            var userId = d("custno") || "";
            var cityCode = d("cityCode") || "025";
            var sn_city = d("SN_CITY");
            if (sn_city) {
                var sn_ctity_search = sn_city.split("_");
                cityCode = sn_ctity_search[1]
            }
            var devId = d("_snma");
            var cuserId = "";
            if (devId != null && devId != "") {
                cuserId = devId.split("|")[1]
            }
            var url = dsservice() + "personalizedWord/" + userId + "-" + getCategoryId() + "--" + cuserId + "-" + cityCode + "-showHotkeywords.xjsonp";
            $.ajax({
                url: url,
                type: "get",
                dataType: "jsonp",
                timeout: 3000,
                jsonpCallback: "showHotkeywords",
                success: function (data) {
                    try {
                        var html = data.html.replace(/\{cityId}/g, d("cityId"));
                        $("#snKeywordNew").html(html);
                        if ($("#searchDefaultKeyword") && $("#searchDefaultKeyword").attr("apsClickUrl") != "") {
                            SAUP.sendLogData && SAUP.sendLogData("expoManual", $('<a sap-modid="gSearch" href="' + $("#searchDefaultKeyword").attr("apsClickUrl") + "\" sa-data=\"{'eletp':'dfword','searchvalue':'" + $("#searchDefaultKeyword").val() + "'}\"/>")[0])
                        } else {
                            SAUP.sendLogData && SAUP.sendLogData("expoManual", $("<a sap-modid=\"gSearch\" href=\"javascript:\" sa-data=\"{'eletp':'dfword','searchvalue':'" + $("#searchDefaultKeyword").val() + "'}\"/>")[0])
                        }
                        if ($("#snKeywordNew").find("a:first").length) {
                            var _top = $("#snKeywordNew").find("a:first").offset().top;
                            $("#snKeywordNew").find("a").each(function (index, el) {
                                if ($(el).offset().top != _top) {
                                    $(el).addClass("toRemove")
                                }
                            });
                            $("#snKeywordNew").find("a.toRemove").remove()
                        }
                        $("#snKeywordNew a").each(function (index, el) {
                            var bg = "{'eletp':'hotkeyword','searchvalue':'" + $(el).text() + "'}",
                                href = $(el).attr("href");
                            SAUP.sendLogData && SAUP.sendLogData("expoManual", SAUP.sendLogData && SAUP.sendLogData("expoManual", $('<a sap-modid="gSearch" href="' + href + '" sa-data="' + bg + '"/>')[0]))
                        });
                        searchFlag = true;
                        var searchKeywordsHidden = $("#searchKeywordsHidden").val();
                        if (searchKeywordsHidden) {
                            $("#searchKeywords").val(searchKeywordsHidden)
                        } else {
                            if ($("#searchKeywords").val() == "" && document.activeElement.id != "searchKeywords") {
                                var searchDefaultKeyword = $("#searchDefaultKeyword").val();
                                if (searchDefaultKeyword != "") {
                                    $("#searchKeywords").val(searchDefaultKeyword)
                                } else {
                                    $("#searchKeywords").val(defaultSearchTitle)
                                }
                                searchFlag = false
                            }
                        }
                    } catch (e) {
                    }
                },
                error: function () {
                    snBusError({
                        bid: "ss-ggyt_rscmrc",
                        error_code: "ss-ggyt_rscmrc-10001",
                        error_type: 1,
                        error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                        type_name: "DS热搜词默认词接口异常"
                    })
                }
            })
        }
    };
    var searchInputEvent = function () {
        if ($("#searchSubmit").size() == 0) {
            return false
        }
        $("#searchSubmit").hover(function () {
            $(this).addClass("search-btn-hover")
        }, function () {
            $(this).removeClass("search-btn-hover")
        });
        var obj = $("#searchKeywords");
        obj.focus(function () {
            $("#picSearchTips").remove();
            $("#picSearchLoading").remove();
            obj.parents(".g-search").addClass("g-search-focus");
            var value = $(this).val(), searchDefaultKeyword = $("#searchDefaultKeyword").val() || "";
            if (value == searchDefaultKeyword || value == defaultSearchTitle) {
                obj.val("").css({color: "#000"})
            }
            outerAction()
        }).blur(function () {
            obj.parents(".g-search").removeClass("g-search-focus");
            var value = $.trim($(this).val()), searchDefaultKeyword = $("#searchDefaultKeyword").val() || "";
            if (searchDefaultKeyword == "") {
                searchDefaultKeyword = defaultSearchTitle
            }
            searchFlag = true;
            if (value == "") {
                searchFlag = false;
                obj.val(searchDefaultKeyword).css({color: "#CCC"})
            }
        })
    };
    var searchHotkeywords = function () {
        var channelName = $("#g_static_channel_name").val();
        if (channelName == "snbook") {
            return false
        }
        var searchHot = $("#rec_results .rec-results");
        if (searchHot.html() != "") {
            return
        }
        var daMain = dsservice() + "searchHotkeywords/";
        $.ajax({
            url: daMain + getCategoryId() + "-searchHotkeywords" + ".jsonp",
            type: "get",
            dataType: "jsonp",
            cache: true,
            jsonpCallback: "searchHotkeywords",
            success: function (data) {
                var dom = '<li class="title"><span>正在热搜中</span> <i class="close ng-iconfont">&#xe627;</i></li>';
                var index_num = 0;
                $(data).each(function () {
                    var url = setUrl(this.keyword);
                    var length = 34;
                    if ($("body").hasClass("root1000")) {
                        length = 22
                    }
                    var tempkey = cutString(this.keyword, length);
                    var titlekey = "";
                    var namekey = this.keyword;
                    var dirId = this.dirId;
                    if (tempkey != this.keyword) {
                        titlekey = this.keyword
                    }
                    var _highLight = "";
                    if (this.highlight) {
                        _highLight = 'class="high-light"'
                    }
                    dom += "<li>" + "<a sa-data=\"{'eletp':'hotkeyword'}\" " + _highLight + ' id="public0_zzrs_' + namekey + "_" + index_num + "-" + dirId + '"  name="public0_zzrs_' + namekey + "_" + index_num + "-" + dirId + '" target="_blank" href="' + url + '" title="' + titlekey + '">' + tempkey + "</a>" + "</li>";
                    index_num++
                });
                searchHot.html(dom);
                var rec = $("#rec_results");
                rec.find(".title").find(".close").each(function () {
                    $(this).click(function () {
                        rec.hide()
                    })
                })
            },
            error: function () {
                snBusError({
                    bid: "ss-ggyt_zzrsz",
                    error_code: "ss-ggyt_zzrsz-10005",
                    error_type: 1,
                    error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                    type_name: "DS正在热搜接口"
                })
            }
        })
    };
    var assSearchwords = function (keyword, resultBox) {
        var abtestParam = "0";
        var userId = d("custno") || "";
        var daMain = dsservice();
        $.ajax({
            url: daMain + "his/new/" + userId + "-" + encodeURIComponent(resolveHisKey(keyword)) + "-" + getSearchCategoryId() + "-1_" + abtestParam + "-autoComplateCallback_" + MD5(userId + "+query") + ".jsonp",
            dataType: "jsonp",
            jsonpCallback: "autoComplateCallback_" + MD5(userId + "+query"),
            success: function (data) {
                $("#ac_results").show();
                var abtest = data.abtest;
                abtestParam = abtest;
                var abtestFlag = "";
                if (abtest) {
                    if (abtest == "1") {
                        abtestFlag = "_B"
                    } else {
                        if (abtest == "2") {
                            abtestFlag = "_A"
                        }
                    }
                }
                var resultDom = '<i class="close ng-iconfont">&#xe627;</i><ul  abtest=' + abtestFlag + ">";
                var i = 1;
                var hisi = 1;
                var n = 1;
                var searchboxBanner = data.searchboxBanner;
                if (searchboxBanner && searchboxBanner.image && searchboxBanner.url) {
                    resultDom += '<li class="input-ad"><a sa-data="{\'eletp\':\'cuxiao\'}" name="public0_RSC-05_' + keyword + '_1"' + abtestFlag + ' target="_blank" href=' + searchboxBanner.url.replace("http://", "//") + ' class="input-ad-link"><img src=' + searchboxBanner.image.replace("http://", "//") + ' alt="" width="260" height="26"></a></li>'
                }
                var brandShop = data.brandShop;
                if (brandShop && brandShop.shopName && brandShop.apsClickUrl && brandShop.shopLogo) {
                    resultDom += '<li sa-data="{\'eletp\':\'shop\'}" class="g-ac-rec-store" assword="' + brandShop.shopName.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;") + '" apsClickUrl="' + brandShop.apsClickUrl.replace("http://", "//") + '"  name="brandshop" >' + '<a href="' + brandShop.apsClickUrl + '" target="_blank" class="store-link"><img src="' + brandShop.shopLogo.replace("http://", "//") + '" alt="" width="90" height="30"><em class="store-name">' + brandShop.shopName + '</em><i class="ng-iconfont arrow-r"></i></a><span style="display:none;"  class="keyparam">' + brandShop.shopName + "</span></li>"
                }
                var index_channel = 1;
                var channelSearch = false;
                if (data.channelSearchList && data.channelSearchList.length > 0) {
                    channelSearch = true;
                    $(data.channelSearchList).each(function (key, value) {
                        var url = sn.searchDomain.replace("emall/", "") + keyword + "/&" + value.filter;
                        var dataM = value.other;
                        var image = value.image;
                        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
                        var objExp = new RegExp(Expression);
                        if (dataM) {
                            if (image) {
                                if (objExp.test(image) == true) {
                                    resultDom += '<li class="promotion-tab"><a href="' + url + '"  name="public0_PD-' + dataM.lable + "_" + keyword + "_" + index_channel + '"><span>在</span><img class="' + dataM.className + '" src="' + value.image.replace("http://", "//") + '" alt=""><span>中搜索</span></a></li>'
                                } else {
                                    resultDom += '<li class="promotion-tab"><a href="' + url + '" name="public0_PD-' + dataM.lable + "_" + keyword + "_" + index_channel + '"><span>在</span><span class="special">' + value.text + "</span><span>中搜索</span></a></li>"
                                }
                            } else {
                                resultDom += '<li class="promotion-tab"><a href="' + url + '" name="public0_PD-' + dataM.lable + "_" + keyword + "_" + index_channel + '"><span>在</span><span class="special">' + value.text + "</span><span>中搜索</span></a></li>"
                            }
                        } else {
                            if (image) {
                                if (objExp.test(image) == true) {
                                    resultDom += '<li class="promotion-tab"><a href="' + url + '" name="public0_PD-_' + keyword + "_" + index_channel + '"><span>在</span><img class src="' + value.image.replace("http://", "//") + '" alt=""><span>中搜索</span></a></li>'
                                } else {
                                    resultDom += '<li class="promotion-tab"><a href="' + url + '" name="public0_PD-_' + keyword + "_" + index_channel + '"><span>在</span><span class="special">' + value.text + "</span><span>中搜索</span></a></li>"
                                }
                            } else {
                                resultDom += '<li class="promotion-tab"><a href="' + url + '" name="public0_PD-_' + keyword + "_" + index_channel + '"><span>在</span><span class="special">' + value.text + "</span><span>中搜索</span></a></li>"
                            }
                        }
                        index_channel++
                    })
                }
                $(data.words).each(function (key, value) {
                    if (typeof value.categoryName != "undefined") {
                        if (!channelSearch) {
                            resultDom += "<li sa-data=\"{'eletp':'reckeyword'}\" assword=\"" + value.categoryName.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;") + '" name="category" indexnum="' + i++ + '"  ismanual= "' + value.isManual + '"  categoryid="' + value.categoryId + '" class="cateSearch">在<b>' + value.categoryName + '</b>分类 中搜索<span style="display:none;" class="keyparam">' + value.keyname + "</span></li>"
                        }
                    } else {
                        if (typeof value.type != "undefined" && value.type === "his") {
                            var _tempkey = value.keyname.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;");
                            resultDom += "<li sa-data=\"{'eletp':'histkeyword'}\" assword=\"" + _tempkey + '"  name="history" indexnum="' + hisi++ + '"><span class="history">' + _tempkey + '</span><span style="display:none;"  class="keyparam">' + _tempkey + '</span><i class="tip">搜索历史</i><i class="ng-iconfont action">&#xe62d;</i></li>'
                        } else {
                            if (n <= 8) {
                                resultDom += "<li sa-data=\"{'eletp':'reckeyword'}\" data-type=\"" + value.type + '" assword="' + value.keyname.replace(/<[^>]+>/g, "").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;") + '" name="hotword" indexnum="' + i + '" ismanual= "' + value.isManual + '" ><span class="keyname">' + value.keyname + '</span><span style="display:none;"  class="keyparam">' + value.keyname + "</span></li>";
                                i++;
                                n++
                            }
                        }
                    }
                });
                var keywordShow = cutString(data.shopSearchWord || keyword, 22);
                keywordShow = keywordShow.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;");
                keyword = keyword.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;");
                if (data.shopUrl) {
                    resultDom += '<li assword="' + keywordShow + '" data-shopUrl="' + data.shopUrl.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;") + '" name="store" indexnum="1" class="g-ac-store"><i class="icon-store"></i>找“<em>' + keywordShow + '</em>”相关<b>店铺</b><span style="display:none;" class="keyparam">' + keyword + "</span></li>"
                }
                resultDom += "</ul>";
                resultBox.html(resultDom);
                resultBox.find(".cateSearch:last").addClass("bottom");
                resultListCurrentIndex = -1
            },
            error: function () {
                snBusError({
                    bid: "ss-ggyt_lxc",
                    error_code: "ss-ggyt_lxc-10004",
                    error_type: 1,
                    error_detail: JSON.stringify({"errorDesc": "response__" + d("custno") || ""}),
                    type_name: "DS联想词接口"
                })
            }
        })
    };
    var searchHisKeyword = function () {
        if (typeof (sn.searchChannelId) != "undefined") {
            searchChannelId = sn.searchChannelId
        }
        var channelName = $("#g_static_channel_name").val();
        if (channelName == "snbook") {
            return false
        }
        var searchHis = $("#rec_results .history-results");
        var userId = d("custno") || "";
        var domTemp = '<li class="title gray"><span>最近搜索</span></li><li> <i class="search-express-none"></i></li>';
        if (userId == "") {
            searchHis.html(domTemp);
            return
        }
        searchHisEvent();
        var daMain = dsservice();
        var url = daMain + "his/" + userId + "---searchHis_" + MD5(userId + "+query") + ".jsonp";
        if (searchChannelId != "") {
            url = daMain + "his/ext/" + userId + "--" + searchChannelId + "-searchHis_" + MD5(userId + "+query") + ".jsonp"
        }
        $.ajax({
            url: url,
            dataType: "jsonp",
            jsonpCallback: "searchHis_" + MD5(userId + "+query"),
            success: function (data) {
                if (($(data.words).size() <= 0 && searchChannelId == "") || (searchChannelId != "" && $(data.rs).size() <= 0)) {
                    searchHis.html(domTemp);
                    return
                } else {
                    var _data = $(data.words);
                    if (searchChannelId != "") {
                        _data = $(data.rs)
                    }
                    var dom = '<li class="title"><span>最近搜索</span>' + '<a href="javascript:void(0)" class="clear-history"><i class="ng-iconfont">&#xe62d;</i>清空</a></li>';
                    _data.each(function (key, value) {
                        if (typeof value.type != "undefined" && value.type === "his") {
                            var _tempkey = value.keyname;
                            if ($("body").hasClass("root1000")) {
                                _tempkey = cutString(_tempkey, 22)
                            }
                            var _title = value.keyname.replace(/\"/g, "&quot;");
                            _tempkey = _tempkey.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;");
                            dom += '<li class="active"><span><a name="histkeyword" sa-data="{\'eletp\':\'histkeyword\'}" title="' + _title + '">' + _tempkey + '</a><i class="ng-iconfont">&#xe62d;</i></span></li>'
                        }
                    });
                    searchHis.html(dom);
                    $(".clear-history").click(function () {
                        var e = e || window.event || arguments.callee.caller.arguments[0];
                        if (e && e.stopPropagation) {
                            e.stopPropagation()
                        } else {
                            e.cancelBubble = true
                        }
                        var userId = d("custno") || "";
                        var daMain = dsservice();
                        var url = daMain + "his/clean/" + userId + "-0_" + MD5(userId + "+clean") + ".jsonp";
                        if (searchChannelId != "") {
                            url = daMain + "his/ext/clean/" + userId + "-" + searchChannelId + "-" + MD5(userId + "+clean") + ".jsonp"
                        }
                        httpGifSendIndex(url);
                        tempkeyArray = new Array();
                        searchHis.find("li").not(".title").find("a").each(function () {
                            tempkeyArray.push($(this).text())
                        });
                        searchHis.html('<li class="title gray"><span>您的历史记录已经被清空</span><a class="cancel-btn" onclick="SFE.search.cancelbtnEvent()">撤销</a></li><li><i class="search-express-none"></i></li>')
                    })
                }
            },
            error: function () {
                searchHis.html(domTemp);
                snBusError({
                    bid: "ss-ggyt_lsc",
                    error_code: "ss-ggyt_lsc-10006",
                    error_type: 1,
                    error_detail: JSON.stringify({"errorDesc": "response__" + userId}),
                    type_name: "DS历史词获取接口"
                })
            }
        })
    };
    var searchHisEvent = function () {
        var searchHis = $("#rec_results .history-results");
        searchHis.delegate(".active", "mouseover", function () {
            $(this).addClass("rec_over").siblings().removeClass("rec_over")
        }).delegate(".active", "click", function () {
            searchFlag = true;
            var flag = false;
            var e = e || window.event || arguments.callee.caller.arguments[0];
            var target = e.target || e.srcElement;
            if (target.tagName == "I") {
                flag = true;
                if (e && e.stopPropagation) {
                    e.stopPropagation()
                } else {
                    e.cancelBubble = true
                }
            }
            if (flag) {
                deleteHisKey($(this).find("span a").attr("title"));
                $(this).remove()
            } else {
                var obj = $("#searchKeywords");
                obj.val($(this).find("span a").attr("title"));
                $("#rec_results").hide();
                $("#searchSubmit").click()
            }
        })
    };
    var cancelbtnEvent = function () {
        var e = e || window.event || arguments.callee.caller.arguments[0];
        if (e && e.stopPropagation) {
            e.stopPropagation()
        } else {
            e.cancelBubble = true
        }
        var searchHis = $("#rec_results .history-results");
        var userId = d("custno") || "";
        var domTemp = '<li class="title gray"><span>最近搜索</span></li><li> <i class="search-express-none"></i></li>';
        if (userId == "") {
            searchHis.html(domTemp);
            return
        }
        var length = tempkeyArray.length;
        var daMain = dsservice();
        var _str = "";
        searchHisEvent();
        var dom = '<li class="title"><span>最近搜索</span>' + '<a href="javascript:void(0)" class="clear-history"><i class="ng-iconfont">&#xe62d;</i>清空</a></li>';
        $(tempkeyArray).each(function () {
            _str += encodeURIComponent(this) + "~";
            var _tempkey = this;
            if ($("body").hasClass("root1000")) {
                _tempkey = cutString(_tempkey, 22)
            }
            dom += '<li class="active"><span><a name="histkeyword" sa-data="{\'eletp\':\'histkeyword\'}" title="' + htmlEncode(this) + '">' + htmlEncode(_tempkey) + '</a><i class="ng-iconfont">&#xe62d;</i></span></li>'
        });
        searchHis.html(dom);
        $(".clear-history").click(function () {
            var e = e || window.event || arguments.callee.caller.arguments[0];
            if (e && e.stopPropagation) {
                e.stopPropagation()
            } else {
                e.cancelBubble = true
            }
            var userId = d("custno") || "";
            var daMain = dsservice();
            var url = daMain + "his/clean/" + userId + "-0_" + MD5(userId + "+clean") + ".jsonp";
            if (searchChannelId != "") {
                url = daMain + "his/ext/clean/" + userId + "-" + searchChannelId + "-" + MD5(userId + "+clean") + ".jsonp"
            }
            httpGifSendIndex(url);
            tempkeyArray = new Array();
            searchHis.find("li").not(".title").find("a").each(function () {
                tempkeyArray.push($(this).text())
            });
            searchHis.html('<li class="title gray"><span>您的历史记录已经被清空</span><a class="cancel-btn" onclick="SFE.search.cancelbtnEvent()">撤销</a></li><li><i class="search-express-none"></i></li>')
        });
        if (_str.length > 0) {
            _str = _str.substring(0, _str.length - 1)
        }
        var url = daMain + "his/add/" + userId + "-" + _str + "-0_" + MD5(userId + "+add") + ".jsonp";
        if (searchChannelId != "") {
            url = daMain + "his/ext/add/" + userId + "-" + _str + "-" + searchChannelId + "-" + MD5(userId + "+add") + ".jsonp"
        }
        httpGifSendIndex(url)
    };
    var deleteHisKey = function (key) {
        if (typeof (sn.searchChannelId) != "undefined") {
            searchChannelId = sn.searchChannelId
        }
        var userId = d("custno") || "";
        var daMain = dsservice();
        var url = daMain + "his/new/del/" + userId + "-" + encodeURIComponent(resolveStr(key)) + "-delsearchHis_" + MD5(userId + "+del") + ".jsonp";
        if (searchChannelId != "") {
            url = daMain + "his/ext/del/" + userId + "-" + encodeURIComponent(resolveHisKey(key)) + "-" + searchChannelId + "-delsearchHis_" + MD5(userId + "+del") + ".jsonp"
        }
        httpGifSendIndex(url)
    };
    var searchCatalogId = false;
    var searchStoreFlag = false;
    var search_da_djc_index = -1;
    var ismanual = 0;
    var abtest = "";
    var nameType = "";
    var wordType = "00";
    var assWord = "";
    var apsClickUrl = "";
    var searchAutoComplete = function () {
        if ($("#searchKeywords").size() == 0) {
            return false
        }
        var channelName = $("#g_static_channel_name").val();
        if (channelName == "snbook") {
            return false
        }
        var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
        var obj = $("#searchKeywords");
        var delay = 200, timer, resultBox = $("#ac_results");
        var rec_results = $("#rec_results");
        if (resultBox.size() == 0) {
            $('<div class="g-ac-results" id="ac_results" style="display:none;"></div>').appendTo(".g-search");
            resultBox = $("#ac_results")
        }
        resultBox.delegate("li", "mouseover", function () {
            if ($(this).find(".action").length > 0) {
                $(this).find(".action").show();
                $(this).find(".tip").hide()
            }
            $(this).addClass("ac_over").siblings().removeClass("ac_over")
        }).delegate("li", "mouseout", function () {
            if ($(this).find(".action").length > 0) {
                $(this).find(".action").hide();
                $(this).find(".tip").show()
            }
        }).delegate("li", "click", function () {
            ismanual = $(this).attr("isManual");
            abtest = $(this).parent("ul").attr("abtest");
            search_da_djc_index = $(this).attr("indexnum");
            nameType = $(this).attr("name");
            wordType = $(this).attr("data-type") || "";
            assWord = $(this).attr("assword");
            apsClickUrl = $(this).attr("apsClickUrl");
            searchFlag = true;
            var flag = false;
            var e = e || window.event || arguments.callee.caller.arguments[0];
            var target = e.target || e.srcElement;
            if ($(target).hasClass("action")) {
                flag = true;
                if (e && e.stopPropagation) {
                    e.stopPropagation()
                } else {
                    e.cancelBubble = true
                }
            }
            if (flag) {
                deleteHisKey($(this).find(".keyparam").text());
                $(this).remove()
            } else {
                if ($(this).attr("categoryid") != "" && $(this).attr("categoryid") != "undefined" && $(this).attr("categoryid") != null) {
                    searchCatalogId = $(this).attr("categoryid")
                } else {
                    searchCatalogId = false
                }
                if ($(this).hasClass("g-ac-store")) {
                    searchStoreFlag = true
                } else {
                    searchStoreFlag = false
                }
                resultListCurrentIndex = -1;
                if (nameType != "brandshop") {
                    obj.val($(this).find(".keyparam").text());
                    resultBox.hide()
                }
                $("#searchSubmit").click()
            }
        });
        var resultListCurrentIndex = -1;
        var selectKeywordByKey = function (n) {
            var resultBox = $("#ac_results"), results = resultBox.find("li"), maxCount = results.size();
            if (resultBox.is("hidden") || results.size() == 0 || Math.abs(n) != 1) {
                return
            }
            resultListCurrentIndex += n;
            if (resultListCurrentIndex < 0) {
                resultListCurrentIndex = maxCount - 1
            }
            if (resultListCurrentIndex == maxCount) {
                resultListCurrentIndex = 0
            }
            var currentKeywords = results.eq(resultListCurrentIndex);
            ismanual = $(currentKeywords).attr("isManual");
            abtest = $(currentKeywords).parent("ul").attr("abtest");
            search_da_djc_index = $(currentKeywords).attr("indexnum");
            nameType = $(currentKeywords).attr("name");
            assWord = $(currentKeywords).attr("assword");
            apsClickUrl = $(currentKeywords).attr("apsClickUrl");
            results.removeClass("ac_over");
            currentKeywords.addClass("ac_over");
            if (currentKeywords.attr("categoryid")) {
                searchCatalogId = currentKeywords.attr("categoryid")
            } else {
                searchCatalogId = false
            }
            if (currentKeywords.hasClass("g-ac-store")) {
                searchStoreFlag = true
            } else {
                searchStoreFlag = false
            }
            obj.val(currentKeywords.find(".keyparam").text());
            return false
        };
        var abtestParam = "0";
        var autoComplateFun = function (keyword) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                $("#rec_results").hide();
                var userId = d("custno") || "";
                if (keyword.length == 0) {
                    $("#rec_results").show();
                    searchHisKeyword();
                    searchHotkeywords();
                    resultBox.hide();
                    return false
                }
                if (typeof param == "undefined" || param.searchType != "24") {
                    assSearchwords(keyword, resultBox)
                }
            }, delay)
        };
        obj.keyup(function (event) {
            searchFlag = true;
            if (event.which == 13 || event.which == 38 || event.which == 40) {
                return false
            }
            var keyword = $.trim($("#searchKeywords").val());
            keyword = CtoH(keyword);
            autoComplateFun(keyword)
        }).on("paste", function (event) {
            setTimeout(function () {
                searchFlag = true;
                var keyword = $.trim($("#searchKeywords").val());
                keyword = CtoH(keyword);
                autoComplateFun(keyword)
            }, 20)
        }).keydown(function (event) {
            if (event.which == 13) {
                resultBox.hide();
                resultListCurrentIndex = -1;
                $("#searchSubmit").click();
                return false
            }
            if (event.which == 38) {
                selectKeywordByKey(-1)
            }
            if (event.which == 40) {
                selectKeywordByKey(1)
            }
        }).click(function () {
            searchFlag = true;
            var keyword = $.trim($("#searchKeywords").val());
            if (keyword.length == 0) {
                $("#rec_results").show();
                searchHisKeyword();
                searchHotkeywords()
            } else {
                var keyword = $.trim($("#searchKeywords").val());
                keyword = CtoH(keyword);
                autoComplateFun(keyword)
            }
            return false
        });
        $(document).click(function () {
            resultBox.hide();
            resultListCurrentIndex = -1;
            var e = e || window.event || arguments.callee.caller.arguments[0];
            var target = e.target || e.srcElement;
            if ($(target).attr("id") == "rec_results" || $(target).parents("#rec_results").length == 1) {
                return
            }
            $("#rec_results").hide()
        })
    };

    function getSearchList() {
        var _hostName = document.location.hostname;
        var ego_reg = /list(pre|sit|dev|)(.cn|.)suning.com$/;
        if (ego_reg.test(_hostName)) {
            return true
        }
        return false
    }

    var cutString = function (str, len) {
        if (str.length * 2 <= len) {
            return str
        }
        var strlen = 0;
        var s = "";
        for (var i = 0; i < str.length; i++) {
            s = s + str.charAt(i);
            if (str.charCodeAt(i) > 128) {
                strlen = strlen + 2;
                if (strlen >= len) {
                    return s.substring(0, s.length - 1) + "..."
                }
            } else {
                strlen = strlen + 1;
                if (strlen >= len) {
                    return s.substring(0, s.length - 2) + "..."
                }
            }
        }
        return s
    };

    function getCategoryId() {
        var categoryId = "0";
        var urlForSug = window.location.href.substring(window.location.href.lastIndexOf("/"));
        if (sn.catalogId == "22001" || window.location.href.match("(.*?10052_22001.*?)")) {
            if (sn.pgFlag == "22001_4") {
                categoryId = sn.searchCategoryId
            } else {
                if (sn.pgFlag == "22001_1") {
                    categoryId = "1"
                } else {
                    if (sn.pgFlag == "22001_2") {
                        categoryId = sn.searchCategoryId
                    } else {
                        categoryId = "1"
                    }
                }
            }
            if (categoryId == "undefined") {
                categoryId = "1"
            }
            if (getSearchList() || urlForSug.match("(^/trd.do)")) {
                categoryId = sn.categoryId
            }
            return categoryId
        }
        if (getSearchList()) {
            return sn.categoryId
        }
        if (sn.categoryId == "10051") {
            categoryId = "0"
        } else {
            categoryId = sn.categoryId
        }
        if (categoryId == "undefined") {
            categoryId = "0"
        }
        categoryId = getSearchChannel(categoryId);
        return categoryId
    }

    function getSearchCategoryId() {
        var categoryId = "0";
        if (sn.searchCatalogId == "22001" || window.location.href.match("(.*?10052_22001.*?)")) {
            categoryId = "1";
            return categoryId
        }
        var urlForSug = window.location.href.substring(window.location.href.lastIndexOf("/"));
        if (null != urlForSug && "" != urlForSug) {
            var urlForSugTmp = urlForSug.match("/[A-Za-z]+");
            if (null != urlForSugTmp && urlForSugTmp[0].match("(^/strd$)|(^/sprd$)|(^/prd$)|(^/ProductDisplay$)|(^/cd$)|(^/pcd$)|(^/wine$)")) {
                if (sn.searchCatalogId == "14655") {
                    categoryId = "2"
                } else {
                    if (sn.searchCatalogId == "14656") {
                        categoryId = "3"
                    } else {
                        categoryId = "0"
                    }
                }
            } else {
                if (typeof (sn.pgFlag) != "undefined" && null != sn.pgFlag) {
                    if (sn.searchCatalogId == "14655") {
                        categoryId = "2"
                    } else {
                        if (sn.searchCatalogId == "14656") {
                            categoryId = "3"
                        } else {
                            categoryId = "0"
                        }
                    }
                } else {
                    if (window.location.href.match("(.*?redbaby.*?)") != null || window.location.href.match("(.*?14655.*?)") != null || window.location.href.match("(.*?mysec.*?)") != null || window.location.href.match("(.*?mytop.*?)") != null || window.location.href.match("(.*?fashion.*?)") != null || window.location.href.match("(.*?guide.*?)") != null) {
                        categoryId = "2"
                    } else {
                        if (window.location.href.match("(.*?binggo.*?)") != null || window.location.href.match("(.*?14656.*?)") != null || window.location.href.match("(.*?mztop.*?)") != null || window.location.href.match("(.*?mzsec.*?)") != null) {
                            categoryId = "3"
                        } else {
                            if ((null != urlForSugTmp && urlForSugTmp[0].match("(^/tcd$)")) || (urlForSug == "/")) {
                                categoryId = "0"
                            } else {
                                if (null != urlForSugTmp && urlForSugTmp[0].match("(^/brandhome$)|(^/brand$)") || (window.location.href.match("(.*?brand.*?)") != null)) {
                                    categoryId = "0"
                                } else {
                                    categoryId = "0"
                                }
                            }
                        }
                    }
                }
            }
        }
        if (categoryId == "undefined") {
            categoryId = "0"
        }
        categoryId = getSearchChannel(categoryId);
        return categoryId
    }

    function getSearchChannel(categoryId) {
        if (categoryId == "0" && typeof param != "undefined") {
            if (param.searchType == "10") {
                categoryId = "2"
            } else {
                if (param.searchType == "12") {
                    categoryId = "3"
                }
            }
        }
        return categoryId
    }

    var setUrl = function (tmp) {
        sn.searchDomain = sn.searchDomain || "//search.suning.com/emall/";
        var url = sn.searchDomain.replace("emall/", "") + encodeURIComponent(resolveStr(tmp)) + "/";
        if (sn.searchCatalogId == "22001") {
            url = sn.searchDomain + "bookSearch.do?keyword=" + encodeURIComponent(tmp);
            if ($("#bookSearchChannel").length > 0) {
                url += $("#bookSearchChannel").attr("value")
            }
        }
        if (sn.searchCatalogId == "14655") {
            url += "&ch=1"
        }
        if (sn.searchCatalogId == "14656") {
            url += "&ch=2"
        }
        if (typeof param != "undefined") {
            if (param.searchType == "10") {
                url += "&ch=1"
            } else {
                if (param.searchType == "12") {
                    url += "&ch=2"
                } else {
                    if (param.searchType == "24") {
                        url += "&ch=5"
                    } else {
                        if (param.searchType == "30") {
                            url += "&ch=7"
                        }
                    }
                }
            }
        }
        return url
    };
    var onSubmitSearch = function () {
        var channelName = $("#g_static_channel_name").val();
        if (channelName == "snbook") {
            var snbooktmp = $.trim($("#searchKeywords").val());
            if (snbooktmp == "") {
                obj.focus();
                return false
            }
            var url = sn.searchDomain.replace("emall/", "") + "web/search.do?keywords=" + encodeURIComponent(resolveStr(snbooktmp));
            window.location.href = url;
            return false
        }
        var obj, tmp;
        if (searchFlag) {
            obj = $("#searchKeywords");
            var keyObjVal = obj.val().replace(/\;/g, "");
            tmp = $.trim(keyObjVal)
        } else {
            if ($("#searchKeywords").val() === defaultSearchTitle) {
                return false
            }
            obj = $("#searchDefaultKeyword");
            tmp = $.trim(obj.attr("key"))
        }
        if (tmp == "") {
            obj.focus()
        } else {
            tmp = CtoH(tmp);
            var url = sn.searchDomain.replace("emall/", "") + encodeURIComponent(resolveStr(tmp)) + "/";
            if (sn.searchCatalogId == "22001") {
                url = sn.searchDomain + "bookSearch.do?keyword=" + encodeURIComponent(tmp);
                if ($("#bookSearchChannel").length > 0) {
                    url += $("#bookSearchChannel").attr("value")
                }
            }
            if (sn.searchCatalogId == "14655") {
                url += "&ch=1"
            }
            if (sn.searchCatalogId == "14656") {
                url += "&ch=2"
            }
            if (typeof searchCatalogId != "undefined" && searchCatalogId != "" && searchCatalogId != false) {
                url += "&ci=" + searchCatalogId
            }
            if (searchStoreFlag) {
                url = $(".g-ac-store").attr("data-shopUrl")
            }
            if (!searchStoreFlag) {
                if (typeof param != "undefined") {
                    if (param.searchType == "10") {
                        url += "&ch=1"
                    } else {
                        if (param.searchType == "12") {
                            url += "&ch=2"
                        } else {
                            if (param.searchType == "24") {
                                url += "&ch=5"
                            } else {
                                if (param.searchType == "30") {
                                    url += "&ch=7"
                                }
                            }
                        }
                    }
                }
            }
            try {
                var RSC = $(".g-ac-store").find("em").eq(0).text();
                var LXC = assWord;
                var name = "public0_" + LXC;
                var nameAndIndex = RSC + "_" + search_da_djc_index;
                var wTypeMap = {
                    "": "",
                    "1": "-00",
                    "2": "-01",
                    "4": "-03",
                    "5": "-04",
                    "6": "-07",
                    "8": "-06",
                    "9": "-02",
                    "10": "-02"
                };
                var manual = "";
                if (ismanual == "1") {
                    manual = "-01"
                }
                if (nameType == "hotword") {
                    name += "-01-1-" + wordType + "_" + nameAndIndex + manual
                } else {
                    if (nameType == "category") {
                        name += "-01-2_" + nameAndIndex + manual
                    } else {
                        if (nameType == "history") {
                            name += "-02_" + nameAndIndex
                        } else {
                            if (nameType == "store") {
                                name += "-03_" + nameAndIndex
                            } else {
                                if (nameType == "brandshop") {
                                    name = "public0_" + RSC + "-04_" + assWord + "_1"
                                } else {
                                    name = "public0_" + nameAndIndex
                                }
                            }
                        }
                    }
                }
                name += abtest;
                var dom = $('<a href="###" name="' + name + '"></a>')[0];
                if ("undefined" != typeof sa && "undefined" != typeof sa.click) {
                    sa.click.sendDatasIndex(dom)
                }
            } catch (e) {
            }
            if (nameType == "brandshop") {
                nameType = "";
                return false
            }
            if (searchFlag) {
                var keyObjVal = $("#searchKeywords");
                var searchkey = keyObjVal.val().replace(/\;/g, "");
                var temp = $.trim(searchkey);
                var searchDefaultkey = $("#searchDefaultKeyword").attr("key");
                var newDefaultkey = $.trim(searchDefaultkey);
                var apsClickUrl = $("#searchDefaultKeyword").attr("apsclickurl");
                if (temp == newDefaultkey) {
                    if (apsClickUrl != "" && apsClickUrl != "undefined") {
                        window.location.href = apsClickUrl.replace("http:", "");
                        return false
                    }
                }
            } else {
                var apsClickUrl = $("#searchDefaultKeyword").attr("apsclickurl");
                if (apsClickUrl != "" && apsClickUrl != "undefined") {
                    $("body").append('<div sap-modid="gSearch"' + 'style="display:none" ' + 'id="defaultWordHref" ' + 'name="public0_' + $("#searchDefaultKeyword").val() + '_-1" ' + 'href="' + apsClickUrl + '" ' + "sa-data=\"{'eletp':'dfword'}\"></div>");
                    $("#defaultWordHref").trigger("click");
                    window.location.href = apsClickUrl.replace("http:", "");
                    return false
                }
            }
            window.location.href = url
        }
        return false
    };

    function httpGifSendIndex(a) {
        var n = "hislog_" + (new Date()).getTime();
        var i = window[n] = new Image();
        i.onload = (i.onerror = function () {
            window[n] = null
        });
        i.src = a + "?" + n;
        i = null
    }

    function resolveStr(str) {
        str = str.replace(/\-/g, "%2d");
        str = str.replace(/\&/g, "%26");
        str = str.replace(/\./g, "%2E");
        str = str.replace(/\+/g, "%2B");
        str = str.replace(/\//g, "%2F");
        return str
    }

    function htmlEncode(c) {
        if (c) {
            c = c.replace(/&/g, "&amp;");
            c = c.replace(/</g, "&lt;");
            c = c.replace(/>/g, "&gt;");
            c = c.replace(/"/g, "&quot;");
            c = c.replace(/ /g, " ")
        }
        return c
    }

    function resolveHisKey(str) {
        str = str.replace(/\%/g, "%25").replace(/\-/g, "%2d").replace(/\+/g, "%2B").replace(/\;/g, "%3B").replace(/\:/g, "%3A").replace(/\?/g, "%3F");
        return str
    }

    function CtoH(val) {
        var str = val;
        var result = "";
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) == 12288) {
                result += String.fromCharCode(str.charCodeAt(i) - 12256);
                continue
            }
            if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
                result += String.fromCharCode(str.charCodeAt(i) - 65248)
            } else {
                result += String.fromCharCode(str.charCodeAt(i))
            }
        }
        return result
    }

    function keyDown() {
        $(document).keydown(function (e) {
            var tagName = document.activeElement.tagName;
            if ((e.keyCode == 83 && tagName == "BODY" || tagName == "HTML")) {
                $("#searchKeywords").focus();
                if (e && e.preventDefault) {
                    e.preventDefault()
                } else {
                    window.event.returnValue = false
                }
                return false
            }
            if (e.keyCode == 27) {
                $("#ac_results").hide();
                $("#rec_results").hide();
                $("#searchKeywords").blur()
            }
        })
    }

    var MD5 = function (instring) {
        var hexcase = 0;
        var b64pad = "";

        function hex_md5(s) {
            return rstr2hex(rstr_md5(str2rstr_utf8(s)))
        }

        function rstr_md5(s) {
            return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
        }

        function rstr_hmac_md5(key, data) {
            var bkey = rstr2binl(key);
            if (bkey.length > 16) {
                bkey = binl_md5(bkey, key.length * 8)
            }
            var ipad = Array(16), opad = Array(16);
            for (var i = 0; i < 16; i++) {
                ipad[i] = bkey[i] ^ 909522486;
                opad[i] = bkey[i] ^ 1549556828
            }
            var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
            return binl2rstr(binl_md5(opad.concat(hash), 512 + 128))
        }

        function rstr2hex(input) {
            try {
                hexcase
            } catch (e) {
                hexcase = 0
            }
            var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
            var output = "";
            var x;
            for (var i = 0; i < input.length; i++) {
                x = input.charCodeAt(i);
                output += hex_tab.charAt((x >>> 4) & 15) + hex_tab.charAt(x & 15)
            }
            return output
        }

        function rstr2b64(input) {
            try {
                b64pad
            } catch (e) {
                b64pad = ""
            }
            var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var output = "";
            var len = input.length;
            for (var i = 0; i < len; i += 3) {
                var triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
                for (var j = 0; j < 4; j++) {
                    if (i * 8 + j * 6 > input.length * 8) {
                        output += b64pad
                    } else {
                        output += tab.charAt((triplet >>> 6 * (3 - j)) & 63)
                    }
                }
            }
            return output
        }

        function rstr2any(input, encoding) {
            var divisor = encoding.length;
            var i, j, q, x, quotient;
            var dividend = Array(Math.ceil(input.length / 2));
            for (i = 0; i < dividend.length; i++) {
                dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1)
            }
            var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
            var remainders = Array(full_length);
            for (j = 0; j < full_length; j++) {
                quotient = Array();
                x = 0;
                for (i = 0; i < dividend.length; i++) {
                    x = (x << 16) + dividend[i];
                    q = Math.floor(x / divisor);
                    x -= q * divisor;
                    if (quotient.length > 0 || q > 0) {
                        quotient[quotient.length] = q
                    }
                }
                remainders[j] = x;
                dividend = quotient
            }
            var output = "";
            for (i = remainders.length - 1; i >= 0; i--) {
                output += encoding.charAt(remainders[i])
            }
            return output
        }

        function str2rstr_utf8(input) {
            var output = "";
            var i = -1;
            var x, y;
            while (++i < input.length) {
                x = input.charCodeAt(i);
                y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
                if (55296 <= x && x <= 56319 && 56320 <= y && y <= 57343) {
                    x = 65536 + ((x & 1023) << 10) + (y & 1023);
                    i++
                }
                if (x <= 127) {
                    output += String.fromCharCode(x)
                } else {
                    if (x <= 2047) {
                        output += String.fromCharCode(192 | ((x >>> 6) & 31), 128 | (x & 63))
                    } else {
                        if (x <= 65535) {
                            output += String.fromCharCode(224 | ((x >>> 12) & 15), 128 | ((x >>> 6) & 63), 128 | (x & 63))
                        } else {
                            if (x <= 2097151) {
                                output += String.fromCharCode(240 | ((x >>> 18) & 7), 128 | ((x >>> 12) & 63), 128 | ((x >>> 6) & 63), 128 | (x & 63))
                            }
                        }
                    }
                }
            }
            return output
        }

        function rstr2binl(input) {
            var output = Array(input.length >> 2);
            for (var i = 0; i < output.length; i++) {
                output[i] = 0
            }
            for (var i = 0; i < input.length * 8; i += 8) {
                output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << (i % 32)
            }
            return output
        }

        function binl2rstr(input) {
            var output = "";
            for (var i = 0; i < input.length * 32; i += 8) {
                output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 255)
            }
            return output
        }

        function binl_md5(x, len) {
            x[len >> 5] |= 128 << ((len) % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;
                a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd)
            }
            return Array(a, b, c, d)
        }

        function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
        }

        function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
        }

        function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
        }

        function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t)
        }

        function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
        }

        function safe_add(x, y) {
            var lsw = (x & 65535) + (y & 65535);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 65535)
        }

        function bit_rol(num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt))
        }

        return hex_md5(instring)
    };
    var searchEvent = function () {
        if (typeof (sn.defaultSearchTitle) != "undefined") {
            defaultSearchTitle = sn.defaultSearchTitle
        }
        picSearch().init();
        getSearchKeyword();
        searchAutoComplete();
        searchInputEvent();
        keyDown()
    };
    var clearBox = function () {
        $("#ac_results").hide();
        $("#rec_results").hide()
    };
    var searchIptBlur = function () {
        $("#searchKeywords").blur()
    };
    var outerAction = function () {
        if (typeof SnSidebar != "undefined") {
            SnSidebar.hide()
        }
    };
    var picSearch = function () {
        var ops = {"maxWidth": 400, "maxHeight": 400}, maxSize = 20 * 1024 * 1024;

        function bindEvent() {
            $(document).on("change", "#picFile", function (e) {
                clearInfo();
                var file = $("#picFile").val();
                if (file == null || file == "") {
                    showErrorInfo("请选择文件");
                    return
                }
                var reg = /(\w|[\u4e00-\u9fa5])+\.(jpg|png|jpeg|bmp)$/i;
                if (!reg.test(file)) {
                    showErrorInfo("请确保文件为图像类型");
                    return
                }
                var files = this.files;
                var file = files[0];
                var size = file.size;
                if (size > maxSize) {
                    showErrorInfo("只能上传少于20MB的文件,请重新选择");
                    return
                }
                html5Upload(file)
            })
        }

        function html5Upload(file) {
            var img = new Image();
            var reader = new FileReader();
            reader.readAsDataURL(file);
            var imageData = "";
            reader.onload = function (e) {
                img.src = this.result;
                imageData = this.result
            };
            img.onload = function () {
                var width = img.width, height = img.height, maxWidth = ops.maxWidth, maxHeight = ops.maxHeight;
                var ratio = width / height;
                if (ratio < 1) {
                    ratio = height / width
                }
                if (ratio >= 5) {
                    showErrorInfo("图片长宽比例大于5倍，请重新选择");
                    return
                }
                var size = width;
                var min = "width";
                if (size > height) {
                    size = height;
                    min = "height"
                }
                if (size < 200) {
                    showErrorInfo("图片尺寸不能小于200x200");
                    return
                }
                if (min == "width") {
                    height = Math.floor(height * ops.maxWidth / width);
                    width = ops.maxWidth
                } else {
                    width = Math.floor(width * ops.maxHeight / height);
                    height = ops.maxHeight
                }
                var canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                imageData = canvas.toDataURL("image/jpeg");
                showLoading();
                var options = {
                    url: getURL() + "uploadFile/",
                    clearForm: true,
                    restForm: true,
                    timeout: 6000,
                    data: {image: imageData},
                    type: "post",
                    success: function (data) {
                        if (data.flag == 1) {
                            window.location.href = getURL() + "search?app=picSearch&ssid=" + data.ssid
                        } else {
                            clearInfo();
                            showErrorInfo(data.desc)
                        }
                    },
                    error: function () {
                        clearInfo();
                        showErrorInfo("请求失败，请重试！")
                    }
                };
                $(".g-search form").ajaxSubmit(options)
            }
        }

        function getURL() {
            var ego_pre = /^(\w*)(pre)(\w*)(.cnsuning.com)$/;
            var ego_sit = /^(\w*)(sit)(\w*)(.cnsuning.com)$/;
            var ego_dev = /^(\w*)(dev)(\w*)(.cnsuning.com)$/;
            var _hostName = document.location.hostname;
            var proto = document.location.protocol;
            httpHead = "http";
            if (proto && proto.indexOf("https") != -1) {
                httpHead = "https"
            }
            var picservice = httpHead + "://pic.suning.com/";
            if (ego_pre.test(_hostName)) {
                picservice = httpHead + "://picpre.cnsuning.com/"
            } else {
                if (ego_sit.test(_hostName)) {
                    picservice = httpHead + "://picpre.cnsuning.com/"
                } else {
                    if (ego_dev.test(_hostName)) {
                        picservice = httpHead + "://picpre.cnsuning.com/"
                    }
                }
            }
            return picservice
        }

        function showErrorInfo(text) {
            $("#picSearchTips").remove();
            $(".g-search").append('<div class="g-pic-tips" id="picSearchTips"><div class="info"><span><i class="s-icon"></i>' + text + '<label for="picFile" name="public0_tpss_-tpss">重新选择</label></span></div></div>')
        }

        function showLoading() {
            $("#picSearchTips").remove();
            $(".g-search").append('<div class="g-pic-loading" id="picSearchLoading"><i class="icon-pic-loading"></i>正在加载请稍后…</div>')
        }

        function clearInfo() {
            $("#picSearchTips").remove();
            $("#picSearchLoading").remove()
        }

        function canShow() {
            return $("#searchKeywords") && typeof FileReader != "undefined" && sn.picSearch
        }

        function drawHtml() {
            var _picIcon = '<div class="pic-search-area"><label class="search-icon-pic" name="public0_tpss_-tpss" ></label>',
                _picInput = '<input type="file" name="" id="picFile" class="search-pic-file" accept="image/*"></div>';
            $("#searchKeywords").parent().append(_picIcon + _picInput)
        }

        function init() {
            if (canShow()) {
                drawHtml();
                bindEvent()
            }
        }

        return {init: init}
    };
    return {
        onSubmitSearch: onSubmitSearch,
        searchEvent: searchEvent,
        cancelbtnEvent: cancelbtnEvent,
        clearBox: clearBox,
        searchIptBlur: searchIptBlur,
        MD5: MD5
    }
})(jQuery);
!function (a) {
    function b() {
        switch (k) {
            case"PRD":
                i.domains = {
                    context: "/emall",
                    cityId: "9173",
                    domain: "www.suning.com",
                    storeId: "10052",
                    catalogId: "10051",
                    memberDomain: "member.suning.com",
                    online: "online.suning.com",
                    cookieDomain: ".suning.com",
                    categoryId: "20089",
                    searchDomain: "//search.suning.com/emall/",
                    imageDomianDir: "//image.suning.cn/",
                    vipUrl: "//vip.suning.com/",
                    cmsHostName: c + "://toolbar.suning.com/",
                    memberHost: "//zone.suning.com/",
                    recomDomain: c + "://tuijian.suning.com/",
                    productImageDomain: "//image.suning.cn/",
                    productDomain: "//product.suning.com/",
                    favoriteDomain: c + "://favorite.suning.com/",
                    favoriteCshopDomain: "//shop?.suning.com",
                    scriptDomianDir: "//res.suning.cn/",
                    msiDomain: "//my.suning.com/",
                    custHeadUrl: "//image.suning.cn/uimg/cmf/cust_headpic/",
                    eppPayDomain: "https://pay.suning.com/",
                    passportDomain: "https://passport.suning.com/",
                    httpsDomain: "https://ssl.suning.com/",
                    cartDomain: c + "://cart.suning.com",
                    zoneDomain: "//zone.suning.com/",
                    toolbarDomain: c + "://toolbar.suning.com/",
                    traceDomain: "//trace.suning.com/trace-web/",
                    footprintDomain: "//res.suning.cn/project/",
                    cartTypeDomain: c + "://shopping.suning.com/",
                    sncfcDomain: "https://sncfc.suning.com/",
                    rxfDomain: "//rxf.suning.com/",
                    cmsDomain: c + "://lib.suning.com/",
                    smartDomain: "//iss.suning.com",
                    serviceDomain: "//talk8.suning.com",
                    serviceMsgDomain: "//talk8msg.suning.cn",
                    messageDomain: "//msg.suning.com/",
                    newMessageDomain: "//snwm.suning.com/",
                    newMessageHome: "//snwm.suning.com/",
                    newPassDomain: "https://loginst.suning.com/"
                };
                break;
            case"PRE":
                i.domains = {
                    context: "/emall",
                    cityId: "9173",
                    domain: "b2cpre.cnsuning.com",
                    storeId: "10052",
                    catalogId: "10051",
                    memberDomain: "memberpre.cnsuning.com",
                    online: "onlinepre.cnsuning.com",
                    cookieDomain: ".cnsuning.com",
                    categoryId: "20089",
                    searchDomain: "//searchpre.cnsuning.com/emall/",
                    imageDomianDir: "//uimgpre.cnsuning.com/",
                    vipUrl: "//vippre.cnsuning.com/",
                    cmsHostName: c + "://toolbarpre.cnsuning.com/",
                    memberHost: "//zonepre.cnsuning.com/",
                    recomDomain: c + "://tuijianpre.cnsuning.com/",
                    productImageDomain: "//preimg.suning.cn/",
                    productDomain: "//productpre.cnsuning.com/",
                    favoriteDomain: c + "://favoritepre.cnsuning.com/",
                    favoriteCshopDomain: "//preshop?.cnsuning.com",
                    scriptDomianDir: "//preres.suning.cn/",
                    msiDomain: "//mypre.cnsuning.com/",
                    custHeadUrl: "//uimgpre.cnsuning.com/uimg/cmf/cust_headpic/",
                    eppPayDomain: "https://prepay.cnsuning.com/",
                    passportDomain: "https://passportpre.cnsuning.com/",
                    httpsDomain: "https://sslpre.cnsuning.com/",
                    cartDomain: c + "://cartpre.cnsuning.com",
                    zoneDomain: "//zonepre.cnsuning.com/",
                    toolbarDomain: c + "://toolbarpre.cnsuning.com/",
                    traceDomain: "//tracepre.cnsuning.com/trace-web/",
                    footprintDomain: "//presslres.suning.com/project/",
                    cartTypeDomain: c + "://shoppingpre.cnsuning.com/",
                    sncfcDomain: "https://sncfcpre.cnsuning.com/",
                    rxfDomain: "//rxfpre.cnsuning.com/",
                    cmsDomain: c + "://libpre.cnsuning.com/",
                    smartDomain: "//isspre.cnsuning.com",
                    serviceDomain: "//talk8pre.cnsuning.com",
                    serviceMsgDomain: "//talk8msgpre.cnsuning.com",
                    messageDomain: "//msgpre.cnsuning.com/",
                    newMessageDomain: "//snwmpre.cnsuning.com/snwm-web/",
                    newMessageHome: "//snwmpre.cnsuning.com/snwm-web/home.htm",
                    newPassDomain: "https://mypre.cnsuning.com/"
                };
                break;
            case"PREXG":
                i.domains = {
                    context: "/emall",
                    cityId: "9173",
                    domain: "b2cprexg.cnsuning.com",
                    storeId: "10052",
                    catalogId: "10051",
                    memberDomain: "memberprexg.cnsuning.com",
                    online: "onlineprexg.cnsuning.com",
                    cookieDomain: ".cnsuning.com",
                    categoryId: "20089",
                    searchDomain: "//searchprexg.cnsuning.com/emall/",
                    imageDomianDir: "//uimgprexg.cnsuning.com/",
                    vipUrl: "//vipprexg.cnsuning.com/",
                    cmsHostName: c + "://toolbarprexg.cnsuning.com/",
                    memberHost: "//zoneprexg.cnsuning.com/",
                    recomDomain: c + "://tuijianprexg.cnsuning.com/",
                    productImageDomain: "//resprexg.suning.cn/",
                    productDomain: "//productprexg.cnsuning.com/",
                    favoriteDomain: c + "://favoriteprexg.cnsuning.com/",
                    favoriteCshopDomain: "//preshop?.cnsuning.com",
                    scriptDomianDir: "//resprexg.suning.cn/",
                    msiDomain: "//myprexg.cnsuning.com/",
                    custHeadUrl: "//uimgprexg.cnsuning.com/uimg/cmf/cust_headpic/",
                    eppPayDomain: "https://prepayxg.cnsuning.com/",
                    passportDomain: "https://passportprexg.cnsuning.com/",
                    httpsDomain: "https://sslprexg.cnsuning.com/",
                    cartDomain: c + "://cartprexg.cnsuning.com",
                    zoneDomain: "//zoneprexg.cnsuning.com/",
                    toolbarDomain: c + "://toolbarprexg.cnsuning.com/",
                    traceDomain: "//traceprexg.cnsuning.com/trace-web/",
                    footprintDomain: "//presslresxg.suning.com/project/",
                    cartTypeDomain: c + "://shoppingprexg.cnsuning.com/",
                    sncfcDomain: "https://sncfcprexg.cnsuning.com/",
                    rxfDomain: "//rxfprexg.cnsuning.com/",
                    cmsDomain: c + "://libprexg.cnsuning.com/",
                    smartDomain: "//issprexg.cnsuning.com",
                    serviceDomain: "//talk8prexg.cnsuning.com",
                    serviceMsgDomain: "//talk8msgprexg.cnsuning.com",
                    messageDomain: "//msgprexg.cnsuning.com/",
                    newMessageDomain: "//snwmxgpre.cnsuning.com/snwm-web/",
                    newMessageHome: "//snwmxgpre.cnsuning.com/snwm-web/home.htm",
                    newPassDomain: "https://myprexg.cnsuning.com/"
                };
                break;
            case"SIT":
                i.domains = {
                    context: "/emall",
                    cityId: "9173",
                    domain: "b2csit.cnsuning.com",
                    storeId: "10052",
                    catalogId: "10051",
                    memberDomain: "membersit.cnsuning.com",
                    online: "onlinesit.cnsuning.com",
                    cookieDomain: ".cnsuning.com",
                    categoryId: "20089",
                    searchDomain: "//searchsit.cnsuning.com/emall/",
                    imageDomianDir: "//uimgpre.cnsuning.com/",
                    vipUrl: "//vipsit.cnsuning.com/",
                    cmsHostName: "//cmsadminsit.cnsuning.com/cms-web/",
                    memberHost: "//zonesit.service.cnsuning.com/",
                    recomDomain: "//10.19.90.232:9080/",
                    productImageDomain: "//sit1image.suning.cn/",
                    productDomain: "//productsit.cnsuning.com/",
                    favoriteDomain: c + "://favoritesit.cnsuning.com/",
                    favoriteCshopDomain: "//sit1shop?.sit.cnsuning.com",
                    scriptDomianDir: "//sitres.suning.cn/",
                    msiDomain: "//mysit.cnsuning.com/msi-web/",
                    custHeadUrl: "//uimgpre.cnsuning.com/uimg/cmf/cust_headpic/",
                    eppPayDomain: "https://sitpay.cnsuning.com/",
                    passportDomain: "https://passportsit.cnsuning.com/",
                    httpsDomain: "https://sslsit.cnsuning.com/",
                    cartDomain: c + "://cartsit.cnsuning.com",
                    zoneDomain: "//zonesit.cnsuning.com/",
                    toolbarDomain: c + "://toolbarsit.cnsuning.com/",
                    traceDomain: "//tracesit.cnsuning.com/trace-web/",
                    footprintDomain: "//sitsslres.suning.cn/project/",
                    cartTypeDomain: c + "://shoppingsit.cnsuning.com/",
                    sncfcDomain: "https://sncfcsit.cnsuning.com/",
                    rxfDomain: "//rxfsit.cnsuning.com/",
                    cmsDomain: c + "://libpre.cnsuning.com/",
                    smartDomain: "//isspre.cnsuning.com",
                    serviceDomain: "//talk8sit.cnsuning.com",
                    serviceMsgDomain: "//talk8msgsit.cnsuning.com",
                    messageDomain: "//msgsit.cnsuning.com/",
                    newMessageDomain: "//snwmsit.cnsuning.com/snwm-web/",
                    newMessageHome: "//snwmsit.cnsuning.com/snwm-web/home.htm",
                    newPassDomain: "https://mysit.cnsuning.com/"
                }
        }
    }

    if (window.XMLHttpRequest) {
        var c = (document.location.protocol, "https:" == document.location.protocol ? "https" : "http"),
            e = window.sn || {hasSidebar: !1, isHome: !1, sidebarReady: !1}, f = e.hasSidebar || !1,
            g = e.sidebarReady || !1;
        e.isHome && (f = !0);
        var h = {
            cart: !0,
            activity: !0,
            dacu: !0,
            member: !0,
            message: !0,
            recharge: !1,
            finance: !0,
            history: !0,
            finishFn: function () {
            },
            codeHref: "",
            codeImg: "",
            feedbackHref: "",
            serviceHref: ""
        };
        if (void 0 !== window.SnSidebar_config && (h = a.extend(h, window.SnSidebar_config)), f && !g) {
            var i, j, k = SFE.base.getEnv(), l = a(window), m = !1, n = !1, o = !1, p = !1, q = !1, r = !1, s = !1,
                t = !1, u = !1, v = !1, w = !1, x = !1, y = {
                    version: "2019042801", _init: function () {
                        if (e.sidebarReady = !0, i = this, f) {
                            var c = document.location.hostname, d = c.indexOf(".");
                            c.indexOf("suning") > -1 && (document.domain = c.substring(d + 1))
                        }
                        b(), window.passport_config = window.passport_config || {}, window.passport_config.base = i.domains.newPassDomain, window.passport_config.loginTheme = "b2c_pop", window.passport_config.successCallbackUrl = i.domains.newPassDomain + "popupLoginSuccess?", i._createFrameHtml(), a(document).on("click", function (a) {
                            j ? j = !1 : (i.hide(), i._setTabSite(), i.memberhide())
                        }), a(document).on("keyup", function (a) {
                            var b = a.target.nodeName.toUpperCase();
                            if ("INPUT" != b && "TEXTAREA" != b) {
                                var c = (l.width(), l.height());
                                68 == a.which && c >= 527 ? i.quickShow("member") : 71 == a.which && i.quickShow("cart")
                            }
                        }), i._checkPassport(function () {
                            i.dSidebar.show(), i._getDacuImg(), h.finishFn.call(this), window.sidebarLoginSwitch || probeAuthStatus(function () {
                                i._getServiveMessage(), i._getMessage()
                            }, function () {
                            })
                        })
                    }, _getDacuImg: function () {
                        a.ajax({
                            type: "get",
                            dataType: "jsonp",
                            cache: !0,
                            url: i.domains.toolbarDomain + "/api/jsonp/cb/dacuImg-dacuImg.jsonp",
                            jsonpCallback: "dacuImg",
                            success: function (b) {
                                var c = a(".sn-sidebar-tab-dacu-box");
                                if (b && b.enter_img && b.enter_img.tag && b.enter_img.tag[0]) {
                                    var d = "", e = b.enter_img.tag[0];
                                    d = i.domains.imageDomianDir + e.picUrl.slice(1), d ? c.find(".sn-sidebar-tab-dacu-img").show().attr("src", d) : c.remove()
                                } else c.remove();
                                i._setTabSite()
                            },
                            error: function () {
                            }
                        })
                    }, _getServiveMessage: function (b) {
                        a.ajax({
                            type: "get",
                            data: {appCode: "SNYG"},
                            dataType: "jsonp",
                            url: i.domains.serviceDomain + "/exitUnReadMsg.do",
                            jsonpCallback: "getMsg",
                            success: function (c) {
                                c && 0 != c && a(".tab-icon-service").html('<em class="dot"></em>'), b && b()
                            },
                            error: function () {
                            }
                        })
                    }, _getMessage: function () {
                        a.ajax({
                            url: i.domains.newMessageDomain + "snh/totel.do",
                            method: "get",
                            dataType: "jsonp",
                            cache: !1,
                            jsonpCallback: "getUnreadMsg",
                            success: function (b) {
                                b && b.data && 0 != b.data && a(".tab-icon-msg").html('<em class="dot"></em>')
                            }
                        })
                    }, removeServiceMsg: function () {
                        a(".tab-icon-service .dot").remove()
                    }, judgeDacuImg: function (a) {
                        var b = i.dSidebar.find(".sn-sidebar-tab-dacu-img");
                        a && b.length > 0 ? b.stop(!0, !0).animate({right: "315px"}, "normal") : b.length > 0 && b.stop(!0, !0).animate({right: "0"}, "normal")
                    }, _checkPassport: function (b) {
                        for (var c = a("script"), d = 0; d < c.size(); d++) if (/passport/.test(c.eq(d).attr("src"))) {
                            "function" == typeof probeAuthStatus && (v = !0);
                            break
                        }
                        if (v) b(); else {
                            var e = document.getElementsByTagName("head")[0], f = document.createElement("script");
                            f.type = "text/javascript", f.onload = f.onreadystatechange = function () {
                                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (f.onload = f.onreadystatechange = null, b())
                            }, f.src = i.domains.scriptDomianDir + "project/passport/js/passport.min.js", e.appendChild(f)
                        }
                    }, _checkGetPrice: function (b) {
                        for (var c = a("script"), d = 0; d < c.size(); d++) if (/getprice/.test(c.eq(d).attr("src"))) {
                            "object" == typeof GetPrice && (w = !0);
                            break
                        }
                        if (w) b(); else {
                            var e = document.getElementsByTagName("head")[0], f = document.createElement("script");
                            f.type = "text/javascript", f.onload = f.onreadystatechange = function () {
                                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (f.onload = f.onreadystatechange = null, b())
                            }, f.src = i.domains.scriptDomianDir + "project/cmsWeb/suning/publicres/js/getprice.js?v=" + i.version, e.appendChild(f)
                        }
                    }, _tabWarpBoxHoverIsReady: 0, _setTabSite: function () {
                        var b = i.dSidebar.find(".sn-sidebar-tab-js"), c = a(window).width(),
                            d = i.dSidebar.find(".sn-sidebar-bg");
                        c < 1240 ? (d.hide(), i.judeHide(1), 0 == i._tabWarpBoxHoverIsReady && (i._tabWarpBoxHoverIsReady = 1, i.dSidebar.hover(function () {
                            i.isHover = 1;
                            var c = 0;
                            b.each(function () {
                                if (a(this).hasClass("sn-sidebar-tab-click")) return void (c = 1)
                            }), c ? i.judgeDacuImg(1) : i.judgeDacuImg(0), d.show(), i.judeHide()
                        }, function () {
                            i.isHover = 0;
                            var c = 0;
                            b.each(function () {
                                if (a(this).hasClass("sn-sidebar-tab-click")) return void (c = 1)
                            }), 0 == c && (i.dSidebar.find(".sn-sidebar-tab-js").not(".sn-sidebar-tab-cart, .sn-sidebar-to-top, .sn-sidebar-tab-member").addClass("hide"), i.dSidebar.find(".sn-sidebar-tab-member").css("visibility", "hidden"), d.hide())
                        }))) : ((i._tabWarpBoxHoverIsReady = 1) && (i._tabWarpBoxHoverIsReady = 0, i.dSidebar.unbind("hover")), d.show(), i.judeHide())
                    }, isHover: 0, judeHide: function (b) {
                        var c = a(window).height(), d = i.dSidebar.find(".sn-sidebar-tab-member"),
                            e = i.dSidebar.find(".sn-sidebar-middle-tabs"), f = i.dSidebar.find(".sn-sidebar-service"),
                            g = i.dSidebar.find(".sn-sidebar-feedback"), h = i.dSidebar.find(".sn-sidebar-code"),
                            j = i.dSidebar.find(".sn-sidebar-tab-dacu-box"),
                            k = i.dSidebar.find(".sn-sidebar-middle-tabs-bottom"),
                            l = i.dSidebar.find(".sn-sidebar-tab-message"), m = i.dSidebar.find(".sn-sidebar-tab-dacu-img");
                        b ? (i.dSidebar.find(".sn-sidebar-tab-js").not(".sn-sidebar-tab-cart, .sn-sidebar-to-top, .sn-sidebar-tab-member").addClass("hide"), d.css("visibility", "hidden")) : (c > 626 ? f.removeClass("hide") : f.addClass("hide"), c > 594 ? g.removeClass("hide") : g.addClass("hide"), c > 556 ? h.removeClass("hide") : h.addClass("hide"), c > 336 ? l.removeClass("hide") : l.addClass("hide"), c > 526 ? (k.removeClass("hide"), d.css("visibility", "visible"), i.dSidebar.find(".sn-sidebar-tab-recharge").removeClass("hide"), i.dSidebar.find(".sn-sidebar-tab-finance").removeClass("hide"), i.dSidebar.find(".sn-sidebar-tab-history").removeClass("hide"), m.length > 0 && void 0 !== m.attr("src") && (j.removeClass("hide"), m.removeClass("hide")), i.dSidebar.find(".sn-sidebar-tab-sign").removeClass("hide")) : (k.addClass("hide"), j.removeClass("hide"), d.css("visibility", "hidden"))), c > 526 ? e.css("top", "178px") : e.css("top", "30%"), c > 678 ? e.css("height", "357px") : e.css("height", "307px")
                    }, _createFrameHtml: function () {
                        var b = a("body"),
                            c = h.cart ? '<div class="sn-sidebar-tab sn-sidebar-tab-cart sn-sidebar-tab-js" data-type="cart"><a href="javascript:;" name="public0_none_cblnew_gouwuche"><div class="tab-cart-tip-warp-box"><div class="tab-cart-tip-warp"><i class="tab-icon  tab-icon-cart"></i><i class="tab-icon-tip tab-icon-cart-tip"></i><span class="tab-cart-tip">购物车</span><span class="tab-cart-num J_cart_total_num">0</span></div></div></a></div>' : "",
                            d = h.message ? '<div class="sn-sidebar-tab sn-sidebar-tab-message sn-sidebar-tab-js" data-type="message"><a href="' + i.domains.newMessageHome + '" target="_blank" name="public0_none_cblnew_message"><i class="tab-icon tab-icon-msg"></i><i class="tab-icon-tip"></i><span class="tab-tip">消息</span></a></div>' : "",
                            e = h.member ? '<div class="sn-sidebar-tab sn-sidebar-tab-member sn-sidebar-tab-js" data-type="member"><a href="javascript:;" name="public0_none_cblnew_huiyuan" ><i class="tab-icon tab-icon-member"></i><i class="tab-icon-tip"></i></a></div>' : "",
                            f = h.recharge ? '<div class="sn-sidebar-tab sn-sidebar-tab-recharge sn-sidebar-tab-js" data-type="recharge"><a href="javascript:;" name="public0_none_cblnew_chongzhi"><i class="tab-icon tab-icon-recharge"></i><i class="tab-icon-tip"></i><span class="tab-tip">充值</span></a></div>' : "",
                            g = h.finance ? '<div class="sn-sidebar-tab sn-sidebar-tab-finance sn-sidebar-tab-js" data-type="finance"><a href="javascript:;" name="public0_none_cblnew_jinrong"><i class="tab-icon tab-icon-finance"></i><i class="tab-icon-tip"></i><span class="tab-tip">理财</span></a></div>' : "",
                            k = h.history ? '<div class="sn-sidebar-tab sn-sidebar-tab-history sn-sidebar-tab-js" data-type="history"><a href="javascript:;" name="public0_none_cblnew_zuji"><i class="tab-icon tab-icon-history"></i><i class="tab-icon-tip"></i><span class="tab-tip">足迹</span></a></div>' : "",
                            l = h.dacu ? '<div class="sn-sidebar-tab-dacu-box hide"><a href="javascript:;"><img src="" class="sn-sidebar-tab-dacu-img sn-sidebar-tab-js" data-type="dacu" /></a></div>' : "",
                            m = h.codeHref ? h.codeHref : "//cuxiao.suning.com/newUser.html",
                            n = h.codeImg ? h.codeImg : i.domains.productImageDomain + "public/v3/images/new-down-img.png?v=st0001",
                            o = '<a href="' + m + '" name="public0_none_cblnew_erweima" target="_blank"><img class="tab-tip-code-warp-img" src="' + n + '" /></a>',
                            p = h.feedbackHref ? h.feedbackHref : "//ueip.suning.com/pc/addproblem.htm",
                            q = '<a href="' + p + '" target="_blank" name="public0_none_cblnew_wenjuan"><i class="tab-icon tab-icon-feedback"></i><span class="tab-tip tab-tip-wider">意见反馈</span></a>',
                            r = (h.serviceHref && h.serviceHref, '<a href="javascript:;" name="public0_none_cblnew_kefu"><i class="tab-icon tab-icon-service"></i><i class="tab-icon-tip"></i><span class="tab-tip tab-tip-wider">在线咨询</span></a>'),
                            s = ['<div class="sn-sidebar" sap-modid="hWIP3">', l, '<div class="sn-sidebar-bg"></div>', '<div class="sn-sidebar-tabs sn-sidebar-middle-tabs">', '<div class="sn-sidebar-tabs sn-sidebar-middle-tabs-top">', e, c, d, "</div>", '<div class="sn-sidebar-tabs sn-sidebar-middle-tabs-bottom">', f, g, k, '<div class="sn-sidebar-tab sn-sidebar-tab-sign sn-sidebar-tab-js" data-type="sign"><a name="public0_none_cblnew_qiandao" href="//vip.suning.com/sign/welcome.do" target="_blank"><i class="tab-icon tab-icon-sign"></i><i class="tab-icon-tip"></i><span class="tab-tip">签到</span></a></div>', "</div>", "</div>", '<div class="sn-sidebar-tabs sn-sidebar-bottom-tabs">', '<div class="sn-sidebar-tab sn-sidebar-wider-tab sn-sidebar-service sn-sidebar-tab-js" id="sn-sidebar-change-service" data-type="servicebox">', r, "</div>", '<div class="sn-sidebar-tab sn-sidebar-wider-tab sn-sidebar-feedback sn-sidebar-tab-js" id="sn-sidebar-change-feedback">', q, "</div>", '<div class="sn-sidebar-tab sn-sidebar-wider-tab sn-sidebar-code sn-sidebar-tab-js sn-sidebar-code-show">', '<a href="javascript:;">', '<i class="tab-icon-tip tab-icon-code-tip"></i>', '<i class="tab-icon tab-icon-code"></i>', "</a>", "</div>", '<div class="sn-sidebar-tab sn-sidebar-wider-tab sn-sidebar-to-top sn-sidebar-tab-js">', '<a href="javascript:void(0);" name="public0_none_cblnew_back">', '<i class="tab-icon tab-icon-to-top"></i>', '<span class="tab-tip tab-tip-wider">返回顶部</span>', "</a>", "</div>", "</div>", '<div class="tab-tip-code-warp" id="sn-sidebar-change-code" style="display: block; left: -160px;">', o, "</div>", '<div class="sn-sidebar-member-wrap member-white"></div>', '<div class="sn-sidebar-contents">', '<div class="sn-sidebar-content sn-sidebar-cart"><div class="ng-sidebar-cart-wrapper"></div></div>', '<div class="sn-sidebar-content sn-sidebar-recharge"></div>', '<div class="sn-sidebar-content sn-sidebar-dacu"></div>', '<div class="sn-sidebar-content sn-sidebar-member"></div>', '<div class="sn-sidebar-content sn-sidebar-history"></div>', '<div class="sn-sidebar-content sn-sidebar-finance"></div>', '<div class="sn-sidebar-content sn-sidebar-servicebox"></div>', '<div class="sn-sidebar-all-loading"><p class="loading-content">加载中...</p></div>', "</div>", "</div>"].join("");
                        b.append(s);
                        var t = i.dSidebar = a(".sn-sidebar"), u = t.find(".sn-sidebar-tab-js"),
                            v = i.dSidebar.find(".tab-tip-code-warp"), w = v.find(".tab-tip-code-warp-img");
                        u.hover(function () {
                            var b = w.attr("src"), c = w.attr("src3");
                            a(this).hasClass("sn-sidebar-tab-click") || (a(this).hasClass("sn-sidebar-wider-tab") ? a(this).find(".tab-tip").stop().animate({left: "-73px"}, "normal") : a(this).find(".tab-tip").stop().animate({left: "-47px"}, "normal"), a(this).addClass("sn-sidebar-tab-hover"), a(this).hasClass("sn-sidebar-code") && (void 0 !== b && b && "undefined" != b || void 0 === c || !c || "undefined" == c || (w.attr("src", c), w.removeAttr("src3")), v.stop().show().animate({left: "-160px"}, "normal")))
                        }, function () {
                            a(this).find(".tab-tip").stop().animate({left: "0"}, "normal"), a(this).removeClass("sn-sidebar-tab-hover"), a(this).hasClass("sn-sidebar-code") && (a(this).removeClass("sn-sidebar-code-show"), v.stop().animate({left: "0px"}, "normal", function () {
                                a(this).hide()
                            }))
                        }), v.hover(function () {
                            t.find(".sn-sidebar-code").addClass("sn-sidebar-tab-hover"), a(this).stop().show().animate({left: "-160px"}, "normal")
                        }, function () {
                            u.removeClass("sn-sidebar-code-show"), t.find(".sn-sidebar-code").removeClass("sn-sidebar-tab-hover"), a(this).stop().animate({left: "0px"}, "normal", function () {
                                a(this).hide()
                            })
                        }), setTimeout(function () {
                            var b = a(".sn-sidebar-code");
                            b.hasClass("sn-sidebar-code-show") && (b.removeClass("sn-sidebar-code-show"), v.stop().animate({left: "0px"}, "normal", function () {
                                a(this).hide()
                            }))
                        }, 5e3), t.delegate(".sn-sidebar-tab-js", "click", function () {
                            i.quickShow("", a(this))
                        }), i._setTabSite(), a(window).resize(function () {
                            i._setTabSite(), i.hide(), i.memberhide()
                        }), t.delegate(".sn-sidebar-js-close", "click", function () {
                            i.hide()
                        }), t.click(function () {
                            j = !0
                        }), i._getCartNum()
                    }, _getCartNum: function () {
                        var a = d("totalProdQty");
                        a && void 0 != a && "undefined" !== a || (a = 0), parseInt(a) > 99 && (a = "99+"), i.dSidebar.find(".tab-cart-num").html(a), "undefined" != typeof ticket && ticket.searchCartGoods && ticket.searchCartGoods.doSearch && (ticket.bottom.show = !1, ticket.bottom2.show = !1, ticket.searchCartGoods.doSearch())
                    }, quickShow: function (b, c) {
                        var c = c || "", b = b || "";
                        if (b || c) {
                            var d = i.dSidebar = a(".sn-sidebar"), e = "";
                            b ? (e = b, c = d.find(".sn-sidebar-tab-" + b)) : e = c.attr("data-type"), e ? i._showModule(c, e) : c.hasClass("sn-sidebar-to-top") && a("html, body").stop().animate({scrollTop: 0}, "slow")
                        }
                    }, dSidebar: a(".sn-sidebar"), ieVistion: function (a) {
                        var b = document.createElement("b");
                        return b.innerHTML = "\x3c!--[if IE " + a + "]><i></i><![endif]--\x3e", 1 === b.getElementsByTagName("i").length
                    }, memberhide: function () {
                        var b = this, c = b.dSidebar.find(".sn-sidebar-member-wrap");
                        if (c.hasClass("sn-sidebar-member-show")) {
                            var d = b.dSidebar.find(".sn-sidebar-tab-member");
                            (!(a(window).height() < 526 || a(window).width() < 1240) || (a(window).height() < 526 || a(window).width() < 1240) && 1 == this.isHover) && b.judgeDacuImg(), c.stop(!0, !0).animate({right: "-280px"}, function () {
                                d.removeClass("sn-sidebar-tab-click"), a(this).removeClass("sn-sidebar-member-show"), (a(window).height() < 526 || a(window).width() < 1240) && 0 == b.isHover && (b.judeHide(1), a(window).width() < 1240 && b.dSidebar.find(".sn-sidebar-bg").hide())
                            })
                        }
                    }, hide: function (b) {
                        var c = this, b = b || 0, d = c.dSidebar.find(".sn-sidebar-contents");
                        d.hasClass("sn-sidebar-contents-show") && ((!(a(window).height() < 526 || a(window).width() < 1240) || (a(window).height() < 526 || a(window).width() < 1240) && 1 == this.isHover) && c.judgeDacuImg(), d.removeClass("sn-sidebar-contents-show").stop(!0, !0).animate({right: "-280px"}, function () {
                            a(this).removeClass("sn-sidebar-contents-show"), d.find(".sn-sidebar-content").stop(!0, !0).css({"z-index": 0}).hide(), 1 != b && c.dSidebar.find(".sn-sidebar-tab-js").removeClass("sn-sidebar-tab-click"), (a(window).height() < 526 || a(window).width() < 1240) && 0 == c.isHover && (c.judeHide(1), a(window).width() < 1240 && c.dSidebar.find(".sn-sidebar-bg").hide())
                        }))
                    }, _showModule: function (b, c) {
                        function d(c) {
                            var d = l.width(), e = l.height();
                            b.hasClass("sn-sidebar-tab-click") ? b.hasClass("sn-sidebar-tab-member") ? i.memberhide() : i.hide() : (h.removeClass("sn-sidebar-tab-click"), b.removeClass("sn-sidebar-tab-hover").addClass("sn-sidebar-tab-click"), b.find(".tab-tip").stop().css("left", "0px"), (e < 600 || d < 1240) && (v.show(), i.judeHide()), j.hasClass("sn-sidebar-contents-show") ? b.hasClass("sn-sidebar-tab-member") ? (i.hide(1), i.dSidebar.find(".sn-sidebar-member-wrap").css({right: "-280px"}).stop(!0, !0).animate({right: "35px"}, function () {
                                a(this).addClass("sn-sidebar-member-show")
                            })) : (j.find(".sn-sidebar-content:visible").css({"z-index": 0}).fadeOut(), j.find(".sn-sidebar-" + f).stop(!0, !0).css({
                                top: e,
                                "z-index": 1
                            }).show().animate({top: 0})) : (j.find(".sn-sidebar-content").stop(!0, !0).hide(), b.hasClass("sn-sidebar-tab-member") ? i.dSidebar.find(".sn-sidebar-member-wrap").css({right: "-280px"}).stop(!0, !0).animate({right: "35px"}, function () {
                                a(this).addClass("sn-sidebar-member-show")
                            }) : (j.addClass("sn-sidebar-contents-show").stop().animate({right: "35px"}), j.find(".sn-sidebar-" + f).stop(!0, !0).css({top: 0}).show(), i.memberhide())), 1 != c && i.judgeDacuImg(1))
                        }

                        var e = this, f = c, g = i.dSidebar = a(".sn-sidebar"), h = g.find(".sn-sidebar-tab-js"),
                            j = g.find(".sn-sidebar-contents"), k = g.find(".sn-sidebar-all-loading"),
                            v = g.find(".sn-sidebar-bg");
                        switch (k.hide(), f) {
                            case"recharge":
                                t ? d() : (t = !0, k.show(), i._loadRecharge(function () {
                                    d()
                                }));
                                break;
                            case"finance":
                                b.hasClass("sn-sidebar-tab-click") ? d() : u ? d() : (u = !0, k.show(), i._loadFinance(function () {
                                    d()
                                }));
                                break;
                            case"history":
                                b.hasClass("sn-sidebar-tab-click") ? d() : ensureLogin(function () {
                                    SFE.base.isLogin(), s ? d() : (s = !0, k.show(), i._loadHistory(function () {
                                        d()
                                    }))
                                });
                                break;
                            case"cart":
                                if (b.hasClass("sn-sidebar-tab-click")) d(); else if (r) {
                                    try {
                                        k.show(), mincart.miniCartData()
                                    } catch (w) {
                                    }
                                    d()
                                } else r = !0, k.show(), i._loadCart(function () {
                                    d()
                                });
                                break;
                            case"member":
                                m ? d(1) : (m = !0, k.show(), i._loadMember(function () {
                                    d(1), x || probeAuthStatus(function () {
                                        SnSidebar.member.getMyMemberInfo(), SnSidebar.member.getAcctauth(), a(".sn-sidebar-member-wrap .username").show(), a(".sn-sidebar-member-wrap .pls-login").hide(), x = !0
                                    }, function () {
                                    })
                                }));
                                break;
                            case"activity":
                                n ? d() : (n = !0, k.show(), i._loadActivity(function () {
                                    d()
                                }));
                                break;
                            case"quality":
                                o ? d() : (o = !0, k.show(), i._loadQuality(function () {
                                    d()
                                }));
                                break;
                            case"dacu":
                                p ? d() : (p = !0, k.show(), i._loadDacu(function () {
                                    d()
                                }));
                                break;
                            case"servicebox":
                                if (SFE.base.isLogin() && 0 == a(".sn-sidebar-service .dot").size()) {
                                    navIndex();
                                    break
                                }
                                ensureLogin(function () {
                                    e._getServiveMessage(function () {
                                        0 != a(".sn-sidebar-service .dot").size() && (q ? d() : (q = !0, k.show(), i._loadService(function () {
                                            d()
                                        })))
                                    })
                                })
                        }
                    }, _loadRecharge: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/recharge.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                snSideBarRecharge(i.dSidebar.find(".sn-sidebar-recharge")), i.dSidebar.find(".sn-sidebar-all-loading").hide(), b && b()
                            },
                            error: function () {
                                t = !1
                            }
                        })
                    }, _loadFinance: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-finance.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), b && b()
                            },
                            error: function () {
                                u = !1
                            }
                        })
                    }, _loadHistory: function (b) {
                        a.ajax({
                            url: i.domains.footprintDomain + "trace/js/side_footprint.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), b && b()
                            },
                            error: function () {
                                s = !1
                            }
                        })
                    }, _loadCart: function (b) {
                        var c = "";
                        c = i.domains.scriptDomianDir + "public/sidebar/build/js/mincart2.min.js?v=" + i.version, a.ajax({
                            url: c,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                mincart.miniCartData(1), b && b()
                            },
                            error: function () {
                                r = !1
                            }
                        })
                    }, _loadMember: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-member.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), SnSidebar.custNumPonitInfoInit(a(".sn-sidebar-member-wrap")), b && b()
                            },
                            error: function () {
                                m = !1
                            }
                        })
                    }, _loadActivity: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-activity.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), i.activity.getHtmlData(), b && b()
                            },
                            error: function () {
                                n = !1
                            }
                        })
                    }, _loadQuality: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-quality.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), i.quality.getHtmlData(), b && b()
                            },
                            error: function () {
                                o = !1
                            }
                        })
                    }, _loadDacu: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-dacu.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), i.dacu.init(), b && b()
                            },
                            error: function () {
                                p = !1
                            }
                        })
                    }, _loadService: function (b) {
                        a.ajax({
                            url: i.domains.scriptDomianDir + "public/sidebar/build/js/sn-sidebar-service.min.js?v=" + i.version,
                            dataType: "script",
                            cache: !0,
                            success: function () {
                                i.dSidebar.find(".sn-sidebar-all-loading").hide(), b && b()
                            },
                            error: function () {
                                q = !1
                            }
                        })
                    }
                };
            window.SnSidebar = y, a(function () {
                SnSidebar._init()
            })
        }
    }
}(jQuery);

function isLogined(fn) {
    try {
        ensureLogin(function () {
            fn();
        });
    } catch (e) {
        fn();
    }
}

/**
 * undefined转换
 * @param arg
 * @returns
 */
function channge(arg) {
    return arg == undefined ? '' : arg;
}

/**
 * 获取doMain开关 add by 19043604 v20170711
 * [根据返回的值切换新（前后端分离）/老 接口域名逻辑]
 */
var domainSwitch = (function () {
    var url = matchDomain({
        domainSwitch: 2,
        env: getEnv()
    }, true) + '/rest/biz/domainSwitch.do'

    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function (res) {
            if (res.meta && res.meta.result === 'success') {
                handleDomain.set(matchDomain({
                    domainSwitch: res.data && res.data.domainSwitch,
                    env: getEnv()
                }));
            } else {
                handleDomain.set(matchDomain({
                    domainSwitch: 2,
                    env: getEnv()
                }));
            }
        },
        error: function (error) {
            handleDomain.set(matchDomain({
                domainSwitch: 2,
                env: getEnv()
            }));
        }

    })
})();

/**
 * [获取当前的环境]
 * @return {String}  当前环境
 * 返回值：pre 徐庄pre、sit 徐州sit、xgpre 新港pre、prd生产
 */
function getEnv() {
    var hostname = window.location.hostname;
    if (hostname.indexOf('xgpre') >= 0 || hostname.indexOf('prexg') >= 0) {
        return 'xgpre';
    } else if (hostname.indexOf('pre') >= 0) {
        return 'pre';
    } else if (hostname.indexOf('sit') >= 0) {
        return 'sit';
    } else {
        return 'prd';
    }

}

/**
 * [接口域名匹配]
 * @param {Object} params
 * @param {Boolean} onlyDomain 判断是否只返回域名
 * {
 * 	 domainSwitch {Number} 域名选择标识 1-talk8 2-yxchat
 * 	 env 当前环境
 * }
 *
 * @return {String} 接口域名
 */
function matchDomain(params, onlyDomain) {
    if (Object.prototype.toString.call(params) !== '[object Object]') { // 避免不传参
        params = {};
    }
    var domainSwitch = params.domainSwitch || 2;
    var env = params.env;
    var domain = '';
    var fileName = '/index.htm';
    if (domainSwitch == 1) { // yxchat
        fileName = onlyDomain ? '' : '/index.html';
        switch (env) {
            case 'xgpre':
                domain = '//yxchatxgpre.cnsuning.com' + fileName;
                break;
            case 'pre':
                domain = '//yxchatpre.cnsuning.com' + fileName;
                break;
            case 'sit':
                domain = '//yxchatsit.cnsuning.com' + fileName;
                break;
            default:
                domain = '//yxchat.suning.com' + fileName;
        }
    } else if (domainSwitch == 2) { // talk8
        fileName = onlyDomain ? '' : '/index.htm';
        switch (env) {
            case 'xgpre':
                domain = '//talk8xgpre.cnsuning.com/yunxin-web' + fileName;
                break;
            case 'pre':
                domain = '//talk8pre.cnsuning.com/yunxin-web' + fileName;
                break;
            case 'sit':
                domain = '//talk8sit.cnsuning.com/yunxin-web' + fileName;
                break;
            default:
                domain = '//talk8.suning.com' + fileName;
        }
    }
    return domain;
}

/**
 * [操作domain方法]
 * set {Function} 设置
 * get {Function} 获取
 */
var handleDomain = (function () {
    var domain = '';
    return {
        set: function (data) {
            if (!data) return false;
            domain = data;
        },
        get: function () {
            return domain;
        }
    }
})();

/**
 * 获取域名方法（灰度之前使用，还原防止其他接入方使用） restore by 19043604 v20190723
 */
var talkDomain = (function () {
    var hostname = window.location.hostname;
    var xgpre = hostname.indexOf('xgpre') >= 0 || hostname.indexOf('prexg') >= 0;
    if (xgpre) {
        return '//talk8xgpre.cnsuning.com/yunxin-web';
    }

    var pre = hostname.indexOf('pre') >= 0;
    if (pre) {
        return '//talk8pre.cnsuning.com/yunxin-web';
    }

    var sit = hostname.indexOf('sit') >= 0;
    if (sit) {
        return '//talk8sit.cnsuning.com/yunxin-web';
    }
    return '//talk8.suning.com';
})();


function getWebcallParam(prdurl, pn, or, sc, prodNo, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, memberSwitch) {
    var p = [];
    if (prdurl) {
        p[p.length] = ("prodUrl=" + encodeURIComponent(prdurl));
    }
    if (pn) {
        p[p.length] = ("pn=" + encodeURIComponent(pn));
    }
    if (or) {
        p[p.length] = ("r=" + encodeURIComponent(or));
    }
    if (sc) {
        p[p.length] = ("sc=" + encodeURIComponent(sc));
    }
    if (prodNo) {
        p[p.length] = ("prodNo=" + encodeURIComponent(prodNo));
    }
    if (page) {
        p[p.length] = ("page=" + encodeURIComponent(page));
    }
    if (cityCode) {
        p[p.length] = ("cno=" + encodeURIComponent(cityCode));
    }
    if (areaCode) {
        p[p.length] = ("ano=" + encodeURIComponent(areaCode));
    }

    if (productPosition) {
        p[p.length] = ("productPosition=" + encodeURIComponent(productPosition));
    }
    if (businessCode) {
        p[p.length] = ("businessCode=" + encodeURIComponent(businessCode));
    }
    if (terminalType) {
        p[p.length] = ("terminalType=" + encodeURIComponent(terminalType));
    }
    if (pageSource) {
        p[p.length] = ("pageSource=" + encodeURIComponent(pageSource));
    }
    if (enterCode) {
        p[p.length] = ("enterCode=" + encodeURIComponent(enterCode));
    }
    if (isSuperVip) {
        p[p.length] = ("isSuperVip=" + encodeURIComponent(isSuperVip));
    }
    if (memberSwitch) {
        p[p.length] = ("memberSwitch=" + encodeURIComponent(memberSwitch));
    }

    p[p.length] = "url=" + encodeURIComponent(document.location.href);

    p[p.length] = "_t=" + Math.round(Math.random() * 1000000);

    return p.join("&");
}

function getWebcallParamForSelfShop(prdurl, pn, or, sc, prodNo, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, selfShopCode) {
    var p = [];
    if (prdurl) {
        p[p.length] = ("prodUrl=" + encodeURIComponent(prdurl));
    }
    if (pn) {
        p[p.length] = ("pn=" + encodeURIComponent(pn));
    }
    if (or) {
        p[p.length] = ("r=" + encodeURIComponent(or));
    }
    if (sc) {
        p[p.length] = ("sc=" + encodeURIComponent(sc));
    }
    if (prodNo) {
        p[p.length] = ("prodNo=" + encodeURIComponent(prodNo));
    }
    if (page) {
        p[p.length] = ("page=" + encodeURIComponent(page));
    }
    if (cityCode) {
        p[p.length] = ("cno=" + encodeURIComponent(cityCode));
    }
    if (areaCode) {
        p[p.length] = ("ano=" + encodeURIComponent(areaCode));
    }

    if (productPosition) {
        p[p.length] = ("productPosition=" + encodeURIComponent(productPosition));
    }
    if (businessCode) {
        p[p.length] = ("businessCode=" + encodeURIComponent(businessCode));
    }
    if (terminalType) {
        p[p.length] = ("terminalType=" + encodeURIComponent(terminalType));
    }
    if (pageSource) {
        p[p.length] = ("pageSource=" + encodeURIComponent(pageSource));
    }
    if (enterCode) {
        p[p.length] = ("enterCode=" + encodeURIComponent(enterCode));
    }
    if (isSuperVip) {
        p[p.length] = ("isSuperVip=" + encodeURIComponent(isSuperVip));
    }
    if (selfShopCode) {
        p[p.length] = ("selfShopCode=" + encodeURIComponent(selfShopCode));
    }

    p[p.length] = "url=" + encodeURIComponent(document.location.href);

    p[p.length] = "_t=" + Math.round(Math.random() * 1000000);

    return p.join("&");
}

function getWebcallParam3(prdurl, pn, or, sc, prodNo, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, biz) {
    var p = [];
    if (prdurl) {
        p[p.length] = ("prodUrl=" + encodeURIComponent(prdurl));
    }
    if (pn) {
        p[p.length] = ("pn=" + encodeURIComponent(pn));
    }
    if (or) {
        p[p.length] = ("r=" + encodeURIComponent(or));
    }
    if (sc) {
        p[p.length] = ("sc=" + encodeURIComponent(sc));
    }
    if (prodNo) {
        p[p.length] = ("prodNo=" + encodeURIComponent(prodNo));
    }
    if (page) {
        p[p.length] = ("page=" + encodeURIComponent(page));
    }
    if (cityCode) {
        p[p.length] = ("cno=" + encodeURIComponent(cityCode));
    }
    if (areaCode) {
        p[p.length] = ("ano=" + encodeURIComponent(areaCode));
    }

    if (productPosition) {
        p[p.length] = ("productPosition=" + encodeURIComponent(productPosition));
    }
    if (businessCode) {
        p[p.length] = ("businessCode=" + encodeURIComponent(businessCode));
    }
    if (terminalType) {
        p[p.length] = ("terminalType=" + encodeURIComponent(terminalType));
    }
    if (pageSource) {
        p[p.length] = ("pageSource=" + encodeURIComponent(pageSource));
    }
    if (enterCode) {
        p[p.length] = ("enterCode=" + encodeURIComponent(enterCode));
    }
    if (isSuperVip) {
        p[p.length] = ("isSuperVip=" + encodeURIComponent(isSuperVip));
    }
    if (biz) {
        p[p.length] = ("biz=" + encodeURIComponent(biz));
    }
    p[p.length] = "url=" + encodeURIComponent(document.location.href);

    p[p.length] = "_t=" + Math.round(Math.random() * 1000000);

    return p.join("&");
}

function getWebcallParam2(productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var p = [];
    if (productPosition) {
        p[p.length] = ("productPosition=" + encodeURIComponent(productPosition));
    }
    if (businessCode) {
        p[p.length] = ("businessCode=" + encodeURIComponent(businessCode));
    }
    if (terminalType) {
        p[p.length] = ("terminalType=" + encodeURIComponent(terminalType));
    }
    if (pageSource) {
        p[p.length] = ("pageSource=" + encodeURIComponent(pageSource));
    }
    if (enterCode) {
        p[p.length] = ("enterCode=" + encodeURIComponent(enterCode));
    }
    if (isSuperVip) {
        p[p.length] = ("isSuperVip=" + encodeURIComponent(isSuperVip));
    }
    return p.join("&");
}

function getWebcallParam4(prdurl, pn, or, sc, prodNo, selfShopCode) {
    var p = [];
    if (prdurl) {
        p[p.length] = ("prodUrl=" + encodeURIComponent(prdurl));
    }
    if (pn) {
        p[p.length] = ("pn=" + encodeURIComponent(pn));
    }
    if (or) {
        p[p.length] = ("r=" + encodeURIComponent(or));
    }
    if (sc) {
        p[p.length] = ("sc=" + encodeURIComponent(sc));
    }
    if (prodNo) {
        p[p.length] = ("prodNo=" + encodeURIComponent(prodNo));
    }
    if (selfShopCode) {
        p[p.length] = ("selfShopCode=" + encodeURIComponent(selfShopCode));
    }
    return p.join("&");
}

/**
 * 打开苏宁在线客服
 *
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 * @param or
 *            订单号(非必须)
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 */

function findpass(prdurl, pn, or, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    talkpass(prdurl, pn, or, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip);
}

/**
 * 打开首页通道导航
 * 到通道导航页面
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 */
function navIndex(resource, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    resource = channge(resource);
    var param = getWebcallParam2(productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip);
    window.open(domain + "?bizType=05&serviceType=02&resource=" + resource + "&" + param + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * 打开苏宁在线客服的单个通道
 *
 * @param gId
 *            通道ID
 * @param rurl
 *            客服不在线提示返回的链接地址
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 * @param or
 *            订单号(非必须)
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 */

function findsinglepass(gId, rurl, prdurl, pn, or, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var domain = handleDomain.get();
    var snT = sn || {};
    var channelId = gId;
    var url = domain + "?channelId=" + channelId;
    var catalogId = snT.catalogId || '';
    var storeId = snT.storeId || '';
    var fromDomain = window.location.host;
    if (rurl) {
        url = url + "&rurl=" + encodeURIComponent(url);
    }
    window.open(url + "&storeId=" + storeId + '&catalogId=' + catalogId + '&'
        + getWebcallParam(prdurl, pn, '', productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) + "&fromDomain=" + fromDomain + "&biz=1002", "_blank");
}

/**
 * 打开苏宁在线客服
 *
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 * @param or
 *            订单号(非必须)
 */

function findpassNoModal(prdurl, pn, or) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    window.open(domain + "?" + getWebcallParam(prdurl, pn, or) + "&fromDomain=" + fromDomain,
        "_blank");
}

/**
 * 四级页面打开苏宁在线客服
 *
 * @param brandId
 *            旗舰店ID(非必须)
 * @param groupId
 *            销售类目ID
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 */
function findpassBrand(brandId, groupId, prdurl, pn) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    if (brandId) {
        window.open(domain + "?brandId=" + brandId + "&groupId="
            + groupId + "&" + getWebcallParam(prdurl, pn) + "&fromDomain=" + fromDomain, "_blank");
    } else {
        window.open(domain + "?groupId=" + groupId + "&"
            + getWebcallParam(prdurl, pn) + "&fromDomain=" + fromDomain, "_blank");
    }
}

/**
 * 四级页面打开供应商客服或苏宁在线客服
 *
 * @param groupMember
 *            供应商编码(必须)
 * @param classCode
 *            商品组(必须)
 * @param brandId
 *            品牌ID(必须)
 * @param groupID
 *            销售类目ID(必须)
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 */
function findpassBrand2(groupMember, classCode, brandId, groupID, prdurl, pn) {
    var snT = sn || {};
    var domain = handleDomain.get();
    var prodNo = snT.partNumber || '';
    var sc = snT.vendorCode || '';
    var shopCode = snT.flagshipId || '0000000000';
    var shopName = snT.flagshipName || '';
    var fromDomain = window.location.host;
    window.open(domain + "?groupMember=" + groupMember
        + "&classCode=" + classCode + "&brandId=" + brandId + "&groupId="
        + groupID + "&" + getWebcallParam(prdurl, pn, '', '', prodNo)
        + "&sc=" + sc + "&shopCode=" + shopCode + "&rt=1" + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * 打开商家客服
 *
 * @param sc
 *            商家编码(必须)
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 * @param or
 *            订单号(非必须)
 */
function findpassSupplier(sc, prdurl, pn, or) {
    var domain = handleDomain.get();

    var snT, catalogId, storeId, prodNo;
    var fromDomain = window.location.host;
    snT = sn || {};
    catalogId = snT.catalogId || '';
    storeId = snT.storeId || '';
    prodNo = snT.partNumber || '';
    window.open(domain + "?catalogId=" + catalogId + '&storeId='
        + storeId + '&' + getWebcallParam(prdurl, pn, or, sc, prodNo) + "&fromDomain=" + fromDomain,
        "_blank");
}

/**
 * [findpassSupplierForShop]打开商家客服 店铺用
 *
 * @param sc
 *            商家编码(必须)
 * @param prdurl
 *            四级投影地址(非必须)
 * @param pn
 *            商品名称(非必须)
 * @param or
 *            订单号(非必须)
 */

function findpassSupplierForShop(sc, prdurl, pn, or, selfShopCode) {
    var domain = handleDomain.get();

    var snT, catalogId, storeId, prodNo;
    var fromDomain = window.location.host;
    snT = sn || {};
    catalogId = snT.catalogId || '';
    storeId = snT.storeId || '';
    prodNo = snT.partNumber || '';
    window.open(domain + "?catalogId=" + catalogId + '&storeId='
        + storeId + '&' + getWebcallParam4(prdurl, pn, or, sc, prodNo, selfShopCode) + "&fromDomain=" + fromDomain,
        "_blank");
}

function findpassNoModalBrand(h, f, i, j) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    if (h != "") {
        window.open(domain + "?brandId=" + h + "&flag=" + f
            + "&groupId=" + i + "&url=" + encodeURIComponent(j) + "&fromDomain=" + fromDomain, "_blank");
    } else {
        window.open(domain + "?groupId=" + i + "&url="
            + encodeURIComponent(j) + "&fromDomain=" + fromDomain, "_blank");
    }
}

function findpassNoModalSingle() {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    window.open(domain + "?" + getWebcallParam() + "&fromDomain=" + fromDomain, "_blank");
}

function findpassNoModal1() {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    window.open(domain + "?" + getWebcallParam() + "&fromDomain=" + fromDomain, "_blank");
}

function findpassNoModal2() {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    window.open(domain + "?" + getWebcallParam() + "&fromDomain=" + fromDomain, "_blank");
}

function SetCookie(f, h) {
    var snT = sn || {};
    var e = 60;
    var g = new Date;
    g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
    document.cookie = f + "=" + escape(h) + ";domain=" + snT.cookieDomain
        + ";expires=" + g.toGMTString();
}

function SetCookieCopy(d, c) {
    var snT = sn || {};
    document.cookie = d + "=" + escape(c) + ";path=/;domain="
        + snT.cookieDomain;
}

function getCookie(c) {
    var d = document.cookie.match(new RegExp("(^| )" + c + "=([^;]*)(;|$)"));
    if (d != null) {
        return unescape(d[2]);
    }
    return null;
}

function delCookie() {
    var f = "tempUniqueWindow";
    var d = new Date;
    d.setTime(d.getTime() - 1);
    var e = getCookie(f);
    if (e != null) {
        document.cookie = f + "=" + e + ";expires=" + d.toGMTString();
    }
}

function CookieIsExist() {
    var b = getCookie("tempUniqueWindow");
    if (b == null) {
        SetCookieCopy("tempUniqueWindow", "openUniqueWindow");
    }
    if (b != null) {
        alert("当前聊天只支持单通道聊天");
        window.close();
        return;
    }
}

/**
 * 获得C店坐席状态
 *
 * @param {[type]}
 *            seletor [选择器]
 * @param {[type]}
 *            sc [商家编码]
 * @param {[type]}
 *            type [类型]
 * @return {[type]} [null]
 */

function getSupplierState(seletor, sc, type) {
    var domain = matchDomain({domainSwitch: 2, env: getEnv()}, true);

    var context = 'yunxin';
    var _t = new Date().getTime(), $img = $(''), type = type || 0;
    if (type == 0 || type == 3) {
        $img = $('<img style="vertical-align:middle;width:69px;height:18px;" src=' + domain
            + '/project/' + context + '/images/online.gif?_t=' + _t
            + ' alt="和我联系">');
    } else if (type == 2) {
        $img = $('<img style="vertical-align:middle;width:69px;height:18px;" src=' + domain
            + '/project/' + context + '/images/swlonline.gif?_t=' + _t
            + ' alt="和我联系">');
    } else if (type == 1) {
        $img = $('<img style="vertical-align:middle;width:69px;height:18px;" src=' + domain
            + '/project/' + context + '/images/zconline.png?_t=' + _t
            + ' alt="和我联系">');
    }
    $(seletor).html($img);
}

/**
 * [打开通道列表页,如果是vip则进入vip通道]
 *
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 * @return {[type]} [description]
 */
function talkpass(prdurl, pn, or, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    window.open(domain + "?" + getWebcallParam(prdurl, pn, or, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) + "&fromDomain=" + fromDomain,
        "_blank");
}

/**
 * C店从订单中心打开商家在线客服
 * @param pno
 *            商品编码(必须,没有传''）
 * @param page
 *            页面编码(必须,没有传''）
 * @param sc
 *            商家编码(必须,没有传'')
 * @param prdurl
 *            四级投影地址(必须,没有传'')
 * @param or
 *            订单号(必须,没有传'')
 * @param gid
 *            商家通道(必须,没有传'')
 * @param cityCode
 *            城市编码(必须,没有传'')
 * @param areaCode
 *            城市编码(必须,没有传'')
 * @param resource
 *            请求来源,订单中心(必须)传1,四级页传2或不传
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 * @param memberSwitch
 *            风控开关
 */
function findpassNewSupplier(pno, page, sc, prdurl, or, gid, cityCode, areaCode, resource, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, memberSwitch) {
    var domain = handleDomain.get();
    var snT, catalogId, storeId;
    snT = sn || {};
    catalogId = snT.catalogId || '';
    storeId = snT.storeId || '';
    gid = channge(gid);
    resource = channge(resource);
    var url = domain + "?channelId=" + gid;
    var fromDomain = window.location.host;
    window.open(url + "&catalogId=" + catalogId + '&storeId=' + storeId + '&orderFp=' + resource + '&'
        + getWebcallParam(prdurl, "", or, sc, pno, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, memberSwitch) + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * C店从订单中心打开商家在线客服
 * @param pno
 *            商品编码(必须,没有传''）
 * @param page
 *            页面编码(必须,没有传''）
 * @param sc
 *            商家编码(必须,没有传'')
 * @param prdurl
 *            四级投影地址(必须,没有传'')
 * @param or
 *            订单号(必须,没有传'')
 * @param gid
 *            商家通道(必须,没有传'')
 * @param cityCode
 *            城市编码(必须,没有传'')
 * @param areaCode
 *            城市编码(必须,没有传'')
 * @param resource
 *            请求来源,订单中心(必须)传1,四级页传2或不传
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 * @param memberSwitch
 *            风控开关
 * @param biz
 *            业务编码
 */
function findpassNewSupplierForBiz(pno, page, sc, prdurl, or, gid, cityCode, areaCode, resource, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, biz) {
    var domain = handleDomain.get();
    var snT, catalogId, storeId;
    snT = sn || {};
    catalogId = snT.catalogId || '';
    storeId = snT.storeId || '';
    gid = channge(gid);
    resource = channge(resource);
    var url = domain + "?channelId=" + gid;
    var fromDomain = window.location.host;
    window.open(url + "&catalogId=" + catalogId + '&storeId=' + storeId + '&orderFp=' + resource + '&'
        + getWebcallParam3(prdurl, "", or, sc, pno, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, biz) + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * 自营供应商四级页面打开供应商客服或苏宁在线客服
 * @param pno
 *            商品编码(非必须）
 * @param page
 *            页面编码(非必须）
 * @param groupMember
 *            供应商编码(必须)
 * @param classCode
 *            商品组(必须)
 * @param brandId
 *            品牌ID(必须)
 * @param groupID
 *            销售类目ID(必须)
 * @param prdurl
 *            四级投影地址(非必须)
 * @param cityCode
 *              城市编码(必须,没有传'')
 * @param areaCode
 *              城市编码(必须,没有传'')
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 */
function findpassNewBrand(pno, page, groupMember, classCode, brandId, groupID,
                          prdurl, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var snT = sn || {};
    var domain = handleDomain.get();
    var sc = snT.vendorCode || '';
    var shopCode = snT.flagshipId || '0000000000';
    var fromDomain = window.location.host;
    window.open(domain + "?groupMember=" + groupMember
        + "&classCode=" + classCode + "&brandId=" + brandId + "&groupId="
        + groupID + "&" + getWebcallParam(prdurl, '', '', '', pno, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, '')
        + "&sc=" + sc + "&shopCode=" + shopCode + "&rt=1" + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * 自营供应商四级页面打开供应商客服或苏宁在线客服
 * @param pno
 *            商品编码(非必须）
 * @param page
 *            页面编码(非必须）
 * @param groupMember
 *            供应商编码(必须)
 * @param classCode
 *            商品组(必须)
 * @param brandId
 *            品牌ID(必须)
 * @param groupID
 *            销售类目ID(必须)
 * @param prdurl
 *            四级投影地址(非必须)
 * @param cityCode
 *              城市编码(必须,没有传'')
 * @param areaCode
 *              城市编码(必须,没有传'')
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 * @param selfShopCode
 *            自营店铺编码
 *
 */
function findpassNewBrandForSelfShop(pno, page, groupMember, classCode, brandId, groupID,
                                     prdurl, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, selfShopCode) {
    var snT = sn || {};
    var domain = handleDomain.get();
    var sc = snT.vendorCode || '';
    var shopCode = snT.flagshipId || '0000000000';
    var fromDomain = window.location.host;
    window.open(domain + "?groupMember=" + groupMember
        + "&classCode=" + classCode + "&brandId=" + brandId + "&groupId="
        + groupID + "&" + getWebcallParamForSelfShop(prdurl, '', '', '', pno, page, cityCode, areaCode, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip, selfShopCode)
        + "&sc=" + sc + "&shopCode=" + shopCode + "&rt=1" + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * 通道导航-订单中心
 * @param bizType 业务类型(必须,没有传'')
 * @param serviceType 售前售后类型(必须,没有传'')
 * @param prdUrl 四级投影地址(必须,没有传'')
 * @param orderNo 订单号(B2C订单号,必须,没有传'')
 * @param omsOrderNo OMS订单号(OMS订单号,必须,没有传'')
 * @param address 收货地址(市,必须,没有传'')
 * @param commodityCategory=x,x,x... 订单中所有商品的四级销售目录,用","分隔
 * @param deliveryType=x,x         送货类型，自营送,厂送，自营送传1,0  厂送传0,1  既有自营送又是厂送传1,1
 * @param installType=x,x,x         安装类型，自营装，厂装，其他装，自营装传1,0,0 厂装传0,1,0，其他如上
 * orderFp 标记来源 1订单中心
 * chatResource 1四级页 2订单中心 3首页
 * @param resource 访问来源(首页1,订单中心2,其他暂时填3) ..待添加
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 */
function findpassServer(bizType, serviceType, prdUrl, orderNo, omsOrderNo, address, commodityCategory,
                        deliveryType, installType, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var snT = sn || {};
    var domain = handleDomain.get();
    var custTags = address && address != '' ? encodeURIComponent(encodeURIComponent(address)) : '';
    var fromDomain = window.location.host;
    window.open(domain + '?'
        + 'bizType=' + bizType
        + '&serviceType=' + serviceType
        + '&orderFp=1'
        + '&chatResource=2'
        + '&prdUrl=' + prdUrl
        + '&or=' + orderNo
        + '&address=' + custTags
        + '&commodityCategory=' + commodityCategory
        + '&deliveryType=' + deliveryType
        + '&installType=' + installType
        + '&fromDomain=' + fromDomain
        + '&productPosition=' + productPosition
        + '&businessCode=' + businessCode
        + '&terminalType=' + terminalType
        + '&pageSource=' + pageSource
        + '&enterCode=' + enterCode
        + '&isSuperVip=' + isSuperVip
        + '&accessSource=' + window.location.href);
}

/**
 * 打开首页通道导航
 * orderFp 标记来源 1订单中心
 * chatResource 1四级页 2订单中心 3首页
 * @param productPosition
 *            产品位置
 * @param businessCode
 *            业务编码
 * @param terminalType
 *            终端
 * @param pageSource
 *            页面来源
 * @param enterCode
 *            入口编码
 * @param isSuperVip
 *            是否superVip
 * **********orderFp改为newResource 标记来源 1首页、2订单中心、3四级页
 */
function navIndex(resource, productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    var param = getWebcallParam2(productPosition, businessCode, terminalType, pageSource, enterCode, isSuperVip);
    window.open(domain + "?bizType=05&serviceType=02&orderFp=2&chatResource=3&referResource=1" + "&" + param + "&fromDomain=" + fromDomain, "_blank");
}

/**
 * @param  {[type]} appCode   [description]
 * @param  {[type]} channelId [description]
 * @param  {[type]} custNo    [description]
 * @param  {[type]} chatModel [description]
 */

function nygAccess(appCode, channelId, custNo, chatModel) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    //验证
    if (appCode == '' || custNo == '' || appCode == undefined || custNo == undefined || appCode == null || custNo == null) {
        return;
    }
    window.open(domain + "?appCode=" + appCode + "&channelId=" + channelId + "&custNo=" + custNo + "&chatModel=" + chatModel)

}

/**
 * 非易购体系接入js改版 参数传json
 * @param data
 */
function findPassNyg(data) {
    var domain = handleDomain.get();
    var fromDomain = window.location.host;
    if (data == '' || data == undefined || data == null) {
        return;
    }
    data = encodeURIComponent(encodeURIComponent(data));
    window.open(domain + "?data=" + data + "&fromDomain=" + fromDomain, "_blank")
}

