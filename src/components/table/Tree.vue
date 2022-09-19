<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
interface Tree {
    label: string;
    children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
    console.log(data);
};

const data: Tree[] = [
    {
        label: "一级",
        children: [
            {
                label: "1-1",
                children: [
                    {
                        label: "1-1-1",
                    },
                ],
            },
        ],
    },
    {
        label: "二级",
        children: [
            {
                label: "2-1",
                children: [
                    {
                        label: "2-1-1",
                    },
                ],
            },
            {
                label: "2-2",
                children: [
                    {
                        label: "2-2-1",
                    },
                ],
            },
        ],
    },
    {
        label: "三级",
        children: [
            {
                label: "3-1",
                children: [
                    {
                        label: "3-1-1",
                    },
                ],
            },
            {
                label: "3-2",
                children: [
                    {
                        label: "3-2-1",
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
</script>
