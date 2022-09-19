import { RouteRecordRaw } from "vue-router";

// 表单

const routes: Array<RouteRecordRaw> = [
    {
        path: "form",
        component: () => import("@/views/form/Index.vue"),
        children: [
            {
                path: "form",
                component: () => import("@/views/form/Form.vue"),
            },
            {
                path: "password",
                component: () => import("@/views/form/Password.vue"),
            },
            {
                path: "plugin",
                component: () => import("@/views/form/Plugin.vue"),
            },
            {
                path: "uploadAndDownload",
                component: () => import("@/views/form/UploadOrAndwnload.vue"),
            },
        ],
    },
];

export default routes;
