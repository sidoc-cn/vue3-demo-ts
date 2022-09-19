    watch需接受3个参数
    1.  要监听更新的响应式引用或者 getter 函数
    2.  一个回调用来做更新后的操作
    3.  可选配置项
    

- 监听一个变量
```js
import { wathch } from 'vue'
let num = ref(0)   
watch(num,(newValue, oldValue) => {
    console.log(newValue, oldValue)
})
```

- 监听多个变量
```js
import { wathch } from 'vue'
let year = ref(2022)
let age = ref(22)
watch([year,age],(newValue, oldValue) => {
    console.log(newValue, oldValue)
})

// 加入配置项参数
watch([year,age],(newValue, oldValue) => {
    console.log(newValue, oldValue)
},{immediate:true})  // 设置立即监听
```

- 监听reactive对象
```js
const student = reactive({
    name:'张三',
    age:20,
    a:{
        salary:'20k'
    }
})
watch(student,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```
**注意：此时的oldValue失效，在监听深层次的数据时依旧可以监听到变化，可以看出vue3默认开启了深度监视**

- 情况四（监听对象中的某个属性）
```js
const student = reactive({
    name:'张三'
})
changeName(){
    student.name = student.name + '@'
}
// 监听student中的name属性
watch(student.name,(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```
**监听对象的某个属性需要将watch函数的第一个参数写为一个函数需要监听的属性作为返回值，可以正确的获得oldValue**

- 情况五（监听对象的某些属性）
```js
const student = reactive({
    name:'张三',
    age:20
})
changeAge(){
    student.age ++
}
// 监听student中的name属性和age属性
watch([()=>student.name, ()=>student.age],(newValue,oldValue)=>{
    console.log(newValue,oldValue);
})
```
**监听对象的一些属性传入的第一个参数是存放返回对象属性的函数的数组，oldValue有效**

- 情况六（监听对象套很深的对象的属性）
```js
const student = reactive({
    a: {
        b: {
            salary: "20k",
        },
    },
});
changeSalary() {
  student.a.b.salary = "50k";
}
watch(() => student.a, (newValue, oldValue) => {
    console.log(newValue, oldValue);
},{ deep: true })
```
**监听对象嵌套很深需要开启深度监听，oldValue不好使**
