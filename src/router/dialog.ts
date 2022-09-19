import { RouteRecordRaw } from "vue-router";

// 弹框

const routes: Array<RouteRecordRaw> = [
    {
        path: "dialog",
        component: () => import("@/views/dialog/Dialog.vue"),
    },
];

export default routes;
