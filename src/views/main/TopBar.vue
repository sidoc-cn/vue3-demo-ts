<template>
    <div class="topBar">
        <div class="item">头像</div>
        <div class="item" @click="logoff">退出</div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const logoff = () => {
    router.push("/login");
};
</script>

<style lang="scss" scoped>
.topBar {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: var(--top-bar-height);
    border-bottom: 1px solid #e5e5e5;
    align-items: center;
    padding: 0px 16px;
    flex-shrink: 0;
    .item {
        margin: 0px 10px;
        cursor: pointer;
        &:last-of-type {
            margin-right: 10px;
        }
    }
}
</style>
