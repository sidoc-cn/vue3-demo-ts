import { RouteRecordRaw } from "vue-router";

// 敏捷开发

const routes: Array<RouteRecordRaw> = [
    {
        path: "agile",
        component: () => import("@/views/agile/Index.vue"),
        children: [
            {
                path: "Utils",
                component: () => import("@/views/agile/Utils.vue"),
            },
            {
                path: "Shortcut",
                component: () => import("@/views/agile/Shortcut.vue"),
            },
            {
                path: "Vue3",
                component: () => import("@/views/agile/Vue3.vue"),
            },
        ],
    },
];

export default routes;
