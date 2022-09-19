### Nginx配置反向代理

#### 1、何为反向代理？

在介绍反向代理之前，先来了解一下正向代理。

**正向代理：**如果把局域网外的 Internet 想象成一个巨大的资源库，则局域网中的客户端要访问 Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理。下面是正向代理的原理图。

<img src="/docs-files/guide/nginx/正向代理.png" width = "800" height = "500" /><br><br><br>


**反向代理：**看下面原理图，就一目了然。其实客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器 IP 地址。

<img src="/docs-files/guide/nginx/反向代理.png" width = "800" height = "500" /><br><br>

#### 2、Nginx配置文件

**2.1** Nginx 默认的配置文件是在安装目录下的 conf 目录下，后续对 Nginx 的使用基本上都是对此配置文件进行相应的修改。完整的配置文件，可以看一下文章最后。修改过nginx.conf配置文件，记得要重启Nginx服务。

**2.2** 配置文件中有很多#号，该符号表示注释内容

<img src="/docs-files/guide/nginx/look.png" width = "800" height = "700" /><br><br>

**2.3 第一部分：全局块**

```javascript
    worker_processes  1;
```

从配置文件开始到 events 块之间的内容，主要会设置一些影响 Nginx 服务器整体运行的配置指令，主要包括：配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。



上面这行 worker_processes 配置，这是 Nginx 服务器并发处理服务的关键配置，该值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约。

**2.4 第二部分：events 块**

```javascript
events {
    worker_connections  1024;
}
```

events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括：是否开启对多 work process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 wordprocess 可以同时支持的最大连接数等。



上述例子就表示每个 work process 支持的最大连接数为 1024。这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置。

**2.5 第三部分：http 块**

```javascript
    http {
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;

        server {
            listen       80;
            server_name  localhost;

            location / {
                root   html;
                index  index.html index.htm;
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
        }
    }
```

每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。

这部分是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。**需要注意的是：http 块也可以包括 http 全局块、server 块。下面的反向代理、动静分离、负载均衡都是在这部分中配置**

#### 3、反向代理如何配置

**反向代理实例一**

实现效果：使用 Nginx 反向代理，访问 `www.123.com` 直接跳转到 `127.0.0.1:8080`。



注意：此处如果要想从`www.123.com跳转到本机指定的ip，需要修改本机的hosts文件。此处略过`

*配置代码*

```javascript
    server {
    listen       80;
    server_name  192.168.17.129;

    location / {
        root   html;
        index  index.html index.htm;
        proxy_pass  http://127.0.0.1:8080
        }
    }
```

**反向代理实例二**

<b>实现效果：使用 Nginx 反向代理，根据访问的路径跳转到不同端口的服务中，Nginx 监听端口为 9001。</b>

访问 `http://127.0.0.1:9001/edu/` 直接跳转到 `127.0.0.1:8081`

访问 `http://127.0.0.1:9001/vod/` 直接跳转到 `127.0.0.1:8082`

第一步，需要准备两个 tomcat，一个 8001 端口，一个 8002 端口，并准备好测试的页面

第二步，修改 nginx 的配置文件，在 http 块中配置 server

```javascript
    server {
        listen       9001;
        server_name  192.168.17.129;

        location ~ /edu/ {
            proxy_pass  http://127.0.0.1:8080
        }

        location ~ /vod/ {
            proxy_pass  http://127.0.0.1:8081
        }
    }
```
























<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>