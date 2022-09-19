#### Suspense作用

等待异步组件时渲染一些额外内容，让应用有更好的用户体验

#### Suspense使用步骤

- 异步引入组件

```js
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
```

- 使用Suspense包裹组件，并配置好default 与 fallback 

```js
    <h3>我是App组件</h3>
    <Suspense>
        
        <template v-slot:default>
            <Child/>
        </template>

        <template v-slot:fallback>
            <h3>加载中.....</h3>
        </template>
    </Suspense>

```
**其中 fallback是由于网速或者其他原因没有加载成功时显示的组件，当加载成功后显示default（default 与 fallback 不可改名，因为Suspense相当于定义好的slot具名插槽）**
