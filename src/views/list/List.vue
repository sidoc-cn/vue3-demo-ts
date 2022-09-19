<template>
    <div class="list">
        <el-row>
            <el-col :span="20">
                <el-form ref="ruleFormRef" :model="listForm" :rules="listFormRules" class="list-form">
                    <el-form-item prop="name" label-width="80px">
                        <el-input v-model="listForm.name" clearable placeholder="请输入名字" class="input" />
                    </el-form-item>
                    <el-form-item class="btn">
                        <el-button @click="search(ruleFormRef)" type="primary">搜索</el-button>
                        <el-button @click="resetForm(ruleFormRef)" type="success">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <div class="table-list">
            <el-table :data="tableData" border stripe empty-text="暂无更多数据">
                <el-table-column type="index" />
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" width="300" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <div class="text">总共{{ total }}条数据</div>
                <div>
                    <el-pagination
                        v-model:currentPage="currentPage"
                        v-model:page-size="pageSize"
                        :page-sizes="[15, 30, 50, 70]"
                        :small="small"
                        :disabled="disabled"
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        v-model:total="total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const listForm = reactive({
    name: "",
});

const ruleFormRef = ref<FormInstance>();

const listFormRules = reactive<FormRules>({
    name: [{ required: true, message: "请输入要搜索的用户名", trigger: "blur" }],
});

const search = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            console.log(`搜索${listForm.name}`);
        }
    });
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

interface User {
    date: string;
    name: string;
    address: string;
}
const tableData: User[] = [
    {
        date: "2022-05-03",
        name: "小明",
        address: "上海市",
    },
    {
        date: "2022-05-02",
        name: "小花",
        address: "西安市",
    },
    {
        date: "2022-05-04",
        name: "小虎",
        address: "深圳市",
    },
    {
        date: "2022-05-01",
        name: "小小",
        address: "北京天安门",
    },
    {
        date: "2022-07-04",
        name: "小七",
        address: "云南",
    },
    {
        date: "2022-07-07",
        name: "小木",
        address: "黑龙江",
    },
];

const handleEdit = (index: number, row: User) => {
    console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
    console.log(index, row);
};

const currentPage = ref(1);
const pageSize = ref(15);
const total = ref(400);
const small = ref(true);
const disabled = ref(false);
const handleSizeChange = (val: number) => {
    console.log(`${val} 选择项目页数`);
};
const handleCurrentChange = (val: number) => {
    console.log(`当前页: ${val}`);
};
</script>

<style lang="scss" scoped>
.list-form {
    margin-top: 15px;
    display: flex;
    .input {
        width: 180px;
        margin: 0 10px 0 -70px;
    }
    .btn {
        cursor: pointer;
    }
}

.table-list {
    margin-left: 20px;

    .pagination {
        margin-top: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text {
            font-size: 14px;
            color: #767272;
        }
    }
}
:deep() .el-form-item__error {
    left: -70px;
}
</style>
