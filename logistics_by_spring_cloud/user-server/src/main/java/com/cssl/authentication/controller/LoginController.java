package com.cssl.authentication.controller;

import com.cssl.authentication.service.ILogisticsUserService;
import com.cssl.entity.LogisticsUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class LoginController {


    @Autowired
    private ILogisticsUserService userService;

    /**
     * 登陆
     * @param phone 手机号码
     * @param password 密码
     */
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(String phone, String password) {
        return userService.login(phone,password,"123");
    }

    @RequestMapping(value = "/findUserByPhone") //用手机号查找用户信息
    public LogisticsUser findUserByPhone(String phone){
        return userService.findUserByPhone(phone);
    }

}
