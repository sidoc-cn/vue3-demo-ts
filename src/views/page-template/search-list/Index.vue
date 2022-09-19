<template>
    <div class="index">
        <!-- 搜索栏 -->
        <search-bar>
            <search-bar-left>
                <div class="item">
                    <div class="name">名称</div>
                    <el-input v-model="search.name" placeholder="请输入名称" clearable />
                </div>
                <div class="item">
                    <div class="name">用户</div>
                    <select-demo v-model="search.userId" all />
                </div>
                <el-button class="search" @click="loadData()">搜索</el-button>
            </search-bar-left>

            <search-bar-right>
                <el-button v-auth="'add'" class="add" @click="add()">添加</el-button>
                <el-button v-auth="'batch-delete'" class="delete">批量删除</el-button>
            </search-bar-right>
        </search-bar>

        <!-- 表格数据 -->
        <table-list :options="tableConfig">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column prop="id" label="ID" width="55" align="center" />
            <el-table-column prop="name" label="名称" align="center" />
            <el-table-column label="内容" align="center">
                <template #default="scope">
                    <el-popover placement="top" title="标题(选填)" :width="278" trigger="hover" :content="scope.row.content">
                        <template #reference>{{ scope.row.content._firstStr(7) }}</template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="120" align="center">
                <template #default>
                    <el-button v-auth="'edit'" class="edit">编辑</el-button>
                </template>
            </el-table-column>

            <template #footer-left>这是页脚插槽内容（表格左下角）</template>
        </table-list>
    </div>
</template>

<script lang="ts" setup>
import { TableListPagination, TableListProps } from "@/components/table-list/TableList.vue";
import { Search, DataType, Row, receiveMapping } from "./index";

// 1.0> 搜索 -----------------------------------------------------------------------------------
const search = reactive<Search>({
    name: "",
    userId: -1,
});

// 2.0> 数据 ------------------------------------------------------------------------------------
const tableConfig: TableListProps<Row> = {
    data: reactive<Array<Row>>([]),
    loading: ref(false),
    pagination: {
        currentPage: 1,
        total: 40,
    },
    paginationChange: (p: TableListPagination) => {
        loadData();
        console.log(p);
    },
    selectionChange: (row: Array<Row>) => {
        console.log(row);
    },
};

onMounted(() => {
    loadData();
});

// 加载数据
const loadData = () => {
    tableConfig.loading && (tableConfig.loading.value = true);
    httpGet<DataType>(ServerType.Null, {
        url: "/api-mock/table-data.json",
        params: {},
    }).then((data: DataType) => {
        setTimeout(() => {
            tableConfig.data.length = 0; // 清空
            tableConfig.data.push(...receiveMapping(data.data)); // 重新赋值
            tableConfig.loading && (tableConfig.loading.value = false);
        }, 400);
    });
};

// 新增/编辑
const add = () => {
    debugger;
};
</script>

<style lang="scss" scoped>
.index {
    flex-direction: column;
}
</style>
