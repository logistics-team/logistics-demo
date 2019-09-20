var canCommit = false;

function exploreAlert(title,content,level){
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") {
        alert(content);
    }else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0"){
        alert(content);
    }else{
        sweetAlert(title, content,level);
    }
}
$(document).ready(function(){
    'use strict';

    var imgList = []
    // 打开弹框
    $('#addImageBtn').click(function() {
        // if(imgList.length < 5) {
        //   $('#file').click()
        // }
        if(imgList.length >= 5) {
            return false
        }
    })

    $('#file').change(function(){
        // console.log('---111:' + this.files)
        // console.log('---222:' + $(this).val())
        var file
        if(this.files) {
            file = this.files[0];
        } else {
            file = $(this).val();
        }
        verificationPicFile(file)
    })

    var verificationPicFile = function(file) {
        if(file) {
            var fileSize = file.size;
            var fileMaxSize = 2048;//2M
            var size = fileSize / 1024;
            // console.log('size', size)
            if (size > fileMaxSize) {
                alert("文件大小不能大于2M！");
            }else if (size <= 0) {
                alert("文件大小不能为0M！");
            }else {
                // 上传图片
                uploadImage(file)
            }
        }
    }

    var uploadImage = function(file) {
        $("#workOrderForm").ajaxSubmit({
            url: '../../user/uploadPic',
            type: 'POST',
            success: function (args) {
                var obj = eval('(' + args + ')');
                // console.log(obj);
                if(obj.success === 'true') {
                    showImage(obj.msg)
                }
                else {
                    exploreAlert("", obj.msg, "error");
                }
            }
        })

        // var formData = new FormData();
        // formData.append('file',file);
        // $.ajax({
        //   url: '/customerAction!uploadPic.action',
        //   type: 'POST',
        //   data: formData,
        //   contentType: false,
        //   processData: false,
        //   success: function (args) {
        //     var obj = eval('(' + args + ')');
        //     // console.log(obj);
        //     if(obj.success === 'true') {
        //       showImage(obj.msg)
        //     }
        //     else {
        //         exploreAlert("", obj.msg, "error");
        //     }
        //   }
        // })
    }

    var showImage = function(fileUrl) {
        // var urls = $("#urls").val();
        // if ($("#urls").val()!=''){
        //     urls =  urls+"&"+fileUrl;
        //     $("#urls").val(urls);
        // }else {
        //     $("#urls").val(fileUrl);
        // }

        imgList.push(fileUrl)
        var str = '<div class="image_preview_item"><img name="orderPic" class="orderPic" src=' + fileUrl + '><img class="close_icon" src="/images/ic_close.png">';
        $('.question_upload_img_list').append(str);
        if(imgList.length === 5) {
            $('.question_upload_img_btn').hide()
        }

    };


    $(".question_upload_img_list").on("click", '.image_preview_item .close_icon', function(evt) {
        var target = evt.currentTarget;
        var parentElement = $(target)[0].parentElement
        var index = $(parentElement).index()
        imgList.splice(index, 1);
        $(parentElement).remove();
        if(imgList.length < 5) {
            $('.question_upload_img_btn').show();
        }
    });
    $("#submitOrder").click(function () {
        var img = null;
        for (var i = 0; i < imgList.length; i++) {
            if (img==null){
                img = imgList[i];
            }else {
                img = img  +","+ imgList[i];
            }
        }
        $("#urls").val(img);
        // alert(img)
    })

    var lastItem = $(".complaint_type_btn:nth-child(1)")
    $(".complaint_type_btn").on("click", function(evt) {
        if(lastItem) {
            lastItem.removeClass('focus');
            $("#bizType").val("");
            $("#problemDesc").val("");
        }
        var target = evt.currentTarget;
        $(target).addClass('focus');
        lastItem = $(target);
        // $("#bizType").val(lastItem.attr("value"));
        $("#bizType").val(lastItem.attr("vals"));
        $("#problemDesc").val(lastItem.html());
    });
    // 运单号校验
    $("#billNoInput").blur(function(evt) {
        var target = evt.currentTarget;
        var val = $(target).val();
        // var mailNo = /(?!^[A-Za-z]+$)(^([0-9a-zA-Z]+$))/;
        var mailNo = /(^([0-9]{16})$)/;
        var nextElementSibling = getNextElement($(target)[0])
        // console.log($(target))
        if(val.length <= 0) {
            $(target).addClass('error');
            $(nextElementSibling).text('请输入运单号')
            $(nextElementSibling).show()
            canCommit = false;
        }else if(!mailNo.test(val)) {
            $(target).addClass('error');
            $(nextElementSibling).text('请输入正确的运单号')
            $(nextElementSibling).show()
            canCommit = false;
        } else {
            $(target).removeClass('error');
            $(nextElementSibling).hide()
            canCommit = true;
        }
    })
    // 问题描述
    $("#questionDesc").blur(function(evt) {
        var target = evt.currentTarget;
        var val = $(target).val()
        var nextElementSibling = getNextElement($(target)[0])
        if(val.length <= 0) {
            $(target).addClass('error');
            $(nextElementSibling).text('请输入问题描述')
            $(nextElementSibling).show()
            canCommit = false;
        } else {
            $(target).removeClass('error');
            $(nextElementSibling).hide()
            canCommit = true;
        }
    })
    // 联系人姓名
    $("#contactName").blur(function(evt) {
        verificationName(evt, '请输入联系人姓名');

    })
    // 联系人电话
    $("#contactPhone").blur(function(evt) {
        verificationPhone(evt)
    })
    // 收件人姓名
    $("#recipientName").blur(function(evt) {
        verificationName(evt, '请输入收件人姓名')
    })
    // 收件人电话
    $("#recipientPhone").blur(function(evt) {
        verificationPhone(evt)
    })
    // 收件人地址
    $("#recipientAddr").blur(function(evt) {
        verificationAddr(evt, '请输入收件人地址')
    })
    // 发件人姓名
    $("#senderName").blur(function(evt) {
        if($("#senderName").val() != ""){
            verificationName(evt, '请输入发件人姓名')
        }
    })
    // 发件人电话
    $("#senderPhone").blur(function(evt) {
        if($("#senderPhone").val() != ""){
            verificationPhone(evt)
        }
        else{
            $("#senderPhone").removeClass('error');
            $($("#senderPhone")[0].nextElementSibling).hide();
        }
    })
    // 发件人地址
    $("#senderAddr").blur(function(evt) {
        if($("#senderAddr").val() != ""){
            verificationAddr(evt, '请输入发件人地址')
        }
    })

    var verificationName = function(evt, tip) {
        var target = evt.currentTarget;
        var val = $(target).val()
        var nextElementSibling = getNextElement($(target)[0])
        if(val.length <= 0) {
            $(target).addClass('error');
            $(nextElementSibling).text(tip)
            $(nextElementSibling).show()
            canCommit = false;
        } else if(val.length > 20) {
            $(target).addClass('error');
            $(nextElementSibling).text('姓名不超过20位字符')
            $(nextElementSibling).show()
            canCommit = false;
        } else {
            $(target).removeClass('error');
            $(nextElementSibling).hide()
            canCommit = true;
        }
    }

    var verificationPhone = function(evt) {
        var phone = /^\d{11}$/;  //手机号
        var checkTel = /^((0\d{2,3})[ -]?)?(\d{7,8})([ -](\d{3,6}))?$/;  //座机号
        var target = evt.currentTarget;
        var val = $(target).val()
        var nextElementSibling = getNextElement($(target)[0])
        if(val.length <= 0) {
            $(target).addClass('error');
            $(nextElementSibling).text('请输入联系电话')
            $(nextElementSibling).show()
            canCommit = false;
        } else if(val.length > 20 || val.length < 7) {
            $(target).addClass('error');
            $(nextElementSibling).text('联系电话限制7-20位')
            $(nextElementSibling).show()
            canCommit = false;
        }else if(!phone.test(val) && !checkTel.test(val)) {
            $(target).addClass('error');
            $(nextElementSibling).text('联系电话限制7-20位')
            $(nextElementSibling).show()
            canCommit = false;
        } else {
            $(target).removeClass('error');
            $(nextElementSibling).hide()
            canCommit = true;
        }
    }

    var verificationAddr = function(evt, tip) {
        var target = evt.currentTarget;
        var val = $(target).val()
        if(val.length <= 0) {
            $($(target)[0].nextElementSibling).text(tip)
            $($(target)[0].nextElementSibling).show();
            canCommit = false;
        } else {
            $($(target)[0].nextElementSibling).hide();
            canCommit = true;
        }
    }

    var getNextElement = function(node){
        var NextElementNode = node.nextElementSibling||node.nextSibling;
        while(NextElementNode.nodeValue != null){
            NextElementNode = NextElementNode.nextSibling
        }
        return NextElementNode;
    }
});

