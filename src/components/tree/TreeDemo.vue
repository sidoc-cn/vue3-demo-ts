<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
import { defineEmits, onMounted } from "vue";

interface Tree {
    label: string;
    value: number | string;
    children?: Tree[];
}

const data: Tree[] = [
    {
        label: "周一不开心",
        value: "1",
        children: [
            {
                label: "不开心1",
                value: "1-1",
                children: [
                    {
                        label: "不开心1-1",
                        value: "1-1-1",
                    },
                ],
            },
            {
                label: "不开心2",
                value: "1-2",
                children: [
                    {
                        label: "不开心2-1",
                        value: "1-2-1",
                    },
                ],
            },
            {
                label: "开心3",
                value: "1-3",
                children: [
                    {
                        label: "开心1-3-1",
                        value: "1-3-1",
                        children: [
                            {
                                label: "开心1-3-2",
                                value: "1-3-2",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
const defaultProps = {
    children: "children",
    label: "label",
};
// 定义emit
const emit = defineEmits(["update:treeName"]);

const handleNodeClick = (data: Tree) => {
    console.log(data.value);
    emit("update:treeName", data.value);
};
// 请求接口
onMounted(() => {
    //请求接口获取数据
});
</script>
