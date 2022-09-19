<template>
    <div class="confirm-dialog" ref="refConfirmDialog">
        <div class="titleBar">
            {{ props.title }}
            <i class="close el-icon-close" @click="cancel()"></i>
        </div>
        <div class="content" v-html="props.content"></div>
        <div class="remark" v-if="props.remark">{{ props.remark }}</div>

        <div class="operation">
            <el-button @click="cancel()">{{ props.confirmButtonText || "取消" }}</el-button>
            <el-button type="primary" @click="confirm()">
                {{ props.confirmButtonText || "确定" }}
            </el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
export type DialogProps = {
    /**
     * 标题
     */
    title: string;

    /**
     * 内容
     */
    content: string;

    /**
     * 备注
     */
    remark?: string;

    /**
     * 确定按钮名称，默认为“确定”
     */
    confirmButtonText?: string;

    /**
     * 取消按钮名称，默认为"取消"
     */
    cancelButtonText?: string;

    /**
     * 确认回调
     */
    onConfirm: (done: () => void) => void;

    /**
     * 取消回调
     */
    onCancel: () => void;

    unmount: () => void;
};

const visible = ref(false);
const props = defineProps<DialogProps>();
const refConfirmDialog = ref(null);

// 1.0> 确认 ----------------------------------------------------------------------------
const confirm = () => {
    props.onConfirm(() => {
        visible.value = false;
        setTimeout(() => {
            props.unmount();
        }, 200);
    });
};
// 1.1> 取消 ----------------------------------------------------------------------------
const cancel = () => {
    visible.value = false;
    setTimeout(() => {
        props.onCancel();
    }, 200);
};

// 2.0> 监听visible --------------------------------------------------------------------------
watch(visible, () => {
    setTimeout(() => {
        if (refConfirmDialog && refConfirmDialog.value && (refConfirmDialog.value as HTMLElement).parentNode) {
            let dialog = refConfirmDialog.value as HTMLElement;
            let container = dialog.parentNode as HTMLElement;
            if (visible.value) {
                dialog.setAttribute("class", "confirm-dialog confirm-dialog-show");
                container.setAttribute("class", "global-dialog-container global-dialog-container-show");
            } else {
                dialog.setAttribute("class", "confirm-dialog");
                container.setAttribute("class", "global-dialog-container");
            }
        }
    }, 0);
});

// 3.0> 显示dialog ---------------------------------------------------------------------------
visible.value = true;
</script>

<style lang="scss" scoped>
.confirm-dialog {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    overflow: hidden;

    opacity: 0;
    margin-top: -200px;
    transition: all 200ms;
}
.confirm-dialog-show {
    opacity: 1 !important;
    margin-top: 0px !important;
}

.titleBar {
    display: flex;
    font-family: MicrosoftYaHei-Bold;
    font-weight: bold;
    font-size: 16px;
    color: #3c4353;
    background-color: #efefef;
    padding-top: 13px;
    padding-bottom: 17px;
    padding-left: 17px;
    padding-right: 17px;
    margin-bottom: 41px;
}
.titleBar > .close {
    font-size: 20px;
    font-weight: bold;
    margin-left: auto;
    color: #909399;
    cursor: pointer;
}
.titleBar > .close:hover {
    color: #409eff;
}

.content,
.remark {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    color: #3c4353;
    padding: 0px 32px;
    width: 520px;
    flex-wrap: wrap;
}
.remark {
    margin-top: 27px;
    font-weight: normal;
    font-size: 12px;
    color: #838a9b;
}

/* 底部操作按钮 */
.operation {
    padding: 0px 85px;
    display: flex;
    justify-content: center;
    margin-top: 57px;
    margin-bottom: 40px;
}
.operation > button {
    margin: 0px 15px;
    width: 100px;
}
</style>
