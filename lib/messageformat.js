(function (e) {
  function t(e, i, n) {
    let r = e || 'en';
    if (i) {
      t.locale[r] = i;
    } else {
      for (; r && !t.locale.hasOwnProperty(r); ) {
        r = r.replace(/[-_]?[^-_]*$/, '');
      }
      r || ((r = e.replace(/[-_].*$/, '')), t.loadLocale(r));
    }
    (this.lc = r), (this.globalName = n || 'i18n');
  }
  'locale' in t || (t.locale = {}),
    (t.loadLocale = function (e) {
      try {
        const i = require('path').join(__dirname, 'locale', e + '.js'),
          n = ('' + require('fs').readFileSync(i)).match(/{[^]*}/);
        if (!n) {
          throw "no function found in file '" + i + "'";
        }
        t.locale[e] = 'function(n)' + n;
      } catch (r) {
        if ('en' != e) {
          throw (
            ((r.message = 'Locale ' + e + ' could not be loaded: ' + r.message),
            r)
          );
        }
        t.locale[e] = 'function(n){return n===1?"one":"other"}';
      }
    }),
    (t.prototype.functions = function () {
      const e = [];
      for (const i in t.locale) {
        t.locale.hasOwnProperty(i) &&
          e.push(JSON.stringify(i) + ':' + t.locale[i].toString().trim());
      }
      return (
        '{lc:{' +
        e.join(',') +
        '},\nc:function(d,k){if(!d)throw new Error("MessageFormat: Data required for \'"+k+"\'.")},\nn:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: \'"+k+"\' isn\'t a number.");return d[k]-(o||0)},\nv:function(d,k){' +
        this.globalName +
        '.c(d,k);return d[k]},\np:function(d,k,o,l,p){' +
        this.globalName +
        '.c(d,k);return d[k] in p?p[d[k]]:(k=' +
        this.globalName +
        '.lc[l](d[k]-o),k in p?p[k]:p.other)},\ns:function(d,k,p){' +
        this.globalName +
        '.c(d,k);return d[k] in p?p[d[k]]:p.other}}'
      );
    });
  const i = (function () {
    function e(e, t) {
      function i() {
        this.constructor = e;
      }
      (i.prototype = t.prototype), (e.prototype = new i());
    }
    function t(e, t, i, n, r, s) {
      (this.message = e),
        (this.expected = t),
        (this.found = i),
        (this.offset = n),
        (this.line = r),
        (this.column = s),
        (this.name = 'SyntaxError');
    }
    function i(e) {
      function i(t) {
        function i(t, i, n) {
          let r, s;
          for (r = i; n > r; r++) {
            (s = e.charAt(r)),
              '\n' === s
                ? (t.seenCR || t.line++, (t.column = 1), (t.seenCR = !1))
                : '\r' === s || '\u2028' === s || '\u2029' === s
                ? (t.line++, (t.column = 1), (t.seenCR = !0))
                : (t.column++, (t.seenCR = !1));
          }
        }
        return (
          Ne !== t &&
            (Ne > t && ((Ne = 0), (ze = { line: 1, column: 1, seenCR: !1 })),
            i(ze, Ne, t),
            (Ne = t)),
          ze
        );
      }
      function n(e) {
        Ge > qe || (qe > Ge && ((Ge = qe), (Ue = [])), Ue.push(e));
      }
      function r(n, r, s) {
        function a(e) {
          let t = 1;
          for (
            e.sort(function (e, t) {
              return e.description < t.description
                ? -1
                : e.description > t.description
                ? 1
                : 0;
            });
            t < e.length;

          ) {
            e[t - 1] === e[t] ? e.splice(t, 1) : t++;
          }
        }
        function o(e, t) {
          function i(e) {
            function t(e) {
              return e.charCodeAt(0).toString(16).toUpperCase();
            }
            return e
              .replace(/\\/g, '\\\\')
              .replace(/"/g, '\\"')
              .replace(/\x08/g, '\\b')
              .replace(/\t/g, '\\t')
              .replace(/\n/g, '\\n')
              .replace(/\f/g, '\\f')
              .replace(/\r/g, '\\r')
              .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                return '\\x0' + t(e);
              })
              .replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                return '\\x' + t(e);
              })
              .replace(/[\u0180-\u0FFF]/g, function (e) {
                return '\\u0' + t(e);
              })
              .replace(/[\u1080-\uFFFF]/g, function (e) {
                return '\\u' + t(e);
              });
          }
          let n,
            r,
            s,
            a = new Array(e.length);
          for (s = 0; s < e.length; s++) {
            a[s] = e[s].description;
          }
          return (
            (n =
              e.length > 1
                ? a.slice(0, -1).join(', ') + ' or ' + a[e.length - 1]
                : a[0]),
            (r = t ? '"' + i(t) + '"' : 'end of input'),
            'Expected ' + n + ' but ' + r + ' found.'
          );
        }
        const l = i(s),
          h = s < e.length ? e.charAt(s) : null;
        return (
          null !== r && a(r),
          new t(null !== n ? n : o(r, h), r, h, s, l.line, l.column)
        );
      }
      function s() {
        let e, t;
        return (e = qe), (t = a()), t !== A && ((Be = e), (t = k(t))), (e = t);
      }
      function a() {
        let e, t, i, n;
        if (((e = qe), (t = y()), t !== A)) {
          for (i = [], n = o(); n !== A; ) {
            i.push(n), (n = o());
          }
          i !== A ? ((Be = e), (t = O(t, i)), (e = t)) : ((qe = e), (e = R));
        } else {
          (qe = e), (e = R);
        }
        return e;
      }
      function o() {
        let t, i, r, s, a, o, h;
        return (
          (t = qe),
          123 === e.charCodeAt(qe)
            ? ((i = I), qe++)
            : ((i = A), 0 === He && n(F)),
          i !== A
            ? ((r = T()),
              r !== A
                ? ((s = l()),
                  s !== A
                    ? ((a = T()),
                      a !== A
                        ? (125 === e.charCodeAt(qe)
                            ? ((o = D), qe++)
                            : ((o = A), 0 === He && n(L)),
                          o !== A
                            ? ((h = y()),
                              h !== A
                                ? ((Be = t), (i = q(s, h)), (t = i))
                                : ((qe = t), (t = R)))
                            : ((qe = t), (t = R)))
                        : ((qe = t), (t = R)))
                    : ((qe = t), (t = R)))
                : ((qe = t), (t = R)))
            : ((qe = t), (t = R)),
          t
        );
      }
      function l() {
        let t, i, r, s, a;
        return (
          (t = qe),
          (i = v()),
          i !== A
            ? ((r = qe),
              44 === e.charCodeAt(qe)
                ? ((s = N), qe++)
                : ((s = A), 0 === He && n(z)),
              s !== A
                ? ((a = h()),
                  a !== A ? ((s = [s, a]), (r = s)) : ((qe = r), (r = R)))
                : ((qe = r), (r = R)),
              r === A && (r = B),
              r !== A
                ? ((Be = t), (i = G(i, r)), (t = i))
                : ((qe = t), (t = R)))
            : ((qe = t), (t = R)),
          t
        );
      }
      function h() {
        let t, i, r, s, a, o, l, h;
        return (
          (t = qe),
          (i = T()),
          i !== A
            ? (e.substr(qe, 6) === U
                ? ((r = U), (qe += 6))
                : ((r = A), 0 === He && n(H)),
              r !== A
                ? ((s = T()),
                  s !== A
                    ? (44 === e.charCodeAt(qe)
                        ? ((a = N), qe++)
                        : ((a = A), 0 === He && n(z)),
                      a !== A
                        ? ((o = T()),
                          o !== A
                            ? ((l = c()),
                              l !== A
                                ? ((h = T()),
                                  h !== A
                                    ? ((Be = t), (i = j(r, l)), (t = i))
                                    : ((qe = t), (t = R)))
                                : ((qe = t), (t = R)))
                            : ((qe = t), (t = R)))
                        : ((qe = t), (t = R)))
                    : ((qe = t), (t = R)))
                : ((qe = t), (t = R)))
            : ((qe = t), (t = R)),
          t === A &&
            ((t = qe),
            (i = T()),
            i !== A
              ? (e.substr(qe, 6) === W
                  ? ((r = W), (qe += 6))
                  : ((r = A), 0 === He && n(Y)),
                r !== A
                  ? ((s = T()),
                    s !== A
                      ? (44 === e.charCodeAt(qe)
                          ? ((a = N), qe++)
                          : ((a = A), 0 === He && n(z)),
                        a !== A
                          ? ((o = T()),
                            o !== A
                              ? ((l = u()),
                                l !== A
                                  ? ((h = T()),
                                    h !== A
                                      ? ((Be = t), (i = j(r, l)), (t = i))
                                      : ((qe = t), (t = R)))
                                  : ((qe = t), (t = R)))
                              : ((qe = t), (t = R)))
                          : ((qe = t), (t = R)))
                      : ((qe = t), (t = R)))
                  : ((qe = t), (t = R)))
              : ((qe = t), (t = R))),
          t
        );
      }
      function c() {
        let e, t;
        return (e = qe), (t = d()), t !== A && ((Be = e), (t = X(t))), (e = t);
      }
      function u() {
        let e, t;
        return (e = qe), (t = f()), t !== A && ((Be = e), (t = V(t))), (e = t);
      }
      function d() {
        let e, t, i, n;
        if (((e = qe), (t = p()), t === A && (t = B), t !== A)) {
          for (i = [], n = m(); n !== A; ) {
            i.push(n), (n = m());
          }
          i !== A ? ((Be = e), (t = K(t, i)), (e = t)) : ((qe = e), (e = R));
        } else {
          (qe = e), (e = R);
        }
        return e;
      }
      function p() {
        let t, i, r, s, a, o, l, h;
        return (
          (t = qe),
          (i = T()),
          i !== A
            ? (e.substr(qe, 6) === Z
                ? ((r = Z), (qe += 6))
                : ((r = A), 0 === He && n(J)),
              r !== A
                ? ((s = T()),
                  s !== A
                    ? (58 === e.charCodeAt(qe)
                        ? ((a = Q), qe++)
                        : ((a = A), 0 === He && n($)),
                      a !== A
                        ? ((o = T()),
                          o !== A
                            ? ((l = w()),
                              l !== A
                                ? ((h = T()),
                                  h !== A
                                    ? ((Be = t), (i = ee(l)), (t = i))
                                    : ((qe = t), (t = R)))
                                : ((qe = t), (t = R)))
                            : ((qe = t), (t = R)))
                        : ((qe = t), (t = R)))
                    : ((qe = t), (t = R)))
                : ((qe = t), (t = R)))
            : ((qe = t), (t = R)),
          t
        );
      }
      function f() {
        let e, t, i;
        for (e = qe, t = [], i = m(); i !== A; ) {
          t.push(i), (i = m());
        }
        return t !== A && ((Be = e), (t = te(t))), (e = t);
      }
      function m() {
        let t, i, r, s, o, l, h, c, u;
        return (
          (t = qe),
          (i = T()),
          i !== A
            ? ((r = g()),
              r !== A
                ? ((s = T()),
                  s !== A
                    ? (123 === e.charCodeAt(qe)
                        ? ((o = I), qe++)
                        : ((o = A), 0 === He && n(F)),
                      o !== A
                        ? ((l = T()),
                          l !== A
                            ? ((h = a()),
                              h !== A
                                ? ((c = T()),
                                  c !== A
                                    ? (125 === e.charCodeAt(qe)
                                        ? ((u = D), qe++)
                                        : ((u = A), 0 === He && n(L)),
                                      u !== A
                                        ? ((Be = t), (i = ie(r, h)), (t = i))
                                        : ((qe = t), (t = R)))
                                    : ((qe = t), (t = R)))
                                : ((qe = t), (t = R)))
                            : ((qe = t), (t = R)))
                        : ((qe = t), (t = R)))
                    : ((qe = t), (t = R)))
                : ((qe = t), (t = R)))
            : ((qe = t), (t = R)),
          t
        );
      }
      function g() {
        let t, i, r;
        return (
          (t = qe),
          (i = v()),
          i !== A && ((Be = t), (i = ne(i))),
          (t = i),
          t === A &&
            ((t = qe),
            61 === e.charCodeAt(qe)
              ? ((i = re), qe++)
              : ((i = A), 0 === He && n(se)),
            i !== A
              ? ((r = w()),
                r !== A
                  ? ((Be = t), (i = ee(r)), (t = i))
                  : ((qe = t), (t = R)))
              : ((qe = t), (t = R))),
          t
        );
      }
      function y() {
        let e, t, i, n, r, s, a;
        if (((e = qe), (t = T()), t !== A)) {
          for (
            i = [],
              n = qe,
              r = T(),
              r !== A
                ? ((s = b()),
                  s !== A
                    ? ((a = T()),
                      a !== A
                        ? ((r = [r, s, a]), (n = r))
                        : ((qe = n), (n = R)))
                    : ((qe = n), (n = R)))
                : ((qe = n), (n = R));
            n !== A;

          ) {
            i.push(n),
              (n = qe),
              (r = T()),
              r !== A
                ? ((s = b()),
                  s !== A
                    ? ((a = T()),
                      a !== A
                        ? ((r = [r, s, a]), (n = r))
                        : ((qe = n), (n = R)))
                    : ((qe = n), (n = R)))
                : ((qe = n), (n = R));
          }
          i !== A ? ((Be = e), (t = ae(t, i)), (e = t)) : ((qe = e), (e = R));
        } else {
          (qe = e), (e = R);
        }
        return e;
      }
      function v() {
        let t, i, r, s, a;
        if (((t = qe), (i = T()), i !== A)) {
          if (
            (oe.test(e.charAt(qe))
              ? ((r = e.charAt(qe)), qe++)
              : ((r = A), 0 === He && n(le)),
            r !== A)
          ) {
            for (
              s = [],
                he.test(e.charAt(qe))
                  ? ((a = e.charAt(qe)), qe++)
                  : ((a = A), 0 === He && n(ce));
              a !== A;

            ) {
              s.push(a),
                he.test(e.charAt(qe))
                  ? ((a = e.charAt(qe)), qe++)
                  : ((a = A), 0 === He && n(ce));
            }
            s !== A
              ? ((a = T()),
                a !== A
                  ? ((Be = t), (i = ue(r, s)), (t = i))
                  : ((qe = t), (t = R)))
              : ((qe = t), (t = R));
          } else {
            (qe = t), (t = R);
          }
        } else {
          (qe = t), (t = R);
        }
        return t;
      }
      function b() {
        let e, t, i;
        if (((e = qe), (t = []), (i = x()), i !== A)) {
          for (; i !== A; ) {
            t.push(i), (i = x());
          }
        } else {
          t = R;
        }
        return t !== A && ((Be = e), (t = de(t))), (e = t);
      }
      function x() {
        let t, i, r, s, a, o;
        return (
          (t = qe),
          pe.test(e.charAt(qe))
            ? ((i = e.charAt(qe)), qe++)
            : ((i = A), 0 === He && n(fe)),
          i !== A && ((Be = t), (i = me(i))),
          (t = i),
          t === A &&
            ((t = qe),
            e.substr(qe, 2) === ge
              ? ((i = ge), (qe += 2))
              : ((i = A), 0 === He && n(ye)),
            i !== A && ((Be = t), (i = ve())),
            (t = i),
            t === A &&
              ((t = qe),
              e.substr(qe, 2) === be
                ? ((i = be), (qe += 2))
                : ((i = A), 0 === He && n(xe)),
              i !== A && ((Be = t), (i = we())),
              (t = i),
              t === A &&
                ((t = qe),
                e.substr(qe, 2) === _e
                  ? ((i = _e), (qe += 2))
                  : ((i = A), 0 === He && n(Te)),
                i !== A && ((Be = t), (i = Se())),
                (t = i),
                t === A &&
                  ((t = qe),
                  e.substr(qe, 2) === Ce
                    ? ((i = Ce), (qe += 2))
                    : ((i = A), 0 === He && n(Ee)),
                  i !== A
                    ? ((r = _()),
                      r !== A
                        ? ((s = _()),
                          s !== A
                            ? ((a = _()),
                              a !== A
                                ? ((o = _()),
                                  o !== A
                                    ? ((Be = t), (i = Ae(r, s, a, o)), (t = i))
                                    : ((qe = t), (t = R)))
                                : ((qe = t), (t = R)))
                            : ((qe = t), (t = R)))
                        : ((qe = t), (t = R)))
                    : ((qe = t), (t = R)))))),
          t
        );
      }
      function w() {
        let t, i, r;
        if (
          ((t = qe),
          (i = []),
          Pe.test(e.charAt(qe))
            ? ((r = e.charAt(qe)), qe++)
            : ((r = A), 0 === He && n(Me)),
          r !== A)
        ) {
          for (; r !== A; ) {
            i.push(r),
              Pe.test(e.charAt(qe))
                ? ((r = e.charAt(qe)), qe++)
                : ((r = A), 0 === He && n(Me));
          }
        } else {
          i = R;
        }
        return i !== A && ((Be = t), (i = ke(i))), (t = i);
      }
      function _() {
        let t;
        return (
          Re.test(e.charAt(qe))
            ? ((t = e.charAt(qe)), qe++)
            : ((t = A), 0 === He && n(Oe)),
          t
        );
      }
      function T() {
        let e, t, i;
        for (He++, e = qe, t = [], i = S(); i !== A; ) {
          t.push(i), (i = S());
        }
        return (
          t !== A && ((Be = e), (t = Fe(t))),
          (e = t),
          He--,
          e === A && ((t = A), 0 === He && n(Ie)),
          e
        );
      }
      function S() {
        let t;
        return (
          De.test(e.charAt(qe))
            ? ((t = e.charAt(qe)), qe++)
            : ((t = A), 0 === He && n(Le)),
          t
        );
      }
      var C,
        E = arguments.length > 1 ? arguments[1] : {},
        A = {},
        P = { start: s },
        M = s,
        k = function (e) {
          return { type: 'program', program: e };
        },
        R = A,
        O = function (e, t) {
          const i = [];
          e && e.val && i.push(e);
          for (const n in t) {
            t.hasOwnProperty(n) && i.push(t[n]);
          }
          return { type: 'messageFormatPattern', statements: i };
        },
        I = '{',
        F = { type: 'literal', value: '{', description: '"{"' },
        D = '}',
        L = { type: 'literal', value: '}', description: '"}"' },
        q = function (e, t) {
          const i = [];
          return (
            e && i.push(e),
            t && t.val && i.push(t),
            { type: 'messageFormatPatternRight', statements: i }
          );
        },
        B = null,
        N = ',',
        z = { type: 'literal', value: ',', description: '","' },
        G = function (e, t) {
          const i = { type: 'messageFormatElement', argumentIndex: e };
          return t && t.length ? (i.elementFormat = t[1]) : (i.output = !0), i;
        },
        U = 'plural',
        H = { type: 'literal', value: 'plural', description: '"plural"' },
        j = function (e, t) {
          return { type: 'elementFormat', key: e, val: t.val };
        },
        W = 'select',
        Y = { type: 'literal', value: 'select', description: '"select"' },
        X = function (e) {
          return { type: 'pluralStyle', val: e };
        },
        V = function (e) {
          return { type: 'selectStyle', val: e };
        },
        K = function (e, t) {
          const i = { type: 'pluralFormatPattern', pluralForms: t };
          return e ? (i.offset = e) : (i.offset = 0), i;
        },
        Z = 'offset',
        J = { type: 'literal', value: 'offset', description: '"offset"' },
        Q = ':',
        $ = { type: 'literal', value: ':', description: '":"' },
        ee = function (e) {
          return e;
        },
        te = function (e) {
          return { type: 'selectFormatPattern', pluralForms: e };
        },
        ie = function (e, t) {
          return { type: 'pluralForms', key: e, val: t };
        },
        ne = function (e) {
          return e;
        },
        re = '=',
        se = { type: 'literal', value: '=', description: '"="' },
        ae = function (e, t) {
          for (var i = [], n = 0; n < t.length; ++n) {
            for (let r = 0; r < t[n].length; ++r) {
              i.push(t[n][r]);
            }
          }
          return { type: 'string', val: e + i.join('') };
        },
        oe = /^[0-9a-zA-Z$_]/,
        le = {
          type: 'class',
          value: '[0-9a-zA-Z$_]',
          description: '[0-9a-zA-Z$_]',
        },
        he = /^[^ \t\n\r,.+={}]/,
        ce = {
          type: 'class',
          value: '[^ \\t\\n\\r,.+={}]',
          description: '[^ \\t\\n\\r,.+={}]',
        },
        ue = function (e, t) {
          return e + (t ? t.join('') : '');
        },
        de = function (e) {
          return e.join('');
        },
        pe = /^[^{}\\\0-\x1F \t\n\r]/,
        fe = {
          type: 'class',
          value: '[^{}\\\\\\0-\\x1F \\t\\n\\r]',
          description: '[^{}\\\\\\0-\\x1F \\t\\n\\r]',
        },
        me = function (e) {
          return e;
        },
        ge = '\\#',
        ye = { type: 'literal', value: '\\#', description: '"\\\\#"' },
        ve = function () {
          return '\\#';
        },
        be = '\\{',
        xe = { type: 'literal', value: '\\{', description: '"\\\\{"' },
        we = function () {
          return '{';
        },
        _e = '\\}',
        Te = { type: 'literal', value: '\\}', description: '"\\\\}"' },
        Se = function () {
          return '}';
        },
        Ce = '\\u',
        Ee = { type: 'literal', value: '\\u', description: '"\\\\u"' },
        Ae = function (e, t, i, n) {
          return String.fromCharCode(parseInt('0x' + e + t + i + n));
        },
        Pe = /^[0-9]/,
        Me = { type: 'class', value: '[0-9]', description: '[0-9]' },
        ke = function (e) {
          return parseInt(e.join(''), 10);
        },
        Re = /^[0-9a-fA-F]/,
        Oe = {
          type: 'class',
          value: '[0-9a-fA-F]',
          description: '[0-9a-fA-F]',
        },
        Ie = { type: 'other', description: 'whitespace' },
        Fe = function (e) {
          return e.join('');
        },
        De = /^[ \t\n\r]/,
        Le = {
          type: 'class',
          value: '[ \\t\\n\\r]',
          description: '[ \\t\\n\\r]',
        },
        qe = 0,
        Be = 0,
        Ne = 0,
        ze = { line: 1, column: 1, seenCR: !1 },
        Ge = 0,
        Ue = [],
        He = 0;
      if ('startRule' in E) {
        if (!(E.startRule in P)) {
          throw new Error(
            'Can\'t start parsing from rule "' + E.startRule + '".'
          );
        }
        M = P[E.startRule];
      }
      if (((C = M()), C !== A && qe === e.length)) {
        return C;
      }
      throw (
        (C !== A &&
          qe < e.length &&
          n({ type: 'end', description: 'end of input' }),
        r(null, Ue, Ge))
      );
    }
    return e(t, Error), { SyntaxError: t, parse: i };
  })();
  (t.prototype.parse = function () {
    return i.parse.apply(i, arguments);
  }),
    (t.prototype.precompile = function (e) {
      function t(e) {
        const t = JSON.parse(JSON.stringify(e));
        return t.pf_count++, t;
      }
      function i(e, s) {
        s = s || { keys: {}, offset: {} };
        let a,
          o,
          l = [];
        switch (e.type) {
          case 'program':
            return i(e.program);
          case 'messageFormatPattern':
            for (a = 0; a < e.statements.length; ++a) {
              l.push(i(e.statements[a], s));
            }
            return (
              (o = l.join('+') || '""'),
              s.pf_count ? o : 'function(d){return ' + o + '}'
            );
          case 'messageFormatPatternRight':
            for (a = 0; a < e.statements.length; ++a) {
              l.push(i(e.statements[a], s));
            }
            return l.join('+');
          case 'messageFormatElement':
            return (
              (s.pf_count = s.pf_count || 0),
              e.output
                ? n.globalName + '.v(d,"' + e.argumentIndex + '")'
                : ((s.keys[s.pf_count] = '"' + e.argumentIndex + '"'),
                  i(e.elementFormat, s))
            );
          case 'elementFormat':
            return 'select' === e.key
              ? n.globalName +
                  '.s(d,' +
                  s.keys[s.pf_count] +
                  ',' +
                  i(e.val, s) +
                  ')'
              : 'plural' === e.key
              ? ((s.offset[s.pf_count || 0] = e.val.offset || 0),
                n.globalName +
                  '.p(d,' +
                  s.keys[s.pf_count] +
                  ',' +
                  (s.offset[s.pf_count] || 0) +
                  ',"' +
                  n.lc +
                  '",' +
                  i(e.val, s) +
                  ')')
              : '';
          case 'pluralFormatPattern':
            for (
              s.pf_count = s.pf_count || 0, r = !0, a = 0;
              a < e.pluralForms.length;
              ++a
            ) {
              'other' === e.pluralForms[a].key && (r = !1),
                l.push(
                  '"' +
                    e.pluralForms[a].key +
                    '":' +
                    i(e.pluralForms[a].val, t(s))
                );
            }
            if (r) {
              throw new Error(
                "No 'other' form found in pluralFormatPattern " + s.pf_count
              );
            }
            return '{' + l.join(',') + '}';
          case 'selectFormatPattern':
            for (
              s.pf_count = s.pf_count || 0,
                s.offset[s.pf_count] = 0,
                r = !0,
                a = 0;
              a < e.pluralForms.length;
              ++a
            ) {
              'other' === e.pluralForms[a].key && (r = !1),
                l.push(
                  '"' +
                    e.pluralForms[a].key +
                    '":' +
                    i(e.pluralForms[a].val, t(s))
                );
            }
            if (r) {
              throw new Error(
                "No 'other' form found in selectFormatPattern " + s.pf_count
              );
            }
            return '{' + l.join(',') + '}';
          case 'string':
            if (
              ((o =
                '"' +
                (e.val || '').replace(/\n/g, '\\n').replace(/"/g, '\\"') +
                '"'),
              s.pf_count)
            ) {
              const h = s.offset[s.pf_count - 1];
              (o = o.replace(
                /(^|[^\\])#/g,
                '$1"+' +
                  n.globalName +
                  '.n(d,' +
                  s.keys[s.pf_count - 1] +
                  (h ? ',' + h : '') +
                  ')+"'
              )),
                (o = o.replace(/^""\+/, '').replace(/\+""$/, ''));
            }
            return o;
          default:
            throw new Error('Bad AST type: ' + e.type);
        }
      }
      var n = this,
        r = !1;
      return i(e);
    }),
    (t.prototype.compile = function (e) {
      return new Function(
        "this['" +
          this.globalName +
          "']=" +
          this.functions() +
          ';return ' +
          this.precompile(this.parse(e))
      )();
    }),
    (t.prototype.precompileObject = function (e) {
      const t = [];
      for (const i in e) {
        t.push(JSON.stringify(i) + ':' + this.precompile(this.parse(e[i])));
      }
      return '{\n' + t.join(',\n') + '}';
    }),
    'undefined' != typeof exports
      ? ('undefined' != typeof module &&
          module.exports &&
          (exports = module.exports = t),
        (exports.MessageFormat = t))
      : 'function' == typeof define && define.amd
      ? define(function () {
          return t;
        })
      : (e.MessageFormat = t);
})(this),
  (MessageFormat.locale.af = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.am = function (e) {
    return 0 === e || 1 == e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ar = function (e) {
    return 0 === e
      ? 'zero'
      : 1 == e
      ? 'one'
      : 2 == e
      ? 'two'
      : e % 100 >= 3 && 10 >= e % 100 && e == Math.floor(e)
      ? 'few'
      : e % 100 >= 11 && 99 >= e % 100 && e == Math.floor(e)
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.bg = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.bn = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.br = function (e) {
    return 0 === e
      ? 'zero'
      : 1 == e
      ? 'one'
      : 2 == e
      ? 'two'
      : 3 == e
      ? 'few'
      : 6 == e
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.ca = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.cs = function (e) {
    return 1 == e ? 'one' : 2 == e || 3 == e || 4 == e ? 'few' : 'other';
  }),
  (MessageFormat.locale.cy = function (e) {
    return 0 === e
      ? 'zero'
      : 1 == e
      ? 'one'
      : 2 == e
      ? 'two'
      : 3 == e
      ? 'few'
      : 6 == e
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.da = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.de = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.el = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.en = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.es = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.et = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.eu = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.fa = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.fi = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.fil = function (e) {
    return 0 === e || 1 == e ? 'one' : 'other';
  }),
  (MessageFormat.locale.fr = function (e) {
    return 0 === Math.floor(e) || 1 == Math.floor(e) ? 'one' : 'other';
  }),
  (MessageFormat.locale.ga = function (e) {
    return 1 == e ? 'one' : 2 == e ? 'two' : 'other';
  }),
  (MessageFormat.locale.gl = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.gsw = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.gu = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.he = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.hi = function (e) {
    return 0 === e || 1 == e ? 'one' : 'other';
  }),
  (MessageFormat.locale.hr = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 'one'
      : e % 10 >= 2 &&
        4 >= e % 10 &&
        (12 > e % 100 || e % 100 > 14) &&
        e == Math.floor(e)
      ? 'few'
      : e % 10 === 0 ||
        (e % 10 >= 5 && 9 >= e % 10) ||
        (e % 100 >= 11 && 14 >= e % 100 && e == Math.floor(e))
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.hu = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.id = function (e) {
    return 'other';
  }),
  (MessageFormat.locale['in'] = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.is = function (e) {
    return e % 10 === 1 && e % 100 !== 11 ? 'one' : 'other';
  }),
  (MessageFormat.locale.it = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.iw = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ja = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.kn = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.ko = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.lag = function (e) {
    return 0 === e ? 'zero' : e > 0 && 2 > e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ln = function (e) {
    return 0 === e || 1 == e ? 'one' : 'other';
  }),
  (MessageFormat.locale.lt = function (e) {
    return e % 10 == 1 && (11 > e % 100 || e % 100 > 19)
      ? 'one'
      : e % 10 >= 2 &&
        9 >= e % 10 &&
        (11 > e % 100 || e % 100 > 19) &&
        e == Math.floor(e)
      ? 'few'
      : 'other';
  }),
  (MessageFormat.locale.lv = function (e) {
    return 0 === e ? 'zero' : e % 10 == 1 && e % 100 != 11 ? 'one' : 'other';
  }),
  (MessageFormat.locale.mk = function (e) {
    return e % 10 == 1 && 11 != e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ml = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.mo = function (e) {
    return 1 == e
      ? 'one'
      : 0 === e ||
        (1 != e && e % 100 >= 1 && 19 >= e % 100 && e == Math.floor(e))
      ? 'few'
      : 'other';
  }),
  (MessageFormat.locale.mr = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ms = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.mt = function (e) {
    return 1 == e
      ? 'one'
      : 0 === e || (e % 100 >= 2 && 4 >= e % 100 && e == Math.floor(e))
      ? 'few'
      : e % 100 >= 11 && 19 >= e % 100 && e == Math.floor(e)
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.nl = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.no = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.or = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.pl = function (e) {
    return 1 == e
      ? 'one'
      : e % 10 >= 2 &&
        4 >= e % 10 &&
        (12 > e % 100 || e % 100 > 14) &&
        e == Math.floor(e)
      ? 'few'
      : e % 10 === 0 ||
        (1 != e && e % 10 == 1) ||
        (((e % 10 >= 5 && 9 >= e % 10) || (e % 100 >= 12 && 14 >= e % 100)) &&
          e == Math.floor(e))
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.pt = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ro = function (e) {
    return 1 == e
      ? 'one'
      : 0 === e ||
        (1 != e && e % 100 >= 1 && 19 >= e % 100 && e == Math.floor(e))
      ? 'few'
      : 'other';
  }),
  (MessageFormat.locale.ru = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 'one'
      : e % 10 >= 2 &&
        4 >= e % 10 &&
        (12 > e % 100 || e % 100 > 14) &&
        e == Math.floor(e)
      ? 'few'
      : e % 10 === 0 ||
        (e % 10 >= 5 && 9 >= e % 10) ||
        (e % 100 >= 11 && 14 >= e % 100 && e == Math.floor(e))
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.shi = function (e) {
    return e >= 0 && 1 >= e
      ? 'one'
      : e >= 2 && 10 >= e && e == Math.floor(e)
      ? 'few'
      : 'other';
  }),
  (MessageFormat.locale.sk = function (e) {
    return 1 == e ? 'one' : 2 == e || 3 == e || 4 == e ? 'few' : 'other';
  }),
  (MessageFormat.locale.sl = function (e) {
    return e % 100 == 1
      ? 'one'
      : e % 100 == 2
      ? 'two'
      : e % 100 == 3 || e % 100 == 4
      ? 'few'
      : 'other';
  }),
  (MessageFormat.locale.sq = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.sr = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 'one'
      : e % 10 >= 2 &&
        4 >= e % 10 &&
        (12 > e % 100 || e % 100 > 14) &&
        e == Math.floor(e)
      ? 'few'
      : e % 10 === 0 ||
        (e % 10 >= 5 && 9 >= e % 10) ||
        (e % 100 >= 11 && 14 >= e % 100 && e == Math.floor(e))
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.sv = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.sw = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.ta = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.te = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.th = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.tl = function (e) {
    return 0 === e || 1 == e ? 'one' : 'other';
  }),
  (MessageFormat.locale.tr = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.uk = function (e) {
    return e % 10 == 1 && e % 100 != 11
      ? 'one'
      : e % 10 >= 2 &&
        4 >= e % 10 &&
        (12 > e % 100 || e % 100 > 14) &&
        e == Math.floor(e)
      ? 'few'
      : e % 10 === 0 ||
        (e % 10 >= 5 && 9 >= e % 10) ||
        (e % 100 >= 11 && 14 >= e % 100 && e == Math.floor(e))
      ? 'many'
      : 'other';
  }),
  (MessageFormat.locale.ur = function (e) {
    return 1 === e ? 'one' : 'other';
  }),
  (MessageFormat.locale.vi = function (e) {
    return 'other';
  }),
  (MessageFormat.locale.zh = function (e) {
    return 'other';
  });
