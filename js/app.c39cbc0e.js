!(function(e) {
  function t(t) {
    for (
      var o, i, s = t[0], a = t[1], l = t[2], d = 0, f = [];
      d < s.length;
      d++
    )
      (i = s[d]), r[i] && f.push(r[i][0]), (r[i] = 0);
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    for (u && u(t); f.length; ) f.shift()();
    return c.push.apply(c, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, s = 1; s < n.length; s++) {
        var a = n[s];
        0 !== r[a] && (o = !1);
      }
      o && (c.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { 0: 0 },
    c = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    a = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = a;
  c.push([31, 1]), n();
})({
  31: function(e, t, n) {
    "use strict";
    n.r(t);
    n(32), n(48), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(61);
    var o = n(30),
      r = n.n(o);
    !(function() {
      var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      function t() {
        var t = document.querySelector("body");
        t.classList.toggle("opened"),
          (window.innerWidth <= 992 || e) &&
            window.fullpage_api.setMouseHijack(!t.classList.contains("opened"));
      }
      new r.a("#fullpage", {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: [
          "home",
          "mens-socks",
          "womens-socks",
          "kids-socks",
          "gift-cards",
          "subscriptions",
          "about"
        ],
        navigation: !0,
        navigationPosition: "left",
        navigationTooltips: [
          "Friday Sock Co.",
          "Men's socks",
          "Women's socks",
          "Kid's socks",
          "Gift cards",
          "Subscriptions",
          "About"
        ],
        showActiveTooltip: !0,
        animateAnchor: !0,
        recordHistory: !0,
        lazyLoading: !0,
        fixedElements: ".header, .footer",
        sectionsColor: [
          "#427c7d",
          "#64a542",
          "#a1799e",
          "#358ea6",
          "#a5797a",
          "#4eb791",
          "#427c7d"
        ],
        normalScrollElements: ".drawer",
        afterLoad: function(e, t) {
          t.item.classList.add("animate");
        }
      });
      document.querySelector(".section.home .socks-carousel");
      var n = document.querySelector(".drawer"),
        o = document.querySelector("header>.drawer-btn"),
        c = n.querySelector(".drawer-close-btn");
      o.addEventListener("click", t),
        c.addEventListener("click", t),
        document
          .getElementById("fp-nav")
          .querySelector("ul")
          .childNodes.forEach(function(e) {
            e.childNodes[0].appendChild(e.childNodes[1]);
          }),
        document.querySelectorAll(".socks-carousel").forEach(function(t) {
          var n = t.querySelector(".carousel-wrapper"),
            o = n.querySelector(".carousel-list"),
            r = 0,
            c = 0,
            i = !1;
          function s() {
            var e = o.clientWidth - n.clientWidth;
            0 === n.scrollLeft
              ? t.classList.add("start")
              : t.classList.remove("start"),
              n.scrollLeft === e
                ? t.classList.add("end")
                : t.classList.remove("end");
          }
          e
            ? (n.addEventListener("touchstart", function(e) {
                return (c = e.touches[0].clientX);
              }),
              n.addEventListener("touchmove", function(e) {
                var t = e.touches[0].clientX;
                (n.scrollLeft += c - t), (c = t), s();
              }))
            : (n.addEventListener("mouseenter", function(e) {
                return (i = !0);
              }),
              n.addEventListener("mouseleave", function(e) {
                return (i = !1);
              }),
              n.addEventListener("mousemove", function(e) {
                var t = n.getBoundingClientRect(),
                  o = t.left,
                  c = t.width,
                  i = (function(e) {
                    var t = 0,
                      n = 0;
                    return (
                      e || (e = window.event),
                      e.pageX || e.pageY
                        ? ((t = e.pageX), (n = e.pageY))
                        : (e.clientX || e.clientY) &&
                          ((t =
                            e.clientX +
                            document.body.scrollLeft +
                            document.documentElement.scrollLeft),
                          (n =
                            e.clientY +
                            document.body.scrollTop +
                            document.documentElement.scrollTop)),
                      { x: t, y: n }
                    );
                  })(e).x;
                r = -(c / 2 + o - i) / 50;
              }),
              (function e() {
                requestAnimationFrame(e), i && ((n.scrollLeft += r), s());
              })()),
            s();
        }),
        document.querySelectorAll(".dropdown-wrapper").forEach(function(e) {
          var t = e.querySelector(".dropdown-arrow"),
            n = e.querySelector(".dropdown-list");
          t.addEventListener("click", function() {
            e.classList.toggle("active");
          }),
            n.addEventListener("click", function(t) {
              "LI" === t.target.nodeName && e.classList.remove("active");
            });
        });
    })();
  },
  54: function(e, t, n) {},
  55: function(e, t, n) {},
  56: function(e, t, n) {},
  57: function(e, t, n) {},
  58: function(e, t, n) {}
});
//# sourceMappingURL=app.c39cbc0e.js.map
