/**
 * 表单
 */
export interface FormData {
    /**
     * 名字
     */
    name: string;

    /**
     * 年龄
     */
    age: number;
}

/**
 * 接口参数映射
 *
 * 处理准备提交的数据，使之成为能被接口直接使用的参数
 *
 * @param data
 * @returns
 */
const sendMapping = (data: FormData): FormData => {
    console.log(data);

    // TODO 在这里添加你的映射代码

    return data;
};
export { sendMapping };
