/**
 * Created by 17073876 on 2018/6/18.
 */

// IE trim()方法支持问题
String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"");}

var auto1;
var auto2;
var sendAreaOld = "";
var receiveAreaOld = "";
var sc
$(function() {
    $("#receiveArea").citypicker({
        onChange: function () {//选择后触发的事件
            transportPriceCheckFunc();
            var receiveArea = $("#receiveArea").val();
            if(receiveAreaOld == receiveArea || receiveArea.split("/").length < 2){
                return;
            }
            receiveAreaOld = receiveArea;
            if(receiveArea != "" && receiveArea != null && receiveArea != undefined){
                auto1 = new AMap.Autocomplete({
                    city:receiveArea.split("/")[1],
                    input: "receiveAddress"
                });
                AMap.event.addListener(auto1, "select", select);//注册监听，当选中某条记录时会触发
                function select(data) {
                    if(data.poi.name.length>=3 && data.poi.name.length<=100){
                        $("#receiveAddress-error").remove();
                    }
                }
            }
        }});
    $("#sendArea").citypicker({
        onChange: function () {//选择后触发的事件
            transportPriceCheckFunc();
            var sendArea = $("#sendArea").val();
            if(sendAreaOld == sendArea || sendArea.split("/").length < 2){
                return;
            }
            sendAreaOld = sendArea;
            if(sendArea != "" && sendArea != null && sendArea != undefined){
                auto2 = new AMap.Autocomplete({
                    city:sendArea.split("/")[1],
                    input: "sendAddress"
                });
                AMap.event.addListener(auto2, "select", select);//注册监听，当选中某条记录时会触发
                function select(data) {
                    if(data.poi.name.length>=3 && data.poi.name.length<=100){
                        $("#sendAddress-error").remove();
                    }
                }
            }
        }
    });
    $("#receiveArea2").citypicker({
        onChange: function () {//选择后触发的事件
            transportPriceCheckFunc()
        }
    });
    $("#sendArea2").citypicker({
        onChange: function () {//选择后触发的事件
            transportPriceCheckFunc()
        }
    });
    $(".city-picker-dropdown").css("display", "none");
    /*$("#submitOrder").click(function() {
     // 获取输入框，并在点击按钮后清空输入框中内容
     $("#receiveArea").citypicker("reset");
     });*/

    $("#closeBtn").click(function() {
        var tableObj = document.getElementById("transportPriceTable");
        var rowLen = tableObj.rows.length;
        for (var i = 1; i < rowLen; i++) {
            tableObj.deleteRow(i);
        }
        $("#transportPriceDiv").hide();
        $('.mask').hide();


    });
});

$.validator.setDefaults({
    submitHandler: function() {

    },
    debug: true,
    errorElement: 'i',
    errorClass: "errorClass",
    errorPlacement: function(error, element) {
        if ($(element).parent().hasClass('datetimepicker')) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$().ready(function() {
    init()
    $('#receiveAddress').on('input propertychange', function() {
        var patt1 = /[^(·\-\(\)a-zA-Z0-9\u4e00-\u9fa5)]/ig;
        $('#receiveAddress').val($('#receiveAddress').val().replace(patt1,''));
    });
    $('#sendAddress').on('input propertychange', function() {
        var patt1 = /[^(·\-\(\)a-zA-Z0-9\u4e00-\u9fa5)]/ig;
        $('#sendAddress').val($('#sendAddress').val().replace(patt1,''));
    });
    $('#receiveName').on('input propertychange', function() {
        var patt1 = /[^a-zA-Z\u4e00-\u9fa5]/ig;
        $('#receiveName').val($('#receiveName').val().replace(patt1,''));
    });
    $('#sendName').on('input propertychange', function() {
        var patt1 = /[^a-zA-Z\u4e00-\u9fa5]/ig;
        $('#sendName').val($('#sendName').val().replace(patt1,''));
    });
    $("#orderForm").validate({
        onfocusout: function(element) {	// 失去焦点时校验，“onfocusout:true”报错
            $(element).valid();
        },
        onkeyup: false,
        //focusCleanup: true,   // 第一个校验失败的元素获取焦点，并清楚错误信息
        focusInvalid: true, // 第一个校验失败的元素获取焦点
        rules: {
            "receiveAddress": {
                required: true,
                rangelength: [3, 100],
                emptyCheck: "",
                receiveAreaCheck: "",
                areaExceedCheck: "02"
            },
            "sendAddress": {
                required: true,
                rangelength: [3, 100],
                emptyCheck: "",
                sendAreaCheck: "",
                areaExceedCheck: "01"
            },
            "receiveName": {
                required: true,
                rangelength: [2, 20],
                emptyCheck: ""
            },
            "sendName": {
                required: true,
                rangelength: [2, 20],
                emptyCheck: ""
            },
            "receiveTel": {
                receiveTelPhoneCheck: "",
                telCheck: ""
            },
            "receivePhone": {
                receiveTelPhoneCheck: "",
                phoneCheck: ""
            },
            sendTel: {
                telCheck: ""
            },
            "sendTel": {
                // required: true,
                sendTelCheck: ""
            },
            "sendPhone": {
                required: true,
                phoneCheck: ""
            },
            // vercode: {
            //     required: true,
            //     vercodeCheck: ""
            // },
            "receiveArea": {
                receiveAreaCheck: "",
                transportPriceCheck: ""
            },
            "sendArea": {
                sendAreaCheck: "",
                transportPriceCheck: ""
            },
            sendSms: {
                sendSmsCheck: ""
            },
            "goodsWeight": {
                goodsWeightCheck: "",
                transportPriceCheck: ""
            },
            "insuranceMoney": {
                insuranceMoneyCheck: "",
                transportPriceCheck: ""
            }
        },
        messages: {
            "receiveAddress": {
                required: "请输入详细地址！",
                rangelength: "详细地址应该为3-100位之间！"
            },
            "sendAddress": {
                required: "请输入详细地址！",
                rangelength: "详细地址应该为3-100位之间！"
            },
            "receiveName": {
                required: "请输入姓名！",
                rangelength: "姓名应该为2-20位之间!"
            },
            "sendName": {
                required: "请输入姓名！",
                rangelength: "姓名应该为2-20位之间!"
            },
            "sendPhone": {
                required: "请输入寄件人手机号！"
            },
            vercode: {
                required: "请输入验证码！"
            },
            "orderInfo.goodsWeight": {
                required: "请输入物品重量！"
            }
        }
    });

    /*
     * 自定义校验方法
     */
    $.validator.addMethod("telCheck", function(value, element, params){
        // var checkTel = /^\d{0,20}$/g;
        var checkTel = /\d{3,4}\-\d{7,8}$/;
        return this.optional(element)||(checkTel.test(value));
    }, "请输入正确的座机电话！");

    $.validator.addMethod("phoneCheck", function(value, element, params){
        var checkTel = /^\d{11}$/g;
        return this.optional(element)||(checkTel.test(value));
    }, "请输入正确的手机号！");

    $.validator.addMethod("sendTelCheck", function(value, element, params){
        var checkFlag = true;
        var checkTel = /\d{3,4}\-\d{7,8}$/;
        if ($("#sendTel").val() != "") {
            if(!checkTel.test($("#sendTel").val())){
                checkFlag =  false;
            }
        }
        return checkFlag;
    }, "请输入正确的座机电话！");
    $.validator.addMethod("receiveTelPhoneCheck", function(value, element, params){
        var checkFlag = true;
        if ($("#receiveTel").val() == ""
            && $("#receivePhone").val() == "") {
            checkFlag = false;
        }
        return checkFlag;
    }, "收件人手机和电话必填一项！");

    $.validator.addMethod("receiveAreaCheck", function(value, element, params){
        return validateAddressSplit($("#receiveArea").val());
    }, "请选择省市区！");

    $.validator.addMethod("sendAreaCheck", function(value, element, params){
        return validateAddressSplit($("#sendArea").val());
    }, "请选择省市区！");

    $.validator.addMethod("emptyCheck", function(value, element, params){
        var checkFlag = true;
        if (value.trim() == "") {
            checkFlag = false;
        }
        return checkFlag;
    }, "不能为空！");

    $.validator.addMethod("sendSmsCheck", function(value, element, params){
        var checkFlag = true;
        if (phoneNum.trim() == "") {
            checkFlag = false;
        }
        return checkFlag;
    }, "请输入寄件人手机号！");

    // $.validator.addMethod("vercodeCheck", function(value, element, params){
    //     var vercodPattern = /^[0-9a-zA-Z]{4,6}$/g;
    //     return vercodPattern.test(value);
    // }, "验证码格式有误！");

    // 超区校验
    $.validator.addMethod("areaExceedCheck", areaExceedCheckFunc, "该区域暂未开通下单服务！");

    $.validator.addMethod("goodsWeightCheck", function(value, element, params){
        transportPriceUnenableClick();
        // var weightPattern = /^\d{1,2}.?\d?$/g;
        var weightPattern = /^\d.?\d?$/g;
        return weightPattern.test(value) && (value >= 0.1) && (value <= 50);
    }, "只可填写0.1-50之间的数字，允许1位小数！");

    $.validator.addMethod("insuranceMoneyCheck", function(value, element, params){
        transportPriceUnenableClick();
        var moneyPattern = /^\d{1,4}$/g;
        return moneyPattern.test(value) && (value >= 1) && (value <= 5000);
    }, "保值为1-5000间整数！");

    // 运费预估按钮校验
    $.validator.addMethod("transportPriceCheck", transportPriceCheckFunc, "");
});

function transportPriceCheckFunc() {
    //debugger;        && /^\d{1,2}.?\d{0,1}$/.test($("#goodsWeight").val())
    //debugger;        && )
    var checkFlag = false;
    transportPriceUnenableClick();
    if (validateAddressSplit($("#sendArea").val())
        && validateAddressSplit($("#receiveArea").val())
        && (/^\d.?\d?$/.test($("#goodsWeight").val()) && $("#goodsWeight").val() >=0.1 && $("#goodsWeight").val() <=50)
    ) {
        if ($("#insuranceCheck").is(":checked")) {
            if (/^\d{1,4}$/.test($("#insuranceMoney").val())
                && $("#insuranceMoney").val() >= "1"
                && $("#insuranceMoney").val() <= "5000") {
                checkFlag = true;
                transportPriceEnableClick();
            }
        } else {
            checkFlag = true;
            transportPriceEnableClick();
        }
    }
    return checkFlag;
}

// 设置运费预估按钮不可点击
function transportPriceUnenableClick() {
    $('.insuredBtn ').css({'background':'#f7f7f7','cursor':'default', 'color':'#B3B3B3'}).removeClass('blueBtn').attr("onclick", "").attr("disabled", "disabled").attr("title", "请输入收/寄件人地区、物品重量！");
}

// 设置运费预估按钮可点击
function transportPriceEnableClick() {
    $('.insuredBtn ').css({'background':'rgb(2, 147, 237)','cursor':'pointer', 'color':'#FFF'}).addClass('blueBtn').attr("onclick", "transportMoneyFunc()").removeAttr("disabled").removeAttr("title");
}





// 保存地址















function searchAmap(aType){
    if(aType == "02"){
        var receiveArea = $("#receiveArea").val();
        if(receiveAreaOld == receiveArea || receiveArea.split("/").length < 2){
            return;
        }
        receiveAreaOld = receiveArea;
        if(receiveArea != "" && receiveArea != null && receiveArea != undefined){
            auto1 = new AMap.Autocomplete({
                city:receiveArea.split("/")[1],
                input: "receiveAddress"
            });
            AMap.event.addListener(auto1, "select", select);//注册监听，当选中某条记录时会触发
            function select(data) {
                if(data.poi.name.length>=3 && data.poi.name.length<=100){
                    $("#receiveAddress-error").remove();
                }
            }
        }
    }
    if(aType == "01"){
        var sendArea = $("#sendArea").val();
        if(sendAreaOld == sendArea || sendArea.split("/").length < 2){
            return;
        }
        sendAreaOld = sendArea;
        if(sendArea != "" && sendArea != null && sendArea != undefined){
            auto2 = new AMap.Autocomplete({
                city:sendArea.split("/")[1],
                input: "sendAddress"
            });
            AMap.event.addListener(auto2, "select", select);//注册监听，当选中某条记录时会触发
            function select(data) {
                if(data.poi.name.length>=3 && data.poi.name.length<=100){
                    $("#sendAddress-error").remove();
                }
            }
        }
    }
}
