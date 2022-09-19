<!-- <template>
    <div class="chartDemo" ref="myChart"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
const { proxy } = getCurrentInstance() as any;

const state = reactive({
    myCharts: [],
});

const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();

// 绘制图表
const initHomeLaboratory = () => {
    const myChart = echarts.init(proxy.$refs.myChart);
    const option = {
        // 提示（所有的提示相关的设置都可在这儿设置如：显示方式、大小、字体、位置等）
        // 注：提示内容可字符串模板 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
        // 也可回调函数
        tooltip: {
            trigger: "item",
        },
        // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。
        // 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        // x轴所有样式设置
        xAxis: [
            {
                // 数据轴类型
                // value 数值轴，适用于连续数据。
                // category 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
                // time 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                // log 对数轴。适用于对数数据。
                type: "category",
                // x轴数据
                data: date,
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        // Y轴数据
        yAxis: [
            {
                // 类型
                type: "value",
            },
        ],
        // 图例数据
        series: [
            {
                // 图例名称
                name: "Direct",
                // 图例类型
                type: "bar",
                // 柱子宽度
                barWidth: "60%",
                // 柱子数据
                data: data,
            },
        ],
    };
    myChart.setOption(option);
    state.myCharts.push(myChart);
};

// 批量设置 echarts resize
const initEchartsResizeFun = () => {
    nextTick(() => {
        for (let i = 0; i < state.myCharts.length; i++) {
            state.myCharts[i].resize();
        }
    });
};

// 批量设置 echarts resize
const initEchartsResize = () => {
    window.addEventListener("resize", initEchartsResizeFun);
};

onMounted(() => {
    initHomeLaboratory();
    initEchartsResize();
});
</script>

<style lang="scss" scoped>
.chartDemo {
    width: 100%;
    height: 500px;
}
</style> -->

<template>
    <div class="chartDemo" ref="myChart"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsType } from "echarts/core";
const { proxy } = getCurrentInstance() as any;

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

// 获取echarts的dom元素
const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();
const state = reactive({
    myCharts: [],
});
const myCharts = ref<EChartsType>();

// 图表数据
const date = reactive(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const data = reactive([10, 52, 200, 334, 390, 330, 220]);

// 绘制图表
const draw = () => {
    const myChartA = echarts.init(proxy.$refs.myChart);
    myChartA.setOption({
        // 提示（所有的提示相关的设置都可在这儿设置如：显示方式、大小、字体、位置等）
        // 注：提示内容可字符串模板 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
        // 也可回调函数
        tooltip: {
            trigger: "item",
        },
        // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。
        // 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        // x轴所有样式设置
        xAxis: [
            {
                // 数据轴类型
                // value 数值轴，适用于连续数据。
                // category 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
                // time 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                // log 对数轴。适用于对数数据。
                type: "category",
                // x轴数据
                data: date,
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        // Y轴数据
        yAxis: [
            {
                // 类型
                type: "value",
            },
        ],
        // 图例数据
        series: [
            {
                // 图例名称
                name: "Direct",
                // 图例类型
                type: "bar",
                // 柱子宽度
                barWidth: "60%",
                // 柱子数据
                data: data,
            },
        ],
    });

    state.myCharts.push(myChartA);
};

// 批量设置 echarts resize
const initEchartsResizeFun = () => {
    nextTick(() => {
        for (let i = 0; i < state.myCharts.length; i++) {
            state.myCharts[i].resize();
        }
    });
};

// 批量设置 echarts resize
const initEchartsResize = () => {
    window.addEventListener("resize", initEchartsResizeFun);
};

onMounted(() => {
    draw();
    initEchartsResize();
});
</script>

<style lang="scss" scoped>
.chartDemo {
    width: 100%;
    height: 500px;
}
</style>
