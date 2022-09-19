<template>
    <div class="index">
        <tabs>
            <tabs-item path="/page-template/tab-switching/page1">页面1</tabs-item>
            <tabs-item path="/page-template/tab-switching/page2">页面2</tabs-item>
            <tabs-item path="/page-template/tab-switching/page3">页面3</tabs-item>
        </tabs>

        <router-view class="tab-content"></router-view>
    </div>
</template>

<style lang="scss" scoped>
.index {
    flex-direction: column;
    .tab-content {
        display: flex;
        flex-grow: 1;

        align-items: center;
        justify-content: center;
        font-size: 10rem;
    }
}
</style>
