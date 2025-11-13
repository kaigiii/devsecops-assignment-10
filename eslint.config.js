// eslint.config.js
const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
  // 套用 ESLint 官方推薦的規則集
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        // 指定程式碼的執行環境為 Node.js
        ...globals.node,
      },
      // 指定 ES 版本
      ecmaVersion: "latest",
      // 這裡不需要 sourceType 了，因為檔案本身就是 CommonJS
    },
    // 你可以在這裡自訂規則
    rules: {
      // 確保 linter 能抓到 var 的問題
      "no-var": "error",
    }
  }
];