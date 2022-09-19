const { defineConfig } = require("@vue/cli-service");

const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        plugins: [
            // 常用UI库按需引入：https://github.com/antfu/unplugin-vue-components
            require("unplugin-vue-components/webpack")({
                // 生成 components.d.ts 全局声明文件，也接受自定义文件名的路径
                dts: true,

                eslintrc: {
                    enabled: true,
                    filepath: "./.eslintrc-components.json", // Default `./.eslintrc-auto-import.json`
                    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
                },

                // 搜索需要自动导入的自定义组件目录
                dirs: ["src/components"],

                // 组件的有效文件扩展名。
                extensions: ["vue"],

                // 搜索子目录
                deep: true,

                // 自定义组件的解析器
                resolvers: [ElementPlusResolver()],

                // 自动导入指令
                directives: true,
            }),
            // Vue API按需引入：https://github.com/antfu/unplugin-auto-import
            require("unplugin-auto-import/webpack")({
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/, // .md
                ],
                exclude: ["src/main.ts", "src/service/directive.ts", "src/service/global-install.ts"],
                dts: true,
                eslintrc: {
                    enabled: true,
                    filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
                },

                // 在 Vue 模板中自动导入
                vueTemplate: false,
                imports: [
                    "vue",
                    "vue-router",
                    {
                        vuex: ["useStore"],
                    },
                    {
                        // message: ["messageError", "messageSuccess", "messageWarning", "messageInfo"],
                    },
                ],
                // 搜索需要自动导入的自定义组件目录
                dirs: ["src/service", "src/components/dialog-confirm", "src/components/dialog-html"],

                // 搜索子目录
                deep: false,

                // 自定义解析器
                // 可以在这自定义自己的东西，比如接口api的引入，工具函数等等
                resolvers: [
                    /* ... */
                ],
            }),
        ],
    },
    chainWebpack: (config) => {
        // raw-loader配置，用于将指定文件以字符串形式导入
        config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();

        // 设置webpack打包处理时，排除 src/assets/svg 文件夹，因为该文件夹下的所有文件后续要使用专门的loader进行处理
        config.module.rule("svg").exclude.add(resolve("src/assets/svg")).end();

        // svg-sprite-loader配置，用于将svg图片制成symbol符号雪碧图，并放置到body标签下，以供调用
        config.module
            .rule("icons") // 规则名称
            .test(/\.svg$/) // 匹配规则表达式
            .include.add(resolve("src/assets/svg")) // 添加需要进行使用loader处理的表达式
            .end() // 返回上一级
            .use("svg-sprite-loader") // loader的名称
            .loader("svg-sprite-loader") // loader的名称
            .options({
                symbolId: "icon-[name]", // 重命名symbol符号id为 icon-[svg文件名称]
            })
            .end() // 返回上级
            .use("svgo-loader") // 注意loader顺序，后声明的先执行
            .loader("svgo-loader")
            .options({
                // 如果是有色图标，可以删除本配置，只做压缩
                plugins: [
                    {
                        name: "removeAttrs",
                        params: {
                            attrs: ["fill", "fill-rule"], // 删除svg图标的 fill 和 fill-rule 就可以通过css改变颜色
                        },
                    },
                ],
            })
            .end();
    },

    productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    publicPath: process.env.VUE_APP_ENV_PATH,
    devServer: {
        allowedHosts: "all",
        port: 8888, // 端口号
        host: "localhost",
        https: false,
        open: true, // 自动启动浏览器
        proxy: {
            // 如果请求路径中包含/localTest,则通过此代理转至 http://www.test.com
            "/localTest": {
                target: "http://www.test.com",
                ws: true,
                pathRewrite: { "^/localTest": "" }, // 覆写请求路径中的 /localTest , 此处删除路径中的 /localTest ，因为它只是一个代理的标识
            },
            "/preTest": {
                target: "http://www.sidoc.vip",
                ws: true,
                pathRewrite: { "^/preTest": "" },
            },
            // 测试生产环境
            "/test-production": {
                target: "https://www.sidoc.cn",
                ws: true,
                pathRewrite: { "^/test-production": "" },
            },
        },
    },
});
