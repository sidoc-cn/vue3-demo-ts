import Vue from "vue";
import importFileDialog from "./importFileDialog.vue";

// 创建Vue类
let ImportFileDialog = Vue.extend(importFileDialog);

export default (option) => {
    let instance = new ImportFileDialog({ data: option }).$mount();

    document.body.appendChild(instance.$el);

    return instance.show();
};
