package com.cssl.orders.controller;


import com.cssl.entity.LogisticsOrders;
import com.cssl.orders.service.EuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class Euser_Controller {

    @Autowired
    private EuserService euserService;

    @RequestMapping("user_select")
    public String selectAll(String id,int page,int limit){
            int id2=0;
            String name="";
        try {
            id2=Integer.parseInt(id);
        }catch (Exception e){
            name=id;
        }
        String s=euserService.selectAll(id2,name,page,limit);
        return s;
    }
}
