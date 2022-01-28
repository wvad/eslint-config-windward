module.exports = {
  extends: "eslint:recommended",
  rules: {
    "no-control-regex": "off",
    "for-direction": "off",

    "no-cond-assign": "warn",
    "no-return-assign": "warn",
    "no-shadow": "warn",
    "prefer-arrow-callback": "warn",
    "no-template-curly-in-string": "warn",
    "new-cap": "warn",
    "no-fallthrough": "warn",
    "no-useless-call": "warn",
    "no-use-before-define": [ "warn", "nofunc" ],
    "no-unused-expressions": "warn",
    "prefer-const": "warn",
    "class-methods-use-this": "warn",

    "array-callback-return": "error",
    "max-len": [ "error", 145 ],
    "eqeqeq": [ "error", "smart" ],
    "no-label-var": "error",
    "prefer-exponentiation-operator": "error",
    "no-unneeded-ternary": "error",
    "no-undef-init": "error",
    "object-shorthand": "error",
    "operator-assignment": "error",
    "no-array-constructor": "error",
    "prefer-object-has-own": "error",
    "no-restricted-syntax": [ "error", {
      selector: "CallExpression[callee.name='Array']",
      message: "Constructor 'Array' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='Object']",
      message: "Constructor 'Object' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='Function']",
      message: "Constructor 'Function' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='RegExp']",
      message: "Constructor 'RegExp' requires 'new'"
    }],
    "semi": "error",
    "no-await-in-loop": "error",
    "dot-notation": "error",
    "prefer-regex-literals": "error",
    "prefer-destructuring": "error",
    "consistent-return": "error",
    "no-constructor-return": "error",
    "no-unused-private-class-members": "error",
    "camelcase": [ "error", { ignoreDestructuring: true, ignoreImports: true } ],
    "require-await": "error",
    "symbol-description": "error",
    "grouped-accessor-pairs": "error",
    "no-new-wrappers": "error",
    "no-duplicate-imports": "error",
    "no-self-compare": "error",
    "default-case-last": "error",
    "no-caller": "error",
    "no-else-return": "error",
    "no-lone-blocks": "error",
    "no-proto": "error",
    "no-throw-literal": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "radix": "error",
    "strict": "error",
    "new-parens": "error",
    "no-iterator": "error",
    "linebreak-style": "error",
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
