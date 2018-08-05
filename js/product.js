
$(function($){
    //图书分类动态展示
    function productList(){
        var list=new Array(
            "中国当代小说（13880）","中国近现代小...（640）","中国古典小说（1547）",
            "四大名著（696）","港澳台小说（838）","外国小说（5119）",
            "侦探/悬疑/推...（2519）","惊悚/恐怖（798）","魔幻（369）","科幻 （513）",
            "武侠（574）","军事（726）","情感 （6700）",
            "社会（4855）","都市（949）","乡土（99）","职场（176）",
            "财经（292）","官场（438）","历史（1329）","影视小说（501）",
            "作品集（2019）","世界名著（3273）"
        );
        var html=[];
        $.each(list, function(i, n){
            html.push("<li> ·<a href='#' class='blue'>"+n+"</a></li>");
        });
        $("#product_catList_class").html(html.join(""));
    }
    productList();
    //图书动态展示
    function bookList(){
        var catalog=new Array();
        catalog[0] = ['product_list_01.jpg','私募（首部披露资本博弈秘密的金融小说）',4,'郭现杰','花山文艺出版社', '2009年08月',
            '数年前，在一次股市的多、空之战中，以赵云狄、林康为首的私募基金—金鼎投资，和以王雨龙为首的私募基金，达成锁仓协议分食利益。殊料，以王雨龙为首的私募基金—鑫利投资背信弃义，导致金鼎投资惨败。以至...',
            '13.10','59折','￥18.90','￥32.00'];
        catalog[1] = ['product_list_02.jpg','圈子圈套.1.战局篇',4,'王强','清华大学出版社', '2006年01月',
            '虽然没有硝烟，却比战场更血腥；虽然并未战死，却比死亡更痛苦。 洪钧从一个底层的销售人员，成为一家著名的跨国公司的中国区代理首席代表，在即将被扶正，事业情感都志得意满的时候，掉入俞威设计的圈套，...',
            '￥8.90','68折','￥19.10','￥28.00'];
        var html="";
        $.each(catalog,function(i,n){
            html+="<div class='product_storyList_content_left'><img src=images/"+n[0]+" alt='图书列表'></div>";
            html+="<div class='product_storyList_content_right'><ul>";
            html+="<li class='product_storyList_content_dash'><a href='#' class='blue_14'>"+n[1]+"</a></li>";
            html+="<li>顾客评分：";
            for(var k=0;k<5;k++){
                if(k<n[2]){
                    html+= "<img src='images/star_red.gif' alt='star'>";
                }
                else{
                    html+= "<img src='images/star_gray.gif' alt='star'>";
                }
            }
            html+="</li>";
            html+="<li>作　者：<a href='#' class='blue_14'>"+n[3]+"</a> 著</li>";
            html+="<li>出版社：<a href='#' class='blue_14'>"+n[4]+"</a></li>";
            html+="<li>出版时间："+n[5]+"</li>";
            html+="<li>"+n[6]+"</li>";
            html+="<li> <dl class='product_content_dd'>";
            html+="<dd><img src='images/product_buy_02.gif' alt='shopping'></dd>";
            html+="<dd><img src='images/product_buy_01.gif' alt='shopping'></dd>";
            html+="<dd>节省："+n[7]+"</dd>";
            html+="<dd>折扣：<span>"+n[8]+"</span></dd>";
            html+="<dd class='footer_dull_red'><span>"+n[9]+"</span></dd>";
            html+="<dd class='product_content_delete'><span>"+n[10]+"</span></dd>";
            html+="</dl></li></ul></div>";
            html+="<div class='product_storyList_content_bottom'></div>";
        });
        $("#storyBooksssss").html(html);
    }
    bookList();
    //获取列表形式List,默认是列表形式，因此先取得列表形式的内容
    var arrayBookList=$("#product_storyList_content").html();
    //获取大图形式List
    function getBigBookList(){
        var $initContent=$("#product_storyList_content");
        var $bookImg = $initContent.find(".product_storyList_content_left");
        var contents="";
        $initContent.find(".product_storyList_content_right").find("ul").each(function(i,ele){
            var div="";
            var content=[div,"<div class='big_img_list'><ul><li class='bookImg'>"+$($bookImg[i]).html()+"</li>"];
            var $li=$(ele).children("li");
            var $price=$($li[6]).find("span");
            content.push("<li><dl><dd class='footer_dull_red'>"
                +$($price[1]).text()+"</dd><dd class='product_content_delete'>"
                +$($price[2]).text()+"</dd><dd class='footer_dull_red'>"
                +$($price[0]).text()+"</dd></dl></li>");//价格
            content.push("<li class='detail'>"+$($li[5]).html()+"</li>");//简介
            content.push("<li class='detail'>"+$($li[2]).html()+"</li>");//作　者
            content.push("<li class='detail'>"+$($li[1]).html()+"</li>");//顾客评分
            content.push("<li class='detail'>"+$($li[3]).html()+"</li>");//出版社
            content.push("<li class='detail'>"+$($li[4]).html()+"</li></ul></div>");//出版时间
            contents+=content.join("");
        });
        return contents;
    }
    var bigBookList=getBigBookList();//获取大图形式List
    //大图列表切换
    $("#product_array").children("a").click(function(){
        if($(this).is("[class='click']")) return;//如果已经点击那么返回，用class来判断
        $(this).siblings().removeClass("click");
        $(this).addClass("click");
        //用元素的name来判断
        if($(this).attr("name")=="array"){//列表
            $("#product_storyList_content").empty().html(arrayBookList);
        }else{//大图
            $("#product_storyList_content").empty().html(bigBookList);
            $("#product_storyList_content").children(".big_img_list").find("ul").mouseover(function(){
                $(this).addClass("over");
                $(this).parent().addClass("over");
            }).mouseout(function(){
                $(this).removeClass("over");
                    $(this).parent().removeClass("over");
            });
        }
    });
});