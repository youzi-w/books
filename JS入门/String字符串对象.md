```
    var str = 'andy';
    console.log(str.length);

```

整个步骤分解

```
    //对象才有属性和方法，复杂数据类型才有属性和方法
    //简单数据类型为何会有length属性呢？ 
    //基本包装类型： 把简单数据类型 包装成为了 复杂数据类型
    // 步骤：(1) 吧简单数据类型包装为复杂数据类型
    var temp = new String('andy');
    // (2) 把临时变量的值传递给 str
    str = temp;
    // (3) 销毁这个临时变量
    temp = null;

```

# 字符串的不可变性

定义：里面的值不可变。虽然看上去改变了内容，但其实是地址变化了，内存中心开辟了一个新的内存空间。

```
var str = '';
for (var i = 0; i < 100000; i++) {
	str += i;
}
console.log(str);//这个结果需要花费大量时间来显示，因为需要不断开辟新的空间。
```

# 根据字符串返回位置

**str.indexOf('要查找的字符', [起始位置])**

```
var str = '改革春风吹满地，春天来了';
console.log(str.indexOf('春'));
console.log(str.indexOf('春'),3);//从索引号为 3 的位置开始往后查找
```

## 案例：查找字符串 "abcoefoxyozzopp" 中所有o 出现的位置和次数

步骤：

1. 先查找第一个o出现的位置
2. 只要 indexOf 返回的结果不是 -1 ，则继续往后查找
3. 因为 indexOf 只能查找第一个，所以后面的查找，一定是当前索引 +1，从而继续查找

```
    var str = 'abcoefoxyozzopp'; 
    var index = str.indexOf('o'); 
    var num = 0;
    while (index !== -1) {
        console.log(index); //打印第一个O出现的位置
        num++;//出现次数+1
        index = str.indexOf('o', index + 1); //从当前 o 后面一个位置继续查找   
    }
    console.log('o出现的次数是' + num);

```

# (重点)根据位置返回字符

| 方法名            | 说明                                        | 使用                            |
| ----------------- | ------------------------------------------- | ------------------------------- |
| charAt(index)     | 返回指定位置的字符(index 字符串的索引号)    | str.charAt(0)                   |
| charCodeAt(index) | 获取指定位置处字符串的ASCII码(index 索引号) | str,charCodeAt(0)               |
| str[index]        | 获取指定位置处字符                          | HTML5，IE8+支持，和charAt()等效 |



```
    // charAt(index) 根据位置返回字符串
    var str = 'andy';
    console.log(str.charAt(3));

    // 遍历数组
    for (i = 0;i < str.length; i++) {
        console.log(str.charAt(i));
    }
    
    // charCodeAt(index) 返回相应索引号的字符ASCII值，目的：判断用户按下了哪个值
    console.log(str.charCodeAt(0)); //返回97，因为a对应的ASCII码是97

```

# 统计出现最多的字符和次数

```
    // 判断一个字符串'abcoefoxyozzopp' 中出现最多的字符，并统计其次数
    // 1.核心算法：利用charAt() 遍历这个字符串
    // 2.把每个字符都存储给对象，若对象没有该属性，则为1； 如果存在，则为 +1
    // 第一次出现a时，o.a = 1; 下一次 o.a + 1
    // 遍历对象，得到最大值和该字符
    var str = 'abcoefoxyozzopp';
    var o = {};
    for (var i = 0; i < str.length; i++) {
        var chars = str.charAt(i); //chars 是字符串的每一个字符
        if(o[chars]) {
            o[chars]++;
        } else {
            o[chars] = 1;
        }
    }
    console.log(o);
    
    //遍历对象
    var max = 0;
    var ch = '';
    for (var k in o) {
        //k 得到的是 属性名
        //o[k] 得到的是属性值
        if (o[k] > max) {
            max = o[k];
            ch = k;
        }
    }
    console.log(max);
    console.log('最多的字符是：' + ch);

```

