# this 指向问题

## 1. 全局作用域 或者 普通函数中 this指向全局对象 window 

（注意 定时器里面的 this 指向 window）

```js
        console.log(this);

        function fn() {
            console.log(this);

        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);

        }, 1000);
//需注意，严格模式下，this 为 undefined 
```

 

## 2.方法调用 中，谁调用 this 就指向谁

```js
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象

            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
         btn.onclick = function() {
             console.log(this); // this指向的是btn这个按钮对象

         }
         
        btn.addEventListener('click', function() {
                console.log(this); // this指向的是btn这个按钮对象

            })

```



## 3. 构造函数中 this 指向构造函数

```js
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象

        }
        var fun = new Fun();
    </script>
//new 函数 ：开辟了一个新的空间，并且让 Fun 指向了这个新的空间，所以 this 指向的是 Fun 实例对象 
```



