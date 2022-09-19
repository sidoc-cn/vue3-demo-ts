import { RouteRecordRaw } from "vue-router";

// 开发约定

const routes: Array<RouteRecordRaw> = [
    {
        path: "convention/index",
        component: () => import("@/views/convention/Index.vue"),
    },
];

export default routes;
