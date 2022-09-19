<template>
    <div class="index">
        <tabs>
            <tabs-item path="/form/Form">表单验证</tabs-item>
            <tabs-item path="/form/Password">密码验证(自定义验证)</tabs-item>
            <tabs-item path="/form/Plugin">下拉封装</tabs-item>
            <tabs-item path="/form/uploadAndDownload">上传/下载/预览</tabs-item>
        </tabs>

        <router-view class="content"></router-view>
    </div>
</template>

<style lang="scss" scoped>
.index {
    flex-direction: column;
    .content {
        flex-grow: 1;
    }
}
</style>
