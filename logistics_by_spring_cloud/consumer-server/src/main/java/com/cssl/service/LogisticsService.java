package com.cssl.service;

import com.cssl.service.impl.LogisticsServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "logistics-server",fallback = LogisticsServiceHystrix.class)
public interface LogisticsService {
    //调用

    @RequestMapping(value = "mailing/save")
    public String sayHi(@RequestParam String message);
}
