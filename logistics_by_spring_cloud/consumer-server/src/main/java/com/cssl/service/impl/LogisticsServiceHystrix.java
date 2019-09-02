package com.cssl.service.impl;

import com.cssl.service.LogisticsService;
import org.springframework.stereotype.Component;

@Component
public class LogisticsServiceHystrix implements LogisticsService {

    @Override
    public String sayHi(String message) {
        return "客户端连接失败！请检查网络信息"+message;
    }
}
