#### Vue3官方文档：https://vue3js.cn/


#### Vue3离线文档安装教程
```javascript
// 从main分支上clone代码
git clone https://github.com/vuejs/docs.git --depth 1

// 全局安装pnpm（因为Vue3文档项目基于pnpm管理依赖包）
npm install pnpm -g

// 安装依赖
pnpm install

// 打包编译
pnpm run build

// 生成dist文件，通过nginx部署
```

下载编译好的[dist包](/docs-files/guide/doc/vue3-doc.rar)
