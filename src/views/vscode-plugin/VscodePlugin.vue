<template>
    <div class="plugin">
        <div class="pluginList">
            <div
                class="pluginItem"
                :class="{ active: activeName === item.name }"
                @click="itemClick(item.name)"
                v-for="(item, index) in pluginList"
                :key="index"
            >
                <img class="logo" :src="item.img" @error="errorImg" alt="" />
                <div class="content">
                    <div class="name">{{ item.name }}</div>
                    <div class="desc">{{ item.desc }}</div>
                </div>
            </div>
        </div>

        <markdown :data="markdownData"></markdown>
    </div>
</template>

<script lang="ts" setup>
import codeSettingsSync from "./vscode-plugin/1-code-settings-sync.md";
const markdownData = ref(codeSettingsSync);

const activeName = ref("Settings Sync");

const pluginList = reactive([
    {
        id: 1,
        img: require("../../assets/img/vscode-plugin/settings-sync/settings-sync.png"),
        name: "Settings Sync",
        desc: "VS Code配置同步",
    },
    {
        id: 2,
        img: require("../../assets/img/vscode-plugin/volar/volar.png"),
        name: "Vue Language Features (Volar)",
        desc: "Vue3语言功能",
    },
    {
        id: 3,
        img: require("../../assets/img/vscode-plugin/prettier-vscode/pp.png"),
        name: "prettier-vscode",
        desc: "代码美化",
    },
    {
        id: 4,
        img: require("../../assets/img/vscode-plugin/esLint/eslinylogo.png"),
        name: "ESLint",
        desc: "代码检测工具",
    },
    {
        id: 5,
        // 官网地址：https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env
        img: require("../../assets/img/vscode-plugin/env/env-logo.png"),
        name: "ENV",
        desc: ".env配置文件高亮",
    },
    {
        id: 6,
        img: require("../../assets/img/vscode-plugin/auto-close-tag/tag.png"),
        name: "Auto Close Tag",
        desc: "自动关闭标签",
    },
    {
        id: 7,
        img: require("../../assets/img/vscode-plugin/auto-rename-tag/rem.png"),
        name: "Auto Rename Tag",
        desc: "修改开始标签，结束标签自动更改",
    },
    {
        id: 8,
        img: require("../../assets/img/vscode-plugin/prettify-JSON/微信截图_20220822092646.png"),
        name: "Prettify JSON",
        desc: "美化JSON代码",
    },
    {
        id: 9,
        img: require("../../assets/img/vscode-plugin/wxss-peek/wxss-peek.png"),
        name: "wxss-peek",
        desc: "样式跳转到定义处",
    },
    {
        id: 10,
        img: require("../../assets/img/vscode-plugin/image-preview/image.png"),
        name: "Image preview",
        desc: "鼠标悬停在路径上，预览图片",
    },
    {
        id: 11,
        img: require("../../assets/img/vscode-plugin/chinese-simplified/chese.png"),
        name: "Chinese (Simplified) (简体中文)",
        desc: "为VS Code 提供中文界面",
    },
    {
        id: 12,
        img: require("../../assets/img/vscode-plugin/css-peek/css.png"),
        name: "CSS Peek",
        desc: "在HTML查看css样式",
    },
    {
        id: 13,
        img: require("../../assets/img/vscode-plugin/markdown-all-in-one/markdown.png"),
        name: "Markdown All in One",
        desc: "VS code 对markdown的支持",
    },
    {
        id: 14,
        img: require("../../assets/img/vscode-plugin/cssrem/cssrem.png"),
        name: "px to rem & rpx & vw (cssrem)",
        desc: "px转rem、rpx、vw",
    },
    {
        id: 15,
        img: require("../../assets/img/vscode-plugin/gitlens/gitlenslogo.png"),
        name: "GitLens",
        desc: "VS Code Git增强",
    },
    {
        id: 16,
        img: require("../../assets/img/vscode-plugin/minapp-vscode/wxml.png"),
        name: "WXML - Language Service",
        desc: "微信小程序.wxml文件语法高亮、智能补全",
    },
    {
        id: 17,
        img: require("../../assets/img/vscode-plugin/miniapp-helper/app.png"),
        name: "小程序开发助手",
        desc: "微信小程序代码提示、语法高亮",
    },
    {
        id: 18,
        img: require("../../assets/img/vscode-plugin/path-intellisense/path.png"),
        name: "Path Intellisense",
        desc: "文件路径自动提示",
    },
    {
        id: 19,
        img: require("../../assets/img/vscode-plugin/code-spell-checker/codeSpellChecker.png"),
        name: "Code Spell Checker",
        desc: "单词拼写错误检查",
    },
    {
        id: 20,
        img: require("../../assets/img/vscode-plugin/color-highlight/color-high.png"),
        name: "Color Highlight",
        desc: "在代码中显示颜色",
    },
    {
        id: 21,
        img: require("../../assets/img/vscode-plugin/intelliSense-for-CSS-class-names-in-HTML/intelliSense.png"),
        name: "IntelliSense for CSS class names in HTML",
        desc: "class类名或属性自动提示",
    },
    {
        id: 22,
        img: require("../../assets/img/vscode-plugin/better-comments/better-comments.png"),
        name: "Better Comments",
        desc: "注释优化，突显警报、信息、TODO等",
    },
    {
        id: 22,
        img: require("../../assets/img/vscode-plugin/better-comments/better-comments.png"),
        name: "Stylelint",
        desc: "vscode官网推出，被Vue官方推荐的强大的CSS代码检查工具，用于规范CSS代码，类似ESLint",
    },
]);

const itemClick = (item: string) => {
    activeName.value = item;
    switch (activeName.value) {
        case "Settings Sync": {
            import("./vscode-plugin/1-code-settings-sync.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Vue Language Features (Volar)": {
            import("./vscode-plugin/2-volar.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "prettier-vscode": {
            import("./vscode-plugin/3-prettier-vscode.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "ESLint": {
            import("./vscode-plugin/4-ESLint.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "ENV": {
            import("./vscode-plugin/5-ENV.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Auto Close Tag": {
            import("./vscode-plugin/6-auto-close-tag.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Auto Rename Tag": {
            import("./vscode-plugin/7-auto-rename-tag.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Prettify JSON": {
            import("./vscode-plugin/8-prettify-JSON.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "wxss-peek": {
            import("./vscode-plugin/9-wxss-peek.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Image preview": {
            import("./vscode-plugin/10-image-preview.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Chinese (Simplified) (简体中文)": {
            import("./vscode-plugin/11-chinese (Simplified) (简体中文).md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "CSS Peek": {
            import("./vscode-plugin/12-css-peek.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Markdown All in One": {
            import("./vscode-plugin/13-markdown-all-in-one.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "px to rem & rpx & vw (cssrem)": {
            import("./vscode-plugin/14-cssrem.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "GitLens": {
            import("./vscode-plugin/15-GitLens.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "WXML - Language Service": {
            import("./vscode-plugin/16-wxml-language-service.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "小程序开发助手": {
            import("./vscode-plugin/17-小程序开发助手.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Path Intellisense": {
            import("./vscode-plugin/18-path-intellisense.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Code Spell Checker": {
            import("./vscode-plugin/19-code-spell-checker.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Color Highlight": {
            import("./vscode-plugin/20-color-highlight.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }

        case "IntelliSense for CSS class names in HTML": {
            import("./vscode-plugin/21-intelliSense-for-css-className.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "Better Comments": {
            import("./vscode-plugin/22-better-comments.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
        case "koroFileHeader": {
            import("./vscode-plugin/23-koro-file-header.md").then((data) => {
                markdownData.value = data.default;
            });
            break;
        }
    }
};

const errorImg = () => {
    pluginList.forEach((item) => {
        if (item.img === "") {
            item.img = require("../../assets/logo.png");
        }
    });
};
</script>

<style lang="scss" scoped>
.plugin {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .pluginList {
        width: 320px;
        min-width: 320px;
        border-right: solid rgb(206, 206, 206) 1px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        .pluginItem {
            cursor: pointer;
            padding: 10px 10px;
            display: flex;
            flex-shrink: 0;
            flex-grow: 1;
            align-items: center;
            border-bottom: solid rgb(238, 238, 238) 1px;
            .logo {
                width: 34px;
                height: 34px;
                margin-right: 20px;
            }
            .content {
                .name {
                    color: black;
                    font-weight: bold;
                    margin-bottom: 4px;
                }
                .desc {
                    font-size: 13px;
                    color: rgb(146, 146, 146);
                }
            }
            &:hover > .content > .name {
                color: #409eff;
            }
        }
        .pluginItem.active {
            background: rgb(64, 158, 255, 0.1);
            .content > .name {
                color: #409eff;
            }
        }
    }
    .pluginDetail {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: flex-start;
        overflow: auto;
        padding: 20px;
    }
}
</style>
