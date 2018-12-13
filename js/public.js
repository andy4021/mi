$(function(){
    let goodsLength = getCookie("goodsLength");
    $(".header_num").html(goodsLength);

    $(".header_r2").hover(
        function () {
                $(this).css({"background-color": "white"});
                $(this).find("i").css({color: "orange"});
                $(this).find("a").css({color: "orange"});
                $(this).find("span").css({color: "orange"});
                $(this).find(".header_r2_b").css({display: "block"});
         },
        function () {
                $(this).css({"background-color": "#666"});
                $(this).find("i").css({color: "#999"});
                $(this).find("a").css({color: "#999"});
                $(this).find("span").css({color: "#999"});
                $(this).find(".header_r2_b").css({display: "none"});
        }
    );
    let lengthSpan = getCookie("lengthSpan");
    $(".header_num").html(lengthSpan);
    $(".header_r2").click(function(){
        location.href = "shoppCart.html";
    })
    //获取cookie
    let usernameVal = getCookie("username");
    $(".remove").click(function(){
        removeCookie("username");
        $(this).css({display:"none"});
    })
    if(usernameVal != "" || usernameVal != undefined){
        $(".header_Span").html(usernameVal);
        $(".remove").css({display:"block"})
    }
    else{
        $(".remove").css({display:"none"});
    }

    //划过app
    $(".downloadA").hover(
        function () {
            $(this).find("i").css({display: "block"});
            $(this).find(".downloadApp").css({display: "block"});
        },
        function () {
            $(this).find("i").css({display: "none"});
            $(this).find(".downloadApp").css({display: "none"});
        });

    //划过section的li
    $(".sec_out_li").mouseenter(
        function () {
            $(this).find(".sec_c_noneOut").stop().css({display: "block"});
        }
    );
    $(".sec_out_li").mouseleave(
        function () {
            $(this).find(".sec_c_noneOut").stop().css({display: "none"});
        }
    );
    //轮播图
    jQuery(".slider").slide({
        mainCell:".bd ul",
        effect:"leftLoop",
        autoPlay:true,
        trigger:"click"});
    //划过轮播图导航栏
    $(".sli_out_li").hover(
        function () {
            $(this).find(".sli_insert_none").css({display: "block"});
        },
        function () {
            $(this).find(".sli_insert_none").css({display: "none"});
        }
    );
    //固定定位
    $(".fixed_onea").hover(
        function () {
            $(this).find("img").attr({"src": "../img1/xp2.png"});
        },
        function () {
            $(this).find("img").attr({"src": "../img1/xp1.png"});
        }
    );
    $(".fixed_twoa").hover(
        function () {
            $(this).find("img").attr({"src": "../img1/xp4.png"});
        },
        function () {
            $(this).find("img").attr({"src": "../img1/xp3.png"});
        }
    );
    $(".fixed_threea").hover(
        function () {
            $(this).find("img").attr({"src": "../img1/xp6.png"});
        },
        function () {
            $(this).find("img").attr({"src": "../img1/xp5.png"});
        }
    );
    $(".fixed_foura").hover(
        function () {
            $(this).find("img").attr({"src": "../img1/xp8.png"});
        },
        function () {
            $(this).find("img").attr({"src": "../img1/xp7.png"});
        }
    );
    $(".fixed_fivea").hover(
        function () {
            $(this).find("img").attr({"src": "../img1/xp10.png"});
        },
        function () {
            $(this).find("img").attr({"src": "../img1/xp9.png"});
        }
    );
    //回到顶部
    $(".fixed_fivea").click(function () {
        $("html,body").animate({scrollTop: 0},600)
    });

    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 800) {
            $(".fixed_fivea").css({display: "block"})
        }
        else {
            $(".fixed_fivea").css({display: "none"})
        }
    });
    $(".sister_foot").find("li").hover(
        function(){
            let index = $(this).index();
            if(index == 0){
                $(".sis_Img0").attr({"src":"../img1/foot11.png"})
            }
            else if(index == 1){
                $(".sis_Img1").attr({"src":"../img1/foot51.png"})
            }
            else if(index == 2){
                $(".sis_Img2").attr({"src":"../img1/foot31.png"})
            }
            else if(index == 3){
                $(".sis_Img3").attr({"src":"../img1/foot21.png"})
            }
            else if(index == 4){
                $(".sis_Img4").attr({"src":"../img1/foot61.png"})
            }
        },
        function(){
            let index = $(this).index();
            if(index == 0){
                $(".sis_Img0").attr({"src":"../img1/foot1.png"})
            }
            else if(index == 1){
                $(".sis_Img1").attr({"src":"../img1/foot2.png"})
            }
            else if(index == 2){
                $(".sis_Img2").attr({"src":"../img1/foot3.png"})
            }
            else if(index == 3){
                $(".sis_Img3").attr({"src":"../img1/foot4.png"})
            }
            else if(index == 4){
                $(".sis_Img4").attr({"src":"../img1/foot5.png"})
            }
        }
    );
})