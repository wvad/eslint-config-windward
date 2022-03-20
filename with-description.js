module.exports = {
  extends: "eslint:recommended",
  rules: {
    // I think these are unnecessary rules.
    "no-control-regex": "off",
    "for-direction": "off",


    // Use Array#map and Promise.all instead of 'await' in loops.
    // However, there are times when it is better to use 'await' in a loop.
    "no-await-in-loop": "warn",

    // These are suggestions.
    "prefer-const": "warn",
    "object-shorthand": "warn",
    "prefer-destructuring": "warn",
    "prefer-arrow-callback": "warn",

    // If it's against these rules, perhaps it's mistake.
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


    // Use regex leterals instead of RegExp constructor.
    "prefer-regex-literals": "error",

    // Unstrict equelity is bad.
    "eqeqeq": [ "error", "smart" ],

    // ...
    "no-label-var": "error",

    // We should import modules only once.
    "no-duplicate-imports": "error",

    // We should use strict mode.
    "strict": "error",

    // Self comparing is unnecessary.
    "no-self-compare": "error",

    // ...
    "no-array-constructor": "error",

    // Boxed primitives should not be used.
    "no-new-wrappers": "error",

    // 'return' should not be used in a constructor.
    "no-constructor-return": "error",

    // Dead code
    "no-unused-private-class-members": "error",

    // If we omit symbol's description, we won't know what the Symbol is for.
    "symbol-description": "error",

    // If we forget to write 'return' in a callback of those, it's probably a mistake.
    "array-callback-return": "error",

    // If 'await' isn't used, the function doesn't need to be a async function.
    "require-await": "error",

    // If there is the 'return' in the IfStatement, the ElseStatement is unnecessary.
    "no-else-return": "error",

    // I think 'var' keyword is deprecated.
    "no-var": "error",

    // Thrown values have to be an object.
    "no-throw-literal": "error",

    // The parameter 'radix' have to be specified explicitly.
    "radix": "error",

    // It is unnecessary to initialize variables with undefined.
    // Veriables' default value is undefined.
    "no-undef-init": "error",

    // Object.prorototype.hasOwnProperty.call is too long!
    // Object.hasOwn is good.
    "prefer-object-has-own": "error",

    // These are deprecated.
    "no-proto": "error",
    "no-iterator": "error",
    "no-caller": "error",

    // These are format rules.
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "grouped-accessor-pairs": "error",
    "no-lone-blocks": "error",
    "dot-notation": "error",
    "operator-assignment": "error",
    "prefer-exponentiation-operator": "error",
    "no-unneeded-ternary": "error",
    "default-case-last": "error",
    "camelcase": [ "error", { ignoreDestructuring: true, ignoreImports: true } ],

    // 'Array', 'Function', and 'RegExp' are constructors.
    // So those should be call with 'new'.
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

    // These should not be shadowed.
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
    ],
  }
};
