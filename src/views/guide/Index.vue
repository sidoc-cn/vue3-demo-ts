<template>
    <div class="index">
        <tabs>
            <tabs-item path="/guide/nginx">前端部署</tabs-item>
            <tabs-item path="/guide/devEnv">开发环境</tabs-item>
            <tabs-item path="/guide/doc">开发文档</tabs-item>
            <tabs-item path="/guide/git">Git常用操作</tabs-item>
            <!-- <tabs-item path="/agile/vue3">常见坑</tabs-item> -->
        </tabs>

        <router-view class="content"></router-view>
    </div>
</template>

<style lang="scss" scoped>
.index {
    flex-direction: column;
    .content {
        flex-grow: 1;
        overflow: auto;
    }
}
</style>
