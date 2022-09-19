- 示例1： 求和
```js
<template>
  <button @click="num1++">num1自加</button>
  <button @click="num2++">num2自加</button>
</template>
import { ref, computed } from "vue"
const num1 = ref(1)
const num2 = ref(1)
let sum = computed(()=>{
    return num1.value + num2.value
})


```
- 示例2 options 写法

```js
<template>
  <button @click="num1++">num1自加</button>
  <button @click="num2++">num2自加</button>
  <button @click="mul=100">改值</button>
</template>
import { ref, computed } from "vue"
const num1 = ref(1)
const num2 = ref(1)
let sum = computed(()=>{
    return num1.value + num2.value
})
let mul = computed({
    get:()=>{
        return num1.value *10
    },
    set:(value)=>{
        return num1.value = value/10
    }
})
```

- computed 传参
```js
<div v-for="(item,index) in arr" :key="index" @click="sltEle(index)">{{item}}</div>
import { ref, computed,reactive } from "vue"
const arr = reactive(['哈哈','嘿嘿'])
const sltEle = computed( (index)=>{
    console.log('index',index);
})
```


