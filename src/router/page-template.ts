import { RouteRecordRaw } from "vue-router";

// 页面模板

const routes: Array<RouteRecordRaw> = [
    {
        path: "page-template",
        component: () => import("@/views/page-template/Index.vue"),
        children: [
            {
                path: "search-list",
                component: () => import("@/views/page-template/search-list/Index.vue"),
            },
            {
                path: "search-list-tree",
                component: () => import("@/views/page-template/search-list-tree/Index.vue"),
            },
            {
                path: "tab-switching",
                component: () => import("@/views/page-template/tab-switching/Index.vue"),
                children: [
                    {
                        path: "page1",
                        component: () => import("@/views/page-template/tab-switching/page1.vue"),
                    },
                    {
                        path: "page2",
                        component: () => import("@/views/page-template/tab-switching/page2.vue"),
                    },
                    {
                        path: "page3",
                        component: () => import("@/views/page-template/tab-switching/page3.vue"),
                    },
                ],
            },
        ],
    },
];

export default routes;
