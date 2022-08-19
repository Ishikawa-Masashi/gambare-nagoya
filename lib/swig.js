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
      (t.swig = e());
  }
})(function () {
  return (function e(t, i, n) {
    function r(a, o) {
      if (!i[a]) {
        if (!t[a]) {
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
        t[a][0].call(
          c.exports,
          function (e) {
            const i = t[a][1][e];
            return r(i ? i : e);
          },
          c,
          c.exports,
          e,
          t,
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
        function (e, t, i) {
          const n = e('fs');
          t.exports = n;
        },
        {},
      ],
      2: [
        function (e, t, i) {
          t.exports = e('path');
        },
        {},
      ],
      3: [
        function (e, t, i) {
          t.exports = e('process');
        },
        {},
      ],
      4: [
        function (e, t, i) {
          t.exports = e('./lib/swig');
        },
        { './lib/swig': 12 },
      ],
      5: [
        function (e, t, i) {
          const n = e('./utils'),
            r = {
              full: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ],
              abbr: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
            },
            s = {
              full: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              abbr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              alt: { '-1': 'Yesterday', 0: 'Today', 1: 'Tomorrow' },
            };
          (i.tzOffset = 0),
            (i.DateZ = function () {
              const e = {
                  default: [
                    'getUTCDate',
                    'getUTCDay',
                    'getUTCFullYear',
                    'getUTCHours',
                    'getUTCMilliseconds',
                    'getUTCMinutes',
                    'getUTCMonth',
                    'getUTCSeconds',
                    'toISOString',
                    'toGMTString',
                    'toUTCString',
                    'valueOf',
                    'getTime',
                  ],
                  z: [
                    'getDate',
                    'getDay',
                    'getFullYear',
                    'getHours',
                    'getMilliseconds',
                    'getMinutes',
                    'getMonth',
                    'getSeconds',
                    'getYear',
                    'toDateString',
                    'toLocaleDateString',
                    'toLocaleTimeString',
                  ],
                },
                t = this;
              (t.date = t.dateZ =
                arguments.length > 1
                  ? new Date(
                      Date.UTC.apply(Date, arguments) +
                        6e4 * new Date().getTimezoneOffset()
                    )
                  : 1 === arguments.length
                  ? new Date(new Date(arguments[0]))
                  : new Date()),
                (t.timezoneOffset = t.dateZ.getTimezoneOffset()),
                n.each(e.z, function (e) {
                  t[e] = function () {
                    return t.dateZ[e]();
                  };
                }),
                n.each(e['default'], function (e) {
                  t[e] = function () {
                    return t.date[e]();
                  };
                }),
                this.setTimezoneOffset(i.tzOffset);
            }),
            (i.DateZ.prototype = {
              getTimezoneOffset: function () {
                return this.timezoneOffset;
              },
              setTimezoneOffset: function (e) {
                return (
                  (this.timezoneOffset = e),
                  (this.dateZ = new Date(
                    this.date.getTime() +
                      6e4 * this.date.getTimezoneOffset() -
                      6e4 * this.timezoneOffset
                  )),
                  this
                );
              },
            }),
            (i.d = function (e) {
              return (e.getDate() < 10 ? '0' : '') + e.getDate();
            }),
            (i.D = function (e) {
              return s.abbr[e.getDay()];
            }),
            (i.j = function (e) {
              return e.getDate();
            }),
            (i.l = function (e) {
              return s.full[e.getDay()];
            }),
            (i.N = function (e) {
              const t = e.getDay();
              return t >= 1 ? t : 7;
            }),
            (i.S = function (e) {
              const t = e.getDate();
              return t % 10 === 1 && 11 !== t
                ? 'st'
                : t % 10 === 2 && 12 !== t
                ? 'nd'
                : t % 10 === 3 && 13 !== t
                ? 'rd'
                : 'th';
            }),
            (i.w = function (e) {
              return e.getDay();
            }),
            (i.z = function (e, t, n) {
              const r = e.getFullYear(),
                s = new i.DateZ(r, e.getMonth(), e.getDate(), 12, 0, 0),
                a = new i.DateZ(r, 0, 1, 12, 0, 0);
              return (
                s.setTimezoneOffset(t, n),
                a.setTimezoneOffset(t, n),
                Math.round((s - a) / 864e5)
              );
            }),
            (i.W = function (e) {
              let t,
                i = new Date(e.valueOf()),
                n = (e.getDay() + 6) % 7;
              return (
                i.setDate(i.getDate() - n + 3),
                (t = i.valueOf()),
                i.setMonth(0, 1),
                4 !== i.getDay() &&
                  i.setMonth(0, 1 + ((4 - i.getDay() + 7) % 7)),
                1 + Math.ceil((t - i) / 6048e5)
              );
            }),
            (i.F = function (e) {
              return r.full[e.getMonth()];
            }),
            (i.m = function (e) {
              return (e.getMonth() < 9 ? '0' : '') + (e.getMonth() + 1);
            }),
            (i.M = function (e) {
              return r.abbr[e.getMonth()];
            }),
            (i.n = function (e) {
              return e.getMonth() + 1;
            }),
            (i.t = function (e) {
              return 32 - new Date(e.getFullYear(), e.getMonth(), 32).getDate();
            }),
            (i.L = function (e) {
              return 29 === new Date(e.getFullYear(), 1, 29).getDate();
            }),
            (i.o = function (e) {
              const t = new Date(e.valueOf());
              return (
                t.setDate(t.getDate() - ((e.getDay() + 6) % 7) + 3),
                t.getFullYear()
              );
            }),
            (i.Y = function (e) {
              return e.getFullYear();
            }),
            (i.y = function (e) {
              return e.getFullYear().toString().substr(2);
            }),
            (i.a = function (e) {
              return e.getHours() < 12 ? 'am' : 'pm';
            }),
            (i.A = function (e) {
              return e.getHours() < 12 ? 'AM' : 'PM';
            }),
            (i.B = function (e) {
              let t,
                i = e.getUTCHours();
              return (
                (i = 23 === i ? 0 : i + 1),
                (t = Math.abs(
                  (60 * (60 * i + e.getUTCMinutes()) + e.getUTCSeconds()) / 86.4
                ).toFixed(0)),
                '000'.concat(t).slice(t.length)
              );
            }),
            (i.g = function (e) {
              const t = e.getHours();
              return 0 === t ? 12 : t > 12 ? t - 12 : t;
            }),
            (i.G = function (e) {
              return e.getHours();
            }),
            (i.h = function (e) {
              const t = e.getHours();
              return (
                (10 > t || (t > 12 && 22 > t) ? '0' : '') +
                (12 > t ? t : t - 12)
              );
            }),
            (i.H = function (e) {
              const t = e.getHours();
              return (10 > t ? '0' : '') + t;
            }),
            (i.i = function (e) {
              const t = e.getMinutes();
              return (10 > t ? '0' : '') + t;
            }),
            (i.s = function (e) {
              const t = e.getSeconds();
              return (10 > t ? '0' : '') + t;
            }),
            (i.O = function (e) {
              const t = e.getTimezoneOffset();
              return (
                (0 > t ? '-' : '+') +
                (10 > t / 60 ? '0' : '') +
                Math.abs(t / 60) +
                '00'
              );
            }),
            (i.Z = function (e) {
              return 60 * e.getTimezoneOffset();
            }),
            (i.c = function (e) {
              return e.toISOString();
            }),
            (i.r = function (e) {
              return e.toUTCString();
            }),
            (i.U = function (e) {
              return e.getTime() / 1e3;
            });
        },
        { './utils': 29 },
      ],
      6: [
        function (e, t, i) {
          function n(e) {
            const t = this,
              i = {};
            return r.isArray(e)
              ? r.map(e, function (e) {
                  return t.apply(null, arguments);
                })
              : null != e && e.isLazyString
              ? String(e)
              : 'object' == typeof e
              ? (r.each(e, function (e, n) {
                  i[n] = t.apply(null, arguments);
                }),
                i)
              : void 0;
          }
          var r = e('./utils'),
            s = e('./dateformatter');
          (i.addslashes = function (e) {
            const t = n.apply(i.addslashes, arguments);
            return void 0 !== t
              ? t
              : e
                  .replace(/\\/g, '\\\\')
                  .replace(/\'/g, "\\'")
                  .replace(/\"/g, '\\"');
          }),
            (i.capitalize = function (e) {
              const t = n.apply(i.capitalize, arguments);
              return void 0 !== t
                ? t
                : e.toString().charAt(0).toUpperCase() +
                    e.toString().substr(1).toLowerCase();
            }),
            (i.date = function (e, t, i, n) {
              let r,
                a = t.length,
                o = new s.DateZ(e),
                l = 0,
                h = '';
              for (i && o.setTimezoneOffset(i, n), l; a > l; l += 1) {
                (r = t.charAt(l)),
                  '\\' === r
                    ? ((l += 1), (h += a > l ? t.charAt(l) : r))
                    : (h += s.hasOwnProperty(r) ? s[r](o, i, n) : r);
              }
              return h;
            }),
            (i['default'] = function (e, t) {
              return 'undefined' == typeof e || (!e && 'number' != typeof e)
                ? t
                : e;
            }),
            (i.escape = function (e, t) {
              let r,
                s = n.apply(i.escape, arguments),
                a = e,
                o = 0;
              if (void 0 !== s) {
                return s;
              }
              if ('string' != typeof e) {
                return e;
              }
              switch (((s = ''), t)) {
                case 'js':
                  for (
                    a = a.replace(/\\/g, '\\u005C'), o;
                    o < a.length;
                    o += 1
                  ) {
                    (r = a.charCodeAt(o)),
                      32 > r
                        ? ((r = r.toString(16).toUpperCase()),
                          (r = r.length < 2 ? '0' + r : r),
                          (s += '\\u00' + r))
                        : (s += a[o]);
                  }
                  return s
                    .replace(/&/g, '\\u0026')
                    .replace(/</g, '\\u003C')
                    .replace(/>/g, '\\u003E')
                    .replace(/\'/g, '\\u0027')
                    .replace(/"/g, '\\u0022')
                    .replace(/\=/g, '\\u003D')
                    .replace(/-/g, '\\u002D')
                    .replace(/;/g, '\\u003B');
                default:
                  return a
                    .replace(/&(?!amp;|lt;|gt;|quot;|#39;)/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
              }
            }),
            (i.e = i.escape),
            (i.first = function (e) {
              if ('object' == typeof e && !r.isArray(e)) {
                const t = r.keys(e);
                return e[t[0]];
              }
              return 'string' == typeof e ? e.substr(0, 1) : e[0];
            }),
            (i.groupBy = function (e, t) {
              if (!r.isArray(e)) {
                return e;
              }
              const i = {};
              return (
                r.each(e, function (e) {
                  if (e.hasOwnProperty(t)) {
                    const n = e[t];
                    r.extend({}, e);
                    delete e[t], i[n] || (i[n] = []), i[n].push(e);
                  }
                }),
                i
              );
            }),
            (i.join = function (e, t) {
              if (r.isArray(e)) {
                return e.join(t);
              }
              if ('object' == typeof e) {
                const i = [];
                return (
                  r.each(e, function (e) {
                    i.push(e);
                  }),
                  i.join(t)
                );
              }
              return e;
            }),
            (i.json = function (e, t) {
              return JSON.stringify(e, null, t || 0);
            }),
            (i.json_encode = i.json),
            (i.last = function (e) {
              if ('object' == typeof e && !r.isArray(e)) {
                const t = r.keys(e);
                return e[t[t.length - 1]];
              }
              return 'string' == typeof e
                ? e.charAt(e.length - 1)
                : e[e.length - 1];
            }),
            (i.lower = function (e) {
              const t = n.apply(i.lower, arguments);
              return void 0 !== t ? t : e.toString().toLowerCase();
            }),
            (i.raw = function (e) {
              return i.safe(e);
            }),
            (i.raw.safe = !0),
            (i.replace = function (e, t, i, n) {
              const r = new RegExp(t, n);
              return e.replace(r, i);
            }),
            (i.reverse = function (e) {
              return i.sort(e, !0);
            }),
            (i.safe = function (e) {
              return e;
            }),
            (i.safe.safe = !0),
            (i.sort = function (e, t) {
              let i;
              if (r.isArray(e)) {
                i = e.sort();
              } else {
                switch (typeof e) {
                  case 'object':
                    i = r.keys(e).sort();
                    break;
                  case 'string':
                    return (
                      (i = e.split('')),
                      t ? i.reverse().join('') : i.sort().join('')
                    );
                }
              }
              return i && t ? i.reverse() : i || e;
            }),
            (i.striptags = function (e) {
              const t = n.apply(i.striptags, arguments);
              return void 0 !== t
                ? t
                : e.toString().replace(/(<([^>]+)>)/gi, '');
            }),
            (i.title = function (e) {
              const t = n.apply(i.title, arguments);
              return void 0 !== t
                ? t
                : e.toString().replace(/\w\S*/g, function (e) {
                    return (
                      e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                    );
                  });
            }),
            (i.uniq = function (e) {
              let t;
              return e && r.isArray(e)
                ? ((t = []),
                  r.each(e, function (e) {
                    -1 === t.indexOf(e) && t.push(e);
                  }),
                  t)
                : '';
            }),
            (i.upper = function (e) {
              const t = n.apply(i.upper, arguments);
              return void 0 !== t ? t : e.toString().toUpperCase();
            }),
            (i.url_encode = function (e) {
              const t = n.apply(i.url_encode, arguments);
              return void 0 !== t ? t : encodeURIComponent(e);
            }),
            (i.url_decode = function (e) {
              const t = n.apply(i.url_decode, arguments);
              return void 0 !== t ? t : decodeURIComponent(e);
            });
        },
        { './dateformatter': 5, './utils': 29 },
      ],
      7: [
        function (e, t, i) {
          function n(e) {
            let t;
            return (
              r.some(a, function (i) {
                return r.some(i.regex, function (n) {
                  let r,
                    s = e.match(n);
                  if (s) {
                    return (
                      (r = s[i.idx || 0].replace(/\s*$/, '')),
                      (r =
                        i.hasOwnProperty('replace') &&
                        i.replace.hasOwnProperty(r)
                          ? i.replace[r]
                          : r),
                      (t = { match: r, type: i.type, length: s[0].length }),
                      !0
                    );
                  }
                });
              }),
              t || (t = { match: e, type: s.UNKNOWN, length: e.length }),
              t
            );
          }
          var r = e('./utils'),
            s = {
              WHITESPACE: 0,
              STRING: 1,
              FILTER: 2,
              FILTEREMPTY: 3,
              FUNCTION: 4,
              FUNCTIONEMPTY: 5,
              PARENOPEN: 6,
              PARENCLOSE: 7,
              COMMA: 8,
              VAR: 9,
              NUMBER: 10,
              OPERATOR: 11,
              BRACKETOPEN: 12,
              BRACKETCLOSE: 13,
              DOTKEY: 14,
              ARRAYOPEN: 15,
              CURLYOPEN: 17,
              CURLYCLOSE: 18,
              COLON: 19,
              COMPARATOR: 20,
              LOGIC: 21,
              NOT: 22,
              BOOL: 23,
              ASSIGNMENT: 24,
              METHODOPEN: 25,
              UNKNOWN: 100,
            },
            a = [
              { type: s.WHITESPACE, regex: [/^\s+/] },
              {
                type: s.STRING,
                regex: [/^""/, /^".*?[^\\]"/, /^''/, /^'.*?[^\\]'/],
              },
              { type: s.FILTER, regex: [/^\|\s*(\w+)\(/], idx: 1 },
              { type: s.FILTEREMPTY, regex: [/^\|\s*(\w+)/], idx: 1 },
              { type: s.FUNCTIONEMPTY, regex: [/^\s*(\w+)\(\)/], idx: 1 },
              { type: s.FUNCTION, regex: [/^\s*(\w+)\(/], idx: 1 },
              { type: s.PARENOPEN, regex: [/^\(/] },
              { type: s.PARENCLOSE, regex: [/^\)/] },
              { type: s.COMMA, regex: [/^,/] },
              {
                type: s.LOGIC,
                regex: [/^(&&|\|\|)\s*/, /^(and|or)\s+/],
                idx: 1,
                replace: { and: '&&', or: '||' },
              },
              {
                type: s.COMPARATOR,
                regex: [
                  /^(===|==|\!==|\!=|<=|<|>=|>|in\s|gte\s|gt\s|lte\s|lt\s)\s*/,
                ],
                idx: 1,
                replace: { gte: '>=', gt: '>', lte: '<=', lt: '<' },
              },
              { type: s.ASSIGNMENT, regex: [/^(=|\+=|-=|\*=|\/=)/] },
              {
                type: s.NOT,
                regex: [/^\!\s*/, /^not\s+/],
                replace: { not: '!' },
              },
              {
                type: s.BOOL,
                regex: [/^(true|false)\s+/, /^(true|false)$/],
                idx: 1,
              },
              {
                type: s.VAR,
                regex: [/^[a-zA-Z_$]\w*((\.\$?\w*)+)?/, /^[a-zA-Z_$]\w*/],
              },
              { type: s.BRACKETOPEN, regex: [/^\[/] },
              { type: s.BRACKETCLOSE, regex: [/^\]/] },
              { type: s.CURLYOPEN, regex: [/^\{/] },
              { type: s.COLON, regex: [/^\:/] },
              { type: s.CURLYCLOSE, regex: [/^\}/] },
              { type: s.DOTKEY, regex: [/^\.(\w+)/], idx: 1 },
              { type: s.NUMBER, regex: [/^[+\-]?\d+(\.\d+)?/] },
              { type: s.OPERATOR, regex: [/^(\+|\-|\/|\*|%)/] },
            ];
          (i.types = s),
            (i.read = function (e) {
              for (var t, i, r = 0, s = []; r < e.length; ) {
                (t = e.substring(r)), (i = n(t)), (r += i.length), s.push(i);
              }
              return s;
            });
        },
        { './utils': 29 },
      ],
      8: [
        function (e, t, i) {
          (function (i) {
            const n = e('fs'),
              r = e('path');
            t.exports = function (e, t) {
              const s = {};
              return (
                (t = t || 'utf8'),
                (e = e ? r.normalize(e) : null),
                (s.resolve = function (t, n) {
                  return (
                    (n = e ? e : n ? r.dirname(n) : i.cwd()), r.resolve(n, t)
                  );
                }),
                (s.load = function (e, i) {
                  if (!n || (i && !n.readFile) || !n.readFileSync) {
                    throw new Error(
                      'Unable to find file ' +
                        e +
                        ' because there is no filesystem to read from.'
                    );
                  }
                  return (
                    (e = s.resolve(e)),
                    i ? void n.readFile(e, t, i) : n.readFileSync(e, t)
                  );
                }),
                s
              );
            };
          }.call(this, e('_process')));
        },
        { _process: 3, fs: 1, path: 2 },
      ],
      9: [
        function (e, t, i) {
          (i.fs = e('./filesystem')), (i.memory = e('./memory'));
        },
        { './filesystem': 8, './memory': 10 },
      ],
      10: [
        function (e, t, i) {
          const n = e('path'),
            r = e('../utils');
          t.exports = function (e, t) {
            const i = {};
            return (
              (t = t ? n.normalize(t) : null),
              (i.resolve = function (e, i) {
                return (i = t ? t : i ? n.dirname(i) : '/'), n.resolve(i, e);
              }),
              (i.load = function (t, i) {
                let n, s;
                return (
                  (s = [t, t.replace(/^(\/|\\)/, '')]),
                  (n = e[s[0]] || e[s[1]]),
                  n || r.throwError('Unable to find template "' + t + '".'),
                  i ? void i(null, n) : n
                );
              }),
              i
            );
          };
        },
        { '../utils': 29, path: 2 },
      ],
      11: [
        function (e, t, i) {
          function n(e) {
            return e.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, '\\$&');
          }
          function r(e, t, i, n, r) {
            (this.out = []),
              (this.state = []),
              (this.filterApplyIdx = []),
              (this._parsers = {}),
              (this.line = n),
              (this.filename = r),
              (this.filters = t),
              (this.escape = i),
              (this.parse = function () {
                const t = this;
                return (
                  t._parsers.start && t._parsers.start.call(t),
                  s.each(e, function (i, n) {
                    let r = e[n - 1];
                    if (((t.isLast = n === e.length - 1), r)) {
                      for (; r.type === o.WHITESPACE; ) {
                        (n -= 1), (r = e[n - 1]);
                      }
                    }
                    (t.prevToken = r), t.parseToken(i);
                  }),
                  t._parsers.end && t._parsers.end.call(t),
                  t.escape &&
                    ((t.filterApplyIdx = [0]),
                    'string' == typeof t.escape
                      ? (t.parseToken({ type: o.FILTER, match: 'e' }),
                        t.parseToken({ type: o.COMMA, match: ',' }),
                        t.parseToken({ type: o.STRING, match: String(i) }),
                        t.parseToken({ type: o.PARENCLOSE, match: ')' }))
                      : t.parseToken({ type: o.FILTEREMPTY, match: 'e' })),
                  t.out
                );
              });
          }
          var s = e('./utils'),
            a = e('./lexer'),
            o = a.types,
            l = [
              'break',
              'case',
              'catch',
              'continue',
              'debugger',
              'default',
              'delete',
              'do',
              'else',
              'finally',
              'for',
              'function',
              'if',
              'in',
              'instanceof',
              'new',
              'return',
              'switch',
              'this',
              'throw',
              'try',
              'typeof',
              'var',
              'void',
              'while',
              'with',
            ];
          (r.prototype = {
            on: function (e, t) {
              this._parsers[e] = t;
            },
            parseToken: function (e) {
              let t,
                i = this,
                n = i._parsers[e.type] || i._parsers['*'],
                r = e.match,
                a = i.prevToken,
                l = a ? a.type : null,
                h = i.state.length ? i.state[i.state.length - 1] : null;
              if (!n || 'function' != typeof n || n.call(this, e)) {
                switch (
                  (h &&
                    a &&
                    h === o.FILTER &&
                    l === o.FILTER &&
                    e.type !== o.PARENCLOSE &&
                    e.type !== o.COMMA &&
                    e.type !== o.OPERATOR &&
                    e.type !== o.FILTER &&
                    e.type !== o.FILTEREMPTY &&
                    i.out.push(', '),
                  h &&
                    h === o.METHODOPEN &&
                    (i.state.pop(),
                    e.type !== o.PARENCLOSE && i.out.push(', ')),
                  e.type)
                ) {
                  case o.WHITESPACE:
                    break;
                  case o.STRING:
                    i.filterApplyIdx.push(i.out.length),
                      i.out.push(r.replace(/\\/g, '\\\\'));
                    break;
                  case o.NUMBER:
                  case o.BOOL:
                    i.filterApplyIdx.push(i.out.length), i.out.push(r);
                    break;
                  case o.FILTER:
                    (i.filters.hasOwnProperty(r) &&
                      'function' == typeof i.filters[r]) ||
                      s.throwError(
                        'Invalid filter "' + r + '"',
                        i.line,
                        i.filename
                      ),
                      (i.escape = i.filters[r].safe ? !1 : i.escape),
                      i.out.splice(
                        i.filterApplyIdx[i.filterApplyIdx.length - 1],
                        0,
                        '_filters["' + r + '"]('
                      ),
                      i.state.push(e.type);
                    break;
                  case o.FILTEREMPTY:
                    (i.filters.hasOwnProperty(r) &&
                      'function' == typeof i.filters[r]) ||
                      s.throwError(
                        'Invalid filter "' + r + '"',
                        i.line,
                        i.filename
                      ),
                      (i.escape = i.filters[r].safe ? !1 : i.escape),
                      i.out.splice(
                        i.filterApplyIdx[i.filterApplyIdx.length - 1],
                        0,
                        '_filters["' + r + '"]('
                      ),
                      i.out.push(')');
                    break;
                  case o.FUNCTION:
                  case o.FUNCTIONEMPTY:
                    i.out.push(
                      '((typeof _ctx.' +
                        r +
                        ' !== "undefined") ? _ctx.' +
                        r +
                        ' : ((typeof ' +
                        r +
                        ' !== "undefined") ? ' +
                        r +
                        ' : _fn))('
                    ),
                      (i.escape = !1),
                      e.type === o.FUNCTIONEMPTY
                        ? (i.out[i.out.length - 1] =
                            i.out[i.out.length - 1] + ')')
                        : i.state.push(e.type),
                      i.filterApplyIdx.push(i.out.length - 1);
                    break;
                  case o.PARENOPEN:
                    i.state.push(e.type),
                      i.filterApplyIdx.length
                        ? (i.out.splice(
                            i.filterApplyIdx[i.filterApplyIdx.length - 1],
                            0,
                            '('
                          ),
                          a && l === o.VAR
                            ? ((t = a.match.split('.').slice(0, -1)),
                              i.out.push(' || _fn).call(' + i.checkMatch(t)),
                              i.state.push(o.METHODOPEN),
                              (i.escape = !1))
                            : i.out.push(' || _fn)('),
                          i.filterApplyIdx.push(i.out.length - 3))
                        : (i.out.push('('),
                          i.filterApplyIdx.push(i.out.length - 1));
                    break;
                  case o.PARENCLOSE:
                    (t = i.state.pop()),
                      t !== o.PARENOPEN &&
                        t !== o.FUNCTION &&
                        t !== o.FILTER &&
                        s.throwError(
                          'Mismatched nesting state',
                          i.line,
                          i.filename
                        ),
                      i.out.push(')'),
                      i.filterApplyIdx.pop(),
                      t !== o.FILTER && i.filterApplyIdx.pop();
                    break;
                  case o.COMMA:
                    h !== o.FUNCTION &&
                      h !== o.FILTER &&
                      h !== o.ARRAYOPEN &&
                      h !== o.CURLYOPEN &&
                      h !== o.PARENOPEN &&
                      h !== o.COLON &&
                      s.throwError('Unexpected comma', i.line, i.filename),
                      h === o.COLON && i.state.pop(),
                      i.out.push(', '),
                      i.filterApplyIdx.pop();
                    break;
                  case o.LOGIC:
                  case o.COMPARATOR:
                    (a &&
                      l !== o.COMMA &&
                      l !== e.type &&
                      l !== o.BRACKETOPEN &&
                      l !== o.CURLYOPEN &&
                      l !== o.PARENOPEN &&
                      l !== o.FUNCTION) ||
                      s.throwError('Unexpected logic', i.line, i.filename),
                      i.out.push(e.match);
                    break;
                  case o.NOT:
                    i.out.push(e.match);
                    break;
                  case o.VAR:
                    i.parseVar(e, r, h);
                    break;
                  case o.BRACKETOPEN:
                    !a ||
                    (l !== o.VAR && l !== o.BRACKETCLOSE && l !== o.PARENCLOSE)
                      ? (i.state.push(o.ARRAYOPEN),
                        i.filterApplyIdx.push(i.out.length))
                      : i.state.push(e.type),
                      i.out.push('[');
                    break;
                  case o.BRACKETCLOSE:
                    (t = i.state.pop()),
                      t !== o.BRACKETOPEN &&
                        t !== o.ARRAYOPEN &&
                        s.throwError(
                          'Unexpected closing square bracket',
                          i.line,
                          i.filename
                        ),
                      i.out.push(']'),
                      i.filterApplyIdx.pop();
                    break;
                  case o.CURLYOPEN:
                    i.state.push(e.type),
                      i.out.push('{'),
                      i.filterApplyIdx.push(i.out.length - 1);
                    break;
                  case o.COLON:
                    h !== o.CURLYOPEN &&
                      s.throwError('Unexpected colon', i.line, i.filename),
                      i.state.push(e.type),
                      i.out.push(':'),
                      i.filterApplyIdx.pop();
                    break;
                  case o.CURLYCLOSE:
                    h === o.COLON && i.state.pop(),
                      i.state.pop() !== o.CURLYOPEN &&
                        s.throwError(
                          'Unexpected closing curly brace',
                          i.line,
                          i.filename
                        ),
                      i.out.push('}'),
                      i.filterApplyIdx.pop();
                    break;
                  case o.DOTKEY:
                    (!a ||
                      (l !== o.VAR &&
                        l !== o.BRACKETCLOSE &&
                        l !== o.DOTKEY &&
                        l !== o.PARENCLOSE &&
                        l !== o.FUNCTIONEMPTY &&
                        l !== o.FILTEREMPTY &&
                        l !== o.CURLYCLOSE)) &&
                      s.throwError(
                        'Unexpected key "' + r + '"',
                        i.line,
                        i.filename
                      ),
                      i.out.push('.' + r);
                    break;
                  case o.OPERATOR:
                    i.out.push(' ' + r + ' '), i.filterApplyIdx.pop();
                }
              }
            },
            parseVar: function (e, t, i) {
              const n = this;
              return (
                (t = t.split('.')),
                -1 !== l.indexOf(t[0]) &&
                  s.throwError(
                    'Reserved keyword "' +
                      t[0] +
                      '" attempted to be used as a variable',
                    n.line,
                    n.filename
                  ),
                n.filterApplyIdx.push(n.out.length),
                i === o.CURLYOPEN
                  ? (t.length > 1 &&
                      s.throwError('Unexpected dot', n.line, n.filename),
                    void n.out.push(t[0]))
                  : void n.out.push(n.checkMatch(t))
              );
            },
            checkMatch: function (e) {
              function t(t) {
                let i = t + r,
                  n = e,
                  a = '';
                return (
                  (a =
                    '(typeof ' + i + ' !== "undefined" && ' + i + ' !== null'),
                  s.each(n, function (e, t) {
                    0 !== t &&
                      ((a +=
                        ' && ' +
                        i +
                        '.' +
                        e +
                        ' !== undefined && ' +
                        i +
                        '.' +
                        e +
                        ' !== null'),
                      (i += '.' + e));
                  }),
                  (a += ')')
                );
              }
              function i(i) {
                return '(' + t(i) + ' ? ' + i + e.join('.') + ' : "")';
              }
              var n,
                r = e[0];
              return (
                (n =
                  '(' + t('_ctx.') + ' ? ' + i('_ctx.') + ' : ' + i('') + ')'),
                '(' + n + ' !== null ? ' + n + ' : "" )'
              );
            },
          }),
            (i.parse = function (e, t, l, h, c) {
              function u(e, t) {
                let i,
                  n,
                  o = a.read(s.strip(e));
                return (
                  (i = new r(o, c, m, t, l.filename)),
                  (n = i.parse().join('')),
                  i.state.length &&
                    s.throwError('Unable to parse "' + e + '"', t, l.filename),
                  {
                    compile: function () {
                      return '_output += ' + n + ';\n';
                    },
                  }
                );
              }
              function d(t, i) {
                let n, u, d, p, f, g, y;
                if (s.startsWith(t, 'end')) {
                  if (
                    ((y = D[D.length - 1]),
                    y &&
                      y.name === t.split(/\s+/)[0].replace(/^end/, '') &&
                      y.ends)
                  ) {
                    switch (y.name) {
                      case 'autoescape':
                        m = l.autoescape;
                        break;
                      case 'raw':
                        N = !1;
                    }
                    return void D.pop();
                  }
                  N ||
                    s.throwError(
                      'Unexpected end of tag "' + t.replace(/^end/, '') + '"',
                      i,
                      l.filename
                    );
                }
                if (!N) {
                  switch (
                    ((d = t.split(/\s+(.+)?/)),
                    (p = d.shift()),
                    h.hasOwnProperty(p) ||
                      s.throwError('Unexpected tag "' + t + '"', i, l.filename),
                    (n = a.read(s.strip(d.join(' ')))),
                    (u = new r(n, c, !1, i, l.filename)),
                    (f = h[p]),
                    f.parse(d[1], i, u, o, D, l, e) ||
                      s.throwError('Unexpected tag "' + p + '"', i, l.filename),
                    u.parse(),
                    (g = u.out),
                    p)
                  ) {
                    case 'autoescape':
                      m = 'false' !== g[0] ? g[0] : !1;
                      break;
                    case 'raw':
                      N = !0;
                  }
                  return {
                    block: !!h[p].block,
                    compile: f.compile,
                    args: g,
                    content: [],
                    ends: f.ends,
                    name: p,
                  };
                }
              }
              function p(e) {
                return 'string' == typeof e && (e = e.replace(/\s*$/, '')), e;
              }
              t = t.replace(/\r\n/g, '\n');
              var f,
                m = l.autoescape,
                g = l.tagControls[0],
                y = l.tagControls[1],
                v = l.varControls[0],
                b = l.varControls[1],
                x = n(g),
                w = n(y),
                _ = n(v),
                T = n(b),
                S = new RegExp('^' + x + '-?\\s*-?|-?\\s*-?' + w + '$', 'g'),
                C = new RegExp('^' + x + '-'),
                E = new RegExp('-' + w + '$'),
                A = new RegExp('^' + _ + '-?\\s*-?|-?\\s*-?' + T + '$', 'g'),
                P = new RegExp('^' + _ + '-'),
                M = new RegExp('-' + T + '$'),
                k = l.cmtControls[0],
                R = l.cmtControls[1],
                O = '[\\s\\S]*?',
                I = new RegExp(
                  '(' +
                    x +
                    O +
                    w +
                    '|' +
                    _ +
                    O +
                    T +
                    '|' +
                    n(k) +
                    O +
                    n(R) +
                    ')'
                ),
                F = 1,
                D = [],
                L = null,
                q = [],
                B = {},
                N = !1;
              return (
                (i.parseVariable = u),
                s.each(t.split(I), function (e) {
                  let t, i, n, r, a;
                  if (e) {
                    if (!N && s.startsWith(e, v) && s.endsWith(e, b)) {
                      (n = P.test(e)),
                        (f = M.test(e)),
                        (t = u(e.replace(A, ''), F));
                    } else if (s.startsWith(e, g) && s.endsWith(e, y)) {
                      (n = C.test(e)),
                        (f = E.test(e)),
                        (t = d(e.replace(S, ''), F)),
                        t &&
                          ('extends' === t.name
                            ? (L = t.args
                                .join('')
                                .replace(/^\'|\'$/g, '')
                                .replace(/^\"|\"$/g, ''))
                            : t.block && !D.length && (B[t.args.join('')] = t)),
                        N && !t && (t = e);
                    } else if (
                      N ||
                      (!s.startsWith(e, k) && !s.endsWith(e, R))
                    ) {
                      (t = f ? e.replace(/^\s*/, '') : e), (f = !1);
                    } else if (s.startsWith(e, k) && s.endsWith(e, R)) {
                      return;
                    }
                    n &&
                      q.length &&
                      ((r = q.pop()),
                      'string' == typeof r
                        ? (r = p(r))
                        : r.content &&
                          r.content.length &&
                          ((a = p(r.content.pop())), r.content.push(a)),
                      q.push(r)),
                      t &&
                        (D.length ? D[D.length - 1].content.push(t) : q.push(t),
                        t.name && t.ends && D.push(t),
                        (i = e.match(/\n/g)),
                        (F += i ? i.length : 0));
                  }
                }),
                { name: l.filename, parent: L, tokens: q, blocks: B }
              );
            }),
            (i.compile = function (e, t, n, r) {
              let a = '',
                o = s.isArray(e) ? e : e.tokens;
              return (
                s.each(o, function (e) {
                  let s;
                  return 'string' == typeof e
                    ? void (a +=
                        '_output += "' +
                        e
                          .replace(/\\/g, '\\\\')
                          .replace(/\n|\r/g, '\\n')
                          .replace(/"/g, '\\"') +
                        '";\n')
                    : ((s = e.compile(
                        i.compile,
                        e.args ? e.args.slice(0) : [],
                        e.content ? e.content.slice(0) : [],
                        t,
                        n,
                        r
                      )),
                      void (a += s || ''));
                }),
                a
              );
            });
        },
        { './lexer': 7, './utils': 29 },
      ],
      12: [
        function (e, t, i) {
          function n() {
            return '';
          }
          function r(e) {
            if (e) {
              if (
                (s.each(
                  ['varControls', 'tagControls', 'cmtControls'],
                  function (t) {
                    if (e.hasOwnProperty(t)) {
                      if (!s.isArray(e[t]) || 2 !== e[t].length) {
                        throw new Error(
                          'Option "' +
                            t +
                            '" must be an array containing 2 different control strings.'
                        );
                      }
                      if (e[t][0] === e[t][1]) {
                        throw new Error(
                          'Option "' +
                            t +
                            '" open and close controls must not be the same.'
                        );
                      }
                      s.each(e[t], function (e, i) {
                        if (e.length < 2) {
                          throw new Error(
                            'Option "' +
                              t +
                              '" ' +
                              (i ? 'open ' : 'close ') +
                              'control must be at least 2 characters. Saw "' +
                              e +
                              '" instead.'
                          );
                        }
                      });
                    }
                  }
                ),
                e.hasOwnProperty('cache') &&
                  e.cache &&
                  'memory' !== e.cache &&
                  (!e.cache.get || !e.cache.set))
              ) {
                throw new Error(
                  'Invalid cache option ' +
                    JSON.stringify(e.cache) +
                    ' found. Expected "memory" or { get: function (key) { ... }, set: function (key, value) { ... } }.'
                );
              }
              if (
                e.hasOwnProperty('loader') &&
                e.loader &&
                (!e.loader.load || !e.loader.resolve)
              ) {
                throw new Error(
                  'Invalid loader option ' +
                    JSON.stringify(e.loader) +
                    ' found. Expected { load: function (pathname, cb) { ... }, resolve: function (to, from) { ... } }.'
                );
              }
            }
          }
          var s = e('./utils'),
            a = e('./tags'),
            o = e('./filters'),
            l = e('./parser'),
            h = e('./dateformatter'),
            c = e('./loaders');
          i.version = '1.4.2';
          let u,
            d = {
              autoescape: !0,
              varControls: ['{{', '}}'],
              tagControls: ['{%', '%}'],
              cmtControls: ['{#', '#}'],
              locals: {},
              cache: 'memory',
              loader: c.fs(),
            };
          (i.setDefaults = function (e) {
            r(e), (u.options = s.extend(u.options, e));
          }),
            (i.setDefaultTZOffset = function (e) {
              h.tzOffset = e;
            }),
            (i.Swig = function (e) {
              function t(e) {
                return e && e.locals
                  ? s.extend({}, m.options.locals, e.locals)
                  : m.options.locals;
              }
              function i(e) {
                return (
                  (e = e || {}),
                  (e.hasOwnProperty('cache') && !e.cache) || !m.options.cache
                );
              }
              function h(e, t) {
                return i(t)
                  ? void 0
                  : 'memory' === m.options.cache
                  ? m.cache[e]
                  : m.options.cache.get(e);
              }
              function c(e, t, n) {
                return i(t)
                  ? void 0
                  : 'memory' === m.options.cache
                  ? void (m.cache[e] = n)
                  : void m.options.cache.set(e, n);
              }
              function u(e, t) {
                return s.map(t, function (t) {
                  const i = t.args ? t.args.join('') : '';
                  return (
                    'block' === t.name && e[i] && (t = e[i]),
                    t.content &&
                      t.content.length &&
                      (t.content = u(e, t.content)),
                    t
                  );
                });
              }
              function p(e, t) {
                const i = [];
                s.each(e, function (e) {
                  i.push(e);
                }),
                  s.each(i.reverse(), function (e) {
                    'block' !== e.name && t.unshift(e);
                  });
              }
              function f(e, t) {
                for (var i, n, r, a = e.parent, o = [], l = []; a; ) {
                  if (!t || !t.filename) {
                    throw new Error(
                      'Cannot extend "' +
                        a +
                        '" because current template has no filename.'
                    );
                  }
                  if (
                    ((i = i || t.filename),
                    (i = m.options.loader.resolve(a, i)),
                    (n =
                      h(i, t) ||
                      m.parseFile(i, s.extend({}, t, { filename: i }))),
                    (a = n.parent),
                    -1 !== o.indexOf(i))
                  ) {
                    throw new Error('Illegal circular extends of "' + i + '".');
                  }
                  o.push(i), l.push(n);
                }
                for (r = l.length, r = l.length - 2; r >= 0; r -= 1) {
                  (l[r].tokens = u(l[r].blocks, l[r + 1].tokens)),
                    p(l[r].blocks, l[r].tokens);
                }
                return l;
              }
              r(e),
                (this.options = s.extend({}, d, e || {})),
                (this.cache = {}),
                (this.extensions = {});
              var m = this,
                g = a,
                y = o;
              (this.invalidateCache = function () {
                'memory' === m.options.cache && (m.cache = {});
              }),
                (this.setFilter = function (e, t) {
                  if ('function' != typeof t) {
                    throw new Error(
                      'Filter "' + e + '" is not a valid function.'
                    );
                  }
                  y[e] = t;
                }),
                (this.setTag = function (e, t, i, n, r) {
                  if ('function' != typeof t) {
                    throw new Error(
                      'Tag "' + e + '" parse method is not a valid function.'
                    );
                  }
                  if ('function' != typeof i) {
                    throw new Error(
                      'Tag "' + e + '" compile method is not a valid function.'
                    );
                  }
                  g[e] = { parse: t, compile: i, ends: n || !1, block: !!r };
                }),
                (this.setExtension = function (e, t) {
                  m.extensions[e] = t;
                }),
                (this.parse = function (e, i) {
                  r(i);
                  let n,
                    a = t(i),
                    o = {};
                  for (n in i) {
                    i.hasOwnProperty(n) && 'locals' !== n && (o[n] = i[n]);
                  }
                  return (
                    (i = s.extend({}, m.options, o)),
                    (i.locals = a),
                    l.parse(this, e, i, g, y)
                  );
                }),
                (this.parseFile = function (e, t) {
                  let i;
                  return (
                    t || (t = {}),
                    (e = m.options.loader.resolve(e, t.resolveFrom)),
                    (i = m.options.loader.load(e)),
                    t.filename || (t = s.extend({ filename: e }, t)),
                    m.parse(i, t)
                  );
                }),
                (this.precompile = function (e, t) {
                  let i,
                    n = m.parse(e, t),
                    r = f(n, t);
                  r.length &&
                    ((n.tokens = u(n.blocks, r[0].tokens)),
                    p(n.blocks, n.tokens));
                  try {
                    i = new Function(
                      '_swig',
                      '_ctx',
                      '_filters',
                      '_utils',
                      '_fn',
                      '  var _ext = _swig.extensions,\n    _output = "";\n' +
                        l.compile(n, r, t) +
                        '\n  return _output;\n'
                    );
                  } catch (a) {
                    s.throwError(a, null, t.filename);
                  }
                  return { tpl: i, tokens: n };
                }),
                (this.render = function (e, t) {
                  return m.compile(e, t)();
                }),
                (this.renderFile = function (e, t, i) {
                  return i
                    ? void m.compileFile(e, {}, function (e, n) {
                        let r;
                        if (e) {
                          return void i(e);
                        }
                        try {
                          r = n(t);
                        } catch (s) {
                          return void i(s);
                        }
                        i(null, r);
                      })
                    : m.compileFile(e)(t);
                }),
                (this.compile = function (e, i) {
                  function r(e) {
                    let t;
                    return (
                      (t =
                        e && o
                          ? s.extend({}, a, e)
                          : e && !o
                          ? e
                          : !e && o
                          ? a
                          : {}),
                      l.tpl(m, t, y, s, n)
                    );
                  }
                  let a,
                    o,
                    l,
                    u = i ? i.filename : null,
                    d = u ? h(u, i) : null;
                  return d
                    ? d
                    : ((a = t(i)),
                      (o = s.keys(a).length),
                      (l = this.precompile(e, i)),
                      s.extend(r, l.tokens),
                      u && c(u, i, r),
                      r);
                }),
                (this.compileFile = function (e, t, i) {
                  let n, r;
                  return (
                    t || (t = {}),
                    (e = m.options.loader.resolve(e, t.resolveFrom)),
                    t.filename || (t = s.extend({ filename: e }, t)),
                    (r = h(e, t))
                      ? i
                        ? void i(null, r)
                        : r
                      : i
                      ? void m.options.loader.load(e, function (e, n) {
                          if (e) {
                            return void i(e);
                          }
                          let r;
                          try {
                            r = m.compile(n, t);
                          } catch (s) {
                            return void i(s);
                          }
                          i(e, r);
                        })
                      : ((n = m.options.loader.load(e)), m.compile(n, t))
                  );
                }),
                (this.run = function (e, i, r) {
                  const a = t({ locals: i });
                  return r && c(r, {}, e), e(m, a, y, s, n);
                });
            }),
            (u = new i.Swig()),
            (i.setFilter = u.setFilter),
            (i.setTag = u.setTag),
            (i.setExtension = u.setExtension),
            (i.parseFile = u.parseFile),
            (i.precompile = u.precompile),
            (i.compile = u.compile),
            (i.compileFile = u.compileFile),
            (i.render = u.render),
            (i.renderFile = u.renderFile),
            (i.run = u.run),
            (i.invalidateCache = u.invalidateCache),
            (i.loaders = c);
        },
        {
          './dateformatter': 5,
          './filters': 6,
          './loaders': 9,
          './parser': 11,
          './tags': 23,
          './utils': 29,
        },
      ],
      13: [
        function (e, t, i) {
          const n = e('../utils'),
            r = ['html', 'js'];
          (i.compile = function (e, t, i, n, r, s) {
            return e(i, n, r, s);
          }),
            (i.parse = function (e, t, i, s, a, o) {
              let l;
              return (
                i.on('*', function (e) {
                  return l ||
                    (e.type !== s.BOOL &&
                      (e.type !== s.STRING || -1 !== r.indexOf(e.match)))
                    ? void n.throwError(
                        'Unexpected token "' + e.match + '" in autoescape tag',
                        t,
                        o.filename
                      )
                    : (this.out.push(e.match), void (l = !0));
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        { '../utils': 29 },
      ],
      14: [
        function (e, t, i) {
          (i.compile = function (e, t, i, n, r) {
            return e(i, n, r, t.join(''));
          }),
            (i.parse = function (e, t, i) {
              return (
                i.on('*', function (e) {
                  this.out.push(e.match);
                }),
                !0
              );
            }),
            (i.ends = !0),
            (i.block = !0);
        },
        {},
      ],
      15: [
        function (e, t, i) {
          (i.compile = function () {
            return '} else {\n';
          }),
            (i.parse = function (e, t, i, n, r) {
              return (
                i.on('*', function (e) {
                  throw new Error(
                    '"else" tag does not accept any tokens. Found "' +
                      e.match +
                      '" on line ' +
                      t +
                      '.'
                  );
                }),
                r.length && 'if' === r[r.length - 1].name
              );
            });
        },
        {},
      ],
      16: [
        function (e, t, i) {
          const n = e('./if').parse;
          (i.compile = function (e, t) {
            return '} else if (' + t.join(' ') + ') {\n';
          }),
            (i.parse = function (e, t, i, r, s) {
              const a = n(e, t, i, r, s);
              return a && s.length && 'if' === s[s.length - 1].name;
            });
        },
        { './if': 20 },
      ],
      17: [
        function (e, t, i) {
          (i.compile = function () {}),
            (i.parse = function () {
              return !0;
            }),
            (i.ends = !1);
        },
        {},
      ],
      18: [
        function (e, t, i) {
          const n = e('../filters');
          (i.compile = function (e, t, i, n, r, s) {
            const a = t.shift().replace(/\($/, ''),
              o =
                '(function () {\n  var _output = "";\n' +
                e(i, n, r, s) +
                '  return _output;\n})()';
            return (
              ')' === t[t.length - 1] && t.pop(),
              (t = t.length ? ', ' + t.join('') : ''),
              '_output += _filters["' + a + '"](' + o + t + ');\n'
            );
          }),
            (i.parse = function (e, t, i, r) {
              function s(e) {
                if (!n.hasOwnProperty(e)) {
                  throw new Error(
                    'Filter "' + e + '" does not exist on line ' + t + '.'
                  );
                }
              }
              let a;
              return (
                i.on(r.FUNCTION, function (e) {
                  return a
                    ? !0
                    : ((a = e.match.replace(/\($/, '')),
                      s(a),
                      this.out.push(e.match),
                      void this.state.push(e.type));
                }),
                i.on(r.VAR, function (e) {
                  return a ? !0 : ((a = e.match), s(a), void this.out.push(a));
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        { '../filters': 6 },
      ],
      19: [
        function (e, t, i) {
          const n = '_ctx.',
            r = n + 'loop';
          (i.compile = function (e, t, i, s, a, o) {
            let l,
              h = t.shift(),
              c = '__k',
              u = (n + '__loopcache' + Math.random()).replace(/\./g, '');
            return (
              t[0] && ',' === t[0] && (t.shift(), (c = h), (h = t.shift())),
              (l = t.join('')),
              [
                '(function () {\n',
                '  var __l = ' +
                  l +
                  ', __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;\n',
                '  if (!__l) { return; }\n',
                '    var ' +
                  u +
                  ' = { loop: ' +
                  r +
                  ', ' +
                  h +
                  ': ' +
                  n +
                  h +
                  ', ' +
                  c +
                  ': ' +
                  n +
                  c +
                  ' };\n',
                '    ' +
                  r +
                  ' = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };\n',
                '  _utils.each(__l, function (' + h + ', ' + c + ') {\n',
                '    ' + n + h + ' = ' + h + ';\n',
                '    ' + n + c + ' = ' + c + ';\n',
                '    ' + r + '.key = ' + c + ';\n',
                '    ' + r + '.first = (' + r + '.index0 === 0);\n',
                '    ' + r + '.last = (' + r + '.revindex0 === 0);\n',
                '    ' + e(i, s, a, o),
                '    ' +
                  r +
                  '.index += 1; ' +
                  r +
                  '.index0 += 1; ' +
                  r +
                  '.revindex -= 1; ' +
                  r +
                  '.revindex0 -= 1;\n',
                '  });\n',
                '  ' + r + ' = ' + u + '.loop;\n',
                '  ' + n + h + ' = ' + u + '.' + h + ';\n',
                '  ' + n + c + ' = ' + u + '.' + c + ';\n',
                '  ' + u + ' = undefined;\n',
                '})();\n',
              ].join('')
            );
          }),
            (i.parse = function (e, t, i, n) {
              let r, s;
              return (
                i.on(n.NUMBER, function (e) {
                  const i = this.state.length
                    ? this.state[this.state.length - 1]
                    : null;
                  if (
                    !s ||
                    (i !== n.ARRAYOPEN &&
                      i !== n.CURLYOPEN &&
                      i !== n.CURLYCLOSE &&
                      i !== n.FUNCTION &&
                      i !== n.FILTER)
                  ) {
                    throw new Error(
                      'Unexpected number "' + e.match + '" on line ' + t + '.'
                    );
                  }
                  return !0;
                }),
                i.on(n.VAR, function (e) {
                  return s && r
                    ? !0
                    : (this.out.length || (r = !0),
                      void this.out.push(e.match));
                }),
                i.on(n.COMMA, function (e) {
                  return r && this.prevToken.type === n.VAR
                    ? void this.out.push(e.match)
                    : !0;
                }),
                i.on(n.COMPARATOR, function (e) {
                  if ('in' !== e.match || !r) {
                    throw new Error(
                      'Unexpected token "' + e.match + '" on line ' + t + '.'
                    );
                  }
                  (s = !0), this.filterApplyIdx.push(this.out.length);
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        {},
      ],
      20: [
        function (e, t, i) {
          (i.compile = function (e, t, i, n, r, s) {
            return 'if (' + t.join(' ') + ') { \n' + e(i, n, r, s) + '\n}';
          }),
            (i.parse = function (e, t, i, n) {
              if ('undefined' == typeof e) {
                throw new Error(
                  'No conditional statement provided on line ' + t + '.'
                );
              }
              return (
                i.on(n.COMPARATOR, function (e) {
                  if (this.isLast) {
                    throw new Error(
                      'Unexpected logic "' + e.match + '" on line ' + t + '.'
                    );
                  }
                  if (this.prevToken.type === n.NOT) {
                    throw new Error(
                      'Attempted logic "not ' +
                        e.match +
                        '" on line ' +
                        t +
                        '. Use !(foo ' +
                        e.match +
                        ') instead.'
                    );
                  }
                  this.out.push(e.match),
                    this.filterApplyIdx.push(this.out.length);
                }),
                i.on(n.NOT, function (e) {
                  if (this.isLast) {
                    throw new Error(
                      'Unexpected logic "' + e.match + '" on line ' + t + '.'
                    );
                  }
                  this.out.push(e.match);
                }),
                i.on(n.BOOL, function (e) {
                  this.out.push(e.match);
                }),
                i.on(n.LOGIC, function (e) {
                  if (!this.out.length || this.isLast) {
                    throw new Error(
                      'Unexpected logic "' + e.match + '" on line ' + t + '.'
                    );
                  }
                  this.out.push(e.match), this.filterApplyIdx.pop();
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        {},
      ],
      21: [
        function (e, t, i) {
          const n = e('../utils');
          (i.compile = function (e, t) {
            let i = t.pop(),
              r = '_ctx.' + i + ' = {};\n  var _output = "";\n',
              s = n.map(t, function (e) {
                return {
                  ex: new RegExp('_ctx.' + e.name, 'g'),
                  re: '_ctx.' + i + '.' + e.name,
                };
              });
            return (
              n.each(t, function (e) {
                let t = e.compiled;
                n.each(s, function (e) {
                  t = t.replace(e.ex, e.re);
                }),
                  (r += t);
              }),
              r
            );
          }),
            (i.parse = function (t, i, r, s, a, o, l) {
              let h,
                c,
                u = e('../parser').compile,
                d = { resolveFrom: o.filename },
                p = n.extend({}, o, d);
              return (
                r.on(s.STRING, function (e) {
                  const t = this;
                  if (!h) {
                    return (
                      (h = l.parseFile(
                        e.match.replace(/^("|')|("|')$/g, ''),
                        d
                      ).tokens),
                      void n.each(h, function (e) {
                        let i,
                          n = '';
                        e &&
                          'macro' === e.name &&
                          e.compile &&
                          ((i = e.args[0]),
                          (n += e.compile(u, e.args, e.content, [], p) + '\n'),
                          t.out.push({ compiled: n, name: i }));
                      })
                    );
                  }
                  throw new Error(
                    'Unexpected string ' + e.match + ' on line ' + i + '.'
                  );
                }),
                r.on(s.VAR, function (e) {
                  const t = this;
                  if (!h || c) {
                    throw new Error(
                      'Unexpected variable "' + e.match + '" on line ' + i + '.'
                    );
                  }
                  if ('as' !== e.match) {
                    return (c = e.match), t.out.push(c), !1;
                  }
                }),
                !0
              );
            }),
            (i.block = !0);
        },
        { '../parser': 11, '../utils': 29 },
      ],
      22: [
        function (e, t, i) {
          const n = 'ignore',
            r = 'missing',
            s = 'only';
          (i.compile = function (e, t) {
            const i = t.shift(),
              n = t.indexOf(s),
              a = -1 !== n ? t.splice(n, 1) : !1,
              o = (t.pop() || '').replace(/\\/g, '\\\\'),
              l = t[t.length - 1] === r ? t.pop() : !1,
              h = t.join('');
            return (
              (l ? '  try {\n' : '') +
              '_output += _swig.compileFile(' +
              i +
              ', {resolveFrom: "' +
              o +
              '"})(' +
              (a && h ? h : h ? '_utils.extend({}, _ctx, ' + h + ')' : '_ctx') +
              ');\n' +
              (l ? '} catch (e) {}\n' : '')
            );
          }),
            (i.parse = function (e, t, i, a, o, l) {
              let h, c;
              return (
                i.on(a.STRING, function (e) {
                  return h ? !0 : ((h = e.match), void this.out.push(h));
                }),
                i.on(a.VAR, function (e) {
                  if (!h) {
                    return (h = e.match), !0;
                  }
                  if (!c && 'with' === e.match) {
                    return void (c = !0);
                  }
                  if (c && e.match === s && 'with' !== this.prevToken.match) {
                    return void this.out.push(e.match);
                  }
                  if (e.match === n) {
                    return !1;
                  }
                  if (e.match === r) {
                    if (this.prevToken.match !== n) {
                      throw new Error(
                        'Unexpected token "' + r + '" on line ' + t + '.'
                      );
                    }
                    return this.out.push(e.match), !1;
                  }
                  if (this.prevToken.match === n) {
                    throw new Error(
                      'Expected "' +
                        r +
                        '" on line ' +
                        t +
                        ' but found "' +
                        e.match +
                        '".'
                    );
                  }
                  return !0;
                }),
                i.on('end', function () {
                  this.out.push(l.filename || null);
                }),
                !0
              );
            });
        },
        {},
      ],
      23: [
        function (e, t, i) {
          (i.autoescape = e('./autoescape')),
            (i.block = e('./block')),
            (i['else'] = e('./else')),
            (i.elseif = e('./elseif')),
            (i.elif = i.elseif),
            (i['extends'] = e('./extends')),
            (i.filter = e('./filter')),
            (i['for'] = e('./for')),
            (i['if'] = e('./if')),
            (i['import'] = e('./import')),
            (i.include = e('./include')),
            (i.macro = e('./macro')),
            (i.parent = e('./parent')),
            (i.raw = e('./raw')),
            (i.set = e('./set')),
            (i.spaceless = e('./spaceless'));
        },
        {
          './autoescape': 13,
          './block': 14,
          './else': 15,
          './elseif': 16,
          './extends': 17,
          './filter': 18,
          './for': 19,
          './if': 20,
          './import': 21,
          './include': 22,
          './macro': 24,
          './parent': 25,
          './raw': 26,
          './set': 27,
          './spaceless': 28,
        },
      ],
      24: [
        function (e, t, i) {
          (i.compile = function (e, t, i, n, r, s) {
            const a = t.shift();
            return (
              '_ctx.' +
              a +
              ' = function (' +
              t.join('') +
              ') {\n  var _output = "",\n    __ctx = _utils.extend({}, _ctx);\n  _utils.each(_ctx, function (v, k) {\n    if (["' +
              t.join('","') +
              '"].indexOf(k) !== -1) { delete _ctx[k]; }\n  });\n' +
              e(i, n, r, s) +
              '\n _ctx = _utils.extend(_ctx, __ctx);\n  return _output;\n};\n_ctx.' +
              a +
              '.safe = true;\n'
            );
          }),
            (i.parse = function (e, t, i, n) {
              let r;
              return (
                i.on(n.VAR, function (e) {
                  if (-1 !== e.match.indexOf('.')) {
                    throw new Error(
                      'Unexpected dot in macro argument "' +
                        e.match +
                        '" on line ' +
                        t +
                        '.'
                    );
                  }
                  this.out.push(e.match);
                }),
                i.on(n.FUNCTION, function (e) {
                  r ||
                    ((r = e.match),
                    this.out.push(r),
                    this.state.push(n.FUNCTION));
                }),
                i.on(n.FUNCTIONEMPTY, function (e) {
                  r || ((r = e.match), this.out.push(r));
                }),
                i.on(n.PARENCLOSE, function () {
                  if (!this.isLast) {
                    throw new Error(
                      'Unexpected parenthesis close on line ' + t + '.'
                    );
                  }
                }),
                i.on(n.COMMA, function () {
                  return !0;
                }),
                i.on('*', function () {}),
                !0
              );
            }),
            (i.ends = !0),
            (i.block = !0);
        },
        {},
      ],
      25: [
        function (e, t, i) {
          (i.compile = function (e, t, i, n, r, s) {
            if (!n || !n.length) {
              return '';
            }
            let a,
              o,
              l = t[0],
              h = !0,
              c = n.length,
              u = 0;
            for (u; c > u; u += 1) {
              if (
                ((a = n[u]),
                a.blocks && a.blocks.hasOwnProperty(s) && h && l !== a.name)
              ) {
                return (
                  (o = a.blocks[s]),
                  o.compile(e, [s], o.content, n.slice(u + 1), r) + '\n'
                );
              }
            }
          }),
            (i.parse = function (e, t, i, n, r, s) {
              return (
                i.on('*', function (e) {
                  throw new Error(
                    'Unexpected argument "' + e.match + '" on line ' + t + '.'
                  );
                }),
                i.on('end', function () {
                  this.out.push(s.filename);
                }),
                !0
              );
            });
        },
        {},
      ],
      26: [
        function (e, t, i) {
          (i.compile = function (e, t, i, n, r, s) {
            return e(i, n, r, s);
          }),
            (i.parse = function (e, t, i) {
              return (
                i.on('*', function (e) {
                  throw new Error(
                    'Unexpected token "' +
                      e.match +
                      '" in raw tag on line ' +
                      t +
                      '.'
                  );
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        {},
      ],
      27: [
        function (e, t, i) {
          (i.compile = function (e, t) {
            return t.join(' ') + ';\n';
          }),
            (i.parse = function (e, t, i, n) {
              let r,
                s = '';
              return (
                i.on(n.VAR, function (e) {
                  return r
                    ? void (r += '_ctx.' + e.match)
                    : i.out.length
                    ? !0
                    : void (s += e.match);
                }),
                i.on(n.BRACKETOPEN, function (e) {
                  return r || this.out.length ? !0 : void (r = e.match);
                }),
                i.on(n.STRING, function (e) {
                  return r && !this.out.length ? void (r += e.match) : !0;
                }),
                i.on(n.BRACKETCLOSE, function (e) {
                  return r && !this.out.length
                    ? ((s += r + e.match), void (r = void 0))
                    : !0;
                }),
                i.on(n.DOTKEY, function (e) {
                  return r || s ? void (s += '.' + e.match) : !0;
                }),
                i.on(n.ASSIGNMENT, function (e) {
                  if (this.out.length || !s) {
                    throw new Error(
                      'Unexpected assignment "' +
                        e.match +
                        '" on line ' +
                        t +
                        '.'
                    );
                  }
                  this.out.push('_ctx.' + s),
                    this.out.push(e.match),
                    this.filterApplyIdx.push(this.out.length);
                }),
                !0
              );
            }),
            (i.block = !0);
        },
        {},
      ],
      28: [
        function (e, t, i) {
          const n = e('../utils');
          (i.compile = function (e, t, i, r, s, a) {
            function o(e) {
              return n.map(e, function (e) {
                return e.content || 'string' != typeof e
                  ? ((e.content = o(e.content)), e)
                  : e
                      .replace(/^\s+/, '')
                      .replace(/>\s+</g, '><')
                      .replace(/\s+$/, '');
              });
            }
            return e(o(i), r, s, a);
          }),
            (i.parse = function (e, t, i) {
              return (
                i.on('*', function (e) {
                  throw new Error(
                    'Unexpected token "' + e.match + '" on line ' + t + '.'
                  );
                }),
                !0
              );
            }),
            (i.ends = !0);
        },
        { '../utils': 29 },
      ],
      29: [
        function (e, t, i) {
          let n;
          (i.strip = function (e) {
            return e.replace(/^\s+|\s+$/g, '');
          }),
            (i.startsWith = function (e, t) {
              return 0 === e.indexOf(t);
            }),
            (i.endsWith = function (e, t) {
              return -1 !== e.indexOf(t, e.length - t.length);
            }),
            (i.each = function (e, t) {
              let i, r;
              if (n(e)) {
                for (
                  i = 0, r = e.length, i;
                  r > i && t(e[i], i, e) !== !1;
                  i += 1
                ) {}
              } else {
                for (i in e) {
                  if (e.hasOwnProperty(i) && t(e[i], i, e) === !1) {
                    break;
                  }
                }
              }
              return e;
            }),
            (i.isArray = n =
              Array.hasOwnProperty('isArray')
                ? Array.isArray
                : function (e) {
                    return e
                      ? 'object' == typeof e &&
                          -1 !== Object.prototype.toString.call(e).indexOf()
                      : !1;
                  }),
            (i.some = function (e, t) {
              let r,
                s,
                a = 0;
              if (n(e)) {
                for (s = e.length, a; s > a && !(r = t(e[a], a, e)); a += 1) {}
              } else {
                i.each(e, function (i, n) {
                  return (r = t(i, n, e)), !r;
                });
              }
              return !!r;
            }),
            (i.map = function (e, t) {
              let i,
                r = 0,
                s = [];
              if (n(e)) {
                for (i = e.length, r; i > r; r += 1) {
                  s[r] = t(e[r], r);
                }
              } else {
                for (r in e) {
                  e.hasOwnProperty(r) && (s[r] = t(e[r], r));
                }
              }
              return s;
            }),
            (i.extend = function () {
              let e,
                t,
                i = arguments,
                n = i[0],
                r = i.length > 1 ? Array.prototype.slice.call(i, 1) : [],
                s = 0,
                a = r.length;
              for (s; a > s; s += 1) {
                t = r[s] || {};
                for (e in t) {
                  t.hasOwnProperty(e) && (n[e] = t[e]);
                }
              }
              return n;
            }),
            (i.keys = function (e) {
              return e
                ? Object.keys
                  ? Object.keys(e)
                  : i.map(e, function (e, t) {
                      return t;
                    })
                : [];
            }),
            (i.throwError = function (e, t, i) {
              throw (
                (t && (e += ' on line ' + t),
                i && (e += ' in file ' + i),
                new Error(e + '.'))
              );
            });
        },
        {},
      ],
    },
    {},
    [4]
  )(4);
});
