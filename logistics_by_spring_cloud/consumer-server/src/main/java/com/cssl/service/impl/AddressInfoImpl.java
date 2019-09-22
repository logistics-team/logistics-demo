package com.cssl.service.impl;

import com.alibaba.fastjson.JSON;
import com.cssl.service.AddressInfo;
import com.cssl.service.LogisticsService;
import com.cssl.util.AddressResolutionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AddressInfoImpl implements AddressInfo {

    private LogisticsService logisticsService;
    @Autowired
    public LogisticsService logisticsService(LogisticsService logisticsService){
        this.logisticsService = logisticsService;
        return this.logisticsService;
    }
    @Override
    public String findAddrByProvincesCity(String addr_p,String addr_c) {
        return logisticsService.findAddrByProvincesCity(addr_p, addr_c);
    }

    @Override
    public String getAddressDataInfo(String parentCode) {
        return logisticsService.getAddressDataInfo(parentCode);
    }

    @Override
    public String findAddrData(String addressInfo) {
        System.out.println("addressInfo = " + addressInfo);
        List<Map<String, String>> list = AddressResolutionUtil.addressResolution(addressInfo);

        Map<String, String> addr = null;
        if (list.get(0)!=null){
            addr = list.get(0);
        }
        String province = addr.get("province");
        String city = addr.get("city");
        String areas = addr.get("areas");

        addr.get("rname");
        addr.get("address");
        addr.get("phoneNum");


        Map<String,Object> map = new HashMap<>();
        map.put("code","1000");
        map.put("data",addr);
//        map.put("code","0");
        map.put("msg","智能填写失败！");
        System.out.println("map = " + map);

        return JSON.toJSONString(map);
    }

    @Override
    public String addAddressData(Map<String, Object> map) {
        System.out.println("name"+map.get("name"));
        System.out.println("addressType"+map.get("addressType"));
        return logisticsService.addAddress(map);
    }

    @Override
    public String showAddressById(Integer pageIndex, Integer pageSize, Integer uid) {
        return logisticsService.showAddressUserById(pageIndex,pageSize,uid);
    }

    @Override
    public String echoData(Integer aId) {
        //编辑地址回显
        return logisticsService.echoData(aId);
    }

    @Override
    public String deleteAddress(Integer aId) {
        return logisticsService.deleteAddress(aId);
    }

    @Override
    public String updateAddress(Map<String, Object> map) {
        return logisticsService.updateAddress(map);
    }
}
