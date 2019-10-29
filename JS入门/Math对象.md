# 学习查询 MDN 文件

[MDN网站](http://developer.mozilla.org)

## Math 对象

不是构造函数，不需要new来调用，直接使用里面的属性和方法即可

## Math.floor    向下取整，往最小值取整

## Math.ceil        往上取整

## Math.round  四舍五入

```
console.log(Math.round(-1.5));
//结果为 -1；
```



## Math.random()   随机数方法

 作用：得到一个两数之间的随机整数，包括两个数在内 

```
function getRandom(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

***需要记住这个函数的写法

```
// 随机点名
    function getRandom(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var arr = ['张三', '张三丰', '张三疯', '李四', '李思思'];
    console.log(arr[getRandom(1,arr.length - 1)]);
```

猜数字游戏 程序随机生成1~10之间的数字，并让用户输入一个数字

​    1.如果大于该数字，就提示数字大了，继续猜；

​    2.如果小于该数字，就提示数字小了，继续猜；

​    3.如果等于该数字，就提示猜对了，结束程序。

  适合while 语句

```
    function getRandom(min,max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var random = getRandom(1,10);
    while(true) { //死循环
        var num = prompt('你来猜？ 输入1~10之间的一个数字');
        if (num > random) {
            alert('数字猜大了');
        } else if (num < random) {
            alert('数字猜小了');
        } else if (num = random) {
            alert('你好帅哦，猜对了');
            break;
        }
    }

```

