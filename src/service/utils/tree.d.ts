export interface TreeInterface {
    /**
     * 列表转tree
     * @param listData 列表数据(一维数组)
     * @param pidFieldName 数据中表示父节点ID的字段名称
     */
    // eslint-disable-next-line no-unused-vars
    listToTree(listData: Array<object>, pidFieldName: string | number): Array<object>;

    /**
     * tree转列表
     * @param treeData 具有层级关系的tree数据
     * @param pidFieldName 数据中表示父节点ID的字段名称
     */
    // eslint-disable-next-line no-unused-vars
    treeToList(treeData: Array<object>, pidFieldName: string | number): Array<object>;
}
