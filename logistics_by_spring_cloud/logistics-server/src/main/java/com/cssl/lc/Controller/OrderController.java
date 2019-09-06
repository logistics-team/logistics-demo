package com.cssl.lc.Controller;

import com.cssl.entity.LogisticsOrders;
import com.cssl.lc.service.Express_ordersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    private Express_ordersService order;
    //展示所有的订单
    @RequestMapping("/getAllOrders")
    public List<LogisticsOrders> getAllOrders(){
        return  order.showAllOrders();
    }
}
