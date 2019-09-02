package com.cssl.controller;

import com.cssl.service.LogisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsumerController {
    @Autowired
    private LogisticsService logisticsService;
    @RequestMapping("save")
    public String save(String message){
        return logisticsService.sayHi(message);
    }
}
