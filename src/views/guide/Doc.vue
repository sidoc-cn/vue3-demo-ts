<template>
    <div class="utils func">
        <div class="list">
            <div class="item" :class="{ active: activeKey == 'vue' }" @click="changeContent('vue')">Vue3文档</div>
            <div class="item" :class="{ active: activeKey == 'element' }" @click="changeContent('element')">Element-plus文档</div>
            <div class="item" :class="{ active: activeKey == 'ts' }" @click="changeContent('ts')">Typescript文档</div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
// 引入Markdown文件
import vueData from "./doc/vue3.md";
import elementData from "./doc/element-plus.md";
import tsData from "./doc/type-script.md";

import markdown from "../../components/Markdown.vue";

const activeKey = ref("vue");
const markdownData = ref(vueData);

function changeContent(val: string) {
    activeKey.value = val;
    switch (val) {
        case "vue": {
            markdownData.value = vueData;
            break;
        }
        case "element": {
            markdownData.value = elementData;
            break;
        }
        case "ts": {
            markdownData.value = tsData;
            break;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
