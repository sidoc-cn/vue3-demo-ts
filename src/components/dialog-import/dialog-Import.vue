<template>
    <div class="importFileDialog" ref="importFileDialog">
        <div v-if="!showFail" class="body" ref="body">
            <div class="titleBar">
                {{ title }}
                <i class="close el-icon-close" @click="close"></i>
            </div>
            <div class="content">
                <div class="title">
                    · 第一步：下载导入模板；
                    <el-button type="primary" size="mini" @click="downLoad">下载</el-button>
                </div>
                <div class="title">· 第二步：根据下载模板内容提示进行填写；</div>
                <div class="title">
                    · 第三步：上传已填写的模板文件。
                    <el-upload
                        class="upload-common"
                        :action="''"
                        :with-credentials="true"
                        :accept="['.xls', '.xlsx']"
                        :auto-upload="false"
                        :on-preview="preview"
                        :on-remove="remove"
                        ref="upload"
                        :limit="1"
                        :on-change="clickChange"
                        :file-list="fileList"
                    >
                        <el-button v-if="files.length < 1" type="primary" style="background-color: #29b3ff" class="reset" size="mini">
                            上传
                        </el-button>
                    </el-upload>
                </div>
                <div class="remark">
                    <div>{{ remark === "" ? "提示：单次上传上限10000条数据。" : "" }}</div>
                </div>
            </div>

            <div class="operation">
                <el-button @click="close" size="mini">取消</el-button>
                <el-button type="primary" @click="submitFile" :loading="isSubmitting" size="mini">确定</el-button>
            </div>
        </div>
        <div v-if="showFail" class="body" ref="body">
            <div class="titleBar">
                提示
                <i class="close el-icon-close" @click="close"></i>
            </div>
            <div class="content">
                <div class="content-tips">导入失败，存在问题如下：</div>
                <div v-for="(item, index) in failData" :key="index" class="title-fail">
                    <span>·</span>
                    {{ item }}
                </div>
            </div>

            <div class="operation">
                <el-button type="primary" @click="close" size="mini">关闭</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { get, put, post, postForm, customize, deleteRquest } from "../../../service/http";
import store from "@/store";
export default {
    name: "importFileDialog",
    data() {
        return {
            isSubmitting: false,
            visible: false,
            title: "",
            remark: "",
            templateUrl: "",
            uploadUrl: "",
            params: {},
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            promiseStatus: null,
            fileList: [],
            files: [],
            showFail: false,
            failData: [],
        };
    },
    mounted() {},
    methods: {
        // 下载模板
        downLoad() {
            console.log(this.templateUrl + "?token=" + store.getters.token);
            window.open(this.templateUrl + "?token=" + store.getters.token);
        },
        // 文件preview
        preview(file) {
            console.log(file);
        },
        // 文件remove
        remove(file, list) {
            this.files = list;
        },
        clickChange(file, list) {
            this.files = list;
        },
        // 提交
        submitFile() {
            // this.fileList
            let formData = new FormData();
            console.log(this.files);
            formData.append("file", this.files[0].raw);
            if (this.params.type === 1) {
                formData.append("examId", this.params.examId);
            }
            const upload = (cab) => post(this.uploadUrl, cab);
            this.isSubmitting = true;
            upload(formData).then((res) => {
                if (res.code === 0) {
                    this.isSubmitting = false;
                    if (res.success) {
                        this.$message.success("导入成功，共计" + res.data + "条！");
                        this.close("confirm");
                    } else {
                        // this.closeImp()
                        this.failData = res.data;
                        this.showFail = true;
                    }
                }
            });
        },
        // 显示弹框
        show() {
            this.visible = true;
            return new Promise((resolve, reject) => {
                this.promiseStatus = { resolve, reject };
            }).then((result) => {
                return this.closeImp;
            });
        },
        // 关闭弹框
        close(val) {
            if ((val = "confirm")) {
                this.promiseStatus && this.promiseStatus.resolve();
            } else {
                this.closeImp();
            }
        },
        // 关闭弹框 - 实现
        closeImp() {
            this.visible = false;
        },
    },
    watch: {
        visible() {
            if (this.visible) {
                setTimeout(() => {
                    this.$refs.importFileDialog.setAttribute("class", "importFileDialog importFileDialogShow");
                    this.$refs.body.setAttribute("class", "body bodyShow");
                }, 0);
            } else {
                setTimeout(() => {
                    this.$refs.importFileDialog.setAttribute("class", "importFileDialog");
                    this.$refs.body.setAttribute("class", "body");
                    setTimeout(() => {
                        this.$el.remove();
                    }, 150);
                }, 0);
            }
        },
    },
};
</script>

<style scoped>
.importFileDialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    background: rgba(0, 0, 0, 0.383);
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: all 200ms;
}
.importFileDialogShow {
    opacity: 1;
}
.upload-common {
    display: flex;
    align-items: center;
}
.upload-common /deep/ .el-upload-list__item:first-child {
    margin-top: 0px;
}
/deep/ .el-upload-list__item-name {
    color: #409eff;
}
.importFileDialog .body {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    overflow: hidden;

    opacity: 0;
    margin-top: -200px;
    transition: all 200ms;
}
.bodyShow {
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
    margin-bottom: 32px;
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

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    color: #3c4353;
    margin: 0px 41px;
    min-width: 600px;
}
.content .title {
    font-size: 15px;
    margin-top: 30px;
    font-weight: bold;
    color: #3c4353;
    display: flex;
    align-items: center;
}
.content .content-tips {
    text-align: center;
}
.content .title-fail {
    font-size: 13px;
    margin-top: 6px;
    font-weight: 500;
    color: #3c4353;
    display: flex;
    align-items: center;
    width: 600px;
    line-height: 22px;
}
.content .title-fail span {
    font-weight: bold;
}
.content .remark {
    font-size: 12px;
    font-weight: normal;
    color: #838a9b;
    margin-top: 10px;
}
.content div.button {
    text-align: center;
    margin-top: 37px;
}
.content div.button > * {
    margin: 0px 15px;
}

/* 底部操作按钮 */
.operation {
    padding: 0px 85px;
    display: flex;
    justify-content: center;
    margin-top: 72px;
    margin-bottom: 40px;
}
.operation > button {
    margin: 0px 15px;
    width: 100px;
}
</style>
