<template>
    <el-table :data="tableData" height="300" style="width: 100%" border>
        <template v-for="(item, index) in tableHeader" :key="index">
            <el-table
                :prop="item.prop"
                :label="item.label"
                :align="item.align || 'center'"
                :show-overflow-tooltip="item.overHidden || false"
                :min-width="item.minWidth || '100px'"
                :sortable="item.sortable || false"
                :type="item.type || 'normal'"
                :fixed="item.fixed"
                :width="item.width || ''"
            ></el-table>
        </template>

        <!-- 自定义列 按钮 -->
        <el-table-column fixed="right" label="操作" :width="operateWidth" v-if="isOperate">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div class="pagination">
        <el-pagination
            background
            :small="small"
            :page-sizes="pageSizesArr"
            :layout="layout"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        ></el-pagination>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, onMounted, ref } from "vue";

const emits = defineEmits(["handleSizeChange", "handleCurrentChange", "handleChangeSwitchStatus"]);
// 操作列 编辑
const handleEdit = (index: number, row: unknown) => {
    console.log(row);
};
// 操作列 删除
const handleDelete = (index: number, row: unknown) => {
    console.log(row);
};

//  页数改变的时候触发的事件
const handleSizeChange = (val: number) => {
    emits("handleSizeChange", val);
};
//  当前页改变的时候触发的事件
const handleCurrentChange = (val: number) => {
    emits("handleCurrentChange", val);
};
const small = ref(true);

const props = defineProps({
    // 表格显示的数据
    tableData: {
        type: Array,
        default: function () {
            return [];
        },
    },
    // 表头数据
    tableHeader: {
        type: Array,
        default: function () {
            return [];
        },
    },
    // 控制操作列是否显示
    isOperate: {
        type: Boolean,
        default: function () {
            return false;
        },
    },
    operateWidth: {
        type: Number,
        default: () => 200,
    },
    // 总页数
    total: {
        type: Number,
        // 必传类型
        required: true,
        default: 0,
    },

    // 分页的页容量数组
    pageSizesArr: {
        type: Array,
        default() {
            return [10, 20, 30, 50];
        },
    },
    // 分页的布局
    layout: {
        type: String,
        default: "total, sizes, prev, pager, next, jumper",
    },
});

onMounted(() => {
    console.log("输出😂", props.tableData);
    console.log("表格", props.tableData, props.tableHeader, props.isOperate);
    console.log("页容量", props.total);
});
</script>

<style lang="scss" scoped></style>
