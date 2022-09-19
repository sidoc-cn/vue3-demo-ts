
#### Moment是强大的日期处理库，用于解析、验证、操作和格式化日期；

#### 安装
```typescript
npm install moment --save
```

#### 使用
```typescript
import moment from "moment"

// 当前时间格式化
moment().format('MMMM Do YYYY, h:mm:ss a'); // August 18th 2022, 1:01:59 pm
moment().format('dddd');                    // Thursday
moment().format("MMM Do YY");               // Aug 18th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                          // 2022-08-18T13:01:59+08:00

// 指定时间格式化
let date = "2020-03-07T16:00:00.000Z";
moment(date).format('YYYY-MM-DD HH:mm:ss')
```

#### 资料
官网：<a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a>

Github：<a href="https://github.com/moment/moment" target="_blank">https://github.com/moment/moment</a>