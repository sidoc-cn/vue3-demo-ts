// 公共方法
import store from "@/store";

// 0.0> 生产环境下动态拼接URL
const url = (url: string | undefined) => {
    if (url && process.env.NODE_ENV === "production" && store.state.config) {
        (store.state.config as Array<Record<string, string>>).find((item) => {
            const key = window.atob(item["key"]);
            if (url && url.includes(key)) {
                url = url.replaceAll(key, url);
            }
        });
    }
    return url;
};

// 1.0> 登录
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signOut = (data: any) => {
    localStorage.setItem("token", data.token);
};

// 1.1> 退出登录
const logIn = () => {
    localStorage.removeItem("token");
};

export default { url, logIn, signOut, open };
