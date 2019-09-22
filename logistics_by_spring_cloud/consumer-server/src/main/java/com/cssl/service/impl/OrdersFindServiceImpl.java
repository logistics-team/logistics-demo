package com.cssl.service.impl;

import com.cssl.service.LogisticsService;
import com.cssl.service.OrdersFindService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdersFindServiceImpl implements OrdersFindService {

    private LogisticsService service;

    @Autowired
    public LogisticsService service(LogisticsService service) {
        this.service = service;
        return this.service;
    }

    /**
     * 订单查询
     * @param orderTextInput
     * @return
     */
    @Override
    public String findOrdersByTexts(String orderTextInput) {
        return service.findOrdersByTexts(orderTextInput);
    }
}
