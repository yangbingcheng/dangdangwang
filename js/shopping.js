
$(function($){
    //根据您挑选的商品，当当为您推荐部分的显示和隐藏
    $("#shopping_commend_arrow").click(function(){
        if($("#shopping_commend_sort").css("display")=="none"){
            $(this).attr("src","images/shopping_arrow_up.gif");
        }else{
            $(this).attr("src","images/shopping_arrow_down.gif");
        }
        $("#shopping_commend_sort").toggle();
    });
    //商品隔行变色
    $("#myTableProduct").find("tr:odd").css("backgroundColor","#ffebcd");
    //商品变色
    $("#myTableProduct").find("tr").mouseover(function(){
        $(this).css("backgroundColor","#fff");
    }).mouseout(function(){
        if($("#myTableProduct").find("tr").index($(this))%2==1) {//判断是否奇数行
            $(this).css("backgroundColor","#ffebcd");
        }else{
            $(this).css("backgroundColor","#fefbf2");
        }
    });
    //计算总价
    function totalPrice(){
        var percents= 0,prePrices= 0,prices=0;//积分，原价，现价
        $("#myTableProduct").find("tr").each(function(i,ele){
            var num=$(ele).find(".shopping_product_list_5").find("input").val();//数量
            percents+=parseInt($(ele).find(".shopping_product_list_2").text())*num;
            //解决下js中浮点数的bug问题，因此建议浮点数的运算不要放在前台，这里是指粗略的解决了一下
            var price=parseInt($(ele).find(".shopping_product_list_4").find("label").text().replace(".",""))*num;
            prices+=price;
            var prePrice=parseInt($(ele).find(".shopping_product_list_3").find("label").text().replace(".",""))*num;
            prePrices+=prePrice;
        });
        $("#product_integral").text(percents);
        $("#product_total").text(prices/100);
        $("#product_save").text((prePrices-prices)/100);
        return prices/100;
    }
    totalPrice();
    //删除商品
    $("#myTableProduct").find(".shopping_product_list_6").children("a").click(function(){
        if(confirm("您确定要删除商品么？")){
            $(this).parent().parent().remove();
            totalPrice();
        }
    });
    //修改数量
    $("#myTableProduct").find(".shopping_product_list_5").children("input").change(function(){
        var value=$(this).val();
        if((value == "")||!(/^[0-9]*[1-9][0-9]*$/.test(value))){
            alert("数量不能为空，且只能为正整数");
            $(this).val(1);
        }
        var t =totalPrice();
        alert("修改成功！，您的商品总金额是"+t+"元");
    });
    //清空购物车
    $("#removeAllProduct").click(function(){
        //注意清除的先后顺序
        $("#myTableProduct").next().remove();
        $("#myTableProduct").remove();
        $(".shopping_list_border").append("<div class='empty_product'><div>您还没有挑选商品，<a href='index.html'>去挑选看看>></a></div></div>");

    });
});