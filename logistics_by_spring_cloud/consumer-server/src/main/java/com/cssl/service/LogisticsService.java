package com.cssl.service;

import com.cssl.config.ServiceFeignConfiguration;
import com.cssl.service.impl.LogisticsServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.util.Map;


@FeignClient(value = "logistics-server",fallback = LogisticsServiceHystrix.class,configuration = ServiceFeignConfiguration.class)//
public interface LogisticsService {
    //调用

    //显示管理后台订单
    @RequestMapping(value = "orders/show", method = RequestMethod.POST, consumes = "application/json")
    String show(@RequestParam(value = "id") int id,@RequestParam(value = "page") int page,@RequestParam(value = "limit") int limit);

    //测试方法
    @RequestMapping(value = "mailing/test", method = RequestMethod.POST, consumes = "application/json")
//    public Object find(@RequestBody Map<String,Object> map);
    String find(@RequestBody LogisticsStatus status);

    //测试表单提交
    @RequestMapping(value = "mailing/save", method = RequestMethod.POST, consumes = "application/json")
    String save(@RequestBody ExpressGoods goods);

    //测试json
    @RequestMapping(value = "mailing/json", method = RequestMethod.POST, consumes = "application/json")
    String getJson();
    //表单提交
    @RequestMapping(value = "mailing/submit", method = RequestMethod.POST, consumes = "application/json")
    String isOk(@RequestBody ExpressGoods goods);

    //表单提交
    @RequestMapping(value = "mailing/submitOrders", method = RequestMethod.POST, consumes = "application/json")
    String confirmOrder(Map<String, Object> map);


}

