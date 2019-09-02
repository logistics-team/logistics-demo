package com.cssl.controller;

import com.cssl.entity.Express_goods;
import com.cssl.entity.Express_user;
import com.cssl.service.LogisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@RestController
public class ConsumerController {
    @Autowired
    private LogisticsService logisticsService;
    @RequestMapping("save")
    public Object save(Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context,
                        String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id,Integer ea_receipt_id,
                       String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id,Integer ec_sender_id,
                        Integer ea_sender_id, String eu_sender_phone, Integer eg_id){
        LocalDateTime now = LocalDateTime.now();
        System.out.println("now = " + now);
//        System.out.println("name = " + name);
//        Express_goods goods = new Express_goods();
//        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
//        goods.setWeight(bigDecimal);
//        goods.setEg_appraised_price(bigDecimal);
//        goods.setIt_id(1);
//        goods.setEg_gmt_create(LocalDateTime.now());
//        goods.setEg_special_context("这是一个马踏飞燕");
//        Express_user user = new Express_user(1, LocalDateTime.now(), LocalDateTime.now(), "李嘉欣",
//                430000, 430900, 430903, "17700244411",
//                "刘成", 430000, 431100, 431101,
//                "15116114097", 2);
//        System.out.println("user = " + user);
//        System.out.println("goods = " + goods);
        return logisticsService.save(now, it_id, weight, eg_appraised_price, eg_special_context,
                now, now,eu_receipt_name,ep_receipt_id,ec_receipt_id, ea_receipt_id,eu_receipt_phone,
                eu_sender_name, ep_sender_id,ec_sender_id, ea_sender_id, eu_sender_phone, eg_id); //logisticsService.save(goods,user);
    }
}
