#  4. JS 执行机制

## 1. JS 是单线程

即同一时间只能做一件事





## 2. 同步和异步

H5 允许JS 创建多个线程，出现了 同步和异步

- 同步：前一个任务执行完，在执行下一个任务
- 异步：在执行一件事的过程中，可以处理其他事情

```
         第一个问题
         console.log(1);

         setTimeout(function() {

             console.log(3);

         }, 1000);

         console.log(2);

//打印结果为：1 2 3 
```



### （1）同步和异步的执行机制

- 同步任务：同步任务都放在主线程上执行，形成一个 **执行栈**

- 异步任务：JS 的异步是通过回调函数实现的

  一般而言，异步任务分为三种：

  1. 普通事件，鼠标单击（click） 页面缩放（resize）
  2. 资源加载， load error
  3. 定时器触发， setInterval  setTimeout
  4. promise

执行过程：

1. 主线程规定执行栈中的执行顺序，先执行**执行栈中的同步任务**
2. 异步任务（回调函数）放入任务队列中
3. 执行栈中的所有同步任务执行完毕，主线程会查看**任务队列**中的异步任务。于是异步任务进入执行栈，开始执行





### （2）事件循环 (Event Loop)

当有许多个异步任务时，会通过**异步进程处理**，

![Screenshot_2019-10-24-16-41-04-239_tv.danmaku.bil](F:\QQ下载的文件\1576906051\FileRecv\MobileFile\Screenshot_2019-10-24-16-41-04-239_tv.danmaku.bil.png)

当 点击鼠标后，onclick 事件才会被异步进程处理放进任务队列中，当主线程中的任务全部被执行完之后，查询任务队列，取出下一个任务放入主线程

![事件循环](F:\QQ下载的文件\1576906051\FileRecv\MobileFile\Screenshot_2019-10-24-16-46-28-247_tv.danmaku.bil.png)

- 由于主线程不断重复获得任务，执行任务，再获取任务 执行任务，这种机制被称为**事件循环**

## 3. js 异步执行的运行机制。

(1)所有任务都在主线程上执行，形成一个执行栈

(2)主线程之外，还存在一个“任务队列”。只要异步任务有了运行结果，就在“任务队列”中放置一个事件

(3)一旦“执行栈”中的同步任务执行完毕，系统就会读取“任务队列”。对应的异步任务结束等待状态，进入执行栈并开始执行

(4) 主线程不断重复上面的第三步