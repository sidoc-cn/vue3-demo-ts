<template>
    <markdown :data="markdownData"></markdown>
</template>

<script lang="ts" setup>
let markdownData = ref("");
import("./git/git.md").then((data) => {
    markdownData.value = data.default;
});
</script>
