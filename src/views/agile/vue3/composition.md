#### 什么是setup？

  在setup中定义的状态，方法要想在模板中使用，必须 `return` ,setup中是不能访问 this
  
  setup方法是在components,props data Methods Computed 之前执行

#### ref创建响应式变量

    ref用来定义响应式的 字符串、 数值、 数组、Bool类型

    在 setup中访问定义的变量值，必须通过变量名.value 来获取到该对象的值

```js

<script>  
import {ref,defineComponent} from 'vue'

export default defineComponent({
    setup () {
        const title = ref('前端自学社区')  // 定义响应式变量
        console.log(title.value)    // 访问该变量
        return {title}    // 返回变量
     }
 })
</script>
```
#### reactive 用来定义响应式的对象

```js
import { reactive } from 'vue'
export default {
   setup() {
        let state = reactive({
            age:1
        })
        return{state}
   }
}
```

#### toRefs用来解构响应式对象数据
```js
import { reactive, toRefs }  from "vue"
export default {
  setup() {
    let state=reactive({
        name:'李四',
        age:40
    })
    // 这里进行了一次解构
    let {name,age }=toRefs(state);
    return {name,age}
  }
}
```