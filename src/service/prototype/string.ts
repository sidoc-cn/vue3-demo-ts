// String原型扩展

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface String {
    /**
     * 从字符中获取前面个数的字符
     *
     * 如果指定的字符个数小于字符串，则返回以...结尾的省略字符串
     * 如果指定的字符个数大于字符串，则返回原字符串
     */
    // eslint-disable-next-line no-unused-vars
    _firstStr(number: number): string;
}

String.prototype._firstStr = function (number: number): string {
    const str = this as string;

    if (str.length <= number) {
        return str;
    } else {
        return str.substring(0, number) + "...";
    }
};
