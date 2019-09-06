package com.cssl.mailing.service.impl;

import com.cssl.entity.*;
import com.cssl.mailing.mapper.Express_ordersDao;
import com.cssl.mailing.service.Express_ordersService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

//@Service
public class Express_ordersServiceImpl implements Express_ordersService {
    @Resource
    Express_ordersDao ordersDao;


    @Override
    public List<LogisticsOrders> showAllOrders() {
        return ordersDao.showAllOrders();
    }
}
