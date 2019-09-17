package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.service.AddressInfo;
import com.cssl.util.AddressResolutionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/anon")
@Controller
public class GuestController {

    //智能填写
    private AddressInfo addressInfo;
    @Autowired
    public AddressInfo addressInfo(AddressInfo addressInfo){
        this.addressInfo = addressInfo;
        return this.addressInfo;
    }


    @ResponseBody
    @RequestMapping("smartFillAddress")
    public String smartAddress(String addressInfo){
        System.out.println("addressInfo = " + addressInfo);
        List<Map<String, String>> list = AddressResolutionUtil.addressResolution(addressInfo);
        Map<String,Object> map = new HashMap<>();
        Map<String, String> addr = null;
        if (list!=null){
            addr = list.get(0);
            map.put("code","1000");
            map.put("data",addr);
        }else {
            map.put("code","0");
            map.put("msg","智能填写失败！");
        }
        System.out.println("map = " + map);
        return JSON.toJSONString(map);
    }



}
