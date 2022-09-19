<template>
    <div class="chartDemo" ref="myChart" :style="{ width: '1100px', height: '500px' }"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsType } from "echarts/core";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

// 获取echarts的dom元素
const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();
const myCharts = ref<EChartsType>();

// 图标数据
const date = reactive(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const data = reactive([10, 52, 200, 334, 390, 330, 220]);

// 绘制图表
const draw = () => {
    myCharts.value = echarts.init(myChart.value!);
    myCharts.value.setOption({
        // x轴所有样式设置
        xAxis: {
            // 数据轴类型
            // value 数值轴，适用于连续数据。
            // category 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
            // time 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
            // log 对数轴。适用于对数数据。
            type: "category",
            data: date,
        },
        // y轴所有样式设置
        yAxis: {
            type: "value",
        },
        // 图例数据
        series: [
            {
                // 图例类型
                type: "line",
                // 数据
                data: data,
            },
        ],
    });
};
onMounted(() => {
    draw();
});
</script>
