$(document).ready(function(){
  'use strict';

  // 打开弹框
  $(document).on('click','.tab',function(evt) {
      $('.line').css('left', $(evt.target).offset().left - 12);
        if (evt.target.innerText === '职位信息') {
            $('.line-postion').prev().css("color","#666666")
            $('.line-postion').prev().prev().css("color","#56A2F5")
            $('.content0').css('display', 'block');
            $('.content1').css('display', 'none');
            $('.line-postion').css("left", "431px");
            stopScroll();
        } else {
            $('.line-postion').prev().css("color","#56A2F5")
            $('.line-postion').prev().prev().css("color","#666666")
          $('.content0').css('display', 'none');
          $('.content1').css('display', 'block');
          $('.line-postion').css("left", "595px");
          autoScroll();
        }
  })

    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    var flag = theRequest.tab;
    if (flag == "2"){
        $('.line-postion').prev().css("color","#56A2F5")
        $('.line-postion').prev().prev().css("color","#666666")
        $('.content0').css('display', 'none');
        $('.content1').css('display', 'block');
        $('.line-postion').css("left", "595px");
        autoScroll();
    }
    else{
        $('.line-postion').prev().css("color","#666666")
        $('.line-postion').prev().prev().css("color","#56A2F5")
        $('.content0').css('display', 'block');
        $('.content1').css('display', 'none');
        $('.line-postion').css("left", "431px");
        stopScroll();
    }

  var imgData = [
    '/staticFiles/assets/img/pxfzt1.png',
    '/staticFiles/assets/img/pxfzt2.png',
    '/staticFiles/assets/img/pxfzt3.png',
    '/staticFiles/assets/img/pxfzt4.png',
    '/staticFiles/assets/img/pxfzt5.png',
    '/staticFiles/assets/img/pxfzt6.png',
    '/staticFiles/assets/img/pxfzt1.png',
    '/staticFiles/assets/img/pxfzt2.png',
    '/staticFiles/assets/img/pxfzt3.png'
  ]
  for(var i = 0; i < imgData.length; i++) {
    $('#imgBannerWrap .imgList .imgbg').eq(i).css({'background-image':'url(' + imgData[i] + ')', 'background-repeat': 'no-repeat', 'background-size': '100%'});
  }
  var intervalId = -1
  var scrollIndex = 0
function autoScroll() {
    var index = scrollIndex % 3;
    if(index === 0 && scrollIndex > 1) {
      $('#imgBannerWrap .imgList').css({ left: 0});
      index = 1;
      scrollIndex = 1;
    }
    $('#imgBannerWrap .imgList').animate({ left: - index * 1008 }, 800);
    $('#imgBannerWrap .dotli').eq((index+1) % 2).css({'background': '#E0E0E0'});
    $('#imgBannerWrap .dotli').eq(index % 2).css({'background': '#56A2F5'});
    scrollIndex++;
    clearTimeout(intervalId);
    intervalId = setTimeout(autoScroll, 5000)
  }
 function stopScroll() {
    clearTimeout(intervalId);
    scrollIndex = 0;
    $('#imgBannerWrap .imgList').css({ left: 0});
    $('#imgBannerWrap .dotli').eq(0).css({'background': '#E0E0E0'});
  }

});