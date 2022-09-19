**Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术。**

```js
// index.html
  <div id="app"></div>
  <div id="modal-wrapper">
    <!-- modal should get moved here-->
  </div>
```

```js
// App.vue
<template>
  <button @click="toggleModalState">Open modal</button>

  <teleport to="#modal-wrapper">
    <modal v-if="modalOpen">
      <p>Hello, I'm a modal window.</p>
    </modal>
  </teleport>

</template>

```

我们将模态内容包装在 teleport 组件中，还需要指定一个 to 属性，为该属性分配一个查询选择器，以标识目标元素，在本例中为 #modal-wrapper
**teleport 中的任何内容都将渲染在目标元素中**