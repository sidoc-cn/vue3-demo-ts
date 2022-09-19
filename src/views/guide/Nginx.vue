<template>
    <div class="utils func">
        <div class="list">
            <div class="item" :class="{ active: activeKey == 'nginx' }" @click="changeContent('nginx')">nginx基本配置</div>
            <div class="item">Linux基本使用</div>
            <div class="item">Windows部署</div>
            <div class="item">Centos部署</div>
            <div class="item">Ubuntu部署</div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import { Ref } from "Vue";
// 引入Markdown文件
import data from "./nginx/nginx.md";

const markdownData: Ref<string> = ref(data);
const activeKey = ref("nginx");

function changeContent(val: string) {
    activeKey.value = val;
    switch (val) {
        case "nginx": {
            import("./nginx/nginx.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
