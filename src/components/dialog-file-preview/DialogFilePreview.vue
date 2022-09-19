<template>
    <div class="confirmDialog" ref="confirmDialog">
        <div class="body" ref="body">
            <div class="titleBar">
                {{ title }}
                <i class="close el-icon-close" @click="close"></i>
            </div>
            <iframe class="content" :src="env.VUE_APP_BUSINESS_URL + url"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "confirmDialog",
    data() {
        return {
            env: process.env,

            visible: false,
            title: "",
            url: "",
            fileType: "",

            promiseStatus: null,
        };
    },
    created() {
        // let params = this.url.split("fileName=").pop();
        // let fileName = params.split("&")[0];
        // this.type = fileName.split(".").pop();
    },
    mounted() {},
    methods: {
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
            if (val === "confirm") {
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
                    this.$refs.confirmDialog.setAttribute("class", "confirmDialog confirmDialogShow");
                    this.$refs.body.setAttribute("class", "body bodyShow");
                }, 0);
            } else {
                setTimeout(() => {
                    this.$refs.confirmDialog.setAttribute("class", "confirmDialog");
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
.confirmDialog {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    background: rgba(0, 0, 0, 0.383);
    z-index: 3000;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: all 200ms;
}
.confirmDialogShow {
    opacity: 1;
}

.confirmDialog .body {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    width: 80%;
    max-width: 1200px;
    height: 90%;

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
    flex-grow: 1;
}
</style>
