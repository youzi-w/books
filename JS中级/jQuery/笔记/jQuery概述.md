# jQuery 的基本使用

### jQuery 的入口函数

```js
$(function() {
    ...;//此处是页面 DOM 加载完成的入口
}
```

```js
$(document).ready(function() {
	...; //此处是页面DOM加载完成的入口    
})
```



1. 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装
2. 相当于原生 js 中的 DOMContentLoaded。
3. 不同于原生中的 load 事件，load 事件是等页面文档、外部 js 文档、css文档、图片加载完毕才执行内部代码
4. 更推荐第一种方式



## jQuery 顶级对象 $

$ 是jQuery的另一种写法

```js
jQuery(function() {

});
等价于$
```



## jQuery对象

用jQuery 方法获取过来的对象。本质：通过$ 把DOM元素进行包装

注意：jQuery 对象只能使用 jQuery 方法；DOM对象则使用原生JavaScript 属性和方法



## jQuery对象和JavaScript对象的转换

原生js 比jQuery 范围更大，原生的一些属性和方法 jQuery没有封装。需要使用时，则要把jQuery对象转换为DOM对象才能使用

### DOM对象转换为 jQuery对象

```js
$(DOM对象)
```

### jQuery对象转换为DOM对象

```js
方法1
$('div')[index] //index是索引号
方法2
$('div').get(index)
```





# jQuery常用API

## jQuery选择器

与CSS选择器用法完全一致

```
$("选择器")
```



| 名称       | 用法            | 描述 |
| ---------- | --------------- | ---- |
| ID选择器   | $("#id")        |      |
| 类选择器   | $(".class")     |      |
| 全选选择器 | $("*")          |      |
| 标签选择器 | $("div")        |      |
| 并集选择器 | $("div,p,li")   |      |
| 交集选择器 | $("li.current") |      |

## jQuery 层级选择器

|            |            |                                                   |
| ---------- | ---------- | ------------------------------------------------- |
| 子代选择器 | $("ul>li") | 使用>；获取亲儿子层级的元素；不会获取孙子层级元素 |
| 后代选择器 | $("ul li") | 使用空格；获取ul 下所有的 li 元素，包括孙子       |



```js
    <div>我是div</div>
    <div class="nav">我是nav div</div>
    <p>我是p</p>
    <ol>
        <li>我是ol 的</li>
        <li>我是ol 的</li>
        <li>我是ol 的</li>
        <li>我是ol 的</li>
    </ol>
    <ul>
        <li>我是ul 的</li>
        <li>我是ul 的</li>
        <li>我是ul 的</li>
        <li>我是ul 的</li>
    </ul>
//html部分
```

```js
$(function() {
    console.log($(".nav"));
    console.log($("ul li"));//获取ul 里面所有的 li
})
```



## jQuery 筛选选择器

| 格式       | 示例          | 用法                                    |
| ---------- | ------------- | --------------------------------------- |
| :first     | $("li:first") | 获取第一个li 元素                       |
| :last      | $("li:last")  | 获取最后一个 li 元素                    |
| :eq(index) | $("li:eq(2)") | 获取到的li 元素中，选择索引号为2的元素  |
| :odd       | $("li:odd")   | 获取到的li 元素中，选择引号为奇数的元素 |
| :even      | $("li:even")  | 获取到的li 元素中，选择引号为偶数的元素 |

```js
    <ul>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
        <li>多个里面筛选几个</li>
    </ul>

```

```js
$(function() {
	$("li:first").css("color", "red");
})
```



### 筛选选取父子元素

| 语法       | 示例                   | 说明                                |
| ---------- | ---------------------- | ----------------------------------- |
| parent()   | $("li").parent()       | 查找父级                            |
| children() | $("ul").children("li") | 查找最近一级子元素，类似 $("ul>li") |
| find()     | $("ul").find("li")     | 后代选择器，返回所有的子元素        |

```js
    <div class="yeye">
        <div class="father">
            <div class="son">儿子</div>
        </div>
    </div>

    <div class="nav">
        <p>我是柚子</p>
        <div>
            <p>我是youzi</p>
        </div>
    </div>

```

```js
$(function() {
	console.log($(".son").parent());
    $(".nav").find("p").css("color", "red")
})
```

### 其他筛选方法

|                   |      |                                                              |
| ----------------- | ---- | ------------------------------------------------------------ |
| sibling(selector) |      | 查找兄弟节点，不包括自身                                     |
| nextAll()         |      | 查找当前元素之后 所有的同辈元素                              |
| prevtAll()        |      | 查找当前元素之前 所有的同辈元素                              |
| hasClass(class)   |      | 检查当前的元素是否含有某个特定的类；有则返回 true，没有则返回 false |
| eq(index)         |      | 相当于 $("li:eq(2)"), index 是索引号                         |

```js
$(function () {
    var index = 2;
    $("ul li").eq(index).css("color", "purple");
})
//上式可以写为：
//$("ul li:eq("+index+")").css("color", "purple"); 但更推荐上面的写法

```





## jQuery 隐式迭代

### 隐式迭代

定义：给匹配到的所有元素进行循环遍历，执行相应的方法，不用开发者再次手动进行循环，简化操作

```js
    <div>惊喜不，意外不</div>
    <div>惊喜不，意外不</div>
    <div>惊喜不，意外不</div>
    <div>惊喜不，意外不</div>
    <ul>
        <li>相同的操作</li>
        <li>相同的操作</li>
        <li>相同的操作</li>
    </ul>

```

```js
$("div").css("background", "pink");
//将所有 li 背景颜色全都改为 pink
//隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法

```



## jQuery 的排他思想



```js
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>

```

```js
$(function() {
	$("button")	.click(function( {
        $(this).css("background", "pink");
    //隐式迭代
    	$(this).siblings("button").css("background", "");
    }))
})
```



## 链式编程

```js
$(function () {
    $("button").click(function() {
        $(this).css("color", "red");
        $(this).siblings.css("color", "");
    })
})
```

可以缩写成以下代码

```js
$(function () {
    $("button").click(function() {
        $(this).css("color", "red").siblings().css("color", "");    
    })
})
```



## jQuery 样式操作

### 操作 CSS 方法

1. 参数只写属性名，则返回属性值

   ```js
   <style>
   	div {
           width:200px;
           height:200px;
           background-color:pink;
       }    
   </style>
   
   <div></div>
   ```

   ```js
   $(function() {
       console.log($("div").css("width"));
   })
   ```



2. 参数是属性名，属性值，逗号分隔；属性名必须加引号，值是数字，则可以不用单位和引号

   ```js
    $("div").css("width", 300);
   ```

   

3. 参数可以是对象形式，属性名和属性值用冒号 ： 隔开，属性可以不加引号

   如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号

   ```js
   $("div").css({
       width:400,
       height:400,
       backgroundColor: "red"
   })
   ```

   

### 类操作

#### 	1. 添加类 addClass("类名")

   ```js
   <style>
   	div {
           width: 150px;
           height: 150px;
           background-color: pink;
           margin: 100px auto;
       }
   </style>
   <div class="current"></div>
   
   
   $(function() {
       $("div").click(function() {
           $(this).addClass("current");
       })
   })
   ```

#### 	2. 删除类 removeClass()

   ```js
   $(this).removeClass("current");
   ```

#### 	3. 切换类 toggleClass

   ```js
   $(this).toggleClass("current");
   //通过触发点击事件，增添或删除类名
   ```




## jQuery 类操作 和 className 区别

- 原生JS 中 className 会覆盖元素本来的类名

  ```js
  <div class="one"></div>
  var one = document.querySelector(".one");
  one.className = "two";
  //此时，div 中的 one 会被 two 覆盖
  ```

- jQuery 的类操作只是对指定类进行操作，不影响原先的类名

  ```js
  $(".one").addClass("two");  
  //这个addClass相当于追加类名 不影响以前的类名
  ```

  

