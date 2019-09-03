package com.cssl.service;

import com.cssl.service.impl.LogisticsServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@FeignClient(value = "logistics-server",fallback = LogisticsServiceHystrix.class)
public interface LogisticsService {
    //调用

    @RequestMapping(value = "mailing/test", method = RequestMethod.POST, consumes = "application/json")
//    public Object find(@RequestBody Map<String,Object> map);
    String find(@RequestBody LogisticsStatus status);


    @RequestMapping(value = "mailing/save", method = RequestMethod.POST, consumes = "application/json")
    String save(@RequestBody ExpressGoods goods);
}


//    String save(@RequestParam(value = "eg_gmt_create") LocalDateTime eg_gmt_create, @RequestParam(value = "it_id") Integer it_id, @RequestParam(value = "weight") BigDecimal weight,
//                       @RequestParam(value = "eg_appraised_price") BigDecimal eg_appraised_price,@RequestParam(value = "eg_special_context")  String eg_special_context,
//                       @RequestParam(value = "eu_gmt_create") LocalDateTime eu_gmt_create,@RequestParam(value = "eu_gmt_modified")  LocalDateTime eu_gmt_modified,
//                       @RequestParam(value = "eu_receipt_name") String eu_receipt_name,@RequestParam(value = "ep_receipt_id")  Integer ep_receipt_id,@RequestParam(value = "ec_receipt_id")  Integer ec_receipt_id,
//                       @RequestParam(value = "ea_receipt_id") Integer ea_receipt_id,@RequestParam(value = "eu_receipt_phone")  String eu_receipt_phone, @RequestParam(value = "eu_sender_name") String eu_sender_name,
//                       @RequestParam(value = "ep_sender_id") Integer ep_sender_id, @RequestParam(value = "ec_sender_id") Integer ec_sender_id, @RequestParam(value = "ea_sender_id") Integer ea_sender_id,
//                       @RequestParam(value = "eu_sender_phone") String eu_sender_phone,@RequestParam(value = "eg_id")  Integer eg_id);
//}
