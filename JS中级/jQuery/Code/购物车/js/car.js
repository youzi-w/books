$(function() {
    //全选 全不选
    // 把全选按钮(checkall)的状态赋值给三个小的按钮(j-checkbox)即可
    //事件可以使用change
    $(".checkall").change(function() {
        $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked"));
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function() {
        // if (被选中的小复选框的个数 === 3) {
        //     就要选中复选按钮
        // } else {
        //     不要选中全选按钮
        // }
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            // $(".j-checkbox").length 小的复选框个数
            $(".checkall").prop("checked",true);
        } else {
            $(".checkall").prop("checked",false);
            
        }
    });
    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    ($(function() {
        $(".increment").click(function() {
            // 得到当前兄弟文本框的值
            var n = $(this).siblings(".itxt").val();
            n++;
            $(this).siblings(".itxt").val(n);
            // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
            
        });

        $(".decrement").click(function() {
            // 得到当前兄弟文本框的值
            var n = $(this).siblings(".itxt").val();
            if(n == 1) {
                return false;
            }
            n--;
            $(this).siblings(".itxt").val(n);
        });

    }))

})