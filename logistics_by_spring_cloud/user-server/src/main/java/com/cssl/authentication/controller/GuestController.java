package com.cssl.authentication.controller;

import com.cssl.authentication.service.ILogisticsUserService;
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
    private ILogisticsUserService userService;

    @RequestMapping(value = "/getPasswordByPhone", method = RequestMethod.POST)
    public String getPasswordByPhone(String phone){
        return userService.getPasswordByPhone(phone);
    }


    @RequestMapping(value = "/getRoleByPhone", method = RequestMethod.POST)
    public String getRoleByPhone(String phone){
        return userService.getRoleByPhone(phone);
    }

    //用户登录
    @RequestMapping(value = "/userLogin", method = RequestMethod.POST)
    public String userLogin(@RequestParam String phone, @RequestParam String password,String messageCode) {
        String messCode = "1234";
        String loginMessage = userService.login(phone, password, messCode);
//        System.out.println("loginMessage = " + loginMessage);
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
