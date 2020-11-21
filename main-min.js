! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t, n) {
        t = t || se;
        var r, i = t.createElement("script");
        if (i.text = e, n)
            for (r in we) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[he.call(e)] || "object" : typeof e
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return !xe(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function a(e, t, n) {
        return xe(t) ? Ce.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? Ce.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? Ce.grep(e, function (e) {
            return pe.call(t, e) > -1 !== n
        }) : Ce.filter(t, e, n)
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var t = {};
        return Ce.each(e.match(Oe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function c(e) {
        throw e
    }

    function f(e, t, n, r) {
        var i;
        try {
            e && xe(i = e.promise) ? i.call(e).done(t).fail(n) : e && xe(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function p() {
        se.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Ce.ready()
    }

    function d(e, t) {
        return t.toUpperCase()
    }

    function h(e) {
        return e.replace(Ie, "ms-").replace(We, d)
    }

    function g() {
        this.expando = Ce.expando + g.uid++
    }

    function v(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : _e.test(e) ? JSON.parse(e) : e)
    }

    function y(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ze, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = v(n)
                } catch (e) {}
                Fe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return Ce.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (Ce.cssNumber[t] ? "" : "px"),
            c = (Ce.cssNumber[t] || "px" !== l && +u) && Ue.exec(Ce.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) Ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, Ce.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function x(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Qe[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = Ce.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Qe[r] = i, i)
    }

    function b(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Be.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ge(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", Be.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function w(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Ce.merge([e], n) : n
    }

    function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"))
    }

    function C(e, t, n, i, o) {
        for (var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; h < g; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === r(a)) Ce.merge(d, a.nodeType ? [a] : a);
                else if (tt.test(a)) {
            for (s = s || p.appendChild(t.createElement("div")), u = (Ke.exec(a) || ["", ""])[1].toLowerCase(), l = et[u] || et._default, s.innerHTML = l[1] + Ce.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
            Ce.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(a));
        for (p.textContent = "", h = 0; a = d[h++];)
            if (i && Ce.inArray(a, i) > -1) o && o.push(a);
            else if (c = Ce.contains(a.ownerDocument, a), s = w(p.appendChild(a), "script"), c && T(s), n)
            for (f = 0; a = s[f++];) Ze.test(a.type || "") && n.push(a);
        return p
    }

    function E() {
        return !0
    }

    function k() {
        return !1
    }

    function S() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function D(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) D(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = k;
        else if (!i) return e;
        return 1 === o && (a = i, i = function (e) {
            return Ce().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = Ce.guid++)), e.each(function () {
            Ce.event.add(this, t, i, r, n)
        })
    }

    function N(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ce(e).children("tbody")[0] || e : e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function q(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Be.hasData(e) && (o = Be.access(e), a = Be.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) Ce.event.add(t, i, l[i][n])
            }
            Fe.hasData(e) && (s = Fe.access(e), u = Ce.extend({}, s), Fe.set(t, u))
        }
    }

    function L(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function H(e, t, r, i) {
        t = ce.apply([], t);
        var o, a, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = xe(h);
        if (g || p > 1 && "string" == typeof h && !me.checkClone && ut.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), H(o, t, r, i)
        });
        if (p && (o = C(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (s = Ce.map(w(o, "script"), A), u = s.length; f < p; f++) l = o, f !== d && (l = Ce.clone(l, !0, !0), u && Ce.merge(s, w(l, "script"))), r.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, Ce.map(s, j), f = 0; f < u; f++) l = s[f], Ze.test(l.type || "") && !Be.access(l, "globalEval") && Ce.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ce._evalUrl && Ce._evalUrl(l.src) : n(l.textContent.replace(lt, ""), c, l))
        }
        return e
    }

    function O(e, t, n) {
        for (var r, i = t ? Ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Ce.cleanData(w(r)), r.parentNode && (n && Ce.contains(r.ownerDocument, r) && T(w(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function P(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ft(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Ce.contains(e.ownerDocument, e) || (a = Ce.style(e, t)), !me.pixelBoxStyles() && ct.test(a) && pt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function M(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function R(e) {
        if (e in mt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = yt.length; n--;)
            if ((e = yt[n] + t) in mt) return e
    }

    function I(e) {
        var t = Ce.cssProps[e];
        return t || (t = Ce.cssProps[e] = R(e) || e), t
    }

    function W(e, t, n) {
        var r = Ue.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function B(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += Ce.css(e, n + Ve[a], !0, i)), r ? ("content" === n && (u -= Ce.css(e, "padding" + Ve[a], !0, i)), "margin" !== n && (u -= Ce.css(e, "border" + Ve[a] + "Width", !0, i))) : (u += Ce.css(e, "padding" + Ve[a], !0, i), "padding" !== n ? u += Ce.css(e, "border" + Ve[a] + "Width", !0, i) : s += Ce.css(e, "border" + Ve[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function F(e, t, n) {
        var r = ft(e),
            i = P(e, t, r),
            o = "border-box" === Ce.css(e, "boxSizing", !1, r),
            a = o;
        if (ct.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (me.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === Ce.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + B(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function z() {
        bt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, Ce.fx.interval), Ce.fx.tick())
    }

    function X() {
        return e.setTimeout(function () {
            xt = void 0
        }), xt = Date.now()
    }

    function U(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ve[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function V(e, t, n) {
        for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function G(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && Ge(e),
            v = Be.get(e, "fxshow");
        n.queue || (a = Ce._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, Ce.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], wt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || Ce.style(e, r)
            }
        if ((u = !Ce.isEmptyObject(t)) || !Ce.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = v && v.display, null == l && (l = Be.get(e, "display")), c = Ce.css(e, "display"), "none" === c && (l ? c = l : (b([e], !0), l = e.style.display || l, c = Ce.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Ce.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = Be.access(e, "fxshow", {
                display: l
            }), o && (v.hidden = !g), g && b([e], !0), p.done(function () {
                g || b([e]), Be.remove(e, "fxshow");
                for (r in d) Ce.style(e, r, d[r])
            })), u = V(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function Y(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = Ce.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function Q(e, t, n) {
        var r, i, o = 0,
            a = Q.prefilters.length,
            s = Ce.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = xt || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Ce.extend({}, t),
                opts: Ce.extend(!0, {
                    specialEasing: {},
                    easing: Ce.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: xt || X(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = Ce.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (Y(c, l.opts.specialEasing); o < a; o++)
            if (r = Q.prefilters[o].call(l, e, c, l.opts)) return xe(r.stop) && (Ce._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return Ce.map(c, V, l), xe(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ce.fx.timer(Ce.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    function J(e) {
        return (e.match(Oe) || []).join(" ")
    }

    function K(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : []
    }

    function ee(e, t, n, i) {
        var o;
        if (Array.isArray(t)) Ce.each(t, function (t, r) {
            n || Ht.test(e) ? i(e, r) : ee(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== r(t)) i(e, t);
        else
            for (o in t) ee(e + "[" + o + "]", t[o], n, i)
    }

    function te(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Oe) || [];
            if (xe(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function ne(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, Ce.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === Xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function re(e, t) {
        var n, r, i = Ce.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Ce.extend(!0, e, r), e
    }

    function ie(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function oe(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var ae = [],
        se = e.document,
        ue = Object.getPrototypeOf,
        le = ae.slice,
        ce = ae.concat,
        fe = ae.push,
        pe = ae.indexOf,
        de = {},
        he = de.toString,
        ge = de.hasOwnProperty,
        ve = ge.toString,
        ye = ve.call(Object),
        me = {},
        xe = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        be = function e(t) {
            return null != t && t === t.window
        },
        we = {
            type: !0,
            src: !0,
            noModule: !0
        },
        Te = "3.3.1",
        Ce = function (e, t) {
            return new Ce.fn.init(e, t)
        },
        Ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Ce.fn = Ce.prototype = {
        jquery: "3.3.1",
        constructor: Ce,
        length: 0,
        toArray: function () {
            return le.call(this)
        },
        get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = Ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return Ce.each(this, e)
        },
        map: function (e) {
            return this.pushStack(Ce.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: fe,
        sort: ae.sort,
        splice: ae.splice
    }, Ce.extend = Ce.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || xe(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Ce.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && Ce.isPlainObject(n) ? n : {}, a[t] = Ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Ce.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== he.call(e)) && (!(t = ue(e)) || "function" == typeof (n = ge.call(t, "constructor") && t.constructor) && ve.call(n) === ye)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            n(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(Ee, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? Ce.merge(n, "string" == typeof e ? [e] : e) : fe.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : pe.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, o, a = 0,
                s = [];
            if (i(e))
                for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ce.apply([], s)
        },
        guid: 1,
        support: me
    }), "function" == typeof Symbol && (Ce.fn[Symbol.iterator] = ae[Symbol.iterator]), Ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        de["[object " + t + "]"] = t.toLowerCase()
    });
    var ke = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, c, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : F) !== H && L(t), t = t || H, P)) {
                if (11 !== h && (u = me.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && W(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n
                    }
                if (T.qsa && !V[e + " "] && (!M || !M.test(e))) {
                    if (1 !== h) p = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Te, Ce) : t.setAttribute("id", s = B), l = S(e), o = l.length; o--;) l[o] = "#" + s + " " + d(l[o]);
                        c = l.join(","), p = xe.test(e) && f(t.parentNode) || t
                    }
                    if (c) try {
                        return Z.apply(n, p.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === B && t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[B] = !0, e
        }

        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function p() {}

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = z++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [_, s];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[B] || (t[B] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === _ && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function y(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[B] && (i = m(i)), o && !o[B] && (o = m(o, a)), r(function (r, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = r || v(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? g : y(g, p, e, s, u),
                    x = n ? o || (r ? e : h || i) ? [] : a : m;
                if (n && n(m, x, s, u), i)
                    for (l = y(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(m[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(m[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? te(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else x = y(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x)
            })
        }

        function x(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function (e) {
                    return e === t
                }, a, !0), l = h(function (e) {
                    return te(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = C.relative[e[s].type]) c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (r = ++s; r < i && !C.relative[e[r].type]; r++);
                        return m(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, s < r && x(e.slice(s, r)), r < i && x(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function (r, a, s, u, l) {
                    var c, f, p, d = 0,
                        h = "0",
                        g = r && [],
                        v = [],
                        m = A,
                        x = r || o && C.find.TAG("*", l),
                        b = _ += null == m ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === H || (L(c), s = !P); p = e[f++];)
                                if (p(c, a || H, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (_ = b)
                        }
                        i && ((c = !p && c) && d--, r && g.push(c))
                    }
                    if (d += h, i && h !== d) {
                        for (f = 0; p = n[f++];) p(g, v, a, s);
                        if (r) {
                            if (d > 0)
                                for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                            v = y(v)
                        }
                        Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (_ = b, A = m), g
                };
            return i ? r(a) : a
        }
        var w, T, C, E, k, S, D, N, A, j, q, L, H, O, P, M, R, I, W, B = "sizzle" + 1 * new Date,
            F = e.document,
            _ = 0,
            z = 0,
            X = n(),
            U = n(),
            V = n(),
            G = function (e, t) {
                return e === t && (q = !0), 0
            },
            Y = {}.hasOwnProperty,
            Q = [],
            J = Q.pop,
            K = Q.push,
            Z = Q.push,
            ee = Q.slice,
            te = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(re + "+", "g"),
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            le = new RegExp("^" + re + "*," + re + "*"),
            ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ee = function () {
                L()
            },
            ke = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Z.apply(Q = ee.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Q.length ? function (e, t) {
                    K.apply(e, ee.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, O = H.documentElement, P = !k(H), F !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), T.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = i(function (e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = ye.test(H.getElementsByClassName), T.getById = i(function (e) {
                return O.appendChild(e).id = B, !H.getElementsByName || !H.getElementsByName(B).length
            }), T.getById ? (C.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function (e) {
                var t = e.replace(be, we);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && P) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = T.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.CLASS = T.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
            }, R = [], M = [], (T.qsa = ye.test(H.querySelectorAll)) && (i(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + B + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || M.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + re + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (T.matchesSelector = ye.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                T.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), R.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), R = R.length && new RegExp(R.join("|")), t = ye.test(O.compareDocumentPosition), W = t || ye.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, G = t ? function (e, t) {
                if (e === t) return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === F && W(F, e) ? -1 : t === H || t.ownerDocument === F && W(F, t) ? 1 : j ? te(j, e) - te(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return q = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : j ? te(j, e) - te(j, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0
            }, H) : H
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(fe, "='$1']"), T.matchesSelector && P && !V[n + " "] && (!R || !R.test(n)) && (!M || !M.test(n))) try {
                var r = I.call(e, n);
                if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && L(e), W(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = C.attrHandle[t.toLowerCase()],
                r = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== r ? r : T.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(Te, Ce)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (q = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(G), q) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, E = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += E(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = X[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && X(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];)
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                for (p = v, f = p[B] || (p[B] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === _ && l[1], x = d && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [_, d, x];
                                        break
                                    }
                            } else if (m && (p = t, f = p[B] || (p[B] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === _ && l[1], x = d), !1 === x)
                                for (;
                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && (f = p[B] || (p[B] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [_, x]), p !== t)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = te(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = D(e.replace(ue, "$1"));
                    return i[B] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(be, we),
                        function (t) {
                            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: l(!1),
                disabled: l(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !C.pseudos.empty(e)
                },
                header: function (e) {
                    return ve.test(e.nodeName)
                },
                input: function (e) {
                    return ge.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) C.pseudos[w] = u(w);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, S = t.tokenize = function (e, n) {
            var r, i, o, a, s, u, l, c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in C.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
        }, D = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = x(t[n]), o[B] ? r.push(o) : i.push(o);
                o = V(e, b(i, r)), o.selector = e
            }
            return o
        }, N = t.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && S(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && P && C.relative[o[1].type]) {
                    if (!(t = (C.find.ID(a.matches[0].replace(be, we), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                    if ((u = C.find[s]) && (r = u(a.matches[0].replace(be, we), xe.test(o[0].type) && f(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && d(o))) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || D(e, c))(r, t, !P, n, !t || xe.test(e) && f(t.parentNode) || t), n
        }, T.sortStable = B.split("").sort(G).join("") === B, T.detectDuplicates = !!q, L(), T.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Ce.find = ke, Ce.expr = ke.selectors, Ce.expr[":"] = Ce.expr.pseudos, Ce.uniqueSort = Ce.unique = ke.uniqueSort, Ce.text = ke.getText, Ce.isXMLDoc = ke.isXML, Ce.contains = ke.contains, Ce.escapeSelector = ke.escape;
    var Se = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Ce(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        De = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ne = Ce.expr.match.needsContext,
        Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Ce.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ce.find.matchesSelector(r, e) ? [r] : [] : Ce.find.matches(e, Ce.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Ce.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(Ce(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (Ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) Ce.find(e, i[t], n);
            return r > 1 ? Ce.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function (e) {
            return !!a(this, "string" == typeof e && Ne.test(e) ? Ce(e) : e || [], !1).length
        }
    });
    var je, qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Ce.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || je, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : qe.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ae.test(r[1]) && Ce.isPlainObject(t))
                    for (r in t) xe(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = se.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : xe(e) ? void 0 !== n.ready ? n.ready(e) : e(Ce) : Ce.makeArray(e, this)
    }).prototype = Ce.fn, je = Ce(se);
    var Le = /^(?:parents|prev(?:Until|All))/,
        He = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ce.fn.extend({
        has: function (e) {
            var t = Ce(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (Ce.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && Ce(e);
            if (!Ne.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? Ce.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? pe.call(Ce(e), this[0]) : pe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ce.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Se(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return Se(e, "parentNode", n)
        },
        next: function (e) {
            return s(e, "nextSibling")
        },
        prev: function (e) {
            return s(e, "previousSibling")
        },
        nextAll: function (e) {
            return Se(e, "nextSibling")
        },
        prevAll: function (e) {
            return Se(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return Se(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return Se(e, "previousSibling", n)
        },
        siblings: function (e) {
            return De((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return De(e.firstChild)
        },
        contents: function (e) {
            return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), Ce.merge([], e.childNodes))
        }
    }, function (e, t) {
        Ce.fn[e] = function (n, r) {
            var i = Ce.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ce.filter(r, i)), this.length > 1 && (He[e] || Ce.uniqueSort(i), Le.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    Ce.Callbacks = function (e) {
        e = "string" == typeof e ? u(e) : Ce.extend({}, e);
        var t, n, i, o, a = [],
            s = [],
            l = -1,
            c = function () {
                for (o = o || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
            },
            f = {
                add: function () {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        Ce.each(n, function (n, i) {
                            xe(i) ? e.unique && f.has(i) || a.push(i) : i && i.length && "string" !== r(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return Ce.each(arguments, function (e, t) {
                        for (var n;
                            (n = Ce.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? Ce.inArray(e, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = s = [], a = n = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = s = [], n || t || (a = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return f
    }, Ce.extend({
        Deferred: function (t) {
            var n = [["notify", "progress", Ce.Callbacks("memory"), Ce.Callbacks("memory"), 2], ["resolve", "done", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 1, "rejected"]],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return Ce.Deferred(function (t) {
                            Ce.each(n, function (n, r) {
                                var i = xe(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && xe(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, xe(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, c, i)) : (a++, f.call(e, o(a, n, l, i), o(a, n, c, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    p = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            Ce.Deferred.exceptionHook && Ce.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? p() : (Ce.Deferred.getStackHook && (p.stackTrace = Ce.Deferred.getStackHook()), e.setTimeout(p))
                            }
                        }
                        var a = 0;
                        return Ce.Deferred(function (e) {
                            n[0][3].add(o(0, e, xe(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, xe(t) ? t : l)), n[2][3].add(o(0, e, xe(r) ? r : c))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? Ce.extend(e, i) : i
                    }
                },
                o = {};
            return Ce.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = le.call(arguments),
                o = Ce.Deferred(),
                a = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (f(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || xe(i[n] && i[n].then))) return o.then();
            for (; n--;) f(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ce.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Ce.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Me = Ce.Deferred();
    Ce.fn.ready = function (e) {
        return Me.then(e).catch(function (e) {
            Ce.readyException(e)
        }), this
    }, Ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --Ce.readyWait : Ce.isReady) || (Ce.isReady = !0, !0 !== e && --Ce.readyWait > 0 || Me.resolveWith(se, [Ce]))
        }
    }), Ce.ready.then = Me.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? e.setTimeout(Ce.ready) : (se.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
    var Re = function (e, t, n, i, o, a, s) {
            var u = 0,
                l = e.length,
                c = null == n;
            if ("object" === r(n)) {
                o = !0;
                for (u in n) Re(e, t, u, n[u], !0, a, s)
            } else if (void 0 !== i && (o = !0, xe(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(Ce(e), n)
                })), t))
                for (; u < l; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
        },
        Ie = /^-ms-/,
        We = /-([a-z])/g,
        $e = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1, g.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, $e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[h(t)] = n;
            else
                for (r in t) i[h(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || Ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Ce.isEmptyObject(t)
        }
    };
    var Be = new g,
        Fe = new g,
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;
    Ce.extend({
        hasData: function (e) {
            return Fe.hasData(e) || Be.hasData(e)
        },
        data: function (e, t, n) {
            return Fe.access(e, t, n)
        },
        removeData: function (e, t) {
            Fe.remove(e, t)
        },
        _data: function (e, t, n) {
            return Be.access(e, t, n)
        },
        _removeData: function (e, t) {
            Be.remove(e, t)
        }
    }), Ce.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Fe.get(o), 1 === o.nodeType && !Be.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = h(r.slice(5)), y(o, r, i[r])));
                    Be.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Fe.set(this, e)
            }) : Re(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Fe.get(o, e))) return n;
                    if (void 0 !== (n = y(o, e))) return n
                } else this.each(function () {
                    Fe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Fe.remove(this, e)
            })
        }
    }), Ce.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Be.get(e, t), n && (!r || Array.isArray(n) ? r = Be.access(e, t, Ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = Ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Ce._queueHooks(e, t),
                a = function () {
                    Ce.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Be.get(e, n) || Be.access(e, n, {
                empty: Ce.Callbacks("once memory").add(function () {
                    Be.remove(e, [t + "queue", n])
                })
            })
        }
    }), Ce.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ce.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Ce.queue(this, e, t);
                Ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ce.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Ce.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = Ce.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Be.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ue = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
        Ve = ["Top", "Right", "Bottom", "Left"],
        Ge = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Ce.contains(e.ownerDocument, e) && "none" === Ce.css(e, "display")
        },
        Ye = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        Qe = {};
    Ce.fn.extend({
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ge(this) ? Ce(this).show() : Ce(this).hide()
            })
        }
    });
    var Je = /^(?:checkbox|radio)$/i,
        Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ze = /^$|^module$|\/(?:java|ecma)script/i,
        et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td;
    var tt = /<|&#?\w+;/;
    ! function () {
        var e = se.createDocumentFragment(),
            t = e.appendChild(se.createElement("div")),
            n = se.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), me.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var nt = se.documentElement,
        rt = /^key/,
        it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ot = /^([^.]*)(?:\.(.+)|)/;
    Ce.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Be.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && Ce.find.matchesSelector(nt, i), n.guid || (n.guid = Ce.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                        return void 0 !== Ce && Ce.event.triggered !== t.type ? Ce.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Oe) || [""], l = t.length; l--;) s = ot.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Ce.event.special[d] || {}, c = Ce.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Ce.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Be.hasData(e) && Be.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(Oe) || [""], l = t.length; l--;)
                    if (s = ot.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = Ce.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || Ce.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) Ce.event.remove(e, d + t[l], n, r, !0);
                Ce.isEmptyObject(u) && Be.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = Ce.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (Be.get(this, "events") || {})[t.type] || [],
                c = Ce.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (s = Ce.event.handlers.call(this, t, l), n = 0;
                    (o = s[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, r = 0;
                        (a = o.handlers[r++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((Ce.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? Ce(i, this).index(l) > -1 : Ce.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(Ce.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: xe(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[Ce.expando] ? e : new Ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== S() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === S() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return o(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ce.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ce.Event = function (e, t) {
        if (!(this instanceof Ce.Event)) return new Ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? E : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ce.expando] = !0
    }, Ce.Event.prototype = {
        constructor: Ce.Event,
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && rt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Ce.event.addProp), Ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Ce.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Ce.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Ce.fn.extend({
        on: function (e, t, n, r) {
            return D(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return D(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function () {
                Ce.event.remove(this, e, n, t)
            })
        }
    });
    var at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        st = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ce.extend({
        htmlPrefilter: function (e) {
            return e.replace(at, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = Ce.contains(e.ownerDocument, e);
            if (!(me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ce.isXMLDoc(e)))
                for (a = w(s), o = w(e), r = 0, i = o.length; r < i; r++) L(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || w(e), a = a || w(s), r = 0, i = o.length; r < i; r++) q(o[r], a[r]);
                else q(e, s);
            return a = w(s, "script"), a.length > 0 && T(a, !u && w(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = Ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if ($e(n)) {
                    if (t = n[Be.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? Ce.event.remove(n, r) : Ce.removeEvent(n, r, t.handle);
                        n[Be.expando] = void 0
                    }
                    n[Fe.expando] && (n[Fe.expando] = void 0)
                }
        }
    }), Ce.fn.extend({
        detach: function (e) {
            return O(this, e, !0)
        },
        remove: function (e) {
            return O(this, e)
        },
        text: function (e) {
            return Re(this, function (e) {
                return void 0 === e ? Ce.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return H(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    N(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return H(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = N(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return H(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return H(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ce.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Ce.clone(this, e, t)
            })
        },
        html: function (e) {
            return Re(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !st.test(e) && !et[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Ce.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return H(this, arguments, function (t) {
                var n = this.parentNode;
                Ce.inArray(this, e) < 0 && (Ce.cleanData(w(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Ce.fn[e] = function (e) {
            for (var n, r = [], i = Ce(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), Ce(i[a])[t](n), fe.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ct = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
        ft = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        pt = new RegExp(Ve.join("|"), "i");
    ! function () {
        function t() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(u).appendChild(l);
                var t = e.getComputedStyle(l);
                r = "1%" !== t.top, s = 12 === n(t.marginLeft), l.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", nt.removeChild(u), l = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u = se.createElement("div"),
            l = se.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === l.style.backgroundClip, Ce.extend(me, {
            boxSizingReliable: function () {
                return t(), i
            },
            pixelBoxStyles: function () {
                return t(), a
            },
            pixelPosition: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), s
            },
            scrollboxSize: function () {
                return t(), o
            }
        }))
    }();
    var dt = /^(none|table(?!-c[ea]).+)/,
        ht = /^--/,
        gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        yt = ["Webkit", "Moz", "ms"],
        mt = se.createElement("div").style;
    Ce.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = h(t),
                    u = ht.test(t),
                    l = e.style;
                if (u || (t = I(s)), a = Ce.cssHooks[t] || Ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                o = typeof n, "string" === o && (i = Ue.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (Ce.cssNumber[s] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = h(t);
            return ht.test(t) || (t = I(s)), a = Ce.cssHooks[t] || Ce.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = P(e, t, r)), "normal" === i && t in vt && (i = vt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), Ce.each(["height", "width"], function (e, t) {
        Ce.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !dt.test(Ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, r) : Ye(e, gt, function () {
                    return F(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = ft(e),
                    a = "border-box" === Ce.css(e, "boxSizing", !1, o),
                    s = r && B(e, t, r, a, o);
                return a && me.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - B(e, t, "border", !1, o) - .5)), s && (i = Ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ce.css(e, t)), W(e, n, s)
            }
        }
    }), Ce.cssHooks.marginLeft = M(me.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        Ce.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ve[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (Ce.cssHooks[e + t].set = W)
    }), Ce.fn.extend({
        css: function (e, t) {
            return Re(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = ft(e), i = t.length; a < i; a++) o[t[a]] = Ce.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Ce.style(e, t, n) : Ce.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Ce.Tween = _, _.prototype = {
        constructor: _,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || Ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ce.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ce.cssProps[e.prop]] && !Ce.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ce.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Ce.fx = _.prototype.init, Ce.fx.step = {};
    var xt, bt, wt = /^(?:toggle|show|hide)$/,
        Tt = /queueHooks$/;
    Ce.Animation = Ce.extend(Q, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Ue.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                xe(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
            },
            prefilters: [G],
            prefilter: function (e, t) {
                t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
            }
        }), Ce.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? Ce.extend({}, e) : {
                complete: n || !n && t || xe(e) && e,
                duration: e,
                easing: n && t || t && !xe(t) && t
            };
            return Ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ce.fx.speeds ? r.duration = Ce.fx.speeds[r.duration] : r.duration = Ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                xe(r.old) && r.old.call(this), r.queue && Ce.dequeue(this, r.queue)
            }, r
        }, Ce.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Ge).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = Ce.isEmptyObject(e),
                    o = Ce.speed(t, n, r),
                    a = function () {
                        var t = Q(this, Ce.extend({}, e), o);
                        (i || Be.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Ce.timers,
                        a = Be.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && Tt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || Ce.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Be.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Ce.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Ce.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Ce.each(["toggle", "show", "hide"], function (e, t) {
            var n = Ce.fn[t];
            Ce.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
            }
        }), Ce.each({
            slideDown: U("show"),
            slideUp: U("hide"),
            slideToggle: U("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Ce.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Ce.timers = [], Ce.fx.tick = function () {
            var e, t = 0,
                n = Ce.timers;
            for (xt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Ce.fx.stop(), xt = void 0
        }, Ce.fx.timer = function (e) {
            Ce.timers.push(e), Ce.fx.start()
        }, Ce.fx.interval = 13, Ce.fx.start = function () {
            bt || (bt = !0, z())
        }, Ce.fx.stop = function () {
            bt = null
        }, Ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Ce.fn.delay = function (t, n) {
            return t = Ce.fx ? Ce.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = se.createElement("input"),
                t = se.createElement("select"),
                n = t.appendChild(se.createElement("option"));
            e.type = "checkbox", me.checkOn = "" !== e.value, me.optSelected = n.selected, e = se.createElement("input"), e.value = "t", e.type = "radio", me.radioValue = "t" === e.value
        }();
    var Ct, Et = Ce.expr.attrHandle;
    Ce.fn.extend({
        attr: function (e, t) {
            return Re(this, Ce.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Ce.removeAttr(this, e)
            })
        }
    }), Ce.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Ce.prop(e, t, n) : (1 === o && Ce.isXMLDoc(e) || (i = Ce.attrHooks[t.toLowerCase()] || (Ce.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void Ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Ce.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!me.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(Oe);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Ct = {
        set: function (e, t, n) {
            return !1 === t ? Ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Et[t] || Ce.find.attr;
        Et[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = Et[a], Et[a] = i, i = null != n(e, t, r) ? a : null, Et[a] = o), i
        }
    });
    var kt = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;
    Ce.fn.extend({
        prop: function (e, t) {
            return Re(this, Ce.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Ce.propFix[e] || e]
            })
        }
    }), Ce.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ce.isXMLDoc(e) || (t = Ce.propFix[t] || t, i = Ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : kt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), me.optSelected || (Ce.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Ce.propFix[this.toLowerCase()] = this
    }), Ce.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (xe(e)) return this.each(function (t) {
                Ce(this).addClass(e.call(this, t, K(this)))
            });
            if (t = Z(e), t.length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = J(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (xe(e)) return this.each(function (t) {
                Ce(this).removeClass(e.call(this, t, K(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = Z(e), t.length)
                for (; n = this[u++];)
                    if (i = K(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        s = J(r), i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : xe(e) ? this.each(function (n) {
                Ce(this).toggleClass(e.call(this, n, K(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r)
                    for (i = 0, o = Ce(this), a = Z(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = K(this), t && Be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Be.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + J(K(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Dt = /\r/g;
    Ce.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = xe(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Ce(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ce.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = Ce.valHooks[i.type] || Ce.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), Ce.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Ce.find.attr(e, "value");
                    return null != t ? t : J(Ce.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        u = s ? null : [],
                        l = s ? a + 1 : i.length;
                    for (r = a < 0 ? l : s ? a : 0; r < l; r++)
                        if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = Ce(n).val(), s) return t;
                            u.push(t)
                        }
                    return u
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = Ce.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Ce.inArray(Ce.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Ce.each(["radio", "checkbox"], function () {
        Ce.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = Ce.inArray(Ce(e).val(), t) > -1
            }
        }, me.checkOn || (Ce.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), me.focusin = "onfocusin" in e;
    var Nt = /^(?:focusinfocus|focusoutblur)$/,
        At = function (e) {
            e.stopPropagation()
        };
    Ce.extend(Ce.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, u, l, c, f, p, d = [r || se],
                h = ge.call(t, "type") ? t.type : t,
                g = ge.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !Nt.test(h + Ce.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Ce.expando] ? t : new Ce.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Ce.makeArray(n, [t]), f = Ce.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !be(r)) {
                    for (u = f.delegateType || h, Nt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || se) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? u : f.bindType || h, c = (Be.get(a, "events") || {})[t.type] && Be.get(a, "handle"), c && c.apply(a, n), (c = l && a[l]) && c.apply && $e(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !$e(r) || l && xe(r[h]) && !be(r) && (s = r[l], s && (r[l] = null), Ce.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, At), r[h](), t.isPropagationStopped() && p.removeEventListener(h, At), Ce.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = Ce.extend(new Ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            Ce.event.trigger(r, null, t)
        }
    }), Ce.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Ce.event.trigger(e, t, n, !0)
        }
    }), me.focusin || Ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            Ce.event.simulate(t, e.target, Ce.event.fix(e))
        };
        Ce.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Be.access(r, t);
                i || r.addEventListener(e, n, !0), Be.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Be.access(r, t) - 1;
                i ? Be.access(r, t, i) : (r.removeEventListener(e, n, !0), Be.remove(r, t))
            }
        }
    });
    var jt = e.location,
        qt = Date.now(),
        Lt = /\?/;
    Ce.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Ce.error("Invalid XML: " + t), n
    };
    var Ht = /\[\]$/,
        Ot = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;
    Ce.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = xe(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !Ce.isPlainObject(e)) Ce.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) ee(n, e[n], t, i);
        return r.join("&")
    }, Ce.fn.extend({
        serialize: function () {
            return Ce.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Ce.prop(this, "elements");
                return e ? Ce.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Ce(this).is(":disabled") && Mt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Je.test(e))
            }).map(function (e, t) {
                var n = Ce(this).val();
                return null == n ? null : Array.isArray(n) ? Ce.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g,
        It = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ft = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        zt = {},
        Xt = {},
        Ut = "*/".concat("*"),
        Vt = se.createElement("a");
    Vt.href = jt.href, Ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt.href,
            type: "GET",
            isLocal: Bt.test(jt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ut,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? re(re(e, Ce.ajaxSettings), t) : re(Ce.ajaxSettings, e)
        },
        ajaxPrefilter: te(zt),
        ajaxTransport: te(Xt),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var l, p, d, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = ie(h, C, r)), b = oe(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (Ce.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (Ce.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? y.resolveWith(g, [p, T, C]) : y.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), m.fireWith(g, [C, T]), f && (v.trigger("ajaxComplete", [C, h]), --Ce.active || Ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = Ce.ajaxSetup({}, n),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? Ce(g) : Ce.event,
                y = Ce.Deferred(),
                m = Ce.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = $t.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (y.promise(C), h.url = ((t || h.url || jt.href) + "").replace(_t, jt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                l = se.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Ce.param(h.data, h.traditional)), ne(zt, h, n, C), c) return C;
            f = Ce.event && h.global, f && 0 == Ce.active++ && Ce.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), o = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Rt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Lt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Wt, "$1"), d = (Lt.test(o) ? "&" : "?") + "_=" + qt++ + d), h.url = o + d), h.ifModified && (Ce.lastModified[o] && C.setRequestHeader("If-Modified-Since", Ce.lastModified[o]), Ce.etag[o] && C.setRequestHeader("If-None-Match", Ce.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", m.add(h.complete), C.done(h.success), C.fail(h.error), i = ne(Xt, h, n, C)) {
                if (C.readyState = 1, f && v.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return Ce.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Ce.get(e, void 0, t, "script")
        }
    }), Ce.each(["get", "post"], function (e, t) {
        Ce[t] = function (e, n, r, i) {
            return xe(n) && (i = i || r, r = n, n = void 0), Ce.ajax(Ce.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, Ce.isPlainObject(e) && e))
        }
    }), Ce._evalUrl = function (e) {
        return Ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, Ce.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (xe(e) && (e = e.call(this[0])), t = Ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return xe(e) ? this.each(function (t) {
                Ce(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Ce(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = xe(e);
            return this.each(function (n) {
                Ce(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                Ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), Ce.expr.pseudos.hidden = function (e) {
        return !Ce.expr.pseudos.visible(e)
    }, Ce.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Ce.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        Yt = Ce.ajaxSettings.xhr();
    me.cors = !!Yt && "withCredentials" in Yt, me.ajax = Yt = !!Yt, Ce.ajaxTransport(function (t) {
        var n, r;
        if (me.cors || Yt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), Ce.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), Ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return Ce.globalEval(e), e
            }
        }
    }), Ce.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Ce.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Ce("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), se.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    Ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Qt.pop() || Ce.expando + "_" + qt++;
            return this[e] = !0, e
        }
    }), Ce.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Jt, "$1" + i) : !1 !== t.jsonp && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || Ce.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? Ce(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Qt.push(i)), a && xe(o) && o(a[0]), a = o = void 0
        }), "script"
    }), me.createHTMLDocument = function () {
        var e = se.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Ce.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (me.createHTMLDocument ? (t = se.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = se.location.href, t.head.appendChild(r)) : t = se), i = Ae.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && Ce(o).remove(), Ce.merge([], i.childNodes))
    }, Ce.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = J(e.slice(s)), e = e.slice(0, s)), xe(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? Ce("<div>").append(Ce.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, Ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Ce.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Ce.expr.pseudos.animated = function (e) {
        return Ce.grep(Ce.timers, function (t) {
            return e === t.elem
        }).length
    }, Ce.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = Ce.css(e, "position"),
                f = Ce(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = Ce.css(e, "top"), u = Ce.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), xe(t) && (t = t.call(e, n, Ce.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, Ce.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Ce.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ce.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && (i = Ce(e).offset(), i.top += Ce.css(e, "borderTopWidth", !0), i.left += Ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - Ce.css(r, "marginTop", !0),
                    left: t.left - i.left - Ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Ce.css(e, "position");) e = e.offsetParent;
                return e || nt
            })
        }
    }), Ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        Ce.fn[e] = function (r) {
            return Re(this, function (e, r, i) {
                var o;
                if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), Ce.each(["top", "left"], function (e, t) {
        Ce.cssHooks[t] = M(me.pixelPosition, function (e, n) {
            if (n) return n = P(e, t), ct.test(n) ? Ce(e).position()[t] + "px" : n
        })
    }), Ce.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        Ce.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            Ce.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Re(this, function (t, n, i) {
                    var o;
                    return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Ce.css(t, n, s) : Ce.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), Ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        Ce.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Ce.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Ce.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Ce.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), xe(e)) return r = le.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(le.call(arguments)))
        }, i.guid = e.guid = e.guid || Ce.guid++, i
    }, Ce.holdReady = function (e) {
        e ? Ce.readyWait++ : Ce.ready(!0)
    }, Ce.isArray = Array.isArray, Ce.parseJSON = JSON.parse, Ce.nodeName = o, Ce.isFunction = xe, Ce.isWindow = be, Ce.camelCase = h, Ce.type = r, Ce.now = Date.now, Ce.isNumeric = function (e) {
        var t = Ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Ce
    });
    var Kt = e.jQuery,
        Zt = e.$;
    return Ce.noConflict = function (t) {
        return e.$ === Ce && (e.$ = Zt), t && e.jQuery === Ce && (e.jQuery = Kt), Ce
    }, t || (e.jQuery = e.$ = Ce), Ce
});
