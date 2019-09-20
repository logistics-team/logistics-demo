$(function () {
    var allExexpress;
    var pageIndex = 1;
    var pageSize = 5;
    var message;
    //配送 退货 待签收
    $("div#All table").on("click", "input", function () {
        alert("ss");
    });
    //页面点击
    $("div.page1").on("click", "a", function () {
        pageIndex=$(this).text()=="首页"?1:$(this).text();
        allOrders(allExexpress,pageIndex,pageSize);
    });
    $(window).ready(function () {
        if($("#AllExexpress").val()=='')
            allExexpress = null;
        allOrders(allExexpress,pageIndex,pageSize);
    });

    function allOrders(allExexpress, pageIndex, pageSize) {
        $("div table tbody tr").remove();
        $.getJSON("../../guest/showOrdersAll", "search=" + allExexpress + "&pageIndex=" + pageIndex + "&pageSize=" + pageSize, function (json) {
            var num8 = 0;
            var num9 = 0;
            var num10 = 0;
            for (var i = 0; i < json.list.length; i++) {
                var indexAll = json.list[i];
                var loGmtCreate = indexAll.loGmtCreate;
                var newGetCreate = loGmtCreate.split("T");
                var time = newGetCreate[0] + ' ' + newGetCreate[1];
                var tr = "<tr>";
                tr += "<td style='padding-left:10px;width:131px;text-align: center;'>" + indexAll.loId + "</td>";
                tr += "<td width='108px;' style='text-align: center;'>" + time + "</td>";
                tr += " <td width='126px;' style='text-align: center;'>" + indexAll.transportationStatus.tsId + "</td>";
                tr += "<td width='130px;' style='text-align: center;'>" + indexAll.expressUser.euSenderName + "</th>";
                tr += "<td width='82px;' class='center' style='text-align: center;'>" + indexAll.logisticsStatus.lsContext + "</td>";
                tr += "<td width='130px;' style='text-align: center;'>" + indexAll.expressUser.euReceiptName + "</td>";
                if (indexAll.logisticsStatus.lsId <= 7) {
                    //运送中Transport
                    tr += "<td style='padding:0 13px 0 10px;width:118px'><input type='button' style='padding: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;border-radius: 4px;cursor: pointer;' class='forBtn blueBtn' value='配送中'><input type='button' style='padding: 2px;width:46px; margin-left: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;cursor: pointer;'  class='forBtn blueBtn' value='退货' name='" + indexAll.loId + "'></td></tr>"
                }
                if (indexAll.logisticsStatus.lsId == 8) {
                    //未取件Not
                    num8 = indexAll.transportationStatus.countId;
                    tr += "<td style='padding:0 13px 0 10px;width:118px'><input type='button' style='padding: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;border-radius: 4px;cursor: pointer;' value='待签收' class='forBtn blueBtn' name='" + indexAll.loId + "'><input type='button' style='padding: 2px;width:46px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;cursor: pointer; margin-left: 2px;'  class='forBtn blueBtn' value='退货' name='" + indexAll.loId + "'></td></tr>";
                }
                if (indexAll.logisticsStatus.lsId == 9) {
                    //已签收 SignIn
                    num9 = indexAll.transportationStatus.countId;
                    tr += "<td style='padding:0 13px 0 10px;width:118px'><input type='button'  style='padding: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;border-radius: 4px;cursor: pointer;' class='forBtn blueBtn' value='已签收'><input type='button' style='padding: 2px;width:46px; margin-left: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;cursor: pointer;'  class='forBtn blueBtn' value='退货' name='" + indexAll.loId + "'></td></tr>";
                }
                if (indexAll.logisticsStatus.lsId == 10) {
                    //已取消Cancel
                    num10 = indexAll.transportationStatus.countId;
                    tr += "<td style='padding:0 13px 0 10px;width:118px'><input type='button'  style='padding: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;border-radius: 4px;cursor: pointer;' class='forBtn blueBtn' value='已取消'><input type='button' style='padding: 2px;width:46px; margin-left: 2px;color: #fff;  background-color: #0293ED;  border-color: #0293ED;cursor: pointer;'  class='forBtn blueBtn' value='退货' name='0' disabled='disabled'></td></tr>";
                }
                if (allExexpress == 0 || allExexpress==null) {
                    $("div#All table tbody").append(tr);
                    var num= $("span.index1").text();
                    if(num=="(0)"){
                        $("span.index1").text("(" + json.total + ")");
                        $("span.index3").text("(" + (json.total - num8 - num9 - num10) + ")");
                        $("span.index2").text("(" + num8 + ")");
                        $("span.index4").text("(" + num9 + ")");
                        $("span.index5").text("(" + num10 + ")");
                    }
                }
                if (indexAll.logisticsStatus.lsId <=7&indexAll.logisticsStatus.lsId>0) {
                    $("div#Transport table tbody").append(tr);
                }
                if (indexAll.logisticsStatus.lsId ==8) {
                    $("div#Not table tbody").append(tr);
                }
                if (indexAll.logisticsStatus.lsId ==9) {
                    $("div#SignIn table tbody").append(tr);
                }
                if (indexAll.logisticsStatus.lsId ==10) {
                    $("div#Cancel table tbody").append(tr);
                }
            }
            $.each($("div.page1 a").not(".link"),function (i,item) {
                this.remove();
            })
            for (var j = 1; j <= json.lastPage; j++) {
                var a = "<a class='current btn' style='color: #fff;' href='#' name='" + (j - 1) + "'>" + j + "</a>";
                if(allExexpress == 0 || allExexpress==null){
                    $("div.listAll").append(a);
                }
                if(allExexpress=="8"){
                    $("div.list2").append(a);
                }if(allExexpress=="7"){
                    $("div.list3").append(a);
                }if(allExexpress=="9"){
                    $("div.list4").append(a);
                }if(allExexpress=="10"){
                    $("div.list5").append(a);
                }
            }
        });
    }

    //点击nodeTab 已取消 导航栏
    $("div.netQueryInput").children().click(function () {
        pageIndex=1;
        if($(this).index()==0)
            allExexpress="0";
        if($(this).index()==1)
            allExexpress="8";
        if($(this).index()==2)
            allExexpress="7";
        if($(this).index()==3)
            allExexpress="9";
        if($(this).index()==4)
            allExexpress="10";
        allOrders(allExexpress,pageIndex,pageSize);
    })
})