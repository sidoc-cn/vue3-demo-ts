<template>
    <div class="plugin">
        <div class="demo">
            <div>
                下拉框的值:{{ formData.select }} 联动框的值:{{ formData.cascader }} 树形结构的值:{{ treeName }} 树形下拉的值:{{
                    formData.tree
                }}
            </div>
            <el-form ref="ruleFormRef" :model="formData" label-width="120px" class="demo-ruleForm">
                <el-form-item label="下拉框">
                    <select-demo v-model="formData.select" />
                </el-form-item>
                <el-form-item label="联动框">
                    {{ formData.cascader }}
                    <cascader-area v-model="formData.cascader" clearable />
                    <!-- <cascader-demo v-model="formData.cascader" clearable /> -->
                </el-form-item>
                <el-form-item label="树形结构">
                    <TreeDemo v-model:treeName="treeName" @changClick="changClick" />
                </el-form-item>
                <el-form-item label="树形选择">
                    <select-tree-demo v-model="formData.tree" :showBox="showBox" :multiple="multiple" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">验证</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";

const formData = reactive({
    select: 0,
    cascader: [],
    tree: "",
});
const treeName = ref("");

setTimeout(() => {
    formData.select = 2;
    formData.cascader = [3, 51044, 55573];
}, 2000);

// 树形选择框
const showBox = ref(true);
const multiple = ref(true);
const onSubmit = () => {
    console.log(formData);
    console.log(treeName.value);
};

const changClick = (data) => {
    console.log(data);
};
</script>

<style lang="scss" scoped>
.plugin {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .demo {
        margin-top: 10px;
        width: 360px;
        padding-right: 20px;
        border-right: solid rgb(206, 206, 206) 1px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .el-form {
            .el-form-item--default {
                margin-bottom: 28px;
                :deep(.el-form-item__label) {
                    cursor: pointer;
                }
            }
        }
    }
    .code {
        flex-grow: 1;
    }
}
</style>
