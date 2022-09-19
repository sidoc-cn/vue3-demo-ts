/**
 * @ Author: wzz
 * @ Create Time: 2022-09-05 11:02:56
 * @ Description: lodash中常用的数组方法
 */

import { ArrayInterface } from "./array.d";

// lodash相关用法
import lodash from "lodash";

/**
 * 将数组切割成不同长度的数组
 * @param array 需要处理的数组
 * @param size 每个数组的长度
 * @return 新数组
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunk = (array: Array<any>, size: number): Array<any> => {
    return lodash.chunk(array, size);
};

/**
 * 过滤数组中的'假值' NaN,false, null,0, "", undefined
 * @param array
 * @return 过滤掉假值的新数组
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compact = (array: Array<any>): Array<any> => {
    return lodash.compact(array);
};

/**
 * 数组拼接
 * @param array 被拼接的数组
 * @param values (...) 拼接的值，number,string,array
 * @return 连接后的新数组
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const concat = (array: Array<any>, values: number | string | Array<any>): Array<any> => {
    return lodash.concat(array, values);
};

/**
 * 数组去重（创建一个新数组，这个数组中的值为array中不需要的值的展示）
 * @param array 要检查的数组。
 * @param values 排除的值。
 * @return 返回一个过滤值后的新数组。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const difference = (array: Array<any>, values: Array<any>): Array<any> => {
    return lodash.difference(array, values);
};

/**
 * 数组对象去重
 * @param array 要检查的数组。
 * @param values 排除的值。
 * @param comparator 调用每个元素。
 * @return 返回一个过滤值后的新数组。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const differenceWith = (array: Array<any>, values: Array<any>, fn: () => void): Array<any> => {
    return lodash.differenceWith(array, values, lodash.isEqual);
};

/**
 * 去掉数组前面第n个元素
 * @param array 要查询的数组。
 * @param n 要去除的元素个数(默认1)。
 * @return 返回数组剩余的。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const drop = (array: Array<any>, n: number): Array<any> => {
    return lodash.drop(array, n);
};

/**
 * 去掉数组后面第n个元素
 * @param array 要查询的数组。
 * @param n 要去除的元素个数(默认1)。
 * @return 返回数组剩余的。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dropRight = (array: Array<any>, n: number): Array<any> => {
    return lodash.dropRight(array, n);
};

/**
 * N次循环
 * @param value 次数
 * @param fn 函数
 * @return 调用结果的数组
 */
const times = (value: number, fn: any): Array<any> => {
    return lodash.times(value, fn);
};

/**
 * 将array递归为一维数组。
 * @param array 需要处理的数组。
 * @return 返回一个的新一维数组。
 */
const flattenDeep = (array: Array<any>): Array<any> => {
    return lodash.flattenDeep(array);
};

/**
 * 根据 depth 递归减少 array 的嵌套层级
 * @param array 需要减少嵌套层级的数组。
 * @param depth 最多减少的嵌套层级数。
 * @return 返回减少嵌套层级后的新数组。
 */
const flattenDepth = (array: Array<any>, depth: number): Array<any> => {
    return lodash.flattenDepth(array, depth);
};

/**
 * 获取array中的最后一个元素。
 * @param array 要检索的数组。
 * @return 返回array中的最后一个元素
 */
const last = (array: Array<any>): string | number => {
    return lodash.last(array);
};

/**
 * 获取数组 array 的第一个元素。
 * @param array 要检索的数组。
 * @return 返回数组 array的第一个元素。
 */
const first = (array: Array<any>): string | number => {
    return lodash.head(array);
};

export default <ArrayInterface>{
    chunk,
    compact,
    concat,
    difference,
    differenceWith,
    drop,
    dropRight,
    times,
    flattenDeep,
    flattenDepth,
    last,
    first,
};
