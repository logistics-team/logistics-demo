package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.service.AddressInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/address")
@Controller
public class AddressController {

    private AddressInfo addressInfo;
    @Autowired
    public AddressInfo addressInfo(AddressInfo addressInfo){
        this.addressInfo = addressInfo;
        return this.addressInfo;
    }

    /**
     * 三级联动 2
     * @param parentCode 父级ID
     * @return
     */
    @ResponseBody
    @RequestMapping("getAddressDataInfo")
    public String getAddressDataInfo(String parentCode){
        return addressInfo.getAddressDataInfo(parentCode);
    }
}
