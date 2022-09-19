import { RouteRecordRaw } from "vue-router";

// VS Code插件

const routes: Array<RouteRecordRaw> = [
    {
        path: "vscode-plugin",
        component: () => import("@/views/vscode-plugin/VscodePlugin.vue"),
    },
];

export default routes;
