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
            "orderInfo.receiveAddress": {
                required: true,
                rangelength: [3, 100],
                emptyCheck: "",
                receiveAreaCheck: "",
                areaExceedCheck: "02"
            },
            "orderInfo.sendAddress": {
                required: true,
                rangelength: [3, 100],
                emptyCheck: "",
                sendAreaCheck: "",
                areaExceedCheck: "01"
            },
            "orderInfo.receiveName": {
                required: true,
                rangelength: [2, 20],
                emptyCheck: ""
            },
            "orderInfo.sendName": {
                required: true,
                rangelength: [2, 20],
                emptyCheck: ""
            },
            "orderInfo.receiveTel": {
                receiveTelPhoneCheck: "",
                telCheck: ""
            },
            "orderInfo.receivePhone": {
                receiveTelPhoneCheck: "",
                phoneCheck: ""
            },
            sendTel: {
                telCheck: ""
            },
            "orderInfo.sendTel": {
                // required: true,
                sendTelCheck: ""
            },
            "orderInfo.sendPhone": {
                required: true,
                phoneCheck: ""
            },
            // vercode: {
            //     required: true,
            //     vercodeCheck: ""
            // },
            "orderInfo.receiveArea": {
                receiveAreaCheck: "",
                transportPriceCheck: ""
            },
            "orderInfo.sendArea": {
                sendAreaCheck: "",
                transportPriceCheck: ""
            },
            sendSms: {
                sendSmsCheck: ""
            },
            "orderInfo.goodsWeight": {
                goodsWeightCheck: "",
                transportPriceCheck: ""
            },
            "orderInfo.insuranceMoney": {
                insuranceMoneyCheck: "",
                transportPriceCheck: ""
            }
        },
        messages: {
            "orderInfo.receiveAddress": {
                required: "请输入详细地址！",
                rangelength: "详细地址应该为3-100位之间！"
            },
            "orderInfo.sendAddress": {
                required: "请输入详细地址！",
                rangelength: "详细地址应该为3-100位之间！"
            },
            "orderInfo.receiveName": {
                required: "请输入姓名！",
                rangelength: "姓名应该为2-20位之间!"
            },
            "orderInfo.sendName": {
                required: "请输入姓名！",
                rangelength: "姓名应该为2-20位之间!"
            },
            "orderInfo.sendPhone": {
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


// 提交订单
function submitFunc(toUrl) {

    if ($("#orderForm").validate().form()) {	// 表单验证成功
        $.ajax({
            type:"post",
            url:"/isLogin.action",
            async:false,
            error: function(){
                if(sc && !sc.queryStatus()) {
                    swal("","请进行安全验证。","info");
                    return false;
                }
            },
            success:function(data){
                var json = eval('(' + data + ')');
                if(json.code != 1000){
                    if(sc && !sc.queryStatus()) {
                        swal("","请进行安全验证。","info");
                        return false;
                    }
                }

            }
        });

        /*
         * 获取地址数据
         */
        $("#receiveProvinceCode").val(getAreaCode("receiveArea", "province"));
        $("#receiveCityCode").val(getAreaCode("receiveArea", "city"));
        $("#receiveRegionCode").val(getAreaCode("receiveArea", "district"));
        $("#sendProvinceCode").val(getAreaCode("sendArea", "province"));
        $("#sendCityCode").val(getAreaCode("sendArea", "city"));
        $("#sendRegionCode").val(getAreaCode("sendArea", "district"));
        var receiveAreaArr = $("#receiveArea").val().split("/");
        var sendAreaArr = $("#sendArea").val().split("/");
        $("#receiveProvinceName").val(receiveAreaArr[0]);
        $("#receiveCityName").val(receiveAreaArr[1]);
        $("#receiveRegionName").val(receiveAreaArr[2]);
        $("#sendProvinceName").val(sendAreaArr[0]);
        $("#sendCityName").val(sendAreaArr[1]);
        $("#sendRegionName").val(sendAreaArr[2]);

        /*
         * 特殊备注校验
         */
        var specialRmarksArr = new Array();
        // $.each($(".specialWay .activeRemarks"), function(i, n) {
        //     specialRmarksArr.push($(n).text());
        // });
        $("#special-remarks .activeRemarks").each(function(i,n){
            specialRmarksArr.push($(n).text());
        });
        if (specialRmarksArr.length > 0) {
            $("#specialRemarks").val(specialRmarksArr.join(","));
        }

        // 保存寄件地址
        if ($("#saveAddress01").is(":checked")) {
            saveAddressFunc("01", "send");
        }
        // 保存收件地址
        if ($("#saveAddress02").is(":checked")) {
            saveAddressFunc("02", "receive");
        }
        var args
        if(sc) {
            args = $.param({
                // token
                "token" : sc.queryToken()
            }) + "&" + $("#orderForm").serialize();
        }else{
            args = $("#orderForm").serialize();
        }

        // 提交订单
        $.ajax({
            type : "post",
            url : "/customerService!submitOrder.action",
            data : args,
            dataType: "JSON",
            success : function(data) {
                if (data != null) {
                    if (data.returnStatus == "01") {
                        swal({
                                title: "下单成功",
                                type: "info"
                            },
                            function() {
                                window.location.href = toUrl;
                            });
                    } else{
                        init()
                        swal("", data.returnMsg, "warning");
                    }
                } else {
                    init()
                    swal("", "下单失败，请稍后再试！", "warning");
                }
            },
            error:function(data){
                init()
                swal("", "下单失败，请稍后再试！", "error");
            }
        });
    } else {
        $($(".error")[0]).prev().blur();
        $($(".error")[0]).prev().focus();
        window.setTimeout(function() {
            $(".city-picker-dropdown").hide();  // 防止地址控件弹出
        }, 1);
    }


}

function init(){
    var env = getEnv();
    $.ajax({
        type : "post",
        url : "/getIARToken.action",
        success : function(data) {
            var obj = eval("(" + data + ")");
            if (obj.code == "1000") {
                 sc = SnCaptcha.init({
                    id: 'captcha', // 用于当一个页面上有多个验证码实例时进行区分
                     // env : 'sit', // 环境sit，xgpre，prd
                     env : env, // 环境sit，xgpre，prd
                    type : 'inline', // inline:插入按钮, 点击按钮弹出验证码。popup：直接弹出验证码
                    target : 'captcha', // 验证码按钮插入的 div 的 id，必填
                    ticket : obj.data, // 通过注册接口获取的 ticket
                    width : '250px',  // 按钮或者滑块宽度（必填)
                    height : '40px',  // 滑块或按钮高度(必填，且必须用具体数值，禁止使用百分比)
                    callback : function(token) { // 回调函数
                        console.log(token);
                    }
                });

            } else {
                swal("",obj.msg, "error");
            }
        },
        error:function(data){;
            console.log(data.returnMsg);

        }
    });
}
// 保存地址
function saveAddressFunc(addressType, addressTypeDesc) {
    var name = $("#" + addressTypeDesc + "Name").val();
    var phone = $("#" + addressTypeDesc + "Phone").val();
    var tel = $("#" + addressTypeDesc + "Tel").val();
    var provinceCode = $("#" + addressTypeDesc + "ProvinceCode").val();
    var provinceName = $("#" + addressTypeDesc + "ProvinceName").val();
    var cityCode = $("#" + addressTypeDesc + "CityCode").val();
    var cityName = $("#" + addressTypeDesc + "CityName").val();
    var regionCode = $("#" + addressTypeDesc + "RegionCode").val();
    var regionName = $("#" + addressTypeDesc + "RegionName").val();
    var address = $("#" + addressTypeDesc + "Address").val();
    $.ajax({
        type : "post",
        url : "/myAddress!addAddressBook.action",
        data : {"addressBook.name": name, "addressBook.phone":  phone, "addressBook.tel":  tel, "addressBook.provinceCode":  provinceCode, "addressBook.provinceName":  provinceName, "addressBook.cityCode":  cityCode, "addressBook.cityName":  cityName, "addressBook.regionCode":  regionCode, "addressBook.regionName":  regionName, "addressBook.address": address, "addressBook.addressType":  addressType},
        dataType: "JSON",
        success : function(data) {
            if (data != null) {
                if (data.returnStatus == "01") {

                } else if (data.returnStatus == "02") {
                    swal("", data.returnMsg, "warning");
                }
            } else {
                swal("", "保存地址操作异常！", "warning");
            }
        },
        error:function(data){
            swal("", "保存地址操作失败！", "error");
        }
    });
}

function validateAddressSplit(addr){
    var result = true;
    var strs = new Array(); //定义一数组
    strs = addr.split("/"); //字符分割
    if(strs.length < 3){
        result = false;
    }
    for (var i = 0; i<strs.length; i++ ){
        if(strs[i] == null || strs[i].trim() == '' || strs[i] ==undefined){
            result = false;
        }
    }
    return result;
}

var codeNum = 60;
var timerid = null;


// 发送短信验证码
function sendSmsFunc(obj) {
    var $num = $(obj).find('i')
    var phoneNum = $("#sendPhone").val();
    var phonePattern = /^\d{11}$/g;
    if (!phonePattern.test(phoneNum)) {
        swal("", "请输入正确的寄件人手机号！", "error");
        return;
    }
    if(!timerid){
        $.ajax({
            type: 'post',
            url: "/customerService!sendSms.action",
            data:{ "phoneNum": phoneNum,"type": "3"},
            dataType: 'json',
            success: function(data) {
                if (data != null) {
                    //debugger;
                    // var dataObj = eval("(" + data + ")");
                    console.log(data.returnStatus);
                    if(data.returnStatus != "02") {
                        $num.show();
                        $('.sendCodeText').hide();
                        timerid = setInterval(function () {
                            codeNum--
                            $num.html("已发送(" + codeNum + ")s")
                            if (codeNum == 0) {
                                clearInterval(timerid);
                                $num.hide();
                                $('.sendCodeText').show();
                                $num.html("发送验证码");
                                timerid = null
                                codeNum = 60
                            }
                        }, 1000)
                    }

                    swal("", data.returnMsg, "info");
                }
            },
            error: function(){
                swal("", "请求失败！", "error");
            }
        });
    }
}

// 超区校验 02-收件 01-寄件
function areaExceedCheckFunc(value, element, params) {
    var area, address, type;
    var $address;
    if (params == "02") {
        area = $("#receiveArea").val();
        $address = $("#receiveAddress");
        type = "WE";
    } else if (params == "01") {
        area = $("#sendArea").val();
        $address = $("#sendAddress");
        type = "Z1";
    }
    address = $address.val();
    var areaArr = area.split("/");
    var province = areaArr[0];
    var city = areaArr[1];
    var region = areaArr[2];

    var checkflag = true;
    $.ajax({
        type: 'post',
        url: "/customerService!exceedAreaCheck.action",
        data:{ "province": province, "city": city, "region": region, "address": address, "type": type},
        dataType: 'json',
        success: function(data) {
            if (data != null) {
                if (data.code == "1000") {
                    checkflag = true;
//							alert(data.returnMsg);
                } else {
                    checkflag = false;
                    swal("", data.msg, "warning");
                    $address.val("");   // 校验不通过，清空详细地址
                }
            }
        },
        error: function(){
            swal("", "请求失败！", "error");
        }
    });

    return checkflag;
}

// 运费预估
function transportMoneyFunc() {
    var goodsWeight = $("#goodsWeight").val();
    var insuranceMoney = $("#insuranceMoney").val();    // 保值
    var sendCityCode = getAreaCode("sendArea", "city");
    var sendRegionCode = getAreaCode("sendArea", "district");
    var receiveCityCode = getAreaCode("receiveArea", "city");
    var receiveRegionCode = getAreaCode("receiveArea", "district");
    $.ajax({
        type: 'post',
        url: "/customerService!transportMoneyEstimate.action",
        data:{ "sendCityCode": sendCityCode, "sendRegionCode": sendRegionCode, "receiveCityCode": receiveCityCode, "receiveRegionCode": receiveRegionCode, "goodsWeight": goodsWeight, "insuranceMoney": insuranceMoney },
        dataType: 'json',
        success: function(data) {
            if (data != null) {
                if (data.returnStatus == "01") {	// 成功
                    var x = document.getElementById("transportPriceTable").insertRow();
                    var td0 = x.insertCell(0);
                    var td1 = x.insertCell(1);
                    var td2 = x.insertCell(2);
                    var td3 = x.insertCell(3);
                    var td4 = x.insertCell(4);
                    var td5 = x.insertCell(5);
                    td0.innerHTML = "天天标快";
                    td1.innerHTML = data.count;
                    td2.innerHTML = data.firstPrice;
                    td3.innerHTML = data.price;
                    td4.innerHTML = data.afterRate2;
                    td5.innerHTML = data.afterRate;

                    $("#transportPriceDiv").show();
                    $('.mask').show();
                } else if (data.returnStatus == "02") {	// 失败
                    swal("", data.returnMsg, "warning");
                }
            }
        },
        error: function(){
            swal("", "请求失败！", "error");
        }
    });
}

// 获取地区编码
function getAreaCode(eId, eName) {
    return $("#" + eId).nextAll().find("#ctityTextHtml").find(".select-item[data-count='" + eName + "']").attr("data-code");
}
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
