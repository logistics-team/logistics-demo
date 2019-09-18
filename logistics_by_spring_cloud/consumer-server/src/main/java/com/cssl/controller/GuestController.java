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


    /**
     * 智能识别 2
     * @param addressInfo
     * @return
     */
    @ResponseBody
    @RequestMapping("smartFillAddress")
    public String smartAddress(String addressInfo){
        String s = this.addressInfo.findAddrData(addressInfo);
        return s;
    }



}
