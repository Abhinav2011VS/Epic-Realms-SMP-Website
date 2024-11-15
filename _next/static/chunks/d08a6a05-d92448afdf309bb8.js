"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8774],
    {
        27743: function (e, t, n) {
            function o(e, t) {
                var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = r(e)) || (t && e && "number" == typeof e.length)) {
                        n && (e = n);
                        var o = 0,
                            i = function () {};
                        return {
                            s: i,
                            n: function () {
                                return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: i,
                        };
                    }
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s,
                    a = !0,
                    l = !1;
                return {
                    s: function () {
                        n = n.call(e);
                    },
                    n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                    },
                    e: function (e) {
                        (l = !0), (s = e);
                    },
                    f: function () {
                        try {
                            a || null == n.return || n.return();
                        } finally {
                            if (l) throw s;
                        }
                    },
                };
            }
            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n)) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
                }
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function s() {
                return (s =
                    "undefined" != typeof Reflect && Reflect.get
                        ? Reflect.get.bind()
                        : function (e, t, n) {
                              var o = (function (e, t) {
                                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)); );
                                  return e;
                              })(e, t);
                              if (o) {
                                  var r = Object.getOwnPropertyDescriptor(o, t);
                                  return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
                              }
                          }).apply(this, arguments);
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return (e.__proto__ = t), e;
                      })(e, t);
            }
            function c(e) {
                var t = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        o = u(e);
                    return (
                        (n = t ? Reflect.construct(o, arguments, u(this).constructor) : o.apply(this, arguments)),
                        (function (e, t) {
                            if (t && ("object" === f(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                            return d(e);
                        })(this, n)
                    );
                };
            }
            function d(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function u(e) {
                return (u = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            function f(e) {
                return (f =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function h(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
            }
            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            e,
                            (function (e) {
                                var t = (function (e, t) {
                                    if ("object" !== f(e) || null === e) return e;
                                    var n = e[Symbol.toPrimitive];
                                    if (void 0 !== n) {
                                        var o = n.call(e, t || "default");
                                        if ("object" !== f(o)) return o;
                                        throw TypeError("@@toPrimitive must return a primitive value.");
                                    }
                                    return ("string" === t ? String : Number)(e);
                                })(e, "string");
                                return "symbol" === f(t) ? t : String(t);
                            })(o.key),
                            o
                        );
                }
            }
            function m(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
            var v = n(22765),
                g = n(1109),
                y = n(61563),
                b = function (e) {
                    for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
                },
                k = function (e) {
                    var t = e.assignedSlot || e.parentNode;
                    return t && 11 == t.nodeType ? t.host : t;
                },
                w = null,
                S = function (e, t, n) {
                    var o = w || (w = document.createRange());
                    return o.setEnd(e, null == n ? e.nodeValue.length : n), o.setStart(e, t || 0), o;
                },
                N = function () {
                    w = null;
                },
                D = function (e, t, n, o) {
                    return n && (C(e, t, n, o, -1) || C(e, t, n, o, 1));
                },
                O = /^(img|br|input|textarea|hr)$/i;
            function C(e, t, n, o, r) {
                for (;;) {
                    if (e == n && t == o) return !0;
                    if (t == (r < 0 ? 0 : M(e))) {
                        var i = e.parentNode;
                        if (!i || 1 != i.nodeType || x(e) || O.test(e.nodeName) || "false" == e.contentEditable) return !1;
                        (t = b(e) + (r < 0 ? 0 : 1)), (e = i);
                    } else {
                        if (1 != e.nodeType || "false" == (e = e.childNodes[t + (r < 0 ? -1 : 0)]).contentEditable) return !1;
                        t = r < 0 ? M(e) : 0;
                    }
                }
            }
            function M(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
            }
            function x(e) {
                for (var t, n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
                return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
            }
            var T = function (e) {
                return e.focusNode && D(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
            };
            function E(e, t) {
                var n = document.createEvent("Event");
                return n.initEvent("keydown", !0, !0), (n.keyCode = e), (n.key = n.code = t), n;
            }
            var P = "undefined" != typeof navigator ? navigator : null,
                A = "undefined" != typeof document ? document : null,
                V = (P && P.userAgent) || "",
                R = /Edge\/(\d+)/.exec(V),
                B = /MSIE \d/.exec(V),
                z = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(V),
                I = !!(B || z || R),
                F = B ? document.documentMode : z ? +z[1] : R ? +R[1] : 0,
                L = !I && /gecko\/(\d+)/i.test(V);
            L && (/Firefox\/(\d+)/.exec(V) || [0, 0])[1];
            var q = !I && /Chrome\/(\d+)/.exec(V),
                K = !!q,
                $ = q ? +q[1] : 0,
                _ = !I && !!P && /Apple Computer/.test(P.vendor),
                W = _ && (/Mobile\/\w+/.test(V) || (!!P && P.maxTouchPoints > 2)),
                j = W || (!!P && /Mac/.test(P.platform)),
                H = !!P && /Win/.test(P.platform),
                U = /Android \d/.test(V),
                G = !!A && "webkitFontSmoothing" in A.documentElement.style,
                X = G ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
            function Y(e, t) {
                return "number" == typeof e ? e : e[t];
            }
            function J(e, t, n) {
                for (var o = e.someProp("scrollThreshold") || 0, r = e.someProp("scrollMargin") || 5, i = e.dom.ownerDocument, s = n || e.dom; s; s = k(s))
                    if (1 == s.nodeType) {
                        var a = s,
                            l = a == i.body,
                            c = l
                                ? (function (e) {
                                      var t = e.defaultView && e.defaultView.visualViewport;
                                      return t ? { left: 0, right: t.width, top: 0, bottom: t.height } : { left: 0, right: e.documentElement.clientWidth, top: 0, bottom: e.documentElement.clientHeight };
                                  })(i)
                                : (function (e) {
                                      var t = e.getBoundingClientRect(),
                                          n = t.width / e.offsetWidth || 1,
                                          o = t.height / e.offsetHeight || 1;
                                      return { left: t.left, right: t.left + e.clientWidth * n, top: t.top, bottom: t.top + e.clientHeight * o };
                                  })(a),
                            d = 0,
                            u = 0;
                        if (
                            (t.top < c.top + Y(o, "top")
                                ? (u = -(c.top - t.top + Y(r, "top")))
                                : t.bottom > c.bottom - Y(o, "bottom") && (u = t.bottom - t.top > c.bottom - c.top ? t.top + Y(r, "top") - c.top : t.bottom - c.bottom + Y(r, "bottom")),
                            t.left < c.left + Y(o, "left") ? (d = -(c.left - t.left + Y(r, "left"))) : t.right > c.right - Y(o, "right") && (d = t.right - c.right + Y(r, "right")),
                            d || u)
                        ) {
                            if (l) i.defaultView.scrollBy(d, u);
                            else {
                                var f = a.scrollLeft,
                                    h = a.scrollTop;
                                u && (a.scrollTop += u), d && (a.scrollLeft += d);
                                var p = a.scrollLeft - f,
                                    m = a.scrollTop - h;
                                t = { left: t.left - p, top: t.top - m, right: t.right - p, bottom: t.bottom - m };
                            }
                        }
                        if (l || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
                    }
            }
            function Q(e) {
                for (var t = [], n = e.ownerDocument, o = e; o && (t.push({ dom: o, top: o.scrollTop, left: o.scrollLeft }), e != n); o = k(o));
                return t;
            }
            function Z(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = o.dom,
                        i = o.top,
                        s = o.left;
                    r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != s && (r.scrollLeft = s);
                }
            }
            var ee = null;
            function et(e, t) {
                return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
            }
            function en(e) {
                return e.top < e.bottom || e.left < e.right;
            }
            function eo(e, t) {
                var n = e.getClientRects();
                if (n.length) {
                    var o = n[t < 0 ? 0 : n.length - 1];
                    if (en(o)) return o;
                }
                return Array.prototype.find.call(n, en) || e.getBoundingClientRect();
            }
            var er = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
            function ei(e, t, n) {
                var o = e.docView.domFromPos(t, n < 0 ? -1 : 1),
                    r = o.node,
                    i = o.offset,
                    s = o.atom,
                    a = G || L;
                if (3 == r.nodeType) {
                    if (a && (er.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
                        var l = eo(S(r, i, i), n);
                        if (L && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                            var c = eo(S(r, i - 1, i - 1), -1);
                            if (c.top == l.top) {
                                var d = eo(S(r, i, i + 1), -1);
                                if (d.top != l.top) return es(d, d.left < c.left);
                            }
                        }
                        return l;
                    }
                    var u = i,
                        f = i,
                        h = n < 0 ? 1 : -1;
                    return n < 0 && !i ? (f++, (h = -1)) : n >= 0 && i == r.nodeValue.length ? (u--, (h = 1)) : n < 0 ? u-- : f++, es(eo(S(r, u, f), h), h < 0);
                }
                if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
                    if (null == s && i && (n < 0 || i == M(r))) {
                        var p = r.childNodes[i - 1];
                        if (1 == p.nodeType) return ea(p.getBoundingClientRect(), !1);
                    }
                    if (null == s && i < M(r)) {
                        var m = r.childNodes[i];
                        if (1 == m.nodeType) return ea(m.getBoundingClientRect(), !0);
                    }
                    return ea(r.getBoundingClientRect(), n >= 0);
                }
                if (null == s && i && (n < 0 || i == M(r))) {
                    var v = r.childNodes[i - 1],
                        g = 3 == v.nodeType ? S(v, M(v) - (a ? 0 : 1)) : 1 != v.nodeType || ("BR" == v.nodeName && v.nextSibling) ? null : v;
                    if (g) return es(eo(g, 1), !1);
                }
                if (null == s && i < M(r)) {
                    for (var y = r.childNodes[i]; y.pmViewDesc && y.pmViewDesc.ignoreForCoords; ) y = y.nextSibling;
                    var b = y ? (3 == y.nodeType ? S(y, 0, a ? 0 : 1) : 1 == y.nodeType ? y : null) : null;
                    if (b) return es(eo(b, -1), !0);
                }
                return es(eo(3 == r.nodeType ? S(r) : r, -n), n >= 0);
            }
            function es(e, t) {
                if (0 == e.width) return e;
                var n = t ? e.left : e.right;
                return { top: e.top, bottom: e.bottom, left: n, right: n };
            }
            function ea(e, t) {
                if (0 == e.height) return e;
                var n = t ? e.top : e.bottom;
                return { top: n, bottom: n, left: e.left, right: e.right };
            }
            function el(e, t, n) {
                var o = e.state,
                    r = e.root.activeElement;
                o != t && e.updateState(t), r != e.dom && e.focus();
                try {
                    return n();
                } finally {
                    o != t && e.updateState(o), r != e.dom && r && r.focus();
                }
            }
            var ec = /[\u0590-\u08ac]/,
                ed = null,
                eu = null,
                ef = !1,
                eh = (function () {
                    function e(t, n, o, r) {
                        h(this, e), (this.parent = t), (this.children = n), (this.dom = o), (this.contentDOM = r), (this.dirty = 0), (o.pmViewDesc = this);
                    }
                    return (
                        m(e, [
                            {
                                key: "matchesWidget",
                                value: function (e) {
                                    return !1;
                                },
                            },
                            {
                                key: "matchesMark",
                                value: function (e) {
                                    return !1;
                                },
                            },
                            {
                                key: "matchesNode",
                                value: function (e, t, n) {
                                    return !1;
                                },
                            },
                            {
                                key: "matchesHack",
                                value: function (e) {
                                    return !1;
                                },
                            },
                            {
                                key: "parseRule",
                                value: function () {
                                    return null;
                                },
                            },
                            {
                                key: "stopEvent",
                                value: function (e) {
                                    return !1;
                                },
                            },
                            {
                                key: "size",
                                get: function () {
                                    for (var e = 0, t = 0; t < this.children.length; t++) e += this.children[t].size;
                                    return e;
                                },
                            },
                            {
                                key: "border",
                                get: function () {
                                    return 0;
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    (this.parent = void 0), this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                                    for (var e = 0; e < this.children.length; e++) this.children[e].destroy();
                                },
                            },
                            {
                                key: "posBeforeChild",
                                value: function (e) {
                                    for (var t = 0, n = this.posAtStart; ; t++) {
                                        var o = this.children[t];
                                        if (o == e) return n;
                                        n += o.size;
                                    }
                                },
                            },
                            {
                                key: "posBefore",
                                get: function () {
                                    return this.parent.posBeforeChild(this);
                                },
                            },
                            {
                                key: "posAtStart",
                                get: function () {
                                    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
                                },
                            },
                            {
                                key: "posAfter",
                                get: function () {
                                    return this.posBefore + this.size;
                                },
                            },
                            {
                                key: "posAtEnd",
                                get: function () {
                                    return this.posAtStart + this.size - 2 * this.border;
                                },
                            },
                            {
                                key: "localPosFromDOM",
                                value: function (e, t, n) {
                                    if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                                        if (n < 0) {
                                            if (e == this.contentDOM) o = e.childNodes[t - 1];
                                            else {
                                                for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                                                o = e.previousSibling;
                                            }
                                            for (; o && !((r = o.pmViewDesc) && r.parent == this); ) o = o.previousSibling;
                                            return o ? this.posBeforeChild(r) + r.size : this.posAtStart;
                                        }
                                        if (e == this.contentDOM) i = e.childNodes[t];
                                        else {
                                            for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                                            i = e.nextSibling;
                                        }
                                        for (; i && !((s = i.pmViewDesc) && s.parent == this); ) i = i.nextSibling;
                                        return i ? this.posBeforeChild(s) : this.posAtEnd;
                                    }
                                    if (e == this.dom && this.contentDOM) a = t > b(this.contentDOM);
                                    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) a = 2 & e.compareDocumentPosition(this.contentDOM);
                                    else if (this.dom.firstChild) {
                                        if (0 == t)
                                            for (var o, r, i, s, a, l = e; ; l = l.parentNode) {
                                                if (l == this.dom) {
                                                    a = !1;
                                                    break;
                                                }
                                                if (l.previousSibling) break;
                                            }
                                        if (null == a && t == e.childNodes.length)
                                            for (var c = e; ; c = c.parentNode) {
                                                if (c == this.dom) {
                                                    a = !0;
                                                    break;
                                                }
                                                if (c.nextSibling) break;
                                            }
                                    }
                                    return (null == a ? n > 0 : a) ? this.posAtEnd : this.posAtStart;
                                },
                            },
                            {
                                key: "nearestDesc",
                                value: function (e) {
                                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !0, o = e; o; o = o.parentNode) {
                                        var r = this.getDesc(o),
                                            i = void 0;
                                        if (r && (!t || r.node)) {
                                            if (!n || !(i = r.nodeDOM) || (1 == i.nodeType ? i.contains(1 == e.nodeType ? e : e.parentNode) : i == e)) return r;
                                            n = !1;
                                        }
                                    }
                                },
                            },
                            {
                                key: "getDesc",
                                value: function (e) {
                                    for (var t = e.pmViewDesc, n = t; n; n = n.parent) if (n == this) return t;
                                },
                            },
                            {
                                key: "posFromDOM",
                                value: function (e, t, n) {
                                    for (var o = e; o; o = o.parentNode) {
                                        var r = this.getDesc(o);
                                        if (r) return r.localPosFromDOM(e, t, n);
                                    }
                                    return -1;
                                },
                            },
                            {
                                key: "descAt",
                                value: function (e) {
                                    for (var t = 0, n = 0; t < this.children.length; t++) {
                                        var o = this.children[t],
                                            r = n + o.size;
                                        if (n == e && r != n) {
                                            for (; !o.border && o.children.length; ) o = o.children[0];
                                            return o;
                                        }
                                        if (e < r) return o.descAt(e - n - o.border);
                                        n = r;
                                    }
                                },
                            },
                            {
                                key: "domFromPos",
                                value: function (e, t) {
                                    if (!this.contentDOM) return { node: this.dom, offset: 0, atom: e + 1 };
                                    for (var n = 0, o = 0, r = 0; n < this.children.length; n++) {
                                        var i = this.children[n],
                                            s = r + i.size;
                                        if (s > e || i instanceof ek) {
                                            o = e - r;
                                            break;
                                        }
                                        r = s;
                                    }
                                    if (o) return this.children[n].domFromPos(o - this.children[n].border, t);
                                    for (; n && !(a = this.children[n - 1]).size && a instanceof ep && a.side >= 0; n--);
                                    if (t <= 0) {
                                        for (var a, l, c = !0; (l = n ? this.children[n - 1] : null) && l.dom.parentNode != this.contentDOM; n--, c = !1);
                                        return l && t && c && !l.border && !l.domAtom ? l.domFromPos(l.size, t) : { node: this.contentDOM, offset: l ? b(l.dom) + 1 : 0 };
                                    }
                                    for (var d, u = !0; (d = n < this.children.length ? this.children[n] : null) && d.dom.parentNode != this.contentDOM; n++, u = !1);
                                    return d && u && !d.border && !d.domAtom ? d.domFromPos(0, t) : { node: this.contentDOM, offset: d ? b(d.dom) : this.contentDOM.childNodes.length };
                                },
                            },
                            {
                                key: "parseRange",
                                value: function (e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                    if (0 == this.children.length) return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
                                    for (var o = -1, r = -1, i = n, s = 0; ; s++) {
                                        var a = this.children[s],
                                            l = i + a.size;
                                        if (-1 == o && e <= l) {
                                            var c = i + a.border;
                                            if (e >= c && t <= l - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, c);
                                            e = i;
                                            for (var d = s; d > 0; d--) {
                                                var u = this.children[d - 1];
                                                if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(1)) {
                                                    o = b(u.dom) + 1;
                                                    break;
                                                }
                                                e -= u.size;
                                            }
                                            -1 == o && (o = 0);
                                        }
                                        if (o > -1 && (l > t || s == this.children.length - 1)) {
                                            t = l;
                                            for (var f = s + 1; f < this.children.length; f++) {
                                                var h = this.children[f];
                                                if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
                                                    r = b(h.dom);
                                                    break;
                                                }
                                                t += h.size;
                                            }
                                            -1 == r && (r = this.contentDOM.childNodes.length);
                                            break;
                                        }
                                        i = l;
                                    }
                                    return { node: this.contentDOM, from: e, to: t, fromOffset: o, toOffset: r };
                                },
                            },
                            {
                                key: "emptyChildAt",
                                value: function (e) {
                                    if (this.border || !this.contentDOM || !this.children.length) return !1;
                                    var t = this.children[e < 0 ? 0 : this.children.length - 1];
                                    return 0 == t.size || t.emptyChildAt(e);
                                },
                            },
                            {
                                key: "domAfterPos",
                                value: function (e) {
                                    var t = this.domFromPos(e, 0),
                                        n = t.node,
                                        o = t.offset;
                                    if (1 != n.nodeType || o == n.childNodes.length) throw RangeError("No node after pos " + e);
                                    return n.childNodes[o];
                                },
                            },
                            {
                                key: "setSelection",
                                value: function (e, t, n) {
                                    for (var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = Math.min(e, t), i = Math.max(e, t), s = 0, a = 0; s < this.children.length; s++) {
                                        var l = this.children[s],
                                            c = a + l.size;
                                        if (r > a && i < c) return l.setSelection(e - a - l.border, t - a - l.border, n, o);
                                        a = c;
                                    }
                                    var d = this.domFromPos(e, e ? -1 : 1),
                                        u = t == e ? d : this.domFromPos(t, t ? -1 : 1),
                                        f = n.getSelection(),
                                        h = !1;
                                    if ((L || _) && e == t) {
                                        var p = d,
                                            m = p.node,
                                            v = p.offset;
                                        if (3 == m.nodeType) {
                                            if ((h = !!(v && "\n" == m.nodeValue[v - 1])) && v == m.nodeValue.length)
                                                for (var g, y = m; y; y = y.parentNode) {
                                                    if ((g = y.nextSibling)) {
                                                        "BR" == g.nodeName && (d = u = { node: g.parentNode, offset: b(g) + 1 });
                                                        break;
                                                    }
                                                    var k = y.pmViewDesc;
                                                    if (k && k.node && k.node.isBlock) break;
                                                }
                                        } else {
                                            var w = m.childNodes[v - 1];
                                            h = w && ("BR" == w.nodeName || "false" == w.contentEditable);
                                        }
                                    }
                                    if (L && f.focusNode && f.focusNode != u.node && 1 == f.focusNode.nodeType) {
                                        var S = f.focusNode.childNodes[f.focusOffset];
                                        S && "false" == S.contentEditable && (o = !0);
                                    }
                                    if (!(!(o || (h && _)) && D(d.node, d.offset, f.anchorNode, f.anchorOffset) && D(u.node, u.offset, f.focusNode, f.focusOffset))) {
                                        var N = !1;
                                        if ((f.extend || e == t) && !h) {
                                            f.collapse(d.node, d.offset);
                                            try {
                                                e != t && f.extend(u.node, u.offset), (N = !0);
                                            } catch (e) {}
                                        }
                                        if (!N) {
                                            if (e > t) {
                                                var O = d;
                                                (d = u), (u = O);
                                            }
                                            var C = document.createRange();
                                            C.setEnd(u.node, u.offset), C.setStart(d.node, d.offset), f.removeAllRanges(), f.addRange(C);
                                        }
                                    }
                                },
                            },
                            {
                                key: "ignoreMutation",
                                value: function (e) {
                                    return !this.contentDOM && "selection" != e.type;
                                },
                            },
                            {
                                key: "contentLost",
                                get: function () {
                                    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
                                },
                            },
                            {
                                key: "markDirty",
                                value: function (e, t) {
                                    for (var n = 0, o = 0; o < this.children.length; o++) {
                                        var r = this.children[o],
                                            i = n + r.size;
                                        if (n == i ? e <= i && t >= n : e < i && t > n) {
                                            var s = n + r.border,
                                                a = i - r.border;
                                            if (e >= s && t <= a) {
                                                (this.dirty = e == n || t == i ? 2 : 1), e == s && t == a && (r.contentLost || r.dom.parentNode != this.contentDOM) ? (r.dirty = 3) : r.markDirty(e - s, t - s);
                                                return;
                                            }
                                            r.dirty = r.dom != r.contentDOM || r.dom.parentNode != this.contentDOM || r.children.length ? 3 : 2;
                                        }
                                        n = i;
                                    }
                                    this.dirty = 2;
                                },
                            },
                            {
                                key: "markParentsDirty",
                                value: function () {
                                    for (var e = 1, t = this.parent; t; t = t.parent, e++) {
                                        var n = 1 == e ? 2 : 1;
                                        t.dirty < n && (t.dirty = n);
                                    }
                                },
                            },
                            {
                                key: "domAtom",
                                get: function () {
                                    return !1;
                                },
                            },
                            {
                                key: "ignoreForCoords",
                                get: function () {
                                    return !1;
                                },
                            },
                            {
                                key: "isText",
                                value: function (e) {
                                    return !1;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                ep = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i) {
                        h(this, n);
                        var s,
                            a,
                            l = o.type.toDOM;
                        if (
                            ("function" == typeof l &&
                                (l = l(r, function () {
                                    return a ? (a.parent ? a.parent.posBeforeChild(a) : void 0) : i;
                                })),
                            !o.type.spec.raw)
                        ) {
                            if (1 != l.nodeType) {
                                var c = document.createElement("span");
                                c.appendChild(l), (l = c);
                            }
                            (l.contentEditable = "false"), l.classList.add("ProseMirror-widget");
                        }
                        return ((s = t.call(this, e, [], l, null)).widget = o), (s.widget = o), (a = d(s)), s;
                    }
                    return (
                        m(n, [
                            {
                                key: "matchesWidget",
                                value: function (e) {
                                    return 0 == this.dirty && e.type.eq(this.widget.type);
                                },
                            },
                            {
                                key: "parseRule",
                                value: function () {
                                    return { ignore: !0 };
                                },
                            },
                            {
                                key: "stopEvent",
                                value: function (e) {
                                    var t = this.widget.spec.stopEvent;
                                    return !!t && t(e);
                                },
                            },
                            {
                                key: "ignoreMutation",
                                value: function (e) {
                                    return "selection" != e.type || this.widget.spec.ignoreSelection;
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.widget.type.destroy(this.dom), s(u(n.prototype), "destroy", this).call(this);
                                },
                            },
                            {
                                key: "domAtom",
                                get: function () {
                                    return !0;
                                },
                            },
                            {
                                key: "side",
                                get: function () {
                                    return this.widget.type.side;
                                },
                            },
                        ]),
                        n
                    );
                })(eh),
                em = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i) {
                        var s;
                        return h(this, n), ((s = t.call(this, e, [], o, null)).textDOM = r), (s.text = i), s;
                    }
                    return (
                        m(n, [
                            {
                                key: "size",
                                get: function () {
                                    return this.text.length;
                                },
                            },
                            {
                                key: "localPosFromDOM",
                                value: function (e, t) {
                                    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
                                },
                            },
                            {
                                key: "domFromPos",
                                value: function (e) {
                                    return { node: this.textDOM, offset: e };
                                },
                            },
                            {
                                key: "ignoreMutation",
                                value: function (e) {
                                    return "characterData" === e.type && e.target.nodeValue == e.oldValue;
                                },
                            },
                        ]),
                        n
                    );
                })(eh),
                ev = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i) {
                        var s;
                        return h(this, n), ((s = t.call(this, e, [], r, i)).mark = o), s;
                    }
                    return (
                        m(
                            n,
                            [
                                {
                                    key: "parseRule",
                                    value: function () {
                                        return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
                                    },
                                },
                                {
                                    key: "matchesMark",
                                    value: function (e) {
                                        return 3 != this.dirty && this.mark.eq(e);
                                    },
                                },
                                {
                                    key: "markDirty",
                                    value: function (e, t) {
                                        if ((s(u(n.prototype), "markDirty", this).call(this, e, t), 0 != this.dirty)) {
                                            for (var o = this.parent; !o.node; ) o = o.parent;
                                            o.dirty < this.dirty && (o.dirty = this.dirty), (this.dirty = 0);
                                        }
                                    },
                                },
                                {
                                    key: "slice",
                                    value: function (e, t, o) {
                                        var r = n.create(this.parent, this.mark, !0, o),
                                            i = this.children,
                                            s = this.size;
                                        t < s && (i = eP(i, t, s, o)), e > 0 && (i = eP(i, 0, e, o));
                                        for (var a = 0; a < i.length; a++) i[a].parent = r;
                                        return (r.children = i), r;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "create",
                                    value: function (e, t, o, r) {
                                        var i = r.nodeViews[t.type.name],
                                            s = i && i(t, r, o);
                                        return (s && s.dom) || (s = g.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t, o), null, t.attrs)), new n(e, t, s.dom, s.contentDOM || s.dom);
                                    },
                                },
                            ]
                        ),
                        n
                    );
                })(eh),
                eg = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i, s, a, l, c, d) {
                        var u;
                        return h(this, n), ((u = t.call(this, e, [], s, a)).node = o), (u.outerDeco = r), (u.innerDeco = i), (u.nodeDOM = l), u;
                    }
                    return (
                        m(
                            n,
                            [
                                {
                                    key: "parseRule",
                                    value: function () {
                                        var e = this;
                                        if (this.node.type.spec.reparseInView) return null;
                                        var t = { node: this.node.type.name, attrs: this.node.attrs };
                                        if (("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"), this.contentDOM)) {
                                            if (this.contentLost) {
                                                for (var n = this.children.length - 1; n >= 0; n--) {
                                                    var o = this.children[n];
                                                    if (this.dom.contains(o.dom.parentNode)) {
                                                        t.contentElement = o.dom.parentNode;
                                                        break;
                                                    }
                                                }
                                                t.contentElement ||
                                                    (t.getContent = function () {
                                                        return g.Fragment.empty;
                                                    });
                                            } else t.contentElement = this.contentDOM;
                                        } else
                                            t.getContent = function () {
                                                return e.node.content;
                                            };
                                        return t;
                                    },
                                },
                                {
                                    key: "matchesNode",
                                    value: function (e, t, n) {
                                        return 0 == this.dirty && e.eq(this.node) && eM(t, this.outerDeco) && n.eq(this.innerDeco);
                                    },
                                },
                                {
                                    key: "size",
                                    get: function () {
                                        return this.node.nodeSize;
                                    },
                                },
                                {
                                    key: "border",
                                    get: function () {
                                        return this.node.isLeaf ? 0 : 1;
                                    },
                                },
                                {
                                    key: "updateChildren",
                                    value: function (e, t) {
                                        var n = this,
                                            o = this.node.inlineContent,
                                            r = t,
                                            i = e.composing ? this.localCompositionInfo(e, t) : null,
                                            s = i && i.pos > -1 ? i : null,
                                            a = i && i.pos < 0,
                                            l = new eT(this, s && s.node, e);
                                        (function (e, t, n, o) {
                                            var r = t.locals(e),
                                                i = 0;
                                            if (0 == r.length) {
                                                for (var s = 0; s < e.childCount; s++) {
                                                    var a = e.child(s);
                                                    o(a, r, t.forChild(i, a), s), (i += a.nodeSize);
                                                }
                                                return;
                                            }
                                            for (var l = 0, c = [], d = null, u = 0; ; ) {
                                                for (var f = void 0, h = void 0; l < r.length && r[l].to == i; ) {
                                                    var p = r[l++];
                                                    p.widget && (f ? (h || (h = [f])).push(p) : (f = p));
                                                }
                                                if (f) {
                                                    if (h) {
                                                        h.sort(eE);
                                                        for (var m = 0; m < h.length; m++) n(h[m], u, !!d);
                                                    } else n(f, u, !!d);
                                                }
                                                var v = void 0,
                                                    g = void 0;
                                                if (d) (g = -1), (v = d), (d = null);
                                                else if (u < e.childCount) (g = u), (v = e.child(u++));
                                                else break;
                                                for (var y = 0; y < c.length; y++) c[y].to <= i && c.splice(y--, 1);
                                                for (; l < r.length && r[l].from <= i && r[l].to > i; ) c.push(r[l++]);
                                                var b = i + v.nodeSize;
                                                if (v.isText) {
                                                    var k = b;
                                                    l < r.length && r[l].from < k && (k = r[l].from);
                                                    for (var w = 0; w < c.length; w++) c[w].to < k && (k = c[w].to);
                                                    k < b && ((d = v.cut(k - i)), (v = v.cut(0, k - i)), (b = k), (g = -1));
                                                } else for (; l < r.length && r[l].to < b; ) l++;
                                                var S =
                                                    v.isInline && !v.isLeaf
                                                        ? c.filter(function (e) {
                                                              return !e.inline;
                                                          })
                                                        : c.slice();
                                                o(v, S, t.forChild(i, v), g), (i = b);
                                            }
                                        })(
                                            this.node,
                                            this.innerDeco,
                                            function (t, i, s) {
                                                t.spec.marks ? l.syncToMarks(t.spec.marks, o, e) : t.type.side >= 0 && !s && l.syncToMarks(i == n.node.childCount ? g.Mark.none : n.node.child(i).marks, o, e), l.placeWidget(t, e, r);
                                            },
                                            function (t, n, s, c) {
                                                var d;
                                                l.syncToMarks(t.marks, o, e),
                                                    l.findNodeMatch(t, n, s, c) ||
                                                        (a && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (d = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(t, n, s, d, e)) ||
                                                        l.updateNextNode(t, n, s, e, c, r) ||
                                                        l.addNode(t, n, s, e, r),
                                                    (r += t.nodeSize);
                                            }
                                        ),
                                            l.syncToMarks([], o, e),
                                            this.node.isTextblock && l.addTextblockHacks(),
                                            l.destroyRest(),
                                            (l.changed || 2 == this.dirty) &&
                                                (s && this.protectLocalComposition(e, s),
                                                (function e(t, n, o) {
                                                    for (var r = t.firstChild, i = !1, s = 0; s < n.length; s++) {
                                                        var a = n[s],
                                                            l = a.dom;
                                                        if (l.parentNode == t) {
                                                            for (; l != r; ) (r = ex(r)), (i = !0);
                                                            r = r.nextSibling;
                                                        } else (i = !0), t.insertBefore(l, r);
                                                        if (a instanceof ev) {
                                                            var c = r ? r.previousSibling : t.lastChild;
                                                            e(a.contentDOM, a.children, o), (r = c ? c.nextSibling : t.firstChild);
                                                        }
                                                    }
                                                    for (; r; ) (r = ex(r)), (i = !0);
                                                    i && o.trackWrites == t && (o.trackWrites = null);
                                                })(this.contentDOM, this.children, e),
                                                W &&
                                                    (function (e) {
                                                        if ("UL" == e.nodeName || "OL" == e.nodeName) {
                                                            var t = e.style.cssText;
                                                            (e.style.cssText = t + "; list-style: square !important"), window.getComputedStyle(e).listStyle, (e.style.cssText = t);
                                                        }
                                                    })(this.dom));
                                    },
                                },
                                {
                                    key: "localCompositionInfo",
                                    value: function (e, t) {
                                        var n = e.state.selection,
                                            o = n.from,
                                            r = n.to;
                                        if (!(e.state.selection instanceof v.TextSelection) || o < t || r > t + this.node.content.size) return null;
                                        var i = e.input.compositionNode;
                                        if (!i || !this.dom.contains(i.parentNode)) return null;
                                        if (!this.node.inlineContent) return { node: i, pos: -1, text: "" };
                                        var s = i.nodeValue,
                                            a = (function (e, t, n, o) {
                                                for (var r = 0, i = 0; r < e.childCount && i <= o; ) {
                                                    var s = e.child(r++),
                                                        a = i;
                                                    if (((i += s.nodeSize), s.isText)) {
                                                        for (var l = s.text; r < e.childCount; ) {
                                                            var c = e.child(r++);
                                                            if (((i += c.nodeSize), !c.isText)) break;
                                                            l += c.text;
                                                        }
                                                        if (i >= n) {
                                                            if (i >= o && l.slice(o - t.length - a, o - a) == t) return o - t.length;
                                                            var d = a < o ? l.lastIndexOf(t, o - a - 1) : -1;
                                                            if (d >= 0 && d + t.length + a >= n) return a + d;
                                                            if (n == o && l.length >= o + t.length - a && l.slice(o - a, o - a + t.length) == t) return o;
                                                        }
                                                    }
                                                }
                                                return -1;
                                            })(this.node.content, s, o - t, r - t);
                                        return a < 0 ? null : { node: i, pos: a, text: s };
                                    },
                                },
                                {
                                    key: "protectLocalComposition",
                                    value: function (e, t) {
                                        var n = t.node,
                                            o = t.pos,
                                            r = t.text;
                                        if (!this.getDesc(n)) {
                                            for (var i = n; i.parentNode != this.contentDOM; i = i.parentNode) {
                                                for (; i.previousSibling; ) i.parentNode.removeChild(i.previousSibling);
                                                for (; i.nextSibling; ) i.parentNode.removeChild(i.nextSibling);
                                                i.pmViewDesc && (i.pmViewDesc = void 0);
                                            }
                                            var s = new em(this, i, n, r);
                                            e.input.compositionNodes.push(s), (this.children = eP(this.children, o, o + r.length, e, s));
                                        }
                                    },
                                },
                                {
                                    key: "update",
                                    value: function (e, t, n, o) {
                                        return !!(3 != this.dirty && e.sameMarkup(this.node)) && (this.updateInner(e, t, n, o), !0);
                                    },
                                },
                                {
                                    key: "updateInner",
                                    value: function (e, t, n, o) {
                                        this.updateOuterDeco(t), (this.node = e), (this.innerDeco = n), this.contentDOM && this.updateChildren(o, this.posAtStart), (this.dirty = 0);
                                    },
                                },
                                {
                                    key: "updateOuterDeco",
                                    value: function (e) {
                                        if (!eM(e, this.outerDeco)) {
                                            var t = 1 != this.nodeDOM.nodeType,
                                                n = this.dom;
                                            (this.dom = eO(this.dom, this.nodeDOM, eD(this.outerDeco, this.node, t), eD(e, this.node, t))), this.dom != n && ((n.pmViewDesc = void 0), (this.dom.pmViewDesc = this)), (this.outerDeco = e);
                                        }
                                    },
                                },
                                {
                                    key: "selectNode",
                                    value: function () {
                                        1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
                                    },
                                },
                                {
                                    key: "deselectNode",
                                    value: function () {
                                        1 == this.nodeDOM.nodeType && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
                                    },
                                },
                                {
                                    key: "domAtom",
                                    get: function () {
                                        return this.node.isAtom;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "create",
                                    value: function (e, t, o, r, i, s) {
                                        var a,
                                            l = i.nodeViews[t.type.name],
                                            c =
                                                l &&
                                                l(
                                                    t,
                                                    i,
                                                    function () {
                                                        return a ? (a.parent ? a.parent.posBeforeChild(a) : void 0) : s;
                                                    },
                                                    o,
                                                    r
                                                ),
                                            d = c && c.dom,
                                            u = c && c.contentDOM;
                                        if (t.isText) {
                                            if (d) {
                                                if (3 != d.nodeType) throw RangeError("Text must be rendered as a DOM text node");
                                            } else d = document.createTextNode(t.text);
                                        } else if (!d) {
                                            var f = g.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs);
                                            (d = f.dom), (u = f.contentDOM);
                                        }
                                        u || t.isText || "BR" == d.nodeName || (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
                                        var h = d;
                                        return ((d = eC(d, o, t)), c) ? (a = new ew(e, t, o, r, d, u || null, h, c, i, s + 1)) : t.isText ? new eb(e, t, o, r, d, h, i) : new n(e, t, o, r, d, u || null, h, i, s + 1);
                                    },
                                },
                            ]
                        ),
                        n
                    );
                })(eh);
            function ey(e, t, n, o, r) {
                eC(o, t, e);
                var i = new eg(void 0, e, t, n, o, o, o, r, 0);
                return i.contentDOM && i.updateChildren(r, 0), i;
            }
            var eb = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i, s, a, l) {
                        return h(this, n), t.call(this, e, o, r, i, s, null, a, l, 0);
                    }
                    return (
                        m(n, [
                            {
                                key: "parseRule",
                                value: function () {
                                    for (var e = this.nodeDOM.parentNode; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
                                    return { skip: e || !0 };
                                },
                            },
                            {
                                key: "update",
                                value: function (e, t, n, o) {
                                    return (
                                        !!(3 != this.dirty && (0 == this.dirty || this.inParent()) && e.sameMarkup(this.node)) &&
                                        (this.updateOuterDeco(t),
                                        (0 != this.dirty || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && ((this.nodeDOM.nodeValue = e.text), o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
                                        (this.node = e),
                                        (this.dirty = 0),
                                        !0)
                                    );
                                },
                            },
                            {
                                key: "inParent",
                                value: function () {
                                    for (var e = this.parent.contentDOM, t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
                                    return !1;
                                },
                            },
                            {
                                key: "domFromPos",
                                value: function (e) {
                                    return { node: this.nodeDOM, offset: e };
                                },
                            },
                            {
                                key: "localPosFromDOM",
                                value: function (e, t, o) {
                                    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : s(u(n.prototype), "localPosFromDOM", this).call(this, e, t, o);
                                },
                            },
                            {
                                key: "ignoreMutation",
                                value: function (e) {
                                    return "characterData" != e.type && "selection" != e.type;
                                },
                            },
                            {
                                key: "slice",
                                value: function (e, t, o) {
                                    var r = this.node.cut(e, t),
                                        i = document.createTextNode(r.text);
                                    return new n(this.parent, r, this.outerDeco, this.innerDeco, i, i, o);
                                },
                            },
                            {
                                key: "markDirty",
                                value: function (e, t) {
                                    s(u(n.prototype), "markDirty", this).call(this, e, t), this.dom != this.nodeDOM && (0 == e || t == this.nodeDOM.nodeValue.length) && (this.dirty = 3);
                                },
                            },
                            {
                                key: "domAtom",
                                get: function () {
                                    return !1;
                                },
                            },
                            {
                                key: "isText",
                                value: function (e) {
                                    return this.node.text == e;
                                },
                            },
                        ]),
                        n
                    );
                })(eg),
                ek = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n() {
                        return h(this, n), t.apply(this, arguments);
                    }
                    return (
                        m(n, [
                            {
                                key: "parseRule",
                                value: function () {
                                    return { ignore: !0 };
                                },
                            },
                            {
                                key: "matchesHack",
                                value: function (e) {
                                    return 0 == this.dirty && this.dom.nodeName == e;
                                },
                            },
                            {
                                key: "domAtom",
                                get: function () {
                                    return !0;
                                },
                            },
                            {
                                key: "ignoreForCoords",
                                get: function () {
                                    return "IMG" == this.dom.nodeName;
                                },
                            },
                        ]),
                        n
                    );
                })(eh),
                ew = (function (e) {
                    a(n, e);
                    var t = c(n);
                    function n(e, o, r, i, s, a, l, c, d, u) {
                        var f;
                        return h(this, n), ((f = t.call(this, e, o, r, i, s, a, l, d, u)).spec = c), f;
                    }
                    return (
                        m(n, [
                            {
                                key: "update",
                                value: function (e, t, o, r) {
                                    if (3 == this.dirty) return !1;
                                    if (this.spec.update) {
                                        var i = this.spec.update(e, t, o);
                                        return i && this.updateInner(e, t, o, r), i;
                                    }
                                    return (!!this.contentDOM || !!e.isLeaf) && s(u(n.prototype), "update", this).call(this, e, t, o, r);
                                },
                            },
                            {
                                key: "selectNode",
                                value: function () {
                                    this.spec.selectNode ? this.spec.selectNode() : s(u(n.prototype), "selectNode", this).call(this);
                                },
                            },
                            {
                                key: "deselectNode",
                                value: function () {
                                    this.spec.deselectNode ? this.spec.deselectNode() : s(u(n.prototype), "deselectNode", this).call(this);
                                },
                            },
                            {
                                key: "setSelection",
                                value: function (e, t, o, r) {
                                    this.spec.setSelection ? this.spec.setSelection(e, t, o) : s(u(n.prototype), "setSelection", this).call(this, e, t, o, r);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.spec.destroy && this.spec.destroy(), s(u(n.prototype), "destroy", this).call(this);
                                },
                            },
                            {
                                key: "stopEvent",
                                value: function (e) {
                                    return !!this.spec.stopEvent && this.spec.stopEvent(e);
                                },
                            },
                            {
                                key: "ignoreMutation",
                                value: function (e) {
                                    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : s(u(n.prototype), "ignoreMutation", this).call(this, e);
                                },
                            },
                        ]),
                        n
                    );
                })(eg),
                eS = function (e) {
                    e && (this.nodeName = e);
                };
            eS.prototype = Object.create(null);
            var eN = [new eS()];
            function eD(e, t, n) {
                if (0 == e.length) return eN;
                for (var o = n ? eN[0] : new eS(), r = [o], i = 0; i < e.length; i++) {
                    var s = e[i].type.attrs;
                    if (s)
                        for (var a in (s.nodeName && r.push((o = new eS(s.nodeName))), s)) {
                            var l = s[a];
                            null != l &&
                                (n && 1 == r.length && r.push((o = new eS(t.isInline ? "span" : "div"))),
                                "class" == a ? (o.class = (o.class ? o.class + " " : "") + l) : "style" == a ? (o.style = (o.style ? o.style + ";" : "") + l) : "nodeName" != a && (o[a] = l));
                        }
                }
                return r;
            }
            function eO(e, t, n, o) {
                if (n == eN && o == eN) return t;
                for (var r = t, i = 0; i < o.length; i++) {
                    var s = o[i],
                        a = n[i];
                    if (i) {
                        var l = void 0;
                        (a && a.nodeName == s.nodeName && r != e && (l = r.parentNode) && l.nodeName.toLowerCase() == s.nodeName) || (((l = document.createElement(s.nodeName)).pmIsDeco = !0), l.appendChild(r), (a = eN[0])), (r = l);
                    }
                    !(function (e, t, n) {
                        for (var o in t) "class" == o || "style" == o || "nodeName" == o || o in n || e.removeAttribute(o);
                        for (var r in n) "class" != r && "style" != r && "nodeName" != r && n[r] != t[r] && e.setAttribute(r, n[r]);
                        if (t.class != n.class) {
                            for (var i = t.class ? t.class.split(" ").filter(Boolean) : [], s = n.class ? n.class.split(" ").filter(Boolean) : [], a = 0; a < i.length; a++) -1 == s.indexOf(i[a]) && e.classList.remove(i[a]);
                            for (var l = 0; l < s.length; l++) -1 == i.indexOf(s[l]) && e.classList.add(s[l]);
                            0 == e.classList.length && e.removeAttribute("class");
                        }
                        if (t.style != n.style) {
                            if (t.style) for (var c, d = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; (c = d.exec(t.style)); ) e.style.removeProperty(c[1]);
                            n.style && (e.style.cssText += n.style);
                        }
                    })(r, a || eN[0], s);
                }
                return r;
            }
            function eC(e, t, n) {
                return eO(e, e, eN, eD(t, n, 1 != e.nodeType));
            }
            function eM(e, t) {
                if (e.length != t.length) return !1;
                for (var n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
                return !0;
            }
            function ex(e) {
                var t = e.nextSibling;
                return e.parentNode.removeChild(e), t;
            }
            var eT = (function () {
                function e(t, n, o) {
                    h(this, e),
                        (this.lock = n),
                        (this.view = o),
                        (this.index = 0),
                        (this.stack = []),
                        (this.changed = !1),
                        (this.top = t),
                        (this.preMatch = (function (e, t) {
                            var n = t,
                                o = n.children.length,
                                r = e.childCount,
                                i = new Map(),
                                s = [];
                            e: for (; r > 0; ) {
                                for (var a = void 0; ; )
                                    if (o) {
                                        var l = n.children[o - 1];
                                        if (l instanceof ev) (n = l), (o = l.children.length);
                                        else {
                                            (a = l), o--;
                                            break;
                                        }
                                    } else if (n == t) break e;
                                    else (o = n.parent.children.indexOf(n)), (n = n.parent);
                                var c = a.node;
                                if (c) {
                                    if (c != e.child(r - 1)) break;
                                    --r, i.set(a, r), s.push(a);
                                }
                            }
                            return { index: r, matched: i, matches: s.reverse() };
                        })(t.node.content, t));
                }
                return (
                    m(e, [
                        {
                            key: "destroyBetween",
                            value: function (e, t) {
                                if (e != t) {
                                    for (var n = e; n < t; n++) this.top.children[n].destroy();
                                    this.top.children.splice(e, t - e), (this.changed = !0);
                                }
                            },
                        },
                        {
                            key: "destroyRest",
                            value: function () {
                                this.destroyBetween(this.index, this.top.children.length);
                            },
                        },
                        {
                            key: "syncToMarks",
                            value: function (e, t, n) {
                                for (var o = 0, r = this.stack.length >> 1, i = Math.min(r, e.length); o < i && (o == r - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(e[o]) && !1 !== e[o].type.spec.spanning; ) o++;
                                for (; o < r; ) this.destroyRest(), (this.top.dirty = 0), (this.index = this.stack.pop()), (this.top = this.stack.pop()), r--;
                                for (; r < e.length; ) {
                                    this.stack.push(this.top, this.index + 1);
                                    for (var s = -1, a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                                        var l = this.top.children[a];
                                        if (l.matchesMark(e[r]) && !this.isLocked(l.dom)) {
                                            s = a;
                                            break;
                                        }
                                    }
                                    if (s > -1) s > this.index && ((this.changed = !0), this.destroyBetween(this.index, s)), (this.top = this.top.children[this.index]);
                                    else {
                                        var c = ev.create(this.top, e[r], t, n);
                                        this.top.children.splice(this.index, 0, c), (this.top = c), (this.changed = !0);
                                    }
                                    (this.index = 0), r++;
                                }
                            },
                        },
                        {
                            key: "findNodeMatch",
                            value: function (e, t, n, o) {
                                var r,
                                    i = -1;
                                if (o >= this.preMatch.index && (r = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && r.matchesNode(e, t, n)) i = this.top.children.indexOf(r, this.index);
                                else
                                    for (var s = this.index, a = Math.min(this.top.children.length, s + 5); s < a; s++) {
                                        var l = this.top.children[s];
                                        if (l.matchesNode(e, t, n) && !this.preMatch.matched.has(l)) {
                                            i = s;
                                            break;
                                        }
                                    }
                                return !(i < 0) && (this.destroyBetween(this.index, i), this.index++, !0);
                            },
                        },
                        {
                            key: "updateNodeAt",
                            value: function (e, t, n, o, r) {
                                var i = this.top.children[o];
                                return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2), !!i.update(e, t, n, r) && (this.destroyBetween(this.index, o), this.index++, !0);
                            },
                        },
                        {
                            key: "findIndexWithChild",
                            value: function (e) {
                                for (;;) {
                                    var t = e.parentNode;
                                    if (!t) return -1;
                                    if (t == this.top.contentDOM) {
                                        var n = e.pmViewDesc;
                                        if (n) {
                                            for (var o = this.index; o < this.top.children.length; o++) if (this.top.children[o] == n) return o;
                                        }
                                        return -1;
                                    }
                                    e = t;
                                }
                            },
                        },
                        {
                            key: "updateNextNode",
                            value: function (e, t, n, o, r, i) {
                                for (var s = this.index; s < this.top.children.length; s++) {
                                    var a = this.top.children[s];
                                    if (a instanceof eg) {
                                        var l = this.preMatch.matched.get(a);
                                        if (null != l && l != r) return !1;
                                        var c = a.dom,
                                            d = void 0,
                                            u = this.isLocked(c) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && 3 != a.dirty && eM(t, a.outerDeco));
                                        if (!u && a.update(e, t, n, o)) return this.destroyBetween(this.index, s), a.dom != c && (this.changed = !0), this.index++, !0;
                                        if (!u && (d = this.recreateWrapper(a, e, t, n, o, i)))
                                            return (this.top.children[this.index] = d), d.contentDOM && ((d.dirty = 2), d.updateChildren(o, i + 1), (d.dirty = 0)), (this.changed = !0), this.index++, !0;
                                        break;
                                    }
                                }
                                return !1;
                            },
                        },
                        {
                            key: "recreateWrapper",
                            value: function (e, t, n, r, i, s) {
                                if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
                                var a = eg.create(this.top, t, n, r, i, s);
                                if (a.contentDOM) {
                                    (a.children = e.children), (e.children = []);
                                    var l,
                                        c = o(a.children);
                                    try {
                                        for (c.s(); !(l = c.n()).done; ) l.value.parent = a;
                                    } catch (e) {
                                        c.e(e);
                                    } finally {
                                        c.f();
                                    }
                                }
                                return e.destroy(), a;
                            },
                        },
                        {
                            key: "addNode",
                            value: function (e, t, n, o, r) {
                                var i = eg.create(this.top, e, t, n, o, r);
                                i.contentDOM && i.updateChildren(o, r + 1), this.top.children.splice(this.index++, 0, i), (this.changed = !0);
                            },
                        },
                        {
                            key: "placeWidget",
                            value: function (e, t, n) {
                                var o = this.index < this.top.children.length ? this.top.children[this.index] : null;
                                if (o && o.matchesWidget(e) && (e == o.widget || !o.widget.type.toDOM.parentNode)) this.index++;
                                else {
                                    var r = new ep(this.top, e, t, n);
                                    this.top.children.splice(this.index++, 0, r), (this.changed = !0);
                                }
                            },
                        },
                        {
                            key: "addTextblockHacks",
                            value: function () {
                                for (var e = this.top.children[this.index - 1], t = this.top; e instanceof ev; ) e = (t = e).children[t.children.length - 1];
                                (!e || !(e instanceof eb) || /\n$/.test(e.node.text) || (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
                                    ((_ || K) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
                            },
                        },
                        {
                            key: "addHackNode",
                            value: function (e, t) {
                                if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
                                else {
                                    var n = document.createElement(e);
                                    "IMG" == e && ((n.className = "ProseMirror-separator"), (n.alt = "")), "BR" == e && (n.className = "ProseMirror-trailingBreak");
                                    var o = new ek(this.top, [], n, null);
                                    t != this.top ? t.children.push(o) : t.children.splice(this.index++, 0, o), (this.changed = !0);
                                }
                            },
                        },
                        {
                            key: "isLocked",
                            value: function (e) {
                                return this.lock && (e == this.lock || (1 == e.nodeType && e.contains(this.lock.parentNode)));
                            },
                        },
                    ]),
                    e
                );
            })();
            function eE(e, t) {
                return e.type.side - t.type.side;
            }
            function eP(e, t, n, o, r) {
                for (var i = [], s = 0, a = 0; s < e.length; s++) {
                    var l = e[s],
                        c = a,
                        d = (a += l.size);
                    c >= n || d <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, o)), r && (i.push(r), (r = void 0)), d > n && i.push(l.slice(n - c, l.size, o)));
                }
                return i;
            }
            function eA(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = e.domSelectionRange(),
                    o = e.state.doc;
                if (!n.focusNode) return null;
                var r = e.docView.nearestDesc(n.focusNode),
                    i = r && 0 == r.size,
                    s = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
                if (s < 0) return null;
                var a,
                    l,
                    c = o.resolve(s);
                if (T(n)) {
                    for (a = c; r && !r.node; ) r = r.parent;
                    var d = r.node;
                    if (
                        r &&
                        d.isAtom &&
                        v.NodeSelection.isSelectable(d) &&
                        r.parent &&
                        !(
                            d.isInline &&
                            (function (e, t, n) {
                                for (var o = 0 == t, r = t == M(e); o || r; ) {
                                    if (e == n) return !0;
                                    var i = b(e);
                                    if (!(e = e.parentNode)) return !1;
                                    (o = o && 0 == i), (r = r && i == M(e));
                                }
                            })(n.focusNode, n.focusOffset, r.dom)
                        )
                    ) {
                        var u = r.posBefore;
                        l = new v.NodeSelection(s == u ? c : o.resolve(u));
                    }
                } else {
                    var f = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                    if (f < 0) return null;
                    a = o.resolve(f);
                }
                if (!l) {
                    var h = "pointer" == t || (e.state.selection.head < c.pos && !i) ? 1 : -1;
                    l = eK(e, a, c, h);
                }
                return l;
            }
            function eV(e) {
                return e.editable ? e.hasFocus() : e_(e) && document.activeElement && document.activeElement.contains(e.dom);
            }
            function eR(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.state.selection;
                if ((eL(e, n), eV(e))) {
                    if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && K) {
                        var o = e.domSelectionRange(),
                            r = e.domObserver.currentSelection;
                        if (o.anchorNode && r.anchorNode && D(o.anchorNode, o.anchorOffset, r.anchorNode, r.anchorOffset)) {
                            (e.input.mouseDown.delayedSelectionSync = !0), e.domObserver.setCurSelection();
                            return;
                        }
                    }
                    if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
                        !(function (e) {
                            var t = e.domSelection(),
                                n = document.createRange();
                            if (t) {
                                var o = e.cursorWrapper.dom,
                                    r = "IMG" == o.nodeName;
                                r ? n.setStart(o.parentNode, b(o) + 1) : n.setStart(o, 0), n.collapse(!0), t.removeAllRanges(), t.addRange(n), !r && !e.state.selection.visible && I && F <= 11 && ((o.disabled = !0), (o.disabled = !1));
                            }
                        })(e);
                    else {
                        var i,
                            s,
                            a,
                            l,
                            c,
                            d,
                            u = n.anchor,
                            f = n.head;
                        !eB || n instanceof v.TextSelection || (n.$from.parent.inlineContent || (c = ez(e, n.from)), n.empty || n.$from.parent.inlineContent || (d = ez(e, n.to))),
                            e.docView.setSelection(u, f, e.root, t),
                            eB && (c && eF(c), d && eF(d)),
                            n.visible
                                ? e.dom.classList.remove("ProseMirror-hideselection")
                                : (e.dom.classList.add("ProseMirror-hideselection"),
                                  "onselectionchange" in document &&
                                      ((i = e.dom.ownerDocument).removeEventListener("selectionchange", e.input.hideSelectionGuard),
                                      (a = (s = e.domSelectionRange()).anchorNode),
                                      (l = s.anchorOffset),
                                      i.addEventListener(
                                          "selectionchange",
                                          (e.input.hideSelectionGuard = function () {
                                              (s.anchorNode != a || s.anchorOffset != l) &&
                                                  (i.removeEventListener("selectionchange", e.input.hideSelectionGuard),
                                                  setTimeout(function () {
                                                      (!eV(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
                                                  }, 20));
                                          })
                                      )));
                    }
                    e.domObserver.setCurSelection(), e.domObserver.connectSelection();
                }
            }
            var eB = _ || (K && $ < 63);
            function ez(e, t) {
                var n = e.docView.domFromPos(t, 0),
                    o = n.node,
                    r = n.offset,
                    i = r < o.childNodes.length ? o.childNodes[r] : null,
                    s = r ? o.childNodes[r - 1] : null;
                if (_ && i && "false" == i.contentEditable) return eI(i);
                if ((!i || "false" == i.contentEditable) && (!s || "false" == s.contentEditable)) {
                    if (i) return eI(i);
                    if (s) return eI(s);
                }
            }
            function eI(e) {
                return (e.contentEditable = "true"), _ && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)), e;
            }
            function eF(e) {
                (e.contentEditable = "false"), e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
            }
            function eL(e, t) {
                if (t instanceof v.NodeSelection) {
                    var n = e.docView.descAt(t.from);
                    n != e.lastSelectedViewDesc && (eq(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
                } else eq(e);
            }
            function eq(e) {
                e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), (e.lastSelectedViewDesc = void 0));
            }
            function eK(e, t, n, o) {
                return (
                    e.someProp("createSelectionBetween", function (o) {
                        return o(e, t, n);
                    }) || v.TextSelection.between(t, n, o)
                );
            }
            function e$(e) {
                return (!e.editable || !!e.hasFocus()) && e_(e);
            }
            function e_(e) {
                var t = e.domSelectionRange();
                if (!t.anchorNode) return !1;
                try {
                    return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode));
                } catch (e) {
                    return !1;
                }
            }
            function eW(e, t) {
                var n = e.selection,
                    o = n.$anchor,
                    r = n.$head,
                    i = t > 0 ? o.max(r) : o.min(r),
                    s = i.parent.inlineContent ? (i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null) : i;
                return s && v.Selection.findFrom(s, t);
            }
            function ej(e, t) {
                return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
            }
            function eH(e, t, n) {
                var o = e.state.selection;
                if (o instanceof v.TextSelection) {
                    if (n.indexOf("s") > -1) {
                        var r = o.$head,
                            i = r.textOffset ? null : t < 0 ? r.nodeBefore : r.nodeAfter;
                        if (!i || i.isText || !i.isLeaf) return !1;
                        var s = e.state.doc.resolve(r.pos + i.nodeSize * (t < 0 ? -1 : 1));
                        return ej(e, new v.TextSelection(o.$anchor, s));
                    }
                    if (!o.empty) return !1;
                    if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
                        var a = eW(e.state, t);
                        return !!a && a instanceof v.NodeSelection && ej(e, a);
                    }
                    if (!(j && n.indexOf("m") > -1)) {
                        var l,
                            c = o.$head,
                            d = c.textOffset ? null : t < 0 ? c.nodeBefore : c.nodeAfter;
                        if (!d || d.isText) return !1;
                        var u = t < 0 ? c.pos - d.nodeSize : c.pos;
                        return (
                            !!(d.isAtom || ((l = e.docView.descAt(u)) && !l.contentDOM)) &&
                            (v.NodeSelection.isSelectable(d) ? ej(e, new v.NodeSelection(t < 0 ? e.state.doc.resolve(c.pos - d.nodeSize) : c)) : !!G && ej(e, new v.TextSelection(e.state.doc.resolve(t < 0 ? u : u + d.nodeSize))))
                        );
                    }
                } else {
                    if (o instanceof v.NodeSelection && o.node.isInline) return ej(e, new v.TextSelection(t > 0 ? o.$to : o.$from));
                    var f = eW(e.state, t);
                    return !!f && ej(e, f);
                }
            }
            function eU(e) {
                return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
            }
            function eG(e, t) {
                var n = e.pmViewDesc;
                return n && 0 == n.size && (t < 0 || e.nextSibling || "BR" != e.nodeName);
            }
            function eX(e, t) {
                return t < 0
                    ? (function (e) {
                          var t = e.domSelectionRange(),
                              n = t.focusNode,
                              o = t.focusOffset;
                          if (n) {
                              var r,
                                  i,
                                  s = !1;
                              for (L && 1 == n.nodeType && o < eU(n) && eG(n.childNodes[o], -1) && (s = !0); ; )
                                  if (o > 0) {
                                      if (1 != n.nodeType) break;
                                      var a = n.childNodes[o - 1];
                                      if (eG(a, -1)) (r = n), (i = --o);
                                      else if (3 == a.nodeType) o = (n = a).nodeValue.length;
                                      else break;
                                  } else if (eY(n)) break;
                                  else {
                                      for (var l = n.previousSibling; l && eG(l, -1); ) (r = n.parentNode), (i = b(l)), (l = l.previousSibling);
                                      if (l) o = eU((n = l));
                                      else {
                                          if ((n = n.parentNode) == e.dom) break;
                                          o = 0;
                                      }
                                  }
                              s ? eJ(e, n, o) : r && eJ(e, r, i);
                          }
                      })(e)
                    : (function (e) {
                          var t,
                              n,
                              o = e.domSelectionRange(),
                              r = o.focusNode,
                              i = o.focusOffset;
                          if (r) {
                              for (var s = eU(r); ; )
                                  if (i < s) {
                                      if (1 != r.nodeType) break;
                                      if (eG(r.childNodes[i], 1)) (t = r), (n = ++i);
                                      else break;
                                  } else if (eY(r)) break;
                                  else {
                                      for (var a = r.nextSibling; a && eG(a, 1); ) (t = a.parentNode), (n = b(a) + 1), (a = a.nextSibling);
                                      if (a) (i = 0), (s = eU((r = a)));
                                      else {
                                          if ((r = r.parentNode) == e.dom) break;
                                          i = s = 0;
                                      }
                                  }
                              t && eJ(e, t, n);
                          }
                      })(e);
            }
            function eY(e) {
                var t = e.pmViewDesc;
                return t && t.node && t.node.isBlock;
            }
            function eJ(e, t, n) {
                if (3 != t.nodeType) {
                    var o, r;
                    (r = (function (e, t) {
                        for (; e && t == e.childNodes.length && !x(e); ) (t = b(e) + 1), (e = e.parentNode);
                        for (; e && t < e.childNodes.length; ) {
                            var n = e.childNodes[t];
                            if (3 == n.nodeType) return n;
                            if (1 == n.nodeType && "false" == n.contentEditable) break;
                            (e = n), (t = 0);
                        }
                    })(t, n))
                        ? ((t = r), (n = 0))
                        : (o = (function (e, t) {
                              for (; e && !t && !x(e); ) (t = b(e)), (e = e.parentNode);
                              for (; e && t; ) {
                                  var n = e.childNodes[t - 1];
                                  if (3 == n.nodeType) return n;
                                  if (1 == n.nodeType && "false" == n.contentEditable) break;
                                  t = (e = n).childNodes.length;
                              }
                          })(t, n)) && ((t = o), (n = o.nodeValue.length));
                }
                var i = e.domSelection();
                if (i) {
                    if (T(i)) {
                        var s = document.createRange();
                        s.setEnd(t, n), s.setStart(t, n), i.removeAllRanges(), i.addRange(s);
                    } else i.extend && i.extend(t, n);
                    e.domObserver.setCurSelection();
                    var a = e.state;
                    setTimeout(function () {
                        e.state == a && eR(e);
                    }, 50);
                }
            }
            function eQ(e, t) {
                var n = e.state.doc.resolve(t);
                if (!(K || H) && n.parent.inlineContent) {
                    var o = e.coordsAtPos(t);
                    if (t > n.start()) {
                        var r = e.coordsAtPos(t - 1),
                            i = (r.top + r.bottom) / 2;
                        if (i > o.top && i < o.bottom && Math.abs(r.left - o.left) > 1) return r.left < o.left ? "ltr" : "rtl";
                    }
                    if (t < n.end()) {
                        var s = e.coordsAtPos(t + 1),
                            a = (s.top + s.bottom) / 2;
                        if (a > o.top && a < o.bottom && Math.abs(s.left - o.left) > 1) return s.left > o.left ? "ltr" : "rtl";
                    }
                }
                return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
            }
            function eZ(e, t, n) {
                var o = e.state.selection;
                if ((o instanceof v.TextSelection && !o.empty) || n.indexOf("s") > -1 || (j && n.indexOf("m") > -1)) return !1;
                var r = o.$from,
                    i = o.$to;
                if (!r.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                    var s = eW(e.state, t);
                    if (s && s instanceof v.NodeSelection) return ej(e, s);
                }
                if (!r.parent.inlineContent) {
                    var a = t < 0 ? r : i,
                        l = o instanceof v.AllSelection ? v.Selection.near(a, t) : v.Selection.findFrom(a, t);
                    return !!l && ej(e, l);
                }
                return !1;
            }
            function e0(e, t) {
                if (!(e.state.selection instanceof v.TextSelection)) return !0;
                var n = e.state.selection,
                    o = n.$head,
                    r = n.$anchor,
                    i = n.empty;
                if (!o.sameParent(r)) return !0;
                if (!i) return !1;
                if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
                var s = !o.textOffset && (t < 0 ? o.nodeBefore : o.nodeAfter);
                if (s && !s.isText) {
                    var a = e.state.tr;
                    return t < 0 ? a.delete(o.pos - s.nodeSize, o.pos) : a.delete(o.pos, o.pos + s.nodeSize), e.dispatch(a), !0;
                }
                return !1;
            }
            function e1(e, t, n) {
                e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
            }
            function e2(e, t) {
                e.someProp("transformCopied", function (n) {
                    t = n(t, e);
                });
                for (var n = [], o = t, r = o.content, i = o.openStart, s = o.openEnd; i > 1 && s > 1 && 1 == r.childCount && 1 == r.firstChild.childCount; ) {
                    i--, s--;
                    var a = r.firstChild;
                    n.push(a.type.name, a.attrs != a.type.defaultAttrs ? a.attrs : null), (r = a.content);
                }
                var l = e.someProp("clipboardSerializer") || g.DOMSerializer.fromSchema(e.state.schema),
                    c = te(),
                    d = c.createElement("div");
                d.appendChild(l.serializeFragment(r, { document: c }));
                for (var u, f = d.firstChild, h = 0; f && 1 == f.nodeType && (u = e9[f.nodeName.toLowerCase()]); ) {
                    for (var p = u.length - 1; p >= 0; p--) {
                        for (var m = c.createElement(u[p]); d.firstChild; ) m.appendChild(d.firstChild);
                        d.appendChild(m), h++;
                    }
                    f = d.firstChild;
                }
                return (
                    f &&
                        1 == f.nodeType &&
                        f.setAttribute(
                            "data-pm-slice",
                            ""
                                .concat(i, " ")
                                .concat(s)
                                .concat(h ? " -".concat(h) : "", " ")
                                .concat(JSON.stringify(n))
                        ),
                    {
                        dom: d,
                        text:
                            e.someProp("clipboardTextSerializer", function (n) {
                                return n(t, e);
                            }) || t.content.textBetween(0, t.content.size, "\n\n"),
                        slice: t,
                    }
                );
            }
            function e3(e, t, n, o, r) {
                var i,
                    s,
                    a = r.parent.type.spec.code;
                if (!n && !t) return null;
                var l = t && (o || a || !n);
                if (l) {
                    if (
                        (e.someProp("transformPastedText", function (n) {
                            t = n(t, a || o, e);
                        }),
                        a)
                    )
                        return t ? new g.Slice(g.Fragment.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0) : g.Slice.empty;
                    var c = e.someProp("clipboardTextParser", function (n) {
                        return n(t, r, o, e);
                    });
                    if (c) s = c;
                    else {
                        var d = r.marks(),
                            u = e.state.schema,
                            f = g.DOMSerializer.fromSchema(u);
                        (i = document.createElement("div")),
                            t.split(/(?:\r\n?|\n)+/).forEach(function (e) {
                                var t = i.appendChild(document.createElement("p"));
                                e && t.appendChild(f.serializeNode(u.text(e, d)));
                            });
                    }
                } else
                    e.someProp("transformPastedHTML", function (t) {
                        n = t(n, e);
                    }),
                        (i = (function (e) {
                            var t = /^(\s*<meta [^>]*>)*/.exec(e);
                            t && (e = e.slice(t[0].length));
                            var n,
                                o = te().createElement("div"),
                                r = /<([a-z][^>\s]+)/i.exec(e);
                            if (
                                ((n = r && e9[r[1].toLowerCase()]) &&
                                    (e =
                                        n
                                            .map(function (e) {
                                                return "<" + e + ">";
                                            })
                                            .join("") +
                                        e +
                                        n
                                            .map(function (e) {
                                                return "</" + e + ">";
                                            })
                                            .reverse()
                                            .join("")),
                                (o.innerHTML = e),
                                n)
                            )
                                for (var i = 0; i < n.length; i++) o = o.querySelector(n[i]) || o;
                            return o;
                        })(n)),
                        G &&
                            (function (e) {
                                for (var t = e.querySelectorAll(K ? "span:not([class]):not([style])" : "span.Apple-converted-space"), n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    1 == o.childNodes.length && "\xa0" == o.textContent && o.parentNode && o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), o);
                                }
                            })(i);
                var h = i && i.querySelector("[data-pm-slice]"),
                    p = h && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(h.getAttribute("data-pm-slice") || "");
                if (p && p[3])
                    for (var m = +p[3]; m > 0; m--) {
                        for (var v = i.firstChild; v && 1 != v.nodeType; ) v = v.nextSibling;
                        if (!v) break;
                        i = v;
                    }
                if (
                    (s ||
                        (s = (e.someProp("clipboardParser") || e.someProp("domParser") || g.DOMParser.fromSchema(e.state.schema)).parseSlice(i, {
                            preserveWhitespace: !!(l || p),
                            context: r,
                            ruleFromNode: function (e) {
                                return "BR" != e.nodeName || e.nextSibling || !e.parentNode || e5.test(e.parentNode.nodeName) ? null : { ignore: !0 };
                            },
                        })),
                    p)
                )
                    s = (function (e, t) {
                        if (!e.size) return e;
                        var n,
                            o = e.content.firstChild.type.schema;
                        try {
                            n = JSON.parse(t);
                        } catch (t) {
                            return e;
                        }
                        for (var r = e.content, i = e.openStart, s = e.openEnd, a = n.length - 2; a >= 0; a -= 2) {
                            var l = o.nodes[n[a]];
                            if (!l || l.hasRequiredAttrs()) break;
                            (r = g.Fragment.from(l.create(n[a + 1], r))), i++, s++;
                        }
                        return new g.Slice(r, i, s);
                    })(e7(s, +p[1], +p[2]), p[4]);
                else if (
                    (s = g.Slice.maxOpen(
                        (function (e, t) {
                            if (e.childCount < 2) return e;
                            for (var n, o = t.depth; o >= 0; o--)
                                if (
                                    (n = (function () {
                                        var n,
                                            r = t.node(o).contentMatchAt(t.index(o)),
                                            i = [];
                                        if (
                                            (e.forEach(function (e) {
                                                if (i) {
                                                    var t,
                                                        o = r.findWrapping(e.type);
                                                    if (!o) return (i = null);
                                                    if (
                                                        (t =
                                                            i.length &&
                                                            n.length &&
                                                            (function e(t, n, o, r, i) {
                                                                if (i < t.length && i < n.length && t[i] == n[i]) {
                                                                    var s = e(t, n, o, r.lastChild, i + 1);
                                                                    if (s) return r.copy(r.content.replaceChild(r.childCount - 1, s));
                                                                    if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? o.type : t[i + 1])) return r.copy(r.content.append(g.Fragment.from(e6(o, t, i + 1))));
                                                                }
                                                            })(o, n, e, i[i.length - 1], 0))
                                                    )
                                                        i[i.length - 1] = t;
                                                    else {
                                                        i.length &&
                                                            (i[i.length - 1] = (function e(t, n) {
                                                                if (0 == n) return t;
                                                                var o = t.content.replaceChild(t.childCount - 1, e(t.lastChild, n - 1)),
                                                                    r = t.contentMatchAt(t.childCount).fillBefore(g.Fragment.empty, !0);
                                                                return t.copy(o.append(r));
                                                            })(i[i.length - 1], n.length));
                                                        var s = e6(e, o);
                                                        i.push(s), (r = r.matchType(s.type)), (n = o);
                                                    }
                                                }
                                            }),
                                            i)
                                        )
                                            return { v: g.Fragment.from(i) };
                                    })())
                                )
                                    return n.v;
                            return e;
                        })(s.content, r),
                        !0
                    )).openStart ||
                    s.openEnd
                ) {
                    for (var y = 0, b = 0, k = s.content.firstChild; y < s.openStart && !k.type.spec.isolating; y++, k = k.firstChild);
                    for (var w = s.content.lastChild; b < s.openEnd && !w.type.spec.isolating; b++, w = w.lastChild);
                    s = e7(s, y, b);
                }
                return (
                    e.someProp("transformPasted", function (t) {
                        s = t(s, e);
                    }),
                    s
                );
            }
            var e5 = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
            function e6(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = t.length - 1; o >= n; o--) e = t[o].create(null, g.Fragment.from(e));
                return e;
            }
            function e8(e, t, n, o, r, i) {
                var s = t < 0 ? e.firstChild : e.lastChild,
                    a = s.content;
                return (
                    e.childCount > 1 && (i = 0),
                    r < o - 1 && (a = e8(a, t, n, o, r + 1, i)),
                    r >= n &&
                        (a =
                            t < 0
                                ? s
                                      .contentMatchAt(0)
                                      .fillBefore(a, i <= r)
                                      .append(a)
                                : a.append(s.contentMatchAt(s.childCount).fillBefore(g.Fragment.empty, !0))),
                    e.replaceChild(t < 0 ? 0 : e.childCount - 1, s.copy(a))
                );
            }
            function e7(e, t, n) {
                return t < e.openStart && (e = new g.Slice(e8(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new g.Slice(e8(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
            }
            var e9 = { thead: ["table"], tbody: ["table"], tfoot: ["table"], caption: ["table"], colgroup: ["table"], col: ["table", "colgroup"], tr: ["table", "tbody"], td: ["table", "tbody", "tr"], th: ["table", "tbody", "tr"] },
                e4 = null;
            function te() {
                return e4 || (e4 = document.implementation.createHTMLDocument("title"));
            }
            var tt = {},
                tn = {},
                to = { touchstart: !0, touchmove: !0 },
                tr = m(function e() {
                    h(this, e),
                        (this.shiftKey = !1),
                        (this.mouseDown = null),
                        (this.lastKeyCode = null),
                        (this.lastKeyCodeTime = 0),
                        (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
                        (this.lastSelectionOrigin = null),
                        (this.lastSelectionTime = 0),
                        (this.lastIOSEnter = 0),
                        (this.lastIOSEnterFallbackTimeout = -1),
                        (this.lastFocus = 0),
                        (this.lastTouch = 0),
                        (this.lastAndroidDelete = 0),
                        (this.composing = !1),
                        (this.compositionNode = null),
                        (this.composingTimeout = -1),
                        (this.compositionNodes = []),
                        (this.compositionEndedAt = -2e8),
                        (this.compositionID = 1),
                        (this.compositionPendingChanges = 0),
                        (this.domChangeCount = 0),
                        (this.eventHandlers = Object.create(null)),
                        (this.hideSelectionGuard = null);
                });
            function ti(e, t) {
                (e.input.lastSelectionOrigin = t), (e.input.lastSelectionTime = Date.now());
            }
            function ts(e) {
                e.someProp("handleDOMEvents", function (t) {
                    for (var n in t)
                        e.input.eventHandlers[n] ||
                            e.dom.addEventListener(
                                n,
                                (e.input.eventHandlers[n] = function (t) {
                                    return ta(e, t);
                                })
                            );
                });
            }
            function ta(e, t) {
                return e.someProp("handleDOMEvents", function (n) {
                    var o = n[t.type];
                    return !!o && (o(e, t) || t.defaultPrevented);
                });
            }
            function tl(e) {
                return { left: e.clientX, top: e.clientY };
            }
            function tc(e, t, n, o, r) {
                if (-1 == o) return !1;
                for (
                    var i,
                        s = e.state.doc.resolve(o),
                        a = function (o) {
                            if (
                                e.someProp(t, function (t) {
                                    return o > s.depth ? t(e, n, s.nodeAfter, s.before(o), r, !0) : t(e, n, s.node(o), s.before(o), r, !1);
                                })
                            )
                                return { v: !0 };
                        },
                        l = s.depth + 1;
                    l > 0;
                    l--
                )
                    if ((i = a(l))) return i.v;
                return !1;
            }
            function td(e, t, n) {
                if ((e.focused || e.focus(), !e.state.selection.eq(t))) {
                    var o = e.state.tr.setSelection(t);
                    "pointer" == n && o.setMeta("pointer", !0), e.dispatch(o);
                }
            }
            (tn.keydown = function (e, t) {
                if (((e.input.shiftKey = 16 == t.keyCode || t.shiftKey), !th(e, t) && ((e.input.lastKeyCode = t.keyCode), (e.input.lastKeyCodeTime = Date.now()), !U || !K || 13 != t.keyCode))) {
                    if ((229 != t.keyCode && e.domObserver.forceFlush(), !W || 13 != t.keyCode || t.ctrlKey || t.altKey || t.metaKey))
                        e.someProp("handleKeyDown", function (n) {
                            return n(e, t);
                        }) ||
                        (function (e, t) {
                            var n,
                                o = t.keyCode,
                                r = ((n = ""), t.ctrlKey && (n += "c"), t.metaKey && (n += "m"), t.altKey && (n += "a"), t.shiftKey && (n += "s"), n);
                            if (8 == o || (j && 72 == o && "c" == r)) return e0(e, -1) || eX(e, -1);
                            if ((46 == o && !t.shiftKey) || (j && 68 == o && "c" == r)) return e0(e, 1) || eX(e, 1);
                            if (13 == o || 27 == o) return !0;
                            if (37 == o || (j && 66 == o && "c" == r)) {
                                var i = 37 == o ? ("ltr" == eQ(e, e.state.selection.from) ? -1 : 1) : -1;
                                return eH(e, i, r) || eX(e, i);
                            }
                            if (39 == o || (j && 70 == o && "c" == r)) {
                                var s = 39 == o ? ("ltr" == eQ(e, e.state.selection.from) ? 1 : -1) : 1;
                                return eH(e, s, r) || eX(e, s);
                            }
                            if (38 == o || (j && 80 == o && "c" == r)) return eZ(e, -1, r) || eX(e, -1);
                            if (40 == o || (j && 78 == o && "c" == r))
                                return (
                                    (function (e) {
                                        if (!_ || e.state.selection.$head.parentOffset > 0) return !1;
                                        var t = e.domSelectionRange(),
                                            n = t.focusNode,
                                            o = t.focusOffset;
                                        if (n && 1 == n.nodeType && 0 == o && n.firstChild && "false" == n.firstChild.contentEditable) {
                                            var r = n.firstChild;
                                            e1(e, r, "true"),
                                                setTimeout(function () {
                                                    return e1(e, r, "false");
                                                }, 20);
                                        }
                                        return !1;
                                    })(e) ||
                                    eZ(e, 1, r) ||
                                    eX(e, 1)
                                );
                            else if (r == (j ? "m" : "c") && (66 == o || 73 == o || 89 == o || 90 == o)) return !0;
                            return !1;
                        })(e, t)
                            ? t.preventDefault()
                            : ti(e, "key");
                    else {
                        var n = Date.now();
                        (e.input.lastIOSEnter = n),
                            (e.input.lastIOSEnterFallbackTimeout = setTimeout(function () {
                                e.input.lastIOSEnter == n &&
                                    (e.someProp("handleKeyDown", function (t) {
                                        return t(e, E(13, "Enter"));
                                    }),
                                    (e.input.lastIOSEnter = 0));
                            }, 200));
                    }
                }
            }),
                (tn.keyup = function (e, t) {
                    16 == t.keyCode && (e.input.shiftKey = !1);
                }),
                (tn.keypress = function (e, t) {
                    if (!th(e, t) && t.charCode && (!t.ctrlKey || t.altKey) && (!j || !t.metaKey)) {
                        if (
                            e.someProp("handleKeyPress", function (n) {
                                return n(e, t);
                            })
                        ) {
                            t.preventDefault();
                            return;
                        }
                        var n = e.state.selection;
                        if (!(n instanceof v.TextSelection) || !n.$from.sameParent(n.$to)) {
                            var o = String.fromCharCode(t.charCode);
                            /[\r\n]/.test(o) ||
                                e.someProp("handleTextInput", function (t) {
                                    return t(e, n.$from.pos, n.$to.pos, o);
                                }) ||
                                e.dispatch(e.state.tr.insertText(o).scrollIntoView()),
                                t.preventDefault();
                        }
                    }
                });
            var tu = j ? "metaKey" : "ctrlKey";
            tt.mousedown = function (e, t) {
                e.input.shiftKey = t.shiftKey;
                var n,
                    o,
                    r,
                    i = tg(e),
                    s = Date.now(),
                    a = "singleClick";
                s - e.input.lastClick.time < 500 &&
                    (o = (n = e.input.lastClick).x - t.clientX) * o + (r = n.y - t.clientY) * r < 100 &&
                    !t[tu] &&
                    ("singleClick" == e.input.lastClick.type ? (a = "doubleClick") : "doubleClick" == e.input.lastClick.type && (a = "tripleClick")),
                    (e.input.lastClick = { time: s, x: t.clientX, y: t.clientY, type: a });
                var l = e.posAtCoords(tl(t));
                l &&
                    ("singleClick" == a
                        ? (e.input.mouseDown && e.input.mouseDown.done(), (e.input.mouseDown = new tf(e, l, t, !!i)))
                        : ("doubleClick" == a
                              ? function (e, t, n, o) {
                                    return (
                                        tc(e, "handleDoubleClickOn", t, n, o) ||
                                        e.someProp("handleDoubleClick", function (n) {
                                            return n(e, t, o);
                                        })
                                    );
                                }
                              : function (e, t, n, o) {
                                    return (
                                        tc(e, "handleTripleClickOn", t, n, o) ||
                                        e.someProp("handleTripleClick", function (n) {
                                            return n(e, t, o);
                                        }) ||
                                        (function (e, t, n) {
                                            if (0 != n.button) return !1;
                                            var o = e.state.doc;
                                            if (-1 == t) return !!o.inlineContent && (td(e, v.TextSelection.create(o, 0, o.content.size), "pointer"), !0);
                                            for (var r = o.resolve(t), i = r.depth + 1; i > 0; i--) {
                                                var s = i > r.depth ? r.nodeAfter : r.node(i),
                                                    a = r.before(i);
                                                if (s.inlineContent) td(e, v.TextSelection.create(o, a + 1, a + 1 + s.content.size), "pointer");
                                                else {
                                                    if (!v.NodeSelection.isSelectable(s)) continue;
                                                    td(e, v.NodeSelection.create(o, a), "pointer");
                                                }
                                                return !0;
                                            }
                                        })(e, n, o)
                                    );
                                })(e, l.pos, l.inside, t)
                        ? t.preventDefault()
                        : ti(e, "pointer"));
            };
            var tf = (function () {
                function e(t, n, o, r) {
                    var i,
                        s,
                        a = this;
                    if (
                        (h(this, e),
                        (this.view = t),
                        (this.pos = n),
                        (this.event = o),
                        (this.flushed = r),
                        (this.delayedSelectionSync = !1),
                        (this.mightDrag = null),
                        (this.startDoc = t.state.doc),
                        (this.selectNode = !!o[tu]),
                        (this.allowDefault = o.shiftKey),
                        n.inside > -1)
                    )
                        (i = t.state.doc.nodeAt(n.inside)), (s = n.inside);
                    else {
                        var l = t.state.doc.resolve(n.pos);
                        (i = l.parent), (s = l.depth ? l.before() : 0);
                    }
                    var c = r ? null : o.target,
                        d = c ? t.docView.nearestDesc(c, !0) : null;
                    this.target = d && 1 == d.dom.nodeType ? d.dom : null;
                    var u = t.state.selection;
                    ((0 == o.button && i.type.spec.draggable && !1 !== i.type.spec.selectable) || (u instanceof v.NodeSelection && u.from <= s && u.to > s)) &&
                        (this.mightDrag = { node: i, pos: s, addAttr: !!(this.target && !this.target.draggable), setUneditable: !!(this.target && L && !this.target.hasAttribute("contentEditable")) }),
                        this.target &&
                            this.mightDrag &&
                            (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
                            (this.view.domObserver.stop(),
                            this.mightDrag.addAttr && (this.target.draggable = !0),
                            this.mightDrag.setUneditable &&
                                setTimeout(function () {
                                    a.view.input.mouseDown == a && a.target.setAttribute("contentEditable", "false");
                                }, 20),
                            this.view.domObserver.start()),
                        t.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
                        t.root.addEventListener("mousemove", (this.move = this.move.bind(this))),
                        ti(t, "pointer");
                }
                return (
                    m(e, [
                        {
                            key: "done",
                            value: function () {
                                var e = this;
                                this.view.root.removeEventListener("mouseup", this.up),
                                    this.view.root.removeEventListener("mousemove", this.move),
                                    this.mightDrag &&
                                        this.target &&
                                        (this.view.domObserver.stop(),
                                        this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
                                        this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
                                        this.view.domObserver.start()),
                                    this.delayedSelectionSync &&
                                        setTimeout(function () {
                                            return eR(e.view);
                                        }),
                                    (this.view.input.mouseDown = null);
                            },
                        },
                        {
                            key: "up",
                            value: function (e) {
                                if ((this.done(), this.view.dom.contains(e.target))) {
                                    var t,
                                        n,
                                        o,
                                        r,
                                        i = this.pos;
                                    (this.view.state.doc != this.startDoc && (i = this.view.posAtCoords(tl(e))), this.updateAllowDefault(e), this.allowDefault || !i)
                                        ? ti(this.view, "pointer")
                                        : ((t = this.view),
                                          (n = i.pos),
                                          (o = i.inside),
                                          (r = this.selectNode),
                                          tc(t, "handleClickOn", n, o, e) ||
                                              t.someProp("handleClick", function (o) {
                                                  return o(t, n, e);
                                              }) ||
                                              (r
                                                  ? (function (e, t) {
                                                        if (-1 == t) return !1;
                                                        var n,
                                                            o,
                                                            r = e.state.selection;
                                                        r instanceof v.NodeSelection && (n = r.node);
                                                        for (var i = e.state.doc.resolve(t), s = i.depth + 1; s > 0; s--) {
                                                            var a = s > i.depth ? i.nodeAfter : i.node(s);
                                                            if (v.NodeSelection.isSelectable(a)) {
                                                                o = n && r.$from.depth > 0 && s >= r.$from.depth && i.before(r.$from.depth + 1) == r.$from.pos ? i.before(r.$from.depth) : i.before(s);
                                                                break;
                                                            }
                                                        }
                                                        return null != o && (td(e, v.NodeSelection.create(e.state.doc, o), "pointer"), !0);
                                                    })(t, o)
                                                  : (function (e, t) {
                                                        if (-1 == t) return !1;
                                                        var n = e.state.doc.resolve(t),
                                                            o = n.nodeAfter;
                                                        return !!(o && o.isAtom && v.NodeSelection.isSelectable(o)) && (td(e, new v.NodeSelection(n), "pointer"), !0);
                                                    })(t, o)))
                                        ? e.preventDefault()
                                        : 0 == e.button &&
                                          (this.flushed ||
                                              (_ && this.mightDrag && !this.mightDrag.node.isAtom) ||
                                              (K && !this.view.state.selection.visible && 2 >= Math.min(Math.abs(i.pos - this.view.state.selection.from), Math.abs(i.pos - this.view.state.selection.to))))
                                        ? (td(this.view, v.Selection.near(this.view.state.doc.resolve(i.pos)), "pointer"), e.preventDefault())
                                        : ti(this.view, "pointer");
                                }
                            },
                        },
                        {
                            key: "move",
                            value: function (e) {
                                this.updateAllowDefault(e), ti(this.view, "pointer"), 0 == e.buttons && this.done();
                            },
                        },
                        {
                            key: "updateAllowDefault",
                            value: function (e) {
                                !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
                            },
                        },
                    ]),
                    e
                );
            })();
            function th(e, t) {
                return !!e.composing || (!!(_ && 500 > Math.abs(t.timeStamp - e.input.compositionEndedAt)) && ((e.input.compositionEndedAt = -2e8), !0));
            }
            (tt.touchstart = function (e) {
                (e.input.lastTouch = Date.now()), tg(e), ti(e, "pointer");
            }),
                (tt.touchmove = function (e) {
                    (e.input.lastTouch = Date.now()), ti(e, "pointer");
                }),
                (tt.contextmenu = function (e) {
                    return tg(e);
                });
            var tp = U ? 5e3 : -1;
            function tm(e, t) {
                clearTimeout(e.input.composingTimeout),
                    t > -1 &&
                        (e.input.composingTimeout = setTimeout(function () {
                            return tg(e);
                        }, t));
            }
            function tv(e) {
                var t;
                for (e.composing && ((e.input.composing = !1), (e.input.compositionEndedAt = ((t = document.createEvent("Event")).initEvent("event", !0, !0), t.timeStamp))); e.input.compositionNodes.length > 0; )
                    e.input.compositionNodes.pop().markParentsDirty();
            }
            function tg(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!U || !(e.domObserver.flushingSoon >= 0)) {
                    if ((e.domObserver.forceFlush(), tv(e), t || (e.docView && e.docView.dirty))) {
                        var n = eA(e);
                        return n && !n.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !e.state.selection.empty ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
                    }
                    return !1;
                }
            }
            (tn.compositionstart = tn.compositionupdate = function (e) {
                if (!e.composing) {
                    e.domObserver.flush();
                    var t = e.state,
                        n = t.selection.$to;
                    if (
                        t.selection instanceof v.TextSelection &&
                        (t.storedMarks ||
                            (!n.textOffset &&
                                n.parentOffset &&
                                n.nodeBefore.marks.some(function (e) {
                                    return !1 === e.type.spec.inclusive;
                                })))
                    )
                        (e.markCursor = e.state.storedMarks || n.marks()), tg(e, !0), (e.markCursor = null);
                    else if ((tg(e, !t.selection.empty), L && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length))
                        for (var o = e.domSelectionRange(), r = o.focusNode, i = o.focusOffset; r && 1 == r.nodeType && 0 != i; ) {
                            var s = i < 0 ? r.lastChild : r.childNodes[i - 1];
                            if (!s) break;
                            if (3 == s.nodeType) {
                                var a = e.domSelection();
                                a && a.collapse(s, s.nodeValue.length);
                                break;
                            }
                            (r = s), (i = -1);
                        }
                    e.input.composing = !0;
                }
                tm(e, tp);
            }),
                (tn.compositionend = function (e, t) {
                    e.composing &&
                        ((e.input.composing = !1),
                        (e.input.compositionEndedAt = t.timeStamp),
                        (e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0),
                        (e.input.compositionNode = null),
                        e.input.compositionPendingChanges &&
                            Promise.resolve().then(function () {
                                return e.domObserver.flush();
                            }),
                        e.input.compositionID++,
                        tm(e, 20));
                });
            var ty = (I && F < 15) || (W && X < 604);
            function tb(e, t, n, o, r) {
                var i = e3(e, t, n, o, e.state.selection.$from);
                if (
                    e.someProp("handlePaste", function (t) {
                        return t(e, r, i || g.Slice.empty);
                    })
                )
                    return !0;
                if (!i) return !1;
                var s = 0 == i.openStart && 0 == i.openEnd && 1 == i.content.childCount ? i.content.firstChild : null,
                    a = s ? e.state.tr.replaceSelectionWith(s, o) : e.state.tr.replaceSelection(i);
                return e.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
            }
            function tk(e) {
                var t = e.getData("text/plain") || e.getData("Text");
                if (t) return t;
                var n = e.getData("text/uri-list");
                return n ? n.replace(/\r?\n/g, " ") : "";
            }
            (tt.copy = tn.cut = function (e, t) {
                var n = e.state.selection,
                    o = "cut" == t.type;
                if (!n.empty) {
                    var r = ty ? null : t.clipboardData,
                        i = e2(e, n.content()),
                        s = i.dom,
                        a = i.text;
                    r
                        ? (t.preventDefault(), r.clearData(), r.setData("text/html", s.innerHTML), r.setData("text/plain", a))
                        : (function (e, t) {
                              if (e.dom.parentNode) {
                                  var n = e.dom.parentNode.appendChild(document.createElement("div"));
                                  n.appendChild(t), (n.style.cssText = "position: fixed; left: -10000px; top: 10px");
                                  var o = getSelection(),
                                      r = document.createRange();
                                  r.selectNodeContents(t),
                                      e.dom.blur(),
                                      o.removeAllRanges(),
                                      o.addRange(r),
                                      setTimeout(function () {
                                          n.parentNode && n.parentNode.removeChild(n), e.focus();
                                      }, 50);
                              }
                          })(e, s),
                        o && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
                }
            }),
                (tn.paste = function (e, t) {
                    if (!e.composing || U) {
                        var n = ty ? null : t.clipboardData,
                            o = e.input.shiftKey && 45 != e.input.lastKeyCode;
                        n && tb(e, tk(n), n.getData("text/html"), o, t)
                            ? t.preventDefault()
                            : (function (e, t) {
                                  if (e.dom.parentNode) {
                                      var n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code,
                                          o = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                                      n || (o.contentEditable = "true"), (o.style.cssText = "position: fixed; left: -10000px; top: 10px"), o.focus();
                                      var r = e.input.shiftKey && 45 != e.input.lastKeyCode;
                                      setTimeout(function () {
                                          e.focus(), o.parentNode && o.parentNode.removeChild(o), n ? tb(e, o.value, null, r, t) : tb(e, o.textContent, o.innerHTML, r, t);
                                      }, 50);
                                  }
                              })(e, t);
                    }
                });
            var tw = m(function e(t, n, o) {
                    h(this, e), (this.slice = t), (this.move = n), (this.node = o);
                }),
                tS = j ? "altKey" : "ctrlKey";
            for (var tN in ((tt.dragstart = function (e, t) {
                var n,
                    o = e.input.mouseDown;
                if ((o && o.done(), t.dataTransfer)) {
                    var r = e.state.selection,
                        i = r.empty ? null : e.posAtCoords(tl(t));
                    if (i && i.pos >= r.from && i.pos <= (r instanceof v.NodeSelection ? r.to - 1 : r.to));
                    else if (o && o.mightDrag) n = v.NodeSelection.create(e.state.doc, o.mightDrag.pos);
                    else if (t.target && 1 == t.target.nodeType) {
                        var s = e.docView.nearestDesc(t.target, !0);
                        s && s.node.type.spec.draggable && s != e.docView && (n = v.NodeSelection.create(e.state.doc, s.posBefore));
                    }
                    var a = (n || e.state.selection).content(),
                        l = e2(e, a),
                        c = l.dom,
                        d = l.text,
                        u = l.slice;
                    (t.dataTransfer.files.length && K && !($ > 120)) || t.dataTransfer.clearData(),
                        t.dataTransfer.setData(ty ? "Text" : "text/html", c.innerHTML),
                        (t.dataTransfer.effectAllowed = "copyMove"),
                        ty || t.dataTransfer.setData("text/plain", d),
                        (e.dragging = new tw(u, !t[tS], n));
                }
            }),
            (tt.dragend = function (e) {
                var t = e.dragging;
                window.setTimeout(function () {
                    e.dragging == t && (e.dragging = null);
                }, 50);
            }),
            (tn.dragover = tn.dragenter = function (e, t) {
                return t.preventDefault();
            }),
            (tn.drop = function (e, t) {
                var n = e.dragging;
                if (((e.dragging = null), t.dataTransfer)) {
                    var o = e.posAtCoords(tl(t));
                    if (o) {
                        var r = e.state.doc.resolve(o.pos),
                            i = n && n.slice;
                        i
                            ? e.someProp("transformPasted", function (t) {
                                  i = t(i, e);
                              })
                            : (i = e3(e, tk(t.dataTransfer), ty ? null : t.dataTransfer.getData("text/html"), !1, r));
                        var s = !!(n && !t[tS]);
                        if (
                            e.someProp("handleDrop", function (n) {
                                return n(e, t, i || g.Slice.empty, s);
                            })
                        ) {
                            t.preventDefault();
                            return;
                        }
                        if (i) {
                            t.preventDefault();
                            var a = i ? y.dropPoint(e.state.doc, r.pos, i) : r.pos;
                            null == a && (a = r.pos);
                            var l = e.state.tr;
                            if (s) {
                                var c = n.node;
                                c ? c.replace(l) : l.deleteSelection();
                            }
                            var d = l.mapping.map(a),
                                u = 0 == i.openStart && 0 == i.openEnd && 1 == i.content.childCount,
                                f = l.doc;
                            if ((u ? l.replaceRangeWith(d, d, i.content.firstChild) : l.replaceRange(d, d, i), !l.doc.eq(f))) {
                                var h = l.doc.resolve(d);
                                if (u && v.NodeSelection.isSelectable(i.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(i.content.firstChild)) l.setSelection(new v.NodeSelection(h));
                                else {
                                    var p = l.mapping.map(a);
                                    l.mapping.maps[l.mapping.maps.length - 1].forEach(function (e, t, n, o) {
                                        return (p = o);
                                    }),
                                        l.setSelection(eK(e, h, l.doc.resolve(p)));
                                }
                                e.focus(), e.dispatch(l.setMeta("uiEvent", "drop"));
                            }
                        }
                    }
                }
            }),
            (tt.focus = function (e) {
                (e.input.lastFocus = Date.now()),
                    e.focused ||
                        (e.domObserver.stop(),
                        e.dom.classList.add("ProseMirror-focused"),
                        e.domObserver.start(),
                        (e.focused = !0),
                        setTimeout(function () {
                            e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && eR(e);
                        }, 20));
            }),
            (tt.blur = function (e, t) {
                e.focused && (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), t.relatedTarget && e.dom.contains(t.relatedTarget) && e.domObserver.currentSelection.clear(), (e.focused = !1));
            }),
            (tt.beforeinput = function (e, t) {
                if (K && U && "deleteContentBackward" == t.inputType) {
                    e.domObserver.flushSoon();
                    var n = e.input.domChangeCount;
                    setTimeout(function () {
                        if (
                            e.input.domChangeCount == n &&
                            (e.dom.blur(),
                            e.focus(),
                            !e.someProp("handleKeyDown", function (t) {
                                return t(e, E(8, "Backspace"));
                            }))
                        ) {
                            var t = e.state.selection.$cursor;
                            t && t.pos > 0 && e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView());
                        }
                    }, 50);
                }
            }),
            tn))
                tt[tN] = tn[tN];
            function tD(e, t) {
                if (e == t) return !0;
                for (var n in e) if (e[n] !== t[n]) return !1;
                for (var o in t) if (!(o in e)) return !1;
                return !0;
            }
            var tO = (function () {
                    function e(t, n) {
                        h(this, e), (this.toDOM = t), (this.spec = n || tE), (this.side = this.spec.side || 0);
                    }
                    return (
                        m(e, [
                            {
                                key: "map",
                                value: function (e, t, n, o) {
                                    var r = e.mapResult(t.from + o, this.side < 0 ? -1 : 1),
                                        i = r.pos;
                                    return r.deleted ? null : new tx(i - n, i - n, this);
                                },
                            },
                            {
                                key: "valid",
                                value: function () {
                                    return !0;
                                },
                            },
                            {
                                key: "eq",
                                value: function (t) {
                                    return this == t || (t instanceof e && ((this.spec.key && this.spec.key == t.spec.key) || (this.toDOM == t.toDOM && tD(this.spec, t.spec))));
                                },
                            },
                            {
                                key: "destroy",
                                value: function (e) {
                                    this.spec.destroy && this.spec.destroy(e);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                tC = (function () {
                    function e(t, n) {
                        h(this, e), (this.attrs = t), (this.spec = n || tE);
                    }
                    return (
                        m(
                            e,
                            [
                                {
                                    key: "map",
                                    value: function (e, t, n, o) {
                                        var r = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
                                            i = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
                                        return r >= i ? null : new tx(r, i, this);
                                    },
                                },
                                {
                                    key: "valid",
                                    value: function (e, t) {
                                        return t.from < t.to;
                                    },
                                },
                                {
                                    key: "eq",
                                    value: function (t) {
                                        return this == t || (t instanceof e && tD(this.attrs, t.attrs) && tD(this.spec, t.spec));
                                    },
                                },
                                { key: "destroy", value: function () {} },
                            ],
                            [
                                {
                                    key: "is",
                                    value: function (t) {
                                        return t.type instanceof e;
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                tM = (function () {
                    function e(t, n) {
                        h(this, e), (this.attrs = t), (this.spec = n || tE);
                    }
                    return (
                        m(e, [
                            {
                                key: "map",
                                value: function (e, t, n, o) {
                                    var r = e.mapResult(t.from + o, 1);
                                    if (r.deleted) return null;
                                    var i = e.mapResult(t.to + o, -1);
                                    return i.deleted || i.pos <= r.pos ? null : new tx(r.pos - n, i.pos - n, this);
                                },
                            },
                            {
                                key: "valid",
                                value: function (e, t) {
                                    var n,
                                        o = e.content.findIndex(t.from),
                                        r = o.index,
                                        i = o.offset;
                                    return i == t.from && !(n = e.child(r)).isText && i + n.nodeSize == t.to;
                                },
                            },
                            {
                                key: "eq",
                                value: function (t) {
                                    return this == t || (t instanceof e && tD(this.attrs, t.attrs) && tD(this.spec, t.spec));
                                },
                            },
                            { key: "destroy", value: function () {} },
                        ]),
                        e
                    );
                })(),
                tx = (function () {
                    function e(t, n, o) {
                        h(this, e), (this.from = t), (this.to = n), (this.type = o);
                    }
                    return (
                        m(
                            e,
                            [
                                {
                                    key: "copy",
                                    value: function (t, n) {
                                        return new e(t, n, this.type);
                                    },
                                },
                                {
                                    key: "eq",
                                    value: function (e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                        return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
                                    },
                                },
                                {
                                    key: "map",
                                    value: function (e, t, n) {
                                        return this.type.map(e, this, t, n);
                                    },
                                },
                                {
                                    key: "spec",
                                    get: function () {
                                        return this.type.spec;
                                    },
                                },
                                {
                                    key: "inline",
                                    get: function () {
                                        return this.type instanceof tC;
                                    },
                                },
                                {
                                    key: "widget",
                                    get: function () {
                                        return this.type instanceof tO;
                                    },
                                },
                            ],
                            [
                                {
                                    key: "widget",
                                    value: function (t, n, o) {
                                        return new e(t, t, new tO(n, o));
                                    },
                                },
                                {
                                    key: "inline",
                                    value: function (t, n, o, r) {
                                        return new e(t, n, new tC(o, r));
                                    },
                                },
                                {
                                    key: "node",
                                    value: function (t, n, o, r) {
                                        return new e(t, n, new tM(o, r));
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                tT = [],
                tE = {},
                tP = (function () {
                    function e(t, n) {
                        h(this, e), (this.local = t.length ? t : tT), (this.children = n.length ? n : tT);
                    }
                    return (
                        m(
                            e,
                            [
                                {
                                    key: "find",
                                    value: function (e, t, n) {
                                        var o = [];
                                        return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o;
                                    },
                                },
                                {
                                    key: "findInner",
                                    value: function (e, t, n, o, r) {
                                        for (var i = 0; i < this.local.length; i++) {
                                            var s = this.local[i];
                                            s.from <= t && s.to >= e && (!r || r(s.spec)) && n.push(s.copy(s.from + o, s.to + o));
                                        }
                                        for (var a = 0; a < this.children.length; a += 3)
                                            if (this.children[a] < t && this.children[a + 1] > e) {
                                                var l = this.children[a] + 1;
                                                this.children[a + 2].findInner(e - l, t - l, n, o + l, r);
                                            }
                                    },
                                },
                                {
                                    key: "map",
                                    value: function (e, t, n) {
                                        return this == tA || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || tE);
                                    },
                                },
                                {
                                    key: "mapInner",
                                    value: function (t, n, o, r, i) {
                                        for (var s, a = 0; a < this.local.length; a++) {
                                            var l = this.local[a].map(t, o, r);
                                            l && l.type.valid(n, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[a].spec);
                                        }
                                        return this.children.length
                                            ? (function (e, t, n, o, r, i, s) {
                                                  for (
                                                      var a = e.slice(),
                                                          l = function (e) {
                                                              var t = 0;
                                                              n.maps[c].forEach(function (n, o, r, i) {
                                                                  for (var s = i - r - (o - n), l = 0; l < a.length; l += 3) {
                                                                      var c = a[l + 1];
                                                                      if (!(c < 0) && !(n > c + e - t)) {
                                                                          var d = a[l] + e - t;
                                                                          o >= d ? (a[l + 1] = n <= d ? -2 : -1) : n >= e && s && ((a[l] += s), (a[l + 1] += s));
                                                                      }
                                                                  }
                                                                  t += s;
                                                              }),
                                                                  (d = e = n.maps[c].map(e, -1));
                                                          },
                                                          c = 0,
                                                          d = i;
                                                      c < n.maps.length;
                                                      c++
                                                  )
                                                      l(d);
                                                  for (var u = !1, f = 0; f < a.length; f += 3)
                                                      if (a[f + 1] < 0) {
                                                          if (-2 == a[f + 1]) {
                                                              (u = !0), (a[f + 1] = -1);
                                                              continue;
                                                          }
                                                          var h = n.map(e[f] + i),
                                                              p = h - r;
                                                          if (p < 0 || p >= o.content.size) {
                                                              u = !0;
                                                              continue;
                                                          }
                                                          var m = n.map(e[f + 1] + i, -1) - r,
                                                              v = o.content.findIndex(p),
                                                              g = v.index,
                                                              y = v.offset,
                                                              b = o.maybeChild(g);
                                                          if (b && y == p && y + b.nodeSize == m) {
                                                              var k = a[f + 2].mapInner(n, b, h + 1, e[f] + i + 1, s);
                                                              k != tA ? ((a[f] = p), (a[f + 1] = m), (a[f + 2] = k)) : ((a[f + 1] = -2), (u = !0));
                                                          } else u = !0;
                                                      }
                                                  if (u) {
                                                      var w = tI(
                                                          (function (e, t, n, o, r, i, s) {
                                                              for (var a = 0; a < e.length; a += 3)
                                                                  -1 == e[a + 1] &&
                                                                      (function e(t, i) {
                                                                          for (var a = 0; a < t.local.length; a++) {
                                                                              var l = t.local[a].map(o, r, i);
                                                                              l ? n.push(l) : s.onRemove && s.onRemove(t.local[a].spec);
                                                                          }
                                                                          for (var c = 0; c < t.children.length; c += 3) e(t.children[c + 2], t.children[c] + i + 1);
                                                                      })(e[a + 2], t[a] + i + 1);
                                                              return n;
                                                          })(a, e, t, n, r, i, s),
                                                          o,
                                                          0,
                                                          s
                                                      );
                                                      t = w.local;
                                                      for (var S = 0; S < a.length; S += 3) a[S + 1] < 0 && (a.splice(S, 3), (S -= 3));
                                                      for (var N = 0, D = 0; N < w.children.length; N += 3) {
                                                          for (var O = w.children[N]; D < a.length && a[D] < O; ) D += 3;
                                                          a.splice(D, 0, w.children[N], w.children[N + 1], w.children[N + 2]);
                                                      }
                                                  }
                                                  return new tP(t.sort(tF), a);
                                              })(this.children, s || [], t, n, o, r, i)
                                            : s
                                            ? new e(s.sort(tF), tT)
                                            : tA;
                                    },
                                },
                                {
                                    key: "add",
                                    value: function (t, n) {
                                        return n.length ? (this == tA ? e.create(t, n) : this.addInner(t, n, 0)) : this;
                                    },
                                },
                                {
                                    key: "addInner",
                                    value: function (t, n, o) {
                                        var r,
                                            i = this,
                                            s = 0;
                                        t.forEach(function (e, t) {
                                            var a,
                                                l = t + o;
                                            if ((a = tB(n, e, l))) {
                                                for (r || (r = i.children.slice()); s < r.length && r[s] < t; ) s += 3;
                                                r[s] == t ? (r[s + 2] = r[s + 2].addInner(e, a, l + 1)) : r.splice(s, 0, t, t + e.nodeSize, tI(a, e, l + 1, tE)), (s += 3);
                                            }
                                        });
                                        for (var a = tR(s ? tz(n) : n, -o), l = 0; l < a.length; l++) a[l].type.valid(t, a[l]) || a.splice(l--, 1);
                                        return new e(a.length ? this.local.concat(a).sort(tF) : this.local, r || this.children);
                                    },
                                },
                                {
                                    key: "remove",
                                    value: function (e) {
                                        return 0 == e.length || this == tA ? this : this.removeInner(e, 0);
                                    },
                                },
                                {
                                    key: "removeInner",
                                    value: function (t, n) {
                                        for (var o = this.children, r = this.local, i = 0; i < o.length; i += 3) {
                                            for (var s, a = void 0, l = o[i] + n, c = o[i + 1] + n, d = 0; d < t.length; d++) (s = t[d]) && s.from > l && s.to < c && ((t[d] = null), (a || (a = [])).push(s));
                                            if (a) {
                                                o == this.children && (o = this.children.slice());
                                                var u = o[i + 2].removeInner(a, l + 1);
                                                u != tA ? (o[i + 2] = u) : (o.splice(i, 3), (i -= 3));
                                            }
                                        }
                                        if (r.length) {
                                            for (var f, h = 0; h < t.length; h++) if ((f = t[h])) for (var p = 0; p < r.length; p++) r[p].eq(f, n) && (r == this.local && (r = this.local.slice()), r.splice(p--, 1));
                                        }
                                        return o == this.children && r == this.local ? this : r.length || o.length ? new e(r, o) : tA;
                                    },
                                },
                                {
                                    key: "forChild",
                                    value: function (t, n) {
                                        if (this == tA) return this;
                                        if (n.isLeaf) return e.empty;
                                        for (var o, r, i = 0; i < this.children.length; i += 3)
                                            if (this.children[i] >= t) {
                                                this.children[i] == t && (o = this.children[i + 2]);
                                                break;
                                            }
                                        for (var s = t + 1, a = s + n.content.size, l = 0; l < this.local.length; l++) {
                                            var c = this.local[l];
                                            if (c.from < a && c.to > s && c.type instanceof tC) {
                                                var d = Math.max(s, c.from) - s,
                                                    u = Math.min(a, c.to) - s;
                                                d < u && (r || (r = [])).push(c.copy(d, u));
                                            }
                                        }
                                        if (r) {
                                            var f = new e(r.sort(tF), tT);
                                            return o ? new tV([f, o]) : f;
                                        }
                                        return o || tA;
                                    },
                                },
                                {
                                    key: "eq",
                                    value: function (t) {
                                        if (this == t) return !0;
                                        if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
                                        for (var n = 0; n < this.local.length; n++) if (!this.local[n].eq(t.local[n])) return !1;
                                        for (var o = 0; o < this.children.length; o += 3) if (this.children[o] != t.children[o] || this.children[o + 1] != t.children[o + 1] || !this.children[o + 2].eq(t.children[o + 2])) return !1;
                                        return !0;
                                    },
                                },
                                {
                                    key: "locals",
                                    value: function (e) {
                                        return tL(this.localsInner(e));
                                    },
                                },
                                {
                                    key: "localsInner",
                                    value: function (e) {
                                        if (this == tA) return tT;
                                        if (e.inlineContent || !this.local.some(tC.is)) return this.local;
                                        for (var t = [], n = 0; n < this.local.length; n++) this.local[n].type instanceof tC || t.push(this.local[n]);
                                        return t;
                                    },
                                },
                                {
                                    key: "forEachSet",
                                    value: function (e) {
                                        e(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "create",
                                    value: function (e, t) {
                                        return t.length ? tI(t, e, 0, tE) : tA;
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
            (tP.empty = new tP([], [])), (tP.removeOverlap = tL);
            var tA = tP.empty,
                tV = (function () {
                    function e(t) {
                        h(this, e), (this.members = t);
                    }
                    return (
                        m(
                            e,
                            [
                                {
                                    key: "map",
                                    value: function (t, n) {
                                        var o = this.members.map(function (e) {
                                            return e.map(t, n, tE);
                                        });
                                        return e.from(o);
                                    },
                                },
                                {
                                    key: "forChild",
                                    value: function (t, n) {
                                        if (n.isLeaf) return tP.empty;
                                        for (var o = [], r = 0; r < this.members.length; r++) {
                                            var i = this.members[r].forChild(t, n);
                                            i != tA && (i instanceof e ? (o = o.concat(i.members)) : o.push(i));
                                        }
                                        return e.from(o);
                                    },
                                },
                                {
                                    key: "eq",
                                    value: function (t) {
                                        if (!(t instanceof e) || t.members.length != this.members.length) return !1;
                                        for (var n = 0; n < this.members.length; n++) if (!this.members[n].eq(t.members[n])) return !1;
                                        return !0;
                                    },
                                },
                                {
                                    key: "locals",
                                    value: function (e) {
                                        for (var t, n = !0, o = 0; o < this.members.length; o++) {
                                            var r = this.members[o].localsInner(e);
                                            if (r.length) {
                                                if (t) {
                                                    n && ((t = t.slice()), (n = !1));
                                                    for (var i = 0; i < r.length; i++) t.push(r[i]);
                                                } else t = r;
                                            }
                                        }
                                        return t ? tL(n ? t : t.sort(tF)) : tT;
                                    },
                                },
                                {
                                    key: "forEachSet",
                                    value: function (e) {
                                        for (var t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "from",
                                    value: function (t) {
                                        switch (t.length) {
                                            case 0:
                                                return tA;
                                            case 1:
                                                return t[0];
                                            default:
                                                return new e(
                                                    t.every(function (e) {
                                                        return e instanceof tP;
                                                    })
                                                        ? t
                                                        : t.reduce(function (e, t) {
                                                              return e.concat(t instanceof tP ? t : t.members);
                                                          }, [])
                                                );
                                        }
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
            function tR(e, t) {
                if (!t || !e.length) return e;
                for (var n = [], o = 0; o < e.length; o++) {
                    var r = e[o];
                    n.push(new tx(r.from + t, r.to + t, r.type));
                }
                return n;
            }
            function tB(e, t, n) {
                if (t.isLeaf) return null;
                for (var o, r = n + t.nodeSize, i = null, s = 0; s < e.length; s++) (o = e[s]) && o.from > n && o.to < r && ((i || (i = [])).push(o), (e[s] = null));
                return i;
            }
            function tz(e) {
                for (var t = [], n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
                return t;
            }
            function tI(e, t, n, o) {
                var r = [],
                    i = !1;
                t.forEach(function (t, s) {
                    var a = tB(e, t, s + n);
                    if (a) {
                        i = !0;
                        var l = tI(a, t, n + s + 1, o);
                        l != tA && r.push(s, s + t.nodeSize, l);
                    }
                });
                for (var s = tR(i ? tz(e) : e, -n).sort(tF), a = 0; a < s.length; a++) s[a].type.valid(t, s[a]) || (o.onRemove && o.onRemove(s[a].spec), s.splice(a--, 1));
                return s.length || r.length ? new tP(s, r) : tA;
            }
            function tF(e, t) {
                return e.from - t.from || e.to - t.to;
            }
            function tL(e) {
                for (var t = e, n = 0; n < t.length - 1; n++) {
                    var o = t[n];
                    if (o.from != o.to)
                        for (var r = n + 1; r < t.length; r++) {
                            var i = t[r];
                            if (i.from == o.from) {
                                i.to != o.to && (t == e && (t = e.slice()), (t[r] = i.copy(i.from, o.to)), tq(t, r + 1, i.copy(o.to, i.to)));
                                continue;
                            }
                            i.from < o.to && (t == e && (t = e.slice()), (t[n] = o.copy(o.from, i.from)), tq(t, r, o.copy(i.from, o.to)));
                            break;
                        }
                }
                return t;
            }
            function tq(e, t, n) {
                for (; t < e.length && tF(n, e[t]) > 0; ) t++;
                e.splice(t, 0, n);
            }
            function tK(e) {
                var t = [];
                return (
                    e.someProp("decorations", function (n) {
                        var o = n(e.state);
                        o && o != tA && t.push(o);
                    }),
                    e.cursorWrapper && t.push(tP.create(e.state.doc, [e.cursorWrapper.deco])),
                    tV.from(t)
                );
            }
            var t$ = { childList: !0, characterData: !0, characterDataOldValue: !0, attributes: !0, attributeOldValue: !0, subtree: !0 },
                t_ = I && F <= 11,
                tW = (function () {
                    function e() {
                        h(this, e), (this.anchorNode = null), (this.anchorOffset = 0), (this.focusNode = null), (this.focusOffset = 0);
                    }
                    return (
                        m(e, [
                            {
                                key: "set",
                                value: function (e) {
                                    (this.anchorNode = e.anchorNode), (this.anchorOffset = e.anchorOffset), (this.focusNode = e.focusNode), (this.focusOffset = e.focusOffset);
                                },
                            },
                            {
                                key: "clear",
                                value: function () {
                                    this.anchorNode = this.focusNode = null;
                                },
                            },
                            {
                                key: "eq",
                                value: function (e) {
                                    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                tj = (function () {
                    function e(t, n) {
                        var o = this;
                        h(this, e),
                            (this.view = t),
                            (this.handleDOMChange = n),
                            (this.queue = []),
                            (this.flushingSoon = -1),
                            (this.observer = null),
                            (this.currentSelection = new tW()),
                            (this.onCharData = null),
                            (this.suppressingSelectionUpdates = !1),
                            (this.lastChangedTextNode = null),
                            (this.observer =
                                window.MutationObserver &&
                                new window.MutationObserver(function (e) {
                                    for (var t = 0; t < e.length; t++) o.queue.push(e[t]);
                                    I &&
                                    F <= 11 &&
                                    e.some(function (e) {
                                        return ("childList" == e.type && e.removedNodes.length) || ("characterData" == e.type && e.oldValue.length > e.target.nodeValue.length);
                                    })
                                        ? o.flushSoon()
                                        : o.flush();
                                })),
                            t_ &&
                                (this.onCharData = function (e) {
                                    o.queue.push({ target: e.target, type: "characterData", oldValue: e.prevValue }), o.flushSoon();
                                }),
                            (this.onSelectionChange = this.onSelectionChange.bind(this));
                    }
                    return (
                        m(e, [
                            {
                                key: "flushSoon",
                                value: function () {
                                    var e = this;
                                    this.flushingSoon < 0 &&
                                        (this.flushingSoon = window.setTimeout(function () {
                                            (e.flushingSoon = -1), e.flush();
                                        }, 20));
                                },
                            },
                            {
                                key: "forceFlush",
                                value: function () {
                                    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), (this.flushingSoon = -1), this.flush());
                                },
                            },
                            {
                                key: "start",
                                value: function () {
                                    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, t$)),
                                        this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
                                        this.connectSelection();
                                },
                            },
                            {
                                key: "stop",
                                value: function () {
                                    var e = this;
                                    if (this.observer) {
                                        var t = this.observer.takeRecords();
                                        if (t.length) {
                                            for (var n = 0; n < t.length; n++) this.queue.push(t[n]);
                                            window.setTimeout(function () {
                                                return e.flush();
                                            }, 20);
                                        }
                                        this.observer.disconnect();
                                    }
                                    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
                                },
                            },
                            {
                                key: "connectSelection",
                                value: function () {
                                    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
                                },
                            },
                            {
                                key: "disconnectSelection",
                                value: function () {
                                    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
                                },
                            },
                            {
                                key: "suppressSelectionUpdates",
                                value: function () {
                                    var e = this;
                                    (this.suppressingSelectionUpdates = !0),
                                        setTimeout(function () {
                                            return (e.suppressingSelectionUpdates = !1);
                                        }, 50);
                                },
                            },
                            {
                                key: "onSelectionChange",
                                value: function () {
                                    if (e$(this.view)) {
                                        if (this.suppressingSelectionUpdates) return eR(this.view);
                                        if (I && F <= 11 && !this.view.state.selection.empty) {
                                            var e = this.view.domSelectionRange();
                                            if (e.focusNode && D(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
                                        }
                                        this.flush();
                                    }
                                },
                            },
                            {
                                key: "setCurSelection",
                                value: function () {
                                    this.currentSelection.set(this.view.domSelectionRange());
                                },
                            },
                            {
                                key: "ignoreSelectionChange",
                                value: function (e) {
                                    if (!e.focusNode) return !0;
                                    for (var t, n = new Set(), o = e.focusNode; o; o = k(o)) n.add(o);
                                    for (var r = e.anchorNode; r; r = k(r))
                                        if (n.has(r)) {
                                            t = r;
                                            break;
                                        }
                                    var i = t && this.view.docView.nearestDesc(t);
                                    if (i && i.ignoreMutation({ type: "selection", target: 3 == t.nodeType ? t.parentNode : t })) return this.setCurSelection(), !0;
                                },
                            },
                            {
                                key: "pendingRecords",
                                value: function () {
                                    if (this.observer) {
                                        var e,
                                            t = o(this.observer.takeRecords());
                                        try {
                                            for (t.s(); !(e = t.n()).done; ) {
                                                var n = e.value;
                                                this.queue.push(n);
                                            }
                                        } catch (e) {
                                            t.e(e);
                                        } finally {
                                            t.f();
                                        }
                                    }
                                    return this.queue;
                                },
                            },
                            {
                                key: "flush",
                                value: function () {
                                    var e = this.view;
                                    if (e.docView && !(this.flushingSoon > -1)) {
                                        var t = this.pendingRecords();
                                        t.length && (this.queue = []);
                                        var n = e.domSelectionRange(),
                                            i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && e$(e) && !this.ignoreSelectionChange(n),
                                            s = -1,
                                            a = -1,
                                            l = !1,
                                            c = [];
                                        if (e.editable)
                                            for (var d = 0; d < t.length; d++) {
                                                var u = this.registerMutation(t[d], c);
                                                u && ((s = s < 0 ? u.from : Math.min(u.from, s)), (a = a < 0 ? u.to : Math.max(u.to, a)), u.typeOver && (l = !0));
                                            }
                                        if (L && c.length) {
                                            var f = c.filter(function (e) {
                                                return "BR" == e.nodeName;
                                            });
                                            if (2 == f.length) {
                                                var h =
                                                        (function (e) {
                                                            if (Array.isArray(e)) return e;
                                                        })(f) ||
                                                        (function (e, t) {
                                                            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                                            if (null != n) {
                                                                var o,
                                                                    r,
                                                                    i,
                                                                    s,
                                                                    a = [],
                                                                    l = !0,
                                                                    c = !1;
                                                                try {
                                                                    for (i = (n = n.call(e)).next; !(l = (o = i.call(n)).done) && (a.push(o.value), 2 !== a.length); l = !0);
                                                                } catch (e) {
                                                                    (c = !0), (r = e);
                                                                } finally {
                                                                    try {
                                                                        if (!l && null != n.return && ((s = n.return()), Object(s) !== s)) return;
                                                                    } finally {
                                                                        if (c) throw r;
                                                                    }
                                                                }
                                                                return a;
                                                            }
                                                        })(f, 2) ||
                                                        r(f, 2) ||
                                                        (function () {
                                                            throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                        })(),
                                                    p = h[0],
                                                    m = h[1];
                                                p.parentNode && p.parentNode.parentNode == m.parentNode ? m.remove() : p.remove();
                                            } else {
                                                var g,
                                                    y = this.currentSelection.focusNode,
                                                    b = o(f);
                                                try {
                                                    for (b.s(); !(g = b.n()).done; ) {
                                                        var k = g.value,
                                                            w = k.parentNode;
                                                        w &&
                                                            "LI" == w.nodeName &&
                                                            (!y ||
                                                                (function (e, t) {
                                                                    for (var n = t.parentNode; n && n != e.dom; n = n.parentNode) {
                                                                        var o = e.docView.nearestDesc(n, !0);
                                                                        if (o && o.node.isBlock) return n;
                                                                    }
                                                                    return null;
                                                                })(e, y) != w) &&
                                                            k.remove();
                                                    }
                                                } catch (e) {
                                                    b.e(e);
                                                } finally {
                                                    b.f();
                                                }
                                            }
                                        }
                                        var S = null;
                                        s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && T(n) && (S = eA(e)) && S.eq(v.Selection.near(e.state.doc.resolve(0), 1))
                                            ? ((e.input.lastFocus = 0), eR(e), this.currentSelection.set(n), e.scrollToSelection())
                                            : (s > -1 || i) &&
                                              (s > -1 &&
                                                  (e.docView.markDirty(s, a),
                                                  tH.has(e) ||
                                                      (tH.set(e, null), -1 === ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace)) ||
                                                      ((e.requiresGeckoHackNode = L),
                                                      tU ||
                                                          (console.warn(
                                                              "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."
                                                          ),
                                                          (tU = !0)))),
                                              this.handleDOMChange(s, a, l, c),
                                              e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || eR(e),
                                              this.currentSelection.set(n));
                                    }
                                },
                            },
                            {
                                key: "registerMutation",
                                value: function (e, t) {
                                    if (t.indexOf(e.target) > -1) return null;
                                    var n = this.view.docView.nearestDesc(e.target);
                                    if (
                                        ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || ("style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style")))) ||
                                        !n ||
                                        n.ignoreMutation(e)
                                    )
                                        return null;
                                    if ("childList" == e.type) {
                                        for (var o = 0; o < e.addedNodes.length; o++) {
                                            var r = e.addedNodes[o];
                                            t.push(r), 3 == r.nodeType && (this.lastChangedTextNode = r);
                                        }
                                        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return { from: n.posBefore, to: n.posAfter };
                                        var i = e.previousSibling,
                                            s = e.nextSibling;
                                        if (I && F <= 11 && e.addedNodes.length)
                                            for (var a = 0; a < e.addedNodes.length; a++) {
                                                var l = e.addedNodes[a],
                                                    c = l.previousSibling,
                                                    d = l.nextSibling;
                                                (!c || 0 > Array.prototype.indexOf.call(e.addedNodes, c)) && (i = c), (!d || 0 > Array.prototype.indexOf.call(e.addedNodes, d)) && (s = d);
                                            }
                                        var u = i && i.parentNode == e.target ? b(i) + 1 : 0,
                                            f = n.localPosFromDOM(e.target, u, -1),
                                            h = s && s.parentNode == e.target ? b(s) : e.target.childNodes.length;
                                        return { from: f, to: n.localPosFromDOM(e.target, h, 1) };
                                    }
                                    return "attributes" == e.type
                                        ? { from: n.posAtStart - n.border, to: n.posAtEnd + n.border }
                                        : ((this.lastChangedTextNode = e.target), { from: n.posAtStart, to: n.posAtEnd, typeOver: e.target.nodeValue == e.oldValue });
                                },
                            },
                        ]),
                        e
                    );
                })(),
                tH = new WeakMap(),
                tU = !1;
            function tG(e, t) {
                var n = t.startContainer,
                    o = t.startOffset,
                    r = t.endContainer,
                    i = t.endOffset,
                    s = e.domAtPos(e.state.selection.anchor);
                if (D(s.node, s.offset, r, i)) {
                    var a = [r, i, n, o];
                    (n = a[0]), (o = a[1]), (r = a[2]), (i = a[3]);
                }
                return { anchorNode: n, anchorOffset: o, focusNode: r, focusOffset: i };
            }
            function tX(e) {
                var t = e.pmViewDesc;
                if (t) return t.parseRule();
                if ("BR" == e.nodeName && e.parentNode) {
                    if (_ && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                        var n = document.createElement("div");
                        return n.appendChild(document.createElement("li")), { skip: n };
                    }
                    if (e.parentNode.lastChild == e || (_ && /^(tr|table)$/i.test(e.parentNode.nodeName))) return { ignore: !0 };
                } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder")) return { ignore: !0 };
                return null;
            }
            var tY = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
            function tJ(e, t, n) {
                return Math.max(n.anchor, n.head) > t.content.size ? null : eK(e, t.resolve(n.anchor), t.resolve(n.head));
            }
            function tQ(e, t, n) {
                for (var o = e.depth, r = t ? e.end() : e.pos; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount); ) o--, r++, (t = !1);
                if (n) for (var i = e.node(o).maybeChild(e.indexAfter(o)); i && !i.isLeaf; ) (i = i.firstChild), r++;
                return r;
            }
            function tZ(e) {
                if (2 != e.length) return !1;
                var t = e.charCodeAt(0),
                    n = e.charCodeAt(1);
                return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
            }
            var t0 = (function () {
                function e(t, n) {
                    var o = this;
                    h(this, e),
                        (this._root = null),
                        (this.focused = !1),
                        (this.trackWrites = null),
                        (this.mounted = !1),
                        (this.markCursor = null),
                        (this.cursorWrapper = null),
                        (this.lastSelectedViewDesc = void 0),
                        (this.input = new tr()),
                        (this.prevDirectPlugins = []),
                        (this.pluginViews = []),
                        (this.requiresGeckoHackNode = !1),
                        (this.dragging = null),
                        (this._props = n),
                        (this.state = n.state),
                        (this.directPlugins = n.plugins || []),
                        this.directPlugins.forEach(t6),
                        (this.dispatch = this.dispatch.bind(this)),
                        (this.dom = (t && t.mount) || document.createElement("div")),
                        t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)),
                        (this.editable = t3(this)),
                        t2(this),
                        (this.nodeViews = t5(this)),
                        (this.docView = ey(this.state.doc, t1(this), tK(this), this.dom, this)),
                        (this.domObserver = new tj(this, function (e, t, n, r) {
                            return (function (e, t, n, o, r) {
                                var i,
                                    s,
                                    a,
                                    l,
                                    c,
                                    d,
                                    u = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
                                if (((e.input.compositionPendingChanges = 0), t < 0)) {
                                    var f = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null,
                                        h = eA(e, f);
                                    if (h && !e.state.selection.eq(h)) {
                                        if (
                                            K &&
                                            U &&
                                            13 === e.input.lastKeyCode &&
                                            Date.now() - 100 < e.input.lastKeyCodeTime &&
                                            e.someProp("handleKeyDown", function (t) {
                                                return t(e, E(13, "Enter"));
                                            })
                                        )
                                            return;
                                        var p = e.state.tr.setSelection(h);
                                        "pointer" == f ? p.setMeta("pointer", !0) : "key" == f && p.scrollIntoView(), u && p.setMeta("composition", u), e.dispatch(p);
                                    }
                                    return;
                                }
                                var m = e.state.doc.resolve(t),
                                    y = m.sharedDepth(n);
                                (t = m.before(y + 1)), (n = e.state.doc.resolve(n).after(y + 1));
                                var b = e.state.selection,
                                    k = (function (e, t, n) {
                                        var o,
                                            r = e.docView.parseRange(t, n),
                                            i = r.node,
                                            s = r.fromOffset,
                                            a = r.toOffset,
                                            l = r.from,
                                            c = r.to,
                                            d = e.domSelectionRange(),
                                            u = d.anchorNode;
                                        if (
                                            (u && e.dom.contains(1 == u.nodeType ? u : u.parentNode) && ((o = [{ node: u, offset: d.anchorOffset }]), T(d) || o.push({ node: d.focusNode, offset: d.focusOffset })),
                                            K && 8 === e.input.lastKeyCode)
                                        )
                                            for (var f = a; f > s; f--) {
                                                var h = i.childNodes[f - 1],
                                                    p = h.pmViewDesc;
                                                if ("BR" == h.nodeName && !p) {
                                                    a = f;
                                                    break;
                                                }
                                                if (!p || p.size) break;
                                            }
                                        var m = e.state.doc,
                                            v = e.someProp("domParser") || g.DOMParser.fromSchema(e.state.schema),
                                            y = m.resolve(l),
                                            b = null,
                                            k = v.parse(i, {
                                                topNode: y.parent,
                                                topMatch: y.parent.contentMatchAt(y.index()),
                                                topOpen: !0,
                                                from: s,
                                                to: a,
                                                preserveWhitespace: "pre" != y.parent.type.whitespace || "full",
                                                findPositions: o,
                                                ruleFromNode: tX,
                                                context: y,
                                            });
                                        if (o && null != o[0].pos) {
                                            var w = o[0].pos,
                                                S = o[1] && o[1].pos;
                                            null == S && (S = w), (b = { anchor: w + l, head: S + l });
                                        }
                                        return { doc: k, sel: b, from: l, to: c };
                                    })(e, t, n),
                                    w = e.state.doc,
                                    S = w.slice(k.from, k.to);
                                8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? ((i = e.state.selection.to), (s = "end")) : ((i = e.state.selection.from), (s = "start")), (e.input.lastKeyCode = null);
                                var N = (function (e, t, n, o, r) {
                                    var i = e.findDiffStart(t, n);
                                    if (null == i) return null;
                                    var s = e.findDiffEnd(t, n + e.size, n + t.size),
                                        a = s.a,
                                        l = s.b;
                                    if ("end" == r) {
                                        var c = Math.max(0, i - Math.min(a, l));
                                        o -= a + c - i;
                                    }
                                    if (a < i && e.size < t.size) {
                                        var d = o <= i && o >= a ? i - o : 0;
                                        (i -= d) && i < t.size && tZ(t.textBetween(i - 1, i + 1)) && (i += d ? 1 : -1), (l = i + (l - a)), (a = i);
                                    } else if (l < i) {
                                        var u = o <= i && o >= l ? i - o : 0;
                                        (i -= u) && i < e.size && tZ(e.textBetween(i - 1, i + 1)) && (i += u ? 1 : -1), (a = i + (a - l)), (l = i);
                                    }
                                    return { start: i, endA: a, endB: l };
                                })(S.content, k.doc.content, k.from, i, s);
                                if (
                                    (N && e.input.domChangeCount++,
                                    ((W && e.input.lastIOSEnter > Date.now() - 225) || U) &&
                                        r.some(function (e) {
                                            return 1 == e.nodeType && !tY.test(e.nodeName);
                                        }) &&
                                        (!N || N.endA >= N.endB) &&
                                        e.someProp("handleKeyDown", function (t) {
                                            return t(e, E(13, "Enter"));
                                        }))
                                ) {
                                    e.input.lastIOSEnter = 0;
                                    return;
                                }
                                if (!N) {
                                    if (o && b instanceof v.TextSelection && !b.empty && b.$head.sameParent(b.$anchor) && !e.composing && !(k.sel && k.sel.anchor != k.sel.head)) N = { start: b.from, endA: b.to, endB: b.to };
                                    else {
                                        if (k.sel) {
                                            var D = tJ(e, e.state.doc, k.sel);
                                            if (D && !D.eq(e.state.selection)) {
                                                var O = e.state.tr.setSelection(D);
                                                u && O.setMeta("composition", u), e.dispatch(O);
                                            }
                                        }
                                        return;
                                    }
                                }
                                e.state.selection.from < e.state.selection.to &&
                                    N.start == N.endB &&
                                    e.state.selection instanceof v.TextSelection &&
                                    (N.start > e.state.selection.from && N.start <= e.state.selection.from + 2 && e.state.selection.from >= k.from
                                        ? (N.start = e.state.selection.from)
                                        : N.endA < e.state.selection.to && N.endA >= e.state.selection.to - 2 && e.state.selection.to <= k.to && ((N.endB += e.state.selection.to - N.endA), (N.endA = e.state.selection.to))),
                                    I && F <= 11 && N.endB == N.start + 1 && N.endA == N.start && N.start > k.from && " \xa0" == k.doc.textBetween(N.start - k.from - 1, N.start - k.from + 1) && (N.start--, N.endA--, N.endB--);
                                var C = k.doc.resolveNoCache(N.start - k.from),
                                    M = k.doc.resolveNoCache(N.endB - k.from),
                                    x = w.resolve(N.start),
                                    P = C.sameParent(M) && C.parent.inlineContent && x.end() >= N.endA;
                                if (
                                    ((W &&
                                        e.input.lastIOSEnter > Date.now() - 225 &&
                                        (!P ||
                                            r.some(function (e) {
                                                return "DIV" == e.nodeName || "P" == e.nodeName;
                                            }))) ||
                                        (!P && C.pos < k.doc.content.size && !C.sameParent(M) && (a = v.Selection.findFrom(k.doc.resolve(C.pos + 1), 1, !0)) && a.head == M.pos)) &&
                                    e.someProp("handleKeyDown", function (t) {
                                        return t(e, E(13, "Enter"));
                                    })
                                ) {
                                    e.input.lastIOSEnter = 0;
                                    return;
                                }
                                if (
                                    e.state.selection.anchor > N.start &&
                                    (function (e, t, n, o, r) {
                                        if (n - t <= r.pos - o.pos || tQ(o, !0, !1) < r.pos) return !1;
                                        var i = e.resolve(t);
                                        if (!o.parent.isTextblock) {
                                            var s = i.nodeAfter;
                                            return null != s && n == t + s.nodeSize;
                                        }
                                        if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock) return !1;
                                        var a = e.resolve(tQ(i, !0, !0));
                                        return !(!a.parent.isTextblock || a.pos > n || tQ(a, !0, !1) < n) && o.parent.content.cut(o.parentOffset).eq(a.parent.content);
                                    })(w, N.start, N.endA, C, M) &&
                                    e.someProp("handleKeyDown", function (t) {
                                        return t(e, E(8, "Backspace"));
                                    })
                                ) {
                                    U && K && e.domObserver.suppressSelectionUpdates();
                                    return;
                                }
                                K && U && N.endB == N.start && (e.input.lastAndroidDelete = Date.now()),
                                    U &&
                                        !P &&
                                        C.start() != M.start() &&
                                        0 == M.parentOffset &&
                                        C.depth == M.depth &&
                                        k.sel &&
                                        k.sel.anchor == k.sel.head &&
                                        k.sel.head == N.endA &&
                                        ((N.endB -= 2),
                                        (M = k.doc.resolveNoCache(N.endB - k.from)),
                                        setTimeout(function () {
                                            e.someProp("handleKeyDown", function (t) {
                                                return t(e, E(13, "Enter"));
                                            });
                                        }, 20));
                                var A = N.start,
                                    V = N.endA;
                                if (P) {
                                    if (C.pos == M.pos)
                                        I &&
                                            F <= 11 &&
                                            0 == C.parentOffset &&
                                            (e.domObserver.suppressSelectionUpdates(),
                                            setTimeout(function () {
                                                return eR(e);
                                            }, 20)),
                                            (l = e.state.tr.delete(A, V)),
                                            (c = w.resolve(N.start).marksAcross(w.resolve(N.endA)));
                                    else if (
                                        N.endA == N.endB &&
                                        (d = (function (e, t) {
                                            for (var n, o, r, i = e.firstChild.marks, s = t.firstChild.marks, a = i, l = s, c = 0; c < s.length; c++) a = s[c].removeFromSet(a);
                                            for (var d = 0; d < i.length; d++) l = i[d].removeFromSet(l);
                                            if (1 == a.length && 0 == l.length)
                                                (o = a[0]),
                                                    (n = "add"),
                                                    (r = function (e) {
                                                        return e.mark(o.addToSet(e.marks));
                                                    });
                                            else {
                                                if (0 != a.length || 1 != l.length) return null;
                                                (o = l[0]),
                                                    (n = "remove"),
                                                    (r = function (e) {
                                                        return e.mark(o.removeFromSet(e.marks));
                                                    });
                                            }
                                            for (var u = [], f = 0; f < t.childCount; f++) u.push(r(t.child(f)));
                                            if (g.Fragment.from(u).eq(e)) return { mark: o, type: n };
                                        })(C.parent.content.cut(C.parentOffset, M.parentOffset), x.parent.content.cut(x.parentOffset, N.endA - x.start())))
                                    )
                                        (l = e.state.tr), "add" == d.type ? l.addMark(A, V, d.mark) : l.removeMark(A, V, d.mark);
                                    else if (C.parent.child(C.index()).isText && C.index() == M.index() - (M.textOffset ? 0 : 1)) {
                                        var R = C.parent.textBetween(C.parentOffset, M.parentOffset);
                                        if (
                                            e.someProp("handleTextInput", function (t) {
                                                return t(e, A, V, R);
                                            })
                                        )
                                            return;
                                        l = e.state.tr.insertText(R, A, V);
                                    }
                                }
                                if ((l || (l = e.state.tr.replace(A, V, k.doc.slice(N.start - k.from, N.endB - k.from))), k.sel)) {
                                    var B = tJ(e, l.doc, k.sel);
                                    B &&
                                        !((K && U && e.composing && B.empty && (N.start != N.endB || e.input.lastAndroidDelete < Date.now() - 100) && (B.head == A || B.head == l.mapping.map(V) - 1)) || (I && B.empty && B.head == A)) &&
                                        l.setSelection(B);
                                }
                                c && l.ensureMarks(c), u && l.setMeta("composition", u), e.dispatch(l.scrollIntoView());
                            })(o, e, t, n, r);
                        })),
                        this.domObserver.start(),
                        (function (e) {
                            for (var t in tt)
                                !(function () {
                                    var n = tt[t];
                                    e.dom.addEventListener(
                                        t,
                                        (e.input.eventHandlers[t] = function (t) {
                                            !(function (e, t) {
                                                if (!t.bubbles) return !0;
                                                if (t.defaultPrevented) return !1;
                                                for (var n = t.target; n != e.dom; n = n.parentNode) if (!n || 11 == n.nodeType || (n.pmViewDesc && n.pmViewDesc.stopEvent(t))) return !1;
                                                return !0;
                                            })(e, t) ||
                                                ta(e, t) ||
                                                (!e.editable && t.type in tn) ||
                                                n(e, t);
                                        }),
                                        to[t] ? { passive: !0 } : void 0
                                    );
                                })();
                            _ &&
                                e.dom.addEventListener("input", function () {
                                    return null;
                                }),
                                ts(e);
                        })(this),
                        this.updatePluginViews();
                }
                return (
                    m(e, [
                        {
                            key: "composing",
                            get: function () {
                                return this.input.composing;
                            },
                        },
                        {
                            key: "props",
                            get: function () {
                                if (this._props.state != this.state) {
                                    var e = this._props;
                                    for (var t in ((this._props = {}), e)) this._props[t] = e[t];
                                    this._props.state = this.state;
                                }
                                return this._props;
                            },
                        },
                        {
                            key: "update",
                            value: function (e) {
                                e.handleDOMEvents != this._props.handleDOMEvents && ts(this);
                                var t = this._props;
                                (this._props = e), e.plugins && (e.plugins.forEach(t6), (this.directPlugins = e.plugins)), this.updateStateInner(e.state, t);
                            },
                        },
                        {
                            key: "setProps",
                            value: function (e) {
                                var t = {};
                                for (var n in this._props) t[n] = this._props[n];
                                for (var o in ((t.state = this.state), e)) t[o] = e[o];
                                this.update(t);
                            },
                        },
                        {
                            key: "updateState",
                            value: function (e) {
                                this.updateStateInner(e, this._props);
                            },
                        },
                        {
                            key: "updateStateInner",
                            value: function (e, t) {
                                var n,
                                    o,
                                    r,
                                    i,
                                    s = this.state,
                                    a = !1,
                                    l = !1;
                                e.storedMarks && this.composing && (tv(this), (l = !0)), (this.state = e);
                                var c = s.plugins != e.plugins || this._props.plugins != t.plugins;
                                if (c || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
                                    var d = t5(this);
                                    (function (e, t) {
                                        var n = 0,
                                            o = 0;
                                        for (var r in e) {
                                            if (e[r] != t[r]) return !0;
                                            n++;
                                        }
                                        for (var i in t) o++;
                                        return n != o;
                                    })(d, this.nodeViews) && ((this.nodeViews = d), (a = !0));
                                }
                                (c || t.handleDOMEvents != this._props.handleDOMEvents) && ts(this), (this.editable = t3(this)), t2(this);
                                var u = tK(this),
                                    f = t1(this),
                                    h = s.plugins == e.plugins || s.doc.eq(e.doc) ? (e.scrollToSelection > s.scrollToSelection ? "to selection" : "preserve") : "reset",
                                    p = a || !this.docView.matchesNode(e.doc, f, u);
                                (p || !e.selection.eq(s.selection)) && (l = !0);
                                var m =
                                    "preserve" == h &&
                                    l &&
                                    null == this.dom.style.overflowAnchor &&
                                    (function (e) {
                                        for (var t, n, o = e.dom.getBoundingClientRect(), r = Math.max(0, o.top), i = (o.left + o.right) / 2, s = r + 1; s < Math.min(innerHeight, o.bottom); s += 5) {
                                            var a = e.root.elementFromPoint(i, s);
                                            if (a && a != e.dom && e.dom.contains(a)) {
                                                var l = a.getBoundingClientRect();
                                                if (l.top >= r - 20) {
                                                    (t = a), (n = l.top);
                                                    break;
                                                }
                                            }
                                        }
                                        return { refDOM: t, refTop: n, stack: Q(e.dom) };
                                    })(this);
                                if (l) {
                                    this.domObserver.stop();
                                    var v,
                                        g,
                                        y,
                                        k,
                                        w,
                                        S =
                                            p &&
                                            (I || K) &&
                                            !this.composing &&
                                            !s.selection.empty &&
                                            !e.selection.empty &&
                                            ((v = s.selection), (g = e.selection), (y = Math.min(v.$anchor.sharedDepth(v.head), g.$anchor.sharedDepth(g.head))), v.$anchor.start(y) != g.$anchor.start(y));
                                    if (p) {
                                        var N = K ? (this.trackWrites = this.domSelectionRange().focusNode) : null;
                                        this.composing &&
                                            (this.input.compositionNode = (function (e) {
                                                var t = e.domSelectionRange();
                                                if (!t.focusNode) return null;
                                                var n = (function (e, t) {
                                                        for (;;) {
                                                            if (3 == e.nodeType && t) return e;
                                                            if (1 == e.nodeType && t > 0) {
                                                                if ("false" == e.contentEditable) return null;
                                                                t = M((e = e.childNodes[t - 1]));
                                                            } else {
                                                                if (!e.parentNode || x(e)) return null;
                                                                (t = b(e)), (e = e.parentNode);
                                                            }
                                                        }
                                                    })(t.focusNode, t.focusOffset),
                                                    o = (function (e, t) {
                                                        for (;;) {
                                                            if (3 == e.nodeType && t < e.nodeValue.length) return e;
                                                            if (1 == e.nodeType && t < e.childNodes.length) {
                                                                if ("false" == e.contentEditable) return null;
                                                                (e = e.childNodes[t]), (t = 0);
                                                            } else {
                                                                if (!e.parentNode || x(e)) return null;
                                                                (t = b(e) + 1), (e = e.parentNode);
                                                            }
                                                        }
                                                    })(t.focusNode, t.focusOffset);
                                                if (n && o && n != o) {
                                                    var r = o.pmViewDesc,
                                                        i = e.domObserver.lastChangedTextNode;
                                                    if (n == i || o == i) return i;
                                                    if (!r || !r.isText(o.nodeValue)) return o;
                                                    if (e.input.compositionNode == o) {
                                                        var s = n.pmViewDesc;
                                                        if (!(!s || !s.isText(n.nodeValue))) return o;
                                                    }
                                                }
                                                return n || o;
                                            })(this)),
                                            (a || !this.docView.update(e.doc, f, u, this)) && (this.docView.updateOuterDeco(f), this.docView.destroy(), (this.docView = ey(e.doc, f, u, this.dom, this))),
                                            N && !this.trackWrites && (S = !0);
                                    }
                                    S ||
                                    !(
                                        this.input.mouseDown &&
                                        this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
                                        ((k = this.docView.domFromPos(this.state.selection.anchor, 0)), (w = this.domSelectionRange()), D(k.node, k.offset, w.anchorNode, w.anchorOffset))
                                    )
                                        ? eR(this, S)
                                        : (eL(this, e.selection), this.domObserver.setCurSelection()),
                                        this.domObserver.start();
                                }
                                (this.updatePluginViews(s), (null === (i = this.dragging) || void 0 === i ? void 0 : i.node) && !s.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, s), "reset" == h)
                                    ? (this.dom.scrollTop = 0)
                                    : "to selection" == h
                                    ? this.scrollToSelection()
                                    : m && ((n = m.refDOM), (o = m.refTop), Z(m.stack, 0 == (r = n ? n.getBoundingClientRect().top : 0) ? 0 : r - o));
                            },
                        },
                        {
                            key: "scrollToSelection",
                            value: function () {
                                var e = this,
                                    t = this.domSelectionRange().focusNode;
                                if (
                                    this.someProp("handleScrollToSelection", function (t) {
                                        return t(e);
                                    })
                                );
                                else if (this.state.selection instanceof v.NodeSelection) {
                                    var n = this.docView.domAfterPos(this.state.selection.from);
                                    1 == n.nodeType && J(this, n.getBoundingClientRect(), t);
                                } else J(this, this.coordsAtPos(this.state.selection.head, 1), t);
                            },
                        },
                        {
                            key: "destroyPluginViews",
                            value: function () {
                                for (var e; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
                            },
                        },
                        {
                            key: "updatePluginViews",
                            value: function (e) {
                                if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                                    for (var t = 0; t < this.pluginViews.length; t++) {
                                        var n = this.pluginViews[t];
                                        n.update && n.update(this, e);
                                    }
                                else {
                                    (this.prevDirectPlugins = this.directPlugins), this.destroyPluginViews();
                                    for (var o = 0; o < this.directPlugins.length; o++) {
                                        var r = this.directPlugins[o];
                                        r.spec.view && this.pluginViews.push(r.spec.view(this));
                                    }
                                    for (var i = 0; i < this.state.plugins.length; i++) {
                                        var s = this.state.plugins[i];
                                        s.spec.view && this.pluginViews.push(s.spec.view(this));
                                    }
                                }
                            },
                        },
                        {
                            key: "updateDraggedNode",
                            value: function (e, t) {
                                var n = e.node,
                                    o = -1;
                                if (this.state.doc.nodeAt(n.from) == n.node) o = n.from;
                                else {
                                    var r = n.from + (this.state.doc.content.size - t.doc.content.size);
                                    (r > 0 && this.state.doc.nodeAt(r)) == n.node && (o = r);
                                }
                                this.dragging = new tw(e.slice, e.move, o < 0 ? void 0 : v.NodeSelection.create(this.state.doc, o));
                            },
                        },
                        {
                            key: "someProp",
                            value: function (e, t) {
                                var n,
                                    o = this._props && this._props[e];
                                if (null != o && (n = t ? t(o) : o)) return n;
                                for (var r = 0; r < this.directPlugins.length; r++) {
                                    var i = this.directPlugins[r].props[e];
                                    if (null != i && (n = t ? t(i) : i)) return n;
                                }
                                var s = this.state.plugins;
                                if (s)
                                    for (var a = 0; a < s.length; a++) {
                                        var l = s[a].props[e];
                                        if (null != l && (n = t ? t(l) : l)) return n;
                                    }
                            },
                        },
                        {
                            key: "hasFocus",
                            value: function () {
                                if (I) {
                                    var e = this.root.activeElement;
                                    if (e == this.dom) return !0;
                                    if (!e || !this.dom.contains(e)) return !1;
                                    for (; e && this.dom != e && this.dom.contains(e); ) {
                                        if ("false" == e.contentEditable) return !1;
                                        e = e.parentElement;
                                    }
                                    return !0;
                                }
                                return this.root.activeElement == this.dom;
                            },
                        },
                        {
                            key: "focus",
                            value: function () {
                                this.domObserver.stop(),
                                    this.editable &&
                                        (function (e) {
                                            if (e.setActive) return e.setActive();
                                            if (ee) return e.focus(ee);
                                            var t = Q(e);
                                            e.focus(
                                                null == ee
                                                    ? {
                                                          get preventScroll() {
                                                              return (ee = { preventScroll: !0 }), !0;
                                                          },
                                                      }
                                                    : void 0
                                            ),
                                                ee || ((ee = !1), Z(t, 0));
                                        })(this.dom),
                                    eR(this),
                                    this.domObserver.start();
                            },
                        },
                        {
                            key: "root",
                            get: function () {
                                var e = this,
                                    t = this._root;
                                if (null == t) {
                                    for (
                                        var n,
                                            o = function (t) {
                                                if (9 == t.nodeType || (11 == t.nodeType && t.host))
                                                    return (
                                                        t.getSelection ||
                                                            (Object.getPrototypeOf(t).getSelection = function () {
                                                                return t.ownerDocument.getSelection();
                                                            }),
                                                        { v: (e._root = t) }
                                                    );
                                            },
                                            r = this.dom.parentNode;
                                        r;
                                        r = r.parentNode
                                    )
                                        if ((n = o(r))) return n.v;
                                }
                                return t || document;
                            },
                        },
                        {
                            key: "updateRoot",
                            value: function () {
                                this._root = null;
                            },
                        },
                        {
                            key: "posAtCoords",
                            value: function (e) {
                                return (function (e, t) {
                                    var n,
                                        o = e.dom.ownerDocument,
                                        r = 0,
                                        i = (function (e, t, n) {
                                            if (e.caretPositionFromPoint)
                                                try {
                                                    var o = e.caretPositionFromPoint(t, n);
                                                    if (o) return { node: o.offsetNode, offset: Math.min(M(o.offsetNode), o.offset) };
                                                } catch (e) {}
                                            if (e.caretRangeFromPoint) {
                                                var r = e.caretRangeFromPoint(t, n);
                                                if (r) return { node: r.startContainer, offset: Math.min(M(r.startContainer), r.startOffset) };
                                            }
                                        })(o, t.left, t.top);
                                    i && ((n = i.node), (r = i.offset));
                                    var s = (e.root.elementFromPoint ? e.root : o).elementFromPoint(t.left, t.top);
                                    if (!s || !e.dom.contains(1 != s.nodeType ? s.parentNode : s)) {
                                        var a = e.dom.getBoundingClientRect();
                                        if (
                                            !et(t, a) ||
                                            !(s = (function e(t, n, o) {
                                                var r = t.childNodes.length;
                                                if (r && o.top < o.bottom)
                                                    for (var i = Math.max(0, Math.min(r - 1, Math.floor((r * (n.top - o.top)) / (o.bottom - o.top)) - 2)), s = i; ; ) {
                                                        var a = t.childNodes[s];
                                                        if (1 == a.nodeType)
                                                            for (var l = a.getClientRects(), c = 0; c < l.length; c++) {
                                                                var d = l[c];
                                                                if (et(n, d)) return e(a, n, d);
                                                            }
                                                        if ((s = (s + 1) % r) == i) break;
                                                    }
                                                return t;
                                            })(e.dom, t, a))
                                        )
                                            return null;
                                    }
                                    if (_) for (var l = s; n && l; l = k(l)) l.draggable && (n = void 0);
                                    if (((s = (d = (c = s).parentNode) && /^li$/i.test(d.nodeName) && t.left < c.getBoundingClientRect().left ? d : c), n)) {
                                        if (L && 1 == n.nodeType && (r = Math.min(r, n.childNodes.length)) < n.childNodes.length) {
                                            var c,
                                                d,
                                                u,
                                                f,
                                                h,
                                                p = n.childNodes[r];
                                            "IMG" == p.nodeName && (h = p.getBoundingClientRect()).right <= t.left && h.bottom > t.top && r++;
                                        }
                                        G && r && 1 == n.nodeType && 1 == (f = n.childNodes[r - 1]).nodeType && "false" == f.contentEditable && f.getBoundingClientRect().top >= t.top && r--,
                                            n == e.dom && r == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom
                                                ? (u = e.state.doc.content.size)
                                                : (0 == r || 1 != n.nodeType || "BR" != n.childNodes[r - 1].nodeName) &&
                                                  (u = (function (e, t, n, o) {
                                                      for (var r = -1, i = t, s = !1; i != e.dom; ) {
                                                          var a = e.docView.nearestDesc(i, !0);
                                                          if (!a) return null;
                                                          if (1 == a.dom.nodeType && ((a.node.isBlock && a.parent) || !a.contentDOM)) {
                                                              var l = a.dom.getBoundingClientRect();
                                                              if (
                                                                  (a.node.isBlock && a.parent && ((!s && l.left > o.left) || l.top > o.top ? (r = a.posBefore) : ((!s && l.right < o.left) || l.bottom < o.top) && (r = a.posAfter), (s = !0)),
                                                                  !a.contentDOM && r < 0 && !a.node.isText)
                                                              )
                                                                  return (a.node.isBlock ? o.top < (l.top + l.bottom) / 2 : o.left < (l.left + l.right) / 2) ? a.posBefore : a.posAfter;
                                                          }
                                                          i = a.dom.parentNode;
                                                      }
                                                      return r > -1 ? r : e.docView.posFromDOM(t, n, -1);
                                                  })(e, n, r, t));
                                    }
                                    null == u &&
                                        (u = (function (e, t, n) {
                                            var o = (function e(t, n) {
                                                    for (var o, r, i, s, a = 2e8, l = 0, c = n.top, d = n.top, u = t.firstChild, f = 0; u; u = u.nextSibling, f++) {
                                                        var h = void 0;
                                                        if (1 == u.nodeType) h = u.getClientRects();
                                                        else {
                                                            if (3 != u.nodeType) continue;
                                                            h = S(u).getClientRects();
                                                        }
                                                        for (var p = 0; p < h.length; p++) {
                                                            var m = h[p];
                                                            if (m.top <= c && m.bottom >= d) {
                                                                (c = Math.max(m.bottom, c)), (d = Math.min(m.top, d));
                                                                var v = m.left > n.left ? m.left - n.left : m.right < n.left ? n.left - m.right : 0;
                                                                if (v < a) {
                                                                    (i = u),
                                                                        (a = v),
                                                                        (s = v && 3 == i.nodeType ? { left: m.right < n.left ? m.right : m.left, top: n.top } : n),
                                                                        1 == u.nodeType && v && (l = f + (n.left >= (m.left + m.right) / 2 ? 1 : 0));
                                                                    continue;
                                                                }
                                                            } else m.top > n.top && !o && m.left <= n.left && m.right >= n.left && ((o = u), (r = { left: Math.max(m.left, Math.min(m.right, n.left)), top: m.top }));
                                                            !i && ((n.left >= m.right && n.top >= m.top) || (n.left >= m.left && n.top >= m.bottom)) && (l = f + 1);
                                                        }
                                                    }
                                                    return (!i && o && ((i = o), (s = r), (a = 0)), i && 3 == i.nodeType)
                                                        ? (function (e, t) {
                                                              for (var n = e.nodeValue.length, o = document.createRange(), r = 0; r < n; r++) {
                                                                  o.setEnd(e, r + 1), o.setStart(e, r);
                                                                  var i = eo(o, 1);
                                                                  if (i.top != i.bottom && et(t, i)) return { node: e, offset: r + (t.left >= (i.left + i.right) / 2 ? 1 : 0) };
                                                              }
                                                              return { node: e, offset: 0 };
                                                          })(i, s)
                                                        : !i || (a && 1 == i.nodeType)
                                                        ? { node: t, offset: l }
                                                        : e(i, s);
                                                })(t, n),
                                                r = o.node,
                                                i = o.offset,
                                                s = -1;
                                            if (1 == r.nodeType && !r.firstChild) {
                                                var a = r.getBoundingClientRect();
                                                s = a.left != a.right && n.left > (a.left + a.right) / 2 ? 1 : -1;
                                            }
                                            return e.docView.posFromDOM(r, i, s);
                                        })(e, s, t));
                                    var m = e.docView.nearestDesc(s, !0);
                                    return { pos: u, inside: m ? m.posAtStart - m.border : -1 };
                                })(this, e);
                            },
                        },
                        {
                            key: "coordsAtPos",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                return ei(this, e, t);
                            },
                        },
                        {
                            key: "domAtPos",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                return this.docView.domFromPos(e, t);
                            },
                        },
                        {
                            key: "nodeDOM",
                            value: function (e) {
                                var t = this.docView.descAt(e);
                                return t ? t.nodeDOM : null;
                            },
                        },
                        {
                            key: "posAtDOM",
                            value: function (e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
                                    o = this.docView.posFromDOM(e, t, n);
                                if (null == o) throw RangeError("DOM position not inside the editor");
                                return o;
                            },
                        },
                        {
                            key: "endOfTextblock",
                            value: function (e, t) {
                                var n, o, r, i, s;
                                return (
                                    (n = this),
                                    (o = t || this.state),
                                    (r = e),
                                    ed == o && eu == r
                                        ? ef
                                        : ((ed = o),
                                          (eu = r),
                                          (ef =
                                              "up" == r || "down" == r
                                                  ? ((i = o.selection),
                                                    (s = "up" == r ? i.$from : i.$to),
                                                    el(n, o, function () {
                                                        for (var e = n.docView.domFromPos(s.pos, "up" == r ? -1 : 1).node; ; ) {
                                                            var t = n.docView.nearestDesc(e, !0);
                                                            if (!t) break;
                                                            if (t.node.isBlock) {
                                                                e = t.contentDOM || t.dom;
                                                                break;
                                                            }
                                                            e = t.dom.parentNode;
                                                        }
                                                        for (var o = ei(n, s.pos, 1), i = e.firstChild; i; i = i.nextSibling) {
                                                            var a = void 0;
                                                            if (1 == i.nodeType) a = i.getClientRects();
                                                            else {
                                                                if (3 != i.nodeType) continue;
                                                                a = S(i, 0, i.nodeValue.length).getClientRects();
                                                            }
                                                            for (var l = 0; l < a.length; l++) {
                                                                var c = a[l];
                                                                if (c.bottom > c.top + 1 && ("up" == r ? o.top - c.top > (c.bottom - o.top) * 2 : c.bottom - o.bottom > (o.bottom - c.top) * 2)) return !1;
                                                            }
                                                        }
                                                        return !0;
                                                    }))
                                                  : (function (e, t, n) {
                                                        var o = t.selection.$head;
                                                        if (!o.parent.isTextblock) return !1;
                                                        var r = o.parentOffset,
                                                            i = r == o.parent.content.size,
                                                            s = e.domSelection();
                                                        return s
                                                            ? ec.test(o.parent.textContent) && s.modify
                                                                ? el(e, t, function () {
                                                                      var t = e.domSelectionRange(),
                                                                          r = t.focusNode,
                                                                          i = t.focusOffset,
                                                                          a = t.anchorNode,
                                                                          l = t.anchorOffset,
                                                                          c = s.caretBidiLevel;
                                                                      s.modify("move", n, "character");
                                                                      var d = o.depth ? e.docView.domAfterPos(o.before()) : e.dom,
                                                                          u = e.domSelectionRange(),
                                                                          f = u.focusNode,
                                                                          h = u.focusOffset,
                                                                          p = (f && !d.contains(1 == f.nodeType ? f : f.parentNode)) || (r == f && i == h);
                                                                      try {
                                                                          s.collapse(a, l), r && (r != a || i != l) && s.extend && s.extend(r, i);
                                                                      } catch (e) {}
                                                                      return null != c && (s.caretBidiLevel = c), p;
                                                                  })
                                                                : "left" == n || "backward" == n
                                                                ? !r
                                                                : i
                                                            : o.pos == o.start() || o.pos == o.end();
                                                    })(n, o, r)))
                                );
                            },
                        },
                        {
                            key: "pasteHTML",
                            value: function (e, t) {
                                return tb(this, "", e, !1, t || new ClipboardEvent("paste"));
                            },
                        },
                        {
                            key: "pasteText",
                            value: function (e, t) {
                                return tb(this, e, null, !0, t || new ClipboardEvent("paste"));
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.docView &&
                                    ((function (e) {
                                        for (var t in (e.domObserver.stop(), e.input.eventHandlers)) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
                                        clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
                                    })(this),
                                    this.destroyPluginViews(),
                                    this.mounted ? (this.docView.update(this.state.doc, [], tK(this), this), (this.dom.textContent = "")) : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
                                    this.docView.destroy(),
                                    (this.docView = null),
                                    N());
                            },
                        },
                        {
                            key: "isDestroyed",
                            get: function () {
                                return null == this.docView;
                            },
                        },
                        {
                            key: "dispatchEvent",
                            value: function (e) {
                                ta(this, e) || !tt[e.type] || (!this.editable && e.type in tn) || tt[e.type](this, e);
                            },
                        },
                        {
                            key: "dispatch",
                            value: function (e) {
                                var t = this._props.dispatchTransaction;
                                t ? t.call(this, e) : this.updateState(this.state.apply(e));
                            },
                        },
                        {
                            key: "domSelectionRange",
                            value: function () {
                                var e = this.domSelection();
                                return e
                                    ? (_ &&
                                          11 === this.root.nodeType &&
                                          (function (e) {
                                              for (var t = e.activeElement; t && t.shadowRoot; ) t = t.shadowRoot.activeElement;
                                              return t;
                                          })(this.dom.ownerDocument) == this.dom &&
                                          (function (e, t) {
                                              if (t.getComposedRanges) {
                                                  var n,
                                                      o = t.getComposedRanges(e.root)[0];
                                                  if (o) return tG(e, o);
                                              }
                                              function r(e) {
                                                  e.preventDefault(), e.stopImmediatePropagation(), (n = e.getTargetRanges()[0]);
                                              }
                                              return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? tG(e, n) : null;
                                          })(this, e)) ||
                                          e
                                    : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
                            },
                        },
                        {
                            key: "domSelection",
                            value: function () {
                                return this.root.getSelection();
                            },
                        },
                    ]),
                    e
                );
            })();
            function t1(e) {
                var t = Object.create(null);
                return (
                    (t.class = "ProseMirror"),
                    (t.contenteditable = String(e.editable)),
                    e.someProp("attributes", function (n) {
                        if (("function" == typeof n && (n = n(e.state)), n))
                            for (var o in n) "class" == o ? (t.class += " " + n[o]) : "style" == o ? (t.style = (t.style ? t.style + ";" : "") + n[o]) : t[o] || "contenteditable" == o || "nodeName" == o || (t[o] = String(n[o]));
                    }),
                    t.translate || (t.translate = "no"),
                    [tx.node(0, e.state.doc.content.size, t)]
                );
            }
            function t2(e) {
                if (e.markCursor) {
                    var t = document.createElement("img");
                    (t.className = "ProseMirror-separator"),
                        t.setAttribute("mark-placeholder", "true"),
                        t.setAttribute("alt", ""),
                        (e.cursorWrapper = { dom: t, deco: tx.widget(e.state.selection.from, t, { raw: !0, marks: e.markCursor }) });
                } else e.cursorWrapper = null;
            }
            function t3(e) {
                return !e.someProp("editable", function (t) {
                    return !1 === t(e.state);
                });
            }
            function t5(e) {
                var t = Object.create(null);
                function n(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
                }
                return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
            }
            function t6(e) {
                if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
            }
            (t.Decoration = tx), (t.DecorationSet = tP), (t.EditorView = t0), (t.__endComposition = tg), (t.__parseFromClipboard = e3), (t.__serializeForClipboard = e2);
        },
    },
]);
//# sourceMappingURL=d08a6a05-d92448afdf309bb8.js.map
