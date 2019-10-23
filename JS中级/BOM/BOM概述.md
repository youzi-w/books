# BOM 概述

## 什么是 BOM

- 浏览器对象模型（**B**rowser **O**bject **M**odel (BOM)） 
- 把浏览器当作一个对象
- BOM 顶级对象是 window
- BOM 学习的是浏览器窗口进行交互的对象
- BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差

## BOM 构成

window 对象是浏览器的顶级对象，具有双重角色

1. window 是JS 访问浏览器窗口的一个接口

2. 定义在全局作用域中的变量、函数均自动成为 window 对象的属性和方法。

   在调用时可以省略 window ，对话框属于 window 对象方法，如： alert()  prompt() 

**注意：**window 下的一个特殊属性：window.name

