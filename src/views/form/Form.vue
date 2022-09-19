<template>
    <div class="form">
        <div class="demo">
            <el-form ref="ruleFormRef" :model="formData" :rules="formRules" label-width="120px" class="demo-ruleForm" :size="formSize">
                <el-form-item label="字符长度" prop="name" @click="changeContent('name')">
                    <el-input v-model="formData.name" clearable />
                </el-form-item>
                <el-form-item label="数字" prop="number" @click="changeContent('number')">
                    <el-input v-model.number="formData.number" clearable />
                </el-form-item>
                <el-form-item label="身份证号" prop="prosonId" @click="changeContent('prosonId')">
                    <el-input v-model="formData.prosonId" clearable />
                </el-form-item>
                <el-form-item label="手机号" prop="phone" @click="changeContent('phone')">
                    <el-input v-model="formData.phone" clearable />
                </el-form-item>
                <el-form-item label="邮箱" prop="email" @click="changeContent('email')">
                    <el-input v-model="formData.email" clearable />
                </el-form-item>
                <el-form-item label="url" prop="url" @click="changeContent('url')">
                    <el-input v-model="formData.url" clearable />
                </el-form-item>
                <el-form-item label="邮编" prop="postCode" @click="changeContent('postCode')">
                    <el-input v-model="formData.postCode" clearable />
                </el-form-item>
                <el-form-item label="IPV4" prop="IPv4" @click="changeContent('IPv4')">
                    <el-input v-model="formData.IPv4" clearable />
                </el-form-item>
                <el-form-item label="纯汉字" prop="ChineseCharacter" @click="changeContent('ChineseCharacter')">
                    <el-input v-model="formData.ChineseCharacter" clearable />
                </el-form-item>
                <el-form-item label="车牌号" prop="plateNum" @click="changeContent('plateNum')">
                    <el-input v-model="formData.plateNum" clearable />
                </el-form-item>
                <el-form-item label="小数" prop="decimal" @click="changeContent('decimal')">
                    <el-input v-model="formData.decimal" clearable />
                </el-form-item>
            </el-form>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import type { FormRules } from "element-plus";
import regular from "@/service/regular";

// 引入md文件
import namemd from "./components/name.md";
import numbermd from "./components/number.md";
import peosonIdmd from "./components/proson-id.md";
import phonemd from "./components/phone.md";
import emailmd from "./components/email.md";
import urlmd from "./components/url.md";
import postCodemd from "./components/post-code.md";
import IPmd from "./components/IP.md";
import ChineseCharactermd from "./components/chinese-character.md";
import plateNummd from "./components/plate-num.md";
import decimalmd from "./components/decimal.md";

//  0.1> 配置表单的大小尺寸
const formSize = ref("default");

// 0.2> 表单数据
const formData = reactive({
    name: "",
    number: "",
    prosonId: "",
    phone: "",
    email: "",
    url: "",
    postCode: "",
    IPv4: "",
    ChineseCharacter: "",
    plateNum: "",
    decimal: "",
});

// 0.3> 表单验证规则
const formRules = reactive<FormRules>({
    name: [
        { required: true, message: "请输入", trigger: "blur" },
        { min: 3, max: 5, message: "请输入3到5个字符", trigger: "blur" },
    ],
    number: [
        { required: true, message: "请输入" },
        { type: "number", message: "请输入数字" },
    ],
    prosonId: [
        { pattern: regular.idCard, trigger: "blur", message: "请输入正确的身份证号" },
        { required: true, message: "请选择", trigger: "blur" },
    ],
    phone: [
        { required: true, message: "请选择", trigger: "blur" },
        { pattern: regular.phone, message: "请输入正确的手机号", trigger: "blur" },
    ],
    email: [
        { required: true, message: "请输入" },
        { type: "email", message: "请输入正确的邮箱", trigger: "blur" },
    ],
    url: [
        { required: true, message: "请输入" },
        { type: "url", message: "请输入正确的url", trigger: "blur" },
    ],
    postCode: [
        { pattern: regular.postCode, trigger: "blur", message: "请输入正确的邮编" },
        { required: true, message: "请输入" },
    ],
    IPv4: [
        { pattern: regular.Ipv4, trigger: "blur", message: "请输入正确的IP" },
        { required: true, message: "请输入" },
    ],
    ChineseCharacter: [
        { pattern: regular.ChineseCharacter, trigger: "blur", message: "只能输入汉字" },
        { required: true, message: "请输入" },
    ],
    plateNum: [
        { pattern: regular.plateNum, trigger: "blur", message: "请输入正确的车牌号" },
        { required: true, message: "请输入" },
    ],
    decimal: [
        { pattern: regular.decimal, trigger: "blur", message: "请输入小数，保留小数点后两位" },
        { required: true, message: "请输入" },
    ],
});

// 0.4> 切换
const markdownData = ref("");
const changeContent = (val: string): void => {
    switch (val) {
        case "name": {
            markdownData.value = namemd;
            break;
        }
        case "number": {
            markdownData.value = numbermd;
            break;
        }
        case "prosonId": {
            markdownData.value = peosonIdmd;
            break;
        }
        case "phone": {
            markdownData.value = phonemd;
            break;
        }
        case "email": {
            markdownData.value = emailmd;
            break;
        }
        case "url": {
            markdownData.value = urlmd;
            break;
        }
        case "postCode": {
            markdownData.value = postCodemd;
            break;
        }
        case "IPv4": {
            markdownData.value = IPmd;
            break;
        }
        case "ChineseCharacter": {
            markdownData.value = ChineseCharactermd;
            break;
        }
        case "plateNum": {
            markdownData.value = plateNummd;
            break;
        }
        case "decimal": {
            markdownData.value = decimalmd;
            break;
        }
    }
};
</script>

<style lang="scss" scoped>
.form {
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
