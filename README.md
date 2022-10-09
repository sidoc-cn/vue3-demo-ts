# vue3-demo-ts-5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


EChart的文档资料由以下项目组成：

- EChart官网: <a href="https://github.com/apache/echarts-website" target="_blank">echarts-website</a>
- EChart官网部分源码: <a href="https://github.com/apache/echarts-www" target="_blank">echarts-www</a>
- ECharts源码: <a href="https://github.com/apache/echarts" target="_blank">ECharts</a>
- ECharts示例: <a href="https://github.com/apache/echarts-examples" target="_blank">echarts-examples</a>
- ECharts文档: <a href="https://github.com/apache/echarts-doc" target="_blank">echarts-doc</a>


### Centos 7.x / Mac OS
```shell
# 检查Nginx配置的正确性
nginx -t

# 启动Nginx服务
nginx

# 停止Nginx服务
nginx -s stop

# 重载Nginx配置
nginx -s reload

# 重新打开日志文件(让Nginx把新日志写入新文件中，以主动完成日志切割)
nginx -s reopen

# 查看Nginx版本号
nginx -v

# 查看Nginx帮助
nginx -h

# 查看Nginx进程
ps -ef | grep nginx 
```

### 国产麒麟服务器
```shell
# 需要在命令前加路径，其它同上；例如：
/usr/local/nginx/sbin/nginx -t
```
