<template>
    <markdown class="shortcut" :data="markdownData"></markdown>
</template>

<script lang="ts" setup>
const markdownData = ref("");
import("./shortcut/shortcut.md").then((data) => {
    markdownData.value = data.default;
});
</script>

<style lang="scss" scoped>
.shortcut {
    overflow: auto !important;
}
</style>
