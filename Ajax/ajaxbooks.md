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

##  XmlHttpRequest 的属性和方法

### 属性

XMLHttpRequest对象的常见属性如下：

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | 存储函数（或函数名），每当readyState的属性改变时，就会调用该函数。 |
| readyState         | 存有的XMLHttpRequest的状态从0到4发生变化。  0：请求未初始化  1：服务器连接已建立  2：请求已接收  3：请求处理中  4：请求已完成，且响应已就绪 |
| reponseText        | 以文本形式返回响应。                                         |
| responseXML        | 以XML格式返回响应                                            |
| status             | 将状态返回为数字（例如，“Not Found”为404，“OK”为200）        |
| statusText         | 以字符串形式返回状态（例如，“Not Found”或“OK”）              |

![属性](H:\Books\Ajax\img\XmlHttpRequest的属性.png)

### 方法

XMLHttpRequest对象的重要方法如下：

| 方法                                                | 描述                                |
| :-------------------------------------------------- | :---------------------------------- |
| abort()                                             | 取消当前请求。                      |
| getAllResponseHeaders()                             | 以字符串形式返回完整的HTTP标头集。  |
| getResponseHeader( headerName )                     | 返回指定HTTP标头的值。              |
| void open（method，URL）                            | 打开指定获取或交的方法和URL的请求。 |
| void open（method，URL，async）                     | 与上面相同，但指定异步或不。        |
| void open（method，URL，async，userName，password） | 与上面相同，但指定用户名和密码。    |
| void send（content）                                | 发送获取请求。                      |
| setRequestHeader（ label，value）                   | 将标签/值对添加到要发送的HTTP标头。 |

## Ajax的工作流程

一个完整的AJAX请求包括五个步骤:

　　1.创建`XMLHTTPRequest`对象

　　2.使用open方法创建http请求,并设置请求地址(open(method,url,async))

　　3.设置发送的数据，开始和服务器端交互(get or post, send())

　　4.注册事件（onreadystatechange()）

　　5.获取响应并更新界面

![1](H:\Books\Ajax\img\ajax工作原理.png)

例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1>Ajax 发送 get 请求</h1>
<input type="button" value="发送get_ajax请求" id='btnAjax'>

<script type="text/javascript">
    // 绑定点击事件
    document.querySelector('#btnAjax').onclick = function () {
        // 发送ajax 请求 需要 五步

        // （1）创建异步对象
        var ajaxObj = new XMLHttpRequest();

        // （2）设置请求的参数。包括：请求的方法、请求的url。
        ajaxObj.open('get', '02-ajax.php');

        // （3）发送请求
        ajaxObj.send();

        //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
        //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
        ajaxObj.onreadystatechange = function () {
            // 为了保证 数据 完整返回，我们一般会判断 两个值
            if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
                // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
                console.log('数据返回成功');

                // 数据是保存在 异步对象的 属性中
                console.log(ajaxObj.responseText);

                // 修改页面的显示
                document.querySelector('h1').innerHTML = ajaxObj.responseText;
            }
        }
    }
</script>
</body>
</html>
```



 <!DOCTYPE html> <html lang="en"> <head>    <meta charset="UTF-8">    <title>Document</title> </head> <body> <h1>Ajax 发送 get 请求</h1> <input type="button" value="发送get_ajax请求" id='btnAjax'> <script type="text/javascript">    // 绑定点击事件    document.querySelector('#btnAjax').onclick = function () {        // 发送ajax 请求 需要 五步         // （1）创建异步对象        var ajaxObj = new XMLHttpRequest();         // （2）设置请求的参数。包括：请求的方法、请求的url。        ajaxObj.open('get', '02-ajax.php');         // （3）发送请求        ajaxObj.send();         //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。        //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。        ajaxObj.onreadystatechange = function () {            // 为了保证 数据 完整返回，我们一般会判断 两个值            if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {                // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的                // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示                console.log('数据返回成功');                 // 数据是保存在 异步对象的 属性中                console.log(ajaxObj.responseText);                 // 修改页面的显示                document.querySelector('h1').innerHTML = ajaxObj.responseText;            }        }    } </script> </body> </html> 

 <!DOCTYPE html> <html lang="en"> <head>    <meta charset="UTF-8">    <title>Document</title> </head> <body> <h1>Ajax 发送 get 请求</h1> <input type="button" value="发送get_ajax请求" id='btnAjax'> <script type="text/javascript">    // 绑定点击事件    document.querySelector('#btnAjax').onclick = function () {        // 发送ajax 请求 需要 五步         // （1）创建异步对象        var ajaxObj = new XMLHttpRequest();         // （2）设置请求的参数。包括：请求的方法、请求的url。        ajaxObj.open('get', '02-ajax.php');         // （3）发送请求        ajaxObj.send();         //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。        //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。        ajaxObj.onreadystatechange = function () {            // 为了保证 数据 完整返回，我们一般会判断 两个值            if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {                // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的                // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示                console.log('数据返回成功');                 // 数据是保存在 异步对象的 属性中                console.log(ajaxObj.responseText);                 // 修改页面的显示                document.querySelector('h1').innerHTML = ajaxObj.responseText;            }        }    } </script> </body> </html> 

#### 创建XMLHttpRequest对象

 Ajax的核心是`XMLHttpRequest`对象（术语缩写为XHR），它是Ajax实现的关键，发送异步请求、接受响应以及执行回调都是通过它来完成 

- 注意：  为了应对所有的现代浏览器（包括 IE5 和 IE6），请检查浏览器是否支持 XMLHttpRequest对象。 

1. 所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera） 

   ```csharp
   var iable=new XMLHttpRequest();
   ```

2. 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象 

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

### 设置请求的参数

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(string \| null)         | 将请求发送到服务器。*string*：仅用于 `POST` 请求。 null 用于 get请求 |

### 发送`http`请求

使用 get请求或 post请求

#### method

1. ajax中`post`和`get`的区别

   get和post都是向服务器发送一种请求，只是发送机制不同 
   1 `GET`请求会将参数跟在URL后进行传递，而`POST`请求则是作为HTTP消息的实体内容发送给WEB服务器。 
   2.首先是”GET方式提交的数据最多只能是1024字节”， `POST`没有数据量限制 
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

### 响应和处理

#### 服务器响应

- **状态行** 
  `xhr.status`状态码，如200，304，404等； 
- **响应主体** 
  `xhr.responseText`与`xhr.responseXML`都表示响应主体。 

当发送一个请求后，客户端需要确定这个请求什么时候会完成，因此，XMLHttpRequest对象提供了`onreadystatechange`事件机制来捕获请求的状态，继而实现响应。 

#### 注册事件

 　每当`readyState`改变时，就会触发`onreadystatechange`事件。 

| 属性                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| `onreadystatechange` | 存储函数（或函数名），每当`readyState`属性改变时，就会调用该函数。 |
| `readyState`         | 存有 XMLHttpRequest 的状态（请求状态）。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪 |
| `status`             | 200: "OK"  404: 未找到页面（响应状态）                       |

 在 onreadystatechange 事件中，**当 readyState 等于 4，且状态码为200时，表示响应已就绪**。 

```js
xmlhttp.readyState==4 && xmlhttp.status==200
```

服务器响应的内容

- responseText：获得字符串形式的响应数据。
- responseXML：获得 XML 形式的响应数据。