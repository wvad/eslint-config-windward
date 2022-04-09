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
    "prefer-promise-reject-errors": "warn",
    "no-use-before-define": [ "warn", "nofunc" ],
    "no-useless-constructor": "warn",
    "no-lone-blocks": "warn",
    "default-case-last": "warn",


    // Use regex leterals instead of RegExp constructor.
    "prefer-regex-literals": "error",

    // Unstrict equelity is bad.
    "eqeqeq": [ "error", "smart" ],

    // Disallow labels that share a name with a variable.
    "no-label-var": "error",

    // We should import modules only once.
    "no-duplicate-imports": "error",

    // We should use strict mode.
    "strict": "error",

    // Self comparing is unnecessary.
    "no-self-compare": "error",

    // Boxed primitives should not be used.
    "no-new-wrappers": "error",

    // 'return' should not be used in a constructor.
    "no-constructor-return": "error",

    // Unused private members are unnecessary.
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

    // We should use template literals instead of string concatenation.
    "prefer-template": "error",

    // Trailing spaces are not allowed.
    "no-trailing-spaces": "error",

    // If a property has a getter and a setter, the setter should be defined right after the getter, or vice versa
    "grouped-accessor-pairs": "error",

    // Use camelcase.
    "camelcase": [ "error", { ignoreDestructuring: true, ignoreImports: true, ignoreGlobals: true } ],

    // Use of the Array constructor to construct a new array is discouraged in favor of array literal notation.
    // It's because the single-argument pitfall and because the Array global may be redefined.
    // The exception is when the Array constructor is used to create sparse arrays of a specified size by giving a single numeric argument.
    "no-array-constructor": "error",

    // These are deprecated.
    "no-proto": "error",
    "no-iterator": "error",
    "no-caller": "error",

    // Write as short and simple as possible.
    "no-undef-init": "error",
    "prefer-object-has-own": "error",
    "no-useless-computed-key": "error",
    "no-useless-return": "error",
    "operator-assignment": "error",
    "prefer-exponentiation-operator": "error",
    "no-unneeded-ternary": "error",

    // 'Array', 'Function' and 'RegExp' are constructors.
    // So those have to be call with 'new'.
    // BigInt is not a constructor.
    // So it have to be called without 'new'.
    "no-restricted-syntax": [ "error", {
      selector: "CallExpression[callee.name='Array']",
      message: "Constructor 'Array' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='Function']",
      message: "Constructor 'Function' requires 'new'"
    }, {
      selector: "CallExpression[callee.name='RegExp']",
      message: "Constructor 'RegExp' requires 'new'"
    }, {
      selector: "NewExpression[callee.name='BigInt']",
      message: "BigInt is not a constructor"
    }]
  }
};
