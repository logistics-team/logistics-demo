package com.cssl.mailing.controller;



<<<<<<< HEAD
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import com.cssl.mailing.service.IExpress_goodsService;
import com.cssl.mailing.service.IExpress_userService;
import com.cssl.mailing.service.ILogisticsOrdersService;
=======
import com.cssl.mailing.service.IExpress_goodsService;
import com.cssl.mailing.service.IExpress_userService;
>>>>>>> remotes/origin/ljx
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.util.List;
<<<<<<< HEAD
import java.util.Map;


@RestController
//@Controller
@RequestMapping("mailing")
public class MailingController {
    @Autowired
    private ILogisticsOrdersService ordersService;
    @Autowired
    private IExpress_goodsService goodsService;
    @Autowired
    private IExpress_userService userService;
    @Autowired
    private IExpressProvincesCityAreasService cityAreasService;

    @RequestMapping("json")
    public String getJSON(){
        return cityAreasService.getJson();
    }

    @PostMapping("submitOrders")
    public Object submitOrders(@RequestBody Map<String,Object> map){
        LogisticsOrders orders = ordersService.generateOrders(map);
        String url = null;
        if (orders!=null) {
            System.out.println("orders = " + orders);
            url = "redirect:/staticFiles/pages/placeOrder.html?orderId=" + orders.getLoId();  //返回  沙箱支付地址  + 一个订单号
        }else {
            url = "redirect:/staticFiles/pages/placeOrder.html";
        }
        return url;//传输地址判断是否添加成功！
    }

//    @RequestMapping("save") //寄件保存
//    public Object save(@RequestBody ExpressGoods goods){
//
////        System.out.println("goods = " + goods);
//        LogisticsOrders orders = ordersService.generateOrders(goods);
//        String url = null;
//        if (orders!=null) {
////            System.out.println("orders = " + orders);
//            url = "redirect:/staticFiles/pages/placeOrder.html?orderId=" + orders.getLoId();  //返回一个订单号
//        }else {
//            url = "redirect:/staticFiles/pages/placeOrder.html";
//        }
//
//        return url;//传输地址判断是否添加成功！
//
//    }

=======


@RestController
@RequestMapping("mailing")
public class MailingController {
    @Autowired
    private IExpress_goodsService goodsService;
    @Autowired
    private IExpress_userService userService;
    @RequestMapping("save")
    public Object save(@RequestBody ExpressUser goods){
        if (goods == null) {
            System.out.println("null");
//            return "信息传入为空，请核对！";
            return null;
        }
        return goods;
    }

>>>>>>> remotes/origin/ljx

    @PostMapping("test")
    public Object testfind(@RequestBody LogisticsStatus status){
//        LogisticsStatus stu = (LogisticsStatus map.get("stu");
        return status;
    }

    @RequestMapping("findAll")
    public Object findAll() {
        List<ExpressUser> list = userService.list();
        list.forEach(express_user -> System.out.println("express_user = " + express_user));
        return userService.list();
    }


}
