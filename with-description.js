module.exports = {
  extends: "eslint:recommended",
  rules: {
    // I think these are unnecessary rules.
    "for-direction": "off",
    "no-control-regex": "off",


    // Use Array#map and Promise.all instead of 'await' in loops.
    // However, there are times when it's better to use 'await' in a loop.
    "no-await-in-loop": "warn",

    // These are suggestions.
    "prefer-const": "warn",
    "object-shorthand": "warn",
    "prefer-destructuring": "warn",
    "prefer-arrow-callback": "warn",

    // If it's against these rules, perhaps it's mistake.
    "new-cap": "warn",
    "no-shadow": "warn",
    "no-cond-assign": "warn",
    "no-fallthrough": "warn",
    "no-lone-blocks": "warn",
    "no-useless-call": "warn",
    "no-return-assign": "warn",
    "consistent-return": "warn",
    "default-case-last": "warn",
    "no-unreachable-loop": "warn",
    "no-unused-expressions": "warn",
    "class-methods-use-this": "warn",
    "no-useless-constructor": "warn",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "warn",
    "prefer-promise-reject-errors": "warn",
    "no-use-before-define": [ "warn", "nofunc" ],


    // The parameter 'radix' have to be specified explicitly.
    "radix": "error",

    // We should use strict mode.
    "strict": "error",

    // I think 'var' keyword is deprecated.
    "no-var": "error",

    // Disallow labels that share a name with a variable.
    "no-label-var": "error",

    // If 'await' isn't used, the function doesn't need to be a async function.
    "require-await": "error",

    // If there is the 'return' in the IfStatement, the ElseStatement is unnecessary.
    "no-else-return": "error",

    // Self comparing is unnecessary.
    "no-self-compare": "error",

    // Boxed primitives should not be used.
    "no-new-wrappers": "error",

    // We should use template literals instead of string concatenation.
    "prefer-template": "error",

    // Thrown values have to be an object.
    "no-throw-literal": "error",

    // If we omit symbol's description, we won't know what the Symbol is for.
    "symbol-description": "error",

    // Trailing spaces are not allowed.
    "no-trailing-spaces": "error",

    // Unstrict equelity is bad.
    "eqeqeq": [ "error", "smart" ],

    // We should import modules only once.
    "no-duplicate-imports": "error",

    // Use array literal notation instead of the Array constructor.
    "no-array-constructor": "error",

    // 'return' should not be used in a constructor.
    "no-constructor-return": "error",

    // Use regex leterals instead of RegExp constructor.
    "prefer-regex-literals": "error",

    // If we forget to write 'return' in a callback of those, it's probably a mistake.
    "array-callback-return": "error",

    // If a property has a getter and a setter, the setter should be defined right after the getter, or vice versa.
    "grouped-accessor-pairs": "error",

    // Unused private members are unnecessary.
    "no-unused-private-class-members": "error",

    // These are deprecated.
    "no-proto": "error",
    "no-caller": "error",
    "no-iterator": "error",

    // Use camelcase.
    "camelcase": [ "error", {
      ignoreGlobals: true,
      ignoreImports: true,
      ignoreDestructuring: true
    }],

    // Write as short and simple as possible.
    "no-undef-init": "error",
    "no-useless-return": "error",
    "operator-assignment": "error",
    "no-unneeded-ternary": "error",
    "prefer-object-has-own": "error",
    "no-useless-computed-key": "error",
    "prefer-exponentiation-operator": "error",

    // BigInt is not a constructor.
    // So it have to be called without 'new'.
    // Array, Function and RegExp are constructors.
    // So those have to be call with 'new'.
    "no-restricted-syntax": [ "error", {
      selector: "NewExpression[callee.name='BigInt']",
      message: "BigInt is not a constructor"
    }, {
      selector: "CallExpression[callee.name='Array']",
      message: "Constructor 'Array' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='RegExp']",
      message: "Constructor 'RegExp' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='Function']",
      message: "Constructor 'Function' requires 'new'"
    }]
  }
};
