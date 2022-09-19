<template>
    <div class="utils func">
        <div class="list">
            <div class="item" :class="{ active: activeKey == 'base' }">基本配置</div>
        </div>

        <line-chart />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LineChart from "./components/LineChart.vue";
const activeKey = ref("base");
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
