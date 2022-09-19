import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

import form from "./form";
import list from "./list";
import chart from "./chart";
import convention from "./convention";
import dialog from "./dialog";
import plugin from "./vscode-plugin";
import agile from "./agile";
import guide from "./guide";
import devEnv from "./dev-env";
import commonLibrary from "./common-library";
import componentAccumulate from "./component-accumulate";
import pageTemplate from "./page-template";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/main/Main.vue"),
        redirect: "/dev-env/index",
        children: [],
    },
    {
        path: "/login",
        component: () => import("@/views/login/Login.vue"),
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("@/views/other/404.vue"),
    },
];

// 添加各路由文件
routes.forEach((item) => {
    if (item.path === "/" && item.children) {
        item.children = item.children.concat(convention);
        item.children = item.children.concat(agile);
        item.children = item.children.concat(form);
        item.children = item.children.concat(list);
        item.children = item.children.concat(chart);
        item.children = item.children.concat(dialog);
        item.children = item.children.concat(plugin);
        item.children = item.children.concat(guide);
        item.children = item.children.concat(devEnv);
        item.children = item.children.concat(commonLibrary);
        item.children = item.children.concat(componentAccumulate);
        item.children = item.children.concat(pageTemplate);
    }
});

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    next(); // 正常放行

    // 1.0> 生产环境下动态读取远程配置 -----------------------------------------------------------------
    // if (process.env.NODE_ENV === "production" && store.state.config === null) {
    if (store.state.config === null) {
        const res = await fetch("/config.json");
        store.state.config = await res.json();
    }

    // 2.0> 登录状态判断 ----------------------------------------------------------------------------
    // 无token时跳转至登录

    // 3.0> 请求动态路由，并判断权限 ------------------------------------------------------------------

    // 后续
    // 菜单列表从动态路由中取出，并渲染
});

export default router;
