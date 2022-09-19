<template>
    <div class="chartDemo" ref="myChart" :style="{ width: '1100px', height: '500px' }"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
// 象形柱图是可以设置各种具象图形元素（如图片、SVG PathData 等）的柱状图
import { PictorialBarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsType } from "echarts/core";
echarts.use([TooltipComponent, GridComponent, PictorialBarChart, CanvasRenderer]);

// 本地图片
const weatherIcons = new URL(`/src/assets/img/from/3DChart.jpg`, import.meta.url).href;

// 图片
const ImageBase64 = reactive({
    url: "",
});

// 图表数据
const date = reactive(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const data = reactive([10, 52, 200, 334, 390, 330, 220]);

// 获取echarts的dom元素
const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();
const myCharts = ref<EChartsType>();
// 绘制图表
const draw = () => {
    myCharts.value = echarts.init(myChart.value!);
    myCharts.value.setOption({
        // 提示（所有的提示相关的设置都可在这儿设置如：显示方式、大小、字体、位置等）
        // 注：提示内容可字符串模板 模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
        // 也可回调函数
        tooltip: {
            axisPointer: {
                type: "shadow",
            },
        },
        // 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。
        // 在 ECharts 2.x 里单个 echarts 实例中最多只能存在一个 grid 组件，在 ECharts 3 中可以存在任意个 grid 组件。
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        // X轴的相关设置（轴线颜色、大小、样式等）
        xAxis: [
            {
                // 数据轴类型
                // value 数值轴，适用于连续数据。
                // category 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
                // time 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                // log 对数轴。适用于对数数据。
                type: "category",
                data: date,
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        // Y轴的相关设置（轴线颜色、大小、样式等）
        yAxis: [
            {
                type: "value",
            },
        ],
        series: [
            {
                // 柱子名称
                name: "Direct",
                // 柱子类型
                type: "pictorialBar",
                // 柱子数据
                data: data,
                // 柱子图片
                symbol: ImageBase64.url,
                // 图形大小
                symbolSize: ["150", "100%"],
            },
        ],
    });
};
// 图片转base64
const imageToBase64 = (url: string): any => {
    return new Promise((resolve) => {
        let homeImage = new Image();
        // 解决跨域问题
        homeImage.setAttribute("crossOrigin", "anonymous");
        homeImage.src = url;
        homeImage.onload = () => {
            let canvas = document.createElement("canvas");
            canvas.width = homeImage.width;
            canvas.height = homeImage.height;
            let context = canvas.getContext("2d");
            if (context) {
                context.drawImage(homeImage, 0, 0, homeImage.width, homeImage.height);
            }
            let quality = 0.8;
            // 这里的dataurl就是base64类型
            let dataURL = "image://" + canvas.toDataURL("image/jpeg", quality);
            // base64ToFile(dataURL, "moren"); // 这里是将base64转为file格式的方法
            resolve(dataURL);
        };
    });
};
onMounted(() => {
    imageToBase64(weatherIcons).then((aaa: any) => {
        ImageBase64.url = aaa;
        draw();
    });
});
</script>
