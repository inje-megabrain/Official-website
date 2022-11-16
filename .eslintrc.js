// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true, // JSX를 파싱할 수 있습니다.
          },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
      },
      settings: {
        react: {
          version: "detect", // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
        },
      },
}
