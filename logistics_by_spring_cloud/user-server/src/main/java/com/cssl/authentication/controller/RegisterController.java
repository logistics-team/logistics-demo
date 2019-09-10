package com.cssl.authentication.controller;

import com.cssl.authentication.service.ILogisticsUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @Autowired
    private ILogisticsUserService userService;


    @RequestMapping("register")
    public String register(String phone,String password,String messageCode){
        String register = userService.register(phone, password,messageCode);
        return register;
    }
}
