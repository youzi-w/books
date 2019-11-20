# Ajax

## 概述

- AJAX` 是一种用于创建快速动态网页的技术。` 

- 通过在后台与服务器进行少量数据交换，AJAX可以使网页实现异步更新。

  这意味着可以在不重新加载（刷新）整个网页的情况下，对网页的某部分进行更新。

## 优缺点

优点

- 页面无刷新，用户体验好
- 异步通信，更加快的响应能力
- 减少冗余请求，减轻了服务器负担
- 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序

缺点

- `ajax`干掉了`back`按钮（没有history属性），即对浏览器后退机制的破坏。
- 存在一定的安全问题（post）
- 对搜索引擎的支持比较弱
- 破坏了程序的异常机制
- 无法用`URL`（链接）直接访问

## 应用场景

- 场景 1. 数据验证
- 场景 2. 按需取数据
- 场景 3. 自动更新页面

## 涵盖的技术

- 使用`CSS`和`XHTML`来表示。
- 使用`DOM`模型来交互和动态显示。
- 使用`XMLHttpRequest`来和服务器进行异步通信。
- 使用`javascript`来绑定和调用。

###  XmlHttpRequest 的属性和方法

#### 属性

![属性](H:\Books\Ajax\img\XmlHttpRequest的属性.png)

#### 方法

![方法](H:\Books\Ajax\img\XmlHttpRequest的方法.png)





## 创建Ajax的步骤

### 创建XMLHttpRequest对象

 Ajax`的核心是`XMLHttpRequest`对象，它是`Ajax实现的关键，发送异步请求、接受响应以及执行回调都是通过它来完成 

 创建 XMLHttpRequest 对象的语法：  为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。 

1.  所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera） 

   ```csharp
   var iable=new XMLHttpRequest();
   ```

2.  老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象 

   ```csharp
   var iable=new ActiveXObject("Microsoft.XMLHTTP");
   ```

   实例（两种情况都涵盖）

   ```dart
   var xmlhttp;
   if (window.XMLHttpRequest){ 
     // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码 
     xmlhttp=new XMLHttpRequest();
   }else{ 
     // IE6, IE5 浏览器执行代码 
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
   ```

### 发送请求

 如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法： 

| 方法                   | 描述                                                       | 详情                                                         |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| open(method,url,async) | 规定请求的类型、URL以及是否异步处理请求method：GET \| POST | method：GET \| POST url:文件在服务器上的位置 async:true（异步） \| false(同步) |
| send(string)           | 将请求发送到服务器                                         | string:仅用于 POST请求                                       |

#### method

1. ajax中post和get的区别

   get和post都是向服务器发送一种请求，只是发送机制不同 
   1 GET请求会将参数跟在URL后进行传递，而POST请求则是作为HTTP消息的实体内容发送给WEB服务器。 
   2.首先是”GET方式提交的数据最多只能是1024字节”，Post传输的数据量大，可以达到2M。 
   3.get方式请求数据会被浏览器缓存起来，因此其他人就可以从浏览器的历史记录中读取到这些数据，例如账号密码等。在某种情况下，get方式会带来严重的安全问题。而post方式相对来说就可以避免这些问题。 
   4.Post请求必须设置Content-Type值为application/x-form-www-urlencoded； 
   5.发送请求时,因为Get请求的参数都在url里,所以send函数发送的参数为null,而Post请求在使用send方法时,却需赋予其参数；

2. 在服务器端的区别:

   在客户端使用get请求时,服务器端使用Request.QueryString来获取参数,而客户端使用post请求时,服务器端使用Request.Form来获取参数. 
   HTTP标准包含这两种方法是为了达到不同的目的。POST用于创建资源，资源的内容会被编入HTTP请示的内容中。例如，处理订货表单、在数据库中加入新数据行等。

   当请求无副作用时（如进行搜索），便可使用GET方法；当请求有副作用时（如添加数据行），则用POST方法。一个比较实际的问题是：GET方法可能会产生很长的URL，或许会超过某些浏览器与服务器对URL长度的限制。

若符合下列任一情况，则用POST方法：

- 请求的结果有持续性的副作用，例如，数据库内添加新的数据行。
- 若使用GET方法，则表单上收集的数据可能让URL过长。
- 要传送的数据不是采用7位的ASCII编码。

若符合下列任一情况，则用GET方法：

- 请求是为了查找资源，HTML表单数据仅用来帮助搜索。
- 请求结果无持续性的副作用。
- 收集的数据及HTML表单内的输入字段名称的总长不超过1024个字符。

#### url

open() 方法的 *url* 参数是服务器上文件的地址：

```kotlin
xmlhttp.open("GET","ajax_test.html",true);
```

该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传回响应之前，能够在服务器上执行任务）。

#### async(异步)

##### 异步 - True 或 False？

AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
 XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：

```kotlin
xmlhttp.open("GET","ajax_test.html",true);
```

对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。AJAX 出现之前，这可能会引起应用程序挂起或停止。
 通过 AJAX，JavaScript 无需等待服务器的响应，而是：

- 在等待服务器响应时执行其他脚本
- 当响应就绪后对响应进行处理

### 处理相应