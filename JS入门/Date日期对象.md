# Date() 日期对象 

## 是一个构造函数，必须使用 new 来创建的日期对象

## 1. 获取系统时间

```
var date = new Date();
console.log(date);
```

## 2. 自定义时间

```
var date2 = new Date('2019-10-1 8:8:8');
console.log(date2);
```

## 3. 年月日

```
//我们写一个符合中国人的时间代码
var year = date.getFullYear();
var month = date.getMonth();
var dates = date.getDate();
var day = date.getDay();
var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
console.log('今天是：' + year + '年' + month + '月' + dates + '号 ' + arr[day]);

```

## 4. 时分秒

```
//封装一个时分秒函数
function getTime() {
    var time = new Date();
    var h = time.getHours();
        h = h < 10 ? '0' + h : h;//小于10，补上0
    var m = time.getMinutes();
        m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
        s = s < 10 ? '0' + s : s;

    return h + ':' + m + ':' + s;
}
console.log(getTime());
```

## 5. 总的毫秒数(时间戳)

```
var date = new Date();
console.log(date.getTime());
//最常用的写法
var date1 = +new Date();
console.log(date1);
// H5新增的
console.log(Date.now());
```

