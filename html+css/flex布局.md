# flex布局

## 基本概念

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

### 1. **flex-direction: 决定主轴的方向(即项目的排列方向)** 

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



###  **2. flex-wrap: 决定容器内项目是否可换行** 

 默认情况下，项目都排在主轴线上，使用 flex-wrap 可实现项目的换行。 

```css
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

1. 默认值：nowrap 不换行，即当主轴尺寸固定时，当空间不足时，项目尺寸会随之调整而并不会挤到下一行。 

2. wrap：项目主轴总尺寸超出容器时换行，第一行在上方 
3.  wrap-reverse：换行，第一行在下方 



###  **3. flex-flow: flex-direction 和 flex-wrap 的简写形式** 

 默认值为: row nowrap，感觉没什么卵用，老老实实分开写就好了。这样就不用记住这个属性了。 

```css
.container {
    flex-flow: <flex-direction> || <flex-wrap>;
}
```



###  **4. justify-content：定义了项目在主轴的对齐方式。** 

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

### **5. align-items: 定义了项目在交叉轴上的对齐方式**

**建立在主轴为水平方向时测试，即 flex-direction: row**

```css
.container {
    flex-direction: row;
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

 默认值为 stretch 即如果项目未设置高度或者设为 auto，将占满整个容器的高度。  

假设容器高度设置为 100px，而项目都没有设置高度的情况下，则项目的高度也为 100px。 

- flex-start：交叉轴的起点对齐  

假设容器高度设置为 100px，而项目分别为 20px, 40px, 60px, 80px, 100px, 

-  flex-end：交叉轴的终点对齐 
-  center：交叉轴的中点对齐 

-  baseline: 项目的第一行文字的基线对齐 



### **6. align-content: 定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用**

这个这样理解：

当你 flex-wrap 设置为 nowrap 的时候，容器仅存在一根轴线，因为项目不会换行，就不会产生多条轴线。

当你 flex-wrap 设置为 wrap 的时候，容器可能会出现多条轴线，这时候你就需要去设置多条轴线之间的对齐方式了。

建立在主轴为水平方向时测试，即 flex-direction: row, flex-wrap: wrap

```css
.container {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

默认值为 stretch，看下面的图就很好理解了

- 当值为 stretch 时会三条轴线平分容器的垂直方向上的空间。  值得注意的是，虽然在每条轴线上项目的默认值也为 stretch，但是由于我每个项目我都设置了高度，所以它并没有撑开整个容器。 

- 如果项目不设置高度的话就会撑开整个容器, 这里重点还是理解三条轴线会平分垂直轴上的空间。 

 flex-start：轴线全部在交叉轴上的起点对齐 

 flex-end：轴线全部在交叉轴上的终点对齐 

 center：轴线全部在交叉轴上的中间对齐 

 space-between：轴线两端对齐，之间的间隔相等，即剩余空间等分成间隙。 

space-around：每个轴线两侧的间隔相等，所以轴线之间的间隔比轴线与边缘的间隔大一倍。



## Flex 项目的六种属性：

1. order
2. flex-basis
3. flex-grow
4. flex-shrink
5. flex
6. align-self