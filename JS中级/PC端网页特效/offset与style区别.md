---
offset系列和style系列的区别
---
| OFFSETWIDTH                                            | style.WIDTH()                               |
| ------------------------------------------------------ | ------------------------------------------- |
| 可以得到**任意样式表**中的值                           | 只能得到**行内样式表**内的值                |
| 获取的值是Number类型， 没有单位                        | style.width 获得的是：带有单位的字符串类型  |
| offsetWidth =元素自身width+padding+border(后两个要乘2) | style.width() =元素自身width px             |
| offsetWidth 等属性是只读属性: 只能获取，不能赋值       | style.width 是可读写属性:可以获取也可以赋值 |
| 想要获取元素大小位置，用 offset 更合适                 | 想要给元素更改值，用 style                  |

### offset系列：

- offsetWidth
- offsetHight
- offsetLeft(介绍这个，其他同理可得)
- offsetTop

### style系列

- style.width
- style.height
- style.left
- style.top

### offsetLeft:

1. 包含在父元素里 = 父级元素margin+父级元素padding+父级元素的border+自己的margin 
2. 没有包含在父元素里（脱离文本流）= 自己的left

### offsetLeft 和 style.left的区别

-  style.left只能获取行内的，而offsetLeft则可以获取到所有的；

- offsetLeft 可以返回没有定位盒子距离左侧的位置；而style.left不可以，其只能返回有定位盒子的left;

- offsetLeft 返回的是数字，而 style.left 返回的是字符串，除了数字外还带有单位：px;

   注意：可以用parseInt进行转化；比如：styleLeft='300px' ---> parseInt(styleLft) ---> 300

- offsetLeft是只读的，而style.left是可读写；

- 如果没有给 当前 元素指定过 top 样式，则 style.top 返回的是空字符串。