<template>
    <div class="utils func">
        <div class="list">
            <div class="item" :class="{ active: activeName === 'moment' }">moment</div>
            <div class="item">axios</div>
            <div class="item">echarts</div>
            <div class="item">qrcode</div>
            <div class="item">v-jsoneditor</div>
            <div class="item">video.js</div>
            <div class="item">uuid</div>
            <div class="item">clipboard.js</div>
            <div class="item">js-spark-md5</div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
const markdownData = ref("");
const activeName = ref("moment");

const toolList: Array<string> = reactive(["moment", "axios", "echarts", "qrcode", "v-jsoneditor", "uuid", "clipboard.js", "js-spart-md5"]);

const itemClick = (item: string) => {
    activeName.value = item;
    switch (activeName.value) {
        case "moment": {
            import("./docs/moment.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
    }
};
onMounted(() => {
    itemClick(toolList[0]);
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
