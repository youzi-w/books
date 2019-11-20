# 事件注册

单个事件注册

```js
$("元素").click()等
```



# 事件处理

## on() 绑定事件

```js
on(events,[selector],[data],fn)
```

- **events**:一个或多个用空格分隔的事件类型和可选的命名空间，如"click"或"keydown" 。

- **selector**:元素的子元素选择器。

- **data**:当一个事件被触发时要传递event.data给事件处理函数。

- **fn**:回调函数，即绑定在元素身上的监听函数



```js
//处理多个事件
$("div").on({
    mouseenter: function() {
		$(this).css("background", "skyblue");
    },
 	click: function() {
		$(this).css("background", "purple");
 	}
});
```



```js
//多个事件的处理方法相同
$("div").on("mouseenter mouseleave", function() {
	$(this).toggleClass("current");
});
```



## on()事件委托

概念：把原来给子元素身上的事件绑定在父元素上，即把事件委派给父元素

作用：减少事件的绑定

```js
$("ul").on("click", "li", function() {
    alert(11);
});
//click 是绑定在ul 身上的，但是 触发的对象是 ul 里面的小li
//通过事件冒泡
```



## on() 动态元素绑定事件

```js
$("ol").on("click", "li", function() {
	alert(11);
})
var li = $("<li>我是后来创建的</li>");
$("ol").append(li);//动态生成的 li元素
```



## off() 事件解绑

```

```



## one()

只触发一次的事件，用 one() 来绑定

```

```





# 自动触发事件

1. 元素.事件（）

   会触发事件的默认行为

```js
$("div").click();
```

2. trigger()

   会触发事件的默认行为

```js
$("input").trigger("focus");
```

3. triggerHandler()

   不会触发事件的默认行为

```js
$("div").triggerHandler("click");
```

