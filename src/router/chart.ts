import { RouteRecordRaw } from "vue-router";

// 图表

const routes: Array<RouteRecordRaw> = [
    {
        path: "chart",
        component: () => import("@/views/chart/Index.vue"),
        children: [
            {
                path: "Polyline",
                component: () => import("@/views/chart/Polyline.vue"),
            },
            {
                path: "PicChart",
                component: () => import("@/views/chart/PicChart.vue"),
            },
            {
                path: "Histogram",
                component: () => import("@/views/chart/Histogram.vue"),
            },
        ],
    },
];

export default routes;
