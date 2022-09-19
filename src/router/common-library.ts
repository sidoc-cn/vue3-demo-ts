import { RouteRecordRaw } from "vue-router";

// 常用三方库

const routes: Array<RouteRecordRaw> = [
    {
        path: "common-library",
        component: () => import("@/views/common-library/Index.vue"),
    },
];

export default routes;
