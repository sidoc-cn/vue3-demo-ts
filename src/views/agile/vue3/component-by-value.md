- props（父传子）
- emit（子传父）
- v-model（子传父）
- refs（父传子）
- provide/inject（父传子孙）
- vuex/pinia（状态管理工具）

**1.props**

`父组件`

```js
<template>
  <!-- 子组件 -->
  <child-components :list="list"></child-components>
  
  <!-- 父组件 -->
    <div>
      <button @click="handleAdd">添加 </button>
    </div>
</template>

import { ref } from 'vue'
import ChildComponents from './child.vue'   //引入子组件
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
```
**子组件**

```js
import { defineProps } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
```

**2.emit**
     
**子组件**

```js
<template>
  <div>
    <button @click="handleSubmit">添加</button>
  </div>
</template>

import { ref, defineEmits } from 'vue'
const value = ref('')
const emits = defineEmits(['add'])
const handleSubmit = () => {
  emits('add', value.value)
  value.value = ''
}

```
**父组件**

```js
<template>
  <!-- 父组件 -->
  <ul>
    <li v-for="i in list" :key="i">{{ i }}</li>
  </ul>
  <!-- 子组件 -->
  <child-components @add="handleAdd"></child-components>
</template>
import ChildComponents from './child.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
// add 触发后的事件处理函数
const handleAdd = value => {
  list.value.push(value)
}

```
  
**3.v-model**

**父组件**

```js
<template>
  <!-- 父组件 -->
  <ul>
    <li v-for="i in list" :key="i">{{ i }}</li>
  </ul>
  <!-- 子组件 -->
  <child-components v-model:list="list"></child-components>
</template>

import ChildComponents from './child.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
```
**子组件**

```js
<template>
  <div >
     <button @click="handleAdd">添加</button>
  </div>
</template>
import { ref, defineEmits, defineProps } from 'vue'
const value = ref('')
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['update:list'])
// 添加操作
const handleAdd = () => {
  const arr = props.list
  arr.push(value.value)
  emits('update:list', arr) // update:* 是Vue中的固定写法，*表示props中的某个属性名
  value.value = ''
}
```
注意：`<ChildComponent v-model:title="pageTitle" />`的简写形式是 `<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />`

**4.refs**

**父组件**

```js
<template>
  <ul>
    <li v-for="i in childRefs?.list" :key="i">{{ i }}</li>
  </ul>
  <!-- 子组件 ref的值与<script>中的保持一致 -->
  <child-components ref="childRefs"></child-components>
  <!-- 父组件 -->
</template>
import { ref } from 'vue'
import ChildComponents from './child.vue'
const childRefs = ref(null)
```
**子组件**

```js
<template>
  <div>
      <button @click="handleAdd">添加</button>
  </div>
</template>

import { ref, defineExpose } from 'vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
// setup组件默认是关闭的，也即通过模板ref获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。如果需要公开需要通过 defineExpose API暴露
defineExpose({ list })
```

**5.provide/inject**

`provide和inject是Vue中提供的一对API，该API可以实现父组件向子组件传递数据，无论层级有多深，都可以通过这对API实现。`

**父组件**

```js
<template>
  <!-- 子组件 -->
  <child-components></child-components>
  <!-- 父组件 -->
  <button @click="handleAdd">添加</button>
</template>
import { ref, provide } from 'vue'
import ChildComponents from './child.vue'
const list = ref(['JavaScript', 'HTML', 'CSS'])
const value = ref('')
// 向子组件提供数据
provide('list', list.value)
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ''
}
```
**子组件**

```js
<template>
  <ul>
    <li v-for="i in list" :key="i">{{ i }}</li>
  </ul>
</template>
import { inject } from 'vue'
// 接受父组件提供的数据
const list = inject('list')
```
值得注意的是使用`provide`进行数据传递时，尽量`readonly`进行数据的包装，避免子组件修改父级传递过去的数据。

**6.vuex与pinia**

- pinia介绍
  Vuex和Pinia是Vue3中的状态管理工具，使用这两个工具可以轻松实现组件通信。

  Pinia 是一个状态管理库，由 Vue 核心团队维护，对 Vue 2 和 Vue 3 都可用。

  现有用户可能对 Vuex 更熟悉，它是 Vue 之前的官方状态管理库。由于 Pinia 在生态系统中能够承担相同的职责且能做得更好，因此 Vuex 现在处于维护模式。它仍然可以工作，但不再接受新的功能。对于新的应用程序，建议使用 Pinia。

  相比于 Vuex，Pinia提供了更简洁直接的 API，并提供了组合式风格的 API，最重要的是，在使用 TypeScript 时它提供了非常好的类型推导。

- 安装
  ```js
    npm install pinia --save
  ```

- 使用
  1. src文件夹下新建store/index.js  

      ```js
      import { createPinia } from "pinia";
      // 创建store实例
      const store = createPinia();
      export default store;
      ```
  2. main.ts引入
     ```js
      import store from '@/store/index.js'
      const app = createApp(App);
      app.use(store);
     ```
  3. store下新建js文件，比如userInfo.js

      ```js
      import { defineStore } from 'pinia'

      export const userStore = defineStore({
          id: 'userInfo',  // 命名，唯一
          state: () => {
              return {
                  userInfo: {}
              }
          },
          actions: {
              setUserInfo(data) {
                  // 可直接通过this访问state属性
                  this.userInfo = data;
              },
          }
      })
      ```
  
  4. 页面使用    
      
      ```js
        import { userStore } from "@/store/userInfo.js";
        export default defineComponent({
          setup() {
            const store = userStore();
            console.log('store实例', store);
            return {}
          },
        })
      ```