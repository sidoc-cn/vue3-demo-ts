import { RouteRecordRaw } from "vue-router";

// 组件积累

const routes: Array<RouteRecordRaw> = [
    {
        path: "component-accumulate",
        component: () => import("@/views/component-accumulate/Index.vue"),
    },
];

export default routes;
