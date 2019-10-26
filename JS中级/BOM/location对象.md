## URL 统一资源运算符

```
<protocol>://<host>:<port>/<path>[?<query]#<fragment>
<通信协议>://<主机>:<端口>/<路径>;<参数>?<片段>
```

## location 对象的属性

location 全局对象

| location 对象属性 | 返回值                             |
| ----------------- | ---------------------------------- |
| location.href     | 获取或者设置整个 URL               |
| location.host     | 返回主机（域名）                   |
| location.port     | 返回端口号，如果未写，返回空字符串 |
| location.pathname | 返回路径                           |
| location.search   | 返回参数                           |
| location.hash     | 返回片段，#后面内容常见于链接 锚点 |

**重点记忆：href 和 search**



## location 对象方法

| location 对象方法  | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟 href 一样，可以跳转页面（也称重定向页面）                 |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮，或者 f5；如果参数为 true ,强制刷新 ctrl + f5 |

 ```
        <button>点击</button>

        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // 记录浏览历史，所以可以实现后退功能
             location.assign('http://www.itcast.cn');
            
            // 不记录浏览历史，所以不可以实现后退功能
             location.replace('http://www.itcast.cn');
            location.reload(true);
        })

 ```

