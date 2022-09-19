<template>
    <div class="_404">
        <div class="title">404</div>
        <pre class="des">页面被妖怪偷走了~</pre>
        <el-link type="primary" @click="toHome">返回首页</el-link>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const toHome = () => {
    router.replace("/");
};
</script>

<style lang="scss" scoped>
._404 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .title {
        font-size: 800%;
    }
    .des {
        font-size: 200%;
    }
}
</style>
