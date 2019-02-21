$(function() {

    //划过select_two
    $(".select_two").hover(
        function () {
            $(this).find(".select_none").animate({height: "25px"}, 300);
        },
        function () {
            $(this).find(".select_none").animate({height: "0px"}, 300);
        }
    );
    $(".con_l").find("a").hover(
        function () {
            $(this).animate({bottom: "4"}, 500).css({"box-shadow": "0 8px 18px 8px lightgray"});
        },
        function () {
            $(this).animate({bottom: "0"}, 500).css({"box-shadow": "0 8px 18px 8px transparent"});
        }
    );
    $(".con_r li").find("a").hover(
        function () {
            $(this).animate({bottom: "4"}, 500).css({"box-shadow": "0 8px 18px 8px lightgray"});
        },
        function () {
            $(this).animate({bottom: "0"}, 500).css({"box-shadow": "0 8px 18px 8px transparent"});
        }
    );
    $(".Spanernter").mouseenter(function () {
        let index = $(this).index()//获取划过元素的下表
        if (index == 0) {
            //第一个span
            $(".conUl").css({"z-index": 0});
            $(".conUl1").css({"z-index": 2});
        }
        else if (index == 1) {
            $(".conUl").css({"z-index": 0});
            $(".conUl2").css({"z-index": 2});
        }
        else if (index == 2) {
            $(".conUl").css({"z-index": 0});
            $(".conUl3").css({"z-index": 2});
        }
        else if (index == 3) {
            $(".conUl").css({"z-index": 0});
            $(".conUl4").css({"z-index": 2});
        }
    });
    $(".conk_l_t").hover(
        function () {
            $(this).find("a").animate({"top": "0px"}, 300).css({"box-shadow": "0 8px 18px 8px lightgray"});
        },
        function () {
            $(this).find("a").animate({"top": "4px"}, 300).css({"box-shadow": "0 8px 18px 8px transparent"});
        }
    );
    $(".conLi").hover(
        function () {
            $(this).find("a").animate({top: "0px"}, 300).css({"box-shadow": "0 8px 18px 8px lightgray"});
            $(this).find(".none_con").css({display: "block"}).animate({height: "100px", bottom: "4px"}, 300);
        },
        function () {
            $(this).find("a").animate({top: "4px"}, 400).css({"box-shadow": "0 8px 18px 8px transparent"});
            $(this).find(".none_con").css({display: "none"}).animate({height: "0px", bottom: "0px"}, 300);
        }
    );
    //划过miExpalin
    $(".miExpalin").find("li").hover(
        function () {
            $(this).animate({top: "-3px"}, 300).css({"box-shadow": "0 8px 18px 8px lightgray"});
        },
        function () {
            $(this).animate({top: "0px"}, 300).css({"box-shadow": "0 8px 18px 8px transparent"});
        }
    );
    $(".video_b").find("li").hover(
        function () {
            $(this).animate({top: "-3px"}, 400).css({"box-shadow": "0 8px 24px 8px lightgray"});
        },
        function () {
            $(this).animate({top: "0px"}, 400).css({"box-shadow": "0 8px 24px 8px transparent"});
        }
    );
    let arrVideo = ["../video/1.mp4",
        "../video/2.mp4",
        "../video/3.mp4",
        "../video/2.mp4"];
    //点击时动态创建改变video标签的src标签
    $(".video_b").find("li").click(function(){
        let index = $(this).index;
        $("vf_b_video").find("source").remove();
        let pHtml = $(this).find(".viP1").text();
        $(".vf_t_p").html(pHtml);
        $(".video_fix").css({display:"block"});
        if(index == 0){
            let $sourceStr = $("<source src = '"+arrVideo[0]+"'/>");
            $(".vf_b_video").append($sourceStr);//将创建的标签插入进去
        }
        else if(index == 1){
            let $sourceStr = $("<source src = '"+arrVideo[1]+"'/>");
            $(".vf_b_video").append($sourceStr);//将创建的标签插入进去
        }
        else if(index == 2){
            let $sourceStr = $("<source src = '"+arrVideo[3]+"'/>");
            $(".vf_b_video").append($sourceStr);//将创建的标签插入进去
        }
        else if(index == 3){
            let $sourceStr = $("<source src = '../video/1.mp4'/>");
            $(".vf_b_video").append($sourceStr);//将创建的标签插入进去
        }
    });

    $(".icon-chahao").click(function(){
        $(".video_fix").css({display:"none"});
        //每点击一次便要删除以前创建的source标签
    })
    //无缝滚动
    jQuery(".picScroll-left").slide({
        titCell:".hd ul",
        mainCell:".bd ul",
        autoPage:true,
        effect:"leftLoop",
        scroll:4,
        vis:4,
        trigger:"click"});

    // 四个轮播图

    jQuery(".kind_sl_one").slide({
        titCell:".hd ul",
        mainCell:".bd ul",
        autoPage:true,
        effect:"leftLoop",
        autoPlay:true,
        trigger:"click"
    });
    $(".kind_sl_b").hover(
        function () {
            $(this).animate({top: "-3px"}, 400).css({"box-shadow": "0 8px 24px 8px lightgray"});
        },
        function () {
            $(this).animate({top: "0px"}, 400).css({"box-shadow": "0 8px 24px 8px transparent"});
        }
    );

});
//获取截至日期

$(function(){
    setInterval(function(){
        //设置结束日期
        let time_end = new Date("2018/12/10 20:00:00");
        let time_end_t = time_end.getTime();
        // console.log(time_end_t)
        //获取当前日期
        let current = new Date();
        let current_time_t = current.getTime();
        //汇算比例
        let time_distance = time_end_t - current_time_t;//得到毫秒数
        let hours = parseInt(time_distance/1000/3600);//得到截至小时
        let mins = parseInt(time_distance%(1000*3600)/1000/60);//得到截至分钟
        let seconds = parseInt(time_distance%(1000*3600)%60000/1000);//得到剩余秒数
        $(".gethour").html(hours);
        $(".getmin").html(mins);
        $(".getsecond").html(seconds);
    },1000);
})