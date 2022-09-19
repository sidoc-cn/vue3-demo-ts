module.exports = {
    root: true,
    env: {
        node: true,
        "vue/setup-compiler-macros": true,
    },
    globals: {},
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
        "./.eslintrc-auto-import.json",
        // "./.eslintrc-components.json",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/multi-word-component-names": "off", // 关闭Vue3中要求.vue文件的名称必须为多个单词的检查
        "no-unused-vars": "warn", // 变量未使用时，仅发出警告，而不阻止程序运行
    },
};
