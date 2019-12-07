# ES6

## 声明变量的三种方式var const let 

### 如何选择使用场景

- 一般变量使用const 声明
- 需要重新赋值的变量用 let 声明
- 一般不再使用 var

### var

- 在ES6之前，JS的scope只有两种，全局作用域和函数作用域 

   在var声明之前就访问对应的变量，则会得到undefined 

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

#### 临时性死区：

如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。 

- let声明变量,变量只在代码块内有效 。let 和const使用块级作用域。 

  在let/const声明之前就访问对应的变量与常量，会抛出ReferenceError错误 

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
-  以const声明所创建出来的常量，在JS中只是不能再被赋(can't re-assignment)，并不是不可被改变(immutable)的，这两种概念仍然有很大的差异。 
- 声明时必须初始化,否则会报错

##### 块级作用域的优点

1. 避免内层变量覆盖外层变量
2. 避免用来计数的循环变量泄露为全局变量
3. 引入了块级作用域，允许在块级作用域之中声明函数

## 函数的扩展

### 箭头函数

#### 使用口诀：

- 删掉 function 关键字
- 加上一个胖箭头（=>）
- 没有参数加括号
- 一个参数可选择（加不加括号都可以）
- 多个参数逗号分隔（要加上括号）

#### this 值指向

箭头函数没有自身的this值，而是继承父级作用域的this 值

```js
// 箭头函数的this指向
const Youzi = {
	name :"youzi",
	hobbies: ["coding","sleeping","gaming"],
            
	printHobbies: function() {
		this.hobbies.map(hobby => {
	// 继承父作用域中的this值
			console.log(`${this.name} loves ${hobby}`);         
		})
	}
}
Youzi.printHobbies();
```



#### 不适用场景

this 需要绑定事件的时候

有argument类数组对象的时候




### 函数参数的默认值

```js
        // var addFun = function add(a, b) {
        //     a = a || 5;
        //     b = b || 5;
        //     return a + b;
        // }
        var addFun = function add(a = 5, b = 5) {
            return a + b;
        }
        console.log(addFun());
//输出 10
```



### 剩余参数

(...restArray)

```js
//只有一种参数
function sum(...numbers) {
    return numbers.reduce((pre, cur) => pre + cur, 0)
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5))

//有两种参数
function converCurrency(rate, ...amounts) {
    return amounts.map(amount => amount * rate);
}
const amounts = converCurrency(0.8, 12, 34, 666);
console.log(amounts)
const player = ['youzi', 123, 5.4, 6.7, 7.8, 8.9]
const [name, id, ...scores] = player;
console.log(name, id, scores);
```



### 扩展运算符

#### 数组中的运用

1. 扩展字符串为数组

2. 合并数组

3. 复制数组

```js
//1. 扩展字符串
let Laravist;
let stringLaravist = [...'Lavarist'];
console.log(stringLaravist)

// 2.把youngers 和 olders 还有新成员 Mary一起合并
let newMember = 'Mary';
const youngers = ['Geoge', 'Jonh', 'Thomas'];
const olders = ['James', 'Adrew', 'Martin']
let members = [...youngers,newMember,...olders];
console.log(members)

// 3.复制数组，将元素全部遍历到新数组中去，不会改变原数组的
const currentMembers = [...members];
console.log(currentMembers);

```

### 对象字面量的扩展

```js
    const name = 'Youzi';
    const age = 2;
    const birthday = '2000-01-01';
    const Youzi = {
        /* 旧写法
         name :'Youzi',
         age : 2,
         birthday:'2000-01-01',*/
        //属性新写法，只写key，不用写 value
        name,
        age,
        birthday,
        //方法新写法：省略 function
        greet() {
            alert(`Hello ${this.name}`)
        },
        getAge() {
            alert(this.age)
        }
    }
    Youzi.greet();
    Youzi.getAge();
    console.log('============');
    const keys = ['name','age', 'birthday'];
    const values = ['Xinxin','20','2000-01-02'];
    const Xinxin = {
        [keys.shift()]:values.shift(),
        [keys.shift()]:values.shift(),
        [keys.shift()]:values.shift(),
    }
    console.log(Xinxin);

```





## 解构赋值



### 数组解构

```js
// 基础类型解构
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) // 1, 2, 3

// 对象数组解构
let [a, b, c] = [{name: '1'}, {name: '2'}, {name: '3'}]
console.log(a, b, c) // {name: '1'}, {name: '2'}, {name: '3'}

// ...解构
let [head, ...tail] = [1, 2, 3, 4]
console.log(head, tail) // 1, [2, 3, 4]

// 嵌套解构
let [a, [b], d] = [1, [2, 3], 4]
console.log(a, b, d) // 1, 2, 4

// 解构不成功为undefined
let [a, b, c] = [1]
console.log(a, b, c) // 1, undefined, undefined

// 解构默认赋值
let [a = 1, b = 2] = [3]
console.log(a, b) // 3, 2

```



### 对象解构（使用多）

原对象对象的key 值必须跟提取对象的属性名一样

```js
// 对象属性解构
let { f1, f2 } = { f1: 'test1', f2: 'test2' }
console.log(f1, f2) // test1, test2

// 可以不按照顺序，这是数组解构和对象解构的区别之一
let { f2, f1 } = { f1: 'test1', f2: 'test2' }
console.log(f1, f2) // test1, test2

// 解构对象重命名
let { f1: rename, f2 } = { f1: 'test1', f2: 'test2' }
console.log(rename, f2) // test1, test2

// 嵌套解构
let { f1: {f11}} = { f1: { f11: 'test11', f12: 'test12' } }
console.log(f11) // test11

// 默认值
let { f1 = 'test1', f2: rename = 'test2' } = { f1: 'current1', f2: 'current2'}
console.log(f1, rename) // current1, current2

```



### 字符串解构

实际开发用的不多

### 函数参数解构（使用多）

```js
// 参数解构
function func1({ x, y }) {
    return x + y
}
func1({ x: 1, y: 2}) // 3

function func1({ x = 1, y = 2 }) {
    return x + y
}
func1({x: 4}) // 6

```





## 高阶字符串的扩展

### 模板字符串

 模板字符串使用反引号 (\` `) 来代替普通字符串中的用双引号和单引号。 

使用${ } 包裹变量

保留空格和换行

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

### 新增方法

- includes("string") 

  是否包含字符串，返回值为 Boolean 值

- startsWith()	endsWith()  

  以什么形式作为开头和结尾

- trimStart()形式	trimEnd()

  去除开头 结尾的空格

## 数组扩展

### Array.from() 

将类数组对象（例如：argument对象）转换为数组

### Array.of()

### find() 和 findIndex()

- `find()`函数用来查找目标元素，找到就返回该元素，找不到返回undefined。

- `findIndex()`函数也是查找目标元素，找到就返回元素的索引号，找不到就返回-1

```js
[1, 2, 3, 4].find((value, index, arr) => {})
//查找函数有三个参数。
value：每一次迭代查找的数组元素。
index：每一次迭代查找的数组元素索引。
arr：被查找的数组。
```



## for of 和 for in 

- for in : 对键名 `key` 的遍历 

   for in更适合遍历对象 

  1. `index` 索引为字符串型数字，不能直接进行几何运算

  2. 和遍历顺序对象的行为一样，使用 `for in` 会遍历数组所有可枚举的属性，所以原型对象上的方法和属性也会被遍历

  3. 遍历的顺序可能不是按照实际数组的内部顺序

     ```js
     // 所以遍历出来的索引是"0"、"1"这种形式的
     // myMethod 这个原型对象上的属性也会被遍历出来
     // 出来的顺序也不一定是原先书写的顺序
     let arr = [1, 2, 3];
     Array.prototype.myMethod = function () {
         console.log(this.length);
     };
     ```

     

- for of: 对键值 `value` 的遍历 

   for of遍历的是数组元素值 ,还不能用来遍历对象



## Promise

- 解析： `promise`是一个对象，它代表了一个异步操作的最终完成或者失败。 

常用的 promise库：[axios](http://www.axios-js.com/zh-cn/docs/)

```js
var p = new Promise(function(resolve, reject){
    //
})
resolve:异步操作执行成功后的回调函数
reject:异步操作执行失败后的回调函数
```



处理单个Promise

```js
p.then(data => console.log(data))
 .catch(err => console.error(err));
```



处理多个Promise

```js
var p = Promise.all([p1,p2,p3])
```

-  只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。 
-  只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。 

```js
var p = Promise.race([p1,p2,p3])
```

- 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变(可以理解为：哪一个实例第一个返回，则p就执行那一个实例的状态)。
- 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。 



## Symbol

第七种数据类型，生成唯一的标识符

```
Symbol('key'):{}
```

用Symbol 生成的属性不能被遍历，而且要使用



## Module









