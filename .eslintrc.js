module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "babel"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
    "babel/new-cap": 1,
    "babel/camelcase": 1,
    "babel/no-invalid-this": 1,
    "babel/object-curly-spacing": 1,
    "babel/quotes": 1,
    "babel/semi": 1,
    "babel/no-unused-expressions": 1,
    "babel/valid-typeof": 1,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    }
};