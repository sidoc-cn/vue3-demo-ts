#### 路由安装
```js
npm i vue-router@next
```

#### 路由模式
- createWebHistory 创建history路由模式
- createWebHashHistory 创建hash路由模式
- createMemoryHistory 创建基于内存的历史记录

**这三种路由方式都有一个可选参数base，为每个URL前面的基本路径，默认为'/'**

#### 配置路由
```js
// router/index
import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'
const Login = ()=> import('../views/login/login.vue')
const routes: Array<RouteRecordRaw> = [  
    { path: '/',     name: 'login', component: Login  },
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})
export default router
```

```js
// main
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App).use(router).mount('#app')
```
**使用createRouter创建，RouteRecordRaw是内置的类型接口，routes改为必传参数**

#### 路由插槽
```js
<!-- Component：要渲染的组件 -->
<!-- route: 解析出的标准化路由地址 -->

<Suspense>
  <template #default>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined"/>
        </keep-alive>
      </transition>
    </router-view>
  </template>
  <template #fallback> Loading... </template>
</Suspense>

```
#### RouterView

页面中同时显示多个路由视图，而不是嵌套，那么就需要用到router-view的name属性，默认使用default：

```js
// 页面
<router-view></router-view>
<router-view name="about"></router-view>
<router-view name="login"></router-view>

// router/index
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // 这里是es6对象增强写法
        login,
        about,
      },
    },
  ],
})

// components里面的组件会与router-view里面的name相对应。
```

#### scrollBehavior变化

scrollBehavior返回的对象x重命名为left，y重命名为top。

#### 路由重定向与别名

路由重定向(redirect)就是通过各种方法将各种网络请求重新定个方向转到其它位置，如/home转到/

```js
import { RouteRecordRaw } from "vue-router";
// 路径写法
const routes: Array<RouteRecordRaw>  = [{ path: '/home', redirect: '/' }]
// 命名写法
const routes: Array<RouteRecordRaw>  = [{ path: '/home', redirect: { name: 'homepage' } }]
// 函数写法
const routes: Array<RouteRecordRaw> = [
  {
    path: '/search/:searchText',
    redirect: to => {
      return { path: '/search', query: { q: to.params.searchText } }
    },
  },
]
```

别名表示访问url时自由命名，不受约束，router会自动进行别名匹配，就像我们设置/的别名为/home，相当于访问/：
```js
const routes: Array<RouteRecordRaw> = [{ path: '/', component: Homepage, alias: '/home' }]
// alias是别名的key
```
#### 动态路由

动态路由主要通过两个功能实现router.addRoute()和router.removeRoute()。
```js
// addRoute是添加一条新的路由路径
router.addRoute({ name: 'about', path: '/about', component: About })

// removeRoute是删除路由，注意删除后对应的子路由和别名都会删掉
router.removeRoute('about')

// 路由嵌套
router.addRoute('about', { path: 'profile', component: Profile})
//等价于
router.addRoute({
  name: 'about',
  path: '/about',
  component: About,
  children: [{ path: 'profile', component: Profile}],
})

```
