
$(function($){
//    onmouseover="myddang_show('dd_menu_top_down')" onmouseout="myddang_hidden('dd_menu_top_down')"
    //下拉菜单
    $("#menu").mouseenter(function(){
        $("#dd_menu_top_down").slideDown(1000);
    }).mouseleave(function(){
        $("#dd_menu_top_down").slideUp(1000);
    });
});