$(function(){
    //划过效果
    $(".con_big_creat").on("mouseenter",".con_big_createDong",function(){
        $(this).animate({top:"-4px"},400).css({"box-shadow": "0 8px 24px 8px lightgray"});
    });
    $(".con_big_creat").on("mouseleave",".con_big_createDong",function(){
        $(this).animate({top:"0px"},400).css({"box-shadow": "0 8px 24px 8px transparent"});
    });


    $(".con_small_create").on("mouseenter",".con_small_createNew",function() {
        $(this).animate({top:"-4px"},400).css({"box-shadow": "0 8px 24px 8px lightgray"});
    });
    $(".con_small_create").on("mouseleave",".con_small_createNew",function() {
        $(this).animate({top:"0px"},400).css({"box-shadow": "0 8px 24px 8px transparent"});
    });

})
$(function(){
    //动态获取后端数据
    //ajax获取后台数据
    $.ajax({
        type:"post",
        url:"../php/getGoodsList.php",
        async:true,
        data:{},
        success:function(data){
            //请求成功执行函数
            console.log(data.length);
            console.log(data);
            let length = data.length;
            for(i=1;i<length;i++){
                //动态创建小盒子
                let str = "<div class = 'con_small_createNew'>\
                    <img src = '"+data[i].goodsImg+"'/>\
                    <div class = 'con_small_insert'>\
                        <div class = 'con_sm_inL'><p class='call_Name'>"+data[i].goodsName+"</p><p class='call_Explain'>"+data[i].goodsDesc+"</p></div>\
                        <div class = 'con_sm_inR'><p><span class=\"recent_Price\">"+data[i].goodsPrice+"</span><em class=\"oneEm\">元起</em><span  class=\"old_Price\">"+data[i].beiyong3+"</span></p></div>\
                    </div>\
                 </div>";

                $(".con_small_create").append(str);
                // if(i%2 == 0){
                //     $(".con_small_createNew").addClass("removeMR");
                // }
            }
        },
        dataType:"json"
    })
})
$(function(){
    //点击每一个商品，获取他的值，将其加入数据库，在商品详情页面ajax获取到，没点击一次进行一次判断
    $(".con_small_create").on("click",".con_small_createNew",function(){
        //需要判断点击的是哪个
        let index = $(this).index()+1;//获取下标，以获取对应的data[i].goodsId值，
        // alert(index);
        $.ajax({
            type:"post",
            url:"../php/getGoodsList.php",
            async:true,
            data:{},
            success:function(data){
                for(let i=1;i<data.length;i++){
                    if(index == i){
                        let goodsId = data[i].goodsId;
                        setCookie("goodsId",goodsId,7);//这边存cookie，另一个页面获取
                        location.href = "ProductInfo.html";
                    }
                }
            },
            dataType:"json"
        })
    })
})
