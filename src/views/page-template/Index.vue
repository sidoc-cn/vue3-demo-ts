<template>
    <div class="index func">
        <div class="list">
            <div class="item" :class="{ active: path == item.path }" v-for="(item, index) in data" :key="index" @click="clickEvent(item)">
                <div class="name">{{ item.name }}</div>
                <div class="des">{{ item.des }}</div>
                <div class="open-code" @click="openCode(item.codeUrl)">查看代码</div>
            </div>
        </div>

        <router-view class="content"></router-view>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();
let path = computed(() => {
    return router.currentRoute.value.path;
});

// 在浏览器中调起Vscode
// https://code.visualstudio.com/docs/editor/command-line#_opening-vs-code-with-urls

// 本地项目路径
let localProjectPath = ref("");

interface ItemType {
    name: string;
    des: string;
    path: string;
    codeUrl?: string;
}
const data = reactive<Array<ItemType>>([
    {
        name: "搜索 + 列表",
        des: "search-list",
        path: "/page-template/search-list",
        codeUrl: "vscode://file/Users/yangweiwei/Desktop/web-dev/vue3-demo-ts-5/src/views/page-template/search-list/",
    },
    {
        name: "搜索 + 列表 + 树",
        des: "search-list-tree",
        path: "/page-template/search-list-tree",
        codeUrl: `vscode://file/${localProjectPath}/vue3-demo-ts-5/src/views/page-template/search-list/`,
    },
    {
        name: "页签切换",
        des: "tab-switching",
        path: "/page-template/tab-switching/page1",
    },
    {
        name: "可编辑表格",
        des: "tab-switching",
        path: "/page-template/tab-switching/page1",
    },
    {
        name: "登录页面 - 1",
        des: "tab-switching",
        path: "/page-template/tab-switching/page1",
    },
    {
        name: "登录页面 - 2",
        des: "tab-switching",
        path: "/page-template/tab-switching/page1",
    },
    {
        name: "大屏首页",
        des: "tab-switching",
        path: "/page-template/tab-switching/page1",
    },
]);

const clickEvent = (item: ItemType) => {
    router.push(item.path);
};

const openCode = (url: string) => {
    window.open(url, "_self");
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/page-func.scss";

.item {
    padding: 8px 10px !important;
    .des {
        color: rgb(179, 179, 179);
    }
    .open-code {
        color: blue;
    }
}
.content {
    flex-grow: 1;
    display: flex;
}
</style>
