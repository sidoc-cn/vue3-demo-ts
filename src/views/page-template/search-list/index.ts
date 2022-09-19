/**
 * 搜索条件
 */
export interface Search {
    /**
     * 名称
     */
    name: string;

    /**
     * 用户
     */
    userId: number;
}

/**
 * Table行数据类型
 */
export interface Row {
    /**
     * ID
     */
    id: number;

    /**
     * 名称
     */
    name: string;

    /**
     * 内容
     */
    content: string;
}

/**
 * 接口返回类型
 */
export interface DataType {
    /**
     * 每页数据量
     */
    size: number;

    /**
     * 每页数据量
     */
    pageSize: number;

    /**
     * 当前页码
     */
    pageNum: number;

    /**
     * 返回数据
     */
    data: Array<Row>;
}

/**
 * 接口返回数据映射
 *
 * 处理接口返回数据，使之成为能被页面直接渲染的数据
 *
 * @param data
 * @returns
 */
const receiveMapping = (data: Array<Row>): Array<Row> => {
    console.log(data);

    // TODO 在这里添加你的映射代码

    return data;
};
export { receiveMapping };
