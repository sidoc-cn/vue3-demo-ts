<template>
    <div class="dialog">
        <div class="part">
            <div class="content">
                <el-button type="primary" @click="dialogConfig.visible.value = true">默认弹框(HTML)</el-button>
            </div>
        </div>

        <div class="part">
            <div class="content">
                <el-button type="primary">确认弹框</el-button>
            </div>
        </div>

        <div class="part">
            <div class="content">
                <el-button type="primary">表单弹框</el-button>
            </div>
        </div>

        <div class="part">
            <div class="content">
                <el-button type="primary">文件导入弹框</el-button>
            </div>
        </div>

        <div class="part">
            <div class="content">
                <el-button type="primary">文件预览弹框</el-button>
            </div>
        </div>

        <dialog-html :options="dialogConfig">
            sasfdsfsd
            <!-- <template #dialog-footer>ffff</template> -->
        </dialog-html>
    </div>
</template>

<script lang="ts" setup>
import { DialogProps } from "@/components/dialog-html/DialogHtml.vue";

// dialog配置
const dialogConfig: DialogProps = {
    title: "标题",
    visible: ref(false),
    width: "30%",
    beforeClose: (done: () => void) => {
        done();
    },
};
</script>

<style lang="scss" scoped>
.dialog {
    display: flex;
    flex-direction: column;
    padding: 20px;
    .part {
        margin-bottom: 20px;
    }
}
</style>
