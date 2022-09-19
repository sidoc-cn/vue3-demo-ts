/**
 * Author: YANGWW - Mackbook Pro 16
 * Date: 2022-08-23 07:54:40
 * @LastEditors: YANGWW - Mackbook Pro 16 512113110@qq.com
 * @LastEditTime: 2022-09-08 09:02:55
 * Description: HTTP请求封装
 */

import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosError } from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

// 创建axios实例
const service = axios.create({
    timeout: 30000, // 默认请求超时时间,单位：毫秒
    withCredentials: true,
});

// 请求拦截
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 0.1> 生产环境下，动态读取配置
        config.url = common.url(config.url);

        // 0.2> 请求头自定义
        const customHeaders: AxiosRequestHeaders = {
            language: "zh-cn",
            token: "1111111",
        };
        config.headers = customHeaders;
        return config;
    },
    (error: AxiosError) => {
        Promise.reject(error);
    },
);

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data } = response;
        if (data.code === 401) {
            // 登录失效处理
            localStorage.setItem("token", "");
            router.replace("/login");
            return Promise.reject(data);
        }
        if (data.code && data.code !== 200) {
            ElMessage.error(data.msg);
            return Promise.reject(data);
        }
        return data;
    },
    (error: AxiosError) => {
        const { response } = error;
        if (response) {
            ElMessage.error("请求失败:" + response.status);
        }
        if (!window.navigator.onLine) {
            ElMessage.error("网络连接失败");
        }
        return Promise.reject(error);
    },
);

// eslint-disable-next-line no-unused-vars
enum ServerType {
    /**
     * 基础服务
     */
    // eslint-disable-next-line no-unused-vars
    Base,

    /**
     * 主业务服务
     */
    // eslint-disable-next-line no-unused-vars
    Main,

    /**
     * 不使用基地址，外部调用者自行拼接基地址
     */
    // eslint-disable-next-line no-unused-vars
    Null,
}
export { ServerType };

// 拼接基地址
const getUrl = (server: ServerType, api: string): string => {
    switch (server) {
        case ServerType.Base:
            return process.env.VUE_APP_BASE_URL + api;
        case ServerType.Main:
            return process.env.VUE_APP_BASE_URL + api;
        default:
            return api;
    }
};

/**
 * 请求参数接口
 */
interface RequestParams {
    url: string;
    params?: object;
    config?: AxiosRequestConfig;
}

/**
 * Get请求（如果要在请求中捕获异常，请实现catch）
 * @param server
 * @param param
 * @returns
 */
const httpGet = <T>(server: ServerType, { url, params, config }: RequestParams) => {
    return service.get(getUrl(server, url), { params: { ...params }, ...config }).then((res) => {
        const data: T = res.data;
        return data;
    });
};
export { httpGet };

/**
 * Post请求
 * @param server
 * @param param
 * @returns
 */
const httpPost = (server: ServerType, { url, params, config }: RequestParams) => {
    return service.post(getUrl(server, url), { params: { ...params }, ...config }).then((res) => {
        const data = res.data;
        return data;
    });
};
export { httpPost };

/**
 * Post FormData请求
 * @param server
 * @param param
 * @returns
 */
const httpPostFormData = (server: ServerType, { url, params, config }: RequestParams) => {
    return service.post(getUrl(server, url), { params: { ...params }, ...config }).then((res) => {
        const data = res.data;
        return data;
    });
};
export { httpPostFormData };

/**
 * Put请求
 * @param server
 * @param param
 * @returns
 */
const httpPut = (server: ServerType, { url, params, config }: RequestParams) => {
    return service.put(getUrl(server, url), { params: { ...params }, ...config }).then((res) => {
        const data = res.data;
        return data;
    });
};
export { httpPut };

/**
 * Delete请求
 * @param server
 * @param param1
 * @returns
 */
const httpDelete = (server: ServerType, { url, params, config }: RequestParams) => {
    return service.delete(getUrl(server, url), { params: { ...params }, ...config }).then((res) => {
        const data = res.data;
        return data;
    });
};
export { httpDelete };

/**
 * Axios原生请求
 * @param server
 * @param param1
 * @returns
 */
const httpAxios = (config: AxiosRequestConfig) => {
    return service.request(config).then((res) => {
        const data = res.data;
        return data;
    });
};
export { httpAxios };
