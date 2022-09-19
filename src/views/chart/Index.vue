<template>
    <div class="index">
        <tabs>
            <tabs-item path="/chart/Histogram">柱状图</tabs-item>
            <tabs-item path="/chart/PicChart">饼图</tabs-item>
            <tabs-item path="/chart/Polyline">折线图</tabs-item>
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
