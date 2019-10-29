# DOM 事件流

​																										![DOM事件流](				H:\Books\JS中级\DOM事件流.png)



## 1. 定义

   事件流：描述的是从页面中接收事件的顺序

   事件发生时会在元素节点之间按照特定的顺序传播，这个过程即 DOM 事件流

## 2. DOM 事件流分为三个阶段
   1. 捕获阶段 (capture)
   2. 当前目标阶段
   3. 冒泡阶段 (propagation)

![DOM事件流2](H:\Books\JS中级\DOM事件流2.png)

可以这样来描述：

1. 向水里仍一块石头，首先它会有一个下降的过程，这个过程可以理解为从最顶层事件发生的最具体元素的捕获过程；
2. 之后会产生泡泡，会在最低点之后漂浮到水面上，这个过程相当于事件冒泡。

## 3.代码验证

样式

```js
<div class="father">
    father盒子
	<div class="son">son盒子</div>
</div>	
```

1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。

2. onclick 和 attachEvent（ie） 只能得到冒泡阶段。

   

3. 捕获阶段 如果addEventListener 第三个参数是 true ，那么则处于捕获阶段 

    document -> html -> body -> father -> son

```js
var son = document.querySelector('.son');
son.addEventListener('click',function() {
	alert('son');
},true);
        
var father = document.querySelector('.father');
father.addEventListener('click',function() {
	alert('father');
},true);
//此处先弹出 father ，在弹出 son ;
```

4. 冒泡阶段 

如果addEventListener 第三个参数是 false 或者 省略 ，那么则处于冒泡阶段  

son -> father ->body -> html -> document

```js
var son = document.querySelector('.son');
son.addEventListener('click',function() {
	alert('son');
},true);
        
var father = document.querySelector('.father');
father.addEventListener('click',function() {
	alert('father');
},true);
此处则是 先弹出 son ,后弹出 father
```

