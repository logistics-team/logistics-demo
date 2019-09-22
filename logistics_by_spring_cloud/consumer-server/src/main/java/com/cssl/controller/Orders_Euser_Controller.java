package com.cssl.controller;


import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("admin")
@RestController
public class Orders_Euser_Controller {

    private UserService us;
    @Autowired
    public UserService userService(UserService us){
        this.us = us;
        return this.us;
    }

    @RequestMapping("/e_user")//获取所有收寄件人
    public String e_user(@RequestParam(required=false,name="id",defaultValue="0")String id, int page, int limit){
        //System.out.println("收寄件人,id:"+id+",page:"+page+",limit:"+limit);
        String s=us.e_user(id,page,limit);
        //System.out.println("收寄件人获取到的数据:"+s);
        return s;
    }

}