import { createStore } from "vuex";

export default createStore({
    state: {
        config: null, // 生产环境下，动态缓存配置
        authList: null, // 权限列表
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
