export interface ArrayInterface {
    /**
     * 将数组切割成不同长度的数组
     * @param array 需要处理的数组
     * @param size 每个数组的长度
     */
    chunk(array: Array<any>, size: number): Array<any>;

    /**
     * 过滤数组中的'假值' NaN,false, null,0, "", undefined
     * @param array
     */
    compact(array: Array<any>): Array<any>;

    /**
     * 数组拼接
     * @param array 被拼接的数组
     * @param values 拼接的值，number,string,array
     */
    concat(array: Array<any>, values: number | string | Array<any>): Array<any>;

    /**
     * 数组去重（创建一个新数组，这个数组中的值为array中不需要的值的展示）
     * @param array 要检查的数组。
     * @param values 排除的值。
     * @return 返回一个过滤值后的新数组。
     */
    difference(array: Array<any>, values: Array<any>): Array<any>;
    // difference(array: Array<any>, field?: string): Array<any>;

    /**
     * 数组对象去重
     * @param array 要检查的数组。
     * @param values 排除的值。
     * @param comparator 调用每个元素。
     * @return 返回一个过滤值后的新数组。
     */
    differenceWith(array: Array<any>, values: Array<any>, fn: any): Array<any>;

    /**
     * 去掉数组前面第n个元素
     * @param array 要查询的数组。
     * @param n 要去除的元素个数（默认1）。
     * @return 返回数组剩余的。
     */
    drop(array: Array<any>, n: number): Array<any>;

    /**
     * 去掉数组后面第n个元素
     * @param array 要查询的数组。
     * @param n 要去除的元素个数（默认1）。
     * @return 返回数组剩余的。
     */
    dropRight(array: Array<any>, n: number): Array<any>;

    /**
     * N次循环
     * @param value 次数
     * @param fn 函数
     */
    // eslint-disable-next-line no-unused-vars
    times(value: number, fn: any): Array<any>;

    /**
     * 将array递归为一维数组。
     * @param array 需要处理的数组。
     * @return 返回一个的新一维数组。
     */
    flattenDeep(array: Array<any>): Array<any>;

    /**
     * 根据 depth 递归减少 array 的嵌套层级
     * @param array 需要减少嵌套层级的数组。
     * @param depth 最多减少的嵌套层级数。
     * @return 返回减少嵌套层级后的新数组。
     */
    flattenDepth(array: Array<any>, depth: number): Array<any>;

    /**
     * 获取array中的最后一个元素。
     * @params array 要检索的数组。
     * @return 返回array中的最后一个元素
     */
    last(array: Array<any>): string | number;

    /**
     * 获取数组 array 的第一个元素。
     * @param array 要检索的数组。
     * @return 返回数组 array的第一个元素。
     */
    first(array: Array<any>): string | number;

    /**
     * 获取对象数组中所有对象的指定属性
     * @param attrName
     */
    getAttrList(array: Array<object>, attrName: string): Array<unknown>;
}
