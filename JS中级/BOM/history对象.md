| history 对象方法 | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| back()           | 可以后退功能                                                 |
| forward()        | 前进功能                                                     |
| go(参数)         | 前进后退功能，参数 = 1：前进一个页面；参数 = -1:后退一个页面 |

 可以理解为浏览器上的前进 后退页面的箭头，功能一模一样

```
        前进功能
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // history.forward();
            history.go(1);

```

```
        后退功能
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // history.back();
            history.go(-1);

```

