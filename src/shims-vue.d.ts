/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 声明*.md文件，否则在页面中通过 import 导入 .md 文件时会报错
declare module "*.md";

// 声明*.json文件，否则在页面中通过 import 导入 .json 文件时会报错
declare module "*.json";

// 声明*.ts文件，否则在页面中通过 import 导入 .ts 文件时会报错
declare module "*.ts";

// 声明marked模块
declare module "marked";



