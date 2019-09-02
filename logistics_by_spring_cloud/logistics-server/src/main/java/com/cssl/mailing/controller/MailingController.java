package com.cssl.mailing.controller;


import com.cssl.mailing.entity.Express_goods;
import com.cssl.mailing.entity.Express_user;
import com.cssl.mailing.service.IExpress_goodsService;
import com.cssl.mailing.service.IExpress_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("mailing")
public class MailingController {
    @Autowired
    private IExpress_goodsService goodsService;
    @Autowired
    private IExpress_userService userService;
    @RequestMapping("save")
    public String saveMailing(String message){  //Express_goods goods, Express_user user
//        if (null==goods||null==user){
//            return "信息传入为空，请核对！";
//        }
//        //传入物品信息
//        int i = goodsService.saveGoods(goods);
//        if (i<=0){
//            return "物品信息填写有误！";
//        }
//        //传入收寄人信息
//        int i1 = userService.saveExpress_user(user);
//        if (i1<=0){
//            return "收寄人信息填写有误！";
//        }
        return "OK:"+message;
    }
}
