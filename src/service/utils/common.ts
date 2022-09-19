import { Router } from "vue-router";
import { CommonInterface } from "./common.d";
import qs from "qs";

// 1.0> 判断设置类型，是否移动设备(如：手机、ipad等)
const isMobile = (): RegExpMatchArray | null => {
    const isMobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
    );
    return isMobile;
};

// 2.0 获取url中的参数
const getUrlParam = (paramName: string): string | null => {
    const reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

// 3.0 判空：判断变量是否为空或
const isEmpty = function (value: unknown): boolean {
    if (value === undefined) {
        return true;
    } else if (value === null) {
        return true;
    } else if (typeof value === "string" && value.trim() === "") {
        return true;
    } else if (typeof value === "number" && isNaN(value) === true) {
        return true;
    } else if (typeof value === "number" && value === 0) {
        return true;
    } else if (value instanceof Array && value.length <= 0) {
        return true;
    }
    return false;
};

// 4.0 字节大小转换，将以字节(Byte)为单位的数字转为KB、KM、GB等
const byteSizeConversion = function (value: string | number): string {
    let pvalue = 0;
    if (typeof value === "string") {
        pvalue = parseFloat(value);
    }
    if (pvalue < 1024) {
        return pvalue + "B";
    } else if (pvalue >= 1024 * 1024 * 1024) {
        // GB
        return (pvalue / 1024 / 1024 / 1024).toFixed(2) + "GB";
    } else if (pvalue >= 1024 * 1024) {
        // MB
        return (pvalue / 1024 / 1024).toFixed(2) + "MB";
    } else if (pvalue >= 1024) {
        // KB
        return (pvalue / 1024).toFixed(2) + "KB";
    }
    console.error("_byteSizeConversion转换异常:" + value);
    return "";
};

// 5.0 时长转换，用于将毫秒转为ms、s、分钟、小时等
const durationConversion = function (value: string | number): string {
    let pvalue = 0;
    if (typeof value === "string") {
        pvalue = parseFloat(value);
    }

    if (pvalue < 1000) {
        return pvalue.toFixed(2) + " ms";
    } else if (pvalue >= 1000 * 60 * 60 * 24) {
        // 天
        return (pvalue / (1000 * 60 * 60 * 24)).toFixed(2) + " 天";
    } else if (pvalue >= 1000 * 60 * 60) {
        // 小时
        return (pvalue / (1000 * 60 * 60)).toFixed(2) + " 小时";
    } else if (pvalue >= 1000 * 60) {
        // 分钟
        return (pvalue / (1000 * 60)).toFixed(2) + " 分钟";
    } else if (pvalue >= 1000) {
        // s
        return (pvalue / 1000).toFixed(2) + " s";
    }
    console.error("_durationConversion转换异常:" + value);
    return "";
};

// 6.0 将json对象转为url拼接参数
const toParams = (params: Record<string, unknown>): string => {
    return qs.stringify(params);
};

// 7.0> 在浏览器新标签中打开路由页面
// ! 不要直接使用window.open打开路由path对应的页面，因为只要项目的“publicPath”配置不为“/”，页面就会无法打开
const open = (router: Router, path: string, params?: Record<string, string | number | null>) => {
    const routeUrl = router.resolve({
        path: path,
        query: params,
    });
    window.open(routeUrl.href, "_blank");
};

export default <CommonInterface>{
    isMobile,
    getUrlParam,
    isEmpty,
    byteSizeConversion,
    durationConversion,
    toParams,
    open,
};
