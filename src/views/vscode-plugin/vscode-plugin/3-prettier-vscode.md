### <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">prettier-vscode官网</a>


**默认格式化程序**

为确保此扩展在您可能已安装的其他扩展上使用，请务必在 VS Code 设置中将其设置为默认格式化程序。可以为所有语言或特定语言设置此设置。

```javaScript
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
如果您想在特定语言上禁用 Prettier，您可以创建一个.prettierignore文件，也可以使用 VS Code 的editor.defaultFormatter设置。
以下将对除 Javascript 之外的所有语言使用 Prettier。

```javaScript
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "<another formatter>"
  }
}
```
以下将仅对 Javascript 使用 Prettier。
```javaScript
{
  "editor.defaultFormatter": "<another formatter>",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
如果您不希望它们被自动格式化，您可以禁用特定语言的保存格式。
```javaScript
{
  "[javascript]": {
    "editor.formatOnSave": false
  }
}
```
**格式选择**

格式选择适用于多种语言，具体取决于 Prettier 本身支持的内容。目前支持以下语言：
```javaScript
    javascript
    javascriptreact
    typescript
    typescriptreact
    json
    graphql
    handlebars
```

