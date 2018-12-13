$(function(){
    //页面一打开便发送ajax请求，用来拿到商品详情页的数据
    //在购物车页面进行展示
    $.ajax({
        type:"post",
        url:"../php/getshoppcart.php",
        async:true,
        data:{},
        success:function(data){
            //根据数据库中数据量来创建盒子
            console.log(data);
            let lengthSpan = data.length;//数据能拿到
            //让span的值为data.length;
            for(let i=0;i<data.length;i++){
                let str = "<div class = 'goodsC_b'>\
                        <div class='onecheck'><input type='checkbox' class='dancheck'/></div>\
                        <div class='createI_P'><img class='create_DImg' src='"+data[i].src+"'/><span></span>"+data[i].recentprice+"</span><span>4G+64G</span></div>\
                        <div class='create_Price'><span class='price_Dspan'>"+data[i].goodsName+"</span></div>\
                        <div class='create_Num'><span class='reduce'>-</span><span class='countVal'>"+data[i].count+"</span><span class='add'>+</span></div>\
                        <div class='create_Total'><span class='all_price'>"+data[i].goodsName+"</span></div>\
                        <div class='create_Do'><span class='remove_Do'>×</span></div>\
                    </div>";
                $(".goodsCart").append(str);
                }
            let goodsLength = $(".goodsC_b").size();
            console.log(goodsLength);//得到数据库数据长度
            setCookie("goodsLength",goodsLength,7);
            //全选与反选
            $(function() {
                $(".check").bindCheckAll($(".dancheck"),undefined)
            })
            //价格计算

            //循环所有的盒子，
            $(".check").click(function(){
                //如果全选按钮选中
                let strPrice = 0;
                if($(this).is(":checked")){
                    $(".all_price").each(function(){
                        strPrice+=parseInt($(this).text());
                        $(".price_com").html(strPrice)
                    });
                    //让件数也发生变化
                    let countVal = 0;
                    $(".countVal").each(function(){
                        countVal+=parseInt($(this).text());
                    })
                    $(".num_Span").html(countVal)
                }
                else{
                    $(".price_com").html("0")
                    $(".num_Span").html("0")
                }
            })

            $(".dancheck").click(function(){
                //全选按钮不选中

                if($(this).is(":checked")){
                    //判断全选是否选中
                    if($(".check").is(":checked")){
                        let strPrice = 0;
                        $(".all_price").each(function(){
                            strPrice+=parseInt($(this).text());
                            $(".price_com").html(strPrice)
                        })
                    }
                    //单选
                    else{
                        $(this).each(function(){
                            let newstrPrice = parseInt($(this).parent().parent().find(".all_price").text());
                            console.log(newstrPrice);
                            let htmlPrice = newstrPrice+parseInt($(".price_com").text());
                            console.log(htmlPrice);
                            $(".price_com").html(htmlPrice);
                            //让件数也改变
                            let countVal = parseInt($(".num_Span").text());
                            countVal=countVal+1;
                            $(".num_Span").html(countVal)
                            console.log(countVal)
                        })

                    }

                }
                else{
                    //单选按钮未选中
                    let pricecom = $(".price_com").text();
                    if(pricecom <= 0){
                        return;
                    }
                    else{
                        let newstrPrice = parseInt($(this).parent().parent().find(".all_price").text());
                        let htmlPrice = parseInt($(".price_com").text())-newstrPrice;
                        $(".price_com").html(htmlPrice);
                        //让件数也改变
                        let countVal = $(".num_Span").text();
                        countVal--;
                        $(".num_Span").html(countVal)
                    }



                }
            })
        },
        dataType:"json"
    })

})
$(function(){
    let index = "";
    let price = 0;
    $(".goodsCart").on("click",".create_Do",function(){
        //可以拿到src
        index = $(this).parent().find(".create_DImg").attr("src");
        console.log(index)
        //拿到price
        price = $(this).parent().find(".price_Dspan").text();
        console.log(price)
        $(".isdelete").css({display:"block"}).animate({top:"200px"},1500);
    });

    $(".span_l").click(function(){
        $(".isdelete").css({display:"none"}).animate({top:"-100px"},1500);
        //发送ajax请求,传数据进行删除
        $.ajax({
            type:"post",
            url:"../php/deleteshoppcart.php",
            async:true,
            data:{
                data1:index,
                data2:price
            },
            success:function(data){
                //判断是否删除成功
                if(data == 1){
                    console.log("success");
                    //如果删除成功接着改外观，并且重新加载页面
                    location.reload();
                }
                else{
                    console.log("default");
                }
            }
        })
    })
    $(".span_r").click(function(){
        $(".isdelete").css({display:"none"}).animate({top:"-100px"},1500);
    });
    //计算商品价格
    // let flag = false;
    // let isdeleteFlag = $(".isdelete").css("display");
    // console.log(isdeleteFlag);
    // if(isdeleteFlag == none){
    //     flag = true;
    // }
    // else if(isdeleteFlag == block){
    //     flag = false;
    // }
    $(".goodsCart").on("click",".reduce",function(){
        let count = $(this).next().text();
        count--;
        if(count==0) {
            //若商品数为0.对用户进行提示，若确认则2删除
            let src = $(this).parent().parent().find(".create_DImg").attr("src");
            let recPrice = $(this).parent().parent().find(".price_Dspan").text();
            // $(".isdelete").css({display:"block"}).animate({top:"200px"},1500);
            $.ajax({
                type: "post",
                url: "../php/deleteshoppcart.php",
                async: true,
                data: {
                    data1: src,
                    data2: recPrice
                },
                success: function (data) {
                    //判断是否删除成功
                    if (data == 1) {
                        console.log("success");
                        //如果删除成功接着改外观，并且重新加载页面
                        location.reload();
                    }
                    else {
                        console.log("default");
                    }
                }
            })
        }
        else{
            $(this).next().html(count);
            let jiage = count * $(this).parent().parent().find(".price_Dspan").text();
            $(this).parent().parent().find(".all_price").html(jiage)
        }
    });
    $(".goodsCart").on("click",".add",function(){
        let count = $(this).prev().text();
        count++;
        if(count==11){
            alert("此商品最多只能购买10件");
            return;
        }
        else{
            let jiage = count * $(this).parent().parent().find(".price_Dspan").text();
            $(this).parent().parent().find(".all_price").html(jiage)
            $(this).prev().html(count);
        }
    });
    $(".price_com").click(function(){
        let priceSubmit = $(this).text();
        setCookie("priceSubmit",priceSubmit,7);
        location.href = "submit.html";
    })
})



