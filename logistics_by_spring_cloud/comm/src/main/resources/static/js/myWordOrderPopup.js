$(function () {
  'use strict';
  
  // 打开弹框
  $(document).on('click','#complaintDetail',function() {
      $('.complaintDetail').show();
  })
    // 关闭弹框
    $(document).on('click','.closeBtn',function(evt) {
        $('.complaintDetail').hide();
        $('.urgent').hide();
        $('.feedback').hide();
        $('.myRating').hide();
    })
    // 关闭弹框
    $(document).on('click','.cancel',function(evt) {
        $('.complaintDetail').hide();
        $('.urgent').hide();
        $('.feedback').hide();
        $('.myRating').hide();
    })
    $('#evaluationDiv button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $('.ratingImg').attr('src', '/staticFiles/assets/img/star' + $(this).attr('data-value') + '.png');
    })


  var feedbackInfo = '' 
  if(feedbackInfo) {
    $('.feedbackInfo').css('display', 'block')
    $('.noContent').css('display', 'none')
  } else {
    $('.feedbackInfo').css('display', 'none')
    $('.noContent').css('display', 'block')
  }
});