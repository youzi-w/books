```
1. element.style  行内样式操作
2. element.className 类名样式操作
```

注意

1. 如果样式修改较多，可以采取操作类名方式更改元素样式

   ```
   var test = document.querySelector('div');
   ```

   

2. class 是保留字，因此使用className 来操作元素类名属性

   ```
   this.className = 'first change';
   ```

   

3. className 会直接更改元素类名，会覆盖原先的类名; 也可以采用多类名选择器

```
this.className = 'first change';
```

