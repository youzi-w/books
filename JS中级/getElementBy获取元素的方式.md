

#  2.获取元素

1. getElementById()
2. getElementsByTagName
3. getElementsByClassName

## 2.1获取元素的方法

### (1) getElementById()

根据 ID 获取:使用 getElementById() 方法可以获取带有 ID 的元素对象

```js
<body>
    <div id = 'time'>2019-10-21</div>
    <script>
        // 1.因为页面文档从上往下加载，所以先得有标签，所以 script 写在标签下面
        //2.get 获得 element 元素 by 通过 驼峰命名法
        //3.参数 id 是大小写敏感的字符串
        //4.返回的是一个元素对象
        
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer);
        
        //5. console.dir  打印我们返回的元素对象，更好的查看里面的属性和方法
        console.dir(timer);
    </script>
</body>

```

### (2)getElementsByTagName 获取某类标签元素

```js
<body>
    <ul>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
    </ul>
    <script>
        //返回的是：获取过来的元素对象的集合，以伪数组的形式存储
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        //2.遍历元素对象
        for (var i = 0; i <= lis.length; i++) {
            console.log(lis[i]);   
        }
        // 如果页面中只有一个li 返回的还是伪数组的形式
        // 如果页面中没有这个元素，返回的空的伪数组的形式

```

 

- 父元素必须是指定的单个元素

```js
<ol id = ol>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
        <li>知否知否，应是绿肥红瘦</li>
 </ol>
 var ol = document.getElementsByTagName('ol');
 console.log(ol.getElementsByTagName('li'));
   
```

### (3)getElementByClassName

```js
var elements = document.getElementsByClassName(names);
```

-  如果要获取2个以上`classname`，可传入多个`classname`，每个用空格相隔

  ```js
   var elements = document.getElementsByClassName("test1 test2");
  ```

- 在`id`为'main'的元素的子节点中，获取所有`class`为'test'的元素

```js
 var elements = document.getElementById('main').getElementsByClassName('test');
```



### (4)querySelector( )

通过 HTML5 新增的方法获取,按照属性查询

```js
<body>
    <div class="box">盒子</div>
    <div class="box">盒子</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        // 1.document.getElementsByClassName() 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        // 返回 [div.box, div.box]
        
        //2.querySelector 返回指定选择器的第一个元素对象，切记里面的选择器要加符号 " . " 或者 " # "
        var firstBox = document.querySelector('.box');
        console.log(firstBox); //返回 <div class = 'box'>盒子</div>
        
        var nav = document.querySelector('#nav');
        console.log(nav);
        
        var li = document.querySelector('li');
        console.log(li); //返回 <li>首页<li> 
        
        //3. querySelectorAll() 返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox);  //返回 [div.box, div.box]
        
        var lis = document.querySelectorAll('li');
        console.log(lis);
    </script>


```

