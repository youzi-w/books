# this 和 target 的区别

```js
例子
    <div>123</div>
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>

```

**记住这两句话**

1. e.target 返回的是触发事件的对象（元素）  
2. this 返回的是绑定事件的对象（元素）
  - 区别 ： e.target 点击了那个元素，就返回那个元素
  -  this 那个元素绑定了这个点击事件，那么就返回谁

```js
var div = document.querySelector('div');
div.addEventListener('click', function(e) {
	console.log(this);
})
返回的是  <div>123</div>
```



```js
var ul = document.querySelector('ul');
ul.addEventListener('click', function(e) {
	// 我们给ul 绑定了事件  那么this 就指向ul  
 	console.log(this);
	console.log(e.currentTarget);

	// e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target 指向的就是li
	console.log(e.target);
})
返回的是 
<ul>
<li><li>
</ul>    
//因为事件冒泡，从下往上执行，所以 ul 也执行
```

