module.exports = {
  extends: "eslint:recommended",
  rules: {
    "no-control-regex": "off",
    "for-direction": "off",

    "no-await-in-loop": "warn",
    "prefer-const": "warn",
    "object-shorthand": "warn",
    "prefer-destructuring": "warn",
    "prefer-arrow-callback": "warn",
    "no-cond-assign": "warn",
    "no-return-assign": "warn",
    "no-unused-expressions": "warn",
    "class-methods-use-this": "warn",
    "consistent-return": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unreachable-loop": "warn",
    "no-fallthrough": "warn",
    "no-useless-call": "warn",
    "no-template-curly-in-string": "warn",
    "no-shadow": "warn",
    "new-cap": "warn",
    "no-use-before-define": [ "warn", "nofunc" ],

    "prefer-regex-literals": "error",
    "eqeqeq": [ "error", "smart" ],
    "no-label-var": "error",
    "no-duplicate-imports": "error",
    "strict": "error",
    "no-self-compare": "error",
    "no-array-constructor": "error",
    "no-new-wrappers": "error",
    "no-constructor-return": "error",
    "no-unused-private-class-members": "error",
    "symbol-description": "error",
    "array-callback-return": "error",
    "require-await": "error",
    "no-else-return": "error",
    "no-var": "error",
    "no-throw-literal": "error",
    "radix": "error",
    "no-undef-init": "error",
    "prefer-object-has-own": "error",
    "no-proto": "error",
    "no-iterator": "error",
    "no-caller": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-lone-blocks": "error",
    "operator-assignment": "error",
    "prefer-exponentiation-operator": "error",
    "no-unneeded-ternary": "error",
    "default-case-last": "error",
    "no-restricted-syntax": [ "error", {
      selector: "CallExpression[callee.name='Array']",
      message: "Constructor 'Array' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='Function']",
      message: "Constructor 'Function' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='RegExp']",
      message: "Constructor 'RegExp' requires 'new'"
    }],
    "id-denylist": [
      "error", "Object", "Function", "Array", "Number","parseFloat", "parseInt", "Boolean", "String",
      "Symbol", "Date", "Promise", "RegExp", "Error", "AggregateError", "EvalError", "RangeError",
      "ReferenceError", "SyntaxError", "TypeError", "URIError", "globalThis", "JSON", "Math", "console",
      "Intl", "ArrayBuffer", "Uint8Array","Int8Array", "Uint16Array", "Int16Array", "Uint32Array",
      "Int32Array", "Float32Array", "Float64Array", "Uint8ClampedArray", "BigUint64Array", "BigInt64Array",
      "DataView", "Map", "BigInt", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "FinalizationRegistry",
      "WeakRef", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape",
      "unescape", "isFinite", "isNaN", "atob", "btoa", "URL", "URLSearchParams", "DOMException", "TextEncoder",
      "TextDecoder", "AbortController", "AbortSignal", "EventTarget", "Event", "MessageChannel", "MessagePort",
      "MessageEvent", "clearInterval", "clearTimeout", "setInterval", "setTimeout", "queueMicrotask",
      "performance", "structuredClone", "SharedArrayBuffer", "Atomics", "WebAssembly"
    ]
  }
};
