# 1.检测是否为数组

instanceof 运算符

```js
var arr = [0,1,2];
console.log(arr instanceof Array);
或者
// Array.isArray(参数) 返回 ：true 或者 false  H5新增方法
console.log(Array.isArray(arr));

```

# 2.添加 和 删除  数组元素的方法

## (1)push-数组末尾  添加元素

```js
    //arr.push(添加的元素)  在数组末尾，添加一个或多个数组元素
    
    var arr = [1,2,3];
    arr.push(4,'pink');
    console.log(arr;
	
	或者：
	var arr = [1,2,3];
	console.log(arr.push(4,'pink'));// push完毕之后，返回的结果是：		新数组的长度
```



## (2)unshift - 数组开头  添加元素

```js
    //unshift 在数组开头，添加一个或多个数组元素
    
    var arr1 = [4,5,6];
    arr.unshift('red','purple');
    console.log(arr1);
	
	或者：
    //unshift 在数组开头，添加一个或多个数组元素
    var arr1 = [4,5,6];
    console.log(arr.unshift('red','purple'));//unshift完毕之后，返	回的结果是：新数组的长度
    
    1. unshift(参数1，参数2，...)  有参数
	2. pop完毕之后，返回被删除元素的值
	3. 元素组也会发生变化
```

# 3.删除数组的方法

## (1)pop() 删除  最后一个元素

```js
    // pop() 可以删除数组最后一个元素
    arr1 = (4,5,6)
    arr1.pop();
    console.log(arr1);
    
1. pop()无参数
2. pop完毕之后，返回被删除元素的值
3. 元素组也会发生变化
```

## (2)shift 删除  第一个元素

shift 删除数组第一个元素，一次只能删除一个元素
无参数，返回第一个元素的值

```js
    let  a =  [1,2,3];
    let item = a.shift();  // 1
    console.log(a); // [2,3]
```




# 4.筛选数组案例

```js
    //有一个包含工资的数组[1500, 1200, 2100, 1800]
    var arr = [1500, 1200, 2100, 1800];
    var newArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 2000) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);

```

