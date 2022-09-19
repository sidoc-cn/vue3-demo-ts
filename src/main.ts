import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 1.0> 引入全局样式
import "@/assets/css/common.scss";
import "@/assets/css/override-important.scss";

// 2.0> 注册全局指令
import directive from "@/service/directive";
directive(app);

// 3.0> 注册原型方法
require("@/service/prototype/index.ts");

// 4.0> 引入Element Plus全局样式
import "element-plus/dist/index.css";

// 5.0> Element Plus国际化（Element Plus默认使用英语，如果希望使用其他语言，需要如下设置）
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
app.use(ElementPlus, {
    locale: zhCn,
});

// 6.0> 引入Element Plus Icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

// 7.0> 导入所有SVG文件
// keys 返回包含所有模块名的数组，并在map循环中使用requireContext逐个自动导入
// require.context是webpack的特性用于导入
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("/src/assets/svg", false, /.svg$/);
requireAll(req);

app.use(store).use(router).mount("#app");
