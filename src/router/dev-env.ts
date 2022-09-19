import { RouteRecordRaw } from "vue-router";

// 开发环境

const routes: Array<RouteRecordRaw> = [
    {
        path: "dev-env/Index",
        component: () => import("@/views/dev-env/Index.vue"),
    },
];

export default routes;
