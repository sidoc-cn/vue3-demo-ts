<template>
    <el-tree-select
        v-model="value"
        :data="treeData"
        check-strictly
        :render-after-expand="false"
        :show-checkbox="showBox"
        :multiple="multiple"
        check-on-click-node
    />
</template>

<script lang="ts" setup>
export interface TreeNode {
    name: string;
    pid: number;
    children?: [];
}

let fatherInfo = defineProps({
    showBox: {
        type: Boolean,
        default: true,
    },
    multiple: {
        type: Boolean,
        default: true,
    },
});

const value = ref();
const treeData = reactive<Array<TreeNode>>([]);

// 定义emit
// const emit = defineEmits(["update:formData.tree"]);
//监听事件
watch(value, (newValue) => {
    // emit("update:formData.tree", newValue);
});
// 请求接口
onMounted(() => {
    httpGet<Array<TreeNode>>(ServerType.Null, {
        url: "/api-mock/tree.json",
        params: {},
    }).then((data: Array<TreeNode>) => {
        treeData.length = 0;
        treeData.push(...data);
    });
});
</script>
