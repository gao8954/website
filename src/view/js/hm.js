(function() {
  var h = {},
  mt = {},
  c = {
    id: "89dd1f990c05c43f2e5083436e9ae887",
    dm: ["luoo.net"],
    js: "tongji.baidu.com/hm-web/js/",
    etrk: [],
    icon: '',
    ctrk: true,
    align: 1,
    nv: -1,
    vdur: 1800000,
    age: 31536000000,
    rec: 0,
    rp: [],
    trust: 0,
    vcard: 0,
    qiao: 0,
    lxb: 0,
    conv: 0,
    comm: 0,
    apps: ''
  };
  var q = !0,
  r = null,
  s = !1;
  mt.j = {};
  mt.j.V = /msie (\d+\.\d+)/i.test(navigator.userAgent);
  mt.j.cookieEnabled = navigator.cookieEnabled;
  mt.j.javaEnabled = navigator.javaEnabled();
  mt.j.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
  mt.j.Ia = (window.screen.width || 0) + "x" + (window.screen.height || 0);
  mt.j.colorDepth = window.screen.colorDepth || 0;
  mt.cookie = {};
  mt.cookie.set = function(a, e, f) {
    var d;
    f.I && (d = new Date, d.setTime(d.getTime() + f.I));
    document.cookie = a + "=" + e + (f.domain ? "; domain=" + f.domain: "") + (f.path ? "; path=" + f.path: "") + (d ? "; expires=" + d.toGMTString() : "") + (f.Za ? "; secure": "")
  };
  mt.cookie.get = function(a) {
    return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : r
  };
  mt.r = {};
  mt.r.Sa = function(a) {
    return document.getElementById(a)
  };
  mt.r.oa = function(a) {
    var e;
    for (e = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == e) return a;
    return r
  }; (mt.r.Ga = function() {
    function a() {
      if (!a.C) {
        a.C = q;
        for (var b = 0,
        e = d.length; b < e; b++) d[b]()
      }
    }
    function e() {
      try {
        document.documentElement.doScroll("left")
      } catch(d) {
        setTimeout(e, 1);
        return
      }
      a()
    }
    var f = s,
    d = [],
    b;
    document.addEventListener ? b = function() {
      document.removeEventListener("DOMContentLoaded", b, s);
      a()
    }: document.attachEvent && (b = function() {
      "complete" === document.readyState && (document.detachEvent("onreadystatechange", b), a())
    }); (function() {
      if (!f) if (f = q, "complete" === document.readyState) a.C = q;
      else if (document.addEventListener) document.addEventListener("DOMContentLoaded", b, s),
      window.addEventListener("load", a, s);
      else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", b);
        window.attachEvent("onload", a);
        var d = s;
        try {
          d = window.frameElement == r
        } catch(p) {}
        document.documentElement.doScroll && d && e()
      }
    })();
    return function(b) {
      a.C ? b() : d.push(b)
    }
  } ()).C = s;
  mt.event = {};
  mt.event.c = function(a, e, f) {
    a.attachEvent ? a.attachEvent("on" + e,
    function(d) {
      f.call(a, d)
    }) : a.addEventListener && a.addEventListener(e, f, s)
  };
  mt.event.preventDefault = function(a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = s
  };
  mt.l = {};
  mt.l.parse = function() {
    return (new Function('return (" + source + ")'))()
  };
  mt.l.stringify = function() {
    function a(a) { / ["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00 - \x1f] / g,
      function(a) {
        var d = f[a];
        if (d) return d;
        d = a.charCodeAt();
        return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
      }));
      return '"' + a + '"'
    }
    function e(a) {
      return 10 > a ? "0" + a: a
    }
    var f = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    };
    return function(d) {
      switch (typeof d) {
      case "undefined":
        return "undefined";
      case "number":
        return isFinite(d) ? String(d) : "null";
      case "string":
        return a(d);
      case "boolean":
        return String(d);
      default:
        if (d === r) return "null";
        if (d instanceof Array) {
          var b = ["["],
          f = d.length,
          p,
          g,
          k;
          for (g = 0; g < f; g++) switch (k = d[g], typeof k) {
          case "undefined":
          case "function":
          case "unknown":
            break;
          default:
            p && b.push(","),
            b.push(mt.l.stringify(k)),
            p = 1
          }
          b.push("]");
          return b.join("")
        }
        if (d instanceof Date) return '"' + d.getFullYear() + "-" + e(d.getMonth() + 1) + "-" + e(d.getDate()) + "T" + e(d.getHours()) + ":" + e(d.getMinutes()) + ":" + e(d.getSeconds()) + '"';
        p = ["{"];
        g = mt.l.stringify;
        for (f in d) if (Object.prototype.hasOwnProperty.call(d, f)) switch (k = d[f], typeof k) {
        case "undefined":
        case "unknown":
        case "function":
          break;
        default:
          b && p.push(","),
          b = 1,
          p.push(g(f) + ":" + g(k))
        }
        p.push("}");
        return p.join("")
      }
    }
  } ();
  mt.lang = {};
  mt.lang.e = function(a, e) {
    return "[object " + e + "]" === {}.toString.call(a)
  };
  mt.lang.Wa = function(a) {
    return mt.lang.e(a, "Number") && isFinite(a)
  };
  mt.lang.Ya = function(a) {
    return mt.lang.e(a, "String")
  };
  mt.localStorage = {};
  mt.localStorage.G = function() {
    if (!mt.localStorage.g) try {
      mt.localStorage.g = document.createElement("input"),
      mt.localStorage.g.type = "hidden",
      mt.localStorage.g.style.display = "none",
      mt.localStorage.g.addBehavior("#default#userData"),
      document.getElementsByTagName("head")[0].appendChild(mt.localStorage.g)
    } catch(a) {
      return s
    }
    return q
  };
  mt.localStorage.set = function(a, e, f) {
    var d = new Date;
    d.setTime(d.getTime() + f || 31536E6);
    try {
      window.localStorage ? (e = d.getTime() + "|" + e, window.localStorage.setItem(a, e)) : mt.localStorage.G() && (mt.localStorage.g.expires = d.toUTCString(), mt.localStorage.g.load(document.location.hostname), mt.localStorage.g.setAttribute(a, e), mt.localStorage.g.save(document.location.hostname))
    } catch(b) {}
  };
  mt.localStorage.get = function(a) {
    if (window.localStorage) {
      if (a = window.localStorage.getItem(a)) {
        var e = a.indexOf("|"),
        f = a.substring(0, e) - 0;
        if (f && f > (new Date).getTime()) return a.substring(e + 1)
      }
    } else if (mt.localStorage.G()) try {
      return mt.localStorage.g.load(document.location.hostname),
      mt.localStorage.g.getAttribute(a)
    } catch(d) {}
    return r
  };
  mt.localStorage.remove = function(a) {
    if (window.localStorage) window.localStorage.removeItem(a);
    else if (mt.localStorage.G()) try {
      mt.localStorage.g.load(document.location.hostname),
      mt.localStorage.g.removeAttribute(a),
      mt.localStorage.g.save(document.location.hostname)
    } catch(e) {}
  };
  mt.sessionStorage = {};
  mt.sessionStorage.set = function(a, e) {
    if (window.sessionStorage) try {
      window.sessionStorage.setItem(a, e)
    } catch(f) {}
  };
  mt.sessionStorage.get = function(a) {
    return window.sessionStorage ? window.sessionStorage.getItem(a) : r
  };
  mt.sessionStorage.remove = function(a) {
    window.sessionStorage && window.sessionStorage.removeItem(a)
  };
  mt.P = {};
  mt.P.log = function(a, e) {
    var f = new Image,
    d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
    window[d] = f;
    f.onload = f.onerror = f.onabort = function() {
      f.onload = f.onerror = f.onabort = r;
      f = window[d] = r;
      e && e(a)
    };
    f.src = a
  };
  mt.Q = {};
  mt.Q.wa = function() {
    var a = "";
    if (navigator.plugins && navigator.mimeTypes.length) {
      var e = navigator.plugins["Shockwave Flash"];
      e && e.description && (a = e.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
    } else if (window.ActiveXObject) try {
      if (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = e.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
    } catch(f) {}
    return a
  };
  mt.Q.Qa = function(a, e, f, d, b) {
    return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + e + '" /><param name="flashvars" value="' + (b || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + e + '" flashvars="' + (b || "") + '" allowscriptaccess="always" /></object>'
  };
  mt.url = {};
  mt.url.k = function(a, e) {
    var f = a.match(RegExp("(^|&|\\?|#)(" + e + ")=([^&#]*)(&|$|#)", ""));
    return f ? f[3] : r
  };
  mt.url.Ua = function(a) {
    return (a = a.match(/^(https?:)\/\//)) ? a[1] : r
  };
  mt.url.sa = function(a) {
    return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : r
  };
  mt.url.T = function(a) {
    return (a = mt.url.sa(a)) ? a.replace(/:\d+$/, "") : a
  };
  mt.url.Ta = function(a) {
    return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : r
  };
  h.q = {
    Va: "http://tongji.baidu.com/hm-web/welcome/ico",
    N: "hm.baidu.com/hm.gif",
    ca: "baidu.com",
    Aa: "hmmd",
    Ba: "hmpl",
    za: "hmkw",
    xa: "hmci",
    Ca: "hmsr",
    ya: "hmcu",
    p: 0,
    m: Math.round( + new Date / 1E3),
    protocol: "https:" === document.location.protocol ? "https:": "http:",
    Xa: 0,
    ha: 6E5,
    ia: 10,
    R: 1024,
    ga: 1,
    w: 2147483647,
    $: "cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
  }; (function() {
    var a = {
      o: {},
      c: function(a, f) {
        this.o[a] = this.o[a] || [];
        this.o[a].push(f)
      },
      z: function(a, f) {
        this.o[a] = this.o[a] || [];
        for (var d = this.o[a].length, b = 0; b < d; b++) this.o[a][b](f)
      }
    };
    return h.A = a
  })(); (function() {
    function a(a, d) {
      var b = document.createElement("script");
      b.charset = "utf-8";
      e.e(d, "Function") && (b.readyState ? b.onreadystatechange = function() {
        if ("loaded" === b.readyState || "complete" === b.readyState) b.onreadystatechange = r,
        d()
      }: b.onload = function() {
        d()
      });
      b.src = a;
      var m = document.getElementsByTagName("script")[0];
      m.parentNode.insertBefore(b, m)
    }
    var e = mt.lang;
    return h.load = a
  })(); (function() {
    var a = mt.r,
    e = mt.event,
    f = mt.j,
    d = h.q,
    b = [],
    m = {
      aa: function() {
        c.ctrk && (e.c(document, "mouseup", m.fa()), e.c(window, "unload",
        function() {
          m.D()
        }), setInterval(function() {
          m.D()
        },
        d.ha))
      },
      fa: function() {
        return function(a) {
          a = m.pa(a);
          if ("" !== a) {
            var e = (d.protocol + "//" + d.N + "?" + h.b.Z().replace(/ep=[^&]*/, "ep=" + encodeURIComponent("[" + a + "]"))).length;
            e + (d.w + "").length > d.R || (e + encodeURIComponent(b.join(",") + (b.length ? ",": "")).length + (d.w + "").length > d.R && m.D(), b.push(a), (b.length >= d.ia || /t:a/.test(a)) && m.D())
          }
        }
      },
      pa: function(b) {
        if (0 === d.ga) {
          var e = b.target || b.srcElement,
          k = e.tagName.toLowerCase();
          if ("embed" == k || "object" == k) return ""
        }
        f.V ? (e = Math.max(document.documentElement.scrollTop, document.body.scrollTop), k = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), k = b.clientX + k, e = b.clientY + e) : (k = b.pageX, e = b.pageY);
        var l = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
        switch (c.align) {
        case 1:
          k -= l / 2;
          break;
        case 2:
          k -= l
        }
        k = "{x:" + k + ",y:" + e + ",";
        e = b.target || b.srcElement;
        return k = (b = "a" == e.tagName.toLowerCase() ? e: a.oa(e)) ? k + ("t:a,u:" + encodeURIComponent(b.href) + "}") : k + "t:b}"
      },
      D: function() {
        0 !== b.length && (h.b.a.et = 2, h.b.a.ep = "[" + b.join(",") + "]", h.b.i(), b = [])
      }
    };
    h.A.c("pv-b", m.aa);
    return m
  })(); (function() {
    function a() {
      return function() {
        h.b.a.nv = 0;
        h.b.a.st = 4;
        h.b.a.et = 3;
        h.b.a.ep = h.H.ua() + "," + h.H.ra();
        h.b.i()
      }
    }
    function e() {
      clearTimeout(x);
      var a;
      w && (a = "visible" == document[w]);
      y && (a = !document[y]);
      g = "undefined" == typeof a ? q: a;
      if ((!p || !k) && g && l) u = q,
      n = +new Date;
      else if (p && k && (!g || !l)) u = s,
      t += +new Date - n;
      p = g;
      k = l;
      x = setTimeout(e, 100)
    }
    function f(a) {
      var n = document,
      k = "";
      if (a in n) k = a;
      else for (var t = ["webkit", "ms", "moz", "o"], b = 0; b < t.length; b++) {
        var d = t[b] + a.charAt(0).toUpperCase() + a.slice(1);
        if (d in n) {
          k = d;
          break
        }
      }
      return k
    }
    function d(a) {
      if (! ("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) l = "focus" == a.type || "focusin" == a.type ? q: s,
      e()
    }
    var b = mt.event,
    m = h.A,
    p = q,
    g = q,
    k = q,
    l = q,
    v = +new Date,
    n = v,
    t = 0,
    u = q,
    w = f("visibilityState"),
    y = f("hidden"),
    x;
    e(); (function() {
      var a = w.replace(/[vV]isibilityState/, "visibilitychange");
      b.c(document, a, e);
      b.c(window, "pageshow", e);
      b.c(window, "pagehide", e);
      "object" == typeof document.onfocusin ? (b.c(document, "focusin", d), b.c(document, "focusout", d)) : (b.c(window, "focus", d), b.c(window, "blur", d))
    })();
    h.H = {
      ua: function() {
        return + new Date - v
      },
      ra: function() {
        return u ? +new Date - n + t: t
      }
    };
    m.c("pv-b",
    function() {
      b.c(window, "unload", a())
    });
    return h.H
  })(); (function() {
    var a = mt.lang,
    e = h.q,
    f = h.load,
    d = {
      Da: function(b) {
        if ((void 0 === window._dxt || a.e(window._dxt, "Array")) && "undefined" !== typeof h.b) {
          var d = h.b.J();
          f([e.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(d)].join(""), b)
        }
      },
      Oa: function(b) {
        if (a.e(b, "String") || a.e(b, "Number")) window._dxt = window._dxt || [],
        window._dxt.push(["_setUserId", b])
      }
    };
    return h.ka = d
  })(); (function() {
    function a(k) {
      for (var b in k) if ({}.hasOwnProperty.call(k, b)) {
        var d = k[b];
        f.e(d, "Object") || f.e(d, "Array") ? a(d) : k[b] = String(d)
      }
    }
    function e(a) {
      return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    }
    var f = mt.lang,
    d = mt.l,
    b = h.q,
    m = h.A,
    p = h.ka,
    g = {
      s: [],
      F: 0,
      X: s,
      init: function() {
        g.d = 0;
        m.c("pv-b",
        function() {
          g.la();
          g.ma()
        });
        m.c("pv-d", g.na);
        m.c("stag-b",
        function() {
          h.b.a.api = g.d || g.F ? g.d + "_" + g.F: ""
        });
        m.c("stag-d",
        function() {
          h.b.a.api = 0;
          g.d = 0;
          g.F = 0
        })
      },
      la: function() {
        var a = window._hmt || [];
        if (!a || f.e(a, "Array")) window._hmt = {
          id: c.id,
          cmd: {},
          push: function() {
            for (var a = window._hmt,
            k = 0; k < arguments.length; k++) {
              var n = arguments[k];
              f.e(n, "Array") && (a.cmd[a.id].push(n), "_setAccount" === n[0] && (1 < n.length && /^[0-9a-f]{32}$/.test(n[1])) && (n = n[1], a.id = n, a.cmd[n] = a.cmd[n] || []))
            }
          }
        },
        window._hmt.cmd[c.id] = [],
        window._hmt.push.apply(window._hmt, a)
      },
      ma: function() {
        var a = window._hmt;
        if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, n = 0, t = b.length; n < t; n++) {
          var e = b[n];
          d.test(e[0]) ? g.s.push(e) : g.M(e)
        }
        a.cmd[c.id] = {
          push: g.M
        }
      },
      na: function() {
        if (0 < g.s.length) for (var a = 0,
        b = g.s.length; a < b; a++) g.M(g.s[a]);
        g.s = r
      },
      M: function(a) {
        var b = a[0];
        if (g.hasOwnProperty(b) && f.e(g[b], "Function")) g[b](a)
      },
      _setAccount: function(a) {
        1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (g.d |= 1)
      },
      _setAutoPageview: function(a) {
        if (1 < a.length && (a = a[1], s === a || q === a)) g.d |= 2,
        h.b.U = a
      },
      _trackPageview: function(a) {
        if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
          g.d |= 4;
          h.b.a.et = 0;
          h.b.a.ep = "";
          h.b.K ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.K = q;
          var d = h.b.a.u,
          e = h.b.a.su;
          h.b.a.u = b.protocol + "//" + document.location.host + a[1];
          g.X || (h.b.a.su = document.location.href);
          h.b.i();
          h.b.a.u = d;
          h.b.a.su = e
        }
      },
      _trackEvent: function(a) {
        2 < a.length && (g.d |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = e(a[1]) + "*" + e(a[2]) + (a[3] ? "*" + e(a[3]) : "") + (a[4] ? "*" + e(a[4]) : ""), h.b.i())
      },
      _setCustomVar: function(a) {
        if (! (4 > a.length)) {
          var b = a[1],
          d = a[4] || 3;
          if (0 < b && 6 > b && 0 < d && 4 > d) {
            g.F++;
            for (var n = (h.b.a.cv || "*").split("!"), t = n.length; t < b - 1; t++) n.push("*");
            n[b - 1] = d + "*" + e(a[2]) + "*" + e(a[3]);
            h.b.a.cv = n.join("!");
            a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
            "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.Ha("Hm_cv_" + c.id)
          }
        }
      },
      _setReferrerOverride: function(a) {
        1 < a.length && (h.b.a.su = a[1].charAt && "/" === a[1].charAt(0) ? b.protocol + "//" + window.location.host + a[1] : a[1], g.X = q)
      },
      _trackOrder: function(b) {
        b = b[1];
        f.e(b, "Object") && (a(b), g.d |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.i())
      },
      _trackMobConv: function(a) {
        if (a = {
          webim: 1,
          tel: 2,
          map: 3,
          sms: 4,
          callback: 5,
          share: 6
        } [a[1]]) g.d |= 32,
        h.b.a.et = 93,
        h.b.a.ep = a,
        h.b.i()
      },
      _trackRTPageview: function(b) {
        b = b[1];
        f.e(b, "Object") && (a(b), b = d.stringify(b), 512 >= encodeURIComponent(b).length && (g.d |= 64, h.b.a.rt = b))
      },
      _trackRTEvent: function(e) {
        e = e[1];
        if (f.e(e, "Object")) {
          a(e);
          e = encodeURIComponent(d.stringify(e));
          var l = function(a) {
            var n = h.b.a.rt;
            g.d |= 128;
            h.b.a.et = 90;
            h.b.a.rt = a;
            h.b.i();
            h.b.a.rt = n
          },
          m = e.length;
          if (900 >= m) l.call(this, e);
          else for (var m = Math.ceil(m / 900), n = "block|" + Math.round(Math.random() * b.w).toString(16) + "|" + m + "|", t = [], u = 0; u < m; u++) t.push(u),
          t.push(e.substring(900 * u, 900 * u + 900)),
          l.call(this, n + t.join("|")),
          t = []
        }
      },
      _setUserId: function(a) {
        a = a[1];
        p.Da();
        p.Oa(a)
      }
    };
    g.init();
    h.da = g;
    return h.da
  })(); (function() {
    function a() {
      "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = q, this.a = {},
      this.U = q, this.K = s, this.init())
    }
    var e = mt.url,
    f = mt.P,
    d = mt.Q,
    b = mt.lang,
    m = mt.cookie,
    p = mt.j,
    g = mt.localStorage,
    k = mt.sessionStorage,
    l = h.q,
    v = h.A;
    a.prototype = {
      L: function(a, b) {
        a = "." + a.replace(/:\d+/, "");
        b = "." + b.replace(/:\d+/, "");
        var d = a.indexOf(b);
        return - 1 < d && d + b.length === a.length
      },
      Y: function(a, b) {
        a = a.replace(/^https?:\/\//, "");
        return 0 === a.indexOf(b)
      },
      B: function(a) {
        for (var b = 0; b < c.dm.length; b++) if ( - 1 < c.dm[b].indexOf("/")) {
          if (this.Y(a, c.dm[b])) return q
        } else {
          var d = e.T(a);
          if (d && this.L(d, c.dm[b])) return q
        }
        return s
      },
      J: function() {
        for (var a = document.location.hostname,
        b = 0,
        d = c.dm.length; b < d; b++) if (this.L(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
        return a
      },
      S: function() {
        for (var a = 0,
        b = c.dm.length; a < b; a++) {
          var d = c.dm[a];
          if ( - 1 < d.indexOf("/") && this.Y(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
        }
        return "/"
      },
      va: function() {
        if (!document.referrer) return l.m - l.p > c.vdur ? 1 : 4;
        var a = s;
        this.B(document.referrer) && this.B(document.location.href) ? a = q: (a = e.T(document.referrer), a = this.L(a || "", document.location.hostname));
        return a ? l.m - l.p > c.vdur ? 1 : 4 : 3
      },
      getData: function(a) {
        try {
          return m.get(a) || k.get(a) || g.get(a)
        } catch(b) {}
      },
      setData: function(a, b, d) {
        try {
          m.set(a, b, {
            domain: this.J(),
            path: this.S(),
            I: d
          }),
          d ? g.set(a, b, d) : k.set(a, b)
        } catch(e) {}
      },
      Ha: function(a) {
        try {
          m.set(a, "", {
            domain: this.J(),
            path: this.S(),
            I: -1
          }),
          k.remove(a),
          g.remove(a)
        } catch(b) {}
      },
      Ma: function() {
        var a, b, d, e, f;
        l.p = this.getData("Hm_lpvt_" + c.id) || 0;
        13 === l.p.length && (l.p = Math.round(l.p / 1E3));
        b = this.va();
        a = 4 !== b ? 1 : 0;
        if (d = this.getData("Hm_lvt_" + c.id)) {
          e = d.split(",");
          for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
          for (; 2592E3 < l.m - e[0];) e.shift();
          f = 4 > e.length ? 2 : 3;
          for (1 === a && e.push(l.m); 4 < e.length;) e.shift();
          d = e.join(",");
          e = e[e.length - 1]
        } else d = l.m,
        e = "",
        f = 1;
        this.setData("Hm_lvt_" + c.id, d, c.age);
        this.setData("Hm_lpvt_" + c.id, l.m);
        d = l.m === this.getData("Hm_lpvt_" + c.id) ? "1": "0";
        if (0 === c.nv && this.B(document.location.href) && ("" === document.referrer || this.B(document.referrer))) a = 0,
        b = 4;
        this.a.nv = a;
        this.a.st = b;
        this.a.cc = d;
        this.a.lt = e;
        this.a.lv = f
      },
      Z: function() {
        for (var a = [], b = 0, d = l.$.length; b < d; b++) {
          var e = l.$[b],
          f = this.a[e];
          "undefined" !== typeof f && "" !== f && a.push(e + "=" + encodeURIComponent(f))
        }
        b = this.a.et;
        this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
        return a.join("&")
      },
      Na: function() {
        this.Ma();
        this.a.si = c.id;
        this.a.su = document.referrer;
        this.a.ds = p.Ia;
        this.a.cl = p.colorDepth + "-bit";
        this.a.ln = p.language;
        this.a.ja = p.javaEnabled ? 1 : 0;
        this.a.ck = p.cookieEnabled ? 1 : 0;
        this.a.lo = "number" === typeof _bdhm_top ? 1 : 0;
        this.a.fl = d.wa();
        this.a.v = "1.1.11";
        this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
        1 === this.a.nv && (this.a.tt = document.title || "");
        var a = document.location.href;
        this.a.cm = e.k(a, l.Aa) || "";
        this.a.cp = e.k(a, l.Ba) || "";
        this.a.cw = e.k(a, l.za) || "";
        this.a.ci = e.k(a, l.xa) || "";
        this.a.cf = e.k(a, l.Ca) || "";
        this.a.cu = e.k(a, l.ya) || ""
      },
      init: function() {
        try {
          this.Na(),
          0 === this.a.nv ? this.Ka() : this.O(".*"),
          h.b = this,
          this.ea(),
          v.z("pv-b"),
          this.Ja()
        } catch(a) {
          var b = [];
          b.push("si=" + c.id);
          b.push("n=" + encodeURIComponent(a.name));
          b.push("m=" + encodeURIComponent(a.message));
          b.push("r=" + encodeURIComponent(document.referrer));
          f.log(l.protocol + "//" + l.N + "?" + b.join("&"))
        }
      },
      Ja: function() {
        function a() {
          v.z("pv-d")
        }
        this.U ? (this.K = q, this.a.et = 0, this.a.ep = "", this.i(a)) : a()
      },
      i: function(a) {
        var d = this;
        d.a.rnd = Math.round(Math.random() * l.w);
        v.z("stag-b");
        var e = l.protocol + "//" + l.N + "?" + d.Z();
        v.z("stag-d");
        d.ba(e);
        f.log(e,
        function(e) {
          d.O(e);
          b.e(a, "Function") && a.call(d)
        })
      },
      ea: function() {
        var a = document.location.hash.substring(1),
        b = RegExp(c.id),
        d = -1 < document.referrer.indexOf(l.ca),
        f = e.k(a, "jn"),
        g = /^heatlink$|^select$/.test(f);
        a && (b.test(a) && d && g) && (this.a.rnd = Math.round(Math.random() * l.w), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", l.protocol + "//" + c.js + f + ".js?" + this.a.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
      },
      ba: function(a) {
        var b = k.get("Hm_unsent_" + c.id) || "",
        d = this.a.u ? "": "&u=" + encodeURIComponent(document.location.href),
        b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b: "");
        k.set("Hm_unsent_" + c.id, b)
      },
      O: function(a) {
        var b = k.get("Hm_unsent_" + c.id) || "";
        b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/, "")) ? k.set("Hm_unsent_" + c.id, b) : k.remove("Hm_unsent_" + c.id))
      },
      Ka: function() {
        var a = this,
        b = k.get("Hm_unsent_" + c.id);
        if (b) for (var b = b.split(","), d = function(b) {
          f.log(l.protocol + "//" + decodeURIComponent(b),
          function(b) {
            a.O(b)
          })
        },
        e = 0, g = b.length; e < g; e++) d(b[e])
      }
    };
    return new a
  })(); (function() {
    var a = mt.r,
    e = mt.event,
    f = mt.url,
    d = mt.l;
    try {
      if (window.performance && performance.timing && "undefined" !== typeof h.b) {
        var b = +new Date,
        m = function(a) {
          var b = performance.timing,
          d = b[a + "Start"] ? b[a + "Start"] : 0;
          a = b[a + "End"] ? b[a + "End"] : 0;
          return {
            start: d,
            end: a,
            value: 0 < a - d ? a - d: 0
          }
        },
        p = r;
        a.Ga(function() {
          p = +new Date
        });
        var g = function() {
          var a, e, g;
          g = m("navigation");
          e = m("request");
          g = {
            netAll: e.start - g.start,
            netDns: m("domainLookup").value,
            netTcp: m("connect").value,
            srv: m("response").start - e.start,
            dom: performance.timing.domInteractive - performance.timing.fetchStart,
            loadEvent: m("loadEvent").end - g.start
          };
          a = document.referrer;
          var k = a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [],
          u = r;
          e = r;
          if ("www.baidu.com" === k[2] || "m.baidu.com" === k[2]) u = f.k(a, "qid"),
          e = f.k(a, "click_t");
          a = u;
          g.qid = a != r ? a: "";
          e != r ? (g.bdDom = p ? p - e: 0, g.bdRun = b - e, g.bdDef = m("navigation").start - e) : (g.bdDom = 0, g.bdRun = 0, g.bdDef = 0);
          h.b.a.et = 87;
          h.b.a.ep = d.stringify(g);
          h.b.i()
        };
        e.c(window, "load",
        function() {
          setTimeout(g, 500)
        })
      }
    } catch(k) {}
  })(); (function() {
    var a = h.q,
    e = {
      init: function() {
        try {
          if ("http:" === a.protocol) {
            var d = document.createElement("IFRAME");
            d.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
            d.style.display = "none";
            d.style.width = "1";
            d.style.height = "1";
            d.Ra = "0";
            document.body.appendChild(d)
          }
        } catch(b) {}
      }
    },
    f = navigator.userAgent.toLowerCase(); - 1 < f.indexOf("android") && -1 === f.indexOf("micromessenger") && e.init()
  })(); (function() {
    var a = mt.lang,
    e = mt.event,
    f = mt.l;
    if (c.comm && "undefined" !== typeof h.b) {
      var d = function(a) {
        if (a.item) {
          for (var b = a.length,
          d = Array(b); b--;) d[b] = a[b];
          return d
        }
        return [].slice.call(a)
      },
      b = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,
      m = {
        click: function() {
          for (var a = [], e = d(document.getElementsByTagName("a")), e = [].concat.apply(e, d(document.getElementsByTagName("area"))), e = [].concat.apply(e, d(document.getElementsByTagName("img"))), f = 0, g = e.length; f < g; f++) {
            var k = e[f],
            m = k.getAttribute("onclick"),
            k = k.getAttribute("href"); (b.test(m) || b.test(k)) && a.push(e[f])
          }
          return a
        }
      },
      p = function(a, b) {
        for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === s) return s
      },
      g = function(d, e) {
        var g = {
          n: "swt",
          t: "clk"
        };
        g.v = d;
        if (e) {
          var k = e.getAttribute("href"),
          m = e.getAttribute("onclick") ? "" + e.getAttribute("onclick") : r,
          l = e.getAttribute("id") || "";
          b.test(k) ? (g.sn = "mediate", g.snv = k) : a.e(m, "String") && b.test(m) && (g.sn = "wrap", g.snv = m);
          g.id = l
        }
        h.b.a.et = 86;
        h.b.a.ep = f.stringify(g);
        h.b.i();
        for (g = +new Date; 500 >= +new Date - g;);
      },
      k,
      l = "/zoosnet" + (/\/$/.test("/zoosnet") ? "": "/"),
      v = function(b, d) {
        if (k === d) return g(l + b, d),
        s;
        if (a.e(d, "Array") || a.e(d, "NodeList")) for (var e = 0,
        f = d.length; e < f; e++) if (k === d[e]) return g(l + b + "/" + (e + 1), d[e]),
        s
      };
      e.c(document, "click",
      function(b) {
        b = b || window.event;
        k = b.target || b.srcElement;
        var d = {};
        for (p(m,
        function(b, e) {
          d[b] = a.e(e, "Function") ? e() : document.getElementById(e)
        }); k && k !== document && p(d, v) !== s;) k = k.parentNode
      })
    }
  })(); (function() {
    var a = mt.event,
    e = mt.l;
    if (c.comm && "undefined" !== typeof h.b) {
      var f = +new Date,
      d = {
        n: "anti",
        sb: 0,
        kb: 0,
        clk: 0
      },
      b = function() {
        h.b.a.et = 86;
        h.b.a.ep = e.stringify(d);
        h.b.i()
      };
      a.c(document, "click",
      function() {
        d.clk++
      });
      a.c(document, "keyup",
      function() {
        d.kb = 1
      });
      a.c(window, "scroll",
      function() {
        d.sb++
      });
      a.c(window, "unload",
      function() {
        d.t = +new Date - f;
        b()
      });
      a.c(window, "load",
      function() {
        setTimeout(b, 5E3)
      })
    }
  })(); (function() {
    function a() {
      this.f = r
    }
    var e = mt.P,
    f = mt.j;
    a.prototype = {
      Ea: function(a) {
        if (this.f) this.h(a, 0);
        else if (this.isSupported()) {
          try {
            this.f = new ActiveXObject("BDEXIE.BDExExtension.1"),
            this.W = q
          } catch(d) {
            this.W = s
          }
          this.W ? this.h(a, 0) : this.h(a, -1)
        } else this.h(a, -1)
      },
      Pa: function() {
        this.f && delete this.f;
        this.f = r
      },
      La: function(a, d, e) {
        if (this.f && "SetLocalCache" in this.f) try {
          void 0 === this.f.SetLocalCache(a, d) && this.h(e, 0)
        } catch(f) {
          this.h(e, -1)
        } else this.h(e, -1)
      },
      ta: function(a, d) {
        if (this.f && "GetLocalCache" in this.f) try {
          this.h(d, this.f.GetLocalCache(a))
        } catch(e) {
          this.h(d, "")
        } else this.h(d, "")
      },
      qa: function(a) {
        if (this.f && "GetCryptStr" in this.f) try {
          this.h(a, this.f.GetCryptStr("strEncryptID1"))
        } catch(d) {
          this.h(a, "")
        } else this.h(a, "")
      },
      h: function(a, d) {
        "function" === typeof a && a(d, this)
      },
      isSupported: function() {
        if (window.ActiveXObject || "ActiveXObject" in window) try {
          return !! new ActiveXObject("BDEXIE.BDExExtension.1")
        } catch(a) {}
        return s
      },
      Fa: function() {
        var a = this;
        this.qa(function(d) {
          void 0 !== d && "" !== d && (e.log("//datax.baidu.com/x.gif?dm=" + encodeURIComponent("datax.baidu.com/webadapter/guid") + "&ac=" + encodeURIComponent(d) + "&v=hm-webadapter-0.0.1&rnd=" + Math.round(2147483647 * Math.random())), a.La("hmKey", +new Date,
          function() {
            a.Pa()
          }))
        })
      }
    };
    if (f.V && /^http(s)?:$/.test(document.location.protocol)) {
      var d = new a;
      d.Ea(function(a) {
        0 === a && d.ta("hmKey",
        function(a) {
          a = +a; (isNaN(a) || 6048E5 < +new Date - a) && d.Fa()
        })
      })
    }
  })();
})();