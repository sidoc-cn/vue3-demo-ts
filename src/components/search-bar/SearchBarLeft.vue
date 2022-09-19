<template>
    <div class="search-bar-left">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.search-bar-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
    :deep(.item) {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 18px;
        &:last-of-type {
            margin-right: 10px;
        }
        .name {
            white-space: nowrap;
            margin-right: 6px;
        }
    }
}
</style>
