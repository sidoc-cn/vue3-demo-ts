<template>
    <el-upload
        v-model:file-list="fileList"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
    >
        <el-button type="primary">Click to upload</el-button>
    </el-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
    console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
    console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length} totally`,
    );
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(`Cancel the transfert of ${uploadFile.name} ?`).then(
        () => true,
        () => false,
    );
};
</script>

<style lang="scss" scoped></style>
