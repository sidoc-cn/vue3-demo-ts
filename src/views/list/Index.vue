<template>
    <div class="index">
        <tabs>
            <tabs-item path="/list/List">搜索+列表</tabs-item>
            <tabs-item path="/list/TreeAndList">树+搜索+列表</tabs-item>
        </tabs>

        <router-view class="content"></router-view>
    </div>
</template>

<style lang="scss" scoped>
.index {
    flex-direction: column;
    .content {
        flex-grow: 1;
    }
}
</style>
