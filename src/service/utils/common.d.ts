export interface CommonInterface {
    /**
     * 判断设置类型，是否移动设备(如：手机、ipad等)
     * @return 如果是移动设备，则返回移动设备的的型号数组；如果不是移动设备，则返回null
     */
    isMobile(): RegExpMatchArray | null;

    /**
     * 获取url中的参数
     * @param paramName 需要获取的参数名称
     * @return 获取指定参数名称对应的值
     */
    // eslint-disable-next-line no-unused-vars
    getUrlParam(paramName: string): string | null;

    /**
     * 判空：判断变量或对象是否为空
     * @param value
     * @return 为空时返回true, 不为空返回false
     */
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    isEmpty(value: any): boolean;

    /**
     * 字节大小转换，将以字节(Byte)为单位的数字转为KB、KM、GB等
     * @param value
     * @return 返回以KB或KM或GB为单位的转换结果
     */
    // eslint-disable-next-line no-unused-vars
    byteSizeConversion(value: string | number): string;

    /**
     * 时长转换，用于将毫秒转为ms、s、分钟、小时等
     * @param value
     */
    // eslint-disable-next-line no-unused-vars
    durationConversion(value: string | number): string;

    /**
     * 将json对象转为url拼接参数
     * @param params 需要处理的数组
     * @return 字符串
     */
    // eslint-disable-next-line no-unused-vars
    toParams(params: Record<string, unknown>): string;

    /**
     * 在浏览器新标签中打开路由页面
     * ! 不要直接使用window.open打开路由path对应的页面，因为只要项目的“publicPath”配置不为“/”，页面就会无法打开
     * @param router
     * @param path
     * @param params
     */
    // eslint-disable-next-line no-unused-vars
    open(router: Router, path: string, params?: Record<string, string | number | null>);
}
