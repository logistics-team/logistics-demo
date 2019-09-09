package com.cssl.service.impl;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.service.LogisticsService;
import org.springframework.stereotype.Component;

import java.util.Map;


@Component
public class LogisticsServiceHystrix implements LogisticsService {

//    @Override
//    public String sayHi(String message) {
//        return "客户端连接失败！请检查网络信息"+message;
//    }



    //测试
    @Override
    public String find(LogisticsStatus status) {
        return "找不到资源";
    }

    @Override
    public String save(ExpressGoods goods) {
        return "客户端连接失败！请检查网络信息";
    }

    @Override
    public String getJson() {
        return "客服端网络问题！";
    }

    @Override
    public String isOk(ExpressGoods goods) {
        return "网络连接中断！！!...";
    }

    @Override
    public String confirmOrder(Map<String, Object> map) {
        //提交失败！返回原页面
        return "redirect:/staticFiles/pages/placeOrder.html";
    }

//    @Override
//    public String save(LocalDateTime eg_gmt_create, Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context, LocalDateTime eu_gmt_create, LocalDateTime eu_gmt_modified, String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id, Integer ea_receipt_id, String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id, Integer ec_sender_id, Integer ea_sender_id, String eu_sender_phone, Integer eg_id) {
//        return "客户端连接失败！请检查网络信息";
//    }


}
