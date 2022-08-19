(function (e) {
  if ('object' == typeof exports && 'undefined' != typeof module) {
    module.exports = e();
  } else if ('function' == typeof define && define.amd) {
    define([], e);
  } else {
    let t;
    (t =
      'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : this),
      (t.PIXI = e());
  }
})(function () {
  let e;
  return (function t(e, i, n) {
    function r(a, o) {
      if (!i[a]) {
        if (!e[a]) {
          const l = 'function' == typeof require && require;
          if (!o && l) {
            return l(a, !0);
          }
          if (s) {
            return s(a, !0);
          }
          const h = new Error("Cannot find module '" + a + "'");
          throw ((h.code = 'MODULE_NOT_FOUND'), h);
        }
        const c = (i[a] = { exports: {} });
        e[a][0].call(
          c.exports,
          function (t) {
            const i = e[a][1][t];
            return r(i ? i : t);
          },
          c,
          c.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[a].exports;
    }
    for (
      var s = 'function' == typeof require && require, a = 0;
      a < n.length;
      a++
    ) {
      r(n[a]);
    }
    return r;
  })(
    {
      1: [
        function (t, i, n) {
          (function (t, n) {
            !(function () {
              function r() {}
              function s(e) {
                return e;
              }
              function a(e) {
                return !!e;
              }
              function o(e) {
                return !e;
              }
              function l(e) {
                return function () {
                  if (null === e) {
                    throw new Error('Callback was already called.');
                  }
                  e.apply(this, arguments), (e = null);
                };
              }
              function h(e) {
                return function () {
                  null !== e && (e.apply(this, arguments), (e = null));
                };
              }
              function c(e) {
                return (
                  z(e) ||
                  ('number' == typeof e.length &&
                    e.length >= 0 &&
                    e.length % 1 === 0)
                );
              }
              function u(e, t) {
                for (let i = -1, n = e.length; ++i < n; ) {
                  t(e[i], i, e);
                }
              }
              function d(e, t) {
                for (var i = -1, n = e.length, r = Array(n); ++i < n; ) {
                  r[i] = t(e[i], i, e);
                }
                return r;
              }
              function p(e) {
                return d(Array(e), function (e, t) {
                  return t;
                });
              }
              function f(e, t, i) {
                return (
                  u(e, function (e, n, r) {
                    i = t(i, e, n, r);
                  }),
                  i
                );
              }
              function m(e, t) {
                u(U(e), function (i) {
                  t(e[i], i);
                });
              }
              function g(e, t) {
                for (let i = 0; i < e.length; i++) {
                  if (e[i] === t) {
                    return i;
                  }
                }
                return -1;
              }
              function y(e) {
                let t,
                  i,
                  n = -1;
                return c(e)
                  ? ((t = e.length),
                    function () {
                      return n++, t > n ? n : null;
                    })
                  : ((i = U(e)),
                    (t = i.length),
                    function () {
                      return n++, t > n ? i[n] : null;
                    });
              }
              function v(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (
                      var i = Math.max(arguments.length - t, 0),
                        n = Array(i),
                        r = 0;
                      i > r;
                      r++
                    ) {
                      n[r] = arguments[r + t];
                    }
                    switch (t) {
                      case 0:
                        return e.call(this, n);
                      case 1:
                        return e.call(this, arguments[0], n);
                    }
                  }
                );
              }
              function b(e) {
                return function (t, i, n) {
                  return e(t, n);
                };
              }
              function x(e) {
                return function (t, i, n) {
                  (n = h(n || r)), (t = t || []);
                  const s = y(t);
                  if (0 >= e) {
                    return n(null);
                  }
                  let a = !1,
                    o = 0,
                    c = !1;
                  !(function u() {
                    if (a && 0 >= o) {
                      return n(null);
                    }
                    for (; e > o && !c; ) {
                      const r = s();
                      if (null === r) {
                        return (a = !0), void (0 >= o && n(null));
                      }
                      (o += 1),
                        i(
                          t[r],
                          r,
                          l(function (e) {
                            (o -= 1), e ? (n(e), (c = !0)) : u();
                          })
                        );
                    }
                  })();
                };
              }
              function w(e) {
                return function (t, i, n) {
                  return e(q.eachOf, t, i, n);
                };
              }
              function _(e) {
                return function (t, i, n, r) {
                  return e(x(i), t, n, r);
                };
              }
              function T(e) {
                return function (t, i, n) {
                  return e(q.eachOfSeries, t, i, n);
                };
              }
              function S(e, t, i, n) {
                (n = h(n || r)), (t = t || []);
                const s = c(t) ? [] : {};
                e(
                  t,
                  function (e, t, n) {
                    i(e, function (e, i) {
                      (s[t] = i), n(e);
                    });
                  },
                  function (e) {
                    n(e, s);
                  }
                );
              }
              function C(e, t, i, n) {
                const r = [];
                e(
                  t,
                  function (e, t, n) {
                    i(e, function (i) {
                      i && r.push({ index: t, value: e }), n();
                    });
                  },
                  function () {
                    n(
                      d(
                        r.sort(function (e, t) {
                          return e.index - t.index;
                        }),
                        function (e) {
                          return e.value;
                        }
                      )
                    );
                  }
                );
              }
              function E(e, t, i, n) {
                C(
                  e,
                  t,
                  function (e, t) {
                    i(e, function (e) {
                      t(!e);
                    });
                  },
                  n
                );
              }
              function A(e, t, i) {
                return function (n, r, s, a) {
                  function o() {
                    a && a(i(!1, void 0));
                  }
                  function l(e, n, r) {
                    return a
                      ? void s(e, function (n) {
                          a && t(n) && (a(i(!0, e)), (a = s = !1)), r();
                        })
                      : r();
                  }
                  arguments.length > 3
                    ? e(n, r, l, o)
                    : ((a = s), (s = r), e(n, l, o));
                };
              }
              function P(e, t) {
                return t;
              }
              function M(e, t, i) {
                i = i || r;
                const n = c(t) ? [] : {};
                e(
                  t,
                  function (e, t, i) {
                    e(
                      v(function (e, r) {
                        r.length <= 1 && (r = r[0]), (n[t] = r), i(e);
                      })
                    );
                  },
                  function (e) {
                    i(e, n);
                  }
                );
              }
              function k(e, t, i, n) {
                let r = [];
                e(
                  t,
                  function (e, t, n) {
                    i(e, function (e, t) {
                      (r = r.concat(t || [])), n(e);
                    });
                  },
                  function (e) {
                    n(e, r);
                  }
                );
              }
              function R(e, t, i) {
                function n(e, t, i, n) {
                  if (null != n && 'function' != typeof n) {
                    throw new Error('task callback must be a function');
                  }
                  return (
                    (e.started = !0),
                    z(t) || (t = [t]),
                    0 === t.length && e.idle()
                      ? q.setImmediate(function () {
                          e.drain();
                        })
                      : (u(t, function (t) {
                          const s = { data: t, callback: n || r };
                          i ? e.tasks.unshift(s) : e.tasks.push(s),
                            e.tasks.length === e.concurrency && e.saturated();
                        }),
                        void q.setImmediate(e.process))
                  );
                }
                function s(e, t) {
                  return function () {
                    a -= 1;
                    let i = !1,
                      n = arguments;
                    u(t, function (e) {
                      u(o, function (t, n) {
                        t !== e || i || (o.splice(n, 1), (i = !0));
                      }),
                        e.callback.apply(e, n);
                    }),
                      e.tasks.length + a === 0 && e.drain(),
                      e.process();
                  };
                }
                if (null == t) {
                  t = 1;
                } else if (0 === t) {
                  throw new Error('Concurrency must not be zero');
                }
                var a = 0,
                  o = [],
                  h = {
                    tasks: [],
                    concurrency: t,
                    payload: i,
                    saturated: r,
                    empty: r,
                    drain: r,
                    started: !1,
                    paused: !1,
                    push: function (e, t) {
                      n(h, e, !1, t);
                    },
                    kill: function () {
                      (h.drain = r), (h.tasks = []);
                    },
                    unshift: function (e, t) {
                      n(h, e, !0, t);
                    },
                    process: function () {
                      if (!h.paused && a < h.concurrency && h.tasks.length) {
                        for (; a < h.concurrency && h.tasks.length; ) {
                          const t = h.payload
                              ? h.tasks.splice(0, h.payload)
                              : h.tasks.splice(0, h.tasks.length),
                            i = d(t, function (e) {
                              return e.data;
                            });
                          0 === h.tasks.length && h.empty(),
                            (a += 1),
                            o.push(t[0]);
                          const n = l(s(h, t));
                          e(i, n);
                        }
                      }
                    },
                    length: function () {
                      return h.tasks.length;
                    },
                    running: function () {
                      return a;
                    },
                    workersList: function () {
                      return o;
                    },
                    idle: function () {
                      return h.tasks.length + a === 0;
                    },
                    pause: function () {
                      h.paused = !0;
                    },
                    resume: function () {
                      if (h.paused !== !1) {
                        h.paused = !1;
                        for (
                          let e = Math.min(h.concurrency, h.tasks.length),
                            t = 1;
                          e >= t;
                          t++
                        ) {
                          q.setImmediate(h.process);
                        }
                      }
                    },
                  };
                return h;
              }
              function O(e) {
                return v(function (t, i) {
                  t.apply(
                    null,
                    i.concat([
                      v(function (t, i) {
                        'object' == typeof console &&
                          (t
                            ? console.error && console.error(t)
                            : console[e] &&
                              u(i, function (t) {
                                console[e](t);
                              }));
                      }),
                    ])
                  );
                });
              }
              function I(e) {
                return function (t, i, n) {
                  e(p(t), i, n);
                };
              }
              function F(e) {
                return v(function (t, i) {
                  const n = v(function (i) {
                    const n = this,
                      r = i.pop();
                    return e(
                      t,
                      function (e, t, r) {
                        e.apply(n, i.concat([r]));
                      },
                      r
                    );
                  });
                  return i.length ? n.apply(this, i) : n;
                });
              }
              function D(e) {
                return v(function (t) {
                  const i = t.pop();
                  t.push(function () {
                    const e = arguments;
                    n
                      ? q.setImmediate(function () {
                          i.apply(null, e);
                        })
                      : i.apply(null, e);
                  });
                  var n = !0;
                  e.apply(this, t), (n = !1);
                });
              }
              var L,
                q = {},
                B =
                  ('object' == typeof self && self.self === self && self) ||
                  ('object' == typeof n && n.global === n && n) ||
                  this;
              null != B && (L = B.async),
                (q.noConflict = function () {
                  return (B.async = L), q;
                });
              var N = Object.prototype.toString,
                z =
                  Array.isArray ||
                  function (e) {
                    return '[object Array]' === N.call(e);
                  },
                G = function (e) {
                  const t = typeof e;
                  return 'function' === t || ('object' === t && !!e);
                },
                U =
                  Object.keys ||
                  function (e) {
                    const t = [];
                    for (const i in e) {
                      e.hasOwnProperty(i) && t.push(i);
                    }
                    return t;
                  },
                H = 'function' == typeof setImmediate && setImmediate,
                j = H
                  ? function (e) {
                      H(e);
                    }
                  : function (e) {
                      setTimeout(e, 0);
                    };
              'object' == typeof t && 'function' == typeof t.nextTick
                ? (q.nextTick = t.nextTick)
                : (q.nextTick = j),
                (q.setImmediate = H ? j : q.nextTick),
                (q.forEach = q.each =
                  function (e, t, i) {
                    return q.eachOf(e, b(t), i);
                  }),
                (q.forEachSeries = q.eachSeries =
                  function (e, t, i) {
                    return q.eachOfSeries(e, b(t), i);
                  }),
                (q.forEachLimit = q.eachLimit =
                  function (e, t, i, n) {
                    return x(t)(e, b(i), n);
                  }),
                (q.forEachOf = q.eachOf =
                  function (e, t, i) {
                    function n(e) {
                      o--, e ? i(e) : null === s && 0 >= o && i(null);
                    }
                    (i = h(i || r)), (e = e || []);
                    for (var s, a = y(e), o = 0; null != (s = a()); ) {
                      (o += 1), t(e[s], s, l(n));
                    }
                    0 === o && i(null);
                  }),
                (q.forEachOfSeries = q.eachOfSeries =
                  function (e, t, i) {
                    function n() {
                      let r = !0;
                      return null === a
                        ? i(null)
                        : (t(
                            e[a],
                            a,
                            l(function (e) {
                              if (e) {
                                i(e);
                              } else {
                                if (((a = s()), null === a)) {
                                  return i(null);
                                }
                                r ? q.setImmediate(n) : n();
                              }
                            })
                          ),
                          void (r = !1));
                    }
                    (i = h(i || r)), (e = e || []);
                    var s = y(e),
                      a = s();
                    n();
                  }),
                (q.forEachOfLimit = q.eachOfLimit =
                  function (e, t, i, n) {
                    x(t)(e, i, n);
                  }),
                (q.map = w(S)),
                (q.mapSeries = T(S)),
                (q.mapLimit = _(S)),
                (q.inject =
                  q.foldl =
                  q.reduce =
                    function (e, t, i, n) {
                      q.eachOfSeries(
                        e,
                        function (e, n, r) {
                          i(t, e, function (e, i) {
                            (t = i), r(e);
                          });
                        },
                        function (e) {
                          n(e, t);
                        }
                      );
                    }),
                (q.foldr = q.reduceRight =
                  function (e, t, i, n) {
                    const r = d(e, s).reverse();
                    q.reduce(r, t, i, n);
                  }),
                (q.transform = function (e, t, i, n) {
                  3 === arguments.length &&
                    ((n = i), (i = t), (t = z(e) ? [] : {})),
                    q.eachOf(
                      e,
                      function (e, n, r) {
                        i(t, e, n, r);
                      },
                      function (e) {
                        n(e, t);
                      }
                    );
                }),
                (q.select = q.filter = w(C)),
                (q.selectLimit = q.filterLimit = _(C)),
                (q.selectSeries = q.filterSeries = T(C)),
                (q.reject = w(E)),
                (q.rejectLimit = _(E)),
                (q.rejectSeries = T(E)),
                (q.any = q.some = A(q.eachOf, a, s)),
                (q.someLimit = A(q.eachOfLimit, a, s)),
                (q.all = q.every = A(q.eachOf, o, o)),
                (q.everyLimit = A(q.eachOfLimit, o, o)),
                (q.detect = A(q.eachOf, s, P)),
                (q.detectSeries = A(q.eachOfSeries, s, P)),
                (q.detectLimit = A(q.eachOfLimit, s, P)),
                (q.sortBy = function (e, t, i) {
                  function n(e, t) {
                    const i = e.criteria,
                      n = t.criteria;
                    return n > i ? -1 : i > n ? 1 : 0;
                  }
                  q.map(
                    e,
                    function (e, i) {
                      t(e, function (t, n) {
                        t ? i(t) : i(null, { value: e, criteria: n });
                      });
                    },
                    function (e, t) {
                      return e
                        ? i(e)
                        : void i(
                            null,
                            d(t.sort(n), function (e) {
                              return e.value;
                            })
                          );
                    }
                  );
                }),
                (q.auto = function (e, t, i) {
                  function n(e) {
                    p.unshift(e);
                  }
                  function s(e) {
                    const t = g(p, e);
                    t >= 0 && p.splice(t, 1);
                  }
                  function a() {
                    l--,
                      u(p.slice(0), function (e) {
                        e();
                      });
                  }
                  i || ((i = t), (t = null)), (i = h(i || r));
                  var o = U(e),
                    l = o.length;
                  if (!l) {
                    return i(null);
                  }
                  t || (t = l);
                  var c = {},
                    d = 0,
                    p = [];
                  n(function () {
                    l || i(null, c);
                  }),
                    u(o, function (r) {
                      function o() {
                        return (
                          t > d &&
                          f(
                            y,
                            function (e, t) {
                              return e && c.hasOwnProperty(t);
                            },
                            !0
                          ) &&
                          !c.hasOwnProperty(r)
                        );
                      }
                      function l() {
                        o() && (d++, s(l), u[u.length - 1](p, c));
                      }
                      for (
                        var h,
                          u = z(e[r]) ? e[r] : [e[r]],
                          p = v(function (e, t) {
                            if ((d--, t.length <= 1 && (t = t[0]), e)) {
                              const n = {};
                              m(c, function (e, t) {
                                n[t] = e;
                              }),
                                (n[r] = t),
                                i(e, n);
                            } else {
                              (c[r] = t), q.setImmediate(a);
                            }
                          }),
                          y = u.slice(0, u.length - 1),
                          b = y.length;
                        b--;

                      ) {
                        if (!(h = e[y[b]])) {
                          throw new Error('Has inexistant dependency');
                        }
                        if (z(h) && g(h, r) >= 0) {
                          throw new Error('Has cyclic dependencies');
                        }
                      }
                      o() ? (d++, u[u.length - 1](p, c)) : n(l);
                    });
                }),
                (q.retry = function (e, t, i) {
                  function n(e, t) {
                    if ('number' == typeof t) {
                      e.times = parseInt(t, 10) || s;
                    } else {
                      if ('object' != typeof t) {
                        throw new Error(
                          "Unsupported argument type for 'times': " + typeof t
                        );
                      }
                      (e.times = parseInt(t.times, 10) || s),
                        (e.interval = parseInt(t.interval, 10) || a);
                    }
                  }
                  function r(e, t) {
                    function i(e, i) {
                      return function (n) {
                        e(function (e, t) {
                          n(!e || i, { err: e, result: t });
                        }, t);
                      };
                    }
                    function n(e) {
                      return function (t) {
                        setTimeout(function () {
                          t(null);
                        }, e);
                      };
                    }
                    for (; l.times; ) {
                      const r = !(l.times -= 1);
                      o.push(i(l.task, r)),
                        !r && l.interval > 0 && o.push(n(l.interval));
                    }
                    q.series(o, function (t, i) {
                      (i = i[i.length - 1]), (e || l.callback)(i.err, i.result);
                    });
                  }
                  var s = 5,
                    a = 0,
                    o = [],
                    l = { times: s, interval: a },
                    h = arguments.length;
                  if (1 > h || h > 3) {
                    throw new Error(
                      'Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)'
                    );
                  }
                  return (
                    2 >= h && 'function' == typeof e && ((i = t), (t = e)),
                    'function' != typeof e && n(l, e),
                    (l.callback = i),
                    (l.task = t),
                    l.callback ? r() : r
                  );
                }),
                (q.waterfall = function (e, t) {
                  function i(e) {
                    return v(function (n, r) {
                      if (n) {
                        t.apply(null, [n].concat(r));
                      } else {
                        const s = e.next();
                        s ? r.push(i(s)) : r.push(t), D(e).apply(null, r);
                      }
                    });
                  }
                  if (((t = h(t || r)), !z(e))) {
                    const n = new Error(
                      'First argument to waterfall must be an array of functions'
                    );
                    return t(n);
                  }
                  return e.length ? void i(q.iterator(e))() : t();
                }),
                (q.parallel = function (e, t) {
                  M(q.eachOf, e, t);
                }),
                (q.parallelLimit = function (e, t, i) {
                  M(x(t), e, i);
                }),
                (q.series = function (e, t) {
                  M(q.eachOfSeries, e, t);
                }),
                (q.iterator = function (e) {
                  function t(i) {
                    function n() {
                      return e.length && e[i].apply(null, arguments), n.next();
                    }
                    return (
                      (n.next = function () {
                        return i < e.length - 1 ? t(i + 1) : null;
                      }),
                      n
                    );
                  }
                  return t(0);
                }),
                (q.apply = v(function (e, t) {
                  return v(function (i) {
                    return e.apply(null, t.concat(i));
                  });
                })),
                (q.concat = w(k)),
                (q.concatSeries = T(k)),
                (q.whilst = function (e, t, i) {
                  if (((i = i || r), e())) {
                    var n = v(function (r, s) {
                      r ? i(r) : e.apply(this, s) ? t(n) : i(null);
                    });
                    t(n);
                  } else {
                    i(null);
                  }
                }),
                (q.doWhilst = function (e, t, i) {
                  let n = 0;
                  return q.whilst(
                    function () {
                      return ++n <= 1 || t.apply(this, arguments);
                    },
                    e,
                    i
                  );
                }),
                (q.until = function (e, t, i) {
                  return q.whilst(
                    function () {
                      return !e.apply(this, arguments);
                    },
                    t,
                    i
                  );
                }),
                (q.doUntil = function (e, t, i) {
                  return q.doWhilst(
                    e,
                    function () {
                      return !t.apply(this, arguments);
                    },
                    i
                  );
                }),
                (q.during = function (e, t, i) {
                  i = i || r;
                  var n = v(function (t, n) {
                      t ? i(t) : (n.push(s), e.apply(this, n));
                    }),
                    s = function (e, r) {
                      e ? i(e) : r ? t(n) : i(null);
                    };
                  e(s);
                }),
                (q.doDuring = function (e, t, i) {
                  let n = 0;
                  q.during(
                    function (e) {
                      n++ < 1 ? e(null, !0) : t.apply(this, arguments);
                    },
                    e,
                    i
                  );
                }),
                (q.queue = function (e, t) {
                  const i = R(
                    function (t, i) {
                      e(t[0], i);
                    },
                    t,
                    1
                  );
                  return i;
                }),
                (q.priorityQueue = function (e, t) {
                  function i(e, t) {
                    return e.priority - t.priority;
                  }
                  function n(e, t, i) {
                    for (var n = -1, r = e.length - 1; r > n; ) {
                      const s = n + ((r - n + 1) >>> 1);
                      i(t, e[s]) >= 0 ? (n = s) : (r = s - 1);
                    }
                    return n;
                  }
                  function s(e, t, s, a) {
                    if (null != a && 'function' != typeof a) {
                      throw new Error('task callback must be a function');
                    }
                    return (
                      (e.started = !0),
                      z(t) || (t = [t]),
                      0 === t.length
                        ? q.setImmediate(function () {
                            e.drain();
                          })
                        : void u(t, function (t) {
                            const o = {
                              data: t,
                              priority: s,
                              callback: 'function' == typeof a ? a : r,
                            };
                            e.tasks.splice(n(e.tasks, o, i) + 1, 0, o),
                              e.tasks.length === e.concurrency && e.saturated(),
                              q.setImmediate(e.process);
                          })
                    );
                  }
                  const a = q.queue(e, t);
                  return (
                    (a.push = function (e, t, i) {
                      s(a, e, t, i);
                    }),
                    delete a.unshift,
                    a
                  );
                }),
                (q.cargo = function (e, t) {
                  return R(e, 1, t);
                }),
                (q.log = O('log')),
                (q.dir = O('dir')),
                (q.memoize = function (e, t) {
                  const i = {},
                    n = {};
                  t = t || s;
                  const r = v(function (r) {
                    const s = r.pop(),
                      a = t.apply(null, r);
                    a in i
                      ? q.setImmediate(function () {
                          s.apply(null, i[a]);
                        })
                      : a in n
                      ? n[a].push(s)
                      : ((n[a] = [s]),
                        e.apply(
                          null,
                          r.concat([
                            v(function (e) {
                              i[a] = e;
                              const t = n[a];
                              delete n[a];
                              for (let r = 0, s = t.length; s > r; r++) {
                                t[r].apply(null, e);
                              }
                            }),
                          ])
                        ));
                  });
                  return (r.memo = i), (r.unmemoized = e), r;
                }),
                (q.unmemoize = function (e) {
                  return function () {
                    return (e.unmemoized || e).apply(null, arguments);
                  };
                }),
                (q.times = I(q.map)),
                (q.timesSeries = I(q.mapSeries)),
                (q.timesLimit = function (e, t, i, n) {
                  return q.mapLimit(p(e), t, i, n);
                }),
                (q.seq = function () {
                  const e = arguments;
                  return v(function (t) {
                    let i = this,
                      n = t[t.length - 1];
                    'function' == typeof n ? t.pop() : (n = r),
                      q.reduce(
                        e,
                        t,
                        function (e, t, n) {
                          t.apply(
                            i,
                            e.concat([
                              v(function (e, t) {
                                n(e, t);
                              }),
                            ])
                          );
                        },
                        function (e, t) {
                          n.apply(i, [e].concat(t));
                        }
                      );
                  });
                }),
                (q.compose = function () {
                  return q.seq.apply(
                    null,
                    Array.prototype.reverse.call(arguments)
                  );
                }),
                (q.applyEach = F(q.eachOf)),
                (q.applyEachSeries = F(q.eachOfSeries)),
                (q.forever = function (e, t) {
                  function i(e) {
                    return e ? n(e) : void s(i);
                  }
                  var n = l(t || r),
                    s = D(e);
                  i();
                }),
                (q.ensureAsync = D),
                (q.constant = v(function (e) {
                  const t = [null].concat(e);
                  return function (e) {
                    return e.apply(this, t);
                  };
                })),
                (q.wrapSync = q.asyncify =
                  function (e) {
                    return v(function (t) {
                      let i,
                        n = t.pop();
                      try {
                        i = e.apply(this, t);
                      } catch (r) {
                        return n(r);
                      }
                      G(i) && 'function' == typeof i.then
                        ? i
                            .then(function (e) {
                              n(null, e);
                            })
                            ['catch'](function (e) {
                              n(e.message ? e : new Error(e));
                            })
                        : n(null, i);
                    });
                  }),
                'object' == typeof i && i.exports
                  ? (i.exports = q)
                  : 'function' == typeof e && e.amd
                  ? e([], function () {
                      return q;
                    })
                  : (B.async = q);
            })();
          }.call(
            this,
            t('_process'),
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          ));
        },
        { _process: 3 },
      ],
      2: [
        function (e, t, i) {
          (function (e) {
            function t(e, t) {
              for (var i = 0, n = e.length - 1; n >= 0; n--) {
                const r = e[n];
                '.' === r
                  ? e.splice(n, 1)
                  : '..' === r
                  ? (e.splice(n, 1), i++)
                  : i && (e.splice(n, 1), i--);
              }
              if (t) {
                for (; i--; i) {
                  e.unshift('..');
                }
              }
              return e;
            }
            function n(e, t) {
              if (e.filter) {
                return e.filter(t);
              }
              for (var i = [], n = 0; n < e.length; n++) {
                t(e[n], n, e) && i.push(e[n]);
              }
              return i;
            }
            const r =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
              s = function (e) {
                return r.exec(e).slice(1);
              };
            (i.resolve = function () {
              for (
                var i = '', r = !1, s = arguments.length - 1;
                s >= -1 && !r;
                s--
              ) {
                const a = s >= 0 ? arguments[s] : e.cwd();
                if ('string' != typeof a) {
                  throw new TypeError(
                    'Arguments to path.resolve must be strings'
                  );
                }
                a && ((i = a + '/' + i), (r = '/' === a.charAt(0)));
              }
              return (
                (i = t(
                  n(i.split('/'), function (e) {
                    return !!e;
                  }),
                  !r
                ).join('/')),
                (r ? '/' : '') + i || '.'
              );
            }),
              (i.normalize = function (e) {
                const r = i.isAbsolute(e),
                  s = '/' === a(e, -1);
                return (
                  (e = t(
                    n(e.split('/'), function (e) {
                      return !!e;
                    }),
                    !r
                  ).join('/')),
                  e || r || (e = '.'),
                  e && s && (e += '/'),
                  (r ? '/' : '') + e
                );
              }),
              (i.isAbsolute = function (e) {
                return '/' === e.charAt(0);
              }),
              (i.join = function () {
                const e = Array.prototype.slice.call(arguments, 0);
                return i.normalize(
                  n(e, function (e, t) {
                    if ('string' != typeof e) {
                      throw new TypeError(
                        'Arguments to path.join must be strings'
                      );
                    }
                    return e;
                  }).join('/')
                );
              }),
              (i.relative = function (e, t) {
                function n(e) {
                  for (var t = 0; t < e.length && '' === e[t]; t++) {}
                  for (var i = e.length - 1; i >= 0 && '' === e[i]; i--) {}
                  return t > i ? [] : e.slice(t, i - t + 1);
                }
                (e = i.resolve(e).substr(1)), (t = i.resolve(t).substr(1));
                for (
                  var r = n(e.split('/')),
                    s = n(t.split('/')),
                    a = Math.min(r.length, s.length),
                    o = a,
                    l = 0;
                  a > l;
                  l++
                ) {
                  if (r[l] !== s[l]) {
                    o = l;
                    break;
                  }
                }
                for (var h = [], l = o; l < r.length; l++) {
                  h.push('..');
                }
                return (h = h.concat(s.slice(o))), h.join('/');
              }),
              (i.sep = '/'),
              (i.delimiter = ':'),
              (i.dirname = function (e) {
                let t = s(e),
                  i = t[0],
                  n = t[1];
                return i || n
                  ? (n && (n = n.substr(0, n.length - 1)), i + n)
                  : '.';
              }),
              (i.basename = function (e, t) {
                let i = s(e)[2];
                return (
                  t &&
                    i.substr(-1 * t.length) === t &&
                    (i = i.substr(0, i.length - t.length)),
                  i
                );
              }),
              (i.extname = function (e) {
                return s(e)[3];
              });
            var a =
              'b' === 'ab'.substr(-1)
                ? function (e, t, i) {
                    return e.substr(t, i);
                  }
                : function (e, t, i) {
                    return 0 > t && (t = e.length + t), e.substr(t, i);
                  };
          }.call(this, e('_process')));
        },
        { _process: 3 },
      ],
      3: [
        function (e, t, i) {
          function n() {
            (c = !1), o.length ? (h = o.concat(h)) : (u = -1), h.length && r();
          }
          function r() {
            if (!c) {
              const e = setTimeout(n);
              c = !0;
              for (let t = h.length; t; ) {
                for (o = h, h = []; ++u < t; ) {
                  o && o[u].run();
                }
                (u = -1), (t = h.length);
              }
              (o = null), (c = !1), clearTimeout(e);
            }
          }
          function s(e, t) {
            (this.fun = e), (this.array = t);
          }
          function a() {}
          var o,
            l = (t.exports = {}),
            h = [],
            c = !1,
            u = -1;
          (l.nextTick = function (e) {
            const t = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (let i = 1; i < arguments.length; i++) {
                t[i - 1] = arguments[i];
              }
            }
            h.push(new s(e, t)), 1 !== h.length || c || setTimeout(r, 0);
          }),
            (s.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (l.title = 'browser'),
            (l.browser = !0),
            (l.env = {}),
            (l.argv = []),
            (l.version = ''),
            (l.versions = {}),
            (l.on = a),
            (l.addListener = a),
            (l.once = a),
            (l.off = a),
            (l.removeListener = a),
            (l.removeAllListeners = a),
            (l.emit = a),
            (l.binding = function (e) {
              throw new Error('process.binding is not supported');
            }),
            (l.cwd = function () {
              return '/';
            }),
            (l.chdir = function (e) {
              throw new Error('process.chdir is not supported');
            }),
            (l.umask = function () {
              return 0;
            });
        },
        {},
      ],
      4: [
        function (t, i, n) {
          (function (t) {
            !(function (r) {
              function s(e) {
                throw RangeError(F[e]);
              }
              function a(e, t) {
                for (var i = e.length, n = []; i--; ) {
                  n[i] = t(e[i]);
                }
                return n;
              }
              function o(e, t) {
                let i = e.split('@'),
                  n = '';
                i.length > 1 && ((n = i[0] + '@'), (e = i[1])),
                  (e = e.replace(I, '.'));
                const r = e.split('.'),
                  s = a(r, t).join('.');
                return n + s;
              }
              function l(e) {
                for (var t, i, n = [], r = 0, s = e.length; s > r; ) {
                  (t = e.charCodeAt(r++)),
                    t >= 55296 && 56319 >= t && s > r
                      ? ((i = e.charCodeAt(r++)),
                        56320 == (64512 & i)
                          ? n.push(((1023 & t) << 10) + (1023 & i) + 65536)
                          : (n.push(t), r--))
                      : n.push(t);
                }
                return n;
              }
              function h(e) {
                return a(e, function (e) {
                  let t = '';
                  return (
                    e > 65535 &&
                      ((e -= 65536),
                      (t += q(((e >>> 10) & 1023) | 55296)),
                      (e = 56320 | (1023 & e))),
                    (t += q(e))
                  );
                }).join('');
              }
              function c(e) {
                return 10 > e - 48
                  ? e - 22
                  : 26 > e - 65
                  ? e - 65
                  : 26 > e - 97
                  ? e - 97
                  : T;
              }
              function u(e, t) {
                return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
              }
              function d(e, t, i) {
                let n = 0;
                for (
                  e = i ? L(e / A) : e >> 1, e += L(e / t);
                  e > (D * C) >> 1;
                  n += T
                ) {
                  e = L(e / D);
                }
                return L(n + ((D + 1) * e) / (e + E));
              }
              function p(e) {
                let t,
                  i,
                  n,
                  r,
                  a,
                  o,
                  l,
                  u,
                  p,
                  f,
                  m = [],
                  g = e.length,
                  y = 0,
                  v = M,
                  b = P;
                for (
                  i = e.lastIndexOf(k), 0 > i && (i = 0), n = 0;
                  i > n;
                  ++n
                ) {
                  e.charCodeAt(n) >= 128 && s('not-basic'),
                    m.push(e.charCodeAt(n));
                }
                for (r = i > 0 ? i + 1 : 0; g > r; ) {
                  for (
                    a = y, o = 1, l = T;
                    r >= g && s('invalid-input'),
                      (u = c(e.charCodeAt(r++))),
                      (u >= T || u > L((_ - y) / o)) && s('overflow'),
                      (y += u * o),
                      (p = b >= l ? S : l >= b + C ? C : l - b),
                      !(p > u);
                    l += T
                  ) {
                    (f = T - p), o > L(_ / f) && s('overflow'), (o *= f);
                  }
                  (t = m.length + 1),
                    (b = d(y - a, t, 0 == a)),
                    L(y / t) > _ - v && s('overflow'),
                    (v += L(y / t)),
                    (y %= t),
                    m.splice(y++, 0, v);
                }
                return h(m);
              }
              function f(e) {
                let t,
                  i,
                  n,
                  r,
                  a,
                  o,
                  h,
                  c,
                  p,
                  f,
                  m,
                  g,
                  y,
                  v,
                  b,
                  x = [];
                for (
                  e = l(e), g = e.length, t = M, i = 0, a = P, o = 0;
                  g > o;
                  ++o
                ) {
                  (m = e[o]), 128 > m && x.push(q(m));
                }
                for (n = r = x.length, r && x.push(k); g > n; ) {
                  for (h = _, o = 0; g > o; ++o) {
                    (m = e[o]), m >= t && h > m && (h = m);
                  }
                  for (
                    y = n + 1,
                      h - t > L((_ - i) / y) && s('overflow'),
                      i += (h - t) * y,
                      t = h,
                      o = 0;
                    g > o;
                    ++o
                  ) {
                    if (
                      ((m = e[o]), t > m && ++i > _ && s('overflow'), m == t)
                    ) {
                      for (
                        c = i, p = T;
                        (f = a >= p ? S : p >= a + C ? C : p - a), !(f > c);
                        p += T
                      ) {
                        (b = c - f),
                          (v = T - f),
                          x.push(q(u(f + (b % v), 0))),
                          (c = L(b / v));
                      }
                      x.push(q(u(c, 0))), (a = d(i, y, n == r)), (i = 0), ++n;
                    }
                  }
                  ++i, ++t;
                }
                return x.join('');
              }
              function m(e) {
                return o(e, function (e) {
                  return R.test(e) ? p(e.slice(4).toLowerCase()) : e;
                });
              }
              function g(e) {
                return o(e, function (e) {
                  return O.test(e) ? 'xn--' + f(e) : e;
                });
              }
              const y = 'object' == typeof n && n && !n.nodeType && n,
                v = 'object' == typeof i && i && !i.nodeType && i,
                b = 'object' == typeof t && t;
              (b.global !== b && b.window !== b && b.self !== b) || (r = b);
              var x,
                w,
                _ = 2147483647,
                T = 36,
                S = 1,
                C = 26,
                E = 38,
                A = 700,
                P = 72,
                M = 128,
                k = '-',
                R = /^xn--/,
                O = /[^\x20-\x7E]/,
                I = /[\x2E\u3002\uFF0E\uFF61]/g,
                F = {
                  overflow: 'Overflow: input needs wider integers to process',
                  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                  'invalid-input': 'Invalid input',
                },
                D = T - S,
                L = Math.floor,
                q = String.fromCharCode;
              if (
                ((x = {
                  version: '1.3.2',
                  ucs2: { decode: l, encode: h },
                  decode: p,
                  encode: f,
                  toASCII: g,
                  toUnicode: m,
                }),
                'function' == typeof e && 'object' == typeof e.amd && e.amd)
              ) {
                e('punycode', function () {
                  return x;
                });
              } else if (y && v) {
                if (i.exports == y) {
                  v.exports = x;
                } else {
                  for (w in x) {
                    x.hasOwnProperty(w) && (y[w] = x[w]);
                  }
                }
              } else {
                r.punycode = x;
              }
            })(this);
          }.call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      5: [
        function (e, t, i) {
          'use strict';
          function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          t.exports = function (e, t, i, s) {
            (t = t || '&'), (i = i || '=');
            const a = {};
            if ('string' != typeof e || 0 === e.length) {
              return a;
            }
            const o = /\+/g;
            e = e.split(t);
            let l = 1e3;
            s && 'number' == typeof s.maxKeys && (l = s.maxKeys);
            let h = e.length;
            l > 0 && h > l && (h = l);
            for (let c = 0; h > c; ++c) {
              var u,
                d,
                p,
                f,
                m = e[c].replace(o, '%20'),
                g = m.indexOf(i);
              g >= 0
                ? ((u = m.substr(0, g)), (d = m.substr(g + 1)))
                : ((u = m), (d = '')),
                (p = decodeURIComponent(u)),
                (f = decodeURIComponent(d)),
                n(a, p)
                  ? r(a[p])
                    ? a[p].push(f)
                    : (a[p] = [a[p], f])
                  : (a[p] = f);
            }
            return a;
          };
          var r =
            Array.isArray ||
            function (e) {
              return '[object Array]' === Object.prototype.toString.call(e);
            };
        },
        {},
      ],
      6: [
        function (e, t, i) {
          'use strict';
          function n(e, t) {
            if (e.map) {
              return e.map(t);
            }
            for (var i = [], n = 0; n < e.length; n++) {
              i.push(t(e[n], n));
            }
            return i;
          }
          const r = function (e) {
            switch (typeof e) {
              case 'string':
                return e;
              case 'boolean':
                return e ? 'true' : 'false';
              case 'number':
                return isFinite(e) ? e : '';
              default:
                return '';
            }
          };
          t.exports = function (e, t, i, o) {
            return (
              (t = t || '&'),
              (i = i || '='),
              null === e && (e = void 0),
              'object' == typeof e
                ? n(a(e), function (a) {
                    const o = encodeURIComponent(r(a)) + i;
                    return s(e[a])
                      ? n(e[a], function (e) {
                          return o + encodeURIComponent(r(e));
                        }).join(t)
                      : o + encodeURIComponent(r(e[a]));
                  }).join(t)
                : o
                ? encodeURIComponent(r(o)) + i + encodeURIComponent(r(e))
                : ''
            );
          };
          var s =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              },
            a =
              Object.keys ||
              function (e) {
                const t = [];
                for (const i in e) {
                  Object.prototype.hasOwnProperty.call(e, i) && t.push(i);
                }
                return t;
              };
        },
        {},
      ],
      7: [
        function (e, t, i) {
          'use strict';
          (i.decode = i.parse = e('./decode')),
            (i.encode = i.stringify = e('./encode'));
        },
        { './decode': 5, './encode': 6 },
      ],
      8: [
        function (e, t, i) {
          function n() {
            (this.protocol = null),
              (this.slashes = null),
              (this.auth = null),
              (this.host = null),
              (this.port = null),
              (this.hostname = null),
              (this.hash = null),
              (this.search = null),
              (this.query = null),
              (this.pathname = null),
              (this.path = null),
              (this.href = null);
          }
          function r(e, t, i) {
            if (e && h(e) && e instanceof n) {
              return e;
            }
            const r = new n();
            return r.parse(e, t, i), r;
          }
          function s(e) {
            return (
              l(e) && (e = r(e)),
              e instanceof n ? e.format() : n.prototype.format.call(e)
            );
          }
          function a(e, t) {
            return r(e, !1, !0).resolve(t);
          }
          function o(e, t) {
            return e ? r(e, !1, !0).resolveObject(t) : t;
          }
          function l(e) {
            return 'string' == typeof e;
          }
          function h(e) {
            return 'object' == typeof e && null !== e;
          }
          function c(e) {
            return null === e;
          }
          function u(e) {
            return null == e;
          }
          const d = e('punycode');
          (i.parse = r),
            (i.resolve = a),
            (i.resolveObject = o),
            (i.format = s),
            (i.Url = n);
          const p = /^([a-z0-9.+-]+:)/i,
            f = /:[0-9]*$/,
            m = ['<', '>', '"', '`', ' ', '\r', '\n', '	'],
            g = ['{', '}', '|', '\\', '^', '`'].concat(m),
            y = ["'"].concat(g),
            v = ['%', '/', '?', ';', '#'].concat(y),
            b = ['/', '?', '#'],
            x = 255,
            w = /^[a-z0-9A-Z_-]{0,63}$/,
            _ = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
            T = { javascript: !0, 'javascript:': !0 },
            S = { javascript: !0, 'javascript:': !0 },
            C = {
              http: !0,
              https: !0,
              ftp: !0,
              gopher: !0,
              file: !0,
              'http:': !0,
              'https:': !0,
              'ftp:': !0,
              'gopher:': !0,
              'file:': !0,
            },
            E = e('querystring');
          (n.prototype.parse = function (e, t, i) {
            if (!l(e)) {
              throw new TypeError(
                "Parameter 'url' must be a string, not " + typeof e
              );
            }
            let n = e;
            n = n.trim();
            let r = p.exec(n);
            if (r) {
              r = r[0];
              var s = r.toLowerCase();
              (this.protocol = s), (n = n.substr(r.length));
            }
            if (i || r || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
              var a = '//' === n.substr(0, 2);
              !a || (r && S[r]) || ((n = n.substr(2)), (this.slashes = !0));
            }
            if (!S[r] && (a || (r && !C[r]))) {
              for (var o = -1, h = 0; h < b.length; h++) {
                var c = n.indexOf(b[h]);
                -1 !== c && (-1 === o || o > c) && (o = c);
              }
              let u, f;
              (f = -1 === o ? n.lastIndexOf('@') : n.lastIndexOf('@', o)),
                -1 !== f &&
                  ((u = n.slice(0, f)),
                  (n = n.slice(f + 1)),
                  (this.auth = decodeURIComponent(u))),
                (o = -1);
              for (var h = 0; h < v.length; h++) {
                var c = n.indexOf(v[h]);
                -1 !== c && (-1 === o || o > c) && (o = c);
              }
              -1 === o && (o = n.length),
                (this.host = n.slice(0, o)),
                (n = n.slice(o)),
                this.parseHost(),
                (this.hostname = this.hostname || '');
              const m =
                '[' === this.hostname[0] &&
                ']' === this.hostname[this.hostname.length - 1];
              if (!m) {
                for (
                  var g = this.hostname.split(/\./), h = 0, A = g.length;
                  A > h;
                  h++
                ) {
                  const P = g[h];
                  if (P && !P.match(w)) {
                    for (var M = '', k = 0, R = P.length; R > k; k++) {
                      M += P.charCodeAt(k) > 127 ? 'x' : P[k];
                    }
                    if (!M.match(w)) {
                      const O = g.slice(0, h),
                        I = g.slice(h + 1),
                        F = P.match(_);
                      F && (O.push(F[1]), I.unshift(F[2])),
                        I.length && (n = '/' + I.join('.') + n),
                        (this.hostname = O.join('.'));
                      break;
                    }
                  }
                }
              }
              if (
                (this.hostname.length > x
                  ? (this.hostname = '')
                  : (this.hostname = this.hostname.toLowerCase()),
                !m)
              ) {
                for (
                  var D = this.hostname.split('.'), L = [], h = 0;
                  h < D.length;
                  ++h
                ) {
                  var q = D[h];
                  L.push(q.match(/[^A-Za-z0-9_-]/) ? 'xn--' + d.encode(q) : q);
                }
                this.hostname = L.join('.');
              }
              var B = this.port ? ':' + this.port : '',
                N = this.hostname || '';
              (this.host = N + B),
                (this.href += this.host),
                m &&
                  ((this.hostname = this.hostname.substr(
                    1,
                    this.hostname.length - 2
                  )),
                  '/' !== n[0] && (n = '/' + n));
            }
            if (!T[s]) {
              for (var h = 0, A = y.length; A > h; h++) {
                let z = y[h],
                  G = encodeURIComponent(z);
                G === z && (G = escape(z)), (n = n.split(z).join(G));
              }
            }
            const U = n.indexOf('#');
            -1 !== U && ((this.hash = n.substr(U)), (n = n.slice(0, U)));
            const H = n.indexOf('?');
            if (
              (-1 !== H
                ? ((this.search = n.substr(H)),
                  (this.query = n.substr(H + 1)),
                  t && (this.query = E.parse(this.query)),
                  (n = n.slice(0, H)))
                : t && ((this.search = ''), (this.query = {})),
              n && (this.pathname = n),
              C[s] && this.hostname && !this.pathname && (this.pathname = '/'),
              this.pathname || this.search)
            ) {
              var B = this.pathname || '',
                q = this.search || '';
              this.path = B + q;
            }
            return (this.href = this.format()), this;
          }),
            (n.prototype.format = function () {
              let e = this.auth || '';
              e &&
                ((e = encodeURIComponent(e)),
                (e = e.replace(/%3A/i, ':')),
                (e += '@'));
              let t = this.protocol || '',
                i = this.pathname || '',
                n = this.hash || '',
                r = !1,
                s = '';
              this.host
                ? (r = e + this.host)
                : this.hostname &&
                  ((r =
                    e +
                    (-1 === this.hostname.indexOf(':')
                      ? this.hostname
                      : '[' + this.hostname + ']')),
                  this.port && (r += ':' + this.port)),
                this.query &&
                  h(this.query) &&
                  Object.keys(this.query).length &&
                  (s = E.stringify(this.query));
              let a = this.search || (s && '?' + s) || '';
              return (
                t && ':' !== t.substr(-1) && (t += ':'),
                this.slashes || ((!t || C[t]) && r !== !1)
                  ? ((r = '//' + (r || '')),
                    i && '/' !== i.charAt(0) && (i = '/' + i))
                  : r || (r = ''),
                n && '#' !== n.charAt(0) && (n = '#' + n),
                a && '?' !== a.charAt(0) && (a = '?' + a),
                (i = i.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })),
                (a = a.replace('#', '%23')),
                t + r + i + a + n
              );
            }),
            (n.prototype.resolve = function (e) {
              return this.resolveObject(r(e, !1, !0)).format();
            }),
            (n.prototype.resolveObject = function (e) {
              if (l(e)) {
                const t = new n();
                t.parse(e, !1, !0), (e = t);
              }
              const i = new n();
              if (
                (Object.keys(this).forEach(function (e) {
                  i[e] = this[e];
                }, this),
                (i.hash = e.hash),
                '' === e.href)
              ) {
                return (i.href = i.format()), i;
              }
              if (e.slashes && !e.protocol) {
                return (
                  Object.keys(e).forEach(function (t) {
                    'protocol' !== t && (i[t] = e[t]);
                  }),
                  C[i.protocol] &&
                    i.hostname &&
                    !i.pathname &&
                    (i.path = i.pathname = '/'),
                  (i.href = i.format()),
                  i
                );
              }
              if (e.protocol && e.protocol !== i.protocol) {
                if (!C[e.protocol]) {
                  return (
                    Object.keys(e).forEach(function (t) {
                      i[t] = e[t];
                    }),
                    (i.href = i.format()),
                    i
                  );
                }
                if (((i.protocol = e.protocol), e.host || S[e.protocol])) {
                  i.pathname = e.pathname;
                } else {
                  for (
                    var r = (e.pathname || '').split('/');
                    r.length && !(e.host = r.shift());

                  ) {}
                  e.host || (e.host = ''),
                    e.hostname || (e.hostname = ''),
                    '' !== r[0] && r.unshift(''),
                    r.length < 2 && r.unshift(''),
                    (i.pathname = r.join('/'));
                }
                if (
                  ((i.search = e.search),
                  (i.query = e.query),
                  (i.host = e.host || ''),
                  (i.auth = e.auth),
                  (i.hostname = e.hostname || e.host),
                  (i.port = e.port),
                  i.pathname || i.search)
                ) {
                  const s = i.pathname || '',
                    a = i.search || '';
                  i.path = s + a;
                }
                return (
                  (i.slashes = i.slashes || e.slashes), (i.href = i.format()), i
                );
              }
              var o = i.pathname && '/' === i.pathname.charAt(0),
                h = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
                d = h || o || (i.host && e.pathname),
                p = d,
                f = (i.pathname && i.pathname.split('/')) || [],
                r = (e.pathname && e.pathname.split('/')) || [],
                m = i.protocol && !C[i.protocol];
              if (
                (m &&
                  ((i.hostname = ''),
                  (i.port = null),
                  i.host && ('' === f[0] ? (f[0] = i.host) : f.unshift(i.host)),
                  (i.host = ''),
                  e.protocol &&
                    ((e.hostname = null),
                    (e.port = null),
                    e.host &&
                      ('' === r[0] ? (r[0] = e.host) : r.unshift(e.host)),
                    (e.host = null)),
                  (d = d && ('' === r[0] || '' === f[0]))),
                h)
              ) {
                (i.host = e.host || '' === e.host ? e.host : i.host),
                  (i.hostname =
                    e.hostname || '' === e.hostname ? e.hostname : i.hostname),
                  (i.search = e.search),
                  (i.query = e.query),
                  (f = r);
              } else if (r.length) {
                f || (f = []),
                  f.pop(),
                  (f = f.concat(r)),
                  (i.search = e.search),
                  (i.query = e.query);
              } else if (!u(e.search)) {
                if (m) {
                  i.hostname = i.host = f.shift();
                  var g =
                    i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;
                  g &&
                    ((i.auth = g.shift()), (i.host = i.hostname = g.shift()));
                }
                return (
                  (i.search = e.search),
                  (i.query = e.query),
                  (c(i.pathname) && c(i.search)) ||
                    (i.path =
                      (i.pathname ? i.pathname : '') +
                      (i.search ? i.search : '')),
                  (i.href = i.format()),
                  i
                );
              }
              if (!f.length) {
                return (
                  (i.pathname = null),
                  i.search ? (i.path = '/' + i.search) : (i.path = null),
                  (i.href = i.format()),
                  i
                );
              }
              for (
                var y = f.slice(-1)[0],
                  v =
                    ((i.host || e.host) && ('.' === y || '..' === y)) ||
                    '' === y,
                  b = 0,
                  x = f.length;
                x >= 0;
                x--
              ) {
                (y = f[x]),
                  '.' == y
                    ? f.splice(x, 1)
                    : '..' === y
                    ? (f.splice(x, 1), b++)
                    : b && (f.splice(x, 1), b--);
              }
              if (!d && !p) {
                for (; b--; b) {
                  f.unshift('..');
                }
              }
              !d ||
                '' === f[0] ||
                (f[0] && '/' === f[0].charAt(0)) ||
                f.unshift(''),
                v && '/' !== f.join('/').substr(-1) && f.push('');
              const w = '' === f[0] || (f[0] && '/' === f[0].charAt(0));
              if (m) {
                i.hostname = i.host = w ? '' : f.length ? f.shift() : '';
                var g =
                  i.host && i.host.indexOf('@') > 0 ? i.host.split('@') : !1;
                g && ((i.auth = g.shift()), (i.host = i.hostname = g.shift()));
              }
              return (
                (d = d || (i.host && f.length)),
                d && !w && f.unshift(''),
                f.length
                  ? (i.pathname = f.join('/'))
                  : ((i.pathname = null), (i.path = null)),
                (c(i.pathname) && c(i.search)) ||
                  (i.path =
                    (i.pathname ? i.pathname : '') +
                    (i.search ? i.search : '')),
                (i.auth = e.auth || i.auth),
                (i.slashes = i.slashes || e.slashes),
                (i.href = i.format()),
                i
              );
            }),
            (n.prototype.parseHost = function () {
              let e = this.host,
                t = f.exec(e);
              t &&
                ((t = t[0]),
                ':' !== t && (this.port = t.substr(1)),
                (e = e.substr(0, e.length - t.length))),
                e && (this.hostname = e);
            });
        },
        { punycode: 4, querystring: 7 },
      ],
      9: [
        function (e, t, i) {
          'use strict';
          function n(e, t, i) {
            i = i || 2;
            let n = t && t.length,
              s = n ? t[0] * i : e.length,
              o = r(e, 0, s, i, !0),
              l = [];
            if (!o) {
              return l;
            }
            let h, c, d, p, f, m, g;
            if ((n && (o = u(e, t, o, i)), e.length > 80 * i)) {
              (h = d = e[0]), (c = p = e[1]);
              for (let y = i; s > y; y += i) {
                (f = e[y]),
                  (m = e[y + 1]),
                  h > f && (h = f),
                  c > m && (c = m),
                  f > d && (d = f),
                  m > p && (p = m);
              }
              g = Math.max(d - h, p - c);
            }
            return a(o, l, i, h, c, g), l;
          }
          function r(e, t, i, n, r) {
            let s,
              a,
              o,
              l = 0;
            for (s = t, a = i - n; i > s; s += n) {
              (l += (e[a] - e[s]) * (e[s + 1] + e[a + 1])), (a = s);
            }
            if (r === l > 0) {
              for (s = t; i > s; s += n) {
                o = P(s, e[s], e[s + 1], o);
              }
            } else {
              for (s = i - n; s >= t; s -= n) {
                o = P(s, e[s], e[s + 1], o);
              }
            }
            return o;
          }
          function s(e, t) {
            if (!e) {
              return e;
            }
            t || (t = e);
            let i,
              n = e;
            do {
              if (
                ((i = !1),
                n.steiner || (!_(n, n.next) && 0 !== w(n.prev, n, n.next)))
              ) {
                n = n.next;
              } else {
                if ((M(n), (n = t = n.prev), n === n.next)) {
                  return null;
                }
                i = !0;
              }
            } while (i || n !== t);
            return t;
          }
          function a(e, t, i, n, r, u, d) {
            if (e) {
              !d && u && m(e, n, r, u);
              for (var p, f, g = e; e.prev !== e.next; ) {
                if (((p = e.prev), (f = e.next), u ? l(e, n, r, u) : o(e))) {
                  t.push(p.i / i),
                    t.push(e.i / i),
                    t.push(f.i / i),
                    M(e),
                    (e = f.next),
                    (g = f.next);
                } else if (((e = f), e === g)) {
                  d
                    ? 1 === d
                      ? ((e = h(e, t, i)), a(e, t, i, n, r, u, 2))
                      : 2 === d && c(e, t, i, n, r, u)
                    : a(s(e), t, i, n, r, u, 1);
                  break;
                }
              }
            }
          }
          function o(e) {
            const t = e.prev,
              i = e,
              n = e.next;
            if (w(t, i, n) >= 0) {
              return !1;
            }
            for (let r = e.next.next; r !== e.prev; ) {
              if (
                b(t.x, t.y, i.x, i.y, n.x, n.y, r.x, r.y) &&
                w(r.prev, r, r.next) >= 0
              ) {
                return !1;
              }
              r = r.next;
            }
            return !0;
          }
          function l(e, t, i, n) {
            const r = e.prev,
              s = e,
              a = e.next;
            if (w(r, s, a) >= 0) {
              return !1;
            }
            for (
              var o =
                  r.x < s.x ? (r.x < a.x ? r.x : a.x) : s.x < a.x ? s.x : a.x,
                l = r.y < s.y ? (r.y < a.y ? r.y : a.y) : s.y < a.y ? s.y : a.y,
                h = r.x > s.x ? (r.x > a.x ? r.x : a.x) : s.x > a.x ? s.x : a.x,
                c = r.y > s.y ? (r.y > a.y ? r.y : a.y) : s.y > a.y ? s.y : a.y,
                u = y(o, l, t, i, n),
                d = y(h, c, t, i, n),
                p = e.nextZ;
              p && p.z <= d;

            ) {
              if (
                p !== e.prev &&
                p !== e.next &&
                b(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
                w(p.prev, p, p.next) >= 0
              ) {
                return !1;
              }
              p = p.nextZ;
            }
            for (p = e.prevZ; p && p.z >= u; ) {
              if (
                p !== e.prev &&
                p !== e.next &&
                b(r.x, r.y, s.x, s.y, a.x, a.y, p.x, p.y) &&
                w(p.prev, p, p.next) >= 0
              ) {
                return !1;
              }
              p = p.prevZ;
            }
            return !0;
          }
          function h(e, t, i) {
            let n = e;
            do {
              const r = n.prev,
                s = n.next.next;
              T(r, n, n.next, s) &&
                C(r, s) &&
                C(s, r) &&
                (t.push(r.i / i),
                t.push(n.i / i),
                t.push(s.i / i),
                M(n),
                M(n.next),
                (n = e = s)),
                (n = n.next);
            } while (n !== e);
            return n;
          }
          function c(e, t, i, n, r, o) {
            let l = e;
            do {
              for (let h = l.next.next; h !== l.prev; ) {
                if (l.i !== h.i && x(l, h)) {
                  let c = A(l, h);
                  return (
                    (l = s(l, l.next)),
                    (c = s(c, c.next)),
                    a(l, t, i, n, r, o),
                    void a(c, t, i, n, r, o)
                  );
                }
                h = h.next;
              }
              l = l.next;
            } while (l !== e);
          }
          function u(e, t, i, n) {
            let a,
              o,
              l,
              h,
              c,
              u = [];
            for (a = 0, o = t.length; o > a; a++) {
              (l = t[a] * n),
                (h = o - 1 > a ? t[a + 1] * n : e.length),
                (c = r(e, l, h, n, !1)),
                c === c.next && (c.steiner = !0),
                u.push(v(c));
            }
            for (u.sort(d), a = 0; a < u.length; a++) {
              p(u[a], i), (i = s(i, i.next));
            }
            return i;
          }
          function d(e, t) {
            return e.x - t.x;
          }
          function p(e, t) {
            if ((t = f(e, t))) {
              const i = A(t, e);
              s(i, i.next);
            }
          }
          function f(e, t) {
            let i,
              n = t,
              r = e.x,
              s = e.y,
              a = -(1 / 0);
            do {
              if (s <= n.y && s >= n.next.y) {
                const o =
                  n.x + ((s - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
                r >= o && o > a && ((a = o), (i = n.x < n.next.x ? n : n.next));
              }
              n = n.next;
            } while (n !== t);
            if (!i) {
              return null;
            }
            let l,
              h = i,
              c = 1 / 0;
            for (n = i.next; n !== h; ) {
              r >= n.x &&
                n.x >= i.x &&
                b(s < i.y ? r : a, s, i.x, i.y, s < i.y ? a : r, s, n.x, n.y) &&
                ((l = Math.abs(s - n.y) / (r - n.x)),
                (c > l || (l === c && n.x > i.x)) &&
                  C(n, e) &&
                  ((i = n), (c = l))),
                (n = n.next);
            }
            return i;
          }
          function m(e, t, i, n) {
            let r = e;
            do {
              null === r.z && (r.z = y(r.x, r.y, t, i, n)),
                (r.prevZ = r.prev),
                (r.nextZ = r.next),
                (r = r.next);
            } while (r !== e);
            (r.prevZ.nextZ = null), (r.prevZ = null), g(r);
          }
          function g(e) {
            let t,
              i,
              n,
              r,
              s,
              a,
              o,
              l,
              h = 1;
            do {
              for (i = e, e = null, s = null, a = 0; i; ) {
                for (
                  a++, n = i, o = 0, t = 0;
                  h > t && (o++, (n = n.nextZ), n);
                  t++
                ) {}
                for (l = h; o > 0 || (l > 0 && n); ) {
                  0 === o
                    ? ((r = n), (n = n.nextZ), l--)
                    : 0 !== l && n
                    ? i.z <= n.z
                      ? ((r = i), (i = i.nextZ), o--)
                      : ((r = n), (n = n.nextZ), l--)
                    : ((r = i), (i = i.nextZ), o--),
                    s ? (s.nextZ = r) : (e = r),
                    (r.prevZ = s),
                    (s = r);
                }
                i = n;
              }
              (s.nextZ = null), (h *= 2);
            } while (a > 1);
            return e;
          }
          function y(e, t, i, n, r) {
            return (
              (e = (32767 * (e - i)) / r),
              (t = (32767 * (t - n)) / r),
              (e = 16711935 & (e | (e << 8))),
              (e = 252645135 & (e | (e << 4))),
              (e = 858993459 & (e | (e << 2))),
              (e = 1431655765 & (e | (e << 1))),
              (t = 16711935 & (t | (t << 8))),
              (t = 252645135 & (t | (t << 4))),
              (t = 858993459 & (t | (t << 2))),
              (t = 1431655765 & (t | (t << 1))),
              e | (t << 1)
            );
          }
          function v(e) {
            let t = e,
              i = e;
            do {
              t.x < i.x && (i = t), (t = t.next);
            } while (t !== e);
            return i;
          }
          function b(e, t, i, n, r, s, a, o) {
            return (
              (r - a) * (t - o) - (e - a) * (s - o) >= 0 &&
              (e - a) * (n - o) - (i - a) * (t - o) >= 0 &&
              (i - a) * (s - o) - (r - a) * (n - o) >= 0
            );
          }
          function x(e, t) {
            return (
              _(e, t) ||
              (e.next.i !== t.i &&
                e.prev.i !== t.i &&
                !S(e, t) &&
                C(e, t) &&
                C(t, e) &&
                E(e, t))
            );
          }
          function w(e, t, i) {
            return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y);
          }
          function _(e, t) {
            return e.x === t.x && e.y === t.y;
          }
          function T(e, t, i, n) {
            return (
              w(e, t, i) > 0 != w(e, t, n) > 0 &&
              w(i, n, e) > 0 != w(i, n, t) > 0
            );
          }
          function S(e, t) {
            let i = e;
            do {
              if (
                i.i !== e.i &&
                i.next.i !== e.i &&
                i.i !== t.i &&
                i.next.i !== t.i &&
                T(i, i.next, e, t)
              ) {
                return !0;
              }
              i = i.next;
            } while (i !== e);
            return !1;
          }
          function C(e, t) {
            return w(e.prev, e, e.next) < 0
              ? w(e, t, e.next) >= 0 && w(e, e.prev, t) >= 0
              : w(e, t, e.prev) < 0 || w(e, e.next, t) < 0;
          }
          function E(e, t) {
            let i = e,
              n = !1,
              r = (e.x + t.x) / 2,
              s = (e.y + t.y) / 2;
            do {
              i.y > s != i.next.y > s &&
                r < ((i.next.x - i.x) * (s - i.y)) / (i.next.y - i.y) + i.x &&
                (n = !n),
                (i = i.next);
            } while (i !== e);
            return n;
          }
          function A(e, t) {
            const i = new k(e.i, e.x, e.y),
              n = new k(t.i, t.x, t.y),
              r = e.next,
              s = t.prev;
            return (
              (e.next = t),
              (t.prev = e),
              (i.next = r),
              (r.prev = i),
              (n.next = i),
              (i.prev = n),
              (s.next = n),
              (n.prev = s),
              n
            );
          }
          function P(e, t, i, n) {
            const r = new k(e, t, i);
            return (
              n
                ? ((r.next = n.next),
                  (r.prev = n),
                  (n.next.prev = r),
                  (n.next = r))
                : ((r.prev = r), (r.next = r)),
              r
            );
          }
          function M(e) {
            (e.next.prev = e.prev),
              (e.prev.next = e.next),
              e.prevZ && (e.prevZ.nextZ = e.nextZ),
              e.nextZ && (e.nextZ.prevZ = e.prevZ);
          }
          function k(e, t, i) {
            (this.i = e),
              (this.x = t),
              (this.y = i),
              (this.prev = null),
              (this.next = null),
              (this.z = null),
              (this.prevZ = null),
              (this.nextZ = null),
              (this.steiner = !1);
          }
          t.exports = n;
        },
        {},
      ],
      10: [
        function (e, t, i) {
          'use strict';
          function n(e, t, i) {
            (this.fn = e), (this.context = t), (this.once = i || !1);
          }
          function r() {}
          const s = 'function' != typeof Object.create ? '~' : !1;
          (r.prototype._events = void 0),
            (r.prototype.listeners = function (e, t) {
              const i = s ? s + e : e,
                n = this._events && this._events[i];
              if (t) {
                return !!n;
              }
              if (!n) {
                return [];
              }
              if (n.fn) {
                return [n.fn];
              }
              for (var r = 0, a = n.length, o = new Array(a); a > r; r++) {
                o[r] = n[r].fn;
              }
              return o;
            }),
            (r.prototype.emit = function (e, t, i, n, r, a) {
              const o = s ? s + e : e;
              if (!this._events || !this._events[o]) {
                return !1;
              }
              let l,
                h,
                c = this._events[o],
                u = arguments.length;
              if ('function' == typeof c.fn) {
                switch (
                  (c.once && this.removeListener(e, c.fn, void 0, !0), u)
                ) {
                  case 1:
                    return c.fn.call(c.context), !0;
                  case 2:
                    return c.fn.call(c.context, t), !0;
                  case 3:
                    return c.fn.call(c.context, t, i), !0;
                  case 4:
                    return c.fn.call(c.context, t, i, n), !0;
                  case 5:
                    return c.fn.call(c.context, t, i, n, r), !0;
                  case 6:
                    return c.fn.call(c.context, t, i, n, r, a), !0;
                }
                for (h = 1, l = new Array(u - 1); u > h; h++) {
                  l[h - 1] = arguments[h];
                }
                c.fn.apply(c.context, l);
              } else {
                let d,
                  p = c.length;
                for (h = 0; p > h; h++) {
                  switch (
                    (c[h].once && this.removeListener(e, c[h].fn, void 0, !0),
                    u)
                  ) {
                    case 1:
                      c[h].fn.call(c[h].context);
                      break;
                    case 2:
                      c[h].fn.call(c[h].context, t);
                      break;
                    case 3:
                      c[h].fn.call(c[h].context, t, i);
                      break;
                    default:
                      if (!l) {
                        for (d = 1, l = new Array(u - 1); u > d; d++) {
                          l[d - 1] = arguments[d];
                        }
                      }
                      c[h].fn.apply(c[h].context, l);
                  }
                }
              }
              return !0;
            }),
            (r.prototype.on = function (e, t, i) {
              const r = new n(t, i || this),
                a = s ? s + e : e;
              return (
                this._events || (this._events = s ? {} : Object.create(null)),
                this._events[a]
                  ? this._events[a].fn
                    ? (this._events[a] = [this._events[a], r])
                    : this._events[a].push(r)
                  : (this._events[a] = r),
                this
              );
            }),
            (r.prototype.once = function (e, t, i) {
              const r = new n(t, i || this, !0),
                a = s ? s + e : e;
              return (
                this._events || (this._events = s ? {} : Object.create(null)),
                this._events[a]
                  ? this._events[a].fn
                    ? (this._events[a] = [this._events[a], r])
                    : this._events[a].push(r)
                  : (this._events[a] = r),
                this
              );
            }),
            (r.prototype.removeListener = function (e, t, i, n) {
              const r = s ? s + e : e;
              if (!this._events || !this._events[r]) {
                return this;
              }
              const a = this._events[r],
                o = [];
              if (t) {
                if (a.fn) {
                  (a.fn !== t || (n && !a.once) || (i && a.context !== i)) &&
                    o.push(a);
                } else {
                  for (let l = 0, h = a.length; h > l; l++) {
                    (a[l].fn !== t ||
                      (n && !a[l].once) ||
                      (i && a[l].context !== i)) &&
                      o.push(a[l]);
                  }
                }
              }
              return (
                o.length
                  ? (this._events[r] = 1 === o.length ? o[0] : o)
                  : delete this._events[r],
                this
              );
            }),
            (r.prototype.removeAllListeners = function (e) {
              return this._events
                ? (e
                    ? delete this._events[s ? s + e : e]
                    : (this._events = s ? {} : Object.create(null)),
                  this)
                : this;
            }),
            (r.prototype.off = r.prototype.removeListener),
            (r.prototype.addListener = r.prototype.on),
            (r.prototype.setMaxListeners = function () {
              return this;
            }),
            (r.prefixed = s),
            'undefined' != typeof t && (t.exports = r);
        },
        {},
      ],
      11: [
        function (e, t, i) {
          'use strict';
          function n(e) {
            if (null === e || void 0 === e) {
              throw new TypeError(
                'Object.assign cannot be called with null or undefined'
              );
            }
            return Object(e);
          }
          const r = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
          t.exports =
            Object.assign ||
            function (e, t) {
              for (var i, a, o = n(e), l = 1; l < arguments.length; l++) {
                i = Object(arguments[l]);
                for (const h in i) {
                  r.call(i, h) && (o[h] = i[h]);
                }
                if (Object.getOwnPropertySymbols) {
                  a = Object.getOwnPropertySymbols(i);
                  for (let c = 0; c < a.length; c++) {
                    s.call(i, a[c]) && (o[a[c]] = i[a[c]]);
                  }
                }
              }
              return o;
            };
        },
        {},
      ],
      12: [
        function (e, t, i) {
          t.exports = {
            name: 'pixi.js',
            version: '3.0.9',
            description:
              'Pixi.js is a fast lightweight 2D library that works across all devices.',
            author: 'Mat Groves',
            contributors: [
              'Chad Engler <chad@pantherdev.com>',
              'Richard Davey <rdavey@gmail.com>',
            ],
            main: './src/index.js',
            homepage: 'http://goodboydigital.com/',
            bugs: 'https://github.com/pixijs/pixi.js/issues',
            license: 'MIT',
            repository: {
              type: 'git',
              url: 'https://github.com/pixijs/pixi.js.git',
            },
            scripts: {
              start: 'gulp && gulp watch',
              test: 'gulp && testem ci',
              build: 'gulp',
              docs: 'jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md',
            },
            files: [
              'bin/',
              'src/',
              'CONTRIBUTING.md',
              'LICENSE',
              'package.json',
              'README.md',
            ],
            dependencies: {
              async: '^1.5.0',
              brfs: '^1.4.1',
              earcut: '^2.0.7',
              eventemitter3: '^1.1.1',
              'object-assign': '^4.0.1',
              'resource-loader': '^1.6.4',
            },
            devDependencies: {
              browserify: '^11.1.0',
              chai: '^3.2.0',
              del: '^2.0.2',
              gulp: '^3.9.0',
              'gulp-cached': '^1.1.0',
              'gulp-concat': '^2.6.0',
              'gulp-debug': '^2.1.0',
              'gulp-header': '^1.7.1',
              'gulp-jshint': '^1.11.2',
              'gulp-mirror': '^0.4.0',
              'gulp-plumber': '^1.0.1',
              'gulp-rename': '^1.2.2',
              'gulp-sourcemaps': '^1.5.2',
              'gulp-uglify': '^1.4.1',
              'gulp-util': '^3.0.6',
              'jaguarjs-jsdoc':
                'git+https://github.com/davidshimjs/jaguarjs-jsdoc.git',
              jsdoc: '^3.3.2',
              'jshint-summary': '^0.4.0',
              minimist: '^1.2.0',
              mocha: '^2.3.2',
              'require-dir': '^0.3.0',
              'run-sequence': '^1.1.2',
              testem: '^0.9.4',
              'vinyl-buffer': '^1.0.0',
              'vinyl-source-stream': '^1.1.0',
              watchify: '^3.4.0',
            },
            browserify: { transform: ['brfs'] },
          };
        },
        {},
      ],
      13: [
        function (e, t, i) {
          function n(e) {
            const t = document.createElement('div');
            (t.style.width = '100px'),
              (t.style.height = '100px'),
              (t.style.position = 'absolute'),
              (t.style.top = 0),
              (t.style.left = 0),
              (t.style.zIndex = 2),
              (this.div = t),
              (this.pool = []),
              (this.renderId = 0),
              (this.debug = !1),
              (this.renderer = e),
              (this.children = []),
              (this._onKeyDown = this._onKeyDown.bind(this)),
              (this._onMouseMove = this._onMouseMove.bind(this)),
              (this.isActive = !1),
              window.addEventListener('keydown', this._onKeyDown, !1);
          }
          const r = e('../core');
          Object.assign(r.DisplayObject.prototype, e('./accessibleTarget')),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.activate = function () {
              this.isActive ||
                ((this.isActive = !0),
                window.document.addEventListener(
                  'mousemove',
                  this._onMouseMove,
                  !0
                ),
                window.removeEventListener('keydown', this._onKeyDown, !1),
                this.renderer.on('postrender', this.update, this),
                this.renderer.view.parentNode.appendChild(this.div));
            }),
            (n.prototype.deactivate = function () {
              this.isActive &&
                ((this.isActive = !1),
                window.document.removeEventListener(
                  'mousemove',
                  this._onMouseMove
                ),
                window.addEventListener('keydown', this._onKeyDown, !1),
                this.renderer.off('postrender', this.update),
                this.div.parentNode.removeChild(this.div));
            }),
            (n.prototype.updateAccessibleObjects = function (e) {
              if (e.visible) {
                e.accessible &&
                  e.interactive &&
                  (e._accessibleActive || this.addChild(e),
                  (e.renderId = this.renderId));
                for (let t = e.children, i = t.length - 1; i >= 0; i--) {
                  this.updateAccessibleObjects(t[i]);
                }
              }
            }),
            (n.prototype.update = function () {
              this.updateAccessibleObjects(this.renderer._lastObjectRendered);
              let e = this.renderer.view.getBoundingClientRect(),
                t = e.width / this.renderer.width,
                i = e.height / this.renderer.height,
                n = this.div;
              (n.style.left = e.left + 'px'),
                (n.style.top = e.top + 'px'),
                (n.style.width = this.renderer.width + 'px'),
                (n.style.height = this.renderer.height + 'px');
              for (let s = 0; s < this.children.length; s++) {
                const a = this.children[s];
                if (a.renderId !== this.renderId) {
                  (a._accessibleActive = !1),
                    r.utils.removeItems(this.children, s, 1),
                    this.div.removeChild(a._accessibleDiv),
                    this.pool.push(a._accessibleDiv),
                    (a._accessibleDiv = null),
                    s--,
                    0 === this.children.length && this.deactivate();
                } else {
                  n = a._accessibleDiv;
                  let o = a.hitArea,
                    l = a.worldTransform;
                  a.hitArea
                    ? ((n.style.left = (l.tx + o.x * l.a) * t + 'px'),
                      (n.style.top = (l.ty + o.y * l.d) * i + 'px'),
                      (n.style.width = o.width * l.a * t + 'px'),
                      (n.style.height = o.height * l.d * i + 'px'))
                    : ((o = a.getBounds()),
                      this.capHitArea(o),
                      (n.style.left = o.x * t + 'px'),
                      (n.style.top = o.y * i + 'px'),
                      (n.style.width = o.width * t + 'px'),
                      (n.style.height = o.height * i + 'px'));
                }
              }
              this.renderId++;
            }),
            (n.prototype.capHitArea = function (e) {
              e.x < 0 && ((e.width += e.x), (e.x = 0)),
                e.y < 0 && ((e.height += e.y), (e.y = 0)),
                e.x + e.width > this.renderer.width &&
                  (e.width = this.renderer.width - e.x),
                e.y + e.height > this.renderer.height &&
                  (e.height = this.renderer.height - e.y);
            }),
            (n.prototype.addChild = function (e) {
              let t = this.pool.pop();
              t ||
                ((t = document.createElement('button')),
                (t.style.width = '100px'),
                (t.style.height = '100px'),
                (t.style.backgroundColor = this.debug
                  ? 'rgba(255,0,0,0.5)'
                  : 'transparent'),
                (t.style.position = 'absolute'),
                (t.style.zIndex = 2),
                (t.style.borderStyle = 'none'),
                t.addEventListener('click', this._onClick.bind(this)),
                t.addEventListener('focus', this._onFocus.bind(this)),
                t.addEventListener('focusout', this._onFocusOut.bind(this))),
                (t.title =
                  e.accessibleTitle || 'displayObject ' + this.tabIndex),
                (e._accessibleActive = !0),
                (e._accessibleDiv = t),
                (t.displayObject = e),
                this.children.push(e),
                this.div.appendChild(e._accessibleDiv),
                (e._accessibleDiv.tabIndex = e.tabIndex);
            }),
            (n.prototype._onClick = function (e) {
              const t = this.renderer.plugins.interaction;
              t.dispatchEvent(e.target.displayObject, 'click', t.eventData);
            }),
            (n.prototype._onFocus = function (e) {
              const t = this.renderer.plugins.interaction;
              t.dispatchEvent(e.target.displayObject, 'mouseover', t.eventData);
            }),
            (n.prototype._onFocusOut = function (e) {
              const t = this.renderer.plugins.interaction;
              t.dispatchEvent(e.target.displayObject, 'mouseout', t.eventData);
            }),
            (n.prototype._onKeyDown = function (e) {
              9 === e.keyCode && this.activate();
            }),
            (n.prototype._onMouseMove = function () {
              this.deactivate();
            }),
            (n.prototype.destroy = function () {
              this.div = null;
              for (let e = 0; e < this.children.length; e++) {
                this.children[e].div = null;
              }
              window.document.removeEventListener(
                'mousemove',
                this._onMouseMove
              ),
                window.removeEventListener('keydown', this._onKeyDown),
                (this.pool = null),
                (this.children = null),
                (this.renderer = null);
            }),
            r.WebGLRenderer.registerPlugin('accessibility', n),
            r.CanvasRenderer.registerPlugin('accessibility', n);
        },
        { '../core': 23, './accessibleTarget': 14 },
      ],
      14: [
        function (e, t, i) {
          const n = {
            accessible: !1,
            accessibleTitle: null,
            tabIndex: 0,
            _accessibleActive: !1,
            _accessibleDiv: !1,
          };
          t.exports = n;
        },
        {},
      ],
      15: [
        function (e, t, i) {
          t.exports = {
            accessibleTarget: e('./accessibleTarget'),
            AccessibilityManager: e('./AccessibilityManager'),
          };
        },
        { './AccessibilityManager': 13, './accessibleTarget': 14 },
      ],
      16: [
        function (e, t, i) {
          const n = {
            VERSION: e('../../package.json').version,
            PI_2: 2 * Math.PI,
            RAD_TO_DEG: 180 / Math.PI,
            DEG_TO_RAD: Math.PI / 180,
            TARGET_FPMS: 0.06,
            RENDERER_TYPE: { UNKNOWN: 0, WEBGL: 1, CANVAS: 2 },
            BLEND_MODES: {
              NORMAL: 0,
              ADD: 1,
              MULTIPLY: 2,
              SCREEN: 3,
              OVERLAY: 4,
              DARKEN: 5,
              LIGHTEN: 6,
              COLOR_DODGE: 7,
              COLOR_BURN: 8,
              HARD_LIGHT: 9,
              SOFT_LIGHT: 10,
              DIFFERENCE: 11,
              EXCLUSION: 12,
              HUE: 13,
              SATURATION: 14,
              COLOR: 15,
              LUMINOSITY: 16,
            },
            DRAW_MODES: {
              POINTS: 0,
              LINES: 1,
              LINE_LOOP: 2,
              LINE_STRIP: 3,
              TRIANGLES: 4,
              TRIANGLE_STRIP: 5,
              TRIANGLE_FAN: 6,
            },
            SCALE_MODES: { DEFAULT: 0, LINEAR: 0, NEAREST: 1 },
            RETINA_PREFIX: /@(.+)x/,
            RESOLUTION: 1,
            FILTER_RESOLUTION: 1,
            DEFAULT_RENDER_OPTIONS: {
              view: null,
              resolution: 1,
              antialias: !1,
              forceFXAA: !1,
              autoResize: !1,
              transparent: !1,
              backgroundColor: 0,
              clearBeforeRender: !0,
              preserveDrawingBuffer: !1,
              roundPixels: !1,
            },
            SHAPES: { POLY: 0, RECT: 1, CIRC: 2, ELIP: 3, RREC: 4 },
            SPRITE_BATCH_SIZE: 2e3,
          };
          t.exports = n;
        },
        { '../../package.json': 12 },
      ],
      17: [
        function (e, t, i) {
          function n() {
            a.call(this), (this.children = []);
          }
          var r = e('../math'),
            s = e('../utils'),
            a = e('./DisplayObject'),
            o = e('../textures/RenderTexture'),
            l = new r.Matrix();
          (n.prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              width: {
                get: function () {
                  return this.scale.x * this.getLocalBounds().width;
                },
                set: function (e) {
                  const t = this.getLocalBounds().width;
                  0 !== t ? (this.scale.x = e / t) : (this.scale.x = 1),
                    (this._width = e);
                },
              },
              height: {
                get: function () {
                  return this.scale.y * this.getLocalBounds().height;
                },
                set: function (e) {
                  const t = this.getLocalBounds().height;
                  0 !== t ? (this.scale.y = e / t) : (this.scale.y = 1),
                    (this._height = e);
                },
              },
            }),
            (n.prototype.onChildrenChange = function () {}),
            (n.prototype.addChild = function (e) {
              const t = arguments.length;
              if (t > 1) {
                for (let i = 0; t > i; i++) {
                  this.addChild(arguments[i]);
                }
              } else {
                e.parent && e.parent.removeChild(e),
                  (e.parent = this),
                  this.children.push(e),
                  this.onChildrenChange(this.children.length - 1),
                  e.emit('added', this);
              }
              return e;
            }),
            (n.prototype.addChildAt = function (e, t) {
              if (t >= 0 && t <= this.children.length) {
                return (
                  e.parent && e.parent.removeChild(e),
                  (e.parent = this),
                  this.children.splice(t, 0, e),
                  this.onChildrenChange(t),
                  e.emit('added', this),
                  e
                );
              }
              throw new Error(
                e +
                  'addChildAt: The index ' +
                  t +
                  ' supplied is out of bounds ' +
                  this.children.length
              );
            }),
            (n.prototype.swapChildren = function (e, t) {
              if (e !== t) {
                const i = this.getChildIndex(e),
                  n = this.getChildIndex(t);
                if (0 > i || 0 > n) {
                  throw new Error(
                    'swapChildren: Both the supplied DisplayObjects must be children of the caller.'
                  );
                }
                (this.children[i] = t),
                  (this.children[n] = e),
                  this.onChildrenChange(n > i ? i : n);
              }
            }),
            (n.prototype.getChildIndex = function (e) {
              const t = this.children.indexOf(e);
              if (-1 === t) {
                throw new Error(
                  'The supplied DisplayObject must be a child of the caller'
                );
              }
              return t;
            }),
            (n.prototype.setChildIndex = function (e, t) {
              if (0 > t || t >= this.children.length) {
                throw new Error('The supplied index is out of bounds');
              }
              const i = this.getChildIndex(e);
              s.removeItems(this.children, i, 1),
                this.children.splice(t, 0, e),
                this.onChildrenChange(t);
            }),
            (n.prototype.getChildAt = function (e) {
              if (0 > e || e >= this.children.length) {
                throw new Error(
                  'getChildAt: Supplied index ' +
                    e +
                    ' does not exist in the child list, or the supplied DisplayObject is not a child of the caller'
                );
              }
              return this.children[e];
            }),
            (n.prototype.removeChild = function (e) {
              const t = arguments.length;
              if (t > 1) {
                for (let i = 0; t > i; i++) {
                  this.removeChild(arguments[i]);
                }
              } else {
                const n = this.children.indexOf(e);
                if (-1 === n) {
                  return;
                }
                (e.parent = null),
                  s.removeItems(this.children, n, 1),
                  this.onChildrenChange(n),
                  e.emit('removed', this);
              }
              return e;
            }),
            (n.prototype.removeChildAt = function (e) {
              const t = this.getChildAt(e);
              return (
                (t.parent = null),
                s.removeItems(this.children, e, 1),
                this.onChildrenChange(e),
                t.emit('removed', this),
                t
              );
            }),
            (n.prototype.removeChildren = function (e, t) {
              let i,
                n,
                r = e || 0,
                s = 'number' == typeof t ? t : this.children.length,
                a = s - r;
              if (a > 0 && s >= a) {
                for (i = this.children.splice(r, a), n = 0; n < i.length; ++n) {
                  i[n].parent = null;
                }
                for (this.onChildrenChange(e), n = 0; n < i.length; ++n) {
                  i[n].emit('removed', this);
                }
                return i;
              }
              if (0 === a && 0 === this.children.length) {
                return [];
              }
              throw new RangeError(
                'removeChildren: numeric values are outside the acceptable range.'
              );
            }),
            (n.prototype.generateTexture = function (e, t, i) {
              const n = this.getLocalBounds(),
                r = new o(e, 0 | n.width, 0 | n.height, i, t);
              return (l.tx = -n.x), (l.ty = -n.y), r.render(this, l), r;
            }),
            (n.prototype.updateTransform = function () {
              if (this.visible) {
                this.displayObjectUpdateTransform();
                for (let e = 0, t = this.children.length; t > e; ++e) {
                  this.children[e].updateTransform();
                }
              }
            }),
            (n.prototype.containerUpdateTransform =
              n.prototype.updateTransform),
            (n.prototype.getBounds = function () {
              if (!this._currentBounds) {
                if (0 === this.children.length) {
                  return r.Rectangle.EMPTY;
                }
                for (
                  var e,
                    t,
                    i,
                    n = 1 / 0,
                    s = 1 / 0,
                    a = -(1 / 0),
                    o = -(1 / 0),
                    l = !1,
                    h = 0,
                    c = this.children.length;
                  c > h;
                  ++h
                ) {
                  const u = this.children[h];
                  u.visible &&
                    ((l = !0),
                    (e = this.children[h].getBounds()),
                    (n = n < e.x ? n : e.x),
                    (s = s < e.y ? s : e.y),
                    (t = e.width + e.x),
                    (i = e.height + e.y),
                    (a = a > t ? a : t),
                    (o = o > i ? o : i));
                }
                if (!l) {
                  return r.Rectangle.EMPTY;
                }
                const d = this._bounds;
                (d.x = n),
                  (d.y = s),
                  (d.width = a - n),
                  (d.height = o - s),
                  (this._currentBounds = d);
              }
              return this._currentBounds;
            }),
            (n.prototype.containerGetBounds = n.prototype.getBounds),
            (n.prototype.getLocalBounds = function () {
              const e = this.worldTransform;
              this.worldTransform = r.Matrix.IDENTITY;
              for (let t = 0, i = this.children.length; i > t; ++t) {
                this.children[t].updateTransform();
              }
              return (
                (this.worldTransform = e),
                (this._currentBounds = null),
                this.getBounds(r.Matrix.IDENTITY)
              );
            }),
            (n.prototype.renderWebGL = function (e) {
              if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                let t, i;
                if (this._mask || this._filters) {
                  for (
                    e.currentRenderer.flush(),
                      this._filters &&
                        this._filters.length &&
                        e.filterManager.pushFilter(this, this._filters),
                      this._mask && e.maskManager.pushMask(this, this._mask),
                      e.currentRenderer.start(),
                      this._renderWebGL(e),
                      t = 0,
                      i = this.children.length;
                    i > t;
                    t++
                  ) {
                    this.children[t].renderWebGL(e);
                  }
                  e.currentRenderer.flush(),
                    this._mask && e.maskManager.popMask(this, this._mask),
                    this._filters && e.filterManager.popFilter(),
                    e.currentRenderer.start();
                } else {
                  for (
                    this._renderWebGL(e), t = 0, i = this.children.length;
                    i > t;
                    ++t
                  ) {
                    this.children[t].renderWebGL(e);
                  }
                }
              }
            }),
            (n.prototype._renderWebGL = function (e) {}),
            (n.prototype._renderCanvas = function (e) {}),
            (n.prototype.renderCanvas = function (e) {
              if (this.visible && !(this.alpha <= 0) && this.renderable) {
                this._mask && e.maskManager.pushMask(this._mask, e),
                  this._renderCanvas(e);
                for (let t = 0, i = this.children.length; i > t; ++t) {
                  this.children[t].renderCanvas(e);
                }
                this._mask && e.maskManager.popMask(e);
              }
            }),
            (n.prototype.destroy = function (e) {
              if ((a.prototype.destroy.call(this), e)) {
                for (let t = 0, i = this.children.length; i > t; ++t) {
                  this.children[t].destroy(e);
                }
              }
              this.removeChildren(), (this.children = null);
            });
        },
        {
          '../math': 26,
          '../textures/RenderTexture': 64,
          '../utils': 70,
          './DisplayObject': 18,
        },
      ],
      18: [
        function (e, t, i) {
          function n() {
            a.call(this),
              (this.position = new r.Point()),
              (this.scale = new r.Point(1, 1)),
              (this.pivot = new r.Point(0, 0)),
              (this.skew = new r.Point(0, 0)),
              (this.rotation = 0),
              (this.alpha = 1),
              (this.visible = !0),
              (this.renderable = !0),
              (this.parent = null),
              (this.worldAlpha = 1),
              (this.worldTransform = new r.Matrix()),
              (this.filterArea = null),
              (this._sr = 0),
              (this._cr = 1),
              (this._bounds = new r.Rectangle(0, 0, 1, 1)),
              (this._currentBounds = null),
              (this._mask = null);
          }
          var r = e('../math'),
            s = e('../textures/RenderTexture'),
            a = e('eventemitter3'),
            o = e('../const'),
            l = new r.Matrix(),
            h = {
              worldTransform: new r.Matrix(),
              worldAlpha: 1,
              children: [],
            };
          (n.prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              x: {
                get: function () {
                  return this.position.x;
                },
                set: function (e) {
                  this.position.x = e;
                },
              },
              y: {
                get: function () {
                  return this.position.y;
                },
                set: function (e) {
                  this.position.y = e;
                },
              },
              worldVisible: {
                get: function () {
                  let e = this;
                  do {
                    if (!e.visible) {
                      return !1;
                    }
                    e = e.parent;
                  } while (e);
                  return !0;
                },
              },
              mask: {
                get: function () {
                  return this._mask;
                },
                set: function (e) {
                  this._mask && (this._mask.renderable = !0),
                    (this._mask = e),
                    this._mask && (this._mask.renderable = !1);
                },
              },
              filters: {
                get: function () {
                  return this._filters && this._filters.slice();
                },
                set: function (e) {
                  this._filters = e && e.slice();
                },
              },
            }),
            (n.prototype.updateTransform = function () {
              let e,
                t,
                i,
                n,
                r,
                s,
                a = this.parent.worldTransform,
                h = this.worldTransform;
              this.skew.x || this.skew.y
                ? (l.setTransform(
                    this.position.x,
                    this.position.y,
                    this.pivot.x,
                    this.pivot.y,
                    this.scale.x,
                    this.scale.y,
                    this.rotation,
                    this.skew.x,
                    this.skew.y
                  ),
                  (h.a = l.a * a.a + l.b * a.c),
                  (h.b = l.a * a.b + l.b * a.d),
                  (h.c = l.c * a.a + l.d * a.c),
                  (h.d = l.c * a.b + l.d * a.d),
                  (h.tx = l.tx * a.a + l.ty * a.c + a.tx),
                  (h.ty = l.tx * a.b + l.ty * a.d + a.ty))
                : this.rotation % o.PI_2
                ? (this.rotation !== this.rotationCache &&
                    ((this.rotationCache = this.rotation),
                    (this._sr = Math.sin(this.rotation)),
                    (this._cr = Math.cos(this.rotation))),
                  (e = this._cr * this.scale.x),
                  (t = this._sr * this.scale.x),
                  (i = -this._sr * this.scale.y),
                  (n = this._cr * this.scale.y),
                  (r = this.position.x),
                  (s = this.position.y),
                  (this.pivot.x || this.pivot.y) &&
                    ((r -= this.pivot.x * e + this.pivot.y * i),
                    (s -= this.pivot.x * t + this.pivot.y * n)),
                  (h.a = e * a.a + t * a.c),
                  (h.b = e * a.b + t * a.d),
                  (h.c = i * a.a + n * a.c),
                  (h.d = i * a.b + n * a.d),
                  (h.tx = r * a.a + s * a.c + a.tx),
                  (h.ty = r * a.b + s * a.d + a.ty))
                : ((e = this.scale.x),
                  (n = this.scale.y),
                  (r = this.position.x - this.pivot.x * e),
                  (s = this.position.y - this.pivot.y * n),
                  (h.a = e * a.a),
                  (h.b = e * a.b),
                  (h.c = n * a.c),
                  (h.d = n * a.d),
                  (h.tx = r * a.a + s * a.c + a.tx),
                  (h.ty = r * a.b + s * a.d + a.ty)),
                (this.worldAlpha = this.alpha * this.parent.worldAlpha),
                (this._currentBounds = null);
            }),
            (n.prototype.displayObjectUpdateTransform =
              n.prototype.updateTransform),
            (n.prototype.getBounds = function (e) {
              return r.Rectangle.EMPTY;
            }),
            (n.prototype.getLocalBounds = function () {
              return this.getBounds(r.Matrix.IDENTITY);
            }),
            (n.prototype.toGlobal = function (e) {
              return (
                this.parent
                  ? this.displayObjectUpdateTransform()
                  : ((this.parent = h),
                    this.displayObjectUpdateTransform(),
                    (this.parent = null)),
                this.worldTransform.apply(e)
              );
            }),
            (n.prototype.toLocal = function (e, t, i) {
              return (
                t && (e = t.toGlobal(e)),
                this.parent
                  ? this.displayObjectUpdateTransform()
                  : ((this.parent = h),
                    this.displayObjectUpdateTransform(),
                    (this.parent = null)),
                this.worldTransform.applyInverse(e, i)
              );
            }),
            (n.prototype.renderWebGL = function (e) {}),
            (n.prototype.renderCanvas = function (e) {}),
            (n.prototype.generateTexture = function (e, t, i) {
              const n = this.getLocalBounds(),
                r = new s(e, 0 | n.width, 0 | n.height, t, i);
              return (l.tx = -n.x), (l.ty = -n.y), r.render(this, l), r;
            }),
            (n.prototype.setParent = function (e) {
              if (!e || !e.addChild) {
                throw new Error('setParent: Argument must be a Container');
              }
              return e.addChild(this), e;
            }),
            (n.prototype.setTransform = function (e, t, i, n, r, s, a, o, l) {
              return (
                (this.position.x = e || 0),
                (this.position.y = t || 0),
                (this.scale.x = i ? i : 1),
                (this.scale.y = n ? n : 1),
                (this.rotation = r || 0),
                (this.skew.x = s || 0),
                (this.skew.y = a || 0),
                (this.pivot.x = o || 0),
                (this.pivot.y = l || 0),
                this
              );
            }),
            (n.prototype.destroy = function () {
              (this.position = null),
                (this.scale = null),
                (this.pivot = null),
                (this.skew = null),
                (this.parent = null),
                (this._bounds = null),
                (this._currentBounds = null),
                (this._mask = null),
                (this.worldTransform = null),
                (this.filterArea = null);
            });
        },
        {
          '../const': 16,
          '../math': 26,
          '../textures/RenderTexture': 64,
          eventemitter3: 10,
        },
      ],
      19: [
        function (e, t, i) {
          function n() {
            r.call(this),
              (this.fillAlpha = 1),
              (this.lineWidth = 0),
              (this.lineColor = 0),
              (this.graphicsData = []),
              (this.tint = 16777215),
              (this._prevTint = 16777215),
              (this.blendMode = c.BLEND_MODES.NORMAL),
              (this.currentPath = null),
              (this._webGL = {}),
              (this.isMask = !1),
              (this.boundsPadding = 0),
              (this._localBounds = new h.Rectangle(0, 0, 1, 1)),
              (this.dirty = !0),
              (this.glDirty = !1),
              (this.boundsDirty = !0),
              (this.cachedSpriteDirty = !1);
          }
          var r = e('../display/Container'),
            s = e('../textures/Texture'),
            a = e('../renderers/canvas/utils/CanvasBuffer'),
            o = e('../renderers/canvas/utils/CanvasGraphics'),
            l = e('./GraphicsData'),
            h = e('../math'),
            c = e('../const'),
            u = new h.Point();
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              const e = new n();
              (e.renderable = this.renderable),
                (e.fillAlpha = this.fillAlpha),
                (e.lineWidth = this.lineWidth),
                (e.lineColor = this.lineColor),
                (e.tint = this.tint),
                (e.blendMode = this.blendMode),
                (e.isMask = this.isMask),
                (e.boundsPadding = this.boundsPadding),
                (e.dirty = !0),
                (e.glDirty = !0),
                (e.cachedSpriteDirty = this.cachedSpriteDirty);
              for (let t = 0; t < this.graphicsData.length; ++t) {
                e.graphicsData.push(this.graphicsData[t].clone());
              }
              return (
                (e.currentPath = e.graphicsData[e.graphicsData.length - 1]),
                e.updateLocalBounds(),
                e
              );
            }),
            (n.prototype.lineStyle = function (e, t, i) {
              if (
                ((this.lineWidth = e || 0),
                (this.lineColor = t || 0),
                (this.lineAlpha = void 0 === i ? 1 : i),
                this.currentPath)
              ) {
                if (this.currentPath.shape.points.length) {
                  const n = new h.Polygon(
                    this.currentPath.shape.points.slice(-2)
                  );
                  (n.closed = !1), this.drawShape(n);
                } else {
                  (this.currentPath.lineWidth = this.lineWidth),
                    (this.currentPath.lineColor = this.lineColor),
                    (this.currentPath.lineAlpha = this.lineAlpha);
                }
              }
              return this;
            }),
            (n.prototype.moveTo = function (e, t) {
              const i = new h.Polygon([e, t]);
              return (i.closed = !1), this.drawShape(i), this;
            }),
            (n.prototype.lineTo = function (e, t) {
              return (
                this.currentPath.shape.points.push(e, t),
                (this.dirty = !0),
                this
              );
            }),
            (n.prototype.quadraticCurveTo = function (e, t, i, n) {
              this.currentPath
                ? 0 === this.currentPath.shape.points.length &&
                  (this.currentPath.shape.points = [0, 0])
                : this.moveTo(0, 0);
              let r,
                s,
                a = 20,
                o = this.currentPath.shape.points;
              0 === o.length && this.moveTo(0, 0);
              for (
                let l = o[o.length - 2], h = o[o.length - 1], c = 0, u = 1;
                a >= u;
                ++u
              ) {
                (c = u / a),
                  (r = l + (e - l) * c),
                  (s = h + (t - h) * c),
                  o.push(
                    r + (e + (i - e) * c - r) * c,
                    s + (t + (n - t) * c - s) * c
                  );
              }
              return (this.dirty = this.boundsDirty = !0), this;
            }),
            (n.prototype.bezierCurveTo = function (e, t, i, n, r, s) {
              this.currentPath
                ? 0 === this.currentPath.shape.points.length &&
                  (this.currentPath.shape.points = [0, 0])
                : this.moveTo(0, 0);
              for (
                var a,
                  o,
                  l,
                  h,
                  c,
                  u = 20,
                  d = this.currentPath.shape.points,
                  p = d[d.length - 2],
                  f = d[d.length - 1],
                  m = 0,
                  g = 1;
                u >= g;
                ++g
              ) {
                (m = g / u),
                  (a = 1 - m),
                  (o = a * a),
                  (l = o * a),
                  (h = m * m),
                  (c = h * m),
                  d.push(
                    l * p + 3 * o * m * e + 3 * a * h * i + c * r,
                    l * f + 3 * o * m * t + 3 * a * h * n + c * s
                  );
              }
              return (this.dirty = this.boundsDirty = !0), this;
            }),
            (n.prototype.arcTo = function (e, t, i, n, r) {
              this.currentPath
                ? 0 === this.currentPath.shape.points.length &&
                  this.currentPath.shape.points.push(e, t)
                : this.moveTo(e, t);
              const s = this.currentPath.shape.points,
                a = s[s.length - 2],
                o = s[s.length - 1],
                l = o - t,
                h = a - e,
                c = n - t,
                u = i - e,
                d = Math.abs(l * u - h * c);
              if (1e-8 > d || 0 === r) {
                (s[s.length - 2] === e && s[s.length - 1] === t) ||
                  s.push(e, t);
              } else {
                const p = l * l + h * h,
                  f = c * c + u * u,
                  m = l * c + h * u,
                  g = (r * Math.sqrt(p)) / d,
                  y = (r * Math.sqrt(f)) / d,
                  v = (g * m) / p,
                  b = (y * m) / f,
                  x = g * u + y * h,
                  w = g * c + y * l,
                  _ = h * (y + v),
                  T = l * (y + v),
                  S = u * (g + b),
                  C = c * (g + b),
                  E = Math.atan2(T - w, _ - x),
                  A = Math.atan2(C - w, S - x);
                this.arc(x + e, w + t, r, E, A, h * c > u * l);
              }
              return (this.dirty = this.boundsDirty = !0), this;
            }),
            (n.prototype.arc = function (e, t, i, n, r, s) {
              if (((s = s || !1), n === r)) {
                return this;
              }
              !s && n >= r
                ? (r += 2 * Math.PI)
                : s && r >= n && (n += 2 * Math.PI);
              const a = s ? -1 * (n - r) : r - n,
                o = 40 * Math.ceil(Math.abs(a) / (2 * Math.PI));
              if (0 === a) {
                return this;
              }
              const l = e + Math.cos(n) * i,
                h = t + Math.sin(n) * i;
              this.currentPath
                ? this.currentPath.shape.points.push(l, h)
                : this.moveTo(l, h);
              for (
                let c = this.currentPath.shape.points,
                  u = a / (2 * o),
                  d = 2 * u,
                  p = Math.cos(u),
                  f = Math.sin(u),
                  m = o - 1,
                  g = (m % 1) / m,
                  y = 0;
                m >= y;
                y++
              ) {
                const v = y + g * y,
                  b = u + n + d * v,
                  x = Math.cos(b),
                  w = -Math.sin(b);
                c.push((p * x + f * w) * i + e, (p * -w + f * x) * i + t);
              }
              return (this.dirty = this.boundsDirty = !0), this;
            }),
            (n.prototype.beginFill = function (e, t) {
              return (
                (this.filling = !0),
                (this.fillColor = e || 0),
                (this.fillAlpha = void 0 === t ? 1 : t),
                this.currentPath &&
                  this.currentPath.shape.points.length <= 2 &&
                  ((this.currentPath.fill = this.filling),
                  (this.currentPath.fillColor = this.fillColor),
                  (this.currentPath.fillAlpha = this.fillAlpha)),
                this
              );
            }),
            (n.prototype.endFill = function () {
              return (
                (this.filling = !1),
                (this.fillColor = null),
                (this.fillAlpha = 1),
                this
              );
            }),
            (n.prototype.drawRect = function (e, t, i, n) {
              return this.drawShape(new h.Rectangle(e, t, i, n)), this;
            }),
            (n.prototype.drawRoundedRect = function (e, t, i, n, r) {
              return (
                this.drawShape(new h.RoundedRectangle(e, t, i, n, r)), this
              );
            }),
            (n.prototype.drawCircle = function (e, t, i) {
              return this.drawShape(new h.Circle(e, t, i)), this;
            }),
            (n.prototype.drawEllipse = function (e, t, i, n) {
              return this.drawShape(new h.Ellipse(e, t, i, n)), this;
            }),
            (n.prototype.drawPolygon = function (e) {
              let t = e,
                i = !0;
              if (
                (t instanceof h.Polygon && ((i = t.closed), (t = t.points)),
                !Array.isArray(t))
              ) {
                t = new Array(arguments.length);
                for (let n = 0; n < t.length; ++n) {
                  t[n] = arguments[n];
                }
              }
              const r = new h.Polygon(t);
              return (r.closed = i), this.drawShape(r), this;
            }),
            (n.prototype.clear = function () {
              return (
                (this.lineWidth = 0),
                (this.filling = !1),
                (this.dirty = !0),
                (this.clearDirty = !0),
                (this.graphicsData = []),
                this
              );
            }),
            (n.prototype.generateTexture = function (e, t, i) {
              t = t || 1;
              const n = this.getLocalBounds(),
                r = new a(n.width * t, n.height * t),
                l = s.fromCanvas(r.canvas, i);
              return (
                (l.baseTexture.resolution = t),
                r.context.scale(t, t),
                r.context.translate(-n.x, -n.y),
                o.renderGraphics(this, r.context),
                l
              );
            }),
            (n.prototype._renderWebGL = function (e) {
              this.glDirty && ((this.dirty = !0), (this.glDirty = !1)),
                e.setObjectRenderer(e.plugins.graphics),
                e.plugins.graphics.render(this);
            }),
            (n.prototype._renderCanvas = function (e) {
              if (this.isMask !== !0) {
                this._prevTint !== this.tint && (this.dirty = !0);
                const t = e.context,
                  i = this.worldTransform,
                  n = e.blendModes[this.blendMode];
                n !== t.globalCompositeOperation &&
                  (t.globalCompositeOperation = n);
                const r = e.resolution;
                t.setTransform(
                  i.a * r,
                  i.b * r,
                  i.c * r,
                  i.d * r,
                  i.tx * r,
                  i.ty * r
                ),
                  o.renderGraphics(this, t);
              }
            }),
            (n.prototype.getBounds = function (e) {
              if (!this._currentBounds) {
                if (!this.renderable) {
                  return h.Rectangle.EMPTY;
                }
                this.boundsDirty &&
                  (this.updateLocalBounds(),
                  (this.glDirty = !0),
                  (this.cachedSpriteDirty = !0),
                  (this.boundsDirty = !1));
                let t = this._localBounds,
                  i = t.x,
                  n = t.width + t.x,
                  r = t.y,
                  s = t.height + t.y,
                  a = e || this.worldTransform,
                  o = a.a,
                  l = a.b,
                  c = a.c,
                  u = a.d,
                  d = a.tx,
                  p = a.ty,
                  f = o * n + c * s + d,
                  m = u * s + l * n + p,
                  g = o * i + c * s + d,
                  y = u * s + l * i + p,
                  v = o * i + c * r + d,
                  b = u * r + l * i + p,
                  x = o * n + c * r + d,
                  w = u * r + l * n + p,
                  _ = f,
                  T = m,
                  S = f,
                  C = m;
                (S = S > g ? g : S),
                  (S = S > v ? v : S),
                  (S = S > x ? x : S),
                  (C = C > y ? y : C),
                  (C = C > b ? b : C),
                  (C = C > w ? w : C),
                  (_ = g > _ ? g : _),
                  (_ = v > _ ? v : _),
                  (_ = x > _ ? x : _),
                  (T = y > T ? y : T),
                  (T = b > T ? b : T),
                  (T = w > T ? w : T),
                  (this._bounds.x = S),
                  (this._bounds.width = _ - S),
                  (this._bounds.y = C),
                  (this._bounds.height = T - C),
                  (this._currentBounds = this._bounds);
              }
              return this._currentBounds;
            }),
            (n.prototype.containsPoint = function (e) {
              this.worldTransform.applyInverse(e, u);
              for (let t = this.graphicsData, i = 0; i < t.length; i++) {
                const n = t[i];
                if (n.fill && n.shape && n.shape.contains(u.x, u.y)) {
                  return !0;
                }
              }
              return !1;
            }),
            (n.prototype.updateLocalBounds = function () {
              let e = 1 / 0,
                t = -(1 / 0),
                i = 1 / 0,
                n = -(1 / 0);
              if (this.graphicsData.length) {
                for (
                  var r, s, a, o, l, h, u = 0;
                  u < this.graphicsData.length;
                  u++
                ) {
                  const d = this.graphicsData[u],
                    p = d.type,
                    f = d.lineWidth;
                  if (
                    ((r = d.shape), p === c.SHAPES.RECT || p === c.SHAPES.RREC)
                  ) {
                    (a = r.x - f / 2),
                      (o = r.y - f / 2),
                      (l = r.width + f),
                      (h = r.height + f),
                      (e = e > a ? a : e),
                      (t = a + l > t ? a + l : t),
                      (i = i > o ? o : i),
                      (n = o + h > n ? o + h : n);
                  } else if (p === c.SHAPES.CIRC) {
                    (a = r.x),
                      (o = r.y),
                      (l = r.radius + f / 2),
                      (h = r.radius + f / 2),
                      (e = e > a - l ? a - l : e),
                      (t = a + l > t ? a + l : t),
                      (i = i > o - h ? o - h : i),
                      (n = o + h > n ? o + h : n);
                  } else if (p === c.SHAPES.ELIP) {
                    (a = r.x),
                      (o = r.y),
                      (l = r.width + f / 2),
                      (h = r.height + f / 2),
                      (e = e > a - l ? a - l : e),
                      (t = a + l > t ? a + l : t),
                      (i = i > o - h ? o - h : i),
                      (n = o + h > n ? o + h : n);
                  } else {
                    s = r.points;
                    for (let m = 0; m < s.length; m += 2) {
                      (a = s[m]),
                        (o = s[m + 1]),
                        (e = e > a - f ? a - f : e),
                        (t = a + f > t ? a + f : t),
                        (i = i > o - f ? o - f : i),
                        (n = o + f > n ? o + f : n);
                    }
                  }
                }
              } else {
                (e = 0), (t = 0), (i = 0), (n = 0);
              }
              const g = this.boundsPadding;
              (this._localBounds.x = e - g),
                (this._localBounds.width = t - e + 2 * g),
                (this._localBounds.y = i - g),
                (this._localBounds.height = n - i + 2 * g);
            }),
            (n.prototype.drawShape = function (e) {
              this.currentPath &&
                this.currentPath.shape.points.length <= 2 &&
                this.graphicsData.pop(),
                (this.currentPath = null);
              const t = new l(
                this.lineWidth,
                this.lineColor,
                this.lineAlpha,
                this.fillColor,
                this.fillAlpha,
                this.filling,
                e
              );
              return (
                this.graphicsData.push(t),
                t.type === c.SHAPES.POLY &&
                  ((t.shape.closed = t.shape.closed || this.filling),
                  (this.currentPath = t)),
                (this.dirty = this.boundsDirty = !0),
                t
              );
            }),
            (n.prototype.destroy = function () {
              r.prototype.destroy.apply(this, arguments);
              for (let e = 0; e < this.graphicsData.length; ++e) {
                this.graphicsData[e].destroy();
              }
              for (const t in this._webgl) {
                for (let i = 0; i < this._webgl[t].data.length; ++i) {
                  this._webgl[t].data[i].destroy();
                }
              }
              (this.graphicsData = null),
                (this.currentPath = null),
                (this._webgl = null),
                (this._localBounds = null);
            });
        },
        {
          '../const': 16,
          '../display/Container': 17,
          '../math': 26,
          '../renderers/canvas/utils/CanvasBuffer': 38,
          '../renderers/canvas/utils/CanvasGraphics': 39,
          '../textures/Texture': 65,
          './GraphicsData': 20,
        },
      ],
      20: [
        function (e, t, i) {
          function n(e, t, i, n, r, s, a) {
            (this.lineWidth = e),
              (this.lineColor = t),
              (this.lineAlpha = i),
              (this._lineTint = t),
              (this.fillColor = n),
              (this.fillAlpha = r),
              (this._fillTint = n),
              (this.fill = s),
              (this.shape = a),
              (this.type = a.type);
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(
                this.lineWidth,
                this.lineColor,
                this.lineAlpha,
                this.fillColor,
                this.fillAlpha,
                this.fill,
                this.shape
              );
            }),
            (n.prototype.destroy = function () {
              this.shape = null;
            });
        },
        {},
      ],
      21: [
        function (e, t, i) {
          function n(e) {
            o.call(this, e),
              (this.graphicsDataPool = []),
              (this.primitiveShader = null),
              (this.complexPrimitiveShader = null),
              (this.maximumSimplePolySize = 200);
          }
          var r = e('../../utils'),
            s = e('../../math'),
            a = e('../../const'),
            o = e('../../renderers/webgl/utils/ObjectRenderer'),
            l = e('../../renderers/webgl/WebGLRenderer'),
            h = e('./WebGLGraphicsData'),
            c = e('earcut');
          (n.prototype = Object.create(o.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            l.registerPlugin('graphics', n),
            (n.prototype.onContextChange = function () {}),
            (n.prototype.destroy = function () {
              o.prototype.destroy.call(this);
              for (let e = 0; e < this.graphicsDataPool.length; ++e) {
                this.graphicsDataPool[e].destroy();
              }
              this.graphicsDataPool = null;
            }),
            (n.prototype.render = function (e) {
              let t,
                i = this.renderer,
                n = i.gl,
                s = i.shaderManager.plugins.primitiveShader;
              (!e.dirty && e._webGL[n.id]) || this.updateGraphics(e);
              const a = e._webGL[n.id];
              i.blendModeManager.setBlendMode(e.blendMode);
              for (let o = 0, l = a.data.length; l > o; o++) {
                (t = a.data[o]),
                  1 === a.data[o].mode
                    ? (i.stencilManager.pushStencil(e, t),
                      n.uniform1f(
                        i.shaderManager.complexPrimitiveShader.uniforms.alpha
                          ._location,
                        e.worldAlpha * t.alpha
                      ),
                      n.drawElements(
                        n.TRIANGLE_FAN,
                        4,
                        n.UNSIGNED_SHORT,
                        2 * (t.indices.length - 4)
                      ),
                      i.stencilManager.popStencil(e, t))
                    : ((s = i.shaderManager.primitiveShader),
                      i.shaderManager.setShader(s),
                      n.uniformMatrix3fv(
                        s.uniforms.translationMatrix._location,
                        !1,
                        e.worldTransform.toArray(!0)
                      ),
                      n.uniformMatrix3fv(
                        s.uniforms.projectionMatrix._location,
                        !1,
                        i.currentRenderTarget.projectionMatrix.toArray(!0)
                      ),
                      n.uniform3fv(
                        s.uniforms.tint._location,
                        r.hex2rgb(e.tint)
                      ),
                      n.uniform1f(s.uniforms.alpha._location, e.worldAlpha),
                      n.bindBuffer(n.ARRAY_BUFFER, t.buffer),
                      n.vertexAttribPointer(
                        s.attributes.aVertexPosition,
                        2,
                        n.FLOAT,
                        !1,
                        24,
                        0
                      ),
                      n.vertexAttribPointer(
                        s.attributes.aColor,
                        4,
                        n.FLOAT,
                        !1,
                        24,
                        8
                      ),
                      n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.indexBuffer),
                      n.drawElements(
                        n.TRIANGLE_STRIP,
                        t.indices.length,
                        n.UNSIGNED_SHORT,
                        0
                      )),
                  i.drawCount++;
              }
            }),
            (n.prototype.updateGraphics = function (e) {
              let t = this.renderer.gl,
                i = e._webGL[t.id];
              i || (i = e._webGL[t.id] = { lastIndex: 0, data: [], gl: t }),
                (e.dirty = !1);
              let n;
              if (e.clearDirty) {
                for (e.clearDirty = !1, n = 0; n < i.data.length; n++) {
                  const r = i.data[n];
                  r.reset(), this.graphicsDataPool.push(r);
                }
                (i.data = []), (i.lastIndex = 0);
              }
              let s;
              for (n = i.lastIndex; n < e.graphicsData.length; n++) {
                const o = e.graphicsData[n];
                if (o.type === a.SHAPES.POLY) {
                  if (
                    ((o.points = o.shape.points.slice()),
                    o.shape.closed &&
                      ((o.points[0] === o.points[o.points.length - 2] &&
                        o.points[1] === o.points[o.points.length - 1]) ||
                        o.points.push(o.points[0], o.points[1])),
                    o.fill && o.points.length >= 6)
                  ) {
                    if (o.points.length < 2 * this.maximumSimplePolySize) {
                      s = this.switchMode(i, 0);
                      const l = this.buildPoly(o, s);
                      l ||
                        ((s = this.switchMode(i, 1)),
                        this.buildComplexPoly(o, s));
                    } else {
                      (s = this.switchMode(i, 1)), this.buildComplexPoly(o, s);
                    }
                  }
                  o.lineWidth > 0 &&
                    ((s = this.switchMode(i, 0)), this.buildLine(o, s));
                } else {
                  (s = this.switchMode(i, 0)),
                    o.type === a.SHAPES.RECT
                      ? this.buildRectangle(o, s)
                      : o.type === a.SHAPES.CIRC || o.type === a.SHAPES.ELIP
                      ? this.buildCircle(o, s)
                      : o.type === a.SHAPES.RREC &&
                        this.buildRoundedRectangle(o, s);
                }
                i.lastIndex++;
              }
              for (n = 0; n < i.data.length; n++) {
                (s = i.data[n]), s.dirty && s.upload();
              }
            }),
            (n.prototype.switchMode = function (e, t) {
              let i;
              return (
                e.data.length
                  ? ((i = e.data[e.data.length - 1]),
                    (i.points.length > 32e4 || i.mode !== t || 1 === t) &&
                      ((i = this.graphicsDataPool.pop() || new h(e.gl)),
                      (i.mode = t),
                      e.data.push(i)))
                  : ((i = this.graphicsDataPool.pop() || new h(e.gl)),
                    (i.mode = t),
                    e.data.push(i)),
                (i.dirty = !0),
                i
              );
            }),
            (n.prototype.buildRectangle = function (e, t) {
              const i = e.shape,
                n = i.x,
                s = i.y,
                a = i.width,
                o = i.height;
              if (e.fill) {
                const l = r.hex2rgb(e.fillColor),
                  h = e.fillAlpha,
                  c = l[0] * h,
                  u = l[1] * h,
                  d = l[2] * h,
                  p = t.points,
                  f = t.indices,
                  m = p.length / 6;
                p.push(n, s),
                  p.push(c, u, d, h),
                  p.push(n + a, s),
                  p.push(c, u, d, h),
                  p.push(n, s + o),
                  p.push(c, u, d, h),
                  p.push(n + a, s + o),
                  p.push(c, u, d, h),
                  f.push(m, m, m + 1, m + 2, m + 3, m + 3);
              }
              if (e.lineWidth) {
                const g = e.points;
                (e.points = [n, s, n + a, s, n + a, s + o, n, s + o, n, s]),
                  this.buildLine(e, t),
                  (e.points = g);
              }
            }),
            (n.prototype.buildRoundedRectangle = function (e, t) {
              const i = e.shape,
                n = i.x,
                s = i.y,
                a = i.width,
                o = i.height,
                l = i.radius,
                h = [];
              if (
                (h.push(n, s + l),
                this.quadraticBezierCurve(
                  n,
                  s + o - l,
                  n,
                  s + o,
                  n + l,
                  s + o,
                  h
                ),
                this.quadraticBezierCurve(
                  n + a - l,
                  s + o,
                  n + a,
                  s + o,
                  n + a,
                  s + o - l,
                  h
                ),
                this.quadraticBezierCurve(
                  n + a,
                  s + l,
                  n + a,
                  s,
                  n + a - l,
                  s,
                  h
                ),
                this.quadraticBezierCurve(n + l, s, n, s, n, s + l + 1e-10, h),
                e.fill)
              ) {
                let u = r.hex2rgb(e.fillColor),
                  d = e.fillAlpha,
                  p = u[0] * d,
                  f = u[1] * d,
                  m = u[2] * d,
                  g = t.points,
                  y = t.indices,
                  v = g.length / 6,
                  b = c(h, null, 2),
                  x = 0;
                for (x = 0; x < b.length; x += 3) {
                  y.push(b[x] + v),
                    y.push(b[x] + v),
                    y.push(b[x + 1] + v),
                    y.push(b[x + 2] + v),
                    y.push(b[x + 2] + v);
                }
                for (x = 0; x < h.length; x++) {
                  g.push(h[x], h[++x], p, f, m, d);
                }
              }
              if (e.lineWidth) {
                const w = e.points;
                (e.points = h), this.buildLine(e, t), (e.points = w);
              }
            }),
            (n.prototype.quadraticBezierCurve = function (e, t, i, n, r, s, a) {
              function o(e, t, i) {
                const n = t - e;
                return e + n * i;
              }
              for (
                var l, h, c, u, d, p, f = 20, m = a || [], g = 0, y = 0;
                f >= y;
                y++
              ) {
                (g = y / f),
                  (l = o(e, i, g)),
                  (h = o(t, n, g)),
                  (c = o(i, r, g)),
                  (u = o(n, s, g)),
                  (d = o(l, c, g)),
                  (p = o(h, u, g)),
                  m.push(d, p);
              }
              return m;
            }),
            (n.prototype.buildCircle = function (e, t) {
              let i,
                n,
                s = e.shape,
                o = s.x,
                l = s.y;
              e.type === a.SHAPES.CIRC
                ? ((i = s.radius), (n = s.radius))
                : ((i = s.width), (n = s.height));
              let h =
                  Math.floor(30 * Math.sqrt(s.radius)) ||
                  Math.floor(15 * Math.sqrt(s.width + s.height)),
                c = (2 * Math.PI) / h,
                u = 0;
              if (e.fill) {
                let d = r.hex2rgb(e.fillColor),
                  p = e.fillAlpha,
                  f = d[0] * p,
                  m = d[1] * p,
                  g = d[2] * p,
                  y = t.points,
                  v = t.indices,
                  b = y.length / 6;
                for (v.push(b), u = 0; h + 1 > u; u++) {
                  y.push(o, l, f, m, g, p),
                    y.push(
                      o + Math.sin(c * u) * i,
                      l + Math.cos(c * u) * n,
                      f,
                      m,
                      g,
                      p
                    ),
                    v.push(b++, b++);
                }
                v.push(b - 1);
              }
              if (e.lineWidth) {
                const x = e.points;
                for (e.points = [], u = 0; h + 1 > u; u++) {
                  e.points.push(
                    o + Math.sin(c * u) * i,
                    l + Math.cos(c * u) * n
                  );
                }
                this.buildLine(e, t), (e.points = x);
              }
            }),
            (n.prototype.buildLine = function (e, t) {
              let i = 0,
                n = e.points;
              if (0 !== n.length) {
                let a = new s.Point(n[0], n[1]),
                  o = new s.Point(n[n.length - 2], n[n.length - 1]);
                if (a.x === o.x && a.y === o.y) {
                  (n = n.slice()),
                    n.pop(),
                    n.pop(),
                    (o = new s.Point(n[n.length - 2], n[n.length - 1]));
                  const l = o.x + 0.5 * (a.x - o.x),
                    h = o.y + 0.5 * (a.y - o.y);
                  n.unshift(l, h), n.push(l, h);
                }
                let c,
                  u,
                  d,
                  p,
                  f,
                  m,
                  g,
                  y,
                  v,
                  b,
                  x,
                  w,
                  _,
                  T,
                  S,
                  C,
                  E,
                  A,
                  P,
                  M,
                  k,
                  R,
                  O,
                  I = t.points,
                  F = t.indices,
                  D = n.length / 2,
                  L = n.length,
                  q = I.length / 6,
                  B = e.lineWidth / 2,
                  N = r.hex2rgb(e.lineColor),
                  z = e.lineAlpha,
                  G = N[0] * z,
                  U = N[1] * z,
                  H = N[2] * z;
                for (
                  d = n[0],
                    p = n[1],
                    f = n[2],
                    m = n[3],
                    v = -(p - m),
                    b = d - f,
                    O = Math.sqrt(v * v + b * b),
                    v /= O,
                    b /= O,
                    v *= B,
                    b *= B,
                    I.push(d - v, p - b, G, U, H, z),
                    I.push(d + v, p + b, G, U, H, z),
                    i = 1;
                  D - 1 > i;
                  i++
                ) {
                  (d = n[2 * (i - 1)]),
                    (p = n[2 * (i - 1) + 1]),
                    (f = n[2 * i]),
                    (m = n[2 * i + 1]),
                    (g = n[2 * (i + 1)]),
                    (y = n[2 * (i + 1) + 1]),
                    (v = -(p - m)),
                    (b = d - f),
                    (O = Math.sqrt(v * v + b * b)),
                    (v /= O),
                    (b /= O),
                    (v *= B),
                    (b *= B),
                    (x = -(m - y)),
                    (w = f - g),
                    (O = Math.sqrt(x * x + w * w)),
                    (x /= O),
                    (w /= O),
                    (x *= B),
                    (w *= B),
                    (S = -b + p - (-b + m)),
                    (C = -v + f - (-v + d)),
                    (E = (-v + d) * (-b + m) - (-v + f) * (-b + p)),
                    (A = -w + y - (-w + m)),
                    (P = -x + f - (-x + g)),
                    (M = (-x + g) * (-w + m) - (-x + f) * (-w + y)),
                    (k = S * P - A * C),
                    Math.abs(k) < 0.1
                      ? ((k += 10.1),
                        I.push(f - v, m - b, G, U, H, z),
                        I.push(f + v, m + b, G, U, H, z))
                      : ((c = (C * M - P * E) / k),
                        (u = (A * E - S * M) / k),
                        (R = (c - f) * (c - f) + (u - m) * (u - m)),
                        R > 19600
                          ? ((_ = v - x),
                            (T = b - w),
                            (O = Math.sqrt(_ * _ + T * T)),
                            (_ /= O),
                            (T /= O),
                            (_ *= B),
                            (T *= B),
                            I.push(f - _, m - T),
                            I.push(G, U, H, z),
                            I.push(f + _, m + T),
                            I.push(G, U, H, z),
                            I.push(f - _, m - T),
                            I.push(G, U, H, z),
                            L++)
                          : (I.push(c, u),
                            I.push(G, U, H, z),
                            I.push(f - (c - f), m - (u - m)),
                            I.push(G, U, H, z)));
                }
                for (
                  d = n[2 * (D - 2)],
                    p = n[2 * (D - 2) + 1],
                    f = n[2 * (D - 1)],
                    m = n[2 * (D - 1) + 1],
                    v = -(p - m),
                    b = d - f,
                    O = Math.sqrt(v * v + b * b),
                    v /= O,
                    b /= O,
                    v *= B,
                    b *= B,
                    I.push(f - v, m - b),
                    I.push(G, U, H, z),
                    I.push(f + v, m + b),
                    I.push(G, U, H, z),
                    F.push(q),
                    i = 0;
                  L > i;
                  i++
                ) {
                  F.push(q++);
                }
                F.push(q - 1);
              }
            }),
            (n.prototype.buildComplexPoly = function (e, t) {
              const i = e.points.slice();
              if (!(i.length < 6)) {
                const n = t.indices;
                (t.points = i),
                  (t.alpha = e.fillAlpha),
                  (t.color = r.hex2rgb(e.fillColor));
                for (
                  var s,
                    a,
                    o = 1 / 0,
                    l = -(1 / 0),
                    h = 1 / 0,
                    c = -(1 / 0),
                    u = 0;
                  u < i.length;
                  u += 2
                ) {
                  (s = i[u]),
                    (a = i[u + 1]),
                    (o = o > s ? s : o),
                    (l = s > l ? s : l),
                    (h = h > a ? a : h),
                    (c = a > c ? a : c);
                }
                i.push(o, h, l, h, l, c, o, c);
                const d = i.length / 2;
                for (u = 0; d > u; u++) {
                  n.push(u);
                }
              }
            }),
            (n.prototype.buildPoly = function (e, t) {
              const i = e.points;
              if (!(i.length < 6)) {
                const n = t.points,
                  s = t.indices,
                  a = i.length / 2,
                  o = r.hex2rgb(e.fillColor),
                  l = e.fillAlpha,
                  h = o[0] * l,
                  u = o[1] * l,
                  d = o[2] * l,
                  p = c(i, null, 2);
                if (!p) {
                  return !1;
                }
                let f = n.length / 6,
                  m = 0;
                for (m = 0; m < p.length; m += 3) {
                  s.push(p[m] + f),
                    s.push(p[m] + f),
                    s.push(p[m + 1] + f),
                    s.push(p[m + 2] + f),
                    s.push(p[m + 2] + f);
                }
                for (m = 0; a > m; m++) {
                  n.push(i[2 * m], i[2 * m + 1], h, u, d, l);
                }
                return !0;
              }
            });
        },
        {
          '../../const': 16,
          '../../math': 26,
          '../../renderers/webgl/WebGLRenderer': 42,
          '../../renderers/webgl/utils/ObjectRenderer': 56,
          '../../utils': 70,
          './WebGLGraphicsData': 22,
          earcut: 9,
        },
      ],
      22: [
        function (e, t, i) {
          function n(e) {
            (this.gl = e),
              (this.color = [0, 0, 0]),
              (this.points = []),
              (this.indices = []),
              (this.buffer = e.createBuffer()),
              (this.indexBuffer = e.createBuffer()),
              (this.mode = 1),
              (this.alpha = 1),
              (this.dirty = !0),
              (this.glPoints = null),
              (this.glIndices = null);
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.reset = function () {
              (this.points.length = 0), (this.indices.length = 0);
            }),
            (n.prototype.upload = function () {
              const e = this.gl;
              (this.glPoints = new Float32Array(this.points)),
                e.bindBuffer(e.ARRAY_BUFFER, this.buffer),
                e.bufferData(e.ARRAY_BUFFER, this.glPoints, e.STATIC_DRAW),
                (this.glIndices = new Uint16Array(this.indices)),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                e.bufferData(
                  e.ELEMENT_ARRAY_BUFFER,
                  this.glIndices,
                  e.STATIC_DRAW
                ),
                (this.dirty = !1);
            }),
            (n.prototype.destroy = function () {
              (this.color = null),
                (this.points = null),
                (this.indices = null),
                this.gl.deleteBuffer(this.buffer),
                this.gl.deleteBuffer(this.indexBuffer),
                (this.gl = null),
                (this.buffer = null),
                (this.indexBuffer = null),
                (this.glPoints = null),
                (this.glIndices = null);
            });
        },
        {},
      ],
      23: [
        function (e, t, i) {
          var n = (t.exports = Object.assign(e('./const'), e('./math'), {
            utils: e('./utils'),
            ticker: e('./ticker'),
            DisplayObject: e('./display/DisplayObject'),
            Container: e('./display/Container'),
            Sprite: e('./sprites/Sprite'),
            ParticleContainer: e('./particles/ParticleContainer'),
            SpriteRenderer: e('./sprites/webgl/SpriteRenderer'),
            ParticleRenderer: e('./particles/webgl/ParticleRenderer'),
            Text: e('./text/Text'),
            Graphics: e('./graphics/Graphics'),
            GraphicsData: e('./graphics/GraphicsData'),
            GraphicsRenderer: e('./graphics/webgl/GraphicsRenderer'),
            Texture: e('./textures/Texture'),
            BaseTexture: e('./textures/BaseTexture'),
            RenderTexture: e('./textures/RenderTexture'),
            VideoBaseTexture: e('./textures/VideoBaseTexture'),
            TextureUvs: e('./textures/TextureUvs'),
            CanvasRenderer: e('./renderers/canvas/CanvasRenderer'),
            CanvasGraphics: e('./renderers/canvas/utils/CanvasGraphics'),
            CanvasBuffer: e('./renderers/canvas/utils/CanvasBuffer'),
            CanvasTinter: e('./renderers/canvas/utils/CanvasTinter'),
            WebGLRenderer: e('./renderers/webgl/WebGLRenderer'),
            WebGLManager: e('./renderers/webgl/managers/WebGLManager'),
            ShaderManager: e('./renderers/webgl/managers/ShaderManager'),
            Shader: e('./renderers/webgl/shaders/Shader'),
            ObjectRenderer: e('./renderers/webgl/utils/ObjectRenderer'),
            RenderTarget: e('./renderers/webgl/utils/RenderTarget'),
            AbstractFilter: e('./renderers/webgl/filters/AbstractFilter'),
            FXAAFilter: e('./renderers/webgl/filters/FXAAFilter'),
            SpriteMaskFilter: e('./renderers/webgl/filters/SpriteMaskFilter'),
            autoDetectRenderer: function (e, t, i, r) {
              return (
                (e = e || 800),
                (t = t || 600),
                !r && n.utils.isWebGLSupported()
                  ? new n.WebGLRenderer(e, t, i)
                  : new n.CanvasRenderer(e, t, i)
              );
            },
          }));
        },
        {
          './const': 16,
          './display/Container': 17,
          './display/DisplayObject': 18,
          './graphics/Graphics': 19,
          './graphics/GraphicsData': 20,
          './graphics/webgl/GraphicsRenderer': 21,
          './math': 26,
          './particles/ParticleContainer': 32,
          './particles/webgl/ParticleRenderer': 34,
          './renderers/canvas/CanvasRenderer': 37,
          './renderers/canvas/utils/CanvasBuffer': 38,
          './renderers/canvas/utils/CanvasGraphics': 39,
          './renderers/canvas/utils/CanvasTinter': 41,
          './renderers/webgl/WebGLRenderer': 42,
          './renderers/webgl/filters/AbstractFilter': 43,
          './renderers/webgl/filters/FXAAFilter': 44,
          './renderers/webgl/filters/SpriteMaskFilter': 45,
          './renderers/webgl/managers/ShaderManager': 49,
          './renderers/webgl/managers/WebGLManager': 51,
          './renderers/webgl/shaders/Shader': 54,
          './renderers/webgl/utils/ObjectRenderer': 56,
          './renderers/webgl/utils/RenderTarget': 58,
          './sprites/Sprite': 60,
          './sprites/webgl/SpriteRenderer': 61,
          './text/Text': 62,
          './textures/BaseTexture': 63,
          './textures/RenderTexture': 64,
          './textures/Texture': 65,
          './textures/TextureUvs': 66,
          './textures/VideoBaseTexture': 67,
          './ticker': 69,
          './utils': 70,
        },
      ],
      24: [
        function (e, t, i) {
          function n() {
            (this.a = 1),
              (this.b = 0),
              (this.c = 0),
              (this.d = 1),
              (this.tx = 0),
              (this.ty = 0);
          }
          const r = e('./Point');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.fromArray = function (e) {
              (this.a = e[0]),
                (this.b = e[1]),
                (this.c = e[3]),
                (this.d = e[4]),
                (this.tx = e[2]),
                (this.ty = e[5]);
            }),
            (n.prototype.set = function (e, t, i, n, r, s) {
              return (
                (this.a = e),
                (this.b = t),
                (this.c = i),
                (this.d = n),
                (this.tx = r),
                (this.ty = s),
                this
              );
            }),
            (n.prototype.toArray = function (e, t) {
              this.array || (this.array = new Float32Array(9));
              const i = t || this.array;
              return (
                e
                  ? ((i[0] = this.a),
                    (i[1] = this.b),
                    (i[2] = 0),
                    (i[3] = this.c),
                    (i[4] = this.d),
                    (i[5] = 0),
                    (i[6] = this.tx),
                    (i[7] = this.ty),
                    (i[8] = 1))
                  : ((i[0] = this.a),
                    (i[1] = this.c),
                    (i[2] = this.tx),
                    (i[3] = this.b),
                    (i[4] = this.d),
                    (i[5] = this.ty),
                    (i[6] = 0),
                    (i[7] = 0),
                    (i[8] = 1)),
                i
              );
            }),
            (n.prototype.apply = function (e, t) {
              t = t || new r();
              const i = e.x,
                n = e.y;
              return (
                (t.x = this.a * i + this.c * n + this.tx),
                (t.y = this.b * i + this.d * n + this.ty),
                t
              );
            }),
            (n.prototype.applyInverse = function (e, t) {
              t = t || new r();
              const i = 1 / (this.a * this.d + this.c * -this.b),
                n = e.x,
                s = e.y;
              return (
                (t.x =
                  this.d * i * n +
                  -this.c * i * s +
                  (this.ty * this.c - this.tx * this.d) * i),
                (t.y =
                  this.a * i * s +
                  -this.b * i * n +
                  (-this.ty * this.a + this.tx * this.b) * i),
                t
              );
            }),
            (n.prototype.translate = function (e, t) {
              return (this.tx += e), (this.ty += t), this;
            }),
            (n.prototype.scale = function (e, t) {
              return (
                (this.a *= e),
                (this.d *= t),
                (this.c *= e),
                (this.b *= t),
                (this.tx *= e),
                (this.ty *= t),
                this
              );
            }),
            (n.prototype.rotate = function (e) {
              const t = Math.cos(e),
                i = Math.sin(e),
                n = this.a,
                r = this.c,
                s = this.tx;
              return (
                (this.a = n * t - this.b * i),
                (this.b = n * i + this.b * t),
                (this.c = r * t - this.d * i),
                (this.d = r * i + this.d * t),
                (this.tx = s * t - this.ty * i),
                (this.ty = s * i + this.ty * t),
                this
              );
            }),
            (n.prototype.append = function (e) {
              const t = this.a,
                i = this.b,
                n = this.c,
                r = this.d;
              return (
                (this.a = e.a * t + e.b * n),
                (this.b = e.a * i + e.b * r),
                (this.c = e.c * t + e.d * n),
                (this.d = e.c * i + e.d * r),
                (this.tx = e.tx * t + e.ty * n + this.tx),
                (this.ty = e.tx * i + e.ty * r + this.ty),
                this
              );
            }),
            (n.prototype.setTransform = function (e, t, i, n, r, s, a, o, l) {
              let h, c, u, d, p, f, m, g, y, v;
              return (
                (p = Math.sin(a)),
                (f = Math.cos(a)),
                (m = Math.cos(l)),
                (g = Math.sin(l)),
                (y = -Math.sin(o)),
                (v = Math.cos(o)),
                (h = f * r),
                (c = p * r),
                (u = -p * s),
                (d = f * s),
                (this.a = m * h + g * u),
                (this.b = m * c + g * d),
                (this.c = y * h + v * u),
                (this.d = y * c + v * d),
                (this.tx = e + (i * h + n * u)),
                (this.ty = t + (i * c + n * d)),
                this
              );
            }),
            (n.prototype.prepend = function (e) {
              const t = this.tx;
              if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
                const i = this.a,
                  n = this.c;
                (this.a = i * e.a + this.b * e.c),
                  (this.b = i * e.b + this.b * e.d),
                  (this.c = n * e.a + this.d * e.c),
                  (this.d = n * e.b + this.d * e.d);
              }
              return (
                (this.tx = t * e.a + this.ty * e.c + e.tx),
                (this.ty = t * e.b + this.ty * e.d + e.ty),
                this
              );
            }),
            (n.prototype.invert = function () {
              const e = this.a,
                t = this.b,
                i = this.c,
                n = this.d,
                r = this.tx,
                s = e * n - t * i;
              return (
                (this.a = n / s),
                (this.b = -t / s),
                (this.c = -i / s),
                (this.d = e / s),
                (this.tx = (i * this.ty - n * r) / s),
                (this.ty = -(e * this.ty - t * r) / s),
                this
              );
            }),
            (n.prototype.identity = function () {
              return (
                (this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.tx = 0),
                (this.ty = 0),
                this
              );
            }),
            (n.prototype.clone = function () {
              const e = new n();
              return (
                (e.a = this.a),
                (e.b = this.b),
                (e.c = this.c),
                (e.d = this.d),
                (e.tx = this.tx),
                (e.ty = this.ty),
                e
              );
            }),
            (n.prototype.copy = function (e) {
              return (
                (e.a = this.a),
                (e.b = this.b),
                (e.c = this.c),
                (e.d = this.d),
                (e.tx = this.tx),
                (e.ty = this.ty),
                e
              );
            }),
            (n.IDENTITY = new n()),
            (n.TEMP_MATRIX = new n());
        },
        { './Point': 25 },
      ],
      25: [
        function (e, t, i) {
          function n(e, t) {
            (this.x = e || 0), (this.y = t || 0);
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(this.x, this.y);
            }),
            (n.prototype.copy = function (e) {
              this.set(e.x, e.y);
            }),
            (n.prototype.equals = function (e) {
              return e.x === this.x && e.y === this.y;
            }),
            (n.prototype.set = function (e, t) {
              (this.x = e || 0), (this.y = t || (0 !== t ? this.x : 0));
            });
        },
        {},
      ],
      26: [
        function (e, t, i) {
          t.exports = {
            Point: e('./Point'),
            Matrix: e('./Matrix'),
            Circle: e('./shapes/Circle'),
            Ellipse: e('./shapes/Ellipse'),
            Polygon: e('./shapes/Polygon'),
            Rectangle: e('./shapes/Rectangle'),
            RoundedRectangle: e('./shapes/RoundedRectangle'),
          };
        },
        {
          './Matrix': 24,
          './Point': 25,
          './shapes/Circle': 27,
          './shapes/Ellipse': 28,
          './shapes/Polygon': 29,
          './shapes/Rectangle': 30,
          './shapes/RoundedRectangle': 31,
        },
      ],
      27: [
        function (e, t, i) {
          function n(e, t, i) {
            (this.x = e || 0),
              (this.y = t || 0),
              (this.radius = i || 0),
              (this.type = s.SHAPES.CIRC);
          }
          var r = e('./Rectangle'),
            s = e('../../const');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(this.x, this.y, this.radius);
            }),
            (n.prototype.contains = function (e, t) {
              if (this.radius <= 0) {
                return !1;
              }
              let i = this.x - e,
                n = this.y - t,
                r = this.radius * this.radius;
              return (i *= i), (n *= n), r >= i + n;
            }),
            (n.prototype.getBounds = function () {
              return new r(
                this.x - this.radius,
                this.y - this.radius,
                2 * this.radius,
                2 * this.radius
              );
            });
        },
        { '../../const': 16, './Rectangle': 30 },
      ],
      28: [
        function (e, t, i) {
          function n(e, t, i, n) {
            (this.x = e || 0),
              (this.y = t || 0),
              (this.width = i || 0),
              (this.height = n || 0),
              (this.type = s.SHAPES.ELIP);
          }
          var r = e('./Rectangle'),
            s = e('../../const');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(this.x, this.y, this.width, this.height);
            }),
            (n.prototype.contains = function (e, t) {
              if (this.width <= 0 || this.height <= 0) {
                return !1;
              }
              let i = (e - this.x) / this.width,
                n = (t - this.y) / this.height;
              return (i *= i), (n *= n), 1 >= i + n;
            }),
            (n.prototype.getBounds = function () {
              return new r(
                this.x - this.width,
                this.y - this.height,
                this.width,
                this.height
              );
            });
        },
        { '../../const': 16, './Rectangle': 30 },
      ],
      29: [
        function (e, t, i) {
          function n(e) {
            let t = e;
            if (!Array.isArray(t)) {
              t = new Array(arguments.length);
              for (let i = 0; i < t.length; ++i) {
                t[i] = arguments[i];
              }
            }
            if (t[0] instanceof r) {
              for (var n = [], a = 0, o = t.length; o > a; a++) {
                n.push(t[a].x, t[a].y);
              }
              t = n;
            }
            (this.closed = !0), (this.points = t), (this.type = s.SHAPES.POLY);
          }
          var r = e('../Point'),
            s = e('../../const');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(this.points.slice());
            }),
            (n.prototype.contains = function (e, t) {
              for (
                var i = !1, n = this.points.length / 2, r = 0, s = n - 1;
                n > r;
                s = r++
              ) {
                const a = this.points[2 * r],
                  o = this.points[2 * r + 1],
                  l = this.points[2 * s],
                  h = this.points[2 * s + 1],
                  c = o > t != h > t && ((l - a) * (t - o)) / (h - o) + a > e;
                c && (i = !i);
              }
              return i;
            });
        },
        { '../../const': 16, '../Point': 25 },
      ],
      30: [
        function (e, t, i) {
          function n(e, t, i, n) {
            (this.x = e || 0),
              (this.y = t || 0),
              (this.width = i || 0),
              (this.height = n || 0),
              (this.type = r.SHAPES.RECT);
          }
          var r = e('../../const');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.EMPTY = new n(0, 0, 0, 0)),
            (n.prototype.clone = function () {
              return new n(this.x, this.y, this.width, this.height);
            }),
            (n.prototype.contains = function (e, t) {
              return this.width <= 0 || this.height <= 0
                ? !1
                : e >= this.x &&
                    e < this.x + this.width &&
                    t >= this.y &&
                    t < this.y + this.height;
            });
        },
        { '../../const': 16 },
      ],
      31: [
        function (e, t, i) {
          function n(e, t, i, n, s) {
            (this.x = e || 0),
              (this.y = t || 0),
              (this.width = i || 0),
              (this.height = n || 0),
              (this.radius = s || 20),
              (this.type = r.SHAPES.RREC);
          }
          var r = e('../../const');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.clone = function () {
              return new n(
                this.x,
                this.y,
                this.width,
                this.height,
                this.radius
              );
            }),
            (n.prototype.contains = function (e, t) {
              return this.width <= 0 || this.height <= 0
                ? !1
                : e >= this.x &&
                    e <= this.x + this.width &&
                    t >= this.y &&
                    t <= this.y + this.height;
            });
        },
        { '../../const': 16 },
      ],
      32: [
        function (e, t, i) {
          function n(e, t, i) {
            r.call(this), (i = i || 15e3), (e = e || 15e3);
            const n = 16384;
            i > n && (i = n),
              i > e && (i = e),
              (this._properties = [!1, !0, !1, !1, !1]),
              (this._maxSize = e),
              (this._batchSize = i),
              (this._buffers = null),
              (this._bufferToUpdate = 0),
              (this.interactiveChildren = !1),
              (this.blendMode = s.BLEND_MODES.NORMAL),
              (this.roundPixels = !0),
              this.setProperties(t);
          }
          var r = e('../display/Container'),
            s = e('../const');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.setProperties = function (e) {
              e &&
                ((this._properties[0] =
                  'scale' in e ? !!e.scale : this._properties[0]),
                (this._properties[1] =
                  'position' in e ? !!e.position : this._properties[1]),
                (this._properties[2] =
                  'rotation' in e ? !!e.rotation : this._properties[2]),
                (this._properties[3] =
                  'uvs' in e ? !!e.uvs : this._properties[3]),
                (this._properties[4] =
                  'alpha' in e ? !!e.alpha : this._properties[4]));
            }),
            (n.prototype.updateTransform = function () {
              this.displayObjectUpdateTransform();
            }),
            (n.prototype.renderWebGL = function (e) {
              this.visible &&
                !(this.worldAlpha <= 0) &&
                this.children.length &&
                this.renderable &&
                (e.setObjectRenderer(e.plugins.particle),
                e.plugins.particle.render(this));
            }),
            (n.prototype.onChildrenChange = function (e) {
              const t = Math.floor(e / this._batchSize);
              t < this._bufferToUpdate && (this._bufferToUpdate = t);
            }),
            (n.prototype.renderCanvas = function (e) {
              if (
                this.visible &&
                !(this.worldAlpha <= 0) &&
                this.children.length &&
                this.renderable
              ) {
                let t = e.context,
                  i = this.worldTransform,
                  n = !0,
                  r = 0,
                  s = 0,
                  a = 0,
                  o = 0,
                  l = e.blendModes[this.blendMode];
                l !== t.globalCompositeOperation &&
                  (t.globalCompositeOperation = l),
                  (t.globalAlpha = this.worldAlpha),
                  this.displayObjectUpdateTransform();
                for (let h = 0; h < this.children.length; ++h) {
                  const c = this.children[h];
                  if (c.visible) {
                    const u = c.texture.frame;
                    if (
                      ((t.globalAlpha = this.worldAlpha * c.alpha),
                      c.rotation % (2 * Math.PI) === 0)
                    ) {
                      n &&
                        (t.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
                        (n = !1)),
                        (r =
                          c.anchor.x * (-u.width * c.scale.x) +
                          c.position.x +
                          0.5),
                        (s =
                          c.anchor.y * (-u.height * c.scale.y) +
                          c.position.y +
                          0.5),
                        (a = u.width * c.scale.x),
                        (o = u.height * c.scale.y);
                    } else {
                      n || (n = !0), c.displayObjectUpdateTransform();
                      const d = c.worldTransform;
                      e.roundPixels
                        ? t.setTransform(d.a, d.b, d.c, d.d, 0 | d.tx, 0 | d.ty)
                        : t.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty),
                        (r = c.anchor.x * -u.width + 0.5),
                        (s = c.anchor.y * -u.height + 0.5),
                        (a = u.width),
                        (o = u.height);
                    }
                    t.drawImage(
                      c.texture.baseTexture.source,
                      u.x,
                      u.y,
                      u.width,
                      u.height,
                      r,
                      s,
                      a,
                      o
                    );
                  }
                }
              }
            }),
            (n.prototype.destroy = function () {
              if ((r.prototype.destroy.apply(this, arguments), this._buffers)) {
                for (let e = 0; e < this._buffers.length; ++e) {
                  this._buffers[e].destroy();
                }
              }
              (this._properties = null), (this._buffers = null);
            });
        },
        { '../const': 16, '../display/Container': 17 },
      ],
      33: [
        function (e, t, i) {
          function n(e, t, i, n) {
            (this.gl = e),
              (this.vertSize = 2),
              (this.vertByteSize = 4 * this.vertSize),
              (this.size = n),
              (this.dynamicProperties = []),
              (this.staticProperties = []);
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              i[r]
                ? this.dynamicProperties.push(s)
                : this.staticProperties.push(s);
            }
            (this.staticStride = 0),
              (this.staticBuffer = null),
              (this.staticData = null),
              (this.dynamicStride = 0),
              (this.dynamicBuffer = null),
              (this.dynamicData = null),
              this.initBuffers();
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.initBuffers = function () {
              let e,
                t,
                i = this.gl,
                n = 0;
              for (
                this.dynamicStride = 0, e = 0;
                e < this.dynamicProperties.length;
                e++
              ) {
                (t = this.dynamicProperties[e]),
                  (t.offset = n),
                  (n += t.size),
                  (this.dynamicStride += t.size);
              }
              (this.dynamicData = new Float32Array(
                this.size * this.dynamicStride * 4
              )),
                (this.dynamicBuffer = i.createBuffer()),
                i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer),
                i.bufferData(i.ARRAY_BUFFER, this.dynamicData, i.DYNAMIC_DRAW);
              let r = 0;
              for (
                this.staticStride = 0, e = 0;
                e < this.staticProperties.length;
                e++
              ) {
                (t = this.staticProperties[e]),
                  (t.offset = r),
                  (r += t.size),
                  (this.staticStride += t.size);
              }
              (this.staticData = new Float32Array(
                this.size * this.staticStride * 4
              )),
                (this.staticBuffer = i.createBuffer()),
                i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer),
                i.bufferData(i.ARRAY_BUFFER, this.staticData, i.DYNAMIC_DRAW);
            }),
            (n.prototype.uploadDynamic = function (e, t, i) {
              for (
                var n = this.gl, r = 0;
                r < this.dynamicProperties.length;
                r++
              ) {
                const s = this.dynamicProperties[r];
                s.uploadFunction(
                  e,
                  t,
                  i,
                  this.dynamicData,
                  this.dynamicStride,
                  s.offset
                );
              }
              n.bindBuffer(n.ARRAY_BUFFER, this.dynamicBuffer),
                n.bufferSubData(n.ARRAY_BUFFER, 0, this.dynamicData);
            }),
            (n.prototype.uploadStatic = function (e, t, i) {
              for (
                var n = this.gl, r = 0;
                r < this.staticProperties.length;
                r++
              ) {
                const s = this.staticProperties[r];
                s.uploadFunction(
                  e,
                  t,
                  i,
                  this.staticData,
                  this.staticStride,
                  s.offset
                );
              }
              n.bindBuffer(n.ARRAY_BUFFER, this.staticBuffer),
                n.bufferSubData(n.ARRAY_BUFFER, 0, this.staticData);
            }),
            (n.prototype.bind = function () {
              let e,
                t,
                i = this.gl;
              for (
                i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), e = 0;
                e < this.dynamicProperties.length;
                e++
              ) {
                (t = this.dynamicProperties[e]),
                  i.vertexAttribPointer(
                    t.attribute,
                    t.size,
                    i.FLOAT,
                    !1,
                    4 * this.dynamicStride,
                    4 * t.offset
                  );
              }
              for (
                i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), e = 0;
                e < this.staticProperties.length;
                e++
              ) {
                (t = this.staticProperties[e]),
                  i.vertexAttribPointer(
                    t.attribute,
                    t.size,
                    i.FLOAT,
                    !1,
                    4 * this.staticStride,
                    4 * t.offset
                  );
              }
            }),
            (n.prototype.destroy = function () {
              (this.dynamicProperties = null),
                (this.dynamicData = null),
                this.gl.deleteBuffer(this.dynamicBuffer),
                (this.staticProperties = null),
                (this.staticData = null),
                this.gl.deleteBuffer(this.staticBuffer);
            });
        },
        {},
      ],
      34: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e);
            const t = 98304;
            this.indices = new Uint16Array(t);
            for (let i = 0, n = 0; t > i; i += 6, n += 4) {
              (this.indices[i + 0] = n + 0),
                (this.indices[i + 1] = n + 1),
                (this.indices[i + 2] = n + 2),
                (this.indices[i + 3] = n + 0),
                (this.indices[i + 4] = n + 2),
                (this.indices[i + 5] = n + 3);
            }
            (this.shader = null),
              (this.indexBuffer = null),
              (this.properties = null),
              (this.tempMatrix = new l.Matrix());
          }
          var r = e('../../renderers/webgl/utils/ObjectRenderer'),
            s = e('../../renderers/webgl/WebGLRenderer'),
            a = e('./ParticleShader'),
            o = e('./ParticleBuffer'),
            l = e('../../math');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            s.registerPlugin('particle', n),
            (n.prototype.onContextChange = function () {
              const e = this.renderer.gl;
              (this.shader = new a(this.renderer.shaderManager)),
                (this.indexBuffer = e.createBuffer()),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                e.bufferData(
                  e.ELEMENT_ARRAY_BUFFER,
                  this.indices,
                  e.STATIC_DRAW
                ),
                (this.properties = [
                  {
                    attribute: this.shader.attributes.aVertexPosition,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0,
                  },
                  {
                    attribute: this.shader.attributes.aPositionCoord,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0,
                  },
                  {
                    attribute: this.shader.attributes.aRotation,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0,
                  },
                  {
                    attribute: this.shader.attributes.aTextureCoord,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0,
                  },
                  {
                    attribute: this.shader.attributes.aColor,
                    size: 1,
                    uploadFunction: this.uploadAlpha,
                    offset: 0,
                  },
                ]);
            }),
            (n.prototype.start = function () {
              const e = this.renderer.gl;
              e.activeTexture(e.TEXTURE0),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
              const t = this.shader;
              this.renderer.shaderManager.setShader(t);
            }),
            (n.prototype.render = function (e) {
              let t = e.children,
                i = t.length,
                n = e._maxSize,
                r = e._batchSize;
              if (0 !== i) {
                i > n && (i = n),
                  e._buffers || (e._buffers = this.generateBuffers(e)),
                  this.renderer.blendModeManager.setBlendMode(e.blendMode);
                const s = this.renderer.gl,
                  a = e.worldTransform.copy(this.tempMatrix);
                a.prepend(this.renderer.currentRenderTarget.projectionMatrix),
                  s.uniformMatrix3fv(
                    this.shader.uniforms.projectionMatrix._location,
                    !1,
                    a.toArray(!0)
                  ),
                  s.uniform1f(
                    this.shader.uniforms.uAlpha._location,
                    e.worldAlpha
                  );
                const o = t[0]._texture.baseTexture;
                if (o._glTextures[s.id]) {
                  s.bindTexture(s.TEXTURE_2D, o._glTextures[s.id]);
                } else {
                  if (!this.renderer.updateTexture(o)) {
                    return;
                  }
                  (e._properties[0] && e._properties[3]) ||
                    (e._bufferToUpdate = 0);
                }
                for (let l = 0, h = 0; i > l; l += r, h += 1) {
                  let c = i - l;
                  c > r && (c = r);
                  const u = e._buffers[h];
                  u.uploadDynamic(t, l, c),
                    e._bufferToUpdate === h &&
                      (u.uploadStatic(t, l, c), (e._bufferToUpdate = h + 1)),
                    u.bind(this.shader),
                    s.drawElements(s.TRIANGLES, 6 * c, s.UNSIGNED_SHORT, 0),
                    this.renderer.drawCount++;
                }
              }
            }),
            (n.prototype.generateBuffers = function (e) {
              let t,
                i = this.renderer.gl,
                n = [],
                r = e._maxSize,
                s = e._batchSize,
                a = e._properties;
              for (t = 0; r > t; t += s) {
                n.push(new o(i, this.properties, a, s));
              }
              return n;
            }),
            (n.prototype.uploadVertices = function (e, t, i, n, r, s) {
              for (var a, o, l, h, c, u, d, p, f, m = 0; i > m; m++) {
                (a = e[t + m]),
                  (o = a._texture),
                  (h = a.scale.x),
                  (c = a.scale.y),
                  o.trim
                    ? ((l = o.trim),
                      (d = l.x - a.anchor.x * l.width),
                      (u = d + o.crop.width),
                      (f = l.y - a.anchor.y * l.height),
                      (p = f + o.crop.height))
                    : ((u = o._frame.width * (1 - a.anchor.x)),
                      (d = o._frame.width * -a.anchor.x),
                      (p = o._frame.height * (1 - a.anchor.y)),
                      (f = o._frame.height * -a.anchor.y)),
                  (n[s] = d * h),
                  (n[s + 1] = f * c),
                  (n[s + r] = u * h),
                  (n[s + r + 1] = f * c),
                  (n[s + 2 * r] = u * h),
                  (n[s + 2 * r + 1] = p * c),
                  (n[s + 3 * r] = d * h),
                  (n[s + 3 * r + 1] = p * c),
                  (s += 4 * r);
              }
            }),
            (n.prototype.uploadPosition = function (e, t, i, n, r, s) {
              for (let a = 0; i > a; a++) {
                const o = e[t + a].position;
                (n[s] = o.x),
                  (n[s + 1] = o.y),
                  (n[s + r] = o.x),
                  (n[s + r + 1] = o.y),
                  (n[s + 2 * r] = o.x),
                  (n[s + 2 * r + 1] = o.y),
                  (n[s + 3 * r] = o.x),
                  (n[s + 3 * r + 1] = o.y),
                  (s += 4 * r);
              }
            }),
            (n.prototype.uploadRotation = function (e, t, i, n, r, s) {
              for (let a = 0; i > a; a++) {
                const o = e[t + a].rotation;
                (n[s] = o),
                  (n[s + r] = o),
                  (n[s + 2 * r] = o),
                  (n[s + 3 * r] = o),
                  (s += 4 * r);
              }
            }),
            (n.prototype.uploadUvs = function (e, t, i, n, r, s) {
              for (let a = 0; i > a; a++) {
                const o = e[t + a]._texture._uvs;
                o
                  ? ((n[s] = o.x0),
                    (n[s + 1] = o.y0),
                    (n[s + r] = o.x1),
                    (n[s + r + 1] = o.y1),
                    (n[s + 2 * r] = o.x2),
                    (n[s + 2 * r + 1] = o.y2),
                    (n[s + 3 * r] = o.x3),
                    (n[s + 3 * r + 1] = o.y3),
                    (s += 4 * r))
                  : ((n[s] = 0),
                    (n[s + 1] = 0),
                    (n[s + r] = 0),
                    (n[s + r + 1] = 0),
                    (n[s + 2 * r] = 0),
                    (n[s + 2 * r + 1] = 0),
                    (n[s + 3 * r] = 0),
                    (n[s + 3 * r + 1] = 0),
                    (s += 4 * r));
              }
            }),
            (n.prototype.uploadAlpha = function (e, t, i, n, r, s) {
              for (let a = 0; i > a; a++) {
                const o = e[t + a].alpha;
                (n[s] = o),
                  (n[s + r] = o),
                  (n[s + 2 * r] = o),
                  (n[s + 3 * r] = o),
                  (s += 4 * r);
              }
            }),
            (n.prototype.destroy = function () {
              this.renderer.gl &&
                this.renderer.gl.deleteBuffer(this.indexBuffer),
                r.prototype.destroy.apply(this, arguments),
                this.shader.destroy(),
                (this.indices = null),
                (this.tempMatrix = null);
            });
        },
        {
          '../../math': 26,
          '../../renderers/webgl/WebGLRenderer': 42,
          '../../renderers/webgl/utils/ObjectRenderer': 56,
          './ParticleBuffer': 33,
          './ParticleShader': 35,
        },
      ],
      35: [
        function (e, t, i) {
          function n(e) {
            r.call(
              this,
              e,
              [
                'attribute vec2 aVertexPosition;',
                'attribute vec2 aTextureCoord;',
                'attribute float aColor;',
                'attribute vec2 aPositionCoord;',
                'attribute vec2 aScale;',
                'attribute float aRotation;',
                'uniform mat3 projectionMatrix;',
                'varying vec2 vTextureCoord;',
                'varying float vColor;',
                'void main(void){',
                '   vec2 v = aVertexPosition;',
                '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);',
                '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);',
                '   v = v + aPositionCoord;',
                '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);',
                '   vTextureCoord = aTextureCoord;',
                '   vColor = aColor;',
                '}',
              ].join('\n'),
              [
                'precision lowp float;',
                'varying vec2 vTextureCoord;',
                'varying float vColor;',
                'uniform sampler2D uSampler;',
                'uniform float uAlpha;',
                'void main(void){',
                '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;',
                '  if (color.a == 0.0) discard;',
                '  gl_FragColor = color;',
                '}',
              ].join('\n'),
              { uAlpha: { type: '1f', value: 1 } },
              { aPositionCoord: 0, aRotation: 0 }
            );
          }
          var r = e('../../renderers/webgl/shaders/TextureShader');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n);
        },
        { '../../renderers/webgl/shaders/TextureShader': 55 },
      ],
      36: [
        function (e, t, i) {
          function n(e, t, i, n) {
            if ((o.call(this), r.sayHello(e), n)) {
              for (const l in a.DEFAULT_RENDER_OPTIONS) {
                'undefined' == typeof n[l] &&
                  (n[l] = a.DEFAULT_RENDER_OPTIONS[l]);
              }
            } else {
              n = a.DEFAULT_RENDER_OPTIONS;
            }
            (this.type = a.RENDERER_TYPE.UNKNOWN),
              (this.width = t || 800),
              (this.height = i || 600),
              (this.view = n.view || document.createElement('canvas')),
              (this.resolution = n.resolution),
              (this.transparent = n.transparent),
              (this.autoResize = n.autoResize || !1),
              (this.blendModes = null),
              (this.preserveDrawingBuffer = n.preserveDrawingBuffer),
              (this.clearBeforeRender = n.clearBeforeRender),
              (this.roundPixels = n.roundPixels),
              (this._backgroundColor = 0),
              (this._backgroundColorRgb = [0, 0, 0]),
              (this._backgroundColorString = '#000000'),
              (this.backgroundColor =
                n.backgroundColor || this._backgroundColor),
              (this._tempDisplayObjectParent = {
                worldTransform: new s.Matrix(),
                worldAlpha: 1,
                children: [],
              }),
              (this._lastObjectRendered = this._tempDisplayObjectParent);
          }
          var r = e('../utils'),
            s = e('../math'),
            a = e('../const'),
            o = e('eventemitter3');
          (n.prototype = Object.create(o.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              backgroundColor: {
                get: function () {
                  return this._backgroundColor;
                },
                set: function (e) {
                  (this._backgroundColor = e),
                    (this._backgroundColorString = r.hex2string(e)),
                    r.hex2rgb(e, this._backgroundColorRgb);
                },
              },
            }),
            (n.prototype.resize = function (e, t) {
              (this.width = e * this.resolution),
                (this.height = t * this.resolution),
                (this.view.width = this.width),
                (this.view.height = this.height),
                this.autoResize &&
                  ((this.view.style.width =
                    this.width / this.resolution + 'px'),
                  (this.view.style.height =
                    this.height / this.resolution + 'px'));
            }),
            (n.prototype.destroy = function (e) {
              e &&
                this.view.parentNode &&
                this.view.parentNode.removeChild(this.view),
                (this.type = a.RENDERER_TYPE.UNKNOWN),
                (this.width = 0),
                (this.height = 0),
                (this.view = null),
                (this.resolution = 0),
                (this.transparent = !1),
                (this.autoResize = !1),
                (this.blendModes = null),
                (this.preserveDrawingBuffer = !1),
                (this.clearBeforeRender = !1),
                (this.roundPixels = !1),
                (this._backgroundColor = 0),
                (this._backgroundColorRgb = null),
                (this._backgroundColorString = null);
            });
        },
        { '../const': 16, '../math': 26, '../utils': 70, eventemitter3: 10 },
      ],
      37: [
        function (e, t, i) {
          function n(e, t, i) {
            (i = i || {}),
              r.call(this, 'Canvas', e, t, i),
              (this.type = l.RENDERER_TYPE.CANVAS),
              (this.context = this.view.getContext('2d', {
                alpha: this.transparent,
              })),
              (this.refresh = !0),
              (this.maskManager = new s()),
              (this.smoothProperty = 'imageSmoothingEnabled'),
              this.context.imageSmoothingEnabled ||
                (this.context.webkitImageSmoothingEnabled
                  ? (this.smoothProperty = 'webkitImageSmoothingEnabled')
                  : this.context.mozImageSmoothingEnabled
                  ? (this.smoothProperty = 'mozImageSmoothingEnabled')
                  : this.context.oImageSmoothingEnabled
                  ? (this.smoothProperty = 'oImageSmoothingEnabled')
                  : this.context.msImageSmoothingEnabled &&
                    (this.smoothProperty = 'msImageSmoothingEnabled')),
              this.initPlugins(),
              this._mapBlendModes(),
              (this._tempDisplayObjectParent = {
                worldTransform: new o.Matrix(),
                worldAlpha: 1,
              }),
              this.resize(e, t);
          }
          var r = e('../SystemRenderer'),
            s = e('./utils/CanvasMaskManager'),
            a = e('../../utils'),
            o = e('../../math'),
            l = e('../../const');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            a.pluginTarget.mixin(n),
            (n.prototype.render = function (e) {
              this.emit('prerender');
              const t = e.parent;
              (this._lastObjectRendered = e),
                (e.parent = this._tempDisplayObjectParent),
                e.updateTransform(),
                (e.parent = t),
                this.context.setTransform(1, 0, 0, 1, 0, 0),
                (this.context.globalAlpha = 1),
                (this.context.globalCompositeOperation =
                  this.blendModes[l.BLEND_MODES.NORMAL]),
                navigator.isCocoonJS &&
                  this.view.screencanvas &&
                  ((this.context.fillStyle = 'black'), this.context.clear()),
                this.clearBeforeRender &&
                  (this.transparent
                    ? this.context.clearRect(0, 0, this.width, this.height)
                    : ((this.context.fillStyle = this._backgroundColorString),
                      this.context.fillRect(0, 0, this.width, this.height))),
                this.renderDisplayObject(e, this.context),
                this.emit('postrender');
            }),
            (n.prototype.destroy = function (e) {
              this.destroyPlugins(),
                r.prototype.destroy.call(this, e),
                (this.context = null),
                (this.refresh = !0),
                this.maskManager.destroy(),
                (this.maskManager = null),
                (this.smoothProperty = null);
            }),
            (n.prototype.renderDisplayObject = function (e, t) {
              const i = this.context;
              (this.context = t), e.renderCanvas(this), (this.context = i);
            }),
            (n.prototype.resize = function (e, t) {
              r.prototype.resize.call(this, e, t),
                this.smoothProperty &&
                  (this.context[this.smoothProperty] =
                    l.SCALE_MODES.DEFAULT === l.SCALE_MODES.LINEAR);
            }),
            (n.prototype._mapBlendModes = function () {
              this.blendModes ||
                ((this.blendModes = {}),
                a.canUseNewCanvasBlendModes()
                  ? ((this.blendModes[l.BLEND_MODES.NORMAL] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.ADD] = 'lighter'),
                    (this.blendModes[l.BLEND_MODES.MULTIPLY] = 'multiply'),
                    (this.blendModes[l.BLEND_MODES.SCREEN] = 'screen'),
                    (this.blendModes[l.BLEND_MODES.OVERLAY] = 'overlay'),
                    (this.blendModes[l.BLEND_MODES.DARKEN] = 'darken'),
                    (this.blendModes[l.BLEND_MODES.LIGHTEN] = 'lighten'),
                    (this.blendModes[l.BLEND_MODES.COLOR_DODGE] =
                      'color-dodge'),
                    (this.blendModes[l.BLEND_MODES.COLOR_BURN] = 'color-burn'),
                    (this.blendModes[l.BLEND_MODES.HARD_LIGHT] = 'hard-light'),
                    (this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = 'soft-light'),
                    (this.blendModes[l.BLEND_MODES.DIFFERENCE] = 'difference'),
                    (this.blendModes[l.BLEND_MODES.EXCLUSION] = 'exclusion'),
                    (this.blendModes[l.BLEND_MODES.HUE] = 'hue'),
                    (this.blendModes[l.BLEND_MODES.SATURATION] = 'saturate'),
                    (this.blendModes[l.BLEND_MODES.COLOR] = 'color'),
                    (this.blendModes[l.BLEND_MODES.LUMINOSITY] = 'luminosity'))
                  : ((this.blendModes[l.BLEND_MODES.NORMAL] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.ADD] = 'lighter'),
                    (this.blendModes[l.BLEND_MODES.MULTIPLY] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.SCREEN] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.OVERLAY] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.DARKEN] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.LIGHTEN] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.COLOR_DODGE] =
                      'source-over'),
                    (this.blendModes[l.BLEND_MODES.COLOR_BURN] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.HARD_LIGHT] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.SOFT_LIGHT] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.DIFFERENCE] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.EXCLUSION] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.HUE] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.SATURATION] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.COLOR] = 'source-over'),
                    (this.blendModes[l.BLEND_MODES.LUMINOSITY] =
                      'source-over')));
            });
        },
        {
          '../../const': 16,
          '../../math': 26,
          '../../utils': 70,
          '../SystemRenderer': 36,
          './utils/CanvasMaskManager': 40,
        },
      ],
      38: [
        function (e, t, i) {
          function n(e, t) {
            (this.canvas = document.createElement('canvas')),
              (this.context = this.canvas.getContext('2d')),
              (this.canvas.width = e),
              (this.canvas.height = t);
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              width: {
                get: function () {
                  return this.canvas.width;
                },
                set: function (e) {
                  this.canvas.width = e;
                },
              },
              height: {
                get: function () {
                  return this.canvas.height;
                },
                set: function (e) {
                  this.canvas.height = e;
                },
              },
            }),
            (n.prototype.clear = function () {
              this.context.setTransform(1, 0, 0, 1, 0, 0),
                this.context.clearRect(
                  0,
                  0,
                  this.canvas.width,
                  this.canvas.height
                );
            }),
            (n.prototype.resize = function (e, t) {
              (this.canvas.width = e), (this.canvas.height = t);
            }),
            (n.prototype.destroy = function () {
              (this.context = null), (this.canvas = null);
            });
        },
        {},
      ],
      39: [
        function (e, t, i) {
          const n = e('../../../const'),
            r = {};
          (t.exports = r),
            (r.renderGraphics = function (e, t) {
              const i = e.worldAlpha;
              e.dirty && (this.updateGraphicsTint(e), (e.dirty = !1));
              for (let r = 0; r < e.graphicsData.length; r++) {
                const s = e.graphicsData[r],
                  a = s.shape,
                  o = s._fillTint,
                  l = s._lineTint;
                if (((t.lineWidth = s.lineWidth), s.type === n.SHAPES.POLY)) {
                  t.beginPath();
                  const h = a.points;
                  t.moveTo(h[0], h[1]);
                  for (let c = 1; c < h.length / 2; c++) {
                    t.lineTo(h[2 * c], h[2 * c + 1]);
                  }
                  a.closed && t.lineTo(h[0], h[1]),
                    h[0] === h[h.length - 2] &&
                      h[1] === h[h.length - 1] &&
                      t.closePath(),
                    s.fill &&
                      ((t.globalAlpha = s.fillAlpha * i),
                      (t.fillStyle =
                        '#' + ('00000' + (0 | o).toString(16)).substr(-6)),
                      t.fill()),
                    s.lineWidth &&
                      ((t.globalAlpha = s.lineAlpha * i),
                      (t.strokeStyle =
                        '#' + ('00000' + (0 | l).toString(16)).substr(-6)),
                      t.stroke());
                } else if (s.type === n.SHAPES.RECT) {
                  (s.fillColor || 0 === s.fillColor) &&
                    ((t.globalAlpha = s.fillAlpha * i),
                    (t.fillStyle =
                      '#' + ('00000' + (0 | o).toString(16)).substr(-6)),
                    t.fillRect(a.x, a.y, a.width, a.height)),
                    s.lineWidth &&
                      ((t.globalAlpha = s.lineAlpha * i),
                      (t.strokeStyle =
                        '#' + ('00000' + (0 | l).toString(16)).substr(-6)),
                      t.strokeRect(a.x, a.y, a.width, a.height));
                } else if (s.type === n.SHAPES.CIRC) {
                  t.beginPath(),
                    t.arc(a.x, a.y, a.radius, 0, 2 * Math.PI),
                    t.closePath(),
                    s.fill &&
                      ((t.globalAlpha = s.fillAlpha * i),
                      (t.fillStyle =
                        '#' + ('00000' + (0 | o).toString(16)).substr(-6)),
                      t.fill()),
                    s.lineWidth &&
                      ((t.globalAlpha = s.lineAlpha * i),
                      (t.strokeStyle =
                        '#' + ('00000' + (0 | l).toString(16)).substr(-6)),
                      t.stroke());
                } else if (s.type === n.SHAPES.ELIP) {
                  const u = 2 * a.width,
                    d = 2 * a.height,
                    p = a.x - u / 2,
                    f = a.y - d / 2;
                  t.beginPath();
                  const m = 0.5522848,
                    g = (u / 2) * m,
                    y = (d / 2) * m,
                    v = p + u,
                    b = f + d,
                    x = p + u / 2,
                    w = f + d / 2;
                  t.moveTo(p, w),
                    t.bezierCurveTo(p, w - y, x - g, f, x, f),
                    t.bezierCurveTo(x + g, f, v, w - y, v, w),
                    t.bezierCurveTo(v, w + y, x + g, b, x, b),
                    t.bezierCurveTo(x - g, b, p, w + y, p, w),
                    t.closePath(),
                    s.fill &&
                      ((t.globalAlpha = s.fillAlpha * i),
                      (t.fillStyle =
                        '#' + ('00000' + (0 | o).toString(16)).substr(-6)),
                      t.fill()),
                    s.lineWidth &&
                      ((t.globalAlpha = s.lineAlpha * i),
                      (t.strokeStyle =
                        '#' + ('00000' + (0 | l).toString(16)).substr(-6)),
                      t.stroke());
                } else if (s.type === n.SHAPES.RREC) {
                  let _ = a.x,
                    T = a.y,
                    S = a.width,
                    C = a.height,
                    E = a.radius,
                    A = (Math.min(S, C) / 2) | 0;
                  (E = E > A ? A : E),
                    t.beginPath(),
                    t.moveTo(_, T + E),
                    t.lineTo(_, T + C - E),
                    t.quadraticCurveTo(_, T + C, _ + E, T + C),
                    t.lineTo(_ + S - E, T + C),
                    t.quadraticCurveTo(_ + S, T + C, _ + S, T + C - E),
                    t.lineTo(_ + S, T + E),
                    t.quadraticCurveTo(_ + S, T, _ + S - E, T),
                    t.lineTo(_ + E, T),
                    t.quadraticCurveTo(_, T, _, T + E),
                    t.closePath(),
                    (s.fillColor || 0 === s.fillColor) &&
                      ((t.globalAlpha = s.fillAlpha * i),
                      (t.fillStyle =
                        '#' + ('00000' + (0 | o).toString(16)).substr(-6)),
                      t.fill()),
                    s.lineWidth &&
                      ((t.globalAlpha = s.lineAlpha * i),
                      (t.strokeStyle =
                        '#' + ('00000' + (0 | l).toString(16)).substr(-6)),
                      t.stroke());
                }
              }
            }),
            (r.renderGraphicsMask = function (e, t) {
              const i = e.graphicsData.length;
              if (0 !== i) {
                t.beginPath();
                for (let r = 0; i > r; r++) {
                  const s = e.graphicsData[r],
                    a = s.shape;
                  if (s.type === n.SHAPES.POLY) {
                    const o = a.points;
                    t.moveTo(o[0], o[1]);
                    for (let l = 1; l < o.length / 2; l++) {
                      t.lineTo(o[2 * l], o[2 * l + 1]);
                    }
                    o[0] === o[o.length - 2] &&
                      o[1] === o[o.length - 1] &&
                      t.closePath();
                  } else if (s.type === n.SHAPES.RECT) {
                    t.rect(a.x, a.y, a.width, a.height), t.closePath();
                  } else if (s.type === n.SHAPES.CIRC) {
                    t.arc(a.x, a.y, a.radius, 0, 2 * Math.PI), t.closePath();
                  } else if (s.type === n.SHAPES.ELIP) {
                    const h = 2 * a.width,
                      c = 2 * a.height,
                      u = a.x - h / 2,
                      d = a.y - c / 2,
                      p = 0.5522848,
                      f = (h / 2) * p,
                      m = (c / 2) * p,
                      g = u + h,
                      y = d + c,
                      v = u + h / 2,
                      b = d + c / 2;
                    t.moveTo(u, b),
                      t.bezierCurveTo(u, b - m, v - f, d, v, d),
                      t.bezierCurveTo(v + f, d, g, b - m, g, b),
                      t.bezierCurveTo(g, b + m, v + f, y, v, y),
                      t.bezierCurveTo(v - f, y, u, b + m, u, b),
                      t.closePath();
                  } else if (s.type === n.SHAPES.RREC) {
                    let x = a.x,
                      w = a.y,
                      _ = a.width,
                      T = a.height,
                      S = a.radius,
                      C = (Math.min(_, T) / 2) | 0;
                    (S = S > C ? C : S),
                      t.moveTo(x, w + S),
                      t.lineTo(x, w + T - S),
                      t.quadraticCurveTo(x, w + T, x + S, w + T),
                      t.lineTo(x + _ - S, w + T),
                      t.quadraticCurveTo(x + _, w + T, x + _, w + T - S),
                      t.lineTo(x + _, w + S),
                      t.quadraticCurveTo(x + _, w, x + _ - S, w),
                      t.lineTo(x + S, w),
                      t.quadraticCurveTo(x, w, x, w + S),
                      t.closePath();
                  }
                }
              }
            }),
            (r.updateGraphicsTint = function (e) {
              if (16777215 !== e.tint || e._prevTint !== e.tint) {
                e._prevTint = e.tint;
                for (
                  let t = ((e.tint >> 16) & 255) / 255,
                    i = ((e.tint >> 8) & 255) / 255,
                    n = (255 & e.tint) / 255,
                    r = 0;
                  r < e.graphicsData.length;
                  r++
                ) {
                  const s = e.graphicsData[r],
                    a = 0 | s.fillColor,
                    o = 0 | s.lineColor;
                  (s._fillTint =
                    (((((a >> 16) & 255) / 255) * t * 255) << 16) +
                    (((((a >> 8) & 255) / 255) * i * 255) << 8) +
                    ((255 & a) / 255) * n * 255),
                    (s._lineTint =
                      (((((o >> 16) & 255) / 255) * t * 255) << 16) +
                      (((((o >> 8) & 255) / 255) * i * 255) << 8) +
                      ((255 & o) / 255) * n * 255);
                }
              }
            });
        },
        { '../../../const': 16 },
      ],
      40: [
        function (e, t, i) {
          function n() {}
          const r = e('./CanvasGraphics');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.pushMask = function (e, t) {
              t.context.save();
              const i = e.alpha,
                n = e.worldTransform,
                s = t.resolution;
              t.context.setTransform(
                n.a * s,
                n.b * s,
                n.c * s,
                n.d * s,
                n.tx * s,
                n.ty * s
              ),
                e.texture ||
                  (r.renderGraphicsMask(e, t.context), t.context.clip()),
                (e.worldAlpha = i);
            }),
            (n.prototype.popMask = function (e) {
              e.context.restore();
            }),
            (n.prototype.destroy = function () {});
        },
        { './CanvasGraphics': 39 },
      ],
      41: [
        function (e, t, i) {
          const n = e('../../../utils'),
            r = {};
          (t.exports = r),
            (r.getTintedTexture = function (e, t) {
              const i = e.texture;
              t = r.roundColor(t);
              const n = '#' + ('00000' + (0 | t).toString(16)).substr(-6);
              if (((i.tintCache = i.tintCache || {}), i.tintCache[n])) {
                return i.tintCache[n];
              }
              const s = r.canvas || document.createElement('canvas');
              if ((r.tintMethod(i, t, s), r.convertTintToImage)) {
                const a = new Image();
                (a.src = s.toDataURL()), (i.tintCache[n] = a);
              } else {
                (i.tintCache[n] = s), (r.canvas = null);
              }
              return s;
            }),
            (r.tintWithMultiply = function (e, t, i) {
              const n = i.getContext('2d'),
                r = e.baseTexture.resolution,
                s = e.crop.clone();
              (s.x *= r),
                (s.y *= r),
                (s.width *= r),
                (s.height *= r),
                (i.width = s.width),
                (i.height = s.height),
                (n.fillStyle =
                  '#' + ('00000' + (0 | t).toString(16)).substr(-6)),
                n.fillRect(0, 0, s.width, s.height),
                (n.globalCompositeOperation = 'multiply'),
                n.drawImage(
                  e.baseTexture.source,
                  s.x,
                  s.y,
                  s.width,
                  s.height,
                  0,
                  0,
                  s.width,
                  s.height
                ),
                (n.globalCompositeOperation = 'destination-atop'),
                n.drawImage(
                  e.baseTexture.source,
                  s.x,
                  s.y,
                  s.width,
                  s.height,
                  0,
                  0,
                  s.width,
                  s.height
                );
            }),
            (r.tintWithOverlay = function (e, t, i) {
              const n = i.getContext('2d'),
                r = e.baseTexture.resolution,
                s = e.crop.clone();
              (s.x *= r),
                (s.y *= r),
                (s.width *= r),
                (s.height *= r),
                (i.width = s.width),
                (i.height = s.height),
                (n.globalCompositeOperation = 'copy'),
                (n.fillStyle =
                  '#' + ('00000' + (0 | t).toString(16)).substr(-6)),
                n.fillRect(0, 0, s.width, s.height),
                (n.globalCompositeOperation = 'destination-atop'),
                n.drawImage(
                  e.baseTexture.source,
                  s.x,
                  s.y,
                  s.width,
                  s.height,
                  0,
                  0,
                  s.width,
                  s.height
                );
            }),
            (r.tintWithPerPixel = function (e, t, i) {
              const r = i.getContext('2d'),
                s = e.baseTexture.resolution,
                a = e.crop.clone();
              (a.x *= s),
                (a.y *= s),
                (a.width *= s),
                (a.height *= s),
                (i.width = a.width),
                (i.height = a.height),
                (r.globalCompositeOperation = 'copy'),
                r.drawImage(
                  e.baseTexture.source,
                  a.x,
                  a.y,
                  a.width,
                  a.height,
                  0,
                  0,
                  a.width,
                  a.height
                );
              for (
                var o = n.hex2rgb(t),
                  l = o[0],
                  h = o[1],
                  c = o[2],
                  u = r.getImageData(0, 0, a.width, a.height),
                  d = u.data,
                  p = 0;
                p < d.length;
                p += 4
              ) {
                (d[p + 0] *= l), (d[p + 1] *= h), (d[p + 2] *= c);
              }
              r.putImageData(u, 0, 0);
            }),
            (r.roundColor = function (e) {
              const t = r.cacheStepsPerColorChannel,
                i = n.hex2rgb(e);
              return (
                (i[0] = Math.min(255, (i[0] / t) * t)),
                (i[1] = Math.min(255, (i[1] / t) * t)),
                (i[2] = Math.min(255, (i[2] / t) * t)),
                n.rgb2hex(i)
              );
            }),
            (r.cacheStepsPerColorChannel = 8),
            (r.convertTintToImage = !1),
            (r.canUseMultiply = n.canUseNewCanvasBlendModes()),
            (r.tintMethod = r.canUseMultiply
              ? r.tintWithMultiply
              : r.tintWithPerPixel);
        },
        { '../../../utils': 70 },
      ],
      42: [
        function (e, t, i) {
          function n(e, t, i) {
            (i = i || {}),
              r.call(this, 'WebGL', e, t, i),
              (this.type = f.RENDERER_TYPE.WEBGL),
              (this.handleContextLost = this.handleContextLost.bind(this)),
              (this.handleContextRestored =
                this.handleContextRestored.bind(this)),
              this.view.addEventListener(
                'webglcontextlost',
                this.handleContextLost,
                !1
              ),
              this.view.addEventListener(
                'webglcontextrestored',
                this.handleContextRestored,
                !1
              ),
              (this._useFXAA = !!i.forceFXAA && i.antialias),
              (this._FXAAFilter = null),
              (this._contextOptions = {
                alpha: this.transparent,
                antialias: i.antialias,
                premultipliedAlpha:
                  this.transparent && 'notMultiplied' !== this.transparent,
                stencil: !0,
                preserveDrawingBuffer: i.preserveDrawingBuffer,
              }),
              (this.drawCount = 0),
              (this.shaderManager = new s(this)),
              (this.maskManager = new a(this)),
              (this.stencilManager = new o(this)),
              (this.filterManager = new l(this)),
              (this.blendModeManager = new h(this)),
              (this.currentRenderTarget = null),
              (this.currentRenderer = new u(this)),
              this.initPlugins(),
              this._createContext(),
              this._initContext(),
              this._mapGlModes(),
              (this._managedTextures = []),
              (this._renderTargetStack = []);
          }
          var r = e('../SystemRenderer'),
            s = e('./managers/ShaderManager'),
            a = e('./managers/MaskManager'),
            o = e('./managers/StencilManager'),
            l = e('./managers/FilterManager'),
            h = e('./managers/BlendModeManager'),
            c = e('./utils/RenderTarget'),
            u = e('./utils/ObjectRenderer'),
            d = e('./filters/FXAAFilter'),
            p = e('../../utils'),
            f = e('../../const');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            p.pluginTarget.mixin(n),
            (n.glContextId = 0),
            (n.prototype._createContext = function () {
              const e =
                this.view.getContext('webgl', this._contextOptions) ||
                this.view.getContext(
                  'experimental-webgl',
                  this._contextOptions
                );
              if (((this.gl = e), !e)) {
                throw new Error(
                  'This browser does not support webGL. Try using the canvas renderer'
                );
              }
              (this.glContextId = n.glContextId++),
                (e.id = this.glContextId),
                (e.renderer = this);
            }),
            (n.prototype._initContext = function () {
              const e = this.gl;
              e.disable(e.DEPTH_TEST),
                e.disable(e.CULL_FACE),
                e.enable(e.BLEND),
                (this.renderTarget = new c(
                  e,
                  this.width,
                  this.height,
                  null,
                  this.resolution,
                  !0
                )),
                this.setRenderTarget(this.renderTarget),
                this.emit('context', e),
                this.resize(this.width, this.height),
                this._useFXAA ||
                  (this._useFXAA =
                    this._contextOptions.antialias &&
                    !e.getContextAttributes().antialias),
                this._useFXAA &&
                  (window.console.warn(
                    'FXAA antialiasing being used instead of native antialiasing'
                  ),
                  (this._FXAAFilter = [new d()]));
            }),
            (n.prototype.render = function (e) {
              if ((this.emit('prerender'), !this.gl.isContextLost())) {
                (this.drawCount = 0),
                  (this._lastObjectRendered = e),
                  this._useFXAA &&
                    ((this._FXAAFilter[0].uniforms.resolution.value.x =
                      this.width),
                    (this._FXAAFilter[0].uniforms.resolution.value.y =
                      this.height),
                    (e.filterArea = this.renderTarget.size),
                    (e.filters = this._FXAAFilter));
                const t = e.parent;
                (e.parent = this._tempDisplayObjectParent),
                  e.updateTransform(),
                  (e.parent = t);
                const i = this.gl;
                this.setRenderTarget(this.renderTarget),
                  this.clearBeforeRender &&
                    (this.transparent
                      ? i.clearColor(0, 0, 0, 0)
                      : i.clearColor(
                          this._backgroundColorRgb[0],
                          this._backgroundColorRgb[1],
                          this._backgroundColorRgb[2],
                          1
                        ),
                    i.clear(i.COLOR_BUFFER_BIT)),
                  this.renderDisplayObject(e, this.renderTarget),
                  this.emit('postrender');
              }
            }),
            (n.prototype.renderDisplayObject = function (e, t, i) {
              this.setRenderTarget(t),
                i && t.clear(),
                this.filterManager.setFilterStack(t.filterStack),
                e.renderWebGL(this),
                this.currentRenderer.flush();
            }),
            (n.prototype.setObjectRenderer = function (e) {
              this.currentRenderer !== e &&
                (this.currentRenderer.stop(),
                (this.currentRenderer = e),
                this.currentRenderer.start());
            }),
            (n.prototype.setRenderTarget = function (e) {
              this.currentRenderTarget !== e &&
                ((this.currentRenderTarget = e),
                this.currentRenderTarget.activate(),
                this.stencilManager.setMaskStack(e.stencilMaskStack));
            }),
            (n.prototype.resize = function (e, t) {
              r.prototype.resize.call(this, e, t),
                this.filterManager.resize(e, t),
                this.renderTarget.resize(e, t),
                this.currentRenderTarget === this.renderTarget &&
                  (this.renderTarget.activate(),
                  this.gl.viewport(0, 0, this.width, this.height));
            }),
            (n.prototype.updateTexture = function (e) {
              if (((e = e.baseTexture || e), e.hasLoaded)) {
                const t = this.gl;
                return (
                  e._glTextures[t.id] ||
                    ((e._glTextures[t.id] = t.createTexture()),
                    e.on('update', this.updateTexture, this),
                    e.on('dispose', this.destroyTexture, this),
                    this._managedTextures.push(e)),
                  t.bindTexture(t.TEXTURE_2D, e._glTextures[t.id]),
                  t.pixelStorei(
                    t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                    e.premultipliedAlpha
                  ),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    e.source
                  ),
                  t.texParameteri(
                    t.TEXTURE_2D,
                    t.TEXTURE_MAG_FILTER,
                    e.scaleMode === f.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST
                  ),
                  e.mipmap && e.isPowerOfTwo
                    ? (t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_MIN_FILTER,
                        e.scaleMode === f.SCALE_MODES.LINEAR
                          ? t.LINEAR_MIPMAP_LINEAR
                          : t.NEAREST_MIPMAP_NEAREST
                      ),
                      t.generateMipmap(t.TEXTURE_2D))
                    : t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_MIN_FILTER,
                        e.scaleMode === f.SCALE_MODES.LINEAR
                          ? t.LINEAR
                          : t.NEAREST
                      ),
                  e.isPowerOfTwo
                    ? (t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_S,
                        t.CLAMP_TO_EDGE
                      ),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_T,
                        t.CLAMP_TO_EDGE
                      ))
                    : (t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_S,
                        t.CLAMP_TO_EDGE
                      ),
                      t.texParameteri(
                        t.TEXTURE_2D,
                        t.TEXTURE_WRAP_T,
                        t.CLAMP_TO_EDGE
                      )),
                  e._glTextures[t.id]
                );
              }
            }),
            (n.prototype.destroyTexture = function (e, t) {
              if (
                ((e = e.baseTexture || e),
                e.hasLoaded &&
                  e._glTextures[this.gl.id] &&
                  (this.gl.deleteTexture(e._glTextures[this.gl.id]),
                  delete e._glTextures[this.gl.id],
                  !t))
              ) {
                const i = this._managedTextures.indexOf(e);
                -1 !== i && p.removeItems(this._managedTextures, i, 1);
              }
            }),
            (n.prototype.handleContextLost = function (e) {
              e.preventDefault();
            }),
            (n.prototype.handleContextRestored = function () {
              this._initContext();
              for (let e = 0; e < this._managedTextures.length; ++e) {
                const t = this._managedTextures[e];
                t._glTextures[this.gl.id] && delete t._glTextures[this.gl.id];
              }
            }),
            (n.prototype.destroy = function (e) {
              this.destroyPlugins(),
                this.view.removeEventListener(
                  'webglcontextlost',
                  this.handleContextLost
                ),
                this.view.removeEventListener(
                  'webglcontextrestored',
                  this.handleContextRestored
                );
              for (let t = 0; t < this._managedTextures.length; ++t) {
                const i = this._managedTextures[t];
                this.destroyTexture(i, !0),
                  i.off('update', this.updateTexture, this),
                  i.off('dispose', this.destroyTexture, this);
              }
              r.prototype.destroy.call(this, e),
                (this.uid = 0),
                this.shaderManager.destroy(),
                this.maskManager.destroy(),
                this.stencilManager.destroy(),
                this.filterManager.destroy(),
                this.blendModeManager.destroy(),
                (this.shaderManager = null),
                (this.maskManager = null),
                (this.filterManager = null),
                (this.blendModeManager = null),
                (this.currentRenderer = null),
                (this.handleContextLost = null),
                (this.handleContextRestored = null),
                (this._contextOptions = null),
                (this._managedTextures = null),
                (this.drawCount = 0),
                this.gl.useProgram(null),
                (this.gl = null);
            }),
            (n.prototype._mapGlModes = function () {
              const e = this.gl;
              this.blendModes ||
                ((this.blendModes = {}),
                (this.blendModes[f.BLEND_MODES.NORMAL] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.ADD] = [
                  e.SRC_ALPHA,
                  e.DST_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.MULTIPLY] = [
                  e.DST_COLOR,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.SCREEN] = [e.SRC_ALPHA, e.ONE]),
                (this.blendModes[f.BLEND_MODES.OVERLAY] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.DARKEN] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.LIGHTEN] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.COLOR_BURN] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.DIFFERENCE] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.EXCLUSION] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.HUE] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.SATURATION] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.COLOR] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (this.blendModes[f.BLEND_MODES.LUMINOSITY] = [
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ])),
                this.drawModes ||
                  ((this.drawModes = {}),
                  (this.drawModes[f.DRAW_MODES.POINTS] = e.POINTS),
                  (this.drawModes[f.DRAW_MODES.LINES] = e.LINES),
                  (this.drawModes[f.DRAW_MODES.LINE_LOOP] = e.LINE_LOOP),
                  (this.drawModes[f.DRAW_MODES.LINE_STRIP] = e.LINE_STRIP),
                  (this.drawModes[f.DRAW_MODES.TRIANGLES] = e.TRIANGLES),
                  (this.drawModes[f.DRAW_MODES.TRIANGLE_STRIP] =
                    e.TRIANGLE_STRIP),
                  (this.drawModes[f.DRAW_MODES.TRIANGLE_FAN] = e.TRIANGLE_FAN));
            });
        },
        {
          '../../const': 16,
          '../../utils': 70,
          '../SystemRenderer': 36,
          './filters/FXAAFilter': 44,
          './managers/BlendModeManager': 46,
          './managers/FilterManager': 47,
          './managers/MaskManager': 48,
          './managers/ShaderManager': 49,
          './managers/StencilManager': 50,
          './utils/ObjectRenderer': 56,
          './utils/RenderTarget': 58,
        },
      ],
      43: [
        function (e, t, i) {
          function n(e, t, i) {
            (this.shaders = []),
              (this.padding = 0),
              (this.uniforms = i || {}),
              (this.vertexSrc = e || r.defaultVertexSrc),
              (this.fragmentSrc = t || r.defaultFragmentSrc);
          }
          var r = e('../shaders/TextureShader');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.getShader = function (e) {
              let t = e.gl,
                i = this.shaders[t.id];
              return (
                i ||
                  ((i = new r(
                    e.shaderManager,
                    this.vertexSrc,
                    this.fragmentSrc,
                    this.uniforms,
                    this.attributes
                  )),
                  (this.shaders[t.id] = i)),
                i
              );
            }),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.getShader(e);
              e.filterManager.applyFilter(r, t, i, n);
            }),
            (n.prototype.syncUniform = function (e) {
              for (let t = 0, i = this.shaders.length; i > t; ++t) {
                this.shaders[t].syncUniform(e);
              }
            });
        },
        { '../shaders/TextureShader': 55 },
      ],
      44: [
        function (e, t, i) {
          function n() {
            r.call(
              this,
              '\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n',
              'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n',
              { resolution: { type: 'v2', value: { x: 1, y: 1 } } }
            );
          }
          var r = e('./AbstractFilter');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager,
                r = this.getShader(e);
              n.applyFilter(r, t, i);
            });
        },
        { './AbstractFilter': 43 },
      ],
      45: [
        function (e, t, i) {
          function n(e) {
            const t = new s.Matrix();
            r.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
              'precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n',
              {
                mask: { type: 'sampler2D', value: e._texture },
                alpha: { type: 'f', value: 1 },
                otherMatrix: { type: 'mat3', value: t.toArray(!0) },
              }
            ),
              (this.maskSprite = e),
              (this.maskMatrix = t);
          }
          var r = e('./AbstractFilter'),
            s = e('../../../math');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager;
              (this.uniforms.mask.value = this.maskSprite._texture),
                n.calculateMappedMatrix(
                  t.frame,
                  this.maskSprite,
                  this.maskMatrix
                ),
                (this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0)),
                (this.uniforms.alpha.value = this.maskSprite.worldAlpha);
              const r = this.getShader(e);
              n.applyFilter(r, t, i);
            }),
            Object.defineProperties(n.prototype, {
              map: {
                get: function () {
                  return this.uniforms.mask.value;
                },
                set: function (e) {
                  this.uniforms.mask.value = e;
                },
              },
              offset: {
                get: function () {
                  return this.uniforms.offset.value;
                },
                set: function (e) {
                  this.uniforms.offset.value = e;
                },
              },
            });
        },
        { '../../../math': 26, './AbstractFilter': 43 },
      ],
      46: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e), (this.currentBlendMode = 99999);
          }
          var r = e('./WebGLManager');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.setBlendMode = function (e) {
              if (this.currentBlendMode === e) {
                return !1;
              }
              this.currentBlendMode = e;
              const t = this.renderer.blendModes[this.currentBlendMode];
              return this.renderer.gl.blendFunc(t[0], t[1]), !0;
            });
        },
        { './WebGLManager': 51 },
      ],
      47: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e),
              (this.filterStack = []),
              this.filterStack.push({
                renderTarget: e.currentRenderTarget,
                filter: [],
                bounds: null,
              }),
              (this.texturePool = []),
              (this.textureSize = new l.Rectangle(0, 0, e.width, e.height)),
              (this.currentFrame = null);
          }
          var r = e('./WebGLManager'),
            s = e('../utils/RenderTarget'),
            a = e('../../../const'),
            o = e('../utils/Quad'),
            l = e('../../../math');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.onContextChange = function () {
              this.texturePool.length = 0;
              const e = this.renderer.gl;
              this.quad = new o(e);
            }),
            (n.prototype.setFilterStack = function (e) {
              this.filterStack = e;
            }),
            (n.prototype.pushFilter = function (e, t) {
              const i = e.filterArea ? e.filterArea.clone() : e.getBounds();
              (i.x = 0 | i.x),
                (i.y = 0 | i.y),
                (i.width = 0 | i.width),
                (i.height = 0 | i.height);
              const n = 0 | t[0].padding;
              if (
                ((i.x -= n),
                (i.y -= n),
                (i.width += 2 * n),
                (i.height += 2 * n),
                this.renderer.currentRenderTarget.transform)
              ) {
                const r = this.renderer.currentRenderTarget.transform;
                (i.x += r.tx),
                  (i.y += r.ty),
                  this.capFilterArea(i),
                  (i.x -= r.tx),
                  (i.y -= r.ty);
              } else {
                this.capFilterArea(i);
              }
              if (i.width > 0 && i.height > 0) {
                this.currentFrame = i;
                const s = this.getRenderTarget();
                this.renderer.setRenderTarget(s),
                  s.clear(),
                  this.filterStack.push({ renderTarget: s, filter: t });
              } else {
                this.filterStack.push({ renderTarget: null, filter: t });
              }
            }),
            (n.prototype.popFilter = function () {
              const e = this.filterStack.pop(),
                t = this.filterStack[this.filterStack.length - 1],
                i = e.renderTarget;
              if (e.renderTarget) {
                const n = t.renderTarget,
                  r = this.renderer.gl;
                (this.currentFrame = i.frame),
                  this.quad.map(this.textureSize, i.frame),
                  r.bindBuffer(r.ARRAY_BUFFER, this.quad.vertexBuffer),
                  r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
                const s = e.filter;
                if (
                  (r.vertexAttribPointer(
                    this.renderer.shaderManager.defaultShader.attributes
                      .aVertexPosition,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    0
                  ),
                  r.vertexAttribPointer(
                    this.renderer.shaderManager.defaultShader.attributes
                      .aTextureCoord,
                    2,
                    r.FLOAT,
                    !1,
                    0,
                    32
                  ),
                  r.vertexAttribPointer(
                    this.renderer.shaderManager.defaultShader.attributes.aColor,
                    4,
                    r.FLOAT,
                    !1,
                    0,
                    64
                  ),
                  this.renderer.blendModeManager.setBlendMode(
                    a.BLEND_MODES.NORMAL
                  ),
                  1 === s.length)
                ) {
                  s[0].uniforms.dimensions &&
                    ((s[0].uniforms.dimensions.value[0] = this.renderer.width),
                    (s[0].uniforms.dimensions.value[1] = this.renderer.height),
                    (s[0].uniforms.dimensions.value[2] = this.quad.vertices[0]),
                    (s[0].uniforms.dimensions.value[3] =
                      this.quad.vertices[5])),
                    s[0].applyFilter(this.renderer, i, n),
                    this.returnRenderTarget(i);
                } else {
                  for (
                    var o = i, l = this.getRenderTarget(!0), h = 0;
                    h < s.length - 1;
                    h++
                  ) {
                    const c = s[h];
                    c.uniforms.dimensions &&
                      ((c.uniforms.dimensions.value[0] = this.renderer.width),
                      (c.uniforms.dimensions.value[1] = this.renderer.height),
                      (c.uniforms.dimensions.value[2] = this.quad.vertices[0]),
                      (c.uniforms.dimensions.value[3] = this.quad.vertices[5])),
                      c.applyFilter(this.renderer, o, l);
                    const u = o;
                    (o = l), (l = u);
                  }
                  s[s.length - 1].applyFilter(this.renderer, o, n),
                    this.returnRenderTarget(o),
                    this.returnRenderTarget(l);
                }
                return e.filter;
              }
            }),
            (n.prototype.getRenderTarget = function (e) {
              const t =
                this.texturePool.pop() ||
                new s(
                  this.renderer.gl,
                  this.textureSize.width,
                  this.textureSize.height,
                  a.SCALE_MODES.LINEAR,
                  this.renderer.resolution * a.FILTER_RESOLUTION
                );
              return (t.frame = this.currentFrame), e && t.clear(!0), t;
            }),
            (n.prototype.returnRenderTarget = function (e) {
              this.texturePool.push(e);
            }),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.renderer.gl;
              this.renderer.setRenderTarget(i),
                n && i.clear(),
                this.renderer.shaderManager.setShader(e),
                (e.uniforms.projectionMatrix.value =
                  this.renderer.currentRenderTarget.projectionMatrix.toArray(
                    !0
                  )),
                e.syncUniforms(),
                r.activeTexture(r.TEXTURE0),
                r.bindTexture(r.TEXTURE_2D, t.texture),
                r.drawElements(r.TRIANGLES, 6, r.UNSIGNED_SHORT, 0),
                this.renderer.drawCount++;
            }),
            (n.prototype.calculateMappedMatrix = function (e, t, i) {
              const n = t.worldTransform.copy(l.Matrix.TEMP_MATRIX),
                r = t._texture.baseTexture,
                s = i.identity(),
                a = this.textureSize.height / this.textureSize.width;
              s.translate(
                e.x / this.textureSize.width,
                e.y / this.textureSize.height
              ),
                s.scale(1, a);
              const o = this.textureSize.width / r.width,
                h = this.textureSize.height / r.height;
              return (
                (n.tx /= r.width * o),
                (n.ty /= r.width * o),
                n.invert(),
                s.prepend(n),
                s.scale(1, 1 / a),
                s.scale(o, h),
                s.translate(t.anchor.x, t.anchor.y),
                s
              );
            }),
            (n.prototype.capFilterArea = function (e) {
              e.x < 0 && ((e.width += e.x), (e.x = 0)),
                e.y < 0 && ((e.height += e.y), (e.y = 0)),
                e.x + e.width > this.textureSize.width &&
                  (e.width = this.textureSize.width - e.x),
                e.y + e.height > this.textureSize.height &&
                  (e.height = this.textureSize.height - e.y);
            }),
            (n.prototype.resize = function (e, t) {
              (this.textureSize.width = e), (this.textureSize.height = t);
              for (let i = 0; i < this.texturePool.length; i++) {
                this.texturePool[i].resize(e, t);
              }
            }),
            (n.prototype.destroy = function () {
              this.quad.destroy(),
                r.prototype.destroy.call(this),
                (this.filterStack = null),
                (this.offsetY = 0);
              for (let e = 0; e < this.texturePool.length; e++) {
                this.texturePool[e].destroy();
              }
              this.texturePool = null;
            });
        },
        {
          '../../../const': 16,
          '../../../math': 26,
          '../utils/Quad': 57,
          '../utils/RenderTarget': 58,
          './WebGLManager': 51,
        },
      ],
      48: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e),
              (this.stencilStack = []),
              (this.reverse = !0),
              (this.count = 0),
              (this.alphaMaskPool = []);
          }
          var r = e('./WebGLManager'),
            s = e('../filters/SpriteMaskFilter');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.pushMask = function (e, t) {
              t.texture
                ? this.pushSpriteMask(e, t)
                : this.pushStencilMask(e, t);
            }),
            (n.prototype.popMask = function (e, t) {
              t.texture ? this.popSpriteMask(e, t) : this.popStencilMask(e, t);
            }),
            (n.prototype.pushSpriteMask = function (e, t) {
              let i = this.alphaMaskPool.pop();
              i || (i = [new s(t)]),
                (i[0].maskSprite = t),
                this.renderer.filterManager.pushFilter(e, i);
            }),
            (n.prototype.popSpriteMask = function () {
              const e = this.renderer.filterManager.popFilter();
              this.alphaMaskPool.push(e);
            }),
            (n.prototype.pushStencilMask = function (e, t) {
              this.renderer.stencilManager.pushMask(t);
            }),
            (n.prototype.popStencilMask = function (e, t) {
              this.renderer.stencilManager.popMask(t);
            });
        },
        { '../filters/SpriteMaskFilter': 45, './WebGLManager': 51 },
      ],
      49: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e),
              (this.maxAttibs = 10),
              (this.attribState = []),
              (this.tempAttribState = []);
            for (let t = 0; t < this.maxAttibs; t++) {
              this.attribState[t] = !1;
            }
            (this.stack = []),
              (this._currentId = -1),
              (this.currentShader = null);
          }
          var r = e('./WebGLManager'),
            s = e('../shaders/TextureShader'),
            a = e('../shaders/ComplexPrimitiveShader'),
            o = e('../shaders/PrimitiveShader'),
            l = e('../../../utils');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            l.pluginTarget.mixin(n),
            (t.exports = n),
            (n.prototype.onContextChange = function () {
              this.initPlugins();
              const e = this.renderer.gl;
              (this.maxAttibs = e.getParameter(e.MAX_VERTEX_ATTRIBS)),
                (this.attribState = []);
              for (let t = 0; t < this.maxAttibs; t++) {
                this.attribState[t] = !1;
              }
              (this.defaultShader = new s(this)),
                (this.primitiveShader = new o(this)),
                (this.complexPrimitiveShader = new a(this));
            }),
            (n.prototype.setAttribs = function (e) {
              let t;
              for (t = 0; t < this.tempAttribState.length; t++) {
                this.tempAttribState[t] = !1;
              }
              for (const i in e) {
                this.tempAttribState[e[i]] = !0;
              }
              const n = this.renderer.gl;
              for (t = 0; t < this.attribState.length; t++) {
                this.attribState[t] !== this.tempAttribState[t] &&
                  ((this.attribState[t] = this.tempAttribState[t]),
                  this.attribState[t]
                    ? n.enableVertexAttribArray(t)
                    : n.disableVertexAttribArray(t));
              }
            }),
            (n.prototype.setShader = function (e) {
              return this._currentId === e.uid
                ? !1
                : ((this._currentId = e.uid),
                  (this.currentShader = e),
                  this.renderer.gl.useProgram(e.program),
                  this.setAttribs(e.attributes),
                  !0);
            }),
            (n.prototype.destroy = function () {
              this.primitiveShader.destroy(),
                this.complexPrimitiveShader.destroy(),
                r.prototype.destroy.call(this),
                this.destroyPlugins(),
                (this.attribState = null),
                (this.tempAttribState = null);
            });
        },
        {
          '../../../utils': 70,
          '../shaders/ComplexPrimitiveShader': 52,
          '../shaders/PrimitiveShader': 53,
          '../shaders/TextureShader': 55,
          './WebGLManager': 51,
        },
      ],
      50: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e), (this.stencilMaskStack = null);
          }
          var r = e('./WebGLManager'),
            s = e('../../../utils');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.setMaskStack = function (e) {
              this.stencilMaskStack = e;
              const t = this.renderer.gl;
              0 === e.stencilStack.length
                ? t.disable(t.STENCIL_TEST)
                : t.enable(t.STENCIL_TEST);
            }),
            (n.prototype.pushStencil = function (e, t) {
              this.renderer.currentRenderTarget.attachStencilBuffer();
              const i = this.renderer.gl,
                n = this.stencilMaskStack;
              this.bindGraphics(e, t),
                0 === n.stencilStack.length &&
                  (i.enable(i.STENCIL_TEST),
                  i.clear(i.STENCIL_BUFFER_BIT),
                  (n.reverse = !0),
                  (n.count = 0)),
                n.stencilStack.push(t);
              const r = n.count;
              i.colorMask(!1, !1, !1, !1),
                i.stencilFunc(i.ALWAYS, 0, 255),
                i.stencilOp(i.KEEP, i.KEEP, i.INVERT),
                1 === t.mode
                  ? (i.drawElements(
                      i.TRIANGLE_FAN,
                      t.indices.length - 4,
                      i.UNSIGNED_SHORT,
                      0
                    ),
                    n.reverse
                      ? (i.stencilFunc(i.EQUAL, 255 - r, 255),
                        i.stencilOp(i.KEEP, i.KEEP, i.DECR))
                      : (i.stencilFunc(i.EQUAL, r, 255),
                        i.stencilOp(i.KEEP, i.KEEP, i.INCR)),
                    i.drawElements(
                      i.TRIANGLE_FAN,
                      4,
                      i.UNSIGNED_SHORT,
                      2 * (t.indices.length - 4)
                    ),
                    n.reverse
                      ? i.stencilFunc(i.EQUAL, 255 - (r + 1), 255)
                      : i.stencilFunc(i.EQUAL, r + 1, 255),
                    (n.reverse = !n.reverse))
                  : (n.reverse
                      ? (i.stencilFunc(i.EQUAL, r, 255),
                        i.stencilOp(i.KEEP, i.KEEP, i.INCR))
                      : (i.stencilFunc(i.EQUAL, 255 - r, 255),
                        i.stencilOp(i.KEEP, i.KEEP, i.DECR)),
                    i.drawElements(
                      i.TRIANGLE_STRIP,
                      t.indices.length,
                      i.UNSIGNED_SHORT,
                      0
                    ),
                    n.reverse
                      ? i.stencilFunc(i.EQUAL, r + 1, 255)
                      : i.stencilFunc(i.EQUAL, 255 - (r + 1), 255)),
                i.colorMask(!0, !0, !0, !0),
                i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
                n.count++;
            }),
            (n.prototype.bindGraphics = function (e, t) {
              let i,
                n = this.renderer.gl;
              1 === t.mode
                ? ((i = this.renderer.shaderManager.complexPrimitiveShader),
                  this.renderer.shaderManager.setShader(i),
                  n.uniformMatrix3fv(
                    i.uniforms.translationMatrix._location,
                    !1,
                    e.worldTransform.toArray(!0)
                  ),
                  n.uniformMatrix3fv(
                    i.uniforms.projectionMatrix._location,
                    !1,
                    this.renderer.currentRenderTarget.projectionMatrix.toArray(
                      !0
                    )
                  ),
                  n.uniform3fv(i.uniforms.tint._location, s.hex2rgb(e.tint)),
                  n.uniform3fv(i.uniforms.color._location, t.color),
                  n.uniform1f(i.uniforms.alpha._location, e.worldAlpha),
                  n.bindBuffer(n.ARRAY_BUFFER, t.buffer),
                  n.vertexAttribPointer(
                    i.attributes.aVertexPosition,
                    2,
                    n.FLOAT,
                    !1,
                    8,
                    0
                  ),
                  n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.indexBuffer))
                : ((i = this.renderer.shaderManager.primitiveShader),
                  this.renderer.shaderManager.setShader(i),
                  n.uniformMatrix3fv(
                    i.uniforms.translationMatrix._location,
                    !1,
                    e.worldTransform.toArray(!0)
                  ),
                  n.uniformMatrix3fv(
                    i.uniforms.projectionMatrix._location,
                    !1,
                    this.renderer.currentRenderTarget.projectionMatrix.toArray(
                      !0
                    )
                  ),
                  n.uniform3fv(i.uniforms.tint._location, s.hex2rgb(e.tint)),
                  n.uniform1f(i.uniforms.alpha._location, e.worldAlpha),
                  n.bindBuffer(n.ARRAY_BUFFER, t.buffer),
                  n.vertexAttribPointer(
                    i.attributes.aVertexPosition,
                    2,
                    n.FLOAT,
                    !1,
                    24,
                    0
                  ),
                  n.vertexAttribPointer(
                    i.attributes.aColor,
                    4,
                    n.FLOAT,
                    !1,
                    24,
                    8
                  ),
                  n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.indexBuffer));
            }),
            (n.prototype.popStencil = function (e, t) {
              const i = this.renderer.gl,
                n = this.stencilMaskStack;
              if (
                (n.stencilStack.pop(), n.count--, 0 === n.stencilStack.length)
              ) {
                i.disable(i.STENCIL_TEST);
              } else {
                const r = n.count;
                this.bindGraphics(e, t),
                  i.colorMask(!1, !1, !1, !1),
                  1 === t.mode
                    ? ((n.reverse = !n.reverse),
                      n.reverse
                        ? (i.stencilFunc(i.EQUAL, 255 - (r + 1), 255),
                          i.stencilOp(i.KEEP, i.KEEP, i.INCR))
                        : (i.stencilFunc(i.EQUAL, r + 1, 255),
                          i.stencilOp(i.KEEP, i.KEEP, i.DECR)),
                      i.drawElements(
                        i.TRIANGLE_FAN,
                        4,
                        i.UNSIGNED_SHORT,
                        2 * (t.indices.length - 4)
                      ),
                      i.stencilFunc(i.ALWAYS, 0, 255),
                      i.stencilOp(i.KEEP, i.KEEP, i.INVERT),
                      i.drawElements(
                        i.TRIANGLE_FAN,
                        t.indices.length - 4,
                        i.UNSIGNED_SHORT,
                        0
                      ),
                      (this.renderer.drawCount += 2),
                      n.reverse
                        ? i.stencilFunc(i.EQUAL, r, 255)
                        : i.stencilFunc(i.EQUAL, 255 - r, 255))
                    : (n.reverse
                        ? (i.stencilFunc(i.EQUAL, r + 1, 255),
                          i.stencilOp(i.KEEP, i.KEEP, i.DECR))
                        : (i.stencilFunc(i.EQUAL, 255 - (r + 1), 255),
                          i.stencilOp(i.KEEP, i.KEEP, i.INCR)),
                      i.drawElements(
                        i.TRIANGLE_STRIP,
                        t.indices.length,
                        i.UNSIGNED_SHORT,
                        0
                      ),
                      this.renderer.drawCount++,
                      n.reverse
                        ? i.stencilFunc(i.EQUAL, r, 255)
                        : i.stencilFunc(i.EQUAL, 255 - r, 255)),
                  i.colorMask(!0, !0, !0, !0),
                  i.stencilOp(i.KEEP, i.KEEP, i.KEEP);
              }
            }),
            (n.prototype.destroy = function () {
              r.prototype.destroy.call(this),
                (this.stencilMaskStack.stencilStack = null);
            }),
            (n.prototype.pushMask = function (e) {
              this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
                e.dirty &&
                  this.renderer.plugins.graphics.updateGraphics(
                    e,
                    this.renderer.gl
                  ),
                e._webGL[this.renderer.gl.id].data.length &&
                  this.pushStencil(e, e._webGL[this.renderer.gl.id].data[0]);
            }),
            (n.prototype.popMask = function (e) {
              this.renderer.setObjectRenderer(this.renderer.plugins.graphics),
                this.popStencil(e, e._webGL[this.renderer.gl.id].data[0]);
            });
        },
        { '../../../utils': 70, './WebGLManager': 51 },
      ],
      51: [
        function (e, t, i) {
          function n(e) {
            (this.renderer = e),
              this.renderer.on('context', this.onContextChange, this);
          }
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.onContextChange = function () {}),
            (n.prototype.destroy = function () {
              this.renderer.off('context', this.onContextChange, this),
                (this.renderer = null);
            });
        },
        {},
      ],
      52: [
        function (e, t, i) {
          function n(e) {
            r.call(
              this,
              e,
              [
                'attribute vec2 aVertexPosition;',
                'uniform mat3 translationMatrix;',
                'uniform mat3 projectionMatrix;',
                'uniform vec3 tint;',
                'uniform float alpha;',
                'uniform vec3 color;',
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vColor = vec4(color * alpha * tint, alpha);',
                '}',
              ].join('\n'),
              [
                'precision mediump float;',
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_FragColor = vColor;',
                '}',
              ].join('\n'),
              {
                tint: { type: '3f', value: [0, 0, 0] },
                alpha: { type: '1f', value: 0 },
                color: { type: '3f', value: [0, 0, 0] },
                translationMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
                projectionMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
              },
              { aVertexPosition: 0 }
            );
          }
          var r = e('./Shader');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n);
        },
        { './Shader': 54 },
      ],
      53: [
        function (e, t, i) {
          function n(e) {
            r.call(
              this,
              e,
              [
                'attribute vec2 aVertexPosition;',
                'attribute vec4 aColor;',
                'uniform mat3 translationMatrix;',
                'uniform mat3 projectionMatrix;',
                'uniform float alpha;',
                'uniform float flipY;',
                'uniform vec3 tint;',
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vColor = aColor * vec4(tint * alpha, alpha);',
                '}',
              ].join('\n'),
              [
                'precision mediump float;',
                'varying vec4 vColor;',
                'void main(void){',
                '   gl_FragColor = vColor;',
                '}',
              ].join('\n'),
              {
                tint: { type: '3f', value: [0, 0, 0] },
                alpha: { type: '1f', value: 0 },
                translationMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
                projectionMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
              },
              { aVertexPosition: 0, aColor: 0 }
            );
          }
          var r = e('./Shader');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n);
        },
        { './Shader': 54 },
      ],
      54: [
        function (e, t, i) {
          function n(e, t, i, n, s) {
            if (!t || !i) {
              throw new Error(
                'Pixi.js Error. Shader requires vertexSrc and fragmentSrc'
              );
            }
            (this.uid = r.uid()),
              (this.gl = e.renderer.gl),
              (this.shaderManager = e),
              (this.program = null),
              (this.uniforms = n || {}),
              (this.attributes = s || {}),
              (this.textureCount = 1),
              (this.vertexSrc = t),
              (this.fragmentSrc = i),
              this.init();
          }
          var r = e('../../../utils');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.init = function () {
              this.compile(),
                this.gl.useProgram(this.program),
                this.cacheUniformLocations(Object.keys(this.uniforms)),
                this.cacheAttributeLocations(Object.keys(this.attributes));
            }),
            (n.prototype.cacheUniformLocations = function (e) {
              for (let t = 0; t < e.length; ++t) {
                this.uniforms[e[t]]._location = this.gl.getUniformLocation(
                  this.program,
                  e[t]
                );
              }
            }),
            (n.prototype.cacheAttributeLocations = function (e) {
              for (let t = 0; t < e.length; ++t) {
                this.attributes[e[t]] = this.gl.getAttribLocation(
                  this.program,
                  e[t]
                );
              }
            }),
            (n.prototype.compile = function () {
              let e = this.gl,
                t = this._glCompile(e.VERTEX_SHADER, this.vertexSrc),
                i = this._glCompile(e.FRAGMENT_SHADER, this.fragmentSrc),
                n = e.createProgram();
              return (
                e.attachShader(n, t),
                e.attachShader(n, i),
                e.linkProgram(n),
                e.getProgramParameter(n, e.LINK_STATUS) ||
                  (console.error('Pixi.js Error: Could not initialize shader.'),
                  console.error(
                    'gl.VALIDATE_STATUS',
                    e.getProgramParameter(n, e.VALIDATE_STATUS)
                  ),
                  console.error('gl.getError()', e.getError()),
                  '' !== e.getProgramInfoLog(n) &&
                    console.warn(
                      'Pixi.js Warning: gl.getProgramInfoLog()',
                      e.getProgramInfoLog(n)
                    ),
                  e.deleteProgram(n),
                  (n = null)),
                e.deleteShader(t),
                e.deleteShader(i),
                (this.program = n)
              );
            }),
            (n.prototype.syncUniform = function (e) {
              let t,
                i,
                n = e._location,
                s = e.value,
                a = this.gl;
              switch (e.type) {
                case 'b':
                case 'bool':
                case 'boolean':
                  a.uniform1i(n, s ? 1 : 0);
                  break;
                case 'i':
                case '1i':
                  a.uniform1i(n, s);
                  break;
                case 'f':
                case '1f':
                  a.uniform1f(n, s);
                  break;
                case '2f':
                  a.uniform2f(n, s[0], s[1]);
                  break;
                case '3f':
                  a.uniform3f(n, s[0], s[1], s[2]);
                  break;
                case '4f':
                  a.uniform4f(n, s[0], s[1], s[2], s[3]);
                  break;
                case 'v2':
                  a.uniform2f(n, s.x, s.y);
                  break;
                case 'v3':
                  a.uniform3f(n, s.x, s.y, s.z);
                  break;
                case 'v4':
                  a.uniform4f(n, s.x, s.y, s.z, s.w);
                  break;
                case '1iv':
                  a.uniform1iv(n, s);
                  break;
                case '2iv':
                  a.uniform2iv(n, s);
                  break;
                case '3iv':
                  a.uniform3iv(n, s);
                  break;
                case '4iv':
                  a.uniform4iv(n, s);
                  break;
                case '1fv':
                  a.uniform1fv(n, s);
                  break;
                case '2fv':
                  a.uniform2fv(n, s);
                  break;
                case '3fv':
                  a.uniform3fv(n, s);
                  break;
                case '4fv':
                  a.uniform4fv(n, s);
                  break;
                case 'm2':
                case 'mat2':
                case 'Matrix2fv':
                  a.uniformMatrix2fv(n, e.transpose, s);
                  break;
                case 'm3':
                case 'mat3':
                case 'Matrix3fv':
                  a.uniformMatrix3fv(n, e.transpose, s);
                  break;
                case 'm4':
                case 'mat4':
                case 'Matrix4fv':
                  a.uniformMatrix4fv(n, e.transpose, s);
                  break;
                case 'c':
                  'number' == typeof s && (s = r.hex2rgb(s)),
                    a.uniform3f(n, s[0], s[1], s[2]);
                  break;
                case 'iv1':
                  a.uniform1iv(n, s);
                  break;
                case 'iv':
                  a.uniform3iv(n, s);
                  break;
                case 'fv1':
                  a.uniform1fv(n, s);
                  break;
                case 'fv':
                  a.uniform3fv(n, s);
                  break;
                case 'v2v':
                  for (
                    e._array || (e._array = new Float32Array(2 * s.length)),
                      t = 0,
                      i = s.length;
                    i > t;
                    ++t
                  ) {
                    (e._array[2 * t] = s[t].x), (e._array[2 * t + 1] = s[t].y);
                  }
                  a.uniform2fv(n, e._array);
                  break;
                case 'v3v':
                  for (
                    e._array || (e._array = new Float32Array(3 * s.length)),
                      t = 0,
                      i = s.length;
                    i > t;
                    ++t
                  ) {
                    (e._array[3 * t] = s[t].x),
                      (e._array[3 * t + 1] = s[t].y),
                      (e._array[3 * t + 2] = s[t].z);
                  }
                  a.uniform3fv(n, e._array);
                  break;
                case 'v4v':
                  for (
                    e._array || (e._array = new Float32Array(4 * s.length)),
                      t = 0,
                      i = s.length;
                    i > t;
                    ++t
                  ) {
                    (e._array[4 * t] = s[t].x),
                      (e._array[4 * t + 1] = s[t].y),
                      (e._array[4 * t + 2] = s[t].z),
                      (e._array[4 * t + 3] = s[t].w);
                  }
                  a.uniform4fv(n, e._array);
                  break;
                case 't':
                case 'sampler2D':
                  if (!e.value || !e.value.baseTexture.hasLoaded) {
                    break;
                  }
                  a.activeTexture(a['TEXTURE' + this.textureCount]);
                  var o = e.value.baseTexture._glTextures[a.id];
                  o ||
                    (this.initSampler2D(e),
                    (o = e.value.baseTexture._glTextures[a.id])),
                    a.bindTexture(a.TEXTURE_2D, o),
                    a.uniform1i(e._location, this.textureCount),
                    this.textureCount++;
                  break;
                default:
                  console.warn(
                    'Pixi.js Shader Warning: Unknown uniform type: ' + e.type
                  );
              }
            }),
            (n.prototype.syncUniforms = function () {
              this.textureCount = 1;
              for (const e in this.uniforms) {
                this.syncUniform(this.uniforms[e]);
              }
            }),
            (n.prototype.initSampler2D = function (e) {
              const t = this.gl,
                i = e.value.baseTexture;
              if (i.hasLoaded) {
                if (e.textureData) {
                  const n = e.textureData;
                  (i._glTextures[t.id] = t.createTexture()),
                    t.bindTexture(t.TEXTURE_2D, i._glTextures[t.id]),
                    t.pixelStorei(
                      t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                      i.premultipliedAlpha
                    ),
                    t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      n.luminance ? t.LUMINANCE : t.RGBA,
                      t.RGBA,
                      t.UNSIGNED_BYTE,
                      i.source
                    ),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_MAG_FILTER,
                      n.magFilter ? n.magFilter : t.LINEAR
                    ),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_MIN_FILTER,
                      n.wrapS ? n.wrapS : t.CLAMP_TO_EDGE
                    ),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_WRAP_T,
                      n.wrapS ? n.wrapS : t.CLAMP_TO_EDGE
                    ),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_WRAP_S,
                      n.wrapT ? n.wrapT : t.CLAMP_TO_EDGE
                    );
                } else {
                  this.shaderManager.renderer.updateTexture(i);
                }
              }
            }),
            (n.prototype.destroy = function () {
              this.gl.deleteProgram(this.program),
                (this.gl = null),
                (this.uniforms = null),
                (this.attributes = null),
                (this.vertexSrc = null),
                (this.fragmentSrc = null);
            }),
            (n.prototype._glCompile = function (e, t) {
              const i = this.gl.createShader(e);
              return (
                this.gl.shaderSource(i, t),
                this.gl.compileShader(i),
                this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS)
                  ? i
                  : (console.log(this.gl.getShaderInfoLog(i)), null)
              );
            });
        },
        { '../../../utils': 70 },
      ],
      55: [
        function (e, t, i) {
          function n(e, t, i, s, a) {
            const o = {
              uSampler: { type: 'sampler2D', value: 0 },
              projectionMatrix: {
                type: 'mat3',
                value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
              },
            };
            if (s) {
              for (const l in s) {
                o[l] = s[l];
              }
            }
            const h = { aVertexPosition: 0, aTextureCoord: 0, aColor: 0 };
            if (a) {
              for (const c in a) {
                h[c] = a[c];
              }
            }
            (t = t || n.defaultVertexSrc),
              (i = i || n.defaultFragmentSrc),
              r.call(this, e, t, i, o, h);
          }
          var r = e('./Shader');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.defaultVertexSrc = [
              'precision lowp float;',
              'attribute vec2 aVertexPosition;',
              'attribute vec2 aTextureCoord;',
              'attribute vec4 aColor;',
              'uniform mat3 projectionMatrix;',
              'varying vec2 vTextureCoord;',
              'varying vec4 vColor;',
              'void main(void){',
              '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
              '   vTextureCoord = aTextureCoord;',
              '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
              '}',
            ].join('\n')),
            (n.defaultFragmentSrc = [
              'precision lowp float;',
              'varying vec2 vTextureCoord;',
              'varying vec4 vColor;',
              'uniform sampler2D uSampler;',
              'void main(void){',
              '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
              '}',
            ].join('\n'));
        },
        { './Shader': 54 },
      ],
      56: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e);
          }
          var r = e('../managers/WebGLManager');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.start = function () {}),
            (n.prototype.stop = function () {
              this.flush();
            }),
            (n.prototype.flush = function () {}),
            (n.prototype.render = function (e) {});
        },
        { '../managers/WebGLManager': 51 },
      ],
      57: [
        function (e, t, i) {
          function n(e) {
            (this.gl = e),
              (this.vertices = new Float32Array([
                0, 0, 200, 0, 200, 200, 0, 200,
              ])),
              (this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
              (this.colors = new Float32Array([
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              ])),
              (this.indices = new Uint16Array([0, 1, 2, 0, 3, 2])),
              (this.vertexBuffer = e.createBuffer()),
              (this.indexBuffer = e.createBuffer()),
              e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
              e.bufferData(e.ARRAY_BUFFER, 128, e.DYNAMIC_DRAW),
              e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW),
              this.upload();
          }
          (n.prototype.constructor = n),
            (n.prototype.map = function (e, t) {
              let i = 0,
                n = 0;
              (this.uvs[0] = i),
                (this.uvs[1] = n),
                (this.uvs[2] = i + t.width / e.width),
                (this.uvs[3] = n),
                (this.uvs[4] = i + t.width / e.width),
                (this.uvs[5] = n + t.height / e.height),
                (this.uvs[6] = i),
                (this.uvs[7] = n + t.height / e.height),
                (i = t.x),
                (n = t.y),
                (this.vertices[0] = i),
                (this.vertices[1] = n),
                (this.vertices[2] = i + t.width),
                (this.vertices[3] = n),
                (this.vertices[4] = i + t.width),
                (this.vertices[5] = n + t.height),
                (this.vertices[6] = i),
                (this.vertices[7] = n + t.height),
                this.upload();
            }),
            (n.prototype.upload = function () {
              const e = this.gl;
              e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
                e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices),
                e.bufferSubData(e.ARRAY_BUFFER, 32, this.uvs),
                e.bufferSubData(e.ARRAY_BUFFER, 64, this.colors);
            }),
            (n.prototype.destroy = function () {
              const e = this.gl;
              e.deleteBuffer(this.vertexBuffer),
                e.deleteBuffer(this.indexBuffer);
            }),
            (t.exports = n);
        },
        {},
      ],
      58: [
        function (e, t, i) {
          const n = e('../../../math'),
            r = e('../../../utils'),
            s = e('../../../const'),
            a = e('./StencilMaskStack'),
            o = function (e, t, i, o, l, h) {
              if (
                ((this.gl = e),
                (this.frameBuffer = null),
                (this.texture = null),
                (this.size = new n.Rectangle(0, 0, 1, 1)),
                (this.resolution = l || s.RESOLUTION),
                (this.projectionMatrix = new n.Matrix()),
                (this.transform = null),
                (this.frame = null),
                (this.stencilBuffer = null),
                (this.stencilMaskStack = new a()),
                (this.filterStack = [
                  { renderTarget: this, filter: [], bounds: this.size },
                ]),
                (this.scaleMode = o || s.SCALE_MODES.DEFAULT),
                (this.root = h),
                !this.root)
              ) {
                (this.frameBuffer = e.createFramebuffer()),
                  (this.texture = e.createTexture()),
                  e.bindTexture(e.TEXTURE_2D, this.texture),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MAG_FILTER,
                    o === s.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST
                  ),
                  e.texParameteri(
                    e.TEXTURE_2D,
                    e.TEXTURE_MIN_FILTER,
                    o === s.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST
                  );
                const c = r.isPowerOfTwo(t, i);
                c
                  ? (e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    ))
                  : (e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    )),
                  e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.TEXTURE_2D,
                    this.texture,
                    0
                  );
              }
              this.resize(t, i);
            };
          (o.prototype.constructor = o),
            (t.exports = o),
            (o.prototype.clear = function (e) {
              const t = this.gl;
              e && t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer),
                t.clearColor(0, 0, 0, 0),
                t.clear(t.COLOR_BUFFER_BIT);
            }),
            (o.prototype.attachStencilBuffer = function () {
              if (!this.stencilBuffer && !this.root) {
                const e = this.gl;
                (this.stencilBuffer = e.createRenderbuffer()),
                  e.bindRenderbuffer(e.RENDERBUFFER, this.stencilBuffer),
                  e.framebufferRenderbuffer(
                    e.FRAMEBUFFER,
                    e.DEPTH_STENCIL_ATTACHMENT,
                    e.RENDERBUFFER,
                    this.stencilBuffer
                  ),
                  e.renderbufferStorage(
                    e.RENDERBUFFER,
                    e.DEPTH_STENCIL,
                    this.size.width * this.resolution,
                    this.size.height * this.resolution
                  );
              }
            }),
            (o.prototype.activate = function () {
              const e = this.gl;
              e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer);
              const t = this.frame || this.size;
              this.calculateProjection(t),
                this.transform && this.projectionMatrix.append(this.transform),
                e.viewport(
                  0,
                  0,
                  t.width * this.resolution,
                  t.height * this.resolution
                );
            }),
            (o.prototype.calculateProjection = function (e) {
              const t = this.projectionMatrix;
              t.identity(),
                this.root
                  ? ((t.a = (1 / e.width) * 2),
                    (t.d = (-1 / e.height) * 2),
                    (t.tx = -1 - e.x * t.a),
                    (t.ty = 1 - e.y * t.d))
                  : ((t.a = (1 / e.width) * 2),
                    (t.d = (1 / e.height) * 2),
                    (t.tx = -1 - e.x * t.a),
                    (t.ty = -1 - e.y * t.d));
            }),
            (o.prototype.resize = function (e, t) {
              if (
                ((e = 0 | e),
                (t = 0 | t),
                this.size.width !== e || this.size.height !== t)
              ) {
                if (
                  ((this.size.width = e), (this.size.height = t), !this.root)
                ) {
                  const i = this.gl;
                  i.bindTexture(i.TEXTURE_2D, this.texture),
                    i.texImage2D(
                      i.TEXTURE_2D,
                      0,
                      i.RGBA,
                      e * this.resolution,
                      t * this.resolution,
                      0,
                      i.RGBA,
                      i.UNSIGNED_BYTE,
                      null
                    ),
                    this.stencilBuffer &&
                      (i.bindRenderbuffer(i.RENDERBUFFER, this.stencilBuffer),
                      i.renderbufferStorage(
                        i.RENDERBUFFER,
                        i.DEPTH_STENCIL,
                        e * this.resolution,
                        t * this.resolution
                      ));
                }
                const n = this.frame || this.size;
                this.calculateProjection(n);
              }
            }),
            (o.prototype.destroy = function () {
              const e = this.gl;
              e.deleteRenderbuffer(this.stencilBuffer),
                e.deleteFramebuffer(this.frameBuffer),
                e.deleteTexture(this.texture),
                (this.frameBuffer = null),
                (this.texture = null);
            });
        },
        {
          '../../../const': 16,
          '../../../math': 26,
          '../../../utils': 70,
          './StencilMaskStack': 59,
        },
      ],
      59: [
        function (e, t, i) {
          function n() {
            (this.stencilStack = []), (this.reverse = !0), (this.count = 0);
          }
          (n.prototype.constructor = n), (t.exports = n);
        },
        {},
      ],
      60: [
        function (e, t, i) {
          function n(e) {
            a.call(this),
              (this.anchor = new r.Point()),
              (this._texture = null),
              (this._width = 0),
              (this._height = 0),
              (this.tint = 16777215),
              (this.blendMode = h.BLEND_MODES.NORMAL),
              (this.shader = null),
              (this.cachedTint = 16777215),
              (this.texture = e || s.EMPTY);
          }
          var r = e('../math'),
            s = e('../textures/Texture'),
            a = e('../display/Container'),
            o = e('../renderers/canvas/utils/CanvasTinter'),
            l = e('../utils'),
            h = e('../const'),
            c = new r.Point();
          (n.prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              width: {
                get: function () {
                  return Math.abs(this.scale.x) * this.texture._frame.width;
                },
                set: function (e) {
                  const t = l.sign(this.scale.x) || 1;
                  (this.scale.x = (t * e) / this.texture._frame.width),
                    (this._width = e);
                },
              },
              height: {
                get: function () {
                  return Math.abs(this.scale.y) * this.texture._frame.height;
                },
                set: function (e) {
                  const t = l.sign(this.scale.y) || 1;
                  (this.scale.y = (t * e) / this.texture._frame.height),
                    (this._height = e);
                },
              },
              texture: {
                get: function () {
                  return this._texture;
                },
                set: function (e) {
                  this._texture !== e &&
                    ((this._texture = e),
                    (this.cachedTint = 16777215),
                    e &&
                      (e.baseTexture.hasLoaded
                        ? this._onTextureUpdate()
                        : e.once('update', this._onTextureUpdate, this)));
                },
              },
            }),
            (n.prototype._onTextureUpdate = function () {
              this._width &&
                (this.scale.x =
                  (l.sign(this.scale.x) * this._width) /
                  this.texture.frame.width),
                this._height &&
                  (this.scale.y =
                    (l.sign(this.scale.y) * this._height) /
                    this.texture.frame.height);
            }),
            (n.prototype._renderWebGL = function (e) {
              e.setObjectRenderer(e.plugins.sprite),
                e.plugins.sprite.render(this);
            }),
            (n.prototype.getBounds = function (e) {
              if (!this._currentBounds) {
                let t,
                  i,
                  n,
                  r,
                  s = this._texture._frame.width,
                  a = this._texture._frame.height,
                  o = s * (1 - this.anchor.x),
                  l = s * -this.anchor.x,
                  h = a * (1 - this.anchor.y),
                  c = a * -this.anchor.y,
                  u = e || this.worldTransform,
                  d = u.a,
                  p = u.b,
                  f = u.c,
                  m = u.d,
                  g = u.tx,
                  y = u.ty,
                  v = d * l + f * c + g,
                  b = m * c + p * l + y,
                  x = d * o + f * c + g,
                  w = m * c + p * o + y,
                  _ = d * o + f * h + g,
                  T = m * h + p * o + y,
                  S = d * l + f * h + g,
                  C = m * h + p * l + y;
                if (
                  ((t = v),
                  (t = t > x ? x : t),
                  (t = t > _ ? _ : t),
                  (t = t > S ? S : t),
                  (n = b),
                  (n = n > w ? w : n),
                  (n = n > T ? T : n),
                  (n = n > C ? C : n),
                  (i = v),
                  (i = x > i ? x : i),
                  (i = _ > i ? _ : i),
                  (i = S > i ? S : i),
                  (r = b),
                  (r = w > r ? w : r),
                  (r = T > r ? T : r),
                  (r = C > r ? C : r),
                  this.children.length)
                ) {
                  const E = this.containerGetBounds();
                  (o = E.x),
                    (l = E.x + E.width),
                    (h = E.y),
                    (c = E.y + E.height),
                    (t = o > t ? t : o),
                    (n = h > n ? n : h),
                    (i = i > l ? i : l),
                    (r = r > c ? r : c);
                }
                const A = this._bounds;
                (A.x = t),
                  (A.width = i - t),
                  (A.y = n),
                  (A.height = r - n),
                  (this._currentBounds = A);
              }
              return this._currentBounds;
            }),
            (n.prototype.getLocalBounds = function () {
              return (
                (this._bounds.x = -this._texture._frame.width * this.anchor.x),
                (this._bounds.y = -this._texture._frame.height * this.anchor.y),
                (this._bounds.width = this._texture._frame.width),
                (this._bounds.height = this._texture._frame.height),
                this._bounds
              );
            }),
            (n.prototype.containsPoint = function (e) {
              this.worldTransform.applyInverse(e, c);
              let t,
                i = this._texture._frame.width,
                n = this._texture._frame.height,
                r = -i * this.anchor.x;
              return (
                c.x > r &&
                c.x < r + i &&
                ((t = -n * this.anchor.y), c.y > t && c.y < t + n)
              );
            }),
            (n.prototype._renderCanvas = function (e) {
              if (
                !(this.texture.crop.width <= 0 || this.texture.crop.height <= 0)
              ) {
                const t = e.blendModes[this.blendMode];
                if (
                  (t !== e.context.globalCompositeOperation &&
                    (e.context.globalCompositeOperation = t),
                  this.texture.valid)
                ) {
                  let i,
                    n,
                    r,
                    s,
                    a = this._texture,
                    l = this.worldTransform;
                  e.context.globalAlpha = this.worldAlpha;
                  const c = a.baseTexture.scaleMode === h.SCALE_MODES.LINEAR;
                  if (
                    (e.smoothProperty &&
                      e.context[e.smoothProperty] !== c &&
                      (e.context[e.smoothProperty] = c),
                    a.rotate)
                  ) {
                    (r = a.crop.height),
                      (s = a.crop.width),
                      (i = a.trim
                        ? a.trim.y - this.anchor.y * a.trim.height
                        : this.anchor.y * -a._frame.height),
                      (n = a.trim
                        ? a.trim.x - this.anchor.x * a.trim.width
                        : this.anchor.x * -a._frame.width),
                      (i += r),
                      (l.tx = n * l.a + i * l.c + l.tx),
                      (l.ty = n * l.b + i * l.d + l.ty);
                    let u = l.a;
                    (l.a = -l.c),
                      (l.c = u),
                      (u = l.b),
                      (l.b = -l.d),
                      (l.d = u),
                      (i = 0),
                      (n = 0);
                  } else {
                    (r = a.crop.width),
                      (s = a.crop.height),
                      (i = a.trim
                        ? a.trim.x - this.anchor.x * a.trim.width
                        : this.anchor.x * -a._frame.width),
                      (n = a.trim
                        ? a.trim.y - this.anchor.y * a.trim.height
                        : this.anchor.y * -a._frame.height);
                  }
                  e.roundPixels
                    ? (e.context.setTransform(
                        l.a,
                        l.b,
                        l.c,
                        l.d,
                        (l.tx * e.resolution) | 0,
                        (l.ty * e.resolution) | 0
                      ),
                      (i = 0 | i),
                      (n = 0 | n))
                    : e.context.setTransform(
                        l.a,
                        l.b,
                        l.c,
                        l.d,
                        l.tx * e.resolution,
                        l.ty * e.resolution
                      );
                  const d = a.baseTexture.resolution;
                  16777215 !== this.tint
                    ? (this.cachedTint !== this.tint &&
                        ((this.cachedTint = this.tint),
                        (this.tintedTexture = o.getTintedTexture(
                          this,
                          this.tint
                        ))),
                      e.context.drawImage(
                        this.tintedTexture,
                        0,
                        0,
                        r * d,
                        s * d,
                        i * e.resolution,
                        n * e.resolution,
                        r * e.resolution,
                        s * e.resolution
                      ))
                    : e.context.drawImage(
                        a.baseTexture.source,
                        a.crop.x * d,
                        a.crop.y * d,
                        r * d,
                        s * d,
                        i * e.resolution,
                        n * e.resolution,
                        r * e.resolution,
                        s * e.resolution
                      );
                }
              }
            }),
            (n.prototype.destroy = function (e, t) {
              a.prototype.destroy.call(this),
                (this.anchor = null),
                e && this._texture.destroy(t),
                (this._texture = null),
                (this.shader = null);
            }),
            (n.fromFrame = function (e) {
              const t = l.TextureCache[e];
              if (!t) {
                throw new Error(
                  'The frameId "' + e + '" does not exist in the texture cache'
                );
              }
              return new n(t);
            }),
            (n.fromImage = function (e, t, i) {
              return new n(s.fromImage(e, t, i));
            });
        },
        {
          '../const': 16,
          '../display/Container': 17,
          '../math': 26,
          '../renderers/canvas/utils/CanvasTinter': 41,
          '../textures/Texture': 65,
          '../utils': 70,
        },
      ],
      61: [
        function (e, t, i) {
          function n(e) {
            r.call(this, e),
              (this.vertSize = 5),
              (this.vertByteSize = 4 * this.vertSize),
              (this.size = a.SPRITE_BATCH_SIZE);
            const t = 4 * this.size * this.vertByteSize,
              i = 6 * this.size;
            (this.vertices = new ArrayBuffer(t)),
              (this.positions = new Float32Array(this.vertices)),
              (this.colors = new Uint32Array(this.vertices)),
              (this.indices = new Uint16Array(i));
            for (let n = 0, s = 0; i > n; n += 6, s += 4) {
              (this.indices[n + 0] = s + 0),
                (this.indices[n + 1] = s + 1),
                (this.indices[n + 2] = s + 2),
                (this.indices[n + 3] = s + 0),
                (this.indices[n + 4] = s + 2),
                (this.indices[n + 5] = s + 3);
            }
            (this.currentBatchSize = 0),
              (this.sprites = []),
              (this.shader = null);
          }
          var r = e('../../renderers/webgl/utils/ObjectRenderer'),
            s = e('../../renderers/webgl/WebGLRenderer'),
            a = e('../../const');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            s.registerPlugin('sprite', n),
            (n.prototype.onContextChange = function () {
              const e = this.renderer.gl;
              (this.shader = this.renderer.shaderManager.defaultShader),
                (this.vertexBuffer = e.createBuffer()),
                (this.indexBuffer = e.createBuffer()),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                e.bufferData(
                  e.ELEMENT_ARRAY_BUFFER,
                  this.indices,
                  e.STATIC_DRAW
                ),
                e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
                e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW),
                (this.currentBlendMode = 99999);
            }),
            (n.prototype.render = function (e) {
              const t = e._texture;
              this.currentBatchSize >= this.size && this.flush();
              const i = t._uvs;
              if (i) {
                let n,
                  r,
                  s,
                  a,
                  o = e.anchor.x,
                  l = e.anchor.y;
                if (t.trim && void 0 === e.tileScale) {
                  const h = t.trim;
                  (r = h.x - o * h.width),
                    (n = r + t.crop.width),
                    (a = h.y - l * h.height),
                    (s = a + t.crop.height);
                } else {
                  (n = t._frame.width * (1 - o)),
                    (r = t._frame.width * -o),
                    (s = t._frame.height * (1 - l)),
                    (a = t._frame.height * -l);
                }
                const c = this.currentBatchSize * this.vertByteSize,
                  u = e.worldTransform,
                  d = u.a,
                  p = u.b,
                  f = u.c,
                  m = u.d,
                  g = u.tx,
                  y = u.ty,
                  v = this.colors,
                  b = this.positions;
                if (this.renderer.roundPixels) {
                  const x = this.renderer.resolution;
                  (b[c] = (((d * r + f * a + g) * x) | 0) / x),
                    (b[c + 1] = (((m * a + p * r + y) * x) | 0) / x),
                    (b[c + 5] = (((d * n + f * a + g) * x) | 0) / x),
                    (b[c + 6] = (((m * a + p * n + y) * x) | 0) / x),
                    (b[c + 10] = (((d * n + f * s + g) * x) | 0) / x),
                    (b[c + 11] = (((m * s + p * n + y) * x) | 0) / x),
                    (b[c + 15] = (((d * r + f * s + g) * x) | 0) / x),
                    (b[c + 16] = (((m * s + p * r + y) * x) | 0) / x);
                } else {
                  (b[c] = d * r + f * a + g),
                    (b[c + 1] = m * a + p * r + y),
                    (b[c + 5] = d * n + f * a + g),
                    (b[c + 6] = m * a + p * n + y),
                    (b[c + 10] = d * n + f * s + g),
                    (b[c + 11] = m * s + p * n + y),
                    (b[c + 15] = d * r + f * s + g),
                    (b[c + 16] = m * s + p * r + y);
                }
                (b[c + 2] = i.x0),
                  (b[c + 3] = i.y0),
                  (b[c + 7] = i.x1),
                  (b[c + 8] = i.y1),
                  (b[c + 12] = i.x2),
                  (b[c + 13] = i.y2),
                  (b[c + 17] = i.x3),
                  (b[c + 18] = i.y3);
                const w = e.tint;
                (v[c + 4] =
                  v[c + 9] =
                  v[c + 14] =
                  v[c + 19] =
                    (w >> 16) +
                    (65280 & w) +
                    ((255 & w) << 16) +
                    ((255 * e.worldAlpha) << 24)),
                  (this.sprites[this.currentBatchSize++] = e);
              }
            }),
            (n.prototype.flush = function () {
              if (0 !== this.currentBatchSize) {
                let e,
                  t = this.renderer.gl;
                if (this.currentBatchSize > 0.5 * this.size) {
                  t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices);
                } else {
                  const i = this.positions.subarray(
                    0,
                    this.currentBatchSize * this.vertByteSize
                  );
                  t.bufferSubData(t.ARRAY_BUFFER, 0, i);
                }
                for (
                  var n,
                    r,
                    s,
                    a,
                    o = 0,
                    l = 0,
                    h = null,
                    c = this.renderer.blendModeManager.currentBlendMode,
                    u = null,
                    d = !1,
                    p = !1,
                    f = 0,
                    m = this.currentBatchSize;
                  m > f;
                  f++
                ) {
                  (a = this.sprites[f]),
                    (n = a._texture.baseTexture),
                    (r = a.blendMode),
                    (s = a.shader || this.shader),
                    (d = c !== r),
                    (p = u !== s),
                    (h !== n || d || p) &&
                      (this.renderBatch(h, o, l),
                      (l = f),
                      (o = 0),
                      (h = n),
                      d &&
                        ((c = r),
                        this.renderer.blendModeManager.setBlendMode(c)),
                      p &&
                        ((u = s),
                        (e = u.shaders ? u.shaders[t.id] : u),
                        e || (e = u.getShader(this.renderer)),
                        this.renderer.shaderManager.setShader(e),
                        (e.uniforms.projectionMatrix.value =
                          this.renderer.currentRenderTarget.projectionMatrix.toArray(
                            !0
                          )),
                        e.syncUniforms(),
                        t.activeTexture(t.TEXTURE0))),
                    o++;
                }
                this.renderBatch(h, o, l), (this.currentBatchSize = 0);
              }
            }),
            (n.prototype.renderBatch = function (e, t, i) {
              if (0 !== t) {
                const n = this.renderer.gl;
                e._glTextures[n.id]
                  ? n.bindTexture(n.TEXTURE_2D, e._glTextures[n.id])
                  : this.renderer.updateTexture(e),
                  n.drawElements(
                    n.TRIANGLES,
                    6 * t,
                    n.UNSIGNED_SHORT,
                    6 * i * 2
                  ),
                  this.renderer.drawCount++;
              }
            }),
            (n.prototype.start = function () {
              const e = this.renderer.gl;
              e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
              const t = this.vertByteSize;
              e.vertexAttribPointer(
                this.shader.attributes.aVertexPosition,
                2,
                e.FLOAT,
                !1,
                t,
                0
              ),
                e.vertexAttribPointer(
                  this.shader.attributes.aTextureCoord,
                  2,
                  e.FLOAT,
                  !1,
                  t,
                  8
                ),
                e.vertexAttribPointer(
                  this.shader.attributes.aColor,
                  4,
                  e.UNSIGNED_BYTE,
                  !0,
                  t,
                  16
                );
            }),
            (n.prototype.destroy = function () {
              this.renderer.gl.deleteBuffer(this.vertexBuffer),
                this.renderer.gl.deleteBuffer(this.indexBuffer),
                r.prototype.destroy.call(this),
                this.shader.destroy(),
                (this.renderer = null),
                (this.vertices = null),
                (this.positions = null),
                (this.colors = null),
                (this.indices = null),
                (this.vertexBuffer = null),
                (this.indexBuffer = null),
                (this.sprites = null),
                (this.shader = null);
            });
        },
        {
          '../../const': 16,
          '../../renderers/webgl/WebGLRenderer': 42,
          '../../renderers/webgl/utils/ObjectRenderer': 56,
        },
      ],
      62: [
        function (e, t, i) {
          function n(e, t, i) {
            (this.canvas = document.createElement('canvas')),
              (this.context = this.canvas.getContext('2d')),
              (this.resolution = i || l.RESOLUTION),
              (this._text = null),
              (this._style = null);
            const n = s.fromCanvas(this.canvas);
            (n.trim = new a.Rectangle()),
              r.call(this, n),
              (this.text = e),
              (this.style = t);
          }
          var r = e('../sprites/Sprite'),
            s = e('../textures/Texture'),
            a = e('../math'),
            o = e('../utils'),
            l = e('../const');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.fontPropertiesCache = {}),
            (n.fontPropertiesCanvas = document.createElement('canvas')),
            (n.fontPropertiesContext = n.fontPropertiesCanvas.getContext('2d')),
            Object.defineProperties(n.prototype, {
              width: {
                get: function () {
                  return (
                    this.dirty && this.updateText(),
                    this.scale.x * this._texture._frame.width
                  );
                },
                set: function (e) {
                  (this.scale.x = e / this._texture._frame.width),
                    (this._width = e);
                },
              },
              height: {
                get: function () {
                  return (
                    this.dirty && this.updateText(),
                    this.scale.y * this._texture._frame.height
                  );
                },
                set: function (e) {
                  (this.scale.y = e / this._texture._frame.height),
                    (this._height = e);
                },
              },
              style: {
                get: function () {
                  return this._style;
                },
                set: function (e) {
                  (e = e || {}),
                    'number' == typeof e.fill &&
                      (e.fill = o.hex2string(e.fill)),
                    'number' == typeof e.stroke &&
                      (e.stroke = o.hex2string(e.stroke)),
                    'number' == typeof e.dropShadowColor &&
                      (e.dropShadowColor = o.hex2string(e.dropShadowColor)),
                    (e.font = e.font || 'bold 20pt Arial'),
                    (e.fill = e.fill || 'black'),
                    (e.align = e.align || 'left'),
                    (e.stroke = e.stroke || 'black'),
                    (e.strokeThickness = e.strokeThickness || 0),
                    (e.wordWrap = e.wordWrap || !1),
                    (e.wordWrapWidth = e.wordWrapWidth || 100),
                    (e.dropShadow = e.dropShadow || !1),
                    (e.dropShadowColor = e.dropShadowColor || '#000000'),
                    (e.dropShadowAngle =
                      void 0 !== e.dropShadowAngle
                        ? e.dropShadowAngle
                        : Math.PI / 6),
                    (e.dropShadowDistance =
                      void 0 !== e.dropShadowDistance
                        ? e.dropShadowDistance
                        : 5),
                    (e.dropShadowBlur =
                      void 0 !== e.dropShadowBlur ? e.dropShadowBlur : 0),
                    (e.padding = e.padding || 0),
                    (e.textBaseline = e.textBaseline || 'alphabetic'),
                    (e.lineJoin = e.lineJoin || 'miter'),
                    (e.miterLimit = e.miterLimit || 10),
                    (this._style = e),
                    (this.dirty = !0);
                },
              },
              text: {
                get: function () {
                  return this._text;
                },
                set: function (e) {
                  (e = e.toString() || ' '),
                    this._text !== e && ((this._text = e), (this.dirty = !0));
                },
              },
            }),
            (n.prototype.updateText = function () {
              const e = this._style;
              this.context.font = e.font;
              for (
                var t = e.wordWrap ? this.wordWrap(this._text) : this._text,
                  i = t.split(/(?:\r\n|\r|\n)/),
                  n = new Array(i.length),
                  r = 0,
                  s = this.determineFontProperties(e.font),
                  a = 0;
                a < i.length;
                a++
              ) {
                const o = this.context.measureText(i[a]).width;
                (n[a] = o), (r = Math.max(r, o));
              }
              let l = r + e.strokeThickness;
              e.dropShadow && (l += e.dropShadowDistance),
                (this.canvas.width =
                  (l + this.context.lineWidth) * this.resolution);
              let h = this.style.lineHeight || s.fontSize + e.strokeThickness,
                c = h * i.length;
              e.dropShadow && (c += e.dropShadowDistance),
                (this.canvas.height =
                  (c + 2 * this._style.padding) * this.resolution),
                this.context.scale(this.resolution, this.resolution),
                navigator.isCocoonJS &&
                  this.context.clearRect(
                    0,
                    0,
                    this.canvas.width,
                    this.canvas.height
                  ),
                (this.context.font = e.font),
                (this.context.strokeStyle = e.stroke),
                (this.context.lineWidth = e.strokeThickness),
                (this.context.textBaseline = e.textBaseline),
                (this.context.lineJoin = e.lineJoin),
                (this.context.miterLimit = e.miterLimit);
              let u, d;
              if (e.dropShadow) {
                e.dropShadowBlur > 0
                  ? ((this.context.shadowColor = e.dropShadowColor),
                    (this.context.shadowBlur = e.dropShadowBlur))
                  : (this.context.fillStyle = e.dropShadowColor);
                const p = Math.cos(e.dropShadowAngle) * e.dropShadowDistance,
                  f = Math.sin(e.dropShadowAngle) * e.dropShadowDistance;
                for (a = 0; a < i.length; a++) {
                  (u = e.strokeThickness / 2),
                    (d = e.strokeThickness / 2 + a * h + s.ascent),
                    'right' === e.align
                      ? (u += r - n[a])
                      : 'center' === e.align && (u += (r - n[a]) / 2),
                    e.fill &&
                      this.context.fillText(
                        i[a],
                        u + p,
                        d + f + this._style.padding
                      );
                }
              }
              for (this.context.fillStyle = e.fill, a = 0; a < i.length; a++) {
                (u = e.strokeThickness / 2),
                  (d = e.strokeThickness / 2 + a * h + s.ascent),
                  'right' === e.align
                    ? (u += r - n[a])
                    : 'center' === e.align && (u += (r - n[a]) / 2),
                  e.stroke &&
                    e.strokeThickness &&
                    this.context.strokeText(i[a], u, d + this._style.padding),
                  e.fill &&
                    this.context.fillText(i[a], u, d + this._style.padding);
              }
              this.updateTexture();
            }),
            (n.prototype.updateTexture = function () {
              const e = this._texture;
              (e.baseTexture.hasLoaded = !0),
                (e.baseTexture.resolution = this.resolution),
                (e.baseTexture.width = this.canvas.width / this.resolution),
                (e.baseTexture.height = this.canvas.height / this.resolution),
                (e.crop.width = e._frame.width =
                  this.canvas.width / this.resolution),
                (e.crop.height = e._frame.height =
                  this.canvas.height / this.resolution),
                (e.trim.x = 0),
                (e.trim.y = -this._style.padding),
                (e.trim.width = e._frame.width),
                (e.trim.height = e._frame.height - 2 * this._style.padding),
                (this._width = this.canvas.width / this.resolution),
                (this._height = this.canvas.height / this.resolution),
                e.baseTexture.emit('update', e.baseTexture),
                (this.dirty = !1);
            }),
            (n.prototype.renderWebGL = function (e) {
              this.dirty && this.updateText(),
                r.prototype.renderWebGL.call(this, e);
            }),
            (n.prototype._renderCanvas = function (e) {
              this.dirty && this.updateText(),
                r.prototype._renderCanvas.call(this, e);
            }),
            (n.prototype.determineFontProperties = function (e) {
              let t = n.fontPropertiesCache[e];
              if (!t) {
                t = {};
                const i = n.fontPropertiesCanvas,
                  r = n.fontPropertiesContext;
                r.font = e;
                let s = Math.ceil(r.measureText('|MÉq').width),
                  a = Math.ceil(r.measureText('M').width),
                  o = 2 * a;
                (a = (1.4 * a) | 0),
                  (i.width = s),
                  (i.height = o),
                  (r.fillStyle = '#f00'),
                  r.fillRect(0, 0, s, o),
                  (r.font = e),
                  (r.textBaseline = 'alphabetic'),
                  (r.fillStyle = '#000'),
                  r.fillText('|MÉq', 0, a);
                let l,
                  h,
                  c = r.getImageData(0, 0, s, o).data,
                  u = c.length,
                  d = 4 * s,
                  p = 0,
                  f = !1;
                for (l = 0; a > l; l++) {
                  for (h = 0; d > h; h += 4) {
                    if (255 !== c[p + h]) {
                      f = !0;
                      break;
                    }
                  }
                  if (f) {
                    break;
                  }
                  p += d;
                }
                for (t.ascent = a - l, p = u - d, f = !1, l = o; l > a; l--) {
                  for (h = 0; d > h; h += 4) {
                    if (255 !== c[p + h]) {
                      f = !0;
                      break;
                    }
                  }
                  if (f) {
                    break;
                  }
                  p -= d;
                }
                (t.descent = l - a),
                  (t.fontSize = t.ascent + t.descent),
                  (n.fontPropertiesCache[e] = t);
              }
              return t;
            }),
            (n.prototype.wordWrap = function (e) {
              for (
                var t = '',
                  i = e.split('\n'),
                  n = this._style.wordWrapWidth,
                  r = 0;
                r < i.length;
                r++
              ) {
                for (let s = n, a = i[r].split(' '), o = 0; o < a.length; o++) {
                  const l = this.context.measureText(a[o]).width,
                    h = l + this.context.measureText(' ').width;
                  0 === o || h > s
                    ? (o > 0 && (t += '\n'), (t += a[o]), (s = n - l))
                    : ((s -= h), (t += ' ' + a[o]));
                }
                r < i.length - 1 && (t += '\n');
              }
              return t;
            }),
            (n.prototype.getBounds = function (e) {
              return (
                this.dirty && this.updateText(),
                r.prototype.getBounds.call(this, e)
              );
            }),
            (n.prototype.destroy = function (e) {
              (this.context = null),
                (this.canvas = null),
                (this._style = null),
                this._texture.destroy(void 0 === e ? !0 : e);
            });
        },
        {
          '../const': 16,
          '../math': 26,
          '../sprites/Sprite': 60,
          '../textures/Texture': 65,
          '../utils': 70,
        },
      ],
      63: [
        function (e, t, i) {
          function n(e, t, i) {
            a.call(this),
              (this.uid = r.uid()),
              (this.resolution = i || 1),
              (this.width = 100),
              (this.height = 100),
              (this.realWidth = 100),
              (this.realHeight = 100),
              (this.scaleMode = t || s.SCALE_MODES.DEFAULT),
              (this.hasLoaded = !1),
              (this.isLoading = !1),
              (this.source = null),
              (this.premultipliedAlpha = !0),
              (this.imageUrl = null),
              (this.isPowerOfTwo = !1),
              (this.mipmap = !1),
              (this._glTextures = {}),
              e && this.loadSource(e);
          }
          var r = e('../utils'),
            s = e('../const'),
            a = e('eventemitter3');
          (n.prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.update = function () {
              (this.realWidth = this.source.naturalWidth || this.source.width),
                (this.realHeight =
                  this.source.naturalHeight || this.source.height),
                (this.width = this.realWidth / this.resolution),
                (this.height = this.realHeight / this.resolution),
                (this.isPowerOfTwo = r.isPowerOfTwo(
                  this.realWidth,
                  this.realHeight
                )),
                this.emit('update', this);
            }),
            (n.prototype.loadSource = function (e) {
              const t = this.isLoading;
              if (
                ((this.hasLoaded = !1),
                (this.isLoading = !1),
                t &&
                  this.source &&
                  ((this.source.onload = null), (this.source.onerror = null)),
                (this.source = e),
                (this.source.complete || this.source.getContext) &&
                  this.source.width &&
                  this.source.height)
              ) {
                this._sourceLoaded();
              } else if (!e.getContext) {
                this.isLoading = !0;
                const i = this;
                (e.onload = function () {
                  (e.onload = null),
                    (e.onerror = null),
                    i.isLoading &&
                      ((i.isLoading = !1),
                      i._sourceLoaded(),
                      i.emit('loaded', i));
                }),
                  (e.onerror = function () {
                    (e.onload = null),
                      (e.onerror = null),
                      i.isLoading && ((i.isLoading = !1), i.emit('error', i));
                  }),
                  e.complete &&
                    e.src &&
                    ((this.isLoading = !1),
                    (e.onload = null),
                    (e.onerror = null),
                    e.width && e.height
                      ? (this._sourceLoaded(), t && this.emit('loaded', this))
                      : t && this.emit('error', this));
              }
            }),
            (n.prototype._sourceLoaded = function () {
              (this.hasLoaded = !0), this.update();
            }),
            (n.prototype.destroy = function () {
              this.imageUrl
                ? (delete r.BaseTextureCache[this.imageUrl],
                  delete r.TextureCache[this.imageUrl],
                  (this.imageUrl = null),
                  navigator.isCocoonJS || (this.source.src = ''))
                : this.source &&
                  this.source._pixiId &&
                  delete r.BaseTextureCache[this.source._pixiId],
                (this.source = null),
                this.dispose();
            }),
            (n.prototype.dispose = function () {
              this.emit('dispose', this);
            }),
            (n.prototype.updateSourceImage = function (e) {
              (this.source.src = e), this.loadSource(this.source);
            }),
            (n.fromImage = function (e, t, i) {
              let s = r.BaseTextureCache[e];
              if ((void 0 === t && 0 !== e.indexOf('data:') && (t = !0), !s)) {
                const a = new Image();
                t && (a.crossOrigin = ''),
                  (s = new n(a, i)),
                  (s.imageUrl = e),
                  (a.src = e),
                  (r.BaseTextureCache[e] = s),
                  (s.resolution = r.getResolutionOfUrl(e));
              }
              return s;
            }),
            (n.fromCanvas = function (e, t) {
              e._pixiId || (e._pixiId = 'canvas_' + r.uid());
              let i = r.BaseTextureCache[e._pixiId];
              return (
                i || ((i = new n(e, t)), (r.BaseTextureCache[e._pixiId] = i)), i
              );
            });
        },
        { '../const': 16, '../utils': 70, eventemitter3: 10 },
      ],
      64: [
        function (e, t, i) {
          function n(e, t, i, n, u) {
            if (!e) {
              throw new Error(
                'Unable to create RenderTexture, you must pass a renderer into the constructor.'
              );
            }
            (t = t || 100), (i = i || 100), (u = u || c.RESOLUTION);
            const d = new r();
            if (
              ((d.width = t),
              (d.height = i),
              (d.resolution = u),
              (d.scaleMode = n || c.SCALE_MODES.DEFAULT),
              (d.hasLoaded = !0),
              s.call(this, d, new h.Rectangle(0, 0, t, i)),
              (this.width = t),
              (this.height = i),
              (this.resolution = u),
              (this.render = null),
              (this.renderer = e),
              this.renderer.type === c.RENDERER_TYPE.WEBGL)
            ) {
              const p = this.renderer.gl;
              (this.textureBuffer = new a(
                p,
                this.width,
                this.height,
                d.scaleMode,
                this.resolution
              )),
                (this.baseTexture._glTextures[p.id] =
                  this.textureBuffer.texture),
                (this.filterManager = new o(this.renderer)),
                this.filterManager.onContextChange(),
                this.filterManager.resize(t, i),
                (this.render = this.renderWebGL),
                this.renderer.currentRenderer.start(),
                this.renderer.currentRenderTarget.activate();
            } else {
              (this.render = this.renderCanvas),
                (this.textureBuffer = new l(
                  this.width * this.resolution,
                  this.height * this.resolution
                )),
                (this.baseTexture.source = this.textureBuffer.canvas);
            }
            (this.valid = !0), this._updateUvs();
          }
          var r = e('./BaseTexture'),
            s = e('./Texture'),
            a = e('../renderers/webgl/utils/RenderTarget'),
            o = e('../renderers/webgl/managers/FilterManager'),
            l = e('../renderers/canvas/utils/CanvasBuffer'),
            h = e('../math'),
            c = e('../const'),
            u = new h.Matrix();
          (n.prototype = Object.create(s.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.resize = function (e, t, i) {
              (e === this.width && t === this.height) ||
                ((this.valid = e > 0 && t > 0),
                (this.width = this._frame.width = this.crop.width = e),
                (this.height = this._frame.height = this.crop.height = t),
                i &&
                  ((this.baseTexture.width = this.width),
                  (this.baseTexture.height = this.height)),
                this.valid &&
                  (this.textureBuffer.resize(this.width, this.height),
                  this.filterManager &&
                    this.filterManager.resize(this.width, this.height)));
            }),
            (n.prototype.clear = function () {
              this.valid &&
                (this.renderer.type === c.RENDERER_TYPE.WEBGL &&
                  this.renderer.gl.bindFramebuffer(
                    this.renderer.gl.FRAMEBUFFER,
                    this.textureBuffer.frameBuffer
                  ),
                this.textureBuffer.clear());
            }),
            (n.prototype.renderWebGL = function (e, t, i, n) {
              if (this.valid) {
                if (
                  ((n = void 0 !== n ? n : !0),
                  (this.textureBuffer.transform = t),
                  this.textureBuffer.activate(),
                  (e.worldAlpha = 1),
                  n)
                ) {
                  e.worldTransform.identity(), (e.currentBounds = null);
                  let r,
                    s,
                    a = e.children;
                  for (r = 0, s = a.length; s > r; ++r) {
                    a[r].updateTransform();
                  }
                }
                const o = this.renderer.filterManager;
                (this.renderer.filterManager = this.filterManager),
                  this.renderer.renderDisplayObject(e, this.textureBuffer, i),
                  (this.renderer.filterManager = o);
              }
            }),
            (n.prototype.renderCanvas = function (e, t, i, n) {
              if (this.valid) {
                n = !!n;
                const r = u;
                r.identity(), t && r.append(t);
                const s = e.worldTransform;
                (e.worldTransform = r), (e.worldAlpha = 1);
                let a,
                  o,
                  l = e.children;
                for (a = 0, o = l.length; o > a; ++a) {
                  l[a].updateTransform();
                }
                i && this.textureBuffer.clear();
                const h = this.textureBuffer.context,
                  c = this.renderer.resolution;
                (this.renderer.resolution = this.resolution),
                  this.renderer.renderDisplayObject(e, h),
                  (this.renderer.resolution = c),
                  e.worldTransform === r && (e.worldTransform = s);
              }
            }),
            (n.prototype.destroy = function () {
              s.prototype.destroy.call(this, !0),
                this.textureBuffer.destroy(),
                this.filterManager && this.filterManager.destroy(),
                (this.renderer = null);
            }),
            (n.prototype.getImage = function () {
              const e = new Image();
              return (e.src = this.getBase64()), e;
            }),
            (n.prototype.getBase64 = function () {
              return this.getCanvas().toDataURL();
            }),
            (n.prototype.getCanvas = function () {
              if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
                const e = this.renderer.gl,
                  t = this.textureBuffer.size.width,
                  i = this.textureBuffer.size.height,
                  n = new Uint8Array(4 * t * i);
                e.bindFramebuffer(
                  e.FRAMEBUFFER,
                  this.textureBuffer.frameBuffer
                ),
                  e.readPixels(0, 0, t, i, e.RGBA, e.UNSIGNED_BYTE, n),
                  e.bindFramebuffer(e.FRAMEBUFFER, null);
                const r = new l(t, i),
                  s = r.context.getImageData(0, 0, t, i);
                return s.data.set(n), r.context.putImageData(s, 0, 0), r.canvas;
              }
              return this.textureBuffer.canvas;
            }),
            (n.prototype.getPixels = function () {
              let e, t;
              if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
                const i = this.renderer.gl;
                (e = this.textureBuffer.size.width),
                  (t = this.textureBuffer.size.height);
                const n = new Uint8Array(4 * e * t);
                return (
                  i.bindFramebuffer(
                    i.FRAMEBUFFER,
                    this.textureBuffer.frameBuffer
                  ),
                  i.readPixels(0, 0, e, t, i.RGBA, i.UNSIGNED_BYTE, n),
                  i.bindFramebuffer(i.FRAMEBUFFER, null),
                  n
                );
              }
              return (
                (e = this.textureBuffer.canvas.width),
                (t = this.textureBuffer.canvas.height),
                this.textureBuffer.canvas
                  .getContext('2d')
                  .getImageData(0, 0, e, t).data
              );
            }),
            (n.prototype.getPixel = function (e, t) {
              if (this.renderer.type === c.RENDERER_TYPE.WEBGL) {
                const i = this.renderer.gl,
                  n = new Uint8Array(4);
                return (
                  i.bindFramebuffer(
                    i.FRAMEBUFFER,
                    this.textureBuffer.frameBuffer
                  ),
                  i.readPixels(e, t, 1, 1, i.RGBA, i.UNSIGNED_BYTE, n),
                  i.bindFramebuffer(i.FRAMEBUFFER, null),
                  n
                );
              }
              return this.textureBuffer.canvas
                .getContext('2d')
                .getImageData(e, t, 1, 1).data;
            });
        },
        {
          '../const': 16,
          '../math': 26,
          '../renderers/canvas/utils/CanvasBuffer': 38,
          '../renderers/webgl/managers/FilterManager': 47,
          '../renderers/webgl/utils/RenderTarget': 58,
          './BaseTexture': 63,
          './Texture': 65,
        },
      ],
      65: [
        function (e, t, i) {
          function n(e, t, i, r, s) {
            o.call(this),
              (this.noFrame = !1),
              t || ((this.noFrame = !0), (t = new l.Rectangle(0, 0, 1, 1))),
              e instanceof n && (e = e.baseTexture),
              (this.baseTexture = e),
              (this._frame = t),
              (this.trim = r),
              (this.valid = !1),
              (this.requiresUpdate = !1),
              (this._uvs = null),
              (this.width = 0),
              (this.height = 0),
              (this.crop = i || t),
              (this.rotate = !!s),
              e.hasLoaded
                ? (this.noFrame &&
                    ((t = new l.Rectangle(0, 0, e.width, e.height)),
                    e.on('update', this.onBaseTextureUpdated, this)),
                  (this.frame = t))
                : e.once('loaded', this.onBaseTextureLoaded, this);
          }
          var r = e('./BaseTexture'),
            s = e('./VideoBaseTexture'),
            a = e('./TextureUvs'),
            o = e('eventemitter3'),
            l = e('../math'),
            h = e('../utils');
          (n.prototype = Object.create(o.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              frame: {
                get: function () {
                  return this._frame;
                },
                set: function (e) {
                  if (
                    ((this._frame = e),
                    (this.noFrame = !1),
                    (this.width = e.width),
                    (this.height = e.height),
                    !this.trim &&
                      !this.rotate &&
                      (e.x + e.width > this.baseTexture.width ||
                        e.y + e.height > this.baseTexture.height))
                  ) {
                    throw new Error(
                      'Texture Error: frame does not fit inside the base Texture dimensions ' +
                        this
                    );
                  }
                  (this.valid =
                    e && e.width && e.height && this.baseTexture.hasLoaded),
                    this.trim
                      ? ((this.width = this.trim.width),
                        (this.height = this.trim.height),
                        (this._frame.width = this.trim.width),
                        (this._frame.height = this.trim.height))
                      : (this.crop = e),
                    this.valid && this._updateUvs();
                },
              },
            }),
            (n.prototype.update = function () {
              this.baseTexture.update();
            }),
            (n.prototype.onBaseTextureLoaded = function (e) {
              this.noFrame
                ? (this.frame = new l.Rectangle(0, 0, e.width, e.height))
                : (this.frame = this._frame),
                this.emit('update', this);
            }),
            (n.prototype.onBaseTextureUpdated = function (e) {
              (this._frame.width = e.width),
                (this._frame.height = e.height),
                this.emit('update', this);
            }),
            (n.prototype.destroy = function (e) {
              this.baseTexture &&
                (e && this.baseTexture.destroy(),
                this.baseTexture.off('update', this.onBaseTextureUpdated, this),
                this.baseTexture.off('loaded', this.onBaseTextureLoaded, this),
                (this.baseTexture = null)),
                (this._frame = null),
                (this._uvs = null),
                (this.trim = null),
                (this.crop = null),
                (this.valid = !1),
                this.off('dispose', this.dispose, this),
                this.off('update', this.update, this);
            }),
            (n.prototype.clone = function () {
              return new n(
                this.baseTexture,
                this.frame,
                this.crop,
                this.trim,
                this.rotate
              );
            }),
            (n.prototype._updateUvs = function () {
              this._uvs || (this._uvs = new a()),
                this._uvs.set(this.crop, this.baseTexture, this.rotate);
            }),
            (n.fromImage = function (e, t, i) {
              let s = h.TextureCache[e];
              return (
                s ||
                  ((s = new n(r.fromImage(e, t, i))), (h.TextureCache[e] = s)),
                s
              );
            }),
            (n.fromFrame = function (e) {
              const t = h.TextureCache[e];
              if (!t) {
                throw new Error(
                  'The frameId "' + e + '" does not exist in the texture cache'
                );
              }
              return t;
            }),
            (n.fromCanvas = function (e, t) {
              return new n(r.fromCanvas(e, t));
            }),
            (n.fromVideo = function (e, t) {
              return 'string' == typeof e
                ? n.fromVideoUrl(e, t)
                : new n(s.fromVideo(e, t));
            }),
            (n.fromVideoUrl = function (e, t) {
              return new n(s.fromUrl(e, t));
            }),
            (n.addTextureToCache = function (e, t) {
              h.TextureCache[t] = e;
            }),
            (n.removeTextureFromCache = function (e) {
              const t = h.TextureCache[e];
              return delete h.TextureCache[e], delete h.BaseTextureCache[e], t;
            }),
            (n.EMPTY = new n(new r()));
        },
        {
          '../math': 26,
          '../utils': 70,
          './BaseTexture': 63,
          './TextureUvs': 66,
          './VideoBaseTexture': 67,
          eventemitter3: 10,
        },
      ],
      66: [
        function (e, t, i) {
          function n() {
            (this.x0 = 0),
              (this.y0 = 0),
              (this.x1 = 1),
              (this.y1 = 0),
              (this.x2 = 1),
              (this.y2 = 1),
              (this.x3 = 0),
              (this.y3 = 1);
          }
          (t.exports = n),
            (n.prototype.set = function (e, t, i) {
              const n = t.width,
                r = t.height;
              i
                ? ((this.x0 = (e.x + e.height) / n),
                  (this.y0 = e.y / r),
                  (this.x1 = (e.x + e.height) / n),
                  (this.y1 = (e.y + e.width) / r),
                  (this.x2 = e.x / n),
                  (this.y2 = (e.y + e.width) / r),
                  (this.x3 = e.x / n),
                  (this.y3 = e.y / r))
                : ((this.x0 = e.x / n),
                  (this.y0 = e.y / r),
                  (this.x1 = (e.x + e.width) / n),
                  (this.y1 = e.y / r),
                  (this.x2 = (e.x + e.width) / n),
                  (this.y2 = (e.y + e.height) / r),
                  (this.x3 = e.x / n),
                  (this.y3 = (e.y + e.height) / r));
            });
        },
        {},
      ],
      67: [
        function (e, t, i) {
          function n(e, t) {
            if (!e) {
              throw new Error('No video source element specified.');
            }
            (e.readyState === e.HAVE_ENOUGH_DATA ||
              e.readyState === e.HAVE_FUTURE_DATA) &&
              e.width &&
              e.height &&
              (e.complete = !0),
              s.call(this, e, t),
              (this.autoUpdate = !1),
              (this._onUpdate = this._onUpdate.bind(this)),
              (this._onCanPlay = this._onCanPlay.bind(this)),
              e.complete ||
                (e.addEventListener('canplay', this._onCanPlay),
                e.addEventListener('canplaythrough', this._onCanPlay),
                e.addEventListener('play', this._onPlayStart.bind(this)),
                e.addEventListener('pause', this._onPlayStop.bind(this))),
              (this.__loaded = !1);
          }
          function r(e, t) {
            t || (t = 'video/' + e.substr(e.lastIndexOf('.') + 1));
            const i = document.createElement('source');
            return (i.src = e), (i.type = t), i;
          }
          var s = e('./BaseTexture'),
            a = e('../utils');
          (n.prototype = Object.create(s.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype._onUpdate = function () {
              this.autoUpdate &&
                (window.requestAnimationFrame(this._onUpdate), this.update());
            }),
            (n.prototype._onPlayStart = function () {
              this.autoUpdate ||
                (window.requestAnimationFrame(this._onUpdate),
                (this.autoUpdate = !0));
            }),
            (n.prototype._onPlayStop = function () {
              this.autoUpdate = !1;
            }),
            (n.prototype._onCanPlay = function () {
              (this.hasLoaded = !0),
                this.source &&
                  (this.source.removeEventListener('canplay', this._onCanPlay),
                  this.source.removeEventListener(
                    'canplaythrough',
                    this._onCanPlay
                  ),
                  (this.width = this.source.videoWidth),
                  (this.height = this.source.videoHeight),
                  this.source.play(),
                  this.__loaded ||
                    ((this.__loaded = !0), this.emit('loaded', this)));
            }),
            (n.prototype.destroy = function () {
              this.source &&
                this.source._pixiId &&
                (delete a.BaseTextureCache[this.source._pixiId],
                delete this.source._pixiId),
                s.prototype.destroy.call(this);
            }),
            (n.fromVideo = function (e, t) {
              e._pixiId || (e._pixiId = 'video_' + a.uid());
              let i = a.BaseTextureCache[e._pixiId];
              return (
                i || ((i = new n(e, t)), (a.BaseTextureCache[e._pixiId] = i)), i
              );
            }),
            (n.fromUrl = function (e, t) {
              const i = document.createElement('video');
              if (Array.isArray(e)) {
                for (let s = 0; s < e.length; ++s) {
                  i.appendChild(r(e[s].src || e[s], e[s].mime));
                }
              } else {
                i.appendChild(r(e.src || e, e.mime));
              }
              return i.load(), i.play(), n.fromVideo(i, t);
            }),
            (n.fromUrls = n.fromUrl);
        },
        { '../utils': 70, './BaseTexture': 63 },
      ],
      68: [
        function (e, t, i) {
          function n() {
            const e = this;
            (this._tick = function (t) {
              (e._requestId = null),
                e.started &&
                  (e.update(t),
                  e.started &&
                    null === e._requestId &&
                    e._emitter.listeners(a, !0) &&
                    (e._requestId = requestAnimationFrame(e._tick)));
            }),
              (this._emitter = new s()),
              (this._requestId = null),
              (this._maxElapsedMS = 100),
              (this.autoStart = !1),
              (this.deltaTime = 1),
              (this.elapsedMS = 1 / r.TARGET_FPMS),
              (this.lastTime = 0),
              (this.speed = 1),
              (this.started = !1);
          }
          var r = e('../const'),
            s = e('eventemitter3'),
            a = 'tick';
          Object.defineProperties(n.prototype, {
            FPS: {
              get: function () {
                return 1e3 / this.elapsedMS;
              },
            },
            minFPS: {
              get: function () {
                return 1e3 / this._maxElapsedMS;
              },
              set: function (e) {
                const t = Math.min(Math.max(0, e) / 1e3, r.TARGET_FPMS);
                this._maxElapsedMS = 1 / t;
              },
            },
          }),
            (n.prototype._requestIfNeeded = function () {
              null === this._requestId &&
                this._emitter.listeners(a, !0) &&
                ((this.lastTime = performance.now()),
                (this._requestId = requestAnimationFrame(this._tick)));
            }),
            (n.prototype._cancelIfNeeded = function () {
              null !== this._requestId &&
                (cancelAnimationFrame(this._requestId),
                (this._requestId = null));
            }),
            (n.prototype._startIfPossible = function () {
              this.started
                ? this._requestIfNeeded()
                : this.autoStart && this.start();
            }),
            (n.prototype.add = function (e, t) {
              return this._emitter.on(a, e, t), this._startIfPossible(), this;
            }),
            (n.prototype.addOnce = function (e, t) {
              return this._emitter.once(a, e, t), this._startIfPossible(), this;
            }),
            (n.prototype.remove = function (e, t) {
              return (
                this._emitter.off(a, e, t),
                this._emitter.listeners(a, !0) || this._cancelIfNeeded(),
                this
              );
            }),
            (n.prototype.start = function () {
              this.started || ((this.started = !0), this._requestIfNeeded());
            }),
            (n.prototype.stop = function () {
              this.started && ((this.started = !1), this._cancelIfNeeded());
            }),
            (n.prototype.update = function (e) {
              let t;
              (e = e || performance.now()),
                (t = this.elapsedMS = e - this.lastTime),
                t > this._maxElapsedMS && (t = this._maxElapsedMS),
                (this.deltaTime = t * r.TARGET_FPMS * this.speed),
                this._emitter.emit(a, this.deltaTime),
                (this.lastTime = e);
            }),
            (t.exports = n);
        },
        { '../const': 16, eventemitter3: 10 },
      ],
      69: [
        function (e, t, i) {
          const n = e('./Ticker'),
            r = new n();
          (r.autoStart = !0), (t.exports = { shared: r, Ticker: n });
        },
        { './Ticker': 68 },
      ],
      70: [
        function (e, t, i) {
          var n = e('../const'),
            r = (t.exports = {
              _uid: 0,
              _saidHello: !1,
              EventEmitter: e('eventemitter3'),
              pluginTarget: e('./pluginTarget'),
              async: e('async'),
              uid: function () {
                return ++r._uid;
              },
              hex2rgb: function (e, t) {
                return (
                  (t = t || []),
                  (t[0] = ((e >> 16) & 255) / 255),
                  (t[1] = ((e >> 8) & 255) / 255),
                  (t[2] = (255 & e) / 255),
                  t
                );
              },
              hex2string: function (e) {
                return (
                  (e = e.toString(16)),
                  (e = '000000'.substr(0, 6 - e.length) + e),
                  '#' + e
                );
              },
              rgb2hex: function (e) {
                return ((255 * e[0]) << 16) + ((255 * e[1]) << 8) + 255 * e[2];
              },
              canUseNewCanvasBlendModes: function () {
                if ('undefined' == typeof document) {
                  return !1;
                }
                const e =
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/',
                  t = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
                  i = new Image();
                i.src = e + 'AP804Oa6' + t;
                const n = new Image();
                n.src = e + '/wCKxvRF' + t;
                const r = document.createElement('canvas');
                (r.width = 6), (r.height = 1);
                const s = r.getContext('2d');
                (s.globalCompositeOperation = 'multiply'),
                  s.drawImage(i, 0, 0),
                  s.drawImage(n, 2, 0);
                const a = s.getImageData(2, 0, 1, 1).data;
                return 255 === a[0] && 0 === a[1] && 0 === a[2];
              },
              getNextPowerOfTwo: function (e) {
                if (e > 0 && 0 === (e & (e - 1))) {
                  return e;
                }
                for (var t = 1; e > t; ) {
                  t <<= 1;
                }
                return t;
              },
              isPowerOfTwo: function (e, t) {
                return (
                  e > 0 && 0 === (e & (e - 1)) && t > 0 && 0 === (t & (t - 1))
                );
              },
              getResolutionOfUrl: function (e) {
                const t = n.RETINA_PREFIX.exec(e);
                return t ? parseFloat(t[1]) : 1;
              },
              sayHello: function (e) {
                if (!r._saidHello) {
                  if (
                    navigator.userAgent.toLowerCase().indexOf('chrome') > -1
                  ) {
                    const t = [
                      '\n %c %c %c Pixi.js ' +
                        n.VERSION +
                        ' - ✰ ' +
                        e +
                        ' ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n',
                      'background: #ff66a5; padding:5px 0;',
                      'background: #ff66a5; padding:5px 0;',
                      'color: #ff66a5; background: #030307; padding:5px 0;',
                      'background: #ff66a5; padding:5px 0;',
                      'background: #ffc3dc; padding:5px 0;',
                      'background: #ff66a5; padding:5px 0;',
                      'color: #ff2424; background: #fff; padding:5px 0;',
                      'color: #ff2424; background: #fff; padding:5px 0;',
                      'color: #ff2424; background: #fff; padding:5px 0;',
                    ];
                    window.console.log.apply(console, t);
                  } else {
                    window.console &&
                      window.console.log(
                        'Pixi.js ' +
                          n.VERSION +
                          ' - ' +
                          e +
                          ' - http://www.pixijs.com/'
                      );
                  }
                  r._saidHello = !0;
                }
              },
              isWebGLSupported: function () {
                const e = { stencil: !0 };
                try {
                  if (!window.WebGLRenderingContext) {
                    return !1;
                  }
                  const t = document.createElement('canvas'),
                    i =
                      t.getContext('webgl', e) ||
                      t.getContext('experimental-webgl', e);
                  return !(!i || !i.getContextAttributes().stencil);
                } catch (n) {
                  return !1;
                }
              },
              sign: function (e) {
                return e ? (0 > e ? -1 : 1) : 0;
              },
              removeItems: function (e, t, i) {
                const n = e.length;
                if (!(t >= n || 0 === i)) {
                  i = t + i > n ? n - t : i;
                  for (var r = t, s = n - i; s > r; ++r) {
                    e[r] = e[r + i];
                  }
                  e.length = s;
                }
              },
              TextureCache: {},
              BaseTextureCache: {},
            });
        },
        { '../const': 16, './pluginTarget': 71, async: 1, eventemitter3: 10 },
      ],
      71: [
        function (e, t, i) {
          function n(e) {
            (e.__plugins = {}),
              (e.registerPlugin = function (t, i) {
                e.__plugins[t] = i;
              }),
              (e.prototype.initPlugins = function () {
                this.plugins = this.plugins || {};
                for (const t in e.__plugins) {
                  this.plugins[t] = new e.__plugins[t](this);
                }
              }),
              (e.prototype.destroyPlugins = function () {
                for (const e in this.plugins) {
                  this.plugins[e].destroy(), (this.plugins[e] = null);
                }
                this.plugins = null;
              });
          }
          t.exports = {
            mixin: function (e) {
              n(e);
            },
          };
        },
        {},
      ],
      72: [
        function (e, t, i) {
          const n = e('./core'),
            r = e('./mesh'),
            s = e('./extras'),
            a = e('./filters');
          (n.SpriteBatch = function () {
            throw new ReferenceError(
              'SpriteBatch does not exist any more, please use the new ParticleContainer instead.'
            );
          }),
            (n.AssetLoader = function () {
              throw new ReferenceError(
                'The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.'
              );
            }),
            Object.defineProperties(n, {
              Stage: {
                get: function () {
                  return (
                    console.warn(
                      'You do not need to use a PIXI Stage any more, you can simply render any container.'
                    ),
                    n.Container
                  );
                },
              },
              DisplayObjectContainer: {
                get: function () {
                  return (
                    console.warn(
                      'DisplayObjectContainer has been shortened to Container, please use Container from now on.'
                    ),
                    n.Container
                  );
                },
              },
              Strip: {
                get: function () {
                  return (
                    console.warn(
                      'The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.'
                    ),
                    r.Mesh
                  );
                },
              },
              Rope: {
                get: function () {
                  return (
                    console.warn(
                      'The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.'
                    ),
                    r.Rope
                  );
                },
              },
              MovieClip: {
                get: function () {
                  return (
                    console.warn(
                      'The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on.'
                    ),
                    s.MovieClip
                  );
                },
              },
              TilingSprite: {
                get: function () {
                  return (
                    console.warn(
                      'The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.'
                    ),
                    s.TilingSprite
                  );
                },
              },
              BitmapText: {
                get: function () {
                  return (
                    console.warn(
                      'The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.'
                    ),
                    s.BitmapText
                  );
                },
              },
              blendModes: {
                get: function () {
                  return (
                    console.warn(
                      'The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.'
                    ),
                    n.BLEND_MODES
                  );
                },
              },
              scaleModes: {
                get: function () {
                  return (
                    console.warn(
                      'The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.'
                    ),
                    n.SCALE_MODES
                  );
                },
              },
              BaseTextureCache: {
                get: function () {
                  return (
                    console.warn(
                      'The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.'
                    ),
                    n.utils.BaseTextureCache
                  );
                },
              },
              TextureCache: {
                get: function () {
                  return (
                    console.warn(
                      'The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.'
                    ),
                    n.utils.TextureCache
                  );
                },
              },
              math: {
                get: function () {
                  return (
                    console.warn(
                      'The math namespace is deprecated, please access members already accessible on PIXI.'
                    ),
                    n
                  );
                },
              },
            }),
            (n.Sprite.prototype.setTexture = function (e) {
              (this.texture = e),
                console.warn(
                  'setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;'
                );
            }),
            (s.BitmapText.prototype.setText = function (e) {
              (this.text = e),
                console.warn(
                  "setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';"
                );
            }),
            (n.Text.prototype.setText = function (e) {
              (this.text = e),
                console.warn(
                  "setText is now deprecated, please use the text property, e.g : myText.text = 'my text';"
                );
            }),
            (n.Text.prototype.setStyle = function (e) {
              (this.style = e),
                console.warn(
                  'setStyle is now deprecated, please use the style property, e.g : myText.style = style;'
                );
            }),
            (n.Texture.prototype.setFrame = function (e) {
              (this.frame = e),
                console.warn(
                  'setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;'
                );
            }),
            Object.defineProperties(a, {
              AbstractFilter: {
                get: function () {
                  return (
                    console.warn(
                      'filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on.'
                    ),
                    n.AbstractFilter
                  );
                },
              },
              FXAAFilter: {
                get: function () {
                  return (
                    console.warn(
                      'filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on.'
                    ),
                    n.FXAAFilter
                  );
                },
              },
              SpriteMaskFilter: {
                get: function () {
                  return (
                    console.warn(
                      'filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.'
                    ),
                    n.SpriteMaskFilter
                  );
                },
              },
            }),
            (n.utils.uuid = function () {
              return (
                console.warn(
                  'utils.uuid() is deprecated, please use utils.uid() from now on.'
                ),
                n.utils.uid()
              );
            });
        },
        { './core': 23, './extras': 79, './filters': 96, './mesh': 121 },
      ],
      73: [
        function (e, t, i) {
          function n(e, t) {
            r.Container.call(this),
              (t = t || {}),
              (this.textWidth = 0),
              (this.textHeight = 0),
              (this._glyphs = []),
              (this._font = {
                tint: void 0 !== t.tint ? t.tint : 16777215,
                align: t.align || 'left',
                name: null,
                size: 0,
              }),
              (this.font = t.font),
              (this._text = e),
              (this.maxWidth = 0),
              (this.maxLineHeight = 0),
              (this.dirty = !1),
              this.updateText();
          }
          var r = e('../core');
          (n.prototype = Object.create(r.Container.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              tint: {
                get: function () {
                  return this._font.tint;
                },
                set: function (e) {
                  (this._font.tint =
                    'number' == typeof e && e >= 0 ? e : 16777215),
                    (this.dirty = !0);
                },
              },
              align: {
                get: function () {
                  return this._font.align;
                },
                set: function (e) {
                  (this._font.align = e || 'left'), (this.dirty = !0);
                },
              },
              font: {
                get: function () {
                  return this._font;
                },
                set: function (e) {
                  e &&
                    ('string' == typeof e
                      ? ((e = e.split(' ')),
                        (this._font.name =
                          1 === e.length ? e[0] : e.slice(1).join(' ')),
                        (this._font.size =
                          e.length >= 2
                            ? parseInt(e[0], 10)
                            : n.fonts[this._font.name].size))
                      : ((this._font.name = e.name),
                        (this._font.size =
                          'number' == typeof e.size
                            ? e.size
                            : parseInt(e.size, 10))),
                    (this.dirty = !0));
                },
              },
              text: {
                get: function () {
                  return this._text;
                },
                set: function (e) {
                  (e = e.toString() || ' '),
                    this._text !== e && ((this._text = e), (this.dirty = !0));
                },
              },
            }),
            (n.prototype.updateText = function () {
              for (
                var e = n.fonts[this._font.name],
                  t = new r.Point(),
                  i = null,
                  s = [],
                  a = 0,
                  o = 0,
                  l = [],
                  h = 0,
                  c = this._font.size / e.size,
                  u = -1,
                  d = 0,
                  p = 0;
                p < this.text.length;
                p++
              ) {
                const f = this.text.charCodeAt(p);
                if (
                  ((u = /(\s)/.test(this.text.charAt(p)) ? p : u),
                  /(?:\r\n|\r|\n)/.test(this.text.charAt(p)))
                ) {
                  l.push(a),
                    (o = Math.max(o, a)),
                    h++,
                    (t.x = 0),
                    (t.y += e.lineHeight),
                    (i = null);
                } else if (
                  -1 !== u &&
                  this.maxWidth > 0 &&
                  t.x * c > this.maxWidth
                ) {
                  r.utils.removeItems(s, u, p - u),
                    (p = u),
                    (u = -1),
                    l.push(a),
                    (o = Math.max(o, a)),
                    h++,
                    (t.x = 0),
                    (t.y += e.lineHeight),
                    (i = null);
                } else {
                  const m = e.chars[f];
                  m &&
                    (i && m.kerning[i] && (t.x += m.kerning[i]),
                    s.push({
                      texture: m.texture,
                      line: h,
                      charCode: f,
                      position: new r.Point(t.x + m.xOffset, t.y + m.yOffset),
                    }),
                    (a = t.x + (m.texture.width + m.xOffset)),
                    (t.x += m.xAdvance),
                    (d = Math.max(d, m.yOffset + m.texture.height)),
                    (i = f));
                }
              }
              l.push(a), (o = Math.max(o, a));
              const g = [];
              for (p = 0; h >= p; p++) {
                let y = 0;
                'right' === this._font.align
                  ? (y = o - l[p])
                  : 'center' === this._font.align && (y = (o - l[p]) / 2),
                  g.push(y);
              }
              const v = s.length,
                b = this.tint;
              for (p = 0; v > p; p++) {
                let x = this._glyphs[p];
                x
                  ? (x.texture = s[p].texture)
                  : ((x = new r.Sprite(s[p].texture)), this._glyphs.push(x)),
                  (x.position.x = (s[p].position.x + g[s[p].line]) * c),
                  (x.position.y = s[p].position.y * c),
                  (x.scale.x = x.scale.y = c),
                  (x.tint = b),
                  x.parent || this.addChild(x);
              }
              for (p = v; p < this._glyphs.length; ++p) {
                this.removeChild(this._glyphs[p]);
              }
              (this.textWidth = o * c),
                (this.textHeight = (t.y + e.lineHeight) * c),
                (this.maxLineHeight = d * c);
            }),
            (n.prototype.updateTransform = function () {
              this.validate(), this.containerUpdateTransform();
            }),
            (n.prototype.getLocalBounds = function () {
              return (
                this.validate(), r.Container.prototype.getLocalBounds.call(this)
              );
            }),
            (n.prototype.validate = function () {
              this.dirty && (this.updateText(), (this.dirty = !1));
            }),
            (n.fonts = {});
        },
        { '../core': 23 },
      ],
      74: [
        function (e, t, i) {
          function n(e) {
            r.Sprite.call(
              this,
              e[0] instanceof r.Texture ? e[0] : e[0].texture
            ),
              (this._textures = null),
              (this._durations = null),
              (this.textures = e),
              (this.animationSpeed = 1),
              (this.loop = !0),
              (this.onComplete = null),
              (this._currentTime = 0),
              (this.playing = !1);
          }
          var r = e('../core');
          (n.prototype = Object.create(r.Sprite.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              totalFrames: {
                get: function () {
                  return this._textures.length;
                },
              },
              textures: {
                get: function () {
                  return this._textures;
                },
                set: function (e) {
                  if (e[0] instanceof r.Texture) {
                    (this._textures = e), (this._durations = null);
                  } else {
                    (this._textures = []), (this._durations = []);
                    for (let t = 0; t < e.length; t++) {
                      this._textures.push(e[t].texture),
                        this._durations.push(e[t].time);
                    }
                  }
                },
              },
              currentFrame: {
                get: function () {
                  let e = Math.floor(this._currentTime) % this._textures.length;
                  return 0 > e && (e += this._textures.length), e;
                },
              },
            }),
            (n.prototype.stop = function () {
              this.playing &&
                ((this.playing = !1),
                r.ticker.shared.remove(this.update, this));
            }),
            (n.prototype.play = function () {
              this.playing ||
                ((this.playing = !0), r.ticker.shared.add(this.update, this));
            }),
            (n.prototype.gotoAndStop = function (e) {
              this.stop(),
                (this._currentTime = e),
                (this._texture = this._textures[this.currentFrame]);
            }),
            (n.prototype.gotoAndPlay = function (e) {
              (this._currentTime = e), this.play();
            }),
            (n.prototype.update = function (e) {
              const t = this.animationSpeed * e;
              if (null !== this._durations) {
                let i =
                  (this._currentTime % 1) * this._durations[this.currentFrame];
                for (i += (t / 60) * 1e3; 0 > i; ) {
                  this._currentTime--,
                    (i += this._durations[this.currentFrame]);
                }
                const n = Math.sign(this.animationSpeed * e);
                for (
                  this._currentTime = Math.floor(this._currentTime);
                  i >= this._durations[this.currentFrame];

                ) {
                  (i -= this._durations[this.currentFrame] * n),
                    (this._currentTime += n);
                }
                this._currentTime += i / this._durations[this.currentFrame];
              } else {
                this._currentTime += t;
              }
              this._currentTime < 0 && !this.loop
                ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
                : this._currentTime >= this._textures.length && !this.loop
                ? (this.gotoAndStop(this._textures.length - 1),
                  this.onComplete && this.onComplete())
                : (this._texture = this._textures[this.currentFrame]);
            }),
            (n.prototype.destroy = function () {
              this.stop(), r.Sprite.prototype.destroy.call(this);
            }),
            (n.fromFrames = function (e) {
              for (var t = [], i = 0; i < e.length; ++i) {
                t.push(new r.Texture.fromFrame(e[i]));
              }
              return new n(t);
            }),
            (n.fromImages = function (e) {
              for (var t = [], i = 0; i < e.length; ++i) {
                t.push(new r.Texture.fromImage(e[i]));
              }
              return new n(t);
            });
        },
        { '../core': 23 },
      ],
      75: [
        function (e, t, i) {
          function n(e, t, i) {
            r.Sprite.call(this, e),
              (this.tileScale = new r.Point(1, 1)),
              (this.tilePosition = new r.Point(0, 0)),
              (this._width = t || 100),
              (this._height = i || 100),
              (this._uvs = new r.TextureUvs()),
              (this._canvasPattern = null),
              (this.shader = new r.AbstractFilter(
                [
                  'precision lowp float;',
                  'attribute vec2 aVertexPosition;',
                  'attribute vec2 aTextureCoord;',
                  'attribute vec4 aColor;',
                  'uniform mat3 projectionMatrix;',
                  'uniform vec4 uFrame;',
                  'uniform vec4 uTransform;',
                  'varying vec2 vTextureCoord;',
                  'varying vec4 vColor;',
                  'void main(void){',
                  '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                  '   vec2 coord = aTextureCoord;',
                  '   coord -= uTransform.xy;',
                  '   coord /= uTransform.zw;',
                  '   vTextureCoord = coord;',
                  '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
                  '}',
                ].join('\n'),
                [
                  'precision lowp float;',
                  'varying vec2 vTextureCoord;',
                  'varying vec4 vColor;',
                  'uniform sampler2D uSampler;',
                  'uniform vec4 uFrame;',
                  'uniform vec2 uPixelSize;',
                  'void main(void){',
                  '   vec2 coord = mod(vTextureCoord, uFrame.zw);',
                  '   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);',
                  '   coord += uFrame.xy;',
                  '   gl_FragColor =  texture2D(uSampler, coord) * vColor ;',
                  '}',
                ].join('\n'),
                {
                  uFrame: { type: '4fv', value: [0, 0, 1, 1] },
                  uTransform: { type: '4fv', value: [0, 0, 1, 1] },
                  uPixelSize: { type: '2fv', value: [1, 1] },
                }
              ));
          }
          var r = e('../core'),
            s = new r.Point(),
            a = e('../core/renderers/canvas/utils/CanvasTinter');
          (n.prototype = Object.create(r.Sprite.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              width: {
                get: function () {
                  return this._width;
                },
                set: function (e) {
                  this._width = e;
                },
              },
              height: {
                get: function () {
                  return this._height;
                },
                set: function (e) {
                  this._height = e;
                },
              },
            }),
            (n.prototype._onTextureUpdate = function () {}),
            (n.prototype._renderWebGL = function (e) {
              const t = this._texture;
              if (t && t._uvs) {
                const i = t._uvs,
                  n = t._frame.width,
                  r = t._frame.height,
                  s = t.baseTexture.width,
                  a = t.baseTexture.height;
                (t._uvs = this._uvs),
                  (t._frame.width = this.width),
                  (t._frame.height = this.height),
                  (this.shader.uniforms.uPixelSize.value[0] = 1 / s),
                  (this.shader.uniforms.uPixelSize.value[1] = 1 / a),
                  (this.shader.uniforms.uFrame.value[0] = i.x0),
                  (this.shader.uniforms.uFrame.value[1] = i.y0),
                  (this.shader.uniforms.uFrame.value[2] = i.x1 - i.x0),
                  (this.shader.uniforms.uFrame.value[3] = i.y2 - i.y0),
                  (this.shader.uniforms.uTransform.value[0] =
                    (this.tilePosition.x % (n * this.tileScale.x)) /
                    this._width),
                  (this.shader.uniforms.uTransform.value[1] =
                    (this.tilePosition.y % (r * this.tileScale.y)) /
                    this._height),
                  (this.shader.uniforms.uTransform.value[2] =
                    (s / this._width) * this.tileScale.x),
                  (this.shader.uniforms.uTransform.value[3] =
                    (a / this._height) * this.tileScale.y),
                  e.setObjectRenderer(e.plugins.sprite),
                  e.plugins.sprite.render(this),
                  (t._uvs = i),
                  (t._frame.width = n),
                  (t._frame.height = r);
              }
            }),
            (n.prototype._renderCanvas = function (e) {
              const t = this._texture;
              if (t.baseTexture.hasLoaded) {
                const i = e.context,
                  n = this.worldTransform,
                  s = e.resolution,
                  o = t.baseTexture,
                  l = (this.tilePosition.x / this.tileScale.x) % t._frame.width,
                  h =
                    (this.tilePosition.y / this.tileScale.y) % t._frame.height;
                if (!this._canvasPattern) {
                  const c = new r.CanvasBuffer(t._frame.width, t._frame.height);
                  16777215 !== this.tint
                    ? (this.cachedTint !== this.tint &&
                        ((this.cachedTint = this.tint),
                        (this.tintedTexture = a.getTintedTexture(
                          this,
                          this.tint
                        ))),
                      c.context.drawImage(this.tintedTexture, 0, 0))
                    : c.context.drawImage(o.source, -t._frame.x, -t._frame.y),
                    (this._canvasPattern = c.context.createPattern(
                      c.canvas,
                      'repeat'
                    ));
                }
                (i.globalAlpha = this.worldAlpha),
                  i.setTransform(
                    n.a * s,
                    n.b * s,
                    n.c * s,
                    n.d * s,
                    n.tx * s,
                    n.ty * s
                  ),
                  i.scale(this.tileScale.x, this.tileScale.y),
                  i.translate(
                    l + this.anchor.x * -this._width,
                    h + this.anchor.y * -this._height
                  );
                const u = e.blendModes[this.blendMode];
                u !== e.context.globalCompositeOperation &&
                  (i.globalCompositeOperation = u),
                  (i.fillStyle = this._canvasPattern),
                  i.fillRect(
                    -l,
                    -h,
                    this._width / this.tileScale.x,
                    this._height / this.tileScale.y
                  );
              }
            }),
            (n.prototype.getBounds = function () {
              let e,
                t,
                i,
                n,
                r = this._width,
                s = this._height,
                a = r * (1 - this.anchor.x),
                o = r * -this.anchor.x,
                l = s * (1 - this.anchor.y),
                h = s * -this.anchor.y,
                c = this.worldTransform,
                u = c.a,
                d = c.b,
                p = c.c,
                f = c.d,
                m = c.tx,
                g = c.ty,
                y = u * o + p * h + m,
                v = f * h + d * o + g,
                b = u * a + p * h + m,
                x = f * h + d * a + g,
                w = u * a + p * l + m,
                _ = f * l + d * a + g,
                T = u * o + p * l + m,
                S = f * l + d * o + g;
              (e = y),
                (e = e > b ? b : e),
                (e = e > w ? w : e),
                (e = e > T ? T : e),
                (i = v),
                (i = i > x ? x : i),
                (i = i > _ ? _ : i),
                (i = i > S ? S : i),
                (t = y),
                (t = b > t ? b : t),
                (t = w > t ? w : t),
                (t = T > t ? T : t),
                (n = v),
                (n = x > n ? x : n),
                (n = _ > n ? _ : n),
                (n = S > n ? S : n);
              const C = this._bounds;
              return (
                (C.x = e),
                (C.width = t - e),
                (C.y = i),
                (C.height = n - i),
                (this._currentBounds = C),
                C
              );
            }),
            (n.prototype.containsPoint = function (e) {
              this.worldTransform.applyInverse(e, s);
              let t,
                i = this._width,
                n = this._height,
                r = -i * this.anchor.x;
              return (
                s.x > r &&
                s.x < r + i &&
                ((t = -n * this.anchor.y), s.y > t && s.y < t + n)
              );
            }),
            (n.prototype.destroy = function () {
              r.Sprite.prototype.destroy.call(this),
                (this.tileScale = null),
                (this._tileScaleOffset = null),
                (this.tilePosition = null),
                (this._uvs = null);
            }),
            (n.fromFrame = function (e, t, i) {
              const s = r.utils.TextureCache[e];
              if (!s) {
                throw new Error(
                  'The frameId "' +
                    e +
                    '" does not exist in the texture cache ' +
                    this
                );
              }
              return new n(s, t, i);
            }),
            (n.fromImage = function (e, t, i, s, a) {
              return new n(r.Texture.fromImage(e, s, a), t, i);
            });
        },
        { '../core': 23, '../core/renderers/canvas/utils/CanvasTinter': 41 },
      ],
      76: [
        function (e, t, i) {
          const n = e('../core'),
            r = n.DisplayObject,
            s = new n.Matrix();
          (r.prototype._cacheAsBitmap = !1),
            (r.prototype._originalRenderWebGL = null),
            (r.prototype._originalRenderCanvas = null),
            (r.prototype._originalUpdateTransform = null),
            (r.prototype._originalHitTest = null),
            (r.prototype._originalDestroy = null),
            (r.prototype._cachedSprite = null),
            Object.defineProperties(r.prototype, {
              cacheAsBitmap: {
                get: function () {
                  return this._cacheAsBitmap;
                },
                set: function (e) {
                  this._cacheAsBitmap !== e &&
                    ((this._cacheAsBitmap = e),
                    e
                      ? ((this._originalRenderWebGL = this.renderWebGL),
                        (this._originalRenderCanvas = this.renderCanvas),
                        (this._originalUpdateTransform = this.updateTransform),
                        (this._originalGetBounds = this.getBounds),
                        (this._originalDestroy = this.destroy),
                        (this._originalContainsPoint = this.containsPoint),
                        (this.renderWebGL = this._renderCachedWebGL),
                        (this.renderCanvas = this._renderCachedCanvas),
                        (this.destroy = this._cacheAsBitmapDestroy))
                      : (this._cachedSprite &&
                          this._destroyCachedDisplayObject(),
                        (this.renderWebGL = this._originalRenderWebGL),
                        (this.renderCanvas = this._originalRenderCanvas),
                        (this.getBounds = this._originalGetBounds),
                        (this.destroy = this._originalDestroy),
                        (this.updateTransform = this._originalUpdateTransform),
                        (this.containsPoint = this._originalContainsPoint)));
                },
              },
            }),
            (r.prototype._renderCachedWebGL = function (e) {
              !this.visible ||
                this.worldAlpha <= 0 ||
                !this.renderable ||
                (this._initCachedDisplayObject(e),
                (this._cachedSprite.worldAlpha = this.worldAlpha),
                e.setObjectRenderer(e.plugins.sprite),
                e.plugins.sprite.render(this._cachedSprite));
            }),
            (r.prototype._initCachedDisplayObject = function (e) {
              if (!this._cachedSprite) {
                e.currentRenderer.flush();
                const t = this.getLocalBounds().clone();
                if (this._filters) {
                  const i = this._filters[0].padding;
                  (t.x -= i),
                    (t.y -= i),
                    (t.width += 2 * i),
                    (t.height += 2 * i);
                }
                const r = e.currentRenderTarget,
                  a = e.filterManager.filterStack,
                  o = new n.RenderTexture(e, 0 | t.width, 0 | t.height),
                  l = s;
                (l.tx = -t.x),
                  (l.ty = -t.y),
                  (this.renderWebGL = this._originalRenderWebGL),
                  o.render(this, l, !0, !0),
                  e.setRenderTarget(r),
                  (e.filterManager.filterStack = a),
                  (this.renderWebGL = this._renderCachedWebGL),
                  (this.updateTransform = this.displayObjectUpdateTransform),
                  (this.getBounds = this._getCachedBounds),
                  (this._cachedSprite = new n.Sprite(o)),
                  (this._cachedSprite.worldTransform = this.worldTransform),
                  (this._cachedSprite.anchor.x = -(t.x / t.width)),
                  (this._cachedSprite.anchor.y = -(t.y / t.height)),
                  this.updateTransform(),
                  (this.containsPoint = this._cachedSprite.containsPoint.bind(
                    this._cachedSprite
                  ));
              }
            }),
            (r.prototype._renderCachedCanvas = function (e) {
              !this.visible ||
                this.worldAlpha <= 0 ||
                !this.renderable ||
                (this._initCachedDisplayObjectCanvas(e),
                (this._cachedSprite.worldAlpha = this.worldAlpha),
                this._cachedSprite.renderCanvas(e));
            }),
            (r.prototype._initCachedDisplayObjectCanvas = function (e) {
              if (!this._cachedSprite) {
                const t = this.getLocalBounds(),
                  i = e.context,
                  r = new n.RenderTexture(e, 0 | t.width, 0 | t.height),
                  a = s;
                (a.tx = -t.x),
                  (a.ty = -t.y),
                  (this.renderCanvas = this._originalRenderCanvas),
                  r.render(this, a, !0),
                  (e.context = i),
                  (this.renderCanvas = this._renderCachedCanvas),
                  (this.updateTransform = this.displayObjectUpdateTransform),
                  (this.getBounds = this._getCachedBounds),
                  (this._cachedSprite = new n.Sprite(r)),
                  (this._cachedSprite.worldTransform = this.worldTransform),
                  (this._cachedSprite.anchor.x = -(t.x / t.width)),
                  (this._cachedSprite.anchor.y = -(t.y / t.height)),
                  this.updateTransform(),
                  (this.containsPoint = this._cachedSprite.containsPoint.bind(
                    this._cachedSprite
                  ));
              }
            }),
            (r.prototype._getCachedBounds = function () {
              return (
                (this._cachedSprite._currentBounds = null),
                this._cachedSprite.getBounds()
              );
            }),
            (r.prototype._destroyCachedDisplayObject = function () {
              this._cachedSprite._texture.destroy(),
                (this._cachedSprite = null);
            }),
            (r.prototype._cacheAsBitmapDestroy = function () {
              (this.cacheAsBitmap = !1), this._originalDestroy();
            });
        },
        { '../core': 23 },
      ],
      77: [
        function (e, t, i) {
          const n = e('../core');
          (n.DisplayObject.prototype.name = null),
            (n.Container.prototype.getChildByName = function (e) {
              for (let t = 0; t < this.children.length; t++) {
                if (this.children[t].name === e) {
                  return this.children[t];
                }
              }
              return null;
            });
        },
        { '../core': 23 },
      ],
      78: [
        function (e, t, i) {
          const n = e('../core');
          n.DisplayObject.prototype.getGlobalPosition = function (e) {
            return (
              (e = e || new n.Point()),
              this.parent
                ? (this.displayObjectUpdateTransform(),
                  (e.x = this.worldTransform.tx),
                  (e.y = this.worldTransform.ty))
                : ((e.x = this.position.x), (e.y = this.position.y)),
              e
            );
          };
        },
        { '../core': 23 },
      ],
      79: [
        function (e, t, i) {
          e('./cacheAsBitmap'),
            e('./getChildByName'),
            e('./getGlobalPosition'),
            (t.exports = {
              MovieClip: e('./MovieClip'),
              TilingSprite: e('./TilingSprite'),
              BitmapText: e('./BitmapText'),
            });
        },
        {
          './BitmapText': 73,
          './MovieClip': 74,
          './TilingSprite': 75,
          './cacheAsBitmap': 76,
          './getChildByName': 77,
          './getGlobalPosition': 78,
        },
      ],
      80: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n',
              {
                dimensions: {
                  type: '4fv',
                  value: new Float32Array([0, 0, 0, 0]),
                },
                pixelSize: { type: '1f', value: 8 },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              size: {
                get: function () {
                  return this.uniforms.pixelSize.value;
                },
                set: function (e) {
                  this.uniforms.pixelSize.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      81: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(this),
              (this.blurXFilter = new s()),
              (this.blurYFilter = new a()),
              (this.defaultFilter = new r.AbstractFilter());
          }
          var r = e('../../core'),
            s = e('../blur/BlurXFilter'),
            a = e('../blur/BlurYFilter');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager.getRenderTarget(!0);
              this.defaultFilter.applyFilter(e, t, i),
                this.blurXFilter.applyFilter(e, t, n),
                e.blendModeManager.setBlendMode(r.BLEND_MODES.SCREEN),
                this.blurYFilter.applyFilter(e, n, i),
                e.blendModeManager.setBlendMode(r.BLEND_MODES.NORMAL),
                e.filterManager.returnRenderTarget(n);
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = this.blurYFilter.blur = e;
                },
              },
              blurX: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = e;
                },
              },
              blurY: {
                get: function () {
                  return this.blurYFilter.blur;
                },
                set: function (e) {
                  this.blurYFilter.blur = e;
                },
              },
            });
        },
        {
          '../../core': 23,
          '../blur/BlurXFilter': 84,
          '../blur/BlurYFilter': 85,
        },
      ],
      82: [
        function (e, t, i) {
          function n(e, t) {
            r.AbstractFilter.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
              'precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n',
              {
                strength: { type: '1f', value: 1 },
                dirX: { type: '1f', value: e || 0 },
                dirY: { type: '1f', value: t || 0 },
              }
            ),
              (this.defaultFilter = new r.AbstractFilter()),
              (this.passes = 1),
              (this.dirX = e || 0),
              (this.dirY = t || 0),
              (this.strength = 4);
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.getShader(e);
              if (
                ((this.uniforms.strength.value =
                  (this.strength / 4 / this.passes) *
                  (t.frame.width / t.size.width)),
                1 === this.passes)
              ) {
                e.filterManager.applyFilter(r, t, i, n);
              } else {
                const s = e.filterManager.getRenderTarget(!0);
                e.filterManager.applyFilter(r, t, s, n);
                for (let a = 0; a < this.passes - 2; a++) {
                  e.filterManager.applyFilter(r, s, s, n);
                }
                e.filterManager.applyFilter(r, s, i, n),
                  e.filterManager.returnRenderTarget(s);
              }
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.strength;
                },
                set: function (e) {
                  (this.padding = 0.5 * e), (this.strength = e);
                },
              },
              dirX: {
                get: function () {
                  return this.dirX;
                },
                set: function (e) {
                  this.uniforms.dirX.value = e;
                },
              },
              dirY: {
                get: function () {
                  return this.dirY;
                },
                set: function (e) {
                  this.uniforms.dirY.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      83: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(this),
              (this.blurXFilter = new s()),
              (this.blurYFilter = new a());
          }
          var r = e('../../core'),
            s = e('./BlurXFilter'),
            a = e('./BlurYFilter');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager.getRenderTarget(!0);
              this.blurXFilter.applyFilter(e, t, n),
                this.blurYFilter.applyFilter(e, n, i),
                e.filterManager.returnRenderTarget(n);
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  (this.padding = 0.5 * Math.abs(e)),
                    (this.blurXFilter.blur = this.blurYFilter.blur = e);
                },
              },
              passes: {
                get: function () {
                  return this.blurXFilter.passes;
                },
                set: function (e) {
                  this.blurXFilter.passes = this.blurYFilter.passes = e;
                },
              },
              blurX: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = e;
                },
              },
              blurY: {
                get: function () {
                  return this.blurYFilter.blur;
                },
                set: function (e) {
                  this.blurYFilter.blur = e;
                },
              },
            });
        },
        { '../../core': 23, './BlurXFilter': 84, './BlurYFilter': 85 },
      ],
      84: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
              'precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n',
              {
                strength: { type: '1f', value: 1 },
              }
            ),
              (this.passes = 1),
              (this.strength = 4);
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.getShader(e);
              if (
                ((this.uniforms.strength.value =
                  (this.strength / 4 / this.passes) *
                  (t.frame.width / t.size.width)),
                1 === this.passes)
              ) {
                e.filterManager.applyFilter(r, t, i, n);
              } else {
                for (
                  var s = e.filterManager.getRenderTarget(!0),
                    a = t,
                    o = s,
                    l = 0;
                  l < this.passes - 1;
                  l++
                ) {
                  e.filterManager.applyFilter(r, a, o, !0);
                  const h = o;
                  (o = a), (a = h);
                }
                e.filterManager.applyFilter(r, a, i, n),
                  e.filterManager.returnRenderTarget(s);
              }
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.strength;
                },
                set: function (e) {
                  (this.padding = 0.5 * Math.abs(e)), (this.strength = e);
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      85: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
              'precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n',
              { strength: { type: '1f', value: 1 } }
            ),
              (this.passes = 1),
              (this.strength = 4);
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.getShader(e);
              if (
                ((this.uniforms.strength.value =
                  (Math.abs(this.strength) / 4 / this.passes) *
                  (t.frame.height / t.size.height)),
                1 === this.passes)
              ) {
                e.filterManager.applyFilter(r, t, i, n);
              } else {
                for (
                  var s = e.filterManager.getRenderTarget(!0),
                    a = t,
                    o = s,
                    l = 0;
                  l < this.passes - 1;
                  l++
                ) {
                  e.filterManager.applyFilter(r, a, o, !0);
                  const h = o;
                  (o = a), (a = h);
                }
                e.filterManager.applyFilter(r, a, i, n),
                  e.filterManager.returnRenderTarget(s);
              }
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.strength;
                },
                set: function (e) {
                  (this.padding = 0.5 * Math.abs(e)), (this.strength = e);
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      86: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n',
              { delta: { type: 'v2', value: { x: 0.1, y: 0 } } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n);
        },
        { '../../core': 23 },
      ],
      87: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n',
              {
                m: {
                  type: '1fv',
                  value: [
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                  ],
                },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype._loadMatrix = function (e, t) {
              t = !!t;
              let i = e;
              t &&
                (this._multiply(i, this.uniforms.m.value, e),
                (i = this._colorMatrix(i))),
                (this.uniforms.m.value = i);
            }),
            (n.prototype._multiply = function (e, t, i) {
              return (
                (e[0] =
                  t[0] * i[0] + t[1] * i[5] + t[2] * i[10] + t[3] * i[15]),
                (e[1] =
                  t[0] * i[1] + t[1] * i[6] + t[2] * i[11] + t[3] * i[16]),
                (e[2] =
                  t[0] * i[2] + t[1] * i[7] + t[2] * i[12] + t[3] * i[17]),
                (e[3] =
                  t[0] * i[3] + t[1] * i[8] + t[2] * i[13] + t[3] * i[18]),
                (e[4] =
                  t[0] * i[4] + t[1] * i[9] + t[2] * i[14] + t[3] * i[19]),
                (e[5] =
                  t[5] * i[0] + t[6] * i[5] + t[7] * i[10] + t[8] * i[15]),
                (e[6] =
                  t[5] * i[1] + t[6] * i[6] + t[7] * i[11] + t[8] * i[16]),
                (e[7] =
                  t[5] * i[2] + t[6] * i[7] + t[7] * i[12] + t[8] * i[17]),
                (e[8] =
                  t[5] * i[3] + t[6] * i[8] + t[7] * i[13] + t[8] * i[18]),
                (e[9] =
                  t[5] * i[4] + t[6] * i[9] + t[7] * i[14] + t[8] * i[19]),
                (e[10] =
                  t[10] * i[0] + t[11] * i[5] + t[12] * i[10] + t[13] * i[15]),
                (e[11] =
                  t[10] * i[1] + t[11] * i[6] + t[12] * i[11] + t[13] * i[16]),
                (e[12] =
                  t[10] * i[2] + t[11] * i[7] + t[12] * i[12] + t[13] * i[17]),
                (e[13] =
                  t[10] * i[3] + t[11] * i[8] + t[12] * i[13] + t[13] * i[18]),
                (e[14] =
                  t[10] * i[4] + t[11] * i[9] + t[12] * i[14] + t[13] * i[19]),
                (e[15] =
                  t[15] * i[0] + t[16] * i[5] + t[17] * i[10] + t[18] * i[15]),
                (e[16] =
                  t[15] * i[1] + t[16] * i[6] + t[17] * i[11] + t[18] * i[16]),
                (e[17] =
                  t[15] * i[2] + t[16] * i[7] + t[17] * i[12] + t[18] * i[17]),
                (e[18] =
                  t[15] * i[3] + t[16] * i[8] + t[17] * i[13] + t[18] * i[18]),
                (e[19] =
                  t[15] * i[4] + t[16] * i[9] + t[17] * i[14] + t[18] * i[19]),
                e
              );
            }),
            (n.prototype._colorMatrix = function (e) {
              const t = new Float32Array(e);
              return (
                (t[4] /= 255), (t[9] /= 255), (t[14] /= 255), (t[19] /= 255), t
              );
            }),
            (n.prototype.brightness = function (e, t) {
              const i = [
                e,
                0,
                0,
                0,
                0,
                0,
                e,
                0,
                0,
                0,
                0,
                0,
                e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(i, t);
            }),
            (n.prototype.greyscale = function (e, t) {
              const i = [
                e,
                e,
                e,
                0,
                0,
                e,
                e,
                e,
                0,
                0,
                e,
                e,
                e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(i, t);
            }),
            (n.prototype.grayscale = n.prototype.greyscale),
            (n.prototype.blackAndWhite = function (e) {
              const t = [
                0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0,
                0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.hue = function (e, t) {
              e = ((e || 0) / 180) * Math.PI;
              const i = Math.cos(e),
                n = Math.sin(e),
                r = 0.213,
                s = 0.715,
                a = 0.072,
                o = [
                  r + i * (1 - r) + n * -r,
                  s + i * -s + n * -s,
                  a + i * -a + n * (1 - a),
                  0,
                  0,
                  r + i * -r + 0.143 * n,
                  s + i * (1 - s) + 0.14 * n,
                  a + i * -a + n * -0.283,
                  0,
                  0,
                  r + i * -r + n * -(1 - r),
                  s + i * -s + n * s,
                  a + i * (1 - a) + n * a,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(o, t);
            }),
            (n.prototype.contrast = function (e, t) {
              const i = (e || 0) + 1,
                n = -128 * (i - 1),
                r = [
                  i,
                  0,
                  0,
                  0,
                  n,
                  0,
                  i,
                  0,
                  0,
                  n,
                  0,
                  0,
                  i,
                  0,
                  n,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(r, t);
            }),
            (n.prototype.saturate = function (e, t) {
              const i = (2 * (e || 0)) / 3 + 1,
                n = (i - 1) * -0.5,
                r = [
                  i,
                  n,
                  n,
                  0,
                  0,
                  n,
                  i,
                  n,
                  0,
                  0,
                  n,
                  n,
                  i,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(r, t);
            }),
            (n.prototype.desaturate = function (e) {
              this.saturate(-1);
            }),
            (n.prototype.negative = function (e) {
              const t = [
                0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.sepia = function (e) {
              const t = [
                0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999,
                0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0,
                1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.technicolor = function (e) {
              const t = [
                1.9125277891456083, -0.8545344976951645, -0.09155508482755585,
                0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428,
                -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
                -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138,
                0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.polaroid = function (e) {
              const t = [
                1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0,
                -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.toBGR = function (e) {
              const t = [
                0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.kodachrome = function (e) {
              const t = [
                1.1285582396593525, -0.3967382283601348, -0.03992559172921793,
                0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304,
                -0.05498805115633132, 0, 24.732407896706203,
                -0.16786010706155763, -0.5603416277695248, 1.6014850761964943,
                0, 35.62982807460946, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.browni = function (e) {
              const t = [
                0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
                47.43192855600873, -0.037703249837783157, 0.8609577587992641,
                0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
                -0.07441037908422492, 0.44972182064877153, 0,
                -7.562075277591283, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.vintage = function (e) {
              const t = [
                0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
                9.651285835294123, 0.02578397704808868, 0.6441188644374771,
                0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
                -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
                0, 0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.colorTone = function (e, t, i, n, r) {
              (e = e || 0.2),
                (t = t || 0.15),
                (i = i || 16770432),
                (n = n || 3375104);
              const s = ((i >> 16) & 255) / 255,
                a = ((i >> 8) & 255) / 255,
                o = (255 & i) / 255,
                l = ((n >> 16) & 255) / 255,
                h = ((n >> 8) & 255) / 255,
                c = (255 & n) / 255,
                u = [
                  0.3,
                  0.59,
                  0.11,
                  0,
                  0,
                  s,
                  a,
                  o,
                  e,
                  0,
                  l,
                  h,
                  c,
                  t,
                  0,
                  s - l,
                  a - h,
                  o - c,
                  0,
                  0,
                ];
              this._loadMatrix(u, r);
            }),
            (n.prototype.night = function (e, t) {
              e = e || 0.1;
              const i = [
                -2 * e,
                -e,
                0,
                0,
                0,
                -e,
                0,
                e,
                0,
                0,
                0,
                e,
                2 * e,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(i, t);
            }),
            (n.prototype.predator = function (e, t) {
              const i = [
                11.224130630493164 * e,
                -4.794486999511719 * e,
                -2.8746118545532227 * e,
                0 * e,
                0.40342438220977783 * e,
                -3.6330697536468506 * e,
                9.193157196044922 * e,
                -2.951810836791992 * e,
                0 * e,
                -1.316135048866272 * e,
                -3.2184197902679443 * e,
                -4.2375030517578125 * e,
                7.476448059082031 * e,
                0 * e,
                0.8044459223747253 * e,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(i, t);
            }),
            (n.prototype.lsd = function (e) {
              const t = [
                2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0,
                0, 0, 1, 0,
              ];
              this._loadMatrix(t, e);
            }),
            (n.prototype.reset = function () {
              const e = [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
              ];
              this._loadMatrix(e, !1);
            }),
            Object.defineProperties(n.prototype, {
              matrix: {
                get: function () {
                  return this.uniforms.m.value;
                },
                set: function (e) {
                  this.uniforms.m.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      88: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n',
              { step: { type: '1f', value: 5 } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              step: {
                get: function () {
                  return this.uniforms.step.value;
                },
                set: function (e) {
                  this.uniforms.step.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      89: [
        function (e, t, i) {
          function n(e, t, i) {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n',
              {
                matrix: { type: '1fv', value: new Float32Array(e) },
                texelSize: { type: 'v2', value: { x: 1 / t, y: 1 / i } },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              matrix: {
                get: function () {
                  return this.uniforms.matrix.value;
                },
                set: function (e) {
                  this.uniforms.matrix.value = new Float32Array(e);
                },
              },
              width: {
                get: function () {
                  return 1 / this.uniforms.texelSize.value.x;
                },
                set: function (e) {
                  this.uniforms.texelSize.value.x = 1 / e;
                },
              },
              height: {
                get: function () {
                  return 1 / this.uniforms.texelSize.value.y;
                },
                set: function (e) {
                  this.uniforms.texelSize.value.y = 1 / e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      90: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n'
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n);
        },
        { '../../core': 23 },
      ],
      91: [
        function (e, t, i) {
          function n(e, t) {
            const i = new r.Matrix();
            (e.renderable = !1),
              r.AbstractFilter.call(
                this,
                'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
                'precision mediump float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n',
                {
                  mapSampler: { type: 'sampler2D', value: e.texture },
                  otherMatrix: { type: 'mat3', value: i.toArray(!0) },
                  scale: { type: 'v2', value: { x: 1, y: 1 } },
                }
              ),
              (this.maskSprite = e),
              (this.maskMatrix = i),
              (null !== t && void 0 !== t) || (t = 20),
              (this.scale = new r.Point(t, t));
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager;
              n.calculateMappedMatrix(
                t.frame,
                this.maskSprite,
                this.maskMatrix
              ),
                (this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0)),
                (this.uniforms.scale.value.x =
                  this.scale.x * (1 / t.frame.width)),
                (this.uniforms.scale.value.y =
                  this.scale.y * (1 / t.frame.height));
              const r = this.getShader(e);
              n.applyFilter(r, t, i);
            }),
            Object.defineProperties(n.prototype, {
              map: {
                get: function () {
                  return this.uniforms.mapSampler.value;
                },
                set: function (e) {
                  this.uniforms.mapSampler.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      92: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n',
              {
                scale: { type: '1f', value: 1 },
                angle: { type: '1f', value: 5 },
                dimensions: { type: '4fv', value: [0, 0, 0, 0] },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              scale: {
                get: function () {
                  return this.uniforms.scale.value;
                },
                set: function (e) {
                  this.uniforms.scale.value = e;
                },
              },
              angle: {
                get: function () {
                  return this.uniforms.angle.value;
                },
                set: function (e) {
                  this.uniforms.angle.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      93: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n',
              'precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n',
              {
                blur: { type: '1f', value: 1 / 512 },
                color: { type: 'c', value: [0, 0, 0] },
                alpha: { type: '1f', value: 0.7 },
                offset: { type: '2f', value: [5, 5] },
                strength: { type: '1f', value: 1 },
              }
            ),
              (this.passes = 1),
              (this.strength = 4);
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i, n) {
              const r = this.getShader(e);
              if (
                ((this.uniforms.strength.value =
                  (this.strength / 4 / this.passes) *
                  (t.frame.height / t.size.height)),
                1 === this.passes)
              ) {
                e.filterManager.applyFilter(r, t, i, n);
              } else {
                for (
                  var s = e.filterManager.getRenderTarget(!0),
                    a = t,
                    o = s,
                    l = 0;
                  l < this.passes - 1;
                  l++
                ) {
                  e.filterManager.applyFilter(r, a, o, n);
                  const h = o;
                  (o = a), (a = h);
                }
                e.filterManager.applyFilter(r, a, i, n),
                  e.filterManager.returnRenderTarget(s);
              }
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.strength;
                },
                set: function (e) {
                  (this.padding = 0.5 * e), (this.strength = e);
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      94: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(this),
              (this.blurXFilter = new s()),
              (this.blurYTintFilter = new a()),
              (this.defaultFilter = new r.AbstractFilter()),
              (this.padding = 30),
              (this._dirtyPosition = !0),
              (this._angle = (45 * Math.PI) / 180),
              (this._distance = 10),
              (this.alpha = 0.75),
              (this.hideObject = !1),
              (this.blendMode = r.BLEND_MODES.MULTIPLY);
          }
          var r = e('../../core'),
            s = e('../blur/BlurXFilter'),
            a = e('./BlurYTintFilter');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager.getRenderTarget(!0);
              this._dirtyPosition &&
                ((this._dirtyPosition = !1),
                (this.blurYTintFilter.uniforms.offset.value[0] =
                  Math.sin(this._angle) * this._distance),
                (this.blurYTintFilter.uniforms.offset.value[1] =
                  Math.cos(this._angle) * this._distance)),
                this.blurXFilter.applyFilter(e, t, n),
                e.blendModeManager.setBlendMode(this.blendMode),
                this.blurYTintFilter.applyFilter(e, n, i),
                e.blendModeManager.setBlendMode(r.BLEND_MODES.NORMAL),
                this.hideObject || this.defaultFilter.applyFilter(e, t, i),
                e.filterManager.returnRenderTarget(n);
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = this.blurYTintFilter.blur = e;
                },
              },
              blurX: {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = e;
                },
              },
              blurY: {
                get: function () {
                  return this.blurYTintFilter.blur;
                },
                set: function (e) {
                  this.blurYTintFilter.blur = e;
                },
              },
              color: {
                get: function () {
                  return r.utils.rgb2hex(
                    this.blurYTintFilter.uniforms.color.value
                  );
                },
                set: function (e) {
                  this.blurYTintFilter.uniforms.color.value =
                    r.utils.hex2rgb(e);
                },
              },
              alpha: {
                get: function () {
                  return this.blurYTintFilter.uniforms.alpha.value;
                },
                set: function (e) {
                  this.blurYTintFilter.uniforms.alpha.value = e;
                },
              },
              distance: {
                get: function () {
                  return this._distance;
                },
                set: function (e) {
                  (this._dirtyPosition = !0), (this._distance = e);
                },
              },
              angle: {
                get: function () {
                  return this._angle;
                },
                set: function (e) {
                  (this._dirtyPosition = !0), (this._angle = e);
                },
              },
            });
        },
        {
          '../../core': 23,
          '../blur/BlurXFilter': 84,
          './BlurYTintFilter': 93,
        },
      ],
      95: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n',
              { gray: { type: '1f', value: 1 } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              gray: {
                get: function () {
                  return this.uniforms.gray.value;
                },
                set: function (e) {
                  this.uniforms.gray.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      96: [
        function (e, t, i) {
          t.exports = {
            AsciiFilter: e('./ascii/AsciiFilter'),
            BloomFilter: e('./bloom/BloomFilter'),
            BlurFilter: e('./blur/BlurFilter'),
            BlurXFilter: e('./blur/BlurXFilter'),
            BlurYFilter: e('./blur/BlurYFilter'),
            BlurDirFilter: e('./blur/BlurDirFilter'),
            ColorMatrixFilter: e('./color/ColorMatrixFilter'),
            ColorStepFilter: e('./color/ColorStepFilter'),
            ConvolutionFilter: e('./convolution/ConvolutionFilter'),
            CrossHatchFilter: e('./crosshatch/CrossHatchFilter'),
            DisplacementFilter: e('./displacement/DisplacementFilter'),
            DotScreenFilter: e('./dot/DotScreenFilter'),
            GrayFilter: e('./gray/GrayFilter'),
            DropShadowFilter: e('./dropshadow/DropShadowFilter'),
            InvertFilter: e('./invert/InvertFilter'),
            NoiseFilter: e('./noise/NoiseFilter'),
            PixelateFilter: e('./pixelate/PixelateFilter'),
            RGBSplitFilter: e('./rgb/RGBSplitFilter'),
            ShockwaveFilter: e('./shockwave/ShockwaveFilter'),
            SepiaFilter: e('./sepia/SepiaFilter'),
            SmartBlurFilter: e('./blur/SmartBlurFilter'),
            TiltShiftFilter: e('./tiltshift/TiltShiftFilter'),
            TiltShiftXFilter: e('./tiltshift/TiltShiftXFilter'),
            TiltShiftYFilter: e('./tiltshift/TiltShiftYFilter'),
            TwistFilter: e('./twist/TwistFilter'),
          };
        },
        {
          './ascii/AsciiFilter': 80,
          './bloom/BloomFilter': 81,
          './blur/BlurDirFilter': 82,
          './blur/BlurFilter': 83,
          './blur/BlurXFilter': 84,
          './blur/BlurYFilter': 85,
          './blur/SmartBlurFilter': 86,
          './color/ColorMatrixFilter': 87,
          './color/ColorStepFilter': 88,
          './convolution/ConvolutionFilter': 89,
          './crosshatch/CrossHatchFilter': 90,
          './displacement/DisplacementFilter': 91,
          './dot/DotScreenFilter': 92,
          './dropshadow/DropShadowFilter': 94,
          './gray/GrayFilter': 95,
          './invert/InvertFilter': 97,
          './noise/NoiseFilter': 98,
          './pixelate/PixelateFilter': 99,
          './rgb/RGBSplitFilter': 100,
          './sepia/SepiaFilter': 101,
          './shockwave/ShockwaveFilter': 102,
          './tiltshift/TiltShiftFilter': 104,
          './tiltshift/TiltShiftXFilter': 105,
          './tiltshift/TiltShiftYFilter': 106,
          './twist/TwistFilter': 107,
        },
      ],
      97: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n',
              { invert: { type: '1f', value: 1 } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              invert: {
                get: function () {
                  return this.uniforms.invert.value;
                },
                set: function (e) {
                  this.uniforms.invert.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      98: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n',
              { noise: { type: '1f', value: 0.5 } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              noise: {
                get: function () {
                  return this.uniforms.noise.value;
                },
                set: function (e) {
                  this.uniforms.noise.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      99: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n',
              {
                dimensions: {
                  type: '4fv',
                  value: new Float32Array([0, 0, 0, 0]),
                },
                pixelSize: { type: 'v2', value: { x: 10, y: 10 } },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              size: {
                get: function () {
                  return this.uniforms.pixelSize.value;
                },
                set: function (e) {
                  this.uniforms.pixelSize.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      100: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n',
              {
                red: { type: 'v2', value: { x: 20, y: 20 } },
                green: { type: 'v2', value: { x: -20, y: 20 } },
                blue: { type: 'v2', value: { x: 20, y: -20 } },
                dimensions: { type: '4fv', value: [0, 0, 0, 0] },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              red: {
                get: function () {
                  return this.uniforms.red.value;
                },
                set: function (e) {
                  this.uniforms.red.value = e;
                },
              },
              green: {
                get: function () {
                  return this.uniforms.green.value;
                },
                set: function (e) {
                  this.uniforms.green.value = e;
                },
              },
              blue: {
                get: function () {
                  return this.uniforms.blue.value;
                },
                set: function (e) {
                  this.uniforms.blue.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      101: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n',
              { sepia: { type: '1f', value: 1 } }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              sepia: {
                get: function () {
                  return this.uniforms.sepia.value;
                },
                set: function (e) {
                  this.uniforms.sepia.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      102: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n',
              {
                center: { type: 'v2', value: { x: 0.5, y: 0.5 } },
                params: { type: 'v3', value: { x: 10, y: 0.8, z: 0.1 } },
                time: { type: '1f', value: 0 },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              center: {
                get: function () {
                  return this.uniforms.center.value;
                },
                set: function (e) {
                  this.uniforms.center.value = e;
                },
              },
              params: {
                get: function () {
                  return this.uniforms.params.value;
                },
                set: function (e) {
                  this.uniforms.params.value = e;
                },
              },
              time: {
                get: function () {
                  return this.uniforms.time.value;
                },
                set: function (e) {
                  this.uniforms.time.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      103: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n',
              {
                blur: { type: '1f', value: 100 },
                gradientBlur: { type: '1f', value: 600 },
                start: {
                  type: 'v2',
                  value: { x: 0, y: window.innerHeight / 2 },
                },
                end: {
                  type: 'v2',
                  value: { x: 600, y: window.innerHeight / 2 },
                },
                delta: { type: 'v2', value: { x: 30, y: 30 } },
                texSize: {
                  type: 'v2',
                  value: { x: window.innerWidth, y: window.innerHeight },
                },
              }
            ),
              this.updateDelta();
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.updateDelta = function () {
              (this.uniforms.delta.value.x = 0),
                (this.uniforms.delta.value.y = 0);
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.uniforms.blur.value;
                },
                set: function (e) {
                  this.uniforms.blur.value = e;
                },
              },
              gradientBlur: {
                get: function () {
                  return this.uniforms.gradientBlur.value;
                },
                set: function (e) {
                  this.uniforms.gradientBlur.value = e;
                },
              },
              start: {
                get: function () {
                  return this.uniforms.start.value;
                },
                set: function (e) {
                  (this.uniforms.start.value = e), this.updateDelta();
                },
              },
              end: {
                get: function () {
                  return this.uniforms.end.value;
                },
                set: function (e) {
                  (this.uniforms.end.value = e), this.updateDelta();
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      104: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(this),
              (this.tiltShiftXFilter = new s()),
              (this.tiltShiftYFilter = new a());
          }
          var r = e('../../core'),
            s = e('./TiltShiftXFilter'),
            a = e('./TiltShiftYFilter');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.applyFilter = function (e, t, i) {
              const n = e.filterManager.getRenderTarget(!0);
              this.tiltShiftXFilter.applyFilter(e, t, n),
                this.tiltShiftYFilter.applyFilter(e, n, i),
                e.filterManager.returnRenderTarget(n);
            }),
            Object.defineProperties(n.prototype, {
              blur: {
                get: function () {
                  return this.tiltShiftXFilter.blur;
                },
                set: function (e) {
                  this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e;
                },
              },
              gradientBlur: {
                get: function () {
                  return this.tiltShiftXFilter.gradientBlur;
                },
                set: function (e) {
                  this.tiltShiftXFilter.gradientBlur =
                    this.tiltShiftYFilter.gradientBlur = e;
                },
              },
              start: {
                get: function () {
                  return this.tiltShiftXFilter.start;
                },
                set: function (e) {
                  this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e;
                },
              },
              end: {
                get: function () {
                  return this.tiltShiftXFilter.end;
                },
                set: function (e) {
                  this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e;
                },
              },
            });
        },
        {
          '../../core': 23,
          './TiltShiftXFilter': 105,
          './TiltShiftYFilter': 106,
        },
      ],
      105: [
        function (e, t, i) {
          function n() {
            r.call(this);
          }
          var r = e('./TiltShiftAxisFilter');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.updateDelta = function () {
              const e = this.uniforms.end.value.x - this.uniforms.start.value.x,
                t = this.uniforms.end.value.y - this.uniforms.start.value.y,
                i = Math.sqrt(e * e + t * t);
              (this.uniforms.delta.value.x = e / i),
                (this.uniforms.delta.value.y = t / i);
            });
        },
        { './TiltShiftAxisFilter': 103 },
      ],
      106: [
        function (e, t, i) {
          function n() {
            r.call(this);
          }
          var r = e('./TiltShiftAxisFilter');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.updateDelta = function () {
              const e = this.uniforms.end.value.x - this.uniforms.start.value.x,
                t = this.uniforms.end.value.y - this.uniforms.start.value.y,
                i = Math.sqrt(e * e + t * t);
              (this.uniforms.delta.value.x = -t / i),
                (this.uniforms.delta.value.y = e / i);
            });
        },
        { './TiltShiftAxisFilter': 103 },
      ],
      107: [
        function (e, t, i) {
          function n() {
            r.AbstractFilter.call(
              this,
              null,
              'precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n',
              {
                radius: { type: '1f', value: 0.5 },
                angle: { type: '1f', value: 5 },
                offset: { type: 'v2', value: { x: 0.5, y: 0.5 } },
              }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.AbstractFilter.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              offset: {
                get: function () {
                  return this.uniforms.offset.value;
                },
                set: function (e) {
                  this.uniforms.offset.value = e;
                },
              },
              radius: {
                get: function () {
                  return this.uniforms.radius.value;
                },
                set: function (e) {
                  this.uniforms.radius.value = e;
                },
              },
              angle: {
                get: function () {
                  return this.uniforms.angle.value;
                },
                set: function (e) {
                  this.uniforms.angle.value = e;
                },
              },
            });
        },
        { '../../core': 23 },
      ],
      108: [
        function (e, t, i) {
          (function (i) {
            e('./polyfill');
            const n = (t.exports = e('./core'));
            (n.extras = e('./extras')),
              (n.filters = e('./filters')),
              (n.interaction = e('./interaction')),
              (n.loaders = e('./loaders')),
              (n.mesh = e('./mesh')),
              (n.accessibility = e('./accessibility')),
              (n.loader = new n.loaders.Loader()),
              Object.assign(n, e('./deprecation')),
              (i.PIXI = n);
          }.call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          ));
        },
        {
          './accessibility': 15,
          './core': 23,
          './deprecation': 72,
          './extras': 79,
          './filters': 96,
          './interaction': 111,
          './loaders': 114,
          './mesh': 121,
          './polyfill': 126,
        },
      ],
      109: [
        function (e, t, i) {
          function n() {
            (this.global = new r.Point()),
              (this.target = null),
              (this.originalEvent = null);
          }
          var r = e('../core');
          (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.getLocalPosition = function (e, t, i) {
              return e.worldTransform.applyInverse(i || this.global, t);
            });
        },
        { '../core': 23 },
      ],
      110: [
        function (e, t, i) {
          function n(e, t) {
            (t = t || {}),
              (this.renderer = e),
              (this.autoPreventDefault =
                void 0 !== t.autoPreventDefault ? t.autoPreventDefault : !0),
              (this.interactionFrequency = t.interactionFrequency || 10),
              (this.mouse = new s()),
              (this.eventData = {
                stopped: !1,
                target: null,
                type: null,
                data: this.mouse,
                stopPropagation: function () {
                  this.stopped = !0;
                },
              }),
              (this.interactiveDataPool = []),
              (this.interactionDOMElement = null),
              (this.eventsAdded = !1),
              (this.onMouseUp = this.onMouseUp.bind(this)),
              (this.processMouseUp = this.processMouseUp.bind(this)),
              (this.onMouseDown = this.onMouseDown.bind(this)),
              (this.processMouseDown = this.processMouseDown.bind(this)),
              (this.onMouseMove = this.onMouseMove.bind(this)),
              (this.processMouseMove = this.processMouseMove.bind(this)),
              (this.onMouseOut = this.onMouseOut.bind(this)),
              (this.processMouseOverOut = this.processMouseOverOut.bind(this)),
              (this.onTouchStart = this.onTouchStart.bind(this)),
              (this.processTouchStart = this.processTouchStart.bind(this)),
              (this.onTouchEnd = this.onTouchEnd.bind(this)),
              (this.processTouchEnd = this.processTouchEnd.bind(this)),
              (this.onTouchMove = this.onTouchMove.bind(this)),
              (this.processTouchMove = this.processTouchMove.bind(this)),
              (this.last = 0),
              (this.currentCursorStyle = 'inherit'),
              (this._tempPoint = new r.Point()),
              (this.resolution = 1),
              this.setTargetElement(
                this.renderer.view,
                this.renderer.resolution
              );
          }
          var r = e('../core'),
            s = e('./InteractionData');
          Object.assign(r.DisplayObject.prototype, e('./interactiveTarget')),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.setTargetElement = function (e, t) {
              this.removeEvents(),
                (this.interactionDOMElement = e),
                (this.resolution = t || 1),
                this.addEvents();
            }),
            (n.prototype.addEvents = function () {
              this.interactionDOMElement &&
                (r.ticker.shared.add(this.update, this),
                window.navigator.msPointerEnabled &&
                  ((this.interactionDOMElement.style['-ms-content-zooming'] =
                    'none'),
                  (this.interactionDOMElement.style['-ms-touch-action'] =
                    'none')),
                window.document.addEventListener(
                  'mousemove',
                  this.onMouseMove,
                  !0
                ),
                this.interactionDOMElement.addEventListener(
                  'mousedown',
                  this.onMouseDown,
                  !0
                ),
                this.interactionDOMElement.addEventListener(
                  'mouseout',
                  this.onMouseOut,
                  !0
                ),
                this.interactionDOMElement.addEventListener(
                  'touchstart',
                  this.onTouchStart,
                  !0
                ),
                this.interactionDOMElement.addEventListener(
                  'touchend',
                  this.onTouchEnd,
                  !0
                ),
                this.interactionDOMElement.addEventListener(
                  'touchmove',
                  this.onTouchMove,
                  !0
                ),
                window.addEventListener('mouseup', this.onMouseUp, !0),
                (this.eventsAdded = !0));
            }),
            (n.prototype.removeEvents = function () {
              this.interactionDOMElement &&
                (r.ticker.shared.remove(this.update),
                window.navigator.msPointerEnabled &&
                  ((this.interactionDOMElement.style['-ms-content-zooming'] =
                    ''),
                  (this.interactionDOMElement.style['-ms-touch-action'] = '')),
                window.document.removeEventListener(
                  'mousemove',
                  this.onMouseMove,
                  !0
                ),
                this.interactionDOMElement.removeEventListener(
                  'mousedown',
                  this.onMouseDown,
                  !0
                ),
                this.interactionDOMElement.removeEventListener(
                  'mouseout',
                  this.onMouseOut,
                  !0
                ),
                this.interactionDOMElement.removeEventListener(
                  'touchstart',
                  this.onTouchStart,
                  !0
                ),
                this.interactionDOMElement.removeEventListener(
                  'touchend',
                  this.onTouchEnd,
                  !0
                ),
                this.interactionDOMElement.removeEventListener(
                  'touchmove',
                  this.onTouchMove,
                  !0
                ),
                (this.interactionDOMElement = null),
                window.removeEventListener('mouseup', this.onMouseUp, !0),
                (this.eventsAdded = !1));
            }),
            (n.prototype.update = function (e) {
              if (
                ((this._deltaTime += e),
                !(this._deltaTime < this.interactionFrequency) &&
                  ((this._deltaTime = 0), this.interactionDOMElement))
              ) {
                if (this.didMove) {
                  return void (this.didMove = !1);
                }
                (this.cursor = 'inherit'),
                  this.processInteractive(
                    this.mouse.global,
                    this.renderer._lastObjectRendered,
                    this.processMouseOverOut,
                    !0
                  ),
                  this.currentCursorStyle !== this.cursor &&
                    ((this.currentCursorStyle = this.cursor),
                    (this.interactionDOMElement.style.cursor = this.cursor));
              }
            }),
            (n.prototype.dispatchEvent = function (e, t, i) {
              i.stopped ||
                ((i.target = e), (i.type = t), e.emit(t, i), e[t] && e[t](i));
            }),
            (n.prototype.mapPositionToPoint = function (e, t, i) {
              const n = this.interactionDOMElement.getBoundingClientRect();
              (e.x =
                ((t - n.left) * (this.interactionDOMElement.width / n.width)) /
                this.resolution),
                (e.y =
                  ((i - n.top) *
                    (this.interactionDOMElement.height / n.height)) /
                  this.resolution);
            }),
            (n.prototype.processInteractive = function (e, t, i, n, r) {
              if (!t || !t.visible) {
                return !1;
              }
              let s = !1,
                a = (r = t.interactive || r);
              if ((t.hitArea && (a = !1), t.interactiveChildren)) {
                for (let o = t.children, l = o.length - 1; l >= 0; l--) {
                  this.processInteractive(e, o[l], i, n, a) &&
                    ((s = !0), (a = !1), o[l].interactive && (n = !1));
                }
              }
              return (
                r &&
                  (n &&
                    !s &&
                    (t.hitArea
                      ? (t.worldTransform.applyInverse(e, this._tempPoint),
                        (s = t.hitArea.contains(
                          this._tempPoint.x,
                          this._tempPoint.y
                        )))
                      : t.containsPoint && (s = t.containsPoint(e))),
                  t.interactive && i(t, s)),
                s
              );
            }),
            (n.prototype.onMouseDown = function (e) {
              (this.mouse.originalEvent = e),
                (this.eventData.data = this.mouse),
                (this.eventData.stopped = !1),
                this.mapPositionToPoint(
                  this.mouse.global,
                  e.clientX,
                  e.clientY
                ),
                this.autoPreventDefault &&
                  this.mouse.originalEvent.preventDefault(),
                this.processInteractive(
                  this.mouse.global,
                  this.renderer._lastObjectRendered,
                  this.processMouseDown,
                  !0
                );
            }),
            (n.prototype.processMouseDown = function (e, t) {
              const i = this.mouse.originalEvent,
                n = 2 === i.button || 3 === i.which;
              t &&
                ((e[n ? '_isRightDown' : '_isLeftDown'] = !0),
                this.dispatchEvent(
                  e,
                  n ? 'rightdown' : 'mousedown',
                  this.eventData
                ));
            }),
            (n.prototype.onMouseUp = function (e) {
              (this.mouse.originalEvent = e),
                (this.eventData.data = this.mouse),
                (this.eventData.stopped = !1),
                this.mapPositionToPoint(
                  this.mouse.global,
                  e.clientX,
                  e.clientY
                ),
                this.processInteractive(
                  this.mouse.global,
                  this.renderer._lastObjectRendered,
                  this.processMouseUp,
                  !0
                );
            }),
            (n.prototype.processMouseUp = function (e, t) {
              const i = this.mouse.originalEvent,
                n = 2 === i.button || 3 === i.which,
                r = n ? '_isRightDown' : '_isLeftDown';
              t
                ? (this.dispatchEvent(
                    e,
                    n ? 'rightup' : 'mouseup',
                    this.eventData
                  ),
                  e[r] &&
                    ((e[r] = !1),
                    this.dispatchEvent(
                      e,
                      n ? 'rightclick' : 'click',
                      this.eventData
                    )))
                : e[r] &&
                  ((e[r] = !1),
                  this.dispatchEvent(
                    e,
                    n ? 'rightupoutside' : 'mouseupoutside',
                    this.eventData
                  ));
            }),
            (n.prototype.onMouseMove = function (e) {
              (this.mouse.originalEvent = e),
                (this.eventData.data = this.mouse),
                (this.eventData.stopped = !1),
                this.mapPositionToPoint(
                  this.mouse.global,
                  e.clientX,
                  e.clientY
                ),
                (this.didMove = !0),
                (this.cursor = 'inherit'),
                this.processInteractive(
                  this.mouse.global,
                  this.renderer._lastObjectRendered,
                  this.processMouseMove,
                  !0
                ),
                this.currentCursorStyle !== this.cursor &&
                  ((this.currentCursorStyle = this.cursor),
                  (this.interactionDOMElement.style.cursor = this.cursor));
            }),
            (n.prototype.processMouseMove = function (e, t) {
              this.dispatchEvent(e, 'mousemove', this.eventData),
                this.processMouseOverOut(e, t);
            }),
            (n.prototype.onMouseOut = function (e) {
              (this.mouse.originalEvent = e),
                (this.eventData.stopped = !1),
                this.mapPositionToPoint(
                  this.mouse.global,
                  e.clientX,
                  e.clientY
                ),
                (this.interactionDOMElement.style.cursor = 'inherit'),
                this.mapPositionToPoint(
                  this.mouse.global,
                  e.clientX,
                  e.clientY
                ),
                this.processInteractive(
                  this.mouse.global,
                  this.renderer._lastObjectRendered,
                  this.processMouseOverOut,
                  !1
                );
            }),
            (n.prototype.processMouseOverOut = function (e, t) {
              t
                ? (e._over ||
                    ((e._over = !0),
                    this.dispatchEvent(e, 'mouseover', this.eventData)),
                  e.buttonMode && (this.cursor = e.defaultCursor))
                : e._over &&
                  ((e._over = !1),
                  this.dispatchEvent(e, 'mouseout', this.eventData));
            }),
            (n.prototype.onTouchStart = function (e) {
              this.autoPreventDefault && e.preventDefault();
              for (let t = e.changedTouches, i = t.length, n = 0; i > n; n++) {
                const r = t[n],
                  s = this.getTouchData(r);
                (s.originalEvent = e),
                  (this.eventData.data = s),
                  (this.eventData.stopped = !1),
                  this.processInteractive(
                    s.global,
                    this.renderer._lastObjectRendered,
                    this.processTouchStart,
                    !0
                  ),
                  this.returnTouchData(s);
              }
            }),
            (n.prototype.processTouchStart = function (e, t) {
              t &&
                ((e._touchDown = !0),
                this.dispatchEvent(e, 'touchstart', this.eventData));
            }),
            (n.prototype.onTouchEnd = function (e) {
              this.autoPreventDefault && e.preventDefault();
              for (let t = e.changedTouches, i = t.length, n = 0; i > n; n++) {
                const r = t[n],
                  s = this.getTouchData(r);
                (s.originalEvent = e),
                  (this.eventData.data = s),
                  (this.eventData.stopped = !1),
                  this.processInteractive(
                    s.global,
                    this.renderer._lastObjectRendered,
                    this.processTouchEnd,
                    !0
                  ),
                  this.returnTouchData(s);
              }
            }),
            (n.prototype.processTouchEnd = function (e, t) {
              t
                ? (this.dispatchEvent(e, 'touchend', this.eventData),
                  e._touchDown &&
                    ((e._touchDown = !1),
                    this.dispatchEvent(e, 'tap', this.eventData)))
                : e._touchDown &&
                  ((e._touchDown = !1),
                  this.dispatchEvent(e, 'touchendoutside', this.eventData));
            }),
            (n.prototype.onTouchMove = function (e) {
              this.autoPreventDefault && e.preventDefault();
              for (let t = e.changedTouches, i = t.length, n = 0; i > n; n++) {
                const r = t[n],
                  s = this.getTouchData(r);
                (s.originalEvent = e),
                  (this.eventData.data = s),
                  (this.eventData.stopped = !1),
                  this.processInteractive(
                    s.global,
                    this.renderer._lastObjectRendered,
                    this.processTouchMove,
                    !0
                  ),
                  this.returnTouchData(s);
              }
            }),
            (n.prototype.processTouchMove = function (e, t) {
              (t = t), this.dispatchEvent(e, 'touchmove', this.eventData);
            }),
            (n.prototype.getTouchData = function (e) {
              let t = this.interactiveDataPool.pop();
              return (
                t || (t = new s()),
                (t.identifier = e.identifier),
                this.mapPositionToPoint(t.global, e.clientX, e.clientY),
                navigator.isCocoonJS &&
                  ((t.global.x = t.global.x / this.resolution),
                  (t.global.y = t.global.y / this.resolution)),
                (e.globalX = t.global.x),
                (e.globalY = t.global.y),
                t
              );
            }),
            (n.prototype.returnTouchData = function (e) {
              this.interactiveDataPool.push(e);
            }),
            (n.prototype.destroy = function () {
              this.removeEvents(),
                (this.renderer = null),
                (this.mouse = null),
                (this.eventData = null),
                (this.interactiveDataPool = null),
                (this.interactionDOMElement = null),
                (this.onMouseUp = null),
                (this.processMouseUp = null),
                (this.onMouseDown = null),
                (this.processMouseDown = null),
                (this.onMouseMove = null),
                (this.processMouseMove = null),
                (this.onMouseOut = null),
                (this.processMouseOverOut = null),
                (this.onTouchStart = null),
                (this.processTouchStart = null),
                (this.onTouchEnd = null),
                (this.processTouchEnd = null),
                (this.onTouchMove = null),
                (this.processTouchMove = null),
                (this._tempPoint = null);
            }),
            r.WebGLRenderer.registerPlugin('interaction', n),
            r.CanvasRenderer.registerPlugin('interaction', n);
        },
        {
          '../core': 23,
          './InteractionData': 109,
          './interactiveTarget': 112,
        },
      ],
      111: [
        function (e, t, i) {
          t.exports = {
            InteractionData: e('./InteractionData'),
            InteractionManager: e('./InteractionManager'),
            interactiveTarget: e('./interactiveTarget'),
          };
        },
        {
          './InteractionData': 109,
          './InteractionManager': 110,
          './interactiveTarget': 112,
        },
      ],
      112: [
        function (e, t, i) {
          const n = {
            interactive: !1,
            buttonMode: !1,
            interactiveChildren: !0,
            defaultCursor: 'pointer',
            _over: !1,
            _touchDown: !1,
          };
          t.exports = n;
        },
        {},
      ],
      113: [
        function (e, t, i) {
          function n(e, t) {
            const i = {},
              n = e.data.getElementsByTagName('info')[0],
              r = e.data.getElementsByTagName('common')[0];
            (i.font = n.getAttribute('face')),
              (i.size = parseInt(n.getAttribute('size'), 10)),
              (i.lineHeight = parseInt(r.getAttribute('lineHeight'), 10)),
              (i.chars = {});
            for (
              var o = e.data.getElementsByTagName('char'), l = 0;
              l < o.length;
              l++
            ) {
              const h = parseInt(o[l].getAttribute('id'), 10),
                c = new s.Rectangle(
                  parseInt(o[l].getAttribute('x'), 10) + t.frame.x,
                  parseInt(o[l].getAttribute('y'), 10) + t.frame.y,
                  parseInt(o[l].getAttribute('width'), 10),
                  parseInt(o[l].getAttribute('height'), 10)
                );
              i.chars[h] = {
                xOffset: parseInt(o[l].getAttribute('xoffset'), 10),
                yOffset: parseInt(o[l].getAttribute('yoffset'), 10),
                xAdvance: parseInt(o[l].getAttribute('xadvance'), 10),
                kerning: {},
                texture: new s.Texture(t.baseTexture, c),
              };
            }
            const u = e.data.getElementsByTagName('kerning');
            for (l = 0; l < u.length; l++) {
              const d = parseInt(u[l].getAttribute('first'), 10),
                p = parseInt(u[l].getAttribute('second'), 10),
                f = parseInt(u[l].getAttribute('amount'), 10);
              i.chars[p].kerning[d] = f;
            }
            (e.bitmapFont = i), (a.BitmapText.fonts[i.font] = i);
          }
          var r = e('resource-loader').Resource,
            s = e('../core'),
            a = e('../extras'),
            o = e('path');
          t.exports = function () {
            return function (e, t) {
              if (!e.data || !e.isXml) {
                return t();
              }
              if (
                0 === e.data.getElementsByTagName('page').length ||
                0 === e.data.getElementsByTagName('info').length ||
                null ===
                  e.data.getElementsByTagName('info')[0].getAttribute('face')
              ) {
                return t();
              }
              let i = o.dirname(e.url);
              '.' === i && (i = ''),
                this.baseUrl &&
                  i &&
                  ('/' === this.baseUrl.charAt(this.baseUrl.length - 1) &&
                    (i += '/'),
                  (i = i.replace(this.baseUrl, ''))),
                i && '/' !== i.charAt(i.length - 1) && (i += '/');
              const a =
                i + e.data.getElementsByTagName('page')[0].getAttribute('file');
              if (s.utils.TextureCache[a]) {
                n(e, s.utils.TextureCache[a]), t();
              } else {
                const l = {
                  crossOrigin: e.crossOrigin,
                  loadType: r.LOAD_TYPE.IMAGE,
                  metadata: e.metadata.imageMetadata,
                };
                this.add(e.name + '_image', a, l, function (i) {
                  n(e, i.texture), t();
                });
              }
            };
          };
        },
        { '../core': 23, '../extras': 79, path: 2, 'resource-loader': 133 },
      ],
      114: [
        function (e, t, i) {
          t.exports = {
            Loader: e('./loader'),
            bitmapFontParser: e('./bitmapFontParser'),
            spritesheetParser: e('./spritesheetParser'),
            textureParser: e('./textureParser'),
            Resource: e('resource-loader').Resource,
          };
        },
        {
          './bitmapFontParser': 113,
          './loader': 115,
          './spritesheetParser': 116,
          './textureParser': 117,
          'resource-loader': 133,
        },
      ],
      115: [
        function (e, t, i) {
          function n(e, t) {
            r.call(this, e, t);
            for (let i = 0; i < n._pixiMiddleware.length; ++i) {
              this.use(n._pixiMiddleware[i]());
            }
          }
          var r = e('resource-loader'),
            s = e('./textureParser'),
            a = e('./spritesheetParser'),
            o = e('./bitmapFontParser');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n._pixiMiddleware = [r.middleware.parsing.blob, s, a, o]),
            (n.addPixiMiddleware = function (e) {
              n._pixiMiddleware.push(e);
            });
          const l = r.Resource;
          l.setExtensionXhrType('fnt', l.XHR_RESPONSE_TYPE.DOCUMENT);
        },
        {
          './bitmapFontParser': 113,
          './spritesheetParser': 116,
          './textureParser': 117,
          'resource-loader': 133,
        },
      ],
      116: [
        function (e, t, i) {
          const n = e('resource-loader').Resource,
            r = e('path'),
            s = e('../core');
          t.exports = function () {
            return function (e, t) {
              if (!e.data || !e.isJson || !e.data.frames) {
                return t();
              }
              const i = {
                  crossOrigin: e.crossOrigin,
                  loadType: n.LOAD_TYPE.IMAGE,
                  metadata: e.metadata.imageMetadata,
                },
                a = r.dirname(e.url.replace(this.baseUrl, '')),
                o = s.utils.getResolutionOfUrl(e.url);
              this.add(
                e.name + '_image',
                a + '/' + e.data.meta.image,
                i,
                function (i) {
                  e.textures = {};
                  const n = e.data.frames;
                  for (const r in n) {
                    const a = n[r].frame;
                    if (a) {
                      let l = null,
                        h = null;
                      if (
                        ((l = n[r].rotated
                          ? new s.Rectangle(a.x, a.y, a.h, a.w)
                          : new s.Rectangle(a.x, a.y, a.w, a.h)),
                        n[r].trimmed &&
                          (h = new s.Rectangle(
                            n[r].spriteSourceSize.x / o,
                            n[r].spriteSourceSize.y / o,
                            n[r].sourceSize.w / o,
                            n[r].sourceSize.h / o
                          )),
                        n[r].rotated)
                      ) {
                        const c = l.width;
                        (l.width = l.height), (l.height = c);
                      }
                      (l.x /= o),
                        (l.y /= o),
                        (l.width /= o),
                        (l.height /= o),
                        (e.textures[r] = new s.Texture(
                          i.texture.baseTexture,
                          l,
                          l.clone(),
                          h,
                          n[r].rotated
                        )),
                        (s.utils.TextureCache[r] = e.textures[r]);
                    }
                  }
                  t();
                }
              );
            };
          };
        },
        { '../core': 23, path: 2, 'resource-loader': 133 },
      ],
      117: [
        function (e, t, i) {
          const n = e('../core');
          t.exports = function () {
            return function (e, t) {
              if (e.data && e.isImage) {
                const i = new n.BaseTexture(
                  e.data,
                  null,
                  n.utils.getResolutionOfUrl(e.url)
                );
                (i.imageUrl = e.url),
                  (e.texture = new n.Texture(i)),
                  (n.utils.BaseTextureCache[e.url] = i),
                  (n.utils.TextureCache[e.url] = e.texture);
              }
              t();
            };
          };
        },
        { '../core': 23 },
      ],
      118: [
        function (e, t, i) {
          function n(e, t, i, s, a) {
            r.Container.call(this),
              (this._texture = null),
              (this.uvs = i || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
              (this.vertices =
                t || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100])),
              (this.indices = s || new Uint16Array([0, 1, 3, 2])),
              (this.dirty = !0),
              (this.blendMode = r.BLEND_MODES.NORMAL),
              (this.canvasPadding = 0),
              (this.drawMode = a || n.DRAW_MODES.TRIANGLE_MESH),
              (this.texture = e),
              (this.shader = null);
          }
          var r = e('../core'),
            s = new r.Point(),
            a = new r.Polygon();
          (n.prototype = Object.create(r.Container.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            Object.defineProperties(n.prototype, {
              texture: {
                get: function () {
                  return this._texture;
                },
                set: function (e) {
                  this._texture !== e &&
                    ((this._texture = e),
                    e &&
                      (e.baseTexture.hasLoaded
                        ? this._onTextureUpdate()
                        : e.once('update', this._onTextureUpdate, this)));
                },
              },
            }),
            (n.prototype._renderWebGL = function (e) {
              e.setObjectRenderer(e.plugins.mesh), e.plugins.mesh.render(this);
            }),
            (n.prototype._renderCanvas = function (e) {
              const t = e.context,
                i = this.worldTransform;
              e.roundPixels
                ? t.setTransform(i.a, i.b, i.c, i.d, 0 | i.tx, 0 | i.ty)
                : t.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
                this.drawMode === n.DRAW_MODES.TRIANGLE_MESH
                  ? this._renderCanvasTriangleMesh(t)
                  : this._renderCanvasTriangles(t);
            }),
            (n.prototype._renderCanvasTriangleMesh = function (e) {
              for (
                let t = this.vertices, i = this.uvs, n = t.length / 2, r = 0;
                n - 2 > r;
                r++
              ) {
                const s = 2 * r;
                this._renderCanvasDrawTriangle(e, t, i, s, s + 2, s + 4);
              }
            }),
            (n.prototype._renderCanvasTriangles = function (e) {
              for (
                let t = this.vertices,
                  i = this.uvs,
                  n = this.indices,
                  r = n.length,
                  s = 0;
                r > s;
                s += 3
              ) {
                const a = 2 * n[s],
                  o = 2 * n[s + 1],
                  l = 2 * n[s + 2];
                this._renderCanvasDrawTriangle(e, t, i, a, o, l);
              }
            }),
            (n.prototype._renderCanvasDrawTriangle = function (
              e,
              t,
              i,
              n,
              r,
              s
            ) {
              let a = this._texture.baseTexture.source,
                o = this._texture.baseTexture.width,
                l = this._texture.baseTexture.height,
                h = t[n],
                c = t[r],
                u = t[s],
                d = t[n + 1],
                p = t[r + 1],
                f = t[s + 1],
                m = i[n] * o,
                g = i[r] * o,
                y = i[s] * o,
                v = i[n + 1] * l,
                b = i[r + 1] * l,
                x = i[s + 1] * l;
              if (this.canvasPadding > 0) {
                let w = this.canvasPadding / this.worldTransform.a,
                  _ = this.canvasPadding / this.worldTransform.d,
                  T = (h + c + u) / 3,
                  S = (d + p + f) / 3,
                  C = h - T,
                  E = d - S,
                  A = Math.sqrt(C * C + E * E);
                (h = T + (C / A) * (A + w)),
                  (d = S + (E / A) * (A + _)),
                  (C = c - T),
                  (E = p - S),
                  (A = Math.sqrt(C * C + E * E)),
                  (c = T + (C / A) * (A + w)),
                  (p = S + (E / A) * (A + _)),
                  (C = u - T),
                  (E = f - S),
                  (A = Math.sqrt(C * C + E * E)),
                  (u = T + (C / A) * (A + w)),
                  (f = S + (E / A) * (A + _));
              }
              e.save(),
                e.beginPath(),
                e.moveTo(h, d),
                e.lineTo(c, p),
                e.lineTo(u, f),
                e.closePath(),
                e.clip();
              const P = m * b + v * y + g * x - b * y - v * g - m * x,
                M = h * b + v * u + c * x - b * u - v * c - h * x,
                k = m * c + h * y + g * u - c * y - h * g - m * u,
                R =
                  m * b * u +
                  v * c * y +
                  h * g * x -
                  h * b * y -
                  v * g * u -
                  m * c * x,
                O = d * b + v * f + p * x - b * f - v * p - d * x,
                I = m * p + d * y + g * f - p * y - d * g - m * f,
                F =
                  m * b * f +
                  v * p * y +
                  d * g * x -
                  d * b * y -
                  v * g * f -
                  m * p * x;
              e.transform(M / P, O / P, k / P, I / P, R / P, F / P),
                e.drawImage(a, 0, 0),
                e.restore();
            }),
            (n.prototype.renderMeshFlat = function (e) {
              const t = this.context,
                i = e.vertices,
                n = i.length / 2;
              t.beginPath();
              for (let r = 1; n - 2 > r; r++) {
                const s = 2 * r,
                  a = i[s],
                  o = i[s + 2],
                  l = i[s + 4],
                  h = i[s + 1],
                  c = i[s + 3],
                  u = i[s + 5];
                t.moveTo(a, h), t.lineTo(o, c), t.lineTo(l, u);
              }
              (t.fillStyle = '#FF0000'), t.fill(), t.closePath();
            }),
            (n.prototype._onTextureUpdate = function () {
              this.updateFrame = !0;
            }),
            (n.prototype.getBounds = function (e) {
              if (!this._currentBounds) {
                for (
                  var t = e || this.worldTransform,
                    i = t.a,
                    n = t.b,
                    s = t.c,
                    a = t.d,
                    o = t.tx,
                    l = t.ty,
                    h = -(1 / 0),
                    c = -(1 / 0),
                    u = 1 / 0,
                    d = 1 / 0,
                    p = this.vertices,
                    f = 0,
                    m = p.length;
                  m > f;
                  f += 2
                ) {
                  const g = p[f],
                    y = p[f + 1],
                    v = i * g + s * y + o,
                    b = a * y + n * g + l;
                  (u = u > v ? v : u),
                    (d = d > b ? b : d),
                    (h = v > h ? v : h),
                    (c = b > c ? b : c);
                }
                if (u === -(1 / 0) || c === 1 / 0) {
                  return r.Rectangle.EMPTY;
                }
                const x = this._bounds;
                (x.x = u),
                  (x.width = h - u),
                  (x.y = d),
                  (x.height = c - d),
                  (this._currentBounds = x);
              }
              return this._currentBounds;
            }),
            (n.prototype.containsPoint = function (e) {
              if (!this.getBounds().contains(e.x, e.y)) {
                return !1;
              }
              this.worldTransform.applyInverse(e, s);
              let t,
                i,
                r = this.vertices,
                o = a.points;
              if (this.drawMode === n.DRAW_MODES.TRIANGLES) {
                const l = this.indices;
                for (i = this.indices.length, t = 0; i > t; t += 3) {
                  const h = 2 * l[t],
                    c = 2 * l[t + 1],
                    u = 2 * l[t + 2];
                  if (
                    ((o[0] = r[h]),
                    (o[1] = r[h + 1]),
                    (o[2] = r[c]),
                    (o[3] = r[c + 1]),
                    (o[4] = r[u]),
                    (o[5] = r[u + 1]),
                    a.contains(s.x, s.y))
                  ) {
                    return !0;
                  }
                }
              } else {
                for (i = r.length, t = 0; i > t; t += 6) {
                  if (
                    ((o[0] = r[t]),
                    (o[1] = r[t + 1]),
                    (o[2] = r[t + 2]),
                    (o[3] = r[t + 3]),
                    (o[4] = r[t + 4]),
                    (o[5] = r[t + 5]),
                    a.contains(s.x, s.y))
                  ) {
                    return !0;
                  }
                }
              }
              return !1;
            }),
            (n.DRAW_MODES = { TRIANGLE_MESH: 0, TRIANGLES: 1 });
        },
        { '../core': 23 },
      ],
      119: [
        function (e, t, i) {
          function n(e, t, i) {
            r.call(this, e),
              (this._ready = !0),
              (this.segmentsX = t || 10),
              (this.segmentsY = i || 10),
              (this.drawMode = r.DRAW_MODES.TRIANGLES),
              this.refresh();
          }
          var r = e('./Mesh');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.refresh = function () {
              let e = this.segmentsX * this.segmentsY,
                t = [],
                i = [],
                n = [],
                r = [],
                s = this.texture,
                a = this.segmentsX - 1,
                o = this.segmentsY - 1,
                l = 0,
                h = s.width / a,
                c = s.height / o;
              for (l = 0; e > l; l++) {
                const u = l % this.segmentsX,
                  d = (l / this.segmentsX) | 0;
                t.push(u * h, d * c),
                  n.push(u / (this.segmentsX - 1), d / (this.segmentsY - 1));
              }
              const p = a * o;
              for (l = 0; p > l; l++) {
                const f = l % a,
                  m = (l / a) | 0,
                  g = m * this.segmentsX + f,
                  y = m * this.segmentsX + f + 1,
                  v = (m + 1) * this.segmentsX + f,
                  b = (m + 1) * this.segmentsX + f + 1;
                r.push(g, y, v), r.push(y, b, v);
              }
              (this.vertices = new Float32Array(t)),
                (this.uvs = new Float32Array(n)),
                (this.colors = new Float32Array(i)),
                (this.indices = new Uint16Array(r));
            }),
            (n.prototype._onTextureUpdate = function () {
              r.prototype._onTextureUpdate.call(this),
                this._ready && this.refresh();
            });
        },
        { './Mesh': 118 },
      ],
      120: [
        function (e, t, i) {
          function n(e, t) {
            r.call(this, e),
              (this.points = t),
              (this.vertices = new Float32Array(4 * t.length)),
              (this.uvs = new Float32Array(4 * t.length)),
              (this.colors = new Float32Array(2 * t.length)),
              (this.indices = new Uint16Array(2 * t.length)),
              (this._ready = !0),
              this.refresh();
          }
          var r = e('./Mesh'),
            s = e('../core');
          (n.prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.refresh = function () {
              const e = this.points;
              if (!(e.length < 1) && this._texture._uvs) {
                const t = this.uvs,
                  i = this.indices,
                  n = this.colors,
                  r = this._texture._uvs,
                  a = new s.Point(r.x0, r.y0),
                  o = new s.Point(r.x2 - r.x0, r.y2 - r.y0);
                (t[0] = 0 + a.x),
                  (t[1] = 0 + a.y),
                  (t[2] = 0 + a.x),
                  (t[3] = 1 * o.y + a.y),
                  (n[0] = 1),
                  (n[1] = 1),
                  (i[0] = 0),
                  (i[1] = 1);
                for (var l, h, c, u = e.length, d = 1; u > d; d++) {
                  (l = e[d]),
                    (h = 4 * d),
                    (c = d / (u - 1)),
                    (t[h] = c * o.x + a.x),
                    (t[h + 1] = 0 + a.y),
                    (t[h + 2] = c * o.x + a.x),
                    (t[h + 3] = 1 * o.y + a.y),
                    (h = 2 * d),
                    (n[h] = 1),
                    (n[h + 1] = 1),
                    (h = 2 * d),
                    (i[h] = h),
                    (i[h + 1] = h + 1);
                }
                this.dirty = !0;
              }
            }),
            (n.prototype._onTextureUpdate = function () {
              r.prototype._onTextureUpdate.call(this),
                this._ready && this.refresh();
            }),
            (n.prototype.updateTransform = function () {
              const e = this.points;
              if (!(e.length < 1)) {
                for (
                  var t,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o = e[0],
                    l = 0,
                    h = 0,
                    c = this.vertices,
                    u = e.length,
                    d = 0;
                  u > d;
                  d++
                ) {
                  (i = e[d]),
                    (n = 4 * d),
                    (t = d < e.length - 1 ? e[d + 1] : i),
                    (h = -(t.x - o.x)),
                    (l = t.y - o.y),
                    (r = 10 * (1 - d / (u - 1))),
                    r > 1 && (r = 1),
                    (s = Math.sqrt(l * l + h * h)),
                    (a = this._texture.height / 2),
                    (l /= s),
                    (h /= s),
                    (l *= a),
                    (h *= a),
                    (c[n] = i.x + l),
                    (c[n + 1] = i.y + h),
                    (c[n + 2] = i.x - l),
                    (c[n + 3] = i.y - h),
                    (o = i);
                }
                this.containerUpdateTransform();
              }
            });
        },
        { '../core': 23, './Mesh': 118 },
      ],
      121: [
        function (e, t, i) {
          t.exports = {
            Mesh: e('./Mesh'),
            Plane: e('./Plane'),
            Rope: e('./Rope'),
            MeshRenderer: e('./webgl/MeshRenderer'),
            MeshShader: e('./webgl/MeshShader'),
          };
        },
        {
          './Mesh': 118,
          './Plane': 119,
          './Rope': 120,
          './webgl/MeshRenderer': 122,
          './webgl/MeshShader': 123,
        },
      ],
      122: [
        function (e, t, i) {
          function n(e) {
            r.ObjectRenderer.call(this, e),
              (this.indices = new Uint16Array(15e3));
            for (let t = 0, i = 0; 15e3 > t; t += 6, i += 4) {
              (this.indices[t + 0] = i + 0),
                (this.indices[t + 1] = i + 1),
                (this.indices[t + 2] = i + 2),
                (this.indices[t + 3] = i + 0),
                (this.indices[t + 4] = i + 2),
                (this.indices[t + 5] = i + 3);
            }
            this.currentShader = null;
          }
          var r = e('../../core'),
            s = e('../Mesh');
          (n.prototype = Object.create(r.ObjectRenderer.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            r.WebGLRenderer.registerPlugin('mesh', n),
            (n.prototype.onContextChange = function () {}),
            (n.prototype.render = function (e) {
              e._vertexBuffer || this._initWebGL(e);
              let t = this.renderer,
                i = t.gl,
                n = e._texture.baseTexture,
                r = e.shader,
                a =
                  e.drawMode === s.DRAW_MODES.TRIANGLE_MESH
                    ? i.TRIANGLE_STRIP
                    : i.TRIANGLES;
              t.blendModeManager.setBlendMode(e.blendMode),
                (r = r
                  ? r.shaders[i.id] || r.getShader(t)
                  : t.shaderManager.plugins.meshShader),
                this.renderer.shaderManager.setShader(r),
                (r.uniforms.translationMatrix.value = e.worldTransform.toArray(
                  !0
                )),
                (r.uniforms.projectionMatrix.value =
                  t.currentRenderTarget.projectionMatrix.toArray(!0)),
                (r.uniforms.alpha.value = e.worldAlpha),
                r.syncUniforms(),
                e.dirty
                  ? ((e.dirty = !1),
                    i.bindBuffer(i.ARRAY_BUFFER, e._vertexBuffer),
                    i.bufferData(i.ARRAY_BUFFER, e.vertices, i.STATIC_DRAW),
                    i.vertexAttribPointer(
                      r.attributes.aVertexPosition,
                      2,
                      i.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    i.bindBuffer(i.ARRAY_BUFFER, e._uvBuffer),
                    i.bufferData(i.ARRAY_BUFFER, e.uvs, i.STATIC_DRAW),
                    i.vertexAttribPointer(
                      r.attributes.aTextureCoord,
                      2,
                      i.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    i.activeTexture(i.TEXTURE0),
                    n._glTextures[i.id]
                      ? i.bindTexture(i.TEXTURE_2D, n._glTextures[i.id])
                      : this.renderer.updateTexture(n),
                    i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
                    i.bufferData(
                      i.ELEMENT_ARRAY_BUFFER,
                      e.indices,
                      i.STATIC_DRAW
                    ))
                  : (i.bindBuffer(i.ARRAY_BUFFER, e._vertexBuffer),
                    i.bufferSubData(i.ARRAY_BUFFER, 0, e.vertices),
                    i.vertexAttribPointer(
                      r.attributes.aVertexPosition,
                      2,
                      i.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    i.bindBuffer(i.ARRAY_BUFFER, e._uvBuffer),
                    i.vertexAttribPointer(
                      r.attributes.aTextureCoord,
                      2,
                      i.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    i.activeTexture(i.TEXTURE0),
                    n._glTextures[i.id]
                      ? i.bindTexture(i.TEXTURE_2D, n._glTextures[i.id])
                      : this.renderer.updateTexture(n),
                    i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
                    i.bufferSubData(i.ELEMENT_ARRAY_BUFFER, 0, e.indices)),
                i.drawElements(a, e.indices.length, i.UNSIGNED_SHORT, 0);
            }),
            (n.prototype._initWebGL = function (e) {
              const t = this.renderer.gl;
              (e._vertexBuffer = t.createBuffer()),
                (e._indexBuffer = t.createBuffer()),
                (e._uvBuffer = t.createBuffer()),
                t.bindBuffer(t.ARRAY_BUFFER, e._vertexBuffer),
                t.bufferData(t.ARRAY_BUFFER, e.vertices, t.DYNAMIC_DRAW),
                t.bindBuffer(t.ARRAY_BUFFER, e._uvBuffer),
                t.bufferData(t.ARRAY_BUFFER, e.uvs, t.STATIC_DRAW),
                e.colors &&
                  ((e._colorBuffer = t.createBuffer()),
                  t.bindBuffer(t.ARRAY_BUFFER, e._colorBuffer),
                  t.bufferData(t.ARRAY_BUFFER, e.colors, t.STATIC_DRAW)),
                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e._indexBuffer),
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, e.indices, t.STATIC_DRAW);
            }),
            (n.prototype.flush = function () {}),
            (n.prototype.start = function () {
              this.currentShader = null;
            }),
            (n.prototype.destroy = function () {
              r.ObjectRenderer.prototype.destroy.call(this);
            });
        },
        { '../../core': 23, '../Mesh': 118 },
      ],
      123: [
        function (e, t, i) {
          function n(e) {
            r.Shader.call(
              this,
              e,
              [
                'precision lowp float;',
                'attribute vec2 aVertexPosition;',
                'attribute vec2 aTextureCoord;',
                'uniform mat3 translationMatrix;',
                'uniform mat3 projectionMatrix;',
                'varying vec2 vTextureCoord;',
                'void main(void){',
                '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
                '   vTextureCoord = aTextureCoord;',
                '}',
              ].join('\n'),
              [
                'precision lowp float;',
                'varying vec2 vTextureCoord;',
                'uniform float alpha;',
                'uniform sampler2D uSampler;',
                'void main(void){',
                '   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;',
                '}',
              ].join('\n'),
              {
                alpha: { type: '1f', value: 0 },
                translationMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
                projectionMatrix: {
                  type: 'mat3',
                  value: new Float32Array(9),
                },
              },
              { aVertexPosition: 0, aTextureCoord: 0 }
            );
          }
          var r = e('../../core');
          (n.prototype = Object.create(r.Shader.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            r.ShaderManager.registerPlugin('meshShader', n);
        },
        { '../../core': 23 },
      ],
      124: [
        function (e, t, i) {
          Math.sign ||
            (Math.sign = function (e) {
              return (e = +e), 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1;
            });
        },
        {},
      ],
      125: [
        function (e, t, i) {
          Object.assign || (Object.assign = e('object-assign'));
        },
        { 'object-assign': 11 },
      ],
      126: [
        function (e, t, i) {
          e('./Object.assign'), e('./requestAnimationFrame'), e('./Math.sign');
        },
        {
          './Math.sign': 124,
          './Object.assign': 125,
          './requestAnimationFrame': 127,
        },
      ],
      127: [
        function (e, t, i) {
          (function (e) {
            if (
              ((Date.now && Date.prototype.getTime) ||
                (Date.now = function () {
                  return new Date().getTime();
                }),
              !e.performance || !e.performance.now)
            ) {
              const t = Date.now();
              e.performance || (e.performance = {}),
                (e.performance.now = function () {
                  return Date.now() - t;
                });
            }
            for (
              var i = Date.now(), n = ['ms', 'moz', 'webkit', 'o'], r = 0;
              r < n.length && !e.requestAnimationFrame;
              ++r
            ) {
              (e.requestAnimationFrame = e[n[r] + 'RequestAnimationFrame']),
                (e.cancelAnimationFrame =
                  e[n[r] + 'CancelAnimationFrame'] ||
                  e[n[r] + 'CancelRequestAnimationFrame']);
            }
            e.requestAnimationFrame ||
              (e.requestAnimationFrame = function (e) {
                if ('function' != typeof e) {
                  throw new TypeError(e + 'is not a function');
                }
                let t = Date.now(),
                  n = 16 + i - t;
                return (
                  0 > n && (n = 0),
                  (i = t),
                  setTimeout(function () {
                    (i = Date.now()), e(performance.now());
                  }, n)
                );
              }),
              e.cancelAnimationFrame ||
                (e.cancelAnimationFrame = function (e) {
                  clearTimeout(e);
                });
          }.call(
            this,
            'undefined' != typeof global
              ? global
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : {}
          ));
        },
        {},
      ],
      128: [
        function (t, i, n) {
          (function (t) {
            !(function () {
              function n(e) {
                let t = !1;
                return function () {
                  if (t) {
                    throw new Error('Callback was already called.');
                  }
                  (t = !0), e.apply(r, arguments);
                };
              }
              let r,
                s,
                a = {};
              (r = this),
                null != r && (s = r.async),
                (a.noConflict = function () {
                  return (r.async = s), a;
                });
              const o = Object.prototype.toString,
                l =
                  Array.isArray ||
                  function (e) {
                    return '[object Array]' === o.call(e);
                  },
                h = function (e, t) {
                  if (e.forEach) {
                    return e.forEach(t);
                  }
                  for (let i = 0; i < e.length; i += 1) {
                    t(e[i], i, e);
                  }
                },
                c = function (e, t) {
                  if (e.map) {
                    return e.map(t);
                  }
                  const i = [];
                  return (
                    h(e, function (e, n, r) {
                      i.push(t(e, n, r));
                    }),
                    i
                  );
                },
                u = function (e, t, i) {
                  return e.reduce
                    ? e.reduce(t, i)
                    : (h(e, function (e, n, r) {
                        i = t(i, e, n, r);
                      }),
                      i);
                },
                d = function (e) {
                  if (Object.keys) {
                    return Object.keys(e);
                  }
                  const t = [];
                  for (const i in e) {
                    e.hasOwnProperty(i) && t.push(i);
                  }
                  return t;
                };
              'undefined' != typeof t && t.nextTick
                ? ((a.nextTick = t.nextTick),
                  'undefined' != typeof setImmediate
                    ? (a.setImmediate = function (e) {
                        setImmediate(e);
                      })
                    : (a.setImmediate = a.nextTick))
                : 'function' == typeof setImmediate
                ? ((a.nextTick = function (e) {
                    setImmediate(e);
                  }),
                  (a.setImmediate = a.nextTick))
                : ((a.nextTick = function (e) {
                    setTimeout(e, 0);
                  }),
                  (a.setImmediate = a.nextTick)),
                (a.each = function (e, t, i) {
                  function r(t) {
                    t
                      ? (i(t), (i = function () {}))
                      : ((s += 1), s >= e.length && i());
                  }
                  if (((i = i || function () {}), !e.length)) {
                    return i();
                  }
                  var s = 0;
                  h(e, function (e) {
                    t(e, n(r));
                  });
                }),
                (a.forEach = a.each),
                (a.eachSeries = function (e, t, i) {
                  if (((i = i || function () {}), !e.length)) {
                    return i();
                  }
                  var n = 0,
                    r = function () {
                      t(e[n], function (t) {
                        t
                          ? (i(t), (i = function () {}))
                          : ((n += 1), n >= e.length ? i() : r());
                      });
                    };
                  r();
                }),
                (a.forEachSeries = a.eachSeries),
                (a.eachLimit = function (e, t, i, n) {
                  const r = p(t);
                  r.apply(null, [e, i, n]);
                }),
                (a.forEachLimit = a.eachLimit);
              var p = function (e) {
                  return function (t, i, n) {
                    if (((n = n || function () {}), !t.length || 0 >= e)) {
                      return n();
                    }
                    let r = 0,
                      s = 0,
                      a = 0;
                    !(function o() {
                      if (r >= t.length) {
                        return n();
                      }
                      for (; e > a && s < t.length; ) {
                        (s += 1),
                          (a += 1),
                          i(t[s - 1], function (e) {
                            e
                              ? (n(e), (n = function () {}))
                              : ((r += 1), (a -= 1), r >= t.length ? n() : o());
                          });
                      }
                    })();
                  };
                },
                f = function (e) {
                  return function () {
                    const t = Array.prototype.slice.call(arguments);
                    return e.apply(null, [a.each].concat(t));
                  };
                },
                m = function (e, t) {
                  return function () {
                    const i = Array.prototype.slice.call(arguments);
                    return t.apply(null, [p(e)].concat(i));
                  };
                },
                g = function (e) {
                  return function () {
                    const t = Array.prototype.slice.call(arguments);
                    return e.apply(null, [a.eachSeries].concat(t));
                  };
                },
                y = function (e, t, i, n) {
                  if (
                    ((t = c(t, function (e, t) {
                      return { index: t, value: e };
                    })),
                    n)
                  ) {
                    const r = [];
                    e(
                      t,
                      function (e, t) {
                        i(e.value, function (i, n) {
                          (r[e.index] = n), t(i);
                        });
                      },
                      function (e) {
                        n(e, r);
                      }
                    );
                  } else {
                    e(t, function (e, t) {
                      i(e.value, function (e) {
                        t(e);
                      });
                    });
                  }
                };
              (a.map = f(y)),
                (a.mapSeries = g(y)),
                (a.mapLimit = function (e, t, i, n) {
                  return v(t)(e, i, n);
                });
              var v = function (e) {
                return m(e, y);
              };
              (a.reduce = function (e, t, i, n) {
                a.eachSeries(
                  e,
                  function (e, n) {
                    i(t, e, function (e, i) {
                      (t = i), n(e);
                    });
                  },
                  function (e) {
                    n(e, t);
                  }
                );
              }),
                (a.inject = a.reduce),
                (a.foldl = a.reduce),
                (a.reduceRight = function (e, t, i, n) {
                  const r = c(e, function (e) {
                    return e;
                  }).reverse();
                  a.reduce(r, t, i, n);
                }),
                (a.foldr = a.reduceRight);
              const b = function (e, t, i, n) {
                const r = [];
                (t = c(t, function (e, t) {
                  return { index: t, value: e };
                })),
                  e(
                    t,
                    function (e, t) {
                      i(e.value, function (i) {
                        i && r.push(e), t();
                      });
                    },
                    function (e) {
                      n(
                        c(
                          r.sort(function (e, t) {
                            return e.index - t.index;
                          }),
                          function (e) {
                            return e.value;
                          }
                        )
                      );
                    }
                  );
              };
              (a.filter = f(b)),
                (a.filterSeries = g(b)),
                (a.select = a.filter),
                (a.selectSeries = a.filterSeries);
              const x = function (e, t, i, n) {
                const r = [];
                (t = c(t, function (e, t) {
                  return { index: t, value: e };
                })),
                  e(
                    t,
                    function (e, t) {
                      i(e.value, function (i) {
                        i || r.push(e), t();
                      });
                    },
                    function (e) {
                      n(
                        c(
                          r.sort(function (e, t) {
                            return e.index - t.index;
                          }),
                          function (e) {
                            return e.value;
                          }
                        )
                      );
                    }
                  );
              };
              (a.reject = f(x)), (a.rejectSeries = g(x));
              const w = function (e, t, i, n) {
                e(
                  t,
                  function (e, t) {
                    i(e, function (i) {
                      i ? (n(e), (n = function () {})) : t();
                    });
                  },
                  function (e) {
                    n();
                  }
                );
              };
              (a.detect = f(w)),
                (a.detectSeries = g(w)),
                (a.some = function (e, t, i) {
                  a.each(
                    e,
                    function (e, n) {
                      t(e, function (e) {
                        e && (i(!0), (i = function () {})), n();
                      });
                    },
                    function (e) {
                      i(!1);
                    }
                  );
                }),
                (a.any = a.some),
                (a.every = function (e, t, i) {
                  a.each(
                    e,
                    function (e, n) {
                      t(e, function (e) {
                        e || (i(!1), (i = function () {})), n();
                      });
                    },
                    function (e) {
                      i(!0);
                    }
                  );
                }),
                (a.all = a.every),
                (a.sortBy = function (e, t, i) {
                  a.map(
                    e,
                    function (e, i) {
                      t(e, function (t, n) {
                        t ? i(t) : i(null, { value: e, criteria: n });
                      });
                    },
                    function (e, t) {
                      if (e) {
                        return i(e);
                      }
                      const n = function (e, t) {
                        const i = e.criteria,
                          n = t.criteria;
                        return n > i ? -1 : i > n ? 1 : 0;
                      };
                      i(
                        null,
                        c(t.sort(n), function (e) {
                          return e.value;
                        })
                      );
                    }
                  );
                }),
                (a.auto = function (e, t) {
                  t = t || function () {};
                  let i = d(e),
                    n = i.length;
                  if (!n) {
                    return t();
                  }
                  const r = {},
                    s = [],
                    o = function (e) {
                      s.unshift(e);
                    },
                    c = function (e) {
                      for (let t = 0; t < s.length; t += 1) {
                        if (s[t] === e) {
                          return void s.splice(t, 1);
                        }
                      }
                    },
                    p = function () {
                      n--,
                        h(s.slice(0), function (e) {
                          e();
                        });
                    };
                  o(function () {
                    if (!n) {
                      const e = t;
                      (t = function () {}), e(null, r);
                    }
                  }),
                    h(i, function (i) {
                      const n = l(e[i]) ? e[i] : [e[i]],
                        s = function (e) {
                          let n = Array.prototype.slice.call(arguments, 1);
                          if ((n.length <= 1 && (n = n[0]), e)) {
                            const s = {};
                            h(d(r), function (e) {
                              s[e] = r[e];
                            }),
                              (s[i] = n),
                              t(e, s),
                              (t = function () {});
                          } else {
                            (r[i] = n), a.setImmediate(p);
                          }
                        },
                        f = n.slice(0, Math.abs(n.length - 1)) || [],
                        m = function () {
                          return (
                            u(
                              f,
                              function (e, t) {
                                return e && r.hasOwnProperty(t);
                              },
                              !0
                            ) && !r.hasOwnProperty(i)
                          );
                        };
                      if (m()) {
                        n[n.length - 1](s, r);
                      } else {
                        var g = function () {
                          m() && (c(g), n[n.length - 1](s, r));
                        };
                        o(g);
                      }
                    });
                }),
                (a.retry = function (e, t, i) {
                  const n = 5,
                    r = [];
                  'function' == typeof e && ((i = t), (t = e), (e = n)),
                    (e = parseInt(e, 10) || n);
                  const s = function (n, s) {
                    for (
                      let o = function (e, t) {
                        return function (i) {
                          e(function (e, n) {
                            i(!e || t, { err: e, result: n });
                          }, s);
                        };
                      };
                      e;

                    ) {
                      r.push(o(t, !(e -= 1)));
                    }
                    a.series(r, function (e, t) {
                      (t = t[t.length - 1]), (n || i)(t.err, t.result);
                    });
                  };
                  return i ? s() : s;
                }),
                (a.waterfall = function (e, t) {
                  if (((t = t || function () {}), !l(e))) {
                    const i = new Error(
                      'First argument to waterfall must be an array of functions'
                    );
                    return t(i);
                  }
                  if (!e.length) {
                    return t();
                  }
                  var n = function (e) {
                    return function (i) {
                      if (i) {
                        t.apply(null, arguments), (t = function () {});
                      } else {
                        const r = Array.prototype.slice.call(arguments, 1),
                          s = e.next();
                        s ? r.push(n(s)) : r.push(t),
                          a.setImmediate(function () {
                            e.apply(null, r);
                          });
                      }
                    };
                  };
                  n(a.iterator(e))();
                });
              const _ = function (e, t, i) {
                if (((i = i || function () {}), l(t))) {
                  e.map(
                    t,
                    function (e, t) {
                      e &&
                        e(function (e) {
                          let i = Array.prototype.slice.call(arguments, 1);
                          i.length <= 1 && (i = i[0]), t.call(null, e, i);
                        });
                    },
                    i
                  );
                } else {
                  const n = {};
                  e.each(
                    d(t),
                    function (e, i) {
                      t[e](function (t) {
                        let r = Array.prototype.slice.call(arguments, 1);
                        r.length <= 1 && (r = r[0]), (n[e] = r), i(t);
                      });
                    },
                    function (e) {
                      i(e, n);
                    }
                  );
                }
              };
              (a.parallel = function (e, t) {
                _({ map: a.map, each: a.each }, e, t);
              }),
                (a.parallelLimit = function (e, t, i) {
                  _({ map: v(t), each: p(t) }, e, i);
                }),
                (a.series = function (e, t) {
                  if (((t = t || function () {}), l(e))) {
                    a.mapSeries(
                      e,
                      function (e, t) {
                        e &&
                          e(function (e) {
                            let i = Array.prototype.slice.call(arguments, 1);
                            i.length <= 1 && (i = i[0]), t.call(null, e, i);
                          });
                      },
                      t
                    );
                  } else {
                    const i = {};
                    a.eachSeries(
                      d(e),
                      function (t, n) {
                        e[t](function (e) {
                          let r = Array.prototype.slice.call(arguments, 1);
                          r.length <= 1 && (r = r[0]), (i[t] = r), n(e);
                        });
                      },
                      function (e) {
                        t(e, i);
                      }
                    );
                  }
                }),
                (a.iterator = function (e) {
                  var t = function (i) {
                    var n = function () {
                      return e.length && e[i].apply(null, arguments), n.next();
                    };
                    return (
                      (n.next = function () {
                        return i < e.length - 1 ? t(i + 1) : null;
                      }),
                      n
                    );
                  };
                  return t(0);
                }),
                (a.apply = function (e) {
                  const t = Array.prototype.slice.call(arguments, 1);
                  return function () {
                    return e.apply(
                      null,
                      t.concat(Array.prototype.slice.call(arguments))
                    );
                  };
                });
              const T = function (e, t, i, n) {
                let r = [];
                e(
                  t,
                  function (e, t) {
                    i(e, function (e, i) {
                      (r = r.concat(i || [])), t(e);
                    });
                  },
                  function (e) {
                    n(e, r);
                  }
                );
              };
              (a.concat = f(T)),
                (a.concatSeries = g(T)),
                (a.whilst = function (e, t, i) {
                  e()
                    ? t(function (n) {
                        return n ? i(n) : void a.whilst(e, t, i);
                      })
                    : i();
                }),
                (a.doWhilst = function (e, t, i) {
                  e(function (n) {
                    if (n) {
                      return i(n);
                    }
                    const r = Array.prototype.slice.call(arguments, 1);
                    t.apply(null, r) ? a.doWhilst(e, t, i) : i();
                  });
                }),
                (a.until = function (e, t, i) {
                  e()
                    ? i()
                    : t(function (n) {
                        return n ? i(n) : void a.until(e, t, i);
                      });
                }),
                (a.doUntil = function (e, t, i) {
                  e(function (n) {
                    if (n) {
                      return i(n);
                    }
                    const r = Array.prototype.slice.call(arguments, 1);
                    t.apply(null, r) ? i() : a.doUntil(e, t, i);
                  });
                }),
                (a.queue = function (e, t) {
                  function i(e, t, i, n) {
                    return (
                      e.started || (e.started = !0),
                      l(t) || (t = [t]),
                      0 == t.length
                        ? a.setImmediate(function () {
                            e.drain && e.drain();
                          })
                        : void h(t, function (t) {
                            const r = {
                              data: t,
                              callback: 'function' == typeof n ? n : null,
                            };
                            i ? e.tasks.unshift(r) : e.tasks.push(r),
                              e.saturated &&
                                e.tasks.length === e.concurrency &&
                                e.saturated(),
                              a.setImmediate(e.process);
                          })
                    );
                  }
                  void 0 === t && (t = 1);
                  var r = 0,
                    s = {
                      tasks: [],
                      concurrency: t,
                      saturated: null,
                      empty: null,
                      drain: null,
                      started: !1,
                      paused: !1,
                      push: function (e, t) {
                        i(s, e, !1, t);
                      },
                      kill: function () {
                        (s.drain = null), (s.tasks = []);
                      },
                      unshift: function (e, t) {
                        i(s, e, !0, t);
                      },
                      process: function () {
                        if (!s.paused && r < s.concurrency && s.tasks.length) {
                          const t = s.tasks.shift();
                          s.empty && 0 === s.tasks.length && s.empty(),
                            (r += 1);
                          const i = function () {
                              (r -= 1),
                                t.callback && t.callback.apply(t, arguments),
                                s.drain &&
                                  s.tasks.length + r === 0 &&
                                  s.drain(),
                                s.process();
                            },
                            a = n(i);
                          e(t.data, a);
                        }
                      },
                      length: function () {
                        return s.tasks.length;
                      },
                      running: function () {
                        return r;
                      },
                      idle: function () {
                        return s.tasks.length + r === 0;
                      },
                      pause: function () {
                        s.paused !== !0 && ((s.paused = !0), s.process());
                      },
                      resume: function () {
                        s.paused !== !1 && ((s.paused = !1), s.process());
                      },
                    };
                  return s;
                }),
                (a.priorityQueue = function (e, t) {
                  function i(e, t) {
                    return e.priority - t.priority;
                  }
                  function n(e, t, i) {
                    for (var n = -1, r = e.length - 1; r > n; ) {
                      const s = n + ((r - n + 1) >>> 1);
                      i(t, e[s]) >= 0 ? (n = s) : (r = s - 1);
                    }
                    return n;
                  }
                  function r(e, t, r, s) {
                    return (
                      e.started || (e.started = !0),
                      l(t) || (t = [t]),
                      0 == t.length
                        ? a.setImmediate(function () {
                            e.drain && e.drain();
                          })
                        : void h(t, function (t) {
                            const o = {
                              data: t,
                              priority: r,
                              callback: 'function' == typeof s ? s : null,
                            };
                            e.tasks.splice(n(e.tasks, o, i) + 1, 0, o),
                              e.saturated &&
                                e.tasks.length === e.concurrency &&
                                e.saturated(),
                              a.setImmediate(e.process);
                          })
                    );
                  }
                  const s = a.queue(e, t);
                  return (
                    (s.push = function (e, t, i) {
                      r(s, e, t, i);
                    }),
                    delete s.unshift,
                    s
                  );
                }),
                (a.cargo = function (e, t) {
                  var i = !1,
                    n = [],
                    r = {
                      tasks: n,
                      payload: t,
                      saturated: null,
                      empty: null,
                      drain: null,
                      drained: !0,
                      push: function (e, i) {
                        l(e) || (e = [e]),
                          h(e, function (e) {
                            n.push({
                              data: e,
                              callback: 'function' == typeof i ? i : null,
                            }),
                              (r.drained = !1),
                              r.saturated && n.length === t && r.saturated();
                          }),
                          a.setImmediate(r.process);
                      },
                      process: function s() {
                        if (!i) {
                          if (0 === n.length) {
                            return (
                              r.drain && !r.drained && r.drain(),
                              void (r.drained = !0)
                            );
                          }
                          const a =
                              'number' == typeof t
                                ? n.splice(0, t)
                                : n.splice(0, n.length),
                            o = c(a, function (e) {
                              return e.data;
                            });
                          r.empty && r.empty(),
                            (i = !0),
                            e(o, function () {
                              i = !1;
                              const e = arguments;
                              h(a, function (t) {
                                t.callback && t.callback.apply(null, e);
                              }),
                                s();
                            });
                        }
                      },
                      length: function () {
                        return n.length;
                      },
                      running: function () {
                        return i;
                      },
                    };
                  return r;
                });
              const S = function (e) {
                return function (t) {
                  const i = Array.prototype.slice.call(arguments, 1);
                  t.apply(
                    null,
                    i.concat([
                      function (t) {
                        const i = Array.prototype.slice.call(arguments, 1);
                        'undefined' != typeof console &&
                          (t
                            ? console.error && console.error(t)
                            : console[e] &&
                              h(i, function (t) {
                                console[e](t);
                              }));
                      },
                    ])
                  );
                };
              };
              (a.log = S('log')),
                (a.dir = S('dir')),
                (a.memoize = function (e, t) {
                  const i = {},
                    n = {};
                  t =
                    t ||
                    function (e) {
                      return e;
                    };
                  const r = function () {
                    const r = Array.prototype.slice.call(arguments),
                      s = r.pop(),
                      o = t.apply(null, r);
                    o in i
                      ? a.nextTick(function () {
                          s.apply(null, i[o]);
                        })
                      : o in n
                      ? n[o].push(s)
                      : ((n[o] = [s]),
                        e.apply(
                          null,
                          r.concat([
                            function () {
                              i[o] = arguments;
                              const e = n[o];
                              delete n[o];
                              for (let t = 0, r = e.length; r > t; t++) {
                                e[t].apply(null, arguments);
                              }
                            },
                          ])
                        ));
                  };
                  return (r.memo = i), (r.unmemoized = e), r;
                }),
                (a.unmemoize = function (e) {
                  return function () {
                    return (e.unmemoized || e).apply(null, arguments);
                  };
                }),
                (a.times = function (e, t, i) {
                  for (var n = [], r = 0; e > r; r++) {
                    n.push(r);
                  }
                  return a.map(n, t, i);
                }),
                (a.timesSeries = function (e, t, i) {
                  for (var n = [], r = 0; e > r; r++) {
                    n.push(r);
                  }
                  return a.mapSeries(n, t, i);
                }),
                (a.seq = function () {
                  const e = arguments;
                  return function () {
                    const t = this,
                      i = Array.prototype.slice.call(arguments),
                      n = i.pop();
                    a.reduce(
                      e,
                      i,
                      function (e, i, n) {
                        i.apply(
                          t,
                          e.concat([
                            function () {
                              const e = arguments[0],
                                t = Array.prototype.slice.call(arguments, 1);
                              n(e, t);
                            },
                          ])
                        );
                      },
                      function (e, i) {
                        n.apply(t, [e].concat(i));
                      }
                    );
                  };
                }),
                (a.compose = function () {
                  return a.seq.apply(
                    null,
                    Array.prototype.reverse.call(arguments)
                  );
                });
              const C = function (e, t) {
                const i = function () {
                  const i = this,
                    n = Array.prototype.slice.call(arguments),
                    r = n.pop();
                  return e(
                    t,
                    function (e, t) {
                      e.apply(i, n.concat([t]));
                    },
                    r
                  );
                };
                if (arguments.length > 2) {
                  const n = Array.prototype.slice.call(arguments, 2);
                  return i.apply(this, n);
                }
                return i;
              };
              (a.applyEach = f(C)),
                (a.applyEachSeries = g(C)),
                (a.forever = function (e, t) {
                  function i(n) {
                    if (n) {
                      if (t) {
                        return t(n);
                      }
                      throw n;
                    }
                    e(i);
                  }
                  i();
                }),
                'undefined' != typeof i && i.exports
                  ? (i.exports = a)
                  : 'undefined' != typeof e && e.amd
                  ? e([], function () {
                      return a;
                    })
                  : (r.async = a);
            })();
          }.call(this, t('_process')));
        },
        { _process: 3 },
      ],
      129: [
        function (e, t, i) {
          'use strict';
          function n(e, t, i) {
            (this.fn = e), (this.context = t), (this.once = i || !1);
          }
          function r() {}
          const s = 'function' != typeof Object.create ? '~' : !1;
          (r.prototype._events = void 0),
            (r.prototype.listeners = function (e, t) {
              const i = s ? s + e : e,
                n = this._events && this._events[i];
              if (t) {
                return !!n;
              }
              if (!n) {
                return [];
              }
              if (this._events[i].fn) {
                return [this._events[i].fn];
              }
              for (
                var r = 0, a = this._events[i].length, o = new Array(a);
                a > r;
                r++
              ) {
                o[r] = this._events[i][r].fn;
              }
              return o;
            }),
            (r.prototype.emit = function (e, t, i, n, r, a) {
              const o = s ? s + e : e;
              if (!this._events || !this._events[o]) {
                return !1;
              }
              let l,
                h,
                c = this._events[o],
                u = arguments.length;
              if ('function' == typeof c.fn) {
                switch (
                  (c.once && this.removeListener(e, c.fn, void 0, !0), u)
                ) {
                  case 1:
                    return c.fn.call(c.context), !0;
                  case 2:
                    return c.fn.call(c.context, t), !0;
                  case 3:
                    return c.fn.call(c.context, t, i), !0;
                  case 4:
                    return c.fn.call(c.context, t, i, n), !0;
                  case 5:
                    return c.fn.call(c.context, t, i, n, r), !0;
                  case 6:
                    return c.fn.call(c.context, t, i, n, r, a), !0;
                }
                for (h = 1, l = new Array(u - 1); u > h; h++) {
                  l[h - 1] = arguments[h];
                }
                c.fn.apply(c.context, l);
              } else {
                let d,
                  p = c.length;
                for (h = 0; p > h; h++) {
                  switch (
                    (c[h].once && this.removeListener(e, c[h].fn, void 0, !0),
                    u)
                  ) {
                    case 1:
                      c[h].fn.call(c[h].context);
                      break;
                    case 2:
                      c[h].fn.call(c[h].context, t);
                      break;
                    case 3:
                      c[h].fn.call(c[h].context, t, i);
                      break;
                    default:
                      if (!l) {
                        for (d = 1, l = new Array(u - 1); u > d; d++) {
                          l[d - 1] = arguments[d];
                        }
                      }
                      c[h].fn.apply(c[h].context, l);
                  }
                }
              }
              return !0;
            }),
            (r.prototype.on = function (e, t, i) {
              const r = new n(t, i || this),
                a = s ? s + e : e;
              return (
                this._events || (this._events = s ? {} : Object.create(null)),
                this._events[a]
                  ? this._events[a].fn
                    ? (this._events[a] = [this._events[a], r])
                    : this._events[a].push(r)
                  : (this._events[a] = r),
                this
              );
            }),
            (r.prototype.once = function (e, t, i) {
              const r = new n(t, i || this, !0),
                a = s ? s + e : e;
              return (
                this._events || (this._events = s ? {} : Object.create(null)),
                this._events[a]
                  ? this._events[a].fn
                    ? (this._events[a] = [this._events[a], r])
                    : this._events[a].push(r)
                  : (this._events[a] = r),
                this
              );
            }),
            (r.prototype.removeListener = function (e, t, i, n) {
              const r = s ? s + e : e;
              if (!this._events || !this._events[r]) {
                return this;
              }
              const a = this._events[r],
                o = [];
              if (t) {
                if (a.fn) {
                  (a.fn !== t || (n && !a.once) || (i && a.context !== i)) &&
                    o.push(a);
                } else {
                  for (let l = 0, h = a.length; h > l; l++) {
                    (a[l].fn !== t ||
                      (n && !a[l].once) ||
                      (i && a[l].context !== i)) &&
                      o.push(a[l]);
                  }
                }
              }
              return (
                o.length
                  ? (this._events[r] = 1 === o.length ? o[0] : o)
                  : delete this._events[r],
                this
              );
            }),
            (r.prototype.removeAllListeners = function (e) {
              return this._events
                ? (e
                    ? delete this._events[s ? s + e : e]
                    : (this._events = s ? {} : Object.create(null)),
                  this)
                : this;
            }),
            (r.prototype.off = r.prototype.removeListener),
            (r.prototype.addListener = r.prototype.on),
            (r.prototype.setMaxListeners = function () {
              return this;
            }),
            (r.prefixed = s),
            (t.exports = r);
        },
        {},
      ],
      130: [
        function (e, t, i) {
          function n(e, t) {
            o.call(this),
              (t = t || 10),
              (this.baseUrl = e || ''),
              (this.progress = 0),
              (this.loading = !1),
              (this._progressChunk = 0),
              (this._beforeMiddleware = []),
              (this._afterMiddleware = []),
              (this._boundLoadResource = this._loadResource.bind(this)),
              (this._boundOnLoad = this._onLoad.bind(this)),
              (this._buffer = []),
              (this._numToLoad = 0),
              (this._queue = r.queue(this._boundLoadResource, t)),
              (this.resources = {});
          }
          var r = e('async'),
            s = e('url'),
            a = e('./Resource'),
            o = e('eventemitter3');
          (n.prototype = Object.create(o.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.add = n.prototype.enqueue =
              function (e, t, i, n) {
                if (Array.isArray(e)) {
                  for (let r = 0; r < e.length; ++r) {
                    this.add(e[r]);
                  }
                  return this;
                }
                if (
                  ('object' == typeof e &&
                    ((n = t || e.callback || e.onComplete),
                    (i = e),
                    (t = e.url),
                    (e = e.name || e.key || e.url)),
                  'string' != typeof t && ((n = i), (i = t), (t = e)),
                  'string' != typeof t)
                ) {
                  throw new Error('No url passed to add resource to loader.');
                }
                if (
                  ('function' == typeof i && ((n = i), (i = null)),
                  this.resources[e])
                ) {
                  throw new Error(
                    'Resource with name "' + e + '" already exists.'
                  );
                }
                return (
                  (t = this._handleBaseUrl(t)),
                  (this.resources[e] = new a(e, t, i)),
                  'function' == typeof n &&
                    this.resources[e].once('afterMiddleware', n),
                  this._numToLoad++,
                  this._queue.started
                    ? (this._queue.push(this.resources[e]),
                      (this._progressChunk =
                        (100 - this.progress) /
                        (this._queue.length() + this._queue.running())))
                    : (this._buffer.push(this.resources[e]),
                      (this._progressChunk = 100 / this._buffer.length)),
                  this
                );
              }),
            (n.prototype._handleBaseUrl = function (e) {
              const t = s.parse(e);
              return t.protocol || 0 === t.pathname.indexOf('//')
                ? e
                : this.baseUrl.length &&
                  this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 &&
                  '/' !== e.charAt(0)
                ? this.baseUrl + '/' + e
                : this.baseUrl + e;
            }),
            (n.prototype.before = n.prototype.pre =
              function (e) {
                return this._beforeMiddleware.push(e), this;
              }),
            (n.prototype.after = n.prototype.use =
              function (e) {
                return this._afterMiddleware.push(e), this;
              }),
            (n.prototype.reset = function () {
              (this.progress = 0),
                (this.loading = !1),
                (this._progressChunk = 0),
                (this._buffer.length = 0),
                (this._numToLoad = 0),
                this._queue.kill(),
                (this._queue.started = !1),
                (this.resources = {});
            }),
            (n.prototype.load = function (e) {
              if (
                ('function' == typeof e && this.once('complete', e),
                this._queue.started)
              ) {
                return this;
              }
              this.emit('start', this);
              for (let t = 0; t < this._buffer.length; ++t) {
                this._queue.push(this._buffer[t]);
              }
              return (this._buffer.length = 0), this;
            }),
            (n.prototype._loadResource = function (e, t) {
              const i = this;
              (e._dequeue = t),
                this._runMiddleware(e, this._beforeMiddleware, function () {
                  e.load(i._boundOnLoad);
                });
            }),
            (n.prototype._onComplete = function () {
              this.emit('complete', this, this.resources);
            }),
            (n.prototype._onLoad = function (e) {
              (this.progress += this._progressChunk),
                this.emit('progress', this, e),
                this._runMiddleware(e, this._afterMiddleware, function () {
                  e.emit('afterMiddleware', e),
                    this._numToLoad--,
                    0 === this._numToLoad &&
                      ((this.progress = 100), this._onComplete()),
                    e.error
                      ? this.emit('error', e.error, this, e)
                      : this.emit('load', this, e);
                }),
                e._dequeue();
            }),
            (n.prototype._runMiddleware = function (e, t, i) {
              const n = this;
              r.eachSeries(
                t,
                function (t, i) {
                  t.call(n, e, i);
                },
                i.bind(this, e)
              );
            }),
            (n.LOAD_TYPE = a.LOAD_TYPE),
            (n.XHR_READY_STATE = a.XHR_READY_STATE),
            (n.XHR_RESPONSE_TYPE = a.XHR_RESPONSE_TYPE);
        },
        { './Resource': 131, async: 128, eventemitter3: 129, url: 8 },
      ],
      131: [
        function (e, t, i) {
          function n(e, t, i) {
            if (
              (a.call(this),
              (i = i || {}),
              'string' != typeof e || 'string' != typeof t)
            ) {
              throw new Error(
                'Both name and url are required for constructing a resource.'
              );
            }
            (this.name = e),
              (this.url = t),
              (this.isDataUrl = 0 === this.url.indexOf('data:')),
              (this.data = null),
              (this.crossOrigin =
                i.crossOrigin === !0 ? 'anonymous' : i.crossOrigin),
              (this.loadType = i.loadType || this._determineLoadType()),
              (this.xhrType = i.xhrType),
              (this.metadata = i.metadata || {}),
              (this.error = null),
              (this.xhr = null),
              (this.isJson = !1),
              (this.isXml = !1),
              (this.isImage = !1),
              (this.isAudio = !1),
              (this.isVideo = !1),
              (this._dequeue = null),
              (this._boundComplete = this.complete.bind(this)),
              (this._boundOnError = this._onError.bind(this)),
              (this._boundOnProgress = this._onProgress.bind(this)),
              (this._boundXhrOnError = this._xhrOnError.bind(this)),
              (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
              (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
              (this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this));
          }
          function r(e) {
            return e.toString().replace('object ', '');
          }
          function s(e, t, i) {
            t && 0 === t.indexOf('.') && (t = t.substring(1)), t && (e[t] = i);
          }
          var a = e('eventemitter3'),
            o = e('url'),
            l = !(
              !window.XDomainRequest ||
              'withCredentials' in new XMLHttpRequest()
            ),
            h = null;
          (n.prototype = Object.create(a.prototype)),
            (n.prototype.constructor = n),
            (t.exports = n),
            (n.prototype.complete = function () {
              this.data &&
                this.data.removeEventListener &&
                (this.data.removeEventListener('error', this._boundOnError),
                this.data.removeEventListener('load', this._boundComplete),
                this.data.removeEventListener(
                  'progress',
                  this._boundOnProgress
                ),
                this.data.removeEventListener(
                  'canplaythrough',
                  this._boundComplete
                )),
                this.xhr &&
                  (this.xhr.removeEventListener
                    ? (this.xhr.removeEventListener(
                        'error',
                        this._boundXhrOnError
                      ),
                      this.xhr.removeEventListener(
                        'abort',
                        this._boundXhrOnAbort
                      ),
                      this.xhr.removeEventListener(
                        'progress',
                        this._boundOnProgress
                      ),
                      this.xhr.removeEventListener(
                        'load',
                        this._boundXhrOnLoad
                      ))
                    : ((this.xhr.onerror = null),
                      (this.xhr.ontimeout = null),
                      (this.xhr.onprogress = null),
                      (this.xhr.onload = null))),
                this.emit('complete', this);
            }),
            (n.prototype.load = function (e) {
              switch (
                (this.emit('start', this),
                e && this.once('complete', e),
                (this.crossOrigin !== !1 &&
                  'string' == typeof this.crossOrigin) ||
                  (this.crossOrigin = this._determineCrossOrigin(this.url)),
                this.loadType)
              ) {
                case n.LOAD_TYPE.IMAGE:
                  this._loadImage();
                  break;
                case n.LOAD_TYPE.AUDIO:
                  this._loadElement('audio');
                  break;
                case n.LOAD_TYPE.VIDEO:
                  this._loadElement('video');
                  break;
                case n.LOAD_TYPE.XHR:
                default:
                  l && this.crossOrigin ? this._loadXdr() : this._loadXhr();
              }
            }),
            (n.prototype._loadImage = function () {
              (this.data = new Image()),
                this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
                (this.data.src = this.url),
                (this.isImage = !0),
                this.data.addEventListener('error', this._boundOnError, !1),
                this.data.addEventListener('load', this._boundComplete, !1),
                this.data.addEventListener(
                  'progress',
                  this._boundOnProgress,
                  !1
                );
            }),
            (n.prototype._loadElement = function (e) {
              if (
                ('audio' === e && 'undefined' != typeof Audio
                  ? (this.data = new Audio())
                  : (this.data = document.createElement(e)),
                null === this.data)
              ) {
                return (
                  (this.error = new Error('Unsupported element ' + e)),
                  void this.complete()
                );
              }
              if (navigator.isCocoonJS) {
                this.data.src = Array.isArray(this.url)
                  ? this.url[0]
                  : this.url;
              } else if (Array.isArray(this.url)) {
                for (let t = 0; t < this.url.length; ++t) {
                  this.data.appendChild(this._createSource(e, this.url[t]));
                }
              } else {
                this.data.appendChild(this._createSource(e, this.url));
              }
              (this['is' + e[0].toUpperCase() + e.substring(1)] = !0),
                this.data.addEventListener('error', this._boundOnError, !1),
                this.data.addEventListener('load', this._boundComplete, !1),
                this.data.addEventListener(
                  'progress',
                  this._boundOnProgress,
                  !1
                ),
                this.data.addEventListener(
                  'canplaythrough',
                  this._boundComplete,
                  !1
                ),
                this.data.load();
            }),
            (n.prototype._loadXhr = function () {
              'string' != typeof this.xhrType &&
                (this.xhrType = this._determineXhrType());
              const e = (this.xhr = new XMLHttpRequest());
              e.open('GET', this.url, !0),
                this.xhrType === n.XHR_RESPONSE_TYPE.JSON ||
                this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT
                  ? (e.responseType = n.XHR_RESPONSE_TYPE.TEXT)
                  : (e.responseType = this.xhrType),
                e.addEventListener('error', this._boundXhrOnError, !1),
                e.addEventListener('abort', this._boundXhrOnAbort, !1),
                e.addEventListener('progress', this._boundOnProgress, !1),
                e.addEventListener('load', this._boundXhrOnLoad, !1),
                e.send();
            }),
            (n.prototype._loadXdr = function () {
              'string' != typeof this.xhrType &&
                (this.xhrType = this._determineXhrType());
              const e = (this.xhr = new XDomainRequest());
              (e.timeout = 5e3),
                (e.onerror = this._boundXhrOnError),
                (e.ontimeout = this._boundXdrOnTimeout),
                (e.onprogress = this._boundOnProgress),
                (e.onload = this._boundXhrOnLoad),
                e.open('GET', this.url, !0),
                setTimeout(function () {
                  e.send();
                }, 0);
            }),
            (n.prototype._createSource = function (e, t, i) {
              i || (i = e + '/' + t.substr(t.lastIndexOf('.') + 1));
              const n = document.createElement('source');
              return (n.src = t), (n.type = i), n;
            }),
            (n.prototype._onError = function (e) {
              (this.error = new Error(
                'Failed to load element using ' + e.target.nodeName
              )),
                this.complete();
            }),
            (n.prototype._onProgress = function (e) {
              e &&
                e.lengthComputable &&
                this.emit('progress', this, e.loaded / e.total);
            }),
            (n.prototype._xhrOnError = function () {
              (this.error = new Error(
                r(this.xhr) +
                  ' Request failed. Status: ' +
                  this.xhr.status +
                  ', text: "' +
                  this.xhr.statusText +
                  '"'
              )),
                this.complete();
            }),
            (n.prototype._xhrOnAbort = function () {
              (this.error = new Error(
                r(this.xhr) + ' Request was aborted by the user.'
              )),
                this.complete();
            }),
            (n.prototype._xdrOnTimeout = function () {
              (this.error = new Error(r(this.xhr) + ' Request timed out.')),
                this.complete();
            }),
            (n.prototype._xhrOnLoad = function () {
              const e = this.xhr,
                t = void 0 !== e.status ? e.status : 200;
              if (
                200 === t ||
                204 === t ||
                (0 === t && e.responseText.length > 0)
              ) {
                if (this.xhrType === n.XHR_RESPONSE_TYPE.TEXT) {
                  this.data = e.responseText;
                } else if (this.xhrType === n.XHR_RESPONSE_TYPE.JSON) {
                  try {
                    (this.data = JSON.parse(e.responseText)),
                      (this.isJson = !0);
                  } catch (i) {
                    this.error = new Error(
                      'Error trying to parse loaded json:',
                      i
                    );
                  }
                } else if (this.xhrType === n.XHR_RESPONSE_TYPE.DOCUMENT) {
                  try {
                    if (window.DOMParser) {
                      const r = new DOMParser();
                      this.data = r.parseFromString(e.responseText, 'text/xml');
                    } else {
                      const s = document.createElement('div');
                      (s.innerHTML = e.responseText), (this.data = s);
                    }
                    this.isXml = !0;
                  } catch (i) {
                    this.error = new Error(
                      'Error trying to parse loaded xml:',
                      i
                    );
                  }
                } else {
                  this.data = e.response || e.responseText;
                }
              } else {
                this.error = new Error(
                  '[' + e.status + ']' + e.statusText + ':' + e.responseURL
                );
              }
              this.complete();
            }),
            (n.prototype._determineCrossOrigin = function (e, t) {
              if (0 === e.indexOf('data:')) {
                return '';
              }
              (t = t || window.location),
                h || (h = document.createElement('a')),
                (h.href = e),
                (e = o.parse(h.href));
              const i = (!e.port && '' === t.port) || e.port === t.port;
              return e.hostname === t.hostname && i && e.protocol === t.protocol
                ? ''
                : 'anonymous';
            }),
            (n.prototype._determineXhrType = function () {
              return (
                n._xhrTypeMap[this._getExtension()] || n.XHR_RESPONSE_TYPE.TEXT
              );
            }),
            (n.prototype._determineLoadType = function () {
              return n._loadTypeMap[this._getExtension()] || n.LOAD_TYPE.XHR;
            }),
            (n.prototype._getExtension = function () {
              let e,
                t = this.url;
              if (this.isDataUrl) {
                const i = t.indexOf('/');
                e = t.substring(i + 1, t.indexOf(';', i));
              } else {
                const n = t.indexOf('?');
                -1 !== n && (t = t.substring(0, n)),
                  (e = t.substring(t.lastIndexOf('.') + 1));
              }
              return e;
            }),
            (n.prototype._getMimeFromXhrType = function (e) {
              switch (e) {
                case n.XHR_RESPONSE_TYPE.BUFFER:
                  return 'application/octet-binary';
                case n.XHR_RESPONSE_TYPE.BLOB:
                  return 'application/blob';
                case n.XHR_RESPONSE_TYPE.DOCUMENT:
                  return 'application/xml';
                case n.XHR_RESPONSE_TYPE.JSON:
                  return 'application/json';
                case n.XHR_RESPONSE_TYPE.DEFAULT:
                case n.XHR_RESPONSE_TYPE.TEXT:
                default:
                  return 'text/plain';
              }
            }),
            (n.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
            (n.XHR_READY_STATE = {
              UNSENT: 0,
              OPENED: 1,
              HEADERS_RECEIVED: 2,
              LOADING: 3,
              DONE: 4,
            }),
            (n.XHR_RESPONSE_TYPE = {
              DEFAULT: 'text',
              BUFFER: 'arraybuffer',
              BLOB: 'blob',
              DOCUMENT: 'document',
              JSON: 'json',
              TEXT: 'text',
            }),
            (n._loadTypeMap = {
              gif: n.LOAD_TYPE.IMAGE,
              png: n.LOAD_TYPE.IMAGE,
              bmp: n.LOAD_TYPE.IMAGE,
              jpg: n.LOAD_TYPE.IMAGE,
              jpeg: n.LOAD_TYPE.IMAGE,
              tif: n.LOAD_TYPE.IMAGE,
              tiff: n.LOAD_TYPE.IMAGE,
              webp: n.LOAD_TYPE.IMAGE,
              tga: n.LOAD_TYPE.IMAGE,
            }),
            (n._xhrTypeMap = {
              xhtml: n.XHR_RESPONSE_TYPE.DOCUMENT,
              html: n.XHR_RESPONSE_TYPE.DOCUMENT,
              htm: n.XHR_RESPONSE_TYPE.DOCUMENT,
              xml: n.XHR_RESPONSE_TYPE.DOCUMENT,
              tmx: n.XHR_RESPONSE_TYPE.DOCUMENT,
              tsx: n.XHR_RESPONSE_TYPE.DOCUMENT,
              svg: n.XHR_RESPONSE_TYPE.DOCUMENT,
              gif: n.XHR_RESPONSE_TYPE.BLOB,
              png: n.XHR_RESPONSE_TYPE.BLOB,
              bmp: n.XHR_RESPONSE_TYPE.BLOB,
              jpg: n.XHR_RESPONSE_TYPE.BLOB,
              jpeg: n.XHR_RESPONSE_TYPE.BLOB,
              tif: n.XHR_RESPONSE_TYPE.BLOB,
              tiff: n.XHR_RESPONSE_TYPE.BLOB,
              webp: n.XHR_RESPONSE_TYPE.BLOB,
              tga: n.XHR_RESPONSE_TYPE.BLOB,
              json: n.XHR_RESPONSE_TYPE.JSON,
              text: n.XHR_RESPONSE_TYPE.TEXT,
              txt: n.XHR_RESPONSE_TYPE.TEXT,
            }),
            (n.setExtensionLoadType = function (e, t) {
              s(n._loadTypeMap, e, t);
            }),
            (n.setExtensionXhrType = function (e, t) {
              s(n._xhrTypeMap, e, t);
            });
        },
        { eventemitter3: 129, url: 8 },
      ],
      132: [
        function (e, t, i) {
          t.exports = {
            _keyStr:
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            encodeBinary: function (e) {
              for (
                var t, i = '', n = new Array(4), r = 0, s = 0, a = 0;
                r < e.length;

              ) {
                for (t = new Array(3), s = 0; s < t.length; s++) {
                  r < e.length ? (t[s] = 255 & e.charCodeAt(r++)) : (t[s] = 0);
                }
                switch (
                  ((n[0] = t[0] >> 2),
                  (n[1] = ((3 & t[0]) << 4) | (t[1] >> 4)),
                  (n[2] = ((15 & t[1]) << 2) | (t[2] >> 6)),
                  (n[3] = 63 & t[2]),
                  (a = r - (e.length - 1)))
                ) {
                  case 2:
                    (n[3] = 64), (n[2] = 64);
                    break;
                  case 1:
                    n[3] = 64;
                }
                for (s = 0; s < n.length; s++) {
                  i += this._keyStr.charAt(n[s]);
                }
              }
              return i;
            },
          };
        },
        {},
      ],
      133: [
        function (e, t, i) {
          (t.exports = e('./Loader')),
            (t.exports.Resource = e('./Resource')),
            (t.exports.middleware = {
              caching: { memory: e('./middlewares/caching/memory') },
              parsing: { blob: e('./middlewares/parsing/blob') },
            });
        },
        {
          './Loader': 130,
          './Resource': 131,
          './middlewares/caching/memory': 134,
          './middlewares/parsing/blob': 135,
        },
      ],
      134: [
        function (e, t, i) {
          const n = {};
          t.exports = function () {
            return function (e, t) {
              n[e.url]
                ? ((e.data = n[e.url]), e.complete())
                : e.once('complete', function () {
                    n[this.url] = this.data;
                  }),
                t();
            };
          };
        },
        {},
      ],
      135: [
        function (e, t, i) {
          const n = e('../../Resource'),
            r = e('../../b64');
          (window.URL = window.URL || window.webkitURL),
            (t.exports = function () {
              return function (e, t) {
                if (!e.data) {
                  return t();
                }
                if (e.xhr && e.xhrType === n.XHR_RESPONSE_TYPE.BLOB) {
                  if (window.Blob && 'string' != typeof e.data) {
                    if (0 === e.data.type.indexOf('image')) {
                      const i = URL.createObjectURL(e.data);
                      (e.blob = e.data),
                        (e.data = new Image()),
                        (e.data.src = i),
                        (e.isImage = !0),
                        (e.data.onload = function () {
                          URL.revokeObjectURL(i), (e.data.onload = null), t();
                        });
                    }
                  } else {
                    const s = e.xhr.getResponseHeader('content-type');
                    s &&
                      0 === s.indexOf('image') &&
                      ((e.data = new Image()),
                      (e.data.src =
                        'data:' +
                        s +
                        ';base64,' +
                        r.encodeBinary(e.xhr.responseText)),
                      (e.isImage = !0),
                      (e.data.onload = function () {
                        (e.data.onload = null), t();
                      }));
                  }
                } else {
                  t();
                }
              };
            });
        },
        { '../../Resource': 131, '../../b64': 132 },
      ],
    },
    {},
    [108]
  )(108);
});
