<template>
    <div class="menuNav">
        <!-- 系统名称 -->
        <div class="title" :class="{ collapsed: isCollapse }">
            <span class="name" v-if="isCollapse">V</span>
            <span class="name" v-else>Vue3-Demo</span>
        </div>

        <!-- 菜单栏折叠按钮 -->
        <div class="collapseButton" @click.stop="isCollapse = !isCollapse">
            <el-icon v-if="isCollapse" :size="28" color="#4c4c4c"><Expand /></el-icon>
            <el-icon v-else :size="28" color="#4c4c4c"><Fold /></el-icon>
        </div>

        <!-- 菜单栏 -->
        <!-- 以页面path作为菜单项的index唯一标识，点击菜单时跳转至index指向的页面 -->
        <el-menu
            @select="menuSelect"
            router
            active-text-color="#ffd04b"
            background-color="#545c64"
            :default-active="getMenuIndex($route.path)"
            text-color="#fff"
            :collapse="isCollapse"
        >
            <template v-for="(item, index) in menuList" :key="index">
                <el-sub-menu v-if="item.children && item.children.length > 0" :index="getMenuIndex(item.path)">
                    <template #title>
                        <el-icon><component :is="item.icon"></component></el-icon>
                        <span>{{ item.name }}</span>
                    </template>

                    <el-menu-item
                        v-for="(subItem, subIndex) in item.children"
                        :key="subIndex"
                        :index="getMenuIndex(item.path)"
                        :route="item.path"
                    >
                        <!-- <el-icon> <component :is="subItem.icon"></component> </el-icon> -->
                        <template #title>{{ subItem.name }}</template>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item v-else :index="getMenuIndex(item.path)" :route="item.path">
                    <el-icon><component :is="item.icon"></component></el-icon>
                    <template #title>{{ item.name }}</template>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const isCollapse = ref(false);

interface MenuItem {
    name: string;
    path: string;
    icon?: string;
    children?: Array<MenuItem>;
}

const menuList = reactive<Array<MenuItem>>([
    { name: "开发环境", path: "/dev-env/index", icon: "House" },
    { name: "开发约定", path: "/convention/index", icon: "WindPower" },
    { name: "敏捷开发", path: "/agile/utils", icon: "Watch" },
    { name: "快速指引", path: "/guide/nginx", icon: "Document" },
    { name: "列表页面", path: "/list/List", icon: "MagicStick" },
    { name: "页面模板", path: "/page-template/search-list", icon: "MagicStick" },
    { name: "常用表单", path: "/form/Form", icon: "Monitor" },
    { name: "弹框提示", path: "/dialog", icon: "ChatLineSquare" },
    {
        name: "图表配置",
        path: "/chart/Histogram",
        icon: "PieChart",
        // children: [
        //     { name: "echart饼图", path: "/list/a" },
        //     { name: "echart柱状图", path: "/form/a" },
        //     { name: "AntV饼图", path: "/form/a" },
        //     { name: "AntV柱状图", path: "/form/a" },
        // ],
    },
    { name: "常用三方库", path: "/common-library", icon: "Suitcase" },
    { name: "组件积累", path: "/component-accumulate", icon: "Present" },
    { name: "VS Code插件", path: "/vscode-plugin", icon: "Operation" },
]);

// 菜单项点击事件
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const menuSelect = (index: string, indexPath: string, item: any) => {
    // 启用 vue-router 模式后，此处才能拿到item.path值
    // 启用 vue-router 模式后，如果此处进行了页面跳转，则 el-menu 将不再中跳转
    if (index.startsWith("http")) {
        window.open(item.route);
    } else {
        router.push(item.route);
    }
};

// 获取菜单索引
const getMenuIndex = (index: string) => {
    const arr = index.split("/");
    if (arr.length <= 2) {
        return index;
    } else {
        return "/" + arr[1];
    }
};
</script>

<style lang="scss" scoped>
.menuNav {
    display: flex;
    flex-direction: column;
    background-color: #545c64;
    position: relative;
    > .title {
        font-weight: 700;
        font-size: 1.6rem;
        color: #fff;
        text-align: center;
        padding: 22px 0px;
        padding-bottom: 50px;
        height: auto;
        line-height: unset;
        white-space: nowrap;
        width: var(--menu-nav-width); // 定义菜单宽度
        transition: all 200ms;
    }
    > .title.collapsed {
        width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
    }
    > .collapseButton {
        position: absolute;
        right: -40px;
        top: calc(var(--top-bar-height) / 2 - 14px);
        cursor: pointer;
        margin-right: auto;
    }
    .el-menu {
        flex-grow: 1;
        overflow-y: auto;
        border-right: 0px;
        overflow: auto;
        &:not(.el-menu--collapse) {
            width: var(--menu-nav-width); // 定义菜单宽度
        }
    }
}
</style>
