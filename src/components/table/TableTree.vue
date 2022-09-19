<template>
    <!-- {{router.path}} -->
    <div v-auth="props.path" class="item" :class="{ active: props.path === router.currentRoute.value.path }" @click="clickEvent">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps(["path"]);
const clickEvent = () => {
    router.push(props.path);
};

onMounted(() => {
    // 当前路由路径名称
    // console.log(router.currentRoute.value.path)
});
</script>

<style lang="scss" scoped>
.item {
    padding: 10px;
    cursor: pointer;
    &:hover {
        color: red;
    }
    &.active {
        color: blue;
    }
}
</style>
