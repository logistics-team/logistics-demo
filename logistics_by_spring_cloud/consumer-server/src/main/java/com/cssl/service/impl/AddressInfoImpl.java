package com.cssl.service.impl;

import com.cssl.service.AddressInfo;
import com.cssl.service.LogisticsService;
import com.cssl.service.UserService;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
