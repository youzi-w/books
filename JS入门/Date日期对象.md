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

# 6.案例：倒计时效果(重点案例，建议背下来)

(1). 核心算法：输入的时间 - 现在的时间 = 剩余的时间（即倒计时）

(2).用时间戳来做。用户输入时间总的毫秒数 - 现在时间的总的毫秒数 = 剩余时间的毫秒数

(3).把剩余时间总的毫秒数 转换为 ：天 时 分 秒(时间戳转换为时分秒)

```
    // d = parseInt(总秒数 / 60 / 60 / 24)  计算天数
    // h = parseInt(总秒数 / 60 / 60 % 24)  计算小时数
    // m = parseInt(总秒数 / 60 % 60)  计算分钟数
    // s = parseInt(总秒数 % 60)  计算当前秒数
     function countDown(time) {
        var nowTime = +new Date(); //返回的是当前时间总的毫秒数
        var inputTime = +new Date(time); //返回的是用户输入时间总的毫秒数
        var times = (inputTime - nowTime) / 1000; //剩余时间总的秒数
        d = parseInt(times / 60 / 60 / 24);
        	d = d < 10 ? '0' + d : d; //小于10，补上0
        h = parseInt(times / 60 / 60 % 24);
        	h = h < 10 ? '0' + h : h;
        m = parseInt(times / 60 % 60);
        	m = m < 10 ? '0' + m : m;
        s = parseInt(times % 60);
        	s = s < 10 ? '0' + s : s;
        return d + '天' + h + '时' + m + '分' + s + '秒';
    }
    console.log(countDown('2019-10-21 12:00:00'));

```

