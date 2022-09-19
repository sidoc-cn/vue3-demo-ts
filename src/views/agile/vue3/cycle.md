```js
setup() {
  // 在 Dom 加载前触发
  onBeforeMount(() => {
    console.log('onBeforeMount')
  })
  // 在 Dom 加载完触发
  onMounted(() => {
    console.log('onMounted')
  })
  // 在页面更新前触发
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
  })
  // 在页面更新完触发
  onUpdated(() => {
    console.log('onUpdated')
  })
  // 在组件销毁之前触发
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
  })
    // 在组件销毁完成触发
  onUnmounted(() => {
    console.log('onUnmounted')
  })
  // 在每次渲染后重新收集响应式依赖
  onRenderTracked(() => {
    console.log('onRenderTracked')
  })
 // 在每次触发页面重新渲染时自动执行
  onRenderTriggered(() => {
    console.log('onRenderTriggered')
  })
}
```