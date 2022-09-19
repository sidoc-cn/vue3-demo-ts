<template>
    <div class="password">
        <div class="demo">
            <el-form ref="ruleFormRef" :model="formData" :rules="formRules" label-width="120px" class="demo-ruleForm" :size="formSize">
                <el-form-item label="密码规则" prop="password" @click="changeContent('password')">
                    <el-input type="password" placeholder="6-16英文+数字" show-password v-model="formData.password" clearable />
                </el-form-item>
                <el-form-item label="复杂密码规则" prop="password2" @click="changeContent('password2')">
                    <el-input type="password" placeholder="6-16英文+数字+特殊字符" show-password v-model="formData.password2" clearable />
                </el-form-item>
                <el-form-item label="再次输入密码" prop="password3" @click="changeContent('password3')">
                    <el-input type="password" placeholder="请确认密码" show-password v-model="formData.password3" clearable />
                </el-form-item>
            </el-form>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import type { FormRules, FormInstance } from "element-plus";
import regular from "@/service/regular";

// 引入md文件
import passwordmd from "./components/password.md";
import password2md from "./components/password2.md";

const ruleFormRef = ref<FormInstance>();
//  0.1> 配置表单的大小尺寸
const formSize = ref("default");

// 0.2> 表单数据
const formData = reactive({
    password: "",
    password2: "",
    password3: "",
});
// 自定义密码校验
const validatePass2 = (rule: any, value: string, callback: any) => {
    if (value === "") {
        return;
    } else if (value !== formData.password || formData.password2) {
        callback(new Error("两次密码输入不一致"));
    } else {
        callback();
    }
};

// 0.3> 表单验证规则
const formRules = reactive<FormRules>({
    password: [
        { pattern: regular.passwordA, trigger: "blur", message: "6-16数字+英文" },
        { required: false, message: "请输入" },
    ],
    password2: [
        { pattern: regular.passwordB, trigger: "blur", message: "6-16英文+数字+特殊字符" },
        { required: false, message: "请输入" },
    ],
    password3: [
        { required: true, message: "请确认密码", trigger: "blur" },
        { validator: validatePass2, trigger: "blur", required: true },
    ],
});

// 0.4> 切换
const markdownData = ref("");
const changeContent = (val: string): void => {
    switch (val) {
        case "password": {
            markdownData.value = passwordmd;
            break;
        }
        case "password2": {
            markdownData.value = password2md;
            break;
        }
        case "password3": {
            markdownData.value = "";
            break;
        }
    }
};
</script>

<style lang="scss" scoped>
.password {
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
