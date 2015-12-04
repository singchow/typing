String.prototype.rightChars = function (t) {
return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t)
},
function (t) {
var n, e, r, o, a, i, p, s, u, l, d, h, g = {
    highlightSpeed: 20,
    typeSpeed: 100,
    clearDelay: 500,
    typeDelay: 200,
    clearOnHighlight: !0,
    typerDataAttr: "data-typer-targets",
    typerInterval: 2e3
  };
o = function (n, e) {
  return "rgba(0, 0, 0, 0)" === n && (n = "rgb(255, 255, 255)"), t("<span></span>").css("color", n).css("background-color", e)
}, s = function (t) {
  return !isNaN(parseFloat(t)) && isFinite(t)
}, p = function (t) {
  t.data("typePosition", null).data("highlightPosition", null).data("leftStop", null).data("rightStop", null).data("primaryColor", null).data("backgroundColor", null).data("text", null).data("typing", null)
}, r = function (t) {
  var n = t.data("text"),
    e = t.data("oldLeft"),
    o = t.data("oldRight");
  return n && 0 !== n.length ? (t.text(e + n.charAt(0) + o), t.data("oldLeft", e + n.charAt(0)), t.data("text", n.substring(1)), setTimeout(function () {
    r(t)
  }, d()), void 0) : (p(t), void 0)
}, e = function (t) {
  t.find("span").remove(), setTimeout(function () {
    r(t)
  }, i())
}, n = function (t) {
  var r, i, p, u = t.data("highlightPosition");
  return s(u) || (u = t.data("rightStop") + 1), u <= t.data("leftStop") ? (setTimeout(function () {
    e(t)
  }, a()), void 0) : (r = t.text().substring(0, u - 1), i = t.text().substring(u - 1, t.data("rightStop") + 1), p = t.text().substring(t.data("rightStop") + 1), t.html(r), t.append(o(t.data("backgroundColor"), t.data("primaryColor")).append(i)).append(p), t.data("highlightPosition", u - 1), setTimeout(function () {
    return n(t)
  }, l()), void 0)
}, u = function (n) {
  var e;
  if (!n.data("typing")) {
    try {
      e = JSON.parse(n.attr(t.typer.options.typerDataAttr)).targets
    } catch (r) {}
    "undefined" == typeof e && (e = t.map(n.attr(t.typer.options.typerDataAttr).split(","), function (n) {
      return t.trim(n)
    }));
    var o = n.data("typeIndex"),
      a = "undefined" == typeof o ? 0 : o + 1 < e.length ? o + 1 : 0;
    n.data("typeIndex", a), n.typeTo(e[a])
  }
}, t.typer = function () {
  return {
    options: g
  }
}(), t.extend(t.typer, {
  options: g
}), t.fn.typer = function () {
  var n = t(this);
  n = n.filter(function () {
    return "undefined" != typeof t(this).attr(t.typer.options.typerDataAttr)
  }), n.each(function () {
    var n = t(this);
    u(n), setInterval(function () {
      u(n)
    }, h())
  })
}, t.fn.typeTo = function (e) {
  var r = t(this),
    o = r.text(),
    a = 0,
    i = 0;
  if (o === e) return console.log("Our strings our equal, nothing to type"), void 0;
  if (o !== r.html()) return console.error("Typer does not work on elements with child elements."), void 0;
  for (r.data("typing", !0); o.charAt(a) === e.charAt(a);) a++;
  for (; o.rightChars(i) === e.rightChars(i);) i++;
  e = e.substring(a, e.length - i + 1), r.data("oldLeft", o.substring(0, a)), r.data("oldRight", o.rightChars(i - 1)), r.data("leftStop", a), r.data("rightStop", o.length - i), r.data("primaryColor", r.css("color")), r.data("backgroundColor", r.css("background-color")), r.data("text", e), n(r)
}, l = function () {
  return t.typer.options.highlightSpeed
}, d = function () {
  return t.typer.options.typeSpeed
}, a = function () {
  return t.typer.options.clearDelay
}, i = function () {
  return t.typer.options.typeDelay
}, h = function () {
  return t.typer.options.typerInterval
}
}(jQuery), $(function () {
var t = $(".typer-target");
$.typer.options.highlightSpeed = 10, $.typer.options.typeSpeed = 75, $.typer.options.typeDelay = 75, t.typer()
});
