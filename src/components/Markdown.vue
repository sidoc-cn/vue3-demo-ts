<template>
    <div ref="markdownRef" class="markdown" v-html="content"></div>
</template>

<script lang="ts" setup>
// 1.0> Marked是用于解析Markdown的编译器,官网：https://github.com/markedjs/marked
// 安装：npm install marked
import { marked } from "marked";

// 2.0> highlight.js是用于高亮代码的三方库，提供197种语言和248种代码高亮风格
// 安装：npm install highlight.js
import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // 引入github风格的代码高亮样式

// 4.0> 引入复制
import ClipboardJS from "clipboard";

import { defineProps } from "vue";

const props = defineProps({
    data: {
        required: false,
        type: String,
        default: "",
    },
});

const content = ref("");
const markdownRef = ref<HTMLElement | null>(null);

// 0.1> 配置markdown解析器
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    escaped: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight(code: string) {
        // Markdown中所有代码片段被渲染前，都会先回调此方法，在此方法中通过highlight实现对代码片段的高亮处理
        return hljs.highlightAuto(code).value;
    },
});
content.value = marked(props.data);

// 0.2> mounted
onMounted(() => {
    addCopyButton();
});

// 0.3> 监听数据变化
watch(props, () => {
    content.value = marked(props.data);
    addCopyButton();
});

// 0.4> 向markdown添加复制按钮
const addCopyButton = () => {
    setTimeout(() => {
        if (markdownRef.value) {
            let preList = markdownRef.value.querySelectorAll("pre");
            preList.forEach((ele: Element) => {
                let copyButton = document.createElement("div");
                copyButton.setAttribute("class", "copy-button");
                copyButton.innerHTML = "复制";
                ele.append(copyButton);
            });
        }
    }, 0);
};

// 0.5> 注册复制组件
let clipBoard = new ClipboardJS(".copy-button", {
    target: (trigger) => {
        if (trigger && trigger.parentNode) {
            return trigger.parentNode.querySelector("code") as Element;
        } else {
            throw new Error("未找到要复制的内容");
        }
    },
});
clipBoard.on("success", function (e) {
    messageSuccess("复制成功");
    e.clearSelection();
});

// 0.6> 组件销毁前释放clipBoard
onUnmounted(() => {
    clipBoard.destroy();
});
</script>

<style lang="scss" scoped>
.markdown {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-grow: 1;
    padding: 10px 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 1rem;
    line-height: 1.5;
    word-wrap: break-word;
    :deep(pre) {
        position: relative;
        font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
        padding: 1rem;
        overflow: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        line-height: 1.6;
        background-color: #f6f8fa;
        border-radius: 0.375rem;
        font-size: 90%;
        overflow: visible;
        margin: 0px;
        margin-bottom: 1rem;
        .copy-button {
            cursor: pointer;
            color: gray;
            position: absolute;
            top: 0.2rem;
            right: 0.6rem;
            &:hover {
                color: #333333;
            }
        }
    }
    :deep(blockquote) {
        font-size: 0.9375rem;
        padding: 0 0.9375rem;
        color: #57606a;
        border-left: 0.25em solid #d0d7de;
        margin: 0px;
        margin-bottom: 1rem;
        p:last-of-type {
            margin-bottom: 0px;
        }
    }
    :deep(p) {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    :deep p code {
        font-weight: normal;
        background: rgba(175, 184, 193, 0.2);
        padding: 3px 5px;
        border-radius: 0.1875rem;
        font-size: 0.875rem;
        margin-left: 0.3125rem;
        margin-right: 0.25rem;
    }
}
</style>
