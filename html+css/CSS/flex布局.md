# flex布局

## 基本概念

![20191202221407](D:\前端笔记\asset\automatic\20191202221407.png)

### 两条轴线

1. 水平主轴

2.  垂直的交叉轴 

### flex 容器

 任何一个容器都可以被指定为 flex 布局，这样容器内部的元素就可以使用 flex 来进行布局。 

```css
.container {
    display: flex | inline-flex;       //可以有两种取值
}
//如果你使用块元素如 div，你就可以使用 flex，
//而如果你使用行内元素，你可以使用 inline-flex。
```

在容器(container)中的每个单元块被称之为 flex item，每个项目占据的主轴空间为 (main size), 占据的交叉轴的空间为 (cross size)。 

**需要注意的是：当时设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效。** 

## 容器的六种属性

1. flex-direction(水平或垂直方向)
2. flex-wrap(是否换行)
3. flex-flow(方向和换行的简写形式，可以不用记住)
4. justify-content(水平的位置)
5. align-items(垂直的位置)
6. align-content( **定义了多根轴线的对齐方式** )

### 1. **flex-direction: **

决定主轴的方向(即项目的排列方向)

```js
<div class="container">
    <div></div>
	<div></div>
	<div></div>
</div>

<style>
.container {
    flex-direction: row | row-reverse | column | column-reverse;
}
</style>
```

 默认值：row，主轴为水平方向，起点在左端。 

 row-reverse：主轴为水平方向，起点在右端 

 column：主轴为垂直方向，起点在上沿 

 column-reverse：主轴为垂直方向，起点在下沿 



###  **2. flex-wrap** 

![20191202221650](D:\前端笔记\asset\automatic\20191202221650.png)

 默认情况下，项目都排在主轴线上，使用 flex-wrap 可实现项目的换行。 

```css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

1. 默认值：nowrap 不换行，即当主轴尺寸固定时，当容器空间不足，项目尺寸会随之调整而并不会挤到下一行。 

2. wrap：项目主轴总尺寸超出容器时换行，第一行在上方 
3.  wrap-reverse：换行，第一行在下方 



###  **3. flex-flow**

 flex-direction 和 flex-wrap 的简写形式 

```html
默认值: flex-flow:row nowrap;
```

感觉没什么卵用，老老实实分开写就好了。这样就不用记住这个属性了。 

```css
.container {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```

```html
.box {
	width: ;
	height: ;
	flex-flow:row wrap;
}
```



###  **4. justify-content**

定义了项目在**主轴**的排列方式。 

**建立在主轴为水平方向时测试，即 flex-direction: row** 

```css
.container {
    flex-direction: row;
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

 默认值: flex-start 左对齐 

 flex-end：右对齐 

 center：居中 

 space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。 

space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。

### **5. align-items **

项目在**交叉轴**上的对齐方式

**建立在主轴为水平方向时测试，即 flex-direction: row**

```css
.container {
    flex-direction: row;
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![align-items](D:\前端笔记\asset\automatic\20191202215132.png)

-  stretch（默认值） ，即如果项目未设置高度或者设为 auto，将占满整个容器的高度。  

  假设容器高度设置为 100px，而项目都没有设置高度的情况下，则项目的高度也为 100px。 

  子项目设有高度，则无法使用strech属性

- flex-start：交叉轴的起点对齐  

假设容器高度设置为 100px，而项目分别为 20px, 40px, 60px, 80px, 100px, 

-  flex-end：交叉轴的终点对齐 
-  center：交叉轴的中点对齐 

-  baseline: 项目的第一行文字的基线对齐 

### **6. align-content: **

![ScreenShot20191202220400](D:\前端笔记\asset\automatic\ScreenShot20191202220400.png)

```css
.container {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch | space-evenly;
}
```



定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用

这个这样理解：定义主轴拥有多个轴时，副轴的排列方式

当你 flex-wrap 设置为 nowrap 的时候，容器仅存在一根轴线，因为项目不会换行，就不会产生多条轴线。

当你 flex-wrap 设置为 wrap 的时候，容器可能会出现多条轴线，即出现了多行元素，这时候你就需要去设置多行元素之间的对齐方式了。

建立在主轴为水平方向时测试， flex-direction: row, flex-wrap: wrap

默认值为 stretch，看下面的图就很好理解了

- 当值为 stretch 时会三条轴线平分容器的垂直方向上的空间。  值得注意的是，虽然在每条轴线上项目的默认值也为 stretch，但是由于我每个项目我都设置了高度，所以它并没有撑开整个容器。 

- 如果项目不设置高度的话就会撑开整个容器, 这里重点还是理解三条轴线会平分垂直轴上的空间。 

 flex-start：轴线全部在交叉轴上的起点对齐 

 flex-end：轴线全部在交叉轴上的终点对齐 

 center：轴线全部在交叉轴上的中间对齐 

 space-between：轴线两端对齐，之间的间隔相等，即剩余空间等分成间隙。 

space-around：每个轴线两侧的间隔相等，所以轴线之间的间隔比轴线与边缘的间隔大一倍。

**space-envenly: 均匀排列每个元素,每个元素之间的间隔相等（兼容性较差）**

## Flex 项目的六种属性：

1. order
2. flex-basis
3. flex-grow
4. flex-shrink
5. flex
6. align-self

### 1. order属性

`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

> ```css
> .item {
>   order: <integer>;
> }
> ```

![](http://cdn.liweihao.cn/image/blog/20191203163903.png)

### 2. flex-grow属性

#### 特性

分配剩余空间

`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

> ```css
> .item {
>   flex-grow: <number>; /* default 0 */
> }
> ```



![](http://cdn.liweihao.cn/image/blog/20191203165315.png)

如果弹性元素设置了宽度，将把（弹性盒子-弹性元素宽度和）后按照 `flex-grow` 进行分配 。

![](http://cdn.liweihao.cn/image/blog/20191203165945.png)

```css
<style>
  * {
    padding: 0;
    margin: 0;
    padding: 10px;
    margin: 5px;
  }
  article {
    width: 600px;
    position: relative;
    height: 200px;
    border: solid 5px silver;
    display: flex;
  }
  article div {
    min-height: 80px;
    border: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
  }
  article div:nth-of-type(1) {
    width: 100px;
    flex-grow: 1;
  }
  article div:nth-of-type(2) {
    width: 100px;
    flex-grow: 3;
  }
  article div:nth-of-type(3) {
    width: 300px;
    flex-grow: 6;
  }
</style>
```

### 3.flex-shrink

```Text
缩小比例 = 不足的空间 / (元素 1 宽度 x 缩小比例) + (元素 2 宽度 x 缩小比例) ...
最终尺寸 = 元素三宽度 - (缩小比例 x  元素 3 的宽度) X 元素宽度
```

下例在600宽的弹性盒子中放了 1000 宽的弹性元素。并为最后两个元素设置了缩放，最后一个元素的缩放比例为 500 -( ( (1000-600) / (100X1+400x3+500X6) ) x 3 ) X 500 = 220.9，计算公式说明如下：

```css
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            width: 100vh;
            padding-left: 50px;
            padding-top: 15px;
        }

        article {
            border: solid 5px silver;
            width: 400px;
            height: 120px;
            display: flex;
            align-items: center;
            padding: 10px;
            box-sizing: content-box;
        }

        article div:nth-child(1) {
            flex-shrink: 0;
        }

        article div:nth-child(2) {
            flex-shrink: 1;
        }

        article div:nth-child(3) {
            flex-shrink: 3;
        }

        article * {
            width: 200px;
            height: 100px;
            overflow: hidden;
            background: blueviolet;
            background-clip: content-box;
            padding: 10px;
            border: solid 1px blueviolet;
            box-sizing: border-box;
            font-size: 30px;
            color: white;
        }
    </style>

```

```html
    <article>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </article>
```

![](http://cdn.liweihao.cn/image/blog/20191203175955.png)

### 4.flex-basis

 **定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间**

可以是长度单位，也可以是百分比。

```text
尺寸命令优先级
max-width/height | min- > flex-basis > width/height
```

```css
<style>
  * {
    padding: 0;
    margin: 0;
  }
  article {
    width: 600px;
    position: relative;
    height: 150px;
    margin-left: 100px;
    margin-top: 100px;
    outline: solid 5px silver;
    display: flex;
    padding: 20px;
  }
  article div {
    outline: solid 5px blueviolet;
    text-align: center;
    font-size: 28px;
    line-height: 5em;
  }
  article div:nth-of-type(1) {
    flex-basis: 100px;
    width: 200px;
  }
  article div:nth-of-type(2) {
    flex-basis: 200px;
  }
  article div:nth-of-type(3) {
    flex-basis: 200px;
  }
</style>
```

```html
<article>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</article>
```

![](http://cdn.liweihao.cn/image/blog/20191203181157.png)



### 5.flex(组合属性)

建议使用 flex ，不要单独使用 flex-grow / flew-shrink / flex-basis 。

![](http://cdn.liweihao.cn/image/blog/20191203193108.png)

```css
    <style>
        /* *{
            padding: 0;
            margin-inline: 0;
        }
        article{
            width: 500px;
            height: 200px;
            outline: solid 5px red;
            display: flex; 
            padding: 20px; 
            margin-left: 100px;
            margin-top: 100px;   
        }
        article div {
            outline: solid 5px green;
            font-size: 28px;
            text-align: center;
            flex: 1 0 100px;
        } */
        * {
            padding: 0;
            margin: 0;
        }

        .father {
            width: 600px;
            position: relative;
            height: 150px;
            margin-left: 100px;
            margin-top: 100px;
            outline: solid 5px silver;
            display: flex;
            padding: 20px;
        }

        .father div {
            outline: solid 5px blueviolet;
            text-align: center;
            font-size: 28px;
            line-height: 5em;
        }
        .father div:nth-child(1) {
            flex:1 0 300px;
        }
        .father div:nth-child(2) {
            flex:1 3 300px;
        }
        .father div:nth-child(3) {
            flex:1 3 300px;
        }
    </style>
</head>

<body>
    <div class="father">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </aticle>
</body>

```

```html
    <article>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </article>

```



### 6. align-self属性

项目在交叉轴上的排列方式

```css
<article>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</article>

article:first-child{
    align-self:flex-start;
}
article:nth-child(2){
    align-self:center;
}
article:nth-child(3){
    align-self:flex-end;
}
```

![](http://cdn.liweihao.cn/image/blog/20191203164946.png)

## 文本节点也在弹性布局的操作范围之内

