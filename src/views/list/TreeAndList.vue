<template>
    <table-list
        :tableData="tableData"
        :tableHeader="tableHeader"
        :isOperate="isOperate"
        :total="total"
        :operateWidth="operateWidth"
        @handleSizeChange="onHandleSizeChange"
        @handleCurrentChange="onHandleCurrentChange"
    ></table-list>
</template>

<script lang="ts" setup>
import TableList from "../../components/table-list/TableList.vue";
interface User {
    title: string;
    status: string;
    docAuthor: string;
    submitTime: string;
}
// 表格所需的数据
const tableData: User[] = reactive([
    {
        id: 1,
        title: "我是title活在风浪",
        status: "通过",
        docAuthor: "张三",
        submitTime: "2020-06-06 23:58:49",
    },
    {
        id: 2,
        title: "我是title飘在海水里",
        status: "通过",
        docAuthor: "李四",
        submitTime: "2020-06-07 00:10:59",
    },
    {
        title: "我是title最靓的崽",
        status: "通过",
        docAuthor: "赵过亿",
        submitTime: "2020-06-11 08:07:26",
    },
    {
        title: "我是title姗姗来迟",
        status: "通过",
        docAuthor: "李万千",
        submitTime: "2020-06-11 08:07:26",
    },
    {
        title: "我是title",
        status: "未通过",
        docAuthor: "小小",
        submitTime: "2020-06-11 08:07:26",
    },
    {
        title: "我是title一直活着",
        status: "通过",
        docAuthor: "张山",
        submitTime: "2020-06-11 08:07:26",
    },
]);
// 表头数据  辅助tableData的数据 这里是自己定义

const tableHeader = reactive([
    {
        type: "index",
        label: "#",
        fixed: true,
        width: "60px", // 宽度 不指定会 自适应屏幕铺满
    },
    {
        prop: "title",
        label: "稿件名称",
        overHidden: true, // 超出显示省略号 比如某一行字数多，缩小屏幕就省略号显示
        sortable: false,
    },
    {
        prop: "status",
        label: "稿件状态",
        sortable: false,
    },
    {
        prop: "docAuthor",
        label: "作者",
    },
    {
        prop: "submitTime",
        label: "提交日期",
        sortable: true, // 是否可排序
        align: "left", // 对齐方式
        width: "200px", // 最小宽度
    },
]);
const operateWidth = ref(160); // 操作列宽度
const isOperate = ref(true); // 操作列是否显示
const pageSize = ref(10); // 每页显示条数
const pageNum = ref(2); // 当前页码
const total = ref(100); // 总条数
// 分页改变事件
const onHandleSizeChange = (val: number) => {
    console.log(val);
    pageSize.value = val;
    // 需要再次调用请求后台的接口，重新刷新页面
};
// 当前页改变事件
const onHandleCurrentChange = (val: number) => {
    console.log(val);
    pageNum.value = val;
    // 需要再次调用请求后台的接口，重新刷新页面
};
</script>
