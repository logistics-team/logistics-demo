package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import com.cssl.orders.mapper.Orders_index;
import com.cssl.orders.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class OrederSerImpl implements OrdersService {
    @Autowired
   private Orders_index osss;

    @Override
    public List<LogisticsOrders> show(int id) {
        System.out.println("id:"+id);
        List<LogisticsOrders> lo=osss.show(id);
        for (LogisticsOrders  s:lo) {
            System.out.println(s);
        }
        return lo;
    }

    @Override
    public List<LogisticsStatus> statue(int id) {
        List<LogisticsStatus> list=osss.l_statue(id);
        return list;
    }

    @Override
    @Transactional
    public int ts_update(TransportationStatus ts) {
        int i=osss.ts_update(ts);
        return i;
    }
}
