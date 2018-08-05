
$(function(){
    //验证方法
    function validate($dom){
        var v=$dom.val();
        var id=$dom.attr("id");
        var flag=true;
        switch (id){
            case "email":
                $("#email_prompt").html("");
                var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
                if(v==""){
                    $("#email_prompt").removeClass().addClass("register_prompt_error").html("电子邮件是必填项，请输入您的Email地址");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag= false;
                }else if(reg.test(v)==false){
                    $("#email_prompt").removeClass().addClass("register_prompt_error").html("电子邮件格式不正确，请重新输入");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag= false;
                }else{
                    $("#email_prompt").removeClass().addClass("register_prompt_ok");
                    $dom.removeClass().addClass("register_input");
                }
                break;
            case "nickName":
                $("#nickName_prompt").html("");
                var reg=/^[a-zA-Z0-9]{4,20}$/;
                if(v==""){
                    $("#nickName_prompt").removeClass().addClass("register_prompt_error").html("昵称为必填项，请输入您的昵称");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag= false;
                }else if(reg.test(v)==false){
                    $("#nickName_prompt").removeClass().addClass("register_prompt_error").html("昵称格式错误，请用大小写英文字母、数字，长度4-20个字符");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag= false;
                }else{
                    $("#nickName_prompt").removeClass().addClass("register_prompt_ok");
                    $dom.removeClass().addClass("register_input");
                }
                break;
            case "pwd":
                $("#pwd_prompt").html("");
                var reg=/^[a-zA-Z0-9]{6,20}$/;
                if(v==""){
                    $("#pwd_prompt").removeClass().addClass("register_prompt_error").html("密码为必填项，请设置您的密码");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag=false;
                }else if(reg.test(v)==false){
                    $("#pwd_prompt").removeClass().addClass("register_prompt_error").html("密码格式错误，请用大小写英文字母、数字，长度6-20个字符");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag=false;
                }else{
                    $("#pwd_prompt").removeClass().addClass("register_prompt_ok");
                    $dom.removeClass().addClass("register_input");
                }
                break;
            case "repwd":
                $("#repwd_prompt").html("");
                if(v==""){
                    $("#repwd_prompt").removeClass().addClass("register_prompt_error").html("请再次输入您的密码");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag=false;
                }else if($("#pwd").val()!=v){
                    $("#repwd_prompt").removeClass().addClass("register_prompt_error").html("两次输入密码不一致，请重新输入");
                    $dom.removeClass().addClass("register_input register_input_Blur");
                    flag=false;
                }else{
                    $("#repwd_prompt").removeClass().addClass("register_prompt_ok");
                    $dom.removeClass().addClass("register_input");
                }
                break;
            default :
                break;
        }
        return flag;
    }
    //验证邮箱
    $("#email").focus(function(){
        $(this).removeClass().addClass("register_input register_input_Focus");
        $("#email_prompt").removeClass().addClass("register_prompt").html("此邮箱将是您登录当当网的账号，并将用来接收验证邮件");
    }).blur(function(){
        validate($(this));
    });
    //验证昵称
    $("#nickName").focus(function(){
        $(this).removeClass().addClass("register_input register_input_Focus");
        $("#nickName_prompt").removeClass().addClass("register_prompt").html("昵称可由大小写英文字母、数字组成，长度为4-20个字符");
    }).blur(function(){
        validate($(this));
    });
    //验证密码
    $("#pwd").focus(function(){
        $(this).removeClass().addClass("register_input register_input_Focus");
        $("#pwd_prompt").removeClass().addClass("register_prompt").html("密码可由大小写英文字母、数字组成，长度6－20个字符");
    }).blur(function(){
        validate($(this));
    });
    //验证重复密码
    $("#repwd").focus(function(){
        $(this).removeClass().addClass("register_input register_input_Focus");
    }).blur(function(){
        validate($(this));
    });
    //提交表单
    $("#myform").submit(function(){
        var flag=true;
        $(this).find("input").each(function(i,ele){
            if(!validate($(ele))){
                flag=false;
            }
        });
        return flag;
    });
    //提交按钮样式变化
    $("#registerBtn").mouseover(function(){
        $(this).attr("src","images/register_btn_over.gif");
    }).mouseout(function(){
        $(this).attr("src","images/register_btn_out.gif");
    });
    //省市级联
    var cityList = new Array();
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
    cityList['其他'] = ['其他'];
    $("#province").append(function(){
        var html="";
        for (var i in cityList){
            html+="<option value="+i+">"+i+"</option>";
        }
        return $(html);
    });
    $("#province").change(function(){
        var v= $(this).val();
        var html="";
        if(v=="请选择省/城市"){
            html="<option>请选择城市/地区</option>";
            $("#city").html(html);
            return;
        }
        var citys=cityList[v];
        $.each(citys,function(i,n){
            html+="<option value="+n+">"+n+"</option>";
        });
        $("#city").html(html);
    });
});