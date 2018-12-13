$(function () {
    //判断是否有用户登录，若有，则让islogin显示，
    //否则，隐藏
    let username = getCookie("username");
    if(username == undefined){
        $(".islogin_out").css({display:"block","background-color":"#ffffff","margin-top":"20px"});
    }
    else{
        $(".islogin_out").css({display:"none"});
    }
})
$(function(){
    $(".icon-chahao").click(function(){
        $(".islogin_out").css({display:"none"});
    })
})
$(function(){
    let goodsImg = "";
    let goodsName = "";
    let goodsPrice = "";
    //这边应当是页面一出来便请求数据
    $.ajax({
        type:"post",
        url:"../php/getGoodsList.php",
        async:true,
        data:{},
        success:function(data){
            //数据拿到成功以后，首先要拿到cookie
            let goodsId = getCookie("goodsId");
            for(let i=1;i<data.length;i++){
                if(goodsId == data[i].goodsId){
                    goodsImg = data[i].goodsImg;
                    godosName = data[i].godosName;
                    goodsPrice = data[i].goodsPrice;
                    //在这边进行赋值,
                    $(".goodsImg").attr({"src":data[i].goodsImg});
                    $(".Prcall_Name").html(data[i].goodsName);
                    $(".Prcall_Explain").html(data[i].goodsDesc);
                    $(".Prcall_self").html(data[i].beiyong1);
                    $(".Prcall_priceSpan").html(data[i].goodsPrice);
                    $(".isHave").html(data[i].beiyong2);
                    $(".goodsImg_out").css({"background-Image":"url("+data[i].goodsImg+")"})
                    $(".goods_lb_Img1").attr({"src":data[i].goodsImg});
                    $(".goods_lb_Img2").attr({"src":data[i].goodsImg});
                    $(".goods_lb_Img3").attr({"src":data[i].goodsImg});
                    $(".goods_lb_Img4").attr({"src":data[i].goodsImg});
                    //放大镜
                    magnifier(".box",560,560,data[i].goodsImg,200,200,560);

                }

            }

            //此页面的点击事件，每进行一次点击，便获取该物品的一些值
            //将这些值拿到并存在一个数据库中，在另一个页面调用

        },
        dataType:"json"
    })
    //点击事件
    $(".addshoppCart").click(function(){
        //先拿到值
        let n = getCookie("n");
        let goodsId = n;
        n++;
        setCookie("n",n,7);

        let count = 1;
        let objVal = {
            goodsId:goodsId,
            goodsImg:goodsImg,
            goodsName:goodsName,
            goodsPrice:goodsPrice,
            count:count
        };
        console.log(objVal)
        $.ajax({
            type:"post",
            url:"../php/addShoppingCart.php",
            async:true,
            data:{
                goodsId:goodsId,
                goodsImg:goodsImg,
                goodsName:goodsName,
                goodsPrice:goodsPrice,
                count:count
            },
            success:function(data){
                console.log(data)
                if(data == 1){
                    console.log("success");
                    //成功之后跳转到下一个页面
                    location.href = "shoppCart.html";
                }

                else{
                    console.log("服务器错误")
                }
            }
        })
    });
})




