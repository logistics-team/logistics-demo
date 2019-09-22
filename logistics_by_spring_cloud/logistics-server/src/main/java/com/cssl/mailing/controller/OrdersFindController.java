package com.cssl.mailing.controller;



import com.cssl.mailing.service.ILogisticsOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ordersFind")
public class OrdersFindController {
    @Autowired
    private ILogisticsOrdersService ordersService;

    @RequestMapping("findOrdersByTexts")
    String findOrdersByTexts(@RequestBody String orderTextInput){
        return ordersService.findOrdersByTexts(orderTextInput);
    }


}
