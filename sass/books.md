# SASS 的安装

先安装 Ruby

安装成功后，输入命令，查看ruby是否安装成功

```
ruby -v
```

成功的话，会返回：版本号（更新时间 revision 6xxxx) [x64-ming32]

然后打开安装文件中的 Start Command Prompt with Ruby 文件

在弹出的控制台命令框中输入

```
ruby -v
//若返回版本号（和上文一样的返回结果），则证明安装成功
```

先不要急着关掉命令框，我们要接着用。ruby安装成功，就可以安装SASS了。

同样是在这个命令框内，输入：

```
gem install sass
```

检查 sass 版本号

```
sass -v
```

返回版本号，则安装成功



# SASS 的使用

## 编译scss 文件

1. 在指定文件夹中新建一个后缀名为 .scss 的文件，例如：test.scss

   - 如果可以，请同时创建一个 index.html 文件，方便后面监视 scss文件

   - 在test.scss 文件中输入：

     ```scss
     $main-color:red;
     div {
     	background-color:$main-color;
     }
     ```

   - 在 index.html 文件中输入：

     ```html
     <div><div>
     ```

2. 在当前文件夹调出命令框，快捷键：shift + 鼠标右键

3. 选择菜单中的 “在此处打开PowerShell窗口(s)”

4. 在命令行中输入

   ```
   sass test.scss test.css
   ```

   你会发现原本文件夹中多了一个 test.css文件，打开后会发现，原来test.scss 中的文件被编译成css格式了

   ```css
   div {
       background-color:red;
   }
   ```



## 监视 sass文件

 你还可以使用Sass命令来监视某个Sass文件的改动，并自动编译来更新 CSS ： 

1. 在当前文件夹调出命令框，快捷键：shift + 鼠标右键
2. 选择菜单中的 “在此处打开PowerShell窗口(s)”
3. 在命令行中输入

```sass
sass --watch input.scss:output.css
```



##  监视目录

 如果你的目录里有很多 Sass 文件，你也可以使用Sass命令来监视整个目录： 

重复上面调出命令框的操作，然后输入

```
sass --watch 目录的路径
```



# Sass 语法

#  嵌套、导入和注释

了解保持sass条理性和可读性的最基本的三个方法：

## 使用和声明变量

 `sass`使用`$`符号来标识变量 

## 

```scss
$highlight-color: #F90;
```



## 嵌套规则

### 书写规则

 Sass 允许将一个 CSS 样式嵌套进另一个样式中，内层样式仅适用于外层样式的选择器范围内 （父子嵌套）

```scss
.main {
    .box {
        color: #000;
    }
    
    a {
        &:hover {
            background: orange;
        }
    }
}
```

编译为

```css
.main {}
    .main.box {
        color: #000;} 
	a {}
		.main a:hover {
            background: orange;}
```



### 引用父选择器:& 

 在这些情况下，你可以 `&` 字符来明确地表示插入指定父选择器 

```scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  body.firefox & { font-weight: normal; }
}
```

编译为

```css
a {
  font-weight: bold;
  text-decoration: none; }
  a:hover {
    text-decoration: underline; }
  body.firefox a {
    font-weight: normal; }
```



###  群组选择器的嵌套

```scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

```css
.container h1, .container h2, .container h3 { margin-bottom: .8em }
```



### 子组合选择器 > 和同层组合选择器：+   ~

 可以用 子组合选择器>选择一个元素的直接子元素 

```scss
article > section { border: 1px solid #ccc }
```

 可以用 同层相邻组合选择器`+` ，选择`header`元素后紧跟的某个指定元素 

```scss
header + p { font-size: 1.1em }
```

 可以用同层全体组合选择器`~`，选择所有跟在某个元素后的同层元素 

```scss
article ~ article { border-top: 1px dashed #ccc }
```



### 嵌套属性

 只需要输入一次命名空间，然后在其内部嵌套子属性。

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

 编译为： 

```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```



## 导入SASS文件

### `@import`

 Sass 扩展了 CSS `@import`规则，允许其导入 SCSS 或 Sass 文件。被导入的全部SCSS 或 Sass文件将一起合并到同一个 CSS 文件中。 

```scss
@import "foo.scss";
或者
@import "foo";
```

以下情况， 仅作为普通的 CSS @import 规则语句，不会导入任何 Sass 文件：

- 如果文件的扩展名是 `.css`。

- 如果文件名以 `http://` 开始。

- 如果文件名是 `url()`。

- 如果`@import` 中包含任何的媒体查询（media queries）

  ```scss
  @import "foo.css";
  @import "foo" screen;
  @import "http://foo.com/bar";
  @import url(foo);
  ```



### Partials

不希望编译成 css 文件：在文件名前面加上 _ : _colors.scss 

希望导入一个有下划线的文件，则只要写文件名即可，不要下划线和后缀：

```scss
@import "colors";
```

 注意，请不要将带下划线与不带下划线的同名文件放置在同一个目录下，比如，`_colors.scss` 和 `colors.scss` 不能同时存在于同一个目录下。否则带下划线的文件将会被忽略。 



### 嵌套 `@import`

 虽然在大部分情况下，一般都是在文档的顶层（注：最外层，不在嵌套规则内）使用 `@import`，但是也可以在CSS 规则和`@media` 规则中包含`@import`语句。就像一个基层的 `@import` ，这里会包含 `@import` 导入文件的内容。但是，这样导入的规则只能嵌套在原先防止 `@import` 的地方。 

举个例子，如果 `example.scss` 包含

```scss
.example {
  color: red;
}
```

然后（注：导入到 `#main` 样式内）

```scss
#main {
  @import "example";
}
```

注：这样导入后等同于：

```scss
#main {
  .example {
      color: red;
    }
}
```

将被编译为

```css
#main .example {
  color: red;
}
```

该指令只允许出现在文档顶层（注：最外层，不在嵌套规则内），像`@mixin` 或者 `@charset`，在文件中，不允许被`@import`导入到一个嵌套上下文中。

不允许在混人 (mixin) 或控制指令 (control directives) 中嵌套 `@import`。

## 注释: `/* */` 和 `//`

编译后： 多行注释会被保留在输出的CSS中，而单行注释会被删除。  

 如果多行注释的第一个字母是 `!`，那么注释总是会被保留到输出的CSS中，即使在压缩输出模式下。这可用于在你生成的CSS中添加版权声明。 

 如果发现在scss文件中出现中文注释,css文件就会报错,类似这样的错误

```
error style.scss (Line 5: Invalid GBK character "\xE8")
```

 在scss文件和css 文件的最顶端都添加

```
@charset "UTF-8";
```





## 混合器（@mixin 和 @include）

### 何时使用混合器

 判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。 

### 定义一个混入(@mixin)

 混入(mixin)允许您定义可以在整个样式表中重复使用的样式，而避免了使用无语意的类（class） 

```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

 混入也可以包含选择器和属性的混合体，选择器中甚至可以包含[parent references（父选择器）](https://www.html.cn/doc/sass/#referencing_parent_selectors_)。 例如： 

```scss
@mixin clearfix {
  display: inline-block;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  * html & { height: 1px }
}
```



### 引用混合样式:@include

```scss
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

 混入（mixin）定义也可以包含其他的混入。例如： 

```scss
@mixin compound {
  @include highlighted-background;
  @include header-text;
}

@mixin highlighted-background { background-color: #fc0; }
@mixin header-text { font-size: 20px; }
```



###  给混合器传参

 参数其实就是可以赋值给`css`属性值的变量 

```php
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

 允许通过语法`$name: value`的形式指定每个参数的值 

```php
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```



### 默认参数值

 参数默认值使用`$name: default-value`的声明形式 

```scss
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

调用时

 @include link-colors(red) ， `$hover`和`$visited`也会被自动赋值为`red`。 