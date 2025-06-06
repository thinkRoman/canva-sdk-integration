const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginJest = require("eslint-plugin-jest");
const eslintPluginTypescript = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules/", "dist/**/*", "*.js", "*.d.ts", "*.d.tsx"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        serviceworker: true,
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      jest: eslintPluginJest,
      react: eslintPluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "no-public",
          overrides: {
            parameterProperties: "off",
          },
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeLike",
          format: ["PascalCase"],
          leadingUnderscore: "allow",
        },
      ],
      "no-invalid-this": "off",
      "@typescript-eslint/no-invalid-this": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-namespace": "off",
      "jest/no-restricted-matchers": [
        "error",
        {
          toContainElement:
            "toContainElement is not recommended as it encourages testing the internals of the components",
          toContainHTML:
            "toContainHTML is not recommended as it encourages testing the internals of the components",
          toHaveAttribute:
            "toHaveAttribute is not recommended as it encourages testing the internals of the components",
          toHaveClass:
            "toHaveClass is not recommended as it encourages testing the internals of the components",
          toHaveStyle:
            "toHaveStyle is not recommended as it encourages testing the internals of the components",
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "allow",
          afterOpening: "never",
          beforeClosing: "allow",
        },
      ],
      "react/self-closing-comp": "error",
      "react/no-unescaped-entities": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "default-case": "error",
      eqeqeq: [
        "error",
        "always",
        {
          null: "never",
        },
      ],
      "no-caller": "error",
      "no-console": "off",
      "no-eval": "error",
      "no-inner-declarations": "error",
      "no-new-wrappers": "error",
      "no-restricted-globals": [
        "error",
        {
          name: "fit",
          message: "Don't focus tests",
        },
        {
          name: "fdescribe",
          message: "Don't focus tests",
        },
        {
          name: "length",
          message:
            "Undefined length - Did you mean to use window.length instead?",
        },
        {
          name: "name",
          message: "Undefined name - Did you mean to use window.name instead?",
        },
        {
          name: "status",
          message:
            "Undefined status - Did you mean to use window.status instead?",
        },
        {
          name: "spyOn",
          message: "Don't use spyOn directly, use jest.spyOn",
        },
      ],
      "no-restricted-properties": [
        "error",
        {
          property: "bind",
          message: "Don't o.f.bind(o, ...), use () => o.f(...)",
        },
        {
          object: "ReactDOM",
          property: "findDOMNode",
          message: "Don't use ReactDOM.findDOMNode() as it is deprecated",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "AccessorProperty, TSAbstractAccessorProperty",
          message:
            "Accessor property syntax is not allowed, use getter and setters.",
        },
        {
          selector: "PrivateIdentifier",
          message:
            "Private identifiers are not allowed, use TypeScript private fields.",
        },
      ],
      "no-return-await": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],
      "prefer-object-spread": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      radix: "error",
    },
  },
  {
    files: ["**/*.tsx"],
    rules: {
      "react/jsx-boolean-value": ["error", "always"],
      "react/no-deprecated": "error",
    },
  },
];
