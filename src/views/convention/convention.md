**1. 所有页面或组件必须使用Vue3的script setup方式编写**

**2. 项目中只能使用TS或TSX，禁止使用JS**

**3. 若非特殊情况，数据类型不要使用any**

**4. 使用.env管理全局配置：**
> env.local.*是开发环境配置
> 
> env.prod.*是线上环境配置，不能轻易修改

**5. 项目中所有样式使用SCSS编写，所有页面或组件中的style必须加scope**

**6. 所有全局样式以“global-”为前缀，以区分于局部样式**

**7. 所有页面或组件的根元素class名称必须与Vue文件同名，但类名要以短横线命名**

**8. 所有功能模块的根文件统一命名为Index.vue，但Index.vue不在路由path中体现，如下：**
```typescript
// Vue文件路径
|--agile
|  |--Index.vue
|  |--Shortcut.vue
|  |--Utils.vue
|  |--Vue3.vue


// 路由
const routes: Array<RouteRecordRaw> = [
    {
        path: 'agile',
        component:() => import('@/views/agile/Index.vue'),
        children: [
            {
                path: 'Utils',
                component:() => import('@/views/agile/Utils.vue'),
            },
            {
                path: 'Shortcut',
                component:() => import('@/views/agile/Shortcut.vue'),
            },
            {
                path: 'Vue3',
                component:() => import('@/views/agile/Vue3.vue'),
            }
        ]
    }
]
```

**9. 项目完全基于element-plus + Typescript开发，不得在项目中使用旧版element或其它UI框架**

**10. 如果要修改element-plus组件颜色，尽量去配置element-plus主题色，不要单独修改组件颜色**


**11. 命名规范**
> CSS文件、JS文件、图片、文件夹、属性名、class类名等全部使用短横线命名；
> 
> Vue文件使用大驼峰命名，并且命名尽量使用多个单词，根组件除外；
>
> 变量名、函数名使用小驼峰



**12. 命名关联，CSS、JS、图片、VUE等文件在命名时，必须体现隶属关系；例如：**
```javascript
TodoList.vue
TodoListItem.vue
TodoListItemButton.vue

todo-list-title.png
todo-list-item-icon.png
todo-list-item-button-icon.png
```
**13. 命名对应**
> 路由path 必须与Vue文件的路径名称完全对应,包括大小写；
> 
> 图片文件的路径必须与Vue文件的路径名称完全对应；

**14. 若非特殊需求，尽量不要给路由定义name，以避免name重复；**

**15. 若非特殊需求，尽量不要在项目中使用路由name**

**16. 项目前期组件抽取时，务必严格按照UI图开发，防止错误的样式被引用至全局**

**17. 所有select下拉框、cascader级联选择器、下拉tree等必须根据业务封装成组件，如下：**
```javascript
SelectPost       // 岗位下拉选择
SelectComponay   // 单位下拉选择
...

CascaderRegion   // 省市区级联选择
CascaderRole     // 角色级联选择
...
```

**18. 样式穿透使用`:deep`，禁止用`/deep/`、`>>>` 、`:v-deep`**

**19. 多封装组件，少定义全局样式，以降低样式冲突的概率**

**20. 项目中所有公共CSS放置于 assets/css/中，公共样式分为如下3部分：**
```javascript 
common.scss              // 项目本身的全局样式

override-important.scss  // 用于覆盖原生或三方组件的全局样式

page-user.scss           // 局部样式，当某些局部样式被多个页面引用时，可以单独提出到此，并以page-为前缀进行命名
page-xxxx.scss           // 
... 
```

**21. 所有页面或组件都要定义name，且name必须与vue文件同名，定义name有助于调试查错**

**22. 所有正则全部定义于 /service/regular.ts 中, 项目中可直接调用：**
```javascript
regular.idCard
regular.phone
...
```

**23. 所有独立于业务的工具方法全部封装于 /service/utils.ts 中，项目中可直接调用：**
```javascript
utils.isMobile()
utils.getUrlParam()
...
```

**24. components只能放置全局公共组件，业务模块的组件放置于相应模块下**

**25. 所有的图表必须单独封装成组件，在组件内部进行配置和接口调用**

**26. 所有的新增、编辑等功能必须抽成组件进行调用**

**27. Vue文件代码行数最多不超过300行**

**28. v-if 和 v-show 不能同时使用，否则可能报如下错误，导致浏览器卡住**
```javascript
vue.runtime.esm.js:3006 DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
```

**29. 浮点数在页面上渲染时，必须指定要保留的小数位数，以避免小数位浮动，如下：**
```javascript
let num = 111.1;
num._toFixed(2);
```

**30. 为了确保所有页面的代码结构简洁统一，页面开发必须复用已有的页面模板：**

[页面模板](/page-template/search-list)

**31. CSS中的尺寸大小单位全部使用rem，禁止在项目中使用px**

> px是固定单位，em是相对父级的单位，rem是相对html根节点的单位；
> 
> rem的出现是为了解决em相对父级级联计算的缺点，rem兼容IE8以上版本和其它所有浏览器；
> 
> 按照国际主流的网页编写规范，推荐使用rem，同时不要固定html根节点的font-size大小，而改用100%；
> 
> 使用rem，同时将根节点font-size设为100%，可使页面元素的大小跟随用户浏览环境的设置，同时开发人员也可通过调整根节点font-size的百分比大小来控制相对于浏览器环境的元素大小，大部分浏览器默认的字体大小为16px;
> 

**32. 为了提高性能，要尽量缩小 css 自定义变量的作用域，避免将自定义变量定义在全局 :root 下**


**33. 所有图标使用SVG，以便通过代码修改图标的颜色、大小等**. 

SVG的优点：
> 
> 支持多色图标
> 
> 支持使用font-size、color来调整样式
> 
> 支持 ie9+
> 
> 支持CSS动画
> 
> 符号雪碧图，可减少HTTP请求
> 
> SVG是矢量图，缩放不失真

```html
<!-- 使用示例（test为svg图片的名称） -->
<svg-icon name="test"></svg-icon>
```
> 开发中，让UI设计师提供SVG格式的图标
> 
> SVG图片预览软件：https://github.com/tibold/svg-explorer-extension/releases

**34. Typescript代码结构**
```typescript
// 1.0> 类型定义
interface DataType {
    ....
}

// 2.0> 数据定义
const isLoading = ref(false);
....

// 3.0> 生命周期和事件监听
onMounted(() => {
    loadData();
});
watch(data, () => {
    ....
});

// 4.0> 函数方法
const loadData = () => {
    ....
}

const add = () => {
    ....    
};
```

**34. 所有需要拼接URL基地址的地方，全部使用common.url(<url>)进行包裹，common.url会在生产环境下动态读取基地址**
```typescript
// 例如:
common.url(process.env.VUE_APP_BASE_URL + "/em/point")
```

**34. 开发建议**
> 任何功能开发前，务必先理清思路，设计代码组织方式，确保功能代码的清晰度和扩展性
> 
> 建议所有页面使用命名统一的数据映射方法，以提高代码可读性
> 
> 当接口返回数据无法直接渲染到页面上，且返回数据与页面差异较大或需要逻辑处理时，必须单独提出一个JS/TS文件对数据进行处理和映射，避免同时使用JS、CSS、HTML处理数据，三者同时使用会使代码可读性差，且极易混乱

**37. 所有人不得轻易修改全局样式、全局方法、公共组件、全局配置等，所有全局性的修改必须由技术组讨论后进行调整**






