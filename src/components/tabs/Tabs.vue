<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    border-bottom: 1px solid rgb(235, 235, 235);
}
</style>
