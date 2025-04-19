// 1.0.9
!(function (e, t) {
  "object" == typeof exports && typeof module < "u"
    ? t(require("react"), require("react-dom"))
    : "function" == typeof define && define.amd
    ? define(["react", "react-dom"], t)
    : t(
        (e = typeof globalThis < "u" ? globalThis : e || self).React,
        e.ReactDOM
      );
})(this, function (G, x) {
  "use strict";
  const we = (function (e) {
    var t,
      n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (e)
      for (const o in e)
        "default" !== o &&
          ((t = Object.getOwnPropertyDescriptor(e, o)),
          Object.defineProperty(
            n,
            o,
            t.get ? t : { enumerable: !0, get: () => e[o] }
          ));
    return (n.default = e), Object.freeze(n);
  })(G);
  var e = { exports: {} },
    t = {};
  var S,
    w,
    M,
    O,
    V,
    F,
    P,
    H,
    W,
    _,
    X,
    Z,
    j,
    z,
    D,
    Y,
    J,
    U,
    Q,
    $,
    K,
    q,
    ee,
    te,
    ne,
    oe,
    re,
    ae,
    ie,
    se,
    ce,
    le,
    ue,
    de,
    ge,
    pe,
    he,
    fe,
    me,
    be,
    ve,
    ye,
    Ie,
    Ce,
    xe,
    Se,
    n = {};
  function f(e) {
    for (
      var t,
        n,
        o,
        r = arguments.length,
        a = new Array(1 < r ? r - 1 : 0),
        i = 1;
      i < r;
      i++
    )
      a[i - 1] = arguments[i];
    (t = "error"),
      (e = e),
      (n = a),
      "" !== (o = D.ReactDebugCurrentFrame.getStackAddendum()) &&
        ((e += "%s"), (n = n.concat([o]))),
      (o = n.map(function (e) {
        return String(e);
      })).unshift("Warning: " + e),
      Function.prototype.apply.call(console[t], console, o);
  }
  function Le(e) {
    return e.displayName || "Context";
  }
  function Ge(e) {
    if (null != e) {
      if (
        ("number" == typeof e.tag &&
          f(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ),
        "function" == typeof e)
      )
        return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case M:
          return "Fragment";
        case w:
          return "Portal";
        case V:
          return "Profiler";
        case O:
          return "StrictMode";
        case W:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case P:
            return Le(e) + ".Consumer";
          case F:
            return Le(e._context) + ".Provider";
          case H:
            return (
              (n = (t = e).render),
              (o = "ForwardRef"),
              (t = t.displayName) ||
                ("" !== (t = n.displayName || n.name || "")
                  ? o + "(" + t + ")"
                  : o)
            );
          case X:
            n = e.displayName || null;
            return null !== n ? n : Ge(e.type) || "Memo";
          case Z:
            (t = e._payload), (o = e._init);
            try {
              return Ge(o(t));
            } catch {
              return null;
            }
        }
      var t, n, o;
    }
    return null;
  }
  function Te() {}
  function Be(e) {
    if (void 0 === oe)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        oe = (t && t[1]) || "";
      }
    return (
      `
` +
      oe +
      e
    );
  }
  function Re(t, e) {
    if (!t || ae) return "";
    var n,
      o = ie.get(t);
    if (void 0 !== o) return o;
    ae = !0;
    var r,
      a,
      o = Error.prepareStackTrace;
    (Error.prepareStackTrace = void 0),
      (r = re.current),
      (re.current = null),
      0 === ne &&
        ((Y = console.log),
        (J = console.info),
        (U = console.warn),
        (Q = console.error),
        ($ = console.group),
        (K = console.groupCollapsed),
        (q = console.groupEnd),
        (a = { configurable: !0, enumerable: !0, value: Te, writable: !0 }),
        Object.defineProperties(console, {
          info: a,
          log: a,
          warn: a,
          error: a,
          group: a,
          groupCollapsed: a,
          groupEnd: a,
        })),
      ne++;
    try {
      if (e) {
        var i = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(i.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(i, []);
          } catch (e) {
            n = e;
          }
          Reflect.construct(t, [], i);
        } else {
          try {
            i.call();
          } catch (e) {
            n = e;
          }
          t.call(i.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (e) {
          n = e;
        }
        t();
      }
    } catch (e) {
      if (e && n && "string" == typeof e.stack) {
        for (
          var s,
            c = e.stack.split(`
`),
            l = n.stack.split(`
`),
            u = c.length - 1,
            d = l.length - 1;
          1 <= u && 0 <= d && c[u] !== l[d];

        )
          d--;
        for (; 1 <= u && 0 <= d; u--, d--)
          if (c[u] !== l[d]) {
            if (1 !== u || 1 !== d)
              do {
                if ((u--, --d < 0 || c[u] !== l[d]))
                  return (
                    (s =
                      `
` + c[u].replace(" at new ", " at ")),
                    t.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", t.displayName)),
                    "function" == typeof t && ie.set(t, s),
                    s
                  );
              } while (1 <= u && 0 <= d);
            break;
          }
      }
    } finally {
      (ae = !1),
        (re.current = r),
        0 === --ne &&
          ((a = { configurable: !0, enumerable: !0, writable: !0 }),
          Object.defineProperties(console, {
            log: te({}, a, { value: Y }),
            info: te({}, a, { value: J }),
            warn: te({}, a, { value: U }),
            error: te({}, a, { value: Q }),
            group: te({}, a, { value: $ }),
            groupCollapsed: te({}, a, { value: K }),
            groupEnd: te({}, a, { value: q }),
          })),
        ne < 0 &&
          f(
            "disabledDepth fell below zero. This is a bug in React. Please file an issue."
          ),
        (Error.prepareStackTrace = o);
    }
    (e = t ? t.displayName || t.name : ""), (i = e ? Be(e) : "");
    return "function" == typeof t && ie.set(t, i), i;
  }
  function Me(e, t, n) {
    if (null != e) {
      if ("function" == typeof e)
        return Re(e, !(!(o = (o = e).prototype) || !o.isReactComponent));
      var o;
      if ("string" == typeof e) return Be(e);
      switch (e) {
        case W:
          return Be("Suspense");
        case _:
          return Be("SuspenseList");
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case H:
            return Re(e.render, !1);
          case X:
            return Me(e.type, t, n);
          case Z:
            var r = e._payload,
              a = e._init;
            try {
              return Me(a(r), t, n);
            } catch {}
        }
    }
    return "";
  }
  function Oe(e) {
    var t;
    e
      ? ((t = e._owner),
        (e = Me(e.type, e._source, t ? t.type : null)),
        le.setExtraStackFrame(e))
      : le.setExtraStackFrame(null);
  }
  function Ve(e) {
    return ue(e);
  }
  function Fe(e) {
    !(function () {
      try {
        return;
      } catch {
        return 1;
      }
    })() ||
      f(
        "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
        ((e = e),
        ("function" == typeof Symbol &&
          Symbol.toStringTag &&
          e[Symbol.toStringTag]) ||
          e.constructor.name ||
          "Object")
      );
  }
  function Pe(e, t, n, o, r) {
    var a,
      i = {},
      s = null,
      c = null;
    for (a in (void 0 !== n && (Fe(n), (s = "" + n)),
    (function (e) {
      if (se.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return;
      }
      return void 0 !== e.key;
    })(t) && (Fe(t.key), (s = "" + t.key)),
    (function (e) {
      if (se.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning) return;
      }
      return void 0 !== e.ref;
    })(t) &&
      ((c = t.ref), (n = r), "string" == typeof (g = t).ref) &&
      pe.current &&
      n &&
      pe.current.stateNode !== n &&
      ((n = Ge(pe.current.type)),
      fe[n] ||
        (f(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          Ge(pe.current.type),
          g.ref
        ),
        (fe[n] = !0))),
    t))
      se.call(t, a) && !he.hasOwnProperty(a) && (i[a] = t[a]);
    if (e && e.defaultProps) {
      var l = e.defaultProps;
      for (a in l) void 0 === i[a] && (i[a] = l[a]);
    }
    (s || c) &&
      ((g = "function" == typeof e ? e.displayName || e.name || "Unknown" : e),
      s &&
        ((n = i),
        (d = g),
        (h.isReactWarning = !0),
        Object.defineProperty(n, "key", { get: h, configurable: !0 })),
      c) &&
      ((n = i),
      (u = g),
      (p.isReactWarning = !0),
      Object.defineProperty(n, "ref", { get: p, configurable: !0 }));
    var u,
      d,
      g,
      n = e,
      e = s,
      s = c,
      c = r,
      r = o,
      o = pe.current;
    return (
      (n = {
        $$typeof: S,
        type: n,
        key: e,
        ref: s,
        props: i,
        _owner: o,
        _store: {},
      }),
      Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c,
      }),
      Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: r,
      }),
      Object.freeze && (Object.freeze(n.props), Object.freeze(n)),
      n
    );
    function p() {
      ge ||
        ((ge = !0),
        f(
          "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
          u
        ));
    }
    function h() {
      de ||
        ((de = !0),
        f(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
          d
        ));
    }
  }
  function He(e) {
    var t;
    e
      ? ((t = e._owner),
        (e = Me(e.type, e._source, t ? t.type : null)),
        be.setExtraStackFrame(e))
      : be.setExtraStackFrame(null);
  }
  function We(e) {
    return "object" == typeof e && null !== e && e.$$typeof === S;
  }
  function _e() {
    if (me.current) {
      var e = Ge(me.current.type);
      if (e)
        return (
          `

Check the render method of \`` +
          e +
          "`."
        );
    }
    return "";
  }
  function Xe(e, t) {
    var n;
    !e._store ||
      e._store.validated ||
      null != e.key ||
      ((e._store.validated = !0),
      (t = t),
      (n = _e()) ||
        ((t = "string" == typeof t ? t : t.displayName || t.name) &&
          (n =
            `

Check the top-level render call using <` +
            t +
            ">.")),
      ye[(t = n)]) ||
      ((ye[t] = !0),
      (n = ""),
      e &&
        e._owner &&
        e._owner !== me.current &&
        (n = " It was passed a child from " + Ge(e._owner.type) + "."),
      He(e),
      f(
        'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
        t,
        n
      ),
      He(null));
  }
  function Ze(e, t) {
    if ("object" == typeof e)
      if (Ve(e))
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          We(o) && Xe(o, t);
        }
      else if (We(e)) e._store && (e._store.validated = !0);
      else if (e) {
        i =
          null !== (i = e) &&
          "object" == typeof i &&
          "function" == typeof (i = (z && i[z]) || i["@@iterator"])
            ? i
            : null;
        if ("function" == typeof i && i !== e.entries)
          for (var r, a = i.call(e); !(r = a.next()).done; )
            We(r.value) && Xe(r.value, t);
      }
    var i;
  }
  function je(e) {
    var t,
      n = e.type;
    if (
      null != n &&
      "string" != typeof n &&
      ("function" == typeof n ||
        ("object" == typeof n && (n.$$typeof === H || n.$$typeof === X)))
    ) {
      if ((t = n.propTypes)) {
        var o,
          r = Ge(n),
          a = t,
          i = e.props,
          s = "prop",
          c = r,
          l = e,
          u = Function.call.bind(se);
        for (o in a)
          if (u(a, o)) {
            var d,
              g = void 0;
            try {
              if ("function" != typeof a[o])
                throw (
                  (((d = Error(
                    (c || "React class") +
                      ": " +
                      s +
                      " type `" +
                      o +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof a[o] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  )).name = "Invariant Violation"),
                  d)
                );
              g = a[o](
                i,
                o,
                c,
                s,
                null,
                "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
              );
            } catch (e) {
              g = e;
            }
            !g ||
              g instanceof Error ||
              (Oe(l),
              f(
                "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                c || "React class",
                s,
                o,
                typeof g
              ),
              Oe(null)),
              g instanceof Error &&
                !(g.message in ce) &&
                ((ce[g.message] = !0),
                Oe(l),
                f("Failed %s type: %s", s, g.message),
                Oe(null));
          }
      } else
        void 0 === n.PropTypes ||
          ve ||
          ((ve = !0),
          f(
            "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
            Ge(n) || "Unknown"
          ));
      "function" != typeof n.getDefaultProps ||
        n.getDefaultProps.isReactClassApproved ||
        f(
          "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
        );
    }
  }
  function ze(e, t, n, o, r, a) {
    var i,
      s,
      c = !(
        "string" != typeof (c = e) &&
        "function" != typeof c &&
        c !== M &&
        c !== V &&
        c !== O &&
        c !== W &&
        c !== _ &&
        c !== j &&
        ("object" != typeof c ||
          null === c ||
          (c.$$typeof !== Z &&
            c.$$typeof !== X &&
            c.$$typeof !== F &&
            c.$$typeof !== P &&
            c.$$typeof !== H &&
            c.$$typeof !== ee &&
            void 0 === c.getModuleId))
      ),
      l =
        (c ||
          ((i = ""),
          (void 0 === e ||
            ("object" == typeof e &&
              null !== e &&
              0 === Object.keys(e).length)) &&
            (i +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
          (i +=
            (void 0 !== (l = r)
              ? `

Check your code at ` +
                l.fileName.replace(/^.*[\\\/]/, "") +
                ":" +
                l.lineNumber +
                "."
              : "") || _e()),
          null === e
            ? (s = "null")
            : Ve(e)
            ? (s = "array")
            : void 0 !== e && e.$$typeof === S
            ? ((s = "<" + (Ge(e.type) || "Unknown") + " />"),
              (i =
                " Did you accidentally export a JSX literal instead of a component?"))
            : (s = typeof e),
          f(
            "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            s,
            i
          )),
        Pe(e, t, n, r, a));
    if (null != l) {
      if (c) {
        var u = t.children;
        if (void 0 !== u)
          if (o)
            if (Ve(u)) {
              for (var d = 0; d < u.length; d++) Ze(u[d], e);
              Object.freeze && Object.freeze(u);
            } else
              f(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else Ze(u, e);
      }
      (e === M
        ? function (e) {
            for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
              var o = t[n];
              if ("children" !== o && "key" !== o) {
                He(e),
                  f(
                    "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                    o
                  ),
                  He(null);
                break;
              }
            }
            null !== e.ref &&
              (He(e),
              f("Invalid attribute `ref` supplied to `React.Fragment`."),
              He(null));
          }
        : je)(l);
    }
    return l;
  }
  function De(e, t, n) {
    return ze(e, t, n, !1);
  }
  function Ye(e, t, n) {
    return ze(e, t, n, !0);
  }
  function Je(e, t, n) {
    var o,
      r = {},
      a = null,
      i = null;
    for (o in (void 0 !== n && (a = "" + n),
    void 0 !== t.key && (a = "" + t.key),
    void 0 !== t.ref && (i = t.ref),
    t))
      Ce.call(t, o) && !Se.hasOwnProperty(o) && (r[o] = t[o]);
    if (e && e.defaultProps)
      for (o in (t = e.defaultProps)) void 0 === r[o] && (r[o] = t[o]);
    return {
      $$typeof: Ie,
      type: e,
      key: a,
      ref: i,
      props: r,
      _owner: xe.current,
    };
  }
  "production" === process.env.NODE_ENV
    ? (e.exports =
        (a ||
          ((a = 1),
          (a = G),
          (Ie = Symbol.for("react.element")),
          (Qe = Symbol.for("react.fragment")),
          (Ce = Object.prototype.hasOwnProperty),
          (xe =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner),
          (Se = { key: !0, ref: !0, __self: !0, __source: !0 }),
          (n.Fragment = Qe),
          (n.jsx = Je),
          (n.jsxs = Je)),
        n))
    : (e.exports =
        (o ||
          ((o = 1),
          "production" !== process.env.NODE_ENV &&
            ((a = G),
            (S = Symbol.for("react.element")),
            (w = Symbol.for("react.portal")),
            (M = Symbol.for("react.fragment")),
            (O = Symbol.for("react.strict_mode")),
            (V = Symbol.for("react.profiler")),
            (F = Symbol.for("react.provider")),
            (P = Symbol.for("react.context")),
            (H = Symbol.for("react.forward_ref")),
            (W = Symbol.for("react.suspense")),
            (_ = Symbol.for("react.suspense_list")),
            (X = Symbol.for("react.memo")),
            (Z = Symbol.for("react.lazy")),
            (j = Symbol.for("react.offscreen")),
            (z = Symbol.iterator),
            (D = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
            (ee = Symbol.for("react.module.reference")),
            (te = Object.assign),
            (ne = 0),
            (re = D.ReactCurrentDispatcher),
            (ae = !(Te.__reactDisabledLog = !0)),
            (ie = new ("function" == typeof WeakMap ? WeakMap : Map)()),
            (se = Object.prototype.hasOwnProperty),
            (ce = {}),
            (le = D.ReactDebugCurrentFrame),
            (ue = Array.isArray),
            (pe = D.ReactCurrentOwner),
            (he = { key: !0, ref: !0, __self: !0, __source: !0 }),
            (fe = {}),
            (me = D.ReactCurrentOwner),
            (be = D.ReactDebugCurrentFrame),
            (ve = !1),
            (ye = {}),
            (t.Fragment = M),
            (t.jsx = De),
            (t.jsxs = Ye))),
        t));
  var Ue,
    m = e.exports,
    Qe = {},
    $e = x;
  function Ke(e, t) {
    window.dispatchEvent(new StorageEvent("storage", { key: e, newValue: t }));
  }
  "production" === process.env.NODE_ENV
    ? ((Qe.createRoot = $e.createRoot), (Qe.hydrateRoot = $e.hydrateRoot))
    : ((Ue = $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
      (Qe.createRoot = function (e, t) {
        Ue.usingClientEntryPoint = !0;
        try {
          return $e.createRoot(e, t);
        } finally {
          Ue.usingClientEntryPoint = !1;
        }
      }),
      (Qe.hydrateRoot = function (e, t, n) {
        Ue.usingClientEntryPoint = !0;
        try {
          return $e.hydrateRoot(e, t, n);
        } finally {
          Ue.usingClientEntryPoint = !1;
        }
      }));
  const qe = (e, t) => {
      t = JSON.stringify(t);
      window.sessionStorage.setItem(e, t), Ke(e, t);
    },
    et = (e) => {
      window.sessionStorage.removeItem(e), Ke(e, null);
    },
    tt = (e) => window.sessionStorage.getItem(e),
    nt = (e) => (
      window.addEventListener("storage", e),
      () => window.removeEventListener("storage", e)
    ),
    ot = () => {
      throw Error("useSessionStorage is a client-only hook");
    };
  var rt = Symbol.for("immer-nothing"),
    at = Symbol.for("immer-draftable"),
    s = Symbol.for("immer-state"),
    it =
      "production" !== process.env.NODE_ENV
        ? [
            function (e) {
              return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
            },
            function (e) {
              return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
            },
            "This object has been frozen and should not be mutated",
            function (e) {
              return (
                "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " +
                e
              );
            },
            "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
            "Immer forbids circular references",
            "The first or second argument to `produce` must be a function",
            "The third argument to `produce` must be a function or undefined",
            "First argument to `createDraft` must be a plain object, an array, or an immerable object",
            "First argument to `finishDraft` must be a draft returned by `createDraft`",
            function (e) {
              return "'current' expects a draft, got: " + e;
            },
            "Object.defineProperty() cannot be used on an Immer draft",
            "Object.setPrototypeOf() cannot be used on an Immer draft",
            "Immer only supports deleting array indices",
            "Immer only supports setting array indices and the 'length' property",
            function (e) {
              return "'original' expects a draft, got: " + e;
            },
          ]
        : [];
  function l(e, ...t) {
    var n;
    if ("production" !== process.env.NODE_ENV)
      throw (
        ((t = "function" == typeof (n = it[e]) ? n.apply(null, t) : n),
        new Error("[Immer] " + t))
      );
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var st = Object.getPrototypeOf;
  function ct(e) {
    return e && e[s];
  }
  function lt(e) {
    var t;
    return (
      e &&
      (dt(e) ||
        Array.isArray(e) ||
        e[at] ||
        (null != (t = e.constructor) && t[at]) ||
        mt(e) ||
        bt(e))
    );
  }
  var ut = Object.prototype.constructor.toString();
  function dt(e) {
    return (
      !(!e || "object" != typeof e) &&
      (null === (e = st(e)) ||
        (e = Object.hasOwnProperty.call(e, "constructor") && e.constructor) ===
          Object ||
        ("function" == typeof e && Function.toString.call(e) === ut))
    );
  }
  function gt(n, o) {
    0 === pt(n)
      ? Object.entries(n).forEach(([e, t]) => {
          o(e, t, n);
        })
      : n.forEach((e, t) => o(t, e, n));
  }
  function pt(e) {
    var t = e[s];
    return t ? t.type_ : Array.isArray(e) ? 1 : mt(e) ? 2 : bt(e) ? 3 : 0;
  }
  function ht(e, t) {
    return 2 === pt(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function ft(e, t, n) {
    var o = pt(e);
    2 === o ? e.set(t, n) : 3 === o ? e.add(n) : (e[t] = n);
  }
  function mt(e) {
    return e instanceof Map;
  }
  function bt(e) {
    return e instanceof Set;
  }
  function vt(e) {
    return e.copy_ || e.base_;
  }
  function yt(t, e) {
    if (mt(t)) return new Map(t);
    if (bt(t)) return new Set(t);
    if (Array.isArray(t)) return Array.prototype.slice.call(t);
    if (!e && dt(t))
      return st(t) ? { ...t } : Object.assign(Object.create(null), t);
    var n = Object.getOwnPropertyDescriptors(t),
      o = (delete n[s], Reflect.ownKeys(n));
    for (let e = 0; e < o.length; e++) {
      var r = o[e],
        a = n[r];
      !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
        (a.get || a.set) &&
          (n[r] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: t[r],
          });
    }
    return Object.create(st(t), n);
  }
  function It(e, t = !1) {
    return (
      xt(e) ||
        ct(e) ||
        !lt(e) ||
        (1 < pt(e) && (e.set = e.add = e.clear = e.delete = Ct),
        Object.freeze(e),
        t && gt(e, (e, t) => It(t, !0))),
      e
    );
  }
  function Ct() {
    l(2);
  }
  function xt(e) {
    return Object.isFrozen(e);
  }
  var St,
    wt = {};
  function At(e) {
    var t = wt[e];
    return t || l(0, e), t;
  }
  function Et(e, t) {
    t &&
      (At("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function Nt(e) {
    kt(e), e.drafts_.forEach(Gt), (e.drafts_ = null);
  }
  function kt(e) {
    e === St && (St = e.parent_);
  }
  function Lt(e) {
    return (St = {
      drafts_: [],
      parent_: St,
      immer_: e,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    });
  }
  function Gt(e) {
    e = e[s];
    0 === e.type_ || 1 === e.type_ ? e.revoke_() : (e.revoked_ = !0);
  }
  function Tt(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    var n = t.drafts_[0];
    return (
      void 0 !== e && e !== n
        ? (n[s].modified_ && (Nt(t), l(4)),
          lt(e) && ((e = Bt(t, e)), t.parent_ || Mt(t, e)),
          t.patches_ &&
            At("Patches").generateReplacementPatches_(
              n[s].base_,
              e,
              t.patches_,
              t.inversePatches_
            ))
        : (e = Bt(t, n, [])),
      Nt(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== rt ? e : void 0
    );
  }
  function Bt(o, n, r) {
    if (xt(n)) return n;
    const a = n[s];
    if (!a) return gt(n, (e, t) => Rt(o, a, n, e, t, r)), n;
    if (a.scope_ !== o) return n;
    if (!a.modified_) return Mt(o, a.base_, !0), a.base_;
    if (!a.finalized_) {
      (a.finalized_ = !0), a.scope_.unfinalizedDrafts_--;
      const i = a.copy_;
      let e = i,
        n = !1;
      3 === a.type_ && ((e = new Set(i)), i.clear(), (n = !0)),
        gt(e, (e, t) => Rt(o, a, i, e, t, r, n)),
        Mt(o, i, !1),
        r &&
          o.patches_ &&
          At("Patches").generatePatches_(a, r, o.patches_, o.inversePatches_);
    }
    return a.copy_;
  }
  function Rt(e, t, n, o, r, a, i) {
    if (("production" !== process.env.NODE_ENV && r === n && l(5), ct(r))) {
      a = Bt(
        e,
        r,
        a && t && 3 !== t.type_ && !ht(t.assigned_, o) ? a.concat(o) : void 0
      );
      if ((ft(n, o, a), !ct(a))) return;
      e.canAutoFreeze_ = !1;
    } else i && n.add(r);
    !lt(r) ||
      xt(r) ||
      (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
      (Bt(e, r), t && t.scope_.parent_) ||
      Mt(e, r);
  }
  function Mt(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && It(t, n);
  }
  var Ot = {
      get(e, t) {
        var n, o;
        return t === s
          ? e
          : ht((o = vt(e)), t)
          ? ((n = o[t]),
            !e.finalized_ && lt(n) && n === Ft(e.base_, t)
              ? (Wt(e), (e.copy_[t] = _t(n, e)))
              : n)
          : ((n = e),
            (e = Pt((e = o), (o = t)))
              ? "value" in e
                ? e.value
                : null == (o = e.get)
                ? void 0
                : o.call(n.draft_)
              : void 0);
      },
      has(e, t) {
        return t in vt(e);
      },
      ownKeys(e) {
        return Reflect.ownKeys(vt(e));
      },
      set(e, t, n) {
        var o = Pt(vt(e), t);
        if (null != o && o.set) o.set.call(e.draft_, n);
        else {
          if (!e.modified_) {
            var o = Ft(vt(e), t),
              r = null == o ? void 0 : o[s];
            if (r && r.base_ === n)
              return (e.copy_[t] = n), !(e.assigned_[t] = !1);
            if (
              ((r = n) === (o = o)
                ? 0 !== r || 1 / r == 1 / o
                : r != r && o != o) &&
              (void 0 !== n || ht(e.base_, t))
            )
              return !0;
            Wt(e), Ht(e);
          }
          (e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
            (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = n), (e.assigned_[t] = !0));
        }
        return !0;
      },
      deleteProperty(e, t) {
        return (
          void 0 !== Ft(e.base_, t) || t in e.base_
            ? ((e.assigned_[t] = !1), Wt(e), Ht(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        );
      },
      getOwnPropertyDescriptor(e, t) {
        var n = vt(e),
          o = Reflect.getOwnPropertyDescriptor(n, t);
        return (
          o && {
            writable: !0,
            configurable: 1 !== e.type_ || "length" !== t,
            enumerable: o.enumerable,
            value: n[t],
          }
        );
      },
      defineProperty() {
        l(11);
      },
      getPrototypeOf(e) {
        return st(e.base_);
      },
      setPrototypeOf() {
        l(12);
      },
    },
    Vt = {};
  function Ft(e, t) {
    var n = e[s];
    return (n ? vt(n) : e)[t];
  }
  function Pt(t, n) {
    if (n in t) {
      let e = st(t);
      for (; e; ) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (o) return o;
        e = st(e);
      }
    }
  }
  function Ht(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Ht(e.parent_));
  }
  function Wt(e) {
    e.copy_ || (e.copy_ = yt(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  gt(Ot, (e, t) => {
    Vt[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  }),
    (Vt.deleteProperty = function (e, t) {
      return (
        "production" !== process.env.NODE_ENV && isNaN(parseInt(t)) && l(13),
        Vt.set.call(this, e, t, void 0)
      );
    }),
    (Vt.set = function (e, t, n) {
      return (
        "production" !== process.env.NODE_ENV &&
          "length" !== t &&
          isNaN(parseInt(t)) &&
          l(14),
        Ot.set.call(this, e[0], t, n, e[0])
      );
    });
  function _t(e, t) {
    e = mt(e)
      ? At("MapSet").proxyMap_(e, t)
      : bt(e)
      ? At("MapSet").proxySet_(e, t)
      : (function (e, t) {
          var n = Array.isArray(e);
          let o = (t = {
              type_: n ? 1 : 0,
              scope_: t ? t.scope_ : St,
              modified_: !1,
              finalized_: !1,
              assigned_: {},
              parent_: t,
              base_: e,
              draft_: null,
              copy_: null,
              revoke_: null,
              isManual_: !1,
            }),
            r = Ot;
          n && ((o = [t]), (r = Vt));
          var { revoke: e, proxy: n } = Proxy.revocable(o, r);
          return (t.draft_ = n), (t.revoke_ = e), n;
        })(e, t);
    return (t ? t.scope_ : St).drafts_.push(e), e;
  }
  var n = new (class {
      constructor(e) {
        (this.autoFreeze_ = !0),
          (this.useStrictShallowCopy_ = !1),
          (this.produce = (t, n, o) => {
            if ("function" == typeof t && "function" != typeof n) {
              const s = n,
                c = ((n = t), this);
              return function (e = s, ...t) {
                return c.produce(e, (e) => n.call(this, e, ...t));
              };
            }
            "function" != typeof n && l(6),
              void 0 !== o && "function" != typeof o && l(7);
            let r;
            if (lt(t)) {
              var a = Lt(this),
                i = _t(t, void 0);
              let e = !0;
              try {
                (r = n(i)), (e = !1);
              } finally {
                (e ? Nt : kt)(a);
              }
              return Et(a, o), Tt(r, a);
            }
            if (!t || "object" != typeof t)
              return (
                (r = void 0 === (r = n(t)) ? t : r) === rt && (r = void 0),
                this.autoFreeze_ && It(r, !0),
                o &&
                  ((i = []),
                  (a = []),
                  At("Patches").generateReplacementPatches_(t, r, i, a),
                  o(i, a)),
                r
              );
            l(1, t);
          }),
          (this.produceWithPatches = (n, e) => {
            if ("function" == typeof n)
              return (e, ...t) => this.produceWithPatches(e, (e) => n(e, ...t));
            let o, r;
            return [
              this.produce(n, e, (e, t) => {
                (o = e), (r = t);
              }),
              o,
              r,
            ];
          }),
          "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
            this.setAutoFreeze(e.autoFreeze),
          "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) &&
            this.setUseStrictShallowCopy(e.useStrictShallowCopy);
      }
      createDraft(e) {
        lt(e) || l(8),
          ct(e) &&
            (ct((t = e)) || l(10, t),
            (e = (function n(e) {
              if (!lt(e) || xt(e)) return e;
              const t = e[s];
              let o;
              if (t) {
                if (!t.modified_) return t.base_;
                (t.finalized_ = !0),
                  (o = yt(e, t.scope_.immer_.useStrictShallowCopy_));
              } else o = yt(e, !0);
              return (
                gt(o, (e, t) => {
                  ft(o, e, n(t));
                }),
                t && (t.finalized_ = !1),
                o
              );
            })(t)));
        var t = Lt(this),
          e = _t(e, void 0);
        return (e[s].isManual_ = !0), kt(t), e;
      }
      finishDraft(e, t) {
        (e = e && e[s]), (e && e.isManual_) || l(9), (e = e.scope_);
        return Et(e, t), Tt(void 0, e);
      }
      setAutoFreeze(e) {
        this.autoFreeze_ = e;
      }
      setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
      }
      applyPatches(e, t) {
        let n;
        for (n = t.length - 1; 0 <= n; n--) {
          var o = t[n];
          if (0 === o.path.length && "replace" === o.op) {
            e = o.value;
            break;
          }
        }
        -1 < n && (t = t.slice(n + 1));
        const r = At("Patches").applyPatches_;
        return ct(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
      }
    })(),
    Xt = n.produce;
  n.produceWithPatches.bind(n),
    n.setAutoFreeze.bind(n),
    n.setUseStrictShallowCopy.bind(n),
    n.applyPatches.bind(n),
    n.createDraft.bind(n),
    n.finishDraft.bind(n);
  const Zt = {},
    jt = {
      AccessibilityIcon: "_AccessibilityIcon_w7tb4_1",
      showSpinner: "_showSpinner_w7tb4_16",
      spin: "_spin_w7tb4_1",
    },
    zt = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "AccessibleIcon",
          ...e,
        },
        we.createElement("circle", { cx: 12, cy: 4, r: 2 }),
        we.createElement("path", {
          d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z",
        })
      );
  var Dt,
    o = { exports: {} };
  function Yt() {
    for (var e = "", t = 0; t < arguments.length; t++) {
      var n = arguments[t];
      n &&
        (e = Jt(
          e,
          (function (e) {
            if ("string" == typeof e || "number" == typeof e) return e;
            if ("object" != typeof e) return "";
            if (Array.isArray(e)) return Yt.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t,
              n = "";
            for (t in e) Dt.call(e, t) && e[t] && (n = Jt(n, t));
            return n;
          })(n)
        ));
    }
    return e;
  }
  function Jt(e, t) {
    return t ? (e ? e + " " + t : e + t) : e;
  }
  (a = o),
    (Dt = {}.hasOwnProperty),
    a.exports ? (a.exports = Yt.default = Yt) : (window.classNames = Yt);
  const Ut =
      (t = o.exports) &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t,
    Qt = ({ onShow: e, showSpinner: t }) =>
      m.jsx("a", {
        onClick: e,
        role: "button",
        title: "Open Accessibility Menu",
        className: Ut(jt.AccessibilityIcon, { [jt.showSpinner]: t }),
        children: m.jsx(zt, { title: "AccessibleIcon" }),
      }),
    $t = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "span",
      "p",
      "a",
      "label",
      "i",
      "button",
      "img",
      "ol",
      "svg",
    ],
    Kt = "acc-accessibility-menu",
    qt = "accessibilik",
    h = "root-" + qt,
    en = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "CloseIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        })
      ),
    tn = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "RestartAltIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z",
        })
      );
  function T() {
    return (T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              o = arguments[t];
            for (n in o)
              Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          }
          return e;
        }).apply(this, arguments);
  }
  const nn = {};
  function on() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    ("string" == typeof t[0] && nn[t[0]]) ||
      ("string" == typeof t[0] && (nn[t[0]] = new Date()),
      (function () {
        if (console && console.warn) {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          "string" == typeof t[0] && (t[0] = "react-i18next:: " + t[0]),
            console.warn(...t);
        }
      })(...t));
  }
  const rn = (t, n) => () => {
    if (t.isInitialized) n();
    else {
      const e = () => {
        setTimeout(() => {
          t.off("initialized", e);
        }, 0),
          n();
      };
      t.on("initialized", e);
    }
  };
  function an(e, t, n) {
    e.loadNamespaces(t, rn(e, n));
  }
  function sn(t, e, n, o) {
    (n = "string" == typeof n ? [n] : n).forEach((e) => {
      t.options.ns.indexOf(e) < 0 && t.options.ns.push(e);
    }),
      t.loadLanguages(e, rn(t, o));
  }
  function cn(n, e, t) {
    let o = 2 < arguments.length && void 0 !== t ? t : {};
    return e.languages && e.languages.length
      ? void 0 !== e.options.ignoreJSONStructure
        ? e.hasLoadedNamespace(n, {
            lng: o.lng,
            precheck: (e, t) => {
              if (
                o.bindI18n &&
                -1 < o.bindI18n.indexOf("languageChanging") &&
                e.services.backendConnector.backend &&
                e.isLanguageChangingTo &&
                !t(e.isLanguageChangingTo, n)
              )
                return !1;
            },
          })
        : (function (e, n, t) {
            var o,
              t = 2 < arguments.length && void 0 !== t ? t : {},
              r = n.languages[0],
              a = !!n.options && n.options.fallbackLng,
              i = n.languages[n.languages.length - 1];
            return (
              "cimode" === r.toLowerCase() ||
              ((o = (e, t) => {
                e = n.services.backendConnector.state[e + "|" + t];
                return -1 === e || 2 === e;
              }),
              !(
                (t.bindI18n &&
                  -1 < t.bindI18n.indexOf("languageChanging") &&
                  n.services.backendConnector.backend &&
                  n.isLanguageChangingTo &&
                  !o(n.isLanguageChangingTo, e)) ||
                !(
                  n.hasResourceBundle(r, e) ||
                  !n.services.backendConnector.backend ||
                  (n.options.resources && !n.options.partialBundledLanguages) ||
                  (o(r, e) && (!a || o(i, e)))
                )
              ))
            );
          })(n, e, o)
      : (on("i18n.languages were undefined or empty", e.languages), !0);
  }
  const ln =
      /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    un = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"',
      "&nbsp;": " ",
      "&#160;": " ",
      "&copy;": "©",
      "&#169;": "©",
      "&reg;": "®",
      "&#174;": "®",
      "&hellip;": "…",
      "&#8230;": "…",
      "&#x2F;": "/",
      "&#47;": "/",
    },
    dn = (e) => un[e];
  let gn = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: (e) => e.replace(ln, dn),
  };
  let pn;
  const hn = {
      type: "3rdParty",
      init(e) {
        (function (e) {
          (e = 0 < arguments.length && void 0 !== e ? e : {}),
            (gn = { ...gn, ...e });
        })(e.options.react),
          (e = e),
          (pn = e);
      },
    },
    fn = G.createContext();
  class mn {
    constructor() {
      this.usedNamespaces = {};
    }
    addUsedNamespaces(e) {
      e.forEach((e) => {
        this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
      });
    }
    getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }
  const bn = (e, t) => {
    const n = G.useRef();
    return (
      G.useEffect(() => {
        n.current = t ? n.current : e;
      }, [e, t]),
      n.current
    );
  };
  function vn(e, t) {
    let o = 1 < arguments.length && void 0 !== t ? t : {};
    const n = o["i18n"],
      { i18n: r, defaultNS: a } = G.useContext(fn) || {},
      i = n || r || pn;
    var s;
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new mn()), !i))
      return (
        on(
          "You will need to pass in an i18next instance by using initReactI18next"
        ),
        ((s = [
          (t = (e, t) =>
            "string" == typeof t
              ? t
              : t && "object" == typeof t && "string" == typeof t.defaultValue
              ? t.defaultValue
              : Array.isArray(e)
              ? e[e.length - 1]
              : e),
          {},
          !1,
        ]).t = t),
        (s.i18n = {}),
        (s.ready = !1),
        s
      );
    i.options.react &&
      void 0 !== i.options.react.wait &&
      on(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const c = { ...gn, ...i.options.react, ...o },
      { useSuspense: l, keyPrefix: u } = c;
    let d = e || a || (i.options && i.options.defaultNS);
    (d = "string" == typeof d ? [d] : d || ["translation"]),
      i.reportNamespaces.addUsedNamespaces &&
        i.reportNamespaces.addUsedNamespaces(d);
    const g =
      (i.isInitialized || i.initializedStoreOnce) &&
      d.every((e) => cn(e, i, c));
    function p() {
      return i.getFixedT(o.lng || null, "fallback" === c.nsMode ? d : d[0], u);
    }
    const [h, f] = G.useState(p);
    let m = d.join();
    o.lng && (m = "" + o.lng + m);
    const b = bn(m),
      v = G.useRef(!0),
      y =
        (G.useEffect(() => {
          const { bindI18n: e, bindI18nStore: t } = c;
          function n() {
            v.current && f(p);
          }
          return (
            (v.current = !0),
            g ||
              l ||
              (o.lng
                ? sn(i, o.lng, d, () => {
                    v.current && f(p);
                  })
                : an(i, d, () => {
                    v.current && f(p);
                  })),
            g && b && b !== m && v.current && f(p),
            e && i && i.on(e, n),
            t && i && i.store.on(t, n),
            () => {
              (v.current = !1),
                e && i && e.split(" ").forEach((e) => i.off(e, n)),
                t && i && t.split(" ").forEach((e) => i.store.off(e, n));
            }
          );
        }, [i, m]),
        G.useRef(!0));
    G.useEffect(() => {
      v.current && !y.current && f(p), (y.current = !1);
    }, [i, u]);
    t = [h, i, g];
    if (((t.t = h), (t.i18n = i), (t.ready = g) || (!g && !l))) return t;
    throw new Promise((e) => {
      o.lng ? sn(i, o.lng, d, () => e()) : an(i, d, () => e());
    });
  }
  const yn = {
      accHeader__resetBtn: "_accHeader__resetBtn_edc9t_1",
      accHeader__closeBtn: "_accHeader__closeBtn_edc9t_1",
      accHeader: "_accHeader_edc9t_1",
      accHeader__title: "_accHeader__title_edc9t_23",
      "acc-lang-select-container": "_acc-lang-select-container_edc9t_28",
    },
    In = ({ onInit: e, onShow: t }) => {
      var n = vn()["t"];
      return m.jsxs("header", {
        className: yn.accHeader,
        children: [
          m.jsx("button", {
            onClick: e,
            className: yn.accHeader__resetBtn,
            children: m.jsx(tn, {}),
          }),
          m.jsx("h3", {
            className: yn.accHeader__title,
            children: n("accessibility-menu"),
          }),
          m.jsx("button", {
            onClick: t,
            className: yn.accHeader__closeBtn,
            children: m.jsx(en, {}),
          }),
        ],
      });
    },
    Cn = { accFooter: "_accFooter_1pk2r_1" },
    xn = () =>
      m.jsx("footer", {
        className: Cn.accFooter,
        children: m.jsx("a", {
          target: "_blank",
          href: "https://www.linkedin.com/in/vladi-iokhim-26505714b/",
          children: " Developed By Vladi Iokhim ©",
        }),
      });
  function Sn(e) {
    return (Sn =
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
          })(e);
  }
  function wn(e) {
    e = (function (e, t) {
      if ("object" != Sn(e) || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (void 0 === n) return ("string" === t ? String : Number)(e);
      if ("object" != Sn((n = n.call(e, t || "default")))) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    })(e, "string");
    return "symbol" == Sn(e) ? e : String(e);
  }
  function Ae(e, t, n) {
    return (
      (t = wn(t)) in e
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
  function An(t, e) {
    var n,
      o = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        o.push.apply(o, n)),
      o
    );
  }
  function Ee(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? An(Object(n), !0).forEach(function (e) {
            Ae(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : An(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function En(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
    return o;
  }
  function Nn(e, t) {
    var n;
    if (e)
      return "string" == typeof e
        ? En(e, t)
        : "Map" ===
            (n =
              "Object" ===
                (n = Object.prototype.toString.call(e).slice(8, -1)) &&
              e.constructor
                ? e.constructor.name
                : n) || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? En(e, t)
        : void 0;
  }
  function Ne(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
        if (null != n) {
          var o,
            r,
            a,
            i,
            s = [],
            c = !0,
            l = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              c = !1;
            } else
              for (
                ;
                !(c = (o = a.call(n)).done) &&
                (s.push(o.value), s.length !== t);
                c = !0
              );
          } catch (e) {
            (l = !0), (r = e);
          } finally {
            try {
              if (!c && null != n.return && ((i = n.return()), Object(i) !== i))
                return;
            } finally {
              if (l) throw r;
            }
          }
          return s;
        }
      })(e, t) ||
      Nn(e, t) ||
      (function () {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })()
    );
  }
  function E(e, t) {
    if (null == e) return {};
    var n,
      o = (function (e, t) {
        if (null == e) return {};
        for (var n, o = {}, r = Object.keys(e), a = 0; a < r.length; a++)
          (n = r[a]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var r = Object.getOwnPropertySymbols(e), a = 0; a < r.length; a++)
        (n = r[a]),
          0 <= t.indexOf(n) ||
            !Object.prototype.propertyIsEnumerable.call(e, n) ||
            (o[n] = e[n]);
    return o;
  }
  var kn = [
    "defaultInputValue",
    "defaultMenuIsOpen",
    "defaultValue",
    "inputValue",
    "menuIsOpen",
    "onChange",
    "onInputChange",
    "onMenuClose",
    "onMenuOpen",
    "value",
  ];
  function Ln(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Gn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, wn(o.key), o);
    }
  }
  function Tn(e, t, n) {
    t && Gn(e.prototype, t),
      n && Gn(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 });
  }
  function Bn(e, t) {
    return (Bn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function Rn(e) {
    return (Rn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Mn(e, t) {
    if (t && ("object" === Sn(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    t = e;
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function On(n) {
    var o = (function () {
      if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    })();
    return function () {
      var e,
        t = Rn(n);
      return Mn(
        this,
        o
          ? ((e = Rn(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function ke(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return En(e);
      })(e) ||
      (function (e) {
        if (
          (typeof Symbol < "u" && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      Nn(e) ||
      (function () {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })()
    );
  }
  ((e = Yn.prototype).hydrate = function (e) {
    e.forEach(this._insertTag);
  }),
    (e.insert = function (t) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
        this._insertTag(
          ((n = this),
          (e = document.createElement("style")).setAttribute(
            "data-emotion",
            n.key
          ),
          void 0 !== n.nonce && e.setAttribute("nonce", n.nonce),
          e.appendChild(document.createTextNode("")),
          e.setAttribute("data-s", ""),
          e)
        );
      var e,
        n = this.tags[this.tags.length - 1];
      if (
        ("production" !== process.env.NODE_ENV &&
          ((e = 64 === t.charCodeAt(0) && 105 === t.charCodeAt(1)) &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              `You're attempting to insert the following rule:
` +
                t +
                "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !e)),
        this.isSpeedy)
      ) {
        var o = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = 0; t < document.styleSheets.length; t++)
            if (document.styleSheets[t].ownerNode === e)
              return document.styleSheets[t];
        })(n);
        try {
          o.insertRule(t, o.cssRules.length);
        } catch (e) {
          "production" === process.env.NODE_ENV ||
            /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(
              t
            ) ||
            console.error(
              'There was a problem inserting the following rule: "' + t + '"',
              e
            );
        }
      } else n.appendChild(document.createTextNode(t));
      this.ctr++;
    }),
    (e.flush = function () {
      this.tags.forEach(function (e) {
        return e.parentNode && e.parentNode.removeChild(e);
      }),
        (this.tags = []),
        (this.ctr = 0),
        "production" !== process.env.NODE_ENV &&
          (this._alreadyInsertedOrderInsensitiveRule = !1);
    });
  var Vn = Yn,
    i = "-ms-",
    Fn = "-moz-",
    c = "-webkit-",
    Pn = "comm",
    Hn = "rule",
    Wn = "decl",
    _n = "@import",
    Xn = "@keyframes",
    Zn = "@layer",
    jn = Math.abs,
    zn = String.fromCharCode,
    Dn = Object.assign;
  function Yn(e) {
    var n = this;
    (this._insertTag = function (e) {
      var t =
        0 === n.tags.length
          ? n.insertionPoint
            ? n.insertionPoint.nextSibling
            : n.prepend
            ? n.container.firstChild
            : n.before
          : n.tags[n.tags.length - 1].nextSibling;
      n.container.insertBefore(e, t), n.tags.push(e);
    }),
      (this.isSpeedy =
        void 0 === e.speedy ? "production" === process.env.NODE_ENV : e.speedy),
      (this.tags = []),
      (this.ctr = 0),
      (this.nonce = e.nonce),
      (this.key = e.key),
      (this.container = e.container),
      (this.prepend = e.prepend),
      (this.insertionPoint = e.insertionPoint),
      (this.before = null);
  }
  function Jn(e) {
    return e.trim();
  }
  function A(e, t, n) {
    return e.replace(t, n);
  }
  function Un(e, t) {
    return e.indexOf(t);
  }
  function N(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function Qn(e, t, n) {
    return e.slice(t, n);
  }
  function $n(e) {
    return e.length;
  }
  function Kn(e) {
    return e.length;
  }
  function qn(e, t) {
    return t.push(e), e;
  }
  var eo = 1,
    to = 1,
    no = 0,
    k = 0,
    r = 0,
    oo = "";
  function ro(e, t, n, o, r, a, i) {
    return {
      value: e,
      root: t,
      parent: n,
      type: o,
      props: r,
      children: a,
      line: eo,
      column: to,
      length: i,
      return: "",
    };
  }
  function ao(e, t) {
    return Dn(
      ro("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function io() {
    return (r = 0 < k ? N(oo, --k) : 0), to--, 10 === r && ((to = 1), eo--), r;
  }
  function L() {
    return (r = k < no ? N(oo, k++) : 0), to++, 10 === r && ((to = 1), eo++), r;
  }
  function so() {
    return N(oo, k);
  }
  function co(e, t) {
    return Qn(oo, e, t);
  }
  function lo(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function uo(e) {
    return (eo = to = 1), (no = $n((oo = e))), (k = 0), [];
  }
  function go(e) {
    return (oo = ""), e;
  }
  function po(e) {
    return Jn(
      co(
        k - 1,
        (function e(t) {
          for (; L(); )
            switch (r) {
              case t:
                return k;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(r);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                L();
            }
          return k;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)
      )
    );
  }
  function ho(e) {
    for (; (r = so()) && r < 33; ) L();
    return 2 < lo(e) || 3 < lo(r) ? "" : " ";
  }
  function fo(e, t) {
    for (
      ;
      --t &&
      L() &&
      !(r < 48 || 102 < r || (57 < r && r < 65) || (70 < r && r < 97));

    );
    return co(e, k + (t < 6 && 32 == so() && 32 == L()));
  }
  function mo(e, t) {
    for (; L() && e + r !== 57 && (e + r !== 84 || 47 !== so()); );
    return "/*" + co(t, k - 1) + "*" + zn(47 === e ? e : L());
  }
  function bo(e) {
    for (; !lo(so()); ) L();
    return co(e, k);
  }
  function vo(e) {
    return go(
      (function e(t, n, o, r, a, i, s, c, l) {
        for (
          var u = 0,
            d = 0,
            g = s,
            p = 0,
            h = 0,
            f = 0,
            m = 1,
            b = 1,
            v = 1,
            y = 0,
            I = "",
            C = a,
            x = i,
            S = r,
            w = I;
          b;

        )
          switch (((f = y), (y = L()))) {
            case 40:
              if (108 != f && 58 == N(w, g - 1)) {
                -1 != Un((w += A(po(y), "&", "&\f")), "&\f") && (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              w += po(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              w += ho(f);
              break;
            case 92:
              w += fo(k - 1, 7);
              continue;
            case 47:
              switch (so()) {
                case 42:
                case 47:
                  qn(Io(mo(L(), k), n, o), l);
                  break;
                default:
                  w += "/";
              }
              break;
            case 123 * m:
              c[u++] = $n(w) * v;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  b = 0;
                case 59 + d:
                  -1 == v && (w = A(w, /\f/g, "")),
                    0 < h &&
                      $n(w) - g &&
                      qn(
                        32 < h
                          ? Co(w + ";", r, o, g - 1)
                          : Co(A(w, " ", "") + ";", r, o, g - 2),
                        l
                      );
                  break;
                case 59:
                  w += ";";
                default:
                  if (
                    (qn(
                      (S = yo(w, n, o, u, d, a, c, I, (C = []), (x = []), g)),
                      i
                    ),
                    123 === y)
                  )
                    if (0 === d) e(w, n, S, S, C, i, g, c, x);
                    else
                      switch (99 === p && 110 === N(w, 3) ? 100 : p) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          e(
                            t,
                            S,
                            S,
                            r &&
                              qn(yo(t, S, S, 0, 0, a, c, I, a, (C = []), g), x),
                            a,
                            x,
                            g,
                            c,
                            r ? C : x
                          );
                          break;
                        default:
                          e(w, S, S, S, [""], x, 0, c, x);
                      }
              }
              (u = d = h = 0), (m = v = 1), (I = w = ""), (g = s);
              break;
            case 58:
              (g = 1 + $n(w)), (h = f);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == io()) continue;
              switch (((w += zn(y)), y * m)) {
                case 38:
                  v = 0 < d ? 1 : ((w += "\f"), -1);
                  break;
                case 44:
                  (c[u++] = ($n(w) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === so() && (w += po(L())),
                    (p = so()),
                    (d = g = $n((I = w += bo(k)))),
                    y++;
                  break;
                case 45:
                  45 === f && 2 == $n(w) && (m = 0);
              }
          }
        return i;
      })("", null, null, null, [""], (e = uo(e)), 0, [0], e)
    );
  }
  function yo(e, t, n, o, r, a, i, s, c, l, u) {
    for (
      var d, g = r - 1, p = 0 === r ? a : [""], h = Kn(p), f = 0, m = 0;
      f < o;
      ++f
    )
      for (var b, v = 0, y = Qn(e, g + 1, (g = jn((d = i[f])))); v < h; ++v)
        (b = Jn(0 < d ? p[v] + " " + y : A(y, /&\f/g, p[v]))) && (c[m++] = b);
    return ro(e, t, n, 0 === r ? Hn : s, c, l, u);
  }
  function Io(e, t, n) {
    return ro(e, t, n, Pn, zn(r), Qn(e, 2, -2), 0);
  }
  function Co(e, t, n, o) {
    return ro(e, t, n, Wn, Qn(e, 0, o), Qn(e, o + 1, -1), o);
  }
  function xo(e, t) {
    for (var n = "", o = Kn(e), r = 0; r < o; r++) n += t(e[r], r, e, t) || "";
    return n;
  }
  function So(e, t, n, o) {
    switch (e.type) {
      case Zn:
        if (e.children.length) break;
      case _n:
      case Wn:
        return (e.return = e.return || e.value);
      case Pn:
        return "";
      case Xn:
        return (e.return = e.value + "{" + xo(e.children, o) + "}");
      case Hn:
        e.value = e.props.join(",");
    }
    return $n((n = xo(e.children, o)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function wo(e, t) {
    var n = -1,
      o = 44;
    do {
      switch (lo(o)) {
        case 0:
          38 === o && 12 === so() && (t[n] = 1),
            (e[n] += (function (e, t, n) {
              for (
                var o, r = 0;
                (o = r), (r = so()), 38 === o && 12 === r && (t[n] = 1), !lo(r);

              )
                L();
              return co(e, k);
            })(k - 1, t, n));
          break;
        case 2:
          e[n] += po(o);
          break;
        case 4:
          if (44 === o) {
            (e[++n] = 58 === so() ? "&\f" : ""), (t[n] = e[n].length);
            break;
          }
        default:
          e[n] += zn(o);
      }
    } while ((o = L()));
    return e;
  }
  function Ao(e) {
    if ("rule" === e.type && e.parent && !(e.length < 1)) {
      for (
        var t = e.value,
          n = e.parent,
          o = e.column === n.column && e.line === n.line;
        "rule" !== n.type;

      )
        if (!(n = n.parent)) return;
      if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Lo.get(n)) && !o) {
        Lo.set(e, !0);
        for (
          var r = [], a = ko(t, r), i = n.props, s = 0, c = 0;
          s < a.length;
          s++
        )
          for (var l = 0; l < i.length; l++, c++)
            e.props[c] = r[s] ? a[s].replace(/&\f/g, i[l]) : i[l] + " " + a[s];
      }
    }
  }
  function Eo(e) {
    var t;
    "decl" === e.type &&
      108 === (t = e.value).charCodeAt(0) &&
      98 === t.charCodeAt(2) &&
      ((e.return = ""), (e.value = ""));
  }
  function No(e, t, n) {
    To(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
          ),
          Ro(e))
        : Bo(t, n) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
          ),
          Ro(e)));
  }
  var ko = function (e, t) {
      return go(wo(uo(e), t));
    },
    Lo = new WeakMap(),
    Go = function (e) {
      return (
        "comm" === e.type &&
        -1 <
          e.children.indexOf(
            "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason"
          )
      );
    },
    To = function (e) {
      return 105 === e.type.charCodeAt(1) && 64 === e.type.charCodeAt(0);
    },
    Bo = function (e, t) {
      for (var n = e - 1; 0 <= n; n--) if (!To(t[n])) return !0;
      return !1;
    },
    Ro = function (e) {
      (e.type = ""),
        (e.value = ""),
        (e.return = ""),
        (e.children = ""),
        (e.props = "");
    };
  function Mo(e, t) {
    switch (
      ((o = t),
      45 ^ N((n = e), 0)
        ? (((((((o << 2) ^ N(n, 0)) << 2) ^ N(n, 1)) << 2) ^ N(n, 2)) << 2) ^
          N(n, 3)
        : 0)
    ) {
      case 5103:
        return c + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return c + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return c + e + Fn + e + i + e + e;
      case 6828:
      case 4268:
        return c + e + i + e + e;
      case 6165:
        return c + e + i + "flex-" + e + e;
      case 5187:
        return (
          c + e + A(e, /(\w+).+(:[^]+)/, c + "box-$1$2" + i + "flex-$1$2") + e
        );
      case 5443:
        return c + e + i + "flex-item-" + A(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          c +
          e +
          i +
          "flex-line-pack" +
          A(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return c + e + i + A(e, "shrink", "negative") + e;
      case 5292:
        return c + e + i + A(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          c +
          "box-" +
          A(e, "-grow", "") +
          c +
          e +
          i +
          A(e, "grow", "positive") +
          e
        );
      case 4554:
        return c + A(e, /([^-])(transform)/g, "$1" + c + "$2") + e;
      case 6187:
        return (
          A(A(A(e, /(zoom-|grab)/, c + "$1"), /(image-set)/, c + "$1"), e, "") +
          e
        );
      case 5495:
      case 3959:
        return A(e, /(image-set\([^]*)/, c + "$1$`$1");
      case 4968:
        return (
          A(
            A(e, /(.+:)(flex-)?(.*)/, c + "box-pack:$3" + i + "flex-pack:$3"),
            /s.+-b[^;]+/,
            "justify"
          ) +
          c +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return A(e, /(.+)-inline(.+)/, c + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (6 < $n(e) - 1 - t)
          switch (N(e, t + 1)) {
            case 109:
              if (45 !== N(e, t + 4)) break;
            case 102:
              return (
                A(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    c +
                    "$2-$3$1" +
                    Fn +
                    (108 == N(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Un(e, "stretch")
                ? Mo(A(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (115 !== N(e, t + 1)) break;
      case 6444:
        switch (N(e, $n(e) - 3 - (~Un(e, "!important") && 10))) {
          case 107:
            return A(e, ":", ":" + c) + e;
          case 101:
            return (
              A(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  c +
                  (45 === N(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  c +
                  "$2$3$1" +
                  i +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (N(e, t + 11)) {
          case 114:
            return c + e + i + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return c + e + i + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return c + e + i + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return c + e + i + e + e;
    }
    var n, o;
    return e;
  }
  var Oo = [
      function (n, e, t, o) {
        if (-1 < n.length && !n.return)
          switch (n.type) {
            case Wn:
              n.return = Mo(n.value, n.length);
              break;
            case Xn:
              return xo([ao(n, { value: A(n.value, "@", "@" + c) })], o);
            case Hn:
              if (n.length)
                return (
                  (r = n.props),
                  (a = function (e) {
                    switch (
                      (t = /(::plac\w+|:read-\w+)/.exec((t = e))) &&
                      t[0]
                    ) {
                      case ":read-only":
                      case ":read-write":
                        return xo(
                          [
                            ao(n, {
                              props: [A(e, /:(read-\w+)/, ":" + Fn + "$1")],
                            }),
                          ],
                          o
                        );
                      case "::placeholder":
                        return xo(
                          [
                            ao(n, {
                              props: [A(e, /:(plac\w+)/, ":" + c + "input-$1")],
                            }),
                            ao(n, {
                              props: [A(e, /:(plac\w+)/, ":" + Fn + "$1")],
                            }),
                            ao(n, {
                              props: [A(e, /:(plac\w+)/, i + "input-$1")],
                            }),
                          ],
                          o
                        );
                    }
                    var t;
                    return "";
                  }),
                  r.map(a).join("")
                );
          }
        var r, a;
      },
    ],
    n = { exports: {} },
    a = {};
  var Vo,
    Fo,
    Po,
    Ho,
    Wo,
    _o,
    Xo,
    Zo,
    jo,
    zo,
    Do,
    Yo,
    Jo,
    Uo,
    Qo,
    $o,
    Ko,
    qo,
    er,
    tr,
    nr,
    or,
    rr,
    ar,
    ir,
    sr,
    cr,
    lr,
    ur,
    dr,
    gr,
    pr,
    hr,
    fr,
    mr,
    br,
    vr,
    o = {};
  function u(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case Vo:
          var n = e.type;
          switch (n) {
            case Zo:
            case jo:
            case Po:
            case Wo:
            case Ho:
            case Do:
              return n;
            default:
              var o = n && n.$$typeof;
              switch (o) {
                case Xo:
                case zo:
                case Uo:
                case Jo:
                case _o:
                  return o;
                default:
                  return t;
              }
          }
        case Fo:
          return t;
      }
    }
  }
  function yr(e) {
    return u(e) === jo;
  }
  function d(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case tr:
          switch ((e = e.type)) {
            case cr:
            case lr:
            case or:
            case ar:
            case rr:
            case dr:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case sr:
                case ur:
                case hr:
                case pr:
                case ir:
                  return e;
                default:
                  return t;
              }
          }
        case nr:
          return t;
      }
    }
  }
  function Ir(e) {
    return d(e) === lr;
  }
  "production" === process.env.NODE_ENV
    ? (n.exports =
        (Ur ||
          ((Ur = 1),
          (t = "function" == typeof Symbol && Symbol.for),
          (tr = t ? Symbol.for("react.element") : 60103),
          (nr = t ? Symbol.for("react.portal") : 60106),
          (or = t ? Symbol.for("react.fragment") : 60107),
          (rr = t ? Symbol.for("react.strict_mode") : 60108),
          (ar = t ? Symbol.for("react.profiler") : 60114),
          (ir = t ? Symbol.for("react.provider") : 60109),
          (sr = t ? Symbol.for("react.context") : 60110),
          (cr = t ? Symbol.for("react.async_mode") : 60111),
          (lr = t ? Symbol.for("react.concurrent_mode") : 60111),
          (ur = t ? Symbol.for("react.forward_ref") : 60112),
          (dr = t ? Symbol.for("react.suspense") : 60113),
          (gr = t ? Symbol.for("react.suspense_list") : 60120),
          (pr = t ? Symbol.for("react.memo") : 60115),
          (hr = t ? Symbol.for("react.lazy") : 60116),
          (fr = t ? Symbol.for("react.block") : 60121),
          (mr = t ? Symbol.for("react.fundamental") : 60117),
          (br = t ? Symbol.for("react.responder") : 60118),
          (vr = t ? Symbol.for("react.scope") : 60119),
          (o.AsyncMode = cr),
          (o.ConcurrentMode = lr),
          (o.ContextConsumer = sr),
          (o.ContextProvider = ir),
          (o.Element = tr),
          (o.ForwardRef = ur),
          (o.Fragment = or),
          (o.Lazy = hr),
          (o.Memo = pr),
          (o.Portal = nr),
          (o.Profiler = ar),
          (o.StrictMode = rr),
          (o.Suspense = dr),
          (o.isAsyncMode = function (e) {
            return Ir(e) || d(e) === cr;
          }),
          (o.isConcurrentMode = Ir),
          (o.isContextConsumer = function (e) {
            return d(e) === sr;
          }),
          (o.isContextProvider = function (e) {
            return d(e) === ir;
          }),
          (o.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === tr;
          }),
          (o.isForwardRef = function (e) {
            return d(e) === ur;
          }),
          (o.isFragment = function (e) {
            return d(e) === or;
          }),
          (o.isLazy = function (e) {
            return d(e) === hr;
          }),
          (o.isMemo = function (e) {
            return d(e) === pr;
          }),
          (o.isPortal = function (e) {
            return d(e) === nr;
          }),
          (o.isProfiler = function (e) {
            return d(e) === ar;
          }),
          (o.isStrictMode = function (e) {
            return d(e) === rr;
          }),
          (o.isSuspense = function (e) {
            return d(e) === dr;
          }),
          (o.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === or ||
              e === lr ||
              e === ar ||
              e === rr ||
              e === dr ||
              e === gr ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === hr ||
                  e.$$typeof === pr ||
                  e.$$typeof === ir ||
                  e.$$typeof === sr ||
                  e.$$typeof === ur ||
                  e.$$typeof === mr ||
                  e.$$typeof === br ||
                  e.$$typeof === vr ||
                  e.$$typeof === fr))
            );
          }),
          (o.typeOf = d)),
        o))
    : (n.exports =
        (ga ||
          ((ga = 1),
          "production" !== process.env.NODE_ENV &&
            ((e = "function" == typeof Symbol && Symbol.for),
            (Vo = e ? Symbol.for("react.element") : 60103),
            (Fo = e ? Symbol.for("react.portal") : 60106),
            (Po = e ? Symbol.for("react.fragment") : 60107),
            (Ho = e ? Symbol.for("react.strict_mode") : 60108),
            (Wo = e ? Symbol.for("react.profiler") : 60114),
            (_o = e ? Symbol.for("react.provider") : 60109),
            (Xo = e ? Symbol.for("react.context") : 60110),
            (Zo = e ? Symbol.for("react.async_mode") : 60111),
            (jo = e ? Symbol.for("react.concurrent_mode") : 60111),
            (zo = e ? Symbol.for("react.forward_ref") : 60112),
            (Do = e ? Symbol.for("react.suspense") : 60113),
            (Yo = e ? Symbol.for("react.suspense_list") : 60120),
            (Jo = e ? Symbol.for("react.memo") : 60115),
            (Uo = e ? Symbol.for("react.lazy") : 60116),
            (Qo = e ? Symbol.for("react.block") : 60121),
            ($o = e ? Symbol.for("react.fundamental") : 60117),
            (Ko = e ? Symbol.for("react.responder") : 60118),
            (qo = e ? Symbol.for("react.scope") : 60119),
            (e = jo),
            (Ur = Xo),
            (t = _o),
            (o = Vo),
            (ga = zo),
            (ua = Po),
            (da = Uo),
            (Ya = Jo),
            (ai = Fo),
            (ii = Wo),
            (Ii = Ho),
            (Ci = Do),
            (er = !1),
            (a.AsyncMode = Zo),
            (a.ConcurrentMode = e),
            (a.ContextConsumer = Ur),
            (a.ContextProvider = t),
            (a.Element = o),
            (a.ForwardRef = ga),
            (a.Fragment = ua),
            (a.Lazy = da),
            (a.Memo = Ya),
            (a.Portal = ai),
            (a.Profiler = ii),
            (a.StrictMode = Ii),
            (a.Suspense = Ci),
            (a.isAsyncMode = function (e) {
              return (
                er ||
                  ((er = !0),
                  console.warn(
                    "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                  )),
                yr(e) || u(e) === Zo
              );
            }),
            (a.isConcurrentMode = yr),
            (a.isContextConsumer = function (e) {
              return u(e) === Xo;
            }),
            (a.isContextProvider = function (e) {
              return u(e) === _o;
            }),
            (a.isElement = function (e) {
              return "object" == typeof e && null !== e && e.$$typeof === Vo;
            }),
            (a.isForwardRef = function (e) {
              return u(e) === zo;
            }),
            (a.isFragment = function (e) {
              return u(e) === Po;
            }),
            (a.isLazy = function (e) {
              return u(e) === Uo;
            }),
            (a.isMemo = function (e) {
              return u(e) === Jo;
            }),
            (a.isPortal = function (e) {
              return u(e) === Fo;
            }),
            (a.isProfiler = function (e) {
              return u(e) === Wo;
            }),
            (a.isStrictMode = function (e) {
              return u(e) === Ho;
            }),
            (a.isSuspense = function (e) {
              return u(e) === Do;
            }),
            (a.isValidElementType = function (e) {
              return (
                "string" == typeof e ||
                "function" == typeof e ||
                e === Po ||
                e === jo ||
                e === Wo ||
                e === Ho ||
                e === Do ||
                e === Yo ||
                ("object" == typeof e &&
                  null !== e &&
                  (e.$$typeof === Uo ||
                    e.$$typeof === Jo ||
                    e.$$typeof === _o ||
                    e.$$typeof === Xo ||
                    e.$$typeof === zo ||
                    e.$$typeof === $o ||
                    e.$$typeof === Ko ||
                    e.$$typeof === qo ||
                    e.$$typeof === Qo))
              );
            }),
            (a.typeOf = u))),
        a));
  var e = n.exports,
    Cr = (e.ForwardRef, e.Memo, !0);
  function xr(t, n, e) {
    var o = "";
    return (
      e.split(" ").forEach(function (e) {
        void 0 !== t[e] ? n.push(t[e] + ";") : (o += e + " ");
      }),
      o
    );
  }
  function Sr(e, t, n) {
    wr(e, t, n);
    var o = e.key + "-" + t.name;
    if (void 0 === e.inserted[t.name])
      for (
        var r = t;
        e.insert(t === r ? "." + o : "", r, e.sheet, !0),
          void 0 !== (r = r.next);

      );
  }
  var wr = function (e, t, n) {
    var o = e.key + "-" + t.name;
    (!1 !== n && !1 !== Cr) ||
      void 0 !== e.registered[o] ||
      (e.registered[o] = t.styles);
  };
  function Ar(e) {
    return 45 === e.charCodeAt(1);
  }
  function Er(e) {
    return null != e && "boolean" != typeof e;
  }
  var Nr,
    kr,
    Lr,
    Gr,
    Tr,
    Br,
    Rr,
    Mr,
    Or = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Vr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,
    Fr =
      "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
    Pr = /[A-Z]|^ms/g,
    Hr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Wr =
      ((Nr = function (e) {
        return Ar(e) ? e : e.replace(Pr, "-$&").toLowerCase();
      }),
      (kr = Object.create(null)),
      function (e) {
        return void 0 === kr[e] && (kr[e] = Nr(e)), kr[e];
      }),
    _r = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" == typeof t)
            return t.replace(Hr, function (e, t, n) {
              return (b = { name: t, styles: n, next: b }), t;
            });
      }
      return 1 === Or[e] || Ar(e) || "number" != typeof t || 0 === t
        ? t
        : t + "px";
    },
    Xr =
      ("production" !== process.env.NODE_ENV &&
        ((Lr =
          /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/),
        (Gr = ["normal", "none", "initial", "inherit", "unset"]),
        (Tr = _r),
        (Br = /^-ms-/),
        (Rr = /-(.)/g),
        (Mr = {}),
        (_r = function (e, t) {
          var n;
          if (
            "content" !== e ||
            ("string" == typeof t &&
              (-1 !== Gr.indexOf(t) ||
                Lr.test(t) ||
                (t.charAt(0) === t.charAt(t.length - 1) &&
                  ('"' === t.charAt(0) || "'" === t.charAt(0)))))
          )
            return (
              "" === (n = Tr(e, t)) ||
                Ar(e) ||
                -1 === e.indexOf("-") ||
                void 0 !== Mr[e] ||
                ((Mr[e] = !0),
                console.error(
                  "Using kebab-case for css properties in objects is not supported. Did you mean " +
                    e.replace(Br, "ms-").replace(Rr, function (e, t) {
                      return t.toUpperCase();
                    }) +
                    "?"
                )),
              n
            );
          throw new Error(
            "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
              t +
              "\"'`"
          );
        })),
      "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.");
  function Zr(e, t, n) {
    if (null == n) return "";
    if (void 0 !== n.__emotion_styles) {
      if (
        "production" !== process.env.NODE_ENV &&
        "NO_COMPONENT_SELECTOR" === n.toString()
      )
        throw new Error(Xr);
      return n;
    }
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        if (1 === n.anim)
          return (b = { name: n.name, styles: n.styles, next: b }), n.name;
        if (void 0 === n.styles) {
          var o = e,
            r = t,
            a = n,
            i = "";
          if (Array.isArray(a))
            for (var s = 0; s < a.length; s++) i += Zr(o, r, a[s]) + ";";
          else
            for (var c in a) {
              var l = a[c];
              if ("object" != typeof l)
                null != r && void 0 !== r[l]
                  ? (i += c + "{" + r[l] + "}")
                  : Er(l) && (i += Wr(c) + ":" + _r(c, l) + ";");
              else {
                if (
                  "NO_COMPONENT_SELECTOR" === c &&
                  "production" !== process.env.NODE_ENV
                )
                  throw new Error(Xr);
                if (
                  !Array.isArray(l) ||
                  "string" != typeof l[0] ||
                  (null != r && void 0 !== r[l[0]])
                ) {
                  var u = Zr(o, r, l);
                  switch (c) {
                    case "animation":
                    case "animationName":
                      i += Wr(c) + ":" + u + ";";
                      break;
                    default:
                      "production" !== process.env.NODE_ENV &&
                        "undefined" === c &&
                        console.error(Fr),
                        (i += c + "{" + u + "}");
                  }
                } else
                  for (var d = 0; d < l.length; d++)
                    Er(l[d]) && (i += Wr(c) + ":" + _r(c, l[d]) + ";");
              }
            }
          return i;
        }
        var g = n.next;
        if (void 0 !== g)
          for (; void 0 !== g; )
            (b = { name: g.name, styles: g.styles, next: b }), (g = g.next);
        var p = n.styles + ";";
        return (
          "production" !== process.env.NODE_ENV &&
            void 0 !== n.map &&
            (p += n.map),
          p
        );
      case "function":
        var h;
        if (void 0 !== e) return (p = b), (h = n(e)), (b = p), Zr(e, t, h);
        "production" !== process.env.NODE_ENV &&
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
          );
        break;
      case "string":
        var f;
        "production" !== process.env.NODE_ENV &&
          ((f = []),
          (p = n.replace(Hr, function (e, t, n) {
            var o = "animation" + f.length;
            return (
              f.push(
                "const " +
                  o +
                  " = keyframes`" +
                  n.replace(/^@keyframes animation-\w+/, "") +
                  "`"
              ),
              "${" + o + "}"
            );
          })),
          f.length) &&
          console.error(
            "`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" +
              [].concat(f, ["`" + p + "`"]).join(`
`) +
              `

You should wrap it with \`css\` like this:

` +
              "css`" +
              p +
              "`"
          );
    }
    var m;
    return null != t && void 0 !== (m = t[n]) ? m : n;
  }
  var jr,
    zr = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  "production" !== process.env.NODE_ENV &&
    (jr = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
  function Dr(o) {
    return G.forwardRef(function (e, t) {
      var n = G.useContext(qr);
      return o(e, n, t);
    });
  }
  function Yr(e) {
    var t = e.cache,
      n = e.serialized,
      o = e.isStringTag;
    return (
      wr(t, n, o),
      Qr(function () {
        return Sr(t, n, o);
      }),
      null
    );
  }
  var b,
    Jr = function (e, t, n) {
      if (
        1 === e.length &&
        "object" == typeof e[0] &&
        null !== e[0] &&
        void 0 !== e[0].styles
      )
        return e[0];
      var o = !0,
        r = "",
        a = ((b = void 0), e[0]);
      null == a || void 0 === a.raw
        ? ((o = !1), (r += Zr(n, t, a)))
        : ("production" !== process.env.NODE_ENV &&
            void 0 === a[0] &&
            console.error(Vr),
          (r += a[0]));
      for (var i, s = 1; s < e.length; s++)
        (r += Zr(n, t, e[s])),
          o &&
            ("production" !== process.env.NODE_ENV &&
              void 0 === a[s] &&
              console.error(Vr),
            (r += a[s]));
      "production" !== process.env.NODE_ENV &&
        (r = r.replace(jr, function (e) {
          return (i = e), "";
        })),
        (zr.lastIndex = 0);
      for (var c, l = ""; null !== (c = zr.exec(r)); ) l += "-" + c[1];
      var u =
        (function (e) {
          for (var t, n = 0, o = 0, r = e.length; 4 <= r; ++o, r -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(o)) |
                    ((255 & e.charCodeAt(++o)) << 8) |
                    ((255 & e.charCodeAt(++o)) << 16) |
                    ((255 & e.charCodeAt(++o)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (r) {
            case 3:
              n ^= (255 & e.charCodeAt(o + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(o + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(o))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        })(r) + l;
      return "production" !== process.env.NODE_ENV
        ? {
            name: u,
            styles: r,
            map: i,
            next: b,
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          }
        : { name: u, styles: r, next: b };
    },
    Ur = we.useInsertionEffect || !1,
    Qr =
      Ur ||
      function (e) {
        return e();
      },
    $r = Ur || we.useLayoutEffect,
    Kr = {}.hasOwnProperty,
    qr = we.createContext(
      typeof HTMLElement < "u"
        ? (function (e) {
            var t = e.key;
            if ("production" !== process.env.NODE_ENV && !t)
              throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
            "css" === t &&
              ((n = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
              )),
              Array.prototype.forEach.call(n, function (e) {
                -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                  (document.head.appendChild(e), e.setAttribute("data-s", ""));
              }));
            var n = e.stylisPlugins || Oo;
            if ("production" !== process.env.NODE_ENV && /[^a-z-]/.test(t))
              throw new Error(
                'Emotion key must only contain lower case alphabetical characters and - but "' +
                  t +
                  '" was passed'
              );
            var o = {},
              r = [],
              a = e.container || document.head;
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  o[t[n]] = !0;
                r.push(e);
              }
            );
            var s,
              i = [Ao, Eo];
            "production" !== process.env.NODE_ENV &&
              i.push(
                ((s = {
                  get compat() {
                    return h.compat;
                  },
                }),
                function (e, t, n) {
                  if ("rule" === e.type && !s.compat) {
                    var o = e.value.match(/(:first|:nth|:nth-last)-child/g);
                    if (o) {
                      for (
                        var r = !!e.parent ? e.parent.children : n,
                          a = r.length - 1;
                        0 <= a;
                        a--
                      ) {
                        var i = r[a];
                        if (i.line < e.line) break;
                        if (i.column < e.column) {
                          if (Go(i)) return;
                          break;
                        }
                      }
                      o.forEach(function (e) {
                        console.error(
                          'The pseudo class "' +
                            e +
                            '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                            e.split("-child")[0] +
                            '-of-type".'
                        );
                      });
                    }
                  }
                }),
                No
              );
            var c,
              l,
              u,
              d,
              g = [
                So,
                "production" !== process.env.NODE_ENV
                  ? function (e) {
                      e.root ||
                        (e.return
                          ? c.insert(e.return)
                          : e.value &&
                            e.type !== Pn &&
                            c.insert(e.value + "{}"));
                    }
                  : ((d = function (e) {
                      c.insert(e);
                    }),
                    function (e) {
                      e.root || ((e = e.return) && d(e));
                    }),
              ],
              p =
                ((l = i.concat(n, g)),
                (u = Kn(l)),
                function (e, t, n, o) {
                  for (var r = "", a = 0; a < u; a++)
                    r += l[a](e, t, n, o) || "";
                  return r;
                }),
              i = function (e, t, n, o) {
                (c = n),
                  "production" !== process.env.NODE_ENV &&
                    void 0 !== t.map &&
                    (c = {
                      insert: function (e) {
                        n.insert(e + t.map);
                      },
                    }),
                  xo(vo(e ? e + "{" + t.styles + "}" : t.styles), p),
                  o && (h.inserted[t.name] = !0);
              },
              h = {
                key: t,
                sheet: new Vn({
                  key: t,
                  container: a,
                  nonce: e.nonce,
                  speedy: e.speedy,
                  prepend: e.prepend,
                  insertionPoint: e.insertionPoint,
                }),
                nonce: e.nonce,
                inserted: o,
                registered: {},
                insert: i,
              };
            return h.sheet.hydrate(r), h;
          })({ key: "css" })
        : null
    ),
    ea =
      ("production" !== process.env.NODE_ENV &&
        (qr.displayName = "EmotionCacheContext"),
      qr.Provider,
      we.createContext({})),
    ta =
      ("production" !== process.env.NODE_ENV &&
        (ea.displayName = "EmotionThemeContext"),
      new Set([
        "renderWithHooks",
        "processChild",
        "finishClassComponent",
        "renderToString",
      ])),
    na = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    oa = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__",
    ra = function (e, t) {
      if (
        "production" !== process.env.NODE_ENV &&
        "string" == typeof t.css &&
        -1 !== t.css.indexOf(":")
      )
        throw new Error(
          "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
            t.css +
            "`"
        );
      var n,
        o = {};
      for (n in t) Kr.call(t, n) && (o[n] = t[n]);
      return (
        (o[na] = e),
        "production" === process.env.NODE_ENV ||
          !t.css ||
          ("object" == typeof t.css &&
            "string" == typeof t.css.name &&
            -1 !== t.css.name.indexOf("-")) ||
          ((e = (function (e) {
            if (e)
              for (
                var t = e.split(`
`),
                  n = 0;
                n < t.length;
                n++
              ) {
                var o = (function (e) {
                  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);
                  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(e)))
                    return (e = (e = t[1]).split("."))[e.length - 1];
                })(t[n]);
                if (o) {
                  if (ta.has(o)) break;
                  if (/^[A-Z]/.test(o)) return o.replace(/\$/g, "-");
                }
              }
          })(new Error().stack)) &&
            (o[oa] = e)),
        o
      );
    },
    t = Dr(function (e, t, n) {
      var o,
        r,
        a = e.css,
        i =
          ("string" == typeof a &&
            void 0 !== t.registered[a] &&
            (a = t.registered[a]),
          e[na]),
        a = [a],
        s = "",
        a =
          ("string" == typeof e.className
            ? (s = xr(t.registered, a, e.className))
            : null != e.className && (s = e.className + " "),
          Jr(a, void 0, we.useContext(ea))),
        c =
          ("production" !== process.env.NODE_ENV &&
            -1 === a.name.indexOf("-") &&
            (o = e[oa]) &&
            (a = Jr([a, "label:" + o + ";"])),
          (s += t.key + "-" + a.name),
          {});
      for (r in e)
        !Kr.call(e, r) ||
          "css" === r ||
          r === na ||
          ("production" !== process.env.NODE_ENV && r === oa) ||
          (c[r] = e[r]);
      return (
        (c.ref = n),
        (c.className = s),
        we.createElement(
          we.Fragment,
          null,
          we.createElement(Yr, {
            cache: t,
            serialized: a,
            isStringTag: "string" == typeof i,
          }),
          we.createElement(i, c)
        )
      );
    }),
    aa =
      ("production" !== process.env.NODE_ENV &&
        (t.displayName = "EmotionCssPropInternal"),
      t),
    B = function (e, t) {
      var n = arguments;
      if (null == t || !Kr.call(t, "css"))
        return we.createElement.apply(void 0, n);
      var o = n.length,
        r = new Array(o);
      (r[0] = aa), (r[1] = ra(e, t));
      for (var a = 2; a < o; a++) r[a] = n[a];
      return we.createElement.apply(null, r);
    },
    ia = !1,
    o = Dr(function (e, r) {
      "production" === process.env.NODE_ENV ||
        ia ||
        (!e.className && !e.css) ||
        (console.error(
          "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"
        ),
        (ia = !0));
      var e = e.styles,
        a = Jr([e], void 0, we.useContext(ea)),
        i = we.useRef();
      return (
        $r(
          function () {
            var e = r.key + "-global",
              t = new r.sheet.constructor({
                key: e,
                nonce: r.sheet.nonce,
                container: r.sheet.container,
                speedy: r.sheet.isSpeedy,
              }),
              n = !1,
              o = document.querySelector(
                'style[data-emotion="' + e + " " + a.name + '"]'
              );
            return (
              r.sheet.tags.length && (t.before = r.sheet.tags[0]),
              null !== o &&
                ((n = !0), o.setAttribute("data-emotion", e), t.hydrate([o])),
              (i.current = [t, n]),
              function () {
                t.flush();
              }
            );
          },
          [r]
        ),
        $r(
          function () {
            var e = i.current,
              t = e[0];
            e[1]
              ? (e[1] = !1)
              : (void 0 !== a.next && Sr(r, a.next, !0),
                t.tags.length &&
                  ((e = t.tags[t.tags.length - 1].nextElementSibling),
                  (t.before = e),
                  t.flush()),
                r.insert("", a, t, !1));
          },
          [r, a.name]
        ),
        null
      );
    });
  function sa() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Jr(t);
  }
  "production" !== process.env.NODE_ENV && (o.displayName = "EmotionGlobal");
  function ca(e) {
    for (var t = e.length, n = 0, o = ""; n < t; n++) {
      var r = e[n];
      if (null != r) {
        var a = void 0;
        switch (typeof r) {
          case "boolean":
            break;
          case "object":
            if (Array.isArray(r)) a = ca(r);
            else
              for (var i in ("production" !== process.env.NODE_ENV &&
                void 0 !== r.styles &&
                void 0 !== r.name &&
                console.error(
                  "You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."
                ),
              (a = ""),
              r))
                r[i] && i && (a && (a += " "), (a += i));
            break;
          default:
            a = r;
        }
        a && (o && (o += " "), (o += a));
      }
    }
    return o;
  }
  function la(e) {
    var t = e.cache,
      n = e.serializedArr;
    return (
      Qr(function () {
        for (var e = 0; e < n.length; e++) Sr(t, n[e], !1);
      }),
      null
    );
  }
  var ua,
    da,
    ga = Dr(function (e, s) {
      function c() {
        if (l && "production" !== process.env.NODE_ENV)
          throw new Error("css can only be used during render");
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = Jr(t, s.registered);
        return r.push(o), wr(s, o, !1), s.key + "-" + o.name;
      }
      var l = !1,
        r = [],
        t = {
          css: c,
          cx: function () {
            if (l && "production" !== process.env.NODE_ENV)
              throw new Error("cx can only be used during render");
            for (
              var e, t, n, o, r = arguments.length, a = new Array(r), i = 0;
              i < r;
              i++
            )
              a[i] = arguments[i];
            return (
              (e = s.registered),
              (t = c),
              (n = ca(a)),
              (e = xr(e, (o = []), n)),
              o.length < 2 ? n : e + t(o)
            );
          },
          theme: we.useContext(ea),
        },
        e = e.children(t),
        l = !0;
      return we.createElement(
        we.Fragment,
        null,
        we.createElement(la, { cache: s, serializedArr: r }),
        e
      );
    });
  "production" !== process.env.NODE_ENV &&
    (ga.displayName = "EmotionClassNames"),
    "production" === process.env.NODE_ENV ||
      typeof jest < "u" ||
      typeof vi < "u" ||
      ((ua = typeof globalThis < "u" ? globalThis : window)[
        (da = "__EMOTION_REACT_" + "11.11.3".split(".")[0] + "__")
      ] &&
        console.warn(
          "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
        ),
      (ua[da] = !0));
  const pa = Math.min,
    ha = Math.max,
    fa = Math.round,
    ma = Math.floor,
    ba = (e) => ({ x: e, y: e });
  function va(e) {
    return Ia(e) ? (e.nodeName || "").toLowerCase() : "#document";
  }
  function v(e) {
    return (
      (null == e || null == (e = e.ownerDocument) ? void 0 : e.defaultView) ||
      window
    );
  }
  function ya(e) {
    return null ==
      (e = (Ia(e) ? e.ownerDocument : e.document) || window.document)
      ? void 0
      : e.documentElement;
  }
  function Ia(e) {
    return e instanceof Node || e instanceof v(e).Node;
  }
  function Ca(e) {
    return e instanceof Element || e instanceof v(e).Element;
  }
  function xa(e) {
    return e instanceof HTMLElement || e instanceof v(e).HTMLElement;
  }
  function Sa(e) {
    return (
      !("u" < typeof ShadowRoot) &&
      (e instanceof ShadowRoot || e instanceof v(e).ShadowRoot)
    );
  }
  function wa(e) {
    var { overflow: e, overflowX: t, overflowY: n, display: o } = Aa(e);
    return (
      /auto|scroll|overlay|hidden|clip/.test(e + n + t) &&
      !["inline", "contents"].includes(o)
    );
  }
  function Aa(e) {
    return v(e).getComputedStyle(e);
  }
  function Ea(e) {
    var t =
      "html" !== va((t = e)) &&
      ((t = t.assignedSlot || t.parentNode || (Sa(t) && t.host) || ya(t)),
      Sa(t))
        ? t.host
        : t;
    return ["html", "body", "#document"].includes(va(t))
      ? (e.ownerDocument || e).body
      : xa(t) && wa(t)
      ? t
      : Ea(t);
  }
  function Na(e, t, n) {
    void 0 === t && (t = []), void 0 === n && (n = !0);
    var o = Ea(e),
      e = o === (null == (e = e.ownerDocument) ? void 0 : e.body),
      r = v(o);
    return e
      ? t.concat(
          r,
          r.visualViewport || [],
          wa(o) ? o : [],
          r.frameElement && n ? Na(r.frameElement) : []
        )
      : t.concat(o, Na(o, [], n));
  }
  function ka(e) {
    return Ca(e) ? e : e.contextElement;
  }
  function La(e) {
    e = ka(e);
    if (!xa(e)) return ba(1);
    var t = e.getBoundingClientRect(),
      {
        width: e,
        height: n,
        $: o,
      } = (function (e) {
        var t = Aa(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        var r = (t = xa(e)) ? e.offsetWidth : n,
          t = t ? e.offsetHeight : o;
        return (
          (e = fa(n) !== r || fa(o) !== t) && ((n = r), (o = t)),
          { width: n, height: o, $: e }
        );
      })(e);
    let r = (o ? fa(t.width) : t.width) / e,
      a = (o ? fa(t.height) : t.height) / n;
    return (
      (r && Number.isFinite(r)) || (r = 1),
      (a && Number.isFinite(a)) || (a = 1),
      { x: r, y: a }
    );
  }
  const Ga = ba(0);
  function Ta(e) {
    e = v(e);
    return "u" < typeof CSS ||
      !CSS.supports ||
      !CSS.supports("-webkit-backdrop-filter", "none") ||
      !e.visualViewport
      ? Ga
      : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
  }
  function Ba(e, t, n, o) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var r = e.getBoundingClientRect(),
      a = ka(e);
    let i = ba(1);
    t && (o ? Ca(o) && (i = La(o)) : (i = La(e)));
    (t = a), void 0 === (e = n) && (e = !1);
    n = !(n = o) || (e && n !== v(t)) || !e ? ba(0) : Ta(a);
    let s = (r.left + n.x) / i.x,
      c = (r.top + n.y) / i.y,
      l = r.width / i.x,
      u = r.height / i.y;
    if (a) {
      var d = v(a),
        g = o && Ca(o) ? v(o) : o;
      let e = d.frameElement;
      for (; e && o && g !== d; ) {
        var p = La(e),
          h = e.getBoundingClientRect(),
          f = Aa(e),
          m = h.left + (e.clientLeft + parseFloat(f.paddingLeft)) * p.x,
          h = h.top + (e.clientTop + parseFloat(f.paddingTop)) * p.y;
        (s *= p.x),
          (c *= p.y),
          (l *= p.x),
          (u *= p.y),
          (s += m),
          (c += h),
          (e = v(e).frameElement);
      }
    }
    return {
      ...(t = { width: l, height: u, x: s, y: c }),
      top: t.y,
      left: t.x,
      right: t.x + t.width,
      bottom: t.y + t.height,
    };
  }
  function Ra(l, t) {
    let u = null,
      d;
    const g = ya(l);
    function p() {
      clearTimeout(d), u && u.disconnect(), (u = null);
    }
    return (
      (function n(e, o) {
        void 0 === e && (e = !1), void 0 === o && (o = 1), p();
        var {
          left: r,
          top: a,
          width: i,
          height: s,
        } = l.getBoundingClientRect();
        if ((e || t(), i && s)) {
          e = {
            rootMargin:
              -ma(a) +
              "px " +
              -ma(g.clientWidth - (r + i)) +
              "px " +
              -ma(g.clientHeight - (a + s)) +
              "px " +
              -ma(r) +
              "px",
            threshold: ha(0, pa(1, o)) || 1,
          };
          let t = !0;
          try {
            u = new IntersectionObserver(c, { ...e, root: g.ownerDocument });
          } catch {
            u = new IntersectionObserver(c, e);
          }
          function c(e) {
            if ((e = e[0].intersectionRatio) !== o) {
              if (!t) return n();
              e
                ? n(!1, e)
                : (d = setTimeout(() => {
                    n(!1, 1e-7);
                  }, 100));
            }
            t = !1;
          }
          u.observe(l);
        }
      })(!0),
      p
    );
  }
  function Ma(n, t, o, e) {
    void 0 === e && (e = {});
    const {
        ancestorScroll: r = !0,
        ancestorResize: a = !0,
        elementResize: i = "function" == typeof ResizeObserver,
        layoutShift: s = "function" == typeof IntersectionObserver,
        animationFrame: c = !1,
      } = e,
      l = ka(n),
      u = r || a ? [...(l ? Na(l) : []), ...Na(t)] : [],
      d =
        (u.forEach((e) => {
          r && e.addEventListener("scroll", o, { passive: !0 }),
            a && e.addEventListener("resize", o);
        }),
        l && s ? Ra(l, o) : null);
    let g = -1,
      p = null;
    i &&
      ((p = new ResizeObserver((e) => {
        var [e] = e;
        e &&
          e.target === l &&
          p &&
          (p.unobserve(t),
          cancelAnimationFrame(g),
          (g = requestAnimationFrame(() => {
            p && p.observe(t);
          }))),
          o();
      })),
      l && !c && p.observe(l),
      p.observe(t));
    let h,
      f = c ? Ba(n) : null;
    return (
      c &&
        (function e() {
          const t = Ba(n);
          !f ||
            (t.x === f.x &&
              t.y === f.y &&
              t.width === f.width &&
              t.height === f.height) ||
            o(),
            (f = t),
            (h = requestAnimationFrame(e));
        })(),
      o(),
      () => {
        u.forEach((e) => {
          r && e.removeEventListener("scroll", o),
            a && e.removeEventListener("resize", o);
        }),
          d && d(),
          p && p.disconnect(),
          (p = null),
          c && cancelAnimationFrame(h);
      }
    );
  }
  function Oa() {}
  var Va = G.useLayoutEffect,
    Fa = [
      "className",
      "clearValue",
      "cx",
      "getStyles",
      "getClassNames",
      "getValue",
      "hasValue",
      "isMulti",
      "isRtl",
      "options",
      "selectOption",
      "selectProps",
      "setValue",
      "theme",
    ];
  function Pa(e) {
    return Array.isArray(e)
      ? e.filter(Boolean)
      : "object" === Sn(e) && null !== e
      ? [e]
      : [];
  }
  function Ha(e) {
    return (
      e.className,
      e.clearValue,
      e.cx,
      e.getStyles,
      e.getClassNames,
      e.getValue,
      e.hasValue,
      e.isMulti,
      e.isRtl,
      e.options,
      e.selectOption,
      e.selectProps,
      e.setValue,
      e.theme,
      Ee({}, E(e, Fa))
    );
  }
  function y(e, t, n) {
    var o = e.cx,
      r = e.getStyles,
      a = e.getClassNames,
      i = e.className;
    return { css: r(t, e), className: o(n ?? {}, a(t, e), i) };
  }
  function Wa(e) {
    return -1 < [document.documentElement, document.body, window].indexOf(e);
  }
  function _a(e) {
    return Wa(e) ? window.pageYOffset : e.scrollTop;
  }
  function Xa(e, t) {
    Wa(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
  }
  function Za(n, e, t, o) {
    var r = 2 < arguments.length && void 0 !== t ? t : 200,
      a = 3 < arguments.length && void 0 !== o ? o : Oa,
      i = _a(n),
      s = e - i,
      c = 0;
    !(function e() {
      var t = s * ((t = (t = c += 10) / r - 1) * t * t + 1) + i;
      Xa(n, t), c < r ? window.requestAnimationFrame(e) : a(n);
    })();
  }
  function ja(e, t) {
    var n = e.getBoundingClientRect(),
      o = t.getBoundingClientRect(),
      r = t.offsetHeight / 3;
    o.bottom + r > n.bottom
      ? Xa(
          e,
          Math.min(
            t.offsetTop + t.clientHeight - e.offsetHeight + r,
            e.scrollHeight
          )
        )
      : o.top - r < n.top && Xa(e, Math.max(t.offsetTop - r, 0));
  }
  function za() {
    try {
      return document.createEvent("TouchEvent"), !0;
    } catch {
      return !1;
    }
  }
  var Da = !1,
    Ya = typeof window < "u" ? window : {},
    Ja =
      (Ya.addEventListener &&
        Ya.removeEventListener &&
        (Ya.addEventListener("p", Oa, {
          get passive() {
            return (Da = !0);
          },
        }),
        Ya.removeEventListener("p", Oa, !1)),
      Da);
  function Ua(e) {
    return null != e;
  }
  function Qa(e, t, n) {
    return e ? t : n;
  }
  var $a = ["children", "innerProps"],
    Ka = ["children", "innerProps"];
  function qa(e) {
    var t = e.maxHeight,
      n = e.menuEl,
      o = e.minHeight,
      r = e.placement,
      a = e.shouldScroll,
      i = e.isFixedPosition,
      s = e.controlHeight,
      c = (function (e) {
        var t = getComputedStyle(e),
          n = "absolute" === t.position,
          o = /(auto|scroll)/;
        if ("fixed" !== t.position)
          for (var r = e; (r = r.parentElement); )
            if (
              ((t = getComputedStyle(r)),
              (!n || "static" !== t.position) &&
                o.test(t.overflow + t.overflowY + t.overflowX))
            )
              return r;
        return document.documentElement;
      })(n),
      e = { placement: "bottom", maxHeight: t };
    if (n && n.offsetParent) {
      var l,
        u,
        d = c.getBoundingClientRect().height,
        g = n.getBoundingClientRect(),
        p = g.bottom,
        h = g.height,
        g = g.top,
        f = n.offsetParent.getBoundingClientRect().top,
        m = i || Wa((m = c)) ? window.innerHeight : m.clientHeight,
        b = _a(c),
        v = parseInt(getComputedStyle(n).marginBottom, 10),
        y = parseInt(getComputedStyle(n).marginTop, 10),
        I = f - y,
        C = m - g,
        x = I + b,
        S = d - b - g,
        w = p - m + b + v,
        A = b + g - y;
      switch (r) {
        case "auto":
        case "bottom":
          if (h <= C) return { placement: "bottom", maxHeight: t };
          if (h <= S && !i)
            return a && Za(c, w, 160), { placement: "bottom", maxHeight: t };
          if ((!i && o <= S) || (i && o <= C))
            return (
              a && Za(c, w, 160),
              { placement: "bottom", maxHeight: i ? C - v : S - v }
            );
          if ("auto" === r || i)
            return (
              (l = t),
              {
                placement: "top",
                maxHeight: (l =
                  o <= (u = i ? I : x) ? Math.min(u - v - s, t) : l),
              }
            );
          if ("bottom" === r)
            return a && Xa(c, w), { placement: "bottom", maxHeight: t };
          break;
        case "top":
          return h <= I
            ? { placement: "top", maxHeight: t }
            : h <= x && !i
            ? (a && Za(c, A, 160), { placement: "top", maxHeight: t })
            : (!i && o <= x) || (i && o <= I)
            ? ((u = (!i && o <= x) || (i && o <= I) ? (i ? I - y : x - y) : t),
              a && Za(c, A, 160),
              { placement: "top", maxHeight: u })
            : { placement: "bottom", maxHeight: t };
        default:
          throw new Error('Invalid placement provided "'.concat(r, '".'));
      }
    }
    return e;
  }
  function ei(e) {
    return "auto" === e ? "bottom" : e;
  }
  function ti(e) {
    var t = e.children,
      n = e.minMenuHeight,
      o = e.maxMenuHeight,
      r = e.menuPlacement,
      a = e.menuPosition,
      i = e.menuShouldScrollIntoView,
      s = e.theme,
      c = (G.useContext(ri) || {}).setPortalPlacement,
      l = G.useRef(null),
      u = Ne(G.useState(o), 2),
      d = u[0],
      g = u[1],
      p = (u = Ne(G.useState(null), 2))[0],
      h = u[1],
      f = s.spacing.controlHeight;
    return (
      Va(
        function () {
          var e,
            t = l.current;
          t &&
            ((e = "fixed" === a),
            (t = qa({
              maxHeight: o,
              menuEl: t,
              minHeight: n,
              placement: r,
              shouldScroll: i && !e,
              isFixedPosition: e,
              controlHeight: f,
            })),
            g(t.maxHeight),
            h(t.placement),
            null != c) &&
            c(t.placement);
        },
        [o, r, a, i, n, c, f]
      ),
      t({
        ref: l,
        placerProps: Ee(Ee({}, e), {}, { placement: p || ei(r), maxHeight: d }),
      })
    );
  }
  function ni(e) {
    var t = e.children,
      n = e.innerRef,
      o = e.innerProps;
    return B("div", T({}, y(e, "menu", { menu: !0 }), { ref: n }, o), t);
  }
  function oi(e, t) {
    var n = (e = e.theme).spacing.baseUnit,
      e = e.colors;
    return Ee(
      { textAlign: "center" },
      t
        ? {}
        : {
            color: e.neutral40,
            padding: "".concat(2 * n, "px ").concat(3 * n, "px"),
          }
    );
  }
  var ri = G.createContext(null),
    ai = oi,
    ii = oi,
    si = ["size"],
    ci = ["innerProps", "isRtl", "size"];
  function li(e) {
    return B(
      yi,
      T({ size: 20 }, e),
      B("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  }
  function ui(e) {
    return B(
      yi,
      T({ size: 20 }, e),
      B("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  }
  function di(e, t) {
    var n = e.isFocused,
      o = (e = e.theme).spacing.baseUnit,
      e = e.colors;
    return Ee(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      t
        ? {}
        : {
            color: n ? e.neutral60 : e.neutral20,
            padding: 2 * o,
            ":hover": { color: n ? e.neutral80 : e.neutral40 },
          }
    );
  }
  function gi(e) {
    var t = e.delay,
      e = e.offset;
    return B("span", {
      css: sa(
        {
          animation: ""
            .concat(xi, " 1s ease-in-out ")
            .concat(t, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: e ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "production" === process.env.NODE_ENV ? "" : ";label:LoadingDot;",
        "production" === process.env.NODE_ENV
          ? ""
          : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */"
      ),
    });
  }
  function pi(e) {
    var t = e.children,
      n = e.isDisabled,
      o = e.isFocused,
      r = e.innerRef,
      a = e.innerProps,
      i = e.menuIsOpen;
    return B(
      "div",
      T(
        { ref: r },
        y(e, "control", {
          control: !0,
          "control--is-disabled": n,
          "control--is-focused": o,
          "control--menu-is-open": i,
        }),
        a,
        { "aria-disabled": n || void 0 }
      ),
      t
    );
  }
  function hi(e) {
    var t = e.children,
      n = e.cx,
      o = e.getStyles,
      r = e.getClassNames,
      a = e.Heading,
      i = e.headingProps,
      s = e.innerProps,
      c = e.label,
      l = e.theme,
      u = e.selectProps;
    return B(
      "div",
      T({}, y(e, "group", { group: !0 }), s),
      B(
        a,
        T({}, i, {
          selectProps: u,
          theme: l,
          getStyles: o,
          getClassNames: r,
          cx: n,
        }),
        c
      ),
      B("div", null, t)
    );
  }
  function fi(e) {
    var t = e.children,
      e = e.innerProps;
    return B("div", e, t);
  }
  var mi,
    bi =
      "production" === process.env.NODE_ENV
        ? {
            name: "8mmkcg",
            styles:
              "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
          }
        : {
            name: "tj5bde-Svg",
            styles:
              "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
            map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
            toString: function () {
              return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
            },
          },
    yi = function (e) {
      var t = e.size,
        e = E(e, si);
      return B(
        "svg",
        T(
          {
            height: t,
            width: t,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: bi,
          },
          e
        )
      );
    },
    Ii = di,
    Ci = di,
    xi = (function () {
      var e = sa.apply(void 0, arguments),
        t = "animation-" + e.name;
      return {
        name: t,
        styles: "@keyframes " + t + "{" + e.styles + "}",
        anim: 1,
        toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        },
      };
    })(
      ((a = [
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]),
      (mi = mi || a.slice(0)),
      Object.freeze(
        Object.defineProperties(a, { raw: { value: Object.freeze(mi) } })
      ))
    ),
    Si = ["data"],
    wi = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
    Ai = {
      gridArea: "1 / 2",
      font: "inherit",
      minWidth: "2px",
      border: 0,
      margin: 0,
      outline: 0,
      padding: 0,
    },
    Ei = {
      flex: "1 1 auto",
      display: "inline-grid",
      gridArea: "1 / 1 / 2 / 3",
      gridTemplateColumns: "0 min-content",
      "&:after": Ee(
        {
          content: 'attr(data-value) " "',
          visibility: "hidden",
          whiteSpace: "pre",
        },
        Ai
      ),
    };
  var Ni = {
      ClearIndicator: function (e) {
        var t = e.children,
          n = e.innerProps;
        return B(
          "div",
          T(
            {},
            y(e, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
            n
          ),
          t || B(li, null)
        );
      },
      Control: pi,
      DropdownIndicator: function (e) {
        var t = e.children,
          n = e.innerProps;
        return B(
          "div",
          T(
            {},
            y(e, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0,
            }),
            n
          ),
          t || B(ui, null)
        );
      },
      DownChevron: ui,
      CrossIcon: li,
      Group: hi,
      GroupHeading: function (e) {
        var t = Ha(e),
          t = (t.data, E(t, Si));
        return B(
          "div",
          T({}, y(e, "groupHeading", { "group-heading": !0 }), t)
        );
      },
      IndicatorsContainer: function (e) {
        var t = e.children,
          n = e.innerProps;
        return B(
          "div",
          T({}, y(e, "indicatorsContainer", { indicators: !0 }), n),
          t
        );
      },
      IndicatorSeparator: function (e) {
        var t = e.innerProps;
        return B(
          "span",
          T({}, t, y(e, "indicatorSeparator", { "indicator-separator": !0 }))
        );
      },
      Input: function (e) {
        var t = e.cx,
          n = e.value,
          o = Ha(e),
          r = o.innerRef,
          a = o.isDisabled,
          i = o.isHidden,
          s = o.inputClassName,
          o = E(o, wi);
        return B(
          "div",
          T({}, y(e, "input", { "input-container": !0 }), {
            "data-value": n || "",
          }),
          B(
            "input",
            T(
              {
                className: t({ input: !0 }, s),
                ref: r,
                style: Ee(
                  {
                    label: "input",
                    color: "inherit",
                    background: 0,
                    opacity: i ? 0 : 1,
                    width: "100%",
                  },
                  Ai
                ),
                disabled: a,
              },
              o
            )
          )
        );
      },
      LoadingIndicator: function (e) {
        var t = e.innerProps,
          n = e.isRtl,
          o = e.size,
          o = void 0 === o ? 4 : o,
          e = E(e, ci);
        return B(
          "div",
          T(
            {},
            y(
              Ee(Ee({}, e), {}, { innerProps: t, isRtl: n, size: o }),
              "loadingIndicator",
              { indicator: !0, "loading-indicator": !0 }
            ),
            t
          ),
          B(gi, { delay: 0, offset: n }),
          B(gi, { delay: 160, offset: !0 }),
          B(gi, { delay: 320, offset: !n })
        );
      },
      Menu: ni,
      MenuList: function (e) {
        var t = e.children,
          n = e.innerProps,
          o = e.innerRef,
          r = e.isMulti;
        return B(
          "div",
          T(
            {},
            y(e, "menuList", { "menu-list": !0, "menu-list--is-multi": r }),
            { ref: o },
            n
          ),
          t
        );
      },
      MenuPortal: function (e) {
        var t = e.appendTo,
          n = e.children,
          o = e.controlElement,
          r = e.innerProps,
          a = e.menuPlacement,
          i = e.menuPosition,
          s = G.useRef(null),
          c = G.useRef(null),
          a = Ne(G.useState(ei(a)), 2),
          l = a[0],
          u = a[1],
          a = G.useMemo(function () {
            return { setPortalPlacement: u };
          }, []),
          d = Ne(G.useState(null), 2),
          g = d[0],
          p = d[1],
          h = G.useCallback(
            function () {
              var e, t;
              o &&
                ((t = {
                  bottom: (t = (t = o).getBoundingClientRect()).bottom,
                  height: t.height,
                  left: t.left,
                  right: t.right,
                  top: t.top,
                  width: t.width,
                }),
                (e = "fixed" === i ? 0 : window.pageYOffset),
                ((e = t[l] + e) === (null == g ? void 0 : g.offset) &&
                  t.left === (null == g ? void 0 : g.rect.left) &&
                  t.width === (null == g ? void 0 : g.rect.width)) ||
                  p({ offset: e, rect: t }));
            },
            [
              o,
              i,
              l,
              null == g ? void 0 : g.offset,
              null == g ? void 0 : g.rect.left,
              null == g ? void 0 : g.rect.width,
            ]
          ),
          f =
            (Va(
              function () {
                h();
              },
              [h]
            ),
            G.useCallback(
              function () {
                "function" == typeof c.current &&
                  (c.current(), (c.current = null)),
                  o &&
                    s.current &&
                    (c.current = Ma(o, s.current, h, {
                      elementResize: "ResizeObserver" in window,
                    }));
              },
              [o, h]
            )),
          d =
            (Va(
              function () {
                f();
              },
              [f]
            ),
            G.useCallback(
              function (e) {
                (s.current = e), f();
              },
              [f]
            ));
        return (!t && "fixed" !== i) || !g
          ? null
          : ((d = B(
              "div",
              T(
                { ref: d },
                y(
                  Ee(
                    Ee({}, e),
                    {},
                    { offset: g.offset, position: i, rect: g.rect }
                  ),
                  "menuPortal",
                  { "menu-portal": !0 }
                ),
                r
              ),
              n
            )),
            B(ri.Provider, { value: a }, t ? x.createPortal(d, t) : d));
      },
      LoadingMessage: function (e) {
        var t = e.children,
          t = void 0 === t ? "Loading..." : t,
          n = e.innerProps,
          e = E(e, Ka);
        return B(
          "div",
          T(
            {},
            y(
              Ee(Ee({}, e), {}, { children: t, innerProps: n }),
              "loadingMessage",
              { "menu-notice": !0, "menu-notice--loading": !0 }
            ),
            n
          ),
          t
        );
      },
      NoOptionsMessage: function (e) {
        var t = e.children,
          t = void 0 === t ? "No options" : t,
          n = e.innerProps,
          e = E(e, $a);
        return B(
          "div",
          T(
            {},
            y(
              Ee(Ee({}, e), {}, { children: t, innerProps: n }),
              "noOptionsMessage",
              { "menu-notice": !0, "menu-notice--no-options": !0 }
            ),
            n
          ),
          t
        );
      },
      MultiValue: function (e) {
        var t = e.children,
          n = e.components,
          o = e.data,
          r = e.innerProps,
          a = e.isDisabled,
          i = e.removeProps,
          s = e.selectProps,
          c = n.Container,
          l = n.Label,
          n = n.Remove;
        return B(
          c,
          {
            data: o,
            innerProps: Ee(
              Ee(
                {},
                y(e, "multiValue", {
                  "multi-value": !0,
                  "multi-value--is-disabled": a,
                })
              ),
              r
            ),
            selectProps: s,
          },
          B(
            l,
            {
              data: o,
              innerProps: Ee(
                {},
                y(e, "multiValueLabel", { "multi-value__label": !0 })
              ),
              selectProps: s,
            },
            t
          ),
          B(n, {
            data: o,
            innerProps: Ee(
              Ee({}, y(e, "multiValueRemove", { "multi-value__remove": !0 })),
              {},
              { "aria-label": "Remove ".concat(t || "option") },
              i
            ),
            selectProps: s,
          })
        );
      },
      MultiValueContainer: fi,
      MultiValueLabel: fi,
      MultiValueRemove: function (e) {
        var t = e.children,
          e = e.innerProps;
        return B("div", T({ role: "button" }, e), t || B(li, { size: 14 }));
      },
      Option: function (e) {
        var t = e.children,
          n = e.isDisabled,
          o = e.isFocused,
          r = e.isSelected,
          a = e.innerRef,
          i = e.innerProps;
        return B(
          "div",
          T(
            {},
            y(e, "option", {
              option: !0,
              "option--is-disabled": n,
              "option--is-focused": o,
              "option--is-selected": r,
            }),
            { ref: a, "aria-disabled": n },
            i
          ),
          t
        );
      },
      Placeholder: function (e) {
        var t = e.children,
          n = e.innerProps;
        return B("div", T({}, y(e, "placeholder", { placeholder: !0 }), n), t);
      },
      SelectContainer: function (e) {
        var t = e.children,
          n = e.innerProps,
          o = e.isDisabled,
          r = e.isRtl;
        return B(
          "div",
          T({}, y(e, "container", { "--is-disabled": o, "--is-rtl": r }), n),
          t
        );
      },
      SingleValue: function (e) {
        var t = e.children,
          n = e.isDisabled,
          o = e.innerProps;
        return B(
          "div",
          T(
            {},
            y(e, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": n,
            }),
            o
          ),
          t
        );
      },
      ValueContainer: function (e) {
        var t = e.children,
          n = e.innerProps,
          o = e.isMulti,
          r = e.hasValue;
        return B(
          "div",
          T(
            {},
            y(e, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": o,
              "value-container--has-value": r,
            }),
            n
          ),
          t
        );
      },
    },
    ki =
      Number.isNaN ||
      function (e) {
        return "number" == typeof e && e != e;
      };
  function Li(e, t) {
    if (e.length !== t.length) return !1;
    for (var n, o, r = 0; r < e.length; r++)
      if (((n = e[r]), (o = t[r]), !(n === o || (ki(n) && ki(o))))) return !1;
    return !0;
  }
  for (
    var Gi =
        "production" === process.env.NODE_ENV
          ? {
              name: "7pg0cj-a11yText",
              styles:
                "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
            }
          : {
              name: "1f43avz-a11yText-A11yText",
              styles:
                "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
              map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
              toString: function () {
                return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
              },
            },
      Ti = function (e) {
        return B("span", T({ css: Gi }, e));
      },
      Bi = {
        guidance: function (e) {
          var t = e.isSearchable,
            n = e.isMulti,
            o = e.tabSelectsValue,
            r = e.context,
            a = e.isInitialFocus;
          switch (r) {
            case "menu":
              return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
                o ? ", press Tab to select the option and exit the menu" : "",
                "."
              );
            case "input":
              return a
                ? ""
                    .concat(e["aria-label"] || "Select", " is focused ")
                    .concat(
                      t ? ",type to refine list" : "",
                      ", press Down to open the menu, "
                    )
                    .concat(n ? " press left to focus selected values" : "")
                : "";
            case "value":
              return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
            default:
              return "";
          }
        },
        onChange: function (e) {
          var t = e.action,
            n = e.label,
            o = void 0 === n ? "" : n,
            r = e.labels,
            a = e.isDisabled;
          switch (t) {
            case "deselect-option":
            case "pop-value":
            case "remove-value":
              return "option ".concat(o, ", deselected.");
            case "clear":
              return "All selected options have been cleared.";
            case "initial-input-focus":
              return "option"
                .concat(1 < r.length ? "s" : "", " ")
                .concat(r.join(","), ", selected.");
            case "select-option":
              return "option ".concat(
                o,
                a ? " is disabled. Select another option." : ", selected."
              );
            default:
              return "";
          }
        },
        onFocus: function (e) {
          function t(e, t) {
            return e && e.length
              ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length)
              : "";
          }
          var n = e.context,
            o = e.focused,
            r = e.options,
            a = e.label,
            a = void 0 === a ? "" : a,
            i = e.selectValue,
            s = e.isDisabled,
            c = e.isSelected,
            e = e.isAppleDevice;
          return "value" === n && i
            ? "value ".concat(a, " focused, ").concat(t(i, o), ".")
            : "menu" === n && e
            ? ((i = s ? " disabled" : ""),
              (n = "".concat(c ? " selected" : "").concat(i)),
              "".concat(a).concat(n, ", ").concat(t(r, o), "."))
            : "";
        },
        onFilter: function (e) {
          var t = e.inputValue,
            e = e.resultsMessage;
          return "".concat(e).concat(t ? " for search term " + t : "", ".");
        },
      },
      Ri = function (e) {
        var i = e.ariaSelection,
          o = e.focusedOption,
          r = e.focusedValue,
          a = e.focusableOptions,
          t = e.isFocused,
          s = e.selectValue,
          n = e.selectProps,
          c = e.id,
          l = e.isAppleDevice,
          u = n.ariaLiveMessages,
          d = n.getOptionLabel,
          g = n.inputValue,
          p = n.isMulti,
          h = n.isOptionDisabled,
          f = n.isSearchable,
          m = n.menuIsOpen,
          b = n.options,
          v = n.screenReaderStatus,
          y = n.tabSelectsValue,
          I = n.isLoading,
          C = n["aria-label"],
          e = n["aria-live"],
          x = G.useMemo(
            function () {
              return Ee(Ee({}, Bi), u || {});
            },
            [u]
          ),
          n = G.useMemo(
            function () {
              var e,
                t,
                n,
                o,
                r,
                a = "";
              return (
                i &&
                  x.onChange &&
                  ((e = i.option),
                  (n = i.options),
                  (r = i.removedValue),
                  (o = i.removedValues),
                  (t = i.value),
                  (t = (e = r || e || ((r = t), Array.isArray(r) ? null : r))
                    ? d(e)
                    : ""),
                  (n = (r = n || o || void 0) ? r.map(d) : []),
                  (o = Ee(
                    { isDisabled: e && h(e, s), label: t, labels: n },
                    i
                  )),
                  (a = x.onChange(o))),
                a
              );
            },
            [i, x, h, s, d]
          ),
          S = G.useMemo(
            function () {
              var e = "",
                t = o || r,
                n = !!(o && s && s.includes(o));
              return (
                t &&
                  x.onFocus &&
                  ((n = {
                    focused: t,
                    label: d(t),
                    isDisabled: h(t, s),
                    isSelected: n,
                    options: a,
                    context: t === o ? "menu" : "value",
                    selectValue: s,
                    isAppleDevice: l,
                  }),
                  (e = x.onFocus(n))),
                e
              );
            },
            [o, r, d, h, x, a, s, l]
          ),
          w = G.useMemo(
            function () {
              var e,
                t = "";
              return (
                m &&
                  b.length &&
                  !I &&
                  x.onFilter &&
                  ((e = v({ count: a.length })),
                  (t = x.onFilter({ inputValue: g, resultsMessage: e }))),
                t
              );
            },
            [a, g, m, x, b, v, I]
          ),
          A = "initial-input-focus" === (null == i ? void 0 : i.action),
          E = G.useMemo(
            function () {
              var e = "";
              return (e = x.guidance
                ? x.guidance({
                    "aria-label": C,
                    context: r ? "value" : m ? "menu" : "input",
                    isDisabled: o && h(o, s),
                    isMulti: p,
                    isSearchable: f,
                    tabSelectsValue: y,
                    isInitialFocus: A,
                  })
                : e);
            },
            [C, o, r, p, h, f, m, x, s, y, A]
          ),
          n = B(
            G.Fragment,
            null,
            B("span", { id: "aria-selection" }, n),
            B("span", { id: "aria-focused" }, S),
            B("span", { id: "aria-results" }, w),
            B("span", { id: "aria-guidance" }, E)
          );
        return B(
          G.Fragment,
          null,
          B(Ti, { id: c }, A && n),
          B(
            Ti,
            {
              "aria-live": e,
              "aria-atomic": "false",
              "aria-relevant": "additions text",
              role: "log",
            },
            t && !A && n
          )
        );
      },
      Mi = [
        { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
        { base: "AA", letters: "Ꜳ" },
        { base: "AE", letters: "ÆǼǢ" },
        { base: "AO", letters: "Ꜵ" },
        { base: "AU", letters: "Ꜷ" },
        { base: "AV", letters: "ꜸꜺ" },
        { base: "AY", letters: "Ꜽ" },
        { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
        { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
        { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
        { base: "DZ", letters: "ǱǄ" },
        { base: "Dz", letters: "ǲǅ" },
        { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
        { base: "F", letters: "FⒻＦḞƑꝻ" },
        { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
        { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
        { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
        { base: "J", letters: "JⒿＪĴɈ" },
        { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
        { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
        { base: "LJ", letters: "Ǉ" },
        { base: "Lj", letters: "ǈ" },
        { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
        { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
        { base: "NJ", letters: "Ǌ" },
        { base: "Nj", letters: "ǋ" },
        { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
        { base: "OI", letters: "Ƣ" },
        { base: "OO", letters: "Ꝏ" },
        { base: "OU", letters: "Ȣ" },
        { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
        { base: "Q", letters: "QⓆＱꝖꝘɊ" },
        { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
        { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
        { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
        { base: "TZ", letters: "Ꜩ" },
        { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
        { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
        { base: "VY", letters: "Ꝡ" },
        { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
        { base: "X", letters: "XⓍＸẊẌ" },
        { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
        { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
        { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
        { base: "aa", letters: "ꜳ" },
        { base: "ae", letters: "æǽǣ" },
        { base: "ao", letters: "ꜵ" },
        { base: "au", letters: "ꜷ" },
        { base: "av", letters: "ꜹꜻ" },
        { base: "ay", letters: "ꜽ" },
        { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
        { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
        { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
        { base: "dz", letters: "ǳǆ" },
        { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
        { base: "f", letters: "fⓕｆḟƒꝼ" },
        { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
        { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
        { base: "hv", letters: "ƕ" },
        { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
        { base: "j", letters: "jⓙｊĵǰɉ" },
        { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
        { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
        { base: "lj", letters: "ǉ" },
        { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
        { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
        { base: "nj", letters: "ǌ" },
        { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
        { base: "oi", letters: "ƣ" },
        { base: "ou", letters: "ȣ" },
        { base: "oo", letters: "ꝏ" },
        { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
        { base: "q", letters: "qⓠｑɋꝗꝙ" },
        { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
        { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
        { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
        { base: "tz", letters: "ꜩ" },
        { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
        { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
        { base: "vy", letters: "ꝡ" },
        { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
        { base: "x", letters: "xⓧｘẋẍ" },
        { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
        { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
      ],
      Oi = new RegExp(
        "[" +
          Mi.map(function (e) {
            return e.letters;
          }).join("") +
          "]",
        "g"
      ),
      Vi = {},
      Fi = 0;
    Fi < Mi.length;
    Fi++
  )
    for (var Pi = Mi[Fi], Hi = 0; Hi < Pi.letters.length; Hi++)
      Vi[Pi.letters[Hi]] = Pi.base;
  function Wi(e) {
    return e.replace(Oi, function (e) {
      return Vi[e];
    });
  }
  function _i(e) {
    return e.replace(/^\s+|\s+$/g, "");
  }
  function Xi(e) {
    return "".concat(e.label, " ").concat(e.value);
  }
  (Zi = Wi),
    void 0 === ji && (ji = Li),
    (zi = null),
    (Ji.clear = function () {
      zi = null;
    });
  var Zi,
    ji,
    zi,
    Di = Ji,
    Yi = ["innerRef"];
  function Ji() {
    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    return zi && zi.lastThis === this && ji(t, zi.lastArgs)
      ? zi.lastResult
      : ((e = Zi.apply(this, t)),
        (zi = { lastResult: e, lastArgs: t, lastThis: this }),
        e);
  }
  function Ui(e) {
    var t = e.innerRef,
      e = (function (e) {
        for (
          var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          n[o - 1] = arguments[o];
        return Object.entries(e)
          .filter(function (e) {
            e = Ne(e, 1)[0];
            return !n.includes(e);
          })
          .reduce(function (e, t) {
            var t = Ne(t, 2),
              n = t[0],
              t = t[1];
            return (e[n] = t), e;
          }, {});
      })(E(e, Yi), "onExited", "in", "enter", "exit", "appear");
    return B(
      "input",
      T({ ref: t }, e, {
        css: sa(
          {
            label: "dummyInput",
            background: 0,
            border: 0,
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            width: 1,
            color: "transparent",
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)",
          },
          "production" === process.env.NODE_ENV ? "" : ";label:DummyInput;",
          "production" === process.env.NODE_ENV
            ? ""
            : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */"
        ),
      })
    );
  }
  var Qi = function (e) {
    e.cancelable && e.preventDefault(), e.stopPropagation();
  };
  var $i = ["boxSizing", "height", "overflow", "paddingRight", "position"],
    Ki = {
      boxSizing: "border-box",
      overflow: "hidden",
      position: "relative",
      height: "100%",
    };
  function qi(e) {
    e.preventDefault();
  }
  function es(e) {
    e.stopPropagation();
  }
  function ts() {
    var e = this.scrollTop,
      t = this.scrollHeight,
      n = e + this.offsetHeight;
    0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
  }
  function ns() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }
  var os = !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    ),
    rs = 0,
    as = { capture: !1, passive: !1 };
  function is(e) {
    return (
      (e = e.target).ownerDocument.activeElement &&
      e.ownerDocument.activeElement.blur()
    );
  }
  var ss =
    "production" === process.env.NODE_ENV
      ? {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0",
        }
      : {
          name: "bp8cua-ScrollManager",
          styles:
            "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
          map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        };
  function cs(e) {
    var t,
      a,
      i,
      n,
      o,
      r,
      s,
      c,
      l,
      u,
      d,
      g,
      p,
      h,
      f,
      m,
      b,
      v,
      y,
      I,
      C,
      x = e.children,
      S = e.lockEnabled,
      w = e.captureEnabled,
      A = e.onBottomArrive,
      E = e.onBottomLeave,
      N = e.onTopArrive,
      e = e.onTopLeave,
      k =
        ((s = (w = {
          isEnabled: void 0 === w || w,
          onBottomArrive: A,
          onBottomLeave: E,
          onTopArrive: N,
          onTopLeave: e,
        }).isEnabled),
        (c = w.onBottomArrive),
        (l = w.onBottomLeave),
        (u = w.onTopArrive),
        (d = w.onTopLeave),
        (g = G.useRef(!1)),
        (p = G.useRef(!1)),
        (h = G.useRef(0)),
        (f = G.useRef(null)),
        (m = G.useCallback(
          function (e, t) {
            var n, o, r, a, i, s;
            null !== f.current &&
              ((n = (i = f.current).scrollTop),
              (o = i.scrollHeight),
              (i = i.clientHeight),
              (r = f.current),
              (a = 0 < t),
              (s = !1),
              t < (i = o - i - n) && g.current && (l && l(e), (g.current = !1)),
              a && p.current && (d && d(e), (p.current = !1)),
              a && i < t
                ? (c && !g.current && c(e),
                  (r.scrollTop = o),
                  (g.current = s = !0))
                : !a &&
                  n < -t &&
                  (u && !p.current && u(e),
                  (r.scrollTop = 0),
                  (p.current = s = !0)),
              s) &&
              Qi(e);
          },
          [c, l, u, d]
        )),
        (b = G.useCallback(
          function (e) {
            m(e, e.deltaY);
          },
          [m]
        )),
        (v = G.useCallback(function (e) {
          h.current = e.changedTouches[0].clientY;
        }, [])),
        (y = G.useCallback(
          function (e) {
            var t = h.current - e.changedTouches[0].clientY;
            m(e, t);
          },
          [m]
        )),
        (I = G.useCallback(
          function (e) {
            var t;
            e &&
              (e.addEventListener("wheel", b, (t = !!Ja && { passive: !1 })),
              e.addEventListener("touchstart", v, t),
              e.addEventListener("touchmove", y, t));
          },
          [y, v, b]
        )),
        (C = G.useCallback(
          function (e) {
            e &&
              (e.removeEventListener("wheel", b, !1),
              e.removeEventListener("touchstart", v, !1),
              e.removeEventListener("touchmove", y, !1));
          },
          [y, v, b]
        )),
        G.useEffect(
          function () {
            var e;
            if (s)
              return (
                (e = f.current),
                I(e),
                function () {
                  C(e);
                }
              );
          },
          [s, I, C]
        ),
        function (e) {
          f.current = e;
        }),
      L =
        ((t = (A = { isEnabled: S }).isEnabled),
        (a = void 0 === (A = A.accountForScrollbars) || A),
        (i = G.useRef({})),
        (n = G.useRef(null)),
        (o = G.useCallback(
          function (e) {
            var t, n, o, r;
            os &&
              ((t = document.body),
              (n = t && t.style),
              a &&
                $i.forEach(function (e) {
                  var t = n && n[e];
                  i.current[e] = t;
                }),
              a &&
                rs < 1 &&
                ((o = parseInt(i.current.paddingRight, 10) || 0),
                (r = document.body ? document.body.clientWidth : 0),
                (r = window.innerWidth - r + o || 0),
                Object.keys(Ki).forEach(function (e) {
                  var t = Ki[e];
                  n && (n[e] = t);
                }),
                n) &&
                (n.paddingRight = "".concat(r, "px")),
              t &&
                ns() &&
                (t.addEventListener("touchmove", qi, as), e) &&
                (e.addEventListener("touchstart", ts, as),
                e.addEventListener("touchmove", es, as)),
              (rs += 1));
          },
          [a]
        )),
        (r = G.useCallback(
          function (e) {
            var t, n;
            os &&
              ((t = document.body),
              (n = t && t.style),
              (rs = Math.max(rs - 1, 0)),
              a &&
                rs < 1 &&
                $i.forEach(function (e) {
                  var t = i.current[e];
                  n && (n[e] = t);
                }),
              t) &&
              ns() &&
              (t.removeEventListener("touchmove", qi, as), e) &&
              (e.removeEventListener("touchstart", ts, as),
              e.removeEventListener("touchmove", es, as));
          },
          [a]
        )),
        G.useEffect(
          function () {
            var e;
            if (t)
              return (
                (e = n.current),
                o(e),
                function () {
                  r(e);
                }
              );
          },
          [t, o, r]
        ),
        function (e) {
          n.current = e;
        });
    return B(
      G.Fragment,
      null,
      S && B("div", { onClick: is, css: ss }),
      x(function (e) {
        k(e), L(e);
      })
    );
  }
  function ls(e) {
    var t = e.name,
      e = e.onFocus;
    return B("input", {
      required: !0,
      name: t,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: e,
      css: us,
      value: "",
      onChange: function () {},
    });
  }
  var us =
    "production" === process.env.NODE_ENV
      ? {
          name: "1a0ro4n-requiredInput",
          styles:
            "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
        }
      : {
          name: "5kkxb2-requiredInput-RequiredInput",
          styles:
            "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
          map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        };
  function ds(e) {
    return (
      typeof window < "u" &&
      null != window.navigator &&
      e.test(
        (null == (e = window.navigator.userAgentData) ? void 0 : e.platform) ||
          window.navigator.platform
      )
    );
  }
  function gs() {
    return ds(/^Mac/i);
  }
  function ps() {
    return (
      ds(/^iPhone/i) || ds(/^iPad/i) || (gs() && 1 < navigator.maxTouchPoints)
    );
  }
  var hs,
    fs = {
      clearIndicator: Ci,
      container: function (e) {
        var t = e.isDisabled;
        return {
          label: "container",
          direction: e.isRtl ? "rtl" : void 0,
          pointerEvents: t ? "none" : void 0,
          position: "relative",
        };
      },
      control: function (e, t) {
        var n = e.isDisabled,
          o = e.isFocused,
          e = e.theme,
          r = e.colors,
          a = e.borderRadius;
        return Ee(
          {
            label: "control",
            alignItems: "center",
            cursor: "default",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minHeight: e.spacing.controlHeight,
            outline: "0 !important",
            position: "relative",
            transition: "all 100ms",
          },
          t
            ? {}
            : {
                backgroundColor: n ? r.neutral5 : r.neutral0,
                borderColor: n ? r.neutral10 : o ? r.primary : r.neutral20,
                borderRadius: a,
                borderStyle: "solid",
                borderWidth: 1,
                boxShadow: o ? "0 0 0 1px ".concat(r.primary) : void 0,
                "&:hover": { borderColor: o ? r.primary : r.neutral30 },
              }
        );
      },
      dropdownIndicator: Ii,
      group: function (e, t) {
        e = e.theme.spacing;
        return t
          ? {}
          : { paddingBottom: 2 * e.baseUnit, paddingTop: 2 * e.baseUnit };
      },
      groupHeading: function (e, t) {
        var e = e.theme,
          n = e.colors,
          e = e.spacing;
        return Ee(
          { label: "group", cursor: "default", display: "block" },
          t
            ? {}
            : {
                color: n.neutral40,
                fontSize: "75%",
                fontWeight: 500,
                marginBottom: "0.25em",
                paddingLeft: 3 * e.baseUnit,
                paddingRight: 3 * e.baseUnit,
                textTransform: "uppercase",
              }
        );
      },
      indicatorsContainer: function () {
        return {
          alignItems: "center",
          alignSelf: "stretch",
          display: "flex",
          flexShrink: 0,
        };
      },
      indicatorSeparator: function (e, t) {
        var n = e.isDisabled,
          e = e.theme,
          o = e.spacing.baseUnit,
          e = e.colors;
        return Ee(
          { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
          t
            ? {}
            : {
                backgroundColor: n ? e.neutral10 : e.neutral20,
                marginBottom: 2 * o,
                marginTop: 2 * o,
              }
        );
      },
      input: function (e, t) {
        var n = e.isDisabled,
          o = e.value,
          e = e.theme,
          r = e.spacing,
          e = e.colors;
        return Ee(
          Ee(
            {
              visibility: n ? "hidden" : "visible",
              transform: o ? "translateZ(0)" : "",
            },
            Ei
          ),
          t
            ? {}
            : {
                margin: r.baseUnit / 2,
                paddingBottom: r.baseUnit / 2,
                paddingTop: r.baseUnit / 2,
                color: e.neutral80,
              }
        );
      },
      loadingIndicator: function (e, t) {
        var n = e.isFocused,
          o = e.size,
          e = e.theme,
          r = e.colors,
          e = e.spacing.baseUnit;
        return Ee(
          {
            label: "loadingIndicator",
            display: "flex",
            transition: "color 150ms",
            alignSelf: "center",
            fontSize: o,
            lineHeight: 1,
            marginRight: o,
            textAlign: "center",
            verticalAlign: "middle",
          },
          t ? {} : { color: n ? r.neutral60 : r.neutral20, padding: 2 * e }
        );
      },
      loadingMessage: ii,
      menu: function (e, t) {
        var n,
          o = e.placement,
          e = e.theme,
          r = e.borderRadius,
          a = e.spacing,
          e = e.colors;
        return Ee(
          (Ae(
            (n = { label: "menu" }),
            (o = o) ? { bottom: "top", top: "bottom" }[o] : "bottom",
            "100%"
          ),
          Ae(n, "position", "absolute"),
          Ae(n, "width", "100%"),
          Ae(n, "zIndex", 1),
          n),
          t
            ? {}
            : {
                backgroundColor: e.neutral0,
                borderRadius: r,
                boxShadow:
                  "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
                marginBottom: a.menuGutter,
                marginTop: a.menuGutter,
              }
        );
      },
      menuList: function (e, t) {
        var n = e.maxHeight,
          e = e.theme.spacing.baseUnit;
        return Ee(
          {
            maxHeight: n,
            overflowY: "auto",
            position: "relative",
            WebkitOverflowScrolling: "touch",
          },
          t ? {} : { paddingBottom: e, paddingTop: e }
        );
      },
      menuPortal: function (e) {
        var t = e.rect,
          n = e.offset,
          e = e.position;
        return { left: t.left, position: e, top: n, width: t.width, zIndex: 1 };
      },
      multiValue: function (e, t) {
        var e = e.theme,
          n = e.spacing,
          o = e.borderRadius,
          e = e.colors;
        return Ee(
          { label: "multiValue", display: "flex", minWidth: 0 },
          t
            ? {}
            : {
                backgroundColor: e.neutral10,
                borderRadius: o / 2,
                margin: n.baseUnit / 2,
              }
        );
      },
      multiValueLabel: function (e, t) {
        var n = e.theme,
          o = n.borderRadius,
          n = n.colors,
          e = e.cropWithEllipsis;
        return Ee(
          {
            overflow: "hidden",
            textOverflow: e || void 0 === e ? "ellipsis" : void 0,
            whiteSpace: "nowrap",
          },
          t
            ? {}
            : {
                borderRadius: o / 2,
                color: n.neutral80,
                fontSize: "85%",
                padding: 3,
                paddingLeft: 6,
              }
        );
      },
      multiValueRemove: function (e, t) {
        var n = e.theme,
          o = n.spacing,
          r = n.borderRadius,
          n = n.colors,
          e = e.isFocused;
        return Ee(
          { alignItems: "center", display: "flex" },
          t
            ? {}
            : {
                borderRadius: r / 2,
                backgroundColor: e ? n.dangerLight : void 0,
                paddingLeft: o.baseUnit,
                paddingRight: o.baseUnit,
                ":hover": { backgroundColor: n.dangerLight, color: n.danger },
              }
        );
      },
      noOptionsMessage: ai,
      option: function (e, t) {
        var n = e.isDisabled,
          o = e.isFocused,
          r = e.isSelected,
          e = e.theme,
          a = e.spacing,
          e = e.colors;
        return Ee(
          {
            label: "option",
            cursor: "default",
            display: "block",
            fontSize: "inherit",
            width: "100%",
            userSelect: "none",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          },
          t
            ? {}
            : {
                backgroundColor: r
                  ? e.primary
                  : o
                  ? e.primary25
                  : "transparent",
                color: n ? e.neutral20 : r ? e.neutral0 : "inherit",
                padding: ""
                  .concat(2 * a.baseUnit, "px ")
                  .concat(3 * a.baseUnit, "px"),
                ":active": {
                  backgroundColor: n ? void 0 : r ? e.primary : e.primary50,
                },
              }
        );
      },
      placeholder: function (e, t) {
        var e = e.theme,
          n = e.spacing,
          e = e.colors;
        return Ee(
          { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
          t
            ? {}
            : {
                color: e.neutral50,
                marginLeft: n.baseUnit / 2,
                marginRight: n.baseUnit / 2,
              }
        );
      },
      singleValue: function (e, t) {
        var n = e.isDisabled,
          e = e.theme,
          o = e.spacing,
          e = e.colors;
        return Ee(
          {
            label: "singleValue",
            gridArea: "1 / 1 / 2 / 3",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
          t
            ? {}
            : {
                color: n ? e.neutral40 : e.neutral80,
                marginLeft: o.baseUnit / 2,
                marginRight: o.baseUnit / 2,
              }
        );
      },
      valueContainer: function (e, t) {
        var n = e.theme.spacing,
          o = e.isMulti,
          r = e.hasValue,
          e = e.selectProps.controlShouldRenderValue;
        return Ee(
          {
            alignItems: "center",
            display: o && r && e ? "flex" : "grid",
            flex: 1,
            flexWrap: "wrap",
            WebkitOverflowScrolling: "touch",
            position: "relative",
            overflow: "hidden",
          },
          t
            ? {}
            : {
                padding: ""
                  .concat(n.baseUnit / 2, "px ")
                  .concat(2 * n.baseUnit, "px"),
              }
        );
      },
    },
    ms = {
      borderRadius: 4,
      colors: {
        primary: "#2684FF",
        primary75: "#4C9AFF",
        primary50: "#B2D4FF",
        primary25: "#DEEBFF",
        danger: "#DE350B",
        dangerLight: "#FFBDAD",
        neutral0: "hsl(0, 0%, 100%)",
        neutral5: "hsl(0, 0%, 95%)",
        neutral10: "hsl(0, 0%, 90%)",
        neutral20: "hsl(0, 0%, 80%)",
        neutral30: "hsl(0, 0%, 70%)",
        neutral40: "hsl(0, 0%, 60%)",
        neutral50: "hsl(0, 0%, 50%)",
        neutral60: "hsl(0, 0%, 40%)",
        neutral70: "hsl(0, 0%, 30%)",
        neutral80: "hsl(0, 0%, 20%)",
        neutral90: "hsl(0, 0%, 10%)",
      },
      spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 },
    },
    n = {
      "aria-live": "polite",
      backspaceRemovesValue: !0,
      blurInputOnSelect: za(),
      captureMenuScroll: !za(),
      classNames: {},
      closeMenuOnSelect: !0,
      closeMenuOnScroll: !1,
      components: {},
      controlShouldRenderValue: !0,
      escapeClearsValue: !1,
      filterOption: function (e, t) {
        var n, o, r, a, i;
        return (
          !!e.data.__isNew__ ||
          ((n = (a = Ee(
            {
              ignoreCase: !0,
              ignoreAccents: !0,
              stringify: Xi,
              trim: !0,
              matchFrom: "any",
            },
            hs
          )).ignoreCase),
          (o = a.ignoreAccents),
          (r = a.stringify),
          (i = a.trim),
          (a = a.matchFrom),
          (t = i ? _i(t) : t),
          (i = i ? _i(r(e)) : r(e)),
          n && ((t = t.toLowerCase()), (i = i.toLowerCase())),
          o && ((t = Di(t)), (i = Wi(i))),
          "start" === a ? i.substr(0, t.length) === t : -1 < i.indexOf(t))
        );
      },
      formatGroupLabel: function (e) {
        return e.label;
      },
      getOptionLabel: function (e) {
        return e.label;
      },
      getOptionValue: function (e) {
        return e.value;
      },
      isDisabled: !1,
      isLoading: !1,
      isMulti: !1,
      isRtl: !1,
      isSearchable: !0,
      isOptionDisabled: function (e) {
        return !!e.isDisabled;
      },
      loadingMessage: function () {
        return "Loading...";
      },
      maxMenuHeight: 300,
      minMenuHeight: 140,
      menuIsOpen: !1,
      menuPlacement: "bottom",
      menuPosition: "absolute",
      menuShouldBlockScroll: !1,
      menuShouldScrollIntoView: !(function () {
        try {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        } catch {}
      })(),
      noOptionsMessage: function () {
        return "No options";
      },
      openMenuOnFocus: !1,
      openMenuOnClick: !0,
      options: [],
      pageSize: 5,
      placeholder: "Select...",
      screenReaderStatus: function (e) {
        e = e.count;
        return "".concat(e, " result").concat(1 !== e ? "s" : "", " available");
      },
      styles: {},
      tabIndex: 0,
      tabSelectsValue: !0,
      unstyled: !1,
    };
  function bs(e, t, n, o) {
    return {
      type: "option",
      data: t,
      isDisabled: As(e, t, n),
      isSelected: Es(e, t, n),
      label: Ss(e, t),
      value: ws(e, t),
      index: o,
    };
  }
  function vs(o, r) {
    return o.options
      .map(function (e, t) {
        var n;
        return "options" in e
          ? 0 <
            (n = e.options
              .map(function (e, t) {
                return bs(o, e, r, t);
              })
              .filter(function (e) {
                return Cs(o, e);
              })).length
            ? { type: "group", data: e, options: n, index: t }
            : void 0
          : ((n = bs(o, e, r, t)), Cs(o, n) ? n : void 0);
      })
      .filter(Ua);
  }
  function ys(e) {
    return e.reduce(function (e, t) {
      return (
        "group" === t.type
          ? e.push.apply(
              e,
              ke(
                t.options.map(function (e) {
                  return e.data;
                })
              )
            )
          : e.push(t.data),
        e
      );
    }, []);
  }
  function Is(e, n) {
    return e.reduce(function (e, t) {
      return (
        "group" === t.type
          ? e.push.apply(
              e,
              ke(
                t.options.map(function (e) {
                  return {
                    data: e.data,
                    id: "".concat(n, "-").concat(t.index, "-").concat(e.index),
                  };
                })
              )
            )
          : e.push({ data: t.data, id: "".concat(n, "-").concat(t.index) }),
        e
      );
    }, []);
  }
  function Cs(e, t) {
    var n = e.inputValue,
      o = t.data,
      r = t.isSelected,
      a = t.label,
      t = t.value;
    return (
      (!ks(e) || !r) &&
      Ns(e, { label: a, value: t, data: o }, void 0 === n ? "" : n)
    );
  }
  function xs(e, t) {
    return (
      (null ==
      (e = e.find(function (e) {
        return e.data === t;
      }))
        ? void 0
        : e.id) || null
    );
  }
  function Ss(e, t) {
    return e.getOptionLabel(t);
  }
  function ws(e, t) {
    return e.getOptionValue(t);
  }
  function As(e, t, n) {
    return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n);
  }
  function Es(t, e, n) {
    var o;
    return (
      -1 < n.indexOf(e) ||
      ("function" == typeof t.isOptionSelected
        ? t.isOptionSelected(e, n)
        : ((o = ws(t, e)),
          n.some(function (e) {
            return ws(t, e) === o;
          })))
    );
  }
  function Ns(e, t, n) {
    return !e.filterOption || e.filterOption(t, n);
  }
  function ks(e) {
    var t = e.hideSelectedOptions,
      e = e.isMulti;
    return void 0 === t ? e : t;
  }
  var Ls = 1,
    Gs = (function (e) {
      var t = r;
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        e && Bn(t, e);
      var o = On(r);
      function r(e) {
        var f, t, n;
        return (
          Ln(this, r),
          ((f = o.call(this, e)).state = {
            ariaSelection: null,
            focusedOption: null,
            focusedOptionId: null,
            focusableOptionsWithIds: [],
            focusedValue: null,
            inputIsHidden: !1,
            isFocused: !1,
            selectValue: [],
            clearFocusValueOnUpdate: !1,
            prevWasFocused: !1,
            inputIsHiddenAfterUpdate: void 0,
            prevProps: void 0,
            instancePrefix: "",
          }),
          (f.blockOptionHover = !1),
          (f.isComposing = !1),
          (f.commonProps = void 0),
          (f.initialTouchX = 0),
          (f.initialTouchY = 0),
          (f.openAfterFocus = !1),
          (f.scrollToFocusedOptionOnUpdate = !1),
          (f.userIsDragging = void 0),
          (f.isAppleDevice = gs() || ps()),
          (f.controlRef = null),
          (f.getControlRef = function (e) {
            f.controlRef = e;
          }),
          (f.focusedOptionRef = null),
          (f.getFocusedOptionRef = function (e) {
            f.focusedOptionRef = e;
          }),
          (f.menuListRef = null),
          (f.getMenuListRef = function (e) {
            f.menuListRef = e;
          }),
          (f.inputRef = null),
          (f.getInputRef = function (e) {
            f.inputRef = e;
          }),
          (f.focus = f.focusInput),
          (f.blur = f.blurInput),
          (f.onChange = function (e, t) {
            var n = f.props,
              o = n.onChange,
              n = n.name;
            (t.name = n), f.ariaOnChange(e, t), o(e, t);
          }),
          (f.setValue = function (e, t, n) {
            var o = f.props,
              r = o.closeMenuOnSelect,
              a = o.isMulti,
              o = o.inputValue;
            f.onInputChange("", { action: "set-value", prevInputValue: o }),
              r &&
                (f.setState({ inputIsHiddenAfterUpdate: !a }), f.onMenuClose()),
              f.setState({ clearFocusValueOnUpdate: !0 }),
              f.onChange(e, { action: t, option: n });
          }),
          (f.selectOption = function (e) {
            var t = f.props,
              n = t.blurInputOnSelect,
              o = t.isMulti,
              t = t.name,
              r = f.state.selectValue,
              a = o && f.isOptionSelected(e, r),
              i = f.isOptionDisabled(e, r);
            if (a) {
              var s = f.getOptionValue(e);
              f.setValue(
                r.filter(function (e) {
                  return f.getOptionValue(e) !== s;
                }),
                "deselect-option",
                e
              );
            } else {
              if (i)
                return void f.ariaOnChange(e, {
                  action: "select-option",
                  option: e,
                  name: t,
                });
              o
                ? f.setValue([].concat(ke(r), [e]), "select-option", e)
                : f.setValue(e, "select-option");
            }
            n && f.blurInput();
          }),
          (f.removeValue = function (e) {
            var t = f.props.isMulti,
              n = f.state.selectValue,
              o = f.getOptionValue(e),
              n = n.filter(function (e) {
                return f.getOptionValue(e) !== o;
              }),
              t = Qa(t, n, n[0] || null);
            f.onChange(t, { action: "remove-value", removedValue: e }),
              f.focusInput();
          }),
          (f.clearValue = function () {
            var e = f.state.selectValue;
            f.onChange(Qa(f.props.isMulti, [], null), {
              action: "clear",
              removedValues: e,
            });
          }),
          (f.popValue = function () {
            var e = f.props.isMulti,
              t = f.state.selectValue,
              n = t[t.length - 1],
              t = t.slice(0, t.length - 1),
              e = Qa(e, t, t[0] || null);
            f.onChange(e, { action: "pop-value", removedValue: n });
          }),
          (f.getFocusedOptionId = function (e) {
            return xs(f.state.focusableOptionsWithIds, e);
          }),
          (f.getFocusableOptionsWithIds = function () {
            return Is(
              vs(f.props, f.state.selectValue),
              f.getElementId("option")
            );
          }),
          (f.getValue = function () {
            return f.state.selectValue;
          }),
          (f.cx = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e, t) {
              for (
                var n = arguments.length,
                  o = new Array(2 < n ? n - 2 : 0),
                  r = 2;
                r < n;
                r++
              )
                o[r - 2] = arguments[r];
              var a,
                i = [].concat(o);
              if (t && e)
                for (var s in t)
                  t.hasOwnProperty(s) &&
                    t[s] &&
                    i.push(
                      "".concat(
                        ((a = e),
                        (s = s),
                        s ? ("-" === s[0] ? a + s : a + "__" + s) : a)
                      )
                    );
              return i
                .filter(function (e) {
                  return e;
                })
                .map(function (e) {
                  return String(e).trim();
                })
                .join(" ");
            }.apply(void 0, [f.props.classNamePrefix].concat(t));
          }),
          (f.getOptionLabel = function (e) {
            return Ss(f.props, e);
          }),
          (f.getOptionValue = function (e) {
            return ws(f.props, e);
          }),
          (f.getStyles = function (e, t) {
            var n = f.props.unstyled,
              n = fs[e](t, n),
              e = ((n.boxSizing = "border-box"), f.props.styles[e]);
            return e ? e(n, t) : n;
          }),
          (f.getClassNames = function (e, t) {
            var n;
            return null == (e = (n = f.props.classNames)[e])
              ? void 0
              : e.call(n, t);
          }),
          (f.getElementId = function (e) {
            return "".concat(f.state.instancePrefix, "-").concat(e);
          }),
          (f.getComponents = function () {
            return (e = f.props), Ee(Ee({}, Ni), e.components);
            var e;
          }),
          (f.buildCategorizedOptions = function () {
            return vs(f.props, f.state.selectValue);
          }),
          (f.getCategorizedOptions = function () {
            return f.props.menuIsOpen ? f.buildCategorizedOptions() : [];
          }),
          (f.buildFocusableOptions = function () {
            return ys(f.buildCategorizedOptions());
          }),
          (f.getFocusableOptions = function () {
            return f.props.menuIsOpen ? f.buildFocusableOptions() : [];
          }),
          (f.ariaOnChange = function (e, t) {
            f.setState({ ariaSelection: Ee({ value: e }, t) });
          }),
          (f.onMenuMouseDown = function (e) {
            0 === e.button &&
              (e.stopPropagation(), e.preventDefault(), f.focusInput());
          }),
          (f.onMenuMouseMove = function (e) {
            f.blockOptionHover = !1;
          }),
          (f.onControlMouseDown = function (e) {
            var t;
            e.defaultPrevented ||
              ((t = f.props.openMenuOnClick),
              f.state.isFocused
                ? f.props.menuIsOpen
                  ? "INPUT" !== e.target.tagName &&
                    "TEXTAREA" !== e.target.tagName &&
                    f.onMenuClose()
                  : t && f.openMenu("first")
                : (t && (f.openAfterFocus = !0), f.focusInput()),
              "INPUT" !== e.target.tagName &&
                "TEXTAREA" !== e.target.tagName &&
                e.preventDefault());
          }),
          (f.onDropdownIndicatorMouseDown = function (e) {
            var t, n;
            (e && "mousedown" === e.type && 0 !== e.button) ||
              f.props.isDisabled ||
              ((t = (n = f.props).isMulti),
              (n = n.menuIsOpen),
              f.focusInput(),
              n
                ? (f.setState({ inputIsHiddenAfterUpdate: !t }),
                  f.onMenuClose())
                : f.openMenu("first"),
              e.preventDefault());
          }),
          (f.onClearIndicatorMouseDown = function (e) {
            (e && "mousedown" === e.type && 0 !== e.button) ||
              (f.clearValue(),
              e.preventDefault(),
              (f.openAfterFocus = !1),
              "touchend" === e.type
                ? f.focusInput()
                : setTimeout(function () {
                    return f.focusInput();
                  }));
          }),
          (f.onScroll = function (e) {
            "boolean" == typeof f.props.closeMenuOnScroll
              ? e.target instanceof HTMLElement &&
                Wa(e.target) &&
                f.props.onMenuClose()
              : "function" == typeof f.props.closeMenuOnScroll &&
                f.props.closeMenuOnScroll(e) &&
                f.props.onMenuClose();
          }),
          (f.onCompositionStart = function () {
            f.isComposing = !0;
          }),
          (f.onCompositionEnd = function () {
            f.isComposing = !1;
          }),
          (f.onTouchStart = function (e) {
            (e = e.touches), (e = e && e.item(0));
            e &&
              ((f.initialTouchX = e.clientX),
              (f.initialTouchY = e.clientY),
              (f.userIsDragging = !1));
          }),
          (f.onTouchMove = function (e) {
            var t,
              e = e.touches,
              e = e && e.item(0);
            e &&
              ((t = Math.abs(e.clientX - f.initialTouchX)),
              (e = Math.abs(e.clientY - f.initialTouchY)),
              (f.userIsDragging = 5 < t || 5 < e));
          }),
          (f.onTouchEnd = function (e) {
            f.userIsDragging ||
              (f.controlRef &&
                !f.controlRef.contains(e.target) &&
                f.menuListRef &&
                !f.menuListRef.contains(e.target) &&
                f.blurInput(),
              (f.initialTouchX = 0),
              (f.initialTouchY = 0));
          }),
          (f.onControlTouchEnd = function (e) {
            f.userIsDragging || f.onControlMouseDown(e);
          }),
          (f.onClearIndicatorTouchEnd = function (e) {
            f.userIsDragging || f.onClearIndicatorMouseDown(e);
          }),
          (f.onDropdownIndicatorTouchEnd = function (e) {
            f.userIsDragging || f.onDropdownIndicatorMouseDown(e);
          }),
          (f.handleInputChange = function (e) {
            var t = f.props.inputValue,
              e = e.currentTarget.value;
            f.setState({ inputIsHiddenAfterUpdate: !1 }),
              f.onInputChange(e, { action: "input-change", prevInputValue: t }),
              f.props.menuIsOpen || f.onMenuOpen();
          }),
          (f.onInputFocus = function (e) {
            f.props.onFocus && f.props.onFocus(e),
              f.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
              (f.openAfterFocus || f.props.openMenuOnFocus) &&
                f.openMenu("first"),
              (f.openAfterFocus = !1);
          }),
          (f.onInputBlur = function (e) {
            var t = f.props.inputValue;
            f.menuListRef && f.menuListRef.contains(document.activeElement)
              ? f.inputRef.focus()
              : (f.props.onBlur && f.props.onBlur(e),
                f.onInputChange("", {
                  action: "input-blur",
                  prevInputValue: t,
                }),
                f.onMenuClose(),
                f.setState({ focusedValue: null, isFocused: !1 }));
          }),
          (f.onOptionHover = function (e) {
            var t;
            f.blockOptionHover ||
              f.state.focusedOption === e ||
              ((t = f.getFocusableOptions().indexOf(e)),
              f.setState({
                focusedOption: e,
                focusedOptionId: -1 < t ? f.getFocusedOptionId(e) : null,
              }));
          }),
          (f.shouldHideSelectedOptions = function () {
            return ks(f.props);
          }),
          (f.onValueInputFocus = function (e) {
            e.preventDefault(), e.stopPropagation(), f.focus();
          }),
          (f.onKeyDown = function (e) {
            var t = f.props,
              n = t.isMulti,
              o = t.backspaceRemovesValue,
              r = t.escapeClearsValue,
              a = t.inputValue,
              i = t.isClearable,
              s = t.isDisabled,
              c = t.menuIsOpen,
              l = t.onKeyDown,
              u = t.tabSelectsValue,
              d = t.openMenuOnFocus,
              t = f.state,
              g = t.focusedOption,
              p = t.focusedValue,
              h = t.selectValue;
            if (
              !(s || ("function" == typeof l && (l(e), e.defaultPrevented)))
            ) {
              switch (((f.blockOptionHover = !0), e.key)) {
                case "ArrowLeft":
                  if (!n || a) return;
                  f.focusValue("previous");
                  break;
                case "ArrowRight":
                  if (!n || a) return;
                  f.focusValue("next");
                  break;
                case "Delete":
                case "Backspace":
                  if (a) return;
                  if (p) f.removeValue(p);
                  else {
                    if (!o) return;
                    n ? f.popValue() : i && f.clearValue();
                  }
                  break;
                case "Tab":
                  if (
                    f.isComposing ||
                    e.shiftKey ||
                    !c ||
                    !u ||
                    !g ||
                    (d && f.isOptionSelected(g, h))
                  )
                    return;
                  f.selectOption(g);
                  break;
                case "Enter":
                  if (229 === e.keyCode) break;
                  if (c) {
                    if (!g || f.isComposing) return;
                    f.selectOption(g);
                    break;
                  }
                  return;
                case "Escape":
                  c
                    ? (f.setState({ inputIsHiddenAfterUpdate: !1 }),
                      f.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: a,
                      }),
                      f.onMenuClose())
                    : i && r && f.clearValue();
                  break;
                case " ":
                  if (a) return;
                  if (c) {
                    if (!g) return;
                    f.selectOption(g);
                  } else f.openMenu("first");
                  break;
                case "ArrowUp":
                  c ? f.focusOption("up") : f.openMenu("last");
                  break;
                case "ArrowDown":
                  c ? f.focusOption("down") : f.openMenu("first");
                  break;
                case "PageUp":
                  if (!c) return;
                  f.focusOption("pageup");
                  break;
                case "PageDown":
                  if (!c) return;
                  f.focusOption("pagedown");
                  break;
                case "Home":
                  if (!c) return;
                  f.focusOption("first");
                  break;
                case "End":
                  if (!c) return;
                  f.focusOption("last");
                  break;
                default:
                  return;
              }
              e.preventDefault();
            }
          }),
          (f.state.instancePrefix =
            "react-select-" + (f.props.instanceId || ++Ls)),
          (f.state.selectValue = Pa(e.value)),
          e.menuIsOpen &&
            f.state.selectValue.length &&
            ((e = f.getFocusableOptionsWithIds()),
            (n = (t = f.buildFocusableOptions()).indexOf(
              f.state.selectValue[0]
            )),
            (f.state.focusableOptionsWithIds = e),
            (f.state.focusedOption = t[n]),
            (f.state.focusedOptionId = xs(e, t[n]))),
          f
        );
      }
      return (
        Tn(
          r,
          [
            {
              key: "componentDidMount",
              value: function () {
                this.startListeningComposition(),
                  this.startListeningToTouch(),
                  this.props.closeMenuOnScroll &&
                    document &&
                    document.addEventListener &&
                    document.addEventListener("scroll", this.onScroll, !0),
                  this.props.autoFocus && this.focusInput(),
                  this.props.menuIsOpen &&
                    this.state.focusedOption &&
                    this.menuListRef &&
                    this.focusedOptionRef &&
                    ja(this.menuListRef, this.focusedOptionRef);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this.props,
                  n = t.isDisabled,
                  t = t.menuIsOpen,
                  o = this.state.isFocused;
                ((o && !n && e.isDisabled) || (o && t && !e.menuIsOpen)) &&
                  this.focusInput(),
                  o && n && !e.isDisabled
                    ? this.setState({ isFocused: !1 }, this.onMenuClose)
                    : o ||
                      n ||
                      !e.isDisabled ||
                      this.inputRef !== document.activeElement ||
                      this.setState({ isFocused: !0 }),
                  this.menuListRef &&
                    this.focusedOptionRef &&
                    this.scrollToFocusedOptionOnUpdate &&
                    (ja(this.menuListRef, this.focusedOptionRef),
                    (this.scrollToFocusedOptionOnUpdate = !1));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.stopListeningComposition(),
                  this.stopListeningToTouch(),
                  document.removeEventListener("scroll", this.onScroll, !0);
              },
            },
            {
              key: "onMenuOpen",
              value: function () {
                this.props.onMenuOpen();
              },
            },
            {
              key: "onMenuClose",
              value: function () {
                this.onInputChange("", {
                  action: "menu-close",
                  prevInputValue: this.props.inputValue,
                }),
                  this.props.onMenuClose();
              },
            },
            {
              key: "onInputChange",
              value: function (e, t) {
                this.props.onInputChange(e, t);
              },
            },
            {
              key: "focusInput",
              value: function () {
                this.inputRef && this.inputRef.focus();
              },
            },
            {
              key: "blurInput",
              value: function () {
                this.inputRef && this.inputRef.blur();
              },
            },
            {
              key: "openMenu",
              value: function (e) {
                var t = this,
                  n = this.state,
                  o = n.selectValue,
                  n = n.isFocused,
                  r = this.buildFocusableOptions(),
                  e = "first" === e ? 0 : r.length - 1;
                this.props.isMulti || (-1 < (o = r.indexOf(o[0])) && (e = o)),
                  (this.scrollToFocusedOptionOnUpdate = !(
                    n && this.menuListRef
                  )),
                  this.setState(
                    {
                      inputIsHiddenAfterUpdate: !1,
                      focusedValue: null,
                      focusedOption: r[e],
                      focusedOptionId: this.getFocusedOptionId(r[e]),
                    },
                    function () {
                      return t.onMenuOpen();
                    }
                  );
              },
            },
            {
              key: "focusValue",
              value: function (e) {
                var t = this.state,
                  n = t.selectValue,
                  t = t.focusedValue;
                if (this.props.isMulti) {
                  this.setState({ focusedOption: null });
                  var o = n.indexOf(t),
                    r = (t || (o = -1), n.length - 1),
                    a = -1;
                  if (n.length) {
                    switch (e) {
                      case "previous":
                        a = 0 === o ? 0 : -1 === o ? r : o - 1;
                        break;
                      case "next":
                        -1 < o && o < r && (a = o + 1);
                    }
                    this.setState({
                      inputIsHidden: -1 !== a,
                      focusedValue: n[a],
                    });
                  }
                }
              },
            },
            {
              key: "focusOption",
              value: function () {
                var e,
                  t,
                  n =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "first",
                  o = this.props.pageSize,
                  r = this.state.focusedOption,
                  a = this.getFocusableOptions();
                a.length &&
                  ((e = 0),
                  (t = a.indexOf(r)),
                  r || (t = -1),
                  "up" === n
                    ? (e = 0 < t ? t - 1 : a.length - 1)
                    : "down" === n
                    ? (e = (t + 1) % a.length)
                    : "pageup" === n
                    ? (e = t - o) < 0 && (e = 0)
                    : "pagedown" === n
                    ? (e = t + o) > a.length - 1 && (e = a.length - 1)
                    : "last" === n && (e = a.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: a[e],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(a[e]),
                  }));
              },
            },
            {
              key: "getTheme",
              value: function () {
                return this.props.theme
                  ? "function" == typeof this.props.theme
                    ? this.props.theme(ms)
                    : Ee(Ee({}, ms), this.props.theme)
                  : ms;
              },
            },
            {
              key: "getCommonProps",
              value: function () {
                var e = this.clearValue,
                  t = this.cx,
                  n = this.getStyles,
                  o = this.getClassNames,
                  r = this.getValue,
                  a = this.selectOption,
                  i = this.setValue,
                  s = this.props,
                  c = s.isMulti,
                  l = s.isRtl,
                  u = s.options;
                return {
                  clearValue: e,
                  cx: t,
                  getStyles: n,
                  getClassNames: o,
                  getValue: r,
                  hasValue: this.hasValue(),
                  isMulti: c,
                  isRtl: l,
                  options: u,
                  selectOption: a,
                  selectProps: s,
                  setValue: i,
                  theme: this.getTheme(),
                };
              },
            },
            {
              key: "hasValue",
              value: function () {
                return 0 < this.state.selectValue.length;
              },
            },
            {
              key: "hasOptions",
              value: function () {
                return !!this.getFocusableOptions().length;
              },
            },
            {
              key: "isClearable",
              value: function () {
                var e = this.props,
                  t = e.isClearable,
                  e = e.isMulti;
                return void 0 === t ? e : t;
              },
            },
            {
              key: "isOptionDisabled",
              value: function (e, t) {
                return As(this.props, e, t);
              },
            },
            {
              key: "isOptionSelected",
              value: function (e, t) {
                return Es(this.props, e, t);
              },
            },
            {
              key: "filterOption",
              value: function (e, t) {
                return Ns(this.props, e, t);
              },
            },
            {
              key: "formatOptionLabel",
              value: function (e, t) {
                var n, o;
                return "function" == typeof this.props.formatOptionLabel
                  ? ((n = this.props.inputValue),
                    (o = this.state.selectValue),
                    this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: n,
                      selectValue: o,
                    }))
                  : this.getOptionLabel(e);
              },
            },
            {
              key: "formatGroupLabel",
              value: function (e) {
                return this.props.formatGroupLabel(e);
              },
            },
            {
              key: "startListeningComposition",
              value: function () {
                document &&
                  document.addEventListener &&
                  (document.addEventListener(
                    "compositionstart",
                    this.onCompositionStart,
                    !1
                  ),
                  document.addEventListener(
                    "compositionend",
                    this.onCompositionEnd,
                    !1
                  ));
              },
            },
            {
              key: "stopListeningComposition",
              value: function () {
                document &&
                  document.removeEventListener &&
                  (document.removeEventListener(
                    "compositionstart",
                    this.onCompositionStart
                  ),
                  document.removeEventListener(
                    "compositionend",
                    this.onCompositionEnd
                  ));
              },
            },
            {
              key: "startListeningToTouch",
              value: function () {
                document &&
                  document.addEventListener &&
                  (document.addEventListener(
                    "touchstart",
                    this.onTouchStart,
                    !1
                  ),
                  document.addEventListener("touchmove", this.onTouchMove, !1),
                  document.addEventListener("touchend", this.onTouchEnd, !1));
              },
            },
            {
              key: "stopListeningToTouch",
              value: function () {
                document &&
                  document.removeEventListener &&
                  (document.removeEventListener(
                    "touchstart",
                    this.onTouchStart
                  ),
                  document.removeEventListener("touchmove", this.onTouchMove),
                  document.removeEventListener("touchend", this.onTouchEnd));
              },
            },
            {
              key: "renderInput",
              value: function () {
                var e = this.props,
                  t = e.isDisabled,
                  n = e.isSearchable,
                  o = e.inputId,
                  r = e.inputValue,
                  a = e.tabIndex,
                  i = e.form,
                  s = e.menuIsOpen,
                  e = e.required,
                  c = this.getComponents().Input,
                  l = this.state,
                  u = l.inputIsHidden,
                  l = l.ariaSelection,
                  d = this.commonProps,
                  o = o || this.getElementId("input"),
                  e = Ee(
                    Ee(
                      Ee(
                        {
                          "aria-autocomplete": "list",
                          "aria-expanded": s,
                          "aria-haspopup": !0,
                          "aria-errormessage": this.props["aria-errormessage"],
                          "aria-invalid": this.props["aria-invalid"],
                          "aria-label": this.props["aria-label"],
                          "aria-labelledby": this.props["aria-labelledby"],
                          "aria-required": e,
                          role: "combobox",
                          "aria-activedescendant": this.isAppleDevice
                            ? void 0
                            : this.state.focusedOptionId || "",
                        },
                        s && { "aria-controls": this.getElementId("listbox") }
                      ),
                      !n && { "aria-readonly": !0 }
                    ),
                    this.hasValue()
                      ? "initial-input-focus" ===
                          (null == l ? void 0 : l.action) && {
                          "aria-describedby": this.getElementId("live-region"),
                        }
                      : { "aria-describedby": this.getElementId("placeholder") }
                  );
                return n
                  ? we.createElement(
                      c,
                      T(
                        {},
                        d,
                        {
                          autoCapitalize: "none",
                          autoComplete: "off",
                          autoCorrect: "off",
                          id: o,
                          innerRef: this.getInputRef,
                          isDisabled: t,
                          isHidden: u,
                          onBlur: this.onInputBlur,
                          onChange: this.handleInputChange,
                          onFocus: this.onInputFocus,
                          spellCheck: "false",
                          tabIndex: a,
                          form: i,
                          type: "text",
                          value: r,
                        },
                        e
                      )
                    )
                  : we.createElement(
                      Ui,
                      T(
                        {
                          id: o,
                          innerRef: this.getInputRef,
                          onBlur: this.onInputBlur,
                          onChange: Oa,
                          onFocus: this.onInputFocus,
                          disabled: t,
                          tabIndex: a,
                          inputMode: "none",
                          form: i,
                          value: "",
                        },
                        e
                      )
                    );
              },
            },
            {
              key: "renderPlaceholderOrValue",
              value: function () {
                var r = this,
                  e = this.getComponents(),
                  a = e.MultiValue,
                  i = e.MultiValueContainer,
                  s = e.MultiValueLabel,
                  c = e.MultiValueRemove,
                  t = e.SingleValue,
                  e = e.Placeholder,
                  l = this.commonProps,
                  n = this.props,
                  o = n.controlShouldRenderValue,
                  u = n.isDisabled,
                  d = n.isMulti,
                  g = n.inputValue,
                  n = n.placeholder,
                  p = this.state,
                  h = p.selectValue,
                  f = p.focusedValue,
                  p = p.isFocused;
                return this.hasValue() && o
                  ? d
                    ? h.map(function (e, t) {
                        var n = e === f,
                          o = ""
                            .concat(r.getOptionLabel(e), "-")
                            .concat(r.getOptionValue(e));
                        return we.createElement(
                          a,
                          T({}, l, {
                            components: { Container: i, Label: s, Remove: c },
                            isFocused: n,
                            isDisabled: u,
                            key: o,
                            index: t,
                            removeProps: {
                              onClick: function () {
                                return r.removeValue(e);
                              },
                              onTouchEnd: function () {
                                return r.removeValue(e);
                              },
                              onMouseDown: function (e) {
                                e.preventDefault();
                              },
                            },
                            data: e,
                          }),
                          r.formatOptionLabel(e, "value")
                        );
                      })
                    : g
                    ? null
                    : ((o = h[0]),
                      we.createElement(
                        t,
                        T({}, l, { data: o, isDisabled: u }),
                        this.formatOptionLabel(o, "value")
                      ))
                  : g
                  ? null
                  : we.createElement(
                      e,
                      T({}, l, {
                        key: "placeholder",
                        isDisabled: u,
                        isFocused: p,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      n
                    );
              },
            },
            {
              key: "renderClearIndicator",
              value: function () {
                var e = this.getComponents().ClearIndicator,
                  t = this.commonProps,
                  n = this.props,
                  o = n.isDisabled,
                  n = n.isLoading,
                  r = this.state.isFocused;
                return this.isClearable() && e && !o && this.hasValue() && !n
                  ? ((o = {
                      onMouseDown: this.onClearIndicatorMouseDown,
                      onTouchEnd: this.onClearIndicatorTouchEnd,
                      "aria-hidden": "true",
                    }),
                    we.createElement(
                      e,
                      T({}, t, { innerProps: o, isFocused: r })
                    ))
                  : null;
              },
            },
            {
              key: "renderLoadingIndicator",
              value: function () {
                var e = this.getComponents().LoadingIndicator,
                  t = this.commonProps,
                  n = this.props,
                  o = n.isDisabled,
                  n = n.isLoading,
                  r = this.state.isFocused;
                return e && n
                  ? we.createElement(
                      e,
                      T({}, t, {
                        innerProps: { "aria-hidden": "true" },
                        isDisabled: o,
                        isFocused: r,
                      })
                    )
                  : null;
              },
            },
            {
              key: "renderIndicatorSeparator",
              value: function () {
                var e,
                  t,
                  n = this.getComponents(),
                  o = n.DropdownIndicator,
                  n = n.IndicatorSeparator;
                return o && n
                  ? ((o = this.commonProps),
                    (e = this.props.isDisabled),
                    (t = this.state.isFocused),
                    we.createElement(
                      n,
                      T({}, o, { isDisabled: e, isFocused: t })
                    ))
                  : null;
              },
            },
            {
              key: "renderDropdownIndicator",
              value: function () {
                var e,
                  t,
                  n,
                  o,
                  r = this.getComponents().DropdownIndicator;
                return r
                  ? ((e = this.commonProps),
                    (t = this.props.isDisabled),
                    (n = this.state.isFocused),
                    (o = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      "aria-hidden": "true",
                    }),
                    we.createElement(
                      r,
                      T({}, e, { innerProps: o, isDisabled: t, isFocused: n })
                    ))
                  : null;
              },
            },
            {
              key: "renderMenu",
              value: function () {
                var d = this,
                  e = this.getComponents(),
                  i = e.Group,
                  s = e.GroupHeading,
                  r = e.Menu,
                  a = e.MenuList,
                  t = e.MenuPortal,
                  n = e.LoadingMessage,
                  o = e.NoOptionsMessage,
                  g = e.Option,
                  p = this.commonProps,
                  h = this.state.focusedOption,
                  e = this.props,
                  c = e.captureMenuScroll,
                  l = e.inputValue,
                  u = e.isLoading,
                  f = e.loadingMessage,
                  m = e.minMenuHeight,
                  b = e.maxMenuHeight,
                  v = e.menuIsOpen,
                  y = e.menuPlacement,
                  I = e.menuPosition,
                  C = e.menuPortalTarget,
                  x = e.menuShouldBlockScroll,
                  S = e.menuShouldScrollIntoView,
                  w = e.noOptionsMessage,
                  A = e.onMenuScrollToTop,
                  E = e.onMenuScrollToBottom;
                if (!v) return null;
                function N(e, t) {
                  var n = e.type,
                    o = e.data,
                    r = e.isDisabled,
                    a = e.isSelected,
                    i = e.label,
                    s = e.value,
                    c = h === o,
                    l = r
                      ? void 0
                      : function () {
                          return d.onOptionHover(o);
                        },
                    u = r
                      ? void 0
                      : function () {
                          return d.selectOption(o);
                        },
                    u = {
                      id: (t = ""
                        .concat(d.getElementId("option"), "-")
                        .concat(t)),
                      onClick: u,
                      onMouseMove: l,
                      onMouseOver: l,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": d.isAppleDevice ? void 0 : a,
                    };
                  return we.createElement(
                    g,
                    T({}, p, {
                      innerProps: u,
                      data: o,
                      isDisabled: r,
                      isSelected: a,
                      key: t,
                      label: i,
                      type: n,
                      value: s,
                      isFocused: c,
                      innerRef: c ? d.getFocusedOptionRef : void 0,
                    }),
                    d.formatOptionLabel(e.data, "menu")
                  );
                }
                var k;
                if (this.hasOptions())
                  k = this.getCategorizedOptions().map(function (e) {
                    var t, n, o, r, a;
                    return "group" === e.type
                      ? ((t = e.data),
                        (n = e.options),
                        (o = e.index),
                        (r = "".concat(d.getElementId("group"), "-").concat(o)),
                        (a = "".concat(r, "-heading")),
                        we.createElement(
                          i,
                          T({}, p, {
                            key: r,
                            data: t,
                            options: n,
                            Heading: s,
                            headingProps: { id: a, data: e.data },
                            label: d.formatGroupLabel(e.data),
                          }),
                          e.options.map(function (e) {
                            return N(e, "".concat(o, "-").concat(e.index));
                          })
                        ))
                      : "option" === e.type
                      ? N(e, "".concat(e.index))
                      : void 0;
                  });
                else if (u) {
                  e = f({ inputValue: l });
                  if (null === e) return null;
                  k = we.createElement(n, p, e);
                } else {
                  v = w({ inputValue: l });
                  if (null === v) return null;
                  k = we.createElement(o, p, v);
                }
                var L = {
                    minMenuHeight: m,
                    maxMenuHeight: b,
                    menuPlacement: y,
                    menuPosition: I,
                    menuShouldScrollIntoView: S,
                  },
                  f = we.createElement(ti, T({}, p, L), function (e) {
                    var t = e.ref,
                      e = e.placerProps,
                      n = e.placement,
                      o = e.maxHeight;
                    return we.createElement(
                      r,
                      T({}, p, L, {
                        innerRef: t,
                        innerProps: {
                          onMouseDown: d.onMenuMouseDown,
                          onMouseMove: d.onMenuMouseMove,
                        },
                        isLoading: u,
                        placement: n,
                      }),
                      we.createElement(
                        cs,
                        {
                          captureEnabled: c,
                          onTopArrive: A,
                          onBottomArrive: E,
                          lockEnabled: x,
                        },
                        function (t) {
                          return we.createElement(
                            a,
                            T({}, p, {
                              innerRef: function (e) {
                                d.getMenuListRef(e), t(e);
                              },
                              innerProps: {
                                role: "listbox",
                                "aria-multiselectable": p.isMulti,
                                id: d.getElementId("listbox"),
                              },
                              isLoading: u,
                              maxHeight: o,
                              focusedOption: h,
                            }),
                            k
                          );
                        }
                      )
                    );
                  });
                return C || "fixed" === I
                  ? we.createElement(
                      t,
                      T({}, p, {
                        appendTo: C,
                        controlElement: this.controlRef,
                        menuPlacement: y,
                        menuPosition: I,
                      }),
                      f
                    )
                  : f;
              },
            },
            {
              key: "renderFormField",
              value: function () {
                var n = this,
                  e = this.props,
                  t = e.delimiter,
                  o = e.isDisabled,
                  r = e.isMulti,
                  a = e.name,
                  e = e.required,
                  i = this.state.selectValue;
                return !e || this.hasValue() || o
                  ? a && !o
                    ? r
                      ? t
                        ? ((e = i
                            .map(function (e) {
                              return n.getOptionValue(e);
                            })
                            .join(t)),
                          we.createElement("input", {
                            name: a,
                            type: "hidden",
                            value: e,
                          }))
                        : ((o =
                            0 < i.length
                              ? i.map(function (e, t) {
                                  return we.createElement("input", {
                                    key: "i-".concat(t),
                                    name: a,
                                    type: "hidden",
                                    value: n.getOptionValue(e),
                                  });
                                })
                              : we.createElement("input", {
                                  name: a,
                                  type: "hidden",
                                  value: "",
                                })),
                          we.createElement("div", null, o))
                      : ((r = i[0] ? this.getOptionValue(i[0]) : ""),
                        we.createElement("input", {
                          name: a,
                          type: "hidden",
                          value: r,
                        }))
                    : void 0
                  : we.createElement(ls, {
                      name: a,
                      onFocus: this.onValueInputFocus,
                    });
              },
            },
            {
              key: "renderLiveRegion",
              value: function () {
                var e = this.commonProps,
                  t = this.state,
                  n = t.ariaSelection,
                  o = t.focusedOption,
                  r = t.focusedValue,
                  a = t.isFocused,
                  t = t.selectValue,
                  i = this.getFocusableOptions();
                return we.createElement(
                  Ri,
                  T({}, e, {
                    id: this.getElementId("live-region"),
                    ariaSelection: n,
                    focusedOption: o,
                    focusedValue: r,
                    isFocused: a,
                    selectValue: t,
                    focusableOptions: i,
                    isAppleDevice: this.isAppleDevice,
                  })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.getComponents(),
                  t = e.Control,
                  n = e.IndicatorsContainer,
                  o = e.SelectContainer,
                  e = e.ValueContainer,
                  r = this.props,
                  a = r.className,
                  i = r.id,
                  s = r.isDisabled,
                  r = r.menuIsOpen,
                  c = this.state.isFocused,
                  l = (this.commonProps = this.getCommonProps());
                return we.createElement(
                  o,
                  T({}, l, {
                    className: a,
                    innerProps: { id: i, onKeyDown: this.onKeyDown },
                    isDisabled: s,
                    isFocused: c,
                  }),
                  this.renderLiveRegion(),
                  we.createElement(
                    t,
                    T({}, l, {
                      innerRef: this.getControlRef,
                      innerProps: {
                        onMouseDown: this.onControlMouseDown,
                        onTouchEnd: this.onControlTouchEnd,
                      },
                      isDisabled: s,
                      isFocused: c,
                      menuIsOpen: r,
                    }),
                    we.createElement(
                      e,
                      T({}, l, { isDisabled: s }),
                      this.renderPlaceholderOrValue(),
                      this.renderInput()
                    ),
                    we.createElement(
                      n,
                      T({}, l, { isDisabled: s }),
                      this.renderClearIndicator(),
                      this.renderLoadingIndicator(),
                      this.renderIndicatorSeparator(),
                      this.renderDropdownIndicator()
                    )
                  ),
                  this.renderMenu(),
                  this.renderFormField()
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                var n = t.prevProps,
                  o = t.clearFocusValueOnUpdate,
                  r = t.inputIsHiddenAfterUpdate,
                  a = t.ariaSelection,
                  i = t.isFocused,
                  s = t.prevWasFocused,
                  c = t.instancePrefix,
                  l = e.options,
                  u = e.value,
                  d = e.menuIsOpen,
                  g = e.inputValue,
                  p = e.isMulti,
                  h = Pa(u),
                  f = {},
                  u =
                    (!n ||
                      (u === n.value &&
                        l === n.options &&
                        d === n.menuIsOpen &&
                        g === n.inputValue) ||
                      ((u = d ? ys(vs(e, h)) : []),
                      (l = d ? Is(vs(e, h), "".concat(c, "-option")) : []),
                      (g = o
                        ? (function (e, t) {
                            var n = e.focusedValue;
                            if (-1 < (e = e.selectValue.indexOf(n))) {
                              if (-1 < t.indexOf(n)) return n;
                              if (e < t.length) return t[e];
                            }
                            return null;
                          })(t, h)
                        : null),
                      (d = u),
                      (o =
                        (c = (c = t).focusedOption) && -1 < d.indexOf(c)
                          ? c
                          : d[0]),
                      (f = {
                        selectValue: h,
                        focusedOption: o,
                        focusedOptionId: xs(l, o),
                        focusableOptionsWithIds: l,
                        focusedValue: g,
                        clearFocusValueOnUpdate: !1,
                      })),
                    null != r && e !== n
                      ? { inputIsHidden: r, inputIsHiddenAfterUpdate: void 0 }
                      : {}),
                  t = a,
                  c = i && s;
                return (
                  i &&
                    !c &&
                    ((t = {
                      value: Qa(p, h, h[0] || null),
                      options: h,
                      action: "initial-input-focus",
                    }),
                    (c = !s)),
                  "initial-input-focus" === (null == a ? void 0 : a.action) &&
                    (t = null),
                  Ee(
                    Ee(Ee({}, f), u),
                    {},
                    { prevProps: e, ariaSelection: t, prevWasFocused: c }
                  )
                );
              },
            },
          ]
        ),
        r
      );
    })(G.Component);
  Gs.defaultProps = n;
  var Ts = G.forwardRef(function (e, t) {
    (o = void 0 === (o = (n = e).defaultInputValue) ? "" : o),
      (v = void 0 !== (v = e.defaultMenuIsOpen) && v),
      (r = void 0 === (r = e.defaultValue) ? null : r),
      (a = e.inputValue),
      (i = e.menuIsOpen),
      (s = e.onChange),
      (c = e.onInputChange),
      (l = e.onMenuClose),
      (u = e.onMenuOpen),
      (d = e.value),
      (n = E(e, kn)),
      (e = (o = Ne(G.useState(void 0 !== a ? a : o), 2))[0]),
      (g = o[1]),
      (v = (o = Ne(G.useState(void 0 !== i ? i : v), 2))[0]),
      (p = o[1]),
      (r = (o = Ne(G.useState(void 0 !== d ? d : r), 2))[0]),
      (h = o[1]),
      (o = G.useCallback(
        function (e, t) {
          "function" == typeof s && s(e, t), h(e);
        },
        [s]
      )),
      (f = G.useCallback(
        function (e, t) {
          var n;
          "function" == typeof c && (n = c(e, t)), g(void 0 !== n ? n : e);
        },
        [c]
      )),
      (m = G.useCallback(
        function () {
          "function" == typeof u && u(), p(!0);
        },
        [u]
      )),
      (b = G.useCallback(
        function () {
          "function" == typeof l && l(), p(!1);
        },
        [l]
      )),
      (a = void 0 !== a ? a : e),
      (e = void 0 !== i ? i : v),
      (i = void 0 !== d ? d : r);
    var n,
      o,
      r,
      a,
      i,
      s,
      c,
      l,
      u,
      d,
      g,
      p,
      h,
      f,
      m,
      b,
      v = Ee(
        Ee({}, n),
        {},
        {
          inputValue: a,
          menuIsOpen: e,
          onChange: o,
          onInputChange: f,
          onMenuClose: b,
          onMenuOpen: m,
          value: i,
        }
      );
    return we.createElement(Gs, T({ ref: t }, v));
  });
  const Bs = {
      accAccessibilityMenu__overlay: "_accAccessibilityMenu__overlay_1yac1_1",
      accMenu: "_accMenu_1yac1_10",
    },
    Rs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "ExpandIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z",
        })
      ),
    Ms = {
      accMenuContentBlock: "_accMenuContentBlock_ba9px_1",
      isExpanded: "_isExpanded_ba9px_19",
      isAccMenuContentActive: "_isAccMenuContentActive_ba9px_25",
      accMenuContentBlock__titleContainer:
        "_accMenuContentBlock__titleContainer_ba9px_28",
      accMenuContentBlock__title: "_accMenuContentBlock__title_ba9px_28",
      accMenuContentBlock__expendButtonContainer:
        "_accMenuContentBlock__expendButtonContainer_ba9px_46",
      accMenuContentBlock__content: "_accMenuContentBlock__content_ba9px_69",
    },
    Os = ({
      children: e,
      name: t,
      onCollapse: n,
      isExpanded: o,
      Icon: r,
      tKey: a,
      isAccMenuContentActive: i,
    }) => {
      var s = vn()["t"],
        i = Ut(Ms.accMenuContentBlock, {
          [Ms.isExpanded]: o,
          [Ms.isAccMenuContentActive]: i,
        }),
        c = () => {
          n(t);
        };
      return m.jsxs("div", {
        onClick: o ? void 0 : c,
        role: o ? void 0 : "button",
        className: i,
        tabIndex: o ? void 0 : 0,
        children: [
          o &&
            m.jsx("div", {
              className: Ms.accMenuContentBlock__expendButtonContainer,
              children: m.jsx("button", {
                onClick: c,
                children: m.jsx(Rs, {}),
              }),
            }),
          !o &&
            m.jsxs("div", {
              className: Ms.accMenuContentBlock__titleContainer,
              children: [
                m.jsx(r, {}),
                m.jsx("h3", {
                  className: Ms.accMenuContentBlock__title,
                  children: s(a),
                }),
              ],
            }),
          o &&
            m.jsx("div", {
              className: Ms.accMenuContentBlock__content,
              children: e,
            }),
        ],
      });
    },
    Vs = {
      accButton: "_accButton_gu4kw_1",
      isToggled: "_isToggled_gu4kw_18",
      isActive: "_isActive_gu4kw_26",
      accButton__title: "_accButton__title_gu4kw_29",
      accButton__icon: "_accButton__icon_gu4kw_38",
      "accButton__icon--help": "_accButton__icon--help_gu4kw_42",
      accButton__content: "_accButton__content_gu4kw_55",
      accButton__stats: "_accButton__stats_gu4kw_61",
    },
    Fs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "QuestionMarkIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z",
        })
      ),
    Ps = ({ elementType: e, children: t, ...n }) => {
      return m.jsx("button" === e ? "button" : "div", {
        tabIndex: "div" === e ? 0 : void 0,
        ...n,
        children: t,
      });
    },
    g = ({
      Icon: e,
      isToggled: t,
      isActive: n,
      children: o,
      onToggle: r,
      titleTranslationKey: a,
      elementType: i = "button",
      title: s,
      stats: c,
      styleIcon: l,
      styleTitle: u,
      className: d,
      tooltipTranslationKey: g,
    }) => {
      const p = vn()["t"],
        h = Ut(Vs.accButton + " " + d, { [Vs.isToggled]: t, [Vs.isActive]: n });
      return m.jsxs(Ps, {
        elementType: i,
        onClick: r,
        className: h,
        children: [
          c && m.jsx("span", { className: Vs.accButton__stats, children: c }),
          g
            ? m.jsxs(m.Fragment, {
                children: [
                  m.jsx(Fs, {
                    title: "Help",
                    className:
                      Vs.accButton__icon + " " + Vs["accButton__icon--help"],
                  }),
                  m.jsx("span", { "data-tooltip": p(g ?? "") ?? void 0 }),
                ],
              })
            : null,
          m.jsx(e, { style: l, title: s, className: Vs.accButton__icon }),
          m.jsx("h2", {
            style: u,
            className: Vs.accButton__title,
            children: p(a),
          }),
          m.jsx("div", { className: Vs.accButton__content, children: o }),
        ],
      });
    },
    Hs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "TextIncreaseIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5L.99 19zm4.42-5.61L7.44 7.6h.12l2.03 5.79H5.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z",
        })
      ),
    Ws = { accValueControl: "_accValueControl_p53sg_1" },
    _s = { accValueControlButton: "_accValueControlButton_1pw3b_1" },
    Xs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "AddIcon",
          ...e,
        },
        we.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
      ),
    Zs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "RemoveIcon",
          ...e,
        },
        we.createElement("path", { d: "M19 13H5v-2h14v2z" })
      ),
    p = ({ controlType: e, onClick: t, style: n }) => {
      let o;
      switch (e) {
        case "increase":
          o = Xs;
          break;
        case "decrease":
          o = Zs;
          break;
        default:
          o = tn;
      }
      return m.jsx("button", {
        style: n,
        onClick: t,
        className: _s.accValueControlButton,
        children: m.jsx(o, {}),
      });
    },
    js = ({ onIncrease: e, onToggle: t, onDescrease: n }) =>
      m.jsxs("div", {
        className: Ws.accValueControl,
        children: [
          m.jsx(p, { onClick: e, controlType: "increase" }),
          m.jsx(p, { onClick: t, controlType: "init" }),
          m.jsx(p, { onClick: n, controlType: "decrease" }),
        ],
      }),
    zs = ({ accState: e, onChangeAccState: t }) => {
      e = e.adjustFontSizePercentage;
      return m.jsx(g, {
        elementType: "div",
        Icon: Hs,
        titleTranslationKey: "content.adjustFontSize",
        title: "Adjust Font Size",
        stats: e + "%",
        children: m.jsx(js, {
          onIncrease: () => {
            t((e) => {
              var t = e["adjustFontSizePercentage"];
              t < 200 && (e.adjustFontSizePercentage += 10);
            });
          },
          onToggle: () => {
            t((e) => {
              e.adjustFontSizePercentage = 100;
            });
          },
          onDescrease: () => {
            t((e) => {
              var t = e["adjustFontSizePercentage"];
              10 < t && (e.adjustFontSizePercentage -= 10);
            });
          },
        }),
      });
    },
    Ds = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "SortByAlphaIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z",
        })
      ),
    Ys = "acc-dyslexia-font-style",
    Js = "acc-dyslexia-font",
    Us = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(Ys)),
          n && !e
            ? (document.documentElement.classList.add(Js),
              ((t = document.createElement("style")).id = Ys),
              (t.innerHTML = `
 @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap');

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic3-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic3-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'OpenDyslexic';
    src: url('https://acc-landing.vercel.app/fonts/OpenDyslexic-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
}


html{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important
  
}

html *, *{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important
}

html.acc-font-weight{
    font-family: OpenDyslexic,Comic Neue,Arial,Helvetica,sans-serif !important 
}


`),
              document.head.appendChild(t))
            : !n &&
              e &&
              (document.documentElement.classList.remove(Js), null != e) &&
              e.remove());
      }, [n, o]);
    },
    Qs = ({ accState: e, onChangeAccState: t }) => {
      e = e.isDyslexiaFont;
      Us(e);
      return m.jsx(g, {
        Icon: Ds,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.isDyslexiaFont = !e.isDyslexiaFont;
          });
        },
        titleTranslationKey: "content.dyslexiaFont",
        title: "Dyslexia Font",
      });
    },
    $s = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "FormatBoldIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
        })
      ),
    Ks = ({ accState: e, onChangeAccState: t }) => {
      e = e.isFontWeightBold;
      return m.jsx(g, {
        Icon: $s,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.isFontWeightBold = !e.isFontWeightBold;
          });
        },
        titleTranslationKey: "content.fontWeight",
        title: "Font Weight",
      });
    },
    qs = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "FormatAlignCenterIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z",
        })
      ),
    ec = G.memo(
      ({
        direction: n,
        accState: e,
        onChangeAccState: t,
        translationKey: o,
      }) => {
        (e = e.textAlign), (e = !!e[n]);
        return m.jsx(g, {
          Icon: qs,
          isToggled: e,
          onToggle: () => {
            t((e) => {
              var t = e.textAlign[n];
              e.textAlign[n] = t ? null : n;
            });
          },
          titleTranslationKey: o,
          title: "Text Align",
        });
      }
    ),
    tc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "LinkIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
        })
      ),
    nc = ({ accState: e, onChangeAccState: t }) => {
      e = e.highlightLinks;
      return m.jsx(g, {
        Icon: tc,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.highlightLinks = !e.highlightLinks;
          });
        },
        titleTranslationKey: "content.highlightLinks",
        title: "Highlight Links",
      });
    },
    oc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "TitleIcon",
          ...e,
        },
        we.createElement("path", { d: "M5 4v3h5.5v12h3V7H19V4z" })
      ),
    rc = ({ accState: e, onChangeAccState: t }) => {
      e = e.highlightTitles;
      return m.jsx(g, {
        Icon: oc,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.highlightTitles = !e.highlightTitles;
          });
        },
        titleTranslationKey: "content.highlightTitles",
        title: "Highlight Titles",
      });
    },
    ac = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "EightMpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M11.5 9H13v1.5h-1.5zm0-2.5H13V8h-1.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm-1-8c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zm1 3.5H17v1.5h-1.5z",
        })
      ),
    ic = ({ accState: e, onChangeAccState: t }) => {
      const n = e["letterSpacing"],
        o = !!n,
        r = () => {
          t((e) => {
            e.letterSpacing++;
          });
        },
        a = () => {
          t((e) => {
            0 < e.letterSpacing && e.letterSpacing--;
          });
        },
        i = () => {
          t((e) => {
            var t = e["letterSpacing"];
            e.letterSpacing = t ? 0 : 1;
          });
        };
      return m.jsx(g, {
        Icon: ac,
        titleTranslationKey: "content.letterSpacing",
        title: "Letter Spacing",
        stats: n ? n + "px" : void 0,
        elementType: o ? "div" : "button",
        isActive: o,
        onToggle: o ? void 0 : i,
        children: o
          ? m.jsx(js, { onIncrease: r, onToggle: i, onDescrease: a })
          : null,
      });
    },
    sc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "MenuBookIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z",
        }),
        we.createElement("path", {
          d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z",
        })
      ),
    cc = ({ accState: e, onChangeAccState: t }) => {
      const n = e["wordSpacing"],
        o = !!n,
        r = () => {
          t((e) => {
            e.wordSpacing++;
          });
        },
        a = () => {
          t((e) => {
            0 < e.wordSpacing && e.wordSpacing--;
          });
        },
        i = () => {
          t((e) => {
            var t = e["wordSpacing"];
            e.wordSpacing = t ? 0 : 1;
          });
        };
      return m.jsx(g, {
        Icon: sc,
        titleTranslationKey: "content.wordsSpacing",
        title: "Word Spacing",
        stats: n ? n + "px" : void 0,
        elementType: o ? "div" : "button",
        isActive: o,
        onToggle: o ? void 0 : i,
        children: o
          ? m.jsx(js, { onIncrease: r, onToggle: i, onDescrease: a })
          : null,
      });
    },
    lc = { accLineHeightButton: "_accLineHeightButton_n1tdk_1" },
    uc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "TextRotateUpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M3 12v1.5l11 4.75v-2.1l-2.2-.9v-5l2.2-.9v-2.1L3 12zm7 2.62-5.02-1.87L10 10.88v3.74zm8-10.37-3 3h2v12.5h2V7.25h2l-3-3z",
        })
      ),
    dc = ({ accState: e, onChangeAccState: t }) => {
      const { lineHeight: n, isLineHeight: o } = e.lineHeight,
        r = () => {
          t((e) => {
            e.lineHeight.lineHeight += 0.1;
          });
        },
        a = () => {
          t((e) => {
            0.1 < e.lineHeight.lineHeight && (e.lineHeight.lineHeight -= 0.1);
          });
        },
        i = () => {
          t((e) => {
            var t = !e.lineHeight.isLineHeight;
            (e.lineHeight.isLineHeight = t),
              (e.lineHeight.lineHeight = t ? 3 : 0);
          });
        };
      return m.jsx(g, {
        Icon: uc,
        titleTranslationKey: "content.lineHeight",
        title: "Line Height",
        elementType: o ? "div" : "button",
        isActive: o,
        onToggle: o ? void 0 : i,
        stats: n ? (100 * n).toFixed(0) + "%" : void 0,
        children: o
          ? m.jsxs("div", {
              className: lc.accLineHeightButton,
              children: [
                o && m.jsx(p, { onClick: r, controlType: "increase" }),
                m.jsx(p, { onClick: i, controlType: "init" }),
                o && m.jsx(p, { onClick: a, controlType: "decrease" }),
              ],
            })
          : null,
      });
    },
    gc = { accZoomButton: "_accZoomButton_1fl6t_1" },
    pc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "ZoomInIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
        }),
        we.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
      ),
    hc = ({ accState: e, onChangeAccState: t }) => {
      e = e.zoom.zoom;
      return m.jsx(g, {
        elementType: "div",
        Icon: pc,
        titleTranslationKey: "content.zoom",
        title: "Zoom",
        stats: e ? (100 * e).toFixed(0) + "%" : void 0,
        children: m.jsxs("div", {
          className: gc.accZoomButton,
          children: [
            m.jsx(p, {
              onClick: () => {
                t((e) => {
                  (e.zoom.isZoom = !0), (e.zoom.zoom += 0.1);
                });
              },
              controlType: "increase",
            }),
            m.jsx(p, {
              onClick: () => {
                t((e) => {
                  (e.zoom.isZoom = !1), (e.zoom.zoom = 1);
                });
              },
              controlType: "init",
            }),
            m.jsx(p, {
              onClick: () => {
                t((e) => {
                  0.1 < e.zoom.zoom &&
                    ((e.zoom.isZoom = !0), (e.zoom.zoom -= 0.1));
                });
              },
              controlType: "decrease",
            }),
          ],
        }),
      });
    },
    fc = ({ accState: e, onChangeAccState: t }) =>
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(zs, { accState: e, onChangeAccState: t }),
          m.jsx(Qs, { accState: e, onChangeAccState: t }),
          m.jsx(Ks, { accState: e, onChangeAccState: t }),
          m.jsx(ec, {
            accState: e,
            onChangeAccState: t,
            direction: "left",
            translationKey: "content.textAlignLeft",
          }),
          m.jsx(ec, {
            accState: e,
            onChangeAccState: t,
            direction: "center",
            translationKey: "content.textAlignCenter",
          }),
          m.jsx(ec, {
            accState: e,
            onChangeAccState: t,
            direction: "right",
            translationKey: "content.textAlignRight",
          }),
          m.jsx(nc, { accState: e, onChangeAccState: t }),
          m.jsx(rc, { accState: e, onChangeAccState: t }),
          m.jsx(ic, { accState: e, onChangeAccState: t }),
          m.jsx(cc, { accState: e, onChangeAccState: t }),
          m.jsx(dc, { accState: e, onChangeAccState: t }),
          m.jsx(hc, { accState: e, onChangeAccState: t }),
        ],
      }),
    mc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "VisibilitySharpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
        })
      ),
    bc = ({ accState: e, onChangeAccState: t }) => {
      e = e.isBlueLightFilter;
      return m.jsx(g, {
        Icon: mc,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.isBlueLightFilter = !e.isBlueLightFilter;
          });
        },
        titleTranslationKey: "colors.blueLightFilter",
        title: "Blue Light Filter",
      });
    },
    vc = { accBrightnessControl: "_accBrightnessControl_16gcc_1" },
    yc = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "LightModeSharpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1-6v4h2V1h-2zm0 18v4h2v-4h-2zm12-8h-4v2h4v-2zM5 11H1v2h4v-2zm11.24 6.66 2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zM3.87 5.28l2.47 2.47 1.41-1.41-2.47-2.47-1.41 1.41zm2.47 10.96-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41zM18.72 3.87l-2.47 2.47 1.41 1.41 2.47-2.47-1.41-1.41z",
        })
      );
  function Ic(e) {
    var r = we.useRef();
    return (
      (r.current = e),
      we.useCallback(function () {
        for (var e, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
          n[o] = arguments[o];
        return null == (e = r.current)
          ? void 0
          : e.call.apply(e, [r].concat(n));
      }, [])
    );
  }
  function Cc(t, e) {
    Sc(function (e) {
      if (!e) return t();
    }, e);
  }
  var xc =
      "test" !== process.env.NODE_ENV &&
      typeof window < "u" &&
      window.document &&
      window.document.createElement
        ? we.useLayoutEffect
        : we.useEffect,
    Sc = function (e, t) {
      var n = we.useRef(!0);
      xc(function () {
        return e(n.current);
      }, t),
        xc(function () {
          return (
            (n.current = !1),
            function () {
              n.current = !0;
            }
          );
        }, []);
    };
  function wc(e) {
    var n = we.useRef(!1),
      e = Ne(we.useState(e), 2),
      t = e[0],
      o = e[1];
    return (
      we.useEffect(function () {
        return (
          (n.current = !1),
          function () {
            n.current = !0;
          }
        );
      }, []),
      [
        t,
        function (e, t) {
          (t && n.current) || o(e);
        },
      ]
    );
  }
  function Ac(e) {
    return void 0 !== e;
  }
  var Ec = {},
    Nc = [];
  function kc(e, t) {
    "production" === process.env.NODE_ENV ||
      e ||
      void 0 === console ||
      ((e = Nc.reduce(function (e, t) {
        return t(e ?? "", "warning");
      }, t)) &&
        console.error("Warning: ".concat(e)));
  }
  function Lc(e, t) {
    "production" === process.env.NODE_ENV ||
      e ||
      void 0 === console ||
      ((e = Nc.reduce(function (e, t) {
        return t(e ?? "", "note");
      }, t)) &&
        console.warn("Note: ".concat(e)));
  }
  function Gc(e, t, n) {
    t || Ec[n] || (e(!1, n), (Ec[n] = !0));
  }
  function Tc(e, t) {
    Gc(kc, e, t);
  }
  function Bc(e, t, n) {
    var s = 2 < arguments.length && void 0 !== n && n,
      c = new Set();
    return (function t(n, o, e) {
      var e = 2 < arguments.length && void 0 !== e ? e : 1,
        r = c.has(n);
      if ((Tc(!r, "Warning: There may be circular references"), r)) return !1;
      if (n === o) return !0;
      if (s && 1 < e) return !1;
      c.add(n);
      var a = e + 1;
      if (Array.isArray(n)) {
        if (!Array.isArray(o) || n.length !== o.length) return !1;
        for (var i = 0; i < n.length; i++) if (!t(n[i], o[i], a)) return !1;
        return !0;
      }
      return (
        !(!n || !o || "object" !== Sn(n) || "object" !== Sn(o)) &&
        (r = Object.keys(n)).length === Object.keys(o).length &&
        r.every(function (e) {
          return t(n[e], o[e], a);
        })
      );
    })(e, t);
  }
  (Tc.preMessage = function (e) {
    Nc.push(e);
  }),
    (Tc.resetWarned = function () {
      Ec = {};
    }),
    (Tc.noteOnce = function (e, t) {
      Gc(Lc, e, t);
    });
  var Rc = we.createContext({
      min: 0,
      max: 0,
      direction: "ltr",
      step: 1,
      includedStart: 0,
      includedEnd: 0,
      tabIndex: 0,
      keyboard: !0,
      styles: {},
      classNames: {},
    }),
    R = {
      MAC_ENTER: 3,
      BACKSPACE: 8,
      TAB: 9,
      NUM_CENTER: 12,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PRINT_SCREEN: 44,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      QUESTION_MARK: 63,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      META: 91,
      WIN_KEY_RIGHT: 92,
      CONTEXT_MENU: 93,
      NUM_ZERO: 96,
      NUM_ONE: 97,
      NUM_TWO: 98,
      NUM_THREE: 99,
      NUM_FOUR: 100,
      NUM_FIVE: 101,
      NUM_SIX: 102,
      NUM_SEVEN: 103,
      NUM_EIGHT: 104,
      NUM_NINE: 105,
      NUM_MULTIPLY: 106,
      NUM_PLUS: 107,
      NUM_MINUS: 109,
      NUM_PERIOD: 110,
      NUM_DIVISION: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMLOCK: 144,
      SEMICOLON: 186,
      DASH: 189,
      EQUALS: 187,
      COMMA: 188,
      PERIOD: 190,
      SLASH: 191,
      APOSTROPHE: 192,
      SINGLE_QUOTE: 222,
      OPEN_SQUARE_BRACKET: 219,
      BACKSLASH: 220,
      CLOSE_SQUARE_BRACKET: 221,
      WIN_KEY: 224,
      MAC_FF_META: 224,
      WIN_IME: 229,
      isTextModifyingKeyEvent: function (e) {
        var t = e.keyCode;
        if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= R.F1 && t <= R.F12))
          return !1;
        switch (t) {
          case R.ALT:
          case R.CAPS_LOCK:
          case R.CONTEXT_MENU:
          case R.CTRL:
          case R.DOWN:
          case R.END:
          case R.ESC:
          case R.HOME:
          case R.INSERT:
          case R.LEFT:
          case R.MAC_FF_META:
          case R.META:
          case R.NUMLOCK:
          case R.NUM_CENTER:
          case R.PAGE_DOWN:
          case R.PAGE_UP:
          case R.PAUSE:
          case R.PRINT_SCREEN:
          case R.RIGHT:
          case R.SHIFT:
          case R.UP:
          case R.WIN_KEY:
          case R.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (e) {
        if (
          (e >= R.ZERO && e <= R.NINE) ||
          (e >= R.NUM_ZERO && e <= R.NUM_MULTIPLY) ||
          (e >= R.A && e <= R.Z) ||
          (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
        )
          return !0;
        switch (e) {
          case R.SPACE:
          case R.QUESTION_MARK:
          case R.NUM_PLUS:
          case R.NUM_MINUS:
          case R.NUM_PERIOD:
          case R.NUM_DIVISION:
          case R.SEMICOLON:
          case R.DASH:
          case R.EQUALS:
          case R.COMMA:
          case R.PERIOD:
          case R.SLASH:
          case R.APOSTROPHE:
          case R.SINGLE_QUOTE:
          case R.OPEN_SQUARE_BRACKET:
          case R.BACKSLASH:
          case R.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      },
    };
  function Mc(e, t, n) {
    return (e - t) / (n - t);
  }
  function Oc(e, t, n, o) {
    var r = Mc(t, n, o),
      a = {};
    switch (e) {
      case "rtl":
        (a.right = "".concat(100 * r, "%")), (a.transform = "translateX(50%)");
        break;
      case "btt":
        (a.bottom = "".concat(100 * r, "%")), (a.transform = "translateY(50%)");
        break;
      case "ttb":
        (a.top = "".concat(100 * r, "%")), (a.transform = "translateY(-50%)");
        break;
      default:
        (a.left = "".concat(100 * r, "%")), (a.transform = "translateX(-50%)");
    }
    return a;
  }
  function Vc(e, t) {
    return Array.isArray(e) ? e[t] : e;
  }
  var Fc = [
      "prefixCls",
      "value",
      "valueIndex",
      "onStartMove",
      "style",
      "render",
      "dragging",
      "onOffsetChange",
      "onChangeComplete",
    ],
    Pc = we.forwardRef(function (e, t) {
      function n(e) {
        m || i(e, a);
      }
      var o = e.prefixCls,
        r = e.value,
        a = e.valueIndex,
        i = e.onStartMove,
        s = e.style,
        c = e.render,
        l = e.dragging,
        u = e.onOffsetChange,
        d = e.onChangeComplete,
        e = E(e, Fc),
        g = we.useContext(Rc),
        p = g.min,
        h = g.max,
        f = g.direction,
        m = g.disabled,
        b = g.keyboard,
        v = g.range,
        y = g.tabIndex,
        I = g.ariaLabelForHandle,
        C = g.ariaLabelledByForHandle,
        x = g.ariaValueTextFormatterForHandle,
        S = g.styles,
        g = g.classNames,
        w = "".concat(o, "-handle"),
        A = Oc(f, r, p, h),
        w = we.createElement(
          "div",
          T(
            {
              ref: t,
              className: Ut(
                w,
                (Ae((t = {}), "".concat(w, "-").concat(a + 1), v),
                Ae(t, "".concat(w, "-dragging"), l),
                t),
                g.handle
              ),
              style: Ee(Ee(Ee({}, A), s), S.handle),
              onMouseDown: n,
              onTouchStart: n,
              onKeyDown: function (e) {
                if (!m && b) {
                  var t = null;
                  switch (e.which || e.keyCode) {
                    case R.LEFT:
                      t = "ltr" === f || "btt" === f ? -1 : 1;
                      break;
                    case R.RIGHT:
                      t = "ltr" === f || "btt" === f ? 1 : -1;
                      break;
                    case R.UP:
                      t = "ttb" !== f ? 1 : -1;
                      break;
                    case R.DOWN:
                      t = "ttb" !== f ? -1 : 1;
                      break;
                    case R.HOME:
                      t = "min";
                      break;
                    case R.END:
                      t = "max";
                      break;
                    case R.PAGE_UP:
                      t = 2;
                      break;
                    case R.PAGE_DOWN:
                      t = -2;
                  }
                  null !== t && (e.preventDefault(), u(t, a));
                }
              },
              onKeyUp: function (e) {
                switch (e.which || e.keyCode) {
                  case R.LEFT:
                  case R.RIGHT:
                  case R.UP:
                  case R.DOWN:
                  case R.HOME:
                  case R.END:
                  case R.PAGE_UP:
                  case R.PAGE_DOWN:
                    null != d && d();
                }
              },
              tabIndex: m ? null : Vc(y, a),
              role: "slider",
              "aria-valuemin": p,
              "aria-valuemax": h,
              "aria-valuenow": r,
              "aria-disabled": m,
              "aria-label": Vc(I, a),
              "aria-labelledby": Vc(C, a),
              "aria-valuetext": null == (v = Vc(x, a)) ? void 0 : v(r),
              "aria-orientation":
                "ltr" === f || "rtl" === f ? "horizontal" : "vertical",
            },
            e
          )
        );
      return (w = c
        ? c(w, { index: a, prefixCls: o, value: r, dragging: l })
        : w);
    }),
    Hc =
      ("production" !== process.env.NODE_ENV && (Pc.displayName = "Handle"),
      [
        "prefixCls",
        "style",
        "onStartMove",
        "onOffsetChange",
        "values",
        "handleRender",
        "draggingIndex",
      ]),
    Wc = we.forwardRef(function (e, t) {
      var n = e.prefixCls,
        o = e.style,
        r = e.onStartMove,
        a = e.onOffsetChange,
        i = e.values,
        s = e.handleRender,
        c = e.draggingIndex,
        l = E(e, Hc),
        u = we.useRef({});
      return (
        we.useImperativeHandle(t, function () {
          return {
            focus: function (e) {
              null != (e = u.current[e]) && e.focus();
            },
          };
        }),
        we.createElement(
          we.Fragment,
          null,
          i.map(function (e, t) {
            return we.createElement(
              Pc,
              T(
                {
                  ref: function (e) {
                    e ? (u.current[t] = e) : delete u.current[t];
                  },
                  dragging: c === t,
                  prefixCls: n,
                  style: Vc(o, t),
                  key: t,
                  value: e,
                  valueIndex: t,
                  onStartMove: r,
                  onOffsetChange: a,
                  render: s,
                },
                l
              )
            );
          })
        )
      );
    });
  function _c(e) {
    e = "touches" in e ? e.touches[0] : e;
    return { pageX: e.pageX, pageY: e.pageY };
  }
  function Xc(u, d, a, i, s, c, t, g, l) {
    function p(n, e) {
      m.some(function (e, t) {
        return e !== n[t];
      }) && (void 0 !== e && h(e), b(n), t(n));
    }
    function e(e, t) {
      var n, o, r;
      -1 === e
        ? ((o = v[0]),
          (r = v[v.length - 1]),
          (r = s - r),
          (n = t * (s - i)),
          (n = Math.max(n, i - o)),
          (n = Math.min(n, r)),
          (n = c(o + n) - o),
          (r = v.map(function (e) {
            return e + n;
          })),
          p(r))
        : ((o = (s - i) * t),
          ((r = ke(m))[e] = v[e]),
          (t = l(r, o, e, "dist")),
          p(t.values, t.value));
    }
    var n = Ne(we.useState(null), 2),
      o = n[0],
      h = n[1],
      n = Ne(we.useState(-1), 2),
      r = n[0],
      f = n[1],
      n = Ne(we.useState(a), 2),
      m = n[0],
      b = n[1],
      n = Ne(we.useState(a), 2),
      v = n[0],
      y = n[1],
      I = we.useRef(null),
      C = we.useRef(null),
      x =
        (we.useEffect(
          function () {
            -1 === r && b(a);
          },
          [a, r]
        ),
        we.useEffect(function () {
          return function () {
            document.removeEventListener("mousemove", I.current),
              document.removeEventListener("mouseup", C.current),
              document.removeEventListener("touchmove", I.current),
              document.removeEventListener("touchend", C.current);
          };
        }, []),
        we.useRef(e)),
      n =
        ((x.current = e),
        we.useMemo(
          function () {
            var e = ke(a).sort(function (e, t) {
                return e - t;
              }),
              n = ke(m).sort(function (e, t) {
                return e - t;
              });
            return e.every(function (e, t) {
              return e === n[t];
            })
              ? m
              : a;
          },
          [a, m]
        ));
    return [
      r,
      o,
      n,
      function (e, s, t) {
        e.stopPropagation();
        function n(e) {
          e.preventDefault();
          var t,
            n = (e = _c(e)).pageX,
            e = e.pageY,
            o = n - c,
            r = e - l,
            a = (n = u.current.getBoundingClientRect()).width,
            i = n.height;
          switch (d) {
            case "btt":
              t = -r / i;
              break;
            case "ttb":
              t = r / i;
              break;
            case "rtl":
              t = -o / a;
              break;
            default:
              t = o / a;
          }
          x.current(s, t);
        }
        function o(e) {
          e.preventDefault(),
            document.removeEventListener("mouseup", o),
            document.removeEventListener("mousemove", n),
            document.removeEventListener("touchend", o),
            document.removeEventListener("touchmove", n),
            (I.current = null),
            (C.current = null),
            f(-1),
            g();
        }
        var t = t || a,
          r = t[s],
          r = (f(s), h(r), y(t), _c(e)),
          c = r.pageX,
          l = r.pageY;
        document.addEventListener("mouseup", o),
          document.addEventListener("mousemove", n),
          document.addEventListener("touchend", o),
          document.addEventListener("touchmove", n),
          (I.current = n),
          (C.current = o);
      },
    ];
  }
  function Zc(g, p, h, f, b, v) {
    function y(e, t, n) {
      var o = e[n],
        e = x(
          e,
          t,
          n,
          3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : "unit"
        );
      return { value: e, changed: e !== o };
    }
    function I(e) {
      return (null === v && 0 === e) || ("number" == typeof v && e < v);
    }
    var a = we.useCallback(
        function (e) {
          isFinite(e);
          e = Math.min(p, e);
          return Math.max(g, e);
        },
        [g, p]
      ),
      m = we.useCallback(
        function (e) {
          var t;
          return null !== h &&
            ((e = g + Math.round((a(e) - g) / h) * h),
            (t = function (e) {
              return (String(e).split(".")[1] || "").length;
            }),
            (t = Math.max(t(h), t(p), t(g))),
            (e = Number(e.toFixed(t))),
            g <= e) &&
            e <= p
            ? e
            : null;
        },
        [h, g, p, a]
      ),
      C = we.useCallback(
        function (e) {
          var n = a(e),
            t = f.map(function (e) {
              return e.value;
            }),
            o = (null !== h && t.push(m(e)), t.push(g, p), t[0]),
            r = p - g;
          return (
            t.forEach(function (e) {
              var t = Math.abs(n - e);
              t <= r && ((o = e), (r = t));
            }),
            o
          );
        },
        [g, p, f, h, a, m]
      ),
      x = function e(t, n, o) {
        var r,
          a,
          i,
          s,
          c,
          l,
          u,
          d =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : "unit";
        return "number" == typeof n
          ? ((u = (r = t[o]) + n),
            (a = []),
            f.forEach(function (e) {
              a.push(e.value);
            }),
            a.push(g, p),
            a.push(m(r)),
            (i = 0 < n ? 1 : -1),
            "unit" === d ? a.push(m(r + i * h)) : a.push(m(u)),
            (a = a
              .filter(function (e) {
                return null !== e;
              })
              .filter(function (e) {
                return n < 0 ? e <= r : r <= e;
              })),
            "unit" === d &&
              (a = a.filter(function (e) {
                return e !== r;
              })),
            (s = "unit" === d ? r : u),
            (c = a[0]),
            (l = Math.abs(c - s)),
            a.forEach(function (e) {
              var t = Math.abs(e - s);
              t < l && ((c = e), (l = t));
            }),
            void 0 === c
              ? n < 0
                ? g
                : p
              : "dist" !== d && 1 < Math.abs(n)
              ? (((u = ke(t))[o] = c), e(u, n - i, o, d))
              : c)
          : "min" === n
          ? g
          : "max" === n
          ? p
          : void 0;
      };
    return [
      C,
      function (e, t, n) {
        var o =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : "unit",
          r = e.map(C),
          e = r[n],
          t = x(r, t, n, o);
        if (((r[n] = t), !1 === b)) {
          o = v || 0;
          0 < n && r[n - 1] !== e && (r[n] = Math.max(r[n], r[n - 1] + o)),
            n < r.length - 1 &&
              r[n + 1] !== e &&
              (r[n] = Math.min(r[n], r[n + 1] - o));
        } else if ("number" == typeof v || null === v) {
          for (var a = n + 1; a < r.length; a += 1)
            for (var i = !0; I(r[a] - r[a - 1]) && i; ) {
              var s = y(r, 1, a);
              (r[a] = s.value), (i = s.changed);
            }
          for (var c = n; 0 < c; --c)
            for (var l = !0; I(r[c] - r[c - 1]) && l; ) {
              var u = y(r, -1, c - 1);
              (r[c - 1] = u.value), (l = u.changed);
            }
          for (var d = r.length - 1; 0 < d; --d)
            for (var g = !0; I(r[d] - r[d - 1]) && g; ) {
              var p = y(r, -1, d - 1);
              (r[d - 1] = p.value), (g = p.changed);
            }
          for (var h = 0; h < r.length - 1; h += 1)
            for (var f = !0; I(r[h + 1] - r[h]) && f; ) {
              var m = y(r, 1, h + 1);
              (r[h + 1] = m.value), (f = m.changed);
            }
        }
        return { value: r[n], values: r };
      },
    ];
  }
  function jc(e) {
    var t = e.prefixCls,
      n = e.style,
      o = e.children,
      r = e.value,
      a = e.onClick,
      e = we.useContext(Rc),
      i = e.min,
      s = e.max,
      c = e.direction,
      l = e.includedStart,
      u = e.includedEnd,
      e = e.included,
      t = "".concat(t, "-text"),
      c = Oc(c, r, i, s);
    return we.createElement(
      "span",
      {
        className: Ut(
          t,
          Ae({}, "".concat(t, "-active"), e && l <= r && r <= u)
        ),
        style: Ee(Ee({}, c), n),
        onMouseDown: function (e) {
          e.stopPropagation();
        },
        onClick: function () {
          a(r);
        },
      },
      o
    );
  }
  function zc(e) {
    var t = e.prefixCls,
      n = e.marks,
      o = e.onClick,
      r = "".concat(t, "-mark");
    return n.length
      ? we.createElement(
          "div",
          { className: r },
          n.map(function (e) {
            var t = e.value,
              n = e.style,
              e = e.label;
            return we.createElement(
              jc,
              { key: t, prefixCls: r, style: n, value: t, onClick: o },
              e
            );
          })
        )
      : null;
  }
  function Dc(e) {
    var t = e.prefixCls,
      n = e.value,
      o = e.style,
      e = e.activeStyle,
      r = we.useContext(Rc),
      a = r.min,
      i = r.max,
      s = r.direction,
      c = r.included,
      l = r.includedStart,
      r = r.includedEnd,
      t = "".concat(t, "-dot"),
      c = c && l <= n && n <= r,
      l = Ee(Ee({}, Oc(s, n, a, i)), "function" == typeof o ? o(n) : o);
    return (
      c && (l = Ee(Ee({}, l), "function" == typeof e ? e(n) : e)),
      we.createElement("span", {
        className: Ut(t, Ae({}, "".concat(t, "-active"), c)),
        style: l,
      })
    );
  }
  function Yc(e) {
    var t = e.prefixCls,
      n = e.marks,
      o = e.dots,
      r = e.style,
      a = e.activeStyle,
      e = we.useContext(Rc),
      i = e.min,
      s = e.max,
      c = e.step,
      e = we.useMemo(
        function () {
          var t = new Set();
          if (
            (n.forEach(function (e) {
              t.add(e.value);
            }),
            o && null !== c)
          )
            for (var e = i; e <= s; ) t.add(e), (e += c);
          return Array.from(t);
        },
        [i, s, c, o, n]
      );
    return we.createElement(
      "div",
      { className: "".concat(t, "-step") },
      e.map(function (e) {
        return we.createElement(Dc, {
          prefixCls: t,
          key: e,
          value: e,
          style: r,
          activeStyle: a,
        });
      })
    );
  }
  function Jc(e) {
    function t(e) {
      !g && s && s(e, -1);
    }
    var n = e.prefixCls,
      o = e.style,
      r = e.start,
      a = e.end,
      i = e.index,
      s = e.onStartMove,
      e = e.replaceCls,
      c = we.useContext(Rc),
      l = c.direction,
      u = c.min,
      d = c.max,
      g = c.disabled,
      p = c.range,
      c = c.classNames,
      h = "".concat(n, "-track"),
      f = Mc(r, u, d),
      m = Mc(a, u, d),
      b = {};
    switch (l) {
      case "rtl":
        (b.right = "".concat(100 * f, "%")),
          (b.width = "".concat(100 * m - 100 * f, "%"));
        break;
      case "btt":
        (b.bottom = "".concat(100 * f, "%")),
          (b.height = "".concat(100 * m - 100 * f, "%"));
        break;
      case "ttb":
        (b.top = "".concat(100 * f, "%")),
          (b.height = "".concat(100 * m - 100 * f, "%"));
        break;
      default:
        (b.left = "".concat(100 * f, "%")),
          (b.width = "".concat(100 * m - 100 * f, "%"));
    }
    a =
      e ||
      Ut(
        h,
        (Ae((r = {}), "".concat(h, "-").concat(i + 1), null !== i && p),
        Ae(r, "".concat(n, "-track-draggable"), s),
        r),
        c.track
      );
    return we.createElement("div", {
      className: a,
      style: Ee(Ee({}, b), o),
      onMouseDown: t,
      onTouchStart: t,
    });
  }
  function Uc(e) {
    var o = e.prefixCls,
      r = e.style,
      a = e.values,
      i = e.startPoint,
      s = e.onStartMove,
      e = we.useContext(Rc),
      t = e.included,
      c = e.range,
      l = e.min,
      u = e.styles,
      e = e.classNames,
      n = we.useMemo(
        function () {
          var e, t;
          if (!c)
            return 0 === a.length
              ? []
              : ((e = i ?? l),
                (t = a[0]),
                [{ start: Math.min(e, t), end: Math.max(e, t) }]);
          for (var n = [], o = 0; o < a.length - 1; o += 1)
            n.push({ start: a[o], end: a[o + 1] });
          return n;
        },
        [a, c, i, l]
      ),
      d = null;
    return (
      (e.tracks || u.tracks) &&
        (d = we.createElement(Jc, {
          index: null,
          prefixCls: o,
          start: n[0].start,
          end: n[n.length - 1].end,
          replaceCls: Ut(e.tracks, "".concat(o, "-tracks")),
          style: u.tracks,
        })),
      t
        ? we.createElement(
            we.Fragment,
            null,
            d,
            n.map(function (e, t) {
              var n = e.start,
                e = e.end;
              return we.createElement(Jc, {
                index: t,
                prefixCls: o,
                style: Ee(Ee({}, Vc(r, t)), u.track),
                start: n,
                end: e,
                key: t,
                onStartMove: s,
              });
            })
          )
        : null
    );
  }
  "production" !== process.env.NODE_ENV && (Wc.displayName = "Handles");
  var Qc = we.forwardRef(function (e, V) {
    function F() {
      null != Q && Q(M(R.current)),
        Tc(
          !Q,
          "[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."
        ),
        null != $ && $(M(R.current));
    }
    function P(n, e) {
      var o, r, t;
      g ||
        ((o = 0),
        (r = k - N),
        B.forEach(function (e, t) {
          e = Math.abs(n - e);
          e <= r && ((r = e), (o = t));
        }),
        ((t = ke(B))[o] = n),
        m && !B.length && void 0 === b && t.push(n),
        null != v && v(M(t)),
        fe(t),
        e && ve(e, o, t));
    }
    function H(e, t) {
      ve(e, t), null != v && v(M(R.current));
    }
    var t,
      n,
      o,
      r,
      a,
      i,
      W,
      s,
      _,
      c = e.prefixCls,
      c = void 0 === c ? "rc-slider" : c,
      X = e.className,
      Z = e.style,
      l = e.classNames,
      u = e.styles,
      d = e.disabled,
      g = void 0 !== d && d,
      d = e.keyboard,
      j = void 0 === d || d,
      z = e.autoFocus,
      d = e.onFocus,
      D = e.onBlur,
      p = e.min,
      Y = void 0 === p ? 0 : p,
      p = e.max,
      J = void 0 === p ? 100 : p,
      p = e.step,
      h = void 0 === p ? 1 : p,
      p = e.value,
      f = e.defaultValue,
      m = e.range,
      b = e.count,
      U = e.onChange,
      v = e.onBeforeChange,
      Q = e.onAfterChange,
      $ = e.onChangeComplete,
      y = e.allowCross,
      y = void 0 === y || y,
      I = e.pushable,
      C = void 0 !== I && I,
      K = e.draggableTrack,
      q = e.reverse,
      x = e.vertical,
      I = e.included,
      ee = void 0 === I || I,
      I = e.startPoint,
      te = e.trackStyle,
      ne = e.handleStyle,
      oe = e.railStyle,
      re = e.dotStyle,
      ae = e.activeDotStyle,
      ie = e.marks,
      se = e.dots,
      ce = e.handleRender,
      S = e.tabIndex,
      le = void 0 === S ? 0 : S,
      ue = e.ariaLabelForHandle,
      de = e.ariaLabelledByForHandle,
      ge = e.ariaValueTextFormatterForHandle,
      w = we.useRef(),
      A = we.useRef(),
      E = we.useMemo(
        function () {
          return x ? (q ? "ttb" : "btt") : q ? "rtl" : "ltr";
        },
        [q, x]
      ),
      N = we.useMemo(
        function () {
          return isFinite(Y) ? Y : 0;
        },
        [Y]
      ),
      k = we.useMemo(
        function () {
          return isFinite(J) ? J : 100;
        },
        [J]
      ),
      L = we.useMemo(
        function () {
          return null !== h && h <= 0 ? 1 : h;
        },
        [h]
      ),
      S = we.useMemo(
        function () {
          return "boolean" == typeof C ? !!C && L : 0 <= C && C;
        },
        [C, L]
      ),
      e = we.useMemo(
        function () {
          return Object.keys(ie || {})
            .map(function (e) {
              var t = ie[e],
                e = { value: Number(e) };
              return (
                t &&
                "object" === Sn(t) &&
                !we.isValidElement(t) &&
                ("label" in t || "style" in t)
                  ? ((e.style = t.style), (e.label = t.label))
                  : (e.label = t),
                e
              );
            })
            .filter(function (e) {
              e = e.label;
              return e || "number" == typeof e;
            })
            .sort(function (e, t) {
              return e.value - t.value;
            });
        },
        [ie]
      ),
      y = Ne(Zc(N, k, L, e, y, S), 2),
      G = y[0],
      pe = y[1],
      p =
        ((t = f),
        (n = (S = (S = { value: p }) || {}).defaultValue),
        (o = S.value),
        (y = S.onChange),
        (S = S.postState),
        (r = (f = Ne(
          wc(function () {
            return Ac(o)
              ? o
              : Ac(n)
              ? "function" == typeof n
                ? n()
                : n
              : "function" == typeof t
              ? t()
              : t;
          }),
          2
        ))[0]),
        (a = f[1]),
        (i = void 0 !== o ? o : r),
        (f = S ? S(i) : i),
        (W = Ic(y)),
        (s = (S = Ne(wc([i]), 2))[0]),
        (_ = S[1]),
        Cc(
          function () {
            var e = s[0];
            r !== e && W(r, e);
          },
          [s]
        ),
        Cc(
          function () {
            Ac(o) || a(o);
          },
          [o]
        ),
        [
          f,
          Ic(function (e, t) {
            a(e, t), _([i], t);
          }),
        ]),
      y = Ne(p, 2),
      T = y[0],
      he = y[1],
      B = we.useMemo(
        function () {
          var e = null == T ? [] : Array.isArray(T) ? T : [T],
            t = Ne(e, 1)[0],
            n = null === T ? [] : [void 0 === t ? N : t];
          if (m) {
            if (((n = ke(e)), b || void 0 === T))
              for (
                var o, r = 0 <= b ? b + 1 : 2, n = n.slice(0, r);
                n.length < r;

              )
                n.push(null != (o = n[n.length - 1]) ? o : N);
            n.sort(function (e, t) {
              return e - t;
            });
          }
          return (
            n.forEach(function (e, t) {
              n[t] = G(e);
            }),
            n
          );
        },
        [T, m, N, b, G]
      ),
      R = we.useRef(B),
      M =
        ((R.current = B),
        function (e) {
          return m ? e : e[0];
        }),
      fe = function (e) {
        e = ke(e).sort(function (e, t) {
          return e - t;
        });
        U && !Bc(e, R.current, !0) && U(M(e)), he(e);
      },
      S = Ne(Xc(A, E, B, N, k, G, fe, F, pe), 4),
      f = S[0],
      me = S[1],
      be = S[2],
      ve = S[3],
      p = Ne(we.useState(null), 2),
      ye = p[0],
      Ie = p[1],
      y =
        (we.useEffect(
          function () {
            var e;
            null !== ye && 0 <= (e = B.indexOf(ye)) && w.current.focus(e),
              Ie(null);
          },
          [ye]
        ),
        we.useMemo(
          function () {
            return K && null === L
              ? ("production" !== process.env.NODE_ENV &&
                  Tc(
                    !1,
                    "`draggableTrack` is not supported when `step` is `null`."
                  ),
                !1)
              : K;
          },
          [K, L]
        )),
      Ce = -1 !== f,
      O =
        (we.useEffect(
          function () {
            var e;
            Ce || ((e = B.lastIndexOf(me)), w.current.focus(e));
          },
          [Ce]
        ),
        we.useMemo(
          function () {
            return ke(be).sort(function (e, t) {
              return e - t;
            });
          },
          [be]
        )),
      S = Ne(
        we.useMemo(
          function () {
            return m ? [O[0], O[O.length - 1]] : [N, O[0]];
          },
          [O, m, N]
        ),
        2
      ),
      xe = S[0],
      Se = S[1],
      p =
        (we.useImperativeHandle(V, function () {
          return {
            focus: function () {
              w.current.focus(0);
            },
            blur: function () {
              var e = document.activeElement;
              A.current.contains(e) && null != e && e.blur();
            },
          };
        }),
        we.useEffect(function () {
          z && w.current.focus(0);
        }, []),
        we.useMemo(
          function () {
            return {
              min: N,
              max: k,
              direction: E,
              disabled: g,
              keyboard: j,
              step: L,
              included: ee,
              includedStart: xe,
              includedEnd: Se,
              range: m,
              tabIndex: le,
              ariaLabelForHandle: ue,
              ariaLabelledByForHandle: de,
              ariaValueTextFormatterForHandle: ge,
              styles: u || {},
              classNames: l || {},
            };
          },
          [N, k, E, g, j, L, ee, xe, Se, m, le, ue, de, ge, u, l]
        ));
    return we.createElement(
      Rc.Provider,
      { value: p },
      we.createElement(
        "div",
        {
          ref: A,
          className: Ut(
            c,
            X,
            (Ae((S = {}), "".concat(c, "-disabled"), g),
            Ae(S, "".concat(c, "-vertical"), x),
            Ae(S, "".concat(c, "-horizontal"), !x),
            Ae(S, "".concat(c, "-with-marks"), e.length),
            S)
          ),
          style: Z,
          onMouseDown: function (e) {
            e.preventDefault();
            var t,
              n = A.current.getBoundingClientRect(),
              o = n.width,
              r = n.height,
              a = n.left,
              i = n.top,
              s = n.bottom,
              c = n.right,
              l = e.clientX,
              u = e.clientY;
            switch (E) {
              case "btt":
                t = (s - u) / r;
                break;
              case "ttb":
                t = (u - i) / r;
                break;
              case "rtl":
                t = (c - l) / o;
                break;
              default:
                t = (l - a) / o;
            }
            P(G(N + t * (k - N)), e);
          },
        },
        we.createElement("div", {
          className: Ut("".concat(c, "-rail"), null == l ? void 0 : l.rail),
          style: Ee(Ee({}, oe), null == u ? void 0 : u.rail),
        }),
        we.createElement(Uc, {
          prefixCls: c,
          style: te,
          values: O,
          startPoint: I,
          onStartMove: y ? H : null,
        }),
        we.createElement(Yc, {
          prefixCls: c,
          marks: e,
          dots: se,
          style: re,
          activeStyle: ae,
        }),
        we.createElement(Wc, {
          ref: w,
          prefixCls: c,
          style: ne,
          values: be,
          draggingIndex: f,
          onStartMove: H,
          onOffsetChange: function (e, t) {
            g ||
              ((e = pe(B, e, t)),
              null != v && v(M(B)),
              fe(e.values),
              Ie(e.value));
          },
          onFocus: d,
          onBlur: D,
          handleRender: ce,
          onChangeComplete: F,
        }),
        we.createElement(zc, { prefixCls: c, marks: e, onClick: P })
      )
    );
  });
  "production" !== process.env.NODE_ENV && (Qc.displayName = "Slider");
  const $c = { accRcSlider: "_accRcSlider_dhokk_1" },
    Kc = ({ range: e, min: t, max: n, value: o, onChange: r, vertical: a }) =>
      m.jsx(Qc, {
        className: $c.accRcSlider,
        range: e,
        min: t,
        max: n,
        value: o,
        vertical: a,
        onChange: r,
      }),
    qc = ({ accState: e, onChangeAccState: n }) => {
      const { isBrightness: t, brightness: o } = e.brightness,
        r = () => {
          n((e) => {
            var t = e["brightness"];
            t.brightness < 500 && e.brightness.brightness++;
          });
        },
        a = () => {
          n((e) => {
            var t = e["brightness"];
            100 < t.brightness && e.brightness.brightness--;
          });
        },
        i = () => {
          n((e) => {
            var t = !e.brightness.isBrightness;
            (e.brightness.isBrightness = t),
              (e.brightness.brightness = t ? 150 : 0);
          });
        };
      return m.jsxs(g, {
        Icon: yc,
        titleTranslationKey: "colors.brightnessControl",
        title: "Brightness Control",
        elementType: t ? "div" : "button",
        isActive: t,
        onToggle: t ? void 0 : i,
        stats: t ? o + "%" : void 0,
        children: [
          t
            ? m.jsxs("div", {
                className: vc.accBrightnessControl,
                children: [
                  m.jsx(p, { onClick: r, controlType: "increase" }),
                  m.jsx(p, { onClick: i, controlType: "init" }),
                  m.jsx(p, { onClick: a, controlType: "decrease" }),
                ],
              })
            : null,
          t &&
            m.jsx(Kc, {
              range: !0,
              min: 150,
              max: 500,
              value: o,
              onChange: (t) => {
                n((e) => {
                  e.brightness.brightness = t;
                });
              },
            }),
        ],
      });
    },
    el = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium _accButton__icon_1dz30_31 css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "Brightness4SharpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z",
        })
      ),
    tl = ({ accState: e, onChangeAccState: t }) => {
      return m.jsx(g, {
        Icon: el,
        isToggled: e.isDarkContrast,
        onToggle: () => {
          t((e) => {
            e.isDarkContrast = !e.isDarkContrast;
          });
        },
        titleTranslationKey: "colors.darkContrast",
        title: "Dark Contrast",
      });
    },
    nl = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "ContrastSharpIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z",
        })
      ),
    ol = ({ accState: e, onChangeAccState: n }) => {
      const { isHighContrast: t, contrast: o } = e.highContrast,
        r = () => {
          n((e) => {
            var t = e["highContrast"];
            t.contrast < 200 && e.highContrast.contrast++;
          });
        },
        a = () => {
          n((e) => {
            var t = e["highContrast"];
            100 < t.contrast && e.highContrast.contrast--;
          });
        },
        i = () => {
          n((e) => {
            var t = !e.highContrast.isHighContrast;
            (e.highContrast.isHighContrast = t),
              (e.highContrast.contrast = t ? 125 : 0);
          });
        };
      return m.jsxs(g, {
        Icon: nl,
        titleTranslationKey: "colors.highContrast",
        title: "High Contrast",
        stats: t ? o + "%" : void 0,
        elementType: t ? "div" : "button",
        isActive: t,
        onToggle: t ? void 0 : i,
        children: [
          t ? m.jsx(js, { onIncrease: r, onToggle: i, onDescrease: a }) : null,
          t &&
            m.jsx(Kc, {
              range: !0,
              min: 125,
              max: 200,
              value: o,
              onChange: (t) => {
                n((e) => {
                  e.highContrast.contrast = t;
                });
              },
            }),
        ],
      });
    },
    rl = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "InvertColorsIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14L12 4.81M6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2 6.35 7.56z",
        })
      ),
    al = ({ accState: e, onChangeAccState: n }) => {
      const { isHighSaturation: t, saturation: o } = e.highSaturation,
        r = () => {
          n((e) => {
            var t = e["highSaturation"];
            t.saturation < 800 && e.highSaturation.saturation++;
          });
        },
        a = () => {
          n((e) => {
            var t = e["highSaturation"];
            200 < t.saturation && e.highSaturation.saturation--;
          });
        },
        i = () => {
          n((e) => {
            var t = !e.highSaturation.isHighSaturation;
            (e.highSaturation.isHighSaturation = t),
              (e.highSaturation.saturation = t ? 200 : 0);
          });
        };
      return m.jsxs(g, {
        Icon: rl,
        titleTranslationKey: "colors.highSaturation",
        title: "High Saturation",
        stats: t ? o + "%" : void 0,
        elementType: t ? "div" : "button",
        isActive: t,
        onToggle: t ? void 0 : i,
        children: [
          t ? m.jsx(js, { onIncrease: r, onToggle: i, onDescrease: a }) : null,
          t &&
            m.jsx(Kc, {
              range: !0,
              min: 200,
              max: 800,
              value: o,
              onChange: (t) => {
                n((e) => {
                  e.highSaturation.saturation = t;
                });
              },
            }),
        ],
      });
    },
    il = ({ accState: e, onChangeAccState: t }) => {
      return m.jsx(g, {
        Icon: el,
        isToggled: e.isLightContrast,
        onToggle: () => {
          t((e) => {
            e.isLightContrast = !e.isLightContrast;
          });
        },
        titleTranslationKey: "colors.lightContrast",
        title: "Light Contrast",
      });
    },
    sl = ({ accState: e, onChangeAccState: n }) => {
      const { isLowSaturation: t, saturation: o } = e.lowSaturation,
        r = () => {
          n((e) => {
            var t = e["lowSaturation"];
            t.saturation < 199 && e.lowSaturation.saturation++;
          });
        },
        a = () => {
          n((e) => {
            var t = e["lowSaturation"];
            50 < t.saturation && e.lowSaturation.saturation--;
          });
        },
        i = () => {
          n((e) => {
            var t = !e.lowSaturation.isLowSaturation;
            (e.lowSaturation.isLowSaturation = t),
              (e.lowSaturation.saturation = t ? 50 : 0);
          });
        };
      return m.jsxs(g, {
        Icon: rl,
        titleTranslationKey: "colors.lowSaturation",
        title: "Low Saturation",
        stats: t ? o + "%" : void 0,
        styleIcon: { transform: "rotate(180deg)" },
        elementType: t ? "div" : "button",
        isActive: t,
        onToggle: t ? void 0 : i,
        children: [
          t ? m.jsx(js, { onIncrease: r, onToggle: i, onDescrease: a }) : null,
          t &&
            m.jsx(Kc, {
              range: !0,
              min: 50,
              max: 199,
              value: o,
              onChange: (t) => {
                n((e) => {
                  e.lowSaturation.saturation = t;
                });
              },
            }),
        ],
      });
    },
    cl = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "MonochromePhotosIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-8v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h8v12zm-3-6c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2z",
        })
      ),
    ll = ({ accState: e, onChangeAccState: t }) => {
      return m.jsx(g, {
        Icon: cl,
        isToggled: e.isMonochrome,
        onToggle: () => {
          t((e) => {
            e.isMonochrome = !e.isMonochrome;
          });
        },
        titleTranslationKey: "colors.monochrom",
        title: "Monochrom",
      });
    };
  function ul() {
    return (ul =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            o = arguments[t];
          for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function dl(e, t) {
    if (null == e) return {};
    for (var n, o = {}, r = Object.keys(e), a = 0; a < r.length; a++)
      0 <= t.indexOf((n = r[a])) || (o[n] = e[n]);
    return o;
  }
  function gl(e) {
    var t = G.useRef(e),
      n = G.useRef(function (e) {
        t.current && t.current(e);
      });
    return (t.current = e), n.current;
  }
  function pl(e, t, n) {
    return (
      void 0 === t && (t = 0),
      (n = void 0 === n ? 1 : n) < e ? n : e < t ? t : e
    );
  }
  function hl(e) {
    return "touches" in e;
  }
  function fl(e) {
    return (e && e.ownerDocument.defaultView) || self;
  }
  function ml(e, t, n) {
    var o = e.getBoundingClientRect(),
      n = hl(t)
        ? (function (e, t) {
            for (var n = 0; n < e.length; n++)
              if (e[n].identifier === t) return e[n];
            return e[0];
          })(t.touches, n)
        : t;
    return {
      left: pl((n.pageX - (o.left + fl(e).pageXOffset)) / o.width),
      top: pl((n.pageY - (o.top + fl(e).pageYOffset)) / o.height),
    };
  }
  function bl(e) {
    hl(e) || e.preventDefault();
  }
  function vl(e) {
    return e.filter(Boolean).join(" ");
  }
  function yl(e) {
    var t = e.color,
      n = e.left,
      o = void 0 === (o = e.top) ? 0.5 : o,
      e = vl(["react-colorful__pointer", e.className]);
    return G.createElement(
      "div",
      { className: e, style: { top: 100 * o + "%", left: 100 * n + "%" } },
      G.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: { backgroundColor: t },
      })
    );
  }
  function Il(e) {
    return (e = "#" === e[0] ? e.substring(1) : e).length < 6
      ? {
          r: parseInt(e[0] + e[0], 16),
          g: parseInt(e[1] + e[1], 16),
          b: parseInt(e[2] + e[2], 16),
          a: 4 === e.length ? I(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
        }
      : {
          r: parseInt(e.substring(0, 2), 16),
          g: parseInt(e.substring(2, 4), 16),
          b: parseInt(e.substring(4, 6), 16),
          a: 8 === e.length ? I(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
        };
  }
  function Cl(e) {
    return (
      (a = e.h),
      (i = e.s),
      (t = e.v),
      (e = e.a),
      (a = (a / 360) * 6),
      (i /= 100),
      (t /= 100),
      (n = Math.floor(a)),
      (o = (n = {
        r: I(
          255 *
            [
              t,
              (r = t * (1 - (a - n) * i)),
              (o = t * (1 - i)),
              o,
              (a = t * (1 - (1 - a + n) * i)),
              t,
            ][(i = n % 6)]
        ),
        g: I(255 * [a, t, t, r, o, o][i]),
        b: I(255 * [o, o, a, t, t, r][i]),
        a: I(e, 2),
      }).r),
      (a = n.g),
      (t = n.b),
      (r = n.a),
      (i = r < 1 ? Al(I(255 * r)) : ""),
      "#" + Al(o) + Al(a) + Al(t) + i
    );
    var t, n, o, r, a, i;
  }
  function xl(e) {
    var t, n, o, r;
    return (
      (t = e.s),
      (n = e.v),
      (o = e.a),
      (r = ((200 - t) * n) / 100),
      "hsl(" +
        (e = {
          h: I(e.h),
          s: I(
            0 < r && r < 200
              ? ((t * n) / 100 / (r <= 100 ? r : 200 - r)) * 100
              : 0
          ),
          l: I(r / 2),
          a: I(o, 2),
        }).h +
        ", " +
        e.s +
        "%, " +
        e.l +
        "%)"
    );
  }
  function Sl(e, t) {
    if (e !== t) for (var n in e) if (e[n] !== t[n]) return !1;
    return !0;
  }
  var wl = G.memo(function (e) {
      var t = e.onMove,
        n = e.onKey,
        e = dl(e, ["onMove", "onKey"]),
        i = G.useRef(null),
        s = gl(t),
        c = gl(n),
        l = G.useRef(null),
        u = G.useRef(!1),
        t = G.useMemo(
          function () {
            function o(e) {
              bl(e),
                (hl(e) ? 0 < e.touches.length : 0 < e.buttons) && i.current
                  ? s(ml(i.current, e, l.current))
                  : a(!1);
            }
            function r() {
              return a(!1);
            }
            function a(e) {
              var t = u.current,
                n = fl(i.current),
                e = e ? n.addEventListener : n.removeEventListener;
              e(t ? "touchmove" : "mousemove", o),
                e(t ? "touchend" : "mouseup", r);
            }
            return [
              function (e) {
                var t,
                  e = e.nativeEvent,
                  n = i.current;
                n &&
                  (bl(e), !u.current || hl(e)) &&
                  n &&
                  (hl(e) &&
                    ((u.current = !0), (t = e.changedTouches || []).length) &&
                    (l.current = t[0].identifier),
                  n.focus(),
                  s(ml(n, e, l.current)),
                  a(!0));
              },
              function (e) {
                var t = e.which || e.keyCode;
                t < 37 ||
                  40 < t ||
                  (e.preventDefault(),
                  c({
                    left: 39 === t ? 0.05 : 37 === t ? -0.05 : 0,
                    top: 40 === t ? 0.05 : 38 === t ? -0.05 : 0,
                  }));
              },
              a,
            ];
          },
          [c, s]
        ),
        n = t[0],
        o = t[1],
        r = t[2];
      return (
        G.useEffect(
          function () {
            return r;
          },
          [r]
        ),
        G.createElement(
          "div",
          ul({}, e, {
            onTouchStart: n,
            onMouseDown: n,
            className: "react-colorful__interactive",
            ref: i,
            onKeyDown: o,
            tabIndex: 0,
            role: "slider",
          })
        )
      );
    }),
    I = function (e, t, n) {
      return (
        void 0 === t && (t = 0),
        void 0 === n && (n = Math.pow(10, t)),
        Math.round(n * e) / n
      );
    },
    Al = function (e) {
      e = e.toString(16);
      return e.length < 2 ? "0" + e : e;
    },
    El = G.memo(function (e) {
      var t = e.hue,
        n = e.onChange,
        e = vl(["react-colorful__hue", e.className]);
      return G.createElement(
        "div",
        { className: e },
        G.createElement(
          wl,
          {
            onMove: function (e) {
              n({ h: 360 * e.left });
            },
            onKey: function (e) {
              n({ h: pl(t + 360 * e.left, 0, 360) });
            },
            "aria-label": "Hue",
            "aria-valuenow": I(t),
            "aria-valuemax": "360",
            "aria-valuemin": "0",
          },
          G.createElement(yl, {
            className: "react-colorful__hue-pointer",
            left: t / 360,
            color: xl({ h: t, s: 100, v: 100, a: 1 }),
          })
        )
      );
    }),
    Nl = G.memo(function (e) {
      var t = e.hsva,
        n = e.onChange,
        e = { backgroundColor: xl({ h: t.h, s: 100, v: 100, a: 1 }) };
      return G.createElement(
        "div",
        { className: "react-colorful__saturation", style: e },
        G.createElement(
          wl,
          {
            onMove: function (e) {
              n({ s: 100 * e.left, v: 100 - 100 * e.top });
            },
            onKey: function (e) {
              n({
                s: pl(t.s + 100 * e.left, 0, 100),
                v: pl(t.v - 100 * e.top, 0, 100),
              });
            },
            "aria-label": "Color",
            "aria-valuetext":
              "Saturation " + I(t.s) + "%, Brightness " + I(t.v) + "%",
          },
          G.createElement(yl, {
            className: "react-colorful__saturation-pointer",
            top: 1 - t.v / 100,
            left: t.s / 100,
            color: xl(t),
          })
        )
      );
    });
  function kl(o) {
    Tl(function () {
      var e,
        t,
        n = o.current ? o.current.ownerDocument : document;
      void 0 === n ||
        Bl.has(n) ||
        (((e =
          n.createElement(
            "style"
          )).innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
        Bl.set(n, e),
        (t = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0) &&
          e.setAttribute("nonce", t),
        n.head.appendChild(e));
    }, []);
  }
  function Ll(e) {
    var t,
      n,
      o,
      r,
      a,
      i,
      s = e.className,
      c = e.colorModel,
      l = void 0 === (l = e.color) ? c.defaultColor : l,
      u = e.onChange,
      e = dl(e, ["className", "colorModel", "color", "onChange"]),
      d = G.useRef(null);
    kl(d),
      (t = c),
      (n = l),
      (o = gl((c = u))),
      (r = (c = G.useState(function () {
        return t.toHsva(n);
      }))[0]),
      (a = c[1]),
      (i = G.useRef({ color: n, hsva: r })),
      G.useEffect(
        function () {
          var e;
          t.equal(n, i.current.color) ||
            ((e = t.toHsva(n)), (i.current = { hsva: e, color: n }), a(e));
        },
        [n, t]
      ),
      G.useEffect(
        function () {
          var e;
          Sl(r, i.current.hsva) ||
            t.equal((e = t.fromHsva(r)), i.current.color) ||
            ((i.current = { hsva: r, color: e }), o(e));
        },
        [r, t, o]
      ),
      (c = G.useCallback(function (t) {
        a(function (e) {
          return Object.assign({}, e, t);
        });
      }, []));
    (u = (l = [r, c])[0]), (c = l[1]), (l = vl(["react-colorful", s]));
    return G.createElement(
      "div",
      ul({}, e, { ref: d, className: l }),
      G.createElement(Nl, { hsva: u, onChange: c }),
      G.createElement(El, {
        hue: u.h,
        onChange: c,
        className: "react-colorful__last-control",
      })
    );
  }
  function Gl(e) {
    return G.createElement(Ll, ul({}, e, { colorModel: Rl }));
  }
  var Tl = typeof window < "u" ? G.useLayoutEffect : G.useEffect,
    Bl = new Map(),
    Rl = {
      defaultColor: "000",
      toHsva: function (e) {
        return (
          (e = Il(e)),
          (t = e.r),
          (n = e.g),
          (a = e.b),
          (e = e.a),
          (o = Math.max(t, n, a)),
          (r = o - Math.min(t, n, a)),
          {
            h: I(
              60 *
                ((a = r
                  ? o === t
                    ? (n - a) / r
                    : o === n
                    ? 2 + (a - t) / r
                    : 4 + (t - n) / r
                  : 0) < 0
                  ? 6 + a
                  : a)
            ),
            s: I(o ? (r / o) * 100 : 0),
            v: I((o / 255) * 100),
            a: e,
          }
        );
        var t, n, o, r, a;
      },
      fromHsva: function (e) {
        return Cl({ h: e.h, s: e.s, v: e.v, a: 1 });
      },
      equal: function (e, t) {
        return e.toLowerCase() === t.toLowerCase() || Sl(Il(e), Il(t));
      },
    };
  const Ml = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "PaletteIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5z",
        })
      ),
    Ol = {
      accButtonTextColorPicker: "_accButtonTextColorPicker_dw9mu_1",
      accTextColorPicker: "_accTextColorPicker_dw9mu_16",
      accTextColorPicker__topContainer:
        "_accTextColorPicker__topContainer_dw9mu_22",
      accTextColorPicker__inputText: "_accTextColorPicker__inputText_dw9mu_30",
      accTextColorPicker__hexColorPicker:
        "_accTextColorPicker__hexColorPicker_dw9mu_35",
    },
    Vl = ({ accState: e, onChangeAccState: n }) => {
      const t = e["color"],
        o = (t) => {
          n((e) => {
            e.color = t;
          });
        };
      return m.jsx(g, {
        Icon: Ml,
        titleTranslationKey: "colors.textColorPicker",
        elementType: "div",
        title: "Text Color Picker",
        className: Ol.accButtonTextColorPicker,
        children: m.jsxs("div", {
          className: Ol.accTextColorPicker,
          children: [
            m.jsxs("div", {
              className: Ol.accTextColorPicker__topContainer,
              children: [
                m.jsx(p, {
                  onClick: () => {
                    o("");
                  },
                  controlType: "init",
                }),
                m.jsx("input", {
                  placeholder: "#000000",
                  type: "text",
                  value: t,
                  className: Ol.accTextColorPicker__inputText,
                  onChange: (e) => o(e.target.value),
                }),
              ],
            }),
            m.jsx(Gl, {
              className: Ol.accTextColorPicker__hexColorPicker,
              color: t,
              onChange: o,
            }),
          ],
        }),
      });
    },
    Fl = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "BlindIcon",
          ...e,
        },
        we.createElement("circle", { cx: 11.5, cy: 3.5, r: 2 }),
        we.createElement("path", {
          d: "M12.13 7.12c-.17-.35-.44-.65-.8-.85-.61-.36-1.34-.34-1.93-.03v-.01L4 9.3V14h2v-3.54l1.5-.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 .22-3.54L11 18v5h2v-6.5l-1.97-2.81c-.04-.52-.14-1.76.45-3.4.75 1.14 1.88 1.98 3.2 2.41L20.63 23l.87-.5-5.48-9.5H17v-2c-.49 0-2.88.17-4.08-2.21",
        })
      ),
    Pl = ({ accState: e, onChangeAccState: t }) => {
      return m.jsx(g, {
        Icon: Fl,
        isToggled: e.isVisualImpairment,
        onToggle: () => {
          t((e) => {
            e.isVisualImpairment = !e.isVisualImpairment;
          });
        },
        titleTranslationKey: "colors.visualImpairment",
        title: "Visual Impairment",
      });
    },
    Hl = ({ accState: e, onChangeAccState: t }) =>
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(bc, { accState: e, onChangeAccState: t }),
          m.jsx(il, { accState: e, onChangeAccState: t }),
          m.jsx(tl, { accState: e, onChangeAccState: t }),
          m.jsx(ol, { accState: e, onChangeAccState: t }),
          m.jsx(qc, { accState: e, onChangeAccState: t }),
          m.jsx(al, { accState: e, onChangeAccState: t }),
          m.jsx(sl, { accState: e, onChangeAccState: t }),
          m.jsx(ll, { accState: e, onChangeAccState: t }),
          m.jsx(Pl, { accState: e, onChangeAccState: t }),
          m.jsx(Vl, { accState: e, onChangeAccState: t }),
        ],
      }),
    Wl = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "AdsClickIcon",
          ...e,
        },
        we.createElement("path", {
          d: "M11.71 17.99C8.53 17.84 6 15.22 6 12c0-3.31 2.69-6 6-6 3.22 0 5.84 2.53 5.99 5.71l-2.1-.63C15.48 9.31 13.89 8 12 8c-2.21 0-4 1.79-4 4 0 1.89 1.31 3.48 3.08 3.89l.63 2.1zM22 12c0 .3-.01.6-.04.9l-1.97-.59c.01-.1.01-.21.01-.31 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c.1 0 .21 0 .31-.01l.59 1.97c-.3.03-.6.04-.9.04-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10zm-3.77 4.26L22 15l-10-3 3 10 1.26-3.77 4.27 4.27 1.98-1.98-4.28-4.26z",
        })
      ),
    _l = {
      type: "logger",
      log(e) {
        this.output("log", e);
      },
      warn(e) {
        this.output("warn", e);
      },
      error(e) {
        this.output("error", e);
      },
      output(e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    };
  var Xl = new (class mg {
    constructor(e) {
      this.init(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
      );
    }
    init(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      (this.prefix = t.prefix || "i18next:"),
        (this.logger = e || _l),
        (this.options = t),
        (this.debug = t.debug);
    }
    log() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "log", "", !0);
    }
    warn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "warn", "", !0);
    }
    error() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "error", "");
    }
    deprecate() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
    }
    forward(e, t, n, o) {
      return o && !this.debug
        ? null
        : ("string" == typeof e[0] &&
            (e[0] = "" + n + this.prefix + " " + e[0]),
          this.logger[t](e));
    }
    create(e) {
      return new mg(this.logger, {
        prefix: this.prefix + `:${e}:`,
        ...this.options,
      });
    }
    clone(e) {
      return (
        ((e = e || this.options).prefix = e.prefix || this.prefix),
        new mg(this.logger, e)
      );
    }
  })();
  class Zl {
    constructor() {
      this.observers = {};
    }
    on(e, t) {
      return (
        e.split(" ").forEach((e) => {
          (this.observers[e] = this.observers[e] || []),
            this.observers[e].push(t);
        }),
        this
      );
    }
    off(e, t) {
      this.observers[e] &&
        (t
          ? (this.observers[e] = this.observers[e].filter((e) => e !== t))
          : delete this.observers[e]);
    }
    emit(t) {
      for (
        var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), o = 1;
        o < e;
        o++
      )
        n[o - 1] = arguments[o];
      this.observers[t] &&
        [].concat(this.observers[t]).forEach((e) => {
          e(...n);
        }),
        this.observers["*"] &&
          [].concat(this.observers["*"]).forEach((e) => {
            e.apply(e, [t, ...n]);
          });
    }
  }
  function jl() {
    let n, o;
    var e = new Promise((e, t) => {
      (n = e), (o = t);
    });
    return (e.resolve = n), (e.reject = o), e;
  }
  function zl(e) {
    return null == e ? "" : "" + e;
  }
  function Dl(e, t, n) {
    function o(e) {
      return e && -1 < e.indexOf("###") ? e.replace(/###/g, ".") : e;
    }
    function r() {
      return !e || "string" == typeof e;
    }
    for (
      var a = "string" != typeof t ? [].concat(t) : t.split(".");
      1 < a.length;

    ) {
      if (r()) return {};
      var i = o(a.shift());
      !e[i] && n && (e[i] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, i) ? e[i] : {});
    }
    return r() ? {} : { obj: e, k: o(a.shift()) };
  }
  function Yl(e, t, n) {
    var { obj: e, k: t } = Dl(e, t, Object);
    e[t] = n;
  }
  function Jl(e, t) {
    var { obj: e, k: t } = Dl(e, t);
    if (e) return e[t];
  }
  function Ul(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var Ql = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
  };
  function $l(e) {
    return "string" == typeof e ? e.replace(/[&<>"'\/]/g, (e) => Ql[e]) : e;
  }
  const Kl = [" ", ",", "?", "!", ";"];
  function ql(e, a, t) {
    var i = 2 < arguments.length && void 0 !== t ? t : ".";
    if (e) {
      if (e[a]) return e[a];
      var s = a.split(i);
      let r = e;
      for (let o = 0; o < s.length; ++o) {
        if (!r || ("string" == typeof r[s[o]] && o + 1 < s.length)) return;
        if (void 0 === r[s[o]]) {
          let e = 2,
            t = s.slice(o, o + e).join(i),
            n = r[t];
          for (; void 0 === n && s.length > o + e; )
            e++, (t = s.slice(o, o + e).join(i)), (n = r[t]);
          if (void 0 === n) return;
          if (null === n) return null;
          if (a.endsWith(t)) {
            if ("string" == typeof n) return n;
            if (t && "string" == typeof n[t]) return n[t];
          }
          var c = s.slice(o + e).join(i);
          return c ? ql(n, c, i) : void 0;
        }
        r = r[s[o]];
      }
      return r;
    }
  }
  function eu(e) {
    return e && 0 < e.indexOf("_") ? e.replace("_", "-") : e;
  }
  class tu extends Zl {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : { ns: ["translation"], defaultNS: "translation" };
      super(),
        (this.data = e || {}),
        (this.options = t),
        void 0 === this.options.keySeparator &&
          (this.options.keySeparator = "."),
        void 0 === this.options.ignoreJSONStructure &&
          (this.options.ignoreJSONStructure = !0);
    }
    addNamespaces(e) {
      this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
    }
    removeNamespaces(e) {
      e = this.options.ns.indexOf(e);
      -1 < e && this.options.ns.splice(e, 1);
    }
    getResource(e, t, n) {
      var o =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
        r = (void 0 !== o.keySeparator ? o : this.options).keySeparator,
        o = (void 0 !== o.ignoreJSONStructure ? o : this.options)
          .ignoreJSONStructure;
      let a = [e, t];
      n && "string" != typeof n && (a = a.concat(n)),
        n && "string" == typeof n && (a = a.concat(r ? n.split(r) : n)),
        -1 < e.indexOf(".") && (a = e.split("."));
      var i = Jl(this.data, a);
      return i || !o || "string" != typeof n
        ? i
        : ql(this.data && this.data[e] && this.data[e][t], n, r);
    }
    addResource(e, t, n, o) {
      var r =
          4 < arguments.length && void 0 !== arguments[4]
            ? arguments[4]
            : { silent: !1 },
        a = (void 0 !== r.keySeparator ? r : this.options).keySeparator;
      let i = [e, t];
      n && (i = i.concat(a ? n.split(a) : n)),
        -1 < e.indexOf(".") && ((o = t), (t = (i = e.split("."))[1])),
        this.addNamespaces(t),
        Yl(this.data, i, o),
        r.silent || this.emit("added", e, t, n, o);
    }
    addResources(e, t, n) {
      var o =
        3 < arguments.length && void 0 !== arguments[3]
          ? arguments[3]
          : { silent: !1 };
      for (const r in n)
        ("string" != typeof n[r] &&
          "[object Array]" !== Object.prototype.toString.apply(n[r])) ||
          this.addResource(e, t, r, n[r], { silent: !0 });
      o.silent || this.emit("added", e, t, n);
    }
    addResourceBundle(e, t, n, o, r) {
      let a =
          5 < arguments.length && void 0 !== arguments[5]
            ? arguments[5]
            : { silent: !1 },
        i = [e, t],
        s =
          (-1 < e.indexOf(".") &&
            ((o = n), (n = t), (t = (i = e.split("."))[1])),
          this.addNamespaces(t),
          Jl(this.data, i) || {});
      o
        ? (function e(t, n, o) {
            for (const r in n)
              "__proto__" !== r &&
                "constructor" !== r &&
                (r in t
                  ? "string" == typeof t[r] ||
                    t[r] instanceof String ||
                    "string" == typeof n[r] ||
                    n[r] instanceof String
                    ? o && (t[r] = n[r])
                    : e(t[r], n[r], o)
                  : (t[r] = n[r]));
          })(s, n, r)
        : (s = { ...s, ...n }),
        Yl(this.data, i, s),
        a.silent || this.emit("added", e, t, n);
    }
    removeResourceBundle(e, t) {
      this.hasResourceBundle(e, t) && delete this.data[e][t],
        this.removeNamespaces(t),
        this.emit("removed", e, t);
    }
    hasResourceBundle(e, t) {
      return void 0 !== this.getResource(e, t);
    }
    getResourceBundle(e, t) {
      return (
        (t = t || this.options.defaultNS),
        "v1" === this.options.compatibilityAPI
          ? { ...this.getResource(e, t) }
          : this.getResource(e, t)
      );
    }
    getDataByLanguage(e) {
      return this.data[e];
    }
    hasLanguageSomeTranslations(e) {
      const t = this.getDataByLanguage(e);
      return !!((t && Object.keys(t)) || []).find(
        (e) => t[e] && 0 < Object.keys(t[e]).length
      );
    }
    toJSON() {
      return this.data;
    }
  }
  var nu = {
    processors: {},
    addPostProcessor(e) {
      this.processors[e.name] = e;
    },
    handle(e, t, n, o, r) {
      return (
        e.forEach((e) => {
          this.processors[e] && (t = this.processors[e].process(t, n, o, r));
        }),
        t
      );
    },
  };
  const ou = {};
  class ru extends Zl {
    constructor(e) {
      var t,
        n,
        o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      super(),
        (t = e),
        (n = this),
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ].forEach((e) => {
          t[e] && (n[e] = t[e]);
        }),
        (this.options = o),
        void 0 === this.options.keySeparator &&
          (this.options.keySeparator = "."),
        (this.logger = Xl.create("translator"));
    }
    changeLanguage(e) {
      e && (this.language = e);
    }
    exists(e) {
      return (
        null != e &&
        (e = this.resolve(
          e,
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : { interpolation: {} }
        )) &&
        void 0 !== e.res
      );
    }
    extractFromKey(e, t) {
      let n = (void 0 !== t.nsSeparator ? t : this.options).nsSeparator;
      void 0 === n && (n = ":");
      var o = (void 0 !== t.keySeparator ? t : this.options).keySeparator;
      let r = t.ns || this.options.defaultNS || [];
      var a = n && -1 < e.indexOf(n),
        t = !(
          this.options.userDefinedKeySeparator ||
          t.keySeparator ||
          this.options.userDefinedNsSeparator ||
          t.nsSeparator ||
          (function (e, t, n) {
            (t = t || ""), (n = n || "");
            var o,
              r = Kl.filter((e) => t.indexOf(e) < 0 && n.indexOf(e) < 0);
            if (0 === r.length) return 1;
            let a = !(r = new RegExp(
              `(${r.map((e) => ("?" === e ? "\\?" : e)).join("|")})`
            )).test(e);
            return (
              a ||
                (0 < (o = e.indexOf(n)) &&
                  !r.test(e.substring(0, o)) &&
                  (a = !0)),
              a
            );
          })(e, n, o)
        );
      if (a && !t) {
        a = e.match(this.interpolator.nestingRegexp);
        if (a && 0 < a.length) return { key: e, namespaces: r };
        t = e.split(n);
        (n !== o || (n === o && -1 < this.options.ns.indexOf(t[0]))) &&
          (r = t.shift()),
          (e = t.join(o));
      }
      return { key: e, namespaces: (r = "string" == typeof r ? [r] : r) };
    }
    translate(n, o, r) {
      if (
        ((o =
          (o =
            "object" ==
            typeof (o =
              "object" != typeof o &&
              this.options.overloadTranslationOptionHandler
                ? this.options.overloadTranslationOptionHandler(arguments)
                : o)
              ? { ...o }
              : o) || {}),
        null == n)
      )
        return "";
      Array.isArray(n) || (n = [String(n)]);
      const e = (void 0 !== o.returnDetails ? o : this.options).returnDetails,
        a = (void 0 !== o.keySeparator ? o : this.options).keySeparator,
        { key: i, namespaces: t } = this.extractFromKey(n[n.length - 1], o),
        s = t[t.length - 1],
        c = o.lng || this.language,
        l = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
      if (c && "cimode" === c.toLowerCase())
        return l
          ? ((u = o.nsSeparator || this.options.nsSeparator),
            e
              ? {
                  res: "" + s + u + i,
                  usedKey: i,
                  exactUsedKey: i,
                  usedLng: c,
                  usedNS: s,
                  usedParams: this.getUsedParamsDetails(o),
                }
              : "" + s + u + i)
          : e
          ? {
              res: i,
              usedKey: i,
              exactUsedKey: i,
              usedLng: c,
              usedNS: s,
              usedParams: this.getUsedParamsDetails(o),
            }
          : i;
      var u = this.resolve(n, o);
      let d = u && u.res;
      var g = (u && u.usedKey) || i,
        p = (u && u.exactUsedKey) || i,
        h = Object.prototype.toString.apply(d),
        f = (void 0 !== o.joinArrays ? o : this.options).joinArrays,
        m = !this.i18nFormat || this.i18nFormat.handleAsObject;
      if (
        m &&
        d &&
        "string" != typeof d &&
        "boolean" != typeof d &&
        "number" != typeof d &&
        ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) <
          0 &&
        ("string" != typeof f || "[object Array]" !== h)
      ) {
        if (!o.returnObjects && !this.options.returnObjects)
          return (
            this.options.returnedObjectHandler ||
              this.logger.warn(
                "accessing an object - but returnObjects options is not enabled!"
              ),
            (v = this.options.returnedObjectHandler
              ? this.options.returnedObjectHandler(g, d, { ...o, ns: t })
              : `key '${i} (${this.language})' returned an object instead of string.`),
            e
              ? ((u.res = v), (u.usedParams = this.getUsedParamsDetails(o)), u)
              : v
          );
        if (a) {
          var b,
            v = "[object Array]" === h,
            y = v ? [] : {},
            I = v ? p : g;
          for (const x in d)
            Object.prototype.hasOwnProperty.call(d, x) &&
              ((b = "" + I + a + x),
              (y[x] = this.translate(b, { ...o, joinArrays: !1, ns: t })),
              y[x] === b) &&
              (y[x] = d[x]);
          d = y;
        }
      } else if (m && "string" == typeof f && "[object Array]" === h)
        d = (d = d.join(f)) && this.extendTranslation(d, n, o, r);
      else {
        let e = !1,
          t = !1;
        const S = void 0 !== o.count && "string" != typeof o.count,
          w = ru.hasDefaultValue(o),
          A = S ? this.pluralResolver.getSuffix(c, o.count, o) : "",
          E =
            o.ordinal && S
              ? this.pluralResolver.getSuffix(c, o.count, { ordinal: !1 })
              : "",
          N = o["defaultValue" + A] || o["defaultValue" + E] || o.defaultValue,
          k =
            (!this.isValidLookup(d) && w && ((e = !0), (d = N)),
            this.isValidLookup(d) || ((t = !0), (d = i)),
            (o.missingKeyNoValueFallbackToKey ||
              this.options.missingKeyNoValueFallbackToKey) &&
            t
              ? void 0
              : d),
          L = w && N !== d && this.options.updateMissing;
        if (t || e || L) {
          this.logger.log(L ? "updateKey" : "missingKey", c, s, i, L ? N : d),
            a &&
              (v = this.resolve(i, { ...o, keySeparator: !1 })) &&
              v.res &&
              this.logger.warn(
                "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
              );
          let t = [];
          var C = this.languageUtils.getFallbackCodes(
            this.options.fallbackLng,
            o.lng || this.language
          );
          if ("fallback" === this.options.saveMissingTo && C && C[0])
            for (let e = 0; e < C.length; e++) t.push(C[e]);
          else
            "all" === this.options.saveMissingTo
              ? (t = this.languageUtils.toResolveHierarchy(
                  o.lng || this.language
                ))
              : t.push(o.lng || this.language);
          const G = (e, t, n) => {
            n = w && n !== d ? n : k;
            this.options.missingKeyHandler
              ? this.options.missingKeyHandler(e, s, t, n, L, o)
              : this.backendConnector &&
                this.backendConnector.saveMissing &&
                this.backendConnector.saveMissing(e, s, t, n, L, o),
              this.emit("missingKey", e, s, t, d);
          };
          this.options.saveMissing &&
            (this.options.saveMissingPlurals && S
              ? t.forEach((t) => {
                  this.pluralResolver.getSuffixes(t, o).forEach((e) => {
                    G([t], i + e, o["defaultValue" + e] || N);
                  });
                })
              : G(t, i, N));
        }
        (d = this.extendTranslation(d, n, o, u, r)),
          t &&
            d === i &&
            this.options.appendNamespaceToMissingKey &&
            (d = s + ":" + i),
          (t || e) &&
            this.options.parseMissingKeyHandler &&
            (d =
              "v1" !== this.options.compatibilityAPI
                ? this.options.parseMissingKeyHandler(
                    this.options.appendNamespaceToMissingKey ? s + ":" + i : i,
                    e ? d : void 0
                  )
                : this.options.parseMissingKeyHandler(d));
      }
      return e
        ? ((u.res = d), (u.usedParams = this.getUsedParamsDetails(o)), u)
        : d;
    }
    extendTranslation(n, o, r, a, i) {
      var s = this;
      if (this.i18nFormat && this.i18nFormat.parse)
        n = this.i18nFormat.parse(
          n,
          { ...this.options.interpolation.defaultVariables, ...r },
          r.lng || this.language || a.usedLng,
          a.usedNS,
          a.usedKey,
          { resolved: a }
        );
      else if (!r.skipInterpolation) {
        r.interpolation &&
          this.interpolator.init({
            ...r,
            interpolation: {
              ...this.options.interpolation,
              ...r.interpolation,
            },
          });
        var c =
          "string" == typeof n &&
          (r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
            ? r
            : this.options
          ).interpolation.skipOnVariables;
        let e,
          t =
            (c &&
              ((l = n.match(this.interpolator.nestingRegexp)),
              (e = l && l.length)),
            r.replace && "string" != typeof r.replace ? r.replace : r);
        this.options.interpolation.defaultVariables &&
          (t = { ...this.options.interpolation.defaultVariables, ...t }),
          (n = this.interpolator.interpolate(n, t, r.lng || this.language, r)),
          c &&
            ((c = (l = n.match(this.interpolator.nestingRegexp)) && l.length),
            e < c) &&
            (r.nest = !1),
          !r.lng &&
            "v1" !== this.options.compatibilityAPI &&
            a &&
            a.res &&
            (r.lng = a.usedLng),
          !1 !== r.nest &&
            (n = this.interpolator.nest(
              n,
              function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return i && i[0] === t[0] && !r.context
                  ? (s.logger.warn(
                      `It seems you are nesting recursively key: ${t[0]} in key: ` +
                        o[0]
                    ),
                    null)
                  : s.translate(...t, o);
              },
              r
            )),
          r.interpolation && this.interpolator.reset();
      }
      var l = r.postProcess || this.options.postProcess,
        c = "string" == typeof l ? [l] : l;
      return (n =
        null != n && c && c.length && !1 !== r.applyPostProcessor
          ? nu.handle(
              c,
              n,
              o,
              this.options && this.options.postProcessPassResolved
                ? {
                    i18nResolved: {
                      ...a,
                      usedParams: this.getUsedParamsDetails(r),
                    },
                    ...r,
                  }
                : r,
              this
            )
          : n);
    }
    resolve(e) {
      let d =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        g,
        r,
        p,
        h,
        a;
      return (
        (e = "string" == typeof e ? [e] : e).forEach((t) => {
          if (!this.isValidLookup(g)) {
            const n = this.extractFromKey(t, d),
              s = n.key;
            r = s;
            let e = n.namespaces;
            this.options.fallbackNS && (e = e.concat(this.options.fallbackNS));
            const c = void 0 !== d.count && "string" != typeof d.count,
              l =
                c &&
                !d.ordinal &&
                0 === d.count &&
                this.pluralResolver.shouldUseIntlApi(),
              u =
                void 0 !== d.context &&
                ("string" == typeof d.context ||
                  "number" == typeof d.context) &&
                "" !== d.context,
              o =
                d.lngs ||
                this.languageUtils.toResolveHierarchy(
                  d.lng || this.language,
                  d.fallbackLng
                );
            e.forEach((i) => {
              this.isValidLookup(g) ||
                ((a = i),
                !ou[o[0] + "-" + i] &&
                  this.utils &&
                  this.utils.hasLoadedNamespace &&
                  !this.utils.hasLoadedNamespace(a) &&
                  ((ou[o[0] + "-" + i] = !0),
                  this.logger.warn(
                    `key "${r}" for languages "${o.join(
                      ", "
                    )}" won't get resolved as namespace "${a}" was not yet loaded`,
                    "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                  )),
                o.forEach((t) => {
                  if (!this.isValidLookup(g)) {
                    h = t;
                    var e,
                      n = [s];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(n, s, t, i, d);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(t, d.count, d));
                      var o,
                        r = this.options.pluralSeparator + "zero",
                        a =
                          this.options.pluralSeparator +
                          "ordinal" +
                          this.options.pluralSeparator;
                      c &&
                        (n.push(s + e),
                        d.ordinal &&
                          0 === e.indexOf(a) &&
                          n.push(
                            s + e.replace(a, this.options.pluralSeparator)
                          ),
                        l) &&
                        n.push(s + r),
                        u &&
                          ((o =
                            "" + s + this.options.contextSeparator + d.context),
                          n.push(o),
                          c) &&
                          (n.push(o + e),
                          d.ordinal &&
                            0 === e.indexOf(a) &&
                            n.push(
                              o + e.replace(a, this.options.pluralSeparator)
                            ),
                          l) &&
                          n.push(o + r);
                    }
                    for (; (e = n.pop()); )
                      this.isValidLookup(g) ||
                        ((p = e), (g = this.getResource(t, i, e, d)));
                  }
                }));
            });
          }
        }),
        { res: g, usedKey: r, exactUsedKey: p, usedLng: h, usedNS: a }
      );
    }
    isValidLookup(e) {
      return !(
        void 0 === e ||
        (!this.options.returnNull && null === e) ||
        (!this.options.returnEmptyString && "" === e)
      );
    }
    getResource(e, t, n) {
      var o =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
      return (
        this.i18nFormat && this.i18nFormat.getResource
          ? this.i18nFormat
          : this.resourceStore
      ).getResource(e, t, n, o);
    }
    getUsedParamsDetails() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.replace && "string" != typeof e.replace;
      let n = t ? e.replace : e;
      if (
        (t && typeof e.count < "u" && (n.count = e.count),
        this.options.interpolation.defaultVariables &&
          (n = { ...this.options.interpolation.defaultVariables, ...n }),
        !t)
      ) {
        n = { ...n };
        for (const o of [
          "defaultValue",
          "ordinal",
          "context",
          "replace",
          "lng",
          "lngs",
          "fallbackLng",
          "ns",
          "keySeparator",
          "nsSeparator",
          "returnObjects",
          "returnDetails",
          "joinArrays",
          "postProcess",
          "interpolation",
        ])
          delete n[o];
      }
      return n;
    }
    static hasDefaultValue(e) {
      var t = "defaultValue";
      for (const n in e)
        if (
          Object.prototype.hasOwnProperty.call(e, n) &&
          t === n.substring(0, t.length) &&
          void 0 !== e[n]
        )
          return !0;
      return !1;
    }
  }
  function au(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  class iu {
    constructor(e) {
      (this.options = e),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = Xl.create("languageUtils"));
    }
    getScriptPartFromCode(e) {
      return !(e = eu(e)) ||
        e.indexOf("-") < 0 ||
        2 === (e = e.split("-")).length ||
        (e.pop(), "x" === e[e.length - 1].toLowerCase())
        ? null
        : this.formatLanguageCode(e.join("-"));
    }
    getLanguagePartFromCode(e) {
      return !(e = eu(e)) || e.indexOf("-") < 0
        ? e
        : ((e = e.split("-")), this.formatLanguageCode(e[0]));
    }
    formatLanguageCode(t) {
      if ("string" == typeof t && -1 < t.indexOf("-")) {
        var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
        let e = t.split("-");
        return (
          this.options.lowerCaseLng
            ? (e = e.map((e) => e.toLowerCase()))
            : 2 === e.length
            ? ((e[0] = e[0].toLowerCase()),
              (e[1] = e[1].toUpperCase()),
              -1 < n.indexOf(e[1].toLowerCase()) &&
                (e[1] = au(e[1].toLowerCase())))
            : 3 === e.length &&
              ((e[0] = e[0].toLowerCase()),
              2 === e[1].length && (e[1] = e[1].toUpperCase()),
              "sgn" !== e[0] &&
                2 === e[2].length &&
                (e[2] = e[2].toUpperCase()),
              -1 < n.indexOf(e[1].toLowerCase()) &&
                (e[1] = au(e[1].toLowerCase())),
              -1 < n.indexOf(e[2].toLowerCase())) &&
              (e[2] = au(e[2].toLowerCase())),
          e.join("-")
        );
      }
      return this.options.cleanCode || this.options.lowerCaseLng
        ? t.toLowerCase()
        : t;
    }
    isSupportedCode(e) {
      return (
        ("languageOnly" !== this.options.load &&
          !this.options.nonExplicitSupportedLngs) ||
          (e = this.getLanguagePartFromCode(e)),
        !this.supportedLngs ||
          !this.supportedLngs.length ||
          -1 < this.supportedLngs.indexOf(e)
      );
    }
    getBestMatchFromCodes(e) {
      if (!e) return null;
      let n;
      return (
        e.forEach((e) => {
          n ||
            ((e = this.formatLanguageCode(e)),
            this.options.supportedLngs && !this.isSupportedCode(e)) ||
            (n = e);
        }),
        !n &&
          this.options.supportedLngs &&
          e.forEach((e) => {
            if (!n) {
              const t = this.getLanguagePartFromCode(e);
              if (this.isSupportedCode(t)) return (n = t);
              n = this.options.supportedLngs.find((e) =>
                e !== t &&
                ((e.indexOf("-") < 0 && t.indexOf("-") < 0) ||
                  0 !== e.indexOf(t))
                  ? void 0
                  : e
              );
            }
          }),
        (n = n || this.getFallbackCodes(this.options.fallbackLng)[0])
      );
    }
    getFallbackCodes(e, t) {
      if (!e) return [];
      if (
        ("string" == typeof (e = "function" == typeof e ? e(t) : e) &&
          (e = [e]),
        "[object Array]" === Object.prototype.toString.apply(e))
      )
        return e;
      if (!t) return e.default || [];
      let n = e[t];
      return (
        (n =
          (n =
            (n =
              (n = n || e[this.getScriptPartFromCode(t)]) ||
              e[this.formatLanguageCode(t)]) ||
            e[this.getLanguagePartFromCode(t)]) || e.default) || []
      );
    }
    toResolveHierarchy(e, t) {
      const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
        o = [],
        r = (e) => {
          e &&
            (this.isSupportedCode(e)
              ? o.push(e)
              : this.logger.warn(
                  "rejecting language code not found in supportedLngs: " + e
                ));
        };
      return (
        "string" == typeof e && (-1 < e.indexOf("-") || -1 < e.indexOf("_"))
          ? ("languageOnly" !== this.options.load &&
              r(this.formatLanguageCode(e)),
            "languageOnly" !== this.options.load &&
              "currentOnly" !== this.options.load &&
              r(this.getScriptPartFromCode(e)),
            "currentOnly" !== this.options.load &&
              r(this.getLanguagePartFromCode(e)))
          : "string" == typeof e && r(this.formatLanguageCode(e)),
        n.forEach((e) => {
          o.indexOf(e) < 0 && r(this.formatLanguageCode(e));
        }),
        o
      );
    }
  }
  let su = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    cu = {
      1: function (e) {
        return +(1 < e);
      },
      2: function (e) {
        return +(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return e % 10 == 1 && e % 100 != 11
          ? 0
          : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100)
          ? 1
          : 2;
      },
      5: function (e) {
        return 0 == e
          ? 0
          : 1 == e
          ? 1
          : 2 == e
          ? 2
          : 3 <= e % 100 && e % 100 <= 10
          ? 3
          : 11 <= e % 100
          ? 4
          : 5;
      },
      6: function (e) {
        return 1 == e ? 0 : 2 <= e && e <= 4 ? 1 : 2;
      },
      7: function (e) {
        return 1 == e
          ? 0
          : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100)
          ? 1
          : 2;
      },
      8: function (e) {
        return 1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3;
      },
      9: function (e) {
        return +(2 <= e);
      },
      10: function (e) {
        return 1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
      },
      11: function (e) {
        return 1 == e || 11 == e
          ? 0
          : 2 == e || 12 == e
          ? 1
          : 2 < e && e < 20
          ? 2
          : 3;
      },
      12: function (e) {
        return +(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return +(0 !== e);
      },
      14: function (e) {
        return 1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3;
      },
      15: function (e) {
        return e % 10 == 1 && e % 100 != 11
          ? 0
          : 2 <= e % 10 && (e % 100 < 10 || 20 <= e % 100)
          ? 1
          : 2;
      },
      16: function (e) {
        return e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2;
      },
      17: function (e) {
        return 1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
      },
      18: function (e) {
        return 0 == e ? 0 : 1 == e ? 1 : 2;
      },
      19: function (e) {
        return 1 == e
          ? 0
          : 0 == e || (1 < e % 100 && e % 100 < 11)
          ? 1
          : 10 < e % 100 && e % 100 < 20
          ? 2
          : 3;
      },
      20: function (e) {
        return 1 == e ? 0 : 0 == e || (0 < e % 100 && e % 100 < 20) ? 1 : 2;
      },
      21: function (e) {
        return e % 100 == 1
          ? 1
          : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
          ? 3
          : 0;
      },
      22: function (e) {
        return 1 == e
          ? 0
          : 2 == e
          ? 1
          : (e < 0 || 10 < e) && e % 10 == 0
          ? 2
          : 3;
      },
    };
  const lu = ["v1", "v2", "v3"],
    uu = ["v4"],
    du = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
  class gu {
    constructor(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      (this.languageUtils = e),
        (this.options = t),
        (this.logger = Xl.create("pluralResolver")),
        (this.options.compatibilityJSON &&
          !uu.includes(this.options.compatibilityJSON)) ||
          (!("u" < typeof Intl) && Intl.PluralRules) ||
          ((this.options.compatibilityJSON = "v3"),
          this.logger.error(
            "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
          )),
        (this.rules = (function () {
          const n = {};
          return (
            su.forEach((t) => {
              t.lngs.forEach((e) => {
                n[e] = { numbers: t.nr, plurals: cu[t.fc] };
              });
            }),
            n
          );
        })());
    }
    addRule(e, t) {
      this.rules[e] = t;
    }
    getRule(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      if (this.shouldUseIntlApi())
        try {
          return new Intl.PluralRules(eu(e), {
            type: t.ordinal ? "ordinal" : "cardinal",
          });
        } catch {
          return;
        }
      return (
        this.rules[e] ||
        this.rules[this.languageUtils.getLanguagePartFromCode(e)]
      );
    }
    needsPlural(e) {
      e = this.getRule(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
      );
      return this.shouldUseIntlApi()
        ? e && 1 < e.resolvedOptions().pluralCategories.length
        : e && 1 < e.numbers.length;
    }
    getPluralFormsOfKey(e, t) {
      return this.getSuffixes(
        e,
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
      ).map((e) => "" + t + e);
    }
    getSuffixes(t) {
      let n =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      var e = this.getRule(t, n);
      return e
        ? this.shouldUseIntlApi()
          ? e
              .resolvedOptions()
              .pluralCategories.sort((e, t) => du[e] - du[t])
              .map(
                (e) =>
                  "" +
                  this.options.prepend +
                  (n.ordinal ? "ordinal" + this.options.prepend : "") +
                  e
              )
          : e.numbers.map((e) => this.getSuffix(t, e, n))
        : [];
    }
    getSuffix(e, t) {
      var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        o = this.getRule(e, n);
      return o
        ? this.shouldUseIntlApi()
          ? "" +
            this.options.prepend +
            (n.ordinal ? "ordinal" + this.options.prepend : "") +
            o.select(t)
          : this.getSuffixRetroCompatible(o, t)
        : (this.logger.warn("no plural rule found for: " + e), "");
    }
    getSuffixRetroCompatible(e, t) {
      t = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
      let n = e.numbers[t];
      this.options.simplifyPluralSuffix &&
        2 === e.numbers.length &&
        1 === e.numbers[0] &&
        (2 === n ? (n = "plural") : 1 === n && (n = ""));
      var o = () =>
        this.options.prepend && n.toString()
          ? this.options.prepend + n.toString()
          : n.toString();
      return "v1" === this.options.compatibilityJSON
        ? 1 === n
          ? ""
          : "number" == typeof n
          ? "_plural_" + n.toString()
          : o()
        : "v2" === this.options.compatibilityJSON ||
          (this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0])
        ? o()
        : this.options.prepend && t.toString()
        ? this.options.prepend + t.toString()
        : t.toString();
    }
    shouldUseIntlApi() {
      return !lu.includes(this.options.compatibilityJSON);
    }
  }
  function pu(e, t, n, o, r) {
    let a = 3 < arguments.length && void 0 !== o ? o : ".",
      i = !(4 < arguments.length && void 0 !== r) || r,
      s = ((o = t), void 0 !== (r = Jl((r = e), (c = n))) ? r : Jl(o, c));
    var c;
    return (s =
      !s && i && "string" == typeof n && void 0 === (s = ql(e, n, a))
        ? ql(t, n, a)
        : s);
  }
  class hu {
    constructor() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      (this.logger = Xl.create("interpolator")),
        (this.options = e),
        (this.format =
          (e.interpolation && e.interpolation.format) || ((e) => e)),
        this.init(e);
    }
    init() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        e =
          (e.interpolation || (e.interpolation = { escapeValue: !0 }),
          e.interpolation);
      (this.escape = void 0 !== e.escape ? e.escape : $l),
        (this.escapeValue = void 0 === e.escapeValue || e.escapeValue),
        (this.useRawValueToEscape =
          void 0 !== e.useRawValueToEscape && e.useRawValueToEscape),
        (this.prefix = e.prefix ? Ul(e.prefix) : e.prefixEscaped || "{{"),
        (this.suffix = e.suffix ? Ul(e.suffix) : e.suffixEscaped || "}}"),
        (this.formatSeparator = e.formatSeparator || e.formatSeparator || ","),
        (this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-"),
        (this.unescapeSuffix =
          (!this.unescapePrefix && e.unescapeSuffix) || ""),
        (this.nestingPrefix = e.nestingPrefix
          ? Ul(e.nestingPrefix)
          : e.nestingPrefixEscaped || Ul("$t(")),
        (this.nestingSuffix = e.nestingSuffix
          ? Ul(e.nestingSuffix)
          : e.nestingSuffixEscaped || Ul(")")),
        (this.nestingOptionsSeparator =
          e.nestingOptionsSeparator || e.nestingOptionsSeparator || ","),
        (this.maxReplaces = e.maxReplaces || 1e3),
        (this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat),
        this.resetRegExp();
    }
    reset() {
      this.options && this.init(this.options);
    }
    resetRegExp() {
      var e = this.prefix + "(.+?)" + this.suffix,
        e =
          ((this.regexp = new RegExp(e, "g")),
          "" +
            this.prefix +
            this.unescapePrefix +
            "(.+?)" +
            this.unescapeSuffix +
            this.suffix),
        e =
          ((this.regexpUnescape = new RegExp(e, "g")),
          this.nestingPrefix + "(.+?)" + this.nestingSuffix);
      this.nestingRegexp = new RegExp(e, "g");
    }
    interpolate(o, n, r, a) {
      let i, s, c;
      const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {};
      function t(e) {
        return e.replace(/\$/g, "$$$$");
      }
      const u = (e) => {
          var t;
          return e.indexOf(this.formatSeparator) < 0
            ? ((t = pu(
                n,
                l,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure
              )),
              this.alwaysFormat
                ? this.format(t, void 0, r, { ...a, ...n, interpolationkey: e })
                : t)
            : ((e = (t = e.split(this.formatSeparator)).shift().trim()),
              (t = t.join(this.formatSeparator).trim()),
              this.format(
                pu(
                  n,
                  l,
                  e,
                  this.options.keySeparator,
                  this.options.ignoreJSONStructure
                ),
                t,
                r,
                { ...a, ...n, interpolationkey: e }
              ));
        },
        d =
          (this.resetRegExp(),
          (a && a.missingInterpolationHandler) ||
            this.options.missingInterpolationHandler),
        g = (
          a && a.interpolation && void 0 !== a.interpolation.skipOnVariables
            ? a
            : this.options
        ).interpolation.skipOnVariables;
      return (
        [
          { regex: this.regexpUnescape, safeValue: (e) => t(e) },
          {
            regex: this.regexp,
            safeValue: (e) => (this.escapeValue ? t(this.escape(e)) : t(e)),
          },
        ].forEach((e) => {
          for (c = 0; (i = e.regex.exec(o)); ) {
            var t = i[1].trim();
            if (void 0 === (s = u(t)))
              if ("function" == typeof d) {
                var n = d(o, i, a);
                s = "string" == typeof n ? n : "";
              } else {
                if (!a || !Object.prototype.hasOwnProperty.call(a, t)) {
                  if (g) {
                    s = i[0];
                    continue;
                  }
                  this.logger.warn(
                    `missed to pass in variable ${t} for interpolating ` + o
                  );
                }
                s = "";
              }
            else
              "string" == typeof s || this.useRawValueToEscape || (s = zl(s));
            n = e.safeValue(s);
            if (
              ((o = o.replace(i[0], n)),
              g
                ? ((e.regex.lastIndex += s.length),
                  (e.regex.lastIndex -= i[0].length))
                : (e.regex.lastIndex = 0),
              ++c >= this.maxReplaces)
            )
              break;
          }
        }),
        o
      );
    }
    nest(n, o) {
      let r =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        a,
        i,
        s;
      function c(n, e) {
        var o = this.nestingOptionsSeparator;
        if (!(n.indexOf(o) < 0)) {
          var r = n.split(new RegExp(o + "[ ]*{"));
          let t = "{" + r[1];
          n = r[0];
          var r = (t = this.interpolate(t, s)).match(/'/g),
            a = t.match(/"/g);
          ((r && r.length % 2 == 0 && !a) || a.length % 2 != 0) &&
            (t = t.replace(/'/g, '"'));
          try {
            (s = JSON.parse(t)), e && (s = { ...e, ...s });
          } catch (e) {
            return (
              this.logger.warn(
                "failed parsing options string in nesting for key " + n,
                e
              ),
              "" + n + o + t
            );
          }
          delete s.defaultValue;
        }
        return n;
      }
      for (; (a = this.nestingRegexp.exec(n)); ) {
        let e = [],
          t =
            (((s =
              (s = { ...r }).replace && "string" != typeof s.replace
                ? s.replace
                : s).applyPostProcessor = !1),
            delete s.defaultValue,
            !1);
        var l;
        if (
          (-1 === a[0].indexOf(this.formatSeparator) ||
            /{.*}/.test(a[1]) ||
            ((l = a[1].split(this.formatSeparator).map((e) => e.trim())),
            (a[1] = l.shift()),
            (e = l),
            (t = !0)),
          (i = o(c.call(this, a[1].trim(), s), s)) &&
            a[0] === n &&
            "string" != typeof i)
        )
          return i;
        (i = "string" != typeof i ? zl(i) : i) ||
          (this.logger.warn(`missed to resolve ${a[1]} for nesting ` + n),
          (i = "")),
          t &&
            (i = e.reduce(
              (e, t) =>
                this.format(e, t, r.lng, {
                  ...r,
                  interpolationkey: a[1].trim(),
                }),
              i.trim()
            )),
          (n = n.replace(a[0], i)),
          (this.regexp.lastIndex = 0);
      }
      return n;
    }
  }
  function fu(a) {
    const i = {};
    return function (e, t, n) {
      var o = t + JSON.stringify(n);
      let r = i[o];
      return r || ((r = a(eu(t), n)), (i[o] = r)), r(e);
    };
  }
  class mu {
    constructor() {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      (this.logger = Xl.create("formatter")),
        (this.options = e),
        (this.formats = {
          number: fu((e, t) => {
            const n = new Intl.NumberFormat(e, { ...t });
            return (e) => n.format(e);
          }),
          currency: fu((e, t) => {
            const n = new Intl.NumberFormat(e, { ...t, style: "currency" });
            return (e) => n.format(e);
          }),
          datetime: fu((e, t) => {
            const n = new Intl.DateTimeFormat(e, { ...t });
            return (e) => n.format(e);
          }),
          relativetime: fu((e, t) => {
            const n = new Intl.RelativeTimeFormat(e, { ...t });
            return (e) => n.format(e, t.range || "day");
          }),
          list: fu((e, t) => {
            const n = new Intl.ListFormat(e, { ...t });
            return (e) => n.format(e);
          }),
        }),
        this.init(e);
    }
    init(e) {
      var t = (
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : { interpolation: {} }
      ).interpolation;
      this.formatSeparator = t.formatSeparator || t.formatSeparator || ",";
    }
    add(e, t) {
      this.formats[e.toLowerCase().trim()] = t;
    }
    addCached(e, t) {
      this.formats[e.toLowerCase().trim()] = fu(t);
    }
    format(e, t, i) {
      let s =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
      return t.split(this.formatSeparator).reduce((t, n) => {
        var { formatName: n, formatOptions: o } = (function (e) {
          let t = e.toLowerCase().trim();
          const n = {};
          return (
            -1 < e.indexOf("(") &&
              ((e = e.split("(")),
              (t = e[0].toLowerCase().trim()),
              (e = e[1].substring(0, e[1].length - 1)),
              "currency" === t && e.indexOf(":") < 0
                ? n.currency || (n.currency = e.trim())
                : "relativetime" === t && e.indexOf(":") < 0
                ? n.range || (n.range = e.trim())
                : e.split(";").forEach((e) => {
                    var t;
                    e &&
                      (([e, ...t] = e.split(":")),
                      (t = t
                        .join(":")
                        .trim()
                        .replace(/^'+|'+$/g, "")),
                      n[e.trim()] || (n[e.trim()] = t),
                      "false" === t && (n[e.trim()] = !1),
                      "true" === t && (n[e.trim()] = !0),
                      isNaN(t) || (n[e.trim()] = parseInt(t, 10)));
                  })),
            { formatName: t, formatOptions: n }
          );
        })(n);
        if (this.formats[n]) {
          let e = t;
          try {
            var r =
                (s && s.formatParams && s.formatParams[s.interpolationkey]) ||
                {},
              a = r.locale || r.lng || s.locale || s.lng || i;
            e = this.formats[n](t, a, { ...o, ...s, ...r });
          } catch (e) {
            this.logger.warn(e);
          }
          return e;
        }
        return this.logger.warn("there was no format function for " + n), t;
      }, e);
    }
  }
  class bu extends Zl {
    constructor(e, t, n) {
      var o =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
      super(),
        (this.backend = e),
        (this.store = t),
        (this.services = n),
        (this.languageUtils = n.languageUtils),
        (this.options = o),
        (this.logger = Xl.create("backendConnector")),
        (this.waitingReads = []),
        (this.maxParallelReads = o.maxParallelReads || 10),
        (this.readingCalls = 0),
        (this.maxRetries = 0 <= o.maxRetries ? o.maxRetries : 5),
        (this.retryTimeout = 1 <= o.retryTimeout ? o.retryTimeout : 350),
        (this.state = {}),
        (this.queue = []),
        this.backend && this.backend.init && this.backend.init(n, o.backend, o);
    }
    queueLoad(e, t, r, n) {
      const a = {},
        i = {},
        s = {},
        c = {};
      return (
        e.forEach((n) => {
          let o = !0;
          t.forEach((e) => {
            var t = n + "|" + e;
            !r.reload && this.store.hasResourceBundle(n, e)
              ? (this.state[t] = 2)
              : this.state[t] < 0 ||
                (1 === this.state[t]
                  ? void 0 === i[t] && (i[t] = !0)
                  : ((this.state[t] = 1),
                    (o = !1),
                    void 0 === i[t] && (i[t] = !0),
                    void 0 === a[t] && (a[t] = !0),
                    void 0 === c[e] && (c[e] = !0)));
          }),
            o || (s[n] = !0);
        }),
        (Object.keys(a).length || Object.keys(i).length) &&
          this.queue.push({
            pending: i,
            pendingCount: Object.keys(i).length,
            loaded: {},
            errors: [],
            callback: n,
          }),
        {
          toLoad: Object.keys(a),
          pending: Object.keys(i),
          toLoadLanguages: Object.keys(s),
          toLoadNamespaces: Object.keys(c),
        }
      );
    }
    loaded(a, i, e) {
      const t = a.split("|"),
        s = t[0],
        c = t[1],
        l =
          (i && this.emit("failedLoading", s, c, i),
          e && this.store.addResourceBundle(s, c, e),
          (this.state[a] = i ? -1 : 2),
          {});
      this.queue.forEach((n) => {
        var e = n.loaded,
          t = [s],
          o = c,
          r = void 0,
          { obj: e, k: t } = Dl(e, t, Object);
        (e[t] = e[t] || []),
          r && (e[t] = e[t].concat(o)),
          r || e[t].push(o),
          (r = a),
          void 0 !== (e = n).pending[r] &&
            (delete e.pending[r], e.pendingCount--),
          i && n.errors.push(i),
          0 !== n.pendingCount ||
            n.done ||
            (Object.keys(n.loaded).forEach((t) => {
              l[t] || (l[t] = {});
              var e = n.loaded[t];
              e.length &&
                e.forEach((e) => {
                  void 0 === l[t][e] && (l[t][e] = !0);
                });
            }),
            (n.done = !0),
            n.errors.length ? n.callback(n.errors) : n.callback());
      }),
        this.emit("loaded", l),
        (this.queue = this.queue.filter((e) => !e.done));
    }
    read(o, r, a) {
      let i =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
        s =
          4 < arguments.length && void 0 !== arguments[4]
            ? arguments[4]
            : this.retryTimeout,
        c = 5 < arguments.length ? arguments[5] : void 0;
      if (!o.length) return c(null, {});
      if (this.readingCalls >= this.maxParallelReads)
        this.waitingReads.push({
          lng: o,
          ns: r,
          fcName: a,
          tried: i,
          wait: s,
          callback: c,
        });
      else {
        this.readingCalls++;
        const t = (e, t) => {
            var n;
            this.readingCalls--,
              0 < this.waitingReads.length &&
                ((n = this.waitingReads.shift()),
                this.read(n.lng, n.ns, n.fcName, n.tried, n.wait, n.callback)),
              e && t && i < this.maxRetries
                ? setTimeout(() => {
                    this.read.call(this, o, r, a, i + 1, 2 * s, c);
                  }, s)
                : c(e, t);
          },
          n = this.backend[a].bind(this.backend);
        if (2 !== n.length) return n(o, r, t);
        try {
          var e = n(o, r);
          e && "function" == typeof e.then
            ? e.then((e) => t(null, e)).catch(t)
            : t(null, e);
        } catch (e) {
          t(e);
        }
      }
    }
    prepareLoading(e, t) {
      var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
        o = 3 < arguments.length ? arguments[3] : void 0;
      if (!this.backend)
        return (
          this.logger.warn(
            "No backend was added via i18next.use. Will not load resources."
          ),
          o && o()
        );
      "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e));
      e = this.queueLoad(e, (t = "string" == typeof t ? [t] : t), n, o);
      if (!e.toLoad.length) return e.pending.length || o(), null;
      e.toLoad.forEach((e) => {
        this.loadOne(e);
      });
    }
    load(e, t, n) {
      this.prepareLoading(e, t, {}, n);
    }
    reload(e, t, n) {
      this.prepareLoading(e, t, { reload: !0 }, n);
    }
    loadOne(n) {
      let o =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
      const e = n.split("|"),
        r = e[0],
        a = e[1];
      this.read(r, a, "read", void 0, void 0, (e, t) => {
        e &&
          this.logger.warn(
            `${o}loading namespace ${a} for language ${r} failed`,
            e
          ),
          !e &&
            t &&
            this.logger.log(`${o}loaded namespace ${a} for language ` + r, t),
          this.loaded(n, e, t);
      });
    }
    saveMissing(t, n, o, r, a) {
      let e =
          5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : {},
        i =
          6 < arguments.length && void 0 !== arguments[6]
            ? arguments[6]
            : () => {};
      if (
        this.services.utils &&
        this.services.utils.hasLoadedNamespace &&
        !this.services.utils.hasLoadedNamespace(n)
      )
        this.logger.warn(
          `did not save key "${o}" as the namespace "${n}" was not yet loaded`,
          "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
        );
      else if (null != o && "" !== o) {
        if (this.backend && this.backend.create) {
          var a = { ...e, isUpdate: a },
            s = this.backend.create.bind(this.backend);
          if (s.length < 6)
            try {
              let e;
              (e = 5 === s.length ? s(t, n, o, r, a) : s(t, n, o, r)) &&
              "function" == typeof e.then
                ? e.then((e) => i(null, e)).catch(i)
                : i(null, e);
            } catch (e) {
              i(e);
            }
          else s(t, n, o, r, i, a);
        }
        t && t[0] && this.store.addResource(t[0], n, o, r);
      }
    }
  }
  function vu() {
    return {
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !1,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function (e) {
        let t = {};
        if (
          ("object" == typeof e[1] && (t = e[1]),
          "string" == typeof e[1] && (t.defaultValue = e[1]),
          "string" == typeof e[2] && (t.tDescription = e[2]),
          "object" == typeof e[2] || "object" == typeof e[3])
        ) {
          const n = e[3] || e[2];
          Object.keys(n).forEach((e) => {
            t[e] = n[e];
          });
        }
        return t;
      },
      interpolation: {
        escapeValue: !0,
        format: (e, t, n, o) => e,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0,
      },
    };
  }
  function yu(e) {
    return (
      "string" == typeof e.ns && (e.ns = [e.ns]),
      "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
      "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
      e.supportedLngs &&
        e.supportedLngs.indexOf("cimode") < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      e
    );
  }
  function Iu() {}
  class Cu extends Zl {
    constructor() {
      let e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length ? arguments[1] : void 0;
      if (
        (super(),
        (this.options = yu(e)),
        (this.services = {}),
        (this.logger = Xl),
        (this.modules = { external: [] }),
        (n = this),
        Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((e) => {
          "function" == typeof n[e] && (n[e] = n[e].bind(n));
        }),
        t && !this.isInitialized && !e.isClone)
      ) {
        if (!this.options.initImmediate) return this.init(e, t), this;
        setTimeout(() => {
          this.init(e, t);
        }, 0);
      }
      var n;
    }
    init() {
      var r = this;
      let e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        n = 1 < arguments.length ? arguments[1] : void 0;
      "function" == typeof e && ((n = e), (e = {})),
        !e.defaultNS &&
          !1 !== e.defaultNS &&
          e.ns &&
          ("string" == typeof e.ns
            ? (e.defaultNS = e.ns)
            : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
      var t = vu();
      function o(e) {
        return e ? ("function" == typeof e ? new e() : e) : null;
      }
      if (
        ((this.options = { ...t, ...this.options, ...yu(e) }),
        "v1" !== this.options.compatibilityAPI &&
          (this.options.interpolation = {
            ...t.interpolation,
            ...this.options.interpolation,
          }),
        void 0 !== e.keySeparator &&
          (this.options.userDefinedKeySeparator = e.keySeparator),
        void 0 !== e.nsSeparator &&
          (this.options.userDefinedNsSeparator = e.nsSeparator),
        !this.options.isClone)
      ) {
        this.modules.logger
          ? Xl.init(o(this.modules.logger), this.options)
          : Xl.init(null, this.options);
        let e;
        this.modules.formatter
          ? (e = this.modules.formatter)
          : typeof Intl < "u" && (e = mu);
        var a = new iu(this.options),
          i =
            ((this.store = new tu(this.options.resources, this.options)),
            this.services);
        (i.logger = Xl),
          (i.resourceStore = this.store),
          (i.languageUtils = a),
          (i.pluralResolver = new gu(a, {
            prepend: this.options.pluralSeparator,
            compatibilityJSON: this.options.compatibilityJSON,
            simplifyPluralSuffix: this.options.simplifyPluralSuffix,
          })),
          !e ||
            (this.options.interpolation.format &&
              this.options.interpolation.format !== t.interpolation.format) ||
            ((i.formatter = o(e)),
            i.formatter.init(i, this.options),
            (this.options.interpolation.format = i.formatter.format.bind(
              i.formatter
            ))),
          (i.interpolator = new hu(this.options)),
          (i.utils = {
            hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
          }),
          (i.backendConnector = new bu(
            o(this.modules.backend),
            i.resourceStore,
            i,
            this.options
          )),
          i.backendConnector.on("*", function (e) {
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              n[o - 1] = arguments[o];
            r.emit(e, ...n);
          }),
          this.modules.languageDetector &&
            ((i.languageDetector = o(this.modules.languageDetector)),
            i.languageDetector.init) &&
            i.languageDetector.init(i, this.options.detection, this.options),
          this.modules.i18nFormat &&
            ((i.i18nFormat = o(this.modules.i18nFormat)), i.i18nFormat.init) &&
            i.i18nFormat.init(this),
          (this.translator = new ru(this.services, this.options)),
          this.translator.on("*", function (e) {
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              n[o - 1] = arguments[o];
            r.emit(e, ...n);
          }),
          this.modules.external.forEach((e) => {
            e.init && e.init(this);
          });
      }
      (this.format = this.options.interpolation.format),
        (n = n || Iu),
        !this.options.fallbackLng ||
          this.services.languageDetector ||
          this.options.lng ||
          (0 <
            (a = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng
            )).length &&
            "dev" !== a[0] &&
            (this.options.lng = a[0])),
        this.services.languageDetector ||
          this.options.lng ||
          this.logger.warn(
            "init: no languageDetector is used and no lng is defined"
          ),
        [
          "getResource",
          "hasResourceBundle",
          "getResourceBundle",
          "getDataByLanguage",
        ].forEach((e) => {
          this[e] = function () {
            return r.store[e](...arguments);
          };
        }),
        [
          "addResource",
          "addResources",
          "addResourceBundle",
          "removeResourceBundle",
        ].forEach((e) => {
          this[e] = function () {
            return r.store[e](...arguments), r;
          };
        });
      const s = jl(),
        c = () => {
          var e = (e, t) => {
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
              (this.isInitialized = !0),
              this.options.isClone ||
                this.logger.log("initialized", this.options),
              this.emit("initialized", this.options),
              s.resolve(t),
              n(e, t);
          };
          if (
            this.languages &&
            "v1" !== this.options.compatibilityAPI &&
            !this.isInitialized
          )
            return e(null, this.t.bind(this));
          this.changeLanguage(this.options.lng, e);
        };
      return (
        this.options.resources || !this.options.initImmediate
          ? c()
          : setTimeout(c, 0),
        s
      );
    }
    loadResources(e) {
      let t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Iu;
      var n = "string" == typeof e ? e : this.language;
      if (
        ("function" == typeof e && (t = e),
        !this.options.resources || this.options.partialBundledLanguages)
      ) {
        if (
          n &&
          "cimode" === n.toLowerCase() &&
          (!this.options.preload || 0 === this.options.preload.length)
        )
          return t();
        const o = [],
          r = (e) => {
            e &&
              "cimode" !== e &&
              this.services.languageUtils.toResolveHierarchy(e).forEach((e) => {
                "cimode" !== e && o.indexOf(e) < 0 && o.push(e);
              });
          };
        n
          ? r(n)
          : this.services.languageUtils
              .getFallbackCodes(this.options.fallbackLng)
              .forEach((e) => r(e)),
          this.options.preload && this.options.preload.forEach((e) => r(e)),
          this.services.backendConnector.load(o, this.options.ns, (e) => {
            e ||
              this.resolvedLanguage ||
              !this.language ||
              this.setResolvedLanguage(this.language),
              t(e);
          });
      } else t(null);
    }
    reloadResources(e, t, n) {
      const o = jl();
      return (
        (e = e || this.languages),
        (t = t || this.options.ns),
        (n = n || Iu),
        this.services.backendConnector.reload(e, t, (e) => {
          o.resolve(), n(e);
        }),
        o
      );
    }
    use(e) {
      if (!e)
        throw new Error(
          "You are passing an undefined module! Please check the object you are passing to i18next.use()"
        );
      if (e.type)
        return (
          "backend" === e.type && (this.modules.backend = e),
          ("logger" === e.type || (e.log && e.warn && e.error)) &&
            (this.modules.logger = e),
          "languageDetector" === e.type && (this.modules.languageDetector = e),
          "i18nFormat" === e.type && (this.modules.i18nFormat = e),
          "postProcessor" === e.type && nu.addPostProcessor(e),
          "formatter" === e.type && (this.modules.formatter = e),
          "3rdParty" === e.type && this.modules.external.push(e),
          this
        );
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    }
    setResolvedLanguage(e) {
      if (e && this.languages && !(-1 < ["cimode", "dev"].indexOf(e)))
        for (let e = 0; e < this.languages.length; e++) {
          var t = this.languages[e];
          if (
            !(-1 < ["cimode", "dev"].indexOf(t)) &&
            this.store.hasLanguageSomeTranslations(t)
          ) {
            this.resolvedLanguage = t;
            break;
          }
        }
    }
    changeLanguage(n, o) {
      var r = this;
      this.isLanguageChangingTo = n;
      const a = jl(),
        i =
          (this.emit("languageChanging", n),
          (e) => {
            (this.language = e),
              (this.languages =
                this.services.languageUtils.toResolveHierarchy(e)),
              (this.resolvedLanguage = void 0),
              this.setResolvedLanguage(e);
          }),
        s = (e, t) => {
          t
            ? (i(t),
              this.translator.changeLanguage(t),
              (this.isLanguageChangingTo = void 0),
              this.emit("languageChanged", t),
              this.logger.log("languageChanged", t))
            : (this.isLanguageChangingTo = void 0),
            a.resolve(function () {
              return r.t(...arguments);
            }),
            o &&
              o(e, function () {
                return r.t(...arguments);
              });
        },
        e = (e) => {
          const t =
            "string" ==
            typeof (e = n || e || !this.services.languageDetector ? e : [])
              ? e
              : this.services.languageUtils.getBestMatchFromCodes(e);
          t &&
            (this.language || i(t),
            this.translator.language || this.translator.changeLanguage(t),
            this.services.languageDetector) &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(t),
            this.loadResources(t, (e) => {
              s(e, t);
            });
        };
      return (
        n ||
        !this.services.languageDetector ||
        this.services.languageDetector.async
          ? !n &&
            this.services.languageDetector &&
            this.services.languageDetector.async
            ? 0 === this.services.languageDetector.detect.length
              ? this.services.languageDetector.detect().then(e)
              : this.services.languageDetector.detect(e)
            : e(n)
          : e(this.services.languageDetector.detect()),
        a
      );
    }
    getFixedT(e, t, c) {
      var l = this;
      function u(e, t) {
        let n;
        if ("object" != typeof t) {
          for (
            var o = arguments.length, r = new Array(2 < o ? o - 2 : 0), a = 2;
            a < o;
            a++
          )
            r[a - 2] = arguments[a];
          n = l.options.overloadTranslationOptionHandler([e, t].concat(r));
        } else n = { ...t };
        (n.lng = n.lng || u.lng),
          (n.lngs = n.lngs || u.lngs),
          (n.ns = n.ns || u.ns),
          (n.keyPrefix = n.keyPrefix || c || u.keyPrefix);
        const i = l.options.keySeparator || ".";
        let s;
        return (
          (s =
            n.keyPrefix && Array.isArray(e)
              ? e.map((e) => "" + n.keyPrefix + i + e)
              : n.keyPrefix
              ? "" + n.keyPrefix + i + e
              : e),
          l.t(s, n)
        );
      }
      return (
        "string" == typeof e ? (u.lng = e) : (u.lngs = e),
        (u.ns = t),
        (u.keyPrefix = c),
        u
      );
    }
    t() {
      return this.translator && this.translator.translate(...arguments);
    }
    exists() {
      return this.translator && this.translator.exists(...arguments);
    }
    setDefaultNamespace(e) {
      this.options.defaultNS = e;
    }
    hasLoadedNamespace(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      if (!this.isInitialized)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18next was not initialized",
            this.languages
          ),
          !1
        );
      if (!this.languages || !this.languages.length)
        return (
          this.logger.warn(
            "hasLoadedNamespace: i18n.languages were undefined or empty",
            this.languages
          ),
          !1
        );
      var n = t.lng || this.resolvedLanguage || this.languages[0],
        o = !!this.options && this.options.fallbackLng,
        r = this.languages[this.languages.length - 1];
      if ("cimode" === n.toLowerCase()) return !0;
      var a = (e, t) => {
        e = this.services.backendConnector.state[e + "|" + t];
        return -1 === e || 2 === e;
      };
      if (t.precheck) {
        t = t.precheck(this, a);
        if (void 0 !== t) return t;
      }
      return !!(
        this.hasResourceBundle(n, e) ||
        !this.services.backendConnector.backend ||
        (this.options.resources && !this.options.partialBundledLanguages) ||
        (a(n, e) && (!o || a(r, e)))
      );
    }
    loadNamespaces(e, t) {
      const n = jl();
      return this.options.ns
        ? ((e = "string" == typeof e ? [e] : e).forEach((e) => {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          }),
          this.loadResources((e) => {
            n.resolve(), t && t(e);
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    loadLanguages(e, t) {
      const n = jl(),
        o = this.options.preload || [],
        r = (e = "string" == typeof e ? [e] : e).filter(
          (e) => o.indexOf(e) < 0
        );
      return r.length
        ? ((this.options.preload = o.concat(r)),
          this.loadResources((e) => {
            n.resolve(), t && t(e);
          }),
          n)
        : (t && t(), Promise.resolve());
    }
    dir(e) {
      var t;
      return !(e =
        e ||
        this.resolvedLanguage ||
        (this.languages && 0 < this.languages.length
          ? this.languages[0]
          : this.language)) ||
        ((t = (this.services && this.services.languageUtils) || new iu(vu())),
        -1 <
          [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb",
          ].indexOf(t.getLanguagePartFromCode(e))) ||
        1 < e.toLowerCase().indexOf("-arab")
        ? "rtl"
        : "ltr";
    }
    static createInstance() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length ? arguments[1] : void 0;
      return new Cu(e, t);
    }
    cloneInstance() {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Iu,
        n = e.forkResourceStore;
      n && delete e.forkResourceStore;
      const o = { ...this.options, ...e, isClone: !0 },
        r = new Cu(o);
      return (
        (void 0 === e.debug && void 0 === e.prefix) ||
          (r.logger = r.logger.clone(e)),
        ["store", "services", "language"].forEach((e) => {
          r[e] = this[e];
        }),
        (r.services = { ...this.services }),
        (r.services.utils = {
          hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
        }),
        n &&
          ((r.store = new tu(this.store.data, o)),
          (r.services.resourceStore = r.store)),
        (r.translator = new ru(r.services, o)),
        r.translator.on("*", function (e) {
          for (
            var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          r.emit(e, ...n);
        }),
        r.init(o, t),
        (r.translator.options = o),
        (r.translator.backendConnector.services.utils = {
          hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
        }),
        r
      );
    }
    toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage,
      };
    }
  }
  const C = Cu.createInstance(),
    xu =
      ((C.createInstance = Cu.createInstance),
      C.createInstance,
      C.dir,
      C.init,
      C.loadResources,
      C.reloadResources,
      C.use,
      C.changeLanguage,
      C.getFixedT,
      C.t,
      C.exists,
      C.setDefaultNamespace,
      C.hasLoadedNamespace,
      C.loadNamespaces,
      C.loadLanguages,
      (e, t) => {
        t = document.querySelectorAll(t.selectorText);
        return Array.from(t).includes(e);
      }),
    Su = (e) => {
      var t = window.getComputedStyle(e)["fontSize"];
      (e.dataset.accOrgfontsize = parseFloat(t).toString()),
        (e.style.fontSize = t);
    },
    wu = () => ({
      language: localStorage.getItem("i18nextLng") ?? C.language,
      isBlueLightFilter: !1,
      brightness: { isBrightness: !1, brightness: 150 },
      isDarkContrast: !1,
      isLightContrast: !1,
      highContrast: { isHighContrast: !1, contrast: 125 },
      highSaturation: { isHighSaturation: !1, saturation: 200 },
      lowSaturation: { isLowSaturation: !1, saturation: 50 },
      isMonochrome: !1,
      color: "",
      isVisualImpairment: !1,
      adjustFontSizePercentage: 100,
      textAlign: { left: null, center: null, right: null },
      isDyslexiaFont: !1,
      isFontWeightBold: !1,
      highlightLinks: !1,
      highlightTitles: !1,
      letterSpacing: 0,
      lineHeight: { isLineHeight: !1, lineHeight: 0 },
      wordSpacing: 0,
      zoom: { isZoom: !1, zoom: 1 },
      isBigCursor: !1,
      showReadingGuide: !1,
      activateTextToSpeech: !1,
    }),
    Au = "acc-big-cursor-style",
    Eu = "acc-big-cursor",
    Nu = (o, r) => {
      G.useLayoutEffect(() => {
        var e, t, n;
        r ||
          ((e = document.getElementById(Au)),
          o && !e
            ? (document.documentElement.classList.add(Eu),
              ((t = document.createElement("style")).id = Au),
              (t.innerHTML = `
          html.${Eu}  body * {
           cursor:url(${
             ((n = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="57px" height="98px" viewBox="0 0 57 97" version="1.1">
<g id="surface1">
<path style=" stroke:black;stroke-width:4;fill-rule:nonzero;fill:#ccc;fill-opacity:1;" d="M 29.65625 92.226562 L 46.339844 85.503906 L 33.871094 54.734375 L 54.179688 55.089844 L 3.910156 4.773438 L 2.820312 75.773438 L 17.183594 61.453125 Z M 29.65625 92.226562 "/>
</g>
</svg>
`),
             "data:image/svg+xml;base64," + window.btoa(n))
           }),default !important;}
   `),
              document.head.appendChild(t))
            : !o &&
              e &&
              ((n = document.getElementById(Au)),
              document.documentElement.classList.remove(Eu),
              null != n) &&
              n.remove());
      }, [o, r]);
    },
    ku = ({ accState: e, onChangeAccState: t }) => {
      e = e.isBigCursor;
      Nu(e);
      return m.jsx(g, {
        Icon: Wl,
        isToggled: e,
        onToggle: () => {
          t((e) => {
            e.isBigCursor = !e.isBigCursor;
          });
        },
        titleTranslationKey: "tools.bigCursor",
        title: "Big Cursor",
      });
    },
    Lu = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "AutoStoriesIcon",
          ...e,
        },
        we.createElement("path", {
          d: "m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z",
        })
      ),
    Gu = (t, e, a) => {
      const [i, s] = G.useState(0),
        c = G.useMemo(
          () => (0 < i ? `calc(100vh - ${i}px - ${e}px)` : 0),
          [i, e]
        );
      G.useEffect(() => {
        if (!a) {
          if (t) {
            const e = (e) => {
              s(e.clientY);
            };
            {
              var n = i;
              var o = c;
              var r = document.getElementById(
                "acc-portal-[readingGuide-container]"
              );
              let e = document.getElementById("acc-readingGuide-top"),
                t =
                  (e ||
                    (((e = document.createElement("div")).id =
                      "acc-readingGuide-top"),
                    (e.className = "acc-readingGuide"),
                    (e.style.height = n + "px"),
                    r.appendChild(e)),
                  (e.style.height = n + "px"),
                  document.getElementById("acc-readingGuide-bottom"));
              t ||
                (((t = document.createElement("div")).id =
                  "acc-readingGuide-bottom"),
                (t.className = "acc-readingGuide"),
                (t.style.top = "auto"),
                (t.style.bottom = "0"),
                (t.style.height = "" + o),
                r.appendChild(t)),
                (t.style.height = "" + o);
            }
            return (
              window.addEventListener("mousemove", e),
              () => {
                window.removeEventListener("mousemove", e);
              }
            );
          }
          (n = document.getElementById("acc-readingGuide-top")),
            (r =
              (n && n.remove(),
              document.getElementById("acc-readingGuide-bottom")));
          r && r.remove();
        }
      }, [t, a, i, c]);
    },
    Tu = ({ rgGap: e = 100, accState: t, onChangeAccState: n }) => {
      t = t.showReadingGuide;
      Gu(t, e);
      return m.jsx(g, {
        Icon: Lu,
        isToggled: t,
        onToggle: () => {
          n((e) => {
            e.showReadingGuide = !e.showReadingGuide;
          });
        },
        titleTranslationKey: "tools.readingGuide",
        title: "Reading Guide",
      });
    },
    Bu = (e) =>
      we.createElement(
        "svg",
        {
          className:
            "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root",
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 24 24",
          "data-testid": "RecordVoiceOverIcon",
          ...e,
        },
        we.createElement("circle", { cx: 9, cy: 9, r: 4 }),
        we.createElement("path", {
          d: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z",
        })
      ),
    Ru = { accSelectVoicesContainer: "_accSelectVoicesContainer_1d5zn_1" },
    Mu = "Sorry, your browser does not support text-to-speech!",
    Ou = ({ accState: e, onChangeAccState: t }) => {
      const { activateTextToSpeech: n, language: o } = e,
        [r, a] = G.useState(!1),
        [i, s] = G.useState(!0),
        [c, l] = G.useState(null),
        u = G.useRef(null),
        d =
          (G.useEffect(() => {
            if (n) {
              if (window.speechSynthesis) {
                const e = setTimeout(() => {
                  u.current ||
                    ((e = window.speechSynthesis
                      .getVoices()
                      .reduce((e, t) => ((e[t.lang] = t), e), {})),
                    (u.current = Object.values(e)));
                  var e =
                    u.current.find((e) => e.lang.includes(o)) ?? u.current[0];
                  l(e), a(!0), s(!1);
                }, 1e3);
                return () => {
                  window.clearTimeout(e);
                };
              }
              alert(Mu);
            }
          }, [n]),
          G.useEffect(() => {
            if (n && r && !i) {
              const e = () => {
                  var e = window.getSelection();
                  e && (e = e.toString()) && t(e);
                },
                t = (e) => {
                  e = new SpeechSynthesisUtterance(e);
                  c && (e.voice = c), window.speechSynthesis.speak(e);
                };
              return (
                document.addEventListener("mouseup", e),
                () => {
                  document.removeEventListener("mouseup", e);
                }
              );
            }
          }, [n, r, i, c]),
          (e) => {
            l(e);
          });
      return m.jsx(g, {
        Icon: Bu,
        isToggled: n,
        onToggle: () => {
          t((e) => {
            e.activateTextToSpeech = !e.activateTextToSpeech;
          });
        },
        titleTranslationKey: "tools.textToSpeach",
        title: "Text To Speach",
        tooltipTranslationKey: "tools.textToSpeachTooltip",
        children: n
          ? i
            ? m.jsx("p", { style: { color: "red" }, children: "...lading" })
            : r && u.current
            ? m.jsx("div", {
                onClick: (e) => {
                  e.stopPropagation();
                },
                children: m.jsx(Ts, {
                  className: Ru.accSelectVoicesContainer,
                  classNamePrefix: "accSelectVoices",
                  options: u.current,
                  value: c,
                  onChange: d,
                  getOptionLabel: (e) => e.lang,
                  getOptionValue: (e) => e.lang,
                }),
              })
            : m.jsx("p", { style: { color: "red" }, children: Mu })
          : null,
      });
    },
    Vu = ({ accState: e, onChangeAccState: t }) =>
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(ku, { accState: e, onChangeAccState: t }),
          m.jsx(Tu, { accState: e, onChangeAccState: t }),
          m.jsx(Ou, { accState: e, onChangeAccState: t }),
        ],
      }),
    Fu = { accMenuContent: "_accMenuContent_1v82o_1" },
    Pu = ({
      accState: e,
      onChangeAccState: t,
      onCollapse: n,
      collapsedState: o,
    }) => {
      var r = Object.values(o).every(({ isExpanded: e }) => !e);
      return m.jsxs("div", {
        className: Fu.accMenuContent,
        children: [
          m.jsx(Os, {
            isAccMenuContentActive: !r,
            onCollapse: n,
            isExpanded: o.content.isExpanded,
            name: o.content.name,
            Icon: o.content.icon,
            tKey: "content.title",
            children: m.jsx(fc, { accState: e, onChangeAccState: t }),
          }),
          m.jsx(Os, {
            isAccMenuContentActive: !r,
            onCollapse: n,
            isExpanded: o.colors.isExpanded,
            name: o.colors.name,
            Icon: o.colors.icon,
            tKey: "colors.title",
            children: m.jsx(Hl, { accState: e, onChangeAccState: t }),
          }),
          m.jsx(Os, {
            isAccMenuContentActive: !r,
            onCollapse: n,
            isExpanded: o.tools.isExpanded,
            name: o.tools.name,
            Icon: o.tools.icon,
            tKey: "tools.title",
            children: m.jsx(Vu, { accState: e, onChangeAccState: t }),
          }),
        ],
      });
    },
    Hu = [
      { label: "English", value: "en-US" },
      { label: "עברית", value: "he-IL" },
      { label: "Русский", value: "ru" },
      { label: "普通话", value: "zhzn" },
      { label: "Español", value: "es" },
      { label: "العربية", value: "ar" },
      { label: "বাংলা", value: "bn" },
      { label: "हिन्दी", value: "hi" },
      { label: "Português", value: "ptpt" },
      { label: "日本語", value: "ja" },
      { label: "Deutsch", value: "de" },
      { label: "简体中文", value: "wuu" },
      { label: "한국어", value: "ko" },
      { label: "Français", value: "fr" },
      { label: "Türkçe", value: "tr" },
      { label: "Tiếng Việt", value: "vi" },
      { label: "తెలుగు", value: "te" },
      { label: "मराठी", value: "mr" },
      { label: "தமிழ்", value: "ta" },
      { label: "Italiano", value: "it" },
      { label: "اردو", value: "ur" },
      { label: "ગુજરાતી", value: "gu" },
      { label: "Polski", value: "pl" },
      { label: "Українська", value: "uk" },
      { label: "فارسی", value: "fa" },
      { label: "മലയാളം", value: "ml" },
      { label: "ಕನ್ನಡ", value: "kn" },
      { label: "ଓଡ଼ିଆ", value: "or" },
      { label: "Română", value: "ro" },
      { label: "Azərbaycan", value: "az" },
      { label: "هَوْسَ", value: "ha" },
      { label: "ဗမာစာ", value: "my" },
      { label: "српскохрватски", value: "sh" },
      { label: "ไทย", value: "th" },
      { label: "Nederlands", value: "nl" },
      { label: "Yorùbá", value: "yo" },
      { label: "سنڌي", value: "sd" },
      { label: "Latviešu", value: "lv" },
    ],
    Wu = Hu.reduce((e, t) => ((e[t.value] = t), e), {}),
    _u = {
      content: {
        name: "content",
        isExpanded: !1,
        icon: (e) =>
          we.createElement(
            "svg",
            {
              className:
                "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
              focusable: "false",
              "aria-hidden": "true",
              viewBox: "0 0 24 24",
              "data-testid": "ContentCopyIcon",
              ...e,
            },
            we.createElement("path", {
              d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
            })
          ),
      },
      colors: { name: "colors", isExpanded: !1, icon: Ml },
      tools: {
        name: "tools",
        isExpanded: !1,
        icon: (e) =>
          we.createElement(
            "svg",
            {
              className:
                "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root",
              focusable: "false",
              "aria-hidden": "true",
              viewBox: "0 0 24 24",
              "data-testid": "HandymanIcon",
              ...e,
            },
            we.createElement("path", {
              d: "m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41z",
            }),
            we.createElement("path", {
              d: "m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05z",
            })
          ),
      },
    },
    Xu = ({
      accState: e,
      display: t,
      onInit: n,
      onLangChange: o,
      onChangeAccState: r,
      onShow: a,
      showAcc: i,
      hasLanguages: s,
    }) => {
      const [c, l] = G.useState(_u),
        u = e["language"],
        d = G.useRef();
      G.useEffect(() => {
        d.current && d.current.focus();
      }, []);
      return m.jsxs("div", {
        id: Kt,
        className: Bs.accAccessibilityMenu,
        children: [
          m.jsxs("div", {
            style: { display: t },
            className: Bs.accMenu,
            children: [
              m.jsx(In, { onShow: a, onInit: n }),
              m.jsx(Ts, {
                className: Bs["acc-lang-select-container"],
                options: s ? Hu : [Hu[0]],
                value: Wu[u],
                onChange: (e) => e && o(e.value),
                ref: d,
              }),
              m.jsx(Pu, {
                onCollapse: (o) => {
                  l((n) =>
                    Xt(_u, (e) => {
                      var t = n[o].isExpanded;
                      e[o].isExpanded = !t;
                    })
                  );
                },
                accState: e,
                onChangeAccState: r,
                collapsedState: c,
              }),
              m.jsx(xn, {}),
            ],
          }),
          i && m.jsx("div", { className: Bs.accAccessibilityMenu__overlay }),
        ],
      });
    };
  var e = [],
    Zu = e.forEach,
    ju = e.slice;
  function zu() {
    if (null === Ku)
      try {
        Ku = "undefined" !== window && null !== window.localStorage;
        var e = "i18next.translate.boo";
        window.localStorage.setItem(e, "foo"),
          window.localStorage.removeItem(e);
      } catch {
        Ku = !1;
      }
    return Ku;
  }
  function Du() {
    if (null === ed)
      try {
        ed = "undefined" !== window && null !== window.sessionStorage;
        var e = "i18next.translate.boo";
        window.sessionStorage.setItem(e, "foo"),
          window.sessionStorage.removeItem(e);
      } catch {
        ed = !1;
      }
    return ed;
  }
  var Yu = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
    Ju = function (e, t, n, o) {
      var r =
        4 < arguments.length && void 0 !== arguments[4]
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((r.expires = new Date()),
        r.expires.setTime(r.expires.getTime() + 60 * n * 1e3)),
        o && (r.domain = o),
        (document.cookie = (function (e, t, n) {
          var n = n || {},
            t = ((n.path = n.path || "/"), encodeURIComponent(t)),
            o = "".concat(e, "=").concat(t);
          if (0 < n.maxAge) {
            e = +n.maxAge;
            if (Number.isNaN(e)) throw new Error("maxAge should be a Number");
            o += "; Max-Age=".concat(Math.floor(e));
          }
          if (n.domain) {
            if (!Yu.test(n.domain))
              throw new TypeError("option domain is invalid");
            o += "; Domain=".concat(n.domain);
          }
          if (n.path) {
            if (!Yu.test(n.path)) throw new TypeError("option path is invalid");
            o += "; Path=".concat(n.path);
          }
          if (n.expires) {
            if ("function" != typeof n.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            o += "; Expires=".concat(n.expires.toUTCString());
          }
          if (
            (n.httpOnly && (o += "; HttpOnly"),
            n.secure && (o += "; Secure"),
            n.sameSite)
          )
            switch (
              "string" == typeof n.sameSite
                ? n.sameSite.toLowerCase()
                : n.sameSite
            ) {
              case !0:
                o += "; SameSite=Strict";
                break;
              case "lax":
                o += "; SameSite=Lax";
                break;
              case "strict":
                o += "; SameSite=Strict";
                break;
              case "none":
                o += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          return o;
        })(e, encodeURIComponent(t), r));
    },
    Uu = function (e) {
      for (
        var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0;
        o < n.length;
        o++
      ) {
        for (var r = n[o]; " " === r.charAt(0); ) r = r.substring(1, r.length);
        if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
      }
      return null;
    },
    Qu = {
      name: "cookie",
      lookup: function (e) {
        var t;
        return (t =
          e.lookupCookie && typeof document < "u" && (e = Uu(e.lookupCookie))
            ? e
            : t);
      },
      cacheUserLanguage: function (e, t) {
        t.lookupCookie &&
          typeof document < "u" &&
          Ju(
            t.lookupCookie,
            e,
            t.cookieMinutes,
            t.cookieDomain,
            t.cookieOptions
          );
      },
    },
    $u = {
      name: "querystring",
      lookup: function (e) {
        var t;
        if (typeof window < "u")
          for (
            var n = window.location.search,
              o = (n =
                !window.location.search &&
                window.location.hash &&
                -1 < window.location.hash.indexOf("?")
                  ? window.location.hash.substring(
                      window.location.hash.indexOf("?")
                    )
                  : n)
                .substring(1)
                .split("&"),
              r = 0;
            r < o.length;
            r++
          ) {
            var a = o[r].indexOf("=");
            0 < a &&
              o[r].substring(0, a) === e.lookupQuerystring &&
              (t = o[r].substring(a + 1));
          }
        return t;
      },
    },
    Ku = null,
    qu = {
      name: "localStorage",
      lookup: function (e) {
        var t;
        return (t =
          e.lookupLocalStorage &&
          zu() &&
          (e = window.localStorage.getItem(e.lookupLocalStorage))
            ? e
            : t);
      },
      cacheUserLanguage: function (e, t) {
        t.lookupLocalStorage &&
          zu() &&
          window.localStorage.setItem(t.lookupLocalStorage, e);
      },
    },
    ed = null,
    td = {
      name: "sessionStorage",
      lookup: function (e) {
        var t;
        return (t =
          e.lookupSessionStorage &&
          Du() &&
          (e = window.sessionStorage.getItem(e.lookupSessionStorage))
            ? e
            : t);
      },
      cacheUserLanguage: function (e, t) {
        t.lookupSessionStorage &&
          Du() &&
          window.sessionStorage.setItem(t.lookupSessionStorage, e);
      },
    },
    nd = {
      name: "navigator",
      lookup: function (e) {
        var t = [];
        if (typeof navigator < "u") {
          if (navigator.languages)
            for (var n = 0; n < navigator.languages.length; n++)
              t.push(navigator.languages[n]);
          navigator.userLanguage && t.push(navigator.userLanguage),
            navigator.language && t.push(navigator.language);
        }
        return 0 < t.length ? t : void 0;
      },
    },
    od = {
      name: "htmlTag",
      lookup: function (e) {
        var t,
          e =
            e.htmlTag ||
            (typeof document < "u" ? document.documentElement : null);
        return (t =
          e && "function" == typeof e.getAttribute
            ? e.getAttribute("lang")
            : t);
      },
    },
    rd = {
      name: "path",
      lookup: function (e) {
        var t;
        if (typeof window < "u") {
          var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (n instanceof Array)
            if ("number" == typeof e.lookupFromPathIndex) {
              if ("string" != typeof n[e.lookupFromPathIndex]) return;
              t = n[e.lookupFromPathIndex].replace("/", "");
            } else t = n[0].replace("/", "");
        }
        return t;
      },
    },
    ad = {
      name: "subdomain",
      lookup: function (e) {
        var e =
            "number" == typeof e.lookupFromSubdomainIndex
              ? e.lookupFromSubdomainIndex + 1
              : 1,
          t =
            typeof window < "u" &&
            window.location &&
            window.location.hostname &&
            window.location.hostname.match(
              /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
            );
        if (t) return t[e];
      },
    };
  Tn(id, [
    {
      key: "init",
      value: function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (this.services = e || { languageUtils: {} }),
          (this.options = (function (n) {
            return (
              Zu.call(ju.call(arguments, 1), function (e) {
                if (e) for (var t in e) void 0 === n[t] && (n[t] = e[t]);
              }),
              n
            );
          })(t, this.options || {}, {
            order: [
              "querystring",
              "cookie",
              "localStorage",
              "sessionStorage",
              "navigator",
              "htmlTag",
            ],
            lookupQuerystring: "lng",
            lookupCookie: "i18next",
            lookupLocalStorage: "i18nextLng",
            lookupSessionStorage: "i18nextLng",
            caches: ["localStorage"],
            excludeCacheFor: ["cimode"],
            convertDetectedLanguage: function (e) {
              return e;
            },
          })),
          "string" == typeof this.options.convertDetectedLanguage &&
            -1 < this.options.convertDetectedLanguage.indexOf("15897") &&
            (this.options.convertDetectedLanguage = function (e) {
              return e.replace("-", "_");
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = n),
          this.addDetector(Qu),
          this.addDetector($u),
          this.addDetector(qu),
          this.addDetector(td),
          this.addDetector(nd),
          this.addDetector(od),
          this.addDetector(rd),
          this.addDetector(ad);
      },
    },
    {
      key: "addDetector",
      value: function (e) {
        this.detectors[e.name] = e;
      },
    },
    {
      key: "detect",
      value: function (e) {
        var t = this,
          n = ((e = e || this.options.order), []);
        return (
          e.forEach(function (e) {
            t.detectors[e] &&
              (e =
                (e = t.detectors[e].lookup(t.options)) && "string" == typeof e
                  ? [e]
                  : e) &&
              (n = n.concat(e));
          }),
          (n = n.map(function (e) {
            return t.options.convertDetectedLanguage(e);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? n
            : 0 < n.length
            ? n[0]
            : null
        );
      },
    },
    {
      key: "cacheUserLanguage",
      value: function (t, e) {
        var n = this;
        !(e = e || this.options.caches) ||
          (this.options.excludeCacheFor &&
            -1 < this.options.excludeCacheFor.indexOf(t)) ||
          e.forEach(function (e) {
            n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options);
          });
      },
    },
  ]);
  Ur = id;
  function id(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    Ln(this, id),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(e, t);
  }
  Ur.type = "languageDetector";
  const sd = "portal";
  const cd = ({ children: e, wrapperElementId: r }) => {
      const [t, a] = G.useState(null);
      return (
        G.useLayoutEffect(() => {
          let e = document.getElementById(r ?? sd),
            t = !1;
          return (
            e ||
              ((t = !0),
              (e =
                ((n = r ?? sd),
                (o = document.createElement("div")).setAttribute("id", n),
                document.body.appendChild(o),
                o))),
            a(e),
            () => {
              t && e && e.parentNode && e.parentNode.removeChild(e);
            }
          );
          var n, o;
        }, [r]),
        null === t ? null : x.createPortal(e, t)
      );
    },
    ld = "https://acc-landing.vercel.app/locale/",
    ud = async (e) => (await fetch(e)).json(),
    dd = [
      { lang: "he", name: "hebrew" },
      { lang: "en", name: "english" },
      { lang: "ru", name: "russian" },
      { lang: "zhcn", name: "chineseMandarin" },
      { lang: "es", name: "spanish" },
      { lang: "ar", name: "arabic" },
      { lang: "bn", name: "bengali" },
      { lang: "hi", name: "hindi" },
      { lang: "ptpt", name: "portuguese" },
      { lang: "ja", name: "japanese" },
      { lang: "de", name: "german" },
      { lang: "wuu", name: "chinese" },
      { lang: "ko", name: "korean" },
      { lang: "fr", name: "french" },
      { lang: "tr", name: "turkish" },
      { lang: "vi", name: "vietnamese" },
      { lang: "te", name: "telugu" },
      { lang: "mr", name: "marathi" },
      { lang: "ta", name: "tamil" },
      { lang: "it", name: "italian" },
      { lang: "ur", name: "urdu" },
      { lang: "gu", name: "gujarati" },
      { lang: "pl", name: "polish" },
      { lang: "uk", name: "ukrainian" },
      { lang: "fa", name: "persian" },
      { lang: "ml", name: "malayalam" },
      { lang: "kn", name: "kannada" },
      { lang: "or", name: "oriya" },
      { lang: "ro", name: "romanian" },
      { lang: "az", name: "azerbaijani" },
      { lang: "ha", name: "hausa" },
      { lang: "my", name: "burmese" },
      { lang: "sh", name: "serboCroatian" },
      { lang: "th", name: "thai" },
      { lang: "nl", name: "dutch" },
      { lang: "yo", name: "yoruba" },
      { lang: "sd", name: "sindhi" },
      { lang: "lv", name: "latviski" },
    ],
    gd = [
      "en-US",
      "he-IL",
      "ru",
      "zhcn",
      "es",
      "ar",
      "bn",
      "hi",
      "ptpt",
      "ja",
      "de",
      "wuu",
      "ko",
      "fr",
      "tr",
      "vi",
      "te",
      "yue",
      "mr",
      "ta",
      "it",
      "ur",
      "gu",
      "pl",
      "uk",
      "fa",
      "ml",
      "kn",
      "or",
      "ro",
      "az",
      "ha",
      "my",
      "sh",
      "th",
      "nl",
      "yo",
      "sd",
      "lv",
    ],
    pd = ["ar", "fa", "he", "he-IL", "ur"],
    hd = {
      "accessibility-menu": "Accessibility menu",
      content: {
        title: "Content adjustment",
        adjustFontSize: "Adjust Font Size",
        dyslexiaFont: "Dyslexia Font",
        fontWeight: "Font Weight",
        textAlignLeft: "Text Align Left",
        textAlignCenter: "Text Align Center",
        textAlignRight: "Text Align Right",
        highlightLinks: "Highlight Links",
        highlightTitles: "Highlight Titles",
        letterSpacing: "Letter Spacing",
        wordsSpacing: "Words Spacing",
        lineHeight: "Line Height",
        zoom: "Zoom",
      },
      colors: {
        title: "Color adjustment",
        blueLightFilter: "Blue Light Filter",
        brightnessControl: "Brightness Control",
        darkContrast: "Dark Contrast",
        highContrast: "High Contrast",
        highSaturation: "High Saturation",
        lightContrast: "Light Contrast",
        lowSaturation: "Low Saturation",
        monochrom: "Monochrom",
        textColorPicker: "Text Color Picker",
        visualImpairment: "Visual Impairment",
      },
      tools: {
        title: "Tools",
        bigCursor: "Big Cursor",
        readingGuide: "Reading Guide",
        textToSpeach: "Text To Speach",
        textToSpeachTooltip:
          "In order to activate 'Text To Speech', please click this button, after which you will have to select your preferred language, and then highlight the text in that language.",
      },
    },
    fd = "acc-font-weight-style",
    md = "acc-font-weight",
    bd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(fd)),
          n && !e
            ? (document.documentElement.classList.add(md),
              ((t = document.createElement("style")).id = fd),
              (t.innerHTML = `
                    html.${md} *, *  {
                    font-weight:700 !important;
                  }
              `),
              document.head.appendChild(t))
            : !n &&
              e &&
              (document.documentElement.classList.remove(md), null != e) &&
              e.remove());
      }, [n, o]);
    },
    vd = (e, n) => {
      document.querySelectorAll(`[${e}]`).forEach((e) => {
        var t;
        e &&
          e instanceof HTMLElement &&
          e.dataset.accOrgfontsize &&
          ((t = (+e.dataset.accOrgfontsize * n) / 100),
          (e.style.fontSize = t + "px"));
      });
    },
    yd = (e, t, n) => {
      G.useLayoutEffect(() => {
        n || (0 < t && vd("data-acc-mutation", e));
      }, [e, t, n]),
        G.useLayoutEffect(() => {
          n || vd("data-acc-orgfontsize", e);
        }, [e, n]);
    },
    Id = "acc-align-text",
    Cd = (t, n) => {
      const o = Object.values(t).find((e) => e);
      G.useLayoutEffect(() => {
        var e;
        n ||
          !o ||
          document.getElementById("acc-align-text-style-" + o) ||
          (document.documentElement.classList.add(Id),
          ((e = document.createElement("style")).id =
            "acc-align-text-style-" + o),
          (e.innerHTML = `
                html.${Id} *:not(#${h} *), *:not(#${h} *)  {
                text-align:${o} !important
            }
            `),
          document.head.appendChild(e));
      }, [o, n, t]),
        G.useLayoutEffect(() => {
          var e;
          n ||
            (t.left ||
              ((e = document.getElementById("acc-align-text-style-left")) &&
                (e.remove(), document.documentElement.classList.remove(Id))),
            t.right ||
              ((e = document.getElementById("acc-align-text-style-right")) &&
                (e.remove(), document.documentElement.classList.remove(Id))),
            t.center) ||
            ((e = document.getElementById("acc-align-text-style-center")) &&
              (e.remove(), document.documentElement.classList.remove(Id)));
        }, [t]);
    },
    xd = "acc-highlight-links-style",
    Sd = "acc-highlight-links",
    wd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(xd)),
          n && !e
            ? (document.documentElement.classList.add(Sd),
              ((t = document.createElement("style")).id = xd),
              (t.innerHTML = `
            html.${Sd} a[href],a[href] {
            outline: 2px solid var(--highlight-color) !important;
            outline-offset: 2px !important;
        }
    `),
              document.head.appendChild(t))
            : !n &&
              e &&
              ((t = document.getElementById(xd)),
              document.documentElement.classList.remove(Sd),
              null != t) &&
              t.remove());
      }, [n, o]);
    },
    Ad = "acc-highlight-titles-style",
    Ed = "acc-highlight-titles",
    Nd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(Ad)),
          n && !e
            ? (document.documentElement.classList.add(Ed),
              ((t = document.createElement("style")).id = Ad),
              (t.innerHTML = `
          html.${Ed} h1,h2,h3,h4,h5,h6,h1,h2,h3,h4,h5,h6  {
          outline: 2px solid var(--highlight-color) !important;
          outline-offset: 2px !important;
      }
  `),
              document.head.appendChild(t))
            : !n &&
              e &&
              ((t = document.getElementById(Ad)),
              document.documentElement.classList.remove(Ed),
              null != t) &&
              t.remove());
      }, [n, o]);
    },
    kd = "acc-letter-spacing-style",
    Ld = "acc-letter-spacing",
    Gd = (n, o) => {
      const r = !!n;
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(kd)),
          r && !e
            ? (document.documentElement.classList.add(Ld),
              ((t = document.createElement("style")).id = kd),
              (t.innerHTML = `
            html.${Ld} *:not(#${h} *), *:not(#${h} *)  {
            letter-spacing:${n}px !important;
          }
      `),
              document.head.appendChild(t))
            : r && e
            ? (e.innerHTML = `
        html.${Ld} *:not(#${h} *), *:not(#${h} *)  {
        letter-spacing:${n}px !important;
      }
  `)
            : !r &&
              e &&
              ((t = document.getElementById(kd)),
              document.documentElement.classList.remove(Ld),
              null != t) &&
              t.remove());
      }, [n, r, o]);
    },
    Td = "acc-line-height-style",
    Bd = "acc-line-height",
    Rd = (e, n) => {
      const { lineHeight: o, isLineHeight: r } = e;
      G.useLayoutEffect(() => {
        var e, t;
        n ||
          ((e = document.getElementById(Td)),
          r && !e
            ? (document.documentElement.classList.add(Bd),
              ((t = document.createElement("style")).id = Td),
              (t.innerHTML = `
                  html.${Bd} *:not(#${h} *), *:not(#${h} *)  {
                  line-height:${o.toFixed(1)} !important
                }
            `),
              document.head.appendChild(t))
            : r && e
            ? (e.innerHTML = `
                  html.${Bd} *:not(#${h} *), *:not(#${h} *)  {
                  line-height:${o.toFixed(1)} !important
                }
            `)
            : !r &&
              e &&
              ((t = document.getElementById(Td)),
              document.documentElement.classList.remove(Bd),
              null != t) &&
              t.remove());
      }, [o, r, n]);
    },
    Md = "acc-word-spacing-style",
    Od = "acc-word-spacing",
    Vd = (n, o) => {
      const r = !!n;
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(Md)),
          r && !e
            ? (document.documentElement.classList.add(Od),
              ((t = document.createElement("style")).id = Md),
              (t.innerHTML = `
                 html.${Od} *:not(#${h} *), *:not(#${qt} *)  {
                  word-spacing:${n}px !important;
                }
            `),
              document.head.appendChild(t))
            : r && e
            ? (e.innerHTML = `
                 html.${Od} *:not(#${h} *), *:not(#${qt} *)  {
                  word-spacing:${n}px !important;
                }
            `)
            : !r &&
              e &&
              ((t = document.getElementById(Md)),
              document.documentElement.classList.remove(Od),
              null != t) &&
              t.remove());
      }, [n, r, o]);
    },
    Fd = "acc-zoom-style",
    Pd = "acc-zoom",
    Hd = (e, n) => {
      const { zoom: o, isZoom: r } = e;
      G.useLayoutEffect(() => {
        var e, t;
        n ||
          ((e = document.getElementById(Fd)),
          r && !e
            ? (document.documentElement.classList.add(Pd),
              ((t = document.createElement("style")).id = Fd),
              (t.innerHTML = `
                html.${Pd} body *:not(#${h}, #${h} *) {
                zoom: ${o.toFixed(1)} !important;
               }
                }
            `),
              document.head.appendChild(t))
            : r && e
            ? (e.innerHTML = `
                html.${Pd} body *:not(#${h}, #${h} *) {
                zoom: ${o.toFixed(1)} !important;
               }
                }
            `)
            : !r &&
              e &&
              ((t = document.getElementById(Fd)),
              document.documentElement.classList.remove(Pd),
              null != t) &&
              t.remove());
      }, [o, r, n]);
    },
    Wd = "acc-blueLight-filter-style",
    _d = "acc-blue-light-filter",
    Xd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(Wd)),
          n && !e
            ? (document.documentElement.classList.add(_d),
              ((t = document.createElement("style")).id = Wd),
              (t.innerHTML = `
          html.${_d} {
            -o-filter: sepia(80%) !important;
            -ms-filter: sepia(80%) !important;
            -moz-filter: sepia(80%) !important;
            -webkit-filter: sepia(80%) !important;
            filter: sepia(80%) !important;
          }
        `),
              document.head.appendChild(t))
            : !n &&
              e &&
              (document.documentElement.classList.remove(_d), null != e) &&
              e.remove());
      }, [n, o]);
    },
    Zd = "acc-dark-contrast-style",
    jd = "acc-dark-contrast",
    zd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        if (!o)
          return (
            n &&
              (document.documentElement.classList.add(jd),
              ((e = document.createElement("style")).id = Zd),
              (t = $t.map((e) => `html.${jd} ` + e).join(",")),
              (e.innerHTML = `
        ${t},${$t.join(",")} {
          color:#FFF !important;
          fill: #FFF !important;
          background-color: #000 !important;
        }
      `),
              document.head.appendChild(e)),
            () => {
              var e = document.getElementById(Zd);
              document.documentElement.classList.remove(jd),
                null != e && e.remove();
            }
          );
      }, [n, o]);
    },
    Dd = "acc-light-contrast-style",
    Yd = "acc-light-contrast",
    Jd = (n, o) => {
      G.useLayoutEffect(() => {
        var e, t;
        if (!o)
          return (
            n &&
              (document.documentElement.classList.add(Yd),
              ((e = document.createElement("style")).id = Dd),
              (t = $t.map((e) => `html.${Yd} ` + e).join(",")),
              (e.innerHTML = `
        ${t},${$t.join(",")} {
          color:#000 !important;
          fill: #000 !important;
          background-color: #FFF !important;
        }
      `),
              document.head.appendChild(e)),
            () => {
              var e = document.getElementById(Dd);
              document.documentElement.classList.remove(Yd),
                null != e && e.remove();
            }
          );
      }, [n, o]);
    },
    Ud = "acc-visual-impairment-style",
    Qd = "acc-visual-impairment",
    $d = (t, n) => {
      G.useLayoutEffect(() => {
        var e;
        if (!n)
          return (
            t &&
              (document.documentElement.classList.add(Qd),
              ((e = document.createElement("style")).id = Ud),
              (e.innerHTML = `
        html.${Qd} {
          -o-filter: invert(100%) !important;
          -ms-filter: invert(100%) !important;
          -moz-filter: invert(100%) !important;
          -webkit-filter: invert(100%) !important;
          filter: invert(100%) !important;
        }
      `),
              document.head.appendChild(e)),
            () => {
              var e = document.getElementById(Ud);
              document.documentElement.classList.remove(Qd),
                null != e && e.remove();
            }
          );
      }, [t, n]);
    },
    Kd = "acc-monochrome-style",
    qd = "acc-monochrome",
    eg = (t, n) => {
      G.useLayoutEffect(() => {
        var e;
        if (!n)
          return (
            t &&
              (document.documentElement.classList.add(qd),
              ((e = document.createElement("style")).id = Kd),
              (e.innerHTML = `
        html.${qd} {
          -o-filter: grayscale(100%) !important;
          -ms-filter: grayscale(100%) !important;
          -moz-filter: grayscale(100%) !important;
          -webkit-filter: grayscale(100%) !important;
          filter: grayscale(100%) !important;
        }
      `),
              document.head.appendChild(e)),
            () => {
              var e = document.getElementById(Kd);
              document.documentElement.classList.remove(qd),
                null != e && e.remove();
            }
          );
      }, [t, n]);
    },
    tg = "acc-high-contrast-style",
    ng = "acc-high-contrast",
    og = (n, o, r) => {
      G.useLayoutEffect(() => {
        var e, t;
        r ||
          ((e = document.getElementById(tg)),
          n && !e
            ? (document.documentElement.classList.add(ng),
              ((t = document.createElement("style")).id = tg),
              (t.innerHTML = `
        html.${ng} {
          -o-filter: contrast(${o}%) !important;
          -ms-filter: contrast(${o}%) !important;
          -moz-filter: contrast(${o}%) !important;
          -webkit-filter: contrast(${o}%) !important;
          filter: contrast(${o}%) !important;
        }
      `),
              document.head.appendChild(t))
            : n && e
            ? (e.innerHTML = `
        html.${ng} {
          -o-filter: contrast(${o}%) !important;
          -ms-filter: contrast(${o}%) !important;
          -moz-filter: contrast(${o}%) !important;
          -webkit-filter: contrast(${o}%) !important;
          filter: contrast(${o}%) !important;
        }
      `)
            : !n &&
              e &&
              (document.documentElement.classList.remove(ng), null != e) &&
              e.remove());
      }, [n, o, r]);
    },
    rg = "acc-brightness-control-style",
    ag = "acc-brightness-control",
    ig = (n, o, r) => {
      G.useLayoutEffect(() => {
        var e, t;
        r ||
          ((e = document.getElementById(rg)),
          n && !e
            ? (document.documentElement.classList.add(ag),
              ((t = document.createElement("style")).id = rg),
              (t.innerHTML = `
        html.${ag} {
          -o-filter: brightness(${o}%) !important;
          -ms-filter: brightness(${o}%) !important;
          -moz-filter: brightness(${o}%) !important;
          -webkit-filter: brightness(${o}%) !important;
          filter: brightness(${o}%) !important;
        }
      `),
              document.head.appendChild(t))
            : n && e
            ? (e.innerHTML = `
        html.${ag} {
          -o-filter: brightness(${o}%) !important;
          -ms-filter: brightness(${o}%) !important;
          -moz-filter: brightness(${o}%) !important;
          -webkit-filter: brightness(${o}%) !important;
          filter: brightness(${o}%) !important;
        }
      `)
            : !n &&
              e &&
              (document.documentElement.classList.remove(ag), null != e) &&
              e.remove());
      }, [n, o, r]);
    },
    sg = "acc-high-saturation-style",
    cg = "acc-high-saturation",
    lg = (n, o, r) => {
      G.useLayoutEffect(() => {
        var e, t;
        r ||
          ((e = document.getElementById(sg)),
          n && !e
            ? (document.documentElement.classList.add(cg),
              ((t = document.createElement("style")).id = sg),
              (t.innerHTML = `
        html.${cg} {
          -o-filter: saturate(${o}%) !important;
          -ms-filter: saturate(${o}%) !important;
          -moz-filter: saturate(${o}%) !important;
          -webkit-filter: saturate(${o}%) !important;
          filter: saturate(${o}%) !important;
        }
      `),
              document.head.appendChild(t))
            : n && e
            ? (e.innerHTML = `
        html.${cg} {
          -o-filter: saturate(${o}%) !important;
          -ms-filter: saturate(${o}%) !important;
          -moz-filter: saturate(${o}%) !important;
          -webkit-filter: saturate(${o}%) !important;
          filter: saturate(${o}%) !important;
        }
      `)
            : !n &&
              e &&
              (document.documentElement.classList.remove(cg), null != e) &&
              e.remove());
      }, [n, o, r]);
    },
    ug = "acc-low-saturation-style",
    dg = "acc-low-saturation",
    gg = (n, o, r) => {
      G.useLayoutEffect(() => {
        var e, t;
        r ||
          ((e = document.getElementById(ug)),
          n && !e
            ? (document.documentElement.classList.add(dg),
              ((t = document.createElement("style")).id = ug),
              (t.innerHTML = `
        html.${dg} {
          -o-filter: saturate(${o}%) !important;
          -ms-filter: saturate(${o}%) !important;
          -moz-filter: saturate(${o}%) !important;
          -webkit-filter: saturate(${o}%) !important;
          filter: saturate(${o}%) !important;
        }
      `),
              document.head.appendChild(t))
            : n && e
            ? (e.innerHTML = `
        html.${dg} {
          -o-filter: saturate(${o}%) !important;
          -ms-filter: saturate(${o}%) !important;
          -moz-filter: saturate(${o}%) !important;
          -webkit-filter: saturate(${o}%) !important;
          filter: saturate(${o}%) !important;
        }
      `)
            : !n &&
              e &&
              (document.documentElement.classList.remove(dg), null != e) &&
              e.remove());
      }, [n, o, r]);
    },
    pg = "acc-text-color-picker-style",
    hg = "acc-text-color-picker",
    fg = (n, o) => {
      const r = G.useMemo(
          () =>
            $t.reduce((e, t, n) => {
              var o = $t.length - 1;
              hg;
              return (
                e +
                `html.acc-text-color-picker ${t}:not(#${h} *)` +
                (n === o ? "" : ",")
              );
            }, ""),
          []
        ),
        a = $t.map((e) => `${e}:not(#${h} *)`).join(",");
      G.useLayoutEffect(() => {
        var e, t;
        o ||
          ((e = document.getElementById(pg)),
          n && !e
            ? (document.documentElement.classList.add(hg),
              ((t = document.createElement("style")).id = pg),
              (t.innerHTML = `
                  ${r},${a} {
                  color: ${n} !important;
                }
            `),
              document.head.appendChild(t))
            : n && e
            ? (e.innerHTML = `
                  ${r},${a} {
                  color: ${n} !important;
                }
            `)
            : !n &&
              e &&
              (document.documentElement.classList.remove(hg), null != e) &&
              e.remove());
      }, [n, a, r, o]);
    };
  C.use(Ur).use(hn);
  Qe.createRoot(document.getElementById("root-accessibilik")).render(
    m.jsx(() => {
      const [e, t] = G.useState(!0),
        [n, r] = G.useState(!1),
        o = (() => {
          const [e, t] = G.useState(!0);
          return (
            G.useLayoutEffect(() => {
              document.querySelectorAll("*").forEach((e) => {
                const t = e;
                t.style.fontSize && Su(t),
                  Array.from(document.styleSheets).forEach((e) => {
                    try {
                      Array.from(e.cssRules || []).forEach((e) => {
                        e.style.fontSize && xu(t, e) && Su(t);
                      });
                    } catch {}
                  }),
                  t && ((e = t.tagName.toLowerCase()), $t.includes(e)) && Su(t);
              }),
                t(!1);
            }, []),
            e
          );
        })(),
        a = (() => {
          const [e, n] = G.useState(0);
          return (
            G.useLayoutEffect(() => {
              const e = new MutationObserver((e) => {
                e.forEach((e) => {
                  "childList" === e.type &&
                    0 < e.addedNodes.length &&
                    e.addedNodes.forEach((t) => {
                      var e;
                      t instanceof HTMLElement &&
                        t.id !== h &&
                        t.id !== qt &&
                        (t.style.fontSize &&
                          (Su(t),
                          (t.dataset.accMutation = "true"),
                          n((e) => ++e)),
                        Array.from(document.styleSheets).forEach((e) => {
                          try {
                            Array.from(e.cssRules || []).forEach((e) => {
                              e.style.fontSize &&
                                xu(t, e) &&
                                (Su(t),
                                (t.dataset.accMutation = "true"),
                                n((e) => ++e));
                            });
                          } catch {}
                        }),
                        t) &&
                        ((e = t.tagName.toLowerCase()), $t.includes(e)) &&
                        (Su(t),
                        (t.dataset.accMutation = "true"),
                        n((e) => ++e));
                    });
                });
              });
              return (
                e.observe(document.body, { childList: !0, subtree: !0 }),
                () => {
                  n(0), e.disconnect();
                }
              );
            }, [e]),
            e
          );
        })(),
        [i, s] = (function (n, e) {
          const o = we.useSyncExternalStore(nt, () => tt(n), ot),
            t = we.useCallback(
              (e) => {
                try {
                  var t = "function" == typeof e ? e(JSON.parse(o)) : e;
                  null == t ? et(n) : qe(n, t);
                } catch (e) {
                  console.warn(e);
                }
              },
              [n, o]
            );
          return (
            we.useEffect(() => {
              null === tt(n) && typeof e < "u" && qe(n, e);
            }, [n, e]),
            [o ? JSON.parse(o) : e, t]
          );
        })("accessibilik", wu()),
        [c, l] = G.useState(!1),
        u = o || e;
      ({
        accState: p,
        isGettingReady: d,
        nodeListUpdated: g,
      } = { accState: i, isGettingReady: u, nodeListUpdated: a }),
        bd(p.isFontWeightBold, d),
        yd(p.adjustFontSizePercentage, g, d),
        Cd(p.textAlign, d),
        Us(p.isDyslexiaFont, d),
        wd(p.highlightLinks, d),
        Nd(p.highlightTitles, d),
        Gd(p.letterSpacing, d),
        Rd(p.lineHeight, d),
        Vd(p.wordSpacing, d),
        Hd(p.zoom, d),
        Nu(p.isBigCursor, d),
        Gu(p.showReadingGuide, 100, d),
        Xd(p.isBlueLightFilter, d),
        zd(p.isDarkContrast, d),
        Jd(p.isLightContrast, d),
        $d(p.isVisualImpairment, d),
        eg(p.isMonochrome, d),
        og(p.highContrast.isHighContrast, p.highContrast.contrast, d),
        ig(p.brightness.isBrightness, p.brightness.brightness, d),
        lg(p.highSaturation.isHighSaturation, p.highSaturation.saturation, d),
        gg(p.lowSaturation.isLowSaturation, p.lowSaturation.saturation, d),
        fg(p.color, d);
      var d,
        g = pd.includes(i.language) ? "rtl" : "ltr",
        p = () => {
          l((e) => !e);
        };
      return (
        G.useEffect(() => {
          const e = dd.map((e) => {
              e = "" + ld + e.name + ".json";
              return ud(e);
            }),
            o = {};
          Promise.all(e)
            .then((n) => {
              dd.forEach((e, t) => {
                o[e.lang] = { translation: n[t] };
              }),
                C.init({ fallbackLng: "he-IL", resources: o }),
                (C.languages = gd),
                r(!0);
            })
            .catch((e) => {
              C.init({
                fallbackLng: "en",
                resources: { en: { translation: hd } },
              });
            })
            .finally(() => {
              t(!1),
                (async () => {
                  try {
                    var e = {
                        domain: window.location.hostname,
                        created: new Date().toISOString(),
                      },
                      t = await (
                        await fetch(
                          "https://acc-landing.vercel.app/api/registerDomain",
                          {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          }
                        )
                      ).json();
                    console.log(t);
                  } catch {}
                })();
            });
        }, []),
        u
          ? m.jsx(Qt, { showSpinner: u })
          : m.jsxs(m.Fragment, {
              children: [
                m.jsx(cd, {
                  wrapperElementId: "acc-portal-[readingGuide-container]",
                  children: ".",
                }),
                m.jsx(cd, {
                  wrapperElementId: h,
                  children: m.jsxs("div", {
                    id: qt,
                    style: { direction: g, fontSize: 50 },
                    className: Zt.Accessibilik,
                    "data-acc-language": i.language,
                    children: [
                      m.jsx(Qt, { onShow: p }),
                      m.jsx(Xu, {
                        display: c ? "block" : "none",
                        showAcc: c,
                        accState: i,
                        onLangChange: (t) => {
                          C.changeLanguage(t, () => {
                            s((e) =>
                              Xt(e, (e) => {
                                e.language = t;
                              })
                            );
                          });
                        },
                        onChangeAccState: (t) => {
                          s((e) => Xt(e, t));
                        },
                        onInit: () => {
                          s(wu());
                        },
                        onShow: p,
                        hasLanguages: n,
                      }),
                    ],
                  }),
                }),
              ],
            })
      );
    }, {})
  );
});
