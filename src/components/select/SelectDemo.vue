<template>
    <el-select v-model="value" class="m-2" placeholder="Select" size="default">
        <el-option v-for="(item, index) in options" :key="index" :label="item.name" :value="item.id" />
    </el-select>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        type: Number,
        default: () => 0,
    },
    all: {
        type: Boolean,
        default: () => false,
    },
});

// 数据
const value = ref(props.modelValue);
interface Option {
    id: number;
    name: string;
}
const options = reactive<Array<Option>>([]);

// 定义emit
const emit = defineEmits(["update:modelValue"]);

// 监听事件 - 监听外部值变化
watch(props, () => {
    value.value = props.modelValue;
});
// 监听事件 - 向外部更新值
watch(value, (newValue) => {
    emit("update:modelValue", newValue);
});

// 请求接口
onMounted(() => {
    if (props.all) {
        options.push({ id: -1, name: "全部" });
    }
    options.push({ id: 1, name: "1111" });
    options.push({ id: 2, name: "2222" });
    options.push({ id: 3, name: "3333" });
    options.push({ id: 4, name: "4444" });
    options.push({ id: 5, name: "5555" });
});
</script>
