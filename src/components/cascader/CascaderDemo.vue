<template>
    <el-cascader v-model="value" :options="options" :props="props" @expand-change="fatherClick" @change="hanldClick" />
</template>

<script lang="ts" setup>
import { defineEmits, onMounted, reactive } from "vue";
const value = reactive([]);
const options = reactive([]);
const props = {
    // 定义value
    value: "id",
    // 定义label
    label: "name",
    // 是否严格的遵守父子节点不互相关联
    checkStrictly: true,
};

// 定义emit
const emit = defineEmits(["update:formData.cascader"]);
// 除最后一层的选择
const fatherClick = (value: any) => {
    console.error(value);
};
// 最后一层的选择
const hanldClick = (value: any) => {
    emit("update:formData.cascader", value);
};
// 请求接口
onMounted(() => {
    //请求接口获取数据
});
</script>
