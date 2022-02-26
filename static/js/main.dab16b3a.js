/*! For license information please see main.dab16b3a.js.LICENSE.txt */
!(function () {
  var e = {
      7228: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      2858: function (e) {
        (e.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      9713: function (e) {
        (e.exports = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      5318: function (e) {
        (e.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      862: function (e, t, n) {
        var r = n(8).default;
        function o(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        (e.exports = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var n = o(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, u) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(a, u, l)
                : (a[u] = e[u]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3884: function (e) {
        (e.exports = function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              o,
              a = [],
              i = !0,
              u = !1;
            try {
              for (
                n = n.call(e);
                !(i = (r = n.next()).done) &&
                (a.push(r.value), !t || a.length !== t);
                i = !0
              );
            } catch (l) {
              (u = !0), (o = l);
            } finally {
              try {
                i || null == n.return || n.return();
              } finally {
                if (u) throw o;
              }
            }
            return a;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      521: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      3038: function (e, t, n) {
        var r = n(2858),
          o = n(3884),
          a = n(379),
          i = n(521);
        (e.exports = function (e, t) {
          return r(e) || o(e, t) || a(e, t) || i();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      379: function (e, t, n) {
        var r = n(7228);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" === typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      7757: function (e, t, n) {
        e.exports = n(9727);
      },
      6814: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "zx", {
          enumerable: !0,
          get: function () {
            return r.Button;
          },
        }),
          Object.defineProperty(t, "TR", {
            enumerable: !0,
            get: function () {
              return o.Logo;
            },
          }),
          Object.defineProperty(t, "DY", {
            enumerable: !0,
            get: function () {
              return a.ConstructorElement;
            },
          }),
          Object.defineProperty(t, "OK", {
            enumerable: !0,
            get: function () {
              return i.Tab;
            },
          }),
          Object.defineProperty(t, "ZR", {
            enumerable: !0,
            get: function () {
              return f.BurgerIcon;
            },
          }),
          Object.defineProperty(t, "Tw", {
            enumerable: !0,
            get: function () {
              return f.CloseIcon;
            },
          }),
          Object.defineProperty(t, "rm", {
            enumerable: !0,
            get: function () {
              return f.CurrencyIcon;
            },
          }),
          Object.defineProperty(t, "Vn", {
            enumerable: !0,
            get: function () {
              return f.DragIcon;
            },
          }),
          Object.defineProperty(t, "DE", {
            enumerable: !0,
            get: function () {
              return f.ListIcon;
            },
          }),
          Object.defineProperty(t, "m2", {
            enumerable: !0,
            get: function () {
              return f.ProfileIcon;
            },
          });
        var r = n(728),
          o = n(6837),
          a = n(5156),
          i = n(335),
          u = n(8336),
          l = n(8083),
          c = n(8465),
          s = n(8218),
          f = n(2942);
        n(1260), n(6213), n(4260);
      },
      728: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Button = void 0),
          n(5416),
          n(4778);
        var o = r(n(2791)),
          a = r(n(433)),
          i = function (e) {
            var t = e.children,
              n = e.type,
              r = void 0 === n ? "primary" : n,
              i = e.size,
              u = void 0 === i ? "medium" : i,
              l = e.onClick,
              c = e.disabled,
              s = void 0 !== c && c,
              f = e.name,
              d = e.htmlType,
              p = ""
                .concat(a.default.button, " ")
                .concat(
                  "primary" === r
                    ? a.default.button_type_primary
                    : a.default.button_type_secondary,
                  " "
                )
                .concat(
                  "medium" === u
                    ? a.default.button_size_medium
                    : "small" === u
                    ? a.default.button_size_small
                    : a.default.button_size_large
                );
            return o.default.createElement(
              "button",
              { type: d, disabled: s, name: f, onClick: l, className: p },
              t
            );
          };
        (t.Button = i), (i.displayName = "Button");
      },
      5156: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConstructorElement = void 0);
        var o = r(n(9713)),
          a = r(n(2791)),
          i = r(n(8182)),
          u = n(2942);
        n(4709);
        var l = function (e) {
          var t = e.type,
            n = e.text,
            r = e.thumbnail,
            l = e.price,
            c = e.isLocked,
            s = e.handleClose,
            f = (0, i.default)(
              "constructor-element",
              (0, o.default)({}, "constructor-element_pos_".concat(t), t)
            ),
            d = c
              ? a.default.createElement(u.LockIcon, { type: "secondary" })
              : a.default.createElement(u.DeleteIcon, {
                  type: "primary",
                  onClick: s,
                });
          return a.default.createElement(
            "div",
            { className: f },
            a.default.createElement(
              "span",
              { className: "constructor-element__row" },
              a.default.createElement("img", {
                className: "constructor-element__image",
                src: r,
                alt: n,
              }),
              a.default.createElement(
                "span",
                { className: "constructor-element__text" },
                n
              ),
              a.default.createElement(
                "span",
                { className: "constructor-element__price" },
                l,
                a.default.createElement(u.CurrencyIcon, { type: "primary" })
              ),
              a.default.createElement(
                "span",
                { className: "constructor-element__action pr-2" },
                d
              )
            )
          );
        };
        (t.ConstructorElement = l), (l.displayName = "ConstructorElement");
      },
      8083: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Counter = void 0),
          n(4778);
        var o = r(n(2791)),
          a = r(n(9595)),
          i = function (e) {
            var t = e.count,
              n = void 0 === t ? 0 : t,
              r = e.size,
              i = void 0 === r ? "default" : r,
              u = "".concat(a.default.counter, " ").concat(a.default[i]);
            return o.default.createElement(
              "div",
              { className: u },
              o.default.createElement(
                "p",
                { className: a.default.counter__num },
                n
              )
            );
          };
        (t.Counter = i), (i.displayName = "Counter");
      },
      8465: function (e, t, n) {
        "use strict";
        var r = n(862),
          o = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EmailInput = void 0),
          n(5416);
        var a = o(n(3038)),
          i = r(n(2791)),
          u = n(8336),
          l = function (e) {
            var t = e.value,
              n = e.onChange,
              r = e.name,
              o = e.size,
              l = void 0 === o ? "default" : o,
              c = (0, i.useState)(!0),
              s = (0, a.default)(c, 2),
              f = s[0],
              d = s[1],
              p = (0, i.useState)(!1),
              h = (0, a.default)(p, 2),
              g = h[0],
              v = h[1],
              m = (0, i.useRef)(null);
            return i.default.createElement(u.Input, {
              type: "email",
              placeholder: "Email",
              onChange: n,
              icon: "EditIcon",
              value: t,
              ref: m,
              onBlur: function (e) {
                e.target.value
                  ? (function (e) {
                      v(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
                    })(e.target.value)
                  : v(!1),
                  d(!0);
              },
              onFocus: function () {
                v(!1);
              },
              name: r,
              error: g,
              disabled: f,
              onIconClick: function () {
                d(!1),
                  setTimeout(function () {
                    var e;
                    return null === (e = m.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  }, 0);
              },
              errorText:
                "\u041e\u0439, \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",
              size: l,
            });
          };
        (t.EmailInput = l), (l.displayName = "EmailInput");
      },
      7621: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ArrowDownIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type,
              n = e.onClick;
            return o.default.createElement(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
                onClick: n,
                xmlns: "http://www.w3.org/2000/svg",
              },
              o.default.createElement("path", {
                d: "M10.9541 15.6475C11.5164 16.1175 12.4836 16.1175 13.0459 15.6475L17.6243 11.8214C18.4585 11.1242 17.8129 10 16.5783 10H7.42166C6.1871 10 5.54152 11.1242 6.37574 11.8214L10.9541 15.6475Z",
                fill: (0, a.getIconColor)(t),
              })
            );
          };
        (t.ArrowDownIcon = i), (i.displayName = "ArrowDownIcon");
      },
      2299: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ArrowUpIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type,
              n = e.onClick;
            return o.default.createElement(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
                onClick: n,
                xmlns: "http://www.w3.org/2000/svg",
              },
              o.default.createElement("path", {
                d: "M10.9541 10.3525C11.5164 9.88251 12.4836 9.88251 13.0459 10.3525L17.6243 14.1786C18.4585 14.8758 17.8129 16 16.5783 16H7.42166C6.1871 16 5.54152 14.8758 6.37574 14.1786L10.9541 10.3525Z",
                fill: (0, a.getIconColor)(t),
              })
            );
          };
        (t.ArrowUpIcon = i), (i.displayName = "ArrowUpIcon");
      },
      5022: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BurgerIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.0571 8.7H1.96905C1.44524 8.7 1.02619 8.25842 1 7.70645C1 3.26308 4.69286 1 12 1C19.3071 1 23 3.26308 23 7.70645C23 8.25842 22.581 8.7 22.0571 8.7ZM24 12.55C24 11.6362 23.2674 10.9 22.3579 10.9H1.64211C0.732632 10.9 0 11.6362 0 12.55C0 13.4638 0.732632 14.2 1.64211 14.2H22.3579C23.2674 14.2 24 13.4638 24 12.55ZM22.0321 16.4H1.94174C1.41855 16.4 1 16.8693 1 17.456V18.5707C1 21.0053 2.77883 23 4.95006 23H19.0499C21.2212 23 23 21.0053 23 18.5707V17.456C22.9738 16.8693 22.5553 16.4 22.0321 16.4Z",
              })
            );
          };
        (t.BurgerIcon = i), (i.displayName = "BurgerIcon");
      },
      5964: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CheckMarkIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.6561 5.29793C22.1 5.7086 22.1163 6.39029 21.6926 6.82051L10.026 18.6667C9.8136 18.8823 9.51854 19.003 9.211 18.9999C8.90347 18.9969 8.61098 18.8705 8.40317 18.6508L2.29206 12.1892C1.8774 11.7508 1.90796 11.0696 2.36031 10.6677C2.81267 10.2658 3.51552 10.2954 3.93018 10.7338L9.23865 16.3467L20.0852 5.33334C20.5089 4.90311 21.2122 4.88725 21.6561 5.29793Z",
              })
            );
          };
        (t.CheckMarkIcon = i), (i.displayName = "CheckMarkIcon");
      },
      3168: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CloseIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type,
              n = e.onClick;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
                onClick: n,
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L12 10.5858L19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L13.4142 12L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L12 13.4142L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L10.5858 12L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z",
              })
            );
          };
        (t.CloseIcon = i), (i.displayName = "CloseIcon");
      },
      9065: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CurrencyIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                d: "M10.3849 2.65561C10.5818 2.18895 10.0397 1.75899 9.63011 2.05689L1.41184 8.03382C1.15309 8.222 1.00001 8.52262 1.00001 8.84256V13.4828C1.00001 13.6932 1.13171 13.8811 1.32948 13.9529L4.15637 14.9785C4.65685 15.1601 5.21185 14.9177 5.41879 14.4271L10.3849 2.65561Z",
              }),
              o.default.createElement("path", {
                d: "M1.62116 15.9076C1.32217 15.7916 1.00001 16.0122 1 16.3329C1 16.4889 1.07968 16.634 1.21127 16.7178L10.2307 22.4574C10.3326 22.5223 10.4408 22.3844 10.3536 22.3008L5.22556 17.3879C5.13043 17.2968 5.01823 17.2254 4.89541 17.1777L1.62116 15.9076Z",
              }),
              o.default.createElement("path", {
                d: "M13.6465 22.3008C13.5592 22.3844 13.6674 22.5223 13.7693 22.4574L22.7887 16.7178C22.9203 16.634 23 16.4889 23 16.3329C23 16.0122 22.6778 15.7916 22.3788 15.9076L19.1046 17.1777C18.9818 17.2254 18.8696 17.2968 18.7745 17.3879L13.6465 22.3008Z",
              }),
              o.default.createElement("path", {
                d: "M22.6705 13.9529C22.8683 13.8811 23 13.6932 23 13.4828V8.84256C23 8.52262 22.8469 8.222 22.5882 8.03382L14.3699 2.05689C13.9603 1.75899 13.4183 2.18895 13.6151 2.65561L18.5812 14.4271C18.7882 14.9177 19.3432 15.1601 19.8436 14.9785L22.6705 13.9529Z",
              }),
              o.default.createElement("path", {
                d: "M12.7142 20.9615C12.3221 21.3616 11.6779 21.3616 11.2858 20.9615L7.10635 16.6968C6.83068 16.4155 6.7458 15.9986 6.88954 15.6319L11.069 4.97004C11.4009 4.12332 12.5991 4.12333 12.931 4.97004L17.1105 15.6319C17.2542 15.9986 17.1693 16.4155 16.8937 16.6968L12.7142 20.9615Z",
              })
            );
          };
        (t.CurrencyIcon = i), (i.displayName = "CurrencyIcon");
      },
      2346: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DeleteIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type,
              n = e.onClick;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
                onClick: n,
              },
              o.default.createElement("path", {
                d: "M18.9391 8.69713C19.1384 8.69713 19.3193 8.78413 19.4623 8.93113C19.5955 9.08813 19.6626 9.28313 19.6432 9.48913C19.6432 9.55712 19.1102 16.2971 18.8058 19.134C18.6152 20.875 17.4929 21.932 15.8094 21.961C14.5149 21.99 13.2496 22 12.0038 22C10.6811 22 9.38763 21.99 8.13206 21.961C6.50498 21.922 5.38168 20.846 5.20079 19.134C4.88763 16.2871 4.36439 9.55712 4.35467 9.48913C4.34494 9.28313 4.41108 9.08813 4.54529 8.93113C4.67756 8.78413 4.86818 8.69713 5.06852 8.69713H18.9391ZM14.0647 2C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647Z",
                fill: (0, a.getIconColor)(t),
              })
            );
          };
        (t.DeleteIcon = i), (i.displayName = "DeleteIcon");
      },
      479: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DragIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.5 5.15375C9.5 6.34325 8.60455 7.3075 7.5 7.3075C6.39545 7.3075 5.5 6.34325 5.5 5.15375C5.5 3.96427 6.39545 3 7.5 3C8.60455 3 9.5 3.96427 9.5 5.15375ZM7.5 14.3075C8.60455 14.3075 9.5 13.3433 9.5 12.1538C9.5 10.9643 8.60455 10 7.5 10C6.39545 10 5.5 10.9643 5.5 12.1538C5.5 13.3433 6.39545 14.3075 7.5 14.3075ZM7.5 21.3075C8.60455 21.3075 9.5 20.3433 9.5 19.1537C9.5 17.9642 8.60455 17 7.5 17C6.39545 17 5.5 17.9642 5.5 19.1537C5.5 20.3433 6.39545 21.3075 7.5 21.3075Z",
              }),
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.5 5.15375C18.5 6.34325 17.6045 7.3075 16.5 7.3075C15.3954 7.3075 14.5 6.34325 14.5 5.15375C14.5 3.96427 15.3954 3 16.5 3C17.6045 3 18.5 3.96427 18.5 5.15375ZM16.5 14.3075C17.6045 14.3075 18.5 13.3433 18.5 12.1538C18.5 10.9643 17.6045 10 16.5 10C15.3954 10 14.5 10.9643 14.5 12.1538C14.5 13.3433 15.3954 14.3075 16.5 14.3075ZM16.5 21.3075C17.6045 21.3075 18.5 20.3433 18.5 19.1537C18.5 17.9642 17.6045 17 16.5 17C15.3954 17 14.5 17.9642 14.5 19.1537C14.5 20.3433 15.3954 21.3075 16.5 21.3075Z",
              })
            );
          };
        (t.DragIcon = i), (i.displayName = "DragIcon");
      },
      3079: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EditIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.9897 16.8541L2.67591 20.3576C2.44981 20.9605 3.03858 21.5493 3.6415 21.3232L7.14496 20.0094C7.54594 19.859 7.91009 19.6245 8.21291 19.3217L18.36 9.17461C18.36 9.17461 18.0064 8.11395 16.9458 7.05329C15.8851 5.99263 14.8244 5.63908 14.8244 5.63908L4.67737 15.7862C4.37455 16.089 4.14007 16.4532 3.9897 16.8541ZM16.2386 4.22486L17.6224 2.84111C17.8705 2.59298 18.2009 2.43512 18.5471 2.4925C19.0338 2.57318 19.7785 2.81495 20.4813 3.51776C21.1841 4.22056 21.4259 4.96528 21.5065 5.45198C21.5639 5.79816 21.4061 6.12852 21.1579 6.37664L19.7742 7.7604C19.7742 7.7604 19.4206 6.69974 18.36 5.63908C17.2993 4.57842 16.2386 4.22486 16.2386 4.22486Z",
              })
            );
          };
        (t.EditIcon = i), (i.displayName = "EditIcon");
      },
      5057: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HideIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                d: "M19.1704 3.21413C19.4631 2.92862 19.9217 2.92862 20.2046 3.21413C20.4974 3.49964 20.4974 3.9722 20.2046 4.25771L18.4288 6.04952C19.8436 7.34907 21.0438 9.10149 21.9415 11.2083C22.0195 11.3954 22.0195 11.612 21.9415 11.7892C19.8534 16.6921 16.1358 19.6259 11.9987 19.6259H11.9889C10.1058 19.6259 8.30063 19.0056 6.71018 17.8735L4.81725 19.7834C4.67089 19.9311 4.4855 20 4.30011 20C4.11472 20 3.91957 19.9311 3.78297 19.7834C3.53903 19.5373 3.5 19.1435 3.69515 18.858L3.72442 18.8186L18.1556 4.25771C18.1751 4.23802 18.1946 4.21833 18.2044 4.19864C18.2239 4.17895 18.2434 4.15926 18.2532 4.13957L19.1704 3.21413ZM12.0013 3.38534C13.3966 3.38534 14.7529 3.72007 16.0018 4.35015L12.7429 7.63841C12.5087 7.59903 12.255 7.5695 12.0013 7.5695C9.84494 7.5695 8.09836 9.33177 8.09836 11.5075C8.09836 11.7635 8.12764 12.0195 8.16667 12.2558L4.55643 15.8984C3.5807 14.7564 2.7318 13.3781 2.05854 11.793C1.98049 11.6158 1.98049 11.3992 2.05854 11.2122C4.14662 6.30933 7.86419 3.38534 11.9916 3.38534H12.0013ZM15.2186 9.28855L14.1551 10.3617C14.3307 10.6964 14.4283 11.0902 14.4283 11.5037C14.4283 12.8525 13.3354 13.9551 11.9987 13.9551C11.5889 13.9551 11.1986 13.8567 10.8668 13.6795L9.80327 14.7526C10.4277 15.1759 11.1888 15.4319 11.9987 15.4319C14.1453 15.4319 15.8919 13.6696 15.8919 11.5037C15.8919 10.6865 15.6382 9.91863 15.2186 9.28855Z",
              })
            );
          };
        (t.HideIcon = i), (i.displayName = "HideIcon");
      },
      2942: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "CurrencyIcon", {
            enumerable: !0,
            get: function () {
              return r.CurrencyIcon;
            },
          }),
          Object.defineProperty(t, "BurgerIcon", {
            enumerable: !0,
            get: function () {
              return o.BurgerIcon;
            },
          }),
          Object.defineProperty(t, "LockIcon", {
            enumerable: !0,
            get: function () {
              return a.LockIcon;
            },
          }),
          Object.defineProperty(t, "DragIcon", {
            enumerable: !0,
            get: function () {
              return i.DragIcon;
            },
          }),
          Object.defineProperty(t, "DeleteIcon", {
            enumerable: !0,
            get: function () {
              return u.DeleteIcon;
            },
          }),
          Object.defineProperty(t, "ArrowUpIcon", {
            enumerable: !0,
            get: function () {
              return l.ArrowUpIcon;
            },
          }),
          Object.defineProperty(t, "ArrowDownIcon", {
            enumerable: !0,
            get: function () {
              return c.ArrowDownIcon;
            },
          }),
          Object.defineProperty(t, "MenuIcon", {
            enumerable: !0,
            get: function () {
              return s.MenuIcon;
            },
          }),
          Object.defineProperty(t, "CloseIcon", {
            enumerable: !0,
            get: function () {
              return f.CloseIcon;
            },
          }),
          Object.defineProperty(t, "CheckMarkIcon", {
            enumerable: !0,
            get: function () {
              return d.CheckMarkIcon;
            },
          }),
          Object.defineProperty(t, "ListIcon", {
            enumerable: !0,
            get: function () {
              return p.ListIcon;
            },
          }),
          Object.defineProperty(t, "ProfileIcon", {
            enumerable: !0,
            get: function () {
              return h.ProfileIcon;
            },
          }),
          Object.defineProperty(t, "EditIcon", {
            enumerable: !0,
            get: function () {
              return g.EditIcon;
            },
          }),
          Object.defineProperty(t, "InfoIcon", {
            enumerable: !0,
            get: function () {
              return v.InfoIcon;
            },
          }),
          Object.defineProperty(t, "ShowIcon", {
            enumerable: !0,
            get: function () {
              return m.ShowIcon;
            },
          }),
          Object.defineProperty(t, "HideIcon", {
            enumerable: !0,
            get: function () {
              return y.HideIcon;
            },
          }),
          Object.defineProperty(t, "LogoutIcon", {
            enumerable: !0,
            get: function () {
              return b.LogoutIcon;
            },
          });
        var r = n(9065),
          o = n(5022),
          a = n(7727),
          i = n(479),
          u = n(2346),
          l = n(2299),
          c = n(7621),
          s = n(281),
          f = n(3168),
          d = n(5964),
          p = n(9804),
          h = n(9555),
          g = n(3079),
          v = n(7647),
          m = n(5421),
          y = n(5057),
          b = n(8490);
      },
      7647: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InfoIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                d: "M12 1C18.083 1 23 5.9291 23 12C23 18.0731 18.083 23 12 23C5.928 23 1 18.0731 1 12C1 5.9291 5.928 1 12 1ZM12 15.2241C11.472 15.2241 11.043 15.6531 11.043 16.1811C11.043 16.7091 11.472 17.1491 12.011 17.1491C12.539 17.1491 12.968 16.7091 12.968 16.1811C12.968 15.6531 12.539 15.2241 12 15.2241ZM12 6.863C11.472 6.863 11.032 7.3041 11.032 7.831V12.693C11.032 13.2221 11.472 13.65 12 13.65C12.528 13.65 12.957 13.2221 12.957 12.693V7.831C12.957 7.3041 12.528 6.863 12 6.863Z",
              })
            );
          };
        (t.InfoIcon = i), (i.displayName = "InfoIcon");
      },
      9804: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ListIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21V3ZM6.5 8C7.0523 8 7.5 7.5523 7.5 7C7.5 6.4477 7.0523 6 6.5 6C5.9477 6 5.5 6.4477 5.5 7C5.5 7.5523 5.9477 8 6.5 8ZM8.5 7C8.5 6.44772 8.94772 6 9.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7C18.5 7.55228 18.0523 8 17.5 8H9.5C8.94772 8 8.5 7.55228 8.5 7ZM9.5 11C8.94772 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94772 13 9.5 13H17.5C18.0523 13 18.5 12.5523 18.5 12C18.5 11.4477 18.0523 11 17.5 11H9.5ZM9.5 16C8.94772 16 8.5 16.4477 8.5 17C8.5 17.5523 8.94772 18 9.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17C18.5 16.4477 18.0523 16 17.5 16H9.5ZM6.5 13C7.0523 13 7.5 12.5523 7.5 12C7.5 11.4477 7.0523 11 6.5 11C5.9477 11 5.5 11.4477 5.5 12C5.5 12.5523 5.9477 13 6.5 13ZM6.5 18C7.0523 18 7.5 17.5523 7.5 17C7.5 16.4477 7.0523 16 6.5 16C5.9477 16 5.5 16.4477 5.5 17C5.5 17.5523 5.9477 18 6.5 18Z",
              })
            );
          };
        (t.ListIcon = i), (i.displayName = "ListIcon");
      },
      7727: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LockIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 7V10H4C2.89543 10 2 10.8954 2 12V21C2 22.1046 2.89543 23 4 23H20C21.1046 23 22 22.1046 22 21V12C22 10.8954 21.1046 10 20 10H18V7C18 3.68629 15.3137 1 12 1C8.68632 1 6 3.68629 6 7ZM12 3C9.79088 3 8 4.79086 8 7V10H16V7C16 4.79086 14.2091 3 12 3ZM13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V15Z",
              })
            );
          };
        (t.LockIcon = i), (i.displayName = "LockIcon");
      },
      8490: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.LogoutIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                d: "M11.5 2C13.9826 2 16 4.05 16 6.5V11H10.0111C9.5 11 9 11.5 9 12C9 12.5 9.5 13 10.0111 13H16V17.5C16 19.95 14.0029 22 11.5 22H6.5C4.00727 22 2 19.95 2 17.5V6.5C2 4.04 4.00727 2.00003 6.5 2.00003L11.5 2ZM18.6559 8.55023C18.9559 8.24023 19.4459 8.24023 19.7459 8.54023L22.6659 11.4502C22.8159 11.6002 23 11.7364 23 12C23 12.2636 22.8159 12.4002 22.6659 12.5402L19.7459 15.4502C19.5959 15.6002 19.3959 15.6802 19.2059 15.6802C19.0059 15.6802 18.8059 15.6002 18.6559 15.4502C18.3559 15.1502 18.3559 14.6602 18.6559 14.3602L20 13H16V11H20L18.6559 9.64023C18.3559 9.34023 18.3559 8.85023 18.6559 8.55023Z",
              })
            );
          };
        (t.LogoutIcon = i), (i.displayName = "LogoutIcon");
      },
      281: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MenuIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type,
              n = e.onClick;
            return o.default.createElement(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                fill: (0, a.getIconColor)(t),
                onClick: n,
              },
              o.default.createElement("rect", {
                x: "3",
                y: "6",
                width: "18",
                height: "2",
                rx: "1",
                fill: (0, a.getIconColor)(t),
              }),
              o.default.createElement("rect", {
                x: "3",
                y: "11",
                width: "18",
                height: "2",
                rx: "1",
                fill: (0, a.getIconColor)(t),
              }),
              o.default.createElement("rect", {
                x: "3",
                y: "16",
                width: "18",
                height: "2",
                rx: "1",
                fill: (0, a.getIconColor)(t),
              })
            );
          };
        (t.MenuIcon = i), (i.displayName = "MenuIcon");
      },
      9555: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ProfileIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.068 6.56875C17.068 10.0837 14.8959 13.1 12 13.1C9.10401 13.1 6.93203 10.0837 6.93203 6.56875C6.93203 3.05385 8.80118 1 12 1C15.1988 1 17.068 3.05385 17.068 6.56875ZM3.10524 20.9572C3.53926 21.4607 5.40556 23 12 23C18.5944 23 20.4608 21.4607 20.8947 20.9572C20.9792 20.8593 21.0103 20.7362 20.9971 20.6088C20.8969 19.638 20.0015 15.3 12 15.3C3.99848 15.3 3.10311 19.638 3.00291 20.6088C2.98975 20.7362 3.02077 20.8593 3.10524 20.9572Z",
              })
            );
          };
        (t.ProfileIcon = i), (i.displayName = "ProfileIcon");
      },
      5421: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ShowIcon = void 0);
        var o = r(n(2791)),
          a = n(6934),
          i = function (e) {
            var t = e.type;
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: (0, a.getIconColor)(t),
              },
              o.default.createElement("path", {
                d: "M12 4C14.0683 4 16.0293 4.71758 17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12ZM12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121ZM12.0012 9.57362C13.3378 9.57362 14.4304 10.6597 14.4304 11.9979C14.4304 13.3264 13.3378 14.4124 12.0012 14.4124C10.6548 14.4124 9.56215 13.3264 9.56215 11.9979C9.56215 11.833 9.58166 11.6779 9.61093 11.5227H9.65971C10.7426 11.5227 11.6207 10.6694 11.6597 9.60272C11.767 9.58332 11.8841 9.57362 12.0012 9.57362Z",
              })
            );
          };
        (t.ShowIcon = i), (i.displayName = "ShowIcon");
      },
      6934: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getIconColor = void 0);
        t.getIconColor = function (e) {
          return "".concat(
            "secondary" === e
              ? "#8585AD"
              : "error" === e
              ? "#E52B1A"
              : "success" === e
              ? "#00CCCC"
              : "#F2F2F3"
          );
        };
      },
      8336: function (e, t, n) {
        "use strict";
        var r = n(862),
          o = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Input = void 0),
          n(2583),
          n(5416);
        var a = o(n(9713)),
          i = o(n(3038)),
          u = o(n(2007)),
          l = r(n(2791)),
          c = o(n(8182)),
          s = r(n(2942));
        n(8895);
        var f = l.default.forwardRef(function (e, t) {
          var n,
            r,
            o,
            u = e.type,
            f = e.placeholder,
            d = e.onChange,
            p = e.icon,
            h = e.onIconClick,
            g = e.name,
            v = (e.success, e.error),
            m = e.value,
            y = e.errorText,
            b = e.disabled,
            w = e.onBlur,
            C = e.onFocus,
            k = e.size,
            E = void 0 === k ? "default" : k,
            x = (0, l.useState)(!1),
            S = (0, i.default)(x, 2),
            _ = S[0],
            O = S[1],
            I = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              var r = l.default.useRef(null);
              return (
                l.default.useEffect(
                  function () {
                    t.forEach(function (e) {
                      "function" === typeof e
                        ? e(r.current)
                        : null != e && (e.current = r.current);
                    });
                  },
                  [t]
                ),
                r
              );
            })((0, l.useRef)(null), t),
            T = (0, l.useCallback)(
              function (e) {
                O(!0), "function" === typeof C && C(e);
              },
              [O, C]
            ),
            P = (0, l.useCallback)(
              function () {
                var e;
                null === I ||
                  void 0 === I ||
                  null === (e = I.current) ||
                  void 0 === e ||
                  e.focus();
              },
              [I]
            ),
            D = (0, l.useCallback)(
              function (e) {
                O(!1), "function" === typeof w && w(e);
              },
              [O, w]
            ),
            N = (0, l.useCallback)(
              function (e) {
                e.stopPropagation(), "function" === typeof h ? h(e) : P();
              },
              [h, P]
            ),
            L = (0, l.useMemo)(
              function () {
                var e,
                  t = p && s[p],
                  n = "function" === typeof h,
                  r = b && !n;
                return t
                  ? l.default.createElement(
                      "div",
                      {
                        className: (0, c.default)(
                          "input__icon",
                          ((e = {}),
                          (0, a.default)(e, "input__icon-action", n),
                          (0, a.default)(e, "input__icon-disabled", r),
                          e)
                        ),
                        onClick: N,
                      },
                      l.default.createElement(t, {
                        type: r ? "secondary" : "primary",
                      })
                    )
                  : null;
              },
              [p, N, b, h]
            ),
            j = (0, l.useCallback)(
              function () {
                P();
              },
              [P]
            ),
            M = (0, l.useMemo)(
              function () {
                return (
                  v &&
                  y &&
                  l.default.createElement(
                    "p",
                    {
                      className: (0, c.default)(
                        "input__error",
                        (0, a.default)({}, "text_type_main-".concat(E), E)
                      ),
                    },
                    y
                  )
                );
              },
              [v, y, E]
            );
          return l.default.createElement(
            "div",
            { className: "input__container" },
            l.default.createElement(
              "div",
              {
                className: (0, c.default)(
                  "input",
                  ((n = {}),
                  (0, a.default)(n, "pr-6 pl-6", "default" === E),
                  (0, a.default)(n, "input_type_".concat(u), u),
                  (0, a.default)(n, "input_size_".concat(E), E),
                  (0, a.default)(n, "input_status_error", v),
                  (0, a.default)(n, "input_status_disabled", b),
                  (0, a.default)(n, "input_status_active", _),
                  n)
                ),
                onClick: j,
              },
              l.default.createElement(
                "label",
                {
                  className: (0, c.default)(
                    "input__placeholder text noselect",
                    ((r = {}),
                    (0, a.default)(r, "text_type_main-".concat(E), E),
                    (0, a.default)(r, "input__placeholder-focused", _),
                    (0, a.default)(r, "input__placeholder-filled", m),
                    (0, a.default)(r, "input__placeholder-disabled", b),
                    r)
                  ),
                },
                f
              ),
              l.default.createElement("input", {
                onFocus: T,
                onBlur: D,
                className: (0, c.default)(
                  "text",
                  "input__textfield",
                  ((o = {}),
                  (0, a.default)(o, "text_type_main-".concat(E), E),
                  (0, a.default)(o, "input__textfield-disabled", b),
                  o)
                ),
                type: u,
                ref: I,
                onChange: d,
                name: g,
                value: m,
                disabled: b,
              }),
              L
            ),
            M
          );
        });
        (t.Input = f),
          (f.propTypes = {
            type: u.default.oneOf(["text", "email", "password"]),
            placeholder: u.default.string,
            value: u.default.string.isRequired,
            name: u.default.string,
            success: u.default.bool,
            error: u.default.bool,
            disabled: u.default.bool,
            icon: u.default.any,
            errorText: u.default.string,
            size: u.default.oneOf(["default", "small"]),
            children: u.default.node,
          }),
          (f.displayName = "Input");
      },
      6837: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Logo = void 0);
        var o = r(n(2791)),
          a = function () {
            return o.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "290",
                height: "50",
                viewBox: "0 0 290 50",
                fill: "none",
              },
              o.default.createElement(
                "g",
                { filter: "url(#filter0_f)" },
                o.default.createElement("path", {
                  d: "M159.513 37.6331C160.013 37.0196 159.562 36.1398 158.77 36.1268C148.664 35.9604 140.212 36.1472 129.758 36.7832C128.967 36.8314 128.555 37.7311 129.083 38.3217C132.746 42.4201 138.074 45 144.004 45C150.26 45 155.845 42.1291 159.513 37.6331Z",
                  stroke: "#4C4CFF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                o.default.createElement("path", {
                  d: "M126.643 15.0579C126.252 15.7378 126.827 16.5294 127.606 16.436C139.173 15.048 147.698 14.6341 159.788 15.3703C160.575 15.4182 161.104 14.5873 160.668 13.9313C157.083 8.54757 150.958 5 144.004 5C136.576 5 130.093 9.04797 126.643 15.0579Z",
                  stroke: "#4C4CFF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement(
                "g",
                { filter: "url(#filter1_f)" },
                o.default.createElement("path", {
                  d: "M159.513 37.6331C160.013 37.0196 159.562 36.1398 158.77 36.1268C148.664 35.9604 140.212 36.1472 129.758 36.7832C128.967 36.8314 128.555 37.7311 129.083 38.3217C132.746 42.4201 138.074 45 144.004 45C150.26 45 155.845 42.1291 159.513 37.6331Z",
                  stroke: "#4C4CFF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                o.default.createElement("path", {
                  d: "M126.643 15.0579C126.252 15.7378 126.827 16.5294 127.606 16.436C139.173 15.048 147.698 14.6341 159.788 15.3703C160.575 15.4182 161.104 14.5873 160.668 13.9313C157.083 8.54757 150.958 5 144.004 5C136.576 5 130.093 9.04797 126.643 15.0579Z",
                  stroke: "#4C4CFF",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement("path", {
                d: "M159.513 37.6331C160.013 37.0196 159.562 36.1398 158.77 36.1268C148.664 35.9604 140.212 36.1472 129.758 36.7832C128.967 36.8314 128.555 37.7311 129.083 38.3217C132.746 42.4201 138.074 45 144.004 45C150.26 45 155.845 42.1291 159.513 37.6331Z",
                stroke: "#4C4CFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement("path", {
                d: "M126.643 15.0579C126.252 15.7378 126.827 16.5294 127.606 16.436C139.173 15.048 147.698 14.6341 159.788 15.3703C160.575 15.4182 161.104 14.5873 160.668 13.9313C157.083 8.54757 150.958 5 144.004 5C136.576 5 130.093 9.04797 126.643 15.0579Z",
                stroke: "#4C4CFF",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement("path", {
                d: "M159.513 37.6331C160.013 37.0196 159.562 36.1398 158.77 36.1268C148.664 35.9604 140.212 36.1472 129.758 36.7832C128.967 36.8314 128.555 37.7311 129.083 38.3217C132.746 42.4201 138.074 45 144.004 45C150.26 45 155.845 42.1291 159.513 37.6331Z",
                stroke: "white",
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement("path", {
                d: "M126.643 15.0579C126.252 15.7378 126.827 16.5294 127.606 16.436C139.173 15.048 147.698 14.6341 159.788 15.3703C160.575 15.4182 161.104 14.5873 160.668 13.9313C157.083 8.54757 150.958 5 144.004 5C136.576 5 130.093 9.04797 126.643 15.0579Z",
                stroke: "white",
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement(
                "g",
                { filter: "url(#filter2_f)" },
                o.default.createElement("path", {
                  d: "M163.859 27.4656C163.988 26.4133 163.172 25.5115 162.115 25.4264C149.235 24.3883 139.184 24.2251 125.89 24.9245C124.831 24.9802 123.99 25.8596 124.089 26.9156C124.23 28.4145 124.537 29.8654 124.991 31.2496C125.253 32.0473 126.032 32.5408 126.871 32.5118C139.383 32.0783 149.06 32.0468 161.196 32.3747C162.035 32.3973 162.811 31.8976 163.066 31.0975C163.439 29.9298 163.707 28.7155 163.859 27.4656Z",
                  stroke: "#E33CD5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement(
                "g",
                { filter: "url(#filter3_f)" },
                o.default.createElement("path", {
                  d: "M163.859 27.4656C163.988 26.4133 163.172 25.5115 162.115 25.4264C149.235 24.3883 139.184 24.2251 125.89 24.9245C124.831 24.9802 123.99 25.8596 124.089 26.9156C124.23 28.4145 124.537 29.8654 124.991 31.2496C125.253 32.0473 126.032 32.5408 126.871 32.5118C139.383 32.0783 149.06 32.0468 161.196 32.3747C162.035 32.3973 162.811 31.8976 163.066 31.0975C163.439 29.9298 163.707 28.7155 163.859 27.4656Z",
                  stroke: "#E33CD5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement("path", {
                d: "M163.859 27.4656C163.988 26.4133 163.172 25.5115 162.115 25.4264C149.235 24.3883 139.184 24.2251 125.89 24.9245C124.831 24.9802 123.99 25.8596 124.089 26.9156C124.23 28.4145 124.537 29.8654 124.991 31.2496C125.253 32.0473 126.032 32.5408 126.871 32.5118C139.383 32.0783 149.06 32.0468 161.196 32.3747C162.035 32.3973 162.811 31.8976 163.066 31.0975C163.439 29.9298 163.707 28.7155 163.859 27.4656Z",
                stroke: "#E33CD5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement("path", {
                d: "M163.859 27.4656C163.988 26.4133 163.172 25.5115 162.115 25.4264C149.235 24.3883 139.184 24.2251 125.89 24.9245C124.831 24.9802 123.99 25.8596 124.089 26.9156C124.23 28.4145 124.537 29.8654 124.991 31.2496C125.253 32.0473 126.032 32.5408 126.871 32.5118C139.383 32.0783 149.06 32.0468 161.196 32.3747C162.035 32.3973 162.811 31.8976 163.066 31.0975C163.439 29.9298 163.707 28.7155 163.859 27.4656Z",
                stroke: "white",
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement(
                "g",
                { filter: "url(#filter4_f)" },
                o.default.createElement("path", {
                  d: "M124 20.5C126.667 18.5 129.333 18.5 132 20.5C134.667 22.5 137.333 22.5 140 20.5C142.667 18.5 145.333 18.5 148 20.5C150.667 22.5 153.333 22.5 156 20.5C158.667 18.5 161.333 18.5 164 20.5",
                  stroke: "#00CCCC",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement(
                "g",
                { filter: "url(#filter5_f)" },
                o.default.createElement("path", {
                  d: "M124 20.5C126.667 18.5 129.333 18.5 132 20.5C134.667 22.5 137.333 22.5 140 20.5C142.667 18.5 145.333 18.5 148 20.5C150.667 22.5 153.333 22.5 156 20.5C158.667 18.5 161.333 18.5 164 20.5",
                  stroke: "#00CCCC",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              ),
              o.default.createElement("path", {
                d: "M124 20.5C126.667 18.5 129.333 18.5 132 20.5C134.667 22.5 137.333 22.5 140 20.5C142.667 18.5 145.333 18.5 148 20.5C150.667 22.5 153.333 22.5 156 20.5C158.667 18.5 161.333 18.5 164 20.5",
                stroke: "#00CCCC",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement("path", {
                d: "M124 20.5C126.667 18.5 129.333 18.5 132 20.5C134.667 22.5 137.333 22.5 140 20.5C142.667 18.5 145.333 18.5 148 20.5C150.667 22.5 153.333 22.5 156 20.5C158.667 18.5 161.333 18.5 164 20.5",
                stroke: "white",
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              o.default.createElement(
                "g",
                { filter: "url(#filter6_f)" },
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform:
                    "matrix(0.885492 0.464655 0.464655 -0.885492 137.234 39.9812)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "152.708",
                  cy: "11.3542",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(15 152.708 11.3542)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform:
                    "matrix(0.965926 -0.258819 -0.258819 -0.965926 150.16 39.9833)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "142.5",
                  cy: "12",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(180 142.5 12)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "146.708",
                  cy: "8.35415",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(15 146.708 8.35415)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform: "matrix(1 0 0 -1 144 41.75)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "135.793",
                  cy: "10.5826",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(-27.6879 135.793 10.5826)",
                  stroke: "#4C4CFF",
                })
              ),
              o.default.createElement(
                "g",
                { filter: "url(#filter7_f)" },
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform:
                    "matrix(0.885492 0.464655 0.464655 -0.885492 137.234 39.9812)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "152.708",
                  cy: "11.3542",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(15 152.708 11.3542)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform:
                    "matrix(0.965926 -0.258819 -0.258819 -0.965926 150.16 39.9833)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "142.5",
                  cy: "12",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(180 142.5 12)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "146.708",
                  cy: "8.35415",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(15 146.708 8.35415)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  rx: "1",
                  ry: "0.75",
                  transform: "matrix(1 0 0 -1 144 41.75)",
                  stroke: "#4C4CFF",
                }),
                o.default.createElement("ellipse", {
                  cx: "135.793",
                  cy: "10.5826",
                  rx: "1.5",
                  ry: "1",
                  transform: "rotate(-27.6879 135.793 10.5826)",
                  stroke: "#4C4CFF",
                })
              ),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform:
                  "matrix(0.885492 0.464655 0.464655 -0.885492 137.234 39.9812)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                cx: "152.708",
                cy: "11.3542",
                rx: "1.5",
                ry: "1",
                transform: "rotate(15 152.708 11.3542)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform:
                  "matrix(0.965926 -0.258819 -0.258819 -0.965926 150.16 39.9833)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                cx: "142.5",
                cy: "12",
                rx: "1.5",
                ry: "1",
                transform: "rotate(180 142.5 12)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                cx: "146.708",
                cy: "8.35415",
                rx: "1.5",
                ry: "1",
                transform: "rotate(15 146.708 8.35415)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform: "matrix(1 0 0 -1 144 41.75)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                cx: "135.793",
                cy: "10.5826",
                rx: "1.5",
                ry: "1",
                transform: "rotate(-27.6879 135.793 10.5826)",
                stroke: "#4C4CFF",
              }),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform:
                  "matrix(0.885492 0.464655 0.464655 -0.885492 137.234 39.9812)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                cx: "152.708",
                cy: "11.3542",
                rx: "1.5",
                ry: "1",
                transform: "rotate(15 152.708 11.3542)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform:
                  "matrix(0.965926 -0.258819 -0.258819 -0.965926 150.16 39.9833)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                cx: "142.5",
                cy: "12",
                rx: "1.5",
                ry: "1",
                transform: "rotate(180 142.5 12)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                cx: "146.708",
                cy: "8.35415",
                rx: "1.5",
                ry: "1",
                transform: "rotate(15 146.708 8.35415)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                rx: "1",
                ry: "0.75",
                transform: "matrix(1 0 0 -1 144 41.75)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("ellipse", {
                cx: "135.793",
                cy: "10.5826",
                rx: "1.5",
                ry: "1",
                transform: "rotate(-27.6879 135.793 10.5826)",
                stroke: "white",
                strokeWidth: "0.5",
              }),
              o.default.createElement("path", {
                d: "M2.8 25.544C1.968 25.544 1.29067 25.304 0.768 24.824C0.256 24.3333 0 23.672 0 22.84C0 21.7413 0.432 20.9467 1.296 20.456C1.712 20.2213 2.21333 20.104 2.8 20.104H14.128V22.2H3.328C2.74133 22.2 2.448 22.424 2.448 22.872C2.448 23.32 2.74133 23.544 3.328 23.544L11.808 23.56C12.64 23.56 13.312 23.8053 13.824 24.296C14.3467 24.7867 14.608 25.448 14.608 26.28C14.608 27.4 14.176 28.1947 13.312 28.664C12.9067 28.888 12.4053 29 11.808 29H0V26.904L11.28 26.92C11.8667 26.92 12.16 26.6907 12.16 26.232C12.16 25.784 11.8667 25.56 11.28 25.56L2.8 25.544Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M29.425 29H21.361C20.4223 29 19.745 28.7867 19.329 28.36C19.0623 28.0827 18.8863 27.768 18.801 27.416C18.737 27.1813 18.705 26.8187 18.705 26.328V22.2H17.105V20.104H18.705V16.552H21.377V20.104H29.425V22.2H21.377V25.672C21.377 26.1627 21.489 26.4987 21.713 26.68C21.8943 26.8293 22.1983 26.904 22.625 26.904H29.425V29Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M36.8809 26.904H46.1769V29H36.5289C35.1422 29 34.0809 28.6107 33.3449 27.832C32.6195 27.0427 32.2569 25.9493 32.2569 24.552C32.2569 23.1547 32.6195 22.0667 33.3449 21.288C34.0809 20.4987 35.1422 20.104 36.5289 20.104H46.1769V22.2H36.8809C36.3902 22.2 35.9849 22.3387 35.6649 22.616C35.5155 22.744 35.3235 23.0427 35.0889 23.512L35.0729 23.544H46.1769V25.544H35.0729L35.0889 25.592C35.3022 26.0507 35.4942 26.3493 35.6649 26.488C35.9849 26.7653 36.3902 26.904 36.8809 26.904Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M53.4002 29C51.3522 29 50.0349 28.168 49.4482 26.504C49.2243 25.864 49.1122 25.192 49.1122 24.488V20.072H52.0243V24.216C52.0243 24.9093 52.2376 25.4533 52.6642 25.848C53.0056 26.168 53.4963 26.328 54.1362 26.328H62.5042V29H53.4002Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M69.8177 29C67.7698 29 66.4524 28.168 65.8657 26.504C65.6417 25.864 65.5297 25.192 65.5297 24.488V20.072H68.4417V24.216C68.4417 24.9093 68.6551 25.4533 69.0817 25.848C69.4231 26.168 69.9137 26.328 70.5537 26.328H78.9218V29H69.8177Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M82.5553 22.2V20.104H93.2272C94.2832 20.104 95.1206 20.3813 95.7393 20.936C96.1233 21.2773 96.3846 21.6773 96.5233 22.136C96.6193 22.4773 96.6673 22.9573 96.6673 23.576V29H84.7473C83.8726 29 83.1846 28.76 82.6833 28.28C82.1819 27.8 81.9313 27.128 81.9313 26.264C81.9313 25.4 82.1819 24.7333 82.6833 24.264C83.1953 23.784 83.8833 23.544 84.7473 23.544H93.9953V23.464C93.9953 22.8027 93.7499 22.4027 93.2593 22.264C93.1099 22.2213 92.8806 22.2 92.5713 22.2H82.5553ZM93.9953 26.904V25.544H85.4512C84.8859 25.544 84.6032 25.7733 84.6032 26.232C84.6032 26.68 84.8859 26.904 85.4512 26.904H93.9953Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M110.182 23.24C110.182 22.9413 110.087 22.7067 109.895 22.536C109.756 22.408 109.543 22.344 109.255 22.344L102.614 22.328V29H99.9425V20.104L109.702 20.072C110.748 20.072 111.548 20.3653 112.103 20.952C112.604 21.4853 112.854 22.0987 112.854 22.792V23.72H110.182V23.24Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M185.232 30H174V17.552H176.672V21.104H185.232C187.045 21.104 188.299 21.776 188.992 23.12C189.333 23.7813 189.504 24.592 189.504 25.552C189.504 27.4827 188.843 28.7947 187.52 29.488C186.869 29.8293 186.107 30 185.232 30ZM184.88 23.328H176.672V27.776H184.88C185.499 27.776 185.968 27.552 186.288 27.104C186.565 26.72 186.704 26.2027 186.704 25.552C186.704 24.9013 186.565 24.384 186.288 24C185.968 23.552 185.499 23.328 184.88 23.328Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M194.219 26.832C194.219 27.4613 194.528 27.776 195.147 27.776H203.243V21.104H205.915V30H194.715C193.627 30 192.827 29.7173 192.315 29.152C191.803 28.5867 191.547 27.9627 191.547 27.28V21.104H194.219V26.832Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M218.756 24.24C218.756 23.9413 218.66 23.7067 218.468 23.536C218.329 23.408 218.116 23.344 217.828 23.344L211.188 23.328V30H208.516V21.104L218.276 21.072C219.321 21.072 220.121 21.3653 220.676 21.952C221.177 22.4853 221.428 23.0987 221.428 23.792V24.72H218.756V24.24Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M240.311 21.12V30.256C240.311 31.3013 240.007 32.1173 239.399 32.704C238.791 33.2907 238.012 33.584 237.063 33.584L224.695 33.552V31.472L236.583 31.488C236.999 31.488 237.287 31.3653 237.447 31.12C237.575 30.928 237.639 30.6133 237.639 30.176V30H227.991C226.604 30 225.543 29.6107 224.807 28.832C224.081 28.0427 223.719 26.9493 223.719 25.552C223.719 24.1547 224.081 23.0667 224.807 22.288C225.543 21.4987 226.604 21.104 227.991 21.104L240.311 21.12ZM228.343 23.328C227.724 23.328 227.255 23.552 226.935 24C226.657 24.384 226.519 24.9013 226.519 25.552C226.519 26.2027 226.657 26.72 226.935 27.104C227.244 27.552 227.713 27.776 228.343 27.776L237.639 27.744V23.344L228.343 23.328Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M247.608 27.904H256.904V30H247.256C245.87 30 244.808 29.6107 244.072 28.832C243.347 28.0427 242.984 26.9493 242.984 25.552C242.984 24.1547 243.347 23.0667 244.072 22.288C244.808 21.4987 245.87 21.104 247.256 21.104H256.904V23.2H247.608C247.118 23.2 246.712 23.3387 246.392 23.616C246.243 23.744 246.051 24.0427 245.816 24.512L245.8 24.544H256.904V26.544H245.8L245.816 26.592C246.03 27.0507 246.222 27.3493 246.392 27.488C246.712 27.7653 247.118 27.904 247.608 27.904Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M269.584 24.24C269.584 23.9413 269.488 23.7067 269.296 23.536C269.157 23.408 268.944 23.344 268.656 23.344L262.016 23.328V30H259.344V21.104L269.104 21.072C270.149 21.072 270.949 21.3653 271.504 21.952C272.005 22.4853 272.256 23.0987 272.256 23.792V24.72H269.584V24.24Z",
                fill: "white",
              }),
              o.default.createElement("path", {
                d: "M277.347 26.544C276.515 26.544 275.838 26.304 275.315 25.824C274.803 25.3333 274.547 24.672 274.547 23.84C274.547 22.7413 274.979 21.9467 275.843 21.456C276.259 21.2213 276.76 21.104 277.347 21.104H288.675V23.2H277.875C277.288 23.2 276.995 23.424 276.995 23.872C276.995 24.32 277.288 24.544 277.875 24.544L286.355 24.56C287.187 24.56 287.859 24.8053 288.371 25.296C288.894 25.7867 289.155 26.448 289.155 27.28C289.155 28.4 288.723 29.1947 287.859 29.664C287.454 29.888 286.952 30 286.355 30H274.547V27.904L285.827 27.92C286.414 27.92 286.707 27.6907 286.707 27.232C286.707 26.784 286.414 26.56 285.827 26.56L277.347 26.544Z",
                fill: "white",
              }),
              o.default.createElement(
                "defs",
                null,
                o.default.createElement(
                  "filter",
                  {
                    id: "filter0_f",
                    x: "122.012",
                    y: "0.5",
                    width: "43.3185",
                    height: "49",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter1_f",
                    x: "122.012",
                    y: "0.5",
                    width: "43.3185",
                    height: "49",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter2_f",
                    x: "119.581",
                    y: "20",
                    width: "48.792",
                    height: "17.013",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter3_f",
                    x: "119.581",
                    y: "20",
                    width: "48.792",
                    height: "17.013",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter4_f",
                    x: "119.5",
                    y: "14.5",
                    width: "49.0001",
                    height: "12",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter5_f",
                    x: "119.5",
                    y: "14.5",
                    width: "49.0001",
                    height: "12",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter6_f",
                    x: "129.885",
                    y: "2.81274",
                    width: "28.7952",
                    height: "44.1873",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                ),
                o.default.createElement(
                  "filter",
                  {
                    id: "filter7_f",
                    x: "129.885",
                    y: "2.81274",
                    width: "28.7952",
                    height: "44.1873",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                  },
                  o.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  o.default.createElement("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  o.default.createElement("feGaussianBlur", {
                    stdDeviation: "2",
                    result: "effect1_foregroundBlur",
                  })
                )
              )
            );
          };
        (t.Logo = a), (a.displayName = "Logo");
      },
      8218: function (e, t, n) {
        "use strict";
        var r = n(862),
          o = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PasswordInput = void 0),
          n(5416);
        var a = o(n(3038)),
          i = r(n(2791)),
          u = n(8336),
          l = function (e) {
            var t = e.value,
              n = e.onChange,
              r = e.name,
              o = e.size,
              l = (0, i.useState)(!1),
              c = (0, a.default)(l, 2),
              s = c[0],
              f = c[1],
              d = (0, i.useState)(!1),
              p = (0, a.default)(d, 2),
              h = p[0],
              g = p[1],
              v = (0, i.useRef)(null);
            return i.default.createElement(u.Input, {
              type: s ? "text" : "password",
              placeholder: "\u041f\u0430\u0440\u043e\u043b\u044c",
              onChange: n,
              icon: s ? "HideIcon" : "ShowIcon",
              value: t,
              ref: v,
              onBlur: function (e) {
                e.target.value
                  ? (function (e) {
                      g(e.length < 6);
                    })(e.target.value)
                  : g(!1),
                  f(!1);
              },
              onFocus: function () {
                g(!1);
              },
              name: r,
              error: h,
              onIconClick: function () {
                f(!0),
                  setTimeout(function () {
                    var e;
                    return null === (e = v.current) || void 0 === e
                      ? void 0
                      : e.focus();
                  }, 0);
              },
              errorText:
                "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
              size: "small" === o ? "small" : "default",
            });
          };
        (t.PasswordInput = l), (l.displayName = "PasswordInput");
      },
      335: function (e, t, n) {
        "use strict";
        var r = n(5318);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Tab = void 0),
          n(4778);
        var o = r(n(2791)),
          a = r(n(9056)),
          i = function (e) {
            var t = e.active,
              n = e.value,
              r = e.children,
              i = e.onClick,
              u = ""
                .concat(a.default.tab, " ")
                .concat(t ? a.default.tab_type_current : ""),
              l = o.default.useCallback(
                function () {
                  "function" === typeof i && i(n);
                },
                [i, n]
              );
            return o.default.createElement(
              "div",
              {
                className: "".concat(u, " pt-4 pr-10 pb-4 pl-10 noselect"),
                onClick: l,
              },
              o.default.createElement(
                "span",
                { className: "text text_type_main-default" },
                r
              )
            );
          };
        (t.Tab = i), (i.displayName = "Tab");
      },
      8182: function (e, t, n) {
        "use strict";
        function r(e) {
          var t,
            n,
            o = "";
          if ("string" === typeof e || "number" === typeof e) o += e;
          else if ("object" === typeof e)
            if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
            else for (t in e) e[t] && (o && (o += " "), (o += t));
          return o;
        }
        function o() {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
          return o;
        }
        n.r(t),
          n.d(t, {
            default: function () {
              return o;
            },
          });
      },
      6724: function (e, t, n) {
        var r = n(6840),
          o = n(9218),
          a = n(1772),
          i = r.TypeError;
        e.exports = function (e) {
          if (o(e)) return e;
          throw i(a(e) + " is not a function");
        };
      },
      5884: function (e, t, n) {
        var r = n(6840),
          o = n(3931),
          a = r.String,
          i = r.TypeError;
        e.exports = function (e) {
          if (o(e)) return e;
          throw i(a(e) + " is not an object");
        };
      },
      8129: function (e, t, n) {
        "use strict";
        var r = n(5880).forEach,
          o = n(2241)("forEach");
        e.exports = o
          ? [].forEach
          : function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
      },
      488: function (e, t, n) {
        var r = n(5770),
          o = n(1823),
          a = n(3385),
          i = function (e) {
            return function (t, n, i) {
              var u,
                l = r(t),
                c = a(l),
                s = o(i, c);
              if (e && n != n) {
                for (; c > s; ) if ((u = l[s++]) != u) return !0;
              } else
                for (; c > s; s++)
                  if ((e || s in l) && l[s] === n) return e || s || 0;
              return !e && -1;
            };
          };
        e.exports = { includes: i(!0), indexOf: i(!1) };
      },
      5880: function (e, t, n) {
        var r = n(5851),
          o = n(4932),
          a = n(1036),
          i = n(8385),
          u = n(3385),
          l = n(5491),
          c = o([].push),
          s = function (e) {
            var t = 1 == e,
              n = 2 == e,
              o = 3 == e,
              s = 4 == e,
              f = 6 == e,
              d = 7 == e,
              p = 5 == e || f;
            return function (h, g, v, m) {
              for (
                var y,
                  b,
                  w = i(h),
                  C = a(w),
                  k = r(g, v),
                  E = u(C),
                  x = 0,
                  S = m || l,
                  _ = t ? S(h, E) : n || d ? S(h, 0) : void 0;
                E > x;
                x++
              )
                if ((p || x in C) && ((b = k((y = C[x]), x, w)), e))
                  if (t) _[x] = b;
                  else if (b)
                    switch (e) {
                      case 3:
                        return !0;
                      case 5:
                        return y;
                      case 6:
                        return x;
                      case 2:
                        c(_, y);
                    }
                  else
                    switch (e) {
                      case 4:
                        return !1;
                      case 7:
                        c(_, y);
                    }
              return f ? -1 : o || s ? s : _;
            };
          };
        e.exports = {
          forEach: s(0),
          map: s(1),
          filter: s(2),
          some: s(3),
          every: s(4),
          find: s(5),
          findIndex: s(6),
          filterReject: s(7),
        };
      },
      1379: function (e, t, n) {
        var r = n(2837),
          o = n(5028),
          a = n(5372),
          i = o("species");
        e.exports = function (e) {
          return (
            a >= 51 ||
            !r(function () {
              var t = [];
              return (
                ((t.constructor = {})[i] = function () {
                  return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
              );
            })
          );
        };
      },
      2241: function (e, t, n) {
        "use strict";
        var r = n(2837);
        e.exports = function (e, t) {
          var n = [][e];
          return (
            !!n &&
            r(function () {
              n.call(
                null,
                t ||
                  function () {
                    throw 1;
                  },
                1
              );
            })
          );
        };
      },
      9026: function (e, t, n) {
        var r = n(6840),
          o = n(1941),
          a = n(1219),
          i = n(3931),
          u = n(5028)("species"),
          l = r.Array;
        e.exports = function (e) {
          var t;
          return (
            o(e) &&
              ((t = e.constructor),
              ((a(t) && (t === l || o(t.prototype))) ||
                (i(t) && null === (t = t[u]))) &&
                (t = void 0)),
            void 0 === t ? l : t
          );
        };
      },
      5491: function (e, t, n) {
        var r = n(9026);
        e.exports = function (e, t) {
          return new (r(e))(0 === t ? 0 : t);
        };
      },
      2933: function (e, t, n) {
        var r = n(4932),
          o = r({}.toString),
          a = r("".slice);
        e.exports = function (e) {
          return a(o(e), 8, -1);
        };
      },
      7205: function (e, t, n) {
        var r = n(6840),
          o = n(6042),
          a = n(9218),
          i = n(2933),
          u = n(5028)("toStringTag"),
          l = r.Object,
          c =
            "Arguments" ==
            i(
              (function () {
                return arguments;
              })()
            );
        e.exports = o
          ? i
          : function (e) {
              var t, n, r;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (n) {}
                  })((t = l(e)), u))
                ? n
                : c
                ? i(t)
                : "Object" == (r = i(t)) && a(t.callee)
                ? "Arguments"
                : r;
            };
      },
      189: function (e, t, n) {
        var r = n(3013),
          o = n(7273),
          a = n(2573),
          i = n(1592);
        e.exports = function (e, t, n) {
          for (var u = o(t), l = i.f, c = a.f, s = 0; s < u.length; s++) {
            var f = u[s];
            r(e, f) || (n && r(n, f)) || l(e, f, c(t, f));
          }
        };
      },
      3873: function (e, t, n) {
        var r = n(1196),
          o = n(1592),
          a = n(2037);
        e.exports = r
          ? function (e, t, n) {
              return o.f(e, t, a(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      2037: function (e) {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      3055: function (e, t, n) {
        "use strict";
        var r = n(4655),
          o = n(1592),
          a = n(2037);
        e.exports = function (e, t, n) {
          var i = r(t);
          i in e ? o.f(e, i, a(0, n)) : (e[i] = n);
        };
      },
      1196: function (e, t, n) {
        var r = n(2837);
        e.exports = !r(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      937: function (e, t, n) {
        var r = n(6840),
          o = n(3931),
          a = r.document,
          i = o(a) && o(a.createElement);
        e.exports = function (e) {
          return i ? a.createElement(e) : {};
        };
      },
      650: function (e) {
        e.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0,
        };
      },
      2752: function (e, t, n) {
        var r = n(937)("span").classList,
          o = r && r.constructor && r.constructor.prototype;
        e.exports = o === Object.prototype ? void 0 : o;
      },
      4839: function (e, t, n) {
        var r = n(1240);
        e.exports = r("navigator", "userAgent") || "";
      },
      5372: function (e, t, n) {
        var r,
          o,
          a = n(6840),
          i = n(4839),
          u = a.process,
          l = a.Deno,
          c = (u && u.versions) || (l && l.version),
          s = c && c.v8;
        s && (o = (r = s.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
          !o &&
            i &&
            (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
            (r = i.match(/Chrome\/(\d+)/)) &&
            (o = +r[1]),
          (e.exports = o);
      },
      2080: function (e) {
        e.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      7768: function (e, t, n) {
        var r = n(6840),
          o = n(2573).f,
          a = n(3873),
          i = n(2422),
          u = n(9870),
          l = n(189),
          c = n(6673);
        e.exports = function (e, t) {
          var n,
            s,
            f,
            d,
            p,
            h = e.target,
            g = e.global,
            v = e.stat;
          if ((n = g ? r : v ? r[h] || u(h, {}) : (r[h] || {}).prototype))
            for (s in t) {
              if (
                ((d = t[s]),
                (f = e.noTargetGet ? (p = o(n, s)) && p.value : n[s]),
                !c(g ? s : h + (v ? "." : "#") + s, e.forced) && void 0 !== f)
              ) {
                if (typeof d == typeof f) continue;
                l(d, f);
              }
              (e.sham || (f && f.sham)) && a(d, "sham", !0), i(n, s, d, e);
            }
        };
      },
      2837: function (e) {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (t) {
            return !0;
          }
        };
      },
      5851: function (e, t, n) {
        var r = n(4932),
          o = n(6724),
          a = r(r.bind);
        e.exports = function (e, t) {
          return (
            o(e),
            void 0 === t
              ? e
              : a
              ? a(e, t)
              : function () {
                  return e.apply(t, arguments);
                }
          );
        };
      },
      8513: function (e) {
        var t = Function.prototype.call;
        e.exports = t.bind
          ? t.bind(t)
          : function () {
              return t.apply(t, arguments);
            };
      },
      3211: function (e, t, n) {
        var r = n(1196),
          o = n(3013),
          a = Function.prototype,
          i = r && Object.getOwnPropertyDescriptor,
          u = o(a, "name"),
          l = u && "something" === function () {}.name,
          c = u && (!r || (r && i(a, "name").configurable));
        e.exports = { EXISTS: u, PROPER: l, CONFIGURABLE: c };
      },
      4932: function (e) {
        var t = Function.prototype,
          n = t.bind,
          r = t.call,
          o = n && n.bind(r);
        e.exports = n
          ? function (e) {
              return e && o(r, e);
            }
          : function (e) {
              return (
                e &&
                function () {
                  return r.apply(e, arguments);
                }
              );
            };
      },
      1240: function (e, t, n) {
        var r = n(6840),
          o = n(9218),
          a = function (e) {
            return o(e) ? e : void 0;
          };
        e.exports = function (e, t) {
          return arguments.length < 2 ? a(r[e]) : r[e] && r[e][t];
        };
      },
      3863: function (e, t, n) {
        var r = n(6724);
        e.exports = function (e, t) {
          var n = e[t];
          return null == n ? void 0 : r(n);
        };
      },
      6840: function (e, t, n) {
        var r = function (e) {
          return e && e.Math == Math && e;
        };
        e.exports =
          r("object" == typeof globalThis && globalThis) ||
          r("object" == typeof window && window) ||
          r("object" == typeof self && self) ||
          r("object" == typeof n.g && n.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      3013: function (e, t, n) {
        var r = n(4932),
          o = n(8385),
          a = r({}.hasOwnProperty);
        e.exports =
          Object.hasOwn ||
          function (e, t) {
            return a(o(e), t);
          };
      },
      6196: function (e) {
        e.exports = {};
      },
      6707: function (e, t, n) {
        var r = n(1196),
          o = n(2837),
          a = n(937);
        e.exports =
          !r &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(a("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      1036: function (e, t, n) {
        var r = n(6840),
          o = n(4932),
          a = n(2837),
          i = n(2933),
          u = r.Object,
          l = o("".split);
        e.exports = a(function () {
          return !u("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == i(e) ? l(e, "") : u(e);
            }
          : u;
      },
      8589: function (e, t, n) {
        var r = n(4932),
          o = n(9218),
          a = n(4460),
          i = r(Function.toString);
        o(a.inspectSource) ||
          (a.inspectSource = function (e) {
            return i(e);
          }),
          (e.exports = a.inspectSource);
      },
      9671: function (e, t, n) {
        var r,
          o,
          a,
          i = n(5242),
          u = n(6840),
          l = n(4932),
          c = n(3931),
          s = n(3873),
          f = n(3013),
          d = n(4460),
          p = n(9378),
          h = n(6196),
          g = "Object already initialized",
          v = u.TypeError,
          m = u.WeakMap;
        if (i || d.state) {
          var y = d.state || (d.state = new m()),
            b = l(y.get),
            w = l(y.has),
            C = l(y.set);
          (r = function (e, t) {
            if (w(y, e)) throw new v(g);
            return (t.facade = e), C(y, e, t), t;
          }),
            (o = function (e) {
              return b(y, e) || {};
            }),
            (a = function (e) {
              return w(y, e);
            });
        } else {
          var k = p("state");
          (h[k] = !0),
            (r = function (e, t) {
              if (f(e, k)) throw new v(g);
              return (t.facade = e), s(e, k, t), t;
            }),
            (o = function (e) {
              return f(e, k) ? e[k] : {};
            }),
            (a = function (e) {
              return f(e, k);
            });
        }
        e.exports = {
          set: r,
          get: o,
          has: a,
          enforce: function (e) {
            return a(e) ? o(e) : r(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!c(t) || (n = o(t)).type !== e)
                throw v("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        };
      },
      1941: function (e, t, n) {
        var r = n(2933);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == r(e);
          };
      },
      9218: function (e) {
        e.exports = function (e) {
          return "function" == typeof e;
        };
      },
      1219: function (e, t, n) {
        var r = n(4932),
          o = n(2837),
          a = n(9218),
          i = n(7205),
          u = n(1240),
          l = n(8589),
          c = function () {},
          s = [],
          f = u("Reflect", "construct"),
          d = /^\s*(?:class|function)\b/,
          p = r(d.exec),
          h = !d.exec(c),
          g = function (e) {
            if (!a(e)) return !1;
            try {
              return f(c, s, e), !0;
            } catch (t) {
              return !1;
            }
          },
          v = function (e) {
            if (!a(e)) return !1;
            switch (i(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!p(d, l(e));
            } catch (t) {
              return !0;
            }
          };
        (v.sham = !0),
          (e.exports =
            !f ||
            o(function () {
              var e;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  e = !0;
                }) ||
                e
              );
            })
              ? v
              : g);
      },
      6673: function (e, t, n) {
        var r = n(2837),
          o = n(9218),
          a = /#|\.prototype\./,
          i = function (e, t) {
            var n = l[u(e)];
            return n == s || (n != c && (o(t) ? r(t) : !!t));
          },
          u = (i.normalize = function (e) {
            return String(e).replace(a, ".").toLowerCase();
          }),
          l = (i.data = {}),
          c = (i.NATIVE = "N"),
          s = (i.POLYFILL = "P");
        e.exports = i;
      },
      3931: function (e, t, n) {
        var r = n(9218);
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : r(e);
        };
      },
      3608: function (e) {
        e.exports = !1;
      },
      8287: function (e, t, n) {
        var r = n(6840),
          o = n(1240),
          a = n(9218),
          i = n(8946),
          u = n(7611),
          l = r.Object;
        e.exports = u
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              var t = o("Symbol");
              return a(t) && i(t.prototype, l(e));
            };
      },
      3385: function (e, t, n) {
        var r = n(2347);
        e.exports = function (e) {
          return r(e.length);
        };
      },
      3991: function (e, t, n) {
        var r = n(5372),
          o = n(2837);
        e.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var e = Symbol();
            return (
              !String(e) ||
              !(Object(e) instanceof Symbol) ||
              (!Symbol.sham && r && r < 41)
            );
          });
      },
      5242: function (e, t, n) {
        var r = n(6840),
          o = n(9218),
          a = n(8589),
          i = r.WeakMap;
        e.exports = o(i) && /native code/.test(a(i));
      },
      1592: function (e, t, n) {
        var r = n(6840),
          o = n(1196),
          a = n(6707),
          i = n(5884),
          u = n(4655),
          l = r.TypeError,
          c = Object.defineProperty;
        t.f = o
          ? c
          : function (e, t, n) {
              if ((i(e), (t = u(t)), i(n), a))
                try {
                  return c(e, t, n);
                } catch (r) {}
              if ("get" in n || "set" in n) throw l("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      2573: function (e, t, n) {
        var r = n(1196),
          o = n(8513),
          a = n(8306),
          i = n(2037),
          u = n(5770),
          l = n(4655),
          c = n(3013),
          s = n(6707),
          f = Object.getOwnPropertyDescriptor;
        t.f = r
          ? f
          : function (e, t) {
              if (((e = u(e)), (t = l(t)), s))
                try {
                  return f(e, t);
                } catch (n) {}
              if (c(e, t)) return i(!o(a.f, e, t), e[t]);
            };
      },
      3772: function (e, t, n) {
        var r = n(3080),
          o = n(2080).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, o);
          };
      },
      400: function (e, t) {
        t.f = Object.getOwnPropertySymbols;
      },
      8946: function (e, t, n) {
        var r = n(4932);
        e.exports = r({}.isPrototypeOf);
      },
      3080: function (e, t, n) {
        var r = n(4932),
          o = n(3013),
          a = n(5770),
          i = n(488).indexOf,
          u = n(6196),
          l = r([].push);
        e.exports = function (e, t) {
          var n,
            r = a(e),
            c = 0,
            s = [];
          for (n in r) !o(u, n) && o(r, n) && l(s, n);
          for (; t.length > c; ) o(r, (n = t[c++])) && (~i(s, n) || l(s, n));
          return s;
        };
      },
      8306: function (e, t) {
        "use strict";
        var n = {}.propertyIsEnumerable,
          r = Object.getOwnPropertyDescriptor,
          o = r && !n.call({ 1: 2 }, 1);
        t.f = o
          ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            }
          : n;
      },
      7772: function (e, t, n) {
        var r = n(6840),
          o = n(8513),
          a = n(9218),
          i = n(3931),
          u = r.TypeError;
        e.exports = function (e, t) {
          var n, r;
          if ("string" === t && a((n = e.toString)) && !i((r = o(n, e))))
            return r;
          if (a((n = e.valueOf)) && !i((r = o(n, e)))) return r;
          if ("string" !== t && a((n = e.toString)) && !i((r = o(n, e))))
            return r;
          throw u("Can't convert object to primitive value");
        };
      },
      7273: function (e, t, n) {
        var r = n(1240),
          o = n(4932),
          a = n(3772),
          i = n(400),
          u = n(5884),
          l = o([].concat);
        e.exports =
          r("Reflect", "ownKeys") ||
          function (e) {
            var t = a.f(u(e)),
              n = i.f;
            return n ? l(t, n(e)) : t;
          };
      },
      2422: function (e, t, n) {
        var r = n(6840),
          o = n(9218),
          a = n(3013),
          i = n(3873),
          u = n(9870),
          l = n(8589),
          c = n(9671),
          s = n(3211).CONFIGURABLE,
          f = c.get,
          d = c.enforce,
          p = String(String).split("String");
        (e.exports = function (e, t, n, l) {
          var c,
            f = !!l && !!l.unsafe,
            h = !!l && !!l.enumerable,
            g = !!l && !!l.noTargetGet,
            v = l && void 0 !== l.name ? l.name : t;
          o(n) &&
            ("Symbol(" === String(v).slice(0, 7) &&
              (v = "[" + String(v).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!a(n, "name") || (s && n.name !== v)) && i(n, "name", v),
            (c = d(n)).source ||
              (c.source = p.join("string" == typeof v ? v : ""))),
            e !== r
              ? (f ? !g && e[t] && (h = !0) : delete e[t],
                h ? (e[t] = n) : i(e, t, n))
              : h
              ? (e[t] = n)
              : u(t, n);
        })(Function.prototype, "toString", function () {
          return (o(this) && f(this).source) || l(this);
        });
      },
      2244: function (e, t, n) {
        var r = n(6840).TypeError;
        e.exports = function (e) {
          if (void 0 == e) throw r("Can't call method on " + e);
          return e;
        };
      },
      9870: function (e, t, n) {
        var r = n(6840),
          o = Object.defineProperty;
        e.exports = function (e, t) {
          try {
            o(r, e, { value: t, configurable: !0, writable: !0 });
          } catch (n) {
            r[e] = t;
          }
          return t;
        };
      },
      9378: function (e, t, n) {
        var r = n(1778),
          o = n(6520),
          a = r("keys");
        e.exports = function (e) {
          return a[e] || (a[e] = o(e));
        };
      },
      4460: function (e, t, n) {
        var r = n(6840),
          o = n(9870),
          a = "__core-js_shared__",
          i = r[a] || o(a, {});
        e.exports = i;
      },
      1778: function (e, t, n) {
        var r = n(3608),
          o = n(4460);
        (e.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.20.0",
          mode: r ? "pure" : "global",
          copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)",
        });
      },
      1823: function (e, t, n) {
        var r = n(2128),
          o = Math.max,
          a = Math.min;
        e.exports = function (e, t) {
          var n = r(e);
          return n < 0 ? o(n + t, 0) : a(n, t);
        };
      },
      5770: function (e, t, n) {
        var r = n(1036),
          o = n(2244);
        e.exports = function (e) {
          return r(o(e));
        };
      },
      2128: function (e) {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          var r = +e;
          return r !== r || 0 === r ? 0 : (r > 0 ? n : t)(r);
        };
      },
      2347: function (e, t, n) {
        var r = n(2128),
          o = Math.min;
        e.exports = function (e) {
          return e > 0 ? o(r(e), 9007199254740991) : 0;
        };
      },
      8385: function (e, t, n) {
        var r = n(6840),
          o = n(2244),
          a = r.Object;
        e.exports = function (e) {
          return a(o(e));
        };
      },
      6740: function (e, t, n) {
        var r = n(6840),
          o = n(8513),
          a = n(3931),
          i = n(8287),
          u = n(3863),
          l = n(7772),
          c = n(5028),
          s = r.TypeError,
          f = c("toPrimitive");
        e.exports = function (e, t) {
          if (!a(e) || i(e)) return e;
          var n,
            r = u(e, f);
          if (r) {
            if (
              (void 0 === t && (t = "default"), (n = o(r, e, t)), !a(n) || i(n))
            )
              return n;
            throw s("Can't convert object to primitive value");
          }
          return void 0 === t && (t = "number"), l(e, t);
        };
      },
      4655: function (e, t, n) {
        var r = n(6740),
          o = n(8287);
        e.exports = function (e) {
          var t = r(e, "string");
          return o(t) ? t : t + "";
        };
      },
      6042: function (e, t, n) {
        var r = {};
        (r[n(5028)("toStringTag")] = "z"),
          (e.exports = "[object z]" === String(r));
      },
      1772: function (e, t, n) {
        var r = n(6840).String;
        e.exports = function (e) {
          try {
            return r(e);
          } catch (t) {
            return "Object";
          }
        };
      },
      6520: function (e, t, n) {
        var r = n(4932),
          o = 0,
          a = Math.random(),
          i = r((1).toString);
        e.exports = function (e) {
          return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++o + a, 36);
        };
      },
      7611: function (e, t, n) {
        var r = n(3991);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      5028: function (e, t, n) {
        var r = n(6840),
          o = n(1778),
          a = n(3013),
          i = n(6520),
          u = n(3991),
          l = n(7611),
          c = o("wks"),
          s = r.Symbol,
          f = s && s.for,
          d = l ? s : (s && s.withoutSetter) || i;
        e.exports = function (e) {
          if (!a(c, e) || (!u && "string" != typeof c[e])) {
            var t = "Symbol." + e;
            u && a(s, e) ? (c[e] = s[e]) : (c[e] = l && f ? f(t) : d(t));
          }
          return c[e];
        };
      },
      4778: function (e, t, n) {
        "use strict";
        var r = n(7768),
          o = n(6840),
          a = n(2837),
          i = n(1941),
          u = n(3931),
          l = n(8385),
          c = n(3385),
          s = n(3055),
          f = n(5491),
          d = n(1379),
          p = n(5028),
          h = n(5372),
          g = p("isConcatSpreadable"),
          v = 9007199254740991,
          m = "Maximum allowed index exceeded",
          y = o.TypeError,
          b =
            h >= 51 ||
            !a(function () {
              var e = [];
              return (e[g] = !1), e.concat()[0] !== e;
            }),
          w = d("concat"),
          C = function (e) {
            if (!u(e)) return !1;
            var t = e[g];
            return void 0 !== t ? !!t : i(e);
          };
        r(
          { target: "Array", proto: !0, forced: !b || !w },
          {
            concat: function (e) {
              var t,
                n,
                r,
                o,
                a,
                i = l(this),
                u = f(i, 0),
                d = 0;
              for (t = -1, r = arguments.length; t < r; t++)
                if (C((a = -1 === t ? i : arguments[t]))) {
                  if (d + (o = c(a)) > v) throw y(m);
                  for (n = 0; n < o; n++, d++) n in a && s(u, d, a[n]);
                } else {
                  if (d >= v) throw y(m);
                  s(u, d++, a);
                }
              return (u.length = d), u;
            },
          }
        );
      },
      5416: function (e, t, n) {
        var r = n(1196),
          o = n(3211).EXISTS,
          a = n(4932),
          i = n(1592).f,
          u = Function.prototype,
          l = a(u.toString),
          c =
            /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          s = a(c.exec);
        r &&
          !o &&
          i(u, "name", {
            configurable: !0,
            get: function () {
              try {
                return s(c, l(this))[1];
              } catch (e) {
                return "";
              }
            },
          });
      },
      2583: function (e, t, n) {
        var r = n(6840),
          o = n(650),
          a = n(2752),
          i = n(8129),
          u = n(3873),
          l = function (e) {
            if (e && e.forEach !== i)
              try {
                u(e, "forEach", i);
              } catch (t) {
                e.forEach = i;
              }
          };
        for (var c in o) o[c] && l(r[c] && r[c].prototype);
        l(a);
      },
      8262: function (e) {
        "use strict";
        e.exports = function e(t, n) {
          if (t === n) return !0;
          if (t && n && "object" == typeof t && "object" == typeof n) {
            if (t.constructor !== n.constructor) return !1;
            var r, o, a;
            if (Array.isArray(t)) {
              if ((r = t.length) != n.length) return !1;
              for (o = r; 0 !== o--; ) if (!e(t[o], n[o])) return !1;
              return !0;
            }
            if (t.constructor === RegExp)
              return t.source === n.source && t.flags === n.flags;
            if (t.valueOf !== Object.prototype.valueOf)
              return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString)
              return t.toString() === n.toString();
            if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length)
              return !1;
            for (o = r; 0 !== o--; )
              if (!Object.prototype.hasOwnProperty.call(n, a[o])) return !1;
            for (o = r; 0 !== o--; ) {
              var i = a[o];
              if (!e(t[i], n[i])) return !1;
            }
            return !0;
          }
          return t !== t && n !== n;
        };
      },
      2110: function (e, t, n) {
        "use strict";
        var r = n(7441),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          u = {};
        function l(e) {
          return r.isMemo(e) ? i : u[e.$$typeof] || o;
        }
        (u[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (u[r.Memo] = i);
        var c = Object.defineProperty,
          s = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var i = s(n);
            f && (i = i.concat(f(n)));
            for (var u = l(t), g = l(n), v = 0; v < i.length; ++v) {
              var m = i[v];
              if (!a[m] && (!r || !r[m]) && (!g || !g[m]) && (!u || !u[m])) {
                var y = d(n, m);
                try {
                  c(t, m, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      1172: function (e, t) {
        "use strict";
        function n(e) {
          return "object" !== typeof e || "toString" in e
            ? e
            : Object.prototype.toString.call(e).slice(8, -1);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = "object" === typeof process && !0;
        function o(e, t) {
          if (!e) {
            if (r) throw new Error("Invariant failed");
            throw new Error(t());
          }
        }
        t.invariant = o;
        var a = Object.prototype.hasOwnProperty,
          i = Array.prototype.splice,
          u = Object.prototype.toString;
        function l(e) {
          return u.call(e).slice(8, -1);
        }
        var c =
            Object.assign ||
            function (e, t) {
              return (
                s(t).forEach(function (n) {
                  a.call(t, n) && (e[n] = t[n]);
                }),
                e
              );
            },
          s =
            "function" === typeof Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
                }
              : function (e) {
                  return Object.keys(e);
                };
        function f(e) {
          return Array.isArray(e)
            ? c(e.constructor(e.length), e)
            : "Map" === l(e)
            ? new Map(e)
            : "Set" === l(e)
            ? new Set(e)
            : e && "object" === typeof e
            ? c(Object.create(Object.getPrototypeOf(e)), e)
            : e;
        }
        var d = (function () {
          function e() {
            (this.commands = c({}, p)),
              (this.update = this.update.bind(this)),
              (this.update.extend = this.extend = this.extend.bind(this)),
              (this.update.isEquals = function (e, t) {
                return e === t;
              }),
              (this.update.newContext = function () {
                return new e().update;
              });
          }
          return (
            Object.defineProperty(e.prototype, "isEquals", {
              get: function () {
                return this.update.isEquals;
              },
              set: function (e) {
                this.update.isEquals = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.extend = function (e, t) {
              this.commands[e] = t;
            }),
            (e.prototype.update = function (e, t) {
              var n = this,
                r = "function" === typeof t ? { $apply: t } : t;
              (Array.isArray(e) && Array.isArray(r)) ||
                o(!Array.isArray(r), function () {
                  return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.";
                }),
                o("object" === typeof r && null !== r, function () {
                  return (
                    "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: " +
                    Object.keys(n.commands).join(", ") +
                    "."
                  );
                });
              var i = e;
              return (
                s(r).forEach(function (t) {
                  if (a.call(n.commands, t)) {
                    var o = e === i;
                    (i = n.commands[t](r[t], i, r, e)),
                      o && n.isEquals(i, e) && (i = e);
                  } else {
                    var u =
                        "Map" === l(e)
                          ? n.update(e.get(t), r[t])
                          : n.update(e[t], r[t]),
                      c = "Map" === l(i) ? i.get(t) : i[t];
                    (n.isEquals(u, c) &&
                      ("undefined" !== typeof u || a.call(e, t))) ||
                      (i === e && (i = f(e)),
                      "Map" === l(i) ? i.set(t, u) : (i[t] = u));
                  }
                }),
                i
              );
            }),
            e
          );
        })();
        t.Context = d;
        var p = {
            $push: function (e, t, n) {
              return g(t, n, "$push"), e.length ? t.concat(e) : t;
            },
            $unshift: function (e, t, n) {
              return g(t, n, "$unshift"), e.length ? e.concat(t) : t;
            },
            $splice: function (e, t, r, a) {
              return (
                (function (e, t) {
                  o(Array.isArray(e), function () {
                    return (
                      "Expected $splice target to be an array; got " + n(e)
                    );
                  }),
                    m(t.$splice);
                })(t, r),
                e.forEach(function (e) {
                  m(e), t === a && e.length && (t = f(a)), i.apply(t, e);
                }),
                t
              );
            },
            $set: function (e, t, n) {
              return (
                (function (e) {
                  o(1 === Object.keys(e).length, function () {
                    return "Cannot have more than one key in an object with $set";
                  });
                })(n),
                e
              );
            },
            $toggle: function (e, t) {
              v(e, "$toggle");
              var n = e.length ? f(t) : t;
              return (
                e.forEach(function (e) {
                  n[e] = !t[e];
                }),
                n
              );
            },
            $unset: function (e, t, n, r) {
              return (
                v(e, "$unset"),
                e.forEach(function (e) {
                  Object.hasOwnProperty.call(t, e) &&
                    (t === r && (t = f(r)), delete t[e]);
                }),
                t
              );
            },
            $add: function (e, t, n, r) {
              return (
                y(t, "$add"),
                v(e, "$add"),
                "Map" === l(t)
                  ? e.forEach(function (e) {
                      var n = e[0],
                        o = e[1];
                      t === r && t.get(n) !== o && (t = f(r)), t.set(n, o);
                    })
                  : e.forEach(function (e) {
                      t !== r || t.has(e) || (t = f(r)), t.add(e);
                    }),
                t
              );
            },
            $remove: function (e, t, n, r) {
              return (
                y(t, "$remove"),
                v(e, "$remove"),
                e.forEach(function (e) {
                  t === r && t.has(e) && (t = f(r)), t.delete(e);
                }),
                t
              );
            },
            $merge: function (e, t, r, a) {
              var i, u;
              return (
                (i = t),
                o((u = e) && "object" === typeof u, function () {
                  return (
                    "update(): $merge expects a spec of type 'object'; got " +
                    n(u)
                  );
                }),
                o(i && "object" === typeof i, function () {
                  return (
                    "update(): $merge expects a target of type 'object'; got " +
                    n(i)
                  );
                }),
                s(e).forEach(function (n) {
                  e[n] !== t[n] && (t === a && (t = f(a)), (t[n] = e[n]));
                }),
                t
              );
            },
            $apply: function (e, t) {
              var r;
              return (
                o("function" === typeof (r = e), function () {
                  return (
                    "update(): expected spec of $apply to be a function; got " +
                    n(r) +
                    "."
                  );
                }),
                e(t)
              );
            },
          },
          h = new d();
        function g(e, t, r) {
          o(Array.isArray(e), function () {
            return (
              "update(): expected target of " +
              n(r) +
              " to be an array; got " +
              n(e) +
              "."
            );
          }),
            v(t[r], r);
        }
        function v(e, t) {
          o(Array.isArray(e), function () {
            return (
              "update(): expected spec of " +
              n(t) +
              " to be an array; got " +
              n(e) +
              ". Did you forget to wrap your parameter in an array?"
            );
          });
        }
        function m(e) {
          o(Array.isArray(e), function () {
            return (
              "update(): expected spec of $splice to be an array of arrays; got " +
              n(e) +
              ". Did you forget to wrap your parameters in an array?"
            );
          });
        }
        function y(e, t) {
          var r = l(e);
          o("Map" === r || "Set" === r, function () {
            return (
              "update(): " +
              n(t) +
              " expects a target of type Set or Map; got " +
              n(r)
            );
          });
        }
        (t.isEquals = h.update.isEquals),
          (t.extend = h.extend),
          (t.default = h.update),
          (t.default.default = e.exports = c(t.default, t));
      },
      1725: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (o) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var i, u, l = o(e), c = 1; c < arguments.length; c++) {
                for (var s in (i = Object(arguments[c])))
                  n.call(i, s) && (l[s] = i[s]);
                if (t) {
                  u = t(i);
                  for (var f = 0; f < u.length; f++)
                    r.call(i, u[f]) && (l[u[f]] = i[u[f]]);
                }
              }
              return l;
            };
      },
      888: function (e, t, n) {
        "use strict";
        var r = n(9047);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, n, o, a, i) {
              if (i !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      2007: function (e, t, n) {
        e.exports = n(888)();
      },
      9047: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      4463: function (e, t, n) {
        "use strict";
        var r = n(2791),
          o = n(1725),
          a = n(5296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        var u = new Set(),
          l = {};
        function c(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
        }
        var f = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          g = {};
        function v(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(g, e) ||
                    (!p.call(h, e) &&
                      (d.test(e) ? (g[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          E = 60106,
          x = 60107,
          S = 60108,
          _ = 60114,
          O = 60109,
          I = 60110,
          T = 60112,
          P = 60113,
          D = 60120,
          N = 60115,
          L = 60116,
          j = 60121,
          M = 60128,
          R = 60129,
          F = 60130,
          z = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var A = Symbol.for;
          (k = A("react.element")),
            (E = A("react.portal")),
            (x = A("react.fragment")),
            (S = A("react.strict_mode")),
            (_ = A("react.profiler")),
            (O = A("react.provider")),
            (I = A("react.context")),
            (T = A("react.forward_ref")),
            (P = A("react.suspense")),
            (D = A("react.suspense_list")),
            (N = A("react.memo")),
            (L = A("react.lazy")),
            (j = A("react.block")),
            A("react.scope"),
            (M = A("react.opaque.id")),
            (R = A("react.debug_trace_mode")),
            (F = A("react.offscreen")),
            (z = A("react.legacy_hidden"));
        }
        var H,
          U = "function" === typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (U && e[U]) || e["@@iterator"])
            ? e
            : null;
        }
        function V(e) {
          if (void 0 === H)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              H = (t && t[1]) || "";
            }
          return "\n" + H + e;
        }
        var $ = !1;
        function W(e, t) {
          if (!e || $) return "";
          $ = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var o = l.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  u = a.length - 1;
                1 <= i && 0 <= u && o[i] !== a[u];

              )
                u--;
              for (; 1 <= i && 0 <= u; i--, u--)
                if (o[i] !== a[u]) {
                  if (1 !== i || 1 !== u)
                    do {
                      if ((i--, 0 > --u || o[i] !== a[u]))
                        return "\n" + o[i].replace(" at new ", " at ");
                    } while (1 <= i && 0 <= u);
                  break;
                }
            }
          } finally {
            ($ = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function Z(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = W(e.type, !1));
            case 11:
              return (e = W(e.type.render, !1));
            case 22:
              return (e = W(e.type._render, !1));
            case 1:
              return (e = W(e.type, !0));
            default:
              return "";
          }
        }
        function G(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case E:
              return "Portal";
            case _:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case D:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case I:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case N:
                return G(e.type);
              case j:
                return G(e._render);
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return G(e(t));
                } catch (n) {}
            }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function Q(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = Q(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = Q(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              oe(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ue(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function le(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function ce(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml",
          de = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ge,
          ve,
          me =
            ((ve = function (e, t) {
              if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (ge = ge || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ge.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          we = ["Webkit", "ms", "Moz", "O"];
        function Ce(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ke(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = Ce(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Ee = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function xe(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Oe = null,
          Ie = null,
          Te = null;
        function Pe(e) {
          if ((e = ro(e))) {
            if ("function" !== typeof Oe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ao(t)), Oe(e.stateNode, e.type, t));
          }
        }
        function De(e) {
          Ie ? (Te ? Te.push(e) : (Te = [e])) : (Ie = e);
        }
        function Ne() {
          if (Ie) {
            var e = Ie,
              t = Te;
            if (((Te = Ie = null), Pe(e), t))
              for (e = 0; e < t.length; e++) Pe(t[e]);
          }
        }
        function Le(e, t) {
          return e(t);
        }
        function je(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Me() {}
        var Re = Le,
          Fe = !1,
          ze = !1;
        function Ae() {
          (null === Ie && null === Te) || (Me(), Ne());
        }
        function He(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ao(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (f)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function () {
                Ue = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (ve) {
            Ue = !1;
          }
        function Ve(e, t, n, r, o, a, i, u, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (s) {
            this.onError(s);
          }
        }
        var $e = !1,
          We = null,
          Ze = !1,
          Ge = null,
          qe = {
            onError: function (e) {
              ($e = !0), (We = e);
            },
          };
        function Qe(e, t, n, r, o, a, i, u, l) {
          ($e = !1), (We = null), Ve.apply(qe, arguments);
        }
        function Ke(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ye(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Ke(e) !== e) throw Error(i(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ke(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var a = o.alternate;
                if (null === a) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === a.child) {
                  for (a = o.child; a; ) {
                    if (a === n) return Xe(o), e;
                    if (a === r) return Xe(o), t;
                    a = a.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = o), (r = a);
                else {
                  for (var u = !1, l = o.child; l; ) {
                    if (l === n) {
                      (u = !0), (n = o), (r = a);
                      break;
                    }
                    if (l === r) {
                      (u = !0), (r = o), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!u) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (u = !0), (n = a), (r = o);
                        break;
                      }
                      if (l === r) {
                        (u = !0), (r = a), (n = o);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!u) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          ot,
          at = !1,
          it = [],
          ut = null,
          lt = null,
          ct = null,
          st = new Map(),
          ft = new Map(),
          dt = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function gt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ut = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              ct = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ft.delete(t.pointerId);
          }
        }
        function vt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = ht(t, n, r, o, a)),
              null !== t && null !== (t = ro(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function mt(e) {
          var t = no(e.target);
          if (null !== t) {
            var n = Ke(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ye(n)))
                  return (
                    (e.blockedOn = t),
                    void ot(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ro(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (at = !1; 0 < it.length; ) {
            var e = it[0];
            if (null !== e.blockedOn) {
              null !== (e = ro(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && it.shift();
          }
          null !== ut && yt(ut) && (ut = null),
            null !== lt && yt(lt) && (lt = null),
            null !== ct && yt(ct) && (ct = null),
            st.forEach(bt),
            ft.forEach(bt);
        }
        function Ct(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
        }
        function kt(e) {
          function t(t) {
            return Ct(t, e);
          }
          if (0 < it.length) {
            Ct(it[0], e);
            for (var n = 1; n < it.length; n++) {
              var r = it[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== ut && Ct(ut, e),
              null !== lt && Ct(lt, e),
              null !== ct && Ct(ct, e),
              st.forEach(t),
              ft.forEach(t),
              n = 0;
            n < dt.length;
            n++
          )
            (r = dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
            mt(n), null === n.blockedOn && dt.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xt = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionend: Et("Transition", "TransitionEnd"),
          },
          St = {},
          _t = {};
        function Ot(e) {
          if (St[e]) return St[e];
          if (!xt[e]) return e;
          var t,
            n = xt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _t) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((_t = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xt.animationend.animation,
            delete xt.animationiteration.animation,
            delete xt.animationstart.animation),
          "TransitionEvent" in window || delete xt.transitionend.transition);
        var It = Ot("animationend"),
          Tt = Ot("animationiteration"),
          Pt = Ot("animationstart"),
          Dt = Ot("transitionend"),
          Nt = new Map(),
          Lt = new Map(),
          jt = [
            "abort",
            "abort",
            It,
            "animationEnd",
            Tt,
            "animationIteration",
            Pt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Dt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Mt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              Lt.set(r, t),
              Nt.set(r, o),
              c(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Rt = 8;
        function Ft(e) {
          if (0 !== (1 & e)) return (Rt = 15), 1;
          if (0 !== (2 & e)) return (Rt = 14), 2;
          if (0 !== (4 & e)) return (Rt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Rt = 12), t)
            : 0 !== (32 & e)
            ? ((Rt = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((Rt = 10), t)
            : 0 !== (256 & e)
            ? ((Rt = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((Rt = 8), t)
            : 0 !== (4096 & e)
            ? ((Rt = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((Rt = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((Rt = 5), t)
            : 67108864 & e
            ? ((Rt = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((Rt = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((Rt = 2), t)
            : 0 !== (1073741824 & e)
            ? ((Rt = 1), 1073741824)
            : ((Rt = 8), e);
        }
        function zt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Rt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            i = e.suspendedLanes,
            u = e.pingedLanes;
          if (0 !== a) (r = a), (o = Rt = 15);
          else if (0 !== (a = 134217727 & n)) {
            var l = a & ~i;
            0 !== l
              ? ((r = Ft(l)), (o = Rt))
              : 0 !== (u &= a) && ((r = Ft(u)), (o = Rt));
          } else
            0 !== (a = n & ~i)
              ? ((r = Ft(a)), (o = Rt))
              : 0 !== u && ((r = Ft(u)), (o = Rt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & i))
          ) {
            if ((Ft(t), o <= Rt)) return t;
            Rt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - $t(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function At(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ht(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? Ht(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? Ht(8, t) : e;
            case 8:
              return (
                0 === (e = Ut(3584 & ~t)) &&
                  0 === (e = Ut(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Vt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - $t(t))] = n);
        }
        var $t = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Wt(e) / Zt) | 0)) | 0;
              },
          Wt = Math.log,
          Zt = Math.LN2;
        var Gt = a.unstable_UserBlockingPriority,
          qt = a.unstable_runWithPriority,
          Qt = !0;
        function Kt(e, t, n, r) {
          Fe || Me();
          var o = Xt,
            a = Fe;
          Fe = !0;
          try {
            je(o, e, t, n, r);
          } finally {
            (Fe = a) || Ae();
          }
        }
        function Yt(e, t, n, r) {
          qt(Gt, Xt.bind(null, e, t, n, r));
        }
        function Xt(e, t, n, r) {
          var o;
          if (Qt)
            if ((o = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e))
              (e = ht(null, e, t, n, r)), it.push(e);
            else {
              var a = Jt(e, t, n, r);
              if (null === a) o && gt(e, r);
              else {
                if (o) {
                  if (-1 < pt.indexOf(e))
                    return (e = ht(a, e, t, n, r)), void it.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (ut = vt(ut, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (lt = vt(lt, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ct = vt(ct, e, t, n, r, o)), !0;
                        case "pointerover":
                          var a = o.pointerId;
                          return (
                            st.set(a, vt(st.get(a) || null, e, t, n, r, o)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = o.pointerId),
                            ft.set(a, vt(ft.get(a) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  gt(e, r);
                }
                Mr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var o = _e(r);
          if (null !== (o = no(o))) {
            var a = Ke(o);
            if (null === a) o = null;
            else {
              var i = a.tag;
              if (13 === i) {
                if (null !== (o = Ye(a))) return o;
                o = null;
              } else if (3 === i) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Mr(e, t, r, o, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            o = "value" in en ? en.value : en.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (nn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function on(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function an() {
          return !0;
        }
        function un() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? an
                : un),
              (this.isPropagationStopped = un),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = an));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = an));
              },
              persist: function () {},
              isPersistent: an,
            }),
            t
          );
        }
        var cn,
          sn,
          fn,
          dn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = ln(dn),
          hn = o({}, dn, { view: 0, detail: 0 }),
          gn = ln(hn),
          vn = o({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: In,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== fn &&
                    (fn && "mousemove" === e.type
                      ? ((cn = e.screenX - fn.screenX),
                        (sn = e.screenY - fn.screenY))
                      : (sn = cn = 0),
                    (fn = e)),
                  cn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          mn = ln(vn),
          yn = ln(o({}, vn, { dataTransfer: 0 })),
          bn = ln(o({}, hn, { relatedTarget: 0 })),
          wn = ln(
            o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Cn = o({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          kn = ln(Cn),
          En = ln(o({}, dn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function On(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function In() {
          return On;
        }
        var Tn = o({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = on(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: In,
            charCode: function (e) {
              return "keypress" === e.type ? on(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? on(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = ln(Tn),
          Dn = ln(
            o({}, vn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = ln(
            o({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: In,
            })
          ),
          Ln = ln(
            o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jn = o({}, vn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = ln(jn),
          Rn = [9, 13, 27, 32],
          Fn = f && "CompositionEvent" in window,
          zn = null;
        f && "documentMode" in document && (zn = document.documentMode);
        var An = f && "TextEvent" in window && !zn,
          Hn = f && (!Fn || (zn && 8 < zn && 11 >= zn)),
          Un = String.fromCharCode(32),
          Bn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function $n(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Zn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Zn[e.type] : "textarea" === t;
        }
        function qn(e, t, n, r) {
          De(r),
            0 < (t = Fr(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Kn = null;
        function Yn(e) {
          Tr(e, 0);
        }
        function Xn(e) {
          if (Y(oo(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (f) {
          var tr;
          if (f) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function or() {
          Qn && (Qn.detachEvent("onpropertychange", ar), (Kn = Qn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Xn(Kn)) {
            var t = [];
            if ((qn(t, Kn, e, _e(e)), (e = Yn), Fe)) e(t);
            else {
              Fe = !0;
              try {
                Le(e, t);
              } finally {
                (Fe = !1), Ae();
              }
            }
          }
        }
        function ir(e, t, n) {
          "focusin" === e
            ? (or(), (Kn = n), (Qn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && or();
        }
        function ur(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Kn);
        }
        function lr(e, t) {
          if ("click" === e) return Xn(t);
        }
        function cr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var sr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          fr = Object.prototype.hasOwnProperty;
        function dr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!fr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function gr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? gr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function vr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function mr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          Cr = null,
          kr = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          kr ||
            null == br ||
            br !== X(r) ||
            ("selectionStart" in (r = br) && mr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (Cr && dr(Cr, r)) ||
              ((Cr = r),
              0 < (r = Fr(wr, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Mt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Mt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Mt(jt, 2);
        for (
          var xr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Sr = 0;
          Sr < xr.length;
          Sr++
        )
          Lt.set(xr[Sr], 0);
        s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _r =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(_r)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, u, l, c) {
              if ((Qe.apply(this, arguments), $e)) {
                if (!$e) throw Error(i(198));
                var s = We;
                ($e = !1), (We = null), Ze || ((Ze = !0), (Ge = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Tr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i],
                    l = u.instance,
                    c = u.currentTarget;
                  if (((u = u.listener), l !== a && o.isPropagationStopped()))
                    break e;
                  Ir(o, u, c), (a = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (u = r[i]).instance),
                    (c = u.currentTarget),
                    (u = u.listener),
                    l !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ir(o, u, c), (a = l);
                }
            }
          }
          if (Ze) throw ((e = Ge), (Ze = !1), (Ge = null), e);
        }
        function Pr(e, t) {
          var n = io(t),
            r = e + "__bubble";
          n.has(r) || (jr(t, e, 2, !1), n.add(r));
        }
        var Dr = "_reactListening" + Math.random().toString(36).slice(2);
        function Nr(e) {
          e[Dr] ||
            ((e[Dr] = !0),
            u.forEach(function (t) {
              Or.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null);
            }));
        }
        function Lr(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Or.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (a = r);
          }
          var i = io(a),
            u = e + "__" + (t ? "capture" : "bubble");
          i.has(u) || (t && (o |= 4), jr(a, e, o, t), i.add(u));
        }
        function jr(e, t, n, r) {
          var o = Lt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Kt;
              break;
            case 1:
              o = Yt;
              break;
            default:
              o = Xt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ue ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Mr(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var u = r.stateNode.containerInfo;
                if (u === o || (8 === u.nodeType && u.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === o ||
                        (8 === l.nodeType && l.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== u; ) {
                  if (null === (i = no(u))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = a = i;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e(t, n);
            ze = !0;
            try {
              Re(e, t, n);
            } finally {
              (ze = !1), Ae();
            }
          })(function () {
            var r = a,
              o = _e(n),
              i = [];
            e: {
              var u = Nt.get(e);
              if (void 0 !== u) {
                var l = pn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === on(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Pn;
                    break;
                  case "focusin":
                    (c = "focus"), (l = bn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = bn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = bn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Nn;
                    break;
                  case It:
                  case Tt:
                  case Pt:
                    l = wn;
                    break;
                  case Dt:
                    l = Ln;
                    break;
                  case "scroll":
                    l = gn;
                    break;
                  case "wheel":
                    l = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = kn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Dn;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== u ? u + "Capture" : null) : u;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var g = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== g &&
                      ((p = g),
                      null !== d &&
                        null != (g = He(h, d)) &&
                        s.push(Rr(h, g, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((u = new l(u, c, null, n, o)),
                  i.push({ event: u, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!no(c) && !c[eo])) &&
                  (l || u) &&
                  ((u =
                    o.window === o
                      ? o
                      : (u = o.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? no(c)
                          : null) &&
                        (c !== (f = Ke(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((s = mn),
                  (g = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Dn),
                    (g = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? u : oo(l)),
                  (p = null == c ? u : oo(c)),
                  ((u = new s(g, h + "leave", l, n, o)).target = f),
                  (u.relatedTarget = p),
                  (g = null),
                  no(o) === r &&
                    (((s = new s(d, h + "enter", c, n, o)).target = p),
                    (s.relatedTarget = f),
                    (g = s)),
                  (f = g),
                  l && c)
                )
                  e: {
                    for (d = c, h = 0, p = s = l; p; p = zr(p)) h++;
                    for (p = 0, g = d; g; g = zr(g)) p++;
                    for (; 0 < h - p; ) (s = zr(s)), h--;
                    for (; 0 < p - h; ) (d = zr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = zr(s)), (d = zr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== l && Ar(i, u, l, s, !1),
                  null !== c && null !== f && Ar(i, f, c, s, !0);
              }
              if (
                "select" ===
                  (l =
                    (u = r ? oo(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === l && "file" === u.type)
              )
                var v = Jn;
              else if (Gn(u))
                if (er) v = cr;
                else {
                  v = ur;
                  var m = ir;
                }
              else
                (l = u.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? qn(i, v, n, o)
                  : (m && m(e, u, r),
                    "focusout" === e &&
                      (m = u._wrapperState) &&
                      m.controlled &&
                      "number" === u.type &&
                      oe(u, "number", u.value)),
                (m = r ? oo(r) : window),
                e)
              ) {
                case "focusin":
                  (Gn(m) || "true" === m.contentEditable) &&
                    ((br = m), (wr = r), (Cr = null));
                  break;
                case "focusout":
                  Cr = wr = br = null;
                  break;
                case "mousedown":
                  kr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (kr = !1), Er(i, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  Er(i, n, o);
              }
              var y;
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Hn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = rn())
                    : ((tn = "value" in (en = o) ? en.value : en.textContent),
                      (Wn = !0))),
                0 < (m = Fr(r, b)).length &&
                  ((b = new En(b, e, null, n, o)),
                  i.push({ event: b, listeners: m }),
                  y ? (b.data = y) : null !== (y = $n(n)) && (b.data = y))),
                (y = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return $n(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!Fn && Vn(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Hn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Fr(r, "onBeforeInput")).length &&
                  ((o = new En("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Tr(i, t);
          });
        }
        function Rr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Fr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = He(e, n)) && r.unshift(Rr(e, a, o)),
              null != (a = He(e, t)) && r.push(Rr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ar(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var u = n,
              l = u.alternate,
              c = u.stateNode;
            if (null !== l && l === r) break;
            5 === u.tag &&
              null !== c &&
              ((u = c),
              o
                ? null != (l = He(n, a)) && i.unshift(Rr(n, l, u))
                : o || (null != (l = He(n, a)) && i.push(Rr(n, l, u)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function Hr() {}
        var Ur = null,
          Br = null;
        function Vr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function $r(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Wr = "function" === typeof setTimeout ? setTimeout : void 0,
          Zr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function Gr(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function qr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Qr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Kr = 0;
        var Yr = Math.random().toString(36).slice(2),
          Xr = "__reactFiber$" + Yr,
          Jr = "__reactProps$" + Yr,
          eo = "__reactContainer$" + Yr,
          to = "__reactEvents$" + Yr;
        function no(e) {
          var t = e[Xr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[eo] || n[Xr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Qr(e); null !== e; ) {
                  if ((n = e[Xr])) return n;
                  e = Qr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ro(e) {
          return !(e = e[Xr] || e[eo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function oo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ao(e) {
          return e[Jr] || null;
        }
        function io(e) {
          var t = e[to];
          return void 0 === t && (t = e[to] = new Set()), t;
        }
        var uo = [],
          lo = -1;
        function co(e) {
          return { current: e };
        }
        function so(e) {
          0 > lo || ((e.current = uo[lo]), (uo[lo] = null), lo--);
        }
        function fo(e, t) {
          lo++, (uo[lo] = e.current), (e.current = t);
        }
        var po = {},
          ho = co(po),
          go = co(!1),
          vo = po;
        function mo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return po;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function yo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function bo() {
          so(go), so(ho);
        }
        function wo(e, t, n) {
          if (ho.current !== po) throw Error(i(168));
          fo(ho, t), fo(go, n);
        }
        function Co(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(i(108, G(t) || "Unknown", a));
          return o({}, n, r);
        }
        function ko(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              po),
            (vo = ho.current),
            fo(ho, e),
            fo(go, go.current),
            !0
          );
        }
        function Eo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Co(e, t, vo)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              so(go),
              so(ho),
              fo(ho, e))
            : so(go),
            fo(go, n);
        }
        var xo = null,
          So = null,
          _o = a.unstable_runWithPriority,
          Oo = a.unstable_scheduleCallback,
          Io = a.unstable_cancelCallback,
          To = a.unstable_shouldYield,
          Po = a.unstable_requestPaint,
          Do = a.unstable_now,
          No = a.unstable_getCurrentPriorityLevel,
          Lo = a.unstable_ImmediatePriority,
          jo = a.unstable_UserBlockingPriority,
          Mo = a.unstable_NormalPriority,
          Ro = a.unstable_LowPriority,
          Fo = a.unstable_IdlePriority,
          zo = {},
          Ao = void 0 !== Po ? Po : function () {},
          Ho = null,
          Uo = null,
          Bo = !1,
          Vo = Do(),
          $o =
            1e4 > Vo
              ? Do
              : function () {
                  return Do() - Vo;
                };
        function Wo() {
          switch (No()) {
            case Lo:
              return 99;
            case jo:
              return 98;
            case Mo:
              return 97;
            case Ro:
              return 96;
            case Fo:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Zo(e) {
          switch (e) {
            case 99:
              return Lo;
            case 98:
              return jo;
            case 97:
              return Mo;
            case 96:
              return Ro;
            case 95:
              return Fo;
            default:
              throw Error(i(332));
          }
        }
        function Go(e, t) {
          return (e = Zo(e)), _o(e, t);
        }
        function qo(e, t, n) {
          return (e = Zo(e)), Oo(e, t, n);
        }
        function Qo() {
          if (null !== Uo) {
            var e = Uo;
            (Uo = null), Io(e);
          }
          Ko();
        }
        function Ko() {
          if (!Bo && null !== Ho) {
            Bo = !0;
            var e = 0;
            try {
              var t = Ho;
              Go(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Ho = null);
            } catch (n) {
              throw (null !== Ho && (Ho = Ho.slice(e + 1)), Oo(Lo, Qo), n);
            } finally {
              Bo = !1;
            }
          }
        }
        var Yo = C.ReactCurrentBatchConfig;
        function Xo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Jo = co(null),
          ea = null,
          ta = null,
          na = null;
        function ra() {
          na = ta = ea = null;
        }
        function oa(e) {
          var t = Jo.current;
          so(Jo), (e.type._context._currentValue = t);
        }
        function aa(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ia(e, t) {
          (ea = e),
            (na = ta = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Fi = !0), (e.firstContext = null));
        }
        function ua(e, t) {
          if (na !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((na = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ta)
            ) {
              if (null === ea) throw Error(i(308));
              (ta = t),
                (ea.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ta = ta.next = t;
          return e._currentValue;
        }
        var la = !1;
        function ca(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function sa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function pa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function ha(e, t, n, r) {
          var a = e.updateQueue;
          la = !1;
          var i = a.firstBaseUpdate,
            u = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var c = l,
              s = c.next;
            (c.next = null), null === u ? (i = s) : (u.next = s), (u = c);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== u &&
                (null === d ? (f.firstBaseUpdate = s) : (d.next = s),
                (f.lastBaseUpdate = c));
            }
          }
          if (null !== i) {
            for (d = a.baseState, u = 0, f = s = c = null; ; ) {
              l = i.lane;
              var p = i.eventTime;
              if ((r & l) === l) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    g = i;
                  switch (((l = t), (p = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (h = g.payload)) {
                        d = h.call(p, d, l);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (l =
                            "function" === typeof (h = g.payload)
                              ? h.call(p, d, l)
                              : h) ||
                        void 0 === l
                      )
                        break e;
                      d = o({}, d, l);
                      break e;
                    case 2:
                      la = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (l = a.effects) ? (a.effects = [i]) : l.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: l,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === f ? ((s = f = p), (c = d)) : (f = f.next = p),
                  (u |= l);
              if (null === (i = i.next)) {
                if (null === (l = a.shared.pending)) break;
                (i = l.next),
                  (l.next = null),
                  (a.lastBaseUpdate = l),
                  (a.shared.pending = null);
              }
            }
            null === f && (c = d),
              (a.baseState = c),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = f),
              (Uu |= u),
              (e.lanes = u),
              (e.memoizedState = d);
          }
        }
        function ga(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var va = new r.Component().refs;
        function ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ya = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ke(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = dl(),
              o = pl(e),
              a = fa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hl(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = dl(),
              o = pl(e),
              a = fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hl(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = dl(),
              r = pl(e),
              o = fa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              da(e, o),
              hl(e, r, n);
          },
        };
        function ba(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !dr(n, r) ||
                !dr(o, a);
        }
        function wa(e, t, n) {
          var r = !1,
            o = po,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = ua(a))
              : ((o = yo(t) ? vo : ho.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? mo(e, o)
                  : po)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ya),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Ca(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ya.enqueueReplaceState(t, t.state, null);
        }
        function ka(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = va), ca(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = ua(a))
            : ((a = yo(t) ? vo : ho.current), (o.context = mo(e, a))),
            ha(e, n, o, r),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ma(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ya.enqueueReplaceState(o, o.state, null),
              ha(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4);
        }
        var Ea = Array.isArray;
        function xa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === va && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Sa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function _a(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Zl(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Kl(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = xa(e, t, n)), (r.return = e), r)
              : (((r = Gl(n.type, n.key, n.props, null, e.mode, r)).ref = xa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yl(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = ql(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Kl("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Gl(t.type, t.key, t.props, null, e.mode, n)).ref = xa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Yl(t, e.mode, n)).return = e), t;
              }
              if (Ea(t) || B(t))
                return ((t = ql(t, e.mode, n, null)).return = e), t;
              Sa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== o ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o
                    ? n.type === x
                      ? f(e, t, n.props.children, r, o)
                      : c(e, t, n, r)
                    : null;
                case E:
                  return n.key === o ? s(e, t, n, r) : null;
              }
              if (Ea(n) || B(n)) return null !== o ? null : f(e, t, n, r, null);
              Sa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if ("string" === typeof r || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === x
                      ? f(t, e, r.props.children, o, r.key)
                      : c(t, e, r, o)
                  );
                case E:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (Ea(r) || B(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Sa(t, r);
            }
            return null;
          }
          function g(o, i, u, l) {
            for (
              var c = null, s = null, f = i, g = (i = 0), v = null;
              null !== f && g < u.length;
              g++
            ) {
              f.index > g ? ((v = f), (f = null)) : (v = f.sibling);
              var m = p(o, f, u[g], l);
              if (null === m) {
                null === f && (f = v);
                break;
              }
              e && f && null === m.alternate && t(o, f),
                (i = a(m, i, g)),
                null === s ? (c = m) : (s.sibling = m),
                (s = m),
                (f = v);
            }
            if (g === u.length) return n(o, f), c;
            if (null === f) {
              for (; g < u.length; g++)
                null !== (f = d(o, u[g], l)) &&
                  ((i = a(f, i, g)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return c;
            }
            for (f = r(o, f); g < u.length; g++)
              null !== (v = h(f, o, g, u[g], l)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? g : v.key),
                (i = a(v, i, g)),
                null === s ? (c = v) : (s.sibling = v),
                (s = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          function v(o, u, l, c) {
            var s = B(l);
            if ("function" !== typeof s) throw Error(i(150));
            if (null == (l = s.call(l))) throw Error(i(151));
            for (
              var f = (s = null), g = u, v = (u = 0), m = null, y = l.next();
              null !== g && !y.done;
              v++, y = l.next()
            ) {
              g.index > v ? ((m = g), (g = null)) : (m = g.sibling);
              var b = p(o, g, y.value, c);
              if (null === b) {
                null === g && (g = m);
                break;
              }
              e && g && null === b.alternate && t(o, g),
                (u = a(b, u, v)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (g = m);
            }
            if (y.done) return n(o, g), s;
            if (null === g) {
              for (; !y.done; v++, y = l.next())
                null !== (y = d(o, y.value, c)) &&
                  ((u = a(y, u, v)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return s;
            }
            for (g = r(o, g); !y.done; v++, y = l.next())
              null !== (y = h(g, o, v, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? v : y.key),
                (u = a(y, u, v)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          return function (e, r, a, l) {
            var c =
              "object" === typeof a &&
              null !== a &&
              a.type === x &&
              null === a.key;
            c && (a = a.props.children);
            var s = "object" === typeof a && null !== a;
            if (s)
              switch (a.$$typeof) {
                case k:
                  e: {
                    for (s = a.key, c = r; null !== c; ) {
                      if (c.key === s) {
                        if (7 === c.tag) {
                          if (a.type === x) {
                            n(e, c.sibling),
                              ((r = o(c, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (c.elementType === a.type) {
                          n(e, c.sibling),
                            ((r = o(c, a.props)).ref = xa(e, c, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    a.type === x
                      ? (((r = ql(a.props.children, e.mode, l, a.key)).return =
                          e),
                        (e = r))
                      : (((l = Gl(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          l
                        )).ref = xa(e, r, a)),
                        (l.return = e),
                        (e = l));
                  }
                  return u(e);
                case E:
                  e: {
                    for (c = a.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Yl(a, e.mode, l)).return = e), (e = r);
                  }
                  return u(e);
              }
            if ("string" === typeof a || "number" === typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Kl(a, e.mode, l)).return = e), (e = r)),
                u(e)
              );
            if (Ea(a)) return g(e, r, a, l);
            if (B(a)) return v(e, r, a, l);
            if ((s && Sa(e, a), "undefined" === typeof a && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, G(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Oa = _a(!0),
          Ia = _a(!1),
          Ta = {},
          Pa = co(Ta),
          Da = co(Ta),
          Na = co(Ta);
        function La(e) {
          if (e === Ta) throw Error(i(174));
          return e;
        }
        function ja(e, t) {
          switch ((fo(Na, t), fo(Da, e), fo(Pa, Ta), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          so(Pa), fo(Pa, t);
        }
        function Ma() {
          so(Pa), so(Da), so(Na);
        }
        function Ra(e) {
          La(Na.current);
          var t = La(Pa.current),
            n = he(t, e.type);
          t !== n && (fo(Da, e), fo(Pa, n));
        }
        function Fa(e) {
          Da.current === e && (so(Pa), so(Da));
        }
        var za = co(0);
        function Aa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ha = null,
          Ua = null,
          Ba = !1;
        function Va(e, t) {
          var n = $l(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function $a(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Wa(e) {
          if (Ba) {
            var t = Ua;
            if (t) {
              var n = t;
              if (!$a(e, t)) {
                if (!(t = qr(n.nextSibling)) || !$a(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ba = !1), void (Ha = e)
                  );
                Va(Ha, n);
              }
              (Ha = e), (Ua = qr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ba = !1), (Ha = e);
          }
        }
        function Za(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ha = e;
        }
        function Ga(e) {
          if (e !== Ha) return !1;
          if (!Ba) return Za(e), (Ba = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !$r(t, e.memoizedProps))
          )
            for (t = Ua; t; ) Va(e, t), (t = qr(t.nextSibling));
          if ((Za(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ua = qr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ua = null;
            }
          } else Ua = Ha ? qr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function qa() {
          (Ua = Ha = null), (Ba = !1);
        }
        var Qa = [];
        function Ka() {
          for (var e = 0; e < Qa.length; e++)
            Qa[e]._workInProgressVersionPrimary = null;
          Qa.length = 0;
        }
        var Ya = C.ReactCurrentDispatcher,
          Xa = C.ReactCurrentBatchConfig,
          Ja = 0,
          ei = null,
          ti = null,
          ni = null,
          ri = !1,
          oi = !1;
        function ai() {
          throw Error(i(321));
        }
        function ii(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function ui(e, t, n, r, o, a) {
          if (
            ((Ja = a),
            (ei = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Ya.current = null === e || null === e.memoizedState ? Li : ji),
            (e = n(r, o)),
            oi)
          ) {
            a = 0;
            do {
              if (((oi = !1), !(25 > a))) throw Error(i(301));
              (a += 1),
                (ni = ti = null),
                (t.updateQueue = null),
                (Ya.current = Mi),
                (e = n(r, o));
            } while (oi);
          }
          if (
            ((Ya.current = Ni),
            (t = null !== ti && null !== ti.next),
            (Ja = 0),
            (ni = ti = ei = null),
            (ri = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function li() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e), ni
          );
        }
        function ci() {
          if (null === ti) {
            var e = ei.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ti.next;
          var t = null === ni ? ei.memoizedState : ni.next;
          if (null !== t) (ni = t), (ti = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (ti = e).memoizedState,
              baseState: ti.baseState,
              baseQueue: ti.baseQueue,
              queue: ti.queue,
              next: null,
            }),
              null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e);
          }
          return ni;
        }
        function si(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function fi(e) {
          var t = ci(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = ti,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var u = o.next;
              (o.next = a.next), (a.next = u);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var l = (u = a = null),
              c = o;
            do {
              var s = c.lane;
              if ((Ja & s) === s)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      eagerReducer: c.eagerReducer,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: s,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((u = l = f), (a = r)) : (l = l.next = f),
                  (ei.lanes |= s),
                  (Uu |= s);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === l ? (a = r) : (l.next = u),
              sr(r, t.memoizedState) || (Fi = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function di(e) {
          var t = ci(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var u = (o = o.next);
            do {
              (a = e(a, u.action)), (u = u.next);
            } while (u !== o);
            sr(a, t.memoizedState) || (Fi = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function pi(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (Ja & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Qa.push(t))),
            e)
          )
            return n(t._source);
          throw (Qa.push(t), Error(i(350)));
        }
        function hi(e, t, n, r) {
          var o = Lu;
          if (null === o) throw Error(i(349));
          var a = t._getVersion,
            u = a(t._source),
            l = Ya.current,
            c = l.useState(function () {
              return pi(o, t, n);
            }),
            s = c[1],
            f = c[0];
          c = ni;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            g = d.source;
          d = d.subscribe;
          var v = ei;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            l.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = s);
                var e = a(t._source);
                if (!sr(u, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (s(e),
                      (e = pl(v)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, i = e; 0 < i; ) {
                    var l = 31 - $t(i),
                      c = 1 << l;
                    (r[l] |= e), (i &= ~c);
                  }
                }
              },
              [n, t, r]
            ),
            l.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pl(v);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r]
            ),
            (sr(h, n) && sr(g, t) && sr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: f,
              }).dispatch = s =
                Di.bind(null, ei, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (f = pi(o, t, n)),
              (c.memoizedState = c.baseState = f)),
            f
          );
        }
        function gi(e, t, n) {
          return hi(ci(), e, t, n);
        }
        function vi(e) {
          var t = li();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: si,
                lastRenderedState: e,
              }).dispatch =
              Di.bind(null, ei, e)),
            [t.memoizedState, e]
          );
        }
        function mi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ei.updateQueue)
              ? ((t = { lastEffect: null }),
                (ei.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yi(e) {
          return (e = { current: e }), (li().memoizedState = e);
        }
        function bi() {
          return ci().memoizedState;
        }
        function wi(e, t, n, r) {
          var o = li();
          (ei.flags |= e),
            (o.memoizedState = mi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ci(e, t, n, r) {
          var o = ci();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ti) {
            var i = ti.memoizedState;
            if (((a = i.destroy), null !== r && ii(r, i.deps)))
              return void mi(t, n, a, r);
          }
          (ei.flags |= e), (o.memoizedState = mi(1 | t, n, a, r));
        }
        function ki(e, t) {
          return wi(516, 4, e, t);
        }
        function Ei(e, t) {
          return Ci(516, 4, e, t);
        }
        function xi(e, t) {
          return Ci(4, 2, e, t);
        }
        function Si(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function _i(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ci(4, 2, Si.bind(null, t, e), n)
          );
        }
        function Oi() {}
        function Ii(e, t) {
          var n = ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ti(e, t) {
          var n = ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ii(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Pi(e, t) {
          var n = Wo();
          Go(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Go(97 < n ? 97 : n, function () {
              var n = Xa.transition;
              Xa.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xa.transition = n;
              }
            });
        }
        function Di(e, t, n) {
          var r = dl(),
            o = pl(e),
            a = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (t.pending = a),
            (i = e.alternate),
            e === ei || (null !== i && i === ei))
          )
            oi = ri = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var u = t.lastRenderedState,
                  l = i(u, n);
                if (((a.eagerReducer = i), (a.eagerState = l), sr(l, u)))
                  return;
              } catch (c) {}
            hl(e, o, r);
          }
        }
        var Ni = {
            readContext: ua,
            useCallback: ai,
            useContext: ai,
            useEffect: ai,
            useImperativeHandle: ai,
            useLayoutEffect: ai,
            useMemo: ai,
            useReducer: ai,
            useRef: ai,
            useState: ai,
            useDebugValue: ai,
            useDeferredValue: ai,
            useTransition: ai,
            useMutableSource: ai,
            useOpaqueIdentifier: ai,
            unstable_isNewReconciler: !1,
          },
          Li = {
            readContext: ua,
            useCallback: function (e, t) {
              return (li().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ua,
            useEffect: ki,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                wi(4, 2, Si.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return wi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = li();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = li();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Di.bind(null, ei, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yi,
            useState: vi,
            useDebugValue: Oi,
            useDeferredValue: function (e) {
              var t = vi(e),
                n = t[0],
                r = t[1];
              return (
                ki(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = vi(!1),
                t = e[0];
              return yi((e = Pi.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = li();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                hi(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ba) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: M, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Kr++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  n = vi(t)[1];
                return (
                  0 === (2 & ei.mode) &&
                    ((ei.flags |= 516),
                    mi(
                      5,
                      function () {
                        n("r:" + (Kr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return vi((t = "r:" + (Kr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          ji = {
            readContext: ua,
            useCallback: Ii,
            useContext: ua,
            useEffect: Ei,
            useImperativeHandle: _i,
            useLayoutEffect: xi,
            useMemo: Ti,
            useReducer: fi,
            useRef: bi,
            useState: function () {
              return fi(si);
            },
            useDebugValue: Oi,
            useDeferredValue: function (e) {
              var t = fi(si),
                n = t[0],
                r = t[1];
              return (
                Ei(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fi(si)[0];
              return [bi().current, e];
            },
            useMutableSource: gi,
            useOpaqueIdentifier: function () {
              return fi(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Mi = {
            readContext: ua,
            useCallback: Ii,
            useContext: ua,
            useEffect: Ei,
            useImperativeHandle: _i,
            useLayoutEffect: xi,
            useMemo: Ti,
            useReducer: di,
            useRef: bi,
            useState: function () {
              return di(si);
            },
            useDebugValue: Oi,
            useDeferredValue: function (e) {
              var t = di(si),
                n = t[0],
                r = t[1];
              return (
                Ei(
                  function () {
                    var t = Xa.transition;
                    Xa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = di(si)[0];
              return [bi().current, e];
            },
            useMutableSource: gi,
            useOpaqueIdentifier: function () {
              return di(si)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ri = C.ReactCurrentOwner,
          Fi = !1;
        function zi(e, t, n, r) {
          t.child = null === e ? Ia(t, null, n, r) : Oa(t, e.child, n, r);
        }
        function Ai(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            ia(t, o),
            (r = ui(e, t, n, r, a, o)),
            null === e || Fi
              ? ((t.flags |= 1), zi(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                au(e, t, o))
          );
        }
        function Hi(e, t, n, r, o, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Wl(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Gl(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Ui(e, t, i, r, o, a));
          }
          return (
            (i = e.child),
            0 === (o & a) &&
            ((o = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref)
              ? au(e, t, a)
              : ((t.flags |= 1),
                ((e = Zl(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ui(e, t, n, r, o, a) {
          if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Fi = !1), 0 === (a & o)))
              return (t.lanes = e.lanes), au(e, t, a);
            0 !== (16384 & e.flags) && (Fi = !0);
          }
          return $i(e, t, n, r, a);
        }
        function Bi(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), kl(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  kl(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                kl(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              kl(t, r);
          return zi(e, t, o, n), t.child;
        }
        function Vi(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function $i(e, t, n, r, o) {
          var a = yo(n) ? vo : ho.current;
          return (
            (a = mo(t, a)),
            ia(t, o),
            (n = ui(e, t, n, r, a, o)),
            null === e || Fi
              ? ((t.flags |= 1), zi(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                au(e, t, o))
          );
        }
        function Wi(e, t, n, r, o) {
          if (yo(n)) {
            var a = !0;
            ko(t);
          } else a = !1;
          if ((ia(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              wa(t, n, r),
              ka(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              u = t.memoizedProps;
            i.props = u;
            var l = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = ua(c))
              : (c = mo(t, (c = yo(n) ? vo : ho.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== r || l !== c) && Ca(t, i, r, c)),
              (la = !1);
            var d = t.memoizedState;
            (i.state = d),
              ha(t, r, i, o),
              (l = t.memoizedState),
              u !== r || d !== l || go.current || la
                ? ("function" === typeof s &&
                    (ma(t, n, s, r), (l = t.memoizedState)),
                  (u = la || ba(t, n, u, r, d, l, c))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = c),
                  (r = u))
                : ("function" === typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              sa(e, t),
              (u = t.memoizedProps),
              (c = t.type === t.elementType ? u : Xo(t.type, u)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = ua(l))
                : (l = mo(t, (l = yo(n) ? vo : ho.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== f || d !== l) && Ca(t, i, r, l)),
              (la = !1),
              (d = t.memoizedState),
              (i.state = d),
              ha(t, r, i, o);
            var h = t.memoizedState;
            u !== f || d !== h || go.current || la
              ? ("function" === typeof p &&
                  (ma(t, n, p, r), (h = t.memoizedState)),
                (c = la || ba(t, n, c, r, d, h, l))
                  ? (s ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Zi(e, t, n, r, a, o);
        }
        function Zi(e, t, n, r, o, a) {
          Vi(e, t);
          var i = 0 !== (64 & t.flags);
          if (!r && !i) return o && Eo(t, n, !1), au(e, t, a);
          (r = t.stateNode), (Ri.current = t);
          var u =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Oa(t, e.child, null, a)),
                (t.child = Oa(t, null, u, a)))
              : zi(e, t, u, a),
            (t.memoizedState = r.state),
            o && Eo(t, n, !0),
            t.child
          );
        }
        function Gi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? wo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && wo(0, t.context, !1),
            ja(e, t.containerInfo);
        }
        var qi,
          Qi,
          Ki,
          Yi = { dehydrated: null, retryLane: 0 };
        function Xi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = za.current,
            i = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (a |= 1),
            fo(za, 1 & a),
            null === e
              ? (void 0 !== o.fallback && Wa(t),
                (e = o.children),
                (a = o.fallback),
                i
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Yi),
                    e)
                  : "number" === typeof o.unstable_expectedLoadTime
                  ? ((e = Ji(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Yi),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Ql(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                i
                  ? ((o = tu(e, t, o.children, o.fallback, n)),
                    (i = t.child),
                    (a = e.child.memoizedState),
                    (i.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (i.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Yi),
                    o)
                  : ((n = eu(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ji(e, t, n, r) {
          var o = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & o) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Ql(t, o, 0, null)),
            (n = ql(n, o, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function eu(e, t, n, r) {
          var o = e.child;
          return (
            (e = o.sibling),
            (n = Zl(o, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tu(e, t, n, r, o) {
          var a = t.mode,
            i = e.child;
          e = i.sibling;
          var u = { mode: "hidden", children: n };
          return (
            0 === (2 & a) && t.child !== i
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = u),
                null !== (i = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = i),
                    (i.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Zl(i, u)),
            null !== e ? (r = Zl(e, r)) : ((r = ql(r, a, o, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), aa(e.return, t);
        }
        function ru(e, t, n, r, o, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o),
              (i.lastEffect = a));
        }
        function ou(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((zi(e, t, r.children, n), 0 !== (2 & (r = za.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nu(e, n);
                else if (19 === e.tag) nu(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((fo(za, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Aa(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  ru(t, !1, o, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Aa(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                ru(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                ru(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function au(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Uu |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Zl((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Zl(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function iu(e, t) {
          if (!Ba)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function uu(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return yo(t.type) && bo(), null;
            case 3:
              return (
                Ma(),
                so(go),
                so(ho),
                Ka(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ga(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Fa(t);
              var a = La(Na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Qi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = La(Pa.current)), Ga(t))) {
                  (r = t.stateNode), (n = t.type);
                  var u = t.memoizedProps;
                  switch (((r[Xr] = t), (r[Jr] = u), n)) {
                    case "dialog":
                      Pr("cancel", r), Pr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Pr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < _r.length; e++) Pr(_r[e], r);
                      break;
                    case "source":
                      Pr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Pr("error", r), Pr("load", r);
                      break;
                    case "details":
                      Pr("toggle", r);
                      break;
                    case "input":
                      ee(r, u), Pr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!u.multiple }),
                        Pr("invalid", r);
                      break;
                    case "textarea":
                      le(r, u), Pr("invalid", r);
                  }
                  for (var c in (xe(n, u), (e = null), u))
                    u.hasOwnProperty(c) &&
                      ((a = u[c]),
                      "children" === c
                        ? "string" === typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" === typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : l.hasOwnProperty(c) &&
                          null != a &&
                          "onScroll" === c &&
                          Pr("scroll", r));
                  switch (n) {
                    case "input":
                      K(r), re(r, u, !0);
                      break;
                    case "textarea":
                      K(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof u.onClick && (r.onclick = Hr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = pe(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = c.createElement(n, { is: r.is }))
                        : ((e = c.createElement(n)),
                          "select" === n &&
                            ((c = e),
                            r.multiple
                              ? (c.multiple = !0)
                              : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[Xr] = t),
                    (e[Jr] = r),
                    qi(e, t),
                    (t.stateNode = e),
                    (c = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Pr("cancel", e), Pr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Pr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < _r.length; a++) Pr(_r[a], e);
                      a = r;
                      break;
                    case "source":
                      Pr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Pr("error", e), Pr("load", e), (a = r);
                      break;
                    case "details":
                      Pr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Pr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        Pr("invalid", e);
                      break;
                    case "textarea":
                      le(e, r), (a = ue(e, r)), Pr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  xe(n, a);
                  var s = a;
                  for (u in s)
                    if (s.hasOwnProperty(u)) {
                      var f = s[u];
                      "style" === u
                        ? ke(e, f)
                        : "dangerouslySetInnerHTML" === u
                        ? null != (f = f ? f.__html : void 0) && me(e, f)
                        : "children" === u
                        ? "string" === typeof f
                          ? ("textarea" !== n || "" !== f) && ye(e, f)
                          : "number" === typeof f && ye(e, "" + f)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          "autoFocus" !== u &&
                          (l.hasOwnProperty(u)
                            ? null != f && "onScroll" === u && Pr("scroll", e)
                            : null != f && w(e, u, f, c));
                    }
                  switch (n) {
                    case "input":
                      K(e), re(e, r, !1);
                      break;
                    case "textarea":
                      K(e), se(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (u = r.value)
                          ? ie(e, !!r.multiple, u, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof a.onClick && (e.onclick = Hr);
                  }
                  Vr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Ki(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = La(Na.current)),
                  La(Pa.current),
                  Ga(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Xr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Xr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                so(za),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ga(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & za.current)
                        ? 0 === zu && (zu = 3)
                        : ((0 !== zu && 3 !== zu) || (zu = 4),
                          null === Lu ||
                            (0 === (134217727 & Uu) &&
                              0 === (134217727 & Bu)) ||
                            yl(Lu, Mu))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ma(), null === e && Nr(t.stateNode.containerInfo), null;
            case 10:
              return oa(t), null;
            case 19:
              if ((so(za), null === (r = t.memoizedState))) return null;
              if (((u = 0 !== (64 & t.flags)), null === (c = r.rendering)))
                if (u) iu(r, !1);
                else {
                  if (0 !== zu || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = Aa(e))) {
                        for (
                          t.flags |= 64,
                            iu(r, !1),
                            null !== (u = c.updateQueue) &&
                              ((t.updateQueue = u), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((u = n).flags &= 2),
                            (u.nextEffect = null),
                            (u.firstEffect = null),
                            (u.lastEffect = null),
                            null === (c = u.alternate)
                              ? ((u.childLanes = 0),
                                (u.lanes = e),
                                (u.child = null),
                                (u.memoizedProps = null),
                                (u.memoizedState = null),
                                (u.updateQueue = null),
                                (u.dependencies = null),
                                (u.stateNode = null))
                              : ((u.childLanes = c.childLanes),
                                (u.lanes = c.lanes),
                                (u.child = c.child),
                                (u.memoizedProps = c.memoizedProps),
                                (u.memoizedState = c.memoizedState),
                                (u.updateQueue = c.updateQueue),
                                (u.type = c.type),
                                (e = c.dependencies),
                                (u.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return fo(za, (1 & za.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    $o() > Zu &&
                    ((t.flags |= 64),
                    (u = !0),
                    iu(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!u)
                  if (null !== (e = Aa(c))) {
                    if (
                      ((t.flags |= 64),
                      (u = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      iu(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !c.alternate &&
                        !Ba)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * $o() - r.renderingStartTime > Zu &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (u = !0),
                      iu(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c),
                    (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = $o()),
                  (n.sibling = null),
                  (t = za.current),
                  fo(za, u ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                El(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function lu(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && bo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ma(), so(go), so(ho), Ka(), 0 !== (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Fa(e), null;
            case 13:
              return (
                so(za),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return so(za), null;
            case 4:
              return Ma(), null;
            case 10:
              return oa(e), null;
            case 23:
            case 24:
              return El(), null;
            default:
              return null;
          }
        }
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Z(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function su(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (qi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Qi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), La(Pa.current);
              var i,
                u = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (u = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (u = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (u = []);
                  break;
                case "textarea":
                  (a = ue(e, a)), (r = ue(e, r)), (u = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Hr);
              }
              for (f in (xe(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var c = a[f];
                    for (i in c)
                      c.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (l.hasOwnProperty(f)
                        ? u || (u = [])
                        : (u = u || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (
                  ((c = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && s !== c && (null != s || null != c))
                )
                  if ("style" === f)
                    if (c) {
                      for (i in c)
                        !c.hasOwnProperty(i) ||
                          (s && s.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in s)
                        s.hasOwnProperty(i) &&
                          c[i] !== s[i] &&
                          (n || (n = {}), (n[i] = s[i]));
                    } else n || (u || (u = []), u.push(f, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (u = u || []).push(f, s))
                      : "children" === f
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (u = u || []).push(f, "" + s)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (l.hasOwnProperty(f)
                          ? (null != s && "onScroll" === f && Pr("scroll", e),
                            u || c === s || (u = []))
                          : "object" === typeof s &&
                            null !== s &&
                            s.$$typeof === M
                          ? s.toString()
                          : (u = u || []).push(f, s));
              }
              n && (u = u || []).push("style", n);
              var f = u;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Ki = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var fu = "function" === typeof WeakMap ? WeakMap : Map;
        function du(e, t, n) {
          ((n = fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ku || ((Ku = !0), (Yu = r)), su(0, t);
            }),
            n
          );
        }
        function pu(e, t, n) {
          (n = fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            n.payload = function () {
              return su(0, t), r(o);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Xu ? (Xu = new Set([this])) : Xu.add(this),
                  su(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hu = "function" === typeof WeakSet ? WeakSet : Set;
        function gu(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Hl(e, n);
              }
            else t.current = null;
        }
        function vu(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Xo(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Gr(t.stateNode.containerInfo));
          }
          throw Error(i(163));
        }
        function mu(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 !== (4 & (o = o.tag)) &&
                      0 !== (1 & o) &&
                      (Fl(n, e), Rl(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Xo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ga(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ga(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Vr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && kt(n))))
              );
          }
          throw Error(i(163));
        }
        function yu(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  void 0 !== o && null !== o && o.hasOwnProperty("display")
                    ? o.display
                    : null),
                  (r.style.display = Ce("display", o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bu(e, t) {
          if (So && "function" === typeof So.onCommitFiberUnmount)
            try {
              So.onCommitFiberUnmount(xo, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 !== (4 & r)) Fl(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (a) {
                        Hl(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (gu(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Hl(t, a);
                }
              break;
            case 5:
              gu(t);
              break;
            case 4:
              Su(e, t);
          }
        }
        function wu(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function Cu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ku(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Cu(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || Cu(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Eu(e, n, t) : xu(e, n, t);
        }
        function Eu(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Hr));
          else if (4 !== r && null !== (e = e.child))
            for (Eu(e, t, n), e = e.sibling; null !== e; )
              Eu(e, t, n), (e = e.sibling);
        }
        function xu(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (xu(e, t, n), e = e.sibling; null !== e; )
              xu(e, t, n), (e = e.sibling);
        }
        function Su(e, t) {
          for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
              a = o.return;
              e: for (;;) {
                if (null === a) throw Error(i(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var u = e, l = o, c = l; ; )
                if ((bu(u, c), null !== c.child && 4 !== c.tag))
                  (c.child.return = c), (c = c.child);
                else {
                  if (c === l) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === l) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((u = n),
                  (l = o.stateNode),
                  8 === u.nodeType
                    ? u.parentNode.removeChild(l)
                    : u.removeChild(l))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((bu(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (a = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function _u(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Se(e, o),
                      t = Se(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var u = a[o],
                      l = a[o + 1];
                    "style" === u
                      ? ke(n, l)
                      : "dangerouslySetInnerHTML" === u
                      ? me(n, l)
                      : "children" === u
                      ? ye(n, l)
                      : w(n, u, l, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ce(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? ie(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ie(n, !!r.multiple, r.defaultValue, !0)
                              : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), kt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Wu = $o()), yu(t.child, !0)),
                void Ou(t)
              );
            case 19:
              return void Ou(t);
            case 23:
            case 24:
              return void yu(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function Ou(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hu()),
              t.forEach(function (t) {
                var r = Bl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Iu(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Tu = Math.ceil,
          Pu = C.ReactCurrentDispatcher,
          Du = C.ReactCurrentOwner,
          Nu = 0,
          Lu = null,
          ju = null,
          Mu = 0,
          Ru = 0,
          Fu = co(0),
          zu = 0,
          Au = null,
          Hu = 0,
          Uu = 0,
          Bu = 0,
          Vu = 0,
          $u = null,
          Wu = 0,
          Zu = 1 / 0;
        function Gu() {
          Zu = $o() + 500;
        }
        var qu,
          Qu = null,
          Ku = !1,
          Yu = null,
          Xu = null,
          Ju = !1,
          el = null,
          tl = 90,
          nl = [],
          rl = [],
          ol = null,
          al = 0,
          il = null,
          ul = -1,
          ll = 0,
          cl = 0,
          sl = null,
          fl = !1;
        function dl() {
          return 0 !== (48 & Nu) ? $o() : -1 !== ul ? ul : (ul = $o());
        }
        function pl(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Wo() ? 1 : 2;
          if ((0 === ll && (ll = Hu), 0 !== Yo.transition)) {
            0 !== cl && (cl = null !== $u ? $u.pendingLanes : 0), (e = ll);
            var t = 4186112 & ~cl;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Wo()),
            0 !== (4 & Nu) && 98 === e
              ? (e = Ht(12, ll))
              : (e = Ht(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ll
                )),
            e
          );
        }
        function hl(e, t, n) {
          if (50 < al) throw ((al = 0), (il = null), Error(i(185)));
          if (null === (e = gl(e, t))) return null;
          Vt(e, t, n), e === Lu && ((Bu |= t), 4 === zu && yl(e, Mu));
          var r = Wo();
          1 === t
            ? 0 !== (8 & Nu) && 0 === (48 & Nu)
              ? bl(e)
              : (vl(e, n), 0 === Nu && (Gu(), Qo()))
            : (0 === (4 & Nu) ||
                (98 !== r && 99 !== r) ||
                (null === ol ? (ol = new Set([e])) : ol.add(e)),
              vl(e, n)),
            ($u = e);
        }
        function gl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function vl(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              u = e.pendingLanes;
            0 < u;

          ) {
            var l = 31 - $t(u),
              c = 1 << l,
              s = a[l];
            if (-1 === s) {
              if (0 === (c & r) || 0 !== (c & o)) {
                (s = t), Ft(c);
                var f = Rt;
                a[l] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= c);
            u &= ~c;
          }
          if (((r = zt(e, e === Lu ? Mu : 0)), (t = Rt), 0 === r))
            null !== n &&
              (n !== zo && Io(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== zo && Io(n);
            }
            15 === t
              ? ((n = bl.bind(null, e)),
                null === Ho ? ((Ho = [n]), (Uo = Oo(Lo, Ko))) : Ho.push(n),
                (n = zo))
              : 14 === t
              ? (n = qo(99, bl.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(i(358, e));
                  }
                })(t)),
                (n = qo(n, ml.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function ml(e) {
          if (((ul = -1), (cl = ll = 0), 0 !== (48 & Nu))) throw Error(i(327));
          var t = e.callbackNode;
          if (Ml() && e.callbackNode !== t) return null;
          var n = zt(e, e === Lu ? Mu : 0);
          if (0 === n) return null;
          var r = n,
            o = Nu;
          Nu |= 16;
          var a = _l();
          for ((Lu === e && Mu === r) || (Gu(), xl(e, r)); ; )
            try {
              Tl();
              break;
            } catch (l) {
              Sl(e, l);
            }
          if (
            (ra(),
            (Pu.current = a),
            (Nu = o),
            null !== ju ? (r = 0) : ((Lu = null), (Mu = 0), (r = zu)),
            0 !== (Hu & Bu))
          )
            xl(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Nu |= 64),
                e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
                0 !== (n = At(e)) && (r = Ol(e, n))),
              1 === r)
            )
              throw ((t = Au), xl(e, 0), yl(e, n), vl(e, $o()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
              case 5:
                Nl(e);
                break;
              case 3:
                if (
                  (yl(e, n), (62914560 & n) === n && 10 < (r = Wu + 500 - $o()))
                ) {
                  if (0 !== zt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    dl(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Wr(Nl.bind(null, e), r);
                  break;
                }
                Nl(e);
                break;
              case 4:
                if ((yl(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var u = 31 - $t(n);
                  (a = 1 << u), (u = r[u]) > o && (o = u), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = $o() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Tu(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Wr(Nl.bind(null, e), n);
                  break;
                }
                Nl(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return vl(e, $o()), e.callbackNode === t ? ml.bind(null, e) : null;
        }
        function yl(e, t) {
          for (
            t &= ~Vu,
              t &= ~Bu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - $t(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bl(e) {
          if (0 !== (48 & Nu)) throw Error(i(327));
          if ((Ml(), e === Lu && 0 !== (e.expiredLanes & Mu))) {
            var t = Mu,
              n = Ol(e, t);
            0 !== (Hu & Bu) && (n = Ol(e, (t = zt(e, t))));
          } else n = Ol(e, (t = zt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Nu |= 64),
              e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
              0 !== (t = At(e)) && (n = Ol(e, t))),
            1 === n)
          )
            throw ((n = Au), xl(e, 0), yl(e, t), vl(e, $o()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Nl(e),
            vl(e, $o()),
            null
          );
        }
        function wl(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && (Gu(), Qo());
          }
        }
        function Cl(e, t) {
          var n = Nu;
          (Nu &= -2), (Nu |= 8);
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && (Gu(), Qo());
          }
        }
        function kl(e, t) {
          fo(Fu, Ru), (Ru |= t), (Hu |= t);
        }
        function El() {
          (Ru = Fu.current), so(Fu);
        }
        function xl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Zr(n)), null !== ju))
            for (n = ju.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    bo();
                  break;
                case 3:
                  Ma(), so(go), so(ho), Ka();
                  break;
                case 5:
                  Fa(r);
                  break;
                case 4:
                  Ma();
                  break;
                case 13:
                case 19:
                  so(za);
                  break;
                case 10:
                  oa(r);
                  break;
                case 23:
                case 24:
                  El();
              }
              n = n.return;
            }
          (Lu = e),
            (ju = Zl(e.current, null)),
            (Mu = Ru = Hu = t),
            (zu = 0),
            (Au = null),
            (Vu = Bu = Uu = 0);
        }
        function Sl(e, t) {
          for (;;) {
            var n = ju;
            try {
              if ((ra(), (Ya.current = Ni), ri)) {
                for (var r = ei.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                ri = !1;
              }
              if (
                ((Ja = 0),
                (ni = ti = ei = null),
                (oi = !1),
                (Du.current = null),
                null === n || null === n.return)
              ) {
                (zu = 1), (Au = t), (ju = null);
                break;
              }
              e: {
                var a = e,
                  i = n.return,
                  u = n,
                  l = t;
                if (
                  ((t = Mu),
                  (u.flags |= 2048),
                  (u.firstEffect = u.lastEffect = null),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l;
                  if (0 === (2 & u.mode)) {
                    var s = u.alternate;
                    s
                      ? ((u.updateQueue = s.updateQueue),
                        (u.memoizedState = s.memoizedState),
                        (u.lanes = s.lanes))
                      : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var f = 0 !== (1 & za.current),
                    d = i;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var g = d.memoizedProps;
                        p =
                          void 0 !== g.fallback &&
                          (!0 !== g.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var v = d.updateQueue;
                      if (null === v) {
                        var m = new Set();
                        m.add(c), (d.updateQueue = m);
                      } else v.add(c);
                      if (0 === (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (u.flags |= 16384),
                          (u.flags &= -2981),
                          1 === u.tag)
                        )
                          if (null === u.alternate) u.tag = 17;
                          else {
                            var y = fa(-1, 1);
                            (y.tag = 2), da(u, y);
                          }
                        u.lanes |= 1;
                        break e;
                      }
                      (l = void 0), (u = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new fu()),
                            (l = new Set()),
                            b.set(c, l))
                          : void 0 === (l = b.get(c)) &&
                            ((l = new Set()), b.set(c, l)),
                        !l.has(u))
                      ) {
                        l.add(u);
                        var w = Ul.bind(null, a, c, u);
                        c.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  l = Error(
                    (G(u.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== zu && (zu = 2), (l = cu(l, u)), (d = i);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = l),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        pa(d, du(0, a, t));
                      break e;
                    case 1:
                      a = l;
                      var C = d.type,
                        k = d.stateNode;
                      if (
                        0 === (64 & d.flags) &&
                        ("function" === typeof C.getDerivedStateFromError ||
                          (null !== k &&
                            "function" === typeof k.componentDidCatch &&
                            (null === Xu || !Xu.has(k))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          pa(d, pu(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Dl(n);
            } catch (E) {
              (t = E), ju === n && null !== n && (ju = n = n.return);
              continue;
            }
            break;
          }
        }
        function _l() {
          var e = Pu.current;
          return (Pu.current = Ni), null === e ? Ni : e;
        }
        function Ol(e, t) {
          var n = Nu;
          Nu |= 16;
          var r = _l();
          for ((Lu === e && Mu === t) || xl(e, t); ; )
            try {
              Il();
              break;
            } catch (o) {
              Sl(e, o);
            }
          if ((ra(), (Nu = n), (Pu.current = r), null !== ju))
            throw Error(i(261));
          return (Lu = null), (Mu = 0), zu;
        }
        function Il() {
          for (; null !== ju; ) Pl(ju);
        }
        function Tl() {
          for (; null !== ju && !To(); ) Pl(ju);
        }
        function Pl(e) {
          var t = qu(e.alternate, e, Ru);
          (e.memoizedProps = e.pendingProps),
            null === t ? Dl(e) : (ju = t),
            (Du.current = null);
        }
        function Dl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = uu(n, t, Ru))) return void (ju = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Ru) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = lu(t))) return (n.flags &= 2047), void (ju = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (ju = t);
            ju = t = e;
          } while (null !== t);
          0 === zu && (zu = 5);
        }
        function Nl(e) {
          var t = Wo();
          return Go(99, Ll.bind(null, e, t)), null;
        }
        function Ll(e, t) {
          do {
            Ml();
          } while (null !== el);
          if (0 !== (48 & Nu)) throw Error(i(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            a = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var u = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
            var c = 31 - $t(a),
              s = 1 << c;
            (o[c] = 0), (u[c] = -1), (l[c] = -1), (a &= ~s);
          }
          if (
            (null !== ol && 0 === (24 & r) && ol.has(e) && ol.delete(e),
            e === Lu && ((ju = Lu = null), (Mu = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Nu),
              (Nu |= 32),
              (Du.current = null),
              (Ur = Qt),
              mr((u = vr())))
            ) {
              if ("selectionStart" in u)
                l = { start: u.selectionStart, end: u.selectionEnd };
              else
                e: if (
                  ((l = ((l = u.ownerDocument) && l.defaultView) || window),
                  (s = l.getSelection && l.getSelection()) &&
                    0 !== s.rangeCount)
                ) {
                  (l = s.anchorNode),
                    (a = s.anchorOffset),
                    (c = s.focusNode),
                    (s = s.focusOffset);
                  try {
                    l.nodeType, c.nodeType;
                  } catch (_) {
                    l = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    g = 0,
                    v = u,
                    m = null;
                  t: for (;;) {
                    for (
                      var y;
                      v !== l || (0 !== a && 3 !== v.nodeType) || (d = f + a),
                        v !== c || (0 !== s && 3 !== v.nodeType) || (p = f + s),
                        3 === v.nodeType && (f += v.nodeValue.length),
                        null !== (y = v.firstChild);

                    )
                      (m = v), (v = y);
                    for (;;) {
                      if (v === u) break t;
                      if (
                        (m === l && ++h === a && (d = f),
                        m === c && ++g === s && (p = f),
                        null !== (y = v.nextSibling))
                      )
                        break;
                      m = (v = m).parentNode;
                    }
                    v = y;
                  }
                  l = -1 === d || -1 === p ? null : { start: d, end: p };
                } else l = null;
              l = l || { start: 0, end: 0 };
            } else l = null;
            (Br = { focusedElem: u, selectionRange: l }),
              (Qt = !1),
              (sl = null),
              (fl = !1),
              (Qu = r);
            do {
              try {
                jl();
              } catch (_) {
                if (null === Qu) throw Error(i(330));
                Hl(Qu, _), (Qu = Qu.nextEffect);
              }
            } while (null !== Qu);
            (sl = null), (Qu = r);
            do {
              try {
                for (u = e; null !== Qu; ) {
                  var b = Qu.flags;
                  if ((16 & b && ye(Qu.stateNode, ""), 128 & b)) {
                    var w = Qu.alternate;
                    if (null !== w) {
                      var C = w.ref;
                      null !== C &&
                        ("function" === typeof C
                          ? C(null)
                          : (C.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      ku(Qu), (Qu.flags &= -3);
                      break;
                    case 6:
                      ku(Qu), (Qu.flags &= -3), _u(Qu.alternate, Qu);
                      break;
                    case 1024:
                      Qu.flags &= -1025;
                      break;
                    case 1028:
                      (Qu.flags &= -1025), _u(Qu.alternate, Qu);
                      break;
                    case 4:
                      _u(Qu.alternate, Qu);
                      break;
                    case 8:
                      Su(u, (l = Qu));
                      var k = l.alternate;
                      wu(l), null !== k && wu(k);
                  }
                  Qu = Qu.nextEffect;
                }
              } catch (_) {
                if (null === Qu) throw Error(i(330));
                Hl(Qu, _), (Qu = Qu.nextEffect);
              }
            } while (null !== Qu);
            if (
              ((C = Br),
              (w = vr()),
              (b = C.focusedElem),
              (u = C.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                gr(b.ownerDocument.documentElement, b))
            ) {
              null !== u &&
                mr(b) &&
                ((w = u.start),
                void 0 === (C = u.end) && (C = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(C, b.value.length)))
                  : (C =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((C = C.getSelection()),
                    (l = b.textContent.length),
                    (k = Math.min(u.start, l)),
                    (u = void 0 === u.end ? k : Math.min(u.end, l)),
                    !C.extend && k > u && ((l = u), (u = k), (k = l)),
                    (l = hr(b, k)),
                    (a = hr(b, u)),
                    l &&
                      a &&
                      (1 !== C.rangeCount ||
                        C.anchorNode !== l.node ||
                        C.anchorOffset !== l.offset ||
                        C.focusNode !== a.node ||
                        C.focusOffset !== a.offset) &&
                      ((w = w.createRange()).setStart(l.node, l.offset),
                      C.removeAllRanges(),
                      k > u
                        ? (C.addRange(w), C.extend(a.node, a.offset))
                        : (w.setEnd(a.node, a.offset), C.addRange(w))))),
                (w = []);
              for (C = b; (C = C.parentNode); )
                1 === C.nodeType &&
                  w.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
              for (
                "function" === typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((C = w[b]).element.scrollLeft = C.left),
                  (C.element.scrollTop = C.top);
            }
            (Qt = !!Ur), (Br = Ur = null), (e.current = n), (Qu = r);
            do {
              try {
                for (b = e; null !== Qu; ) {
                  var E = Qu.flags;
                  if ((36 & E && mu(b, Qu.alternate, Qu), 128 & E)) {
                    w = void 0;
                    var x = Qu.ref;
                    if (null !== x) {
                      var S = Qu.stateNode;
                      Qu.tag,
                        (w = S),
                        "function" === typeof x ? x(w) : (x.current = w);
                    }
                  }
                  Qu = Qu.nextEffect;
                }
              } catch (_) {
                if (null === Qu) throw Error(i(330));
                Hl(Qu, _), (Qu = Qu.nextEffect);
              }
            } while (null !== Qu);
            (Qu = null), Ao(), (Nu = o);
          } else e.current = n;
          if (Ju) (Ju = !1), (el = e), (tl = t);
          else
            for (Qu = r; null !== Qu; )
              (t = Qu.nextEffect),
                (Qu.nextEffect = null),
                8 & Qu.flags &&
                  (((E = Qu).sibling = null), (E.stateNode = null)),
                (Qu = t);
          if (
            (0 === (r = e.pendingLanes) && (Xu = null),
            1 === r ? (e === il ? al++ : ((al = 0), (il = e))) : (al = 0),
            (n = n.stateNode),
            So && "function" === typeof So.onCommitFiberRoot)
          )
            try {
              So.onCommitFiberRoot(
                xo,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (_) {}
          if ((vl(e, $o()), Ku)) throw ((Ku = !1), (e = Yu), (Yu = null), e);
          return 0 !== (8 & Nu) || Qo(), null;
        }
        function jl() {
          for (; null !== Qu; ) {
            var e = Qu.alternate;
            fl ||
              null === sl ||
              (0 !== (8 & Qu.flags)
                ? et(Qu, sl) && (fl = !0)
                : 13 === Qu.tag && Iu(e, Qu) && et(Qu, sl) && (fl = !0));
            var t = Qu.flags;
            0 !== (256 & t) && vu(e, Qu),
              0 === (512 & t) ||
                Ju ||
                ((Ju = !0),
                qo(97, function () {
                  return Ml(), null;
                })),
              (Qu = Qu.nextEffect);
          }
        }
        function Ml() {
          if (90 !== tl) {
            var e = 97 < tl ? 97 : tl;
            return (tl = 90), Go(e, zl);
          }
          return !1;
        }
        function Rl(e, t) {
          nl.push(t, e),
            Ju ||
              ((Ju = !0),
              qo(97, function () {
                return Ml(), null;
              }));
        }
        function Fl(e, t) {
          rl.push(t, e),
            Ju ||
              ((Ju = !0),
              qo(97, function () {
                return Ml(), null;
              }));
        }
        function zl() {
          if (null === el) return !1;
          var e = el;
          if (((el = null), 0 !== (48 & Nu))) throw Error(i(331));
          var t = Nu;
          Nu |= 32;
          var n = rl;
          rl = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              u = o.destroy;
            if (((o.destroy = void 0), "function" === typeof u))
              try {
                u();
              } catch (c) {
                if (null === a) throw Error(i(330));
                Hl(a, c);
              }
          }
          for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var l = o.create;
              o.destroy = l();
            } catch (c) {
              if (null === a) throw Error(i(330));
              Hl(a, c);
            }
          }
          for (l = e.current.firstEffect; null !== l; )
            (e = l.nextEffect),
              (l.nextEffect = null),
              8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
              (l = e);
          return (Nu = t), Qo(), !0;
        }
        function Al(e, t, n) {
          da(e, (t = du(0, (t = cu(n, t)), 1))),
            (t = dl()),
            null !== (e = gl(e, 1)) && (Vt(e, 1, t), vl(e, t));
        }
        function Hl(e, t) {
          if (3 === e.tag) Al(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Al(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Xu || !Xu.has(r)))
                ) {
                  var o = pu(n, (e = cu(t, e)), 1);
                  if ((da(n, o), (o = dl()), null !== (n = gl(n, 1))))
                    Vt(n, 1, o), vl(n, o);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Xu || !Xu.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ul(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = dl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Mu & n) === n &&
              (4 === zu ||
              (3 === zu && (62914560 & Mu) === Mu && 500 > $o() - Wu)
                ? xl(e, 0)
                : (Vu |= n)),
            vl(e, t);
        }
        function Bl(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Wo() ? 1 : 2)
                : (0 === ll && (ll = Hu),
                  0 === (t = Ut(62914560 & ~ll)) && (t = 4194304))),
            (n = dl()),
            null !== (e = gl(e, t)) && (Vt(e, t, n), vl(e, n));
        }
        function Vl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function $l(e, t, n, r) {
          return new Vl(e, t, n, r);
        }
        function Wl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Zl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = $l(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Gl(e, t, n, r, o, a) {
          var u = 2;
          if (((r = e), "function" === typeof e)) Wl(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case x:
                return ql(n.children, o, a, t);
              case R:
                (u = 8), (o |= 16);
                break;
              case S:
                (u = 8), (o |= 1);
                break;
              case _:
                return (
                  ((e = $l(12, n, t, 8 | o)).elementType = _),
                  (e.type = _),
                  (e.lanes = a),
                  e
                );
              case P:
                return (
                  ((e = $l(13, n, t, o)).type = P),
                  (e.elementType = P),
                  (e.lanes = a),
                  e
                );
              case D:
                return (
                  ((e = $l(19, n, t, o)).elementType = D), (e.lanes = a), e
                );
              case F:
                return Ql(n, o, a, t);
              case z:
                return (
                  ((e = $l(24, n, t, o)).elementType = z), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      u = 10;
                      break e;
                    case I:
                      u = 9;
                      break e;
                    case T:
                      u = 11;
                      break e;
                    case N:
                      u = 14;
                      break e;
                    case L:
                      (u = 16), (r = null);
                      break e;
                    case j:
                      u = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = $l(u, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function ql(e, t, n, r) {
          return ((e = $l(7, e, r, t)).lanes = n), e;
        }
        function Ql(e, t, n, r) {
          return ((e = $l(23, e, r, t)).elementType = F), (e.lanes = n), e;
        }
        function Kl(e, t, n) {
          return ((e = $l(6, e, null, t)).lanes = n), e;
        }
        function Yl(e, t, n) {
          return (
            ((t = $l(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Xl(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Jl(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function ec(e, t, n, r) {
          var o = t.current,
            a = dl(),
            u = pl(o);
          e: if (n) {
            t: {
              if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var l = n;
              do {
                switch (l.tag) {
                  case 3:
                    l = l.stateNode.context;
                    break t;
                  case 1:
                    if (yo(l.type)) {
                      l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                l = l.return;
              } while (null !== l);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (yo(c)) {
                n = Co(n, c, l);
                break e;
              }
            }
            n = l;
          } else n = po;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = fa(a, u)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(o, t),
            hl(o, u, a),
            u
          );
        }
        function tc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function nc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rc(e, t) {
          nc(e, t), (e = e.alternate) && nc(e, t);
        }
        function oc(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Xl(e, t, null != n && !0 === n.hydrate)),
            (t = $l(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ca(t),
            (e[eo] = n.current),
            Nr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function ac(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function ic(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a._internalRoot;
            if ("function" === typeof o) {
              var u = o;
              o = function () {
                var e = tc(i);
                u.call(e);
              };
            }
            ec(t, i, e, o);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new oc(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = a._internalRoot),
              "function" === typeof o)
            ) {
              var l = o;
              o = function () {
                var e = tc(i);
                l.call(e);
              };
            }
            Cl(function () {
              ec(t, i, e, o);
            });
          }
          return tc(i);
        }
        function uc(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!ac(t)) throw Error(i(200));
          return Jl(e, t, null, n);
        }
        (qu = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || go.current) Fi = !0;
            else {
              if (0 === (n & r)) {
                switch (((Fi = !1), t.tag)) {
                  case 3:
                    Gi(t), qa();
                    break;
                  case 5:
                    Ra(t);
                    break;
                  case 1:
                    yo(t.type) && ko(t);
                    break;
                  case 4:
                    ja(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    fo(Jo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Xi(e, t, n)
                        : (fo(za, 1 & za.current),
                          null !== (t = au(e, t, n)) ? t.sibling : null);
                    fo(za, 1 & za.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return ou(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      fo(za, za.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Bi(e, t, n);
                }
                return au(e, t, n);
              }
              Fi = 0 !== (16384 & e.flags);
            }
          else Fi = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = mo(t, ho.current)),
                ia(t, n),
                (o = ui(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" === typeof o &&
                  null !== o &&
                  "function" === typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  yo(r))
                ) {
                  var a = !0;
                  ko(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  ca(t);
                var u = r.getDerivedStateFromProps;
                "function" === typeof u && ma(t, r, u, e),
                  (o.updater = ya),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  ka(t, r, e, n),
                  (t = Zi(null, t, r, !0, a, n));
              } else (t.tag = 0), zi(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (a = o._init)(o._payload)),
                  (t.type = o),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Wl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Xo(o, e)),
                  a)
                ) {
                  case 0:
                    t = $i(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Wi(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Ai(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Hi(null, t, o, Xo(o.type, e), r, n);
                    break e;
                }
                throw Error(i(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                $i(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Wi(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 3:
              if ((Gi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                sa(e, t),
                ha(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                qa(), (t = au(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Ua = qr(t.stateNode.containerInfo.firstChild)),
                    (Ha = t),
                    (a = Ba = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Qa.push(a);
                  for (n = Ia(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else zi(e, t, r, n), qa();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ra(t),
                null === e && Wa(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (u = o.children),
                $r(r, o)
                  ? (u = null)
                  : null !== a && $r(r, a) && (t.flags |= 16),
                Vi(e, t),
                zi(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && Wa(t), null;
            case 13:
              return Xi(e, t, n);
            case 4:
              return (
                ja(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Oa(t, null, r, n)) : zi(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ai(e, t, r, (o = t.elementType === r ? o : Xo(r, o)), n)
              );
            case 7:
              return zi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (u = t.memoizedProps),
                  (a = o.value);
                var l = t.type._context;
                if (
                  (fo(Jo, l._currentValue), (l._currentValue = a), null !== u)
                )
                  if (
                    ((l = u.value),
                    0 ===
                      (a = sr(l, a)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(l, a)
                            : 1073741823)))
                  ) {
                    if (u.children === o.children && !go.current) {
                      t = au(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var c = l.dependencies;
                      if (null !== c) {
                        u = l.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r && 0 !== (s.observedBits & a)) {
                            1 === l.tag &&
                              (((s = fa(-1, n & -n)).tag = 2), da(l, s)),
                              (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              aa(l.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else
                        u = 10 === l.tag && l.type === t.type ? null : l.child;
                      if (null !== u) u.return = l;
                      else
                        for (u = l; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (l = u.sibling)) {
                            (l.return = u.return), (u = l);
                            break;
                          }
                          u = u.return;
                        }
                      l = u;
                    }
                zi(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                ia(t, n),
                (r = r((o = ua(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                zi(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Xo((o = t.type), t.pendingProps)),
                Hi(e, t, o, (a = Xo(o.type, a)), r, n)
              );
            case 15:
              return Ui(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Xo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), ko(t)) : (e = !1),
                ia(t, n),
                wa(t, r, o),
                ka(t, r, o, n),
                Zi(null, t, r, !0, e, n)
              );
            case 19:
              return ou(e, t, n);
            case 23:
            case 24:
              return Bi(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (oc.prototype.render = function (e) {
            ec(e, this._internalRoot, null, null);
          }),
          (oc.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            ec(null, e, null, function () {
              t[eo] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hl(e, 4, dl()), rc(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hl(e, 67108864, dl()), rc(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = dl(),
                n = pl(e);
              hl(e, n, t), rc(e, n);
            }
          }),
          (ot = function (e, t) {
            return t();
          }),
          (Oe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ao(r);
                      if (!o) throw Error(i(90));
                      Y(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ce(e, n);
                break;
              case "select":
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (Le = wl),
          (je = function (e, t, n, r, o) {
            var a = Nu;
            Nu |= 4;
            try {
              return Go(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Nu = a) && (Gu(), Qo());
            }
          }),
          (Me = function () {
            0 === (49 & Nu) &&
              ((function () {
                if (null !== ol) {
                  var e = ol;
                  (ol = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), vl(e, $o());
                    });
                }
                Qo();
              })(),
              Ml());
          }),
          (Re = function (e, t) {
            var n = Nu;
            Nu |= 2;
            try {
              return e(t);
            } finally {
              0 === (Nu = n) && (Gu(), Qo());
            }
          });
        var lc = { Events: [ro, oo, ao, De, Ne, Ml, { current: !1 }] },
          cc = {
            findFiberByHostInstance: no,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          sc = {
            bundleType: cc.bundleType,
            version: cc.version,
            rendererPackageName: cc.rendererPackageName,
            rendererConfig: cc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: C.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              cc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!fc.isDisabled && fc.supportsFiber)
            try {
              (xo = fc.inject(sc)), (So = fc);
            } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lc),
          (t.createPortal = uc),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw Error(i(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Nu;
            if (0 !== (48 & n)) return e(t);
            Nu |= 1;
            try {
              if (e) return Go(99, e.bind(null, t));
            } finally {
              (Nu = n), Qo();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ac(t)) throw Error(i(200));
            return ic(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ac(t)) throw Error(i(200));
            return ic(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ac(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (Cl(function () {
                ic(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[eo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = wl),
          (t.unstable_createPortal = function (e, t) {
            return uc(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ac(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ic(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      4164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      1372: function (e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          u = n ? Symbol.for("react.profiler") : 60114,
          l = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          s = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          g = n ? Symbol.for("react.memo") : 60115,
          v = n ? Symbol.for("react.lazy") : 60116,
          m = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function C(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case s:
                  case f:
                  case a:
                  case u:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case d:
                      case v:
                      case g:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function k(e) {
          return C(e) === f;
        }
        (t.AsyncMode = s),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = c),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = a),
          (t.Lazy = v),
          (t.Memo = g),
          (t.Portal = o),
          (t.Profiler = u),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || C(e) === s;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return C(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return C(e) === l;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return C(e) === d;
          }),
          (t.isFragment = function (e) {
            return C(e) === a;
          }),
          (t.isLazy = function (e) {
            return C(e) === v;
          }),
          (t.isMemo = function (e) {
            return C(e) === g;
          }),
          (t.isPortal = function (e) {
            return C(e) === o;
          }),
          (t.isProfiler = function (e) {
            return C(e) === u;
          }),
          (t.isStrictMode = function (e) {
            return C(e) === i;
          }),
          (t.isSuspense = function (e) {
            return C(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === f ||
              e === u ||
              e === i ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === g ||
                  e.$$typeof === l ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === m))
            );
          }),
          (t.typeOf = C);
      },
      7441: function (e, t, n) {
        "use strict";
        e.exports = n(1372);
      },
      8459: function (e, t) {
        "use strict";
        var n = 60103,
          r = 60106,
          o = 60107,
          a = 60108,
          i = 60114,
          u = 60109,
          l = 60110,
          c = 60112,
          s = 60113,
          f = 60120,
          d = 60115,
          p = 60116,
          h = 60121,
          g = 60122,
          v = 60117,
          m = 60129,
          y = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var b = Symbol.for;
          (n = b("react.element")),
            (r = b("react.portal")),
            (o = b("react.fragment")),
            (a = b("react.strict_mode")),
            (i = b("react.profiler")),
            (u = b("react.provider")),
            (l = b("react.context")),
            (c = b("react.forward_ref")),
            (s = b("react.suspense")),
            (f = b("react.suspense_list")),
            (d = b("react.memo")),
            (p = b("react.lazy")),
            (h = b("react.block")),
            (g = b("react.server.block")),
            (v = b("react.fundamental")),
            (m = b("react.debug_trace_mode")),
            (y = b("react.legacy_hidden"));
        }
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case a:
                  case s:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case c:
                      case p:
                      case d:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
      },
      6900: function (e, t, n) {
        "use strict";
        n(8459);
      },
      6374: function (e, t, n) {
        "use strict";
        n(1725);
        var r = n(2791),
          o = 60103;
        if (
          ((t.Fragment = 60107), "function" === typeof Symbol && Symbol.for)
        ) {
          var a = Symbol.for;
          (o = a("react.element")), (t.Fragment = a("react.fragment"));
        }
        var i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = Object.prototype.hasOwnProperty,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            a = {},
            c = null,
            s = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            u.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: c,
            ref: s,
            props: a,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      9117: function (e, t, n) {
        "use strict";
        var r = n(1725),
          o = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          u = 60110,
          l = 60112;
        t.Suspense = 60113;
        var c = 60115,
          s = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (i = f("react.provider")),
            (u = f("react.context")),
            (l = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (c = f("react.memo")),
            (s = f("react.lazy"));
        }
        var d = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function m() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (m.prototype = v.prototype);
        var b = (y.prototype = new m());
        (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          C = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            a = {},
            i = null,
            u = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              C.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) a.children = n;
          else if (1 < l) {
            for (var c = Array(l), s = 0; s < l; s++) c[s] = arguments[s + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: u,
            props: a,
            _owner: w.current,
          };
        }
        function x(e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }
        var S = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, n, r, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === r ? "." + _(l, 0) : r),
              Array.isArray(i)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  O(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (x(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(S, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var s = r + _((u = e[c]), c);
              l += O(u, t, n, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), c = 0; !(u = e.next()).done; )
              l += O((u = u.value), t, n, (s = r + _(u, c++)), i);
          else if ("object" === u)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return l;
        }
        function I(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var P = { current: null };
        function D() {
          var e = P.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var N = {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: I,
          forEach: function (e, t, n) {
            I(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              I(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              I(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!x(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = v),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              i = e.key,
              u = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((u = t.ref), (l = w.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                C.call(t, s) &&
                  !k.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              a.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: u,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: u,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = x),
          (t.lazy = function (e) {
            return {
              $$typeof: s,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return D().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return D().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return D().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return D().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return D().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return D().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return D().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return D().useRef(e);
          }),
          (t.useState = function (e) {
            return D().useState(e);
          }),
          (t.version = "17.0.2");
      },
      2791: function (e, t, n) {
        "use strict";
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(6374);
      },
      9727: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o = "function" === typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            i = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag";
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, "");
          } catch (D) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function c(e, t, n, r) {
            var o = t && t.prototype instanceof v ? t : v,
              a = Object.create(o.prototype),
              i = new I(r || []);
            return (
              (a._invoke = (function (e, t, n) {
                var r = f;
                return function (o, a) {
                  if (r === p) throw new Error("Generator is already running");
                  if (r === h) {
                    if ("throw" === o) throw a;
                    return P();
                  }
                  for (n.method = o, n.arg = a; ; ) {
                    var i = n.delegate;
                    if (i) {
                      var u = S(i, n);
                      if (u) {
                        if (u === g) continue;
                        return u;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === f) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = p;
                    var l = s(e, t, n);
                    if ("normal" === l.type) {
                      if (((r = n.done ? h : d), l.arg === g)) continue;
                      return { value: l.arg, done: n.done };
                    }
                    "throw" === l.type &&
                      ((r = h), (n.method = "throw"), (n.arg = l.arg));
                  }
                };
              })(e, n, i)),
              a
            );
          }
          function s(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (D) {
              return { type: "throw", arg: D };
            }
          }
          e.wrap = c;
          var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            g = {};
          function v() {}
          function m() {}
          function y() {}
          var b = {};
          l(b, a, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            C = w && w(w(T([])));
          C && C !== n && r.call(C, a) && (b = C);
          var k = (y.prototype = v.prototype = Object.create(b));
          function E(e) {
            ["next", "throw", "return"].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function x(e, t) {
            function n(o, a, i, u) {
              var l = s(e[o], e, a);
              if ("throw" !== l.type) {
                var c = l.arg,
                  f = c.value;
                return f && "object" === typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, i, u);
                      },
                      function (e) {
                        n("throw", e, i, u);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (c.value = e), i(c);
                      },
                      function (e) {
                        return n("throw", e, i, u);
                      }
                    );
              }
              u(l.arg);
            }
            var o;
            this._invoke = function (e, r) {
              function a() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            };
          }
          function S(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  S(e, n),
                  "throw" === n.method)
                )
                  return g;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return g;
            }
            var o = s(r, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), g
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  g)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                g);
          }
          function _(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function O(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function I(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(_, this),
              this.reset(!0);
          }
          function T(e) {
            if (e) {
              var n = e[a];
              if (n) return n.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < e.length; )
                      if (r.call(e, o))
                        return (n.value = e[o]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: t, done: !0 };
          }
          return (
            (m.prototype = y),
            l(k, "constructor", y),
            l(y, "constructor", m),
            (m.displayName = l(y, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" === typeof e && e.constructor;
              return (
                !!t &&
                (t === m || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), l(e, u, "GeneratorFunction")),
                (e.prototype = Object.create(k)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            E(x.prototype),
            l(x.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = x),
            (e.async = function (t, n, r, o, a) {
              void 0 === a && (a = Promise);
              var i = new x(c(t, n, r, o), a);
              return e.isGeneratorFunction(n)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            E(k),
            l(k, u, "Generator"),
            l(k, a, function () {
              return this;
            }),
            l(k, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = T),
            (I.prototype = {
              constructor: I,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(O),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function o(r, o) {
                  return (
                    (u.type = "throw"),
                    (u.arg = e),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    u = i.completion;
                  if ("root" === i.tryLoc) return o("end");
                  if (i.tryLoc <= this.prev) {
                    var l = r.call(i, "catchLoc"),
                      c = r.call(i, "finallyLoc");
                    if (l && c) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    } else if (l) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var a = o;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), g)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  g
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), O(n), g;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      O(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: T(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      6813: function (e, t) {
        "use strict";
        var n, r, o, a;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var u = Date,
            l = u.now();
          t.unstable_now = function () {
            return u.now() - l;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var c = null,
            s = null,
            f = function e() {
              if (null !== c)
                try {
                  var n = t.unstable_now();
                  c(!0, n), (c = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              s = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(s);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var g = !1,
            v = null,
            m = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            C = w.port2;
          (w.port1.onmessage = function () {
            if (null !== v) {
              var e = t.unstable_now();
              b = e + y;
              try {
                v(!0, e) ? C.postMessage(null) : ((g = !1), (v = null));
              } catch (n) {
                throw (C.postMessage(null), n);
              }
            } else g = !1;
          }),
            (n = function (e) {
              (v = e), g || ((g = !0), C.postMessage(null));
            }),
            (r = function (e, n) {
              m = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(m), (m = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < S(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function x(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  i = e[a],
                  u = a + 1,
                  l = e[u];
                if (void 0 !== i && 0 > S(i, n))
                  void 0 !== l && 0 > S(l, i)
                    ? ((e[r] = l), (e[u] = n), (r = u))
                    : ((e[r] = i), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== l && 0 > S(l, n))) break e;
                  (e[r] = l), (e[u] = n), (r = u);
                }
              }
            }
            return t;
          }
          return null;
        }
        function S(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var _ = [],
          O = [],
          I = 1,
          T = null,
          P = 3,
          D = !1,
          N = !1,
          L = !1;
        function j(e) {
          for (var t = E(O); null !== t; ) {
            if (null === t.callback) x(O);
            else {
              if (!(t.startTime <= e)) break;
              x(O), (t.sortIndex = t.expirationTime), k(_, t);
            }
            t = E(O);
          }
        }
        function M(e) {
          if (((L = !1), j(e), !N))
            if (null !== E(_)) (N = !0), n(R);
            else {
              var t = E(O);
              null !== t && r(M, t.startTime - e);
            }
        }
        function R(e, n) {
          (N = !1), L && ((L = !1), o()), (D = !0);
          var a = P;
          try {
            for (
              j(n), T = E(_);
              null !== T &&
              (!(T.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = T.callback;
              if ("function" === typeof i) {
                (T.callback = null), (P = T.priorityLevel);
                var u = i(T.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (T.callback = u)
                    : T === E(_) && x(_),
                  j(n);
              } else x(_);
              T = E(_);
            }
            if (null !== T) var l = !0;
            else {
              var c = E(O);
              null !== c && r(M, c.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (T = null), (P = a), (D = !1);
          }
        }
        var F = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            N || D || ((N = !0), n(R));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(_);
          }),
          (t.unstable_next = function (e) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = P;
            }
            var n = P;
            P = t;
            try {
              return e();
            } finally {
              P = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = F),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = P;
            P = e;
            try {
              return t();
            } finally {
              P = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var u = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? u + i : u)
                : (i = u),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: I++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > u
                ? ((e.sortIndex = i),
                  k(O, e),
                  null === E(_) &&
                    e === E(O) &&
                    (L ? o() : (L = !0), r(M, i - u)))
                : ((e.sortIndex = l), k(_, e), N || D || ((N = !0), n(R))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = P;
            return function () {
              var n = P;
              P = t;
              try {
                return e.apply(this, arguments);
              } finally {
                P = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        "use strict";
        e.exports = n(6813);
      },
      4260: function (e, t, n) {
        "use strict";
        n.r(t), (t.default = {});
      },
      6213: function (e, t, n) {
        "use strict";
        n.r(t), (t.default = {});
      },
      4709: function (e, t, n) {
        "use strict";
        n.r(t), (t.default = {});
      },
      1260: function (e, t, n) {
        "use strict";
        n.r(t), (t.default = {});
      },
      8895: function (e, t, n) {
        "use strict";
        n.r(t), (t.default = {});
      },
      433: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            button: "button_button__fYZir",
            button_type_primary: "button_button_type_primary__QcfBZ",
            button_type_secondary: "button_button_type_secondary__fxgws",
            button_size_large: "button_button_size_large__Je2FD",
            button_size_medium: "button_button_size_medium__mz5Tb",
            button_size_small: "button_button_size_small__X6ra8",
          });
      },
      9595: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            counter: "counter_counter__sTK5U",
            default: "counter_default__xF4ia",
            small: "counter_small__SlOgg",
            counter__num: "counter_counter__num__ZX4fF",
          });
      },
      9056: function (e, t, n) {
        "use strict";
        n.r(t),
          (t.default = {
            tab: "tab_tab__UIIk2",
            tab_type_current: "tab_tab_type_current__QYf1-",
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          FILE: function () {
            return rn;
          },
          HTML: function () {
            return un;
          },
          TEXT: function () {
            return an;
          },
          URL: function () {
            return on;
          },
        });
      var t = n(2791),
        r = n(4164),
        o = "app_main__vMnta",
        a = "app-header_header__li8UR",
        i = "app-header_navigation__PEjSF",
        u = "app-header_navigation__link__c2qoi",
        l =
          "app-header_navigation__link_right__a8t+1 app-header_navigation__link__c2qoi",
        c = n(6814),
        s = n(184),
        f = function (e) {
          return (0, s.jsx)("nav", { className: i, children: e.children });
        },
        d = function (e) {
          return (0, s.jsx)("div", {
            className: "mt-4 mb-4 mr-2 pl-5 pr-5 " + [e.class || u],
            children: e.children,
          });
        },
        p = function (e) {
          return (0, s.jsxs)("p", {
            className: "pl-2 text text_type_main-default",
            children: [" ", e.children],
          });
        },
        h = function () {
          return (0, s.jsxs)("header", {
            className: a,
            style: {},
            children: [
              (0, s.jsxs)(f, {
                children: [
                  (0, s.jsxs)(d, {
                    children: [
                      (0, s.jsx)(c.ZR, { type: "primary" }),
                      (0, s.jsx)(p, {
                        children:
                          "\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(d, {
                    children: [
                      (0, s.jsx)(c.DE, { type: "primary" }),
                      (0, s.jsx)(p, {
                        children:
                          "\u041b\u0435\u043d\u0442\u0430\xa0\u0437\u0430\u043a\u0430\u0437\u043e\u0432",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(c.TR, {}),
              (0, s.jsxs)(d, {
                class: l,
                children: [
                  (0, s.jsx)(c.m2, { type: "primary" }),
                  (0, s.jsx)(p, {
                    children:
                      "\u041b\u0438\u0447\u043d\u044b\u0439\xa0\u043a\u0430\u0431\u0438\u043d\u0435\u0442",
                  }),
                ],
              }),
            ],
          });
        };
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function v(e, t) {
        if (e) {
          if ("string" === typeof e) return g(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? g(e, t)
              : void 0
          );
        }
      }
      function m(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a = [],
                i = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  i = !0
                );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (u) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          v(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var y = "burger-ingredients_burgerIngredients__sHOss",
        b = "burger-ingredients_box__J4O6Y",
        w = "burger-ingredients_ingredientsList__Lhqmi",
        C = "burger-ingredients_ingredientCard__hVOFw",
        k = "burger-ingredients_priceBox__idX+Q",
        E = "burger-ingredients_count__GyQvy",
        x =
          "burger-ingredients_countZero__RhTak burger-ingredients_count__GyQvy",
        S = "burger-ingredients_name__sCLsB",
        _ = "modal_popup__qPwec",
        O = "modal_close__fitJs",
        I = "modal_header__GpQ7x",
        T = "modal_header__box__5+fme",
        P = "modal-overlay_modalOverlay__eWjEP",
        D = function (e) {
          return (0, s.jsx)("div", {
            className: P,
            onClick: e.onClose,
            children: e.children,
          });
        },
        N = document.getElementById("react-modals"),
        L = function (e) {
          var n = function (t) {
            "Escape" === t.key && e.onClose();
          };
          return (
            t.useEffect(function () {
              return (
                document.addEventListener("keydown", n),
                function () {
                  document.removeEventListener("keydown", n);
                }
              );
            }, []),
            r.createPortal(
              (0, s.jsx)(D, {
                onClose: e.onClose,
                children: (0, s.jsxs)("div", {
                  className: _,
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                  children: [
                    (0, s.jsxs)("div", {
                      className: "pl-10 pt-10 pr-10 " + T,
                      children: [
                        (0, s.jsx)("h2", {
                          className: "text text_type_main-large " + I,
                          children: e.header,
                        }),
                        (0, s.jsx)("div", {
                          className: O,
                          children: (0, s.jsx)(c.Tw, { onClick: e.onClose }),
                        }),
                      ],
                    }),
                    e.children,
                  ],
                }),
              }),
              N
            )
          );
        },
        j = "ingredient-details_nutrients__XATQL",
        M = "ingredient-details_image__PZHT6",
        R = "ingredient-details_box__gV+5D",
        F = "ingredient-details_nutrient__box__qF1-a",
        z = "ingredient-details_header__LHzuf",
        A = n(2007),
        H = t.createContext(null);
      var U = function (e) {
          e();
        },
        B = function () {
          return U;
        };
      var V = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function $(e, t) {
        var n,
          r = V;
        function o() {
          i.onStateChange && i.onStateChange();
        }
        function a() {
          n ||
            ((n = t ? t.addNestedSub(o) : e.subscribe(o)),
            (r = (function () {
              var e = B(),
                t = null,
                n = null;
              return {
                clear: function () {
                  (t = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function () {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                },
              };
            })()));
        }
        var i = {
          addNestedSub: function (e) {
            return a(), r.subscribe(e);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: o,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = V));
          },
          getListeners: function () {
            return r;
          },
        };
        return i;
      }
      var W =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? t.useLayoutEffect
          : t.useEffect;
      var Z = function (e) {
        var n = e.store,
          r = e.context,
          o = e.children,
          a = (0, t.useMemo)(
            function () {
              var e = $(n);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                { store: n, subscription: e }
              );
            },
            [n]
          ),
          i = (0, t.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        W(
          function () {
            var e = a.subscription;
            return (
              e.trySubscribe(),
              i !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [a, i]
        );
        var u = r || H;
        return t.createElement(u.Provider, { value: a }, o);
      };
      n(2110), n(6900);
      function G() {
        return (0, t.useContext)(H);
      }
      function q(e) {
        void 0 === e && (e = H);
        var n =
          e === H
            ? G
            : function () {
                return (0, t.useContext)(e);
              };
        return function () {
          return n().store;
        };
      }
      var Q = q();
      function K(e) {
        void 0 === e && (e = H);
        var t = e === H ? Q : q(e);
        return function () {
          return t().dispatch;
        };
      }
      var Y = K(),
        X = function (e, t) {
          return e === t;
        };
      function J(e) {
        void 0 === e && (e = H);
        var n =
          e === H
            ? G
            : function () {
                return (0, t.useContext)(e);
              };
        return function (e, r) {
          void 0 === r && (r = X);
          var o = n(),
            a = (function (e, n, r, o) {
              var a,
                i = (0, t.useReducer)(function (e) {
                  return e + 1;
                }, 0)[1],
                u = (0, t.useMemo)(
                  function () {
                    return $(r, o);
                  },
                  [r, o]
                ),
                l = (0, t.useRef)(),
                c = (0, t.useRef)(),
                s = (0, t.useRef)(),
                f = (0, t.useRef)(),
                d = r.getState();
              try {
                if (e !== c.current || d !== s.current || l.current) {
                  var p = e(d);
                  a = void 0 !== f.current && n(p, f.current) ? f.current : p;
                } else a = f.current;
              } catch (h) {
                throw (
                  (l.current &&
                    (h.message +=
                      "\nThe error may be correlated with this previous error:\n" +
                      l.current.stack +
                      "\n\n"),
                  h)
                );
              }
              return (
                W(function () {
                  (c.current = e),
                    (s.current = d),
                    (f.current = a),
                    (l.current = void 0);
                }),
                W(
                  function () {
                    function e() {
                      try {
                        var e = r.getState();
                        if (e === s.current) return;
                        var t = c.current(e);
                        if (n(t, f.current)) return;
                        (f.current = t), (s.current = e);
                      } catch (h) {
                        l.current = h;
                      }
                      i();
                    }
                    return (
                      (u.onStateChange = e),
                      u.trySubscribe(),
                      e(),
                      function () {
                        return u.tryUnsubscribe();
                      }
                    );
                  },
                  [r, u]
                ),
                a
              );
            })(e, r, o.store, o.subscription);
          return (0, t.useDebugValue)(a), a;
        };
      }
      var ee,
        te = J();
      (ee = r.unstable_batchedUpdates), (U = ee);
      var ne = function (e) {
          return (0, s.jsxs)("div", {
            className: F,
            children: [
              (0, s.jsx)("p", {
                className: "text text_type_main-default text_color_inactive",
                children: e.nutrient,
              }),
              (0, s.jsx)("span", {
                className: "text text_type_digits-default text_color_inactive",
                children: e.children,
              }),
            ],
          });
        },
        re = function () {
          var e = te(function (e) {
            return e.view.openCard;
          });
          return (0, s.jsxs)("div", {
            className: R,
            children: [
              (0, s.jsx)("img", { className: M, src: e.image, alt: e.name }),
              (0, s.jsx)("h2", {
                className: "text text_type_main-medium pt-4 " + z,
                children: e.name,
              }),
              (0, s.jsxs)("div", {
                className: "mt-8 pb-15 " + j,
                children: [
                  (0, s.jsx)(ne, {
                    nutrient:
                      "\u041a\u0430\u043b\u043e\u0440\u0438\u0438,\u043a\u043a\u0430\u043b",
                    children: e.calories,
                  }),
                  (0, s.jsx)(ne, {
                    nutrient: "\u0411\u0435\u043b\u043a\u0438, \u0433",
                    children: e.proteins,
                  }),
                  (0, s.jsx)(ne, {
                    nutrient: "\u0416\u0438\u0440\u044b, \u0433",
                    children: e.fat,
                  }),
                  (0, s.jsx)(ne, {
                    nutrient:
                      "\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b, \u0433",
                    children: e.carbohydrates,
                  }),
                ],
              }),
            ],
          });
        },
        oe =
          ((0, A.shape)({
            __v: A.number,
            _id: A.string,
            calories: A.number,
            carbohydrates: A.number,
            fat: A.number,
            image: A.string,
            image_large: A.string,
            image_mobile: A.string,
            name: A.string,
            price: A.number,
            proteins: A.number,
            type: A.string,
          }),
          "OPEN_CARD"),
        ae = "CLOSE_CARD";
      var ie = "undefined" !== typeof window ? t.useLayoutEffect : t.useEffect;
      function ue(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function le(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ce(e, t, n) {
        return (
          t && le(e.prototype, t),
          n && le(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var se = (function () {
        function e(t, n, r) {
          ue(this, e),
            (this.spec = t),
            (this.monitor = n),
            (this.connector = r);
        }
        return (
          ce(e, [
            {
              key: "beginDrag",
              value: function () {
                var e = this.spec,
                  t = this.monitor,
                  n = null;
                return null !==
                  (n =
                    "object" === typeof e.item
                      ? e.item
                      : "function" === typeof e.item
                      ? e.item(t)
                      : {}) && void 0 !== n
                  ? n
                  : null;
              },
            },
            {
              key: "canDrag",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return "boolean" === typeof e.canDrag
                  ? e.canDrag
                  : "function" !== typeof e.canDrag || e.canDrag(t);
              },
            },
            {
              key: "isDragging",
              value: function (e, t) {
                var n = this.spec,
                  r = this.monitor,
                  o = n.isDragging;
                return o ? o(r) : t === e.getSourceId();
              },
            },
            {
              key: "endDrag",
              value: function () {
                var e = this.spec,
                  t = this.monitor,
                  n = this.connector,
                  r = e.end;
                r && r(t.getItem(), t), n.reconnect();
              },
            },
          ]),
          e
        );
      })();
      function fe(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
          o < n;
          o++
        )
          r[o - 2] = arguments[o];
        if (de() && void 0 === t)
          throw new Error("invariant requires an error message argument");
        if (!e) {
          var a;
          if (void 0 === t)
            a = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var i = 0;
            (a = new Error(
              t.replace(/%s/g, function () {
                return r[i++];
              })
            )).name = "Invariant Violation";
          }
          throw ((a.framesToPop = 1), a);
        }
      }
      function de() {
        return "undefined" !== typeof process && !0;
      }
      var pe = (0, t.createContext)({ dragDropManager: void 0 });
      function he() {
        var e = (0, t.useContext)(pe).dragDropManager;
        return fe(null != e, "Expected drag drop context"), e;
      }
      function ge(e, n, r) {
        var o = he(),
          a = (function (e, n, r) {
            var o = (0, t.useMemo)(
              function () {
                return new se(e, n, r);
              },
              [n, r]
            );
            return (
              (0, t.useEffect)(
                function () {
                  o.spec = e;
                },
                [e]
              ),
              o
            );
          })(e, n, r),
          i = (function (e) {
            return (0, t.useMemo)(
              function () {
                var t = e.type;
                return fe(null != t, "spec.type must be defined"), t;
              },
              [e]
            );
          })(e);
        ie(
          function () {
            if (null != i) {
              var e = (function (e, t, n) {
                  var r = n.getRegistry(),
                    o = r.addSource(e, t);
                  return [
                    o,
                    function () {
                      return r.removeSource(o);
                    },
                  ];
                })(i, a, o),
                t = m(e, 2),
                u = t[0],
                l = t[1];
              return n.receiveHandlerId(u), r.receiveHandlerId(u), l;
            }
          },
          [o, n, r, a, i]
        );
      }
      function ve(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return g(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          v(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function me(e, n) {
        var r = ve(n || []);
        return (
          null == n && "function" !== typeof e && r.push(e),
          (0, t.useMemo)(function () {
            return "function" === typeof e ? e() : e;
          }, r)
        );
      }
      var ye = !1,
        be = !1,
        we = (function () {
          function e(t) {
            ue(this, e),
              (this.sourceId = null),
              (this.internalMonitor = t.getMonitor());
          }
          return (
            ce(e, [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.sourceId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.sourceId;
                },
              },
              {
                key: "canDrag",
                value: function () {
                  fe(
                    !ye,
                    "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                  );
                  try {
                    return (
                      (ye = !0),
                      this.internalMonitor.canDragSource(this.sourceId)
                    );
                  } finally {
                    ye = !1;
                  }
                },
              },
              {
                key: "isDragging",
                value: function () {
                  if (!this.sourceId) return !1;
                  fe(
                    !be,
                    "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
                  );
                  try {
                    return (
                      (be = !0),
                      this.internalMonitor.isDraggingSource(this.sourceId)
                    );
                  } finally {
                    be = !1;
                  }
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  return this.internalMonitor.isDraggingSource(e);
                },
              },
              {
                key: "isOverTarget",
                value: function (e, t) {
                  return this.internalMonitor.isOverTarget(e, t);
                },
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.internalMonitor.getTargetIds();
                },
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return this.internalMonitor.isSourcePublic();
                },
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.internalMonitor.getSourceId();
                },
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  return this.internalMonitor.subscribeToOffsetChange(e);
                },
              },
              {
                key: "canDragSource",
                value: function (e) {
                  return this.internalMonitor.canDragSource(e);
                },
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  return this.internalMonitor.canDropOnTarget(e);
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            e
          );
        })();
      function Ce(e) {
        if ("string" !== typeof e.type) {
          var t = e.type.displayName || e.type.name || "the component";
          throw new Error(
            "Only native element nodes can now be passed to React DnD connectors." +
              "You can either wrap ".concat(
                t,
                " into a <div>, or turn it into a "
              ) +
              "drag source or a drop target itself."
          );
        }
      }
      function ke(e) {
        var n = {};
        return (
          Object.keys(e).forEach(function (r) {
            var o = e[r];
            if (r.endsWith("Ref")) n[r] = e[r];
            else {
              var a = (function (e) {
                return function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  if (!(0, t.isValidElement)(n)) {
                    var o = n;
                    return e(o, r), o;
                  }
                  var a = n;
                  Ce(a);
                  var i = r
                    ? function (t) {
                        return e(t, r);
                      }
                    : e;
                  return xe(a, i);
                };
              })(o);
              n[r] = function () {
                return a;
              };
            }
          }),
          n
        );
      }
      function Ee(e, t) {
        "function" === typeof e ? e(t) : (e.current = t);
      }
      function xe(e, n) {
        var r = e.ref;
        return (
          fe(
            "string" !== typeof r,
            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
          ),
          r
            ? (0, t.cloneElement)(e, {
                ref: function (e) {
                  Ee(r, e), Ee(n, e);
                },
              })
            : (0, t.cloneElement)(e, { ref: n })
        );
      }
      function Se(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function _e(e, t, n, r) {
        var o = n ? n.call(r, e, t) : void 0;
        if (void 0 !== o) return !!o;
        if (e === t) return !0;
        if ("object" !== typeof e || !e || "object" !== typeof t || !t)
          return !1;
        var a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (
          var u = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < a.length;
          l++
        ) {
          var c = a[l];
          if (!u(c)) return !1;
          var s = e[c],
            f = t[c];
          if (
            !1 === (o = n ? n.call(r, s, f, c) : void 0) ||
            (void 0 === o && s !== f)
          )
            return !1;
        }
        return !0;
      }
      var Oe = (function () {
        function e(t) {
          var n = this;
          ue(this, e),
            (this.hooks = ke({
              dragSource: function (e, t) {
                n.clearDragSource(),
                  (n.dragSourceOptions = t || null),
                  Se(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                  n.reconnectDragSource();
              },
              dragPreview: function (e, t) {
                n.clearDragPreview(),
                  (n.dragPreviewOptions = t || null),
                  Se(e) ? (n.dragPreviewRef = e) : (n.dragPreviewNode = e),
                  n.reconnectDragPreview();
              },
            })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = t);
        }
        return (
          ce(e, [
            {
              key: "receiveHandlerId",
              value: function (e) {
                this.handlerId !== e &&
                  ((this.handlerId = e), this.reconnect());
              },
            },
            {
              key: "connectTarget",
              get: function () {
                return this.dragSource;
              },
            },
            {
              key: "dragSourceOptions",
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
            },
            {
              key: "dragPreviewOptions",
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
            },
            {
              key: "reconnect",
              value: function () {
                var e = this.reconnectDragSource();
                this.reconnectDragPreview(e);
              },
            },
            {
              key: "reconnectDragSource",
              value: function () {
                var e = this.dragSource,
                  t =
                    this.didHandlerIdChange() ||
                    this.didConnectedDragSourceChange() ||
                    this.didDragSourceOptionsChange();
                return (
                  t && this.disconnectDragSource(),
                  this.handlerId
                    ? e
                      ? (t &&
                          ((this.lastConnectedHandlerId = this.handlerId),
                          (this.lastConnectedDragSource = e),
                          (this.lastConnectedDragSourceOptions =
                            this.dragSourceOptions),
                          (this.dragSourceUnsubscribe =
                            this.backend.connectDragSource(
                              this.handlerId,
                              e,
                              this.dragSourceOptions
                            ))),
                        t)
                      : ((this.lastConnectedDragSource = e), t)
                    : t
                );
              },
            },
            {
              key: "reconnectDragPreview",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = this.dragPreview,
                  n =
                    e ||
                    this.didHandlerIdChange() ||
                    this.didConnectedDragPreviewChange() ||
                    this.didDragPreviewOptionsChange();
                n && this.disconnectDragPreview(),
                  this.handlerId &&
                    (t
                      ? n &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDragPreview = t),
                        (this.lastConnectedDragPreviewOptions =
                          this.dragPreviewOptions),
                        (this.dragPreviewUnsubscribe =
                          this.backend.connectDragPreview(
                            this.handlerId,
                            t,
                            this.dragPreviewOptions
                          )))
                      : (this.lastConnectedDragPreview = t));
              },
            },
            {
              key: "didHandlerIdChange",
              value: function () {
                return this.lastConnectedHandlerId !== this.handlerId;
              },
            },
            {
              key: "didConnectedDragSourceChange",
              value: function () {
                return this.lastConnectedDragSource !== this.dragSource;
              },
            },
            {
              key: "didConnectedDragPreviewChange",
              value: function () {
                return this.lastConnectedDragPreview !== this.dragPreview;
              },
            },
            {
              key: "didDragSourceOptionsChange",
              value: function () {
                return !_e(
                  this.lastConnectedDragSourceOptions,
                  this.dragSourceOptions
                );
              },
            },
            {
              key: "didDragPreviewOptionsChange",
              value: function () {
                return !_e(
                  this.lastConnectedDragPreviewOptions,
                  this.dragPreviewOptions
                );
              },
            },
            {
              key: "disconnectDragSource",
              value: function () {
                this.dragSourceUnsubscribe &&
                  (this.dragSourceUnsubscribe(),
                  (this.dragSourceUnsubscribe = void 0));
              },
            },
            {
              key: "disconnectDragPreview",
              value: function () {
                this.dragPreviewUnsubscribe &&
                  (this.dragPreviewUnsubscribe(),
                  (this.dragPreviewUnsubscribe = void 0),
                  (this.dragPreviewNode = null),
                  (this.dragPreviewRef = null));
              },
            },
            {
              key: "dragSource",
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
            },
            {
              key: "dragPreview",
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
            },
            {
              key: "clearDragSource",
              value: function () {
                (this.dragSourceNode = null), (this.dragSourceRef = null);
              },
            },
            {
              key: "clearDragPreview",
              value: function () {
                (this.dragPreviewNode = null), (this.dragPreviewRef = null);
              },
            },
          ]),
          e
        );
      })();
      var Ie = n(8262);
      function Te(e, n, r) {
        var o = (function (e, n, r) {
            var o = m(
                (0, t.useState)(function () {
                  return n(e);
                }),
                2
              ),
              a = o[0],
              i = o[1],
              u = (0, t.useCallback)(
                function () {
                  var t = n(e);
                  Ie(a, t) || (i(t), r && r());
                },
                [a, e, r]
              );
            return ie(u), [a, u];
          })(e, n, r),
          a = m(o, 2),
          i = a[0],
          u = a[1];
        return (
          ie(
            function () {
              var t = e.getHandlerId();
              if (null != t)
                return e.subscribeToStateChange(u, { handlerIds: [t] });
            },
            [e, u]
          ),
          i
        );
      }
      function Pe(e, t, n) {
        return Te(
          t,
          e ||
            function () {
              return {};
            },
          function () {
            return n.reconnect();
          }
        );
      }
      function De(e) {
        return (0, t.useMemo)(
          function () {
            return e.hooks.dragSource();
          },
          [e]
        );
      }
      function Ne(e) {
        return (0, t.useMemo)(
          function () {
            return e.hooks.dragPreview();
          },
          [e]
        );
      }
      function Le(e, n) {
        var r = me(e, n);
        fe(
          !r.begin,
          "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"
        );
        var o = (function () {
            var e = he();
            return (0, t.useMemo)(
              function () {
                return new we(e);
              },
              [e]
            );
          })(),
          a = (function (e, n) {
            var r = he(),
              o = (0, t.useMemo)(
                function () {
                  return new Oe(r.getBackend());
                },
                [r]
              );
            return (
              ie(
                function () {
                  return (
                    (o.dragSourceOptions = e || null),
                    o.reconnect(),
                    function () {
                      return o.disconnectDragSource();
                    }
                  );
                },
                [o, e]
              ),
              ie(
                function () {
                  return (
                    (o.dragPreviewOptions = n || null),
                    o.reconnect(),
                    function () {
                      return o.disconnectDragPreview();
                    }
                  );
                },
                [o, n]
              ),
              o
            );
          })(r.options, r.previewOptions);
        return ge(r, o, a), [Pe(r.collect, o, a), De(a), Ne(a)];
      }
      var je = function (e) {
          return (0, s.jsx)("h1", {
            className: "mt-10 mb-5 text text_type_main-large",
            children: e.children,
          });
        },
        Me = function (e) {
          return (0, s.jsxs)("div", {
            style: { display: "flex" },
            children: [
              (0, s.jsx)(c.OK, {
                value: "one",
                active: "one" === e.tab,
                onClick: function () {
                  e.buns();
                },
                children: "\u0411\u0443\u043b\u043a\u0438",
              }),
              (0, s.jsx)(c.OK, {
                value: "two",
                active: "two" === e.tab,
                onClick: function () {
                  e.sauses();
                },
                children: "\u0421\u043e\u0443\u0441\u044b",
              }),
              (0, s.jsx)(c.OK, {
                value: "three",
                active: "three" === e.tab,
                onClick: function () {
                  e.main();
                },
                children: "\u041d\u0430\u0447\u0438\u043d\u043a\u0438",
              }),
            ],
          });
        },
        Re = function (e) {
          var n = e.card,
            r = Y(),
            o = m((0, t.useState)(!1), 2),
            a = o[0],
            i = o[1],
            u = te(function (e) {
              return e.construct;
            });
          var l = t.useMemo(
              function () {
                return (function () {
                  var e = [];
                  return (
                    u.components.length > 0 &&
                      (e = u.components.map(function (e) {
                        return e.id;
                      })),
                    e
                  );
                })();
              },
              [u]
            ),
            f = t.useMemo(
              function () {
                return l.concat(u.bun);
              },
              [u]
            ),
            d = t.useMemo(
              function () {
                return f.filter(function (e) {
                  return e === n._id;
                }).length;
              },
              [f, n]
            ),
            p = m(
              Le({
                type: "ingredient",
                item: { card: n },
                collect: function (e) {
                  return { opacity: e.isDragging() ? 0.1 : 1 };
                },
              }),
              2
            ),
            h = p[0].opacity,
            g = p[1],
            v = (0, s.jsx)(L, {
              onClose: function () {
                r({ type: ae }), i(!1);
              },
              header:
                "\u0414\u0435\u0442\u0430\u043b\u0438 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430",
              children: (0, s.jsx)(re, {}),
            });
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("li", {
                className: "mt-6 " + C,
                onClick: function () {
                  r({ type: oe, view: n }), i(!0);
                },
                ref: g,
                style: { opacity: h },
                children: [
                  (0, s.jsx)("img", {
                    className: "ml-4 mr-4 ",
                    src: n.image,
                    alt: n.image,
                  }),
                  (0, s.jsxs)("div", {
                    className: "mt-1 mb-1 " + k,
                    children: [
                      (0, s.jsx)("p", {
                        className: "text text_type_digits-default",
                        children: n.price,
                      }),
                      (0, s.jsx)(c.rm, { type: "primary" }),
                    ],
                  }),
                  (0, s.jsx)("h2", {
                    className: "text text_type_main-default " + S,
                    children: n.name,
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "text text_type_digits-default " + ((d > 0 && E) || x),
                    children: d,
                  }),
                ],
              }),
              a && v,
            ],
          });
        },
        Fe = function (e) {
          var t = te(function (e) {
              return e.burger.ingredients;
            }),
            n = t.filter(function (t) {
              return t.type === e.type;
            });
          return (0, s.jsxs)("li", {
            className: "mt-10",
            id: e.type,
            ref: e.refElement,
            children: [
              (0, s.jsx)("h2", {
                className: "text text_type_main-medium",
                children: e.text,
              }),
              (0, s.jsx)("ul", {
                className: " pl-4 " + w,
                children: n.map(function (e) {
                  return (0, s.jsx)(Re, { card: e }, e._id);
                }),
              }),
            ],
          });
        },
        ze = function () {
          var e = (0, t.useRef)("bun"),
            n = (0, t.useRef)("sause"),
            r = (0, t.useRef)("main"),
            o = m((0, t.useState)("one"), 2),
            a = o[0],
            i = o[1],
            u = function (e) {
              e.current.scrollIntoView({ behavior: "smooth" });
            };
          return (0, s.jsxs)("section", {
            className: y,
            children: [
              (0, s.jsx)(je, {
                children:
                  "\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u0440\u0433\u0435\u0440",
              }),
              (0, s.jsx)(Me, {
                buns: function () {
                  return u(e);
                },
                sauses: function () {
                  return u(n);
                },
                main: function () {
                  return u(r);
                },
                tab: a,
              }),
              (0, s.jsxs)("ul", {
                className: b,
                onScroll: function (t) {
                  return (function (t) {
                    var r = t.target;
                    r.scrollTop > e.current.scrollHeight &&
                      r.scrollTop <
                        n.current.scrollHeight + e.current.scrollHeight &&
                      i("two"),
                      r.scrollTop >
                        n.current.scrollHeight + e.current.scrollHeight &&
                        i("three"),
                      r.scrollTop <= e.current.scrollHeight && i("one");
                  })(t);
                },
                children: [
                  (0, s.jsx)(
                    Fe,
                    {
                      refElement: e,
                      type: "bun",
                      text: "\u0411\u0443\u043b\u043a\u0438",
                    },
                    "bun"
                  ),
                  (0, s.jsx)(
                    Fe,
                    {
                      refElement: n,
                      type: "sauce",
                      text: "\u0421\u043e\u0443\u0441\u044b",
                    },
                    "sauce"
                  ),
                  (0, s.jsx)(
                    Fe,
                    {
                      refElement: r,
                      type: "main",
                      text: "\u041d\u0430\u0447\u0438\u043d\u043a\u0438",
                    },
                    "main"
                  ),
                ],
              }),
            ],
          });
        };
      function Ae(e, t, n, r, o, a, i) {
        try {
          var u = e[a](i),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      function He(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Ae(a, r, o, i, u, "next", e);
            }
            function u(e) {
              Ae(a, r, o, i, u, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var Ue = n(7757),
        Be = n.n(Ue),
        Ve = "burger-constructor_constructor__LlVl4",
        $e = "burger-constructor_box__oJLr4",
        We =
          "burger-constructor_box_active__Xpsad burger-constructor_box__oJLr4",
        Ze = "burger-constructor_card__vxtlF",
        Ge = "burger-constructor_drag__mC7y9",
        qe = "burger-constructor_element__Kcy9V",
        Qe = "burger-constructor_button_box__5rzD5",
        Ke = "burger-constructor_price__4yHsz",
        Ye = "burger-constructor_plug__T4O69";
      var Xe =
          n.p +
          "static/media/CurrencyIcon.9c1486179358f987e416987276d658fd.svg",
        Je = "order-details_box__EgTJn";
      var et = n.p + "static/media/done.3ba9e5cd3e425ccd87f6c48cb38cd1f5.svg",
        tt = function () {
          var e = te(function (e) {
              return e.order;
            }),
            t = e.order;
          return (0, s.jsxs)("div", {
            className: "pt-4 " + Je,
            children: [
              (0, s.jsx)("h2", {
                className: "text text_type_digits-large pb-8",
                children: t,
              }),
              (0, s.jsx)("p", {
                className: "text text_type_main-medium pb-15",
                children:
                  "\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u0430",
              }),
              (0, s.jsx)("img", {
                src: et,
                alt: "\u0417\u0430\u043a\u0430\u0437 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f",
              }),
              (0, s.jsx)("p", {
                className: "text text_type_main-default pt-15",
                children:
                  "\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0447\u0430\u043b\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c",
              }),
              (0, s.jsx)("p", {
                className:
                  "text text_type_main-default text_color_inactive pb-30 pt-2",
                children:
                  "\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438",
              }),
            ],
          });
        },
        nt = "https://norma.nomoreparties.space/api",
        rt = "GET_ORDER_REQUEST",
        ot = "GET_ORDER_SUCCESS",
        at = "GET_ORDER_FAIL",
        it = "ORDER_CLEAR";
      function ut(e) {
        return function (t) {
          t({ type: rt }),
            fetch("".concat(nt, "/orders"), {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ingredients: e }),
            })
              .then(function (e) {
                return e.ok
                  ? e.json()
                  : Promise.reject(
                      "\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(
                        e.statusText
                      )
                    );
              })
              .then(function (e) {
                e && e.success
                  ? t({ type: ot, order: e.order.number })
                  : t({ type: at });
              })
              .catch(function (e) {
                t({ type: at });
              });
        };
      }
      var lt = "ADD_COMPONENT",
        ct = "REMOVE_COMPONENT",
        st = "CHANGE_BUN",
        ft = "SORT_COMPONENT",
        dt = "CLEAR_COMPONENTS",
        pt = n(1172),
        ht = n.n(pt);
      var gt = (function () {
        function e(t, n) {
          ue(this, e), (this.spec = t), (this.monitor = n);
        }
        return (
          ce(e, [
            {
              key: "canDrop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                return !e.canDrop || e.canDrop(t.getItem(), t);
              },
            },
            {
              key: "hover",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                e.hover && e.hover(t.getItem(), t);
              },
            },
            {
              key: "drop",
              value: function () {
                var e = this.spec,
                  t = this.monitor;
                if (e.drop) return e.drop(t.getItem(), t);
              },
            },
          ]),
          e
        );
      })();
      function vt(e, n, r) {
        var o = he(),
          a = (function (e, n) {
            var r = (0, t.useMemo)(
              function () {
                return new gt(e, n);
              },
              [n]
            );
            return (
              (0, t.useEffect)(
                function () {
                  r.spec = e;
                },
                [e]
              ),
              r
            );
          })(e, n),
          i = (function (e) {
            var n = e.accept;
            return (0, t.useMemo)(
              function () {
                return (
                  fe(null != e.accept, "accept must be defined"),
                  Array.isArray(n) ? n : [n]
                );
              },
              [n]
            );
          })(e);
        ie(
          function () {
            var e = (function (e, t, n) {
                var r = n.getRegistry(),
                  o = r.addTarget(e, t);
                return [
                  o,
                  function () {
                    return r.removeTarget(o);
                  },
                ];
              })(i, a, o),
              t = m(e, 2),
              u = t[0],
              l = t[1];
            return n.receiveHandlerId(u), r.receiveHandlerId(u), l;
          },
          [
            o,
            n,
            a,
            r,
            i
              .map(function (e) {
                return e.toString();
              })
              .join("|"),
          ]
        );
      }
      var mt = !1,
        yt = (function () {
          function e(t) {
            ue(this, e),
              (this.targetId = null),
              (this.internalMonitor = t.getMonitor());
          }
          return (
            ce(e, [
              {
                key: "receiveHandlerId",
                value: function (e) {
                  this.targetId = e;
                },
              },
              {
                key: "getHandlerId",
                value: function () {
                  return this.targetId;
                },
              },
              {
                key: "subscribeToStateChange",
                value: function (e, t) {
                  return this.internalMonitor.subscribeToStateChange(e, t);
                },
              },
              {
                key: "canDrop",
                value: function () {
                  if (!this.targetId) return !1;
                  fe(
                    !mt,
                    "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
                  );
                  try {
                    return (
                      (mt = !0),
                      this.internalMonitor.canDropOnTarget(this.targetId)
                    );
                  } finally {
                    mt = !1;
                  }
                },
              },
              {
                key: "isOver",
                value: function (e) {
                  return (
                    !!this.targetId &&
                    this.internalMonitor.isOverTarget(this.targetId, e)
                  );
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.internalMonitor.getItemType();
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.internalMonitor.getItem();
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.internalMonitor.getDropResult();
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.internalMonitor.didDrop();
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialClientOffset();
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getInitialSourceClientOffset();
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return this.internalMonitor.getSourceClientOffset();
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.internalMonitor.getClientOffset();
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return this.internalMonitor.getDifferenceFromInitialOffset();
                },
              },
            ]),
            e
          );
        })();
      var bt,
        wt = (function () {
          function e(t) {
            var n = this;
            ue(this, e),
              (this.hooks = ke({
                dropTarget: function (e, t) {
                  n.clearDropTarget(),
                    (n.dropTargetOptions = t),
                    Se(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                    n.reconnect();
                },
              })),
              (this.handlerId = null),
              (this.dropTargetRef = null),
              (this.dropTargetOptionsInternal = null),
              (this.lastConnectedHandlerId = null),
              (this.lastConnectedDropTarget = null),
              (this.lastConnectedDropTargetOptions = null),
              (this.backend = t);
          }
          return (
            ce(e, [
              {
                key: "connectTarget",
                get: function () {
                  return this.dropTarget;
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var e =
                    this.didHandlerIdChange() ||
                    this.didDropTargetChange() ||
                    this.didOptionsChange();
                  e && this.disconnectDropTarget();
                  var t = this.dropTarget;
                  this.handlerId &&
                    (t
                      ? e &&
                        ((this.lastConnectedHandlerId = this.handlerId),
                        (this.lastConnectedDropTarget = t),
                        (this.lastConnectedDropTargetOptions =
                          this.dropTargetOptions),
                        (this.unsubscribeDropTarget =
                          this.backend.connectDropTarget(
                            this.handlerId,
                            t,
                            this.dropTargetOptions
                          )))
                      : (this.lastConnectedDropTarget = t));
                },
              },
              {
                key: "receiveHandlerId",
                value: function (e) {
                  e !== this.handlerId &&
                    ((this.handlerId = e), this.reconnect());
                },
              },
              {
                key: "dropTargetOptions",
                get: function () {
                  return this.dropTargetOptionsInternal;
                },
                set: function (e) {
                  this.dropTargetOptionsInternal = e;
                },
              },
              {
                key: "didHandlerIdChange",
                value: function () {
                  return this.lastConnectedHandlerId !== this.handlerId;
                },
              },
              {
                key: "didDropTargetChange",
                value: function () {
                  return this.lastConnectedDropTarget !== this.dropTarget;
                },
              },
              {
                key: "didOptionsChange",
                value: function () {
                  return !_e(
                    this.lastConnectedDropTargetOptions,
                    this.dropTargetOptions
                  );
                },
              },
              {
                key: "disconnectDropTarget",
                value: function () {
                  this.unsubscribeDropTarget &&
                    (this.unsubscribeDropTarget(),
                    (this.unsubscribeDropTarget = void 0));
                },
              },
              {
                key: "dropTarget",
                get: function () {
                  return (
                    this.dropTargetNode ||
                    (this.dropTargetRef && this.dropTargetRef.current)
                  );
                },
              },
              {
                key: "clearDropTarget",
                value: function () {
                  (this.dropTargetRef = null), (this.dropTargetNode = null);
                },
              },
            ]),
            e
          );
        })();
      function Ct(e) {
        return (0, t.useMemo)(
          function () {
            return e.hooks.dropTarget();
          },
          [e]
        );
      }
      function kt(e, n) {
        var r = me(e, n),
          o = (function () {
            var e = he();
            return (0, t.useMemo)(
              function () {
                return new yt(e);
              },
              [e]
            );
          })(),
          a = (function (e) {
            var n = he(),
              r = (0, t.useMemo)(
                function () {
                  return new wt(n.getBackend());
                },
                [n]
              );
            return (
              ie(
                function () {
                  return (
                    (r.dropTargetOptions = e || null),
                    r.reconnect(),
                    function () {
                      return r.disconnectDropTarget();
                    }
                  );
                },
                [e]
              ),
              r
            );
          })(r.options);
        return vt(r, o, a), [Pe(r.collect, o, a), Ct(a)];
      }
      var Et = new Uint8Array(16);
      function xt() {
        if (
          !bt &&
          !(bt =
            ("undefined" !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" !== typeof msCrypto &&
              "function" === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return bt(Et);
      }
      var St =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (
        var _t = function (e) {
            return "string" === typeof e && St.test(e);
          },
          Ot = [],
          It = 0;
        It < 256;
        ++It
      )
        Ot.push((It + 256).toString(16).substr(1));
      var Tt = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = (
            Ot[e[t + 0]] +
            Ot[e[t + 1]] +
            Ot[e[t + 2]] +
            Ot[e[t + 3]] +
            "-" +
            Ot[e[t + 4]] +
            Ot[e[t + 5]] +
            "-" +
            Ot[e[t + 6]] +
            Ot[e[t + 7]] +
            "-" +
            Ot[e[t + 8]] +
            Ot[e[t + 9]] +
            "-" +
            Ot[e[t + 10]] +
            Ot[e[t + 11]] +
            Ot[e[t + 12]] +
            Ot[e[t + 13]] +
            Ot[e[t + 14]] +
            Ot[e[t + 15]]
          ).toLowerCase();
        if (!_t(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      };
      var Pt = function (e, t, n) {
          var r = (e = e || {}).random || (e.rng || xt)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
            n = n || 0;
            for (var o = 0; o < 16; ++o) t[n + o] = r[o];
            return t;
          }
          return Tt(r);
        },
        Dt = function (e) {
          var n = e.ingredient,
            r = e.index,
            o = e.itemKey,
            a = Y(),
            i = (0, t.useRef)(null),
            u = te(function (e) {
              return e.construct;
            }),
            l = function (e, t) {
              var n = u.components.slice(),
                r = ht()(n, {
                  $splice: [
                    [e, 1],
                    [t, 0, n[e]],
                  ],
                });
              a({ type: ft, components: r });
            },
            f = m(
              Le({
                type: "component",
                item: function () {
                  return { ingredient: n, index: r };
                },
                collect: function (e) {
                  return { opacity: e.isDragging() ? 0.5 : 1 };
                },
              }),
              2
            ),
            d = f[0].opacity,
            p = f[1],
            h = m(
              kt({
                accept: "component",
                collect: function (e) {
                  return { handlerId: e.getHandlerId() };
                },
                hover: function (e, t) {
                  var n;
                  if (i.current) {
                    var o = e.index,
                      a = r;
                    if (o !== a) {
                      var u =
                          null === (n = i.current) || void 0 === n
                            ? void 0
                            : n.getBoundingClientRect(),
                        c = (u.bottom - u.top) / 2,
                        s = t.getClientOffset().y - u.top;
                      (o < a && s < c) ||
                        (o > a && s > c) ||
                        (l(o, a), (e.index = a));
                    }
                  }
                },
                drop: function (e) {
                  var t = e.index;
                  t !== r && l(t, r);
                },
              }),
              2
            ),
            g = h[0].handlerId;
          p((0, h[1])(i));
          return (0, s.jsxs)("li", {
            className: "pl-8 " + Ze,
            ref: i,
            "data-handler-id": g,
            children: [
              (0, s.jsx)("div", {
                className: Ge,
                children: (0, s.jsx)(c.Vn, { type: "primary" }),
              }),
              (0, s.jsx)("div", {
                className: qe,
                style: { opacity: d },
                children: (0, s.jsx)(c.DY, {
                  type: n.type,
                  text: n.name,
                  price: n.price,
                  thumbnail: n.image,
                  handleClose: function () {
                    a({ type: ct, key: o });
                  },
                }),
              }),
            ],
          });
        },
        Nt = function () {
          return (0, s.jsx)("li", {
            className: "pl-8 " + Ze,
            children: (0, s.jsx)("div", {
              className: Ye,
              children: (0, s.jsx)("p", {
                className: "text text_type_main-medium",
                children:
                  "\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0437\u0434\u0435\u0441\u044c \u0441\u0432\u043e\u0439 \u0431\u0443\u0440\u0433\u0435\u0440",
              }),
            }),
          });
        },
        Lt = function (e) {
          var t = e.ingredient,
            n = e.position;
          return (0, s.jsx)("li", {
            className: "pl-8",
            children: (0, s.jsx)(c.DY, {
              isLocked: !0,
              type: t.type,
              text: t.name + n,
              price: t.price / 2,
              thumbnail: t.image,
            }),
          });
        },
        jt = function (e) {
          var t = e.ingredients,
            n = Y(),
            r = m(
              kt({
                accept: "ingredient",
                drop: function (e) {
                  var t = e.card;
                  if ("bun" === t.type) n({ type: st, id: t._id });
                  else {
                    var r = Pt();
                    n({ type: lt, id: t._id, key: r });
                  }
                },
              }),
              2
            )[1],
            o = te(function (e) {
              return e.burger.ingredients;
            }),
            a = te(function (e) {
              return e.construct;
            });
          return (0, s.jsxs)("ul", {
            className: $e,
            ref: r,
            children: [
              o.map(function (e) {
                return (
                  e._id === a.bun &&
                  (0, s.jsx)(
                    Lt,
                    { ingredient: e, position: " (\u0432\u0435\u0440\u0445)" },
                    e._id
                  )
                );
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)("ul", {
                  className: We,
                  children:
                    1 === t.length
                      ? (0, s.jsx)(Nt, {})
                      : a.components.map(function (e, t) {
                          var n = e.id,
                            r = e.key,
                            a = o.find(function (e) {
                              return e._id === n && "bun" !== e.type;
                            });
                          return (
                            a &&
                            (0, s.jsx)(
                              Dt,
                              { ingredient: a, itemKey: r, index: t },
                              r
                            )
                          );
                        }),
                }),
              }),
              o.map(function (e) {
                return (
                  e._id === a.bun &&
                  (0, s.jsx)(
                    Lt,
                    { ingredient: e, position: " (\u043d\u0438\u0437)" },
                    e._id
                  )
                );
              }),
            ],
          });
        },
        Mt = function (e) {
          var n = e.ingredients,
            r = te(function (e) {
              return e.burger.ingredients;
            }),
            o = (0, t.useMemo)(
              function () {
                var e = 0;
                return (
                  n.forEach(function (t) {
                    var n = r.find(function (e) {
                      return e._id === t;
                    });
                    n && (e += n.price);
                  }),
                  e
                );
              },
              [n, r]
            );
          return (0, s.jsxs)("div", {
            className: "mr-10 " + Ke,
            children: [
              (0, s.jsx)("p", {
                className: "text text_type_digits-medium",
                children: o,
              }),
              (0, s.jsx)("img", {
                src: Xe,
                alt: "\u0421\u0430\u043c\u043e\u0446\u0432\u0435\u0442",
              }),
            ],
          });
        },
        Rt = function (e) {
          var t = e.ingredients,
            n = Y(),
            r = te(function (e) {
              return e.order;
            }),
            o = r.order,
            a = (0, s.jsx)(L, {
              onClose: function () {
                n({ type: it }), n({ type: dt });
              },
              children: (0, s.jsx)(tt, {}),
            });
          return (0, s.jsxs)("div", {
            className: "mr-4 mt-10 " + Qe,
            children: [
              (0, s.jsx)(Mt, { ingredients: t }),
              (0, s.jsx)(c.zx, {
                type: "primary",
                size: "large",
                onClick: He(
                  Be().mark(function e() {
                    return Be().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            n(ut(t));
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                children:
                  "\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",
              }),
              o && a,
            ],
          });
        },
        Ft = function () {
          var e = te(function (e) {
            return e.construct;
          });
          var n = t.useMemo(
              function () {
                return (function () {
                  var t = [];
                  return (
                    e.components.length > 0 &&
                      (t = e.components.map(function (e) {
                        return e.id;
                      })),
                    t
                  );
                })();
              },
              [e]
            ),
            r = t.useMemo(
              function () {
                return n.concat(e.bun);
              },
              [e]
            );
          return (0, s.jsxs)("section", {
            className: "pt-25 " + Ve,
            children: [
              (0, s.jsx)(jt, { ingredients: r }),
              (0, s.jsx)(Rt, { ingredients: r }),
            ],
          });
        };
      function zt(e, t) {
        return (
          (zt =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          zt(e, t)
        );
      }
      function At(e) {
        return (
          (At = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          At(e)
        );
      }
      function Ht(e) {
        return (
          (Ht =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ht(e)
        );
      }
      function Ut(e, t) {
        if (t && ("object" === Ht(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function Bt(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = At(e);
          if (t) {
            var o = At(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return Ut(this, n);
        };
      }
      var Vt = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            Object.defineProperty(e, "prototype", {
              value: Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              }),
              writable: !1,
            }),
              t && zt(e, t);
          })(n, e);
          var t = Bt(n);
          function n(e) {
            var r;
            return (
              ue(this, n), ((r = t.call(this, e)).state = { hasError: !1 }), r
            );
          }
          return (
            ce(
              n,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.log(
                      "\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430!",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.hasError
                      ? (0, s.jsxs)("section", {
                          children: [
                            (0, s.jsx)("h1", {
                              children:
                                "\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(",
                            }),
                            (0, s.jsx)("p", {
                              children:
                                "\u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.",
                            }),
                          ],
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            n
          );
        })(t.Component),
        $t = "GET_INGREDIENTS_REQUEST",
        Wt = "GET_INGREDIENTS_SUCCESS",
        Zt = "GET_INGREDIENTS_FAIL";
      function Gt(e) {
        var t = null;
        return function () {
          return null == t && (t = e()), t;
        };
      }
      var qt = (function () {
          function e(t) {
            ue(this, e), (this.entered = []), (this.isNodeInDocument = t);
          }
          return (
            ce(e, [
              {
                key: "enter",
                value: function (e) {
                  var t = this,
                    n = this.entered.length;
                  return (
                    (this.entered = (function (e, t) {
                      var n = new Set(),
                        r = function (e) {
                          return n.add(e);
                        };
                      e.forEach(r), t.forEach(r);
                      var o = [];
                      return (
                        n.forEach(function (e) {
                          return o.push(e);
                        }),
                        o
                      );
                    })(
                      this.entered.filter(function (n) {
                        return (
                          t.isNodeInDocument(n) &&
                          (!n.contains || n.contains(e))
                        );
                      }),
                      [e]
                    )),
                    0 === n && this.entered.length > 0
                  );
                },
              },
              {
                key: "leave",
                value: function (e) {
                  var t,
                    n,
                    r = this.entered.length;
                  return (
                    (this.entered =
                      ((t = this.entered.filter(this.isNodeInDocument)),
                      (n = e),
                      t.filter(function (e) {
                        return e !== n;
                      }))),
                    r > 0 && 0 === this.entered.length
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.entered = [];
                },
              },
            ]),
            e
          );
        })(),
        Qt = Gt(function () {
          return /firefox/i.test(navigator.userAgent);
        }),
        Kt = Gt(function () {
          return Boolean(window.safari);
        }),
        Yt = (function () {
          function e(t, n) {
            ue(this, e);
            for (var r = t.length, o = [], a = 0; a < r; a++) o.push(a);
            o.sort(function (e, n) {
              return t[e] < t[n] ? -1 : 1;
            });
            for (var i, u, l = [], c = [], s = [], f = 0; f < r - 1; f++)
              (i = t[f + 1] - t[f]),
                (u = n[f + 1] - n[f]),
                c.push(i),
                l.push(u),
                s.push(u / i);
            for (var d = [s[0]], p = 0; p < c.length - 1; p++) {
              var h = s[p],
                g = s[p + 1];
              if (h * g <= 0) d.push(0);
              else {
                i = c[p];
                var v = c[p + 1],
                  m = i + v;
                d.push((3 * m) / ((m + v) / h + (m + i) / g));
              }
            }
            d.push(s[s.length - 1]);
            for (var y, b = [], w = [], C = 0; C < d.length - 1; C++) {
              y = s[C];
              var k = d[C],
                E = 1 / c[C],
                x = k + d[C + 1] - y - y;
              b.push((y - k - x) * E), w.push(x * E * E);
            }
            (this.xs = t),
              (this.ys = n),
              (this.c1s = d),
              (this.c2s = b),
              (this.c3s = w);
          }
          return (
            ce(e, [
              {
                key: "interpolate",
                value: function (e) {
                  var t = this.xs,
                    n = this.ys,
                    r = this.c1s,
                    o = this.c2s,
                    a = this.c3s,
                    i = t.length - 1;
                  if (e === t[i]) return n[i];
                  for (var u, l = 0, c = a.length - 1; l <= c; ) {
                    var s = t[(u = Math.floor(0.5 * (l + c)))];
                    if (s < e) l = u + 1;
                    else {
                      if (!(s > e)) return n[u];
                      c = u - 1;
                    }
                  }
                  var f = e - t[(i = Math.max(0, c))],
                    d = f * f;
                  return n[i] + r[i] * f + o[i] * d + a[i] * f * d;
                },
              },
            ]),
            e
          );
        })();
      function Xt(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          r = n.top;
        return { x: n.left, y: r };
      }
      function Jt(e) {
        return { x: e.clientX, y: e.clientY };
      }
      function en(e, t, n, r, o) {
        var a = (function (e) {
            var t;
            return (
              "IMG" === e.nodeName &&
              (Qt() ||
                !(null === (t = document.documentElement) || void 0 === t
                  ? void 0
                  : t.contains(e)))
            );
          })(t),
          i = Xt(a ? e : t),
          u = { x: n.x - i.x, y: n.y - i.y },
          l = e.offsetWidth,
          c = e.offsetHeight,
          s = r.anchorX,
          f = r.anchorY,
          d = (function (e, t, n, r) {
            var o = e ? t.width : n,
              a = e ? t.height : r;
            return (
              Kt() &&
                e &&
                ((a /= window.devicePixelRatio),
                (o /= window.devicePixelRatio)),
              { dragPreviewWidth: o, dragPreviewHeight: a }
            );
          })(a, t, l, c),
          p = d.dragPreviewWidth,
          h = d.dragPreviewHeight,
          g = o.offsetX,
          v = o.offsetY,
          m = 0 === v || v;
        return {
          x:
            0 === g || g
              ? g
              : new Yt(
                  [0, 0.5, 1],
                  [u.x, (u.x / l) * p, u.x + p - l]
                ).interpolate(s),
          y: m
            ? v
            : (function () {
                var e = new Yt(
                  [0, 0.5, 1],
                  [u.y, (u.y / c) * h, u.y + h - c]
                ).interpolate(f);
                return Kt() && a && (e += (window.devicePixelRatio - 1) * h), e;
              })(),
        };
      }
      function tn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var nn,
        rn = "__NATIVE_FILE__",
        on = "__NATIVE_URL__",
        an = "__NATIVE_TEXT__",
        un = "__NATIVE_HTML__";
      function ln(e, t, n) {
        var r = t.reduce(function (t, n) {
          return t || e.getData(n);
        }, "");
        return null != r ? r : n;
      }
      var cn =
          (tn((nn = {}), rn, {
            exposeProperties: {
              files: function (e) {
                return Array.prototype.slice.call(e.files);
              },
              items: function (e) {
                return e.items;
              },
              dataTransfer: function (e) {
                return e;
              },
            },
            matchesTypes: ["Files"],
          }),
          tn(nn, un, {
            exposeProperties: {
              html: function (e, t) {
                return ln(e, t, "");
              },
              dataTransfer: function (e) {
                return e;
              },
            },
            matchesTypes: ["Html", "text/html"],
          }),
          tn(nn, on, {
            exposeProperties: {
              urls: function (e, t) {
                return ln(e, t, "").split("\n");
              },
              dataTransfer: function (e) {
                return e;
              },
            },
            matchesTypes: ["Url", "text/uri-list"],
          }),
          tn(nn, an, {
            exposeProperties: {
              text: function (e, t) {
                return ln(e, t, "");
              },
              dataTransfer: function (e) {
                return e;
              },
            },
            matchesTypes: ["Text", "text/plain"],
          }),
          nn),
        sn = (function () {
          function e(t) {
            ue(this, e),
              (this.config = t),
              (this.item = {}),
              this.initializeExposedProperties();
          }
          return (
            ce(e, [
              {
                key: "initializeExposedProperties",
                value: function () {
                  var e = this;
                  Object.keys(this.config.exposeProperties).forEach(function (
                    t
                  ) {
                    Object.defineProperty(e.item, t, {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return (
                          console.warn(
                            "Browser doesn't allow reading \"".concat(
                              t,
                              '" until the drop event.'
                            )
                          ),
                          null
                        );
                      },
                    });
                  });
                },
              },
              {
                key: "loadDataTransfer",
                value: function (e) {
                  var t = this;
                  if (e) {
                    var n = {};
                    Object.keys(this.config.exposeProperties).forEach(function (
                      r
                    ) {
                      var o = t.config.exposeProperties[r];
                      null != o &&
                        (n[r] = {
                          value: o(e, t.config.matchesTypes),
                          configurable: !0,
                          enumerable: !0,
                        });
                    }),
                      Object.defineProperties(this.item, n);
                  }
                },
              },
              {
                key: "canDrag",
                value: function () {
                  return !0;
                },
              },
              {
                key: "beginDrag",
                value: function () {
                  return this.item;
                },
              },
              {
                key: "isDragging",
                value: function (e, t) {
                  return t === e.getSourceId();
                },
              },
              { key: "endDrag", value: function () {} },
            ]),
            e
          );
        })();
      function fn(e) {
        if (!e) return null;
        var t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(cn).filter(function (e) {
            var n = cn[e];
            return (
              !!(null === n || void 0 === n ? void 0 : n.matchesTypes) &&
              n.matchesTypes.some(function (e) {
                return t.indexOf(e) > -1;
              })
            );
          })[0] || null
        );
      }
      var dn = (function () {
        function e(t, n) {
          ue(this, e),
            (this.ownerDocument = null),
            (this.globalContext = t),
            (this.optionsArgs = n);
        }
        return (
          ce(e, [
            {
              key: "window",
              get: function () {
                return this.globalContext
                  ? this.globalContext
                  : "undefined" !== typeof window
                  ? window
                  : void 0;
              },
            },
            {
              key: "document",
              get: function () {
                var e;
                return (
                  null === (e = this.globalContext) || void 0 === e
                    ? void 0
                    : e.document
                )
                  ? this.globalContext.document
                  : this.window
                  ? this.window.document
                  : void 0;
              },
            },
            {
              key: "rootElement",
              get: function () {
                var e;
                return (
                  (null === (e = this.optionsArgs) || void 0 === e
                    ? void 0
                    : e.rootElement) || this.window
                );
              },
            },
          ]),
          e
        );
      })();
      function pn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              pn(e, t, n[t]);
            });
        }
        return e;
      }
      var gn = (function () {
          function t(e, n, r) {
            var o = this;
            ue(this, t),
              (this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.lastClientOffset = null),
              (this.hoverRafId = null),
              (this.getSourceClientOffset = function (e) {
                var t = o.sourceNodes.get(e);
                return (t && Xt(t)) || null;
              }),
              (this.endDragNativeItem = function () {
                o.isDraggingNativeItem() &&
                  (o.actions.endDrag(),
                  o.currentNativeHandle &&
                    o.registry.removeSource(o.currentNativeHandle),
                  (o.currentNativeHandle = null),
                  (o.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return Boolean(
                  e &&
                    o.document &&
                    o.document.body &&
                    o.document.body.contains(e)
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = o.currentDragSourceNode;
                null == e ||
                  o.isNodeInDocument(e) ||
                  (o.clearCurrentDragSourceNode() &&
                    o.monitor.isDragging() &&
                    o.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = o.dragStartSourceIds;
                  o.dragStartSourceIds = null;
                  var n = Jt(e);
                  o.monitor.isDragging() && o.actions.endDrag(),
                    o.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: o.getSourceClientOffset,
                      clientOffset: n,
                    });
                  var r = e.dataTransfer,
                    a = fn(r);
                  if (o.monitor.isDragging()) {
                    if (r && "function" === typeof r.setDragImage) {
                      var i = o.monitor.getSourceId(),
                        u = o.sourceNodes.get(i),
                        l = o.sourcePreviewNodes.get(i) || u;
                      if (l) {
                        var c = o.getCurrentSourcePreviewNodeOptions(),
                          s = en(
                            u,
                            l,
                            n,
                            { anchorX: c.anchorX, anchorY: c.anchorY },
                            { offsetX: c.offsetX, offsetY: c.offsetY }
                          );
                        r.setDragImage(l, s.x, s.y);
                      }
                    }
                    try {
                      null === r ||
                        void 0 === r ||
                        r.setData("application/json", {});
                    } catch (f) {}
                    o.setCurrentDragSourceNode(e.target),
                      o.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState
                        ? o.actions.publishDragSource()
                        : setTimeout(function () {
                            return o.actions.publishDragSource();
                          }, 0);
                  } else if (a) o.beginDragNativeItem(a);
                  else {
                    if (
                      r &&
                      !r.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute("draggable"))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                o.clearCurrentDragSourceNode() &&
                  o.monitor.isDragging() &&
                  o.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                var t;
                ((o.dragEnterTargetIds = []), o.isDraggingNativeItem()) &&
                  (null === (t = o.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
                if (
                  o.enterLeaveCounter.enter(e.target) &&
                  !o.monitor.isDragging()
                ) {
                  var n = e.dataTransfer,
                    r = fn(n);
                  r && o.beginDragNativeItem(r, n);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = o.dragEnterTargetIds;
                ((o.dragEnterTargetIds = []), o.monitor.isDragging()) &&
                  ((o.altKeyPressed = e.altKey),
                  t.length > 0 && o.actions.hover(t, { clientOffset: Jt(e) }),
                  t.some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  }) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = o.getCurrentDropEffect())));
              }),
              (this.handleTopDragOverCapture = function (e) {
                var t;
                ((o.dragOverTargetIds = []), o.isDraggingNativeItem()) &&
                  (null === (t = o.currentNativeSource) ||
                    void 0 === t ||
                    t.loadDataTransfer(e.dataTransfer));
              }),
              (this.handleTopDragOver = function (e) {
                var t = o.dragOverTargetIds;
                if (((o.dragOverTargetIds = []), !o.monitor.isDragging()))
                  return (
                    e.preventDefault(),
                    void (
                      e.dataTransfer && (e.dataTransfer.dropEffect = "none")
                    )
                  );
                (o.altKeyPressed = e.altKey),
                  (o.lastClientOffset = Jt(e)),
                  null === o.hoverRafId &&
                    "undefined" !== typeof requestAnimationFrame &&
                    (o.hoverRafId = requestAnimationFrame(function () {
                      o.monitor.isDragging() &&
                        o.actions.hover(t || [], {
                          clientOffset: o.lastClientOffset,
                        }),
                        (o.hoverRafId = null);
                    })),
                  (t || []).some(function (e) {
                    return o.monitor.canDropOnTarget(e);
                  })
                    ? (e.preventDefault(),
                      e.dataTransfer &&
                        (e.dataTransfer.dropEffect = o.getCurrentDropEffect()))
                    : o.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                o.isDraggingNativeItem() && e.preventDefault(),
                  o.enterLeaveCounter.leave(e.target) &&
                    o.isDraggingNativeItem() &&
                    setTimeout(function () {
                      return o.endDragNativeItem();
                    }, 0);
              }),
              (this.handleTopDropCapture = function (e) {
                var t;
                ((o.dropTargetIds = []), o.isDraggingNativeItem())
                  ? (e.preventDefault(),
                    null === (t = o.currentNativeSource) ||
                      void 0 === t ||
                      t.loadDataTransfer(e.dataTransfer))
                  : fn(e.dataTransfer) && e.preventDefault();
                o.enterLeaveCounter.reset();
              }),
              (this.handleTopDrop = function (e) {
                var t = o.dropTargetIds;
                (o.dropTargetIds = []),
                  o.actions.hover(t, { clientOffset: Jt(e) }),
                  o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
                  o.isDraggingNativeItem()
                    ? o.endDragNativeItem()
                    : o.monitor.isDragging() && o.actions.endDrag();
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                "function" === typeof t.dragDrop &&
                  ("INPUT" === t.tagName ||
                    "SELECT" === t.tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new dn(n, r)),
              (this.actions = e.getActions()),
              (this.monitor = e.getMonitor()),
              (this.registry = e.getRegistry()),
              (this.enterLeaveCounter = new qt(this.isNodeInDocument));
          }
          return (
            ce(t, [
              {
                key: "profile",
                value: function () {
                  var e, t;
                  return {
                    sourcePreviewNodes: this.sourcePreviewNodes.size,
                    sourcePreviewNodeOptions:
                      this.sourcePreviewNodeOptions.size,
                    sourceNodeOptions: this.sourceNodeOptions.size,
                    sourceNodes: this.sourceNodes.size,
                    dragStartSourceIds:
                      (null === (e = this.dragStartSourceIds) || void 0 === e
                        ? void 0
                        : e.length) || 0,
                    dropTargetIds: this.dropTargetIds.length,
                    dragEnterTargetIds: this.dragEnterTargetIds.length,
                    dragOverTargetIds:
                      (null === (t = this.dragOverTargetIds) || void 0 === t
                        ? void 0
                        : t.length) || 0,
                  };
                },
              },
              {
                key: "window",
                get: function () {
                  return this.options.window;
                },
              },
              {
                key: "document",
                get: function () {
                  return this.options.document;
                },
              },
              {
                key: "rootElement",
                get: function () {
                  return this.options.rootElement;
                },
              },
              {
                key: "setup",
                value: function () {
                  var e = this.rootElement;
                  if (void 0 !== e) {
                    if (e.__isReactDndBackendSetUp)
                      throw new Error(
                        "Cannot have two HTML5 backends at the same time."
                      );
                    (e.__isReactDndBackendSetUp = !0),
                      this.addEventListeners(e);
                  }
                },
              },
              {
                key: "teardown",
                value: function () {
                  var e,
                    t = this.rootElement;
                  void 0 !== t &&
                    ((t.__isReactDndBackendSetUp = !1),
                    this.removeEventListeners(this.rootElement),
                    this.clearCurrentDragSourceNode(),
                    this.asyncEndDragFrameId &&
                      (null === (e = this.window) ||
                        void 0 === e ||
                        e.cancelAnimationFrame(this.asyncEndDragFrameId)));
                },
              },
              {
                key: "connectDragPreview",
                value: function (e, t, n) {
                  var r = this;
                  return (
                    this.sourcePreviewNodeOptions.set(e, n),
                    this.sourcePreviewNodes.set(e, t),
                    function () {
                      r.sourcePreviewNodes.delete(e),
                        r.sourcePreviewNodeOptions.delete(e);
                    }
                  );
                },
              },
              {
                key: "connectDragSource",
                value: function (e, t, n) {
                  var r = this;
                  this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n);
                  var o = function (t) {
                      return r.handleDragStart(t, e);
                    },
                    a = function (e) {
                      return r.handleSelectStart(e);
                    };
                  return (
                    t.setAttribute("draggable", "true"),
                    t.addEventListener("dragstart", o),
                    t.addEventListener("selectstart", a),
                    function () {
                      r.sourceNodes.delete(e),
                        r.sourceNodeOptions.delete(e),
                        t.removeEventListener("dragstart", o),
                        t.removeEventListener("selectstart", a),
                        t.setAttribute("draggable", "false");
                    }
                  );
                },
              },
              {
                key: "connectDropTarget",
                value: function (e, t) {
                  var n = this,
                    r = function (t) {
                      return n.handleDragEnter(t, e);
                    },
                    o = function (t) {
                      return n.handleDragOver(t, e);
                    },
                    a = function (t) {
                      return n.handleDrop(t, e);
                    };
                  return (
                    t.addEventListener("dragenter", r),
                    t.addEventListener("dragover", o),
                    t.addEventListener("drop", a),
                    function () {
                      t.removeEventListener("dragenter", r),
                        t.removeEventListener("dragover", o),
                        t.removeEventListener("drop", a);
                    }
                  );
                },
              },
              {
                key: "addEventListeners",
                value: function (e) {
                  e.addEventListener &&
                    (e.addEventListener("dragstart", this.handleTopDragStart),
                    e.addEventListener(
                      "dragstart",
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.addEventListener(
                      "dragend",
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.addEventListener("dragenter", this.handleTopDragEnter),
                    e.addEventListener(
                      "dragenter",
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.addEventListener(
                      "dragleave",
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.addEventListener("dragover", this.handleTopDragOver),
                    e.addEventListener(
                      "dragover",
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.addEventListener("drop", this.handleTopDrop),
                    e.addEventListener("drop", this.handleTopDropCapture, !0));
                },
              },
              {
                key: "removeEventListeners",
                value: function (e) {
                  e.removeEventListener &&
                    (e.removeEventListener(
                      "dragstart",
                      this.handleTopDragStart
                    ),
                    e.removeEventListener(
                      "dragstart",
                      this.handleTopDragStartCapture,
                      !0
                    ),
                    e.removeEventListener(
                      "dragend",
                      this.handleTopDragEndCapture,
                      !0
                    ),
                    e.removeEventListener("dragenter", this.handleTopDragEnter),
                    e.removeEventListener(
                      "dragenter",
                      this.handleTopDragEnterCapture,
                      !0
                    ),
                    e.removeEventListener(
                      "dragleave",
                      this.handleTopDragLeaveCapture,
                      !0
                    ),
                    e.removeEventListener("dragover", this.handleTopDragOver),
                    e.removeEventListener(
                      "dragover",
                      this.handleTopDragOverCapture,
                      !0
                    ),
                    e.removeEventListener("drop", this.handleTopDrop),
                    e.removeEventListener(
                      "drop",
                      this.handleTopDropCapture,
                      !0
                    ));
                },
              },
              {
                key: "getCurrentSourceNodeOptions",
                value: function () {
                  var e = this.monitor.getSourceId(),
                    t = this.sourceNodeOptions.get(e);
                  return hn(
                    { dropEffect: this.altKeyPressed ? "copy" : "move" },
                    t || {}
                  );
                },
              },
              {
                key: "getCurrentDropEffect",
                value: function () {
                  return this.isDraggingNativeItem()
                    ? "copy"
                    : this.getCurrentSourceNodeOptions().dropEffect;
                },
              },
              {
                key: "getCurrentSourcePreviewNodeOptions",
                value: function () {
                  var e = this.monitor.getSourceId();
                  return hn(
                    { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                    this.sourcePreviewNodeOptions.get(e) || {}
                  );
                },
              },
              {
                key: "isDraggingNativeItem",
                value: function () {
                  var t = this.monitor.getItemType();
                  return Object.keys(e).some(function (n) {
                    return e[n] === t;
                  });
                },
              },
              {
                key: "beginDragNativeItem",
                value: function (e, t) {
                  this.clearCurrentDragSourceNode(),
                    (this.currentNativeSource = (function (e, t) {
                      var n = cn[e];
                      if (!n)
                        throw new Error(
                          "native type ".concat(e, " has no configuration")
                        );
                      var r = new sn(n);
                      return r.loadDataTransfer(t), r;
                    })(e, t)),
                    (this.currentNativeHandle = this.registry.addSource(
                      e,
                      this.currentNativeSource
                    )),
                    this.actions.beginDrag([this.currentNativeHandle]);
                },
              },
              {
                key: "setCurrentDragSourceNode",
                value: function (e) {
                  var t = this;
                  this.clearCurrentDragSourceNode(),
                    (this.currentDragSourceNode = e);
                  this.mouseMoveTimeoutTimer = setTimeout(function () {
                    var e;
                    return null === (e = t.rootElement) || void 0 === e
                      ? void 0
                      : e.addEventListener(
                          "mousemove",
                          t.endDragIfSourceWasRemovedFromDOM,
                          !0
                        );
                  }, 1e3);
                },
              },
              {
                key: "clearCurrentDragSourceNode",
                value: function () {
                  if (this.currentDragSourceNode) {
                    var e;
                    if (((this.currentDragSourceNode = null), this.rootElement))
                      null === (e = this.window) ||
                        void 0 === e ||
                        e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                        this.rootElement.removeEventListener(
                          "mousemove",
                          this.endDragIfSourceWasRemovedFromDOM,
                          !0
                        );
                    return (this.mouseMoveTimeoutTimer = null), !0;
                  }
                  return !1;
                },
              },
              {
                key: "handleDragStart",
                value: function (e, t) {
                  e.defaultPrevented ||
                    (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                    this.dragStartSourceIds.unshift(t));
                },
              },
              {
                key: "handleDragEnter",
                value: function (e, t) {
                  this.dragEnterTargetIds.unshift(t);
                },
              },
              {
                key: "handleDragOver",
                value: function (e, t) {
                  null === this.dragOverTargetIds &&
                    (this.dragOverTargetIds = []),
                    this.dragOverTargetIds.unshift(t);
                },
              },
              {
                key: "handleDrop",
                value: function (e, t) {
                  this.dropTargetIds.unshift(t);
                },
              },
            ]),
            t
          );
        })(),
        vn = function (e, t, n) {
          return new gn(e, t, n);
        },
        mn = "dnd-core/INIT_COORDS",
        yn = "dnd-core/BEGIN_DRAG",
        bn = "dnd-core/PUBLISH_DRAG_SOURCE",
        wn = "dnd-core/HOVER",
        Cn = "dnd-core/DROP",
        kn = "dnd-core/END_DRAG";
      function En(e, t) {
        return {
          type: mn,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      function xn(e, t, n) {
        return t.split(".").reduce(function (e, t) {
          return e && e[t] ? e[t] : n || null;
        }, e);
      }
      function Sn(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      function _n(e) {
        return "object" === typeof e;
      }
      function On(e, t) {
        var n = new Map(),
          r = function (e) {
            n.set(e, n.has(e) ? n.get(e) + 1 : 1);
          };
        e.forEach(r), t.forEach(r);
        var o = [];
        return (
          n.forEach(function (e, t) {
            1 === e && o.push(t);
          }),
          o
        );
      }
      var In = {
        type: mn,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function Tn(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { publishSource: !0 },
            r = n.publishSource,
            o = void 0 === r || r,
            a = n.clientOffset,
            i = n.getSourceClientOffset,
            u = e.getMonitor(),
            l = e.getRegistry();
          e.dispatch(En(a)), Pn(t, u, l);
          var c = Ln(t, u);
          if (null != c) {
            var s = null;
            if (a) {
              if (!i) throw new Error("getSourceClientOffset must be defined");
              Dn(i), (s = i(c));
            }
            e.dispatch(En(a, s));
            var f = l.getSource(c),
              d = f.beginDrag(u, c);
            if (null != d) {
              Nn(d), l.pinSource(c);
              var p = l.getSourceType(c);
              return {
                type: yn,
                payload: {
                  itemType: p,
                  item: d,
                  sourceId: c,
                  clientOffset: a || null,
                  sourceClientOffset: s || null,
                  isSourcePublic: !!o,
                },
              };
            }
          } else e.dispatch(In);
        };
      }
      function Pn(e, t, n) {
        fe(!t.isDragging(), "Cannot call beginDrag while dragging."),
          e.forEach(function (e) {
            fe(n.getSource(e), "Expected sourceIds to be registered.");
          });
      }
      function Dn(e) {
        fe(
          "function" === typeof e,
          "When clientOffset is provided, getSourceClientOffset must be a function."
        );
      }
      function Nn(e) {
        fe(_n(e), "Item must be an object.");
      }
      function Ln(e, t) {
        for (var n = null, r = e.length - 1; r >= 0; r--)
          if (t.canDragSource(e[r])) {
            n = e[r];
            break;
          }
        return n;
      }
      function jn(e) {
        return function () {
          if (e.getMonitor().isDragging()) return { type: bn };
        };
      }
      function Mn(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
          ? e.some(function (e) {
              return e === t;
            })
          : e === t;
      }
      function Rn(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.clientOffset;
          Fn(t);
          var o = t.slice(0),
            a = e.getMonitor(),
            i = e.getRegistry();
          zn(o, a, i);
          var u = a.getItemType();
          return (
            An(o, i, u),
            Hn(o, a, i),
            { type: wn, payload: { targetIds: o, clientOffset: r || null } }
          );
        };
      }
      function Fn(e) {
        fe(Array.isArray(e), "Expected targetIds to be an array.");
      }
      function zn(e, t, n) {
        fe(t.isDragging(), "Cannot call hover while not dragging."),
          fe(!t.didDrop(), "Cannot call hover after drop.");
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          fe(
            e.lastIndexOf(o) === r,
            "Expected targetIds to be unique in the passed array."
          ),
            fe(n.getTarget(o), "Expected targetIds to be registered.");
        }
      }
      function An(e, t, n) {
        for (var r = e.length - 1; r >= 0; r--) {
          var o = e[r];
          Mn(t.getTargetType(o), n) || e.splice(r, 1);
        }
      }
      function Hn(e, t, n) {
        e.forEach(function (e) {
          n.getTarget(e).hover(t, e);
        });
      }
      function Un(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Bn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Un(e, t, n[t]);
            });
        }
        return e;
      }
      function Vn(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.getMonitor(),
            r = e.getRegistry();
          $n(n);
          var o = Zn(n);
          o.forEach(function (o, a) {
            var i = Wn(o, a, r, n),
              u = { type: Cn, payload: { dropResult: Bn({}, t, i) } };
            e.dispatch(u);
          });
        };
      }
      function $n(e) {
        fe(e.isDragging(), "Cannot call drop while not dragging."),
          fe(!e.didDrop(), "Cannot call drop twice during one drag operation.");
      }
      function Wn(e, t, n, r) {
        var o = n.getTarget(e),
          a = o ? o.drop(r, e) : void 0;
        return (
          (function (e) {
            fe(
              "undefined" === typeof e || _n(e),
              "Drop result must either be an object or undefined."
            );
          })(a),
          "undefined" === typeof a && (a = 0 === t ? {} : r.getDropResult()),
          a
        );
      }
      function Zn(e) {
        var t = e.getTargetIds().filter(e.canDropOnTarget, e);
        return t.reverse(), t;
      }
      function Gn(e) {
        return function () {
          var t = e.getMonitor(),
            n = e.getRegistry();
          !(function (e) {
            fe(e.isDragging(), "Cannot call endDrag while not dragging.");
          })(t);
          var r = t.getSourceId();
          null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource());
          return { type: kn };
        };
      }
      var qn = (function () {
        function e(t, n) {
          var r = this;
          ue(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
              var e = r.store.getState().refCount > 0;
              r.backend &&
                (e && !r.isSetUp
                  ? (r.backend.setup(), (r.isSetUp = !0))
                  : !e &&
                    r.isSetUp &&
                    (r.backend.teardown(), (r.isSetUp = !1)));
            }),
            (this.store = t),
            (this.monitor = n),
            t.subscribe(this.handleRefCountChange);
        }
        return (
          ce(e, [
            {
              key: "receiveBackend",
              value: function (e) {
                this.backend = e;
              },
            },
            {
              key: "getMonitor",
              value: function () {
                return this.monitor;
              },
            },
            {
              key: "getBackend",
              value: function () {
                return this.backend;
              },
            },
            {
              key: "getRegistry",
              value: function () {
                return this.monitor.registry;
              },
            },
            {
              key: "getActions",
              value: function () {
                var e = this,
                  t = this.store.dispatch;
                var n = (function (e) {
                  return {
                    beginDrag: Tn(e),
                    publishDragSource: jn(e),
                    hover: Rn(e),
                    drop: Vn(e),
                    endDrag: Gn(e),
                  };
                })(this);
                return Object.keys(n).reduce(function (r, o) {
                  var a,
                    i = n[o];
                  return (
                    (r[o] =
                      ((a = i),
                      function () {
                        for (
                          var n = arguments.length, r = new Array(n), o = 0;
                          o < n;
                          o++
                        )
                          r[o] = arguments[o];
                        var i = a.apply(e, r);
                        "undefined" !== typeof i && t(i);
                      })),
                    r
                  );
                }, {});
              },
            },
            {
              key: "dispatch",
              value: function (e) {
                this.store.dispatch(e);
              },
            },
          ]),
          e
        );
      })();
      function Qn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Kn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qn(Object(n), !0).forEach(function (t) {
                tn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Yn(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var Xn =
          ("function" === typeof Symbol && Symbol.observable) || "@@observable",
        Jn = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        er = {
          INIT: "@@redux/INIT" + Jn(),
          REPLACE: "@@redux/REPLACE" + Jn(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Jn();
          },
        };
      function tr(e) {
        if ("object" !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function nr(e, t, n) {
        var r;
        if (
          ("function" === typeof t && "function" === typeof n) ||
          ("function" === typeof n && "function" === typeof arguments[3])
        )
          throw new Error(Yn(0));
        if (
          ("function" === typeof t &&
            "undefined" === typeof n &&
            ((n = t), (t = void 0)),
          "undefined" !== typeof n)
        ) {
          if ("function" !== typeof n) throw new Error(Yn(1));
          return n(nr)(e, t);
        }
        if ("function" !== typeof e) throw new Error(Yn(2));
        var o = e,
          a = t,
          i = [],
          u = i,
          l = !1;
        function c() {
          u === i && (u = i.slice());
        }
        function s() {
          if (l) throw new Error(Yn(3));
          return a;
        }
        function f(e) {
          if ("function" !== typeof e) throw new Error(Yn(4));
          if (l) throw new Error(Yn(5));
          var t = !0;
          return (
            c(),
            u.push(e),
            function () {
              if (t) {
                if (l) throw new Error(Yn(6));
                (t = !1), c();
                var n = u.indexOf(e);
                u.splice(n, 1), (i = null);
              }
            }
          );
        }
        function d(e) {
          if (!tr(e)) throw new Error(Yn(7));
          if ("undefined" === typeof e.type) throw new Error(Yn(8));
          if (l) throw new Error(Yn(9));
          try {
            (l = !0), (a = o(a, e));
          } finally {
            l = !1;
          }
          for (var t = (i = u), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function p(e) {
          if ("function" !== typeof e) throw new Error(Yn(10));
          (o = e), d({ type: er.REPLACE });
        }
        function h() {
          var e,
            t = f;
          return (
            ((e = {
              subscribe: function (e) {
                if ("object" !== typeof e || null === e)
                  throw new Error(Yn(11));
                function n() {
                  e.next && e.next(s());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[Xn] = function () {
              return this;
            }),
            e
          );
        }
        return (
          d({ type: er.INIT }),
          ((r = { dispatch: d, subscribe: f, getState: s, replaceReducer: p })[
            Xn
          ] = h),
          r
        );
      }
      function rr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return 0 === t.length
          ? function (e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (e, t) {
              return function () {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      var or = function (e, t) {
        return e === t;
      };
      function ar(e, t) {
        return (!e && !t) || (!(!e || !t) && e.x === t.x && e.y === t.y);
      }
      function ir(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : or;
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
        return !0;
      }
      function ur(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function lr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              ur(e, t, n[t]);
            });
        }
        return e;
      }
      var cr = {
        initialSourceClientOffset: null,
        initialClientOffset: null,
        clientOffset: null,
      };
      function sr() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case mn:
          case yn:
            return {
              initialSourceClientOffset: n.sourceClientOffset,
              initialClientOffset: n.clientOffset,
              clientOffset: n.clientOffset,
            };
          case wn:
            return ar(e.clientOffset, n.clientOffset)
              ? e
              : lr({}, e, { clientOffset: n.clientOffset });
          case kn:
          case Cn:
            return cr;
          default:
            return e;
        }
      }
      var fr = "dnd-core/ADD_SOURCE",
        dr = "dnd-core/ADD_TARGET",
        pr = "dnd-core/REMOVE_SOURCE",
        hr = "dnd-core/REMOVE_TARGET";
      function gr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function vr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              gr(e, t, n[t]);
            });
        }
        return e;
      }
      var mr = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
      function yr() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mr,
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = t.payload;
        switch (t.type) {
          case yn:
            return vr({}, e, {
              itemType: n.itemType,
              item: n.item,
              sourceId: n.sourceId,
              isSourcePublic: n.isSourcePublic,
              dropResult: null,
              didDrop: !1,
            });
          case bn:
            return vr({}, e, { isSourcePublic: !0 });
          case wn:
            return vr({}, e, { targetIds: n.targetIds });
          case hr:
            return -1 === e.targetIds.indexOf(n.targetId)
              ? e
              : vr({}, e, { targetIds: Sn(e.targetIds, n.targetId) });
          case Cn:
            return vr({}, e, {
              dropResult: n.dropResult,
              didDrop: !0,
              targetIds: [],
            });
          case kn:
            return vr({}, e, {
              itemType: null,
              item: null,
              sourceId: null,
              dropResult: null,
              didDrop: !1,
              isSourcePublic: null,
              targetIds: [],
            });
          default:
            return e;
        }
      }
      function br() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case fr:
          case dr:
            return e + 1;
          case pr:
          case hr:
            return e - 1;
          default:
            return e;
        }
      }
      var wr = [],
        Cr = [];
      function kr(e, t) {
        return (
          e !== wr &&
          (e === Cr ||
            "undefined" === typeof t ||
            ((n = e),
            t.filter(function (e) {
              return n.indexOf(e) > -1;
            })).length > 0)
        );
        var n;
      }
      function Er() {
        var e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
          case wn:
            break;
          case fr:
          case dr:
          case hr:
          case pr:
            return wr;
          default:
            return Cr;
        }
        var t = e.payload,
          n = t.targetIds,
          r = void 0 === n ? [] : n,
          o = t.prevTargetIds,
          a = void 0 === o ? [] : o,
          i = On(r, a),
          u = i.length > 0 || !ir(r, a);
        if (!u) return wr;
        var l = a[a.length - 1],
          c = r[r.length - 1];
        return l !== c && (l && i.push(l), c && i.push(c)), i;
      }
      function xr() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return e + 1;
      }
      function Sr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function _r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              Sr(e, t, n[t]);
            });
        }
        return e;
      }
      function Or() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return {
          dirtyHandlerIds: Er(e.dirtyHandlerIds, {
            type: t.type,
            payload: _r({}, t.payload, {
              prevTargetIds: xn(e, "dragOperation.targetIds", []),
            }),
          }),
          dragOffset: sr(e.dragOffset, t),
          refCount: br(e.refCount, t),
          dragOperation: yr(e.dragOperation, t),
          stateId: xr(e.stateId),
        };
      }
      function Ir(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      (wr.__IS_NONE__ = !0), (Cr.__IS_ALL__ = !0);
      var Tr,
        Pr = (function () {
          function e(t, n) {
            ue(this, e), (this.store = t), (this.registry = n);
          }
          return (
            ce(e, [
              {
                key: "subscribeToStateChange",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.handlerIds;
                  fe("function" === typeof e, "listener must be a function."),
                    fe(
                      "undefined" === typeof r || Array.isArray(r),
                      "handlerIds, when specified, must be an array of strings."
                    );
                  var o = this.store.getState().stateId,
                    a = function () {
                      var n = t.store.getState(),
                        a = n.stateId;
                      try {
                        a === o ||
                          (a === o + 1 && !kr(n.dirtyHandlerIds, r)) ||
                          e();
                      } finally {
                        o = a;
                      }
                    };
                  return this.store.subscribe(a);
                },
              },
              {
                key: "subscribeToOffsetChange",
                value: function (e) {
                  var t = this;
                  fe("function" === typeof e, "listener must be a function.");
                  var n = this.store.getState().dragOffset;
                  return this.store.subscribe(function () {
                    var r = t.store.getState().dragOffset;
                    r !== n && ((n = r), e());
                  });
                },
              },
              {
                key: "canDragSource",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e);
                  return (
                    fe(
                      t,
                      "Expected to find a valid source. sourceId=".concat(e)
                    ),
                    !this.isDragging() && t.canDrag(this, e)
                  );
                },
              },
              {
                key: "canDropOnTarget",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getTarget(e);
                  return (
                    fe(
                      t,
                      "Expected to find a valid target. targetId=".concat(e)
                    ),
                    !(!this.isDragging() || this.didDrop()) &&
                      Mn(this.registry.getTargetType(e), this.getItemType()) &&
                      t.canDrop(this, e)
                  );
                },
              },
              {
                key: "isDragging",
                value: function () {
                  return Boolean(this.getItemType());
                },
              },
              {
                key: "isDraggingSource",
                value: function (e) {
                  if (!e) return !1;
                  var t = this.registry.getSource(e, !0);
                  return (
                    fe(
                      t,
                      "Expected to find a valid source. sourceId=".concat(e)
                    ),
                    !(!this.isDragging() || !this.isSourcePublic()) &&
                      this.registry.getSourceType(e) === this.getItemType() &&
                      t.isDragging(this, e)
                  );
                },
              },
              {
                key: "isOverTarget",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { shallow: !1 };
                  if (!e) return !1;
                  var n = t.shallow;
                  if (!this.isDragging()) return !1;
                  var r = this.registry.getTargetType(e),
                    o = this.getItemType();
                  if (o && !Mn(r, o)) return !1;
                  var a = this.getTargetIds();
                  if (!a.length) return !1;
                  var i = a.indexOf(e);
                  return n ? i === a.length - 1 : i > -1;
                },
              },
              {
                key: "getItemType",
                value: function () {
                  return this.store.getState().dragOperation.itemType;
                },
              },
              {
                key: "getItem",
                value: function () {
                  return this.store.getState().dragOperation.item;
                },
              },
              {
                key: "getSourceId",
                value: function () {
                  return this.store.getState().dragOperation.sourceId;
                },
              },
              {
                key: "getTargetIds",
                value: function () {
                  return this.store.getState().dragOperation.targetIds;
                },
              },
              {
                key: "getDropResult",
                value: function () {
                  return this.store.getState().dragOperation.dropResult;
                },
              },
              {
                key: "didDrop",
                value: function () {
                  return this.store.getState().dragOperation.didDrop;
                },
              },
              {
                key: "isSourcePublic",
                value: function () {
                  return Boolean(
                    this.store.getState().dragOperation.isSourcePublic
                  );
                },
              },
              {
                key: "getInitialClientOffset",
                value: function () {
                  return this.store.getState().dragOffset.initialClientOffset;
                },
              },
              {
                key: "getInitialSourceClientOffset",
                value: function () {
                  return this.store.getState().dragOffset
                    .initialSourceClientOffset;
                },
              },
              {
                key: "getClientOffset",
                value: function () {
                  return this.store.getState().dragOffset.clientOffset;
                },
              },
              {
                key: "getSourceClientOffset",
                value: function () {
                  return (function (e) {
                    var t,
                      n,
                      r = e.clientOffset,
                      o = e.initialClientOffset,
                      a = e.initialSourceClientOffset;
                    return r && o && a
                      ? Ir(((n = a), { x: (t = r).x + n.x, y: t.y + n.y }), o)
                      : null;
                  })(this.store.getState().dragOffset);
                },
              },
              {
                key: "getDifferenceFromInitialOffset",
                value: function () {
                  return (function (e) {
                    var t = e.clientOffset,
                      n = e.initialClientOffset;
                    return t && n ? Ir(t, n) : null;
                  })(this.store.getState().dragOffset);
                },
              },
            ]),
            e
          );
        })(),
        Dr = 0;
      function Nr(e, t) {
        t && Array.isArray(e)
          ? e.forEach(function (e) {
              return Nr(e, !1);
            })
          : fe(
              "string" === typeof e || "symbol" === typeof e,
              t
                ? "Type can only be a string, a symbol, or an array of either."
                : "Type can only be a string or a symbol."
            );
      }
      function Lr(e) {
        Mr.length || (jr(), !0), (Mr[Mr.length] = e);
      }
      !(function (e) {
        (e.SOURCE = "SOURCE"), (e.TARGET = "TARGET");
      })(Tr || (Tr = {}));
      var jr,
        Mr = [],
        Rr = 0;
      function Fr() {
        for (; Rr < Mr.length; ) {
          var e = Rr;
          if (((Rr += 1), Mr[e].call(), Rr > 1024)) {
            for (var t = 0, n = Mr.length - Rr; t < n; t++) Mr[t] = Mr[t + Rr];
            (Mr.length -= Rr), (Rr = 0);
          }
        }
        (Mr.length = 0), (Rr = 0), !1;
      }
      var zr = "undefined" !== typeof n.g ? n.g : self,
        Ar = zr.MutationObserver || zr.WebKitMutationObserver;
      function Hr(e) {
        return function () {
          var t = setTimeout(r, 0),
            n = setInterval(r, 50);
          function r() {
            clearTimeout(t), clearInterval(n), e();
          }
        };
      }
      (jr =
        "function" === typeof Ar
          ? (function (e) {
              var t = 1,
                n = new Ar(e),
                r = document.createTextNode("");
              return (
                n.observe(r, { characterData: !0 }),
                function () {
                  (t = -t), (r.data = t);
                }
              );
            })(Fr)
          : Hr(Fr)),
        (Lr.requestFlush = jr),
        (Lr.makeRequestCallFromTimer = Hr);
      var Ur = [],
        Br = [],
        Vr = Lr.makeRequestCallFromTimer(function () {
          if (Br.length) throw Br.shift();
        });
      function $r(e) {
        var t;
        ((t = Ur.length ? Ur.pop() : new Wr()).task = e), Lr(t);
      }
      var Wr = (function () {
        function e() {}
        return (
          (e.prototype.call = function () {
            try {
              this.task.call();
            } catch (e) {
              $r.onerror ? $r.onerror(e) : (Br.push(e), Vr());
            } finally {
              (this.task = null), (Ur[Ur.length] = this);
            }
          }),
          e
        );
      })();
      function Zr(e) {
        var t = (Dr++).toString();
        switch (e) {
          case Tr.SOURCE:
            return "S".concat(t);
          case Tr.TARGET:
            return "T".concat(t);
          default:
            throw new Error("Unknown Handler Role: ".concat(e));
        }
      }
      function Gr(e) {
        switch (e[0]) {
          case "S":
            return Tr.SOURCE;
          case "T":
            return Tr.TARGET;
          default:
            throw new Error("Cannot parse handler ID: ".concat(e));
        }
      }
      function qr(e, t) {
        var n = e.entries(),
          r = !1;
        do {
          var o = n.next(),
            a = o.done;
          if (m(o.value, 2)[1] === t) return !0;
          r = !!a;
        } while (!r);
        return !1;
      }
      var Qr = (function () {
        function e(t) {
          ue(this, e),
            (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = t);
        }
        return (
          ce(e, [
            {
              key: "addSource",
              value: function (e, t) {
                Nr(e),
                  (function (e) {
                    fe(
                      "function" === typeof e.canDrag,
                      "Expected canDrag to be a function."
                    ),
                      fe(
                        "function" === typeof e.beginDrag,
                        "Expected beginDrag to be a function."
                      ),
                      fe(
                        "function" === typeof e.endDrag,
                        "Expected endDrag to be a function."
                      );
                  })(t);
                var n = this.addHandler(Tr.SOURCE, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: fr, payload: { sourceId: e } };
                    })(n)
                  ),
                  n
                );
              },
            },
            {
              key: "addTarget",
              value: function (e, t) {
                Nr(e, !0),
                  (function (e) {
                    fe(
                      "function" === typeof e.canDrop,
                      "Expected canDrop to be a function."
                    ),
                      fe(
                        "function" === typeof e.hover,
                        "Expected hover to be a function."
                      ),
                      fe(
                        "function" === typeof e.drop,
                        "Expected beginDrag to be a function."
                      );
                  })(t);
                var n = this.addHandler(Tr.TARGET, e, t);
                return (
                  this.store.dispatch(
                    (function (e) {
                      return { type: dr, payload: { targetId: e } };
                    })(n)
                  ),
                  n
                );
              },
            },
            {
              key: "containsHandler",
              value: function (e) {
                return qr(this.dragSources, e) || qr(this.dropTargets, e);
              },
            },
            {
              key: "getSource",
              value: function (e) {
                var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                fe(this.isSourceId(e), "Expected a valid source ID.");
                var n = t && e === this.pinnedSourceId,
                  r = n ? this.pinnedSource : this.dragSources.get(e);
                return r;
              },
            },
            {
              key: "getTarget",
              value: function (e) {
                return (
                  fe(this.isTargetId(e), "Expected a valid target ID."),
                  this.dropTargets.get(e)
                );
              },
            },
            {
              key: "getSourceType",
              value: function (e) {
                return (
                  fe(this.isSourceId(e), "Expected a valid source ID."),
                  this.types.get(e)
                );
              },
            },
            {
              key: "getTargetType",
              value: function (e) {
                return (
                  fe(this.isTargetId(e), "Expected a valid target ID."),
                  this.types.get(e)
                );
              },
            },
            {
              key: "isSourceId",
              value: function (e) {
                return Gr(e) === Tr.SOURCE;
              },
            },
            {
              key: "isTargetId",
              value: function (e) {
                return Gr(e) === Tr.TARGET;
              },
            },
            {
              key: "removeSource",
              value: function (e) {
                var t = this;
                fe(this.getSource(e), "Expected an existing source."),
                  this.store.dispatch(
                    (function (e) {
                      return { type: pr, payload: { sourceId: e } };
                    })(e)
                  ),
                  $r(function () {
                    t.dragSources.delete(e), t.types.delete(e);
                  });
              },
            },
            {
              key: "removeTarget",
              value: function (e) {
                fe(this.getTarget(e), "Expected an existing target."),
                  this.store.dispatch(
                    (function (e) {
                      return { type: hr, payload: { targetId: e } };
                    })(e)
                  ),
                  this.dropTargets.delete(e),
                  this.types.delete(e);
              },
            },
            {
              key: "pinSource",
              value: function (e) {
                var t = this.getSource(e);
                fe(t, "Expected an existing source."),
                  (this.pinnedSourceId = e),
                  (this.pinnedSource = t);
              },
            },
            {
              key: "unpinSource",
              value: function () {
                fe(this.pinnedSource, "No source is pinned at the time."),
                  (this.pinnedSourceId = null),
                  (this.pinnedSource = null);
              },
            },
            {
              key: "addHandler",
              value: function (e, t, n) {
                var r = Zr(e);
                return (
                  this.types.set(r, t),
                  e === Tr.SOURCE
                    ? this.dragSources.set(r, n)
                    : e === Tr.TARGET && this.dropTargets.set(r, n),
                  r
                );
              },
            },
          ]),
          e
        );
      })();
      function Kr(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = Yr(r),
          a = new Pr(o, new Qr(o)),
          i = new qn(o, a),
          u = e(i, t, n);
        return i.receiveBackend(u), i;
      }
      function Yr(e) {
        var t =
          "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__;
        return nr(
          Or,
          e && t && t({ name: "dnd-core", instanceId: "dnd-core" })
        );
      }
      function Xr(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var Jr = 0,
        eo = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
        to = (0, t.memo)(function (e) {
          var n = e.children,
            r = (function (e) {
              if ("manager" in e) {
                return [{ dragDropManager: e.manager }, !1];
              }
              var t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : no(),
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = t;
                  o[eo] || (o[eo] = { dragDropManager: Kr(e, t, n, r) });
                  return o[eo];
                })(e.backend, e.context, e.options, e.debugMode),
                n = !e.context;
              return [t, n];
            })(Xr(e, ["children"])),
            o = m(r, 2),
            a = o[0],
            i = o[1];
          return (
            (0, t.useEffect)(function () {
              if (i) {
                var e = no();
                return (
                  ++Jr,
                  function () {
                    0 === --Jr && (e[eo] = null);
                  }
                );
              }
            }, []),
            (0, s.jsx)(pe.Provider, { value: a, children: n })
          );
        });
      function no() {
        return "undefined" !== typeof global ? global : window;
      }
      var ro = function () {
          var e = Y();
          return (
            t.useEffect(
              function () {
                e(function (e) {
                  e({ type: $t }),
                    fetch("".concat(nt, "/ingredients"))
                      .then(function (e) {
                        return e.ok
                          ? e.json()
                          : Promise.reject(
                              "\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(
                                e.statusText
                              )
                            );
                      })
                      .then(function (t) {
                        t && t.success
                          ? e({ type: Wt, items: t.data })
                          : e({ type: Zt });
                      })
                      .catch(function (t) {
                        e({ type: Zt });
                      });
                });
              },
              [e]
            ),
            (0, s.jsxs)(Vt, {
              children: [
                (0, s.jsx)(h, {}),
                (0, s.jsx)("main", {
                  className: o,
                  children: (0, s.jsxs)(to, {
                    backend: vn,
                    children: [(0, s.jsx)(ze, {}), (0, s.jsx)(Ft, {})],
                  }),
                }),
              ],
            })
          );
        },
        oo = { ingredients: [], ingredientsRequest: !1, ingredientsFail: !1 },
        ao = { openCard: null },
        io = { bun: "60d3b41abdacab0026a733c7", components: [] },
        uo = { order: null, orderRequest: !1, orderFail: !1 },
        lo = (function (e) {
          for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            0, "function" === typeof e[o] && (n[o] = e[o]);
          }
          var a,
            i = Object.keys(n);
          try {
            !(function (e) {
              Object.keys(e).forEach(function (t) {
                var n = e[t];
                if ("undefined" === typeof n(void 0, { type: er.INIT }))
                  throw new Error(Yn(12));
                if (
                  "undefined" ===
                  typeof n(void 0, { type: er.PROBE_UNKNOWN_ACTION() })
                )
                  throw new Error(Yn(13));
              });
            })(n);
          } catch (u) {
            a = u;
          }
          return function (e, t) {
            if ((void 0 === e && (e = {}), a)) throw a;
            for (var r = !1, o = {}, u = 0; u < i.length; u++) {
              var l = i[u],
                c = n[l],
                s = e[l],
                f = c(s, t);
              if ("undefined" === typeof f) {
                t && t.type;
                throw new Error(Yn(14));
              }
              (o[l] = f), (r = r || f !== s);
            }
            return (r = r || i.length !== Object.keys(e).length) ? o : e;
          };
        })({
          burger: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : oo,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case $t:
                return Kn(Kn({}, e), {}, { ingredientsRequest: !0 });
              case Wt:
                return {
                  ingredientsRequest: !1,
                  ingredientsFail: !1,
                  ingredients: t.items,
                };
              case Zt:
                return {
                  ingredientsRequest: !1,
                  ingredientsFail: !0,
                  ingredients: [],
                };
              default:
                return e;
            }
          },
          view: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ao,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case oe:
                return { openCard: t.view };
              case ae:
                return { openCard: "" };
              default:
                return e;
            }
          },
          construct: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : io,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case lt:
                return Kn(
                  Kn({}, e),
                  {},
                  {
                    components: ve(e.components).concat({
                      id: t.id,
                      key: t.key,
                    }),
                  }
                );
              case st:
                return Kn(Kn({}, e), {}, { bun: t.id });
              case ct:
                return Kn(
                  Kn({}, e),
                  {},
                  {
                    components: ve(e.components).filter(function (e) {
                      return e.key !== t.key;
                    }),
                  }
                );
              case ft:
                return Kn(Kn({}, e), {}, { components: t.components });
              case dt:
                return { bun: "60d3b41abdacab0026a733c7", components: [] };
              default:
                return e;
            }
          },
          order: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : uo,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case rt:
                return Kn(Kn({}, e), {}, { orderRequest: !0 });
              case ot:
                return { orderRequest: !1, orderFail: !1, order: t.order };
              case at:
                return { orderFail: !0, orderRequest: !1, order: null };
              case it:
                return Kn(Kn({}, e), {}, { order: null });
              default:
                return e;
            }
          },
        });
      function co(e) {
        return function (t) {
          var n = t.dispatch,
            r = t.getState;
          return function (t) {
            return function (o) {
              return "function" === typeof o ? o(n, r, e) : t(o);
            };
          };
        };
      }
      var so = co();
      so.withExtraArgument = co;
      var fo = so,
        po = (
          "object" === typeof window &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : rr
        )(
          (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return function () {
                var n = e.apply(void 0, arguments),
                  r = function () {
                    throw new Error(Yn(15));
                  },
                  o = {
                    getState: n.getState,
                    dispatch: function () {
                      return r.apply(void 0, arguments);
                    },
                  },
                  a = t.map(function (e) {
                    return e(o);
                  });
                return (
                  (r = rr.apply(void 0, a)(n.dispatch)),
                  Kn(Kn({}, n), {}, { dispatch: r })
                );
              };
            };
          })(fo)
        ),
        ho = nr(lo, po);
      r.render(
        (0, s.jsx)(t.StrictMode, {
          children: (0, s.jsx)(Z, { store: ho, children: (0, s.jsx)(ro, {}) }),
        }),
        document.getElementById("root")
      );
    })();
})();
//# sourceMappingURL=main.dab16b3a.js.map
