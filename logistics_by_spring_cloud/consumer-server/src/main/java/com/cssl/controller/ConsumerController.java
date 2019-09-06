package com.cssl.controller;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.ExpressUser;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
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
    @RequestMapping("customerService_submit")
    public String isOK(){
        System.out.println("提交了");

        ExpressGoods goods = new ExpressGoods();
        return logisticsService.isOk(goods);
    }

//    @RequestMapping("json")
//    public String getJson(){
//
//        System.out.println("获取省市县");
//        return logisticsService.getJson();
//    }

//    @RequestMapping("go_login")         //重定向到登录页面
//    public String goLogin(){
//        return "/html/login"; //redirect:/html/backstage.html
//    }

    @RequestMapping("go_backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/html/backstage.html"; //redirect:/html/backstage.html
    }
    @ResponseBody
    @RequestMapping("find")
    public Object find(){
        LogisticsStatus status = new LogisticsStatus();
        status.setLsId(1);
        status.setLsContext("sss");
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
//    @ResponseBody

    @PostMapping("confirmSent")
    public String confirmOrder(String senderProvince,String senderCity,String senderArea,String sendAddress,String sendName,String sendTel, String sendPhone,
                               String acceptProvince,String acceptCity,String acceptArea,String receiveAddress,String receiveName, String receiveTel, String receivePhone,
                               String goodsType,String goodsWeight,String insuranceMoney,String goodsRemarks,String transport){
        System.out.println("senderProvince = " + senderProvince);
        System.out.println("senderCity = " + senderCity);
        System.out.println("senderArea = " + senderArea);
        System.out.println("sendAddress = " + sendAddress);
        System.out.println("sendName = " + sendName);
        System.out.println("sendTel = " + sendTel);
        System.out.println("sendPhone = " + sendPhone);
        System.out.println("acceptProvince = " + acceptProvince);
        System.out.println("acceptCity = " + acceptCity);
        System.out.println("acceptArea = " + acceptArea);
        System.out.println("receiveAddress = " + receiveAddress);
        System.out.println("receiveName = " + receiveName);
        System.out.println("receiveTel = " + receiveTel);
        System.out.println("receivePhone = " + receivePhone);
        System.out.println("goodsType = " + goodsType);
        System.out.println("goodsWeight = " + goodsWeight);
        System.out.println("insuranceMoney = " + insuranceMoney);
        System.out.println("goodsRemarks = " + goodsRemarks);
        System.out.println("transport = " + transport);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sendProvince",senderProvince);
        map.put("sendCity",senderCity);
        map.put("sendArea",senderArea);
        map.put("sendName",sendName);
        map.put("sendTel",sendTel);
        map.put("sendPhone",sendPhone);
        map.put("receiveProvince",acceptProvince);
        map.put("receiveCity",acceptCity);
        map.put("receiveArea",acceptArea);
        map.put("receiveAddress",receiveAddress);
        map.put("receiveName",receiveName);
        map.put("receiveTel",receiveTel);
        map.put("receivePhone",receivePhone);
        map.put("goodsType",goodsType);
        map.put("goodsWeight",goodsWeight);
        map.put("insuranceMoney",insuranceMoney);
        map.put("goodsRemarks",goodsRemarks);
        map.put("transport",transport);
//        logisticsService.confirmOrder(map);
//        System.out.println("logisticsService.confirmOrder(map) = " + logisticsService.confirmOrder(map));//转发到沙箱支付页面
        return  logisticsService.confirmOrder(map);
    }

    @RequestMapping("save")
    public String save(){
        LocalDateTime now = LocalDateTime.now();
        System.out.println("now = " + now);
//        System.out.println("name = " + name);
        ExpressGoods goods = new ExpressGoods();
        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
        goods.setWeight(bigDecimal);
        goods.setEgAppraisedPrice(bigDecimal);
        goods.setItId(1);
        goods.setEgGmtCreate(LocalDateTime.now());
        goods.setEgSpecialContext("四羊方尊鼎");
        ExpressUser user = new ExpressUser(1, LocalDateTime.now(), LocalDateTime.now(), "阿虎",
                430000, 431100, 431125, "13544250013",
                "王根基", 620000, 620800, 620822,
                "19989592362");
        System.out.println("user = " + user);
        System.out.println("goods = " + goods);
        //数据嵌入
        System.out.println("goods = " + goods);
        String save = logisticsService.save(goods);
        System.out.println("save = " + save);
        return save; //logisticsService.save(goods,user);
    }
}
