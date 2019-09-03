$(document).on('click','.nodeTab',function(){
    $(this).addClass('nodeActive').siblings('.nodeTab').not(this).removeClass('nodeActive');
    $('.tabSwitchContent').hide();
    $('.tabSwitchContent').eq($(this).index()).show();
})

$(function(){
    $('.nodeTab').eq(0).addClass('nodeActive');
    $('.nodeTab').last().css("margin-right",'0');
})