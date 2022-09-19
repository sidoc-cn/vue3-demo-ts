import { RouteRecordRaw } from "vue-router";

// 列表

const routes: Array<RouteRecordRaw> = [
    {
        path: "list",
        component: () => import("@/views/list/Index.vue"),
        children: [
            {
                path: "List",
                component: () => import("@/views/list/List.vue"),
            },
            {
                path: "TreeAndList",
                component: () => import("@/views/list/TreeAndList.vue"),
            },
        ],
    },
];

export default routes;
