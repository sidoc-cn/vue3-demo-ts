<template>
    <el-dialog
        v-model="visible"
        :destroy-on-close="true"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :show-close="false"
        :width="props.options.width"
        :draggable="props.options.draggable?.value !== undefined ? props.options.draggable?.value : true"
    >
        <!-- 自定义头部 -->
        <template #header>
            <div class="title-bar">
                <div class="title">{{ props.options.title }}</div>

                <!-- 可定义子标题 -->
                <slot name="title-sub"></slot>

                <el-icon class="close"><CloseBold /></el-icon>
            </div>
        </template>

        <!-- 自定义内容 -->
        <slot></slot>

        <!-- 自定义底部 -->
        <template #footer>
            <slot name="dialog-footer">
                <!-- 如下为具名插槽默认内容 -->
                <el-button @click="visible = false">Cancel</el-button>
                <el-button type="primary" @click="confirm()">Confirm</el-button>
            </slot>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { Ref } from "vue";

// Vue3 defineProps 暂时尚未支持从外部导入interface类型，因此需要在当前页面中声明，详见：https://segmentfault.com/q/1010000042014549
export interface DialogProps {
    /**
     * 标题
     */
    title: string;

    /**
     * 是否显示弹框
     */
    visible: Ref<boolean>;

    /**
     * 弹框宽度，默认为auto
     */
    width?: string;

    /**
     * 是否允许拖动弹框
     */
    draggable?: Ref<boolean>;

    /**
     * 确认回调
     */
    // eslint-disable-next-line no-unused-vars
    beforeClose?: (done: () => void) => void;
}

// 1.0> props接参，并配置默认值
const props = withDefaults(
    defineProps<{
        options: DialogProps;
    }>(),
    {
        options: (): DialogProps => {
            return {
                title: "标题",
                visible: ref(false),
                width: "auto",
                draggable: ref(false),
            };
        },
    },
);

// 2.0> 浅拷贝props变量
const visible = shallowRef(props.options.visible);

// 3.0> dialog关闭前回调
const confirm = () => {
    if (props.options.beforeClose) {
        props.options.beforeClose(() => {
            visible.value = false;
        });
    }
};
</script>

<style lang="scss" scoped>
.title-bar {
    display: flex;
    flex-direction: row;
    .title {
        font-weight: bold;
        margin-right: auto;
    }
    .close {
    }
}
</style>
