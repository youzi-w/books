- navigator 对象包含有关浏览器的信息，它有很多属性

- 常用的是 useAgent ,该属性可以返回 由客户机发送服务器的 user- agent 头部的值

- 下面代码可以判断用户使用哪个终端打开页面，然后实现跳转

  ```
  if (navigator.userAgent.match(/(phone|pad|pod|wOSBrowser))){
  	window.location.href = ""; //手机
  } else {
  	window.location.href = "";
  }
  ```

  

