module.exports = exports = {
  rules: {
    "no-await-in-loop": "warn",
    "prefer-template": "warn", // [TODO] custom
    "no-useless-constructor": "warn", // [TODO] custom
    "new-cap": "warn",
    "no-shadow": "warn",
    "no-cond-assign": "warn", // [CHANGE] :error
    "no-fallthrough": "warn",
    "no-return-assign": "warn", // [CHANGE] :error
    "consistent-return": "warn",
    "no-unreachable-loop": "warn",
    "no-unused-expressions": "warn", // [TODO] custom
    "class-methods-use-this": "warn",
    "no-template-curly-in-string": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-use-before-define": ["warn", "nofunc"], // [TODO] custom
    "radix": "error",
    "strict": "error",
    "no-var": "error",
    "no-label-var": "error",
    "require-await": "error",
    "no-else-return": "error",
    "no-lone-blocks": "error",
    "no-self-compare": "error",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "symbol-description": "error",
    "no-trailing-spaces": "error",
    "eqeqeq": ["error", "smart"],
    "no-duplicate-imports": "error",
    "no-array-constructor": "error",
    "no-constructor-return": "error",
    "prefer-regex-literals": "error",
    "array-callback-return": "error",
    "grouped-accessor-pairs": "error",
    "no-unused-private-class-members": "error",
    "no-proto": "error",
    "no-caller": "error",
    "no-iterator": "error",
    "camelcase": ["error", {
      properties: "never",
      ignoreGlobals: true,
      ignoreImports: true,
      ignoreDestructuring: true
    }],
    "no-undef-init": "error",
    "no-useless-return": "error",
    "operator-assignment": "error",
    "no-unneeded-ternary": "error",
    "prefer-object-has-own": "error",
    "no-useless-computed-key": "error",
    "prefer-exponentiation-operator": "error",
    "no-restricted-syntax": ["error", {
      selector: "NewExpression[callee.name='BigInt']",
      message: "BigInt is not a constructor"
    }, {
      selector: "CallExpression:matches([callee.name='Array'],[callee.name='RegExp'],[callee.name='Function'],[callee.name='Error'],[callee.name='AggregateError'],[callee.name='EvalError'],[callee.name='RangeError'],[callee.name='ReferenceError'],[callee.name='SyntaxError'],[callee.name='TypeError'],[callee.name='URIError'])",
      message: "Class constructors require 'new'"
    }, {
      selector: "ClassExpression:matches([superClass.name='Number'],[superClass.name='String'],[superClass.name='Boolean'],[superClass.name='Object'])",
      message: "A class cannot extend the sealed class"
    }, {
      selector: "ClassDeclaration:matches([superClass.name='Number'],[superClass.name='String'],[superClass.name='Boolean'],[superClass.name='Object'])",
      message: "A class cannot extend the sealed class"
    }, {
      selector: "ClassExpression[superClass.name='Array'] MethodDefinition[kind='constructor'] CallExpression[callee.type='Super'][arguments.length>1]",
      message: "Too many arguments for Array constructor"
    }, {
      selector: "ClassDeclaration[superClass.name='Array'] MethodDefinition[kind='constructor'] CallExpression[callee.type='Super'][arguments.length>1]",
      message: "Too many arguments for Array constructor"
    }, {
      selector: "ClassExpression[superClass.name='Array'][body.body.length<1]",
      message: "The class extending Array requires user-defined constructor"
    }, {
      selector: "ClassDeclaration[superClass.name='Array'][body.body.length<1]",
      message: "The class extending Array requires user-defined constructor"
    }],
    "constructor-super": "error",
    "for-direction": "warn",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "warn",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "warn",
    "no-prototype-builtins": "error",
    "no-self-assign": "error",
    "no-setter-return": "warn",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "warn",
    "no-unsafe-optional-chaining": "warn",
    "no-unused-vars": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "warn",
    "use-isnan": "error",
    "valid-typeof": "error",
    "accessor-pairs": "error",
    "consistent-this": "warn",
    "default-case-last": "warn",
    "default-param-last": "error",
    "guard-for-in": "error",
    "max-nested-callbacks": ["error", { max: 5 }],
    "no-alert": "error",
    "no-case-declarations": "error",
    "no-confusing-arrow": "warn",
    "no-delete-var": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-lonely-if": "error",
    "no-loop-func": "warn",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-with": "error",
    "object-shorthand": ["error", "always", {
      ignoreConstructors: true
    }],
    "prefer-arrow-callback": ["error", {
      allowNamedFunctions: true,
      allowUnboundThis: true
    }],
    "prefer-const": "error",
    "prefer-destructuring": ["error", {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: false,
        object: true
      }
    }],
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-spread": "error",
    "require-yield": "error",
    "vars-on-top": "error",
    "no-eq-null": "error",
    "no-mixed-spaces-and-tabs": "error"
  }
};
