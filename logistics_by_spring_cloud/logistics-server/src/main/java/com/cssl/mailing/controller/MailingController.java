package com.cssl.mailing.controller;



import com.cssl.mailing.service.IExpress_goodsService;
import com.cssl.mailing.service.IExpress_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;


@RestController
@RequestMapping("mailing")
public class MailingController {
    @Autowired
    private IExpress_goodsService goodsService;
    @Autowired
    private IExpress_userService userService;
    @RequestMapping("save")
    public Object save(@RequestBody Express_goods goods){
        if (goods == null) {
            System.out.println("null");
//            return "信息传入为空，请核对！";
            return null;
        }
        return goods;
    }
//    public String saveMailing(LocalDateTime eg_gmt_create, Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context,
//                              LocalDateTime eu_gmt_create, LocalDateTime eu_gmt_modified, String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id,
//                              Integer ea_receipt_id, String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id, Integer ec_sender_id,
//                              Integer ea_sender_id, String eu_sender_phone, Integer eg_id){  //Express_goods goods, Express_user user
//        System.out.println("weight = " + weight);
//        System.out.println("eg_appraised_price = " + eg_appraised_price);
//        System.out.println("it_id = " + it_id);
////        if (null==goods||null==user){
////            System.out.println("null");
////            return "信息传入为空，请核对！";
////        }
//        //传入物品信息
//        int i = 1;//goodsService.saveGoods(goods);
//        System.out.println("i = " + i);
//        if (i<=0){
//            return "物品信息填写有误！";
//        }
//        //传入收寄人信息
//        int i1 = 1;//userService.saveExpress_user(user);
//        System.out.println("i1 = " + i1);
//        if (i1<=0){
//            return "收寄人信息填写有误！";
//        }
//        return "OK";
//    }

    @PostMapping("test")
    public Object testfind(@RequestBody Logistics_status status){
//        Logistics_status stu = (Logistics_status) map.get("stu");
        return status;
    }
}
