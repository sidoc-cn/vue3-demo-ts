export type DialogOptions = {
    /**
     * 标题
     */
    title: string;

    /**
     * 导入模板下载接口URL
     */
    templateUr: string;

    /**
     * 导入文件接口URL
     */
    uploadUrl: string;

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
};

import { createApp } from "vue";
import Dialog from "./DialogFilePreview.vue";

const dialog = (options: DialogOptions): Promise<() => void> => {
    return new Promise((resolve, reject) => {
        // 卸载组件
        const unmount = () => {
            instance.unmount();
            document.body.removeChild(container);
        };

        // createApp方法创建一个组件实例，参数二传递给根组件的props数据
        const instance = createApp(Dialog, {
            ...options,
            onConfirm: (done: () => void) => {
                resolve(done);
            },
            onCancel: () => {
                unmount();
                // reject(new Error(""));
            },
            unmount: unmount,
        });

        // 创建一个挂载容器
        const container = document.createElement("div");
        container.className = "global-dialog-container";
        document.body.appendChild(container);

        // 将组件挂载到container下，挂载会使container节点下的原有内容全部被清空，因此要创建一个空节点来挂载组件
        instance.mount(container);
    });
};
export default dialog;
