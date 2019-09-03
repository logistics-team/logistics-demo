package com.cssl.mailing.controller;



import com.cssl.mailing.service.IExpress_goodsService;
import com.cssl.mailing.service.IExpress_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.util.List;


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
