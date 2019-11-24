# ES5中新增方法

## 新增方法概述

- 数组方法
- 字符串方法
- 对象方法

## 数组方法

迭代（遍历）方法：forEach() , map() ,filter() ,find(),some() ,every(),reduce()

迭代器函数方法

###  forEach() 遍历数组

```js
arr.forEach(callback[, thisArg]);
```

```js
var colors = ["red","green","blue"];
colors.forEach (function(color) {
	cosole.log(color);
})
// 输出：red green blue
```



callback

```js
[].map(function(value, index, array) {
    return ...;
});
```



为数组中每个元素执行的函数，该函数接收三个参数：

- `currentValue`

  数组中正在处理的当前元素。

- `index`可选

  数组中正在处理的当前元素的索引。

- `array`可选

  `forEach()` 方法正在操作的数组。

`thisArg`可选

可选参数。当执行回调函数时用作 `this` 的值(参考对象)。

 

```js
    <script>
        // forEach 迭代(遍历) 数组
        var arr = [1, 2, 3];
        var sum = 0;
        arr.forEach(function(value, index, array) {
            console.log('每个数组元素' + value);
            console.log('每个数组元素的索引号' + index);
            console.log('数组本身' + array);
            sum += value;
        })
        console.log(sum);
    </script>

```



### filter() :筛选数组



```js
var newArray = arr.filter(callback(element,[index],[array])[, thisArg])
```

参数

callback

返回 `true` 表示该元素通过测试，添加到新数组中去；`false` 则不保留。它接受以下三个参数： 

- `element`

  数组中当前正在处理的元素。

- `index`可选

  正在处理的元素在数组中的索引。

- `array`可选

  调用了 `filter` 的数组本身。

`thisArg`可选

执行 `callback` 时，用于 `this` 的值。

返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

```js
    <script>
        // filter 筛选数组
        var arr = [12, 66, 4, 88, 3, 7];
        var newArr = arr.filter(function(value, index) {
            // return value >= 20;
            return value % 2 === 0;
        });
        console.log(newArr);
    </script>

```





### some()和every()

场景：这个一般就用在，判断数组的每个元素是否符合`function`条件。 

```js
arr.some(callback(element[, index[, array]])[, thisArg])
```

- 参数

1. callback()函数

2. thisArg:指定this 的指向的数组

#### every()

- **every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。**（全为真时，才会返回 true;）

  只要循环的值有一个为假，则立即退出遍历。

#### some()

-  **some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true** （有真则真）

  找到真则立刻退出循环遍历



参数

callback

用来测试每个元素的函数，接受三个参数：

- `element`

  数组中正在处理的元素。

- `index` 可选

  数组中正在处理的元素的索引值。

- `array`可选

  `some()`被调用的数组。

`thisArg`可选

执行 `callback` 时使用的 `this` 值。

返回值： 数组中有至少一个元素通过回调函数的测试就会返回 true；所有元素都没有通过回调函数的测试返回值才会为false。 

如果找到第一个满足条件的元素，则终止循环，不再继续查找

```js
    <script>
        // some 查找数组中是否有满足条件的元素 
        // var arr = [10, 30, 4];
        // var flag = arr.some(function(value) {
        //     // return value >= 20;
        //     return value < 3;
        // });
        // console.log(flag);
        var arr1 = ['red', 'pink', 'blue'];
        var flag1 = arr1.some(function(value) {
            return value == 'pink';
        });
        console.log(flag1);
        // 1. filter 也是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回回来
        // 2. some 也是查找满足条件的元素是否存在  返回的是一个布尔值 如果查找到第一个满足条件的元素就终止循环
    </script>

```



### map() 映像数组

- map,映射之意 ，原数组被“映射”成对应新数组 

```js
var data = [1, 2, 3, 4];
var arrayOfSquares = data.map(function (item) {
  return item * item;
});
console.log(arrayOfSqures); // 1, 4, 9, 16
```

 map的callback函数需要有return值，如果没有，就会返回undefined: 

```js
var data = [1, 2, 3, 4];
var arrayOfSquares = data.map(function() {});
arrayOfSquares.forEach(console.log);
// 输出 undefined
```

- 利用map方法方便获得对象数组中的特定属性值们 

```js
var users = [
  {name: "张含韵", "email": "zhang@email.com"},
  {name: "江一燕",   "email": "jiang@email.com"},
  {name: "李小璐",  "email": "li@email.com"}
];
var emails = users.map(function (user) { 
    return user.email; 
});
console.log(emails.join(", ")); // 输出：zhang@email.com, jiang@email.com, li@email.com
```

### find()

```js
array.find(function(currentValue, index, arr),thisValue)
```

 find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。 

- 当数组中的元素在测试条件时返回 *true* 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
- 如果没有符合条件的元素返回 undefined

```js
var array2 = [
    { postId: 4, content: "Vue" },
    { postId: 2, content: "Node" },
    { postId: 4, content: "Node" }
];
var user = [];
     user = array2.find(function (e) {
         return e.postId = 4;
     })
console.log(user);
//仅返回第一个对象{ postId: 4, content: "Vue" }
```

### reduce()

可以实现forEach() 等方法的功能

```css
arr.reduce(callback,[initialValue])
```

```
callback （执行数组中每个值的函数，包含四个参数）

    1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    2、currentValue （数组中当前被处理的元素）
    3、index （当前元素在数组中的索引）可选
    4、array （调用 reduce 的数组）可选

initialValue （作为第一次调用 callback 的第一个参数。）
```



## 3.3字符串方法

3.3.1 trim()  方法去除字符串两端空格



```js
    <input type="text"> <button>点击</button>
    <div></div>
    <script>
        // trim 方法去除字符串两侧空格
        var str = '   an  dy   ';
        console.log(str);
        var str1 = str.trim();
        console.log(str1);
        var input = document.querySelector('input');
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.onclick = function() {
            var str = input.value.trim();
            if (str === '') {
                alert('请输入内容');
            } else {
                console.log(str);
                console.log(str.length);
                div.innerHTML = str;
            }
        }
    </script>

```





## 3.4 对象方法



### 3.4.1 Object.keys()

```js
        // 用于获取对象自身所有的属性
        var obj = {
            id: 1,
            pname: '小米',
            price: 1999,
            num: 2000
        };
        var arr = Object.keys(obj);
        console.log(arr);
        arr.forEach(function(value) {
            console.log(value);

        })

```



### 3.4.2 Object.defineProperty()

后面学 vue 会经常用，要学会

```js
语法：
Object.defineProperty(obj, prop, descriptor)
```



参数：（三个都必须有）

- obj： 要在其上定义属性的对象。 

- prop： 要定义或修改的属性的名称。 

- descriptor： 将被定义或修改的属性描述符。

  用对象形式{ }书写 

  1. value: 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 false
  2. writable: 当且仅当该属性的`writable`为`true`时，`value`才能被赋值运算符改变。默认为 false
  3. enumerable: 当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。默认为 false。 
  4. configurable: 当且仅当该属性的 configurable 为 true 时，该属性`描述符`才能够被改变，同时该属性也能从对应的对象上被删除。*默认为 false。 