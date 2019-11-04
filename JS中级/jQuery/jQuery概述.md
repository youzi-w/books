## jQuery 的基本使用

### jQuery 的入口函数

```js
$(function() {
    ...;//此处是页面 DOM 加载完成的入口
}
```

```js
$(document).ready(function() {
	...; //此处是页面DOM加载完成的入口    
})
```



1. 等着 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装
2. 相当于原生 js 中的 DOMContentLoaded。
3. 不同于原生中的 load 事件，load 事件是等页面文档、外部 js 文档、css文档、图片加载完毕才执行内部代码
4. 更推荐第一种方式