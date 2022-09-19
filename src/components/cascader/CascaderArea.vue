<template>
    <el-cascader v-model="value" :options="options" :props="cascaderProps" :clearable="false" />
</template>

<script setup lang="ts">
import { Ref } from "vue";

// 1.0> 接参 ---------------------------------------------------------------------------------------------------------
interface PropsType {
    modelValue: Array<string | number>;
}
const props = defineProps<PropsType>();
const value: Ref<Array<string | number>> = ref(props.modelValue);

// 2.0> 级联 ---------------------------------------------------------------------------------------------------------
interface Option {
    id: number;
    name: string;
    leaf?: boolean; // 是否为叶子节点
    children: Array<Option>;
}
const options = reactive<Array<Option>>([]);

const cascaderProps = {
    value: "id",
    label: "name",
    emitPath: true,
    lazy: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazyLoad(node: any, resolve: any) {
        let { level, value, pathLabels } = node;

        // 是否为直辖市（直辖市市的级联选择只有三级）
        let isMunicipality = ["北京", "上海", "重庆", "天津"].includes(pathLabels[0]);

        if (level === 0) {
            getProvince().then((data) => resolve(data));
        } else if (level === 1) {
            getCity(value).then((data) => resolve(data));
        } else if (level === 2) {
            getArea(value, isMunicipality).then((data) => resolve(data));
        } else if (level === 3) {
            getStreet(value).then((data) => resolve(data));
        }
    },
};

// 获取省
const getProvince = () => {
    return import("../cascader/area-json/province.json")
        .then((data: Array<Option>) => {
            return Array.from(data) as Array<Option>;
        })
        .catch(() => {
            return [];
        });
};

// 获取市
const getCity = (provinceId: number) => {
    return import(`../cascader/area-json/city/city-${provinceId}.json`)
        .then((data) => {
            return Array.from(data) as Array<Option>;
        })
        .catch(() => {
            return [];
        });
};

// 获取区县
const getArea = (cityId: number, isMunicipality: boolean) => {
    return import(`../cascader/area-json/area/area-${cityId}.json`)
        .then((data) => {
            let arr = Array.from(data) as Array<Option>;
            if (isMunicipality) {
                arr.map((item) => {
                    item["leaf"] = true;
                });
            }
            return arr;
        })
        .catch(() => {
            return [];
        });
};

// 获取街道
const getStreet = (areaId: number) => {
    return import(`../cascader/area-json/street/street-${areaId}.json`)
        .then((data) => {
            let arr = Array.from(data) as Array<Option>;
            arr.map((item) => {
                item["leaf"] = true;
            });
            return arr;
        })
        .catch(() => {
            return [];
        });
};

// 3.0> 更新外部参数 ------------------------------------------------------------------------------------------------------------
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
</script>
