# http协议基础知识

# 概念

- HTTP(Hyper Text Transfer Protocol)<超文本传输协议>的缩写.是用于从WWW服务器传输超文本到本地浏览器的传输协议.

- HTTP是一个应用层协议,由请求和响应构成,是一个标准的客户端和服务器模型，约束双方规范的一个准则。

# 请求访问的方式

1. 通过浏览器的地址栏
2. 通过html当中的form表单
3. 通过a链接的href
4. src属性

# http协议的组成

请求和响应。请求与响应都是成对存在的

当在浏览器中输入网址访问某个网站时，你的浏览器会将你的请求封装成一个Http请求发送给服务器站点 ,服务器接收到请求后会组织响应数据封装成一个Http响应返回给浏览器.

![1574837639287](C:\Users\wenwei\AppData\Roaming\Typora\typora-user-images\1574837639287.png)



## 请求行

#### 请求方式

最常用的有get、post还有其他的请求方式，比如put、delete、options

#### 请求的资源

```
/Myxq/login.html?username=myxq&pwd=1234
```

#### 协议版本

1. HTTP/1.0，发送请求，创建一次连接，获得一个web资源，连接断开
2. HTTP/1.1，发送请求，创建一次连接，获得多个web资源，保持连接。

## 请求头

## 请求体













