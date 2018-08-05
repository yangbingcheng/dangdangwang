
$(function($){
    //打开一个广告窗口
    window.open('open.html','','top=0,left=200,width=500,height=327,scrollbars=0,resizable=0');
    //随滚动条滚动的可关闭广告窗口
    $(window).scroll(function(){
        var st = $(this).scrollTop()+50;
        $("#right").css("top",st);
    });
    $("#right").find("a").click(function(){
        $("#right").hide();
    });
    //轮换图片
    function changeImg(){
        var index=0;
        var stop=false;
        var $li=$("#content").find("#scroll_img").children("li");
        var $page = $("#content").find("#scroll_number").children("li");
        $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        $page.mouseover(function(){
            stop=true;
            index=$page.index($(this));
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $(this).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        }).mouseout(function(){
            stop=false;
        });
        setInterval(function(){
            if(stop) return;
            index++;
            if(index>=$li.length){
                index=0;
            }
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        },3000);
    }
    changeImg();
    //Tab切换
    $("#bookTab").children(".book_new").find("[id]").mouseover(function(){
        var id = "#book_"+$(this).attr("id");
        $("#bookTab").children(".book_class").find("[id]").hide();
        $(this).addClass("book_type_out").siblings().removeClass("book_type_out");
        $(id).show();
    });
    //内容鼠标经过效果
    $("#bookTab").children(".book_class").find("dd").mouseover(function(){
        $(this).css("border","2px solid #F96");
    }).mouseout(function(){
        $(this).css("border","2px solid #fff");
    });
    //书讯快递循环垂直向上滚动
    function movedome(){
        var marginTop=0;
        var stop=false;
        var interval=setInterval(function(){
            if(stop) return;
            $("#express").children("li").first().animate({"margin-top":marginTop--},0,function(){
                var $first=$(this);
                if(!$first.is(":animated")){
                    if((-marginTop)>$first.height()){
                        $first.css({"margin-top":0}).appendTo($("#express"));
                        marginTop=0;
                    }
                }
            });
        },50);
        $("#express").mouseover(function(){
            stop=true;
        }).mouseout(function(){
            stop=false;
        });
    }
    movedome();
});
