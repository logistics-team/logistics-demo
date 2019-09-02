package com.cssl.service;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(value = "LOGISTICS-SERVER",fallback = LogisticsService.class)
public class LogisticsService {
    //调用
}
