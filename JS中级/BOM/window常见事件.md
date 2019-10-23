

# 页面加载事件

## 1. load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等

```
        window.addEventListener('load', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('点击我');
            })
        })

```

有了window.addEventListener('load', function() 就可以把JS  代码放到页面元素的上方，因为 load 是等页面内容全部加载完毕再去执行处理函数

## 2.DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些

```
        document.addEventListener('DOMContentLoaded', function() {
                alert(33);
            })

```





# 调整窗口大小事件

## 示例

```
window.onresize = function() {}
window.addEventListener('resize', function() {})
```

注意：

1. 窗口大小发生像素变化，则会触发这个事件
2. 经常利用该事件完成响应式布局。

