#### 模板插值语法

- 在script声明一个变量可以直接在template使用用法为{{变量名称}}
    ```js
    <template>
        {{ message }}
    </template>
    const message = "我是唐少"
    ```
- 模板语法是可以编写条件运算的
    ```js
    <template>
        {{ message2==0 ? '我是老大' : '我笑的' }}
    </template>
    const message2:number = 1
    ```
- 运算也是支持的
    ```js
    <template>
        {{ message2 + 1 }}
    </template>
    const message2:number = 1
    ```
- 操作API 也是支持的
    ```js
    <template>
        {{ message.split('').map(v => `4546$v`) }}
    </template>
    const message = "我是唐少"
    ```

#### 指令

- v-text
    text主要用来更新textContent，可以等同于JS的text属性。``代码如下（示例）：
    ```js
    <span v-text="msg"></span> //全写
    <span>{{msg}}</span>       // 简写
    
    const msg = "Danny"
    ```
- v-html
    v-html：双大括号的方式会将数据解释为纯文本，而非HTML。为了输出真正的HTML，可以用v-html指令。它等同于JS的innerHtml属性。代码如下（示例）：
    ```js
    <div v-html="rawHtml"></div>

    const rawHtml = "<i style=\"color: #42b983\">Danny</i>"

    ```
- v-bind
    响应式的绑定一个属性。
    ```js
    <div v-bind:id="dynamicId"></div>   //全写
    <div :id="dynamicId"></div>   //简写
    <button :disabled="isButtonDisabled">Button</button>  //绑定bool
    // 当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled 属性。而当其为其他假值时 属性 将被忽略。

    <div v-bind="objectOfAttrs"></div>  //绑定对象
     let objectOfAttrs = reactive({
        age:1,
        name:'hello',
    })   


    <a :[attributeName]="url"> ... </a>  //参数表达式有一些约束
    // 这里的 attributeName 会作为一个 JavaScript 表达式被动态执行，计算得到的值会被用作最终的参数。举例来说，如果你的组件实例有一个数据属性 attributeName，其值为 "href"，那么这个绑定就等价于 v-bind:href。

    ```

- v-for
    ```js
    <li v-for="item in items">{{ item.message }}</li>

    <li v-for="(item, index) in items">{{ item }} - {{ index }}</li>

    <script lang="ts" setup>
    interface Item {
        message: string;
    }
    const items: Array<Item> = reactive([
        {
            message: "Foo",
        },
        {
            message: "Bar",
        },
    ]);
    </script>
    ```
- v-if 和 v-show
    v-if:  用于控制元素的显示与隐藏（动态的向DOM树内添加或者删除DOM元素）
    ```js
    <h1 v-if="awesome">Vue is awesome!</h1>
    ```

    v-show:  用于控制元素的显示与隐藏（相当于为元素添加 display:none; 样式）
    ```js
    <template>
        <button @click="getWherther">点击 显示/隐藏 文本内容</button>
        <div v-show="whether">
            <h2>嘿嘿哈哈嘿嘿</h2>
        </div>
    </template>
    let whether = ref<boolean>(true)
    const getWherther = ()=>{
        whether.value = !whether.value
    }
    ```
    **v-show 与 v-if 都用于控制元素的显示与隐藏，区别在于：v-show 操作样式，v-if 操作 DOM ；若频繁切换建议使用 v-show**

- v-if , v-else-if , v-else
    ```js
    <template>
        <button @click="getWherther">点击 显示/隐藏 文本内容</button>
        <div v-if="whether"><h2>嘿嘿哈哈嘿嘿</h2></div>
        <div v-else="!whether"> <h2>笑不出来了</h2></div>
    </template>

    import { ref } from 'vue';
    let whether = ref<boolean>(true)
    const getWherther = () => {
        whether.value = !whether.value
    }
    ```
    **一个 v-else 元素必须跟在一个 v-if 或者 v-else-if 元素后面，否则它将不会被识别。**

    v-else-if：顾名思义，v-else-if 提供的是相应于 v-if 的“else if 区块”。它可以连续多次重复使用：

    ```js
    <div v-if="type === 'A'"> A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'"> C</div>
    <div v-else>Not A/B/C</div>
    ```
    **和 v-else 类似，一个使用 v-else-if 的元素必须紧跟在一个 v-if 或一个 v-else-if 元素后面。**
- v-on

    可简写为 @ ，用来给元素绑定事件
    ```js
    <template>
        <h3 @click="getWherther">{{whether}}</h3>
    </template>
    import { ref } from 'vue';
    let whether = ref<boolean>(true)
    const getWherther = () => {
        whether.value = !whether.value
    }
    ```
    ```js
    <a @[eventName]="doSomething">
    //在此示例中，当 eventName 的值是 "focus" 时，v-on:[eventName] 就等价于 v-on:focus。
    ```

- v-model

    主要用于表单的双向绑定

    ```js
    <template>
        <input type="text" v-model="text">
    </template>
    import { reactive, ref } from 'vue';
    let text= ref<string>('')
    ```
- v-pre

    v-pre用于跳过这个元素和它子元素的编译过程，用于显示原来的Mustache语法
    ```js
    <template>
        <p>{{message}}</p>
        <p v-pre>{{message}}</p>
    </template>

    let message= ref<string>('Hello Ting,I am Key!')
    // 运行结果 第一个：Hello Ting,I am Key! ； 第二个{{message}}
    ```
- v-once

    v-once的作用是只会渲染对应元素一次，数据更新不会引起视图的更新，目的是为了优化页面的性能。
    ```js
    <p v-once>Initial value {{ counter }}</p>
    <p>Result: {{ counter }}</p>
    //  Initial value 保持不变，不会更新，Result 动态改变

    ```




