function $g(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r]
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const o in n)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function r(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const i = r(o)
    fetch(o.href, i)
  }
})()
var pE =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
function sc(e) {
  if (e.__esModule) return e
  var t = e.default
  if (typeof t == 'function') {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments)
    }
    r.prototype = t.prototype
  } else r = {}
  return (
    Object.defineProperty(r, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n)
      Object.defineProperty(
        r,
        n,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[n]
              },
            }
      )
    }),
    r
  )
}
var Bg = { exports: {} },
  lc = {},
  Wg = { exports: {} },
  Be = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = Symbol.for('react.element'),
  hE = Symbol.for('react.portal'),
  mE = Symbol.for('react.fragment'),
  yE = Symbol.for('react.strict_mode'),
  vE = Symbol.for('react.profiler'),
  gE = Symbol.for('react.provider'),
  _E = Symbol.for('react.context'),
  wE = Symbol.for('react.forward_ref'),
  bE = Symbol.for('react.suspense'),
  xE = Symbol.for('react.memo'),
  SE = Symbol.for('react.lazy'),
  Lm = Symbol.iterator
function EE(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lm && e[Lm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Hg = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qg = Object.assign,
  Vg = {}
function ga(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vg),
    (this.updater = r || Hg)
}
ga.prototype.isReactComponent = {}
ga.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
ga.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Yg() {}
Yg.prototype = ga.prototype
function Tp(e, t, r) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vg),
    (this.updater = r || Hg)
}
var Cp = (Tp.prototype = new Yg())
Cp.constructor = Tp
Qg(Cp, ga.prototype)
Cp.isPureReactComponent = !0
var zm = Array.isArray,
  Gg = Object.prototype.hasOwnProperty,
  Np = { current: null },
  qg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Zg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Gg.call(t, n) && !qg.hasOwnProperty(n) && (o[n] = t[n])
  var s = arguments.length - 2
  if (s === 1) o.children = r
  else if (1 < s) {
    for (var l = Array(s), f = 0; f < s; f++) l[f] = arguments[f + 2]
    o.children = l
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n])
  return { $$typeof: Gs, type: e, key: i, ref: a, props: o, _owner: Np.current }
}
function ME(e, t) {
  return {
    $$typeof: Gs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Ap(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gs
}
function jE(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (r) {
      return t[r]
    })
  )
}
var Um = /\/+/g
function qc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? jE('' + e.key)
    : t.toString(36)
}
function tu(e, t, r, n, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Gs:
          case hE:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === '' ? '.' + qc(a, 0) : n),
      zm(o)
        ? ((r = ''),
          e != null && (r = e.replace(Um, '$&/') + '/'),
          tu(o, t, r, '', function (f) {
            return f
          }))
        : o != null &&
          (Ap(o) &&
            (o = ME(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Um, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    )
  if (((a = 0), (n = n === '' ? '.' : n + ':'), zm(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var l = n + qc(i, s)
      a += tu(i, t, r, l, o)
    }
  else if (((l = EE(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + qc(i, s++)), (a += tu(i, t, r, l, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return a
}
function Nl(e, t, r) {
  if (e == null) return e
  var n = [],
    o = 0
  return (
    tu(e, n, '', '', function (i) {
      return t.call(r, i, o++)
    }),
    n
  )
}
function IE(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r))
        },
        function (r) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var or = { current: null },
  ru = { transition: null },
  TE = {
    ReactCurrentDispatcher: or,
    ReactCurrentBatchConfig: ru,
    ReactCurrentOwner: Np,
  }
Be.Children = {
  map: Nl,
  forEach: function (e, t, r) {
    Nl(
      e,
      function () {
        t.apply(this, arguments)
      },
      r
    )
  },
  count: function (e) {
    var t = 0
    return (
      Nl(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Nl(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ap(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
Be.Component = ga
Be.Fragment = mE
Be.Profiler = vE
Be.PureComponent = Tp
Be.StrictMode = yE
Be.Suspense = bE
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TE
Be.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var n = Qg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Np.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      Gg.call(t, l) &&
        !qg.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) n.children = r
  else if (1 < l) {
    s = Array(l)
    for (var f = 0; f < l; f++) s[f] = arguments[f + 2]
    n.children = s
  }
  return { $$typeof: Gs, type: e.type, key: o, ref: i, props: n, _owner: a }
}
Be.createContext = function (e) {
  return (
    (e = {
      $$typeof: _E,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gE, _context: e }),
    (e.Consumer = e)
  )
}
Be.createElement = Zg
Be.createFactory = function (e) {
  var t = Zg.bind(null, e)
  return (t.type = e), t
}
Be.createRef = function () {
  return { current: null }
}
Be.forwardRef = function (e) {
  return { $$typeof: wE, render: e }
}
Be.isValidElement = Ap
Be.lazy = function (e) {
  return { $$typeof: SE, _payload: { _status: -1, _result: e }, _init: IE }
}
Be.memo = function (e, t) {
  return { $$typeof: xE, type: e, compare: t === void 0 ? null : t }
}
Be.startTransition = function (e) {
  var t = ru.transition
  ru.transition = {}
  try {
    e()
  } finally {
    ru.transition = t
  }
}
Be.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
Be.useCallback = function (e, t) {
  return or.current.useCallback(e, t)
}
Be.useContext = function (e) {
  return or.current.useContext(e)
}
Be.useDebugValue = function () {}
Be.useDeferredValue = function (e) {
  return or.current.useDeferredValue(e)
}
Be.useEffect = function (e, t) {
  return or.current.useEffect(e, t)
}
Be.useId = function () {
  return or.current.useId()
}
Be.useImperativeHandle = function (e, t, r) {
  return or.current.useImperativeHandle(e, t, r)
}
Be.useInsertionEffect = function (e, t) {
  return or.current.useInsertionEffect(e, t)
}
Be.useLayoutEffect = function (e, t) {
  return or.current.useLayoutEffect(e, t)
}
Be.useMemo = function (e, t) {
  return or.current.useMemo(e, t)
}
Be.useReducer = function (e, t, r) {
  return or.current.useReducer(e, t, r)
}
Be.useRef = function (e) {
  return or.current.useRef(e)
}
Be.useState = function (e) {
  return or.current.useState(e)
}
Be.useSyncExternalStore = function (e, t, r) {
  return or.current.useSyncExternalStore(e, t, r)
}
Be.useTransition = function () {
  return or.current.useTransition()
}
Be.version = '18.2.0'
Wg.exports = Be
var M = Wg.exports
const te = va(M),
  CE = $g({ __proto__: null, default: te }, [M])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var NE = M,
  AE = Symbol.for('react.element'),
  OE = Symbol.for('react.fragment'),
  DE = Object.prototype.hasOwnProperty,
  PE = NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kE = { key: !0, ref: !0, __self: !0, __source: !0 }
function Kg(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null
  r !== void 0 && (i = '' + r),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (n in t) DE.call(t, n) && !kE.hasOwnProperty(n) && (o[n] = t[n])
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n])
  return { $$typeof: AE, type: e, key: i, ref: a, props: o, _owner: PE.current }
}
lc.Fragment = OE
lc.jsx = Kg
lc.jsxs = Kg
Bg.exports = lc
var A = Bg.exports,
  Xg = { exports: {} },
  Tr = {},
  Jg = { exports: {} },
  e0 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(k, Y) {
    var X = k.length
    k.push(Y)
    e: for (; 0 < X; ) {
      var oe = (X - 1) >>> 1,
        ce = k[oe]
      if (0 < o(ce, Y)) (k[oe] = Y), (k[X] = ce), (X = oe)
      else break e
    }
  }
  function r(k) {
    return k.length === 0 ? null : k[0]
  }
  function n(k) {
    if (k.length === 0) return null
    var Y = k[0],
      X = k.pop()
    if (X !== Y) {
      k[0] = X
      e: for (var oe = 0, ce = k.length, De = ce >>> 1; oe < De; ) {
        var Ne = 2 * (oe + 1) - 1,
          Le = k[Ne],
          Xe = Ne + 1,
          _t = k[Xe]
        if (0 > o(Le, X))
          Xe < ce && 0 > o(_t, Le)
            ? ((k[oe] = _t), (k[Xe] = X), (oe = Xe))
            : ((k[oe] = Le), (k[Ne] = X), (oe = Ne))
        else if (Xe < ce && 0 > o(_t, X)) (k[oe] = _t), (k[Xe] = X), (oe = Xe)
        else break e
      }
    }
    return Y
  }
  function o(k, Y) {
    var X = k.sortIndex - Y.sortIndex
    return X !== 0 ? X : k.id - Y.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var l = [],
    f = [],
    p = 1,
    h = null,
    m = 3,
    v = !1,
    w = !1,
    S = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function b(k) {
    for (var Y = r(f); Y !== null; ) {
      if (Y.callback === null) n(f)
      else if (Y.startTime <= k) n(f), (Y.sortIndex = Y.expirationTime), t(l, Y)
      else break
      Y = r(f)
    }
  }
  function I(k) {
    if (((S = !1), b(k), !w))
      if (r(l) !== null) (w = !0), N(D)
      else {
        var Y = r(f)
        Y !== null && P(I, Y.startTime - k)
      }
  }
  function D(k, Y) {
    ;(w = !1), S && ((S = !1), y(R), (R = -1)), (v = !0)
    var X = m
    try {
      for (
        b(Y), h = r(l);
        h !== null && (!(h.expirationTime > Y) || (k && !G()));

      ) {
        var oe = h.callback
        if (typeof oe == 'function') {
          ;(h.callback = null), (m = h.priorityLevel)
          var ce = oe(h.expirationTime <= Y)
          ;(Y = e.unstable_now()),
            typeof ce == 'function' ? (h.callback = ce) : h === r(l) && n(l),
            b(Y)
        } else n(l)
        h = r(l)
      }
      if (h !== null) var De = !0
      else {
        var Ne = r(f)
        Ne !== null && P(I, Ne.startTime - Y), (De = !1)
      }
      return De
    } finally {
      ;(h = null), (m = X), (v = !1)
    }
  }
  var E = !1,
    C = null,
    R = -1,
    W = 5,
    F = -1
  function G() {
    return !(e.unstable_now() - F < W)
  }
  function K() {
    if (C !== null) {
      var k = e.unstable_now()
      F = k
      var Y = !0
      try {
        Y = C(!0, k)
      } finally {
        Y ? B() : ((E = !1), (C = null))
      }
    } else E = !1
  }
  var B
  if (typeof g == 'function')
    B = function () {
      g(K)
    }
  else if (typeof MessageChannel < 'u') {
    var V = new MessageChannel(),
      T = V.port2
    ;(V.port1.onmessage = K),
      (B = function () {
        T.postMessage(null)
      })
  } else
    B = function () {
      x(K, 0)
    }
  function N(k) {
    ;(C = k), E || ((E = !0), B())
  }
  function P(k, Y) {
    R = x(function () {
      k(e.unstable_now())
    }, Y)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), N(D))
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (W = 0 < k ? Math.floor(1e3 / k) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l)
    }),
    (e.unstable_next = function (k) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var Y = 3
          break
        default:
          Y = m
      }
      var X = m
      m = Y
      try {
        return k()
      } finally {
        m = X
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, Y) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          k = 3
      }
      var X = m
      m = k
      try {
        return Y()
      } finally {
        m = X
      }
    }),
    (e.unstable_scheduleCallback = function (k, Y, X) {
      var oe = e.unstable_now()
      switch (
        (typeof X == 'object' && X !== null
          ? ((X = X.delay), (X = typeof X == 'number' && 0 < X ? oe + X : oe))
          : (X = oe),
        k)
      ) {
        case 1:
          var ce = -1
          break
        case 2:
          ce = 250
          break
        case 5:
          ce = 1073741823
          break
        case 4:
          ce = 1e4
          break
        default:
          ce = 5e3
      }
      return (
        (ce = X + ce),
        (k = {
          id: p++,
          callback: Y,
          priorityLevel: k,
          startTime: X,
          expirationTime: ce,
          sortIndex: -1,
        }),
        X > oe
          ? ((k.sortIndex = X),
            t(f, k),
            r(l) === null &&
              k === r(f) &&
              (S ? (y(R), (R = -1)) : (S = !0), P(I, X - oe)))
          : ((k.sortIndex = ce), t(l, k), w || v || ((w = !0), N(D))),
        k
      )
    }),
    (e.unstable_shouldYield = G),
    (e.unstable_wrapCallback = function (k) {
      var Y = m
      return function () {
        var X = m
        m = Y
        try {
          return k.apply(this, arguments)
        } finally {
          m = X
        }
      }
    })
})(e0)
Jg.exports = e0
var RE = Jg.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0 = M,
  Mr = RE
function re(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
    r < arguments.length;
    r++
  )
    t += '&args[]=' + encodeURIComponent(arguments[r])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var r0 = new Set(),
  Es = {}
function ci(e, t) {
  Xi(e, t), Xi(e + 'Capture', t)
}
function Xi(e, t) {
  for (Es[e] = t, e = 0; e < t.length; e++) r0.add(t[e])
}
var Bn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Kf = Object.prototype.hasOwnProperty,
  LE =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fm = {},
  $m = {}
function zE(e) {
  return Kf.call($m, e)
    ? !0
    : Kf.call(Fm, e)
    ? !1
    : LE.test(e)
    ? ($m[e] = !0)
    : ((Fm[e] = !0), !1)
}
function UE(e, t, r, n) {
  if (r !== null && r.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function FE(e, t, r, n) {
  if (t === null || typeof t > 'u' || UE(e, t, r, n)) return !0
  if (n) return !1
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ir(e, t, r, n, o, i, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a)
}
var Qt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Qt[e] = new ir(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Qt[t] = new ir(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Qt[e] = new ir(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Qt[e] = new ir(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Qt[e] = new ir(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Qt[e] = new ir(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Qt[e] = new ir(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Qt[e] = new ir(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Qt[e] = new ir(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Op = /[\-:]([a-z])/g
function Dp(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Op, Dp)
    Qt[t] = new ir(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Op, Dp)
    Qt[t] = new ir(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Op, Dp)
  Qt[t] = new ir(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Qt[e] = new ir(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Qt.xlinkHref = new ir(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Qt[e] = new ir(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Pp(e, t, r, n) {
  var o = Qt.hasOwnProperty(t) ? Qt[t] : null
  ;(o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (FE(t, r, o, n) && (r = null),
    n || o === null
      ? zE(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : '') : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? '' : '' + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Gn = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Al = Symbol.for('react.element'),
  Ii = Symbol.for('react.portal'),
  Ti = Symbol.for('react.fragment'),
  kp = Symbol.for('react.strict_mode'),
  Xf = Symbol.for('react.profiler'),
  n0 = Symbol.for('react.provider'),
  o0 = Symbol.for('react.context'),
  Rp = Symbol.for('react.forward_ref'),
  Jf = Symbol.for('react.suspense'),
  ed = Symbol.for('react.suspense_list'),
  Lp = Symbol.for('react.memo'),
  ro = Symbol.for('react.lazy'),
  i0 = Symbol.for('react.offscreen'),
  Bm = Symbol.iterator
function ka(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Bm && e[Bm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var gt = Object.assign,
  Zc
function Za(e) {
  if (Zc === void 0)
    try {
      throw Error()
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/)
      Zc = (t && t[1]) || ''
    }
  return (
    `
` +
    Zc +
    e
  )
}
var Kc = !1
function Xc(e, t) {
  if (!e || Kc) return ''
  Kc = !0
  var r = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (f) {
          var n = f
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (f) {
          n = f
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (f) {
        n = f
      }
      e()
    }
  } catch (f) {
    if (f && n && typeof f.stack == 'string') {
      for (
        var o = f.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(Kc = !1), (Error.prepareStackTrace = r)
  }
  return (e = e ? e.displayName || e.name : '') ? Za(e) : ''
}
function $E(e) {
  switch (e.tag) {
    case 5:
      return Za(e.type)
    case 16:
      return Za('Lazy')
    case 13:
      return Za('Suspense')
    case 19:
      return Za('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Xc(e.type, !1)), e
    case 11:
      return (e = Xc(e.type.render, !1)), e
    case 1:
      return (e = Xc(e.type, !0)), e
    default:
      return ''
  }
}
function td(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Ti:
      return 'Fragment'
    case Ii:
      return 'Portal'
    case Xf:
      return 'Profiler'
    case kp:
      return 'StrictMode'
    case Jf:
      return 'Suspense'
    case ed:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case o0:
        return (e.displayName || 'Context') + '.Consumer'
      case n0:
        return (e._context.displayName || 'Context') + '.Provider'
      case Rp:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Lp:
        return (
          (t = e.displayName || null), t !== null ? t : td(e.type) || 'Memo'
        )
      case ro:
        ;(t = e._payload), (e = e._init)
        try {
          return td(e(t))
        } catch {}
    }
  return null
}
function BE(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return td(t)
    case 8:
      return t === kp ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function bo(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function a0(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function WE(e) {
  var t = a0(e) ? 'checked' : 'value',
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof r < 'u' &&
    typeof r.get == 'function' &&
    typeof r.set == 'function'
  ) {
    var o = r.get,
      i = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (a) {
          ;(n = '' + a), i.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (a) {
          n = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ol(e) {
  e._valueTracker || (e._valueTracker = WE(e))
}
function s0(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var r = t.getValue(),
    n = ''
  return (
    e && (n = a0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  )
}
function wu(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function rd(e, t) {
  var r = t.checked
  return gt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  })
}
function Wm(e, t) {
  var r = t.defaultValue == null ? '' : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked
  ;(r = bo(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function l0(e, t) {
  ;(t = t.checked), t != null && Pp(e, 'checked', t, !1)
}
function nd(e, t) {
  l0(e, t)
  var r = bo(t.value),
    n = t.type
  if (r != null)
    n === 'number'
      ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
      : e.value !== '' + r && (e.value = '' + r)
  else if (n === 'submit' || n === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? od(e, t.type, r)
    : t.hasOwnProperty('defaultValue') && od(e, t.type, bo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Hm(e, t, r) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var n = t.type
    if (
      !(
        (n !== 'submit' && n !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(r = e.name),
    r !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== '' && (e.name = r)
}
function od(e, t, r) {
  ;(t !== 'number' || wu(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
var Ka = Array.isArray
function Hi(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty('$' + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0)
  } else {
    for (r = '' + bo(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        ;(e[o].selected = !0), n && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function id(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(re(91))
  return gt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Qm(e, t) {
  var r = t.value
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(re(92))
      if (Ka(r)) {
        if (1 < r.length) throw Error(re(93))
        r = r[0]
      }
      t = r
    }
    t == null && (t = ''), (r = t)
  }
  e._wrapperState = { initialValue: bo(r) }
}
function u0(e, t) {
  var r = bo(t.value),
    n = bo(t.defaultValue)
  r != null &&
    ((r = '' + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = '' + n)
}
function Vm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function c0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function ad(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? c0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var Dl,
  f0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Dl = Dl || document.createElement('div'),
          Dl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Dl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Ms(e, t) {
  if (t) {
    var r = e.firstChild
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var ns = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  HE = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ns).forEach(function (e) {
  HE.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ns[t] = ns[e])
  })
})
function d0(e, t, r) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : r || typeof t != 'number' || t === 0 || (ns.hasOwnProperty(e) && ns[e])
    ? ('' + t).trim()
    : t + 'px'
}
function p0(e, t) {
  e = e.style
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf('--') === 0,
        o = d0(r, t[r], n)
      r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o)
    }
}
var QE = gt(
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
)
function sd(e, t) {
  if (t) {
    if (QE[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(re(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(re(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(re(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(re(62))
  }
}
function ld(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var ud = null
function zp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var cd = null,
  Qi = null,
  Vi = null
function Ym(e) {
  if ((e = Ks(e))) {
    if (typeof cd != 'function') throw Error(re(280))
    var t = e.stateNode
    t && ((t = pc(t)), cd(e.stateNode, e.type, t))
  }
}
function h0(e) {
  Qi ? (Vi ? Vi.push(e) : (Vi = [e])) : (Qi = e)
}
function m0() {
  if (Qi) {
    var e = Qi,
      t = Vi
    if (((Vi = Qi = null), Ym(e), t)) for (e = 0; e < t.length; e++) Ym(t[e])
  }
}
function y0(e, t) {
  return e(t)
}
function v0() {}
var Jc = !1
function g0(e, t, r) {
  if (Jc) return e(t, r)
  Jc = !0
  try {
    return y0(e, t, r)
  } finally {
    ;(Jc = !1), (Qi !== null || Vi !== null) && (v0(), m0())
  }
}
function js(e, t) {
  var r = e.stateNode
  if (r === null) return null
  var n = pc(r)
  if (n === null) return null
  r = n[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !n)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (r && typeof r != 'function') throw Error(re(231, t, typeof r))
  return r
}
var fd = !1
if (Bn)
  try {
    var Ra = {}
    Object.defineProperty(Ra, 'passive', {
      get: function () {
        fd = !0
      },
    }),
      window.addEventListener('test', Ra, Ra),
      window.removeEventListener('test', Ra, Ra)
  } catch {
    fd = !1
  }
function VE(e, t, r, n, o, i, a, s, l) {
  var f = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(r, f)
  } catch (p) {
    this.onError(p)
  }
}
var os = !1,
  bu = null,
  xu = !1,
  dd = null,
  YE = {
    onError: function (e) {
      ;(os = !0), (bu = e)
    },
  }
function GE(e, t, r, n, o, i, a, s, l) {
  ;(os = !1), (bu = null), VE.apply(YE, arguments)
}
function qE(e, t, r, n, o, i, a, s, l) {
  if ((GE.apply(this, arguments), os)) {
    if (os) {
      var f = bu
      ;(os = !1), (bu = null)
    } else throw Error(re(198))
    xu || ((xu = !0), (dd = f))
  }
}
function fi(e) {
  var t = e,
    r = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? r : null
}
function _0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Gm(e) {
  if (fi(e) !== e) throw Error(re(188))
}
function ZE(e) {
  var t = e.alternate
  if (!t) {
    if (((t = fi(e)), t === null)) throw Error(re(188))
    return t !== e ? null : e
  }
  for (var r = e, n = t; ; ) {
    var o = r.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Gm(o), e
        if (i === n) return Gm(o), t
        i = i.sibling
      }
      throw Error(re(188))
    }
    if (r.return !== n.return) (r = o), (n = i)
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          ;(a = !0), (r = o), (n = i)
          break
        }
        if (s === n) {
          ;(a = !0), (n = o), (r = i)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            ;(a = !0), (r = i), (n = o)
            break
          }
          if (s === n) {
            ;(a = !0), (n = i), (r = o)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error(re(189))
      }
    }
    if (r.alternate !== n) throw Error(re(190))
  }
  if (r.tag !== 3) throw Error(re(188))
  return r.stateNode.current === r ? e : t
}
function w0(e) {
  return (e = ZE(e)), e !== null ? b0(e) : null
}
function b0(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = b0(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var x0 = Mr.unstable_scheduleCallback,
  qm = Mr.unstable_cancelCallback,
  KE = Mr.unstable_shouldYield,
  XE = Mr.unstable_requestPaint,
  Ct = Mr.unstable_now,
  JE = Mr.unstable_getCurrentPriorityLevel,
  Up = Mr.unstable_ImmediatePriority,
  S0 = Mr.unstable_UserBlockingPriority,
  Su = Mr.unstable_NormalPriority,
  eM = Mr.unstable_LowPriority,
  E0 = Mr.unstable_IdlePriority,
  uc = null,
  Mn = null
function tM(e) {
  if (Mn && typeof Mn.onCommitFiberRoot == 'function')
    try {
      Mn.onCommitFiberRoot(uc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var un = Math.clz32 ? Math.clz32 : oM,
  rM = Math.log,
  nM = Math.LN2
function oM(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rM(e) / nM) | 0)) | 0
}
var Pl = 64,
  kl = 4194304
function Xa(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Eu(e, t) {
  var r = e.pendingLanes
  if (r === 0) return 0
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455
  if (a !== 0) {
    var s = a & ~o
    s !== 0 ? (n = Xa(s)) : ((i &= a), i !== 0 && (n = Xa(i)))
  } else (a = r & ~o), a !== 0 ? (n = Xa(a)) : i !== 0 && (n = Xa(i))
  if (n === 0) return 0
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - un(t)), (o = 1 << r), (n |= e[r]), (t &= ~o)
  return n
}
function iM(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function aM(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - un(i),
      s = 1 << a,
      l = o[a]
    l === -1
      ? (!(s & r) || s & n) && (o[a] = iM(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s)
  }
}
function pd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function M0() {
  var e = Pl
  return (Pl <<= 1), !(Pl & 4194240) && (Pl = 64), e
}
function ef(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e)
  return t
}
function qs(e, t, r) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - un(t)),
    (e[t] = r)
}
function sM(e, t) {
  var r = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var n = e.eventTimes
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - un(r),
      i = 1 << o
    ;(t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i)
  }
}
function Fp(e, t) {
  var r = (e.entangledLanes |= t)
  for (e = e.entanglements; r; ) {
    var n = 31 - un(r),
      o = 1 << n
    ;(o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o)
  }
}
var Ke = 0
function j0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var I0,
  $p,
  T0,
  C0,
  N0,
  hd = !1,
  Rl = [],
  po = null,
  ho = null,
  mo = null,
  Is = new Map(),
  Ts = new Map(),
  so = [],
  lM =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Zm(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      po = null
      break
    case 'dragenter':
    case 'dragleave':
      ho = null
      break
    case 'mouseover':
    case 'mouseout':
      mo = null
      break
    case 'pointerover':
    case 'pointerout':
      Is.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ts.delete(t.pointerId)
  }
}
function La(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ks(t)), t !== null && $p(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function uM(e, t, r, n, o) {
  switch (t) {
    case 'focusin':
      return (po = La(po, e, t, r, n, o)), !0
    case 'dragenter':
      return (ho = La(ho, e, t, r, n, o)), !0
    case 'mouseover':
      return (mo = La(mo, e, t, r, n, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Is.set(i, La(Is.get(i) || null, e, t, r, n, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Ts.set(i, La(Ts.get(i) || null, e, t, r, n, o)), !0
      )
  }
  return !1
}
function A0(e) {
  var t = Bo(e.target)
  if (t !== null) {
    var r = fi(t)
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = _0(r)), t !== null)) {
          ;(e.blockedOn = t),
            N0(e.priority, function () {
              T0(r)
            })
          return
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function nu(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (r === null) {
      r = e.nativeEvent
      var n = new r.constructor(r.type, r)
      ;(ud = n), r.target.dispatchEvent(n), (ud = null)
    } else return (t = Ks(r)), t !== null && $p(t), (e.blockedOn = r), !1
    t.shift()
  }
  return !0
}
function Km(e, t, r) {
  nu(e) && r.delete(t)
}
function cM() {
  ;(hd = !1),
    po !== null && nu(po) && (po = null),
    ho !== null && nu(ho) && (ho = null),
    mo !== null && nu(mo) && (mo = null),
    Is.forEach(Km),
    Ts.forEach(Km)
}
function za(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    hd ||
      ((hd = !0), Mr.unstable_scheduleCallback(Mr.unstable_NormalPriority, cM)))
}
function Cs(e) {
  function t(o) {
    return za(o, e)
  }
  if (0 < Rl.length) {
    za(Rl[0], e)
    for (var r = 1; r < Rl.length; r++) {
      var n = Rl[r]
      n.blockedOn === e && (n.blockedOn = null)
    }
  }
  for (
    po !== null && za(po, e),
      ho !== null && za(ho, e),
      mo !== null && za(mo, e),
      Is.forEach(t),
      Ts.forEach(t),
      r = 0;
    r < so.length;
    r++
  )
    (n = so[r]), n.blockedOn === e && (n.blockedOn = null)
  for (; 0 < so.length && ((r = so[0]), r.blockedOn === null); )
    A0(r), r.blockedOn === null && so.shift()
}
var Yi = Gn.ReactCurrentBatchConfig,
  Mu = !0
function fM(e, t, r, n) {
  var o = Ke,
    i = Yi.transition
  Yi.transition = null
  try {
    ;(Ke = 1), Bp(e, t, r, n)
  } finally {
    ;(Ke = o), (Yi.transition = i)
  }
}
function dM(e, t, r, n) {
  var o = Ke,
    i = Yi.transition
  Yi.transition = null
  try {
    ;(Ke = 4), Bp(e, t, r, n)
  } finally {
    ;(Ke = o), (Yi.transition = i)
  }
}
function Bp(e, t, r, n) {
  if (Mu) {
    var o = md(e, t, r, n)
    if (o === null) ff(e, t, n, ju, r), Zm(e, n)
    else if (uM(o, e, t, r, n)) n.stopPropagation()
    else if ((Zm(e, n), t & 4 && -1 < lM.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ks(o)
        if (
          (i !== null && I0(i),
          (i = md(e, t, r, n)),
          i === null && ff(e, t, n, ju, r),
          i === o)
        )
          break
        o = i
      }
      o !== null && n.stopPropagation()
    } else ff(e, t, n, null, r)
  }
}
var ju = null
function md(e, t, r, n) {
  if (((ju = null), (e = zp(n)), (e = Bo(e)), e !== null))
    if (((t = fi(e)), t === null)) e = null
    else if (((r = t.tag), r === 13)) {
      if (((e = _0(t)), e !== null)) return e
      e = null
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (ju = e), null
}
function O0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (JE()) {
        case Up:
          return 1
        case S0:
          return 4
        case Su:
        case eM:
          return 16
        case E0:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var uo = null,
  Wp = null,
  ou = null
function D0() {
  if (ou) return ou
  var e,
    t = Wp,
    r = t.length,
    n,
    o = 'value' in uo ? uo.value : uo.textContent,
    i = o.length
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (ou = o.slice(e, 1 < n ? 1 - n : void 0))
}
function iu(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ll() {
  return !0
}
function Xm() {
  return !1
}
function Cr(e) {
  function t(r, n, o, i, a) {
    ;(this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ll
        : Xm),
      (this.isPropagationStopped = Xm),
      this
    )
  }
  return (
    gt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var r = this.nativeEvent
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = Ll))
      },
      stopPropagation: function () {
        var r = this.nativeEvent
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ll))
      },
      persist: function () {},
      isPersistent: Ll,
    }),
    t
  )
}
var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hp = Cr(_a),
  Zs = gt({}, _a, { view: 0, detail: 0 }),
  pM = Cr(Zs),
  tf,
  rf,
  Ua,
  cc = gt({}, Zs, {
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
    getModifierState: Qp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ua &&
            (Ua && e.type === 'mousemove'
              ? ((tf = e.screenX - Ua.screenX), (rf = e.screenY - Ua.screenY))
              : (rf = tf = 0),
            (Ua = e)),
          tf)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : rf
    },
  }),
  Jm = Cr(cc),
  hM = gt({}, cc, { dataTransfer: 0 }),
  mM = Cr(hM),
  yM = gt({}, Zs, { relatedTarget: 0 }),
  nf = Cr(yM),
  vM = gt({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gM = Cr(vM),
  _M = gt({}, _a, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  wM = Cr(_M),
  bM = gt({}, _a, { data: 0 }),
  ey = Cr(bM),
  xM = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  SM = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  EM = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function MM(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = EM[e]) ? !!t[e] : !1
}
function Qp() {
  return MM
}
var jM = gt({}, Zs, {
    key: function (e) {
      if (e.key) {
        var t = xM[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = iu(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? SM[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qp,
    charCode: function (e) {
      return e.type === 'keypress' ? iu(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? iu(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  IM = Cr(jM),
  TM = gt({}, cc, {
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
  }),
  ty = Cr(TM),
  CM = gt({}, Zs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qp,
  }),
  NM = Cr(CM),
  AM = gt({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  OM = Cr(AM),
  DM = gt({}, cc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  PM = Cr(DM),
  kM = [9, 13, 27, 32],
  Vp = Bn && 'CompositionEvent' in window,
  is = null
Bn && 'documentMode' in document && (is = document.documentMode)
var RM = Bn && 'TextEvent' in window && !is,
  P0 = Bn && (!Vp || (is && 8 < is && 11 >= is)),
  ry = String.fromCharCode(32),
  ny = !1
function k0(e, t) {
  switch (e) {
    case 'keyup':
      return kM.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function R0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Ci = !1
function LM(e, t) {
  switch (e) {
    case 'compositionend':
      return R0(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ny = !0), ry)
    case 'textInput':
      return (e = t.data), e === ry && ny ? null : e
    default:
      return null
  }
}
function zM(e, t) {
  if (Ci)
    return e === 'compositionend' || (!Vp && k0(e, t))
      ? ((e = D0()), (ou = Wp = uo = null), (Ci = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return P0 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var UM = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
}
function oy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!UM[e.type] : t === 'textarea'
}
function L0(e, t, r, n) {
  h0(n),
    (t = Iu(t, 'onChange')),
    0 < t.length &&
      ((r = new Hp('onChange', 'change', null, r, n)),
      e.push({ event: r, listeners: t }))
}
var as = null,
  Ns = null
function FM(e) {
  G0(e, 0)
}
function fc(e) {
  var t = Oi(e)
  if (s0(t)) return e
}
function $M(e, t) {
  if (e === 'change') return t
}
var z0 = !1
if (Bn) {
  var of
  if (Bn) {
    var af = 'oninput' in document
    if (!af) {
      var iy = document.createElement('div')
      iy.setAttribute('oninput', 'return;'),
        (af = typeof iy.oninput == 'function')
    }
    of = af
  } else of = !1
  z0 = of && (!document.documentMode || 9 < document.documentMode)
}
function ay() {
  as && (as.detachEvent('onpropertychange', U0), (Ns = as = null))
}
function U0(e) {
  if (e.propertyName === 'value' && fc(Ns)) {
    var t = []
    L0(t, Ns, e, zp(e)), g0(FM, t)
  }
}
function BM(e, t, r) {
  e === 'focusin'
    ? (ay(), (as = t), (Ns = r), as.attachEvent('onpropertychange', U0))
    : e === 'focusout' && ay()
}
function WM(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return fc(Ns)
}
function HM(e, t) {
  if (e === 'click') return fc(t)
}
function QM(e, t) {
  if (e === 'input' || e === 'change') return fc(t)
}
function VM(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var fn = typeof Object.is == 'function' ? Object.is : VM
function As(e, t) {
  if (fn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var r = Object.keys(e),
    n = Object.keys(t)
  if (r.length !== n.length) return !1
  for (n = 0; n < r.length; n++) {
    var o = r[n]
    if (!Kf.call(t, o) || !fn(e[o], t[o])) return !1
  }
  return !0
}
function sy(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function ly(e, t) {
  var r = sy(e)
  e = 0
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e }
      e = n
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling
          break e
        }
        r = r.parentNode
      }
      r = void 0
    }
    r = sy(r)
  }
}
function F0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? F0(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function $0() {
  for (var e = window, t = wu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == 'string'
    } catch {
      r = !1
    }
    if (r) e = t.contentWindow
    else break
    t = wu(e.document)
  }
  return t
}
function Yp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function YM(e) {
  var t = $0(),
    r = e.focusedElem,
    n = e.selectionRange
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    F0(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Yp(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        'selectionStart' in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length))
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = r.textContent.length,
          i = Math.min(n.start, o)
        ;(n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = ly(r, i))
        var a = ly(r, n)
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var GM = Bn && 'documentMode' in document && 11 >= document.documentMode,
  Ni = null,
  yd = null,
  ss = null,
  vd = !1
function uy(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
  vd ||
    Ni == null ||
    Ni !== wu(n) ||
    ((n = Ni),
    'selectionStart' in n && Yp(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (ss && As(ss, n)) ||
      ((ss = n),
      (n = Iu(yd, 'onSelect')),
      0 < n.length &&
        ((t = new Hp('onSelect', 'select', null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Ni))))
}
function zl(e, t) {
  var r = {}
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r['Webkit' + e] = 'webkit' + t),
    (r['Moz' + e] = 'moz' + t),
    r
  )
}
var Ai = {
    animationend: zl('Animation', 'AnimationEnd'),
    animationiteration: zl('Animation', 'AnimationIteration'),
    animationstart: zl('Animation', 'AnimationStart'),
    transitionend: zl('Transition', 'TransitionEnd'),
  },
  sf = {},
  B0 = {}
Bn &&
  ((B0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ai.animationend.animation,
    delete Ai.animationiteration.animation,
    delete Ai.animationstart.animation),
  'TransitionEvent' in window || delete Ai.transitionend.transition)
function dc(e) {
  if (sf[e]) return sf[e]
  if (!Ai[e]) return e
  var t = Ai[e],
    r
  for (r in t) if (t.hasOwnProperty(r) && r in B0) return (sf[e] = t[r])
  return e
}
var W0 = dc('animationend'),
  H0 = dc('animationiteration'),
  Q0 = dc('animationstart'),
  V0 = dc('transitionend'),
  Y0 = new Map(),
  cy =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Eo(e, t) {
  Y0.set(e, t), ci(t, [e])
}
for (var lf = 0; lf < cy.length; lf++) {
  var uf = cy[lf],
    qM = uf.toLowerCase(),
    ZM = uf[0].toUpperCase() + uf.slice(1)
  Eo(qM, 'on' + ZM)
}
Eo(W0, 'onAnimationEnd')
Eo(H0, 'onAnimationIteration')
Eo(Q0, 'onAnimationStart')
Eo('dblclick', 'onDoubleClick')
Eo('focusin', 'onFocus')
Eo('focusout', 'onBlur')
Eo(V0, 'onTransitionEnd')
Xi('onMouseEnter', ['mouseout', 'mouseover'])
Xi('onMouseLeave', ['mouseout', 'mouseover'])
Xi('onPointerEnter', ['pointerout', 'pointerover'])
Xi('onPointerLeave', ['pointerout', 'pointerover'])
ci(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
ci(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
ci('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
ci(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
ci(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
ci(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Ja =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  KM = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ja))
function fy(e, t, r) {
  var n = e.type || 'unknown-event'
  ;(e.currentTarget = r), qE(n, t, void 0, e), (e.currentTarget = null)
}
function G0(e, t) {
  t = (t & 4) !== 0
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event
    n = n.listeners
    e: {
      var i = void 0
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            f = s.currentTarget
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e
          fy(o, s, f), (i = l)
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (f = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e
          fy(o, s, f), (i = l)
        }
    }
  }
  if (xu) throw ((e = dd), (xu = !1), (dd = null), e)
}
function ut(e, t) {
  var r = t[xd]
  r === void 0 && (r = t[xd] = new Set())
  var n = e + '__bubble'
  r.has(n) || (q0(t, e, 2, !1), r.add(n))
}
function cf(e, t, r) {
  var n = 0
  t && (n |= 4), q0(r, e, n, t)
}
var Ul = '_reactListening' + Math.random().toString(36).slice(2)
function Os(e) {
  if (!e[Ul]) {
    ;(e[Ul] = !0),
      r0.forEach(function (r) {
        r !== 'selectionchange' && (KM.has(r) || cf(r, !1, e), cf(r, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ul] || ((t[Ul] = !0), cf('selectionchange', !1, t))
  }
}
function q0(e, t, r, n) {
  switch (O0(t)) {
    case 1:
      var o = fM
      break
    case 4:
      o = dM
      break
    default:
      o = Bp
  }
  ;(r = o.bind(null, t, r, e)),
    (o = void 0),
    !fd ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1)
}
function ff(e, t, r, n, o) {
  var i = n
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return
      var a = n.tag
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = Bo(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a
            continue e
          }
          s = s.parentNode
        }
      }
      n = n.return
    }
  g0(function () {
    var f = i,
      p = zp(r),
      h = []
    e: {
      var m = Y0.get(e)
      if (m !== void 0) {
        var v = Hp,
          w = e
        switch (e) {
          case 'keypress':
            if (iu(r) === 0) break e
          case 'keydown':
          case 'keyup':
            v = IM
            break
          case 'focusin':
            ;(w = 'focus'), (v = nf)
            break
          case 'focusout':
            ;(w = 'blur'), (v = nf)
            break
          case 'beforeblur':
          case 'afterblur':
            v = nf
            break
          case 'click':
            if (r.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Jm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = mM
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = NM
            break
          case W0:
          case H0:
          case Q0:
            v = gM
            break
          case V0:
            v = OM
            break
          case 'scroll':
            v = pM
            break
          case 'wheel':
            v = PM
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = wM
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = ty
        }
        var S = (t & 4) !== 0,
          x = !S && e === 'scroll',
          y = S ? (m !== null ? m + 'Capture' : null) : m
        S = []
        for (var g = f, b; g !== null; ) {
          b = g
          var I = b.stateNode
          if (
            (b.tag === 5 &&
              I !== null &&
              ((b = I),
              y !== null && ((I = js(g, y)), I != null && S.push(Ds(g, I, b)))),
            x)
          )
            break
          g = g.return
        }
        0 < S.length &&
          ((m = new v(m, w, null, r, p)), h.push({ event: m, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          m &&
            r !== ud &&
            (w = r.relatedTarget || r.fromElement) &&
            (Bo(w) || w[Wn]))
        )
          break e
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((w = r.relatedTarget || r.toElement),
              (v = f),
              (w = w ? Bo(w) : null),
              w !== null &&
                ((x = fi(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = f)),
          v !== w)
        ) {
          if (
            ((S = Jm),
            (I = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = ty),
              (I = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (g = 'pointer')),
            (x = v == null ? m : Oi(v)),
            (b = w == null ? m : Oi(w)),
            (m = new S(I, g + 'leave', v, r, p)),
            (m.target = x),
            (m.relatedTarget = b),
            (I = null),
            Bo(p) === f &&
              ((S = new S(y, g + 'enter', w, r, p)),
              (S.target = b),
              (S.relatedTarget = x),
              (I = S)),
            (x = I),
            v && w)
          )
            t: {
              for (S = v, y = w, g = 0, b = S; b; b = bi(b)) g++
              for (b = 0, I = y; I; I = bi(I)) b++
              for (; 0 < g - b; ) (S = bi(S)), g--
              for (; 0 < b - g; ) (y = bi(y)), b--
              for (; g--; ) {
                if (S === y || (y !== null && S === y.alternate)) break t
                ;(S = bi(S)), (y = bi(y))
              }
              S = null
            }
          else S = null
          v !== null && dy(h, m, v, S, !1),
            w !== null && x !== null && dy(h, x, w, S, !0)
        }
      }
      e: {
        if (
          ((m = f ? Oi(f) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && m.type === 'file'))
        )
          var D = $M
        else if (oy(m))
          if (z0) D = QM
          else {
            D = WM
            var E = BM
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === 'input' &&
            (m.type === 'checkbox' || m.type === 'radio') &&
            (D = HM)
        if (D && (D = D(e, f))) {
          L0(h, D, r, p)
          break e
        }
        E && E(e, m, f),
          e === 'focusout' &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === 'number' &&
            od(m, 'number', m.value)
      }
      switch (((E = f ? Oi(f) : window), e)) {
        case 'focusin':
          ;(oy(E) || E.contentEditable === 'true') &&
            ((Ni = E), (yd = f), (ss = null))
          break
        case 'focusout':
          ss = yd = Ni = null
          break
        case 'mousedown':
          vd = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(vd = !1), uy(h, r, p)
          break
        case 'selectionchange':
          if (GM) break
        case 'keydown':
        case 'keyup':
          uy(h, r, p)
      }
      var C
      if (Vp)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart'
              break e
            case 'compositionend':
              R = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              R = 'onCompositionUpdate'
              break e
          }
          R = void 0
        }
      else
        Ci
          ? k0(e, r) && (R = 'onCompositionEnd')
          : e === 'keydown' && r.keyCode === 229 && (R = 'onCompositionStart')
      R &&
        (P0 &&
          r.locale !== 'ko' &&
          (Ci || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && Ci && (C = D0())
            : ((uo = p),
              (Wp = 'value' in uo ? uo.value : uo.textContent),
              (Ci = !0))),
        (E = Iu(f, R)),
        0 < E.length &&
          ((R = new ey(R, e, null, r, p)),
          h.push({ event: R, listeners: E }),
          C ? (R.data = C) : ((C = R0(r)), C !== null && (R.data = C)))),
        (C = RM ? LM(e, r) : zM(e, r)) &&
          ((f = Iu(f, 'onBeforeInput')),
          0 < f.length &&
            ((p = new ey('onBeforeInput', 'beforeinput', null, r, p)),
            h.push({ event: p, listeners: f }),
            (p.data = C)))
    }
    G0(h, t)
  })
}
function Ds(e, t, r) {
  return { instance: e, listener: t, currentTarget: r }
}
function Iu(e, t) {
  for (var r = t + 'Capture', n = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = js(e, r)),
      i != null && n.unshift(Ds(e, i, o)),
      (i = js(e, t)),
      i != null && n.push(Ds(e, i, o))),
      (e = e.return)
  }
  return n
}
function bi(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function dy(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      f = s.stateNode
    if (l !== null && l === n) break
    s.tag === 5 &&
      f !== null &&
      ((s = f),
      o
        ? ((l = js(r, i)), l != null && a.unshift(Ds(r, l, s)))
        : o || ((l = js(r, i)), l != null && a.push(Ds(r, l, s)))),
      (r = r.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var XM = /\r\n?/g,
  JM = /\u0000|\uFFFD/g
function py(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      XM,
      `
`
    )
    .replace(JM, '')
}
function Fl(e, t, r) {
  if (((t = py(t)), py(e) !== t && r)) throw Error(re(425))
}
function Tu() {}
var gd = null,
  _d = null
function wd(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var bd = typeof setTimeout == 'function' ? setTimeout : void 0,
  ej = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  hy = typeof Promise == 'function' ? Promise : void 0,
  tj =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof hy < 'u'
      ? function (e) {
          return hy.resolve(null).then(e).catch(rj)
        }
      : bd
function rj(e) {
  setTimeout(function () {
    throw e
  })
}
function df(e, t) {
  var r = t,
    n = 0
  do {
    var o = r.nextSibling
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === '/$')) {
        if (n === 0) {
          e.removeChild(o), Cs(t)
          return
        }
        n--
      } else (r !== '$' && r !== '$?' && r !== '$!') || n++
    r = o
  } while (r)
  Cs(t)
}
function yo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function my(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data
      if (r === '$' || r === '$!' || r === '$?') {
        if (t === 0) return e
        t--
      } else r === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var wa = Math.random().toString(36).slice(2),
  En = '__reactFiber$' + wa,
  Ps = '__reactProps$' + wa,
  Wn = '__reactContainer$' + wa,
  xd = '__reactEvents$' + wa,
  nj = '__reactListeners$' + wa,
  oj = '__reactHandles$' + wa
function Bo(e) {
  var t = e[En]
  if (t) return t
  for (var r = e.parentNode; r; ) {
    if ((t = r[Wn] || r[En])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = my(e); e !== null; ) {
          if ((r = e[En])) return r
          e = my(e)
        }
      return t
    }
    ;(e = r), (r = e.parentNode)
  }
  return null
}
function Ks(e) {
  return (
    (e = e[En] || e[Wn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(re(33))
}
function pc(e) {
  return e[Ps] || null
}
var Sd = [],
  Di = -1
function Mo(e) {
  return { current: e }
}
function ct(e) {
  0 > Di || ((e.current = Sd[Di]), (Sd[Di] = null), Di--)
}
function at(e, t) {
  Di++, (Sd[Di] = e.current), (e.current = t)
}
var xo = {},
  Kt = Mo(xo),
  hr = Mo(!1),
  ri = xo
function Ji(e, t) {
  var r = e.type.contextTypes
  if (!r) return xo
  var n = e.stateNode
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in r) o[i] = t[i]
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function mr(e) {
  return (e = e.childContextTypes), e != null
}
function Cu() {
  ct(hr), ct(Kt)
}
function yy(e, t, r) {
  if (Kt.current !== xo) throw Error(re(168))
  at(Kt, t), at(hr, r)
}
function Z0(e, t, r) {
  var n = e.stateNode
  if (((t = t.childContextTypes), typeof n.getChildContext != 'function'))
    return r
  n = n.getChildContext()
  for (var o in n) if (!(o in t)) throw Error(re(108, BE(e) || 'Unknown', o))
  return gt({}, r, n)
}
function Nu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xo),
    (ri = Kt.current),
    at(Kt, e),
    at(hr, hr.current),
    !0
  )
}
function vy(e, t, r) {
  var n = e.stateNode
  if (!n) throw Error(re(169))
  r
    ? ((e = Z0(e, t, ri)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ct(hr),
      ct(Kt),
      at(Kt, e))
    : ct(hr),
    at(hr, r)
}
var Rn = null,
  hc = !1,
  pf = !1
function K0(e) {
  Rn === null ? (Rn = [e]) : Rn.push(e)
}
function ij(e) {
  ;(hc = !0), K0(e)
}
function jo() {
  if (!pf && Rn !== null) {
    pf = !0
    var e = 0,
      t = Ke
    try {
      var r = Rn
      for (Ke = 1; e < r.length; e++) {
        var n = r[e]
        do n = n(!0)
        while (n !== null)
      }
      ;(Rn = null), (hc = !1)
    } catch (o) {
      throw (Rn !== null && (Rn = Rn.slice(e + 1)), x0(Up, jo), o)
    } finally {
      ;(Ke = t), (pf = !1)
    }
  }
  return null
}
var Pi = [],
  ki = 0,
  Au = null,
  Ou = 0,
  Fr = [],
  $r = 0,
  ni = null,
  zn = 1,
  Un = ''
function ko(e, t) {
  ;(Pi[ki++] = Ou), (Pi[ki++] = Au), (Au = e), (Ou = t)
}
function X0(e, t, r) {
  ;(Fr[$r++] = zn), (Fr[$r++] = Un), (Fr[$r++] = ni), (ni = e)
  var n = zn
  e = Un
  var o = 32 - un(n) - 1
  ;(n &= ~(1 << o)), (r += 1)
  var i = 32 - un(t) + o
  if (30 < i) {
    var a = o - (o % 5)
    ;(i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (zn = (1 << (32 - un(t) + o)) | (r << o) | n),
      (Un = i + e)
  } else (zn = (1 << i) | (r << o) | n), (Un = e)
}
function Gp(e) {
  e.return !== null && (ko(e, 1), X0(e, 1, 0))
}
function qp(e) {
  for (; e === Au; )
    (Au = Pi[--ki]), (Pi[ki] = null), (Ou = Pi[--ki]), (Pi[ki] = null)
  for (; e === ni; )
    (ni = Fr[--$r]),
      (Fr[$r] = null),
      (Un = Fr[--$r]),
      (Fr[$r] = null),
      (zn = Fr[--$r]),
      (Fr[$r] = null)
}
var Er = null,
  Sr = null,
  dt = !1,
  ln = null
function J0(e, t) {
  var r = Br(5, null, null, 0)
  ;(r.elementType = 'DELETED'),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r)
}
function gy(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Er = e), (Sr = yo(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Er = e), (Sr = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = ni !== null ? { id: zn, overflow: Un } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Br(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Er = e),
            (Sr = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ed(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Md(e) {
  if (dt) {
    var t = Sr
    if (t) {
      var r = t
      if (!gy(e, t)) {
        if (Ed(e)) throw Error(re(418))
        t = yo(r.nextSibling)
        var n = Er
        t && gy(e, t)
          ? J0(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (dt = !1), (Er = e))
      }
    } else {
      if (Ed(e)) throw Error(re(418))
      ;(e.flags = (e.flags & -4097) | 2), (dt = !1), (Er = e)
    }
  }
}
function _y(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Er = e
}
function $l(e) {
  if (e !== Er) return !1
  if (!dt) return _y(e), (dt = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !wd(e.type, e.memoizedProps))),
    t && (t = Sr))
  ) {
    if (Ed(e)) throw (e_(), Error(re(418)))
    for (; t; ) J0(e, t), (t = yo(t.nextSibling))
  }
  if ((_y(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(re(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '/$') {
            if (t === 0) {
              Sr = yo(e.nextSibling)
              break e
            }
            t--
          } else (r !== '$' && r !== '$!' && r !== '$?') || t++
        }
        e = e.nextSibling
      }
      Sr = null
    }
  } else Sr = Er ? yo(e.stateNode.nextSibling) : null
  return !0
}
function e_() {
  for (var e = Sr; e; ) e = yo(e.nextSibling)
}
function ea() {
  ;(Sr = Er = null), (dt = !1)
}
function Zp(e) {
  ln === null ? (ln = [e]) : ln.push(e)
}
var aj = Gn.ReactCurrentBatchConfig
function on(e, t) {
  if (e && e.defaultProps) {
    ;(t = gt({}, t)), (e = e.defaultProps)
    for (var r in e) t[r] === void 0 && (t[r] = e[r])
    return t
  }
  return t
}
var Du = Mo(null),
  Pu = null,
  Ri = null,
  Kp = null
function Xp() {
  Kp = Ri = Pu = null
}
function Jp(e) {
  var t = Du.current
  ct(Du), (e._currentValue = t)
}
function jd(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break
    e = e.return
  }
}
function Gi(e, t) {
  ;(Pu = e),
    (Kp = Ri = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (dr = !0), (e.firstContext = null))
}
function Qr(e) {
  var t = e._currentValue
  if (Kp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ri === null)) {
      if (Pu === null) throw Error(re(308))
      ;(Ri = e), (Pu.dependencies = { lanes: 0, firstContext: e })
    } else Ri = Ri.next = e
  return t
}
var Wo = null
function eh(e) {
  Wo === null ? (Wo = [e]) : Wo.push(e)
}
function t_(e, t, r, n) {
  var o = t.interleaved
  return (
    o === null ? ((r.next = r), eh(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Hn(e, n)
  )
}
function Hn(e, t) {
  e.lanes |= t
  var r = e.alternate
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return)
  return r.tag === 3 ? r.stateNode : null
}
var no = !1
function th(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function r_(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function $n(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function vo(e, t, r) {
  var n = e.updateQueue
  if (n === null) return null
  if (((n = n.shared), He & 2)) {
    var o = n.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Hn(e, r)
    )
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), eh(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Hn(e, r)
  )
}
function au(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Fp(e, r)
  }
}
function wy(e, t) {
  var r = e.updateQueue,
    n = e.alternate
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next)
      } while (r !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r)
    return
  }
  ;(e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t)
}
function ku(e, t, r, n) {
  var o = e.updateQueue
  no = !1
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var l = s,
      f = l.next
    ;(l.next = null), a === null ? (i = f) : (a.next = f), (a = l)
    var p = e.alternate
    p !== null &&
      ((p = p.updateQueue),
      (s = p.lastBaseUpdate),
      s !== a &&
        (s === null ? (p.firstBaseUpdate = f) : (s.next = f),
        (p.lastBaseUpdate = l)))
  }
  if (i !== null) {
    var h = o.baseState
    ;(a = 0), (p = f = l = null), (s = i)
    do {
      var m = s.lane,
        v = s.eventTime
      if ((n & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var w = e,
            S = s
          switch (((m = t), (v = r), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == 'function')) {
                h = w.call(v, h, m)
                break e
              }
              h = w
              break e
            case 3:
              w.flags = (w.flags & -65537) | 128
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == 'function' ? w.call(v, h, m) : w),
                m == null)
              )
                break e
              h = gt({}, h, m)
              break e
            case 2:
              no = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [s]) : m.push(s))
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          p === null ? ((f = p = v), (l = h)) : (p = p.next = v),
          (a |= m)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(m = s),
          (s = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (p === null && (l = h),
      (o.baseState = l),
      (o.firstBaseUpdate = f),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (a |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(ii |= a), (e.lanes = a), (e.memoizedState = h)
  }
}
function by(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != 'function'))
          throw Error(re(191, o))
        o.call(n)
      }
    }
}
var n_ = new t0.Component().refs
function Id(e, t, r, n) {
  ;(t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : gt({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r)
}
var mc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fi(e) === e : !1
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals
    var n = nr(),
      o = _o(e),
      i = $n(n, o)
    ;(i.payload = t),
      r != null && (i.callback = r),
      (t = vo(e, i, o)),
      t !== null && (cn(t, e, o, n), au(t, e, o))
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals
    var n = nr(),
      o = _o(e),
      i = $n(n, o)
    ;(i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = vo(e, i, o)),
      t !== null && (cn(t, e, o, n), au(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var r = nr(),
      n = _o(e),
      o = $n(r, n)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = vo(e, o, n)),
      t !== null && (cn(t, e, n, r), au(t, e, n))
  },
}
function xy(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !As(r, n) || !As(o, i)
      : !0
  )
}
function o_(e, t, r) {
  var n = !1,
    o = xo,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Qr(i))
      : ((o = mr(t) ? ri : Kt.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Ji(e, o) : xo)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = mc),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Sy(e, t, r, n) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && mc.enqueueReplaceState(t, t.state, null)
}
function Td(e, t, r, n) {
  var o = e.stateNode
  ;(o.props = r), (o.state = e.memoizedState), (o.refs = n_), th(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Qr(i))
    : ((i = mr(t) ? ri : Kt.current), (o.context = Ji(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Id(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && mc.enqueueReplaceState(o, o.state, null),
      ku(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Fa(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(re(309))
        var n = r.stateNode
      }
      if (!n) throw Error(re(147, e))
      var o = n,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs
            s === n_ && (s = o.refs = {}), a === null ? delete s[i] : (s[i] = a)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(re(284))
    if (!r._owner) throw Error(re(290, e))
  }
  return e
}
function Bl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      re(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Ey(e) {
  var t = e._init
  return t(e._payload)
}
function i_(e) {
  function t(y, g) {
    if (e) {
      var b = y.deletions
      b === null ? ((y.deletions = [g]), (y.flags |= 16)) : b.push(g)
    }
  }
  function r(y, g) {
    if (!e) return null
    for (; g !== null; ) t(y, g), (g = g.sibling)
    return null
  }
  function n(y, g) {
    for (y = new Map(); g !== null; )
      g.key !== null ? y.set(g.key, g) : y.set(g.index, g), (g = g.sibling)
    return y
  }
  function o(y, g) {
    return (y = wo(y, g)), (y.index = 0), (y.sibling = null), y
  }
  function i(y, g, b) {
    return (
      (y.index = b),
      e
        ? ((b = y.alternate),
          b !== null
            ? ((b = b.index), b < g ? ((y.flags |= 2), g) : b)
            : ((y.flags |= 2), g))
        : ((y.flags |= 1048576), g)
    )
  }
  function a(y) {
    return e && y.alternate === null && (y.flags |= 2), y
  }
  function s(y, g, b, I) {
    return g === null || g.tag !== 6
      ? ((g = wf(b, y.mode, I)), (g.return = y), g)
      : ((g = o(g, b)), (g.return = y), g)
  }
  function l(y, g, b, I) {
    var D = b.type
    return D === Ti
      ? p(y, g, b.props.children, I, b.key)
      : g !== null &&
        (g.elementType === D ||
          (typeof D == 'object' &&
            D !== null &&
            D.$$typeof === ro &&
            Ey(D) === g.type))
      ? ((I = o(g, b.props)), (I.ref = Fa(y, g, b)), (I.return = y), I)
      : ((I = du(b.type, b.key, b.props, null, y.mode, I)),
        (I.ref = Fa(y, g, b)),
        (I.return = y),
        I)
  }
  function f(y, g, b, I) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== b.containerInfo ||
      g.stateNode.implementation !== b.implementation
      ? ((g = bf(b, y.mode, I)), (g.return = y), g)
      : ((g = o(g, b.children || [])), (g.return = y), g)
  }
  function p(y, g, b, I, D) {
    return g === null || g.tag !== 7
      ? ((g = Ko(b, y.mode, I, D)), (g.return = y), g)
      : ((g = o(g, b)), (g.return = y), g)
  }
  function h(y, g, b) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = wf('' + g, y.mode, b)), (g.return = y), g
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Al:
          return (
            (b = du(g.type, g.key, g.props, null, y.mode, b)),
            (b.ref = Fa(y, null, g)),
            (b.return = y),
            b
          )
        case Ii:
          return (g = bf(g, y.mode, b)), (g.return = y), g
        case ro:
          var I = g._init
          return h(y, I(g._payload), b)
      }
      if (Ka(g) || ka(g)) return (g = Ko(g, y.mode, b, null)), (g.return = y), g
      Bl(y, g)
    }
    return null
  }
  function m(y, g, b, I) {
    var D = g !== null ? g.key : null
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return D !== null ? null : s(y, g, '' + b, I)
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case Al:
          return b.key === D ? l(y, g, b, I) : null
        case Ii:
          return b.key === D ? f(y, g, b, I) : null
        case ro:
          return (D = b._init), m(y, g, D(b._payload), I)
      }
      if (Ka(b) || ka(b)) return D !== null ? null : p(y, g, b, I, null)
      Bl(y, b)
    }
    return null
  }
  function v(y, g, b, I, D) {
    if ((typeof I == 'string' && I !== '') || typeof I == 'number')
      return (y = y.get(b) || null), s(g, y, '' + I, D)
    if (typeof I == 'object' && I !== null) {
      switch (I.$$typeof) {
        case Al:
          return (y = y.get(I.key === null ? b : I.key) || null), l(g, y, I, D)
        case Ii:
          return (y = y.get(I.key === null ? b : I.key) || null), f(g, y, I, D)
        case ro:
          var E = I._init
          return v(y, g, b, E(I._payload), D)
      }
      if (Ka(I) || ka(I)) return (y = y.get(b) || null), p(g, y, I, D, null)
      Bl(g, I)
    }
    return null
  }
  function w(y, g, b, I) {
    for (
      var D = null, E = null, C = g, R = (g = 0), W = null;
      C !== null && R < b.length;
      R++
    ) {
      C.index > R ? ((W = C), (C = null)) : (W = C.sibling)
      var F = m(y, C, b[R], I)
      if (F === null) {
        C === null && (C = W)
        break
      }
      e && C && F.alternate === null && t(y, C),
        (g = i(F, g, R)),
        E === null ? (D = F) : (E.sibling = F),
        (E = F),
        (C = W)
    }
    if (R === b.length) return r(y, C), dt && ko(y, R), D
    if (C === null) {
      for (; R < b.length; R++)
        (C = h(y, b[R], I)),
          C !== null &&
            ((g = i(C, g, R)), E === null ? (D = C) : (E.sibling = C), (E = C))
      return dt && ko(y, R), D
    }
    for (C = n(y, C); R < b.length; R++)
      (W = v(C, y, R, b[R], I)),
        W !== null &&
          (e && W.alternate !== null && C.delete(W.key === null ? R : W.key),
          (g = i(W, g, R)),
          E === null ? (D = W) : (E.sibling = W),
          (E = W))
    return (
      e &&
        C.forEach(function (G) {
          return t(y, G)
        }),
      dt && ko(y, R),
      D
    )
  }
  function S(y, g, b, I) {
    var D = ka(b)
    if (typeof D != 'function') throw Error(re(150))
    if (((b = D.call(b)), b == null)) throw Error(re(151))
    for (
      var E = (D = null), C = g, R = (g = 0), W = null, F = b.next();
      C !== null && !F.done;
      R++, F = b.next()
    ) {
      C.index > R ? ((W = C), (C = null)) : (W = C.sibling)
      var G = m(y, C, F.value, I)
      if (G === null) {
        C === null && (C = W)
        break
      }
      e && C && G.alternate === null && t(y, C),
        (g = i(G, g, R)),
        E === null ? (D = G) : (E.sibling = G),
        (E = G),
        (C = W)
    }
    if (F.done) return r(y, C), dt && ko(y, R), D
    if (C === null) {
      for (; !F.done; R++, F = b.next())
        (F = h(y, F.value, I)),
          F !== null &&
            ((g = i(F, g, R)), E === null ? (D = F) : (E.sibling = F), (E = F))
      return dt && ko(y, R), D
    }
    for (C = n(y, C); !F.done; R++, F = b.next())
      (F = v(C, y, R, F.value, I)),
        F !== null &&
          (e && F.alternate !== null && C.delete(F.key === null ? R : F.key),
          (g = i(F, g, R)),
          E === null ? (D = F) : (E.sibling = F),
          (E = F))
    return (
      e &&
        C.forEach(function (K) {
          return t(y, K)
        }),
      dt && ko(y, R),
      D
    )
  }
  function x(y, g, b, I) {
    if (
      (typeof b == 'object' &&
        b !== null &&
        b.type === Ti &&
        b.key === null &&
        (b = b.props.children),
      typeof b == 'object' && b !== null)
    ) {
      switch (b.$$typeof) {
        case Al:
          e: {
            for (var D = b.key, E = g; E !== null; ) {
              if (E.key === D) {
                if (((D = b.type), D === Ti)) {
                  if (E.tag === 7) {
                    r(y, E.sibling),
                      (g = o(E, b.props.children)),
                      (g.return = y),
                      (y = g)
                    break e
                  }
                } else if (
                  E.elementType === D ||
                  (typeof D == 'object' &&
                    D !== null &&
                    D.$$typeof === ro &&
                    Ey(D) === E.type)
                ) {
                  r(y, E.sibling),
                    (g = o(E, b.props)),
                    (g.ref = Fa(y, E, b)),
                    (g.return = y),
                    (y = g)
                  break e
                }
                r(y, E)
                break
              } else t(y, E)
              E = E.sibling
            }
            b.type === Ti
              ? ((g = Ko(b.props.children, y.mode, I, b.key)),
                (g.return = y),
                (y = g))
              : ((I = du(b.type, b.key, b.props, null, y.mode, I)),
                (I.ref = Fa(y, g, b)),
                (I.return = y),
                (y = I))
          }
          return a(y)
        case Ii:
          e: {
            for (E = b.key; g !== null; ) {
              if (g.key === E)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === b.containerInfo &&
                  g.stateNode.implementation === b.implementation
                ) {
                  r(y, g.sibling),
                    (g = o(g, b.children || [])),
                    (g.return = y),
                    (y = g)
                  break e
                } else {
                  r(y, g)
                  break
                }
              else t(y, g)
              g = g.sibling
            }
            ;(g = bf(b, y.mode, I)), (g.return = y), (y = g)
          }
          return a(y)
        case ro:
          return (E = b._init), x(y, g, E(b._payload), I)
      }
      if (Ka(b)) return w(y, g, b, I)
      if (ka(b)) return S(y, g, b, I)
      Bl(y, b)
    }
    return (typeof b == 'string' && b !== '') || typeof b == 'number'
      ? ((b = '' + b),
        g !== null && g.tag === 6
          ? (r(y, g.sibling), (g = o(g, b)), (g.return = y), (y = g))
          : (r(y, g), (g = wf(b, y.mode, I)), (g.return = y), (y = g)),
        a(y))
      : r(y, g)
  }
  return x
}
var ta = i_(!0),
  a_ = i_(!1),
  Xs = {},
  jn = Mo(Xs),
  ks = Mo(Xs),
  Rs = Mo(Xs)
function Ho(e) {
  if (e === Xs) throw Error(re(174))
  return e
}
function rh(e, t) {
  switch ((at(Rs, t), at(ks, e), at(jn, Xs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ad(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ad(t, e))
  }
  ct(jn), at(jn, t)
}
function ra() {
  ct(jn), ct(ks), ct(Rs)
}
function s_(e) {
  Ho(Rs.current)
  var t = Ho(jn.current),
    r = ad(t, e.type)
  t !== r && (at(ks, e), at(jn, r))
}
function nh(e) {
  ks.current === e && (ct(jn), ct(ks))
}
var yt = Mo(0)
function Ru(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var hf = []
function oh() {
  for (var e = 0; e < hf.length; e++) hf[e]._workInProgressVersionPrimary = null
  hf.length = 0
}
var su = Gn.ReactCurrentDispatcher,
  mf = Gn.ReactCurrentBatchConfig,
  oi = 0,
  vt = null,
  Dt = null,
  Ut = null,
  Lu = !1,
  ls = !1,
  Ls = 0,
  sj = 0
function Gt() {
  throw Error(re(321))
}
function ih(e, t) {
  if (t === null) return !1
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!fn(e[r], t[r])) return !1
  return !0
}
function ah(e, t, r, n, o, i) {
  if (
    ((oi = i),
    (vt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (su.current = e === null || e.memoizedState === null ? fj : dj),
    (e = r(n, o)),
    ls)
  ) {
    i = 0
    do {
      if (((ls = !1), (Ls = 0), 25 <= i)) throw Error(re(301))
      ;(i += 1),
        (Ut = Dt = null),
        (t.updateQueue = null),
        (su.current = pj),
        (e = r(n, o))
    } while (ls)
  }
  if (
    ((su.current = zu),
    (t = Dt !== null && Dt.next !== null),
    (oi = 0),
    (Ut = Dt = vt = null),
    (Lu = !1),
    t)
  )
    throw Error(re(300))
  return e
}
function sh() {
  var e = Ls !== 0
  return (Ls = 0), e
}
function xn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Ut === null ? (vt.memoizedState = Ut = e) : (Ut = Ut.next = e), Ut
}
function Vr() {
  if (Dt === null) {
    var e = vt.alternate
    e = e !== null ? e.memoizedState : null
  } else e = Dt.next
  var t = Ut === null ? vt.memoizedState : Ut.next
  if (t !== null) (Ut = t), (Dt = e)
  else {
    if (e === null) throw Error(re(310))
    ;(Dt = e),
      (e = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null,
      }),
      Ut === null ? (vt.memoizedState = Ut = e) : (Ut = Ut.next = e)
  }
  return Ut
}
function zs(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function yf(e) {
  var t = Vr(),
    r = t.queue
  if (r === null) throw Error(re(311))
  r.lastRenderedReducer = e
  var n = Dt,
    o = n.baseQueue,
    i = r.pending
  if (i !== null) {
    if (o !== null) {
      var a = o.next
      ;(o.next = i.next), (i.next = a)
    }
    ;(n.baseQueue = o = i), (r.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (n = n.baseState)
    var s = (a = null),
      l = null,
      f = i
    do {
      var p = f.lane
      if ((oi & p) === p)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (n = f.hasEagerState ? f.eagerState : e(n, f.action))
      else {
        var h = {
          lane: p,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        }
        l === null ? ((s = l = h), (a = n)) : (l = l.next = h),
          (vt.lanes |= p),
          (ii |= p)
      }
      f = f.next
    } while (f !== null && f !== i)
    l === null ? (a = n) : (l.next = s),
      fn(n, t.memoizedState) || (dr = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n)
  }
  if (((e = r.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (vt.lanes |= i), (ii |= i), (o = o.next)
    while (o !== e)
  } else o === null && (r.lanes = 0)
  return [t.memoizedState, r.dispatch]
}
function vf(e) {
  var t = Vr(),
    r = t.queue
  if (r === null) throw Error(re(311))
  r.lastRenderedReducer = e
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState
  if (o !== null) {
    r.pending = null
    var a = (o = o.next)
    do (i = e(i, a.action)), (a = a.next)
    while (a !== o)
    fn(i, t.memoizedState) || (dr = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i)
  }
  return [i, n]
}
function l_() {}
function u_(e, t) {
  var r = vt,
    n = Vr(),
    o = t(),
    i = !fn(n.memoizedState, o)
  if (
    (i && ((n.memoizedState = o), (dr = !0)),
    (n = n.queue),
    lh(d_.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Ut !== null && Ut.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      Us(9, f_.bind(null, r, n, o, t), void 0, null),
      Ft === null)
    )
      throw Error(re(349))
    oi & 30 || c_(r, t, o)
  }
  return o
}
function c_(e, t, r) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = vt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (vt.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e))
}
function f_(e, t, r, n) {
  ;(t.value = r), (t.getSnapshot = n), p_(t) && h_(e)
}
function d_(e, t, r) {
  return r(function () {
    p_(t) && h_(e)
  })
}
function p_(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !fn(e, r)
  } catch {
    return !0
  }
}
function h_(e) {
  var t = Hn(e, 1)
  t !== null && cn(t, e, 1, -1)
}
function My(e) {
  var t = xn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cj.bind(null, vt, e)),
    [t.memoizedState, e]
  )
}
function Us(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = vt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (vt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  )
}
function m_() {
  return Vr().memoizedState
}
function lu(e, t, r, n) {
  var o = xn()
  ;(vt.flags |= e),
    (o.memoizedState = Us(1 | t, r, void 0, n === void 0 ? null : n))
}
function yc(e, t, r, n) {
  var o = Vr()
  n = n === void 0 ? null : n
  var i = void 0
  if (Dt !== null) {
    var a = Dt.memoizedState
    if (((i = a.destroy), n !== null && ih(n, a.deps))) {
      o.memoizedState = Us(t, r, i, n)
      return
    }
  }
  ;(vt.flags |= e), (o.memoizedState = Us(1 | t, r, i, n))
}
function jy(e, t) {
  return lu(8390656, 8, e, t)
}
function lh(e, t) {
  return yc(2048, 8, e, t)
}
function y_(e, t) {
  return yc(4, 2, e, t)
}
function v_(e, t) {
  return yc(4, 4, e, t)
}
function g_(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function __(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), yc(4, 4, g_.bind(null, t, e), r)
  )
}
function uh() {}
function w_(e, t) {
  var r = Vr()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && ih(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e)
}
function b_(e, t) {
  var r = Vr()
  t = t === void 0 ? null : t
  var n = r.memoizedState
  return n !== null && t !== null && ih(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e)
}
function x_(e, t, r) {
  return oi & 21
    ? (fn(r, t) || ((r = M0()), (vt.lanes |= r), (ii |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (dr = !0)), (e.memoizedState = r))
}
function lj(e, t) {
  var r = Ke
  ;(Ke = r !== 0 && 4 > r ? r : 4), e(!0)
  var n = mf.transition
  mf.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Ke = r), (mf.transition = n)
  }
}
function S_() {
  return Vr().memoizedState
}
function uj(e, t, r) {
  var n = _o(e)
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    E_(e))
  )
    M_(t, r)
  else if (((r = t_(e, t, r, n)), r !== null)) {
    var o = nr()
    cn(r, e, n, o), j_(r, t, n)
  }
}
function cj(e, t, r) {
  var n = _o(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }
  if (E_(e)) M_(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r)
        if (((o.hasEagerState = !0), (o.eagerState = s), fn(s, a))) {
          var l = t.interleaved
          l === null
            ? ((o.next = o), eh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(r = t_(e, t, o, n)),
      r !== null && ((o = nr()), cn(r, e, n, o), j_(r, t, n))
  }
}
function E_(e) {
  var t = e.alternate
  return e === vt || (t !== null && t === vt)
}
function M_(e, t) {
  ls = Lu = !0
  var r = e.pending
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
}
function j_(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes
    ;(n &= e.pendingLanes), (r |= n), (t.lanes = r), Fp(e, r)
  }
}
var zu = {
    readContext: Qr,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useInsertionEffect: Gt,
    useLayoutEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useMutableSource: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    unstable_isNewReconciler: !1,
  },
  fj = {
    readContext: Qr,
    useCallback: function (e, t) {
      return (xn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Qr,
    useEffect: jy,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        lu(4194308, 4, g_.bind(null, t, e), r)
      )
    },
    useLayoutEffect: function (e, t) {
      return lu(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return lu(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var r = xn()
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, r) {
      var n = xn()
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = uj.bind(null, vt, e)),
        [n.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = xn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: My,
    useDebugValue: uh,
    useDeferredValue: function (e) {
      return (xn().memoizedState = e)
    },
    useTransition: function () {
      var e = My(!1),
        t = e[0]
      return (e = lj.bind(null, e[1])), (xn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = vt,
        o = xn()
      if (dt) {
        if (r === void 0) throw Error(re(407))
        r = r()
      } else {
        if (((r = t()), Ft === null)) throw Error(re(349))
        oi & 30 || c_(n, t, r)
      }
      o.memoizedState = r
      var i = { value: r, getSnapshot: t }
      return (
        (o.queue = i),
        jy(d_.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        Us(9, f_.bind(null, n, i, r, t), void 0, null),
        r
      )
    },
    useId: function () {
      var e = xn(),
        t = Ft.identifierPrefix
      if (dt) {
        var r = Un,
          n = zn
        ;(r = (n & ~(1 << (32 - un(n) - 1))).toString(32) + r),
          (t = ':' + t + 'R' + r),
          (r = Ls++),
          0 < r && (t += 'H' + r.toString(32)),
          (t += ':')
      } else (r = sj++), (t = ':' + t + 'r' + r.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  dj = {
    readContext: Qr,
    useCallback: w_,
    useContext: Qr,
    useEffect: lh,
    useImperativeHandle: __,
    useInsertionEffect: y_,
    useLayoutEffect: v_,
    useMemo: b_,
    useReducer: yf,
    useRef: m_,
    useState: function () {
      return yf(zs)
    },
    useDebugValue: uh,
    useDeferredValue: function (e) {
      var t = Vr()
      return x_(t, Dt.memoizedState, e)
    },
    useTransition: function () {
      var e = yf(zs)[0],
        t = Vr().memoizedState
      return [e, t]
    },
    useMutableSource: l_,
    useSyncExternalStore: u_,
    useId: S_,
    unstable_isNewReconciler: !1,
  },
  pj = {
    readContext: Qr,
    useCallback: w_,
    useContext: Qr,
    useEffect: lh,
    useImperativeHandle: __,
    useInsertionEffect: y_,
    useLayoutEffect: v_,
    useMemo: b_,
    useReducer: vf,
    useRef: m_,
    useState: function () {
      return vf(zs)
    },
    useDebugValue: uh,
    useDeferredValue: function (e) {
      var t = Vr()
      return Dt === null ? (t.memoizedState = e) : x_(t, Dt.memoizedState, e)
    },
    useTransition: function () {
      var e = vf(zs)[0],
        t = Vr().memoizedState
      return [e, t]
    },
    useMutableSource: l_,
    useSyncExternalStore: u_,
    useId: S_,
    unstable_isNewReconciler: !1,
  }
function na(e, t) {
  try {
    var r = '',
      n = t
    do (r += $E(n)), (n = n.return)
    while (n)
    var o = r
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function gf(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null }
}
function Cd(e, t) {
  try {
    console.error(t.value)
  } catch (r) {
    setTimeout(function () {
      throw r
    })
  }
}
var hj = typeof WeakMap == 'function' ? WeakMap : Map
function I_(e, t, r) {
  ;(r = $n(-1, r)), (r.tag = 3), (r.payload = { element: null })
  var n = t.value
  return (
    (r.callback = function () {
      Fu || ((Fu = !0), (Ud = n)), Cd(e, t)
    }),
    r
  )
}
function T_(e, t, r) {
  ;(r = $n(-1, r)), (r.tag = 3)
  var n = e.type.getDerivedStateFromError
  if (typeof n == 'function') {
    var o = t.value
    ;(r.payload = function () {
      return n(o)
    }),
      (r.callback = function () {
        Cd(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (r.callback = function () {
        Cd(e, t),
          typeof n != 'function' &&
            (go === null ? (go = new Set([this])) : go.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    r
  )
}
function Iy(e, t, r) {
  var n = e.pingCache
  if (n === null) {
    n = e.pingCache = new hj()
    var o = new Set()
    n.set(t, o)
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o))
  o.has(r) || (o.add(r), (e = Tj.bind(null, e, t, r)), t.then(e, e))
}
function Ty(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Cy(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = $n(-1, 1)), (t.tag = 2), vo(r, t, 1))),
          (r.lanes |= 1)),
      e)
}
var mj = Gn.ReactCurrentOwner,
  dr = !1
function rr(e, t, r, n) {
  t.child = e === null ? a_(t, null, r, n) : ta(t, e.child, r, n)
}
function Ny(e, t, r, n, o) {
  r = r.render
  var i = t.ref
  return (
    Gi(t, o),
    (n = ah(e, t, r, n, i, o)),
    (r = sh()),
    e !== null && !dr
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qn(e, t, o))
      : (dt && r && Gp(t), (t.flags |= 1), rr(e, t, n, o), t.child)
  )
}
function Ay(e, t, r, n, o) {
  if (e === null) {
    var i = r.type
    return typeof i == 'function' &&
      !vh(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), C_(e, t, i, n, o))
      : ((e = du(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps
    if (
      ((r = r.compare), (r = r !== null ? r : As), r(a, n) && e.ref === t.ref)
    )
      return Qn(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = wo(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function C_(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (As(i, n) && e.ref === t.ref)
      if (((dr = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (dr = !0)
      else return (t.lanes = e.lanes), Qn(e, t, o)
  }
  return Nd(e, t, r, n, o)
}
function N_(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null
  if (n.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        at(zi, xr),
        (xr |= r)
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          at(zi, xr),
          (xr |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        at(zi, xr),
        (xr |= n)
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      at(zi, xr),
      (xr |= n)
  return rr(e, t, o, r), t.child
}
function A_(e, t) {
  var r = t.ref
  ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Nd(e, t, r, n, o) {
  var i = mr(r) ? ri : Kt.current
  return (
    (i = Ji(t, i)),
    Gi(t, o),
    (r = ah(e, t, r, n, i, o)),
    (n = sh()),
    e !== null && !dr
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qn(e, t, o))
      : (dt && n && Gp(t), (t.flags |= 1), rr(e, t, r, o), t.child)
  )
}
function Oy(e, t, r, n, o) {
  if (mr(r)) {
    var i = !0
    Nu(t)
  } else i = !1
  if ((Gi(t, o), t.stateNode === null))
    uu(e, t), o_(t, r, n), Td(t, r, n, o), (n = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      f = r.contextType
    typeof f == 'object' && f !== null
      ? (f = Qr(f))
      : ((f = mr(r) ? ri : Kt.current), (f = Ji(t, f)))
    var p = r.getDerivedStateFromProps,
      h =
        typeof p == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== n || l !== f) && Sy(t, a, n, f)),
      (no = !1)
    var m = t.memoizedState
    ;(a.state = m),
      ku(t, n, a, o),
      (l = t.memoizedState),
      s !== n || m !== l || hr.current || no
        ? (typeof p == 'function' && (Id(t, r, p, n), (l = t.memoizedState)),
          (s = no || xy(t, r, s, n, m, l, f))
            ? (h ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = f),
          (n = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (n = !1))
  } else {
    ;(a = t.stateNode),
      r_(e, t),
      (s = t.memoizedProps),
      (f = t.type === t.elementType ? s : on(t.type, s)),
      (a.props = f),
      (h = t.pendingProps),
      (m = a.context),
      (l = r.contextType),
      typeof l == 'object' && l !== null
        ? (l = Qr(l))
        : ((l = mr(r) ? ri : Kt.current), (l = Ji(t, l)))
    var v = r.getDerivedStateFromProps
    ;(p =
      typeof v == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== h || m !== l) && Sy(t, a, n, l)),
      (no = !1),
      (m = t.memoizedState),
      (a.state = m),
      ku(t, n, a, o)
    var w = t.memoizedState
    s !== h || m !== w || hr.current || no
      ? (typeof v == 'function' && (Id(t, r, v, n), (w = t.memoizedState)),
        (f = no || xy(t, r, f, n, m, w, l) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(n, w, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(n, w, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = w)),
        (a.props = n),
        (a.state = w),
        (a.context = l),
        (n = f))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1))
  }
  return Ad(e, t, r, n, i, o)
}
function Ad(e, t, r, n, o, i) {
  A_(e, t)
  var a = (t.flags & 128) !== 0
  if (!n && !a) return o && vy(t, r, !1), Qn(e, t, i)
  ;(n = t.stateNode), (mj.current = t)
  var s =
    a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ta(t, e.child, null, i)), (t.child = ta(t, null, s, i)))
      : rr(e, t, s, i),
    (t.memoizedState = n.state),
    o && vy(t, r, !0),
    t.child
  )
}
function O_(e) {
  var t = e.stateNode
  t.pendingContext
    ? yy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yy(e, t.context, !1),
    rh(e, t.containerInfo)
}
function Dy(e, t, r, n, o) {
  return ea(), Zp(o), (t.flags |= 256), rr(e, t, r, n), t.child
}
var Od = { dehydrated: null, treeContext: null, retryLane: 0 }
function Dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function D_(e, t, r) {
  var n = t.pendingProps,
    o = yt.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    at(yt, o & 1),
    e === null)
  )
    return (
      Md(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = _c(a, n, 0, null)),
              (e = Ko(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Dd(r)),
              (t.memoizedState = Od),
              e)
            : ch(t, a))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return yj(e, t, a, n, s, o, r)
  if (i) {
    ;(i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling)
    var l = { mode: 'hidden', children: n.children }
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = wo(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = wo(s, i)) : ((i = Ko(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Dd(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Od),
      n
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = wo(i, { mode: 'visible', children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  )
}
function ch(e, t) {
  return (
    (t = _c({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Wl(e, t, r, n) {
  return (
    n !== null && Zp(n),
    ta(t, e.child, null, r),
    (e = ch(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function yj(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = gf(Error(re(422)))), Wl(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = _c({ mode: 'visible', children: n.children }, o, 0, null)),
        (i = Ko(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && ta(t, e.child, null, a),
        (t.child.memoizedState = Dd(a)),
        (t.memoizedState = Od),
        i)
  if (!(t.mode & 1)) return Wl(e, t, a, null)
  if (o.data === '$!') {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst
    return (n = s), (i = Error(re(419))), (n = gf(i, n, void 0)), Wl(e, t, a, n)
  }
  if (((s = (a & e.childLanes) !== 0), dr || s)) {
    if (((n = Ft), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Hn(e, o), cn(n, e, o, -1))
    }
    return yh(), (n = gf(Error(re(421)))), Wl(e, t, a, n)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cj.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Sr = yo(o.nextSibling)),
      (Er = t),
      (dt = !0),
      (ln = null),
      e !== null &&
        ((Fr[$r++] = zn),
        (Fr[$r++] = Un),
        (Fr[$r++] = ni),
        (zn = e.id),
        (Un = e.overflow),
        (ni = t)),
      (t = ch(t, n.children)),
      (t.flags |= 4096),
      t)
}
function Py(e, t, r) {
  e.lanes |= t
  var n = e.alternate
  n !== null && (n.lanes |= t), jd(e.return, t, r)
}
function _f(e, t, r, n, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o))
}
function P_(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail
  if ((rr(e, t, n.children, r), (n = yt.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Py(e, r, t)
        else if (e.tag === 19) Py(e, r, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    n &= 1
  }
  if ((at(yt, n), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Ru(e) === null && (o = r),
            (r = r.sibling)
        ;(r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          _f(t, !1, o, r, i)
        break
      case 'backwards':
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ru(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = r), (r = o), (o = e)
        }
        _f(t, !0, r, null, i)
        break
      case 'together':
        _f(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function uu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Qn(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ii |= t.lanes),
    !(r & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(re(153))
  if (t.child !== null) {
    for (
      e = t.child, r = wo(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = wo(e, e.pendingProps)), (r.return = t)
    r.sibling = null
  }
  return t.child
}
function vj(e, t, r) {
  switch (t.tag) {
    case 3:
      O_(t), ea()
      break
    case 5:
      s_(t)
      break
    case 1:
      mr(t.type) && Nu(t)
      break
    case 4:
      rh(t, t.stateNode.containerInfo)
      break
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value
      at(Du, n._currentValue), (n._currentValue = o)
      break
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (at(yt, yt.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? D_(e, t, r)
          : (at(yt, yt.current & 1),
            (e = Qn(e, t, r)),
            e !== null ? e.sibling : null)
      at(yt, yt.current & 1)
      break
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return P_(e, t, r)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        at(yt, yt.current),
        n)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), N_(e, t, r)
  }
  return Qn(e, t, r)
}
var k_, Pd, R_, L_
k_ = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
    else if (r.tag !== 4 && r.child !== null) {
      ;(r.child.return = r), (r = r.child)
      continue
    }
    if (r === t) break
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return
      r = r.return
    }
    ;(r.sibling.return = r.return), (r = r.sibling)
  }
}
Pd = function () {}
R_ = function (e, t, r, n) {
  var o = e.memoizedProps
  if (o !== n) {
    ;(e = t.stateNode), Ho(jn.current)
    var i = null
    switch (r) {
      case 'input':
        ;(o = rd(e, o)), (n = rd(e, n)), (i = [])
        break
      case 'select':
        ;(o = gt({}, o, { value: void 0 })),
          (n = gt({}, n, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = id(e, o)), (n = id(e, n)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof n.onClick == 'function' &&
          (e.onclick = Tu)
    }
    sd(r, n)
    var a
    r = null
    for (f in o)
      if (!n.hasOwnProperty(f) && o.hasOwnProperty(f) && o[f] != null)
        if (f === 'style') {
          var s = o[f]
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
        } else
          f !== 'dangerouslySetInnerHTML' &&
            f !== 'children' &&
            f !== 'suppressContentEditableWarning' &&
            f !== 'suppressHydrationWarning' &&
            f !== 'autoFocus' &&
            (Es.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null))
    for (f in n) {
      var l = n[f]
      if (
        ((s = o != null ? o[f] : void 0),
        n.hasOwnProperty(f) && l !== s && (l != null || s != null))
      )
        if (f === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ''))
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]))
          } else r || (i || (i = []), i.push(f, r)), (r = l)
        else
          f === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(f, l))
            : f === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (i = i || []).push(f, '' + l)
            : f !== 'suppressContentEditableWarning' &&
              f !== 'suppressHydrationWarning' &&
              (Es.hasOwnProperty(f)
                ? (l != null && f === 'onScroll' && ut('scroll', e),
                  i || s === l || (i = []))
                : (i = i || []).push(f, l))
    }
    r && (i = i || []).push('style', r)
    var f = i
    ;(t.updateQueue = f) && (t.flags |= 4)
  }
}
L_ = function (e, t, r, n) {
  r !== n && (t.flags |= 4)
}
function $a(e, t) {
  if (!dt)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling)
        r === null ? (e.tail = null) : (r.sibling = null)
        break
      case 'collapsed':
        r = e.tail
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling)
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null)
    }
}
function qt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= n), (e.childLanes = r), t
}
function gj(e, t, r) {
  var n = t.pendingProps
  switch ((qp(t), t.tag)) {
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
      return qt(t), null
    case 1:
      return mr(t.type) && Cu(), qt(t), null
    case 3:
      return (
        (n = t.stateNode),
        ra(),
        ct(hr),
        ct(Kt),
        oh(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          ($l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ln !== null && (Bd(ln), (ln = null)))),
        Pd(e, t),
        qt(t),
        null
      )
    case 5:
      nh(t)
      var o = Ho(Rs.current)
      if (((r = t.type), e !== null && t.stateNode != null))
        R_(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(re(166))
          return qt(t), null
        }
        if (((e = Ho(jn.current)), $l(t))) {
          ;(n = t.stateNode), (r = t.type)
          var i = t.memoizedProps
          switch (((n[En] = t), (n[Ps] = i), (e = (t.mode & 1) !== 0), r)) {
            case 'dialog':
              ut('cancel', n), ut('close', n)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ut('load', n)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Ja.length; o++) ut(Ja[o], n)
              break
            case 'source':
              ut('error', n)
              break
            case 'img':
            case 'image':
            case 'link':
              ut('error', n), ut('load', n)
              break
            case 'details':
              ut('toggle', n)
              break
            case 'input':
              Wm(n, i), ut('invalid', n)
              break
            case 'select':
              ;(n._wrapperState = { wasMultiple: !!i.multiple }),
                ut('invalid', n)
              break
            case 'textarea':
              Qm(n, i), ut('invalid', n)
          }
          sd(r, i), (o = null)
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a]
              a === 'children'
                ? typeof s == 'string'
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fl(n.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    n.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Fl(n.textContent, s, e),
                    (o = ['children', '' + s]))
                : Es.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ut('scroll', n)
            }
          switch (r) {
            case 'input':
              Ol(n), Hm(n, i, !0)
              break
            case 'textarea':
              Ol(n), Vm(n)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (n.onclick = Tu)
          }
          ;(n = o), (t.updateQueue = n), n !== null && (t.flags |= 4)
        } else {
          ;(a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = c0(r)),
            e === 'http://www.w3.org/1999/xhtml'
              ? r === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == 'string'
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === 'select' &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[En] = t),
            (e[Ps] = n),
            k_(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = ld(r, n)), r)) {
              case 'dialog':
                ut('cancel', e), ut('close', e), (o = n)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ut('load', e), (o = n)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Ja.length; o++) ut(Ja[o], e)
                o = n
                break
              case 'source':
                ut('error', e), (o = n)
                break
              case 'img':
              case 'image':
              case 'link':
                ut('error', e), ut('load', e), (o = n)
                break
              case 'details':
                ut('toggle', e), (o = n)
                break
              case 'input':
                Wm(e, n), (o = rd(e, n)), ut('invalid', e)
                break
              case 'option':
                o = n
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = gt({}, n, { value: void 0 })),
                  ut('invalid', e)
                break
              case 'textarea':
                Qm(e, n), (o = id(e, n)), ut('invalid', e)
                break
              default:
                o = n
            }
            sd(r, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i]
                i === 'style'
                  ? p0(e, l)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && f0(e, l))
                  : i === 'children'
                  ? typeof l == 'string'
                    ? (r !== 'textarea' || l !== '') && Ms(e, l)
                    : typeof l == 'number' && Ms(e, '' + l)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Es.hasOwnProperty(i)
                      ? l != null && i === 'onScroll' && ut('scroll', e)
                      : l != null && Pp(e, i, l, a))
              }
            switch (r) {
              case 'input':
                Ol(e), Hm(e, n, !1)
                break
              case 'textarea':
                Ol(e), Vm(e)
                break
              case 'option':
                n.value != null && e.setAttribute('value', '' + bo(n.value))
                break
              case 'select':
                ;(e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Hi(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Hi(e, !!n.multiple, n.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Tu)
            }
            switch (r) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                n = !!n.autoFocus
                break e
              case 'img':
                n = !0
                break e
              default:
                n = !1
            }
          }
          n && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return qt(t), null
    case 6:
      if (e && t.stateNode != null) L_(e, t, e.memoizedProps, n)
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(re(166))
        if (((r = Ho(Rs.current)), Ho(jn.current), $l(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[En] = t),
            (i = n.nodeValue !== r) && ((e = Er), e !== null))
          )
            switch (e.tag) {
              case 3:
                Fl(n.nodeValue, r, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Fl(n.nodeValue, r, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[En] = t),
            (t.stateNode = n)
      }
      return qt(t), null
    case 13:
      if (
        (ct(yt),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (dt && Sr !== null && t.mode & 1 && !(t.flags & 128))
          e_(), ea(), (t.flags |= 98560), (i = !1)
        else if (((i = $l(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(re(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(re(317))
            i[En] = t
          } else
            ea(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          qt(t), (i = !1)
        } else ln !== null && (Bd(ln), (ln = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || yt.current & 1 ? Pt === 0 && (Pt = 3) : yh())),
          t.updateQueue !== null && (t.flags |= 4),
          qt(t),
          null)
    case 4:
      return (
        ra(), Pd(e, t), e === null && Os(t.stateNode.containerInfo), qt(t), null
      )
    case 10:
      return Jp(t.type._context), qt(t), null
    case 17:
      return mr(t.type) && Cu(), qt(t), null
    case 19:
      if ((ct(yt), (i = t.memoizedState), i === null)) return qt(t), null
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) $a(i, !1)
        else {
          if (Pt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ru(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    $a(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling)
                return at(yt, (yt.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            Ct() > oa &&
            ((t.flags |= 128), (n = !0), $a(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!n)
          if (((e = Ru(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              $a(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !dt)
            )
              return qt(t), null
          } else
            2 * Ct() - i.renderingStartTime > oa &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), $a(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ct()),
          (t.sibling = null),
          (r = yt.current),
          at(yt, n ? (r & 1) | 2 : r & 1),
          t)
        : (qt(t), null)
    case 22:
    case 23:
      return (
        mh(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? xr & 1073741824 && (qt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : qt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(re(156, t.tag))
}
function _j(e, t) {
  switch ((qp(t), t.tag)) {
    case 1:
      return (
        mr(t.type) && Cu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        ra(),
        ct(hr),
        ct(Kt),
        oh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return nh(t), null
    case 13:
      if (
        (ct(yt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(re(340))
        ea()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ct(yt), null
    case 4:
      return ra(), null
    case 10:
      return Jp(t.type._context), null
    case 22:
    case 23:
      return mh(), null
    case 24:
      return null
    default:
      return null
  }
}
var Hl = !1,
  Zt = !1,
  wj = typeof WeakSet == 'function' ? WeakSet : Set,
  he = null
function Li(e, t) {
  var r = e.ref
  if (r !== null)
    if (typeof r == 'function')
      try {
        r(null)
      } catch (n) {
        St(e, t, n)
      }
    else r.current = null
}
function kd(e, t, r) {
  try {
    r()
  } catch (n) {
    St(e, t, n)
  }
}
var ky = !1
function bj(e, t) {
  if (((gd = Mu), (e = $0()), Yp(e))) {
    if ('selectionStart' in e)
      var r = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window
        var n = r.getSelection && r.getSelection()
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode
          var o = n.anchorOffset,
            i = n.focusNode
          n = n.focusOffset
          try {
            r.nodeType, i.nodeType
          } catch {
            r = null
            break e
          }
          var a = 0,
            s = -1,
            l = -1,
            f = 0,
            p = 0,
            h = e,
            m = null
          t: for (;;) {
            for (
              var v;
              h !== r || (o !== 0 && h.nodeType !== 3) || (s = a + o),
                h !== i || (n !== 0 && h.nodeType !== 3) || (l = a + n),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (m = h), (h = v)
            for (;;) {
              if (h === e) break t
              if (
                (m === r && ++f === o && (s = a),
                m === i && ++p === n && (l = a),
                (v = h.nextSibling) !== null)
              )
                break
              ;(h = m), (m = h.parentNode)
            }
            h = v
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l }
        } else r = null
      }
    r = r || { start: 0, end: 0 }
  } else r = null
  for (
    _d = { focusedElem: e, selectionRange: r }, Mu = !1, he = t;
    he !== null;

  )
    if (((t = he), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (he = e)
    else
      for (; he !== null; ) {
        t = he
        try {
          var w = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    x = w.memoizedState,
                    y = t.stateNode,
                    g = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : on(t.type, S),
                      x
                    )
                  y.__reactInternalSnapshotBeforeUpdate = g
                }
                break
              case 3:
                var b = t.stateNode.containerInfo
                b.nodeType === 1
                  ? (b.textContent = '')
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(re(163))
            }
        } catch (I) {
          St(t, t.return, I)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (he = e)
          break
        }
        he = t.return
      }
  return (w = ky), (ky = !1), w
}
function us(e, t, r) {
  var n = t.updateQueue
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && kd(t, r, i)
      }
      o = o.next
    } while (o !== n)
  }
}
function vc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next)
    do {
      if ((r.tag & e) === e) {
        var n = r.create
        r.destroy = n()
      }
      r = r.next
    } while (r !== t)
  }
}
function Rd(e) {
  var t = e.ref
  if (t !== null) {
    var r = e.stateNode
    switch (e.tag) {
      case 5:
        e = r
        break
      default:
        e = r
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function z_(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), z_(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[En], delete t[Ps], delete t[xd], delete t[nj], delete t[oj])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function U_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ry(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || U_(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Ld(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Tu))
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ld(e, t, r), e = e.sibling; e !== null; ) Ld(e, t, r), (e = e.sibling)
}
function zd(e, t, r) {
  var n = e.tag
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e)
  else if (n !== 4 && ((e = e.child), e !== null))
    for (zd(e, t, r), e = e.sibling; e !== null; ) zd(e, t, r), (e = e.sibling)
}
var Wt = null,
  an = !1
function eo(e, t, r) {
  for (r = r.child; r !== null; ) F_(e, t, r), (r = r.sibling)
}
function F_(e, t, r) {
  if (Mn && typeof Mn.onCommitFiberUnmount == 'function')
    try {
      Mn.onCommitFiberUnmount(uc, r)
    } catch {}
  switch (r.tag) {
    case 5:
      Zt || Li(r, t)
    case 6:
      var n = Wt,
        o = an
      ;(Wt = null),
        eo(e, t, r),
        (Wt = n),
        (an = o),
        Wt !== null &&
          (an
            ? ((e = Wt),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Wt.removeChild(r.stateNode))
      break
    case 18:
      Wt !== null &&
        (an
          ? ((e = Wt),
            (r = r.stateNode),
            e.nodeType === 8
              ? df(e.parentNode, r)
              : e.nodeType === 1 && df(e, r),
            Cs(e))
          : df(Wt, r.stateNode))
      break
    case 4:
      ;(n = Wt),
        (o = an),
        (Wt = r.stateNode.containerInfo),
        (an = !0),
        eo(e, t, r),
        (Wt = n),
        (an = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Zt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next
        do {
          var i = o,
            a = i.destroy
          ;(i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && kd(r, t, a),
            (o = o.next)
        } while (o !== n)
      }
      eo(e, t, r)
      break
    case 1:
      if (
        !Zt &&
        (Li(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == 'function')
      )
        try {
          ;(n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount()
        } catch (s) {
          St(r, t, s)
        }
      eo(e, t, r)
      break
    case 21:
      eo(e, t, r)
      break
    case 22:
      r.mode & 1
        ? ((Zt = (n = Zt) || r.memoizedState !== null), eo(e, t, r), (Zt = n))
        : eo(e, t, r)
      break
    default:
      eo(e, t, r)
  }
}
function Ly(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var r = e.stateNode
    r === null && (r = e.stateNode = new wj()),
      t.forEach(function (n) {
        var o = Nj.bind(null, e, n)
        r.has(n) || (r.add(n), n.then(o, o))
      })
  }
}
function nn(e, t) {
  var r = t.deletions
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n]
      try {
        var i = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(Wt = s.stateNode), (an = !1)
              break e
            case 3:
              ;(Wt = s.stateNode.containerInfo), (an = !0)
              break e
            case 4:
              ;(Wt = s.stateNode.containerInfo), (an = !0)
              break e
          }
          s = s.return
        }
        if (Wt === null) throw Error(re(160))
        F_(i, a, o), (Wt = null), (an = !1)
        var l = o.alternate
        l !== null && (l.return = null), (o.return = null)
      } catch (f) {
        St(o, t, f)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $_(t, e), (t = t.sibling)
}
function $_(e, t) {
  var r = e.alternate,
    n = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nn(t, e), wn(e), n & 4)) {
        try {
          us(3, e, e.return), vc(3, e)
        } catch (S) {
          St(e, e.return, S)
        }
        try {
          us(5, e, e.return)
        } catch (S) {
          St(e, e.return, S)
        }
      }
      break
    case 1:
      nn(t, e), wn(e), n & 512 && r !== null && Li(r, r.return)
      break
    case 5:
      if (
        (nn(t, e),
        wn(e),
        n & 512 && r !== null && Li(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Ms(o, '')
        } catch (S) {
          St(e, e.return, S)
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && l0(o, i),
              ld(s, a)
            var f = ld(s, i)
            for (a = 0; a < l.length; a += 2) {
              var p = l[a],
                h = l[a + 1]
              p === 'style'
                ? p0(o, h)
                : p === 'dangerouslySetInnerHTML'
                ? f0(o, h)
                : p === 'children'
                ? Ms(o, h)
                : Pp(o, p, h, f)
            }
            switch (s) {
              case 'input':
                nd(o, i)
                break
              case 'textarea':
                u0(o, i)
                break
              case 'select':
                var m = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var v = i.value
                v != null
                  ? Hi(o, !!i.multiple, v, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Hi(o, !!i.multiple, i.defaultValue, !0)
                      : Hi(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ps] = i
          } catch (S) {
            St(e, e.return, S)
          }
      }
      break
    case 6:
      if ((nn(t, e), wn(e), n & 4)) {
        if (e.stateNode === null) throw Error(re(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (S) {
          St(e, e.return, S)
        }
      }
      break
    case 3:
      if (
        (nn(t, e), wn(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Cs(t.containerInfo)
        } catch (S) {
          St(e, e.return, S)
        }
      break
    case 4:
      nn(t, e), wn(e)
      break
    case 13:
      nn(t, e),
        wn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ph = Ct())),
        n & 4 && Ly(e)
      break
    case 22:
      if (
        ((p = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Zt = (f = Zt) || p), nn(t, e), (Zt = f)) : nn(t, e),
        wn(e),
        n & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !p && e.mode & 1)
        )
          for (he = e, p = e.child; p !== null; ) {
            for (h = he = p; he !== null; ) {
              switch (((m = he), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  us(4, m, m.return)
                  break
                case 1:
                  Li(m, m.return)
                  var w = m.stateNode
                  if (typeof w.componentWillUnmount == 'function') {
                    ;(n = m), (r = m.return)
                    try {
                      ;(t = n),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount()
                    } catch (S) {
                      St(n, r, S)
                    }
                  }
                  break
                case 5:
                  Li(m, m.return)
                  break
                case 22:
                  if (m.memoizedState !== null) {
                    Uy(h)
                    continue
                  }
              }
              v !== null ? ((v.return = m), (he = v)) : Uy(h)
            }
            p = p.sibling
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h
              try {
                ;(o = h.stateNode),
                  f
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = h.stateNode),
                      (l = h.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = d0('display', a)))
              } catch (S) {
                St(e, e.return, S)
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = f ? '' : h.memoizedProps
              } catch (S) {
                St(e, e.return, S)
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ;(h.child.return = h), (h = h.child)
            continue
          }
          if (h === e) break e
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e
            p === h && (p = null), (h = h.return)
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling)
        }
      }
      break
    case 19:
      nn(t, e), wn(e), n & 4 && Ly(e)
      break
    case 21:
      break
    default:
      nn(t, e), wn(e)
  }
}
function wn(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (U_(r)) {
            var n = r
            break e
          }
          r = r.return
        }
        throw Error(re(160))
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode
          n.flags & 32 && (Ms(o, ''), (n.flags &= -33))
          var i = Ry(e)
          zd(e, i, o)
          break
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = Ry(e)
          Ld(e, s, a)
          break
        default:
          throw Error(re(161))
      }
    } catch (l) {
      St(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function xj(e, t, r) {
  ;(he = e), B_(e)
}
function B_(e, t, r) {
  for (var n = (e.mode & 1) !== 0; he !== null; ) {
    var o = he,
      i = o.child
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || Hl
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Zt
        s = Hl
        var f = Zt
        if (((Hl = a), (Zt = l) && !f))
          for (he = o; he !== null; )
            (a = he),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fy(o)
                : l !== null
                ? ((l.return = a), (he = l))
                : Fy(o)
        for (; i !== null; ) (he = i), B_(i), (i = i.sibling)
        ;(he = o), (Hl = s), (Zt = f)
      }
      zy(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (he = i)) : zy(e)
  }
}
function zy(e) {
  for (; he !== null; ) {
    var t = he
    if (t.flags & 8772) {
      var r = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Zt || vc(5, t)
              break
            case 1:
              var n = t.stateNode
              if (t.flags & 4 && !Zt)
                if (r === null) n.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : on(t.type, r.memoizedProps)
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var i = t.updateQueue
              i !== null && by(t, i, n)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode
                      break
                    case 1:
                      r = t.child.stateNode
                  }
                by(t, a, r)
              }
              break
            case 5:
              var s = t.stateNode
              if (r === null && t.flags & 4) {
                r = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && r.focus()
                    break
                  case 'img':
                    l.src && (r.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate
                if (f !== null) {
                  var p = f.memoizedState
                  if (p !== null) {
                    var h = p.dehydrated
                    h !== null && Cs(h)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(re(163))
          }
        Zt || (t.flags & 512 && Rd(t))
      } catch (m) {
        St(t, t.return, m)
      }
    }
    if (t === e) {
      he = null
      break
    }
    if (((r = t.sibling), r !== null)) {
      ;(r.return = t.return), (he = r)
      break
    }
    he = t.return
  }
}
function Uy(e) {
  for (; he !== null; ) {
    var t = he
    if (t === e) {
      he = null
      break
    }
    var r = t.sibling
    if (r !== null) {
      ;(r.return = t.return), (he = r)
      break
    }
    he = t.return
  }
}
function Fy(e) {
  for (; he !== null; ) {
    var t = he
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return
          try {
            vc(4, t)
          } catch (l) {
            St(t, r, l)
          }
          break
        case 1:
          var n = t.stateNode
          if (typeof n.componentDidMount == 'function') {
            var o = t.return
            try {
              n.componentDidMount()
            } catch (l) {
              St(t, o, l)
            }
          }
          var i = t.return
          try {
            Rd(t)
          } catch (l) {
            St(t, i, l)
          }
          break
        case 5:
          var a = t.return
          try {
            Rd(t)
          } catch (l) {
            St(t, a, l)
          }
      }
    } catch (l) {
      St(t, t.return, l)
    }
    if (t === e) {
      he = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (he = s)
      break
    }
    he = t.return
  }
}
var Sj = Math.ceil,
  Uu = Gn.ReactCurrentDispatcher,
  fh = Gn.ReactCurrentOwner,
  Wr = Gn.ReactCurrentBatchConfig,
  He = 0,
  Ft = null,
  Ot = null,
  Ht = 0,
  xr = 0,
  zi = Mo(0),
  Pt = 0,
  Fs = null,
  ii = 0,
  gc = 0,
  dh = 0,
  cs = null,
  fr = null,
  ph = 0,
  oa = 1 / 0,
  kn = null,
  Fu = !1,
  Ud = null,
  go = null,
  Ql = !1,
  co = null,
  $u = 0,
  fs = 0,
  Fd = null,
  cu = -1,
  fu = 0
function nr() {
  return He & 6 ? Ct() : cu !== -1 ? cu : (cu = Ct())
}
function _o(e) {
  return e.mode & 1
    ? He & 2 && Ht !== 0
      ? Ht & -Ht
      : aj.transition !== null
      ? (fu === 0 && (fu = M0()), fu)
      : ((e = Ke),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : O0(e.type))),
        e)
    : 1
}
function cn(e, t, r, n) {
  if (50 < fs) throw ((fs = 0), (Fd = null), Error(re(185)))
  qs(e, r, n),
    (!(He & 2) || e !== Ft) &&
      (e === Ft && (!(He & 2) && (gc |= r), Pt === 4 && lo(e, Ht)),
      yr(e, n),
      r === 1 && He === 0 && !(t.mode & 1) && ((oa = Ct() + 500), hc && jo()))
}
function yr(e, t) {
  var r = e.callbackNode
  aM(e, t)
  var n = Eu(e, e === Ft ? Ht : 0)
  if (n === 0)
    r !== null && qm(r), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && qm(r), t === 1))
      e.tag === 0 ? ij($y.bind(null, e)) : K0($y.bind(null, e)),
        tj(function () {
          !(He & 6) && jo()
        }),
        (r = null)
    else {
      switch (j0(n)) {
        case 1:
          r = Up
          break
        case 4:
          r = S0
          break
        case 16:
          r = Su
          break
        case 536870912:
          r = E0
          break
        default:
          r = Su
      }
      r = Z_(r, W_.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = r)
  }
}
function W_(e, t) {
  if (((cu = -1), (fu = 0), He & 6)) throw Error(re(327))
  var r = e.callbackNode
  if (qi() && e.callbackNode !== r) return null
  var n = Eu(e, e === Ft ? Ht : 0)
  if (n === 0) return null
  if (n & 30 || n & e.expiredLanes || t) t = Bu(e, n)
  else {
    t = n
    var o = He
    He |= 2
    var i = Q_()
    ;(Ft !== e || Ht !== t) && ((kn = null), (oa = Ct() + 500), Zo(e, t))
    do
      try {
        jj()
        break
      } catch (s) {
        H_(e, s)
      }
    while (1)
    Xp(),
      (Uu.current = i),
      (He = o),
      Ot !== null ? (t = 0) : ((Ft = null), (Ht = 0), (t = Pt))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = pd(e)), o !== 0 && ((n = o), (t = $d(e, o)))), t === 1)
    )
      throw ((r = Fs), Zo(e, 0), lo(e, n), yr(e, Ct()), r)
    if (t === 6) lo(e, n)
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !Ej(o) &&
          ((t = Bu(e, n)),
          t === 2 && ((i = pd(e)), i !== 0 && ((n = i), (t = $d(e, i)))),
          t === 1))
      )
        throw ((r = Fs), Zo(e, 0), lo(e, n), yr(e, Ct()), r)
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(re(345))
        case 2:
          Ro(e, fr, kn)
          break
        case 3:
          if (
            (lo(e, n), (n & 130023424) === n && ((t = ph + 500 - Ct()), 10 < t))
          ) {
            if (Eu(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              nr(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = bd(Ro.bind(null, e, fr, kn), t)
            break
          }
          Ro(e, fr, kn)
          break
        case 4:
          if ((lo(e, n), (n & 4194240) === n)) break
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - un(n)
            ;(i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i)
          }
          if (
            ((n = o),
            (n = Ct() - n),
            (n =
              (120 > n
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
                : 1960 * Sj(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = bd(Ro.bind(null, e, fr, kn), n)
            break
          }
          Ro(e, fr, kn)
          break
        case 5:
          Ro(e, fr, kn)
          break
        default:
          throw Error(re(329))
      }
    }
  }
  return yr(e, Ct()), e.callbackNode === r ? W_.bind(null, e) : null
}
function $d(e, t) {
  var r = cs
  return (
    e.current.memoizedState.isDehydrated && (Zo(e, t).flags |= 256),
    (e = Bu(e, t)),
    e !== 2 && ((t = fr), (fr = r), t !== null && Bd(t)),
    e
  )
}
function Bd(e) {
  fr === null ? (fr = e) : fr.push.apply(fr, e)
}
function Ej(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot
          o = o.value
          try {
            if (!fn(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function lo(e, t) {
  for (
    t &= ~dh,
      t &= ~gc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - un(t),
      n = 1 << r
    ;(e[r] = -1), (t &= ~n)
  }
}
function $y(e) {
  if (He & 6) throw Error(re(327))
  qi()
  var t = Eu(e, 0)
  if (!(t & 1)) return yr(e, Ct()), null
  var r = Bu(e, t)
  if (e.tag !== 0 && r === 2) {
    var n = pd(e)
    n !== 0 && ((t = n), (r = $d(e, n)))
  }
  if (r === 1) throw ((r = Fs), Zo(e, 0), lo(e, t), yr(e, Ct()), r)
  if (r === 6) throw Error(re(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ro(e, fr, kn),
    yr(e, Ct()),
    null
  )
}
function hh(e, t) {
  var r = He
  He |= 1
  try {
    return e(t)
  } finally {
    ;(He = r), He === 0 && ((oa = Ct() + 500), hc && jo())
  }
}
function ai(e) {
  co !== null && co.tag === 0 && !(He & 6) && qi()
  var t = He
  He |= 1
  var r = Wr.transition,
    n = Ke
  try {
    if (((Wr.transition = null), (Ke = 1), e)) return e()
  } finally {
    ;(Ke = n), (Wr.transition = r), (He = t), !(He & 6) && jo()
  }
}
function mh() {
  ;(xr = zi.current), ct(zi)
}
function Zo(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var r = e.timeoutHandle
  if ((r !== -1 && ((e.timeoutHandle = -1), ej(r)), Ot !== null))
    for (r = Ot.return; r !== null; ) {
      var n = r
      switch ((qp(n), n.tag)) {
        case 1:
          ;(n = n.type.childContextTypes), n != null && Cu()
          break
        case 3:
          ra(), ct(hr), ct(Kt), oh()
          break
        case 5:
          nh(n)
          break
        case 4:
          ra()
          break
        case 13:
          ct(yt)
          break
        case 19:
          ct(yt)
          break
        case 10:
          Jp(n.type._context)
          break
        case 22:
        case 23:
          mh()
      }
      r = r.return
    }
  if (
    ((Ft = e),
    (Ot = e = wo(e.current, null)),
    (Ht = xr = t),
    (Pt = 0),
    (Fs = null),
    (dh = gc = ii = 0),
    (fr = cs = null),
    Wo !== null)
  ) {
    for (t = 0; t < Wo.length; t++)
      if (((r = Wo[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null
        var o = n.next,
          i = r.pending
        if (i !== null) {
          var a = i.next
          ;(i.next = o), (n.next = a)
        }
        r.pending = n
      }
    Wo = null
  }
  return e
}
function H_(e, t) {
  do {
    var r = Ot
    try {
      if ((Xp(), (su.current = zu), Lu)) {
        for (var n = vt.memoizedState; n !== null; ) {
          var o = n.queue
          o !== null && (o.pending = null), (n = n.next)
        }
        Lu = !1
      }
      if (
        ((oi = 0),
        (Ut = Dt = vt = null),
        (ls = !1),
        (Ls = 0),
        (fh.current = null),
        r === null || r.return === null)
      ) {
        ;(Pt = 1), (Fs = t), (Ot = null)
        break
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t
        if (
          ((t = Ht),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var f = l,
            p = s,
            h = p.tag
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = p.alternate
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null))
          }
          var v = Ty(a)
          if (v !== null) {
            ;(v.flags &= -257),
              Cy(v, a, s, i, t),
              v.mode & 1 && Iy(i, f, t),
              (t = v),
              (l = f)
            var w = t.updateQueue
            if (w === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else w.add(l)
            break e
          } else {
            if (!(t & 1)) {
              Iy(i, f, t), yh()
              break e
            }
            l = Error(re(426))
          }
        } else if (dt && s.mode & 1) {
          var x = Ty(a)
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Cy(x, a, s, i, t),
              Zp(na(l, s))
            break e
          }
        }
        ;(i = l = na(l, s)),
          Pt !== 4 && (Pt = 2),
          cs === null ? (cs = [i]) : cs.push(i),
          (i = a)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var y = I_(i, l, t)
              wy(i, y)
              break e
            case 1:
              s = l
              var g = i.type,
                b = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (b !== null &&
                    typeof b.componentDidCatch == 'function' &&
                    (go === null || !go.has(b))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var I = T_(i, s, t)
                wy(i, I)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Y_(r)
    } catch (D) {
      ;(t = D), Ot === r && r !== null && (Ot = r = r.return)
      continue
    }
    break
  } while (1)
}
function Q_() {
  var e = Uu.current
  return (Uu.current = zu), e === null ? zu : e
}
function yh() {
  ;(Pt === 0 || Pt === 3 || Pt === 2) && (Pt = 4),
    Ft === null || (!(ii & 268435455) && !(gc & 268435455)) || lo(Ft, Ht)
}
function Bu(e, t) {
  var r = He
  He |= 2
  var n = Q_()
  ;(Ft !== e || Ht !== t) && ((kn = null), Zo(e, t))
  do
    try {
      Mj()
      break
    } catch (o) {
      H_(e, o)
    }
  while (1)
  if ((Xp(), (He = r), (Uu.current = n), Ot !== null)) throw Error(re(261))
  return (Ft = null), (Ht = 0), Pt
}
function Mj() {
  for (; Ot !== null; ) V_(Ot)
}
function jj() {
  for (; Ot !== null && !KE(); ) V_(Ot)
}
function V_(e) {
  var t = q_(e.alternate, e, xr)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Y_(e) : (Ot = t),
    (fh.current = null)
}
function Y_(e) {
  var t = e
  do {
    var r = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((r = _j(r, t)), r !== null)) {
        ;(r.flags &= 32767), (Ot = r)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Pt = 6), (Ot = null)
        return
      }
    } else if (((r = gj(r, t, xr)), r !== null)) {
      Ot = r
      return
    }
    if (((t = t.sibling), t !== null)) {
      Ot = t
      return
    }
    Ot = t = e
  } while (t !== null)
  Pt === 0 && (Pt = 5)
}
function Ro(e, t, r) {
  var n = Ke,
    o = Wr.transition
  try {
    ;(Wr.transition = null), (Ke = 1), Ij(e, t, r, n)
  } finally {
    ;(Wr.transition = o), (Ke = n)
  }
  return null
}
function Ij(e, t, r, n) {
  do qi()
  while (co !== null)
  if (He & 6) throw Error(re(327))
  r = e.finishedWork
  var o = e.finishedLanes
  if (r === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(re(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = r.lanes | r.childLanes
  if (
    (sM(e, i),
    e === Ft && ((Ot = Ft = null), (Ht = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      Z_(Su, function () {
        return qi(), null
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    ;(i = Wr.transition), (Wr.transition = null)
    var a = Ke
    Ke = 1
    var s = He
    ;(He |= 4),
      (fh.current = null),
      bj(e, r),
      $_(r, e),
      YM(_d),
      (Mu = !!gd),
      (_d = gd = null),
      (e.current = r),
      xj(r),
      XE(),
      (He = s),
      (Ke = a),
      (Wr.transition = i)
  } else e.current = r
  if (
    (Ql && ((Ql = !1), (co = e), ($u = o)),
    (i = e.pendingLanes),
    i === 0 && (go = null),
    tM(r.stateNode),
    yr(e, Ct()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest })
  if (Fu) throw ((Fu = !1), (e = Ud), (Ud = null), e)
  return (
    $u & 1 && e.tag !== 0 && qi(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fd ? fs++ : ((fs = 0), (Fd = e))) : (fs = 0),
    jo(),
    null
  )
}
function qi() {
  if (co !== null) {
    var e = j0($u),
      t = Wr.transition,
      r = Ke
    try {
      if (((Wr.transition = null), (Ke = 16 > e ? 16 : e), co === null))
        var n = !1
      else {
        if (((e = co), (co = null), ($u = 0), He & 6)) throw Error(re(331))
        var o = He
        for (He |= 4, he = e.current; he !== null; ) {
          var i = he,
            a = i.child
          if (he.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var f = s[l]
                for (he = f; he !== null; ) {
                  var p = he
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      us(8, p, i)
                  }
                  var h = p.child
                  if (h !== null) (h.return = p), (he = h)
                  else
                    for (; he !== null; ) {
                      p = he
                      var m = p.sibling,
                        v = p.return
                      if ((z_(p), p === f)) {
                        he = null
                        break
                      }
                      if (m !== null) {
                        ;(m.return = v), (he = m)
                        break
                      }
                      he = v
                    }
                }
              }
              var w = i.alternate
              if (w !== null) {
                var S = w.child
                if (S !== null) {
                  w.child = null
                  do {
                    var x = S.sibling
                    ;(S.sibling = null), (S = x)
                  } while (S !== null)
                }
              }
              he = i
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (he = a)
          else
            e: for (; he !== null; ) {
              if (((i = he), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    us(9, i, i.return)
                }
              var y = i.sibling
              if (y !== null) {
                ;(y.return = i.return), (he = y)
                break e
              }
              he = i.return
            }
        }
        var g = e.current
        for (he = g; he !== null; ) {
          a = he
          var b = a.child
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (he = b)
          else
            e: for (a = g; he !== null; ) {
              if (((s = he), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vc(9, s)
                  }
                } catch (D) {
                  St(s, s.return, D)
                }
              if (s === a) {
                he = null
                break e
              }
              var I = s.sibling
              if (I !== null) {
                ;(I.return = s.return), (he = I)
                break e
              }
              he = s.return
            }
        }
        if (
          ((He = o), jo(), Mn && typeof Mn.onPostCommitFiberRoot == 'function')
        )
          try {
            Mn.onPostCommitFiberRoot(uc, e)
          } catch {}
        n = !0
      }
      return n
    } finally {
      ;(Ke = r), (Wr.transition = t)
    }
  }
  return !1
}
function By(e, t, r) {
  ;(t = na(r, t)),
    (t = I_(e, t, 1)),
    (e = vo(e, t, 1)),
    (t = nr()),
    e !== null && (qs(e, 1, t), yr(e, t))
}
function St(e, t, r) {
  if (e.tag === 3) By(e, e, r)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        By(t, e, r)
        break
      } else if (t.tag === 1) {
        var n = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' &&
            (go === null || !go.has(n)))
        ) {
          ;(e = na(r, e)),
            (e = T_(t, e, 1)),
            (t = vo(t, e, 1)),
            (e = nr()),
            t !== null && (qs(t, 1, e), yr(t, e))
          break
        }
      }
      t = t.return
    }
}
function Tj(e, t, r) {
  var n = e.pingCache
  n !== null && n.delete(t),
    (t = nr()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ft === e &&
      (Ht & r) === r &&
      (Pt === 4 || (Pt === 3 && (Ht & 130023424) === Ht && 500 > Ct() - ph)
        ? Zo(e, 0)
        : (dh |= r)),
    yr(e, t)
}
function G_(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = kl), (kl <<= 1), !(kl & 130023424) && (kl = 4194304))
      : (t = 1))
  var r = nr()
  ;(e = Hn(e, t)), e !== null && (qs(e, t, r), yr(e, r))
}
function Cj(e) {
  var t = e.memoizedState,
    r = 0
  t !== null && (r = t.retryLane), G_(e, r)
}
function Nj(e, t) {
  var r = 0
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState
      o !== null && (r = o.retryLane)
      break
    case 19:
      n = e.stateNode
      break
    default:
      throw Error(re(314))
  }
  n !== null && n.delete(t), G_(e, r)
}
var q_
q_ = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || hr.current) dr = !0
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (dr = !1), vj(e, t, r)
      dr = !!(e.flags & 131072)
    }
  else (dr = !1), dt && t.flags & 1048576 && X0(t, Ou, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type
      uu(e, t), (e = t.pendingProps)
      var o = Ji(t, Kt.current)
      Gi(t, r), (o = ah(null, t, n, e, o, r))
      var i = sh()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mr(n) ? ((i = !0), Nu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            th(t),
            (o.updater = mc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Td(t, n, e, r),
            (t = Ad(null, t, n, !0, i, r)))
          : ((t.tag = 0), dt && i && Gp(t), rr(null, t, o, r), (t = t.child)),
        t
      )
    case 16:
      n = t.elementType
      e: {
        switch (
          (uu(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = Oj(n)),
          (e = on(n, e)),
          o)
        ) {
          case 0:
            t = Nd(null, t, n, e, r)
            break e
          case 1:
            t = Oy(null, t, n, e, r)
            break e
          case 11:
            t = Ny(null, t, n, e, r)
            break e
          case 14:
            t = Ay(null, t, n, on(n.type, e), r)
            break e
        }
        throw Error(re(306, n, ''))
      }
      return t
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : on(n, o)),
        Nd(e, t, n, o, r)
      )
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : on(n, o)),
        Oy(e, t, n, o, r)
      )
    case 3:
      e: {
        if ((O_(t), e === null)) throw Error(re(387))
        ;(n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          r_(e, t),
          ku(t, n, null, r)
        var a = t.memoizedState
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = na(Error(re(423)), t)), (t = Dy(e, t, n, r, o))
            break e
          } else if (n !== o) {
            ;(o = na(Error(re(424)), t)), (t = Dy(e, t, n, r, o))
            break e
          } else
            for (
              Sr = yo(t.stateNode.containerInfo.firstChild),
                Er = t,
                dt = !0,
                ln = null,
                r = a_(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling)
        else {
          if ((ea(), n === o)) {
            t = Qn(e, t, r)
            break e
          }
          rr(e, t, n, r)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        s_(t),
        e === null && Md(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        wd(n, o) ? (a = null) : i !== null && wd(n, i) && (t.flags |= 32),
        A_(e, t),
        rr(e, t, a, r),
        t.child
      )
    case 6:
      return e === null && Md(t), null
    case 13:
      return D_(e, t, r)
    case 4:
      return (
        rh(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = ta(t, null, n, r)) : rr(e, t, n, r),
        t.child
      )
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : on(n, o)),
        Ny(e, t, n, o, r)
      )
    case 7:
      return rr(e, t, t.pendingProps, r), t.child
    case 8:
      return rr(e, t, t.pendingProps.children, r), t.child
    case 12:
      return rr(e, t, t.pendingProps.children, r), t.child
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          at(Du, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (fn(i.value, a)) {
            if (i.children === o.children && !hr.current) {
              t = Qn(e, t, r)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                a = i.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      ;(l = $n(-1, r & -r)), (l.tag = 2)
                      var f = i.updateQueue
                      if (f !== null) {
                        f = f.shared
                        var p = f.pending
                        p === null
                          ? (l.next = l)
                          : ((l.next = p.next), (p.next = l)),
                          (f.pending = l)
                      }
                    }
                    ;(i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      jd(i.return, r, t),
                      (s.lanes |= r)
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(re(341))
                ;(a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  jd(a, r, t),
                  (a = i.sibling)
              } else a = i.child
              if (a !== null) a.return = i
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((i = a.sibling), i !== null)) {
                    ;(i.return = a.return), (a = i)
                    break
                  }
                  a = a.return
                }
              i = a
            }
        rr(e, t, o.children, r), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Gi(t, r),
        (o = Qr(o)),
        (n = n(o)),
        (t.flags |= 1),
        rr(e, t, n, r),
        t.child
      )
    case 14:
      return (
        (n = t.type),
        (o = on(n, t.pendingProps)),
        (o = on(n.type, o)),
        Ay(e, t, n, o, r)
      )
    case 15:
      return C_(e, t, t.type, t.pendingProps, r)
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : on(n, o)),
        uu(e, t),
        (t.tag = 1),
        mr(n) ? ((e = !0), Nu(t)) : (e = !1),
        Gi(t, r),
        o_(t, n, o),
        Td(t, n, o, r),
        Ad(null, t, n, !0, e, r)
      )
    case 19:
      return P_(e, t, r)
    case 22:
      return N_(e, t, r)
  }
  throw Error(re(156, t.tag))
}
function Z_(e, t) {
  return x0(e, t)
}
function Aj(e, t, r, n) {
  ;(this.tag = e),
    (this.key = r),
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
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Br(e, t, r, n) {
  return new Aj(e, t, r, n)
}
function vh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Oj(e) {
  if (typeof e == 'function') return vh(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Rp)) return 11
    if (e === Lp) return 14
  }
  return 2
}
function wo(e, t) {
  var r = e.alternate
  return (
    r === null
      ? ((r = Br(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  )
}
function du(e, t, r, n, o, i) {
  var a = 2
  if (((n = e), typeof e == 'function')) vh(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case Ti:
        return Ko(r.children, o, i, t)
      case kp:
        ;(a = 8), (o |= 8)
        break
      case Xf:
        return (e = Br(12, r, t, o | 2)), (e.elementType = Xf), (e.lanes = i), e
      case Jf:
        return (e = Br(13, r, t, o)), (e.elementType = Jf), (e.lanes = i), e
      case ed:
        return (e = Br(19, r, t, o)), (e.elementType = ed), (e.lanes = i), e
      case i0:
        return _c(r, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case n0:
              a = 10
              break e
            case o0:
              a = 9
              break e
            case Rp:
              a = 11
              break e
            case Lp:
              a = 14
              break e
            case ro:
              ;(a = 16), (n = null)
              break e
          }
        throw Error(re(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Br(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  )
}
function Ko(e, t, r, n) {
  return (e = Br(7, e, n, t)), (e.lanes = r), e
}
function _c(e, t, r, n) {
  return (
    (e = Br(22, e, n, t)),
    (e.elementType = i0),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function wf(e, t, r) {
  return (e = Br(6, e, null, t)), (e.lanes = r), e
}
function bf(e, t, r) {
  return (
    (t = Br(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Dj(e, t, r, n, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ef(0)),
    (this.expirationTimes = ef(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ef(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function gh(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new Dj(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Br(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    th(i),
    e
  )
}
function Pj(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Ii,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: r,
  }
}
function K_(e) {
  if (!e) return xo
  e = e._reactInternals
  e: {
    if (fi(e) !== e || e.tag !== 1) throw Error(re(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (mr(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(re(171))
  }
  if (e.tag === 1) {
    var r = e.type
    if (mr(r)) return Z0(e, r, t)
  }
  return t
}
function X_(e, t, r, n, o, i, a, s, l) {
  return (
    (e = gh(r, n, !0, e, o, i, a, s, l)),
    (e.context = K_(null)),
    (r = e.current),
    (n = nr()),
    (o = _o(r)),
    (i = $n(n, o)),
    (i.callback = t ?? null),
    vo(r, i, o),
    (e.current.lanes = o),
    qs(e, o, n),
    yr(e, n),
    e
  )
}
function wc(e, t, r, n) {
  var o = t.current,
    i = nr(),
    a = _o(o)
  return (
    (r = K_(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = $n(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = vo(o, t, a)),
    e !== null && (cn(e, o, a, i), au(e, o, a)),
    a
  )
}
function Wu(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Wy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane
    e.retryLane = r !== 0 && r < t ? r : t
  }
}
function _h(e, t) {
  Wy(e, t), (e = e.alternate) && Wy(e, t)
}
function kj() {
  return null
}
var J_ =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function wh(e) {
  this._internalRoot = e
}
bc.prototype.render = wh.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(re(409))
  wc(e, t, null, null)
}
bc.prototype.unmount = wh.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    ai(function () {
      wc(null, e, null, null)
    }),
      (t[Wn] = null)
  }
}
function bc(e) {
  this._internalRoot = e
}
bc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = C0()
    e = { blockedOn: null, target: e, priority: t }
    for (var r = 0; r < so.length && t !== 0 && t < so[r].priority; r++);
    so.splice(r, 0, e), r === 0 && A0(e)
  }
}
function bh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function xc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Hy() {}
function Rj(e, t, r, n, o) {
  if (o) {
    if (typeof n == 'function') {
      var i = n
      n = function () {
        var f = Wu(a)
        i.call(f)
      }
    }
    var a = X_(t, n, e, 0, null, !1, !1, '', Hy)
    return (
      (e._reactRootContainer = a),
      (e[Wn] = a.current),
      Os(e.nodeType === 8 ? e.parentNode : e),
      ai(),
      a
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof n == 'function') {
    var s = n
    n = function () {
      var f = Wu(l)
      s.call(f)
    }
  }
  var l = gh(e, 0, !1, null, null, !1, !1, '', Hy)
  return (
    (e._reactRootContainer = l),
    (e[Wn] = l.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    ai(function () {
      wc(t, l, r, n)
    }),
    l
  )
}
function Sc(e, t, r, n, o) {
  var i = r._reactRootContainer
  if (i) {
    var a = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var l = Wu(a)
        s.call(l)
      }
    }
    wc(t, a, e, o)
  } else a = Rj(r, t, e, o, n)
  return Wu(a)
}
I0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var r = Xa(t.pendingLanes)
        r !== 0 &&
          (Fp(t, r | 1), yr(t, Ct()), !(He & 6) && ((oa = Ct() + 500), jo()))
      }
      break
    case 13:
      ai(function () {
        var n = Hn(e, 1)
        if (n !== null) {
          var o = nr()
          cn(n, e, 1, o)
        }
      }),
        _h(e, 1)
  }
}
$p = function (e) {
  if (e.tag === 13) {
    var t = Hn(e, 134217728)
    if (t !== null) {
      var r = nr()
      cn(t, e, 134217728, r)
    }
    _h(e, 134217728)
  }
}
T0 = function (e) {
  if (e.tag === 13) {
    var t = _o(e),
      r = Hn(e, t)
    if (r !== null) {
      var n = nr()
      cn(r, e, t, n)
    }
    _h(e, t)
  }
}
C0 = function () {
  return Ke
}
N0 = function (e, t) {
  var r = Ke
  try {
    return (Ke = e), t()
  } finally {
    Ke = r
  }
}
cd = function (e, t, r) {
  switch (t) {
    case 'input':
      if ((nd(e, r), (t = r.name), r.type === 'radio' && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode
        for (
          r = r.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t]
          if (n !== e && n.form === e.form) {
            var o = pc(n)
            if (!o) throw Error(re(90))
            s0(n), nd(n, o)
          }
        }
      }
      break
    case 'textarea':
      u0(e, r)
      break
    case 'select':
      ;(t = r.value), t != null && Hi(e, !!r.multiple, t, !1)
  }
}
y0 = hh
v0 = ai
var Lj = { usingClientEntryPoint: !1, Events: [Ks, Oi, pc, h0, m0, hh] },
  Ba = {
    findFiberByHostInstance: Bo,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  zj = {
    bundleType: Ba.bundleType,
    version: Ba.version,
    rendererPackageName: Ba.rendererPackageName,
    rendererConfig: Ba.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = w0(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ba.findFiberByHostInstance || kj,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Vl.isDisabled && Vl.supportsFiber)
    try {
      ;(uc = Vl.inject(zj)), (Mn = Vl)
    } catch {}
}
Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lj
Tr.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!bh(t)) throw Error(re(200))
  return Pj(e, t, null, r)
}
Tr.createRoot = function (e, t) {
  if (!bh(e)) throw Error(re(299))
  var r = !1,
    n = '',
    o = J_
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gh(e, 1, !1, null, null, r, !1, n, o)),
    (e[Wn] = t.current),
    Os(e.nodeType === 8 ? e.parentNode : e),
    new wh(t)
  )
}
Tr.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(re(188))
      : ((e = Object.keys(e).join(',')), Error(re(268, e)))
  return (e = w0(t)), (e = e === null ? null : e.stateNode), e
}
Tr.flushSync = function (e) {
  return ai(e)
}
Tr.hydrate = function (e, t, r) {
  if (!xc(t)) throw Error(re(200))
  return Sc(null, e, t, !0, r)
}
Tr.hydrateRoot = function (e, t, r) {
  if (!bh(e)) throw Error(re(405))
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = '',
    a = J_
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = X_(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[Wn] = t.current),
    Os(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o)
  return new bc(t)
}
Tr.render = function (e, t, r) {
  if (!xc(t)) throw Error(re(200))
  return Sc(null, e, t, !1, r)
}
Tr.unmountComponentAtNode = function (e) {
  if (!xc(e)) throw Error(re(40))
  return e._reactRootContainer
    ? (ai(function () {
        Sc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Wn] = null)
        })
      }),
      !0)
    : !1
}
Tr.unstable_batchedUpdates = hh
Tr.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!xc(r)) throw Error(re(200))
  if (e == null || e._reactInternals === void 0) throw Error(re(38))
  return Sc(e, t, r, !1, n)
}
Tr.version = '18.2.0-next-9e3b772b8-20220608'
function ew() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ew)
    } catch (e) {
      console.error(e)
    }
}
ew(), (Xg.exports = Tr)
var xh = Xg.exports
const Ui = va(xh),
  Uj = $g({ __proto__: null, default: Ui }, [xh])
var tw,
  Qy = xh
;(tw = Qy.createRoot), Qy.hydrateRoot
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Et() {
  return (
    (Et = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Et.apply(this, arguments)
  )
}
var Tt
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Tt || (Tt = {}))
const Vy = 'popstate'
function Fj(e) {
  e === void 0 && (e = {})
  function t(n, o) {
    let { pathname: i, search: a, hash: s } = n.location
    return $s(
      '',
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    )
  }
  function r(n, o) {
    return typeof o == 'string' ? o : Js(o)
  }
  return Bj(t, r, null, e)
}
function Fe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function ia(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function $j() {
  return Math.random().toString(36).substr(2, 8)
}
function Yy(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function $s(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    Et(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? qn(t) : t,
      { state: r, key: (t && t.key) || n || $j() }
    )
  )
}
function Js(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function qn(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e)
  }
  return t
}
function Bj(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    a = o.history,
    s = Tt.Pop,
    l = null,
    f = p()
  f == null && ((f = 0), a.replaceState(Et({}, a.state, { idx: f }), ''))
  function p() {
    return (a.state || { idx: null }).idx
  }
  function h() {
    s = Tt.Pop
    let x = p(),
      y = x == null ? null : x - f
    ;(f = x), l && l({ action: s, location: S.location, delta: y })
  }
  function m(x, y) {
    s = Tt.Push
    let g = $s(S.location, x, y)
    r && r(g, x), (f = p() + 1)
    let b = Yy(g, f),
      I = S.createHref(g)
    try {
      a.pushState(b, '', I)
    } catch (D) {
      if (D instanceof DOMException && D.name === 'DataCloneError') throw D
      o.location.assign(I)
    }
    i && l && l({ action: s, location: S.location, delta: 1 })
  }
  function v(x, y) {
    s = Tt.Replace
    let g = $s(S.location, x, y)
    r && r(g, x), (f = p())
    let b = Yy(g, f),
      I = S.createHref(g)
    a.replaceState(b, '', I),
      i && l && l({ action: s, location: S.location, delta: 0 })
  }
  function w(x) {
    let y = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      g = typeof x == 'string' ? x : Js(x)
    return (
      (g = g.replace(/ $/, '%20')),
      Fe(
        y,
        'No window.location.(origin|href) available to create URL for href: ' +
          g
      ),
      new URL(g, y)
    )
  }
  let S = {
    get action() {
      return s
    },
    get location() {
      return e(o, a)
    },
    listen(x) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(Vy, h),
        (l = x),
        () => {
          o.removeEventListener(Vy, h), (l = null)
        }
      )
    },
    createHref(x) {
      return t(o, x)
    },
    createURL: w,
    encodeLocation(x) {
      let y = w(x)
      return { pathname: y.pathname, search: y.search, hash: y.hash }
    },
    push: m,
    replace: v,
    go(x) {
      return a.go(x)
    },
  }
  return S
}
var xt
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(xt || (xt = {}))
const Wj = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Hj(e) {
  return e.index === !0
}
function Wd(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let a = [...r, i],
        s = typeof o.id == 'string' ? o.id : a.join('-')
      if (
        (Fe(
          o.index !== !0 || !o.children,
          'Cannot specify children on an index route'
        ),
        Fe(
          !n[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Hj(o))
      ) {
        let l = Et({}, o, t(o), { id: s })
        return (n[s] = l), l
      } else {
        let l = Et({}, o, t(o), { id: s, children: void 0 })
        return (
          (n[s] = l), o.children && (l.children = Wd(o.children, t, a, n)), l
        )
      }
    })
  )
}
function Fi(e, t, r) {
  r === void 0 && (r = '/')
  let n = typeof t == 'string' ? qn(t) : t,
    o = el(n.pathname || '/', r)
  if (o == null) return null
  let i = rw(e)
  Vj(i)
  let a = null
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = oI(o)
    a = tI(i[s], l)
  }
  return a
}
function Qj(e, t) {
  let { route: r, pathname: n, params: o } = e
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle }
}
function rw(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || '' : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    }
    l.relativePath.startsWith('/') &&
      (Fe(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (l.relativePath = l.relativePath.slice(n.length)))
    let f = Xo([n, l.relativePath]),
      p = r.concat(l)
    i.children &&
      i.children.length > 0 &&
      (Fe(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + f + '".')
      ),
      rw(i.children, t, p, f)),
      !(i.path == null && !i.index) &&
        t.push({ path: f, score: Jj(f, i.index), routesMeta: p })
  }
  return (
    e.forEach((i, a) => {
      var s
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) o(i, a)
      else for (let l of nw(i.path)) o(i, a, l)
    }),
    t
  )
}
function nw(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    o = r.endsWith('?'),
    i = r.replace(/\?$/, '')
  if (n.length === 0) return o ? [i, ''] : [i]
  let a = nw(n.join('/')),
    s = []
  return (
    s.push(...a.map((l) => (l === '' ? i : [i, l].join('/')))),
    o && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function Vj(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : eI(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  )
}
const Yj = /^:[\w-]+$/,
  Gj = 3,
  qj = 2,
  Zj = 1,
  Kj = 10,
  Xj = -2,
  Gy = (e) => e === '*'
function Jj(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(Gy) && (n += Xj),
    t && (n += qj),
    r
      .filter((o) => !Gy(o))
      .reduce((o, i) => o + (Yj.test(i) ? Gj : i === '' ? Zj : Kj), n)
  )
}
function eI(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function tI(e, t) {
  let { routesMeta: r } = e,
    n = {},
    o = '/',
    i = []
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      l = a === r.length - 1,
      f = o === '/' ? t : t.slice(o.length) || '/',
      p = rI(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        f
      )
    if (!p) return null
    Object.assign(n, p.params)
    let h = s.route
    i.push({
      params: n,
      pathname: Xo([o, p.pathname]),
      pathnameBase: uI(Xo([o, p.pathnameBase])),
      route: h,
    }),
      p.pathnameBase !== '/' && (o = Xo([o, p.pathnameBase]))
  }
  return i
}
function rI(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = nI(e.path, e.caseSensitive, e.end),
    o = t.match(r)
  if (!o) return null
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = o.slice(1)
  return {
    params: n.reduce((f, p, h) => {
      let { paramName: m, isOptional: v } = p
      if (m === '*') {
        let S = s[h] || ''
        a = i.slice(0, i.length - S.length).replace(/(.)\/+$/, '$1')
      }
      const w = s[h]
      return (
        v && !w ? (f[m] = void 0) : (f[m] = (w || '').replace(/%2F/g, '/')), f
      )
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  }
}
function nI(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    ia(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            n.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), n]
  )
}
function oI(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      ia(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function el(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function iI(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: r,
    search: n = '',
    hash: o = '',
  } = typeof e == 'string' ? qn(e) : e
  return {
    pathname: r ? (r.startsWith('/') ? r : aI(r, t)) : t,
    search: cI(n),
    hash: fI(o),
  }
}
function aI(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? r.length > 1 && r.pop() : o !== '.' && r.push(o)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function xf(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(n) +
      '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function ow(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function sI(e, t) {
  let r = ow(e)
  return t
    ? r.map((n, o) => (o === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase)
}
function lI(e, t, r, n) {
  n === void 0 && (n = !1)
  let o
  typeof e == 'string'
    ? (o = qn(e))
    : ((o = Et({}, e)),
      Fe(
        !o.pathname || !o.pathname.includes('?'),
        xf('?', 'pathname', 'search', o)
      ),
      Fe(
        !o.pathname || !o.pathname.includes('#'),
        xf('#', 'pathname', 'hash', o)
      ),
      Fe(!o.search || !o.search.includes('#'), xf('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    s
  if (a == null) s = r
  else {
    let h = t.length - 1
    if (!n && a.startsWith('..')) {
      let m = a.split('/')
      for (; m[0] === '..'; ) m.shift(), (h -= 1)
      o.pathname = m.join('/')
    }
    s = h >= 0 ? t[h] : '/'
  }
  let l = iI(o, s),
    f = a && a !== '/' && a.endsWith('/'),
    p = (i || a === '.') && r.endsWith('/')
  return !l.pathname.endsWith('/') && (f || p) && (l.pathname += '/'), l
}
const Xo = (e) => e.join('/').replace(/\/\/+/g, '/'),
  uI = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  cI = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  fI = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class Sh {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n)
  }
}
function iw(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const aw = ['post', 'put', 'patch', 'delete'],
  dI = new Set(aw),
  pI = ['get', ...aw],
  hI = new Set(pI),
  mI = new Set([301, 302, 303, 307, 308]),
  yI = new Set([307, 308]),
  Sf = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  vI = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Wa = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  sw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gI = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  lw = 'remix-router-transitions'
function _I(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    n = !r
  Fe(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  )
  let o
  if (e.mapRouteProperties) o = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let z = e.detectErrorBoundary
    o = (Q) => ({ hasErrorBoundary: z(Q) })
  } else o = gI
  let i = {},
    a = Wd(e.routes, o, void 0, i),
    s,
    l = e.basename || '/',
    f = Et(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    p = null,
    h = new Set(),
    m = null,
    v = null,
    w = null,
    S = e.hydrationData != null,
    x = Fi(a, e.history.location, l),
    y = null
  if (x == null) {
    let z = Lr(404, { pathname: e.history.location.pathname }),
      { matches: Q, route: Z } = rv(a)
    ;(x = Q), (y = { [Z.id]: z })
  }
  let g,
    b = x.some((z) => z.route.lazy),
    I = x.some((z) => z.route.loader)
  if (b) g = !1
  else if (!I) g = !0
  else if (f.v7_partialHydration) {
    let z = e.hydrationData ? e.hydrationData.loaderData : null,
      Q = e.hydrationData ? e.hydrationData.errors : null
    g = x.every(
      (Z) =>
        Z.route.loader &&
        Z.route.loader.hydrate !== !0 &&
        ((z && z[Z.route.id] !== void 0) || (Q && Q[Z.route.id] !== void 0))
    )
  } else g = e.hydrationData != null
  let D,
    E = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: x,
      initialized: g,
      navigation: Sf,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = Tt.Pop,
    R = !1,
    W,
    F = !1,
    G = new Map(),
    K = null,
    B = !1,
    V = !1,
    T = [],
    N = [],
    P = new Map(),
    k = 0,
    Y = -1,
    X = new Map(),
    oe = new Set(),
    ce = new Map(),
    De = new Map(),
    Ne = new Set(),
    Le = new Map(),
    Xe = new Map(),
    _t = !1
  function Jt() {
    if (
      ((p = e.history.listen((z) => {
        let { action: Q, location: Z, delta: se } = z
        if (_t) {
          _t = !1
          return
        }
        ia(
          Xe.size === 0 || se != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let pe = qe({
          currentLocation: E.location,
          nextLocation: Z,
          historyAction: Q,
        })
        if (pe && se != null) {
          ;(_t = !0),
            e.history.go(se * -1),
            Ae(pe, {
              state: 'blocked',
              location: Z,
              proceed() {
                Ae(pe, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: Z,
                }),
                  e.history.go(se)
              },
              reset() {
                let we = new Map(E.blockers)
                we.set(pe, Wa), Ze({ blockers: we })
              },
            })
          return
        }
        return Qe(Q, Z)
      })),
      r)
    ) {
      NI(t, G)
      let z = () => AI(t, G)
      t.addEventListener('pagehide', z),
        (K = () => t.removeEventListener('pagehide', z))
    }
    return E.initialized || Qe(Tt.Pop, E.location, { initialHydration: !0 }), D
  }
  function Nr() {
    p && p(),
      K && K(),
      h.clear(),
      W && W.abort(),
      E.fetchers.forEach((z, Q) => Jr(Q)),
      E.blockers.forEach((z, Q) => xe(Q))
  }
  function Kn(z) {
    return h.add(z), () => h.delete(z)
  }
  function Ze(z, Q) {
    Q === void 0 && (Q = {}), (E = Et({}, E, z))
    let Z = [],
      se = []
    f.v7_fetcherPersist &&
      E.fetchers.forEach((pe, we) => {
        pe.state === 'idle' && (Ne.has(we) ? se.push(we) : Z.push(we))
      }),
      [...h].forEach((pe) =>
        pe(E, {
          deletedFetchers: se,
          unstable_viewTransitionOpts: Q.viewTransitionOpts,
          unstable_flushSync: Q.flushSync === !0,
        })
      ),
      f.v7_fetcherPersist &&
        (Z.forEach((pe) => E.fetchers.delete(pe)), se.forEach((pe) => Jr(pe)))
  }
  function Zr(z, Q, Z) {
    var se, pe
    let { flushSync: we } = Z === void 0 ? {} : Z,
      Ee =
        E.actionData != null &&
        E.navigation.formMethod != null &&
        sn(E.navigation.formMethod) &&
        E.navigation.state === 'loading' &&
        ((se = z.state) == null ? void 0 : se._isRedirect) !== !0,
      be
    Q.actionData
      ? Object.keys(Q.actionData).length > 0
        ? (be = Q.actionData)
        : (be = null)
      : Ee
      ? (be = E.actionData)
      : (be = null)
    let ve = Q.loaderData
        ? tv(E.loaderData, Q.loaderData, Q.matches || [], Q.errors)
        : E.loaderData,
      Re = E.blockers
    Re.size > 0 && ((Re = new Map(Re)), Re.forEach((Ve, It) => Re.set(It, Wa)))
    let wt =
      R === !0 ||
      (E.navigation.formMethod != null &&
        sn(E.navigation.formMethod) &&
        ((pe = z.state) == null ? void 0 : pe._isRedirect) !== !0)
    s && ((a = s), (s = void 0)),
      B ||
        C === Tt.Pop ||
        (C === Tt.Push
          ? e.history.push(z, z.state)
          : C === Tt.Replace && e.history.replace(z, z.state))
    let Te
    if (C === Tt.Pop) {
      let Ve = G.get(E.location.pathname)
      Ve && Ve.has(z.pathname)
        ? (Te = { currentLocation: E.location, nextLocation: z })
        : G.has(z.pathname) &&
          (Te = { currentLocation: z, nextLocation: E.location })
    } else if (F) {
      let Ve = G.get(E.location.pathname)
      Ve
        ? Ve.add(z.pathname)
        : ((Ve = new Set([z.pathname])), G.set(E.location.pathname, Ve)),
        (Te = { currentLocation: E.location, nextLocation: z })
    }
    Ze(
      Et({}, Q, {
        actionData: be,
        loaderData: ve,
        historyAction: C,
        location: z,
        initialized: !0,
        navigation: Sf,
        revalidation: 'idle',
        restoreScrollPosition: yn(z, Q.matches || E.matches),
        preventScrollReset: wt,
        blockers: Re,
      }),
      { viewTransitionOpts: Te, flushSync: we === !0 }
    ),
      (C = Tt.Pop),
      (R = !1),
      (F = !1),
      (B = !1),
      (V = !1),
      (T = []),
      (N = [])
  }
  async function ie(z, Q) {
    if (typeof z == 'number') {
      e.history.go(z)
      return
    }
    let Z = Hd(
        E.location,
        E.matches,
        l,
        f.v7_prependBasename,
        z,
        f.v7_relativeSplatPath,
        Q == null ? void 0 : Q.fromRouteId,
        Q == null ? void 0 : Q.relative
      ),
      {
        path: se,
        submission: pe,
        error: we,
      } = qy(f.v7_normalizeFormMethod, !1, Z, Q),
      Ee = E.location,
      be = $s(E.location, se, Q && Q.state)
    be = Et({}, be, e.history.encodeLocation(be))
    let ve = Q && Q.replace != null ? Q.replace : void 0,
      Re = Tt.Push
    ve === !0
      ? (Re = Tt.Replace)
      : ve === !1 ||
        (pe != null &&
          sn(pe.formMethod) &&
          pe.formAction === E.location.pathname + E.location.search &&
          (Re = Tt.Replace))
    let wt =
        Q && 'preventScrollReset' in Q ? Q.preventScrollReset === !0 : void 0,
      Te = (Q && Q.unstable_flushSync) === !0,
      Ve = qe({ currentLocation: Ee, nextLocation: be, historyAction: Re })
    if (Ve) {
      Ae(Ve, {
        state: 'blocked',
        location: be,
        proceed() {
          Ae(Ve, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: be,
          }),
            ie(z, Q)
        },
        reset() {
          let It = new Map(E.blockers)
          It.set(Ve, Wa), Ze({ blockers: It })
        },
      })
      return
    }
    return await Qe(Re, be, {
      submission: pe,
      pendingError: we,
      preventScrollReset: wt,
      replace: Q && Q.replace,
      enableViewTransition: Q && Q.unstable_viewTransition,
      flushSync: Te,
    })
  }
  function Co() {
    if (
      (Xr(),
      Ze({ revalidation: 'loading' }),
      E.navigation.state !== 'submitting')
    ) {
      if (E.navigation.state === 'idle') {
        Qe(E.historyAction, E.location, { startUninterruptedRevalidation: !0 })
        return
      }
      Qe(C || E.historyAction, E.navigation.location, {
        overrideNavigation: E.navigation,
      })
    }
  }
  async function Qe(z, Q, Z) {
    W && W.abort(),
      (W = null),
      (C = z),
      (B = (Z && Z.startUninterruptedRevalidation) === !0),
      At(E.location, E.matches),
      (R = (Z && Z.preventScrollReset) === !0),
      (F = (Z && Z.enableViewTransition) === !0)
    let se = s || a,
      pe = Z && Z.overrideNavigation,
      we = Fi(se, Q, l),
      Ee = (Z && Z.flushSync) === !0
    if (!we) {
      let It = Lr(404, { pathname: Q.pathname }),
        { matches: $t, route: pt } = rv(se)
      ot(),
        Zr(
          Q,
          { matches: $t, loaderData: {}, errors: { [pt.id]: It } },
          { flushSync: Ee }
        )
      return
    }
    if (
      E.initialized &&
      !V &&
      EI(E.location, Q) &&
      !(Z && Z.submission && sn(Z.submission.formMethod))
    ) {
      Zr(Q, { matches: we }, { flushSync: Ee })
      return
    }
    W = new AbortController()
    let be = Qa(e.history, Q, W.signal, Z && Z.submission),
      ve,
      Re
    if (Z && Z.pendingError) Re = { [ds(we).route.id]: Z.pendingError }
    else if (Z && Z.submission && sn(Z.submission.formMethod)) {
      let It = await pn(be, Q, Z.submission, we, {
        replace: Z.replace,
        flushSync: Ee,
      })
      if (It.shortCircuited) return
      ;(ve = It.pendingActionData),
        (Re = It.pendingActionError),
        (pe = Ef(Q, Z.submission)),
        (Ee = !1),
        (be = new Request(be.url, { signal: be.signal }))
    }
    let {
      shortCircuited: wt,
      loaderData: Te,
      errors: Ve,
    } = await ar(
      be,
      Q,
      we,
      pe,
      Z && Z.submission,
      Z && Z.fetcherSubmission,
      Z && Z.replace,
      Z && Z.initialHydration === !0,
      Ee,
      ve,
      Re
    )
    wt ||
      ((W = null),
      Zr(
        Q,
        Et({ matches: we }, ve ? { actionData: ve } : {}, {
          loaderData: Te,
          errors: Ve,
        })
      ))
  }
  async function pn(z, Q, Z, se, pe) {
    pe === void 0 && (pe = {}), Xr()
    let we = TI(Q, Z)
    Ze({ navigation: we }, { flushSync: pe.flushSync === !0 })
    let Ee,
      be = Vd(se, Q)
    if (!be.route.action && !be.route.lazy)
      Ee = {
        type: xt.error,
        error: Lr(405, {
          method: z.method,
          pathname: Q.pathname,
          routeId: be.route.id,
        }),
      }
    else if (
      ((Ee = await Ha('action', z, be, se, i, o, l, f.v7_relativeSplatPath)),
      z.signal.aborted)
    )
      return { shortCircuited: !0 }
    if (Vo(Ee)) {
      let ve
      return (
        pe && pe.replace != null
          ? (ve = pe.replace)
          : (ve = Ee.location === E.location.pathname + E.location.search),
        await er(E, Ee, { submission: Z, replace: ve }),
        { shortCircuited: !0 }
      )
    }
    if ($i(Ee)) {
      let ve = ds(se, be.route.id)
      return (
        (pe && pe.replace) !== !0 && (C = Tt.Push),
        {
          pendingActionData: {},
          pendingActionError: { [ve.route.id]: Ee.error },
        }
      )
    }
    if (Qo(Ee)) throw Lr(400, { type: 'defer-action' })
    return { pendingActionData: { [be.route.id]: Ee.data } }
  }
  async function ar(z, Q, Z, se, pe, we, Ee, be, ve, Re, wt) {
    let Te = se || Ef(Q, pe),
      Ve = pe || we || iv(Te),
      It = s || a,
      [$t, pt] = Zy(
        e.history,
        E,
        Z,
        Ve,
        Q,
        f.v7_partialHydration && be === !0,
        V,
        T,
        N,
        Ne,
        ce,
        oe,
        It,
        l,
        Re,
        wt
      )
    if (
      (ot(
        (ze) =>
          !(Z && Z.some((Ye) => Ye.route.id === ze)) ||
          ($t && $t.some((Ye) => Ye.route.id === ze))
      ),
      (Y = ++k),
      $t.length === 0 && pt.length === 0)
    ) {
      let ze = q()
      return (
        Zr(
          Q,
          Et(
            { matches: Z, loaderData: {}, errors: wt || null },
            Re ? { actionData: Re } : {},
            ze ? { fetchers: new Map(E.fetchers) } : {}
          ),
          { flushSync: ve }
        ),
        { shortCircuited: !0 }
      )
    }
    if (!B && (!f.v7_partialHydration || !be)) {
      pt.forEach((Ye) => {
        let Je = E.fetchers.get(Ye.key),
          tn = Va(void 0, Je ? Je.data : void 0)
        E.fetchers.set(Ye.key, tn)
      })
      let ze = Re || E.actionData
      Ze(
        Et(
          { navigation: Te },
          ze
            ? Object.keys(ze).length === 0
              ? { actionData: null }
              : { actionData: ze }
            : {},
          pt.length > 0 ? { fetchers: new Map(E.fetchers) } : {}
        ),
        { flushSync: ve }
      )
    }
    pt.forEach((ze) => {
      P.has(ze.key) && Or(ze.key), ze.controller && P.set(ze.key, ze.controller)
    })
    let gn = () => pt.forEach((ze) => Or(ze.key))
    W && W.signal.addEventListener('abort', gn)
    let {
      results: No,
      loaderResults: Dr,
      fetcherResults: Pr,
    } = await hn(E.matches, Z, $t, pt, z)
    if (z.signal.aborted) return { shortCircuited: !0 }
    W && W.signal.removeEventListener('abort', gn),
      pt.forEach((ze) => P.delete(ze.key))
    let Yt = nv(No)
    if (Yt) {
      if (Yt.idx >= $t.length) {
        let ze = pt[Yt.idx - $t.length].key
        oe.add(ze)
      }
      return await er(E, Yt.result, { replace: Ee }), { shortCircuited: !0 }
    }
    let { loaderData: kr, errors: An } = ev(E, Z, $t, Dr, wt, pt, Pr, Le)
    Le.forEach((ze, Ye) => {
      ze.subscribe((Je) => {
        ;(Je || ze.done) && Le.delete(Ye)
      })
    }),
      f.v7_partialHydration &&
        be &&
        E.errors &&
        Object.entries(E.errors)
          .filter((ze) => {
            let [Ye] = ze
            return !$t.some((Je) => Je.route.id === Ye)
          })
          .forEach((ze) => {
            let [Ye, Je] = ze
            An = Object.assign(An || {}, { [Ye]: Je })
          })
    let Ao = q(),
      lr = ne(Y),
      en = Ao || lr || pt.length > 0
    return Et(
      { loaderData: kr, errors: An },
      en ? { fetchers: new Map(E.fetchers) } : {}
    )
  }
  function Ar(z, Q, Z, se) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    P.has(z) && Or(z)
    let pe = (se && se.unstable_flushSync) === !0,
      we = s || a,
      Ee = Hd(
        E.location,
        E.matches,
        l,
        f.v7_prependBasename,
        Z,
        f.v7_relativeSplatPath,
        Q,
        se == null ? void 0 : se.relative
      ),
      be = Fi(we, Ee, l)
    if (!be) {
      sr(z, Q, Lr(404, { pathname: Ee }), { flushSync: pe })
      return
    }
    let {
      path: ve,
      submission: Re,
      error: wt,
    } = qy(f.v7_normalizeFormMethod, !0, Ee, se)
    if (wt) {
      sr(z, Q, wt, { flushSync: pe })
      return
    }
    let Te = Vd(be, ve)
    if (((R = (se && se.preventScrollReset) === !0), Re && sn(Re.formMethod))) {
      Kr(z, Q, ve, Te, be, pe, Re)
      return
    }
    ce.set(z, { routeId: Q, path: ve }), wr(z, Q, ve, Te, be, pe, Re)
  }
  async function Kr(z, Q, Z, se, pe, we, Ee) {
    if ((Xr(), ce.delete(z), !se.route.action && !se.route.lazy)) {
      let Ye = Lr(405, { method: Ee.formMethod, pathname: Z, routeId: Q })
      sr(z, Q, Ye, { flushSync: we })
      return
    }
    let be = E.fetchers.get(z)
    Vt(z, CI(Ee, be), { flushSync: we })
    let ve = new AbortController(),
      Re = Qa(e.history, Z, ve.signal, Ee)
    P.set(z, ve)
    let wt = k,
      Te = await Ha('action', Re, se, pe, i, o, l, f.v7_relativeSplatPath)
    if (Re.signal.aborted) {
      P.get(z) === ve && P.delete(z)
      return
    }
    if (f.v7_fetcherPersist && Ne.has(z)) {
      if (Vo(Te) || $i(Te)) {
        Vt(z, to(void 0))
        return
      }
    } else {
      if (Vo(Te))
        if ((P.delete(z), Y > wt)) {
          Vt(z, to(void 0))
          return
        } else
          return oe.add(z), Vt(z, Va(Ee)), er(E, Te, { fetcherSubmission: Ee })
      if ($i(Te)) {
        sr(z, Q, Te.error)
        return
      }
    }
    if (Qo(Te)) throw Lr(400, { type: 'defer-action' })
    let Ve = E.navigation.location || E.location,
      It = Qa(e.history, Ve, ve.signal),
      $t = s || a,
      pt =
        E.navigation.state !== 'idle'
          ? Fi($t, E.navigation.location, l)
          : E.matches
    Fe(pt, "Didn't find any matches after fetcher action")
    let gn = ++k
    X.set(z, gn)
    let No = Va(Ee, Te.data)
    E.fetchers.set(z, No)
    let [Dr, Pr] = Zy(
      e.history,
      E,
      pt,
      Ee,
      Ve,
      !1,
      V,
      T,
      N,
      Ne,
      ce,
      oe,
      $t,
      l,
      { [se.route.id]: Te.data },
      void 0
    )
    Pr.filter((Ye) => Ye.key !== z).forEach((Ye) => {
      let Je = Ye.key,
        tn = E.fetchers.get(Je),
        Ma = Va(void 0, tn ? tn.data : void 0)
      E.fetchers.set(Je, Ma),
        P.has(Je) && Or(Je),
        Ye.controller && P.set(Je, Ye.controller)
    }),
      Ze({ fetchers: new Map(E.fetchers) })
    let Yt = () => Pr.forEach((Ye) => Or(Ye.key))
    ve.signal.addEventListener('abort', Yt)
    let {
      results: kr,
      loaderResults: An,
      fetcherResults: Ao,
    } = await hn(E.matches, pt, Dr, Pr, It)
    if (ve.signal.aborted) return
    ve.signal.removeEventListener('abort', Yt),
      X.delete(z),
      P.delete(z),
      Pr.forEach((Ye) => P.delete(Ye.key))
    let lr = nv(kr)
    if (lr) {
      if (lr.idx >= Dr.length) {
        let Ye = Pr[lr.idx - Dr.length].key
        oe.add(Ye)
      }
      return er(E, lr.result)
    }
    let { loaderData: en, errors: ze } = ev(
      E,
      E.matches,
      Dr,
      An,
      void 0,
      Pr,
      Ao,
      Le
    )
    if (E.fetchers.has(z)) {
      let Ye = to(Te.data)
      E.fetchers.set(z, Ye)
    }
    ne(gn),
      E.navigation.state === 'loading' && gn > Y
        ? (Fe(C, 'Expected pending action'),
          W && W.abort(),
          Zr(E.navigation.location, {
            matches: pt,
            loaderData: en,
            errors: ze,
            fetchers: new Map(E.fetchers),
          }))
        : (Ze({
            errors: ze,
            loaderData: tv(E.loaderData, en, pt, ze),
            fetchers: new Map(E.fetchers),
          }),
          (V = !1))
  }
  async function wr(z, Q, Z, se, pe, we, Ee) {
    let be = E.fetchers.get(z)
    Vt(z, Va(Ee, be ? be.data : void 0), { flushSync: we })
    let ve = new AbortController(),
      Re = Qa(e.history, Z, ve.signal)
    P.set(z, ve)
    let wt = k,
      Te = await Ha('loader', Re, se, pe, i, o, l, f.v7_relativeSplatPath)
    if (
      (Qo(Te) && (Te = (await fw(Te, Re.signal, !0)) || Te),
      P.get(z) === ve && P.delete(z),
      !Re.signal.aborted)
    ) {
      if (Ne.has(z)) {
        Vt(z, to(void 0))
        return
      }
      if (Vo(Te))
        if (Y > wt) {
          Vt(z, to(void 0))
          return
        } else {
          oe.add(z), await er(E, Te)
          return
        }
      if ($i(Te)) {
        sr(z, Q, Te.error)
        return
      }
      Fe(!Qo(Te), 'Unhandled fetcher deferred data'), Vt(z, to(Te.data))
    }
  }
  async function er(z, Q, Z) {
    let {
      submission: se,
      fetcherSubmission: pe,
      replace: we,
    } = Z === void 0 ? {} : Z
    Q.revalidate && (V = !0)
    let Ee = $s(z.location, Q.location, { _isRedirect: !0 })
    if ((Fe(Ee, 'Expected a location on the redirect navigation'), r)) {
      let Ve = !1
      if (Q.reloadDocument) Ve = !0
      else if (sw.test(Q.location)) {
        const It = e.history.createURL(Q.location)
        Ve = It.origin !== t.location.origin || el(It.pathname, l) == null
      }
      if (Ve) {
        we ? t.location.replace(Q.location) : t.location.assign(Q.location)
        return
      }
    }
    W = null
    let be = we === !0 ? Tt.Replace : Tt.Push,
      { formMethod: ve, formAction: Re, formEncType: wt } = z.navigation
    !se && !pe && ve && Re && wt && (se = iv(z.navigation))
    let Te = se || pe
    if (yI.has(Q.status) && Te && sn(Te.formMethod))
      await Qe(be, Ee, {
        submission: Et({}, Te, { formAction: Q.location }),
        preventScrollReset: R,
      })
    else {
      let Ve = Ef(Ee, se)
      await Qe(be, Ee, {
        overrideNavigation: Ve,
        fetcherSubmission: pe,
        preventScrollReset: R,
      })
    }
  }
  async function hn(z, Q, Z, se, pe) {
    let we = await Promise.all([
        ...Z.map((ve) =>
          Ha('loader', pe, ve, Q, i, o, l, f.v7_relativeSplatPath)
        ),
        ...se.map((ve) =>
          ve.matches && ve.match && ve.controller
            ? Ha(
                'loader',
                Qa(e.history, ve.path, ve.controller.signal),
                ve.match,
                ve.matches,
                i,
                o,
                l,
                f.v7_relativeSplatPath
              )
            : { type: xt.error, error: Lr(404, { pathname: ve.path }) }
        ),
      ]),
      Ee = we.slice(0, Z.length),
      be = we.slice(Z.length)
    return (
      await Promise.all([
        ov(
          z,
          Z,
          Ee,
          Ee.map(() => pe.signal),
          !1,
          E.loaderData
        ),
        ov(
          z,
          se.map((ve) => ve.match),
          be,
          se.map((ve) => (ve.controller ? ve.controller.signal : null)),
          !0
        ),
      ]),
      { results: we, loaderResults: Ee, fetcherResults: be }
    )
  }
  function Xr() {
    ;(V = !0),
      T.push(...ot()),
      ce.forEach((z, Q) => {
        P.has(Q) && (N.push(Q), Or(Q))
      })
  }
  function Vt(z, Q, Z) {
    Z === void 0 && (Z = {}),
      E.fetchers.set(z, Q),
      Ze(
        { fetchers: new Map(E.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 }
      )
  }
  function sr(z, Q, Z, se) {
    se === void 0 && (se = {})
    let pe = ds(E.matches, Q)
    Jr(z),
      Ze(
        { errors: { [pe.route.id]: Z }, fetchers: new Map(E.fetchers) },
        { flushSync: (se && se.flushSync) === !0 }
      )
  }
  function mn(z) {
    return (
      f.v7_fetcherPersist &&
        (De.set(z, (De.get(z) || 0) + 1), Ne.has(z) && Ne.delete(z)),
      E.fetchers.get(z) || vI
    )
  }
  function Jr(z) {
    let Q = E.fetchers.get(z)
    P.has(z) && !(Q && Q.state === 'loading' && X.has(z)) && Or(z),
      ce.delete(z),
      X.delete(z),
      oe.delete(z),
      Ne.delete(z),
      E.fetchers.delete(z)
  }
  function jt(z) {
    if (f.v7_fetcherPersist) {
      let Q = (De.get(z) || 0) - 1
      Q <= 0 ? (De.delete(z), Ne.add(z)) : De.set(z, Q)
    } else Jr(z)
    Ze({ fetchers: new Map(E.fetchers) })
  }
  function Or(z) {
    let Q = P.get(z)
    Fe(Q, 'Expected fetch controller: ' + z), Q.abort(), P.delete(z)
  }
  function $(z) {
    for (let Q of z) {
      let Z = mn(Q),
        se = to(Z.data)
      E.fetchers.set(Q, se)
    }
  }
  function q() {
    let z = [],
      Q = !1
    for (let Z of oe) {
      let se = E.fetchers.get(Z)
      Fe(se, 'Expected fetcher: ' + Z),
        se.state === 'loading' && (oe.delete(Z), z.push(Z), (Q = !0))
    }
    return $(z), Q
  }
  function ne(z) {
    let Q = []
    for (let [Z, se] of X)
      if (se < z) {
        let pe = E.fetchers.get(Z)
        Fe(pe, 'Expected fetcher: ' + Z),
          pe.state === 'loading' && (Or(Z), X.delete(Z), Q.push(Z))
      }
    return $(Q), Q.length > 0
  }
  function ae(z, Q) {
    let Z = E.blockers.get(z) || Wa
    return Xe.get(z) !== Q && Xe.set(z, Q), Z
  }
  function xe(z) {
    E.blockers.delete(z), Xe.delete(z)
  }
  function Ae(z, Q) {
    let Z = E.blockers.get(z) || Wa
    Fe(
      (Z.state === 'unblocked' && Q.state === 'blocked') ||
        (Z.state === 'blocked' && Q.state === 'blocked') ||
        (Z.state === 'blocked' && Q.state === 'proceeding') ||
        (Z.state === 'blocked' && Q.state === 'unblocked') ||
        (Z.state === 'proceeding' && Q.state === 'unblocked'),
      'Invalid blocker state transition: ' + Z.state + ' -> ' + Q.state
    )
    let se = new Map(E.blockers)
    se.set(z, Q), Ze({ blockers: se })
  }
  function qe(z) {
    let { currentLocation: Q, nextLocation: Z, historyAction: se } = z
    if (Xe.size === 0) return
    Xe.size > 1 && ia(!1, 'A router only supports one blocker at a time')
    let pe = Array.from(Xe.entries()),
      [we, Ee] = pe[pe.length - 1],
      be = E.blockers.get(we)
    if (
      !(be && be.state === 'proceeding') &&
      Ee({ currentLocation: Q, nextLocation: Z, historyAction: se })
    )
      return we
  }
  function ot(z) {
    let Q = []
    return (
      Le.forEach((Z, se) => {
        ;(!z || z(se)) && (Z.cancel(), Q.push(se), Le.delete(se))
      }),
      Q
    )
  }
  function Nt(z, Q, Z) {
    if (((m = z), (w = Q), (v = Z || null), !S && E.navigation === Sf)) {
      S = !0
      let se = yn(E.location, E.matches)
      se != null && Ze({ restoreScrollPosition: se })
    }
    return () => {
      ;(m = null), (w = null), (v = null)
    }
  }
  function kt(z, Q) {
    return (
      (v &&
        v(
          z,
          Q.map((se) => Qj(se, E.loaderData))
        )) ||
      z.key
    )
  }
  function At(z, Q) {
    if (m && w) {
      let Z = kt(z, Q)
      m[Z] = w()
    }
  }
  function yn(z, Q) {
    if (m) {
      let Z = kt(z, Q),
        se = m[Z]
      if (typeof se == 'number') return se
    }
    return null
  }
  function vn(z) {
    ;(i = {}), (s = Wd(z, o, void 0, i))
  }
  return (
    (D = {
      get basename() {
        return l
      },
      get future() {
        return f
      },
      get state() {
        return E
      },
      get routes() {
        return a
      },
      get window() {
        return t
      },
      initialize: Jt,
      subscribe: Kn,
      enableScrollRestoration: Nt,
      navigate: ie,
      fetch: Ar,
      revalidate: Co,
      createHref: (z) => e.history.createHref(z),
      encodeLocation: (z) => e.history.encodeLocation(z),
      getFetcher: mn,
      deleteFetcher: jt,
      dispose: Nr,
      getBlocker: ae,
      deleteBlocker: xe,
      _internalFetchControllers: P,
      _internalActiveDeferreds: Le,
      _internalSetRoutes: vn,
    }),
    D
  )
}
function wI(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  )
}
function Hd(e, t, r, n, o, i, a, s) {
  let l, f
  if (a) {
    l = []
    for (let h of t)
      if ((l.push(h), h.route.id === a)) {
        f = h
        break
      }
  } else (l = t), (f = t[t.length - 1])
  let p = lI(o || '.', sI(l, i), el(e.pathname, r) || e.pathname, s === 'path')
  return (
    o == null && ((p.search = e.search), (p.hash = e.hash)),
    (o == null || o === '' || o === '.') &&
      f &&
      f.route.index &&
      !Eh(p.search) &&
      (p.search = p.search ? p.search.replace(/^\?/, '?index&') : '?index'),
    n &&
      r !== '/' &&
      (p.pathname = p.pathname === '/' ? r : Xo([r, p.pathname])),
    Js(p)
  )
}
function qy(e, t, r, n) {
  if (!n || !wI(n)) return { path: r }
  if (n.formMethod && !II(n.formMethod))
    return { path: r, error: Lr(405, { method: n.formMethod }) }
  let o = () => ({ path: r, error: Lr(400, { type: 'invalid-body' }) }),
    i = n.formMethod || 'get',
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = cw(r)
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!sn(a)) return o()
      let m =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce((v, w) => {
              let [S, x] = w
              return (
                '' +
                v +
                S +
                '=' +
                x +
                `
`
              )
            }, '')
          : String(n.body)
      return {
        path: r,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      }
    } else if (n.formEncType === 'application/json') {
      if (!sn(a)) return o()
      try {
        let m = typeof n.body == 'string' ? JSON.parse(n.body) : n.body
        return {
          path: r,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        }
      } catch {
        return o()
      }
    }
  }
  Fe(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  )
  let l, f
  if (n.formData) (l = Qd(n.formData)), (f = n.formData)
  else if (n.body instanceof FormData) (l = Qd(n.body)), (f = n.body)
  else if (n.body instanceof URLSearchParams) (l = n.body), (f = Jy(l))
  else if (n.body == null) (l = new URLSearchParams()), (f = new FormData())
  else
    try {
      ;(l = new URLSearchParams(n.body)), (f = Jy(l))
    } catch {
      return o()
    }
  let p = {
    formMethod: a,
    formAction: s,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: f,
    json: void 0,
    text: void 0,
  }
  if (sn(p.formMethod)) return { path: r, submission: p }
  let h = qn(r)
  return (
    t && h.search && Eh(h.search) && l.append('index', ''),
    (h.search = '?' + l),
    { path: Js(h), submission: p }
  )
}
function bI(e, t) {
  let r = e
  if (t) {
    let n = e.findIndex((o) => o.route.id === t)
    n >= 0 && (r = e.slice(0, n))
  }
  return r
}
function Zy(e, t, r, n, o, i, a, s, l, f, p, h, m, v, w, S) {
  let x = S ? Object.values(S)[0] : w ? Object.values(w)[0] : void 0,
    y = e.createURL(t.location),
    g = e.createURL(o),
    b = S ? Object.keys(S)[0] : void 0,
    D = bI(r, b).filter((C, R) => {
      let { route: W } = C
      if (W.lazy) return !0
      if (W.loader == null) return !1
      if (i)
        return W.loader.hydrate
          ? !0
          : t.loaderData[W.id] === void 0 &&
              (!t.errors || t.errors[W.id] === void 0)
      if (xI(t.loaderData, t.matches[R], C) || s.some((K) => K === C.route.id))
        return !0
      let F = t.matches[R],
        G = C
      return Ky(
        C,
        Et(
          {
            currentUrl: y,
            currentParams: F.params,
            nextUrl: g,
            nextParams: G.params,
          },
          n,
          {
            actionResult: x,
            defaultShouldRevalidate:
              a ||
              y.pathname + y.search === g.pathname + g.search ||
              y.search !== g.search ||
              uw(F, G),
          }
        )
      )
    }),
    E = []
  return (
    p.forEach((C, R) => {
      if (i || !r.some((B) => B.route.id === C.routeId) || f.has(R)) return
      let W = Fi(m, C.path, v)
      if (!W) {
        E.push({
          key: R,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let F = t.fetchers.get(R),
        G = Vd(W, C.path),
        K = !1
      h.has(R)
        ? (K = !1)
        : l.includes(R)
        ? (K = !0)
        : F && F.state !== 'idle' && F.data === void 0
        ? (K = a)
        : (K = Ky(
            G,
            Et(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: g,
                nextParams: r[r.length - 1].params,
              },
              n,
              { actionResult: x, defaultShouldRevalidate: a }
            )
          )),
        K &&
          E.push({
            key: R,
            routeId: C.routeId,
            path: C.path,
            matches: W,
            match: G,
            controller: new AbortController(),
          })
    }),
    [D, E]
  )
}
function xI(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0
  return n || o
}
function uw(e, t) {
  let r = e.route.path
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function Ky(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t)
    if (typeof r == 'boolean') return r
  }
  return t.defaultShouldRevalidate
}
async function Xy(e, t, r) {
  if (!e.lazy) return
  let n = await e.lazy()
  if (!e.lazy) return
  let o = r[e.id]
  Fe(o, 'No route found in manifest')
  let i = {}
  for (let a in n) {
    let l = o[a] !== void 0 && a !== 'hasErrorBoundary'
    ia(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !Wj.has(a) && (i[a] = n[a])
  }
  Object.assign(o, i), Object.assign(o, Et({}, t(o), { lazy: void 0 }))
}
async function Ha(e, t, r, n, o, i, a, s, l) {
  l === void 0 && (l = {})
  let f,
    p,
    h,
    m = (S) => {
      let x,
        y = new Promise((g, b) => (x = b))
      return (
        (h = () => x()),
        t.signal.addEventListener('abort', h),
        Promise.race([
          S({ request: t, params: r.params, context: l.requestContext }),
          y,
        ])
      )
    }
  try {
    let S = r.route[e]
    if (r.route.lazy)
      if (S) {
        let x,
          y = await Promise.all([
            m(S).catch((g) => {
              x = g
            }),
            Xy(r.route, i, o),
          ])
        if (x) throw x
        p = y[0]
      } else if ((await Xy(r.route, i, o), (S = r.route[e]), S)) p = await m(S)
      else if (e === 'action') {
        let x = new URL(t.url),
          y = x.pathname + x.search
        throw Lr(405, { method: t.method, pathname: y, routeId: r.route.id })
      } else return { type: xt.data, data: void 0 }
    else if (S) p = await m(S)
    else {
      let x = new URL(t.url),
        y = x.pathname + x.search
      throw Lr(404, { pathname: y })
    }
    Fe(
      p !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          r.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (S) {
    ;(f = xt.error), (p = S)
  } finally {
    h && t.signal.removeEventListener('abort', h)
  }
  if (jI(p)) {
    let S = p.status
    if (mI.has(S)) {
      let y = p.headers.get('Location')
      if (
        (Fe(
          y,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !sw.test(y))
      )
        y = Hd(new URL(t.url), n.slice(0, n.indexOf(r) + 1), a, !0, y, s)
      else if (!l.isStaticRequest) {
        let g = new URL(t.url),
          b = y.startsWith('//') ? new URL(g.protocol + y) : new URL(y),
          I = el(b.pathname, a) != null
        b.origin === g.origin && I && (y = b.pathname + b.search + b.hash)
      }
      if (l.isStaticRequest) throw (p.headers.set('Location', y), p)
      return {
        type: xt.redirect,
        status: S,
        location: y,
        revalidate: p.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: p.headers.get('X-Remix-Reload-Document') !== null,
      }
    }
    if (l.isRouteRequest)
      throw { type: f === xt.error ? xt.error : xt.data, response: p }
    let x
    try {
      let y = p.headers.get('Content-Type')
      y && /\bapplication\/json\b/.test(y)
        ? p.body == null
          ? (x = null)
          : (x = await p.json())
        : (x = await p.text())
    } catch (y) {
      return { type: xt.error, error: y }
    }
    return f === xt.error
      ? { type: f, error: new Sh(S, p.statusText, x), headers: p.headers }
      : { type: xt.data, data: x, statusCode: p.status, headers: p.headers }
  }
  if (f === xt.error) return { type: f, error: p }
  if (MI(p)) {
    var v, w
    return {
      type: xt.deferred,
      deferredData: p,
      statusCode: (v = p.init) == null ? void 0 : v.status,
      headers:
        ((w = p.init) == null ? void 0 : w.headers) &&
        new Headers(p.init.headers),
    }
  }
  return { type: xt.data, data: p }
}
function Qa(e, t, r, n) {
  let o = e.createURL(cw(t)).toString(),
    i = { signal: r }
  if (n && sn(n.formMethod)) {
    let { formMethod: a, formEncType: s } = n
    ;(i.method = a.toUpperCase()),
      s === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': s })),
          (i.body = JSON.stringify(n.json)))
        : s === 'text/plain'
        ? (i.body = n.text)
        : s === 'application/x-www-form-urlencoded' && n.formData
        ? (i.body = Qd(n.formData))
        : (i.body = n.formData)
  }
  return new Request(o, i)
}
function Qd(e) {
  let t = new URLSearchParams()
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name)
  return t
}
function Jy(e) {
  let t = new FormData()
  for (let [r, n] of e.entries()) t.append(r, n)
  return t
}
function SI(e, t, r, n, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    f = {}
  return (
    r.forEach((p, h) => {
      let m = t[h].route.id
      if (
        (Fe(!Vo(p), 'Cannot handle redirect results in processLoaderData'),
        $i(p))
      ) {
        let v = ds(e, m),
          w = p.error
        n && ((w = Object.values(n)[0]), (n = void 0)),
          (a = a || {}),
          a[v.route.id] == null && (a[v.route.id] = w),
          (i[m] = void 0),
          l || ((l = !0), (s = iw(p.error) ? p.error.status : 500)),
          p.headers && (f[m] = p.headers)
      } else
        Qo(p)
          ? (o.set(m, p.deferredData), (i[m] = p.deferredData.data))
          : (i[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !l &&
            (s = p.statusCode),
          p.headers && (f[m] = p.headers)
    }),
    n && ((a = n), (i[Object.keys(n)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: f }
  )
}
function ev(e, t, r, n, o, i, a, s) {
  let { loaderData: l, errors: f } = SI(t, r, n, o, s)
  for (let p = 0; p < i.length; p++) {
    let { key: h, match: m, controller: v } = i[p]
    Fe(
      a !== void 0 && a[p] !== void 0,
      'Did not find corresponding fetcher result'
    )
    let w = a[p]
    if (!(v && v.signal.aborted))
      if ($i(w)) {
        let S = ds(e.matches, m == null ? void 0 : m.route.id)
        ;(f && f[S.route.id]) || (f = Et({}, f, { [S.route.id]: w.error })),
          e.fetchers.delete(h)
      } else if (Vo(w)) Fe(!1, 'Unhandled fetcher revalidation redirect')
      else if (Qo(w)) Fe(!1, 'Unhandled fetcher deferred data')
      else {
        let S = to(w.data)
        e.fetchers.set(h, S)
      }
  }
  return { loaderData: l, errors: f }
}
function tv(e, t, r, n) {
  let o = Et({}, t)
  for (let i of r) {
    let a = i.route.id
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      n && n.hasOwnProperty(a))
    )
      break
  }
  return o
}
function ds(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  )
}
function rv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === '/') || {
          id: '__shim-error-route__',
        }
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  }
}
function Lr(e, t) {
  let { pathname: r, routeId: n, method: o, type: i } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((a = 'Bad Request'),
        o && r && n
          ? (s =
              'You made a ' +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action'
          ? (s = 'defer() is not supported in actions')
          : i === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
      ? ((a = 'Forbidden'),
        (s = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((a = 'Not Found'), (s = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((a = 'Method Not Allowed'),
        o && r && n
          ? (s =
              'You made a ' +
              o.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Sh(e || 500, a, new Error(s), !0)
  )
}
function nv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t]
    if (Vo(r)) return { result: r, idx: t }
  }
}
function cw(e) {
  let t = typeof e == 'string' ? qn(e) : e
  return Js(Et({}, t, { hash: '' }))
}
function EI(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function Qo(e) {
  return e.type === xt.deferred
}
function $i(e) {
  return e.type === xt.error
}
function Vo(e) {
  return (e && e.type) === xt.redirect
}
function MI(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function jI(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function II(e) {
  return hI.has(e.toLowerCase())
}
function sn(e) {
  return dI.has(e.toLowerCase())
}
async function ov(e, t, r, n, o, i) {
  for (let a = 0; a < r.length; a++) {
    let s = r[a],
      l = t[a]
    if (!l) continue
    let f = e.find((h) => h.route.id === l.route.id),
      p = f != null && !uw(f, l) && (i && i[l.route.id]) !== void 0
    if (Qo(s) && (o || p)) {
      let h = n[a]
      Fe(h, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await fw(s, h, o).then((m) => {
          m && (r[a] = m || r[a])
        })
    }
  }
}
async function fw(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: xt.data, data: e.deferredData.unwrappedData }
      } catch (o) {
        return { type: xt.error, error: o }
      }
    return { type: xt.data, data: e.deferredData.data }
  }
}
function Eh(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function Vd(e, t) {
  let r = typeof t == 'string' ? qn(t).search : t.search
  if (e[e.length - 1].route.index && Eh(r || '')) return e[e.length - 1]
  let n = ow(e)
  return n[n.length - 1]
}
function iv(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: o,
    formData: i,
    json: a,
  } = e
  if (!(!t || !r || !n)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: o,
      }
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0,
      }
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: a,
        text: void 0,
      }
  }
}
function Ef(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function TI(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function Va(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function CI(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function to(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function NI(e, t) {
  try {
    let r = e.sessionStorage.getItem(lw)
    if (r) {
      let n = JSON.parse(r)
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []))
    }
  } catch {}
}
function AI(e, t) {
  if (t.size > 0) {
    let r = {}
    for (let [n, o] of t) r[n] = [...o]
    try {
      e.sessionStorage.setItem(lw, JSON.stringify(r))
    } catch (n) {
      ia(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + n + ').'
      )
    }
  }
}
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Hu() {
  return (
    (Hu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Hu.apply(this, arguments)
  )
}
const dw = M.createContext(null),
  pw = M.createContext(null),
  hw = M.createContext(null),
  Ec = M.createContext(null),
  ba = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  mw = M.createContext(null)
function Mh() {
  return M.useContext(Ec) != null
}
function OI() {
  return Mh() || Fe(!1), M.useContext(Ec).location
}
const DI = M.createContext(null)
function PI(e) {
  let t = M.useContext(ba).outlet
  return t && M.createElement(DI.Provider, { value: e }, t)
}
function kI() {
  let { matches: e } = M.useContext(ba),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function RI(e, t, r, n) {
  Mh() || Fe(!1)
  let { navigator: o } = M.useContext(hw),
    { matches: i } = M.useContext(ba),
    a = i[i.length - 1],
    s = a ? a.params : {}
  a && a.pathname
  let l = a ? a.pathnameBase : '/'
  a && a.route
  let f = OI(),
    p
  if (t) {
    var h
    let x = typeof t == 'string' ? qn(t) : t
    l === '/' || ((h = x.pathname) != null && h.startsWith(l)) || Fe(!1),
      (p = x)
  } else p = f
  let m = p.pathname || '/',
    v = m
  if (l !== '/') {
    let x = l.replace(/^\//, '').split('/')
    v = '/' + m.replace(/^\//, '').split('/').slice(x.length).join('/')
  }
  let w = Fi(e, { pathname: v }),
    S = $I(
      w &&
        w.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, s, x.params),
            pathname: Xo([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? l
                : Xo([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    )
  return t && S
    ? M.createElement(
        Ec.Provider,
        {
          value: {
            location: Hu(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              p
            ),
            navigationType: Tt.Pop,
          },
        },
        S
      )
    : S
}
function LI() {
  let e = QI(),
    t = iw(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null
  return M.createElement(
    M.Fragment,
    null,
    M.createElement('h2', null, 'Unexpected Application Error!'),
    M.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? M.createElement('pre', { style: o }, r) : null,
    i
  )
}
const zI = M.createElement(LI, null)
class UI extends M.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        }
  }
  componentDidCatch(t, r) {
    console.error('React Router caught the following error during render', t, r)
  }
  render() {
    return this.state.error !== void 0
      ? M.createElement(
          ba.Provider,
          { value: this.props.routeContext },
          M.createElement(mw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function FI(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = M.useContext(dw)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    M.createElement(ba.Provider, { value: t }, n)
  )
}
function $I(e, t, r, n) {
  var o
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i
    if ((i = r) != null && i.errors) e = r.matches
    else return null
  }
  let a = e,
    s = (o = r) == null ? void 0 : o.errors
  if (s != null) {
    let p = a.findIndex(
      (h) => h.route.id && (s == null ? void 0 : s[h.route.id])
    )
    p >= 0 || Fe(!1), (a = a.slice(0, Math.min(a.length, p + 1)))
  }
  let l = !1,
    f = -1
  if (r && n && n.v7_partialHydration)
    for (let p = 0; p < a.length; p++) {
      let h = a[p]
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (f = p),
        h.route.id)
      ) {
        let { loaderData: m, errors: v } = r,
          w =
            h.route.loader &&
            m[h.route.id] === void 0 &&
            (!v || v[h.route.id] === void 0)
        if (h.route.lazy || w) {
          ;(l = !0), f >= 0 ? (a = a.slice(0, f + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((p, h, m) => {
    let v,
      w = !1,
      S = null,
      x = null
    r &&
      ((v = s && h.route.id ? s[h.route.id] : void 0),
      (S = h.route.errorElement || zI),
      l &&
        (f < 0 && m === 0
          ? (VI('route-fallback', !1), (w = !0), (x = null))
          : f === m &&
            ((w = !0), (x = h.route.hydrateFallbackElement || null))))
    let y = t.concat(a.slice(0, m + 1)),
      g = () => {
        let b
        return (
          v
            ? (b = S)
            : w
            ? (b = x)
            : h.route.Component
            ? (b = M.createElement(h.route.Component, null))
            : h.route.element
            ? (b = h.route.element)
            : (b = p),
          M.createElement(FI, {
            match: h,
            routeContext: { outlet: p, matches: y, isDataRoute: r != null },
            children: b,
          })
        )
      }
    return r && (h.route.ErrorBoundary || h.route.errorElement || m === 0)
      ? M.createElement(UI, {
          location: r.location,
          revalidation: r.revalidation,
          component: S,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : g()
  }, null)
}
var Yd = (function (e) {
  return (
    (e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator'),
    (e.UseNavigateStable = 'useNavigate'),
    (e.UseRouteId = 'useRouteId'),
    e
  )
})(Yd || {})
function BI(e) {
  let t = M.useContext(pw)
  return t || Fe(!1), t
}
function WI(e) {
  let t = M.useContext(ba)
  return t || Fe(!1), t
}
function HI(e) {
  let t = WI(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || Fe(!1), r.route.id
}
function QI() {
  var e
  let t = M.useContext(mw),
    r = BI(Yd.UseRouteError),
    n = HI(Yd.UseRouteError)
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n]
}
const av = {}
function VI(e, t, r) {
  !t && !av[e] && (av[e] = !0)
}
function YI(e) {
  return PI(e.context)
}
function Mi(e) {
  Fe(!1)
}
function GI(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: o = Tt.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e
  Mh() && Fe(!1)
  let l = t.replace(/^\/*/, '/'),
    f = M.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: Hu({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    )
  typeof n == 'string' && (n = qn(n))
  let {
      pathname: p = '/',
      search: h = '',
      hash: m = '',
      state: v = null,
      key: w = 'default',
    } = n,
    S = M.useMemo(() => {
      let x = el(p, l)
      return x == null
        ? null
        : {
            location: { pathname: x, search: h, hash: m, state: v, key: w },
            navigationType: o,
          }
    }, [l, p, h, m, v, w, o])
  return S == null
    ? null
    : M.createElement(
        hw.Provider,
        { value: f },
        M.createElement(Ec.Provider, { children: r, value: S })
      )
}
new Promise(() => {})
function Gd(e, t) {
  t === void 0 && (t = [])
  let r = []
  return (
    M.Children.forEach(e, (n, o) => {
      if (!M.isValidElement(n)) return
      let i = [...t, o]
      if (n.type === M.Fragment) {
        r.push.apply(r, Gd(n.props.children, i))
        return
      }
      n.type !== Mi && Fe(!1), !n.props.index || !n.props.children || Fe(!1)
      let a = {
        id: n.props.id || i.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      }
      n.props.children && (a.children = Gd(n.props.children, i)), r.push(a)
    }),
    r
  )
}
function qI(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  }
  return (
    e.Component &&
      Object.assign(t, {
        element: M.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: M.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: M.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  )
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qu() {
  return (
    (Qu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Qu.apply(this, arguments)
  )
}
const ZI = '6'
try {
  window.__reactRouterVersion = ZI
} catch {}
function KI(e, t) {
  return _I({
    basename: t == null ? void 0 : t.basename,
    future: Qu({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Fj({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || XI(),
    routes: e,
    mapRouteProperties: qI,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function XI() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = Qu({}, t, { errors: JI(t.errors) })), t
}
function JI(e) {
  if (!e) return null
  let t = Object.entries(e),
    r = {}
  for (let [n, o] of t)
    if (o && o.__type === 'RouteErrorResponse')
      r[n] = new Sh(o.status, o.statusText, o.data, o.internal === !0)
    else if (o && o.__type === 'Error') {
      if (o.__subType) {
        let i = window[o.__subType]
        if (typeof i == 'function')
          try {
            let a = new i(o.message)
            ;(a.stack = ''), (r[n] = a)
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(o.message)
        ;(i.stack = ''), (r[n] = i)
      }
    } else r[n] = o
  return r
}
const eT = M.createContext({ isTransitioning: !1 }),
  tT = M.createContext(new Map()),
  rT = 'startTransition',
  sv = CE[rT],
  nT = 'flushSync',
  lv = Uj[nT]
function oT(e) {
  sv ? sv(e) : e()
}
function Ya(e) {
  lv ? lv(e) : e()
}
class iT {
  constructor() {
    ;(this.status = 'pending'),
      (this.promise = new Promise((t, r) => {
        ;(this.resolve = (n) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(n))
        }),
          (this.reject = (n) => {
            this.status === 'pending' && ((this.status = 'rejected'), r(n))
          })
      }))
  }
}
function aT(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [o, i] = M.useState(r.state),
    [a, s] = M.useState(),
    [l, f] = M.useState({ isTransitioning: !1 }),
    [p, h] = M.useState(),
    [m, v] = M.useState(),
    [w, S] = M.useState(),
    x = M.useRef(new Map()),
    { v7_startTransition: y } = n || {},
    g = M.useCallback(
      (C) => {
        y ? oT(C) : C()
      },
      [y]
    ),
    b = M.useCallback(
      (C, R) => {
        let {
          deletedFetchers: W,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: G,
        } = R
        W.forEach((B) => x.current.delete(B)),
          C.fetchers.forEach((B, V) => {
            B.data !== void 0 && x.current.set(V, B.data)
          })
        let K =
          r.window == null ||
          typeof r.window.document.startViewTransition != 'function'
        if (!G || K) {
          F ? Ya(() => i(C)) : g(() => i(C))
          return
        }
        if (F) {
          Ya(() => {
            m && (p && p.resolve(), m.skipTransition()),
              f({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: G.currentLocation,
                nextLocation: G.nextLocation,
              })
          })
          let B = r.window.document.startViewTransition(() => {
            Ya(() => i(C))
          })
          B.finished.finally(() => {
            Ya(() => {
              h(void 0), v(void 0), s(void 0), f({ isTransitioning: !1 })
            })
          }),
            Ya(() => v(B))
          return
        }
        m
          ? (p && p.resolve(),
            m.skipTransition(),
            S({
              state: C,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }))
          : (s(C),
            f({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }))
      },
      [r.window, m, p, x, g]
    )
  M.useLayoutEffect(() => r.subscribe(b), [r, b]),
    M.useEffect(() => {
      l.isTransitioning && !l.flushSync && h(new iT())
    }, [l]),
    M.useEffect(() => {
      if (p && a && r.window) {
        let C = a,
          R = p.promise,
          W = r.window.document.startViewTransition(async () => {
            g(() => i(C)), await R
          })
        W.finished.finally(() => {
          h(void 0), v(void 0), s(void 0), f({ isTransitioning: !1 })
        }),
          v(W)
      }
    }, [g, a, p, r.window]),
    M.useEffect(() => {
      p && a && o.location.key === a.location.key && p.resolve()
    }, [p, m, o.location, a]),
    M.useEffect(() => {
      !l.isTransitioning &&
        w &&
        (s(w.state),
        f({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        S(void 0))
    }, [l.isTransitioning, w]),
    M.useEffect(() => {}, [])
  let I = M.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (C) => r.navigate(C),
        push: (C, R, W) =>
          r.navigate(C, {
            state: R,
            preventScrollReset: W == null ? void 0 : W.preventScrollReset,
          }),
        replace: (C, R, W) =>
          r.navigate(C, {
            replace: !0,
            state: R,
            preventScrollReset: W == null ? void 0 : W.preventScrollReset,
          }),
      }),
      [r]
    ),
    D = r.basename || '/',
    E = M.useMemo(
      () => ({ router: r, navigator: I, static: !1, basename: D }),
      [r, I, D]
    )
  return M.createElement(
    M.Fragment,
    null,
    M.createElement(
      dw.Provider,
      { value: E },
      M.createElement(
        pw.Provider,
        { value: o },
        M.createElement(
          tT.Provider,
          { value: x.current },
          M.createElement(
            eT.Provider,
            { value: l },
            M.createElement(
              GI,
              {
                basename: D,
                location: o.location,
                navigationType: o.historyAction,
                navigator: I,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath },
              },
              o.initialized || r.future.v7_partialHydration
                ? M.createElement(sT, {
                    routes: r.routes,
                    future: r.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  )
}
function sT(e) {
  let { routes: t, future: r, state: n } = e
  return RI(t, void 0, n, r)
}
var uv
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(uv || (uv = {}))
var cv
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(cv || (cv = {}))
function yw(e) {
  var t,
    r,
    n = ''
  if (typeof e == 'string' || typeof e == 'number') n += e
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = yw(e[t])) && (n && (n += ' '), (n += r))
    else for (t in e) e[t] && (n && (n += ' '), (n += t))
  return n
}
function de() {
  for (var e = 0, t, r, n = ''; e < arguments.length; )
    (t = arguments[e++]) && (r = yw(t)) && (n && (n += ' '), (n += r))
  return n
}
var vr = 'top',
  Yr = 'bottom',
  Gr = 'right',
  gr = 'left',
  jh = 'auto',
  tl = [vr, Yr, Gr, gr],
  aa = 'start',
  Bs = 'end',
  lT = 'clippingParents',
  vw = 'viewport',
  Ga = 'popper',
  uT = 'reference',
  fv = tl.reduce(function (e, t) {
    return e.concat([t + '-' + aa, t + '-' + Bs])
  }, []),
  gw = [].concat(tl, [jh]).reduce(function (e, t) {
    return e.concat([t, t + '-' + aa, t + '-' + Bs])
  }, []),
  cT = 'beforeRead',
  fT = 'read',
  dT = 'afterRead',
  pT = 'beforeMain',
  hT = 'main',
  mT = 'afterMain',
  yT = 'beforeWrite',
  vT = 'write',
  gT = 'afterWrite',
  _T = [cT, fT, dT, pT, hT, mT, yT, vT, gT]
function So(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function jr(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function si(e) {
  var t = jr(e).Element
  return e instanceof t || e instanceof Element
}
function In(e) {
  var t = jr(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function Ih(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = jr(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function Tn(e) {
  return e.split('-')[0]
}
var Jo = Math.max,
  Vu = Math.min,
  sa = Math.round
function qd() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function _w() {
  return !/^((?!chrome|android).)*safari/i.test(qd())
}
function la(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    i = 1
  t &&
    In(e) &&
    ((o = (e.offsetWidth > 0 && sa(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && sa(n.height) / e.offsetHeight) || 1))
  var a = si(e) ? jr(e) : window,
    s = a.visualViewport,
    l = !_w() && r,
    f = (n.left + (l && s ? s.offsetLeft : 0)) / o,
    p = (n.top + (l && s ? s.offsetTop : 0)) / i,
    h = n.width / o,
    m = n.height / i
  return {
    width: h,
    height: m,
    top: p,
    right: f + h,
    bottom: p + m,
    left: f,
    x: f,
    y: p,
  }
}
function Th(e) {
  var t = la(e),
    r = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  )
}
function ww(e, t) {
  var r = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (r && Ih(r)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function Vn(e) {
  return jr(e).getComputedStyle(e)
}
function wT(e) {
  return ['table', 'td', 'th'].indexOf(So(e)) >= 0
}
function Io(e) {
  return ((si(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement
}
function Mc(e) {
  return So(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (Ih(e) ? e.host : null) || Io(e)
}
function dv(e) {
  return !In(e) || Vn(e).position === 'fixed' ? null : e.offsetParent
}
function bT(e) {
  var t = /firefox/i.test(qd()),
    r = /Trident/i.test(qd())
  if (r && In(e)) {
    var n = Vn(e)
    if (n.position === 'fixed') return null
  }
  var o = Mc(e)
  for (Ih(o) && (o = o.host); In(o) && ['html', 'body'].indexOf(So(o)) < 0; ) {
    var i = Vn(o)
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return o
    o = o.parentNode
  }
  return null
}
function rl(e) {
  for (var t = jr(e), r = dv(e); r && wT(r) && Vn(r).position === 'static'; )
    r = dv(r)
  return r &&
    (So(r) === 'html' || (So(r) === 'body' && Vn(r).position === 'static'))
    ? t
    : r || bT(e) || t
}
function Ch(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function ps(e, t, r) {
  return Jo(e, Vu(t, r))
}
function xT(e, t, r) {
  var n = ps(e, t, r)
  return n > r ? r : n
}
function bw() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function xw(e) {
  return Object.assign({}, bw(), e)
}
function Sw(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r
  }, {})
}
var ST = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    xw(typeof t != 'number' ? t : Sw(t, tl))
  )
}
function ET(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    i = r.elements.arrow,
    a = r.modifiersData.popperOffsets,
    s = Tn(r.placement),
    l = Ch(s),
    f = [gr, Gr].indexOf(s) >= 0,
    p = f ? 'height' : 'width'
  if (!(!i || !a)) {
    var h = ST(o.padding, r),
      m = Th(i),
      v = l === 'y' ? vr : gr,
      w = l === 'y' ? Yr : Gr,
      S =
        r.rects.reference[p] + r.rects.reference[l] - a[l] - r.rects.popper[p],
      x = a[l] - r.rects.reference[l],
      y = rl(i),
      g = y ? (l === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      b = S / 2 - x / 2,
      I = h[v],
      D = g - m[p] - h[w],
      E = g / 2 - m[p] / 2 + b,
      C = ps(I, E, D),
      R = l
    r.modifiersData[n] = ((t = {}), (t[R] = C), (t.centerOffset = C - E), t)
  }
}
function MT(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (ww(t.elements.popper, o) && (t.elements.arrow = o)))
}
const jT = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: ET,
  effect: MT,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function ua(e) {
  return e.split('-')[1]
}
var IT = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function TT(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1
  return { x: sa(r * o) / o || 0, y: sa(n * o) / o || 0 }
}
function pv(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    f = e.adaptive,
    p = e.roundOffsets,
    h = e.isFixed,
    m = a.x,
    v = m === void 0 ? 0 : m,
    w = a.y,
    S = w === void 0 ? 0 : w,
    x = typeof p == 'function' ? p({ x: v, y: S }) : { x: v, y: S }
  ;(v = x.x), (S = x.y)
  var y = a.hasOwnProperty('x'),
    g = a.hasOwnProperty('y'),
    b = gr,
    I = vr,
    D = window
  if (f) {
    var E = rl(r),
      C = 'clientHeight',
      R = 'clientWidth'
    if (
      (E === jr(r) &&
        ((E = Io(r)),
        Vn(E).position !== 'static' &&
          s === 'absolute' &&
          ((C = 'scrollHeight'), (R = 'scrollWidth'))),
      (E = E),
      o === vr || ((o === gr || o === Gr) && i === Bs))
    ) {
      I = Yr
      var W = h && E === D && D.visualViewport ? D.visualViewport.height : E[C]
      ;(S -= W - n.height), (S *= l ? 1 : -1)
    }
    if (o === gr || ((o === vr || o === Yr) && i === Bs)) {
      b = Gr
      var F = h && E === D && D.visualViewport ? D.visualViewport.width : E[R]
      ;(v -= F - n.width), (v *= l ? 1 : -1)
    }
  }
  var G = Object.assign({ position: s }, f && IT),
    K = p === !0 ? TT({ x: v, y: S }, jr(r)) : { x: v, y: S }
  if (((v = K.x), (S = K.y), l)) {
    var B
    return Object.assign(
      {},
      G,
      ((B = {}),
      (B[I] = g ? '0' : ''),
      (B[b] = y ? '0' : ''),
      (B.transform =
        (D.devicePixelRatio || 1) <= 1
          ? 'translate(' + v + 'px, ' + S + 'px)'
          : 'translate3d(' + v + 'px, ' + S + 'px, 0)'),
      B)
    )
  }
  return Object.assign(
    {},
    G,
    ((t = {}),
    (t[I] = g ? S + 'px' : ''),
    (t[b] = y ? v + 'px' : ''),
    (t.transform = ''),
    t)
  )
}
function CT(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    i = r.adaptive,
    a = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    f = {
      placement: Tn(t.placement),
      variation: ua(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      pv(
        Object.assign({}, f, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        pv(
          Object.assign({}, f, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
const NT = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: CT,
  data: {},
}
var Yl = { passive: !0 }
function AT(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    i = o === void 0 ? !0 : o,
    a = n.resize,
    s = a === void 0 ? !0 : a,
    l = jr(t.elements.popper),
    f = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    i &&
      f.forEach(function (p) {
        p.addEventListener('scroll', r.update, Yl)
      }),
    s && l.addEventListener('resize', r.update, Yl),
    function () {
      i &&
        f.forEach(function (p) {
          p.removeEventListener('scroll', r.update, Yl)
        }),
        s && l.removeEventListener('resize', r.update, Yl)
    }
  )
}
const OT = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: AT,
  data: {},
}
var DT = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function pu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return DT[t]
  })
}
var PT = { start: 'end', end: 'start' }
function hv(e) {
  return e.replace(/start|end/g, function (t) {
    return PT[t]
  })
}
function Nh(e) {
  var t = jr(e),
    r = t.pageXOffset,
    n = t.pageYOffset
  return { scrollLeft: r, scrollTop: n }
}
function Ah(e) {
  return la(Io(e)).left + Nh(e).scrollLeft
}
function kT(e, t) {
  var r = jr(e),
    n = Io(e),
    o = r.visualViewport,
    i = n.clientWidth,
    a = n.clientHeight,
    s = 0,
    l = 0
  if (o) {
    ;(i = o.width), (a = o.height)
    var f = _w()
    ;(f || (!f && t === 'fixed')) && ((s = o.offsetLeft), (l = o.offsetTop))
  }
  return { width: i, height: a, x: s + Ah(e), y: l }
}
function RT(e) {
  var t,
    r = Io(e),
    n = Nh(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Jo(
      r.scrollWidth,
      r.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Jo(
      r.scrollHeight,
      r.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -n.scrollLeft + Ah(e),
    l = -n.scrollTop
  return (
    Vn(o || r).direction === 'rtl' &&
      (s += Jo(r.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  )
}
function Oh(e) {
  var t = Vn(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY
  return /auto|scroll|overlay|hidden/.test(r + o + n)
}
function Ew(e) {
  return ['html', 'body', '#document'].indexOf(So(e)) >= 0
    ? e.ownerDocument.body
    : In(e) && Oh(e)
    ? e
    : Ew(Mc(e))
}
function hs(e, t) {
  var r
  t === void 0 && (t = [])
  var n = Ew(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = jr(n),
    a = o ? [i].concat(i.visualViewport || [], Oh(n) ? n : []) : n,
    s = t.concat(a)
  return o ? s : s.concat(hs(Mc(a)))
}
function Zd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function LT(e, t) {
  var r = la(e, !1, t === 'fixed')
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  )
}
function mv(e, t, r) {
  return t === vw ? Zd(kT(e, r)) : si(t) ? LT(t, r) : Zd(RT(Io(e)))
}
function zT(e) {
  var t = hs(Mc(e)),
    r = ['absolute', 'fixed'].indexOf(Vn(e).position) >= 0,
    n = r && In(e) ? rl(e) : e
  return si(n)
    ? t.filter(function (o) {
        return si(o) && ww(o, n) && So(o) !== 'body'
      })
    : []
}
function UT(e, t, r, n) {
  var o = t === 'clippingParents' ? zT(e) : [].concat(t),
    i = [].concat(o, [r]),
    a = i[0],
    s = i.reduce(function (l, f) {
      var p = mv(e, f, n)
      return (
        (l.top = Jo(p.top, l.top)),
        (l.right = Vu(p.right, l.right)),
        (l.bottom = Vu(p.bottom, l.bottom)),
        (l.left = Jo(p.left, l.left)),
        l
      )
    }, mv(e, a, n))
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  )
}
function Mw(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? Tn(n) : null,
    i = n ? ua(n) : null,
    a = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l
  switch (o) {
    case vr:
      l = { x: a, y: t.y - r.height }
      break
    case Yr:
      l = { x: a, y: t.y + t.height }
      break
    case Gr:
      l = { x: t.x + t.width, y: s }
      break
    case gr:
      l = { x: t.x - r.width, y: s }
      break
    default:
      l = { x: t.x, y: t.y }
  }
  var f = o ? Ch(o) : null
  if (f != null) {
    var p = f === 'y' ? 'height' : 'width'
    switch (i) {
      case aa:
        l[f] = l[f] - (t[p] / 2 - r[p] / 2)
        break
      case Bs:
        l[f] = l[f] + (t[p] / 2 - r[p] / 2)
        break
    }
  }
  return l
}
function Ws(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    i = r.strategy,
    a = i === void 0 ? e.strategy : i,
    s = r.boundary,
    l = s === void 0 ? lT : s,
    f = r.rootBoundary,
    p = f === void 0 ? vw : f,
    h = r.elementContext,
    m = h === void 0 ? Ga : h,
    v = r.altBoundary,
    w = v === void 0 ? !1 : v,
    S = r.padding,
    x = S === void 0 ? 0 : S,
    y = xw(typeof x != 'number' ? x : Sw(x, tl)),
    g = m === Ga ? uT : Ga,
    b = e.rects.popper,
    I = e.elements[w ? g : m],
    D = UT(si(I) ? I : I.contextElement || Io(e.elements.popper), l, p, a),
    E = la(e.elements.reference),
    C = Mw({ reference: E, element: b, strategy: 'absolute', placement: o }),
    R = Zd(Object.assign({}, b, C)),
    W = m === Ga ? R : E,
    F = {
      top: D.top - W.top + y.top,
      bottom: W.bottom - D.bottom + y.bottom,
      left: D.left - W.left + y.left,
      right: W.right - D.right + y.right,
    },
    G = e.modifiersData.offset
  if (m === Ga && G) {
    var K = G[o]
    Object.keys(F).forEach(function (B) {
      var V = [Gr, Yr].indexOf(B) >= 0 ? 1 : -1,
        T = [vr, Yr].indexOf(B) >= 0 ? 'y' : 'x'
      F[B] += K[T] * V
    })
  }
  return F
}
function FT(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = r.boundary,
    i = r.rootBoundary,
    a = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    f = l === void 0 ? gw : l,
    p = ua(n),
    h = p
      ? s
        ? fv
        : fv.filter(function (w) {
            return ua(w) === p
          })
      : tl,
    m = h.filter(function (w) {
      return f.indexOf(w) >= 0
    })
  m.length === 0 && (m = h)
  var v = m.reduce(function (w, S) {
    return (
      (w[S] = Ws(e, { placement: S, boundary: o, rootBoundary: i, padding: a })[
        Tn(S)
      ]),
      w
    )
  }, {})
  return Object.keys(v).sort(function (w, S) {
    return v[w] - v[S]
  })
}
function $T(e) {
  if (Tn(e) === jh) return []
  var t = pu(e)
  return [hv(e), t, hv(t)]
}
function BT(e) {
  var t = e.state,
    r = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        i = o === void 0 ? !0 : o,
        a = r.altAxis,
        s = a === void 0 ? !0 : a,
        l = r.fallbackPlacements,
        f = r.padding,
        p = r.boundary,
        h = r.rootBoundary,
        m = r.altBoundary,
        v = r.flipVariations,
        w = v === void 0 ? !0 : v,
        S = r.allowedAutoPlacements,
        x = t.options.placement,
        y = Tn(x),
        g = y === x,
        b = l || (g || !w ? [pu(x)] : $T(x)),
        I = [x].concat(b).reduce(function (Ne, Le) {
          return Ne.concat(
            Tn(Le) === jh
              ? FT(t, {
                  placement: Le,
                  boundary: p,
                  rootBoundary: h,
                  padding: f,
                  flipVariations: w,
                  allowedAutoPlacements: S,
                })
              : Le
          )
        }, []),
        D = t.rects.reference,
        E = t.rects.popper,
        C = new Map(),
        R = !0,
        W = I[0],
        F = 0;
      F < I.length;
      F++
    ) {
      var G = I[F],
        K = Tn(G),
        B = ua(G) === aa,
        V = [vr, Yr].indexOf(K) >= 0,
        T = V ? 'width' : 'height',
        N = Ws(t, {
          placement: G,
          boundary: p,
          rootBoundary: h,
          altBoundary: m,
          padding: f,
        }),
        P = V ? (B ? Gr : gr) : B ? Yr : vr
      D[T] > E[T] && (P = pu(P))
      var k = pu(P),
        Y = []
      if (
        (i && Y.push(N[K] <= 0),
        s && Y.push(N[P] <= 0, N[k] <= 0),
        Y.every(function (Ne) {
          return Ne
        }))
      ) {
        ;(W = G), (R = !1)
        break
      }
      C.set(G, Y)
    }
    if (R)
      for (
        var X = w ? 3 : 1,
          oe = function (Le) {
            var Xe = I.find(function (_t) {
              var Jt = C.get(_t)
              if (Jt)
                return Jt.slice(0, Le).every(function (Nr) {
                  return Nr
                })
            })
            if (Xe) return (W = Xe), 'break'
          },
          ce = X;
        ce > 0;
        ce--
      ) {
        var De = oe(ce)
        if (De === 'break') break
      }
    t.placement !== W &&
      ((t.modifiersData[n]._skip = !0), (t.placement = W), (t.reset = !0))
  }
}
const WT = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: BT,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
}
function yv(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  )
}
function vv(e) {
  return [vr, Gr, Yr, gr].some(function (t) {
    return e[t] >= 0
  })
}
function HT(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Ws(t, { elementContext: 'reference' }),
    s = Ws(t, { altBoundary: !0 }),
    l = yv(a, n),
    f = yv(s, o, i),
    p = vv(l),
    h = vv(f)
  ;(t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: p,
    hasPopperEscaped: h,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': p,
      'data-popper-escaped': h,
    }))
}
const QT = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: HT,
}
function VT(e, t, r) {
  var n = Tn(e),
    o = [gr, vr].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    a = i[0],
    s = i[1]
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [gr, Gr].indexOf(n) >= 0 ? { x: s, y: a } : { x: a, y: s }
  )
}
function YT(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    i = o === void 0 ? [0, 0] : o,
    a = gw.reduce(function (p, h) {
      return (p[h] = VT(h, t.rects, i)), p
    }, {}),
    s = a[t.placement],
    l = s.x,
    f = s.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += f)),
    (t.modifiersData[n] = a)
}
const GT = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: YT,
}
function qT(e) {
  var t = e.state,
    r = e.name
  t.modifiersData[r] = Mw({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
const ZT = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: qT,
  data: {},
}
function KT(e) {
  return e === 'x' ? 'y' : 'x'
}
function XT(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    i = o === void 0 ? !0 : o,
    a = r.altAxis,
    s = a === void 0 ? !1 : a,
    l = r.boundary,
    f = r.rootBoundary,
    p = r.altBoundary,
    h = r.padding,
    m = r.tether,
    v = m === void 0 ? !0 : m,
    w = r.tetherOffset,
    S = w === void 0 ? 0 : w,
    x = Ws(t, { boundary: l, rootBoundary: f, padding: h, altBoundary: p }),
    y = Tn(t.placement),
    g = ua(t.placement),
    b = !g,
    I = Ch(y),
    D = KT(I),
    E = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    R = t.rects.popper,
    W =
      typeof S == 'function'
        ? S(Object.assign({}, t.rects, { placement: t.placement }))
        : S,
    F =
      typeof W == 'number'
        ? { mainAxis: W, altAxis: W }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, W),
    G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    K = { x: 0, y: 0 }
  if (E) {
    if (i) {
      var B,
        V = I === 'y' ? vr : gr,
        T = I === 'y' ? Yr : Gr,
        N = I === 'y' ? 'height' : 'width',
        P = E[I],
        k = P + x[V],
        Y = P - x[T],
        X = v ? -R[N] / 2 : 0,
        oe = g === aa ? C[N] : R[N],
        ce = g === aa ? -R[N] : -C[N],
        De = t.elements.arrow,
        Ne = v && De ? Th(De) : { width: 0, height: 0 },
        Le = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : bw(),
        Xe = Le[V],
        _t = Le[T],
        Jt = ps(0, C[N], Ne[N]),
        Nr = b
          ? C[N] / 2 - X - Jt - Xe - F.mainAxis
          : oe - Jt - Xe - F.mainAxis,
        Kn = b
          ? -C[N] / 2 + X + Jt + _t + F.mainAxis
          : ce + Jt + _t + F.mainAxis,
        Ze = t.elements.arrow && rl(t.elements.arrow),
        Zr = Ze ? (I === 'y' ? Ze.clientTop || 0 : Ze.clientLeft || 0) : 0,
        ie = (B = G == null ? void 0 : G[I]) != null ? B : 0,
        Co = P + Nr - ie - Zr,
        Qe = P + Kn - ie,
        pn = ps(v ? Vu(k, Co) : k, P, v ? Jo(Y, Qe) : Y)
      ;(E[I] = pn), (K[I] = pn - P)
    }
    if (s) {
      var ar,
        Ar = I === 'x' ? vr : gr,
        Kr = I === 'x' ? Yr : Gr,
        wr = E[D],
        er = D === 'y' ? 'height' : 'width',
        hn = wr + x[Ar],
        Xr = wr - x[Kr],
        Vt = [vr, gr].indexOf(y) !== -1,
        sr = (ar = G == null ? void 0 : G[D]) != null ? ar : 0,
        mn = Vt ? hn : wr - C[er] - R[er] - sr + F.altAxis,
        Jr = Vt ? wr + C[er] + R[er] - sr - F.altAxis : Xr,
        jt = v && Vt ? xT(mn, wr, Jr) : ps(v ? mn : hn, wr, v ? Jr : Xr)
      ;(E[D] = jt), (K[D] = jt - wr)
    }
    t.modifiersData[n] = K
  }
}
const JT = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: XT,
  requiresIfExists: ['offset'],
}
function eC(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function tC(e) {
  return e === jr(e) || !In(e) ? Nh(e) : eC(e)
}
function rC(e) {
  var t = e.getBoundingClientRect(),
    r = sa(t.width) / e.offsetWidth || 1,
    n = sa(t.height) / e.offsetHeight || 1
  return r !== 1 || n !== 1
}
function nC(e, t, r) {
  r === void 0 && (r = !1)
  var n = In(t),
    o = In(t) && rC(t),
    i = Io(t),
    a = la(e, o, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 }
  return (
    (n || (!n && !r)) &&
      ((So(t) !== 'body' || Oh(i)) && (s = tC(t)),
      In(t)
        ? ((l = la(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Ah(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  )
}
function oC(e) {
  var t = new Map(),
    r = new Set(),
    n = []
  e.forEach(function (i) {
    t.set(i.name, i)
  })
  function o(i) {
    r.add(i.name)
    var a = [].concat(i.requires || [], i.requiresIfExists || [])
    a.forEach(function (s) {
      if (!r.has(s)) {
        var l = t.get(s)
        l && o(l)
      }
    }),
      n.push(i)
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || o(i)
    }),
    n
  )
}
function iC(e) {
  var t = oC(e)
  return _T.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n
      })
    )
  }, [])
}
function aC(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ;(t = void 0), r(e())
          })
        })),
      t
    )
  }
}
function sC(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name]
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    )
  }, {})
  return Object.keys(t).map(function (r) {
    return t[r]
  })
}
var gv = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function _v() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function lC(e) {
  e === void 0 && (e = {})
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    i = o === void 0 ? gv : o
  return function (s, l, f) {
    f === void 0 && (f = i)
    var p = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, gv, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      h = [],
      m = !1,
      v = {
        state: p,
        setOptions: function (y) {
          var g = typeof y == 'function' ? y(p.options) : y
          S(),
            (p.options = Object.assign({}, i, p.options, g)),
            (p.scrollParents = {
              reference: si(s)
                ? hs(s)
                : s.contextElement
                ? hs(s.contextElement)
                : [],
              popper: hs(l),
            })
          var b = iC(sC([].concat(n, p.options.modifiers)))
          return (
            (p.orderedModifiers = b.filter(function (I) {
              return I.enabled
            })),
            w(),
            v.update()
          )
        },
        forceUpdate: function () {
          if (!m) {
            var y = p.elements,
              g = y.reference,
              b = y.popper
            if (_v(g, b)) {
              ;(p.rects = {
                reference: nC(g, rl(b), p.options.strategy === 'fixed'),
                popper: Th(b),
              }),
                (p.reset = !1),
                (p.placement = p.options.placement),
                p.orderedModifiers.forEach(function (F) {
                  return (p.modifiersData[F.name] = Object.assign({}, F.data))
                })
              for (var I = 0; I < p.orderedModifiers.length; I++) {
                if (p.reset === !0) {
                  ;(p.reset = !1), (I = -1)
                  continue
                }
                var D = p.orderedModifiers[I],
                  E = D.fn,
                  C = D.options,
                  R = C === void 0 ? {} : C,
                  W = D.name
                typeof E == 'function' &&
                  (p = E({ state: p, options: R, name: W, instance: v }) || p)
              }
            }
          }
        },
        update: aC(function () {
          return new Promise(function (x) {
            v.forceUpdate(), x(p)
          })
        }),
        destroy: function () {
          S(), (m = !0)
        },
      }
    if (!_v(s, l)) return v
    v.setOptions(f).then(function (x) {
      !m && f.onFirstUpdate && f.onFirstUpdate(x)
    })
    function w() {
      p.orderedModifiers.forEach(function (x) {
        var y = x.name,
          g = x.options,
          b = g === void 0 ? {} : g,
          I = x.effect
        if (typeof I == 'function') {
          var D = I({ state: p, name: y, instance: v, options: b }),
            E = function () {}
          h.push(D || E)
        }
      })
    }
    function S() {
      h.forEach(function (x) {
        return x()
      }),
        (h = [])
    }
    return v
  }
}
var uC = function () {},
  cC = uC
const fC = va(cC)
;(function () {
  try {
    if (typeof document < 'u') {
      var e = document.createElement('style')
      e.appendChild(
        document.createTextNode(
          '.dropdown-menu .active:not(.form-control){color:#16181b;background-color:#eee}.dropdown-menu [data-active=true] a.dropdown-item,.dropdown-menu .dropdown-item:focus,.dropdown-menu li:focus .dropdown-item :not(.disabled){color:#16181b;background-color:#eee}.dropdown-menu li:focus{outline:none}.dropdown-menu.dropdown-menu-dark [data-active=true] a.dropdown-item,.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item{color:#fff;background-color:#1266f1}.btn-group.dropstart>.dropdown-menu{right:0!important}'
        )
      ),
        document.head.appendChild(e)
    }
  } catch (t) {
    console.error('vite-plugin-css-injected-by-js', t)
  }
})()
const dC = te.forwardRef(
  (
    {
      breakpoint: e,
      fluid: t,
      children: r,
      className: n,
      tag: o = 'div',
      ...i
    },
    a
  ) => {
    const s = de(`${t ? 'container-fluid' : `container${e ? '-' + e : ''}`}`, n)
    return A.jsx(o, { className: s, ...i, ref: a, children: r })
  }
)
te.forwardRef(
  (
    {
      center: e,
      children: t,
      className: r,
      end: n,
      lg: o,
      md: i,
      offsetLg: a,
      offsetMd: s,
      offsetSm: l,
      order: f,
      size: p,
      sm: h,
      start: m,
      tag: v = 'div',
      xl: w,
      xxl: S,
      xs: x,
      ...y
    },
    g
  ) => {
    const b = de(
      p && `col-${p}`,
      x && `col-xs-${x}`,
      h && `col-sm-${h}`,
      i && `col-md-${i}`,
      o && `col-lg-${o}`,
      w && `col-xl-${w}`,
      S && `col-xxl-${S}`,
      !p && !x && !h && !i && !o && !w && !S ? 'col' : '',
      f && `order-${f}`,
      m && 'align-self-start',
      e && 'align-self-center',
      n && 'align-self-end',
      l && `offset-sm-${l}`,
      s && `offset-md-${s}`,
      a && `offset-lg-${a}`,
      r
    )
    return A.jsx(v, { className: b, ref: g, ...y, children: t })
  }
)
te.forwardRef(
  (
    {
      className: e,
      color: t = 'primary',
      pill: r,
      light: n,
      dot: o,
      tag: i = 'span',
      children: a,
      notification: s,
      ...l
    },
    f
  ) => {
    const p = de(
      'badge',
      n ? t && `badge-${t}` : t && `bg-${t}`,
      o && 'badge-dot',
      r && 'rounded-pill',
      s && 'badge-notification',
      e
    )
    return A.jsx(i, { className: p, ref: f, ...l, children: a })
  }
)
const pC = ({ ...e }) => {
    const [t, r] = M.useState(!1),
      n = de('ripple-wave', t && 'active')
    return (
      M.useEffect(() => {
        const o = setTimeout(() => {
          r(!0)
        }, 50)
        return () => {
          clearTimeout(o)
        }
      }, []),
      A.jsx('div', { className: n, ...e })
    )
  },
  hC = (...e) => {
    const t = te.useRef()
    return (
      te.useEffect(() => {
        e.forEach((r) => {
          r && (typeof r == 'function' ? r(t.current) : (r.current = t.current))
        })
      }, [e]),
      t
    )
  },
  mC = te.forwardRef(
    (
      {
        className: e,
        rippleTag: t = 'div',
        rippleCentered: r,
        rippleDuration: n = 500,
        rippleUnbound: o,
        rippleRadius: i = 0,
        rippleColor: a = 'dark',
        children: s,
        onMouseDown: l,
        ...f
      },
      p
    ) => {
      const h = M.useRef(null),
        m = hC(p, h),
        v =
          'rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%',
        w = [0, 0, 0],
        S = [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ],
        [x, y] = M.useState([]),
        [g, b] = M.useState(!1),
        I = de(
          'ripple',
          'ripple-surface',
          o && 'ripple-surface-unbound',
          g && `ripple-surface-${a}`,
          e
        ),
        D = () => {
          if (S.find((F) => F === (a == null ? void 0 : a.toLowerCase())))
            return b(!0)
          {
            const F = E(a).join(',')
            return `radial-gradient(circle, ${v
              .split('{{color}}')
              .join(`${F}`)})`
          }
        },
        E = (F) => {
          const G = (V) => (
              V.length < 7 &&
                (V = `#${V[1]}${V[1]}${V[2]}${V[2]}${V[3]}${V[3]}`),
              [
                parseInt(V.substr(1, 2), 16),
                parseInt(V.substr(3, 2), 16),
                parseInt(V.substr(5, 2), 16),
              ]
            ),
            K = (V) => {
              const T = document.body.appendChild(
                  document.createElement('fictum')
                ),
                N = 'rgb(1, 2, 3)'
              return (
                (T.style.color = N),
                T.style.color !== N ||
                ((T.style.color = V),
                T.style.color === N || T.style.color === '')
                  ? w
                  : ((V = getComputedStyle(T).color),
                    document.body.removeChild(T),
                    V)
              )
            },
            B = (V) => (
              (V = V.match(/[.\d]+/g).map((T) => +Number(T))), (V.length = 3), V
            )
          return F.toLowerCase() === 'transparent'
            ? w
            : F[0] === '#'
            ? G(F)
            : (F.indexOf('rgb') === -1 && (F = K(F)),
              F.indexOf('rgb') === 0 ? B(F) : w)
        },
        C = (F) => {
          const { offsetX: G, offsetY: K, height: B, width: V } = F,
            T = K <= B / 2,
            N = G <= V / 2,
            P = (ce, De) => Math.sqrt(ce ** 2 + De ** 2),
            k = K === B / 2 && G === V / 2,
            Y = {
              first: T === !0 && N === !1,
              second: T === !0 && N === !0,
              third: T === !1 && N === !0,
              fourth: T === !1 && N === !1,
            },
            X = {
              topLeft: P(G, K),
              topRight: P(V - G, K),
              bottomLeft: P(G, B - K),
              bottomRight: P(V - G, B - K),
            }
          let oe = 0
          return (
            k || Y.fourth
              ? (oe = X.topLeft)
              : Y.third
              ? (oe = X.topRight)
              : Y.second
              ? (oe = X.bottomRight)
              : Y.first && (oe = X.bottomLeft),
            oe * 2
          )
        },
        R = (F) => {
          var G
          const K =
              (G = m.current) == null ? void 0 : G.getBoundingClientRect(),
            B = F.clientX - K.left,
            V = F.clientY - K.top,
            T = K.height,
            N = K.width,
            P = {
              offsetX: r ? T / 2 : B,
              offsetY: r ? N / 2 : V,
              height: T,
              width: N,
            },
            k = { delay: n && n * 0.5, duration: n && n - n * 0.5 },
            Y = C(P),
            X = i || Y / 2,
            oe = {
              left: r ? `${N / 2 - X}px` : `${B - X}px`,
              top: r ? `${T / 2 - X}px` : `${V - X}px`,
              height: i ? `${i * 2}px` : `${Y}px`,
              width: i ? `${i * 2}px` : `${Y}px`,
              transitionDelay: `0s, ${k.delay}ms`,
              transitionDuration: `${n}ms, ${k.duration}ms`,
            }
          return g ? oe : { ...oe, backgroundImage: `${D()}` }
        },
        W = (F) => {
          const G = R(F),
            K = x.concat(G)
          y(K), l && l(F)
        }
      return (
        M.useEffect(() => {
          const F = setTimeout(() => {
            x.length > 0 && y(x.splice(1, x.length - 1))
          }, n)
          return () => {
            clearTimeout(F)
          }
        }, [n, x]),
        A.jsxs(t, {
          className: I,
          onMouseDown: (F) => W(F),
          ref: m,
          ...f,
          children: [s, x.map((F, G) => A.jsx(pC, { style: F }, G))],
        })
      )
    }
  )
te.forwardRef(
  (
    {
      className: e,
      color: t = 'primary',
      outline: r,
      children: n,
      rounded: o,
      disabled: i,
      floating: a,
      size: s,
      href: l,
      block: f,
      active: p,
      toggle: h,
      noRipple: m,
      tag: v = 'button',
      role: w = 'button',
      ...S
    },
    x
  ) => {
    const [y, g] = M.useState(p || !1)
    let b
    const I = (t && ['light', 'link'].includes(t)) || r ? 'dark' : 'light'
    t !== 'none'
      ? r
        ? t
          ? (b = `btn-outline-${t}`)
          : (b = 'btn-outline-primary')
        : t
        ? (b = `btn-${t}`)
        : (b = 'btn-primary')
      : (b = '')
    const D = de(
      t !== 'none' && 'btn',
      b,
      o && 'btn-rounded',
      a && 'btn-floating',
      s && `btn-${s}`,
      `${(l || v !== 'button') && i ? 'disabled' : ''}`,
      f && 'btn-block',
      y && 'active',
      e
    )
    return (
      l && v !== 'a' && (v = 'a'),
      ['hr', 'img', 'input'].includes(v) || m
        ? A.jsx(v, {
            className: D,
            onClick: h
              ? () => {
                  g(!y)
                }
              : void 0,
            disabled: i && v === 'button' ? !0 : void 0,
            href: l,
            ref: x,
            role: w,
            ...S,
            children: n,
          })
        : A.jsx(mC, {
            rippleTag: v,
            rippleColor: I,
            className: D,
            onClick: h
              ? () => {
                  g(!y)
                }
              : void 0,
            disabled: i && v === 'button' ? !0 : void 0,
            href: l,
            ref: x,
            role: w,
            ...S,
            children: n,
          })
    )
  }
)
te.forwardRef(
  (
    {
      className: e,
      children: t,
      shadow: r,
      toolbar: n,
      size: o,
      vertical: i,
      tag: a = 'div',
      role: s = 'group',
      ...l
    },
    f
  ) => {
    let p
    n ? (p = 'btn-toolbar') : i ? (p = 'btn-group-vertical') : (p = 'btn-group')
    const h = de(p, r && `shadow-${r}`, o && `btn-group-${o}`, e)
    return A.jsx(a, { className: h, ref: f, role: s, ...l, children: t })
  }
)
te.forwardRef(
  (
    {
      className: e,
      children: t,
      tag: r = 'div',
      color: n,
      grow: o,
      size: i,
      ...a
    },
    s
  ) => {
    const l = de(
      `${o ? 'spinner-grow' : 'spinner-border'}`,
      n && `text-${n}`,
      `${i ? (o ? 'spinner-grow-' + i : 'spinner-border-' + i) : ''}`,
      e
    )
    return A.jsx(r, { className: l, ref: s, ...a, children: t })
  }
)
te.forwardRef(
  (
    {
      className: e,
      children: t,
      border: r,
      background: n,
      tag: o = 'div',
      shadow: i,
      alignment: a,
      ...s
    },
    l
  ) => {
    const f = de(
      'card',
      r && `border border-${r}`,
      n && `bg-${n}`,
      i && `shadow-${i}`,
      a && `text-${a}`,
      e
    )
    return A.jsx(o, { className: f, ref: l, ...s, children: t })
  }
)
te.forwardRef(
  (
    {
      className: e,
      children: t,
      border: r,
      background: n,
      tag: o = 'div',
      ...i
    },
    a
  ) => {
    const s = de('card-header', r && `border-${r}`, n && `bg-${n}`, e)
    return A.jsx(o, { className: s, ...i, ref: a, children: t })
  }
)
te.forwardRef(({ className: e, children: t, tag: r = 'p', ...n }, o) => {
  const i = de('card-subtitle', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'h5', ...n }, o) => {
  const i = de('card-title', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'p', ...n }, o) => {
  const i = de('card-text', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('card-body', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(
  (
    {
      className: e,
      children: t,
      border: r,
      background: n,
      tag: o = 'div',
      ...i
    },
    a
  ) => {
    const s = de('card-footer', r && `border-${r}`, n && `bg-${n}`, e)
    return A.jsx(o, { className: s, ...i, ref: a, children: t })
  }
)
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('card-img-overlay', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('card-group', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(
  (
    {
      className: e,
      tag: t = 'ul',
      horizontal: r,
      horizontalSize: n,
      light: o,
      numbered: i,
      children: a,
      small: s,
      ...l
    },
    f
  ) => {
    const p = de(
      'list-group',
      r && (n ? `list-group-horizontal-${n}` : 'list-group-horizontal'),
      o && 'list-group-light',
      i && 'list-group-numbered',
      s && 'list-group-small',
      e
    )
    return A.jsx(t, { className: p, ref: f, ...l, children: a })
  }
)
te.forwardRef(
  (
    {
      className: e,
      tag: t = 'li',
      active: r,
      disabled: n,
      action: o,
      color: i,
      children: a,
      noBorders: s,
      ...l
    },
    f
  ) => {
    const p = t === 'button',
      h = de(
        'list-group-item',
        r && 'active',
        n && !p && 'disabled',
        o && 'list-group-item-action',
        i && `list-group-item-${i}`,
        s && 'border-0',
        e
      )
    return A.jsx(t, {
      className: h,
      disabled: p && n,
      ref: f,
      ...l,
      children: a,
    })
  }
)
te.forwardRef(
  (
    {
      around: e,
      between: t,
      bottom: r,
      center: n,
      children: o,
      className: i,
      evenly: a,
      end: s,
      middle: l,
      start: f,
      tag: p = 'div',
      top: h,
      ...m
    },
    v
  ) => {
    const w = de(
      'row',
      e && 'justify-content-around',
      t && 'justify-content-between',
      r && 'align-self-end',
      n && 'justify-content-center',
      a && 'justifty-content-evenly',
      s && 'justify-content-end',
      l && 'align-self-center',
      f && 'justify-content-start',
      h && 'align-self-start',
      i
    )
    return A.jsx(p, { className: w, ...m, ref: v, children: o })
  }
)
const yC = ({
  animate: e,
  className: t,
  icon: r,
  fab: n,
  fas: o,
  fal: i,
  far: a,
  flag: s,
  spin: l,
  fixed: f,
  flip: p,
  list: h,
  size: m,
  pull: v,
  pulse: w,
  color: S,
  border: x,
  rotate: y,
  inverse: g,
  stack: b,
  iconType: I,
  children: D,
  ...E
}) => {
  let C
  s
    ? (C = 'flag')
    : n
    ? (C = 'fab')
    : o
    ? (C = 'fas')
    : a
    ? (C = 'far')
    : i
    ? (C = 'fal')
    : (C = 'fa')
  const R = de(
    I ? `fa-${I}` : C,
    e && `fa-${e}`,
    s ? `flag-${s}` : r && `fa-${r}`,
    m && `fa-${m}`,
    S && `text-${S}`,
    x && 'fa-border',
    y && `fa-rotate-${y}`,
    v && `fa-pull-${v}`,
    l && !e && 'fa-spin',
    h && 'fa-li',
    f && 'fa-fw',
    w && !e && 'fa-pulse',
    g && 'fa-inverse',
    p && `fa-flip-${p}`,
    b && `fa-stack-${b}`,
    t
  )
  return A.jsx('i', { className: R, ...E, children: D })
}
te.forwardRef(
  (
    {
      className: e,
      children: t,
      tag: r = 'p',
      variant: n,
      color: o,
      blockquote: i,
      note: a,
      noteColor: s,
      listUnStyled: l,
      listInLine: f,
      ...p
    },
    h
  ) => {
    const m = de(
      n && n,
      i && 'blockquote',
      a && 'note',
      o && `text-${o}`,
      s && `note-${s}`,
      l && 'list-unstyled',
      f && 'list-inline',
      e
    )
    return (
      i && (r = 'blockquote'),
      (l || f) && (r = 'ul'),
      A.jsx(r, { className: m, ref: h, ...p, children: t })
    )
  }
)
te.forwardRef(
  ({ className: e, color: t, uppercase: r, bold: n, children: o, ...i }, a) => {
    const s = de(
      'breadcrumb',
      n && 'font-weight-bold',
      t && `text-${t}`,
      r && 'text-uppercase',
      e
    )
    return A.jsx('nav', {
      'aria-label': 'breadcrumb',
      children: A.jsx('ol', { className: s, ref: a, ...i, children: o }),
    })
  }
)
te.forwardRef(
  ({ className: e, active: t, current: r = 'page', children: n, ...o }, i) => {
    const a = de('breadcrumb-item', t && 'active', e)
    return A.jsx('li', {
      className: a,
      ref: i,
      'aria-current': t && r,
      ...o,
      children: n,
    })
  }
)
const vC = (e) => {
    if (e !== !1) return `navbar-expand-${e}`
  },
  gC = te.forwardRef(
    (
      {
        className: e,
        children: t,
        light: r,
        dark: n,
        scrolling: o,
        fixed: i,
        sticky: a,
        scrollingNavbarOffset: s,
        color: l,
        transparent: f,
        expand: p,
        tag: h = 'nav',
        bgColor: m,
        ...v
      },
      w
    ) => {
      const [S, x] = M.useState(!1),
        y = de(
          {
            'navbar-light': r,
            'navbar-dark': n,
            'scrolling-navbar': o || s,
            'top-nav-collapse': S,
            [`text-${l}`]: l && f ? S : l,
          },
          i && `fixed-${i}`,
          a && 'sticky-top',
          'navbar',
          p && vC(p),
          m && `bg-${m}`,
          e
        ),
        g = M.useCallback(() => {
          s && window.pageYOffset > s ? x(!0) : x(!1)
        }, [s])
      return (
        M.useEffect(
          () => (
            (o || s) && window.addEventListener('scroll', g),
            () => {
              window.removeEventListener('scroll', g)
            }
          ),
          [g, o, s]
        ),
        A.jsx(h, {
          className: y,
          role: 'navigation',
          ...v,
          ref: w,
          children: t,
        })
      )
    }
  ),
  ms = te.forwardRef(
    (
      {
        children: e,
        className: t = '',
        disabled: r = !1,
        active: n = !1,
        tag: o = 'a',
        ...i
      },
      a
    ) => {
      const s = de('nav-link', r ? 'disabled' : n ? 'active' : '', t)
      return A.jsx(o, {
        'data-test': 'nav-link',
        className: s,
        style: { cursor: 'pointer' },
        ref: a,
        ...i,
        children: e,
      })
    }
  ),
  _C = te.forwardRef(({ className: e, children: t, tag: r = 'a', ...n }, o) => {
    const i = de('navbar-brand', e)
    return A.jsx(r, { className: i, ref: o, ...n, children: t })
  }),
  Mf = te.forwardRef(
    (
      { children: e, className: t, active: r, text: n, tag: o = 'li', ...i },
      a
    ) => {
      const s = de('nav-item', r && 'active', n && 'navbar-text', t)
      return A.jsx(o, { ...i, className: s, ref: a, children: e })
    }
  ),
  wC = te.forwardRef(
    (
      {
        children: e,
        className: t,
        right: r,
        fullWidth: n = !0,
        left: o,
        tag: i = 'ul',
        ...a
      },
      s
    ) => {
      const l = de(
        'navbar-nav',
        n && 'w-100',
        r && 'ms-auto',
        o && 'me-auto',
        t
      )
      return A.jsx(i, { className: l, ref: s, ...a, children: e })
    }
  ),
  bC = te.forwardRef(
    ({ children: e, className: t, tag: r = 'button', ...n }, o) => {
      const i = de('navbar-toggler', t)
      return A.jsx(r, { ...n, className: i, ref: o, children: e })
    }
  )
te.forwardRef(
  ({ children: e, bgColor: t, color: r, className: n, ...o }, i) => {
    const a = de(t && `bg-${t}`, r && `text-${r}`, n)
    return A.jsx('footer', { className: a, ...o, ref: i, children: e })
  }
)
te.forwardRef(
  (
    {
      children: e,
      size: t,
      circle: r,
      center: n,
      end: o,
      start: i,
      className: a,
      ...s
    },
    l
  ) => {
    const f = de(
      'pagination',
      n && 'justify-content-center',
      r && 'pagination-circle',
      o && 'justify-content-end',
      t && `pagination-${t}`,
      i && 'justify-content-start',
      a
    )
    return A.jsx('ul', { className: f, ...s, ref: l, children: e })
  }
)
te.forwardRef(({ children: e, className: t, tag: r = 'a', ...n }, o) => {
  const i = de('page-link', t)
  return A.jsx(r, { className: i, ...n, ref: o, children: e })
})
te.forwardRef(
  ({ children: e, className: t, active: r, disabled: n, ...o }, i) => {
    const a = de('page-item', r && 'active', n && 'disabled', t)
    return A.jsx('li', { className: a, ...o, ref: i, children: e })
  }
)
const xC = te.forwardRef(
  (
    {
      animated: e,
      children: t,
      className: r,
      style: n,
      tag: o = 'div',
      valuenow: i,
      valuemax: a,
      striped: s,
      bgColor: l,
      valuemin: f,
      width: p,
      ...h
    },
    m
  ) => {
    const v = de(
        'progress-bar',
        l && `bg-${l}`,
        s && 'progress-bar-striped',
        e && 'progress-bar-animated',
        r
      ),
      w = { width: `${p}%`, ...n }
    return A.jsx(o, {
      className: v,
      style: w,
      ref: m,
      role: 'progressbar',
      ...h,
      'aria-valuenow': Number(p) ?? i,
      'aria-valuemin': Number(f),
      'aria-valuemax': Number(a),
      children: t,
    })
  }
)
te.forwardRef(
  (
    { className: e, children: t, tag: r = 'div', height: n, style: o, ...i },
    a
  ) => {
    const s = de('progress', e),
      l = { height: `${n}px`, ...o }
    return A.jsx(r, {
      className: s,
      ref: a,
      style: l,
      ...i,
      children: te.Children.map(t, (f) => {
        if (!te.isValidElement(f) || f.type !== xC) {
          console.error('Progress component only allows ProgressBar as child')
          return
        } else return f
      }),
    })
  }
)
const SC = (e) => {
  const [t, r] = M.useState(!1),
    n = M.useMemo(
      () =>
        new IntersectionObserver(([o]) => {
          r(o.isIntersecting)
        }),
      []
    )
  return (
    M.useEffect(() => {
      if (e.current) return n.observe(e.current), () => n.disconnect()
    }, [n, e]),
    t
  )
}
te.forwardRef(
  (
    {
      className: e,
      size: t,
      contrast: r,
      value: n,
      defaultValue: o,
      id: i,
      labelClass: a,
      wrapperClass: s,
      wrapperStyle: l,
      wrapperTag: f = 'div',
      label: p,
      onChange: h,
      children: m,
      labelRef: v,
      labelStyle: w,
      type: S,
      onBlur: x,
      readonly: y = !1,
      ...g
    },
    b
  ) => {
    var I, D
    const [E, C] = M.useState(n || o),
      [R, W] = M.useState(0),
      [F, G] = M.useState(!1),
      K = M.useRef(null),
      B = SC(K)
    M.useImperativeHandle(b, () => K.current)
    const V = M.useRef(null),
      T = v || V,
      N = de('form-outline', r && 'form-white', s),
      P = de(
        'form-control',
        F && 'active',
        S === 'date' && 'active',
        t && `form-control-${t}`,
        e
      ),
      k = de('form-label', a)
    M.useEffect(() => {
      if (!K.current) return
      const { value: ce } = K.current
      ce != '' ? G(!0) : G(!1)
    }, [(I = K.current) == null ? void 0 : I.value]),
      M.useEffect(() => {
        n !== void 0 && (n != '' ? G(!0) : G(!1))
      }, [n]),
      M.useEffect(() => {
        o !== void 0 && (o != '' ? G(!0) : G(!1))
      }, [o])
    const Y = M.useCallback(() => {
      var ce
      ;(ce = T.current) != null &&
        ce.clientWidth &&
        W(T.current.clientWidth * 0.8 + 8)
    }, [T])
    M.useEffect(() => {
      Y()
    }, [(D = T.current) == null ? void 0 : D.clientWidth, Y, B])
    const X = (ce) => {
        C(ce.target.value), h == null || h(ce)
      },
      oe = M.useCallback(
        (ce) => {
          K.current &&
            ((E !== void 0 && E != '') ||
            (n !== void 0 && n != '') ||
            K.current.value != ''
              ? G(!0)
              : G(!1),
            x && x(ce))
        },
        [E, n, x]
      )
    return A.jsxs(f, {
      className: N,
      style: l,
      children: [
        A.jsx('input', {
          type: S,
          readOnly: y,
          className: P,
          onBlur: oe,
          onChange: X,
          onFocus: Y,
          value: n,
          defaultValue: o,
          id: i,
          ref: K,
          ...g,
        }),
        p &&
          A.jsx('label', {
            className: k,
            style: w,
            htmlFor: i,
            ref: T,
            children: p,
          }),
        A.jsxs('div', {
          className: 'form-notch',
          children: [
            A.jsx('div', { className: 'form-notch-leading' }),
            A.jsx('div', {
              className: 'form-notch-middle',
              style: { width: R },
            }),
            A.jsx('div', { className: 'form-notch-trailing' }),
          ],
        }),
        m,
      ],
    })
  }
)
const jw = ({
  className: e,
  children: t,
  show: r = !1,
  id: n,
  navbar: o,
  tag: i = 'div',
  collapseRef: a,
  style: s,
  onShow: l,
  onHide: f,
  ...p
}) => {
  const [h, m] = M.useState(!1),
    [v, w] = M.useState(void 0),
    [S, x] = M.useState(!1),
    y = de(
      S ? 'collapsing' : 'collapse',
      !S && h && 'show',
      o && 'navbar-collapse',
      e
    ),
    g = M.useRef(null),
    b = a ?? g,
    I = M.useCallback(() => {
      h && w(void 0)
    }, [h])
  return (
    M.useEffect(() => {
      var D
      v === void 0 &&
        h &&
        w(
          (D = b == null ? void 0 : b.current) == null ? void 0 : D.scrollHeight
        )
    }, [v, h, b]),
    M.useEffect(() => {
      h !== r && (r ? l == null || l() : f == null || f(), m(r)), h && x(!0)
      const D = setTimeout(() => {
        x(!1)
      }, 350)
      return () => {
        clearTimeout(D)
      }
    }, [r, h, l, f]),
    M.useEffect(() => {
      var D
      w(
        h
          ? (D = b == null ? void 0 : b.current) == null
            ? void 0
            : D.scrollHeight
          : 0
      )
    }, [h, b, t]),
    M.useEffect(
      () => (
        window.addEventListener('resize', I),
        () => {
          window.removeEventListener('resize', I)
        }
      ),
      [I]
    ),
    A.jsx(i, {
      style: { height: v, ...s },
      id: n,
      className: y,
      ...p,
      ref: b,
      children: t,
    })
  )
}
M.createContext(null)
te.forwardRef(
  (
    {
      className: e,
      centered: t,
      children: r,
      size: n,
      scrollable: o,
      tag: i = 'div',
      ...a
    },
    s
  ) => {
    const l = de(
      'modal-dialog',
      o && 'modal-dialog-scrollable',
      t && 'modal-dialog-centered',
      n && `modal-${n}`,
      e
    )
    return A.jsx(i, { className: l, ...a, ref: s, children: r })
  }
)
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('modal-content', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('modal-header', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'h5', ...n }, o) => {
  const i = de('modal-title', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('modal-body', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.forwardRef(({ className: e, children: t, tag: r = 'div', ...n }, o) => {
  const i = de('modal-footer', e)
  return A.jsx(r, { className: i, ...n, ref: o, children: t })
})
te.createContext({ activeElement: null, setTargets: null })
te.forwardRef(
  (
    {
      className: e,
      children: t,
      noBorder: r,
      textBefore: n,
      textAfter: o,
      noWrap: i,
      tag: a = 'div',
      textTag: s = 'span',
      textClass: l,
      size: f,
      textProps: p,
      ...h
    },
    m
  ) => {
    const v = de('input-group', i && 'flex-nowrap', f && `input-group-${f}`, e),
      w = de('input-group-text', r && 'border-0', l),
      S = (x) =>
        A.jsx(A.Fragment, {
          children:
            x && Array.isArray(x)
              ? x.map((y, g) =>
                  A.jsx(s, { className: w, ...p, children: y }, g)
                )
              : A.jsx(s, { className: w, ...p, children: x }),
        })
    return A.jsxs(a, {
      className: v,
      ref: m,
      ...h,
      children: [n && S(n), t, o && S(o)],
    })
  }
)
te.forwardRef(
  (
    {
      className: e,
      children: t,
      isValidated: r = !1,
      onReset: n,
      onSubmit: o,
      noValidate: i = !0,
      ...a
    },
    s
  ) => {
    const [l, f] = M.useState(r),
      p = de('needs-validation', l && 'was-validated', e),
      h = (v) => {
        v.preventDefault(), f(!0), o && o(v)
      },
      m = (v) => {
        v.preventDefault(), f(!1), n && n(v)
      }
    return (
      M.useEffect(() => {
        f(r)
      }, [r]),
      A.jsx('form', {
        className: p,
        onSubmit: h,
        onReset: m,
        ref: s,
        noValidate: i,
        ...a,
        children: t,
      })
    )
  }
)
te.forwardRef(
  ({ className: e, fill: t, pills: r, justify: n, children: o, ...i }, a) => {
    const s = de(
      'nav',
      r ? 'nav-pills' : 'nav-tabs',
      t && 'nav-fill',
      n && 'nav-justified',
      e
    )
    return A.jsx('ul', { className: s, ref: a, ...i, children: o })
  }
)
te.forwardRef(
  ({ className: e, children: t, style: r, tag: n = 'li', ...o }, i) => {
    const a = de('nav-item', e)
    return A.jsx(n, {
      className: a,
      style: { cursor: 'pointer', ...r },
      role: 'presentation',
      ref: i,
      ...o,
      children: t,
    })
  }
)
te.forwardRef(
  (
    {
      className: e,
      color: t,
      active: r,
      onShow: n,
      onHide: o,
      children: i,
      ...a
    },
    s
  ) => {
    const l = de('nav-link', r && 'active', t && `bg-${t}`, e)
    return (
      M.useEffect(() => {
        r ? n == null || n() : o == null || o()
      }, [r]),
      A.jsx('a', { className: l, ref: s, ...a, children: i })
    )
  }
)
te.forwardRef(({ className: e, tag: t = 'div', children: r, ...n }, o) => {
  const i = de('tab-content', e)
  return A.jsx(t, { className: i, ref: o, ...n, children: r })
})
te.forwardRef(
  ({ className: e, tag: t = 'div', show: r, children: n, ...o }, i) => {
    const [a, s] = M.useState(!1),
      l = de('tab-pane', 'fade', a && 'show', r && 'active', e)
    return (
      M.useEffect(() => {
        let f
        return (
          r
            ? (f = setTimeout(() => {
                s(!0)
              }, 100))
            : s(!1),
          () => {
            clearTimeout(f)
          }
        )
      }, [r]),
      A.jsx(t, { className: l, role: 'tabpanel', ref: i, ...o, children: n })
    )
  }
)
M.createContext({ active: 0 })
const Iw = te.createContext({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: !1,
  initialActive: 0,
})
te.forwardRef(
  (
    {
      alwaysOpen: e,
      borderless: t,
      className: r,
      flush: n,
      active: o,
      initialActive: i = 0,
      tag: a = 'div',
      children: s,
      onChange: l,
      ...f
    },
    p
  ) => {
    const h = M.useMemo(() => typeof o < 'u', [o]),
      m = de(
        'accordion',
        n && 'accordion-flush',
        t && 'accordion-borderless',
        r
      ),
      [v, w] = M.useState(i)
    return A.jsx(a, {
      className: m,
      ref: p,
      ...f,
      children: A.jsx(Iw.Provider, {
        value: {
          activeItem: h ? o : v,
          setActiveItem: w,
          alwaysOpen: e,
          initialActive: i,
          onChange: l,
        },
        children: s,
      }),
    })
  }
)
te.forwardRef(
  (
    {
      className: e,
      bodyClassName: t,
      bodyStyle: r,
      headerClassName: n,
      collapseId: o,
      headerTitle: i,
      headerStyle: a,
      btnClassName: s,
      tag: l = 'div',
      children: f,
      ...p
    },
    h
  ) => {
    const {
        activeItem: m,
        setActiveItem: v,
        alwaysOpen: w,
        onChange: S,
      } = M.useContext(Iw),
      x = M.useMemo(() => (Array.isArray(m) ? m.includes(o) : m === o), [m, o]),
      y = de('accordion-item', e),
      g = de('accordion-header', n),
      b = de('accordion-body', t),
      I = de('accordion-button', !x && 'collapsed', s),
      D = M.useCallback(
        (E) => {
          let C = E
          Array.isArray(m)
            ? m.includes(E)
              ? (C = m.filter((R) => R !== E))
              : (C = w ? [...m, E] : [E])
            : ((C = m === E ? 0 : E), w && (C = [C])),
            S == null || S(C),
            v(C)
        },
        [S, m, v, w]
      )
    return A.jsxs(l, {
      className: y,
      ref: h,
      ...p,
      children: [
        A.jsx('h2', {
          className: g,
          style: a,
          children: A.jsx('button', {
            onClick: () => D(o),
            className: I,
            type: 'button',
            children: i,
          }),
        }),
        A.jsx(jw, {
          id: o.toString(),
          show: x,
          children: A.jsx('div', { className: b, style: r, children: f }),
        }),
      ],
    })
  }
)
function EC() {
  const [e, t] = M.useState(!1)
  return A.jsxs('div', {
    className: 'background',
    children: [
      A.jsx(gC, {
        expand: 'lg',
        light: !0,
        bgColor: 'light',
        children: A.jsxs(dC, {
          fluid: !0,
          children: [
            A.jsx(_C, { href: '#', children: 'Mins Web Baby' }),
            A.jsx(bC, {
              type: 'button',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation',
              onClick: () => t(!e),
              children: A.jsx(yC, { icon: 'bars', fas: !0 }),
            }),
            A.jsx(jw, {
              navbar: !0,
              show: e,
              children: A.jsxs(wC, {
                children: [
                  A.jsx(Mf, {
                    children: A.jsx(ms, { href: 'home', children: 'Home' }),
                  }),
                  A.jsx(Mf, {
                    children: A.jsx(ms, { href: '#', children: 'Alert List' }),
                  }),
                  A.jsx(Mf, {
                    children: A.jsx(ms, {
                      href: 'profile',
                      tabIndex: -1,
                      children: 'Profile',
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      A.jsx('header', {
        className: 'header',
        children: A.jsx('h1', {
          className: 'title',
          children: 'Mins Web Baby',
        }),
      }),
      A.jsx('section', { className: 'main', children: A.jsx(YI, {}) }),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
    ],
  })
}
var Kd = { exports: {} },
  Tw = { exports: {} }
;(function (e) {
  e.exports = t
  function t(n) {
    if (n) return r(n)
  }
  function r(n) {
    for (var o in t.prototype) n[o] = t.prototype[o]
    return n
  }
  ;(t.prototype.on = t.prototype.addEventListener =
    function (n, o) {
      return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks['$' + n] = this._callbacks['$' + n] || []).push(o),
        this
      )
    }),
    (t.prototype.once = function (n, o) {
      function i() {
        this.off(n, i), o.apply(this, arguments)
      }
      return (i.fn = o), this.on(n, i), this
    }),
    (t.prototype.off =
      t.prototype.removeListener =
      t.prototype.removeAllListeners =
      t.prototype.removeEventListener =
        function (n, o) {
          if (
            ((this._callbacks = this._callbacks || {}), arguments.length == 0)
          )
            return (this._callbacks = {}), this
          var i = this._callbacks['$' + n]
          if (!i) return this
          if (arguments.length == 1)
            return delete this._callbacks['$' + n], this
          for (var a, s = 0; s < i.length; s++)
            if (((a = i[s]), a === o || a.fn === o)) {
              i.splice(s, 1)
              break
            }
          return i.length === 0 && delete this._callbacks['$' + n], this
        }),
    (t.prototype.emit = function (n) {
      this._callbacks = this._callbacks || {}
      for (
        var o = new Array(arguments.length - 1),
          i = this._callbacks['$' + n],
          a = 1;
        a < arguments.length;
        a++
      )
        o[a - 1] = arguments[a]
      if (i) {
        i = i.slice(0)
        for (var a = 0, s = i.length; a < s; ++a) i[a].apply(this, o)
      }
      return this
    }),
    (t.prototype.listeners = function (n) {
      return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks['$' + n] || []
      )
    }),
    (t.prototype.hasListeners = function (n) {
      return !!this.listeners(n).length
    })
})(Tw)
var MC = Tw.exports,
  jC = Hs
Hs.default = Hs
Hs.stable = Aw
Hs.stableStringify = Aw
var Yu = '[...]',
  Cw = '[Circular]',
  li = [],
  Yo = []
function Nw() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  }
}
function Hs(e, t, r, n) {
  typeof n > 'u' && (n = Nw()), Xd(e, '', 0, [], void 0, 0, n)
  var o
  try {
    Yo.length === 0
      ? (o = JSON.stringify(e, t, r))
      : (o = JSON.stringify(e, Ow(t), r))
  } catch {
    return JSON.stringify(
      '[unable to serialize, circular reference is too complex to analyze]'
    )
  } finally {
    for (; li.length !== 0; ) {
      var i = li.pop()
      i.length === 4
        ? Object.defineProperty(i[0], i[1], i[3])
        : (i[0][i[1]] = i[2])
    }
  }
  return o
}
function Zi(e, t, r, n) {
  var o = Object.getOwnPropertyDescriptor(n, r)
  o.get !== void 0
    ? o.configurable
      ? (Object.defineProperty(n, r, { value: e }), li.push([n, r, t, o]))
      : Yo.push([t, r, e])
    : ((n[r] = e), li.push([n, r, t]))
}
function Xd(e, t, r, n, o, i, a) {
  i += 1
  var s
  if (typeof e == 'object' && e !== null) {
    for (s = 0; s < n.length; s++)
      if (n[s] === e) {
        Zi(Cw, e, t, o)
        return
      }
    if (typeof a.depthLimit < 'u' && i > a.depthLimit) {
      Zi(Yu, e, t, o)
      return
    }
    if (typeof a.edgesLimit < 'u' && r + 1 > a.edgesLimit) {
      Zi(Yu, e, t, o)
      return
    }
    if ((n.push(e), Array.isArray(e)))
      for (s = 0; s < e.length; s++) Xd(e[s], s, s, n, e, i, a)
    else {
      var l = Object.keys(e)
      for (s = 0; s < l.length; s++) {
        var f = l[s]
        Xd(e[f], f, s, n, e, i, a)
      }
    }
    n.pop()
  }
}
function IC(e, t) {
  return e < t ? -1 : e > t ? 1 : 0
}
function Aw(e, t, r, n) {
  typeof n > 'u' && (n = Nw())
  var o = Jd(e, '', 0, [], void 0, 0, n) || e,
    i
  try {
    Yo.length === 0
      ? (i = JSON.stringify(o, t, r))
      : (i = JSON.stringify(o, Ow(t), r))
  } catch {
    return JSON.stringify(
      '[unable to serialize, circular reference is too complex to analyze]'
    )
  } finally {
    for (; li.length !== 0; ) {
      var a = li.pop()
      a.length === 4
        ? Object.defineProperty(a[0], a[1], a[3])
        : (a[0][a[1]] = a[2])
    }
  }
  return i
}
function Jd(e, t, r, n, o, i, a) {
  i += 1
  var s
  if (typeof e == 'object' && e !== null) {
    for (s = 0; s < n.length; s++)
      if (n[s] === e) {
        Zi(Cw, e, t, o)
        return
      }
    try {
      if (typeof e.toJSON == 'function') return
    } catch {
      return
    }
    if (typeof a.depthLimit < 'u' && i > a.depthLimit) {
      Zi(Yu, e, t, o)
      return
    }
    if (typeof a.edgesLimit < 'u' && r + 1 > a.edgesLimit) {
      Zi(Yu, e, t, o)
      return
    }
    if ((n.push(e), Array.isArray(e)))
      for (s = 0; s < e.length; s++) Jd(e[s], s, s, n, e, i, a)
    else {
      var l = {},
        f = Object.keys(e).sort(IC)
      for (s = 0; s < f.length; s++) {
        var p = f[s]
        Jd(e[p], p, s, n, e, i, a), (l[p] = e[p])
      }
      if (typeof o < 'u') li.push([o, t, e]), (o[t] = l)
      else return l
    }
    n.pop()
  }
}
function Ow(e) {
  return (
    (e =
      typeof e < 'u'
        ? e
        : function (t, r) {
            return r
          }),
    function (t, r) {
      if (Yo.length > 0)
        for (var n = 0; n < Yo.length; n++) {
          var o = Yo[n]
          if (o[1] === t && o[0] === r) {
            ;(r = o[2]), Yo.splice(n, 1)
            break
          }
        }
      return e.call(this, t, r)
    }
  )
}
var TC = Error,
  CC = EvalError,
  NC = RangeError,
  AC = ReferenceError,
  Dw = SyntaxError,
  nl = TypeError,
  OC = URIError,
  DC = function () {
    if (
      typeof Symbol != 'function' ||
      typeof Object.getOwnPropertySymbols != 'function'
    )
      return !1
    if (typeof Symbol.iterator == 'symbol') return !0
    var t = {},
      r = Symbol('test'),
      n = Object(r)
    if (
      typeof r == 'string' ||
      Object.prototype.toString.call(r) !== '[object Symbol]' ||
      Object.prototype.toString.call(n) !== '[object Symbol]'
    )
      return !1
    var o = 42
    t[r] = o
    for (r in t) return !1
    if (
      (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == 'function' &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1
    var i = Object.getOwnPropertySymbols(t)
    if (
      i.length !== 1 ||
      i[0] !== r ||
      !Object.prototype.propertyIsEnumerable.call(t, r)
    )
      return !1
    if (typeof Object.getOwnPropertyDescriptor == 'function') {
      var a = Object.getOwnPropertyDescriptor(t, r)
      if (a.value !== o || a.enumerable !== !0) return !1
    }
    return !0
  },
  wv = typeof Symbol < 'u' && Symbol,
  PC = DC,
  kC = function () {
    return typeof wv != 'function' ||
      typeof Symbol != 'function' ||
      typeof wv('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : PC()
  },
  jf = { __proto__: null, foo: {} },
  RC = Object,
  LC = function () {
    return { __proto__: jf }.foo === jf.foo && !(jf instanceof RC)
  },
  zC = 'Function.prototype.bind called on incompatible ',
  UC = Object.prototype.toString,
  FC = Math.max,
  $C = '[object Function]',
  bv = function (t, r) {
    for (var n = [], o = 0; o < t.length; o += 1) n[o] = t[o]
    for (var i = 0; i < r.length; i += 1) n[i + t.length] = r[i]
    return n
  },
  BC = function (t, r) {
    for (var n = [], o = r || 0, i = 0; o < t.length; o += 1, i += 1)
      n[i] = t[o]
    return n
  },
  WC = function (e, t) {
    for (var r = '', n = 0; n < e.length; n += 1)
      (r += e[n]), n + 1 < e.length && (r += t)
    return r
  },
  HC = function (t) {
    var r = this
    if (typeof r != 'function' || UC.apply(r) !== $C)
      throw new TypeError(zC + r)
    for (
      var n = BC(arguments, 1),
        o,
        i = function () {
          if (this instanceof o) {
            var p = r.apply(this, bv(n, arguments))
            return Object(p) === p ? p : this
          }
          return r.apply(t, bv(n, arguments))
        },
        a = FC(0, r.length - n.length),
        s = [],
        l = 0;
      l < a;
      l++
    )
      s[l] = '$' + l
    if (
      ((o = Function(
        'binder',
        'return function (' +
          WC(s, ',') +
          '){ return binder.apply(this,arguments); }'
      )(i)),
      r.prototype)
    ) {
      var f = function () {}
      ;(f.prototype = r.prototype),
        (o.prototype = new f()),
        (f.prototype = null)
    }
    return o
  },
  QC = HC,
  Dh = Function.prototype.bind || QC,
  VC = Function.prototype.call,
  YC = Object.prototype.hasOwnProperty,
  GC = Dh,
  qC = GC.call(VC, YC),
  $e,
  ZC = TC,
  KC = CC,
  XC = NC,
  JC = AC,
  ca = Dw,
  Ki = nl,
  eN = OC,
  Pw = Function,
  If = function (e) {
    try {
      return Pw('"use strict"; return (' + e + ').constructor;')()
    } catch {}
  },
  ei = Object.getOwnPropertyDescriptor
if (ei)
  try {
    ei({}, '')
  } catch {
    ei = null
  }
var Tf = function () {
    throw new Ki()
  },
  tN = ei
    ? (function () {
        try {
          return arguments.callee, Tf
        } catch {
          try {
            return ei(arguments, 'callee').get
          } catch {
            return Tf
          }
        }
      })()
    : Tf,
  xi = kC(),
  rN = LC(),
  zt =
    Object.getPrototypeOf ||
    (rN
      ? function (e) {
          return e.__proto__
        }
      : null),
  ji = {},
  nN = typeof Uint8Array > 'u' || !zt ? $e : zt(Uint8Array),
  ti = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError > 'u' ? $e : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? $e : ArrayBuffer,
    '%ArrayIteratorPrototype%': xi && zt ? zt([][Symbol.iterator]()) : $e,
    '%AsyncFromSyncIteratorPrototype%': $e,
    '%AsyncFunction%': ji,
    '%AsyncGenerator%': ji,
    '%AsyncGeneratorFunction%': ji,
    '%AsyncIteratorPrototype%': ji,
    '%Atomics%': typeof Atomics > 'u' ? $e : Atomics,
    '%BigInt%': typeof BigInt > 'u' ? $e : BigInt,
    '%BigInt64Array%': typeof BigInt64Array > 'u' ? $e : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array > 'u' ? $e : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView > 'u' ? $e : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': ZC,
    '%eval%': eval,
    '%EvalError%': KC,
    '%Float32Array%': typeof Float32Array > 'u' ? $e : Float32Array,
    '%Float64Array%': typeof Float64Array > 'u' ? $e : Float64Array,
    '%FinalizationRegistry%':
      typeof FinalizationRegistry > 'u' ? $e : FinalizationRegistry,
    '%Function%': Pw,
    '%GeneratorFunction%': ji,
    '%Int8Array%': typeof Int8Array > 'u' ? $e : Int8Array,
    '%Int16Array%': typeof Int16Array > 'u' ? $e : Int16Array,
    '%Int32Array%': typeof Int32Array > 'u' ? $e : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': xi && zt ? zt(zt([][Symbol.iterator]())) : $e,
    '%JSON%': typeof JSON == 'object' ? JSON : $e,
    '%Map%': typeof Map > 'u' ? $e : Map,
    '%MapIteratorPrototype%':
      typeof Map > 'u' || !xi || !zt ? $e : zt(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise > 'u' ? $e : Promise,
    '%Proxy%': typeof Proxy > 'u' ? $e : Proxy,
    '%RangeError%': XC,
    '%ReferenceError%': JC,
    '%Reflect%': typeof Reflect > 'u' ? $e : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set > 'u' ? $e : Set,
    '%SetIteratorPrototype%':
      typeof Set > 'u' || !xi || !zt ? $e : zt(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%':
      typeof SharedArrayBuffer > 'u' ? $e : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': xi && zt ? zt(''[Symbol.iterator]()) : $e,
    '%Symbol%': xi ? Symbol : $e,
    '%SyntaxError%': ca,
    '%ThrowTypeError%': tN,
    '%TypedArray%': nN,
    '%TypeError%': Ki,
    '%Uint8Array%': typeof Uint8Array > 'u' ? $e : Uint8Array,
    '%Uint8ClampedArray%':
      typeof Uint8ClampedArray > 'u' ? $e : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array > 'u' ? $e : Uint16Array,
    '%Uint32Array%': typeof Uint32Array > 'u' ? $e : Uint32Array,
    '%URIError%': eN,
    '%WeakMap%': typeof WeakMap > 'u' ? $e : WeakMap,
    '%WeakRef%': typeof WeakRef > 'u' ? $e : WeakRef,
    '%WeakSet%': typeof WeakSet > 'u' ? $e : WeakSet,
  }
if (zt)
  try {
    null.error
  } catch (e) {
    var oN = zt(zt(e))
    ti['%Error.prototype%'] = oN
  }
var iN = function e(t) {
    var r
    if (t === '%AsyncFunction%') r = If('async function () {}')
    else if (t === '%GeneratorFunction%') r = If('function* () {}')
    else if (t === '%AsyncGeneratorFunction%') r = If('async function* () {}')
    else if (t === '%AsyncGenerator%') {
      var n = e('%AsyncGeneratorFunction%')
      n && (r = n.prototype)
    } else if (t === '%AsyncIteratorPrototype%') {
      var o = e('%AsyncGenerator%')
      o && zt && (r = zt(o.prototype))
    }
    return (ti[t] = r), r
  },
  xv = {
    __proto__: null,
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': [
      'AsyncGeneratorFunction',
      'prototype',
      'prototype',
    ],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype'],
  },
  ol = Dh,
  Gu = qC,
  aN = ol.call(Function.call, Array.prototype.concat),
  sN = ol.call(Function.apply, Array.prototype.splice),
  Sv = ol.call(Function.call, String.prototype.replace),
  qu = ol.call(Function.call, String.prototype.slice),
  lN = ol.call(Function.call, RegExp.prototype.exec),
  uN =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  cN = /\\(\\)?/g,
  fN = function (t) {
    var r = qu(t, 0, 1),
      n = qu(t, -1)
    if (r === '%' && n !== '%')
      throw new ca('invalid intrinsic syntax, expected closing `%`')
    if (n === '%' && r !== '%')
      throw new ca('invalid intrinsic syntax, expected opening `%`')
    var o = []
    return (
      Sv(t, uN, function (i, a, s, l) {
        o[o.length] = s ? Sv(l, cN, '$1') : a || i
      }),
      o
    )
  },
  dN = function (t, r) {
    var n = t,
      o
    if ((Gu(xv, n) && ((o = xv[n]), (n = '%' + o[0] + '%')), Gu(ti, n))) {
      var i = ti[n]
      if ((i === ji && (i = iN(n)), typeof i > 'u' && !r))
        throw new Ki(
          'intrinsic ' +
            t +
            ' exists, but is not available. Please file an issue!'
        )
      return { alias: o, name: n, value: i }
    }
    throw new ca('intrinsic ' + t + ' does not exist!')
  },
  xa = function (t, r) {
    if (typeof t != 'string' || t.length === 0)
      throw new Ki('intrinsic name must be a non-empty string')
    if (arguments.length > 1 && typeof r != 'boolean')
      throw new Ki('"allowMissing" argument must be a boolean')
    if (lN(/^%?[^%]*%?$/, t) === null)
      throw new ca(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
      )
    var n = fN(t),
      o = n.length > 0 ? n[0] : '',
      i = dN('%' + o + '%', r),
      a = i.name,
      s = i.value,
      l = !1,
      f = i.alias
    f && ((o = f[0]), sN(n, aN([0, 1], f)))
    for (var p = 1, h = !0; p < n.length; p += 1) {
      var m = n[p],
        v = qu(m, 0, 1),
        w = qu(m, -1)
      if (
        (v === '"' ||
          v === "'" ||
          v === '`' ||
          w === '"' ||
          w === "'" ||
          w === '`') &&
        v !== w
      )
        throw new ca('property names with quotes must have matching quotes')
      if (
        ((m === 'constructor' || !h) && (l = !0),
        (o += '.' + m),
        (a = '%' + o + '%'),
        Gu(ti, a))
      )
        s = ti[a]
      else if (s != null) {
        if (!(m in s)) {
          if (!r)
            throw new Ki(
              'base intrinsic for ' +
                t +
                ' exists, but the property is not available.'
            )
          return
        }
        if (ei && p + 1 >= n.length) {
          var S = ei(s, m)
          ;(h = !!S),
            h && 'get' in S && !('originalValue' in S.get)
              ? (s = S.get)
              : (s = s[m])
        } else (h = Gu(s, m)), (s = s[m])
        h && !l && (ti[a] = s)
      }
    }
    return s
  },
  kw = { exports: {} },
  Cf,
  Ev
function Ph() {
  if (Ev) return Cf
  Ev = 1
  var e = xa,
    t = e('%Object.defineProperty%', !0) || !1
  if (t)
    try {
      t({}, 'a', { value: 1 })
    } catch {
      t = !1
    }
  return (Cf = t), Cf
}
var pN = xa,
  hu = pN('%Object.getOwnPropertyDescriptor%', !0)
if (hu)
  try {
    hu([], 'length')
  } catch {
    hu = null
  }
var Rw = hu,
  Mv = Ph(),
  hN = Dw,
  Si = nl,
  jv = Rw,
  mN = function (t, r, n) {
    if (!t || (typeof t != 'object' && typeof t != 'function'))
      throw new Si('`obj` must be an object or a function`')
    if (typeof r != 'string' && typeof r != 'symbol')
      throw new Si('`property` must be a string or a symbol`')
    if (
      arguments.length > 3 &&
      typeof arguments[3] != 'boolean' &&
      arguments[3] !== null
    )
      throw new Si('`nonEnumerable`, if provided, must be a boolean or null')
    if (
      arguments.length > 4 &&
      typeof arguments[4] != 'boolean' &&
      arguments[4] !== null
    )
      throw new Si('`nonWritable`, if provided, must be a boolean or null')
    if (
      arguments.length > 5 &&
      typeof arguments[5] != 'boolean' &&
      arguments[5] !== null
    )
      throw new Si('`nonConfigurable`, if provided, must be a boolean or null')
    if (arguments.length > 6 && typeof arguments[6] != 'boolean')
      throw new Si('`loose`, if provided, must be a boolean')
    var o = arguments.length > 3 ? arguments[3] : null,
      i = arguments.length > 4 ? arguments[4] : null,
      a = arguments.length > 5 ? arguments[5] : null,
      s = arguments.length > 6 ? arguments[6] : !1,
      l = !!jv && jv(t, r)
    if (Mv)
      Mv(t, r, {
        configurable: a === null && l ? l.configurable : !a,
        enumerable: o === null && l ? l.enumerable : !o,
        value: n,
        writable: i === null && l ? l.writable : !i,
      })
    else if (s || (!o && !i && !a)) t[r] = n
    else
      throw new hN(
        'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
      )
  },
  ep = Ph(),
  Lw = function () {
    return !!ep
  }
Lw.hasArrayLengthDefineBug = function () {
  if (!ep) return null
  try {
    return ep([], 'length', { value: 1 }).length !== 1
  } catch {
    return !0
  }
}
var yN = Lw,
  vN = xa,
  Iv = mN,
  gN = yN(),
  Tv = Rw,
  Cv = nl,
  _N = vN('%Math.floor%'),
  wN = function (t, r) {
    if (typeof t != 'function') throw new Cv('`fn` is not a function')
    if (typeof r != 'number' || r < 0 || r > 4294967295 || _N(r) !== r)
      throw new Cv('`length` must be a positive 32-bit integer')
    var n = arguments.length > 2 && !!arguments[2],
      o = !0,
      i = !0
    if ('length' in t && Tv) {
      var a = Tv(t, 'length')
      a && !a.configurable && (o = !1), a && !a.writable && (i = !1)
    }
    return (
      (o || i || !n) && (gN ? Iv(t, 'length', r, !0, !0) : Iv(t, 'length', r)),
      t
    )
  }
;(function (e) {
  var t = Dh,
    r = xa,
    n = wN,
    o = nl,
    i = r('%Function.prototype.apply%'),
    a = r('%Function.prototype.call%'),
    s = r('%Reflect.apply%', !0) || t.call(a, i),
    l = Ph(),
    f = r('%Math.max%')
  e.exports = function (m) {
    if (typeof m != 'function') throw new o('a function is required')
    var v = s(t, a, arguments)
    return n(v, 1 + f(0, m.length - (arguments.length - 1)), !0)
  }
  var p = function () {
    return s(t, i, arguments)
  }
  l ? l(e.exports, 'apply', { value: p }) : (e.exports.apply = p)
})(kw)
var bN = kw.exports,
  zw = xa,
  Uw = bN,
  xN = Uw(zw('String.prototype.indexOf')),
  SN = function (t, r) {
    var n = zw(t, !!r)
    return typeof n == 'function' && xN(t, '.prototype.') > -1 ? Uw(n) : n
  }
const EN = {},
  MN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: EN },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Fw = sc(MN)
var kh = typeof Map == 'function' && Map.prototype,
  Nf =
    Object.getOwnPropertyDescriptor && kh
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  Zu = kh && Nf && typeof Nf.get == 'function' ? Nf.get : null,
  Nv = kh && Map.prototype.forEach,
  Rh = typeof Set == 'function' && Set.prototype,
  Af =
    Object.getOwnPropertyDescriptor && Rh
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  Ku = Rh && Af && typeof Af.get == 'function' ? Af.get : null,
  Av = Rh && Set.prototype.forEach,
  jN = typeof WeakMap == 'function' && WeakMap.prototype,
  ys = jN ? WeakMap.prototype.has : null,
  IN = typeof WeakSet == 'function' && WeakSet.prototype,
  vs = IN ? WeakSet.prototype.has : null,
  TN = typeof WeakRef == 'function' && WeakRef.prototype,
  Ov = TN ? WeakRef.prototype.deref : null,
  CN = Boolean.prototype.valueOf,
  NN = Object.prototype.toString,
  AN = Function.prototype.toString,
  ON = String.prototype.match,
  Lh = String.prototype.slice,
  fo = String.prototype.replace,
  DN = String.prototype.toUpperCase,
  Dv = String.prototype.toLowerCase,
  $w = RegExp.prototype.test,
  Pv = Array.prototype.concat,
  Sn = Array.prototype.join,
  PN = Array.prototype.slice,
  kv = Math.floor,
  tp = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
  Of = Object.getOwnPropertySymbols,
  rp =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? Symbol.prototype.toString
      : null,
  fa = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
  Xt =
    typeof Symbol == 'function' &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === fa || 'symbol')
      ? Symbol.toStringTag
      : null,
  Bw = Object.prototype.propertyIsEnumerable,
  Rv =
    (typeof Reflect == 'function'
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__
        }
      : null)
function Lv(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    $w.call(/e/, t)
  )
    return t
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
  if (typeof e == 'number') {
    var n = e < 0 ? -kv(-e) : kv(e)
    if (n !== e) {
      var o = String(n),
        i = Lh.call(t, o.length + 1)
      return (
        fo.call(o, r, '$&_') +
        '.' +
        fo.call(fo.call(i, /([0-9]{3})/g, '$&_'), /_$/, '')
      )
    }
  }
  return fo.call(t, r, '$&_')
}
var np = Fw,
  zv = np.custom,
  Uv = Hw(zv) ? zv : null,
  kN = function e(t, r, n, o) {
    var i = r || {}
    if (
      oo(i, 'quoteStyle') &&
      i.quoteStyle !== 'single' &&
      i.quoteStyle !== 'double'
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"')
    if (
      oo(i, 'maxStringLength') &&
      (typeof i.maxStringLength == 'number'
        ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0
        : i.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      )
    var a = oo(i, 'customInspect') ? i.customInspect : !0
    if (typeof a != 'boolean' && a !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
      )
    if (
      oo(i, 'indent') &&
      i.indent !== null &&
      i.indent !== '	' &&
      !(parseInt(i.indent, 10) === i.indent && i.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      )
    if (oo(i, 'numericSeparator') && typeof i.numericSeparator != 'boolean')
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      )
    var s = i.numericSeparator
    if (typeof t > 'u') return 'undefined'
    if (t === null) return 'null'
    if (typeof t == 'boolean') return t ? 'true' : 'false'
    if (typeof t == 'string') return Vw(t, i)
    if (typeof t == 'number') {
      if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0'
      var l = String(t)
      return s ? Lv(t, l) : l
    }
    if (typeof t == 'bigint') {
      var f = String(t) + 'n'
      return s ? Lv(t, f) : f
    }
    var p = typeof i.depth > 'u' ? 5 : i.depth
    if ((typeof n > 'u' && (n = 0), n >= p && p > 0 && typeof t == 'object'))
      return op(t) ? '[Array]' : '[Object]'
    var h = JN(i, n)
    if (typeof o > 'u') o = []
    else if (Qw(o, t) >= 0) return '[Circular]'
    function m(B, V, T) {
      if ((V && ((o = PN.call(o)), o.push(V)), T)) {
        var N = { depth: i.depth }
        return (
          oo(i, 'quoteStyle') && (N.quoteStyle = i.quoteStyle),
          e(B, N, n + 1, o)
        )
      }
      return e(B, i, n + 1, o)
    }
    if (typeof t == 'function' && !Fv(t)) {
      var v = HN(t),
        w = Gl(t, m)
      return (
        '[Function' +
        (v ? ': ' + v : ' (anonymous)') +
        ']' +
        (w.length > 0 ? ' { ' + Sn.call(w, ', ') + ' }' : '')
      )
    }
    if (Hw(t)) {
      var S = fa
        ? fo.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
        : rp.call(t)
      return typeof t == 'object' && !fa ? qa(S) : S
    }
    if (ZN(t)) {
      for (
        var x = '<' + Dv.call(String(t.nodeName)),
          y = t.attributes || [],
          g = 0;
        g < y.length;
        g++
      )
        x += ' ' + y[g].name + '=' + Ww(RN(y[g].value), 'double', i)
      return (
        (x += '>'),
        t.childNodes && t.childNodes.length && (x += '...'),
        (x += '</' + Dv.call(String(t.nodeName)) + '>'),
        x
      )
    }
    if (op(t)) {
      if (t.length === 0) return '[]'
      var b = Gl(t, m)
      return h && !XN(b) ? '[' + ip(b, h) + ']' : '[ ' + Sn.call(b, ', ') + ' ]'
    }
    if (zN(t)) {
      var I = Gl(t, m)
      return !('cause' in Error.prototype) &&
        'cause' in t &&
        !Bw.call(t, 'cause')
        ? '{ [' +
            String(t) +
            '] ' +
            Sn.call(Pv.call('[cause]: ' + m(t.cause), I), ', ') +
            ' }'
        : I.length === 0
        ? '[' + String(t) + ']'
        : '{ [' + String(t) + '] ' + Sn.call(I, ', ') + ' }'
    }
    if (typeof t == 'object' && a) {
      if (Uv && typeof t[Uv] == 'function' && np) return np(t, { depth: p - n })
      if (a !== 'symbol' && typeof t.inspect == 'function') return t.inspect()
    }
    if (QN(t)) {
      var D = []
      return (
        Nv &&
          Nv.call(t, function (B, V) {
            D.push(m(V, t, !0) + ' => ' + m(B, t))
          }),
        $v('Map', Zu.call(t), D, h)
      )
    }
    if (GN(t)) {
      var E = []
      return (
        Av &&
          Av.call(t, function (B) {
            E.push(m(B, t))
          }),
        $v('Set', Ku.call(t), E, h)
      )
    }
    if (VN(t)) return Df('WeakMap')
    if (qN(t)) return Df('WeakSet')
    if (YN(t)) return Df('WeakRef')
    if (FN(t)) return qa(m(Number(t)))
    if (BN(t)) return qa(m(tp.call(t)))
    if ($N(t)) return qa(CN.call(t))
    if (UN(t)) return qa(m(String(t)))
    if (typeof window < 'u' && t === window) return '{ [object Window] }'
    if (t === pE) return '{ [object globalThis] }'
    if (!LN(t) && !Fv(t)) {
      var C = Gl(t, m),
        R = Rv
          ? Rv(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        W = t instanceof Object ? '' : 'null prototype',
        F =
          !R && Xt && Object(t) === t && Xt in t
            ? Lh.call(To(t), 8, -1)
            : W
            ? 'Object'
            : '',
        G =
          R || typeof t.constructor != 'function'
            ? ''
            : t.constructor.name
            ? t.constructor.name + ' '
            : '',
        K =
          G +
          (F || W
            ? '[' + Sn.call(Pv.call([], F || [], W || []), ': ') + '] '
            : '')
      return C.length === 0
        ? K + '{}'
        : h
        ? K + '{' + ip(C, h) + '}'
        : K + '{ ' + Sn.call(C, ', ') + ' }'
    }
    return String(t)
  }
function Ww(e, t, r) {
  var n = (r.quoteStyle || t) === 'double' ? '"' : "'"
  return n + e + n
}
function RN(e) {
  return fo.call(String(e), /"/g, '&quot;')
}
function op(e) {
  return (
    To(e) === '[object Array]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function LN(e) {
  return (
    To(e) === '[object Date]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function Fv(e) {
  return (
    To(e) === '[object RegExp]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function zN(e) {
  return (
    To(e) === '[object Error]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function UN(e) {
  return (
    To(e) === '[object String]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function FN(e) {
  return (
    To(e) === '[object Number]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function $N(e) {
  return (
    To(e) === '[object Boolean]' && (!Xt || !(typeof e == 'object' && Xt in e))
  )
}
function Hw(e) {
  if (fa) return e && typeof e == 'object' && e instanceof Symbol
  if (typeof e == 'symbol') return !0
  if (!e || typeof e != 'object' || !rp) return !1
  try {
    return rp.call(e), !0
  } catch {}
  return !1
}
function BN(e) {
  if (!e || typeof e != 'object' || !tp) return !1
  try {
    return tp.call(e), !0
  } catch {}
  return !1
}
var WN =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this
  }
function oo(e, t) {
  return WN.call(e, t)
}
function To(e) {
  return NN.call(e)
}
function HN(e) {
  if (e.name) return e.name
  var t = ON.call(AN.call(e), /^function\s*([\w$]+)/)
  return t ? t[1] : null
}
function Qw(e, t) {
  if (e.indexOf) return e.indexOf(t)
  for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
  return -1
}
function QN(e) {
  if (!Zu || !e || typeof e != 'object') return !1
  try {
    Zu.call(e)
    try {
      Ku.call(e)
    } catch {
      return !0
    }
    return e instanceof Map
  } catch {}
  return !1
}
function VN(e) {
  if (!ys || !e || typeof e != 'object') return !1
  try {
    ys.call(e, ys)
    try {
      vs.call(e, vs)
    } catch {
      return !0
    }
    return e instanceof WeakMap
  } catch {}
  return !1
}
function YN(e) {
  if (!Ov || !e || typeof e != 'object') return !1
  try {
    return Ov.call(e), !0
  } catch {}
  return !1
}
function GN(e) {
  if (!Ku || !e || typeof e != 'object') return !1
  try {
    Ku.call(e)
    try {
      Zu.call(e)
    } catch {
      return !0
    }
    return e instanceof Set
  } catch {}
  return !1
}
function qN(e) {
  if (!vs || !e || typeof e != 'object') return !1
  try {
    vs.call(e, vs)
    try {
      ys.call(e, ys)
    } catch {
      return !0
    }
    return e instanceof WeakSet
  } catch {}
  return !1
}
function ZN(e) {
  return !e || typeof e != 'object'
    ? !1
    : typeof HTMLElement < 'u' && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function'
}
function Vw(e, t) {
  if (e.length > t.maxStringLength) {
    var r = e.length - t.maxStringLength,
      n = '... ' + r + ' more character' + (r > 1 ? 's' : '')
    return Vw(Lh.call(e, 0, t.maxStringLength), t) + n
  }
  var o = fo.call(fo.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, KN)
  return Ww(o, 'single', t)
}
function KN(e) {
  var t = e.charCodeAt(0),
    r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t]
  return r ? '\\' + r : '\\x' + (t < 16 ? '0' : '') + DN.call(t.toString(16))
}
function qa(e) {
  return 'Object(' + e + ')'
}
function Df(e) {
  return e + ' { ? }'
}
function $v(e, t, r, n) {
  var o = n ? ip(r, n) : Sn.call(r, ', ')
  return e + ' (' + t + ') {' + o + '}'
}
function XN(e) {
  for (var t = 0; t < e.length; t++)
    if (
      Qw(
        e[t],
        `
`
      ) >= 0
    )
      return !1
  return !0
}
function JN(e, t) {
  var r
  if (e.indent === '	') r = '	'
  else if (typeof e.indent == 'number' && e.indent > 0)
    r = Sn.call(Array(e.indent + 1), ' ')
  else return null
  return { base: r, prev: Sn.call(Array(t + 1), r) }
}
function ip(e, t) {
  if (e.length === 0) return ''
  var r =
    `
` +
    t.prev +
    t.base
  return (
    r +
    Sn.call(e, ',' + r) +
    `
` +
    t.prev
  )
}
function Gl(e, t) {
  var r = op(e),
    n = []
  if (r) {
    n.length = e.length
    for (var o = 0; o < e.length; o++) n[o] = oo(e, o) ? t(e[o], e) : ''
  }
  var i = typeof Of == 'function' ? Of(e) : [],
    a
  if (fa) {
    a = {}
    for (var s = 0; s < i.length; s++) a['$' + i[s]] = i[s]
  }
  for (var l in e)
    oo(e, l) &&
      ((r && String(Number(l)) === l && l < e.length) ||
        (fa && a['$' + l] instanceof Symbol) ||
        ($w.call(/[^\w$]/, l)
          ? n.push(t(l, e) + ': ' + t(e[l], e))
          : n.push(l + ': ' + t(e[l], e))))
  if (typeof Of == 'function')
    for (var f = 0; f < i.length; f++)
      Bw.call(e, i[f]) && n.push('[' + t(i[f]) + ']: ' + t(e[i[f]], e))
  return n
}
var Yw = xa,
  Sa = SN,
  eA = kN,
  tA = nl,
  ql = Yw('%WeakMap%', !0),
  Zl = Yw('%Map%', !0),
  rA = Sa('WeakMap.prototype.get', !0),
  nA = Sa('WeakMap.prototype.set', !0),
  oA = Sa('WeakMap.prototype.has', !0),
  iA = Sa('Map.prototype.get', !0),
  aA = Sa('Map.prototype.set', !0),
  sA = Sa('Map.prototype.has', !0),
  zh = function (e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
      if (n.key === t)
        return (r.next = n.next), (n.next = e.next), (e.next = n), n
  },
  lA = function (e, t) {
    var r = zh(e, t)
    return r && r.value
  },
  uA = function (e, t, r) {
    var n = zh(e, t)
    n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r })
  },
  cA = function (e, t) {
    return !!zh(e, t)
  },
  fA = function () {
    var t,
      r,
      n,
      o = {
        assert: function (i) {
          if (!o.has(i)) throw new tA('Side channel does not contain ' + eA(i))
        },
        get: function (i) {
          if (ql && i && (typeof i == 'object' || typeof i == 'function')) {
            if (t) return rA(t, i)
          } else if (Zl) {
            if (r) return iA(r, i)
          } else if (n) return lA(n, i)
        },
        has: function (i) {
          if (ql && i && (typeof i == 'object' || typeof i == 'function')) {
            if (t) return oA(t, i)
          } else if (Zl) {
            if (r) return sA(r, i)
          } else if (n) return cA(n, i)
          return !1
        },
        set: function (i, a) {
          ql && i && (typeof i == 'object' || typeof i == 'function')
            ? (t || (t = new ql()), nA(t, i, a))
            : Zl
            ? (r || (r = new Zl()), aA(r, i, a))
            : (n || (n = { key: {}, next: null }), uA(n, i, a))
        },
      }
    return o
  },
  dA = String.prototype.replace,
  pA = /%20/g,
  Pf = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  Uh = {
    default: Pf.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return dA.call(e, pA, '+')
      },
      RFC3986: function (e) {
        return String(e)
      },
    },
    RFC1738: Pf.RFC1738,
    RFC3986: Pf.RFC3986,
  },
  hA = Uh,
  kf = Object.prototype.hasOwnProperty,
  Uo = Array.isArray,
  bn = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
    return e
  })(),
  mA = function (t) {
    for (; t.length > 1; ) {
      var r = t.pop(),
        n = r.obj[r.prop]
      if (Uo(n)) {
        for (var o = [], i = 0; i < n.length; ++i)
          typeof n[i] < 'u' && o.push(n[i])
        r.obj[r.prop] = o
      }
    }
  },
  Gw = function (t, r) {
    for (
      var n = r && r.plainObjects ? Object.create(null) : {}, o = 0;
      o < t.length;
      ++o
    )
      typeof t[o] < 'u' && (n[o] = t[o])
    return n
  },
  yA = function e(t, r, n) {
    if (!r) return t
    if (typeof r != 'object') {
      if (Uo(t)) t.push(r)
      else if (t && typeof t == 'object')
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !kf.call(Object.prototype, r)) &&
          (t[r] = !0)
      else return [t, r]
      return t
    }
    if (!t || typeof t != 'object') return [t].concat(r)
    var o = t
    return (
      Uo(t) && !Uo(r) && (o = Gw(t, n)),
      Uo(t) && Uo(r)
        ? (r.forEach(function (i, a) {
            if (kf.call(t, a)) {
              var s = t[a]
              s && typeof s == 'object' && i && typeof i == 'object'
                ? (t[a] = e(s, i, n))
                : t.push(i)
            } else t[a] = i
          }),
          t)
        : Object.keys(r).reduce(function (i, a) {
            var s = r[a]
            return kf.call(i, a) ? (i[a] = e(i[a], s, n)) : (i[a] = s), i
          }, o)
    )
  },
  vA = function (t, r) {
    return Object.keys(r).reduce(function (n, o) {
      return (n[o] = r[o]), n
    }, t)
  },
  gA = function (e, t, r) {
    var n = e.replace(/\+/g, ' ')
    if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape)
    try {
      return decodeURIComponent(n)
    } catch {
      return n
    }
  },
  _A = function (t, r, n, o, i) {
    if (t.length === 0) return t
    var a = t
    if (
      (typeof t == 'symbol'
        ? (a = Symbol.prototype.toString.call(t))
        : typeof t != 'string' && (a = String(t)),
      n === 'iso-8859-1')
    )
      return escape(a).replace(/%u[0-9a-f]{4}/gi, function (p) {
        return '%26%23' + parseInt(p.slice(2), 16) + '%3B'
      })
    for (var s = '', l = 0; l < a.length; ++l) {
      var f = a.charCodeAt(l)
      if (
        f === 45 ||
        f === 46 ||
        f === 95 ||
        f === 126 ||
        (f >= 48 && f <= 57) ||
        (f >= 65 && f <= 90) ||
        (f >= 97 && f <= 122) ||
        (i === hA.RFC1738 && (f === 40 || f === 41))
      ) {
        s += a.charAt(l)
        continue
      }
      if (f < 128) {
        s = s + bn[f]
        continue
      }
      if (f < 2048) {
        s = s + (bn[192 | (f >> 6)] + bn[128 | (f & 63)])
        continue
      }
      if (f < 55296 || f >= 57344) {
        s =
          s +
          (bn[224 | (f >> 12)] + bn[128 | ((f >> 6) & 63)] + bn[128 | (f & 63)])
        continue
      }
      ;(l += 1),
        (f = 65536 + (((f & 1023) << 10) | (a.charCodeAt(l) & 1023))),
        (s +=
          bn[240 | (f >> 18)] +
          bn[128 | ((f >> 12) & 63)] +
          bn[128 | ((f >> 6) & 63)] +
          bn[128 | (f & 63)])
    }
    return s
  },
  wA = function (t) {
    for (
      var r = [{ obj: { o: t }, prop: 'o' }], n = [], o = 0;
      o < r.length;
      ++o
    )
      for (
        var i = r[o], a = i.obj[i.prop], s = Object.keys(a), l = 0;
        l < s.length;
        ++l
      ) {
        var f = s[l],
          p = a[f]
        typeof p == 'object' &&
          p !== null &&
          n.indexOf(p) === -1 &&
          (r.push({ obj: a, prop: f }), n.push(p))
      }
    return mA(r), t
  },
  bA = function (t) {
    return Object.prototype.toString.call(t) === '[object RegExp]'
  },
  xA = function (t) {
    return !t || typeof t != 'object'
      ? !1
      : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
  },
  SA = function (t, r) {
    return [].concat(t, r)
  },
  EA = function (t, r) {
    if (Uo(t)) {
      for (var n = [], o = 0; o < t.length; o += 1) n.push(r(t[o]))
      return n
    }
    return r(t)
  },
  qw = {
    arrayToObject: Gw,
    assign: vA,
    combine: SA,
    compact: wA,
    decode: gA,
    encode: _A,
    isBuffer: xA,
    isRegExp: bA,
    maybeMap: EA,
    merge: yA,
  },
  Zw = fA,
  ap = qw,
  gs = Uh,
  MA = Object.prototype.hasOwnProperty,
  Bv = {
    brackets: function (t) {
      return t + '[]'
    },
    comma: 'comma',
    indices: function (t, r) {
      return t + '[' + r + ']'
    },
    repeat: function (t) {
      return t
    },
  },
  Ln = Array.isArray,
  jA = String.prototype.split,
  IA = Array.prototype.push,
  Kw = function (e, t) {
    IA.apply(e, Ln(t) ? t : [t])
  },
  TA = Date.prototype.toISOString,
  Wv = gs.default,
  Bt = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: ap.encode,
    encodeValuesOnly: !1,
    format: Wv,
    formatter: gs.formatters[Wv],
    indices: !1,
    serializeDate: function (t) {
      return TA.call(t)
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  CA = function (t) {
    return (
      typeof t == 'string' ||
      typeof t == 'number' ||
      typeof t == 'boolean' ||
      typeof t == 'symbol' ||
      typeof t == 'bigint'
    )
  },
  Rf = {},
  NA = function e(t, r, n, o, i, a, s, l, f, p, h, m, v, w, S, x) {
    for (var y = t, g = x, b = 0, I = !1; (g = g.get(Rf)) !== void 0 && !I; ) {
      var D = g.get(t)
      if (((b += 1), typeof D < 'u')) {
        if (D === b) throw new RangeError('Cyclic object value')
        I = !0
      }
      typeof g.get(Rf) > 'u' && (b = 0)
    }
    if (
      (typeof l == 'function'
        ? (y = l(r, y))
        : y instanceof Date
        ? (y = h(y))
        : n === 'comma' &&
          Ln(y) &&
          (y = ap.maybeMap(y, function (Y) {
            return Y instanceof Date ? h(Y) : Y
          })),
      y === null)
    ) {
      if (i) return s && !w ? s(r, Bt.encoder, S, 'key', m) : r
      y = ''
    }
    if (CA(y) || ap.isBuffer(y)) {
      if (s) {
        var E = w ? r : s(r, Bt.encoder, S, 'key', m)
        if (n === 'comma' && w) {
          for (
            var C = jA.call(String(y), ','), R = '', W = 0;
            W < C.length;
            ++W
          )
            R += (W === 0 ? '' : ',') + v(s(C[W], Bt.encoder, S, 'value', m))
          return [v(E) + (o && Ln(y) && C.length === 1 ? '[]' : '') + '=' + R]
        }
        return [v(E) + '=' + v(s(y, Bt.encoder, S, 'value', m))]
      }
      return [v(r) + '=' + v(String(y))]
    }
    var F = []
    if (typeof y > 'u') return F
    var G
    if (n === 'comma' && Ln(y))
      G = [{ value: y.length > 0 ? y.join(',') || null : void 0 }]
    else if (Ln(l)) G = l
    else {
      var K = Object.keys(y)
      G = f ? K.sort(f) : K
    }
    for (
      var B = o && Ln(y) && y.length === 1 ? r + '[]' : r, V = 0;
      V < G.length;
      ++V
    ) {
      var T = G[V],
        N = typeof T == 'object' && typeof T.value < 'u' ? T.value : y[T]
      if (!(a && N === null)) {
        var P = Ln(y)
          ? typeof n == 'function'
            ? n(B, T)
            : B
          : B + (p ? '.' + T : '[' + T + ']')
        x.set(t, b)
        var k = Zw()
        k.set(Rf, x), Kw(F, e(N, P, n, o, i, a, s, l, f, p, h, m, v, w, S, k))
      }
    }
    return F
  },
  AA = function (t) {
    if (!t) return Bt
    if (
      t.encoder !== null &&
      typeof t.encoder < 'u' &&
      typeof t.encoder != 'function'
    )
      throw new TypeError('Encoder has to be a function.')
    var r = t.charset || Bt.charset
    if (
      typeof t.charset < 'u' &&
      t.charset !== 'utf-8' &&
      t.charset !== 'iso-8859-1'
    )
      throw new TypeError(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      )
    var n = gs.default
    if (typeof t.format < 'u') {
      if (!MA.call(gs.formatters, t.format))
        throw new TypeError('Unknown format option provided.')
      n = t.format
    }
    var o = gs.formatters[n],
      i = Bt.filter
    return (
      (typeof t.filter == 'function' || Ln(t.filter)) && (i = t.filter),
      {
        addQueryPrefix:
          typeof t.addQueryPrefix == 'boolean'
            ? t.addQueryPrefix
            : Bt.addQueryPrefix,
        allowDots: typeof t.allowDots > 'u' ? Bt.allowDots : !!t.allowDots,
        charset: r,
        charsetSentinel:
          typeof t.charsetSentinel == 'boolean'
            ? t.charsetSentinel
            : Bt.charsetSentinel,
        delimiter: typeof t.delimiter > 'u' ? Bt.delimiter : t.delimiter,
        encode: typeof t.encode == 'boolean' ? t.encode : Bt.encode,
        encoder: typeof t.encoder == 'function' ? t.encoder : Bt.encoder,
        encodeValuesOnly:
          typeof t.encodeValuesOnly == 'boolean'
            ? t.encodeValuesOnly
            : Bt.encodeValuesOnly,
        filter: i,
        format: n,
        formatter: o,
        serializeDate:
          typeof t.serializeDate == 'function'
            ? t.serializeDate
            : Bt.serializeDate,
        skipNulls: typeof t.skipNulls == 'boolean' ? t.skipNulls : Bt.skipNulls,
        sort: typeof t.sort == 'function' ? t.sort : null,
        strictNullHandling:
          typeof t.strictNullHandling == 'boolean'
            ? t.strictNullHandling
            : Bt.strictNullHandling,
      }
    )
  },
  OA = function (e, t) {
    var r = e,
      n = AA(t),
      o,
      i
    typeof n.filter == 'function'
      ? ((i = n.filter), (r = i('', r)))
      : Ln(n.filter) && ((i = n.filter), (o = i))
    var a = []
    if (typeof r != 'object' || r === null) return ''
    var s
    t && t.arrayFormat in Bv
      ? (s = t.arrayFormat)
      : t && 'indices' in t
      ? (s = t.indices ? 'indices' : 'repeat')
      : (s = 'indices')
    var l = Bv[s]
    if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
    var f = l === 'comma' && t && t.commaRoundTrip
    o || (o = Object.keys(r)), n.sort && o.sort(n.sort)
    for (var p = Zw(), h = 0; h < o.length; ++h) {
      var m = o[h]
      ;(n.skipNulls && r[m] === null) ||
        Kw(
          a,
          NA(
            r[m],
            m,
            l,
            f,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            p
          )
        )
    }
    var v = a.join(n.delimiter),
      w = n.addQueryPrefix === !0 ? '?' : ''
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1'
          ? (w += 'utf8=%26%2310003%3B&')
          : (w += 'utf8=%E2%9C%93&')),
      v.length > 0 ? w + v : ''
    )
  },
  da = qw,
  sp = Object.prototype.hasOwnProperty,
  DA = Array.isArray,
  Lt = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: !1,
    comma: !1,
    decoder: da.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  PA = function (e) {
    return e.replace(/&#(\d+);/g, function (t, r) {
      return String.fromCharCode(parseInt(r, 10))
    })
  },
  Xw = function (e, t) {
    return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
      ? e.split(',')
      : e
  },
  kA = 'utf8=%26%2310003%3B',
  RA = 'utf8=%E2%9C%93',
  LA = function (t, r) {
    var n = {},
      o = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
      i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
      a = o.split(r.delimiter, i),
      s = -1,
      l,
      f = r.charset
    if (r.charsetSentinel)
      for (l = 0; l < a.length; ++l)
        a[l].indexOf('utf8=') === 0 &&
          (a[l] === RA ? (f = 'utf-8') : a[l] === kA && (f = 'iso-8859-1'),
          (s = l),
          (l = a.length))
    for (l = 0; l < a.length; ++l)
      if (l !== s) {
        var p = a[l],
          h = p.indexOf(']='),
          m = h === -1 ? p.indexOf('=') : h + 1,
          v,
          w
        m === -1
          ? ((v = r.decoder(p, Lt.decoder, f, 'key')),
            (w = r.strictNullHandling ? null : ''))
          : ((v = r.decoder(p.slice(0, m), Lt.decoder, f, 'key')),
            (w = da.maybeMap(Xw(p.slice(m + 1), r), function (S) {
              return r.decoder(S, Lt.decoder, f, 'value')
            }))),
          w && r.interpretNumericEntities && f === 'iso-8859-1' && (w = PA(w)),
          p.indexOf('[]=') > -1 && (w = DA(w) ? [w] : w),
          sp.call(n, v) ? (n[v] = da.combine(n[v], w)) : (n[v] = w)
      }
    return n
  },
  zA = function (e, t, r, n) {
    for (var o = n ? t : Xw(t, r), i = e.length - 1; i >= 0; --i) {
      var a,
        s = e[i]
      if (s === '[]' && r.parseArrays) a = [].concat(o)
      else {
        a = r.plainObjects ? Object.create(null) : {}
        var l =
            s.charAt(0) === '[' && s.charAt(s.length - 1) === ']'
              ? s.slice(1, -1)
              : s,
          f = parseInt(l, 10)
        !r.parseArrays && l === ''
          ? (a = { 0: o })
          : !isNaN(f) &&
            s !== l &&
            String(f) === l &&
            f >= 0 &&
            r.parseArrays &&
            f <= r.arrayLimit
          ? ((a = []), (a[f] = o))
          : l !== '__proto__' && (a[l] = o)
      }
      o = a
    }
    return o
  },
  UA = function (t, r, n, o) {
    if (t) {
      var i = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
        a = /(\[[^[\]]*])/,
        s = /(\[[^[\]]*])/g,
        l = n.depth > 0 && a.exec(i),
        f = l ? i.slice(0, l.index) : i,
        p = []
      if (f) {
        if (
          !n.plainObjects &&
          sp.call(Object.prototype, f) &&
          !n.allowPrototypes
        )
          return
        p.push(f)
      }
      for (
        var h = 0;
        n.depth > 0 && (l = s.exec(i)) !== null && h < n.depth;

      ) {
        if (
          ((h += 1),
          !n.plainObjects &&
            sp.call(Object.prototype, l[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return
        p.push(l[1])
      }
      return l && p.push('[' + i.slice(l.index) + ']'), zA(p, r, n, o)
    }
  },
  FA = function (t) {
    if (!t) return Lt
    if (
      t.decoder !== null &&
      t.decoder !== void 0 &&
      typeof t.decoder != 'function'
    )
      throw new TypeError('Decoder has to be a function.')
    if (
      typeof t.charset < 'u' &&
      t.charset !== 'utf-8' &&
      t.charset !== 'iso-8859-1'
    )
      throw new TypeError(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      )
    var r = typeof t.charset > 'u' ? Lt.charset : t.charset
    return {
      allowDots: typeof t.allowDots > 'u' ? Lt.allowDots : !!t.allowDots,
      allowPrototypes:
        typeof t.allowPrototypes == 'boolean'
          ? t.allowPrototypes
          : Lt.allowPrototypes,
      allowSparse:
        typeof t.allowSparse == 'boolean' ? t.allowSparse : Lt.allowSparse,
      arrayLimit:
        typeof t.arrayLimit == 'number' ? t.arrayLimit : Lt.arrayLimit,
      charset: r,
      charsetSentinel:
        typeof t.charsetSentinel == 'boolean'
          ? t.charsetSentinel
          : Lt.charsetSentinel,
      comma: typeof t.comma == 'boolean' ? t.comma : Lt.comma,
      decoder: typeof t.decoder == 'function' ? t.decoder : Lt.decoder,
      delimiter:
        typeof t.delimiter == 'string' || da.isRegExp(t.delimiter)
          ? t.delimiter
          : Lt.delimiter,
      depth: typeof t.depth == 'number' || t.depth === !1 ? +t.depth : Lt.depth,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof t.interpretNumericEntities == 'boolean'
          ? t.interpretNumericEntities
          : Lt.interpretNumericEntities,
      parameterLimit:
        typeof t.parameterLimit == 'number'
          ? t.parameterLimit
          : Lt.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects:
        typeof t.plainObjects == 'boolean' ? t.plainObjects : Lt.plainObjects,
      strictNullHandling:
        typeof t.strictNullHandling == 'boolean'
          ? t.strictNullHandling
          : Lt.strictNullHandling,
    }
  },
  $A = function (e, t) {
    var r = FA(t)
    if (e === '' || e === null || typeof e > 'u')
      return r.plainObjects ? Object.create(null) : {}
    for (
      var n = typeof e == 'string' ? LA(e, r) : e,
        o = r.plainObjects ? Object.create(null) : {},
        i = Object.keys(n),
        a = 0;
      a < i.length;
      ++a
    ) {
      var s = i[a],
        l = UA(s, n[s], r, typeof e == 'string')
      o = da.merge(o, l, r)
    }
    return r.allowSparse === !0 ? o : da.compact(o)
  },
  BA = OA,
  WA = $A,
  HA = Uh,
  QA = { formats: HA, parse: WA, stringify: BA },
  jc = {}
;(function (e) {
  function t(i) {
    '@babel/helpers - typeof'
    return (
      (t =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (a) {
              return typeof a
            }
          : function (a) {
              return a &&
                typeof Symbol == 'function' &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? 'symbol'
                : typeof a
            }),
      t(i)
    )
  }
  function r(i, a) {
    var s = (typeof Symbol < 'u' && i[Symbol.iterator]) || i['@@iterator']
    if (!s) {
      if (
        Array.isArray(i) ||
        (s = n(i)) ||
        (a && i && typeof i.length == 'number')
      ) {
        s && (i = s)
        var l = 0,
          f = function () {}
        return {
          s: f,
          n: function () {
            return l >= i.length ? { done: !0 } : { done: !1, value: i[l++] }
          },
          e: function (w) {
            throw w
          },
          f,
        }
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var p = !0,
      h = !1,
      m
    return {
      s: function () {
        s = s.call(i)
      },
      n: function () {
        var w = s.next()
        return (p = w.done), w
      },
      e: function (w) {
        ;(h = !0), (m = w)
      },
      f: function () {
        try {
          !p && s.return != null && s.return()
        } finally {
          if (h) throw m
        }
      },
    }
  }
  function n(i, a) {
    if (i) {
      if (typeof i == 'string') return o(i, a)
      var s = Object.prototype.toString.call(i).slice(8, -1)
      if (
        (s === 'Object' && i.constructor && (s = i.constructor.name),
        s === 'Map' || s === 'Set')
      )
        return Array.from(i)
      if (
        s === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
      )
        return o(i, a)
    }
  }
  function o(i, a) {
    ;(a == null || a > i.length) && (a = i.length)
    for (var s = 0, l = new Array(a); s < a; s++) l[s] = i[s]
    return l
  }
  ;(e.type = function (i) {
    return i.split(/ *; */).shift()
  }),
    (e.params = function (i) {
      var a = {},
        s = r(i.split(/ *; */)),
        l
      try {
        for (s.s(); !(l = s.n()).done; ) {
          var f = l.value,
            p = f.split(/ *= */),
            h = p.shift(),
            m = p.shift()
          h && m && (a[h] = m)
        }
      } catch (v) {
        s.e(v)
      } finally {
        s.f()
      }
      return a
    }),
    (e.parseLinks = function (i) {
      var a = {},
        s = r(i.split(/ *, */)),
        l
      try {
        for (s.s(); !(l = s.n()).done; ) {
          var f = l.value,
            p = f.split(/ *; */),
            h = p[0].slice(1, -1),
            m = p[1].split(/ *= */)[1].slice(1, -1)
          a[m] = h
        }
      } catch (v) {
        s.e(v)
      } finally {
        s.f()
      }
      return a
    }),
    (e.cleanHeader = function (i, a) {
      return (
        delete i['content-type'],
        delete i['content-length'],
        delete i['transfer-encoding'],
        delete i.host,
        a && (delete i.authorization, delete i.cookie),
        i
      )
    }),
    (e.isObject = function (i) {
      return i !== null && t(i) === 'object'
    }),
    (e.hasOwn =
      Object.hasOwn ||
      function (i, a) {
        if (i == null)
          throw new TypeError('Cannot convert undefined or null to object')
        return Object.prototype.hasOwnProperty.call(new Object(i), a)
      }),
    (e.mixin = function (i, a) {
      for (var s in a) e.hasOwn(a, s) && (i[s] = a[s])
    })
})(jc)
function lp(e) {
  '@babel/helpers - typeof'
  return (
    (lp =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    lp(e)
  )
}
var Lf = Fw,
  Jw = jc,
  Xu = Jw.isObject,
  Qs = Jw.hasOwn,
  VA = Ge
function Ge() {}
Ge.prototype.clearTimeout = function () {
  return (
    clearTimeout(this._timer),
    clearTimeout(this._responseTimeoutTimer),
    clearTimeout(this._uploadTimeoutTimer),
    delete this._timer,
    delete this._responseTimeoutTimer,
    delete this._uploadTimeoutTimer,
    this
  )
}
Ge.prototype.parse = function (e) {
  return (this._parser = e), this
}
Ge.prototype.responseType = function (e) {
  return (this._responseType = e), this
}
Ge.prototype.serialize = function (e) {
  return (this._serializer = e), this
}
Ge.prototype.timeout = function (e) {
  if (!e || lp(e) !== 'object')
    return (
      (this._timeout = e),
      (this._responseTimeout = 0),
      (this._uploadTimeout = 0),
      this
    )
  for (var t in e)
    if (Qs(e, t))
      switch (t) {
        case 'deadline':
          this._timeout = e.deadline
          break
        case 'response':
          this._responseTimeout = e.response
          break
        case 'upload':
          this._uploadTimeout = e.upload
          break
        default:
          console.warn('Unknown timeout option', t)
      }
  return this
}
Ge.prototype.retry = function (e, t) {
  return (
    (arguments.length === 0 || e === !0) && (e = 1),
    e <= 0 && (e = 0),
    (this._maxRetries = e),
    (this._retries = 0),
    (this._retryCallback = t),
    this
  )
}
var YA = new Set([
    'ETIMEDOUT',
    'ECONNRESET',
    'EADDRINUSE',
    'ECONNREFUSED',
    'EPIPE',
    'ENOTFOUND',
    'ENETUNREACH',
    'EAI_AGAIN',
  ]),
  GA = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524])
Ge.prototype._shouldRetry = function (e, t) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1
  if (this._retryCallback)
    try {
      var r = this._retryCallback(e, t)
      if (r === !0) return !0
      if (r === !1) return !1
    } catch (n) {
      console.error(n)
    }
  return !!(
    (t && t.status && GA.has(t.status)) ||
    (e &&
      ((e.code && YA.has(e.code)) ||
        (e.timeout && e.code === 'ECONNABORTED') ||
        e.crossDomain))
  )
}
Ge.prototype._retry = function () {
  return (
    this.clearTimeout(),
    this.req && ((this.req = null), (this.req = this.request())),
    (this._aborted = !1),
    (this.timedout = !1),
    (this.timedoutError = null),
    this._end()
  )
}
Ge.prototype.then = function (e, t) {
  var r = this
  if (!this._fullfilledPromise) {
    var n = this
    this._endCalled &&
      console.warn(
        'Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises'
      ),
      (this._fullfilledPromise = new Promise(function (o, i) {
        n.on('abort', function () {
          if (!(r._maxRetries && r._maxRetries > r._retries)) {
            if (r.timedout && r.timedoutError) {
              i(r.timedoutError)
              return
            }
            var a = new Error('Aborted')
            ;(a.code = 'ABORTED'),
              (a.status = r.status),
              (a.method = r.method),
              (a.url = r.url),
              i(a)
          }
        }),
          n.end(function (a, s) {
            a ? i(a) : o(s)
          })
      }))
  }
  return this._fullfilledPromise.then(e, t)
}
Ge.prototype.catch = function (e) {
  return this.then(void 0, e)
}
Ge.prototype.use = function (e) {
  return e(this), this
}
Ge.prototype.ok = function (e) {
  if (typeof e != 'function') throw new Error('Callback required')
  return (this._okCallback = e), this
}
Ge.prototype._isResponseOK = function (e) {
  return e
    ? this._okCallback
      ? this._okCallback(e)
      : e.status >= 200 && e.status < 300
    : !1
}
Ge.prototype.get = function (e) {
  return this._header[e.toLowerCase()]
}
Ge.prototype.getHeader = Ge.prototype.get
Ge.prototype.set = function (e, t) {
  if (Xu(e)) {
    for (var r in e) Qs(e, r) && this.set(r, e[r])
    return this
  }
  return (this._header[e.toLowerCase()] = t), (this.header[e] = t), this
}
Ge.prototype.unset = function (e) {
  return delete this._header[e.toLowerCase()], delete this.header[e], this
}
Ge.prototype.field = function (e, t, r) {
  if (e == null) throw new Error('.field(name, val) name can not be empty')
  if (this._data)
    throw new Error(
      ".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"
    )
  if (Xu(e)) {
    for (var n in e) Qs(e, n) && this.field(n, e[n])
    return this
  }
  if (Array.isArray(t)) {
    for (var o in t) Qs(t, o) && this.field(e, t[o])
    return this
  }
  if (t == null) throw new Error('.field(name, val) val can not be empty')
  return (
    typeof t == 'boolean' && (t = String(t)),
    this._getFormData().append(e, t, r),
    this
  )
}
Ge.prototype.abort = function () {
  if (this._aborted) return this
  if (((this._aborted = !0), this.xhr && this.xhr.abort(), this.req)) {
    if (Lf.gte(process.version, 'v13.0.0') && Lf.lt(process.version, 'v14.0.0'))
      throw new Error(
        'Superagent does not work in v13 properly with abort() due to Node.js core changes'
      )
    Lf.gte(process.version, 'v14.0.0') && (this.req.destroyed = !0),
      this.req.abort()
  }
  return this.clearTimeout(), this.emit('abort'), this
}
Ge.prototype._auth = function (e, t, r, n) {
  switch (r.type) {
    case 'basic':
      this.set('Authorization', 'Basic '.concat(n(''.concat(e, ':').concat(t))))
      break
    case 'auto':
      ;(this.username = e), (this.password = t)
      break
    case 'bearer':
      this.set('Authorization', 'Bearer '.concat(e))
      break
  }
  return this
}
Ge.prototype.withCredentials = function (e) {
  return e === void 0 && (e = !0), (this._withCredentials = e), this
}
Ge.prototype.redirects = function (e) {
  return (this._maxRedirects = e), this
}
Ge.prototype.maxResponseSize = function (e) {
  if (typeof e != 'number') throw new TypeError('Invalid argument')
  return (this._maxResponseSize = e), this
}
Ge.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  }
}
Ge.prototype.send = function (e) {
  var t = Xu(e),
    r = this._header['content-type']
  if (this._formData)
    throw new Error(
      ".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"
    )
  if (t && !this._data)
    Array.isArray(e) ? (this._data = []) : this._isHost(e) || (this._data = {})
  else if (e && this._data && this._isHost(this._data))
    throw new Error("Can't merge these send calls")
  if (t && Xu(this._data)) for (var n in e) Qs(e, n) && (this._data[n] = e[n])
  else
    typeof e == 'string'
      ? (r || this.type('form'),
        (r = this._header['content-type']),
        r && (r = r.toLowerCase().trim()),
        r === 'application/x-www-form-urlencoded'
          ? (this._data = this._data ? ''.concat(this._data, '&').concat(e) : e)
          : (this._data = (this._data || '') + e))
      : (this._data = e)
  return !t || this._isHost(e) ? this : (r || this.type('json'), this)
}
Ge.prototype.sortQuery = function (e) {
  return (this._sort = typeof e > 'u' ? !0 : e), this
}
Ge.prototype._finalizeQueryString = function () {
  var e = this._query.join('&')
  if (
    (e && (this.url += (this.url.includes('?') ? '&' : '?') + e),
    (this._query.length = 0),
    this._sort)
  ) {
    var t = this.url.indexOf('?')
    if (t >= 0) {
      var r = this.url.slice(t + 1).split('&')
      typeof this._sort == 'function' ? r.sort(this._sort) : r.sort(),
        (this.url = this.url.slice(0, t) + '?' + r.join('&'))
    }
  }
}
Ge.prototype._appendQueryString = function () {
  console.warn('Unsupported')
}
Ge.prototype._timeoutError = function (e, t, r) {
  if (!this._aborted) {
    var n = new Error(''.concat(e + t, 'ms exceeded'))
    ;(n.timeout = t),
      (n.code = 'ECONNABORTED'),
      (n.errno = r),
      (this.timedout = !0),
      (this.timedoutError = n),
      this.abort(),
      this.callback(n)
  }
}
Ge.prototype._setTimeouts = function () {
  var e = this
  this._timeout &&
    !this._timer &&
    (this._timer = setTimeout(function () {
      e._timeoutError('Timeout of ', e._timeout, 'ETIME')
    }, this._timeout)),
    this._responseTimeout &&
      !this._responseTimeoutTimer &&
      (this._responseTimeoutTimer = setTimeout(function () {
        e._timeoutError('Response timeout of ', e._responseTimeout, 'ETIMEDOUT')
      }, this._responseTimeout))
}
var zf = jc,
  qA = Ic
function Ic() {}
Ic.prototype.get = function (e) {
  return this.header[e.toLowerCase()]
}
Ic.prototype._setHeaderProperties = function (e) {
  var t = e['content-type'] || ''
  this.type = zf.type(t)
  var r = zf.params(t)
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && (this[n] = r[n])
  this.links = {}
  try {
    e.link && (this.links = zf.parseLinks(e.link))
  } catch {}
}
Ic.prototype._setStatusProperties = function (e) {
  var t = Math.trunc(e / 100)
  ;(this.statusCode = e),
    (this.status = this.statusCode),
    (this.statusType = t),
    (this.info = t === 1),
    (this.ok = t === 2),
    (this.redirect = t === 3),
    (this.clientError = t === 4),
    (this.serverError = t === 5),
    (this.error = t === 4 || t === 5 ? this.toError() : !1),
    (this.created = e === 201),
    (this.accepted = e === 202),
    (this.noContent = e === 204),
    (this.badRequest = e === 400),
    (this.unauthorized = e === 401),
    (this.notAcceptable = e === 406),
    (this.forbidden = e === 403),
    (this.notFound = e === 404),
    (this.unprocessableEntity = e === 422)
}
function ZA(e) {
  return JA(e) || XA(e) || eb(e) || KA()
}
function KA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function XA(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function JA(e) {
  if (Array.isArray(e)) return up(e)
}
function eO(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = eb(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      r && (e = r)
      var n = 0,
        o = function () {}
      return {
        s: o,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
        },
        e: function (f) {
          throw f
        },
        f: o,
      }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
  }
  var i = !0,
    a = !1,
    s
  return {
    s: function () {
      r = r.call(e)
    },
    n: function () {
      var f = r.next()
      return (i = f.done), f
    },
    e: function (f) {
      ;(a = !0), (s = f)
    },
    f: function () {
      try {
        !i && r.return != null && r.return()
      } finally {
        if (a) throw s
      }
    },
  }
}
function eb(e, t) {
  if (e) {
    if (typeof e == 'string') return up(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return up(e, t)
  }
}
function up(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function Fh() {
  this._defaults = []
}
var tO = function () {
  var t = tb[cp]
  Fh.prototype[t] = function () {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o]
    return this._defaults.push({ fn: t, args: n }), this
  }
}
for (
  var cp = 0,
    tb = [
      'use',
      'on',
      'once',
      'set',
      'query',
      'type',
      'accept',
      'auth',
      'withCredentials',
      'sortQuery',
      'retry',
      'ok',
      'redirects',
      'timeout',
      'buffer',
      'serialize',
      'parse',
      'ca',
      'key',
      'pfx',
      'cert',
      'disableTLSCerts',
    ];
  cp < tb.length;
  cp++
)
  tO()
Fh.prototype._setDefaults = function (e) {
  var t = eO(this._defaults),
    r
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var n = r.value
      e[n.fn].apply(e, ZA(n.args))
    }
  } catch (o) {
    t.e(o)
  } finally {
    t.f()
  }
}
var rO = Fh
;(function (e, t) {
  function r(T) {
    '@babel/helpers - typeof'
    return (
      (r =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (N) {
              return typeof N
            }
          : function (N) {
              return N &&
                typeof Symbol == 'function' &&
                N.constructor === Symbol &&
                N !== Symbol.prototype
                ? 'symbol'
                : typeof N
            }),
      r(T)
    )
  }
  function n(T, N) {
    var P = (typeof Symbol < 'u' && T[Symbol.iterator]) || T['@@iterator']
    if (!P) {
      if (
        Array.isArray(T) ||
        (P = o(T)) ||
        (N && T && typeof T.length == 'number')
      ) {
        P && (T = P)
        var k = 0,
          Y = function () {}
        return {
          s: Y,
          n: function () {
            return k >= T.length ? { done: !0 } : { done: !1, value: T[k++] }
          },
          e: function (Ne) {
            throw Ne
          },
          f: Y,
        }
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var X = !0,
      oe = !1,
      ce
    return {
      s: function () {
        P = P.call(T)
      },
      n: function () {
        var Ne = P.next()
        return (X = Ne.done), Ne
      },
      e: function (Ne) {
        ;(oe = !0), (ce = Ne)
      },
      f: function () {
        try {
          !X && P.return != null && P.return()
        } finally {
          if (oe) throw ce
        }
      },
    }
  }
  function o(T, N) {
    if (T) {
      if (typeof T == 'string') return i(T, N)
      var P = Object.prototype.toString.call(T).slice(8, -1)
      if (
        (P === 'Object' && T.constructor && (P = T.constructor.name),
        P === 'Map' || P === 'Set')
      )
        return Array.from(T)
      if (
        P === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)
      )
        return i(T, N)
    }
  }
  function i(T, N) {
    ;(N == null || N > T.length) && (N = T.length)
    for (var P = 0, k = new Array(N); P < N; P++) k[P] = T[P]
    return k
  }
  var a
  typeof window < 'u'
    ? (a = window)
    : typeof self > 'u'
    ? (console.warn(
        'Using browser-only version of superagent in non-browser environment'
      ),
      (a = void 0))
    : (a = self)
  var s = MC,
    l = jC,
    f = QA,
    p = VA,
    h = jc,
    m = h.isObject,
    v = h.mixin,
    w = h.hasOwn,
    S = qA,
    x = rO
  function y() {}
  ;(e.exports = function (T, N) {
    return typeof N == 'function'
      ? new t.Request('GET', T).end(N)
      : arguments.length === 1
      ? new t.Request('GET', T)
      : new t.Request(T, N)
  }),
    (t = e.exports)
  var g = t
  ;(t.Request = F),
    (g.getXHR = function () {
      if (
        a.XMLHttpRequest &&
        (!a.location || a.location.protocol !== 'file:' || !a.ActiveXObject)
      )
        return new XMLHttpRequest()
      try {
        return new ActiveXObject('Microsoft.XMLHTTP')
      } catch {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0')
      } catch {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0')
      } catch {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP')
      } catch {}
      throw new Error('Browser-only version of superagent could not find XHR')
    })
  var b = ''.trim
    ? function (T) {
        return T.trim()
      }
    : function (T) {
        return T.replace(/(^\s*|\s*$)/g, '')
      }
  function I(T) {
    if (!m(T)) return T
    var N = []
    for (var P in T) w(T, P) && D(N, P, T[P])
    return N.join('&')
  }
  function D(T, N, P) {
    if (P !== void 0) {
      if (P === null) {
        T.push(encodeURI(N))
        return
      }
      if (Array.isArray(P)) {
        var k = n(P),
          Y
        try {
          for (k.s(); !(Y = k.n()).done; ) {
            var X = Y.value
            D(T, N, X)
          }
        } catch (ce) {
          k.e(ce)
        } finally {
          k.f()
        }
      } else if (m(P))
        for (var oe in P)
          w(P, oe) && D(T, ''.concat(N, '[').concat(oe, ']'), P[oe])
      else T.push(encodeURI(N) + '=' + encodeURIComponent(P))
    }
  }
  g.serializeObject = I
  function E(T) {
    for (var N = {}, P = T.split('&'), k, Y, X = 0, oe = P.length; X < oe; ++X)
      (k = P[X]),
        (Y = k.indexOf('=')),
        Y === -1
          ? (N[decodeURIComponent(k)] = '')
          : (N[decodeURIComponent(k.slice(0, Y))] = decodeURIComponent(
              k.slice(Y + 1)
            ))
    return N
  }
  ;(g.parseString = E),
    (g.types = {
      html: 'text/html',
      json: 'application/json',
      xml: 'text/xml',
      urlencoded: 'application/x-www-form-urlencoded',
      form: 'application/x-www-form-urlencoded',
      'form-data': 'application/x-www-form-urlencoded',
    }),
    (g.serialize = {
      'application/x-www-form-urlencoded': f.stringify,
      'application/json': l,
    }),
    (g.parse = {
      'application/x-www-form-urlencoded': E,
      'application/json': JSON.parse,
    })
  function C(T) {
    for (
      var N = T.split(/\r?\n/), P = {}, k, Y, X, oe, ce = 0, De = N.length;
      ce < De;
      ++ce
    )
      (Y = N[ce]),
        (k = Y.indexOf(':')),
        k !== -1 &&
          ((X = Y.slice(0, k).toLowerCase()),
          (oe = b(Y.slice(k + 1))),
          (P[X] = oe))
    return P
  }
  function R(T) {
    return /[/+]json($|[^-\w])/i.test(T)
  }
  function W(T) {
    ;(this.req = T),
      (this.xhr = this.req.xhr),
      (this.text =
        (this.req.method !== 'HEAD' &&
          (this.xhr.responseType === '' || this.xhr.responseType === 'text')) ||
        typeof this.xhr.responseType > 'u'
          ? this.xhr.responseText
          : null),
      (this.statusText = this.req.xhr.statusText)
    var N = this.xhr.status
    N === 1223 && (N = 204),
      this._setStatusProperties(N),
      (this.headers = C(this.xhr.getAllResponseHeaders())),
      (this.header = this.headers),
      (this.header['content-type'] =
        this.xhr.getResponseHeader('content-type')),
      this._setHeaderProperties(this.header),
      this.text === null && T._responseType
        ? (this.body = this.xhr.response)
        : (this.body =
            this.req.method === 'HEAD'
              ? null
              : this._parseBody(this.text ? this.text : this.xhr.response))
  }
  v(W.prototype, S.prototype),
    (W.prototype._parseBody = function (T) {
      var N = g.parse[this.type]
      return this.req._parser
        ? this.req._parser(this, T)
        : (!N && R(this.type) && (N = g.parse['application/json']),
          N && T && (T.length > 0 || T instanceof Object) ? N(T) : null)
    }),
    (W.prototype.toError = function () {
      var T = this.req,
        N = T.method,
        P = T.url,
        k = 'cannot '.concat(N, ' ').concat(P, ' (').concat(this.status, ')'),
        Y = new Error(k)
      return (Y.status = this.status), (Y.method = N), (Y.url = P), Y
    }),
    (g.Response = W)
  function F(T, N) {
    var P = this
    ;(this._query = this._query || []),
      (this.method = T),
      (this.url = N),
      (this.header = {}),
      (this._header = {}),
      this.on('end', function () {
        var k = null,
          Y = null
        try {
          Y = new W(P)
        } catch (oe) {
          return (
            (k = new Error('Parser is unable to parse the response')),
            (k.parse = !0),
            (k.original = oe),
            P.xhr
              ? ((k.rawResponse =
                  typeof P.xhr.responseType > 'u'
                    ? P.xhr.responseText
                    : P.xhr.response),
                (k.status = P.xhr.status ? P.xhr.status : null),
                (k.statusCode = k.status))
              : ((k.rawResponse = null), (k.status = null)),
            P.callback(k)
          )
        }
        P.emit('response', Y)
        var X
        try {
          P._isResponseOK(Y) ||
            (X = new Error(
              Y.statusText || Y.text || 'Unsuccessful HTTP response'
            ))
        } catch (oe) {
          X = oe
        }
        X
          ? ((X.original = k),
            (X.response = Y),
            (X.status = Y.status),
            P.callback(X, Y))
          : P.callback(null, Y)
      })
  }
  s(F.prototype),
    v(F.prototype, p.prototype),
    (F.prototype.type = function (T) {
      return this.set('Content-Type', g.types[T] || T), this
    }),
    (F.prototype.accept = function (T) {
      return this.set('Accept', g.types[T] || T), this
    }),
    (F.prototype.auth = function (T, N, P) {
      arguments.length === 1 && (N = ''),
        r(N) === 'object' && N !== null && ((P = N), (N = '')),
        P || (P = { type: typeof btoa == 'function' ? 'basic' : 'auto' })
      var k = function (X) {
        if (typeof btoa == 'function') return btoa(X)
        throw new Error('Cannot use basic auth, btoa is not a function')
      }
      return this._auth(T, N, P, k)
    }),
    (F.prototype.query = function (T) {
      return typeof T != 'string' && (T = I(T)), T && this._query.push(T), this
    }),
    (F.prototype.attach = function (T, N, P) {
      if (N) {
        if (this._data)
          throw new Error("superagent can't mix .send() and .attach()")
        this._getFormData().append(T, N, P || N.name)
      }
      return this
    }),
    (F.prototype._getFormData = function () {
      return (
        this._formData || (this._formData = new a.FormData()), this._formData
      )
    }),
    (F.prototype.callback = function (T, N) {
      if (this._shouldRetry(T, N)) return this._retry()
      var P = this._callback
      this.clearTimeout(),
        T &&
          (this._maxRetries && (T.retries = this._retries - 1),
          this.emit('error', T)),
        P(T, N)
    }),
    (F.prototype.crossDomainError = function () {
      var T = new Error(`Request has been terminated
Possible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.`)
      ;(T.crossDomain = !0),
        (T.status = this.status),
        (T.method = this.method),
        (T.url = this.url),
        this.callback(T)
    }),
    (F.prototype.agent = function () {
      return (
        console.warn('This is not supported in browser version of superagent'),
        this
      )
    }),
    (F.prototype.ca = F.prototype.agent),
    (F.prototype.buffer = F.prototype.ca),
    (F.prototype.write = function () {
      throw new Error(
        'Streaming is not supported in browser version of superagent'
      )
    }),
    (F.prototype.pipe = F.prototype.write),
    (F.prototype._isHost = function (T) {
      return (
        T &&
        r(T) === 'object' &&
        !Array.isArray(T) &&
        Object.prototype.toString.call(T) !== '[object Object]'
      )
    }),
    (F.prototype.end = function (T) {
      this._endCalled &&
        console.warn(
          'Warning: .end() was called twice. This is not supported in superagent'
        ),
        (this._endCalled = !0),
        (this._callback = T || y),
        this._finalizeQueryString(),
        this._end()
    }),
    (F.prototype._setUploadTimeout = function () {
      var T = this
      this._uploadTimeout &&
        !this._uploadTimeoutTimer &&
        (this._uploadTimeoutTimer = setTimeout(function () {
          T._timeoutError('Upload timeout of ', T._uploadTimeout, 'ETIMEDOUT')
        }, this._uploadTimeout))
    }),
    (F.prototype._end = function () {
      if (this._aborted)
        return this.callback(
          new Error(
            'The request has been aborted even before .end() was called'
          )
        )
      var T = this
      this.xhr = g.getXHR()
      var N = this.xhr,
        P = this._formData || this._data
      this._setTimeouts(),
        N.addEventListener('readystatechange', function () {
          var ce = N.readyState
          if (
            (ce >= 2 &&
              T._responseTimeoutTimer &&
              clearTimeout(T._responseTimeoutTimer),
            ce === 4)
          ) {
            var De
            try {
              De = N.status
            } catch {
              De = 0
            }
            if (!De)
              return T.timedout || T._aborted ? void 0 : T.crossDomainError()
            T.emit('end')
          }
        })
      var k = function (De, Ne) {
        Ne.total > 0 &&
          ((Ne.percent = (Ne.loaded / Ne.total) * 100),
          Ne.percent === 100 && clearTimeout(T._uploadTimeoutTimer)),
          (Ne.direction = De),
          T.emit('progress', Ne)
      }
      if (this.hasListeners('progress'))
        try {
          N.addEventListener('progress', k.bind(null, 'download')),
            N.upload &&
              N.upload.addEventListener('progress', k.bind(null, 'upload'))
        } catch {}
      N.upload && this._setUploadTimeout()
      try {
        this.username && this.password
          ? N.open(this.method, this.url, !0, this.username, this.password)
          : N.open(this.method, this.url, !0)
      } catch (ce) {
        return this.callback(ce)
      }
      if (
        (this._withCredentials && (N.withCredentials = !0),
        !this._formData &&
          this.method !== 'GET' &&
          this.method !== 'HEAD' &&
          typeof P != 'string' &&
          !this._isHost(P))
      ) {
        var Y = this._header['content-type'],
          X = this._serializer || g.serialize[Y ? Y.split(';')[0] : '']
        !X && R(Y) && (X = g.serialize['application/json']), X && (P = X(P))
      }
      for (var oe in this.header)
        this.header[oe] !== null &&
          w(this.header, oe) &&
          N.setRequestHeader(oe, this.header[oe])
      this._responseType && (N.responseType = this._responseType),
        this.emit('request', this),
        N.send(typeof P > 'u' ? null : P)
    }),
    (g.agent = function () {
      return new x()
    })
  for (
    var G = function () {
        var N = B[K]
        x.prototype[N.toLowerCase()] = function (P, k) {
          var Y = new g.Request(N, P)
          return this._setDefaults(Y), k && Y.end(k), Y
        }
      },
      K = 0,
      B = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'];
    K < B.length;
    K++
  )
    G()
  ;(x.prototype.del = x.prototype.delete),
    (g.get = function (T, N, P) {
      var k = g('GET', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.query(N),
        P && k.end(P),
        k
      )
    }),
    (g.head = function (T, N, P) {
      var k = g('HEAD', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.query(N),
        P && k.end(P),
        k
      )
    }),
    (g.options = function (T, N, P) {
      var k = g('OPTIONS', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.send(N),
        P && k.end(P),
        k
      )
    })
  function V(T, N, P) {
    var k = g('DELETE', T)
    return (
      typeof N == 'function' && ((P = N), (N = null)),
      N && k.send(N),
      P && k.end(P),
      k
    )
  }
  ;(g.del = V),
    (g.delete = V),
    (g.patch = function (T, N, P) {
      var k = g('PATCH', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.send(N),
        P && k.end(P),
        k
      )
    }),
    (g.post = function (T, N, P) {
      var k = g('POST', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.send(N),
        P && k.end(P),
        k
      )
    }),
    (g.put = function (T, N, P) {
      var k = g('PUT', T)
      return (
        typeof N == 'function' && ((P = N), (N = null)),
        N && k.send(N),
        P && k.end(P),
        k
      )
    })
})(Kd, Kd.exports)
var nO = Kd.exports
const il = va(nO),
  _s = (e) => typeof e == 'number' && !isNaN(e),
  ui = (e) => typeof e == 'string',
  pr = (e) => typeof e == 'function',
  mu = (e) => (ui(e) || pr(e) ? e : null),
  Uf = (e) => M.isValidElement(e) || ui(e) || pr(e) || _s(e)
function oO(e, t, r) {
  r === void 0 && (r = 300)
  const { scrollHeight: n, style: o } = e
  requestAnimationFrame(() => {
    ;(o.minHeight = 'initial'),
      (o.height = n + 'px'),
      (o.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        ;(o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, r)
      })
  })
}
function Tc(e) {
  let {
    enter: t,
    exit: r,
    appendPosition: n = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e
  return function (a) {
    let {
      children: s,
      position: l,
      preventExitTransition: f,
      done: p,
      nodeRef: h,
      isIn: m,
    } = a
    const v = n ? `${t}--${l}` : t,
      w = n ? `${r}--${l}` : r,
      S = M.useRef(0)
    return (
      M.useLayoutEffect(() => {
        const x = h.current,
          y = v.split(' '),
          g = (b) => {
            b.target === h.current &&
              (x.dispatchEvent(new Event('d')),
              x.removeEventListener('animationend', g),
              x.removeEventListener('animationcancel', g),
              S.current === 0 &&
                b.type !== 'animationcancel' &&
                x.classList.remove(...y))
          }
        x.classList.add(...y),
          x.addEventListener('animationend', g),
          x.addEventListener('animationcancel', g)
      }, []),
      M.useEffect(() => {
        const x = h.current,
          y = () => {
            x.removeEventListener('animationend', y), o ? oO(x, p, i) : p()
          }
        m ||
          (f
            ? y()
            : ((S.current = 1),
              (x.className += ` ${w}`),
              x.addEventListener('animationend', y)))
      }, [m]),
      te.createElement(te.Fragment, null, s)
    )
  }
}
function Hv(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {}
}
const Ur = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      )
    },
    off(e, t) {
      if (t) {
        const r = this.list.get(e).filter((n) => n !== t)
        return this.list.set(e, r), this
      }
      return this.list.delete(e), this
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e)
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const r = setTimeout(() => {
            t(...[].slice.call(arguments, 1))
          }, 0)
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(r)
        })
    },
  },
  Kl = (e) => {
    let { theme: t, type: r, ...n } = e
    return te.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${r})`,
      ...n,
    })
  },
  Ff = {
    info: function (e) {
      return te.createElement(
        Kl,
        { ...e },
        te.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
        })
      )
    },
    warning: function (e) {
      return te.createElement(
        Kl,
        { ...e },
        te.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
        })
      )
    },
    success: function (e) {
      return te.createElement(
        Kl,
        { ...e },
        te.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
        })
      )
    },
    error: function (e) {
      return te.createElement(
        Kl,
        { ...e },
        te.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
        })
      )
    },
    spinner: function () {
      return te.createElement('div', { className: 'Toastify__spinner' })
    },
  }
function iO(e) {
  const [, t] = M.useReducer((v) => v + 1, 0),
    [r, n] = M.useState([]),
    o = M.useRef(null),
    i = M.useRef(new Map()).current,
    a = (v) => r.indexOf(v) !== -1,
    s = M.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (v) => i.get(v),
    }).current
  function l(v) {
    let { containerId: w } = v
    const { limit: S } = s.props
    !S ||
      (w && s.containerId !== w) ||
      ((s.count -= s.queue.length), (s.queue = []))
  }
  function f(v) {
    n((w) => (v == null ? [] : w.filter((S) => S !== v)))
  }
  function p() {
    const { toastContent: v, toastProps: w, staleId: S } = s.queue.shift()
    m(v, w, S)
  }
  function h(v, w) {
    let { delay: S, staleId: x, ...y } = w
    if (
      !Uf(v) ||
      (function (K) {
        return (
          !o.current ||
          (s.props.enableMultiContainer &&
            K.containerId !== s.props.containerId) ||
          (i.has(K.toastId) && K.updateId == null)
        )
      })(y)
    )
      return
    const { toastId: g, updateId: b, data: I } = y,
      { props: D } = s,
      E = () => f(g),
      C = b == null
    C && s.count++
    const R = {
      ...D,
      style: D.toastStyle,
      key: s.toastKey++,
      ...Object.fromEntries(
        Object.entries(y).filter((K) => {
          let [B, V] = K
          return V != null
        })
      ),
      toastId: g,
      updateId: b,
      data: I,
      closeToast: E,
      isIn: !1,
      className: mu(y.className || D.toastClassName),
      bodyClassName: mu(y.bodyClassName || D.bodyClassName),
      progressClassName: mu(y.progressClassName || D.progressClassName),
      autoClose:
        !y.isLoading &&
        ((W = y.autoClose),
        (F = D.autoClose),
        W === !1 || (_s(W) && W > 0) ? W : F),
      deleteToast() {
        const K = Hv(i.get(g), 'removed')
        i.delete(g), Ur.emit(4, K)
        const B = s.queue.length
        if (
          ((s.count = g == null ? s.count - s.displayedToast : s.count - 1),
          s.count < 0 && (s.count = 0),
          B > 0)
        ) {
          const V = g == null ? s.props.limit : 1
          if (B === 1 || V === 1) s.displayedToast++, p()
          else {
            const T = V > B ? B : V
            s.displayedToast = T
            for (let N = 0; N < T; N++) p()
          }
        } else t()
      },
    }
    var W, F
    ;(R.iconOut = (function (K) {
      let { theme: B, type: V, isLoading: T, icon: N } = K,
        P = null
      const k = { theme: B, type: V }
      return (
        N === !1 ||
          (pr(N)
            ? (P = N(k))
            : M.isValidElement(N)
            ? (P = M.cloneElement(N, k))
            : ui(N) || _s(N)
            ? (P = N)
            : T
            ? (P = Ff.spinner())
            : ((Y) => Y in Ff)(V) && (P = Ff[V](k))),
        P
      )
    })(R)),
      pr(y.onOpen) && (R.onOpen = y.onOpen),
      pr(y.onClose) && (R.onClose = y.onClose),
      (R.closeButton = D.closeButton),
      y.closeButton === !1 || Uf(y.closeButton)
        ? (R.closeButton = y.closeButton)
        : y.closeButton === !0 &&
          (R.closeButton = !Uf(D.closeButton) || D.closeButton)
    let G = v
    M.isValidElement(v) && !ui(v.type)
      ? (G = M.cloneElement(v, { closeToast: E, toastProps: R, data: I }))
      : pr(v) && (G = v({ closeToast: E, toastProps: R, data: I })),
      D.limit && D.limit > 0 && s.count > D.limit && C
        ? s.queue.push({ toastContent: G, toastProps: R, staleId: x })
        : _s(S)
        ? setTimeout(() => {
            m(G, R, x)
          }, S)
        : m(G, R, x)
  }
  function m(v, w, S) {
    const { toastId: x } = w
    S && i.delete(S)
    const y = { content: v, props: w }
    i.set(x, y),
      n((g) => [...g, x].filter((b) => b !== S)),
      Ur.emit(4, Hv(y, y.props.updateId == null ? 'added' : 'updated'))
  }
  return (
    M.useEffect(
      () => (
        (s.containerId = e.containerId),
        Ur.cancelEmit(3)
          .on(0, h)
          .on(1, (v) => o.current && f(v))
          .on(5, l)
          .emit(2, s),
        () => {
          i.clear(), Ur.emit(3, s)
        }
      ),
      []
    ),
    M.useEffect(() => {
      ;(s.props = e), (s.isToastActive = a), (s.displayedToast = r.length)
    }),
    {
      getToastToRender: function (v) {
        const w = new Map(),
          S = Array.from(i.values())
        return (
          e.newestOnTop && S.reverse(),
          S.forEach((x) => {
            const { position: y } = x.props
            w.has(y) || w.set(y, []), w.get(y).push(x)
          }),
          Array.from(w, (x) => v(x[0], x[1]))
        )
      },
      containerRef: o,
      isToastActive: a,
    }
  )
}
function Qv(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX
}
function Vv(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY
}
function aO(e) {
  const [t, r] = M.useState(!1),
    [n, o] = M.useState(!1),
    i = M.useRef(null),
    a = M.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    s = M.useRef(e),
    {
      autoClose: l,
      pauseOnHover: f,
      closeToast: p,
      onClick: h,
      closeOnClick: m,
    } = e
  function v(I) {
    if (e.draggable) {
      I.nativeEvent.type === 'touchstart' && I.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener('mousemove', y),
        document.addEventListener('mouseup', g),
        document.addEventListener('touchmove', y),
        document.addEventListener('touchend', g)
      const D = i.current
      ;(a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = D.getBoundingClientRect()),
        (D.style.transition = ''),
        (a.x = Qv(I.nativeEvent)),
        (a.y = Vv(I.nativeEvent)),
        e.draggableDirection === 'x'
          ? ((a.start = a.x),
            (a.removalDistance = D.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              D.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)))
    }
  }
  function w(I) {
    if (a.boundingRect) {
      const { top: D, bottom: E, left: C, right: R } = a.boundingRect
      I.nativeEvent.type !== 'touchend' &&
      e.pauseOnHover &&
      a.x >= C &&
      a.x <= R &&
      a.y >= D &&
      a.y <= E
        ? x()
        : S()
    }
  }
  function S() {
    r(!0)
  }
  function x() {
    r(!1)
  }
  function y(I) {
    const D = i.current
    a.canDrag &&
      D &&
      ((a.didMove = !0),
      t && x(),
      (a.x = Qv(I)),
      (a.y = Vv(I)),
      (a.delta = e.draggableDirection === 'x' ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (D.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (D.style.opacity = '' + (1 - Math.abs(a.delta / a.removalDistance))))
  }
  function g() {
    document.removeEventListener('mousemove', y),
      document.removeEventListener('mouseup', g),
      document.removeEventListener('touchmove', y),
      document.removeEventListener('touchend', g)
    const I = i.current
    if (a.canDrag && a.didMove && I) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return o(!0), void e.closeToast()
      ;(I.style.transition = 'transform 0.2s, opacity 0.2s'),
        (I.style.transform = `translate${e.draggableDirection}(0)`),
        (I.style.opacity = '1')
    }
  }
  M.useEffect(() => {
    s.current = e
  }),
    M.useEffect(
      () => (
        i.current && i.current.addEventListener('d', S, { once: !0 }),
        pr(e.onOpen) &&
          e.onOpen(M.isValidElement(e.children) && e.children.props),
        () => {
          const I = s.current
          pr(I.onClose) &&
            I.onClose(M.isValidElement(I.children) && I.children.props)
        }
      ),
      []
    ),
    M.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || x(),
          window.addEventListener('focus', S),
          window.addEventListener('blur', x)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener('focus', S),
            window.removeEventListener('blur', x))
        }
      ),
      [e.pauseOnFocusLoss]
    )
  const b = { onMouseDown: v, onTouchStart: v, onMouseUp: w, onTouchEnd: w }
  return (
    l && f && ((b.onMouseEnter = x), (b.onMouseLeave = S)),
    m &&
      (b.onClick = (I) => {
        h && h(I), a.canCloseOnClick && p()
      }),
    {
      playToast: S,
      pauseToast: x,
      isRunning: t,
      preventExitTransition: n,
      toastRef: i,
      eventHandlers: b,
    }
  )
}
function rb(e) {
  let { closeToast: t, theme: r, ariaLabel: n = 'close' } = e
  return te.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${r}`,
      type: 'button',
      onClick: (o) => {
        o.stopPropagation(), t(o)
      },
      'aria-label': n,
    },
    te.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      te.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
      })
    )
  )
}
function sO(e) {
  let {
    delay: t,
    isRunning: r,
    closeToast: n,
    type: o = 'default',
    hide: i,
    className: a,
    style: s,
    controlledProgress: l,
    progress: f,
    rtl: p,
    isIn: h,
    theme: m,
  } = e
  const v = i || (l && f === 0),
    w = {
      ...s,
      animationDuration: `${t}ms`,
      animationPlayState: r ? 'running' : 'paused',
      opacity: v ? 0 : 1,
    }
  l && (w.transform = `scaleX(${f})`)
  const S = de(
      'Toastify__progress-bar',
      l
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${m}`,
      `Toastify__progress-bar--${o}`,
      { 'Toastify__progress-bar--rtl': p }
    ),
    x = pr(a) ? a({ rtl: p, type: o, defaultClassName: S }) : de(S, a)
  return te.createElement('div', {
    role: 'progressbar',
    'aria-hidden': v ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: x,
    style: w,
    [l && f >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      l && f < 1
        ? null
        : () => {
            h && n()
          },
  })
}
const lO = (e) => {
    const {
        isRunning: t,
        preventExitTransition: r,
        toastRef: n,
        eventHandlers: o,
      } = aO(e),
      {
        closeButton: i,
        children: a,
        autoClose: s,
        onClick: l,
        type: f,
        hideProgressBar: p,
        closeToast: h,
        transition: m,
        position: v,
        className: w,
        style: S,
        bodyClassName: x,
        bodyStyle: y,
        progressClassName: g,
        progressStyle: b,
        updateId: I,
        role: D,
        progress: E,
        rtl: C,
        toastId: R,
        deleteToast: W,
        isIn: F,
        isLoading: G,
        iconOut: K,
        closeOnClick: B,
        theme: V,
      } = e,
      T = de(
        'Toastify__toast',
        `Toastify__toast-theme--${V}`,
        `Toastify__toast--${f}`,
        { 'Toastify__toast--rtl': C },
        { 'Toastify__toast--close-on-click': B }
      ),
      N = pr(w)
        ? w({ rtl: C, position: v, type: f, defaultClassName: T })
        : de(T, w),
      P = !!E || !s,
      k = { closeToast: h, type: f, theme: V }
    let Y = null
    return (
      i === !1 ||
        (Y = pr(i) ? i(k) : M.isValidElement(i) ? M.cloneElement(i, k) : rb(k)),
      te.createElement(
        m,
        { isIn: F, done: W, position: v, preventExitTransition: r, nodeRef: n },
        te.createElement(
          'div',
          { id: R, onClick: l, className: N, ...o, style: S, ref: n },
          te.createElement(
            'div',
            {
              ...(F && { role: D }),
              className: pr(x) ? x({ type: f }) : de('Toastify__toast-body', x),
              style: y,
            },
            K != null &&
              te.createElement(
                'div',
                {
                  className: de('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !G,
                  }),
                },
                K
              ),
            te.createElement('div', null, a)
          ),
          Y,
          te.createElement(sO, {
            ...(I && !P ? { key: `pb-${I}` } : {}),
            rtl: C,
            theme: V,
            delay: s,
            isRunning: t,
            isIn: F,
            closeToast: h,
            hide: p,
            type: f,
            style: b,
            className: g,
            controlledProgress: P,
            progress: E || 0,
          })
        )
      )
    )
  },
  Cc = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    )
  },
  uO = Tc(Cc('bounce', !0))
Tc(Cc('slide', !0))
Tc(Cc('zoom'))
Tc(Cc('flip'))
const fp = M.forwardRef((e, t) => {
  const { getToastToRender: r, containerRef: n, isToastActive: o } = iO(e),
    { className: i, style: a, rtl: s, containerId: l } = e
  function f(p) {
    const h = de(
      'Toastify__toast-container',
      `Toastify__toast-container--${p}`,
      { 'Toastify__toast-container--rtl': s }
    )
    return pr(i)
      ? i({ position: p, rtl: s, defaultClassName: h })
      : de(h, mu(i))
  }
  return (
    M.useEffect(() => {
      t && (t.current = n.current)
    }, []),
    te.createElement(
      'div',
      { ref: n, className: 'Toastify', id: l },
      r((p, h) => {
        const m = h.length ? { ...a } : { ...a, pointerEvents: 'none' }
        return te.createElement(
          'div',
          { className: f(p), style: m, key: `container-${p}` },
          h.map((v, w) => {
            let { content: S, props: x } = v
            return te.createElement(
              lO,
              {
                ...x,
                isIn: o(x.toastId),
                style: { ...x.style, '--nth': w + 1, '--len': h.length },
                key: `toast-${x.key}`,
              },
              S
            )
          })
        )
      })
    )
  )
})
;(fp.displayName = 'ToastContainer'),
  (fp.defaultProps = {
    position: 'top-right',
    transition: uO,
    autoClose: 5e3,
    closeButton: rb,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
  })
let $f,
  Lo = new Map(),
  es = [],
  cO = 1
function nb() {
  return '' + cO++
}
function fO(e) {
  return e && (ui(e.toastId) || _s(e.toastId)) ? e.toastId : nb()
}
function ws(e, t) {
  return (
    Lo.size > 0 ? Ur.emit(0, e, t) : es.push({ content: e, options: t }),
    t.toastId
  )
}
function Ju(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: fO(t) }
}
function Xl(e) {
  return (t, r) => ws(t, Ju(e, r))
}
function rt(e, t) {
  return ws(e, Ju('default', t))
}
;(rt.loading = (e, t) =>
  ws(
    e,
    Ju('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (rt.promise = function (e, t, r) {
    let n,
      { pending: o, error: i, success: a } = t
    o && (n = ui(o) ? rt.loading(o, r) : rt.loading(o.render, { ...r, ...o }))
    const s = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (p, h, m) => {
        if (h == null) return void rt.dismiss(n)
        const v = { type: p, ...s, ...r, data: m },
          w = ui(h) ? { render: h } : h
        return (
          n ? rt.update(n, { ...v, ...w }) : rt(w.render, { ...v, ...w }), m
        )
      },
      f = pr(e) ? e() : e
    return f.then((p) => l('success', a, p)).catch((p) => l('error', i, p)), f
  }),
  (rt.success = Xl('success')),
  (rt.info = Xl('info')),
  (rt.error = Xl('error')),
  (rt.warning = Xl('warning')),
  (rt.warn = rt.warning),
  (rt.dark = (e, t) => ws(e, Ju('default', { theme: 'dark', ...t }))),
  (rt.dismiss = (e) => {
    Lo.size > 0
      ? Ur.emit(1, e)
      : (es = es.filter((t) => e != null && t.options.toastId !== e))
  }),
  (rt.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), Ur.emit(5, e)
  }),
  (rt.isActive = (e) => {
    let t = !1
    return (
      Lo.forEach((r) => {
        r.isToastActive && r.isToastActive(e) && (t = !0)
      }),
      t
    )
  }),
  (rt.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const r = (function (n, o) {
          let { containerId: i } = o
          const a = Lo.get(i || $f)
          return a && a.getToast(n)
        })(e, t)
        if (r) {
          const { props: n, content: o } = r,
            i = {
              delay: 100,
              ...n,
              ...t,
              toastId: t.toastId || e,
              updateId: nb(),
            }
          i.toastId !== e && (i.staleId = e)
          const a = i.render || o
          delete i.render, ws(a, i)
        }
      }, 0)
  }),
  (rt.done = (e) => {
    rt.update(e, { progress: 1 })
  }),
  (rt.onChange = (e) => (
    Ur.on(4, e),
    () => {
      Ur.off(4, e)
    }
  )),
  (rt.POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  }),
  (rt.TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default',
  }),
  Ur.on(2, (e) => {
    ;($f = e.containerId || e),
      Lo.set($f, e),
      es.forEach((t) => {
        Ur.emit(0, t.content, t.options)
      }),
      (es = [])
  }).on(3, (e) => {
    Lo.delete(e.containerId || e), Lo.size === 0 && Ur.off(0).off(1).off(5)
  })
const al = 'https://red-ping-api.isaacirvine.me',
  dO = async (e, t) => {
    try {
      ;(
        await il
          .post(`${al}/signup?email=${e}&password=${t}`)
          .type('form')
          .send({ email: e, password: t })
      ).status == 200 &&
        rt.success(`Welcome to the PING CULT ${e}`, {
          autoClose: 5e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
        })
    } catch (r) {
      return (
        console.log(r),
        r instanceof Error &&
          rt.error(r.message, {
            position: 'top-right',
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
          }),
        { success: !1, message: 'Nope going on the signinbg in sadge' }
      )
    }
  },
  pO = async (e, t) => {
    try {
      ;(
        await il
          .post(`${al}/login`)
          .type('form')
          .send({ username: e, password: t })
      ).status == 200 &&
        rt.success(`You're all logged in ${e}`, {
          autoClose: 5e3,
          hideProgressBar: !1,
          closeOnClick: !0,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
        })
    } catch (r) {
      return (
        console.log(r),
        r instanceof Error &&
          rt.error(r.message, {
            position: 'top-right',
            autoClose: 5e3,
            hideProgressBar: !1,
            closeOnClick: !0,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
          }),
        { success: !1, message: 'Nope going on the loggin in sadge' }
      )
    }
  }
async function hO() {
  try {
    const e = await il.get(`${al}/`)
    return console.log(e.body), JSON.stringify(e.body).replace(/[{}:"]/g, ' ')
  } catch (e) {
    console.error(e)
  }
}
async function mO(e) {
  return (await il.get(`${al}/${e}`)).body
}
async function yO(e) {
  const t = await il.post(al).send({ newalert: e })
  return console.log(t.body), t.body
}
var ob = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function r() {
      for (var i = '', a = 0; a < arguments.length; a++) {
        var s = arguments[a]
        s && (i = o(i, n(s)))
      }
      return i
    }
    function n(i) {
      if (typeof i == 'string' || typeof i == 'number') return i
      if (typeof i != 'object') return ''
      if (Array.isArray(i)) return r.apply(null, i)
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString()
      var a = ''
      for (var s in i) t.call(i, s) && i[s] && (a = o(a, s))
      return a
    }
    function o(i, a) {
      return a ? (i ? i + ' ' + a : i + a) : i
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r)
  })()
})(ob)
var ib = ob.exports
const _r = va(ib)
function dp() {
  return (
    (dp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    dp.apply(this, arguments)
  )
}
function ab(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function Yv(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1)
}
function vO(e) {
  var t = gO(e, 'string')
  return typeof t == 'symbol' ? t : String(t)
}
function gO(e, t) {
  if (typeof e != 'object' || e === null) return e
  var r = e[Symbol.toPrimitive]
  if (r !== void 0) {
    var n = r.call(e, t || 'default')
    if (typeof n != 'object') return n
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function _O(e, t, r) {
  var n = M.useRef(e !== void 0),
    o = M.useState(t),
    i = o[0],
    a = o[1],
    s = e !== void 0,
    l = n.current
  return (
    (n.current = s),
    !s && l && i !== t && a(t),
    [
      s ? e : i,
      M.useCallback(
        function (f) {
          for (
            var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), m = 1;
            m < p;
            m++
          )
            h[m - 1] = arguments[m]
          r && r.apply(void 0, [f].concat(h)), a(f)
        },
        [r]
      ),
    ]
  )
}
function sb(e, t) {
  return Object.keys(t).reduce(function (r, n) {
    var o,
      i = r,
      a = i[Yv(n)],
      s = i[n],
      l = ab(i, [Yv(n), n].map(vO)),
      f = t[n],
      p = _O(s, a, e[f]),
      h = p[0],
      m = p[1]
    return dp({}, l, ((o = {}), (o[n] = h), (o[f] = m), o))
  }, e)
}
function pp(e, t) {
  return (
    (pp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n
        }),
    pp(e, t)
  )
}
function wO(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    pp(e, t)
}
function bO(e) {
  const t = M.useRef(e)
  return (
    M.useEffect(() => {
      t.current = e
    }, [e]),
    t
  )
}
function Cn(e) {
  const t = bO(e)
  return M.useCallback(
    function (...r) {
      return t.current && t.current(...r)
    },
    [t]
  )
}
const xO = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  SO = 'xs',
  lb = M.createContext({ prefixes: {}, breakpoints: xO, minBreakpoint: SO })
function dn(e, t) {
  const { prefixes: r } = M.useContext(lb)
  return e || r[t] || t
}
function EO() {
  const { dir: e } = M.useContext(lb)
  return e === 'rtl'
}
const MO = (e) =>
    M.forwardRef((t, r) =>
      A.jsx('div', { ...t, ref: r, className: _r(t.className, e) })
    ),
  ub = MO('h4')
ub.displayName = 'DivStyledAsH4'
const cb = M.forwardRef(
  ({ className: e, bsPrefix: t, as: r = ub, ...n }, o) => (
    (t = dn(t, 'alert-heading')),
    A.jsx(r, { ref: o, className: _r(e, t), ...n })
  )
)
cb.displayName = 'AlertHeading'
const jO = cb
function IO() {
  return M.useState(null)
}
function TO(e, t, r, n = !1) {
  const o = Cn(r)
  M.useEffect(() => {
    const i = typeof e == 'function' ? e() : e
    return i.addEventListener(t, o, n), () => i.removeEventListener(t, o, n)
  }, [e])
}
function CO() {
  const e = M.useRef(!0),
    t = M.useRef(() => e.current)
  return (
    M.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1
        }
      ),
      []
    ),
    t.current
  )
}
function NO(e) {
  const t = M.useRef(null)
  return (
    M.useEffect(() => {
      t.current = e
    }),
    t.current
  )
}
const AO =
    typeof global < 'u' &&
    global.navigator &&
    global.navigator.product === 'ReactNative',
  OO = typeof document < 'u',
  DO = OO || AO ? M.useLayoutEffect : M.useEffect,
  PO = ['as', 'disabled']
function kO(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function RO(e) {
  return !e || e.trim() === '#'
}
function $h({
  tagName: e,
  disabled: t,
  href: r,
  target: n,
  rel: o,
  role: i,
  onClick: a,
  tabIndex: s = 0,
  type: l,
}) {
  e || (r != null || n != null || o != null ? (e = 'a') : (e = 'button'))
  const f = { tagName: e }
  if (e === 'button') return [{ type: l || 'button', disabled: t }, f]
  const p = (m) => {
      if (((t || (e === 'a' && RO(r))) && m.preventDefault(), t)) {
        m.stopPropagation()
        return
      }
      a == null || a(m)
    },
    h = (m) => {
      m.key === ' ' && (m.preventDefault(), p(m))
    }
  return (
    e === 'a' && (r || (r = '#'), t && (r = void 0)),
    [
      {
        role: i ?? 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: r,
        target: e === 'a' ? n : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? o : void 0,
        onClick: p,
        onKeyDown: h,
      },
      f,
    ]
  )
}
const fb = M.forwardRef((e, t) => {
  let { as: r, disabled: n } = e,
    o = kO(e, PO)
  const [i, { tagName: a }] = $h(Object.assign({ tagName: r, disabled: n }, o))
  return A.jsx(a, Object.assign({}, o, i, { ref: t }))
})
fb.displayName = 'Button'
const LO = ['onKeyDown']
function zO(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function UO(e) {
  return !e || e.trim() === '#'
}
const db = M.forwardRef((e, t) => {
  let { onKeyDown: r } = e,
    n = zO(e, LO)
  const [o] = $h(Object.assign({ tagName: 'a' }, n)),
    i = Cn((a) => {
      o.onKeyDown(a), r == null || r(a)
    })
  return UO(n.href) || n.role === 'button'
    ? A.jsx('a', Object.assign({ ref: t }, n, o, { onKeyDown: i }))
    : A.jsx('a', Object.assign({ ref: t }, n, { onKeyDown: r }))
})
db.displayName = 'Anchor'
const pb = db,
  hb = M.forwardRef(
    ({ className: e, bsPrefix: t, as: r = pb, ...n }, o) => (
      (t = dn(t, 'alert-link')), A.jsx(r, { ref: o, className: _r(e, t), ...n })
    )
  )
hb.displayName = 'AlertLink'
const FO = hb
var mb = { exports: {} },
  $O = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  BO = $O,
  WO = BO
function yb() {}
function vb() {}
vb.resetWarningCache = yb
var HO = function () {
  function e(n, o, i, a, s, l) {
    if (l !== WO) {
      var f = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((f.name = 'Invariant Violation'), f)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var r = {
    array: e,
    bigint: e,
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
    checkPropTypes: vb,
    resetWarningCache: yb,
  }
  return (r.PropTypes = r), r
}
mb.exports = HO()
var QO = mb.exports
const Bf = va(QO),
  Gv = { disabled: !1 },
  gb = te.createContext(null)
var VO = function (t) {
    return t.scrollTop
  },
  ts = 'unmounted',
  zo = 'exited',
  io = 'entering',
  Fo = 'entered',
  hp = 'exiting',
  Zn = (function (e) {
    wO(t, e)
    function t(n, o) {
      var i
      i = e.call(this, n, o) || this
      var a = o,
        s = a && !a.isMounting ? n.enter : n.appear,
        l
      return (
        (i.appearStatus = null),
        n.in
          ? s
            ? ((l = zo), (i.appearStatus = io))
            : (l = Fo)
          : n.unmountOnExit || n.mountOnEnter
          ? (l = ts)
          : (l = zo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      )
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in
      return a && i.status === ts ? { status: zo } : null
    }
    var r = t.prototype
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus)
      }),
      (r.componentDidUpdate = function (o) {
        var i = null
        if (o !== this.props) {
          var a = this.state.status
          this.props.in
            ? a !== io && a !== Fo && (i = io)
            : (a === io || a === Fo) && (i = hp)
        }
        this.updateStatus(!1, i)
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback()
      }),
      (r.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          s
        return (
          (i = a = s = o),
          o != null &&
            typeof o != 'number' &&
            ((i = o.exit),
            (a = o.enter),
            (s = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: s }
        )
      }),
      (r.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === io)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ui.findDOMNode(this)
              a && VO(a)
            }
            this.performEnter(o)
          } else this.performExit()
        else
          this.props.unmountOnExit &&
            this.state.status === zo &&
            this.setState({ status: ts })
      }),
      (r.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [s] : [Ui.findDOMNode(this), s],
          f = l[0],
          p = l[1],
          h = this.getTimeouts(),
          m = s ? h.appear : h.enter
        if ((!o && !a) || Gv.disabled) {
          this.safeSetState({ status: Fo }, function () {
            i.props.onEntered(f)
          })
          return
        }
        this.props.onEnter(f, p),
          this.safeSetState({ status: io }, function () {
            i.props.onEntering(f, p),
              i.onTransitionEnd(m, function () {
                i.safeSetState({ status: Fo }, function () {
                  i.props.onEntered(f, p)
                })
              })
          })
      }),
      (r.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Ui.findDOMNode(this)
        if (!i || Gv.disabled) {
          this.safeSetState({ status: zo }, function () {
            o.props.onExited(s)
          })
          return
        }
        this.props.onExit(s),
          this.safeSetState({ status: hp }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: zo }, function () {
                  o.props.onExited(s)
                })
              })
          })
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null))
      }),
      (r.safeSetState = function (o, i) {
        ;(i = this.setNextCallback(i)), this.setState(o, i)
      }),
      (r.setNextCallback = function (o) {
        var i = this,
          a = !0
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), o(s))
          }),
          (this.nextCallback.cancel = function () {
            a = !1
          }),
          this.nextCallback
        )
      }),
      (r.onTransitionEnd = function (o, i) {
        this.setNextCallback(i)
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ui.findDOMNode(this),
          s = o == null && !this.props.addEndListener
        if (!a || s) {
          setTimeout(this.nextCallback, 0)
          return
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            f = l[0],
            p = l[1]
          this.props.addEndListener(f, p)
        }
        o != null && setTimeout(this.nextCallback, o)
      }),
      (r.render = function () {
        var o = this.state.status
        if (o === ts) return null
        var i = this.props,
          a = i.children
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef
        var s = ab(i, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ])
        return te.createElement(
          gb.Provider,
          { value: null },
          typeof a == 'function'
            ? a(o, s)
            : te.cloneElement(te.Children.only(a), s)
        )
      }),
      t
    )
  })(te.Component)
Zn.contextType = gb
Zn.propTypes = {}
function Ei() {}
Zn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Ei,
  onEntering: Ei,
  onEntered: Ei,
  onExit: Ei,
  onExiting: Ei,
  onExited: Ei,
}
Zn.UNMOUNTED = ts
Zn.EXITED = zo
Zn.ENTERING = io
Zn.ENTERED = Fo
Zn.EXITING = hp
const YO = Zn
function _b(e) {
  return (e && e.ownerDocument) || document
}
function GO(e) {
  var t = _b(e)
  return (t && t.defaultView) || window
}
function qO(e, t) {
  return GO(e).getComputedStyle(e, t)
}
var ZO = /([A-Z])/g
function KO(e) {
  return e.replace(ZO, '-$1').toLowerCase()
}
var XO = /^ms-/
function Jl(e) {
  return KO(e).replace(XO, '-ms-')
}
var JO =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i
function eD(e) {
  return !!(e && JO.test(e))
}
function wb(e, t) {
  var r = '',
    n = ''
  if (typeof t == 'string')
    return e.style.getPropertyValue(Jl(t)) || qO(e).getPropertyValue(Jl(t))
  Object.keys(t).forEach(function (o) {
    var i = t[o]
    !i && i !== 0
      ? e.style.removeProperty(Jl(o))
      : eD(o)
      ? (n += o + '(' + i + ') ')
      : (r += Jl(o) + ': ' + i + ';')
  }),
    n && (r += 'transform: ' + n + ';'),
    (e.style.cssText += ';' + r)
}
const bb = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
)
var mp = !1,
  yp = !1
try {
  var Wf = {
    get passive() {
      return (mp = !0)
    },
    get once() {
      return (yp = mp = !0)
    },
  }
  bb &&
    (window.addEventListener('test', Wf, Wf),
    window.removeEventListener('test', Wf, !0))
} catch {}
function xb(e, t, r, n) {
  if (n && typeof n != 'boolean' && !yp) {
    var o = n.once,
      i = n.capture,
      a = r
    !yp &&
      o &&
      ((a =
        r.__once ||
        function s(l) {
          this.removeEventListener(t, s, i), r.call(this, l)
        }),
      (r.__once = a)),
      e.addEventListener(t, a, mp ? n : i)
  }
  e.addEventListener(t, r, n)
}
function tD(e, t, r, n) {
  var o = n && typeof n != 'boolean' ? n.capture : n
  e.removeEventListener(t, r, o),
    r.__once && e.removeEventListener(t, r.__once, o)
}
function Bi(e, t, r, n) {
  return (
    xb(e, t, r, n),
    function () {
      tD(e, t, r, n)
    }
  )
}
function rD(e, t, r, n) {
  if ((r === void 0 && (r = !1), n === void 0 && (n = !0), e)) {
    var o = document.createEvent('HTMLEvents')
    o.initEvent(t, r, n), e.dispatchEvent(o)
  }
}
function nD(e) {
  var t = wb(e, 'transitionDuration') || '',
    r = t.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(t) * r
}
function oD(e, t, r) {
  r === void 0 && (r = 5)
  var n = !1,
    o = setTimeout(function () {
      n || rD(e, 'transitionend', !0)
    }, t + r),
    i = Bi(
      e,
      'transitionend',
      function () {
        n = !0
      },
      { once: !0 }
    )
  return function () {
    clearTimeout(o), i()
  }
}
function iD(e, t, r, n) {
  r == null && (r = nD(e) || 0)
  var o = oD(e, r, n),
    i = Bi(e, 'transitionend', t)
  return function () {
    o(), i()
  }
}
function qv(e, t) {
  const r = wb(e, t) || '',
    n = r.indexOf('ms') === -1 ? 1e3 : 1
  return parseFloat(r) * n
}
function aD(e, t) {
  const r = qv(e, 'transitionDuration'),
    n = qv(e, 'transitionDelay'),
    o = iD(
      e,
      (i) => {
        i.target === e && (o(), t(i))
      },
      r + n
    )
}
function sD(e) {
  e.offsetHeight
}
const Zv = (e) =>
  !e || typeof e == 'function'
    ? e
    : (t) => {
        e.current = t
      }
function lD(e, t) {
  const r = Zv(e),
    n = Zv(t)
  return (o) => {
    r && r(o), n && n(o)
  }
}
function Bh(e, t) {
  return M.useMemo(() => lD(e, t), [e, t])
}
function uD(e) {
  return e && 'setState' in e ? Ui.findDOMNode(e) : e ?? null
}
const cD = te.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: r,
        onExit: n,
        onExiting: o,
        onExited: i,
        addEndListener: a,
        children: s,
        childRef: l,
        ...f
      },
      p
    ) => {
      const h = M.useRef(null),
        m = Bh(h, l),
        v = (E) => {
          m(uD(E))
        },
        w = (E) => (C) => {
          E && h.current && E(h.current, C)
        },
        S = M.useCallback(w(e), [e]),
        x = M.useCallback(w(t), [t]),
        y = M.useCallback(w(r), [r]),
        g = M.useCallback(w(n), [n]),
        b = M.useCallback(w(o), [o]),
        I = M.useCallback(w(i), [i]),
        D = M.useCallback(w(a), [a])
      return A.jsx(YO, {
        ref: p,
        ...f,
        onEnter: S,
        onEntered: y,
        onEntering: x,
        onExit: g,
        onExited: I,
        onExiting: b,
        addEndListener: D,
        nodeRef: h,
        children:
          typeof s == 'function'
            ? (E, C) => s(E, { ...C, ref: v })
            : te.cloneElement(s, { ref: v }),
      })
    }
  ),
  fD = cD,
  dD = { [io]: 'show', [Fo]: 'show' },
  Sb = M.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: r = {},
        onEnter: n,
        ...o
      },
      i
    ) => {
      const a = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...o,
        },
        s = M.useCallback(
          (l, f) => {
            sD(l), n == null || n(l, f)
          },
          [n]
        )
      return A.jsx(fD, {
        ref: i,
        addEndListener: aD,
        ...a,
        onEnter: s,
        childRef: t.ref,
        children: (l, f) =>
          M.cloneElement(t, {
            ...f,
            className: _r('fade', e, t.props.className, dD[l], r[l]),
          }),
      })
    }
  )
Sb.displayName = 'Fade'
const Kv = Sb,
  pD = {
    'aria-label': Bf.string,
    onClick: Bf.func,
    variant: Bf.oneOf(['white']),
  },
  Wh = M.forwardRef(
    ({ className: e, variant: t, 'aria-label': r = 'Close', ...n }, o) =>
      A.jsx('button', {
        ref: o,
        type: 'button',
        className: _r('btn-close', t && `btn-close-${t}`, e),
        'aria-label': r,
        ...n,
      })
  )
Wh.displayName = 'CloseButton'
Wh.propTypes = pD
const hD = Wh,
  Eb = M.forwardRef((e, t) => {
    const {
        bsPrefix: r,
        show: n = !0,
        closeLabel: o = 'Close alert',
        closeVariant: i,
        className: a,
        children: s,
        variant: l = 'primary',
        onClose: f,
        dismissible: p,
        transition: h = Kv,
        ...m
      } = sb(e, { show: 'onClose' }),
      v = dn(r, 'alert'),
      w = Cn((y) => {
        f && f(!1, y)
      }),
      S = h === !0 ? Kv : h,
      x = A.jsxs('div', {
        role: 'alert',
        ...(S ? void 0 : m),
        ref: t,
        className: _r(a, v, l && `${v}-${l}`, p && `${v}-dismissible`),
        children: [
          p && A.jsx(hD, { onClick: w, 'aria-label': o, variant: i }),
          s,
        ],
      })
    return S
      ? A.jsx(S, { unmountOnExit: !0, ...m, ref: void 0, in: n, children: x })
      : n
      ? x
      : null
  })
Eb.displayName = 'Alert'
const Mb = Object.assign(Eb, { Link: FO, Heading: jO })
class Ea {
  constructor() {
    ;(this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this))
  }
  subscribe(t) {
    const r = { listener: t }
    return (
      this.listeners.add(r),
      this.onSubscribe(),
      () => {
        this.listeners.delete(r), this.onUnsubscribe()
      }
    )
  }
  hasListeners() {
    return this.listeners.size > 0
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Vs = typeof window > 'u' || 'Deno' in window
function zr() {}
function mD(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function vp(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0
}
function jb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}
function rs(e, t, r) {
  return sl(e)
    ? typeof t == 'function'
      ? { ...r, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e
}
function yD(e, t, r) {
  return sl(e)
    ? typeof t == 'function'
      ? { ...r, mutationKey: e, mutationFn: t }
      : { ...t, mutationKey: e }
    : typeof e == 'function'
    ? { ...t, mutationFn: e }
    : { ...e }
}
function ao(e, t, r) {
  return sl(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t]
}
function Xv(e, t) {
  const {
    type: r = 'all',
    exact: n,
    fetchStatus: o,
    predicate: i,
    queryKey: a,
    stale: s,
  } = e
  if (sl(a)) {
    if (n) {
      if (t.queryHash !== Hh(a, t.options)) return !1
    } else if (!ec(t.queryKey, a)) return !1
  }
  if (r !== 'all') {
    const l = t.isActive()
    if ((r === 'active' && !l) || (r === 'inactive' && l)) return !1
  }
  return !(
    (typeof s == 'boolean' && t.isStale() !== s) ||
    (typeof o < 'u' && o !== t.state.fetchStatus) ||
    (i && !i(t))
  )
}
function Jv(e, t) {
  const { exact: r, fetching: n, predicate: o, mutationKey: i } = e
  if (sl(i)) {
    if (!t.options.mutationKey) return !1
    if (r) {
      if (Go(t.options.mutationKey) !== Go(i)) return !1
    } else if (!ec(t.options.mutationKey, i)) return !1
  }
  return !(
    (typeof n == 'boolean' && (t.state.status === 'loading') !== n) ||
    (o && !o(t))
  )
}
function Hh(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Go)(e)
}
function Go(e) {
  return JSON.stringify(e, (t, r) =>
    gp(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, o) => ((n[o] = r[o]), n), {})
      : r
  )
}
function ec(e, t) {
  return Ib(e, t)
}
function Ib(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == 'object' && typeof t == 'object'
    ? !Object.keys(t).some((r) => !Ib(e[r], t[r]))
    : !1
}
function Tb(e, t) {
  if (e === t) return e
  const r = eg(e) && eg(t)
  if (r || (gp(e) && gp(t))) {
    const n = r ? e.length : Object.keys(e).length,
      o = r ? t : Object.keys(t),
      i = o.length,
      a = r ? [] : {}
    let s = 0
    for (let l = 0; l < i; l++) {
      const f = r ? l : o[l]
      ;(a[f] = Tb(e[f], t[f])), a[f] === e[f] && s++
    }
    return n === i && s === n ? e : a
  }
  return t
}
function tc(e, t) {
  if ((e && !t) || (t && !e)) return !1
  for (const r in e) if (e[r] !== t[r]) return !1
  return !0
}
function eg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function gp(e) {
  if (!tg(e)) return !1
  const t = e.constructor
  if (typeof t > 'u') return !0
  const r = t.prototype
  return !(!tg(r) || !r.hasOwnProperty('isPrototypeOf'))
}
function tg(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function sl(e) {
  return Array.isArray(e)
}
function Cb(e) {
  return new Promise((t) => {
    setTimeout(t, e)
  })
}
function rg(e) {
  Cb(0).then(e)
}
function vD() {
  if (typeof AbortController == 'function') return new AbortController()
}
function _p(e, t, r) {
  return r.isDataEqual != null && r.isDataEqual(e, t)
    ? e
    : typeof r.structuralSharing == 'function'
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
    ? Tb(e, t)
    : t
}
class gD extends Ea {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Vs && window.addEventListener) {
          const r = () => t()
          return (
            window.addEventListener('visibilitychange', r, !1),
            window.addEventListener('focus', r, !1),
            () => {
              window.removeEventListener('visibilitychange', r),
                window.removeEventListener('focus', r)
            }
          )
        }
      })
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup)
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t
      ;(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0)
    }
  }
  setEventListener(t) {
    var r
    ;(this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == 'boolean' ? this.setFocused(n) : this.onFocus()
      }))
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus())
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t()
    })
  }
  isFocused() {
    return typeof this.focused == 'boolean'
      ? this.focused
      : typeof document > 'u'
      ? !0
      : [void 0, 'visible', 'prerender'].includes(document.visibilityState)
  }
}
const rc = new gD(),
  ng = ['online', 'offline']
class _D extends Ea {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Vs && window.addEventListener) {
          const r = () => t()
          return (
            ng.forEach((n) => {
              window.addEventListener(n, r, !1)
            }),
            () => {
              ng.forEach((n) => {
                window.removeEventListener(n, r)
              })
            }
          )
        }
      })
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup)
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t
      ;(t = this.cleanup) == null || t.call(this), (this.cleanup = void 0)
    }
  }
  setEventListener(t) {
    var r
    ;(this.setup = t),
      (r = this.cleanup) == null || r.call(this),
      (this.cleanup = t((n) => {
        typeof n == 'boolean' ? this.setOnline(n) : this.onOnline()
      }))
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline())
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t()
    })
  }
  isOnline() {
    return typeof this.online == 'boolean'
      ? this.online
      : typeof navigator > 'u' || typeof navigator.onLine > 'u'
      ? !0
      : navigator.onLine
  }
}
const nc = new _D()
function wD(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function Nc(e) {
  return (e ?? 'online') === 'online' ? nc.isOnline() : !0
}
class Nb {
  constructor(t) {
    ;(this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent)
  }
}
function yu(e) {
  return e instanceof Nb
}
function Ab(e) {
  let t = !1,
    r = 0,
    n = !1,
    o,
    i,
    a
  const s = new Promise((x, y) => {
      ;(i = x), (a = y)
    }),
    l = (x) => {
      n || (v(new Nb(x)), e.abort == null || e.abort())
    },
    f = () => {
      t = !0
    },
    p = () => {
      t = !1
    },
    h = () => !rc.isFocused() || (e.networkMode !== 'always' && !nc.isOnline()),
    m = (x) => {
      n ||
        ((n = !0),
        e.onSuccess == null || e.onSuccess(x),
        o == null || o(),
        i(x))
    },
    v = (x) => {
      n || ((n = !0), e.onError == null || e.onError(x), o == null || o(), a(x))
    },
    w = () =>
      new Promise((x) => {
        ;(o = (y) => {
          const g = n || !h()
          return g && x(y), g
        }),
          e.onPause == null || e.onPause()
      }).then(() => {
        ;(o = void 0), n || e.onContinue == null || e.onContinue()
      }),
    S = () => {
      if (n) return
      let x
      try {
        x = e.fn()
      } catch (y) {
        x = Promise.reject(y)
      }
      Promise.resolve(x)
        .then(m)
        .catch((y) => {
          var g, b
          if (n) return
          const I = (g = e.retry) != null ? g : 3,
            D = (b = e.retryDelay) != null ? b : wD,
            E = typeof D == 'function' ? D(r, y) : D,
            C =
              I === !0 ||
              (typeof I == 'number' && r < I) ||
              (typeof I == 'function' && I(r, y))
          if (t || !C) {
            v(y)
            return
          }
          r++,
            e.onFail == null || e.onFail(r, y),
            Cb(E)
              .then(() => {
                if (h()) return w()
              })
              .then(() => {
                t ? v(y) : S()
              })
        })
    }
  return (
    Nc(e.networkMode) ? S() : w().then(S),
    {
      promise: s,
      cancel: l,
      continue: () => ((o == null ? void 0 : o()) ? s : Promise.resolve()),
      cancelRetry: f,
      continueRetry: p,
    }
  )
}
const Qh = console
function bD() {
  let e = [],
    t = 0,
    r = (p) => {
      p()
    },
    n = (p) => {
      p()
    }
  const o = (p) => {
      let h
      t++
      try {
        h = p()
      } finally {
        t--, t || s()
      }
      return h
    },
    i = (p) => {
      t
        ? e.push(p)
        : rg(() => {
            r(p)
          })
    },
    a =
      (p) =>
      (...h) => {
        i(() => {
          p(...h)
        })
      },
    s = () => {
      const p = e
      ;(e = []),
        p.length &&
          rg(() => {
            n(() => {
              p.forEach((h) => {
                r(h)
              })
            })
          })
    }
  return {
    batch: o,
    batchCalls: a,
    schedule: i,
    setNotifyFunction: (p) => {
      r = p
    },
    setBatchNotifyFunction: (p) => {
      n = p
    },
  }
}
const Mt = bD()
class Ob {
  destroy() {
    this.clearGcTimeout()
  }
  scheduleGc() {
    this.clearGcTimeout(),
      vp(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove()
        }, this.cacheTime))
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (Vs ? 1 / 0 : 5 * 60 * 1e3)
    )
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0))
  }
}
class xD extends Ob {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || Qh),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || SD(this.options)),
      (this.state = this.initialState),
      this.scheduleGc()
  }
  get meta() {
    return this.options.meta
  }
  setOptions(t) {
    ;(this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime)
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === 'idle' &&
      this.cache.remove(this)
  }
  setData(t, r) {
    const n = _p(this.state.data, t, this.options)
    return (
      this.dispatch({
        data: n,
        type: 'success',
        dataUpdatedAt: r == null ? void 0 : r.updatedAt,
        manual: r == null ? void 0 : r.manual,
      }),
      n
    )
  }
  setState(t, r) {
    this.dispatch({ type: 'setState', state: t, setStateOptions: r })
  }
  cancel(t) {
    var r
    const n = this.promise
    return (
      (r = this.retryer) == null || r.cancel(t),
      n ? n.then(zr).catch(zr) : Promise.resolve()
    )
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 })
  }
  reset() {
    this.destroy(), this.setState(this.initialState)
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1)
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive()
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    )
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !jb(this.state.dataUpdatedAt, t)
    )
  }
  onFocus() {
    var t
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus())
    r && r.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue()
  }
  onOnline() {
    var t
    const r = this.observers.find((n) => n.shouldFetchOnReconnect())
    r && r.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue()
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: 'observerAdded', query: this, observer: t }))
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((r) => r !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: 'observerRemoved', query: this, observer: t }))
  }
  getObserversCount() {
    return this.observers.length
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: 'invalidate' })
  }
  fetch(t, r) {
    var n, o
    if (this.state.fetchStatus !== 'idle') {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({ silent: !0 })
      else if (this.promise) {
        var i
        return (i = this.retryer) == null || i.continueRetry(), this.promise
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((w) => w.options.queryFn)
      v && this.setOptions(v.options)
    }
    const a = vD(),
      s = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      l = (v) => {
        Object.defineProperty(v, 'signal', {
          enumerable: !0,
          get: () => {
            if (a) return (this.abortSignalConsumed = !0), a.signal
          },
        })
      }
    l(s)
    const f = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(s))
          : Promise.reject(
              "Missing queryFn for queryKey '" + this.options.queryHash + "'"
            ),
      p = {
        fetchOptions: r,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: f,
      }
    if (
      (l(p),
      (n = this.options.behavior) == null || n.onFetch(p),
      (this.revertState = this.state),
      this.state.fetchStatus === 'idle' ||
        this.state.fetchMeta !==
          ((o = p.fetchOptions) == null ? void 0 : o.meta))
    ) {
      var h
      this.dispatch({
        type: 'fetch',
        meta: (h = p.fetchOptions) == null ? void 0 : h.meta,
      })
    }
    const m = (v) => {
      if (
        ((yu(v) && v.silent) || this.dispatch({ type: 'error', error: v }),
        !yu(v))
      ) {
        var w, S, x, y
        ;(w = (S = this.cache.config).onError) == null || w.call(S, v, this),
          (x = (y = this.cache.config).onSettled) == null ||
            x.call(y, this.state.data, v, this)
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1)
    }
    return (
      (this.retryer = Ab({
        fn: p.fetchFn,
        abort: a == null ? void 0 : a.abort.bind(a),
        onSuccess: (v) => {
          var w, S, x, y
          if (typeof v > 'u') {
            m(new Error(this.queryHash + ' data is undefined'))
            return
          }
          this.setData(v),
            (w = (S = this.cache.config).onSuccess) == null ||
              w.call(S, v, this),
            (x = (y = this.cache.config).onSettled) == null ||
              x.call(y, v, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1)
        },
        onError: m,
        onFail: (v, w) => {
          this.dispatch({ type: 'failed', failureCount: v, error: w })
        },
        onPause: () => {
          this.dispatch({ type: 'pause' })
        },
        onContinue: () => {
          this.dispatch({ type: 'continue' })
        },
        retry: p.options.retry,
        retryDelay: p.options.retryDelay,
        networkMode: p.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    )
  }
  dispatch(t) {
    const r = (n) => {
      var o, i
      switch (t.type) {
        case 'failed':
          return {
            ...n,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          }
        case 'pause':
          return { ...n, fetchStatus: 'paused' }
        case 'continue':
          return { ...n, fetchStatus: 'fetching' }
        case 'fetch':
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (o = t.meta) != null ? o : null,
            fetchStatus: Nc(this.options.networkMode) ? 'fetching' : 'paused',
            ...(!n.dataUpdatedAt && { error: null, status: 'loading' }),
          }
        case 'success':
          return {
            ...n,
            data: t.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: 'success',
            ...(!t.manual && {
              fetchStatus: 'idle',
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          }
        case 'error':
          const a = t.error
          return yu(a) && a.revert && this.revertState
            ? { ...this.revertState, fetchStatus: 'idle' }
            : {
                ...n,
                error: a,
                errorUpdateCount: n.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: n.fetchFailureCount + 1,
                fetchFailureReason: a,
                fetchStatus: 'idle',
                status: 'error',
              }
        case 'invalidate':
          return { ...n, isInvalidated: !0 }
        case 'setState':
          return { ...n, ...t.state }
      }
    }
    ;(this.state = r(this.state)),
      Mt.batch(() => {
        this.observers.forEach((n) => {
          n.onQueryUpdate(t)
        }),
          this.cache.notify({ query: this, type: 'updated', action: t })
      })
  }
}
function SD(e) {
  const t =
      typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    r = typeof t < 'u',
    n = r
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? 'success' : 'loading',
    fetchStatus: 'idle',
  }
}
class ED extends Ea {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {})
  }
  build(t, r, n) {
    var o
    const i = r.queryKey,
      a = (o = r.queryHash) != null ? o : Hh(i, r)
    let s = this.get(a)
    return (
      s ||
        ((s = new xD({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: a,
          options: t.defaultQueryOptions(r),
          state: n,
          defaultOptions: t.getQueryDefaults(i),
        })),
        this.add(s)),
      s
    )
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: 'added', query: t }))
  }
  remove(t) {
    const r = this.queriesMap[t.queryHash]
    r &&
      (t.destroy(),
      (this.queries = this.queries.filter((n) => n !== t)),
      r === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: 'removed', query: t }))
  }
  clear() {
    Mt.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t)
      })
    })
  }
  get(t) {
    return this.queriesMap[t]
  }
  getAll() {
    return this.queries
  }
  find(t, r) {
    const [n] = ao(t, r)
    return (
      typeof n.exact > 'u' && (n.exact = !0), this.queries.find((o) => Xv(n, o))
    )
  }
  findAll(t, r) {
    const [n] = ao(t, r)
    return Object.keys(n).length > 0
      ? this.queries.filter((o) => Xv(n, o))
      : this.queries
  }
  notify(t) {
    Mt.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t)
      })
    })
  }
  onFocus() {
    Mt.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus()
      })
    })
  }
  onOnline() {
    Mt.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline()
      })
    })
  }
}
class MD extends Ob {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || Qh),
      (this.observers = []),
      (this.state = t.state || Db()),
      this.setOptions(t.options),
      this.scheduleGc()
  }
  setOptions(t) {
    ;(this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime)
  }
  get meta() {
    return this.options.meta
  }
  setState(t) {
    this.dispatch({ type: 'setState', state: t })
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: 'observerAdded',
        mutation: this,
        observer: t,
      }))
  }
  removeObserver(t) {
    ;(this.observers = this.observers.filter((r) => r !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: 'observerRemoved',
        mutation: this,
        observer: t,
      })
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === 'loading'
        ? this.scheduleGc()
        : this.mutationCache.remove(this))
  }
  continue() {
    var t, r
    return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null
      ? t
      : this.execute()
  }
  async execute() {
    const t = () => {
        var C
        return (
          (this.retryer = Ab({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject('No mutationFn found'),
            onFail: (R, W) => {
              this.dispatch({ type: 'failed', failureCount: R, error: W })
            },
            onPause: () => {
              this.dispatch({ type: 'pause' })
            },
            onContinue: () => {
              this.dispatch({ type: 'continue' })
            },
            retry: (C = this.options.retry) != null ? C : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        )
      },
      r = this.state.status === 'loading'
    try {
      var n, o, i, a, s, l, f, p
      if (!r) {
        var h, m, v, w
        this.dispatch({ type: 'loading', variables: this.options.variables }),
          await ((h = (m = this.mutationCache.config).onMutate) == null
            ? void 0
            : h.call(m, this.state.variables, this))
        const R = await ((v = (w = this.options).onMutate) == null
          ? void 0
          : v.call(w, this.state.variables))
        R !== this.state.context &&
          this.dispatch({
            type: 'loading',
            context: R,
            variables: this.state.variables,
          })
      }
      const C = await t()
      return (
        await ((n = (o = this.mutationCache.config).onSuccess) == null
          ? void 0
          : n.call(o, C, this.state.variables, this.state.context, this)),
        await ((i = (a = this.options).onSuccess) == null
          ? void 0
          : i.call(a, C, this.state.variables, this.state.context)),
        await ((s = (l = this.mutationCache.config).onSettled) == null
          ? void 0
          : s.call(l, C, null, this.state.variables, this.state.context, this)),
        await ((f = (p = this.options).onSettled) == null
          ? void 0
          : f.call(p, C, null, this.state.variables, this.state.context)),
        this.dispatch({ type: 'success', data: C }),
        C
      )
    } catch (C) {
      try {
        var S, x, y, g, b, I, D, E
        throw (
          (await ((S = (x = this.mutationCache.config).onError) == null
            ? void 0
            : S.call(x, C, this.state.variables, this.state.context, this)),
          await ((y = (g = this.options).onError) == null
            ? void 0
            : y.call(g, C, this.state.variables, this.state.context)),
          await ((b = (I = this.mutationCache.config).onSettled) == null
            ? void 0
            : b.call(
                I,
                void 0,
                C,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((D = (E = this.options).onSettled) == null
            ? void 0
            : D.call(E, void 0, C, this.state.variables, this.state.context)),
          C)
        )
      } finally {
        this.dispatch({ type: 'error', error: C })
      }
    }
  }
  dispatch(t) {
    const r = (n) => {
      switch (t.type) {
        case 'failed':
          return { ...n, failureCount: t.failureCount, failureReason: t.error }
        case 'pause':
          return { ...n, isPaused: !0 }
        case 'continue':
          return { ...n, isPaused: !1 }
        case 'loading':
          return {
            ...n,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Nc(this.options.networkMode),
            status: 'loading',
            variables: t.variables,
          }
        case 'success':
          return {
            ...n,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: !1,
          }
        case 'error':
          return {
            ...n,
            data: void 0,
            error: t.error,
            failureCount: n.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: 'error',
          }
        case 'setState':
          return { ...n, ...t.state }
      }
    }
    ;(this.state = r(this.state)),
      Mt.batch(() => {
        this.observers.forEach((n) => {
          n.onMutationUpdate(t)
        }),
          this.mutationCache.notify({
            mutation: this,
            type: 'updated',
            action: t,
          })
      })
  }
}
function Db() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
  }
}
class jD extends Ea {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0)
  }
  build(t, r, n) {
    const o = new MD({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey
        ? t.getMutationDefaults(r.mutationKey)
        : void 0,
    })
    return this.add(o), o
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: 'added', mutation: t })
  }
  remove(t) {
    ;(this.mutations = this.mutations.filter((r) => r !== t)),
      this.notify({ type: 'removed', mutation: t })
  }
  clear() {
    Mt.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t)
      })
    })
  }
  getAll() {
    return this.mutations
  }
  find(t) {
    return (
      typeof t.exact > 'u' && (t.exact = !0),
      this.mutations.find((r) => Jv(t, r))
    )
  }
  findAll(t) {
    return this.mutations.filter((r) => Jv(t, r))
  }
  notify(t) {
    Mt.batch(() => {
      this.listeners.forEach(({ listener: r }) => {
        r(t)
      })
    })
  }
  resumePausedMutations() {
    var t
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const r = this.mutations.filter((n) => n.state.isPaused)
          return Mt.batch(() =>
            r.reduce(
              (n, o) => n.then(() => o.continue().catch(zr)),
              Promise.resolve()
            )
          )
        })
        .then(() => {
          this.resuming = void 0
        })),
      this.resuming
    )
  }
}
function ID() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, r, n, o, i, a
        const s =
            (t = e.fetchOptions) == null || (r = t.meta) == null
              ? void 0
              : r.refetchPage,
          l =
            (n = e.fetchOptions) == null || (o = n.meta) == null
              ? void 0
              : o.fetchMore,
          f = l == null ? void 0 : l.pageParam,
          p = (l == null ? void 0 : l.direction) === 'forward',
          h = (l == null ? void 0 : l.direction) === 'backward',
          m = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          v = ((a = e.state.data) == null ? void 0 : a.pageParams) || []
        let w = v,
          S = !1
        const x = (E) => {
            Object.defineProperty(E, 'signal', {
              enumerable: !0,
              get: () => {
                var C
                if ((C = e.signal) != null && C.aborted) S = !0
                else {
                  var R
                  ;(R = e.signal) == null ||
                    R.addEventListener('abort', () => {
                      S = !0
                    })
                }
                return e.signal
              },
            })
          },
          y =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                "Missing queryFn for queryKey '" + e.options.queryHash + "'"
              )),
          g = (E, C, R, W) => (
            (w = W ? [C, ...w] : [...w, C]), W ? [R, ...E] : [...E, R]
          ),
          b = (E, C, R, W) => {
            if (S) return Promise.reject('Cancelled')
            if (typeof R > 'u' && !C && E.length) return Promise.resolve(E)
            const F = {
              queryKey: e.queryKey,
              pageParam: R,
              meta: e.options.meta,
            }
            x(F)
            const G = y(F)
            return Promise.resolve(G).then((B) => g(E, R, B, W))
          }
        let I
        if (!m.length) I = b([])
        else if (p) {
          const E = typeof f < 'u',
            C = E ? f : og(e.options, m)
          I = b(m, E, C)
        } else if (h) {
          const E = typeof f < 'u',
            C = E ? f : TD(e.options, m)
          I = b(m, E, C, !0)
        } else {
          w = []
          const E = typeof e.options.getNextPageParam > 'u'
          I = (s && m[0] ? s(m[0], 0, m) : !0)
            ? b([], E, v[0])
            : Promise.resolve(g([], v[0], m[0]))
          for (let R = 1; R < m.length; R++)
            I = I.then((W) => {
              if (s && m[R] ? s(m[R], R, m) : !0) {
                const G = E ? v[R] : og(e.options, W)
                return b(W, E, G)
              }
              return Promise.resolve(g(W, v[R], m[R]))
            })
        }
        return I.then((E) => ({ pages: E, pageParams: w }))
      }
    },
  }
}
function og(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t)
}
function TD(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t)
}
class CD {
  constructor(t = {}) {
    ;(this.queryCache = t.queryCache || new ED()),
      (this.mutationCache = t.mutationCache || new jD()),
      (this.logger = t.logger || Qh),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0)
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = rc.subscribe(() => {
          rc.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus())
        })),
        (this.unsubscribeOnline = nc.subscribe(() => {
          nc.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline())
        })))
  }
  unmount() {
    var t, r
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (r = this.unsubscribeOnline) == null || r.call(this),
        (this.unsubscribeOnline = void 0))
  }
  isFetching(t, r) {
    const [n] = ao(t, r)
    return (n.fetchStatus = 'fetching'), this.queryCache.findAll(n).length
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length
  }
  getQueryData(t, r) {
    var n
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data
  }
  ensureQueryData(t, r, n) {
    const o = rs(t, r, n),
      i = this.getQueryData(o.queryKey)
    return i ? Promise.resolve(i) : this.fetchQuery(o)
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: r, state: n }) => {
        const o = n.data
        return [r, o]
      })
  }
  setQueryData(t, r, n) {
    const o = this.queryCache.find(t),
      i = o == null ? void 0 : o.state.data,
      a = mD(r, i)
    if (typeof a > 'u') return
    const s = rs(t),
      l = this.defaultQueryOptions(s)
    return this.queryCache.build(this, l).setData(a, { ...n, manual: !0 })
  }
  setQueriesData(t, r, n) {
    return Mt.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: o }) => [o, this.setQueryData(o, r, n)])
    )
  }
  getQueryState(t, r) {
    var n
    return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state
  }
  removeQueries(t, r) {
    const [n] = ao(t, r),
      o = this.queryCache
    Mt.batch(() => {
      o.findAll(n).forEach((i) => {
        o.remove(i)
      })
    })
  }
  resetQueries(t, r, n) {
    const [o, i] = ao(t, r, n),
      a = this.queryCache,
      s = { type: 'active', ...o }
    return Mt.batch(
      () => (
        a.findAll(o).forEach((l) => {
          l.reset()
        }),
        this.refetchQueries(s, i)
      )
    )
  }
  cancelQueries(t, r, n) {
    const [o, i = {}] = ao(t, r, n)
    typeof i.revert > 'u' && (i.revert = !0)
    const a = Mt.batch(() => this.queryCache.findAll(o).map((s) => s.cancel(i)))
    return Promise.all(a).then(zr).catch(zr)
  }
  invalidateQueries(t, r, n) {
    const [o, i] = ao(t, r, n)
    return Mt.batch(() => {
      var a, s
      if (
        (this.queryCache.findAll(o).forEach((f) => {
          f.invalidate()
        }),
        o.refetchType === 'none')
      )
        return Promise.resolve()
      const l = {
        ...o,
        type:
          (a = (s = o.refetchType) != null ? s : o.type) != null ? a : 'active',
      }
      return this.refetchQueries(l, i)
    })
  }
  refetchQueries(t, r, n) {
    const [o, i] = ao(t, r, n),
      a = Mt.batch(() =>
        this.queryCache
          .findAll(o)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var f
            return l.fetch(void 0, {
              ...i,
              cancelRefetch:
                (f = i == null ? void 0 : i.cancelRefetch) != null ? f : !0,
              meta: { refetchPage: o.refetchPage },
            })
          })
      )
    let s = Promise.all(a).then(zr)
    return (i != null && i.throwOnError) || (s = s.catch(zr)), s
  }
  fetchQuery(t, r, n) {
    const o = rs(t, r, n),
      i = this.defaultQueryOptions(o)
    typeof i.retry > 'u' && (i.retry = !1)
    const a = this.queryCache.build(this, i)
    return a.isStaleByTime(i.staleTime)
      ? a.fetch(i)
      : Promise.resolve(a.state.data)
  }
  prefetchQuery(t, r, n) {
    return this.fetchQuery(t, r, n).then(zr).catch(zr)
  }
  fetchInfiniteQuery(t, r, n) {
    const o = rs(t, r, n)
    return (o.behavior = ID()), this.fetchQuery(o)
  }
  prefetchInfiniteQuery(t, r, n) {
    return this.fetchInfiniteQuery(t, r, n).then(zr).catch(zr)
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations()
  }
  getQueryCache() {
    return this.queryCache
  }
  getMutationCache() {
    return this.mutationCache
  }
  getLogger() {
    return this.logger
  }
  getDefaultOptions() {
    return this.defaultOptions
  }
  setDefaultOptions(t) {
    this.defaultOptions = t
  }
  setQueryDefaults(t, r) {
    const n = this.queryDefaults.find((o) => Go(t) === Go(o.queryKey))
    n
      ? (n.defaultOptions = r)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: r })
  }
  getQueryDefaults(t) {
    if (!t) return
    const r = this.queryDefaults.find((n) => ec(t, n.queryKey))
    return r == null ? void 0 : r.defaultOptions
  }
  setMutationDefaults(t, r) {
    const n = this.mutationDefaults.find((o) => Go(t) === Go(o.mutationKey))
    n
      ? (n.defaultOptions = r)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: r })
  }
  getMutationDefaults(t) {
    if (!t) return
    const r = this.mutationDefaults.find((n) => ec(t, n.mutationKey))
    return r == null ? void 0 : r.defaultOptions
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    }
    return (
      !r.queryHash && r.queryKey && (r.queryHash = Hh(r.queryKey, r)),
      typeof r.refetchOnReconnect > 'u' &&
        (r.refetchOnReconnect = r.networkMode !== 'always'),
      typeof r.useErrorBoundary > 'u' && (r.useErrorBoundary = !!r.suspense),
      r
    )
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        }
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear()
  }
}
class ND extends Ea {
  constructor(t, r) {
    super(),
      (this.client = t),
      (this.options = r),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(r)
  }
  bindMethods() {
    ;(this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this))
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      ig(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers())
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy()
  }
  shouldFetchOnReconnect() {
    return wp(this.currentQuery, this.options, this.options.refetchOnReconnect)
  }
  shouldFetchOnWindowFocus() {
    return wp(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    )
  }
  destroy() {
    ;(this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this)
  }
  setOptions(t, r) {
    const n = this.options,
      o = this.currentQuery
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      tc(n, this.options) ||
        this.client.getQueryCache().notify({
          type: 'observerOptionsUpdated',
          query: this.currentQuery,
          observer: this,
        }),
      typeof this.options.enabled < 'u' &&
        typeof this.options.enabled != 'boolean')
    )
      throw new Error('Expected enabled to be a boolean')
    this.options.queryKey || (this.options.queryKey = n.queryKey),
      this.updateQuery()
    const i = this.hasListeners()
    i && ag(this.currentQuery, o, this.options, n) && this.executeFetch(),
      this.updateResult(r),
      i &&
        (this.currentQuery !== o ||
          this.options.enabled !== n.enabled ||
          this.options.staleTime !== n.staleTime) &&
        this.updateStaleTimeout()
    const a = this.computeRefetchInterval()
    i &&
      (this.currentQuery !== o ||
        this.options.enabled !== n.enabled ||
        a !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(a)
  }
  getOptimisticResult(t) {
    const r = this.client.getQueryCache().build(this.client, t),
      n = this.createResult(r, t)
    return (
      OD(this, n, t) &&
        ((this.currentResult = n),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      n
    )
  }
  getCurrentResult() {
    return this.currentResult
  }
  trackResult(t) {
    const r = {}
    return (
      Object.keys(t).forEach((n) => {
        Object.defineProperty(r, n, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(n), t[n]),
        })
      }),
      r
    )
  }
  getCurrentQuery() {
    return this.currentQuery
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery)
  }
  refetch({ refetchPage: t, ...r } = {}) {
    return this.fetch({ ...r, meta: { refetchPage: t } })
  }
  fetchOptimistic(t) {
    const r = this.client.defaultQueryOptions(t),
      n = this.client.getQueryCache().build(this.client, r)
    return (
      (n.isFetchingOptimistic = !0),
      n.fetch().then(() => this.createResult(n, r))
    )
  }
  fetch(t) {
    var r
    return this.executeFetch({
      ...t,
      cancelRefetch: (r = t.cancelRefetch) != null ? r : !0,
    }).then(() => (this.updateResult(), this.currentResult))
  }
  executeFetch(t) {
    this.updateQuery()
    let r = this.currentQuery.fetch(this.options, t)
    return (t != null && t.throwOnError) || (r = r.catch(zr)), r
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      Vs || this.currentResult.isStale || !vp(this.options.staleTime))
    )
      return
    const r = jb(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult()
    }, r)
  }
  computeRefetchInterval() {
    var t
    return typeof this.options.refetchInterval == 'function'
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        Vs ||
        this.options.enabled === !1 ||
        !vp(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          ;(this.options.refetchIntervalInBackground || rc.isFocused()) &&
            this.executeFetch()
        }, this.currentRefetchInterval))
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval())
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0))
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId), (this.refetchIntervalId = void 0))
  }
  createResult(t, r) {
    const n = this.currentQuery,
      o = this.options,
      i = this.currentResult,
      a = this.currentResultState,
      s = this.currentResultOptions,
      l = t !== n,
      f = l ? t.state : this.currentQueryInitialState,
      p = l ? this.currentResult : this.previousQueryResult,
      { state: h } = t
    let {
        dataUpdatedAt: m,
        error: v,
        errorUpdatedAt: w,
        fetchStatus: S,
        status: x,
      } = h,
      y = !1,
      g = !1,
      b
    if (r._optimisticResults) {
      const R = this.hasListeners(),
        W = !R && ig(t, r),
        F = R && ag(t, n, r, o)
      ;(W || F) &&
        ((S = Nc(t.options.networkMode) ? 'fetching' : 'paused'),
        m || (x = 'loading')),
        r._optimisticResults === 'isRestoring' && (S = 'idle')
    }
    if (
      r.keepPreviousData &&
      !h.dataUpdatedAt &&
      p != null &&
      p.isSuccess &&
      x !== 'error'
    )
      (b = p.data), (m = p.dataUpdatedAt), (x = p.status), (y = !0)
    else if (r.select && typeof h.data < 'u')
      if (
        i &&
        h.data === (a == null ? void 0 : a.data) &&
        r.select === this.selectFn
      )
        b = this.selectResult
      else
        try {
          ;(this.selectFn = r.select),
            (b = r.select(h.data)),
            (b = _p(i == null ? void 0 : i.data, b, r)),
            (this.selectResult = b),
            (this.selectError = null)
        } catch (R) {
          this.selectError = R
        }
    else b = h.data
    if (typeof r.placeholderData < 'u' && typeof b > 'u' && x === 'loading') {
      let R
      if (
        i != null &&
        i.isPlaceholderData &&
        r.placeholderData === (s == null ? void 0 : s.placeholderData)
      )
        R = i.data
      else if (
        ((R =
          typeof r.placeholderData == 'function'
            ? r.placeholderData()
            : r.placeholderData),
        r.select && typeof R < 'u')
      )
        try {
          ;(R = r.select(R)), (this.selectError = null)
        } catch (W) {
          this.selectError = W
        }
      typeof R < 'u' &&
        ((x = 'success'), (b = _p(i == null ? void 0 : i.data, R, r)), (g = !0))
    }
    this.selectError &&
      ((v = this.selectError),
      (b = this.selectResult),
      (w = Date.now()),
      (x = 'error'))
    const I = S === 'fetching',
      D = x === 'loading',
      E = x === 'error'
    return {
      status: x,
      fetchStatus: S,
      isLoading: D,
      isSuccess: x === 'success',
      isError: E,
      isInitialLoading: D && I,
      data: b,
      dataUpdatedAt: m,
      error: v,
      errorUpdatedAt: w,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
      isFetchedAfterMount:
        h.dataUpdateCount > f.dataUpdateCount ||
        h.errorUpdateCount > f.errorUpdateCount,
      isFetching: I,
      isRefetching: I && !D,
      isLoadingError: E && h.dataUpdatedAt === 0,
      isPaused: S === 'paused',
      isPlaceholderData: g,
      isPreviousData: y,
      isRefetchError: E && h.dataUpdatedAt !== 0,
      isStale: Vh(t, r),
      refetch: this.refetch,
      remove: this.remove,
    }
  }
  updateResult(t) {
    const r = this.currentResult,
      n = this.createResult(this.currentQuery, this.options)
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      tc(n, r))
    )
      return
    this.currentResult = n
    const o = { cache: !0 },
      i = () => {
        if (!r) return !0
        const { notifyOnChangeProps: a } = this.options,
          s = typeof a == 'function' ? a() : a
        if (s === 'all' || (!s && !this.trackedProps.size)) return !0
        const l = new Set(s ?? this.trackedProps)
        return (
          this.options.useErrorBoundary && l.add('error'),
          Object.keys(this.currentResult).some((f) => {
            const p = f
            return this.currentResult[p] !== r[p] && l.has(p)
          })
        )
      }
    ;(t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0),
      this.notify({ ...o, ...t })
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options)
    if (t === this.currentQuery) return
    const r = this.currentQuery
    ;(this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (r == null || r.removeObserver(this), t.addObserver(this))
  }
  onQueryUpdate(t) {
    const r = {}
    t.type === 'success'
      ? (r.onSuccess = !t.manual)
      : t.type === 'error' && !yu(t.error) && (r.onError = !0),
      this.updateResult(r),
      this.hasListeners() && this.updateTimers()
  }
  notify(t) {
    Mt.batch(() => {
      if (t.onSuccess) {
        var r, n, o, i
        ;(r = (n = this.options).onSuccess) == null ||
          r.call(n, this.currentResult.data),
          (o = (i = this.options).onSettled) == null ||
            o.call(i, this.currentResult.data, null)
      } else if (t.onError) {
        var a, s, l, f
        ;(a = (s = this.options).onError) == null ||
          a.call(s, this.currentResult.error),
          (l = (f = this.options).onSettled) == null ||
            l.call(f, void 0, this.currentResult.error)
      }
      t.listeners &&
        this.listeners.forEach(({ listener: p }) => {
          p(this.currentResult)
        }),
        t.cache &&
          this.client.getQueryCache().notify({
            query: this.currentQuery,
            type: 'observerResultsUpdated',
          })
    })
  }
}
function AD(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  )
}
function ig(e, t) {
  return AD(e, t) || (e.state.dataUpdatedAt > 0 && wp(e, t, t.refetchOnMount))
}
function wp(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == 'function' ? r(e) : r
    return n === 'always' || (n !== !1 && Vh(e, t))
  }
  return !1
}
function ag(e, t, r, n) {
  return (
    r.enabled !== !1 &&
    (e !== t || n.enabled === !1) &&
    (!r.suspense || e.state.status !== 'error') &&
    Vh(e, r)
  )
}
function Vh(e, t) {
  return e.isStaleByTime(t.staleTime)
}
function OD(e, t, r) {
  return r.keepPreviousData
    ? !1
    : r.placeholderData !== void 0
    ? t.isPlaceholderData
    : !tc(e.getCurrentResult(), t)
}
let DD = class extends Ea {
  constructor(t, r) {
    super(),
      (this.client = t),
      this.setOptions(r),
      this.bindMethods(),
      this.updateResult()
  }
  bindMethods() {
    ;(this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this))
  }
  setOptions(t) {
    var r
    const n = this.options
    ;(this.options = this.client.defaultMutationOptions(t)),
      tc(n, this.options) ||
        this.client.getMutationCache().notify({
          type: 'observerOptionsUpdated',
          mutation: this.currentMutation,
          observer: this,
        }),
      (r = this.currentMutation) == null || r.setOptions(this.options)
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t
      ;(t = this.currentMutation) == null || t.removeObserver(this)
    }
  }
  onMutationUpdate(t) {
    this.updateResult()
    const r = { listeners: !0 }
    t.type === 'success'
      ? (r.onSuccess = !0)
      : t.type === 'error' && (r.onError = !0),
      this.notify(r)
  }
  getCurrentResult() {
    return this.currentResult
  }
  reset() {
    ;(this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 })
  }
  mutate(t, r) {
    return (
      (this.mutateOptions = r),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: typeof t < 'u' ? t : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    )
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : Db(),
      r = {
        ...t,
        isLoading: t.status === 'loading',
        isSuccess: t.status === 'success',
        isError: t.status === 'error',
        isIdle: t.status === 'idle',
        mutate: this.mutate,
        reset: this.reset,
      }
    this.currentResult = r
  }
  notify(t) {
    Mt.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var r, n, o, i
          ;(r = (n = this.mutateOptions).onSuccess) == null ||
            r.call(
              n,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (o = (i = this.mutateOptions).onSettled) == null ||
              o.call(
                i,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              )
        } else if (t.onError) {
          var a, s, l, f
          ;(a = (s = this.mutateOptions).onError) == null ||
            a.call(
              s,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (l = (f = this.mutateOptions).onSettled) == null ||
              l.call(
                f,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              )
        }
      }
      t.listeners &&
        this.listeners.forEach(({ listener: p }) => {
          p(this.currentResult)
        })
    })
  }
}
var Pb = { exports: {} },
  kb = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pa = M
function PD(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var kD = typeof Object.is == 'function' ? Object.is : PD,
  RD = pa.useState,
  LD = pa.useEffect,
  zD = pa.useLayoutEffect,
  UD = pa.useDebugValue
function FD(e, t) {
  var r = t(),
    n = RD({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1]
  return (
    zD(
      function () {
        ;(o.value = r), (o.getSnapshot = t), Hf(o) && i({ inst: o })
      },
      [e, r, t]
    ),
    LD(
      function () {
        return (
          Hf(o) && i({ inst: o }),
          e(function () {
            Hf(o) && i({ inst: o })
          })
        )
      },
      [e]
    ),
    UD(r),
    r
  )
}
function Hf(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var r = t()
    return !kD(e, r)
  } catch {
    return !0
  }
}
function $D(e, t) {
  return t()
}
var BD =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? $D
    : FD
kb.useSyncExternalStore =
  pa.useSyncExternalStore !== void 0 ? pa.useSyncExternalStore : BD
Pb.exports = kb
var WD = Pb.exports
const Rb = WD.useSyncExternalStore,
  sg = M.createContext(void 0),
  Lb = M.createContext(!1)
function zb(e, t) {
  return (
    e ||
    (t && typeof window < 'u'
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = sg),
        window.ReactQueryClientContext)
      : sg)
  )
}
const Yh = ({ context: e } = {}) => {
    const t = M.useContext(zb(e, M.useContext(Lb)))
    if (!t)
      throw new Error('No QueryClient set, use QueryClientProvider to set one')
    return t
  },
  HD = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
    M.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount()
        }
      ),
      [e]
    )
    const o = zb(r, n)
    return M.createElement(
      Lb.Provider,
      { value: !r && n },
      M.createElement(o.Provider, { value: e }, t)
    )
  },
  Ub = M.createContext(!1),
  QD = () => M.useContext(Ub)
Ub.Provider
function VD() {
  let e = !1
  return {
    clearReset: () => {
      e = !1
    },
    reset: () => {
      e = !0
    },
    isReset: () => e,
  }
}
const YD = M.createContext(VD()),
  GD = () => M.useContext(YD)
function Fb(e, t) {
  return typeof e == 'function' ? e(...t) : !!e
}
const qD = (e, t) => {
    ;(e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1))
  },
  ZD = (e) => {
    M.useEffect(() => {
      e.clearReset()
    }, [e])
  },
  KD = ({ result: e, errorResetBoundary: t, useErrorBoundary: r, query: n }) =>
    e.isError && !t.isReset() && !e.isFetching && Fb(r, [e.error, n]),
  XD = (e) => {
    e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3)
  },
  JD = (e, t) => e.isLoading && e.isFetching && !t,
  eP = (e, t, r) => (e == null ? void 0 : e.suspense) && JD(t, r),
  tP = (e, t, r) =>
    t
      .fetchOptimistic(e)
      .then(({ data: n }) => {
        e.onSuccess == null || e.onSuccess(n),
          e.onSettled == null || e.onSettled(n, null)
      })
      .catch((n) => {
        r.clearReset(),
          e.onError == null || e.onError(n),
          e.onSettled == null || e.onSettled(void 0, n)
      })
function rP(e, t) {
  const r = Yh({ context: e.context }),
    n = QD(),
    o = GD(),
    i = r.defaultQueryOptions(e)
  ;(i._optimisticResults = n ? 'isRestoring' : 'optimistic'),
    i.onError && (i.onError = Mt.batchCalls(i.onError)),
    i.onSuccess && (i.onSuccess = Mt.batchCalls(i.onSuccess)),
    i.onSettled && (i.onSettled = Mt.batchCalls(i.onSettled)),
    XD(i),
    qD(i, o),
    ZD(o)
  const [a] = M.useState(() => new t(r, i)),
    s = a.getOptimisticResult(i)
  if (
    (Rb(
      M.useCallback(
        (l) => {
          const f = n ? () => {} : a.subscribe(Mt.batchCalls(l))
          return a.updateResult(), f
        },
        [a, n]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    M.useEffect(() => {
      a.setOptions(i, { listeners: !1 })
    }, [i, a]),
    eP(i, s, n))
  )
    throw tP(i, a, o)
  if (
    KD({
      result: s,
      errorResetBoundary: o,
      useErrorBoundary: i.useErrorBoundary,
      query: a.getCurrentQuery(),
    })
  )
    throw s.error
  return i.notifyOnChangeProps ? s : a.trackResult(s)
}
function $b(e, t, r) {
  const n = rs(e, t, r)
  return rP(n, ND)
}
function nP(e, t, r) {
  const n = yD(e, t, r),
    o = Yh({ context: n.context }),
    [i] = M.useState(() => new DD(o, n))
  M.useEffect(() => {
    i.setOptions(n)
  }, [i, n])
  const a = Rb(
      M.useCallback((l) => i.subscribe(Mt.batchCalls(l)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    s = M.useCallback(
      (l, f) => {
        i.mutate(l, f).catch(oP)
      },
      [i]
    )
  if (a.error && Fb(i.options.useErrorBoundary, [a.error])) throw a.error
  return { ...a, mutate: s, mutateAsync: a.mutate }
}
function oP() {}
const Bb = M.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: r = 'primary',
      size: n,
      active: o = !1,
      disabled: i = !1,
      className: a,
      ...s
    },
    l
  ) => {
    const f = dn(t, 'btn'),
      [p, { tagName: h }] = $h({ tagName: e, disabled: i, ...s }),
      m = h
    return A.jsx(m, {
      ...p,
      ...s,
      ref: l,
      disabled: i,
      className: _r(
        a,
        f,
        o && 'active',
        r && `${f}-${r}`,
        n && `${f}-${n}`,
        s.href && i && 'disabled'
      ),
    })
  }
)
Bb.displayName = 'Button'
const qo = Bb
var iP = Function.prototype.bind.call(Function.prototype.call, [].slice)
function lg(e, t) {
  return iP(e.querySelectorAll(t))
}
function aP(e, t, r) {
  const n = M.useRef(e !== void 0),
    [o, i] = M.useState(t),
    a = e !== void 0,
    s = n.current
  return (
    (n.current = a),
    !a && s && o !== t && i(t),
    [
      a ? e : o,
      M.useCallback(
        (...l) => {
          const [f, ...p] = l
          let h = r == null ? void 0 : r(f, ...p)
          return i(f), h
        },
        [r]
      ),
    ]
  )
}
function sP() {
  const [, e] = M.useReducer((t) => !t, !1)
  return e
}
const lP = M.createContext(null),
  Ac = lP
var ug = Object.prototype.hasOwnProperty
function cg(e, t, r) {
  for (r of e.keys()) if (bs(r, t)) return r
}
function bs(e, t) {
  var r, n, o
  if (e === t) return !0
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date) return e.getTime() === t.getTime()
    if (r === RegExp) return e.toString() === t.toString()
    if (r === Array) {
      if ((n = e.length) === t.length) for (; n-- && bs(e[n], t[n]); );
      return n === -1
    }
    if (r === Set) {
      if (e.size !== t.size) return !1
      for (n of e)
        if (
          ((o = n),
          (o && typeof o == 'object' && ((o = cg(t, o)), !o)) || !t.has(o))
        )
          return !1
      return !0
    }
    if (r === Map) {
      if (e.size !== t.size) return !1
      for (n of e)
        if (
          ((o = n[0]),
          (o && typeof o == 'object' && ((o = cg(t, o)), !o)) ||
            !bs(n[1], t.get(o)))
        )
          return !1
      return !0
    }
    if (r === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t))
    else if (r === DataView) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e.getInt8(n) === t.getInt8(n); );
      return n === -1
    }
    if (ArrayBuffer.isView(e)) {
      if ((n = e.byteLength) === t.byteLength) for (; n-- && e[n] === t[n]; );
      return n === -1
    }
    if (!r || typeof e == 'object') {
      n = 0
      for (r in e)
        if (
          (ug.call(e, r) && ++n && !ug.call(t, r)) ||
          !(r in t) ||
          !bs(e[r], t[r])
        )
          return !1
      return Object.keys(t).length === n
    }
  }
  return e !== e && t !== t
}
function uP(e) {
  const t = CO()
  return [
    e[0],
    M.useCallback(
      (r) => {
        if (t()) return e[1](r)
      },
      [t, e[1]]
    ),
  ]
}
const cP = lC({ defaultModifiers: [QT, ZT, NT, OT, GT, WT, JT, jT] }),
  fP = ['enabled', 'placement', 'strategy', 'modifiers']
function dP(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
const pP = {
    name: 'applyStyles',
    enabled: !1,
    phase: 'afterWrite',
    fn: () => {},
  },
  hP = {
    name: 'ariaDescribedBy',
    enabled: !0,
    phase: 'afterWrite',
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: r } = e.elements
        if ('removeAttribute' in t) {
          const n = (t.getAttribute('aria-describedby') || '')
            .split(',')
            .filter((o) => o.trim() !== r.id)
          n.length
            ? t.setAttribute('aria-describedby', n.join(','))
            : t.removeAttribute('aria-describedby')
        }
      },
    fn: ({ state: e }) => {
      var t
      const { popper: r, reference: n } = e.elements,
        o = (t = r.getAttribute('role')) == null ? void 0 : t.toLowerCase()
      if (r.id && o === 'tooltip' && 'setAttribute' in n) {
        const i = n.getAttribute('aria-describedby')
        if (i && i.split(',').indexOf(r.id) !== -1) return
        n.setAttribute('aria-describedby', i ? `${i},${r.id}` : r.id)
      }
    },
  },
  mP = []
function yP(e, t, r = {}) {
  let {
      enabled: n = !0,
      placement: o = 'bottom',
      strategy: i = 'absolute',
      modifiers: a = mP,
    } = r,
    s = dP(r, fP)
  const l = M.useRef(a),
    f = M.useRef(),
    p = M.useCallback(() => {
      var x
      ;(x = f.current) == null || x.update()
    }, []),
    h = M.useCallback(() => {
      var x
      ;(x = f.current) == null || x.forceUpdate()
    }, []),
    [m, v] = uP(
      M.useState({
        placement: o,
        update: p,
        forceUpdate: h,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })
    ),
    w = M.useMemo(
      () => ({
        name: 'updateStateModifier',
        enabled: !0,
        phase: 'write',
        requires: ['computeStyles'],
        fn: ({ state: x }) => {
          const y = {},
            g = {}
          Object.keys(x.elements).forEach((b) => {
            ;(y[b] = x.styles[b]), (g[b] = x.attributes[b])
          }),
            v({
              state: x,
              styles: y,
              attributes: g,
              update: p,
              forceUpdate: h,
              placement: x.placement,
            })
        },
      }),
      [p, h, v]
    ),
    S = M.useMemo(() => (bs(l.current, a) || (l.current = a), l.current), [a])
  return (
    M.useEffect(() => {
      !f.current ||
        !n ||
        f.current.setOptions({
          placement: o,
          strategy: i,
          modifiers: [...S, w, pP],
        })
    }, [i, o, w, n, S]),
    M.useEffect(() => {
      if (!(!n || e == null || t == null))
        return (
          (f.current = cP(
            e,
            t,
            Object.assign({}, s, {
              placement: o,
              strategy: i,
              modifiers: [...S, hP, w],
            })
          )),
          () => {
            f.current != null &&
              (f.current.destroy(),
              (f.current = void 0),
              v((x) =>
                Object.assign({}, x, { attributes: {}, styles: { popper: {} } })
              ))
          }
        )
    }, [n, e, t]),
    m
  )
}
function fg(e, t) {
  if (e.contains) return e.contains(t)
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16)
}
const dg = () => {}
function vP(e) {
  return e.button === 0
}
function gP(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
const Qf = (e) => e && ('current' in e ? e.current : e),
  pg = { click: 'mousedown', mouseup: 'mousedown', pointerup: 'pointerdown' }
function _P(e, t = dg, { disabled: r, clickTrigger: n = 'click' } = {}) {
  const o = M.useRef(!1),
    i = M.useRef(!1),
    a = M.useCallback(
      (f) => {
        const p = Qf(e)
        fC(
          !!p,
          'ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node'
        ),
          (o.current = !p || gP(f) || !vP(f) || !!fg(p, f.target) || i.current),
          (i.current = !1)
      },
      [e]
    ),
    s = Cn((f) => {
      const p = Qf(e)
      p && fg(p, f.target) && (i.current = !0)
    }),
    l = Cn((f) => {
      o.current || t(f)
    })
  M.useEffect(() => {
    var f, p
    if (r || e == null) return
    const h = _b(Qf(e)),
      m = h.defaultView || window
    let v =
        (f = m.event) != null ? f : (p = m.parent) == null ? void 0 : p.event,
      w = null
    pg[n] && (w = Bi(h, pg[n], s, !0))
    const S = Bi(h, n, a, !0),
      x = Bi(h, n, (g) => {
        if (g === v) {
          v = void 0
          return
        }
        l(g)
      })
    let y = []
    return (
      'ontouchstart' in h.documentElement &&
        (y = [].slice.call(h.body.children).map((g) => Bi(g, 'mousemove', dg))),
      () => {
        w == null || w(), S(), x(), y.forEach((g) => g())
      }
    )
  }, [e, r, n, a, s, l])
}
function wP(e) {
  const t = {}
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((r) => {
          t[r.name] = r
        }),
      t)
    : e || t
}
function bP(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]))
}
function xP({
  enabled: e,
  enableEvents: t,
  placement: r,
  flip: n,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: s,
  popperConfig: l = {},
}) {
  var f, p, h, m, v
  const w = wP(l.modifiers)
  return Object.assign({}, l, {
    placement: r,
    enabled: e,
    strategy: i ? 'fixed' : l.strategy,
    modifiers: bP(
      Object.assign({}, w, {
        eventListeners: {
          enabled: t,
          options: (f = w.eventListeners) == null ? void 0 : f.options,
        },
        preventOverflow: Object.assign({}, w.preventOverflow, {
          options: a
            ? Object.assign(
                { padding: a },
                (p = w.preventOverflow) == null ? void 0 : p.options
              )
            : (h = w.preventOverflow) == null
            ? void 0
            : h.options,
        }),
        offset: {
          options: Object.assign(
            { offset: o },
            (m = w.offset) == null ? void 0 : m.options
          ),
        },
        arrow: Object.assign({}, w.arrow, {
          enabled: !!s,
          options: Object.assign(
            {},
            (v = w.arrow) == null ? void 0 : v.options,
            { element: s }
          ),
        }),
        flip: Object.assign({ enabled: !!n }, w.flip),
      })
    ),
  })
}
const SP = ['children']
function EP(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
const MP = () => {}
function Wb(e = {}) {
  const t = M.useContext(Ac),
    [r, n] = IO(),
    o = M.useRef(!1),
    {
      flip: i,
      offset: a,
      rootCloseEvent: s,
      fixed: l = !1,
      placement: f,
      popperConfig: p = {},
      enableEventListeners: h = !0,
      usePopper: m = !!t,
    } = e,
    v = (t == null ? void 0 : t.show) == null ? !!e.show : t.show
  v && !o.current && (o.current = !0)
  const w = (E) => {
      t == null || t.toggle(!1, E)
    },
    { placement: S, setMenu: x, menuElement: y, toggleElement: g } = t || {},
    b = yP(
      g,
      y,
      xP({
        placement: f || S || 'bottom-start',
        enabled: m,
        enableEvents: h ?? v,
        offset: a,
        flip: i,
        fixed: l,
        arrowElement: r,
        popperConfig: p,
      })
    ),
    I = Object.assign(
      { ref: x || MP, 'aria-labelledby': g == null ? void 0 : g.id },
      b.attributes.popper,
      { style: b.styles.popper }
    ),
    D = {
      show: v,
      placement: S,
      hasShown: o.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: m ? b : null,
      arrowProps: m
        ? Object.assign({ ref: n }, b.attributes.arrow, {
            style: b.styles.arrow,
          })
        : {},
    }
  return _P(y, w, { clickTrigger: s, disabled: !v }), [I, D]
}
const jP = { usePopper: !0 }
function Gh(e) {
  let { children: t } = e,
    r = EP(e, SP)
  const [n, o] = Wb(r)
  return A.jsx(A.Fragment, { children: t(n, o) })
}
Gh.displayName = 'DropdownMenu'
Gh.defaultProps = jP
const oc = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  Hb = te.createContext(oc),
  IP = te.createContext(!1)
let TP = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  Vf = new WeakMap()
function CP(e = !1) {
  let t = M.useContext(Hb),
    r = M.useRef(null)
  if (r.current === null && !e) {
    var n, o
    let i =
      (o = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (n = o.ReactCurrentOwner) === null ||
      n === void 0
        ? void 0
        : n.current
    if (i) {
      let a = Vf.get(i)
      a == null
        ? Vf.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== a.state && ((t.current = a.id), Vf.delete(i))
    }
    r.current = ++t.current
  }
  return r.current
}
function NP(e) {
  let t = M.useContext(Hb)
  t === oc &&
    !TP &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    )
  let r = CP(!!e),
    n = `react-aria${t.prefix}`
  return e || `${n}-${r}`
}
function AP(e) {
  let t = te.useId(),
    [r] = M.useState(RP()),
    n = r ? 'react-aria' : `react-aria${oc.prefix}`
  return e || `${n}-${t}`
}
const OP = typeof te.useId == 'function' ? AP : NP
function DP() {
  return !1
}
function PP() {
  return !0
}
function kP(e) {
  return () => {}
}
function RP() {
  return typeof te.useSyncExternalStore == 'function'
    ? te.useSyncExternalStore(kP, DP, PP)
    : M.useContext(IP)
}
const Qb = (e) => {
    var t
    return (
      ((t = e.getAttribute('role')) == null ? void 0 : t.toLowerCase()) ===
      'menu'
    )
  },
  hg = () => {}
function Vb() {
  const e = OP(),
    {
      show: t = !1,
      toggle: r = hg,
      setToggle: n,
      menuElement: o,
    } = M.useContext(Ac) || {},
    i = M.useCallback(
      (s) => {
        r(!t, s)
      },
      [t, r]
    ),
    a = { id: e, ref: n || hg, onClick: i, 'aria-expanded': !!t }
  return o && Qb(o) && (a['aria-haspopup'] = !0), [a, { show: t, toggle: r }]
}
function Yb({ children: e }) {
  const [t, r] = Vb()
  return A.jsx(A.Fragment, { children: e(t, r) })
}
Yb.displayName = 'DropdownToggle'
const LP = M.createContext(null),
  mg = (e, t = null) => (e != null ? String(e) : t || null),
  bp = LP,
  Gb = M.createContext(null)
Gb.displayName = 'NavContext'
const zP = Gb,
  UP = 'data-rr-ui-'
function qb(e) {
  return `${UP}${e}`
}
const FP = ['eventKey', 'disabled', 'onClick', 'active', 'as']
function $P(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    o,
    i
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o])
  return r
}
function Zb({ key: e, href: t, active: r, disabled: n, onClick: o }) {
  const i = M.useContext(bp),
    a = M.useContext(zP),
    { activeKey: s } = a || {},
    l = mg(e, t),
    f = r == null && e != null ? mg(s) === l : r
  return [
    {
      onClick: Cn((h) => {
        n || (o == null || o(h), i && !h.isPropagationStopped() && i(l, h))
      }),
      'aria-disabled': n || void 0,
      'aria-selected': f,
      [qb('dropdown-item')]: '',
    },
    { isActive: f },
  ]
}
const Kb = M.forwardRef((e, t) => {
  let { eventKey: r, disabled: n, onClick: o, active: i, as: a = fb } = e,
    s = $P(e, FP)
  const [l] = Zb({ key: r, href: s.href, disabled: n, onClick: o, active: i })
  return A.jsx(a, Object.assign({}, s, { ref: t }, l))
})
Kb.displayName = 'DropdownItem'
const Xb = M.createContext(bb ? window : void 0)
Xb.Provider
function BP() {
  return M.useContext(Xb)
}
function yg() {
  const e = sP(),
    t = M.useRef(null),
    r = M.useCallback(
      (n) => {
        ;(t.current = n), e()
      },
      [e]
    )
  return [t, r]
}
function ll({
  defaultShow: e,
  show: t,
  onSelect: r,
  onToggle: n,
  itemSelector: o = `* [${qb('dropdown-item')}]`,
  focusFirstItemOnShow: i,
  placement: a = 'bottom-start',
  children: s,
}) {
  const l = BP(),
    [f, p] = aP(t, e, n),
    [h, m] = yg(),
    v = h.current,
    [w, S] = yg(),
    x = w.current,
    y = NO(f),
    g = M.useRef(null),
    b = M.useRef(!1),
    I = M.useContext(bp),
    D = M.useCallback(
      (G, K, B = K == null ? void 0 : K.type) => {
        p(G, { originalEvent: K, source: B })
      },
      [p]
    ),
    E = Cn((G, K) => {
      r == null || r(G, K),
        D(!1, K, 'select'),
        K.isPropagationStopped() || I == null || I(G, K)
    }),
    C = M.useMemo(
      () => ({
        toggle: D,
        placement: a,
        show: f,
        menuElement: v,
        toggleElement: x,
        setMenu: m,
        setToggle: S,
      }),
      [D, a, f, v, x, m, S]
    )
  v && y && !f && (b.current = v.contains(v.ownerDocument.activeElement))
  const R = Cn(() => {
      x && x.focus && x.focus()
    }),
    W = Cn(() => {
      const G = g.current
      let K = i
      if (
        (K == null && (K = h.current && Qb(h.current) ? 'keyboard' : !1),
        K === !1 || (K === 'keyboard' && !/^key.+$/.test(G)))
      )
        return
      const B = lg(h.current, o)[0]
      B && B.focus && B.focus()
    })
  M.useEffect(() => {
    f ? W() : b.current && ((b.current = !1), R())
  }, [f, b, R, W]),
    M.useEffect(() => {
      g.current = null
    })
  const F = (G, K) => {
    if (!h.current) return null
    const B = lg(h.current, o)
    let V = B.indexOf(G) + K
    return (V = Math.max(0, Math.min(V, B.length))), B[V]
  }
  return (
    TO(
      M.useCallback(() => l.document, [l]),
      'keydown',
      (G) => {
        var K, B
        const { key: V } = G,
          T = G.target,
          N = (K = h.current) == null ? void 0 : K.contains(T),
          P = (B = w.current) == null ? void 0 : B.contains(T)
        if (
          (/input|textarea/i.test(T.tagName) &&
            (V === ' ' ||
              (V !== 'Escape' && N) ||
              (V === 'Escape' && T.type === 'search'))) ||
          (!N && !P) ||
          (V === 'Tab' && (!h.current || !f))
        )
          return
        g.current = G.type
        const Y = { originalEvent: G, source: G.type }
        switch (V) {
          case 'ArrowUp': {
            const X = F(T, -1)
            X && X.focus && X.focus(), G.preventDefault()
            return
          }
          case 'ArrowDown':
            if ((G.preventDefault(), !f)) p(!0, Y)
            else {
              const X = F(T, 1)
              X && X.focus && X.focus()
            }
            return
          case 'Tab':
            xb(
              T.ownerDocument,
              'keyup',
              (X) => {
                var oe
                ;((X.key === 'Tab' && !X.target) ||
                  !((oe = h.current) != null && oe.contains(X.target))) &&
                  p(!1, Y)
              },
              { once: !0 }
            )
            break
          case 'Escape':
            V === 'Escape' && (G.preventDefault(), G.stopPropagation()),
              p(!1, Y)
            break
        }
      }
    ),
    A.jsx(bp.Provider, {
      value: E,
      children: A.jsx(Ac.Provider, { value: C, children: s }),
    })
  )
}
ll.displayName = 'Dropdown'
ll.Menu = Gh
ll.Toggle = Yb
ll.Item = Kb
const Jb = M.createContext({})
Jb.displayName = 'DropdownContext'
const e1 = Jb,
  t1 = M.forwardRef(
    (
      { className: e, bsPrefix: t, as: r = 'hr', role: n = 'separator', ...o },
      i
    ) => (
      (t = dn(t, 'dropdown-divider')),
      A.jsx(r, { ref: i, className: _r(e, t), role: n, ...o })
    )
  )
t1.displayName = 'DropdownDivider'
const WP = t1,
  r1 = M.forwardRef(
    (
      { className: e, bsPrefix: t, as: r = 'div', role: n = 'heading', ...o },
      i
    ) => (
      (t = dn(t, 'dropdown-header')),
      A.jsx(r, { ref: i, className: _r(e, t), role: n, ...o })
    )
  )
r1.displayName = 'DropdownHeader'
const HP = r1,
  n1 = M.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        eventKey: r,
        disabled: n = !1,
        onClick: o,
        active: i,
        as: a = pb,
        ...s
      },
      l
    ) => {
      const f = dn(e, 'dropdown-item'),
        [p, h] = Zb({
          key: r,
          href: s.href,
          disabled: n,
          onClick: o,
          active: i,
        })
      return A.jsx(a, {
        ...s,
        ...p,
        ref: l,
        className: _r(t, f, h.isActive && 'active', n && 'disabled'),
      })
    }
  )
n1.displayName = 'DropdownItem'
const QP = n1,
  o1 = M.forwardRef(
    ({ className: e, bsPrefix: t, as: r = 'span', ...n }, o) => (
      (t = dn(t, 'dropdown-item-text')),
      A.jsx(r, { ref: o, className: _r(e, t), ...n })
    )
  )
o1.displayName = 'DropdownItemText'
const VP = o1,
  i1 = M.createContext(null)
i1.displayName = 'InputGroupContext'
const a1 = i1,
  s1 = M.createContext(null)
s1.displayName = 'NavbarContext'
const YP = s1
function l1(e, t) {
  return e
}
function u1(e, t, r) {
  const n = r ? 'top-end' : 'top-start',
    o = r ? 'top-start' : 'top-end',
    i = r ? 'bottom-end' : 'bottom-start',
    a = r ? 'bottom-start' : 'bottom-end',
    s = r ? 'right-start' : 'left-start',
    l = r ? 'right-end' : 'left-end',
    f = r ? 'left-start' : 'right-start',
    p = r ? 'left-end' : 'right-end'
  let h = e ? a : i
  return (
    t === 'up'
      ? (h = e ? o : n)
      : t === 'end'
      ? (h = e ? p : f)
      : t === 'start'
      ? (h = e ? l : s)
      : t === 'down-centered'
      ? (h = 'bottom')
      : t === 'up-centered' && (h = 'top'),
    h
  )
}
const c1 = M.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: r,
      rootCloseEvent: n,
      flip: o = !0,
      show: i,
      renderOnMount: a,
      as: s = 'div',
      popperConfig: l,
      variant: f,
      ...p
    },
    h
  ) => {
    let m = !1
    const v = M.useContext(YP),
      w = dn(e, 'dropdown-menu'),
      { align: S, drop: x, isRTL: y } = M.useContext(e1)
    r = r || S
    const g = M.useContext(a1),
      b = []
    if (r)
      if (typeof r == 'object') {
        const G = Object.keys(r)
        if (G.length) {
          const K = G[0],
            B = r[K]
          ;(m = B === 'start'), b.push(`${w}-${K}-${B}`)
        }
      } else r === 'end' && (m = !0)
    const I = u1(m, x, y),
      [D, { hasShown: E, popper: C, show: R, toggle: W }] = Wb({
        flip: o,
        rootCloseEvent: n,
        show: i,
        usePopper: !v && b.length === 0,
        offset: [0, 2],
        popperConfig: l,
        placement: I,
      })
    if (
      ((D.ref = Bh(l1(h), D.ref)),
      DO(() => {
        R && (C == null || C.update())
      }, [R]),
      !E && !a && !g)
    )
      return null
    typeof s != 'string' &&
      ((D.show = R),
      (D.close = () => (W == null ? void 0 : W(!1))),
      (D.align = r))
    let F = p.style
    return (
      C != null &&
        C.placement &&
        ((F = { ...p.style, ...D.style }), (p['x-placement'] = C.placement)),
      A.jsx(s, {
        ...p,
        ...D,
        style: F,
        ...((b.length || v) && { 'data-bs-popper': 'static' }),
        className: _r(
          t,
          w,
          R && 'show',
          m && `${w}-end`,
          f && `${w}-${f}`,
          ...b
        ),
      })
    )
  }
)
c1.displayName = 'DropdownMenu'
const GP = c1,
  f1 = M.forwardRef(
    (
      {
        bsPrefix: e,
        split: t,
        className: r,
        childBsPrefix: n,
        as: o = qo,
        ...i
      },
      a
    ) => {
      const s = dn(e, 'dropdown-toggle'),
        l = M.useContext(Ac)
      n !== void 0 && (i.bsPrefix = n)
      const [f] = Vb()
      return (
        (f.ref = Bh(f.ref, l1(a))),
        A.jsx(o, {
          className: _r(
            r,
            s,
            t && `${s}-split`,
            (l == null ? void 0 : l.show) && 'show'
          ),
          ...f,
          ...i,
        })
      )
    }
  )
f1.displayName = 'DropdownToggle'
const qP = f1,
  d1 = M.forwardRef((e, t) => {
    const {
        bsPrefix: r,
        drop: n = 'down',
        show: o,
        className: i,
        align: a = 'start',
        onSelect: s,
        onToggle: l,
        focusFirstItemOnShow: f,
        as: p = 'div',
        navbar: h,
        autoClose: m = !0,
        ...v
      } = sb(e, { show: 'onToggle' }),
      w = M.useContext(a1),
      S = dn(r, 'dropdown'),
      x = EO(),
      y = (C) =>
        m === !1
          ? C === 'click'
          : m === 'inside'
          ? C !== 'rootClose'
          : m === 'outside'
          ? C !== 'select'
          : !0,
      g = Cn((C, R) => {
        var W, F
        ;(!((W = R.originalEvent) == null || (F = W.target) == null) &&
          F.classList.contains('dropdown-toggle') &&
          R.source === 'mousedown') ||
          (R.originalEvent.currentTarget === document &&
            (R.source !== 'keydown' || R.originalEvent.key === 'Escape') &&
            (R.source = 'rootClose'),
          y(R.source) && (l == null || l(C, R)))
      }),
      I = u1(a === 'end', n, x),
      D = M.useMemo(() => ({ align: a, drop: n, isRTL: x }), [a, n, x]),
      E = {
        down: S,
        'down-centered': `${S}-center`,
        up: 'dropup',
        'up-centered': 'dropup-center dropup',
        end: 'dropend',
        start: 'dropstart',
      }
    return A.jsx(e1.Provider, {
      value: D,
      children: A.jsx(ll, {
        placement: I,
        show: o,
        onSelect: s,
        onToggle: g,
        focusFirstItemOnShow: f,
        itemSelector: `.${S}-item:not(.disabled):not(:disabled)`,
        children: w
          ? v.children
          : A.jsx(p, { ...v, ref: t, className: _r(i, o && 'show', E[n]) }),
      }),
    })
  })
d1.displayName = 'Dropdown'
const Po = Object.assign(d1, {
    Toggle: qP,
    Menu: GP,
    Item: QP,
    ItemText: VP,
    Divider: WP,
    Header: HP,
  }),
  vg = { AlertName: '' }
function ZP() {
  const [e, t] = M.useState(vg)
  M.useState(!1)
  const r = Yh(),
    n = nP(yO, {
      onSuccess: async () => {
        r.invalidateQueries(['alerts'])
      },
    })
  async function o(i) {
    i.preventDefault(), n.mutate(e), t(vg)
  }
  return n.isError
    ? A.jsx('div', { children: 'There was an error trying to add your alert' })
    : n.isLoading
    ? A.jsx('div', { children: 'Adding your alert' })
    : A.jsx(A.Fragment, {
        children: A.jsxs('section', {
          id: 'add-alert-to-list',
          className: 'formContainer',
          children: [
            A.jsx('input', {
              type: 'text',
              value: e.AlertName,
              onChange: (i) => t({ AlertName: i.target.value }),
              placeholder: 'Enter new alert text',
            }),
            A.jsx('br', {}),
            A.jsx(qo, { onClick: o, children: 'Add Alert' }),
            A.jsx('br', {}),
            A.jsxs(Po, {
              children: [
                A.jsx(Po.Toggle, {
                  variant: 'success',
                  id: 'dropdown-basic',
                  children: 'Examples',
                }),
                A.jsxs(Po.Menu, {
                  children: [
                    A.jsx(Po.Item, { children: 'Mild Discomfort' }),
                    A.jsx(Po.Item, { children: 'Require Urgent Action' }),
                    A.jsx(Po.Item, { children: 'Keep Tabs' }),
                    A.jsx(Po.Item, { children: 'On The Mend' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
}
var p1 = { exports: {} },
  ul,
  Oe,
  h1,
  m1,
  $o,
  gg,
  y1,
  xp,
  v1,
  Ys = {},
  qh = [],
  KP = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Oc = Array.isArray
function Fn(e, t) {
  for (var r in t) e[r] = t[r]
  return e
}
function g1(e) {
  var t = e.parentNode
  t && t.removeChild(e)
}
function qr(e, t, r) {
  var n,
    o,
    i,
    a = {}
  for (i in t) i == 'key' ? (n = t[i]) : i == 'ref' ? (o = t[i]) : (a[i] = t[i])
  if (
    (arguments.length > 2 &&
      (a.children = arguments.length > 3 ? ul.call(arguments, 2) : r),
    typeof e == 'function' && e.defaultProps != null)
  )
    for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i])
  return xs(e, a, n, o, null)
}
function xs(e, t, r, n, o) {
  var i = {
    type: e,
    props: t,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++h1,
    __i: -1,
    __u: 0,
  }
  return o == null && Oe.vnode != null && Oe.vnode(i), i
}
function Zh() {
  return { current: null }
}
function Ir(e) {
  return e.children
}
function Hr(e, t) {
  ;(this.props = e), (this.context = t)
}
function ha(e, t) {
  if (t == null) return e.__ ? ha(e.__, e.__i + 1) : null
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e
  return typeof e.type == 'function' ? ha(e) : null
}
function XP(e, t, r) {
  var n,
    o = e.__v,
    i = o.__e,
    a = e.__P
  if (a)
    return (
      ((n = Fn({}, o)).__v = o.__v + 1),
      Oe.vnode && Oe.vnode(n),
      Kh(
        a,
        n,
        o,
        e.__n,
        a.ownerSVGElement !== void 0,
        32 & o.__u ? [i] : null,
        t,
        i ?? ha(o),
        !!(32 & o.__u),
        r
      ),
      (n.__v = o.__v),
      (n.__.__k[n.__i] = n),
      (n.__d = void 0),
      n.__e != i && _1(n),
      n
    )
}
function _1(e) {
  var t, r
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e
        break
      }
    return _1(e)
  }
}
function Sp(e) {
  ;((!e.__d && (e.__d = !0) && $o.push(e) && !ic.__r++) ||
    gg !== Oe.debounceRendering) &&
    ((gg = Oe.debounceRendering) || y1)(ic)
}
function ic() {
  var e,
    t,
    r,
    n = [],
    o = []
  for ($o.sort(xp); (e = $o.shift()); )
    e.__d &&
      ((r = $o.length),
      (t = XP(e, n, o) || t),
      r === 0 || $o.length > r
        ? (Ep(n, t, o), (o.length = n.length = 0), (t = void 0), $o.sort(xp))
        : t && Oe.__c && Oe.__c(t, qh))
  t && Ep(n, t, o), (ic.__r = 0)
}
function w1(e, t, r, n, o, i, a, s, l, f, p) {
  var h,
    m,
    v,
    w,
    S,
    x = (n && n.__k) || qh,
    y = t.length
  for (r.__d = l, JP(r, t, x), l = r.__d, h = 0; h < y; h++)
    (v = r.__k[h]) != null &&
      typeof v != 'boolean' &&
      typeof v != 'function' &&
      ((m = v.__i === -1 ? Ys : x[v.__i] || Ys),
      (v.__i = h),
      Kh(e, v, m, o, i, a, s, l, f, p),
      (w = v.__e),
      v.ref &&
        m.ref != v.ref &&
        (m.ref && Xh(m.ref, null, v), p.push(v.ref, v.__c || w, v)),
      S == null && w != null && (S = w),
      65536 & v.__u || m.__k === v.__k
        ? (l = b1(v, l, e))
        : typeof v.type == 'function' && v.__d !== void 0
        ? (l = v.__d)
        : w && (l = w.nextSibling),
      (v.__d = void 0),
      (v.__u &= -196609))
  ;(r.__d = l), (r.__e = S)
}
function JP(e, t, r) {
  var n,
    o,
    i,
    a,
    s,
    l = t.length,
    f = r.length,
    p = f,
    h = 0
  for (e.__k = [], n = 0; n < l; n++)
    (a = n + h),
      (o = e.__k[n] =
        (o = t[n]) == null || typeof o == 'boolean' || typeof o == 'function'
          ? null
          : typeof o == 'string' ||
            typeof o == 'number' ||
            typeof o == 'bigint' ||
            o.constructor == String
          ? xs(null, o, null, null, null)
          : Oc(o)
          ? xs(Ir, { children: o }, null, null, null)
          : o.constructor === void 0 && o.__b > 0
          ? xs(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
          : o) != null
        ? ((o.__ = e),
          (o.__b = e.__b + 1),
          (s = ek(o, r, a, p)),
          (o.__i = s),
          (i = null),
          s !== -1 && (p--, (i = r[s]) && (i.__u |= 131072)),
          i == null || i.__v === null
            ? (s == -1 && h--, typeof o.type != 'function' && (o.__u |= 65536))
            : s !== a &&
              (s === a + 1
                ? h++
                : s > a
                ? p > l - a
                  ? (h += s - a)
                  : h--
                : s < a
                ? s == a - 1 && (h = s - a)
                : (h = 0),
              s !== n + h && (o.__u |= 65536)))
        : (i = r[a]) &&
          i.key == null &&
          i.__e &&
          !(131072 & i.__u) &&
          (i.__e == e.__d && (e.__d = ha(i)), Mp(i, i, !1), (r[a] = null), p--)
  if (p)
    for (n = 0; n < f; n++)
      (i = r[n]) != null &&
        !(131072 & i.__u) &&
        (i.__e == e.__d && (e.__d = ha(i)), Mp(i, i))
}
function b1(e, t, r) {
  var n, o
  if (typeof e.type == 'function') {
    for (n = e.__k, o = 0; n && o < n.length; o++)
      n[o] && ((n[o].__ = e), (t = b1(n[o], t, r)))
    return t
  }
  e.__e != t && (r.insertBefore(e.__e, t || null), (t = e.__e))
  do t = t && t.nextSibling
  while (t != null && t.nodeType === 8)
  return t
}
function Nn(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == 'boolean' ||
      (Oc(e)
        ? e.some(function (r) {
            Nn(r, t)
          })
        : t.push(e)),
    t
  )
}
function ek(e, t, r, n) {
  var o = e.key,
    i = e.type,
    a = r - 1,
    s = r + 1,
    l = t[r]
  if (l === null || (l && o == l.key && i === l.type && !(131072 & l.__u)))
    return r
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; a >= 0 || s < t.length; ) {
      if (a >= 0) {
        if ((l = t[a]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return a
        a--
      }
      if (s < t.length) {
        if ((l = t[s]) && !(131072 & l.__u) && o == l.key && i === l.type)
          return s
        s++
      }
    }
  return -1
}
function _g(e, t, r) {
  t[0] === '-'
    ? e.setProperty(t, r ?? '')
    : (e[t] =
        r == null ? '' : typeof r != 'number' || KP.test(t) ? r : r + 'px')
}
function eu(e, t, r, n, o) {
  var i
  e: if (t === 'style')
    if (typeof r == 'string') e.style.cssText = r
    else {
      if ((typeof n == 'string' && (e.style.cssText = n = ''), n))
        for (t in n) (r && t in r) || _g(e.style, t, '')
      if (r) for (t in r) (n && r[t] === n[t]) || _g(e.style, t, r[t])
    }
  else if (t[0] === 'o' && t[1] === 'n')
    (i = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, '$1'))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = Date.now()), e.addEventListener(t, i ? bg : wg, i))
        : e.removeEventListener(t, i ? bg : wg, i)
  else {
    if (o) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
    else if (
      t !== 'width' &&
      t !== 'height' &&
      t !== 'href' &&
      t !== 'list' &&
      t !== 'form' &&
      t !== 'tabIndex' &&
      t !== 'download' &&
      t !== 'rowSpan' &&
      t !== 'colSpan' &&
      t !== 'role' &&
      t in e
    )
      try {
        e[t] = r ?? ''
        break e
      } catch {}
    typeof r == 'function' ||
      (r == null || (r === !1 && t[4] !== '-')
        ? e.removeAttribute(t)
        : e.setAttribute(t, r))
  }
}
function wg(e) {
  if (this.l) {
    var t = this.l[e.type + !1]
    if (e.t) {
      if (e.t <= t.u) return
    } else e.t = Date.now()
    return t(Oe.event ? Oe.event(e) : e)
  }
}
function bg(e) {
  if (this.l) return this.l[e.type + !0](Oe.event ? Oe.event(e) : e)
}
function Kh(e, t, r, n, o, i, a, s, l, f) {
  var p,
    h,
    m,
    v,
    w,
    S,
    x,
    y,
    g,
    b,
    I,
    D,
    E,
    C,
    R,
    W = t.type
  if (t.constructor !== void 0) return null
  128 & r.__u && ((l = !!(32 & r.__u)), (i = [(s = t.__e = r.__e)])),
    (p = Oe.__b) && p(t)
  e: if (typeof W == 'function')
    try {
      if (
        ((y = t.props),
        (g = (p = W.contextType) && n[p.__c]),
        (b = p ? (g ? g.props.value : p.__) : n),
        r.__c
          ? (x = (h = t.__c = r.__c).__ = h.__E)
          : ('prototype' in W && W.prototype.render
              ? (t.__c = h = new W(y, b))
              : ((t.__c = h = new Hr(y, b)),
                (h.constructor = W),
                (h.render = rk)),
            g && g.sub(h),
            (h.props = y),
            h.state || (h.state = {}),
            (h.context = b),
            (h.__n = n),
            (m = h.__d = !0),
            (h.__h = []),
            (h._sb = [])),
        h.__s == null && (h.__s = h.state),
        W.getDerivedStateFromProps != null &&
          (h.__s == h.state && (h.__s = Fn({}, h.__s)),
          Fn(h.__s, W.getDerivedStateFromProps(y, h.__s))),
        (v = h.props),
        (w = h.state),
        (h.__v = t),
        m)
      )
        W.getDerivedStateFromProps == null &&
          h.componentWillMount != null &&
          h.componentWillMount(),
          h.componentDidMount != null && h.__h.push(h.componentDidMount)
      else {
        if (
          (W.getDerivedStateFromProps == null &&
            y !== v &&
            h.componentWillReceiveProps != null &&
            h.componentWillReceiveProps(y, b),
          !h.__e &&
            ((h.shouldComponentUpdate != null &&
              h.shouldComponentUpdate(y, h.__s, b) === !1) ||
              t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((h.props = y), (h.state = h.__s), (h.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (F) {
                F && (F.__ = t)
              }),
              I = 0;
            I < h._sb.length;
            I++
          )
            h.__h.push(h._sb[I])
          ;(h._sb = []), h.__h.length && a.push(h)
          break e
        }
        h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, b),
          h.componentDidUpdate != null &&
            h.__h.push(function () {
              h.componentDidUpdate(v, w, S)
            })
      }
      if (
        ((h.context = b),
        (h.props = y),
        (h.__P = e),
        (h.__e = !1),
        (D = Oe.__r),
        (E = 0),
        'prototype' in W && W.prototype.render)
      ) {
        for (
          h.state = h.__s,
            h.__d = !1,
            D && D(t),
            p = h.render(h.props, h.state, h.context),
            C = 0;
          C < h._sb.length;
          C++
        )
          h.__h.push(h._sb[C])
        h._sb = []
      } else
        do
          (h.__d = !1),
            D && D(t),
            (p = h.render(h.props, h.state, h.context)),
            (h.state = h.__s)
        while (h.__d && ++E < 25)
      ;(h.state = h.__s),
        h.getChildContext != null && (n = Fn(Fn({}, n), h.getChildContext())),
        m ||
          h.getSnapshotBeforeUpdate == null ||
          (S = h.getSnapshotBeforeUpdate(v, w)),
        w1(
          e,
          Oc(
            (R =
              p != null && p.type === Ir && p.key == null
                ? p.props.children
                : p)
          )
            ? R
            : [R],
          t,
          r,
          n,
          o,
          i,
          a,
          s,
          l,
          f
        ),
        (h.base = t.__e),
        (t.__u &= -161),
        h.__h.length && a.push(h),
        x && (h.__E = h.__ = null)
    } catch (F) {
      ;(t.__v = null),
        l || i != null
          ? ((t.__e = s), (t.__u |= l ? 160 : 32), (i[i.indexOf(s)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        Oe.__e(F, t, r)
    }
  else
    i == null && t.__v === r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (t.__e = tk(r.__e, t, r, n, o, i, a, l, f))
  ;(p = Oe.diffed) && p(t)
}
function Ep(e, t, r) {
  for (var n = 0; n < r.length; n++) Xh(r[n], r[++n], r[++n])
  Oe.__c && Oe.__c(t, e),
    e.some(function (o) {
      try {
        ;(e = o.__h),
          (o.__h = []),
          e.some(function (i) {
            i.call(o)
          })
      } catch (i) {
        Oe.__e(i, o.__v)
      }
    })
}
function tk(e, t, r, n, o, i, a, s, l) {
  var f,
    p,
    h,
    m,
    v,
    w,
    S,
    x = r.props,
    y = t.props,
    g = t.type
  if ((g === 'svg' && (o = !0), i != null)) {
    for (f = 0; f < i.length; f++)
      if (
        (v = i[f]) &&
        'setAttribute' in v == !!g &&
        (g ? v.localName === g : v.nodeType === 3)
      ) {
        ;(e = v), (i[f] = null)
        break
      }
  }
  if (e == null) {
    if (g === null) return document.createTextNode(y)
    ;(e = o
      ? document.createElementNS('http://www.w3.org/2000/svg', g)
      : document.createElement(g, y.is && y)),
      (i = null),
      (s = !1)
  }
  if (g === null) x === y || (s && e.data === y) || (e.data = y)
  else {
    if (
      ((i = i && ul.call(e.childNodes)), (x = r.props || Ys), !s && i != null)
    )
      for (x = {}, f = 0; f < e.attributes.length; f++)
        x[(v = e.attributes[f]).name] = v.value
    for (f in x)
      (v = x[f]),
        f == 'children' ||
          (f == 'dangerouslySetInnerHTML'
            ? (h = v)
            : f === 'key' || f in y || eu(e, f, null, v, o))
    for (f in y)
      (v = y[f]),
        f == 'children'
          ? (m = v)
          : f == 'dangerouslySetInnerHTML'
          ? (p = v)
          : f == 'value'
          ? (w = v)
          : f == 'checked'
          ? (S = v)
          : f === 'key' ||
            (s && typeof v != 'function') ||
            x[f] === v ||
            eu(e, f, v, x[f], o)
    if (p)
      s ||
        (h && (p.__html === h.__html || p.__html === e.innerHTML)) ||
        (e.innerHTML = p.__html),
        (t.__k = [])
    else if (
      (h && (e.innerHTML = ''),
      w1(
        e,
        Oc(m) ? m : [m],
        t,
        r,
        n,
        o && g !== 'foreignObject',
        i,
        a,
        i ? i[0] : r.__k && ha(r, 0),
        s,
        l
      ),
      i != null)
    )
      for (f = i.length; f--; ) i[f] != null && g1(i[f])
    s ||
      ((f = 'value'),
      w !== void 0 &&
        (w !== e[f] ||
          (g === 'progress' && !w) ||
          (g === 'option' && w !== x[f])) &&
        eu(e, f, w, x[f], !1),
      (f = 'checked'),
      S !== void 0 && S !== e[f] && eu(e, f, S, x[f], !1))
  }
  return e
}
function Xh(e, t, r) {
  try {
    typeof e == 'function' ? e(t) : (e.current = t)
  } catch (n) {
    Oe.__e(n, r)
  }
}
function Mp(e, t, r) {
  var n, o
  if (
    (Oe.unmount && Oe.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || Xh(n, null, t)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount()
      } catch (i) {
        Oe.__e(i, t)
      }
    ;(n.base = n.__P = null), (e.__c = void 0)
  }
  if ((n = e.__k))
    for (o = 0; o < n.length; o++)
      n[o] && Mp(n[o], t, r || typeof e.type != 'function')
  r || e.__e == null || g1(e.__e), (e.__ = e.__e = e.__d = void 0)
}
function rk(e, t, r) {
  return this.constructor(e, r)
}
function ma(e, t, r) {
  var n, o, i, a
  Oe.__ && Oe.__(e, t),
    (o = (n = typeof r == 'function') ? null : (r && r.__k) || t.__k),
    (i = []),
    (a = []),
    Kh(
      t,
      (e = ((!n && r) || t).__k = qr(Ir, null, [e])),
      o || Ys,
      Ys,
      t.ownerSVGElement !== void 0,
      !n && r ? [r] : o ? null : t.firstChild ? ul.call(t.childNodes) : null,
      i,
      !n && r ? r : o ? o.__e : t.firstChild,
      n,
      a
    ),
    (e.__d = void 0),
    Ep(i, e, a)
}
function Jh(e, t) {
  ma(e, t, Jh)
}
function x1(e, t, r) {
  var n,
    o,
    i,
    a,
    s = Fn({}, e.props)
  for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t))
    i == 'key'
      ? (n = t[i])
      : i == 'ref'
      ? (o = t[i])
      : (s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i])
  return (
    arguments.length > 2 &&
      (s.children = arguments.length > 3 ? ul.call(arguments, 2) : r),
    xs(e.type, s, n || e.key, o || e.ref, null)
  )
}
function em(e, t) {
  var r = {
    __c: (t = '__cC' + v1++),
    __: e,
    Consumer: function (n, o) {
      return n.children(o)
    },
    Provider: function (n) {
      var o, i
      return (
        this.getChildContext ||
          ((o = []),
          ((i = {})[t] = this),
          (this.getChildContext = function () {
            return i
          }),
          (this.shouldComponentUpdate = function (a) {
            this.props.value !== a.value &&
              o.some(function (s) {
                ;(s.__e = !0), Sp(s)
              })
          }),
          (this.sub = function (a) {
            o.push(a)
            var s = a.componentWillUnmount
            a.componentWillUnmount = function () {
              o.splice(o.indexOf(a), 1), s && s.call(a)
            }
          })),
        n.children
      )
    },
  }
  return (r.Provider.__ = r.Consumer.contextType = r)
}
;(ul = qh.slice),
  (Oe = {
    __e: function (e, t, r, n) {
      for (var o, i, a; (t = t.__); )
        if ((o = t.__c) && !o.__)
          try {
            if (
              ((i = o.constructor) &&
                i.getDerivedStateFromError != null &&
                (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(e, n || {}), (a = o.__d)),
              a)
            )
              return (o.__E = o)
          } catch (s) {
            e = s
          }
      throw e
    },
  }),
  (h1 = 0),
  (m1 = function (e) {
    return e != null && e.constructor == null
  }),
  (Hr.prototype.setState = function (e, t) {
    var r
    ;(r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Fn({}, this.state))),
      typeof e == 'function' && (e = e(Fn({}, r), this.props)),
      e && Fn(r, e),
      e != null && this.__v && (t && this._sb.push(t), Sp(this))
  }),
  (Hr.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Sp(this))
  }),
  (Hr.prototype.render = Ir),
  ($o = []),
  (y1 =
    typeof Promise == 'function'
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (xp = function (e, t) {
    return e.__v.__b - t.__v.__b
  }),
  (ic.__r = 0),
  (v1 = 0)
const nk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Component: Hr,
      Fragment: Ir,
      cloneElement: x1,
      createContext: em,
      createElement: qr,
      createRef: Zh,
      h: qr,
      hydrate: Jh,
      get isValidElement() {
        return m1
      },
      get options() {
        return Oe
      },
      render: ma,
      toChildArray: Nn,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
var ok = /["&<]/
function S1(e) {
  if (e.length === 0 || ok.test(e) === !1) return e
  for (var t = 0, r = 0, n = '', o = ''; r < e.length; r++) {
    switch (e.charCodeAt(r)) {
      case 34:
        o = '&quot;'
        break
      case 38:
        o = '&amp;'
        break
      case 60:
        o = '&lt;'
        break
      default:
        continue
    }
    r !== t && (n += e.slice(t, r)), (n += o), (t = r + 1)
  }
  return r !== t && (n += e.slice(t, r)), n
}
var ik = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  ak = 0,
  sk = Array.isArray
function vu(e, t, r, n, o, i) {
  var a,
    s,
    l = {}
  for (s in t) s == 'ref' ? (a = t[s]) : (l[s] = t[s])
  var f = {
    type: e,
    props: l,
    key: r,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: --ak,
    __i: -1,
    __u: 0,
    __source: o,
    __self: i,
  }
  if (typeof e == 'function' && (a = e.defaultProps))
    for (s in a) l[s] === void 0 && (l[s] = a[s])
  return Oe.vnode && Oe.vnode(f), f
}
function lk(e) {
  var t = vu(Ir, { tpl: e, exprs: [].slice.call(arguments, 1) })
  return (t.key = t.__v), t
}
var xg = {},
  uk = /[A-Z]/g
function ck(e, t) {
  if (Oe.attr) {
    var r = Oe.attr(e, t)
    if (typeof r == 'string') return r
  }
  if (e === 'ref' || e === 'key') return ''
  if (e === 'style' && typeof t == 'object') {
    var n = ''
    for (var o in t) {
      var i = t[o]
      if (i != null && i !== '') {
        var a =
            o[0] == '-'
              ? o
              : xg[o] || (xg[o] = o.replace(uk, '-$&').toLowerCase()),
          s = ';'
        typeof i != 'number' || a.startsWith('--') || ik.test(a) || (s = 'px;'),
          (n = n + a + ':' + i + s)
      }
    }
    return e + '="' + n + '"'
  }
  return t == null || t === !1 || typeof t == 'function' || typeof t == 'object'
    ? ''
    : t === !0
    ? e
    : e + '="' + S1(t) + '"'
}
function E1(e) {
  if (e == null || typeof e == 'boolean' || typeof e == 'function') return null
  if (typeof e == 'object') {
    if (e.constructor === void 0) return e
    if (sk(e)) {
      for (var t = 0; t < e.length; t++) e[t] = E1(e[t])
      return e
    }
  }
  return S1('' + e)
}
const fk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Fragment: Ir,
        jsx: vu,
        jsxAttr: ck,
        jsxDEV: vu,
        jsxEscape: E1,
        jsxTemplate: lk,
        jsxs: vu,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  dk = sc(fk)
var M1 = { exports: {} },
  Yf = { exports: {} },
  Sg
function pk() {
  return (
    Sg ||
      ((Sg = 1),
      (function (e) {
        e.exports = (function () {
          var t = {
              './src/index.ts': function (o, i, a) {
                a.r(i),
                  a.d(i, {
                    beginMultipartUpload: function () {
                      return W
                    },
                    completeUploadPart: function () {
                      return R
                    },
                    getUploadPart: function () {
                      return C
                    },
                    request: function () {
                      return f
                    },
                  })
                function s(B, V, T) {
                  return T
                    ? V
                      ? V(B)
                      : B
                    : ((!B || !B.then) && (B = Promise.resolve(B)),
                      V ? B.then(V) : B)
                }
                function l(B) {
                  return function () {
                    for (var V = [], T = 0; T < arguments.length; T++)
                      V[T] = arguments[T]
                    try {
                      return Promise.resolve(B.apply(this, V))
                    } catch (N) {
                      return Promise.reject(N)
                    }
                  }
                }
                var f = l(function (B, V) {
                    var T = g(B, V)
                    return s(p(B, V, T), function (N) {
                      var P = D(N),
                        k = I(N, V.responseHeader)
                      return {
                        url: T,
                        ok: N.status >= 200 && N.status < 300,
                        status: N.status,
                        statusText: N.statusText,
                        body: k || P,
                      }
                    })
                  }),
                  p = l(function (B, V, T) {
                    var N = new XMLHttpRequest()
                    return (
                      N.open(V.method, T, !0),
                      (N.withCredentials = B.WITH_CREDENTIALS),
                      s(h(B, V), function (P) {
                        return (
                          P.forEach(function (k, Y) {
                            N.setRequestHeader(Y, k)
                          }),
                          new Promise(function (k) {
                            ;(N.onreadystatechange = function () {
                              N.readyState === XMLHttpRequest.DONE && k(N)
                            }),
                              N.send(b(V))
                          })
                        )
                      })
                    )
                  }),
                  h = l(function (B, V) {
                    return s(m(V, B.USERNAME), function (T) {
                      return s(m(V, B.PASSWORD), function (N) {
                        return s(m(V, B.HEADERS), function (P) {
                          var k = new Headers(
                            Object.assign(
                              Object.assign({ Accept: w }, P),
                              V.headers
                            )
                          )
                          if (x(T) && x(N)) {
                            var Y = btoa(''.concat(T, ':').concat(N))
                            k.append('Authorization', 'Basic '.concat(Y))
                          }
                          return V.body && k.append(v, w), k
                        })
                      })
                    })
                  }),
                  m = l(function (B, V) {
                    return typeof V == 'function' ? V(B) : V
                  }),
                  v = 'Content-Type',
                  w = 'application/json'
                function S(B) {
                  return B != null
                }
                function x(B) {
                  return typeof B == 'string' && B !== ''
                }
                function y(B) {
                  var V = []
                  return (
                    Object.keys(B).forEach(function (T) {
                      var N = B[T]
                      S(N) &&
                        (Array.isArray(N)
                          ? N.forEach(function (P) {
                              V.push(
                                ''
                                  .concat(encodeURIComponent(T), '=')
                                  .concat(encodeURIComponent(String(P)))
                              )
                            })
                          : V.push(
                              ''
                                .concat(encodeURIComponent(T), '=')
                                .concat(encodeURIComponent(String(N)))
                            ))
                    }),
                    V.length > 0 ? '?'.concat(V.join('&')) : ''
                  )
                }
                function g(B, V) {
                  var T = V.path.replace(/[:]/g, '_'),
                    N = ''.concat(B.BASE).concat(T)
                  return V.query ? ''.concat(N).concat(y(V.query)) : N
                }
                function b(B) {
                  if (B.body) return JSON.stringify(B.body)
                }
                function I(B, V) {
                  return V ? B.getResponseHeader(V) : null
                }
                function D(B) {
                  var V = B.getResponseHeader(v)
                  if (V) {
                    var T = V.toLowerCase().startsWith(w)
                    return T ? JSON.parse(B.responseText) : B.responseText
                  }
                  return null
                }
                function E(B) {
                  return function () {
                    for (var V = [], T = 0; T < arguments.length; T++)
                      V[T] = arguments[T]
                    try {
                      return Promise.resolve(B.apply(this, V))
                    } catch (N) {
                      return Promise.reject(N)
                    }
                  }
                }
                var C = E(function (B, V, T, N) {
                    return f(B, {
                      method: 'GET',
                      path: ''
                        .concat(F)
                        .concat(V)
                        .concat(G, '/')
                        .concat(T)
                        .concat(K)
                        .concat(N),
                    })
                  }),
                  R = E(function (B, V, T, N, P) {
                    return f(B, {
                      method: 'PUT',
                      path: ''
                        .concat(F)
                        .concat(V)
                        .concat(G, '/')
                        .concat(T)
                        .concat(K)
                        .concat(N),
                      body: P,
                    })
                  }),
                  W = E(function (B, V, T) {
                    return f(B, {
                      method: 'POST',
                      path: ''.concat(F).concat(V).concat(G),
                      body: T,
                    })
                  }),
                  F = '/v2/accounts/',
                  G = '/uploads',
                  K = '/parts/'
              },
            },
            r = {}
          function n(o) {
            if (r[o]) return r[o].exports
            var i = (r[o] = { exports: {} })
            return t[o](i, i.exports, n), i.exports
          }
          return (
            (function () {
              n.d = function (o, i) {
                for (var a in i)
                  n.o(i, a) &&
                    !n.o(o, a) &&
                    Object.defineProperty(o, a, { enumerable: !0, get: i[a] })
              }
            })(),
            (function () {
              n.o = function (o, i) {
                return Object.prototype.hasOwnProperty.call(o, i)
              }
            })(),
            (function () {
              n.r = function (o) {
                typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(o, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(o, '__esModule', { value: !0 })
              }
            })(),
            n('./src/index.ts')
          )
        })()
      })(Yf)),
    Yf.exports
  )
}
var Gf = { exports: {} },
  Eg
function hk() {
  return (
    Eg ||
      ((Eg = 1),
      (function (e) {
        e.exports = (function () {
          var t = {
              './src/index.ts': function (o, i, a) {
                a.r(i),
                  a.d(i, {
                    ProgressSmoother: function () {
                      return s
                    },
                  })
                function s(l) {
                  var f,
                    p,
                    h = 1e3,
                    m = 0.33,
                    v =
                      (f = l.minDelayUntilFirstValue) !== null && f !== void 0
                        ? f
                        : 0,
                    w = (p = l.teardownTime) !== null && p !== void 0 ? p : 0,
                    S = l.valueIncreaseRatePerSecond,
                    x = l.averageTimeBetweenValues,
                    y = l.maxValue,
                    g = l.valueIncreaseDelta,
                    b,
                    I = Date.now(),
                    D = 0,
                    E = 0
                  function C(P) {
                    var k = P()
                    return k > D && (D = k), D
                  }
                  function R(P) {
                    return P.value === y
                  }
                  function W(P, k) {
                    if (R(P)) {
                      var Y = Math.max(h, w),
                        X = k - P.time,
                        oe = X / Y,
                        ce = Math.min(1, oe),
                        De = B(ce),
                        Ne = P.value - E
                      return E + Ne * De
                    }
                    return K(P.value, k, I)
                  }
                  function F(P) {
                    var k = Math.min(g, y * m),
                      Y = (k / S) * 1e3,
                      X = v + Y,
                      oe = P - I,
                      ce = oe / X,
                      De = Math.min(1, ce)
                    return De * k
                  }
                  function G(P, k) {
                    var Y = 3.5
                    return 1 - Math.exp(-(P - k) / (x * Y))
                  }
                  function K(P, k, Y) {
                    var X = G(k, Y)
                    return X * P + (1 - X) * E
                  }
                  function B(P) {
                    return P * P
                  }
                  function V(P, k) {
                    if (b !== void 0) {
                      if (R(b)) return
                      ;(E = K(b.value, b.time, I)), (I = b.time)
                    }
                    b = { time: k ?? Date.now(), value: Math.min(P, y) }
                  }
                  function T(P) {
                    return C(function () {
                      var k = P ?? Date.now()
                      return b !== void 0 ? W(b, k) : F(k)
                    })
                  }
                  function N(P) {
                    return T(P) / y
                  }
                  return { setValue: V, smoothedValue: T, smoothedFactor: N }
                }
              },
            },
            r = {}
          function n(o) {
            if (r[o]) return r[o].exports
            var i = (r[o] = { exports: {} })
            return t[o](i, i.exports, n), i.exports
          }
          return (
            (function () {
              n.d = function (o, i) {
                for (var a in i)
                  n.o(i, a) &&
                    !n.o(o, a) &&
                    Object.defineProperty(o, a, { enumerable: !0, get: i[a] })
              }
            })(),
            (function () {
              n.o = function (o, i) {
                return Object.prototype.hasOwnProperty.call(o, i)
              }
            })(),
            (function () {
              n.r = function (o) {
                typeof Symbol < 'u' &&
                  Symbol.toStringTag &&
                  Object.defineProperty(o, Symbol.toStringTag, {
                    value: 'Module',
                  }),
                  Object.defineProperty(o, '__esModule', { value: !0 })
              }
            })(),
            n('./src/index.ts')
          )
        })()
      })(Gf)),
    Gf.exports
  )
}
;(function (e) {
  e.exports = (function () {
    var t = {
        './src/index.ts': function (o, i, a) {
          a.r(i),
            a.d(i, {
              Upload: function () {
                return Or
              },
              UploadApiError: function () {
                return Y
              },
            })
          var s = pk()
          function l($, q, ne) {
            if (ne) return q ? q($()) : $()
            try {
              var ae = Promise.resolve($())
              return q ? ae.then(q) : ae
            } catch (xe) {
              return Promise.reject(xe)
            }
          }
          function f($, q) {
            if ($) throw q
            return q
          }
          function p($, q) {
            try {
              var ne = $()
            } catch (ae) {
              return q(!0, ae)
            }
            return ne && ne.then
              ? ne.then(q.bind(null, !1), q.bind(null, !0))
              : q(!1, ne)
          }
          function h() {}
          function m($, q) {
            if (!q) return $ && $.then ? $.then(h) : Promise.resolve()
          }
          function v($, q, ne) {
            if (!$.s) {
              if (ne instanceof w)
                if (ne.s) q & 1 && (q = ne.s), (ne = ne.v)
                else {
                  ne.o = v.bind(null, $, q)
                  return
                }
              if (ne && ne.then) {
                ne.then(v.bind(null, $, q), v.bind(null, $, 2))
                return
              }
              ;($.s = q), ($.v = ne)
              var ae = $.o
              ae && ae($)
            }
          }
          var w = (function () {
            function $() {}
            return (
              ($.prototype.then = function (q, ne) {
                var ae = new $(),
                  xe = this.s
                if (xe) {
                  var Ae = xe & 1 ? q : ne
                  if (Ae) {
                    try {
                      v(ae, 1, Ae(this.v))
                    } catch (qe) {
                      v(ae, 2, qe)
                    }
                    return ae
                  } else return this
                }
                return (
                  (this.o = function (qe) {
                    try {
                      var ot = qe.v
                      qe.s & 1
                        ? v(ae, 1, q ? q(ot) : ot)
                        : ne
                        ? v(ae, 1, ne(ot))
                        : v(ae, 2, ot)
                    } catch (Nt) {
                      v(ae, 2, Nt)
                    }
                  }),
                  ae
                )
              }),
              $
            )
          })()
          function S($) {
            return $ instanceof w && $.s & 1
          }
          function x($, q, ne) {
            for (var ae; ; ) {
              var xe = $()
              if ((S(xe) && (xe = xe.v), !xe)) return Ae
              if (xe.then) {
                ae = 0
                break
              }
              var Ae = ne()
              if (Ae && Ae.then)
                if (S(Ae)) Ae = Ae.s
                else {
                  ae = 1
                  break
                }
              if (q) {
                var qe = q()
                if (qe && qe.then && !S(qe)) {
                  ae = 2
                  break
                }
              }
            }
            var ot = new w(),
              Nt = v.bind(null, ot, 2)
            return (
              (ae === 0
                ? xe.then(At)
                : ae === 1
                ? Ae.then(kt)
                : qe.then(yn)
              ).then(void 0, Nt),
              ot
            )
            function kt(vn) {
              Ae = vn
              do {
                if (q && ((qe = q()), qe && qe.then && !S(qe))) {
                  qe.then(yn).then(void 0, Nt)
                  return
                }
                if (((xe = $()), !xe || (S(xe) && !xe.v))) {
                  v(ot, 1, Ae)
                  return
                }
                if (xe.then) {
                  xe.then(At).then(void 0, Nt)
                  return
                }
                ;(Ae = ne()), S(Ae) && (Ae = Ae.v)
              } while (!Ae || !Ae.then)
              Ae.then(kt).then(void 0, Nt)
            }
            function At(vn) {
              vn
                ? ((Ae = ne()),
                  Ae && Ae.then ? Ae.then(kt).then(void 0, Nt) : kt(Ae))
                : v(ot, 1, Ae)
            }
            function yn() {
              ;(xe = $())
                ? xe.then
                  ? xe.then(At).then(void 0, Nt)
                  : At(xe)
                : v(ot, 1, Ae)
            }
          }
          function y($, q) {
            return $ && $.then ? $.then(q) : q($)
          }
          function g($) {
            return function () {
              for (var q = [], ne = 0; ne < arguments.length; ne++)
                q[ne] = arguments[ne]
              try {
                return Promise.resolve($.apply(this, q))
              } catch (ae) {
                return Promise.reject(ae)
              }
            }
          }
          function b() {
            var $,
              q,
              ne = function (qe) {
                return l(ae, function () {
                  return p(qe, function (ot, Nt) {
                    return xe(), f(ot, Nt)
                  })
                })
              },
              ae = g(function () {
                return y(
                  x(
                    function () {
                      return $ !== void 0
                    },
                    void 0,
                    function () {
                      return m($)
                    }
                  ),
                  function () {
                    $ = new Promise(function (Ae) {
                      q = Ae
                    })
                  }
                )
              }),
              xe = function () {
                if (q === void 0)
                  throw new Error('Unable to release mutex: already released.')
                q(), (q = void 0), ($ = void 0)
              }
            return { safe: ne }
          }
          var I = hk()
          function D($) {
            '@babel/helpers - typeof'
            return (
              (D =
                typeof Symbol == 'function' &&
                typeof Symbol.iterator == 'symbol'
                  ? function (q) {
                      return typeof q
                    }
                  : function (q) {
                      return q &&
                        typeof Symbol == 'function' &&
                        q.constructor === Symbol &&
                        q !== Symbol.prototype
                        ? 'symbol'
                        : typeof q
                    }),
              D($)
            )
          }
          function E($, q) {
            for (var ne = 0; ne < q.length; ne++) {
              var ae = q[ne]
              ;(ae.enumerable = ae.enumerable || !1),
                (ae.configurable = !0),
                'value' in ae && (ae.writable = !0),
                Object.defineProperty($, ae.key, ae)
            }
          }
          function C($, q, ne) {
            return (
              q && E($.prototype, q),
              ne && E($, ne),
              Object.defineProperty($, 'prototype', { writable: !1 }),
              $
            )
          }
          function R($, q) {
            if (!($ instanceof q))
              throw new TypeError('Cannot call a class as a function')
          }
          function W($, q) {
            if (typeof q != 'function' && q !== null)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;($.prototype = Object.create(q && q.prototype, {
              constructor: { value: $, writable: !0, configurable: !0 },
            })),
              Object.defineProperty($, 'prototype', { writable: !1 }),
              q && P($, q)
          }
          function F($) {
            var q = T()
            return function () {
              var ae = k($),
                xe
              if (q) {
                var Ae = k(this).constructor
                xe = Reflect.construct(ae, arguments, Ae)
              } else xe = ae.apply(this, arguments)
              return G(this, xe)
            }
          }
          function G($, q) {
            if (q && (D(q) === 'object' || typeof q == 'function')) return q
            if (q !== void 0)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return K($)
          }
          function K($) {
            if ($ === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return $
          }
          function B($) {
            var q = typeof Map == 'function' ? new Map() : void 0
            return (
              (B = function (ae) {
                if (ae === null || !N(ae)) return ae
                if (typeof ae != 'function')
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                if (typeof q < 'u') {
                  if (q.has(ae)) return q.get(ae)
                  q.set(ae, xe)
                }
                function xe() {
                  return V(ae, arguments, k(this).constructor)
                }
                return (
                  (xe.prototype = Object.create(ae.prototype, {
                    constructor: {
                      value: xe,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  P(xe, ae)
                )
              }),
              B($)
            )
          }
          function V($, q, ne) {
            return (
              T()
                ? (V = Reflect.construct)
                : (V = function (xe, Ae, qe) {
                    var ot = [null]
                    ot.push.apply(ot, Ae)
                    var Nt = Function.bind.apply(xe, ot),
                      kt = new Nt()
                    return qe && P(kt, qe.prototype), kt
                  }),
              V.apply(null, arguments)
            )
          }
          function T() {
            if (
              typeof Reflect > 'u' ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1
            if (typeof Proxy == 'function') return !0
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              )
            } catch {
              return !1
            }
          }
          function N($) {
            return Function.toString.call($).indexOf('[native code]') !== -1
          }
          function P($, q) {
            return (
              (P =
                Object.setPrototypeOf ||
                function (ae, xe) {
                  return (ae.__proto__ = xe), ae
                }),
              P($, q)
            )
          }
          function k($) {
            return (
              (k = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (ne) {
                    return ne.__proto__ || Object.getPrototypeOf(ne)
                  }),
              k($)
            )
          }
          var Y = (function ($) {
            W(ne, $)
            var q = F(ne)
            function ne(ae) {
              var xe
              return (
                R(this, ne),
                (xe = q.call(this, ae.error.message)),
                (xe.errorCode = ae.error.code),
                (xe.details = ae.error.details),
                xe
              )
            }
            return C(ne)
          })(B(Error))
          function X($, q) {
            if ($) throw q
            return q
          }
          function oe($, q) {
            try {
              var ne = $()
            } catch (ae) {
              return q(!0, ae)
            }
            return ne && ne.then
              ? ne.then(q.bind(null, !1), q.bind(null, !0))
              : q(!1, ne)
          }
          function ce($) {
            if ($ && $.then) return $.then(Nr)
          }
          function De($) {
            return _t($) || Xe($) || Le($) || Ne()
          }
          function Ne() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Le($, q) {
            if ($) {
              if (typeof $ == 'string') return Jt($, q)
              var ne = Object.prototype.toString.call($).slice(8, -1)
              if (
                (ne === 'Object' && $.constructor && (ne = $.constructor.name),
                ne === 'Map' || ne === 'Set')
              )
                return Array.from($)
              if (
                ne === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ne)
              )
                return Jt($, q)
            }
          }
          function Xe($) {
            if (
              (typeof Symbol < 'u' && $[Symbol.iterator] != null) ||
              $['@@iterator'] != null
            )
              return Array.from($)
          }
          function _t($) {
            if (Array.isArray($)) return Jt($)
          }
          function Jt($, q) {
            ;(q == null || q > $.length) && (q = $.length)
            for (var ne = 0, ae = new Array(q); ne < q; ne++) ae[ne] = $[ne]
            return ae
          }
          function Nr() {}
          var Kn = 7
          function Ze($, q) {
            if (!q) return $ && $.then ? $.then(Nr) : Promise.resolve()
          }
          var Zr = 'W142hJk'
          function ie($) {
            return function () {
              for (var q = [], ne = 0; ne < arguments.length; ne++)
                q[ne] = arguments[ne]
              try {
                return Promise.resolve($.apply(this, q))
              } catch (ae) {
                return Promise.reject(ae)
              }
            }
          }
          var Co = ['free', 'demo']
          function Qe($, q, ne) {
            return ne
              ? q
                ? q($)
                : $
              : ((!$ || !$.then) && ($ = Promise.resolve($)), q ? $.then(q) : $)
          }
          var pn = 'public_'
          function ar($, q, ne) {
            if (ne) return q ? q($()) : $()
            try {
              var ae = Promise.resolve($())
              return q ? ae.then(q) : ae
            } catch (xe) {
              return Promise.reject(xe)
            }
          }
          var Ar = 5
          function Kr($, q) {
            return ar($, Nr, q)
          }
          var wr = 20
          function er($, q) {
            try {
              var ne = $()
            } catch (ae) {
              return q(ae)
            }
            return ne && ne.then ? ne.then(void 0, q) : ne
          }
          var hn = 100
          function Xr($) {
            var q = $()
            if (q && q.then) return q.then(Nr)
          }
          var Vt = 5,
            sr = 10,
            mn = 2147483,
            Jr = '/api/v1/access_tokens/',
            jt = '[upload-js] '
          function Or($) {
            var q,
              ne,
              ae,
              xe,
              Ae,
              qe,
              ot,
              Nt,
              kt,
              At,
              yn = b(),
              vn =
                (ne =
                  (q = $.internal) === null || q === void 0
                    ? void 0
                    : q.apiUrl) !== null && ne !== void 0
                  ? ne
                  : 'https://api.bytescale.com',
              z =
                (xe =
                  (ae = $.internal) === null || ae === void 0
                    ? void 0
                    : ae.cdnUrl) !== null && xe !== void 0
                  ? xe
                  : 'https://upcdn.io',
              Q =
                (qe =
                  (Ae = $.internal) === null || Ae === void 0
                    ? void 0
                    : Ae.authenticateWithApiKey) !== null && qe !== void 0
                  ? qe
                  : !0,
              Z =
                (ot = $.internal) === null || ot === void 0
                  ? void 0
                  : ot.headers,
              se = $.debug === !0,
              pe = ' was called.',
              we
            if (($ ?? void 0) === void 0)
              throw new Error(''.concat(jt, 'Config parameter required.'))
            if (
              ($.debug === !0 &&
                console.log(
                  ''
                    .concat(jt, "Initialized with API key '")
                    .concat($.apiKey, "'")
                ),
              ((Nt = $.apiKey) !== null && Nt !== void 0 ? Nt : void 0) ===
                void 0)
            )
              throw new Error(
                ''.concat(
                  jt,
                  "Please provide an API key via the 'apiKey' config parameter."
                )
              )
            if ($.apiKey.trim() !== $.apiKey)
              throw new Error(
                ''.concat(jt, 'API key needs trimming (whitespace detected).')
              )
            if (
              ((kt = $.internal) === null || kt === void 0
                ? void 0
                : kt.authenticateWithApiKey) === !1
            )
              At = $.internal.accountId
            else if (Co.includes($.apiKey)) At = Zr
            else {
              if (!$.apiKey.startsWith(pn))
                throw new Error(
                  ''.concat(jt, 'API key must begin with "').concat(pn, '".')
                )
              if (((At = $.apiKey.substr(pn.length, Kn)), At.length !== Kn))
                throw new Error(''.concat(jt, 'API key is too short!'))
            }
            var Ee = ''.concat(z).concat(Jr).concat(At),
              be = ie(function (Me, me) {
                return Ze(
                  Dr(
                    ie(function (ge) {
                      return ge.beginAuthSession(Me, me)
                    }),
                    ie(function () {
                      if (
                        (Je("'beginAuthSession'".concat(pe)),
                        (we == null ? void 0 : we.authUrl) === Me)
                      ) {
                        tn(
                          "'beginAuthSession' already called. Ignoring this call. Hint: call 'endAuthSession' and then 'beginAuthSession' if you want to restart the auth session."
                        )
                        return
                      }
                      return ar(Ve, function () {
                        var ge = {
                          accessToken: void 0,
                          accessTokenRefreshHandle: void 0,
                          isActive: !0,
                          authUrl: Me,
                        }
                        return (we = ge), Ze(Yt(Me, me, ge))
                      })
                    })
                  )
                )
              }),
              ve = ie(function () {
                return Ze(
                  Dr(
                    ie(function (Me) {
                      return Me.endAuthSession()
                    }),
                    ie(function () {
                      return Je("'endAuthSession'".concat(pe)), Kr(Ve)
                    })
                  )
                )
              }),
              Re = ie(function (Me) {
                var me =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {}
                Je("'uploadFile'".concat(pe))
                var ge = [],
                  Ue = function (bt) {
                    ge.push(bt)
                  },
                  Pe = function () {
                    return ge.forEach(function (bt) {
                      return bt()
                    })
                  }
                return (
                  me.onBegin !== void 0 && me.onBegin({ cancel: Pe }),
                  er(
                    function () {
                      return Qe(It(Me, me, Ue))
                    },
                    function (tt) {
                      throw (Pe(), tt)
                    }
                  )
                )
              }),
              wt = function (me, ge) {
                var Ue,
                  Pe = 'raw',
                  tt = typeof ge == 'string' ? { transformation: ge } : ge
                return ''
                  .concat(z, '/')
                  .concat(At, '/')
                  .concat(
                    (Ue = tt == null ? void 0 : tt.transformation) !== null &&
                      Ue !== void 0
                      ? Ue
                      : Pe
                  )
                  .concat(me)
                  .concat(
                    (tt == null ? void 0 : tt.auth) === !0 ? '?_auth=true' : ''
                  )
              },
              Te = {
                beginAuthSession: be,
                endAuthSession: ve,
                uploadFile: Re,
                url: wt,
              },
              Ve = ie(function () {
                return Ze(
                  yn.safe(
                    ie(function () {
                      if (we !== void 0) {
                        var Me = we
                        return (
                          (we = void 0),
                          Me.accessTokenRefreshHandle !== void 0 &&
                            clearTimeout(Me.accessTokenRefreshHandle),
                          (Me.isActive = !1),
                          Kr(No)
                        )
                      }
                    })
                  )
                )
              }),
              It = ie(function (Me, me, ge) {
                var Ue = (0, I.ProgressSmoother)({
                    maxValue: Me.size,
                    teardownTime: 1e3,
                    minDelayUntilFirstValue: 2e3,
                    valueIncreaseDelta: 204800,
                    valueIncreaseRatePerSecond: 51200,
                    averageTimeBetweenValues: 1e3,
                  }),
                  Pe = function (bt) {
                    if (me.onProgress === void 0) bt()
                    else {
                      var st = Ue.smoothedValue(),
                        lt = Me.size
                      st === lt && bt(),
                        me.onProgress({
                          bytesSent: st,
                          bytesTotal: lt,
                          progress: Math.round((st / lt) * 100),
                        })
                    }
                  }
                return gn(
                  hn,
                  Pe,
                  ie(function () {
                    var tt = {
                      path: me.path,
                      metadata: me.metadata,
                      mime: Ye(Me.type),
                      originalFileName: Me.name,
                      protocol: '1.1',
                      size: Me.size,
                      tags: me.tags,
                    }
                    return (
                      Je(
                        'Initiating file upload. Params = '.concat(
                          JSON.stringify(tt)
                        )
                      ),
                      Qe(
                        (0, s.beginMultipartUpload)(ze(), At, tt),
                        function (bt) {
                          var st = lr(bt)
                          Je(
                            'Initiated file upload. Metadata = '.concat(
                              JSON.stringify(st)
                            )
                          )
                          var lt = (function () {
                              var ur = 0
                              return function () {
                                if (ur !== st.uploadParts.count - 1) return ++ur
                              }
                            })(),
                            ja = [st.uploadParts.first],
                            kc = ie(function (ur) {
                              var cr = ja.pop()
                              if (cr !== void 0)
                                return (
                                  Je(
                                    'Dequeued part '.concat(
                                      cr.uploadPartIndex,
                                      '.'
                                    ),
                                    ur
                                  ),
                                  cr
                                )
                              var Jn = lt()
                              if (Jn === void 0) {
                                Je('No parts remaining.', ur)
                                return
                              }
                              return (
                                Je(
                                  'Fetching metadata for part '.concat(Jn, '.'),
                                  ur
                                ),
                                Qe(
                                  (0, s.getUploadPart)(
                                    ze(),
                                    At,
                                    st.uploadId,
                                    Jn
                                  ),
                                  lr
                                )
                              )
                            }),
                            _n = [],
                            Xn = function ur(cr) {
                              return Qe(kc(cr), function (Jn) {
                                return Xr(function () {
                                  if (Jn !== void 0) {
                                    var dl = 0,
                                      Rc = function (Lc) {
                                        var Ia = Lc.bytesSent
                                        _n[cr] === void 0
                                          ? (_n[cr] = Ia)
                                          : ((_n[cr] -= dl), (_n[cr] += Ia)),
                                          (dl = Ia)
                                        var pl = _n.reduce(function (zc, Uc) {
                                          return zc + Uc
                                        })
                                        Ue.setValue(pl)
                                      }
                                    return Qe(
                                      pt(Me, Jn, Rc, ge, cr),
                                      function () {
                                        return Ze(ur(cr))
                                      }
                                    )
                                  }
                                })
                              })
                            }
                          return Qe(
                            Promise.all(
                              De(Array(Ar).keys()).map(function (ur) {
                                return Qe(Xn(ur))
                              })
                            ),
                            function () {
                              var ur = Object.assign(
                                { accountId: At, file: Me },
                                st.file
                              )
                              return Je('File upload completed.'), ur
                            }
                          )
                        }
                      )
                    )
                  })
                )
              }),
              $t = ie(function (Me, me, ge, Ue) {
                var Pe = new XMLHttpRequest(),
                  tt = !0
                return (
                  Ue(function () {
                    tt && Pe.abort()
                  }),
                  oe(
                    function () {
                      return Qe(
                        new Promise(function (bt, st) {
                          Pe.upload.addEventListener(
                            'progress',
                            function (lt) {
                              lt.lengthComputable &&
                                ge({
                                  bytesSent: lt.loaded,
                                  bytesTotal: lt.total,
                                })
                            },
                            !1
                          ),
                            Pe.addEventListener('load', function () {
                              if (
                                (ge({
                                  bytesSent: me.size,
                                  bytesTotal: me.size,
                                }),
                                Math.floor(Pe.status / 100) === 2)
                              ) {
                                var lt = Pe.getResponseHeader('etag')
                                lt == null
                                  ? st(
                                      new Error(
                                        'File upload error: no etag header in upload response.'
                                      )
                                    )
                                  : bt({ etag: lt })
                              } else st(new Error('File upload error: status code '.concat(Pe.status)))
                            }),
                            (Pe.onabort = function () {
                              return st(new Error('File upload cancelled.'))
                            }),
                            (Pe.onerror = function () {
                              return st(new Error('File upload error.'))
                            }),
                            (Pe.ontimeout = function () {
                              return st(new Error('File upload timeout.'))
                            }),
                            Pe.open('PUT', Me),
                            Pe.send(me)
                        })
                      )
                    },
                    function (bt, st) {
                      return (tt = !1), X(bt, st)
                    }
                  )
                )
              }),
              pt = ie(function (Me, me, ge, Ue, Pe) {
                var tt =
                  me.range.inclusiveEnd === -1
                    ? new Blob()
                    : Me.slice(
                        me.range.inclusiveStart,
                        me.range.inclusiveEnd + 1
                      )
                return (
                  Je('Uploading part '.concat(me.uploadPartIndex, '.'), Pe),
                  Qe($t(me.uploadUrl, tt, ge, Ue), function (bt) {
                    var st = bt.etag
                    return Qe(
                      (0, s.completeUploadPart)(
                        ze(),
                        At,
                        me.uploadId,
                        me.uploadPartIndex,
                        { etag: st }
                      ),
                      function (lt) {
                        lr(lt),
                          Je(
                            'Uploaded part '.concat(me.uploadPartIndex, '.'),
                            Pe
                          )
                      }
                    )
                  })
                )
              }),
              gn = ie(function (Me, me, ge) {
                var Ue,
                  Pe = new Promise(function (lt) {
                    Ue = lt
                  }),
                  tt = !0,
                  bt = function () {
                    tt && (Ue(), clearInterval(st), (tt = !1))
                  },
                  st = setInterval(function () {
                    return me(bt)
                  }, Me)
                return oe(
                  function () {
                    return ar(ge, function (lt) {
                      return Qe(Pe, function () {
                        return lt
                      })
                    })
                  },
                  function (lt, ja) {
                    return bt(), X(lt, ja)
                  }
                )
              }),
              No = ie(function () {
                return Ze(Ao(Ee, {}, !0))
              }),
              Dr = ie(function (Me, me) {
                var ge = Pr()
                return Xr(function () {
                  return ge !== Te ? Ze(Me(ge)) : Kr(me)
                })
              }),
              Pr = function () {
                var me = 'uploadJsAuthInstance',
                  ge = window[me]
                return ge === void 0 && ((ge = Te), (window[me] = Te)), ge
              },
              Yt = ie(function (Me, me, ge) {
                return ce(
                  er(
                    function () {
                      return Ze(
                        yn.safe(
                          ie(function () {
                            if (ge.isActive)
                              return ar(me, function (Ue) {
                                return Qe(An(Me, Ue), function (Pe) {
                                  return Qe(
                                    kr(Ee, {}, { accessToken: Pe }, !0),
                                    function (tt) {
                                      var bt = tt.ttlSeconds - wr
                                      bt < sr &&
                                        Ma(
                                          'JWT expiration is too short: waiting for '.concat(
                                            sr,
                                            ' seconds before refreshing.'
                                          )
                                        ),
                                        (ge.accessToken = tt.accessToken),
                                        (ge.accessTokenRefreshHandle =
                                          window.setTimeout(function () {
                                            Yt(Me, me, ge).then(
                                              function () {},
                                              function (st) {
                                                return tn(
                                                  'Permanent error when refreshing access token: '.concat(
                                                    st
                                                  )
                                                )
                                              }
                                            )
                                          }, Math.min(mn, Math.max(sr, bt)) *
                                            1e3))
                                    }
                                  )
                                })
                              })
                          })
                        )
                      )
                    },
                    function (Ue) {
                      return (
                        tn('Error when refreshing access token: '.concat(Ue)),
                        Qe(
                          new Promise(function (Pe) {
                            return setTimeout(Pe, Vt * 1e3)
                          }),
                          function () {
                            return Ze(Yt(Me, me, ge))
                          }
                        )
                      )
                    }
                  )
                )
              }),
              kr = ie(function (Me, me, ge, Ue) {
                return Qe(
                  en({ method: 'PUT', path: Me, headers: me, body: ge }, Ue),
                  function (Pe) {
                    return Qe(lr(Pe))
                  }
                )
              }),
              An = ie(function (Me, me) {
                var ge = 'Your auth API endpoint'
                return Qe(
                  en({ method: 'GET', path: Me, headers: me }, !1),
                  function (Ue) {
                    if (!Ue.ok)
                      throw new Error(
                        ''
                          .concat(jt)
                          .concat(
                            ge,
                            " returned a failed response. Please ensure the endpoint's status code is 200."
                          )
                      )
                    var Pe = Ue.body
                    if (typeof Pe != 'string')
                      throw new Error(
                        ''
                          .concat(jt)
                          .concat(
                            ge,
                            " returned an unsupported response. Please ensure: 1) 'Content-Type: text/plain' is in the HTTP response headers 2) the status code is 200."
                          )
                      )
                    if (Pe.length === 0)
                      throw new Error(
                        ''
                          .concat(jt)
                          .concat(
                            ge,
                            ' returned an empty string. Please return a valid JWT instead.'
                          )
                      )
                    if (Pe.trim().length !== Pe.length)
                      throw new Error(
                        ''
                          .concat(jt)
                          .concat(
                            ge,
                            ' returned whitespace around the JWT, please remove it.'
                          )
                      )
                    return Pe
                  }
                )
              }),
              Ao = ie(function (Me, me, ge) {
                return Qe(
                  en({ method: 'DELETE', path: Me, headers: me }, ge),
                  function (Ue) {
                    lr(Ue)
                  }
                )
              }),
              lr = function (me) {
                var ge
                if (me.ok) return me.body
                var Ue = me.body
                throw typeof ((ge = Ue == null ? void 0 : Ue.error) === null ||
                ge === void 0
                  ? void 0
                  : ge.code) == 'string'
                  ? new Y(Ue)
                  : new Error(
                      ''.concat(
                        jt,
                        'Network error. If problem persists, and your network connectivity is healthy, please contact support@bytescale.com and provide: (a) time of failed request in UTC (b) screenshot of failed network response body (c) screenshot of failed network response header (d) browser + version.'
                      )
                    )
              },
              en = ie(function (Me, me) {
                return (0,
                s.request)({ BASE: Me.path, WITH_CREDENTIALS: me }, Object.assign(Object.assign({}, Me), { path: '' }))
              }),
              ze = function () {
                var me = { BASE: vn, WITH_CREDENTIALS: !0 }
                Q && ((me.USERNAME = 'apikey'), (me.PASSWORD = $.apiKey))
                var ge = we == null ? void 0 : we.accessToken
                return (
                  (Z !== void 0 || ge !== void 0) &&
                    (me.HEADERS = ie(function () {
                      return Qe(
                        Z === void 0 ? {} : Z(),
                        function (Ue) {
                          var Pe = we == null ? void 0 : we.accessToken
                          return Object.assign(
                            Object.assign({}, Ue),
                            Pe === void 0 ? {} : { 'authorization-token': Pe }
                          )
                        },
                        Z === void 0
                      )
                    })),
                  me
                )
              },
              Ye = function (me) {
                var ge = me.toLowerCase(),
                  Ue = /^[a-z0-9]+\/[a-z0-9+\-._]+(?:;[^=]+=[^;]+)*$/
                return Ue.test(ge) ? ge : void 0
              },
              Je = function (me, ge) {
                se &&
                  console.log(
                    ''
                      .concat(jt)
                      .concat(me)
                      .concat(ge !== void 0 ? ' (Worker '.concat(ge, ')') : '')
                  )
              },
              tn = function (me) {
                console.error(''.concat(jt).concat(me))
              },
              Ma = function (me) {
                console.warn(''.concat(jt).concat(me))
              }
            return Te
          }
        },
      },
      r = {}
    function n(o) {
      if (r[o]) return r[o].exports
      var i = (r[o] = { exports: {} })
      return t[o](i, i.exports, n), i.exports
    }
    return (
      (function () {
        n.d = function (o, i) {
          for (var a in i)
            n.o(i, a) &&
              !n.o(o, a) &&
              Object.defineProperty(o, a, { enumerable: !0, get: i[a] })
        }
      })(),
      (function () {
        n.o = function (o, i) {
          return Object.prototype.hasOwnProperty.call(o, i)
        }
      })(),
      (function () {
        n.r = function (o) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(o, '__esModule', { value: !0 })
        }
      })(),
      n('./src/index.ts')
    )
  })()
})(M1)
var mk = M1.exports
const yk = sc(nk)
var Yn,
  nt,
  qf,
  Mg,
  ya = 0,
  j1 = [],
  gu = [],
  mt = Oe,
  jg = mt.__b,
  Ig = mt.__r,
  Tg = mt.diffed,
  Cg = mt.__c,
  Ng = mt.unmount,
  Ag = mt.__
function di(e, t) {
  mt.__h && mt.__h(nt, e, ya || t), (ya = 0)
  var r = nt.__H || (nt.__H = { __: [], __h: [] })
  return e >= r.__.length && r.__.push({ __V: gu }), r.__[e]
}
function Dc(e) {
  return (ya = 1), tm(D1, e)
}
function tm(e, t, r) {
  var n = di(Yn++, 2)
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        r ? r(t) : D1(void 0, t),
        function (s) {
          var l = n.__N ? n.__N[0] : n.__[0],
            f = n.t(l, s)
          l !== f && ((n.__N = [f, n.__[1]]), n.__c.setState({}))
        },
      ]),
      (n.__c = nt),
      !nt.u))
  ) {
    var o = function (s, l, f) {
      if (!n.__c.__H) return !0
      var p = n.__c.__H.__.filter(function (m) {
        return !!m.__c
      })
      if (
        p.every(function (m) {
          return !m.__N
        })
      )
        return !i || i.call(this, s, l, f)
      var h = !1
      return (
        p.forEach(function (m) {
          if (m.__N) {
            var v = m.__[0]
            ;(m.__ = m.__N), (m.__N = void 0), v !== m.__[0] && (h = !0)
          }
        }),
        !(!h && n.__c.props === s) && (!i || i.call(this, s, l, f))
      )
    }
    nt.u = !0
    var i = nt.shouldComponentUpdate,
      a = nt.componentWillUpdate
    ;(nt.componentWillUpdate = function (s, l, f) {
      if (this.__e) {
        var p = i
        ;(i = void 0), o(s, l, f), (i = p)
      }
      a && a.call(this, s, l, f)
    }),
      (nt.shouldComponentUpdate = o)
  }
  return n.__N || n.__
}
function rm(e, t) {
  var r = di(Yn++, 3)
  !mt.__s && nm(r.__H, t) && ((r.__ = e), (r.i = t), nt.__H.__h.push(r))
}
function cl(e, t) {
  var r = di(Yn++, 4)
  !mt.__s && nm(r.__H, t) && ((r.__ = e), (r.i = t), nt.__h.push(r))
}
function I1(e) {
  return (
    (ya = 5),
    Pc(function () {
      return { current: e }
    }, [])
  )
}
function T1(e, t, r) {
  ;(ya = 6),
    cl(
      function () {
        return typeof e == 'function'
          ? (e(t()),
            function () {
              return e(null)
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null)
            })
          : void 0
      },
      r == null ? r : r.concat(e)
    )
}
function Pc(e, t) {
  var r = di(Yn++, 7)
  return nm(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__
}
function C1(e, t) {
  return (
    (ya = 8),
    Pc(function () {
      return e
    }, t)
  )
}
function N1(e) {
  var t = nt.context[e.__c],
    r = di(Yn++, 9)
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(nt)), t.props.value) : e.__
  )
}
function A1(e, t) {
  mt.useDebugValue && mt.useDebugValue(t ? t(e) : e)
}
function vk(e) {
  var t = di(Yn++, 10),
    r = Dc()
  return (
    (t.__ = e),
    nt.componentDidCatch ||
      (nt.componentDidCatch = function (n, o) {
        t.__ && t.__(n, o), r[1](n)
      }),
    [
      r[0],
      function () {
        r[1](void 0)
      },
    ]
  )
}
function O1() {
  var e = di(Yn++, 11)
  if (!e.__) {
    for (var t = nt.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__
    var r = t.__m || (t.__m = [0, 0])
    e.__ = 'P' + r[0] + '-' + r[1]++
  }
  return e.__
}
function gk() {
  for (var e; (e = j1.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(_u), e.__H.__h.forEach(jp), (e.__H.__h = [])
      } catch (t) {
        ;(e.__H.__h = []), mt.__e(t, e.__v)
      }
}
;(mt.__b = function (e) {
  ;(nt = null), jg && jg(e)
}),
  (mt.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ag && Ag(e, t)
  }),
  (mt.__r = function (e) {
    Ig && Ig(e), (Yn = 0)
    var t = (nt = e.__c).__H
    t &&
      (qf === nt
        ? ((t.__h = []),
          (nt.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.__V = gu), (r.__N = r.i = void 0)
          }))
        : (t.__h.forEach(_u), t.__h.forEach(jp), (t.__h = []), (Yn = 0))),
      (qf = nt)
  }),
  (mt.diffed = function (e) {
    Tg && Tg(e)
    var t = e.__c
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((j1.push(t) !== 1 && Mg === mt.requestAnimationFrame) ||
          ((Mg = mt.requestAnimationFrame) || _k)(gk)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i),
          r.__V !== gu && (r.__ = r.__V),
          (r.i = void 0),
          (r.__V = gu)
      })),
      (qf = nt = null)
  }),
  (mt.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(_u),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || jp(n)
          }))
      } catch (n) {
        t.some(function (o) {
          o.__h && (o.__h = [])
        }),
          (t = []),
          mt.__e(n, r.__v)
      }
    }),
      Cg && Cg(e, t)
  }),
  (mt.unmount = function (e) {
    Ng && Ng(e)
    var t,
      r = e.__c
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          _u(n)
        } catch (o) {
          t = o
        }
      }),
      (r.__H = void 0),
      t && mt.__e(t, r.__v))
  })
var Og = typeof requestAnimationFrame == 'function'
function _k(e) {
  var t,
    r = function () {
      clearTimeout(n), Og && cancelAnimationFrame(t), setTimeout(e)
    },
    n = setTimeout(r, 100)
  Og && (t = requestAnimationFrame(r))
}
function _u(e) {
  var t = nt,
    r = e.__c
  typeof r == 'function' && ((e.__c = void 0), r()), (nt = t)
}
function jp(e) {
  var t = nt
  ;(e.__c = e.__()), (nt = t)
}
function nm(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, n) {
      return r !== e[n]
    })
  )
}
function D1(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function P1(e, t) {
  for (var r in t) e[r] = t[r]
  return e
}
function Ip(e, t) {
  for (var r in e) if (r !== '__source' && !(r in t)) return !0
  for (var n in t) if (n !== '__source' && e[n] !== t[n]) return !0
  return !1
}
function ac(e, t) {
  ;(this.props = e), (this.context = t)
}
function k1(e, t) {
  function r(o) {
    var i = this.props.ref,
      a = i == o.ref
    return (
      !a && i && (i.call ? i(null) : (i.current = null)),
      t ? !t(this.props, o) || !a : Ip(this.props, o)
    )
  }
  function n(o) {
    return (this.shouldComponentUpdate = r), qr(e, o)
  }
  return (
    (n.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
    (n.prototype.isReactComponent = !0),
    (n.__f = !0),
    n
  )
}
;((ac.prototype = new Hr()).isPureReactComponent = !0),
  (ac.prototype.shouldComponentUpdate = function (e, t) {
    return Ip(this.props, e) || Ip(this.state, t)
  })
var Dg = Oe.__b
Oe.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Dg && Dg(e)
}
var wk =
  (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.forward_ref')) || 3911
function R1(e) {
  function t(r) {
    var n = P1({}, r)
    return delete n.ref, e(n, r.ref || null)
  }
  return (
    (t.$$typeof = wk),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
    t
  )
}
var Pg = function (e, t) {
    return e == null ? null : Nn(Nn(e).map(t))
  },
  L1 = {
    map: Pg,
    forEach: Pg,
    count: function (e) {
      return e ? Nn(e).length : 0
    },
    only: function (e) {
      var t = Nn(e)
      if (t.length !== 1) throw 'Children.only'
      return t[0]
    },
    toArray: Nn,
  },
  bk = Oe.__e
Oe.__e = function (e, t, r, n) {
  if (e.then) {
    for (var o, i = t; (i = i.__); )
      if ((o = i.__c) && o.__c)
        return t.__e == null && ((t.__e = r.__e), (t.__k = r.__k)), o.__c(e, t)
  }
  bk(e, t, r, n)
}
var kg = Oe.unmount
function z1(e, t, r) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (n) {
          typeof n.__c == 'function' && n.__c()
        }),
        (e.__c.__H = null)),
      (e = P1({}, e)).__c != null &&
        (e.__c.__P === r && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (n) {
          return z1(n, t, r)
        }))),
    e
  )
}
function U1(e, t, r) {
  return (
    e &&
      r &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (n) {
          return U1(n, t, r)
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && r.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = r))),
    e
  )
}
function Ss() {
  ;(this.__u = 0), (this.t = null), (this.__b = null)
}
function F1(e) {
  var t = e.__.__c
  return t && t.__a && t.__a(e)
}
function $1(e) {
  var t, r, n
  function o(i) {
    if (
      (t ||
        (t = e()).then(
          function (a) {
            r = a.default || a
          },
          function (a) {
            n = a
          }
        ),
      n)
    )
      throw n
    if (!r) throw t
    return qr(r, i)
  }
  return (o.displayName = 'Lazy'), (o.__f = !0), o
}
function Wi() {
  ;(this.u = null), (this.o = null)
}
;(Oe.unmount = function (e) {
  var t = e.__c
  t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), kg && kg(e)
}),
  ((Ss.prototype = new Hr()).__c = function (e, t) {
    var r = t.__c,
      n = this
    n.t == null && (n.t = []), n.t.push(r)
    var o = F1(n.__v),
      i = !1,
      a = function () {
        i || ((i = !0), (r.__R = null), o ? o(s) : s())
      }
    r.__R = a
    var s = function () {
      if (!--n.__u) {
        if (n.state.__a) {
          var l = n.state.__a
          n.__v.__k[0] = U1(l, l.__c.__P, l.__c.__O)
        }
        var f
        for (n.setState({ __a: (n.__b = null) }); (f = n.t.pop()); )
          f.forceUpdate()
      }
    }
    n.__u++ || 32 & t.__u || n.setState({ __a: (n.__b = n.__v.__k[0]) }),
      e.then(a, a)
  }),
  (Ss.prototype.componentWillUnmount = function () {
    this.t = []
  }),
  (Ss.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement('div'),
          n = this.__v.__k[0].__c
        this.__v.__k[0] = z1(this.__b, r, (n.__O = n.__P))
      }
      this.__b = null
    }
    var o = t.__a && qr(Ir, null, e.fallback)
    return o && (o.__u &= -33), [qr(Ir, null, t.__a ? null : e.children), o]
  })
var Rg = function (e, t, r) {
  if (
    (++r[1] === r[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.o.size))
  )
    for (r = e.u; r; ) {
      for (; r.length > 3; ) r.pop()()
      if (r[1] < r[0]) break
      e.u = r = r[2]
    }
}
function xk(e) {
  return (
    (this.getChildContext = function () {
      return e.context
    }),
    e.children
  )
}
function Sk(e) {
  var t = this,
    r = e.i
  ;(t.componentWillUnmount = function () {
    ma(null, t.l), (t.l = null), (t.i = null)
  }),
    t.i && t.i !== r && t.componentWillUnmount(),
    t.l ||
      ((t.i = r),
      (t.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        appendChild: function (n) {
          this.childNodes.push(n), t.i.appendChild(n)
        },
        insertBefore: function (n, o) {
          this.childNodes.push(n), t.i.appendChild(n)
        },
        removeChild: function (n) {
          this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
            t.i.removeChild(n)
        },
      })),
    ma(qr(xk, { context: t.context }, e.__v), t.l)
}
function B1(e, t) {
  var r = qr(Sk, { __v: e, i: t })
  return (r.containerInfo = t), r
}
;((Wi.prototype = new Hr()).__a = function (e) {
  var t = this,
    r = F1(t.__v),
    n = t.o.get(e)
  return (
    n[0]++,
    function (o) {
      var i = function () {
        t.props.revealOrder ? (n.push(o), Rg(t, e, n)) : o()
      }
      r ? r(i) : i()
    }
  )
}),
  (Wi.prototype.render = function (e) {
    ;(this.u = null), (this.o = new Map())
    var t = Nn(e.children)
    e.revealOrder && e.revealOrder[0] === 'b' && t.reverse()
    for (var r = t.length; r--; ) this.o.set(t[r], (this.u = [1, 0, this.u]))
    return e.children
  }),
  (Wi.prototype.componentDidUpdate = Wi.prototype.componentDidMount =
    function () {
      var e = this
      this.o.forEach(function (t, r) {
        Rg(e, r, t)
      })
    })
var W1 =
    (typeof Symbol < 'u' && Symbol.for && Symbol.for('react.element')) || 60103,
  Ek =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  Mk = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
  jk = /[A-Z0-9]/g,
  Ik = typeof document < 'u',
  Tk = function (e) {
    return (
      typeof Symbol < 'u' && typeof Symbol() == 'symbol'
        ? /fil|che|rad/
        : /fil|che|ra/
    ).test(e)
  }
function H1(e, t, r) {
  return (
    t.__k == null && (t.textContent = ''),
    ma(e, t),
    typeof r == 'function' && r(),
    e ? e.__c : null
  )
}
function Q1(e, t, r) {
  return Jh(e, t), typeof r == 'function' && r(), e ? e.__c : null
}
;(Hr.prototype.isReactComponent = {}),
  [
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate',
  ].forEach(function (e) {
    Object.defineProperty(Hr.prototype, e, {
      configurable: !0,
      get: function () {
        return this['UNSAFE_' + e]
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        })
      },
    })
  })
var Lg = Oe.event
function Ck() {}
function Nk() {
  return this.cancelBubble
}
function Ak() {
  return this.defaultPrevented
}
Oe.event = function (e) {
  return (
    Lg && (e = Lg(e)),
    (e.persist = Ck),
    (e.isPropagationStopped = Nk),
    (e.isDefaultPrevented = Ak),
    (e.nativeEvent = e)
  )
}
var om,
  Ok = {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this.class
    },
  },
  zg = Oe.vnode
Oe.vnode = function (e) {
  typeof e.type == 'string' &&
    (function (t) {
      var r = t.props,
        n = t.type,
        o = {}
      for (var i in r) {
        var a = r[i]
        if (
          !(
            (i === 'value' && 'defaultValue' in r && a == null) ||
            (Ik && i === 'children' && n === 'noscript') ||
            i === 'class' ||
            i === 'className'
          )
        ) {
          var s = i.toLowerCase()
          i === 'defaultValue' && 'value' in r && r.value == null
            ? (i = 'value')
            : i === 'download' && a === !0
            ? (a = '')
            : s === 'translate' && a === 'no'
            ? (a = !1)
            : s === 'ondoubleclick'
            ? (i = 'ondblclick')
            : s !== 'onchange' ||
              (n !== 'input' && n !== 'textarea') ||
              Tk(r.type)
            ? s === 'onfocus'
              ? (i = 'onfocusin')
              : s === 'onblur'
              ? (i = 'onfocusout')
              : Mk.test(i)
              ? (i = s)
              : n.indexOf('-') === -1 && Ek.test(i)
              ? (i = i.replace(jk, '-$&').toLowerCase())
              : a === null && (a = void 0)
            : (s = i = 'oninput'),
            s === 'oninput' && o[(i = s)] && (i = 'oninputCapture'),
            (o[i] = a)
        }
      }
      n == 'select' &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = Nn(r.children).forEach(function (l) {
          l.props.selected = o.value.indexOf(l.props.value) != -1
        })),
        n == 'select' &&
          o.defaultValue != null &&
          (o.value = Nn(r.children).forEach(function (l) {
            l.props.selected = o.multiple
              ? o.defaultValue.indexOf(l.props.value) != -1
              : o.defaultValue == l.props.value
          })),
        r.class && !r.className
          ? ((o.class = r.class), Object.defineProperty(o, 'className', Ok))
          : ((r.className && !r.class) || (r.class && r.className)) &&
            (o.class = o.className = r.className),
        (t.props = o)
    })(e),
    (e.$$typeof = W1),
    zg && zg(e)
}
var Ug = Oe.__r
Oe.__r = function (e) {
  Ug && Ug(e), (om = e.__c)
}
var Fg = Oe.diffed
Oe.diffed = function (e) {
  Fg && Fg(e)
  var t = e.props,
    r = e.__e
  r != null &&
    e.type === 'textarea' &&
    'value' in t &&
    t.value !== r.value &&
    (r.value = t.value == null ? '' : t.value),
    (om = null)
}
var V1 = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return om.__n[e.__c].props.value
        },
      },
    },
  },
  Dk = '17.0.2'
function Y1(e) {
  return qr.bind(null, e)
}
function fl(e) {
  return !!e && e.$$typeof === W1
}
function G1(e) {
  return fl(e) && e.type === Ir
}
function q1(e) {
  return fl(e) ? x1.apply(null, arguments) : e
}
function Z1(e) {
  return !!e.__k && (ma(null, e), !0)
}
function K1(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null
}
var X1 = function (e, t) {
    return e(t)
  },
  J1 = function (e, t) {
    return e(t)
  },
  ex = Ir
function im(e) {
  e()
}
function tx(e) {
  return e
}
function rx() {
  return [!1, im]
}
var nx = cl,
  ox = fl
function ix(e, t) {
  var r = t(),
    n = Dc({ h: { __: r, v: t } }),
    o = n[0].h,
    i = n[1]
  return (
    cl(
      function () {
        ;(o.__ = r), (o.v = t), Zf(o) && i({ h: o })
      },
      [e, r, t]
    ),
    rm(
      function () {
        return (
          Zf(o) && i({ h: o }),
          e(function () {
            Zf(o) && i({ h: o })
          })
        )
      },
      [e]
    ),
    r
  )
}
function Zf(e) {
  var t,
    r,
    n = e.v,
    o = e.__
  try {
    var i = n()
    return !(
      ((t = o) === (r = i) && (t !== 0 || 1 / t == 1 / r)) ||
      (t != t && r != r)
    )
  } catch {
    return !0
  }
}
var Pk = {
  useState: Dc,
  useId: O1,
  useReducer: tm,
  useEffect: rm,
  useLayoutEffect: cl,
  useInsertionEffect: nx,
  useTransition: rx,
  useDeferredValue: tx,
  useSyncExternalStore: ix,
  startTransition: im,
  useRef: I1,
  useImperativeHandle: T1,
  useMemo: Pc,
  useCallback: C1,
  useContext: N1,
  useDebugValue: A1,
  version: '17.0.2',
  Children: L1,
  render: H1,
  hydrate: Q1,
  unmountComponentAtNode: Z1,
  createPortal: B1,
  createElement: qr,
  createContext: em,
  createFactory: Y1,
  cloneElement: q1,
  createRef: Zh,
  Fragment: Ir,
  isValidElement: fl,
  isElement: ox,
  isFragment: G1,
  findDOMNode: K1,
  Component: Hr,
  PureComponent: ac,
  memo: k1,
  forwardRef: R1,
  flushSync: J1,
  unstable_batchedUpdates: X1,
  StrictMode: ex,
  Suspense: Ss,
  SuspenseList: Wi,
  lazy: $1,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: V1,
}
const kk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Children: L1,
        Component: Hr,
        Fragment: Ir,
        PureComponent: ac,
        StrictMode: ex,
        Suspense: Ss,
        SuspenseList: Wi,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: V1,
        cloneElement: q1,
        createContext: em,
        createElement: qr,
        createFactory: Y1,
        createPortal: B1,
        createRef: Zh,
        default: Pk,
        findDOMNode: K1,
        flushSync: J1,
        forwardRef: R1,
        hydrate: Q1,
        isElement: ox,
        isFragment: G1,
        isValidElement: fl,
        lazy: $1,
        memo: k1,
        render: H1,
        startTransition: im,
        unmountComponentAtNode: Z1,
        unstable_batchedUpdates: X1,
        useCallback: C1,
        useContext: N1,
        useDebugValue: A1,
        useDeferredValue: tx,
        useEffect: rm,
        useErrorBoundary: vk,
        useId: O1,
        useImperativeHandle: T1,
        useInsertionEffect: nx,
        useLayoutEffect: cl,
        useMemo: Pc,
        useReducer: tm,
        useRef: I1,
        useState: Dc,
        useSyncExternalStore: ix,
        useTransition: rx,
        version: Dk,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Rk = sc(kk)
;(function (e) {
  ;(function () {
    var t = {
        './node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
          function (i) {
            var a = []
            function s(p) {
              for (var h = -1, m = 0; m < a.length; m++)
                if (a[m].identifier === p) {
                  h = m
                  break
                }
              return h
            }
            function l(p, h) {
              for (var m = {}, v = [], w = 0; w < p.length; w++) {
                var S = p[w],
                  x = h.base ? S[0] + h.base : S[0],
                  y = m[x] || 0,
                  g = ''.concat(x, ' ').concat(y)
                m[x] = y + 1
                var b = s(g),
                  I = {
                    css: S[1],
                    media: S[2],
                    sourceMap: S[3],
                    supports: S[4],
                    layer: S[5],
                  }
                if (b !== -1) a[b].references++, a[b].updater(I)
                else {
                  var D = f(I, h)
                  ;(h.byIndex = w),
                    a.splice(w, 0, { identifier: g, updater: D, references: 1 })
                }
                v.push(g)
              }
              return v
            }
            function f(p, h) {
              var m = h.domAPI(h)
              m.update(p)
              var v = function (S) {
                if (S) {
                  if (
                    S.css === p.css &&
                    S.media === p.media &&
                    S.sourceMap === p.sourceMap &&
                    S.supports === p.supports &&
                    S.layer === p.layer
                  )
                    return
                  m.update((p = S))
                } else m.remove()
              }
              return v
            }
            i.exports = function (p, h) {
              ;(h = h || {}), (p = p || [])
              var m = l(p, h)
              return function (w) {
                w = w || []
                for (var S = 0; S < m.length; S++) {
                  var x = m[S],
                    y = s(x)
                  a[y].references--
                }
                for (var g = l(w, h), b = 0; b < m.length; b++) {
                  var I = m[b],
                    D = s(I)
                  a[D].references === 0 && (a[D].updater(), a.splice(D, 1))
                }
                m = g
              }
            }
          },
        './node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js':
          function (i) {
            function a(s) {
              if (!(typeof document > 'u')) {
                var l = document.createElement('style')
                return (
                  s.setAttributes(l, s.attributes), s.insert(l, s.options), l
                )
              }
            }
            i.exports = a
          },
        './node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
          function (i, a, s) {
            function l(f) {
              var p = s.nc
              p && f.setAttribute('nonce', p)
            }
            i.exports = l
          },
        './node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js':
          function (i) {
            function a(f, p, h) {
              var m = ''
              h.supports && (m += '@supports ('.concat(h.supports, ') {')),
                h.media && (m += '@media '.concat(h.media, ' {'))
              var v = typeof h.layer < 'u'
              v &&
                (m += '@layer'.concat(
                  h.layer.length > 0 ? ' '.concat(h.layer) : '',
                  ' {'
                )),
                (m += h.css),
                v && (m += '}'),
                h.media && (m += '}'),
                h.supports && (m += '}'),
                p.styleTagTransform(m, f, p.options)
            }
            function s(f) {
              if (f.parentNode === null) return !1
              f.parentNode.removeChild(f)
            }
            function l(f) {
              var p = f.insertStyleElement(f)
              return {
                update: function (m) {
                  a(p, f, m)
                },
                remove: function () {
                  s(p)
                },
              }
            }
            i.exports = l
          },
        './node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js':
          function (i) {
            function a(s, l) {
              if (l !== void 0)
                if (l.styleSheet) l.styleSheet.cssText = s
                else {
                  for (; l.firstChild; ) l.removeChild(l.firstChild)
                  l.appendChild(document.createTextNode(s))
                }
            }
            i.exports = a
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__body{overflow:hidden}.uploader--with-modal{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999}.uploader__modal{background:var(--shade-900);border-radius:.5em;z-index:100000;position:relative;overflow:auto;top:-5%;height:60%;width:75%;max-width:65.625em;max-height:41.25em}@media (max-height: 700px){.uploader__modal{top:-1%;height:80%}}@media (max-width: 750px), (max-height: 420px){.uploader__modal{top:0;height:100%;width:100%;max-width:none;max-height:none;border-radius:0}}.uploader__modal__close{position:absolute;right:0;top:0;z-index:2}.uploader__modal__close a{-webkit-transition:0.1s color linear;-o-transition:0.1s color linear;-moz-transition:0.1s color linear;transition:0.1s color linear;color:var(--shade-500);padding:1.125em 1.0625em .8125em .875em;display:inline-block}.uploader__backdrop{content:" ";background:rgba(0,0,0,0.5);position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999}.uploader__modal,.uploader__backdrop{opacity:0;-webkit-transition:0.15s opacity linear;-o-transition:0.15s opacity linear;-moz-transition:0.15s opacity linear;transition:0.15s opacity linear}.uploader__modal.show,.uploader__backdrop.show{opacity:1}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader{--btn-text-color: var(--shade-200);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-moz-box-sizing:border-box;box-sizing:border-box;color:var(--shade-100);font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:1;text-align:left;position:static}.uploader__root{position:absolute;left:0;right:0;top:0;bottom:0}.uploader a,.uploader p,.uploader button{font-size:inherit;margin:0}.uploader a{border-bottom:none;padding:0}.uploader svg{margin-bottom:0}.uploader__controls{text-align:center;padding:.9375em}.uploader__controls--space button:not(:last-child){margin-right:0.5em}.uploader a{color:var(--primary-color)}.uploader a,.uploader a:hover,.uploader a:active,.uploader a:focus{text-decoration:underline}.uploader a:hover:not(:disabled):not(.disabled){color:var(--primary-active-color)}.uploader .btn{-webkit-transition:0.1s border-color linear, 0.1s background-color linear;-o-transition:0.1s border-color linear, 0.1s background-color linear;-moz-transition:0.1s border-color linear, 0.1s background-color linear;transition:0.1s border-color linear, 0.1s background-color linear;display:inline-block;font-weight:400;color:var(--btn-text-color);text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:.0625em solid rgba(0,0,0,0);padding:0 1em;line-height:3;border-radius:0.3125em}.uploader .btn,.uploader .btn:hover,.uploader .btn:active,.uploader .btn:focus{text-decoration:none}.uploader .btn:not(:disabled):not(.disabled){cursor:pointer}.uploader .btn:hover:not(:disabled):not(.disabled){color:var(--shade-300)}.uploader .btn--primary{color:var(--shade-900);background-color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn--primary:hover:not(:disabled):not(.disabled){background-color:var(--primary-active-color);border-color:var(--primary-active-color);color:var(--shade-900)}.uploader .btn--primary-outline{color:var(--primary-color);border-color:var(--primary-color)}.uploader .btn.disabled{opacity:0.5;cursor:default}.uploader .btn--file{position:relative;overflow:hidden;margin-bottom:0}.uploader .btn--file__input{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.uploader .btn--upload{font-size:1.11em;padding:0.2em 1.6em;margin-bottom:1.5em}.uploader .text-secondary{color:var(--shade-400)}.uploader .vcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader .hcenter{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader .nudge-up-1{position:relative;top:-1px}.uploader .ml-0{margin-left:0}.uploader .ml-1{margin-left:.3125em}.uploader .ml-2{margin-left:.4375em}.uploader .ml-3{margin-left:.5em}.uploader .ml-4{margin-left:.625em}.uploader .mr-0{margin-right:0}.uploader .mr-1{margin-right:.3125em}.uploader .mr-2{margin-right:.4375em}.uploader .mr-3{margin-right:.5em}.uploader .mr-4{margin-right:.625em}.uploader .mb-0{margin-bottom:0}.uploader .mb-1{margin-bottom:.3125em}.uploader .mb-2{margin-bottom:.4375em}.uploader .mb-3{margin-bottom:.5em}.uploader .mb-4{margin-bottom:.625em}.uploader .mt-0{margin-top:0}.uploader .mt-1{margin-top:.3125em}.uploader .mt-2{margin-top:.4375em}.uploader .mt-3{margin-top:.5em}.uploader .mt-4{margin-top:.625em}.uploader .mt-5{margin-top:1.25em}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__image-cropper__overlay{position:absolute;background:rgba(255,255,255,0.5)}.uploader__image-cropper__clip{overflow:hidden}.uploader__image-cropper__clip img{max-width:unset}.uploader__image-cropper__clip:before{content:" ";display:block;background:rgba(255,255,255,0.15);position:absolute;left:-2px;right:-2px;top:-2px;bottom:-2px}.uploader__image-cropper__clip--circular,.uploader__image-cropper__clip--circular:before{border-radius:100%}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__image-editor{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__image-editor img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.uploader__image-editor__header{padding:0.825em 0.8em 0.75em 0.8em}.uploader__image-editor__header--empty-non-modal{min-height:.9375em}.uploader__image-editor__image{width:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}.uploader__image-editor__image-padding{position:absolute;top:0;bottom:0;left:.9375em;right:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.uploader__image-editor__image-inner{max-width:100%;max-height:100%}.uploader__modal .uploader__image-editor__header{padding-top:0;padding-bottom:1.3em;margin-top:-1em}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.spinner{display:block !important;border:0.275em solid var(--shade-700);border-right-color:transparent;border-radius:50%;-webkit-animation:spinner 0.75s linear infinite;-moz-animation:spinner 0.75s linear infinite;animation:spinner 0.75s linear infinite}.spinner__container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__resizable-square{position:absolute;cursor:move}.uploader__resizable-square__nw,.uploader__resizable-square__ne,.uploader__resizable-square__sw,.uploader__resizable-square__se{width:1em;height:1em;opacity:0.75;background-color:var(--shade-900);border:.0625em solid var(--primary-color);border-radius:100%;position:absolute;display:block !important}.uploader__resizable-square__nw{top:-.5em;left:-.5em;cursor:nw-resize}.uploader__resizable-square__ne{top:-.5em;right:-.5em;cursor:ne-resize}.uploader__resizable-square__sw{bottom:-.5em;left:-.5em;cursor:sw-resize}.uploader__resizable-square__se{bottom:-.5em;right:-.5em;cursor:se-resize}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.progress-icon{display:block}.progress-icon__container{display:inline-block;position:relative}.progress-icon__circle{-webkit-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-o-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-moz-transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;transition:.35s stroke-dashoffset cubic-bezier(0.33, 1, 0.68, 1),.6s stroke-width cubic-bezier(0.22, 1, 0.36, 1),.6s r cubic-bezier(0.22, 1, 0.36, 1),.3s opacity linear;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-ms-transform:rotate(-90deg);-o-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;-o-transform-origin:50% 50%;transform-origin:50% 50%;stroke:var(--primary-color)}.progress-icon__circle__bg{-webkit-transition:.3s opacity linear;-o-transition:.3s opacity linear;-moz-transition:.3s opacity linear;transition:.3s opacity linear;fill:var(--shade-700)}.progress-icon__circle--error{stroke:var(--error-color)}.progress-icon__thumbnail{-webkit-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-o-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-moz-transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;transition:.2s transform cubic-bezier(0.22, 1, 0.36, 1),.05s opacity linear;-webkit-transition-delay:.3s;-moz-transition-delay:.3s;-o-transition-delay:.3s;transition-delay:.3s;background-repeat:no-repeat;background-position:center center;background-size:contain;opacity:1;position:absolute;left:0;right:0;top:0;bottom:0;-webkit-transform:scale(1, 1);-moz-transform:scale(1, 1);-ms-transform:scale(1, 1);-o-transform:scale(1, 1);transform:scale(1, 1)}.progress-icon__thumbnail--hidden{opacity:0;-webkit-transform:scale(0.1, 0.1);-moz-transform:scale(0.1, 0.1);-ms-transform:scale(0.1, 0.1);-o-transform:scale(0.1, 0.1);transform:scale(0.1, 0.1)}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.breakpoint-md .uploader__submitted-file{max-width:100%;width:100%}.breakpoint-lg .uploader__submitted-file{max-width:50%;width:50%}.breakpoint-xl .uploader__submitted-file{max-width:33.333333%;width:33.333333%}.breakpoint-xl .uploader__submitted-file--loners{max-width:46%;width:46%}.uploader__submitted-file{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:.3125em 0}.uploader__submitted-file__container{margin:0 .3125em;background:var(--shade-800);border-radius:.4375em}.uploader__submitted-file__inner{padding:1.3125em 1.4375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.uploader__submitted-file__text{margin-left:.4375em;margin-right:.5em;overflow:hidden;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.uploader__submitted-file__action{min-width:4.625em;text-align:right;display:inline-block}.uploader__submitted-file__action--performed{color:var(--shade-300)}.uploader__submitted-file__message{font-size:0.75em;margin-top:0.2em;display:block;line-height:1.1em}.uploader__submitted-file__name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;height:1.1em}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__main-screen{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;height:100%;width:100%}.uploader__main-screen__file-list{margin:auto 0;overflow-y:auto;width:100%}.uploader__main-screen__file-list__inner{padding:.9375em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploader__main-screen__info{color:var(--btn-text-color);text-align:center;padding:1.15em 0}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss':
          function (i, a, s) {
            var l = s('./node_modules/css-loader/dist/runtime/api.js'),
              f = s.n(l),
              p = f()(function (h) {
                return h[1]
              })
            p.push([
              i.id,
              `.uploader__widget-base{border-radius:.3125em;position:absolute;top:.9375em;left:.9375em;right:.9375em;bottom:.9375em;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.uploader__widget-base__modal-bg{color:var(--shade-600);position:absolute;z-index:1}.uploader__widget-base__modal-bg--dragging{color:var(--primary-color)}.uploader__widget-base__modal-bg--dragging *{pointer-events:none}.uploader__widget-base__children{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:2;position:absolute;bottom:0;top:0;left:0;right:0}.uploader__widget-base__children--is-modal{top:2.5em}.uploader__widget-base--draggable{border:.125em dashed var(--shade-600)}.uploader__widget-base--dragging{border-color:var(--primary-color)}.uploader__widget-base--dragging *{pointer-events:none}
`,
              '',
            ]),
              (a.default = p)
          },
        './node_modules/css-loader/dist/runtime/api.js': function (i) {
          i.exports = function (a) {
            var s = []
            return (
              (s.toString = function () {
                return this.map(function (f) {
                  var p = a(f)
                  return f[2] ? '@media '.concat(f[2], ' {').concat(p, '}') : p
                }).join('')
              }),
              (s.i = function (l, f, p) {
                typeof l == 'string' && (l = [[null, l, '']])
                var h = {}
                if (p)
                  for (var m = 0; m < this.length; m++) {
                    var v = this[m][0]
                    v != null && (h[v] = !0)
                  }
                for (var w = 0; w < l.length; w++) {
                  var S = [].concat(l[w])
                  ;(p && h[S[0]]) ||
                    (f &&
                      (S[2]
                        ? (S[2] = ''.concat(f, ' and ').concat(S[2]))
                        : (S[2] = f)),
                    s.push(S))
                }
              }),
              s
            )
          }
        },
      },
      r = {}
    function n(i) {
      if (r[i]) return r[i].exports
      var a = (r[i] = { id: i, exports: {} })
      return t[i](a, a.exports, n), a.exports
    }
    ;(function () {
      n.n = function (i) {
        var a =
          i && i.__esModule
            ? function () {
                return i.default
              }
            : function () {
                return i
              }
        return n.d(a, { a }), a
      }
    })(),
      (function () {
        n.d = function (i, a) {
          for (var s in a)
            n.o(a, s) &&
              !n.o(i, s) &&
              Object.defineProperty(i, s, { enumerable: !0, get: a[s] })
        }
      })(),
      (function () {
        n.o = function (i, a) {
          return Object.prototype.hasOwnProperty.call(i, a)
        }
      })(),
      (function () {
        n.r = function (i) {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(i, '__esModule', { value: !0 })
        }
      })()
    var o = {}
    ;(function () {
      n.r(o),
        n.d(o, {
          UploadWidgetResult: function () {
            return ml
          },
          Uploader: function () {
            return cE
          },
          UploaderLocaleEnUs: function () {
            return s
          },
        })
      var i = dk,
        a = mk,
        s = {
          'error!': 'Error!',
          done: 'Done',
          addAnotherFile: 'Add another file...',
          addAnotherImage: 'Add another image...',
          cancel: 'cancel',
          cancelInPreviewWindow: 'Cancel',
          'cancelled!': 'cancelled',
          continue: 'Continue',
          customValidationFailed: 'Failed to validate file.',
          crop: 'Crop',
          finish: 'Finished',
          finishIcon: !0,
          image: 'Image',
          maxFilesReached: 'Maximum number of files:',
          maxImagesReached: 'Maximum number of images:',
          maxSize: 'File size limit:',
          next: 'Next',
          of: 'of',
          orDragDropFile: '...or drag and drop a file.',
          orDragDropFiles: '...or drag and drop files.',
          orDragDropImage: '...or drag and drop an image.',
          orDragDropImages: '...or drag and drop images.',
          pleaseWait: 'Please wait...',
          'removed!': 'removed',
          remove: 'remove',
          skip: 'Skip',
          unsupportedFileType: 'File type not supported.',
          uploadFile: 'Upload a File',
          uploadFiles: 'Upload a File',
          uploadImage: 'Upload an Image',
          uploadImages: 'Upload an Image',
          processingFile: 'Processing file...',
        },
        l
      ;(function (u) {
        function d(c) {
          var _,
            j,
            O,
            L,
            U,
            H,
            J,
            ee,
            le,
            ye =
              (j =
                (_ = c == null ? void 0 : c.images) === null || _ === void 0
                  ? void 0
                  : _.cropShape) !== null && j !== void 0
                ? j
                : 'rect',
            ue =
              (L =
                (O = c == null ? void 0 : c.images) === null || O === void 0
                  ? void 0
                  : O.crop) !== null && L !== void 0
                ? L
                : !0
          return {
            images: {
              crop: ue,
              cropFilePath:
                (H =
                  (U = c == null ? void 0 : c.images) === null || U === void 0
                    ? void 0
                    : U.cropFilePath) !== null && H !== void 0
                  ? H
                  : function (fe) {
                      return ''.concat(fe.filePath, '.crop')
                    },
              cropRatio:
                ye === 'circ'
                  ? 1
                  : (J = c == null ? void 0 : c.images) === null || J === void 0
                  ? void 0
                  : J.cropRatio,
              cropShape: ye,
              preview:
                (le =
                  (ee = c == null ? void 0 : c.images) === null || ee === void 0
                    ? void 0
                    : ee.preview) !== null && le !== void 0
                  ? le
                  : ue,
            },
          }
        }
        u.from = d
      })(l || (l = {}))
      function f(u, d) {
        return w(u) || v(u, d) || h(u, d) || p()
      }
      function p() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function h(u, d) {
        if (u) {
          if (typeof u == 'string') return m(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return m(u, d)
        }
      }
      function m(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function v(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function w(u) {
        if (Array.isArray(u)) return u
      }
      function S(u, d, c) {
        var _ = Math.max(u, d, c),
          j = _ - Math.min(u, d, c),
          O =
            j &&
            (_ === u
              ? (d - c) / j
              : _ === d
              ? 2 + (c - u) / j
              : 4 + (u - d) / j)
        return [60 * (O < 0 ? O + 6 : O), _ && j / _, _]
      }
      function x(u, d, c) {
        var _ = function (O) {
          var L =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : (O + u / 60) % 6
          return c - c * d * Math.max(Math.min(L, 4 - L, 1), 0)
        }
        return [_(5), _(3), _(1)]
      }
      function y(u) {
        var d = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
        u = u.replace(d, function (_, j, O, L) {
          return ''.concat(j).concat(j).concat(O).concat(O).concat(L).concat(L)
        })
        var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u)
        if (c === null) throw new Error('Invalid color code: '.concat(u))
        return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
      }
      function g(u, d) {
        var c = y(u),
          _ = f(c, 3),
          j = _[0],
          O = _[1],
          L = _[2],
          U = S(j, O, L),
          H = f(U, 3),
          J = H[0],
          ee = H[1],
          le = H[2],
          ye = function (Ie) {
            return Math.min(1, Math.max(0, Ie))
          },
          ue = x(J, ye(ee + d * -1), ye(le / 255 + d) * 255).map(Math.round),
          fe = f(ue, 3),
          Se = fe[0],
          _e = fe[1],
          ke = fe[2]
        return 'rgb('.concat(Se, ', ').concat(_e, ', ').concat(ke, ')')
      }
      var b
      ;(function (u) {
        function d(c) {
          var _,
            j,
            O,
            L,
            U,
            H,
            J,
            ee,
            le,
            ye,
            ue,
            fe,
            Se = '#377dff',
            _e = '#528fff',
            ke =
              (_ = c == null ? void 0 : c.primary) !== null && _ !== void 0
                ? _
                : Se,
            je
          try {
            je = g(ke, 0.1)
          } catch {
            console.error(
              "Invalid hex code '".concat(ke, "', using default colours.")
            ),
              (ke = Se),
              (je = _e)
          }
          return {
            primary: ke,
            active:
              (j = c == null ? void 0 : c.active) !== null && j !== void 0
                ? j
                : je,
            error:
              (O = c == null ? void 0 : c.error) !== null && O !== void 0
                ? O
                : '#d23f4d',
            shade100:
              (L = c == null ? void 0 : c.shade100) !== null && L !== void 0
                ? L
                : '#333',
            shade200:
              (U = c == null ? void 0 : c.shade200) !== null && U !== void 0
                ? U
                : '#7a7a7a',
            shade300:
              (H = c == null ? void 0 : c.shade300) !== null && H !== void 0
                ? H
                : '#999',
            shade400:
              (J = c == null ? void 0 : c.shade400) !== null && J !== void 0
                ? J
                : '#a5a6a8',
            shade500:
              (ee = c == null ? void 0 : c.shade500) !== null && ee !== void 0
                ? ee
                : '#d3d3d3',
            shade600:
              (le = c == null ? void 0 : c.shade600) !== null && le !== void 0
                ? le
                : '#dddddd',
            shade700:
              (ye = c == null ? void 0 : c.shade700) !== null && ye !== void 0
                ? ye
                : '#f0f0f0',
            shade800:
              (ue = c == null ? void 0 : c.shade800) !== null && ue !== void 0
                ? ue
                : '#f8f8f8',
            shade900:
              (fe = c == null ? void 0 : c.shade900) !== null && fe !== void 0
                ? fe
                : '#fff',
          }
        }
        u.from = d
      })(b || (b = {}))
      var I
      ;(function (u) {
        function d(c) {
          var _
          return {
            base:
              (_ = c == null ? void 0 : c.base) !== null && _ !== void 0
                ? _
                : 16,
          }
        }
        u.from = d
      })(I || (I = {}))
      var D
      ;(function (u) {
        function d(c) {
          var _
          return {
            base:
              (_ = c == null ? void 0 : c.base) !== null && _ !== void 0
                ? _
                : '-apple-system, blinkmacsystemfont, Segoe UI, helvetica, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
          }
        }
        u.from = d
      })(D || (D = {}))
      var E
      ;(function (u) {
        function d(c) {
          return {
            colors: b.from(c == null ? void 0 : c.colors),
            fontFamilies: D.from(c == null ? void 0 : c.fontFamilies),
            fontSizes: I.from(c == null ? void 0 : c.fontSizes),
          }
        }
        u.from = d
      })(E || (E = {}))
      function C(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function R(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      var W
      ;(function (u) {
        function d(c) {
          var _,
            j,
            O,
            L,
            U,
            H,
            J,
            ee,
            le = (_ = c.layout) !== null && _ !== void 0 ? _ : 'modal',
            ye =
              (j = c.multi) !== null && j !== void 0
                ? j
                : c.maxFileCount !== void 0 && c.maxFileCount > 1
          return {
            container: c.container,
            editor: l.from(c.editor),
            layout: le,
            locale: Object.assign(Object.assign({}, s), c.locale),
            maxFileCount: c.maxFileCount,
            maxFileSizeBytes: c.maxFileSizeBytes,
            metadata: c.metadata,
            mimeTypes:
              (O = c.mimeTypes) === null || O === void 0
                ? void 0
                : O.map(function (ue) {
                    return ue.trim().toLowerCase()
                  }),
            multi: ye,
            onInit:
              (L = c.onInit) !== null && L !== void 0 ? L : function () {},
            onUpdate:
              (U = c.onUpdate) !== null && U !== void 0 ? U : function () {},
            onPreUpload: R(function (ue) {
              var fe = c.onValidate,
                Se = c.onPreUpload
              return C(
                fe === void 0 ? {} : fe(ue),
                function (_e) {
                  var ke = Object.assign(
                    {},
                    fe === void 0 ? _e : { errorMessage: _e }
                  )
                  return C(
                    Se === void 0 ? {} : Se(ue),
                    function (je) {
                      return Object.assign(ke, je)
                    },
                    Se === void 0
                  )
                },
                fe === void 0
              )
            }),
            path: c.path,
            showFinishButton:
              (H = c.showFinishButton) !== null && H !== void 0
                ? H
                : ye
                ? le === 'modal'
                : !1,
            showRemoveButton:
              (J = c.showRemoveButton) !== null && J !== void 0 ? J : !0,
            styles: E.from(c.styles),
            tags: (ee = c.tags) !== null && ee !== void 0 ? ee : [],
          }
        }
        u.from = d
      })(W || (W = {}))
      var F = yk,
        G
      ;(function (u) {
        function d(c) {
          return typeof c.uploadFile == 'function'
        }
        u.isUploadInstance = d
      })(G || (G = {}))
      var K = n(
          './node_modules/@upload-io/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        B = n.n(K),
        V = n(
          './node_modules/@upload-io/style-loader/dist/runtime/styleDomAPI.js'
        ),
        T = n.n(V),
        N = n(
          './node_modules/@upload-io/style-loader/dist/runtime/setAttributesWithoutAttributes.js'
        ),
        P = n.n(N),
        k = n(
          './node_modules/@upload-io/style-loader/dist/runtime/insertStyleElement.js'
        ),
        Y = n.n(k),
        X = n(
          './node_modules/@upload-io/style-loader/dist/runtime/styleTagTransform.js'
        ),
        oe = n.n(X),
        ce = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/UploadWidgetContainer.scss'
        ),
        De = {}
      ;(De.styleTagTransform = oe()),
        (De.setAttributes = P()),
        (De.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (De.domAPI = T()),
        (De.insertStyleElement = Y()),
        B()(ce.default, De),
        ce.default && ce.default.locals && ce.default.locals
      var Ne = ib,
        Le = n.n(Ne),
        Xe = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/widgetBase/WidgetBase.scss'
        ),
        _t = {}
      ;(_t.styleTagTransform = oe()),
        (_t.setAttributes = P()),
        (_t.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (_t.domAPI = T()),
        (_t.insertStyleElement = Y()),
        B()(Xe.default, _t),
        Xe.default && Xe.default.locals && Xe.default.locals
      var Jt = 600,
        Nr = 400,
        Kn = 50,
        Ze = function (d) {
          var c = d.className,
            _ = d.width,
            j = d.height,
            O = d.notchSize,
            L = Jt - _,
            U = Nr - j,
            H = Kn - O
          return (0, i.jsxs)(
            'svg',
            Object.assign(
              {
                width: _,
                height: j,
                className: c,
                xmlns: 'http://www.w3.org/2000/svg',
              },
              {
                children: [
                  (0, i.jsxs)('defs', {
                    children: [
                      (0, i.jsx)('path', {
                        d: 'M76 99h'
                          .concat(536 - (L - H), 'a7 7 0 0 1 7 7v')
                          .concat(36 - H, 'a7 7 0 0 0 7 7h')
                          .concat(36 - H, 'a7 7 0 0 1 7 7v')
                          .concat(
                            336 - (U - H),
                            'a7 7 0 0 1-7 7H76a7 7 0 0 1-7-7V106a7 7 0 0 1 7-7Z'
                          ),
                        id: 'rectWithNotch',
                      }),
                      (0, i.jsx)(
                        'mask',
                        Object.assign(
                          {
                            id: 'rectWithNotchMask',
                            maskContentUnits: 'userSpaceOnUse',
                            maskUnits: 'objectBoundingBox',
                            x: '0',
                            y: '0',
                            width: _,
                            height: j,
                            fill: '#fff',
                          },
                          {
                            children: (0, i.jsx)('use', {
                              xlinkHref: '#rectWithNotch',
                            }),
                          }
                        )
                      ),
                    ],
                  }),
                  (0, i.jsx)('use', {
                    mask: 'url(#rectWithNotchMask)',
                    xlinkHref: '#rectWithNotch',
                    transform: 'translate(-69 -99)',
                    stroke: 'currentColor',
                    strokeWidth: '4',
                    fill: 'none',
                    fillRule: 'evenodd',
                    strokeDasharray: '4',
                  }),
                ],
              }
            )
          )
        },
        Zr = function (d) {
          var c = d.closeButtonSize,
            _ = d.isDragging,
            j = d.dimensions
          return j === void 0
            ? (0, i.jsx)(i.Fragment, {})
            : (0, i.jsx)(Ze, {
                width: j.width,
                height: j.height,
                notchSize: c,
                className: Le()('uploader__widget-base__modal-bg', {
                  'uploader__widget-base__modal-bg--dragging': _,
                }),
              })
        },
        ie = Rk,
        Co = function (u, d) {
          var c = {}
          for (var _ in u)
            Object.prototype.hasOwnProperty.call(u, _) &&
              d.indexOf(_) < 0 &&
              (c[_] = u[_])
          if (u != null && typeof Object.getOwnPropertySymbols == 'function')
            for (
              var j = 0, _ = Object.getOwnPropertySymbols(u);
              j < _.length;
              j++
            )
              d.indexOf(_[j]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(u, _[j]) &&
                (c[_[j]] = u[_[j]])
          return c
        },
        Qe = function (d) {
          var c = d.children,
            _ = d.className,
            j = d.originalHeight,
            O = d.originalWidth,
            L = d.style,
            U = Co(d, [
              'children',
              'className',
              'originalHeight',
              'originalWidth',
              'style',
            ]),
            H = U == null ? void 0 : U.width,
            J = U == null ? void 0 : U.height
          return (0, i.jsx)(
            'svg',
            Object.assign(
              {
                viewBox: '0 0 '.concat(O, ' ').concat(j),
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                className: _,
                style: Object.assign(
                  Object.assign({}, L),
                  J !== void 0
                    ? {
                        height: ''.concat(J, 'px'),
                        width: ''.concat(J * (O / j), 'px'),
                      }
                    : H !== void 0
                    ? {
                        width: ''.concat(H, 'px'),
                        height: ''.concat(H * (j / O), 'px'),
                      }
                    : {}
                ),
              },
              { children: c }
            )
          )
        },
        pn = function (d) {
          var c = d.className,
            _ = d.width
          return (0, i.jsx)(
            Qe,
            Object.assign(
              {
                originalWidth: 27,
                originalHeight: 26,
                width: _ ?? 27,
                className: c,
              },
              {
                children: (0, i.jsxs)(
                  'g',
                  Object.assign(
                    {
                      transform: 'rotate(45 6.547 16.13)',
                      fill: 'currentColor',
                      fillRule: 'evenodd',
                    },
                    {
                      children: [
                        (0, i.jsx)('rect', {
                          x: '7.75',
                          width: '2.5',
                          height: '18',
                          rx: '1.25',
                        }),
                        (0, i.jsx)('rect', {
                          transform: 'rotate(90 9 9)',
                          x: '7.75',
                          width: '2.5',
                          height: '18',
                          rx: '1.25',
                        }),
                      ],
                    }
                  )
                ),
              }
            )
          )
        },
        ar = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/modal/Modal.scss'
        ),
        Ar = {}
      ;(Ar.styleTagTransform = oe()),
        (Ar.setAttributes = P()),
        (Ar.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (Ar.domAPI = T()),
        (Ar.insertStyleElement = Y()),
        B()(ar.default, Ar),
        ar.default && ar.default.locals && ar.default.locals
      function Kr(u, d) {
        return Vt(u) || Xr(u, d) || er(u, d) || wr()
      }
      function wr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function er(u, d) {
        if (u) {
          if (typeof u == 'string') return hn(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return hn(u, d)
        }
      }
      function hn(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Xr(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Vt(u) {
        if (Array.isArray(u)) return u
      }
      var sr = 250,
        mn = 27,
        Jr = 11,
        jt = function (d) {
          var c = d.children,
            _ = d.closeModal,
            j = (0, ie.useState)(!1),
            O = Kr(j, 2),
            L = O[0],
            U = O[1],
            H = (0, ie.useState)(!1),
            J = Kr(H, 2),
            ee = J[0],
            le = J[1],
            ye = (0, ie.useState)(!1),
            ue = Kr(ye, 2),
            fe = ue[0],
            Se = ue[1],
            _e = ee && !L,
            ke = function () {
              U(!0)
            }
          return (
            (0, ie.useEffect)(
              function () {
                ee || le(!0)
              },
              [ee]
            ),
            (0, ie.useEffect)(
              function () {
                if (L) {
                  var je = setTimeout(function () {
                    _()
                  }, sr)
                  return function () {
                    return clearTimeout(je)
                  }
                }
              },
              [L]
            ),
            (0, ie.useLayoutEffect)(function () {
              var je = document.documentElement.className,
                Ie = document.body.className
              return (
                (document.documentElement.className = ''.concat(
                  je,
                  ' uploader__html'
                )),
                (document.body.className = ''.concat(Ie, ' uploader__body')),
                function () {
                  ;(document.documentElement.className = je),
                    (document.body.className = Ie)
                }
              )
            }, []),
            (0, ie.useEffect)(
              function () {
                if (_e && !fe) {
                  var je = window.requestAnimationFrame(function () {
                    Se(!0)
                  })
                  return function () {
                    return window.cancelAnimationFrame(je)
                  }
                } else fe && Se(!1)
              },
              [_e]
            ),
            (0, i.jsxs)(i.Fragment, {
              children: [
                _e &&
                  (0, i.jsx)('div', {
                    className: Le()('uploader__backdrop', { show: fe }),
                    onMouseDown: ke,
                  }),
                _e &&
                  (0, i.jsxs)(
                    'div',
                    Object.assign(
                      { className: Le()('uploader__modal', { show: fe }) },
                      {
                        children: [
                          c,
                          (0, i.jsx)(
                            'div',
                            Object.assign(
                              { className: 'uploader__modal__close' },
                              {
                                children: (0, i.jsx)(
                                  'a',
                                  Object.assign(
                                    {
                                      href: '#close',
                                      onClick: function (Ie) {
                                        Ie.preventDefault(), ke()
                                      },
                                    },
                                    { children: (0, i.jsx)(pn, { width: mn }) }
                                  )
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
              ],
            })
          )
        }
      function Or(u) {
        return ne(u) || q(u) || Ae(u) || $()
      }
      function $() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function q(u) {
        if (
          (typeof Symbol < 'u' && u[Symbol.iterator] != null) ||
          u['@@iterator'] != null
        )
          return Array.from(u)
      }
      function ne(u) {
        if (Array.isArray(u)) return qe(u)
      }
      function ae(u, d) {
        return Nt(u) || ot(u, d) || Ae(u, d) || xe()
      }
      function xe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Ae(u, d) {
        if (u) {
          if (typeof u == 'string') return qe(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return qe(u, d)
        }
      }
      function qe(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function ot(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Nt(u) {
        if (Array.isArray(u)) return u
      }
      function kt() {
        var u = (0, ie.useState)(void 0),
          d = ae(u, 2),
          c = d[0],
          _ = d[1],
          j = (0, ie.useCallback)(function (O) {
            _(O ?? void 0)
          }, [])
        return [c, j]
      }
      function At(u, d) {
        var c = kt(),
          _ = ae(c, 2),
          j = _[0],
          O = _[1],
          L = vn(u, j, j, d)
        return [L, O]
      }
      function yn(u, d) {
        var c = kt(),
          _ = ae(c, 2),
          j = _[0],
          O = _[1],
          L = kt(),
          U = ae(L, 2),
          H = U[0],
          J = U[1],
          ee = vn(u, j, H, d)
        return [ee, O, J]
      }
      function vn(u, d, c, _) {
        var j = (0, ie.useState)(void 0),
          O = ae(j, 2),
          L = O[0],
          U = O[1]
        return (
          (0, ie.useLayoutEffect)(function () {
            var H = function () {
              u && U(z(d))
            }
            if (!(d === void 0 || c === void 0)) {
              var J = new ResizeObserver(H)
              return (
                J.observe(c),
                function () {
                  return J.disconnect()
                }
              )
            }
          }, [d, u].concat(Or(_))),
          L
        )
      }
      function z(u) {
        if (u !== void 0) {
          var d = u.getBoundingClientRect()
          return {
            width: d.width,
            height: d.height,
            x: u.offsetLeft,
            y: u.offsetTop,
          }
        }
      }
      function Q(u, d) {
        return Ee(u) || we(u, d) || se(u, d) || Z()
      }
      function Z() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function se(u, d) {
        if (u) {
          if (typeof u == 'string') return pe(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return pe(u, d)
        }
      }
      function pe(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function we(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Ee(u) {
        if (Array.isArray(u)) return u
      }
      var be = function (d) {
          var c = d.children,
            _ = d.htmlProps,
            j = d.isDraggable,
            O = d.isDragging,
            L = d.layout,
            U,
            H,
            J = At(!0, []),
            ee = Q(J, 2),
            le = ee[0],
            ye = ee[1],
            ue = [
              { width: 650, value: 'md' },
              { width: 930, value: 'lg' },
            ],
            fe = 'xl',
            Se =
              (H =
                le === void 0 ||
                (U = ue.find(function (_e) {
                  return le.width <= _e.width
                })) === null ||
                U === void 0
                  ? void 0
                  : U.value) !== null && H !== void 0
                ? H
                : fe
          return (0, i.jsxs)(
            'div',
            Object.assign(
              {
                ref: ye,
                className: Le()(
                  'uploader__widget-base',
                  'breakpoint-'.concat(Se),
                  {
                    'uploader__widget-base--draggable':
                      j === !0 && L !== 'modal',
                    'uploader__widget-base--dragging':
                      O === !0 && L !== 'modal',
                  }
                ),
              },
              _,
              {
                children: [
                  j === !0 &&
                    L === 'modal' &&
                    (0, i.jsx)(Zr, {
                      isDragging: O === !0,
                      dimensions: le,
                      closeButtonSize: mn + Jr,
                    }),
                  (0, i.jsx)(
                    'div',
                    Object.assign(
                      {
                        className: Le()('uploader__widget-base__children', {
                          'uploader__widget-base__children--is-modal':
                            L === 'modal',
                        }),
                      },
                      { children: c }
                    )
                  ),
                ],
              }
            )
          )
        },
        ve = function (d) {
          var c = d.className,
            _ = d.width
          return (0, i.jsx)(
            Qe,
            Object.assign(
              {
                originalWidth: 13,
                originalHeight: 10,
                width: _ ?? 13,
                className: c,
              },
              {
                children: (0, i.jsx)('path', {
                  d: 'M6.293.293a.999.999 0 0 0 0 1.414L8.586 4H1a1 1 0 0 0 0 2h7.586L6.293 8.293a.999.999 0 1 0 1.414 1.414L12.414 5 7.707.293a.999.999 0 0 0-1.414 0Z',
                  fill: 'currentColor',
                  fillRule: 'nonzero',
                }),
              }
            )
          )
        },
        Re = function (d) {
          var c = d.error,
            _ = d.layout,
            j,
            O = (
              (j = c.message) !== null && j !== void 0 ? j : 'unknown error'
            ).replace('[upload-js] ', ''),
            L = O.toLowerCase().includes('api key')
          return (0, i.jsxs)(
            be,
            Object.assign(
              { layout: _, multi: !1 },
              {
                children: [
                  (0, i.jsx)('h1', {
                    children: L ? 'Almost there...' : 'Oops!',
                  }),
                  (0, i.jsx)('p', { children: O }),
                  L
                    ? (0, i.jsxs)(
                        'div',
                        Object.assign(
                          { className: 'mt-5' },
                          {
                            children: [
                              (0, i.jsxs)(
                                'a',
                                Object.assign(
                                  {
                                    href: 'https://www.bytescale.com/get-started',
                                    className: 'btn btn--primary-outline',
                                  },
                                  {
                                    children: [
                                      'Get API Key ',
                                      (0, i.jsx)(ve, {
                                        width: 12,
                                        className: 'ml-2',
                                      }),
                                    ],
                                  }
                                )
                              ),
                              ' ',
                            ],
                          }
                        )
                      )
                    : (0, i.jsx)(i.Fragment, {}),
                ],
              }
            )
          )
        }
      function wt(u) {
        return u !== void 0
      }
      function Te(u) {
        throw new Error("Didn't expect to get here: ".concat(JSON.stringify(u)))
      }
      function Ve(u, d) {
        return No(u) || gn(u, d) || $t(u, d) || It()
      }
      function It() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function $t(u, d) {
        if (u) {
          if (typeof u == 'string') return pt(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return pt(u, d)
        }
      }
      function pt(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function gn(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function No(u) {
        if (Array.isArray(u)) return u
      }
      var Dr = function (d) {
          var c = d.className,
            _ = d.options,
            j = d.onUpload,
            O = d.text,
            L,
            U = (0, ie.useState)(Math.random()),
            H = Ve(U, 1),
            J = H[0],
            ee = (0, ie.useState)(
              'uploader__input-'.concat(Math.round(Math.random() * 1e6))
            ),
            le = Ve(ee, 1),
            ye = le[0]
          return (0, i.jsxs)(
            'label',
            Object.assign(
              { className: Le()('btn btn--file', c), htmlFor: ye },
              {
                children: [
                  O,
                  (0, i.jsx)(
                    'input',
                    Object.assign(
                      {
                        id: ye,
                        name: ye,
                        accept:
                          (L = _.mimeTypes) === null || L === void 0
                            ? void 0
                            : L.join(','),
                        type: 'file',
                        className: 'btn--file__input',
                      },
                      _.multi ? { multiple: !0 } : {},
                      {
                        onChange: function (fe) {
                          var Se,
                            _e,
                            ke = fe.target,
                            je = Array.from(
                              (_e =
                                (Se = ke.files) !== null && Se !== void 0
                                  ? Se
                                  : void 0) !== null && _e !== void 0
                                ? _e
                                : []
                            )
                          je.length > 0 && j(je)
                        },
                      }
                    ),
                    J
                  ),
                ],
              }
            )
          )
        },
        Pr = function (d) {
          var c = d.addFiles,
            _ = d.options,
            j = d.isImageUploader,
            O = _.multi,
            L = _.locale
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(Dr, {
                options: _,
                text: j
                  ? O
                    ? L.uploadImages
                    : L.uploadImage
                  : O
                  ? L.uploadFiles
                  : L.uploadFile,
                className: 'btn--primary btn--upload',
                onUpload: c,
              }),
              (0, i.jsx)(
                'p',
                Object.assign(
                  { className: 'text-secondary mb-0' },
                  {
                    children: j
                      ? O
                        ? L.orDragDropImages
                        : L.orDragDropImage
                      : O
                      ? L.orDragDropFiles
                      : L.orDragDropFile,
                  }
                )
              ),
            ],
          })
        },
        Yt = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/fileIcons/ProgressIcon.scss'
        ),
        kr = {}
      ;(kr.styleTagTransform = oe()),
        (kr.setAttributes = P()),
        (kr.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (kr.domAPI = T()),
        (kr.insertStyleElement = Y()),
        B()(Yt.default, kr),
        Yt.default && Yt.default.locals && Yt.default.locals
      function An(u, d) {
        return Ye(u) || ze(u, d) || lr(u, d) || Ao()
      }
      function Ao() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function lr(u, d) {
        if (u) {
          if (typeof u == 'string') return en(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return en(u, d)
        }
      }
      function en(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function ze(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Ye(u) {
        if (Array.isArray(u)) return u
      }
      var Je = 300,
        tn = 350,
        Ma = function (d) {
          var c = d.height,
            _ = d.progress,
            j = d.onCompleteImageSource,
            O = d.isError,
            L = (0, ie.useState)(_ === 1),
            U = An(L, 2),
            H = U[0],
            J = U[1],
            ee = c / 2,
            le = ee * 2,
            ye = le * 2,
            ue = ee * 2 * Math.PI,
            fe = ue - _ * ue,
            Se = ''.concat(ue, ' ').concat(ue)
          return (
            (0, ie.useEffect)(
              function () {
                if (_ === 1 && !H) {
                  var _e = setTimeout(function () {
                    J(!0)
                  }, tn - 50)
                  return function () {
                    return clearTimeout(_e)
                  }
                }
              },
              [_]
            ),
            (0, i.jsxs)(
              'span',
              Object.assign(
                { className: 'progress-icon__container' },
                {
                  children: [
                    (0, i.jsxs)(
                      'svg',
                      Object.assign(
                        { className: 'progress-icon', width: ye, height: ye },
                        {
                          children: [
                            (0, i.jsx)('circle', {
                              className: 'progress-icon__circle__bg',
                              strokeWidth: 0,
                              r: ye / 2,
                              cx: ye / 2,
                              cy: ye / 2,
                              style: { opacity: H ? 0 : 1 },
                            }),
                            (0, i.jsx)('circle', {
                              className: Le()('progress-icon__circle', {
                                'progress-icon__circle--error': O,
                              }),
                              strokeWidth: H ? 0 : le,
                              fill: 'transparent',
                              r: H ? 0 : ee,
                              cx: le,
                              cy: le,
                              style: {
                                strokeDasharray: Se,
                                strokeDashoffset: fe,
                                opacity: H ? 0 : 1,
                              },
                            }),
                          ],
                        }
                      )
                    ),
                    (0, i.jsx)('span', {
                      className: Le()('progress-icon__thumbnail', {
                        'progress-icon__thumbnail--hidden': !H,
                      }),
                      style: { backgroundImage: 'url('.concat(j, ')') },
                    }),
                  ],
                }
              )
            )
          )
        },
        Me =
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTAwIDBIMTVDNyAwIDAgNyAwIDE1djE5MGMwIDggNyAxNSAxNSAxNWgxMzBjOCAwIDE1LTcgMTUtMTVWNjBsLTM1LTI1LTI1LTM1eiIgc3R5bGU9ImZpbGw6IzQyODVmNCIvPjxwYXRoIGQ9Ik00MCAxNjBoODB2LTEwSDQwdjEwem0wIDIwaDYwdi0xMEg0MHYxMHptMC03MHYxMGg4MHYtMTBINDB6bTAgMzBoODB2LTEwSDQwdjEweiIgc3R5bGU9ImZpbGw6I2YxZjFmMSIvPjxwYXRoIGQ9Ik0xMDAgMHY0NWMwIDggNyAxNSAxNSAxNWg0NUwxMDAgMHoiIHN0eWxlPSJmaWxsOiNhMWMyZmEiLz48L3N2Zz4K',
        me =
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMjEwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjAgMjEwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNXoiIHN0eWxlPSJmaWxsOiM0M2EwNDciLz48cGF0aCBkPSJNMTYwIDUwaC01MFYwbDUwIDUweiIgc3R5bGU9ImZpbGw6I2M4ZTZjOSIvPjxwYXRoIGQ9Im0xMTAgNTAgNTAgNTBWNTBoLTUweiIgc3R5bGU9ImZpbGw6IzJlN2QzMiIvPjxwYXRoIGQ9Ik0xMTUgMTAwSDM1djcwaDkwdi03MGgtMTB6bS03MCAxMGgyMHYxMEg0NXYtMTB6bTAgMjBoMjB2MTBINDV2LTEwem0wIDIwaDIwdjEwSDQ1di0xMHptNzAgMTBINzV2LTEwaDQwdjEwem0wLTIwSDc1di0xMGg0MHYxMHptMC0yMEg3NXYtMTBoNDB2MTB6IiBzdHlsZT0iZmlsbDojZThmNWU5Ii8+PC9zdmc+Cg==',
        ge =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiNEMzUyMzAiLz48cGF0aCBmaWxsPSIjRkY4NDY0IiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiNCNDQyMjMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTIxLjY1OSA5NEgzOC4zMzNDMzMuNzM3IDk0IDMwIDk3LjcyMyAzMCAxMDIuM3Y0NS42NWMwIDQuNTc3IDMuNzM3IDguMyA4LjMzMyA4LjNINzUuODN2OC4zYzAgMS45NTktMS42MTMgMy45NjctNC40MjUgNS41MjQtMy4yNDIgMS43ODgtNy41OTEgMi43NzYtMTIuMjM3IDIuNzc2VjE3N2g0MS42NjR2LTQuMTVjLTQuNjYzIDAtOS4wMTItLjk4NC0xMi4yMzctMi43NzYtMi44MTItMS41NTctNC40MjUtMy41NjUtNC40MjUtNS41MjR2LTguM2gzNy40OTdjNC41OTYgMCA4LjMzMy0zLjcyMyA4LjMzMy04LjNWMTAyLjNjMC00LjU3Ny0zLjczNy04LjMtOC4zMzMtOC4zaC0uMDA4Wm0tMzYuNDggNzguODVINzQuODE3YzMuMjQxLTIuMTkxIDUuMTgzLTUuMDg0IDUuMTgzLTguMyAwIDMuMjE2IDEuOTQyIDYuMTA5IDUuMTgzIDguM2gtLjAwNFpNMzguMzMzIDEwMi4zaDgzLjMyNnYzNy4zNUgzOC4zMzNWMTAyLjNjLS4wMTMgMCAwIDAgMCAwWm0wIDQ1LjY1di00LjE1aDgzLjMyNnY0LjE1SDM4LjMzM1oiLz48cGF0aCBkPSJNNjcuOTg2IDEzNi43Yy4zMzYuMi43MTMuMyAxLjA4NS4zLjMxMSAwIC42MzQtLjA3Ni45MzMtLjIxMmwyNC44NTctMTJBMS45OTMgMS45OTMgMCAwIDAgOTYgMTIzYzAtLjc1Mi0uNDQtMS40NTItMS4xNC0xLjc4OGwtMjQuODU2LTEyYTIuMTQ1IDIuMTQ1IDAgMCAwLTIuMDIyLjA4OEExLjk5MyAxLjk5MyAwIDAgMCA2NyAxMTF2MjRjMCAuNjg4LjM3NyAxLjMzNi45ODIgMS43aC4wMDRabTMuMTYxLTIyLjQ2NEw4OS4yOTcgMTIzbC0xOC4xNSA4Ljc2NFYxMTQuMjM2WiIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=',
        Ue =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4NkFCRUIiLz48cGF0aCBmaWxsPSIjQzRENEYxIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3MThGQzMiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzkgOTEuNjkxaDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDEwMC44NmgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik00OC4xNjkgMTAwLjg2aDkuMTY5djE4LjMzOGgtOS4xNjl6TTM5IDczLjM1M2gxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA4Mi41MjJoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgNTUuMDE1aDE4LjMzOHY5LjE2OUgzOXpNNDguMTY5IDY0LjE4NGgxOC4zMzh2OS4xNjlINDguMTY5ek0zOSAzNi42NzZoMTguMzM4djkuMTY5SDM5ek00OC4xNjkgNDUuODQ2aDE4LjMzOHY5LjE2OUg0OC4xNjl6TTM5IDE4LjMzOGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSAyNy41MDdoMTguMzM4djkuMTY5SDQ4LjE2OXpNMzkgMGgxOC4zMzh2OS4xNjlIMzl6TTQ4LjE2OSA5LjE2OWgxOC4zMzh2OS4xNjlINDguMTY5eiIvPjxwYXRoIGQ9Ik01Mi43NTQgMTE3LjAzYzcuNTk2IDAgMTMuNzUzIDYuMTU3IDEzLjc1MyAxMy43NTN2MTMuNzU0YTkuMTcgOS4xNyAwIDAgMS05LjE2OSA5LjE2OUg0OC4xN2E5LjE3IDkuMTcgMCAwIDEtOS4xNjktOS4xN3YtMTMuNzUzYzAtNy41OTYgNi4xNTgtMTMuNzU0IDEzLjc1NC0xMy43NTRabTAgOS4xNjlhNC41ODUgNC41ODUgMCAwIDAtNC41ODUgNC41ODR2OS4xN2E0LjU4NSA0LjU4NSAwIDEgMCA5LjE3IDB2LTkuMTdhNC41ODUgNC41ODUgMCAwIDAtNC41ODUtNC41ODRaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==',
        Pe =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iIzQwNzREMSIvPjxwYXRoIGZpbGw9IiM4RkIwRUEiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iIzQwNjM5RSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48cGF0aCBkPSJNNjkuNjUxIDE2MC4wNjN2LTUuNDE3SDY0LjJjLTMuNDc0IDAtNS43NjYtLjUwMy02Ljg3NC0xLjUwOS0xLjEwOS0xLjAwNi0xLjY2My0yLjIxNy0xLjY2My0zLjYzNCAwLTEuMDUyLjIyOC0yLjY3NC42ODYtNC44NjlsLjg5MS00LjAxMWMuNDgtMi4xNDkuNzItMy44ODYuNzItNS4yMTIgMC0xLjUwOC0uMjU3LTIuODQ1LS43NzEtNC4wMTEtLjUxNS0xLjE2Ni0xLjI4LTIuMjk3LTIuMjk4LTMuMzk0LTEuMDE3LTEuMDk3LTIuNjExLTIuMjE3LTQuNzgyLTMuMzYgMi4xNzEtMS4xNDMgMy43NjUtMi4yNjkgNC43ODItMy4zNzcgMS4wMTgtMS4xMDkgMS43ODMtMi4yNCAyLjI5OC0zLjM5NS41MTQtMS4xNTQuNzcxLTIuNDg1Ljc3MS0zLjk5NCAwLTEuMzI2LS4yNC0zLjA3NC0uNzItNS4yNDZsLS44OTEtNC4wMTFjLS40NTgtMi4xNzItLjY4Ni0zLjc3Mi0uNjg2LTQuOCAwLTEuNDYzLjU2LTIuNjkyIDEuNjgtMy42ODYgMS4xMi0uOTk0IDMuNDA2LTEuNDkxIDYuODU3LTEuNDkxaDUuNDUxVjg5LjE2aC01LjUyYy02LjQyMiAwLTEwLjU2IDEuMDQtMTIuNDExIDMuMTItMS44NTEgMi4wOC0yLjc3NyA0LjQxMS0yLjc3NyA2Ljk5NCAwIDEuMzcyLjE3MSAyLjg2OS41MTQgNC40OTJsLjY1MiAyLjgxMS41ODIgMy4wNTIuNDQ2IDEuODE3Yy4xNi44LjI0IDEuNjIzLjI0IDIuNDY4IDAgMi4yODYtLjc0MyA0LjE4OS0yLjIyOCA1LjcwOS0xLjQ4NiAxLjUyLTQuMDU4IDIuMjgtNy43MTUgMi4yOEgzOC4yOHY1LjQ1MWgzLjE1NGMzLjcwMyAwIDYuMjg2Ljc3MiA3Ljc0OSAyLjMxNSAxLjQ2MyAxLjU0MiAyLjE5NCAzLjQxMSAyLjE5NCA1LjYwNSAwIC44LS4wOCAxLjYzNS0uMjQgMi41MDNsLS40NDYgMS44ODYtLjU4MiAzLjA1MS0uNjUyIDIuODEyYy0uMzQzIDEuNi0uNTE0IDMuMDg1LS41MTQgNC40NTcgMCAyLjYwNi45MjYgNC45MzcgMi43NzcgNi45OTQgMS44NTEgMi4wNTcgNS45ODkgMy4wODYgMTIuNDExIDMuMDg2aDUuNTJabTI3LjI0NiAwYzYuNDIzIDAgMTAuNTY2LTEuMDIzIDEyLjQyOS0zLjA2OSAxLjg2My0yLjA0NSAyLjc5NC00LjM3MSAyLjc5NC02Ljk3NyAwLTEuMzcxLS4xODMtMi44NjgtLjU0OS00LjQ5MWwtLjY1MS0yLjgxMi0uNTgzLTMuMDUxLS40MTEtMS44ODZjLS4xODMtLjgtLjI3NS0xLjYtLjI3NS0yLjQgMC0yLjI4Ni43NDktNC4xOTQgMi4yNDYtNS43MjYgMS40OTctMS41MzEgNC4wNzQtMi4yOTcgNy43MzItMi4yOTdoMy4xMnYtNS40NTFoLTMuMTJjLTMuNzAzIDAtNi4yOTItLjc3Mi03Ljc2Ni0yLjMxNC0xLjQ3NC0xLjU0My0yLjIxMi0zLjQtMi4yMTItNS41NzIgMC0uODIzLjA5Mi0xLjY4LjI3NS0yLjU3MWwuNDExLTEuODE3LjU4My0zLjA1Mi42NTEtMi44MTFjLjM2Ni0xLjYuNTQ5LTMuMDk3LjU0OS00LjQ5MiAwLTIuNTgzLS45MzEtNC45MTQtMi43OTQtNi45OTRzLTYuMDA2LTMuMTItMTIuNDI5LTMuMTJoLTUuNTJ2NS40ODZoNS40NTJjMy40NzQgMCA1Ljc2NS40OTcgNi44NzQgMS40OTEgMS4xMDguOTk0IDEuNjYzIDIuMjEyIDEuNjYzIDMuNjUyIDAgMS4wNTEtLjIyOSAyLjY2Mi0uNjg2IDQuODM0bC0uODkxIDQuMDExYy0uNDM1IDIuMTcyLS42NTIgMy45Mi0uNjUyIDUuMjQ2IDAgMS41MDkuMjQ2IDIuODQuNzM3IDMuOTk0LjQ5MiAxLjE1NSAxLjI0NiAyLjI4NiAyLjI2MyAzLjM5NSAxLjAxNyAxLjEwOCAyLjYxMiAyLjIzNCA0Ljc4MyAzLjM3Ny0yLjE3MSAxLjE0My0zLjc2NiAyLjI2My00Ljc4MyAzLjM2LTEuMDE3IDEuMDk3LTEuNzcxIDIuMjI4LTIuMjYzIDMuMzk0LS40OTEgMS4xNjYtLjczNyAyLjUwMy0uNzM3IDQuMDExIDAgMS4zMjYuMjE3IDMuMDYzLjY1MiA1LjIxMmwuODkxIDQuMDExYy40NTcgMi4xOTUuNjg2IDMuODA2LjY4NiA0LjgzNSAwIDEuNDQtLjU1NSAyLjY2Mi0xLjY2MyAzLjY2OC0xLjEwOSAxLjAwNi0zLjQgMS41MDktNi44NzQgMS41MDloLTUuNDUydjUuNDE3aDUuNTJaIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPgo=',
        tt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM0ZDhhZmEiLz48cGF0aCBmaWxsPSIjOTViNmZmIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMzZTcxZTQiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTI3IDE3MUgzM3YtMTguODU3bDI3LjExOC0zMy4wNDkgMzkuNzExIDMzLjA0OUwxMjcgMTQwLjI4OXpNMTMxIDExMC41YzAgOC4wMDktNi40OTEgMTQuNS0xNC41IDE0LjVzLTE0LjUtNi40OTEtMTQuNS0xNC41UzEwOC40OTEgOTYgMTE2LjUgOTZzMTQuNSA2LjQ5MSAxNC41IDE0LjVaIi8+PC9nPjwvZz48L2c+PC9zdmc+Cg==',
        bt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiM4QzUwRTciLz48cGF0aCBmaWxsPSIjQjM4MEZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiM3QzNGRDgiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTEyNi45NTggMTA0SDMzLjA0MkEyLjA0MiAyLjA0MiAwIDAgMCAzMSAxMDYuMDMxdjYwLjkzOGMwIDEuMTE3LjkxOSAyLjAzMSAyLjA0MiAyLjAzMWg5My45MTZhMi4wNDIgMi4wNDIgMCAwIDAgMi4wNDItMi4wMzFWMTA2LjAzYTIuMDQyIDIuMDQyIDAgMCAwLTIuMDQyLTIuMDMxWm0tNzkuNjI1IDQuMDYzdjguMTI0aC04LjE2NnYtOC4xMjRoOC4xNjZabS04LjE2NiAzNi41NjJoOC4xNjZ2OC4xMjVoLTguMTY2di04LjEyNVptMC00LjA2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wLTEyLjE4N3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm0wIDM2LjU2M3YtOC4xMjVoOC4xNjZ2OC4xMjVoLTguMTY2Wm02NS4zMzMtNC4wNjNoLTQ5di00OC43NWg0OXY0OC43NVptMTYuMzMzLTguMTI1aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg4aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabTAtMTIuMTg3aC04LjE2NnYtOC4xMjVoOC4xNjZ2OC4xMjVabS04LjE2NiAzNi41NjN2LTguMTI1aDguMTY2djguMTI1aC04LjE2NlptOC4xNjYtNDguNzVoLTguMTY2di04LjEyNmg4LjE2NnY4LjEyNloiIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L2c+PC9zdmc+Cg==',
        st =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJhIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEuMDAwMDAwIDAgMCAwIDAgMS4wMDAwMDAgMCAwIDAgMCAxLjAwMDAwMCAwIDAgMCAxLjAwMDAwMCAwIi8+PC9maWx0ZXI+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTQ1IDIxMEgxNWMtOC4zIDAtMTUtNi43LTE1LTE1VjE1QzAgNi43IDYuNyAwIDE1IDBoOTVsNTAgNTB2MTQ1YzAgOC4zLTYuNyAxNS0xNSAxNVoiIGZpbGw9IiMwNzkxRkYiLz48cGF0aCBmaWxsPSIjQjNEREZGIiBkPSJNMTYwIDUwaC01MFYweiIvPjxwYXRoIGZpbGw9IiMwQTdDRDkiIGQ9Im0xMTAgNTAgNTAgNTBWNTB6Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0iTTg5LjQwNSA5NS4wMWM5LjQ4IDIuMDQ1IDE3LjI4MSA2LjkwNCAyMy40MDcgMTQuNTc4IDYuMTI1IDcuNjc0IDkuMTg4IDE2LjQ4IDkuMTg4IDI2LjQxNyAwIDkuOTM3LTMuMDYzIDE4Ljc0My05LjE4OCAyNi40MTYtNi4xMjYgNy42NzQtMTMuOTI4IDEyLjUzNC0yMy40MDcgMTQuNTc5di05LjY0OWM2Ljg1NC0yLjA0NSAxMi40MzEtNS45MTggMTYuNzM0LTExLjYxOCA0LjMwMi01LjcgNi40NTQtMTIuMjc4IDYuNDU0LTE5LjczM3MtMi4xNTItMTQuMDMzLTYuNDU0LTE5LjczM2MtNC4zMDMtNS43LTkuODgtOS41NzMtMTYuNzM0LTExLjYxOFY5NXYuMDFabTExLjU5MiA0MWMwIDguNzctMy44NjQgMTUuMDU1LTExLjU5MiAxOC44NTN2LTM3LjcxMmMzLjIwOCAxLjYwOSA1Ljk0MiA0LjI0IDguMjA0IDcuODk1IDIuMjYxIDMuNjU1IDMuMzkyIDcuMzA5IDMuMzkyIDEwLjk2M2gtLjAwNFpNMzggMTIxLjk3N2gxOC41OTFsMjMuNDA3LTIzLjQ2djc0Ljk3OWwtMjMuNDA3LTIzLjQ2SDM4di0yOC4wNjQuMDA1WiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4K',
        lt =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xNDUgMjEwSDE1Yy04LjMgMC0xNS02LjctMTUtMTVWMTVDMCA2LjcgNi43IDAgMTUgMGg5NWw1MCA1MHYxNDVjMCA4LjMtNi43IDE1LTE1IDE1WiIgZmlsbD0iI2M5ZGNmZCIvPjxwYXRoIGZpbGw9IiNFQ0YzRkYiIGQ9Ik0xNjAgNTBoLTUwVjB6Ii8+PHBhdGggZmlsbD0iI2JjZDRmZSIgZD0ibTExMCA1MCA1MCA1MFY1MHoiLz48L2c+PC9zdmc+Cg=='
      function ja(u, d) {
        var c,
          _ = u.toLowerCase().trim(),
          j = kc.find(function (O) {
            return (
              O.extensions.some(function (L) {
                return _.endsWith(L)
              }) ||
              O.mime.some(function (L) {
                return d.startsWith(L)
              })
            )
          })
        return (c = j == null ? void 0 : j.icon) !== null && c !== void 0
          ? c
          : lt
      }
      var kc = [
          {
            icon: Me,
            extensions: [
              '.docx',
              '.doc',
              '.txt',
              '.md',
              '.markdown',
              '.mkdown',
              '.mkdn',
              '.pdf',
            ],
            mime: [
              'application/x-abiword',
              'application/msword',
              'application/pdf',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ],
          },
          {
            icon: me,
            extensions: ['.xlsx', '.xls', '.csv', '.tsv', '.psv'],
            mime: [
              'application/ms-excel',
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            ],
          },
          {
            icon: ge,
            extensions: ['.pptx', '.ppt'],
            mime: [
              'application/vnd.apple.keynote',
              'application/ms-powerpoint',
              'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ],
          },
          {
            icon: Ue,
            extensions: ['.zip', '.tar', '.tar.gz', '.rar'],
            mime: [],
          },
          { icon: tt, extensions: [], mime: ['image/'] },
          { icon: bt, extensions: [], mime: ['video/'] },
          { icon: st, extensions: [], mime: ['audio/'] },
          {
            icon: Pe,
            extensions: [
              '.json',
              '.js',
              '.ts',
              '.htm',
              '.html',
              '.css',
              '.sass',
            ],
            mime: [],
          },
        ],
        _n = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/files/SubmittedFileComponent.scss'
        ),
        Xn = {}
      ;(Xn.styleTagTransform = oe()),
        (Xn.setAttributes = P()),
        (Xn.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (Xn.domAPI = T()),
        (Xn.insertStyleElement = Y()),
        B()(_n.default, Xn),
        _n.default && _n.default.locals && _n.default.locals
      var ur =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNkMjNmNGQiIGN4PSIxNSIgY3k9IjE1IiByPSIxNSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuNiA3LjYpIiBmaWxsPSIjRkZGIj48cmVjdCB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgNy40MjUgNy40MjUpIiB4PSI1LjkyNSIgeT0iLTEuNTc1IiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIgcng9IjEuNSIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDcuNDI1IDcuNDI1KSIgeD0iNS45MjUiIHk9Ii0xLjU3NSIgd2lkdGg9IjMiIGhlaWdodD0iMTgiIHJ4PSIxLjUiLz48L2c+PC9nPjwvc3ZnPgo=',
        cr = function (d) {
          var c = d.prefix,
            _ = d.suffix,
            j = d.text,
            O = d.url
          return (0, i.jsxs)(i.Fragment, {
            children: [
              c,
              ' ',
              (0, i.jsx)(
                'a',
                Object.assign(
                  { href: O, target: '_blank', rel: 'noopener' },
                  { children: j }
                )
              ),
              ' ',
              _,
            ],
          })
        }
      function Jn(u) {
        var d = /^(.*?)(https?:\/\/[^\s)]+)(.*?)$/.exec(u)
        if (d !== null) {
          var c = d[1],
            _ = d[2],
            j = d[3]
          return (0, i.jsx)(cr, { text: _, url: _, prefix: c, suffix: j })
        }
      }
      function dl(u) {
        var d = 'bytescale',
          c = u.toLowerCase().indexOf(d)
        if (c !== -1)
          return (0, i.jsx)(cr, {
            text: 'Bytescale',
            url: 'https://www.bytescale.com/pricing',
            prefix: u.substring(0, c),
            suffix: u.substring(c + d.length),
          })
      }
      var Rc = function (d) {
        var c = d.text,
          _,
          j
        return (j = (_ = Jn(c)) !== null && _ !== void 0 ? _ : dl(c)) !==
          null && j !== void 0
          ? j
          : (0, i.jsx)(i.Fragment, { children: c })
      }
      function am(u, d) {
        return Uc(u) || zc(u, d) || Ia(u, d) || Lc()
      }
      function Lc() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Ia(u, d) {
        if (u) {
          if (typeof u == 'string') return pl(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return pl(u, d)
        }
      }
      function pl(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function zc(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Uc(u) {
        if (Array.isArray(u)) return u
      }
      var sx = 1e3,
        lx = function (d) {
          var c = d.file,
            _ = d.fileCount,
            j = d.remove,
            O = d.locale,
            L = d.showRemoveButton,
            U,
            H,
            J = (0, ie.useState)(!1),
            ee = am(J, 2),
            le = ee[0],
            ye = ee[1],
            ue = function () {
              ye(!0)
            }
          ;(0, ie.useEffect)(
            function () {
              if (le) {
                var Ie = setTimeout(function () {
                  j()
                }, sx)
                return function () {
                  return clearTimeout(Ie)
                }
              }
            },
            [le]
          )
          var fe = 0.02,
            Se = lt,
            _e = 0,
            ke,
            je
          switch (c.type) {
            case 'preprocessing':
              ;(_e = 0), (ke = c.file.name), (je = O.processingFile)
              break
            case 'uploading':
              ;(_e = Math.min(c.progress, 1 - fe)), (ke = c.file.name)
              break
            case 'uploaded':
              ;(_e = 1),
                (Se = ja(c.uploadedFile.file.name, c.uploadedFile.mime)),
                (ke = c.uploadedFile.file.name)
              break
            case 'error':
              ;(_e = 1),
                (Se = ur),
                (je =
                  (H =
                    (U = c.error) === null || U === void 0
                      ? void 0
                      : U.message) !== null && H !== void 0
                    ? H
                    : 'Unexpected error occurred.'),
                (ke = c.file.name)
              break
            default:
              Te(c)
          }
          return (0, i.jsx)(
            'div',
            Object.assign(
              {
                className: Le()('uploader__submitted-file', {
                  'uploader__submitted-file--loners': _ <= 2,
                }),
              },
              {
                children: (0, i.jsx)(
                  'div',
                  Object.assign(
                    { className: 'uploader__submitted-file__container' },
                    {
                      children: (0, i.jsxs)(
                        'div',
                        Object.assign(
                          { className: 'uploader__submitted-file__inner' },
                          {
                            children: [
                              (0, i.jsx)(Ma, {
                                progress: Math.max(fe, _e),
                                onCompleteImageSource: Se,
                                height: 15,
                                isError: c.type === 'error',
                              }),
                              ' ',
                              (0, i.jsxs)(
                                'span',
                                Object.assign(
                                  {
                                    className: 'uploader__submitted-file__text',
                                  },
                                  {
                                    children: [
                                      (0, i.jsx)(
                                        'span',
                                        Object.assign(
                                          {
                                            className:
                                              'uploader__submitted-file__name',
                                            title: ke,
                                          },
                                          { children: ke }
                                        )
                                      ),
                                      je !== void 0 &&
                                        (0, i.jsx)(
                                          'span',
                                          Object.assign(
                                            {
                                              className:
                                                'uploader__submitted-file__message',
                                            },
                                            {
                                              children: (0, i.jsx)(Rc, {
                                                text: je,
                                              }),
                                            }
                                          )
                                        ),
                                    ],
                                  }
                                )
                              ),
                              le
                                ? (0, i.jsx)(
                                    'span',
                                    Object.assign(
                                      {
                                        className:
                                          'uploader__submitted-file__action uploader__submitted-file__action--performed',
                                      },
                                      {
                                        children:
                                          c.type === 'uploading'
                                            ? O['cancelled!']
                                            : O['removed!'],
                                      }
                                    )
                                  )
                                : (0, i.jsx)(i.Fragment, {
                                    children:
                                      (L || c.type === 'uploading') &&
                                      (0, i.jsx)(
                                        'a',
                                        Object.assign(
                                          {
                                            className:
                                              'uploader__submitted-file__action',
                                            href: '#remove',
                                            onClick: function (it) {
                                              it.preventDefault(), ue()
                                            },
                                          },
                                          {
                                            children:
                                              c.type === 'uploading'
                                                ? O.cancel
                                                : O.remove,
                                          }
                                        )
                                      ),
                                  }),
                            ],
                          }
                        )
                      ),
                    }
                  )
                ),
              }
            )
          )
        },
        hl = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/screens/UploaderMainScreen.scss'
        ),
        pi = {}
      ;(pi.styleTagTransform = oe()),
        (pi.setAttributes = P()),
        (pi.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (pi.domAPI = T()),
        (pi.insertStyleElement = Y()),
        B()(hl.default, pi),
        hl.default && hl.default.locals && hl.default.locals
      var ux = function (d) {
        var c = d.addFiles,
          _ = d.submittedFiles,
          j = d.uploadedFiles,
          O = d.options,
          L = d.remove,
          U = d.finalize,
          H = d.isImageUploader,
          J = _.every(function (ue) {
            return ue.type !== 'uploading'
          }),
          ee = J && j.length > 0,
          le = O.locale,
          ye = O.multi || O.showFinishButton
        return (0, i.jsxs)(
          'div',
          Object.assign(
            { className: 'uploader__main-screen' },
            {
              children: [
                (0, i.jsx)(
                  'div',
                  Object.assign(
                    { className: 'uploader__main-screen__file-list' },
                    {
                      children: (0, i.jsx)(
                        'div',
                        Object.assign(
                          {
                            className:
                              'uploader__main-screen__file-list__inner',
                          },
                          {
                            children: _.map(function (ue) {
                              return (0, i.jsx)(
                                lx,
                                {
                                  file: ue,
                                  fileCount: _.length,
                                  locale: le,
                                  remove: function () {
                                    return L(ue.fileIndex)
                                  },
                                  showRemoveButton: O.showRemoveButton,
                                },
                                ue.fileIndex
                              )
                            }),
                          }
                        )
                      ),
                    }
                  )
                ),
                ye &&
                  (0, i.jsxs)(
                    'div',
                    Object.assign(
                      { className: 'uploader__controls' },
                      {
                        children: [
                          O.multi &&
                            (O.maxFileCount === void 0 ||
                            _.length < O.maxFileCount
                              ? (0, i.jsx)(Dr, {
                                  options: O,
                                  text: H
                                    ? le.addAnotherImage
                                    : le.addAnotherFile,
                                  onUpload: c,
                                })
                              : (0, i.jsxs)(
                                  'div',
                                  Object.assign(
                                    {
                                      className: 'uploader__main-screen__info',
                                    },
                                    {
                                      children: [
                                        H
                                          ? le.maxImagesReached
                                          : le.maxFilesReached,
                                        ' ',
                                        O.maxFileCount,
                                      ],
                                    }
                                  )
                                )),
                          O.showFinishButton &&
                            (0, i.jsx)(
                              'a',
                              Object.assign(
                                {
                                  href: '#done',
                                  className: Le()('btn btn--primary', {
                                    disabled: !ee,
                                  }),
                                  onClick: function (fe) {
                                    fe.preventDefault(), ee && U()
                                  },
                                },
                                {
                                  children: J
                                    ? (0, i.jsxs)(
                                        'span',
                                        Object.assign(
                                          { className: 'vcenter hcenter' },
                                          {
                                            children: [
                                              le.finish,
                                              ' ',
                                              le.finishIcon &&
                                                (0, i.jsx)(ve, {
                                                  width: 12,
                                                  className: 'ml-2',
                                                }),
                                            ],
                                          }
                                        )
                                      )
                                    : le.pleaseWait,
                                }
                              )
                            ),
                        ],
                      }
                    )
                  ),
              ],
            }
          )
        )
      }
      function cx(u) {
        return u.type === 'uploaded'
      }
      function fx(u, d) {
        return mx(u) || hx(u, d) || px(u, d) || dx()
      }
      function dx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function px(u, d) {
        if (u) {
          if (typeof u == 'string') return sm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return sm(u, d)
        }
      }
      function sm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function hx(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function mx(u) {
        if (Array.isArray(u)) return u
      }
      function yx(u) {
        var d = (0, ie.useState)(!1),
          c = fx(d, 2),
          _ = c[0],
          j = c[1],
          O = function (ee) {
            ee.preventDefault(), ee.stopPropagation(), j(!0)
          },
          L = function (ee) {
            var le
            ee.preventDefault(),
              ee.stopPropagation(),
              !(
                ee.relatedTarget !== null &&
                ((le = ee == null ? void 0 : ee.currentTarget) === null ||
                le === void 0
                  ? void 0
                  : le.contains(ee.relatedTarget)) === !0
              ) && j(!1)
          },
          U = function (ee) {
            ee.preventDefault(),
              ee.stopPropagation(),
              ee.dataTransfer !== null && (ee.dataTransfer.dropEffect = 'copy')
          },
          H = function (ee) {
            if (
              (ee.preventDefault(),
              ee.stopPropagation(),
              j(!1),
              ee.dataTransfer !== null)
            ) {
              var le = Array.from(ee.dataTransfer.files)
              le.length > 0 && u(le)
            }
          }
        return {
          isDragging: _,
          onDrop: function (ee) {
            return H(ee)
          },
          onDragOver: function (ee) {
            return U(ee)
          },
          onDragEnter: function (ee) {
            return O(ee)
          },
          onDragLeave: function (ee) {
            return L(ee)
          },
        }
      }
      function vx(u) {
        var d =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
          c = u,
          _ = 1024,
          j = ' ',
          O = Math.pow(10, d),
          L = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          U = 0
        if (Math.abs(c) < _) return ''.concat(c).concat(j).concat(L[U])
        do (u /= _), (c /= _), ++U
        while (Math.round(Math.abs(c) * O) / O >= _ && U < L.length - 1)
        var H = u.toFixed(d)
        return H + j + L[U]
      }
      var ml
      ;(function (u) {
        function d(c, _, j) {
          var O,
            L = function () {
              return j === void 0
                ? c.url(_.filePath)
                : c.url(j.filePath, { transformation: 'image' })
            }
          return {
            editedFile: j,
            originalFile: _,
            fileUrl: L(),
            filePath:
              (O = j == null ? void 0 : j.filePath) !== null && O !== void 0
                ? O
                : _.filePath,
          }
        }
        u.from = d
      })(ml || (ml = {}))
      var yl
      ;(function (u) {
        function d(c) {
          return { width: c.width, height: c.height, left: c.x, top: c.y }
        }
        u.toCssProps = d
      })(yl || (yl = {}))
      var vl = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/shapes/ResizableSquare.scss'
        ),
        hi = {}
      ;(hi.styleTagTransform = oe()),
        (hi.setAttributes = P()),
        (hi.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (hi.domAPI = T()),
        (hi.insertStyleElement = Y()),
        B()(vl.default, hi),
        vl.default && vl.default.locals && vl.default.locals
      function mi(u, d) {
        return bx(u) || wx(u, d) || _x(u, d) || gx()
      }
      function gx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function _x(u, d) {
        if (u) {
          if (typeof u == 'string') return lm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return lm(u, d)
        }
      }
      function lm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function wx(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function bx(u) {
        if (Array.isArray(u)) return u
      }
      var um = function (d) {
        var c = d.boundary,
          _ = d.children,
          j = d.className,
          O = d.onMove,
          L = d.style,
          U = d.startingValue,
          H = d.geometryMutatorId,
          J = (0, ie.useState)(!1),
          ee = mi(J, 2),
          le = ee[0],
          ye = ee[1],
          ue = (0, ie.useState)(0),
          fe = mi(ue, 2),
          Se = fe[0],
          _e = fe[1],
          ke = (0, ie.useState)(0),
          je = mi(ke, 2),
          Ie = je[0],
          it = je[1],
          Rt = (0, ie.useState)(0),
          Rr = mi(Rt, 2),
          On = Rr[0],
          Dn = Rr[1],
          Ca = (0, ie.useState)(0),
          Oo = mi(Ca, 2),
          rn = Oo[0],
          _i = Oo[1],
          Na = (0, ie.useState)(U),
          xl = mi(Na, 2),
          Sl = xl[0],
          Aa = xl[1],
          wi = function (Ce, et, ft) {
            return Math.min(Math.max(ft, Ce), et)
          },
          El = function (Ce, et) {
            return wi(Ce * -1, Ce, et)
          },
          Oa = function (Ce) {
            _e(Ce.pageX), it(Ce.pageY)
          },
          Da = function (Ce) {
            return { x: Ce.pageX - Se + On, y: Ce.pageY - Ie + rn }
          },
          Yc = function (Ce) {
            Ce.stopPropagation(),
              Ce.target.setPointerCapture(Ce.pointerId),
              ye(!0),
              Oa(Ce),
              U.lastUpdatedBy !== H && (Dn(0), _i(0), Aa(U))
          },
          Ml = function (Ce) {
            ye(!1), Ce.target.releasePointerCapture(Ce.pointerId)
            var et = Da(Ce),
              ft = et.x,
              ht = et.y
            _i(El(c.height, ht)), Dn(El(c.width, ft))
          },
          jl = function (Ce) {
            if (le) {
              var et = Da(Ce),
                ft = et.x,
                ht = et.y
              O(ft, ht, Sl)
            }
          },
          Il = function (Ce) {
            Ce.preventDefault()
          }
        return (0, i.jsx)(
          'div',
          Object.assign(
            {
              className: j,
              style: L,
              onPointerDown: Yc,
              onPointerMove: jl,
              onPointerUp: Ml,
              onPointerCancel: Ml,
              onTouchStart: Il,
            },
            { children: _ }
          )
        )
      }
      function xx(u, d) {
        return jx(u) || Mx(u, d) || Ex(u, d) || Sx()
      }
      function Sx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Ex(u, d) {
        if (u) {
          if (typeof u == 'string') return cm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return cm(u, d)
        }
      }
      function cm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Mx(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function jx(u) {
        if (Array.isArray(u)) return u
      }
      var gl = function (d) {
          var c = d.boundary,
            _ = d.corner,
            j = d.geometry,
            O = d.setGeometry
          return (0, i.jsx)(um, {
            className: 'uploader__resizable-square__'.concat(_),
            boundary: c,
            geometryMutatorId: _,
            startingValue: j,
            onMove: function (U, H, J) {
              return O(_, {
                x: _ === 'nw' || _ === 'sw' ? J.x + U : J.x,
                y: _ === 'nw' || _ === 'ne' ? J.y + H : J.y,
                width: _ === 'nw' || _ === 'sw' ? J.width - U : J.width + U,
                height: _ === 'nw' || _ === 'ne' ? J.height - H : J.height + H,
              })
            },
          })
        },
        Ix = function (d) {
          var c = d.boundary,
            _ = d.ratio,
            j = d.onResized,
            O = d.children,
            L = 50,
            U = { width: c.width - L, height: c.height - L },
            H = function (Ie, it) {
              if (_ === void 0)
                return Object.assign(Object.assign({}, Ie), {
                  lastUpdatedBy: it,
                })
              var Rt = Math.min(Ie.height * _, Ie.width),
                Rr = Rt / _
              return {
                lastUpdatedBy: it,
                height: Rr,
                width: Rt,
                x:
                  it === 'ne' || it === 'se'
                    ? Ie.x
                    : it === 'center'
                    ? Ie.x + Ie.width / 2 - Rt / 2
                    : Ie.x + (Ie.width - Rt),
                y:
                  it === 'sw' || it === 'se'
                    ? Ie.y
                    : it === 'center'
                    ? Ie.y + Ie.height / 2 - Rr / 2
                    : Ie.y + (Ie.height - Rr),
              }
            },
            J = function (Ie) {
              var it = Math.min(c.width - L, Math.max(0, Ie.x)),
                Rt = Math.min(c.height - L, Math.max(0, Ie.y)),
                Rr = Math.min(0, Ie.x),
                On = Math.min(0, Ie.y)
              return {
                x: it,
                y: Rt,
                width: Math.max(L, Math.min(Ie.width + Rr, c.width - it)),
                height: Math.max(L, Math.min(Ie.height + On, c.height - Rt)),
              }
            },
            ee = function (Ie, it) {
              return H(J(Ie), it)
            },
            le = function () {
              return ee(
                { x: 0, y: 0, width: c.width, height: c.height },
                'center'
              )
            },
            ye = (0, ie.useState)(le),
            ue = xx(ye, 2),
            fe = ue[0],
            Se = ue[1],
            _e = function (Ie, it) {
              return Se(ee(it, Ie))
            },
            ke = function () {
              var Ie =
                fe.x === 0 &&
                fe.y === 0 &&
                fe.width === c.width &&
                fe.height === c.height
              j(Ie ? void 0 : { geometry: fe, boundary: c })
            }
          return (
            (0, ie.useLayoutEffect)(ke, [fe]),
            (0, ie.useLayoutEffect)(
              function () {
                Se(le()), ke()
              },
              [c]
            ),
            (0, i.jsxs)(
              um,
              Object.assign(
                {
                  className: 'uploader__resizable-square',
                  boundary: U,
                  style: yl.toCssProps(fe),
                  geometryMutatorId: 'center',
                  startingValue: fe,
                  onMove: function (Ie, it, Rt) {
                    return _e('center', {
                      x: Rt.x + Ie,
                      y: Rt.y + it,
                      width: Rt.width,
                      height: Rt.height,
                    })
                  },
                },
                {
                  children: [
                    O,
                    (0, i.jsx)(gl, {
                      corner: 'nw',
                      setGeometry: _e,
                      geometry: fe,
                      boundary: U,
                    }),
                    (0, i.jsx)(gl, {
                      corner: 'ne',
                      setGeometry: _e,
                      geometry: fe,
                      boundary: U,
                    }),
                    (0, i.jsx)(gl, {
                      corner: 'se',
                      setGeometry: _e,
                      geometry: fe,
                      boundary: U,
                    }),
                    (0, i.jsx)(gl, {
                      corner: 'sw',
                      setGeometry: _e,
                      geometry: fe,
                      boundary: U,
                    }),
                  ],
                }
              )
            )
          )
        },
        fm = function (d) {
          return d.mime.toLowerCase().startsWith('image/')
        },
        dm = function (d) {
          var c = d.mime.toLowerCase()
          return c.startsWith('application/pdf') || c.startsWith('video/')
        },
        Tx = ['image/jpeg', 'image/gif', 'image/png', 'image/webp']
      function pm(u) {
        if (Cx(u))
          return {
            url: URL.createObjectURL(u.file),
            external: !1,
            urlForDimensions: void 0,
          }
        var d = Nx(u),
          c = u.fileUrl.replace('/raw/', '/image/'),
          _ = 1e3
        return {
          url: ''
            .concat(c, '?f=webp&f2=jpg')
            .concat(d ? '&w='.concat(_, '&h=').concat(_, '&fit=max') : ''),
          external: !0,
          urlForDimensions: d ? ''.concat(c, '?f=jpg') : void 0,
        }
      }
      function Cx(u) {
        return Tx.includes(u.mime)
      }
      function Nx(u) {
        return dm(u) || u.mime === 'image/svg+xml'
      }
      var _l = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/Spinner.scss'
        ),
        yi = {}
      ;(yi.styleTagTransform = oe()),
        (yi.setAttributes = P()),
        (yi.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (yi.domAPI = T()),
        (yi.insertStyleElement = Y()),
        B()(_l.default, yi),
        _l.default && _l.default.locals && _l.default.locals
      function Ax(u, d) {
        return kx(u) || Px(u, d) || Dx(u, d) || Ox()
      }
      function Ox() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Dx(u, d) {
        if (u) {
          if (typeof u == 'string') return hm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return hm(u, d)
        }
      }
      function hm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Px(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function kx(u) {
        if (Array.isArray(u)) return u
      }
      var Rx = function () {
          var d,
            c,
            _ = At(!0, []),
            j = Ax(_, 2),
            O = j[0],
            L = j[1],
            U = 0.5,
            H = Math.min(
              (d = O == null ? void 0 : O.width) !== null && d !== void 0
                ? d
                : 0,
              (c = O == null ? void 0 : O.height) !== null && c !== void 0
                ? c
                : 0
            ),
            J = ''.concat(Math.round(H * U), 'px')
          return (0, i.jsx)(
            'div',
            Object.assign(
              { class: 'spinner__container', ref: L },
              {
                children: (0, i.jsx)('div', {
                  className: 'spinner',
                  style: { width: J, height: J },
                }),
              }
            )
          )
        },
        wl = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageEditorLayout.scss'
        ),
        vi = {}
      ;(vi.styleTagTransform = oe()),
        (vi.setAttributes = P()),
        (vi.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (vi.domAPI = T()),
        (vi.insertStyleElement = Y()),
        B()(wl.default, vi),
        wl.default && wl.default.locals && wl.default.locals
      function Ta(u, d) {
        return Fx(u) || Ux(u, d) || zx(u, d) || Lx()
      }
      function Lx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function zx(u, d) {
        if (u) {
          if (typeof u == 'string') return mm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return mm(u, d)
        }
      }
      function mm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Ux(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Fx(u) {
        if (Array.isArray(u)) return u
      }
      var ym = function (d) {
          var c = d.actions,
            _ = d.originalImage,
            j = d.header,
            O = d.image,
            L = d.modal,
            U = (0, ie.useState)(''),
            H = Ta(U, 2),
            J = H[0],
            ee = H[1],
            le = (0, ie.useState)(!1),
            ye = Ta(le, 2),
            ue = ye[0],
            fe = ye[1],
            Se = (0, ie.useState)(!1),
            _e = Ta(Se, 2),
            ke = _e[0],
            je = _e[1],
            Ie = (0, ie.useState)(
              'uploader__image-editor__image-'.concat(
                Math.round(Math.random() * 1e5)
              )
            ),
            it = Ta(Ie, 1),
            Rt = it[0],
            Rr = yn(ke, [J, ue]),
            On = Ta(Rr, 3),
            Dn = On[0],
            Ca = On[1],
            Oo = On[2]
          return (
            (0, ie.useLayoutEffect)(
              function () {
                var rn = pm(_),
                  _i = rn.url,
                  Na = rn.external
                ee(_i), fe(!Na), je(!1)
              },
              [_.fileUrl]
            ),
            (0, i.jsxs)(
              'div',
              Object.assign(
                { className: 'uploader__image-editor' },
                {
                  children: [
                    (0, i.jsx)(
                      'div',
                      Object.assign(
                        {
                          className: Le()({
                            'uploader__image-editor__header': j !== void 0,
                            'uploader__image-editor__header--empty-non-modal':
                              j === void 0 && !L,
                          }),
                        },
                        { children: j }
                      )
                    ),
                    (0, i.jsx)(
                      'div',
                      Object.assign(
                        { className: 'uploader__image-editor__image', ref: Oo },
                        {
                          children: (0, i.jsxs)(
                            'div',
                            Object.assign(
                              {
                                className:
                                  'uploader__image-editor__image-padding',
                              },
                              {
                                children: [
                                  !ue && (0, i.jsx)(Rx, {}),
                                  (0, i.jsx)('img', {
                                    id: Rt,
                                    src: J,
                                    onLoad: function () {
                                      fe(!0), je(!0)
                                    },
                                    className:
                                      'uploader__image-editor__image-inner',
                                    style: ue ? {} : { display: 'none' },
                                    ref: Ca,
                                    draggable: !1,
                                  }),
                                  Dn !== void 0 &&
                                    ue &&
                                    O !== void 0 &&
                                    O({ imgDimensions: Dn, imageUrl: J }),
                                ],
                              }
                            )
                          ),
                        }
                      )
                    ),
                    (0, i.jsx)(
                      'div',
                      Object.assign(
                        {
                          className:
                            'uploader__image-editor__actions uploader__controls uploader__controls--space',
                        },
                        { children: c }
                      )
                    ),
                  ],
                }
              )
            )
          )
        },
        vm = function (d) {
          var c = d.imageCount,
            _ = d.imageIndex,
            j = d.options,
            O = j.locale,
            L = j.multi ? { imageIndex: _, imageCount: c } : void 0
          return L === void 0 || L.imageCount === 1
            ? void 0
            : (0, i.jsxs)(
                'span',
                Object.assign(
                  { className: 'text-secondary' },
                  {
                    children: [
                      O.image,
                      ' ',
                      L.imageIndex + 1,
                      ' ',
                      O.of,
                      ' ',
                      L.imageCount,
                    ],
                  }
                )
              )
        }
      function $x(u, d) {
        return Qx(u) || Hx(u, d) || Wx(u, d) || Bx()
      }
      function Bx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Wx(u, d) {
        if (u) {
          if (typeof u == 'string') return gm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return gm(u, d)
        }
      }
      function gm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Hx(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Qx(u) {
        if (Array.isArray(u)) return u
      }
      var Vx = 1500
      function Yx() {
        var u = (0, ie.useState)(void 0),
          d = $x(u, 2),
          c = d[0],
          _ = d[1],
          j = c !== void 0
        return (
          (0, ie.useEffect)(
            function () {
              if (c !== void 0) {
                var O = setTimeout(function () {
                  _(void 0), c()
                }, Vx)
                return function () {
                  return clearTimeout(O)
                }
              }
              return function () {}
            },
            [j]
          ),
          [
            j,
            function (O) {
              return _(O ?? function () {})
            },
          ]
        )
      }
      function _m(u, d) {
        return Kx(u) || Zx(u, d) || qx(u, d) || Gx()
      }
      function Gx() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function qx(u, d) {
        if (u) {
          if (typeof u == 'string') return wm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return wm(u, d)
        }
      }
      function wm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Zx(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function Kx(u) {
        if (Array.isArray(u)) return u
      }
      var Xx = function (d) {
        var c = d.busyText,
          _ = d.idleText,
          j = d.locale,
          O = d.onSubmit,
          L = d.showIcon,
          U = (0, ie.useState)(!1),
          H = _m(U, 2),
          J = H[0],
          ee = H[1],
          le = Yx(),
          ye = _m(le, 2),
          ue = ye[0],
          fe = ye[1],
          Se = J || ue,
          _e = function (je) {
            je.preventDefault(),
              ee(!0),
              O().then(
                function () {},
                function (Ie) {
                  console.error(Ie), fe(), ee(!1)
                }
              )
          }
        return (0, i.jsxs)(
          'button',
          Object.assign(
            {
              disabled: Se,
              onClick: _e,
              className: Le()('btn btn--primary', { disabled: Se }),
            },
            {
              children: [
                J ? c : ue ? j['error!'] : _,
                ' ',
                L && (0, i.jsx)(ve, { width: 12, className: 'ml-2' }),
              ],
            }
          )
        )
      }
      function Jx(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      var bm = function (d) {
          var c = d.options,
            _ = d.onFinish,
            j = c.locale
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(
                'button',
                Object.assign(
                  {
                    onClick: function () {
                      _(!1).then(
                        function () {},
                        function (L) {
                          console.error('Unable to cancel upload.', L)
                        }
                      )
                    },
                    className: 'btn',
                  },
                  { children: j.cancelInPreviewWindow }
                )
              ),
              (0, i.jsx)(Xx, {
                onSubmit: Jx(function () {
                  return _(!0)
                }),
                locale: j,
                idleText: j.continue,
                busyText: j.pleaseWait,
                showIcon: !1,
              }),
            ],
          })
        },
        bl = n(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/widgets/uploader/components/editors/ImageCropper.scss'
        ),
        gi = {}
      ;(gi.styleTagTransform = oe()),
        (gi.setAttributes = P()),
        (gi.insert = function (d) {
          typeof document < 'u' && document.head.appendChild(d)
        }),
        (gi.domAPI = T()),
        (gi.insertStyleElement = Y()),
        B()(bl.default, gi),
        bl.default && bl.default.locals && bl.default.locals
      function xm(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function eS() {}
      function tS(u) {
        var d = u()
        if (d && d.then) return d.then(eS)
      }
      function rS(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      function nS(u, d) {
        return sS(u) || aS(u, d) || iS(u, d) || oS()
      }
      function oS() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function iS(u, d) {
        if (u) {
          if (typeof u == 'string') return Sm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Sm(u, d)
        }
      }
      function Sm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function aS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function sS(u) {
        if (Array.isArray(u)) return u
      }
      function lS(u, d, c, _) {
        var j = _.width / c.width
        return {
          inputPath: u,
          pipeline: {
            steps: [
              {
                geometry: {
                  offset: { x: Math.round(d.x * j), y: Math.round(d.y * j) },
                  size: {
                    width: Math.round(d.width * j),
                    height: Math.round(d.height * j),
                    type: 'widthxheight!',
                  },
                },
                type: 'crop',
              },
            ],
          },
        }
      }
      var uS = function (d) {
        var c = d.options,
          _ = d.originalImage,
          j = d.upload,
          O = d.onFinish,
          L = (0, ie.useState)(void 0),
          U = nS(L, 2),
          H = U[0],
          J = U[1],
          ee = rS(function (le) {
            var ye
            return tS(function () {
              if (!le || H === void 0) O(le, void 0)
              else
                return xm(
                  new Promise(function (ue) {
                    var fe,
                      Se = new Image(),
                      _e = pm(_)
                    ;(Se.onload = function () {
                      ue({ width: Se.naturalWidth, height: Se.naturalHeight })
                    }),
                      (Se.src =
                        (fe = _e.urlForDimensions) !== null && fe !== void 0
                          ? fe
                          : _e.url)
                  }),
                  function (ue) {
                    var fe = _.filePath.substring(
                        _.filePath.lastIndexOf('/') + 1
                      ),
                      Se = lS(fe, H.geometry, H.boundary, ue),
                      _e = new Blob([JSON.stringify(Se)], {
                        type: 'application/json',
                      })
                    return xm(
                      j.uploadFile(
                        {
                          name: ''.concat(
                            (ye = _.originalFileName) !== null && ye !== void 0
                              ? ye
                              : 'image',
                            '.crop'
                          ),
                          type: _e.type,
                          size: _e.size,
                          slice: function (je, Ie) {
                            return _e.slice(je, Ie)
                          },
                        },
                        { path: c.editor.images.cropFilePath(_) }
                      ),
                      function (ke) {
                        O(le, ke)
                      }
                    )
                  }
                )
            })
          })
        return (0, i.jsx)(ym, {
          modal: c.layout === 'modal',
          header: vm(d),
          actions: (0, i.jsx)(bm, { options: c, onFinish: ee }),
          image: function (ye) {
            var ue = ye.imgDimensions,
              fe = ye.imageUrl,
              Se,
              _e,
              ke,
              je
            return (0, i.jsx)(
              'div',
              Object.assign(
                {
                  className: 'uploader__image-cropper__overlay',
                  style: yl.toCssProps(ue),
                },
                {
                  children: (0, i.jsx)(
                    Ix,
                    Object.assign(
                      {
                        boundary: ue,
                        onResized: J,
                        ratio: c.editor.images.cropRatio,
                      },
                      {
                        children: (0, i.jsx)(
                          'div',
                          Object.assign(
                            {
                              className: Le()('uploader__image-cropper__clip', {
                                'uploader__image-cropper__clip--circular':
                                  c.editor.images.cropShape === 'circ',
                              }),
                              style: {
                                width:
                                  (Se =
                                    H == null ? void 0 : H.geometry.width) !==
                                    null && Se !== void 0
                                    ? Se
                                    : ue.width,
                                height:
                                  (_e =
                                    H == null ? void 0 : H.geometry.height) !==
                                    null && _e !== void 0
                                    ? _e
                                    : ue.height,
                              },
                            },
                            {
                              children: (0, i.jsx)('img', {
                                src: fe,
                                draggable: !1,
                                style: {
                                  width: ue.width,
                                  height: ue.height,
                                  transform: 'translateX('
                                    .concat(
                                      ((ke =
                                        H == null ? void 0 : H.geometry.x) !==
                                        null && ke !== void 0
                                        ? ke
                                        : 0) * -1,
                                      'px) translateY('
                                    )
                                    .concat(
                                      ((je =
                                        H == null ? void 0 : H.geometry.y) !==
                                        null && je !== void 0
                                        ? je
                                        : 0) * -1,
                                      'px)'
                                    ),
                                },
                              }),
                            }
                          )
                        ),
                      }
                    )
                  ),
                }
              )
            )
          },
          originalImage: _,
        })
      }
      function cS(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function fS(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      var dS = function (d) {
        var c = d.options,
          _ = d.originalImage,
          j = d.onFinish,
          O = fS(function (L) {
            return j(L), cS()
          })
        return (0, i.jsx)(ym, {
          modal: c.layout === 'modal',
          header: vm(d),
          actions: (0, i.jsx)(bm, { options: c, onFinish: O }),
          originalImage: _,
        })
      }
      function pS(u, d) {
        return u.editor.images.crop && fm(d)
      }
      var hS = function (d) {
        var c = d.imageCount,
          _ = d.imageIndex,
          j = d.originalImage,
          O = d.upload,
          L = d.onImageEdited,
          U = d.options
        return pS(U, j)
          ? (0, i.jsx)(uS, {
              imageCount: c,
              imageIndex: _,
              options: U,
              onFinish: L,
              upload: O,
              originalImage: j,
            })
          : (0, i.jsx)(dS, {
              imageCount: c,
              imageIndex: _,
              options: U,
              onFinish: function (J) {
                return L(J, void 0)
              },
              originalImage: j,
            })
      }
      function mS(u) {
        return gS(u) || vS(u) || Em(u) || yS()
      }
      function yS() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function vS(u) {
        if (
          (typeof Symbol < 'u' && u[Symbol.iterator] != null) ||
          u['@@iterator'] != null
        )
          return Array.from(u)
      }
      function gS(u) {
        if (Array.isArray(u)) return $c(u)
      }
      function Fc(u, d) {
        return bS(u) || wS(u, d) || Em(u, d) || _S()
      }
      function _S() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Em(u, d) {
        if (u) {
          if (typeof u == 'string') return $c(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return $c(u, d)
        }
      }
      function $c(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function wS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function bS(u) {
        if (Array.isArray(u)) return u
      }
      function xS(u) {
        var d = (0, ie.useState)(u[0]),
          c = Fc(d, 2),
          _ = c[0],
          j = c[1],
          O = (0, ie.useState)(0),
          L = Fc(O, 2),
          U = L[0],
          H = L[1],
          J = (0, ie.useState)(u.length),
          ee = Fc(J, 2),
          le = ee[0],
          ye = ee[1],
          ue = u.map(function (Se) {
            return Se.uploadedFile.filePath
          }),
          fe = _.uploadedFile.filePath
        return (
          (0, ie.useLayoutEffect)(function () {
            var Se = !ue.includes(fe)
            Se &&
              (j(u[0]),
              H(function (_e) {
                return _e + 1
              })),
              ye(U + u.length)
          }, [U, fe].concat(mS(ue))),
          { currentFile: fe, imageCount: le, imageIndex: U, currentImage: _ }
        )
      }
      var SS = function (d) {
        var c = d.images,
          _ = d.onImageEdited,
          j = d.upload,
          O = d.options,
          L = xS(c),
          U = L.currentFile,
          H = L.imageCount,
          J = L.imageIndex,
          ee = L.currentImage
        return (0, i.jsx)(
          hS,
          {
            options: O,
            imageCount: H,
            imageIndex: J,
            originalImage: ee.uploadedFile,
            onImageEdited: function (ye, ue) {
              return _(ye, ue, ee.fileIndex)
            },
            upload: j,
          },
          U
        )
      }
      function Mm(u, d) {
        return IS(u) || jS(u, d) || MS(u, d) || ES()
      }
      function ES() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function MS(u, d) {
        if (u) {
          if (typeof u == 'string') return jm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return jm(u, d)
        }
      }
      function jm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function jS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function IS(u) {
        if (Array.isArray(u)) return u
      }
      function TS(u, d) {
        var c = (0, ie.useState)(!1),
          _ = Mm(c, 2),
          j = _[0],
          O = _[1],
          L = (0, ie.useState)(null),
          U = Mm(L, 2),
          H = U[0],
          J = U[1]
        return (
          (0, ie.useEffect)(
            function () {
              if (u.length > 0) {
                var ee = setTimeout(function () {
                  O(!0)
                }, d)
                return (
                  J(ee),
                  function () {
                    return clearTimeout(ee)
                  }
                )
              }
              j && O(!1), H !== null && (clearTimeout(H), J(null))
            },
            [u.length, j]
          ),
          j
        )
      }
      function Im(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function CS(u, d) {
        try {
          var c = u()
        } catch (_) {
          return d(_)
        }
        return c && c.then ? c.then(void 0, d) : c
      }
      function NS(u, d) {
        return u && u.then ? u.then(d) : d(u)
      }
      function AS(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      function Tm(u, d, c) {
        return (
          d in u
            ? Object.defineProperty(u, d, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (u[d] = c),
          u
        )
      }
      function Bc(u) {
        '@babel/helpers - typeof'
        return (
          (Bc =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (d) {
                  return typeof d
                }
              : function (d) {
                  return d &&
                    typeof Symbol == 'function' &&
                    d.constructor === Symbol &&
                    d !== Symbol.prototype
                    ? 'symbol'
                    : typeof d
                }),
          Bc(u)
        )
      }
      function OS(u) {
        return kS(u) || PS(u) || Cm(u) || DS()
      }
      function DS() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function PS(u) {
        if (
          (typeof Symbol < 'u' && u[Symbol.iterator] != null) ||
          u['@@iterator'] != null
        )
          return Array.from(u)
      }
      function kS(u) {
        if (Array.isArray(u)) return Hc(u)
      }
      function Wc(u, d) {
        return zS(u) || LS(u, d) || Cm(u, d) || RS()
      }
      function RS() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function Cm(u, d) {
        if (u) {
          if (typeof u == 'string') return Hc(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Hc(u, d)
        }
      }
      function Hc(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function LS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function zS(u) {
        if (Array.isArray(u)) return u
      }
      var Nm = function (u, d) {
        var c = {}
        for (var _ in u)
          Object.prototype.hasOwnProperty.call(u, _) &&
            d.indexOf(_) < 0 &&
            (c[_] = u[_])
        if (u != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var j = 0, _ = Object.getOwnPropertySymbols(u);
            j < _.length;
            j++
          )
            d.indexOf(_[j]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(u, _[j]) &&
              (c[_[j]] = u[_[j]])
        return c
      }
      function US(u, d) {
        if (u === void 0 || u.length === 0) return !0
        var c = function (O) {
            return O.trim().toLowerCase()
          },
          _ = c(d)
        return u.some(function (j) {
          var O = c(j)
          return (
            O === _ ||
            (O.endsWith('*') && _.startsWith(O.substring(0, O.length - 1)))
          )
        })
      }
      var FS = function (d) {
          var c = d.resolve,
            _ = d.options,
            j = d.upload,
            O,
            L = (0, ie.useState)(0),
            U = Wc(L, 2),
            H = U[1],
            J = (0, ie.useState)(!0),
            ee = Wc(J, 2),
            le = ee[0],
            ye = ee[1],
            ue = (0, ie.useState)({}),
            fe = Wc(ue, 2),
            Se = fe[0],
            _e = fe[1],
            ke = Object.values(Se).filter(wt),
            je = ke.filter(cx),
            Ie = tn + (Je - 100),
            it = _.multi,
            Rt = _.tags,
            Rr = _.metadata,
            On = _.path,
            Dn = je.map(function (We) {
              return ml.from(j, We.uploadedFile, We.editedFile)
            }),
            Ca = _.editor.images.crop,
            Oo = _.editor.images.preview,
            rn = je.filter(function (We) {
              return (
                !We.isSubmitted &&
                (((Ca || Oo) && fm(We.uploadedFile)) ||
                  (Oo && dm(We.uploadedFile)))
              )
            }),
            _i = TS(rn, Ie),
            Na = function (Ce, et, ft) {
              Ce
                ? wi(ft, 'uploaded', function (ht) {
                    return Object.assign(Object.assign({}, ht), {
                      editedFile: et,
                      isSubmitted: !0,
                    })
                  })
                : Sl(ft)
            },
            xl = function () {
              c(Dn)
            }
          ;(0, ie.useLayoutEffect)(
            function () {
              if (!(rn.length > 0)) {
                if (le) {
                  ye(!1)
                  return
                }
                _.onUpdate(Dn)
                var We =
                  !it &&
                  je.length > 0 &&
                  !_.showFinishButton &&
                  _.layout === 'modal'
                if (We) {
                  var Ce = Dn.slice(0, 1),
                    et = function () {
                      return c(Ce)
                    },
                    ft = je[0].isSubmitted
                  if (ft) et()
                  else {
                    var ht = setTimeout(et, Ie)
                    return function () {
                      return clearTimeout(ht)
                    }
                  }
                }
              }
            },
            [rn.length].concat(
              OS(
                je.map(function (We) {
                  return We.uploadedFile.fileUrl
                })
              )
            )
          )
          var Sl = function (Ce) {
              _e(function (et) {
                var ft = et,
                  ht = Ce,
                  tr = ft[ht],
                  Pa = Nm(ft, [Bc(ht) === 'symbol' ? ht : ht + ''])
                return (
                  (tr == null ? void 0 : tr.type) === 'uploading' &&
                    tr.cancel(),
                  Pa
                )
              })
            },
            Aa = function (Ce, et) {
              _e(function (ft) {
                return Object.assign(Object.assign({}, ft), Tm({}, Ce, et))
              })
            },
            wi = function (Ce, et, ft) {
              _e(function (ht) {
                var tr = ht[Ce]
                return tr === void 0 || tr.type !== et
                  ? ht
                  : Object.assign(Object.assign({}, ht), Tm({}, Ce, ft(tr)))
              })
            },
            El = AS(function (We, Ce) {
              var et,
                ft,
                ht = function (Tl) {
                  throw (
                    (Aa(Ce, {
                      file: We,
                      fileIndex: Ce,
                      error: Tl,
                      type: 'error',
                    }),
                    Tl)
                  )
                },
                tr = _.maxFileSizeBytes,
                Pa = _.mimeTypes,
                Do = _.onPreUpload
              tr !== void 0 &&
                We.size > tr &&
                ht(new Error(''.concat(_.locale.maxSize, ' ').concat(vx(tr)))),
                US(Pa, We.type) || ht(new Error(_.locale.unsupportedFileType)),
                Aa(Ce, { file: We, fileIndex: Ce, type: 'preprocessing' })
              var br
              return NS(
                CS(
                  function () {
                    return Im(Do(We), function (Pn) {
                      br = (et = Pn) !== null && et !== void 0 ? et : void 0
                    })
                  },
                  function (Pn) {
                    ;(br = { errorMessage: _.locale.customValidationFailed }),
                      console.error(
                        '[uploader] onPreUpload function raised an error.',
                        Pn
                      )
                  }
                ),
                function () {
                  ;(br == null ? void 0 : br.errorMessage) !== void 0 &&
                    ht(new Error(br.errorMessage))
                  var Pn =
                    (ft = br == null ? void 0 : br.transformedFile) !== null &&
                    ft !== void 0
                      ? ft
                      : We
                  return Im(
                    j.uploadFile(Pn, {
                      path: On,
                      metadata: Rr,
                      tags: Rt,
                      onBegin: function (Cl) {
                        var Gc = Cl.cancel
                        return Aa(Ce, {
                          file: Pn,
                          fileIndex: Ce,
                          cancel: Gc,
                          progress: 0,
                          type: 'uploading',
                        })
                      },
                      onProgress: function (Cl) {
                        var Gc = Cl.bytesSent,
                          fE = Cl.bytesTotal
                        return wi(Ce, 'uploading', function (dE) {
                          return Object.assign(Object.assign({}, dE), {
                            progress: Gc / fE,
                          })
                        })
                      },
                    })
                  )
                }
              )
            }),
            Oa = function (Ce) {
              return H(function (et) {
                var ft = it ? _.maxFileCount : 1,
                  ht =
                    ft === void 0
                      ? Ce.length
                      : Math.min(Ce.length, ft - ke.length)
                return ht <= 0
                  ? et
                  : (Ce.slice(0, ht).forEach(function (tr, Pa) {
                      var Do = et + Pa
                      El(tr, Do).then(
                        function (br) {
                          wi(Do, 'uploading', function () {
                            return {
                              fileIndex: Do,
                              uploadedFile: br,
                              editedFile: void 0,
                              isSubmitted: !1,
                              type: 'uploaded',
                            }
                          })
                        },
                        function (br) {
                          wi(Do, 'uploading', function (Pn) {
                            return {
                              fileIndex: Do,
                              error: br,
                              file: Pn.file,
                              type: 'error',
                            }
                          })
                        }
                      )
                    }),
                    et + Ce.length)
              })
            },
            Da = yx(Oa),
            Yc = Da.isDragging,
            Ml = Nm(Da, ['isDragging']),
            jl = (O = _.mimeTypes) !== null && O !== void 0 ? O : [],
            Il =
              jl.length > 0 &&
              jl.every(function (We) {
                return We.trim().toLowerCase().startsWith('image/')
              })
          return (0, i.jsx)(
            be,
            Object.assign(
              {
                htmlProps: Ml,
                isDraggable: !0,
                isDragging: Yc,
                layout: _.layout,
                multi: _.multi,
              },
              {
                children:
                  ke.length === 0
                    ? (0, i.jsx)(Pr, {
                        options: _,
                        addFiles: Oa,
                        isImageUploader: Il,
                      })
                    : _i && rn.length > 0
                    ? (0, i.jsx)(SS, {
                        images: rn,
                        onImageEdited: Na,
                        upload: j,
                        options: _,
                      })
                    : (0, i.jsx)(ux, {
                        options: _,
                        addFiles: Oa,
                        submittedFiles: ke,
                        uploadedFiles: je,
                        remove: Sl,
                        finalize: xl,
                        isImageUploader: Il,
                      }),
              }
            )
          )
        },
        Am = function (d) {
          var c = d.upload,
            _ = d.resolve,
            j = d.reject,
            O = d.options
          return (0, i.jsx)(i.Fragment, {
            children:
              c.type === 'error'
                ? (0, i.jsx)(Re, { error: c.value, layout: O.layout })
                : (0, i.jsx)(FS, {
                    resolve: _,
                    reject: j,
                    options: O,
                    upload: c.value,
                  }),
          })
        }
      function $S(u, d) {
        return QS(u) || HS(u, d) || WS(u, d) || BS()
      }
      function BS() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function WS(u, d) {
        if (u) {
          if (typeof u == 'string') return Om(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Om(u, d)
        }
      }
      function Om(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function HS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function QS(u) {
        if (Array.isArray(u)) return u
      }
      var VS = function (d) {
        var c = d.widgetProps,
          _ = (0, ie.useState)(!0),
          j = $S(_, 2),
          O = j[0],
          L = j[1],
          U = function (ee) {
            c.resolve(ee), L(!1)
          },
          H = function (ee) {
            c.reject(ee), L(!1)
          }
        return O
          ? (0, i.jsx)(
              jt,
              Object.assign(
                {
                  closeModal: function () {
                    return U([])
                  },
                },
                {
                  children: (0, i.jsx)(
                    Am,
                    Object.assign({}, c, { resolve: U, reject: H })
                  ),
                }
              )
            )
          : (0, i.jsx)(i.Fragment, {})
      }
      function Dm(u, d) {
        return ZS(u) || qS(u, d) || GS(u, d) || YS()
      }
      function YS() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function GS(u, d) {
        if (u) {
          if (typeof u == 'string') return Pm(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Pm(u, d)
        }
      }
      function Pm(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function qS(u, d) {
        var c =
          u == null
            ? null
            : (typeof Symbol < 'u' && u[Symbol.iterator]) || u['@@iterator']
        if (c != null) {
          var _ = [],
            j = !0,
            O = !1,
            L,
            U
          try {
            for (
              c = c.call(u);
              !(j = (L = c.next()).done) &&
              (_.push(L.value), !(d && _.length === d));
              j = !0
            );
          } catch (H) {
            ;(O = !0), (U = H)
          } finally {
            try {
              !j && c.return != null && c.return()
            } finally {
              if (O) throw U
            }
          }
          return _
        }
      }
      function ZS(u) {
        if (Array.isArray(u)) return u
      }
      var KS = function (d) {
        var c = d.widgetProps,
          _ = (0, ie.useState)(0),
          j = Dm(_, 2),
          O = j[0],
          L = j[1],
          U = (0, ie.useState)(c.options),
          H = Dm(U, 2),
          J = H[0],
          ee = H[1],
          le = Object.assign(Object.assign({}, c), { options: J })
        return (
          (0, ie.useEffect)(function () {
            J.onInit({
              close: function () {
                c.resolve([])
              },
              reset: function () {
                L(function (ue) {
                  return ue + 1
                })
              },
              updateConfig: function (ue) {
                ee(W.from(ue))
              },
            })
          }, []),
          (0, i.jsx)(
            F.Fragment,
            {
              children: (0, i.jsx)(
                'div',
                Object.assign(
                  {
                    className: Le()('uploader', {
                      'uploader--with-modal': J.layout === 'modal',
                    }),
                    style: {
                      '--error-color': J.styles.colors.error,
                      '--primary-color': J.styles.colors.primary,
                      '--primary-active-color': J.styles.colors.active,
                      '--shade-100': J.styles.colors.shade100,
                      '--shade-200': J.styles.colors.shade200,
                      '--shade-300': J.styles.colors.shade300,
                      '--shade-400': J.styles.colors.shade400,
                      '--shade-500': J.styles.colors.shade500,
                      '--shade-600': J.styles.colors.shade600,
                      '--shade-700': J.styles.colors.shade700,
                      '--shade-800': J.styles.colors.shade800,
                      '--shade-900': J.styles.colors.shade900,
                      '--base-font-family': J.styles.fontFamilies.base,
                      '--base-font-size': ''.concat(
                        J.styles.fontSizes.base,
                        'px'
                      ),
                    },
                  },
                  {
                    children:
                      J.layout === 'modal'
                        ? (0, i.jsx)(VS, { widgetProps: le })
                        : (0, i.jsx)(Am, Object.assign({}, le)),
                  }
                )
              ),
            },
            O
          )
        )
      }
      function XS(u) {
        return rE(u) || tE(u) || eE(u) || JS()
      }
      function JS() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }
      function eE(u, d) {
        if (u) {
          if (typeof u == 'string') return Qc(u, d)
          var c = Object.prototype.toString.call(u).slice(8, -1)
          if (
            (c === 'Object' && u.constructor && (c = u.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(u)
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return Qc(u, d)
        }
      }
      function tE(u) {
        if (
          (typeof Symbol < 'u' && u[Symbol.iterator] != null) ||
          u['@@iterator'] != null
        )
          return Array.from(u)
      }
      function rE(u) {
        if (Array.isArray(u)) return Qc(u)
      }
      function Qc(u, d) {
        ;(d == null || d > u.length) && (d = u.length)
        for (var c = 0, _ = new Array(d); c < d; c++) _[c] = u[c]
        return _
      }
      function Vc(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function nE(u, d) {
        if (u) throw d
        return d
      }
      function oE(u, d) {
        try {
          var c = u()
        } catch (_) {
          return d(!0, _)
        }
        return c && c.then
          ? c.then(d.bind(null, !1), d.bind(null, !0))
          : d(!1, c)
      }
      function iE(u, d) {
        if (!(u instanceof d))
          throw new TypeError('Cannot call a class as a function')
      }
      function km(u, d) {
        for (var c = 0; c < d.length; c++) {
          var _ = d[c]
          ;(_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            'value' in _ && (_.writable = !0),
            Object.defineProperty(u, _.key, _)
        }
      }
      function aE(u, d, c) {
        return (
          d && km(u.prototype, d),
          c && km(u, c),
          Object.defineProperty(u, 'prototype', { writable: !1 }),
          u
        )
      }
      var sE = (function () {
        function u(d) {
          iE(this, u), (this.instance = d), (this.uploadCancellations = [])
        }
        return (
          aE(u, [
            {
              key: 'cancelAll',
              value: function () {
                this.uploadCancellations.forEach(function (c) {
                  return c()
                })
              },
            },
            {
              key: 'beginAuthSession',
              value: function (c, _) {
                try {
                  var j = this
                  return Vc(j.instance.beginAuthSession(c, _))
                } catch (O) {
                  return Promise.reject(O)
                }
              },
            },
            {
              key: 'endAuthSession',
              value: function () {
                try {
                  var c = this
                  return Vc(c.instance.endAuthSession())
                } catch (_) {
                  return Promise.reject(_)
                }
              },
            },
            {
              key: 'uploadFile',
              value: function (c, _) {
                try {
                  var j = this,
                    O
                  return oE(
                    function () {
                      return Vc(
                        j.instance.uploadFile(
                          c,
                          Object.assign(Object.assign({}, _), {
                            onBegin: function (U) {
                              ;(O = U.cancel),
                                (j.uploadCancellations = [].concat(
                                  XS(j.uploadCancellations),
                                  [O]
                                )),
                                (_ == null ? void 0 : _.onBegin) !== void 0 &&
                                  _.onBegin(U)
                            },
                          })
                        )
                      )
                    },
                    function (L, U) {
                      return (
                        (j.uploadCancellations = j.uploadCancellations.filter(
                          function (H) {
                            return H !== O
                          }
                        )),
                        nE(L, U)
                      )
                    }
                  )
                } catch (L) {
                  return Promise.reject(L)
                }
              },
            },
            {
              key: 'url',
              value: function (c, _) {
                return this.instance.url(c, _)
              },
            },
          ]),
          u
        )
      })()
      function lE(u, d, c) {
        return c
          ? d
            ? d(u)
            : u
          : ((!u || !u.then) && (u = Promise.resolve(u)), d ? u.then(d) : u)
      }
      function uE(u, d, c) {
        if (c) return d ? d(u()) : u()
        try {
          var _ = Promise.resolve(u())
          return d ? _.then(d) : _
        } catch (j) {
          return Promise.reject(j)
        }
      }
      function Rm(u) {
        return function () {
          for (var d = [], c = 0; c < arguments.length; c++) d[c] = arguments[c]
          try {
            return Promise.resolve(u.apply(this, d))
          } catch (_) {
            return Promise.reject(_)
          }
        }
      }
      function cE(u) {
        var d
        if (G.isUploadInstance(u)) d = { type: 'upload', value: u }
        else
          try {
            d = { type: 'upload', value: (0, a.Upload)(u) }
          } catch (O) {
            d = { type: 'error', value: O }
          }
        var c = Rm(function () {
            var O =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              L,
              U = W.from(O)
            return uE(_, function (H) {
              var J =
                  U.container !== void 0
                    ? typeof U.container == 'string'
                      ? (L = document.querySelector(U.container)) !== null &&
                        L !== void 0
                        ? L
                        : void 0
                      : U.container
                    : void 0,
                ee = document.createElement('div')
              ;(J ?? H).appendChild(ee), (ee.className = 'uploader__root')
              var le,
                ye = d
              return (
                d.type === 'upload' &&
                  ((le = new sE(d.value)),
                  (ye = { type: 'upload', value: le })),
                lE(
                  new Promise(function (ue, fe) {
                    var Se = { upload: ye, resolve: ue, reject: fe, options: U }
                    ;(0, F.render)((0, i.jsx)(KS, { widgetProps: Se }), ee)
                  }),
                  function (ue) {
                    return ee.remove(), le == null || le.cancelAll(), ue
                  }
                )
              )
            })
          }),
          _ = Rm(function () {
            return new Promise(function (O) {
              var L = function U() {
                var H,
                  J = (H = document.body) !== null && H !== void 0 ? H : void 0
                J !== void 0 && O(J), setTimeout(U, 100)
              }
              L()
            })
          }),
          j = d.type === 'upload' ? d.value : {}
        return Object.assign(Object.assign({}, j), { open: c })
      }
    })(),
      (e.exports = o)
  })()
})(p1)
var ax = p1.exports
ax.Uploader({ apiKey: 'free' })
function Lk() {
  const { data: e, isError: t, isLoading: r } = $b(['alerts'], hO)
  return (
    M.useEffect(() => () => {}, []),
    t
      ? A.jsxs('div', {
          children: [
            'There was an error loading any thoughts atm.',
            A.jsx('br', {}),
            'Please come back later',
            A.jsx('br', {}),
            'Cheers...',
          ],
        })
      : e === 'null' || r
      ? A.jsx('div', {
          className: 'loading',
          children: 'Loading a semi coherent thought...',
        })
      : !e || r
      ? A.jsx('div', { children: 'Loading a semi coherent thought...' })
      : A.jsx('div', {
          className: 'background',
          children: A.jsxs('section', {
            className: 'alert-list',
            children: [
              A.jsx('h2', { children: 'Semi coherent thought list:' }),
              A.jsx('br', {}),
              A.jsx(Mb, { variant: 'danger', children: `${[e]}` }),
              A.jsx('br', {}),
              A.jsx('h2', { children: 'Customize a semi coherent thought' }),
              A.jsx(ZP, {}),
            ],
          }),
        })
  )
}
function zk() {
  const { alertId: e } = kI(),
    t = $b(['alerts', e], () => mO(e))
  return t.isError
    ? A.jsx('div', {
        children:
          'There was an error loading any thoughts today try again tomorrow cheers',
      })
    : t.isLoading
    ? A.jsx('div', { children: 'STOP VISITING MY MUMS HOUSE WITHOUT ME' })
    : A.jsxs('section', {
        className: 'alert-details',
        children: [
          A.jsx('h2', { children: 'Cat I please pet your cat' }),
          A.jsx('p', { children: `${alert}` }),
        ],
      })
}
function Uk() {
  const [e, t] = M.useState(''),
    [r, n] = M.useState(''),
    [o, i] = M.useState(''),
    [a, s] = M.useState('waiting'),
    [l, f] = M.useState('Hello!'),
    [p, h] = M.useState('primary'),
    [m, v] = M.useState(!1)
  M.useEffect(() => {
    const g = new Date().getHours()
    g < 12
      ? (f('Good Morning! 🐔'), s('dawn'), h('success'))
      : g < 18
      ? (f('Good Afternoon 🐈'), s('waiting'), h('warning'))
      : g >= 18 && g < 24
      ? (f('Good Evening 🥰'), s('dusk'), h('danger'))
      : s('waiting')
  }, [])
  const w = async (y) => {
      y.preventDefault()
      try {
        const g = await dO(e, r)
        t(''), n(''), v(!0)
      } catch (g) {
        console.log(g), i('soz loser')
      }
    },
    S = async (y) => {
      y.preventDefault()
      try {
        const g = await pO(e, r)
        t(''), n('')
      } catch (g) {
        console.log(g)
      }
    }
  function x() {
    v((y) => !y)
  }
  return A.jsxs('div', {
    className: `${a}`,
    children: [
      A.jsx('h1', { children: `${l}` }),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsxs('div', {
        className: 'button-container',
        children: [
          A.jsx(ms, {
            href: '/',
            children: A.jsx(qo, {
              variant: p,
              size: 'lg',
              className: 'round-button',
              children: 'Alert List',
            }),
          }),
          A.jsx(ms, {
            href: '/profile',
            children: A.jsx(qo, {
              variant: p,
              size: 'lg',
              className: 'round-button',
              children: 'Profile',
            }),
          }),
        ],
      }),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx('br', {}),
      A.jsx(Mb, {
        className: 'alert',
        children: 'Welcome to Your Personal Digital Alert App',
      }),
      m
        ? A.jsxs(A.Fragment, {
            children: [
              A.jsxs('form', {
                onSubmit: S,
                children: [
                  A.jsx('label', { htmlFor: 'email', children: ' Email:' }),
                  A.jsx('input', {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    value: e,
                    onChange: (y) => t(y.target.value),
                    required: !0,
                  }),
                  A.jsx('br', {}),
                  A.jsx('label', { htmlFor: 'password', children: 'Password' }),
                  A.jsx('input', {
                    type: 'password',
                    id: 'password',
                    name: 'password',
                    value: r,
                    onChange: (y) => n(y.target.value),
                    required: !0,
                  }),
                  A.jsx('br', {}),
                  A.jsx('input', { type: 'submit', value: 'Log In' }),
                ],
              }),
              A.jsx(qo, { onClick: x, children: 'Sign up' }),
            ],
          })
        : A.jsxs(A.Fragment, {
            children: [
              A.jsxs('form', {
                onSubmit: w,
                children: [
                  A.jsx('label', { htmlFor: 'email', children: ' Email:' }),
                  A.jsx('input', {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    value: e,
                    onChange: (y) => t(y.target.value),
                    required: !0,
                  }),
                  A.jsx('br', {}),
                  A.jsx('label', { htmlFor: 'password', children: 'Password' }),
                  A.jsx('input', {
                    type: 'password',
                    id: 'password',
                    name: 'password',
                    value: r,
                    onChange: (y) => n(y.target.value),
                    required: !0,
                  }),
                  A.jsx('br', {}),
                  A.jsx('input', { type: 'submit', value: 'Sign Up' }),
                ],
              }),
              A.jsx(qo, { onClick: x, children: 'Login' }),
            ],
          }),
      A.jsx(fp, {}),
    ],
  })
}
const Fk = ax.Uploader({ apiKey: 'free' })
function $k() {
  const [e, t] = M.useState('null'),
    [r, n] = M.useState(Boolean)
  function o() {
    Fk.open({
      multi: !1,
      mimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
      editor: { images: { crop: !0, cropShape: 'circ', cropRatio: 1 / 1 } },
    }).then((a) => {
      const s = a[0]
      s instanceof Blob && t(URL.createObjectURL(s))
    })
  }
  function i() {
    n(!0)
  }
  return A.jsxs('div', {
    children: [
      A.jsx(qo, {
        onClick: o,
        children: 'Upload Rational explanation for what you are doing here...',
      }),
      A.jsx('br', {}),
      A.jsx('br', {}),
      e &&
        A.jsx('img', {
          src: e,
          alt: 'Profile Picture',
          onLoad: i,
          onError: () => 'Error loading image',
        }),
      e &&
        !r &&
        A.jsx('div', {
          children:
            'Loading rational explanation for what you are doing here...',
        }),
    ],
  })
}
const Bk = Gd(
    A.jsxs(Mi, {
      path: '/',
      element: A.jsx(EC, {}),
      children: [
        A.jsx(Mi, { index: !0, element: A.jsx(Lk, {}) }),
        A.jsx(Mi, { path: ':alertId', element: A.jsx(zk, {}) }),
        A.jsx(Mi, { path: '/home', element: A.jsx(Uk, {}) }),
        A.jsx(Mi, { path: '/profile', element: A.jsx($k, {}) }),
      ],
    })
  ),
  Wk = function () {
    return null
  }
const Hk = new CD(),
  Qk = KI(Bk),
  Vk = tw(document.getElementById('app'))
Vk.render(
  A.jsxs(HD, {
    client: Hk,
    children: [A.jsx(aT, { router: Qk }), A.jsx(Wk, {})],
  })
)