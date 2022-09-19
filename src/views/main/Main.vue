<template>
    <div class="container">
        <menu-nav></menu-nav>

        <div class="main">
            <top-bar></top-bar>

            <router-view class="mainContent"></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MenuNav from "./MenuNav.vue";
import TopBar from "./TopBar.vue";
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: 100%;
    width: 100%;
    .main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        .mainContent {
            display: flex;
            overflow: auto;
            flex-grow: 1;
        }
    }
}
</style>
