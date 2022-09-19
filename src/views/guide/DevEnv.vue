<template>
    <div class="utils func">
        <div class="list">
            <div class="item">快捷键</div>
            <div class="item">使用技巧</div>
            <div class="item">注意事项</div>
            <div class="item" :class="{ active: activeKey == 'ts' }" @click="changeContent('ts')">tsconfig.json</div>
            <div class="item" :class="{ active: activeKey == 'editor' }" @click="changeContent('editor')">editorconfig</div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 引入Markdown文件
import tsConfig from "./dev-env/tsconfig.md";
import editorconfig from "./dev-env/editorconfig.md";

// const markdownData:Ref<string> = ref(data);
const activeKey = ref("vue");
const markdownData = ref();

function changeContent(val: string) {
    activeKey.value = val;
    switch (val) {
        case "ts": {
            markdownData.value = tsConfig;
            break;
        }
        case "editor": {
            markdownData.value = editorconfig;
            break;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
