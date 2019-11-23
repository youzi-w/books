# ES6

## 声明变量的三种方式

var const let 

### var

- `var` 声明的变量可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，var 声明的变量作用域称为： **`var` 作用域或函数作用域** 

```js
function f(init) {
    if (init) {
        var x = 10;
    }

    return x;
}

f(true);  // 10
f(false); // undefined
```

- 有变量提升
- 可以重复声明



### let

-  let声明变量,变量只在代码块内有效 。let 的作用域成为块级作用域，还有 const声明变量的作用域也是块级作用域

- 不存在变量提升

  ```jsx
  p = 3;
  let p;  // 在定义一个变量之前使用该变量，抛出ReferenceError错误
  console.log(a); // 输出undefined
  var a = 2;
  ```

- let不允许重复声明同一变量

  ```csharp
  {
  var a;
  let a;    // error
  }
  
  {
  let a=1;
  let a;  //error
  }
  ```

### const

- const 声明的变量所在的作用域称为块级作用域，只在声明其所在的块级作用域内有效

- const 命令声明的常量也没有变量提升，只能在声明的位置后面使用

- 同样不可重复声明同一变量

- 注意：const用来声明一个只读的常量, 一旦声明，常量的值不可改变
  声明时必须初始化,否则会报错

##### 块级作用域的优点

1. 避免内层变量覆盖外层变量
2. 避免用来计数的循环变量泄露为全局变量
3. 引入了块级作用域，允许在块级作用域之中声明函数

## 模板字符串

 模板字符串使用反引号 (\` `) 来代替普通字符串中的用双引号和单引号。 

```js
//多行字符串
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

```js
//插入表达式
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```



## 箭头函数

缩减代码

改变 this 指向

```

```

