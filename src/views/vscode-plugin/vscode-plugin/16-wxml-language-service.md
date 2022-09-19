### <a href="https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode" target="_blank">WXML - Language Service官网</a>


微信小程序 .wxml 文件代码高亮，标签、属性的智能补全（同时支持原生小程序、mpvue 和 wepy 框架，并提供 code snippets）。

**一键创建小程序组件**

> 右键可以看到 New Miniprogram Component 选项，输入组件名即可一键创建 .wxml/.js/.wxss/.json 以及组件文件夹

> 创建成功后自动打开 js 文件

<img src="/docs-files/vscode-plugin/wxml-language-service/小程序1.gif" width="800" height="250" />
<br>

> 创建组件支持配置 css/wxml/js 后缀，比如项目使用 less/vue/ts

<img src="/docs-files/vscode-plugin/wxml-language-service/小程序.gif" width="800" height="250" />
<br>

**标签名与属性名自动补全**

> wxml 中需要输入 < 才会触发标签补全，而 pug 语言只需要写标签开头即能触发标签补全

> 输入空格会触发对应标签的属性补全

<img src="/docs-files/vscode-plugin/wxml-language-service/zidong.gif" width="800" height="350" />
<br>

**根据组件已有的属性，自动筛选出对应支持的属性集合**

> 当 picker 的 mode="selector" 时，有 range 和 range-key 的属性

> 当 picker 的 mode="time" 时，有 start 和 end 的属性

<img src="/docs-files/vscode-plugin/wxml-language-service/picker.gif" width="800" height="350" />
<br>

**属性值自动补全（有可选值的情况下才会触发补全）**

<img src="/docs-files/vscode-plugin/wxml-language-service/shux.gif" width="800" height="350" />
<br>

**点击模板文件中的函数或属性跳转到 js/ts 定义的地方（纯 wxml 或 pug 文件才支持，vue 文件不完全支持）**

<img src="/docs-files/vscode-plugin/wxml-language-service/tianzhuan.gif" width="800" height="450" />
<br>

**样式名自动补全（纯 wxml 或 pug 文件才支持，vue 文件不完全支持）**

<img src="/docs-files/vscode-plugin/wxml-language-service/buquan.gif" width="800" height="450" />
<br>



