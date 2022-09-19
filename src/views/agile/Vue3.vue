<template>
    <div class="utils func">
        <div class="list">
            <div
                class="item"
                :class="{ active: activeName === item.name }"
                @click="itemClick(item)"
                v-for="(item, index) in itemList"
                :key="index"
            >
                <div class="name">{{ item.name }}</div>
            </div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, reactive, onMounted } from "vue";

// 引入Markdown文件
import cycle from "./vue3/cycle.md";
import composition from "./vue3/composition.md";
import watch from "./vue3/watch.md";
import computed from "./vue3/computed.md";
import router from "./vue3/router.md";
import componentByValue from "./vue3/component-by-value.md";
import Teleport from "./vue3/teleport.md";
import Fragments from "./vue3/fragments.md";
import Suspense from "./vue3/suspense.md";
import templateInstruction from "./vue3/template-instruction.md";

import markdown from "../../components/Markdown.vue";

const markdownData: Ref<string> = ref("");
const activeName: Ref<string> = ref("Composition API");

interface Item {
    name: string;
}

const itemList: Array<Item> = reactive([
    { name: "Composition API" },
    { name: "生命周期" },
    { name: "watch" },
    { name: "computed" },
    { name: "路由" },
    { name: "组件传值" },
    { name: "Teleport" },
    { name: "Fragments" },
    { name: "Suspense" },
    { name: "模板指令" },
]);

const itemClick = (item: Item) => {
    activeName.value = item.name;
    if (activeName.value === "Composition API") {
        markdownData.value = composition;
    }
    if (activeName.value === "生命周期") {
        markdownData.value = cycle;
    }
    if (activeName.value === "watch") {
        markdownData.value = watch;
    }
    if (activeName.value === "computed") {
        markdownData.value = computed;
    }
    if (activeName.value === "路由") {
        markdownData.value = router;
    }
    if (activeName.value === "组件传值") {
        markdownData.value = componentByValue;
    }
    if (activeName.value === "Teleport") {
        markdownData.value = Teleport;
    }
    if (activeName.value === "Fragments") {
        markdownData.value = Fragments;
    }
    if (activeName.value === "Suspense") {
        markdownData.value = Suspense;
    }
    if (activeName.value === "模板指令") {
        markdownData.value = templateInstruction;
    }
};

onMounted(() => {
    itemClick(itemList[0]);
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
