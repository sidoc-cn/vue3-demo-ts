<template>
    <div class="chartDemo" ref="myChart" :style="{ width: '1100px', height: '500px' }"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { EChartsType } from "echarts/core";

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);

// 获取echarts的dom元素
const myChart = ref<HTMLElement>();
const myCharts = ref<EChartsType>();

// 图标数据
const date = reactive(["CityA", "CityB", "CityD", "CityC", "CityE"]);
const data = reactive([
    { value: 1548, name: "CityE" },
    { value: 735, name: "CityC" },
    { value: 510, name: "CityD" },
    { value: 434, name: "CityB" },
    { value: 335, name: "CityA" },
]);

// 绘制图表
const draw = () => {
    if (!myChart.value) return;

    // 定义渐变色
    let color1 = new echarts.graphic.LinearGradient(
        0, // 右
        0, // 下
        1, // 左，1为起始方向
        0, // 上
        [
            { offset: 0, color: "#cee7ff" }, // 渐变色
            // { offset: 0.5, color: "#148afe" },
            { offset: 1, color: "#148afe" },
        ],
        false,
    );

    myCharts.value = echarts.init(myChart.value);
    myCharts.value.setOption({
        // 0.1> 标题组件，包含主标题和副标题。（所有的标题相关的设置都可在这儿设置如：显示方式、大小、字体、位置等）
        // 在 ECharts 3 中可以存在多个标题组件，这在需要对标题进行排版，或者单个实例中的多个图表都需要标题时会比较有用。
        // 详见官网完整配置：https://echarts.apache.org/zh/option.html#title
        title: {
            text: "图表标题",
            subtext: "子标题",
            left: "center", // title 组件离容器左侧的距离
        },

        // 0.2> 调色盘颜色列表
        // 完整配置：https://echarts.apache.org/zh/option.html#color
        color: [color1, "#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],

        // 0.3> 全局字体样式（各个组件可自定义自身的字体样式）
        // 完整配置：https://echarts.apache.org/zh/option.html#textStyle
        // textStyle: {
        //     color:"",
        //     fontFamily:""
        // },

        // 0.4> 提示框组件：所有提示相关的设置都可在这儿设置，如：显示方式、大小、字体、位置等）
        // 注：提示内容可使用字符串模板，模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等。
        // 也可使用回调函数
        // 官网完整配置：https://echarts.apache.org/zh/option.html#tooltip
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        // 0.5> 图例组件：可设置图例的所有设置选项（名称，显示，大小等）
        // 官网完整配置：https://echarts.apache.org/zh/option.html#legend
        legend: {
            bottom: 10,
            left: "center",
            data: date,
        },

        // 0.6> 数据层，官网完整配置：https://echarts.apache.org/zh/option.html#series-pie
        series: [
            {
                // 类型
                type: "pie",
                // 饼图半径
                radius: "65%",
                // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
                // 支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
                center: ["50%", "50%"],
                // 选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
                selectedMode: "single",
                // 饼图数据
                data: data,
                // 高亮状态的扇区和标签样式
                emphasis: {
                    itemStyle: {
                        // 图形的阴影
                        shadowBlur: 100,
                        // 阴影水平方向上的偏移距离
                        shadowOffsetX: 0,
                        // 阴影颜色
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    });
};

onMounted(() => {
    draw();
});
</script>
