/**
 * Author: YANGWW - Mackbook Pro 16
 * Date: 2022-08-23 13:40:09
 * LastEditors: YANGWW - Mackbook Pro 16 512113110@qq.com
 * LastEditTime: 2022-09-05 15:30:26
 * Description: Message消息提示
 */

import { ElMessage } from "element-plus";

const messageError = (msg: string) => {
    ElMessage.error(msg);
};

const messageSuccess = (msg: string) => {
    ElMessage.success(msg);
};

const messageWarning = (msg: string) => {
    ElMessage.warning(msg);
};

const messageInfo = (msg: string) => {
    ElMessage.info(msg);
};

//! 通过如下方式直接导出函数，这样在全局自动按需引入后，就可以直接进行调用
export { messageError, messageSuccess, messageWarning, messageInfo };
