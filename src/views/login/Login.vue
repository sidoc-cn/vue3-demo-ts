<template>
    <div class="login">
        <div class="title">Vue3-Demo</div>

        <div class="content">
            <el-form :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="login" :loading="isLogin">登录</el-button>
        </div>
        <div class="footer">© 2009-2022 WEB.COM 版权所有 v1.0.0</div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const form = reactive({
    username: "",
    password: "",
});
const isLogin = ref(false);

const login = () => {
    interface ResType {
        token: string;
        userId: number;
    }
    isLogin.value = true;
    httpGet<ResType>(ServerType.Null, {
        url: "/api-mock/login.json",
        params: {},
    }).then((data: ResType) => {
        console.log(data);

        // 延时以模拟请求响应
        setTimeout(() => {
            router.push("/");
            isLogin.value = false;
        }, 600);
    });
};
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
    .title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 7rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: rgb(226, 226, 226);
    }
    .footer {
        position: absolute;
        color: gray;
        bottom: 0.2rem;
    }
}
</style>
