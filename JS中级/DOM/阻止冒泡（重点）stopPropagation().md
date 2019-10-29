# 阻止事件冒泡的两种方式之一：stopPropagation()

事件冒泡：逐级向上传播到 DOM 最顶层节点，会带来好处，也有坏处：

标准写法：利用事件对象里面的 stopPropagation()方法

```JS
    <div class="father">
        <div class="son">son儿子</div>
    </div>

```

```js
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation(); // stop 停止  Propagation 传播
        }, false);
		//不再往后冒泡
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
        
//father 和 document 不再弹出，阻止事件往上冒泡
1.有兼容性问题，加上一句 e.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
2.后面点击father 的时候，想要阻止后面的 document 冒泡，需要加上一句e.stopPropagation(); 
```

