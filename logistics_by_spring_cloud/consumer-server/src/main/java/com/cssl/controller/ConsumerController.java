package com.cssl.controller;

import com.cssl.entity.Express_goods;
import com.cssl.entity.Express_user;
import com.cssl.entity.Logistics_status;
import com.cssl.service.LogisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ConsumerController {
    @Autowired
    private LogisticsService logisticsService;

    @RequestMapping("go_login")         //重定向到登录页面
    public String goLogin(){
        return "/html/login"; //redirect:/html/backstage.html
    }

    @RequestMapping("go_backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/html/backstage.html"; //redirect:/html/backstage.html
    }
    @ResponseBody
    @RequestMapping("find")
    public Object find(){
        Logistics_status status = new Logistics_status();
        status.setLs_id(1);
        status.setLs_context("sss");
        Map<String, Object> map = new HashMap<>();
        map.put("stu",status);
        System.out.println("map = " + map);
        return logisticsService.find(status);
    }

            //参数
//    Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context,
//    String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id,Integer ea_receipt_id,
//    String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id,Integer ec_sender_id,
//    Integer ea_sender_id, String eu_sender_phone, Integer eg_id
    @ResponseBody
    @RequestMapping("save")
    public Object save(){
        LocalDateTime now = LocalDateTime.now();
        System.out.println("now = " + now);
//        System.out.println("name = " + name);
        Express_goods goods = new Express_goods();
        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
        goods.setWeight(bigDecimal);
        goods.setEg_appraised_price(bigDecimal);
        goods.setIt_id(1);
        goods.setEg_gmt_create(LocalDateTime.now());
        goods.setEg_special_context("这是一个马踏飞燕");
        Express_user user = new Express_user(1, LocalDateTime.now(), LocalDateTime.now(), "李嘉欣",
                430000, 430900, 430903, "17700244411",
                "刘成", 430000, 431100, 431101,
                "15116114097", 2);
        System.out.println("user = " + user);
        System.out.println("goods = " + goods);
        //数据嵌入
        goods.setExpress_user(user);
        System.out.println("goods = " + goods);
        return logisticsService.save(goods); //logisticsService.save(goods,user);
    }
}
