<template>
    <el-table
        :data="props.options.data"
        border
        @selection-change="selectionChange"
        v-loading="props.options.loading ? props.options.loading.value : false"
    >
        <!-- 无数据插槽 -->
        <template v-slot:empty>
            <table-list-empty>暂无数据</table-list-empty>
        </template>

        <!-- table数据 -->
        <slot></slot>

        <!-- 最后一行之后的插槽 -->
        <template v-slot:append>
            <div class="footer">
                <div class="footer-left" v-if="props.options.data.length > 0">
                    <slot name="footer-left"></slot>
                </div>
                <el-pagination
                    v-if="local.pagination && props.options.data.length > 0"
                    v-model:currentPage="local.pagination.currentPage"
                    v-model:page-size="local.pagination.pageSize"
                    :page-sizes="local.pagination.pageSizes"
                    :total="local.pagination.total"
                    background
                    layout="total,sizes, prev, pager, next,jumper"
                ></el-pagination>
            </div>
        </template>
    </el-table>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import TableListEmpty from "./TableListEmpty.vue";

// Vue3 defineProps 暂时尚未支持从外部导入interface类型，因此需要在当前页面中声明，详见：https://segmentfault.com/q/1010000042014549
/**
 * 分页对象
 */
export interface TableListPagination {
    /**
     * 当前页数，默认为1
     */
    currentPage: number;

    /**
     * 每页显示个数选择器，例如：[10,20,30,50,100]
     */
    pageSizes?: number[];

    /**
     * 每页显示条目个数
     */
    pageSize?: number;

    /**
     * 总条目数
     */
    total: number;
}

/**
 * TableList Props传参类型
 */
export interface TableListProps<T> {
    /**
     * Table数据
     */
    data: Array<T>;

    /**
     * 数据加载状态，true表示正在加载中，false表示已加载完成
     */
    loading?: Ref<boolean>;

    /**
     * 分页对象
     */
    pagination?: TableListPagination;

    /**
     * 监听分页变化（页码、页大小等任何分页数据发生更新时，都会回调此函数）
     */
    // eslint-disable-next-line no-unused-vars
    paginationChange?: (p: TableListPagination) => void;

    /**
     * 监听table首列checkbox选择事件
     */
    // eslint-disable-next-line no-unused-vars
    selectionChange?: (row: Array<T>) => void;
}

// 1.0> props接参，并配置默认值
const props = withDefaults(
    defineProps<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: TableListProps<any>;
    }>(),
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: (): TableListProps<any> => {
            return {
                data: [],
                loading: ref(true),
                pagination: {
                    currentPage: 1,
                    pageSizes: [10, 20, 30, 100],
                    pageSize: 10,
                    total: 0,
                },
            };
        },
    },
);

// 2.0> 本地响应对象（为了能够使reactive被重新赋值，需要使用reactive包装响应对象）
const local = reactive<{
    pagination?: TableListPagination;
}>({});

// 2.0> 设置分页
if (props.options.pagination) {
    local.pagination = reactive<TableListPagination>({ ...props.options.pagination });
}

// 3.0> 监听分页变化
if (local.pagination) {
    watch(local.pagination, () => {
        props.options.paginationChange && local.pagination ? props.options.paginationChange(local.pagination) : "";
    });
}

// 4.0> 监听table首列checkbox选择事件
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectionChange = (val: Array<any>) => {
    props.options.selectionChange ? props.options.selectionChange(val) : "";
};

// 5.0> 为父级元素设置样式，解决flex布局下，外部div宽度减小时表格宽度不会随之减小的问题
onMounted(() => {
    let currentCpn = getCurrentInstance();
    let parent = currentCpn?.parent;
    if (parent && parent.vnode && parent.vnode.el) {
        parent.vnode.el.style.flex = 1;
        parent.vnode.el.style.width = 0;
    }
});
</script>

<style lang="scss" scoped>
.el-table {
    flex-grow: 1;
    width: 100%;
    .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.625rem 0.375rem;
        :deep(.footer-left) {
            white-space: nowrap;
            margin-right: 0.625rem;
        }
        :deep(.el-pagination) {
            margin-left: auto;
        }
    }
}
</style>
