# 阻止事件冒泡的方法之二：阻止默认行为: preventDefault()

解析：阻止默认行为（事件） 如：让链接不跳转，或者让提交按钮不提交

## 常见事件对象的属性和方法

```js
        var div = document.querySelector('div');
        div.addEventListener('click', fn);
        div.addEventListener('mouseover', fn);
        div.addEventListener('mouseout', fn);

        function fn(e) {
            console.log(e.type);

        }

```

2. 阻止默认行为（事件） 让链接不跳转 或者让提交按钮不提交

   ```js
           var a = document.querySelector('a');
           a.addEventListener('click', function(e) {
                   e.preventDefault(); //  DOM 标准写法
               })
   
   ```

3. 传统注册方法

   ```JS
   a.onclick = function(e) {
               // 普通浏览器 e.preventDefault();  方法
               // e.preventDefault();
               // 低版本浏览器 ie678  returnValue  属性
               // e.returnValue;
               // 我们可以利用return false 也能阻止默认行为 没有兼容性问题 特点： return 后面的代码不执行了， 而且只限于传统的注册方式
               return false;
               alert(11);
           }
   ```



