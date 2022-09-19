// Array原型扩展
interface Array<T> {
    /**
     * 1.0> 从数组中删除指定元素（数组元素必须是基本数据类型）
     * @param ele 被删除的数组
     * @return Array 删除后的新数组
     */
    // eslint-disable-next-line no-unused-vars
    _remove(ele: string | number | boolean): Array<T>;

    /**
     * 2.0> 从对象数组中删除指定属性值的对象
     * @param name  属性名称
     * @param value 属性值
     * @return Array 删除后的新数组
     */
    // eslint-disable-next-line no-unused-vars
    _removeByProperty(name: string, value: string | number | boolean): Array<T>;
}

// 1.0> 从数组中删除指定元素（数组元素必须是基本数据类型）
Array.prototype._remove = function (ele: string | number | boolean): Array<string | number | boolean> {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] === ele) {
            continue;
        }
        arr.push(this[i]);
    }
    return arr;
};

// 2.0> 从对象数组中删除指定属性值的对象
Array.prototype._removeByProperty = function (name: string, value: string | number | boolean) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i][name] === value) {
            continue;
        }
        arr.push(this[i]);
    }
    return arr;
};

// 3>. 数组去重
