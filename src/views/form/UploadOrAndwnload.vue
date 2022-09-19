<template>
    <div class="uploadAndDownload">
        <div class="demo">
            <el-form ref="ruleFormRef" :model="formData" :rules="formRules" label-width="120px" class="demo-ruleForm" :size="formSize">
                <el-form-item label="文件上传" prop="">
                    <up-load-file></up-load-file>
                </el-form-item>
                <el-form-item label="文件下载" prop="">
                    <el-button @click="downloadFile">Click to download</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { FormRules } from "element-plus";
import axios from "axios";

//  0.1> 配置表单的大小尺寸
const formSize = ref("default");

// 0.2> 表单数据
const formData = reactive({});

// 0.3> 表单验证规则
const formRules = reactive<FormRules>({});

const downloadFile = () => {
    axios.get("http://localhost:8888/docs-files/guide/doc/vue3-doc.rar", { responseType: "blob" }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.rar");
        document.body.appendChild(link);
        link.click();
    });
};
</script>

<style lang="scss" scoped>
.uploadAndDownload {
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
