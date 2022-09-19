<template>
    <div class="tools func">
        <div class="list">
            <div
                class="item"
                :class="{ active: activeName === item }"
                @click="itemClick(item)"
                v-for="(item, index) in toolList"
                :key="index"
            >
                <div class="name">{{ item }}</div>
            </div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
const markdownData = ref("");
const activeName = ref("window全局方法");

const toolList: Array<string> = reactive([
    "window全局方法",
    "Array原型方法",
    "Date原型方法",
    "Number原型方法",
    "Object原型方法",
    "String原型方法",
]);

const itemClick = (item: string) => {
    activeName.value = item;
    switch (activeName.value) {
        case "window全局方法": {
            import("./utils/1.Window.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Array原型方法": {
            import("./utils/2.ArrayPrototype.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Date原型方法": {
            import("./utils/3.DatePrototype.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Number原型方法": {
            import("./utils/4.NumberPrototype.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Object原型方法": {
            import("./utils/5.ObjectPrototype.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "String原型方法": {
            import("./utils/6.StringPrototype.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
    }
};
onMounted(() => {
    itemClick(toolList[0]);
});
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";
</style>
