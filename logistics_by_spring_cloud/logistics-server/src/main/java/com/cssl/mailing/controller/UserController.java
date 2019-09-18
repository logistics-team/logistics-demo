package com.cssl.mailing.controller;

import com.cssl.entity.LogisticsUser;
import com.cssl.mailing.service.LogisticsUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.util.Map;
@RequestMapping("userController")
@RestController
public class UserController {
    @Autowired
    LogisticsUserService logisticsUserService;
    @RequestMapping(value = "upateUser", method = RequestMethod.POST, consumes = "application/json")
    public String updateUser(@RequestBody LogisticsUser logisticsUser){
        Integer integer = logisticsUserService.updateUser(logisticsUser);
        //System.out.println("integer"+integer);
        //System.out.println("元多");
        return integer.toString();
    }
}
