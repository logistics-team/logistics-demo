package com.cssl.orders.controller;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsUser;
import com.cssl.orders.service.UserService;
import com.cssl.orders.service.impl.UserSerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class User_Controller {
    @Autowired
    private UserService us;

    @RequestMapping("user_s")//查询,显示数据
    public String select(String name,int page,int limit){
        String list=us.selectAll(name,page,limit);
        return list;
    }
    @RequestMapping("user_update")//修改数据
    public int user_update(int id,int block){
        return us.update(id,block);
    }

    @RequestMapping("user_black")//黑名单者编号
    public String user_black(){
        return us.user_black();
    }
}
