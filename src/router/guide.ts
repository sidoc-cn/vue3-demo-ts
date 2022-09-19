import { RouteRecordRaw } from "vue-router";

// 快捷方式

const routes: Array<RouteRecordRaw> = [
    {
        path: "guide",
        component: () => import("@/views/guide/Index.vue"),
        children: [
            {
                path: "Nginx",
                component: () => import("@/views/guide/Nginx.vue"),
            },
            {
                path: "DevEnv",
                component: () => import("@/views/guide/DevEnv.vue"),
            },
            {
                path: "Doc",
                component: () => import("@/views/guide/Doc.vue"),
            },
            {
                path: "Git",
                component: () => import("@/views/guide/Git.vue"),
            },
        ],
    },
];

export default routes;
