| offset                                          | style                                        |
| ----------------------------------------------- | -------------------------------------------- |
| 可以得到任意 样式表 中的样式值                  | 只能得到 行内样式表 中的                     |
| 获取的数值 没有单位                             | style.width 获得的是 带有单位的字符串        |
| offsetWidth 包含 padding+border+width           | style.width 不包含padding 和 border          |
| offsetWidth 等属性是只读属性 只能获取，不能赋值 | style.width 是可读写属性，可以获取也可以赋值 |
| * 想要获取元素大小位置，用 offset 更合适        | *想要给元素更改值，用 style                  |

