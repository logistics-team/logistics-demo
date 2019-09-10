package com.cssl.authentication.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.authentication.service.ILogisticsUserService;
import com.cssl.authentication.shiro.bean.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

//游客
@RestController
@RequestMapping("/guest")
public class GuestController {
    @Autowired
    private ResultMap resultMap;
    @Autowired
    private ILogisticsUserService userService;


    @RequestMapping(value = "/enter", method = RequestMethod.GET)
    public ResultMap login() {
        return resultMap.success().message("欢迎进入，您的身份是游客");
    }


    @RequestMapping(value = "/getMessage", method = RequestMethod.GET)
    public ResultMap submitLogin() {
        return resultMap.success().message("您拥有获得该接口的信息的权限！");
    }

    //用户登录
    @RequestMapping(value = "/userLogin", method = RequestMethod.POST)
    public String userLogin(@RequestParam String phone, @RequestParam String password) {
        String messCode = "1234";
        String loginMessage = userService.login(phone, password, messCode);
        System.out.println("loginMessage = " + loginMessage);
        return loginMessage;
    }

    //用户注册
    @RequestMapping("/userRegister")
    public String register(String phone,String password,String messageCode){
        String register = userService.register(phone, password, messageCode);
//        System.out.println("register = " + register);
        return register;
    }
    //发送短信
    @RequestMapping("/sendMessages")
    public String sendMessages(String phoneNum){
        System.out.println("phoneNum = " + phoneNum);
        return userService.sendMessages(phoneNum);
    }


    //用户是否存在
    @RequestMapping("/isExistence")
    public String isExistence(String phone){
        return userService.isExistence(phone);
    }
}
