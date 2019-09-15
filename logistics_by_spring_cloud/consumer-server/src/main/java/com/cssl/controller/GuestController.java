package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.service.AddressInfo;
import com.cssl.service.UserService;
import com.cssl.util.AddressResolutionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/guest")
@Controller
public class GuestController {

    //智能填写
    @Autowired
    private AddressInfo addressInfo;

    @ResponseBody
    @RequestMapping("/smartFillAddress")
    public String smartAddress(String addressInfo){
        System.out.println("addressInfo = " + addressInfo);
        Map<String,String> map = new HashMap<>();
        map.put("code","1000");
        map.put("msg","ok");
        map.put("data","1000");
        return JSON.toJSONString(map);
    }
}
