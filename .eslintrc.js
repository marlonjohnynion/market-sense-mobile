module.exports = {
  "extends": [
    "standard",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react-native"
  ],
  "parser": "babel-eslint",
  "env": {
    "react-native/react-native": true
  },
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react/jsx-uses-vars": 2,
    "react/prop-types": 0
  },
  "globals": {
    "it": 0,
    "expect": 0,
    "describe": 0,
    "navigator": 0
  }
}