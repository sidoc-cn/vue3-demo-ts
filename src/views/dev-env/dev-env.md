#### 1. 基本情况

 项目基于 Vue3 + Element-plus + TypeScript 开发

 内网前端开发工具：<a href="file:\\192.168.10.100\开发工具-共享\前端开发环境">\\\\192.168.10.100\开发工具-共享\前端开发环境</a>

 内网项目共享盘：<a href="file:\\192.168.10.100\服务器共享盘">\\\\192.168.10.100\服务器共享盘</a>

#### 2. Git配置

使用Git克隆项目前，务必执行如下命令
```shell
git config --global core.autocrlf false
```
> Windows平台下，git在拉取代码时，会自动将代码的换行符转为'\n\r'，但Linux和Mac下的换行符却是'\r'，这会导致各平台下的代码实际内容发生冲突，执行上述命令可禁止git转换换行符，但该配置不会影响已被本地git管理的项目，因此需要删除项目，重新克隆；

#### 3. 项目结构
```typescript
|--.vscode   // 编辑器环境配置
|--public    // 项目入口
|  |--docs-fils    // Markdown文档中外链的图片和文件
|  |--favicon.ico
|  |--index.html
|--src        
|  |--assets       // 静态资源目录
|  |  |--css
|  |  |--fonts
|  |  |--img
|  |--components   // 全局公共组件
|  |--router
|  |  |--index.ts  // 路由入口文件
|  |  |--模块1.ts
|  |  |--模块2.ts
|  |  |--模块3.ts
|  |  |--模块4.ts
|  |  |--模块xxxx.ts
|  |--service
|  |  |--common.ts         // 公共方法
|  |  |--directive.ts      // 全局指令
|  |  |--global-install.ts 
|  |  |--http.ts           // 请求封装
|  |  |--regular.ts        // 常用正则
|  |--store
|  |--views
|  |  |--模块1
|  |  |--模块2
|  |  |--模块3
|  |  |--模块4
|  |  |--模块xxxx
|  |--App.vue
|  |--main.ts
|  |--shims-vue.d.ts
|--.browserslistrc
|--.env.**.local       // 开发环境配置
|--.env.**.production  // 生产环境配置
|--.eslintrc.js
|--.prettierrc.js
|--babel.config.js
|--build-after-hook.js
|--build-before-hook.js
|--global-snippets.code-snippets
|--package-lock.json
|--package.json
|--README.md
|--tsconfig.json
|--ttt.gitignore
|--vue.config.js
|--yarn.lock
```

#### 4. 编辑器

VS Code最新版

#### 5. VS Code必装插件
```typescript
Vue Language Features (Volar)     // Vue语法支持
Prettier - Code formatter         // 代码美化
ESLint                            // 代码格式检查
ENV                               // 配置文件高亮
```
> Volar是Vue官方推出的Vue3支持插件，是Vue3最优秀的支持，其功能强大，但其性能很差，尤其是目前的版本(0.40.13)，会严重影响开发体验。


#### 6. 常用操作
```typescript
// 启动
npm run server-xxxx

// 打包部署
npm run build-xxxx

// 检查代码质量，并修复
npm run lint
```

#### 7. 注意事项

**<font color=red>
开发过程务必严格遵守开发约定！！！
</font>**



