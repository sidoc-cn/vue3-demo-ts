<template>
    <div class="utils func">
        <div class="list">
            <div class="item" :class="{ active: activeKey == 'base' }" @click="changeContent('base')">基本配置</div>
            <div class="item" :class="{ active: activeKey == 'threeOne' }" @click="changeContent('threeOne')">象形柱图-单柱</div>
            <div class="item" :class="{ active: activeKey == 'threePair' }" @click="changeContent('threePair')">象形柱图-单柱(多图)</div>
            <div class="item" :class="{ active: activeKey == 'threePair' }" @click="changeContent('threePair')">象形柱图-双柱</div>
        </div>

        <hist-char v-if="activeKey == 'base'" />
        <three-one v-if="activeKey == 'threeOne'" />
        <three-pair v-if="activeKey == 'threePair'" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import HistChar from "./components/HistChar.vue";
import ThreeOne from "./components/PictoGramOne.vue";
import ThreePair from "./components/PictoGramPair.vue";
const activeKey = ref("base");
// 0.4> 切换mark
const changeContent = (val: string): void => {
    activeKey.value = val;
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
