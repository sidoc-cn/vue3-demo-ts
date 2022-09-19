<template>
    <div class="index-save">
        <el-form ref="ruleFormRef" :model="formData" :rules="formRules" label-width="120px" class="demo-ruleForm">
            <el-form-item label="字符长度" prop="name">
                <el-input v-model="formData.name" clearable />
            </el-form-item>
            <el-form-item label="数字" prop="number">
                <el-input v-model.number="formData.age" clearable />
            </el-form-item>
        </el-form>

        <el-button v-auth="'save'" class="save" @click="save()">保存</el-button>
    </div>
</template>

<script lang="ts" setup>
import { FormRules } from "element-plus";
import { FormData, sendMapping } from "./IndexSave";

const formData = reactive<FormData>({
    name: "",
    age: 0,
});

const formRules = reactive<FormRules>({
    name: [
        { required: true, message: "请输入", trigger: "blur" },
        { min: 3, max: 5, message: "请输入3到5个字符", trigger: "blur" },
    ],
    number: [
        { required: true, message: "请输入" },
        { type: "number", message: "请输入数字" },
    ],
});

onMounted(() => {
    console.log("1");
});

const save = () => {
    let params = sendMapping(formData);
    httpGet<string>(ServerType.Main, {
        url: "/test",
        params: params,
    }).then((data: string) => {
        console.log(data);
    });
};
</script>

<style lang="scss" scoped></style>
