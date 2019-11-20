## 显示隐藏

1. show

   ```js
   show([speed,[easing],[fn]])
   ```

   **speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

   **easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

   **fn:**在动画完成时执行的函数，每个元素执行一次。

2. hide

   ```js
   hide([speed,[easing],[fn]])
   //参数和上面完全相同.
   ```

3. toggle 切换

## 滑动

1. slideDown([speed],[easing],[fn])

2. slideUp([speed,[easing],[fn]])

3. slideToggle([speed],[easing],[fn])

事件

hover([over],out)

- over:鼠标移到元素上要触发的函数

- out:鼠标移出元素要触发的函数

stop([clearQueue],[jumpToEnd])

- 停止所有在指定元素上正在运行的动画。

- 如果队列中有等待执行的动画(并且clearQueue没有设为true)，他们将被马上执行

   ```js
       <style>
           * {
               margin: 0;
               padding: 0;
           }
           
           li {
               list-style-type: none;
           }
           
           a {
               text-decoration: none;
               font-size: 14px;
           }
           
           .nav {
               margin: 100px;
           }
           
           .nav>li {
               position: relative;
               float: left;
               width: 80px;
               height: 41px;
               text-align: center;
           }
           
           .nav li a {
               display: block;
               width: 100%;
               height: 100%;
               line-height: 41px;
               color: #333;
           }
           
           .nav>li>a:hover {
               background-color: #eee;
           }
           
           .nav ul {
               display: none;
               position: absolute;
               top: 41px;
               left: 0;
               width: 100%;
               border-left: 1px solid #FECC5B;
               border-right: 1px solid #FECC5B;
           }
           
           .nav ul li {
               border-bottom: 1px solid #FECC5B;
           }
           
           .nav ul li a:hover {
               background-color: #FFF5DA;
           }
       </style>
   
   ```

   ```js
   <body>
       <ul class="nav">
           <li>
               <a href="#">微博</a>
               <ul>
                   <li>
                       <a href="">私信</a>
                   </li>
                   <li>
                       <a href="">评论</a>
                   </li>
                   <li>
                       <a href="">@我</a>
                   </li>
               </ul>
           </li>
           <li>
               <a href="#">微博</a>
               <ul>
                   <li>
                       <a href="">私信</a>
                   </li>
                   <li>
                       <a href="">评论</a>
                   </li>
                   <li>
                       <a href="">@我</a>
                   </li>
               </ul>
           </li>
           <li>
               <a href="#">微博</a>
               <ul>
                   <li>
                       <a href="">私信</a>
                   </li>
                   <li>
                       <a href="">评论</a>
                   </li>
                   <li>
                       <a href="">@我</a>
                   </li>
               </ul>
           </li>
           <li>
               <a href="#">微博</a>
               <ul>
                   <li>
                       <a href="">私信</a>
                   </li>
                   <li>
                       <a href="">评论</a>
                   </li>
                   <li>
                       <a href="">@我</a>
                   </li>
               </ul>
           </li>
       </ul>
   
       <script>
           $(function() {
    
               // 2. 事件切换 hover  如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
               $(".nav>li").hover(function() {
                    // stop 方法必须写到动画的前面
                   $(this).children("ul").stop().slideToggle();
               });
           })
       </script>
   </body>
   
   ```

   

## 淡入淡出

fadeIn([speed],[easing],[fn])

fadeOut([speed],[easing],[fn])

fadeTo([[speed],opacity,[easing],[fn]])

-  把所有匹配元素的不透明度以渐进方式调整到指定的不透明度，并在动画完成后可选地触发一个回调函数。 

fadeToggle([speed,[easing],[fn]])

## 自定义动画

```js
animate(params,[speed],[easing],[fn])
```

paramas: 想要更改的样式属性，以对象形式传递，必填。属性名可以不加引号，如果是复合属性则要采取驼峰命名法，如： borderLeft。其余参数可以省略



王者荣耀手风琴案例分析

1. 鼠标经过某个小 li 有两步操作：

   当前小 li 宽度变为224px，同时里面的小图片淡出，大图片淡入

   其余兄弟小 li 宽度变为69px，小图片淡入，大图片淡出