<template>
    <div class="index">
        <tabs>
            <tabs-item path="/agile/utils">工具方法</tabs-item>
            <tabs-item path="/agile/shortcut">快捷方式</tabs-item>
            <!-- <tabs-item>奇巧淫技</tabs-item> -->
            <tabs-item path="/agile/vue3">Vue3</tabs-item>
            <!-- <tabs-item>避坑指南</tabs-item> -->
        </tabs>

        <router-view class="content"></router-view>
    </div>
</template>

<style lang="scss" scoped>
.index {
    flex-direction: column;
    .content {
        flex-grow: 1;
        overflow: hidden;
    }
}
</style>
